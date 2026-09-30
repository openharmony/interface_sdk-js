/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @file HapModuleInfo
 * @kit AbilityKit
 */

import { AbilityInfo } from './AbilityInfo';
import { ExtensionAbilityInfo } from './ExtensionAbilityInfo';
import { Metadata } from './Metadata';
import bundleManager from './../@ohos.bundle.bundleManager';

/**
 * The module defines the HAP module information. An application can obtain its own HAP module information through
 * [getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf}, with
 * **GET_BUNDLE_INFO_WITH_HAP_MODULE** passed in for
 * [bundleFlags]{@link @ohos.bundle.bundleManager:bundleManager.BundleFlag}.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
export interface HapModuleInfo {
  /**
   * Module name.
   *
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly name: string;

  /**
   * [Icon](docroot://quick-start/layered-image.md) of the entry ability of the current module. The value is the index
   * of the icon resource file, which is the same as the value of the **icon** field of the
   * [abilities tag](docroot://quick-start/module-configuration-file.md#abilities) or
   * [extensionAbilities tag](docroot://quick-start/module-configuration-file.md#extensionabilities) in the module
   * configuration file. If no entry ability is configured, the value is empty.
   *
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly icon: string;

  /**
   * [Resource ID](docroot://quick-start/resource-categories-and-access.md#resource-directories) of the icon of the
   * entry ability of the current module. If no entry ability is configured, the value is **0**.
   *
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly iconId: long;

  /**
   * Name of the entry ability of the current module. The value is the index of the string resource, which is the same
   * as the value of the **label** field of the
   * [abilities tag](docroot://quick-start/module-configuration-file.md#abilities) or
   * [extensionAbilities tag](docroot://quick-start/module-configuration-file.md#extensionabilities) in the module
   * configuration file. If no entry ability is configured, the value is empty.
   *
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly label: string;

  /**
   * [Resource ID](docroot://quick-start/resource-categories-and-access.md#resource-directories) of the name of the
   * entry ability of the current module. If no entry ability is configured, the value is **0**.
   *
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly labelId: long;

  /**
   * Module description.
   *
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly description: string;

  /**
   * Resource ID of the description.
   *
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly descriptionId: long;

  /**
   * Name of the entry UIAbility or ExtensionAbility of the current module.
   *
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly mainElementName: string;

  /**
   * Information about all abilities in the current module. Obtained by calling
   * [getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf} with
   * **GET_BUNDLE_INFO_WITH_HAP_MODULE** and **GET_BUNDLE_INFO_WITH_ABILITY** passed in as the **bundleFlags**
   * parameter.
   *
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly abilitiesInfo: Array<AbilityInfo>;

  /**
   * Information about all ExtensionAbilities in the current module. Obtained by calling
   * [getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf} with
   * **GET_BUNDLE_INFO_WITH_HAP_MODULE** and **GET_BUNDLE_INFO_WITH_EXTENSION_ABILITY** passed in as the **bundleFlags**
   * parameter.
   *
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly extensionAbilitiesInfo: Array<ExtensionAbilityInfo>;

  /**
   * Metadata of the current module. Obtained by calling
   * [getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf} with
   * **GET_BUNDLE_INFO_WITH_HAP_MODULE** and **GET_BUNDLE_INFO_WITH_METADATA** passed in as the **bundleFlags**
   * parameter.
   *
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly metadata: Array<Metadata>;

  /**
   * Set of [device types](docroot://quick-start/module-configuration-file.md#devicetypes) on which the module can be
   * installed and run.
   *
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly deviceTypes: Array<string>;

  /**
   * Whether the module supports installation-free (without requiring the user to explicitly install it from the app
   * market). The value **true** indicates that installation-free is supported, and **false** indicates the opposite.
   *
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly installationFree: boolean;

  /**
   * Hash value of the module, which uniquely identifies the module. The hash value is calculated based on the module
   * content and can be used to verify module integrity and compare versions.
   *
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly hashValue: string;

  /**
   * Identifies the type of the current module.
   *
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly type: bundleManager.ModuleType;

  /**
   * List of dynamic shared libraries that the module depends on at runtime.
   *
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly dependencies: Array<Dependency>;

  /**
   * Preload list of the modules in the atomic service.
   *
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly preloads: Array<PreloadItem>;

  /**
   * File menu configuration of the module. Obtained by calling
   * [getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf} with
   * **GET_BUNDLE_INFO_WITH_HAP_MODULE** and **GET_BUNDLE_INFO_WITH_MENU** passed in as the **bundleFlags** parameter.
   *
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  readonly fileContextMenuConfig: string;

  /**
   * [Route table configuration of the module](docroot://quick-start/module-configuration-file.md#routermap). Obtained
   * by calling [getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf} with
   * **GET_BUNDLE_INFO_WITH_HAP_MODULE** and **GET_BUNDLE_INFO_WITH_ROUTER_MAP** passed in as the **bundleFlags**
   * parameter.
   *
   * **Atomic service API:** Since API version 12, this API is supported in atomic services.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly routerMap: Array<RouterItem>;

  /**
   * Path of the local library file of the module in the application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 12 dynamic
   * @since 23 static
   */
  readonly nativeLibraryPath: string;

  /**
   * Installation path of the module.
   *
   * **Atomic service API:** Since API version 12, this API is supported in atomic services.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly codePath: string;

  /**
   * Indicates the physical installation path of the module.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  readonly codePhysicalPath?: string;
}

/**
 * Describes the information about the dynamic shared library on which the module depends.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
export interface Dependency {
  /**
   * Module name of the shared bundle on which the current module depends.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly moduleName: string;

  /**
   * Name of the shared bundle on which the current module depends.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  readonly bundleName: string;

  /**
   * Version number of the shared bundle.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  readonly versionCode: long;
}

/**
 * Describes the preloaded module information in the atomic service.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
export interface PreloadItem {
  /**
   * Module name.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly moduleName: string;
}

/**
 * Describes the router table configuration of the module.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
export interface RouterItem {
  /**
   * Name of the page to be redirected to.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly name: string;
  /**
   * Path of the page in the module.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly pageSourceFile: string;
  /**
   * Function decorated by @Builder. The function describes the UI of the page.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly buildFunction: string;
  /**
   * Any type of custom data in the
   * [routing table configuration file](docroot://quick-start/module-configuration-file.md#routermap), that is, JSON
   * string of the **customData** field. You need to call **JSON.parse** to parse the field.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly customData: string;
  /**
   * User-defined string in the
   * [routing table configuration file](docroot://quick-start/module-configuration-file.md#routermap), that is, value of
   * the **data** field. This field is parsed by the system. You do not need to parse it.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly data: Array<DataItem>;
}

/**
 * Describes the user-defined data in the routing table configuration of the module.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
export interface DataItem {
  /**
   * Key of the user-defined data.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly key: string;
  /**
   * Value of the user-defined data.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly value: string;
}