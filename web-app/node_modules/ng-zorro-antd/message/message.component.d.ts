/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { NzMNComponent } from './base';
import { NzMessageData } from './typings';
export declare class NzMessageComponent extends NzMNComponent implements OnInit, OnDestroy {
    instance: Required<NzMessageData>;
    readonly destroyed: EventEmitter<{
        id: string;
        userAction: boolean;
    }>;
    constructor(cdr: ChangeDetectorRef);
}
