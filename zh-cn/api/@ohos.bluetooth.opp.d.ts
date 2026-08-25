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
 * @file 蓝牙opp模块
 * @kit ConnectivityKit
 */

import type { Callback } from './@ohos.base';

/**
 * OPP模块提供了使用蓝牙传输文件的功能，包括发送文件、接收文件和获取文件传输进度等。
 * 
 * 当前页面仅包含本模块的系统接口。
 *
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @stagemodelonly
 * @since 16 dynamic
 * @since 26.1.0 static
 */
declare namespace opp {
  /**
   * 创建oppServer profile实例。
   *
   * @returns { OppServerProfile } 返回profile实例。
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 16 dynamic
   * @since 26.1.0 static
   */
  function createOppServerProfile(): OppServerProfile;

  /**
   * Profile类，使用opp方法之前需要创建该类的实例进行操作，通过[createOppServerProfile()]{@link opp.createOppServerProfile}方法构造此实例。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 16 dynamic
   * @since 26.1.0 static
   */
  interface OppServerProfile {
    /**
     * 订阅蓝牙文件传输的进度和状态变化。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH [since 16 - 24]
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     *     or (ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     *     and ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
     * @param { 'transferStateChange' } type - 事件回调类型，支持的事件为'transferStateChange'，当on('transferStateChange')调用完成后，可以收到文件
     *     传输进度和状态变化事件。
     * @param { Callback<OppTransferInformation> } callback - 表示文件传输进度和状态变化事件的回调函数。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed. [since 16 - 24]
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     */
    on(type: 'transferStateChange', callback: Callback<OppTransferInformation>): void;

    /**
     * 取消订阅蓝牙文件传输的进度和状态变化事件。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { 'transferStateChange' } type - 事件回调类型，支持的事件为'transferStateChange'，调用off('transferStateChange')后，停止接收文件传输
     *     进度和状态变化事件。
     * @param { Callback<OppTransferInformation> } callback - Callback used to listen for event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     */
    off(type: 'transferStateChange', callback?: Callback<OppTransferInformation>): void;

    /**
     * 订阅蓝牙文件传输事件以接收文件。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH [since 16 - 24]
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     *     or (ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     *     and ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
     * @param { 'receiveIncomingFile' } type - 事件回调类型，支持的事件为'receiveIncomingFile'，当on('receiveIncomingFile')调用完成后，表示可以收到
     *     是否有文件传输通知的事件。
     * @param { Callback<OppTransferInformation> } callback - 表示文件传输进度和状态变化事件的回调函数。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed. [since 16 - 24]
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     */
    on(type: 'receiveIncomingFile', callback: Callback<OppTransferInformation>): void;

    /**
     * 取消订阅蓝牙文件传输完成的事件。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { 'receiveIncomingFile' } type - 事件回调类型，支持的事件为'receiveIncomingFile'，调用off('receiveIncomingFile')后，停止接收文件传输
     *     通知的事件。
     * @param { Callback<OppTransferInformation> } callback - Callback used to listen for event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     */
    off(type: 'receiveIncomingFile', callback?: Callback<OppTransferInformation>): void;

