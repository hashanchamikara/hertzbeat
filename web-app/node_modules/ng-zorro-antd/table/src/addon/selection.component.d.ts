/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, EventEmitter } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
export declare class NzTableSelectionComponent {
    private elementRef;
    listOfSelections: Array<{
        text: string;
        onSelect(...args: NzSafeAny[]): NzSafeAny;
    }>;
    checked: boolean;
    disabled: boolean;
    indeterminate: boolean;
    showCheckbox: boolean;
    showRowSelection: boolean;
    readonly checkedChange: EventEmitter<boolean>;
    constructor(elementRef: ElementRef);
    onCheckedChange(checked: boolean): void;
}
