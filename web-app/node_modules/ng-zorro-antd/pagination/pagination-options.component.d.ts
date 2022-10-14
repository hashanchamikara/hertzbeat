/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NzPaginationI18nInterface } from 'ng-zorro-antd/i18n';
export declare class NzPaginationOptionsComponent implements OnChanges {
    private elementRef;
    nzSize: 'default' | 'small';
    disabled: boolean;
    showSizeChanger: boolean;
    showQuickJumper: boolean;
    locale: NzPaginationI18nInterface;
    total: number;
    pageIndex: number;
    pageSize: number;
    pageSizeOptions: number[];
    readonly pageIndexChange: EventEmitter<number>;
    readonly pageSizeChange: EventEmitter<number>;
    listOfPageSizeOption: Array<{
        value: number;
        label: string;
    }>;
    constructor(elementRef: ElementRef);
    onPageSizeChange(size: number): void;
    jumpToPageViaInput($event: Event): void;
    trackByOption(_: number, option: {
        value: number;
        label: string;
    }): number;
    ngOnChanges(changes: SimpleChanges): void;
}
