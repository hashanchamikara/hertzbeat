"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const testing_1 = require("@angular-devkit/schematics/testing");
const path_1 = require("path");
const testing_2 = require("../../utils/testing");
const test_1 = require("@schematics/angular/utility/test");
const schema_1 = require("@schematics/angular/component/schema");
// tslint:disable:max-line-length
xdescribe('Component Schematic', () => {
    const collectionPath = path_1.join(__dirname, '../collection.json');
    const defaultOptions = {
        name: 'foo',
        path: 'src/app',
        inlineStyle: false,
        inlineTemplate: false,
        changeDetection: schema_1.ChangeDetection.Default,
        styleext: 'css',
        spec: true,
        module: undefined,
        export: false,
        project: 'bar',
    };
    const schematicRunner = new testing_1.SchematicTestRunner('schematics', collectionPath);
    const projectPath = testing_2.getTestProjectPath();
    let appTree;
    beforeEach(() => {
        appTree = testing_2.createWorkspace(schematicRunner, appTree);
    });
    it('should create a component', () => {
        const tree = schematicRunner.runSchematic('wrapper', Object.assign({}, defaultOptions), appTree);
        const files = tree.files;
        expect(files.indexOf(`${projectPath}/src/app/foo/foo.component.css`)).toBeGreaterThanOrEqual(0);
        expect(files.indexOf(`${projectPath}/src/app/foo/foo.component.html`)).toBeGreaterThanOrEqual(0);
        expect(files.indexOf(`${projectPath}/src/app/foo/foo.component.spec.ts`)).toBeGreaterThanOrEqual(0);
        expect(files.indexOf(`${projectPath}/src/app/foo/foo.component.ts`)).toBeGreaterThanOrEqual(0);
        const moduleContent = test_1.getFileContent(tree, `${projectPath}/src/app/app.module.ts`);
        expect(moduleContent).toMatch(/import.*Foo.*from '.\/foo\/foo.component'/);
        expect(moduleContent).toMatch(/declarations:\s*\[[^\]]+?,\r?\n\s+FooComponent\r?\n/m);
    });
    xit('should add wrapper to FormlyModule config', () => {
        const tree = schematicRunner.runSchematic('wrapper', Object.assign({}, defaultOptions), appTree);
        const moduleContent = test_1.getFileContent(tree, `${projectPath}/src/app/app.module.ts`);
        expect(moduleContent).toContain(`wrappers: [
      { name: 'foo', component: FooWrapperComponent },
    ],`);
    });
});
//# sourceMappingURL=index_spec.js.map