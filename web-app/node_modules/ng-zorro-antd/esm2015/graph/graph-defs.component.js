/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Component } from '@angular/core';
export class NzGraphDefsComponent {
    constructor() { }
}
NzGraphDefsComponent.decorators = [
    { type: Component, args: [{
                selector: 'svg:defs[nz-graph-defs]',
                template: `
    <svg:marker
      class="nz-graph-edge-marker"
      id="edge-end-arrow"
      viewBox="1 0 20 20"
      refX="8"
      refY="3.5"
      markerWidth="10"
      markerHeight="10"
      orient="auto"
    >
      <svg:polygon points="0 0, 10 3.5, 0 7"></svg:polygon>
    </svg:marker>
  `
            },] }
];
NzGraphDefsComponent.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGgtZGVmcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2dyYXBoL2dyYXBoLWRlZnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFtQjFDLE1BQU0sT0FBTyxvQkFBb0I7SUFDL0IsZ0JBQWUsQ0FBQzs7O1lBbEJqQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O0dBYVQ7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdmc6ZGVmc1tuei1ncmFwaC1kZWZzXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZzptYXJrZXJcbiAgICAgIGNsYXNzPVwibnotZ3JhcGgtZWRnZS1tYXJrZXJcIlxuICAgICAgaWQ9XCJlZGdlLWVuZC1hcnJvd1wiXG4gICAgICB2aWV3Qm94PVwiMSAwIDIwIDIwXCJcbiAgICAgIHJlZlg9XCI4XCJcbiAgICAgIHJlZlk9XCIzLjVcIlxuICAgICAgbWFya2VyV2lkdGg9XCIxMFwiXG4gICAgICBtYXJrZXJIZWlnaHQ9XCIxMFwiXG4gICAgICBvcmllbnQ9XCJhdXRvXCJcbiAgICA+XG4gICAgICA8c3ZnOnBvbHlnb24gcG9pbnRzPVwiMCAwLCAxMCAzLjUsIDAgN1wiPjwvc3ZnOnBvbHlnb24+XG4gICAgPC9zdmc6bWFya2VyPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE56R3JhcGhEZWZzQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuIl19