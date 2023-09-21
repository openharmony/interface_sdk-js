/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import Want from '../@ohos.app.ability.Want';

/**
 * @interface UIExtensionCallback
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @since 11
 */
export interface UIExtensionCallback {
  /**
   * Called when remote UIExtensionAbility object is ready for receive data.
   * 
   * @param { UIExtensionProxy } proxy
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 11
   */
  onRemoteReady(proxy: UIExtensionProxy): void;

  /**
   * Called when data received from UIExtensionAbility.
   * 
   * @param { object } parameters
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 11
   */
  onReceive(parameters: { [key: string]: Object }): void;

  /**
   * Called when the UIExtensionAbility is terminated with result data.
   * 
   * @param { number } code
   * @param { Want } want
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 11
   */
  onResult(code: number, want?: Want): void;

  /**
   * Returned number if disconnected from UIExtensionAbility, 0 means the
   * UIExtensionAbility is terminate by itself, otherwise the connect is broken abnormal.
   * 
   * @param { number } code
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 11
   */
  onRelease(code: number): void;

  /**
   * Called when some error occurred except disconnected from UIExtensionAbility.
   * 
   * @param { number } code
   * @param { string } name
   * @param { string } message
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 11
   */
  onError(code: number, name: string, message: string): void;
}
