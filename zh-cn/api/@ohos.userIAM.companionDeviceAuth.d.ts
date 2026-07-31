/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @file 伴随设备认证
 * @kit UserAuthenticationKit
 */

import UserAuth from '@ohos.userIAM.userAuth';

/**
 * **companionDeviceAuth**模块是OpenHarmony用户身份认证体系（UserIAM）的重要组成部分，专门用于伴随设备认证管理。该模块为系统应用提供伴随设备查询、订阅和服务范围管理等能力。
 * 
 * 设计逻辑：伴随设备认证采用主设备（Host）与伴随设备（Companion）协作的模式。主设备通过绑定流程将另一台设备添加为伴随设备，绑定过程中双端完成密钥协商并分发初始认证令牌。认证模式包括令牌认证和委托认证：令牌认证基于主设备签发
 * 至伴随设备的令牌计算消息认证码（MAC）完成身份校验；委托认证由主设备委托伴随设备执行本地认证并返回结果。主设备签发的令牌携带认证可信等级（authTrustLevel），令牌生命周期包括签发、超时、吊销及关联设备离线等阶段。伴随设备
 * 的认证状态由令牌生命周期与认证保持状态（如佩戴状态、连接状态等）共同决定。应用通过状态监听器订阅模板状态、可用设备变化和持续认证状态，系统通过回调主动通知变化。
 * 
 * 该模块主要用于以下场景：
 * 
 * - 管理伴随设备与主设备之间的认证关系。
 * - 查询和订阅伴随设备的状态变化。
 * - 管理伴随设备支持的业务范围。
 * - 实现持续认证功能。
 * - 处理设备选择和注册。
 *
 * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
 * @systemapi Hide this for inner system use.
 * @stagemodelonly
 * @since 23 dynamic&static
 */
