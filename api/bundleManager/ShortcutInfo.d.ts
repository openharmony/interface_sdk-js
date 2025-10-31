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
 * @file
 * @kit AbilityKit
 */

/**
 * Provides information about a shortcut, including the shortcut ID and label.
 *
 * @typedef ShortcutInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
 * @systemapi
 * @since 9
 */
/**
 * Provides information about a shortcut, including the shortcut ID and label.
 *
 * @typedef ShortcutInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
 * @since 20 dynamic&static
 */
export interface ShortcutInfo {
  /**
   * Indicates the ID of the application to which this shortcut belongs
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 9
   */
  /**
   * Indicates the ID of the application to which this shortcut belongs
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 12
   */
  /**
   * Indicates the ID of the application to which this shortcut belongs
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic&static
   */
  id: string;

  /**
   * Indicates the name of the bundle containing the shortcut
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 9
   */
  /**
   * Indicates the name of the bundle containing the shortcut
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 12
   */
  /**
   * Indicates the name of the bundle containing the shortcut
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic&static
   */
  bundleName: string;

  /**
   * Indicates the moduleName of the shortcut
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 9
   */
  /**
   * Indicates the moduleName of the shortcut
   *
   * @type { ?string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 12
   */
  /**
   * Indicates the moduleName of the shortcut
   *
   * @type { ?string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic&static
   */
  moduleName?: string;

  /**
   * Indicates the host ability of the shortcut
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 9
   */
  /**
   * Indicates the host ability of the shortcut
   *
   * @type { ?string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 12
   */
  /**
   * Indicates the host ability of the shortcut
   *
   * @type { ?string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic&static
   */
  hostAbility?: string;

  /**
   * Indicates the icon of the shortcut
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 9
   */
  /**
   * Indicates the icon of the shortcut
   *
   * @type { ?string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 12
   */
  /**
   * Indicates the icon of the shortcut
   *
   * @type { ?string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic&static
   */
  icon?: string;

  /**
   * Indicates the icon id of the shortcut
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 9
   */
  /**
   * Indicates the icon id of the shortcut
   *
   * @type { ?number }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 12
   */
  /**
   * Indicates the icon id of the shortcut
   *
   * @type { ?long }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic&static
   */
  iconId?: long;

  /**
   * Indicates the label of the shortcut
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 9
   */
  /**
   * Indicates the label of the shortcut
   *
   * @type { ?string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 12
   */
  /**
   * Indicates the label of the shortcut
   *
   * @type { ?string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic&static
   */
  label?: string;

  /**
   * Indicates the label id of the shortcut
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 9
   */
  /**
   * Indicates the label id of the shortcut
   *
   * @type { ?number }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 12
   */
  /**
   * Indicates the label id of the shortcut
   *
   * @type { ?long }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic&static
   */
  labelId?: long;

  /**
   * Indicates the wants of the shortcut
   *
   * @type { Array<ShortcutWant> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 9
   */
  /**
   * Indicates the wants of the shortcut
   *
   * @type { ?Array<ShortcutWant> }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 12
   */
  /**
   * Indicates the wants of the shortcut
   *
   * @type { ?Array<ShortcutWant> }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic&static
   */
  wants?: Array<ShortcutWant>;

  /**
   * Indicates the index of application clone.
   *
   * @type { number }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 12
   */
  /**
   * Indicates the index of application clone.
   *
   * @type { int }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic&static
   */
  appIndex: int;

  /**
   * Indicates the source type of shortcut.
   *
   * @type { number }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 12
   */
  /**
   * Indicates the source type of shortcut.
   *
   * @type { int }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic&static
   */
  sourceType: int;

  /**
   * Display control for indicating shortcut.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic&static
   */
  visible?: boolean;
}

/**
 * Obtains information about the ability that a shortcut will start.
 *
 * @typedef ShortcutWant
 * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
 * @systemapi
 * @since 9
 */
/**
 * Obtains information about the ability that a shortcut will start.
 *
 * @typedef ShortcutWant
 * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
 * @since 20 dynamic&static
 */
export interface ShortcutWant {
  /**
   * Indicates the target bundle of the shortcut want
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 9
   */
  /**
   * Indicates the target bundle of the shortcut want
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 12
   */
  /**
   * Indicates the target bundle of the shortcut want
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic&static
   */
  targetBundle: string;

  /**
   * Indicates the target module of the shortcut want
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 9
   */
  /**
   * Indicates the target module of the shortcut want
   *
   * @type { ?string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 12
   */
  /**
   * Indicates the target module of the shortcut want
   *
   * @type { ?string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic&static
   */
  targetModule?: string;

  /**
   * Indicates the target ability of the shortcut want
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 9
   */
  /**
   * Indicates the target ability of the shortcut want
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 12
   */
  /**
   * Indicates the target ability of the shortcut want
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic&static
   */
  targetAbility: string;

  /**
   * Indicates the parameters of the shortcut want
   *
   * @type { ?Array<ParameterItem> }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 12
   */
  /**
   * Indicates the parameters of the shortcut want
   *
   * @type { ?Array<ParameterItem> }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic&static
   */
  parameters?: Array<ParameterItem>;
}

/**
 * Obtains information about the ability that a shortcut will start.
 *
 * @typedef ParameterItem
 * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
 * @systemapi
 * @since 12
 */
/**
 * Obtains information about the ability that a shortcut will start.
 *
 * @typedef ParameterItem
 * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
 * @since 20 dynamic&static
 */
export interface ParameterItem {
  /**
   * Indicates the key of the parameter item.
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 12
   */
  /**
   * Indicates the key of the parameter item.
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic&static
   */
  key: string;

  /**
   * Indicates the value of the parameter item.
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi
   * @since 12
   */
  /**
   * Indicates the value of the parameter item.
   *
   * @type { string }
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic&static
   */
  value: string;
}
