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
 * Input method system panel manager.
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
declare namespace inputMethodSystemPanelManager {
  /**
   * Defines the input type.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum InputMethodInputType {
    
    /**
     * No input type, the panel is not in any input type.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NONE = -1,
    /**
     * Camera input type.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CAMERA_INPUT = 0,

    /**
     * Security input type.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SECURITY_INPUT = 1,

    /**
     * Voice input type.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    VOICE_INPUT = 2,

    /**
     * Floating voice input type.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FLOATING_VOICE_INPUT = 3
  }

  /**
   * System panel status.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface SystemPanelStatus {
    /**
     * The input type of the input method.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    inputType: InputMethodInputType;

    /**
     * The panel flag of the input method's soft keyboard panel.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    panelFlag: PanelFlag;

    /**
     * Whether the system panel needs to be raised.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isPanelRaised: boolean;

    /**
     * Whether the system panel's function button is needed.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    needFuncButton: boolean;
  }

  /**
   * Indicates the possible data types of the command.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type CommandDataType = int | string | boolean;

  /**
   * Subscribe to the event when the input method application sends private data commands.
   *
   * @param { Callback<Record<string, CommandDataType>> } callback - callback triggered when
   *      an input method application sends a private data command.
   * @throws { BusinessError } 202 - not system application.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onSystemPrivateCommand(callback: Callback<Record<string, CommandDataType>>): void;

  /**
   * Unsubscribe from the event when the input method application sends private data commands.
   *
   * @param { Callback<Record<string, CommandDataType>> } [callback] - callback triggered when
   *      an input method application sends a private data command.
   * @throws { BusinessError } 202 - not system application.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offSystemPrivateCommand(callback?: Callback<Record<string, CommandDataType>>): void;

  /**
   * Subscribe to the system panel status change event.
   *
   * @param { Callback<SystemPanelStatus> } callback - callback triggered when the system panel status changes.
   * @throws { BusinessError } 202 - not system application.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onSystemPanelStatusChange(callback: Callback<SystemPanelStatus>): void;

  /**
   * Unsubscribe from the system panel status change event.
   *
   * @param { Callback<SystemPanelStatus> } [callback] - callback triggered when the system panel status changes.
   * @throws { BusinessError } 202 - not system application.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offSystemPanelStatusChange(callback?: Callback<SystemPanelStatus>): void;

  /**
   * Send private command.
   *
   * @param { Record<string, CommandDataType> } commandData - command data which will be sent. Max size 32KB.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 12800026 - input method system panel error. Possible causes:
   *     1. the system panel not connected. 2. ipc failed due to the large amount of data transferred or other reasons.
   *     3. the caller is not system panel.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function sendPrivateCommand(commandData: Record<string, CommandDataType>): Promise<void>;

  /**
   * Connect system channel for the panel and input method.
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - permissions check fails.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible causes:
   *     a system error, such as null pointer, IPC exception.
   * @throws { BusinessError } 12800026 - input method system panel error. Possible causes:
   *     1. the system panel not connected. 2. ipc failed due to the large amount of data transferred or other reasons.
   *     3. the caller is not system panel.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function connectSystemChannel(): Promise<void>;
}

export default inputMethodSystemPanelManager;
