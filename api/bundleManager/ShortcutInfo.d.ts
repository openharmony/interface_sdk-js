/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * The module describes the shortcut information defined in the 
 * [module.json5](docroot://quick-start/module-configuration-file.md#shortcuts) file of an application. The information 
 * can be obtained by running 
 * [getAllShortcutInfoForSelf]{@link ./../@ohos.bundle.shortcutManager:shortcutManager.getAllShortcutInfoForSelf}<!--Del
 * --> or 
 * [getShortcutInfo]{@link ./../@ohos.bundle.launcherBundleManager:launcherBundleManager.getShortcutInfo(bundleName :string, callback: AsyncCallback<Array<ShortcutInfo>>)}
 * <!--DelEnd-->.
 *
 * @file
 * @kit AbilityKit
 */

/**
 * Describes the configuration information for a shortcut.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
 * @systemapi [since 9 - 19]
 * @publicapi [since 20]
 * @since 9 dynamic
 * @since 23 static
 */
export interface ShortcutInfo {
  /**
   * ID of the shortcut.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 9 - 19]
   * @publicapi [since 20]
   * @since 9 dynamic
   * @since 23 static
   */
  id: string;

  /**
   * Bundle name of the application to which the shortcut belongs.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 9 - 19]
   * @publicapi [since 20]
   * @since 9 dynamic
   * @since 23 static
   */
  bundleName: string;

  /**
   * Module name of the shortcut.
   *
   * @type { string } [since 9 - 11]
   * @type { ?string } [since 12]
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 9 - 19]
   * @publicapi [since 20]
   * @since 9 dynamic
   * @since 23 static
   */
  moduleName?: string;

  /**
   * Name of the ability that hosts the shortcut.
   *
   * @type { string } [since 9 - 11]
   * @type { ?string } [since 12]
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 9 - 19]
   * @publicapi [since 20]
   * @since 9 dynamic
   * @since 23 static
   */
  hostAbility?: string;

  /**
   * Icon of the shortcut. The value is the index of a resource file.
   *
   * @type { string } [since 9 - 11]
   * @type { ?string } [since 12]
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 9 - 19]
   * @publicapi [since 20]
   * @since 9 dynamic
   * @since 23 static
   */
  icon?: string;

  /**
   * Resource ID of the shortcut icon.
   *
   * @type { number } [since 9 - 11]
   * @type { ?number } [since 12 - 19]
   * @type { ?long } [since 20]
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 9 - 19]
   * @publicapi [since 20]
   * @since 9 dynamic
   * @since 23 static
   */
  iconId?: long;

  /**
   * Label of the shortcut. The value can be descriptive text or a resource index.
   *
   * @type { string } [since 9 - 11]
   * @type { ?string } [since 12]
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 9 - 19]
   * @publicapi [since 20]
   * @since 9 dynamic
   * @since 23 static
   */
  label?: string;

  /**
   * Resource ID of the shortcut label.
   *
   * @type { number } [since 9 - 11]
   * @type { ?number } [since 12 - 19]
   * @type { ?long } [since 20]
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 9 - 19]
   * @publicapi [since 20]
   * @since 9 dynamic
   * @since 23 static
   */
  labelId?: long;

  /**
   * A collection of target Wants information defined within the shortcut.
   *
   * @type { Array<ShortcutWant> } [since 9 - 11]
   * @type { ?Array<ShortcutWant> } [since 12]
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 9 - 19]
   * @publicapi [since 20]
   * @since 9 dynamic
   * @since 23 static
   */
  wants?: Array<ShortcutWant>;

  /**
   * Index of the application clone to which the shortcut belongs.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 12 - 19]
   * @publicapi [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  appIndex: int;

  /**
   * Source type of the shortcut. The value **0** means a custom shortcut, **1** means a static shortcut, and **2**
   * means a dynamic shortcut. Dynamic shortcuts are supported since API version 23.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 12 - 19]
   * @publicapi [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  sourceType: int;

  /**
   * Whether the shortcut is visible. **true** if visible, **false** otherwise. The default value is **true**.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic
   * @since 23 static
   */
  visible?: boolean;
}

/**
 * Describes a collection of target [Wants](docroot://quick-start/module-configuration-file.md#wants) information
 * defined within a shortcut.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
 * @systemapi [since 9 - 19]
 * @publicapi [since 20]
 * @since 9 dynamic
 * @since 23 static
 */
export interface ShortcutWant {
  /**
   * Target bundle name of the shortcut.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 9 - 19]
   * @publicapi [since 20]
   * @since 9 dynamic
   * @since 23 static
   */
  targetBundle: string;

  /**
   * Target module name of the shortcut.
   *
   * @type { string } [since 9 - 11]
   * @type { ?string } [since 12]
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 9 - 19]
   * @publicapi [since 20]
   * @since 9 dynamic
   * @since 23 static
   */
  targetModule?: string;

  /**
   * Target ability name of the shortcut.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 9 - 19]
   * @publicapi [since 20]
   * @since 9 dynamic
   * @since 23 static
   */
  targetAbility: string;

  /**
   * Custom data for launching the shortcut. The data must be strings. Both keys and values can be strings up to 1024
   * characters long.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 12 - 19]
   * @publicapi [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  parameters?: Array<ParameterItem>;
}

/**
 * Describes the custom data in the shortcut configuration. You can define your own key-value pairs, and obtain the
 * values using the keys.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
 * @systemapi [since 12 - 19]
 * @publicapi [since 20]
 * @since 12 dynamic
 * @since 23 static
 */
export interface ParameterItem {
  /**
   * Key of the custom data.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 12 - 19]
   * @publicapi [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  key: string;

  /**
   * Value of the custom data.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 12 - 19]
   * @publicapi [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  value: string;
}