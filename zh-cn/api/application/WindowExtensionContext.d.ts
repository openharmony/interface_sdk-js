/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */

import { AsyncCallback } from '../@ohos.base';
import ExtensionContext from './ExtensionContext';
import Want from '../@ohos.application.Want';
import StartOptions from '../@ohos.app.ability.StartOptions';

/**
 * WindowExtensionContext模块是WindowExtensionAbility的上下文环境，继承自[ExtensionContext]{@link ExtensionContext:ExtensionContext}。
 * 
 * WindowExtensionContext模块提供[WindowExtensionAbility]{@link ./../@ohos.application.WindowExtensionAbility}具有的能力，包括启动
 * Ability。
 * 
 * > **说明：**
 * >
 * > - 从API version 21开始废弃，推荐使用[UIExtensionContext]{@link UIExtensionContext:UIExtensionContext}。
 * >
 * > - 本模块接口为系统接口。
 * >
 * > - 本模块接口仅可在Stage模型下使用。
 *
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamiconly
 * @deprecated since 21
 */
declare class WindowExtensionContext extends ExtensionContext {
  /**
   * 启动Ability，使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > - 从API version 9开始支持，从API version 21开始废弃，推荐使用
   * > [UIExtensionContext.startability]{@link UIExtensionContext:UIExtensionContext#startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>)}
   * > 。
   *
   * @param { Want } want - 启动Ability的want信息。
   * @param { StartOptions } options - 启动Ability所携带的参数。
   * @param { AsyncCallback<void> } callback - callback形式返回启动结果。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
   *     API. [since 12]
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 21
   */
  startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>): void;

  /**
   * 启动Ability，使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > - 从API version 9开始支持，从API version 21开始废弃，推荐使用
   * > [UIExtensionContext.startability]{@link UIExtensionContext:UIExtensionContext#startAbility(want: Want, options?: StartOptions)}
   * > 。
   *
   * @param { Want } want - Want类型参数，传入需要启动的ability的信息，如Ability名称，Bundle名称等。
   * @param { StartOptions } [options] - 启动Ability所携带的参数。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
   *     API. [since 12]
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 21
   */
  startAbility(want: Want, options?: StartOptions): Promise<void>;
}

export default WindowExtensionContext;
export default WindowExtensionContext;