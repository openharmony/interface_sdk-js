/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */

/**
 * Enumerates video seek modes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum SeekMode {
  /**
   * Seek to the nearest previous keyframe.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  PreviousKeyframe,

  /**
   * Seek to the nearest next keyframe.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  NextKeyframe,

  /**
   * Seek to the nearest keyframe.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  ClosestKeyframe,

  /**
   * Seek to a specific frame, regardless of whether the frame is a keyframe.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Accurate,
}

/**
 * Enumerates video playback speed options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum PlaybackSpeed {
  /**
   * 0.75x playback speed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Speed_Forward_0_75_X,

  /**
   * 1x playback speed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Speed_Forward_1_00_X,

  /**
   * 1.25x playback speed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Speed_Forward_1_25_X,

  /**
   * 1.75x playback speed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Speed_Forward_1_75_X,

  /**
   * 2x playback speed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Speed_Forward_2_00_X,
  /**
   * 0.5x playback speed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 22 dynamic
   */
  SPEED_FORWARD_0_50_X = 5,
  /**
   * 1.5x playback speed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 22 dynamic
   */
  SPEED_FORWARD_1_50_X = 6,
  /**
   * 3x playback speed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 22 dynamic
   */
  SPEED_FORWARD_3_00_X = 7,
  /**
   * 0.25x playback speed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 22 dynamic
   */
  SPEED_FORWARD_0_25_X = 8,
  /**
   * 0.125x playback speed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 22 dynamic
   */
  SPEED_FORWARD_0_125_X = 9,
}

/**
 * Describes whether the video is in full-screen playback mode.
 * 
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface FullscreenInfo {
  /**
   * Callback that indicates whether the video playback is in full-screen mode.
   * **true**: The video playback is in full-screen mode.
   * **false**: The video playback is not in full-screen mode.
   * Default value: **false**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 18]
   * @since 18 dynamic
   */
  fullscreen: boolean;
}

/**
 * Describes the duration of the video.
 * 
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface PreparedInfo {
  /**
   * Duration of the video.
   * Unit: second. The value range is all integers. Value range: [0, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 18]
   * @since 18 dynamic
   */
  duration: number;
}

/**
 * Describes the current progress of video playback.
 * 
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface PlaybackInfo {
  /**
   * Callback that provides the current playback progress.
   * 
   * Unit: second
   * 
   * Value range: [0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 18 dynamic
   */
  time: number;
}

/**
 * Defines display options for the first frame of the video.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 26.0.0]
 * @atomicservice
 * @since 18 dynamic
 */
declare interface PosterOptions {
  /**
   * Whether to enable first frame display, showing the first frame of the video as a preview. When first frame display 
   * is enabled, the previewUri field in [VideoOptions]{@link VideoOptions} has no effect.
   * 
   * **true**: Enable first frame display.
   * 
   * **false**: Disable first frame display.
   * 
   * Default value: **false**.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 18 dynamic
   */
  showFirstFrame?: boolean;

