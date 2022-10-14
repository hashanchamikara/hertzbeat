"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular-devkit/schematics/testing");
const schema_1 = require("@schematics/angular/ng-new/schema");
const test_1 = require("@schematics/angular/utility/test");
const test_app_1 = require("../../testing/test-app");
describe('side-menu schematic', () => {
    let runner;
    let appTree;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        runner = new testing_1.SchematicTestRunner('schematics', require.resolve('../../collection.json'));
        appTree = yield test_app_1.createTestApp(runner);
    }));
    it('should create side-menu files', () => __awaiter(void 0, void 0, void 0, function* () {
        const tree = yield runner.runSchematicAsync('sidemenu', {}, appTree).toPromise();
        const files = tree.files;
        expect(files).toEqual(jasmine.arrayContaining([
            '/projects/ng-zorro/src/app/app.component.html',
            '/projects/ng-zorro/src/app/app.component.css',
            '/projects/ng-zorro/src/app/app.component.ts',
            '/projects/ng-zorro/src/app/app-routing.module.ts',
            '/projects/ng-zorro/src/app/icons-provider.module.ts',
            '/projects/ng-zorro/src/app/pages/welcome/welcome-routing.module.ts',
            '/projects/ng-zorro/src/app/pages/welcome/welcome.module.ts',
            '/projects/ng-zorro/src/app/pages/welcome/welcome.component.ts',
            '/projects/ng-zorro/src/app/pages/welcome/welcome.component.css',
            '/projects/ng-zorro/src/app/pages/welcome/welcome.component.html'
        ]));
    }));
    it('should set the style preprocessor correctly', () => __awaiter(void 0, void 0, void 0, function* () {
        const tree = yield runner.runSchematicAsync('sidemenu', { style: schema_1.Style.Less }, appTree).toPromise();
        const files = tree.files;
        const appContent = test_1.getFileContent(tree, '/projects/ng-zorro/src/app/app.component.ts');
        const welcomeContent = test_1.getFileContent(tree, '/projects/ng-zorro/src/app/pages/welcome/welcome.component.ts');
        expect(appContent).toContain('app.component.less');
        expect(welcomeContent).toContain('welcome.component.less');
        expect(files).toEqual(jasmine.arrayContaining([
            '/projects/ng-zorro/src/app/app.component.less',
            '/projects/ng-zorro/src/app/pages/welcome/welcome.component.less'
        ]));
    }));
    it('should fall back to the @schematics/angular:component option value', () => __awaiter(void 0, void 0, void 0, function* () {
        appTree = yield test_app_1.createTestApp(runner, { style: schema_1.Style.Less });
        const tree = yield runner.runSchematicAsync('ng-add', { template: 'sidemenu' }, appTree).toPromise();
        expect(tree.files).toEqual(jasmine.arrayContaining([
            '/projects/ng-zorro/src/app/app.component.less',
            '/projects/ng-zorro/src/app/pages/welcome/welcome.component.less'
        ]));
    }));
    it('should fall back to the @schematics/angular:component option value', () => __awaiter(void 0, void 0, void 0, function* () {
        appTree = yield test_app_1.createTestApp(runner, { inlineStyle: true });
        const tree = yield runner.runSchematicAsync('ng-add', { template: 'sidemenu' }, appTree).toPromise();
        expect(tree.files).not.toEqual('/projects/ng-zorro/src/app/pages/welcome/welcome.component.css');
    }));
    it('should fall back to the @schematics/angular:component option value', () => __awaiter(void 0, void 0, void 0, function* () {
        appTree = yield test_app_1.createTestApp(runner, { inlineTemplate: true });
        const tree = yield runner.runSchematicAsync('ng-add', { template: 'sidemenu' }, appTree).toPromise();
        expect(tree.files).not.toEqual('/projects/ng-zorro/src/app/pages/welcome/welcome.component.html');
    }));
    it('should set the prefix correctly', () => __awaiter(void 0, void 0, void 0, function* () {
        const tree = yield runner.runSchematicAsync('sidemenu', { prefix: 'nz' }, appTree).toPromise();
        const appContent = test_1.getFileContent(tree, '/projects/ng-zorro/src/app/app.component.ts');
        const welcomeContent = test_1.getFileContent(tree, '/projects/ng-zorro/src/app/pages/welcome/welcome.component.ts');
        expect(appContent).toContain(`selector: 'nz-root'`);
        expect(welcomeContent).toContain(`selector: 'nz-welcome'`);
    }));
});
//# sourceMappingURL=index.spec.js.map