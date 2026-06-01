/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @kit AbilityKit
 */

import bundleManager from './../@ohos.bundle.bundleManager';

/**
 * The module defines the information about a preinstalled application that can be restored after being uninstalled. The
 * information can be obtained through
 * [bundleManager.getRecoverableApplicationInfo]{@link ./../@ohos.bundle.bundleManager:bundleManager.getRecoverableApplicationInfo(callback: AsyncCallback<Array<RecoverableApplicationInfo>>)}
 * .
 *
 * > **NOTE**
 * >
 * > The APIs provided by this module are system APIs.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 11 dynamic
 * @since 23 static
 */
export interface RecoverableApplicationInfo {
  /**
   * Bundle name.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  readonly bundleName: string;

  /**
   * Module name.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  readonly moduleName: string;

  /**
   * ID of the module label.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  readonly labelId: long;

  /**
   * ID of the module icon.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  readonly iconId: long;

  /**
   * Whether the application is a system application. **true** if it is a system application, **false** otherwise.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly systemApp: boolean;

  /**
   * Bundle type.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly bundleType: bundleManager.BundleType;

  /**
   * Installation directory of the application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly codePaths: Array<string>;
}