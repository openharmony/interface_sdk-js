/*
 * Copyright (c) 2024-2024 Huawei Device Co., Ltd.
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
 * @file eSIM Management
 * @kit TelephonyKit
 */

import type { AsyncCallback } from './@ohos.base';

/**
 * The **esim** module provides basic eSIM management capabilities, including checking whether a specified card slot
 * supports the eSIM function.
 *
 * @syscap SystemCapability.Telephony.CoreService.Esim
 * @since 18 dynamic
 * @since 23 static
 */
declare namespace eSIM {
  /**
   * Checks whether the specified card slot supports the eSIM function.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { boolean } Whether the specified card slot supports the eSIM function. If yes, **true** is returned. If
   *     no, **false** is returned.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @since 18 dynamic
   * @since 23 static
   */
  function isSupported(slotId: int): boolean;

  /**
   * Launches the download page for the user to add a single profile. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_ESIM_STATE_OPEN
   * @param { DownloadableProfile } profile - Profile that can be downloaded.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the operation is
   *     successful, and the value **false** indicates the opposite.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @since 18 dynamic
   * @since 23 static
   */
  function addProfile(profile: DownloadableProfile): Promise<boolean>;

  /**
   * Obtains the equipment identifier (EID) of the eUICC hardware in a specified card slot.
   *
   * @permission ohos.permission.GET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { Promise<string> } EID of the eUICC in the specified slot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function getEid(slotId: int): Promise<string>;

  /**
   * Obtains the OS upgrade status for the eSIM in the specified slot. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { Promise<OsuStatus> } Promise used to return the OS upgrade status.
   *     <br> 1. Updating.
   *     <br>   2. Update failed.
   *     <br>  3. Update succeeded.
   *     <br>  4. Already the latest version.
   *     <br> 5. Update service unavailable.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function getOsuStatus(slotId: int): Promise<OsuStatus>;

  /**
   * Upgrades the OS if the OS version of the eSIM in the specified slot is not the latest. This API uses a promise to
   * return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { Promise<OsuStatus> } Promise used to return the OS upgrade status.
   *     <br> 1. Updating.
   *     <br>   2. Update failed.
   *     <br>  3. Update succeeded.
   *     <br>  4. Already the latest version.
   *     <br> 5. Update service unavailable.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function startOsu(slotId: int): Promise<OsuStatus>;

  /**
   * Obtains the metadata of the downloadable profile. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { int } portIndex - Port index of the slot.
   * @param { DownloadableProfile } profile - Downloadable profile.
   * @param { boolean } forceDisableProfile - Whether to forcibly deactivate the current profile during profile
   *     switching.
   *     <br> **true**: The current profile is forcibly deactivated, and profile switching can be directly performed.
   *     <br> **false**: An error is returned, and profile switching can be performed only after the user authorization
   *     is obtained.
   * @returns { Promise<GetDownloadableProfileMetadataResult> } Promise used to return the metadata of the downloadable
   *     profile.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function getDownloadableProfileMetadata(slotId: int, portIndex: int,
                                          profile: DownloadableProfile, forceDisableProfile: boolean): Promise<GetDownloadableProfileMetadataResult>;

  /**
   * Obtains the list of downloadable profiles. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { int } portIndex - Port index of the slot.
   * @param { boolean } forceDisableProfile - Whether to forcibly deactivate the current profile during profile
   *     switching.
   *     <br> **true**: The current profile is forcibly deactivated, and profile switching can be directly performed.
   *     <br> **false**: An error is returned, and profile switching can be performed only after the user authorization
   *     is obtained.
   * @returns { Promise<GetDownloadableProfilesResult> } Promise used to return the list of downloadable profiles.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function getDownloadableProfiles(slotId: int, portIndex: int,
                                   forceDisableProfile: boolean): Promise<GetDownloadableProfilesResult>;

  /**
   * Downloads a profile. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { int } portIndex - Port index of the slot.
   * @param { DownloadableProfile } profile - Downloadable profile.
   * @param { DownloadConfiguration } configuration - Download configuration.
   * @returns { Promise<DownloadProfileResult> } Promise used to return the profile download result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function downloadProfile(slotId: int, portIndex: int, profile: DownloadableProfile,
                           configuration: DownloadConfiguration): Promise<DownloadProfileResult>;

  /**
   * Obtains the profile information list. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { Promise<GetEuiccProfileInfoListResult> } Promise used to return the profile information list.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function getEuiccProfileInfoList(slotId: int): Promise<GetEuiccProfileInfoListResult>;

  /**
   * Obtains eUICC information. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { Promise<EuiccInfo> } Promise used to return the eUICC information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function getEuiccInfo(slotId: int): Promise<EuiccInfo>;

  /**
   * Deletes a profile. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { string } iccid - Profile ID.
   * @returns { Promise<ResultCode> } Promise used to return the operation result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function deleteProfile(slotId: int, iccid: string): Promise<ResultCode>;

  /**
   * Switches to the specified profile. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { int } portIndex - Port index of the slot.
   * @param { string } iccid - Profile ID.
   * @param { boolean } forceDisableProfile - Whether to forcibly deactivate the current profile during profile
   *     switching.
   *     <br> **true**: The current profile is forcibly deactivated, and profile switching can be directly performed.
   *     <br> **false**: An error is returned, and profile switching can be performed only after the user authorization
   *     is obtained.
   * @returns { Promise<ResultCode> } Promise used to return the operation result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function switchToProfile(slotId: int, portIndex: int, iccid: string,
                           forceDisableProfile: boolean): Promise<ResultCode>;

  /**
   * Sets a nickname for the specified profile. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { string } iccid - Profile ID.
   * @param { string } nickname - Profile nickname.
   * @returns { Promise<ResultCode> } Promise used to return the operation result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function setProfileNickname(slotId: int, iccid: string, nickname: string): Promise<ResultCode>;

  /**
   * Clears all specific profiles and resets the eUICC. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { ResetOption } [options] - Reset options.
   * @returns { Promise<ResultCode> } Promise used to return the operation result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function resetMemory(slotId: int, options?:ResetOption): Promise<ResultCode>;

  /**
   * Restores factory settings and retains profiles. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { Promise<ResultCode> } Promise used to return the operation result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function reserveProfilesForFactoryRestore(slotId: int): Promise<ResultCode>;

  /**
   * Sets or updates the default SM-DP+ address stored in the eUICC. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { string } address - Default SM-DP+ address.
   * @returns { Promise<ResultCode> } Promise used to return the operation result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function setDefaultSmdpAddress(slotId: int, address: string): Promise<ResultCode>;

  /**
   * Obtains the default SM-DP+ address stored in the eUICC. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { Promise<string> } Promise used to return the SM-DP+ address.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function getDefaultSmdpAddress(slotId: int): Promise<string>;

  /**
   * Cancels a session. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { string } transactionId - Service ID.
   * @param { CancelReason } cancelReason - Reason for canceling the session.
   * @returns { Promise<ResultCode> } Promise used to return the operation result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function cancelSession(slotId: int, transactionId: string, cancelReason: CancelReason): Promise<ResultCode>;

  /**
   * Obtains the encrypted eSIM ID and other information required for enabling eSIM.
   *
   * @permission ohos.permission.GET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { ContractRequestData } requestData - Information to be encrypted.
   * @returns { Promise<string> } Promise used to return the encrypted information in the Tag-Length-Value (TLV) format.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  function getContractInfo(slotId: int, requestData: ContractRequestData) : Promise<string>;

  /**
   * Obtains the public key ID information supported by the phone.
   *
   * @permission ohos.permission.GET_TELEPHONY_ESIM_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { Promise<string> } Promise used to return the public key ID information supported by the mobile phone in
   *     the Tag-Length-Value (TLV) format.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  function getSupportedPkids(slotId: int) : Promise<string>;

  /**
   * Information required for encryption.
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  export interface ContractRequestData {
    /**
     * Public key.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    publicKey: string;

    /**
     * Random number.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    nonce: string;

    /**
     * Selected public key ID.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    pkid: string;
  }

  /**
   * Establishes a single UICC access rule pursuant to the GlobalPlatform Secure Element Access Control specification.
   *
   * @interface AccessRule
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18
   */
  /**
   * Establishes a single UICC access rule pursuant to the GlobalPlatform Secure Element Access Control specification.
   *
   * @interface AccessRule
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @since 20 dynamic
   * @since 23 static
   */
  export interface AccessRule {
    /**
     * Certificate hash hexadecimal string.
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18
     */
    /**
     * Certificate hash hexadecimal string.
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @since 20 dynamic
     * @since 23 static
     */
    certificateHashHexStr: string;