  /**
   * Transition effect to apply when the video preview image changes. This parameter does not take effect if 
   * **showFirstFrame** is **true**, or if a valid **previewUri** in [VideoOptions]{@link VideoOptions} is not provided.
   * 
   * Default value: **ContentTransitionEffect.IDENTITY**.
   * 
   * If this parameter is set to **undefined** or **null**, it defaults to **ContentTransitionEffect.IDENTITY**.
   *
   * @default ContentTransitionEffect.IDENTITY
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  contentTransitionEffect?: ContentTransitionEffect;
}

/**
 * Defines the options of the **Video** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface VideoOptions {
  /**
   * Video source, which can be either a local or a network video.
   * 
   * The Resource type allows cross-package and cross-module access to resource files and is commonly used for accessing
   * local videos.
   * 
   * - Only resources in the rawfile folder are supported, which means that you can reference video files only with 
   * **$rawfile**.
   * 
   * The string type is used for loading local videos and, more frequently, network videos.
   * 
   * - Network video URLs are supported.
   * - Strings with the **file://** prefix, that is, 
   * [application sandbox URIs]{@link @ohos.file.fileuri:fileUri.FileUri.constructor}: 
   * **file://`<bundleName>`/`<sandboxPath>`**, are supported. They are used to access resources in the application sandbox 
   * path. Ensure that the application has the read permission to the files in the specified path.
   * 
   * The default value is an empty string.
   * 
   * If an invalid value is passed, the default value will be used.
   * 
   * > **NOTE**
   * >
   * > The supported video formats are MP4, MKV, and TS.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  src?: string | Resource;

  /**
   * Video playback speed.
   * 
   * > **NOTE**
   * >
   * > The value of the number type can only be **0.75**, **1.0**, **1.25**, **1.75**, or **2.0**. Values **0.5**,
   * > **1.5**, **3**, **0.25**, and **0.125** are supported since API version 22.
   * 
   * For the string type, numeric string values, for example, **0.75**, **1.0**, **1.25**, **1.75**, and **2.0**, are 
   * supported. Values **"0.5"**, **"1.5"**, **"3"**, **"0.25"**, and **"0.125"** are supported since API version 22.
   * 
   * Other values, for example, **"abc"** or **"1.5+1.5"**, are considered as invalid values.
   * 
   * Default value: 1.0 | PlaybackSpeed.Speed_Forward_1_00_X
   * 
   * If an invalid value is passed, the default value will be used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  currentProgressRate?: number | string | PlaybackSpeed;

  /**
   * Path of the preview image displayed before the video playback starts. By default, no preview image is displayed.
   * 
   * The string type can be used to load network images and local images.
   * 
   * - URLs are supported for loading online images.
   * - Relative paths are supported for loading local images, for example, **previewUri: "common/test.jpg"**. When using
   * an image referenced using a relative path, the component cannot be called across bundles or modules.
   * - Strings with the **file://** prefix, that is, 
   * [application sandbox URIs]{@link @ohos.file.fileuri:fileUri.FileUri.constructor}: 
   * **file://`<bundleName>`/`<sandboxPath>`**, are supported. They are used to access resources in the application sandbox 
   * path. Ensure that the application has the read permission to the files in the specified path.
   * 
   * The Resource type allows cross-package and cross-module access to resource files.
   * 
   * - Resources in the **rawfile** folder are supported, which means that you can reference image files with 
   * **$rawfile**.
   * - $r can be used to reference images in system resources or application resources.
   * 
   * The default value is an empty string.
   * 
   * If an invalid value is passed, the default value will be used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  previewUri?: string | PixelMap | Resource;

  /**
   * Video controller to control the video playback status.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  controller?: VideoController;
  
  /**
   * controllerAsync of video.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  controllerAsync?: VideoControllerAsync;

  /**
   * AI image analysis options. You can configure the analysis type or bind an analyzer controller through this 
   * parameter.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  imageAIOptions?: ImageAIOptions;

  /**
   * Display options for the first frame of the video.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 18 dynamic
   */
  posterOptions?: PosterOptions;
}

/**
 * # Objects to Import
 * 
 * ```ts
 * let controller: VideoController = new VideoController();
 * ```
 */
/**
 * A **VideoController** object can control one or more **Video** components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare class VideoController {
  /**
   * A constructor used to create a **VideoController** object.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  constructor();

  /**
   * Starts playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  start();

  /**
   * Pauses playback. The current frame is then displayed, and playback will be resumed from this paused position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  pause();

  /**
   * Stops playback. The current frame is then displayed, and playback will restart from the very beginning.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  stop();

  /**
   * Sets the video playback position.
   * 
   * > **NOTE**
   * >
   * > To start playback from a specific position, disable autoplay, wait for video preparation to complete, and then 
   * > seek to the target position.
   *
   * @param { number } value - Video playback position.<br>Value range: [0, [duration]{@link PreparedInfo}]<br>
   *     When the set value is greater than the duration, the progress will jump to the end; when the set value is less
   *     than 0, no progress jump will occur.<br>Unit: second<br>Since API version 8, seek mode configuration is
   *     supported. For details, see
   *     [setCurrentTime<sup>8+</sup>]{@link VideoController#setCurrentTime(value: number, seekMode: SeekMode)}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  setCurrentTime(value: number);

  /**
   * Requests full-screen playback.
   *
   * @param { boolean } value - Whether to request full-screen playback (filling the application window).<br>**true**:
   *     Request full-screen playback.<br>**false**: Do not request full-screen playback.<br>Default value: **false**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  requestFullscreen(value: boolean);

  /**
   * Exits full-screen mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  exitFullscreen();

  /**
   * Sets the video playback position with the specified seek mode.
   *
   * @param { number } value - Video playback position.<br>Value range: [0, [duration]{@link PreparedInfo}]<br>
   *     When the set value is greater than the duration, the progress will jump to the end; when the set value is less
   *     than 0, no progress jump will occur.<br>Unit: second
   * @param { SeekMode } seekMode - Seek mode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  setCurrentTime(value: number, seekMode: SeekMode);

  /**
   * Resets the **AVPlayer** instance of this component, which displays the current frame and sets the playback to start
   * from the beginning for subsequent playbacks.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 12 dynamic
   */
  reset(): void;
}

