/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.usthe.collector.collect.http;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.usthe.collector.collect.AbstractCollect;
import com.usthe.collector.collect.common.http.CommonHttpClient;
import com.usthe.collector.dispatch.DispatchConstants;
import com.usthe.collector.util.CollectUtil;
import com.usthe.collector.util.CollectorConstants;
import com.usthe.collector.util.JsonPathParser;
import com.usthe.common.entity.job.Metrics;
import com.usthe.common.entity.job.protocol.HttpProtocol;
import com.usthe.common.entity.message.CollectRep;
import com.usthe.common.util.CommonConstants;
import com.usthe.common.util.IpDomainUtil;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.net.util.Base64;
import org.apache.http.HttpHeaders;
import org.apache.http.HttpHost;
import org.apache.http.HttpStatus;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.AuthCache;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.client.methods.RequestBuilder;
import org.apache.http.client.protocol.HttpClientContext;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.auth.DigestScheme;
import org.apache.http.impl.client.BasicAuthCache;
import org.apache.http.impl.client.BasicCredentialsProvider;
import org.apache.http.protocol.HttpContext;
import org.apache.http.util.EntityUtils;
import org.springframework.http.HttpMethod;
import org.springframework.util.StringUtils;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import com.usthe.collector.collect.http.promethus.AbstractPrometheusParse;
import com.usthe.collector.collect.http.promethus.PrometheusParseCreater;


import javax.net.ssl.SSLException;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InterruptedIOException;
import java.net.ConnectException;
import java.net.UnknownHostException;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;


/**
 * http https collect
 * @author tomsun28
 * @date 2021/11/4 15:37
 */
@Slf4j
public class HttpCollectImpl extends AbstractCollect {

    private HttpCollectImpl() {}

    public static HttpCollectImpl getInstance() {
        return Singleton.INSTANCE;
    }

    @Override
    public void collect(CollectRep.MetricsData.Builder builder,
                        long appId, String app, Metrics metrics) {
        long startTime = System.currentTimeMillis();
        // ????????????
        try {
            validateParams(metrics);
        } catch (Exception e) {
            builder.setCode(CollectRep.Code.FAIL);
            builder.setMsg(e.getMessage());
            return;
        }
        HttpContext httpContext = createHttpContext(metrics.getHttp());
        HttpUriRequest request = createHttpRequest(metrics.getHttp());
        try {
            CloseableHttpResponse response = CommonHttpClient.getHttpClient()
                    .execute(request, httpContext);
            int statusCode = response.getStatusLine().getStatusCode();
            log.debug("http response status: {}", statusCode);
            if (statusCode < HttpStatus.SC_OK || statusCode >= HttpStatus.SC_BAD_REQUEST) {
                // 1XX 4XX 5XX ????????? ??????
                builder.setCode(CollectRep.Code.FAIL);
                builder.setMsg("StatusCode " + statusCode);
                return;
            } else {
                // 2xx 3xx ????????? ??????
                String resp = EntityUtils.toString(response.getEntity(), StandardCharsets.UTF_8);
                // ?????????????????????????????????
                if (resp == null || "".equals(resp)) {
                    log.info("http response entity is empty, status: {}.", statusCode);
                }
                Long responseTime  = System.currentTimeMillis() - startTime;
                String parseType = metrics.getHttp().getParseType();
                try {
                    if (DispatchConstants.PARSE_DEFAULT.equals(parseType)) {
                        parseResponseByDefault(resp, metrics.getAliasFields(), metrics.getHttp(), builder, responseTime);
                    } else if (DispatchConstants.PARSE_JSON_PATH.equals(parseType)) {
                        parseResponseByJsonPath(resp, metrics.getAliasFields(), metrics.getHttp(), builder, responseTime);
                    } else if (DispatchConstants.PARSE_PROMETHEUS.equals(parseType)) {
                        parseResponseByPrometheus(resp, metrics.getAliasFields(), metrics.getHttp(), builder);
                    } else if (DispatchConstants.PARSE_XML_PATH.equals(parseType)) {
                        parseResponseByXmlPath(resp, metrics.getAliasFields(), metrics.getHttp(), builder);
                    } else if (DispatchConstants.PARSE_WEBSITE.equals(parseType)){
                        parseResponseByWebsite(resp, metrics.getAliasFields(), metrics.getHttp(), builder, responseTime);
                    } else if (DispatchConstants.PARSE_SITE_MAP.equals(parseType)) {
                        parseResponseBySiteMap(resp, metrics.getAliasFields(), builder);
                    } else {
                        parseResponseByDefault(resp, metrics.getAliasFields(), metrics.getHttp(), builder, responseTime);
                    }
                } catch (Exception e) {
                    log.info("parse error: {}.", e.getMessage(), e);
                    builder.setCode(CollectRep.Code.FAIL);
                    builder.setMsg("parse response data error:" + e.getMessage());
                }
            }
        } catch (ClientProtocolException e1) {
            String errorMsg;
            if (e1.getCause() != null) {
                errorMsg = e1.getCause().getMessage();
            } else {
                errorMsg = e1.getMessage();
            }
            log.error(errorMsg);
            builder.setCode(CollectRep.Code.UN_CONNECTABLE);
            builder.setMsg(errorMsg);
        } catch (UnknownHostException e2) {
            // ???????????????
            log.info(e2.getMessage());
            builder.setCode(CollectRep.Code.UN_REACHABLE);
            builder.setMsg("unknown host");
        } catch (InterruptedIOException | ConnectException | SSLException e3) {
            // ??????????????????
            log.info(e3.getMessage());
            builder.setCode(CollectRep.Code.UN_CONNECTABLE);
            builder.setMsg(e3.getMessage());
        } catch (IOException e4) {
            // ??????IO??????
            log.info(e4.getMessage());
            builder.setCode(CollectRep.Code.FAIL);
            builder.setMsg(e4.getMessage());
        } catch (Exception e) {
            // ????????????
            log.error(e.getMessage(), e);
            builder.setCode(CollectRep.Code.FAIL);
            builder.setMsg(e.getMessage());
        } finally {
            if (request != null) {
                request.abort();
            }
        }
    }

