/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, OnDestroy, QueryList } from '@angular/core';
import { Observable } from 'rxjs';
import { NzCellFixedDirective } from '../cell/cell-fixed.directive';
import { NzThMeasureDirective } from '../cell/th-measure.directive';
import { NzTableStyleService } from '../table-style.service';
export declare class NzTrDirective implements AfterContentInit, OnDestroy {
    private nzTableStyleService;
    listOfNzThDirective: QueryList<NzThMeasureDirective>;
    listOfCellFixedDirective: QueryList<NzCellFixedDirective>;
    private destroy$;
    private listOfFixedColumns$;
    private listOfColumns$;
    listOfFixedColumnsChanges$: Observable<NzCellFixedDirective[]>;
    listOfFixedLeftColumnChanges$: Observable<NzCellFixedDirective[]>;
    listOfFixedRightColumnChanges$: Observable<NzCellFixedDirective[]>;
    listOfColumnsChanges$: Observable<NzThMeasureDirective[]>;
    isInsideTable: boolean;
    constructor(nzTableStyleService: NzTableStyleService);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
