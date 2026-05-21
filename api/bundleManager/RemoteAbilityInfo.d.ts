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

import { ElementName } from './ElementName';

/**
 * The module provides information about a remote ability, which can be obtained through
 * [distributedBundle.getRemoteAbilityInfo]{@link ./../@ohos.bundle.distributedBundleManager:distributedBundleManager.getRemoteAbilityInfo(elementName: ElementName, callback: AsyncCallback<RemoteAbilityInfo>)}
 * .
 *
 * > **NOTE**
 * >
 * > The APIs provided by this module are system APIs.
 *
 * @syscap SystemCapability.BundleManager.DistributedBundleFramework
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface RemoteAbilityInfo {
  /**
   * Element name information of the remote ability.
   *
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly elementName: ElementName;

  /**
   * Label of the remote ability.
   *
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly label: string;

  /**
   * Icon of the remote ability.
   *
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly icon: string;
}