
'use static';
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
 * @kit ArkUI
 */

import image from './@ohos.multimedia.image';
import drawing from './@ohos.graphics.drawing';
import { AnimationStatus, ResourceStr, ScaleOptions, Rectangle } from '@ohos.arkui.component';

/**
* 传入的图片资源或地址的加载结果。
*
 * @typedef DrawableDescriptorLoadedResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface DrawableDescriptorLoadedResult {

  /**
   * 图片的宽度。
   *
   * 单位：px
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  imageWidth: int;

  /**
   * 图片的高度。
   *
   * 单位：px
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  imageHeight: int;
}

/**
* 父类对象提供可重写的方法，包含：获取[PixelMap]{@link @ohos.multimedia.image:image.PixelMap}实例，图片资源加载能力。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class DrawableDescriptor {

  /**
   * Creates a new DrawableDescriptor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 static
   */
  constructor();

  /**
   * 获取PixelMap实例。
   *
   * > **说明：**
   * > > DrawableDescriptor对象通过[release]{@link DrawableDescriptor#release}释放后，本接口返回undefined。
   *
   * @returns { image.PixelMap | undefined } - Return the PixelMap of the calling DrawableDescriptor object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getPixelMap(): image.PixelMap | undefined;

  /**
   * 发起图片资源的同步加载，并返回加载结果。
   *
   * > **说明：**
   * > > DrawableDescriptor对象通过[release]{@link DrawableDescriptor#release}释放后，本接口返回imageWidth和imageHeight均为
   * > -1的结果。
   *
   * @returns { DrawableDescriptorLoadedResult } - 图片资源的加载结果。
   * @throws { BusinessError } 111001 - resource loading failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  loadSync(): DrawableDescriptorLoadedResult;

  /**
   * 发起图片资源的异步加载，并返回加载结果。使用Promise异步回调。
   *
   * > **说明：**
   * > > DrawableDescriptor对象通过[release]{@link DrawableDescriptor#release}释放后，本接口返回imageWidth和imageHeight均为
   * > -1的Promise结果。
   *
   * @returns { Promise<DrawableDescriptorLoadedResult> } - 图片资源的加载结果。
   * @throws { BusinessError } 111001 - resource loading failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  load(): Promise<DrawableDescriptorLoadedResult>;

  /**
   * 释放DrawableDescriptor持有的资源。调用release后，该对象将不可用，再调用
   * [getPixelMap]{@link DrawableDescriptor#getPixelMap}、
   * [getForeground]{@link LayeredDrawableDescriptor#getForeground}、
   * [getBackground]{@link LayeredDrawableDescriptor#getBackground}、
   * [getMask]{@link LayeredDrawableDescriptor#getMask}、
   * [loadSync]{@link DrawableDescriptor#loadSync}、
   * [load]{@link DrawableDescriptor#load}等接口，返回undefined或默认异常值。重复调用release不会崩溃。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  release(): void;

  /**
   * 查询DrawableDescriptor是否已被释放。返回true表示已释放，此时调用
   * [getPixelMap]{@link DrawableDescriptor#getPixelMap}、
   * [getForeground]{@link LayeredDrawableDescriptor#getForeground}、
   * [getBackground]{@link LayeredDrawableDescriptor#getBackground}、
   * [getMask]{@link LayeredDrawableDescriptor#getMask}、
   * [loadSync]{@link DrawableDescriptor#loadSync}、
   * [load]{@link DrawableDescriptor#load}等接口，返回undefined或默认异常值；返回false表示未释放，对象可正常使用。
   *
   * @returns { boolean } DrawableDescriptor是否已被释放。true表示已释放，false表示未释放。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isReleased(): boolean;

  /**
   * 重新绘制DrawableDescriptor。当前仅支持
   * [PictureDrawableDescriptor]{@link PictureDrawableDescriptor}类型，其他DrawableDescriptor子类型触发后无效果。
   * 若DrawableDescriptor未绑定任何组件，则不会执行任何操作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  invalidate(): void;
}

/**
* 当传入资源id或name为包含前景和背景资源的json文件时，生成LayeredDrawableDescriptor对象。继承自
* [DrawableDescriptor]{@link DrawableDescriptorLoadedResult}。
*
* drawable.json位于项目工程entry/src/main/resources/base/media目录下。定义请参考：
*
 * @extends DrawableDescriptor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class LayeredDrawableDescriptor extends DrawableDescriptor {

  /**
   * LayeredDrawableDescriptor的构造函数。
   *
   * @param { DrawableDescriptor } [foreground] - 分层图标的前景图片选项。
   * @param { DrawableDescriptor } [background] - 分层图标的背景图片选项。
   * @param { DrawableDescriptor } [mask] - 分层图标的遮罩选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(
    foreground?: DrawableDescriptor,
    background?: DrawableDescriptor,
    mask?: DrawableDescriptor
  );

  /**
   * 获取前景的DrawableDescriptor对象。
   *
   * > **说明：**
   * > > DrawableDescriptor对象通过[release]{@link DrawableDescriptor#release}释放后，本接口返回undefined。
   *
   * @returns { DrawableDescriptor | undefined } Return the DrawableDescriptor object of foreground.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getForeground(): DrawableDescriptor | undefined;

  /**
   * 获取背景的DrawableDescriptor对象。
   *
   * > **说明：**
   * > > DrawableDescriptor对象通过[release]{@link DrawableDescriptor#release}释放后，本接口返回undefined。
   *
   * @returns { DrawableDescriptor | undefined } Return the DrawableDescriptor object of background.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getBackground(): DrawableDescriptor | undefined;

  /**
   * 获取蒙版的DrawableDescriptor对象。
   *
   * > **说明：**
   * > > DrawableDescriptor对象通过[release]{@link DrawableDescriptor#release}释放后，本接口返回undefined。
   *
   * @returns { DrawableDescriptor | undefined } Return the DrawableDescriptor object of mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getMask(): DrawableDescriptor | undefined;

  /**
   * LayeredDrawableDescriptor的静态方法，获取系统内置的裁切路径参数。
   *
   * @returns { string } 返回裁切路径的命令字符串。
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static getMaskClipPath(): string;

  /**
   * 设置LayeredDrawableDescriptor的混合模式。对同一LayeredDrawableDescriptor对象多次调用setBlendMode接口时，
   * 仅在绘制完成前的最后一次调用生效。该接口不支持动态切换。
   * LayeredDrawableDescriptor的默认绘制顺序为背景、蒙版、前景。设置了混合模式后，绘制顺序变为背景、前景、蒙版。
   * 若设置的值无效，会按照未设置混合模式进行绘制。
   *
   * @param { drawing.BlendMode | undefined } mode - 混合模式。设置undefined，会按照未设置混合模式进行绘制。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setBlendMode(mode: drawing.BlendMode | undefined): void;

  /**
   * Creates a new LayeredDrawableDescriptor.
   *
   * @param { DrawableDescriptor } [foreground] - Indicates the foreground option to create LayeredDrawableDescriptor.
   * @param { DrawableDescriptor } [background] - Indicates the background option to create LayeredDrawableDescriptor.
   * @param { DrawableDescriptor } [mask] - Indicates the mask option to create LayeredDrawableDescriptor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor(;
}

/**
* 支持通过传入PixelMap创建PixelMapDrawableDescriptor对象。继承自[DrawableDescriptor]{@link DrawableDescriptorLoadedResult}。
*
 * @extends DrawableDescriptor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class PixelMapDrawableDescriptor extends DrawableDescriptor {

  /**
   * PixelMapDrawableDescriptor的构造函数，通过PixelMap类型或者ResourceStr创建。
   *
   * @param { image.PixelMap } [src] - Indicates the resource to create PixelMapDrawableDescriptor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  /**
   * PixelMapDrawableDescriptor的构造函数，通过PixelMap类型或者ResourceStr创建。
   *
   * @param { image.PixelMap | ResourceStr } [src] - PixelMap类型参数，存储PixelMap图片数据。
   * 支持应用资源、系统资源、沙箱路径（file://<bundleName>/<sandboxPath>）和Base64字符串
   * 用于创建PixelMapDrawableDescriptor。 [since 26.0.0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(src?: image.PixelMap | ResourceStr);
}

/**
* 动图停止模式。
*
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export enum AnimationStopMode {

  /**
   * 动图停止时回到首帧。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  FIRST_FRAME = 0,

  /**
   * 动图停止时停留在最后一帧。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  LAST_FRAME = 1
}

/**
* 动画播放参数。包括播放时延，迭代次数，单帧播放时间，是否自动播放。
*
 * @interface AnimationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface AnimationOptions {

  /**
   * 设置图片数组播放总时间。
   *
   * PixelMap数组的默认值是每张图片播放1秒。本地图片或者应用资源的默认值是图片资源中携带的播放时延。
   *
   * 单位：毫秒
   *
   * 取值范围：[0, +∞)
   *
   * 设置负数取默认值。
   *
   * @type { ?int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  duration?: int;

  /**
   * 设置图片数组播放次数。
   *
   * 值为-1时表示无限播放，值为0时表示不播放，值大于0时表示有限的播放次数。
   *
   * 默认值为1。
   *
   * @type { ?int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iterations?: int;

  /**
   * 设置动图中的单帧播放时间。不设置则按照总时间播放。
   * 设置的优先级高于duration，即同时设置了duration和frameDurations时，duration不生效。
   * 当设置的frameDurations长度与图片的数量不一致时，按照总时间播放。
   * 单位：毫秒。
   *
   * @type { ?Array<int> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  frameDurations?: Array<int>;

  /**
   * 设置动图是否自动播放。
   * true表示自动播放，false表示不自动播放。
   * 默认值为true。
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  autoPlay?: boolean;

  /**
   * 设置动图的停止模式。
   *
   * 默认值：AnimationStopMode.FIRST_FRAME，表示动图停止时回到首帧。
   *
   * @type { ?AnimationStopMode }
   * @default AnimationStopMode.FIRST_FRAME
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  stopMode?: AnimationStopMode;
}

/**
* 动画控制器对象。包含控制动画播放、停止、恢复、暂停和状态查询等方法。
*
 * @interface AnimationController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface AnimationController {

  /**
   * 从首帧开始播放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  start(): void;

  /**
   * 停止动图的播放并回到首帧。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  stop(): void;

  /**
   * 暂停动图的播放，保持在当前帧。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pause(): void;

  /**
   * 在当前帧恢复播放动图。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  resume(): void;

  /**
   * 获取当前动图播放的状态。
   *
   * @returns { AnimationStatus } - 动图的播放状态。包含4种状态：初始态、播放态、暂停态、停止态。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getStatus(): AnimationStatus;
}

/**
* 使用[Image]{@link ./@internal/component/ets/image.static}组件播放PixelMap数组或动图资源时传入
* AnimatedDrawableDescriptor对象，该对象继承自[DrawableDescriptor]{@link DrawableDescriptorLoadedResult}。
*
 * @extends DrawableDescriptor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class AnimatedDrawableDescriptor extends DrawableDescriptor {

  /**
   * AnimatedDrawableDescriptor的构造函数。
   *
   * @param { Array<image.PixelMap> } pixelMaps - PixelMap 数组类型参数，存储 PixelMap 图片数据。
   * @param { AnimationOptions } [options] - 动画控制选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(pixelMaps: Array<image.PixelMap>, options?: AnimationOptions);

  /**
   * AnimatedDrawableDescriptor的构造函数。
   *
   * @param { ResourceStr | Array<image.PixelMap> } src - 动图资源地址或者
   *     [PixelMap]{@link @ohos.multimedia.image:image.PixelMap}对象构成的数组。<br/> ResourceStr当前支持的范围：
   *     应用资源Resource，沙箱路径（file://<bundleName>/<sandboxPath>），BASE64字符串。
   * @param { AnimationOptions } [options] - 动画控制参数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(src: ResourceStr | Array<image.PixelMap>, options?: AnimationOptions);

  /**
   * 获取动画控制器。
   *
   * @param { string } [id] - 组件的id。<br/>当[Image]{@link ./@internal/component/ets/image.static}组件与
   *     AnimatedDrawableDescriptor确保1比1持有（仅传入一个[Image]{@link ./@internal/component/ets/image.static}组件）时，
   *     id非必填；<br/>若同一AnimatedDrawableDescriptor需绑定多个
   *     [Image]{@link ./@internal/component/ets/image.static}组件，则必须设置唯一id以准确获取对应组件的动画控制器
   *     （唯一性由开发者保证）。<br/>此规则基于动画系统设计原则：动画数据可多组件共享，但各组件动画独立运行，
   *     AnimationController与组件严格1比1持有关系（一个组件一个AnimationController对象）。<br/>另外，
   *     [AnimatedDrawableDescriptor]{@link AnimatedDrawableDescriptor}支持不可见时自动暂停播放功能，详见
   *     [onVisibleAreaChange]{@link CommonMethod#onVisibleAreaChange}。
   * @returns { AnimationController | undefined } - Return the component of animation controller.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getAnimationController(id?: string): AnimationController | undefined;
}

/**
* HDR合成配置选项。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface HdrCompositionConfig {

  /**
   * HDR合成的矩形区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  rect: Rectangle;
}

/**
* 支持通过传入Picture对象创建PictureDrawableDescriptor对象。继承自
* [DrawableDescriptor]{@link DrawableDescriptorLoadedResult}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class PictureDrawableDescriptor extends DrawableDescriptor {

  /**
   * PictureDrawableDescriptor的构造函数。
   *
   * @param { image.Picture } src - 用于创建PictureDrawableDescriptor的Picture对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(src: image.Picture);

  /**
   * 设置HDR合成配置。
   *
   * @param { HdrCompositionConfig } config - HDR合成配置。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setHdrComposition(config: HdrCompositionConfig): void;
}