/**
 * Video playback controller class for asynchronous operations.
 * Provides methods to control video playback, timing, and display mode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class VideoControllerAsync {
  /**
   * Creates a VideoControllerAsync instance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor();
  /**
   * Starts video playback asynchronously.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  start(): Promise<void>;
  /**
   * Pauses video playback asynchronously.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  pause(): Promise<void>;
  /**
   * Stops video playback asynchronously.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  stop(): Promise<void>;
  /**
   * Requests fullscreen display for the video.
   *
   * @param { boolean } value - true to enter fullscreen, false otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  requestFullscreen(value: boolean);
  /**
   * Exits fullscreen display mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  exitFullscreen();
  /**
   * Sets the current playback time with specified seek mode.
   *
   * @param { double } value - The target time in seconds
   *     <br>Unit: Seconds. The value must be greater than or equal to 0, The maximum value is the total duration of the
   *     video. If the duration exceeds the maximum value, the system jumps to the end of the video.
   * @param { SeekMode } [seekMode] - The seek mode to use for time adjustment.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  setCurrentTime(value: double, seekMode?: SeekMode);
  /**
   * Resets the video controller asynchronously.
   * Restores the controller to its initial state.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  reset(): Promise<void>;
}

/**
 * Defines the video interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
interface VideoInterface {
  /**
   * Defines the constructor of video component.
   *
   * @param { VideoOptions } value - Video information.
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (value: VideoOptions): VideoAttribute;
}

/**
 * In addition to the [universal attributes]{@link CommonMethod}, the following attributes are supported.
 *
 * In addition to the [universal events]{@link CommonMethod}, the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare class VideoAttribute extends CommonMethod<VideoAttribute> {
  /**
   * Sets whether to mute the video. This attribute can be dynamically set using
   * [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { boolean } value - Whether to mute the video.<br>**true**: Mute the video.<br>**false**: Unmute the
   *     video.<br>Default value: **false**.
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  muted(value: boolean): VideoAttribute;

  /**
   * Sets whether to enable autoplay. This attribute can be dynamically set using
   * [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { boolean } value - Whether to enable autoplay.<br>**true**: Enable autoplay.<br>**false**: Disable
   *     autoplay.<br>Default value: **false**.
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  autoPlay(value: boolean): VideoAttribute;

  /**
   * Sets whether to display the video playback control bar. This attribute can be dynamically set using
   * [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { boolean } value - Whether to display the video playback control bar.<br>**true**: Display the video
   *     playback control bar.<br>**false**: Do not display the video playback control bar.<br>Default value: **true**
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  controls(value: boolean): VideoAttribute;

  /**
   * Sets whether to repeat the video. This attribute can be dynamically set using
   * [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { boolean } value - Whether to repeat the video.<br>**true**: Repeat the video.<br>**false**: Do not repeat
   *     the video.<br>Default value: **false**.
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  loop(value: boolean): VideoAttribute;

  /**
   * Sets the fill mode for the video content. This attribute can be dynamically set using
   * [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { ImageFit } value - Fill mode of the video content.<br>Default value: **Cover**<br>Constraints: The
   *     enumerated value **Matrix** in **ImageFit** is not supported and will behave as **Cover**.<br>Invalid values,
   *     including **undefined**, **null**, and values outside the [ImageFit]{@link enums:ImageFit} enumeration range,
   *     will result in an effect the same as **Cover**.
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  objectFit(value: ImageFit): VideoAttribute;

  /**
   * Called when the video is played.
   * Anonymous Object Rectification.
   *
   * @param { function } event [since 7 - 17]
   * @param { VoidCallback } event [since 18]
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onStart(event: VoidCallback): VideoAttribute;

  /**
   * Called when the video is paused.
   * Anonymous Object Rectification.
   *
   * @param { function } event [since 7 - 17]
   * @param { VoidCallback } event [since 18]
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onPause(event: VoidCallback): VideoAttribute;

  /**
   * Called when the video playback ends.
   * Anonymous Object Rectification.
   *
   * @param { function } event [since 7 - 17]
   * @param { VoidCallback } event [since 18]
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onFinish(event: VoidCallback): VideoAttribute;

  /**
   * Called when the video enters and exits the full screen.
   * Anonymous Object Rectification.
   *
   * @param { function } callback [since 7 - 17]
   * @param { Callback<FullscreenInfo> } callback [since 18]
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onFullscreenChange(callback: Callback<FullscreenInfo>): VideoAttribute;

  /**
   * Called when the video preparation is complete.
   * Anonymous Object Rectification.
   *
   * @param { function } callback [since 7 - 17]
   * @param { Callback<PreparedInfo> } callback [since 18]
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onPrepared(callback: Callback<PreparedInfo>): VideoAttribute;

  /**
   * Called when the time information is reported when the progress bar process is operated.
   * Anonymous Object Rectification.
   *
   * @param { function } callback [since 7 - 17]
   * @param { Callback<PlaybackInfo> } callback [since 18]
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onSeeking(callback: Callback<PlaybackInfo>): VideoAttribute;

  /**
   * Called when the playback time information is reported after the operation progress bar is completed.
   * Anonymous Object Rectification.
   *
   * @param { function } callback [since 7 - 17]
   * @param { Callback<PlaybackInfo> } callback [since 18]
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onSeeked(callback: Callback<PlaybackInfo>): VideoAttribute;

  /**
   * Called when the playback progress changes.
   * Anonymous Object Rectification.
   *
   * @param { function } callback [since 7 - 17]
   * @param { Callback<PlaybackInfo> } callback [since 18]
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onUpdate(callback: Callback<PlaybackInfo>): VideoAttribute;

  /**
   * Called when playback fails.
   *
   * @param { function } event [since 7 - 19]
   * @param { VoidCallback | import('../api/@ohos.base').ErrorCallback } event [since 20]
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onError(event: VoidCallback | import('../api/@ohos.base').ErrorCallback): VideoAttribute;

  /**
   * Called when the video is stopped.
   *
   * @param { Callback<void> } event
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onStop(event: Callback<void>): VideoAttribute;

  /**
   * Sets whether to enable the AI image analyzer, which supports subject recognition, text recognition, and object
   * lookup. This attribute can be dynamically set using [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * After this feature is enabled, the video automatically enters an analysis state to process the current frame when
   * playback is paused, and exits the analysis state when playback is resumed.
   *
   * Note that if this attribute and the [overlay]{@link CommonMethod#overlay} attribute are both set,
   * [CustomBuilder]{@link CustomBuilder} specified in [overlay]{@link CommonMethod} has no effect.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * After this feature is enabled, the video automatically enters an analysis state to process the current frame when
   * playback is paused, and exits the analysis state when playback is resumed.
   *
   * @param { boolean } enable - Whether to enable the AI image analyzer.<br>**true**: Enable the AI image analyzer.
   *     **false**: Disable the AI image analyzer.<br>Default value: **false**
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  enableAnalyzer(enable: boolean): VideoAttribute;
 
  /**
   * Sets the AI image analysis types, including subject recognition, text recognition, and object lookup. This
   * attribute can be dynamically set using [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { ImageAnalyzerConfig } config - AI image analysis types.
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  analyzerConfig(config: ImageAnalyzerConfig): VideoAttribute;

  /**
   * Sets the background color of the surface held by Video (only supports Color.Black and Color.Transparent). The default
   * value is Color.Black.
   *
   * @param { ColorMetrics } color
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 15 dynamic
   */
  surfaceBackgroundColor(color: ColorMetrics): VideoAttribute;

  /**
   * Sets whether the component responds to keyboard shortcuts when it has focus. This attribute can be dynamically set
   * using [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * Currently, the component can respond to the following keys when it is in focus: spacebar for playing or pausing the
   * video, up or down arrow key for adjusting the video volume, and left or right arrow key for fast forwarding or
   * rewinding the video.
   *
   * @param { boolean } enabled - Whether the component responds to keyboard shortcuts when it has focus.<br>**true**:
   *     The component responds to keyboard shortcuts when it has focus.<br>**false**: The component does not respond to
   *     keyboard shortcuts when it has focus.<br>Default value: **false**.
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 15 dynamic
   */
  enableShortcutKey(enabled: boolean): VideoAttribute;
}

/**
 * The **Video** component is used to play a video and control its playback.
 * > **NOTE**
 * >
 * > The **Video** component provides only simple video playback features. For complex video playback control
 * > scenarios, consider using the [AVPlayer]{@link @ohos.multimedia.media:media.AVPlayer} APIs in conjunction with the
 * > [XComponent]{@link XComponent} component.
 * > When using **expandSafeArea** to extend into safe areas, the **Video** component's content display area does not
 * > support expansion.
 * >
 * > **Required Permissions**
 * >
 * > To use online videos, you must apply for the ohos.permission.INTERNET permission. For details about how to apply
 * > for a permission, see [Declaring Permissions](docroot://security/AccessToken/declare-permissions.md).
 * >
 * > **Child Components**
 * >
 * > Not supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare const Video: VideoInterface;

/**
 * Defines Video Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare const VideoInstance: VideoAttribute;
