/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnChanges, SimpleChanges } from '@angular/core';
import { NzResizeDirection } from './resize-handle.component';
export declare const DEFAULT_RESIZE_DIRECTION: NzResizeDirection[];
export declare class NzResizeHandlesComponent implements OnChanges {
    nzDirections: NzResizeDirection[];
    directions: Set<NzResizeDirection>;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
}
