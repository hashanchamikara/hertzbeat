/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter } from '@angular/core';
import { BooleanInput } from 'ng-zorro-antd/core/types';
export declare class NzTreeNodeCheckboxComponent {
    static ngAcceptInputType_nzDisabled: BooleanInput;
    nzChecked?: boolean;
    nzIndeterminate?: boolean;
    nzDisabled?: boolean;
    readonly nzClick: EventEmitter<MouseEvent>;
    onClick(e: MouseEvent): void;
}
