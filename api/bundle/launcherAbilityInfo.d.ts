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
 * The LauncherAbilityInfo module provides information about the launcher ability, which is obtained through
 * [innerBundleManager.getLauncherAbilityInfos](docroot://reference/apis-ability-kit/js-apis-Bundle-InnerBundleManager-sys.md#innerbundlemanagergetlauncherabilityinfosdeprecated)
 * .
 *
 * > **NOTE**
 * >
 * > The APIs of this module have been deprecated since API version 9. You are advised to use
 * > [bundleManager-LauncherAbilityInfo]{@link launcherAbilityInfo:LauncherAbilityInfo} instead.
 * >
 * > The APIs provided by this module are system APIs.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @systemapi Hide this for inner system use
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead launcherAbilityInfo:LauncherAbilityInfo
 */
export interface LauncherAbilityInfo {
  /**
   * Application information of the launcher ability.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.LauncherAbilityInfo#applicationInfo
   */
  readonly applicationInfo: ApplicationInfo;

  /**
   * Element name of the launcher ability.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.LauncherAbilityInfo#elementName
   */
  readonly elementName: ElementName;

  /**
   * ID of the launcher ability label.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.LauncherAbilityInfo#labelId
   */
  readonly labelId: number;

  /**
   * ID of the launcher ability icon.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.LauncherAbilityInfo#iconId
   */
  readonly iconId: number;

  /**
   * User ID of the launcher ability.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.LauncherAbilityInfo#userId
   */
  readonly userId: number;

  /**
   * Timestamp when the launcher ability was installed, in milliseconds.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.LauncherAbilityInfo#installTime
   */
  readonly installTime: number;
}