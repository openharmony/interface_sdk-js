/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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
 * @kit ConnectivityKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type baseProfile from './@ohos.bluetooth.baseProfile';
import type constant from './@ohos.bluetooth.constant';

/**
 * Provides methods to accessing bluetooth PBAP(Phone Book Access Profile)-related capabilities.
 *
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @since 11 dynamic
 */
declare namespace pbap {
  /**
   * Base interface of profile.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11 dynamic
   */
  type BaseProfile = baseProfile.BaseProfile;

  /**
   * Indicate the phone book access authorization.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @since 11 dynamic
   */
  type AccessAuthorization = constant.AccessAuthorization;

  /**
   * Enum for the share type.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @since 11 dynamic
   */
  enum ShareType {
    /**
     * Share the names and numbers in contacts.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 11 dynamic
     */
    SHARE_NAME_AND_PHONE_NUMBER = 0,
    /**
     * Share all the information.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 11 dynamic
     */
    SHARE_ALL = 1,
    /**
     * Share nothing.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 11 dynamic
     */
    SHARE_NOTHING = 2
  }

  /**
   * create the instance of PBAP server profile.
   *
   * @returns { PbapServerProfile } Returns the instance of pbap profile.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11 dynamic
   */
  function createPbapServerProfile(): PbapServerProfile;

  /**
   * create the instance of PBAP client profile.
   *
   * @returns { PbapClientProfile } Returns the instance of pbap client profile.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes:
   *     1. The hardware does not support the capability; 2. The chip does not support the capability;
   *     3. A dependent service feature is not supported.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function createPbapClientProfile(): PbapClientProfile;

  /**
   * Manager PBAP server profile.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11 dynamic
   */
  interface PbapServerProfile extends BaseProfile {
    /**
     * Disconnect the PBAP connection with the remote device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 11 dynamic
     */
    disconnect(deviceId: string): void;

    /**
     * Set the PBAP sharing type.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @param { ShareType } type - Indicates the PBAP sharing type.
     * @param { AsyncCallback<void> } callback - the callback result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 11 dynamic
     */
    setShareType(deviceId: string, type: ShareType, callback: AsyncCallback<void>): void;

    /**
     * Set the PBAP sharing type.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @param { ShareType } type - Indicates the PBAP sharing type.
     * @returns { Promise<void> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 11 dynamic
     */
    setShareType(deviceId: string, type: ShareType): Promise<void>;

    /**
     * Get the PBAP sharing type.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @param { AsyncCallback<ShareType> } callback - the callback result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 11 dynamic
     */
    getShareType(deviceId: string, callback: AsyncCallback<ShareType>): void;

    /**
     * Get the PBAP sharing type.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @returns { Promise<ShareType> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 11 dynamic
     */
    getShareType(deviceId: string): Promise<ShareType>;

    /**
     * Set the phone book access authorization.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @param { AccessAuthorization } authorization - Indicates the permission.
     * @param { AsyncCallback<void> } callback - the callback result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 11 dynamic
     */
    setPhoneBookAccessAuthorization(
      deviceId: string,
      authorization: AccessAuthorization,
      callback: AsyncCallback<void>
    ): void;

    /**
     * Set the phone book access authorization.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @param { AccessAuthorization } authorization - Indicates the permission.
     * @returns { Promise<void> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 11 dynamic
     */
    setPhoneBookAccessAuthorization(deviceId: string, authorization: AccessAuthorization): Promise<void>;

    /**
     * Get the phone book access authorization.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @param { AsyncCallback<AccessAuthorization> } callback - the callback result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 11 dynamic
     */
    getPhoneBookAccessAuthorization(deviceId: string, callback: AsyncCallback<AccessAuthorization>): void;

    /**
     * Get the phone book access authorization.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @returns { Promise<AccessAuthorization> } Returns the promise object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 11 dynamic
     */
    getPhoneBookAccessAuthorization(deviceId: string): Promise<AccessAuthorization>;
  }

  /**
   * Manage the PBAP client profile.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  interface PbapClientProfile extends BaseProfile {
    /**
     * Connect the PBAP client connection with the remote device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed.
     *     A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Possible causes:
     *     1. The hardware does not support the capability; 2. The chip does not support the capability;
     *     3. A dependent service feature is not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Internal system error. For example, IPC error.
     *     Detailed error messages can be used to assist in locating the problem.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    connect(deviceId: string): void;

    /**
     * Disconnect the PBAP client connection with the remote device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed.
     *     A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Possible causes:
     *     1. The hardware does not support the capability; 2. The chip does not support the capability;
     *     3. A dependent service feature is not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Internal system error. For example, IPC error.
     *     Detailed error messages can be used to assist in locating the problem.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    disconnect(deviceId: string): void;

    /**
     * Get the PBAP phone book sync state, only the synchronization sub-state is reported.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @returns { SyncStateType } Returns the phone book sync state.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed.
     *     A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Possible causes:
     *     1. The hardware does not support the capability; 2. The chip does not support the capability;
     *     3. A dependent service feature is not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Internal system error. For example, IPC error.
     *     Detailed error messages can be used to assist in locating the problem.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    getSyncState(deviceId: string): SyncStateType;

    /**
     * Subscribe to the event reported when the phone book sync state changes.
     * Only the synchronization sub-state is reported.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<SyncStateChangeParam> } callback - Callback used to listen for event.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed.
     *     A non-system application calls a system API.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    onSyncStateChange(callback: Callback<SyncStateChangeParam>): void;

    /**
     * Unsubscribe to the event reported when the phone book sync state changes.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<SyncStateChangeParam> } [callback] - Callback used to listen for event.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed.
     *     A non-system application calls a system API.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    offSyncStateChange(callback?: Callback<SyncStateChangeParam>): void;
  }

  /**
   * Information about the phone book sync state change.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  interface SyncStateChangeParam {
    /**
     * The address of the remote device.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    deviceId: string;
    /**
     * Phone book sync state.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    state: SyncStateType;
  }

  /**
   * Phone book sync state type.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  enum SyncStateType {
    /**
     * Phone book sync is idle (not started, e.g. connected but not downloading).
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    PHONEBOOK_STATE_IDLE = 0,
    /**
     * Phone book is downloading.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    PHONEBOOK_STATE_DOWNLOADING = 1,
    /**
     * Phone book download completed.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    PHONEBOOK_STATE_DOWNLOADED = 2,
    /**
     * Phone book download error.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    PHONEBOOK_STATE_DOWNLOAD_ERROR = 3
  }
}

export default pbap;