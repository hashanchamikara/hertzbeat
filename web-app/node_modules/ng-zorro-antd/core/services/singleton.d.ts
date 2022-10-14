/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { NzSafeAny } from 'ng-zorro-antd/core/types';
/**
 * Some singletons should have life cycle that is same to Angular's. This service make sure that
 * those singletons get destroyed in HMR.
 */
export declare class NzSingletonService {
    private get singletonRegistry();
    /**
     * This registry is used to register singleton in dev mode.
     * So that singletons get destroyed when hot module reload happens.
     *
     * This works in prod mode too but with no specific effect.
     */
    private _singletonRegistry;
    registerSingletonWithKey(key: string, target: NzSafeAny): void;
    getSingletonWithKey<T>(key: string): T | null;
    private withNewTarget;
}
