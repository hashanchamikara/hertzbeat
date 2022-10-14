/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BidiModule } from '@angular/cdk/bidi';
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAutosizeDirective } from './autosize.directive';
import { NzInputGroupSlotComponent } from './input-group-slot.component';
import { NzInputGroupComponent, NzInputGroupWhitSuffixOrPrefixDirective } from './input-group.component';
import { NzInputDirective } from './input.directive';
import { NzTextareaCountComponent } from './textarea-count.component';
export class NzInputModule {
}
NzInputModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NzTextareaCountComponent,
                    NzInputDirective,
                    NzInputGroupComponent,
                    NzAutosizeDirective,
                    NzInputGroupSlotComponent,
                    NzInputGroupWhitSuffixOrPrefixDirective
                ],
                exports: [
                    NzTextareaCountComponent,
                    NzInputDirective,
                    NzInputGroupComponent,
                    NzAutosizeDirective,
                    NzInputGroupWhitSuffixOrPrefixDirective
                ],
                imports: [BidiModule, CommonModule, NzIconModule, PlatformModule, NzOutletModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9pbnB1dC9pbnB1dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBb0J0RSxNQUFNLE9BQU8sYUFBYTs7O1lBbEJ6QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLHdCQUF3QjtvQkFDeEIsZ0JBQWdCO29CQUNoQixxQkFBcUI7b0JBQ3JCLG1CQUFtQjtvQkFDbkIseUJBQXlCO29CQUN6Qix1Q0FBdUM7aUJBQ3hDO2dCQUNELE9BQU8sRUFBRTtvQkFDUCx3QkFBd0I7b0JBQ3hCLGdCQUFnQjtvQkFDaEIscUJBQXFCO29CQUNyQixtQkFBbUI7b0JBQ25CLHVDQUF1QztpQkFDeEM7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQzthQUNsRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEJpZGlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBQbGF0Zm9ybU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpPdXRsZXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3V0bGV0JztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5cbmltcG9ydCB7IE56QXV0b3NpemVEaXJlY3RpdmUgfSBmcm9tICcuL2F1dG9zaXplLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOeklucHV0R3JvdXBTbG90Q29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC1ncm91cC1zbG90LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOeklucHV0R3JvdXBDb21wb25lbnQsIE56SW5wdXRHcm91cFdoaXRTdWZmaXhPclByZWZpeERpcmVjdGl2ZSB9IGZyb20gJy4vaW5wdXQtZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IE56SW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL2lucHV0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOelRleHRhcmVhQ291bnRDb21wb25lbnQgfSBmcm9tICcuL3RleHRhcmVhLWNvdW50LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE56VGV4dGFyZWFDb3VudENvbXBvbmVudCxcbiAgICBOeklucHV0RGlyZWN0aXZlLFxuICAgIE56SW5wdXRHcm91cENvbXBvbmVudCxcbiAgICBOekF1dG9zaXplRGlyZWN0aXZlLFxuICAgIE56SW5wdXRHcm91cFNsb3RDb21wb25lbnQsXG4gICAgTnpJbnB1dEdyb3VwV2hpdFN1ZmZpeE9yUHJlZml4RGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOelRleHRhcmVhQ291bnRDb21wb25lbnQsXG4gICAgTnpJbnB1dERpcmVjdGl2ZSxcbiAgICBOeklucHV0R3JvdXBDb21wb25lbnQsXG4gICAgTnpBdXRvc2l6ZURpcmVjdGl2ZSxcbiAgICBOeklucHV0R3JvdXBXaGl0U3VmZml4T3JQcmVmaXhEaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW0JpZGlNb2R1bGUsIENvbW1vbk1vZHVsZSwgTnpJY29uTW9kdWxlLCBQbGF0Zm9ybU1vZHVsZSwgTnpPdXRsZXRNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIE56SW5wdXRNb2R1bGUge31cbiJdfQ==