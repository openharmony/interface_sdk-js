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
 * The module defines shortcut information configured in the configuration file. For the 
 * [FA model](docroot://application-models/ability-terminology.md#fa-model), the information is configured in the 
 * [config.json](docroot://quick-start/application-configuration-file-overview-fa.md) file. For the 
 * [stage model](docroot://application-models/ability-terminology.md#stage-model), the information is configured in the 
 * configuration file under **resources/base/profile** in the development view.
 * 
 * > **NOTE**
 * >
 * > The APIs of this module have been deprecated since API version 9. You are advised to use 
 * > [bundleManager-ShortcutInfo]{@link shortcutInfo} instead.
 *
 * @file
 * @kit AbilityKit
 */

/**
 * > **NOTE**
 * >
 * > This API has been supported since API version 7 and deprecated since API version 9. You are advised to use
 * > [bundleManager-ShortcutWant]{@link shortcutInfo:ShortcutWant} instead.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @systemapi Hide this for inner system use
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead shortcutInfo:ShortcutWant
 */
export interface ShortcutWant {
  /**
   * Target bundle of the shortcut.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutWant#targetBundle
   */
  readonly targetBundle: string;
  /**
   * Target class required by the shortcut.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutWant#targetAbility
   */
  readonly targetClass: string;
}

/**
 * > **NOTE**
 * >
 * > This API has been supported since API version 7 and deprecated since API version 9. You are advised to use
 * > [bundleManager-ShortcutInfo]{@link shortcutInfo:ShortcutInfo} instead.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead shortcutInfo:ShortcutInfo
 */
export interface ShortcutInfo {
  /**
   * ID of the application to which the shortcut belongs.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#id
   */
  readonly id: string;
  /**
   * Name of the bundle that contains the shortcut.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#bundleName
   */
  readonly bundleName: string;
  /**
   * Local ability information of the shortcut.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#hostAbility
   */
  readonly hostAbility: string;
  /**
   * Icon of the shortcut.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#icon
   */
  readonly icon: string;
  /**
   * Icon ID of the shortcut.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#iconId
   */
  readonly iconId: number;
  /**
   * Name of the shortcut.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#label
   */
  readonly label: string;
  /**
   * Name ID of the shortcut.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#labelId
   */
  readonly labelId: number;
  /**
   * Message displayed when the shortcut is disabled.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly disableMessage: string;
  /**
   * Want list for the shortcut.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#wants
   */
  readonly wants: Array<ShortcutWant>;
  /**
   * Whether the shortcut is static. **true** if static, **false** otherwise.
   *
   * @default false
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#sourceType
   */
  readonly isStatic?: boolean;
  /**
   * Whether the shortcut is static. **true** if static, **false** otherwise.
   *
   * @default false
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#sourceType
   */
  readonly isHomeShortcut?: boolean;
  /**
   * Whether the shortcut is enabled. **true** if enabled, **false** otherwise.
   *
   * @default false
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#visible
   */
  readonly isEnabled?: boolean;
}