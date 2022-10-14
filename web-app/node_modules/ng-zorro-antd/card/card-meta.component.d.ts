/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, TemplateRef } from '@angular/core';
export declare class NzCardMetaComponent {
    private elementRef;
    nzTitle: string | TemplateRef<void> | null;
    nzDescription: string | TemplateRef<void> | null;
    nzAvatar: TemplateRef<void> | null;
    constructor(elementRef: ElementRef);
}
