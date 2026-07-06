/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
import { Resource } from '../../global/resource';
import { ImageAIOptions, ImageAnalyzerConfig } from "./imageCommon";
import { ImageFit } from "./enums";
import { CommonMethod, Callback, PixelMap, AttributeModifier, ContentTransitionEffect } from "./common";
import { VoidCallback, ColorMetrics } from "./units";
import { ComponentBuilder, CustomBuilder, CustomBuilderT, Builder } from './builder';
import { ErrorCallback } from '../../@ohos.base';

/**
 * 视频跳转模式选项。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SeekMode {
    /**
     * 跳转到前一个最近的关键帧。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    PreviousKeyframe,
    /**
     * 跳转到后一个最近的关键帧。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NextKeyframe,
    /**
     * 跳转到最近的关键帧。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ClosestKeyframe,
    /**
     * 精准跳转，不论是否为关键帧。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Accurate
}

/**
 * 视频播放倍速选项。
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum PlaybackSpeed {
    /**
     * 0.75倍速播放。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Speed_Forward_0_75_X = '0.75',
    /**
     * 1.00倍速播放。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Speed_Forward_1_00_X = '1.00',
    /**
     * 1.25倍速播放。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Speed_Forward_1_25_X = '1.25',
    /**
     * 1.75倍速播放。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Speed_Forward_1_75_X = '1.75',
    /**
     * 2.00倍速播放。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Speed_Forward_2_00_X = '2.00',
    /**
     * 0.50倍速播放。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SPEED_FORWARD_0_50_X = '0.50',
    /**
     * 1.50倍速播放。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SPEED_FORWARD_1_50_X = '1.50',
    /**
     * 3.00倍速播放。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SPEED_FORWARD_3_00_X = '3.00',
    /**
     * 0.25倍速播放。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SPEED_FORWARD_0_25_X = '0.25',
    /**
     * 0.125倍速播放。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    SPEED_FORWARD_0_125_X = '0.125',
}

/**
 * 用于描述当前视频是否进入全屏播放状态。
 *
 * @typedef FullscreenInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface FullscreenInfo {
    /**
     * 当前视频是否进入全屏播放状态。
     * true：进入全屏播放状态；false：未进入全屏播放状态。
     * 默认值：false
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fullscreen: boolean;
}

/**
 * 用于描述当前视频的时长。
 *
 * @typedef PreparedInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface PreparedInfo {
    /**
     * 当前视频的时长。
     * 单位：秒，取值范围：[0,+∞)
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    duration: int;
}

/**
 * 用于描述当前视频播放的进度。
 *
 * @typedef PlaybackInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface PlaybackInfo {
    /**
     * 当前视频播放的进度。
     * 单位：秒，取值范围：[0,+∞)
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    time: int;
}

/**
 * 用于描述当前视频是否配置首帧送显。
 *
 * @interface PosterOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PosterOptions {
    /**
     * 当前视频是否配置首帧送显，当开启首帧送显时，VideoOptions中的previewUri字段不生效。
     * true：开启首帧送显；false：关闭首帧送显。
     * 默认值：false
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    showFirstFrame?: boolean;
    /**
     * 当前视频的预览图内容变化时的转场动效。配置showFirstFrame为true（即配置开启首帧送显时），
     * 或未配置有效的VideoOptions的previewUri时，该字段不生效。
     * 默认值：ContentTransitionEffect.IDENTITY。
     * 设置为undefined或null时，取值为ContentTransitionEffect.IDENTITY。
     *
     * @type { ?ContentTransitionEffect }
     * @default ContentTransitionEffect.IDENTITY
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    contentTransitionEffect?: ContentTransitionEffect;
}

/**
 * 定义Video的具体配置参数。
 *
 * @interface VideoOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface VideoOptions {
    /**
     * 视频的数据源，支持本地视频和网络视频。
     * Resource格式可以跨包/跨模块访问资源文件，常用于访问本地视频。仅支持rawfile文件下的资源。
     * string格式可用于加载网络视频和本地视频，常用于加载网络视频。支持网络视频地址。
     * 支持file://路径前缀的字符串，即应用沙箱URI：
     * file://\<bundleName>/\<sandboxPath>。用于读取应用沙箱路径内的资源。
     * 需要保证目录包路径下的文件有可读权限。
     * 默认值：空字符串，异常值：按默认值处理。
     * 视频支持的格式是：mp4、mkv、TS。
     *
     * @type { ?(string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    src?: string | Resource;
    /**
     * 视频播放倍速。
     * number格式取值仅支持：0.75，1.0，1.25，1.75，2.0。从API version 22开始，
     * 新增支持取值0.5，1.5，3，0.25和0.125。
     * 从API版本26.0.0开始，支持取值范围：[0.125, 8]。
     * string格式支持number格式取值的字符串形式："0.75"，"1.0"，"1.25"，"1.75"，"2.0"。
     * 从API version 22开始，新增支持取值"0.5"，"1.5"，"3"，"0.25"和"0.125"。
     * 除此之外的取值，比如"abc"或"1.5+1.5"会按照异常值处理。
     * 默认值：1.0 | PlaybackSpeed.Speed_Forward_1_00_X，异常值：按默认值处理。
     *
     * @type { ?(double | string | PlaybackSpeed) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    currentProgressRate?: double | string | PlaybackSpeed;
    /**
     * 视频未播放时的预览图片路径，默认不显示图片。
     * string格式可用于加载本地图片和网络图片。支持网络图片地址。
     * 支持相对路径引用本地图片。当使用相对路径引用本地图片时，不支持跨包/跨模块调用。
     * 支持file://路径前缀的字符串，即应用沙箱URI：
     * file://\<bundleName>/\<sandboxPath>。用于读取应用沙箱路径内的资源。
     * 需要保证目录包路径下的文件有可读权限。
     * Resource格式可以跨包/跨模块访问资源文件。支持rawfile文件下的资源。
     * 支持通过$r引用系统资源或者应用资源中的图片。
     * 默认值：空字符串，异常值：按默认值处理。
     *
     * @type { ?(string | PixelMap | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    previewUri?: string | PixelMap | Resource;
    /**
     * 设置视频控制器，可以控制视频的播放状态。
     *
     * @type { ?VideoController }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    controller?: VideoController;
    /**
     * 设置图像AI分析选项，可配置分析类型或绑定一个分析控制器。
     *
     * @type { ?ImageAIOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    imageAIOptions?: ImageAIOptions;
    /**
     * 设置视频播放的首帧送显选项，可以控制视频是否支持首帧送显。
     *
     * @type { ?PosterOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    posterOptions?: PosterOptions;
}

/**
 * 一个VideoController对象可以控制一个或多个Video。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class VideoController {
    /**
     * VideoController的构造函数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor();
    /**
     * 开始播放。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    start(): void;
    /**
     * 暂停播放，显示当前帧，再次播放时从当前位置继续播放。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pause(): void;
    /**
     * 停止播放，显示当前帧，再次播放时从头开始播放。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    stop(): void;
    /**
     * 请求全屏播放。
     *
     * @param { boolean } value - 是否全屏（填充满应用窗口）播放。
     *     true：请求全屏播放；false：不请求全屏播放。
     *     默认值：false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    requestFullscreen(value: boolean): void;
    /**
     * 退出全屏播放。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    exitFullscreen(): void;
    /**
     * 指定视频播放的进度位置，并指定跳转模式。
     *
     * @param { double } value - 视频播放进度位置，单位：秒。
     * @param { SeekMode } [seekMode] - 跳转模式。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setCurrentTime(value: double, seekMode?: SeekMode): void;
    /**
     * Video组件重置AVPlayer。显示当前帧，再次播放时从头开始播放。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    reset(): void;
}

/**
 * 用于播放视频文件并控制其播放状态的组件。
 *
 * @extends CommonMethod
 * @interface VideoAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface VideoAttribute extends CommonMethod {
    /**
     * 设置视频是否静音。
     * true：开启静音；false：关闭静音。
     * 默认值：false，取值为undefined时，按默认值处理。
     *
     * @param { boolean | undefined } value - 视频是否静音。
     * @returns { VideoAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default muted(value: boolean | undefined): this;
    /**
     * 设置视频是否自动播放。
     * true：开启自动播放；false：关闭自动播放。
     * 默认值：false，取值为undefined时，按默认值处理。
     *
     * @param { boolean | undefined } value - 是否自动播放。
     * @returns { VideoAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default autoPlay(value: boolean | undefined): this;
    /**
     * 设置控制视频播放的控制栏是否显示。
     * true：控制栏显示；false：控制栏不显示。
     * 默认值：true，取值为undefined时，按默认值处理。
     *
     * @param { boolean | undefined } value - 控制视频播放的控制栏是否显示。
     * @returns { VideoAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default controls(value: boolean | undefined): this;
    /**
     * 设置是否单个视频循环播放。
     * true：开启循环播放；false：关闭循环播放。
     * 默认值：false，取值为undefined时，按默认值处理。
     *
     * @param { boolean | undefined } value - 是否单个视频循环播放。
     * @returns { VideoAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default loop(value: boolean | undefined): this;
    /**
     * 设置视频的填充模式。
     * 默认值：Cover。
     * 约束：不支持ImageFit类型中的枚举值MATRIX，若设置，则作用效果与Cover一致。
     * 异常值：若设置异常值undefined、null，或不在ImageFit枚举范围内的值，
     * 作用效果均与Cover一致。取值为undefined时，按默认值处理。
     *
     * @param { ImageFit | undefined } value - 视频填充模式。
     * @returns { VideoAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default objectFit(value: ImageFit | undefined): this;
    /**
     * 播放时触发该事件。
     *
     * @param { VoidCallback | undefined } event - 视频播放的回调函数。
     *     取值为undefined时，不使用回调函数。
     * @returns { VideoAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onStart(event: VoidCallback | undefined): this;
    /**
     * 暂停时触发该事件。
     *
     * @param { VoidCallback | undefined } event - 视频暂停的回调函数。
     *     取值为undefined时，不使用回调函数。
     * @returns { VideoAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onPause(event: VoidCallback | undefined): this;
    /**
     * 播放结束时触发该事件。
     *
     * @param { VoidCallback | undefined } event - 视频播放结束的回调函数。
     *     取值为undefined时，不使用回调函数。
     * @returns { VideoAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onFinish(event: VoidCallback | undefined): this;
    /**
     * 在全屏播放与非全屏播放状态之间切换时触发该事件。
     *
     * @param { Callback<FullscreenInfo> | undefined } callback
     *     - 在全屏播放与非全屏播放状态之间切换时的回调函数。
     *     取值为undefined时，不使用回调函数。
     * @returns { VideoAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onFullscreenChange(callback: Callback<FullscreenInfo> | undefined): this;
    /**
     * 视频准备完成时触发该事件。
     *
     * @param { Callback<PreparedInfo> | undefined } callback - 视频准备完成时的回调函数。
     *     取值为undefined时，不使用回调函数。
     * @returns { VideoAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onPrepared(callback: Callback<PreparedInfo> | undefined): this;
    /**
     * 操作进度条过程时上报时间信息。
     *
     * @param { Callback<PlaybackInfo> | undefined } callback - 操作进度条过程时的回调函数。
     *     取值为undefined时，不使用回调函数。
     * @returns { VideoAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onSeeking(callback: Callback<PlaybackInfo> | undefined): this;
    /**
     * 操作进度条完成后，上报播放时间信息。
     *
     * @param { Callback<PlaybackInfo> | undefined } callback - 操作进度条完成后的回调函数。
     *     取值为undefined时，不使用回调函数。
     * @returns { VideoAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onSeeked(callback: Callback<PlaybackInfo> | undefined): this;
    /**
     * 播放进度变化时触发该事件。
     *
     * @param { Callback<PlaybackInfo> | undefined } callback - 播放进度变化时的回调函数。
     *     取值为undefined时，不使用回调函数。
     * @returns { VideoAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onUpdate(callback: Callback<PlaybackInfo> | undefined): this;
    /**
     * 播放失败时触发该事件。
     *
     * @param { VoidCallback | ErrorCallback | undefined } event
     *     - 视频播放失败时的回调函数。其中ErrorCallback类型入参的回调函数用于接收异常信息，
     *     回调返回的错误码详细介绍请参见Video组件错误码和Media错误码。
     *     取值为undefined时，不使用回调函数。
     * @returns { VideoAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onError(event: VoidCallback | ErrorCallback | undefined): this;
    /**
     * 播放停止时触发该事件（当stop()方法被调用后触发）。
     *
     * @param { VoidCallback | undefined } event - 视频播放停止时的回调函数。
     *     取值为undefined时，不使用回调函数。
     * @returns { VideoAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onStop(event: VoidCallback | undefined): this;
    /**
     * 设置组件支持AI分析，当前支持主体识别、文字识别和对象查找等功能。
     * 使能后，视频播放暂停时自动进入分析状态，开始分析当前画面帧，
     * 视频继续播放后自动退出分析状态。
     * 不能和overlay属性同时使用，两者同时设置时overlay中CustomBuilder属性将失效。
     *
     * @param { boolean | undefined } enable - 是否启用AI分析功能。
     *     true：开启AI分析功能；false：关闭AI分析功能。
     *     默认值：false，取值为undefined时，按默认值处理。
     * @returns { VideoAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default enableAnalyzer(enable: boolean | undefined): this;
    /**
     * 设置AI分析识别类型，包括主体识别、文字识别和对象查找等功能。
     *
     * @param { ImageAnalyzerConfig | undefined } config - 设置AI分析识别类型。
     *     取值为undefined时，与不设置表现一致。
     * @returns { VideoAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default analyzerConfig(config: ImageAnalyzerConfig | undefined): this;
    /**
     * 设置组件支持快捷键响应。
     * 目前支持在组件获焦后响应空格键播放/暂停、上下方向键调整视频音量、
     * 左右方向键快进/快退。
     *
     * @param { boolean | undefined } enabled - 是否启用快捷键响应。
     *     true：开启快捷键响应；false：关闭快捷键响应。
     *     默认值：false，取值为undefined时，按默认值处理。
     *     enabled设置为false且Video组件的控制栏显示时，
     *     仍然可以通过左右方向键控制进度条快进或快退。
     * @returns { VideoAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default enableShortcutKey(enabled: boolean | undefined): this;
    /**
     * Set background color of the surface holden by Video(only support Color.Black and Color.Transparent).
     *
     * @param { ColorMetrics | undefined } color - The surface background color.
     *     Default value is Color.Black, `undefined` means setting to the default value.
     * @returns { VideoAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    default surfaceBackgroundColor(color: ColorMetrics | undefined): this;
    /**
     * 设置Video选项。
     *
     * @param { VideoOptions } value - Video constructor options
     * @returns { VideoAttribute } Returns the instance of the VideoAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setVideoOptions(value: VideoOptions): this;
    /**
     * 设置组件的动态属性。
     *
     * @param { AttributeModifier<VideoAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     *     - 动态设置Video组件的属性。
     *     取值为undefined时，按当前组件的属性方法默认值处理。
     * @returns { VideoAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<VideoAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 用于播放视频文件并控制其播放状态的组件。
 *
 * @param { VideoOptions } value - 视频信息。
 * @returns { VideoAttribute } The attribute of the Video.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Video(
    value: VideoOptions
): VideoAttribute;

/**
 * Defines Video Component.
 *
 * @param { CustomBuilderT<VideoAttribute> } style - the callback to set up component's attributes.
 * @returns { VideoAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function Video(
    style: CustomBuilderT<VideoAttribute>
): VideoAttribute;
