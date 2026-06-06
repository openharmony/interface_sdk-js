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
 * 用于描述Viewport的绘制属性。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare interface ViewportRect {
    /**
     * 形状视口起始点的水平坐标。
     * 
     * 默认值：0
     * 
     * 默认单位：vp
     * 
     * 异常值按照默认值处理。
     *
     * @type { ?(number | string) } [since 7 - 19]
     * @type { ?Length } [since 20]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    x?: Length;
  
    /**
     * 形状视口起始点的垂直坐标。
     * 
     * 默认值：0
     * 
     * 默认单位：vp
     * 
     * 异常值按照默认值处理。
     *
     * @type { ?(number | string) } [since 7 - 19]
     * @type { ?Length } [since 20]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    y?: Length;
  
    /**
     * 形状视口的宽度，取值范围≥0。
     * 
     * 默认值：0
     * 
     * 默认单位：vp
     * 
     * 异常值按照默认值处理。
     *
     * @type { ?(number | string) } [since 7 - 19]
     * @type { ?Length } [since 20]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    width?: Length;
  
    /**
     * 形状视口的高度，取值范围≥0。
     * 
     * 默认值：0
     * 
     * 默认单位：vp
     * 
     * 异常值按照默认值处理。
     *
     * @type { ?(number | string) } [since 7 - 19]
     * @type { ?Length } [since 20]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    height?: Length;
  }
  
  /**
   * 绘制组件的父组件，父组件中会描述所有绘制组件均支持的通用属性。
   * 
   * 1、绘制组件使用Shape作为父组件，实现类似SVG的效果。
   * 
   * 2、绘制组件单独使用，用于在页面上绘制指定的图形。
   * 
   * > **说明：**
   * 
   * > 该组件从API version 20开始支持使用[AttributeUpdater]{@link AttributeUpdater}类的
   * > [updateConstructorParams](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md#属性)接口更新构造参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  interface ShapeInterface {
    /**
     * Use the new function to create Shape.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    new (value?: PixelMap): ShapeAttribute;
  
    /**
     * 用于绘制Shape组件的构造函数。 
     * 
     * 从API version 9开始，该接口支持在ArkTS卡片中使用，卡片中不支持使用PixelMap对象。
     *
     * @param { PixelMap } value - 绘制目标，可将图形绘制在指定的PixelMap对象中，若未设置，则默认在当前绘制目标中进行绘制。<br/>异常值undefined和null按照无效值处理，本次设置不生效。
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    (value: PixelMap): ShapeAttribute;
  
    /**
     * Called when a component is drawn.
     *
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    (): ShapeAttribute;
  }
  
  /**
   * 除支持[通用属性]{@link common}外，还支持以下属性：
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  declare class ShapeAttribute extends CommonMethod<ShapeAttribute> {
    /**
     * 设置形状的视口。
     *
     * @param { object } value - Viewport绘制属性。<br/>默认值：{}<br/>异常值undefined和null按照默认值处理。 [since 7 - 17]
     * @param { ViewportRect } value - Viewport绘制属性。<br/>默认值：{}<br/>异常值undefined和null按照默认值处理。 [since 18]
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    viewPort(value: ViewportRect): ShapeAttribute;
  
    /**
     * 设置边框颜色，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法，不设置时，默认边框透明度为0，即没有边框。
     *
     * @param { ResourceColor } value - 边框颜色。<br/>默认值：[Color]{@link Color}.Transparent<br/>异常值undefined和null按照默认值处理，NaN和
     *     Infinity按照[Color]{@link Color}.Black处理。
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    stroke(value: ResourceColor): ShapeAttribute;
  
    /**
     * 设置填充区域的颜色，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法，异常值按照默认值处理。与通用属性foregroundColor同时设置时，
     * 后设置的属性生效。
     *
     * @param { ResourceColor } value - 填充区域颜色。<br/>默认值：[Color]{@link Color}.Black <br/>异常值undefined、null、NaN和Infinity按照默认
     *     值处理。
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    fill(value: ResourceColor): ShapeAttribute;
  
    /**
     * 设置边框绘制起点的偏移量，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。异常值按照默认值处理。
     *
     * @param { number | string } value - 边框绘制起点的偏移量。<br/>默认值：0<br/>默认单位：vp <br/>异常值undefined和null按照默认值处理，NaN和Infinity会导致
     *     strokeDashArray失效。 [since 7 - 10]
     * @param { Length } value - 边框绘制起点的偏移量。<br/>默认值：0<br/>默认单位：vp <br/>异常值undefined和null按照默认值处理，NaN和Infinity会导致
     *     strokeDashArray失效。 [since 11]
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    strokeDashOffset(value: Length): ShapeAttribute;
  
    /**
     * 设置边框间隙，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。取值范围为≥0，异常值按照默认值处理。
     *
     * @param { Array<any> } value - 定义Shape轮廓的虚线模式的数组，数组元素交替表示线段长度和间隙长度。<br/>默认值：[]（空数组）<br/>默认单位：vp <br/>异常值undefined和
     *     null按照默认值处理。<br/>**说明：**<br/>空数组：实线<br/>偶数多元素数组：数组元素按顺序循环，如[a, b, c, d]表示线段长度a->间隙长度b->线段长度c->间隙长度d->线段长度a->...
     *     <br/>奇数多元素数组：重复一次该数组元素，按偶数多元素数组的规则顺序循环，如[a, b, c]等效于[a, b, c, a, b, c]，表示线段长度a->间隙长度b->线段长度c->间隙长度a->线段长度b->间隙长
     *     度c->线段长度a->...
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    strokeDashArray(value: Array<any>): ShapeAttribute;
  
    /**
     * 设置边框端点绘制样式，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
     *
     * @param { LineCapStyle } value - 边框端点绘制样式。<br/>默认值：LineCapStyle.Butt <br/>异常值undefined、null、NaN和Infinity按照默认值处理。
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    strokeLineCap(value: LineCapStyle): ShapeAttribute;
  
    /**
     * 设置边框拐角绘制样式，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
     *
     * @param { LineJoinStyle } value - 边框拐角绘制样式。<br/>默认值：LineJoinStyle.Miter <br/>异常值undefined、null、NaN和Infinity按照默认值处理。
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    strokeLineJoin(value: LineJoinStyle): ShapeAttribute;
  
    /**
     * 设置斜接长度与边框宽度比值的极限值，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。斜接长度表示外边框外边交点到内边交点的距离，边框宽度即
     * strokeWidth属性的值。该属性取值需在strokeLineJoin属性取值LineJoinStyle.Miter时生效。 
     * 
     * 该属性的合法值范围应当大于等于1.0，当取值范围在[0,1)时按1.0处理，其余异常值按默认值处理。
     *
     * @param { number | string } value - 斜接长度与边框宽度比值的极限值。<br/>默认值：4 <br/>异常值undefined、null和NaN按照默认值处理，Infinity会导致stroke失
     *     效。 [since 7 - 19]
     * @param { Length } value - 斜接长度与边框宽度比值的极限值。<br/>默认值：4 <br/>异常值undefined、null和NaN按照默认值处理，Infinity会导致stroke失
     *     效。 [since 20]
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    strokeMiterLimit(value: Length): ShapeAttribute;
  
    /**
     * 设置边框透明度，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。该属性的取值范围是[0.0, 1.0]，若给定值小于0.0，则取值为0.0；若
     * 给定值大于1.0，则取值为1.0。
     *
     * @param { number | string | Resource } value - 边框透明度。<br/>默认值：[stroke]{@link ShapeAttribute#stroke}接口设置的透明度。<br/>异常值
     *     NaN按0.0处理，undefined、null和Infinity按1.0处理。
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    strokeOpacity(value: number | string | Resource): ShapeAttribute;
  
    /**
     * 设置填充区域透明度，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
     *
     * @param { number | string | Resource } value - 填充区域透明度。<br/>**说明：**<br/>number格式取值范围是[0.0, 1.0]，若给定值小于0.0，则取值为0.0；若给
     *     定值大于1.0，则取值为1.0，其余异常值按1.0处理。<br/>string格式支持number格式取值的字符串形式，取值范围与number格式相同。<br/>Resource格式支持系统资源或者应用资源中的字符串，取值
     *     范围和number格式相同。<br/>默认值：1.0
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    fillOpacity(value: number | string | Resource): ShapeAttribute;
  
    /**
     * 设置边框宽度，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。该属性若为string类型，暂不支持百分比，百分比按照1px处理。
     *
     * @param { number | string } value - 边框宽度，取值范围≥0。<br/>默认值：1 <br/>默认单位：vp<br/>异常值undefined、null和NaN按照默认值处理，Infinity按0处
     *     理。 [since 7 - 19]
     * @param { Length } value - 边框宽度，取值范围≥0。<br/>默认值：1 <br/>默认单位：vp<br/>异常值undefined、null和NaN按照默认值处理，Infinity按0处
     *     理。 [since 20]
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    strokeWidth(value: Length): ShapeAttribute;
  
    /**
     * 设置是否开启抗锯齿效果，支持[attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
     *
     * @param { boolean } value - 是否开启抗锯齿效果。<br/>true：开启抗锯齿；false：关闭抗锯齿。<br/>默认值：true <br/>异常值undefined和null按照false处理。
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    antiAlias(value: boolean): ShapeAttribute;
  
    /**
     * 设置网格效果。将图像分割为（row + 1）* (column + 1)的网格，每个网格交点坐标存储在数组中（每两个元素表示一个交点的x、y坐标）。通过数组value中的坐标值，重新定位网格顶点位置，实现图像局部扭曲。支持
     * [attributeModifier]{@link CommonMethod#attributeModifier}动态设置属性方法。
     * 
     * > **说明：**
     * >
     * > mesh只对shape传入pixelMap时生效，且效果作用于传入的pixelMap。与[绘制模块]{@link @ohos.graphics.drawing:drawing}的
     * > [drawPixelMapMesh<sup>12+</sup>]{@link @ohos.graphics.drawing:drawing.Canvas#drawPixelMapMesh}效果一致，建议使用
     * > drawPixelMapMesh。
     *
     * @param { Array<any> } value - 长度（row + 1）* （column + 1）* 2的数组，记录扭曲后的位图各个顶点位置。<br/>设置异常值undefined、null时value按照空数组处理，
     *     设置空数组时column和row按0处理，value按空数组处理。
     * @param { number } column - mesh矩阵列数。<br/>设置异常值undefined、null、NaN和Infinity时column和row按0处理，value按空数组处理。
     * @param { number } row - mesh矩阵行数。<br/>设置异常值undefined、null、NaN和Infinity时column和row按0处理，value按空数组处理。
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    mesh(value: Array<any>, column: number, row: number): ShapeAttribute;
  }
  
  /**
   * 绘制组件的父组件，父组件中会描述所有绘制组件均支持的通用属性。
   * 
   * 1、绘制组件使用Shape作为父组件，实现类似SVG的效果。
   * 
   * 2、绘制组件单独使用，用于在页面上绘制指定的图形。
   * 
   * > **说明：**
   * 
   * > 该组件从API version 20开始支持使用[AttributeUpdater]{@link AttributeUpdater}类的
   * > [updateConstructorParams](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md#属性)接口更新构造参数。
   * 
   * ###### 子组件
   * 
   * 包含[Rect]{@link rect}、[Path]{@link path}、[Circle]{@link circle}、[Ellipse]{@link ellipse}、[Polyline]{@link polyline}、
   * [Polygon]{@link polygon}、[Image]{@link image}、[Text]{@link text}、[Column]{@link column}、[Row]{@link row}和Shape子组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  declare const Shape: ShapeInterface;
  
  /**
   * Defines Shape Component instance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  declare const ShapeInstance: ShapeAttribute;