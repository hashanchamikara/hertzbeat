/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, EventEmitter } from '@angular/core';
export declare class NzRowExpandButtonDirective {
    private elementRef;
    expand: boolean;
    spaceMode: boolean;
    readonly expandChange: EventEmitter<any>;
    constructor(elementRef: ElementRef);
    onHostClick(): void;
}
