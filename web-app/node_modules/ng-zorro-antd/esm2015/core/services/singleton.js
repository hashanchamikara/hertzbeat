/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable } from '@angular/core';
import { environment } from 'ng-zorro-antd/core/environments';
import * as i0 from "@angular/core";
/**
 * When running in test, singletons should not be destroyed. So we keep references of singletons
 * in this global variable.
 */
const testSingleRegistry = new Map();
/**
 * Some singletons should have life cycle that is same to Angular's. This service make sure that
 * those singletons get destroyed in HMR.
 */
export class NzSingletonService {
    constructor() {
        /**
         * This registry is used to register singleton in dev mode.
         * So that singletons get destroyed when hot module reload happens.
         *
         * This works in prod mode too but with no specific effect.
         */
        this._singletonRegistry = new Map();
    }
    get singletonRegistry() {
        return environment.isTestMode ? testSingleRegistry : this._singletonRegistry;
    }
    registerSingletonWithKey(key, target) {
        const alreadyHave = this.singletonRegistry.has(key);
        const item = alreadyHave ? this.singletonRegistry.get(key) : this.withNewTarget(target);
        if (!alreadyHave) {
            this.singletonRegistry.set(key, item);
        }
    }
    getSingletonWithKey(key) {
        return this.singletonRegistry.has(key) ? this.singletonRegistry.get(key).target : null;
    }
    withNewTarget(target) {
        return {
            target
        };
    }
}
NzSingletonService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzSingletonService_Factory() { return new NzSingletonService(); }, token: NzSingletonService, providedIn: "root" });
NzSingletonService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xldG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jb3JlL3NlcnZpY2VzL3NpbmdsZXRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7QUFPOUQ7OztHQUdHO0FBQ0gsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLEdBQUcsRUFBaUMsQ0FBQztBQUVwRTs7O0dBR0c7QUFJSCxNQUFNLE9BQU8sa0JBQWtCO0lBSC9CO1FBUUU7Ozs7O1dBS0c7UUFDSyx1QkFBa0IsR0FBRyxJQUFJLEdBQUcsRUFBaUMsQ0FBQztLQW9CdkU7SUE5QkMsSUFBWSxpQkFBaUI7UUFDM0IsT0FBTyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQy9FLENBQUM7SUFVRCx3QkFBd0IsQ0FBQyxHQUFXLEVBQUUsTUFBaUI7UUFDckQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwRCxNQUFNLElBQUksR0FBMEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWhILElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBRUQsbUJBQW1CLENBQUksR0FBVztRQUNoQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFFLENBQUMsTUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDakcsQ0FBQztJQUVPLGFBQWEsQ0FBQyxNQUFpQjtRQUNyQyxPQUFPO1lBQ0wsTUFBTTtTQUNQLENBQUM7SUFDSixDQUFDOzs7O1lBakNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvZW52aXJvbm1lbnRzJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmludGVyZmFjZSBTaW5nbGV0b25SZWdpc3RyeUl0ZW0ge1xuICB0YXJnZXQ6IE56U2FmZUFueTtcbn1cblxuLyoqXG4gKiBXaGVuIHJ1bm5pbmcgaW4gdGVzdCwgc2luZ2xldG9ucyBzaG91bGQgbm90IGJlIGRlc3Ryb3llZC4gU28gd2Uga2VlcCByZWZlcmVuY2VzIG9mIHNpbmdsZXRvbnNcbiAqIGluIHRoaXMgZ2xvYmFsIHZhcmlhYmxlLlxuICovXG5jb25zdCB0ZXN0U2luZ2xlUmVnaXN0cnkgPSBuZXcgTWFwPHN0cmluZywgU2luZ2xldG9uUmVnaXN0cnlJdGVtPigpO1xuXG4vKipcbiAqIFNvbWUgc2luZ2xldG9ucyBzaG91bGQgaGF2ZSBsaWZlIGN5Y2xlIHRoYXQgaXMgc2FtZSB0byBBbmd1bGFyJ3MuIFRoaXMgc2VydmljZSBtYWtlIHN1cmUgdGhhdFxuICogdGhvc2Ugc2luZ2xldG9ucyBnZXQgZGVzdHJveWVkIGluIEhNUi5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTnpTaW5nbGV0b25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBnZXQgc2luZ2xldG9uUmVnaXN0cnkoKTogTWFwPHN0cmluZywgU2luZ2xldG9uUmVnaXN0cnlJdGVtPiB7XG4gICAgcmV0dXJuIGVudmlyb25tZW50LmlzVGVzdE1vZGUgPyB0ZXN0U2luZ2xlUmVnaXN0cnkgOiB0aGlzLl9zaW5nbGV0b25SZWdpc3RyeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIHJlZ2lzdHJ5IGlzIHVzZWQgdG8gcmVnaXN0ZXIgc2luZ2xldG9uIGluIGRldiBtb2RlLlxuICAgKiBTbyB0aGF0IHNpbmdsZXRvbnMgZ2V0IGRlc3Ryb3llZCB3aGVuIGhvdCBtb2R1bGUgcmVsb2FkIGhhcHBlbnMuXG4gICAqXG4gICAqIFRoaXMgd29ya3MgaW4gcHJvZCBtb2RlIHRvbyBidXQgd2l0aCBubyBzcGVjaWZpYyBlZmZlY3QuXG4gICAqL1xuICBwcml2YXRlIF9zaW5nbGV0b25SZWdpc3RyeSA9IG5ldyBNYXA8c3RyaW5nLCBTaW5nbGV0b25SZWdpc3RyeUl0ZW0+KCk7XG5cbiAgcmVnaXN0ZXJTaW5nbGV0b25XaXRoS2V5KGtleTogc3RyaW5nLCB0YXJnZXQ6IE56U2FmZUFueSk6IHZvaWQge1xuICAgIGNvbnN0IGFscmVhZHlIYXZlID0gdGhpcy5zaW5nbGV0b25SZWdpc3RyeS5oYXMoa2V5KTtcbiAgICBjb25zdCBpdGVtOiBTaW5nbGV0b25SZWdpc3RyeUl0ZW0gPSBhbHJlYWR5SGF2ZSA/IHRoaXMuc2luZ2xldG9uUmVnaXN0cnkuZ2V0KGtleSkhIDogdGhpcy53aXRoTmV3VGFyZ2V0KHRhcmdldCk7XG5cbiAgICBpZiAoIWFscmVhZHlIYXZlKSB7XG4gICAgICB0aGlzLnNpbmdsZXRvblJlZ2lzdHJ5LnNldChrZXksIGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIGdldFNpbmdsZXRvbldpdGhLZXk8VD4oa2V5OiBzdHJpbmcpOiBUIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc2luZ2xldG9uUmVnaXN0cnkuaGFzKGtleSkgPyAodGhpcy5zaW5nbGV0b25SZWdpc3RyeS5nZXQoa2V5KSEudGFyZ2V0IGFzIFQpIDogbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgd2l0aE5ld1RhcmdldCh0YXJnZXQ6IE56U2FmZUFueSk6IFNpbmdsZXRvblJlZ2lzdHJ5SXRlbSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhcmdldFxuICAgIH07XG4gIH1cbn1cbiJdfQ==