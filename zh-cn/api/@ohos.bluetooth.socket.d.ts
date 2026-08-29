/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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
 * @file 蓝牙socket模块
 * @kit ConnectivityKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type baseProfile from './@ohos.bluetooth.baseProfile';

/**
 * 本模块提供一种蓝牙套接字功能，可实现设备间连接和数据传输。当两个设备间进行蓝牙套接字通信交互时，依据设备功能的不同，可区分客户端与服务端。
 * 
 * 支持的套接字链路类型包括RFCOMM和L2CAP。
 * RFCOMM链路类型也称为串口通信协议（Serial Port Profile, SPP），适用于传统蓝牙（BR/EDR）。
 * L2CAP链路类型适用于传统蓝牙（BR/EDR）和低功耗蓝牙（BLE）。
 * 
 * 通过[socket.sppConnect]{@link socket.sppConnect}创建客户端套接字并向服务端发起连接。
 * 
 * 通过[socket.sppListen]{@link socket.sppListen}创建服务端套接字并监听客户端的连接。
 *
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @since 10 dynamic
 * @since 26.1.0 static
 */
declare namespace socket {
  /**
   * 服务端使用，创建一个服务端监听套接字。使用Callback异步回调。
   * 
   * 通过入参[socket.SppOptions]{@link socket.SppOptions}的type参数，可以创建不同链路类型的服务端套接字，适用于不同的场景。该操作会在蓝牙子系统中注册对应的服务，表示服务端支持的能力。
   * 客户端可通过[socket.sppConnect]{@link socket.sppConnect}向该服务端发起连接请求。
   * 当应用不再需要该服务端套接字时，需通过[socket.sppCloseServerSocket]{@link socket.sppCloseServerSocket}主动关闭创建时获取到的套接字，蓝牙子系统会删除此前注册的服
   * 务。如果此时客户端发起连接，就会连接失败。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { string } name - 服务的名称，该字符串的字符个数范围为[0, 256]。
   * @param { SppOptions } options - 用于监听的套接字配置参数。
   * @param { AsyncCallback<int> } callback - 回调函数。当创建服务端套接字成功，err为undefined，data为获取到的服务端套接字的ID，有效值为非负值；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900004 - Profile not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10 dynamic
   * @since 26.1.0 static
   */
  function sppListen(name: string, options: SppOptions, callback: AsyncCallback<int>): void;

  /**
   * 获取服务端L2CAP链路类型套接字的协议/服务多路复用器值（Protocol/Service Multiplexer, PSM），该值用于标识特定的服务数据传输通道。
   *
   * 需要在服务端调用完[socket.sppListen]{@link socket.sppListen}后调用该接口，且传入的链路类型[SppType]{@link socket.SppType}需是SPP_L2CAP或
   * SPP_L2CAP_BLE。
   *
   * @param { int } serverSocket - 服务端套接字的ID。
   *     该值是调用[socket.sppListen]{@link socket.sppListen}接口后，通过其异步callback获取到的。
   * @returns { int } 返回L2CAP链路类型套接字的psm值。
   *     [SppType]{@link socket.SppType}设置为SPP_L2CAP_BLE时，返回值的有效值范围为[0x01, 0xFF]。
   *     [SppType]{@link socket.SppType}设置为SPP_L2CAP时，返回值的有效值范围为[0x0000, 0xFFFF]。
   *     服务端通道建立异常或[SppType]{@link socket.SppType}非L2CAP链路类型时，返回-1。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  function getL2capPsm(serverSocket: int): int;

  /**
   * 服务端使用，接受客户端的套接字连接请求。使用Callback异步回调。
   * 
   * 须在调用[socket.sppListen]{@link socket.sppListen}创建服务端套接字成功后，才能调用该接口监听客户端的连接请求。
   * 客户端可通过[socket.sppConnect]{@link socket.sppConnect}向该服务端发起连接请求。
   * 连接建立成功后，即可通过[socket.sppWrite]{@link socket.sppWrite}、[socket.sppWriteAsync]{@link socket.sppWriteAsync}、
   * [socket.sppReadAsync]{@link socket.sppReadAsync}等接口，与客户端进行数据传输。
   * 当服务端不再需要已建立的连接时，可通过[socket.sppCloseClientSocket]{@link socket.sppCloseClientSocket}主动断开指定的客户端套接字连接。
   *
   * @param { int } serverSocket - 服务端套接字的ID。
   *     该值是调用[socket.sppListen]{@link socket.sppListen}接口后，通过其异步callback获取到的。
   * @param { AsyncCallback<int> } callback - 回调函数。当收到客户端的连接请求且连接建立成功时，err为undefined，data是用于标识发起此次连接请求的客户端套接字ID，有效值为非负值；
   *     否则err为错误对象。
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900004 - Profile not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10 dynamic
   * @since 26.1.0 static
   */
  function sppAccept(serverSocket: int, callback: AsyncCallback<int>): void;

