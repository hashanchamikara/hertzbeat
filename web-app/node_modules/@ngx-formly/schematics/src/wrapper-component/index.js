"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const component_1 = require("@schematics/angular/component");
/**
 * Scaffolds a new wrapper component.
 * Internally it bootstraps the base component schematic
 */
function default_1(options) {
    return schematics_1.chain([
        component_1.default(Object.assign({}, options)),
    ]);
}
exports.default = default_1;
/**
 * Add the wrapper component to FormlyModule
 */
// function addWrapperToModule(options: Schema) {
//   return (host: Tree) => {
//     return host;
//   };
// }
//# sourceMappingURL=index.js.map