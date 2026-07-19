/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
  * @file
  * @kit NetworkKit
 */

import type VpnExtensionContext from './application/VpnExtensionContext';
import type Want from './@ohos.app.ability.Want';

/**
 * VpnExtensionContext是VpnExtensionAbility的上下文环境，继承自
 * [ExtensionContext]{@link ./application/ExtensionContext:ExtensionContext}。
 * 
 * VpnExtensionContext可直接作为VpnExtension的上下文环境，提供允许访问特定于VpnExtensionAbility的资源的能力。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 11 dynamic
 */
export default class VpnExtensionAbility {
  /**
   * 指定context。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   */
  context: VpnExtensionContext;

  /**
   * 拓展VPN启动初始化的时候进行回调。
   * 
   * > **说明：**
   * >
   * > 建议配对调用[onDestroy]{@link VpnExtensionAbility#onDestroy}监听拓展VPN的销毁，及时执行资源清理等操作。
   *
   * @param { Want } want - 指示要启动的信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   */
  onCreate(want: Want): void;

  /**
   * 拓展VPN销毁之前进行回调。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   */
  onDestroy(): void;
}