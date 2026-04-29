/*
 * Copyright (C) 2026 Huawei Device Co., Ltd.
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
 * @kit CoreFileKit
 */

import { AsyncCallback, Callback } from './@ohos.base';

/**
 * Provides encryptedVolumeManager statistics APIs
 *
 * @syscap SystemCapability.FileManagement.StorageService.Volume
 * @systemapi
 * @stagemodelonly
 * @since 24 dynamic&static
 */
declare namespace encryptedVolumeManager {
  /**
   * Encrypt.
   *
   * @permission ohos.permission.ENCRYPT_VOLUME_MANAGER
   * @param { string } volumeId - The id of the volume
   * @param { string } passWord - Encrypt the password of the volume device
   * @returns { Promise<void> } return Promise
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13600010 - Invalid params
   * @throws { BusinessError } 13600019 - Check the password length and ensure it includes at least two of
   *      the following:uppercase letters, lowercase letters, numbers, and special characters.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function encrypt(volumeId: string, passWord: string): Promise<void>;

  /**
   * Get the encrypting progress.
   *
   * @permission ohos.permission.ENCRYPT_VOLUME_MANAGER
   * @param { string } volumeId - The id of the volume
   * @returns { Promise<int> } return Promise
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13600010 - Invalid params
   * @throws { BusinessError } 13600021 - Volume is not encrypted.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function getCryptProgressById(volumeId: string): Promise<int>;

   /**
    * Get the encrypting uuid.
    *
    * @permission ohos.permission.ENCRYPT_VOLUME_MANAGER
    * @param { string } volumeId - The id of the volume
    * @returns { Promise<string> } return Promise
    * @throws { BusinessError } 201 - Permission verification failed.
    * @throws { BusinessError } 202 - The caller is not a system application.
    * @throws { BusinessError } 13600001 - IPC error.
    * @throws { BusinessError } 13600002 - Not supported filesystem.
    * @throws { BusinessError } 13600005 - Incorrect volume state.
    * @throws { BusinessError } 13600008 - No such object.
    * @throws { BusinessError } 13600010 - Invalid params
    * @throws { BusinessError } 13600021 - Volume is not encrypted.
    * @syscap SystemCapability.FileManagement.StorageService.Volume
    * @systemapi
    * @stagemodelonly
    * @since 24 dynamic&static
    */
   function getCryptUuidById(volumeId: string): Promise<string>;

  /**
   * Back encrypt.
   *
   * @permission ohos.permission.ENCRYPT_VOLUME_MANAGER
   * @param { string } volumeId - The id of the volume
   * @param { string } passWord - Encrypt the password of the volume device
   * @param { string } recoverKey - The backup secret key of the encrypted volume device
   * @returns { Promise<void> } return Promise
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13600010 - Invalid params
   * @throws { BusinessError } 13600019 - Check the password length and ensure it includes at least two
   *        of the following: uppercase letters, lowercase letters, numbers, and special characters.
   * @throws { BusinessError } 13600020 - encrypt key format invalid
   * @throws { BusinessError } 13600021 - Volume is not encrypted.
   * @throws { BusinessError } 13600022 - Incorrect password.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function bindRecoverKeyToPasswd(volumeId: string, passWord: string, recoverKey: string): Promise<void>;

  /**
   * Updating the Password of an Encrypted Volume Device.
   *
   * @permission ohos.permission.ENCRYPT_VOLUME_MANAGER
   * @param { string } volumeId - The id of the volume
   * @param { string } passWord - Encrypt the password of the volume device
   * @param { string } newPassWord - Encrypt the new password of the volume device
   * @returns { Promise<void> } return Promise
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13600010 - Invalid params
   * @throws { BusinessError } 13600019 - Check the password length and ensure it includes at least two
   *        of the following: uppercase letters, lowercase letters, numbers, and special characters.
   * @throws { BusinessError } 13600021 - Volume is not encrypted.
   * @throws { BusinessError } 13600022 - Incorrect password.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function updateCryptPasswd(volumeId: string, passWord: string, newPassWord: string): Promise<void>;

  /**
   * Reset the Password of an Encrypted Volume Device By File.
   *
   * @permission ohos.permission.ENCRYPT_VOLUME_MANAGER
   * @param { string } volumeId - The id of the volume
   * @param { string } recoverKey - File path of the backup key of the encrypted volume device
   * @param { string } newPassWord - Encrypt the new password of the volume device
   * @returns { Promise<void> } return Promise
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13600010 - Invalid params
   * @throws { BusinessError } 13600019 - Check the password length and ensure it includes at least two
   *        of the following: uppercase letters, lowercase letters, numbers, and special characters.
   * @throws { BusinessError } 13600021 - Volume is not encrypted.
   * @throws { BusinessError } 13600020 - Invalid encryption key format.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function resetCryptPasswd(volumeId: string, recoverKey: string, newPassWord: string): Promise<void>;

   /**
    * Verify Encrypted Volume Device password.
    *
    * @permission ohos.permission.ENCRYPT_VOLUME_MANAGER
    * @param { string } volumeId - The id of the volume
    * @param { string } passWord - Encrypt the password of the volume device
    * @returns { Promise<void> } return Promise
    * @throws { BusinessError } 201 - Permission verification failed.
    * @throws { BusinessError } 202 - The caller is not a system application.
    * @throws { BusinessError } 13600001 - IPC error.
    * @throws { BusinessError } 13600002 - Not supported filesystem.
    * @throws { BusinessError } 13600005 - Incorrect volume state.
    * @throws { BusinessError } 13600008 - No such object.
    * @throws { BusinessError } 13600010 - Invalid params
    * @throws { BusinessError } 13600021 - Volume is not encrypted.
    * @throws { BusinessError } 13600022 - Incorrect password.
    * @syscap SystemCapability.FileManagement.StorageService.Volume
    * @systemapi
    * @stagemodelonly
    * @since 24 dynamic&static
    */
   function verifyCryptPasswd(volumeId: string, passWord: string): Promise<void>;

  /**
   * Unlock Encrypted Volume Device.
   *
   * @permission ohos.permission.ENCRYPT_VOLUME_MANAGER
   * @param { string } volumeId - The id of the volume
   * @param { string } passWord - Encrypt the password of the volume device
   * @returns { Promise<void> } return Promise
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13600010 - Invalid params
   * @throws { BusinessError } 13600021 - Volume is not encrypted.
   * @throws { BusinessError } 13600022 - Incorrect password.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function unlock(volumeId: string, passWord: string): Promise<void>;

  /**
   * Decrypt.
   *
   * @permission ohos.permission.ENCRYPT_VOLUME_MANAGER
   * @param { string } volumeId - The id of the volume
   * @param { string } passWord - Encrypt the password of the volume device
   * @returns { Promise<void> } return Promise
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13600010 - Invalid params
   * @throws { BusinessError } 13600021 - Volume is not encrypted.
   * @throws { BusinessError } 13600022 - Incorrect password.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function decrypt(volumeId: string, passWord: string): Promise<void>;
}

export default encryptedVolumeManager;