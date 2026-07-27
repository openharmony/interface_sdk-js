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
 * @file System API
 * @kit ArkUI
 */

import AtomicServiceOptions from '@ohos.app.ability.AtomicServiceOptions';
import { Callback, ErrorCallback } from '@ohos.base';

/**
 * **InnerFullScreenLaunchComponent** is a component that allows the invoker to choose the timing for launching an
 * atomic service. If the invoked app (the one being launched) grants the invoker the authorization to run the atomic
 * service in an embedded manner, the invoker can operate the atomic service in full-screen embedded mode. If
 * authorization is not provided, the invoker will launch the atomic service in a pop-up manner.
 *
 * > **NOTE**
 * >
 * > To implement an embeddable atomic service within this component, it must inherit from
 * > [EmbeddableUIAbility]{@link @ohos.app.ability.EmbeddableUIAbility:EmbeddableUIAbility}. If it does not inherit from
 * > **EmbeddableUIAbility**, the system cannot guarantee that the atomic service will function properly.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 12 dynamiconly
 */
@Component
export declare struct InnerFullScreenLaunchComponent {
  /**
   * Content displayed in the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamiconly
   */
  @BuilderParam
  content: Callback<void>;
  /**
   * Controller for launching the atomic service.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamiconly
   */
  controller: LaunchController;
  /**
   * Callback triggered when an embedded atomic service calls [@ohos.window (window)]{@link @ohos.window} APIs.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 20 dynamiconly
   */
  onReceive?: Callback<Record<string, Object>>;
  /**
   * Callback triggered when an exception occurs during the execution of an embedded atomic service. You can obtain the
   * error information based on the **code**, **name**, and **message** parameters in the callback and rectify the
   * exception accordingly.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 dynamiconly
   */
  onError?: ErrorCallback;
  /**
   * Callback triggered when an embedded atomic service exits normally. Exit scenarios include user-triggered exit
   * button taps or edge swipes, or calls to
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext#terminateSelfWithResult
   * (parameter: AbilityResult, callback: AsyncCallback<void>)}
   * or
   * [terminateSelf]{@link ./application/UIAbilityContext:UIAbilityContext#terminateSelf
   * (callback: AsyncCallback<void>)}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 dynamiconly
   */
  onTerminated?: Callback<TerminationInfo>;
}

/**
 * Controller for launching the atomic service.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 12 dynamiconly
 */
export declare class LaunchController {
  /**
   * Function to launch atomicservice.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamiconly
   */
  public launchAtomicService: LaunchAtomicServiceCallback;
}

/**
 * Triggered when an atomic service is launched.
 *
 * @param { string } appId - App ID for the atomic service.
 * @param { AtomicServiceOptions } [options] - Parameters for launching the atomic service.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 12 dynamiconly
 */
export declare type LaunchAtomicServiceCallback = (appId: string, options?: AtomicServiceOptions) => void;