  /**
   * 客户端使用，创建一个客户端套接字，并向服务端的特定服务发起连接请求。
   * 
   * 通过[SppOptions]{@link socket.SppOptions}参数的type表示需要连接的服务类型。
   * 需确保服务端设备已具备需要连接的服务。服务端可通过[socket.sppListen]{@link socket.sppListen}注册并监听连接请求。
   * 连接建立成功后，即可通过[socket.sppWrite]{@link socket.sppWrite}或[socket.sppWriteAsync]{@link socket.sppWriteAsync}接口，同服务端进行数
   * 据传输。
   * 当客户端不再需要已建立的连接时，可通过[socket.sppCloseClientSocket]{@link socket.sppCloseClientSocket}主动断开连接。
   *
   * @permission ohos.permission.ACCESS_BLUETOOTH
   * @param { string } deviceId - 对端设备地址，例如："XX:XX:XX:XX:XX:XX"。
   * @param { SppOptions } options - 客户端套接字连接配置参数。
   * @param { AsyncCallback<int> } callback - 回调函数。当客户端发起连接成功，err为undefined，data为当前客户端套接字的ID，有效值为非负值；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900003 - Bluetooth disabled.
   * @throws { BusinessError } 2900004 - Profile not supported.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10 dynamic
   * @since 26.1.0 static
   */
  function sppConnect(deviceId: string, options: SppOptions, callback: AsyncCallback<int>): void;

  /**
   * 客户端和服务端均可使用，获取套接字连接中的对端设备蓝牙地址。若客户端使用，需在调用[socket.sppConnect]{@link socket.sppConnect}后，且连接成功后使用。若服务端使用，需在调用
   * [socket.sppAccept]{@link socket.sppAccept}后，且连接成功后使用。
   *
   * @param { int } clientSocket - 客户端套接字的ID。
   *     该值是调用[socket.sppAccept]{@link socket.sppAccept}或[socket.sppConnect]{@link socket.sppConnect}接口后，通过其异步
   *     callback获取到的。
   * @returns { string } 返回对端设备地址。
   *     基于信息安全考虑，此处获取的设备地址为虚拟MAC地址。
   *     已配对的地址不会变更。
   *     若该设备重启蓝牙开关，重新获取到的虚拟地址会立即变更。
   *     若取消配对，蓝牙子系统会根据该地址是否仍被其他应用使用来决定变更时机：若其他应用正在使用该地址，则不会立即变更；当无应用使用时，地址将被回收并在下次获取时分配新的虚拟地址。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types;
   * 3. Parameter verification failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 17 dynamic
   * @since 26.1.0 static
   */
  function getDeviceId(clientSocket: int): string;

