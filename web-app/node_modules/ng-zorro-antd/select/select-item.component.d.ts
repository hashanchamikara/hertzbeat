/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, EventEmitter, TemplateRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
export declare class NzSelectItemComponent {
    private elementRef;
    disabled: boolean;
    label: string | number | null | undefined;
    deletable: boolean;
    removeIcon: TemplateRef<NzSafeAny> | null;
    contentTemplateOutletContext: NzSafeAny | null;
    contentTemplateOutlet: string | TemplateRef<NzSafeAny> | null;
    readonly delete: EventEmitter<MouseEvent>;
    constructor(elementRef: ElementRef);
    onDelete(e: MouseEvent): void;
}
