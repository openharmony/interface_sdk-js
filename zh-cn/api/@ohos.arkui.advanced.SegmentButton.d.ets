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

import uiMaterial from './@ohos.arkui.uiMaterial';

/**
* 文本按钮信息。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
interface SegmentButtonTextItem {

  /**
   * 按钮文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  text: ResourceStr;

  /**
   * 无障碍重要性，控制当前组件是否可被无障碍辅助服务识别。
   *
   * 支持的值为:
   *
   * "auto"：当前组件可被无障碍辅助服务所识别。
   *
   * "yes"：当前组件可被无障碍辅助服务所识别。
   *
   * "no"：当前组件不可被无障碍辅助服务所识别。
   *
   * "no-hide-descendants"：当前组件及其所有子组件不可被无障碍辅助服务所识别。
   *
   * 默认值："auto"
   *
   * 值为undefined时，按默认值处理。
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityLevel?: string;

  /**
   * 无障碍说明，为用户解释组件操作，设置详细解释文本，帮助用户理解操作后果。若组件有文本和无障碍说明，选中时先播报文本，再播报无障碍说明。
   *
   * 默认值：空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityDescription?: ResourceStr;
}

/**
* 图标按钮信息。
*
* > **说明：**
* >
* > 未选中态的图标`icon`和选中态的图标`selectedIcon`都需设置，单独设置无效。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
interface SegmentButtonIconItem {

  /**
   * 未选中态的按钮图标。
   *
   * 值为undefined时，不显示图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  icon: ResourceStr;

  /**
   * 未选中态按钮图标的无障碍文本。
   *
   * 默认值：空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  iconAccessibilityText?: ResourceStr;

  /**
   * 选中态的按钮图标。
   *
   * 值为undefined时，不显示图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedIcon: ResourceStr;

  /**
   * 选中态按钮图标的无障碍文本。
   *
   * 默认值：空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  selectedIconAccessibilityText?: ResourceStr;

  /**
   * 无障碍重要性，控制当前组件是否可被无障碍辅助服务识别。
   *
   * 支持的值为:
   *
   * "auto"：当前组件可被无障碍辅助服务所识别。
   *
   * "yes"：当前组件可被无障碍辅助服务所识别。
   *
   * "no"：当前组件不可被无障碍辅助服务所识别。
   *
   * "no-hide-descendants"：当前组件及其所有子组件不可被无障碍辅助服务所识别。
   *
   * 默认值："auto"
   *
   * 值为undefined时，按默认值处理。
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityLevel?: string;

  /**
   * 无障碍说明，为用户解释组件操作，设置详细解释文本，帮助用户理解操作后果。若组件有文本和无障碍说明，选中时先播报文本，再播报无障碍说明。
   *
   * 默认值：空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityDescription?: ResourceStr;
}

/**
* 图标与文本按钮信息。
*
* > **说明：**
* >
* > 未选中态的图标`icon`和选中态的图标`selectedIcon`都需设置，单独设置无效。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
interface SegmentButtonIconTextItem {

  /**
   * 未选中态的按钮图标。
   *
   * 值为undefined时，不显示图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  icon: ResourceStr;

  /**
   * 未选中态按钮图标的无障碍文本。
   *
   * 默认值：空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  iconAccessibilityText?: ResourceStr;

  /**
   * 选中态的按钮图标。
   *
   * 值为undefined时，不显示图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedIcon: ResourceStr;

  /**
   * 选中态按钮图标的无障碍文本。
   *
   * 默认值：空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  selectedIconAccessibilityText?: ResourceStr;

  /**
   * 按钮文本。
   *
   * 值为undefined时，不显示文本内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  text: ResourceStr;

  /**
   * 无障碍重要性，控制当前组件是否可被无障碍辅助服务识别。
   *
   * 支持的值为:
   *
   * "auto"：当前组件可被无障碍辅助服务所识别。
   *
   * "yes"：当前组件可被无障碍辅助服务所识别。
   *
   * "no"：当前组件不可被无障碍辅助服务所识别。
   *
   * "no-hide-descendants"：当前组件及其所有子组件不可被无障碍辅助服务所识别。
   *
   * 默认值："auto"
   *
   * 值为undefined时，按默认值处理。
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityLevel?: string;

  /**
   * 无障碍说明，为用户解释组件操作，设置详细解释文本，帮助用户理解操作后果。若组件有文本和无障碍说明，选中时先播报文本，再播报无障碍说明。
   *
   * 默认值：空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityDescription?: ResourceStr;
}

/**
* 不支持百分比类型的长度联合类型。
*
 * @unionmember { PX } Length  Length Length 长度类型，用于描述以px为单位的长度。
 * @unionmember { VP } Length  Length Length 长度类型，用于描述以vp为单位的长度。
 * @unionmember { FP } Length  Length Length 长度类型，用于描述以fp为单位的长度。
 * @unionmember { LPX } Length  Length Length 长度类型，用于描述以lpx为单位的长度。
 * @unionmember { Resource } Resource  Resource Resource 资源引用类型，用于设置组件属性的值。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare type DimensionNoPercentage = PX | VP | FP | LPX | Resource;

/**
* 边框圆角模式枚举，用于控制分段按钮的圆角计算方式。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum BorderRadiusMode {

  /**
   * 默认模式，框架自动计算边框圆角。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  DEFAULT = 0,

  /**
   * 自定义模式，开发者设置边框圆角。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  CUSTOM = 1
}

/**
* 定义分段按钮组件的可自定义的属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
interface CommonSegmentButtonOptions {

  /**
   * 分段按钮组件的按钮未选中态的文本颜色。
   *
   * 值为undefined时，颜色为$r('sys.color.ohos_id_color_text_secondary')。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontColor?: ResourceColor;

  /**
   * 分段按钮组件的按钮选中态的文本颜色。
   *
   * 值为undefined时，type为"tab"时，颜色为`$r('sys.color.ohos_id_color_text_primary')`。
   *
   * type为"capsule"时，颜色为`$r('sys.color.ohos_id_color_foreground_contrary')`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedFontColor?: ResourceColor;

  /**
   * 按钮未选中态的字体大小（不支持百分比设置）。
   *
   * 默认值：$r('sys.float.ohos_id_text_size_body2')
   *
   * 值为undefined时，按默认值处理。
   *
   * @default $r('sys.float.ohos_id_text_size_body2')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontSize?: DimensionNoPercentage;

  /**
   * 按钮选中态的字体大小（不支持百分比设置）。
   *
   * 默认值：$r('sys.float.ohos_id_text_size_body2')
   *
   * 值为undefined时，按默认值处理。
   *
   * @default $r('sys.float.ohos_id_text_size_body2')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedFontSize?: DimensionNoPercentage;

  /**
   * 按钮未选中态的字体粗细。
   *
   * 默认值：FontWeight.Regular
   *
   * 值为undefined时，按默认值处理。
   *
   * @default FontWeight.Regular
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontWeight?: FontWeight;

  /**
   * 按钮选中态的字体粗细。
   *
   * 默认值：FontWeight.Medium
   *
   * 值为undefined时，按默认值处理。
   *
   * @default FontWeight.Medium
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedFontWeight?: FontWeight;

  /**
   * 背景板颜色。
   *
   * 默认值：$r('sys.color.ohos_id_color_button_normal')
   *
   * 值为undefined时，按默认值处理。
   *
   * @default $r('sys.color.ohos_id_color_button_normal')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * 分段按钮组件的按钮选中态背景板颜色。
   *
   * 值为undefined时，type为"tab"时，背景板颜色为`$r('sys.color.segment_button_checked_foreground_color')`。
   *
   * type为"capsule"时，背景板颜色为`$r('sys.color.ohos_id_color_emphasize')`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedBackgroundColor?: ResourceColor;

  /**
   * 图片尺寸。
   *
   * 默认值：{ width: 24, height: 24 }
   *
   * 单位：vp
   *
   * 值为undefined时，按默认值处理。
   *
   * **说明：**
   *
   * `imageSize`属性仅对图标按钮和图标+文本按钮生效，对纯文本按钮无效果。
   *
   * @default SizeOptions { width: 24, height: 24 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  imageSize?: SizeOptions;

  /**
   * 按钮内边距。
   *
   * 默认值：
   *
   * 仅图标按钮和仅文字按钮默认值：`{ top: 4, right: 8, bottom: 4, left: 8 }`
   *
   * 图标+文本按钮默认值：`{ top: 6, right: 8, bottom: 6, left: 8 }`
   *
   * 单位：vp
   *
   * 值为undefined时，按默认值处理。
   *
   * @default For text only / icon only buttons Padding { top: 4, right: 8, bottom: 4, left: 8 }.
   *     For text & icon buttons Padding { top: 6, right: 8, bottom: 6, left: 8 }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  buttonPadding?: Padding | Dimension;

  /**
   * 按钮内边距。
   *
   * 默认值：
   *
   * 仅图标按钮和仅文字按钮默认值：
   * `{ top: LengthMetrics.vp(4), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(4), start: LengthMetrics.vp(8) }`
   *
   * 图标+文本按钮默认值：
   * `{ top: LengthMetrics.vp(6), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(6), start: LengthMetrics.vp(8) }`
   *
   * 值为undefined时，按默认值处理。
   *
   * @default For text only / icon only buttons LocalizedPadding
   *     { top: LengthMetrics.vp(4), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(4), start: LengthMetrics.vp(8) }
   *     .
   *     For text & icon buttons LocalizedPadding
   *     {{ top: LengthMetrics.vp(6), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(6), start: LengthMetrics.vp(8)
   *     }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  localizedButtonPadding?: LocalizedPadding;

  /**
   * 文本内边距。
   *
   * 默认值：0
   *
   * 单位：vp
   *
   * 值为undefined时，按默认值处理。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  textPadding?: Padding | Dimension;

  /**
   * 文本内边距。
   *
   * 默认值：0
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  localizedTextPadding?: LocalizedPadding;

  /**
   * 分段按钮组件的背景模糊材质。
   *
   * 值为undefined时，背景模糊材质为BlurStyle.NONE。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * 分段按钮组件的布局方向。
   *
   * 默认值：Direction.Auto
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  direction?: Direction;

  /**
   * 边框圆角模式，用于控制圆角计算方式。
   *
   * 默认值：BorderRadiusMode.DEFAULT
   *
   * 值为undefined时，按默认值处理。
   *
   * @default BorderRadiusMode.Default
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  borderRadiusMode?: BorderRadiusMode;

  /**
   * 分段按钮整体容器的边框圆角半径。
   *
   * **说明：**
   *
   * 此属性仅在borderRadiusMode为BorderRadiusMode.CUSTOM时生效。
   *
   * 对于胶囊类多选按钮(type为"capsule"且multiply为true)，此属性不生效，需要用itemBorderRadius配置圆角。
   *
   * 圆角大小受组件尺寸限制，最大值为组件宽或高的一半，不支持百分比设置。
   *
   * 默认值：`$r('sys.float.segmentbutton_container_shape')`
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  backgroundBorderRadius?: LengthMetrics;

  /**
   * 分段按钮中按钮项的边框圆角半径。
   *
   * **说明：**
   *
   * 此属性仅在borderRadiusMode为BorderRadiusMode.CUSTOM时生效。
   *
   * 对于胶囊类多选按钮(type为"capsule"且multiply为true)，只能控制两端的选项圆角。
   *
   * 圆角大小受组件尺寸限制，最大值为组件宽或高的一半，不支持百分比设置。
   *
   * 默认值：`$r('sys.float.segmentbutton_selected_background_shape')`
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  itemBorderRadius?: LengthMetrics;

  /**
   * 分段按钮组件的背景板的系统材质。不同系统材质包含不同的属性影响效果。传入材质后，SegmentButton的动效发生改变。
   * 对于胶囊类多选按钮（即type为"capsule"且multiply为true），该属性不生效。
   * 默认值：无材质效果。
   *
   * @type { ?uiMaterial.Material } material - System-styled material. [since 23 - 24]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi [since 23 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice [since 26.0.0]
   * @since 23 dynamic
   */
  backgroundSystemMaterial?: uiMaterial.Material;
}

