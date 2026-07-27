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
 * 全屏启动原子化服务组件，当被拉起方授权使用方可以嵌入式运行原子化服务时，使用方全屏嵌入式运行原子化服务；未授权时，使用方跳出式拉起原子化服务。
 * 
 * > **说明：**
 * >
 * > 如果需要在该组件中实现可嵌入式运行的原子化服务，必须继承自[EmbeddableUIAbility]{@link @ohos.app.ability.EmbeddableUIAbility:EmbeddableUIAbility}
 * > 。否则，系统无法保证原子化服务功能正常。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamic
 */
@Component
export declare struct FullScreenLaunchComponent {
  /**
   * 可以使用组件组合来自定义拉起原子化服务前的占位图标，实现类似大桌面应用图标的效果。点击占位组件后，将拉起原子化服务。
   *
   * @type { Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  @BuilderParam content: Callback<void>;
  /**
   * 可以使用组件组合来自定义拉起原子化服务前的占位图标，实现类似大桌面应用图标的效果。点击占位组件后，将拉起原子化服务。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  @BuilderParam
  content: Callback<void>;
  /**
   * 需要拉起的原子化服务appId，appId是原子化服务的唯一标识。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  appId: string;
  /**
   * 拉起原子化服务参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamic
   */
  options?: AtomicServiceOptions;
  /**
   * 被拉起的嵌入式运行原子化服务在运行过程中发生异常时触发本回调。可通过回调参数中的code、name和message获取错误信息并做处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  onError?: ErrorCallback;
  /**
   * 被拉起的嵌入式运行原子化服务通过点击原子化服务退出按钮、手势侧滑、调用
   * [terminateSelfWithResult]
   * {@link ./application/UIAbilityContext:UIAbilityContext#terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 或者
   * [terminateSelf]{@link ./application/UIAbilityContext:UIAbilityContext#terminateSelf(callback: AsyncCallback<void>)}
   * 正常退出时，触发本回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamic
   */
  onTerminated?: Callback<TerminationInfo>;
  /**
   * 被拉起的嵌入式运行原子化服务通过[@ohos.window (窗口)]{@link @ohos.window}调用API时，触发本回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20 dynamic
   */
  onReceive?: Callback<Record<string, Object>>;
}