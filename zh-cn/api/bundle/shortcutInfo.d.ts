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
 *
 * @file ShortcutInfo
 * @kit AbilityKit
 */

/**
 * 快捷方式意图
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @systemapi Hide this for inner system use
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead shortcutInfo:ShortcutWant
 */
export interface ShortcutWant {
  /**
   * 快捷方式的目标捆绑包。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutWant#targetBundle
   */
  readonly targetBundle: string;
  /**
   * 快捷方式所需的目标类。
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
 * 应用配置文件中定义的快捷方式信息，[FA模型](docroot://application-models/ability-terminology.md#fa模型)配置在
 * [config.json](docroot://quick-start/application-configuration-file-overview-fa.md)文件中进行配置，
 * [Stage模型](docroot://application-models/ability-terminology.md#stage模型)配置在开发视图的resources/base/profile下面定义配置文件即可。
 * 
 * > **说明：**
 * >
 * > 从API version 9开始，该模块不再维护。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead shortcutInfo:ShortcutInfo
 */
export interface ShortcutInfo {
  /**
   * 快捷方式所属应用程序的ID。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#id
   */
  readonly id: string;
  /**
   * 包含该快捷方式的Bundle名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#bundleName
   */
  readonly bundleName: string;
  /**
   * 快捷方式的本地Ability信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#hostAbility
   */
  readonly hostAbility: string;
  /**
   * 快捷方式的图标。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#icon
   */
  readonly icon: string;
  /**
   * 快捷方式的图标ID。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#iconId
   */
  readonly iconId: number;
  /**
   * 快捷方式的名称。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#label
   */
  readonly label: string;
  /**
   * 快捷方式的名称ID。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#labelId
   */
  readonly labelId: number;
  /**
   * 快捷方式的禁用消息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  readonly disableMessage: string;
  /**
   * 快捷方式意图列表。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#wants
   */
  readonly wants: Array<ShortcutWant>;
  /**
   * 快捷方式是否为静态，取值为true表示是静态的快捷方式，取值为false表示不是静态的快捷方式。
   *
   * @default false
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#sourceType
   */
  readonly isStatic?: boolean;
  /**
   * 快捷方式是否为主页面快捷方式，取值为true表示是主页面快捷方式，取值为false表示不是主页面快捷方式。
   *
   * @default false
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#sourceType
   */
  readonly isHomeShortcut?: boolean;
  /**
   * 是否启用快捷方式，取值为true表示启用快捷方式，取值为false表示停用快捷方式。
   *
   * @default false
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.bundle.launcherBundleManager/launcherBundleManager.ShortcutInfo#visible
   */
  readonly isEnabled?: boolean;
}