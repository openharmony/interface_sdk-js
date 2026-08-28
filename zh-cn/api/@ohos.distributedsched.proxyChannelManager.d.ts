/*
 * Copyright (c) 2025-2026 Huawei Device Co., Ltd.
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
 * ###### 使用说明
 *
 * 调用模块接口前，需要完成如下配置：
 *
 * 1. 申请ohos.permission.ACCESS_BLUETOOTH权限。如何配置和申请权限，具体操作请参考[声明权限](docroot://security/AccessToken/declare-permissions.md)和[向用户申请授权](docroot://security/AccessToken/request-user-authorization.md)。
 * 2. 在module.json5文件中配置action字段"action.ohos.pull.listener"，用于需要被代理拉起的手机侧应用进程。
 *
 * 典型调用流程：
 *
 * 1. 调用openProxyChannel打开代理通道，获取channelId。
 * 2. 调用sendData发送数据，并根据业务需求订阅事件：调用on('receiveData')接收对端数据，调用on('channelStateChange')感知通道连接状态变化（断连、恢复等）。两者可同时订阅，建议在数据传输场景中同时使用，以便通道异常时及时暂停发送并处理断连恢复逻辑。
 * 3. 使用完毕后，调用off('receiveData')/off('channelStateChange')取消订阅。
 * 4. 调用closeProxyChannel关闭代理通道释放资源。
 *
 * @file 代理通道管理
 * @kit DistributedServiceKit
 */

import { Callback } from './@ohos.base';
/**
 * 软总线具备常驻运行能力，可为跨设备通信提供稳定可靠的底层通道。本模块基于软总线进程开发，支持手机与穿戴设备间的数据互通，可为用户提供无缝的设备互联体验，同时降低开发者跨设备通信的实现复杂度，无需自行处理底层通信协议和进程唤醒逻辑。使用
 * 场景：手机侧应用与穿戴设备侧应用协同时，当手机侧应用不在前台时，手机侧应用的下行消息经由通知服务器，通过代理模块发送给穿戴设备侧；当穿戴设备向手机发送数据时，代理模块可动态唤醒手机侧对应应用进程以接收和处理数据。模块核心功能包括：代理
 * 通道管理、数据路由管理、应用状态感知和唤醒、全链路状态监控。
 *
 * - 代理通道管理：通过蓝牙 BR 协议建立手机与穿戴设备的双向数据通道，确保跨设备间可靠的双向数据通信，无需开发者自行实现底层通信协议。支持的数据通道ID范围是1~2147483647。
 * - 数据路由管理：基于 UUID 服务识别机制转发穿戴设备侧应用数据，实现数据的精准路由至目标服务端口，避免数据丢失或错发。UUID用于唯一标识对端设备上监听的服务，代理模块根据对端设备的UUID将数据路由至对应服务端口。
 * - 应用状态感知和唤醒：代理通道使能并收到穿戴设备侧应用数据后，代理模块根据module.json5中配置的action字段（如'action.ohos.pull.listener'）识别目标应用，并代理拉起对应手机侧应用进程以处理数
 * 据，无需应用常驻前台即可接收数据，节省系统资源。
 * - 全链路状态监控：通过回调实时感知代理通道全生命周期的连接状态变化，帮助手机侧应用及时响应连接异常并调整业务策略，提升数据传输可靠性。包括连接恢复、异常断连、配对关系删除等事件。
 *
 * @syscap SystemCapability.DistributedSched.AppCollaboration
 * @stagemodelonly
 * @since 20 dynamic
 * @since 23 static
 */
