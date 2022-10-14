/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { DateHelperService } from 'ng-zorro-antd/i18n';
import { AbstractTable } from './abstract-table';
import { DateBodyRow, DateCell, YearCell } from './interface';
export declare class YearTableComponent extends AbstractTable {
    private dateHelper;
    MAX_ROW: number;
    MAX_COL: number;
    constructor(dateHelper: DateHelperService);
    makeHeadRow(): DateCell[];
    makeBodyRows(): DateBodyRow[];
    getClassMap(cell: YearCell): {
        [key: string]: boolean;
    };
    private isDisabledYear;
    private addCellProperty;
    private chooseYear;
}
