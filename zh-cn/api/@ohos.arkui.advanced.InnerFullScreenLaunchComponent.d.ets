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
 * @file 系统接口
 * @kit ArkUI
 */

import AtomicServiceOptions from '@ohos.app.ability.AtomicServiceOptions';
import { Callback, ErrorCallback } from '@ohos.base';

/**
 * 非显式全屏拉起原子化服务组件，拉起方可以选择拉起原子化服务的时机。当被拉起方授权使用方嵌入式运行原子化服务时，使用方全屏嵌入式运行原子化服务；未授权时，使用方跳出式拉起原子化服务。
 * 
 * > **说明：**
 * >
 * > 该组件从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * >
 * > 当需要在该组件中实现一个可嵌入式运行的原子化服务时，必须继承自
 * > [EmbeddableUIAbility]{@link @ohos.app.ability.EmbeddableUIAbility:EmbeddableUIAbility}。若不继承自EmbeddableUIAbility，系统无
 * > 法保证原子化服务功能正常。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 12 dynamiconly
 */
@Component
export declare struct InnerFullScreenLaunchComponent {
  /**
   * 组件显示内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamiconly
   */
  @BuilderParam
  content: Callback<void>;
  /**
   * 拉起原子化服务的控制器。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamiconly
   */
  controller: LaunchController;
  /**
   * 被拉起的嵌入式运行原子化服务通过[@ohos.window (窗口)]{@link @ohos.window}调用相关API时，触发本回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 20 dynamiconly
   */
  onReceive?: Callback<Record<string, Object>>;
  /**
   * 被拉起的嵌入式运行原子化服务在运行过程中发生异常时触发本回调。可通过回调参数中的code、name和message获取错误信息并做处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 dynamiconly
   */
  onError?: ErrorCallback;
  /**
   * 被拉起的嵌入式运行原子化服务通过点击原子化服务退出按钮、手势侧滑、调用
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext#terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 或者
   * [terminateSelf]{@link ./application/UIAbilityContext:UIAbilityContext#terminateSelf(callback: AsyncCallback<void>)}
   * 正常退出时，触发本回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 23 dynamiconly
   */
  onTerminated?: Callback<TerminationInfo>;
}

/**
 * 拉起原子化服务的控制器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 12 dynamiconly
 */
export declare class LaunchController {
  /**
   * 拉起原子化服务。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12 dynamiconly
   */
  public launchAtomicService: LaunchAtomicServiceCallback;
}

/**
 * 拉起原子化服务触发的回调。
 *
 * @param { string } appId - 原子化服务的appId。
 * @param { AtomicServiceOptions } [options] - 拉起原子化服务的参数。不填时使用默认参数拉起原子化服务。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 12 dynamiconly
 */
export declare type LaunchAtomicServiceCallback = (appId: string, options?: AtomicServiceOptions) => void;