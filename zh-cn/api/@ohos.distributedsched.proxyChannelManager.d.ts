/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @file
 * @kit DistributedServiceKit
 */

import { Callback } from './@ohos.base';
/**
 * # 使用说明
 *
 * 调用模块接口前，需要完成如下配置。
 *
 * 1. 需要申请ohos.permission.ACCESS_BLUETOOTH权限。如何配置和申请权限，具体操作请参考
 *    [声明权限](docroot://security/AccessToken/declare-permissions.md)和
 *    [向用户申请授权](docroot://security/AccessToken/request-user-authorization.md)。
 * 2. 对于需要代理拉起的应用进程，需要在module.json5文件中配置action字段: "action.ohos.pull.listener"。
 */
/**
 * 软总线具备常驻运行能力，可为跨设备通信提供稳定可靠的底层通道。本模块基于软总线进程开发，支持手机与穿戴设备间高效的数据互通，
 * 可为用户提供无缝的设备互联体验。使用场景：手机侧APP与手表侧APP协同时，当手机APP不在前台被使用，手机应
 * 用的下行消息经由通知服务器，通过代理模块发送给手表侧。模块核心功能包括：代理通道管理、数据路由管理、 应用状态感知和唤醒、
 * 链路状态监听。
 *
 * - 代理通道管理：通过蓝牙 BR 协议建立手机与穿戴设备的双向数据通道，支持的数据通道 ID 范围是[1,2147483647] 。
 * - 数据路由管理：基于 UUID 服务识别机制，精准转发穿戴设备数据。
 * - 应用状态感知和唤醒：代理通道使能后，收到穿戴设备发送的数据后，动态分析和唤醒手机端对应应用进程。
 * - 全链路状态监控：通过回调实时感知通道连接状态。
 *
 * @syscap SystemCapability.DistributedSched.AppCollaboration
 * @stagemodelonly
 * @since 20 dynamic
 * @since 23 static
 */
declare namespace proxyChannelManager {
  /**
   * 打开代理通道，使用Promise异步回调返回结果。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { ChannelInfo } channelInfo - 对端设备及服务的MAC和UUID信息。
   * @returns { Promise<int> } 返回代理通道的channelId，取值范围为1~2147483647。channelId的生命周期和代理通道生命周期相同，
   *     不关闭代理时，传入相同入参将返回相同channelId。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because bluetooth proxy function has
   *     been trimmed. [since 26.0.0]
   * @throws { BusinessError } 32390001 - BR is disabled.
   * @throws { BusinessError } 32390002 - Device not paired.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @throws { BusinessError } 32390102 - Operation failed or Connection timed out.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function openProxyChannel(channelInfo: ChannelInfo): Promise<int>;

  /**
   * 关闭已打开的代理通道。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { int } channelId - 打开代理通道时获取的channelId。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because bluetooth proxy function has
   *     been trimmed. [since 26.0.0]
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function closeProxyChannel(channelId: int): void;

  /**
   * 向对端发送数据，使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { int } channelId - 打开代理通道时获取的channelId。
   * @param { ArrayBuffer } data - 向对端发送的字节消息，长度最大为4096个字节。
   * @returns { Promise<void> } 无返回值的Promise的对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.[since 26]
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @throws { BusinessError } 32390103 - Data too long.
   * @throws { BusinessError } 32390104 - Send failed.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function sendData(channelId: int, data: ArrayBuffer): Promise<void>;

  /**
   * 订阅数据接收事件，使用异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'receiveData' } type - 设置订阅类型，固定取值为'receiveData'。
   * @param { number } channelId - 打开代理通道时获取的channelId。
   * @param { Callback<DataInfo> } callback - 回调函数，返回接收到的数据。多次注册回调函数，最后一次注册的回调函数生效。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   */
  function on(type: 'receiveData', channelId: number, callback: Callback<DataInfo>): void;

  /**
   * 取消订阅数据接收事件，停止接收数据。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'receiveData' } type - 设置订阅类型，固定取值为'receiveData'。
   * @param { number } channelId - 打开代理通道时获取的channelId。
   * @param { Callback<DataInfo> } [callback] - 注册的回调函数。如果为空、undefined、null，则取消订阅所有的数据接收事件。
   *     如果不为空，传入最后一次注册的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   */
  function off(type: 'receiveData', channelId: number, callback?: Callback<DataInfo>): void;

