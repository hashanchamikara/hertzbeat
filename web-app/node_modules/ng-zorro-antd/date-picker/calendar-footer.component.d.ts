/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core/time';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { isNonEmptyString, isTemplateRef } from 'ng-zorro-antd/core/util';
import { DateHelperService, NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';
export declare class CalendarFooterComponent implements OnChanges {
    private dateHelper;
    locale: NzCalendarI18nInterface;
    showToday: boolean;
    showNow: boolean;
    hasTimePicker: boolean;
    isRange: boolean;
    okDisabled: boolean;
    disabledDate?: (d: Date) => boolean;
    extraFooter?: TemplateRef<void> | string;
    rangeQuickSelector: TemplateRef<NzSafeAny> | null;
    readonly clickOk: EventEmitter<void>;
    readonly clickToday: EventEmitter<CandyDate>;
    prefixCls: string;
    isTemplateRef: typeof isTemplateRef;
    isNonEmptyString: typeof isNonEmptyString;
    isTodayDisabled: boolean;
    todayTitle: string;
    constructor(dateHelper: DateHelperService);
    ngOnChanges(changes: SimpleChanges): void;
    onClickToday(): void;
}
