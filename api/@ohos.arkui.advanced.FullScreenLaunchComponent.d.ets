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
 * ###### Child Components
 *
 * Not supported
 *
 * ###### Attributes
 *
 * The [universal attributes]{@link ./@internal/component/ets/common} are not supported.
 *
 * ###### Events
 *
 * The [universal events]{@link ./@internal/component/ets/common} are not supported.
 *
 * @file Defines the fullScreen launch component
 * @kit ArkUI
 */

/**
 * Declares the FullScreenLaunchComponent, a component provided by ArkUI that allows
 * you to define and use it in your application through the ArkTS-based declarative
 * development paradigm.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamic
 */
}

import AtomicServiceOptions from '@ohos.app.ability.AtomicServiceOptions';
import { Callback, ErrorCallback } from '@ohos.base';

/**
 * **FullScreenLaunchComponent** is a component designed for launching atomic services in full screen. If the invoked
 * app (the one being launched) grants the invoker the authorization to run the atomic service in an embedded manner,
 * the invoker can operate the atomic service in full-screen embedded mode. If authorization is not provided, the
 * invoker will launch the atomic service in a pop-up manner.
 *
 * > **NOTE**
 * >
 * > To implement an embeddable atomic service within this component, it must inherit from
 * > [EmbeddableUIAbility]{@link @ohos.app.ability.EmbeddableUIAbility:EmbeddableUIAbility}. Otherwise, the system
 * > cannot guarantee that the atomic service will function properly.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamic
 */
@Component
export declare struct FullScreenLaunchComponent {
  /**
   * Custom placeholder icon displayed before the atomic service is launched. This allows you to create a large launch
   * icon similar to those used by desktop apps. Clicking the placeholder icon will launch the atomic service.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  @BuilderParam
  content: Callback<void>;
  /**
   * App ID of the atomic service to be launched. It is the unique identifier for the atomic service.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  appId: string;
  /**
   * Parameters for launching the atomic service.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  options?: AtomicServiceOptions;
  /**
   * Callback triggered when an exception occurs during the execution of an embedded atomic service. You can obtain
   * the error information based on the **code**, **name**, and **message** parameters in the callback and rectify the
   * exception accordingly.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  onError?: ErrorCallback;
  /**
   * Callback triggered when an embedded atomic service exits normally. Exit scenarios include user-triggered exit
   * button taps or edge swipes, or calls to
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext#terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * or
   * [terminateSelf]{@link ./application/UIAbilityContext:UIAbilityContext#terminateSelf(callback: AsyncCallback<void>)}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  onTerminated?: Callback<TerminationInfo>;
  /**
   * Callback triggered when an embedded atomic service calls [@ohos.window (window)]{@link @ohos.window} APIs.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20 dynamic
   */
  onReceive?: Callback<Record<string, Object>>;
}