/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, EventEmitter, OnDestroy } from '@angular/core';
import { NzMNComponent } from 'ng-zorro-antd/message';
import { NzNotificationData } from './typings';
export declare class NzNotificationComponent extends NzMNComponent implements OnDestroy {
    instance: Required<NzNotificationData>;
    placement?: string;
    index: number;
    readonly destroyed: EventEmitter<{
        id: string;
        userAction: boolean;
    }>;
    constructor(cdr: ChangeDetectorRef);
    ngOnDestroy(): void;
    onClick(event: MouseEvent): void;
    close(): void;
    get state(): string | undefined;
}
