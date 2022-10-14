"use strict";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.classNames = void 0;
const schematics_1 = require("@angular/cdk/schematics");
exports.classNames = {
    [schematics_1.TargetVersion.V10]: [
        {
            pr: 'https://github.com/NG-ZORRO/ng-zorro-antd/pull/5774',
            changes: [
                { replace: 'UploadType', replaceWith: 'NzUploadType' },
                { replace: 'UploadListType', replaceWith: 'NzUploadListType' },
                { replace: 'UploadFile', replaceWith: 'NzUploadFile' },
                { replace: 'UploadChangeParam', replaceWith: 'NzUploadChangeParam' },
                { replace: 'ShowUploadListInterface', replaceWith: 'NzShowUploadList' },
                { replace: 'UploadTransformFileType', replaceWith: 'NzUploadTransformFileType' },
                { replace: 'UploadXHRArgs', replaceWith: 'NzUploadXHRArgs' }
            ]
        },
        {
            pr: 'https://github.com/NG-ZORRO/ng-zorro-antd/pull/5779',
            changes: [
                { replace: 'NzNotificationDataFilled', replaceWith: 'NzNotificationRef' },
                { replace: 'NzMessageDataFilled', replaceWith: 'NzMessageRef' }
            ]
        },
        {
            pr: 'https://github.com/NG-ZORRO/ng-zorro-antd/pull/5778',
            changes: [
                { replace: 'CascaderOption', replaceWith: 'NzCascaderOption' },
                { replace: 'CascaderSearchOption', replaceWith: 'NzCascaderSearchOption' }
            ]
        }
    ]
};
//# sourceMappingURL=class-names.js.map