  /**
   * 客户端和服务端均可使用，获取当前套接字链路类型下最大接收数据的大小。通过[socket.sppReadAsync]{@link socket.sppReadAsync}或
   * [socket.on('sppRead')]{@link socket.on(type: 'sppRead', clientSocket: number, callback: Callback<ArrayBuffer>)}接收数据
   * 时，单次接收的数据大小受此返回值约束（SPP_RFCOMM链路类型无此限制）。例如在文件传输、数据同步等需要接收大量数据的场景中，可调用此接口获取单次接收的最大数据量，以便对接收数据进行分片处理。
   * 
   * 若客户端使用，需在调用[socket.sppConnect]{@link socket.sppConnect}后，且连接成功后使用。
   * 若服务端使用，需在调用[socket.sppAccept]{@link socket.sppAccept}后，且连接成功后使用。
   * 若套接字链路类型为[SPP_RFCOMM]{@link socket.SppType}时，最大接收数据大小无限制且返回值为0。
   *
   * @param { int } clientSocket - 客户端套接字的ID。
   *     该值是调用[sppAccept]{@link socket.sppAccept}或[sppConnect]{@link socket.sppConnect}接口，通过其异步callback获取到的。
   * @returns { int } 返回最大接收数据的大小，单位：Byte。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 22 dynamic
   * @since 26.1.0 static
   */
  function getMaxReceiveDataSize(clientSocket: int): int;

  /**
   * 客户端和服务端均可使用，获取套接字当前链路类型下最大发送数据的大小。调用[socket.sppWrite]{@link socket.sppWrite}或
   * [socket.sppWriteAsync]{@link socket.sppWriteAsync}发送数据时，单次发送的数据大小不应超过此返回值（SPP_RFCOMM链路类型无此限制）。例如在文件传输、音视频数据传输等需要发送大
   * 量数据的场景中，可调用此接口获取单次发送的最大数据量，以便对发送数据进行分片处理。
   * 
   * 若客户端使用，需在调用[socket.sppConnect]{@link socket.sppConnect}后，且连接成功后使用。
   * 若服务端使用，需在调用[socket.sppAccept]{@link socket.sppAccept}后，且连接成功后使用。
   * 若套接字链路类型为[SPP_RFCOMM]{@link socket.SppType}时，最大发送数据大小无限制且返回值为0。
   *
   * @param { int } clientSocket - 客户端套接字的ID。
   *     <br>该值是调用[sppAccept]{@link socket.sppAccept}或[sppConnect]{@link socket.sppConnect}接口，通过其异步callback获取到的。
   * @returns { int } 返回最大发送数据的大小，单位：Byte。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 22 dynamic
   * @since 26.1.0 static
   */
  function getMaxTransmitDataSize(clientSocket: int): int;

  /**
   * 客户端和服务端均可使用，检查当前链路是否已连接。
   *
   * @param { int } clientSocket - 客户端套接字的ID。
   *     该值是调用[sppAccept]{@link socket.sppAccept}或[sppConnect]{@link socket.sppConnect}接口，通过其异步callback获取到的。
   * @returns { boolean } 套接字链路是否已连接，true表示已连接，false表示未连接。
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 22 dynamic
   * @since 26.1.0 static
   */
  function isConnected(clientSocket: int): boolean;

  /**
   * 服务端使用，删除指定的服务端套接字。
   * 
   * 需先调用[socket.sppListen]{@link socket.sppListen}并获取到有效的服务端监听套接字标识符。
   * 若服务端无需继续监听，可调用本接口以关闭监听套接字，蓝牙子系统会删除此前注册的服务。如果此时客户端发起连接，就会连接失败。
   * 若服务端此时与其他客户端存在连接，该接口调用后，也会主动断开与客户端的连接。
   *
   * @param { int } socket - 服务端监听套接字的ID。
   *     该值是调用[socket.sppListen]{@link socket.sppListen}接口，通过其异步callback获取到的。
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10 dynamic
   * @since 26.1.0 static
   */
  function sppCloseServerSocket(socket: int): void;

