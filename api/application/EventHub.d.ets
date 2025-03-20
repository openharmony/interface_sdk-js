/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file
 * @kit AbilityKit
 */

import { BusinessError } from '../@ohos.base';

/**
 * The event center of a context, support the subscription and publication of events.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @since 9
 */
/**
 * The event center of a context, support the subscription and publication of events.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @atomicservice
 * @since 11
 */
/**
 * The event center of a context, support the subscription and publication of events.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class EventHub {
  /**
   * Subscribe to an event.
   *
   * @param { string } event - Indicates the event.
   * @param { Object } callback - Indicates the callback.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  on(event: string, callback: Object): void;

  /**
   * Unsubscribe from an event.
   *
   * @param { string } event - Indicates the event.
   * @param { Object } callback - Indicates the callback.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  off(event: string, callback: Object): void;

  off(event: string): void;

  emit(event:string): void;

  emit<P1>(event:string, p1: P1): void;

  emit<P1, P2>(event: string, p1: P1, p2: P2): void;

  emit<P1, P2, P3>(event: string, p1: P1, p2: P2, p3: P3): void;

  emit<P1, P2, P3, P4>(event: string, p1: P1, p2: P2, p3: P3, p4: P4): void;

  emit<P1, P2, P3, P4, P5>(event: string, p1: P1, p2: P2, p3: P3, p4: P4, p5: P5): void;

  emit<P1, P2, P3, P4, P5, P6>(event: string, p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6): void;

  emit<P1, P2, P3, P4, P5, P6, P7>(event: string, p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7): void;

  emit<P1, P2, P3, P4, P5, P6, P7, P8>(event: string, p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7, p8: P8): void;

  emit<P1, P2, P3, P4, P5, P6, P7, P8, P9>(event: string, p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7, p8: P8, p9: P9): void;

  emit<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10>(event: string, p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7, p8: P8, p9: P9, p10: P10): void;

  emit<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11>(event: string, p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7, p8: P8, p9: P9, p10: P10, p11: P11): void;

  emit<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12>(event: string, p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7, p8: P8, p9: P9, p10: P10, p11: P11, p12: P12): void;

  emit<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13>(event: string, p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7, p8: P8, p9: P9, p10: P10, p11: P11, p12: P12, p13: P13): void;

  emit<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14>(event: string, p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7, p8: P8, p9: P9, p10: P10, p11: P11, p12: P12, p13: P13, p14: P14): void;

  emit<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15>(event: string, p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7, p8: P8, p9: P9, p10: P10, p11: P11, p12: P12, p13: P13, p14: P14, p15: P15): void;

  emit<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16>(event: string, p1: P1, p2: P2, p3: P3, p4: P4, p5: P5, p6: P6, p7: P7, p8: P8, p9: P9, p10: P10, p11: P11, p12: P12, p13: P13, p14: P14, p15: P15, p16: P16): void;
}

export default EventHub;