
'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @arkts 1.2
 */

import { CommonMethod } from './common';

import { Builder, CustomBuilder, CustomBuilderT } from './builder';

import { TextHeightAdaptivePolicy, TextOverflow, VerticalAlign } from './enums';

import { Dimension, Font, Length, LocalizedPadding, Padding, Resource, ResourceColor, ResourceStr, VoidCallback } from './units';

import { ComponentContentBase } from '../ComponentContent';

import { SymbolGlyphModifier } from '../SymbolGlyphModifier';

import { ComponentBuilder } from './builder';

import { AttributeModifier, CommonMethod } from './common';

import { DrawableDescriptor } from '../../@ohos.arkui.drawableDescriptor';

/**
 * 选中子页签的显示模式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SelectedMode {

  /**
   * 使用下划线模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  INDICATOR = 0,

  /**
   * 使用背板模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BOARD = 1
}

/**
 * 页签内容排布方式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum LayoutMode {

  /**
   * 若页签宽度大于104vp，页签内容为左右排布，否则页签内容为上下排布。仅TabBar为垂直模式或Fixed水平模式时有效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  AUTO = 0,

  /**
   * 页签内容上下排布。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  VERTICAL = 1,

  /**
   * 页签内容左右排布。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  HORIZONTAL = 2
}

/**
 * 下划线风格对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SubTabBarIndicatorStyle {

  /**
   * 下划线的颜色和背板颜色。
   * 
   * 默认值：#FF007DFF
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  color?: ResourceColor;

  /**
   * 下划线的高度（不支持百分比设置）。
   * 
   * 默认值：2.0
   * 
   * 单位：vp
   * 
   * 取值范围：(0, +∞)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  height?: Length;

  /**
   * 下划线的宽度（不支持百分比设置）。
   * 
   * 默认值：0.0
   * 
   * 单位：vp
   * 
   * 取值范围：(0, +∞)。 
   * 
   * **说明：** 
   * 
   * 宽度设置为0时，按页签文本宽度显示。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
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
   * @since 23 static
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
   * @since 23 static
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
 * @since 23 static
 */
export declare interface DrawableTabBarIndicator {

  /**
   * 下划线的图源。
   * 
   * 支持[DrawableDescriptor]{@link ./../../@ohos.arkui.drawableDescriptor:DrawableDescriptorLoadedResult}、
   * [PixelMapDrawableDescriptor]{@link ./../../@ohos.arkui.drawableDescriptor:PixelMapDrawableDescriptor}、
   * [LayeredDrawableDescriptor]{@link ./../../@ohos.arkui.drawableDescriptor:LayeredDrawableDescriptor}和
   * [AnimatedDrawableDescriptor]{@link ./../../@ohos.arkui.drawableDescriptor:AnimatedDrawableDescriptor}类型。当传入无效图源时将显示
   * 默认的实线型下划线。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 static
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
   * @since 23 static
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
   * @since 23 static
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
   * @since 23 static
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
   * @since 23 static
   */
  marginTop?: Length;
}

