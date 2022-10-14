/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';
export class NzSelectSearchComponent {
    constructor(elementRef, renderer, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.focusMonitor = focusMonitor;
        this.nzId = null;
        this.disabled = false;
        this.mirrorSync = false;
        this.showInput = true;
        this.focusTrigger = false;
        this.value = '';
        this.autofocus = false;
        this.valueChange = new EventEmitter();
        this.isComposingChange = new EventEmitter();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-select-selection-search');
    }
    setCompositionState(isComposing) {
        this.isComposingChange.next(isComposing);
    }
    onValueChange(value) {
        this.value = value;
        this.valueChange.next(value);
        if (this.mirrorSync) {
            this.syncMirrorWidth();
        }
    }
    clearInputValue() {
        const inputDOM = this.inputElement.nativeElement;
        inputDOM.value = '';
        this.onValueChange('');
    }
    syncMirrorWidth() {
        const mirrorDOM = this.mirrorElement.nativeElement;
        const hostDOM = this.elementRef.nativeElement;
        const inputDOM = this.inputElement.nativeElement;
        this.renderer.removeStyle(hostDOM, 'width');
        mirrorDOM.innerHTML = this.renderer.createText(`${inputDOM.value}&nbsp;`);
        this.renderer.setStyle(hostDOM, 'width', `${mirrorDOM.scrollWidth}px`);
    }
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    blur() {
        this.inputElement.nativeElement.blur();
    }
    ngOnChanges(changes) {
        const inputDOM = this.inputElement.nativeElement;
        const { focusTrigger, showInput } = changes;
        if (showInput) {
            if (this.showInput) {
                this.renderer.removeAttribute(inputDOM, 'readonly');
            }
            else {
                this.renderer.setAttribute(inputDOM, 'readonly', 'readonly');
            }
        }
        // IE11 cannot input value if focused before removing readonly
        if (focusTrigger && focusTrigger.currentValue === true && focusTrigger.previousValue === false) {
            inputDOM.focus();
        }
    }
    ngAfterViewInit() {
        if (this.mirrorSync) {
            this.syncMirrorWidth();
        }
        if (this.autofocus) {
            this.focus();
        }
    }
}
NzSelectSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-select-search',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <input
      #inputElement
      [attr.id]="nzId"
      autocomplete="off"
      class="ant-select-selection-search-input"
      [ngModel]="value"
      [attr.autofocus]="autofocus ? 'autofocus' : null"
      [disabled]="disabled"
      [style.opacity]="showInput ? null : 0"
      (ngModelChange)="onValueChange($event)"
      (compositionstart)="setCompositionState(true)"
      (compositionend)="setCompositionState(false)"
    />
    <span #mirrorElement *ngIf="mirrorSync" class="ant-select-selection-search-mirror"></span>
  `,
                providers: [{ provide: COMPOSITION_BUFFER_MODE, useValue: false }]
            },] }
];
NzSelectSearchComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: FocusMonitor }
];
NzSelectSearchComponent.propDecorators = {
    nzId: [{ type: Input }],
    disabled: [{ type: Input }],
    mirrorSync: [{ type: Input }],
    showInput: [{ type: Input }],
    focusTrigger: [{ type: Input }],
    value: [{ type: Input }],
    autofocus: [{ type: Input }],
    valueChange: [{ type: Output }],
    isComposingChange: [{ type: Output }],
    inputElement: [{ type: ViewChild, args: ['inputElement', { static: true },] }],
    mirrorElement: [{ type: ViewChild, args: ['mirrorElement', { static: false },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3Qtc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFFVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBd0J6RCxNQUFNLE9BQU8sdUJBQXVCO0lBZ0RsQyxZQUFvQixVQUFzQixFQUFVLFFBQW1CLEVBQVUsWUFBMEI7UUFBdkYsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQS9DbEcsU0FBSSxHQUFrQixJQUFJLENBQUM7UUFDM0IsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDUixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDekMsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQXdDakUsbURBQW1EO1FBQ25ELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBdENELG1CQUFtQixDQUFDLFdB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RUFBRSxLQUFLLEVBQUUsQ0FBQzthQUNuRTs7O1lBakNDLFVBQVU7WUFLVixTQUFTO1lBVkYsWUFBWTs7O21CQXdDbEIsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLO29CQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxNQUFNO2dDQUNOLE1BQU07MkJBQ04sU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NEJBQzFDLFNBQVMsU0FBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENPTVBPU0lUSU9OX0JVRkZFUl9NT0RFIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1zZWxlY3Qtc2VhcmNoJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGlucHV0XG4gICAgICAjaW5wdXRFbGVtZW50XG4gICAgICBbYXR0ci5pZF09XCJueklkXCJcbiAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uLXNlYXJjaC1pbnB1dFwiXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICBbYXR0ci5hdXRvZm9jdXNdPVwiYXV0b2ZvY3VzID8gJ2F1dG9mb2N1cycgOiBudWxsXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbc3R5bGUub3BhY2l0eV09XCJzaG93SW5wdXQgPyBudWxsIDogMFwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJvblZhbHVlQ2hhbmdlKCRldmVudClcIlxuICAgICAgKGNvbXBvc2l0aW9uc3RhcnQpPVwic2V0Q29tcG9zaXRpb25TdGF0ZSh0cnVlKVwiXG4gICAgICAoY29tcG9zaXRpb25lbmQpPVwic2V0Q29tcG9zaXRpb25TdGF0ZShmYWxzZSlcIlxuICAgIC8+XG4gICAgPHNwYW4gI21pcnJvckVsZW1lbnQgKm5nSWY9XCJtaXJyb3JTeW5jXCIgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbi1zZWFyY2gtbWlycm9yXCI+PC9zcGFuPlxuICBgLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENPTVBPU0lUSU9OX0JVRkZFUl9NT0RFLCB1c2VWYWx1ZTogZmFsc2UgfV1cbn0pXG5leHBvcnQgY2xhc3MgTnpTZWxlY3RTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBueklkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbWlycm9yU3luYyA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93SW5wdXQgPSB0cnVlO1xuICBASW5wdXQoKSBmb2N1c1RyaWdnZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgdmFsdWUgPSAnJztcbiAgQElucHV0KCkgYXV0b2ZvY3VzID0gZmFsc2U7XG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgaXNDb21wb3NpbmdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0RWxlbWVudCE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ21pcnJvckVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgbWlycm9yRWxlbWVudD86IEVsZW1lbnRSZWY7XG5cbiAgc2V0Q29tcG9zaXRpb25TdGF0ZShpc0NvbXBvc2luZzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXNDb21wb3NpbmdDaGFuZ2UubmV4dChpc0NvbXBvc2luZyk7XG4gIH1cblxuICBvblZhbHVlQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5uZXh0KHZhbHVlKTtcbiAgICBpZiAodGhpcy5taXJyb3JTeW5jKSB7XG4gICAgICB0aGlzLnN5bmNNaXJyb3JXaWR0aCgpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFySW5wdXRWYWx1ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBpbnB1dERPTSA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgaW5wdXRET00udmFsdWUgPSAnJztcbiAgICB0aGlzLm9uVmFsdWVDaGFuZ2UoJycpO1xuICB9XG5cbiAgc3luY01pcnJvcldpZHRoKCk6IHZvaWQge1xuICAgIGNvbnN0IG1pcnJvckRPTSA9IHRoaXMubWlycm9yRWxlbWVudCEubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBob3N0RE9NID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgaW5wdXRET00gPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUoaG9zdERPTSwgJ3dpZHRoJyk7XG4gICAgbWlycm9yRE9NLmlubmVySFRNTCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dChgJHtpbnB1dERPTS52YWx1ZX0mbmJzcDtgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGhvc3RET00sICd3aWR0aCcsIGAke21pcnJvckRPTS5zY3JvbGxXaWR0aH1weGApO1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5pbnB1dEVsZW1lbnQsICdrZXlib2FyZCcpO1xuICB9XG5cbiAgYmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yKSB7XG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW50LXNlbGVjdC1zZWxlY3Rpb24tc2VhcmNoJyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgaW5wdXRET00gPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHsgZm9jdXNUcmlnZ2VyLCBzaG93SW5wdXQgfSA9IGNoYW5nZXM7XG5cbiAgICBpZiAoc2hvd0lucHV0KSB7XG4gICAgICBpZiAodGhpcy5zaG93SW5wdXQpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoaW5wdXRET00sICdyZWFkb25seScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoaW5wdXRET00sICdyZWFkb25seScsICdyZWFkb25seScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElFMTEgY2Fubm90IGlucHV0IHZhbHVlIGlmIGZvY3VzZWQgYmVmb3JlIHJlbW92aW5nIHJlYWRvbmx5XG4gICAgaWYgKGZvY3VzVHJpZ2dlciAmJiBmb2N1c1RyaWdnZXIuY3VycmVudFZhbHVlID09PSB0cnVlICYmIGZvY3VzVHJpZ2dlci5wcmV2aW91c1ZhbHVlID09PSBmYWxzZSkge1xuICAgICAgaW5wdXRET00uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubWlycm9yU3luYykge1xuICAgICAgdGhpcy5zeW5jTWlycm9yV2lkdGgoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYXV0b2ZvY3VzKSB7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuICB9XG59XG4iXX0=