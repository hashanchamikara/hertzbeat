/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BidiModule } from '@angular/cdk/bidi';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPipesModule } from 'ng-zorro-antd/pipes';
import { NzModalCloseComponent } from './modal-close.component';
import { NzModalConfirmContainerComponent } from './modal-confirm-container.component';
import { NzModalContainerComponent } from './modal-container.component';
import { NzModalContentDirective } from './modal-content.directive';
import { NzModalFooterComponent } from './modal-footer.component';
import { NzModalFooterDirective } from './modal-footer.directive';
import { NzModalTitleComponent } from './modal-title.component';
import { NzModalTitleDirective } from './modal-title.directive';
import { NzModalComponent } from './modal.component';
import { NzModalService } from './modal.service';
export class NzModalModule {
}
NzModalModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    BidiModule,
                    OverlayModule,
                    NzOutletModule,
                    PortalModule,
                    NzI18nModule,
                    NzButtonModule,
                    NzIconModule,
                    NzPipesModule,
                    NzNoAnimationModule,
                    NzPipesModule
                ],
                exports: [NzModalComponent, NzModalFooterDirective, NzModalContentDirective, NzModalTitleDirective],
                providers: [NzModalService],
                entryComponents: [NzModalContainerComponent, NzModalConfirmContainerComponent],
                declarations: [
                    NzModalComponent,
                    NzModalFooterDirective,
                    NzModalContentDirective,
                    NzModalCloseComponent,
                    NzModalFooterComponent,
                    NzModalTitleComponent,
                    NzModalTitleDirective,
                    NzModalContainerComponent,
                    NzModalConfirmContainerComponent,
                    NzModalComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9tb2RhbC9tb2RhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFnQ2pELE1BQU0sT0FBTyxhQUFhOzs7WUE5QnpCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixVQUFVO29CQUNWLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxZQUFZO29CQUNaLGFBQWE7b0JBQ2IsbUJBQW1CO29CQUNuQixhQUFhO2lCQUNkO2dCQUNELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLHNCQUFzQixFQUFFLHVCQUF1QixFQUFFLHFCQUFxQixDQUFDO2dCQUNuRyxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQzNCLGVBQWUsRUFBRSxDQUFDLHlCQUF5QixFQUFFLGdDQUFnQyxDQUFDO2dCQUM5RSxZQUFZLEVBQUU7b0JBQ1osZ0JBQWdCO29CQUNoQixzQkFBc0I7b0JBQ3RCLHVCQUF1QjtvQkFDdkIscUJBQXFCO29CQUNyQixzQkFBc0I7b0JBQ3RCLHFCQUFxQjtvQkFDckIscUJBQXFCO29CQUNyQix5QkFBeUI7b0JBQ3pCLGdDQUFnQztvQkFDaEMsZ0JBQWdCO2lCQUNqQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQmlkaU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekJ1dHRvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYnV0dG9uJztcbmltcG9ydCB7IE56Tm9BbmltYXRpb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcbmltcG9ydCB7IE56T3V0bGV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL291dGxldCc7XG5pbXBvcnQgeyBOekkxOG5Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56UGlwZXNNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3BpcGVzJztcblxuaW1wb3J0IHsgTnpNb2RhbENsb3NlQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC1jbG9zZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpNb2RhbENvbmZpcm1Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLWNvbmZpcm0tY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek1vZGFsQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE56TW9kYWxDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9tb2RhbC1jb250ZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOek1vZGFsRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC1mb290ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE56TW9kYWxGb290ZXJEaXJlY3RpdmUgfSBmcm9tICcuL21vZGFsLWZvb3Rlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpNb2RhbFRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC10aXRsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpNb2RhbFRpdGxlRGlyZWN0aXZlIH0gZnJvbSAnLi9tb2RhbC10aXRsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IE56TW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9tb2RhbC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBCaWRpTW9kdWxlLFxuICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgTnpPdXRsZXRNb2R1bGUsXG4gICAgUG9ydGFsTW9kdWxlLFxuICAgIE56STE4bk1vZHVsZSxcbiAgICBOekJ1dHRvbk1vZHVsZSxcbiAgICBOekljb25Nb2R1bGUsXG4gICAgTnpQaXBlc01vZHVsZSxcbiAgICBOek5vQW5pbWF0aW9uTW9kdWxlLFxuICAgIE56UGlwZXNNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW056TW9kYWxDb21wb25lbnQsIE56TW9kYWxGb290ZXJEaXJlY3RpdmUsIE56TW9kYWxDb250ZW50RGlyZWN0aXZlLCBOek1vZGFsVGl0bGVEaXJlY3RpdmVdLFxuICBwcm92aWRlcnM6IFtOek1vZGFsU2VydmljZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW056TW9kYWxDb250YWluZXJDb21wb25lbnQsIE56TW9kYWxDb25maXJtQ29udGFpbmVyQ29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTnpNb2RhbENvbXBvbmVudCxcbiAgICBOek1vZGFsRm9vdGVyRGlyZWN0aXZlLFxuICAgIE56TW9kYWxDb250ZW50RGlyZWN0aXZlLFxuICAgIE56TW9kYWxDbG9zZUNvbXBvbmVudCxcbiAgICBOek1vZGFsRm9vdGVyQ29tcG9uZW50LFxuICAgIE56TW9kYWxUaXRsZUNvbXBvbmVudCxcbiAgICBOek1vZGFsVGl0bGVEaXJlY3RpdmUsXG4gICAgTnpNb2RhbENvbnRhaW5lckNvbXBvbmVudCxcbiAgICBOek1vZGFsQ29uZmlybUNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBOek1vZGFsQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpNb2RhbE1vZHVsZSB7fVxuIl19