/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, TemplateRef } from '@angular/core';
import { BooleanInput } from 'ng-zorro-antd/core/types';
export declare class NzDividerComponent {
    private elementRef;
    static ngAcceptInputType_nzDashed: BooleanInput;
    static ngAcceptInputType_nzPlain: BooleanInput;
    nzText?: string | TemplateRef<void>;
    nzType: 'horizontal' | 'vertical';
    nzOrientation: 'left' | 'right' | 'center';
    nzDashed: boolean;
    nzPlain: boolean;
    constructor(elementRef: ElementRef);
}