    private void validateParams(Metrics metrics) throws Exception {
        if (metrics == null || metrics.getHttp() == null) {
            throw new Exception("Http/Https collect must has http params");
        }
        HttpProtocol httpProtocol = metrics.getHttp();
        if (httpProtocol.getUrl() == null
                || "".equals(httpProtocol.getUrl())
                || !httpProtocol.getUrl().startsWith("/")) {
            httpProtocol.setUrl(httpProtocol.getUrl() == null ? "/" : "/" + httpProtocol.getUrl().trim());
        }
    }

    private void parseResponseByWebsite(String resp, List<String> aliasFields, HttpProtocol http,
                                        CollectRep.MetricsData.Builder builder, Long responseTime) {
        CollectRep.ValueRow.Builder valueRowBuilder = CollectRep.ValueRow.newBuilder();
        // ???????????????????????????
        int keywordNum = CollectUtil.countMatchKeyword(resp, http.getKeyword());
        for (String alias : aliasFields) {
            if (CollectorConstants.RESPONSE_TIME.equalsIgnoreCase(alias)) {
                valueRowBuilder.addColumns(responseTime.toString());
            } else if (CollectorConstants.KEYWORD.equalsIgnoreCase(alias)) {
                valueRowBuilder.addColumns(Integer.toString(keywordNum));
            } else {
                valueRowBuilder.addColumns(CommonConstants.NULL_VALUE);
            }
        }
        builder.addValues(valueRowBuilder.build());
    }