/**
* 保存按钮信息的元组类型。
*
* > **说明：**
* >
* > 分段按钮组件仅支持2到5个按钮。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare type ItemRestriction<T> = [T, T, T?, T?, T?];

/**
* 用于保存按钮信息的元组的联合类型。
*
 * @unionmember { ItemRestriction<SegmentButtonTextItem> } A  A A 仅文本按钮信息的元组。
 * @unionmember { ItemRestriction<SegmentButtonIconItem> } A  A A 仅图标按钮信息的元组。
 * @unionmember { ItemRestriction<SegmentButtonIconTextItem> } A  A A 图标+文本按钮信息的元组。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare type SegmentButtonItemTuple = ItemRestriction<SegmentButtonTextItem> | ItemRestriction<SegmentButtonIconItem> | ItemRestriction<SegmentButtonIconTextItem>;

/**
* 用于保存按钮信息的数组的联合类型。
*
 * @unionmember { Array<SegmentButtonTextItem> } An  An An An An An 仅文本按钮信息的数组。
 * @unionmember { Array<SegmentButtonIconItem> } An  An An An An An 仅图标按钮信息的数组。
 * @unionmember { Array<SegmentButtonIconTextItem> } An  An An An An An 图标+文本按钮信息的数组。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamiconly
 * @noninterop
 */