  /**
   * 客户端和服务端均可使用，关闭指定的客户端套接字，并断开客户端和服务端之间的连接。
   * 
   * 若客户端使用，需在调用[socket.sppConnect]{@link socket.sppConnect}后，且连接成功后使用。
   * 若服务端使用，需在调用[socket.sppAccept]{@link socket.sppAccept}后，且连接成功后使用。
   * 当应用不再需要已建立好的套接字连接时，需主动调用该接口断开客户端和服务端之间的连接。
   *
   * @param { int } socket - 客户端套接字的ID。
   *     <br>该值是调用[socket.sppAccept]{@link socket.sppAccept}或[socket.sppConnect]{@link socket.sppConnect}接口，通过其异步
   *     callback获取到的。
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2900001 - Service stopped.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10 dynamic
   * @since 26.1.0 static
   */
  function sppCloseClientSocket(socket: int): void;

  /**
   * 客户端和服务端均可使用，向对端设备发送数据。
   * 
   * 仅在双方成功建立连接后，调用本接口才有效。
   * 若客户端使用，需在调用[socket.sppConnect]{@link socket.sppConnect}后，且连接成功后使用。
   * 若服务端使用，需在调用[socket.sppAccept]{@link socket.sppAccept}后，且连接成功后使用。
   * 若开发者需感知传输过程中异常断连等错误，建议使用[socket.sppWriteAsync]{@link socket.sppWriteAsync}。
   * 按照蓝牙协议规范，数据通道在空闲状态需进入休眠模式以降低功耗。蓝牙子系统实现上，通道在5-7s内没有数据交互时会进入休眠模式，将导致下次调用此接口发送数据前，会耗费500ms左右退出休眠模式才开始发送数据。
   * 若想减少每次发送数据前退出休眠模式的耗时，建议每3s左右可往数据通道上发送一次任意大小的心跳数据，对数据通道进行保活，可防止进入休眠模式，但同时也会提高设备功耗。
   *
   * @param { int } clientSocket - 客户端套接字的ID。
   *     该值是调用[socket.sppAccept]{@link socket.sppAccept}或[socket.sppConnect]{@link socket.sppConnect}接口，通过其异步
   *     callback获取到的。
   * @param { ArrayBuffer } data - 写入的数据。
   *     对于L2CAP链路类型（SPP_L2CAP/SPP_L2CAP_BLE），数据大小不能超过当前链路的最大发送数据大小，可通过
   *     [socket.getMaxTransmitDataSize]{@link socket.getMaxTransmitDataSize}接口获取。
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2901054 - IO error.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10 dynamic
   * @since 26.1.0 static
   */
  function sppWrite(clientSocket: int, data: ArrayBuffer): void;

  /**
   * 客户端和服务端均可使用，订阅套接字读请求事件。调用该接口后，当收到对端发送的数据会执行订阅的回调函数。
   * 
   * 若客户端使用，需在调用[socket.sppConnect]{@link socket.sppConnect}后，且连接成功后使用。
   * 若服务端使用，需在调用[socket.sppAccept]{@link socket.sppAccept}后，且连接成功后使用。
   * 不可以和API version 18开始支持的[socket.sppReadAsync]{@link socket.sppReadAsync}接口混用，同一路套接字连接只能使用socket.on('sppRead')接口或者
   * [socket.sppReadAsync]{@link socket.sppReadAsync}接口。
   * 若开发者需感知传输过程中异常断连等错误，建议使用[socket.sppReadAsync]{@link socket.sppReadAsync}。
   *
   * @param { 'sppRead' } type - 事件回调类型，支持的事件为'sppRead'，表示订阅spp读请求事件。
   *     当收到了对端发送的数据时，触发该事件。
   * @param { number } clientSocket - 客户端套接字的ID。
   *     该值是调用[socket.sppAccept]{@link socket.sppAccept}或[socket.sppConnect]{@link socket.sppConnect}接口，通过其异步
   *     callback获取到的。
   * @param { Callback<ArrayBuffer> } callback - 指定订阅的回调函数，会返回读取到的数据。
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2901054 - IO error.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10 dynamic
   */
  function on(type: 'sppRead', clientSocket: number, callback: Callback<ArrayBuffer>): void;

