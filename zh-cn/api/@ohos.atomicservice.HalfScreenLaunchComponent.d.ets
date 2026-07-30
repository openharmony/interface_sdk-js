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
 * ###### 子组件
 *
 * 无
 *
 * ###### 属性
 *
 * 不支持[通用属性]{@link ./@internal/component/ets/common}。
 *
 * @file Defines the halfScreen launch component
 * @kit ArkUI
 */

import AtomicServiceOptions from '@ohos.app.ability.AtomicServiceOptions';
import { Callback, ErrorCallback } from '@ohos.base';

/**
 * 半屏嵌入式启动原子化服务组件，当被拉起方未授权嵌入式运行原子化服务时，宿主将使用跳出式拉起原子化服务。
 * 
 * > **说明：**
 * >
 * > 如果需要在该组件中实现一个可嵌入式运行的原子化服务时，原子化服务必须继承自
 * > [EmbeddableUIAbility]{@link @ohos.app.ability.EmbeddableUIAbility:EmbeddableUIAbility}。若不继承自EmbeddableUIAbility，系统无
 * > 法确保原子化服务正常运行。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
@Component
export declare struct HalfScreenLaunchComponent {
  /**
   * 组件显示内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  @BuilderParam
  content: Callback<void>;
  /**
   * 原子化服务appId。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  appId: string;
  /**
   * 拉起原子化服务参数，默认为空。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  options?: AtomicServiceOptions;
  /**
   * 被拉起的原子化服务扩展在运行过程中发生异常时触发本回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onError?: ErrorCallback;
  /**
   * 被拉起的嵌入式运行原子化服务通过点击原子化服务退出按钮、手势侧滑、调用
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext#terminateSelfWithResult
   * (parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 或者
   * [terminateSelf]{@link ./application/UIAbilityContext:UIAbilityContext#terminateSelf
   * (callback: AsyncCallback<void>)}
   * 正常退出时，触发本回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onTerminated?: Callback<TerminationInfo>;
  /**
   * 被拉起的嵌入式运行原子化服务通过[@ohos.window (窗口)]{@link @ohos.window}调用API时，触发本回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20 dynamiconly
   */
  onReceive?: Callback<Record<string, Object>>;
}