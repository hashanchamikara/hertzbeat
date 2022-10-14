"use strict";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.outputNames = void 0;
const schematics_1 = require("@angular/cdk/schematics");
exports.outputNames = {
    [schematics_1.TargetVersion.V9]: [
        {
            pr: 'https://github.com/NG-ZORRO/ng-zorro-antd/pull/4601',
            changes: [
                {
                    replace: 'nzOnSearchNode',
                    replaceWith: 'nzSearchValueChange',
                    limitedTo: {
                        elements: ['nz-tree']
                    }
                }
            ]
        }
    ],
    [schematics_1.TargetVersion.V10]: [
        {
            pr: 'https://github.com/NG-ZORRO/ng-zorro-antd/pull/5792',
            changes: [
                {
                    replace: 'nzSortChange',
                    replaceWith: 'nzSortOrderChange',
                    limitedTo: {
                        elements: ['thead', 'th']
                    }
                }
            ]
        },
        {
            pr: 'https://github.com/NG-ZORRO/ng-zorro-antd/pull/5817',
            changes: [
                {
                    replace: 'nzVisibleChange',
                    replaceWith: 'nzTooltipVisibleChange',
                    limitedTo: {
                        attributes: ['nz-tooltip']
                    }
                },
                {
                    replace: 'nzVisibleChange',
                    replaceWith: 'nzPopoverVisibleChange',
                    limitedTo: {
                        attributes: ['nz-popover']
                    }
                },
                {
                    replace: 'nzVisibleChange',
                    replaceWith: 'nzPopconfirmVisibleChange',
                    limitedTo: {
                        attributes: ['nz-popconfirm']
                    }
                }
            ]
        }
    ]
};
//# sourceMappingURL=output-names.js.map