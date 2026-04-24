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
 * The autoStartupManager module provides APIs for an application to query whether it is configured to start 
 * automatically at boot time.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi [since 11 - 20]
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace autoStartupManager {
  /**
   * Registers a callback to listen for auto-startup status changes of an application component.
   * Starting from API version 21, this API can be properly called only on phones, 2-in-1 devices, tablets, and 
   * wearables. On other devices, it returns the error code 16000050.
   * Starting from API version 18, this API can be properly called on 2-in-1 devices and wearables. If it is called on 
   * other device types, error code 16000050 is returned.
   * For versions earlier than API version 18, this API can be properly called only on 2-in-1 devices. If it is called 
   * on other device types, error code 16000050 is returned.
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @param { 'systemAutoStartup' } type - Event type. The value is fixed at **systemAutoStartup**, which can be called
   *     only by system applications.
   * @param { AutoStartupCallback } callback - Callback used for registration.
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
   * Register the listener that watches for all applications auto startup state.
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @param { AutoStartupCallback } callback - Auto startup callback.
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
   * Unregisters the callback used to listen for auto-startup status changes of an application component.
   * Starting from API version 21, this API can be properly called only on phones, 2-in-1 devices, tablets, and 
   * wearables. On other devices, it returns the error code 16000050.
   * Starting from API version 18, this API can be properly called on 2-in-1 devices and wearables. If it is called on 
   * other device types, error code 16000050 is returned.
   * For versions earlier than API version 18, this API can be properly called only on 2-in-1 devices. If it is called 
   * on other device types, error code 16000050 is returned.
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @param { 'systemAutoStartup' } type - Event type. The value is fixed at **systemAutoStartup**, which can be called
   *     only by system applications.
   * @param { AutoStartupCallback } [callback] - Callback used for unregistration.
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
   * Unregister listener that watches for all applications auto startup state.
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @param { AutoStartupCallback } [callback] - Auto startup callback.
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
   * Sets an application component to automatically start upon system boot. This API uses an asynchronous callback to 
   * return the result.
   * Starting from API version 21, this API can be properly called only on phones, 2-in-1 devices, tablets, and 
   * wearables. On other devices, it returns the error code 16000050.
   * Starting from API version 18, this API can be properly called on 2-in-1 devices and wearables. If it is called on 
   * other device types, error code 16000050 is returned.
   * For versions earlier than API version 18, this API can be properly called only on 2-in-1 devices. If it is called 
   * on other device types, error code 16000050 is returned.
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @param { AutoStartupInfo } info - Information about the target application component.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the setting is successful, **err**
   *     is **undefined**; otherwise, **err** is an error object.
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
   * Sets an application component to automatically start upon system boot. This API uses a promise to return the 
   * result.
   * Starting from API version 21, this API can be properly called only on phones, 2-in-1 devices, tablets, and 
   * wearables. On other devices, it returns the error code 16000050.
   * Starting from API version 18, this API can be properly called on 2-in-1 devices and wearables. If it is called on 
   * other device types, error code 16000050 is returned.
   * For versions earlier than API version 18, this API can be properly called only on 2-in-1 devices. If it is called 
   * on other device types, error code 16000050 is returned.
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @param { AutoStartupInfo } info - Information about the target application component.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Cancels the auto-startup setting for an application component. This API uses an asynchronous callback to return the
   * result.
   * Starting from API version 21, this API can be properly called only on phones, 2-in-1 devices, tablets, and 
   * wearables. On other devices, it returns the error code 16000050.
   * Starting from API version 18, this API can be properly called on 2-in-1 devices and wearables. If it is called on 
   * other device types, error code 16000050 is returned.
   * For versions earlier than API version 18, this API can be properly called only on 2-in-1 devices. If it is called 
   * on other device types, error code 16000050 is returned.
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @param { AutoStartupInfo } info - Information about the target application component.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the cancellation is successful,
   *     **err** is **undefined**; otherwise, **err** is an error object.
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
   * Cancels the auto-startup setting for an application component. This API uses a promise to return the result.
   * Starting from API version 21, this API can be properly called only on phones, 2-in-1 devices, tablets, and 
   * wearables. On other devices, it returns the error code 16000050.
   * Starting from API version 18, this API can be properly called on 2-in-1 devices and wearables. If it is called on 
   * other device types, error code 16000050 is returned.
   * For versions earlier than API version 18, this API can be properly called only on 2-in-1 devices. If it is called 
   * on other device types, error code 16000050 is returned.
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @param { AutoStartupInfo } info - Information about the target application component.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains information about all auto-startup application components. This API uses an asynchronous callback to return
   * the result.
   * Starting from API version 21, this API can be properly called only on phones, 2-in-1 devices, tablets, and 
   * wearables. On other devices, it returns the error code 16000050.
   * Starting from API version 18, this API can be properly called on 2-in-1 devices and wearables. If it is called on 
   * other device types, error code 16000050 is returned.
   * For versions earlier than API version 18, this API can be properly called only on 2-in-1 devices. If it is called 
   * on other device types, error code 16000050 is returned.
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @param { AsyncCallback<Array<AutoStartupInfo>> } callback - Callback used to return the result. If the information
   *     is obtained, **err** is **undefined** and **data** is
   *     **Array<[AutoStartupInfo]{@link ./application/AutoStartupInfo:AutoStartupInfo}>**; otherwise, **err** is an
   *     error object.
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
   * Obtains information about all auto-startup application components. This API uses a promise to return the result.
   * Starting from API version 21, this API can be properly called only on phones, 2-in-1 devices, tablets, and 
   * wearables. On other devices, it returns the error code 16000050.
   * Starting from API version 18, this API can be properly called on 2-in-1 devices and wearables. If it is called on 
   * other device types, error code 16000050 is returned.
   * For versions earlier than API version 18, this API can be properly called only on 2-in-1 devices. If it is called 
   * on other device types, error code 16000050 is returned.
   *
   * @permission ohos.permission.MANAGE_APP_BOOT
   * @returns { Promise<Array<AutoStartupInfo>> } Promise used to return the information obtained.
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
   * Checks whether the current application is enabled for automatic startup at boot time. This API uses a promise to 
   * return the result.
   * This API can be properly called only on phones, PC/2-in-1 devices, tablets, and wearables. On other devices, it 
   * returns the error code 801.
   *
   * @returns { Promise<boolean> } Promise used to return the auto-startup status. **true** if enabled for automatic
   *     startup at boot time, **false** otherwise.
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
   * Check whether the current device supports auto startup on this device.
   *
   * @returns { boolean }
   *     - `true`: Device supports auto startup.
   *     - `false`: Device do not support auto startup.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function isAutoStartupSupported(): boolean;
}

export default autoStartupManager;