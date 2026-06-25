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
 * 快捷方式的配置信息。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
 * @systemapi [since 9 - 19]
 * @publicapi [since 20]
 * @since 9 dynamic
 * @since 23 static
 */
export interface ShortcutInfo {
  /**
   * 快捷方式的ID。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 9 - 19]
   * @publicapi [since 20]
   * @since 9 dynamic
   * @since 23 static
   */
  id: string;

  /**
   * 快捷方式所属应用的包名。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 9 - 19]
   * @publicapi [since 20]
   * @since 9 dynamic
   * @since 23 static
   */
  bundleName: string;

  /**
   * 快捷方式的模块名。
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
   * 快捷方式的宿主组件名, 即承载此快捷方式的组件名。
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
   * 快捷方式的图标，取值为资源文件的索引。
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
   * 快捷方式图标的资源ID。
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
   * 快捷方式的标签信息，即快捷方式对外显示的文字描述信息。可以是描述性内容，也可以是标识label的资源索引。
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
   * 快捷方式标签信息为资源索引时的资源ID。
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
   * 快捷方式内定义的目标wants信息集合。
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
   * 快捷方式所属应用的分身索引。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 12 - 19]
   * @publicapi [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  appIndex: int;

  /**
   * 快捷方式来源类型。0表示自定义快捷方式，1表示静态快捷方式，2表示动态快捷方式。从API version 23开始，支持动态快捷方式。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 12 - 19]
   * @publicapi [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  sourceType: int;

  /**
   * 快捷方式是否显示。true：快捷方式显示；false：快捷方式不显示。默认值为true。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 20 dynamic
   * @since 23 static
   */
  visible?: boolean;
}

/**
 * 快捷方式内定义的目标[wants](docroot://quick-start/module-configuration-file.md#wants标签)信息集合。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
 * @systemapi [since 9 - 19]
 * @publicapi [since 20]
 * @since 9 dynamic
 * @since 23 static
 */
export interface ShortcutWant {
  /**
   * 快捷方式的目标包名。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 9 - 19]
   * @publicapi [since 20]
   * @since 9 dynamic
   * @since 23 static
   */
  targetBundle: string;

  /**
   * 快捷方式的目标模块名。
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
   * 快捷方式的目标组件名。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 9 - 19]
   * @publicapi [since 20]
   * @since 9 dynamic
   * @since 23 static
   */
  targetAbility: string;

  /**
   * 拉起快捷方式时的自定义数据，仅支持配置字符串类型的数据。其中键值均最大支持1024长度的字符串。
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
 * 快捷方式配置信息中的自定义数据。由开发者自行决定传入的键值对，可以通过key值获取对应的value值。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
 * @systemapi [since 12 - 19]
 * @publicapi [since 20]
 * @since 12 dynamic
 * @since 23 static
 */
export interface ParameterItem {
  /**
   * 快捷方式配置信息中的自定义数据的键。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 12 - 19]
   * @publicapi [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  key: string;

  /**
   * 快捷方式配置信息中的自定义数据的值。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @systemapi [since 12 - 19]
   * @publicapi [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  value: string;
}