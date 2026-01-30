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

/**
 * @file
 * @kit ArkUI
 */

import type BaseContext from './application/BaseContext';
import type { Callback } from './@ohos.base';
import { NodeController } from './arkui/NodeController';
import { typeNode } from './arkui/FrameNode';

/**
 * Picture In Picture Window Manager
 *
 * @namespace PiPWindow
 * @syscap SystemCapability.Window.SessionManager
 * @since 11
 */
/**
 * Picture In Picture Window Manager
 *
 * @namespace PiPWindow
 * @syscap SystemCapability.Window.SessionManager
 * @atomicservice
 * @since 12 dynamic
 */
declare namespace PiPWindow {
  /**
   * If picture-in-picture enabled in current OS.
   *
   * @returns { boolean } true if PictureInPicture enabled, otherwise false
   * @syscap SystemCapability.Window.SessionManager
   * @since 11
   */
  /**
   * If picture-in-picture enabled in current OS.
   *
   * @returns { boolean } true if PictureInPicture enabled, otherwise false
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   */
  function isPiPEnabled(): boolean;

  /**
   * Create picture-in-picture controller
   *
   * @param { PiPConfiguration } config - Params for picture-in-picture controller creation. The config must be valid,
   * the context and componentController in config should not be null. If templateType is specified, make sure
   * it's type of PiPTemplateType. If controlGroups is specified, make sure it correspond to the templateType.
   * @returns { Promise<PiPController> } - The promise returned by the function
   * @throws { BusinessError } 401 - Params error. Possible causes: 1. Mandatory parameters are left unspecified.
   *                                                                2. Incorrect parameter types.
   *                                                                3. Parameter verification failed
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Window.SessionManager
   * @since 11
   */
  /**
   * Create picture-in-picture controller
   *
   * @param { PiPConfiguration } config - Params for picture-in-picture controller creation. The config must be valid,
   * the context and componentController in config should not be null. If templateType is specified, make sure
   * it's type of PiPTemplateType. If controlGroups is specified, make sure it correspond to the templateType.
   * @returns { Promise<PiPController> } - The promise returned by the function
   * @throws { BusinessError } 401 - Params error. Possible causes: 1. Mandatory parameters are left unspecified.
   *                                                                2. Incorrect parameter types.
   *                                                                3. Parameter verification failed
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   */
  function create(config: PiPConfiguration): Promise<PiPController>;

  /**
   * Create picture-in-picture controller
   *
   * @param { PiPConfiguration } config - Params for picture-in-picture controller creation. The config must be valid,
   * the context and componentController in config should not be null. If templateType is specified, make sure
   * it's type of PiPTemplateType. If controlGroups is specified, make sure it correspond to the templateType.
   * @param { typeNode.XComponent } contentNode - Params for picture-in-picture controller creation.
   * Indicates the node which display the content of pip window.
   * @returns { Promise<PiPController> } - The promise returned by the function
   * @throws { BusinessError } 401 - Params error. Possible causes: 1. Mandatory parameters are left unspecified.
   *                                                                2. Incorrect parameter types.
   *                                                                3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   */
  function create(config: PiPConfiguration, contentNode: typeNode.XComponent): Promise<PiPController>;

