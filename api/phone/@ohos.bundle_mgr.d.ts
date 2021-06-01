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

import { ApplicationInfo } from './app/applicationinfo';
import { Want } from './app/want';
import { AbilityInfo } from './app/abilityinfo';
import { BundleInfo } from './app/bundleinfo';
import { InstallResult } from './app/installresult';

/**
 * @name BundleMgr
 * @since 6
 * @SysCap appexecfwk
 * @import NA
 * @permission NA
 * @devices phone
 * @testapi
 */
declare namespace bundleMgr {
  /**
   * Obtains the ApplicationInfo based on a given application name.
   *
   * @devices phone
   * @since 6
   * @SysCap appexecfwk
   * @param appName Indicates the application name.
   * @return ApplicationInfo.
   * @testapi
   */
  function getApplicationInfo(appName: string): Promise<ApplicationInfo>;

  /**
   * Obtains BundleInfo of all bundles available in the system.
   *
   * @devices phone
   * @since 6
   * @SysCap appexecfwk
   * @param NA
   * @return Array of BundleInfo.
   * @testapi
   */
  function getBundleInfos(): Promise<Array<BundleInfo>>;

  /**
   * Obtains BundleInfo based on a given bundle name.
   *
   * @devices phone
   * @since 6
   * @SysCap appexecfwk
   * @param bundleName Indicates the bundle name.
   * @return BundleInfo.
   * @testapi
   */
  function getBundleInfo(bundleName: string): Promise<BundleInfo>;

  /**
   * Obtains information about all installed applications.
   *
   * @devices phone
   * @since 6
   * @SysCap appexecfwk
   * @param NA
   * @return Array of ApplicationInfo.
   * @testapi
   */
  function getApplicationInfos(): Promise<Array<ApplicationInfo>>;

  /**
   * Query the AbilityInfo by the given Want.
   *
   * @devices phone
   * @since 6
   * @SysCap appexecfwk
   * @param want Indicates the Want for the ability to be queried.
   * @return AbilityInfo.
   * @testapi
   */
  function queryAbilityInfo(want: Want): Promise<AbilityInfo>;

  /**
   * Install an application in a HAP.
   *
   * @devices phone
   * @since 6
   * @SysCap appexecfwk
   * @param hapFilePath Indicates the path of the HAP.
   * @return InstallResult
   * @testapi
   */
  function install(hapFilePath: string): Promise<InstallResult>;

  /**
   * Uninstall an application.
   *
   * @devices phone
   * @since 6
   * @SysCap appexecfwk
   * @param hapFilePath Indicates the path of the HAP.
   * @return InstallResult
   * @testapi
   */
  function uninstall(bundleName: string): Promise<InstallResult>;
}
export default bundleMgr;
