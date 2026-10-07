/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file pluginBundleManager module
 * @kit AbilityKit
 */

import { PluginBundleInfo as _PluginBundleInfo, PluginModuleInfo as _PluginModuleInfo} 
    from './bundleManager/PluginBundleInfo';

/**
 * This module provides the capability of managing self-distributed plugins for an app, including installing and
 * uninstalling local plugins.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
declare namespace pluginBundleManager {
  /**
   * Installs a self-distributed plugin (that is, a plugin distributed and managed by the app through its own channels)
   * for the current app. This API uses a promise to return the result.
   *
   * @permission ohos.permission.kernel.SUPPORT_LOCAL_PLUGIN
   * @param { Array<string> } pluginFilePaths - Array of plugin file paths, indicating the list of paths of the plugin
   *     files to install.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.kernel.SUPPORT_LOCAL_PLUGIN'.
   * @throws { BusinessError } 17700010 -
   *     Failed to install the plugin because the plugin fails to be parsed.
   * @throws { BusinessError } 17700011 -
   *     Failed to install the plugin because the plugin signature fails to be verified.
   * @throws { BusinessError } 17700012 -
   *     Failed to install the plugin because the HSP path is invalid or the HSP is too large.
   * @throws { BusinessError } 17700015 -
   *     Failed to install the plugin because they have different configuration information.
   * @throws { BusinessError } 17700016 -
   *     Failed to install the plugin because of insufficient system disk space.
   * @throws { BusinessError } 17700017 -
   *     Failed to install the plugin because the version of the plugin to install is too early.
   * @throws { BusinessError } 17700048 -
   *     Failed to install the plugin because the code signature verification failed.
   * @throws { BusinessError } 17700052 -
   *     Failed to install the plugin because debug bundle cannot be installed under non-developer mode.
   * @throws { BusinessError } 17700073 - Failed to install the plugin because a plugin with the same
   *     bundle name but different signature information exists on the device.
   * @throws { BusinessError } 17700087 -
   *     Failed to install the plugin because the current device does not support plugins.
   * @throws { BusinessError } 17700091 -
   *     Failed to install the plugin because the plugin name is the same as the host bundle name.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function installLocalPlugin(pluginFilePaths: Array<string>): Promise<void>;

  /**
   * Uninstalls the specified plugin installed by the current app through self-distribution. This API uses a promise to
   * return the result.
   *
   * @permission ohos.permission.kernel.SUPPORT_LOCAL_PLUGIN
   * @param { string } pluginBundleName - Bundle name of the plugin, indicating the application bundle name of the
   *     plugin to be uninstalled.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.kernel.SUPPORT_LOCAL_PLUGIN'.
   * @throws { BusinessError } 17700092 - Failed to uninstall the plugin because the specified plugin is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function uninstallLocalPlugin(pluginBundleName: string): Promise<void>;

  /**
   * Queries the information about all self-distributed plugins in the current app. This API uses a promise to return
   * the result.
   *
   * @permission ohos.permission.kernel.SUPPORT_LOCAL_PLUGIN
   * @returns { Promise<Array<PluginBundleInfo>> } Promise used to return the list of all local plugin
   *     information installed for the current application.
   * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.kernel.SUPPORT_LOCAL_PLUGIN'.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getAllLocalPluginInfoForSelf(): Promise<Array<PluginBundleInfo>>;

  /**
   * Plugin information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export type PluginBundleInfo = _PluginBundleInfo;

  /**
   * Module information of the plugin.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export type PluginModuleInfo = _PluginModuleInfo;
}

export default pluginBundleManager;