    /**
     * 使用蓝牙发送文件。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - 接收端的蓝牙MAC地址。
     * @param { Array<FileHolder> } fileHolds - 发送的文件数据，依据插入Array的次序进行发送。
     * @returns { Promise<void> } Promise对象。无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
     * @throws { BusinessError } 401 - Invalid parameter.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth switch is off.
     * @throws { BusinessError } 2900004 - Profile is not supported.
     * @throws { BusinessError } 2900099 - Failed to send file.
     * @throws { BusinessError } 2903001 - The file type is not supported.
     * @throws { BusinessError } 2903002 - Current Transfer Information is busy.
     * @throws { BusinessError } 2903003 - The file is not accessible.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    sendFile(deviceId: string, fileHolds: Array<FileHolder>): Promise<void>;

    /**
     * 蓝牙接收文件。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { boolean } accept - 表示是否接受接收文件。true表示接受，false表示不接受。
     * @param { int } fileFd 接收的文件描述符，接收过程中需要保持开启。
     * @returns { Promise<void> } Promise对象。无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
     * @throws { BusinessError } 401 - Invalid parameter.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth switch is off.
     * @throws { BusinessError } 2900004 - Profile is not supported.
     * @throws { BusinessError } 2900099 - Failed to confirm the received file information.
     * @throws { BusinessError } 2903002 - Current Transfer Information is busy.
     * @throws { BusinessError } 2903003 - The file is not accessible.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    setIncomingFileConfirmation(accept: boolean, fileFd: int): Promise<void>;

    /**
     * 取消文件传输。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @returns { Promise<void> } Promise对象。无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth switch is off.
     * @throws { BusinessError } 2900004 - Profile is not supported.
     * @throws { BusinessError } 2900099 - Failed to cancel the current transfer.
     * @throws { BusinessError } 2903002 - Current Transfer Information is busy.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    cancelTransfer(): Promise<void>;

    /**
     * 获取当前传输的文件信息。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH [since 16 - 24]
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     *     or (ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     *     and ohos.permission.GET_BLUETOOTH_PEERS_MAC) [since 26.0.0]
     * @returns { Promise<OppTransferInformation> } Promise对象。返回当前传输的文件信息对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth switch is off.
     * @throws { BusinessError } 2900004 - Profile is not supported.
     * @throws { BusinessError } 2900099 - Failed to obtain the current transmission information.
     * @throws { BusinessError } 2903004 - Current Transfer Information is empty.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    getCurrentTransferInformation(): Promise<OppTransferInformation>;

    /**
     * 设置最后一个接收文件的URI。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } uri - 最后一个接收文件的URI。
     * @returns { Promise<void> } Promise对象。无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Failed to set the URI of the last file.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    setLastReceivedFileUri(uri: string): Promise<void>;
  }
  /**
   * 枚举，文件传输方向。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 16 dynamic
   * @since 26.1.0 static
   */
  enum DirectionType {
    /**
     * 表示本文件是发送方向。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    OUTBOUND = 0,

    /**
     * 表示本文件是接收方向。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    INBOUND = 1
  }

  /**
   * 枚举，文件传输状态。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 16 dynamic
   * @since 26.1.0 static
   */
  enum TransferStatus {
    /**
     * 表示等待传输。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    PENDING = 0,

    /**
     * 表示正在传输。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    RUNNING = 1,

    /**
     * 表示传输完成。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    FINISH = 2
  }

  /**
   * 枚举，文件传输结果。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 16 dynamic
   * @since 26.1.0 static
   */
  enum TransferResult {
    /**
     * 表示传输成功。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    SUCCESS = 0,

    /**
     * 表示传输文件类型不支持。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    ERROR_UNSUPPORTED_TYPE = 1,

    /**
     * 表示对端设备不能处理该请求。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    ERROR_BAD_REQUEST = 2,

    /**
     * 表示对端设备拒绝接收该文件。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    ERROR_NOT_ACCEPTABLE = 3,

    /**
     * 表示对端设备取消正在传输的该文件。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    ERROR_CANCELED = 4,

    /**
     * 表示对端设备失去连接。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    ERROR_CONNECTION_FAILED = 5,

    /**
     * 表示传输过程中发生错误。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    ERROR_TRANSFER_FAILED = 6,

    /**
     * 表示发生未知错误。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    ERROR_UNKNOWN = 7
  }

  /**
   * 描述文件的传输信息。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 16 dynamic
   * @since 26.1.0 static
   */
  interface OppTransferInformation {
    /**
     * 待传输文件的URI，例如：file://media/Photo/1/IMG_1739266559_000/test.jpg 。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    filePath: string;

    /**
     * 传输对端设备名。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    remoteDeviceName: string;

    /**
     * 传输对端MAC地址。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    remoteDeviceId: string;

    /**
     * 传输方向。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    direction: DirectionType;

    /**
     * 传输状态。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    status: TransferStatus;

    /**
     * 传输结果。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    result: TransferResult;

    /**
     * 当前传输的字节数。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    currentBytes: long;

    /**
     * 需要传输的总字节数。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    totalBytes: long;

    /**
     * 本次传输当前文件序列。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    currentCount: int;

    /**
     * 本次传输总传输的文件个数。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    totalCount: int;
  }

  /**
   * 描述发送的文件信息。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @stagemodelonly
   * @since 16 dynamic
   * @since 26.1.0 static
   */
  interface FileHolder {
    /**
     * 待传输文件的URI，例如：file://media/Photo/1/IMG_1739266559_000/test.jpg 。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    filePath: string;

    /**
     * 待传输文件的大小，以字节为单位。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    fileSize: long;

    /**
     * 待传输文件的已打开的文件描述符（传输过程中需要保持打开直到传输完成）。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 16 dynamic
     * @since 26.1.0 static
     */
    fileFd: int;
  }
}
export default opp;