/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
export declare class NzThMeasureDirective implements OnChanges {
    private renderer;
    private elementRef;
    changes$: Subject<unknown>;
    nzWidth: string | null;
    colspan: string | number | null;
    colSpan: string | number | null;
    rowspan: string | number | null;
    rowSpan: string | number | null;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
}
