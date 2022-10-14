/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, NgZone, OnChanges, OnDestroy, QueryList, TemplateRef } from '@angular/core';
export declare class NzListItemExtraComponent {
    constructor();
}
export declare class NzListItemActionComponent {
    templateRef?: TemplateRef<void>;
    constructor();
}
export declare class NzListItemActionsComponent implements OnChanges, OnDestroy {
    private ngZone;
    private cdr;
    nzActions: Array<TemplateRef<void>>;
    nzListItemActions: QueryList<NzListItemActionComponent>;
    actions: Array<TemplateRef<void>>;
    private destroy$;
    private inputActionChanges$;
    private contentChildrenChanges$;
    constructor(ngZone: NgZone, cdr: ChangeDetectorRef);
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
