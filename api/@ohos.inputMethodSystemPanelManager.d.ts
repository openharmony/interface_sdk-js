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
 * @brief This module provides the input method system panel management functions, which are used for communication and
 * state synchronization between the input method system panel and the system-default input method application.
 * 
 * > **NOTE**
 * >
 * > The APIs provided by this module are system APIs.
 * >
 * > This module supports only the stage model.
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
declare namespace inputMethodSystemPanelManager {
  /**
   * @brief Enumerates input types, which are used to identify the input modes supported by the system panel.
   * Different input types correspond to different input scenarios and panel layouts.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum InputMethodInputType {
    
    /**
     * @brief No input.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NONE = -1,
    /**
     * @brief Camera input, indicating that the system is in camera input mode. This type is typically used for capture input scenarios.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CAMERA_INPUT = 0,

    /**
     * @brief Security input, indicating that the system panel is in secure input mode. This type is used for entering sensitive information such as passwords.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SECURITY_INPUT = 1,

    /**
     * @brief Voice input, indicating that the system panel is in voice input mode. This type is used for voice-to-text input.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    VOICE_INPUT = 2,

    /**
     * @brief Floating voice input, indicating that the system panel is in floating voice input mode and provides the voice input function in a floating window.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FLOATING_VOICE_INPUT = 3
  }

  /**
   * @brief System panel status.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface SystemPanelStatus {
    /**
     * @brief The input type of the input method.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    inputType: InputMethodInputType;

    /**
     * @brief The panel flag of the input method's soft keyboard panel.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    panelFlag: PanelFlag;

    /**
     * @brief Whether the system panel needs to be raised.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isPanelRaised: boolean;

    /**
     * @brief Whether the system panel's function button is needed.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    needFuncButton: boolean;
  }

  /**
   * @brief Describes the private data type, which varies depending on its function.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type CommandDataType = int | string | boolean;

  /**
   * @brief Subscribe to the event when the input method application sends private data commands.
   *
   * @param { Callback<Record<string, CommandDataType>> } callback - Callback function, which is triggered
   *  when the input method application or system service sends a private data command.
   * @throws { BusinessError } 202 - not system application.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onSystemPrivateCommand(callback: Callback<Record<string, CommandDataType>>): void;

  /**
   * @brief Unsubscribes from events that the system-default input method application sends a private data command.
   *
   * @param { Callback<Record<string, CommandDataType>> } [callback] - Callback function.
   *  If this parameter is left empty, all callbacks will be unsubscribed from.
   * @throws { BusinessError } 202 - not system application.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offSystemPrivateCommand(callback?: Callback<Record<string, CommandDataType>>): void;

  /**
   * @brief Subscribes to system panel state change events.
   *
   * @param { Callback<SystemPanelStatus> } callback - Callback function, which is triggered when the system panel state changes.
   * @throws { BusinessError } 202 - not system application.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onSystemPanelStatusChange(callback: Callback<SystemPanelStatus>): void;

  /**
   * @brief Unsubscribes from system panel state change events.
   *
   * @param { Callback<SystemPanelStatus> } [callback] - Callback function. If this parameter is left empty, all callbacks will be unsubscribed from.
   * @throws { BusinessError } 202 - not system application.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offSystemPanelStatusChange(callback?: Callback<SystemPanelStatus>): void;

  /**
   * @brief Sends a private command to the system-default input method application.
   *
   * @param { Record<string, CommandDataType> } commandData - Command data to be sent. The maximum size is 32 KB, and a maximum of five commands are allowed.
   * @returns { Promise<void> } Promise that returns no value.
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
   * @brief Connects to the system channel for communication between the input method system panel and
   * the system-default input method application. This API can be called only by the input method system panel.
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY
   * @returns { Promise<void> } Promise that returns no value.
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
