/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { NzResizeService } from './resize';
export declare enum NzBreakpointEnum {
    xxl = "xxl",
    xl = "xl",
    lg = "lg",
    md = "md",
    sm = "sm",
    xs = "xs"
}
export declare type BreakpointMap = {
    [key in NzBreakpointEnum]: string;
};
export declare type BreakpointBooleanMap = {
    [key in NzBreakpointEnum]: boolean;
};
export declare type NzBreakpointKey = keyof typeof NzBreakpointEnum;
export declare const gridResponsiveMap: BreakpointMap;
export declare const siderResponsiveMap: BreakpointMap;
export declare class NzBreakpointService {
    private resizeService;
    private mediaMatcher;
    constructor(resizeService: NzResizeService, mediaMatcher: MediaMatcher);
    subscribe(breakpointMap: BreakpointMap): Observable<NzBreakpointEnum>;
    subscribe(breakpointMap: BreakpointMap, fullMap: true): Observable<BreakpointBooleanMap>;
    private matchMedia;
}
