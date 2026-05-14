/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import { ApplicationInfo } from './applicationInfo';
import { ElementName } from './elementName';

/**
 * LauncherAbilityInfo信息，通过接口
 * [innerBundleManager.getLauncherAbilityInfos](docroot://reference/apis-ability-kit/js-apis-Bundle-InnerBundleManager-sys.md#innerbundlemanagergetlauncherabilityinfosdeprecated)
 * 获取。
 * 
 * > **说明：**
 * >
 * > 从API version 9开始，该模块不再维护，建议使用[bundleManager-LauncherAbilityInfo]{@link launcherAbilityInfo:LauncherAbilityInfo}替代。
 * >
 * > 本模块为系统接口。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @systemapi Hide this for inner system use
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead launcherAbilityInfo:LauncherAbilityInfo
 */
export interface LauncherAbilityInfo {
  /**
   * launcher ability的应用程序的配置信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.LauncherAbilityInfo#applicationInfo
   */
  readonly applicationInfo: ApplicationInfo;

  /**
   * launcher ability的ElementName信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.LauncherAbilityInfo#elementName
   */
  readonly elementName: ElementName;

  /**
   * launcher ability的标签的资源ID值。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.LauncherAbilityInfo#labelId
   */
  readonly labelId: number;

  /**
   * launcher ability的图标的资源ID值。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.LauncherAbilityInfo#iconId
   */
  readonly iconId: number;

  /**
   * launcher ability的用户ID。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.LauncherAbilityInfo#userId
   */
  readonly userId: number;

  /**
   * launcher ability的安装时间戳，单位毫秒。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.LauncherAbilityInfo#installTime
   */
  readonly installTime: number;
}