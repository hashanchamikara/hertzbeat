/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Direction, Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzConfigKey, NzConfigService } from 'ng-zorro-antd/core/config';
import { BooleanInput, NgClassType, NumberInput } from 'ng-zorro-antd/core/types';
export declare class NzRateComponent implements OnInit, OnDestroy, ControlValueAccessor, OnChanges {
    nzConfigService: NzConfigService;
    private renderer;
    private cdr;
    private directionality;
    readonly _nzModuleName: NzConfigKey;
    static ngAcceptInputType_nzAllowClear: BooleanInput;
    static ngAcceptInputType_nzAllowHalf: BooleanInput;
    static ngAcceptInputType_nzDisabled: BooleanInput;
    static ngAcceptInputType_nzAutoFocus: BooleanInput;
    static ngAcceptInputType_nzCount: NumberInput;
    private ulElement?;
    nzAllowClear: boolean;
    nzAllowHalf: boolean;
    nzDisabled: boolean;
    nzAutoFocus: boolean;
    nzCharacter: TemplateRef<void>;
    nzCount: number;
    nzTooltips: string[];
    readonly nzOnBlur: EventEmitter<FocusEvent>;
    readonly nzOnFocus: EventEmitter<FocusEvent>;
    readonly nzOnHoverChange: EventEmitter<number>;
    readonly nzOnKeyDown: EventEmitter<KeyboardEvent>;
    classMap: NgClassType;
    starArray: number[];
    starStyleArray: NgClassType[];
    dir: Direction;
    private readonly destroy$;
    private hasHalf;
    private hoverValue;
    private isFocused;
    private _value;
    get nzValue(): number;
    set nzValue(input: number);
    constructor(nzConfigService: NzConfigService, renderer: Renderer2, cdr: ChangeDetectorRef, directionality: Directionality);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    onItemClick(index: number, isHalf: boolean): void;
    onItemHover(index: number, isHalf: boolean): void;
    onRateLeave(): void;
    onFocus(e: FocusEvent): void;
    onBlur(e: FocusEvent): void;
    focus(): void;
    blur(): void;
    onKeyDown(e: KeyboardEvent): void;
    private updateStarArray;
    private updateStarStyle;
    writeValue(value: number | null): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: (_: number) => void): void;
    registerOnTouched(fn: () => void): void;
    onChange: (value: number) => void;
    onTouched: () => void;
}
