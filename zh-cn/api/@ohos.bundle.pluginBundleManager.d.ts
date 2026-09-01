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
 * @file
 * @kit AbilityKit
 */

import { PluginBundleInfo as _PluginBundleInfo, PluginModuleInfo as _PluginModuleInfo} from './bundleManager/PluginBundleInfo';

/**
 * 本模块提供应用对自分发插件的管理能力，包括安装、卸载本地插件。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
declare namespace pluginBundleManager {
  /**
   * 为当前应用安装自分发插件（即应用通过自有渠道分发、自主管理的插件）。使用Promise异步回调。
   *
   * @permission ohos.permission.kernel.SUPPORT_LOCAL_PLUGIN
   * @param { Array<string> } pluginFilePaths - 插件文件路径数组，表示要安装的插件文件的路径列表。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.kernel.SUPPORT_LOCAL_PLUGIN'.
   * @throws { BusinessError } 17700010 - Failed to install the plugin because the plugin fails to be parsed.
   * @throws { BusinessError } 17700011 - Failed to install the plugin because the plugin signature fails to be verified.
   * @throws { BusinessError } 17700012 - Failed to install the plugin because the HSP path is invalid or the HSP is too large.
   * @throws { BusinessError } 17700015 - Failed to install the plugin because they have different configuration information.
   * @throws { BusinessError } 17700016 - Failed to install the plugin because of insufficient system disk space.
   * @throws { BusinessError } 17700017 - Failed to install the plugin since the version of the plugin to install is too early.
   * @throws { BusinessError } 17700048 - Failed to install the plugin because the code signature verification failed.
   * @throws { BusinessError } 17700052 - Failed to install the plugin because debug bundle cannot be installed under non-developer mode.
   * @throws { BusinessError } 17700073 - Failed to install the plugin because a plugin with the same
   * <br>bundle name but different signature information exists on the device.
   * @throws { BusinessError } 17700087 - Failed to install the plugin because the current device does not support plugins.
   * @throws { BusinessError } 17700091 - Failed to install the plugin because the plugin name is the same as the host bundle name.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function installLocalPlugin(pluginFilePaths: Array<string>): Promise<void>;

  /**
   * 卸载当前应用已通过自分发方式安装的指定插件。使用Promise异步回调。
   *
   * @permission ohos.permission.kernel.SUPPORT_LOCAL_PLUGIN
   * @param { string } pluginBundleName - 插件的Bundle名称，表示要卸载的插件的应用包名。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.kernel.SUPPORT_LOCAL_PLUGIN'.
   * @throws { BusinessError } 17700092 - Failed to uninstall the plugin because the specified plugin is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function uninstallLocalPlugin(pluginBundleName: string): Promise<void>;
  
  /**
   * 查询当前应用中所有自分发插件的信息。使用Promise异步回调。
   *
   * @permission ohos.permission.kernel.SUPPORT_LOCAL_PLUGIN
   * @returns { Promise<Array<PluginBundleInfo>> } Promise对象，返回当前应用已安装的所有本地插件信息列表。
   * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.kernel.SUPPORT_LOCAL_PLUGIN'.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getAllLocalPluginInfoForSelf(): Promise<Array<PluginBundleInfo>>;

  /**
   * 插件信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export type PluginBundleInfo = _PluginBundleInfo;

  /**
   * 插件的模块信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export type PluginModuleInfo = _PluginModuleInfo;
}

export default pluginBundleManager;