import { Directive, ElementRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * A patch directive to select the element of a component.
 */
class NzElementPatchDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    get nativeElement() {
        return this.elementRef.nativeElement;
    }
}
NzElementPatchDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nzElement], [nz-element]',
                exportAs: 'nzElement'
            },] }
];
NzElementPatchDirective.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzElementPatchModule {
}
NzElementPatchModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [NzElementPatchDirective],
                exports: [NzElementPatchDirective]
            },] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzElementPatchDirective, NzElementPatchModule };
//# sourceMappingURL=ng-zorro-antd-core-element-patch.js.map
