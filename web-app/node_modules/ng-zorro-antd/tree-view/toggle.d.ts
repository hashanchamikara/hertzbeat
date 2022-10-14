/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkTreeNodeToggle } from '@angular/cdk/tree';
import { BooleanInput } from 'ng-zorro-antd/core/types';
export declare class NzTreeNodeNoopToggleDirective {
}
export declare class NzTreeNodeToggleDirective<T> extends CdkTreeNodeToggle<T> {
    static ngAcceptInputType_recursive: BooleanInput;
    get recursive(): boolean;
    set recursive(value: boolean);
    get isExpanded(): boolean;
}
export declare class NzTreeNodeToggleRotateIconDirective {
}
export declare class NzTreeNodeToggleActiveIconDirective {
}
