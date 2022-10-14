"use strict";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalConfigRule = void 0;
const schematics_1 = require("@angular/cdk/schematics");
const injection_token_rule_1 = require("./injection-token-rule");
class GlobalConfigRule extends injection_token_rule_1.InjectionTokenRule {
    constructor() {
        super(...arguments);
        this.enabled = this.targetVersion === schematics_1.TargetVersion.V9 || this.targetVersion === schematics_1.TargetVersion.V10;
        this.tokens = (this.targetVersion === schematics_1.TargetVersion.V9 &&
            ['NZ_MESSAGE_CONFIG', 'NZ_NOTIFICATION_CONFIG', 'NZ_DEFAULT_EMPTY_CONTENT', 'NZ_ICON_DEFAULT_TWOTONE_COLOR', 'NZ_CODE_EDITOR_CONFIG']) ||
            (this.targetVersion === schematics_1.TargetVersion.V10 &&
                ['NZ_CODE_EDITOR_CONFIG']);
    }
    getFailure(token) {
        return `Found deprecated symbol "${token}" which has been removed. Please use 'NzConfigService' instead.`;
    }
}
exports.GlobalConfigRule = GlobalConfigRule;
//# sourceMappingURL=global-config-rule.js.map