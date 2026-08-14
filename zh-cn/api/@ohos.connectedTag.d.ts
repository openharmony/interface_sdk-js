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
 * @file 有源标签
 * @kit ConnectivityKit
 */

import type { AsyncCallback, BusinessError, Callback } from './@ohos.base';

/**
 * 本模块提供有源标签的使用，包括初始化有源标签芯片、读取有源标签内容、写入内容到有源标签等。
 *
 * @syscap SystemCapability.Communication.ConnectedTag
 * @since 8 dynamic
 */
declare namespace connectedTag {
  /**
   * 初始化有源标签芯片。
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { boolean } true：初始化成功。 
   *     <br>false：初始化失败。
   * @syscap SystemCapability.Communication.ConnectedTag
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.connectedTag/connectedTag#initialize
   */
  function init(): boolean;

  /**
   * 初始化有源标签芯片。对有源标签进行读写操作前需调用本接口初始化一次，若想再次初始化需先调用[uninitialize]{@link connectedTag.uninitialize}。
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
   * 卸载有源标签芯片资源。
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { boolean } true：卸载操作成功。 
   *     <br>false：卸载操作失败。
   * @syscap SystemCapability.Communication.ConnectedTag
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.connectedTag/connectedTag#uninitialize
   */
  function uninit(): boolean;

  /**
   * 卸载有源标签芯片资源。
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
   * 读取有源标签内容。使用Promise异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { Promise<string> } Promise对象，返回读取有源标签内容的列表。
   * @syscap SystemCapability.Communication.ConnectedTag
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.connectedTag/connectedTag#read
   */
  function readNdefTag(): Promise<string>;

  /**
   * 读取有源标签内容，使用AsyncCallback方式作为异步方法。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { AsyncCallback<string> } callback - 回调函数。当读取成功时data为读取到有源标签的内容；否则为err错误对象。
   * @syscap SystemCapability.Communication.ConnectedTag
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.connectedTag/connectedTag#read
   */
  function readNdefTag(callback: AsyncCallback<string>): void;

  /**
   * 读取有源标签内容。使用Promise异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @returns { Promise<number[]> } Promise对象，返回读取有源标签内容的列表。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3200101 - Connected NFC tag running state is abnormal in service.
   * @syscap SystemCapability.Communication.ConnectedTag
   * @since 9 dynamic
   */
  function read(): Promise<number[]>;

  /**
   * 读取有源标签内容，使用AsyncCallback方式作为异步方法。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { AsyncCallback<number[]> } callback - 回调函数。当读取成功时data为读取到有源标签的内容；否则为err错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3200101 - Connected NFC tag running state is abnormal in service.
   * @syscap SystemCapability.Communication.ConnectedTag
   * @since 9 dynamic
   */
  function read(callback: AsyncCallback<number[]>): void;

  /**
   * 写入内容到有源标签。使用Promise异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { string } data - 有源标签内容, 最大长度为1024个字节。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @syscap SystemCapability.Communication.ConnectedTag
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.connectedTag/connectedTag#write
   */
  function writeNdefTag(data: string): Promise<void>;

  /**
   * 写入内容到有源标签，使用AsyncCallback方式作为异步方法。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { string } data - 有源标签内容, 最大长度为1024个字节。
   * @param { AsyncCallback<void> } callback - 回调函数。当写入标签成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Communication.ConnectedTag
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.connectedTag/connectedTag#write
   */
  function writeNdefTag(data: string, callback: AsyncCallback<void>): void;

  /**
   * 写入内容到有源标签。使用Promise异步回调。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { number[] } data - 有源标签内容, 由十六进制数字组成。范围：0x00至0xFF。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 写入内容到有源标签，使用AsyncCallback方式作为异步方法。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { number[] } data - 有源标签内容, 由十六进制数字组成。范围：0x00至0xFF。
   * @param { AsyncCallback<void> } callback - 回调函数。当写入标签成功，err为undefined，否则为错误对象。
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
   * 注册NFC场强状态事件。
   *
   * @permission ohos.permission.NFC_TAG
   * @param {'notify'} type - 固定填"notify"字符串。
   * @param { Callback<number> } callback - 回调函数。注册成功的返回值参见[NfcRfType]{@link connectedTag.NfcRfType}。
   * @syscap SystemCapability.Communication.ConnectedTag
   * @since 8 dynamic
   */
  function on(type: "notify", callback: Callback<number>): void;

  /**
   * 取消NFC场强状态事件的注册。
   *
   * @permission ohos.permission.NFC_TAG
   * @param { 'notify' } type - 固定填"notify"字符串。
   * @param { Callback<number> } [callback] - 状态改变回调函数。如果callback不填，将“去注册”该事件关联的所有回调函数。
   * @syscap SystemCapability.Communication.ConnectedTag
   * @since 8 dynamic
   */
  function off(type: "notify", callback?:Callback<number>): void;

  /**
   * 表示NFC场强状态的枚举。
   *
   * @syscap SystemCapability.Communication.ConnectedTag
   * @since 8 dynamic
   */
  enum NfcRfType {
    /**
     * NFC离场事件。
     *
     * @syscap SystemCapability.Communication.ConnectedTag
     * @since 8 dynamic
     */
    NFC_RF_LEAVE = 0,

    /**
     * NFC进场事件。
     *
     * @syscap SystemCapability.Communication.ConnectedTag
     * @since 8 dynamic
     */
    NFC_RF_ENTER = 1
  }
}

export default connectedTag;