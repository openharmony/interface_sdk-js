/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './@ohos.base';
import image from './@ohos.multimedia.image';
import colorSpaceManager from './@ohos.graphics.colorSpaceManager';

/**
 * 本模块提供获取组件截图的能力，包括已加载的组件的截图和没有加载的组件的截图。组件截图只能够截取组件大小的区域，如果组件的绘制超出了它的区域，或子组件的绘制超出了父组件的区域，这些在组件区域外绘制的内容不会在截图中呈现。兄弟节点堆叠在组
 * 件区域内，截图不会显示兄弟组件。
 * 
 * 缩放、平移、旋转等图形变换属性只对被截图组件的子组件生效；对目标组件本身应用图形变换属性不生效，显示的仍然是图形变换前的效果。
 * 
 * 组件截图典型使用场景（如长截图）及最佳实践请参考[使用组件截图](docroot://ui/arkts-uicontext-component-snapshot.md)。
 * 
 * > **说明：**
 * >
 * > - 对于使用[XComponent]{@link xcomponent}的场景，例如：Video或者相机流媒体展示类组件，不建议使用组件截图相关接口，建议使用
 * > [createPixelMapFromSurface]{@link @ohos.multimedia.image:image.createPixelMapFromSurface(surfaceId: string, region: Region)}
 * > 直接获取图片。
 * >
 * > - 如果组件自身内容不能填满组件大小区域，那么剩余位置截图返回的内容为透明像素。如果组件使用了[图像效果]{@link common}类属性或其他的效果类属性，则可能产生非用户预期的截图结果。请排查是否需要填充组件透明内容区域，或
 * > 使用窗口截图接口[snapshot]{@link @ohos.window:window.Window#snapshot(callback: AsyncCallback<image.PixelMap>)}替代。
 * >
 * > - 示例效果请以真机运行为准，当前 DevEco Studio预览器不支持。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 10 dynamic
 */
declare namespace componentSnapshot {

  /**
   * 定义组件截图的矩形区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  interface SnapshotRegion {

    /**
     * 截图区域矩形左上角的x轴坐标。
     * 
     * 单位：px 
     * 
     * 取值范围：[0, 组件宽度]
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     */
    left: number;

    /**
     * 截图区域矩形右下角的x轴坐标。
     * 
     * 单位：px 
     * 
     * 取值范围：[0, 组件宽度]
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     */
    right: number;

    /**
     * 截图区域矩形左上角的y轴坐标。
     * 
     * 单位：px 
     * 
     * 取值范围：[0, 组件高度]
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     */
    top: number;

