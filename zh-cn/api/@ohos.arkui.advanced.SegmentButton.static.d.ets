
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

import { Callback } from './@ohos.base';

import {
  PropRef,
  ObjectLink,
  Link,
  Observed
} from './@ohos.arkui.stateManagement';

import {
  ResourceStr,
  SizeOptions,
  ResourceColor,
  PX,
  VP,
  FP,
  LPX,
  Resource,
  FontWeight,
  Padding,
  Dimension,
  LocalizedPadding,
  BlurStyle,
  Direction,
  LengthMetrics,
  Component,
  BuilderParam,
  Builder
} from './@ohos.arkui.component';

import uiMaterial from './@ohos.arkui.uiMaterial';

/**
* 文本按钮信息。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
interface SegmentButtonTextItem {

  /**
   * 按钮文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  text: ResourceStr;

  /**
   * 无障碍重要性，用于控制当前组件是否可被无障碍辅助服务所识别。
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
   * 默认值："auto"。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
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
 * @since 23 static
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
   * @since 23 static
   * @noninterop
   */
  icon: ResourceStr;

  /**
   * 未选中态按钮图标的无障碍文本。默认值为空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  iconAccessibilityText?: ResourceStr;

  /**
   * 选中态的按钮图标。
   *
   * 值为undefined时，不显示图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedIcon: ResourceStr;

  /**
   * 选中态按钮图标的无障碍文本。默认值为空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedIconAccessibilityText?: ResourceStr;

  /**
   * 无障碍重要性，用于控制当前组件是否可被无障碍辅助服务所识别。
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
   * 默认值："auto"。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
   */
  accessibilityDescription?: ResourceStr;
}

/**
* 图标与文本按钮信息。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
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
   * @since 23 static
   * @noninterop
   */
  icon: ResourceStr;

  /**
   * 未选中态按钮图标的无障碍文本。默认值为空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  iconAccessibilityText?: ResourceStr;

  /**
   * 选中态的按钮图标。
   *
   * 值为undefined时，不显示图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedIcon: ResourceStr;

  /**
   * 选中态按钮图标的无障碍文本。默认值为空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedIconAccessibilityText?: ResourceStr;

  /**
   * 按钮文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  text: ResourceStr;

  /**
   * 无障碍重要性，用于控制当前组件是否可被无障碍辅助服务所识别。
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
   * 默认值："auto"。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
   */
  accessibilityDescription?: ResourceStr;
}