declare type SegmentButtonItemArray = Array<SegmentButtonTextItem> | Array<SegmentButtonIconItem> | Array<SegmentButtonIconTextItem>;

/**
* 构建页签类的SegmentButtonOptions对象。
*
* 继承[CommonSegmentButtonOptions]{@link CommonSegmentButtonOptions}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
interface TabSegmentButtonConstructionOptions extends CommonSegmentButtonOptions {

  /**
   * 按钮信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  buttons: ItemRestriction<SegmentButtonTextItem>;
}

/**
* 用于构建胶囊类的SegmentButtonOptions对象。
*
* 继承[CommonSegmentButtonOptions]{@link CommonSegmentButtonOptions}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
interface CapsuleSegmentButtonConstructionOptions extends CommonSegmentButtonOptions {

  /**
   * 按钮信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  buttons: SegmentButtonItemTuple;

  /**
   * 是否可以多选。
   *
   * 默认值：false
   *
   * 值为undefined时，按默认值处理。
   *
   * true表示可以多选，false表示不可以多选。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  multiply?: boolean;
}

/**
* 页签类分段按钮选项。继承自[TabSegmentButtonConstructionOptions]{@link TabSegmentButtonConstructionOptions}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
interface TabSegmentButtonOptions extends TabSegmentButtonConstructionOptions {

  /**
   * 分段按钮组件的类型。
   *
   * **说明：**
   *
   * "tab"：页签类分段按钮，适用于页面或内容区域的切换场景。
   *
   * "capsule"：胶囊类分段按钮，适用于单选或多选的选择场景。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  type: "tab";
}

/**
* 胶囊类分段按钮选项。继承自[CapsuleSegmentButtonConstructionOptions]{@link CapsuleSegmentButtonConstructionOptions}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
interface CapsuleSegmentButtonOptions extends CapsuleSegmentButtonConstructionOptions {

  /**
   * 分段按钮组件的类型。
   *
   * **说明：**
   *
   * "tab"：页签类分段按钮，适用于页面或内容区域的切换场景。
   *
   * "capsule"：胶囊类分段按钮，适用于单选或多选的选择场景。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  type: "capsule";
}

/**
* 构造参数用于SegmentButtonItemOptions。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
interface SegmentButtonItemOptionsConstructorOptions {

  /**
   * 未选中态的按钮图标。
   *
   * 值为undefined时，不显示图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  icon?: ResourceStr;

  /**
   * 未选中态按钮图标的无障碍文本。
   *
   * 默认值：空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  iconAccessibilityText?: ResourceStr;

  /**
   * 选中态的按钮图标。
   *
   * 值为undefined时，不显示图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedIcon?: ResourceStr;

  /**
   * 选中态按钮图标的无障碍文本。
   *
   * 默认值：空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  selectedIconAccessibilityText?: ResourceStr;

  /**
   * 按钮文本。
   *
   * 值为undefined时，不显示文本内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  text?: ResourceStr;

  /**
   * 无障碍重要性，控制当前组件是否可被无障碍辅助服务识别。
   *
   * 支持的值为:
   *
   * "auto"：当前组件可被无障碍辅助服务所识别。
   *
   * "yes"：当前组件可被无障碍辅助服务所识别。
   *
   * "no"：当前组件不可被无障碍辅助服务所识别。
   *
   * "no-hide-descendants"：当前组件及其所有子组件不可被无障碍辅助服务所识别。
   *
   * 默认值："auto"
   *
   * 值为undefined时，按默认值处理。
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityLevel?: string;

  /**
   * 无障碍说明，为用户解释组件操作，设置详细解释文本，帮助用户理解操作后果。若组件有文本和无障碍说明，选中时先播报文本，再播报无障碍说明。
   *
   * 默认值：空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityDescription?: ResourceStr;
}

/**
* 分段按钮中的按钮选项。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
@Observed
declare class SegmentButtonItemOptions {

  /**
   * 未选中态的按钮图标。
   *
   * 默认值：不显示未选中态的按钮图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  icon?: ResourceStr;

  /**
   * 未选中态按钮图标的无障碍文本。
   *
   * 默认值：空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  iconAccessibilityText?: ResourceStr;

  /**
   * 选中态的按钮图标。
   *
   * 默认值：不显示选中态按钮图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedIcon?: ResourceStr;

  /**
   * 选中态按钮图标的无障碍文本。
   *
   * 默认值：空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  selectedIconAccessibilityText?: ResourceStr;

  /**
   * 按钮文本。
   *
   * 默认值：空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  text?: ResourceStr;

  /**
   * 无障碍重要性，控制当前组件是否可被无障碍辅助服务识别。
   *
   * 支持的值为:
   *
   * "auto"：当前组件可被无障碍辅助服务所识别。
   *
   * "yes"：当前组件可被无障碍辅助服务所识别。
   *
   * "no"：当前组件不可被无障碍辅助服务所识别。
   *
   * "no-hide-descendants"：当前组件及其所有子组件不可被无障碍辅助服务所识别。
   *
   * 默认值："auto"
   *
   * 值为undefined时，按默认值处理。
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityLevel?: string;

  /**
   * 无障碍说明，为用户解释组件操作，设置详细解释文本，帮助用户理解操作后果。若组件有文本和无障碍说明，选中时先播报文本，再播报无障碍说明。
   *
   * 默认值：空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * 构造函数。
   *
   * @param { SegmentButtonItemOptionsConstructorOptions } options - 单个分段按钮的配置选项，包含图标、文本、无障碍属性等配置信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  constructor(options: SegmentButtonItemOptionsConstructorOptions);
}

/**
* 用于保存按钮信息的数组。
*
* > **说明：**
* >
* > SegmentButtonItemOptionsArray仅支持保存2到5个按钮信息元素。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
@Observed
declare class SegmentButtonItemOptionsArray extends Array<SegmentButtonItemOptions> {

  /**
   * 构造函数。
   *
   * @param { SegmentButtonItemTuple } elements - 按钮信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  constructor(elements: SegmentButtonItemTuple);

  /**
   * 在数组末尾添加新的元素，返回添加元素后数组的长度。
   *
   * @param { SegmentButtonItemArray } items - 被添加的按钮信息数组。<br>默认值：0个被添加的按钮信息数组。
   * @returns { number } 添加元素后数组的长度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  push(...items: SegmentButtonItemArray): number;

  /**
   * 移除数组末尾最后一个元素，返回被移除的元素。
   *
   * @returns { SegmentButtonItemOptions | undefined } Element removed from the array.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  pop(): SegmentButtonItemOptions | undefined;

  /**
   * 移除数组开头第一个元素，返回被移除的元素。
   *
   * @returns { SegmentButtonItemOptions | undefined } Element removed from the array.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  shift(): SegmentButtonItemOptions | undefined;

  /**
   * 在数组开头添加一个新的元素，返回添加元素后数组的长度。
   *
   * @param { SegmentButtonItemArray } items - 添加的按钮信息数组。<br>默认值：0个被添加的按钮信息数组。
   * @returns { number } 添加元素后数组的长度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  unshift(...items: SegmentButtonItemArray): number;

  /**
   * 在数组中，删除从start位置开始的deleteCount数量的元素，并插入items中的元素，返回一个包含了被删除的元素的数组。
   *
   * @param { number } start - 删除元素的起始位置。
   * @param { number } deleteCount - 删除元素的数量。
   * @param { SegmentButtonItemOptions[] } items - 从start开始要加入到数组中的元素。<br>默认值：不指定任何元素，将从数组中删除元素。
   * @returns { SegmentButtonItemOptions[] } An array containing the removed elements.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  splice(start: number, deleteCount: number, ...items: SegmentButtonItemOptions[]): SegmentButtonItemOptions[];

  /**
   * 创建一个SegmentButtonItemOptionsArray对象。
   *
   * @param { SegmentButtonItemTuple } elements - 按钮信息。
   * @returns { SegmentButtonItemOptionsArray } 返回创建的SegmentButtonItemOptionsArray对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  static create(elements: SegmentButtonItemTuple): SegmentButtonItemOptionsArray;
}

/**
* > **说明：**
* >
* > 不支持设置字体类型。
*
* 分段按钮选项类用于提供初始数据和自定义属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
@Observed
declare class SegmentButtonOptions {

  /**
   * 分段按钮组件的类型。
   *
   * **说明：**
   *
   * "tab"：页签类分段按钮，适用于页面或内容区域的切换场景。
   *
   * "capsule"：胶囊类分段按钮，适用于单选或多选的选择场景。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  type: "tab" | "capsule";

  /**
   * 分段按钮组件是否可以多选。
   *
   * true: 可多选；false: 不可多选。页签类分段按钮只支持单选，设置`multiply`为`true`不生效。
   *
   * 值为undefined时，分段按钮不支持多选。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  multiply: boolean;

  /**
   * 分段按钮组件的按钮信息，包括图标和文本信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  buttons: SegmentButtonItemOptionsArray;

  /**
   * 分段按钮组件的按钮未选中态的文本颜色。
   *
   * 值为undefined时，颜色为$r('sys.color.ohos_id_color_text_secondary')。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontColor: ResourceColor;

  /**
   * 分段按钮组件的按钮选中态的文本颜色。
   *
   * 值为undefined时，type为"tab"时，颜色为`$r('sys.color.ohos_id_color_text_primary')`。
   *
   * type为"capsule"时，颜色为`$r('sys.color.ohos_id_color_foreground_contrary')`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedFontColor: ResourceColor;

  /**
   * 分段按钮组件的按钮未选中态的字体大小，不支持百分比设置。
   *
   * 值为undefined时，字体大小为$r('sys.float.ohos_id_text_size_body2')。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontSize: DimensionNoPercentage;

  /**
   * 分段按钮组件的按钮选中态的字体大小，不支持百分比设置。
   *
   * 值为undefined时，字体大小为$r('sys.float.ohos_id_text_size_body2')。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedFontSize: DimensionNoPercentage;

  /**
   * 分段按钮组件的按钮未选中态的字体粗细。
   *
   * 值为undefined时，字体粗细为FontWeight.Regular。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontWeight: FontWeight;

  /**
   * 分段按钮组件的按钮选中态的字体粗细。
   *
   * 值为undefined时，字体粗细为FontWeight.Medium。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedFontWeight: FontWeight;

  /**
   * 分段按钮组件的背景板颜色。
   *
   * 值为undefined时，背景板颜色为$r('sys.color.ohos_id_color_button_normal')。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundColor: ResourceColor;

  /**
   * 分段按钮组件的按钮选中态背景板颜色。
   *
   * 值为undefined时，type为"tab"时，背景板颜色为`$r('sys.color.segment_button_checked_foreground_color')`。
   *
   * type为"capsule"时，背景板颜色为`$r('sys.color.ohos_id_color_emphasize')`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  selectedBackgroundColor: ResourceColor;

  /**
   * 分段按钮组件的图片尺寸。
   *
   * 值为undefined时，图片尺寸为{ width: 24, height: 24 }。
   *
   * 单位：vp
   *
   * **说明：**
   *
   * `imageSize`属性对仅图标按钮和图标+文本按钮生效，对仅文字按钮无效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  imageSize: SizeOptions;

  /**
   * 分段按钮组件的按钮内边距。
   *
   * 值为undefined时，仅图标按钮和仅文字按钮内边距：`{ top: 4, right: 8, bottom: 4, left: 8 }`
   *
   * 图标+文本按钮内边距：`{ top: 6, right: 8, bottom: 6, left: 8 }`
   *
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  buttonPadding: Padding | Dimension;

  /**
   * 分段按钮组件的按钮内边距。
   *
   * 默认值：
   *
   * 仅图标按钮和仅文字按钮默认值：
   * `{ top: LengthMetrics.vp(4), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(4), start: LengthMetrics.vp(8) }`
   *
   * 图标+文本按钮默认值：
   * `{ top: LengthMetrics.vp(6), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(6), start: LengthMetrics.vp(8) }`
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  localizedButtonPadding?: LocalizedPadding;

  /**
   * 分段按钮组件的文本内边距。
   *
   * 值为undefined时，文本内边距为0。
   *
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  textPadding: Padding | Dimension;

  /**
   * 文本内边距。
   *
   * 默认值：0
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  localizedTextPadding?: LocalizedPadding;

  /**
   * 分段按钮组件的背景模糊材质。
   *
   * 值为undefined时，背景模糊材质为BlurStyle.NONE。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundBlurStyle: BlurStyle;

  /**
   * 分段按钮组件的背景板的系统材质。不同系统材质包含不同的属性影响效果。传入材质后，SegmentButton的动效发生改变。
   * 对于胶囊类多选按钮（即type为"capsule"且multiply为true），该属性不生效。
   * 默认值：无材质效果。
   *
   * @type { ?uiMaterial.Material } material - System-styled material. [since 23 - 24]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi [since 23 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice [since 26.0.0]
   * @since 23 dynamic
   */
  backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * 构造函数。
   *
   * @param { TabSegmentButtonOptions | CapsuleSegmentButtonOptions } options - 页签类或者胶囊类分段按钮信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  constructor(options: TabSegmentButtonOptions | CapsuleSegmentButtonOptions);

  /**
   * 创建SegmentButtonOptions类，用于定义页签。
   *
   * @param { TabSegmentButtonConstructionOptions } options - 页签类分段按钮信息。
   * @returns { SegmentButtonOptions } 分段按钮选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  static tab(options: TabSegmentButtonConstructionOptions): SegmentButtonOptions;

  /**
   * 创建胶囊类的SegmentButtonOptions。
   *
   * @param { CapsuleSegmentButtonConstructionOptions } options - 胶囊类分段按钮信息。
   * @returns { SegmentButtonOptions } 分段按钮选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  static capsule(options: CapsuleSegmentButtonConstructionOptions): SegmentButtonOptions;

  /**
   * 分段按钮组件的布局方向。
   *
   * 默认值：Direction.Auto
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  direction?: Direction;

  /**
   * 边框圆角模式，用于控制圆角计算方式。
   *
   * 默认值：BorderRadiusMode.DEFAULT
   *
   * 值为undefined时，按默认值处理。
   *
   * @default BorderRadiusMode.Default
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  borderRadiusMode?: BorderRadiusMode;

  /**
   * 分段按钮整体容器的边框圆角半径。
   *
   * **说明：**
   *
   * 此属性仅在borderRadiusMode为BorderRadiusMode.CUSTOM时生效。
   *
   * 对于胶囊类多选按钮(type为"capsule"且multiply为true)，此属性不生效，需要用itemBorderRadius配置圆角。
   *
   * 圆角大小受组件尺寸限制，最大值为组件宽或高的一半，不支持百分比设置。
   *
   * 默认值：`$r('sys.float.segmentbutton_container_shape')`
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  backgroundBorderRadius?: LengthMetrics;

  /**
   * 分段按钮中按钮项的边框圆角半径。
   *
   * **说明：**
   *
   * 此属性仅在borderRadiusMode为BorderRadiusMode.CUSTOM时生效。
   *
   * 对于胶囊类多选按钮(type为"capsule"且multiply为true)，只能控制两端的选项圆角。
   *
   * 圆角大小受组件尺寸限制，最大值为组件宽或高的一半，不支持百分比设置。
   *
   * 默认值：`$r('sys.float.segmentbutton_selected_background_shape')`
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  itemBorderRadius?: LengthMetrics;
}

/**
* 分段按钮组件包含页签类分段按钮、胶囊类单选分段按钮和胶囊类多选分段按钮。
*
* > **说明：**
* >
* > - 分段按钮不支持[通用属性](ts-component-general-attributes.md)。分段按钮使用当前区域可使用的最大宽度作为组件宽度，并且根据按钮个数平均分配每个按钮宽度；分段按钮高度根据按钮内容（文本及图片）自动适应，其最小高度为28vp。
* >
* > - @Prop装饰的属性为可选参数，仅当与@Require装饰器联合使用时，才必须在构造时传入对应参数。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
@Component
declare struct SegmentButton {

  /**
   * 分段按钮选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  @ObjectLink
  options: SegmentButtonOptions;

  /**
   * 分段按钮的选中项编号，第一项的编号为0，之后顺序增加。
   *
   * **说明：**
   *
   * `selectedIndexes`使用[@Link装饰器：父子双向同步](docroot://ui/state-management/arkts-link.md)，仅支持有效的按钮编号（第一个按钮编号为0，之后按顺序累加），如没有
   * 选中项可传入空数组`[]`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  @Link
  selectedIndexes: number[];

  /**
   * 分段按钮选项文字的最大字体放大倍数。
   *
   * 取值范围：[1, 2]
   *
   * 当设置的值小于1时，按值为1处理，设置的值大于2时，按值为2处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  @Prop
  maxFontScale: number | Resource;

  /**
   * 当分段按钮选项被点击时，触发的回调函数接收被点击的选项下标作为参数。若不传入此参数，则点击时不触发回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  onItemClicked?: Callback<number>;

  /**
   * 设置当通过变量修改selectedIndex值时，是否开启分段按钮的属性动画。
   *
   * true表示开启分段按钮的属性动画；false表示不开启分段按钮的属性动画，使用原有动画。
   *
   * 默认值：false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  @Prop
  enableStateAnimation: boolean;
}

export {
  SegmentButton,
  SegmentButtonOptions,
  SegmentButtonItemOptionsArray,
  TabSegmentButtonOptions,
  TabSegmentButtonConstructionOptions,
  CapsuleSegmentButtonOptions,
  CapsuleSegmentButtonConstructionOptions,
  SegmentButtonTextItem,
  SegmentButtonIconItem,
  SegmentButtonIconTextItem,
  DimensionNoPercentage,
  CommonSegmentButtonOptions,
  ItemRestriction,
  SegmentButtonItemTuple,
  SegmentButtonItemArray,
  SegmentButtonItemOptionsConstructorOptions,
  SegmentButtonItemOptions,
  BorderRadiusMode
};