/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterViewInit, ElementRef, OnChanges, Renderer2 } from '@angular/core';
import { BooleanInput } from 'ng-zorro-antd/core/types';
export declare class NzNoAnimationDirective implements OnChanges, AfterViewInit {
    private element;
    private renderer;
    private animationType;
    static ngAcceptInputType_nzNoAnimation: BooleanInput;
    nzNoAnimation: boolean;
    constructor(element: ElementRef, renderer: Renderer2, animationType: string);
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    private updateClass;
}
