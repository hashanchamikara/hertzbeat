/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkTreeNodePadding } from '@angular/cdk/tree';
import { Directive, Input } from '@angular/core';
export class NzTreeNodePaddingDirective extends CdkTreeNodePadding {
    constructor() {
        super(...arguments);
        this._indent = 24;
    }
    get level() {
        return this._level;
    }
    set level(value) {
        this._setLevelInput(value);
    }
    get indent() {
        return this._indent;
    }
    set indent(indent) {
        this._setIndentInput(indent);
    }
}
NzTreeNodePaddingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nzTreeNodePadding]',
                providers: [{ provide: CdkTreeNodePadding, useExisting: NzTreeNodePaddingDirective }]
            },] }
];
NzTreeNodePaddingDirective.propDecorators = {
    level: [{ type: Input, args: ['nzTreeNodePadding',] }],
    indent: [{ type: Input, args: ['nzTreeNodePaddingIndent',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFkZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdHJlZS12aWV3L3BhZGRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBRUgsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNakQsTUFBTSxPQUFPLDBCQUE4QixTQUFRLGtCQUFxQjtJQUp4RTs7UUFLRSxZQUFPLEdBQUcsRUFBRSxDQUFDO0lBaUJmLENBQUM7SUFmQyxJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFDSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUF1QjtRQUNoQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLDBCQUEwQixFQUFFLENBQUM7YUFDdEY7OztvQkFJRSxLQUFLLFNBQUMsbUJBQW1CO3FCQVF6QixLQUFLLFNBQUMseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2RrVHJlZU5vZGVQYWRkaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnpUcmVlTm9kZVBhZGRpbmddJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDZGtUcmVlTm9kZVBhZGRpbmcsIHVzZUV4aXN0aW5nOiBOelRyZWVOb2RlUGFkZGluZ0RpcmVjdGl2ZSB9XVxufSlcbmV4cG9ydCBjbGFzcyBOelRyZWVOb2RlUGFkZGluZ0RpcmVjdGl2ZTxUPiBleHRlbmRzIENka1RyZWVOb2RlUGFkZGluZzxUPiB7XG4gIF9pbmRlbnQgPSAyNDtcblxuICBASW5wdXQoJ256VHJlZU5vZGVQYWRkaW5nJylcbiAgZ2V0IGxldmVsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xldmVsO1xuICB9XG4gIHNldCBsZXZlbCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc2V0TGV2ZWxJbnB1dCh2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoJ256VHJlZU5vZGVQYWRkaW5nSW5kZW50JylcbiAgZ2V0IGluZGVudCgpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9pbmRlbnQ7XG4gIH1cbiAgc2V0IGluZGVudChpbmRlbnQ6IG51bWJlciB8IHN0cmluZykge1xuICAgIHRoaXMuX3NldEluZGVudElucHV0KGluZGVudCk7XG4gIH1cbn1cbiJdfQ==