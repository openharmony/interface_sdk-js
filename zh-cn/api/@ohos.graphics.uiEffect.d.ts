/*
* Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @kit ArkGraphics2D
 */

import { AsyncCallback } from './@ohos.base';
import type common2D from './@ohos.graphics.common2D';
import type image from './@ohos.multimedia.image';
/*** if arkts static */
import { LinearGradientBlurOptions } from '@ohos.arkui.component';
/*** endif */

/**
 *
 * @syscap SystemCapability.Graphics.Drawing
 * @form [since 22]
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace uiEffect {

  /**
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 23 static
   */
  
  interface Filter {
    /**
     * 将边缘像素扩展效果添加至组件上。
     *
     * @param { Array<double> } stretchSizes - 上下左右四个方向边缘像素扩展的百分比比例，取值范围为[-1, 1]。
     *     正值表示向外扩展，上下左右四个方向分别用指定原图比例的边缘像素填充。负值表示内缩，但是最终图像大小不变。
     *     注意四个方向对应的参数需统一为非正值或非负值。
     * @param { TileMode } tileMode - 边缘像素扩展的像素填充模式。
     * @returns { Filter } - 返回挂载了边缘像素扩展效果的Filter。
          * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    pixelStretch(stretchSizes: Array<double>, tileMode: TileMode): Filter;

    /**
     * 将模糊效果添加至组件上。
     *
     * @param { double } blurRadius - 模糊半径，单位为px。
     *     取值需大于等于0，模糊半径越大，模糊效果越强。
     *     模糊半径为0时无模糊效果。
     * @returns { Filter } - 返回挂载了模糊效果的Filter。
          * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 23 static
     */
    blur(blurRadius: double): Filter;

    /**
     * 将水波纹效果添加至组件上。
     *
     * @param { double } progress - 表示水波纹的进度，取值范围为[0, 1]。
     *     水波纹进度越趋向于1，水波纹展示越完全。
     *     超出取值范围水波纹不会出现效果。
     * @param { int } waveCount - 水波纹波动时波纹的个数，取值范围为[1, 3]。
     *     水波纹的个数只能取整数，如果为浮点数或超出取值范围，水波纹不会出现效果。
     * @param { double } x - 水波纹中心在屏幕中第一次出现的x轴位置。
     *     水波纹对屏幕进行归一化处理，左上角的坐标为（0, 0），右上角坐标为（1, 0）。
     *     当x取值为负值时，代表在屏幕左侧。
     * @param { double } y - 水波纹中心在屏幕中第一次出现的y轴位置。
     *     水波纹对屏幕进行归一化处理，左上角的坐标为（0, 0），左下角坐标为（0, 1）。
     *     当y取值为负值时，代表在屏幕上方。
     * @param { WaterRippleMode } rippleMode - 水波纹的场景模式。
     * @returns { Filter } - 返回挂载了水波纹效果的Filter。
     * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    waterRipple(progress: double, waveCount: int, x: double, y: double, rippleMode: WaterRippleMode): Filter;

    /**
     * 将飞入飞出形变效果添加至组件上。
     *
     * @param { double } degree - 表示控制飞入飞出形变的程度，取值范围为[0, 1]。
     *     越靠近1，变形程度越明显。
     *     超出取值范围形变不会出现效果。
     * @param { FlyMode } flyMode - 飞入飞出的场景模式。
     *     BOTTOM表示从设备底部飞入飞出形变场景。
     *     TOP表示从设备顶部飞入飞出形变场景。
     * @returns { Filter } - 返回挂载了飞入飞出形变效果的Filter。
     * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    flyInFlyOutEffect(degree: double, flyMode: FlyMode): Filter;

    /**
     * 将透镜畸变效果添加至组件上。
     *
     * @param { double } distortionK - 畸变系数，表示透镜畸变的程度，取值范围为[-1, 1]。
     *     畸变系数设置小于-1的值时，按值为-1处理；设置大于1的值时，按值为1处理。
     *     畸变系数小于0时，效果为桶形畸变；大于0时，效果为枕形畸变；
     *     越接近0时，畸变程度越小，等于0时，没有畸变效果。
     * @returns { Filter } - 返回挂载了透镜畸变效果的Filter。
     * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    distort(distortionK: double): Filter;

    /**
     * 为组件内容添加半径线性渐变模糊效果。
     *
     * @param { double } radius - 模糊半径，单位为px，模糊半径越大越模糊。
     *     取值范围为[0, 128]。模糊半径设置为0时不模糊；模糊半径设置小于0的值时，按值为0处理；
     *     设置大于128的值时，按值为128处理。
     * @param { LinearGradientBlurOptions } gradientParam - 线性渐变参数，包含两个部分fractionStops和direction。
     * @returns { Filter } - 返回挂载了半径线性渐变模糊效果的Filter。
     * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    radiusGradientBlur(radius: double, gradientParam: LinearGradientBlurOptions): Filter;

    /**
     * 将贝塞尔曲线变形的效果添加至组件上。该效果通过在图层边界上创建封闭的贝塞尔曲线，实现对图像的精准扭曲和形状调整。
     * 贝塞尔曲线共有四段，首尾顺次相连，每段包含一个顶点和两个切点。
     *
     * @param { Array<common2D.Point> } controlPoints - 12个贝塞尔形变控制点，更改控制点的位置可改变形成边缘的曲线的形状，
     *     从而扭曲图像。控制点坐标为0-1坐标系，且坐标值可大于1或小于0。
     * @returns { Filter } - 返回挂载了贝塞尔曲线变形效果的Filter。
     * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    bezierWarp(controlPoints: Array<common2D.Point>): Filter;

    /**
     * 为组件内容添加3D光照效果。
     *
     * @param { common2D.Point3d } lightPosition - 光源在组件空间的位置，[-1, -1, 0]为组件左上角，[1, 1, 0]为组件的右下角，
     *     z轴分量越大光源离组件平面越远，可照射区域越大。
     *     x分量取值范围[-10, 10]，y分量取值范围[-10, 10]，z分量取值范围[0, 10]，超出范围会自动截断。
     * @param { common2D.Color } lightColor - 光源颜色，各元素取值范围为[0, 1]，超出范围会自动截断。
     * @param { double } lightIntensity - 光源强度，取值范围[0, 1]，数值越大光源亮度越大，超出范围会自动截断。
     * @param { Mask } [displacementMap] - 该参数暂不生效。
     * @returns { Filter } - 返回了具有内容光照效果的filter。
     * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    contentLight(lightPosition: common2D.Point3d, lightColor: common2D.Color, lightIntensity: double,
      displacementMap?: Mask): Filter;

    /**
     * 为组件内容添加颜色渐变效果。
     *
     * @param { Array<Color> } colors - 颜色数组，多个颜色的渐变。数组长度取值范围[0, 12], 每一个颜色值取值范围为大于等于0。
     *     数组长度等于0或大于12时无效果，colors、positions和strengths的数组长度不相等时无效果。
     * @param { Array<common2D.Point> } positions - 位置数组，颜色对应的分布位置。数组长度取值范围[0, 12]。
     *     数组长度等于0或大于12时无效果，colors、positions和strengths的数组长度不相等时无效果。
     * @param { Array<double> } strengths - 强度数组，颜色对应的扩散强度。数组长度取值范围[0, 12], 每一个强度值取值范围为大于等于0。
     *     数组长度等于0或大于12时无效果，colors、positions和strengths的数组长度不相等时无效果。
     * @param { Mask } [alphaMask] - 遮罩alpha，颜色对应的alpha显示遮罩。不设置时，默认组件内容全部有颜色渐变效果。
     * @returns { Filter } - 返回挂载了颜色渐变效果的Filter。
     * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    colorGradient(colors: Array<Color>, positions: Array<common2D.Point>, strengths: Array<double>,
        alphaMask?: Mask): Filter;

    /**
     * 为组件内容检测边缘，并添加边缘高亮效果。
     *
     * @param { double } alpha - 指定描边高光透明度，越大描边越明显。取值范围为[0, 1]。
     *     设置为0时无描边；设置小于0的值时，按值为0处理；设置大于1的值时，按值为1处理。
     * @param { Color } [color] - 指定描边高光颜色，不设置时，将默认使用组件内容的原始颜色。
     *     如果有值，使用指定颜色。设置不为null时，Color中的alpha不发挥作用，仅使用rgb。
     * @param { Mask } [mask] - 指定描边高光强度。不设置时，默认组件内容全部有描边高光效果。
     * @param { boolean } [bloom] - 指定描边是否发光。设置为true时，有描边和发光效果；设置为false时，只有描边效果无发光效果；
     *     不设置时，默认为true。小于16*16的图片默认只有描边效果，无发光效果，此参数失去作用。
     * @returns { Filter } - 返回挂载了描边高光效果的Filter。
     * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    edgeLight(alpha: double, color?: Color, mask?: Mask, bloom?: boolean): Filter;

    /**
     * 为组件内容添加扭曲效果。
     *
     * @param { Mask } displacementMap - 指定扭曲程度。与factor相乘后共同决定扭曲程度。
     * @param { [double, double] } [factor] - 指定水平、竖直方向扭曲程度系数，系数的绝对值越大，扭曲程度越明显，
     *     建议取值范围为[-10.0, 10.0]。不设置时，默认值为1.0。设置为0时，无扭曲效果。与mask相乘后共同决定扭曲程度。
     * @returns { Filter } - 返回挂载了扭曲效果的Filter。
     * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    displacementDistort(displacementMap: Mask, factor?: [double, double]): Filter;

    /**
     * 为组件内容添加由置换贴图控制的色散效果。
     *
     * @param { Mask } dispersionMap - 置换贴图，用于控制色散的强度、方向和透明度。建议使用PixelMapMask类型的置换贴图。
     * @param { double } alpha - 色散整体透明度，透明度越小效果越透明。取值范围为[0, 1.0]。
     *     透明度设置为0时色散效果不生效；透明度设置小于0的值时，按值为0处理；设置大于1.0的值时，按值为1.0处理。
     * @param { [double, double] } [rFactor] - X/Y方向上R通道的色散基础偏移，偏移越大红色色散效果越明显。
     *     每个方向上的取值范围为[-1.0, 1.0]。偏移设置小于-1.0的值时，按值为-1.0处理；设置大于1.0的值时，按值为1.0处理。
     * @param { [double, double] } [gFactor] - X/Y方向上G通道的色散基础偏移，偏移越大绿色色散效果越明显。取值范围同rFactor。
     * @param { [double, double] } [bFactor] - X/Y方向上B通道的色散基础偏移，偏移越大蓝色色散效果越明显。取值范围同rFactor。
     * @returns { Filter } - 返回挂载了由置换贴图控制的色散效果的Filter。
     * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    maskDispersion(dispersionMap: Mask, alpha: double, rFactor?: [double, double], gFactor?: [double, double],
      bFactor?: [double, double]): Filter;

    /**
     * 为组件内容添加HDR（高动态范围成像）提亮效果。不建议嵌套使用，强行嵌套使用可能造成过曝现象。
     *
     * @permission ohos.permission.HDR_BRIGHTNESS [since 24]
     * @param { double } ratio - 提亮倍数，取值范围为[1.0, 设备当前支持最大提亮倍数]。
     *     设置小于1.0的值时，按值为1.0处理；当值等于1.0时，不做任何处理；
     *     当值大于1.0时，会尝试触发HDR渲染管线，设置大于设备当前支持最大提亮倍数的值时，按值为设备当前支持最大提亮倍数处理。
     * @returns { Filter } - 返回挂载了HDR提亮效果的Filter。
     * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
     *     [since 20 - 23]
     * @throws { BusinessError } 201 - 权限校验失败，应用无权限使用该API，需要申请权限。
     *     [since 24]
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi [since 20 - 23]
     * @publicapi [since 24]
     * @since 20 dynamic
     * @since 23 static
     */
    hdrBrightnessRatio(ratio: double): Filter;

    /**
     * 为组件内容提供基于Mask的渐变模糊效果。
     *
     * @param { double } radius - 最大模糊半径，单位为px，该值越大越模糊。取值范围为[0, 128]。
     *     模糊半径设置为0时不模糊；模糊半径设置小于0的值时，按值为0处理；设置大于128的值时，按值为128处理。
     * @param { Mask } radiusMap - 代表模糊程度的Mask对象。
     * @returns { Filter } - 返回当前效果的Filter对象。
     * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    variableRadiusBlur(radius: double, radiusMap: Mask): Filter;

    /**
     * 为组件内容提供基于Mask和平行光的光照效果。
     *
     * @param { common2D.Point3d } direction - 方向光的入射方向。
     * @param { Color } color - 光照颜色。
     * @param { double } intensity - 光照强度，非负数。
     * @param { Mask } [mask] - 置换贴图，用于描述二维图像表面的三维细节，通过法线或高度图增强局部细节和光照反射效果，
     *     若输入为高度图，须与factor参数配合使用。默认为空，表现为全局无细节的平面光照效果。
     * @param { double } [factor] - 采样缩放系数。默认值为null，mask作为法线图采样；非默认值时，mask作为高度图采样，
     *     实际高度值为mask的采样值与factor的乘积。
     * @returns { Filter } - 返回挂载了由置换贴图控制的光照效果的Filter。
     * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    directionLight(direction: common2D.Point3d, color: Color, intensity: double, mask?: Mask, factor?: double): Filter;

    /**
     * 为组件内容提供基于Mask的转场效果。
     *
     * @param { Mask } alphaMask - 通过遮罩指定转场效果的作用区域。
     * @param { double } [factor] - 转场过渡系数，取值范围为[0.0, 1.0]，默认值为1.0。
     *     factor值越大画面越接近转场后页面，超出范围自动截断到[0.0, 1.0]。
     * @param { boolean } [inverse] - 是否启用反向转场，true表示启用，false表示不启用，默认值为false。
     * @returns { Filter } - 返回挂载了转场效果的Filter。
     * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    maskTransition(alphaMask: Mask, factor?: double, inverse?: boolean): Filter;

    /**
     * 应用热浪扭曲效果到图像，模拟热空气流动产生的视觉扭曲。
     *
     * @param { HeatDistortionEffectParam } param - 热浪扭曲效果的参数。
     * @returns { Filter } - 返回添加了热浪扭曲效果的Filter。
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    heatDistortion(param: HeatDistortionEffectParam): Filter;

    /**
     * 应用模糊气泡上升效果到图像，模拟气泡在液体中上升的梦幻模糊扭曲效果。
     *
     * @param { BlurBubblesRiseEffectParam } param - 模糊气泡上升效果的参数。
     * @returns { Filter } - 返回模糊气泡上升滤镜。
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    blurBubblesRise(param: BlurBubblesRiseEffectParam): Filter;
  }

  /**
   * 像素填充模式枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum TileMode {
    /**
     * 截断。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    CLAMP = 0,

    /**
     * 重复。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    REPEAT = 1,

    /**
     * 镜像。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    MIRROR = 2,

    /**
     * 透明。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    DECAL = 3,
  }

  /**
   * 水波纹场景模式枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum WaterRippleMode {
    /**
     * 手机碰2in1设备（接收端）。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    SMALL2MEDIUM_RECV = 0,

    /**
     * 手机碰2in1设备（发送端）。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    SMALL2MEDIUM_SEND = 1,

    /**
     * 手机碰手机。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    SMALL2SMALL = 2,

    /**
     * 2in1设备与其它设备共享（键鼠共享场景）。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 17 dynamic
     * @since 23 static
     */
    MINI_RECV = 3,
  }

  /**
   * 飞入飞出形变场景模式枚举。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum FlyMode {

    /**
     * 从底部进行飞入飞出形变。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    BOTTOM = 0,

    /**
     * 从顶部进行飞入飞出形变。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    TOP = 1,
  }

  /**
   * VisualEffect效果类，用于将相应的效果添加到指定的组件上。
   * 在调用VisualEffect的方法前，需要先通过createEffect创建一个VisualEffect实例。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface VisualEffect {

    /**
     * 将混合器添加至组件上以改变组件背景颜色，具体的更改效果由输入决定，目前仅支持提亮混合器。
     *
     * @param { BrightnessBlender } blender - 用于混合背景颜色的blender。
     * @returns { VisualEffect } 返回添加了背景颜色更改效果的VisualEffect。
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    backgroundColorBlender(blender: BrightnessBlender): VisualEffect;

    /**
     * 为圆角矩形组件边框添加3D光照效果。
     *
     * @param { common2D.Point3d } lightPosition - 光源在组件空间的3D位置，[-1, -1, 0]为组件左上角，[1, 1, 0]为组件的右下角，
     *     z轴分量越大，光源离组件平面越远，可照射区域越大。
     *     x轴分量取值范围[-10, 10]，y轴分量取值范围[-10, 10]，z轴分量取值范围[0, 10]，超出范围会自动截断。
     * @param { common2D.Color } lightColor - 光源颜色，各元素取值范围为[0, 1]，超出范围会自动截断。
     * @param { double } lightIntensity - 光源强度，取值范围[0, 1]，数值越大光源亮度越大，超出范围会自动截断。
     * @param { double } borderWidth - 组件边框的受光宽度，取值范围为[0.0, 30.0]，超出范围会自动截断。
     *     设置为0.0时，组件边框无光照效果，数值越大，光可照亮的区域越宽。
     * @returns { VisualEffect } - 返回了具有边框光照效果的VisualEffect。
     * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    borderLight(lightPosition: common2D.Point3d, lightColor: common2D.Color, lightIntensity: double,
      borderWidth: double): VisualEffect;

    /**
     * 此方法为组件添加颜色渐变效果。
     *
     * @param { Array<Color> } colors - 颜色数组，用于实现多颜色渐变。
     *     数组长度范围0到12，每个颜色值大于等于0。数组长度为0或大于12，或colors、positions和strengths的数组长度不一致，则无颜色渐变效果。
     * @param { Array<common2D.Point> } positions - 位置数组，颜色对应的位置。
     *     数组长度范围为0到12。数组长度为0或大于12，或colors、positions和strengths的数组长度不一致，则无颜色渐变效果。
     * @param { Array<double> } strengths - 强度数组，表示颜色对应的强度。
     *     数组长度范围为0到12，每一个强度值大于等于0。数组长度为0或大于12，或colors、positions和strengths的数组长度不一致时，则无颜色渐变效果。
     * @param { Mask } [alphaMask] - 遮罩alpha，颜色对应的alpha遮罩。不设置时，颜色渐变效果的透明度完全由colors参数决定。
     * @returns { VisualEffect } - 返回具有颜色渐变效果的VisualEffect。
     * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    colorGradient(colors: Array<Color>, positions: Array<common2D.Point>, strengths: Array<double>,
      alphaMask?: Mask): VisualEffect;

    /**
     * 设置液态材质效果
     *
     * @param { LiquidMaterialEffectParam } param - 材质所需相关变量，用于控制材质显示，包含材质开关、折射系数、反射系数和扰动系数。
     * @param { Mask } useEffectMask - 声明是否使用模糊缓存。使用createUseEffectMask(true)创建的Mask实例使用模糊缓存；
     *     使用createUseEffectMask(false)创建的Mask实例不使用模糊缓存。
     * @param { Mask } [distortMask] - 材质扰动效果需要的扰动纹理，由使用pixelMap创建Mask实例时的图片纹理决定。
     *     当材质的扰动系数不为0时，需要为材质扰动预先设置一张纹理，否则无扰动效果。
     *     当材质的扰动系数为0或者此参数不填时，无扰动效果。
     * @param { BrightnessParam } [brightnessParam] - 为材质增加提亮效果。默认不添加提亮效果。
     * @returns { VisualEffect } - 返回具有材质效果的VisualEffect。
     * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    liquidMaterial(param : LiquidMaterialEffectParam, useEffectMask: Mask, distortMask?: Mask,
      brightnessParam?: BrightnessParam): VisualEffect;

    /**
     * 此方法为组件添加非线性形变效果。
     *
     * 1. 该视效支持控件范围外的绘制，但仍会受到父控件Clip的影响。
     * 2. 因包含前景Filter，未与EffectComponent组合使用时不兼容组件自身及子组件的部分视效（如BrightnessBlender或systemMaterial）。
     * 3. 支持对系统材质进行扭曲，但是与EffectComponent组合使用时，会导致系统材质的背景扭曲。
     * 4. 调用distortionCollapse时，会创建与形变后区域等大的离屏画布，再将当前组件（含子组件）的内容绘制到离屏画布上，再对画布上的已有内容进行形变绘制。
     * 5. 使用该实现方式时，如果不与EffectComponent组合使用，将导致systemMaterial、backgroundEffect、brightness、blur等需要截屏的接口无法截取到正确的画面。
     *
     * @param { DistortionParam } distortionParam - 非线性形变效果的参数。
     * @returns { VisualEffect } - 返回添加了非线性形变效果的VisualEffect。
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    distortionCollapse(distortionParam: DistortionParam): VisualEffect;
  }

  /**
   * 材质提亮参数的详细说明。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  interface BrightnessParam {

    /**
     * 灰度调整线性系数。取值范围[-1, 1]，小于-1时取值为-1，大于1时取值为1，值越大，灰度调整效果越强。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    rate : double;

    /**
     * 灰度调整比例。取值范围[-1, 1]，小于-1时取值为-1，大于1时取值为1，值越大，灰度调整效果越强。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    lightUpDegree : double;

    /**
     * 灰度调整三阶系数。取值范围[-1, 1]，小于-1时取值为-1，大于1时取值为1，值越大，灰度调整效果越强。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    cubicCoeff : double;

    /**
     * 灰度调整二阶系数。取值范围[-1, 1]，小于-1时取值为-1，大于1时取值为1，值越大，灰度调整效果越强。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    quadCoeff : double;

    /**
     * 提亮基准饱和度。取值范围[0, 1]，小于0时取值为0，大于1时取值为1，值越大基准饱和度越高。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    saturation : double;

    /**
     * 基于基准饱和度的正向调整系数。取值范围[-1, 1]，小于-1时取值为-1，大于1时取值为1，值越大饱和度越高。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    posRgb : [double, double, double];

    /**
     * 基于基准饱和度的负向调整系数。取值范围[-1, 1]，小于-1时取值为-1，大于1时取值为1，值越大饱和度越低。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    negRgb : [double, double, double];

    /**
     * 提亮效果混合比例。取值范围[0, 1]，小于0时取值为0，大于1时取值为1，值越大，提亮效果越弱。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    fraction : double;
  }

  /**
   * 热浪扭曲效果的参数。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface HeatDistortionEffectParam {

    /**
     * 热浪扭曲的强度。
     * 取值范围[0, 1]，超出边界会在实现时自动截断。0表示无扭曲，1表示最大扭曲程度。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    intensity: double;

    /**
     * 热浪扭曲的噪声缩放，控制噪声纹理的细度。
     * 取值范围[0.1, 5.0]，超出边界会在实现时自动截断。值越大，噪声纹理越细腻。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    noiseScale: double;

    /**
     * 热浪扭曲的上升权重，控制气泡的上升速度。
     * 取值范围[0, 1]，超出边界会在实现时自动截断。值越大，向上运动越明显。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    riseWeight: double;

    /**
     * 热浪扭曲的动画进度。
     * 取值范围[0, 1]，超出边界会在实现时自动截断。0对应动画开始，1对应动画结束。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    progress: double;
  }

  /**
   * 模糊气泡上升效果的参数。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface BlurBubblesRiseEffectParam {

    /**
     * 模糊气泡上升效果的高斯模糊强度。
     * 取值范围[0, 1]，超出边界会在实现时自动截断。0表示无模糊，1表示最大模糊程度。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    blurIntensity: double;

    /**
     * 原图与模糊图的混合强度。
     * 取值范围[0, 1]，超出边界会在实现时自动截断。0对应原图，1对应模糊后的图像。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    mixStrength: double;

    /**
     * 模糊气泡上升效果的动画进度。
     * 取值范围[0, 1]，超出边界会在实现时自动截断。0对应动画开始，1对应动画结束。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    progress: double;

    /**
     * 模糊气泡上升效果的遮罩图像，控制模糊气泡区域。
     * 被遮罩的区域有模糊效果，未遮罩的区域无模糊效果。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    maskImage: image.PixelMap;
  }

  /**
   * 材质的各项参数及其用途的详细说明。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  interface LiquidMaterialEffectParam {

    /**
     * 是否开启材质效果。 true表示开启材质效果，false表示关闭材质效果。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    enable : boolean;

    /**
     * 扰动效果进度。取值范围[0, 1]，小于0时取值为0，大于1时取值为1。0表示开始扰动，1表示结束扰动。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    distortProgress : double;

    /**
     * 扰动效果系数。值大于等于0，值小于0时表示无扰动效果。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    distortFactor : double;

    /**
     * 水波效果进度。值大于等于0，值小于0时表示无水波效果。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    rippleProgress : double;

    /**
     * 水波效果作用的位置。数组中每个位置包含x和y两个维度，最多支持10个位置坐标传入。传入超出10个位置坐标则整体无效。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    ripplePosition?: Array<[double, double]>;

    /**
     * 折射效果系数。取值范围[0, 10]，小于0时取值为0，大于10时取值为10。值为0表示无折射效果，值越大折射强度越高。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    refractionFactor : double;

    /**
     * 反射系数。取值范围[0, 10]，小于0时取值为0，大于10时取值为10。值为0表示无反射效果，值越大反射强度越高。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    reflectionFactor : double;

    /**
     * 材质系数。取值范围[0, 1]，小于0时取值为0，大于1时取值为1。值为0表示无材质效果，使用叠加颜色填充，值越大材质效果越明显。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    materialFactor : double;

    /**
     * 材质叠加的颜色，四个变量分别对应RGBA。取值范围[0, 1]，小于0时取值为0，大于1时取值为1。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    tintColor : [double, double, double, double];
  }

  /**
   * 混合器类型，用于描述混合效果。
   *
   * @unionmember { BrightnessBlender } 提亮混合器
   * @unionmember { HdrBrightnessBlender } 支持HDR的提亮混合器
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  type Blender = BrightnessBlender | HdrBrightnessBlender;

  /**
   * 混合器类型，用于描述混合效果。
   *
   * @unionmember { BrightnessBlender } 提亮混合器
   * @unionmember { HdrBrightnessBlender } 支持HDR的提亮混合器 [since 20]
   * @unionmember { HdrDarkenBlender } 支持HDR的压暗混合器 [since 26.0.0]
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @stagemodelonly
   * @since 13 dynamic
   */
  type Blender = BrightnessBlender | HdrBrightnessBlender | HdrDarkenBlender;

  /**
   * 提亮混合器，用于将提亮效果添加到指定的组件上。
   * 在调用BrightnessBlender前，需要先通过createBrightnessBlender创建一个BrightnessBlender实例。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface BrightnessBlender {

    /**
     * 灰度调整的三阶系数。 取值范围[-20, 20]。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    cubicRate: double;

    /**
     * 灰度调整的二阶系数。 取值范围[-20, 20]。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    quadraticRate: double;

    /**
     * 灰度调整的线性系数。 取值范围[-20, 20]。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    linearRate: double;

    /**
     * 灰度调整的比例。 取值范围[-20, 20]。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    degree: double;

    /**
     * 提亮的基准饱和度。 取值范围[0, 20]。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    saturation: double;

    /**
     * 基于基准饱和度的RGB正向调整参数。 每个number的取值范围[-20, 20]。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    positiveCoefficient: [double, double, double];

    /**
     * 基于基准饱和度的RGB负向调整参数。 每个number的取值范围[-20, 20]。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    negativeCoefficient: [double, double, double];

    /**
     * 提亮效果的混合比例。 取值范围[0, 1]，超出边界会在实现时自动截断。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @form [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fraction: double;
  }

  /**
   * 支持HDR的提亮混合器（继承自BrightnessBlender），用于将提亮效果添加到指定的组件上。
   * 在调用HdrBrightnessBlender前，需要先通过createHdrBrightnessBlender创建一个HdrBrightnessBlender实例。
   * 该混合器参数可参考BrightnessBlender。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface HdrBrightnessBlender extends BrightnessBlender {  }

  /**
   * 支持HDR的压暗混合器，用于将压暗效果添加到指定的组件上。
   * 在调用HdrDarkenBlender前，需要先通过createHdrDarkenBlender创建一个HdrDarkenBlender实例。
   *
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  interface HdrDarkenBlender {

    /**
     * HDR的提亮倍数。取值范围[1.0, 设备当前支持最大提亮倍数]。
     * 设置小于1.0的值时，按值为1.0处理；当值等于1.0时，为组件原本亮度；
     * 设置大于设备当前支持最大提亮倍数的值时，按值为设备当前支持最大提亮倍数处理，
     * 支持最大提亮倍数 = 设备最大亮度 / 设备默认亮度。
     *
     * @property { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    hdrBrightnessRatio: double;

    /**
     * 将RGB颜色转换为灰度值，该公式可根据色域切换。三个分量均无边界限制。
     * 默认值为标准灰度权重[0.299, 0.587, 0.114]。
     *
     * @property { ?[double, double, double] }
     * @default [0.299, 0.587, 0.114]
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamiconly
     */
    grayscaleFactor?: [double, double, double];
  }

  /**
   * RGBA格式的颜色描述。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface Color {

    /**
     * 颜色的R分量（红色）。值大于等于0，当值小于0时无效。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    red: double;

    /**
     * 颜色的G分量（绿色）。值大于等于0，当值小于0时无效。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    green: double;

    /**
     * 颜色的B分量（蓝色）。值大于等于0，当值小于0时无效。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    blue: double;

    /**
     * 颜色的A分量（透明度）。值大于等于0，当值小于0时无效。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    alpha: double;
  }

  /**
   * Mask效果类，作为Filter以及VisualEffect的输入使用。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  class Mask {

    /**
     * 通过输入波环圆心的位置、半径和宽度创建波环遮罩效果Mask实例，具体的效果由输入的参数决定。
     *
     * @param { common2D.Point } center - 设置波环圆心在组件上的位置，[0, 0]为组件左上角，[1, 1]为组件的右下角。
     *     取值范围[-10, 10]，超出边界会在实现时自动截断。
     * @param { double } radius - 设置波环的半径，半径为1等于组件的高度。
     *     取值范围[0, 10]，超出边界会在实现时自动截断。
     * @param { double } width - 设置波环的宽度。
     *     取值范围[0, 10]，超出边界会在实现时自动截断。
     * @param { double } [offset] - 设置波峰位置的偏移。
     *     默认值为0，表示波峰在波环的正中心；-1.0表示波峰在波环的最内侧；1.0表示波峰在波环的最外侧。
     *     取值范围[-1, 1]，超出边界会在实现时自动截断。
     * @returns { Mask } - 返回具有波环遮罩效果的Mask。
          * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static createRippleMask(center: common2D.Point, radius: double, width: double, offset?: double): Mask;

    /**
     * 通过输入的pixelMap的待绘制区域、挂载节点的绘制区域和绘制区域外填充的颜色创建具有缩放效果的Mask实例，具体的效果由输入的参数决定。
     *
     * @param { image.PixelMap } pixelMap - image模块创建的PixelMap实例。可通过图片解码或直接创建获得。
     * @param { common2D.Rect } srcRect - pixelMap的待绘制区域。
     *     图片最左侧和最上侧对应位置0，最右侧和最下侧对应位置1。right需大于left，bottom需大于top。
     * @param { common2D.Rect } dstRect - pixelMap在mask挂载的节点上的绘制区域。
     *     节点最左侧和最上侧对应位置0，最右侧和最下侧对应位置1。right需大于left，bottom需大于top。
     * @param { Color } [fillColor] - 节点上在pixelMap绘制区域之外的区域填充的颜色，
     *     各元素取值范围为[0, 1]，默认透明色，小于0的转为0，大于1的转为1。
     * @returns { Mask } - 返回具有pixelMap缩放效果的Mask。
          * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static createPixelMapMask(pixelMap: image.PixelMap, srcRect: common2D.Rect, dstRect: common2D.Rect,
      fillColor?: Color): Mask;

    /**
     * 通过输入的pixelMap创建Mask实例。该接口不会对传入的pixelMap进行缩放处理。
     *
     * @param { image.PixelMap } pixelMap - image模块创建的PixelMap实例。可通过图片解码或直接创建获得。
     * @returns { Mask } - 返回具有pixelMap的Mask。
     * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    static createPixelMapMask(pixelMap: image.PixelMap): Mask;

    /**
     * 通过输入椭圆中心点的位置、长短轴和形状参数创建椭圆遮罩效果Mask实例，具体的效果由输入的参数决定。
     *
     * @param { common2D.Point } center - 设置椭圆的中心点，[0, 0]为组件左上角，[1, 1]为组件的右下角。
     *     取值范围[-10, 10]，可取浮点数，超出边界会在实现时自动截断。
     * @param { double } radiusX - 设置椭圆的长轴，半径为1等于组件的高度。
     *     取值范围[0, 10]，可取浮点数，超出边界会在实现时自动截断。
     * @param { double } radiusY - 设置椭圆的短轴，半径为1等于组件的高度。
     *     取值范围[0, 10]，可取浮点数，超出边界会在实现时自动截断。
     * @param { Array<[double, double]> } gradients - 数组中保存的二元数组表示梯度：[RGBA颜色, 位置]。
     *     RGBA颜色四通道使用相同的值，可看作一个灰度值；位置表示沿径向方向向外时RGBA颜色对应的分布位置；
     *     RGBA颜色与位置的取值范围均为[0, 1]，可取浮点数，小于0的转为0，大于1的转为1。
     *     位置参数值须严格递增，Array数组中二元数组个数必须大于等于2，二元数组中的元素不能为空，否则该椭圆分布效果不生效。
     * @returns { Mask } - 返回椭圆形状的径向分布效果的灰度Mask。
          * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static createRadialGradientMask(center: common2D.Point, radiusX: double, radiusY: double,
      gradients: Array<[double, double]>): Mask;

    /**
     * 输入波源中心位置、单波参数创建单波遮罩效果Mask实例。
     *
     * @param { common2D.Point } center - 设置单波波源的中心点，[0, 0]为组件左上角，[1, 1]为组件的右下角。
     *     取值范围[-10, 10]，可取浮点数，超出边界会在实现时自动截断。
     * @param { double } width - 设置单波圆环的宽度。
     *     取值范围[0, 5]，可取浮点数，超出边界会在实现时自动截断。
     * @param { double } propagationRadius - 设置单波圆环的扩散外径。
     *     取值范围[0, 10]，可取浮点数，超出边界会在实现时自动截断。
     * @param { double } blurRadius - 设置单波圆环的模糊外径，模糊半径为0则是实边圆环，否则是虚边圆环。
     *     取值范围[0, 5]，可取浮点数，超出边界会在实现时自动截断。
     * @param { double } [turbulenceStrength] - 设置单波圆环的湍流强度，默认值为0，强度为0则是规则圆环，否则圆环边缘会湍流扭曲。
     *     取值范围[-1, 1]，可取浮点数，超出边界会在实现时自动截断。
     * @returns { Mask } - 返回单个水波形状的灰度Mask。
     * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static createWaveGradientMask(center: common2D.Point, width: double, propagationRadius: double,
      blurRadius: double, turbulenceStrength?: double): Mask;

    /**
     * 创建并设置Mask实例是否使用模糊缓存。
     *
     * @param { boolean } useEffect - 标记是否使用模糊缓存。值为true，表示使用，会正常显示模糊效果；值为false，表示不使用，不显示模糊效果。
     * @returns { Mask } - 返回是否使用模糊缓存标记的Mask。
     * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    static createUseEffectMask(useEffect: boolean): Mask;
  }

  /**
   * 创建Filter实例用于给组件添加多种filter效果。
   *
   * @returns { Filter } 返回Filter的头节点。
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 23 static
   */
  function createFilter(): Filter;

  /**
   * 创建VisualEffect实例用于给组件添加多种effect效果。
   *
   * @returns { VisualEffect } 返回VisualEffect的头节点。
   * @syscap SystemCapability.Graphics.Drawing
   * @form [since 24]
   * @since 12 dynamic
   * @since 23 static
   */
  function createEffect(): VisualEffect;

  /**
   * 创建BrightnessBlender实例用于给组件添加提亮效果。
   *
   * @param { BrightnessBlenderParam } param - 实现提亮效果的参数。
   * @returns { BrightnessBlender } 返回设置了提亮效果参数的BrightnessBlender。
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  function createBrightnessBlender(param: BrightnessBlenderParam): BrightnessBlender;

  /**
   * 创建HdrBrightnessBlender实例用于给组件添加支持HDR的提亮效果。
   *
   * @param { BrightnessBlenderParam } param - 实现提亮效果的参数。
   * @returns { HdrBrightnessBlender } 返回具有提亮效果的混合器（支持HDR）。
   * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function createHdrBrightnessBlender(param: BrightnessBlenderParam): HdrBrightnessBlender;

   /**
    * 创建HdrDarkenBlender实例用于HDR图层的压暗混合效果。
    *
    * @param { double } hdrBrightnessRatio - HDR的提亮倍数。取值范围[1.0, 设备当前支持最大提亮倍数]。
    *     设置小于1.0的值时，按值为1.0处理；当值等于1.0时，为组件原本亮度；
    *     设置大于设备当前支持最大提亮倍数的值时，按值为设备当前支持最大提亮倍数处理，
    *     支持最大提亮倍数 = 设备最大亮度 / 设备默认亮度。
    * @param { [double, double, double] } [grayscaleFactor] - 将RGB颜色转换为灰度值，该公式可根据色域切换。
    *     三个分量均无边界限制。默认值为标准灰度权重[0.299, 0.587, 0.114]。
    * @returns { HdrDarkenBlender } 返回HDR压暗混合器，用于将压暗效果添加到指定的组件上。
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  function createHdrDarkenBlender(hdrBrightnessRatio: double,
    grayscaleFactor?: [double, double, double]): HdrDarkenBlender;
}

/**
 * BrightnessBlender参数列表。
 *
 * @syscap SystemCapability.Graphics.Drawing
 * @systemapi
 * @form [since 22]
 * @since 12 dynamic
 * @since 23 static
 */
export declare interface BrightnessBlenderParam {

  /**
   * 灰度调整的三阶系数。 取值范围[-20, 20]。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  cubicRate: double;

  /**
   * 灰度调整的二阶系数。 取值范围[-20, 20]。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  quadraticRate: double;

  /**
   * 灰度调整的线性系数。 取值范围[-20, 20]。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  linearRate: double;

  /**
   * 灰度调整的比例。 取值范围[-20, 20]。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  degree: double;

  /**
   * 提亮的基准饱和度。 取值范围[0, 20]。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  saturation: double;

  /**
   * 基于基准饱和度的RGB正向调整参数。 每个number的取值范围[-20, 20]。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  positiveCoefficient: [double, double, double];

  /**
   * 基于基准饱和度的RGB负向调整参数。 每个number的取值范围[-20, 20]。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  negativeCoefficient: [double, double, double];

  /**
   * 提亮效果的混合比例。 取值范围[0, 1]，超出边界会在实现时自动截断。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @form [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  fraction: double;
}

export default uiEffect;