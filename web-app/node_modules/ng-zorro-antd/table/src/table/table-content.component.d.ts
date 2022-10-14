/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { TemplateRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzTableLayout } from '../table.types';
export declare class NzTableContentComponent {
    tableLayout: NzTableLayout;
    theadTemplate: TemplateRef<NzSafeAny> | null;
    contentTemplate: TemplateRef<NzSafeAny> | null;
    listOfColWidth: ReadonlyArray<string | null>;
    scrollX: string | null;
}
