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

import { ApplicationInfo } from './applicationInfo';
import { ElementName } from './elementName';

/**
 * Contains basic Ability information, which uniquely identifies an ability.
 * You can use this class to obtain values of the fields set in an AbilityInfo,
 * such as the application Info , elementName, labelId, iconId, userId, installTime.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @systemapi Hide this for inner system use
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.bundle.bundleManager.LauncherAbilityInfo
 * @name Contains basic launcher Ability information, which uniquely identifies an LauncherAbilityInfo
 */
export interface LauncherAbilityInfo {
  /**
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8
   * @deprecated since 9
   * @name Obtains application info information about an launcher ability.
   */
  readonly applicationInfo: ApplicationInfo;

  /**
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8
   * @deprecated since 9
   * @name Obtains element name about an launcher ability.
   */
  readonly elementName: ElementName;

  /**
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8
   * @deprecated since 9
   * @name Obtains labelId about an launcher ability.
   */
  readonly labelId: number;

  /**
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8
   * @deprecated since 9
   * @name Obtains iconId about an launcher ability.
   */
  readonly iconId: number;

  /**
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8
   * @deprecated since 9
   * @name Obtains userId about an launcher ability.
   */
  readonly userId: number;

  /**
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8
   * @deprecated since 9
   * @name Obtains installTime about an launcher ability.
   */
  readonly installTime: number;
}
