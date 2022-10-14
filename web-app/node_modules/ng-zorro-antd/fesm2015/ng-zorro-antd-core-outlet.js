import { CommonModule } from '@angular/common';
import { TemplateRef, Directive, ViewContainerRef, Input, NgModule } from '@angular/core';

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzStringTemplateOutletDirective {
    constructor(viewContainer, templateRef) {
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
        this.embeddedViewRef = null;
        this.context = new NzStringTemplateOutletContext();
        this.nzStringTemplateOutletContext = null;
        this.nzStringTemplateOutlet = null;
    }
    static ngTemplateContextGuard(_dir, _ctx) {
        return true;
    }
    recreateView() {
        this.viewContainer.clear();
        const isTemplateRef = this.nzStringTemplateOutlet instanceof TemplateRef;
        const templateRef = (isTemplateRef ? this.nzStringTemplateOutlet : this.templateRef);
        this.embeddedViewRef = this.viewContainer.createEmbeddedView(templateRef, isTemplateRef ? this.nzStringTemplateOutletContext : this.context);
    }
    updateContext() {
        const isTemplateRef = this.nzStringTemplateOutlet instanceof TemplateRef;
        const newCtx = isTemplateRef ? this.nzStringTemplateOutletContext : this.context;
        const oldCtx = this.embeddedViewRef.context;
        if (newCtx) {
            for (const propName of Object.keys(newCtx)) {
                oldCtx[propName] = newCtx[propName];
            }
        }
    }
    ngOnChanges(changes) {
        const { nzStringTemplateOutletContext, nzStringTemplateOutlet } = changes;
        const shouldRecreateView = () => {
            let shouldOutletRecreate = false;
            if (nzStringTemplateOutlet) {
                if (nzStringTemplateOutlet.firstChange) {
                    shouldOutletRecreate = true;
                }
                else {
                    const isPreviousOutletTemplate = nzStringTemplateOutlet.previousValue instanceof TemplateRef;
                    const isCurrentOutletTemplate = nzStringTemplateOutlet.currentValue instanceof TemplateRef;
                    shouldOutletRecreate = isPreviousOutletTemplate || isCurrentOutletTemplate;
                }
            }
            const hasContextShapeChanged = (ctxChange) => {
                const prevCtxKeys = Object.keys(ctxChange.previousValue || {});
                const currCtxKeys = Object.keys(ctxChange.currentValue || {});
                if (prevCtxKeys.length === currCtxKeys.length) {
                    for (const propName of currCtxKeys) {
                        if (prevCtxKeys.indexOf(propName) === -1) {
                            return true;
                        }
                    }
                    return false;
                }
                else {
                    return true;
                }
            };
            const shouldContextRecreate = nzStringTemplateOutletContext && hasContextShapeChanged(nzStringTemplateOutletContext);
            return shouldContextRecreate || shouldOutletRecreate;
        };
        if (nzStringTemplateOutlet) {
            this.context.$implicit = nzStringTemplateOutlet.currentValue;
        }
        const recreateView = shouldRecreateView();
        if (recreateView) {
            /** recreate view when context shape or outlet change **/
            this.recreateView();
        }
        else {
            /** update context **/
            this.updateContext();
        }
    }
}
NzStringTemplateOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nzStringTemplateOutlet]',
                exportAs: 'nzStringTemplateOutlet'
            },] }
];
NzStringTemplateOutletDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef }
];
NzStringTemplateOutletDirective.propDecorators = {
    nzStringTemplateOutletContext: [{ type: Input }],
    nzStringTemplateOutlet: [{ type: Input }]
};
class NzStringTemplateOutletContext {
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzOutletModule {
}
NzOutletModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [NzStringTemplateOutletDirective],
                declarations: [NzStringTemplateOutletDirective]
            },] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzOutletModule, NzStringTemplateOutletDirective };
//# sourceMappingURL=ng-zorro-antd-core-outlet.js.map
