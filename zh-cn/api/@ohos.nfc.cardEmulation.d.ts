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
 * @file 标准NFC-cardEmulation
 * @kit ConnectivityKit
 */

import { AsyncCallback } from './@ohos.base';
import { ElementName } from './bundleManager/ElementName';
import type { AbilityInfo } from './bundleManager/AbilityInfo';

/**
 * 本模块主要提供NFC卡模拟业务，包括判断支持哪种卡模拟类型，HCE卡模拟的业务实现等。
 * 
 * HCE(Host Card Emulation)，称为基于主机的卡模拟，表示不依赖安全单元芯片，应用程序模拟NFC卡片，可以通过NFC服务和NFC读卡器通信。
 * 
 * HCE卡模拟和AID列表的声明定义
 * 
 * 开发HCE卡模拟相关应用时，需要在应用的属性配置文件中，声明与NFC相关的属性值，比如，在module.json5文件中，声明下面属性值：
 * 
 * > **注意：**
 * >
 * > 1. 声明"actions"字段的内容填写，必须包含"ohos.nfc.cardemulation.action.HOST_APDU_SERVICE"，不能更改。
 * >
 * > 2. 声明aid（参考ISO/IEC 7816-4规范）时，name必须为payment-aid或者other-aid。填写错误会造成解析失败。
 * >
 * > 3. 声明权限时"requestPermissions"中的"name"字段的内容填写，必须是"ohos.permission.NFC_CARD_EMULATION"，不能更改。
 * >
 * > 4. 轻量级智能穿戴产品不同于其他设备，仅支持[FA模型](docroot://application-models/ability-terminology.md#fa模型)，属性配置和接口调用方式与其他设备有所区别，详见示例。
 *
 * @syscap SystemCapability.Communication.NFC.CardEmulation
 * @FaAndStageModel
 * @atomicservice [since 12]
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace cardEmulation {
  /**
   * 定义不同的NFC卡模拟类型。
   *
   * @syscap SystemCapability.Communication.NFC.CardEmulation
   * @stagemodelonly
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.nfc.cardEmulation/cardEmulation#hasHceCapability
   */
  enum FeatureType {
    /**
     * HCE 卡模拟。
     *
     * @syscap SystemCapability.Communication.NFC.CardEmulation
     * @stagemodelonly
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.nfc.cardEmulation/cardEmulation#hasHceCapability
     */
    HCE = 0,

    /**
     * SIM 卡模拟。
     *
     * @syscap SystemCapability.Communication.NFC.CardEmulation
     * @stagemodelonly
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.nfc.cardEmulation/cardEmulation#hasHceCapability
     */
    UICC = 1,

    /**
     * ESE 卡模拟。
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
   * 定义卡模拟应用所使用的业务类型，是支付类型，还是其他类型。
   *
   * @syscap SystemCapability.Communication.NFC.CardEmulation
   * @FaAndStageModel
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum CardType {
    /**
     * 卡模拟应用所使用的业务是支付类型。
     *
     * @syscap SystemCapability.Communication.NFC.CardEmulation
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    PAYMENT = "payment",

    /**
     * 卡模拟应用所使用的业务是其他类型。
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
   * 是否支持某种类型的卡模拟。
   *
   * @param { number } feature - 卡模拟类型值，详细请见[FeatureType]{@link cardEmulation.FeatureType}枚举值。
   * @returns { boolean } true: 支持该类型卡模拟， false: 不支持该类型卡模拟。
   * @syscap SystemCapability.Communication.NFC.CardEmulation
   * @stagemodelonly
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.nfc.cardEmulation/cardEmulation#hasHceCapability
   */
  function isSupported(feature: number): boolean;

  /**
   * 判断设备是否支持HCE卡模拟功能。
   *
   * @permission ohos.permission.NFC_CARD_EMULATION
   * @returns { boolean } true: 支持HCE， false: 不支持HCE。
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
   * 判断指定的应用是否为指定业务类型的默认应用。
   *
   * @permission ohos.permission.NFC_CARD_EMULATION
   * @param { ElementName } elementName - 所属应用声明NFC卡模拟能力的页面信息（至少包含bundleName、abilityName这两项的赋值），不可以为空。
   * @param { CardType } type - 卡模拟业务类型。目前只支持默认支付应用查询。
   * @returns { boolean } true: 是默认支付应用， false: 不是默认支付应用。
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
   * 获取所有支付类型的服务列表。如果应用程序声明支持HCE功能，并且声明了"payment-aid"，则会包含在列表里面，参考
   * [HCE卡模拟和AID列表的声明定义](docroot://reference/apis-connectivity-kit/js-apis-cardEmulation.md#hce卡模拟和aid列表的声明定义)。
   *
   * @permission ohos.permission.NFC_CARD_EMULATION
   * @returns { AbilityInfo[] } 返回所有支付类型的服务。
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
   * 提供HCE卡模拟的实现，主要包括接收对端读卡设备的APDU数据，并响应APDU数据到对端读卡设备。使用HCE相关接口前，必须先判断设备是否支持HCE卡模拟能力。
   *
   * @syscap SystemCapability.Communication.NFC.CardEmulation
   * @FaAndStageModel
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  export class HceService {
    /**
     * 启动HCE业务功能。包括设置当前应用为前台优先，动态注册AID列表。
     *
     * @permission ohos.permission.NFC_CARD_EMULATION
     * @param { string[] } aidList - 动态注册卡模拟的AID列表。
     * @returns { boolean } true: 启动HCE功能或HCE已启动， false: 启动失败。
     * @syscap SystemCapability.Communication.NFC.CardEmulation
     * @stagemodelonly
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.nfc.cardEmulation/cardEmulation.HceService#start
     */
    startHCE(aidList: string[]): boolean;

    /**
     * 启动HCE业务功能。包括设置当前应用为前台优先，动态注册AID列表。
     *
     * @permission ohos.permission.NFC_CARD_EMULATION
     * @param { ElementName } elementName - 所属应用声明NFC卡模拟能力的页面信息（至少包含bundleName、abilityName这两项的赋值），不可以为空。
     * @param { string[] } aidList - 动态注册卡模拟的AID列表，允许为空。
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
     * 停止HCE业务功能。包括退出当前应用前台优先，释放动态注册的AID列表，释放hceCmd的订阅。
     *
     * @permission ohos.permission.NFC_CARD_EMULATION
     * @returns { boolean } true: 禁用HCE功能或HCE已禁用，false: 禁用失败。
     * @syscap SystemCapability.Communication.NFC.CardEmulation
     * @stagemodelonly
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.nfc.cardEmulation/cardEmulation.HceService#stop
     */
    stopHCE(): boolean;

    /**
     * 停止HCE业务功能。包括取消APDU数据接收的订阅，退出当前应用前台优先，释放动态注册的AID列表。应用程序需要在HCE卡模拟页面的onDestroy函数里调用该接口。
     *
     * @permission ohos.permission.NFC_CARD_EMULATION
     * @param { ElementName } elementName - 所属应用声明NFC卡模拟能力的页面信息（至少包含bundleName、abilityName这两项的赋值），不可以为空。
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
     * 订阅回调，用于接收对端读卡设备发送的APDU数据，应用程序需要在HCE卡模拟页面的onCreate函数里面调用该订阅函数。使用callback异步回调。
     *
     * @permission ohos.permission.NFC_CARD_EMULATION
     * @param { 'hceCmd' } type - 要订阅的回调类型，固定填"hceCmd"字符串。
     * @param { AsyncCallback<int[]> } callback - 回调函数，返回的是符合APDU协议的数据，每个number十六进制表示，范围是0x00~0xFF。
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
     * 发送APDU数据到对端读卡设备。
     *
     * @permission ohos.permission.NFC_CARD_EMULATION
     * @param { number[] } responseApdu - 发送到对端读卡设备的符合APDU协议的数据，每个number十六进制表示，范围是0x00~0xFF。
     * @syscap SystemCapability.Communication.NFC.CardEmulation
     * @stagemodelonly
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.nfc.cardEmulation/cardEmulation.HceService#transmit
     */
    sendResponse(responseApdu: number[]): void;

    /**
     * 发送APDU数据到对端读卡设备，使用Promise异步回调。应用程序必须在
     * [on]{@link cardEmulation.HceService#on(type: 'hceCmd', callback: AsyncCallback<int[]>)}收到读卡设备发送的APDU数据后，才调用该接口响应数
     * 据。
     *
     * @permission ohos.permission.NFC_CARD_EMULATION
     * @param { int[] } response - 发送到对端读卡设备的符合APDU协议的数据，每个number十六进制表示，范围是0x00~0xFF。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
     * 发送APDU数据到对端读卡设备，应用程序必须在[on]{@link cardEmulation.HceService#on(type: 'hceCmd', callback: AsyncCallback<int[]>)}收到读
     * 卡设备发送的APDU数据后，才调用该接口响应数据。使用Callback异步回调。
     *
     * @permission ohos.permission.NFC_CARD_EMULATION
     * @param { int[] } response - 发送到对端读卡设备的符合APDU协议的数据，每个number十六进制表示，范围是0x00~0xFF。
     * @param { AsyncCallback<void> } callback - 回调函数。当发送APDU数据成功时，err为undefined，否则为错误对象。
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
     * 取消APDU数据接收的订阅。使用callback异步回调。
     *
     * @permission ohos.permission.NFC_CARD_EMULATION
     * @param { 'hceCmd' } type - 要取消订阅的事件类型，固定填"hceCmd"字符串。
     * @param { AsyncCallback<int[]> } callback - 回调函数，返回的每个number十六进制表示，范围是0x00~0xFF。不填该参数则取消订阅该type对应的回调。
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