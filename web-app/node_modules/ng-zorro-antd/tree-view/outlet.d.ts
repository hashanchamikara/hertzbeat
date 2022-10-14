/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkTreeNodeOutlet } from '@angular/cdk/tree';
import { ViewContainerRef } from '@angular/core';
export declare class NzTreeNodeOutletDirective implements CdkTreeNodeOutlet {
    viewContainer: ViewContainerRef;
    _node?: any;
    constructor(viewContainer: ViewContainerRef, _node?: any);
}