/**
* 不支持百分比类型的长度的联合类型。
*
 * @unionmember { PX }
 * @unionmember { VP }
 * @unionmember { FP }
 * @unionmember { LPX }
 * @unionmember { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
declare type DimensionNoPercentage = PX | VP | FP | LPX | Resource;

/**
* 边框圆角模式枚举，用于控制分段按钮的圆角计算方式。
*
* | 名称    |值 | 说明                             |
* | ------- | - |-------------------------------- |
* | DEFAULT | 0 |默认模式，框架自动计算边框圆角。 |
* | CUSTOM  | 1 |自定义模式，开发者设置边框圆角。 |
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
declare enum BorderRadiusMode {

  /**
   * Default mode, radius is auto calculated by framework.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  DEFAULT = 0,

  /**
   * Custom mode, radius can be set by developers.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  CUSTOM = 1
}

/**
* 用于定义分段按钮组件可自定义的属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
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
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
   */
  selectedFontColor?: ResourceColor;

  /**
   * 按钮未选中态的字体大小（不支持百分比设置）。
   *
   * 默认值：$r('sys.float.ohos_id_text_size_body2')
   *
   * @default $r('sys.float.ohos_id_text_size_body2')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  fontSize?: DimensionNoPercentage;

  /**
   * 按钮选中态的字体大小（不支持百分比设置）。
   *
   * 默认值：$r('sys.float.ohos_id_text_size_body2')
   *
   * @default $r('sys.float.ohos_id_text_size_body2')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedFontSize?: DimensionNoPercentage;

  /**
   * 按钮未选中态的字体粗细。
   *
   * 默认值：FontWeight.Regular
   *
   * @default FontWeight.Regular
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  fontWeight?: FontWeight;

  /**
   * 按钮选中态的字体粗细。
   *
   * 默认值：FontWeight.Medium。
   *
   * @default FontWeight.Medium
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedFontWeight?: FontWeight;

  /**
   * 底板颜色。
   *
   * 默认值：$r('sys.color.ohos_id_color_button_normal')
   *
   * @default $r('sys.color.ohos_id_color_button_normal')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
   */
  selectedBackgroundColor?: ResourceColor;

  /**
   * 图片尺寸，默认值：{ width: 24, height: 24 }。
   *
   * **说明：**
   *
   * `imageSize`属性对仅图标按钮和图标+文本按钮生效，对仅文字按钮无效果。
   *
   * @default SizeOptions { width: 24, height: 24 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  imageSize?: SizeOptions;

  /**
   * 按钮内边距，默认值：仅图标按钮和仅文字按钮`{ top: 4, right: 8, bottom: 4, left: 8 }`，图标+文本按钮`{ top: 6, right: 8, bottom: 6, left: 8 }`。
   *
   * @default For text only / icon only buttons Padding { top: 4, right: 8, bottom: 4, left: 8 }.
   *     For text & icon buttons Padding { top: 6, right: 8, bottom: 6, left: 8 }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  buttonPadding?: Padding | Dimension;

  /**
   * 按钮内边距，默认值：仅图标按钮和仅文字按钮
   * `{ top: LengthMetrics.vp(4), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(4), start: LengthMetrics.vp(8) }`，图
   * 标+文本按钮
   * `{ top: LengthMetrics.vp(6), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(6), start: LengthMetrics.vp(8) }`。
   *
   * @default For text only / icon only buttons LocalizedPadding
   *     { top: LengthMetrics.vp(4), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(4),
   *     start: LengthMetrics.vp(8) }.
   *     For text & icon buttons LocalizedPadding
   *     { top: LengthMetrics.vp(6), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(6),
   *     start: LengthMetrics.vp(8) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  localizedButtonPadding?: LocalizedPadding;

  /**
   * 文本内边距。
   *
   * 默认值：0
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
   */
  localizedTextPadding?: LocalizedPadding;

  /**
   * 分段按钮组件的背景模糊材质。
   *
   * 值为undefined时，背景模糊材质为BlurStyle.NONE。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
   */
  itemBorderRadius?: LengthMetrics;

  /**
   * 设置组件的系统材质，不同的材质有不同的效果，会影响背景颜色，边框，阴影和组件的其它视觉属性
   *
   * 设备行为差异：根据计算能力的不同，相同材质在不同设备上的效果可能不同。
   *
   * @type { ?uiMaterial.Material } material - System-styled material. [since 23 - 24]
   * @syscap SystemCapability.ArkUI.ArkUI.Full [since 23]
   * @systemapi [since 23 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @since 23 static
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
* > **说明：**
* >
* > 分段按钮组件仅支持2到5个按钮。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
declare type ItemRestriction<T> = Array<T>;

/**
* 用于保存按钮信息的元组的联合类型。
*
 * @unionmember { ItemRestriction<SegmentButtonTextItem> }
 * @unionmember { ItemRestriction<SegmentButtonIconItem> }
 * @unionmember { ItemRestriction<SegmentButtonIconTextItem> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
declare type SegmentButtonItemTuple =
  ItemRestriction<SegmentButtonTextItem> |
  ItemRestriction<SegmentButtonIconItem> |
  ItemRestriction<SegmentButtonIconTextItem>;

/**
* 用于构建页签类的SegmentButtonOptions对象。
*
* 继承[CommonSegmentButtonOptions]{@link CommonSegmentButtonOptions}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
interface TabSegmentButtonConstructionOptions extends CommonSegmentButtonOptions {

  /**
   * 按钮信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
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
 * @since 23 static
 * @noninterop
 */
interface CapsuleSegmentButtonConstructionOptions extends CommonSegmentButtonOptions {

  /**
   * 按钮信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
   */
  multiply?: boolean;
}

