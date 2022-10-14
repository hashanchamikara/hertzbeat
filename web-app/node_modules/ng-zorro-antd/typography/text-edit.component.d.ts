/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit } from '@angular/core';
import { NzTSType } from 'ng-zorro-antd/core/types';
import { NzI18nService, NzTextI18nInterface } from 'ng-zorro-antd/i18n';
import { NzAutosizeDirective } from 'ng-zorro-antd/input';
export declare class NzTextEditComponent implements OnInit, OnDestroy {
    private zone;
    private host;
    private cdr;
    private i18n;
    editing: boolean;
    locale: NzTextI18nInterface;
    private destroy$;
    text?: string;
    icon: NzTSType;
    tooltip?: null | NzTSType;
    readonly startEditing: EventEmitter<void>;
    readonly endEditing: EventEmitter<string>;
    textarea: ElementRef<HTMLTextAreaElement>;
    autosizeDirective: NzAutosizeDirective;
    beforeText?: string;
    currentText?: string;
    nativeElement: any;
    constructor(zone: NgZone, host: ElementRef, cdr: ChangeDetectorRef, i18n: NzI18nService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onClick(): void;
    confirm(): void;
    onInput(event: Event): void;
    onEnter(event: Event): void;
    onCancel(): void;
    focusAndSetValue(): void;
}
