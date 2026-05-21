/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import { ElementName } from './elementName';

/**
 * The module provides information about a remote ability.
 *
 * > **NOTE**
 * >
 * > The APIs of this module have been deprecated since API version 9. You are advised to use
 * > [bundleManager-RemoteAbilityInfo]{@link remoteAbilityInfo:RemoteAbilityInfo} instead.
 * >
 * > The APIs provided by this module are system APIs.
 *
 * @syscap SystemCapability.BundleManager.DistributedBundleFramework
 * @systemapi
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead remoteAbilityInfo:RemoteAbilityInfo
 */
export interface RemoteAbilityInfo {
  /**
   * Element name information of the ability.
   *
   * @default Indicates the ability information
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.distributedBundleManager/distributedBundleManager.RemoteAbilityInfo#elementName
   */
  readonly elementName: ElementName;

  /**
   * Ability name.
   *
   * @default Indicates the label of the ability
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.distributedBundleManager/distributedBundleManager.RemoteAbilityInfo#label
   */
  readonly label: string;

  /**
   * Icon of the ability.
   *
   * @default Indicates the icon of the ability
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.distributedBundleManager/distributedBundleManager.RemoteAbilityInfo#icon
   */
  readonly icon: string;
}