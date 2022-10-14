/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
/**
 * A patch directive to select the element of a component.
 */
export declare class NzElementPatchDirective {
    elementRef: ElementRef;
    get nativeElement(): NzSafeAny;
    constructor(elementRef: ElementRef);
}
