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
 * ###### HCE and AID Declaration
 * 
 * Before developing an application related to HCE, you must declare NFC-related attributes in the **module.json5** 
 * file.
 * 
 * ```json5
 * // Applicable to devices other than lite wearables
 * {
 *   "module": {
 *     // Other declared attributes
 *     "abilities": [
 *       {
 *         // Other declared attributes
 *         "skills": [
 *           {
 *             "actions": [
 *               "ohos.nfc.cardemulation.action.HOST_APDU_SERVICE"
 *             ]
 *           }
 *         ],
 *         "metadata": [
 *           {
 *             "name": "payment-aid",
 *             "value": "your payment aid"
 *           },
 *           {
 *             "name": "other-aid",
 *             "value": "your other aid"
 *           }
 *         ]
 *       }
 *     ],
 *     "requestPermissions": [
 *       {
 *         "name": "ohos.permission.NFC_CARD_EMULATION",
 *         // Set reason to card_emulation_reason.
 *         "reason": "$string:card_emulation_reason"
 *       }
 *     ]
 *   }
 * }
 * ```
 * 
 * ```json5
 * // Applicable to lite wearables
 * {
 *   "module": {
 *     // Other declared attributes
 *     "abilities": [
 *       {
 *         // Other declared attributes
 *         "metaData": {
 *           "customizeData": [
 *             {
 *               "name": "paymentAid",
 *               "value": "A0000000041012"
 *             },
 *             {
 *               "name": "otherAid",
 *               "value": "A0000000041010"
 *             }
 *           ]
 *         },
 *         "skills": [
 *           {
 *             "entities": [
 *               "ohos.nfc.cardemulation.action.HOST_APDU_SERVICE"
 *             ],
 *             "actions": [
 *               "ohos.nfc.cardemulation.action.HOST_APDU_SERVICE"
 *             ]
 *           }
 *         ]
 *       }
 *     ],
 *     "reqPermissions": [
 *       {
 *         "name": "ohos.permission.NFC_CARD_EMULATION",
 *         // Set reason to card_emulation_reason.
 *         "reason": "$string:card_emulation_reason",
 *         "usedScene":{
 *           "ability":[
 *             "FormAbility"
 *           ],
 *           "when":"always"
 *         }
 *       },
 *       {
 *         "name": "ohos.permission.NFC_TAG",
 *         // Set reason to card_emulation_reason.
 *         "reason": "$string:card_emulation_reason",
 *         "usedScene":{
 *           "ability":[
 *             "FormAbility"
 *           ],
 *           "when":"always"
 *         }
 *       }
 *     ]
 *   }
 * }
 * ```
 * 
 * > **NOTE**
 * >
 * > 1. The **actions** field must contain **ohos.nfc.cardemulation.action.HOST_APDU_SERVICE** and cannot be changed.
 * >
 * > 2. When declaring an AID (in compliance with ISO/IEC 7816-4), ensure that **name** is set to **payment-aid** or 
 * > **other-aid**. Incorrect setting will cause a parsing failure.
 * >
 * > 3. The **name** field of **requestPermissions** must be **ohos.permission.NFC_CARD_EMULATION** and cannot be 
 * > changed.
 * >
 * > 4. Lite wearables support only the [FA Model](docroot://application-models/ability-terminology.md#fa-model), with 
 * > attribute configurations and API invocation methods differing from those of other device types. Refer to the 
 * > example code for detailed implementations.
 *
 * @file Standard NFC Card Emulation
 * @kit ConnectivityKit
 */

import { AsyncCallback } from './@ohos.base';
import { ElementName } from './bundleManager/ElementName';
import type { AbilityInfo } from './bundleManager/AbilityInfo';

/**
 * The **cardEmulation** module implements Near-Field Communication (NFC) card emulation. You can use the APIs provided
 * by this module to determine the card emulation type supported and implement Host Card Emulation (HCE).
 *
 * HCE provides card emulation that does not depend on a secure element. It allows an application to emulate a card and
 * communicate with an NFC card reader through the NFC service.
 *
 * @syscap SystemCapability.Communication.NFC.CardEmulation
 * @FaAndStageModel
 * @atomicservice [since 12]
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace cardEmulation {
  /**
   * Enumerates the NFC card emulation types.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 6 and deprecated since API version 9. Use
   * > [hasHceCapability]{@link cardEmulation.hasHceCapability} instead.
   *
   * @syscap SystemCapability.Communication.NFC.CardEmulation
   * @stagemodelonly
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.nfc.cardEmulation/cardEmulation#hasHceCapability
   */
  enum FeatureType {
    /**
     * HCE.
     *
     * @syscap SystemCapability.Communication.NFC.CardEmulation
     * @stagemodelonly
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.nfc.cardEmulation/cardEmulation#hasHceCapability
     */
    HCE = 0,

    /**
     * Subscriber identity module (SIM) card emulation.
     *
     * @syscap SystemCapability.Communication.NFC.CardEmulation
     * @stagemodelonly
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.nfc.cardEmulation/cardEmulation#hasHceCapability
     */
    UICC = 1,

    /**
     * Embedded Secure Element (eSE) emulation.
     *
     * @syscap SystemCapability.Communication.NFC.CardEmulation
     * @stagemodelonly
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.nfc.cardEmulation/cardEmulation#hasHceCapability
     */
    ESE = 2
  }

  /**
   * Enumerates the types of services used by the card emulation application.
   *
   * @syscap SystemCapability.Communication.NFC.CardEmulation
   * @FaAndStageModel
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum CardType {
    /**
     * Payment service.
     *
     * @syscap SystemCapability.Communication.NFC.CardEmulation
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    PAYMENT = "payment",

    /**
     * Other services.
     *
     * @syscap SystemCapability.Communication.NFC.CardEmulation
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    OTHER = "other"
  }

  /**
   * Checks whether a certain type of card emulation is supported.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 6 and deprecated since API version 9. Use
   * > [hasHceCapability]{@link cardEmulation.hasHceCapability} instead.
   *
   * @param { number } feature - Card emulation type to check. For details, see
   *     [FeatureType]{@link cardEmulation.FeatureType}.
   * @returns { boolean } Returns **true** if the card emulation type is supported; returns **false** otherwise.
   * @syscap SystemCapability.Communication.NFC.CardEmulation
   * @stagemodelonly
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.nfc.cardEmulation/cardEmulation#hasHceCapability
   */
  function isSupported(feature: number): boolean;

  /**
   * Checks whether the device supports HCE.
   *
   * @permission ohos.permission.NFC_CARD_EMULATION
   * @returns { boolean } Returns **true** if HCE is supported; returns **false** otherwise.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.NFC.CardEmulation
   * @FaAndStageModel
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function hasHceCapability(): boolean;

  /**
   * Checks whether an application is the default application of the specified service type.
   *
   * @permission ohos.permission.NFC_CARD_EMULATION
   * @param { ElementName } elementName - Information about the page, on which the application declares the NFC card
   *     emulation capability. It must contain at least **bundleName** and **abilityName** and cannot be empty.
   * @param { CardType } type - Card emulation service type. Currently, only the default payment application can be
   *     queried.
   * @returns { boolean } Returns **true** if the application is the default payment application; returns **false**
   *     otherwise.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.NFC.CardEmulation
   * @FaAndStageModel
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function isDefaultService(elementName: ElementName, type: CardType): boolean;

  /**
   * Obtains all payment services. If an application declares the support for the HCE feature and **payment-aid**, the
   * application is contained in the payment service list. For details, see
   * [HCE and AID Declaration](docroot://reference/apis-connectivity-kit/js-apis-cardEmulation.md#hce-and-aid-declaration).
   *
   * @permission ohos.permission.NFC_CARD_EMULATION
   * @returns { AbilityInfo[] } List of payment services obtained.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.NFC.CardEmulation
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function getPaymentServices(): AbilityInfo[];

  /**
   * Provides APIs for implementing HCE, including receiving Application Protocol Data Units (APDUs) from the peer card
   * reader and sending a response. Before using HCE-related APIs, check whether the device supports HCE.
   *
   * @syscap SystemCapability.Communication.NFC.CardEmulation
   * @FaAndStageModel
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  export class HceService {
    /**
     * Starts HCE, including enabling this application to run in the foreground preferentially and dynamically
     * registering the AID list.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 8 and deprecated since API version 9. Use
     * > [start]{@link cardEmulation.HceService#start} instead.
     *
     * @permission ohos.permission.NFC_CARD_EMULATION
     * @param { string[] } aidList - List of AIDs to register.
     * @returns { boolean } Returns **true** if HCE is started or has been started; returns **false** otherwise.
     * @syscap SystemCapability.Communication.NFC.CardEmulation
     * @stagemodelonly
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.nfc.cardEmulation/cardEmulation.HceService#start
     */
    startHCE(aidList: string[]): boolean;

    /**
     * Starts HCE, including enabling this application to run in the foreground preferentially and dynamically
     * registering the AID list.
     *
     * @permission ohos.permission.NFC_CARD_EMULATION
     * @param { ElementName } elementName - Information about the page, on which the application declares the NFC card
     *     emulation capability. It must contain at least **bundleName** and **abilityName** and cannot be empty.
     * @param { string[] } aidList - List of AIDs to register. This parameter can be left empty.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3100301 - Card emulation running state is abnormal in service.
     * @syscap SystemCapability.Communication.NFC.CardEmulation
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    start(elementName: ElementName, aidList: string[]): void;

    /**
     * Stops HCE, including exiting the current application from the foreground, releasing the dynamically registered
     * AID list, and canceling the subscription of **hceCmd**.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 8 and deprecated since API version 9. Use
     * > [stop]{@link cardEmulation.HceService#stop} instead.
     *
     * @permission ohos.permission.NFC_CARD_EMULATION
     * @returns { boolean } **true** if HCE is stopped or disabled; **false** otherwise.
     * @syscap SystemCapability.Communication.NFC.CardEmulation
     * @stagemodelonly
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.nfc.cardEmulation/cardEmulation.HceService#stop
     */
    stopHCE(): boolean;

    /**
     * Stops HCE, including canceling the subscription of APDU data, exiting this application from the foreground, and
     * releasing the dynamically registered AID list. The application needs to call this API in **onDestroy** of the HCE
     * page.
     *
     * @permission ohos.permission.NFC_CARD_EMULATION
     * @param { ElementName } elementName - Information about the page, on which the application declares the NFC card
     *     emulation capability. It must contain at least **bundleName** and **abilityName** and cannot be empty.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3100301 - Card emulation running state is abnormal in service.
     * @syscap SystemCapability.Communication.NFC.CardEmulation
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    stop(elementName: ElementName): void;

    /**
     * Subscribes to events indicating receiving of APDUs from the peer card reader. The application needs to call this
     * API in **onCreate()** of the HCE page. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.NFC_CARD_EMULATION
     * @param { 'hceCmd' } type - Event type. It has a fixed value of **hceCmd**.
     * @param { AsyncCallback<int[]> } callback - Event callback used to return the data array that complies with the
     *     APDU. Each number is represented in hexadecimal notation, with values ranging from 0x00 to 0xFF.
     * @throws { BusinessError } 201 - Permission denied. [since 12]
     * @throws { BusinessError } 401 - Invalid parameter. [since 12]
     * @throws { BusinessError } 801 - Capability not supported. [since 12]
     * @syscap SystemCapability.Communication.NFC.CardEmulation
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    on(type: 'hceCmd', callback: AsyncCallback<int[]>): void;

    /**
     * register HCE event to receive the APDU data.
     *
     * @permission ohos.permission.NFC_CARD_EMULATION
     * @param { AsyncCallback<int[]> } callback Callback used to listen to HCE data that local device received.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.NFC.CardEmulation
     * @stagemodelonly
     * @since 23 static
     */
    onHceCmd(callback: AsyncCallback<int[]>): void;

    /**
     * Sends a response to the peer card reader.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 8 and deprecated since API version 9. Use
     * > [transmit]{@link cardEmulation.HceService#transmit(response: int[])} instead.
     *
     * @permission ohos.permission.NFC_CARD_EMULATION
     * @param { number[] } responseApdu - Response APDU sent to the peer card reader. The value consists of hexadecimal
     *     numbers ranging from **0x00** to **0xFF**.
     * @syscap SystemCapability.Communication.NFC.CardEmulation
     * @stagemodelonly
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.nfc.cardEmulation/cardEmulation.HceService#transmit
     */
    sendResponse(responseApdu: number[]): void;

    /**
     * Transmits an APDU to the peer card reader. This API uses a promise to return the result. The application calls
     * this API only after receiving an APDU sent by the card reader via
     * [on]{@link cardEmulation.HceService#on(type: 'hceCmd', callback: AsyncCallback<int[]>)}.
     *
     * @permission ohos.permission.NFC_CARD_EMULATION
     * @param { int[] } response - Response APDU sent to the peer card reader. The value consists of hexadecimal numbers
     *     ranging from **0x00** to **0xFF**.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3100301 - Card emulation running state is abnormal in service.
     * @syscap SystemCapability.Communication.NFC.CardEmulation
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    transmit(response: int[]): Promise<void>;

    /**
     * Sends APDU data to the peer card reader. The application can call this API only after receiving an APDU sent by
     * the card reader via [on]{@link cardEmulation.HceService#on(type: 'hceCmd', callback: AsyncCallback<int[]>)}. This
     * API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.NFC_CARD_EMULATION
     * @param { int[] } response - Response APDU sent to the peer card reader. The value consists of hexadecimal numbers
     *     ranging from **0x00** to **0xFF**.
     * @param { AsyncCallback<void> } callback - Callback used to return the operation result. If the operation is
     *     successful, **err** is **undefined**; otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 3100301 - Card emulation running state is abnormal in service.
     * @syscap SystemCapability.Communication.NFC.CardEmulation
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    transmit(response: int[], callback: AsyncCallback<void>): void;

    /**
     * Unsubscribes from events indicating receiving of APDUs from the peer card reader. This API uses an asynchronous
     * callback to return the result.
     *
     * @permission ohos.permission.NFC_CARD_EMULATION
     * @param { 'hceCmd' } type - Event type. It has a fixed value of **hceCmd**.
     * @param { AsyncCallback<int[]> } callback - Event callback. Each number is represented in hexadecimal notation,
     *     with values ranging from 0x00 to 0xFF. If this parameter is not set, this API unregisters the callback for
     *     the specified **type**.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.NFC.CardEmulation
     * @FaAndStageModel
     * @atomicservice
     * @since 18 dynamic
     */
    off(type: 'hceCmd', callback?: AsyncCallback<int[]>): void;

    /**
     * Unsubscribe the event to receive the APDU data.
     *
     * @permission ohos.permission.NFC_CARD_EMULATION
     * @param { AsyncCallback<int[]> } [callback] - The callback used to listen for the event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.NFC.CardEmulation
     * @stagemodelonly
     * @since 23 static
     */
    offHceCmd(callback?: AsyncCallback<int[]>): void;
  }
}
export default cardEmulation;