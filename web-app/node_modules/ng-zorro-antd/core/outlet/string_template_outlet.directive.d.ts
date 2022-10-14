/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
export declare class NzStringTemplateOutletDirective<_T = unknown> implements OnChanges {
    private viewContainer;
    private templateRef;
    private embeddedViewRef;
    private context;
    nzStringTemplateOutletContext: NzSafeAny | null;
    nzStringTemplateOutlet: NzSafeAny | TemplateRef<NzSafeAny>;
    static ngTemplateContextGuard<T>(_dir: NzStringTemplateOutletDirective<T>, _ctx: NzSafeAny): _ctx is NzStringTemplateOutletContext;
    private recreateView;
    private updateContext;
    constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<NzSafeAny>);
    ngOnChanges(changes: SimpleChanges): void;
}
export declare class NzStringTemplateOutletContext {
    $implicit: NzSafeAny;
}
