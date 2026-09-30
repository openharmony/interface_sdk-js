/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file Metadata
 * @kit AbilityKit
 */

/**
 * Represents a metadata object, which can be obtained through
 * [bundleManager.getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf}, where the
 * **bundleFlags** parameter must contain at least GET_BUNDLE_INFO_WITH_METADATA. This object is included in
 * [ApplicationInfo]{@link ./ApplicationInfo}, [HapModuleInfo]{@link ./HapModuleInfo},
 * [AbilityInfo]{@link ./AbilityInfo}, and [ExtensionAbilityInfo]{@link ./ExtensionAbilityInfo:ExtensionAbilityInfo}.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
export interface Metadata {
  /**
   * Metadata name.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * Metadata value.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  value: string;

  /**
   * Metadata resource descriptor. For example, $profile:config_file indicates that the config_file.json file is
   * configured in the profile directory.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  resource: string;

  /**
   * Metadata value ID. When valueId is not 0, the current metadata value is a custom configuration, and valueId must
   * be used to obtain the corresponding value from the resource manager. When valueId is 0, the current metadata
   * value is a fixed string.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  readonly valueId?: long;
}