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
 * 应用[HarmonyAppProvision配置文件](docroot://security/app-provision-structure.md)中的信息。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 10 dynamic
 * @since 23 static
 */
export interface AppProvisionInfo {
  /**
   * 配置文件的版本号。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly versionCode: long;

  /**
   * 配置文件的版本名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly versionName: string;

  /**
   * 配置文件中的uuid。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly uuid: string;

  /**
   * 配置文件的类型，为debug或release。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly type: string;

  /**
   * 配置文件中的[分发类型](docroot://security/app-provision-structure.md)。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly appDistributionType: string;

  /**
   * 配置文件中的有效期。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly validity: Validity;

  /**
   * 配置文件中的开发者ID。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly developerId: string;

  /**
   * 配置文件中的证书信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly certificate: string;

  /**
   * 配置文件中的apl字段，为normal、system_basic和system_core其中之一。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly apl: string;

  /**
   * 配置文件中的发行者名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly issuer: string;

  /**
   * 应用的唯一标识，详情信息可参考[什么是appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  readonly appIdentifier: string;

  /**
   * 应用的组织信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly organization: string;

  /**
   * 应用的包名。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  readonly bundleName?: string;
}

/**
 * 配置文件中的有效期。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 10 dynamic
 * @since 23 static
 */
export interface Validity {
  /**
   * 表示配置文件有效期的开始时间，单位：秒。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly notBefore: long;

  /**
   * 表示配置文件有效期的结束时间，单位：秒。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly notAfter: long;
}