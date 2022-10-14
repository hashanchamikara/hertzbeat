/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, EventEmitter, TemplateRef } from '@angular/core';
import { TransferDirection, TransferItem } from './interface';
export declare class NzTransferListComponent {
    private cdr;
    private elementRef;
    direction: TransferDirection;
    titleText: string;
    showSelectAll: boolean;
    dataSource: TransferItem[];
    itemUnit: string | undefined;
    itemsUnit: string | undefined;
    filter: string;
    disabled: boolean;
    showSearch?: boolean;
    searchPlaceholder?: string;
    notFoundContent?: string;
    filterOption?: (inputValue: string, item: TransferItem) => boolean;
    renderList: TemplateRef<void> | null;
    render: TemplateRef<void> | null;
    footer: TemplateRef<void> | null;
    readonly handleSelectAll: EventEmitter<boolean>;
    readonly handleSelect: EventEmitter<TransferItem>;
    readonly filterChange: EventEmitter<{
        direction: TransferDirection;
        value: string;
    }>;
    stat: {
        checkAll: boolean;
        checkHalf: boolean;
        checkCount: number;
        shownCount: number;
    };
    get validData(): TransferItem[];
    onItemSelect: (item: TransferItem) => void;
    onItemSelectAll: (status: boolean) => void;
    private updateCheckStatus;
    handleFilter(value: string): void;
    handleClear(): void;
    private matchFilter;
    constructor(cdr: ChangeDetectorRef, elementRef: ElementRef);
    markForCheck(): void;
}
