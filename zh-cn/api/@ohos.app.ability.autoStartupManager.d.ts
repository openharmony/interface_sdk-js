/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

/*** if arkts dynamic */
import type { AutoStartupCallback } from './application/AutoStartupCallback';
import type { AutoStartupInfo } from './application/AutoStartupInfo';
/*** endif */
/*** if arkts static */
import type AutoStartupCallback from './application/AutoStartupCallback';
import type AutoStartupInfo from './application/AutoStartupInfo';
/*** endif */
import type { AsyncCallback } from './@ohos.base';

/**
 * autoStartupManager模块提供获取自身应用的开机自启状态。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi [since 11 - 20]
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace autoStartupManager {
  /**
   * 注册监听应用组件开机自启动状态变化的回调函数。
   * 从API version 21开始，该接口仅在Phone、2in1、Tablet和Wearable设备中正常调用，在其他设备上返回16000050错误码。
   * 从API version 18开始，该接口仅在2in1和Wearable设备中可正常调用，在其他设备上返回16000050错误码。
   * 对于API version 18之前版本，该接口仅在2in1设备中可正常调用，在其他设备上返回16000050错误码。
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @param { 'systemAutoStartup' } type - 固定取值“systemAutoStartup”，表示为系统应用所调用。
   * @param { AutoStartupCallback } callback - 监听应用组件开机自启动状态变化的回调对象。
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *     "ohos.permission.MANAGE_APP_BOOT".
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are lef
   *     unspecified; 2. Incorrect parameters types.
   * @throws { BusinessError } 16000050 - Failed to connect to the system service.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  function on(type: 'systemAutoStartup', callback: AutoStartupCallback): void;

  /**
   * 注册监听应用组件开机自启动状态变化的回调函数。
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @param { AutoStartupCallback } callback - 监听应用组件开机自启动状态变化的回调对象。
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *     "ohos.permission.MANAGE_APP_BOOT".
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 16000050 - Connect to system server failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  function onSystemAutoStartup(callback: AutoStartupCallback): void;

  /**
   * 注销监听应用组件开机自启动状态变化的回调函数。
   * 从API version 21开始，该接口仅在Phone、2in1、Tablet和Wearable设备中正常调用，在其他设备上返回16000050错误码。
   * 从API version 18开始，该接口仅在2in1和Wearable设备中可正常调用，在其他设备上返回16000050错误码。
   * 对于API version 18之前版本，该接口仅在2in1设备中可正常调用，在其他设备上返回16000050错误码。
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @param { 'systemAutoStartup' } type - 固定取值“systemAutoStartup”，表示为系统应用所调用。
   * @param { AutoStartupCallback } [callback] - 监听应用组件开机自启动状态变化的回调对象。
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *     "ohos.permission.MANAGE_APP_BOOT".
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
   *     unspecified; 2. Incorrect parameters types.
   * @throws { BusinessError } 16000050 - Failed to connect to the system service.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  function off(type: 'systemAutoStartup', callback?: AutoStartupCallback): void;

  /**
   * 注销监听应用组件开机自启动状态变化的回调函数。
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @param { AutoStartupCallback } [callback] - 监听应用组件开机自启动状态变化的回调对象。
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *     "ohos.permission.MANAGE_APP_BOOT".
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 16000050 - Connect to system server failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  function offSystemAutoStartup(callback?: AutoStartupCallback): void;

  /**
   * 设置应用组件开机自启动。使用callback异步回调。
   * 从API version 21开始，该接口仅在Phone、2in1、Tablet和Wearable设备中正常调用，在其他设备上返回16000050错误码。
   * 从API version 18开始，该接口仅在2in1和Wearable设备中可正常调用，在其他设备上返回16000050错误码。
   * 对于API version 18之前版本，该接口仅在2in1设备中可正常调用，在其他设备上返回16000050错误码。
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @param { AutoStartupInfo } info - 要设置的开机自启动应用组件信息。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置应用组件开机自启动成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *     "ohos.permission.MANAGE_APP_BOOT".
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
   *     unspecified; 2. Incorrect parameters types.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Failed to connect to the system service.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function setApplicationAutoStartup(info: AutoStartupInfo, callback: AsyncCallback<void>): void;

  /**
   * 设置应用组件开机自启动。使用Promise异步回调。
   * 从API version 21开始，该接口仅在Phone、2in1、Tablet和Wearable设备中正常调用，在其他设备上返回16000050错误码。
   * 从API version 18开始，该接口仅在2in1和Wearable设备中可正常调用，在其他设备上返回16000050错误码。
   * 对于API version 18之前版本，该接口仅在2in1设备中可正常调用，在其他设备上返回16000050错误码。
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @param { AutoStartupInfo } info - 要设置的开机自启动应用组件信息。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *     "ohos.permission.MANAGE_APP_BOOT".
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
   *     unspecified; 2. Incorrect parameters types.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Failed to connect to the system service.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function setApplicationAutoStartup(info: AutoStartupInfo): Promise<void>;

  /**
   * 取消应用组件开机自启动。使用callback异步回调。
   * 从API version 21开始，该接口仅在Phone、2in1、Tablet和Wearable设备中正常调用，在其他设备上返回16000050错误码。
   * 从API version 18开始，该接口仅在2in1和Wearable设备中可正常调用，在其他设备上返回16000050错误码。
   * 对于API version 18之前版本，该接口仅在2in1设备中可正常调用，在其他设备上返回16000050错误码。
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @param { AutoStartupInfo } info - 要取消的开机自启动应用组件信息。
   * @param { AsyncCallback<void> } callback - 回调函数。当取消应用组件开机自启动成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *     "ohos.permission.MANAGE_APP_BOOT".
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
   *     unspecified; 2. Incorrect parameters types.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Failed to connect to the system service.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function cancelApplicationAutoStartup(info: AutoStartupInfo, callback: AsyncCallback<void>): void;

  /**
   * 取消应用组件开机自启动。使用Promise异步回调。
   * 从API version 21开始，该接口仅在Phone、2in1、Tablet和Wearable设备中正常调用，在其他设备上返回16000050错误码。
   * 从API version 18开始，该接口仅在2in1和Wearable设备中可正常调用，在其他设备上返回16000050错误码。
   * 对于API version 18之前版本，该接口仅在2in1设备中可正常调用，在其他设备上返回16000050错误码。
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @param { AutoStartupInfo } info - 要取消的开机自启动应用组件信息。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *     "ohos.permission.MANAGE_APP_BOOT".
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
   *     unspecified; 2. Incorrect parameters types.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Failed to connect to the system service.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function cancelApplicationAutoStartup(info: AutoStartupInfo): Promise<void>;

  /**
   * 查询自启动应用组件信息。使用callback异步回调。
   * 从API version 21开始，该接口仅在Phone、2in1、Tablet和Wearable设备中正常调用，在其他设备上返回16000050错误码。
   * 从API version 18开始，该接口仅在2in1和Wearable设备中可正常调用，在其他设备上返回16000050错误码。
   * 对于API version 18之前版本，该接口仅在2in1设备中可正常调用，在其他设备上返回16000050错误码。
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @param { AsyncCallback<Array<AutoStartupInfo>> } callback - 回调函数。当查询自启动应用组件信息成功，err为undefined，data为获取到的Array<
   *     [AutoStartupInfo]{@link ./application/AutoStartupInfo:AutoStartupInfo}>；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *     "ohos.permission.MANAGE_APP_BOOT".
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
   *     unspecified; 2. Incorrect parameters types.
   * @throws { BusinessError } 16000050 - Failed to connect to the system service.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function queryAllAutoStartupApplications(callback: AsyncCallback<Array<AutoStartupInfo>>): void;

  /**
   * 查询自启动应用组件信息。使用Promise异步回调。
   * 从API version 21开始，该接口仅在Phone、2in1、Tablet和Wearable设备中正常调用，在其他设备上返回16000050错误码。
   * 从API version 18开始，该接口仅在2in1和Wearable设备中可正常调用，在其他设备上返回16000050错误码。
   * 对于API version 18之前版本，该接口仅在2in1设备中可正常调用，在其他设备上返回16000050错误码。
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @returns { Promise<Array<AutoStartupInfo>> } Promise对象，返回自启动应用组件信息。
   * @throws { BusinessError } 201 - Permission denied, interface caller does not have permission
   *     "ohos.permission.MANAGE_APP_BOOT".
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
   *     unspecified; 2. Incorrect parameters types.
   * @throws { BusinessError } 16000050 - Failed to connect to the system service.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function queryAllAutoStartupApplications(): Promise<Array<AutoStartupInfo>>;

  /**
   * 获取当前应用的开机自启动状态。使用Promise异步回调。
   * 该接口仅在Phone、PC/2in1、Tablet和Wearable设备中可正常调用，在其他设备中返回801错误码。
   *
   * @returns { Promise<boolean> } Promise对象。返回true表示当前应用已被用户设置为开机自启动，false表示当前应用未被用户设置为开机自启动。
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed;
   *     2.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 21 dynamic
   * @since 23 static
   */
  function getAutoStartupStatusForSelf(): Promise<boolean>;

  /**
   * 检查当前设备是否支持开机自启动。
   * 
   * > **说明：**
   * >
   * > 建议在调用[autoStartupManager.getAutoStartupStatusForSelf]{@link autoStartupManager.getAutoStartupStatusForSelf} 之前，先调
   * > 用该接口检查设备能力。如果返回false，则表明当前设备不支持开机自启动。
   *
   * @returns { boolean }
   当前设备是否支持开机自启动。true：支持，false：不支持。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function isAutoStartupSupported(): boolean;
}

export default autoStartupManager;