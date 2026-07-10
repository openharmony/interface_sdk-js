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
 * 包含远程的ability信息，通过接口
 * [distributedBundle.getRemoteAbilityInfo]{@link ./../@ohos.bundle.distributedBundleManager:distributedBundleManager.getRemoteAbilityInfo(elementName: ElementName, callback: AsyncCallback<RemoteAbilityInfo>)}
 * 获取。
 * 
 * > **说明：**
 * >
 * > 本模块为系统接口。
 *
 * @syscap SystemCapability.BundleManager.DistributedBundleFramework
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
export interface RemoteAbilityInfo {
  /**
   * 指明远程ability的ElementName信息。
   *
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly elementName: ElementName;

  /**
   * 指明远程ability的标签信息。
   *
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly label: string;

  /**
   * 指明的远程ability的图标信息。
   *
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  readonly icon: string;
}