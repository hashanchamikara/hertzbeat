/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Direction, Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NzConfigKey, NzConfigService } from 'ng-zorro-antd/core/config';
import { NzScrollService } from 'ng-zorro-antd/core/services';
import { NumberInput, NzSafeAny } from 'ng-zorro-antd/core/types';
export declare class NzBackTopComponent implements OnInit, OnDestroy, OnChanges {
    private doc;
    nzConfigService: NzConfigService;
    private scrollSrv;
    private platform;
    private cd;
    private zone;
    private cdr;
    private directionality;
    readonly _nzModuleName: NzConfigKey;
    static ngAcceptInputType_nzVisibilityHeight: NumberInput;
    static ngAcceptInputType_nzDuration: NumberInput;
    private scrollListenerDestroy$;
    private destroy$;
    private target;
    visible: boolean;
    dir: Direction;
    nzTemplate?: TemplateRef<void>;
    nzVisibilityHeight: number;
    nzTarget?: string | HTMLElement;
    nzDuration: number;
    readonly nzClick: EventEmitter<boolean>;
    constructor(doc: NzSafeAny, nzConfigService: NzConfigService, scrollSrv: NzScrollService, platform: Platform, cd: ChangeDetectorRef, zone: NgZone, cdr: ChangeDetectorRef, directionality: Directionality);
    ngOnInit(): void;
    clickBackTop(): void;
    private getTarget;
    private handleScroll;
    private registerScrollEvent;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
