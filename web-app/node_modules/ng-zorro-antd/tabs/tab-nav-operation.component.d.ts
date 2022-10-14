/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, TemplateRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzTabNavItemDirective } from './tab-nav-item.directive';
export declare class NzTabNavOperationComponent implements OnDestroy {
    cdr: ChangeDetectorRef;
    private elementRef;
    items: NzTabNavItemDirective[];
    addable: boolean;
    addIcon: string | TemplateRef<NzSafeAny>;
    readonly addClicked: EventEmitter<void>;
    readonly selected: EventEmitter<NzTabNavItemDirective>;
    closeAnimationWaitTimeoutId: number;
    menuOpened: boolean;
    private readonly element;
    constructor(cdr: ChangeDetectorRef, elementRef: ElementRef<HTMLElement>);
    onSelect(item: NzTabNavItemDirective): void;
    onContextmenu(item: NzTabNavItemDirective, e: MouseEvent): void;
    showItems(): void;
    menuVisChange(visible: boolean): void;
    getElementWidth(): number;
    getElementHeight(): number;
    ngOnDestroy(): void;
}
