/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
export declare class NzBadgeSupComponent implements OnInit, OnChanges {
    private elementRef;
    nzOffset?: [number, number];
    nzTitle?: string | null | undefined;
    nzStyle: {
        [key: string]: string;
    } | null;
    nzDot: boolean;
    nzOverflowCount: number;
    disableAnimation: boolean;
    nzCount?: number | TemplateRef<NzSafeAny>;
    noAnimation: boolean;
    maxNumberArray: string[];
    countArray: number[];
    count: number;
    countSingleArray: number[];
    constructor(elementRef: ElementRef);
    generateMaxNumberArray(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
