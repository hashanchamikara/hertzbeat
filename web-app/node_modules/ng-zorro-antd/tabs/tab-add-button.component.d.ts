/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, TemplateRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
export declare class NzTabAddButtonComponent {
    private elementRef;
    addIcon: string | TemplateRef<NzSafeAny>;
    private readonly element;
    constructor(elementRef: ElementRef<HTMLElement>);
    getElementWidth(): number;
    getElementHeight(): number;
}
