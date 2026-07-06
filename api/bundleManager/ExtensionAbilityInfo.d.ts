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

import { ApplicationInfo } from './ApplicationInfo';
import { Metadata } from './Metadata';
import bundleManager from './../@ohos.bundle.bundleManager';
import { Skill } from './Skill';

/**
 * The module defines the ExtensionAbility information. An application can obtain its own ExtensionAbility information
 * through
 * [bundleManager.getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}
 * , with **GET_BUNDLE_INFO_WITH_HAP_MODULE** and **GET_BUNDLE_INFO_WITH_EXTENSION_ABILITY** passed in to
 * [bundleFlags]{@link ./../@ohos.bundle.bundleManager:bundleManager.BundleFlag}.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
export interface ExtensionAbilityInfo {
  /**
   * Bundle name.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly bundleName: string;

  /**
   * Name of the HAP file to which the ExtensionAbility belongs.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly moduleName: string;

  /**
   * Name of the ExtensionAbility.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly name: string;

  /**
   * ID of the ExtensionAbility label.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly labelId: long;

  /**
   * ID of the ExtensionAbility description.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly descriptionId: long;

  /**
   * ID of the ExtensionAbility icon.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly iconId: long;
  /**
   * Whether the ExtensionAbility can be called by other applications. **true** if the ExtensionAbility can be called by
   * other applications, **false** otherwise.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly exported: boolean;

  /**
   * Type of the ExtensionAbility.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly extensionAbilityType: bundleManager.ExtensionAbilityType;

  /**
   * Type of the ExtensionAbility. For details about available values, see
   * [the type field under the extensionabilities tag](docroot://quick-start/module-configuration-file.md#extensionabilities)
   * .
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  readonly extensionAbilityTypeName: string;

  /**
   * Permissions required for other bundles to call the ExtensionAbility.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly permissions: Array<string>;

  /**
   * Application configuration information <!--Del-->. The information can be obtained by passing in
   * **GET_EXTENSION_ABILITY_INFO_WITH_APPLICATION** to the **extensionAbilityFlags** parameter of
   * [queryExtensionAbilityInfo]{@link ./../@ohos.bundle.bundleManager:bundleManager.queryExtensionAbilityInfo(want: Want, extensionAbilityType: ExtensionAbilityType, extensionAbilityFlags: int, userId: int, callback: AsyncCallback<Array<ExtensionAbilityInfo>>)}
   * <!--DelEnd-->.
   *
   * This field is not returned when the
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}
   * or
   * [getBundleInfo]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfo(bundleName: string, bundleFlags: int, userId: int, callback: AsyncCallback<BundleInfo>)}
   * is used to obtain ExtensionAbilityInfo information. You can obtain the related information by obtaining the
   * [bundleInfo]{@link BundleInfo:BundleInfo}.appInfo object.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  readonly applicationInfo: ApplicationInfo;

  /**
   * Obtains configuration information about an application
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 23 static
   */
  readonly applicationInfo: ApplicationInfo | null;

  /**
   * Metadata of the ExtensionAbility. The information can be obtained by passing in **GET_BUNDLE_INFO_WITH_HAP_MODULE**
   * , **GET_BUNDLE_INFO_WITH_EXTENSION_ABILITY**, and **GET_BUNDLE_INFO_WITH_METADATA** to the **bundleFlags**
   * parameter of
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly metadata: Array<Metadata>;

  /**
   * Whether the ExtensionAbility is enabled. **true** if enabled, **false** otherwise.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly enabled: boolean;

  /**
   * Permission required for reading data from the ExtensionAbility.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly readPermission: string;

  /**
   * Permission required for writing data to the ExtensionAbility.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly writePermission: string;

  /**
   * Skills of the ExtensionAbility.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly skills: Array<Skill>;

  /**
   * Index of an application clone. It takes effect only for cloned applications.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 12 dynamic
   * @since 23 static
   */
  readonly appIndex: int;
}