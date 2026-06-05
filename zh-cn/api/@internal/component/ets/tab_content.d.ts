/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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
* 作为DrawableTabBarIndicator对象中drawable属性的入参对象。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 22 dynamic
 */
declare type DrawableDescriptor = import ('../api/@ohos.arkui.drawableDescriptor').DrawableDescriptor;

/**
* 选中子页签的显示模式枚举。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum SelectedMode {

  /**
   * 使用下划线模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  INDICATOR = 0,

  /**
   * 使用背板模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  BOARD = 1
}

/**
* 页签内容排布方式枚举。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum LayoutMode {

  /**
   * 若页签宽度大于104vp，页签内容为左右排布，否则页签内容为上下排布。仅TabBar为垂直模式或Fixed水平模式时有效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  AUTO = 0,

  /**
   * 页签内容上下排布。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  VERTICAL = 1,

  /**
   * 页签内容左右排布。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  HORIZONTAL = 2
}

/**
* 下划线风格对象。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface IndicatorStyle {

  /**
   * 下划线的颜色和背板颜色。
   *
   * 默认值：#FF007DFF，浅蓝色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  color?: ResourceColor;

  /**
   * 下划线的高度（不支持百分比设置）。
   *
   * 默认值：2.0
   *
   * 单位：vp
   *
   * 取值范围：[0, +∞)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  height?: Length;

  /**
   * 下划线的宽度（不支持百分比设置）。
   *
   * 默认值：0.0
   *
   * 单位：vp
   *
   * 取值范围：[0, +∞)。
   *
   * **说明：**
   *
   * 宽度设置为0时，按页签文本宽度显示。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  width?: Length;

  /**
   * 下划线的圆角半径（不支持百分比设置）。
   *
   * 默认值：0.0
   *
   * 单位：vp
   *
   * 取值范围：[0, +∞)。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  borderRadius?: Length;

  /**
   * 下划线与文字的间距（不支持百分比设置）。
   *
   * 默认值：8.0
   *
   * 单位：vp
   *
   * 取值范围：[0, +∞)。
   *
   * @default 8
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  marginTop?: Length;
}

/**
* 使用图片资源作为下划线的对象。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare interface DrawableTabBarIndicator {

  /**
   * 下划线的图源。
   * 支持[DrawableDescriptor]{@link @ohos.arkui.drawableDescriptor:DrawableDescriptorLoadedResult}、
   * [PixelMapDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor:PixelMapDrawableDescriptor}、
   * [LayeredDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor:LayeredDrawableDescriptor}和
   * [AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor:AnimatedDrawableDescriptor}类型。当传入无效图源时将显示默认的实线型下划
   * 线。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  drawable?: DrawableDescriptor;

  /**
   * 下划线的宽度（不支持百分比设置）。
   *
   * 默认值：0.0
   *
   * 单位：vp
   *
   * 取值范围：[0, +∞)
   *
   * 宽度设置为0时，按页签文本宽度显示。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  width?: Length;

  /**
   * 下划线的高度（不支持百分比设置）。
   *
   * 默认值：2.0
   *
   * 单位：vp
   *
   * 取值范围：[0, +∞)
   *
   * @default 2vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  height?: Length;

  /**
   * 下划线的圆角半径（不支持百分比设置）。
   *
   * 默认值：0.0
   *
   * 单位：vp
   *
   * 取值范围：[0, +∞)
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  borderRadius?: Length;

  /**
   * 下划线与文字的间距（不支持百分比设置）。
   *
   * 默认值：8.0
   *
   * 单位：vp
   *
   * 取值范围：[0, +∞)
   *
   * @default 8vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  marginTop?: Length;
}

/**
* 背板风格对象。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface BoardStyle {

  /**
   * 背板的圆角半径（不支持百分比设置）。
   *
   * 默认值：8.0
   *
   * 单位：vp
   *
   * 取值范围：[0, +∞)。
   *
   * @default 8.0vp [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  borderRadius?: Length;
}

/**
* label文本和字体的样式对象。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface LabelStyle {

  /**
   * 设置label文本超长时的显示方式。默认值是省略号截断。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  overflow?: TextOverflow;

  /**
   * 设置label文本的最大行数。如果指定此参数，则文本最多不会超过指定的行。如果有多余的文本，可以通过textOverflow来指定截断方式。默认值是1。
   *
   * 取值范围：[1, +∞)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  maxLines?: number;

  /**
   * 设置label文本最小显示字号（不支持百分比设置）。需配合maxFontSize以及maxLines或布局大小限制使用。自适应文本大小生效后，font.size不生效。默认值是0.0fp，即默认自适应文本大小不生效。
   *
   * 取值范围：(0, +∞)。
   *
   * @default 0.0fp [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  minFontSize?: number | ResourceStr;

  /**
   * 设置label文本最大显示字号（不支持百分比设置）。需配合minFontSize以及maxLines或布局大小限制使用。自适应文本大小生效后，font.size不生效。默认值是0.0fp，即默认自适应文本大小不生效。
   *
   * 取值范围：[minFontSize, +∞)。
   *
   * @default 0.0fp [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  maxFontSize?: number | ResourceStr;

  /**
   * 设置Label文本自适应高度的方式。默认值是最大行数优先。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  heightAdaptivePolicy?: TextHeightAdaptivePolicy;

  /**
   * 设置label文本字体样式。
   *
   * 当页签为子页签时，默认值是字体大小16.0fp、字体类型'HarmonyOS Sans'，字体风格正常，选中时字重中等，未选中时字重正常。
   *
   * 当页签为底部页签时，默认值是字体大小10.0fp、字体类型'HarmonyOS Sans'，字体风格正常，字重中等。
   *
   * 从API version 12开始，底部页签内容左右排布时默认字体大小为12.0fp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  font?: Font;

  /**
   * 设置label文本字体选中时的颜色。
   *
   * 默认值：#FF007DFF
   *
   * @default #FF007DFF
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selectedColor?: ResourceColor;

  /**
   * 设置label文本字体未选中时的颜色。
   *
   * 默认值：#99182431
   *
   * @default #99182431
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  unselectedColor?: ResourceColor;
}

/**
* Label图标样式对象。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface TabBarIconStyle {

  /**
   * 设置Label图标选中时的颜色。
   *
   * 默认值：#FF007DFF
   *
   * **说明：**
   *
   * 仅对svg图源生效，设置后会替换svg图片的填充颜色。
   *
   * @default #FF007DFF
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selectedColor?: ResourceColor;

  /**
   * 设置Label图标未选中时的颜色。
   *
   * 默认值：#33182431
   *
   * **说明：**
   *
   * 仅对svg图源生效，设置后会替换svg图片的填充颜色。
   *
   * @default #33182431
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  unselectedColor?: ResourceColor;
}

/**
* 页签内symbol图标样式对象。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare class TabBarSymbol {

  /**
   * 页签内symbol图标普通态样式。
   *
   * 默认值：
   *
   * fontColor：#66182431
   *
   * renderingStrategy：SymbolRenderingStrategy.MULTIPLE_OPACITY
   *
   * fontSize：24vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  normal: SymbolGlyphModifier;

  /**
   * 页签内symbol图标选中态样式。
   *
   * 默认值：
   *
   * fontColor：#ff007dff
   *
   * renderingStrategy：SymbolRenderingStrategy.MULTIPLE_OPACITY
   *
   * fontSize：24vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  selected?: SymbolGlyphModifier;
}

/**
* 设置页签内的图片和文字内容。
*
* > **说明：**
*
* > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface TabBarOptions {

  /**
   * TabBar icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  icon?: string | Resource;

  /**
   * TabBar text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  text?: string | Resource;

  /**
   * TabBar 信息标记组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  badge?: BadgeParamWithNumber | BadgeParamWithString;
}

/**
* 子页签样式。打开后在切换页签时会播放跳转动画。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class SubTabBarStyle {

  /**
   * SubTabBarStyle的构造函数。
   *
   * @param { ResourceStr } content - 页签内的文字内容。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor(content: ResourceStr);

  /**
   * SubTabBarStyle的构造函数。支持ComponentContent设置自定义内容。
   *
   * @param { ResourceStr | ComponentContent } content - 页签内的内容。<br />**说明：**<br />1.自定义内容不支持labelStyle属性。<br />2.自定义内容超
   *     出页签范围，则不显示超出部分。<br />3.自定义内容小于页签范围，则会居中对齐。<br />4.自定义内容异常或无可用显示组件，则显示空白。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(content: ResourceStr | ComponentContent);

  /**
   * SubTabBarStyle的静态构造函数。
   *
   * @param { ResourceStr } content - 页签内的文字内容。
   * @returns { SubTabBarStyle } 返回创建的SubTabBarStyle对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static of(content: ResourceStr): SubTabBarStyle;

  /**
   * SubTabBarStyle的静态构造函数。支持ComponentContent设置自定义内容。
   *
   * @param { ResourceStr | ComponentContent } content - 页签内的内容。支持ComponentContent设置自定义内容。<br />**说明：**<br />1.自定义内容不支持
   *     labelStyle属性。<br />2.自定义内容超出页签范围，则不显示超出部分。<br />3.自定义内容小于页签范围，则会居中对齐。<br />4.自定义内容异常或无可用显示组件，则显示空白。
   * @returns { SubTabBarStyle } 返回创建的SubTabBarStyle对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static of(content: ResourceStr | ComponentContent): SubTabBarStyle;

  /**
   * 设置选中子页签的下划线风格。子页签的下划线风格仅在水平模式下有效。
   *
   * @param { IndicatorStyle } value - 选中子页签的下划线风格对象。
   * @returns { SubTabBarStyle } 返回SubTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  indicator(value: IndicatorStyle): SubTabBarStyle;

  /**
   * 设置选中子页签的下划线风格。与[indicator]{@link SubTabBarStyle#indicator(value: IndicatorStyle)}相比，新增了图片格式的下划线风格，图片的显示效果参照
   * [ImageFit.Cover]{@link ImageFit}。子页签的下划线风格仅在水平模式下有效。
   *
   * @param { IndicatorStyle | DrawableTabBarIndicator } value - 选中子页签的下划线风格对象。<br />IndicatorStyle：一般形式的下划线样式。<br />
   *     DrawableTabBarIndicator：图片形式的下划线样式。
   * @returns { SubTabBarStyle } 返回SubTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  indicator(value: IndicatorStyle | DrawableTabBarIndicator): SubTabBarStyle;

  /**
   * 设置选中子页签的显示方式。子页签的显示方式仅在水平模式下有效。
   *
   * @param { SelectedMode } value - 选中子页签的显示方式。<br />默认值：SelectedMode.INDICATOR
   * @returns { SubTabBarStyle } 返回SubTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedMode(value: SelectedMode): SubTabBarStyle;

  /**
   * 设置选中子页签的背板风格。子页签的背板风格仅在水平模式下有效。
   *
   * @param { BoardStyle } value - 选中子页签的背板风格对象。
   * @returns { SubTabBarStyle } 返回SubTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  board(value: BoardStyle): SubTabBarStyle;

  /**
   * 设置子页签的label文本和字体的样式。
   *
   * @param { LabelStyle } value - 子页签的label文本和字体的样式对象。
   * @returns { SubTabBarStyle } 返回SubTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  labelStyle(value: LabelStyle): SubTabBarStyle;

  /**
   * 设置子页签的内边距属性（不支持百分比设置）。使用Dimension时，四个方向内边距同时生效。
   *
   * @param { Padding | Dimension } value - 子页签的内边距属性。<br/>取值范围：[0, +∞]<br/>异常值时取默认值。<br />默认值：{left:8.0vp,right:8.0vp,
   *     top:17.0vp,bottom:18.0vp}
   * @returns { SubTabBarStyle } 返回SubTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  padding(value: Padding | Dimension): SubTabBarStyle;

  /**
   * 设置子页签的内边距属性，支持镜像能力（不支持百分比设置）。
   *
   * @param { LocalizedPadding } padding - 子页签的内边距属性。<br/>异常值时取默认值。<br/>取值范围：[0, +∞]<br/>异常值时取默认值。<br />默认值：{start:
   *     LengthMetrics.vp(8),end:LengthMetrics.vp(8),<br/>top:LengthMetrics.vp(17),bottom:LengthMetrics.vp(18)}
   * @returns { SubTabBarStyle } 返回SubTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  padding(padding: LocalizedPadding): SubTabBarStyle;

  /**
   * 设置子页签的id。
   *
   * @param { string } value - 子页签的id。
   * @returns { SubTabBarStyle } 返回SubTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  id(value: string): SubTabBarStyle;
}

/**
* 底部页签和侧边页签样式。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class BottomTabBarStyle {

  /**
   * BottomTabBarStyle的构造函数。
   *
   * @param { ResourceStr } icon - Image for the tab. [since 9 - 11]
   * @param { ResourceStr | TabBarSymbol } icon - 页签内的图片内容。 [since 9 - 11]
   * @param { ResourceStr } text - 页签内的文字内容。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor(icon: ResourceStr | TabBarSymbol, text: ResourceStr);

  /**
   * BottomTabBarStyle的静态构造函数。
   *
   * @param { ResourceStr } icon - Image for the tab. [since 10 - 11]
   * @param { ResourceStr | TabBarSymbol } icon - 页签内的图片内容。 [since 10 - 11]
   * @param { ResourceStr } text - 页签内的文字内容。
   * @returns { BottomTabBarStyle } 返回创建的BottomTabBarStyle对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static of(icon: ResourceStr | TabBarSymbol, text: ResourceStr): BottomTabBarStyle;

  /**
   * 设置底部页签的label文本和字体的样式。
   *
   * @param { LabelStyle } value - 底部页签的label文本和字体的样式。
   * @returns { BottomTabBarStyle } 返回BottomTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  labelStyle(value: LabelStyle): BottomTabBarStyle;

  /**
   * 设置底部页签的内边距属性（不支持百分比设置）。使用Dimension时，四个方向内边距同时生效。
   *
   * @param { Padding | Dimension } value - Padding of the bottom tab.<br>Value range: [0, +∞]<br>Default value:
   *     **{left:4.0vp,right:4.0vp,top:0.0vp,bottom:0.0vp}**<br>If of the LocalizedPadding type, this attribute supports
   *     the mirroring capability.<br>Default value: **{start:LengthMetrics.vp(4),end:LengthMetrics.vp(4),**<br>
   *     **top:LengthMetrics.vp(0),bottom:LengthMetrics.vp(0)}** [since 10 - 11]
   * @param { Padding | Dimension | LocalizedPadding } value - 底部页签的内边距。<br/>取值范围：[0, +∞]<br/>默认值：{left:4.0vp,right:4.0vp,top:0.0vp,bottom:
   *     0.0vp}<br/>使用LocalizedPadding时，支持镜像能力。<br />默认值：{start:LengthMetrics.vp(4),end:LengthMetrics.vp(4),<br/>top:
   *     LengthMetrics.vp(0),bottom:LengthMetrics.vp(0)} [since 10 - 11]
   * @returns { BottomTabBarStyle } 返回BottomTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  padding(value: Padding | Dimension | LocalizedPadding): BottomTabBarStyle;

  /**
   * 设置底部页签的图片、文字排布的方式。
   *
   * @param { LayoutMode } value - 底部页签的图片、文字排布的方式，具体参照LayoutMode枚举。<br/>默认值：LayoutMode.VERTICAL
   * @returns { BottomTabBarStyle } 返回BottomTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  layoutMode(value: LayoutMode): BottomTabBarStyle;

  /**
   * 设置底部页签的图片、文字在垂直方向上的对齐格式。
   *
   * @param { VerticalAlign } value - 底部页签的图片、文字在垂直方向上的对齐格式。<br/>默认值：VerticalAlign.Center
   * @returns { BottomTabBarStyle } 返回BottomTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  verticalAlign(value: VerticalAlign): BottomTabBarStyle;

  /**
   * 设置底部页签的图片、文字是否可以对称借用左右底部页签的空余位置中的最小值，仅fixed水平模式下在底部页签之间有效。
   *
   * @param { boolean } value - 底部页签的图片、文字是否可以对称借用左右底部页签的空余位置中的最小值。<br/>默认值：false，底部页签的图片、文字不可以对称借用左右底部页签的空余位置中的最小值。
   * @returns { BottomTabBarStyle } 返回BottomTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  symmetricExtensible(value: boolean): BottomTabBarStyle;

  /**
   * 设置底部页签的id。
   *
   * @param { string } value - 设置底部页签的id。
   * @returns { BottomTabBarStyle } 返回BottomTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  id(value: string): BottomTabBarStyle;

  /**
   * 设置底部页签的label图标的样式。
   *
   * @param { TabBarIconStyle } style - 底部页签的label图标的样式。
   * @returns { BottomTabBarStyle } 返回BottomTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  iconStyle(style: TabBarIconStyle): BottomTabBarStyle;
}

/**
* 仅在[Tabs]{@link tabs}中使用，对应一个切换页签的内容视图。
*
* > **说明：**
*
* > - 该组件默认设置了[clip]{@link CommonMethod#clip(value: boolean)}属性的值为true，若需要扩展内容区到组件外显示，需先关闭clip属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface TabContentInterface {

  /**
   * 创建TabContent页签和内容。
   *
   * @returns { TabContentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (): TabContentAttribute;
}

/**
* 除支持[通用属性]{@link common}外，还支持以下属性：
*
* 除支持[通用事件]{@link common}外，还支持以下事件：
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class TabContentAttribute extends CommonMethod<TabContentAttribute> {

  /**
   * 设置TabBar上显示内容。
   *
   * 如果icon采用svg格式图源，需删除svg图源内置的宽高属性值。否则，icon大小将使用svg图源内置的宽高属性值。
   *
   * 设置的内容超出tabBar页签时进行裁切。
   *
   * @param { string | Resource | { icon?: string | Resource; text?: string | Resource } } value [since 7 - 7]
   * @param { string | Resource | CustomBuilder | { icon?: string | Resource; text?: string | Resource } }
   *     value [since 8 - 17]
   * @param { string | Resource | CustomBuilder | TabBarOptions } options - TabBar上显示内容。<br/>CustomBuilder：?构造器，内部可以传入组件
   *     （API version 8版本以上适用）。 [since 18]
   * @returns { TabContentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  tabBar(options: string | Resource | CustomBuilder | TabBarOptions): TabContentAttribute;

  /**
   * 设置TabBar上显示内容。底部样式没有下划线效果。icon异常时显示灰色图块。
   *
   * > **说明：**
   *
   * > - 子页签（[SubTabBarStyle]{@link SubTabBarStyle}）样式：通常为文字+下划线，文字+背板的页签风格，允许设置文本样式，建议放置在顶部或者底部使用。切换页签时默认支持动画跳转效果。适用于资讯
   * > 类应用的顶部分类（如"关注、视频、数码"）、功能模块的二级导航场景。
   * >
   * > - 底部页签/侧边页签（[BottomTabBarStyle]{@link BottomTabBarStyle}）样式：无下划线和背板效果，页签样式通常为图标+文字的组合方式。切换页签时默认无动画跳转效果。底部页签通常用于应用
   * > 主导航（如首页、发现、推荐）。侧边页签适用于宽屏场景，可设置vertical(true)启用纵向布局，让页签在侧边显示，默认左侧显示。
   *
   * @param { SubTabBarStyle | BottomTabBarStyle } value - TabBar上显示内容。<br/>SubTabBarStyle：?子页签样式。<br/>
   *     BottomTabBarStyle：?底部页签和侧边页签样式。
   * @returns { TabContentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  tabBar(value: SubTabBarStyle | BottomTabBarStyle): TabContentAttribute;

  /**
   * 设置TabBar上显示内容。
   *
   * 使用BottomTabBarStyle或TabBarOptions类型作为入参并设置icon，icon异常时显示灰色图块。如果icon采用svg格式图源，需删除svg图源内置的宽高属性值。否则，icon大小将使用svg图源内置的宽
   * 高属性值。
   *
   * 设置的内容超出TabBar页签时进行裁切。
   *
   * @param { ComponentContent | SubTabBarStyle | BottomTabBarStyle | string | Resource | CustomBuilder | TabBarOptions
   *     } content - Content displayed on the tab bar.<br>**ComponentContent**: encapsulation of the component content,
   *     which can be customized.<br>**SubTabBarStyle**: subtab style.<br>**BottomTabBarStyle**: style of the bottom and
   *     side tabs. The bottom style does not have the underline effect.<br>**string**: string type.<br>**Resource**:
   *     resource reference for importing strings from system or application resources.<br>**CustomBuilder**: builder
   *     that can take components as arguments.<br>**TabBarOptions**: options for configuring images and text content on
   *     the tabs.
   * @returns { TabContentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  tabBar(content: ComponentContent | SubTabBarStyle | BottomTabBarStyle | string | Resource | CustomBuilder | 
    TabBarOptions): TabContentAttribute;

  /**
   * 逻辑回调，TabContent将要显示的时候触发该回调。场景包括TabContent首次显示，TabContent切换，页面切换，窗口前后台切换。
   *
   * > **说明：**
   *
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { VoidCallback  } event - TabContent将要显示的回调函数。
   * @returns { TabContentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillShow(event: VoidCallback): TabContentAttribute;

  /**
   * 逻辑回调，TabContent将要隐藏的时候触发该回调。场景包括TabContent切换，页面切换，窗口前后台切换。
   *
   * > **说明：**
   *
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { VoidCallback  } event - TabContent将要隐藏的回调函数。
   * @returns { TabContentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillHide(event: VoidCallback): TabContentAttribute;
}

/**
* 仅在[Tabs]{@link tabs}中使用，对应一个切换页签的内容视图。
*
* > **说明：**
*
* > - 该组件默认设置了[clip]{@link CommonMethod#clip(value: boolean)}属性的值为true，若需要扩展内容区到组件外显示，需先关闭clip属性。
*
* ###### 子组件
*
* 支持单个子组件。
*
* > **说明：**
* >
* > 可内置系统组件和自定义组件，支持渲染控制类型（[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、
* > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)和
* > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)）。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const TabContent: TabContentInterface;

/**
* Defines TabContent Component instance.
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const TabContentInstance: TabContentAttribute;