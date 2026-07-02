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
 * @file
 * @kit ConnectivityKit
 */

import type { Callback } from '@ohos.base';
import nearlinkConstant from '@ohos.nearlink.constant';

/**
 * 提供操作和管理星闪数据传输的方法。
 *
 * @syscap SystemCapability.Communication.NearLink.Base
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
declare namespace dataTransfer {
  /**
   * 连接状态。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type ConnectionState = nearlinkConstant.ConnectionState;

  /**
   * 通过UUID创建可以接收数据的星闪端口。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { string } uuid - 应用服务UUID
   *     <br>长度必须为36，由16进制数字字符和连字符共36个字符组成，形如“FFFFFFFF-1234-5678-ABCD-000000001234”，代表128比特标识。
   *     <br>禁止使用星闪标准服务UUID。
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
   * @since 26.0.0 dynamic&static
   */
  function createPort(uuid: string): void;

  /**
   * 根据UUID销毁监听端口并释放相关资源。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { string } uuid - 应用服务UUID
   *     <br>长度必须为36，由16进制数字字符和连字符共36个字符组成，形如“FFFFFFFF-1234-5678-ABCD-000000001234”，代表128比特标识。
   *     <br>不允许使用NearLink标准UUID。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100022 - The UUID is not registered.
   * @throws { BusinessError } 36100043 - Invalid UUID.
   * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function destroyPort(uuid: string): void;

  /**
   * 连接服务端。如果连接成功，则可以向服务端发送数据。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { ConnectionParams } params - 连接参数
   * @returns { Promise<void> } 返回promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100041 - Invalid address.
   * @throws { BusinessError } 36100043 - Invalid UUID.
   * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function connect(params: ConnectionParams): Promise<void>;

  /**
   * 断开或停止与服务端的连接。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { ConnectionParams } params - 连接参数
   * @returns { Promise<void> } 返回promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100041 - Invalid address.
   * @throws { BusinessError } 36100043 - Invalid UUID.
   * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function disconnect(params: ConnectionParams): Promise<void>;

  /**
   * 订阅连接状态变化事件。
   *
   * 只有授予了ohos.permission.NEARLINK_ACCESS权限的应用程序才能访问此事件。
   *
   * @param { Callback<ConnectionResult> } callback - 用于监听状态改变事件的回调。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onConnectionStateChanged(callback: Callback<ConnectionResult>): void;

  /**
   * 取消订阅连接状态变更事件。
   *
   * @param { Callback<ConnectionResult> } [callback] - 用于监听状态改变事件的回调。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offConnectionStateChanged(callback?: Callback<ConnectionResult>): void;

  /**
   * 根据地址和UUID写入数据。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { DataParams } params - 发送数据的参数
   * @returns { Promise<void> } 返回promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100023 - Write data congestion.
   * @throws { BusinessError } 36100041 - Invalid address.
   * @throws { BusinessError } 36100043 - Invalid UUID.
   * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function writeData(params: DataParams): Promise<void>;

  /**
   * 订阅从端口读取数据事件。
   *
   * 只有授予了ohos.permission.NEARLINK_ACCESS权限的应用程序才能访问此事件。
   *
   * @param { Callback<DataParams> } callback - 监听端口读事件的回调。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onReadData(callback: Callback<DataParams>): void;

  /**
   * 取消订阅从端口读取数据的事件。
   *
   * @param { Callback<DataParams> } [callback] - 监听端口读事件的回调。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offReadData(callback?: Callback<DataParams>): void;

  /**
   * 获取数据传输的连接状态。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { ConnectionStateParams } params - 获取连接状态参数
   * @returns { ConnectionState } 返回数据传输的连接状态。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100041 - Invalid address.
   * @throws { BusinessError } 36100043 - Invalid UUID in connection parameters.
   * @throws { BusinessError } 36100044 - NearLink standard UUID not allowed.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getConnectionState(params: ConnectionStateParams): ConnectionState;

  /**
   * 连接参数。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface ConnectionParams {
    /**
     * 连接的设备地址。
     * 长度必须为17，由16进制数字和冒号组成，形如 "11:22:33:AA:BB:FF"。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    address: string;
    /**
     * 服务ID。
     * 长度必须为36，由16进制数字字符和连字符共36个字符组成，形如“FFFFFFFF-1234-5678-ABCD-000000001234”，代表128比特标识。
     * <br>禁止使用星闪标准服务UUID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    uuid: string;
    /**
     * 数据传输模式。默认使用基本传输模式
     * 默认值： 默认值：BASIC。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    transferMode?: TransferMode;
  }

  /**
   * 数据参数说明。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface DataParams {
    /**
     * 连接的设备地址。
     * 长度必须为17，由十六进制数字和冒号组成，例如：11:22:33:AA:BB:FF。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    address: string;
    /**
     * 服务ID。
     * 长度必须为36，由16进制数字字符和连字符共36个字符组成，形如“FFFFFFFF-1234-5678-ABCD-000000001234”，代表128比特标识。
     * <br>禁止使用星闪标准服务UUID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    uuid: string;
    /**
     * 数据缓冲区。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    data: ArrayBuffer;
  }

  /**
   * 连接结果的参数说明。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface ConnectionResult {
    /**
     * 连接的设备地址。
     * 长度必须为17，由十六进制数字和冒号组成，例如：11:22:33:AA:BB:FF。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    address: string;
    /**
     * 服务ID。
     * 长度必须为36，由16进制数字字符和连字符共36个字符组成，形如“FFFFFFFF-1234-5678-ABCD-000000001234”，代表128比特标识。
     * <br>禁止使用星闪标准服务UUID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    uuid: string;
    /**
     * 通道数据的最大长度
     * 单位为： 字节，取值应为[0,65535]内的整数。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    mtu: int;
    /**
     * 连接状态。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    state: ConnectionState;
  }

  /**
   * 获取连接状态所需的参数。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface ConnectionStateParams {
    /**
     * 连接的设备地址。
     * 长度必须为17，由十六进制数字和冒号组成，例如：11:22:33:AA:BB:FF。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    address: string;
    /**
     * 服务UUID。
     * 长度必须为36，由16进制数字字符和连字符共36个字符组成，形如“FFFFFFFF-1234-5678-ABCD-000000001234”，代表128比特标识。
     * <br>禁止使用星闪标准服务UUID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    uuid: string;
  }

  /**
   * 数据传输模式。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum TransferMode {
    /**
     * 基本数据传输模式。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    BASIC = 0,
    /**
     * 可靠数据传输模式。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    RELIABLE = 1
  }
}
export default dataTransfer;