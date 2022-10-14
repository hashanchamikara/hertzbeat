/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterViewInit } from '@angular/core';
import { NzTreeNodeOutletDirective } from './outlet';
import { NzTreeView } from './tree';
export declare class NzTreeViewComponent<T> extends NzTreeView<T> implements AfterViewInit {
    nodeOutlet: NzTreeNodeOutletDirective;
    _afterViewInit: boolean;
    ngAfterViewInit(): void;
}