    private void parseResponseBySiteMap(String resp, List<String> aliasFields,
                                        CollectRep.MetricsData.Builder builder) {
        List<String> siteUrls = new LinkedList<>();
        // ??????xml??????
        boolean isXmlFormat = true;
        try {
            DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
            DocumentBuilder db = dbf.newDocumentBuilder();
            Document document = db.parse(new ByteArrayInputStream(resp.getBytes(StandardCharsets.UTF_8)));
            NodeList urlList = document.getElementsByTagName("url");
            for (int i = 0; i < urlList.getLength(); i++) {
                Node urlNode = urlList.item(i);
                NodeList childNodes = urlNode.getChildNodes();
                for (int k = 0; k < childNodes.getLength(); k++) {
                    Node currentNode = childNodes.item(k);
                    // ?????????text?????????node??????element?????????node
                    if (currentNode.getNodeType() == Node.ELEMENT_NODE && "loc".equals(currentNode.getNodeName())) {
                        //?????????loc????????????
                        siteUrls.add(currentNode.getFirstChild().getNodeValue());
                        break;
                    }
                }
            }
        } catch (Exception e) {
            log.warn(e.getMessage());
            isXmlFormat = false;
        }
        // ???xml???????????? ???txt????????????
        if (!isXmlFormat) {
            try {
                String[] urls = resp.split("\n");
                // ???????????????URL
                if (IpDomainUtil.isHasSchema(urls[0])) {
                    siteUrls.addAll(Arrays.asList(urls));
                }
            } catch (Exception e) {
                log.warn(e.getMessage(), e);
            }
        }
        // ????????????????????????site url ????????? http status code, responseTime, ????????????
        for (String siteUrl : siteUrls) {
            String errorMsg = "";
            Integer statusCode = null;
            long startTime = System.currentTimeMillis();
            try {
                HttpGet httpGet = new HttpGet(siteUrl);
                CloseableHttpResponse response = CommonHttpClient.getHttpClient().execute(httpGet);
                statusCode = response.getStatusLine().getStatusCode();
                EntityUtils.consume(response.getEntity());
            } catch (ClientProtocolException e1) {
                if (e1.getCause() != null) {
                    errorMsg = e1.getCause().getMessage();
                } else {
                    errorMsg = e1.getMessage();
                }
            } catch (UnknownHostException e2) {
                // ???????????????
                errorMsg = "unknown host";
            } catch (InterruptedIOException | ConnectException | SSLException e3) {
                // ??????????????????
                errorMsg = "connect error: " + e3.getMessage();
            } catch (IOException e4) {
                // ??????IO??????
                errorMsg = "io error: " + e4.getMessage();
            } catch (Exception e) {
                errorMsg = "error: " + e.getMessage();
            }
            long responseTime = System.currentTimeMillis() - startTime;
            CollectRep.ValueRow.Builder valueRowBuilder = CollectRep.ValueRow.newBuilder();
            for (String alias : aliasFields) {
                if (CollectorConstants.URL.equalsIgnoreCase(alias)) {
                    valueRowBuilder.addColumns(siteUrl);
                } else if (CollectorConstants.STATUS_CODE.equalsIgnoreCase(alias)) {
                    valueRowBuilder.addColumns(statusCode == null ?
                            CommonConstants.NULL_VALUE : String.valueOf(statusCode));
                } else if (CollectorConstants.RESPONSE_TIME.equalsIgnoreCase(alias)) {
                    valueRowBuilder.addColumns(String.valueOf(responseTime));
                } else if (CollectorConstants.ERROR_MSG.equalsIgnoreCase(alias)) {
                    valueRowBuilder.addColumns(errorMsg);
                } else {
                    valueRowBuilder.addColumns(CommonConstants.NULL_VALUE);
                }
            }
            builder.addValues(valueRowBuilder.build());
        }
    }

    private void parseResponseByXmlPath(String resp, List<String> aliasFields, HttpProtocol http,
                                        CollectRep.MetricsData.Builder builder) {
    }

    private void parseResponseByJsonPath(String resp, List<String> aliasFields, HttpProtocol http,
                                         CollectRep.MetricsData.Builder builder, Long responseTime) {
        List<Map<String, Object>> results = JsonPathParser.parseContentWithJsonPath(resp, http.getParseScript());
        int keywordNum = CollectUtil.countMatchKeyword(resp, http.getKeyword());
        for (int i = 0; i < results.size(); i++) {
            Map<String, Object> stringMap = results.get(i);
            CollectRep.ValueRow.Builder valueRowBuilder = CollectRep.ValueRow.newBuilder();
            // ??????????????????????????????????????????????????????stringMap????????????????????????app-elasticsearch.yml???name: nodes
            if (stringMap == null) {
                continue;
            }
            for (String alias : aliasFields) {
                Object value = stringMap.get(alias);
                if (value != null) {
                    valueRowBuilder.addColumns(String.valueOf(value));
                } else {
                    if (alias.startsWith("$.")) {
                        List<Map<String, Object>> subResults = JsonPathParser.parseContentWithJsonPath(resp, http.getParseScript() + alias.substring(1));
                        if (subResults != null && subResults.size() > i) {
                            Object resultValue = subResults.get(i);
                            valueRowBuilder.addColumns(resultValue == null ? CommonConstants.NULL_VALUE : String.valueOf(resultValue));
                        } else {
                            valueRowBuilder.addColumns(CommonConstants.NULL_VALUE);
                        }
                    } else if (CollectorConstants.RESPONSE_TIME.equalsIgnoreCase(alias)) {
                        valueRowBuilder.addColumns(responseTime.toString());
                    } else if (CollectorConstants.KEYWORD.equalsIgnoreCase(alias)) {
                        valueRowBuilder.addColumns(Integer.toString(keywordNum));
                    } else {
                        valueRowBuilder.addColumns(CommonConstants.NULL_VALUE);
                    }
                }
            }
            builder.addValues(valueRowBuilder.build());
        }
    }

