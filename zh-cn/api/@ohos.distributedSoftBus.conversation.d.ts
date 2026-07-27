/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
  * @file
  * @kit DistributedServiceKit
 */

/**
 * 分布式软总线conversation模块为应用提供跨设备交互能力，包括获取可信设备列表、发送和接收会话数据。通过本模块，
 * 应用可以获取同一账号下的可信设备，注册监听器以接收跨设备数据，并通过会话通道向指定设备发送数据。适用于需要跨设备协作和
 * 多设备数据传递的场景，可降低跨设备交互的开发复杂度。
 *
 * > **说明：**
 * >
 * > 本模块接口为系统接口，仅可在Stage模型下使用。
 *
 * @syscap SystemCapability.Communication.SoftBus.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */
declare namespace conversation {

  /**
   * 设备节点信息，包括networkId、设备名称、设备类型标识符、近场状态和UDID。
   *
   * @syscap SystemCapability.Communication.SoftBus.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  interface DeviceNodeInfo {
    /**
     * 设备的networkId，在分布式网络中唯一标识一台设备，用于发送数据时的设备寻址。与UDID互为替代，发送数据时可任选其一。
     *
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    networkId: string;

    /**
     * 设备名称。
     *
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    deviceName: string;

    /**
     * 设备类型标识符，表示设备的类别，取值为整数，例如：0x0E-手机，0x11-平板，0x9C-电视，0x0C-PC等（具体数值以系统定义为准）。
     *
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    deviceTypeId: int;

    /**
     * 设备是否在近场。true表示设备在近场，false表示设备不在近场。
     *
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    nearby: boolean;

    /**
     * 设备的UDID，唯一标识一台设备，用于发送数据时的设备寻址。与networkId不同，UDID为设备的永久唯一标识，
     * 不随网络拓扑变化而改变，两者互为替代，发送数据时可任选其一。
     *
     * @syscap SystemCapability.Communication.SoftBus.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    udid: string;
  }

  /**
   * 数据接收回调函数类型。
   *
   * @param { string } deviceId - 发送数据的源设备的networkId或UDID。
   * @param { ArrayBuffer } msg - 接收到的数据内容，为ArrayBuffer格式的二进制数据，数据格式与发送端发送的数据格式一致，
   *     由应用层协议定义。
   * @returns { void } Returns void.
   * @syscap SystemCapability.Communication.SoftBus.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  type DataCallback = (deviceId: string, msg: ArrayBuffer) => void;

  /**
   * 获取历史可信设备列表。典型使用场景包括：跨设备数据发送前查询可用目标设备。
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.sec.ACCESS_UDID
   * @returns { DeviceNodeInfo[] } 获取到的设备信息列表。
   * @throws { BusinessError } 201 - Permission denied. The application does not have the required permission to
   *     access distributed data.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2000001 - Internal error.
   * @syscap SystemCapability.Communication.SoftBus.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function getTrustedDevices(): DeviceNodeInfo[];

  /**
   * 向目标设备发送会话数据。目标设备须为同一账号下的可信设备。以目标设备的networkId或UDID进行设备寻址，数据发送至目标设备上
   * 与指定Bundle名和Ability名匹配的已注册监听应用。典型使用场景包括：跨设备协同指令发送。
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.sec.ACCESS_UDID
   * @param { string } deviceId - 目标设备的networkId或UDID。可通过调用
   *     [getTrustedDevices()]{@link conversation.getTrustedDevices}获取。networkId、UDID的长度都应为64字节。
   *     传入无效值时返回错误码401。
   * @param { string } bundleName - 数据发送目标Bundle名，Bundle名长度范围为1-127字节，需与目标设备上通过
   *     [registerConversationListener]{@link conversation.registerConversationListener}注册会话监听的应用Bundle名一致。
   *     不满足此要求时，数据将无法送达目标应用。传入无效或空值时返回错误码401。
   * @param { string } abilityName - 数据发送目标Ability名，Ability名长度范围为1-127字节，需与目标设备上已注册会话监听的
   *     Ability名一致。不满足此要求时，数据将无法送达目标应用。传入无效或空值时返回错误码401。
   * @param { ArrayBuffer } msg - 要发送的数据内容，一次调用最大支持发送10240字节。数据结构由应用层协议定义。传入空数据或
   *     无效数据时返回错误码401。
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied. The application does not have the required permission to
   *     access distributed data.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Invalid parameter. The deviceId, bundleName, abilityName or msg is invalid
   *     or empty.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2000001 - Internal error.
   * @throws { BusinessError } 2004001 - Remote not support.
   * @throws { BusinessError } 2004002 - Duplicate calls, previous call still in progress.
   * @throws { BusinessError } 2004003 - Send data failed.
   * @throws { BusinessError } 2004004 - Wait remote ack timeout.
   * @syscap SystemCapability.Communication.SoftBus.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function postConversationData(
    deviceId: string,
    bundleName: string,
    abilityName: string,
    msg: ArrayBuffer
): Promise<void>;

  /**
   * 注册会话监听，接收来自同一账号下可信设备的数据。当远端设备通过
   * [postConversationData]{@link conversation.postConversationData}发送数据到达本地设备后，
   * 数据分发至与Bundle名和Ability名匹配的已注册回调函数。同一Bundle名和Ability名只能注册一个监听器，重复注册将覆盖
   * 之前已注册的监听器。
   *
   * **配对调用**：需与注销监听器[unregisterConversationListener]{@link conversation.unregisterConversationListener}配对
   * 使用，不再需要接收消息时应调用注销监听器以释放资源，未注销会导致资源持续占用。
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.sec.ACCESS_UDID
   * @param { string } bundleName - 接收数据的Bundle名，Bundle名长度范围为1-127字节，需与本应用的Bundle名一致。
   *     不满足此要求时，监听器无法正确接收数据。传入无效或空值时返回错误码401。
   * @param { string } abilityName - 接收数据的Ability名，Ability名长度范围为1-127字节，需与本应用中的Ability名一致。
   *     不满足此要求时，监听器无法正确接收数据。传入无效或空值时返回错误码401。
   * @param { DataCallback } dataCallback - 收到数据时的回调函数，用于接收跨设备数据。传入无效值时返回错误码401。
   * @throws { BusinessError } 201 - Permission denied. The application does not have the required permission to
   *     access distributed data.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Invalid parameter. The bundleName, abilityName or dataCallback is
   *     invalid or empty.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2000001 - Internal error.
   * @syscap SystemCapability.Communication.SoftBus.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function registerConversationListener(
    bundleName: string,
    abilityName: string,
    dataCallback: DataCallback,
  ): void;

  /**
   * 注销指定Bundle名和Ability名的会话监听。需与注册监听器
   * [registerConversationListener]{@link conversation.registerConversationListener}配对使用，用于注销已注册的会话监听器。
   * 在不再需要接收消息时应调用注销监听器以释放资源，未注销会导致资源持续占用。同一Bundle名和Ability名只能注册一个监听器，
   * 重复注册会覆盖之前的监听器，注销后将移除当前生效的监听器。调用此接口后，应用将不再接收对应Bundle名和Ability名的会话数据。
   * 如果之前未注册过指定Bundle名和Ability名的监听器，此接口同样返回成功。
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.sec.ACCESS_UDID
   * @param { string } bundleName - 要取消监听的Bundle名，Bundle名长度范围为1-127字节，需与注册监听时使用的Bundle名一致。
   *     传入无效或空值时返回错误码401。
   * @param { string } abilityName - 要取消监听的Ability名，Ability名长度范围为1-127字节，需与注册监听时使用的Ability名一致。
   *     传入无效或空值时返回错误码401。
   * @throws { BusinessError } 201 - Permission denied. The application does not have the required permission to
   *     access distributed data.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Invalid parameter. The bundleName or abilityName is invalid or empty.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2000001 - Internal error.
   * @syscap SystemCapability.Communication.SoftBus.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function unregisterConversationListener(bundleName: string, abilityName: string): void;
}

export default conversation;