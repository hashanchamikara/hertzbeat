/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, Renderer2 } from '@angular/core';
export declare class NzCarouselContentDirective {
    private renderer;
    readonly el: HTMLElement;
    set isActive(value: boolean);
    get isActive(): boolean;
    private _active;
    constructor(elementRef: ElementRef, renderer: Renderer2);
}