    private void parseResponseByPrometheus(String resp, List<String> aliasFields, HttpProtocol http,
                                           CollectRep.MetricsData.Builder builder) {
        AbstractPrometheusParse prometheusParser = PrometheusParseCreater.getPrometheusParse();
        prometheusParser.handle(resp,aliasFields,http,builder);
    }

    private void parseResponseByDefault(String resp, List<String> aliasFields, HttpProtocol http,
                                        CollectRep.MetricsData.Builder builder, Long responseTime) {
        JsonElement element = JsonParser.parseString(resp);
        int keywordNum = CollectUtil.countMatchKeyword(resp, http.getKeyword());
        if (element.isJsonArray()) {
            JsonArray array = element.getAsJsonArray();
            for (JsonElement jsonElement : array) {
                if (jsonElement.isJsonObject()) {
                    JsonObject object = jsonElement.getAsJsonObject();
                    CollectRep.ValueRow.Builder valueRowBuilder = CollectRep.ValueRow.newBuilder();
                    for (String alias : aliasFields) {
                        JsonElement valueElement = object.get(alias);
                        if (valueElement != null) {
                            String value = valueElement.getAsString();
                            valueRowBuilder.addColumns(value);
                        } else {
                            if (CollectorConstants.RESPONSE_TIME.equalsIgnoreCase(alias)) {
                                valueRowBuilder.addColumns(responseTime.toString());
                            } else if (CollectorConstants.KEYWORD.equalsIgnoreCase(alias)) {
                                valueRowBuilder.addColumns(Integer.toString(keywordNum));
                            } else {
                                valueRowBuilder.addColumns(CommonConstants.NULL_VALUE);
                            }
                        }
                    }
                    builder.addValues(valueRowBuilder.build());
                }
            }
        } else if (element.isJsonObject()) {
            JsonObject object = element.getAsJsonObject();
            CollectRep.ValueRow.Builder valueRowBuilder = CollectRep.ValueRow.newBuilder();
            for (String alias : aliasFields) {
                JsonElement valueElement = object.get(alias);
                if (valueElement != null) {
                    String value = valueElement.getAsString();
                    valueRowBuilder.addColumns(value);
                } else {
                    valueRowBuilder.addColumns(CommonConstants.NULL_VALUE);
                }
            }
            builder.addValues(valueRowBuilder.build());
        }
    }

    /**
     * create httpContext
     *
     * @param httpProtocol http protocol
     * @return context
     */
    private HttpContext createHttpContext(HttpProtocol httpProtocol) {
        HttpProtocol.Authorization auth = httpProtocol.getAuthorization();
        if (auth != null && DispatchConstants.DIGEST_AUTH.equals(auth.getType())) {
            HttpClientContext clientContext = new HttpClientContext();
            if (StringUtils.hasText(auth.getDigestAuthUsername())
                    && StringUtils.hasText(auth.getDigestAuthPassword())) {
                CredentialsProvider provider = new BasicCredentialsProvider();
                UsernamePasswordCredentials credentials
                        = new UsernamePasswordCredentials(auth.getBasicAuthUsername(), auth.getBasicAuthPassword());
                provider.setCredentials(AuthScope.ANY, credentials);
                AuthCache authCache = new BasicAuthCache();
                authCache.put(new HttpHost(httpProtocol.getHost(), Integer.parseInt(httpProtocol.getPort())), new DigestScheme());
                clientContext.setCredentialsProvider(provider);
                clientContext.setAuthCache(authCache);
                return clientContext;
            }
        }
        return null;
    }

