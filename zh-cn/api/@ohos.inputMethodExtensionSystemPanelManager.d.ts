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
 * @kit IMEKit
 */
import type { Callback } from './@ohos.base';
import { PanelFlag } from '@ohos.inputMethod.Panel';

/**
 * 输入法系统面板管理器。
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
declare namespace inputMethodSystemPanelManager {
  /**
   * 定义输入类型。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum InputMethodInputType {
    
    /**
     * 无输入类型，面板不在任何输入类型中。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NONE = -1,
    /**
     * 相机输入类型。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CAMERA_INPUT = 0,

    /**
     * 安全输入类型。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SECURITY_INPUT = 1,

    /**
     * 语音输入类型。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    VOICE_INPUT = 2,

    /**
     * 悬浮语音输入类型。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FLOATING_VOICE_INPUT = 3
  }

  /**
   * 系统面板状态。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface SystemPanelStatus {
    /**
     * 输入法的输入类型。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    inputType: InputMethodInputType;

    /**
     * 输入法软键盘面板的面板标志。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    panelFlag: PanelFlag;

    /**
     * 系统面板是否需要抬起。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isPanelRaised: boolean;

    /**
     * 系统面板的功能按钮是否需要显示。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    needFuncButton: boolean;
  }

  /**
   * 指示命令可能的数据类型。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type CommandDataType = int | string | boolean;

  /**
   * 订阅输入法应用发送私有数据命令的事件。
   *
   * @param { Callback<Record<string, CommandDataType>> } callback - 当输入法应用发送私有数据命令时触发的回调。
   * @throws { BusinessError } 202 - 非系统应用。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onSystemPrivateCommand(callback: Callback<Record<string, CommandDataType>>): void;

  /**
   * 取消订阅输入法应用发送私有数据命令的事件。
   *
   * @param { Callback<Record<string, CommandDataType>> } [callback] - 当输入法应用发送私有数据命令时触发的回调。
   * @throws { BusinessError } 202 - 非系统应用。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offSystemPrivateCommand(callback?: Callback<Record<string, CommandDataType>>): void;

  /**
   * 订阅系统面板状态变更事件。
   *
   * @param { Callback<SystemPanelStatus> } callback - 当系统面板状态变更时触发的回调。
   * @throws { BusinessError } 202 - 非系统应用。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onSystemPanelStatusChange(callback: Callback<SystemPanelStatus>): void;

  /**
   * 取消订阅系统面板状态变更事件。
   *
   * @param { Callback<SystemPanelStatus> } [callback] - 当系统面板状态变更时触发的回调。
   * @throws { BusinessError } 202 - 非系统应用。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offSystemPanelStatusChange(callback?: Callback<SystemPanelStatus>): void;

  /**
   * 发送私有命令。
   *
   * @param { Record<string, CommandDataType> } commandData - 将要发送的命令数据。最大大小为32KB。
   * @returns { Promise<void> } 函数返回的Promise。
   * @throws { BusinessError } 202 - 非系统应用。
   * @throws { BusinessError } 12800026 - 输入法系统面板错误。可能的原因：
   *     1. 系统面板未连接。2. 由于传输数据量过大或其他原因导致IPC失败。
   *     3. 调用方不是系统面板。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function sendPrivateCommand(commandData: Record<string, CommandDataType>): Promise<void>;

  /**
   * 连接面板与输入法之间的系统通道。
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY
   * @returns { Promise<void> } 函数返回的Promise。
   * @throws { BusinessError } 201 - 权限校验失败。
   * @throws { BusinessError } 202 - 非系统应用。
   * @throws { BusinessError } 12800008 - 输入法管理服务错误。可能的原因：
   *     系统错误，如空指针、IPC异常。
   * @throws { BusinessError } 12800026 - 输入法系统面板错误。可能的原因：
   *     1. 系统面板未连接。2. 由于传输数据量过大或其他原因导致IPC失败。
   *     3. 调用方不是系统面板。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function connectSystemChannel(): Promise<void>;
}

export default inputMethodSystemPanelManager;
