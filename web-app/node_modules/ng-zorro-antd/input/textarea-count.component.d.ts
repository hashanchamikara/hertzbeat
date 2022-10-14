/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { NzInputDirective } from './input.directive';
export declare class NzTextareaCountComponent implements AfterContentInit, OnDestroy {
    private renderer;
    private elementRef;
    nzInputDirective: NzInputDirective;
    nzMaxCharacterCount: number;
    nzComputeCharacterCount: (v: string) => number;
    nzFormatter: (cur: number, max: number) => string;
    private configChange$;
    private destroy$;
    constructor(renderer: Renderer2, elementRef: ElementRef<HTMLElement>);
    ngAfterContentInit(): void;
    setDataCount(value: string): void;
    ngOnDestroy(): void;
}
