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
 * The **ImageAnimator** component enables images to be played a frame-by-frame basis. The list of images to be played
 * as well as the duration of each image can be configured.
 *
 * > **NOTE**
 * >
 * > - This component supports [WithTheme]{@link ./with_theme} since API version 26.0.0.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface ImageAnimatorInterface {

  /**
   * ImageAnimator is returned.
   *
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (): ImageAnimatorAttribute;
}

/**
 * Image frame information set.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
interface ImageFrameInfo {
  /**
   * Image path. The image format can be .jpg, .jpeg, .svg, .png, .bmp, .webp, .ico, or .heif. The
   * [Resource]{@link Resource} type is supported since API version 9, and the
   * [PixelMap](docroot://reference/apis-arkui/arkui-ts/ts-image-common.md#pixelmap) type is supported since API version
   * 12.
   *
   * **String format description:**
   *
   * - Supports loading local image paths and network image addresses. When a relative path is used to reference a local
   * image, cross-package or cross-module invocation is not supported. Files in the **resources** directory cannot be
   * accessed through relative paths. You need to use the [Resource]{@link Resource} type (such as **$r** or
   * **$rawfile**) to reference them. For details about how to reference images, see
   * [Loading Image Resources](docroot://ui/arkts-graphics-display.md#loading-image-resources).
   * - Supports `http` and `https` network image addresses. When using a network image, you must apply for the
   * `ohos.permission.INTERNET` permission.
   * - Supports strings with the `file://` path prefix. The application sandbox URI is
   * `file://<bundleName>/<sandboxPath>`. For the sandbox path, you need to use
   * [fileUri.getUriFromPath(path)]{@link @ohos.file.fileuri:fileUri.getUriFromPath} to convert the path into an
   * application sandbox URI, and then pass it for display. At the same time, ensure that the files under the directory
   * package path have read permission.
   * - Supports `Base64` strings.
   *
   * @type { string } [since 7 - 8]
   * @type { string | Resource } [since 9 - 11]
   * @type { string | Resource | PixelMap } [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  src: string | Resource | PixelMap;
  /**
   * Image width. When the value is a string, it can represent a numeric value with or without units, for example,
   * **"2"** or **"2px"**.
   *
   * Default value: **0**
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  width?: number | string;
  /**
   * Image height. When the value is a string, it can represent a numeric value with or without units, for example,
   * **"2"** or **"2px"**.
   *
   * Default value: **0**
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  height?: number | string;
  /**
   * Vertical coordinate of the image relative to the upper left corner of the component. When the value is a string, it
   * can represent a numeric value with or without units, for example, **"2"** or **"2px"**.
   *
   * Default value: **0**
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  top?: number | string;
  /**
   * Horizontal coordinate of the image relative to the upper left corner of the component. When the value is a string,
   * it can represent a numeric value with or without units, for example, **"2"** or **"2px"**.
   *
   * Default value: **0**
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  left?: number | string;
  /**
   * Playback duration of each image frame, in milliseconds.
   *
   * Default value: **0**
   *
   * Negative values are not supported. Setting a negative value causes the image to stay on the current frame for a
   * long time, affecting normal playback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  duration?: number;
}

/**
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported.
 *
 * In addition to the [universal events]{@link ./common}, the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class ImageAnimatorAttribute extends CommonMethod<ImageAnimatorAttribute> {
  /**
   * Sets image frame information. Dynamic update is not supported; otherwise, issues such as display disorder, abnormal
   * frame switching, or memory increase may occur. (This attribute is designed for non-dynamic update, and
   * modifications at runtime are not guaranteed to take effect.)
   *
   * @param { Array<ImageFrameInfo> } value - Image frame information. The information of each frame includes the path,
   *     size, position, and playback duration of an image. For details, see [ImageFrameInfo]{@link ImageFrameInfo}.
   *     <br>Default value: **[]**
   *     <br> Note: If the input array is too large, memory usage may increase. Therefore, as the controller of memory
   *     usage, be sure to assess potential memory consumption before passing in the data to avoid issues such as
   *     insufficient memory.
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  images(value: Array<ImageFrameInfo>): ImageAnimatorAttribute;

  /**
   * Sets the playback state of the animation.
   *
   * @param { AnimationStatus } value - Playback state.<br/>Default value: **AnimationStatus.Initial**
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  state(value: AnimationStatus): ImageAnimatorAttribute;

  /**
   * Sets the playback duration. When any frame in [images]{@link ImageAnimatorAttribute#images} has its own duration
   * set, this attribute does not take effect.
   *
   * @param { number } value - Playback duration.<br/>If the value is 0, no image is played.<br/>If the display duration
   *     allocated per image is shorter than a single frame interval, playback anomalies may occur.<br/>If it is set to
   *     a negative value, the default value **1000** is used.<br/>The value change takes effect only at the start of
   *     the next cycle.<br/>Unit: ms<br/>Default value: **1000**
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  duration(value: number): ImageAnimatorAttribute;

  /**
   * Sets the playback direction.
   *
   * @param { boolean } value - Playback direction.<br/>The value **false** indicates that images are played from the
   *     first one to the last one, and **true** indicates that images are played from the last one to the first one.<br
   *     />Which frame is retained after the animation ends is also related to the
   *     [fillMode]{@link ImageAnimatorAttribute#fillMode} attribute. For details, see the description of **fillMode**.<
   *     br/>Default value: **false**
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  reverse(value: boolean): ImageAnimatorAttribute;

  /**
   * Sets whether the image size is fixed at the component size.
   *
   * @param { boolean } value - Whether the image size is fixed at the component size.
   *     <br> **true**: The image size is fixed at the component size. In this case, the width, height, top, and left
   *     attributes of the image are invalid.
   *     <br> **false**: The width, height, top, and left attributes of each image must be set separately. If the image
   *     size does not match the component size, the image will not be stretched.
   *     <br>Default value: **true**
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fixedSize(value: boolean): ImageAnimatorAttribute;

  /**
   * Sets the number of images to be pre-decoded.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 7 and deprecated since API version 9. Currently, no substitute is
   * > available.
   *
   * @param { number } value - Number of images to be pre-decoded. For example, the value **2** indicates that two
   *     images following the currently playing one are pre-decoded, to improve performance.<br/>Default value: **0**
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  preDecode(value: number): ImageAnimatorAttribute;

  /**
   * Sets the status before and after execution of the animation in the current playback direction. The status after
   * execution of the animation is jointly determined by the **fillMode** and **reverse** attributes. For example, if
   * **fillMode** is set to **Forwards**, the target will retain the state defined by the last keyframe encountered
   * during execution. In this case, if **reverse** is set to **false**, the target will retain the state defined by the
   * last keyframe encountered in the forward direction, that is, the last image; if **reverse** is set to **true**, the
   * target will retain the state defined by the last keyframe encountered in the backward direction, that is, the first
   * image.
   *
   * @param { FillMode } value - Status before and after execution of the animation in the current playback direction.
   *     <br>Default value: **FillMode.Forwards**
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fillMode(value: FillMode): ImageAnimatorAttribute;

  /**
   * Sets the number of times that the animation is played.
   *
   * @param { number } value - Number of times that the animation is played. By default, the animation is played once.
   *     The value **-1** indicates that the animation is played for an unlimited number of times. Values less than
   *     **-1** are treated as the default value. When the value is a floating-point number, it is rounded down.<br/>
   *     Default value: **1**
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  iterations(value: number): ImageAnimatorAttribute;

  /**
   * Sets whether the component should automatically pause or resume based on its visibility, using the system's
   * [onVisibleAreaChange]
   * {@link CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback)} event.
   *
   * @param { boolean } monitorInvisibleArea - Whether the component should automatically pause or resume based on its
   *     visibility, using the system's **onVisibleAreaChange**. When this parameter is set to **true**, the component
   *     controls pause and playback based on the visibility determination of the system's
   *     [onVisibleAreaChange]
   *     {@link CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback)}.
   *     When the component's running state is [AnimationStatus]{@link AnimationStatus}.Running, playback is
   *     automatically paused if the component is determined to be invisible, and automatically resumed if it is
   *     determined to be visible. When this parameter is set to **false**, the pause and playback of the component are
   *     not affected by **onVisibleAreaChange**.<br/>Default value: **false** <br/> **NOTE** <br/>When the value of
   *     this parameter is dynamically changed from **true** to **false**, the component is processed based on the
   *     current [AnimationStatus]{@link AnimationStatus} state.<br/> For example, if the current state is **Running**
   *     and playback is paused due to the invisible callback of
   *     [onVisibleAreaChange]
   *     {@link CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback)},
   *     after the value is changed from **true** to **false**, the component resumes playback from the position where
   *     it was last paused.<br/>The pause and playback operations caused by this parameter do not change the
   *     [state]{@link ImageAnimatorAttribute#state} value set by the user.
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 17 dynamic
   */
  monitorInvisibleArea(monitorInvisibleArea: boolean) : ImageAnimatorAttribute;

  /**
   * Triggered when the animation starts to play.
   *
   * @param { function } event - Callback triggered when the animation starts to play.
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onStart(event: () => void): ImageAnimatorAttribute;

  /**
   * Triggered when the animation playback is paused.
   *
   * @param { function } event - Callback triggered when the animation playback is paused.
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onPause(event: () => void): ImageAnimatorAttribute;

  /**
   * Triggered when the animation playback is repeated.
   *
   * @param { function } event - Callback triggered when the animation playback is repeated.
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onRepeat(event: () => void): ImageAnimatorAttribute;

  /**
   * Triggered when the animation is canceled (that is, **state** is set to
   * [AnimationStatus.Initial]{@link AnimationStatus}). After triggering, the image display returns to the first frame (
   * forward playback) or the last frame (reverse playback). The difference from
   * [onFinish]{@link ImageAnimatorAttribute#onFinish} is that **onCancel** returns to the **Initial** state, while
   * **onFinish** corresponds to the state where the animation ends naturally or stops (**Stopped**).
   *
   * @param { function } event - Callback triggered when the animation is canceled (that is, **state** is set to
   *     **AnimationStatus.Initial**). After triggering, the image display returns to the first frame (forward playback)
   *     or the last frame (reverse playback).
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onCancel(event: () => void): ImageAnimatorAttribute;

  /**
   * Triggered when the animation playback completes (all iterations set by **iterations** are played and the animation
   * ends naturally) or stops (**state** is switched to [AnimationStatus.Stopped]{@link AnimationStatus}). When the
   * animation is in the [AnimationStatus.Initial]{@link AnimationStatus} state, returning to the initial state does not
   * trigger this event; instead, **onCancel** is triggered.
   *
   * @param { function } event - Callback triggered when the animation playback completes (all iterations set by
   *     **iterations** are played and the animation ends naturally) or stops (**state** is switched to
   *     **AnimationStatus.Stopped**).
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onFinish(event: () => void): ImageAnimatorAttribute;
}

/**
 * The **ImageAnimator** component enables images to be played a frame-by-frame basis. The list of images to be played
 * as well as the duration of each image can be configured.
 *
 * > **NOTE**
 * >
 * > - This component supports [WithTheme]{@link ./with_theme} since API version 26.0.0.
 *
 * ###### Child Components
 *
 * Not supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const ImageAnimator: ImageAnimatorInterface;

/**
 * Defines ImageAnimator Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const ImageAnimatorInstance: ImageAnimatorAttribute;