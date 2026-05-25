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

/**
 * The module defines a metadata object. An application can obtain the metadata through
 * [bundleManager.getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}
 * , with **GET_BUNDLE_INFO_WITH_METADATA** passed in for
 * [bundleFlags]{@link ./../@ohos.bundle.bundleManager:bundleManager.BundleFlag}. This object is contained in
 * [ApplicationInfo]{@link ApplicationInfo}, [HapModuleInfo]{@link HapModuleInfo}, [AbilityInfo]{@link AbilityInfo}, and
 * [ExtensionAbilityInfo]{@link ExtensionAbilityInfo:ExtensionAbilityInfo}.
 *
 * The module provides the configuration about the module, UIAbility, and ExtensionAbility. The value is of the array
 * type. The configuration is valid only for the current module, UIAbility, or ExtensionAbility.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
export interface Metadata {
  /**
   * Indicates the metadata name
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * Indicates the metadata value
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  value: string;

  /**
   * Indicates the metadata resource
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  resource: string;

  /**
   * Indicates the value id of the metadata
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  readonly valueId?: long;
}