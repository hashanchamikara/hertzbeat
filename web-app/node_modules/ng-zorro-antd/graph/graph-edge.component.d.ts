/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, NgZone, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NzGraphEdge, NzGraphEdgeType } from './interface';
export declare class NzGraphEdgeComponent implements OnInit, OnChanges {
    private elementRef;
    private ngZone;
    private cdr;
    edge: NzGraphEdge;
    edgeType?: NzGraphEdgeType | string;
    customTemplate?: TemplateRef<{
        $implicit: NzGraphEdge;
    }>;
    get id(): string;
    private el;
    private path;
    private line;
    constructor(elementRef: ElementRef<SVGGElement>, ngZone: NgZone, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    initElementStyle(): void;
    setLine(): void;
    setPath(d: string): void;
    setElementData(): void;
}
