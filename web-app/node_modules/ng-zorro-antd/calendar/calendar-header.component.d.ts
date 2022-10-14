/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core/time';
import { DateHelperService, NzI18nService as I18n } from 'ng-zorro-antd/i18n';
import { NzSelectSizeType } from 'ng-zorro-antd/select';
export declare class NzCalendarHeaderComponent implements OnInit {
    private i18n;
    private dateHelper;
    private elementRef;
    mode: 'month' | 'year';
    fullscreen: boolean;
    activeDate: CandyDate;
    readonly modeChange: EventEmitter<'month' | 'year'>;
    readonly yearChange: EventEmitter<number>;
    readonly monthChange: EventEmitter<number>;
    yearOffset: number;
    yearTotal: number;
    years: Array<{
        label: string;
        value: number;
    }>;
    months: Array<{
        label: string;
        value: number;
    }>;
    get activeYear(): number;
    get activeMonth(): number;
    get size(): NzSelectSizeType;
    get yearTypeText(): string;
    get monthTypeText(): string;
    constructor(i18n: I18n, dateHelper: DateHelperService, elementRef: ElementRef);
    ngOnInit(): void;
    updateYear(year: number): void;
    private setUpYears;
    private setUpMonths;
}
