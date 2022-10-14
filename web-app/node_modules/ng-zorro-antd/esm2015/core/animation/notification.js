/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
export const notificationMotion = trigger('notificationMotion', [
    state('enterRight', style({ opacity: 1, transform: 'translateX(0)' })),
    transition('* => enterRight', [style({ opacity: 0, transform: 'translateX(5%)' }), animate('100ms linear')]),
    state('enterLeft', style({ opacity: 1, transform: 'translateX(0)' })),
    transition('* => enterLeft', [style({ opacity: 0, transform: 'translateX(-5%)' }), animate('100ms linear')]),
    state('leave', style({
        opacity: 0,
        transform: 'scaleY(0.8)',
        transformOrigin: '0% 0%'
    })),
    transition('* => leave', [
        style({
            opacity: 1,
            transform: 'scaleY(1)',
            transformOrigin: '0% 0%'
        }),
        animate('100ms linear')
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jb3JlL2FuaW1hdGlvbi9ub3RpZmljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBRUgsT0FBTyxFQUFFLE9BQU8sRUFBNEIsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFM0csTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQTZCLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRTtJQUN4RixLQUFLLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDdEUsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzVHLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztJQUNyRSxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDNUcsS0FBSyxDQUNILE9BQU8sRUFDUCxLQUFLLENBQUM7UUFDSixPQUFPLEVBQUUsQ0FBQztRQUNWLFNBQVMsRUFBRSxhQUFhO1FBQ3hCLGVBQWUsRUFBRSxPQUFPO0tBQ3pCLENBQUMsQ0FDSDtJQUNELFVBQVUsQ0FBQyxZQUFZLEVBQUU7UUFDdkIsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLENBQUM7WUFDVixTQUFTLEVBQUUsV0FBVztZQUN0QixlQUFlLEVBQUUsT0FBTztTQUN6QixDQUFDO1FBQ0YsT0FBTyxDQUFDLGNBQWMsQ0FBQztLQUN4QixDQUFDO0NBQ0gsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgYW5pbWF0ZSwgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuZXhwb3J0IGNvbnN0IG5vdGlmaWNhdGlvbk1vdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcignbm90aWZpY2F0aW9uTW90aW9uJywgW1xuICBzdGF0ZSgnZW50ZXJSaWdodCcsIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScgfSkpLFxuICB0cmFuc2l0aW9uKCcqID0+IGVudGVyUmlnaHQnLCBbc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDUlKScgfSksIGFuaW1hdGUoJzEwMG1zIGxpbmVhcicpXSksXG4gIHN0YXRlKCdlbnRlckxlZnQnLCBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknIH0pKSxcbiAgdHJhbnNpdGlvbignKiA9PiBlbnRlckxlZnQnLCBbc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01JSknIH0pLCBhbmltYXRlKCcxMDBtcyBsaW5lYXInKV0pLFxuICBzdGF0ZShcbiAgICAnbGVhdmUnLFxuICAgIHN0eWxlKHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMC44KScsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcbiAgICB9KVxuICApLFxuICB0cmFuc2l0aW9uKCcqID0+IGxlYXZlJywgW1xuICAgIHN0eWxlKHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnXG4gICAgfSksXG4gICAgYW5pbWF0ZSgnMTAwbXMgbGluZWFyJylcbiAgXSlcbl0pO1xuIl19