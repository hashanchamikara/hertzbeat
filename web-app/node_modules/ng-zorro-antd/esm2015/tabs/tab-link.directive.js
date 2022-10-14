/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Host, Optional, Self, TemplateRef } from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
/**
 * Fix https://github.com/angular/angular/issues/8563
 */
export class NzTabLinkTemplateDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NzTabLinkTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ng-template[nzTabLink]',
                exportAs: 'nzTabLinkTemplate'
            },] }
];
NzTabLinkTemplateDirective.ctorParameters = () => [
    { type: TemplateRef, decorators: [{ type: Host }] }
];
/**
 * This component is for catching `routerLink` directive.
 */
export class NzTabLinkDirective {
    constructor(elementRef, routerLink, routerLinkWithHref) {
        this.elementRef = elementRef;
        this.routerLink = routerLink;
        this.routerLinkWithHref = routerLinkWithHref;
    }
}
NzTabLinkDirective.decorators = [
    { type: Directive, args: [{
                selector: 'a[nz-tab-link]',
                exportAs: 'nzTabLink'
            },] }
];
NzTabLinkDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: RouterLink, decorators: [{ type: Optional }, { type: Self }] },
    { type: RouterLinkWithHref, decorators: [{ type: Optional }, { type: Self }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWxpbmsuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy90YWJzL3RhYi1saW5rLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekYsT0FBTyxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSWpFOztHQUVHO0FBS0gsTUFBTSxPQUFPLDBCQUEwQjtJQUNyQyxZQUEyQixXQUE0QztRQUE1QyxnQkFBVyxHQUFYLFdBQVcsQ0FBaUM7SUFBRyxDQUFDOzs7WUFMNUUsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRSxtQkFBbUI7YUFDOUI7OztZQVhxRCxXQUFXLHVCQWFsRCxJQUFJOztBQUduQjs7R0FFRztBQUtILE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsWUFDUyxVQUF5QyxFQUNyQixVQUF1QixFQUN2QixrQkFBdUM7UUFGM0QsZUFBVSxHQUFWLFVBQVUsQ0FBK0I7UUFDckIsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUN2Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXFCO0lBQ2pFLENBQUM7OztZQVRMLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsV0FBVzthQUN0Qjs7O1lBdEJtQixVQUFVO1lBQ3JCLFVBQVUsdUJBeUJkLFFBQVEsWUFBSSxJQUFJO1lBekJBLGtCQUFrQix1QkEwQmxDLFFBQVEsWUFBSSxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0LCBPcHRpb25hbCwgU2VsZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckxpbmssIFJvdXRlckxpbmtXaXRoSHJlZiB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFRhYlRlbXBsYXRlQ29udGV4dCB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogRml4IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzg1NjNcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbbnpUYWJMaW5rXScsXG4gIGV4cG9ydEFzOiAnbnpUYWJMaW5rVGVtcGxhdGUnXG59KVxuZXhwb3J0IGNsYXNzIE56VGFiTGlua1RlbXBsYXRlRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPFRhYlRlbXBsYXRlQ29udGV4dD4pIHt9XG59XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgaXMgZm9yIGNhdGNoaW5nIGByb3V0ZXJMaW5rYCBkaXJlY3RpdmUuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2FbbnotdGFiLWxpbmtdJyxcbiAgZXhwb3J0QXM6ICduelRhYkxpbmsnXG59KVxuZXhwb3J0IGNsYXNzIE56VGFiTGlua0RpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxBbmNob3JFbGVtZW50PixcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyByb3V0ZXJMaW5rPzogUm91dGVyTGluayxcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyByb3V0ZXJMaW5rV2l0aEhyZWY/OiBSb3V0ZXJMaW5rV2l0aEhyZWZcbiAgKSB7fVxufVxuIl19