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
 * 元数据对象，可以通过[bundleManager.getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf}获
 * 取，其中参数bundleFlags至少包含GET_BUNDLE_INFO_WITH_METADATA。此对象在
 * [ApplicationInfo]{@link ../bundle/applicationInfo:ApplicationInfo}、
 * [HapModuleInfo]{@link ../bundle/hapModuleInfo:HapModuleInfo}、[AbilityInfo]{@link ../bundle/abilityInfo:AbilityInfo}、
 * [ExtensionAbilityInfo]{@link ./ExtensionAbilityInfo:ExtensionAbilityInfo}中均包含。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
export interface Metadata {
  /**
   * 元数据名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * 元数据值。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  value: string;

  /**
   * 元数据资源描述符，参考示例$profile:config_file，表示profile目录下配置了config_file.json文件。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  resource: string;

  /**
   * 元数据值id。当valueId不为0时，表示当前元数据值为自定义配置，需要使用valueId去资源管理获取对应的值。 当valueId为0时，表示当前元数据值为固定字符串。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  readonly valueId?: long;
}