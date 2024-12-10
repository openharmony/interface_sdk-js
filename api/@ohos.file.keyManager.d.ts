/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 
/**
 * Provides filesystem KeyManager APIs.
 *
 * @namespace keyManager
 * @syscap SystemCapability.FileManagement.StorageService.Encryption
 * @since 15
 */
declare namespace keyManager {
    /**
     * Initiate the unintallation of el3, el4, and el5 level key for the specified user
     *
     * @permission ohos.permission.STORAGE_MANAGER_CRYPT
     * @param { number } userId
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Mandatory
  parameters are left unspecified;
     * @throws { BusinessError } 13600001 - IPC error.
     * @syscap SystemCapability.FileManagement.StorageService.Encryption
     * @systemapi
     * @since 15
     */
    function inactiveUserKeySync(userId: number):void;
  }
  
  export default keyManager;