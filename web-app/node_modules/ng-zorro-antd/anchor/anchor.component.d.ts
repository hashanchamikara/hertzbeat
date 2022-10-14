/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ChangeDetectorRef, EventEmitter, NgZone, OnChanges, OnDestroy, Renderer2, SimpleChanges } from '@angular/core';
import { NzConfigKey, NzConfigService } from 'ng-zorro-antd/core/config';
import { NzScrollService } from 'ng-zorro-antd/core/services';
import { BooleanInput, NgStyleInterface, NumberInput, NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzAnchorLinkComponent } from './anchor-link.component';
export declare class NzAnchorComponent implements OnDestroy, AfterViewInit, OnChanges {
    private doc;
    nzConfigService: NzConfigService;
    private scrollSrv;
    private cdr;
    private platform;
    private zone;
    private renderer;
    readonly _nzModuleName: NzConfigKey;
    static ngAcceptInputType_nzAffix: BooleanInput;
    static ngAcceptInputType_nzShowInkInFixed: BooleanInput;
    static ngAcceptInputType_nzBounds: NumberInput;
    static ngAcceptInputType_nzOffsetTop: NumberInput;
    private ink;
    nzAffix: boolean;
    nzShowInkInFixed: boolean;
    nzBounds: number;
    nzOffsetTop?: number;
    nzContainer?: string | HTMLElement;
    readonly nzClick: EventEmitter<string>;
    readonly nzScroll: EventEmitter<NzAnchorLinkComponent>;
    visible: boolean;
    wrapperStyle: NgStyleInterface;
    container?: HTMLElement | Window;
    private links;
    private animating;
    private destroy$;
    private handleScrollTimeoutID;
    constructor(doc: NzSafeAny, nzConfigService: NzConfigService, scrollSrv: NzScrollService, cdr: ChangeDetectorRef, platform: Platform, zone: NgZone, renderer: Renderer2);
    registerLink(link: NzAnchorLinkComponent): void;
    unregisterLink(link: NzAnchorLinkComponent): void;
    private getContainer;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private registerScrollEvent;
    handleScroll(): void;
    private clearActive;
    private handleActive;
    private setVisible;
    handleScrollTo(linkComp: NzAnchorLinkComponent): void;
    ngOnChanges(changes: SimpleChanges): void;
}
