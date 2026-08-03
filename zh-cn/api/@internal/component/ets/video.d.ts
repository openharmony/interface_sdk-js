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
 * 视频跳转模式选项。
 * 
 * | 名称             |值| 说明                         |
 * | ---------------- |--| ---------------------------- |
 * | PreviousKeyframe |0| 跳转到当前播放位置之前最近的关键帧。   |
 * | NextKeyframe     |1| 跳转到当前播放位置之后最近的关键帧。   |
 * | ClosestKeyframe  |2| 跳转到距离当前播放位置最近的关键帧。         |
 * | Accurate         |3| 精准跳转到指定时间点，不论是否为关键帧。精度高但可能需要解码更多帧。 |
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
 * 视频播放倍速选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum PlaybackSpeed {
  /**
   * 0.75倍速播放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Speed_Forward_0_75_X,

  /**
   * 1倍速播放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Speed_Forward_1_00_X,

  /**
   * 1.25倍速播放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Speed_Forward_1_25_X,

  /**
   * 1.75倍速播放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Speed_Forward_1_75_X,

  /**
   * 2倍速播放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Speed_Forward_2_00_X,
  /**
   * 0.5倍速播放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 22 dynamic
   */
  SPEED_FORWARD_0_50_X = 5,
  /**
   * 1.5倍速播放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 22 dynamic
   */
  SPEED_FORWARD_1_50_X = 6,
  /**
   * 3倍速播放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 22 dynamic
   */
  SPEED_FORWARD_3_00_X = 7,
  /**
   * 0.25倍速播放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 22 dynamic
   */
  SPEED_FORWARD_0_25_X = 8,
  /**
   * 0.125倍速播放。
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
 * 用于描述当前视频是否进入全屏播放状态。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface FullscreenInfo {
  /**
   * 当前视频是否进入全屏播放状态。
   * 
   * true：进入全屏播放状态；false：未进入全屏播放状态。
   * 
   * 默认值：false
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
 * 用于描述当前视频的时长。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface PreparedInfo {
  /**
   * 当前视频的时长。
   * 
   * 单位：s
   * 
   * 取值范围：[0,+∞)
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
 * 用于描述当前视频播放的进度。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface PlaybackInfo {
  /**
   * 当前视频播放的进度。
   * 
   * 单位：s
   * 
   * 取值范围：[0,+∞)
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
 * 用于描述当前视频是否配置首帧送显。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 26.0.0]
 * @atomicservice
 * @since 18 dynamic
 */
declare interface PosterOptions {
  /**
   * 当前视频是否配置首帧送显，当开启首帧送显时，
   * [VideoOptions对象](docroot://reference/apis-arkui/arkui-ts/ts-media-components-video.md#videooptions对象说明)中的previewUri
   * 字段不生效。
   * 
   * true：开启首帧送显；false：关闭首帧送显。
   * 
   * 默认值：false
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
   * 当前视频的预览图内容变化时的转场动效。配置showFirstFrame为true（即配置开启首帧送显时），或未配置有效的
   * [VideoOptions对象](docroot://reference/apis-arkui/arkui-ts/ts-media-components-video.md#videooptions对象说明)的previewUri
   * 时，该字段不生效。
   * 
   * 默认值：ContentTransitionEffect.IDENTITY
   * 
   * 设置为undefined或null时，取值为ContentTransitionEffect.IDENTITY。
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
 * 定义Video的具体配置参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface VideoOptions {
  /**
   * 视频的数据源，支持本地视频和网络视频。
   * 
   * Resource格式可以跨包/跨模块访问资源文件，常用于访问本地视频。
   * 
   * - 仅支持rawfile文件下的资源，即通过$rawfile引用视频文件。
   * 
   * string格式可用于加载网络视频和本地视频，常用于加载网络视频。
   * 
   * - 支持网络视频地址，网络视频地址支持的格式见[流媒体支持的格式](docroot://media/media/streaming-media-playback-development-guide.md#流媒体支持的格式)。
   * - 支持file://路径前缀的字符串，即应用沙箱URI（见[uriOrPath]{@link @ohos.file.fileuri:fileUri.FileUri#constructor}）：file://<bundleName
   * >/<sandboxPath>。用于读取应用沙箱路径内的资源。需要保证目录包路径下的文件有可读权限。
   * 
   * 默认值：空字符串
   * 
   * 异常值：按默认值处理。
   * 
   * **说明：**
   * 
   * 视频支持的格式是：mp4、mkv、TS。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  src?: string | Resource;

  /**
   * 视频播放倍速。
   * 
   * **说明：**
   * 
   * number格式取值仅支持：0.75、1.0、1.25、1.75、2.0。从API version 22开始，新增支持取值0.5，1.5，3，0.25和0.125。从API version 26.0.0开始，支持取值范围：
   * [0.125, 8]。
   * 
   * string格式支持number格式取值的字符串形式："0.75"，"1.0"，"1.25"，"1.75"，"2.0"。从API version 22开始，新增支持取值"0.5"，"1.5"，"3"，"0.25"和"0.125"。
   * 
   * 除此之外的取值，例如"abc"或"1.5+1.5"会按照异常值处理。
   * 
   * 默认值：1.0 | PlaybackSpeed.Speed_Forward_1_00_X
   * 
   * 异常值：按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  currentProgressRate?: number | string | PlaybackSpeed;

  /**
   * 视频未播放时的预览图片路径。
   * 
   * string格式可用于加载本地图片和网络图片，
   * 
   * - 支持网络图片地址。
   * - 支持相对路径引用本地图片，例如：previewUri: “common/test.jpg”。当使用相对路径引用本地图片时，不支持跨包/跨模块调用。
   * - 支持file://路径前缀的字符串，即应用沙箱URI（见[uriOrPath]{@link @ohos.file.fileuri:fileUri.FileUri#constructor}）：file://<bundleName
   * >/<sandboxPath>。用于读取应用沙箱路径内的资源。需要保证目录包路径下的文件有可读权限。
   * 
   * Resource格式可以跨包/跨模块访问资源文件。
   * 
   * - 支持rawfile文件下的资源，即通过$rawfile引用图片。
   * - 支持通过$r引用系统资源或者应用资源中的图片。
   * 
   * 默认值：空字符串
   * 
   * 异常值：按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  previewUri?: string | PixelMap | Resource;

  /**
   * 设置视频控制器，可以控制视频的播放状态。当设置了controllerAsync时，controller参数设置不生效。
   * 
   * 默认值：不设置视频控制器。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  controller?: VideoController;
  
  /**
   * 设置异步版本的视频控制器，可以控制视频的播放状态并通过Promise获取返回结果，当设置了controllerAsync时，controller会被忽略。
   * 
   * 默认值：空
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  controllerAsync?: VideoControllerAsync;

  /**
   * 设置图像AI分析选项，可配置分析类型或绑定一个分析控制器。配置后可启用图像AI分析功能，并通过分析控制器控制分析过程。当需要使用AI分析功能时传入此参数，不传入时默认不启用AI分析功能。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  imageAIOptions?: ImageAIOptions;

  /**
   * 设置视频播放的首帧送显选项，可以控制视频是否支持首帧送显。当需要开启首帧送显功能时传入此参数，不传入时默认不启用首帧送显。
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
 * 一个VideoController对象可以控制一个或多个Video。
 * 
 * ###### 导入对象
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
   * VideoController的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  constructor();

  /**
   * 开始播放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  start();

  /**
   * 暂停播放，显示当前帧，再次播放时从当前位置继续播放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  pause();

  /**
   * 停止播放，显示当前帧，再次播放时从头开始播放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  stop();

  /**
   * 指定视频播放的进度位置。
   * 
   * > **说明：**
   * >
   * > 如需从视频内的某一时间点开始播放，应关闭自动播放，在视频准备完成后先跳转再播放。
   *
   * @param { number } value - 视频播放进度位置。
   *     <br>取值范围：[0, [duration]{@link PreparedInfo}]
   *     <br>当设置value大于duration时，进度跳转至最后；当设置value小于0时，不会进行进度跳转。
   *     <br>单位：s
   *     <br>从API version 8开始，支持设置视频的跳转模式，详见
   *     [setCurrentTime<sup>8+</sup>]{@link VideoController#setCurrentTime(value: number, seekMode: SeekMode)}。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  setCurrentTime(value: number);

  /**
   * 请求全屏播放。
   *
   * @param { boolean } value - 是否全屏（填充满应用窗口）播放。
   *     <br>true：请求全屏播放；false：不请求全屏播放。
   *     <br>默认值：false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  requestFullscreen(value: boolean);

  /**
   * 退出全屏播放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  exitFullscreen();

  /**
   * 指定视频播放的进度位置，并指定跳转模式。
   * 
   * > **说明：**
   * >
   * > 如需从视频内的某一时间点开始播放，应关闭自动播放，在视频准备完成后先跳转再播放。
   *
   * @param { number } value - 视频播放进度位置。
   *     <br>取值范围：[0, [duration]{@link PreparedInfo}]
   *     <br>当设置value大于duration时，进度跳转至最后；当设置value小于0时，不会进行进度跳转。
   *     <br>单位：s
   * @param { SeekMode } seekMode - 跳转模式。
   *     <br>异常值undefined、null、NaN和Infinity按PreviousKeyframe处理。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  setCurrentTime(value: number, seekMode: SeekMode);

  /**
   * 重置视频播放器。显示当前帧，再次播放时从头开始播放。
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
 * VideoControllerAsync是VideoController的异步版本，可以通过Promise获取部分播控命令的结果。不支持同时控制多个Video。
 * 
 * > **说明：**
 * >
 * > VideoControllerAsync提供命令执行结果。与VideoController相比，[start]{@link VideoController#start}、
 * > [pause]{@link VideoController#pause}、[stop]{@link VideoController#stop}、[reset]{@link VideoControllerAsync#reset}等播
 * > 放控制命令为异步执行，请求后立即返回不阻塞当前线程，可通过Promise的then和catch方法处理命令执行结果。
 * 
 * ###### 导入对象
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
   * VideoControllerAsync的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor();
  /**
   * 开始播放视频。使用Promise异步回调。
   * 
   * 视频准备完成前（未收到[onPrepared]{@link VideoAttribute#onPrepared}回调）调用start()方法会失败。
   *
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  start(): Promise<void>;
  /**
   * 暂停播放视频，显示当前帧，再次播放时从当前位置继续播放。使用Promise异步回调。
   * 
   * 只能在正在播放的状态下调用，其他情况下调用pause()方法会失败。
   *
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  pause(): Promise<void>;
  /**
   * 停止播放视频，显示当前帧，再次播放时从头开始播放。使用Promise异步回调。
   *
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  stop(): Promise<void>;
  /**
   * 请求全屏播放。未通过该接口设置时，默认不请求全屏播放。
   * 
   * > **说明：**
   * >
   * > Video组件自带的全屏功能仅将视频内容设为全屏，显示默认控制器，无法显示自定义标题或控制器。如需其他功能，用户需自行实现全屏功能。
   *
   * @param { boolean } value - 是否全屏（填充满应用窗口）播放。
   *     <br>true：请求全屏播放；false：不请求全屏播放。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  requestFullscreen(value: boolean);
  /**
   * 退出全屏播放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  exitFullscreen();
  /**
   * 指定视频播放的进度位置，可以指定跳转模式。
   * 
   * > **说明：**
   * >
   * > 如需从视频内的某一时间点开始播放，应关闭自动播放，在视频准备完成后先跳转再播放。
   *
   * @param { double } value - 视频播放进度位置。
   *     <br>取值范围：[0, [duration]{@link PreparedInfo}]
   *     <br>当设置value大于duration时，进度跳转至最后；当设置value小于0时，不会进行进度跳转。
   *     <br>单位：s
   * @param { SeekMode } [seekMode] - 跳转模式。
   *     <br>异常值undefined、null、NaN和Infinity按PreviousKeyframe处理。
   *     <br>默认值：PreviousKeyframe
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  setCurrentTime(value: double, seekMode?: SeekMode);
  /**
   * 重置视频播放器。显示当前帧，再次播放时从头开始播放。使用Promise异步回调。
   *
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  reset(): Promise<void>;
}

/**
 * Video组件用于播放视频文件并控制其播放状态，支持播放、暂停、进度控制、倍速播放、全屏切换等功能。
 * 
 * > **说明：**
 * >
 * > 该组件从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * > <br>
 * >
 * > Video组件只提供简单的视频播放功能，无法支撑复杂的视频播控场景。复杂开发场景推荐使用[AVPlayer]{@link @ohos.multimedia.media:media.AVPlayer}播控API和
 * > [XComponent]{@link ./xcomponent}组件开发。
 * > <br>
 * >
 * > Video组件在使用[expandSafeArea]{@link CommonMethod#expandSafeArea}扩展安全区域时，组件视频显示内容区域不支持扩展。
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
   * @param { VideoOptions } value - 视频信息。
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
 * 除支持[通用属性]{@link ./common}外，还支持以下属性：
 * 
 * 除支持[通用事件]{@link ./common}外，还支持以下事件：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare class VideoAttribute extends CommonMethod<VideoAttribute> {
  /**
   * 设置视频是否静音，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
   *
   * @param { boolean } value - 视频是否静音。
   *     <br>true：开启静音；false：关闭静音。
   *     <br>默认值：false
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  muted(value: boolean): VideoAttribute;

  /**
   * 设置视频是否自动播放，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
   *
   * @param { boolean } value - 是否自动播放。
   *     <br>true：开启自动播放；false：关闭自动播放。
   *     <br>默认值：false
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  autoPlay(value: boolean): VideoAttribute;

  /**
   * 设置控制视频播放的控制栏是否显示，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
   *
   * @param { boolean } value - 控制视频播放的控制栏是否显示。
   *     <br>true：控制栏显示；false：控制栏不显示。
   *     <br>默认值：true
   *     <br>**说明：**
   *     <br>如需使用[enableAnalyzer]{@link VideoAttribute#enableAnalyzer}功能进行AI分析，需设置为false使用自定义控制栏。
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  controls(value: boolean): VideoAttribute;

  /**
   * 设置是否单个视频循环播放，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
   *
   * @param { boolean } value - 是否单个视频循环播放。
   *     <br>true：开启循环播放；false：关闭循环播放。
   *     <br>默认值：false
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  loop(value: boolean): VideoAttribute;

  /**
   * 设置视频的填充模式，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
   *
   * @param { ImageFit } value - 视频填充模式。
   *     <br>默认值：ImageFit.Cover
   *     <br>约束：不支持ImageFit类型中的枚举值MATRIX，若设置，则作用效果与ImageFit.Cover一致。
   *     <br>异常值：若设置异常值undefined、null，或不在[ImageFit]{@link ImageFit}枚举范围内的值，作用效果均与ImageFit.Cover一致。
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  objectFit(value: ImageFit): VideoAttribute;

  /**
   * 开始播放时触发该事件，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
   *
   * @param { function } event - 视频开始播放的回调函数。 [since 7 - 17]
   * @param { VoidCallback } event - 视频开始播放的回调函数。 [since 18]
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onStart(event: VoidCallback): VideoAttribute;

  /**
   * 暂停时触发该事件，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
   *
   * @param { function } event - 视频暂停的回调函数。 [since 7 - 17]
   * @param { VoidCallback } event - 视频暂停的回调函数。 [since 18]
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onPause(event: VoidCallback): VideoAttribute;

  /**
   * 播放结束时触发该事件，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
   *
   * @param { function } event - 视频播放结束的回调函数。 [since 7 - 17]
   * @param { VoidCallback } event - 视频播放结束的回调函数。 [since 18]
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onFinish(event: VoidCallback): VideoAttribute;

  /**
   * 在全屏播放与非全屏播放状态之间切换时触发该事件，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
   *
   * @param { function } callback - 在全屏播放与非全屏播放状态之间切换时的回调函数。 [since 7 - 17]
   * @param { Callback<FullscreenInfo> } callback - 在全屏播放与非全屏播放状态之间切换时的回调函数。 [since 18]
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onFullscreenChange(callback: Callback<FullscreenInfo>): VideoAttribute;

  /**
   * 视频准备完成时触发该事件，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
   *
   * @param { function } callback - 视频准备完成时的回调函数。 [since 7 - 17]
   * @param { Callback<PreparedInfo> } callback - 视频准备完成时的回调函数。 [since 18]
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onPrepared(callback: Callback<PreparedInfo>): VideoAttribute;

  /**
   * 操作进度条过程时上报时间信息，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
   *
   * @param { function } callback - 操作进度条过程时的回调函数。 [since 7 - 17]
   * @param { Callback<PlaybackInfo> } callback - 操作进度条过程时的回调函数。 [since 18]
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onSeeking(callback: Callback<PlaybackInfo>): VideoAttribute;

  /**
   * 操作进度条完成后，上报播放时间信息，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
   *
   * @param { function } callback - 操作进度条完成后的回调函数。 [since 7 - 17]
   * @param { Callback<PlaybackInfo> } callback - 操作进度条完成后的回调函数。 [since 18]
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onSeeked(callback: Callback<PlaybackInfo>): VideoAttribute;

  /**
   * 播放进度变化时触发该事件，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
   *
   * @param { function } callback - 播放进度变化时的回调函数。 [since 7 - 17]
   * @param { Callback<PlaybackInfo> } callback - 播放进度变化时的回调函数。 [since 18]
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onUpdate(callback: Callback<PlaybackInfo>): VideoAttribute;

  /**
   * 播放失败时触发该事件，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
   * 
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { function } event - 视频播放失败时的回调函数。其中[ErrorCallback]{@link @ohos.base:ErrorCallback}类型入参的回调函数用于接收异常信息，回调返回的错误
   *     码详细介绍请参见[Video组件错误码](docroot://reference/apis-arkui/errorcode-video.md)和
   *     [Media错误码](docroot://reference/apis-media-kit/errorcode-media.md)。 [since 7 - 19]
   * @param { VoidCallback | import('../api/@ohos.base').ErrorCallback } event - 视频播放失败时的回调函数。其中
   *     [ErrorCallback]{@link @ohos.base:ErrorCallback}类型入参的回调函数用于接收异常信息，回调返回的错误码详细介绍请参见
   *     [Video组件错误码](docroot://reference/apis-arkui/errorcode-video.md)和
   *     [Media错误码](docroot://reference/apis-media-kit/errorcode-media.md)。 [since 20]
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onError(event: VoidCallback | import('../api/@ohos.base').ErrorCallback): VideoAttribute;

  /**
   * 播放停止时触发该事件(当stop()方法被调用后触发)，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
   *
   * @param { Callback<void> } event - 视频播放停止时的回调函数。
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onStop(event: Callback<void>): VideoAttribute;

  /**
   * 设置组件支持AI分析，当前支持主体识别、文字识别和对象查找等功能，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
   * 
   * 启用后，视频播放暂停时自动进入分析状态，开始分析当前画面帧，视频继续播放后自动退出分析状态。
   * 
   * 不支持与[overlay]{@link CommonMethod#overlay}属性同时使用，两者同时设置时[overlay]{@link CommonMethod#overlay}中
   * [CustomBuilder](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuilder8)属性会失效。
   * 
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { boolean } enable - 是否启用AI分析功能。
   *     <br>true：开启AI分析功能；false：关闭AI分析功能。
   *     <br>默认值：false
   *     <br>**说明：**
   *     <br>不支持与[overlay]{@link CommonMethod#overlay}属性同时使用，两者同时设置时[overlay]{@link CommonMethod#overlay}中
   *     [CustomBuilder](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuilder8)属性会失效。
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  enableAnalyzer(enable: boolean): VideoAttribute;
 
  /**
   * 设置AI分析识别类型，包括主体识别、文字识别和对象查找等功能，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
   * 
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { ImageAnalyzerConfig } config - 设置AI分析识别类型。
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  analyzerConfig(config: ImageAnalyzerConfig): VideoAttribute;

  /**
   * 设置Video组件中surfaceNode（负责渲染视频画面的节点）的背景色。
   *
   * @param { ColorMetrics } color - 设置Video组件中surfaceNode的背景色，仅支持黑色和透明色两种。其他颜色设置将默认为黑色。
   *     <br>默认值：Color.Black
   * @returns { VideoAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 15 dynamic
   */
  surfaceBackgroundColor(color: ColorMetrics): VideoAttribute;

  /**
   * 设置组件支持快捷键响应，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
   * 
   * 目前支持在组件获焦后响应空格键播放/暂停、上下方向键调整视频音量、左右方向键快进/快退。
   *
   * @param { boolean } enabled - 是否启用快捷键响应。
   *     <br>true：开启快捷键响应；false：关闭快捷键响应。
   *     <br>默认值：false
   *     <br>**说明：**
   *     <br>enabled设置为false且controls属性设置为true时，仍然可以通过左右方向键控制进度条快进或快退。
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
 * Video组件用于播放视频文件并控制其播放状态，支持播放、暂停、进度控制、倍速播放、全屏切换等功能。
 * 
 * > **说明：**
 * >
 * > 该组件从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * > <br>
 * >
 * > Video组件只提供简单的视频播放功能，无法支撑复杂的视频播控场景。复杂开发场景推荐使用[AVPlayer]{@link @ohos.multimedia.media:media.AVPlayer}播控API和
 * > [XComponent]{@link ./xcomponent}组件开发。
 * > <br>
 * >
 * > Video组件在使用[expandSafeArea]{@link CommonMethod#expandSafeArea}扩展安全区域时，组件视频显示内容区域不支持扩展。
 * 
 * ###### 权限列表
 * 
 * 使用网络视频时，需要申请权限ohos.permission.INTERNET。具体申请方式请参考[声明权限](docroot://security/AccessToken/declare-permissions.md)。
 * 
 * ###### 子组件
 * 
 * 不支持子组件。
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