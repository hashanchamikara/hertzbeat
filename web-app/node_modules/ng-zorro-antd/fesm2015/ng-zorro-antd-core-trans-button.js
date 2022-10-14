import { CommonModule } from '@angular/common';
import { Directive, NgModule } from '@angular/core';

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTransButtonDirective {
}
NzTransButtonDirective.decorators = [
    { type: Directive, args: [{
                selector: 'button[nz-trans-button]',
                host: {
                    '[style.border]': '"0"',
                    '[style.background]': '"transparent"',
                    '[style.padding]': '"0"',
                    '[style.line-height]': '"inherit"'
                }
            },] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTransButtonModule {
}
NzTransButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NzTransButtonDirective],
                exports: [NzTransButtonDirective],
                imports: [CommonModule]
            },] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzTransButtonDirective, NzTransButtonModule };
//# sourceMappingURL=ng-zorro-antd-core-trans-button.js.map
