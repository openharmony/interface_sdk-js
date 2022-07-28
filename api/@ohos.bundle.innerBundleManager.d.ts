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

import { AsyncCallback, Callback } from './basic';
import { BundleStatusCallback } from './bundle/bundleStatusCallback';
import { LauncherAbilityInfo as _LauncherAbilityInfo } from './bundle/launcherAbilityInfo';
import * as _ShortCutInfo from './bundle/shortcutInfo';

/**
 * inner bundle manager.
 * @name innerBundleManager
 * @since 8
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @permission NA
 * @systemapi Hide this for inner system use
 */

declare namespace innerBundleManager {
  /**
   * Obtains based on a given bundleName and userId.
   *
   * @since 8
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @param bundleName Indicates the application bundle name to be queried.
   * @param userId Indicates the id for the user.
   * @return Returns the LauncherAbilityInfo object.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @systemapi Hide this for inner system use
   */
  function getLauncherAbilityInfos(bundleName: string, userId: number, callback: AsyncCallback<Array<LauncherAbilityInfo>>) : void;
  function getLauncherAbilityInfos(bundleName: string, userId: number) : Promise<Array<LauncherAbilityInfo>>;

  /**
   * Register Callback.
   *
   * @since 8
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @param type Indicates the command should be implement.
   * @param LauncherStatusCallback Indicates the callback to be register.
   * @return Returns the result or error maeeage.
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @systemapi Hide this for inner system use
   */
  function on(type:"BundleStatusChange", bundleStatusCallback : BundleStatusCallback, callback: AsyncCallback<string>) : void;
  function on(type:"BundleStatusChange", bundleStatusCallback : BundleStatusCallback): Promise<string>;

  /**
   * UnRegister Callback.
   *
   * @since 8
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @param type Indicates the command should be implement.
   * @return Returns the result or error maeeage.
   * @permission ohos.permission.LISTEN_BUNDLE_CHANGE
   * @systemapi Hide this for inner system use
   */
  function off(type:"BundleStatusChange", callback: AsyncCallback<string>) : void;
  function off(type:"BundleStatusChange"): Promise<string>;

  /**
   * Obtains based on a given userId.
   *
   * @since 8
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @param userId Indicates the id for the user.
   * @return Returns the LauncherAbilityInfo object.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @systemapi Hide this for inner system use
   */
  function getAllLauncherAbilityInfos(userId: number, callback: AsyncCallback<Array<LauncherAbilityInfo>>) : void;
  function getAllLauncherAbilityInfos(userId: number) : Promise<Array<LauncherAbilityInfo>>;

  /**
   * Obtains based on a given bundleName.
   *
   * @since 8
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @param bundleName Indicates the application bundle name to be queried.
   * @return Returns the LauncherShortcutInfo object.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @systemapi Hide this for inner system use
   */
  function getShortcutInfos(bundleName :string, callback: AsyncCallback<Array<ShortcutInfo>>) : void;
  function getShortcutInfos(bundleName : string) : Promise<Array<ShortcutInfo>>;

  /**
   * Contains basic launcher Ability information, which uniquely identifies an LauncherAbilityInfo.
   * 
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi hide this for inner system use
   */
  export type LauncherAbilityInfo = _LauncherAbilityInfo;

  /**
   * Provides information about a shortcut, including the shortcut ID and label.
   * 
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   */
  export type ShortcutInfo = _ShortCutInfo.ShortcutInfo;

  /**
   * Provides methods for obtaining information about the ability that a shortcut will start, including the target
   * bundle name, target module name and ability class name.
   * 
   * @since 9
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi hide this for inner system use
   */
  export type ShortcutWant = _ShortCutInfo.ShortcutWant;
}

export default innerBundleManager;
