/*
 * Copyright (C) 2021-2024 Huawei Device Co., Ltd.
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
 * @file SIM Management
 * @kit TelephonyKit
 */

import type { AsyncCallback } from './@ohos.base';

/**
 * The **sim** module provides basic SIM card management functions. With the APIs provided by this module, you can
 * obtain the ISO country code, home PLMN ID, service provider name, SIM card status, type, installation status, and
 * activation status of the SIM card in the specified slot.
 *
 * @syscap SystemCapability.Telephony.CoreService
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace sim {
  /**
   * Checks whether the SIM card in the specified slot is activated. This API uses an asynchronous callback to return
   * the result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result, which indicates whether the SIM
   *     card in the specified slot is activated.
   *     <br>**true**: activated.
   *     <br>**false**: not activated.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 7 dynamic
   * @since 23 static
   */
  function isSimActive(slotId: int, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the SIM card in the specified slot is activated. This API uses a promise to return the result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { Promise<boolean> } Promise used to return the result.
   *     <br>**true**: activated.
   *     <br>**false**: not activated.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 7 dynamic
   * @since 23 static
   */
  function isSimActive(slotId: int): Promise<boolean>;

  /**
   * Checks whether the SIM card in the specified slot is activated.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { boolean } Whether the SIM card in the specified slot is activated.
   *     <br>**true**: activated.
   *     <br>**false**: not activated.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 10 dynamic
   * @since 23 static
   */
  function isSimActiveSync(slotId: int): boolean;

  /**
   * Obtains the default slot ID of the SIM card that provides voice services. This API uses an asynchronous callback to
   * return the result.
   *
   * @param { AsyncCallback<int> } callback - Callback used to return the result.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   *     <br>- **-1**: card slot not set or service not unavailable
   * @syscap SystemCapability.Telephony.CoreService
   * @since 7 dynamic
   * @since 23 static
   */
  function getDefaultVoiceSlotId(callback: AsyncCallback<int>): void;

  /**
   * Obtains the default slot ID of the SIM card that provides voice services. This API uses a promise to return the
   * result.
   *
   * @returns { Promise<int> } Promise used to return the result.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2.
   *     <br>- **-1**: card slot not set or service not unavailable
   * @syscap SystemCapability.Telephony.CoreService
   * @since 7 dynamic
   * @since 23 static
   */
  function getDefaultVoiceSlotId(): Promise<int>;

  /**
   * Checks whether the application (caller) has been granted the operator permission. This API uses an asynchronous
   * callback to return the result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result, which indicates whether the
   *     application (caller) has been granted the operator permission.
   *     <br>- **true**: The application (caller) has been granted the operator permission.
   *     <br>- **false**: The application (caller) has not been granted the operator permission (no SIM card inserted or
   *     the SIM card is invalid).
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 7 dynamic
   * @since 23 static
   */
  function hasOperatorPrivileges(slotId: int, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the application (caller) has been granted the operator permission. This API uses a promise to return
   * the result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the application
   *     (caller) has been granted the carrier permission, and the value **false** indicates the opposite.
   *     <br>- **true**: The application (caller) has been granted the operator permission.
   *     <br>- **false**: The application (caller) has not been granted the operator permission (no SIM card inserted or
   *     the SIM card is invalid).
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 7 dynamic
   * @since 23 static
   */
  function hasOperatorPrivileges(slotId: int): Promise<boolean>;

  /**
   * Obtains the ISO country code of the SIM card in the specified slot. This API uses an asynchronous callback to
   * return the result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { AsyncCallback<string> } callback - Callback used to return the result, which is a country code, for
   *     example, **CN** (China).
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 6 dynamic
   * @since 23 static
   */
  function getISOCountryCodeForSim(slotId: int, callback: AsyncCallback<string>): void;

  /**
   * Obtains the ISO country code of the SIM card in the specified slot. This API uses a promise to return the result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { Promise<string> } Promise used to return the result, which is the ISO country code of the SIM card in
   *     the specified slot, for example, **CN** (China).
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 6 dynamic
   * @since 23 static
   */
  function getISOCountryCodeForSim(slotId: int): Promise<string>;

  /**
   * Obtains the ISO country code of the SIM card in the specified slot.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { string } ISO country code of the SIM card in the specified slot, for example, **CN** (China).
   * @syscap SystemCapability.Telephony.CoreService
   * @since 10 dynamic
   * @since 23 static
   */
  function getISOCountryCodeForSimSync(slotId: int): string;

  /**
   * Obtains the home public land mobile network (PLMN) ID of the SIM card in the specified slot. This API uses an
   * asynchronous callback to return the result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { AsyncCallback<string> } callback - Callback used to return the result, which is the home PLMN ID of the
   *     SIM card in the specified slot.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 6 dynamic
   * @since 23 static
   */
  function getSimOperatorNumeric(slotId: int, callback: AsyncCallback<string>): void;

  /**
   * Obtains the home PLMN ID of the SIM card in the specified slot. This API uses a promise to return the result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { Promise<string> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 6 dynamic
   * @since 23 static
   */
  function getSimOperatorNumeric(slotId: int): Promise<string>;

  /**
   * Obtains the home PLMN ID of the SIM card in the specified slot. This API returns the result synchronously.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { string } Home PLMN ID of the SIM card in the specified slot.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 10 dynamic
   * @since 23 static
   */
  function getSimOperatorNumericSync(slotId: int): string;

  /**
   * Obtains the service provider name (SPN) of the SIM card in the specified slot. This API uses an asynchronous
   * callback to return the result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { AsyncCallback<string> } callback - Callback used to return the result, which is the SPN of the SIM card in
   *     the specified slot.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 6 dynamic
   * @since 23 static
   */
  function getSimSpn(slotId: int, callback: AsyncCallback<string>): void;

  /**
   * Obtains the SPN of the SIM card in the specified slot. This API uses a promise to return the result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { Promise<string> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 6 dynamic
   * @since 23 static
   */
  function getSimSpn(slotId: int): Promise<string>;

  /**
   * Obtains the SPN of the SIM card in the specified slot. This API returns the result synchronously.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { string } SPN of the SIM card in the specified slot.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 10 dynamic
   * @since 23 static
   */
  function getSimSpnSync(slotId: int): string;

  /**
   * Obtains the state of the SIM card in the specified slot. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { AsyncCallback<SimState> } callback - Callback used to return the result, which is the state of the SIM
   *     card in the specified slot. For details, see [SimState]{@link sim.SimState}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 6 dynamic
   * @since 23 static
   */
  function getSimState(slotId: int, callback: AsyncCallback<SimState>): void;

  /**
   * Obtains the state of the SIM card in the specified slot. This API uses a promise to return the result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { Promise<SimState> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 6 dynamic
   * @since 23 static
   */
  function getSimState(slotId: int): Promise<SimState>;

  /**
   * Obtains the state of the SIM card in the specified slot.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { SimState } State of the SIM card in the specified slot.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 10 dynamic
   * @since 23 static
   */
  function getSimStateSync(slotId: int): SimState;

  /**
   * Obtains the type of the SIM card in the specified slot. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { AsyncCallback<CardType> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 7 dynamic
   * @since 23 static
   */
  function getCardType(slotId: int, callback: AsyncCallback<CardType>): void;

  /**
   * Obtains the type of the SIM card in the specified slot. This API uses a promise to return the result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { Promise<CardType> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 7 dynamic
   * @since 23 static
   */
  function getCardType(slotId: int): Promise<CardType>;

  /**
   * Obtains the type of the SIM card in the specified slot.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { CardType } Type of the SIM card in the specified slot.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 10 dynamic
   * @since 23 static
   */
  function getCardTypeSync(slotId: int): CardType;

  /**
   * Obtains the ICCID of the SIM card in a specified slot.
   *
   * <p>The ICCID is a unique identifier of a SIM card. It consists of 20 digits
   * and is recorded in the EFICCID file of the SIM card.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { AsyncCallback<string> } callback - Indicates the callback for getting the ICCID;
   *     returns an empty string if no SIM card is inserted.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function getSimIccId(slotId: int, callback: AsyncCallback<string>): void;

  /**
   * Obtains the ICCID of the SIM card in a specified slot.
   *
   * <p>The ICCID is a unique identifier of a SIM card. It consists of 20 digits
   * and is recorded in the EFICCID file of the SIM card.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @returns { Promise<string> } Returns the ICCID; returns an empty string if no SIM card is inserted.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function getSimIccId(slotId: int): Promise<string>;

  /**
   * Obtains the alpha identifier of the voice mailbox of the SIM card in a specified slot.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from {@code 0} to the maximum card slot index number supported by the device.
   * @param { AsyncCallback<string> } callback - Indicates the callback for getting the voice mailbox alpha identifier;
   *     returns an empty string if no voice mailbox alpha identifier is written into the SIM card.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getVoiceMailIdentifier(slotId: int, callback: AsyncCallback<string>): void;

  /**
   * Obtains the alpha identifier of the voice mailbox of the SIM card in a specified slot.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from {@code 0} to the maximum card slot index number supported by the device.
   * @returns { Promise<string> } Returns the voice mailbox alpha identifier;
   *     returns an empty string if no voice mailbox alpha identifier is written into the SIM card.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getVoiceMailIdentifier(slotId: int): Promise<string>;

  /**
   * Obtains the voice mailbox number of the SIM card in a specified slot.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from {@code 0} to the maximum card slot index number supported by the device.
   * @param { AsyncCallback<string> } callback - Indicates the callback for getting the voice mailbox number;
   *     returns an empty string if no voice mailbox number is written into the SIM card.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getVoiceMailNumber(slotId: int, callback: AsyncCallback<string>): void;

  /**
   * Obtains the voice mailbox number of the SIM card in a specified slot.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from {@code 0} to the maximum card slot index number supported by the device.
   * @returns { Promise<string> } Returns the voice mailbox number.
   *     returns an empty string if no voice mailbox number is written into the SIM card.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getVoiceMailNumber(slotId: int): Promise<string>;

  /**
   * Sets the voice mail information.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from {@code 0} to the maximum card slot index number supported by the device.
   * @param { string } mailName - Indicates the name of voice mail.
   * @param { string } mailNumber - Indicates the number of voice mail.
   * @param { AsyncCallback<void> } callback - The callback of setVoiceMailInfo.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function setVoiceMailInfo(slotId: int, mailName: string, mailNumber: string, callback: AsyncCallback<void>): void;

  /**
   * Sets the voice mail information.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from {@code 0} to the maximum card slot index number supported by the device.
   * @param { string } mailName - Indicates the name of voice mail.
   * @param { string } mailNumber - Indicates the number of voice mail.
   * @returns { Promise<void> } The promise returned by the setVoiceMailInfo.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function setVoiceMailInfo(slotId: int, mailName: string, mailNumber: string): Promise<void>;

  /**
   * Obtains the MSISDN of the SIM card in a specified slot.
   * The MSISDN is recorded in the EFMSISDN file of the SIM card.
   *
   * @permission ohos.permission.GET_PHONE_NUMBERS
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { AsyncCallback<string> } callback - Indicates the callback for getting the MSISDN;
   *     Returns an empty string if no SIM card is inserted or
   *     no MSISDN is recorded in the EFMSISDN file.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getSimTelephoneNumber(slotId: int, callback: AsyncCallback<string>): void;

  /**
   * Obtains the MSISDN of the SIM card in a specified slot.
   * The MSISDN is recorded in the EFMSISDN file of the SIM card.
   *
   * @permission ohos.permission.GET_PHONE_NUMBERS
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @returns { Promise<string> } Returns the MSISDN; returns an empty string if no SIM card is inserted or
   *     no MSISDN is recorded in the EFMSISDN file.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getSimTelephoneNumber(slotId: int): Promise<string>;

  /**
   * Obtains the Group Identifier Level 1 (GID1) of the SIM card in a specified slot.
   * The GID1 is recorded in the EFGID1 file of the SIM card.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { AsyncCallback<string> } callback - Indicates the callback for getting the GID1;
   *     Returns an empty string if no SIM card is inserted or no GID1 in the SIM card.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function getSimGid1(slotId: int, callback: AsyncCallback<string>): void;

  /**
   * Obtains the Group Identifier Level 1 (GID1) of the SIM card in a specified slot.
   * The GID1 is recorded in the EFGID1 file of the SIM card.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @returns { Promise<string> } Returns the GID1; returns an empty string if no SIM card is inserted or
   *     no GID1 in the SIM card.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function getSimGid1(slotId: int): Promise<string>;

  /**
   * Obtains the number of card slots.
   *
   * @returns { int } Number of card slots.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 7 dynamic
   * @since 23 static
   */
  function getMaxSimCount(): int;

  /**
   * Get the international mobile subscriber ID.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { AsyncCallback<string> } callback - Indicates the callback for getting
   *     the international mobile subscriber ID.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 6 dynamic
   * @since 23 static
   */
  function getIMSI(slotId: int, callback: AsyncCallback<string>): void;

  /**
   * Get the international mobile subscriber ID.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @returns { Promise<string> } Returns the international mobile subscriber ID.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 6 dynamic
   * @since 23 static
   */
  function getIMSI(slotId: int): Promise<string>;

  /**
   * Indicates whether the SIM card in a specified slot is a specified operator.
   *
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { OperatorSimCard } operator - Indicates the operator of sim.
   * @returns { boolean } Returns {@code true} if the SIM card is specified operator; return {@code false} otherwise.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function isOperatorSimCard(slotId: int, operator: OperatorSimCard): boolean;

  /**
   * Checks whether the SIM card in the specified slot is installed. This API uses an asynchronous callback to return
   * the result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result.
   *     <br>- **true**: installed.
   *     <br>- **false**: not installed.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 7 dynamic
   * @since 23 static
   */
  function hasSimCard(slotId: int, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the SIM card in the specified slot is installed. This API uses a promise to return the result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { Promise<boolean> } Promise used to return the result.
   *     <br>- **true**: installed.
   *     <br>- **false**: not installed.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 7 dynamic
   * @since 23 static
   */
  function hasSimCard(slotId: int): Promise<boolean>;

  /**
   * Checks whether the SIM card in the specified slot is installed.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { boolean } Whether the SIM card in the specified slot is installed.
   *     <br>- **true**: installed.
   *     <br>- **false**: not installed.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 10 dynamic
   * @since 23 static
   */
  function hasSimCardSync(slotId: int): boolean;

  /**
   * Obtains SIM card account information. This API uses an asynchronous callback to return the result.
   *
   * **Required permission**: ohos.permission.GET_TELEPHONY_STATE
   *
   * > **NOTE**
   * >
   * > The **GET_TELEPHONY_STATE** permission is required to obtain the ICCID and phone number. Such information is
   * > sensitive and not open to third-party applications. When this API is called, the returned ICCID and phone number
   * > are empty.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { AsyncCallback<IccAccountInfo> } callback - Callback used to return the result, which is the account
   *     information of the SIM card in the specified slot.
   * @throws { BusinessError } 201 - Permission denied. [since 10 - 22]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 10 dynamic
   * @since 23 static
   */
  function getSimAccountInfo(slotId: int, callback: AsyncCallback<IccAccountInfo>): void;

  /**
   * Obtains SIM card account information. This API uses a promise to return the result.
   *
   * **Required permission**: ohos.permission.GET_TELEPHONY_STATE
   *
   * > **NOTE**
   * >
   * > The **GET_TELEPHONY_STATE** permission is required to obtain the ICCID and phone number. Such information is
   * > sensitive and not open to third-party applications. When this API is called, the returned ICCID and phone number
   * > are empty.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { Promise<IccAccountInfo> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied. [since 10 - 22]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 10 dynamic
   * @since 23 static
   */
  function getSimAccountInfo(slotId: int): Promise<IccAccountInfo>;

  /**
   * Obtains the list of activated SIM card accounts. This API uses an asynchronous callback to return the result.
   *
   * **Required permission**: ohos.permission.GET_TELEPHONY_STATE
   *
   * > **NOTE**
   * >
   * > The **GET_TELEPHONY_STATE** permission is required to obtain the ICCID and phone number. Such information is
   * > sensitive and not open to third-party applications. When this API is called, the returned ICCID and phone number
   * > are empty.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { AsyncCallback<Array<IccAccountInfo>> } callback - Callback used to return the result, which is a list of
   *     activated SIM card accounts.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 10 dynamic
   * @since 23 static
   */
  function getActiveSimAccountInfoList(callback: AsyncCallback<Array<IccAccountInfo>>): void;

  /**
   * Obtains the list of activated SIM card accounts. This API uses a promise to return the result.
   *
   * **Required permission**: ohos.permission.GET_TELEPHONY_STATE
   *
   * > **NOTE**
   * >
   * > The **GET_TELEPHONY_STATE** permission is required to obtain the ICCID and phone number. Such information is
   * > sensitive and not open to third-party applications. When this API is called, the returned ICCID and phone number
   * > are empty.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @returns { Promise<Array<IccAccountInfo>> } Promise used to return the result.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 10 dynamic
   * @since 23 static
   */
  function getActiveSimAccountInfoList(): Promise<Array<IccAccountInfo>>;

  /**
   * Set the card slot ID of the default voice service.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { AsyncCallback<void> } callback - The callback of setDefaultVoiceSlotId.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301001 - SIM card is not activated.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function setDefaultVoiceSlotId(slotId: int, callback: AsyncCallback<void>): void;

  /**
   * Set the card slot ID of the default voice service.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @returns { Promise<void> } The promise returned by the setVoiceMailInfo.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301001 - SIM card is not activated.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function setDefaultVoiceSlotId(slotId: int): Promise<void>;

  /**
   * Activate the SIM card in the specified slot.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { AsyncCallback<void> } callback - The callback of activateSim.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function activateSim(slotId: int, callback: AsyncCallback<void>): void;

  /**
   * Activate the SIM card in the specified slot.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @returns { Promise<void> } The promise returned by the activateSim.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function activateSim(slotId: int): Promise<void>;

  /**
   * Disable SIM card in specified slot.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { AsyncCallback<void> } callback - The callback of deactivateSim.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function deactivateSim(slotId: int, callback: AsyncCallback<void>): void;

  /**
   * Disable SIM card in specified slot.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @returns { Promise<void> } The promise returned by the deactivateSim.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function deactivateSim(slotId: int): Promise<void>;

  /**
   * Set the SIM card display name of the specified card slot.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { string } name - Indicates SIM card name.
   * @param { AsyncCallback<void> } callback - The callback of setShowName.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function setShowName(slotId: int, name: string, callback: AsyncCallback<void>): void;

  /**
   * Set the SIM card display name of the specified card slot.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { string } name - Indicates SIM card name.
   * @returns { Promise<void> } The promise returned by the setShowName.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function setShowName(slotId: int, name: string): Promise<void>;

  /**
   * Gets the name of the SIM card in the specified slot.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { AsyncCallback<string> } callback - Indicates the callback for getting the SIM card name.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getShowName(slotId: int, callback: AsyncCallback<string>): void;

  /**
   * Gets the name of the SIM card in the specified slot.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @returns { Promise<string> } Returns the SIM card name.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getShowName(slotId: int): Promise<string>;

  /**
   * Set the SIM card number in the specified slot.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { string } teleNumber - Indicates SIM card number.
   * @param { AsyncCallback<void> } callback - The callback of setShowNumber.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function setShowNumber(slotId: int, teleNumber: string, callback: AsyncCallback<void>): void;

  /**
   * Set the SIM card number in the specified slot.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { string } teleNumber - Indicates SIM card number.
   * @returns { Promise<void> } The promise returned by the setShowNumber.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function setShowNumber(slotId: int, teleNumber: string): Promise<void>;

  /**
   * Get the SIM card number of the specified card slot.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { AsyncCallback<string> } callback - Indicates the callback for getting the SIM card number.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getShowNumber(slotId: int, callback: AsyncCallback<string>): void;

  /**
   * Get the SIM card number of the specified card slot.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @returns { Promise<string> } Returns the SIM card number.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getShowNumber(slotId: int): Promise<string>;

  /**
   * Obtains the operatorconfigs of the SIM card in a specified slot.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { AsyncCallback<Array<OperatorConfig>> } callback - Indicates the callback for
   *     getting the operatorconfigs in a specified slot;
   *     returns empty OperatorConfig if no SIM card is inserted.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getOperatorConfigs(slotId: int, callback: AsyncCallback<Array<OperatorConfig>>): void;

  /**
   * Obtains the operatorconfigs of the SIM card in a specified slot.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @returns { Promise<Array<OperatorConfig>> } Returns the operatorconfigs in a specified slot;
   *     returns empty OperatorConfig if no SIM card is inserted.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getOperatorConfigs(slotId: int): Promise<Array<OperatorConfig>>;

  /**
   * Unlock the SIM card password of the specified card slot.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { string } pin - Indicates the password of the SIM card.
   * @param { AsyncCallback<LockStatusResponse> } callback - Indicates the callback for getting
   *     the response to obtain the SIM card lock status of the specified card slot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function unlockPin(slotId: int, pin: string, callback: AsyncCallback<LockStatusResponse>): void;

  /**
   * Unlock the SIM card password of the specified card slot.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { string } pin - Indicates the password of the SIM card.
   * @returns { Promise<LockStatusResponse> } Returns the response to obtain
   *     the SIM card lock status of the specified card slot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function unlockPin(slotId: int, pin: string): Promise<LockStatusResponse>;

  /**
   * Unlock the SIM card password in the specified card slot.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { string } newPin - Indicates to reset the SIM card password.
   * @param { string } puk - Indicates the unlock password of the SIM card password.
   * @param { AsyncCallback<LockStatusResponse> } callback - Indicates the callback for getting
   *     the response to obtain the SIM card lock status of the specified card slot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function unlockPuk(slotId: int, newPin: string, puk: string, callback: AsyncCallback<LockStatusResponse>): void;

  /**
   * Unlock the SIM card password in the specified card slot.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { string } newPin - Indicates to reset the SIM card password.
   * @param { string } puk - Indicates the unlock password of the SIM card password.
   * @returns { Promise<LockStatusResponse> } Returns the response to obtain
   *     the SIM card lock status of the specified card slot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function unlockPuk(slotId: int, newPin: string, puk: string): Promise<LockStatusResponse>;

  /**
   * Change Pin Password.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { string } newPin - Indicates a new password.
   * @param { string } oldPin - Indicates old password.
   * @param { AsyncCallback<LockStatusResponse> } callback - Indicates the callback for getting
   *     the response to obtain the SIM card lock status of the specified card slot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function alterPin(slotId: int, newPin: string, oldPin: string, callback: AsyncCallback<LockStatusResponse>): void;

  /**
   * Change Pin Password.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { string } newPin - Indicates a new password.
   * @param { string } oldPin - Indicates old password.
   * @returns { Promise<LockStatusResponse> } Returns the response to obtain
   *     the SIM card lock status of the specified card slot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function alterPin(slotId: int, newPin: string, oldPin: string): Promise<LockStatusResponse>;

  /**
   * Set the lock status of the SIM card in the specified slot.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { LockInfo } options - Indicates lock information.
   * @param { AsyncCallback<LockStatusResponse> } callback - Indicates the callback for getting
   *     the response to obtain the SIM card lock status of the specified card slot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function setLockState(slotId: int, options: LockInfo, callback: AsyncCallback<LockStatusResponse>): void;

  /**
   * Set the lock status of the SIM card in the specified slot.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { LockInfo } options - Indicates lock information.
   * @returns { Promise<LockStatusResponse> } Returns the response to obtain
   *     the SIM card lock status of the specified card slot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  function setLockState(slotId: int, options: LockInfo): Promise<LockStatusResponse>;

  /**
   * Unlock the SIM card password of the specified card slot.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { string } pin2 - Indicates the password of the SIM card.
   * @param { AsyncCallback<LockStatusResponse> } callback - Indicates the callback for getting
   *     the response to obtain the SIM card lock status of the specified card slot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function unlockPin2(slotId: int, pin2: string, callback: AsyncCallback<LockStatusResponse>): void;

  /**
   * Unlock the SIM card password of the specified card slot.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { string } pin2 - Indicates the password of the SIM card.
   * @returns { Promise<LockStatusResponse> } Returns the response to obtain
   *     the SIM card lock status of the specified card slot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function unlockPin2(slotId: int, pin2: string): Promise<LockStatusResponse>;

  /**
   * Unlock the SIM card password in the specified card slot.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { string } newPin2 - Indicates to reset the SIM card password.
   * @param { string } puk2 - Indicates the unlock password of the SIM card password.
   * @param { AsyncCallback<LockStatusResponse> } callback - Indicates the callback for getting
   *     the response to obtain the SIM card lock status of the specified card slot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function unlockPuk2(slotId: int, newPin2: string, puk2: string, callback: AsyncCallback<LockStatusResponse>): void;

  /**
   * Unlock the SIM card password in the specified card slot.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { string } newPin2 - Indicates to reset the SIM card password.
   * @param { string } puk2 - Indicates the unlock password of the SIM card password.
   * @returns { Promise<LockStatusResponse> } Returns the response to obtain
   *     the SIM card lock status of the specified card slot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function unlockPuk2(slotId: int, newPin2: string, puk2: string): Promise<LockStatusResponse>;

  /**
   * Change Pin2 password.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { string } newPin2 - Indicates a new password.
   * @param { string } oldPin2 - Indicates old password.
   * @param { AsyncCallback<LockStatusResponse> } callback - Indicates the callback for getting
   *     the response to obtain the SIM card lock status of the specified card slot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function alterPin2(slotId: int, newPin2: string, oldPin2: string, callback: AsyncCallback<LockStatusResponse>): void;

  /**
   * Change Pin2 password.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { string } newPin2 - Indicates a new password.
   * @param { string } oldPin2 - Indicates old password.
   * @returns { Promise<LockStatusResponse> } Returns the response to obtain
   *     the SIM card lock status of the specified card slot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function alterPin2(slotId: int, newPin2: string, oldPin2: string): Promise<LockStatusResponse>;

  /**
   * Query dialing number information on SIM card.
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { ContactType } type - Indicates contact type.
   * @param { AsyncCallback<Array<DiallingNumbersInfo>> } callback - Indicates the callback for
   *     getting the dialing number information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function queryIccDiallingNumbers(slotId: int, type: ContactType, callback: AsyncCallback<Array<DiallingNumbersInfo>>): void;

  /**
   * Query dialing number information on SIM card.
   *
   * @permission ohos.permission.READ_CONTACTS
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { ContactType } type - Indicates contact type.
   * @returns { Promise<Array<DiallingNumbersInfo>> } Returns the dialing number information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function queryIccDiallingNumbers(slotId: int, type: ContactType): Promise<Array<DiallingNumbersInfo>>;

  /**
   * Add dialing number information to SIM card.
   *
   * @permission ohos.permission.WRITE_CONTACTS
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { ContactType } type - Indicates contact type.
   * @param { DiallingNumbersInfo } diallingNumbers - Indicates dialing number information.
   * @param { AsyncCallback<void> } callback - The callback of addIccDiallingNumbers.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function addIccDiallingNumbers(slotId: int, type: ContactType, diallingNumbers: DiallingNumbersInfo, callback: AsyncCallback<void>): void;

  /**
   * Add dialing number information to SIM card.
   *
   * @permission ohos.permission.WRITE_CONTACTS
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { ContactType } type - Indicates contact type.
   * @param { DiallingNumbersInfo } diallingNumbers - Indicates dialing number information.
   * @returns { Promise<void> } The promise returned by the addIccDiallingNumbers.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function addIccDiallingNumbers(slotId: int, type: ContactType, diallingNumbers: DiallingNumbersInfo): Promise<void>;

  /**
   * Delete dialing number information on SIM card.
   *
   * @permission ohos.permission.WRITE_CONTACTS
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { ContactType } type - Indicates contact type.
   * @param { DiallingNumbersInfo } diallingNumbers - Indicates dialing number information.
   * @param { AsyncCallback<void> } callback - The callback of delIccDiallingNumbers.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function delIccDiallingNumbers(slotId: int, type: ContactType, diallingNumbers: DiallingNumbersInfo, callback: AsyncCallback<void>): void;

  /**
   * Delete dialing number information on SIM card.
   *
   * @permission ohos.permission.WRITE_CONTACTS
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { ContactType } type - Indicates contact type.
   * @param { DiallingNumbersInfo } diallingNumbers - Indicates dialing number information.
   * @returns { Promise<void> } The promise returned by the delIccDiallingNumbers.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function delIccDiallingNumbers(slotId: int, type: ContactType, diallingNumbers: DiallingNumbersInfo): Promise<void>;

  /**
   * Update dialing number information on SIM card.
   *
   * @permission ohos.permission.WRITE_CONTACTS
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { ContactType } type - Indicates contact type.
   * @param { DiallingNumbersInfo } diallingNumbers - Indicates dialing number information.
   * @param { AsyncCallback<void> } callback - The callback of updateIccDiallingNumbers.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function updateIccDiallingNumbers(slotId: int, type: ContactType, diallingNumbers: DiallingNumbersInfo, callback: AsyncCallback<void>): void;

  /**
   * Update dialing number information on SIM card.
   *
   * @permission ohos.permission.WRITE_CONTACTS
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { ContactType } type - Indicates contact type.
   * @param { DiallingNumbersInfo } diallingNumbers - Indicates dialing number information.
   * @returns { Promise<void> } The promise returned by the updateIccDiallingNumbers.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function updateIccDiallingNumbers(slotId: int, type: ContactType, diallingNumbers: DiallingNumbersInfo): Promise<void>;

  /**
   * Get the lock status of the SIM card in the specified slot.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { LockType } lockType - Indicates the lock type.
   * @param { AsyncCallback<LockState> } callback - Indicates the callback for getting the sim card lock status.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getLockState(slotId: int, lockType: LockType, callback: AsyncCallback<LockState>): void;

  /**
   * Get the lock status of the SIM card in the specified slot.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { LockType } lockType - Indicates the lock type.
   * @returns { Promise<LockState> } Returns the sim card lock status.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function getLockState(slotId: int, lockType: LockType): Promise<LockState>;

  /**
   * Send envelope command to SIM card.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { string } cmd - Indicates sending command.
   * @param { AsyncCallback<void> } callback - The callback of sendEnvelopeCmd.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function sendEnvelopeCmd(slotId: int, cmd: string, callback: AsyncCallback<void>): void;

  /**
   * Send envelope command to SIM card.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { string } cmd - Indicates sending command.
   * @returns { Promise<void> } The promise returned by the sendEnvelopeCmd.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function sendEnvelopeCmd(slotId: int, cmd: string): Promise<void>;

  /**
   * Send terminal response command to SIM card.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { string } cmd - Indicates sending command.
   * @param { AsyncCallback<void> } callback - The callback of sendTerminalResponseCmd.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function sendTerminalResponseCmd(slotId: int, cmd: string, callback: AsyncCallback<void>): void;

  /**
   * Send terminal response command to SIM card.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { string } cmd - Indicates sending command.
   * @returns { Promise<void> } The promise returned by the sendTerminalResponseCmd.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function sendTerminalResponseCmd(slotId: int, cmd: string): Promise<void>;

  /**
   * Unlock SIM card.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { PersoLockInfo } lockInfo - Indicates customized lock type information.
   * @param { AsyncCallback<LockStatusResponse> } callback - Indicates the callback used to obtain a response
   *     to obtain the SIM card lock status for the specified card slot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function unlockSimLock(slotId: int, lockInfo: PersoLockInfo, callback: AsyncCallback<LockStatusResponse>): void;

  /**
   * Unlock SIM card.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } slotId - Indicates the card slot index number,
   *     ranging from 0 to the maximum card slot index number supported by the device.
   * @param { PersoLockInfo } lockInfo - Indicates customized lock type information.
   * @returns { Promise<LockStatusResponse> } Returns the response to obtain
   *     the SIM card lock status of the specified card slot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - The SIM card failed to read or update data.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  function unlockSimLock(slotId: int, lockInfo: PersoLockInfo): Promise<LockStatusResponse>;

  /**
   * Obtains the opkey of the SIM card in the specified slot. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { AsyncCallback<string> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 9 dynamic
   * @since 23 static
   */
  function getOpKey(slotId: int, callback: AsyncCallback<string>): void;

  /**
   * Obtains the opkey of the SIM card in the specified slot. This API uses a promise to return the result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { Promise<string> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 9 dynamic
   * @since 23 static
   */
  function getOpKey(slotId: int): Promise<string>;

  /**
   * Obtains the opkey of the SIM card in the specified slot.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { string } opkey of the SIM card in the specified slot.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 10 dynamic
   * @since 23 static
   */
  function getOpKeySync(slotId: int): string;

  /**
   * Obtains the OpName of the SIM card in the specified slot. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { AsyncCallback<string> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 9 dynamic
   * @since 23 static
   */
  function getOpName(slotId: int, callback: AsyncCallback<string>): void;

  /**
   * Obtains the OpName of the SIM card in the specified slot. This API uses a promise to return the result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { Promise<string> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 9 dynamic
   * @since 23 static
   */
  function getOpName(slotId: int): Promise<string>;

  /**
   * Obtains the OpName of the SIM card in the specified slot.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { string } OpName of the SIM card in the specified slot.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 10 dynamic
   * @since 23 static
   */
  function getOpNameSync(slotId: int): string;

  /**
   * Obtains the default slot ID of the SIM card that provides voice services. This API uses an asynchronous callback to
   * return the result.
   *
   * @param { AsyncCallback<int> } callback - Callback used to return the result.
   *     <br>The return value is bound to the SIM card and increases from 1.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301001 - SIM card is not activated.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 10 dynamic
   * @since 23 static
   */
  function getDefaultVoiceSimId(callback: AsyncCallback<int>): void;

  /**
   * Obtains the default slot ID of the SIM card that provides voice services. This API uses a promise to return the
   * result.
   *
   * @returns { Promise<int> } Promise used to return the result.
   *     <br>The return value is bound to the SIM card and increases from 1.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card found.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301001 - SIM card is not activated.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 10 dynamic
   * @since 23 static
   */
  function getDefaultVoiceSimId(): Promise<int>;

  /**
   * Obtains the value of dsds mode.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { AsyncCallback<DsdsMode> } callback - Indicates the callback for
   *     getting one of the following dsds mode states:
   *     <ul>
   *     <li>{@code DsdsMode#DSDS_MODE_V2}
   *     <li>{@code DsdsMode#DSDS_MODE_V3}
   *     <li>{@code DsdsMode#DSDS_MODE_V5_TDM}
   *     <li>{@code DsdsMode#DSDS_MODE_V5_DSDA}
   *     </ul>
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to
   *     service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getDsdsMode(callback: AsyncCallback<DsdsMode>): void;

  /**
   * Obtains the value of dsds mode.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @returns { Promise<DsdsMode> } Returns one of the following dsds mode
   *     states:
   *     <ul>
   *     <li>{@code DsdsMode#DSDS_MODE_V2}
   *     <li>{@code DsdsMode#DSDS_MODE_V3}
   *     <li>{@code DsdsMode#DSDS_MODE_V5_TDM}
   *     <li>{@code DsdsMode#DSDS_MODE_V5_DSDA}
   *     </ul>
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to
   *     service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getDsdsMode(): Promise<DsdsMode>;

  /**
   * Performs SIM card authentication.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { int } slotId - Sim slot id.
   * @param { AuthType } authType - The authentication type.
   * @param { string } authData - Ser password or other authentication information.
   * @returns { Promise<SimAuthenticationResponse> } A string the response of authentication.This value will be null in
   *     the following cases: Authentication error, incorrect MAC Authentication error, security context not supported
   *     Key
   *     freshness failure Authentication error, no memory space available Authentication error, no memory space
   *     available
   *     in EFMUK.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - No SIM card.
   * @throws { BusinessError } 8300999 - Unknown error.
   * @throws { BusinessError } 8301002 - An error occurred when operating the SIM card.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 14 dynamic
   * @since 23 static
   */
  function getSimAuthentication(slotId: int, authType: AuthType, authData: string): Promise<SimAuthenticationResponse>;

  /**
   * Get the list of all SIM card account information.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @param { AsyncCallback<Array<IccAccountInfo>> } callback - The callback is used to
   *     return the array of {@link IccAccountInfo}. The ICCID and phone number will be null
   *     if has no ohos.permission.GET_TELEPHONY_STATE.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - Do not have sim card.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  function getAllSimAccountInfoList(callback: AsyncCallback<Array<IccAccountInfo>>): void;

  /**
   * Get the list of all SIM card account information.
   *
   * @permission ohos.permission.GET_TELEPHONY_STATE
   * @returns { Promise<Array<IccAccountInfo>> } Returns the array of {@link IccAccountInfo}. The ICCID
   *     and phone number will be null if has no ohos.permission.GET_TELEPHONY_STATE.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300004 - Do not have sim card.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  function getAllSimAccountInfoList(): Promise<Array<IccAccountInfo>>;

  /**
   * Checks the mapping between card slot IDs and SIM cards.
   *
   * - Slot 1 corresponds to SIM card 1 or SIM card 2.
   * - Slot 2 corresponds to SIM card 2 or eSIMX.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @param { AsyncCallback<SimLabel> } callback - Callback used to return the result, which is the SIM card label.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 20 dynamic
   * @since 23 static
   */
  function getSimLabel(slotId: int, callback: AsyncCallback<SimLabel>): void;

  /**
   * Obtains the SIM card label. This API uses a promise to return the result.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { Promise<SimLabel> } Promise used to return ${the SIM card label}.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 20 dynamic
   * @since 23 static
   */
  function getSimLabel(slotId: int): Promise<SimLabel>;

  /**
   * Obtains the SIM card label based on the specified SIM card slot ID.
   *
   * @param { int } slotId - Card slot ID.
   *     <br>- **0**: card slot 1.
   *     <br>- **1**: card slot 2
   * @returns { SimLabel } SIM card label.
   * @syscap SystemCapability.Telephony.CoreService
   * @since 20 dynamic
   * @since 23 static
   */
  function getSimLabelSync(slotId: int): SimLabel;

  /**
   * Enumerates the SIM card types.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @since 20 dynamic
   * @since 23 static
   */
  export enum SimType {
    /**
     * Physical SIM card.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 20 dynamic
     * @since 23 static
     */
    PSIM = 0,

    /**
     * eSIM card.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 20 dynamic
     * @since 23 static
     */
    ESIM = 1
  }

  /**
   * Defines the SIM card label.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @since 20 dynamic
   * @since 23 static
   */
  export interface SimLabel {
    /**
     * SIM card type.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 20 dynamic
     * @since 23 static
     */
    simType: SimType;

    /**
     * Unique index ID of the SIM card.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 20 dynamic
     * @since 23 static
     */
    index: int;
  }

  /**
   * Defines the carrier configuration.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface OperatorConfig {
    /**
     * Indicates the field.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    field: string;

    /**
     * Indicates the value.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    value: string;
  }

  /**
   * Defines the ICC account information.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @since 10 dynamic
   * @since 23 static
   */
  export interface IccAccountInfo {
    /**
     * SIM card ID.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 10 dynamic
     * @since 23 static
     */
    simId: int;

    /**
     * Card slot ID.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 10 dynamic
     * @since 23 static
     */
    slotIndex: int;

    /**
     * Whether the SIM card is an eSIM.
     *
     * - **true**: The SIM card is an eSIM.
     * - **false**: The SIM card is not an eSIM.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 10 dynamic
     * @since 23 static
     */
    isEsim: boolean;

    /**
     * Whether the card is activated.
     *
     * **true**: activated.
     *
     * **false**: not activated.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 10 dynamic
     * @since 23 static
     */
    isActive: boolean;

    /**
     * ICCID number.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 10 dynamic
     * @since 23 static
     */
    iccId: string;

    /**
     * SIM card display name.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 10 dynamic
     * @since 23 static
     */
    showName: string;

    /**
     * SIM card display number.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 10 dynamic
     * @since 23 static
     */
    showNumber: string;

    /**
     * Indicates the simLabelIndex for card.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    simLabelIndex?: int;

    /**
     * Indicates the operatorName for card.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    operatorName?: string;
  }

  /**
   * Defines the personalized lock information.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  export interface LockStatusResponse {
    /**
     * Indicates the current operation result.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    result: int;

    /**
     * Indicates the operations remaining.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    remain?: int;
  }

  /**
   * Defines the contact number information.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface DiallingNumbersInfo {
    /**
     * Indicates the tag.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    alphaTag: string;

    /**
     * Indicates the call transfer number.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     */
    number: string;

    /**
     * Indicates the call transfer teleNumber.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    teleNumber: string;

    /**
     * Indicates the record number.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    recordNumber?: int;

    /**
     * Indicates the PIN 2.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    pin2?: string;
  }

  /**
   * Defines the personalized lock information.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface LockInfo {
    /**
     * Indicates the lock type.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    lockType: LockType;

    /**
     * Indicates the password.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    password: string;

    /**
     * Indicates the lock state.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    state: LockState;
  }

  /**
   * Defines the personalized lock information.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export interface PersoLockInfo {
    /**
     * Indicates the personalized lock type.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    lockType: PersoLockType;

    /**
     * Indicates the password.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    password: string;
  }

  /**
   * Indicates the lock types.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum LockType {
    /**
     * Indicates the SIM card password lock.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PIN_LOCK = 1,

    /**
     * Indicates the fixed dialing lock.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FDN_LOCK = 2
  }

  /**
   * Enumerates SIM card types.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @since 7 dynamic
   * @since 23 static
   */
  export enum CardType {
    /**
     * Unknown type.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 7 dynamic
     * @since 23 static
     */
    UNKNOWN_CARD = -1,

    /**
     * Single-card (SIM).
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 7 dynamic
     * @since 23 static
     */
    SINGLE_MODE_SIM_CARD = 10,

    /**
     * Single-card (USIM).
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 7 dynamic
     * @since 23 static
     */
    SINGLE_MODE_USIM_CARD = 20,

    /**
     * Single-card (RUIM).
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 7 dynamic
     * @since 23 static
     */
    SINGLE_MODE_RUIM_CARD = 30,

    /**
     * Dual-card (CDMA+GSM).
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 7 dynamic
     * @since 23 static
     */
    DUAL_MODE_CG_CARD = 40,

    /**
     * China Telecom internal roaming card.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 7 dynamic
     * @since 23 static
     */
    CT_NATIONAL_ROAMING_CARD = 41,

    /**
     * China Unicom dual-mode card.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 7 dynamic
     * @since 23 static
     */
    CU_DUAL_MODE_CARD = 42,

    /**
     * China Telecom dual-mode LTE card.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 7 dynamic
     * @since 23 static
     */
    DUAL_MODE_TELECOM_LTE_CARD = 43,

    /**
     * Dual-mode card (UMTS+GSM).
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 7 dynamic
     * @since 23 static
     */
    DUAL_MODE_UG_CARD = 50,

    /**
     * Single-card (ISIM).
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 8 dynamic
     * @since 23 static
     */
    SINGLE_MODE_ISIM_CARD = 60
  }

  /**
   * Enumerates SIM card states.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @since 6 dynamic
   * @since 23 static
   */
  export enum SimState {
    /**
     * The SIM card is in **unknown** state; that is, the SIM card status cannot be obtained.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    SIM_STATE_UNKNOWN = 0,

    /**
     * The SIM card is in **not present** state; that is, no SIM card is inserted into the card slot.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    SIM_STATE_NOT_PRESENT = 1,

    /**
     * The SIM card is in **locked** state; that is, the SIM card is locked by the personal identification number (PIN),
     * PIN unblocking key (PUK), or network.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    SIM_STATE_LOCKED = 2,

    /**
     * The SIM card is in **not ready** state; that is, the SIM card has been installed but cannot work properly.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    SIM_STATE_NOT_READY = 3,

    /**
     * The SIM card is in **ready** state; that is, the SIM card has been installed and is working properly.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    SIM_STATE_READY = 4,

    /**
     * The SIM card is in **loaded** state; that is, the SIM card is present and all its files have been loaded.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @since 6 dynamic
     * @since 23 static
     */
    SIM_STATE_LOADED = 5
  }

  /**
   * Indicates the lock states.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum LockState {
    /**
     * Indicates that the lock state card is in the <b>off</b> state.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    LOCK_OFF = 0,

    /**
     * Indicates that the lock state card is in the <b>on</b> state.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    LOCK_ON = 1
  }

  /**
   * Indicates the contact types.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum ContactType {
    /**
     * Indicates the common contact number.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    GENERAL_CONTACT = 1,

    /**
     * Indicates the fixed dialing number.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FIXED_DIALING = 2,

    /**
     * Service dialing number.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @FaAndStageModel
     * @since 24 dynamic&static
     */
    SDN_DIALING = 3
  }

  /**
   * Indicates the personalized lock types.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  export enum PersoLockType {
    /**
     * Indicates network personalization of PIN lock(refer 3GPP TS 22.022 [33]).
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PN_PIN_LOCK = 0,

    /**
     * Indicates network personalization of PUK lock(refer 3GPP TS 22.022 [33]).
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PN_PUK_LOCK = 1,

    /**
     * Indicates network subset personalization of PIN lock(refer 3GPP TS 22.022 [33]).
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PU_PIN_LOCK = 2,

    /**
     * Indicates network subset personalization of PUK lock(refer 3GPP TS 22.022 [33]).
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PU_PUK_LOCK = 3,

    /**
     * Indicates service provider personalization of PIN lock(refer 3GPP TS 22.022 [33]).
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PP_PIN_LOCK = 4,

    /**
     * Indicates service provider personalization of PUK lock(refer 3GPP TS 22.022 [33]).
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PP_PUK_LOCK = 5,

    /**
     * Indicates corporate personalization of PIN lock(refer 3GPP TS 22.022 [33]).
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PC_PIN_LOCK = 6,

    /**
     * Indicates corporate personalization of PUK lock(refer 3GPP TS 22.022 [33]).
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PC_PUK_LOCK = 7,

    /**
     * Indicates SIM/USIM personalization of PIN lock(refer 3GPP TS 22.022 [33]).
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PIN_LOCK = 8,

    /**
     * Indicates SIM/USIM personalization of PUK lock(refer 3GPP TS 22.022 [33]).
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    SIM_PUK_LOCK = 9
  }

  /**
   * Indicates the carrier configuration keys.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum OperatorConfigKey {
    /**
     * Indicates the voice mail number.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    KEY_VOICE_MAIL_NUMBER_STRING = "voice_mail_number_string",

    /**
     * Indicates the status of ims switch.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    KEY_IMS_SWITCH_ON_BY_DEFAULT_BOOL = "ims_switch_on_by_default_bool",

    /**
     * Indicates whether the ims switch status is hidden.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    KEY_HIDE_IMS_SWITCH_BOOL = "hide_ims_switch_bool",

    /**
     * Indicates whether volte mode is supported.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    KEY_VOLTE_SUPPORTED_BOOL = "volte_supported_bool",

    /**
     * Indicates the list supported by nr mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    KEY_NR_MODE_SUPPORTED_LIST_INT_ARRAY = "nr_mode_supported_list_int_array",

    /**
     * Indicates whether VOLTE supports configuration.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    KEY_VOLTE_PROVISIONING_SUPPORTED_BOOL = "volte_provisioning_supported_bool",

    /**
     * Indicates whether SS service supports UT.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    KEY_SS_OVER_UT_SUPPORTED_BOOL = "ss_over_ut_supported_bool",

    /**
     * Indicates whether the IMS requires GBA.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    KEY_IMS_GBA_REQUIRED_BOOL = "ims_gba_required_bool",

    /**
     * Indicates whether UT configuration is supported.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    KEY_UT_PROVISIONING_SUPPORTED_BOOL = "ut_provisioning_supported_bool",

    /**
     * Indicates the ims emergency preference.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    KEY_IMS_PREFER_FOR_EMERGENCY_BOOL = "ims_prefer_for_emergency_bool",

    /**
     * Indicates call waiting service.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    KEY_CALL_WAITING_SERVICE_CLASS_INT = "call_waiting_service_class_int",

    /**
     * Indicates call forwarding visibility.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    KEY_CALL_TRANSFER_VISIBILITY_BOOL = "call_transfer_visibility_bool",

    /**
     * Indicates the list of ims call end reasons.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    KEY_IMS_CALL_DISCONNECT_REASON_INFO_MAPPING_STRING_ARRAY = "ims_call_disconnect_reason_info_mapping_string_array",

    /**
     * Indicates the forced Volte switch on state.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    KEY_FORCE_VOLTE_SWITCH_ON_BOOL = "force_volte_switch_on_bool",

    /**
     * Indicates whether the operator name is displayed.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    KEY_ENABLE_OPERATOR_NAME_CUST_BOOL = "enable_operator_name_cust_bool",

    /**
     * Indicates the name of the operator.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    KEY_OPERATOR_NAME_CUST_STRING = "operator_name_cust_string",

    /**
     * Indicates the spn display rule.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    KEY_SPN_DISPLAY_CONDITION_CUST_INT = "spn_display_condition_cust_int",

    /**
     * Indicates the PLMN name.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    KEY_PNN_CUST_STRING_ARRAY = "pnn_cust_string_array",

    /**
     * Indicates operator PLMN information.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    KEY_OPL_CUST_STRING_ARRAY = "opl_cust_string_array",

    /**
     * Indicates the emergency call list.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    KEY_EMERGENCY_CALL_STRING_ARRAY = "emergency_call_string_array"
  }

  /**
   * Indicates the Dsds Mode.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export enum DsdsMode {
    /**
     * Indicates the DSDS 2.0 Mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    DSDS_MODE_V2 = 0,

    /**
     * Indicates the DSDS 3.0 Mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    DSDS_MODE_V3 = 1,

    /**
     * Indicates the DSDS 5.0 TDM Mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    DSDS_MODE_V5_TDM = 2,

    /**
     * Indicates the DSDS 5.0 DSDA Mode.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    DSDS_MODE_V5_DSDA = 3
  }

  /**
   * Indicates the operator of SIM.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  export enum OperatorSimCard {
    /**
     * Indicates the China Telecom card.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    CHINA_TELECOM_CARD = 'china_telecom_card'
  }

  /**
   * Indicates the Authentication type
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 14 dynamic
   * @since 23 static
   */
  export enum AuthType {
    /**
     * Authentication type is EAP-SIM. See RFC 4186
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    SIM_AUTH_EAP_SIM_TYPE = 128,
    /**
     * Authentication type is EAP-AKA. See RFC 4187
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    SIM_AUTH_EAP_AKA_TYPE = 129
  }

  /**
   * Defines the SIM card authentication response.
   *
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @since 14 dynamic
   * @since 23 static
   */
  export interface SimAuthenticationResponse {
    /**
     * Status word 1 of the SIM card, which is returned by the SIM card after command execution.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    simStatusWord1: int;

    /**
     * Status word 2 of the SIM card, which is returned by the SIM card after command execution.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    simStatusWord2: int;

    /**
     * Indicates the response of authentication.
     *
     * @syscap SystemCapability.Telephony.CoreService
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    response: string;
  }

  /**
   * Set the SIM card labelIndex.
   *
   * @permission ohos.permission.SET_TELEPHONY_STATE
   * @param { int } simId - Indicates the sim Id for card from sim account information.
   *     <br>Value range:[1,500]
   * @param { int } simLabelIndex - Indicates the simlabel index for card.
   * @returns { Promise<void> } The promise returned by the setSimLabelIndex.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Nonsystem applications use system APIs.
   * @throws { BusinessError } 8300001 - Invalid parameter value.
   * @throws { BusinessError } 8300002 - Service connection failed.
   * @throws { BusinessError } 8300003 - System internal error.
   * @throws { BusinessError } 8300999 - Unknown error code.
   * @syscap SystemCapability.Telephony.CoreService
   * @systemapi Hide this for inner system use.
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  function setSimLabelIndex(simId: int, simLabelIndex: int): Promise<void>;
}

export default sim;