  /**
   * PiPConfiguration
   *
   * @interface PiPConfiguration
   * @syscap SystemCapability.Window.SessionManager
   * @since 11
   */
  /**
   * PiPConfiguration
   *
   * @interface PiPConfiguration
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   */
  interface PiPConfiguration {
    /**
     * Indicates window context.
     *
     * @type { BaseContext }
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Indicates window context.
     *
     * @type { BaseContext }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    context: BaseContext;

    /**
     * Indicates the origin XComponentController.
     *
     * @type { XComponentController }
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Indicates the origin XComponentController.
     *
     * @type { XComponentController }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    componentController: XComponentController;

    /**
     * Indicates navigation ID.
     *
     * @type { ?string }
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Indicates navigation ID.
     *
     * @type { ?string }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    navigationId?: string;

    /**
     * Indicates the page ID.
     *
     * @type { ?number } The page ID to which the PiP needs to restore.
     * @default -1
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    handleId?: number;

    /**
     * Picture-in-picture template type.
     *
     * @type { ?PiPTemplateType }
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Picture-in-picture template type.
     *
     * @type { ?PiPTemplateType }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    templateType?: PiPTemplateType;

    /**
     * Describes the width of content to be displayed in PiP window. For adjusting PiP window aspect ratio.
     *
     * @type { ?number }
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Describes the width of content to be displayed in PiP window. For adjusting PiP window aspect ratio.
     *
     * @type { ?number }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    contentWidth?: number;

    /**
     * Describes the height of content to be displayed in PiP window. For adjusting PiP window aspect ratio.
     *
     * @type { ?number }
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Describes the height of content to be displayed in PiP window. For adjusting PiP window aspect ratio.
     *
     * @type { ?number }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    contentHeight?: number;

    /**
     * Describes the custom controls to be displayed in PiP window control panel. If the parameter is empty, only mandatory controls are displayed.
     *
     * @type { ?Array<PiPControlGroup> }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    controlGroups?: Array<PiPControlGroup>;

    /**
     * Describes the customUIController by which we can display a custom layout above pip content.
     *
     * @type { ?NodeController }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    customUIController?: NodeController;

    /**
     * Describes the data object shared within the content instance loaded by the window.
     *
     * @type { ?LocalStorage }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 17 dynamic
     */
    localStorage?: LocalStorage;

    /**
     * Describes the default picture-in-picture window size as it is started.
     * 0: not set. 1: small size. 2: large size.
     *
     * @type { ?number }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     */
     defaultWindowSizeType?: number;

    /**
     * Describes whether the picture-in-picture is four-corner absorpted or free to move.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    cornerAdsorptionEnabled?: boolean;
  }

  /**
   * The picture-in-picture window size
   *
   * @interface PiPWindowSize
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15 dynamic
   */
   interface PiPWindowSize {
    /**
     * The width of the picture-in-picture window.
     *
     * @type { number }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     */
    width: number;

    /**
     * The height of the picture-in-picture window.
     *
     * @type { number }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     */
    height: number;

    /**
     * The scale of the picture-in-picture window.
     *
     * @type { number }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     */
    scale: number;
  }

  /**
   * The info of picture-in-picture window
   *
   * @interface PiPWindowInfo
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15 dynamic
   */
  interface PiPWindowInfo {
    /**
     * Indicates target window id.
     *
     * @type { number }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     */
    windowId: number;

    /**
     * The picture-in-picture window size.
     *
     * @type { PiPWindowSize }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     */
    size: PiPWindowSize;
  }

  /**
   * Describe the type of picture-in-picture.
   *
   * @enum { number }.
   * @syscap SystemCapability.Window.SessionManager
   * @since 11
   */
  /**
   * Describe the type of picture-in-picture.
   *
   * @enum { number }.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   */
  enum PiPTemplateType {
    /**
     * Indicates the content to show in picture-in-picture window is video play
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Indicates the content to show in picture-in-picture window is video play
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    VIDEO_PLAY,

    /**
     * Indicates the content to show in picture-in-picture window is video call
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Indicates the content to show in picture-in-picture window is video call
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    VIDEO_CALL,

    /**
     * Indicates the content to show in picture-in-picture window is video meeting
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Indicates the content to show in picture-in-picture window is video meeting
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    VIDEO_MEETING,

    /**
     * Indicates the content to show in picture-in-picture window is video live
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Indicates the content to show in picture-in-picture window is video live
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    VIDEO_LIVE,
  }

  /**
   * Enum for PiP window callback event type.
   *
   * @enum { number }.
   * @syscap SystemCapability.Window.SessionManager
   * @since 11
   */
  /**
   * Enum for PiP window callback event type.
   *
   * @enum { number }.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   */
  enum PiPState {
    /**
     * PiP window is about to start.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * PiP window is about to start.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    ABOUT_TO_START = 1,

    /**
     * PiP window started.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * PiP window started.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    STARTED = 2,

    /**
     * PiP window is about to stop.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * PiP window is about to stop.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    ABOUT_TO_STOP = 3,

    /**
     * PiP window stopped.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * PiP window stopped.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    STOPPED = 4,

    /**
     * Restore the original page from PiP window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Restore the original page from PiP window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    ABOUT_TO_RESTORE = 5,

    /**
     * Error occurs during the lifecycle of PiP window.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Error occurs during the lifecycle of PiP window.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    ERROR = 6,
  }

  /**
   * Describe optional component groups of PiP window.
   *
   * @typedef { VideoPlayControlGroup | VideoCallControlGroup | VideoMeetingControlGroup | VideoLiveControlGroup }
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   */
  type PiPControlGroup = VideoPlayControlGroup | VideoCallControlGroup | VideoMeetingControlGroup | VideoLiveControlGroup;

