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
 * @file Call
 * @kit TelephonyKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type Context from './application/BaseContext';
import type image from './@ohos.multimedia.image';

/**
 * The **call** module provides call management functions, including making calls, redirecting to the dial screen,
 * obtaining the call status, and formatting phone numbers.
 *
 * To subscribe to call status changes, use
 * [`observer.on('callStateChange')`]{@link @ohos.telephony.observer:observer.on(type: 'callStateChange', callback: Callback<CallStateInfo>)}.
 *
 * @syscap SystemCapability.Telephony.CallManager
 * @atomicservice [since 11]
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace call {
  /**
   * Initiates a call. You can set call options as needed. This API uses an asynchronous callback to return the result.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 6 and deprecated since API version 9. The substitute API is available
   * > only for system applications.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { string } phoneNumber - Phone number.
   * @param { DialOptions } options - Call option, which indicates whether the call is a voice call or video call.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** indicates that
   *     the operation is successful, and the value **false** indicates the opposite.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead telephony.call#dialCall
   */
  function dial(phoneNumber: string, options: DialOptions, callback: AsyncCallback<boolean>): void;

  /**
   * Initiates a call. You can set call options as needed. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 6 and deprecated since API version 9. The substitute API is available
   * > only for system applications.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { string } phoneNumber - Phone number.
   * @param { DialOptions } options - Call option, which indicates whether the call is a voice call or video call.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the operation is
   *     successful, and the value **false** indicates the opposite.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead telephony.call#dialCall
   */
  function dial(phoneNumber: string, options?: DialOptions): Promise<boolean>;

  /**
   * Initiates a call. This API uses an asynchronous callback to return the result.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 6 and deprecated since API version 9. The substitute API is available
   * > only for system applications.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { string } phoneNumber - Phone number.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** indicates that
   *     the operation is successful, and the value **false** indicates the opposite.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead telephony.call#dialCall
   */
  function dial(phoneNumber: string, callback: AsyncCallback<boolean>): void;

  /**
   * Initiates a call. You can set call options as needed. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { string } phoneNumber - Phone number.
   * @param { DialCallOptions } options - Call options, which carry other configuration information of the call.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300005 - Airplane mode is on.
   * @throws { BusinessError } 8300006 - Network not in service.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function dialCall(phoneNumber: string, options: DialCallOptions, callback: AsyncCallback<void>): void;

  /**
   * Initiates a call. You can set call options as needed. This API uses a promise to return the result.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { string } phoneNumber - Phone number.
   * @param { DialCallOptions } options - Call options, which carry other configuration information of the call.
   *     <br>If this field is not set, the following configuration is used by default. For details, see
   *     [DialCallOptions]{@link call.DialCallOptions}.
   *     <br>- **accountId**: 0 (card slot 1)
   *     <br>- **videoState**: voice call
   *     <br>- **dialScene**: common call
   *     <br>- **dialType**: carrier call
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300005 - Airplane mode is on.
   * @throws { BusinessError } 8300006 - Network not in service.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function dialCall(phoneNumber: string, options?: DialCallOptions): Promise<void>;

  /**
   * Initiates a call. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { string } phoneNumber - Phone number.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300005 - Airplane mode is on.
   * @throws { BusinessError } 8300006 - Network not in service.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function dialCall(phoneNumber: string, callback: AsyncCallback<void>): void;

  /**
   * Launches the call screen and displays the dialed number. This API uses an asynchronous callback to return the
   * result. This API can be called only in a UIAbility.
   *
   * @param { string } phoneNumber - Phone number.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Applications.Contacts
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  function makeCall(phoneNumber: string, callback: AsyncCallback<void>): void;

  /**
   * Launches the call screen and displays the dialed number. This API uses a promise to return the result. This API can
   * be called only in a UIAbility.
   *
   * @param { string } phoneNumber - Phone number.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Applications.Contacts
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  function makeCall(phoneNumber: string): Promise<void>;

  /**
   * Launches the call screen and displays the dialed number. This API uses a promise to return the result. This API can
   * be called only in a UIAbility.
   *
   * @param { string } phoneNumber - Phone number.
   * @param { MakeCallOptions } [options] - Call options.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Applications.Contacts
   * @FaAndStageModel
   * @atomicservice
   * @since 24 dynamic
   */
  function makeCall(phoneNumber: string, options?: MakeCallOptions): Promise<void>;

  /**
   * Launches the call screen and displays the dialed number. This API uses a promise to return the result. You need to
   * declare the **ohos.permission.START_ABILITIES_FROM_BACKGROUND** permission if you want to call the API in the
   * background.
   *
   * @param { Context } context - Application context.
   * @param { string } phoneNumber - Phone number.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Applications.Contacts
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function makeCall(context: Context, phoneNumber: string): Promise<void>;

  /**
   * Go to the dial screen and the called number is displayed.The authentication challenge value is returned.
   *
   * @param { string } phoneNumber - Indicates the called number.
   * @param { MakeCallOptions } [options] - Indicates additional information carried in the call.
   * @returns { Promise<string> } Promise used to return access token by the makeCall.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Applications.Contacts
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function makeCallWithToken(phoneNumber: string, options?: MakeCallOptions): Promise<string>;

  /**
   * Checks whether a call is in progress. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** indicates that
   *     a call is in progress, and the value **false** indicates the opposite.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 6 dynamic
   * @since 23 static
   */
  function hasCall(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether a call is in progress. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that a call is in
   *     progress, and the value **false** indicates the opposite.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 6 dynamic
   * @since 23 static
   */
  function hasCall(): Promise<boolean>;

  /**
   * Checks whether a call is in progress.
   *
   * @returns { boolean } Promise used to return the result. The value **true** indicates that a call is in progress,
   *     and the value **false** indicates the opposite.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 10 dynamic
   * @since 23 static
   */
  function hasCallSync(): boolean;

  /**
   * Obtains the call status. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<CallState> } callback - Callback used to return the result.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 6 dynamic
   * @since 23 static
   */
  function getCallState(callback: AsyncCallback<CallState>): void;

  /**
   * Obtains the call status. This API uses a promise to return the result.
   *
   * @returns { Promise<CallState> } Promise used to return the result.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 6 dynamic
   * @since 23 static
   */
  function getCallState(): Promise<CallState>;

  /**
   * Obtains the call status.
   *
   * @returns { CallState } Promise used to return the result.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 10 dynamic
   * @since 23 static
   */
  function getCallStateSync(): CallState;

  /**
   * Mutes the ringtone while it is playing. It does not work if the ringtone has been muted. This API uses an
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function muteRinger(callback: AsyncCallback<void>): void;

  /**
   * Mutes the ringtone while it is playing. It does not work if the ringtone has been muted. This API uses a promise to
   * return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function muteRinger(): Promise<void>;

  /**
   * Checks whether a device supports voice calls.
   *
   * @returns { boolean } Result indicating whether the device supports voice calls. The value **true** indicates yes,
   *     and the value **false** indicates no.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 7 dynamic
   * @since 23 static
   */
  function hasVoiceCapability(): boolean;

  /**
   * Checks whether the called number is an emergency number based on the phone number. This API uses an asynchronous
   * callback to return the result.
   *
   * @param { string } phoneNumber - Phone number.
   * @param { EmergencyNumberOptions } options - Emergency number options.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** indicates that
   *     the called number is an emergency number, and the value **false** indicates the opposite.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 7 dynamic
   * @since 23 static
   */
  function isEmergencyPhoneNumber(phoneNumber: string, options: EmergencyNumberOptions, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the called number is an emergency number based on the phone number. This API uses a promise to
   * return the result.
   *
   * @param { string } phoneNumber - Phone number.
   * @param { EmergencyNumberOptions } options - Emergency number options.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the called
   *     number is an emergency number, and the value **false** indicates the opposite.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 7 dynamic
   * @since 23 static
   */
  function isEmergencyPhoneNumber(phoneNumber: string, options?: EmergencyNumberOptions): Promise<boolean>;

  /**
   * Checks whether the called number is an emergency number. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { string } phoneNumber - Phone number.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** indicates that
   *     the called number is an emergency number, and the value **false** indicates the opposite.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 7 dynamic
   * @since 23 static
   */
  function isEmergencyPhoneNumber(phoneNumber: string, callback: AsyncCallback<boolean>): void;

  /**
   * Formats a phone number based on specified formatting options. This API uses an asynchronous callback to return the
   * result.
   *
   * A formatted phone number is a standard numeric string, for example, 555 0100.
   *
   * @param { string } phoneNumber - Phone number.
   * @param { NumberFormatOptions } options - Number formatting options, for example, country code.
   * @param { AsyncCallback<string> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 7 dynamic
   * @since 23 static
   */
  function formatPhoneNumber(phoneNumber: string, options: NumberFormatOptions, callback: AsyncCallback<string>): void;

  /**
   * Formats a phone number based on specified formatting options. This API uses a promise to return the result.
   *
   * A formatted phone number is a standard numeric string, for example, 555 0100.
   *
   * @param { string } phoneNumber - Phone number.
   * @param { NumberFormatOptions } options - Number formatting options, for example, country code.
   * @returns { Promise<string> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 7 dynamic
   * @since 23 static
   */
  function formatPhoneNumber(phoneNumber: string, options?: NumberFormatOptions): Promise<string>;

  /**
   * Formats a phone number. This API uses an asynchronous callback to return the result.
   *
   * A formatted phone number is a standard numeric string, for example, 555 0100.
   *
   * @param { string } phoneNumber - Phone number.
   * @param { AsyncCallback<string> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 7 dynamic
   * @since 23 static
   */
  function formatPhoneNumber(phoneNumber: string, callback: AsyncCallback<string>): void;

  /**
   * Converts a phone number into the E.164 format. This API uses an asynchronous callback to return the result.
   *
   * The phone number must match the specified country code. For example, for a China phone number, the country code
   * must be **CN**. Otherwise, **null** will be returned.
   *
   * @param { string } phoneNumber - Phone number.
   * @param { string } countryCode - Country code, for example, **CN** (China). All country codes are supported.
   * @param { AsyncCallback<string> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 7 dynamic
   * @since 23 static
   */
  function formatPhoneNumberToE164(phoneNumber: string, countryCode: string, callback: AsyncCallback<string>): void;

  /**
   * Converts a phone number into the E.164 format. This API uses a promise to return the result.
   *
   * The phone number must match the specified country code. For example, for a China phone number, the country code
   * must be **CN**. Otherwise, **null** will be returned.
   *
   * All country codes are supported.
   *
   * @param { string } phoneNumber - Phone number.
   * @param { string } countryCode - Country code, for example, **CN** (China). All country codes are supported.
   * @returns { Promise<string> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @since 7 dynamic
   * @since 23 static
   */
  function formatPhoneNumberToE164(phoneNumber: string, countryCode: string): Promise<string>;

  /**
   * Answers a call. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - Call ID. You can obtain the value by subscribing to **callDetailsChange** events.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function answerCall(callId: int, callback: AsyncCallback<void>): void;

  /**
   * Answers a call. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - Call ID. You can obtain the value by subscribing to **callDetailsChange** events. This
   *     field is optional from API version 9.
   *     <br>If this field is not set, the latest ringing call will be connected.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function answerCall(callId?: int): Promise<void>;

  /**
   * Answers a call. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ANSWER_CALL or ohos.permission.MANAGE_CALL_FOR_DEVICES
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the call is answered successfully,
   *     the value of **err** is **undefined**. Otherwise, the value is an error object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs. [since 9 - 22]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi [since 9 - 22]
   * @publicapi [since 23]
   * @since 9 dynamic
   * @since 23 static
   */
  function answerCall(callback: AsyncCallback<void>): void;

  /**
   * Answers a call. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { VideoStateType } videoState - Video state.
   * @param { int } callId - Call ID. You can obtain the value by subscribing to **callDetailsChange** events.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function answerCall(videoState: VideoStateType, callId: int): Promise<void>;

  /**
   * Answers the incoming rtt
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { VideoStateType } videoState - Indicates the answer the call with video or voice.
   * @param { int } callId - Indicates the identifier of the call to answer.
   * @param { boolean } isRtt - Indicates the call is rtt or not.
   * @returns { Promise<void> } The promise returned by the answerCall.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8400001 - Invalid parameter value.
   * @throws { BusinessError } 8400002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8400003 - System internal error.
   * @throws { BusinessError } 8400999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  function answerCall(videoState: VideoStateType, callId: int, isRtt: boolean): Promise<void>;

  /**
   * Ends a call. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ANSWER_CALL or ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Call ID. You can obtain the value by subscribing to **callDetailsChange** events.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function hangUpCall(callId: int, callback: AsyncCallback<void>): void;

  /**
   * Ends a call. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ANSWER_CALL or ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Call ID. You can obtain the value by subscribing to **callDetailsChange** events. This
   *     field is optional from API version 9.
   *     <br>If this field is not set, the latest ongoing, dialed, or connected call will be ended.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function hangUpCall(callId?: int): Promise<void>;

  /**
   * Ends a call. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ANSWER_CALL or ohos.permission.SET_TELEPHONY_STATE or
   *     ohos.permission.MANAGE_CALL_FOR_DEVICES
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the call is hung up successfully,
   *     the value of **err** is **undefined**. Otherwise, the value is an error object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs. [since 9 - 22]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi [since 9 - 22]
   * @publicapi [since 23]
   * @since 9 dynamic
   * @since 23 static
   */
  function hangUpCall(callback: AsyncCallback<void>): void;

  /**
   * Rejects a call. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - Call ID. You can obtain the value by subscribing to **callDetailsChange** events.
   * @param { RejectMessageOptions } options - Options for the call rejection message.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function rejectCall(callId: int, options: RejectMessageOptions, callback: AsyncCallback<void>): void;

  /**
   * Rejects a call. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - Call ID. You can obtain the value by subscribing to **callDetailsChange** events. This
   *     field is optional from API version 9.
   *     <br>If this field is not set, the latest ringing call will be rejected.
   * @param { RejectMessageOptions } options - Options for the call rejection message. If this field is not set, no call
   *     rejection message will be sent.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function rejectCall(callId?: int, options?: RejectMessageOptions): Promise<void>;

  /**
   * Rejects a call. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - Call ID. You can obtain the value by subscribing to **callDetailsChange** events.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function rejectCall(callId: int, callback: AsyncCallback<void>): void;

  /**
   * Rejects a call. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ANSWER_CALL or ohos.permission.MANAGE_CALL_FOR_DEVICES
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the call is rejected successfully,
   *     the value of **err** is **undefined**. Otherwise, the value is an error object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs. [since 9 - 22]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi [since 9 - 22]
   * @publicapi [since 23]
   * @since 9 dynamic
   * @since 23 static
   */
  function rejectCall(callback: AsyncCallback<void>): void;

  /**
   * Rejects a call. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { RejectMessageOptions } options - Options for the call rejection message.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function rejectCall(options: RejectMessageOptions, callback: AsyncCallback<void>): void;

  /**
   * Holds a call based on the specified call ID. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - Call ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function holdCall(callId: int, callback: AsyncCallback<void>): void;

  /**
   * Holds a call based on the specified call ID. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - Call ID.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function holdCall(callId: int): Promise<void>;

  /**
   * Unholds a call based on the specified call ID. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - Call ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function unHoldCall(callId: int, callback: AsyncCallback<void>): void;

  /**
   * Unholds a call based on the specified call ID. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - Call ID.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function unHoldCall(callId: int): Promise<void>;

  /**
   * Switches a call. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - Call ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function switchCall(callId: int, callback: AsyncCallback<void>): void;

  /**
   * Switches a call. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - Call ID.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function switchCall(callId: int): Promise<void>;

  /**
   * Combines two calls into a conference call. This API uses an asynchronous callback to return the result.
   *
   * @param { int } callId - Call ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300007 - The number of conference calls exceeds the limit.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function combineConference(callId: int, callback: AsyncCallback<void>): void;

  /**
   * Combines two calls into a conference call. This API uses a promise to return the result.
   *
   * @param { int } callId - Call ID.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300007 - The number of conference calls exceeds the limit.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function combineConference(callId: int): Promise<void>;

  /**
   * Obtains the main call ID. This API uses an asynchronous callback to return the result.
   *
   * @param { int } callId - Call ID.
   * @param { AsyncCallback<int> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function getMainCallId(callId: int, callback: AsyncCallback<int>): void;

  /**
   * Obtains the main call ID. This API uses a promise to return the result.
   *
   * @param { int } callId - Call ID.
   * @returns { Promise<int> } Promise used to return the result.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function getMainCallId(callId: int): Promise<int>;

  /**
   * Obtains the list of subcall IDs. This API uses an asynchronous callback to return the result.
   *
   * @param { int } callId - Call ID.
   * @param { AsyncCallback<Array<string>> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function getSubCallIdList(callId: int, callback: AsyncCallback<Array<string>>): void;

  /**
   * Obtains the list of subcall IDs. This API uses a promise to return the result.
   *
   * @param { int } callId - Call ID.
   * @returns { Promise<Array<string>> } Promise used to return the result.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function getSubCallIdList(callId: int): Promise<Array<string>>;

  /**
   * Obtains the list of call IDs in a conference. This API uses an asynchronous callback to return the result.
   *
   * @param { int } callId - Call ID.
   * @param { AsyncCallback<Array<string>> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function getCallIdListForConference(callId: int, callback: AsyncCallback<Array<string>>): void;

  /**
   * Obtains the list of call IDs in a conference. This API uses a promise to return the result.
   *
   * @param { int } callId - Call ID.
   * @returns { Promise<Array<string>> } Promise used to return the result.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function getCallIdListForConference(callId: int): Promise<Array<string>>;

  /**
   * Obtains the call waiting status. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @param { AsyncCallback<CallWaitingStatus> } callback - Callback used to return the result.
   *     <br>The value can be:
   *     <br>- **0**: Call waiting is disabled.
   *     <br>- **1**: Call waiting is enabled.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function getCallWaitingStatus(slotId: int, callback: AsyncCallback<CallWaitingStatus>): void;

  /**
   * Obtains the call waiting status. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @returns { Promise<CallWaitingStatus> } Promise used to return the result.
   *     <br>- **0**: Call waiting is disabled.
   *     <br>- **1**: Call waiting is enabled.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function getCallWaitingStatus(slotId: int): Promise<CallWaitingStatus>;

  /**
   * Specifies whether to enable the call waiting service. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @param { boolean } activate - Whether to enable call waiting.
   *     <br>- **false**: Disable call waiting.
   *     <br>- **true**: Enable call waiting.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function setCallWaiting(slotId: int, activate: boolean, callback: AsyncCallback<void>): void;

  /**
   * Specifies whether to enable the call waiting service. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @param { boolean } activate - Whether to enable call waiting.
   *     <br>- **false**: Disable call waiting.
   *     <br>- **true**: Enable call waiting.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function setCallWaiting(slotId: int, activate: boolean): Promise<void>;

  /**
   * Obtains call transfer information with the phone number. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_CALL_TRANSFER_INFO
   * @param { CallTransferType } type - Type of call forwarding to be obtained.
   * @param { string } number - Number used to obtain the call forwarding status.
   * @returns { Promise<CallTransferResult> } Promise used to return the call forwarding result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8401002 - Invalid input call number.
   * @throws { BusinessError } 8401003 - Operation too frequent.
   * @syscap SystemCapability.Telephony.CallManager
   * @FaAndStageModel
   * @since 26.0.0 dynamic&static
   */
  function getCallTransferInfo(type: CallTransferType, number: string): Promise<CallTransferResult>;

  /**
   * Starts playing DTMF tones. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Call ID.
   * @param { string } character - DTMF string.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function startDTMF(callId: int, character: string, callback: AsyncCallback<void>): void;

  /**
   * Starts playing DTMF tones. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Call ID.
   * @param { string } character - DTMF string.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function startDTMF(callId: int, character: string): Promise<void>;

  /**
   * Stops playing DTMF tones. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Call ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function stopDTMF(callId: int, callback: AsyncCallback<void>): void;

  /**
   * Stops playing DTMF tones. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Call ID.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function stopDTMF(callId: int): Promise<void>;

  /**
   * Continues a call by playing a post-dial DTMF string. This API uses an asynchronous callback to return the result.
   *
   * If the called number is in the format of "common phone number + semicolon (;) + DTMF string", for example,
   * **400xxxxxxx;123**, and the listening for **postDialDelay** events is enabled, the system reports a
   * **postDialDelay** event when the call is connected. The application can then call this API to send DTMF tones.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Call ID.
   * @param { boolean } proceed - Whether to send DTMF tones. The default value is **false**.
   *     <br>- **true**: yes
   *     <br>- **false**: no
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function postDialProceed(callId: int, proceed: boolean, callback: AsyncCallback<void>): void;

  /**
   * Continues a call by playing a post-dial DTMF string. This API uses a promise to return the result.
   *
   * If the called number is in the format of "common phone number + semicolon (;) + DTMF string", for example,
   * **400xxxxxxx;123**, and the listening for **postDialDelay** events is enabled, the system reports a
   * **postDialDelay** event when the call is connected. The application can then call this API to send DTMF tones.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Call ID.
   * @param { boolean } proceed - Whether to send DTMF tones. The default value is **false**.
   *     <br>- **true**: yes
   *     <br>- **false**: no
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function postDialProceed(callId: int, proceed: boolean): Promise<void>;

  /**
   * Checks whether a call is an emergency call. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { AsyncCallback<boolean> } callback - Callback function used to return the result. The value **true**
   *     indicates an emergency call, and the value **false** indicates a non-emergency call.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function isInEmergencyCall(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether a call is an emergency call. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates an emergency call,
   *     and the value false indicates a non-emergency call.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function isInEmergencyCall(): Promise<boolean>;

  /**
   * Subscribes to **callDetailsChange** events. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'callDetailsChange' } type - Call event change. This field has a fixed value of **callDetailsChange**.
   * @param { Callback<CallAttributeOptions> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   */
  function on(type: 'callDetailsChange', callback: Callback<CallAttributeOptions>): void;

  /**
   * Unsubscribes from **callDetailsChange** events. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'callDetailsChange' } type - Call details change. This field has a fixed value of **callDetailsChange**.
   * @param { Callback<CallAttributeOptions> } callback - Callback used to return the result. If this field is not set,
   *     no subscription cancellation result will be received.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   */
  function off(type: 'callDetailsChange', callback?: Callback<CallAttributeOptions>): void;

  /**
   * Subscribes to **callEventChange** events. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'callEventChange' } type - Call event change. This field has a fixed value of **callEventChange**.
   * @param { Callback<CallEventOptions> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   */
  function on(type: 'callEventChange', callback: Callback<CallEventOptions>): void;

  /**
   * Unsubscribes from **callEventChange** events. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'callEventChange' } type - Call event change. This field has a fixed value of **callEventChange**.
   * @param { Callback<CallEventOptions> } callback - Callback used to return the result. If this field is not set, no
   *     subscription cancellation result will be received.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   */
  function off(type: 'callEventChange', callback?: Callback<CallEventOptions>): void;

  /**
   * Subscribes to **callDisconnectedCause** events. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'callDisconnectedCause' } type - Call disconnection cause. This field has a fixed value of
   *     **callDisconnectedCause**.
   * @param { Callback<DisconnectedDetails> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   */
  function on(type: 'callDisconnectedCause', callback: Callback<DisconnectedDetails>): void;

  /**
   * Unsubscribes from **callDisconnectedCause** events. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'callDisconnectedCause' } type - Call disconnection cause. This field has a fixed value of
   *     **callDisconnectedCause**.
   * @param { Callback<DisconnectedDetails> } callback - Callback used to return the result. If this field is not set,
   *     no subscription cancellation result will be received.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   */
  function off(type: 'callDisconnectedCause', callback?: Callback<DisconnectedDetails>): void;

  /**
   * Subscribes to **mmiCodeResult** events. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'mmiCodeResult' } type - MMI code result. This field has a fixed value of **mmiCodeResult**.
   * @param { Callback<MmiCodeResults> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function on(type: 'mmiCodeResult', callback: Callback<MmiCodeResults>): void;

  /**
   * Unsubscribes from **mmiCodeResult** events. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'mmiCodeResult' } type - MMI code result. This field has a fixed value of **mmiCodeResult**.
   * @param { Callback<MmiCodeResults> } callback - Callback used to return the result. If this field is not set, no
   *     subscription cancellation result will be received.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function off(type: 'mmiCodeResult', callback?: Callback<MmiCodeResults>): void;

  /**
   * Subscribes to audio device change events. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'audioDeviceChange' } type - Audio device change. This field has a fixed value of **audioDeviceChange**.
   * @param { Callback<AudioDeviceCallbackInfo> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'audioDeviceChange', callback: Callback<AudioDeviceCallbackInfo>): void;

  /**
   * Unsubscribes from **audioDeviceChange** events. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'audioDeviceChange' } type - Audio device change. This field has a fixed value of **audioDeviceChange**.
   * @param { Callback<AudioDeviceCallbackInfo> } callback - Callback used to return the result. If this field is not
   *     set, no subscription cancellation result will be received.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'audioDeviceChange', callback?: Callback<AudioDeviceCallbackInfo>): void;

  /**
   * Subscribes to **postDialDelay** events. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'postDialDelay' } type - Post-dial delay. This field has a fixed value of **postDialDelay**.
   * @param { Callback<string> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function on(type: 'postDialDelay', callback: Callback<string>): void;

  /**
   * Unsubscribes from **postDialDelay** events. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'postDialDelay' } type - Post-dial delay. This field has a fixed value of **postDialDelay**.
   * @param { Callback<string> } callback - Callback used to return the result. If this field is not set, no
   *     subscription cancellation result will be received.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function off(type: 'postDialDelay', callback?: Callback<string>): void;

  /**
   * Subscribe to the rtt message event.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { Callback<RttMessageInfo> } callback - Indicates the callback for getting the rtt message.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8400001 - Invalid parameter value.
   * @throws { BusinessError } 8400002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8400003 - System internal error.
   * @throws { BusinessError } 8400999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  function onReceiveRttMessage(callback: Callback<RttMessageInfo>): void;

  /**
   * Unsubscribe from the  rtt message event.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { Callback<RttMessageInfo> } [callback] - Indicates the callback for getting the rtt message.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8400001 - Invalid parameter value.
   * @throws { BusinessError } 8400002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8400003 - System internal error.
   * @throws { BusinessError } 8400999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  function offReceiveRttMessage(callback?: Callback<RttMessageInfo>): void;

  /**
   * Subscribe to the rtt modify indication.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { Callback<RttEventInfo> } callback - Indicates the callback for getting the rtt event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8400001 - Invalid parameter value.
   * @throws { BusinessError } 8400002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8400003 - System internal error.
   * @throws { BusinessError } 8400999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  function onRttModifyInd(callback: Callback<RttEventInfo>): void;

  /**
   * Unsubscribe from the rtt modify indication.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { Callback<RttEventInfo> } [callback] - Indicates the callback for getting the rtt event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8400001 - Invalid parameter value.
   * @throws { BusinessError } 8400002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8400003 - System internal error.
   * @throws { BusinessError } 8400999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  function offRttModifyInd(callback?: Callback<RttEventInfo>): void;

  /**
   * Subscribe to the rtt error event.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { Callback<RttErrorInfo> } callback - Indicates the callback for getting the rtt error report.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8400001 - Invalid parameter value.
   * @throws { BusinessError } 8400002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8400003 - System internal error.
   * @throws { BusinessError } 8400999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  function onRttErrCause(callback: Callback<RttErrorInfo>): void;

  /**
   * Unsubscribe from the rtt error report event.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { Callback<RttErrorInfo> } [callback] - Indicates the callback for getting the rtt error report.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8400001 - Invalid parameter value.
   * @throws { BusinessError } 8400002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8400003 - System internal error.
   * @throws { BusinessError } 8400999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  function offRttErrCause(callback?: Callback<RttErrorInfo>): void;

  /**
   * Checks whether a new call is allowed. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback function used to return the result. The value **true**
   *     indicates that the call is allowed, and the value **false** indicates the opposite.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function isNewCallAllowed(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether a new call is allowed. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the call is
   *     allowed, and the value **false** indicates the opposite.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function isNewCallAllowed(): Promise<boolean>;

  /**
   * Separates calls from a conference call. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Call ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300008 - Conference call is not active.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function separateConference(callId: int, callback: AsyncCallback<void>): void;

  /**
   * Separates calls from a conference call. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Call ID.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300008 - Conference call is not active.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function separateConference(callId: int): Promise<void>;

  /**
   * Obtains the call restriction status. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @param { CallRestrictionType } type - Call restriction type.
   * @param { AsyncCallback<RestrictionStatus> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getCallRestrictionStatus(slotId: int, type: CallRestrictionType, callback: AsyncCallback<RestrictionStatus>): void;

  /**
   * Obtains the call restriction status. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @param { CallRestrictionType } type - Call restriction type.
   * @returns { Promise<RestrictionStatus> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getCallRestrictionStatus(slotId: int, type: CallRestrictionType): Promise<RestrictionStatus>;

  /**
   * Sets the call restriction status. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @param { CallRestrictionInfo } info - Call restriction information.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function setCallRestriction(slotId: int, info: CallRestrictionInfo, callback: AsyncCallback<void>): void;

  /**
   * Sets the call restriction status. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @param { CallRestrictionInfo } info - Call restriction information.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function setCallRestriction(slotId: int, info: CallRestrictionInfo): Promise<void>;

  /**
   * Changes the call barring password. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @param { string } oldPassword - Old password for call barring.
   * @param { string } newPassword - New password for call barring.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setCallRestrictionPassword(slotId: int, oldPassword: string, newPassword: string, callback: AsyncCallback<void>): void;

  /**
   * Changes the call barring password. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @param { string } oldPassword - Old password for call barring.
   * @param { string } newPassword - New password for call barring.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setCallRestrictionPassword(slotId: int, oldPassword: string, newPassword: string): Promise<void>;

  /**
   * Obtains call transfer information. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @param { CallTransferType } type - Call transfer type.
   * @param { AsyncCallback<CallTransferResult> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getCallTransferInfo(slotId: int, type: CallTransferType, callback: AsyncCallback<CallTransferResult>): void;

  /**
   * Obtains call transfer information. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @param { CallTransferType } type - Call transfer type.
   * @returns { Promise<CallTransferResult> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getCallTransferInfo(slotId: int, type: CallTransferType): Promise<CallTransferResult>;

  /**
   * Sets call transfer information. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @param { CallTransferInfo } info - Call transfer information.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function setCallTransfer(slotId: int, info: CallTransferInfo, callback: AsyncCallback<void>): void;

  /**
   * Sets call transfer information. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @param { CallTransferInfo } info - Call transfer information.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function setCallTransfer(slotId: int, info: CallTransferInfo): Promise<void>;

  /**
   * Checks whether the ringtone is playing. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value true indicates that the
   *     **ringtone** is playing, and the value **false** indicates the opposite.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function isRinging(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the ringtone is playing. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @returns { Promise<boolean> } Promise used to return the result. The value true indicates that the **ringtone** is
   *     playing, and the value **false** indicates the opposite.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function isRinging(): Promise<boolean>;

  /**
   * Sets call muting. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function setMuted(callback: AsyncCallback<void>): void;

  /**
   * Sets call muting. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function setMuted(): Promise<void>;

  /**
   * Cancels call muting. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function cancelMuted(callback: AsyncCallback<void>): void;

  /**
   * Cancels call muting. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function cancelMuted(): Promise<void>;

  /**
   * Sets the audio device for a call. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { AudioDevice } device - Audio device.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function setAudioDevice(device: AudioDevice, callback: AsyncCallback<void>): void;

  /**
   * Sets the audio device for a call. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { AudioDevice } device - Audio device.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setAudioDevice(device: AudioDevice): Promise<void>;

  /**
   * Joins a conference call. This API uses an asynchronous callback to return the result.
   *
   * @param { int } mainCallId - Main call ID.
   * @param { Array<string> } callNumberList - List of call numbers.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function joinConference(mainCallId: int, callNumberList: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Joins a conference call. This API uses a promise to return the result.
   *
   * @param { int } mainCallId - Main call ID.
   * @param { Array<string> } callNumberList - List of call numbers.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function joinConference(mainCallId: int, callNumberList: Array<string>): Promise<void>;

  /**
   * Removes a specified call from a conference call. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { int } callId - Call ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function kickOutFromConference(callId: int, callback: AsyncCallback<void>): void;

  /**
   * Removes a specified call from a conference call. This API uses a promise to return the result.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { int } callId - Call ID.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function kickOutFromConference(callId: int): Promise<void>;

  /**
   * Updates the IMS call mode. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Call ID.
   * @param { ImsCallMode } mode - IMS call mode.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function updateImsCallMode(callId: int, mode: ImsCallMode, callback: AsyncCallback<void>): void;

  /**
   * Updates the IMS call mode. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Call ID.
   * @param { ImsCallMode } mode - IMS call mode.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function updateImsCallMode(callId: int, mode: ImsCallMode): Promise<void>;

  /**
   * Cancels the upgrade of a video call. This API uses a promise to return the result.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { int } callId - Call ID. You can obtain the value by subscribing to **callDetailsChange** events.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function cancelCallUpgrade(callId: int): Promise<void>;

  /**
   * Uses the specified camera to make a video call. If **cameraId** is left empty, the camera is disabled. This API
   * uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Call ID. You can obtain the value by subscribing to **callDetailsChange** events.
   * @param { string } cameraId - Camera ID. For details about how to obtain the camera ID, see the
   *     [getSupportedCameras]{@link @ohos.multimedia.camera:camera.CameraManager.getSupportedCameras} API in camera
   *     management.
   * @returns { Promise<void> } Promise used to return the result of starting, closing, or switching a camera.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function controlCamera(callId: int, cameraId: string): Promise<void>;

  /**
   * Sets the local preview window. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Call ID. You can obtain the value by subscribing to **callDetailsChange** events.
   * @param { string } surfaceId - Preview window ID. For details about how to obtain **surfaceId**, see
   *     [getXComponentSurfaceId]{@link XComponentController#getXComponentSurfaceId}.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function setPreviewSurface(callId: int, surfaceId: string): Promise<void>;

  /**
   * Sets the remote display window. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Call ID. You can obtain the value by subscribing to **callDetailsChange** events.
   * @param { string } surfaceId - Display window ID. For details about how to obtain **surfaceId**, see
   *     [getXComponentSurfaceId]{@link XComponentController#getXComponentSurfaceId}.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function setDisplaySurface(callId: int, surfaceId: string): Promise<void>;

  /**
   * Sets the video call screen to follow the device direction. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Call ID. You can obtain the value by subscribing to **callDetailsChange** events.
   * @param { DeviceDirection } deviceDirection - Device direction. It determines the direction of the video call
   *     screen.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function setDeviceDirection(callId: int, deviceDirection: DeviceDirection): Promise<void>;

  /**
   * Subscribes to **imsCallModeChange** events. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'imsCallModeChange' } type - Call mode change. This field has a fixed value of **imsCallModeChange**.
   * @param { Callback<ImsCallModeInfo> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function on(type: 'imsCallModeChange', callback: Callback<ImsCallModeInfo>): void;

  /**
   * Unsubscribes from **imsCallModeChange** events. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'imsCallModeChange' } type - Call mode change. This field has a fixed value of **imsCallModeChange**.
   * @param { Callback<ImsCallModeInfo> } callback - Callback used to return the result. If this field is not set, no
   *     subscription cancellation result will be received.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function off(type: 'imsCallModeChange', callback?: Callback<ImsCallModeInfo>): void;

  /**
   * Subscribes to **callSessionEvent** events. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'callSessionEvent' } type - Call session event. This field has a fixed value of **callSessionEvent**.
   * @param { Callback<CallSessionEvent> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function on(type: 'callSessionEvent', callback: Callback<CallSessionEvent>): void;

  /**
   * Unsubscribes from **callSessionEvent** events. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'callSessionEvent' } type - Call session event. This field has a fixed value of **callSessionEvent**.
   * @param { Callback<CallSessionEvent> } callback - Callback used to return the result. If this field is not set, no
   *     subscription cancellation result will be received.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function off(type: 'callSessionEvent', callback?: Callback<CallSessionEvent>): void;

  /**
   * Subscribes to **peerDimensionsChange** events. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'peerDimensionsChange' } type - Screen resolution change. This field has a fixed value of
   *     **peerDimensionsChange**.
   * @param { Callback<PeerDimensionsDetail> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function on(type: 'peerDimensionsChange', callback: Callback<PeerDimensionsDetail>): void;

  /**
   * Unsubscribes from **peerDimensionsChange** events. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'peerDimensionsChange' } type - Screen resolution change. This field has a fixed value of
   *     **peerDimensionsChange**.
   * @param { Callback<PeerDimensionsDetail> } callback - Callback used to return the result. If this field is not set,
   *     no subscription cancellation result will be received.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function off(type: 'peerDimensionsChange', callback?: Callback<PeerDimensionsDetail>): void;

  /**
   * Subscribes to **cameraCapabilitiesChange** events. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'cameraCapabilitiesChange' } type - Camera capability change. This field has a fixed value of
   *     **cameraCapabilitiesChange**.
   * @param { Callback<CameraCapabilities> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function on(type: 'cameraCapabilitiesChange', callback: Callback<CameraCapabilities>): void;

  /**
   * Unsubscribes from **cameraCapabilitiesChange** events. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'cameraCapabilitiesChange' } type - Camera capability change. This field has a fixed value of
   *     **cameraCapabilitiesChange**.
   * @param { Callback<CameraCapabilities> } callback - Callback used to return the result. If this field is not set, no
   *     subscription cancellation result will be received.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function off(type: 'cameraCapabilitiesChange', callback?: Callback<CameraCapabilities>): void;

  /**
   * Enables the IMS service. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function enableImsSwitch(slotId: int, callback: AsyncCallback<void>): void;

  /**
   * Enables the IMS service. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function enableImsSwitch(slotId: int): Promise<void>;

  /**
   * Disables the IMS service. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function disableImsSwitch(slotId: int, callback: AsyncCallback<void>): void;

  /**
   * Disables the IMS service. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function disableImsSwitch(slotId: int): Promise<void>;

  /**
   * Checks whether the IMS service is enabled. This API uses an asynchronous callback to return the result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** indicates that
   *     the IMS service is enabled, and the value **false** indicates the opposite. The value **true** indicates that
   *     the IMS service is enabled, and the value **false** indicates the opposite.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function isImsSwitchEnabled(slotId: int, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the IMS service is enabled. This API uses a promise to return the result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the IMS service
   *     is enabled, and the value **false** indicates the opposite.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function isImsSwitchEnabled(slotId: int): Promise<boolean>;

  /**
   * Checks whether the IMS service is enabled. This API returns the result synchronously.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @returns { boolean } Boolean value indicating whether the IMS service is enabled. The value **true** indicates that
   *     the IMS service is enabled, and the value **false** indicates the opposite.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function isImsSwitchEnabledSync(slotId: int): boolean;

  /**
   * Cancels the unfinished USSD services. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function closeUnfinishedUssd(slotId: int, callback: AsyncCallback<void>): void;

  /**
   * Cancels the unfinished USSD services. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function closeUnfinishedUssd(slotId: int): Promise<void>;

  /**
   * Sets the status of the VoNR switch. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @param { VoNRState } state - Status of the VoNR switch.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setVoNRState(slotId: int, state: VoNRState, callback: AsyncCallback<void>): void;

  /**
   * Sets the status of the VoNR switch. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @param { VoNRState } state - Status of the VoNR switch.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setVoNRState(slotId: int, state: VoNRState): Promise<void>;

  /**
   * Obtains the status of the VoNR switch. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @param { AsyncCallback<VoNRState> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getVoNRState(slotId: int, callback: AsyncCallback<VoNRState>): void;

  /**
   * Obtains the status of the VoNR switch. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @returns { Promise<VoNRState> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getVoNRState(slotId: int): Promise<VoNRState>;

  /**
   * Checks whether the call forwarding time can be set. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** indicates that
   *     the call forwarding time can be set, and the value **false** indicates the opposite.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function canSetCallTransferTime(slotId: int, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the call forwarding time can be set. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the call
   *     forwarding time can be set, and the value **false** indicates the opposite.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function canSetCallTransferTime(slotId: int): Promise<boolean>;

  /**
   * Performs a secret code broadcast. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { string } inputCode - Secret code, for example, *#*#2846579#*#* (project menu).
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function inputDialerSpecialCode(inputCode: string, callback: AsyncCallback<void>): void;

  /**
   * Performs a secret code broadcast. This API uses a promise to return the result.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { string } inputCode - Secret code, for example, *#*#2846579#*#* (project menu).
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function inputDialerSpecialCode(inputCode: string): Promise<void>;

  /**
   * Removes missed call notifications. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE and ohos.permission.READ_CALL_LOG and
   *     ohos.permission.WRITE_CALL_LOG
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function removeMissedIncomingCallNotification(callback: AsyncCallback<void>): void;

  /**
   * Removes missed call notifications. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE and ohos.permission.READ_CALL_LOG and
   *     ohos.permission.WRITE_CALL_LOG
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function removeMissedIncomingCallNotification(): Promise<void>;

  /**
   * Sends a call UI event. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - Call ID.
   * @param { string } eventName - Event name.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types;
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function sendCallUiEvent(callId: int, eventName: string): Promise<void>;

  /**
   * Set rtt capability.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { int } accountId - Indicates the identifier of the account to set rtt capability.
   * @param { boolean } isEnable - Indicates whether Rtt capability is enabled.
   * @returns { Promise<void> } The promise returned by the setRttCapability.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8400001 - Invalid parameter value.
   * @throws { BusinessError } 8400002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8400003 - System internal error.
   * @throws { BusinessError } 8400999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  function setRttCapability(accountId: int, isEnable: boolean): Promise<void>;

  /**
   * Send rtt message.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { int } callId - Indicates the identifier of the call.
   * @param { string } rttMessage - Indicates the message of rtt.
   * @returns { Promise<void> } The promise returned by the sendRttMessage.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8400001 - Invalid parameter value.
   * @throws { BusinessError } 8400002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8400003 - System internal error.
   * @throws { BusinessError } 8400999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  function sendRttMessage(callId: int, rttMessage: string): Promise<void>;

  /**
   * Start rtt.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { int } callId - Indicates the identifier of the call.
   * @param { ImsRttMode } type - Indicates the type of operation.
   * @returns { Promise<void> } The promise returned by the startRtt.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8400001 - Invalid parameter value.
   * @throws { BusinessError } 8400002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8400003 - System internal error.
   * @throws { BusinessError } 8400999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  function startRtt(callId: int, type: ImsRttMode): Promise<void>;

  /**
   * Stop rtt.
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { int } callId - Indicates the identifier of the call.
   * @param { ImsRttMode } type - Indicates the type of operation.
   * @returns { Promise<void> } The promise returned by the stopRtt.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8400001 - Invalid parameter value.
   * @throws { BusinessError } 8400002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8400003 - System internal error.
   * @throws { BusinessError } 8400999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  function stopRtt(callId: int, type: ImsRttMode): Promise<void>;

  /**
   * Preload callUI.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @returns { Promise<boolean> } The promise returned by the preloadCallUI.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8400001 - Invalid parameter value.
   * @throws { BusinessError } 8400002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8400003 - System internal error.
   * @throws { BusinessError } 8400999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 24 dynamic&static
   */
  function preloadCallUI(): Promise<boolean>;

  /**
   * Unload callUI.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @returns { Promise<boolean> } The promise returned by the unloadCallUI.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8400001 - Invalid parameter value.
   * @throws { BusinessError } 8400002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8400003 - System internal error.
   * @throws { BusinessError } 8400999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 24 dynamic&static
   */
  function unloadCallUI(): Promise<boolean>;

  /**
   * Sends a response to the Unstructured Supplementary Service Data (USSD) service to the carrier.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - ID of the card slot that sends the response.
   * @param { string } content - Response content.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8400001 - Invalid parameter value.
   * @throws { BusinessError } 8400002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8400003 - System internal error, system database write fail.
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 26.0.0 dynamic&static
   */
  function sendUssdResponse(slotId: int, content: string): void;

  /**
   * Enumerates IMS call modes.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum ImsCallMode {
    /**
     * Audio call only.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_MODE_AUDIO_ONLY = 0,

    /**
     * Sending calls only.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_MODE_SEND_ONLY = 1,

    /**
     * Receiving calls only.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_MODE_RECEIVE_ONLY = 2,

    /**
     * Sending and receiving calls.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_MODE_SEND_RECEIVE = 3,

    /**
     * Pausing video calls.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_MODE_VIDEO_PAUSED = 4
  }

  /**
   * Enumerates VoNR switch states.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  export enum VoNRState {
    /**
     * Disabled.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    VONR_STATE_OFF = 0,

    /**
     * Enabled.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    VONR_STATE_ON = 1
  }

  /**
   * Enumerates audio device types.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  export enum AudioDeviceType {
    /**
     * Headset device.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    DEVICE_EARPIECE = 0,

    /**
     * Speaker device.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    DEVICE_SPEAKER = 1,

    /**
     * Wired headset device.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    DEVICE_WIRED_HEADSET = 2,

    /**
     * Bluetooth SCO device.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    DEVICE_BLUETOOTH_SCO = 3,

    /**
     * Distributed head unit.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    DEVICE_DISTRIBUTED_AUTOMOTIVE = 4
  }

  /**
   * Enumerates audio devices.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  export interface AudioDevice {
    /**
     * Audio device type.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    deviceType: AudioDeviceType;

    /**
     * Audio device address.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    address?: string;

    /**
     * Audio device name.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    deviceName?: string;
  }

  /**
   * Defines the audio device information.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  export interface AudioDeviceCallbackInfo {
    /**
     * Audio device list.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    audioDeviceList: Array<AudioDevice>;

    /**
     * Current audio device.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    currentAudioDevice: AudioDevice;

    /**
     * Whether the audio device is muted.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    isMuted: boolean;

    /**
     * Whether to disable the microphone.
     *
     * - **true**: yes.
     * - **false**: no.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 24 dynamic&static
     */
    isMicDisabled?: boolean;
  }

  /**
   * Enumerates call restriction types.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum CallRestrictionType {
    /**
     * Barring of all incoming calls.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_TYPE_ALL_INCOMING = 0,

    /**
     * Barring of all outgoing calls.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_TYPE_ALL_OUTGOING = 1,

    /**
     * Barring of international calls.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_TYPE_INTERNATIONAL = 2,

    /**
     * Barring of international calls except those in the home country.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_TYPE_INTERNATIONAL_EXCLUDING_HOME = 3,

    /**
     * Barring of incoming roaming calls.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_TYPE_ROAMING_INCOMING = 4,

    /**
     * Barring of all calls.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_TYPE_ALL_CALLS = 5,

    /**
     * Barring of outgoing services.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_TYPE_OUTGOING_SERVICES = 6,

    /**
     * Barring of incoming services.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_TYPE_INCOMING_SERVICES = 7
  }

  /**
   * Defines the call transfer information.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface CallTransferInfo {
    /**
     * Call transfer number.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    transferNum: string;

    /**
     * Call transfer type.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    type: CallTransferType;

    /**
     * Enumerates call transfer setting types.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    settingType: CallTransferSettingType;

    /**
     * Hour in the start time.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    startHour?: int;

    /**
     * Minute in the start time.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    startMinute?: int;

    /**
     * Hour in the end time.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    endHour?: int;

    /**
     * Minute in the end time.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    endMinute?: int;
  }

  /**
   * Enumerates call transfer types.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi [since 8 - 24]
   * @publicapi [since 26.0.0]
   * @since 8 dynamic
   * @since 23 static
   */
  export enum CallTransferType {
    /**
     * Call forwarding unconditional.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi [since 8 - 24]
     * @publicapi [since 26.0.0]
     * @since 8 dynamic
     * @since 23 static
     */
    TRANSFER_TYPE_UNCONDITIONAL = 0,

    /**
     * Call forwarding busy.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi [since 8 - 24]
     * @publicapi [since 26.0.0]
     * @since 8 dynamic
     * @since 23 static
     */
    TRANSFER_TYPE_BUSY = 1,

    /**
     * Call forwarding on no reply.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi [since 8 - 24]
     * @publicapi [since 26.0.0]
     * @since 8 dynamic
     * @since 23 static
     */
    TRANSFER_TYPE_NO_REPLY = 2,

    /**
     * Call forwarding on no user not reachable.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi [since 8 - 24]
     * @publicapi [since 26.0.0]
     * @since 8 dynamic
     * @since 23 static
     */
    TRANSFER_TYPE_NOT_REACHABLE = 3
  }

  /**
   * Enumerates call transfer setting types.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum CallTransferSettingType {
    /**
     * Disabling of call transfer.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_TRANSFER_DISABLE = 0,

    /**
     * Enabling of call transfer.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_TRANSFER_ENABLE = 1,

    /**
     * Registration of call transfer.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_TRANSFER_REGISTRATION = 3,

    /**
     * Erasing of call transfer.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_TRANSFER_ERASURE = 4
  }

  /**
   * Defines the call attribute options.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export interface CallAttributeOptions {
    /**
     * Account number.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    accountNumber: string;

    /**
     * Whether the speakerphone is used to answer a call. The default value is **false**.
     *
     * - **true**: yes
     * - **false**: no
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    speakerphoneOn: boolean;

    /**
     * Account ID.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    accountId: int;

    /**
     * Video state type.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    videoState: VideoStateType;

    /**
     * Start time.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    startTime: int;

    /**
     * Whether the call is an ECC. The default value is **false**.
     *
     * - **true**: yes
     * - **false**: no
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    isEcc: boolean;

    /**
     * Enumerates call types.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    callType: CallType;

    /**
     * Call ID.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    callId: int;

    /**
     * Detailed call state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    callState: DetailedCallState;

    /**
     * Enumerates conference states.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    conferenceState: ConferenceState;

    /**
     * Defines the VoIP call information.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    voipCallAttribute?: VoipCallAttribute;

    /**
     * Video RBT type.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    crsType: int;

    /**
     * Original call type of the Video RBT service.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    originalCallType: int;

    /**
     * Home location area of the number.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    numberLocation?: string;

    /**
     * Number mark.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    numberMarkInfo?: NumberMarkInfo;

    /**
     * Indicates the extra call parameters.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    extraParams?: Record<string, Object>;

    /**
     * Indicates the rtt state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    rttState?: RttState;

    /**
     * X-Call type.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    xCallType?: XCallType;

    /**
     * Indicates is custom accessibility enabled.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    isCustomAccessibility?: boolean;
  }

  /**
   * Defines the VoIP call information.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export interface VoipCallAttribute {
    /**
     * Unique ID of a VoIP call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    voipCallId: string;

    /**
     * User nickname.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    userName: string;

    /**
     * User profile picture.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    userProfile: image.PixelMap;

    /**
     * Process ID of the third-party application.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    extensionId: string;

    /**
     * Ability name of the third-party application.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    abilityName: string;

    /**
     * Bundle name of the third-party application.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    voipBundleName: string;

    /**
     * Whether to display the incoming call banner.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    showBannerForIncomingCall?: boolean;

    /**
     * Whether the call is a conference call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    isConferenceCall?: boolean;

    /**
     * Whether call answering with voice commands is supported.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    isVoiceAnswerSupported?: boolean;
  }

  /**
   * Enumerates conference states.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export enum ConferenceState {
    /**
     * Idle state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    TEL_CONFERENCE_IDLE = 0,

    /**
     * Active state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    TEL_CONFERENCE_ACTIVE = 1,

    /**
     * Disconnecting state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    TEL_CONFERENCE_DISCONNECTING = 2,

    /**
     * Disconnected state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    TEL_CONFERENCE_DISCONNECTED = 3
  }

  /**
   * Enumerates call types.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export enum CallType {
    /**
     * CS call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    TYPE_CS = 0,

    /**
     * IMS call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    TYPE_IMS = 1,

    /**
     * OTT call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    TYPE_OTT = 2,

    /**
     * Error call type.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    TYPE_ERR_CALL = 3,

    /**
     * VoIP call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_VOIP = 4,

    /**
     * X-Call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    TYPE_XCALL = 5
  }

  /**
   * Video state type.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export enum VideoStateType {
    /**
     * Voice state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    TYPE_VOICE = 0,
    /**
     * Video state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead telephony.call#TYPE_VIDEO_BIDIRECTIONAL
     */
    TYPE_VIDEO,
    /**
     * Data sending only during a video call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_VIDEO_SEND_ONLY = 1,
    /**
     * Data receiving only during a video call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_VIDEO_RECEIVE_ONLY = 2,
    /**
     * Data receiving/sending status during a video call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_VIDEO_BIDIRECTIONAL = 3
  }

  /**
   * Enumerates video call upgrade or downgrade request types.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export enum VideoRequestResultType {
    /**
     * Success.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_REQUEST_SUCCESS = 0,
    /**
     * Failed.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_REQUEST_FAILURE = 1,
    /**
     * Invalid request.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_REQUEST_INVALID = 2,
    /**
     * Request timeout.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_REQUEST_TIMED_OUT = 3,
    /**
     * Request denied.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_REQUEST_REJECTED_BY_REMOTE = 4,
    /**
     * Upgrade request canceled.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_REQUEST_UPGRADE_CANCELED = 5,
    /**
     * RTP or RTCP downgrade timeout.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_DOWNGRADE_RTP_OR_RTCP_TIMEOUT = 100,
    /**
     * RTP and RTCP downgrade timeout.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_DOWNGRADE_RTP_AND_RTCP_TIMEOUT = 101
  }

  /**
   * Enumerates device directions in a video call.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export enum DeviceDirection {
    /**
     * 0-degree direction.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    DEVICE_DIRECTION_0 = 0,
    /**
     * 90-degree direction.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    DEVICE_DIRECTION_90 = 90,
    /**
     * 180-degree direction.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    DEVICE_DIRECTION_180 = 180,
    /**
     * 270-degree direction.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    DEVICE_DIRECTION_270 = 270
  }

  /**
   * Enumerates video call event types.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export enum CallSessionEventId {
    /**
     * Camera setting failed.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    EVENT_CONTROL_CAMERA_FAILURE = 0,
    /**
     * Camera setting succeeded.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    EVENT_CONTROL_CAMERA_READY = 1,
    /**
     * Remote display window released.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    EVENT_DISPLAY_SURFACE_RELEASED = 100,
    /**
     * Local preview window released.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    EVENT_PREVIEW_SURFACE_RELEASED = 101
  }

  /**
   * Enumerates detailed call states.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export enum DetailedCallState {
    /**
     * Active state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_STATUS_ACTIVE = 0,

    /**
     * Hold state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_STATUS_HOLDING = 1,

    /**
     * Dialing state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_STATUS_DIALING = 2,

    /**
     * Alerting state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_STATUS_ALERTING = 3,

    /**
     * Incoming state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_STATUS_INCOMING = 4,

    /**
     * Enumerates call waiting states.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_STATUS_WAITING = 5,

    /**
     * Disconnected state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_STATUS_DISCONNECTED = 6,

    /**
     * Disconnecting state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_STATUS_DISCONNECTING = 7,

    /**
     * Idle state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_STATUS_IDLE = 8
  }

  /**
   * Defines the call restriction information.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface CallRestrictionInfo {
    /**
     * Call restriction type.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    type: CallRestrictionType;

    /**
     * Password.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    password: string;

    /**
     * Enumerates call restriction modes.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    mode: CallRestrictionMode;
  }

  /**
   * Enumerates call restriction modes.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum CallRestrictionMode {
    /**
     * Call restriction deactivated.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_MODE_DEACTIVATION = 0,

    /**
     * Call restriction activated.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_MODE_ACTIVATION = 1
  }

  /**
   * Defines the call event options.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface CallEventOptions {
    /**
     * Enumerates call ability event IDs.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    eventId: CallAbilityEventId;
  }

  /**
   * Enumerates call ability event IDs.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum CallAbilityEventId {
    /**
     * No available carrier during dialing.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    EVENT_DIAL_NO_CARRIER = 1,

    /**
     * Invalid FDN.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    EVENT_INVALID_FDN_NUMBER = 2,

    /**
     * Failed to place the call on hold.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    EVENT_HOLD_CALL_FAILED = 3,

    /**
     * Failed to place the current call on hold and answer the waiting call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    EVENT_SWAP_CALL_FAILED = 4,

    /**
     * Failed to combine calls.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    EVENT_COMBINE_CALL_FAILED = 5,

    /**
     * Failed to split the call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    EVENT_SPLIT_CALL_FAILED = 6,

    /**
     * Displaying the call UI in full screen.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    EVENT_SHOW_FULL_SCREEN = 7,

    /**
     * Displaying the call UI in a floating widow.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    EVENT_SHOW_FLOAT_WINDOW = 8
  }

  /**
   * Enumerates call states.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @since 6 dynamic
   * @since 23 static
   */
  export enum CallState {
    /**
     * The call status fails to be obtained and is unknown.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 6 dynamic
     * @since 23 static
     */
    CALL_STATE_UNKNOWN = -1,

    /**
     * No call is in progress.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 6 dynamic
     * @since 23 static
     */
    CALL_STATE_IDLE = 0,

    /**
     * The call is in the ringing or waiting state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 6 dynamic
     * @since 23 static
     */
    CALL_STATE_RINGING = 1,

    /**
     * At least one call is in dialing, active, or on hold, and no new incoming call is ringing or waiting.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 6 dynamic
     * @since 23 static
     */
    CALL_STATE_OFFHOOK = 2,

    /**
     * The incoming call is answered.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 11 dynamic
     * @since 23 static
     */
    CALL_STATE_ANSWERED = 3
  }

  /**
   * Enumerates call states.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @since 21 dynamic
   * @since 23 static
   */
  export enum TelCallState {
    /**
     * The call status fails to be obtained and is unknown.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 21 dynamic
     * @since 23 static
     */
    TEL_CALL_STATE_UNKNOWN = -1,

    /**
     * No call is in progress.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 21 dynamic
     * @since 23 static
     */
    TEL_CALL_STATE_IDLE = 0,

    /**
     * The call is in the ringing or waiting state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 21 dynamic
     * @since 23 static
     */
    TEL_CALL_STATE_RINGING = 1,

    /**
     * At least one call is being dialed, and no new incoming call is in the ringing or waiting state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 21 dynamic
     * @since 23 static
     */
    TEL_CALL_STATE_OFFHOOK = 2,

    /**
     * The incoming call is answered.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 21 dynamic
     * @since 23 static
     */
    TEL_CALL_STATE_ANSWERED = 3,

    /**
     * The call is being connected or placed on hold.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 21 dynamic
     * @since 23 static
     */
    TEL_CALL_STATE_CONNECTED = 4
  }

  /**
   * Carrier call state code.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @since 23 dynamic&static
   */
  export enum CCallState {
    /**
     * The call status fails to be obtained and is unknown.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_UNKNOWN = -1,

    /**
     * The call is connected.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_ACTIVE = 0,

    /**
     * The call is on hold.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_HOLDING = 1,

    /**
     * The outgoing call is in the dialing process, and the peer end has not received the ringing.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_DIALING = 2,

    /**
     * The outgoing call is in the ringing process, and the peer end is ringing.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_ALERTING = 3,

    /**
     * Indicates that an incoming call is received.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_INCOMING = 4,

    /**
     * Indicates that another incoming call is received when there is an ongoing call in the same card slot.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_WAITING = 5,

    /**
     * Indicates that the call has been released.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_DISCONNECTED = 6,

    /**
     * Indicates that the call is being released.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_DISCONNECTING = 7,

    /**
     * No call is in progress.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_IDLE = 8,

    /**
     * The incoming call is answered.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_ANSWERED = 9
  }

  /**
   * Provides an option for determining whether a call is a video call.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @since 6 dynamic
   * @since 23 static
   */
  export interface DialOptions {
    /**
     * Whether the call is a video call.
     *
     * - **true**: video call
     * - **false** (default): voice call
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 6 dynamic
     * @since 23 static
     */
    extras?: boolean;

    /**
     * Account ID.
     *
     * - **0**: card slot 1.
     * - **1**: card slot 2.<br
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    accountId?: int;

    /**
     * Video state type. This is a system API.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    videoState?: VideoStateType;

    /**
     * Dialup scenario. This is a system API.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    dialScene?: DialScene;

    /**
     * Dialup type. This is a system API.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    dialType?: DialType;
  }

  /**
   * Provides an option for determining whether a call is a video call.
   *
   * @syscap SystemCapability.Applications.Contacts
   * @FaAndStageModel
   * @atomicservice
   * @since 24 dynamic
   * @since 26.0.0 static
   */
  export interface MakeCallOptions {
    /**
     * Whether to hide the dial screen. **true**: yes; **false**: no.
     *
     * @syscap SystemCapability.Applications.Contacts
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic
     * @since 26.0.0 static
     */
    isHideDialScreen?: boolean;

    /**
     * Whether the third-party app supports custom accessibility features.
     * Default value: false.
     *
     * @syscap SystemCapability.Applications.Contacts
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    isCustomAccessibility?: boolean;
  }

  /**
   * Provides an option for determining whether a call is a video call.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface DialCallOptions {
    /**
     * Account ID.
     *
     * - **0**: card slot 1.
     * - **1**: card slot 2.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    accountId?: int;
    /**
     * Video state type.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    videoState?: VideoStateType;
    /**
     * Dialup scenario.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    dialScene?: DialScene;
    /**
     * Dialup type.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    dialType?: DialType;
    /**
     * Indicates the extra call parameters.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    extraParams?: Record<string, Object>;
    /**
     * XCALL type.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    xCallType?: XCallType;
  }

  /**
   * Enumerates dialup scenarios.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum DialScene {
    /**
     * Common call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_NORMAL = 0,

    /**
     * Privileged call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_PRIVILEGED = 1,

    /**
     * Emergency call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_EMERGENCY = 2
  }

  /**
   * Enumerates dialup types.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum DialType {
    /**
     * Carrier.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    DIAL_CARRIER_TYPE = 0,

    /**
     * Voice mail.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    DIAL_VOICE_MAIL_TYPE = 1,

    /**
     * OTT.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    DIAL_OTT_TYPE = 2,

    /**
     * X-Call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    DIAL_XCALL_TYPE = 3
  }

  /**
   * Defines options for the call rejection message.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export interface RejectMessageOptions {
    /**
     * Message content.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    messageContent: string;
  }

  /**
   * Defines the call transfer result.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi [since 8 - 24]
   * @publicapi [since 26.0.0]
   * @since 8 dynamic
   * @since 23 static
   */
  export interface CallTransferResult {
    /**
     * Enumerates call transfer states.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi [since 8 - 24]
     * @publicapi [since 26.0.0]
     * @since 8 dynamic
     * @since 23 static
     */
    status: TransferStatus;

    /**
     * Call transfer number.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     */
    number: string;

    /**
     * Indicates the phone number of call forwarding.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    teleNumber: string;

    /**
     * Hour in the start time.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi [since 9 - 24]
     * @publicapi [since 26.0.0]
     * @since 9 dynamic
     * @since 23 static
     */
    startHour: int;

    /**
     * Minute in the start time.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi [since 9 - 24]
     * @publicapi [since 26.0.0]
     * @since 9 dynamic
     * @since 23 static
     */
    startMinute: int;

    /**
     * Hour in the end time.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi [since 9 - 24]
     * @publicapi [since 26.0.0]
     * @since 9 dynamic
     * @since 23 static
     */
    endHour: int;

    /**
     * Minute in the end time.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi [since 9 - 24]
     * @publicapi [since 26.0.0]
     * @since 9 dynamic
     * @since 23 static
     */
    endMinute: int;
  }

  /**
   * Enumerates call waiting states.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export enum CallWaitingStatus {
    /**
     * Call waiting disabled.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_WAITING_DISABLE = 0,

    /**
     * Call waiting enabled.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_WAITING_ENABLE = 1
  }

  /**
   * Enumerates call restriction states.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum RestrictionStatus {
    /**
     * Call restriction disabled.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_DISABLE = 0,

    /**
     * Call restriction enabled.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_ENABLE = 1
  }

  /**
   * Enumerates call transfer states.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi [since 8 - 24]
   * @publicapi [since 26.0.0]
   * @since 8 dynamic
   * @since 23 static
   */
  export enum TransferStatus {
    /**
     * Call transfer disabled.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi [since 8 - 24]
     * @publicapi [since 26.0.0]
     * @since 8 dynamic
     * @since 23 static
     */
    TRANSFER_DISABLE = 0,

    /**
     * Call transfer enabled.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi [since 8 - 24]
     * @publicapi [since 26.0.0]
     * @since 8 dynamic
     * @since 23 static
     */
    TRANSFER_ENABLE = 1
  }

  /**
   * Provides an option for determining whether a number is an emergency number for the SIM card in the specified slot.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @since 7 dynamic
   * @since 23 static
   */
  export interface EmergencyNumberOptions {
    /**
     * Card slot ID.
     *
     * - **0**: card slot 1
     * - **1**: card slot 2
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 7 dynamic
     * @since 23 static
     */
    slotId?: int;
  }

  /**
   * Provides an option for number formatting.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @since 7 dynamic
   * @since 23 static
   */
  export interface NumberFormatOptions {
    /**
     * Country code, for example, **CN** (China). All country codes are supported. The default value is **CN**.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 7 dynamic
     * @since 23 static
     */
    countryCode?: string;
  }

  /**
   * Defines the MMI code result.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface MmiCodeResults {
    /**
     * Defines the MMI code result.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    result: MmiCodeResult;

    /**
     * MMI code message.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    message: string;
  }

  /**
   * Defines the MMI code result.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum MmiCodeResult {
    /**
     * Success.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    MMI_CODE_SUCCESS = 0,

    /**
     * Failure.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    MMI_CODE_FAILED = 1
  }

  /**
   * Enumerates call disconnection causes.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum DisconnectedReason {
    /**
     * Unallocated (unassigned) number.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    UNASSIGNED_NUMBER = 1,

    /**
     * No route to destination.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    NO_ROUTE_TO_DESTINATION = 3,

    /**
     * Channel unacceptable.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CHANNEL_UNACCEPTABLE = 6,

    /**
     * Operator determined barring (ODB).
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    OPERATOR_DETERMINED_BARRING = 8,

    /**
     * Call completed elsewhere.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    CALL_COMPLETED_ELSEWHERE = 13,

    /**
     * Normal call clearing.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    NORMAL_CALL_CLEARING = 16,

    /**
     * User busy.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    USER_BUSY = 17,

    /**
     * No user responding.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    NO_USER_RESPONDING = 18,

    /**
     * User alerting, no answer.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    USER_ALERTING_NO_ANSWER = 19,

    /**
     * Call rejected.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_REJECTED = 21,

    /**
     * Number changed.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    NUMBER_CHANGED = 22,

    /**
     * Call rejected due to reasons of the destination, for example, activation of Anonymous Call Rejection.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    CALL_REJECTED_DUE_TO_FEATURE_AT_THE_DESTINATION = 24,

    /**
     * Failed preemption.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    FAILED_PRE_EMPTION = 25,

    /**
     * Non-selected user clearing.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    NON_SELECTED_USER_CLEARING = 26,

    /**
     * Destination out of order.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    DESTINATION_OUT_OF_ORDER = 27,

    /**
     * Invalid number format (incomplete number).
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    INVALID_NUMBER_FORMAT = 28,

    /**
     * Facility rejected.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    FACILITY_REJECTED = 29,

    /**
     * Response to status enquiry.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RESPONSE_TO_STATUS_ENQUIRY = 30,

    /**
     * Normal, unspecified.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    NORMAL_UNSPECIFIED = 31,

    /**
     * No circuit/channel available.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    NO_CIRCUIT_CHANNEL_AVAILABLE = 34,

    /**
     * Network fault.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    NETWORK_OUT_OF_ORDER = 38,

    /**
     * Temporary failure.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TEMPORARY_FAILURE = 41,

    /**
     * Switching equipment congestion.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    SWITCHING_EQUIPMENT_CONGESTION = 42,

    /**
     * Access information discarded.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ACCESS_INFORMATION_DISCARDED = 43,

    /**
     * Requested circuit/channel unavailable.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    REQUEST_CIRCUIT_CHANNEL_NOT_AVAILABLE = 44,

    /**
     * Resources unavailable, unspecified.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RESOURCES_UNAVAILABLE_UNSPECIFIED = 47,

    /**
     * QoS unavailable.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    QUALITY_OF_SERVICE_UNAVAILABLE = 49,

    /**
     * Requested facility not subscribed.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    REQUESTED_FACILITY_NOT_SUBSCRIBED = 50,

    /**
     * Incoming calls barred within the CUG.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INCOMING_CALLS_BARRED_WITHIN_THE_CUG = 55,

    /**
     * Bearer capability not authorized.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    BEARER_CAPABILITY_NOT_AUTHORIZED = 57,

    /**
     * Bearer capability presently available.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    BEARER_CAPABILITY_NOT_PRESENTLY_AVAILABLE = 58,

    /**
     * Service or option not available, unspecified.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    SERVICE_OR_OPTION_NOT_AVAILABLE_UNSPECIFIED = 63,

    /**
     * Bearer service not implemented.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    BEARER_SERVICE_NOT_IMPLEMENTED = 65,

    /**
     * ACM greater than or equal to the maximum value.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ACM_EQUALTO_OR_GREATER_THAN_THE_MAXIMUM_VALUE = 68,

    /**
     * Requested facility not implemented.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    REQUESTED_FACILITY_NOT_IMPLEMENTED = 69,

    /**
     * Only restricted digital information bearer capability available.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ONLY_RESTRICTED_DIGITAL_INFO_BEARER_CAPABILITY_IS_AVAILABLE = 70,

    /**
     * Service or option not implemented, unspecified.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    SERVICE_OR_OPTION_NOT_IMPLEMENTED_UNSPECIFIED = 79,

    /**
     * Invalid transaction identifier value.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INVALID_TRANSACTION_IDENTIFIER_VALUE = 81,

    /**
     * User not member of CUG.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    USER_NOT_MEMBER_OF_CUG = 87,

    /**
     * Incompatible destination.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INCOMPATIBLE_DESTINATION = 88,

    /**
     * Invalid transit network selection.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INVALID_TRANSIT_NETWORK_SELECTION = 91,

    /**
     * Semantically incorrect message.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    SEMANTICALLY_INCORRECT_MESSAGE = 95,

    /**
     * Invalid mandatory information.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INVALID_MANDATORY_INFORMATION = 96,

    /**
     * Message type non-existent or not implemented.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    MESSAGE_TYPE_NON_EXISTENT_OR_NOT_IMPLEMENTED = 97,

    /**
     * Message type not compatible with protocol state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    MESSAGE_TYPE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE = 98,

    /**
     * IE non-existent or not implemented.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INFORMATION_ELEMENT_NON_EXISTENT_OR_NOT_IMPLEMENTED = 99,

    /**
     * Conditional IE error.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    CONDITIONAL_IE_ERROR = 100,

    /**
     * Message not compatible with protocol state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    MESSAGE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE = 101,

    /**
     * Recovery on timer expiry.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RECOVERY_ON_TIMER_EXPIRED = 102,

    /**
     * Protocol error, unspecified.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    PROTOCOL_ERROR_UNSPECIFIED = 111,

    /**
     * Interworking, unspecified.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INTERWORKING_UNSPECIFIED = 127,

    /**
     * Call barred.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    CALL_BARRED = 240,

    /**
     * FDN blocked.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    FDN_BLOCKED = 241,

    /**
     * IMSI unknown in VLR.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    IMSI_UNKNOWN_IN_VLR = 242,

    /**
     * IMEI not accepted.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    IMEI_NOT_ACCEPTED = 243,

    /**
     * Dial request modified to USSD request.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    DIAL_MODIFIED_TO_USSD = 244,

    /**
     * Dial request modified to SS request.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    DIAL_MODIFIED_TO_SS = 245,

    /**
     * Dial request modified to dial with different number.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    DIAL_MODIFIED_TO_DIAL = 246,

    /**
     * Radio off.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RADIO_OFF = 247,

    /**
     * Stops the service.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    OUT_OF_SERVICE = 248,

    /**
     * No valid SIM.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    NO_VALID_SIM = 249,

    /**
     * Radio internal error.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RADIO_INTERNAL_ERROR = 250,

    /**
     * Network response timeout.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    NETWORK_RESP_TIMEOUT = 251,

    /**
     * Request rejected by network.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    NETWORK_REJECT = 252,

    /**
     * Radio access failure.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RADIO_ACCESS_FAILURE = 253,

    /**
     * Radio link failure.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RADIO_LINK_FAILURE = 254,

    /**
     * Radio link lost.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RADIO_LINK_LOST = 255,

    /**
     * Radio uplink failure.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RADIO_UPLINK_FAILURE = 256,

    /**
     * Radio setup failure.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RADIO_SETUP_FAILURE = 257,

    /**
     * Radio release normal.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RADIO_RELEASE_NORMAL = 258,

    /**
     * Radio release abnormal.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RADIO_RELEASE_ABNORMAL = 259,

    /**
     * Access class blocked.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ACCESS_CLASS_BLOCKED = 260,

    /**
     * Network detached.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    NETWORK_DETACH = 261,

    /**
     * Invalid parameter.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    INVALID_PARAMETER = 1025,

    /**
     * SIM not exit.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_NOT_EXIT = 1026,

    /**
     * SIM PIN needed.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PIN_NEED = 1027,

    /**
     * Call not allowed.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_NOT_ALLOW = 1029,

    /**
     * No valid SIM.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_INVALID = 1045,

    /**
     * Unknown reason.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    UNKNOWN = 1279
  }

  /**
   * Defines the call disconnection cause.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface DisconnectedDetails {
    /**
     * Defines the call disconnection cause.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    reason: DisconnectedReason;
    /**
     * Call ending message.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    message: string;
  }

  /**
   * Defines the video call mode information.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export interface ImsCallModeInfo {
    /**
     * Call ID.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    callId: int;
    /**
     * Call ending message.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    result: VideoRequestResultType;
    /**
     * Whether the information is request information.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    isRequestInfo: boolean;
    /**
     * Video call mode.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    imsCallMode: ImsCallMode;
  }

  /**
   * Defines the video call event information.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CallSessionEvent {
    /**
     * Call ID.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    callId: int;
    /**
     * Video call event.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    eventId: CallSessionEventId;
  }

  /**
   * Defines the peer image resolution in a video call.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export interface PeerDimensionsDetail {
    /**
     * Call ID.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    callId: int;
    /**
     * Width of the peer image, in pixels.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    width: int;
    /**
     * Height of the peer image, in pixels.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    height: int;
  }

  /**
   * Defines the local image resolution in a video call.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CameraCapabilities {
    /**
     * Call ID.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    callId: int;
    /**
     * Width of the local image, in pixels.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    width: int;
    /**
     * Height of the local image, in pixels.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    height: int;
  }

  /**
   * Defines a number mark.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  export interface NumberMarkInfo {
    /**
     * Mark type.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    markType: MarkType;

    /**
     * Mark content. When **markType** is set to **MARK_TYPE_ENTERPRISE**, the returned information consists of the
     * employee name and ID.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    markContent?: string;

    /**
     * Mark count.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    markCount?: int;

    /**
     * Mark source.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    markSource?: string;

    /**
     * Whether the number mark is from the cloud. The default value is **false**.
     *
     * - **true**: yes
     * - **false**: no
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    isCloud?: boolean;

    /**
     * Mark details. When **markType** is set to **MARK_TYPE_ENTERPRISE**, the value of this parameter is the department
     * position.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    markDetails?: string;
  }

  /**
   * Indicates the info of the rtt error.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  export interface RttErrorInfo {
    /**
     * Indicates the id of rtt.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    callId: int;

    /**
     * Indicates the type of rtt operation.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    operationType: int;

    /**
     * Indicates the code of rtt cause.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    causeCode: int;

    /**
     * Indicates the text of rtt fail reason.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    reasonText: string;
  }

  /**
   * Indicates the info of the rtt event.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  export interface RttEventInfo {
    /**
     * Indicates the id of rtt.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    callId: int;

    /**
     * Indicates the type of rtt event.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    eventType: int;

    /**
     * Indicates the reason of rtt event.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    reason: int;
  }

  /**
   * Indicates the info of the rtt message.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  export interface RttMessageInfo {
    /**
     * Indicates the id of rtt.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    callId: int;

    /**
     * Indicates the rtt messgae.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    rttMessage: string;
  }

  /**
   * Enumerates number mark types.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  export enum MarkType {
    /**
     * No mark.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_NONE = 0,

    /**
     * Spam call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_CRANK = 1,

    /**
     * Fraud call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_FRAUD = 2,

    /**
     * Express & delivery.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_EXPRESS = 3,

    /**
     * Advertising.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_PROMOTE_SALES = 4,

    /**
     * Estate agent.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_HOUSE_AGENT = 5,

    /**
     * Insurance & loans.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_INSURANCE = 6,

    /**
     * Taxi.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_TAXI = 7,

    /**
     * User-defined.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_CUSTOM = 8,

    /**
     * Other.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_OTHERS = 9,

    /**
     * Yellow page.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_YELLOW_PAGE = 10,

    /**
     * Enterprise contact.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    MARK_TYPE_ENTERPRISE = 11
  }

  /**
   * Indicates the state of the rtt.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  export enum RttState {
    /**
     * Indicates the rtt is disable.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    RTT_STATE_NO = 0,
    /**
     * Indicates the rtt is enable.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    RTT_STATE_YES = 1,
    /**
     * Indicates the rtt is tty state.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    RTT_STATE_REMOTE_TTY = 2,
    /**
     * Indicates the rtt is not support.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    RTT_STATE_REMOTE_NOT_SUPPORT = 3
  }
  /**
   * Indicates the mode of the ims rtt.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  export enum ImsRttMode {
    /**
     * Indicates the rtt is local request update.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    LOCAL_REQUEST_UPGRADE = 0,
    /**
     * Indicates the rtt is local request downgrade.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    LOCAL_REQUEST_DOWNGRADE = 1,
    /**
     * Indicates the rtt is remote request local accept.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    REMOTE_REQUEST_UPGRADE_LOCAL_ACCEPT = 2,
    /**
     * Indicates the rtt is remote request update local reject.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    REMOTE_REQUEST_UPGRADE_LOCAL_REJECT = 3
  }

  /**
   * Enumerates X-Call types.
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 26.0.0 dynamic&static
   */
  export enum XCallType {
    /**
     * E-Call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    XCALL_ECALL_TYPE = 0,
    /**
     * B-Call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    XCALL_BCALL_TYPE = 1,
    /**
     * I-Call.
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    XCALL_ICALL_TYPE = 2
  }
}

export default call;