/**
 * 背板风格对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface BoardStyle {

  /**
   * 背板的圆角半径（不支持百分比设置）。
   * 
   * 默认值：8.0
   * 
   * 单位：vp
   * 
   * 取值范围：[0, +∞)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  borderRadius?: Length;
}

/**
 * label文本和字体的样式对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TabBarLabelStyle {

  /**
   * 设置Label文本超长时的显示方式。默认值是省略号截断。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  overflow?: TextOverflow;

  /**
   * 设置Label文本的最大行数。如果指定此参数，则文本最多不会超过指定的行。如果有多余的文本，可以通过textOverflow来指定截断方式。默认值是1。
   * 
   * 取值范围：[1, +∞)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  maxLines?: int;

  /**
   * 设置Label文本最小显示字号（不支持百分比设置）。需配合maxFontSize以及maxLines或布局大小限制使用。自适应文本大小生效后，font.size不生效。默认值是0.0fp，即默认自适应文本大小不生效。
   * 
   * 取值范围：(0, +∞)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  minFontSize?: double | ResourceStr;

  /**
   * 设置Label文本最大显示字号（不支持百分比设置）。需配合minFontSize以及maxLines或布局大小限制使用。自适应文本大小生效后，font.size不生效。默认值是0.0fp，即默认自适应文本大小不生效。
   * 
   * 取值范围：[minFontSize, +∞)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  maxFontSize?: double | ResourceStr;

  /**
   * 设置Label文本自适应高度的方式。默认值是最大行数优先。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  heightAdaptivePolicy?: TextHeightAdaptivePolicy;

  /**
   * 设置Label文本字体样式。
   * 
   * 当页签为子页签时，默认值是字体大小16.0fp、字体类型'HarmonyOS Sans'，字体风格正常，选中时字重中等，未选中时字重正常。
   * 
   * 当页签为底部页签时，默认值是字体大小10.0fp、字体类型'HarmonyOS Sans'，字体风格正常，字重中等。
   * 
   * 从API version 12开始，底部页签内容左右排布时默认字体大小为12.0fp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  font?: Font;

  /**
   * 设置Label文本字体选中时的颜色。
   * 
   * 默认值：#FF007DFF
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  selectedColor?: ResourceColor;

  /**
   * 设置Label文本字体未选中时的颜色。
   * 
   * 默认值：#99182431
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  unselectedColor?: ResourceColor;
}

/**
 * Label图标样式对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TabBarIconStyle {

  /**
   * 设置Label图标选中时的颜色。
   * 
   * 默认值：#FF007DFF 
   * 
   * **说明：** 
   * 
   * 仅对svg图源生效，设置后会替换svg图片的填充颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  unselectedColor?: ResourceColor;
}

/**
 * TabBarSymbol object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class TabBarSymbol {

  /**
   * 获取tabBar页签普通态的图标样式。
   *
   * @returns { SymbolGlyphModifier }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get normal(): SymbolGlyphModifier;

  /**
  * 设置tabBar页签图标普通态样式。
  *
   * @param { SymbolGlyphModifier } normal - 设置tabBar页签图普通态样式。
  *     <br>默认值： fontColor: #66182431, renderingStrategy: SymbolRenderingStrategy.MULTIPLE_OPACITY, fontSize: 24vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set normal(normal: SymbolGlyphModifier);

  /**
   * 获取tabBar页签选中态的图标样式。
   *
   * @returns { SymbolGlyphModifier | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get selected(): SymbolGlyphModifier | undefined;

  /**
  * 设置tabBar页签选中态的图标样式。
  *
   * @param { SymbolGlyphModifier | undefined } selected - 设置tabBar页签选中态的图标样式。
  *     <br>默认值：fontColor: #ff007dff, renderingStrategy: SymbolRenderingStrategy.MULTIPLE_OPACITY, fontSize: 24vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set selected(selected: SymbolGlyphModifier | undefined);
}

/**
 * 设置页签内的图片和文字内容。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TabBarOptions {

  /**
   * 页签内的图片内容。未设置时不显示图片。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  icon?: string | Resource;

  /**
   * 页签内的文字内容。未设置时不显示文字。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  text?: string | Resource;

  /**
   * TabBar 信息标记组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 26.0.0 static
   */
  badge?: BadgeParamWithNumber | BadgeParamWithString;
}

