/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Direction, Directionality } from '@angular/cdk/bidi';
import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMenuModeType, NzMenuThemeType } from './menu.types';
export declare class NzSubmenuNoneInlineChildComponent implements OnDestroy, OnInit, OnChanges {
    private elementRef;
    private directionality;
    menuClass: string;
    theme: NzMenuThemeType;
    templateOutlet: TemplateRef<NzSafeAny> | null;
    isMenuInsideDropDown: boolean;
    mode: NzMenuModeType;
    position: string;
    nzDisabled: boolean;
    nzOpen: boolean;
    readonly subMenuMouseState: EventEmitter<boolean>;
    constructor(elementRef: ElementRef, directionality: Directionality);
    setMouseState(state: boolean): void;
    expandState: string;
    dir: Direction;
    private destroy$;
    ngOnDestroy(): void;
    calcMotionState(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
