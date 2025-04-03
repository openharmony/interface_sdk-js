/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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
 * @file Defines the fullScreen launch component
 * @kit ArkUI
 */

import AtomicServiceOptions from '@ohos.app.ability.AtomicServiceOptions';
import { Callback, ErrorCallback } from '@ohos.base';

/*** if arkts 1.2 */
import AtomicServiceOptions from './@ohos.app.ability.AtomicServiceOptions';
import { Callback } from './@ohos.base';
/*** endif */

/**
 * Declare component FullScreenLaunchComponent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
@Component
export declare struct FullScreenLaunchComponent {
  /**
   * Sets the component content.
   * @type { Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  @BuilderParam content: Callback<void>;
  /**
   * Indicates atomic service appId.
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  appId: string;
  /**
   * Indicates the atomic service start options.
   * @type { ?AtomicServiceOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  options?: AtomicServiceOptions;
    /**
    * Indicates the callback of onError.
    * @type { ?ErrorCallback }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 18
    */
    onError?: ErrorCallback;
    /**
    * Indicates the callback of onTerminated.
    * @type { ?Callback<TerminationInfo> }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 18
    */
    onTerminated?: Callback<TerminationInfo>;
}