/**
 * 子页签样式。打开后在切换页签时会播放跳转动画。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class SubTabBarStyle {

  /**
   * SubTabBarStyle的构造函数。支持ComponentContent设置自定义内容。
   *
   * @param { ResourceStr | ComponentContentBase } content - 页签内的内容。<br />**说明：**<br />1.自定义内容不支持labelStyle属性。<br />2.自定
   *     义内容超出页签范围，则不显示超出部分。<br />3.自定义内容小于页签范围，则会居中对齐。<br />4.自定义内容异常或无可用显示组件，则显示空白。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(content: ResourceStr | ComponentContentBase);

  /**
   * SubTabBarStyle的静态构造函数。支持ComponentContent设置自定义内容。
   *
   * @param { ResourceStr | ComponentContentBase } content - 页签内的内容。支持ComponentContentBase设置自定义内容。<br />**说明：**<br />1.自
   *     定义内容不支持labelStyle属性。<br />2.自定义内容超出页签范围，则不显示超出部分。<br />3.自定义内容小于页签范围，则会居中对齐。<br />4.自定义内容异常或无可用显示组件，则显示空白。
   * @returns { SubTabBarStyle } 返回创建的SubTabBarStyle对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static of(content: ResourceStr | ComponentContentBase): SubTabBarStyle;

  /**
   * 设置选中子页签的下划线风格。子页签的下划线风格仅在水平模式下有效。
   *
   * @param { SubTabBarIndicatorStyle } style - 选中子页签的下划线风格对象。
   * @returns { SubTabBarStyle } 返回SubTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  indicator(style: SubTabBarIndicatorStyle): SubTabBarStyle;

  /**
   * 设置选中子页签的下划线风格。子页签的下划线风格仅在水平模式下有效。
   *
   * @param { SubTabBarIndicatorStyle | DrawableTabBarIndicator } value - 选中子页签的下划线风格对象。
   * @returns { SubTabBarStyle } 返回SubTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  indicator(value: SubTabBarIndicatorStyle | DrawableTabBarIndicator): SubTabBarStyle;

  /**
   * 设置选中子页签的显示方式。子页签的显示方式仅在水平模式下有效。
   *
   * @param { SelectedMode } value - 选中子页签的显示方式。<br />默认值：SelectedMode.INDICATOR
   * @returns { SubTabBarStyle } 返回SubTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  selectedMode(value: SelectedMode): SubTabBarStyle;

  /**
   * 设置选中子页签的背板风格。子页签的背板风格仅在水平模式下有效。
   *
   * @param { BoardStyle } value - 选中子页签的背板风格对象。
   * @returns { SubTabBarStyle } 返回SubTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  board(value: BoardStyle): SubTabBarStyle;

  /**
   * 设置子页签的label文本和字体的样式。
   *
   * @param { TabBarLabelStyle } style - 子页签的label文本和字体的样式对象。
   * @returns { SubTabBarStyle } 返回SubTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  labelStyle(style: TabBarLabelStyle): SubTabBarStyle;

  /**
   * 设置子页签的内边距属性（不支持百分比设置）。使用Dimension时，四个方向内边距同时生效。
   *
   * @param { Padding | Dimension } value - 子页签的内边距属性。<br/>取值范围：[0, +∞]<br/>异常值时取默认值。<br />默认值：{left:8.0vp,right:8.0vp,
   *     top:17.0vp,bottom:18.0vp}
   * @returns { SubTabBarStyle } 返回SubTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
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
   * @since 23 static
   */
  padding(padding: LocalizedPadding): SubTabBarStyle;

  /**
   * 设置子页签的id。
   *
   * @param { string } value - 子页签的id。
   * @returns { SubTabBarStyle } 返回SubTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  id(value: string): SubTabBarStyle;
}

/**
 * 底部页签和侧边页签样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class BottomTabBarStyle {

  /**
   * BottomTabBarStyle的构造函数。
   *
   * @param { ResourceStr | TabBarSymbol } icon - 页签内的图片内容。
   * @param { ResourceStr } text - 页签内的文字内容。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(icon: ResourceStr | TabBarSymbol, text: ResourceStr);

  /**
   * BottomTabBarStyle的静态构造函数。
   *
   * @param { ResourceStr | TabBarSymbol } icon - 页签内的图片内容。
   * @param { ResourceStr } text - 页签内的文字内容。
   * @returns { BottomTabBarStyle } 返回创建的BottomTabBarStyle对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static of(icon: ResourceStr | TabBarSymbol, text: ResourceStr): BottomTabBarStyle;

  /**
   * 设置底部页签的label文本和字体的样式。
   *
   * @param { TabBarLabelStyle } style - 底部页签的label文本和字体的样式。
   * @returns { BottomTabBarStyle } 返回BottomTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  labelStyle(style: TabBarLabelStyle): BottomTabBarStyle;

  /**
   * 设置底部页签的内边距属性（不支持百分比设置）。使用Dimension时，四个方向内边距同时生效。
   *
   * @param { Padding | Dimension | LocalizedPadding } value - 底部页签的内边距。<br/>取值范围：[0, +∞]<br/>默认值：{left:4.0vp,right:4.0
   *     vp,top:0.0vp,bottom:0.0vp}<br/>使用LocalizedPadding时，支持镜像能力。<br />默认值：{start:LengthMetrics.vp(4),end:
   *     LengthMetrics.vp(4),<br/>top:LengthMetrics.vp(0),bottom:LengthMetrics.vp(0)}
   * @returns { BottomTabBarStyle } 返回BottomTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  padding(value: Padding | Dimension | LocalizedPadding): BottomTabBarStyle;

  /**
   * 设置底部页签的图片、文字排布的方式。
   *
   * @param { LayoutMode } value - 底部页签的图片、文字排布的方式，具体参照LayoutMode枚举。<br/>默认值：LayoutMode.VERTICAL
   * @returns { BottomTabBarStyle } 返回BottomTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  layoutMode(value: LayoutMode): BottomTabBarStyle;

  /**
   * 设置底部页签的图片、文字在垂直方向上的对齐格式。
   *
   * @param { VerticalAlign } value - 底部页签的图片、文字在垂直方向上的对齐格式。<br/>默认值：VerticalAlign.Center
   * @returns { BottomTabBarStyle } 返回BottomTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  verticalAlign(value: VerticalAlign): BottomTabBarStyle;

  /**
   * 设置底部页签的图片、文字是否可以对称借用左右底部页签的空余位置中的最小值，仅fixed水平模式下在底部页签之间有效。
   *
   * @param { boolean } value - 底部页签的图片、文字是否可以对称借用左右底部页签的空余位置中的最小值。<br/>true：可以对称借用；false：不可以对称借用。<br/>默认值：false，底部页签的图片
   *     、文字不可以对称借用左右底部页签的空余位置中的最小值。
   * @returns { BottomTabBarStyle } 返回BottomTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  symmetricExtensible(value: boolean): BottomTabBarStyle;

  /**
   * 设置底部页签的id。
   *
   * @param { string } value - 设置底部页签的id。
   * @returns { BottomTabBarStyle } 返回BottomTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  id(value: string): BottomTabBarStyle;

  /**
   * 设置底部页签的label图标的样式。
   *
   * @param { TabBarIconStyle } style - 底部页签的label图标的样式。
   * @returns { BottomTabBarStyle } 返回BottomTabBarStyle对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconStyle(style: TabBarIconStyle): BottomTabBarStyle;
}

/**
 * 除支持[通用属性]{@link ./../../@internal/component/ets/common}外，还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface TabContentAttribute extends CommonMethod {

  /**
   * 设置TabBar上显示内容。
   * 
   * 使用BottomTabBarStyle或TabBarOptions类型作为入参并设置icon，icon异常时显示灰色图块。如果icon采用svg格式图源，需删除svg图源内置的宽高属性值。否则，icon大小将使用svg图源内置的宽
   * 高属性值。
   * 
   * 设置的内容超出TabBar页签时进行裁切。
   *
   * @param { ComponentContentBase | SubTabBarStyle | BottomTabBarStyle | string | Resource | CustomBuilder |
   *     TabBarOptions | undefined } content
   TabBar上显示内容。<br/>ComponentContent/ComponentContentBase： 组件内容的实体封装，可以设置自定义
   *     内容。<br/>SubTabBarStyle：?子页签样式。<br/>BottomTabBarStyle：?底部页签和侧边页签样式，底部样式没有下划线效果。<br/>string： 字符串类型。<br/>Resource：
   *     资源引用类型，引入系统资源或者应用资源中的字符串。<br/>CustomBuilder： 构造器，内部可以传入组件。<br/>TabBarOptions： 设置页签内的图片和文字内容。<br/>取值为undefined时，
   *     无显示内容。
   * @returns { TabContentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  tabBar(content: ComponentContentBase | SubTabBarStyle | BottomTabBarStyle | string | Resource | CustomBuilder | TabBarOptions | undefined): this;

  /**
   * 逻辑回调，TabContent将要显示的时候触发该回调。场景包括TabContent首次显示，TabContent切换，页面切换，窗口前后台切换。取值为undefined时，不使用回调函数。
   * 
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { VoidCallback | undefined } event
   TabContent将要显示的回调函数。<br/>取值为undefined时，不使用回调函数。
   * @returns { TabContentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onWillShow(event: VoidCallback | undefined): this;

  /**
   * 逻辑回调，TabContent将要隐藏的时候触发该回调。场景包括TabContent切换，页面切换，窗口前后台切换。取值为undefined时，不使用回调函数。
   * 
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { VoidCallback | undefined } event
   TabContent将要隐藏的回调函数。<br/>取值为undefined时，不使用回调函数。
   * @returns { TabContentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onWillHide(event: VoidCallback | undefined): this;

  /**
   * 动态设置TabContent组件的属性方法。
   *
   * @param { AttributeModifier<TabContentAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { TabContentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  attributeModifier(modifier: AttributeModifier<TabContentAttribute> | AttributeModifier<CommonMethod> | undefined): this;

  /**
   * 设置tabContent选项。
   *
   * @returns { TabContentAttribute } 返回TabContentAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setTabContentOptions(): this;
}

/**
 * 创建支持单个子组件。<br/>**说明：**<br/>可内置系统组件和自定义组件，支持渲染控制类型（
 *     [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、
 *     [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)和
 *     [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)）。页签和内容。
 *
 * @param { CustomBuilder } [content_] - 支持单个子组件。<br/>**说明：**<br/>可内置系统组件和自定义组件，支持渲染控制类型（
 *     [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、
 *     [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)和
 *     [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)）。
 * @returns { 支持单个子组件。<br/>**说明：**<br/>可内置系统组件和自定义组件，支持渲染控制类型（
 *     [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、
 *     [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)和
 *     [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)）。Attribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function TabContent(
    
    content_?: CustomBuilder,
): TabContentAttribute;

/**
  * 定义选项卡内容组件
  *
 * @param { CustomBuilderT<选项卡内容Attribute> } style_ - tabContent属性实例
 * @param { CustomBuilder } [content_] - 选项卡内容
 * @returns { 选项卡内容Attribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function TabContent(
 style_: CustomBuilderT<TabContentAttribute>,
 content_?: CustomBuilder,
): TabContentAttribute;