declare namespace proxyChannelManager {
  /**
   * 打开代理通道，使用Promise异步回调。基于ChannelInfo中配置的链路类型和对端设备信息，通过蓝牙BR协议与对端设备协商建立双向数据通道，并返回唯一标识该通道的channelId。适用于手机侧应用需要与穿戴设备侧应用建立
   * 双向数据通道的场景，例如消息通知转发等。调用此方法后，必须在不再使用代理通道时调用[closeProxyChannel]{@link proxyChannelManager.closeProxyChannel}关闭通道以释放资源。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { ChannelInfo } channelInfo - 代理通道的链路类型及对端设备的MAC地址和对端监听服务的UUID信息。
   * @returns { Promise<int> } 打开代理通道成功时resolve，返回代理通道的channelId，取值范围为1~2147483647，channelId的生命周期和代理通道生命周期相同，不关闭代理时，传入相同
   *     入参将返回相同channelId；失败时reject返回错误信息，错误码详见错误码表。
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
   * 关闭已打开的代理通道。适用于手机侧应用不再需要与穿戴设备侧应用通信的场景，例如完成数据同步任务后主动释放通道资源等。此方法必须与
   * [openProxyChannel]{@link proxyChannelManager.openProxyChannel}配对使用，在使用完毕后调用此方法关闭通道以释放资源。关闭通道后，已注册的receiveData和
   * channelStateChange回调将自动取消订阅，正在传输的数据将中断。未及时关闭代理通道可能导致通道资源泄漏。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { int } channelId - 打开代理通道时获取的channelId，取值范围为1~2147483647。使用无效或已关闭的channelId将返回错误码32390004，超出取值范围时返回错误码32390
   *     006。channelId仅在代理通道可用时生效，通道关闭或断连后将不可用。
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
   * 向对端发送数据，使用Promise异步回调。适用于手机侧应用通过代理通道向穿戴设备侧应用发送指令或数据的场景，例如发送配置更新、通知消息等。必须在
   * [openProxyChannel]{@link proxyChannelManager.openProxyChannel}成功打开代理通道后才能调用此方法发送数据。当代理通道处于不可用状态（如
   * [ChannelState]{@link proxyChannelManager.ChannelState}.CHANNEL_WAIT_RESUME、CHANNEL_EXCEPTION_SOFTWARE_FAILED、
   * CHANNEL_BR_NO_PAIRED）时，调用此方法将失败，建议订阅
   * [on('channelStateChange')]{@link proxyChannelManager.on(type: 'channelStateChange', channelId: number, callback: Callback<ChannelStateInfo>)}
   * 事件监测通道状态，在通道不可用时暂停数据发送，通道恢复后继续发送。数据通过已建立的代理通道经蓝牙BR链路传输至对端设备，数据长度最大为4096字节，超出将返回错误码32390103。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { int } channelId - 打开代理通道时获取的channelId，取值范围为1~2147483647。使用无效或已关闭的channelId将返回错误码32390004，超出取值范围时返回错误码32390
   *     006。channelId仅在代理通道可用时生效，通道关闭或断连后将不可用。
   * @param { ArrayBuffer } data - 向对端发送的二进制数据，数据格式由应用层自定义，最大长度为4096字节。超出长度限制时返回错误码32390103。
   * @returns { Promise<void> } 无返回值的Promise的对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because bluetooth proxy function has
   *     been trimmed. [since 26.0.0]
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
   * 订阅数据接收事件，使用Callback异步回调。适用于手机侧应用需要持续接收穿戴设备侧应用上报数据的场景，例如接收穿戴设备侧应用数据等。代理模块基于openProxyChannel时配置的对端UUID接收对端数据，将接收到的穿戴设
   * 备侧应用数据通过回调传递给订阅者。必须在[openProxyChannel]{@link proxyChannelManager.openProxyChannel}成功打开代理通道后才能订阅数据接收事件。若需代理唤醒手机侧应用进程
   * 以接收和处理对端数据，使用前请在module.json5中配置action字段"action.ohos.pull.listener"。订阅后需调用
   * [off('receiveData')]{@link proxyChannelManager.off(type: 'receiveData', channelId: number, callback?: Callback<DataInfo>)}
   * 取消订阅，避免回调持续触发。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'receiveData' } type - 设置订阅类型，固定取值为'receiveData'。
   * @param { number } channelId - 打开代理通道时获取的channelId，取值范围为1~2147483647。使用无效或已关闭的channelId将返回错误码32390004，超出取值范围时返回错误码32
   *     390006。channelId仅在代理通道可用时生效，通道关闭或断连后将不可用。
   * @param { Callback<DataInfo> } callback - 回调函数，用于接收代理通道的数据。回调参数为[DataInfo]{@link proxyChannelManager.DataInfo}对象，包含
   *     channelId（通道ID）和data（接收到的字节数据）。需先通过openProxyChannel打开代理通道后才能接收数据。多次注册时，仅最后一次注册的生效。
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
   * 取消订阅数据接收事件，不再通过回调接收数据。适用于手机侧应用不再需要接收穿戴设备侧应用数据的场景，例如用户切换到其他功能模块等。必须在
   * [openProxyChannel]{@link proxyChannelManager.openProxyChannel}成功打开代理通道后才能取消订阅。此方法必须与
   * [on('receiveData')]{@link proxyChannelManager.on(type: 'receiveData', channelId: number, callback: Callback<DataInfo>)}
   * 配对使用，用于取消之前通过on('receiveData')注册的数据接收回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'receiveData' } type - 设置订阅类型，固定取值为'receiveData'。
   * @param { number } channelId - 打开代理通道时获取的channelId，取值范围为1~2147483647。使用无效或已关闭的channelId将返回错误码32390004，超出取值范围时返回错误码32
   *     390006。channelId仅在代理通道可用时生效，通道关闭或断连后将不可用。
   * @param { Callback<DataInfo> } [callback] - 注册的回调函数。默认效果：不传入此参数时取消订阅所有的数据接收事件。需传入on方法最后一次注册的回调函数，用于取消该回调的订阅；传入其他回调函数
   *     不会生效。
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
   * 订阅数据接收事件，使用Callback异步回调。适用于手机侧应用需要持续接收穿戴设备侧应用上报数据的场景，例如接收穿戴设备侧应用数据等。代理模块基于openProxyChannel时配置的对端UUID接收对端数据，将接收到的穿戴设
   * 备侧应用数据通过回调传递给订阅者。必须在[openProxyChannel]{@link proxyChannelManager.openProxyChannel}成功打开代理通道后才能订阅数据接收事件。若需代理唤醒手机侧应用进程
   * 以接收和处理对端数据，使用前请在module.json5中配置action字段"action.ohos.pull.listener"。订阅后需调用
   * [off('receiveData')]{@link proxyChannelManager.off(type: 'receiveData', channelId: number, callback?: Callback<DataInfo>)}
   * 取消订阅，避免回调持续触发。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { int } channelId - 打开代理通道时获取的channelId，取值范围为1~2147483647。使用无效或已关闭的channelId将返回错误码32390004，超出取值范围时返回错误码32
   *     390006。channelId仅在代理通道可用时生效，通道关闭或断连后将不可用。
   * @param { Callback<DataInfo> } callback - 回调函数，用于接收代理通道的数据。回调参数为[DataInfo]{@link proxyChannelManager.DataInfo}对象，包含
   *     channelId（通道ID）和data（接收到的字节数据）。需先通过openProxyChannel打开代理通道后才能接收数据。多次注册时，仅最后一次注册的生效。
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
   * 取消订阅数据接收事件，不再通过回调接收数据。适用于手机侧应用不再需要接收穿戴设备侧应用数据的场景，例如用户切换到其他功能模块等。必须在
   * [openProxyChannel]{@link proxyChannelManager.openProxyChannel}成功打开代理通道后才能取消订阅。此方法必须与
   * [on('receiveData')]{@link proxyChannelManager.on(type: 'receiveData', channelId: number, callback: Callback<DataInfo>)}
   * 配对使用，用于取消之前通过on('receiveData')注册的数据接收回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { int } channelId - 打开代理通道时获取的channelId，取值范围为1~2147483647。使用无效或已关闭的channelId将返回错误码32390004，超出取值范围时返回错误码32
   *     390006。channelId仅在代理通道可用时生效，通道关闭或断连后将不可用。
   * @param { Callback<DataInfo> } [callback] - 注册的回调函数。默认效果：不传入此参数时取消订阅所有的数据接收事件。需传入on方法最后一次注册的回调函数，用于取消该回调的订阅；传入其他回调函数
   *     不会生效。
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
   * 订阅通道状态事件，使用Callback异步回调。适用于手机侧应用需要实时感知代理通道连接状态的场景，例如监测通道断开后暂停数据发送、通道恢复后自动重试业务等。代理模块实时监控蓝牙BR链路状态变化，当发生连接恢复、异常断连、配对关系
   * 删除等事件时通过回调上报ChannelStateInfo。必须在[openProxyChannel]{@link proxyChannelManager.openProxyChannel}成功打开代理通道后才能订阅通道状态事件。订
   * 阅后需调用
   * [off('channelStateChange')]{@link proxyChannelManager.off(type: 'channelStateChange', channelId: number, callback?: Callback<ChannelStateInfo>)}
   * 取消订阅，避免回调持续触发。调用[closeProxyChannel]{@link proxyChannelManager.closeProxyChannel}关闭通道后，已注册的channelStateChange回调将自动取消
   * 订阅。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'channelStateChange' } type - 设置订阅类型，固定取值为'channelStateChange'。
   * @param { number } channelId - 打开代理通道时获取的channelId，取值范围为1~2147483647。使用无效或已关闭的channelId将返回错误码32390004，超出取值范围时返回错误码32
   *     390006。channelId仅在代理通道可用时生效，通道关闭或断连后将不可用。
   * @param { Callback<ChannelStateInfo> } callback - 回调函数，用于接收代理通道的状态变更信息。回调参数为
   *     [ChannelStateInfo]{@link proxyChannelManager.ChannelStateInfo}对象，包含channelId（通道ID）和state（通道连接状态）。需先通过
   *     openProxyChannel打开代理通道后才能接收通道状态。多次注册时，仅最后一次注册的回调函数生效。
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
   * 取消订阅通道状态事件。适用于手机侧应用不再需要监听代理通道连接状态变化的场景，例如用户退出相关业务页面、完成数据传输流程后等。必须在
   * [openProxyChannel]{@link proxyChannelManager.openProxyChannel}成功打开代理通道后才能取消订阅。此方法必须与
   * [on('channelStateChange')]{@link proxyChannelManager.on(type: 'channelStateChange', channelId: number, callback: Callback<ChannelStateInfo>)}
   * 配对使用，用于取消之前通过on('channelStateChange')注册的通道状态回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { 'channelStateChange' } type - 设置订阅类型，固定取值为'channelStateChange'。
   * @param { number } channelId - 打开代理通道时获取的channelId，取值范围为1~2147483647。使用无效或已关闭的channelId将返回错误码32390004，超出取值范围时返回错误码32
   *     390006。channelId仅在代理通道可用时生效，通道关闭或断连后将不可用。
   * @param { Callback<ChannelStateInfo> } [callback] - 注册的回调函数。默认效果：不传入此参数时取消订阅所有的通道状态事件。需传入on方法最后一次注册的回调函数，用于取消该回调的订阅；
   *     传入其他回调函数不会生效。
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
   * 订阅通道状态事件，使用Callback异步回调。适用于手机侧应用需要实时感知代理通道连接状态的场景，例如监测通道断开后暂停数据发送、通道恢复后自动重试业务等。代理模块实时监控蓝牙BR链路状态变化，当发生连接恢复、异常断连、配对关系
   * 删除等事件时通过回调上报ChannelStateInfo。必须在[openProxyChannel]{@link proxyChannelManager.openProxyChannel}成功打开代理通道后才能订阅通道状态事件。订
   * 阅后需调用
   * [off('channelStateChange')]{@link proxyChannelManager.off(type: 'channelStateChange', channelId: number, callback?: Callback<ChannelStateInfo>)}
   * 取消订阅，避免回调持续触发。调用[closeProxyChannel]{@link proxyChannelManager.closeProxyChannel}关闭通道后，已注册的channelStateChange回调将自动取消
   * 订阅。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { int } channelId - 打开代理通道时获取的channelId，取值范围为1~2147483647。使用无效或已关闭的channelId将返回错误码32390004，超出取值范围时返回错误码32
   *     390006。channelId仅在代理通道可用时生效，通道关闭或断连后将不可用。
   * @param { Callback<ChannelStateInfo> } callback - 回调函数，用于接收代理通道的状态变更信息。回调参数为
   *     [ChannelStateInfo]{@link proxyChannelManager.ChannelStateInfo}对象，包含channelId（通道ID）和state（通道连接状态）。需先通过
   *     openProxyChannel打开代理通道后才能接收通道状态。多次注册时，仅最后一次注册的回调函数生效。
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
   * 取消订阅通道状态事件。适用于手机侧应用不再需要监听代理通道连接状态变化的场景，例如用户退出相关业务页面、完成数据传输流程后等。必须在
   * [openProxyChannel]{@link proxyChannelManager.openProxyChannel}成功打开代理通道后才能取消订阅。此方法必须与
   * [on('channelStateChange')]{@link proxyChannelManager.on(type: 'channelStateChange', channelId: number, callback: Callback<ChannelStateInfo>)}
   * 配对使用，用于取消之前通过on('channelStateChange')注册的通道状态回调。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { int } channelId - 打开代理通道时获取的channelId，取值范围为1~2147483647。使用无效或已关闭的channelId将返回错误码32390004，超出取值范围时返回错误码32
   *     390006。channelId仅在代理通道可用时生效，通道关闭或断连后将不可用。
   * @param { Callback<ChannelStateInfo> } [callback] - 注册的回调函数。默认效果：不传入此参数时取消订阅所有的通道状态事件。需传入on方法最后一次注册的回调函数，用于取消该回调的订阅；
   *     传入其他回调函数不会生效。
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
   * 存放接收的数据信息，包括通道ID和数据。
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface DataInfo {
    /**
     * 代理通道的channelId，取值范围为1~2147483647。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    channelId: int;

    /**
     * 接收到的字节数据，长度最大为4096字节。
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
     * 蓝牙BR协议，适用于通过蓝牙BR链路与穿戴设备建立双向数据通道的场景。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    LINK_BR = 0
  }

  /**
   * 打开代理通道函数的入参，包括代理通道的链路类型、对端设备的MAC地址和监听服务的UUID。
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface ChannelInfo {
    /**
     * 代理通道的链路类型，取值范围见[LinkType]{@link proxyChannelManager.LinkType}，目前仅支持LINK_BR（蓝牙BR协议）。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    linkType: LinkType;

    /**
     * 对端设备的MAC地址，格式为XX:XX:XX:XX:XX:XX，其中XX为十六进制字符（0~9、A~F或a~f）。对端设备必须已配对，未配对时返回错误码32390002。格式不符合要求时返回错误码32390006。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    peerDevAddr: string;

    /**
     * 对端监听的服务的UUID，格式为标准UUID字符串，如xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx。格式不符合要求时返回错误码32390006。
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
     * 软件异常导致通道不可用，如内部协议栈错误、资源分配失败等。建议检查日志定位具体原因。
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
     * 代理通道的channelId，取值范围为1~2147483647。
     *
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    channelId: int;

    /**
     * 通道的连接状态，取值范围见[ChannelState]{@link proxyChannelManager.ChannelState}。建议根据不同状态值调整业务策略，如通道断开时暂停数据发送、通道恢复后重试业务。
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