  /**
   * Enum for video play component groups of PiP window.
   *
   * @enum { number }.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   */
  enum VideoPlayControlGroup {
    /**
     * Previous/Next for video.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    VIDEO_PREVIOUS_NEXT = 101,

    /**
     * Forward/Backward for video.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    FAST_FORWARD_BACKWARD = 102,
  }

  /**
   * Enum for video call component groups of PiP window.
   *
   * @enum { number }.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   */
  enum VideoCallControlGroup {
    /**
     * Turn on/off the microphone.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    MICROPHONE_SWITCH = 201,

    /**
     * Hang up.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    HANG_UP_BUTTON = 202,

    /**
     * Turn on/off the camera
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    CAMERA_SWITCH = 203,

    /**
     * Mute switch.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    MUTE_SWITCH = 204,
  }

  /**
   * Enum for video meeting component groups of PiP window.
   *
   * @enum { number }.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   */
  enum VideoMeetingControlGroup {
    /**
     * Hang up.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    HANG_UP_BUTTON = 301,

    /**
     * Turn on/off the camera
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    CAMERA_SWITCH = 302,

    /**
     * Mute switch.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    MUTE_SWITCH = 303,

    /**
     * Turn on/off the microphone.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    MICROPHONE_SWITCH = 304,
  }

  /**
   * Enum for video Live component groups of PiP window.
   *
   * @enum { number }.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   */
  enum VideoLiveControlGroup {
    /**
     * Video play/pause control.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    VIDEO_PLAY_PAUSE = 401,

    /**
     * Mute switch.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    MUTE_SWITCH = 402,
  }

  /**
   * Enum for control status.
   *
   * @enum { number }.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   */
  enum PiPControlStatus {
    /**
     * The video is in play mode.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    PLAY = 1,

    /**
     * The video is in pause mode.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    PAUSE = 0,

    /**
     * A control with both open and closed states is in an open state.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    OPEN = 1,

    /**
     * A control with both open and closed states is in a close state.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    CLOSE = 0,
  }

  /**
   * Enum for control type.
   *
   * @enum { number }.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   */
  enum PiPControlType {
    /**
     * Video play/pause control.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    VIDEO_PLAY_PAUSE = 0,

    /**
     * Previous video control.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    VIDEO_PREVIOUS = 1,

    /**
     * Next video control.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    VIDEO_NEXT = 2,

    /**
     * Fast-forward control.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    FAST_FORWARD = 3,

    /**
     * Fast-backward control.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    FAST_BACKWARD = 4,

    /**
     * Hang-up control.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    HANG_UP_BUTTON = 5,

    /**
     * Microphone state switching control.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    MICROPHONE_SWITCH = 6,

    /**
     * Camera state switching control.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    CAMERA_SWITCH = 7,

    /**
     * Mute state switching control.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    MUTE_SWITCH = 8,
  }

  /**
   * Describe picture-in-picture action event type.
   *
   * @typedef { PiPVideoActionEvent | PiPCallActionEvent | PiPMeetingActionEvent | PiPLiveActionEvent }
   * @syscap SystemCapability.Window.SessionManager
   * @since 11
   */
  /**
   * Describe picture-in-picture action event type.
   *
   * @typedef { PiPVideoActionEvent | PiPCallActionEvent | PiPMeetingActionEvent | PiPLiveActionEvent }
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   */
  type PiPActionEventType = PiPVideoActionEvent | PiPCallActionEvent | PiPMeetingActionEvent | PiPLiveActionEvent;

