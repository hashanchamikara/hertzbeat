/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class NzListItemMetaTitleComponent {
}
NzListItemMetaTitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-list-item-meta-title',
                exportAs: 'nzListItemMetaTitle',
                template: `
    <h4 class="ant-list-item-meta-title">
      <ng-content></ng-content>
    </h4>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
export class NzListItemMetaDescriptionComponent {
}
NzListItemMetaDescriptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-list-item-meta-description',
                exportAs: 'nzListItemMetaDescription',
                template: `
    <div class="ant-list-item-meta-description">
      <ng-content></ng-content>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
export class NzListItemMetaAvatarComponent {
}
NzListItemMetaAvatarComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-list-item-meta-avatar',
                exportAs: 'nzListItemMetaAvatar',
                template: `
    <div class="ant-list-item-meta-avatar">
      <nz-avatar *ngIf="nzSrc" [nzSrc]="nzSrc"></nz-avatar>
      <ng-content *ngIf="!nzSrc"></ng-content>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NzListItemMetaAvatarComponent.propDecorators = {
    nzSrc: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLW1ldGEtY2VsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvbGlzdC9saXN0LWl0ZW0tbWV0YS1jZWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBWTFFLE1BQU0sT0FBTyw0QkFBNEI7OztZQVZ4QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFOzs7O0dBSVQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7O0FBYUQsTUFBTSxPQUFPLGtDQUFrQzs7O1lBVjlDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxRQUFRLEVBQUU7Ozs7R0FJVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7QUFjRCxNQUFNLE9BQU8sNkJBQTZCOzs7WUFYekMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7R0FLVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O29CQUVFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1saXN0LWl0ZW0tbWV0YS10aXRsZScsXG4gIGV4cG9ydEFzOiAnbnpMaXN0SXRlbU1ldGFUaXRsZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGg0IGNsYXNzPVwiYW50LWxpc3QtaXRlbS1tZXRhLXRpdGxlXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9oND5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTnpMaXN0SXRlbU1ldGFUaXRsZUNvbXBvbmVudCB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1saXN0LWl0ZW0tbWV0YS1kZXNjcmlwdGlvbicsXG4gIGV4cG9ydEFzOiAnbnpMaXN0SXRlbU1ldGFEZXNjcmlwdGlvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImFudC1saXN0LWl0ZW0tbWV0YS1kZXNjcmlwdGlvblwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOekxpc3RJdGVtTWV0YURlc2NyaXB0aW9uQ29tcG9uZW50IHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWxpc3QtaXRlbS1tZXRhLWF2YXRhcicsXG4gIGV4cG9ydEFzOiAnbnpMaXN0SXRlbU1ldGFBdmF0YXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJhbnQtbGlzdC1pdGVtLW1ldGEtYXZhdGFyXCI+XG4gICAgICA8bnotYXZhdGFyICpuZ0lmPVwibnpTcmNcIiBbbnpTcmNdPVwibnpTcmNcIj48L256LWF2YXRhcj5cbiAgICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIW56U3JjXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOekxpc3RJdGVtTWV0YUF2YXRhckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG56U3JjPzogc3RyaW5nO1xufVxuIl19