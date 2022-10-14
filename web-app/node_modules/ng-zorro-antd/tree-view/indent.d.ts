/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NzTreeNodeComponent } from './node';
import { NzTreeView } from './tree';
export declare class NzTreeNodeIndentsComponent {
    indents: boolean[];
}
export declare class NzTreeNodeIndentLineDirective<T> implements OnDestroy {
    private treeNode;
    private tree;
    private cdr;
    isLast: boolean | 'unset';
    isLeaf: boolean;
    private preNodeRef;
    private nextNodeRef;
    private currentIndents;
    private changeSubscription;
    constructor(treeNode: NzTreeNodeComponent<T>, tree: NzTreeView<T>, cdr: ChangeDetectorRef);
    private getIndents;
    private buildIndents;
    /**
     * We need to add an class name for the last child node,
     * this result can also be affected when the adjacent nodes are changed.
     */
    private checkAdjacent;
    private checkLast;
    ngOnDestroy(): void;
}