  /**
   * Describe picture-in-picture video template action event type.
   *
   * @typedef { 'playbackStateChanged' | 'nextVideo' | 'previousVideo' }
   * @syscap SystemCapability.Window.SessionManager
   * @since 11
   */
  /**
   * Describe picture-in-picture video template action event type.
   *
   * @typedef { 'playbackStateChanged' | 'nextVideo' | 'previousVideo' | 'fastForward' | 'fastBackward' }
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   */
  type PiPVideoActionEvent = 'playbackStateChanged' | 'nextVideo' | 'previousVideo' | 'fastForward' | 'fastBackward';

  /**
   * Describe picture-in-picture call template action event type.
   *
   * @typedef { 'hangUp' | 'micStateChanged' | 'videoStateChanged' }
   * @syscap SystemCapability.Window.SessionManager
   * @since 11
   */
  /**
   * Describe picture-in-picture call template action event type.
   *
   * @typedef { 'hangUp' | 'micStateChanged' | 'videoStateChanged' | 'voiceStateChanged' }
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   */
  type PiPCallActionEvent = 'hangUp' | 'micStateChanged' | 'videoStateChanged' | 'voiceStateChanged';

  /**
   * Describe picture-in-picture meeting template action event type.
   *
   * @typedef { 'hangUp' | 'voiceStateChanged' | 'videoStateChanged' }
   * @syscap SystemCapability.Window.SessionManager
   * @since 11
   */
  /**
   * Describe picture-in-picture meeting template action event type.
   *
   * @typedef { 'hangUp' | 'voiceStateChanged' | 'videoStateChanged' | 'micStateChanged' }
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   */
  type PiPMeetingActionEvent = 'hangUp' | 'voiceStateChanged' | 'videoStateChanged' | 'micStateChanged';

  /**
   * Describe picture-in-picture live template action event type.
   *
   * @typedef { 'playbackStateChanged' }
   * @syscap SystemCapability.Window.SessionManager
   * @since 11
   */
  /**
   * Describe picture-in-picture live template action event type.
   *
   * @typedef { 'playbackStateChanged' | 'voiceStateChanged' }
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   */
  type PiPLiveActionEvent = 'playbackStateChanged' | 'voiceStateChanged';

  /**
   * Describe picture-in-picture control panel action event callback.
   *
   * @typedef { function } ControlPanelActionEventCallback
   * @param { PiPActionEventType } event - the event from controlPanel
   * @param { number } [status] - the status of control button
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   */
  type ControlPanelActionEventCallback = (event: PiPActionEventType, status?: number) => void;

  /**
   * Describe picture-in-picture control event callback.
   *
   * @interface ControlEventParam
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   */
  interface ControlEventParam {
    /**
     * The type of control.
     *
     * @type { PiPControlType }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    controlType: PiPControlType;

    /**
     * The status of control.
     *
     * @type { ?PiPControlStatus }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    status?: PiPControlStatus;
  }

  /**
   * PiPController
   *
   * @interface PiPController
   * @syscap SystemCapability.Window.SessionManager
   * @since 11
   */
  /**
   * PiPController
   *
   * @interface PiPController
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   */
  interface PiPController {

