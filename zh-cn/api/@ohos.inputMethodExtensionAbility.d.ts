/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * @file
 * @kit IMEKit
 */

import Want from './@ohos.app.ability.Want';
import type InputMethodExtensionContext from './@ohos.InputMethodExtensionContext';

/**
 * **InputMethodExtensionAbility**模块提供输入法开发API以及输入法扩展生命周期管理能力。
 * 
 * > **说明**
 * >
 * > - 此模块的API仅在Stage模型下可用。
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
declare class InputMethodExtensionAbility {
  /**
   * **InputMethodExtension**的上下文，继承自**ExtensionContext**。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  context: InputMethodExtensionContext;

  /**
   * 当**InputMethodExtensionAbility**启动时调用，用于实现初始化。
   *
   * @param { Want } want - 与**InputMethodExtensionAbility**相关的信息，包括ability名称和bundle名称。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  onCreate(want: Want): void;

  /**
   * 当**InputMethodExtensionAbility**销毁时调用，用于清理资源。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  onDestroy(): void;
}

export default InputMethodExtensionAbility;
