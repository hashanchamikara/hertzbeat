"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultWorkspaceOptions = {
    name: 'workspace',
    newProjectRoot: 'projects',
    version: '6.0.0',
};
const defaultAppOptions = {
    name: 'bar',
    inlineStyle: false,
    inlineTemplate: false,
    viewEncapsulation: 'Emulated',
    routing: false,
    style: 'css',
    skipTests: false,
};
// const defaultModuleOptions = {
//   name: 'foo',
//   spec: true,
//   module: undefined,
//   flat: false,
// };
function getTestProjectPath(workspaceOptions = defaultWorkspaceOptions, appOptions = defaultAppOptions) {
    return `/${workspaceOptions.newProjectRoot}/${appOptions.name}`;
}
exports.getTestProjectPath = getTestProjectPath;
function createWorkspace(schematicRunner, appTree, workspaceOptions = defaultWorkspaceOptions, appOptions = defaultAppOptions) {
    appTree = schematicRunner.runExternalSchematic('@schematics/angular', 'workspace', workspaceOptions);
    appTree = schematicRunner.runExternalSchematic('@schematics/angular', 'application', appOptions, appTree);
    return appTree;
}
exports.createWorkspace = createWorkspace;
//# sourceMappingURL=testing.js.map