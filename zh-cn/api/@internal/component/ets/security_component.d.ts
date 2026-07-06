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

/**
 * 安全控件上图标和文字的排列方向。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum SecurityComponentLayoutDirection {
  /**
   * 安全控件上图标和文字分布的方向为水平排列。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  HORIZONTAL = 0,

  /**
   * 安全控件上图标和文字分布的方向为垂直排列。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  VERTICAL = 1
}

/**
 * 定义组件的屏幕朗读功能角色类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum SecurityComponentRoleType {
  /**
   * Null
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  ROLE_NONE = 0,
  /**
   * 按钮
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  BUTTON = 1
}

/**
 * 安全控件通用属性模块，提供安全控件的布局、尺寸、文字、图标、颜色、边框和交互等通用属性的统一配置能力。
 * - 为[PasteButton]{@link ./paste_button}、[SaveButton]{@link ./save_button}等安全控件统一设置布局、尺寸、文字、图标、颜色、边框和交互相关属性。
 * - 在满足安全控件规范的前提下，调整安全控件显示效果和交互体验。具体约束请参见[约束与限制](docroot://security/AccessToken/security-component-overview.md#约束与限制)。
 * - 通过链式调用方式复用安全控件通用属性能力。
 *
 * ###### 核心枚举类型
 * - **[SecurityComponentLayoutDirection]{@link SecurityComponentLayoutDirection}：** 安全控件图标和文字排列方向枚举，用于指定横向或纵向布局。
 * - **[ButtonType]{@link @global:ButtonType}：** 安全控件按钮样式枚举，用于指定胶囊、圆形、圆角矩形或普通按钮样式。
 *
 * ###### 核心接口类型
 * - **[SecurityComponentMethod]{@link SecurityComponentMethod}：** 安全控件通用属性方法集合，用于为具体安全控件配置布局、尺寸、文字、图标、颜色、边框和交互属性。
 *
 * ###### 子组件
 * 不支持
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class SecurityComponentMethod<T> {
  /**
   * 设置安全控件图标的尺寸。
   *
   * @param { Dimension } value - 安全控件上图标的尺寸。未显式指定单位时，单位为vp。
   *     <br>默认值：**16vp**。
   *     <br>该参数不支持百分比字符串。<br/>若传入异常值或无效单位，属性不生效，控件按照默认值显示。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  iconSize(value: Dimension): T;

  /**
   * 设置安全控件图标和文字分布的方向。
   *
   * @param { SecurityComponentLayoutDirection } value - 安全控件上图标和文字分布的方向。
   *     <br>默认值：SecurityComponentLayoutDirection.HORIZONTAL。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  layoutDirection(value: SecurityComponentLayoutDirection): T;

  /**
   * 设置绝对定位，即安全控件的左上角相对于父容器左上角的偏移位置。
   *
   * @param { Position } value - 安全控件左上角相对于父容器左上角的偏移位置。适用于通过绝对定位将安全控件放置到页面固定区域的场景。
   *     <br>未显式指定单位时，单位为vp。<br/>x和y建议均传入数值型坐标。<br/>若参数为undefined、null，或x、y为非数字类型时，该属性不生效，异常坐标会按0处理。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  position(value: Position): T;

  /**
   * 设置安全控件在位置定位时的锚点，以控件左上角作为基准点进行偏移。
   *
   * @param { Position } value - 安全控件在位置定位时的锚点，以控件左上角作为基准点进行偏移。通常与position()、offset()配合使用，用于更精细地设置控件展示位置。
   *     <br>未显式指定单位时，单位为vp。<br/>无默认值。<br/>传入异常值时该属性不生效。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  markAnchor(value: Position): T;

  /**
   * 设置安全控件相对于自身布局位置的坐标偏移。
   *
   * @param { Position } value - Coordinate offset of the security component relative to its own layout position. This
   *     attribute does not affect the layout in the parent container. The offset is used only during drawing.
   *     <br>When the unit is not explicitly specified, the unit is vp.
   *     <br>No default value.
   *     <br>This attribute does not take effect when it is set to an invalid value. [since 10 - 11]
   * @param { Position | Edges | LocalizedEdges } value - 安全控件相对于自身布局位置的坐标偏移。设置后不会影响父容器布局，仅在绘制阶段调整控件显示位置。
   *     <br>未显式指定单位时，单位为vp。<br/>无默认值。<br/>当入参异常时，该属性不生效。 [since 10 - 11]。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  offset(value: Position | Edges | LocalizedEdges): T;

  /**
   * 设置安全控件文字的尺寸。
   *
   * @param { Dimension } value - 安全控件上文字的尺寸。
   *     <br>
   *     未显式指定单位时，单位为fp。<br>默认值：$r('sys.float.ohos_id_text_size_button1')。<br>该参数不
   *     支持百分比字符串。<br>设置异常值时该属性不生效。<br>**说明：** 安全控件文本未完全显示时，点击不授权。fontSize的设置会影响文本是否能完整显示，进而影响安全控件的授权行为。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontSize(value: Dimension): T;

  /**
   * 设置安全控件文字的样式。
   *
   * @param { FontStyle } value - 安全控件上文字的样式。
   *     <br>默认值：FontStyle.Normal。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontStyle(value: FontStyle): T;

  /**
   * 设置安全控件文字的字体。
   *
   * @param { string | Resource } value - 安全控件上文字的字体。
   *     <br>默认字体：'HarmonyOS Sans'。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontFamily(value: string | Resource): T;

  /**
   * 设置安全控件文字的颜色。
   *
   * @param { ResourceColor } value - 安全控件上文字的颜色。
   *     <br>默认值：$r('sys.color.font_on_primary')。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontColor(value: ResourceColor): T;

  /**
   * 设置安全控件图标的颜色。
   *
   * @param { ResourceColor } value - 安全控件上图标的颜色。
   *     <br>默认值：$r('sys.color.icon_on_primary')。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  iconColor(value: ResourceColor): T;

  /**
   * 设置安全控件的背景颜色。
   *
   * @param { ResourceColor } value - 安全控件的背景颜色。
   *     <br>默认值：$r('sys.color.icon_emphasize')。
   *     <br>安全控件按钮背景色高八位的α值低于**0x1a**（例如**0x1800ff00**）时，会被系统强制调整为**0xff**。以确保安全控件具有足够的可见性，
   *     防止因控件过度透明导致用户在不知情的情况下触发授权。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  backgroundColor(value: ResourceColor): T;

  /**
   * 设置安全控件边框的样式。
   *
   * @param { BorderStyle } value - 安全控件边框的样式。
   *     <br>默认不设置边框样式。
   * @returns { T } 安全组件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  borderStyle(value: BorderStyle): T;

  /**
   * 设置安全控件的边框宽度。
   *
   * @param { Dimension } value - 安全控件的边框宽度。
   *     <br>默认值：**0vp**。
   *     <br>未显式指定单位时，单位为vp。<br/>不支持设置百分比字符串。设置异常值时该属性不生效。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  borderWidth(value: Dimension): T;

  /**
   * 设置安全控件的边框颜色。
   *
   * @param { ResourceColor } value - 安全控件的边框颜色。<br>默认不设置边框颜色。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  borderColor(value: ResourceColor): T;

  /**
   * 设置安全控件的边框圆角半径。
   *
   * borderRadius的设置效果受ButtonType影响。当按钮类型为Capsule或Circle时，borderRadius设置不生效，按钮圆角半径由按钮类型自动确定；
   * 当按钮类型为Normal或ROUNDED_RECTANGLE时，borderRadius设置生效。
   * 具体影响请参见[ButtonType]{@link @global:ButtonType}。
   *
   * @param { Dimension } value - 安全控件的边框圆角半径。
   *     <br>默认值：**0vp**。
   *     <br>未显式指定单位时，单位为vp。<br/>不支持设置百分比字符串。圆角半径受组件尺寸限制，最小值为0，最大值为宽高中较小值的一半。设置异常值时该属性不生效。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  borderRadius(value: Dimension): T;

  /**
   * 设置安全控件的边框圆角半径，支持分别设置四个圆角的半径。
   *
   * borderRadius的设置效果受ButtonType影响。当按钮类型为Capsule或Circle时，borderRadius设置不生效，按钮圆角半径由按钮类型自动确定；当按钮类型为Normal或
   * ROUNDED_RECTANGLE时，borderRadius设置生效。具体影响请参见[ButtonType]{@link @global:ButtonType}。
   *
   * @param { Dimension | BorderRadiuses } radius - 安全控件的边框圆角半径。
   *     <br>默认值：**0vp**。
   *     <br>未显式指定单位时，单位为vp。<br>Dimension类型不支持设置百分比字符串。圆角半径受组件尺寸限制，最小值为0，最大值为宽高中较小值的一半。设置异常值时该属性不生效。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  borderRadius(radius: Dimension | BorderRadiuses): T;

  /**
   * 设置安全控件的内边距。
   *
   * @param { Padding | Dimension } value - 安全控件的内边距。
   *     <br>默认值：上下8vp，左右16vp。
   *     <br>未显式指定单位时，单位为vp。<br/>**说明：** 本参数不支持设置百分比字符串数据类型。若设置百分比字符串，则对应内边距显示为0。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  padding(value: Padding | Dimension): T;

  /**
   * 设置安全控件中图标和文字的间距。
   *
   * @param { Dimension } value - 安全控件中图标和文字的间距。
   *     <br>默认值：**4vp**<br/>。
   *     <br>未显式指定单位时，单位为vp。<br/>默认值：4vp。<br/>**说明：** 本参数不支持设置百分比字符串数据类型，若设置百分比字符串，则图标和文字的间距显示为0；
   *     从API version 14开始，若设置值为负值，则使用默认值。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  textIconSpace(value: Dimension): T;

  /**
   * 设置组件的唯一标识，唯一性由开发者保证。调用成功后，组件将被赋予指定的唯一标识字符串，可在测试场景中精确定位该组件实例。与[id]{@link SecurityComponentMethod.id}
   * 同时使用时，后设置的标识值会覆盖先设置的标识值，建议仅设置id。
   *
   * 此接口仅用于应用测试场景，验证安全控件的属性设置和交互行为。生产环境请使用公开接口[id]{@link SecurityComponentMethod.id}。
   *
   * @param { string } value - 组件的唯一标识，唯一性由开发者保证。适用于测试场景中按标识精确定位安全控件实例。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @test
   */
  key(value: string): T;


  /**
   * 设置安全控件自身的宽度，缺省时将根据元素内容自适配宽度。配合自适应字号相关属性使用时，width的设置会影响文本是否能完整显示。
   *
   * @param { Length } value - 安全控件自身的宽度，缺省时将根据元素内容自适配宽度。
   *     <br>未显式指定单位时，单位为vp。<br>配合 [minFontSize]{@link SecurityComponentMethod.minFontSize}、
   *     [maxFontSize]{@link SecurityComponentMethod.maxFontSize}、[maxLines]{@link SecurityComponentMethod.maxLines}以及
   *     [heightAdaptivePolicy]{@link SecurityComponentMethod.heightAdaptivePolicy}使用实现自适应字号时，安全控件文本未完全显示将导致点击不授权。
   *     设置异常值时该属性不生效。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  width(value: Length): T;

  /**
   * 设置安全控件自身的高度，缺省时将根据元素内容自适配高度。配合自适应字号相关属性使用时，height的设置会影响文本是否能完整显示。
   *
   * @param { Length } value - 安全控件自身的高度，缺省时将根据元素内容自适配高度。
   *     <br>未显式指定单位时，单位为vp。
   *     <br>配合[minFontSize]{@link SecurityComponentMethod.minFontSize}、[maxFontSize]{@link SecurityComponentMethod.maxFontSize}、
   *     [maxLines]{@link SecurityComponentMethod.maxLines}以及[heightAdaptivePolicy]{@link SecurityComponentMethod.heightAdaptivePolicy}
   *     使用实现自适应字号时，安全控件文本未完全显示将导致点击不授权。设置异常值时该属性不生效。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  height(value: Length): T;

  /**
   * 设置宽度和高度，缺省时将根据元素内容自适配宽高尺寸。size方法用于同时设置宽度和高度，如需单独设置宽度或高度，可使用[width]{@link SecurityComponentMethod.width}
   * 或[height]{@link SecurityComponentMethod.height}方法。
   *
   * @param { SizeOptions } value - 宽度和高度，缺省时将根据元素内容自适配宽高尺寸。
   *     <br>未显式指定单位时，单位为vp。<br>配合 [minFontSize]{@link SecurityComponentMethod.minFontSize}、
   *     [maxFontSize]{@link SecurityComponentMethod.maxFontSize}、[maxLines]{@link SecurityComponentMethod.maxLines}以及
   *     [heightAdaptivePolicy]{@link SecurityComponentMethod.heightAdaptivePolicy}使用实现自适应字号时，安全控件文本未完全显示将导致点击不授权。
   *     size的设置会影响文本是否能完整显示。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  size(value: SizeOptions): T;

  /**
   * 设置约束尺寸，组件布局时限制尺寸范围。
   *
   * @param { ConstraintSizeOptions } value - 约束尺寸，组件布局时进行尺寸范围限制。
   *     <br>未显式指定单位时，单位为vp。<br>constraintSize的优先级高于width和height。
   *     <br>使用自适应字号相关属性时，安全控件文本未完全显示将导致点击不授权。constraintSize的设置会影响文本
   *     是否能完整显示。<br>取值结果参考[constraintSize取值对width/height影响]{@link SecurityComponentMethod.constraintSize}。
   *     <br>默认值：<br>{<br>minWidth: 0,<br>maxWidth: Infinity,<br>minHeight: 0,<br>maxHeight: Infinity<br>}。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  constraintSize(value: ConstraintSizeOptions): T;

  /**
   * 设置安全控件图标文本的对齐方式。
   *
   * @param { Alignment } alignType - 安全控件图标文本的对齐方式。图标文本作为整体在控件背景范围内进行对齐，显示效果受
   *     [padding]{@link SecurityComponentMethod.padding}影响，在padding生效的基础上按照alignType参数指定的对齐方式进行对齐。
   *     <br>默认值：Alignment.Center。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  align(alignType: Alignment): T;

  /**
   * 设置文本最小的字体缩小倍数。调用后，当系统字体缩放使文本缩小时，文本缩小倍数不会低于设定的最小缩小倍数。
   *
   * 与[maxFontScale]{@link SecurityComponentMethod.maxFontScale}可配合使用，minFontScale控制缩小倍数的下限，maxFontScale控制放大倍数的上限。
   * 两者可独立设置，也可同时设置以精确控制字体缩放范围。
   *
   * @param { number | Resource } scale - 文本最小的字体缩小倍数。
   *     <br>取值范围：[0,1]。
   *     <br>**说明：**
   *     <br>设置的值小于0时，按值为0处理，即允许缩小到任意倍数；设置的值大于1时，按值为1处理，即不允许缩小字体；设置的值为undefined或null等非法值时，属性不生效。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  minFontScale(scale: number | Resource): T;

  /**
   * 设置文本最大的字体放大倍数。调用后，当系统字体缩放使文本放大时，文本放大倍数不会超过设定的最大放大倍数。
   *
   * 与[minFontScale]{@link SecurityComponentMethod.minFontScale}可配合使用，maxFontScale控制放大倍数的上限，minFontScale控制缩小倍数的下限。
   * 两者可独立设置，也可同时设置以精确控制字体缩放范围。
   *
   * @param { number | Resource } scale - 文本最大的字体放大倍数。
   *     <br>取值应≥1。
   *     <br>**说明：** <br>设置的值小于1时，按值为1处理；设置的值为undefined或null等非法值时，属性不生效。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  maxFontScale(scale: number | Resource): T;

  /**
   * 设置文本最小显示字号。
   *
   * - 配合[maxFontSize]{@link SecurityComponentMethod.maxFontSize}以及[maxLines]{@linkSecurityComponentMethod.maxLines}或布局
   * 大小限制使用，可实现自适应字号，单独设置不生效。
   * - minFontSize应小于maxFontSize，若设置值大于maxFontSize，将按maxFontSize处理。
   * - minFontSize小于或等于0时，自适应字号不生效。
   * - 自适应字号生效时，fontSize设置不生效。
   * - 安全控件文本未完全显示时，点击不授权。minFontSize的设置会影响文本是否能完整显示，进而影响安全控件的授权行为。
   *
   * @param { number | string | Resource } minSize - 文本最小显示字号。
   *     <br>取值应>0。
   *     <br>未显式指定单位时，单位为fp。<br> minFontSize应小于maxFontSize，若设置值大于maxFontSize，将按maxFontSize处理；小于或等于0时，自适应字号不生效。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  minFontSize(minSize: number | string | Resource): T;

  /**
   * 设置文本最大显示字号。
   *
   * - 配合[minFontSize]{@link SecurityComponentMethod.minFontSize}以及[maxLines]{@linkSecurityComponentMethod.maxLines}或布局
   * 大小限制使用，可实现自适应字号，单独设置不生效。
   * - maxFontSize应大于minFontSize，若maxFontSize小于minFontSize，minFontSize将按maxFontSize处理。
   * - 当自适应字号生效时，设置的fontSize将不生效。
   * - 安全控件文本未完全显示时，点击不授权。maxFontSize的设置会影响文本是否能完整显示，进而影响安全控件的授权行为。
   *
   * @param { number | string | Resource } maxSize - 文本最大显示字号。
   *     <br>取值应>0。
   *     <br>未显式指定单位时，单位为fp。
   *     <br>**说明：**<br>设置的值小于或等于0时，自适应字号不生效；设置异常值时该属性不生效。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  maxFontSize(maxSize: number | string | Resource): T;

  /**
   * 设置文字自适应高度的方式。适用于安全控件在不同尺寸或不同语言环境下，需要动态调整文本显示以保证文本完整显示的场景。
   *
   * 安全控件文本以[maxFontSize]{@link SecurityComponentMethod.maxFontSize}的值进行布局，如果可以完整显示文本，则无需进行自适应调节，该接口设置不生效，
   * 否则按指定文本自适应高度的方式进行调节，具体自适应调节规格如下：
   *
   * 当设置为TextHeightAdaptivePolicy.MAX_LINES_FIRST时，优先使用[maxLines]{@link SecurityComponentMethod.maxLines}属性来调整文本高度。如果使用
   * maxLines属性的布局大小超过了布局约束，则尝试在[minFontSize]{@link SecurityComponentMethod.minFontSize}和
   * [maxFontSize]{@link SecurityComponentMethod.maxFontSize}的范围内缩小字体以显示更多文本，如果此时仍不能完整显示文本信息，安全控件会自适应调整高度以使得文本完整显示。
   *
   * 当设置为TextHeightAdaptivePolicy.MIN_FONT_SIZE_FIRST时，优先使用[minFontSize]{@link SecurityComponentMethod.minFontSize}属性来调整文本高度。如果使用minFontSize
   * 属性可以将文本布局在一行中，则尝试在minFontSize和[maxFontSize]{@link SecurityComponentMethod.maxFontSize}的范围内增大字体并使用最大可能的字体大小；
   * 如果使用minFontSize属性无法将文本布局在一行中，则尝试使用[maxLines]{@linkSecurityComponentMethod.maxLines}属性进行布局，如果此时仍不能完整显示文本信息，
   * 安全控件会自适应调整高度以使得文本完整显示。
   *
   * 当设置为TextHeightAdaptivePolicy.LAYOUT_CONSTRAINT_FIRST时，优先使用布局约束来调整文本高度。如果布局大小超过布局约束，则尝试在
   * [minFontSize]{@link SecurityComponentMethod.minFontSize}和[maxFontSize]{@link SecurityComponentMethod.maxFontSize}的范围内缩小字体
   * 以满足布局约束。如果将字体大小缩小到minFontSize后，布局大小仍然超过布局约束，则删除超过布局约束的行；如果设置了[maxLines]{@link SecurityComponentMethod.maxLines}
   * 属性，布局后行数不超过maxLines值（可能存在横向截断）；如果未设置maxLines属性值，布局后的行数不限制。
   *
   * 安全控件文本未完全显示时，点击不授权。文本是否完全显示受heightAdaptivePolicy、minFontSize、maxFontSize、maxLines、width和height等属性影响。
   *
   * 具体效果请见[示例](docroot://reference/apis-arkui/arkui-ts/ts-securitycomponent-attributes.md#示例3)。
   *
   * @param { TextHeightAdaptivePolicy } policy - 文本自适应高度的方式。
   *     <br>默认值：TextHeightAdaptivePolicy.MAX_LINES_FIRST。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  heightAdaptivePolicy(policy: TextHeightAdaptivePolicy): T;

  /**
   * 设置安全控件是否可交互。
   *
   * @param { boolean } respond - 安全控件是否可交互的值。
   *     <br>默认值：true。
   *     <br>值为true表示组件可交互，响应点击等操作。<br>值为false表示组件不可交互，不响应点击等操作。
   * @returns { T } Attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  enabled(respond: boolean): T;

  /**
   * 设置在相对容器中子组件的对齐规则，仅当父容器为[RelativeContainer]{@link ./relative_container}时生效。
   *
   * @param { AlignRuleOption } alignRule - 对齐规则配置对象，包含top、bottom、left、right、center等锚点对齐配置，
   *      用于指定安全控件在[RelativeContainer]{@link ./relative_container}中的对齐位置和方式。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  alignRules(alignRule: AlignRuleOption): T;

  /**
   * 设置在相对容器中子组件的对齐规则，仅当父容器为[RelativeContainer]{@link
   * ./relative_container}时生效。该方法水平方向上以start和end分别替代上述[alignRules]{@link
   * SecurityComponentMethod.alignRules}的left和right，以便在RTL模式下能镜像显示，建议优先使用该方法。
   *
   * @param { LocalizedAlignRuleOptions } alignRule - 对齐规则配置对象，使用start和end替代left和right以支持RTL布局镜像。包含top、bottom、start、end、center等
   *     锚点对齐配置，用于指定安全控件在[RelativeContainer]{@link ./relative_container}中的对齐位置和方式。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  alignRules(alignRule: LocalizedAlignRuleOptions): T;

  /**
   * 组件的唯一标识，唯一性由使用者保证。
   *
   * @param { string } id - 组件的唯一标识，唯一性由使用者保证。
   *     <br>默认值：''。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  id(id: string): T;

  /**
   * 设置以该组件为链头所构成的链式布局的参数（包括链的方向和样式），仅当父容器为[RelativeContainer]{@link ./relative_container}时生效。
   *
   * @param { Axis } direction - 链式布局的方向，用于指定以该组件为链头的链在[RelativeContainer]{@link ./relative_container}中的排列方向。
   * @param { ChainStyle } style - 链式布局的样式，用于控制链内子组件的分布方式，如均匀分布、两端对齐或紧凑排列等，具体取值及效果请参考[ChainStyle]{@link ChainStyle}。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  chainMode(direction: Axis, style: ChainStyle): T;

  /**
   * 设置文本的最大行数。默认情况下，文本自动换行，指定此属性后，文本的最大显示行数不会超过指定值。可独立使用限制文本行数，也可配合
   * [minFontSize]{@link SecurityComponentMethod.minFontSize}、[maxFontSize]{@link SecurityComponentMethod.maxFontSize}以及
   * [heightAdaptivePolicy]{@link SecurityComponentMethod.heightAdaptivePolicy}使用。配合自适应字号相关属性使用时，安全控件文本未完全显示将导致点击不授权。
   * maxLines的设置会影响文本是否能完整显示，进而影响安全控件的授权行为。
   *
   * @param { number } line - Maximum number of lines for the text.
   *     <br>number类型入参的取值范围： [1, +∞)。从API version 20开始，支持Resource类型。Resource类型仅支持'integer'，取值范围为[1, +∞)。
   *     **说明：**
   *     <br>设置的值小于1时，按默认值1000000处理。 [since 18 - 19]
   * @param { number | Resource } line - 文本的最大行数。
   *     <br>number类型入参的取值范围： [1, +∞)。从API version 20开始，支持Resource类型。Resource类型仅支持'integer'，取值范围为[1, +∞)。
   *     **说明：**
   *     <br>设置的值小于1时，按默认值1000000处理。 [since 18 - 19]
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  maxLines(line: number | Resource): T;

  /**
   * 设置安全控件文字的粗细。
   *
   * @param { number | FontWeight | string } value - 安全控件上文字粗细。
   *     <br>number类型取值[100, 900]，取值间隔为100，取值越大，字体越粗。<br>string类型支持使用数字字符串（如'400'），以及FontWeight中的枚举值对应的字符串
   *     （如'bold'、'bolder'、'lighter'、'regular'、'medium'）。<br>从API version 20开始，支持Resource类型。Resource类型仅支持'integer'和'string'。
   *     类型为'integer'时，取值参考前述number类型；类型为'string'时，取值参考前述string类型。<br>如果控件未设置fontWeight，文字粗细将默认设置为FontWeight.Medium。
   *     value入参为undefined、null，或number类型不在[100, 900]范围内，或string类型不符合FontWeight枚举值对应的字符串格式时，文字粗细将被设置为FontWeight.Normal。
   *     [since 10 - 19]
   * @param { number | FontWeight | string | Resource } value - 安全控件上文字粗细。
   *     <br>number类型取值[100, 900]，取值间隔为100，取值越大，字体越粗。<br>string类型支持使用数字字符串（如'400'），以及FontWeight中的枚举值对应的字符串
   *     （如'bold'、'bolder'、'lighter'、'regular'、'medium'）。<br>从API version 20开始，支持Resource类型。Resource类型仅支持'integer'和'string'。
   *     类型为'integer'时，取值参考前述number类型；类型为'string'时，取值参考前述string类型。<br>如果控件未设置fontWeight，文字粗细将默认设置为FontWeight.Medium。
   *     value入参为undefined、null，或number类型不在[100, 900]范围内，或string类型不符合FontWeight枚举值对应的字符串格式时，文字粗细将被设置为FontWeight.Normal。
   *     [since 20]
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontWeight(value: number | FontWeight | string | Resource): T;

  /**
   * 设置安全控件系统焦点框样式。
   *
   * @param { FocusBoxStyle } style - 焦点框样式配置对象，包含margin（焦点框与控件的间距）和strokeColor（焦点框边框颜色）等属性，用于自定义系统焦点框的外观样式。
   * @returns { T } 安全组件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  focusBox(style: FocusBoxStyle): T;

  /**
   * 针对多行文字叠加，支持行高基于文字实际高度自适应。
   *
   * fallbackLineSpacing属性和[RichEditorTextStyle]{@link RichEditorTextStyle}的lineHeight属性强相关。当设置的 lineHeight
   * 值小于文本在当前字号下的实际渲染高度时，将根据fallbackLineSpacing 属性值来确定行高是否要基于文字实际高度自适应。
   *
   * @param { boolean } enabled - 行高是否基于文字实际高度自适应。<br/>true表示行高基于文字实际高度自适应；false表示行高不基于文字实际高度自适应。
   * @returns { T } 安全控件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fallbackLineSpacing(enabled: boolean): T;
  /**
   * 支持在屏幕朗读过程中，指定朗读的下一个焦点组件。
   *
   * @param { string } nextId - 下一个被指定聚焦组件的 [唯一标识 ID]{@link SecurityComponentMethod.id}。若唯一标识id无对应组件，则设置无效。
   * @returns { T } 当前对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityNextFocusId(nextId: string): T;

  /**
   * 设置页面的屏幕朗读初始焦点，用于指定页面加载后屏幕朗读首次播报的焦点组件。
   *
   * @param { boolean } focus - 为页面设置屏幕朗读初始焦点。值为true则表示该组件为当前页默认首焦点，值为false或其他值无效。
   * @returns { T } 当前对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityDefaultFocus(focus: boolean): T;

  /**
   * 设置无障碍组件类型，特定组件类型有特定的朗读方式，可以根据应用诉求，修改组件类型，用于控制无障碍模式下对组件的朗读方式和朗读内容。
   *
   * @param { SecurityComponentRoleType } role - 屏幕朗读播报的组件类型，如按钮、图表。具体类型可由开发者自定义。
   * @returns { T } 当前对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityRole(role: SecurityComponentRoleType): T;

  /**
   * 该属性用于为控件提供无障碍描述。开发人员可通过设置详细的文字说明，帮助用户理解组件的功能及即将执行的操作。
   *
   * @param { string | Resource } description - 控件的无障碍说明。用于补充组件的详细操作解释，帮助用户理解当前操作的具体内容及其潜在后果。控件被选中时，
   *     若组件同时包含文本属性和无障碍说明，优先播报文本内容，再播报无障碍说明。
   *     <br>该参数的默认值为空字符串。
   * @returns { T } 当前对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityDescription(description: string | Resource): T;
}