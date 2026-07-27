/*
 * Copyright (c) 2025 Huawei Device Co., Ltd1.
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
 * ###### Child Components
 *
 * Not supported
 *
 * ###### Attributes
 *
 * The [universal attributes]{@link ./@internal/component/ets/common} are not supported.
 *
 * @file Defines the halfScreen launch component
 * @kit ArkUI
 */

import AtomicServiceOptions from '@ohos.app.ability.AtomicServiceOptions';
import { Callback, ErrorCallback } from '@ohos.base';

/**
 * **HalfScreenLaunchComponent** is a component designed for launching atomic services in half screen. If the invoked
 * application (the one being launched) grants the invoker the authorization to run the atomic service in an embedded
 * manner, the invoker can operate the atomic service in half-screen embedded mode. If authorization is not provided,
 * the invoker will launch the atomic service in a pop-up manner.
 *
 * > **NOTE**
 * >
 * > To implement an embeddable atomic service, make sure it inherits from
 * > [EmbeddableUIAbility]{@link @ohos.app.ability.EmbeddableUIAbility:EmbeddableUIAbility}. If the atomic service does
 * > not inherit from **EmbeddableUIAbility**, the system cannot guarantee its proper operation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
@Component
export declare struct HalfScreenLaunchComponent {
  /**
   * Content displayed in the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  @BuilderParam
  content: Callback<void>;
  /**
   * Application ID for the atomic service.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  appId: string;
  /**
   * Parameters for starting the atomic service. The default value is empty.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  options?: AtomicServiceOptions;
  /**
   * Invoked when an error occurs during the running of the atomic service.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onError?: ErrorCallback;
  /**
   * Callback triggered when an embedded atomic service exits normally. Exit scenarios include user-triggered exit
   * button taps or edge swipes, or calls to
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext#terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * or
   * [terminateSelf]{@link ./application/UIAbilityContext:UIAbilityContext#terminateSelf
   * (callback: AsyncCallback<void>)}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onTerminated?: Callback<TerminationInfo>;
  /**
   * Callback triggered when an embedded atomic service calls [@ohos.window (window)]{@link @ohos.window} APIs.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20 dynamiconly
   */
  onReceive?: Callback<Record<string, Object>>;
}