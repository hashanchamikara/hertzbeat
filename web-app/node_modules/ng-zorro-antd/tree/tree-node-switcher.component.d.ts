/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { TemplateRef } from '@angular/core';
import { NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd/core/tree';
export declare class NzTreeNodeSwitcherComponent {
    nzShowExpand?: boolean;
    nzShowLine?: boolean;
    nzExpandedIcon?: TemplateRef<{
        $implicit: NzTreeNode;
        origin: NzTreeNodeOptions;
    }>;
    nzSelectMode: boolean;
    context: NzTreeNode;
    isLeaf?: boolean;
    isLoading?: boolean;
    isExpanded?: boolean;
    get isShowLineIcon(): boolean;
    get isShowSwitchIcon(): boolean;
    get isSwitcherOpen(): boolean;
    get isSwitcherClose(): boolean;
}
