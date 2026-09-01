/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
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
 * @file Active Tags
 * @kit ConnectivityKit
 */

import type { AsyncCallback, BusinessError, Callback } from './@ohos.base';

/**
 * The **connectedTag** module provides APIs for using active tags. You can use the APIs to initialize the active tag
 * chip and read and write active tags.
 *
 * @syscap SystemCapability.Communication.ConnectedTag
 * @since 8 dynamic
 */
declare namespace connectedTag {
  /**
   * Initializes the active tag chip.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. Use
   * > [initialize]{@link connectedTag.initialize} instead.
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { boolean } **true**: The initialization is successful.
   *     <br>**false**: The initialization fails.
   * @syscap SystemCapability.Communication.ConnectedTag
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.connectedTag/connectedTag#initialize
   */
  function init(): boolean;

  /**
   * Initializes the active tag chip.
   *
   * @permission ohos.permission.NFC_TAG
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3200101 - Connected NFC tag running state is abnormal in service.
   * @syscap SystemCapability.Communication.ConnectedTag
   * @since 9 dynamic
   */
  function initialize(): void;

  /**
   * Uninitializes the active tag resources.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. Use
   * > [uninitialize]{@link connectedTag.uninitialize} instead.
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { boolean } **true**: The uninstallation is successful.
   *     <br>**false**: The uninstallation fails.
   * @syscap SystemCapability.Communication.ConnectedTag
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.connectedTag/connectedTag#uninitialize
   */
  function uninit(): boolean;

  /**
   * Uninitializes the active tag resources.
   *
   * @permission ohos.permission.NFC_TAG
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3200101 - Connected NFC tag running state is abnormal in service.
   * @syscap SystemCapability.Communication.ConnectedTag
   * @since 9 dynamic
   */
  function uninitialize(): void;

  /**
   * Reads the content of this active tag. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. Use
   * > [uninitialize]{@link connectedTag.uninitialize} instead.
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { Promise<string> } Promise used to return the content of the active tag.
   * @syscap SystemCapability.Communication.ConnectedTag
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.connectedTag/connectedTag#read
   */
  function readNdefTag(): Promise<string>;

  /**
   * Reads the content of this active tag. This API uses an asynchronous callback to return the result.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. Use
   * > [uninitialize]{@link connectedTag.uninitialize} instead.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { AsyncCallback<string> } callback - Callback used to return the active tag content obtained.
   * @syscap SystemCapability.Communication.ConnectedTag
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.connectedTag/connectedTag#read
   */
  function readNdefTag(callback: AsyncCallback<string>): void;

  /**
   * Reads the content of this active tag. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { Promise<number[]> } Promise used to return the content of the active tag.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3200101 - Connected NFC tag running state is abnormal in service.
   * @syscap SystemCapability.Communication.ConnectedTag
   * @since 9 dynamic
   */
  function read(): Promise<number[]>;

  /**
   * Reads the content of this active tag. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { AsyncCallback<number[]> } callback - Callback used to return the active tag content obtained.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3200101 - Connected NFC tag running state is abnormal in service.
   * @syscap SystemCapability.Communication.ConnectedTag
   * @since 9 dynamic
   */
  function read(callback: AsyncCallback<number[]>): void;

  /**
   * Writes data to this active tag. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. Use
   * > [connectedTag.write]{@link connectedTag.write} instead.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { string } data - Data to be written to the active tag. The maximum length is 1024 bytes.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Communication.ConnectedTag
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.connectedTag/connectedTag#write
   */
  function writeNdefTag(data: string): Promise<void>;

  /**
   * Writes data to this active tag. This API uses an asynchronous callback to return the result.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 9. Use
   * > [connectedTag.write]{@link connectedTag.write} instead.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { string } data - Data to be written to the active tag. The maximum length is 1024 bytes.
   * @param { AsyncCallback<void> } callback - Callback used to return the active tag content obtained.
   * @syscap SystemCapability.Communication.ConnectedTag
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.connectedTag/connectedTag#write
   */
  function writeNdefTag(data: string, callback: AsyncCallback<void>): void;

  /**
   * Writes data to this active tag. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { number[] } data - Data to be written to the active tag. The value is a hexadecimal number ranging from 0x00
   *     to 0xFF.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3200101 - Connected NFC tag running state is abnormal in service.
   * @syscap SystemCapability.Communication.ConnectedTag
   * @since 9 dynamic
   */
  function write(data: number[]): Promise<void>;

  /**
   * Writes data to this active tag. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { number[] } data - Data to be written to the active tag. The value is a hexadecimal number ranging from 0x00
   *     to 0xFF.
   * @param { AsyncCallback<void> } callback - Callback used to return the active tag content obtained.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3200101 - Connected NFC tag running state is abnormal in service.
   * @syscap SystemCapability.Communication.ConnectedTag
   * @since 9 dynamic
   */
  function write(data: number[], callback: AsyncCallback<void>): void;

  /**
   * Registers the NFC field strength state events.
   *
   * @permission ohos.permission.NFC_TAG
   * @param {'notify'} type - Event type. This parameter has a fixed value of **notify**.
   * @param { Callback<number> } callback - Callback used to return the [NfcRfType]{@link connectedTag.NfcRfType}.
   * @syscap SystemCapability.Communication.ConnectedTag
   * @since 8 dynamic
   */
  function on(type: "notify", callback: Callback<number>): void;

  /**
   * Unregisters the NFC field strength state events.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { 'notify' } type - Event type. This parameter has a fixed value of **notify**.
   * @param { Callback<number> } [callback] - Callback used to return the field strength state. If this parameter is not
   *     specified, all callbacks associated with the specified event will be unregistered.
   * @syscap SystemCapability.Communication.ConnectedTag
   * @since 8 dynamic
   */
  function off(type: "notify", callback?:Callback<number>): void;

  /**
   * Enumerates the NFC field strength states.
   *
   * @syscap SystemCapability.Communication.ConnectedTag
   * @since 8 dynamic
   */
  enum NfcRfType {
    /**
     * NFC exit.
     *
     * @syscap SystemCapability.Communication.ConnectedTag
     * @since 8 dynamic
     */
    NFC_RF_LEAVE = 0,

    /**
     * NFC entry.
     *
     * @syscap SystemCapability.Communication.ConnectedTag
     * @since 8 dynamic
     */
    NFC_RF_ENTER = 1
  }
}

export default connectedTag;