/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, EventEmitter, TemplateRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
export declare class NzSelectClearComponent {
    private elementRef;
    clearIcon: TemplateRef<NzSafeAny> | null;
    readonly clear: EventEmitter<MouseEvent>;
    constructor(elementRef: ElementRef);
    onClick(e: MouseEvent): void;
}
