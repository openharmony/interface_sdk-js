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
 * 无。
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
 * 定义内容构建器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@Builder
type ContentBuilder = () => void;
/**
 * 全屏启动原子化服务组件，当提供方授权使用方嵌入式运行原子化服务时，使用方全屏嵌入式运行原子化服务；未授权时，使用方跳出式拉起原子化服务。
 * 
 * > **说明：**
 * >
 * > 该组件从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * >
 * > 当需要在该组件中实现可嵌入式运行的原子化服务，必须继承自[EmbeddableUIAbility]{@link @ohos.app.ability.EmbeddableUIAbility:EmbeddableUIAbility}。
 * > 否则，系统无法保证原子化服务功能正常。
 *
 * @struct { FullScreenLaunchComponent }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@Component
export declare struct FullScreenLaunchComponent {
  /**
   * 设置组件内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  @BuilderParam
  content: ContentBuilder;
  /**
   * 表示原子化服务appId。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  appId: string;
  /**
   * 表示原子化服务启动选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  options?: AtomicServiceOptions;
  /**
   * 在启动的ExtensionAbility运行过程中发生错误时触发回调。仅在原子服务以嵌入式模式运行时支持，参数类型为BusinessError。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onError?: ErrorCallback;
  /**
   * 当EmbeddableUIAbility被终止时触发回调，用于接收终止信息。仅在原子化服务以嵌入式模式运行时支持该回调，参数类型为TerminationInfo。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onTerminated?: Callback<TerminationInfo>;
  /**
   * 表示onReceive的回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  onReceive?: Callback<Record<string, RecordData>>;
  /**
   * 构建组件的方法。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  @Builder
  build(): void;
}