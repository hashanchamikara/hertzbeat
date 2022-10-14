/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * A collection module of standard output for all lib components
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { DateHeaderComponent } from './date-header.component';
import { DateTableComponent } from './date-table.component';
import { DecadeHeaderComponent } from './decade-header.component';
import { DecadeTableComponent } from './decade-table.component';
import { MonthHeaderComponent } from './month-header.component';
import { MonthTableComponent } from './month-table.component';
import { YearHeaderComponent } from './year-header.component';
import { YearTableComponent } from './year-table.component';
export class LibPackerModule {
}
LibPackerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, NzI18nModule, NzTimePickerModule, NzOutletModule],
                exports: [
                    DateHeaderComponent,
                    DateTableComponent,
                    DecadeHeaderComponent,
                    DecadeTableComponent,
                    MonthHeaderComponent,
                    MonthTableComponent,
                    YearHeaderComponent,
                    YearTableComponent
                ],
                declarations: [
                    DateHeaderComponent,
                    DateTableComponent,
                    DecadeHeaderComponent,
                    DecadeTableComponent,
                    MonthHeaderComponent,
                    MonthTableComponent,
                    YearHeaderComponent,
                    YearTableComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLXBhY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2RhdGUtcGlja2VyL2xpYi9saWItcGFja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFFSDs7R0FFRztBQUVILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBeUI1RCxNQUFNLE9BQU8sZUFBZTs7O1lBdkIzQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxDQUFDO2dCQUN0RixPQUFPLEVBQUU7b0JBQ1AsbUJBQW1CO29CQUNuQixrQkFBa0I7b0JBQ2xCLHFCQUFxQjtvQkFDckIsb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQixrQkFBa0I7aUJBQ25CO2dCQUNELFlBQVksRUFBRTtvQkFDWixtQkFBbUI7b0JBQ25CLGtCQUFrQjtvQkFDbEIscUJBQXFCO29CQUNyQixvQkFBb0I7b0JBQ3BCLG9CQUFvQjtvQkFDcEIsbUJBQW1CO29CQUNuQixtQkFBbUI7b0JBQ25CLGtCQUFrQjtpQkFDbkI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG1vZHVsZSBvZiBzdGFuZGFyZCBvdXRwdXQgZm9yIGFsbCBsaWIgY29tcG9uZW50c1xuICovXG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOek91dGxldE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9vdXRsZXQnO1xuXG5pbXBvcnQgeyBOekkxOG5Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgTnpUaW1lUGlja2VyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90aW1lLXBpY2tlcic7XG5pbXBvcnQgeyBEYXRlSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZWNhZGVIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2RlY2FkZS1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERlY2FkZVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9kZWNhZGUtdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IE1vbnRoSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9tb250aC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1vbnRoVGFibGVDb21wb25lbnQgfSBmcm9tICcuL21vbnRoLXRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBZZWFySGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi95ZWFyLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgWWVhclRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi95ZWFyLXRhYmxlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBOekkxOG5Nb2R1bGUsIE56VGltZVBpY2tlck1vZHVsZSwgTnpPdXRsZXRNb2R1bGVdLFxuICBleHBvcnRzOiBbXG4gICAgRGF0ZUhlYWRlckNvbXBvbmVudCxcbiAgICBEYXRlVGFibGVDb21wb25lbnQsXG4gICAgRGVjYWRlSGVhZGVyQ29tcG9uZW50LFxuICAgIERlY2FkZVRhYmxlQ29tcG9uZW50LFxuICAgIE1vbnRoSGVhZGVyQ29tcG9uZW50LFxuICAgIE1vbnRoVGFibGVDb21wb25lbnQsXG4gICAgWWVhckhlYWRlckNvbXBvbmVudCxcbiAgICBZZWFyVGFibGVDb21wb25lbnRcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRGF0ZUhlYWRlckNvbXBvbmVudCxcbiAgICBEYXRlVGFibGVDb21wb25lbnQsXG4gICAgRGVjYWRlSGVhZGVyQ29tcG9uZW50LFxuICAgIERlY2FkZVRhYmxlQ29tcG9uZW50LFxuICAgIE1vbnRoSGVhZGVyQ29tcG9uZW50LFxuICAgIE1vbnRoVGFibGVDb21wb25lbnQsXG4gICAgWWVhckhlYWRlckNvbXBvbmVudCxcbiAgICBZZWFyVGFibGVDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMaWJQYWNrZXJNb2R1bGUge31cbiJdfQ==