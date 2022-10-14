/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Direction, Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NzConfigKey, NzConfigService } from 'ng-zorro-antd/core/config';
import { BooleanInput } from 'ng-zorro-antd/core/types';
export declare class NzAlertComponent implements OnChanges, OnDestroy, OnInit {
    nzConfigService: NzConfigService;
    private cdr;
    private directionality;
    readonly _nzModuleName: NzConfigKey;
    static ngAcceptInputType_nzCloseable: BooleanInput;
    static ngAcceptInputType_nzShowIcon: BooleanInput;
    static ngAcceptInputType_nzBanner: BooleanInput;
    static ngAcceptInputType_nzNoAnimation: BooleanInput;
    nzCloseText: string | TemplateRef<void> | null;
    nzIconType: string | null;
    nzMessage: string | TemplateRef<void> | null;
    nzDescription: string | TemplateRef<void> | null;
    nzType: 'success' | 'info' | 'warning' | 'error';
    nzCloseable: boolean;
    nzShowIcon: boolean;
    nzBanner: boolean;
    nzNoAnimation: boolean;
    readonly nzOnClose: EventEmitter<boolean>;
    closed: boolean;
    iconTheme: 'outline' | 'fill';
    inferredIconType: string;
    dir: Direction;
    private isTypeSet;
    private isShowIconSet;
    private destroy$;
    constructor(nzConfigService: NzConfigService, cdr: ChangeDetectorRef, directionality: Directionality);
    ngOnInit(): void;
    closeAlert(): void;
    onFadeAnimationDone(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
