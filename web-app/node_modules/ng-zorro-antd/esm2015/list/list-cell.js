/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Directive, Input } from '@angular/core';
export class NzListEmptyComponent {
}
NzListEmptyComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-list-empty',
                exportAs: 'nzListHeader',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <nz-embed-empty [nzComponentName]="'list'" [specificContent]="nzNoResult"></nz-embed-empty> `,
                host: {
                    class: 'ant-list-empty-text'
                }
            },] }
];
NzListEmptyComponent.propDecorators = {
    nzNoResult: [{ type: Input }]
};
export class NzListHeaderComponent {
}
NzListHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-list-header',
                exportAs: 'nzListHeader',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <ng-content></ng-content> `,
                host: {
                    class: 'ant-list-header'
                }
            },] }
];
export class NzListFooterComponent {
}
NzListFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-list-footer',
                exportAs: 'nzListFooter',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <ng-content></ng-content> `,
                host: {
                    class: 'ant-list-footer'
                }
            },] }
];
export class NzListPaginationComponent {
}
NzListPaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-list-pagination',
                exportAs: 'nzListPagination',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <ng-content></ng-content> `,
                host: {
                    class: 'ant-list-pagination'
                }
            },] }
];
export class NzListLoadMoreDirective {
}
NzListLoadMoreDirective.decorators = [
    { type: Directive, args: [{
                selector: 'nz-list-load-more',
                exportAs: 'nzListLoadMoreDirective'
            },] }
];
export class NzListGridDirective {
}
NzListGridDirective.decorators = [
    { type: Directive, args: [{
                selector: 'nz-list[nzGrid]',
                host: {
                    class: 'ant-list-grid'
                }
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1jZWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9saXN0L2xpc3QtY2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFXbEcsTUFBTSxPQUFPLG9CQUFvQjs7O1lBVGhDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsK0ZBQStGO2dCQUN6RyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLHFCQUFxQjtpQkFDN0I7YUFDRjs7O3lCQUVFLEtBQUs7O0FBWVIsTUFBTSxPQUFPLHFCQUFxQjs7O1lBVGpDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsY0FBYztnQkFDeEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsaUJBQWlCO2lCQUN6QjthQUNGOztBQVlELE1BQU0sT0FBTyxxQkFBcUI7OztZQVRqQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLGlCQUFpQjtpQkFDekI7YUFDRjs7QUFZRCxNQUFNLE9BQU8seUJBQXlCOzs7WUFUckMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLHFCQUFxQjtpQkFDN0I7YUFDRjs7QUFPRCxNQUFNLE9BQU8sdUJBQXVCOzs7WUFKbkMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRSx5QkFBeUI7YUFDcEM7O0FBU0QsTUFBTSxPQUFPLG1CQUFtQjs7O1lBTi9CLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLGVBQWU7aUJBQ3ZCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1saXN0LWVtcHR5JyxcbiAgZXhwb3J0QXM6ICduekxpc3RIZWFkZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGAgPG56LWVtYmVkLWVtcHR5IFtuekNvbXBvbmVudE5hbWVdPVwiJ2xpc3QnXCIgW3NwZWNpZmljQ29udGVudF09XCJuek5vUmVzdWx0XCI+PC9uei1lbWJlZC1lbXB0eT4gYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LWxpc3QtZW1wdHktdGV4dCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekxpc3RFbXB0eUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG56Tm9SZXN1bHQ/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotbGlzdC1oZWFkZXInLFxuICBleHBvcnRBczogJ256TGlzdEhlYWRlcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC1saXN0LWhlYWRlcidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekxpc3RIZWFkZXJDb21wb25lbnQge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotbGlzdC1mb290ZXInLFxuICBleHBvcnRBczogJ256TGlzdEZvb3RlcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC1saXN0LWZvb3RlcidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekxpc3RGb290ZXJDb21wb25lbnQge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotbGlzdC1wYWdpbmF0aW9uJyxcbiAgZXhwb3J0QXM6ICduekxpc3RQYWdpbmF0aW9uJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LWxpc3QtcGFnaW5hdGlvbidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekxpc3RQYWdpbmF0aW9uQ29tcG9uZW50IHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ256LWxpc3QtbG9hZC1tb3JlJyxcbiAgZXhwb3J0QXM6ICduekxpc3RMb2FkTW9yZURpcmVjdGl2ZSdcbn0pXG5leHBvcnQgY2xhc3MgTnpMaXN0TG9hZE1vcmVEaXJlY3RpdmUge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbnotbGlzdFtuekdyaWRdJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LWxpc3QtZ3JpZCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekxpc3RHcmlkRGlyZWN0aXZlIHt9XG4iXX0=