    /**
     * ??????http???????????????????????????
     * @param httpProtocol http????????????
     * @return ?????????
     */
    private HttpUriRequest createHttpRequest(HttpProtocol httpProtocol) {
        RequestBuilder requestBuilder;
        // method
        String httpMethod = httpProtocol.getMethod().toUpperCase();
        if (HttpMethod.GET.matches(httpMethod)) {
            requestBuilder =  RequestBuilder.get();
        } else if (HttpMethod.POST.matches(httpMethod)) {
            requestBuilder =  RequestBuilder.post();
        } else if (HttpMethod.PUT.matches(httpMethod)) {
            requestBuilder = RequestBuilder.put();
        } else if (HttpMethod.DELETE.matches(httpMethod)) {
            requestBuilder = RequestBuilder.delete();
        } else if (HttpMethod.PATCH.matches(httpMethod)) {
            requestBuilder = RequestBuilder.patch();
        } else {
            // not support the method
            log.error("not support the http method: {}.", httpProtocol.getMethod());
            return null;
        }
        // params
        Map<String, String> params = httpProtocol.getParams();
        if (params != null && !params.isEmpty()) {
            for (Map.Entry<String, String> param : params.entrySet()) {
                if (StringUtils.hasText(param.getValue())) {
                    requestBuilder.addParameter(param.getKey(), param.getValue());
                }
            }
        }
        // The default request header can be overridden if customized
        // keep-alive
        requestBuilder.addHeader(HttpHeaders.CONNECTION, "keep-alive");
        requestBuilder.addHeader(HttpHeaders.USER_AGENT,"Mozilla/5.0 (Windows NT 6.1; WOW64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.76 Safari/537.36");
        // headers  The custom request header is overwritten here
        Map<String, String> headers = httpProtocol.getHeaders();
        if (headers != null && !headers.isEmpty()) {
            for (Map.Entry<String, String> header : headers.entrySet()) {
                if (StringUtils.hasText(header.getValue())) {
                    requestBuilder.addHeader(header.getKey(), header.getValue());
                }
            }
        }
        // add accept
        if (DispatchConstants.PARSE_DEFAULT.equals(httpProtocol.getParseType())
                || DispatchConstants.PARSE_JSON_PATH.equals(httpProtocol.getParseType())) {
            requestBuilder.addHeader(HttpHeaders.ACCEPT, "application/json");
        } else if (DispatchConstants.PARSE_XML_PATH.equals(httpProtocol.getParseType())) {
            requestBuilder.addHeader(HttpHeaders.ACCEPT, "text/xml,application/xml");
        } else if (DispatchConstants.PARSE_PROMETHEUS.equals(httpProtocol.getParseType())) {
            requestBuilder.addHeader(HttpHeaders.ACCEPT, DispatchConstants.PARSE_PROMETHEUS_ACCEPT);
            requestBuilder.addHeader(HttpHeaders.ACCEPT_ENCODING, "gzip");
        } else {
            requestBuilder.addHeader(HttpHeaders.ACCEPT, "*/*");
        }

        // ??????????????????Bearer Token??????
        if (httpProtocol.getAuthorization() != null) {
            HttpProtocol.Authorization authorization = httpProtocol.getAuthorization();
            if (DispatchConstants.BEARER_TOKEN.equals(authorization.getType())) {
                // ????????? ???token?????????header??????
                String value = DispatchConstants.BEARER + " " + authorization.getBearerTokenToken();
                requestBuilder.addHeader(HttpHeaders.AUTHORIZATION, value);
            } else if (DispatchConstants.BASIC_AUTH.equals(authorization.getType())) {
                if (StringUtils.hasText(authorization.getBasicAuthUsername())
                        && StringUtils.hasText(authorization.getBasicAuthPassword())) {
                    String authStr = authorization.getBasicAuthUsername() + ":" + authorization.getBasicAuthPassword();
                    String encodedAuth = new String(Base64.encodeBase64(authStr.getBytes(StandardCharsets.UTF_8)), StandardCharsets.UTF_8);
                    requestBuilder.addHeader(HttpHeaders.AUTHORIZATION,  DispatchConstants.BASIC + " " + encodedAuth);
                }
            }
        }

        // ????????????????????????post?????????params
        if(StringUtils.hasLength(httpProtocol.getPayload())){
            requestBuilder.setEntity(new StringEntity(httpProtocol.getPayload(), StandardCharsets.UTF_8));
        }

        // uri
        if (IpDomainUtil.isHasSchema(httpProtocol.getHost())) {
            requestBuilder.setUri(httpProtocol.getHost() + ":" + httpProtocol.getPort() + httpProtocol.getUrl());
        } else {
            boolean ssl = Boolean.parseBoolean(httpProtocol.getSsl());
            if (ssl) {
                requestBuilder.setUri("https://" + httpProtocol.getHost() + ":" + httpProtocol.getPort() + httpProtocol.getUrl());
            } else {
                requestBuilder.setUri("http://" + httpProtocol.getHost() + ":" + httpProtocol.getPort() + httpProtocol.getUrl());
            }
        }

        // custom timeout
        int timeout = CollectUtil.getTimeout(httpProtocol.getTimeout(), 0);
        if (timeout > 0) {
            RequestConfig requestConfig = RequestConfig.custom()
                    .setConnectTimeout(timeout)
                    .setSocketTimeout(timeout)
                    .setRedirectsEnabled(true)
                    .build();
            requestBuilder.setConfig(requestConfig);
        }
        return requestBuilder.build();
    }

    private static class Singleton {
        private static final HttpCollectImpl INSTANCE = new HttpCollectImpl();
    }
}
