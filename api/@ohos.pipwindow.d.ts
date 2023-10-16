/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type BaseContext from './application/BaseContext';
import type Callback from './@ohos.base';

/**
 * pipWindow manager
 *
 * @namespace pipWindow
 * @syscap SystemCapability.Window.SessionManager
 * @since 11
 */
declare namespace pipWindow {
  /**
   * If picture-in-picture enabled in current OS.
   *
   * @returns { boolean } true if PictureInPicture enabled, otherwise false
   * @syscap SystemCapability.Window.SessionManager
   * @since 11
   */
  function isPictureInPictureEnabled(): boolean;

  /**
   * create picture-in-picture controller
   *
   * @param { PictureInPictureConfiguration } config - Params for picture-in-picture controller creation
   * @returns { Promise<PictureInPictureController> } - The promise returned by the function
   * @throws { BusinessError } 401 - Params error, invalid or illegal parameter in PictureInPictureConfiguration
   * @throws { BusinessError } 801 - Capability not supported
   * @syscap SystemCapability.Window.SessionManager
   * @since 11
   */
  function create(config: PictureInPictureConfiguration): Promise<PictureInPictureController>;

  /**
   * PictureInPictureConfiguration
   *
   * @interface PictureInPictureConfiguration
   * @syscap SystemCapability.Window.SessionManager
   * @since 11
   */
  interface PictureInPictureConfiguration {
    /**
     * Indicates window context.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    ctx: BaseContext;

    /**
     * Indicates the origin XComponentController.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    componentController: XComponentController;

    /**
     * Indicates navigation ID.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    navigationId?: string;

    /**
     * Picture-in-picture template type.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    templateType?: PictureInPictureTemplateType;

    /**
     * Describes the width of content to be displayed in pipWindow. For adjusting pipWindow aspect ratio.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    contentWidth?: number;

    /**
     * Describes the height of content to be displayed in pipWindow. For adjusting pipWindow aspect ratio.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    contentHeight?: number;
  }

  /**
   * Describe the type of picture-in-picture.
   *
   * @enum { number }.
   * @syscap SystemCapability.Window.SessionManager
   * @since 11
   */
  enum PictureInPictureTemplateType {
    /**
     * Indicates the content to show in picture-in-picture window is video play
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */

    VIDEO_PLAY,
    /**
     * Indicates the content to show in picture-in-picture window is video call
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    VIDEO_CALL,

    /**
     * Indicates the content to show in picture-in-picture window is video meeting
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    VIDEO_MEETING,
  }

  /**
   * Enum for pipWindow callback event type.
   *
   * @enum { number }.
   * @syscap SystemCapability.Window.SessionManager
   * @since 11
   */
  enum PictureInPictureState {
    /**
     * pipWindow is about to start.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    WILL_START = 1,

    /**
     * pipWindow started.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    STARTED = 2,

    /**
     * pipWindow is about to stop.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    WILL_STOP = 3,

    /**
     * pipWindow stopped.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    STOPPED = 4,

    /**
     * restore the original page from pipWindow
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    RESTORE = 5,

    /**
     * error message during start/stop.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    ERROR = 6,
  }

  /**
   * Describe picture-in-picture action event type.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 11
   */
  type PictureInPictureActionEventType =
    PictureInPictureVideoActionEvent | PictureInPictureCallActionEvent | PictureInPictureMeetingActionEvent;

  type PictureInPictureVideoActionEvent = 'playbackStateChanged' | 'nextVideo' | 'previousVideo';

  type PictureInPictureCallActionEvent = 'hangUp';

  type PictureInPictureMeetingActionEvent = 'hangUp';

  /**
   * PictureInPictureController
   *
   * @interface PictureInPictureController
   * @syscap SystemCapability.Window.SessionManager
   * @since 11
   */
  interface PictureInPictureController {

    /**
     * Start picture-in-picture
     * @returns { Promise<void> } - The promise returned by the function
     * @throws { BusinessError } 1300012 - If pip window state is abnormal.
     * @throws { BusinessError } 1300013 - Create pip window failed.
     * @throws { BusinessError } 1300014 - Error when load pipWindow content or show pipWindow
     * @throws { BusinessError } 1300015 - If window has created
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    startPictureInPicture(): Promise<void>;

    /**
     * Stop picture-in-picture.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 1300011 - Stop pip window failed.
     * @throws { BusinessError } 1300012 - If pip window state is abnormal.
     * @throws { BusinessError } 1300015 - If window is stopping
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    stopPictureInPicture(): Promise<void>;

    /**
     * Set if auto start picture-in-picture when back home
     * @param { boolean } enable - Enable auto start picture-in-picture when back home
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    setAutoStartEnabled(enable: boolean): void;

    /**
     * Update source content size to adjust pipWindow aspect ratio.
     * @param { number } width - Indicates the width of the content.
     * @param { number } height - Indicates the height of the content.
     * @throws { BusinessError } 401 - Params error, invalid width or height.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    updateContentSize(width: number, height: number): void;

    /**
     * Register picture-in-picture control event listener.
     * @param { 'stateChange' } type - Registration type, pip lifecycle state change, 'stateChange'
     * @param { function } callback - Used to handle {'stateChange'} command
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    on(type: 'stateChange', callback: (state: PictureInPictureState, reason: string) => void): void;

    /**
     * Unregister picture-in-picture lifecycle event listener.
     * @param { 'stateChange' } type - Used to unregister listener for {'stateChange'} command
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    off(type: 'stateChange'): void;

    /**
     * Register picture-in-picture control event listener.
     * @param { 'controlPanelActionEvent' } type - Registration type, user action event, 'controlPanelActionEvent'
     * @param { function } callback - Used to handle {'controlPanelActionEvent'} command
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    on(type: 'controlPanelActionEvent', callback: (event: PictureInPictureActionEventType) => void): void;

    /**
     * Unregister picture-in-picture lifecycle event listener
     * @param { 'controlPanelActionEvent' } type - Used to unregister listener for {'controlPanelActionEvent'} command
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    off(type: 'controlPanelActionEvent'): void;
  }
}

export default pipWindow;