declare namespace companionDeviceAuth {
  /**
   * 业务ID枚举。业务ID是伴随设备支持的某个业务场景的唯一标识。不同的伴随设备由于认证安全性差异，支持的业务场景范围也不同，例如免解锁执行语音指令。
   * 
   * 不同业务ID的伴随设备关系是独立的，互不干扰，可以独立添加、删除、认证。
   * 
   * 当前伴随设备模块的业务包括锁屏解锁、解锁应用锁、语音指令在锁屏执行前的身份鉴权等业务场景。
   * 
   * 业务的添加对于服务端设备支持的场景有要求，如多屏协同业务，要求服务端设备支持委托认证场景。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum BusinessId {
    /**
     * 默认业务ID。系统预设的默认业务，用于基本的伴随设备认证场景。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DEFAULT = 0,

    /**
     * 厂商自定义业务ID取值起点。厂商可在此值基础上自定义扩展业务ID，实际取值需大于等于10000，避免与系统保留值[0-9999]冲突。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    VENDOR_BEGIN = 10000
    }

  /**
     * 设备ID类型枚举。用于定义设备业务标识的类型，支持系统预设类型和厂商自定义扩展类型。
     *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum DeviceIdType {
    /**
     * 统一设备ID。系统预设的设备业务标识类型，用于跨设备的统一设备识别。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    UNIFIED_DEVICE_ID = 1,

    /**
     * 厂商自定义设备ID类型取值起点。厂商可在此值基础上自定义扩展设备ID类型，实际取值需大于等于10000，避免与系统保留值[1-9999]冲突。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    VENDOR_BEGIN = 10000
    }

  /**
   * 选择伴随设备的目的。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum SelectPurpose {
    /**
     * 选择添加模板的伴随设备。表示当前操作目的是选择一个设备用于添加新的认证模板，系统应返回适合添加模板的设备列表。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    SELECT_ADD_DEVICE = 1,

    /**
     * 选择提供认证能力的伴随设备。表示当前操作目的是选择一个已注册模板的设备用于执行身份认证，系统应返回具备认证能力的设备列表。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    SELECT_AUTH_DEVICE = 2,

    /**
     * 厂商自定义选择目的取值起点。厂商可在此值基础上自定义扩展选择目的，实际取值需大于等于10000，避免与系统保留值[0-9999]冲突。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    VENDOR_BEGIN = 10000
    }

  /**
   * 设备标识。用于唯一标识一个设备及其用户，包含设备ID类型、设备ID和设备用户ID等信息。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface DeviceKey {
    /**
     * 设备ID类型。用于指定设备业务标识的类型，可在[DeviceIdType]{@link companionDeviceAuth.DeviceIdType}基础上自定义扩展，如使用UNIFIED_DEVICE_ID(1)表示统一
     * 设备ID，或使用厂商自定义值（≥10000）。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceIdType: int;

    /**
         * 设备ID。设备的唯一标识字符串，具体格式由deviceIdType决定。
         *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceId: string;

    /**
     * 设备用户ID。设备上的用户标识，为非负整数，用于区分设备上的不同用户。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceUserId: int;
    }

  /**
     * 设备状态信息。用于描述伴随设备的当前状态，包括设备业务标识、用户名、型号信息、设备名、在线状态以及支持的业务ID列表等。
     *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface DeviceStatus {
    /**
     * 设备关键信息。包含设备ID类型、设备ID和设备用户ID，作为设备的唯一标识。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceKey: DeviceKey;

    /**
         * 设备用户名。设备上当前用户的显示名称，用于在设备选择界面展示。
         *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceUserName: string;

    /**
         * 设备模型信息。设备的型号标识，如产品型号、设备类型等信息。
         *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceModelInfo: string;

    /**
         * 设备名。设备的名称或别名，用于在设备列表中展示给用户。
         *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceName: string;

    /**
     * 设备在线状态。true表示设备处于在线状态，可以与主设备通信；false表示设备处于离线状态，无法进行认证交互。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isOnline: boolean;

    /**
     * 设备支持的业务ID列表。表示该设备支持的业务场景范围，如解锁锁屏、解锁应用锁等。不同设备因认证安全性差异，支持的业务范围不同。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    supportedBusinessIds: int[];
    }

  /**
   * 用于描述已注册的伴随设备认证模板的完整状态信息，包括模板ID、数据确认状态、有效性、用户ID、添加时间、支持的业务范围以及关联的设备状态等。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface TemplateStatus {
    /**
         * 模板ID。伴随设备认证模板的唯一标识，用于在更新业务范围或订阅认证状态时指定目标模板。
         *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    templateId: Uint8Array;

    /**
     * 数据确认状态。true表示数据是实时数据，已与设备确认同步；false表示数据是缓存数据，可能与设备实际状态存在差异。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isConfirmed: boolean;

    /**
     * 模板有效性。true表示模板有效，可用于认证；false表示模板无效，可能已被删除或失效，无法用于认证。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isValid: boolean;

    /**
     * 本地用户ID。主设备上与该模板关联的用户标识，为非负整数。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    localUserId: int;

    /**
     * 模板添加时间，类型为Date对象。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    addedTime: Date;

    /**
     * 支持的业务ID列表。该模板已启用的业务场景范围，可通过[updateEnabledBusinessIds]{@link companionDeviceAuth.updateEnabledBusinessIds}接口更新。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    enabledBusinessIds: int[];

    /**
     * 设备状态信息。与该模板关联的伴随设备的当前状态，包括在线状态、设备名等。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceStatus: DeviceStatus;
    }

  /**
   * 回调函数，用于接收模板状态变化通知。当模板状态发生变化（如添加、删除、有效性变更等）时，系统会通过此回调通知应用。
   *
   * @param { TemplateStatus[] } templateStatusList - 模板状态列表。包含当前用户下所有已注册模板的状态信息，应用可根据列表中的isValid字段判断模板有效性，根据isConfirmed
   *     字段判断数据是否为实时数据。
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type TemplateStatusCallback = (templateStatusList: TemplateStatus[]) => void;

  /**
   * 回调函数，用于接收持续认证状态变化通知。当伴随设备的认证状态发生变化时，系统会通过此回调通知应用当前的认证结果和认证可信等级。
   *
   * @param { boolean } isAuthPassed - 认证是否通过。true表示伴随设备认证通过，用户身份已确认；false表示认证未通过，用户身份未确认或认证已失效。
   * @param { UserAuth.AuthTrustLevel } [authTrustLevel] - 伴随设备当前能达到的最高认证可信等级。值为ATL1（10000）、ATL2（20000）、ATL3（30000）或ATL4
   *     （40000），等级越高表示认证安全性越强。
   *     <br>**说明**：
   *     <br>仅当isAuthPassed为true时提供此参数；不提供时默认为undefined。
   *     <br>典型操作需要的身份认证可信等级，具体请参见
   *     [认证可信等级划分原则](docroot://security/UserAuthenticationKit/user-authentication-overview.md#生物认证可信等级划分原则)。
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type ContinuousAuthStatusCallback = (isAuthPassed: boolean, authTrustLevel?: UserAuth.AuthTrustLevel) => void;

  /**
   * 回调函数，用于接收可添加的设备列表变化通知。当可添加的伴随设备列表发生变化（如新设备上线、设备离线等）时，系统会通过此回调通知应用。
   *
   * @param { DeviceStatus[] } deviceStatusList - 设备状态列表。包含当前可添加为伴随设备的所有设备状态信息。应用可根据isOnline字段筛选在线设备，根据
   *     supportedBusinessIds字段判断设备支持的业务范围。
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type AvailableDeviceStatusCallback = (deviceStatusList: DeviceStatus[]) => void;

  /**
   * 持续认证参数。用于配置订阅持续认证状态时的相关参数，如指定订阅的目标模板。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface ContinuousAuthParam {
    /**
     * 模板ID。用于指定订阅的目标模板。若不指定此参数，默认订阅当前用户下全部模板的持续认证状态。指定具体模板ID时，仅订阅该模板的认证状态变化。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    templateId?: Uint8Array;
    }

  /**
     * 状态监听器对象。用于监听或获取模板状态、持续认证状态、可添加设备状态等信息。通过[getStatusMonitor]{@link companionDeviceAuth.getStatusMonitor}获取此对象。
     *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface StatusMonitor {
    /**
     * 获取伴随设备模板状态。用于查询当前用户下所有已注册的伴随设备认证模板的状态信息，包括模板有效性、支持的业务范围、关联设备状态等。使用Promise异步回调。
     * 
     * 数据来源：返回系统服务（UserIAM）维护的模板状态内存快照，非实时跨设备查询。
     * 
     * 与onTemplateChange的区别：getTemplateStatus用于一次性获取当前模板状态快照，适合主动查询；onTemplateChange用于持续订阅模板状态变化，适合实时响应。仅需获取一次状态时使用
     * getTemplateStatus，需要持续监听变化时使用onTemplateChange。
     *
     * @permission ohos.permission.USE_USER_IDM
     * @returns { Promise<TemplateStatus[]> } Promise对象，成功时返回当前用户下全部模板的状态列表，每个模板状态包含模板ID、有效性、设备信息等；失败时抛出相应错误码。
     * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getTemplateStatus(): Promise<TemplateStatus[]>;

    /**
     * 订阅模板的状态变化。使用callback异步回调。
     * 
     * 触发时机：模板状态变化时触发，包括启用业务ID变更、有效性变更、关联设备上下线/状态变更、模板加入或移除IDM等。订阅时立即推送一次当前状态快照；状态未变化时不重复通知。
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { TemplateStatusCallback } callback - 回调函数。当模板状态发生变化（如添加、删除、有效性变更等）时触发，回调参数为模板状态列表。
     * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onTemplateChange(callback: TemplateStatusCallback): void;

    /**
     * 取消订阅模板的状态变化。
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { TemplateStatusCallback } [callback] - 回调函数，指定该参数时，仅取消指定的这一个回调；省略该参数时，取消全部已注册的回调。
     * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offTemplateChange(callback?: TemplateStatusCallback): void;

    /**
     * 订阅可添加的伴随设备状态变化。使用callback异步回调。
     * 
     * 触发机制：当可添加的伴随设备列表发生变化（如新设备上线、设备离线、设备绑定关系变化等）时触发回调。订阅时立即推送一次当前列表。
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { AvailableDeviceStatusCallback } callback - 处理可用设备状态变化的回调函数。当可添加设备列表变化（如新设备上线、设备离线等）时触发，回调参数为设备状态列表。
     * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onAvailableDeviceChange(callback: AvailableDeviceStatusCallback): void;

    /**
     * 取消订阅可添加的伴随设备状态变化。callback参数用于指定要取消的回调函数，不传入则取消全部已注册的回调。
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { AvailableDeviceStatusCallback } [callback] - 此前通过onAvailableDeviceChange注册的回调函数。指定该参数时，仅取消指定的这一个回调；省略该参数
     *     时，取消全部已注册的回调。
     * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offAvailableDeviceChange(callback?: AvailableDeviceStatusCallback): void;

    /**
     * 订阅伴随设备的持续认证状态。使用callback异步回调。
     * 
     * 持续认证：持续认证状态指伴随设备是否持有有效认证令牌。当令牌签发（认证通过）、令牌超时、关联设备离线或令牌被吊销时状态发生变化并触发回调。authTrustLevel为当前有效令牌中的最高认证可信等级。仅当认证可信等级变化时通
     * 知；订阅时立即推送一次当前状态。
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { ContinuousAuthParam } param - 用于指定订阅参数，可通过templateId字段指定目标模板。
     * @param { ContinuousAuthStatusCallback } callback - 回调函数。当持续认证状态变化时触发，回调参数为认证结果（isAuthPassed）和认证可信等级（
     *     authTrustLevel）。
     * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
     * @throws { BusinessError } 32600002 - The template is not found.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onContinuousAuthChange(param: ContinuousAuthParam, callback: ContinuousAuthStatusCallback): void;

    /**
     * 取消订阅伴随设备的持续认证状态变化事件。取消后，应用将不再接收持续认证状态变化通知。callback参数用于指定要取消的回调函数，不传入则取消全部已注册的回调。
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { ContinuousAuthStatusCallback } [callback] - 此前通过onContinuousAuthChange注册的回调函数。指定该参数时，仅取消指定的这一个回调；省略该参数时，
     *     取消全部已注册的回调。
     * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offContinuousAuthChange(callback?: ContinuousAuthStatusCallback): void;
    }

  /**
   * 获取状态监听器。用于获取指定用户的状态监听器对象，通过该对象可查询和订阅伴随设备的模板状态、持续认证状态、可添加设备状态等信息。
   * 
   * 生命周期：订阅在系统服务侧按用户维护。使用完毕应调用对应的off方法取消订阅以释放资源；应用进程退出时已注册的订阅会自动清理。
   *
   * @permission ohos.permission.USE_USER_IDM
   * @param { int } localUserId - 本地用户ID。主设备上的用户标识，为非负整数，用于获取该用户对应的伴随设备状态监听器。传入不存在的用户ID时抛出异常，错误码为32600002。
   * @returns { StatusMonitor } 状态监听器对象。可用于查询模板状态（
   *     [getTemplateStatus]{@link companionDeviceAuth.StatusMonitor.getTemplateStatus}）、订阅模板变化（
   *     [onTemplateChange]{@link companionDeviceAuth.StatusMonitor.onTemplateChange(callback: TemplateStatusCallback)}）
   *     、订阅可添加设备变化（
   *     [onAvailableDeviceChange]{@link companionDeviceAuth.StatusMonitor.onAvailableDeviceChange(callback: AvailableDeviceStatusCallback)}
   *     ）、订阅持续认证状态（
   *     [onContinuousAuthChange]{@link companionDeviceAuth.StatusMonitor.onContinuousAuthChange(param: ContinuousAuthParam, callback: ContinuousAuthStatusCallback)}
   *     ）等操作。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
   * @throws { BusinessError } 32600002 - The local user is not found.
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function getStatusMonitor(localUserId: int): StatusMonitor;

  /**
   * 伴随设备选择回调的返回结果。用于在设备选择回调中返回用户选择的设备信息和扩展上下文。
   *
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface DeviceSelectResult {
    /**
         * 设备信息列表。包含用户选择的设备业务标识信息，每个DeviceKey包含设备ID类型、设备ID和设备用户ID。系统会根据这些信息执行后续的添加模板或认证操作。
         *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceKeys: DeviceKey[];

    /**
     * 设备选择上下文。携带JSON格式的扩展信息（具体字段由业务方自行定义），可用于传递设备选择过程中的额外参数。不提供此字段时默认为空，不携带扩展信息。
     *
     * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    selectionContext?: Uint8Array;
    }

  /**
   * 伴随设备选择回调函数类型。当系统需要用户选择伴随设备时（如添加模板或执行认证），会调用此回调，应用需返回用户选择的设备信息。
   *
   * @param { int } selectPurpose - 选择目的。用于标识当前设备选择的意图，取值参见[SelectPurpose]{@link companionDeviceAuth.SelectPurpose}。
   *     SELECT_ADD_DEVICE(1)表示选择添加模板的设备，SELECT_AUTH_DEVICE(2)表示选择认证设备。厂商可自定义扩展值（大于等于10000）。应用应根据selectPurpose返回包含对应设备信息
   *     的DeviceSelectResult。
   * @returns { DeviceSelectResult } 用于向系统返回用户选择的设备信息，以便系统执行后续的添加模板或认证操作。包含用户选择的设备信息列表（deviceKeys）和可选的扩展上下文（
   *     selectionContext）。
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type DeviceSelectCallback = (selectPurpose: int) => DeviceSelectResult;

  /**
   * 注册伴随设备选择回调。当系统需要用户选择伴随设备时，会调用此回调，应用需在回调中返回用户选择的设备信息。通过此回调，应用可以实现自定义的设备选择逻辑，如弹出设备选择界面让用户选择。
   *
   * @permission ohos.permission.USE_USER_IDM
   * @param { DeviceSelectCallback } callback - 伴随设备选择回调函数。系统调用时会传入选择目的（selectPurpose），应用需根据selectPurpose返回包含对应设备信息的
   *     DeviceSelectResult。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function registerDeviceSelectCallback(callback: DeviceSelectCallback): void;

  /**
   * 取消注册伴随设备选择回调。取消后，系统将不再调用应用注册的设备选择回调，设备选择将回退到系统默认行为。
   *
   * @permission ohos.permission.USE_USER_IDM
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function unregisterDeviceSelectCallback(): void;

  /**
   * 更新指定伴随设备模板支持的业务范围。用于修改已注册模板的启用业务ID列表，从而控制该模板可参与的业务场景。使用Promise异步回调。
   * 
   * 生效机制：更新立即生效，下一次认证按新的业务范围判断，无需重启应用或重新认证。
   *
   * @permission ohos.permission.USE_USER_IDM
   * @param { Uint8Array } templateId - 目标模板ID。要更新业务范围的模板的唯一标识，可通过
   *     [getTemplateStatus]{@link companionDeviceAuth.StatusMonitor.getTemplateStatus}获取。
   * @param { int[] } enabledBusinessIds - 模板支持的业务ID集合。要启用的业务场景列表，如[BusinessId.DEFAULT]。不同业务ID对应不同的认证场景，应用可根据业务需求配置（厂商自定
   *     义业务ID需 ≥ 10000）。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 32600001 - The system service is not working properly. Please try again later.
   * @throws { BusinessError } 32600002 - The template is not found.
   * @throws { BusinessError } 32600003 - The business ID is invalid.
   * @syscap SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function updateEnabledBusinessIds(templateId: Uint8Array, enabledBusinessIds: int[]): Promise<void>;
}

export default companionDeviceAuth;