/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, Directive, Input, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
export class NzCommentAvatarDirective {
}
NzCommentAvatarDirective.decorators = [
    { type: Directive, args: [{
                selector: 'nz-avatar[nz-comment-avatar]',
                exportAs: 'nzCommentAvatar'
            },] }
];
export class NzCommentContentDirective {
}
NzCommentContentDirective.decorators = [
    { type: Directive, args: [{
                selector: 'nz-comment-content, [nz-comment-content]',
                exportAs: 'nzCommentContent',
                host: { class: 'ant-comment-content-detail' }
            },] }
];
export class NzCommentActionHostDirective extends CdkPortalOutlet {
    constructor(componentFactoryResolver, viewContainerRef) {
        super(componentFactoryResolver, viewContainerRef);
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    ngAfterViewInit() {
        this.attach(this.nzCommentActionHost);
    }
}
NzCommentActionHostDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nzCommentActionHost]',
                exportAs: 'nzCommentActionHost'
            },] }
];
NzCommentActionHostDirective.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
NzCommentActionHostDirective.propDecorators = {
    nzCommentActionHost: [{ type: Input }]
};
export class NzCommentActionComponent {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.contentPortal = null;
    }
    get content() {
        return this.contentPortal;
    }
    ngOnInit() {
        this.contentPortal = new TemplatePortal(this.implicitContent, this.viewContainerRef);
    }
}
NzCommentActionComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-comment-action',
                exportAs: 'nzCommentAction',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-template><ng-content></ng-content></ng-template>'
            },] }
];
NzCommentActionComponent.ctorParameters = () => [
    { type: ViewContainerRef }
];
NzCommentActionComponent.propDecorators = {
    implicitContent: [{ type: ViewChild, args: [TemplateRef, { static: true },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC1jZWxscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvY29tbWVudC9jb21tZW50LWNlbGxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEUsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1Qsd0JBQXdCLEVBQ3hCLFNBQVMsRUFDVCxLQUFLLEVBR0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE1BQU0sT0FBTyx3QkFBd0I7OztZQUpwQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsUUFBUSxFQUFFLGlCQUFpQjthQUM1Qjs7QUFRRCxNQUFNLE9BQU8seUJBQXlCOzs7WUFMckMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQ0FBMEM7Z0JBQ3BELFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSw0QkFBNEIsRUFBRTthQUM5Qzs7QUFPRCxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsZUFBZTtJQUcvRCxZQUFZLHdCQUFrRCxFQUFFLGdCQUFrQztRQUNoRyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsUUFBUTtRQUNOLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsV0FBVztRQUNULEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDeEMsQ0FBQzs7O1lBckJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUUscUJBQXFCO2FBQ2hDOzs7WUEzQkMsd0JBQXdCO1lBT3hCLGdCQUFnQjs7O2tDQXNCZixLQUFLOztBQTBCUixNQUFNLE9BQU8sd0JBQXdCO0lBUW5DLFlBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBTjlDLGtCQUFhLEdBQTBCLElBQUksQ0FBQztJQU1LLENBQUM7SUFKMUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFJRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7OztZQW5CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsc0RBQXNEO2FBQ2pFOzs7WUEvQ0MsZ0JBQWdCOzs7OEJBaURmLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2RrUG9ydGFsT3V0bGV0LCBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ256LWF2YXRhcltuei1jb21tZW50LWF2YXRhcl0nLFxuICBleHBvcnRBczogJ256Q29tbWVudEF2YXRhcidcbn0pXG5leHBvcnQgY2xhc3MgTnpDb21tZW50QXZhdGFyRGlyZWN0aXZlIHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ256LWNvbW1lbnQtY29udGVudCwgW256LWNvbW1lbnQtY29udGVudF0nLFxuICBleHBvcnRBczogJ256Q29tbWVudENvbnRlbnQnLFxuICBob3N0OiB7IGNsYXNzOiAnYW50LWNvbW1lbnQtY29udGVudC1kZXRhaWwnIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpDb21tZW50Q29udGVudERpcmVjdGl2ZSB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnpDb21tZW50QWN0aW9uSG9zdF0nLFxuICBleHBvcnRBczogJ256Q29tbWVudEFjdGlvbkhvc3QnXG59KVxuZXhwb3J0IGNsYXNzIE56Q29tbWVudEFjdGlvbkhvc3REaXJlY3RpdmUgZXh0ZW5kcyBDZGtQb3J0YWxPdXRsZXQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIG56Q29tbWVudEFjdGlvbkhvc3Q/OiBUZW1wbGF0ZVBvcnRhbCB8IG51bGw7XG5cbiAgY29uc3RydWN0b3IoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcihjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHZpZXdDb250YWluZXJSZWYpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hdHRhY2godGhpcy5uekNvbW1lbnRBY3Rpb25Ib3N0KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1jb21tZW50LWFjdGlvbicsXG4gIGV4cG9ydEFzOiAnbnpDb21tZW50QWN0aW9uJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgTnpDb21tZW50QWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSkgaW1wbGljaXRDb250ZW50ITogVGVtcGxhdGVSZWY8dm9pZD47XG4gIHByaXZhdGUgY29udGVudFBvcnRhbDogVGVtcGxhdGVQb3J0YWwgfCBudWxsID0gbnVsbDtcblxuICBnZXQgY29udGVudCgpOiBUZW1wbGF0ZVBvcnRhbCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnRQb3J0YWw7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb250ZW50UG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuaW1wbGljaXRDb250ZW50LCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICB9XG59XG4iXX0=