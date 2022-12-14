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

package com.usthe.collector.util;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * prometheus-format-text parser
 * @author tom
 * @date 2022/1/9 14:12
 */
public class PrometheusTextParser {

    /**
     * 解析prometheusText
     * @param content 待解析文本内容
     * @return eg:[{'name': 'tom', 'speed': '433'},{'name': 'lili', 'speed': '543'},{'name': 'sam', 'speed': '643'}]
     */
    public static Map<String, List<Map<String, Object>>> parsePrometheusText(String content) {
        String[] lines = content.split("\n");
        Map<String, List<Map<String, Object>>> parseResult = new HashMap<>(8);
        for (String lineTmp : lines) {
            String line = lineTmp.trim();
            if (line.length() == 0 || line.startsWith("#")) {
                continue;
            }
            
        }
        return null;
    }
}