    /**
     * Start picture-in-picture
     * @returns { Promise<void> } - The promise returned by the function
     * @throws { BusinessError } 1300012 - The PiP window state is abnormal.
     * @throws { BusinessError } 1300013 - Failed to create the PiP window.
     * @throws { BusinessError } 1300014 - PiP internal error.
     * @throws { BusinessError } 1300015 - Repeated PiP operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Start picture-in-picture
     * @returns { Promise<void> } - The promise returned by the function
     * @throws { BusinessError } 1300012 - The PiP window state is abnormal.
     * @throws { BusinessError } 1300013 - Failed to create the PiP window.
     * @throws { BusinessError } 1300014 - PiP internal error.
     * @throws { BusinessError } 1300015 - Repeated PiP operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    startPiP(): Promise<void>;

    /**
     * Stop picture-in-picture.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 1300011 - Failed to destroy the PiP window.
     * @throws { BusinessError } 1300012 - The PiP window state is abnormal.
     * @throws { BusinessError } 1300015 - Repeated PiP operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Stop picture-in-picture.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 1300011 - Failed to destroy the PiP window.
     * @throws { BusinessError } 1300012 - The PiP window state is abnormal.
     * @throws { BusinessError } 1300015 - Repeated PiP operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    stopPiP(): Promise<void>;

    /**
     * Set if auto start picture-in-picture when back home
     * @param { boolean } enable - Enable auto start picture-in-picture when back home
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Set if auto start picture-in-picture when back home
     * @param { boolean } enable - Enable auto start picture-in-picture when back home
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    setAutoStartEnabled(enable: boolean): void;

    /**
     * Update source content size to adjust PiP window aspect ratio.
     * @param { number } width - Indicate the width of the content. The width can consist of only digits and above 0.
     * @param { number } height - Indicate the height of the content. The height can consist of only digits and above 0.
     * @throws { BusinessError } 401 - Params error. Possible causes: 1. Mandatory parameters are left unspecified.
     *                                                                2. Incorrect parameter types.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Update source content size to adjust PiP window aspect ratio.
     * @param { int } width - Indicate the width of the content. The width can consist of only digits and above 0.
     * @param { int } height - Indicate the height of the content. The height can consist of only digits and above 0.
     * @throws { BusinessError } 401 - Params error. Possible causes: The PiPController is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    updateContentSize(width: int, height: int): void;

    /**
     * Set dashboard control status.
     * @param { PiPControlType } controlType - Describe picture-in-picture control type.
     * @param { PiPControlStatus } status - Describe picture-in-picture control Status.
     * @throws { BusinessError } 401 - Params error. Possible causes: The PiPController is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    updatePiPControlStatus(controlType: PiPControlType, status: PiPControlStatus): void;

    /**
     * Update the node which display the content of PiP window.
     * @param { typeNode.XComponent } contentNode - The node which display the content of pip window.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 401 - Params error. Possible causes: 1. Mandatory parameters are left unspecified.
     *                                                                2. Incorrect parameter types.
     *                                                                3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300014 - PiP internal error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 24 static
     */
    updateContentNode(contentNode: typeNode.XComponent): Promise<void>;

    /**
     * Set Dashboard control enable status.
     * @param { PiPControlType } controlType - Describe picture-in-picture control type.
     * @param { boolean } enabled - Describe picture-in-picture control enable Status.
     * @throws { BusinessError } 401 - Params error. Possible causes: The PiPController is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 24 static
     */
    setPiPControlEnabled(controlType: PiPControlType, enabled: boolean): void;

    /**
     * Get the info of PiP window.
     * @returns { Promise<PiPWindowInfo> } - The promise used to return the PIP window info.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300014 - PiP internal error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     */
     getPiPWindowInfo(): Promise<PiPWindowInfo>;

     /**
     * Get the PiP switch status of system setting.
     * @returns { Promise<boolean> } - The promise used to return the PIP switch status.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300014 - PiP internal error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     */
     getPiPSettingSwitch(): Promise<boolean>;

    /**
     * Returns a Boolean value that indicates whether picture-in-picture is active
     *
     * Device Behavior Differences:This interface can be normally invoked on phone, tablet, PC and TV devices,
     * but cannot be invoked on other devices because the controller cannot be created on them.
     * 
     * @returns { Promise<boolean> } - The promise used to return the PIP window active status.
     *     True if PIP window is onscreen, otherwise false.
     * @throws { BusinessError } 1300014 - PiP internal error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 23 dynamic
     * @since 24 static
     */
    isPiPActive(): Promise<boolean>;

