/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Direction, Directionality } from '@angular/cdk/bidi';
import { ElementRef, OnDestroy, OnInit } from '@angular/core';
export declare type NzButtonGroupSize = 'large' | 'default' | 'small';
export declare class NzButtonGroupComponent implements OnDestroy, OnInit {
    private elementRef;
    private directionality;
    nzSize: NzButtonGroupSize;
    dir: Direction;
    private destroy$;
    constructor(elementRef: ElementRef, directionality: Directionality);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