  /**
   * 取消订阅套接字读请求事件。
   * 
   * 须在调用[socket.on('sppRead')]{@link socket.on(type: 'sppRead', clientSocket: number, callback: Callback<ArrayBuffer>)}成功订阅
   * 后，才能调用该接口取消订阅。
   * 若客户端使用，需在调用[socket.sppConnect]{@link socket.sppConnect}后，且连接成功后使用。
   * 若服务端使用，需在调用[socket.sppAccept]{@link socket.sppAccept}后，且连接成功后使用。
   *
   * @param { 'sppRead' } type - 事件回调类型，支持的事件为'sppRead'，表示取消订阅spp读请求事件。
   * @param { number } clientSocket - 客户端套接字的ID。
   *     该值是调用[socket.sppAccept]{@link socket.sppAccept}或[socket.sppConnect]{@link socket.sppConnect}接口，通过其异步
   *     callback获取到的。
   * @param { Callback<ArrayBuffer> } callback - 指定取消订阅的回调函数通知。
   *     若传参，则需与
   *     [socket.on('sppRead')]{@link socket.on(type: 'sppRead', clientSocket: number, callback: Callback<ArrayBuffer>)}
   *     中的回调函数一致；若无传参，则取消订阅该type对应的所有回调函数通知。
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10 dynamic
   */
  function off(type: 'sppRead', clientSocket: number, callback?: Callback<ArrayBuffer>): void;

  /**
   * 客户端和服务端均可使用，向对端设备发送数据。使用Promise异步回调。当连接断开时，该接口会抛出错误码并返回。
   * 
   * 仅在双方成功建立连接后，调用本接口才有效。
   * 若客户端使用，需在调用[socket.sppConnect]{@link socket.sppConnect}后，且连接成功后使用。
   * 若服务端使用，需在调用[socket.sppAccept]{@link socket.sppAccept}后，且连接成功后使用。
   * 按照蓝牙协议规范，数据通道在空闲状态需进入休眠模式以降低功耗。蓝牙子系统实现上，通道在5-7s内没有数据交互时会进入休眠模式，将导致下次调用此接口发送数据前，会耗费500ms左右退出休眠模式才开始发送数据。
   * 若想减少每次发送数据前退出休眠模式的耗时，建议每3s左右可往数据通道上发送一次任意大小的心跳数据，对数据通道进行保活，可防止进入休眠模式，但同时也会提高设备功耗。
   *
   * @param { int } clientSocket - 客户端套接字的ID。
   *     该值是调用[sppAccept]{@link socket.sppAccept}或[sppConnect]{@link socket.sppConnect}接口，通过其异步callback获取到的。
   * @param { ArrayBuffer } data - 写入的数据。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2901054 - IO error.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 18 dynamic
   * @since 26.1.0 static
   */
  function sppWriteAsync(clientSocket: int, data: ArrayBuffer): Promise<void>;