  /**
   * 订阅数据接收事件，使用异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { int } channelId - 打开代理通道时获取的channelId。
   * @param { Callback<DataInfo> } callback - 回调函数，返回接收到的数据。多次注册回调函数，最后一次注册的回调函数生效。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function onReceiveData(channelId: int, callback: Callback<DataInfo>): void;

  /**
   * 取消订阅数据接收事件，停止接收数据。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { int } channelId - 打开代理通道时获取的channelId。
   * @param { Callback<DataInfo> } [callback] - 注册的回调函数。如果为空、undefined、null，则取消订阅所有的数据接收事件。
   *     如果不为空，传入最后一次注册的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function offReceiveData(channelId: int, callback?: Callback<DataInfo>): void;

  /**
   * 订阅通道状态事件，使用callback进行异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'channelStateChange' } type - 设置订阅类型，固定取值为'channelStateChange'。
   * @param { number } channelId - 打开代理通道时获取的channelId。
   * @param { Callback<ChannelStateInfo> } callback - 回调函数，返回接收到的通道状态。多次注册callback，
   *     最后一次注册的callback生效
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   */
  function on(type: 'channelStateChange', channelId: number, callback: Callback<ChannelStateInfo>): void;

  /**
   * 取消订阅通道状态事件。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'channelStateChange' } type - 设置订阅类型为'channelStateChange'。
   * @param { number } channelId - 打开代理通道时获取的channelId。
   * @param { Callback<ChannelStateInfo> } [callback] - 注册的回调函数。如果为空、undefined、null，
   *     则取消订阅所有的数据接收事件。如果不为空，传入最后一次注册的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   */
  function off(type: 'channelStateChange', channelId: number, callback?: Callback<ChannelStateInfo>): void;

  /**
   * 订阅通道状态事件，使用callback进行异步回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { int } channelId - 打开代理通道时获取的channelId。
   * @param { Callback<ChannelStateInfo> } callback - 回调函数，返回接收到的通道状态。多次注册callback，
   *     最后一次注册的callback生效
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function onChannelStateChange(channelId: int, callback: Callback<ChannelStateInfo>): void;

  /**
   * 取消订阅通道状态事件。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { int } channelId - 打开代理通道时获取的channelId。
   * @param { Callback<ChannelStateInfo> } [callback] - 注册的回调函数。如果为空、undefined、null，
   *     则取消订阅所有的数据接收事件。如果不为空，传入最后一次注册的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 32390004 - ChannelId is invalid or unavailable.
   * @throws { BusinessError } 32390006 - Parameter error.
   * @throws { BusinessError } 32390100 - Internal error.
   * @throws { BusinessError } 32390101 - Call is restricted.
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 23 static
   */
  function offChannelStateChange(channelId: int, callback?: Callback<ChannelStateInfo>): void;

  /**
   * 存放接收的数据信息，包括通道Id和数据。
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface DataInfo {
    /**
     * 代理通道的channelId。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    channelId: int;

    /**
     * 接收到的字节数据。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    data: ArrayBuffer;
  }

  /**
   * 链路类型。
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  enum LinkType {
    /**
     * 蓝牙。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    LINK_BR = 0
  }

  /**
   * 打开代理通道函数的入参，包括对端设备的MAC地址和监听服务的UUID。
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface ChannelInfo {
    /**
     * 代理通道的链路类型。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    linkType: LinkType;

    /**
     * 对端设备的MAC地址。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    peerDevAddr: string;

    /**
     * 对端监听的服务的UUID。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    peerUuid: string;
  }

  /**
   * 通道状态发生变化时，代理通道上报的通道连接状态。
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  enum ChannelState {
    /**
     * 连接已断开，通道不可用。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    CHANNEL_WAIT_RESUME = 0,

    /**
     * 连接已恢复，通道可用。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    CHANNEL_RESUME = 1,

    /**
     * 其他软件错误导致通道不可用。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    CHANNEL_EXCEPTION_SOFTWARE_FAILED = 2,

    /**
     * 蓝牙配对关系被删除，通道不可用。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    CHANNEL_BR_NO_PAIRED = 3
  }

  /**
   * 当代理通道状态变化时，用于表示代理通道的连接状态。
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface ChannelStateInfo {
    /**
     * 代理通道的channelId。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    channelId: int;

    /**
     * 通道的连接状态。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    state: ChannelState;
  }
}
export default proxyChannelManager;