    /**
     * The name of package.
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18
     */
    /**
     * The name of package.
     *
     * @type { string }
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @since 20 dynamic
     * @since 23 static
     */
    packageName: string;

    /**
     * The type of access.
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18
     */
    /**
     * The type of access.
     *
     * @type { int }
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @since 20 dynamic
     * @since 23 static
     */
    accessType: int;
  }

  /**
   * Defines a downloadable profile.
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @since 18 dynamic
   * @since 23 static
   */
  export interface DownloadableProfile {
    /**
     * Activation code. For a profile that does not require an activation code, the value may be left empty.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @since 18 dynamic
     * @since 23 static
     */
    activationCode: string;

    /**
     * Confirmation code.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @since 18 dynamic
     * @since 23 static
     */
    confirmationCode?: string;

    /**
     * Carrier name.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @since 18 dynamic
     * @since 23 static
     */
    carrierName?: string;

    /**
     * Access rule array.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @since 18 dynamic
     * @since 23 static
     */
    accessRules?: Array<AccessRule>;
  }

  /**
   * Obtains the metadata of the downloadable profile.
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export interface GetDownloadableProfileMetadataResult {
    /**
     * Downloadable profile.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    downloadableProfile: DownloadableProfile;

    /**
     * Profile policy rule type.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    pprType: int;

    /**
     * Whether the profile has a policy rule. The value **true** indicates that the profile has a policy rule, and the
     * value **false** indicates the opposite.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    pprFlag: boolean;

    /**
     * Profile ICCID.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    iccid: string;

    /**
     * Service provider name.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    serviceProviderName: string;

    /**
     * Profile name.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    profileName: string;

    /**
     * Profile class.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    profileClass: ProfileClass;

    /**
     * Solvable errors.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    solvableErrors: SolvableErrors;

    /**
     * Operation result code.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    responseResult: ResultCode;
  }

  /**
   * Obtains the list of default downloadable profiles.
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export interface GetDownloadableProfilesResult {
    /**
     * Promise used to return the operation result.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    responseResult: ResultCode;

    /**
     * Downloadable file array.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    downloadableProfiles: Array<DownloadableProfile>;
  }

  /**
   * Defines the profile download result.
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export interface DownloadProfileResult {
    /**
     * Operation result code.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    responseResult: ResultCode;

    /**
     * Solvable errors.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    solvableErrors: SolvableErrors;

    /**
     * Card ID.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    cardId: int;
  }

  /**
   * Obtains the profile information list.
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export interface GetEuiccProfileInfoListResult {
    /**
     * Promise used to return the operation result.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    responseResult: ResultCode;

    /**
     * Profile array.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    profiles: Array<EuiccProfile>;

    /**
     * Whether the eUICC is removable. The value **true** indicates that the eUICC is removable, and the value **false**
     * indicates the opposite.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    isRemovable: boolean;
  }

  /**
   * Obtains information about the eUICC chip or device.
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export interface OperatorId {
    /**
     * Mobile country code (MCC).
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    mcc: string;

    /**
     * Network code.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    mnc: string;

    /**
     * Group ID level 1.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    gid1: string;

    /**
     * Group ID level 2.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    gid2: string;
  }

  /**
   * Profile information.
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export interface EuiccProfile {
    /**
     * Profile ICCID.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    iccid: string;

    /**
     * Profile nickname.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    nickName: string;

    /**
     * Service provider name.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    serviceProviderName: string;

    /**
     * Profile name.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    profileName: string;

    /**
     * Profile status.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    state: ProfileState;

    /**
     * Profile class.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    profileClass: ProfileClass;

    /**
     * Operation ID of the profile.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    operatorId: OperatorId;

    /**
     * Profile policy rules.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    policyRules: PolicyRules;

    /**
     * Profile access rules.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    accessRules: Array<AccessRule>;
  }

  /**
   * Defines the eUICC information.
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export interface EuiccInfo {
    /**
     * OS version.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    osVersion: string;
  }

  /**
   * Defines the reset options.
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export enum ResetOption {
    /**
     * Deletion of all operational profiles.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    DELETE_OPERATIONAL_PROFILES = 1,

    /**
     * Deletion of the downloaded test profiles.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    DELETE_FIELD_LOADED_TEST_PROFILES = 1 << 1,

    /**
     * Resetting of the default SM-DP+ address.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESET_DEFAULT_SMDP_ADDRESS = 1 << 2
  }

  /**
   * Defines the OS upgrade status.
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export enum OsuStatus {
    /**
     * Upgrading.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    EUICC_UPGRADE_IN_PROGRESS = 1,

    /**
     * Upgrade failed.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    EUICC_UPGRADE_FAILED = 2,

    /**
     * Update succeeded.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    EUICC_UPGRADE_SUCCESSFUL = 3,

    /**
     * Already the latest version.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    EUICC_UPGRADE_ALREADY_LATEST = 4,

    /**
     * Update service unavailable.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    EUICC_UPGRADE_SERVICE_UNAVAILABLE = 5
  }

  /**
   * Enumerates the result codes.
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export enum ResultCode {
    /**
     * Solving of the solvable errors required.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_SOLVABLE_ERRORS = -2,

    /**
     * Disabling of the active profile required.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_MUST_DISABLE_PROFILE = -1,

    /**
     * Operation success.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_OK = 0,

    /**
     * Failed to obtain the EID.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_GET_EID_FAILED = 201,

    /**
     * Activation code changed upon user confirmation.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_ACTIVATION_CODE_CHANGED = 203,

    /**
     * Invalid activation code.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_ACTIVATION_CODE_INVALID = 204,

    /**
     * Invalid SM-DP+ server address.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_SMDP_ADDRESS_INVALID = 205,

    /**
     * Invalid eUICC information.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_EUICC_INFO_INVALID = 206,

    /**
     * TLS handshake failed.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_TLS_HANDSHAKE_FAILED = 207,

    /**
     * Certificate network connection error.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_CERTIFICATE_IO_ERROR = 208,

    /**
     * Invalid certificate address or response timeout.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_CERTIFICATE_RESPONSE_TIMEOUT = 209,

    /**
     * Authentication failed.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_AUTHENTICATION_FAILED = 210,

    /**
     * HTTP response failed.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_RESPONSE_HTTP_FAILED = 211,

    /**
     * Incorrect confirmation code.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_CONFIRMATION_CODE_INCORRECT = 212,

    /**
     * Maximum confirmation code retries reached.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_EXCEEDED_CONFIRMATION_CODE_TRY_LIMIT = 213,

    /**
     * No downloadable profile available on the server.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_NO_PROFILE_ON_SERVER = 214,

    /**
     * Invalid transaction ID.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_TRANSACTION_ID_INVALID = 215,

    /**
     * Invalid server address.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_SERVER_ADDRESS_INVALID = 216,

    /**
     * Failed to obtain the BPP.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_GET_BOUND_PROFILE_PACKAGE_FAILED = 217,

    /**
     * Download cancelled by the user.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_USER_CANCEL_DOWNLOAD = 218,

    /**
     * Carrier server unavailable.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_SERVER_UNAVAILABLE = 220,

    /**
     * File deletion not allowed by the PPR rule.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_PROFILE_NON_DELETE = 223,

    /**
     * Incorrect SMDP server address.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_SMDP_ADDRESS_INCORRECT = 226,

    /**
     * Failed to parse the server authentication response.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_ANALYZE_AUTHENTICATION_SERVER_RESPONSE_FAILED = 228,

    /**
     * Failed to parse the client authentication response.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_ANALYZE_AUTHENTICATION_CLIENT_RESPONSE_FAILED = 229,

    /**
     * Failed to parse the client authentication response because the matching ID was rejected.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_ANALYZE_AUTHENTICATION_CLIENT_MATCHING_ID_REFUSED = 231,

    /**
     * Authentication stopped due to incorrect profile type.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_PROFILE_TYPE_ERROR_AUTHENTICATION_STOPPED = 233,

    /**
     * Rejection cause code of the carrier server, which is 3.8.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_CARRIER_SERVER_REFUSED_ERRORS = 249,

    /**
     * Invalid certificate.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_CERTIFICATE_INVALID = 251,

    /**
     * Failed to install the profile due to insufficient memory.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_OUT_OF_MEMORY = 263,

    /**
     * Operation not allowed by the PPR rule.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_PPR_FORBIDDEN = 268,

    /**
     * No configuration file for deletion.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_NOTHING_TO_DELETE = 270,

    /**
     * PPR rule mismatch.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_PPR_NOT_MATCH = 276,

    /**
     * Session in progress.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_CAT_BUSY = 283,

    /**
     * eSIM profile in use or invalid.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_PROFILE_EID_INVALID = 284,

    /**
     * Download timeout.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_DOWNLOAD_TIMEOUT = 287,

    /**
     * Other errors defined in SGP.22.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    RESULT_SGP_22_OTHER = 400
  }

  /**
   * Reason for canceling the session.
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export enum CancelReason {
    /**
     * The user has rejected the download.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    CANCEL_REASON_END_USER_REJECTION = 0,

    /**
     * The download has been delayed. You can restart it later.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    CANCEL_REASON_POSTPONED = 1,

    /**
     * The download has timed out. You can restart it later.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    CANCEL_REASON_TIMEOUT = 2,

    /**
     * The installation cannot be performed because the authorization table or other installed profile on the eUICC does
     * not allow its policy rules.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    CANCEL_REASON_PPR_NOT_ALLOWED = 3
  }

  /**
   * Enumerates the profile states.
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export enum ProfileState {
    /**
     * Profile status unspecified.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    PROFILE_STATE_UNSPECIFIED = -1,

    /**
     * Profile disabled.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    PROFILE_STATE_DISABLED = 0,

    /**
     * Profile enabled.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    PROFILE_STATE_ENABLED = 1
  }

  /**
   * Enumerates the profile classes.
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export enum ProfileClass {
    /**
     * Profile class unspecified.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    PROFILE_CLASS_UNSPECIFIED = -1,

    /**
     * Test profile.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    PROFILE_CLASS_TEST = 0,

    /**
     * Profile preloaded to the eUICC.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    PROFILE_CLASS_PROVISIONING = 1,

    /**
     * Profile that can be preloaded or downloaded.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    PROFILE_CLASS_OPERATIONAL = 2
  }

  /**
   * Enumerates the profile policy rules.
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export enum PolicyRules {
    /**
     * A profile cannot be disabled after being enabled.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    POLICY_RULE_DISABLE_NOT_ALLOWED = 1,

    /**
     * The profile cannot be deleted.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    POLICY_RULE_DELETE_NOT_ALLOWED = 1 << 1,

    /**
     * A profile must be deleted immediately after being enabled.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    POLICY_RULE_DISABLE_AND_DELETE = 1 << 2
  }

  /**
   * Enumerates the solvable errors.
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export enum SolvableErrors {
    /**
     * The user needs to enter the confirmation code during the download.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    SOLVABLE_ERROR_NEED_CONFIRMATION_CODE = 1 << 0,

    /**
     * The download process requires user consent to allow the profile policy rules.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    SOLVABLE_ERROR_NEED_POLICY_RULE = 1 << 1
  }

  /**
   * Defines the download configuration.
   *
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  export interface DownloadConfiguration {
    /**
     * Whether to enable the profile after successful download. The value **true** means to enable the default profile,
     * and the value **false** means the opposite.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    switchAfterDownload: boolean;

    /**
     * Whether to forcibly deactivate the current profile during profile switching.
     *
     * **true**: The current profile is forcibly deactivated, and profile switching can be directly performed.
     *
     * **false**: An error is returned, and profile switching can be performed only after the user authorization is
     * obtained.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    forceDisableProfile: boolean;

    /**
     * Whether user authorization is obtained to implement the profile policy rule. The value **true** indicates that
     * user authorization is obtained, and the value **false** indicates the opposite.
     *
     * @syscap SystemCapability.Telephony.CoreService.Esim
     * @systemapi Hide this for inner system use.
     * @since 18 dynamic
     * @since 23 static
     */
    isPprAllowed: boolean;
  }

  /**
   * This API is used to obtain the remaining storage space of the eUICC hardware. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.GET_TELEPHONY_ESIM_STATE
   * @returns { Promise<int> } Promise used to return the remaining storage space of the eUICC hardware, in KB.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Nonsystem applications use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3120001 - Service connection failed.
   * @throws { BusinessError } 3120002 - System internal error.
   * @syscap SystemCapability.Telephony.CoreService.Esim
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  function getEsimFreeStorage(): Promise<int>;
}

export default eSIM;