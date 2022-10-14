/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { NzCheckboxComponent } from './checkbox.component';
export declare class NzCheckboxWrapperComponent {
    readonly nzOnChange: EventEmitter<any[]>;
    private checkboxList;
    addCheckbox(value: NzCheckboxComponent): void;
    removeCheckbox(value: NzCheckboxComponent): void;
    onChange(): void;
    constructor(renderer: Renderer2, elementRef: ElementRef);
}
