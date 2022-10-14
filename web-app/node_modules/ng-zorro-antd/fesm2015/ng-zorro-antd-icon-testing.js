import { NgModule } from '@angular/core';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const antDesignIcons = AllIcons;
const ɵ0 = key => {
    const i = antDesignIcons[key];
    return i;
};
const icons = Object.keys(antDesignIcons).map(ɵ0);
const ɵ1 = icons;
/**
 * Include this module in every testing spec, except `icon.spec.ts`.
 */
// @dynamic
class NzIconTestModule {
}
NzIconTestModule.decorators = [
    { type: NgModule, args: [{
                exports: [NzIconModule],
                providers: [
                    {
                        provide: NZ_ICONS,
                        useValue: ɵ1
                    }
                ]
            },] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzIconTestModule, ɵ0, ɵ1 };
//# sourceMappingURL=ng-zorro-antd-icon-testing.js.map
