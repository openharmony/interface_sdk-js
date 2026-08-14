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
 * @file SMS
 * @kit TelephonyKit
 */

import type { AsyncCallback } from './@ohos.base';
import type Context from './application/BaseContext';

/**
 * The **sms** module provides basic SMS management functions. With the APIs provided by this module, you can create and
 * send SMS messages, and obtain the ID of the default SIM card used to send and receive SMS messages, and check whether
 * the current device can send and receive SMS messages.
 *
 * @syscap SystemCapability.Telephony.SmsMms
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace sms {
  /**
   * Splits an SMS message into multiple segments. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SEND_MESSAGES
   * @param { string } content - SMS message content. The value cannot be null.
   * @param { AsyncCallback<Array<string>> } callback - Callback used to return the result.
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
   * Splits an SMS message into multiple segments. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SEND_MESSAGES
   * @param { string } content - SMS message content. The value cannot be null.
   * @returns { Promise<Array<string>> } Promise used to return the result.
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
   * Creates an SMS instance based on the protocol data unit (PDU) and specified SMS protocol. This API uses an
   * asynchronous callback to return the result.
   *
   * @param { Array<int> } pdu - Protocol data unit, which is obtained from the received SMS message.
   * @param { string } specification - SMS protocol type.
   *     <br>- **3gpp**: GSM/UMTS/LTE SMS
   *     <br>- **3gpp2**: CDMA SMS
   * @param { AsyncCallback<ShortMessage> } callback - Callback used to return the result.
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
   * Creates an SMS instance based on the protocol data unit (PDU) and specified SMS protocol. This API uses a promise
   * to return the result.
   *
   * @param { Array<int> } pdu - Protocol data unit, which is obtained from the received SMS message.
   * @param { string } specification - SMS protocol type.
   *     <br>- **3gpp**: GSM/UMTS/LTE SMS
   *     <br>- **3gpp2**: CDMA SMS
   * @returns { Promise<ShortMessage> } Promise used to return the result.
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
   * Sends an SMS message.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 6 and deprecated since API version 10. You are advised to use
   * > [sendShortMessage]{@link sms.sendShortMessage}.
   *
   * @permission ohos.permission.SEND_MESSAGES
   * @param { SendMessageOptions } options - Options (including the callback) for sending SMS messages. For details, see
   *     [SendMessageOptions]{@link sms.SendMessageOptions}.
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
   * Sends an SMS message. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SEND_MESSAGES
   * @param { SendMessageOptions } options - Options (including the callback) for sending SMS messages. For details, see
   *     [SendMessageOptions]{@link sms.SendMessageOptions}.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Sends an SMS message. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SEND_MESSAGES
   * @param { SendMessageOptions } options - Options (including the callback) for sending SMS messages. For details, see
   *     [SendMessageOptions]{@link sms.SendMessageOptions}.
   * @returns { Promise<void> } Promise used to return the result.
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
   * Sets the default slot ID of the SIM card used to send SMS messages. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - SIM card slot ID.
   *     <br>- **0**: card slot 1
   *     <br>- **1**: card slot 2
   *     <br>- **-1**: Clears the default configuration.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Sets the default slot ID of the SIM card used to send SMS messages. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - SIM card slot ID.
   *     <br>- **0**: card slot 1
   *     <br>- **1**: card slot 2
   *     <br>- **-1**: Clears the default configuration.
   * @returns { Promise<void> } Promise used to return the result.
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
   * Obtains the default slot ID of the SIM card used to send SMS messages. This API uses an asynchronous callback to
   * return the result.
   *
   * @param { AsyncCallback<int> } callback - Callback used to return the result.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @syscap SystemCapability.Telephony.SmsMms
   * @since 7 dynamic
   * @since 23 static
   */
  function getDefaultSmsSlotId(callback: AsyncCallback<int>): void;

  /**
   * Obtains the default slot ID of the SIM card used to send SMS messages. This API uses a promise to return the
   * result.
   *
   * @returns { Promise<int> } Promise used to return the result.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @syscap SystemCapability.Telephony.SmsMms
   * @since 7 dynamic
   * @since 23 static
   */
  function getDefaultSmsSlotId(): Promise<int>;

  /**
   * Sets the short message service center (SMSC) address. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - SIM card slot ID.
   *     <br>- **0**: card slot 1
   *     <br>- **1**: card slot 2
   * @param { string } smscAddr - SMSC address.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Sets the SMSC address. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - SIM card slot ID.
   *     <br>- **0**: card slot 1
   *     <br>- **1**: card slot 2
   * @param { string } smscAddr - SMSC address.
   * @returns { Promise<void> } Promise used to return the result.
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
   * Obtains the SMSC address. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - SIM card slot ID.
   *     <br>- **0**: card slot 1
   *     <br>- **1**: card slot 2
   * @param { AsyncCallback<string> } callback - Callback used to return the result.
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
   * Obtains the SMSC address. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - SIM card slot ID.
   *     <br>- **0**: card slot 1
   *     <br>- **1**: card slot 2
   * @returns { Promise<string> } Promise used to return the result.
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
   * Checks whether the current device can send and receive SMS messages. This API works in synchronous mode.
   *
   * @returns { boolean } - **true**: The device can send and receive SMS messages.
   *     <br>- **false**: The device cannot send or receive SMS messages.
   * @syscap SystemCapability.Telephony.SmsMms
   * @since 7 dynamic
   * @since 23 static
   */
  function hasSmsCapability(): boolean;

  /**
   * Adds a message to the SIM card. If the SIM card is full, an error is reported. This API uses an asynchronous
   * callback to return the result.
   *
   * @permission ohos.permission.RECEIVE_SMS and ohos.permission.SEND_MESSAGES
   * @param { SimMessageOptions } options - SIM message options.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Adds a message to the SIM card. If the SIM card is full, an error is reported. This API uses a promise to return
   * the result.
   *
   * @permission ohos.permission.RECEIVE_SMS and ohos.permission.SEND_MESSAGES
   * @param { SimMessageOptions } options - SIM message options.
   * @returns { Promise<void> } Promise used to return the result.
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
   * Deletes a message from the SIM card. If the specified **msgIndex** is invalid, an error is reported. This API uses
   * an asynchronous callback to return the result.
   *
   * @permission ohos.permission.RECEIVE_SMS and ohos.permission.SEND_MESSAGES
   * @param { int } slotId - SIM card slot ID.
   *     <br>- **0**: card slot 1
   *     <br>- **1**: card slot 2
   * @param { int } msgIndex - Message index.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Deletes a message from the SIM card. If the specified **msgIndex** is invalid, an error is reported. This API uses
   * a promise to return the result.
   *
   * @permission ohos.permission.RECEIVE_SMS and ohos.permission.SEND_MESSAGES
   * @param { int } slotId - SIM card slot ID.
   *     <br>- **0**: card slot 1
   *     <br>- **1**: card slot 2
   * @param { int } msgIndex - Message index.
   * @returns { Promise<void> } Promise used to return the result.
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
   * Updates a SIM message. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.RECEIVE_SMS and ohos.permission.SEND_MESSAGES
   * @param { UpdateSimMessageOptions } options - SIM message updating options.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Updates a SIM message. This API uses a promise to return the result.
   *
   * @permission ohos.permission.RECEIVE_SMS and ohos.permission.SEND_MESSAGES
   * @param { UpdateSimMessageOptions } options - SIM message updating options.
   * @returns { Promise<void> } Promise used to return the result.
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
   * Obtains all SIM card messages. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.RECEIVE_SMS
   * @param { int } slotId - SIM card slot ID.
   *     <br>- **0**: card slot 1
   *     <br>- **1**: card slot 2
   * @param { AsyncCallback<Array<SimShortMessage>> } callback - Callback used to return the result.
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
   * Obtains all SIM card messages. This API uses a promise to return the result.
   *
   * @permission ohos.permission.RECEIVE_SMS
   * @param { int } slotId - SIM card slot ID.
   *     <br>- **0**: card slot 1
   *     <br>- **1**: card slot 2
   * @returns { Promise<Array<SimShortMessage>> } Promise used to return the result.
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
   * Sets the cell broadcast configuration. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.RECEIVE_SMS
   * @param { CBConfigOptions } options - Cell broadcast configuration options.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Sets the cell broadcast configuration. This API uses a promise to return the result.
   *
   * @permission ohos.permission.RECEIVE_SMS
   * @param { CBConfigOptions } options - Cell broadcast configuration options.
   * @returns { Promise<void> } Promise used to return the result.
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
   * Turn on Cell BroadCast by list.
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
   * Obtains SMS message segment information. This API uses an asynchronous callback to return the result.
   *
   * @param { int } slotId - SIM card slot ID.
   *     <br>- **0**: card slot 1
   *     <br>- **1**: card slot 2
   * @param { string } message - SMS message.
   * @param { boolean } force7bit - Whether to use 7-bit encoding. The default value is **false**.
   *     <br>- **true**: yes
   *     <br>- **false**: no
   * @param { AsyncCallback<SmsSegmentsInfo> } callback - Callback used to return the result.
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
   * Obtains SMS message segment information. This API uses a promise to return the result.
   *
   * @param { int } slotId - SIM card slot ID.
   *     <br>- **0**: card slot 1
   *     <br>- **1**: card slot 2
   * @param { string } message - SMS message.
   * @param { boolean } force7bit - Whether to use 7-bit encoding. The default value is **false**.
   *     <br>- **true**: yes
   *     <br>- **false**: no
   * @returns { Promise<SmsSegmentsInfo> } Promise used to return the result.
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
   * Checks whether SMS is supported on IMS. This API uses an asynchronous callback to return the result.
   *
   * @param { int } slotId - SIM card slot ID.
   *     <br>- **0**: card slot 1
   *     <br>- **1**: card slot 2
   * @param { AsyncCallback<boolean> } callback - Whether SMS is supported on IMS. The default value is **false**.
   *     <br>- **true**: yes
   *     <br>- **false**: no
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
   * Checks whether SMS is supported on IMS. This API uses a promise to return the result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1
   *     <br>- **1**: card slot 2
   * @returns { Promise<boolean> } Promise used to return the result.
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
   * Obtains the SMS format supported by the IMS, for example, **3gpp**, **3gpp2**, or **unknown**. This API uses an
   * asynchronous callback to return the result.
   *
   * @param { AsyncCallback<string> } callback - Callback used to return the result.
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
   * Obtains the SMS format supported by the IMS, for example, **3gpp**, **3gpp2**, or **unknown**. This API uses a
   * promise to return the result.
   *
   * @returns { Promise<string> } Promise used to return the result.
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
   * Decodes MMS messages. This API uses an asynchronous callback to return the result.
   *
   * @param { string | Array<int> } mmsFilePathName - MMS message file path.
   * @param { AsyncCallback<MmsInformation> } callback - Callback used to return the result, which is carried in {@code
   *     MmsInformation}.
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
   * Decodes MMS messages. This API uses a promise to return the result.
   *
   * @param { string | Array<int> } mmsFilePathName - MMS message file path.
   * @returns { Promise<MmsInformation> } Promise used to return the result.
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
   * MMS message code. This API uses an asynchronous callback to return the result.
   *
   * @param { MmsInformation } mms - MMS message information.
   * @param { AsyncCallback<Array<int>> } callback - Callback used to return the result.
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
   * MMS message code. This API uses a promise to return the result.
   *
   * @param { MmsInformation } mms - MMS message information.
   * @returns { Promise<Array<int>> } Promise used to return the result.
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
   * Obtains the default ID of the SIM card used to send SMS messages. This API uses an asynchronous callback to return
   * the result.
   *
   * @param { AsyncCallback<int> } callback - Callback used to return the result.
   *     <br>The return value is bound to the SIM card and increases from 1.
   *     <br>The return value is **-1** if no SIM card is detected.
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
   * Obtains the default ID of the SIM card used to send SMS messages. This API uses a promise to return the result.
   *
   * @returns { Promise<int> } Promise used to return the result.
   *     <br>The return value is bound to the SIM card and increases from 1.
   *     <br>The return value is **-1** if no SIM card is detected.
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
   * Get the SMS short code type of the destination address.
   *
   * @permission ohos.permission.SEND_MESSAGES
   * @param { int } slotId - Indicates the ID of the slot holding the SIM card for sending SMS messages.
   *     The value {@code 0} indicates card slot 1, and the value {@code 1} indicates card slot 2.
   * @param { string } destAddr - Indicates the destination address of the sending SMS.
   *     <br>Value range:[0,+∞)
   * @returns { Promise<SmsShortCodeType> } Returns the SMS short code type of the sending destination address.
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
   * Defines the MMS message information.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface MmsInformation {
    /**
     * Message type.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    messageType: MessageType;

    /**
     * PDU header type.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    mmsType: MmsSendReq | MmsSendConf | MmsNotificationInd | MmsRespInd | MmsRetrieveConf | MmsAcknowledgeInd | MmsDeliveryInd | MmsReadOrigInd | MmsReadRecInd;

    /**
     * Attachment.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    attachment?: Array<MmsAttachment>;
  }

  /**
   * Sends an MMS message. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SEND_MESSAGES
   * @param { Context } context - Application context.
   *     <br>For details about the application context of the FA model, see [Context]{@link ./app/context}.
   *     <br>For details about the application context of the stage model, see
   *     [Context]{@link ./application/UIAbilityContext:UIAbilityContext}.
   * @param { MmsParams } mmsParams - Parameters (including the callback) for sending MMS messages. For details, see
   *     [MmsParams]{@link sms.MmsParams}.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Sends an MMS message. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SEND_MESSAGES
   * @param { Context } context - Application context.
   *     <br>For details about the application context of the FA model, see [Context]{@link ./app/context}.
   *     <br>For details about the application context of the stage model, see
   *     [Context]{@link ./application/UIAbilityContext:UIAbilityContext}.
   * @param { MmsParams } mmsParams - Parameters (including the callback) for sending MMS messages. For details, see
   *     [MmsParams]{@link sms.MmsParams}.
   * @returns { Promise<void> } Promise used to return the result.
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
   * Downloads an MMS message. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.RECEIVE_MMS
   * @param { Context } context - Application context.
   *     <br>For details about the application context of the FA model, see [Context]{@link ./app/context}.
   *     <br>For details about the application context of the stage model, see
   *     [Context]{@link ./application/UIAbilityContext:UIAbilityContext}.
   * @param { MmsParams }  mmsParams - Parameters (including the callback) for downloading MMS messages. For details,
   *     see [MmsParams]{@link sms.MmsParams}.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Downloads an MMS message. This API uses a promise to return the result.
   *
   * @permission ohos.permission.RECEIVE_MMS
   * @param { Context } context - Application context.
   *     <br>For details about the application context of the FA model, see [Context]{@link ./app/context}.
   *     <br>For details about the application context of the stage model, see
   *     [Context]{@link ./application/UIAbilityContext:UIAbilityContext}.
   * @param { MmsParams }  mmsParams - Parameters (including the callback) for sending MMS messages. For details, see
   *     [MmsParams]{@link sms.MmsParams}.
   * @returns { Promise<void> } Promise used to return the result.
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
   * Defines the parameters for sending SMS messages.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export interface MmsParams {
    /**
     * Slot ID of the SIM card used for sending SMS messages.
     *
     * - **0**: card slot 1
     * - **1**: card slot 2
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    slotId: int;

    /**
     * MMSC address.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    mmsc: string;

    /**
     * MMS PDU address.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    data: string;

    /**
     * MMS configuration file. For details, see [MmsParams]{@link sms.MmsParams}.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    mmsConfig?: MmsConfig;
  }

  /**
   * MMS configuration file.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export interface MmsConfig {
    /**
     * User agent.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    userAgent: string;

    /**
     * User agent profile.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    userAgentProfile: string;
  }

  /**
   * Defines an MMS message sending request.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface MmsSendReq {
    /**
     * MMS message source.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    from: MmsAddress;

    /**
     * Transaction ID.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    transactionId: string;

    /**
     * Content type.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    contentType: string;

    /**
     * Version.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    version: MmsVersionType;

    /**
     * Destination address.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    to?: Array<MmsAddress>;

    /**
     * Date.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    date?: long;

    /**
     * Carbon copy.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    cc?: Array<MmsAddress>;

    /**
     * Blind carbon copy.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    bcc?: Array<MmsAddress>;

    /**
     * Subject.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    subject?: string;

    /**
     * Message class.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    messageClass?: int;

    /**
     * Expiration.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    expiry?: int;

    /**
     * Priority.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    priority?: MmsPriorityType;

    /**
     * Sender visibility.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    senderVisibility?: int;

    /**
     * Delivery report.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    deliveryReport?: int;

    /**
     * Read report.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    readReport?: int;
  }

  /**
   * Defines the MMS message sending configuration.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface MmsSendConf {
    /**
     * Response status.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    responseState: int;

    /**
     * Transaction ID.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    transactionId: string;

    /**
     * Version.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    version: MmsVersionType;

    /**
     * Message ID.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    messageId?: string;
  }

  /**
   * Defines an MMS notification index.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface MmsNotificationInd {
    /**
     * Transaction ID.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    transactionId: string;

    /**
     * Message class.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    messageClass: int;

    /**
     * Message size.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    messageSize: long;

    /**
     * Expiration.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    expiry: int;

    /**
     * Content location.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    contentLocation: string;

    /**
     * Version.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    version: MmsVersionType;

    /**
     * Source address.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    from?: MmsAddress;

    /**
     * Subject.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    subject?: string;

    /**
     * Status report.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    deliveryReport?: int;

    /**
     * Content class.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    contentClass?: int;
  }

  /**
   * Defines an MMS response index.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface MmsRespInd {
    /**
     * Event ID.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    transactionId: string;

    /**
     * Status.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    status: int;

    /**
     * Version.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    version: MmsVersionType;

    /**
     * Report allowed.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    reportAllowed?: ReportType;
  }

  /**
   * Defines the MMS message retrieval configuration.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface MmsRetrieveConf {
    /**
     * Transaction ID.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    transactionId: string;

    /**
     * Message ID.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    messageId: string;

    /**
     * Date.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    date: long;

    /**
     * Content type.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    contentType: string;

    /**
     * Destination address.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    to: Array<MmsAddress>;

    /**
     * Version.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    version: MmsVersionType;

    /**
     * Source address.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    from?: MmsAddress;

    /**
     * Carbon copy.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    cc?: Array<MmsAddress>;

    /**
     * Subject.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    subject?: string;

    /**
     * Priority.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    priority?: MmsPriorityType;

    /**
     * Status report.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    deliveryReport?: int;

    /**
     * Read report.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    readReport?: int;

    /**
     * Retrieval status.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    retrieveStatus?: int;

    /**
     * Retrieval text.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    retrieveText?: string;
  }

  /**
   * Defines an MMS confirmation index.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface MmsAcknowledgeInd {
    /**
     * Transaction ID.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    transactionId: string;

    /**
     * Version.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    version: MmsVersionType;

    /**
     * Report allowed.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    reportAllowed?: ReportType;
  }

  /**
   * Defines an MMS message delivery index.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface MmsDeliveryInd {
    /**
     * Message ID.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    messageId: string;

    /**
     * Date.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    date: long;

    /**
     * Destination address.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    to: Array<MmsAddress>;

    /**
     * Status.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    status: int;

    /**
     * Version.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    version: MmsVersionType;
  }

  /**
   * Defines the original MMS message reading index.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface MmsReadOrigInd {
    /**
     * Version.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    version: MmsVersionType;

    /**
     * Message ID.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    messageId: string;

    /**
     * Destination address.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    to: Array<MmsAddress>;

    /**
     * Source address.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    from: MmsAddress;

    /**
     * Date.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    date: long;

    /**
     * Read status.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    readStatus: int;
  }

  /**
   * Defines the MMS message reading index.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface MmsReadRecInd {
    /**
     * Version.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    version: MmsVersionType;

    /**
     * Message ID.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    messageId: string;

    /**
     * Destination address.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    to: Array<MmsAddress>;

    /**
     * Source address.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    from: MmsAddress;

    /**
     * Read status.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    readStatus: int;

    /**
     * Date.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    date?: long;
  }

  /**
   * Defines the attachment of an MMS message.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface MmsAttachment {
    /**
     * Content ID.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    contentId: string;

    /**
     * Content location.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    contentLocation: string;

    /**
     * Content disposition.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    contentDisposition: DispositionType;

    /**
     * Encoding for content transfer.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    contentTransferEncoding: string;

    /**
     * Content type.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    contentType: string;

    /**
     * Whether the synchronized multimedia integration language is used.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    isSmil: boolean;

    /**
     * Path.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    path?: string;

    /**
     * Whether the message is in the buffer.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    inBuff?: Array<int>;

    /**
     * File name.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    fileName?: string;

    /**
     * Character set.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    charset?: MmsCharSets;
  }

  /**
   * Defines an MMSC address.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface MmsAddress {
    /**
     * Network address.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    address: string;

    /**
     * Character set.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    charset: MmsCharSets;
  }

  /**
   * Message type.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum MessageType {
    /**
     * MMS message sending request.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TYPE_MMS_SEND_REQ = 128,

    /**
     * MMS message sending configuration.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TYPE_MMS_SEND_CONF = 129,

    /**
     * MMS notification index.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TYPE_MMS_NOTIFICATION_IND = 130,

    /**
     * MMS message response index.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TYPE_MMS_RESP_IND = 131,

    /**
     * MMS message retrieval configuration.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TYPE_MMS_RETRIEVE_CONF = 132,

    /**
     * MMS message acknowledgement index.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TYPE_MMS_ACKNOWLEDGE_IND = 133,

    /**
     * MMS message delivery index.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TYPE_MMS_DELIVERY_IND = 134,

    /**
     * MMS message reading and receiving index.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TYPE_MMS_READ_REC_IND = 135,

    /**
     * Original MMS message reading index.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TYPE_MMS_READ_ORIG_IND = 136
  }

  /**
   * Enumerates MMS message priorities.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum MmsPriorityType {
    /**
     * Low priority.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    MMS_LOW = 128,

    /**
     * Normal priority.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    MMS_NORMAL = 129,

    /**
     * High priority.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    MMS_HIGH = 130
  }

  /**
   * Enumerates MMS versions.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum MmsVersionType {
    /**
     * MMS version 1_0.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    MMS_VERSION_1_0 = 0x10,

    /**
     * MMS version 1_1.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    MMS_VERSION_1_1 = 0x11,

    /**
     * MMS version 1_2.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    MMS_VERSION_1_2 = 0x12,

    /**
     * MMS version 1_3.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    MMS_VERSION_1_3 = 0x13
  }

  /**
   * Enumerates MMS character sets.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum MmsCharSets {
    /**
     * BIG5 format.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    BIG5 = 0X07EA,

    /**
     * ISO_10646_UCS_2 format.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ISO_10646_UCS_2 = 0X03E8,

    /**
     * ISO_8859_1 format.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ISO_8859_1 = 0X04,

    /**
     * ISO_8859_2 format.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ISO_8859_2 = 0X05,

    /**
     * ISO_8859_3 format.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ISO_8859_3 = 0X06,

    /**
     * ISO_8859_4 format.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ISO_8859_4 = 0X07,

    /**
     * ISO_8859_5 format.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ISO_8859_5 = 0X08,

    /**
     * ISO_8859_6 format.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ISO_8859_6 = 0X09,

    /**
     * ISO_8859_7 format.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ISO_8859_7 = 0X0a,

    /**
     * ISO_8859_8 format.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ISO_8859_8 = 0X0b,

    /**
     * ISO_8859_9 format.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ISO_8859_9 = 0X0c,

    /**
     * SHIFT_JIS format.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    SHIFT_JIS = 0X11,

    /**
     * US_ASCII format.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    US_ASCII = 0X03,

    /**
     * UTF_8 format.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    UTF_8 = 0X6A
  }

  /**
   * Enumerates disposition types.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum DispositionType {
    /**
     * Data source.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FROM_DATA = 0,

    /**
     * Attachment.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ATTACHMENT = 1,

    /**
     * Inlining.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    INLINE = 2
  }

  /**
   * Enumerates report types.
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
   * Defines the cell broadcast configuration options.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export interface CBConfigOptions {
    /**
     * Card slot ID.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    slotId: int;

    /**
     * Whether to enable cell broadcast.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    enable: boolean;

    /**
     * Start message ID.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    startMessageId: int;

    /**
     * End message ID.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    endMessageId: int;

    /**
     * RAN type.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    ranType: RanType;
  }

  /**
   * Defines the cell broadcast configuration list configs.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 23 dynamic&static
   */
  export interface CBConfigListConfigs {
    /**
     * Indicates the card slot ID for the cell broadcast configuration list configs.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 23 dynamic&static
     */
    slotId: int;

    /**
     * Indicates the messageIDs for the cell broadcast configuration list configs.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 23 dynamic&static
     */
    messageIds: int[];

    /**
     * Indicates the RAN type for the cell broadcast configuration list configs.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 23 dynamic&static
     */
    ranType: RanType;
  }

  /**
   * Defines the SIM message options.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export interface SimMessageOptions {
    /**
     * Card slot ID.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    slotId: int;

    /**
     * Short message service center.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    smsc: string;

    /**
     * Protocol data unit.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    pdu: string;

    /**
     * Status.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    status: SimMessageStatus;
  }

  /**
   * Defines the updating SIM message options.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export interface UpdateSimMessageOptions {
    /**
     * Card slot ID.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    slotId: int;

    /**
     * Message index.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    msgIndex: int;

    /**
     * New status.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    newStatus: SimMessageStatus;

    /**
     * Protocol data unit.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    pdu: string;

    /**
     * Short message service center.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    smsc: string;
  }

  /**
   * Defines an SMS message instance.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @since 6 dynamic
   * @since 23 static
   */
  export interface ShortMessage {
    /**
     * SMS message body.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    visibleMessageBody: string;

    /**
     * Sender address.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    visibleRawAddress: string;

    /**
     * Enumerates SMS message types.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    messageClass: ShortMessageClass;

    /**
     * Protocol identifier used for delivering the SMS message.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    protocolId: int;

    /**
     * SMSC address.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    scAddress: string;

    /**
     * SMSC timestamp.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    scTimestamp: long;

    /**
     * Whether the received SMS message is a **replace short message**. The default value is **false**.
     *
     * - **true**: yes
     * - **false**: no
     *
     * For details, see [3GPP TS 23.040 9.2.3.9](https://www.3gpp.org/ftp/specs/archive/23_series/23.040).
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    isReplaceMessage: boolean;

    /**
     * Whether the received SMS contains **TP-Reply-Path**. The default value is **false**.
     *
     * - **true**: yes
     * - **false**: no
     *
     * **TP-Reply-Path**: The device returns a response based on the SMSC that sends the SMS message.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    hasReplyPath: boolean;

    /**
     * PDU in the SMS message.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    pdu: Array<int>;

    /**
     * SMS message status sent by the SMSC in the **SMS-STATUS-REPORT** message.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    status: int;

    /**
     * Whether the received SMS message is an SMS delivery report. The default value is **false**.
     *
     * - **true**: yes
     * - **false**: no
     *
     * SMS delivery report: a message sent from the SMSC to show the current status of the SMS message you delivered.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    isSmsStatusReportMessage: boolean;
  }

  /**
   * Defines a SIM message.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export interface SimShortMessage {
    /**
     * SMS message.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    shortMessage: ShortMessage;

    /**
     * SIM message status.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    simMessageStatus: SimMessageStatus;

    /**
     * SIM card index.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    indexOnSim: int;
  }

  /**
   * Defines the SIM message status.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export enum SimMessageStatus {
    /**
     * Free space state of the SIM card.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    SIM_MESSAGE_STATUS_FREE = 0,

    /**
     * Read state.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    SIM_MESSAGE_STATUS_READ = 1,

    /**
     * Unread state.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    SIM_MESSAGE_STATUS_UNREAD = 3,

    /**
     * Storage of sent messages (applicable only to SMS).
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    SIM_MESSAGE_STATUS_SENT = 5,

    /**
     * Storage of unsent messages (applicable only to SMS).
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    SIM_MESSAGE_STATUS_UNSENT = 7
  }

  /**
   * Enumerates SMS message types.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @since 6 dynamic
   * @since 23 static
   */
  export enum ShortMessageClass {
    /**
     * Unknown type.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    UNKNOWN = 0,

    /**
     * Instant message, which is displayed immediately after being received.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    INSTANT_MESSAGE = 1,

    /**
     * Message stored in the device or SIM card.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    OPTIONAL_MESSAGE = 2,

    /**
     * Message containing SIM card information, which is to be stored in the SIM card.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    SIM_MESSAGE = 3,

    /**
     * Message to be forwarded to another device.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    FORWARD_MESSAGE = 4
  }

  /**
   * Provides the options (including callbacks) for sending SMS messages. For example, you can specify the SMS message
   * type by the optional parameter **content**.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @since 6 dynamic
   * @since 23 static
   */
  export interface SendMessageOptions {
    /**
     * Slot ID of the SIM card used for sending SMS messages.
     *
     * - **0**: card slot 1.
     * - **1**: card slot 2
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    slotId: int;

    /**
     * Destination address of the SMS message.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    destinationHost: string;

    /**
     * SMSC address. By default, the SMSC address in the SIM card is used.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    serviceCenter?: string;

    /**
     * SMS message type. If the content is composed of character strings, the SMS message is a text message. If the
     * content is composed of byte arrays, the SMS message is a data message.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    content: string | Array<int>;

    /**
     * Destination port of the SMS message. This field is mandatory only for a data message. Otherwise, it is optional.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    destinationPort?: int;

    /**
     * Callback used to return the SMS message sending result. For details, see
     * [ISendShortMessageCallback]{@link sms.ISendShortMessageCallback}. This parameter is mandatory for sending an SMS
     * message.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    sendCallback?: AsyncCallback<ISendShortMessageCallback>;

    /**
     * Callback used to return the SMS message delivery report. For details, see
     * [IDeliveryShortMessageCallback]{@link sms.IDeliveryShortMessageCallback}. This parameter is mandatory for sending
     * an SMS message.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    deliveryCallback?: AsyncCallback<IDeliveryShortMessageCallback>;
  }

  /**
   * Provides the callback for the SMS message sending result. It consists of three parts: SMS message sending result,
   * URI for storing the sent SMS message, and whether the SMS message is the last part of a long SMS message.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @since 6 dynamic
   * @since 23 static
   */
  export interface ISendShortMessageCallback {
    /**
     * SMS message sending result.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    result: SendSmsResult;

    /**
     * URI for storing the sent SMS message.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    url: string;

    /**
     * Whether this SMS message is the last part of a long SMS message. The default value is **false**.
     *
     * - **true**: yes
     * - **false**: no
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    isLastPart: boolean;
  }

  /**
   * Provides the callback for the SMS message delivery report.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @since 6 dynamic
   * @since 23 static
   */
  export interface IDeliveryShortMessageCallback {
    /**
     * SMS message delivery report.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    pdu: Array<int>;
  }

  /**
   * Enumerates SMS message sending results.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @since 6 dynamic
   * @since 23 static
   */
  export enum SendSmsResult {
    /**
     * The SMS message is sent successfully.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    SEND_SMS_SUCCESS = 0,

    /**
     * Failed to send the SMS message due to an unknown reason.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    SEND_SMS_FAILURE_UNKNOWN = 1,

    /**
     * Failed to send the SMS message because the modem is shut down.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    SEND_SMS_FAILURE_RADIO_OFF = 2,

    /**
     * Failed to send the SMS message because the network is unavailable or SMS message sending or receiving is not
     * supported.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @since 6 dynamic
     * @since 23 static
     */
    SEND_SMS_FAILURE_SERVICE_UNAVAILABLE = 3
  }

  /**
   * RAN type.
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
   * Defines the SMS message segment information.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface SmsSegmentsInfo {
    /**
     * Split count.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    splitCount: int;

    /**
     * Encoding count.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    encodeCount: int;

    /**
     * Remaining encoding count.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    encodeCountRemaining: int;

    /**
     * Encoding scheme.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    scheme: SmsEncodingScheme;
  }

  /**
   * Enumerates SMS encoding schemes.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum SmsEncodingScheme {
    /**
     * Unknown code.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    SMS_ENCODING_UNKNOWN = 0,

    /**
     * 7-digit code.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    SMS_ENCODING_7BIT = 1,

    /**
     * 8-digit code.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    SMS_ENCODING_8BIT = 2,

    /**
     * 16-digit code.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    SMS_ENCODING_16BIT = 3
  }

  /**
   * Enumerates SMS short code types.
   *
   * @syscap SystemCapability.Telephony.SmsMms
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  export enum SmsShortCodeType {
    /**
     * Indicates an unknown SMS short code type.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 23 dynamic&static
     */
    SMS_SHORT_CODE_TYPE_UNKNOWN = -1,

    /**
     * Indicates a not premium SMS short code type.
     *
     * @syscap SystemCapability.Telephony.SmsMms
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 23 dynamic&static
     */
    SMS_SHORT_CODE_TYPE_NOT_PREMIUM = 0,

    /**
     * Indicates a possible premium SMS short code type.
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