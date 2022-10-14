/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** get some code from https://github.com/angular/material2 */
import { Direction, Directionality } from '@angular/cdk/bidi';
import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, EventEmitter, OnDestroy, OnInit, QueryList, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NzConfigKey, NzConfigService } from 'ng-zorro-antd/core/config';
import { BooleanInput, NumberInput, NzSafeAny, NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { NzAnimatedInterface, NzTabChangeEvent, NzTabPosition, NzTabPositionMode, NzTabsCanDeactivateFn, NzTabScrollEvent, NzTabType } from './interfaces';
import { NzTabNavBarComponent } from './tab-nav-bar.component';
import { NzTabComponent } from './tab.component';
export declare class NzTabSetComponent implements OnInit, AfterContentChecked, OnDestroy, AfterContentInit {
    nzConfigService: NzConfigService;
    private cdr;
    private directionality;
    private router;
    readonly _nzModuleName: NzConfigKey;
    static ngAcceptInputType_nzHideAdd: BooleanInput;
    static ngAcceptInputType_nzHideAll: BooleanInput;
    static ngAcceptInputType_nzCentered: BooleanInput;
    static ngAcceptInputType_nzLinkRouter: BooleanInput;
    static ngAcceptInputType_nzLinkExact: BooleanInput;
    static ngAcceptInputType_nzSelectedIndex: NumberInput;
    get nzSelectedIndex(): number | null;
    set nzSelectedIndex(value: null | number);
    nzTabPosition: NzTabPosition;
    nzTabBarExtraContent?: TemplateRef<void>;
    nzCanDeactivate: NzTabsCanDeactivateFn | null;
    nzAddIcon: string | TemplateRef<NzSafeAny>;
    nzTabBarStyle: {
        [key: string]: string;
    } | null;
    nzType: NzTabType;
    nzSize: NzSizeLDSType;
    nzAnimated: NzAnimatedInterface | boolean;
    nzTabBarGutter?: number;
    nzHideAdd: boolean;
    nzCentered: boolean;
    nzHideAll: boolean;
    nzLinkRouter: boolean;
    nzLinkExact: boolean;
    readonly nzSelectChange: EventEmitter<NzTabChangeEvent>;
    readonly nzSelectedIndexChange: EventEmitter<number>;
    readonly nzTabListScroll: EventEmitter<NzTabScrollEvent>;
    readonly nzClose: EventEmitter<{
        index: number;
    }>;
    readonly nzAdd: EventEmitter<void>;
    get position(): NzTabPositionMode;
    get addable(): boolean;
    get closable(): boolean;
    get line(): boolean;
    get inkBarAnimated(): boolean;
    get tabPaneAnimated(): boolean;
    allTabs: QueryList<NzTabComponent>;
    tabNavBarRef: NzTabNavBarComponent;
    tabs: QueryList<NzTabComponent>;
    dir: Direction;
    private readonly tabSetId;
    private destroy$;
    private indexToSelect;
    private selectedIndex;
    private tabLabelSubscription;
    private tabsSubscription;
    private canDeactivateSubscription;
    constructor(nzConfigService: NzConfigService, cdr: ChangeDetectorRef, directionality: Directionality, router: Router);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    ngAfterContentChecked(): void;
    onClose(index: number, e: MouseEvent): void;
    onAdd(): void;
    private clampTabIndex;
    private createChangeEvent;
    private subscribeToTabLabels;
    private subscribeToAllTabChanges;
    canDeactivateFun(pre: number, next: number): Observable<boolean>;
    clickNavItem(tab: NzTabComponent, index: number, e: MouseEvent): void;
    private isRouterLinkClickEvent;
    contextmenuNavItem(tab: NzTabComponent, e: MouseEvent): void;
    setSelectedIndex(index: number): void;
    getTabIndex(tab: NzTabComponent, index: number): number | null;
    getTabContentId(i: number): string;
    private setUpRouter;
    private updateRouterActive;
    private findShouldActiveTabIndex;
    private isLinkActive;
    private getTabContentMarginValue;
    getTabContentMarginLeft(): string;
    getTabContentMarginRight(): string;
}
