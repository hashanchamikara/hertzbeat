/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive } from '@angular/core';
export class NzResultTitleDirective {
}
NzResultTitleDirective.decorators = [
    { type: Directive, args: [{
                selector: 'div[nz-result-title]',
                exportAs: 'nzResultTitle',
                host: {
                    class: 'ant-result-title'
                }
            },] }
];
export class NzResultSubtitleDirective {
}
NzResultSubtitleDirective.decorators = [
    { type: Directive, args: [{
                selector: 'div[nz-result-subtitle]',
                exportAs: 'nzResultSubtitle',
                host: {
                    class: 'ant-result-subtitle'
                }
            },] }
];
export class NzResultIconDirective {
}
NzResultIconDirective.decorators = [
    { type: Directive, args: [{
                selector: 'i[nz-result-icon], div[nz-result-icon]',
                exportAs: 'nzResultIcon'
            },] }
];
export class NzResultContentDirective {
}
NzResultContentDirective.decorators = [
    { type: Directive, args: [{
                selector: 'div[nz-result-content]',
                exportAs: 'nzResultContent',
                host: {
                    class: 'ant-result-content'
                }
            },] }
];
export class NzResultExtraDirective {
}
NzResultExtraDirective.decorators = [
    { type: Directive, args: [{
                selector: 'div[nz-result-extra]',
                exportAs: 'nzResultExtra',
                host: {
                    class: 'ant-result-extra'
                }
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LWNlbGxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9yZXN1bHQvcmVzdWx0LWNlbGxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTMUMsTUFBTSxPQUFPLHNCQUFzQjs7O1lBUGxDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsZUFBZTtnQkFDekIsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxrQkFBa0I7aUJBQzFCO2FBQ0Y7O0FBVUQsTUFBTSxPQUFPLHlCQUF5Qjs7O1lBUHJDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLHFCQUFxQjtpQkFDN0I7YUFDRjs7QUFPRCxNQUFNLE9BQU8scUJBQXFCOzs7WUFKakMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3Q0FBd0M7Z0JBQ2xELFFBQVEsRUFBRSxjQUFjO2FBQ3pCOztBQVVELE1BQU0sT0FBTyx3QkFBd0I7OztZQVBwQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxvQkFBb0I7aUJBQzVCO2FBQ0Y7O0FBVUQsTUFBTSxPQUFPLHNCQUFzQjs7O1lBUGxDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsZUFBZTtnQkFDekIsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxrQkFBa0I7aUJBQzFCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnZGl2W256LXJlc3VsdC10aXRsZV0nLFxuICBleHBvcnRBczogJ256UmVzdWx0VGl0bGUnLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtcmVzdWx0LXRpdGxlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56UmVzdWx0VGl0bGVEaXJlY3RpdmUge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnZGl2W256LXJlc3VsdC1zdWJ0aXRsZV0nLFxuICBleHBvcnRBczogJ256UmVzdWx0U3VidGl0bGUnLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtcmVzdWx0LXN1YnRpdGxlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56UmVzdWx0U3VidGl0bGVEaXJlY3RpdmUge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaVtuei1yZXN1bHQtaWNvbl0sIGRpdltuei1yZXN1bHQtaWNvbl0nLFxuICBleHBvcnRBczogJ256UmVzdWx0SWNvbidcbn0pXG5leHBvcnQgY2xhc3MgTnpSZXN1bHRJY29uRGlyZWN0aXZlIHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2Rpdltuei1yZXN1bHQtY29udGVudF0nLFxuICBleHBvcnRBczogJ256UmVzdWx0Q29udGVudCcsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC1yZXN1bHQtY29udGVudCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelJlc3VsdENvbnRlbnREaXJlY3RpdmUge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnZGl2W256LXJlc3VsdC1leHRyYV0nLFxuICBleHBvcnRBczogJ256UmVzdWx0RXh0cmEnLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtcmVzdWx0LWV4dHJhJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56UmVzdWx0RXh0cmFEaXJlY3RpdmUge31cbiJdfQ==