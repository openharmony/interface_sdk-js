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
 * 共享包信息。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 10 dynamic
 * @since 23 static
 */
export interface SharedBundleInfo {
  /**
   * 应用共享包名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly name: string;

  /**
   * 共享包兼容策略的类型。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly compatiblePolicy: bundleManager.CompatiblePolicy;

  /**
   * 应用共享模块信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly sharedModuleInfo: Array<SharedModuleInfo>;
}

/**
 * 共享模块信息。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 10 dynamic
 * @since 23 static
 */
export interface SharedModuleInfo {
  /**
   * 共享包模块名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly name: string;

  /**
   * 共享包的版本号。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly versionCode: long;

  /**
   * 共享包的版本文本描述信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly versionName: string;

  /**
   * 共享包的模块描述信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly description: string;

  /**
   * 共享包描述的资源id值。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly descriptionId: long;
}