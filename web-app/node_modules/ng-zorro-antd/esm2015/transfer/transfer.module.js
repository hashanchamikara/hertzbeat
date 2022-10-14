/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BidiModule } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTransferListComponent } from './transfer-list.component';
import { NzTransferSearchComponent } from './transfer-search.component';
import { NzTransferComponent } from './transfer.component';
export class NzTransferModule {
}
NzTransferModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    BidiModule,
                    CommonModule,
                    FormsModule,
                    NzCheckboxModule,
                    NzButtonModule,
                    NzInputModule,
                    NzI18nModule,
                    NzIconModule,
                    NzEmptyModule
                ],
                declarations: [NzTransferComponent, NzTransferListComponent, NzTransferSearchComponent],
                exports: [NzTransferComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy90cmFuc2Zlci90cmFuc2Zlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXBELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBaUIzRCxNQUFNLE9BQU8sZ0JBQWdCOzs7WUFmNUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxVQUFVO29CQUNWLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxnQkFBZ0I7b0JBQ2hCLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixZQUFZO29CQUNaLFlBQVk7b0JBQ1osYUFBYTtpQkFDZDtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSx1QkFBdUIsRUFBRSx5QkFBeUIsQ0FBQztnQkFDdkYsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDL0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBCaWRpTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTnpCdXR0b25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2J1dHRvbic7XG5pbXBvcnQgeyBOekNoZWNrYm94TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jaGVja2JveCc7XG5pbXBvcnQgeyBOekVtcHR5TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9lbXB0eSc7XG5pbXBvcnQgeyBOekkxOG5Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56SW5wdXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2lucHV0JztcblxuaW1wb3J0IHsgTnpUcmFuc2Zlckxpc3RDb21wb25lbnQgfSBmcm9tICcuL3RyYW5zZmVyLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IE56VHJhbnNmZXJTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL3RyYW5zZmVyLXNlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpUcmFuc2ZlckNvbXBvbmVudCB9IGZyb20gJy4vdHJhbnNmZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEJpZGlNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE56Q2hlY2tib3hNb2R1bGUsXG4gICAgTnpCdXR0b25Nb2R1bGUsXG4gICAgTnpJbnB1dE1vZHVsZSxcbiAgICBOekkxOG5Nb2R1bGUsXG4gICAgTnpJY29uTW9kdWxlLFxuICAgIE56RW1wdHlNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTnpUcmFuc2ZlckNvbXBvbmVudCwgTnpUcmFuc2Zlckxpc3RDb21wb25lbnQsIE56VHJhbnNmZXJTZWFyY2hDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTnpUcmFuc2ZlckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTnpUcmFuc2Zlck1vZHVsZSB7fVxuIl19