    /**
     * 截图区域矩形右下角的y轴坐标。
     * 
     * 单位：px 
     * 
     * 取值范围：[0, 组件高度]
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     */
    bottom: number;
  }

  /**
   * 定义组件截图的矩形区域，start和end的值在布局方向为LTR时指定为left和right，在布局方向为RTL时指定为right和left。
   * 
   * > **说明：**
   * >
   * > 直接使用componentSnapshot可能导致[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题，建议使用getUIContext()获取
   * > [UIContext]{@link @ohos.arkui.UIContext}实例，并使用[getComponentSnapshot]{@link @ohos.arkui.UIContext:UIContext#getComponentSnapshot}
   * > 获取绑定实例的componentSnapshot。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  interface LocalizedSnapshotRegion {

    /**
     * 布局方向为LTR时表示截图区域矩形左上角的x轴坐标，布局方向为RTL时表示截图区域矩形右上角的x轴坐标。
     * 
     * 单位：px 
     * 
     * 取值范围：[0, 组件宽度]
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     */
    start: number;

    /**
     * 布局方向为LTR时表示截图区域矩形右下角的x轴坐标，布局方向为RTL时表示截图区域矩形左下角的x轴坐标。
     * 
     * 单位：px 
     * 
     * 取值范围：[0, 组件宽度]
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     */
    end: number;

    /**
     * 布局方向为LTR时表示截图区域矩形左上角的y轴坐标，布局方向为RTL时表示截图区域矩形右上角的y轴坐标。
     * 
     * 单位：px 
     * 
     * 取值范围：[0, 组件高度]
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     */
    top: number;

    /**
     * 截图区域矩形右下角的y轴坐标。
     * 
     * 单位：px 
     * 
     * 取值范围：[0, 组件高度]
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     */
    bottom: number;
  }

  /**
   * 表示组件截图区域。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  type SnapshotRegionType = SnapshotRegion | LocalizedSnapshotRegion;

  /**
   * 定义截图时所使用的色彩空间。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  interface ColorModeOptions {

    /**
     * 指定截图使用的色彩空间。
     * 
     * 如果知道被截图组件使用的色彩空间，可以通过`colorSpace`字段指定，并将`isAuto`设置为false，以达到预期的截图效果。
     * 
     * 取值范围：[colorSpaceManager.ColorSpace]{@link @ohos.graphics.colorSpaceManager:colorSpaceManager.ColorSpace}中
     * DISPLAY_P3、SRGB、DISPLAY_BT2020_SRGB。
     * 
     * 默认值：SRGB 
     * 
     * 如果值为undefined、null或未设置，则使用默认值截图；其他异常值会导致截图失败，返回错误码160003。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     */
    colorSpace?: colorSpaceManager.ColorSpace;

    /**
     * 是否由系统自动决定所使用的色彩空间。
     * 
     * 支持取值为：true表示系统自动决定所使用的色彩空间；false表示使用通过`colorSpace`字段设置的色彩空间类型进行截图。取非法值时，按默认值false处理。
     * 
     * 默认值：false
     * 
     * 离屏截图仅支持设置为false，否则会返回错误码160004。
     * 
     * 当`isAuto`设置为true时，建议将[SnapshotOptions]{@link componentSnapshot.SnapshotOptions}中的`waitUntilRenderFinished`字段也设置为
     * true，以便确保系统可以正常检测到所用的模式。
     * 
     * 在不确定组件使用的色彩空间时，建议将`isAuto`设置为true，让系统根据实际情况自动决定使用的色彩空间。
     * 
     * 当`isAuto`为true时，`colorSpace`字段设置的值会被忽略。此时，如果被截图组件同时包含不同色彩空间的子组件时，截图的色彩空间为优先级最高的色彩空间类型，优先级排序为DISPLAY_BT2020_SRGB >
     * DISPLAY_P3 > SRGB。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     */
    isAuto?: boolean;
  }

  /**
   * 定义截图所使用的动态范围模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  interface DynamicRangeModeOptions {

    /**
     * 指定截图使用的动态范围模式。
     * 
     * 默认情况下，系统以[STANDARD]{@link DynamicRangeMode}模式进行截图。如果知道被截图组件使用的动态范围模式，可通过`dynamicRangeMode`字段指定具体的动态范围模式，并将
     * `isAuto`设置为false，以达到预期的截图效果。
     * 
     * 虽然动态范围模式有三种，但是HIGH和CONSTRAINT的表现均为HDR（高动态范围）。STANDARD模式对应表现为SDR（标准动态范围）。
     * 
     * 在指定了合法的动态范围模式之后，截图实际采用的动态范围会受到被截图组件和设置值的双重影响，具体如下：
     * 
     * 1. 当被截图组件的动态范围为SDR时，即使指定动态范围模式为HIGH，截图实际采用的动态范围为SDR。
     * 2. 当被截图组件的动态范围为HDR时，截图实际采用的动态范围为指定的动态范围模式。
     * 3. 当配置[色彩空间]{@link componentSnapshot.ColorModeOptions}为SRGB或DISPLAY_P3时，截图实际采用的动态范围为SDR。
     * 4. 如果被截图组件同时包含SDR和HDR两种动态范围的子组件时，则当作HDR处理。
     * 5. 如果3和4的条件同时被满足，则截图实际采用的动态范围为SDR。
     * 
     * 取值范围：[DynamicRangeMode]{@link DynamicRangeMode} 枚举值。
     * 
     * 默认值：STANDARD 
     * 
     * 如果值为undefined、null或未设置，则使用默认值截图；其他异常值会导致截图失败，返回错误码160003。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     */
    dynamicRangeMode?: DynamicRangeMode;

    /**
     * 是否由系统自动决定所使用的动态范围模式。
     * 
     * 支持取值为：true表示系统自动决定所使用的动态范围模式；false表示使用通过`dynamicRangeMode`字段设置的动态范围类型进行截图。取非法值时，按默认值false处理。
     * 
     * 默认值：false
     * 
     * 离屏截图仅支持设置为false，否则会返回错误码160004。
     * 
     * 当`isAuto`设置为true时，建议将[SnapshotOptions]{@link componentSnapshot.SnapshotOptions}中的`waitUntilRenderFinished`字段也设置为
     * true，以便确保系统可以正常检测到所用的模式。
     * 
     * 在不确定组件使用的动态范围模式时，建议将`isAuto`设置为true，让系统根据实际情况自动决定使用的动态范围模式。
     * 
     * 当`isAuto`为true时，`dynamicRangeMode`字段设置的值会被忽略。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     */
    isAuto?: boolean;
  }

  /**
   * 定义组件截图的尺寸限制。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  interface SnapshotSizeLimitation {

    /**
     * 组件截图的最大宽度限制。
     * 
     * 取值范围：（-∞，+∞）
     * 
     * 单位：px
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    maxWidth: int;

    /**
     * 组件截图的最大高度限制。
     * 
     * 取值范围：（-∞，+∞）
     * 
     * 单位：px
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    maxHeight: int;
  }

  /**
   *  定义截图额外选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  interface SnapshotOptions {

    /**
     * 指定截图时图形侧绘制pixelmap的缩放比例，比例过大时截图时间会变长，或者截图可能会失败。
     * 
     * 取值范围：[0, +∞)，当小于等于0时按默认情况处理。 
     * 
     * 默认值：1 
     * 
     * **说明：** 
     * 
     * 请不要截取过大尺寸的图片，截图不建议超过屏幕尺寸的大小。当要截取的图片目标长宽超过底层限制时，截图会返回失败，不同设备的底层限制不同。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    scale?: number;

    /**
     * 设置是否强制系统在截图前等待所有绘制指令执行完毕。true表示强制系统在截图前等待所有绘制指令执行完毕，false表示不强制系统在截图前等待所有绘制指令执行完毕。该选项可尽可能确保截图内容是最新的状态，应尽量开启。需要注意的
     * 是，开启后接口可能需要更长的时间返回，具体的时间依赖页面当时时刻需要重绘区域的大小。
     * 
     * 默认值：false
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    waitUntilRenderFinished?: boolean;

    /**
     * 指定截图的矩形区域范围，默认为整个组件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 15 dynamic
     */
    region?: SnapshotRegionType;

    /**
     * 指定截图使用的色彩空间。
     * 
     * 默认值：{colorSpace: SRGB, isAuto: false}
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     */
    colorMode?: ColorModeOptions;

    /**
     * 指定截图使用的动态范围模式。
     * 
     * 默认值：{dynamicRangeMode: STANDARD, isAuto: false}
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     */
    dynamicRangeMode?: DynamicRangeModeOptions;
  }

  /**
   * 获取已加载的组件的截图，传入组件的[组件标识]{@link common}，找到对应组件进行截图。通过回调返回结果。
   * 
   * > **说明：** 
   * >
   * > - 从API version 12开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getComponentSnapshot]{@link @ohos.arkui.UIContext:UIContext#getComponentSnapshot}方法
   * > 获取当前UI上下文关联的[ComponentSnapshot]{@link @ohos.arkui.UIContext:ComponentSnapshot}对象。
   * >
   * > - 截图会获取最近一帧的绘制内容。如果在组件触发更新的同时调用截图，更新的渲染内容不会被截取到，截图会返回上一帧的绘制内容。
   *
   * @param { string } id - 目标组件的[组件标识]{@link common}。
   * @param { AsyncCallback<image.PixelMap> } callback - 截图返回结果的回调。
   * @param { SnapshotOptions } [options] - 截图相关的自定义参数。 [since 12]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.ComponentSnapshot#get
   */
  function get(id: string, callback: AsyncCallback<image.PixelMap>, options?: SnapshotOptions): void;

  /**
   * 获取已加载的组件的截图，传入组件的[组件标识]{@link common}，找到对应组件进行截图。通过Promise返回结果。
   * 
   * > **说明：**
   * >
   * > - 从API version 12开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getComponentSnapshot]{@link @ohos.arkui.UIContext:UIContext#getComponentSnapshot}方法
   * > 获取当前UI上下文关联的[ComponentSnapshot]{@link @ohos.arkui.UIContext:ComponentSnapshot}对象。
   * >
   * > - 截图会获取最近一帧的绘制内容。如果在组件触发更新的同时调用截图，更新的渲染内容不会被截取到，截图会返回上一帧的绘制内容。
   *
   * @param { string } id - 目标组件的[组件标识]{@link common}。
   * @param { SnapshotOptions } [options] - 截图相关的自定义参数。 [since 12]
   * @returns { Promise<image.PixelMap> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.ComponentSnapshot#get
   */
  function get(id: string, options?: SnapshotOptions): Promise<image.PixelMap>;

  /**
   * 在应用后台渲染CustomBuilder自定义组件，并输出其截图。通过回调返回结果并支持在回调中获取离屏组件绘制区域坐标和大小。
   * 
   * > **说明：** 
   * >
   * > - 从API version 12开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getComponentSnapshot]{@link @ohos.arkui.UIContext:UIContext#getComponentSnapshot}方法
   * > 获取当前UI上下文关联的[ComponentSnapshot]{@link @ohos.arkui.UIContext:ComponentSnapshot}对象。
   * >
   * > - 由于需要等待组件构建、渲染成功，离屏截图的回调有500ms以内的延迟。
   * >
   * > - builder中的组件不支持设置动画相关的属性，如[transition]{@link common}。
   * >
   * > - 部分执行耗时任务的组件可能无法及时在截图前加载完成，因此会截取不到加载成功后的图像。例如：加载网络图片的[Image]{@link image}组件、[Web]{@link web}组件。
   *
   * @param { CustomBuilder } builder - 自定义组件构建函数。<br/>**说明：** 不支持全局builder。<br/>builder的根组件宽高为0时，截图操作会失败并抛出100001错误码。
   * @param { AsyncCallback<image.PixelMap> } callback - 截图返回结果的回调。支持在回调中获取离屏组件绘制区域坐标和大小。
   * @param { number } [delay] - 指定触发截图指令的延迟时间。当布局中使用了图片组件时，需要指定延迟时间，以便系统解码图片资源。资源越大，解码需要的时间越长，建议尽量使用不需要解码的PixelMap资源。
   *     <br/> 当使用PixelMap资源或对Image组件设置syncLoad为true时，可以配置delay为0，强制不等待触发截图。该延迟时间并非指接口从调用到返回的时间，由于系统需要对传入的builder进行临时离屏构
   *     建，因此返回的时间通常要比该延迟时间长。<br/>**说明：** 截图接口传入的builder中，不应使用状态变量控制子组件的构建，如果必须要使用，在调用截图接口时，也不应再有变化，以避免出现截图不符合预期的情况。
   *     <br/> 默认值：300 <br/> 单位：毫秒 <br/> 取值范围：[0, +∞)，小于0时按默认值处理。 [since 12]
   * @param { boolean } [checkImageStatus] - 指定是否允许在截图之前，校验图片解码状态。如果为true，则会在截图之前检查所有Image组件是否已经解码完成。为false，则不会校验图片解码状态。
   *     如果没有完成检查，则会放弃截图并返回异常。<br/>默认值：false [since 12]
   * @param { SnapshotOptions } [options] - 截图相关的自定义参数。 [since 12]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The builder is not a valid build function.
   * @throws { BusinessError } 160001 - An image component in builder is not ready for taking a snapshot. The check for
   *     the ready state is required when the checkImageStatus option is enabled. [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.ComponentSnapshot#createFromBuilder
   */
  function createFromBuilder(builder: CustomBuilder, callback: AsyncCallback<image.PixelMap>,
    delay?: number, checkImageStatus?: boolean, options?: SnapshotOptions): void;

  /**
   * 在应用后台渲染CustomBuilder自定义组件，并输出其截图。通过Promise返回结果，支持获取离屏组件绘制区域的坐标和大小。
   * 
   * > **说明：** 
   * >
   * > - 从API version 12开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getComponentSnapshot]{@link @ohos.arkui.UIContext:UIContext#getComponentSnapshot}方法
   * > 获取当前UI上下文关联的[ComponentSnapshot]{@link @ohos.arkui.UIContext:ComponentSnapshot}对象。
   * >
   * > - 由于需要等待组件构建、渲染成功，离屏截图的回调有500ms以内的延迟。
   * >
   * > - builder中的组件不支持设置动画相关的属性，如[transition]{@link common}。
   * >
   * > - 部分执行耗时任务的组件可能无法及时在截图前加载完成，因此会截取不到加载成功后的图像。例如：加载网络图片的[Image]{@link image}组件、[Web]{@link web}组件。
   *
   * @param { CustomBuilder } builder - 自定义组件构建函数。<br/>**说明：** 不支持全局builder。<br/>builder的根组件宽高为0时，截图操作会失败并抛出100001错误码。
   * @param { number } [delay] - 指定触发截图指令的延迟时间。当布局中使用了图片组件时，需要指定延迟时间，以便系统解码图片资源。资源越大，解码需要的时间越长，建议尽量使用不需要解码的PixelMap资源。
   *     <br/> 当使用PixelMap资源或对Image组件设置syncLoad为true时，可以配置delay为0，强制不等待触发截图。该延迟时间并非指接口从调用到返回的时间，由于系统需要对传入的builder进行临时离屏构
   *     建，因此返回的时间通常要比该延迟时间长。<br/>**说明：** 截图接口传入的builder中，不应使用状态变量控制子组件的构建，如果必须要使用，在调用截图接口时，也不应再有变化，以避免出现截图不符合预期的情况。
   *     <br/> 默认值：300 <br/> 单位：毫秒 [since 12]
   * @param { boolean } [checkImageStatus] - 指定是否允许在截图之前，校验图片解码状态。如果为true，则会在截图之前检查所有Image组件是否已经解码完成。为false，则不会校验图片解码状态。
   *     如果没有完成检查，则会放弃截图并返回异常。<br/>默认值：false [since 12]
   * @param { SnapshotOptions } [options] - 截图相关的自定义参数。 [since 12]
   * @returns { Promise<image.PixelMap> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The builder is not a valid build function.
   * @throws { BusinessError } 160001 - An image component in builder is not ready for taking a snapshot. The check for
   *     the ready state is required when the checkImageStatus option is enabled. [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.ComponentSnapshot#createFromBuilder
   */
  function createFromBuilder(builder: CustomBuilder, delay?: number,
    checkImageStatus?: boolean, options?: SnapshotOptions): Promise<image.PixelMap>;

  /**
   * 获取已加载的组件的截图，传入组件的[组件标识]{@link common}，找到对应组件进行截图。同步等待截图完成返回[PixelMap]{@link @ohos.multimedia.image:image.PixelMap}。
   * 
   * > **说明：**
   * >
   * > 截图会获取最近一帧的绘制内容。如果在组件触发更新的同时调用截图，更新的渲染内容不会被截取到，截图会返回上一帧的绘制内容。
   *
   * @param { string } id - 目标组件的[组件标识]{@link common}。
   * @param { SnapshotOptions } [options] - 截图相关的自定义参数。
   * @returns { image.PixelMap } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @throws { BusinessError } 160002 - Timeout.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options. [since 23]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  function getSync(id: string, options?: SnapshotOptions): image.PixelMap;
}

export default componentSnapshot;