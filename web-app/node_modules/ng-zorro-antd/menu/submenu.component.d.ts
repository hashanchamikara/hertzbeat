/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Direction, Directionality } from '@angular/cdk/bidi';
import { ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, TemplateRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { BooleanInput } from 'ng-zorro-antd/core/types';
import { NzMenuItemDirective } from './menu-item.directive';
import { MenuService } from './menu.service';
import { NzMenuModeType, NzMenuThemeType } from './menu.types';
import { NzSubmenuService } from './submenu.service';
export declare class NzSubMenuComponent implements OnInit, OnDestroy, AfterContentInit, OnChanges {
    nzMenuService: MenuService;
    private cdr;
    nzSubmenuService: NzSubmenuService;
    private platform;
    isMenuInsideDropDown: boolean;
    private directionality;
    noAnimation?: NzNoAnimationDirective | undefined;
    static ngAcceptInputType_nzOpen: BooleanInput;
    static ngAcceptInputType_nzDisabled: BooleanInput;
    nzMenuClassName: string;
    nzPaddingLeft: number | null;
    nzTitle: string | TemplateRef<void> | null;
    nzIcon: string | null;
    nzOpen: boolean;
    nzDisabled: boolean;
    readonly nzOpenChange: EventEmitter<boolean>;
    cdkOverlayOrigin: ElementRef | null;
    listOfNzSubMenuComponent: QueryList<NzSubMenuComponent> | null;
    listOfNzMenuItemDirective: QueryList<NzMenuItemDirective> | null;
    private level;
    private destroy$;
    position: string;
    triggerWidth: number | null;
    theme: NzMenuThemeType;
    mode: NzMenuModeType;
    inlinePaddingLeft: number | null;
    overlayPositions: import("@angular/cdk/overlay").ConnectionPositionPair[];
    isSelected: boolean;
    isActive: boolean;
    dir: Direction;
    /** set the submenu host open status directly **/
    setOpenStateWithoutDebounce(open: boolean): void;
    toggleSubMenu(): void;
    setMouseEnterState(value: boolean): void;
    setTriggerWidth(): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    constructor(nzMenuService: MenuService, cdr: ChangeDetectorRef, nzSubmenuService: NzSubmenuService, platform: Platform, isMenuInsideDropDown: boolean, directionality: Directionality, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
