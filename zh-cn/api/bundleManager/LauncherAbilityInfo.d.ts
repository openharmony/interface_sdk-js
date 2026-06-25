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

import { ApplicationInfo } from './ApplicationInfo';
import { ElementName } from './ElementName';

/**
 * 桌面应用的Ability信息，可以通过
 * [getLauncherAbilityInfoSync]{@link ./../@ohos.bundle.launcherBundleManager:launcherBundleManager.getLauncherAbilityInfoSync}
 * <!--Del-->或者
 * [getLauncherAbilityInfo]{@link ./../@ohos.bundle.launcherBundleManager:launcherBundleManager.getLauncherAbilityInfo(bundleName: string, userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>)}
 * <!--DelEnd-->获取。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
 * @since 18 dynamic
 * @since 23 static
 */
export interface LauncherAbilityInfo {
  /**
   * launcher ability的应用程序配置信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 18 dynamic
   * @since 23 static
   */
  readonly applicationInfo: ApplicationInfo;

  /**
   * launcher ability的ElementName信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 18 dynamic
   * @since 23 static
   */
  readonly elementName: ElementName;

  /**
   * launcher ability的名称的资源ID值。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 18 dynamic
   * @since 23 static
   */
  readonly labelId: long;

  /**
   * launcher ability的图标的资源ID值。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 18 dynamic
   * @since 23 static
   */
  readonly iconId: long;

  /**
   * launcher ability的用户ID。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 18 dynamic
   * @since 23 static
   */
  readonly userId: int;

  /**
   * launcher ability的安装时间戳，单位毫秒。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
   * @since 18 dynamic
   * @since 23 static
   */
  readonly installTime: long;
}