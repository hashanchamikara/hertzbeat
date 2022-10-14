/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, Renderer2, TemplateRef } from '@angular/core';
import { BooleanInput } from 'ng-zorro-antd/core/types';
import { NzListItemExtraComponent } from './list-item-cell';
import { NzListComponent } from './list.component';
export declare class NzListItemComponent implements OnDestroy, AfterViewInit {
    private parentComp;
    private cdr;
    static ngAcceptInputType_nzNoFlex: BooleanInput;
    nzActions: Array<TemplateRef<void>>;
    nzContent?: string | TemplateRef<void>;
    nzExtra: TemplateRef<void> | null;
    nzNoFlex: boolean;
    listItemExtraDirective?: NzListItemExtraComponent;
    private itemLayout?;
    private itemLayout$?;
    get isVerticalAndExtra(): boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2, parentComp: NzListComponent, cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
