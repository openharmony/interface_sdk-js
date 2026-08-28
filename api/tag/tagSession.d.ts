/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
 * @file Standard NFC Tag Session
 * @kit ConnectivityKit
 */

import tag from '../@ohos.nfc.tag';
import { AsyncCallback } from '../@ohos.base';

/**
 * The **tagSession** module provides common APIs for establishing connections and transferring data.
 *
 * > **NOTE**
 * >
 * > If an error is reported while importing the tag module editor, the capabilities of a specific device model may
 * > exceed the capability set defined for the default device. To use these capabilities, configure a custom SysCap by
 * > following instructions in
 * > [SystemCapability](https://developer.huawei.com/consumer/en/doc/harmonyos-references/syscap).
 *
 * @syscap SystemCapability.Communication.NFC.Tag
 * @atomicservice [since 12]
 * @since 7 dynamic
 * @since 23 static
 */
export interface TagSession {
  /**
   * Obtains the **tagInfo** object provided by the NFC service when the tag is dispatched.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 7 and deprecated since API version 9. Use
   * > [tag.getTagInfo]{@link @ohos.nfc.tag:tag.getTagInfo} instead.
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { tag.TagInfo } **Taginfo** object obtained.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.nfc.tag/tag#getTagInfo
   */
  getTagInfo(): tag.TagInfo;

  /**
   * Connects to this tag. Call this API to set up a connection before reading data from or writing data to a tag.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 7 and deprecated since API version 9. Use
   * > [tagSession.connect]{@link TagSession.connect} instead.
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead tagSession.TagSession#connect
   */
  connectTag(): boolean;

  /**
   * Connects to this tag. Call this API to set up a connection before reading data from or writing data to a tag.
   *
   * @permission ohos.permission.NFC_TAG
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  connect(): void;

  /**
   * Resets the connection to this tag.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 7 and deprecated since API version 9. Use
   * > [tagSession.resetConnection]{@link TagSession.resetConnection} instead.
   *
   * @permission ohos.permission.NFC_TAG
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead tagSession.TagSession#resetConnection
   */
  reset(): void;

  /**
   * Resets the connection to this tag.
   *
   * @permission ohos.permission.NFC_TAG
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  resetConnection(): void;

  /**
   * Checks whether the tag is connected.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 7 and deprecated since API version 9. Use
   * > [tagSession.isConnected]{@link TagSession.isConnected} instead.
   *
   * @returns { boolean } Returns **true** if the tag is connected; returns **false** otherwise.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead tagSession.TagSession#isConnected
   */
  isTagConnected(): boolean;

  /**
   * Checks whether the tag is connected. If you receive a message indicating that the tag has not been connected, call
   * [tagSession.connect]{@link TagSession.connect} to connect the tag.
   *
   * @returns { boolean } Returns **true** if the tag is connected; returns **false** otherwise.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  isConnected(): boolean;

  /**
   * Sets the maximum time allowed for sending data to this tag, in ms.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 7 and deprecated since API version 9. Use
   * > [tagSession.setTimeout]{@link TagSession.setTimeout} instead.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { number } timeout - Timeout period to set, in milliseconds. The value cannot be a negative number.
   * @returns { boolean } Returns **true** if the timeout period is set successfully; returns **false** otherwise.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead tagSession.TagSession#setTimeout
   */
  setSendDataTimeout(timeout: number): boolean;

  /**
   * Sets the maximum time allowed for sending data to this tag, in ms.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } timeout - Timeout period to set, in milliseconds. The value cannot be a negative number.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  setTimeout(timeout: int): void;

  /**
   * Obtains the timeout period for sending data to this tag, in milliseconds.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 7 and deprecated since API version 9. Use
   * > [tagSession.getTimeout]{@link TagSession.getTimeout} instead.
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { number } Timeout period obtained, in milliseconds. The value cannot be a negative number.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead tagSession.TagSession#getTimeout
   */
  getSendDataTimeout(): number;

  /**
   * Obtains the timeout period for sending data to this tag, in milliseconds.
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { int } Timeout period obtained, in milliseconds. The value cannot be a negative number.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  getTimeout(): int;

  /**
   * Sends data to the tag. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 7 and deprecated since API version 9. Use
   * > [tagSession.transmit]{@link TagSession.transmit(data: int[])} instead.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { number[] } data - Data to send. The data consists of hexadecimal numbers ranging from **0x00** to
   *     **0xFF**.
   * @returns { Promise<number[]> } Promise used to return the response from the tag. The response consists of
   *     hexadecimal numbers ranging from **0x00** to **0xFF**.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead tagSession.TagSession#transmit
   */
  sendData(data: number[]): Promise<number[]>;

  /**
   * Sends data to the tag. This API uses an asynchronous callback to return the result.
   *
   * > **NOTE**
   * >
   * > This parameter is supported since API version 7 and deprecated since API version 9. Use
   * > [tagSession.transmit]{@link TagSession.transmit(data: int[], callback: AsyncCallback<int[]>)} instead.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { number[] } data - Data to send. The data consists of hexadecimal numbers ranging from **0x00** to
   *     **0xFF**.
   * @param { AsyncCallback<number[]> } callback - Callback used to return the response from the tag. The response
   *     consists of hexadecimal numbers ranging from **0x00** to **0xFF**.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead tagSession.TagSession#transmit
   */
  sendData(data: number[], callback: AsyncCallback<number[]>): void;

  /**
   * Sends data to the tag. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int[] } data - Data to send. The data consists of hexadecimal numbers ranging from **0x00** to **0xFF**.
   * @returns { Promise<int[]> } Promise used to return the response from the tag. The response consists of hexadecimal
   *     numbers ranging from **0x00** to **0xFF**.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  transmit(data: int[]): Promise<int[]>;

  /**
   * Sends data to the tag. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int[] } data - Data to send. The data consists of hexadecimal numbers ranging from **0x00** to **0xFF**.
   * @param { AsyncCallback<int[]> } callback - Callback used to return the response from the tag. The response consists
   *     of hexadecimal numbers ranging from **0x00** to **0xFF**.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @throws { BusinessError } 3100204 - The tag I/O operation failed. [since 12]
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  transmit(data: int[], callback: AsyncCallback<int[]>): void;

  /**
   * Obtains the maximum length of the data that can be sent to this tag.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 7 and deprecated since API version 9. Use
   * > [tagSession.getMaxTransmitSize]{@link TagSession.getMaxTransmitSize} instead.
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { number } Maximum data length obtained. The value cannot be a negative number.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead tagSession.TagSession#getMaxTransmitSize
   */
  getMaxSendLength(): number;

  /**
   * Obtains the maximum length of the data that can be sent to this tag.
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { int } Maximum data length obtained. The value cannot be a negative number.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100201 - The tag running state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  getMaxTransmitSize(): int;
}