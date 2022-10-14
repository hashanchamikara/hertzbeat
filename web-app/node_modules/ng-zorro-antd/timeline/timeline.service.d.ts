/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ReplaySubject } from 'rxjs';
export declare class TimelineService {
    check$: ReplaySubject<unknown>;
    markForCheck(): void;
}
