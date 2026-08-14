/*
 * Copyright (C) 2021-2023 Huawei Device Co., Ltd.
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
 * @file 短信服务
 * @kit TelephonyKit
 */

import type { AsyncCallback } from './@ohos.base';
import type Context from './application/BaseContext';

/**
 * 短信服务提供了管理短信的一些基础能力，包括创建、发送短信，获取发送短信的默认SIM卡槽ID、检查当前设备是否具备短信发送和接收能力等。
 *
 * @syscap SystemCapability.Telephony.SmsMms
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace sms {
  /**
   * 将长短信拆分为多个片段。使用callback异步回调。
   *
   * @permission ohos.permission.SEND_MESSAGES
   * @param { string } content - 指示短消息内容，不能为null。
   * @param { AsyncCallback<Array<string>> } callback - 返回可合并为完整SMS的拆分段列表的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function splitMessage(content: string, callback: AsyncCallback<Array<string>>): void;

  /**
   * 将长短信拆分为多个片段。使用Promise异步回调。
   *
   * @permission ohos.permission.SEND_MESSAGES
   * @param { string } content - 指示短消息内容，不能为null。
   * @returns { Promise<Array<string>> } 以Promise形式返回多个片段的的结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function splitMessage(content: string): Promise<Array<string>>;

  /**
   * 根据协议数据单元(PDU)和指定的短信协议创建短信实例。使用callback异步回调。
   *
   * @param { Array<int> } pdu - 协议数据单元，从收到的信息中获取。
   * @param { string } specification - 短信协议类型。<br/>- 3gpp：表示GSM/UMTS/LTE SMS。<br/>- 3gpp2：表示CDMA SMS。
   * @param { AsyncCallback<ShortMessage> } callback - 获取短信实例的回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @since 6 dynamic
   * @since 23 static
   */
  function createMessage(pdu: Array<int>, specification: string, callback: AsyncCallback<ShortMessage>): void;

  /**
   * 根据协议数据单元(PDU)和指定的短信协议创建短信实例。使用Promise异步回调。
   *
   * @param { Array<int> } pdu - 协议数据单元，从收到的信息中获取。
   * @param { string } specification - 短信协议类型。<br/>- 3gpp：表示GSM/UMTS/LTE SMS。<br/>- 3gpp2：表示CDMA SMS。
   * @returns { Promise<ShortMessage> } 以Promise形式返回创建的短信实例。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @since 6 dynamic
   * @since 23 static
   */
  function createMessage(pdu: Array<int>, specification: string): Promise<ShortMessage>;

  /**
   * 发送短信。
   * 
   * > **说明：**
   * >
   * > 从 API version 6开始支持，从API version 10开始废弃。
   *
   * @permission ohos.permission.SEND_MESSAGES
   * @param { SendMessageOptions } options - 发送短信的参数和回调，参考[SendMessageOptions]{@link sms.SendMessageOptions}。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @since 6 dynamiconly
   * @deprecated since 10
   * @useinstead telephony.sms#sendShortMessage
   */
  function sendMessage(options: SendMessageOptions): void;

  /**
   * 发送短信。使用callback异步回调。
   *
   * @permission ohos.permission.SEND_MESSAGES
   * @param { SendMessageOptions } options - 发送短信的参数和回调，参考[SendMessageOptions]{@link sms.SendMessageOptions}。
   * @param { AsyncCallback<void> } callback - 发送短信的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @since 10 dynamic
   * @since 23 static
   */
  function sendShortMessage(options: SendMessageOptions, callback: AsyncCallback<void>): void;

  /**
   * 发送短信。使用Promise异步回调。
   *
   * @permission ohos.permission.SEND_MESSAGES
   * @param { SendMessageOptions } options - 发送短信的参数和回调，参考[SendMessageOptions]{@link sms.SendMessageOptions}。
   * @returns { Promise<void> } 以Promise形式返回发送短信的结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @since 10 dynamic
   * @since 23 static
   */
  function sendShortMessage(options: SendMessageOptions): Promise<void>;

  /**
   * 设置发送短信的默认SIM卡槽ID。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - SIM卡槽ID。<br/>- 0：卡槽1<br/>- 1：卡槽2<br/>- -1：清除默认配置
   * @param { AsyncCallback<void> } callback - 设置发送短信的默认SIM卡槽ID的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - Do not have sim card.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function setDefaultSmsSlotId(slotId: int, callback: AsyncCallback<void>): void;

  /**
   * 设置发送短信的默认SIM卡槽ID。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - SIM卡槽ID。<br/>- 0：卡槽1<br/>- 1：卡槽2<br/>- -1：清除默认配置
   * @returns { Promise<void> } 以Promise形式异步返回设置结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - Do not have sim card.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function setDefaultSmsSlotId(slotId: int): Promise<void>;

  /**
   * 获取发送短信的默认SIM卡槽ID。使用callback异步回调。
   *
   * @param { AsyncCallback<int> } callback - 获取发送短信的默认SIM卡槽ID的回调函数。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @syscap SystemCapability.Telephony.SmsMms
   * @since 7 dynamic
   * @since 23 static
   */
  function getDefaultSmsSlotId(callback: AsyncCallback<int>): void;

  /**
   * 获取发送短信的默认SIM卡槽ID。使用Promise异步回调。
   *
   * @returns { Promise<int> } 以Promise形式返回发送短信的默认SIM卡：<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @syscap SystemCapability.Telephony.SmsMms
   * @since 7 dynamic
   * @since 23 static
   */
  function getDefaultSmsSlotId(): Promise<int>;

  /**
   * 设置短信服务中心（SMSC）地址。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - SIM卡槽ID：<br/>- 0：卡槽1<br/>- 1：卡槽2
   * @param { string } smscAddr - 短信服务中心地址。
   * @param { AsyncCallback<void> } callback - 设置短信服务中心（SMSC）地址的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function setSmscAddr(slotId: int, smscAddr: string, callback: AsyncCallback<void>): void;

  /**
   * 设置短信服务中心（SMSC）地址。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - SIM卡槽ID：<br/>- 0：卡槽1<br/>- 1：卡槽2
   * @param { string } smscAddr - 短信服务中心地址。
   * @returns { Promise<void> } 以Promise形式异步返回设置结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function setSmscAddr(slotId: int, smscAddr: string): Promise<void>;

  /**
   * 获取短信服务中心（SMSC）地址。使用callback异步回调。
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - SIM卡槽ID：<br/>- 0：卡槽1<br/>- 1：卡槽2
   * @param { AsyncCallback<string> } callback - 指示用于获取SMSC地址的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function getSmscAddr(slotId: int, callback: AsyncCallback<string>): void;

  /**
   * 获取短信服务中心（SMSC）地址。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - SIM卡槽ID：<br/>- 0：卡槽1<br/>- 1：卡槽2
   * @returns { Promise<string> } 以Promise形式返回获取短信服务中心地址的结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function getSmscAddr(slotId: int): Promise<string>;

  /**
   * 检查当前设备是否具备短信发送和接收能力，该方法是同步方法。
   *
   * @returns { boolean } - true：设备具备短信发送和接收能力。<br/>- false：设备不具备短信发送和接收能力。
   * @syscap SystemCapability.Telephony.SmsMms
   * @since 7 dynamic
   * @since 23 static
   */
  function hasSmsCapability(): boolean;

  /**
   * 添加SIM卡消息，sim卡消息满，添加报错。使用callback异步回调。
   *
   * @permission ohos.permission.RECEIVE_SMS and ohos.permission.SEND_MESSAGES
   * @param { SimMessageOptions } options - SIM卡消息选项。
   * @param { AsyncCallback<void> } callback - 添加SIM卡消息的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function addSimMessage(options: SimMessageOptions, callback: AsyncCallback<void>): void;

  /**
   * 添加SIM卡消息，sim卡消息满，添加报错。使用Promise异步回调。
   *
   * @permission ohos.permission.RECEIVE_SMS and ohos.permission.SEND_MESSAGES
   * @param { SimMessageOptions } options - SIM卡消息选项。
   * @returns { Promise<void> } 以Promise形式返回添加的结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function addSimMessage(options: SimMessageOptions): Promise<void>;

  /**
   * 删除SIM卡消息，msgIndex无效时，删除报错。使用callback异步回调。
   *
   * @permission ohos.permission.RECEIVE_SMS and ohos.permission.SEND_MESSAGES
   * @param { int } slotId - SIM卡槽ID：<br/>- 0：卡槽1<br/>- 1：卡槽2
   * @param { int } msgIndex - 消息索引。
   * @param { AsyncCallback<void> } callback - 删除SIM卡消息的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function delSimMessage(slotId: int, msgIndex: int, callback: AsyncCallback<void>): void;

  /**
   * 删除SIM卡消息，msgIndex无效时，删除报错。使用Promise异步回调。
   *
   * @permission ohos.permission.RECEIVE_SMS and ohos.permission.SEND_MESSAGES
   * @param { int } slotId - SIM卡槽ID：<br/>- 0：卡槽1<br/>- 1：卡槽2
   * @param { int } msgIndex - 消息索引。
   * @returns { Promise<void> } 以Promise形式返回删除的结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function delSimMessage(slotId: int, msgIndex: int): Promise<void>;

  /**
   * 更新SIM卡消息。使用callback异步回调。
   *
   * @permission ohos.permission.RECEIVE_SMS and ohos.permission.SEND_MESSAGES
   * @param { UpdateSimMessageOptions } options - 更新SIM卡消息选项。
   * @param { AsyncCallback<void> } callback - 更新SIM卡消息的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function updateSimMessage(options: UpdateSimMessageOptions, callback: AsyncCallback<void>): void;

  /**
   * 更新SIM卡消息。使用Promise异步回调。
   *
   * @permission ohos.permission.RECEIVE_SMS and ohos.permission.SEND_MESSAGES
   * @param { UpdateSimMessageOptions } options - 更新SIM卡消息选项。
   * @returns { Promise<void> } 以Promise形式返回更新的结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function updateSimMessage(options: UpdateSimMessageOptions): Promise<void>;

  /**
   * 获取所有SIM卡消息。使用callback异步回调。
   *
   * @permission ohos.permission.RECEIVE_SMS
   * @param { int } slotId - SIM卡槽ID：<br/>- 0：卡槽1<br/>- 1：卡槽2
   * @param { AsyncCallback<Array<SimShortMessage>> } callback - 获取所有SIM卡消息的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function getAllSimMessages(slotId: int, callback: AsyncCallback<Array<SimShortMessage>>): void;

  /**
   * 获取所有SIM卡消息。使用Promise异步回调。
   *
   * @permission ohos.permission.RECEIVE_SMS
   * @param { int } slotId - SIM卡槽ID：<br/>- 0：卡槽1<br/>- 1：卡槽2
   * @returns { Promise<Array<SimShortMessage>> } 以Promise形式返回获取的SIM短消息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function getAllSimMessages(slotId: int): Promise<Array<SimShortMessage>>;

  /**
   * 设置小区广播配置。使用callback异步回调。
   *
   * @permission ohos.permission.RECEIVE_SMS
   * @param { CBConfigOptions } options - 小区广播配置选项。
   * @param { AsyncCallback<void> } callback - 设置小区广播配置的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function setCBConfig(options: CBConfigOptions, callback: AsyncCallback<void>): void;

  /**
   * 设置小区广播配置。使用Promise异步回调。
   *
   * @permission ohos.permission.RECEIVE_SMS
   * @param { CBConfigOptions } options - 小区广播配置选项。
   * @returns { Promise<void> } 以Promise形式返回设置的结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function setCBConfig(options: CBConfigOptions): Promise<void>;

  /**
   * 打开小区广播列表
   *
   * @permission ohos.permission.RECEIVE_SMS
   * @param { CBConfigListConfigs } configs - Indicates cell broadcast configuration list configs.
   * @returns { Promise<void> } The promise returned by the setCBConfigList.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 23 dynamic&static
   */
  function setCBConfigList(configs: CBConfigListConfigs): Promise<void>;

  /**
   * 获取短信段信息。使用callback异步回调。
   *
   * @param { int } slotId - SIM卡槽ID：<br/>- 0：卡槽1<br/>- 1：卡槽2
   * @param { string } message - 消息。
   * @param { boolean } force7bit - 是否使用7 bit编码，默认false。<br/>-true：是<br/>-false：否
   * @param { AsyncCallback<SmsSegmentsInfo> } callback - 指示用于获取短信短信息的回调函数。
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getSmsSegmentsInfo(slotId: int, message: string, force7bit: boolean, callback: AsyncCallback<SmsSegmentsInfo>): void;

  /**
   * 获取短信段信息。使用Promise异步回调。
   *
   * @param { int } slotId - SIM卡槽ID：<br/>- 0：卡槽1<br/>- 1：卡槽2
   * @param { string } message - 消息。
   * @param { boolean } force7bit - 是否使用7 bit编码，默认false。<br/>-true：是<br/>-false：否
   * @returns { Promise<SmsSegmentsInfo> } 以Promise形式返回短信段信息。
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getSmsSegmentsInfo(slotId: int, message: string, force7bit: boolean): Promise<SmsSegmentsInfo>;

  /**
   * 如果IMS已注册并且在IMS上支持SMS，则支持通过IMS发送SMS。使用callback异步回调。
   *
   * @param { int } slotId - SIM卡槽ID：<br/>- 0：卡槽1<br/>- 1：卡槽2
   * @param { AsyncCallback<boolean> } callback - 指示是否支持IMS发送SMS的回调函数，默认false。<br/>-true：是<br/>-false：否
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function isImsSmsSupported(slotId: int, callback: AsyncCallback<boolean>): void;

  /**
   * 如果IMS已注册并且在IMS上支持SMS，则支持通过IMS发送SMS。使用Promise异步回调。
   *
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1<br/>- 1：卡槽2
   * @returns { Promise<boolean> } 以Promise形式返回结果。
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function isImsSmsSupported(slotId: int): Promise<boolean>;

  /**
   * 获取IMS上支持的SMS格式。使用callback异步回调。
   *
   * @param { AsyncCallback<string> } callback - 指示用于获取格式、3gpp、3gpp2或未知的回调函数。
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getImsShortMessageFormat(callback: AsyncCallback<string>): void;

  /**
   * 获取IMS上支持的SMS格式。使用Promise异步回调。
   *
   * @returns { Promise<string> } 以Promise形式返回SMS格式。
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getImsShortMessageFormat(): Promise<string>;

  /**
   * 彩信解码。使用callback异步回调。
   *
   * @param { string | Array<int> } mmsFilePathName - 彩信文件路径。
   * @param { AsyncCallback<MmsInformation> } callback - 获取｛@code MmsInformation｝的回调函数。
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function decodeMms(mmsFilePathName: string | Array<int>, callback: AsyncCallback<MmsInformation>): void;

  /**
   * 彩信解码。使用Promise异步回调。
   *
   * @param { string | Array<int> } mmsFilePathName - 彩信文件路径。
   * @returns { Promise<MmsInformation> } 以Promise形式返回彩信信息。
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function decodeMms(mmsFilePathName: string | Array<int>): Promise<MmsInformation>;

  /**
   * 彩信编码。使用callback异步回调。
   *
   * @param { MmsInformation } mms - 彩信信息。
   * @param { AsyncCallback<Array<int>> } callback - 指示用于获取MMS编码结果的回调函数。
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function encodeMms(mms: MmsInformation, callback: AsyncCallback<Array<int>>): void;

  /**
   * 彩信编码。使用Promise异步回调。
   *
   * @param { MmsInformation } mms - 彩信信息。
   * @returns { Promise<Array<int>> } 以Promise形式返回彩信编码后的结果。
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function encodeMms(mms: MmsInformation): Promise<Array<int>>;

  /**
   * 获取发送短信的默认SIM卡ID。使用callback异步回调。
   *
   * @param { AsyncCallback<int> } callback - 获取默认短信SIM的SIM ID的回调函数。<br/>与SIM卡绑定，从1开始递增。<br/>无卡时返回值为-1。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - Do not have sim card.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @throws { BusinessError } 8301001 - SIM card is not activated.
   * @syscap SystemCapability.Telephony.SmsMms
   * @since 10 dynamic
   * @since 23 static
   */
  function getDefaultSmsSimId(callback: AsyncCallback<int>): void;

  /**
   * 获取发送短信的默认SIM卡ID。使用Promise异步回调。
   *
   * @returns { Promise<int> } 以Promise形式返回发送短信的默认SIM卡ID：<br/>与SIM卡绑定，从1开始递增。<br/>无卡时返回值为-1。
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - Do not have sim card.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @throws { BusinessError } 8301001 - SIM card is not activated.
   * @syscap SystemCapability.Telephony.SmsMms
   * @since 10 dynamic
   * @since 23 static
   */
  function getDefaultSmsSimId(): Promise<int>;

  /**
   * 获取拟发送短信的目标地址短码类型
   *
   * @permission ohos.permission.SEND_MESSAGES
   * @param { int } slotId - Indicates the ID of the slot holding the SIM card for sending SMS messages.
   *     The value {@code 0} indicates card slot 1, and the value {@code 1} indicates card slot 2.
   * @param { string } destAddr - Indicates the destination address of the sending SMS.
   *     <br>取值范围:[0,+∞)
   * @returns { Promise<SmsShortCodeType> } 返回发送目标地址的短信短码类型
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Nonsystem applications use system APIs.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - Do not have sim card.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  function getSmsShortCodeType(slotId: int, destAddr: string): Promise<SmsShortCodeType>;

  /**
   * 彩信信息。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface MmsInformation {
    /**
     * 消息类型。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    messageType: MessageType;

    /**
     * PDU头类型
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    mmsType: MmsSendReq | MmsSendConf | MmsNotificationInd | MmsRespInd | MmsRetrieveConf | MmsAcknowledgeInd | MmsDeliveryInd | MmsReadOrigInd | MmsReadRecInd;

    /**
     * 附件
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    attachment?: Array<MmsAttachment>;
  }

  /**
   * 发送彩信。使用callback异步回调。
   *
   * @permission ohos.permission.SEND_MESSAGES
   * @param { Context } context - 应用上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./application/UIAbilityContext:UIAbilityContext}。
   * @param { MmsParams } mmsParams - 发送彩信的参数和回调，参考[MmsParams]{@link sms.MmsParams}。
   * @param { AsyncCallback<void> } callback - 发送彩信的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function sendMms(context: Context, mmsParams: MmsParams, callback: AsyncCallback<void>): void;

  /**
   * 发送彩信。使用Promise异步回调。
   *
   * @permission ohos.permission.SEND_MESSAGES
   * @param { Context } context - 应用上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./application/UIAbilityContext:UIAbilityContext}。
   * @param { MmsParams } mmsParams - 发送彩信的参数和回调，参考[MmsParams]{@link sms.MmsParams}。
   * @returns { Promise<void> } 以Promise形式返回发送彩信的结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function sendMms(context: Context, mmsParams: MmsParams): Promise<void>;

  /**
   * 下载彩信。使用callback异步回调。
   *
   * @permission ohos.permission.RECEIVE_MMS
   * @param { Context } context - 应用上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./application/UIAbilityContext:UIAbilityContext}。
   * @param { MmsParams }  mmsParams - 下载彩信的参数和回调，参考[MmsParams]{@link sms.MmsParams}。
   * @param { AsyncCallback<void> } callback - 下载彩信的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function downloadMms(context: Context, mmsParams: MmsParams, callback: AsyncCallback<void>): void;

  /**
   * 下载彩信。使用Promise异步回调。
   *
   * @permission ohos.permission.RECEIVE_MMS
   * @param { Context } context - 应用上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./application/UIAbilityContext:UIAbilityContext}。
   * @param { MmsParams }  mmsParams - 发送彩信的参数和回调，参考[MmsParams]{@link sms.MmsParams}。
   * @returns { Promise<void> } 以Promise形式返回发送彩信的结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function downloadMms(context: Context, mmsParams: MmsParams): Promise<void>;

  /**
   * 发送彩信的参数。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export interface MmsParams {
    /**
     * 用于发送短信的SIM卡槽ID：
     * 
     * - 0：卡槽1
     * - 1：卡槽2
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    slotId: int;

    /**
     * 彩信中心地址。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    mmsc: string;

    /**
     * 彩信PDU地址。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    data: string;

    /**
     * 彩信配置文件，参考[MmsConfig]{@link sms.MmsConfig}。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    mmsConfig?: MmsConfig;
  }

  /**
   * 彩信配置文件。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export interface MmsConfig {
    /**
     * 用户代理。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    userAgent: string;

    /**
     * 用户代理配置。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    userAgentProfile: string;
  }

  /**
   * 彩信发送请求。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface MmsSendReq {
    /**
     * 彩信来源
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    from: MmsAddress;

    /**
     * 事务ID
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    transactionId: string;

    /**
     * 内容类型
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    contentType: string;

    /**
     * 版本
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    version: MmsVersionType;

    /**
     * 发送至
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    to?: Array<MmsAddress>;

    /**
     * 日期
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    date?: long;

    /**
     * 抄送
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    cc?: Array<MmsAddress>;

    /**
     * 暗抄送
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    bcc?: Array<MmsAddress>;

    /**
     * 主题
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    subject?: string;

    /**
     * 消息类
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    messageClass?: int;

    /**
     * 到期
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    expiry?: int;

    /**
     * 优先
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    priority?: MmsPriorityType;

    /**
     * 发件人可见性
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    senderVisibility?: int;

    /**
     * 交付报告
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    deliveryReport?: int;

    /**
     * 阅读报告
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    readReport?: int;
  }

  /**
   * 彩信发送配置。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface MmsSendConf {
    /**
     * 响应状态
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    responseState: int;

    /**
     * 事务ID
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    transactionId: string;

    /**
     * 版本
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    version: MmsVersionType;

    /**
     * 消息ID
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    messageId?: string;
  }

  /**
   * 彩信通知索引。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface MmsNotificationInd {
    /**
     * 事务ID
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    transactionId: string;

    /**
     * 消息类
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    messageClass: int;

    /**
     * 消息大小
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    messageSize: long;

    /**
     * 到期
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    expiry: int;

    /**
     * 内容位置
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    contentLocation: string;

    /**
     * 版本
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    version: MmsVersionType;

    /**
     * 来源
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    from?: MmsAddress;

    /**
     * 主题
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    subject?: string;

    /**
     * 状态报告
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    deliveryReport?: int;

    /**
     * 内容类
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    contentClass?: int;
  }

  /**
   * 彩信回复标志。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface MmsRespInd {
    /**
     * 事件ID
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    transactionId: string;

    /**
     * 状态
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    status: int;

    /**
     * 版本
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    version: MmsVersionType;

    /**
     * 允许报告
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    reportAllowed?: ReportType;
  }

  /**
   * 彩信检索配置。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface MmsRetrieveConf {
    /**
     * 事务ID
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    transactionId: string;

    /**
     * 消息ID
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    messageId: string;

    /**
     * 日期
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    date: long;

    /**
     * 内容类型
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    contentType: string;

    /**
     * 发送至
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    to: Array<MmsAddress>;

    /**
     * 版本
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    version: MmsVersionType;

    /**
     * 来源
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    from?: MmsAddress;

    /**
     * 抄送
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    cc?: Array<MmsAddress>;

    /**
     * 主题
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    subject?: string;

    /**
     * 优先
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    priority?: MmsPriorityType;

    /**
     * 状态报告
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    deliveryReport?: int;

    /**
     * 阅读报告
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    readReport?: int;

    /**
     * 检索状态
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    retrieveStatus?: int;

    /**
     * 检索文本
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    retrieveText?: string;
  }

  /**
   * 彩信确认索引。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface MmsAcknowledgeInd {
    /**
     * 事务ID
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    transactionId: string;

    /**
     * 版本
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    version: MmsVersionType;

    /**
     * 允许报告
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    reportAllowed?: ReportType;
  }

  /**
   * 彩信发送标识。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface MmsDeliveryInd {
    /**
     * 消息ID
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    messageId: string;

    /**
     * 日期
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    date: long;

    /**
     * 发送至
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    to: Array<MmsAddress>;

    /**
     * 状态
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    status: int;

    /**
     * 版本
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    version: MmsVersionType;
  }

  /**
   * 彩信读取原始索引。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface MmsReadOrigInd {
    /**
     * 版本
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    version: MmsVersionType;

    /**
     * 消息ID
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    messageId: string;

    /**
     * 发送至
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    to: Array<MmsAddress>;

    /**
     * 来源
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    from: MmsAddress;

    /**
     * 日期
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    date: long;

    /**
     * 阅读状态
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    readStatus: int;
  }

  /**
   * 彩信读取记录索引。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface MmsReadRecInd {
    /**
     * 版本
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    version: MmsVersionType;

    /**
     * 消息ID
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    messageId: string;

    /**
     * 发送至
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    to: Array<MmsAddress>;

    /**
     * 来源
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    from: MmsAddress;

    /**
     * 阅读状态
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    readStatus: int;

    /**
     * 日期
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    date?: long;
  }

  /**
   * 彩信附件。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface MmsAttachment {
    /**
     * 内容ID
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    contentId: string;

    /**
     * 内容位置
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    contentLocation: string;

    /**
     * 内容处理
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    contentDisposition: DispositionType;

    /**
     * 内容传输编码
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    contentTransferEncoding: string;

    /**
     * 内容类型
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    contentType: string;

    /**
     * 同步多媒体集成语言
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    isSmil: boolean;

    /**
     * 路径
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    path?: string;

    /**
     * 缓冲区中
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    inBuff?: Array<int>;

    /**
     * 文件名
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    fileName?: string;

    /**
     * 字符集
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    charset?: MmsCharSets;
  }

  /**
   * 彩信地址。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface MmsAddress {
    /**
     * 地址
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    address: string;

    /**
     * 字符集
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    charset: MmsCharSets;
  }

  /**
   * 消息类型。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum MessageType {
    /**
     * 彩信发送请求类型
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TYPE_MMS_SEND_REQ = 128,

    /**
     * 彩信发送配置类型
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TYPE_MMS_SEND_CONF = 129,

    /**
     * 彩信通知索引类型
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TYPE_MMS_NOTIFICATION_IND = 130,

    /**
     * 彩信回复索引类型
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TYPE_MMS_RESP_IND = 131,

    /**
     * 彩信检索配置类型
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TYPE_MMS_RETRIEVE_CONF = 132,

    /**
     * 彩信确认索引类型
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TYPE_MMS_ACKNOWLEDGE_IND = 133,

    /**
     * 彩信传送索引类型
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TYPE_MMS_DELIVERY_IND = 134,

    /**
     * 彩信读取接收索引类型
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TYPE_MMS_READ_REC_IND = 135,

    /**
     * 彩信读取原始索引类型
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TYPE_MMS_READ_ORIG_IND = 136
  }

  /**
   * 彩信优先级类型。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum MmsPriorityType {
    /**
     * 彩信优先级低
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    MMS_LOW = 128,

    /**
     * 彩信优先级正常
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    MMS_NORMAL = 129,

    /**
     * 彩信优先级高
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    MMS_HIGH = 130
  }

  /**
   * 彩信版本类型。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum MmsVersionType {
    /**
     * 彩信版本1_0
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    MMS_VERSION_1_0 = 0x10,

    /**
     * 彩信版本1_1
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    MMS_VERSION_1_1 = 0x11,

    /**
     * 彩信版本1_2
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    MMS_VERSION_1_2 = 0x12,

    /**
     * 彩信版本1_3
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    MMS_VERSION_1_3 = 0x13
  }

  /**
   * 彩信字符集。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum MmsCharSets {
    /**
     * BIG5格式
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    BIG5 = 0X07EA,

    /**
     * ISO_10646_UCS_2格式
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ISO_10646_UCS_2 = 0X03E8,

    /**
     * ISO_8859_1格式
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ISO_8859_1 = 0X04,

    /**
     * ISO_8859_2格式
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ISO_8859_2 = 0X05,

    /**
     * ISO_8859_3格式
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ISO_8859_3 = 0X06,

    /**
     * ISO_8859_4格式
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ISO_8859_4 = 0X07,

    /**
     * ISO_8859_5格式
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ISO_8859_5 = 0X08,

    /**
     * ISO_8859_6格式
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ISO_8859_6 = 0X09,

    /**
     * ISO_8859_7格式
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ISO_8859_7 = 0X0a,

    /**
     * ISO_8859_8格式
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ISO_8859_8 = 0X0b,

    /**
     * ISO_8859_9格式
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ISO_8859_9 = 0X0c,

    /**
     * SHIFT_JIS格式
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    SHIFT_JIS = 0X11,

    /**
     * US_ASCII格式
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    US_ASCII = 0X03,

    /**
     * UTF_8格式
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    UTF_8 = 0X6A
  }

  /**
   * 处理类型。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum DispositionType {
    /**
     * 数据来源
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FROM_DATA = 0,

    /**
     * 附件
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ATTACHMENT = 1,

    /**
     * 内联
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    INLINE = 2
  }

  /**
   * 报告类型。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum ReportType {
    /**
     * YES
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    MMS_YES = 128,

    /**
     * NO
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    MMS_NO = 129
  }

  /**
   * 小区广播配置选项。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export interface CBConfigOptions {
    /**
     * 卡槽ID
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    slotId: int;

    /**
     * 可行
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    enable: boolean;

    /**
     * 消息起始ID
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    startMessageId: int;

    /**
     * 消息结束ID
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    endMessageId: int;

    /**
     * 设备网络制式
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    ranType: RanType;
  }

  /**
   * 定义小区广播列表配置
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 23 dynamic&static
   */
  export interface CBConfigListConfigs {
    /**
     * 指定当前小区广播配置列表对应的卡槽
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 23 dynamic&static
     */
    slotId: int;

    /**
     * 定义当前小区广播列表的消息号
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 23 dynamic&static
     */
    messageIds: int[];

    /**
     * 定义当前小区广播列表接入网类型
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 23 dynamic&static
     */
    ranType: RanType;
  }

  /**
   * SIM卡消息选项。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export interface SimMessageOptions {
    /**
     * 卡槽ID
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    slotId: int;

    /**
     * 短消息业务中心
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    smsc: string;

    /**
     * 协议数据单元
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    pdu: string;

    /**
     * 状态
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    status: SimMessageStatus;
  }

  /**
   * 更新SIM卡消息选项。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export interface UpdateSimMessageOptions {
    /**
     * 卡槽ID
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    slotId: int;

    /**
     * 消息索引
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    msgIndex: int;

    /**
     * 新状态
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    newStatus: SimMessageStatus;

    /**
     * 协议数据单元
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    pdu: string;

    /**
     * 短消息业务中心
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    smsc: string;
  }

  /**
   * 短信实例。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @since 6 dynamic
   * @since 23 static
   */
  export interface ShortMessage {
    /**
     * 短信正文。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    visibleMessageBody: string;

    /**
     * 发送者地址。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    visibleRawAddress: string;

    /**
     * 短信类型。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    messageClass: ShortMessageClass;

    /**
     * 发送短信时使用的协议标识。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    protocolId: int;

    /**
     * 短消息服务中心(SMSC)地址。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    scAddress: string;

    /**
     * SMSC时间戳。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    scTimestamp: long;

    /**
     * 收到的短信是否为“替换短信”，默认为false。
     * 
     * -true：是
     * 
     * -false：否
     * 
     * “替换短信”有关详细信息，参见 [“3GPP TS 23.040 9.2.3.9”](https://www.3gpp.org/ftp/specs/archive/23_series/23.040)。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    isReplaceMessage: boolean;

    /**
     * 收到的短信是否包含“TP-Reply-Path”，默认为false。
     * 
     * -true：是
     * 
     * -false：否
     * 
     * “TP-Reply-Path”：设备根据发送SMS消息的短消息中心进行回复。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    hasReplyPath: boolean;

    /**
     * SMS消息中的协议数据单元 (PDU)。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    pdu: Array<int>;

    /**
     * SMS-STATUS-REPORT消息中的短信状态指示短信服务中心(SMSC)发送的短信状态。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    status: int;

    /**
     * 当前消息是否为“短信状态报告”，默认为false。
     * 
     * -true：是
     * 
     * -false：否
     * 
     * “短信状态报告”是一种特定格式的短信，被用来从Service Center到Mobile Station传输状态报告。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    isSmsStatusReportMessage: boolean;
  }

  /**
   * SIM卡短消息。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export interface SimShortMessage {
    /**
     * 短消息
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    shortMessage: ShortMessage;

    /**
     * SIM卡消息状态
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    simMessageStatus: SimMessageStatus;

    /**
     * SIM卡索引
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    indexOnSim: int;
  }

  /**
   * SIM卡消息状态。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export enum SimMessageStatus {
    /**
     * SIM卡上的可用空间状态
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    SIM_MESSAGE_STATUS_FREE = 0,

    /**
     * 消息已读状态
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    SIM_MESSAGE_STATUS_READ = 1,

    /**
     * 消息未读状态
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    SIM_MESSAGE_STATUS_UNREAD = 3,

    /**
     * 存储发送消息（仅适用于SMS）
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    SIM_MESSAGE_STATUS_SENT = 5,

    /**
     * 存储未发送消息（仅适用于SMS）
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    SIM_MESSAGE_STATUS_UNSENT = 7
  }

  /**
   * 短信类型。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @since 6 dynamic
   * @since 23 static
   */
  export enum ShortMessageClass {
    /**
     * 未知类型。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    UNKNOWN = 0,

    /**
     * 即时消息，收到后立即显示。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    INSTANT_MESSAGE = 1,

    /**
     * 存储在设备或SIM卡上的短信。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    OPTIONAL_MESSAGE = 2,

    /**
     * 包含SIM卡信息的短信，需要存储在SIM卡中。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    SIM_MESSAGE = 3,

    /**
     * 要转发到另一台设备的短信。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    FORWARD_MESSAGE = 4
  }

  /**
   * 发送短信的参数和回调。根据SendMessageOptions中的可选参数content的值判断短信类型。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @since 6 dynamic
   * @since 23 static
   */
  export interface SendMessageOptions {
    /**
     * 用于发送短信的SIM卡槽ID：
     * 
     * - 0：卡槽1。
     * - 1：卡槽2。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    slotId: int;

    /**
     * 短信的发送地址。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    destinationHost: string;

    /**
     * 短信中心地址。默认使用SIM卡中的短信中心地址。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    serviceCenter?: string;

    /**
     * 如果内容是字符串，则这是一条文本短信。如果内容是字节数组，则这是一条数据短信。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    content: string | Array<int>;

    /**
     * 如果发送数据消息，destinationPort 是必需的。否则是可选的。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    destinationPort?: int;

    /**
     * 短信发送结果回调，返回短信发送的结果，参考[ISendShortMessageCallback]{@link sms.ISendShortMessageCallback}。发送数据短信时，此项必填。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    sendCallback?: AsyncCallback<ISendShortMessageCallback>;

    /**
     * 短信送达结果回调，返回短信递送报告，参考[IDeliveryShortMessageCallback]{@link sms.IDeliveryShortMessageCallback}。发送数据短信时，此项必填。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    deliveryCallback?: AsyncCallback<IDeliveryShortMessageCallback>;
  }

  /**
   * 回调实例。返回短信发送结果、存储已发送短信的URI和是否为长短信的最后一部分。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @since 6 dynamic
   * @since 23 static
   */
  export interface ISendShortMessageCallback {
    /**
     * 短信发送结果。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    result: SendSmsResult;

    /**
     * 存储发送短信的URI。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    url: string;

    /**
     * 指定这是否是长短信的最后一部分。默认为false。
     * 
     * -true：是
     * 
     * -false：否
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    isLastPart: boolean;
  }

  /**
   * 回调实例，返回短信送达报告。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @since 6 dynamic
   * @since 23 static
   */
  export interface IDeliveryShortMessageCallback {
    /**
     * 短信送达报告。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    pdu: Array<int>;
  }

  /**
   * 短信发送结果。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @since 6 dynamic
   * @since 23 static
   */
  export enum SendSmsResult {
    /**
     * 发送短信成功。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    SEND_SMS_SUCCESS = 0,

    /**
     * 发送短信失败，原因未知。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    SEND_SMS_FAILURE_UNKNOWN = 1,

    /**
     * 发送短信失败，原因为调制解调器关机。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    SEND_SMS_FAILURE_RADIO_OFF = 2,

    /**
     * 发送短信失败，原因为网络不可用、不支持发送或接收短信。
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    SEND_SMS_FAILURE_SERVICE_UNAVAILABLE = 3
  }

  /**
   * 设备网络制式。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export enum RanType {
    /**
     * GSM
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    TYPE_GSM = 1,

    /**
     * CMDA
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    TYPE_CDMA = 2
  }

  /**
   * 短信段信息。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface SmsSegmentsInfo {
    /**
     * 拆分计数
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    splitCount: int;

    /**
     * 编码计数
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    encodeCount: int;

    /**
     * 剩余编码计数
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    encodeCountRemaining: int;

    /**
     * 短信编码方案
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    scheme: SmsEncodingScheme;
  }

  /**
   * 短信编码方案。
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum SmsEncodingScheme {
    /**
     * 未知短信编码
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    SMS_ENCODING_UNKNOWN = 0,

    /**
     * 7位短信编码
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    SMS_ENCODING_7BIT = 1,

    /**
     * 8位短信编码
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    SMS_ENCODING_8BIT = 2,

    /**
     * 16位短信编码
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    SMS_ENCODING_16BIT = 3
  }

  /**
   * 短信短码类型
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  export enum SmsShortCodeType {
    /**
     * 未知短信短码类型
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 23 dynamic&static
     */
    SMS_SHORT_CODE_TYPE_UNKNOWN = -1,

    /**
     * 非付费短码类型
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 23 dynamic&static
     */
    SMS_SHORT_CODE_TYPE_NOT_PREMIUM = 0,

    /**
     * 潜在付费短码类型
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 23 dynamic&static
     */
    SMS_SHORT_CODE_TYPE_POSSIBLE_PREMIUM = 1
  }
}

export default sms;