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
 * The module provides information in the 
 * [HarmonyAppProvision configuration file](docroot://security/app-provision-structure.md). The information can be 
 * obtained through 
 * [getAppProvisionInfo]{@link ./../@ohos.bundle.bundleManager:bundleManager.getAppProvisionInfo(bundleName: string, callback: AsyncCallback<AppProvisionInfo>)}
 * .
 * 
 * > **NOTE**
 * >
 * > The APIs provided by this module are system APIs.
 *
 * @file
 * @kit AbilityKit
 */

/**
 * The module provides information in the
 * [HarmonyAppProvision configuration file](docroot://security/app-provision-structure.md).
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 10 dynamic
 * @since 23 static
 */
export interface AppProvisionInfo {
  /**
   * Version number of the configuration file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly versionCode: long;

  /**
   * Version name of the configuration file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly versionName: string;

  /**
   * UUID in the configuration file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly uuid: string;

  /**
   * Type of the configuration file, which can be **debug** or **release**.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly type: string;

  /**
   * [Distribution type](docroot://security/app-provision-structure.md) in the configuration file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly appDistributionType: string;

  /**
   * Validity period in the configuration file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly validity: Validity;

  /**
   * Developer ID in the configuration file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly developerId: string;

  /**
   * Certificate information in the configuration file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly certificate: string;

  /**
   * APL in the configuration file, which can be **normal**, **system_basic**, or **system_core**.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly apl: string;

  /**
   * Issuer name in the configuration file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly issuer: string;

  /**
   * Unique ID of the application. For details, see
   * [What Is appIdentifier](docroot://quick-start/common_problem_of_application.md#what-is-appidentifier).
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  readonly appIdentifier: string;

  /**
   * Organization of the application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly organization: string;

  /**
   * Bundle name of the application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  readonly bundleName?: string;
}

/**
 * Validity period in the configuration file.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 10 dynamic
 * @since 23 static
 */
export interface Validity {
  /**
   * Start time of the validity period of the configuration file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly notBefore: long;

  /**
   * End time of the validity period of the configuration file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly notAfter: long;
}