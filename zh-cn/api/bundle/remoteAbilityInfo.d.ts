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
 * remoteAbility信息。
 * 
 * > **说明：**
 * >
 * > 从API version 9开始，该模块不再维护，建议使用[bundleManager-RemoteAbilityInfo]{@link remoteAbilityInfo:RemoteAbilityInfo}替代。
 * >
 * > 本模块为系统接口。
 *
 * @syscap SystemCapability.BundleManager.DistributedBundleFramework
 * @systemapi
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead remoteAbilityInfo:RemoteAbilityInfo
 */
export interface RemoteAbilityInfo {
  /**
   * ability元素资源信息。
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
   * 指明ability的名称。
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
   * 指明的ability的图标信息。
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