/**
* 页签类分段按钮选项。继承自[TabSegmentButtonConstructionOptions]{@link TabSegmentButtonConstructionOptions}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
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
   * @since 23 static
   * @noninterop
   */
  type: "tab";
}

/**
* 胶囊类分段按钮选项。继承自[CapsuleSegmentButtonConstructionOptions]{@link CapsuleSegmentButtonConstructionOptions}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
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
   * @since 23 static
   * @noninterop
   */
  type: "capsule";
}

/**
* 构造参数用于SegmentButtonItemOptions。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
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
   * @since 23 static
   * @noninterop
   */
  icon?: ResourceStr;

  /**
   * 未选中态按钮图标的无障碍文本。默认值为空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  iconAccessibilityText?: ResourceStr;

  /**
   * 选中态的按钮图标。
   *
   * 值为undefined时，不显示图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedIcon?: ResourceStr;

  /**
   * 选中态按钮图标的无障碍文本。默认值为空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedIconAccessibilityText?: ResourceStr;

  /**
   * 按钮文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  text?: ResourceStr;

  /**
   * 无障碍重要性，用于控制当前组件是否可被无障碍辅助服务所识别。
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
   * 默认值："auto"。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
   */
  accessibilityDescription?: ResourceStr;
}

/**
* 分段按钮中按钮的选项。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Observed
declare class SegmentButtonItemOptions {

  /**
   * 未选中态的按钮图标。默认值为不显示未选中态的按钮图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  icon?: ResourceStr;

  /**
   * 未选中态按钮图标的无障碍文本。默认值为空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  iconAccessibilityText?: ResourceStr;

  /**
   * 选中态的按钮图标。默认值为不显示选中态的按钮图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedIcon?: ResourceStr;

  /**
   * 选中态按钮图标的无障碍文本。默认值为空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedIconAccessibilityText?: ResourceStr;

  /**
   * 按钮文本。默认值为空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  text?: ResourceStr;

  /**
   * 无障碍重要性，用于控制当前组件是否可被无障碍辅助服务所识别。
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
   * 默认值："auto"。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
   */
  accessibilityDescription?: ResourceStr;

  /**
   * 构造函数。
   *
   * @param { SegmentButtonItemOptionsConstructorOptions } options - 单个分段按钮的配置选项，包含图标、文本、无障碍属性等配置信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
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
 * @since 23 static
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
   * @since 23 static
   * @noninterop
   */
  constructor(elements: SegmentButtonItemTuple);

  /**
   * 在数组末尾添加一个新的元素，返回添加元素后数组的长度。
   *
   * > **说明：**
   * >
   * > SegmentButton是仅支持显示2到5个按钮的分段按钮组件，同时SegmentButtonItemOptionsArray也只保存这2到5个按钮的具体信息，当超过按钮信息个数限制此方法无效。
   *
   * @param { SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem } item - 被添加的按钮信息。
   * @returns { int } 添加元素后数组的长度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  push(item: SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem): int;

  /**
   * 在数组末尾添加两个新的元素，返回添加元素后数组的长度。
   *
   * > **说明：**
   * >
   * > SegmentButton是仅支持显示2到5个按钮的分段按钮组件，同时SegmentButtonItemOptionsArray也只保存这2到5个按钮的具体信息，当超过按钮信息个数限制此方法无效。
   *
   * @param { SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem } item1 - 被添加的第二个按钮信息。
   * @param { SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem } item2 - 被添加的第二个按钮信息。
   * @returns { int } 添加元素后数组的长度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  push(
    item1: SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem,
    item2: SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem,
  ): int;

  /**
   * 在数组末尾添加三个新的元素，返回添加元素后数组的长度。
   *
   * > **说明：**
   * >
   * > SegmentButton是仅支持显示2到5个按钮的分段按钮组件，同时SegmentButtonItemOptionsArray也只保存这2到5个按钮的具体信息，当超过按钮信息个数限制此方法无效。
   *
   * @param { SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem } item1 - 被添加的第二个按钮信息。
   * @param { SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem } item2 - 被添加的第二个按钮信息。
   * @param { SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem } item3 - 被添加的第二个按钮信息。
   * @returns { int } 添加元素后数组的长度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  push(
    item1: SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem,
    item2: SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem,
    item3: SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem,
  ): int;

  /**
   * 移除数组末尾最后一个元素，返回被移除的元素。
   *
   * > **说明：**
   * >
   * > 分段按钮组件数组仅支持保存2到5个按钮信息，若移除后按钮组件数量不在个数限制范围内，移除按钮信息元素失败。
   *
   * @returns { SegmentButtonItemOptions | undefined } Returns the removed element.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  pop(): SegmentButtonItemOptions | undefined;

  /**
   * 移除数组开头第一个元素，返回被移除的元素。
   *
   * > **说明：**
   * >
   * > 分段按钮组件数组仅支持保存2到5个按钮信息，若移除后按钮组件数量不在个数限制范围内，移除按钮信息元素失败。
   *
   * @returns { SegmentButtonItemOptions | undefined } Returns the removed element.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  shift(): SegmentButtonItemOptions | undefined;

  /**
   * 在数组开头添加一个新的元素，返回添加元素后数组的长度。
   *
   * > **说明：**
   * >
   * > SegmentButton是仅支持显示2到5个按钮的分段按钮组件，同时SegmentButtonItemOptionsArray也只保存这2到5个按钮的具体信息，当超过按钮信息个数限制此方法无效。
   *
   * @param { SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem } item - 添加的按钮信息。
   * @returns { int } 添加元素后数组的长度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  unshift(item: SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem): int;

  /**
   * 在数组开头添加两个新的元素，返回添加元素后数组的长度。
   *
   * > **说明：**
   * >
   * > 分段按钮组件数组仅支持保存2到5个按钮信息，若超过分段按钮组件数量个数的限制，添加按钮信息元素失败。
   *
   * @param { SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem } item1 - 添加的第二个按钮信息。
   * @param { SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem } item2 - 添加的第二个按钮信息。
   * @returns { int } 添加元素后数组的长度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  unshift(
    item1: SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem,
    item2: SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem,

  ): int;

  /**
   * 在数组开头添加三个新的元素，返回添加元素后数组的长度。
   *
   * > **说明：**
   * >
   * > SegmentButton是仅支持显示2到5个按钮的分段按钮组件，同时SegmentButtonItemOptionsArray也只保存这2到5个按钮的具体信息，当超过按钮信息个数限制此方法无效。
   *
   * @param { SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem } item1 - 添加的第二个按钮信息。
   * @param { SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem } item2 - 添加的第二个按钮信息。
   * @param { SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem } item3 - 添加的第二个按钮信息。
   * @returns { int } 添加元素后数组的长度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  unshift(
    item1: SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem,
    item2: SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem,
    item3: SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem,
  ): int;

  /**
   * 在数组中，删除从start位置开始的deleteCount数量的元素，并插入items中的元素，返回一个包含了被删除的元素的数组。
   *
   * > **说明：**
   * >
   * > SegmentButton是仅支持显示2到5个按钮的分段按钮组件，同时SegmentButtonItemOptionsArray也只保存这2到5个按钮的具体信息，当超过按钮信息个数限制此方法无效。
   *
   * @param { int } start - 删除元素的起始位置。
   * @param { int } deleteCount - 删除元素的数量。
   * @param { SegmentButtonItemOptions[] } items - 从start开始要加入到数组中的元素。<br>默认值：不指定任何元素，将从数组中删除元素。
   * @returns { SegmentButtonItemOptions[] } Returns a SegmentButtonItemOptions array containing the deleted elements.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  splice(start: int, deleteCount: int, ...items: SegmentButtonItemOptions[]): SegmentButtonItemOptions[];

  /**
   * 创建一个SegmentButtonItemOptionsArray对象。
   *
   * @param { SegmentButtonItemTuple } elements - 按钮信息。
   * @returns { SegmentButtonItemOptionsArray } 返回创建的SegmentButtonItemOptionsArray对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
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
 * @since 23 static
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
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
   */
  multiply: boolean;

  /**
   * 分段按钮组件的按钮信息，包括图标和文本信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  buttons: SegmentButtonItemOptionsArray;

  /**
   * 分段按钮组件的按钮未选中态的文本颜色。
   *
   * 值为undefined时，颜色为$r('sys.color.ohos_id_color_text_secondary')。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
   */
  selectedFontColor: ResourceColor;

  /**
   * 分段按钮组件的按钮未选中态的字体大小，不支持百分比设置。
   *
   * 值为undefined时，字体大小为$r('sys.float.ohos_id_text_size_body2')。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  fontSize: DimensionNoPercentage;

  /**
   * 分段按钮组件的按钮选中态的字体大小，不支持百分比设置。
   *
   * 值为undefined时，字体大小为$r('sys.float.ohos_id_text_size_body2')。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedFontSize: DimensionNoPercentage;

  /**
   * 分段按钮组件的按钮未选中态的字体粗细。
   *
   * 值为undefined时，字体粗细为FontWeight.Regular。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  fontWeight: FontWeight;

  /**
   * 分段按钮组件的按钮选中态的字体粗细。
   *
   * 值为undefined时，字体粗细为FontWeight.Medium。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedFontWeight: FontWeight;

  /**
   * 分段按钮组件的背景板颜色。
   *
   * 值为undefined时，背景板颜色为$r('sys.color.ohos_id_color_button_normal')。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
   */
  localizedTextPadding?: LocalizedPadding;

  /**
   * 分段按钮组件的背景模糊材质。
   *
   * 值为undefined时，背景模糊材质为BlurStyle.NONE。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  backgroundBlurStyle: BlurStyle;

  /**
   * 设置组件的系统材质，不同的材质有不同的效果，会影响背景颜色，边框，阴影和组件的其它视觉属性
   *
   * 设备行为差异：根据计算能力的不同，相同材质在不同设备上的效果可能不同。
   *
   * @type { ?uiMaterial.Material } material - System-styled material. [since 23 - 24]
   * @syscap SystemCapability.ArkUI.ArkUI.Full [since 23]
   * @systemapi [since 23 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @since 23 static
   */
  backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * 构造函数。
   *
   * @param { TabSegmentButtonOptions | CapsuleSegmentButtonOptions } options - 页签类或者胶囊类分段按钮信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  constructor(options: TabSegmentButtonOptions | CapsuleSegmentButtonOptions);

  /**
   * 创建SegmentButtonOptions类，用于定义页签。
   *
   * @param { TabSegmentButtonConstructionOptions } options - 页签类分段按钮信息。
   * @returns { SegmentButtonOptions } 分段按钮选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  static tab(options: TabSegmentButtonConstructionOptions): SegmentButtonOptions;

  /**
   * 创建胶囊类的SegmentButtonOptions。
   *
   * @param { CapsuleSegmentButtonConstructionOptions } options - 胶囊类分段按钮信息。
   * @returns { SegmentButtonOptions } 分段按钮选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
   */
  itemBorderRadius?: LengthMetrics;
}

/**
* 分段按钮组件，包含页签类分段按钮、胶囊类单选分段按钮和胶囊类多选分段按钮。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Component
declare struct SegmentButton {

  /**
   * 分段按钮选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
   */
  @Link
  selectedIndexes: int[];

  /**
   * 分段按钮选项文字的最大字体放大倍数。
   *
   * 取值范围：[1, 2]
   *
   * 当设置的值小于1时，按值为1处理，设置的值大于2时，按值为2处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @PropRef
  maxFontScale: double | Resource;

  /**
   * 当分段按钮选项被点击时，触发的回调函数接收被点击的选项下标作为参数。若不传入此参数，则点击时不触发回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  onItemClicked?: Callback<int>;

  /**
   * build函数用于构造SegmentButton高级组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  build(): void;

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
   * @since 24 static
   */
  @PropRef
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
  SegmentButtonItemOptionsConstructorOptions,
  SegmentButtonItemOptions,
  BorderRadiusMode;