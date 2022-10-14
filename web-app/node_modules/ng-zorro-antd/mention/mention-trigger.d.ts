/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterViewInit, ElementRef, EventEmitter, ExistingProvider, OnDestroy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import { Mention } from './mention.component';
import { NzMentionService } from './mention.service';
export declare const NZ_MENTION_TRIGGER_ACCESSOR: ExistingProvider;
export declare class NzMentionTriggerDirective implements ControlValueAccessor, OnDestroy, AfterViewInit {
    el: ElementRef;
    private nzMentionService;
    onChange: OnChangeType;
    onTouched: OnTouchedType;
    readonly onFocusin: EventEmitter<void>;
    readonly onBlur: EventEmitter<void>;
    readonly onInput: EventEmitter<KeyboardEvent>;
    readonly onKeydown: EventEmitter<KeyboardEvent>;
    readonly onClick: EventEmitter<MouseEvent>;
    value?: string;
    constructor(el: ElementRef, nzMentionService: NzMentionService);
    completeEvents(): void;
    focus(caretPos?: number): void;
    insertMention(mention: Mention): void;
    writeValue(value: string): void;
    registerOnChange(fn: (value: string) => void): void;
    registerOnTouched(fn: () => void): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
