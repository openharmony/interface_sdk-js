/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

import AtomicServiceOptions from '@ohos.app.ability.AtomicServiceOptions';
import { Callback, ErrorCallback, RecordData } from '@ohos.base';
import { Component, BuilderParam, TerminationInfo, Builder } from '@ohos.arkui.component';

/**
 * Defines ContentBuilder.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@Builder
type ContentBuilder = () => void;
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
 * @struct { FullScreenLaunchComponent }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@Component
export declare struct FullScreenLaunchComponent {
  /**
   * Sets the component content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  @BuilderParam
  content: ContentBuilder;
  /**
   * Indicates atomic service appId.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  appId: string;
  /**
   * Indicates the atomic service start options.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  options?: AtomicServiceOptions;
  /**
   * Callback triggered when an error occurs during running of the started ExtensionAbility.
   * It is supported only when the atomic service runs in embedded mode,
   * with the parameter being of type BusinessError.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onError?: ErrorCallback;
  /**
   * Callback triggered when the EmbeddableUIAbility is terminated to receive the information
   * about the termination. It is supported only when the atomic service runs in embedded mode,
   * with the parameter being of type TerminationInfo.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onTerminated?: Callback<TerminationInfo>;
  /**
   * Indicates the callback of onReceive.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onReceive?: Callback<Record<string, RecordData>>;
  /**
   * The method to build component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  @Builder
  build(): void;
}