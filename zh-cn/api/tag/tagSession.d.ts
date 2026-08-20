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
 * @file 标准NFC-Tag TagSession
 * @kit ConnectivityKit
 */

import tag from '../@ohos.nfc.tag';
import { AsyncCallback } from '../@ohos.base';

/**
 * 本模块是对NFC TagSession的使用说明。
 *
 * > **注意：**
 * >
 * > 导入tag模块编辑器报错，在某个具体设备型号上能力可能超出工程默认设备定义的能力集范围，如需要使用此部分能力需额外配置自定义syscap，参考
 * > [syscap开发指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/syscap)。
 *
 * @syscap SystemCapability.Communication.NFC.Tag
 * @atomicservice [since 12]
 * @since 7 dynamic
 * @since 23 static
 */
export interface TagSession {
  /**
   * 获取该Tag被分发时，NFC服务所提供的Tag数据对象。
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { tag.TagInfo } NFC服务所提供的Tag数据对象。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.nfc.tag/tag#getTagInfo
   */
  getTagInfo(): tag.TagInfo;

  /**
   * 和标签建立连接。在从标签读取数据或将数据写入标签之前，必须调用此方法。
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { boolean } 连接建立成功返回true，失败返回false。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead tagSession.TagSession#connect
   */
  connectTag(): boolean;

  /**
   * 和标签建立连接。在从标签读取数据或将数据写入标签之前，必须调用此方法。
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
   * 重置与标签的连接。
   *
   * @permission ohos.permission.NFC_TAG
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead tagSession.TagSession#resetConnection
   */
  reset(): void;

  /**
   * 重置与标签的连接。
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
   * 检查是否已与标签建立连接。
   *
   * @returns { boolean } 已建立连接返回 true，未建立连接返回false。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead tagSession.TagSession#isConnected
   */
  isTagConnected(): boolean;

  /**
   * 检查是否已与标签建立连接。如果返回未连接，则需要先调用[tagSession.connect]{@link TagSession.connect}建立连接。
   *
   * @returns { boolean } 已建立连接返回 true，未建立连接返回false。
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.NFC.Tag
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  isConnected(): boolean;

  /**
   * 设置发送数据到Tag的等待超时时间，单位是毫秒。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { number } timeout - 超时时间，单位毫秒，非负值。
   * @returns { boolean } 设置超时时间成功返回true，设置失败返回false。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead tagSession.TagSession#setTimeout
   */
  setSendDataTimeout(timeout: number): boolean;

  /**
   * 设置发送数据到Tag的等待超时时间，单位是毫秒。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int } timeout - 超时时间，单位毫秒，非负值。
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
   * 查询发送数据到Tag的等待超时时间，单位是毫秒。
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { number } 发送数据到Tag的等待超时时间，单位是毫秒，非负数。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead tagSession.TagSession#getTimeout
   */
  getSendDataTimeout(): number;

  /**
   * 查询发送数据到Tag的等待超时时间，单位是毫秒。
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { int } 发送数据到Tag的等待超时时间，单位是毫秒，非负数。
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
   * 发送指令到Tag上。使用Promise异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { number[] } data - 要发送的指令。每个number十六进制表示，范围是0x00~0xFF。
   * @returns { Promise<number[]> } Promise对象，返回对端Tag对指令的响应数据，每个number十六进制表示，范围是0x00~0xFF。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead tagSession.TagSession#transmit
   */
  sendData(data: number[]): Promise<number[]>;

  /**
   * 发送指令到Tag上。使用callback异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { number[] } data - 要发送的指令。每个number十六进制表示，范围是0x00~0xFF。
   * @param { AsyncCallback<number[]> } callback - 回调函数，返回响应数据。每个number十六进制表示，范围是0x00~0xFF。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead tagSession.TagSession#transmit
   */
  sendData(data: number[], callback: AsyncCallback<number[]>): void;

  /**
   * 发送指令到Tag上。使用Promise异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int[] } data - 要发送的指令。每个number十六进制表示，范围是0x00~0xFF。
   * @returns { Promise<int[]> } Promise对象，返回对端Tag对指令的响应数据，每个number十六进制表示，范围是0x00~0xFF。
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
   * 发送指令到Tag上。使用callback异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { int[] } data - 要发送的指令。每个number十六进制表示，范围是0x00~0xFF。
   * @param { AsyncCallback<int[]> } callback - 回调函数，返回响应数据。每个number十六进制表示，范围是0x00~0xFF。
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
   * 查询可以发送到标签的最大数据长度。
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { number } 可以发送到标签的最大数据长度，非负数。
   * @syscap SystemCapability.Communication.NFC.Tag
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead tagSession.TagSession#getMaxTransmitSize
   */
  getMaxSendLength(): number;

  /**
   * 查询可以发送到标签的最大数据长度。
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { int } 可以发送到标签的最大数据长度，非负数。
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