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
 * The WindowExtensionContext module provides the context environment for the WindowExtensionAbility. It inherits from
 * [ExtensionContext]{@link ExtensionContext:ExtensionContext}.
 *
 * The module provides the capabilities of the
 * [WindowExtensionAbility]{@link ./../@ohos.application.WindowExtensionAbility}, including starting the ability.
 *
 * > **NOTE**
 * >
 * > - This module is deprecated since API version 21. You are advised to use
 * > [UIExtensionContext]{@link UIExtensionContext:UIExtensionContext} instead.
 * >
 * > - The APIs provided by this module are system APIs.
 * >
 * > - The APIs of this module can be used only in the stage model.
 *
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamiconly
 * @deprecated since 21
 */
declare class WindowExtensionContext extends ExtensionContext {
  /**
   * Starts an ability. This API uses an asynchronous callback to return the result.
   *
   * @param { Want } want - Want information about the target ability.
   * @param { StartOptions } options - Parameters used for starting the ability.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Starts an ability. This API uses a promise to return the result.
   *
   * @param { Want } want - Want information about the target ability, such as the ability name and bundle name.
   * @param { StartOptions } [options] - Parameters used for starting the ability.
   * @returns { Promise<void> } Promise that returns no value.
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