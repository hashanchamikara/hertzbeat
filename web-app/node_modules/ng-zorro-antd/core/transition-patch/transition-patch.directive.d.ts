/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterViewInit, ElementRef, OnChanges, Renderer2 } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
/**
 * hack the bug
 * angular router change with unexpected transition trigger after calling applicationRef.attachView
 * https://github.com/angular/angular/issues/34718
 */
export declare class NzTransitionPatchDirective implements AfterViewInit, OnChanges {
    private elementRef;
    private renderer;
    hidden: NzSafeAny;
    setHiddenAttribute(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(): void;
    ngAfterViewInit(): void;
}
