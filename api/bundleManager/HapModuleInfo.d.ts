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
 * The module defines the HAP module information. An application can obtain its own HAP module information through 
 * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}, 
 * with **GET_BUNDLE_INFO_WITH_HAP_MODULE** passed in for 
 * [bundleFlags]{@link ./../@ohos.bundle.bundleManager:bundleManager.BundleFlag}.
 *
 * @file
 * @kit AbilityKit
 */

import { AbilityInfo } from './AbilityInfo';
import { ExtensionAbilityInfo } from './ExtensionAbilityInfo';
import { Metadata } from './Metadata';
import bundleManager from './../@ohos.bundle.bundleManager';

/**
 * The module defines the HAP module information.
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
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly name: string;

  /**
   * [Icon](docroot://quick-start/layered-image.md) for the entry ability of the current module. It is the index of the
   * icon resource file and should match the value of **icon** in the
   * [abilities](docroot://quick-start/module-configuration-file.md#abilities) or
   * [extensionAbilities](docroot://quick-start/module-configuration-file.md#extensionabilities) field in the module
   * configuration file. If no entry ability is configured, this parameter is left empty.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly icon: string;

  /**
   * [Resource ID](docroot://quick-start/resource-categories-and-access.md#resource-directories) of the icon for the
   * entry ability of the current module. If no entry ability is configured, this parameter is left empty.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly iconId: long;

  /**
   * Label of the entry ability of the current module. It is the index of a string resource and should match the value
   * of **label** in the [abilities](docroot://quick-start/module-configuration-file.md#abilities) or
   * [extensionAbilities](docroot://quick-start/module-configuration-file.md#extensionabilities) field in the module
   * configuration file. If no entry ability is configured, this parameter is left empty.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly label: string;

  /**
   * [Resource ID](docroot://quick-start/resource-categories-and-access.md#resource-directories) of the label for the
   * entry ability of the current module. If no entry ability is configured, this parameter is left empty.
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
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly description: string;

  /**
   * ID of the module description.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly descriptionId: long;

  /**
   * Name of the UIAbility or ExtensionAbility that serves as the entry of the current module.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly mainElementName: string;

  /**
   * Information about all ability components of the current module. The information can be obtained by passing in
   * **GET_BUNDLE_INFO_WITH_HAP_MODULE** and **GET_BUNDLE_INFO_WITH_ABILITY** to the **bundleFlags** parameter of
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly abilitiesInfo: Array<AbilityInfo>;

  /**
   * Information about all ExtensionAbility components of the current module. The information can be obtained by passing
   * in **GET_BUNDLE_INFO_WITH_HAP_MODULE** and **GET_BUNDLE_INFO_WITH_EXTENSION_ABILITY** to the **bundleFlags**
   * parameter of
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly extensionAbilitiesInfo: Array<ExtensionAbilityInfo>;

  /**
   * Metadata of the current module. The information can be obtained by passing in **GET_BUNDLE_INFO_WITH_HAP_MODULE**
   * and **GET_BUNDLE_INFO_WITH_METADATA** to the **bundleFlags** parameter of
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly metadata: Array<Metadata>;

  /**
   * Array of [device types](docroot://quick-start/module-configuration-file.md#devicetypes) that the module supports
   * for installation and running.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly deviceTypes: Array<string>;

  /**
   * Whether the module supports the installation-free feature. Installation-free means that the module does not need to
   * be explicitly installed through an app market. **true** if the module supports installation-free, **false**
   * otherwise.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly installationFree: boolean;

  /**
   * Hash value of the module.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly hashValue: string;

  /**
   * Type of the module.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly type: bundleManager.ModuleType;

  /**
   * Dynamic shared libraries on which the module depends.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly dependencies: Array<Dependency>;

  /**
   * Preloaded modules in the atomic service.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  readonly preloads: Array<PreloadItem>;

  /**
   * File menu configuration of the module. The information can be obtained by passing in
   * **GET_BUNDLE_INFO_WITH_HAP_MODULE** and **GET_BUNDLE_INFO_WITH_MENU** to the **bundleFlags** parameter of
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  readonly fileContextMenuConfig: string;

  /**
   * [Router table configuration of the module](docroot://quick-start/module-configuration-file.md#routermap). The
   * information can be obtained by passing in **GET_BUNDLE_INFO_WITH_HAP_MODULE** and
   * **GET_BUNDLE_INFO_WITH_ROUTER_MAP** to the **bundleFlags** parameter of
   * [getBundleInfoForSelf]{@link ./../@ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly routerMap: Array<RouterItem>;

  /**
   * Local library file path of the module in the application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 12 dynamic
   * @since 23 static
   */
  readonly nativeLibraryPath: string;

  /**
   * Installation path of the module.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  readonly codePath: string;
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