/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file 星闪数传能力
 * @kit ConnectivityKit
 */

import type { Callback } from '@ohos.base';
import nearlinkConstant from '@ohos.nearlink.constant';

/**
 * 本模块提供了星闪数据传输功能，包括端口通道管理、连接管理、数据收发、连接状态查询与订阅等。
 *
 * @syscap SystemCapability.Communication.NearLink.Base
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare namespace dataTransfer {
  /**
   * 表示和远端设备的连接状态，为枚举值。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  type ConnectionState = nearlinkConstant.ConnectionState;

  /**
   * 注册端口通道。端口通道注册后方可用于连接远端设备，不再使用时需通过[dataTransfer.destroyPort]{@link dataTransfer.destroyPort}销毁。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { string } uuid - 星闪服务UUID，长度必须为36个字符，由32个十六进制数字和4个连字符（-）组成，例如： FFFFFFFF-1234-5678-ABCD-000000001234，表示一个128
   *     位标识符。 不允许使用星闪标准UUID。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100020 - The UUID is already registered.
   * @throws { BusinessError } 36100021 - Port exceeds the upper limit.
   * @throws { BusinessError } 36100043 - Invalid UUID.
   * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function createPort(uuid: string): void;

  /**
   * 销毁端口通道。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { string } uuid - 星闪服务UUID，长度必须为36个字符，由32个十六进制数字和4个连字符（-）组成，例如： FFFFFFFF-1234-5678-ABCD-000000001234，表示一个128
   *     位标识符。 不允许使用星闪标准UUID。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100022 - The UUID is not registered.
   * @throws { BusinessError } 36100043 - Invalid UUID.
   * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function destroyPort(uuid: string): void;

  /**
   * 连接远端设备。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { ConnectionParams } params - 指明端口的连接参数。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100041 - Invalid address.
   * @throws { BusinessError } 36100043 - Invalid UUID.
   * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function connect(params: ConnectionParams): Promise<void>;

  /**
   * 断连远端设备。需在通过[dataTransfer.connect]{@link dataTransfer.connect}成功建立连接后调用，用于断开已建立的远端设备连接。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { ConnectionParams } params - 指明端口的连接参数。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100041 - Invalid address.
   * @throws { BusinessError } 36100043 - Invalid UUID.
   * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function disconnect(params: ConnectionParams): Promise<void>;

  /**
   * 订阅端口通道连接状态变更事件。使用callback异步回调。
   * 
   * 应用需具备ohos.permission.ACCESS_NEARLINK权限，方可接收此事件上报。
   *
   * @param { Callback<ConnectionResult> } callback - 回调函数，返回与远端设备端口连接参数的协商结果。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function onConnectionStateChanged(callback: Callback<ConnectionResult>): void;

  /**
   * 取消订阅端口通道连接状态变更事件。使用callback异步回调。
   *
   * @param { Callback<ConnectionResult> } [callback] - 回调函数，返回与远端设备端口连接参数的协商结果。
   *     <br>填写该参数则取消当前callback订阅。不填写该参数则取消该事件对应的所有回调。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function offConnectionStateChanged(callback?: Callback<ConnectionResult>): void;

  /**
   * 通过设备地址和UUID向远端设备发送数据。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { DataParams } params - 指明发送数据的参数，包含远端设备地址、服务UUID以及发送的数据包。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100023 - Data transmission congested.
   * @throws { BusinessError } 36100041 - Invalid address.
   * @throws { BusinessError } 36100043 - Invalid UUID.
   * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function writeData(params: DataParams): Promise<void>;

  /**
   * 订阅端口通道数据接收事件。使用callback异步回调。
   * 
   * 应用需具备ohos.permission.ACCESS_NEARLINK权限，方可接收此事件上报。
   *
   * @param { Callback<DataParams> } callback - 回调函数，返回端口通道接收到的数据参数。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function onReadData(callback: Callback<DataParams>): void;

  /**
   * 取消订阅端口通道数据接收事件。使用callback异步回调。
   *
   * @param { Callback<DataParams> } [callback] - 回调函数，返回端口通道接收到的数据参数。
   *     <br>填写该参数则取消当前callback订阅。不填写该参数则取消该事件对应的所有回调。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function offReadData(callback?: Callback<DataParams>): void;

  /**
   * 获取与远端设备之间的端口通道连接状态。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { ConnectionStateParams } params - 指明端口的连接参数。
   * @returns { ConnectionState } 和远端设备的星闪端口通道连接状态。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100041 - Invalid address.
   * @throws { BusinessError } 36100043 - Invalid UUID in connection parameters.
   * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function getConnectionState(params: ConnectionStateParams): ConnectionState;

  /**
   * 发起端口连接的参数。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface ConnectionParams {
    /**
     * 远端设备的星闪地址。地址格式参考：11:22:33:AA:BB:FF。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;
    /**
     * 星闪服务UUID，长度必须为36个字符，由32个十六进制数字和4个连字符（-）组成，例如： FFFFFFFF-1234-5678-ABCD-000000001234，表示一个128位标识符。 不允许使用星闪标准UUID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    uuid: string;
    /**
     * 表示和远端设备的数据传输模式。默认值是BASIC。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    transferMode?: TransferMode;
  }

  /**
   * 端口数据发送和接收的参数。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface DataParams {
    /**
     * 远端设备的星闪地址。地址格式参考：11:22:33:AA:BB:FF。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;
    /**
     * 星闪服务UUID，长度必须为36个字符，由32个十六进制数字和4个连字符（-）组成，例如： FFFFFFFF-1234-5678-ABCD-000000001234，表示一个128位标识符。 不允许使用星闪标准UUID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    uuid: string;
    /**
     * 数据包。通过[dataTransfer.writeData]{@link dataTransfer.writeData}发送时表示待发送的数据，通过
     * [dataTransfer.onReadData]{@link dataTransfer.onReadData(callback: Callback<DataParams>)}接收时表示接收到的数据。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    data: ArrayBuffer;
  }

  /**
   * 与远端设备端口连接参数的协商结果
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface ConnectionResult {
    /**
     * 远端设备的星闪地址。地址格式参考：11:22:33:AA:BB:FF。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;
    /**
     * 星闪服务UUID，长度必须为36个字符，由32个十六进制数字和4个连字符（-）组成，例如： FFFFFFFF-1234-5678-ABCD-000000001234，表示一个128位标识符。 不允许使用星闪标准UUID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    uuid: string;
    /**
     * 协商后的发送和接收数据的包长，单位为byte，范围[0, 65535]。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    mtu: int;
    /**
     * 与远端设备的连接状态。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    state: ConnectionState;
  }

  /**
   * 获取端口通道连接状态所需参数。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface ConnectionStateParams {
    /**
     * 远端设备的星闪地址。地址格式参考：11:22:33:AA:BB:FF。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;
    /**
     * 星闪服务UUID，长度必须为36个字符，由32个十六进制数字和4个连字符（-）组成，例如： FFFFFFFF-1234-5678-ABCD-000000001234，表示一个128位标识符。 不允许使用星闪标准UUID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    uuid: string;
  }

  /**
   * 表示和远端设备的数据传输模式，为枚举值。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enum TransferMode {
    /**
     * 表示基础模式，无数据重传机制。适用于对时延和吞吐量敏感的业务场景。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    BASIC = 0,
    /**
     * 表示可靠模式，有数据重传机制。适用于对数据完整性要求高的业务场景。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    RELIABLE = 1
  }
}
export default dataTransfer;