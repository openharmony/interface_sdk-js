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
 * ###### 子组件
 *
 * 无
 *
 * ###### 属性
 *
 * 不支持[通用属性]{@link ./@internal/component/ets/common}。
 *
 * ###### 事件
 *
 * 不支持[通用事件]{@link ./@internal/component/ets/common}。
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
 * 全屏启动原子化服务组件，当被拉起方授权使用方可以嵌入式运行原子化服务时，使用方全屏嵌入式运行原子化服务；未授权时，使用方跳出式拉起原子化服务。
 * 
 * > **说明：**
 * >
 * > 如果需要在该组件中实现可嵌入式运行的原子化服务，必须继承自[EmbeddableUIAbility]{@link @ohos.app.ability.EmbeddableUIAbility:EmbeddableUIAbility}
 * > 。否则，系统无法保证原子化服务功能正常。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@Component
export declare struct FullScreenLaunchComponent {
  /**
   * Sets the component content.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  @BuilderParam
  content: ContentBuilder;
  /**
   * Indicates atomic service appId.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  appId: string;
  /**
   * Indicates the atomic service start options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  options?: AtomicServiceOptions;
  /**
    * Callback triggered when an error occurs during running of the started ExtensionAbility.
    * It is supported only when the atomic service runs in embedded mode,
    * with the parameter being of type BusinessError.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onError?: ErrorCallback;
  /**
    * Callback triggered when the EmbeddableUIAbility is terminated to receive the information
    * about the termination. It is supported only when the atomic service runs in embedded mode,
    * with the parameter being of type TerminationInfo.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onTerminated?: Callback<TerminationInfo>;
  /**
    * Indicates the callback of onReceive.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onReceive?: Callback<Record<string, RecordData>>;
  /**
    * The method to build component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  @Builder
  build(): void;
}