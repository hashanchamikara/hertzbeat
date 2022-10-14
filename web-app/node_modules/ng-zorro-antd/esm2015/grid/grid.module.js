/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BidiModule } from '@angular/cdk/bidi';
import { LayoutModule } from '@angular/cdk/layout';
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzColDirective } from './col.directive';
import { NzRowDirective } from './row.directive';
export class NzGridModule {
}
NzGridModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NzColDirective, NzRowDirective],
                exports: [NzColDirective, NzRowDirective],
                imports: [BidiModule, CommonModule, LayoutModule, PlatformModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2dyaWQvZ3JpZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU9qRCxNQUFNLE9BQU8sWUFBWTs7O1lBTHhCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDO2dCQUM5QyxPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDO2dCQUN6QyxPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUM7YUFDbEUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBCaWRpTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgTGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XG5pbXBvcnQgeyBQbGF0Zm9ybU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpDb2xEaXJlY3RpdmUgfSBmcm9tICcuL2NvbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpSb3dEaXJlY3RpdmUgfSBmcm9tICcuL3Jvdy5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtOekNvbERpcmVjdGl2ZSwgTnpSb3dEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbTnpDb2xEaXJlY3RpdmUsIE56Um93RGlyZWN0aXZlXSxcbiAgaW1wb3J0czogW0JpZGlNb2R1bGUsIENvbW1vbk1vZHVsZSwgTGF5b3V0TW9kdWxlLCBQbGF0Zm9ybU1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTnpHcmlkTW9kdWxlIHt9XG4iXX0=