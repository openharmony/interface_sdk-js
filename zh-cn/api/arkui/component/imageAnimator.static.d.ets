
'use static';
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

import { Resource } from "../../global/resource";
import { CommonMethod, PixelMap, AttributeModifier } from './common';
import { AnimationStatus, FillMode } from "./enums";
import { ComponentBuilder, CustomBuilderT, Builder } from './builder';

/**
 * 图片帧信息集合。
 *
 * @interface ImageFrameInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ImageFrameInfo {

  /**
     * 图片路径，图片格式为jpg、jpeg、svg、png、bmp、webp、ico和heif，从API version9开始支持
     * [Resource]{@link Resource}类型的路径，从API version 12开始支持
     * [PixelMap](docroot://reference/apis-arkui/arkui-ts/ts-image-common.md#pixelmap)类型。
     * 
     * **string格式说明：**
     * 
     * - 支持加载本地图片路径和网络图片地址。使用相对路径引用本地图片时，不支持跨包或跨模块调用。
     * resources目录下的文件不支持通过相对路径访问，需使用[Resource]{@link Resource}类型（如$r或$
     * rawfile）来引用，引用方式请参考[加载图片资源](docroot://ui/arkts-graphics-display.md#加载图片资源)。
     * - 支持`http`和`https`网络图片地址，使用网络图片时需要申请权限`ohos.permission.INTERNET`。
     * - 支持`file://`路径前缀的字符串，应用沙箱URI为`file://<bundleName>/<sandboxPath>`。沙箱路径需要使用
     * [fileUri.getUriFromPath(path)]{@link @ohos.file.fileuri:fileUri.getUriFromPath}
     * 方法将路径转换为应用沙箱URI，然后传入显示。同时需要保证目录包路径
     * 下的文件有可读权限。
     * - 支持`Base64`字符串。 
     *
   * @type { string | Resource | PixelMap }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  src: string | Resource | PixelMap;

  /**
     * 图片宽度。string类型支持number类型取值的字符串形式，可以附带单位，例如"2"、"2px"。
     * 
     * 默认值：0
     * 
     * 单位：vp   
     *
   * @type { ?(double | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  width?: double | string;

  /**
     * 图片高度。string类型支持number类型取值的字符串形式，可以附带单位，例如"2"、"2px"。
     * 
     * 默认值：0
     * 
     * 单位：vp     
     *
   * @type { ?(double | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  height?: double | string;

  /**
     * 图片相对于组件左上角的纵向坐标。string类型支持number类型取值的字符串形式，可以附带单位，例如"2"、"2px"。
     * 
     * 默认值：0
     * 
     * 单位：vp  
     *
   * @type { ?(double | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  top?: double | string;

  /**
     * 图片相对于组件左上角的横向坐标。string类型支持number类型取值的字符串形式，可以附带单位，例如"2"、"2px"。
     * 
     * 默认值：0
     * 
     * 单位：vp 
     *
   * @type { ?(double | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  left?: double | string;

  /**
     * 每帧图片的播放时长，单位毫秒。
     * 
     * 默认值：0
     * 
     * 不支持负数。设置为负数将导致图片在当前帧长时间停留，影响正常播放。
     *
   * @type { ?int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  duration?: int;
}

/**
 * 除支持[通用属性]{@link ./common}外，还支持以下属性：
 * 
 * 除支持[通用事件]{@link ./common}外，还支持以下事件：
 *
 * @extends CommonMethod
 * @interface ImageAnimatorAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface ImageAnimatorAttribute extends CommonMethod {

  /**
     * 设置图像帧信息。
     *
   * @returns { ImageAnimatorAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setImageAnimatorOptions(): this;

  /**
     * 设置图片帧信息集合。不支持动态更新，动态更新可能会导致不可预期的行为。
     *
   * @param { Array<ImageFrameInfo> | undefined } value - 设置图片帧信息集合。
     *     每一帧的帧信息(ImageFrameInfo)包含图片路径、图片大小、图片位置和图片播放时长信息，详
     *     见[ImageFrameInfo]{@link ImageFrameInfo}。<br/>默认值：[] <br/> **说明：** 传入数组的内容过大时，
     *     内存占用会随之升高。此内存由开发者自行控制。因此，开发者在传入数据前，
     *     请充分评估内存消耗情况，以避免内存不足等问题。
   * @returns { ImageAnimatorAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default images(value: Array<ImageFrameInfo> | undefined): this;

  /**
     * 控制播放状态。
     *
   * @param { AnimationStatus | undefined } value - 默认为初始状态，用于控制播放状态。
     *     <br/> 设置undefined时，按默认值处理。<br/>默认值：AnimationStatus.Initial
   * @returns { ImageAnimatorAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default state(value: AnimationStatus | undefined): this;

  /**
     * 设置播放时长。当Images中任意一帧图片设置了单独的duration后，该属性设置无效。
     *
   * @param { int | undefined } value - 播放时长。<br/>value为0时，不播放图片。
     *     <br/> 设置undefined时，按默认值处理。<br/>设置为负数时，取默认值。<br/>value
     *     的改变只会在下一次循环开始时生效。<br/>单位：毫秒<br/>默认值：1000ms
   * @returns { ImageAnimatorAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default duration(value: int | undefined): this;

  /**
     * 设置播放方向。
     *
   * @param { boolean | undefined } value - 播放方向。
     *     <br/>false表示从第1张图片播放到最后1张图片，true表示从最后1张图片播放到第1张图片。<br/> 设置undefined时，
     *     按默认值处理。<br/>默认值：false
   * @returns { ImageAnimatorAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default reverse(value: boolean | undefined): this;

  /**
     * 设置图片大小是否固定为组件大小。
     *
   * @param { boolean | undefined } value - 设置图片大小是否固定为组件大小。 true表示图片大小与组件大小一致，
    *      此时设置图片的width 、height 、top 和left属性无效。
    *      false表示每一张图片的width 、height 、top和left属性都要单独设置。
    *      图片宽高与组件宽高不一致时，图片不会被拉伸。<br/> 设置undefined时，按默认值处理。<br/>默认值：true
   * @returns { ImageAnimatorAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fixedSize(value: boolean | undefined): this;

  /**
     * 设置当前播放方向下，动画开始前和结束后的状态。动画结束后的状态由fillMode和reverse属性共同决定。
     * 例如，fillMode为Forwards表示停止时维持动画最后一个关键帧的状态，若reverse为false则维持正
     * 播的最后一帧，即最后一张图，若reverse为true则维持逆播的最后一帧，即第一张图。
     *
   * @param { FillMode | undefined } value - 当前播放方向下，动画开始前和结束后的状态。
     * <br/> 设置undefined时，按默认值处理。<br/>默认值：FillMode.Forwards
   * @returns { ImageAnimatorAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fillMode(value: FillMode | undefined): this;

  /**
     * 设置播放次数。
     *
   * @param { int | undefined } value - 默认播放一次，设置为-1时表示无限次播放，设置为小于-1的负数时取默认值。
     *     设置为浮点数时，数值向下取整。<br/> 设置undefined时，按默认值处理。<br/>默认值：1
   * @returns { ImageAnimatorAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default iterations(value: int | undefined): this;

  /**
     * 设置组件是否通过系统[onVisibleAreaChange]{@link CommonMethod#onVisibleAreaChange}的可见性判定，
     * 控制组件的暂停和播放。
     *
   * @param { boolean | undefined } monitorInvisibleArea - 	当设置为true时，组件将基于系统的
     *     [onVisibleAreaChange]{@link CommonMethod#onVisibleAreaChange}可见性判定，控制组件的暂停和播放。
     *     <br/> 当组件的运行状态为[AnimationStatus]{@link AnimationStatus}的Running时，
     *     若判定组件不可见，则自动执行暂停操作；
     *     若判定为可见，则自动恢复播放。<br/>当设置为false时，组件的暂停和播放不
     *     受到onVisibleAreaChange影响。<br/> 设置undefined时，按默认值处理。<br/>默认值：false <br/> 
     *     **说明：** <br/>当该属性由true动态修改为false时，组件将依据当前的[AnimationStatus]{@link AnimationStatus}
     *     状态进行处理。<br/> 例如，若当前状态为Running且因
     *     [onVisibleAreaChange]{@link CommonMethod#onVisibleAreaChange}
     *     的不可见回调暂停，则在属性由true改为false后，组件会从上次暂停的位置重新开始播放。<br/>
     *     由该属性导致的不可见暂停和可见暂停操作不会改变用户设置的[state]{@link ImageAnimatorAttribute.state}值。
   * @returns { ImageAnimatorAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default monitorInvisibleArea(monitorInvisibleArea: boolean | undefined): this;

  /**
     * 状态回调，动画开始播放时触发。
     *
   * @param { function | undefined } event
   * @returns { ImageAnimatorAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onStart(event: (() => void) | undefined): this;

  /**
     * 状态回调，动画暂停播放时触发。
     *
   * @param { function | undefined } event
   * @returns { ImageAnimatorAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onPause(event: (() => void) | undefined): this;

  /**
     * 状态回调，动画重复播放时触发。
     *
   * @param { function | undefined } event
   * @returns { ImageAnimatorAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onRepeat(event: (() => void) | undefined): this;

  /**
     * 状态回调，动画返回最初状态时触发。
     *
   * @param { function | undefined } event
   * @returns { ImageAnimatorAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onCancel(event: (() => void) | undefined): this;

  /**
     * 状态回调，动画播放完成时或者停止播放时触发。
     *
   * @param { function | undefined } event
   * @returns { ImageAnimatorAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onFinish(event: (() => void) | undefined): this;

  /**
     * Set the attribute modifier
     *
   * @param { AttributeModifier<ImageAnimatorAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { ImageAnimatorAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(
    modifier: AttributeModifier<ImageAnimatorAttribute> | AttributeModifier<CommonMethod> | undefined
  ): this;
}

/**
 * Defines the ImageAnimator component.
 *
 * @returns { ImageAnimatorAttribute } The attribute of the ImageAnimator.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function ImageAnimator(): ImageAnimatorAttribute;

/**
 * 定义ImageAnimator组件。它需要在组件开始时调用setImageAnimatorOptions
 * 属性设置。并且它需要在组件属性设置结束时调用applyAttributeFinish。
 *
 * @param { CustomBuilderT<ImageAnimatorAttribute> } style - 设置组件属性的回调。
 * @returns { ImageAnimatorAttribute } ImageAnimator的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function ImageAnimator(style: CustomBuilderT<ImageAnimatorAttribute>): ImageAnimatorAttribute;