    /**
     * Register picture-in-picture control event listener.
     * @param { 'stateChange' } type - Registration type, PiP lifecycle state change, 'stateChange'
     * @param { function } callback - Used to handle {'stateChange'} command
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Register picture-in-picture control event listener.
     * @param { 'stateChange' } type - Registration type, PiP lifecycle state change, 'stateChange'
     * @param { function } callback - Used to handle {'stateChange'} command
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'stateChange', callback: (state: PiPState, reason: string) => void): void;

    /**
     * Unregister picture-in-picture lifecycle event listener.
     * @param { 'stateChange' } type - Used to unregister listener for {'stateChange'} command
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Unregister picture-in-picture lifecycle event listener.
     * @param { 'stateChange' } type - Used to unregister listener for {'stateChange'} command
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'stateChange'): void;

    /**
     * Register picture-in-picture control event listener.
     * @param { 'controlPanelActionEvent' } type - Registration type, user action event, 'controlPanelActionEvent'
     * @param { function } callback - Used to handle {'controlPanelActionEvent'} command
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Register picture-in-picture control event listener.
     *
     * @param { 'controlPanelActionEvent' } type - Registration type, user action event, 'controlPanelActionEvent'
     * @param { ControlPanelActionEventCallback } callback - Used to handle {'controlPanelActionEvent'} command.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'controlPanelActionEvent', callback: ControlPanelActionEventCallback): void;

    /**
     * Unregister picture-in-picture lifecycle event listener
     * @param { 'controlPanelActionEvent' } type - Used to unregister listener for {'controlPanelActionEvent'} command
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Unregister picture-in-picture lifecycle event listener
     * @param { 'controlPanelActionEvent' } type - Used to unregister listener for {'controlPanelActionEvent'} command
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'controlPanelActionEvent'): void;

    /**
     * Register picture-in-picture control event listener.
     *
     * @param { 'controlEvent' } type - Registration type, user action event, 'controlEvent'
     * @param { Callback<ControlEventParam> } callback - Used to handle {'controlEvent'} command.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'controlEvent', callback: Callback<ControlEventParam>): void;

    /**
     * Unregister picture-in-picture control event listener
     * @param { 'controlEvent' } type - Used to unregister listener for {'controlEvent'} command
     * @param { Callback<ControlEventParam> } callback - Used to handle {'controlEvent'} command.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'controlEvent', callback?: Callback<ControlEventParam>): void;

    /**
     * Register picture-in-picture window size change event listener
     *
     * @param { 'pipWindowSizeChange' } type - The value is fixed at 'pipWindowSizeChange', indicating the picture-in-picture
     * window size change event.
     * @param { Callback<PiPWindowSize> } callback - Callback used to return the picture-in-picture window size.
     * @throws { BusinessError } 401 - Params error. Possible causes: Callback is already registered.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300014 - PiP internal error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     */
    on(type: 'pipWindowSizeChange', callback: Callback<PiPWindowSize>): void;

    /**
     * Unregister picture-in-picture window size change event listener
     *
     * @param { 'pipWindowSizeChange' } type - The value is fixed at 'pipWindowSizeChange', indicating the picture-in-picture
     * window size change event.
     * @param { Callback<PiPWindowSize> } callback - Callback used to return the picture-in-picture window size.
     * @throws { BusinessError } 401 - Params error. Possible causes: 1. Mandatory parameters are left unspecified.
     *                                                                2. Incorrect parameter types.
     *                                                                3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     */
    off(type: 'pipWindowSizeChange', callback?: Callback<PiPWindowSize>): void;

    /**
     * Register picture-in-picture active status change listener
     *
     * @param { 'activeStatusChange' } type - Registration type, active status change, 'activeStatusChange'
     * @param { Callback<boolean> } callback - Used to handle {'activeStatusChange'} command.
     *     True indicates that the pip is onscreen, and vice verse.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 22 dynamic
     */
    on(type: 'activeStatusChange', callback: Callback<boolean>): void;

    /**
     * Unregister picture-in-picture active status change listener
     *
     * @param { 'activeStatusChange' } type - Registration type, active status change, 'activeStatusChange'
     * @param { Callback<boolean> } [callback] - Used to handle {'activeStatusChange'} command. If not provided,
     *     all callbacks for the given event type will be removed.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 22 dynamic
     */
    off(type: 'activeStatusChange', callback?: Callback<boolean>): void;

    /**
     * Returns a Boolean value that indicates whether picture-in-picture is supported
     *
     * @returns { boolean } - True if picture-in-picture is supported, otherwise false
     * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
     * @throws { BusinessError } 1300014 - PiP internal error.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use
     * @since 18 dynamic
     * @test
     */
    isPiPSupported(): boolean;
  }
}

export default PiPWindow;