  /**
   * 客户端和服务端均可使用，读取对端发送数据的异步接口。使用Promise异步回调。当连接断开时，该接口会抛出错误码并返回。
   * 
   * 若客户端使用，需在调用[socket.sppConnect]{@link socket.sppConnect}后，且连接成功后使用。
   * 若服务端使用，需在调用[socket.sppAccept]{@link socket.sppAccept}后，且连接成功后使用。
   * 不可以和API version 10开始支持的
   * [socket.on('sppRead')]{@link socket.on(type: 'sppRead', clientSocket: number, callback: Callback<ArrayBuffer>)}接口混
   * 用，同一路socket只能使用
   * [socket.on('sppRead')]{@link socket.on(type: 'sppRead', clientSocket: number, callback: Callback<ArrayBuffer>)}接口或者
   * socket.sppReadAsync接口。
   * 通过Promise异步返回读取的数据，建议在连接成功后循环调用去获取接收到的数据，若不及时调用会丢失接收的数据。
   * 该接口为异步接口，需要等异步回调结果返回后才能进行下一次调用。
   *
   * @param { int } clientSocket - 客户端套接字的ID。
   *     该值是调用[sppAccept]{@link socket.sppAccept}或[sppConnect]{@link socket.sppConnect}接口，通过其异步callback获取到的。
   * @returns { Promise<ArrayBuffer> } Promise对象。返回读取的数据。
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 2901054 - IO error.
   * @throws { BusinessError } 2900099 - Operation failed.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 18 dynamic
   * @since 26.1.0 static
   */
  function sppReadAsync(clientSocket: int): Promise<ArrayBuffer>;

  /**
   * 描述套接字的配置参数。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10 dynamic
   * @since 26.1.0 static
   */
  interface SppOptions {
    /**
     * RFCOMM套接字链路类型的服务UUID，例如"00001101-0000-1000-8000-00805F9B34FB"。
     * 
     * 建议开发者使用自定义的服务UUID（可通过工具函数[util.generateRandomUUID]{@link @ohos.util:util.generateRandomUUID}生成），也可以使用标准协议定义的
     * Serial Port UUID服务(00001101-0000-1000-8000-00805F9B34FB)。
     * SppType设置为SPP_RFCOMM时该参数必选。
     * SppType设置为SPP_L2CAP或SPP_L2CAP_BLE时设置为空字符串。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 26.1.0 static
     */
    uuid: string;
    /**
     * 是否是安全通道。true表示是安全通道，false表示非安全通道。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 26.1.0 static
     */
    secure: boolean;
    /**
     * 蓝牙套接字链路类型。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 26.1.0 static
     */
    type: SppType;
    /**
     * 协议/服务多路复用器值，用于标识特定的服务数据传输通道。不填写该参数时默认值为-1。
     * 
     * 对于客户端：
     * 
     * SppType设置为SPP_RFCOMM时，该参数不填。
     * SppType设置为SPP_L2CAP_BLE或SPP_L2CAP时，需和服务端的psm值保持一致。
     * 
     * 对于服务端：
     * 
     * SppType设置为SPP_RFCOMM时，该参数不填。
     * SppType设置为SPP_L2CAP_BLE时，psm值必须由系统自动分配，有效值范围为[0x01, 0xFF]。
     * SppType设置为SPP_L2CAP时，psm值可以主动设置或蓝牙子系统分配，若为主动设置，其有效范围为[0x01, 0xFFFF]，并且需要满足低位字节最低位必须为1，高位字节最低位必须为0；若为蓝牙子系统分配，该参数
     * 不填，可以通过[socket.getL2capPsm]{@link socket.getL2capPsm}接口获取psm值。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    psm?: int;
  }

  /**
   * 枚举，蓝牙套接字链路类型。
   * 
   * 不同类型的蓝牙设备需要选取不同的链路类型。
   * 针对低功耗蓝牙（BLE）设备，必须使用L2CAP链路类型。
   * 针对传统蓝牙（BR/EDR）设备，建议优先采用RFCOMM链路进行连接。其优势在于可通过UUID服务动态协商信道（即设备通过查询服务UUID自动确定通信频道的过程），同时具备更高的安全性和可靠性。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10 dynamic
   * @since 26.1.0 static
   */
  enum SppType {
    /**
     * 基于传统蓝牙（BR/EDR）的RFCOMM链路。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 26.1.0 static
     */
    SPP_RFCOMM = 0,
    /**
     * 基于传统蓝牙（BR/EDR）的L2CAP链路。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    SPP_L2CAP = 1,
    /**
     * 基于低功耗蓝牙（BLE）的L2CAP链路。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    SPP_L2CAP_BLE = 2
  }
}

export default socket;