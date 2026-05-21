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
 * The module provides information about the shared bundle. The information can be obtained by calling 
 * [bundleManager.getSharedBundleInfo]{@link ./../@ohos.bundle.bundleManager:bundleManager.getSharedBundleInfo(bundleName: string,  moduleName: string, callback: AsyncCallback<Array<SharedBundleInfo>>)}
 * .
 * 
 * > **NOTE**
 * >
 * > The APIs provided by this module are system APIs.
 *
 * @file
 * @kit AbilityKit
 */
import bundleManager from '../@ohos.bundle.bundleManager';

/**
 * Defines the shared bundle information.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 10 dynamic
 * @since 23 static
 */
export interface SharedBundleInfo {
  /**
   * Name of the shared bundle.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly name: string;

  /**
   * Compatibility type of the shared bundle.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly compatiblePolicy: bundleManager.CompatiblePolicy;

  /**
   * Information about the shared module.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly sharedModuleInfo: Array<SharedModuleInfo>;
}

/**
 * Defines the shared module information.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 10 dynamic
 * @since 23 static
 */
export interface SharedModuleInfo {
  /**
   * Module name of the shared bundle.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly name: string;

  /**
   * Version number of the shared bundle.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly versionCode: long;

  /**
   * Version description of the shared bundle.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly versionName: string;

  /**
   * Description of the shared bundle.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly description: string;

  /**
   * Description ID of the shared bundle.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly descriptionId: long;
}