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
 * @file 拨打电话
 * @kit TelephonyKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type Context from './application/BaseContext';
import type image from './@ohos.multimedia.image';

/**
 * 该模块提供呼叫管理功能，包括拨打电话、跳转到拨号界面、获取通话状态、格式化电话号码等。
 * 
 * 如需订阅通话状态请使用
 * [`observer.on('callStateChange')`]{@link @ohos.telephony.observer:observer.on(type: 'callStateChange', callback: Callback<CallStateInfo>)}
 * 。
 *
 * @syscap SystemCapability.Telephony.CallManager
 * @atomicservice [since 11]
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace call {
  /**
   * 拨打电话，可设置通话参数。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 6 开始支持，从API version 9 开始废弃。替代接口能力仅对系统应用开放。
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { string } phoneNumber - 电话号码。
   * @param { DialOptions } options - 通话参数，选择为语音通话还是视频通话。
   * @param { AsyncCallback<boolean> } callback - 回调函数，返回true为成功，false为失败。
   * @syscap SystemCapability.Telephony.CallManager
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead telephony.call#dialCall
   */
  function dial(phoneNumber: string, options: DialOptions, callback: AsyncCallback<boolean>): void;

  /**
   * 拨打电话，可设置通话参数。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 6 开始支持，从API version 9 开始废弃。替代接口能力仅对系统应用开放。
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { string } phoneNumber - 电话号码。
   * @param { DialOptions } options - 通话参数，选择为语音通话还是视频通话。
   * @returns { Promise<boolean> } 以Promise形式返回拨打电话的结果，返回true为成功，false为失败。
   * @syscap SystemCapability.Telephony.CallManager
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead telephony.call#dialCall
   */
  function dial(phoneNumber: string, options?: DialOptions): Promise<boolean>;

  /**
   * 拨打电话。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 6 开始支持，从API version 9 开始废弃。替代接口能力仅对系统应用开放。
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { string } phoneNumber - 电话号码。
   * @param { AsyncCallback<boolean> } callback - 回调函数，返回true为成功，false为失败。
   * @syscap SystemCapability.Telephony.CallManager
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead telephony.call#dialCall
   */
  function dial(phoneNumber: string, callback: AsyncCallback<boolean>): void;

  /**
   * 拨打电话，可设置通话参数。使用callback异步回调。
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { string } phoneNumber - 电话号码。
   * @param { DialCallOptions } options - 通话参数，携带呼叫的其他配置信息。
   * @param { AsyncCallback<void> } callback - 以callback形式异步返回拨打电话的结果。
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
   * 拨打电话，可设置通话参数。使用Promise异步回调。
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { string } phoneNumber - 电话号码。
   * @param { DialCallOptions } options - 通话参数，携带呼叫的其他配置信息。<br/>不填该参数则默认使用如下配置，参考
   *     [DialCallOptions]{@link call.DialCallOptions}。<br/>- 帐户Id：卡槽1。 <br/>- 音视频类型：语音通话。 <br/>- 拨号场景：普通呼叫。 <br/>- 拨号类
   *     型：运营商通话。
   * @returns { Promise<void> } 以Promise形式异步返回拨号结果。
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
   * 拨打电话。使用callback异步回调。
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { string } phoneNumber - 电话号码。
   * @param { AsyncCallback<void> } callback - 以callback形式异步返回拨打电话的结果。
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
   * 跳转到拨号界面，并显示待拨出的号码。使用callback异步回调。只支持在UIAbility中调用。
   *
   * @param { string } phoneNumber - 电话号码。
   * @param { AsyncCallback<void> } callback - 以callback形式异步返回跳转拨号界面的结果。
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
   * 跳转到拨号界面，并显示待拨出的号码。使用Promise异步回调。只支持在UIAbility中调用。
   *
   * @param { string } phoneNumber - 电话号码。
   * @returns { Promise<void> } 以Promise形式异步返回拨号的结果。
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
   * 跳转到拨号界面，并显示待拨出的号码。使用Promise异步回调。只支持在UIAbility中调用。
   *
   * @param { string } phoneNumber - 电话号码。
   * @param { MakeCallOptions } [options] - 通话参数。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 跳转到拨号界面，并显示待拨出的号码。使用Promise异步回调。后台调用需要申请ohos.permission.START_ABILITIES_FROM_BACKGROUND权限。
   *
   * @param { Context } context - 应用上下文Context。
   * @param { string } phoneNumber - 电话号码。
   * @returns { Promise<void> } 以Promise形式异步返回拨号的结果。
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
   * 跳转到拨号界面，并显示待拨出的号码。使用Promise异步回调。
   * 
   * > **说明**:
   * >
   * > 该接口返回校验token，应用可以利用phoneNumber和token实现特定能力，比如蜂窝下行流的录制。
   *
   * @param { string } phoneNumber - 电话号码。
   * @param { MakeCallOptions } [options] - 通话参数。
   * @returns { Promise<string> } Promise对象，返回鉴权校验token。
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
   * 判断是否存在通话。使用callback异步回调。
   *
   * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示当前存在通话，false表示当前不存在通话。
   * @syscap SystemCapability.Telephony.CallManager
   * @since 6 dynamic
   * @since 23 static
   */
  function hasCall(callback: AsyncCallback<boolean>): void;

  /**
   * 判断是否存在通话。使用Promise异步回调。
   *
   * @returns { Promise<boolean> } 以Promise形式异步返回判断是否存在通话。返回true表示当前存在通话，false表示当前不存在通话。
   * @syscap SystemCapability.Telephony.CallManager
   * @since 6 dynamic
   * @since 23 static
   */
  function hasCall(): Promise<boolean>;

  /**
   * 判断是否存在通话。
   *
   * @returns { boolean } 返回判断是否存在通话。返回true表示当前存在通话，false表示当前不存在通话。
   * @syscap SystemCapability.Telephony.CallManager
   * @since 10 dynamic
   * @since 23 static
   */
  function hasCallSync(): boolean;

  /**
   * 获取当前通话状态。使用callback异步回调。
   *
   * @param { AsyncCallback<CallState> } callback - 回调函数，异步返回获取到的通话状态。
   * @syscap SystemCapability.Telephony.CallManager
   * @since 6 dynamic
   * @since 23 static
   */
  function getCallState(callback: AsyncCallback<CallState>): void;

  /**
   * 获取当前通话状态。使用Promise异步回调。
   *
   * @returns { Promise<CallState> } 以Promise形式异步返回获取到的通话状态。
   * @syscap SystemCapability.Telephony.CallManager
   * @since 6 dynamic
   * @since 23 static
   */
  function getCallState(): Promise<CallState>;

  /**
   * 获取当前通话状态。
   *
   * @returns { CallState } 返回获取到的通话状态。
   * @syscap SystemCapability.Telephony.CallManager
   * @since 10 dynamic
   * @since 23 static
   */
  function getCallStateSync(): CallState;

  /**
   * 如果来电铃声响起，设备将停止铃声。否则，此方法不起作用。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回停止铃声的结果。
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
   * 如果来电铃声响起，设备将停止铃声。否则，此方法不起作用。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @returns { Promise<void> } 以Promise形式异步返回结果。
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
   * 检查当前设备是否具备语音通话能力。
   *
   * @returns { boolean } 返回true表示设备具备语音通话能力，返回false表示设备不具备语音通话能力。
   * @syscap SystemCapability.Telephony.CallManager
   * @since 7 dynamic
   * @since 23 static
   */
  function hasVoiceCapability(): boolean;

  /**
   * 根据电话号码参数，判断是否是紧急电话号码。使用callback异步回调。
   *
   * @param { string } phoneNumber - 电话号码。
   * @param { EmergencyNumberOptions } options - 电话号码参数。
   * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示是紧急电话号码，返回false表示不是紧急电话号码。
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
   * 根据电话号码参数，判断是否是紧急电话号码。使用Promise异步回调。
   *
   * @param { string } phoneNumber - 电话号码。
   * @param { EmergencyNumberOptions } options - 电话号码参数。
   * @returns { Promise<boolean> } 以Promise形式异步返回判断是否是紧急电话号码的结果。返回true表示是紧急电话号码，返回false表示不是紧急电话号码。
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
   * 判断是否是紧急电话号码。使用callback异步回调。
   *
   * @param { string } phoneNumber - 电话号码。
   * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示是紧急电话号码，返回false表示不是紧急电话号码。
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
   * 格式化电话号码，可设置格式化参数。使用callback异步回调。
   * 
   * 电话号码格式化后为标准数字字符串，例如：“138 xxxx xxxx”、“0755 xxxx xxxx”。
   *
   * @param { string } phoneNumber - 电话号码。
   * @param { NumberFormatOptions } options - 格式化参数，如国家码。
   * @param { AsyncCallback<string> } callback - 回调函数，返回格式化电话号码的结果。
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
   * 格式化电话号码，可设置格式化参数。使用Promise异步回调。
   * 
   * 电话号码格式化后为标准数字字符串，例如：“138 xxxx xxxx”、“0755 xxxx xxxx”。
   *
   * @param { string } phoneNumber - 电话号码。
   * @param { NumberFormatOptions } options - 格式化参数，如国家码。
   * @returns { Promise<string> } 以Promise形式异步返回格式化电话号码的结果。
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
   * 格式化电话号码。使用callback异步回调。
   * 
   * 电话号码格式化后为标准数字字符串，例如：“138 xxxx xxxx”、“0755 xxxx xxxx”。
   *
   * @param { string } phoneNumber - 电话号码。
   * @param { AsyncCallback<string> } callback - 回调函数，返回格式化电话号码的结果。
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
   * 将电话号码格式化为E.164表示形式，使用callback异步回调。
   * 
   * 待格式化的电话号码需要与传入的国家码相匹配，如中国电话号码需要传入国家码CN，否则格式化后的电话号码为null。
   *
   * @param { string } phoneNumber - 电话号码。
   * @param { string } countryCode - 国家码，支持所有国家码，如：中国（CN）。
   * @param { AsyncCallback<string> } callback - 回调函数，返回将电话号码格式化为E.164表示形式的结果。
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
   * 将电话号码格式化为E.164表示形式，使用Promise异步回调。
   * 
   * 待格式化的电话号码需要与传入的国家码相匹配，如中国电话号码需要传入国家码CN，否则格式化后的电话号码为null。
   * 
   * 支持所有国家码。
   *
   * @param { string } phoneNumber - 电话号码。
   * @param { string } countryCode - 国家码，支持所有国家码，如：中国（CN）。
   * @returns { Promise<string> } 以Promise形式异步返回将电话号码格式化为E.164表示形式的结果。
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
   * 接听来电。使用callback异步回调。
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - 呼叫Id。可以通过订阅callDetailsChange事件获得。
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回接听电话的结果。
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
   * 接听来电。使用Promise异步回调。
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - 呼叫Id。可以通过订阅callDetailsChange事件获得。从API version 9开始为可选参数。<br/>不填该参数则接通最近一通正在响铃的来电。
   * @returns { Promise<void> } 以Promise形式异步返回结果。
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
   * 接听来电。使用callback异步回调。
   *
   * @permission ohos.permission.ANSWER_CALL or ohos.permission.MANAGE_CALL_FOR_DEVICES
   * @param { AsyncCallback<void> } callback - 回调函数。返回接听电话成功，err为undefined，否则为错误对象。
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
   * 接听来电。使用Promise异步回调。
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { VideoStateType } videoState - 接听通话类型。
   * @param { int } callId - 呼叫Id。可以通过订阅callDetailsChange事件获得。
   * @returns { Promise<void> } 以Promise形式异步返回接听电话结果。
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
   * 接听rtt来电
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
   * 挂断电话。使用callback异步回调。
   *
   * @permission ohos.permission.ANSWER_CALL or ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - 呼叫Id。可以通过订阅callDetailsChange事件获得。
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回挂断电话的结果。
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
   * 挂断电话。使用Promise异步回调。
   *
   * @permission ohos.permission.ANSWER_CALL or ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - 呼叫Id。可以通过订阅callDetailsChange事件获得。从API version 9开始为可选参数。</br>不填该参数则挂断最近一通正在进行/拨号/连接的通话。
   * @returns { Promise<void> } 以Promise形式异步返回结果。
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
   * 挂断电话。使用callback异步回调。
   *
   * @permission ohos.permission.ANSWER_CALL or ohos.permission.SET_TELEPHONY_STATE or
   *     ohos.permission.MANAGE_CALL_FOR_DEVICES
   * @param { AsyncCallback<void> } callback - 回调函数。当挂断电话成功，err为undefined，否则为错误对象。
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
   * 拒绝来电。使用callback异步回调。
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - 呼叫Id。可以通过订阅callDetailsChange事件获得。
   * @param { RejectMessageOptions } options - 拒绝消息选项。
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回拒接电话的结果。
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
   * 拒绝来电。使用Promise异步回调。
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - 呼叫Id。可以通过订阅callDetailsChange事件获得。从API version 9开始为可选参数。<br/>不填该参数则拒接最近一通正在响铃的来电。
   * @param { RejectMessageOptions } options - 拒绝消息选项。不填该参数则不会发送拒接短信。
   * @returns { Promise<void> } 以Promise形式异步返回结果。
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
   * 拒绝来电。使用callback异步回调。
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - 呼叫Id。可以通过订阅callDetailsChange事件获得。
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回拒接电话的结果。
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
   * 拒绝来电。使用callback异步回调。
   *
   * @permission ohos.permission.ANSWER_CALL or ohos.permission.MANAGE_CALL_FOR_DEVICES
   * @param { AsyncCallback<void> } callback - 回调函数。当拒接来电成功，err为undefined，否则为错误对象。
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
   * 拒绝来电。使用callback异步回调。
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { RejectMessageOptions } options - 拒绝消息选项。
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回拒接电话的结果。
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
   * 保持通话。使用callback异步回调。
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - 呼叫Id。
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回保持电话的结果。
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
   * 保持通话。使用Promise异步回调。
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - 呼叫Id。
   * @returns { Promise<void> } 以Promise形式异步返回结果。
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
   * 取消保持通话。使用callback异步回调。
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - 呼叫Id。
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回取消保持电话的结果。
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
   * 取消保持通话。使用Promise异步回调。
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - 呼叫Id。
   * @returns { Promise<void> } 以Promise形式异步返回结果。
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
   * 切换呼叫。使用callback异步回调。
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - 呼叫Id。
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回交换电话的结果。
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
   * 切换呼叫。使用Promise异步回调。
   *
   * @permission ohos.permission.ANSWER_CALL
   * @param { int } callId - 呼叫Id。
   * @returns { Promise<void> } 以Promise形式异步返回结果。
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
   * 合并通话，将两通电话合并成会议电话。使用callback异步回调。
   *
   * @param { int } callId - 呼叫Id。
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回合并会议的结果。
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
   * 合并通话，将两通电话合并成会议电话。使用Promise异步回调。
   *
   * @param { int } callId - 呼叫Id。
   * @returns { Promise<void> } 以Promise形式异步返回结果。
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
   * 获取主呼叫Id。使用callback异步回调。
   *
   * @param { int } callId - 呼叫Id。
   * @param { AsyncCallback<int> } callback - 回调函数。返回主呼叫Id。
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
   * 获取主呼叫Id。使用Promise异步回调。
   *
   * @param { int } callId - 呼叫Id。
   * @returns { Promise<int> } 以Promise形式异步返回主呼叫Id。
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
   * 获取子呼叫Id列表。使用callback异步回调。
   *
   * @param { int } callId - 呼叫Id。
   * @param { AsyncCallback<Array<string>> } callback - 回调函数。返回子呼叫Id列表。
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
   * 获取子呼叫Id列表。使用Promise异步回调。
   *
   * @param { int } callId - 呼叫Id。
   * @returns { Promise<Array<string>> } 以Promise形式异步返回子呼叫Id列表。
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
   * 获取会议的呼叫Id列表。使用callback异步回调。
   *
   * @param { int } callId - 呼叫Id。
   * @param { AsyncCallback<Array<string>> } callback - 回调函数。返回会议的呼叫Id列表。
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
   * 获取会议的呼叫Id列表。使用Promise异步回调。
   *
   * @param { int } callId - 呼叫Id。
   * @returns { Promise<Array<string>> } 以Promise形式异步返回会议的呼叫Id列表。
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
   * 获取呼叫等待状态。使用callback异步回调。
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { AsyncCallback<CallWaitingStatus> } callback - 回调函数。<br/>返回呼叫等待状态。<br/>- 0：禁用呼叫等待。 <br/>- 1：启用呼叫等待。
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
   * 获取呼叫等待状态。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @returns { Promise<CallWaitingStatus> } 以Promise形式异步返回呼叫等待状态。<br/>- 0：禁用呼叫等待。 <br/>- 1：启用呼叫等待。
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
   * 设置呼叫等待。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { boolean } activate - 呼叫等待是否处于启用状态。<br/>- false：禁用呼叫等待。<br/>- true：启用呼叫等待。
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回设置呼叫等待的结果。
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
   * 设置呼叫等待。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { boolean } activate - 呼叫等待是否处于启用状态。<br/>- false：禁用呼叫等待。<br/>- true：启用呼叫等待。
   * @returns { Promise<void> } 以Promise形式异步返回结果。
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
   * 获取电话号码的呼叫转移状态。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_CALL_TRANSFER_INFO
   * @param { CallTransferType } type - 指示要获取哪种类型的呼叫转移。
   * @param { string } number - 指示用于获取呼叫转移状态的号码。
   * @returns { Promise<CallTransferResult> } Promise对象，返回呼叫转移结果。
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
   * 启动双音多频。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - 呼叫Id。
   * @param { string } character - DTMF码。
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回启动双音多频的结果。
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
   * 启动双音多频。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - 呼叫Id。
   * @param { string } character - DTMF码。
   * @returns { Promise<void> } 以Promise形式异步返回。
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
   * 停止双音多频。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - 呼叫Id。
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回停止双音多频的结果。
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
   * 停止双音多频。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - 呼叫Id。
   * @returns { Promise<void> } 以Promise形式异步返回结果。
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
   * 继续进行通话。使用callback异步回调。
   * 
   * 当用户呼叫号码为：“普通电话号码”+“;”+"DTMF字符"(例如：“400xxxxxxx;123”)，并且已经订阅了通话后延迟事件，电话接通后，系统将上报通话后延迟事件，应用可以调用此接口选择是否发送DTMF音。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - 呼叫Id。
   * @param { boolean } proceed - 用户选择是否发送DTMF(Dual Tone Multi Frequency，双音多频)音，默认为false。<br/>-true：是<br/>-false：否
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回继续进行通话的结果。
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
   * 继续进行通话。使用Promise异步回调。
   * 
   * 当用户呼叫号码为：“普通电话号码”+“;”+"DTMF字符"(例如：“400xxxxxxx;123”)，并且已经订阅了通话后延迟事件，电话接通后，系统将上报通话后延迟事件，应用可以调用此接口选择是否发送DTMF音。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - 呼叫Id。
   * @param { boolean } proceed - 用户选择是否发送DTMF音，默认为false。<br/>-true：是<br/>-false：否
   * @returns { Promise<void> } 以Promise形式异步返回结果。
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
   * 判断是否正在处于紧急呼叫。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { AsyncCallback<boolean> } callback - 以回调函数的方式返回结果。true表示紧急号码，false表示非紧急号码。
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
   * 判断是否正在处于紧急呼叫。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @returns { Promise<boolean> } 以Promise形式异步返回结果。true表示正在处于紧急呼叫，false表示不处于紧急呼叫。
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
   * 订阅callDetailsChange事件。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'callDetailsChange' } type - 通话时监听通话详情的变化，参数固定为'callDetailsChange'。
   * @param { Callback<CallAttributeOptions> } callback - 以回调函数的方式返回订阅callDetailsChange事件的结果。
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
   * 取消订阅callDetailsChange事件。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'callDetailsChange' } type - 通话结束时取消监听通话详情的变化，参数固定为'callDetailsChange'。
   * @param { Callback<CallAttributeOptions> } callback - 回调函数。不填该参数将不会收到取消订阅的处理结果。
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
   * 订阅callEventChange事件。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'callEventChange' } type - 通话时监听通话事件的变化，参数固定为'callEventChange'。
   * @param { Callback<CallEventOptions> } callback - 以回调函数的方式返回订阅callEventChange事件的结果。
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
   * 取消订阅callEventChange事件。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'callEventChange' } type - 通话结束时取消监听通话事件的变化，参数固定为'callEventChange'。
   * @param { Callback<CallEventOptions> } callback - 回调函数。不填该参数将不会收到取消订阅的处理结果。
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
   * 订阅callDisconnectedCause事件。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'callDisconnectedCause' } type - 通话时监听断开连接的原因，参数固定为'callDisconnectedCause'。
   * @param { Callback<DisconnectedDetails> } callback - 以回调函数的方式返回订阅callDisconnectedCause事件的结果。
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
   * 取消订阅callDisconnectedCause事件。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'callDisconnectedCause' } type - 调用断开连接的原因，参数固定为'callDisconnectedCause'。
   * @param { Callback<DisconnectedDetails> } callback - 回调函数。不填该参数将不会收到取消订阅的处理结果。
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
   * 订阅mmiCodeResult事件。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'mmiCodeResult' } type - 通话时监听MMI码结果，参数固定为'mmiCodeResult'。
   * @param { Callback<MmiCodeResults> } callback - 以回调函数的方式返回订阅mmiCodeResult事件的结果。
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
   * 取消订阅mmiCodeResult事件。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'mmiCodeResult' } type - MMI码结果，参数固定为'mmiCodeResult'。
   * @param { Callback<MmiCodeResults> } callback - 回调函数。不填该参数将不会收到取消订阅的处理结果。
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
   * 订阅通话音频设备切换事件。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'audioDeviceChange' } type - 通话音频设备发生变化，参数固定为'audioDeviceChange'。
   * @param { Callback<AudioDeviceCallbackInfo> } callback - 以回调函数的方式返回订阅通话音频设备切换事件的结果。
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
   * 取消订阅audioDeviceChange事件。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'audioDeviceChange' } type - 通话音频设备发生变化，参数固定为'audioDeviceChange'。
   * @param { Callback<AudioDeviceCallbackInfo> } callback - 回调函数。不填该参数将不会收到取消订阅的处理结果。
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
   * 订阅拨号后延迟事件。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'postDialDelay' } type - 拨号后延迟，参数固定为'postDialDelay'。
   * @param { Callback<string> } callback - 以回调函数的方式返回订阅拨号后延迟事件的结果。
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
   * 取消订阅拨号后延迟事件。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'postDialDelay' } type - 拨号后延迟，参数固定为'postDialDelay'。
   * @param { Callback<string> } callback - 回调函数。不填该参数将不会收到取消订阅的处理结果。
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
   * 订阅RTT消息事件
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
   * 去订阅rtt消息事件
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
   * 订阅rtt通话变化
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
   * 去订阅rtt通话变化事件
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
   * 订阅rtt通话错误事件
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
   * 去订阅rtt通话错误事件
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
   * 判断是否允许再拨打一通新电话。使用callback异步回调。
   *
   * @param { AsyncCallback<boolean> } callback - 以回调函数的方式返回结果。true表示允许拨打，false表示不可拨打。
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
   * 判断是否允许再拨打一通新电话。使用Promise异步回调。
   *
   * @returns { Promise<boolean> } 以Promise形式异步返回结果。true表示允许拨打，false表示不可拨打。
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
   * 分离会议电话。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - 呼叫Id。
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回分离会议电话的结果。
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
   * 分离会议电话。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - 呼叫Id。
   * @returns { Promise<void> } 以Promise形式异步返回结果。
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
   * 获取呼叫限制状态。使用callback异步回调。
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { CallRestrictionType } type - 呼叫限制类型。
   * @param { AsyncCallback<RestrictionStatus> } callback - 回调函数。返回限制状态。
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
   * 获取呼叫限制状态。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { CallRestrictionType } type - 呼叫限制类型。
   * @returns { Promise<RestrictionStatus> } 以Promise形式异步返回结果。
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
   * 设置呼叫限制状态。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { CallRestrictionInfo } info - 呼叫限制信息。
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回设置呼叫限制状态的结果。
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
   * 设置呼叫限制状态。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { CallRestrictionInfo } info - 呼叫限制信息。
   * @returns { Promise<void> } 以Promise形式异步返回结果。
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
   * 修改呼叫限制密码。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { string } oldPassword - 呼叫限制旧密码。
   * @param { string } newPassword - 呼叫限制新密码。
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回修改呼叫限制密码的结果。
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
   * 修改呼叫限制密码。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { string } oldPassword - 呼叫限制旧密码。
   * @param { string } newPassword - 呼叫限制新密码。
   * @returns { Promise<void> } 以Promise形式异步返回结果。
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
   * 获取呼叫转移信息。使用callback异步回调。
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { CallTransferType } type - 呼叫转移类型。
   * @param { AsyncCallback<CallTransferResult> } callback - 回调函数。返回呼叫转移信息。
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
   * 获取呼叫转移信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { CallTransferType } type - 呼叫转移类型。
   * @returns { Promise<CallTransferResult> } 以Promise形式异步返回结果。
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
   * 设置呼叫转移信息。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { CallTransferInfo } info - 呼叫转移信息。
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回设置呼叫转移信息的结果。
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
   * 设置呼叫转移信息。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { CallTransferInfo } info - 呼叫转移信息。
   * @returns { Promise<void> } 以Promise形式异步返回结果。
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
   * 判断是否正在响铃。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { AsyncCallback<boolean> } callback - 以回调函数的方式返回是否正在响铃的结果。true表示正在响铃，false表示没有在响铃。
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
   * 判断是否正在响铃。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @returns { Promise<boolean> } 以Promise形式异步返回结果。true表示正在响铃，false表示没有响铃。
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
   * 设置通话中的静音。使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回设置通话中的静音的结果。
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
   * 设置通话中的静音。使用Promise异步回调。
   *
   * @returns { Promise<void> } 以Promise形式异步返回结果。
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
   * 取消通话中的静音。使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回取消通话中的静音的结果。
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
   * 取消通话中的静音。使用Promise异步回调。
   *
   * @returns { Promise<void> } 以Promise形式异步返回结果。
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
   * 设置通话音频设备。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { AudioDevice } device - 音频设备。
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回设置通话音频设备的结果。
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
   * 设置通话音频设备。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { AudioDevice } device - 音频设备。
   * @returns { Promise<void> } 以Promise形式异步返回结果。
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
   * 加入会议。使用callback异步回调。
   *
   * @param { int } mainCallId - 主通话Id。
   * @param { Array<string> } callNumberList - 呼叫号码列表。
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回加入会议的结果。
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
   * 加入会议。使用Promise异步回调。
   *
   * @param { int } mainCallId - 主通话Id。
   * @param { Array<string> } callNumberList - 呼叫号码列表。
   * @returns { Promise<void> } 以Promise形式异步返回结果。
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
   * 移出电话会议，将指定通话从会议电话中挂断。使用callback异步回调。
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { int } callId - 呼叫Id。
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回移出会议的结果。
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
   * 移出电话会议，将指定通话从会议电话中挂断。使用Promise异步回调。
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { int } callId - 呼叫Id。
   * @returns { Promise<void> } 以Promise形式异步返回结果。
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
   * 更新Ims呼叫模式。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - 呼叫Id。
   * @param { ImsCallMode } mode - Ims呼叫模式。
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回更新Ims呼叫模式的结果。
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
   * 更新Ims呼叫模式。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - 呼叫Id。
   * @param { ImsCallMode } mode - Ims呼叫模式。
   * @returns { Promise<void> } 以Promise形式异步返回结果。
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
   * 视频通话升级过程中取消升级。使用Promise异步回调。
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { int } callId - 呼叫Id。可以通过订阅callDetailsChange事件获得。
   * @returns { Promise<void> } 以Promise形式异步返回升级过程中取消视频升级结果。
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
   * 设置使用指定的相机进行视频通话，cameraId为空表示关闭相机。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - 呼叫Id。可以通过订阅callDetailsChange事件获得。
   * @param { string } cameraId - 相机ID。cameraId获取方式可参考相机管理
   *     [getSupportedCameras]{@link @ohos.multimedia.camera:camera.CameraManager.getSupportedCameras}接口。
   * @returns { Promise<void> } 以Promise形式异步返回设置开启，关闭，切换相机结果。
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
   * 设置本端预览画面窗口。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - 呼叫Id。可以通过订阅callDetailsChange事件获得。
   * @param { string } surfaceId - 预览窗口Id。surfaceId获取方式可参考
   *     [getXComponentSurfaceId]{@link XComponentController#getXComponentSurfaceId}。
   * @returns { Promise<void> } 以Promise形式异步返回设置本端预览画面窗口结果。
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
   * 设置远端画面窗口。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - 呼叫Id。可以通过订阅callDetailsChange事件获得。
   * @param { string } surfaceId - 画面窗口Id。surfaceId获取方式可参考
   *     [getXComponentSurfaceId]{@link XComponentController#getXComponentSurfaceId}。
   * @returns { Promise<void> } 以Promise形式异步返回设置远端画面窗口结果。
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
   * 设置视频通话画面显示方向为设备方向。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - 呼叫Id。可以通过订阅callDetailsChange事件获得。
   * @param { DeviceDirection } deviceDirection - 画面方向。该参数根据设备方向获取。
   * @returns { Promise<void> } 以Promise形式异步返回设置视频通话画面方向结果。
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
   * 订阅imsCallModeChange事件。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'imsCallModeChange' } type - 视频通话时监听通话模式的变化，参数固定为'imsCallModeChange'。
   * @param { Callback<ImsCallModeInfo> } callback - 以回调函数的方式返回订阅imsCallModeChange事件的结果。
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
   * 取消订阅imsCallModeChange事件。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'imsCallModeChange' } type - 视频通话时取消监听通话模式的变化，参数固定为'imsCallModeChange'。
   * @param { Callback<ImsCallModeInfo> } callback - 回调函数。不填该参数将不会收到取消订阅的处理结果。
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
   * 订阅callSessionEvent事件。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'callSessionEvent' } type - 视频通话时监听通话事件，参数固定为'callSessionEvent'。
   * @param { Callback<CallSessionEvent> } callback - 以回调函数的方式返回订阅callSessionEvent事件的结果。
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
   * 取消订阅callSessionEvent事件。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'callSessionEvent' } type - 视频通话时取消监听通话事件，参数固定为'callSessionEvent'。
   * @param { Callback<CallSessionEvent> } callback - 回调函数。不填该参数将不会收到取消订阅的处理结果。
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
   * 订阅peerDimensionsChange事件。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'peerDimensionsChange' } type - 视频通话时监听对端画面分辨率的变化，参数固定为'peerDimensionsChange'。
   * @param { Callback<PeerDimensionsDetail> } callback - 以回调函数的方式返回订阅peerDimensionsChange事件的结果。
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
   * 取消订阅peerDimensionsChange事件。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'peerDimensionsChange' } type - 视频通话时监听对端画面分辨率的变化，参数固定为'peerDimensionsChange'。
   * @param { Callback<PeerDimensionsDetail> } callback - 回调函数。不填该参数将不会收到取消订阅的处理结果。
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
   * 订阅cameraCapabilitiesChange事件。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'cameraCapabilitiesChange' } type - 视频通话时监听本端相机画面分辨率的变化，参数固定为'cameraCapabilitiesChange'。
   * @param { Callback<CameraCapabilities> } callback - 以回调函数的方式返回订阅cameraCapabilitiesChange事件的结果。
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
   * 取消订阅cameraCapabilitiesChange事件。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { 'cameraCapabilitiesChange' } type - 视频通话时取消监听本端相机画面分辨率的变化，参数固定为'cameraCapabilitiesChange'。
   * @param { Callback<CameraCapabilities> } callback - 回调函数。不填该参数将不会收到取消订阅的处理结果。
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
   * 启用Ims开关。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回启用Ims开关的结果。
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
   * 启用Ims开关。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @returns { Promise<void> } 以Promise形式异步返回结果。
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
   * 禁用Ims开关。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回禁用Ims开关的结果。
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
   * 禁用Ims开关。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @returns { Promise<void> } 以Promise形式异步返回结果。
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
   * 判断Ims开关是否启用。使用callback异步回调。
   *
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { AsyncCallback<boolean> } callback - 以回调函数的方式返回判断Ims开关是否启用的结果。true表示Ims开关启用，false表示未启用。
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
   * 判断Ims开关是否启用。使用Promise异步回调。
   *
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @returns { Promise<boolean> } 以Promise形式异步返回结果。true表示Ims开关启用，false表示未启用。
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
   * 判断Ims开关是否启用。调用此API返回结果。
   *
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @returns { boolean } 用来返回结果。true表示Ims开关启用，false表示未启用。
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
   * 取消未激活完成的非结构化补充数据业务。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回取消未激活完成的非结构化补充数据业务的结果。
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
   * 取消未激活完成的非结构化补充数据业务。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @returns { Promise<void> } 以Promise形式异步返回结果。
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
   * 设置NR语音的开关状态。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { VoNRState } state - 开关状态。
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回设置NR语音的开关状态的结果。
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
   * 设置NR语音的开关状态。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { VoNRState } state - 开关状态。
   * @returns { Promise<void> } 以Promise形式异步返回结果。
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
   * 查询NR语音的开关状态。使用callback异步回调。
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { AsyncCallback<VoNRState> } callback - 回调函数。返回NR语音开关的状态。
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
   * 查询NR语音的开关状态。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @returns { Promise<VoNRState> } 以Promise形式异步返回开关状态。
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
   * 检查是否可以设置呼叫转移时间。使用callback异步回调。
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示可以设置，返回false表示不可以设置。
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
   * 检查是否可以设置呼叫转移时间。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - 卡槽ID。<br/>- 0：卡槽1。<br/>- 1：卡槽2。
   * @returns { Promise<boolean> } 以Promise形式异步返回是否可以设置呼叫转移时间。返回true表示可以设置，返回false表示不可以设置。
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
   * 暗码广播。使用callback异步回调。
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { string } inputCode - 暗码。支持暗码字段, 如：*#*#2846579#*#*(工程菜单)。
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回暗码广播的结果。
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
   * 暗码广播。使用Promise异步回调。
   *
   * @permission ohos.permission.PLACE_CALL
   * @param { string } inputCode - 暗码。支持暗码字段, 如：*#*#2846579#*#*(工程菜单)。
   * @returns { Promise<void> } 以Promise形式异步返回结果。
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
   * 删除未接来电通知。使用callback异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE and ohos.permission.READ_CALL_LOG and
   *     ohos.permission.WRITE_CALL_LOG
   * @param { AsyncCallback<void> } callback - 以回调函数的方式返回删除未接来电通知的结果。
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
   * 删除未接来电通知。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE and ohos.permission.READ_CALL_LOG and
   *     ohos.permission.WRITE_CALL_LOG
   * @returns { Promise<void> } 以Promise形式异步返回结果。
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
   * 发布通话界面事件。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } callId - 呼叫Id。
   * @param { string } eventName - 事件名称。
   * @returns { Promise<void> } 以Promise形式异步返回。
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
   * 设置rtt功能
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
   * 发送rtt消息
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
   * 启动rtt
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
   * 停止rtt
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
   * 预加载通话应用
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @returns { Promise<boolean> } 201 - 无权限
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
   * 卸载通话应用
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @returns { Promise<boolean> } 201 - 无权限
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
   * 用于向运营商发送USSD业务（Unstructured Supplementary Service Data，非结构化补充数据业务）的响应消息。
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - 表示发送响应的卡槽ID。
   * @param { string } content - 表示响应内容。
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
   * IP多媒体系统调用模式。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum ImsCallMode {
    /**
     * 仅限音频呼叫。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_MODE_AUDIO_ONLY = 0,

    /**
     * 仅发送呼叫。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_MODE_SEND_ONLY = 1,

    /**
     * 仅接收呼叫。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_MODE_RECEIVE_ONLY = 2,

    /**
     * 允许发送和接收呼叫。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_MODE_SEND_RECEIVE = 3,

    /**
     * 暂停视频呼叫。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_MODE_VIDEO_PAUSED = 4
  }

  /**
   * 5G语音开关状态。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  export enum VoNRState {
    /**
     * 关闭状态。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    VONR_STATE_OFF = 0,

    /**
     * 打开状态。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    VONR_STATE_ON = 1
  }

  /**
   * 音频设备类型。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  export enum AudioDeviceType {
    /**
     * 耳机设备。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    DEVICE_EARPIECE = 0,

    /**
     * 扬声器设备。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    DEVICE_SPEAKER = 1,

    /**
     * 有线耳机设备。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    DEVICE_WIRED_HEADSET = 2,

    /**
     * 蓝牙SCO设备。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    DEVICE_BLUETOOTH_SCO = 3,

    /**
     * 分布式车机设备。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    DEVICE_DISTRIBUTED_AUTOMOTIVE = 4
  }

  /**
   * 音频设备。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  export interface AudioDevice {
    /**
     * 音频设备类型。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    deviceType: AudioDeviceType;

    /**
     * 音频设备地址。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    address?: string;

    /**
     * 音频设备名称。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    deviceName?: string;
  }

  /**
   * 音频设备信息。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  export interface AudioDeviceCallbackInfo {
    /**
     * 音频设备列表。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    audioDeviceList: Array<AudioDevice>;

    /**
     * 当前音频设备。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    currentAudioDevice: AudioDevice;

    /**
     * 是否静音。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    isMuted: boolean;

    /**
     * 是否禁用麦克风。
     * 
     * - true：禁用麦克风 
     * - false：启用麦克风
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 24 dynamic&static
     */
    isMicDisabled?: boolean;
  }

  /**
   * 呼叫限制类型。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum CallRestrictionType {
    /**
     * 限制所有呼入。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_TYPE_ALL_INCOMING = 0,

    /**
     * 限制所有呼出。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_TYPE_ALL_OUTGOING = 1,

    /**
     * 限制国际通话。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_TYPE_INTERNATIONAL = 2,

    /**
     * 限制除归属国以外的国际通话。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_TYPE_INTERNATIONAL_EXCLUDING_HOME = 3,

    /**
     * 限制漫游呼入。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_TYPE_ROAMING_INCOMING = 4,

    /**
     * 限制所有通话。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_TYPE_ALL_CALLS = 5,

    /**
     * 限制传出业务。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_TYPE_OUTGOING_SERVICES = 6,

    /**
     * 限制呼入业务。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_TYPE_INCOMING_SERVICES = 7
  }

  /**
   * 呼叫转移信息。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface CallTransferInfo {
    /**
     * 转移编号。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    transferNum: string;

    /**
     * 呼叫转移类型。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    type: CallTransferType;

    /**
     * 设置呼叫转移类型。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    settingType: CallTransferSettingType;

    /**
     * 开始时间的小时数。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    startHour?: int;

    /**
     * 开始时间的分钟数。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    startMinute?: int;

    /**
     * 结束时间的小时数。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    endHour?: int;

    /**
     * 结束时间的分钟数。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    endMinute?: int;
  }

  /**
   * 呼叫转移类型。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi [since 8 - 24]
   * @publicapi [since 26.0.0]
   * @since 8 dynamic
   * @since 23 static
   */
  export enum CallTransferType {
    /**
     * 无条件转移。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi [since 8 - 24]
     * @publicapi [since 26.0.0]
     * @since 8 dynamic
     * @since 23 static
     */
    TRANSFER_TYPE_UNCONDITIONAL = 0,

    /**
     * 忙线转移。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi [since 8 - 24]
     * @publicapi [since 26.0.0]
     * @since 8 dynamic
     * @since 23 static
     */
    TRANSFER_TYPE_BUSY = 1,

    /**
     * 无回复转移。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi [since 8 - 24]
     * @publicapi [since 26.0.0]
     * @since 8 dynamic
     * @since 23 static
     */
    TRANSFER_TYPE_NO_REPLY = 2,

    /**
     * 无法访问转移。
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
   * 设置呼叫转移类型。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum CallTransferSettingType {
    /**
     * 禁用呼叫转移。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_TRANSFER_DISABLE = 0,

    /**
     * 启用呼叫转移。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_TRANSFER_ENABLE = 1,

    /**
     * 登记呼叫转移。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_TRANSFER_REGISTRATION = 3,

    /**
     * 消除呼叫转移。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_TRANSFER_ERASURE = 4
  }

  /**
   * 调用属性选项。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export interface CallAttributeOptions {
    /**
     * 账号号码。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    accountNumber: string;

    /**
     * 判断是否是扬声器接通电话，默认false。
     * 
     * -true：是
     * 
     * -false：否
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    speakerphoneOn: boolean;

    /**
     * 帐户Id。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    accountId: int;

    /**
     * 视频状态类型。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    videoState: VideoStateType;

    /**
     * 开始时间。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    startTime: int;

    /**
     * 判断是否是Ecc，默认false。
     * 
     * -true：是
     * 
     * -false：否
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    isEcc: boolean;

    /**
     * 通话类型。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    callType: CallType;

    /**
     * 呼叫Id。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    callId: int;

    /**
     * 详细呼叫状态。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    callState: DetailedCallState;

    /**
     * 会议状态。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    conferenceState: ConferenceState;

    /**
     * VoIP通话信息。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    voipCallAttribute?: VoipCallAttribute;

    /**
     * 视频彩振类型。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    crsType: int;

    /**
     * 视频彩振原始呼叫类型。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    originalCallType: int;

    /**
     * 号码归属地信息
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    numberLocation?: string;

    /**
     * 号码标记信息。
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
     * rtt通话状态
     *
     *
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    rttState?: RttState;

    /**
     * XCALL类型。 
     * 
     * **起始版本:** 26.0.0
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    xCallType?: XCallType;

    /**
     * 应用是否支持自定义无障碍能力，默认为false。
     * 
     * -true:支持
     * 
     * -false:不支持  
     * 
     * **起始版本:** 26.0.0
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    isCustomAccessibility?: boolean;
  }

  /**
   * VoIP通话信息。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export interface VoipCallAttribute {
    /**
     * VoIP通话唯一Id。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    voipCallId: string;

    /**
     * 用户昵称。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    userName: string;

    /**
     * 用户头像图片。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    userProfile: image.PixelMap;

    /**
     * 三方应用进程Id。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    extensionId: string;

    /**
     * 需加载的三方应用的界面ability。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    abilityName: string;

    /**
     * 三方应用包名。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    voipBundleName: string;

    /**
     * 上报来电时是否显示来电横幅。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    showBannerForIncomingCall?: boolean;

    /**
     * 上报是否是电话会议。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    isConferenceCall?: boolean;

    /**
     * 上报来电时是否支持语音接听。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    isVoiceAnswerSupported?: boolean;
  }

  /**
   * 会议状态。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export enum ConferenceState {
    /**
     * 电话会议空闲。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    TEL_CONFERENCE_IDLE = 0,

    /**
     * 电话会议激活。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    TEL_CONFERENCE_ACTIVE = 1,

    /**
     * 电话会议断开。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    TEL_CONFERENCE_DISCONNECTING = 2,

    /**
     * 电话会议已断开。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    TEL_CONFERENCE_DISCONNECTED = 3
  }

  /**
   * 通话类型。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export enum CallType {
    /**
     * CS通话。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    TYPE_CS = 0,

    /**
     * IMS通话。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    TYPE_IMS = 1,

    /**
     * OTT通话。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    TYPE_OTT = 2,

    /**
     * 其他类型通话。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    TYPE_ERR_CALL = 3,

    /**
     * VoIP通话。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_VOIP = 4,

    /**
     * XCALL通话。 
     * 
     * **起始版本:** 26.0.0
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    TYPE_XCALL = 5
  }

  /**
   * 视频状态类型。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export enum VideoStateType {
    /**
     * 语音状态。
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
    TYPE_VIDEO = 1,
    /**
     * 视频通话只发送数据状态。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_VIDEO_SEND_ONLY = 1,
    /**
     * 视频通话只接收数据状态。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_VIDEO_RECEIVE_ONLY = 2,
    /**
     * 视频通话接收发送数据状态。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_VIDEO_BIDIRECTIONAL = 3
  }

  /**
   * 视频通话升降级请求结果类型。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export enum VideoRequestResultType {
    /**
     * 请求成功。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_REQUEST_SUCCESS = 0,
    /**
     * 请求失败。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_REQUEST_FAILURE = 1,
    /**
     * 请求无效。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_REQUEST_INVALID = 2,
    /**
     * 请求超时。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_REQUEST_TIMED_OUT = 3,
    /**
     * 请求被拒绝。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_REQUEST_REJECTED_BY_REMOTE = 4,
    /**
     * 请求升级取消。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_REQUEST_UPGRADE_CANCELED = 5,
    /**
     * 视频通话降级RTP或RTCP超时。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_DOWNGRADE_RTP_OR_RTCP_TIMEOUT = 100,
    /**
     * 视频通话降级RTP和RTCP超时。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_DOWNGRADE_RTP_AND_RTCP_TIMEOUT = 101
  }

  /**
   * 视频通话画面方向类型。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export enum DeviceDirection {
    /**
     * 视频画面0度方向。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    DEVICE_DIRECTION_0 = 0,
    /**
     * 视频画面90度方向。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    DEVICE_DIRECTION_90 = 90,
    /**
     * 视频画面180度方向。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    DEVICE_DIRECTION_180 = 180,
    /**
     * 视频画面270度方向。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    DEVICE_DIRECTION_270 = 270
  }

  /**
   * 视频通话事件类型。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export enum CallSessionEventId {
    /**
     * 相机设置失败。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    EVENT_CONTROL_CAMERA_FAILURE = 0,
    /**
     * 相机设置成功。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    EVENT_CONTROL_CAMERA_READY = 1,
    /**
     * 远端画面窗口释放。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    EVENT_DISPLAY_SURFACE_RELEASED = 100,
    /**
     * 本端画面窗口释放。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    EVENT_PREVIEW_SURFACE_RELEASED = 101
  }

  /**
   * 详细的呼叫状态。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export enum DetailedCallState {
    /**
     * 电话会议激活。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_STATUS_ACTIVE = 0,

    /**
     * 保持呼叫状态。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_STATUS_HOLDING = 1,

    /**
     * 呼叫状态拨号。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_STATUS_DIALING = 2,

    /**
     * 电话报警状态。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_STATUS_ALERTING = 3,

    /**
     * 呼叫传入状态。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_STATUS_INCOMING = 4,

    /**
     * 呼叫等待状态。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_STATUS_WAITING = 5,

    /**
     * 电话会议已断开。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_STATUS_DISCONNECTED = 6,

    /**
     * 电话会议断开。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_STATUS_DISCONNECTING = 7,

    /**
     * 电话会议空闲。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_STATUS_IDLE = 8
  }

  /**
   * 呼叫限制信息。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface CallRestrictionInfo {
    /**
     * 呼叫限制类型。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    type: CallRestrictionType;

    /**
     * 密码。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    password: string;

    /**
     * 呼叫限制模式。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    mode: CallRestrictionMode;
  }

  /**
   * 呼叫限制模式。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum CallRestrictionMode {
    /**
     * 限制模式停用。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_MODE_DEACTIVATION = 0,

    /**
     * 限制模式激活。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_MODE_ACTIVATION = 1
  }

  /**
   * 呼叫事件的可选参数。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface CallEventOptions {
    /**
     * 呼叫能力事件Id。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    eventId: CallAbilityEventId;
  }

  /**
   * 呼叫能力事件Id。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum CallAbilityEventId {
    /**
     * 拨号无载波事件。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    EVENT_DIAL_NO_CARRIER = 1,

    /**
     * 无效的FDN号事件。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    EVENT_INVALID_FDN_NUMBER = 2,

    /**
     * 保持通话失败事件。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    EVENT_HOLD_CALL_FAILED = 3,

    /**
     * 保持当前通话并接听等待中电话失败事件。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    EVENT_SWAP_CALL_FAILED = 4,

    /**
     * 合并通话失败。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    EVENT_COMBINE_CALL_FAILED = 5,

    /**
     * 分离通话失败。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    EVENT_SPLIT_CALL_FAILED = 6,

    /**
     * 全屏显示通话界面。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    EVENT_SHOW_FULL_SCREEN = 7,

    /**
     * 悬浮窗显示通话界面。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    EVENT_SHOW_FLOAT_WINDOW = 8
  }

  /**
   * 通话状态码。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @since 6 dynamic
   * @since 23 static
   */
  export enum CallState {
    /**
     * 无效状态，当获取呼叫状态失败时返回。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 6 dynamic
     * @since 23 static
     */
    CALL_STATE_UNKNOWN = -1,

    /**
     * 表示没有正在进行的呼叫。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 6 dynamic
     * @since 23 static
     */
    CALL_STATE_IDLE = 0,

    /**
     * 表示来电正在振铃或等待。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 6 dynamic
     * @since 23 static
     */
    CALL_STATE_RINGING = 1,

    /**
     * 表示至少有一个呼叫处于拨号、通话中或呼叫保持状态，并且没有新的来电振铃或等待。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 6 dynamic
     * @since 23 static
     */
    CALL_STATE_OFFHOOK = 2,

    /**
     * 表示来电已经接听。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 11 dynamic
     * @since 23 static
     */
    CALL_STATE_ANSWERED = 3
  }

  /**
   * 通话状态码。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @since 21 dynamic
   * @since 23 static
   */
  export enum TelCallState {
    /**
     * 无效状态，当获取呼叫状态失败时返回。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 21 dynamic
     * @since 23 static
     */
    TEL_CALL_STATE_UNKNOWN = -1,

    /**
     * 表示没有正在进行的呼叫。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 21 dynamic
     * @since 23 static
     */
    TEL_CALL_STATE_IDLE = 0,

    /**
     * 表示来电正在振铃或等待。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 21 dynamic
     * @since 23 static
     */
    TEL_CALL_STATE_RINGING = 1,

    /**
     * 表示至少有一个呼叫处于拨号，并且没有新的来电振铃或等待。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 21 dynamic
     * @since 23 static
     */
    TEL_CALL_STATE_OFFHOOK = 2,

    /**
     * 表示来电已经接听。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 21 dynamic
     * @since 23 static
     */
    TEL_CALL_STATE_ANSWERED = 3,

    /**
     * 表示电话已经接通中或呼叫保持。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 21 dynamic
     * @since 23 static
     */
    TEL_CALL_STATE_CONNECTED = 4
  }

  /**
   * 运营商通话状态码。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @since 23 dynamic&static
   */
  export enum CCallState {
    /**
     * 无效状态，当获取呼叫状态失败时返回。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_UNKNOWN = -1,

    /**
     * 表示当前通话已经接通成功。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_ACTIVE = 0,

    /**
     * 表示当前通话处于保持状态。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_HOLDING = 1,

    /**
     * 表示去电处于拨号过程中，对端还没有收到振铃期间。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_DIALING = 2,

    /**
     * 表示去电处于振铃过程中，对端处于响铃阶段。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_ALERTING = 3,

    /**
     * 表示收到来电。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_INCOMING = 4,

    /**
     * 同一个卡槽上已经存在一路通话的情况下，又收到一路来电。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_WAITING = 5,

    /**
     * 表示通话已经释放完成。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_DISCONNECTED = 6,

    /**
     * 表示通话正在释放中，还没有释放完成。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_DISCONNECTING = 7,

    /**
     * 表示没有正在进行的呼叫。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_IDLE = 8,

    /**
     * 表示来电已经接听。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 23 dynamic&static
     */
    CCALL_STATE_ANSWERED = 9
  }

  /**
   * 拨打电话的可选参数。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @since 6 dynamic
   * @since 23 static
   */
  export interface DialOptions {
    /**
     * 根据extras的值判断是否为视频通话，默认为语音通话。
     * 
     * - true：视频通话。
     * - false：语音通话。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 6 dynamic
     * @since 23 static
     */
    extras?: boolean;

    /**
     * 帐户Id。
     * 
     * - 0：卡槽1。
     * - 1：卡槽2。
     * 
     * 。此接口为系统接口。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    accountId?: int;

    /**
     * 视频状态类型。此接口为系统接口。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    videoState?: VideoStateType;

    /**
     * 拨号场景。此接口为系统接口。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    dialScene?: DialScene;

    /**
     * 拨号类型。此接口为系统接口。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    dialType?: DialType;
  }

  /**
   * 拨打电话的可选参数。
   *
   * @syscap SystemCapability.Applications.Contacts
   * @FaAndStageModel
   * @atomicservice
   * @since 24 dynamic
   * @since 26.0.0 static
   */
  export interface MakeCallOptions {
    /**
     * 是否隐藏拨号界面，true表示隐藏，false表示不隐藏。
     *
     * @syscap SystemCapability.Applications.Contacts
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic
     * @since 26.0.0 static
     */
    isHideDialScreen?: boolean;

    /**
     * 应用是否支持自定义无障碍能力，默认为false。true表示支持，false表示不支持。  
     * 
     * **起始版本:** 26.0.0
     *
     * @syscap SystemCapability.Applications.Contacts
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    isCustomAccessibility?: boolean;
  }

  /**
   * 拨打电话的可选参数。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface DialCallOptions {
    /**
     * 帐户Id。
     * 
     * - 0：卡槽1。
     * - 1：卡槽2。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    accountId?: int;
    /**
     * 视频状态类型。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    videoState?: VideoStateType;
    /**
     * 拨号场景。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    dialScene?: DialScene;
    /**
     * 拨号类型。
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
     * XCALL类型。 
     * 
     * **起始版本:** 26.0.0
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    xCallType?: XCallType;
  }

  /**
   * 拨号场景。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum DialScene {
    /**
     * 呼叫正常。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_NORMAL = 0,

    /**
     * 呼叫特权。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_PRIVILEGED = 1,

    /**
     * 拨打紧急电话。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_EMERGENCY = 2
  }

  /**
   * 拨号类型。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum DialType {
    /**
     * 载波拨号类型。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    DIAL_CARRIER_TYPE = 0,

    /**
     * 语音邮件拨号类型。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    DIAL_VOICE_MAIL_TYPE = 1,

    /**
     * OTT拨号类型。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    DIAL_OTT_TYPE = 2,

    /**
     * XCALL通话。 
     * 
     * **起始版本:** 26.0.0
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    DIAL_XCALL_TYPE = 3
  }

  /**
   * 拒绝消息可选参数。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export interface RejectMessageOptions {
    /**
     * 消息内容。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    messageContent: string;
  }

  /**
   * 呼叫转移结果。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi [since 8 - 24]
   * @publicapi [since 26.0.0]
   * @since 8 dynamic
   * @since 23 static
   */
  export interface CallTransferResult {
    /**
     * 转移状态。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi [since 8 - 24]
     * @publicapi [since 26.0.0]
     * @since 8 dynamic
     * @since 23 static
     */
    status: TransferStatus;

    /**
     * 号码。
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
     * 开始时间的小时数。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi [since 9 - 24]
     * @publicapi [since 26.0.0]
     * @since 9 dynamic
     * @since 23 static
     */
    startHour: int;

    /**
     * 开始时间的分钟数。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi [since 9 - 24]
     * @publicapi [since 26.0.0]
     * @since 9 dynamic
     * @since 23 static
     */
    startMinute: int;

    /**
     * 结束时间的小时数。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi [since 9 - 24]
     * @publicapi [since 26.0.0]
     * @since 9 dynamic
     * @since 23 static
     */
    endHour: int;

    /**
     * 结束时间的分钟数。
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
   * 呼叫等待状态。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export enum CallWaitingStatus {
    /**
     * 禁用呼叫等待。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_WAITING_DISABLE = 0,

    /**
     * 启用呼叫等待。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    CALL_WAITING_ENABLE = 1
  }

  /**
   * 限制状态。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum RestrictionStatus {
    /**
     * 禁用限制。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_DISABLE = 0,

    /**
     * 启用限制。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    RESTRICTION_ENABLE = 1
  }

  /**
   * 转移状态。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi [since 8 - 24]
   * @publicapi [since 26.0.0]
   * @since 8 dynamic
   * @since 23 static
   */
  export enum TransferStatus {
    /**
     * 禁用转移。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi [since 8 - 24]
     * @publicapi [since 26.0.0]
     * @since 8 dynamic
     * @since 23 static
     */
    TRANSFER_DISABLE = 0,

    /**
     * 启用转移。
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
   * 判断是否是紧急电话号码的可选参数。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @since 7 dynamic
   * @since 23 static
   */
  export interface EmergencyNumberOptions {
    /**
     * 卡槽ID：
     * 
     * - 卡槽1：`0`。
     * - 卡槽2：`1`。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 7 dynamic
     * @since 23 static
     */
    slotId?: int;
  }

  /**
   * 格式化号码的可选参数。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @since 7 dynamic
   * @since 23 static
   */
  export interface NumberFormatOptions {
    /**
     * 国家码，支持所有国家的国家码，如：CN（中国）。默认为：CN。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @since 7 dynamic
     * @since 23 static
     */
    countryCode?: string;
  }

  /**
   * MMI码结果。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface MmiCodeResults {
    /**
     * MMI码结果。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    result: MmiCodeResult;

    /**
     * MMI码消息。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    message: string;
  }

  /**
   * MMI码结果。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum MmiCodeResult {
    /**
     * 表示MMI码成功。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    MMI_CODE_SUCCESS = 0,

    /**
     * 表示MMI码失败。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    MMI_CODE_FAILED = 1
  }

  /**
   * 断开连接的详细信息。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum DisconnectedReason {
    /**
     * 未分配的号码(空号)。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    UNASSIGNED_NUMBER = 1,

    /**
     * 无至目的地的路由。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    NO_ROUTE_TO_DESTINATION = 3,

    /**
     * 不可接受的通路。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CHANNEL_UNACCEPTABLE = 6,

    /**
     * 运营商闭锁。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    OPERATOR_DETERMINED_BARRING = 8,

    /**
     * 呼叫在其他地方完成。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    CALL_COMPLETED_ELSEWHERE = 13,

    /**
     * 清除正常呼叫。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    NORMAL_CALL_CLEARING = 16,

    /**
     * 用户忙。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    USER_BUSY = 17,

    /**
     * 无用户响应。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    NO_USER_RESPONDING = 18,

    /**
     * 已有用户提醒，但无应答。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    USER_ALERTING_NO_ANSWER = 19,

    /**
     * 呼叫拒绝。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_REJECTED = 21,

    /**
     * 号码改变。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    NUMBER_CHANGED = 22,

    /**
     * 当由于目标地址(例如匿名)导致呼叫被拒绝。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    CALL_REJECTED_DUE_TO_FEATURE_AT_THE_DESTINATION = 24,

    /**
     * 抢占失败。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    FAILED_PRE_EMPTION = 25,

    /**
     * 非选定用户清除。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    NON_SELECTED_USER_CLEARING = 26,

    /**
     * 终点故障。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    DESTINATION_OUT_OF_ORDER = 27,

    /**
     * 无效号码格式。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    INVALID_NUMBER_FORMAT = 28,

    /**
     * 增补业务拒绝。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    FACILITY_REJECTED = 29,

    /**
     * 对状态查询的响应。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RESPONSE_TO_STATUS_ENQUIRY = 30,

    /**
     * 正常，未指定。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    NORMAL_UNSPECIFIED = 31,

    /**
     * 无电路/通道可用。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    NO_CIRCUIT_CHANNEL_AVAILABLE = 34,

    /**
     * 网络故障。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    NETWORK_OUT_OF_ORDER = 38,

    /**
     * 临时故障。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TEMPORARY_FAILURE = 41,

    /**
     * 交换设备拥塞。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    SWITCHING_EQUIPMENT_CONGESTION = 42,

    /**
     * 已丢弃访问信息。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ACCESS_INFORMATION_DISCARDED = 43,

    /**
     * 请求的电路/通道不可用。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    REQUEST_CIRCUIT_CHANNEL_NOT_AVAILABLE = 44,

    /**
     * 未指定资源不可用。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RESOURCES_UNAVAILABLE_UNSPECIFIED = 47,

    /**
     * 服务质量不可用。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    QUALITY_OF_SERVICE_UNAVAILABLE = 49,

    /**
     * 请求的设施未订阅。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    REQUESTED_FACILITY_NOT_SUBSCRIBED = 50,

    /**
     * CUG内禁止来电。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INCOMING_CALLS_BARRED_WITHIN_THE_CUG = 55,

    /**
     * 未授权承载能力。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    BEARER_CAPABILITY_NOT_AUTHORIZED = 57,

    /**
     * 承载能力目前不可用。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    BEARER_CAPABILITY_NOT_PRESENTLY_AVAILABLE = 58,

    /**
     * 服务或选项不可用，未指定。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    SERVICE_OR_OPTION_NOT_AVAILABLE_UNSPECIFIED = 63,

    /**
     * 未实现承载服务。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    BEARER_SERVICE_NOT_IMPLEMENTED = 65,

    /**
     * ACM大于或等于最大值。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ACM_EQUALTO_OR_GREATER_THAN_THE_MAXIMUM_VALUE = 68,

    /**
     * 请求的设施未实施。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    REQUESTED_FACILITY_NOT_IMPLEMENTED = 69,

    /**
     * 仅限BC有限数字信息可用。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ONLY_RESTRICTED_DIGITAL_INFO_BEARER_CAPABILITY_IS_AVAILABLE = 70,

    /**
     * 服务或选项未实施，未指定。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    SERVICE_OR_OPTION_NOT_IMPLEMENTED_UNSPECIFIED = 79,

    /**
     * 无效的业务标识符值。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INVALID_TRANSACTION_IDENTIFIER_VALUE = 81,

    /**
     * 用户不是CUG成员。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    USER_NOT_MEMBER_OF_CUG = 87,

    /**
     * 目标不兼容。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INCOMPATIBLE_DESTINATION = 88,

    /**
     * 选择的传输网络无效。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INVALID_TRANSIT_NETWORK_SELECTION = 91,

    /**
     * 语义错误的消息。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    SEMANTICALLY_INCORRECT_MESSAGE = 95,

    /**
     * 无效的强制信息。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INVALID_MANDATORY_INFORMATION = 96,

    /**
     * 消息类型不存在或未实现。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    MESSAGE_TYPE_NON_EXISTENT_OR_NOT_IMPLEMENTED = 97,

    /**
     * 消息类型与协议状态不兼容。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    MESSAGE_TYPE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE = 98,

    /**
     * IE不存在或未实现。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INFORMATION_ELEMENT_NON_EXISTENT_OR_NOT_IMPLEMENTED = 99,

    /**
     * 条件IE错误。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    CONDITIONAL_IE_ERROR = 100,

    /**
     * 消息与协议状态不兼容。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    MESSAGE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE = 101,

    /**
     * 计时器过期时恢复计时器编号。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RECOVERY_ON_TIMER_EXPIRED = 102,

    /**
     * 协议错误，未指定。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    PROTOCOL_ERROR_UNSPECIFIED = 111,

    /**
     * 互通，未指定。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    INTERWORKING_UNSPECIFIED = 127,

    /**
     * 呼叫被禁止。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    CALL_BARRED = 240,

    /**
     * FDN受阻。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    FDN_BLOCKED = 241,

    /**
     * VLR中的IMSI未知。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    IMSI_UNKNOWN_IN_VLR = 242,

    /**
     * IMEI未被接受。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    IMEI_NOT_ACCEPTED = 243,

    /**
     * 拨号修改为USSD。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    DIAL_MODIFIED_TO_USSD = 244,

    /**
     * 拨号修改为USSD号。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    DIAL_MODIFIED_TO_SS = 245,

    /**
     * 拨号已修改为正常。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    DIAL_MODIFIED_TO_DIAL = 246,

    /**
     * 无线电通讯已关闭。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RADIO_OFF = 247,

    /**
     * 停止服务。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    OUT_OF_SERVICE = 248,

    /**
     * SIM卡无效。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    NO_VALID_SIM = 249,

    /**
     * 无线电通讯内部错误。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RADIO_INTERNAL_ERROR = 250,

    /**
     * 网络响应超时。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    NETWORK_RESP_TIMEOUT = 251,

    /**
     * 网络拒绝。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    NETWORK_REJECT = 252,

    /**
     * 无线电接入故障。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RADIO_ACCESS_FAILURE = 253,

    /**
     * 无线电链路故障。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RADIO_LINK_FAILURE = 254,

    /**
     * 无线电链路丢失。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RADIO_LINK_LOST = 255,

    /**
     * 无线电上行链路故障。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RADIO_UPLINK_FAILURE = 256,

    /**
     * 无线电通讯设置失败。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RADIO_SETUP_FAILURE = 257,

    /**
     * 无线电释放正常。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RADIO_RELEASE_NORMAL = 258,

    /**
     * 无线电释放异常。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    RADIO_RELEASE_ABNORMAL = 259,

    /**
     * 访问类被阻止。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    ACCESS_CLASS_BLOCKED = 260,

    /**
     * 网络分离。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    NETWORK_DETACH = 261,

    /**
     * 无效参数。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    INVALID_PARAMETER = 1025,

    /**
     * SIM卡未退出。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_NOT_EXIT = 1026,

    /**
     * 需要SIM卡PIN码。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PIN_NEED = 1027,

    /**
     * 不允许呼叫。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CALL_NOT_ALLOW = 1029,

    /**
     * SIM卡无效。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_INVALID = 1045,

    /**
     * 未知原因。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    UNKNOWN = 1279
  }

  /**
   * 通话结束原因。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface DisconnectedDetails {
    /**
     * 通话结束原因。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    reason: DisconnectedReason;
    /**
     * 通话结束提示信息。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    message: string;
  }

  /**
   * 视频通话模式信息。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export interface ImsCallModeInfo {
    /**
     * 呼叫Id。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    callId: int;
    /**
     * 通话结束提示信息。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    result: VideoRequestResultType;
    /**
     * 该信息是否为请求信息。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    isRequestInfo: boolean;
    /**
     * 视频通话模式。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    imsCallMode: ImsCallMode;
  }

  /**
   * 视频通话事件信息。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CallSessionEvent {
    /**
     * 呼叫Id。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    callId: int;
    /**
     * 视频通话事件。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    eventId: CallSessionEventId;
  }

  /**
   * 视频通话对端画面分辨率信息。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export interface PeerDimensionsDetail {
    /**
     * 呼叫Id。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    callId: int;
    /**
     * 对端画面图像尺寸宽(像素)。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    width: int;
    /**
     * 对端画面图像尺寸高(像素)。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    height: int;
  }

  /**
   * 视频通话本端相机画面分辨率信息。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CameraCapabilities {
    /**
     * 呼叫Id。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    callId: int;
    /**
     * 本端画面图像尺寸宽(像素)。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    width: int;
    /**
     * 本端画面图像尺寸高(像素)。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    height: int;
  }

  /**
   * 电话号码的标记信息。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  export interface NumberMarkInfo {
    /**
     * 号码的标记类型。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    markType: MarkType;

    /**
     * 号码的标记内容，markType为MARK_TYPE_ENTERPRISE时，该字段返回信息为“姓名 工号”。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    markContent?: string;

    /**
     * 号码的标记次数。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    markCount?: int;

    /**
     * 号码的标记来源供应商。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    markSource?: string;

    /**
     * 号码的标记是否来自云端，默认为false。
     * 
     * -true：是
     * 
     * -false：否
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    isCloud?: boolean;

    /**
     * 号码标记的详细信息，markType为MARK_TYPE_ENTERPRISE时，该字段返回信息为“部门 职位”。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    markDetails?: string;
  }

  /**
   * rtt通话错误报告
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  export interface RttErrorInfo {
    /**
     * rtt通话id
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    callId: int;

    /**
     * rtt操作类型
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    operationType: int;

    /**
     * rtt失败原因值
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    causeCode: int;

    /**
     * rtt失败原因
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
   * rtt通话事件
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  export interface RttEventInfo {
    /**
     * rtt通话id
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    callId: int;

    /**
     * rtt通话事件类型
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    eventType: int;

    /**
     * rtt事件原因
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
   * rtt通话消息
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  export interface RttMessageInfo {
    /**
     * rtt通话id
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    callId: int;

    /**
     * rtt消息
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
   * 号码标记的类型。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  export enum MarkType {
    /**
     * 没有标记。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_NONE = 0,

    /**
     * 骚扰电话。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_CRANK = 1,

    /**
     * 诈骗电话。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_FRAUD = 2,

    /**
     * 快递送餐。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_EXPRESS = 3,

    /**
     * 广告推销。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_PROMOTE_SALES = 4,

    /**
     * 房产中介。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_HOUSE_AGENT = 5,

    /**
     * 保险理财。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_INSURANCE = 6,

    /**
     * 出租车。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_TAXI = 7,

    /**
     * 用户自定义。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_CUSTOM = 8,

    /**
     * 其他。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_OTHERS = 9,

    /**
     * 黄页。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    MARK_TYPE_YELLOW_PAGE = 10,

    /**
     * 企业联系人。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    MARK_TYPE_ENTERPRISE = 11
  }

  /**
   * rtt通话状态
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  export enum RttState {
    /**
     * rtt关闭
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    RTT_STATE_NO = 0,
    /**
     * rtt打开
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    RTT_STATE_YES = 1,
    /**
     * tty模式
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    RTT_STATE_REMOTE_TTY = 2,
    /**
     * 对端不支持rtt
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
   * rtt通话模式
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 22 dynamic
   * @since 23 static
   */
  export enum ImsRttMode {
    /**
     * 本端请求升级
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    LOCAL_REQUEST_UPGRADE = 0,
    /**
     * 本端请求降级
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    LOCAL_REQUEST_DOWNGRADE = 1,
    /**
     * 对端请求本端接受
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 22 dynamic
     * @since 23 static
     */
    REMOTE_REQUEST_UPGRADE_LOCAL_ACCEPT = 2,
    /**
     * 对端请求本端拒绝
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
   * 表示XCall的类型。
   *
   * @syscap SystemCapability.Telephony.CallManager
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 26.0.0 dynamic&static
   */
  export enum XCallType {
    /**
     * 表示XCall是ECall。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    XCALL_ECALL_TYPE = 0,
    /**
     * 表示XCall是BCall。
     *
     * @syscap SystemCapability.Telephony.CallManager
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    XCALL_BCALL_TYPE = 1,
    /**
     * 表示XCall是ICall。
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