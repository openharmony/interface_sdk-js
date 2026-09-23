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
 * | Name | Value | Description |
 * | ---------------- |--| ---------------------------- |
 * | PreviousKeyframe |0| Seeks to the nearest keyframe before the current playback position. |
 * | NextKeyframe |1| Seeks to the nearest keyframe after the current playback position. |
 * | ClosestKeyframe |2| Seeks to the keyframe closest to the current playback position. |
 * | Accurate |3| Seeks precisely to the specified time point, regardless of whether it is a keyframe. |
 * |          |  |This mode is highly accurate but may require decoding more frames. |
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
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface FullscreenInfo {
  /**
   * Whether the current video enters full-screen playback.
   *
   * The value **true** indicates that the video enters full-screen playback, and **false** indicates the opposite.
   *
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fullscreen: boolean;
}

/**
 * Describes the duration of the video.
 * 
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface PreparedInfo {
  /**
   * Duration of the current video.
   *
   * Unit: s
   *
   * Value range: [0,+∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  duration: number;
}

/**
 * Describes the current progress of video playback.
 * 
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While the initial version information of historical anonymous objects is preserved, there may be cases where the
 * > outer element's @since version number is higher than inner element's. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface PlaybackInfo {
  /**
   * Playback progress of the current video.
   * 
   * Unit: s
   * 
   * Value range: [0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
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
   * Whether to configure first-frame display for the current video. When first-frame display is enabled, the previewUri
   * field in the [VideoOptions object]{@link VideoOptions} does not take effect.
   * 
   * **true**: enables first-frame display; **false**: disables first-frame display.
   * 
   * Default value: **false**
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
   * Transition effect when the preview image content of the current video changes. This field does not take effect when
   * **showFirstFrame** is set to true (that is, first-frame display is enabled) or when no valid **previewUri** is
   * configured in the [VideoOptions object]{@link VideoOptions}.
   * 
   * Default value: **ContentTransitionEffect.IDENTITY**
   * 
   * When set to **undefined** or **null**, the value is **ContentTransitionEffect.IDENTITY**.
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
   * Data source of the video, which supports local videos and network videos.
   * 
   * The Resource format can access resource files across packages or modules and is commonly used to access local
   * videos.
   * 
   * - Only resources in the rawfile directory are supported, that is, video files referenced through $rawfile.
   * 
   * The string format can be used to load network videos and local videos, and is commonly used to load network videos.
   * 
   * - Network video URLs are supported. For details about the formats supported by network video URLs, see
   * [Formats Supported by Streaming Media](docroot://media/media/streaming-media-playback-development-guide.md#formats-supported-by-streaming-media).
   * - Strings with the file:// path prefix are supported, that is, the app sandbox URI (see
   * [uriOrPath]{@link @ohos.file.fileuri:fileUri.FileUri#constructor}): **file://<bundleName>/<sandboxPath>**. It is
   * used to read resources in the app sandbox path. Ensure that the files in the directory package path have read
   * permission.
   * 
   * Default value: empty string
   * 
   * Abnormal value: processed as the default value.
   * 
   * **NOTE**
   *
   * The supported video formats are mp4, mkv, and TS.
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
   * **NOTE**
   * 
   * The number format supports only the following values: 0.75, 1.0, 1.25, 1.75, and 2.0. Since API version 22, the
   * values 0.5, 1.5, 3, 0.25, and 0.125 are also supported. Since API version 26.0.0, the supported value range is
   * [0.125, 8].
   * 
   * The string format supports the string forms of the number values: "0.75", "1.0", "1.25", "1.75", and "2.0". Since
   * API version 22, the values "0.5", "1.5", "3", "0.25", and "0.125" are also supported.
   * 
   * Other values, such as "abc" or "1.5+1.5", are processed as abnormal values.
   * 
   * Default value: **1.0 | PlaybackSpeed.Speed_Forward_1_00_X**
   *
   * Abnormal value: processed as the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  currentProgressRate?: number | string | PlaybackSpeed;

  /**
   * Path of the preview image displayed before the video is played.
   * 
   * The string format can be used to load local images and network images.
   * 
   * - Network image URLs are supported.
   * - Relative paths are supported for referencing local images, for example, **previewUri: "common/test.jpg"**. When a
   * relative path is used to reference a local image, cross-package or cross-module calls are not supported.
   * - Strings with the file:// path prefix are supported, that is, the app sandbox URI (see
   * [uriOrPath]{@link @ohos.file.fileuri:fileUri.FileUri#constructor}): **file://<bundleName>/<sandboxPath>**. It is
   * used to read resources in the app sandbox path. Ensure that the files in the directory package path have read
   * permission.
   * 
   * The Resource format can access resource files across packages or modules.
   * 
   * - Resources in the rawfile directory are supported, that is, images referenced through **$rawfile**.
   * - Images in system resources or app resources referenced through **$r** are supported.
   * 
   * Default value: empty string
   * 
   * Abnormal value: processed as the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  previewUri?: string | PixelMap | Resource;

  /**
   * Video controller, which can control the playback state of the video. When **controllerAsync** is set, the
   * **controller** parameter does not take effect.
   *
   * Default value: no video controller is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  controller?: VideoController;
  
  /**
   * Asynchronous video controller, which can control the playback state of the video and obtain the return result
   * through a promise. When **controllerAsync** is set, **controller** is ignored.
   *
   * Default value: empty
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  controllerAsync?: VideoControllerAsync;

  /**
   * Image AI analysis options, which can configure the analysis type or bind an analysis controller. After
   * configuration, the image AI analysis function is enabled, and the analysis process can be controlled through the
   * analysis controller. Pass this parameter when the AI analysis function is required. If it is not passed, the AI
   * analysis function is disabled by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  imageAIOptions?: ImageAIOptions;

  /**
   * First-frame display options for video playback, which can control whether the video supports first-frame display.
   * Pass this parameter when the first-frame display function needs to be enabled. If it is not passed, first-frame
   * display is disabled by default.
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
 * ###### Objects to Import
 *
 * ```ts
 * let controller: VideoController = new VideoController();
 * ```
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
   * > To start playback from a specific time point in the video, disable autoplay, and seek to the target position
   * > before playing after the video is prepared.
   *
   * @param { number } value - Video playback progress position.
   *     <br>Value range: [0, [duration]{@link PreparedInfo}]
   *     <br>If the **value** is greater than **duration**, the progress jumps to the end; if the **value** is less than
   *     0, no progress jump is performed.
   *     <br>Unit: s
   *     <br>Since API version 8, the video seek mode can be set. For details, see
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
   * > **NOTE**
   * >
   * > The built-in full-screen feature of the **Video** component only sets the video content to full screen and
   * > displays the default controller. It does not support displaying a custom title or controller. If additional
   * > functionality is required, implement custom full-screen features.
   *
   * @param { boolean } value - Whether to play in full-screen mode (fill the app window).
   *     <br>The value **true** requests full-screen playback, and **false** does not request full-screen playback.
   *     <br>Default value: **false**
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
   * > **NOTE**
   * >
   * > To start playback from a specific time point in the video, disable autoplay, and seek to the target position
   * > before playing after the video is prepared.
   *
   * @param { number } value - Video playback position.
   *     <br>Value range: [0, [duration]{@link PreparedInfo}]
   *     <br>If **value** is greater than **duration**, the progress jumps to the end. If **value** is less than 0, no
   *     progress jump is performed.
   *     <br>Unit: s
   * @param { SeekMode } seekMode - Seek mode.
   *     <br>Abnormal values **undefined**, **null**, **NaN**, and **Infinity** are processed as **PreviousKeyframe**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  setCurrentTime(value: number, seekMode: SeekMode);

  /**
   * Resets the video player. The current frame is displayed, and playback starts from the beginning when it is played
   * again.
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
 * **VideoControllerAsync** is the asynchronous version of **VideoController**. It can obtain the results of some
 * playback control commands through a promise. It does not support controlling multiple **Video** components at the
 * same time.
 *
 * > **NOTE**
 * >
 * > **VideoControllerAsync** provides the execution results of commands. Compared with **VideoController**, playback
 * > control commands such as [start]{@link VideoController#start}, [pause]{@link VideoController#pause},
 * > [stop]{@link VideoController#stop}, and [reset]{@link VideoControllerAsync#reset} are executed asynchronously. They
 * > return immediately after the request without blocking the current thread, and the execution results can be
 * > processed through the **then** and **catch** methods of the promise.
 *
 * ###### Objects to Import
 *
 * ```ts
 * let controllerAsync: VideoControllerAsync = new VideoControllerAsync();
 * ```
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class VideoControllerAsync {
  /**
   * Constructor of **VideoControllerAsync**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor();
  /**
   * Starts video playback. This API uses a promise to return the result.
   *
   * Calling **start()** before the video is prepared (before the [onPrepared]{@link VideoAttribute#onPrepared} callback
   * is received) will fail.
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
   * Pauses video playback. The current frame is displayed, and playback resumes from the current position when it is
   * played again. This API uses a promise to return the result.
   *
   * This method can be called only in the playing state. Calling **pause()** in other states will fail.
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
   * Stops video playback. The current frame is displayed, and playback starts from the beginning when it is played
   * again. This API uses a promise to return the result.
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
   * Requests full-screen playback. If this API is not called, full-screen playback is not requested by default.
   *
   * > **NOTE**
   * >
   * > The full-screen function built into the **Video** component only sets the video content to full screen and
   * > displays the default controller. It cannot display a custom title or controller. To implement other functions,
   * > you need to implement the full-screen function by yourself.
   *
   * @param { boolean } value - Whether to play in full screen (fill the app window).
   *     <br>**true**: request full-screen playback; **false**: do not request full-screen playback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  requestFullscreen(value: boolean);
  /**
   * Exits full-screen playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  exitFullscreen();
  /**
   * Sets the playback position of the video, with an optional seek mode.
   *
   * > **NOTE**
   * >
   * > To start playback from a specific time point in the video, disable autoplay, and seek to the target position
   * > before playing after the video is prepared.
   *
   * @param { double } value - Video playback progress position.
   *     <br>Value range: [0, [duration]{@link PreparedInfo}]
   *     <br>If the **value** is greater than **duration**, the progress jumps to the end. If the **value** is less than
   *     0, the progress does not jump.
   *     <br>Unit: s
   * @param { SeekMode } [seekMode] - Seek mode.
   *     <br>Abnormal values **undefined**, **null**, **NaN**, and **Infinity** are processed as **PreviousKeyframe**.
   *     <br>Default value: **PreviousKeyframe**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  setCurrentTime(value: double, seekMode?: SeekMode);
  /**
   * Resets the video player. The current frame is displayed, and playback starts from the beginning when it is played
   * again. This API uses a promise to return the result.
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
 * The **Video** component is used to play a video and control its playback state. It supports playback, pause, progress
 * control, playback speed, full-screen switching, and other functions.
 *
 * > **NOTE**
 * >
 * >
 * > The **Video** component provides only simple video playback and cannot support complex video playback control
 * > scenarios. For complex development scenarios, you are advised to use the
 * > [AVPlayer]{@link @ohos.multimedia.media:media.AVPlayer} playback control API and the
 * > [XComponent]{@link ./xcomponent} component.
 * > <br>
 * >
 * > When the **Video** component uses [expandSafeArea]{@link CommonMethod#expandSafeArea} to expand the safe area, the
 * > video display content area of the component cannot be expanded.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
interface VideoInterface {
  /**
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
    * > **NOTE**
    * >
    * > When not muted, the **Video** component acquires audio focus when playback starts. To play without acquiring
    * > audio focus, mute the component before starting playback.
    *
    * @param { boolean } value - Whether the video is muted.
    *     <br>The value **true** means to enable muting, and **false** means to disable muting.
    *     <br>Default value: **false**
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
   * @param { boolean } value - Whether to enable autoplay.
   *     <br>The value **true** means to enable autoplay, and **false** means to disable autoplay.
   *     <br>Default value: **false**
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
    * > **NOTE**
    * >
    * > The style of the control bar built into the **Video** component cannot be customized. To customize the control
    * > bar, set the **controls** attribute to **false** and implement the style or functions of the control bar by
    * > yourself. For details, see
    * > [Video Playback](https://gitcode.com/openharmony/applications_app_samples/tree/master/code/BasicFeature/Media/VideoPlay).
    *
    * @param { boolean } value - Whether to display the control bar for video playback.
    *     <br>**true**: the control bar is displayed; **false**: the control bar is not displayed.
    *     <br>Default value: **true**
    *     <br>**Note:** To use the [enableAnalyzer]{@link VideoAttribute#enableAnalyzer} function for AI analysis, set
    *     this parameter to **false** and use a custom control bar.
    * @returns { VideoAttribute }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  controls(value: boolean): VideoAttribute;

  /**
   * Sets whether to loop the video. This attribute can be dynamically set using
   * [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { boolean } value - Whether to loop a single video.
   *     <br>The value **true** means to enable loop playback, and **false** means to disable loop playback.
   *     <br>Default value: **false**
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
   * @param { ImageFit } value - Video fill mode.
   *     <br>Default value: **ImageFit.Cover**
   *     <br>Restriction: The enum value **MATRIX** in the **ImageFit** type is not supported. If it is set, the effect
   *     is the same as that of **ImageFit.Cover**.
   *     <br>Abnormal value: If an abnormal value such as **undefined** or **null**, or a value outside the
   *     [ImageFit]{@link ImageFit} enum range is set, the effect is the same as that of **ImageFit.Cover**.
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  objectFit(value: ImageFit): VideoAttribute;

  /**
   * Triggered when playback starts. This attribute supports dynamic setting through
   * [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { function } event - Callback triggered when video playback starts. [since 7 - 17]
   * @param { VoidCallback } event - Callback triggered when video playback starts. [since 18]
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onStart(event: VoidCallback): VideoAttribute;

  /**
   * Triggered when video playback is paused. Dynamic property modification using
   * [attributeModifier]{@link CommonMethod#attributeModifier} is supported.
   *
   * @param { function } event - Callback invoked when video playback is paused. [since 7 - 17]
   * @param { VoidCallback } event - Callback invoked when video playback is paused. [since 18]
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onPause(event: VoidCallback): VideoAttribute;

  /**
   * Triggered when video playback is finished. Dynamic property modification using
   * [attributeModifier]{@link CommonMethod#attributeModifier} is supported.
   *
   * @param { function } event - Callback invoked when video playback is finished. [since 7 - 17]
   * @param { VoidCallback } event - Callback invoked when video playback is finished. [since 18]
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onFinish(event: VoidCallback): VideoAttribute;

  /**
   * Triggered when video playback is switched between full-screen mode and non-full-screen mode. Dynamic property
   * modification using [attributeModifier]{@link CommonMethod#attributeModifier} is supported.
   *
   * @param { function } callback - Callback invoked when switching between full-screen playback and non-full-screen
   *     playback states. [since 7 - 17]
   * @param { Callback<FullscreenInfo> } callback - Callback invoked when switching between full-screen playback and non
   *     -full-screen playback states. [since 18]
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onFullscreenChange(callback: Callback<FullscreenInfo>): VideoAttribute;

  /**
   * Triggered when video preparation is complete. Dynamic property modification using
   * [attributeModifier]{@link CommonMethod#attributeModifier} is supported.
   *
   * @param { function } callback - Callback invoked when video preparation is complete. [since 7 - 17]
   * @param { Callback<PreparedInfo> } callback - Callback invoked when video preparation is complete. [since 18]
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onPrepared(callback: Callback<PreparedInfo>): VideoAttribute;

  /**
   * Triggered to report the time information while seeking is in progress (the progress bar is being dragged). Dynamic
   * property modification using [attributeModifier]{@link CommonMethod#attributeModifier} is supported.
   *
   * @param { function } callback - Callback invoked when the progress bar is operated. [since 7 - 17]
   * @param { Callback<PlaybackInfo> } callback - Callback invoked when the progress bar is operated. [since 18]
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onSeeking(callback: Callback<PlaybackInfo>): VideoAttribute;

  /**
   * Triggered to report the time information while seeking is completed. Dynamic property modification using
   * [attributeModifier]{@link CommonMethod#attributeModifier} is supported.
   *
   * @param { function } callback - Callback invoked when the operation progress bar is completed. [since 7 - 17]
   * @param { Callback<PlaybackInfo> } callback - Callback invoked when the operation progress bar is
   *     completed. [since 18]
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onSeeked(callback: Callback<PlaybackInfo>): VideoAttribute;

  /**
   * Triggered when playback progress changes. Dynamic property modification using
   * [attributeModifier]{@link CommonMethod#attributeModifier} is supported.
   *
   * @param { function } callback - Callback invoked when the playback progress changes. [since 7 - 17]
   * @param { Callback<PlaybackInfo> } callback - Callback invoked when the playback progress changes. [since 18]
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onUpdate(callback: Callback<PlaybackInfo>): VideoAttribute;

  /**
   * Triggered when video playback fails. Dynamic property modification using
   * [attributeModifier]{@link CommonMethod#attributeModifier} is supported.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { function } event - Callback invoked when video playback fails. The callback of the
   *     [ErrorCallback]{@link @ohos.base:ErrorCallback} type is used to receive exception information. For details
   *     about the error codes returned by the callback, see
   *     [Video Component Error Codes](docroot://reference/apis-arkui/errorcode-video.md) and
   *     [Media Error Codes](docroot://reference/apis-media-kit/errorcode-media.md). [since 7 - 19]
   * @param { VoidCallback | import('../api/@ohos.base').ErrorCallback } event - Callback invoked when video playback
   *     fails. The callback of the [ErrorCallback]{@link @ohos.base:ErrorCallback} type is used to receive exception
   *     information. For details about the error codes returned by the callback, see
   *     [Video Component Error Codes](docroot://reference/apis-arkui/errorcode-video.md) and
   *     [Media Error Codes](docroot://reference/apis-media-kit/errorcode-media.md). [since 20]
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onError(event: VoidCallback | import('../api/@ohos.base').ErrorCallback): VideoAttribute;

  /**
   * Triggered when the video playback is stopped (after **stop()** is called). Dynamic property modification using
   * [attributeModifier]{@link CommonMethod#attributeModifier} is supported.
   *
   * @param { Callback<void> } event - Callback invoked when video playback stops.
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
   * This attribute cannot be used together with the [overlay]{@link CommonMethod#overlay} attribute. If both are set,
   * the [CustomBuilder](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuilder8) attribute in
   * [overlay]{@link CommonMethod#overlay} becomes invalid.
   *
    * > **NOTE**
    * >
    * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
    *
    * > **NOTE**
    * >
    * > This feature is available only when the custom control bar is used (that is, when the
    * > [controls]{@link VideoAttribute#controls} attribute is set to **false**).
    * > This feature depends on device capabilities.
    *
    * @param { boolean } enable - Whether to enable the AI analysis function.
    *     <br>**true**: enables the AI analysis function; **false**: disables the AI analysis function.
    *     <br>Default value: **false**
    *     <br>**Note:**
    *     <br>This attribute cannot be used together with [overlay]{@link CommonMethod#overlay}. When both are set, the
    *     [CustomBuilder](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuilder8) attribute in
    *     [overlay]{@link CommonMethod#overlay} does not take effect.
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
   * Sets the background color of the **surfaceNode** (the node that renders the video image) in the **Video**
   * component.
   *
   * @param { ColorMetrics } color - Background color of the **surfaceNode** in the **Video** component. Only black
   *     and transparent colors are supported. Other colors are set to black by default.
   *     <br>Default value: **Color.Black**
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
    * > **NOTE**
    * >
    * > When **enabled** is set to **false** and **controls** is set to **true**, you can still use the left and
    * > right arrow keys to fast-forward or rewind the progress bar.
    *
    * @param { boolean } enabled - Whether to enable shortcut key response.
    *     <br>The value **true** means to enable shortcut key response, and **false** means to disable it.
    *     <br>Default value: **false**
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
 * The **Video** component is used to play a video and control its playback state. It supports playback, pause, progress
 * control, playback speed, full-screen switching, and other functions.
 *
 * > **NOTE**
 * >
 * >
 * > The **Video** component provides only simple video playback and cannot support complex video playback control
 * > scenarios. For complex development scenarios, you are advised to use the
 * > [AVPlayer]{@link @ohos.multimedia.media:media.AVPlayer} playback control API and the
 * > [XComponent]{@link ./xcomponent} component.
 * > <br>
 * >
 * > When the **Video** component uses [expandSafeArea]{@link CommonMethod#expandSafeArea} to expand the safe area, the
 * > video display content area of the component cannot be expanded.
 *
 * ###### Required Permissions
 *
 * To use online videos, you must apply for the ohos.permission.INTERNET permission. For details about how to apply for
 * a permission, see [Declaring Permissions](docroot://security/AccessToken/declare-permissions.md).
 *
 * ## Child Components
 *
 * Not supported
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
