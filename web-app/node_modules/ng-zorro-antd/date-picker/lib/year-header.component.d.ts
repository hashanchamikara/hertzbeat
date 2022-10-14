/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AbstractPanelHeader } from './abstract-panel-header';
import { PanelSelector } from './interface';
export declare class YearHeaderComponent extends AbstractPanelHeader {
    get startYear(): number;
    get endYear(): number;
    superPrevious(): void;
    superNext(): void;
    getSelectors(): PanelSelector[];
}
