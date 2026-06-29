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
 * Defines the input parameter object of the **drawable** attribute in the **DrawableTabBarIndicator** object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 22 dynamic
 */
declare type DrawableDescriptor = import ('../api/@ohos.arkui.drawableDescriptor').DrawableDescriptor;

/**
 * Enumerates the display modes of selected subtabs.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum SelectedMode {

  /**
   * Indicator mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  INDICATOR = 0,

  /**
   * Board mode.
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
 * Enumerates the layout modes of the images and texts on the bottom tabs.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum LayoutMode {

  /**
   * When the tab width is greater than 104 vp, the tab content is arranged from left to right.
   *     Otherwise,the tab content is arranged from top to bottom. This parameter is valid only when the tab bar is in
   *     vertical mode or fixed horizontal mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  AUTO = 0,

  /**
   * The tab content is arranged from top to bottom.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  VERTICAL = 1,

  /**
   * The tab content is arranged from left to right.
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
 * Represents an indicator style object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface IndicatorStyle {

  /**
   * Color of the indicator and board.
   *
   * Default value: **#FF007DFF**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  color?: ResourceColor;

  /**
   * Height of the indicator. It cannot be set in percentage.
   *
   * Default value: **2.0**
   *
   * Unit: vp
   *
   * Value range: [0, +¡Þ)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  height?: Length;

  /**
   * Width of the indicator. It cannot be set in percentage.
   *
   * Default value: **0.0**
   *
   * Unit: vp
   *
   * Value range: [0, +¡Þ)
   *
   * **NOTE**
   *
   * If this parameter is set to **0**, the tab text width will be used instead.
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
   * Rounded corner radius of the indicator. It cannot be set in percentage.
   *
   * Default value: **0.0**
   *
   * Unit: vp
   *
   * Value range: [0, +¡Þ)
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
   * Spacing between the indicator and text. It cannot be set in percentage.
   *
   * Default value: **8.0**
   *
   * Unit: vp
   *
   * Value range: [0, +¡Þ)
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
 * Uses an image resource as the indicator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare interface DrawableTabBarIndicator {

  /**
   * Image resource of the indicator.
   * Supported types: [DrawableDescriptor]{@link @ohos.arkui.drawableDescriptor:DrawableDescriptorLoadedResult},
   * [PixelMapDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor:PixelMapDrawableDescriptor},
   * [LayeredDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor:LayeredDrawableDescriptor}, and
   * [AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor:AnimatedDrawableDescriptor}. If an invalid image
   * resource is passed, the default solid indicator is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  drawable?: DrawableDescriptor;

  /**
   * Width of the indicator. It cannot be set in percentage.
   *
   * Default value: **0.0**
   *
   * Unit: vp
   *
   * Value range: [0, +¡Þ)
   *
   * If this parameter is set to **0**, the tab text width will be used instead.
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
   * Height of the indicator. It cannot be set in percentage.
   *
   * Default value: **2.0**
   *
   * Unit: vp
   *
   * Value range: [0, +¡Þ)
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
   * Rounded corner radius of the indicator. It cannot be set in percentage.
   *
   * Default value: **0.0**
   *
   * Unit: vp
   *
   * Value range: [0, +¡Þ)
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
   * Spacing between the indicator and text. It cannot be set in percentage.
   *
   * Default value: **8.0**
   *
   * Unit: vp
   *
   * Value range: [0, +¡Þ)
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
 * Represents a board style object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface BoardStyle {

  /**
   * Rounded corner radius of the board. It cannot be set in percentage.
   *
   * Default value: **8.0**
   *
   * Unit: vp
   *
   * Value range: [0, +¡Þ)
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
 * Represents a style object for the label text and font.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface LabelStyle {

  /**
   * Display mode when the label text is too long. By default, an ellipsis (...) is used to represent text overflow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  overflow?: TextOverflow;

  /**
   * Maximum number of lines in the label text. If this attribute is specified, the text will not exceed the specified
   * number of lines. You can use **textOverflow** to specify how to represent text overflow. Default value: **1**
   *
   * Value range: [1, +¡Þ)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  maxLines?: number;

  /**
   * Minimum font size of the label text. It cannot be set in percentage. For the setting to take effect, this attribute
   * must be used together with **maxFontSize**, **maxLines**, or layout constraint settings. When the adaptive text
   * size is set, **font.size** does not take effect. The default value is **0.0fp**, indicating that the adaptive text
   * size has no effect.
   *
   * Value range: (0, +¡Þ)
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
   * Maximum font size of the label text. It cannot be set in percentage. For the setting to take effect, this attribute
   * must be used together with **minFontSize**, **maxLines**, or layout constraint settings. When the adaptive text
   * size is set, **font.size** does not take effect. The default value is **0.0fp**, indicating that the adaptive text
   * size has no effect.
   *
   * Value range: [minFontSize, +¡Þ)
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
   * How the adaptive height is determined for the label text. By default, the **maxLines** settings are prioritized.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  heightAdaptivePolicy?: TextHeightAdaptivePolicy;

  /**
   * Font of the label text.
   *
   * When the tab is a subtab, the default font is in 16.0 fp size, 'HarmonyOS Sans' family, normal font style, medium
   * weight when selected, and normal weight when not selected.
   *
   * When the tab is a bottom tab, the default font is in 10.0 fp size, 'HarmonyOS Sans' family, normal font style, and
   * medium weight.
   *
   * The default font size of the bottom tab page is 12.0 fp since API version 12.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  font?: Font;

  /**
   * Font color of the label text when it is selected.
   *
   * Default value: **#FF007DFF**
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
   * Font color of the label text when it is not selected.
   *
   * Default value: **#99182431**
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
 * Represents a label icon style object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface TabBarIconStyle {

  /**
   * Color of the label icon when it is selected.
   *
   * Default value: **#FF007DFF**
   *
   * **NOTE**
   *
   * This attribute only applies to an SVG image. Once set, the fill color will replace that of the SVG image.
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
   * Color of the label icon when it is not selected.
   *
   * Default value: **#33182431**
   *
   * **NOTE**
   *
   * This attribute only applies to an SVG image. Once set, the fill color will replace that of the SVG image.
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
 * Represents a tab bar symbol style object.
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
   * Symbol icon in the normal style.
   *
   * Default value:
   *
   * **fontColor**: **#66182431**
   *
   * **renderingStrategy**: **SymbolRenderingStrategy.MULTIPLE_OPACITY**
   *
   * **fontSize**: **24vp**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  normal: SymbolGlyphModifier;

  /**
   * Symbol icon in the selected style.
   *
   * Default value:
   *
   * **fontColor**: **#ff007dff**
   *
   * **renderingStrategy**: **SymbolRenderingStrategy.MULTIPLE_OPACITY**
   *
   * **fontSize**: **24vp**
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
 * Defines the options for configuring images and text content on the tabs.
 *
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18.
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface TabBarOptions {

  /**
   * Image for the tab. If this parameter is not set, no image is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  icon?: string | Resource;

  /**
   * Text for the tab. If this parameter is not set, no text is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  text?: string | Resource;
}

/**
 * Implements the subtab style. A transition animation is played when the user switches between tabs.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class SubTabBarStyle {

  /**
   * Constructor used to create a **SubTabBarStyle** instance.
   *
   * @param { ResourceStr } content - Text for the tab.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor(content: ResourceStr);

  /**
   * Constructor used to create a **SubTabBarStyle** instance. You can set custom content with **ComponentContent**.
   *
   * @param { ResourceStr | ComponentContent } content - Content on the tab.<br>**NOTE**<br>1. Custom content does not
   *     support the **labelStyle** attribute.<br>2. If the custom content exceeds the content box of the tab page, the
   *     excess part is not displayed.<br>3. If the custom content is within the content box of the tab page, it is
   *     aligned in the center.<br>4. If the custom content is abnormal or no display component is available, a blank
   *     area is displayed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(content: ResourceStr | ComponentContent);

  /**
   * Static constructor used to create a **SubTabBarStyle** instance.
   *
   * @param { ResourceStr } content - Text for the tab.
   * @returns { SubTabBarStyle } **SubTabBarStyle** object created.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static of(content: ResourceStr): SubTabBarStyle;

  /**
   * Static constructor used to create a **SubTabBarStyle** instance. You can set custom content with
   * **ComponentContent**.
   *
   * @param { ResourceStr | ComponentContent } content - Content on the tab. You can set custom content with
   *     **ComponentContent**.<br>**NOTE**<br>1. Custom content does not support the **labelStyle** attribute.<br>2. If
   *     the custom content exceeds the content box of the tab page, the excess part is not displayed.<br>3. If the
   *     custom content is within the content box of the tab page, it is aligned in the center.<br>4. If the custom
   *     content is abnormal or no display component is available, a blank area is displayed.
   * @returns { SubTabBarStyle } **SubTabBarStyle** object created.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static of(content: ResourceStr | ComponentContent): SubTabBarStyle;

  /**
   * Sets the indicator style of the selected subtab. It takes effect only in the horizontal layout.
   *
   * @param { IndicatorStyle } value - Indicator style object for the selected subtab.
   * @returns { SubTabBarStyle } **SubTabBarStyle** object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  indicator(value: IndicatorStyle): SubTabBarStyle;

  /**
   * Sets the indicator style of the selected subtab. Compared with
   * [indicator]{@link SubTabBarStyle#indicator(value: IndicatorStyle)}, the image format is added. For details about
   * the display effect of the image, see [ImageFit.Cover]{@link ImageFit}. It takes effect only in the horizontal
   * layout.
   *
   * @param { IndicatorStyle | DrawableTabBarIndicator } value - Yes
   * @returns { SubTabBarStyle } **SubTabBarStyle** object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  indicator(value: IndicatorStyle | DrawableTabBarIndicator): SubTabBarStyle;

  /**
   * Sets the display mode of the selected subtab. It takes effect only in the horizontal layout.
   *
   * @param { SelectedMode } value - Display mode of the selected subtab.<br>Default value: **SelectedMode.INDICATOR**
   * @returns { SubTabBarStyle } **SubTabBarStyle** object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedMode(value: SelectedMode): SubTabBarStyle;

  /**
   * Sets the background style (board style) of the selected subtab. It takes effect only in the horizontal layout.
   *
   * @param { BoardStyle } value - Background style object for the selected subtab.
   * @returns { SubTabBarStyle } **SubTabBarStyle** object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  board(value: BoardStyle): SubTabBarStyle;

  /**
   * Sets the style of the label text and font for the subtab.
   *
   * @param { LabelStyle } value - Style object for the label text and font of the subtab.
   * @returns { SubTabBarStyle } **SubTabBarStyle** object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  labelStyle(value: LabelStyle): SubTabBarStyle;

  /**
   * Sets the padding of the subtab. It cannot be set in percentage. When the parameter is of the Dimension type, the
   * value applies to all sides.
   *
   * @param { Padding | Dimension } value - Padding of the subtab.<br>Value range: [0, +¡Þ]<br>Default value:
   *     **{left:8.0vp,right:8.0vp,top:17.0vp,bottom:18.0vp}**
   * @returns { SubTabBarStyle } **SubTabBarStyle** object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  padding(value: Padding | Dimension): SubTabBarStyle;

  /**
   * Sets the padding of the subtab. This API supports mirroring but does not support percentage-based settings.
   *
   * @param { LocalizedPadding } padding - Padding of the subtab.<br>Value range: [0, +¡Þ]<br>Default value:
   *     **{start:LengthMetrics.vp(8),end:LengthMetrics.vp(8)**<br>
   *     **top:LengthMetrics.vp(17),bottom:LengthMetrics.vp(18)}**
   * @returns { SubTabBarStyle } **SubTabBarStyle** object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  padding(padding: LocalizedPadding): SubTabBarStyle;

  /**
   * Sets the [ID]{@link CommonMethod#id} of the subtab.
   *
   * @param { string } value - [ID]{@link CommonMethod#id} of the subtab.
   * @returns { SubTabBarStyle } **SubTabBarStyle** object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  id(value: string): SubTabBarStyle;
}

/**
 * Implements the bottom and side tab style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class BottomTabBarStyle {

  /**
   * A constructor used to create a **BottomTabBarStyle** instance.
   *
   * @param { ResourceStr } icon - Image for the tab. [since 9 - 11]
   * @param { ResourceStr | TabBarSymbol } icon - Image for the tab. [since 12]
   * @param { ResourceStr } text - Text for the tab.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor(icon: ResourceStr | TabBarSymbol, text: ResourceStr);

  /**
   * Static constructor used to create a **BottomTabBarStyle** instance.
   *
   * @param { ResourceStr } icon - Image for the tab. [since 10 - 11]
   * @param { ResourceStr | TabBarSymbol } icon - Image for the tab. [since 12]
   * @param { ResourceStr } text - Text for the tab.
   * @returns { BottomTabBarStyle } **BottomTabBarStyle** object created.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static of(icon: ResourceStr | TabBarSymbol, text: ResourceStr): BottomTabBarStyle;

  /**
   * Sets the style of the label text and font for the bottom tab.
   *
   * @param { LabelStyle } value - Style of the label text and font for the bottom tab.
   * @returns { BottomTabBarStyle } **BottomTabBarStyle** object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  labelStyle(value: LabelStyle): BottomTabBarStyle;

  /**
   * Sets the padding of the bottom tab. It cannot be set in percentage. When the parameter is of the Dimension type,
   * the value applies to all sides.
   *
   * @param { Padding | Dimension } value - Padding of the bottom tab.<br>Value range: [0, +¡Þ]<br>Default value:
   *     **{left:4.0vp,right:4.0vp,top:0.0vp,bottom:0.0vp}**<br>If of the LocalizedPadding type, this attribute supports
   *     the mirroring capability.<br>Default value: **{start:LengthMetrics.vp(4),end:LengthMetrics.vp(4),**<br>
   *     **top:LengthMetrics.vp(0),bottom:LengthMetrics.vp(0)}** [since 10 - 11]
   * @param { Padding | Dimension | LocalizedPadding } value - Padding of the bottom tab.<br>Value range: [0, +¡Þ]<br>
   *     Default value: **{left:4.0vp,right:4.0vp,top:0.0vp,bottom:0.0vp}**<br>If of the LocalizedPadding type, this
   *     attribute supports the mirroring capability.<br>Default value:
   *     **{start:LengthMetrics.vp(4),end:LengthMetrics.vp(4),**<br>
   *     **top:LengthMetrics.vp(0),bottom:LengthMetrics.vp(0)}** [since 12]
   * @returns { BottomTabBarStyle } **BottomTabBarStyle** object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  padding(value: Padding | Dimension | LocalizedPadding): BottomTabBarStyle;

  /**
   * Sets the layout mode of the images and texts on the bottom tab.
   *
   * @param { LayoutMode } value - Layout mode of the images and text on the bottom tab.<br>Default value:
   *     **LayoutMode.VERTICAL**
   * @returns { BottomTabBarStyle } **BottomTabBarStyle** object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  layoutMode(value: LayoutMode): BottomTabBarStyle;

  /**
   * Sets the vertical alignment mode of the images and text on the bottom tab.
   *
   * @param { VerticalAlign } value - Vertical alignment mode of the images and text on the bottom tab.<br>Default
   *     value: **VerticalAlign.Center**
   * @returns { BottomTabBarStyle } **BottomTabBarStyle** object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  verticalAlign(value: VerticalAlign): BottomTabBarStyle;

  /**
   * Sets whether the images and text on the bottom tab can be symmetrically extended by the minimum value of the
   * available space on the left and right bottom tabs. This parameter is valid only between bottom tabs in fixed
   * horizontal mode.
   *
   * @param { boolean } value - Whether the images and text on the bottom tab can be symmetrically extended by the
   *     minimum value of the available space on the left and right bottom tabs.<br>Default value: **false**, indicating
   *     that the images and text on the bottom tab cannot be symmetrically extended by the minimum value of the
   *     available space on the left and right bottom tabs.
   * @returns { BottomTabBarStyle } **BottomTabBarStyle** object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  symmetricExtensible(value: boolean): BottomTabBarStyle;

  /**
   * Sets the ID of the bottom tab.
   *
   * @param { string } value - [ID]{@link CommonMethod#id} of the bottom tab.
   * @returns { BottomTabBarStyle } **BottomTabBarStyle** object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  id(value: string): BottomTabBarStyle;

  /**
   * Sets the style of the label icon on the bottom tab.
   *
   * @param { TabBarIconStyle } style - Style of the label icon on the bottom tab.
   * @returns { BottomTabBarStyle } **BottomTabBarStyle** object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  iconStyle(style: TabBarIconStyle): BottomTabBarStyle;
}

/**
 * The **TabContent** component is used only in the **Tabs** component. It corresponds to the content view of a switched
 * tab page.
 *
 * > **NOTE**
 *
 * > - By default, the [clip]{@link CommonMethod#clip(value: boolean)} attribute of this component is set to **true**.
 * > If you want to extend the content area to the outside of the component, disable the **clip** attribute first.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface TabContentInterface {

  /**
   * Creates the **TabContent** component, which represents the content associated with a specific tab.
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
 * In addition to the [universal attributes]{@link common}, the following attributes are supported.
 *
 * In addition to the [universal events]{@link common}, the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class TabContentAttribute extends CommonMethod<TabContentAttribute> {

  /**
   * Sets the content displayed on the tab bar.
   *
   * If the icon uses an SVG image source, delete the width and height attribute values built in the SVG image source.
   * Otherwise, the width and height attribute values built in the SVG image source are used.
   *
   * If the content exceeds the space provided by the tab bar, it will be clipped.
   *
   * @param { string | Resource | { icon?: string | Resource; text?: string | Resource } } value [since 7 - 7]
   * @param { string | Resource | CustomBuilder | { icon?: string | Resource; text?: string | Resource } }
   *     value [since 8 - 17]
   * @param { string | Resource | CustomBuilder | TabBarOptions } options - Content displayed on the tab bar.<br>
   *     **CustomBuilder**: builder, to which components can be passed (applicable to API version 8 and later versions
   *     ). [since 18]
   * @returns { TabContentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  tabBar(options: string | Resource | CustomBuilder | TabBarOptions): TabContentAttribute;

  /**
   * Sets the content displayed on the tab bar. The bottom tab style does not include an indicator. When an icon display
   * error occurs, a gray blank block is displayed.
   *
   * > **NOTE**
   * >
   * > - [SubTabBarStyle]{@link SubTabBarStyle}: text + underline or text + board. The text style can be set. It is
   * > recommended that the subtab be placed at the top or bottom. By default, the animation transition effect is
   * > displayed when a tab is switched. This style is applicable to the top categories (such as Following, Video,
   * > Digital) of information apps and level-2 navigation scenarios of functional modules.
   * >
   * > - [BottomTabBarStyle]{@link BottomTabBarStyle}: icon + text, without underline or board. By default, no animation
   * > transition effect is displayed when a tab is switched. Bottom tabs are usually used for the main navigation of an
   * > app (such as Home, Discover, and Recommended). Side tabs are applicable to wide-screen scenarios. You can set
   * > **vertical(true)** to enable the vertical layout so that the tabs are displayed on the side. By default, the tabs
   * > are displayed on the left.
   *
   * @param { SubTabBarStyle | BottomTabBarStyle } value - Content displayed on the tab bar.<br>**SubTabBarStyle**:
   *     subtab style.<br>**BottomTabBarStyle**: bottom and side tab style
   * @returns { TabContentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  tabBar(value: SubTabBarStyle | BottomTabBarStyle): TabContentAttribute;

  /**
   * Sets the content displayed on the tab bar.
   *
   * If **BottomTabBarStyle** or **TabBarOptions** is used and an icon is set, a gray block will be displayed if the
   * icon is invalid. If the icon uses an SVG image source, delete the width and height attribute values built in the
   * SVG image source. Otherwise, the width and height attribute values built in the SVG image source are used.
   *
   * If the content exceeds the space provided by the tab bar, it will be clipped.
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
   * Called when the tab content is about to be displayed. The scenarios include the first-time display, tab switching,
   * page switching, and window switching between the foreground and background.
   *
   * > **NOTE**
   * >
   * > This API can be called in [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { VoidCallback  } event - Callback for when the tab content is about to be displayed.
   * @returns { TabContentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillShow(event: VoidCallback): TabContentAttribute;

  /**
   * Called when the tab content is about to be hidden. The scenarios include the tab switching, page switching, and
   * window switching between the foreground and background.
   *
   * > **NOTE**
   * >
   * > This API can be called in [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { VoidCallback  } event - Callback for when the tab content is about to be hidden.
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
 * The **TabContent** component is used only in the **Tabs** component. It corresponds to the content view of a switched
 * tab page.
 *
 * > **NOTE**
 *
 * > - By default, the [clip]{@link CommonMethod#clip(value: boolean)} attribute of this component is set to **true**.
 * > If you want to extend the content area to the outside of the component, disable the **clip** attribute first.
 *
 * ###### Child Components
 *
 * This component supports only one child component.
 *
 * > **NOTE**
 * >
 * > Built-in system and custom components, and rendering control types (
 * > [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md),
 * > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md), and
 * > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)) are supported.
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