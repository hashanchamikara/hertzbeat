/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
export declare type NzFormControlStatusType = 'success' | 'error' | 'warning' | 'validating' | null;
/** should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 **/
export declare class NzFormItemComponent implements OnDestroy, OnDestroy {
    private cdr;
    status: NzFormControlStatusType;
    hasFeedback: boolean;
    withHelpClass: boolean;
    private destroy$;
    setWithHelpViaTips(value: boolean): void;
    setStatus(status: NzFormControlStatusType): void;
    setHasFeedback(hasFeedback: boolean): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, cdr: ChangeDetectorRef);
    ngOnDestroy(): void;
}
