/*
* Copyright (C) 2023 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */

import { SymbolGlyphModifier } from './@ohos.arkui.modifier';

import uiMaterial from './@ohos.arkui.uiMaterial';

/**
* Enum for ChipSize
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
export declare enum ChipSize {

  /**
   * normal尺寸操作块，适用于常规展示场景。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  NORMAL = "NORMAL",

  /**
   * small尺寸操作块，适用于紧凑布局场景。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  SMALL = "SMALL"
}

/**
 * AccessibilitySelectedType定义Chip可指定的选中态类型，用于控制无障碍服务如何向用户传达组件的选中状态。不同的选中态类型提供了不同的语义和用户体验。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 * @noninterop
 */
export declare enum AccessibilitySelectedType {

  /**
   * 单击型。组件不向无障碍服务报告任何选中状态，仅作为可单击组件使用。适用于执行某个操作但不保持状态的场景，如普通按钮。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  CLICKED = 0,

  /**
   * 复选型。组件通过 [accessibilityChecked]{@link CommonMethod#accessibilityChecked} 属性向无障碍服务报告选中状态。适用于多选场景，如标签筛选、属性选择等。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  CHECKED = 1,

  /**
   * 单选型。组件通过 [accessibilitySelected]{@link CommonMethod#accessibilitySelected} 属性向无障碍服务报告选中状态。适用于表示当前选中项的场景，如导航栏标签、单选列表
   * 项等。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  SELECTED = 2
}

/**
* IconCommonOptions定义图标的共通属性。
*
* > **说明：**
* >
* > 仅在图片格式为SVG时，fillColor和activatedFillColor属性才生效。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
export interface IconCommonOptions {

  /**
   * 图标图片或图片地址引用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  src: ResourceStr;

  /**
   * 图标大小，不支持百分比，异常值按默认值处理。
   *
   * 默认值：
   *
   * - 当ChipOptions.size为ChipSize.SMALL时，默认值为：{width: $r('sys.float.chip_small_icon_size'), height: $r('
   * sys.float.chip_small_icon_size')}
   * - 当ChipOptions.size为ChipSize.NORMAL时，默认值为：{width: $r('sys.float.chip_normal_icon_size'), height: $r('
   * sys.float.chip_normal_icon_size')}
   *
   * 单位：vp
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  size?: SizeOptions;

  /**
   * 图标填充颜色。仅在图片格式为SVG时生效。
   *
   * 默认值：$r('sys.color.chip_usually_icon_color')
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fillColor?: ResourceColor;

  /**
   * Chip激活时的图标填充颜色。仅在图片格式为SVG时生效。
   *
   * 默认值：$r('sys.color.chip_active_icon_color')
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  activatedFillColor?: ResourceColor;
}

/**
* SuffixIconOptions定义后缀图标的属性。
*
* 继承于[IconCommonOptions]{@link IconCommonOptions}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
export interface SuffixIconOptions extends IconCommonOptions {

  /**
   * 后缀图标点击事件回调。
   *
   * 值为undefined时，不设定后缀图标事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  action?: () => void;

  /**
   * 后缀图标无障碍文本属性。当后缀图标不包含文本属性时，屏幕朗读选中后缀图标时不播报，使用者无法清楚地知道当前是否选中了后缀图标。开发人员可为此类图标设置无障碍文本，屏幕朗读选中时播报该文本内容。
   *
   * 默认值：‘ ’
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * 后缀图标的无障碍描述。此描述用于向用户详细解释后缀图标，开发人员应提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果，特别是当这些后果无法仅从后缀图标的属性和无障碍文本中直接获知时。如果后缀图标同时具备文本属性
   * 和无障碍说明属性，当后缀图标被选中时，系统将首先播报后缀图标的文本属性，随后播报无障碍说明属性的内容。
   *
   * 默认值：‘ ’
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * 后缀图标的无障碍重要性。用于控制后缀图标是否可被无障碍辅助服务识别。
   *
   * 支持的值为：
   *
   * "auto"：当前组件存在action时转化为"yes"，不存在action时，转化为"no"。
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
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilityLevel?: string;
}

/**
* PrefixIconOptions定义前缀图标的属性。
*
* 继承于[IconCommonOptions]{@link IconCommonOptions}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
export interface PrefixIconOptions extends IconCommonOptions {}

/**
* 后缀图标的无障碍朗读功能属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 * @noninterop
 */
export interface AccessibilityOptions {

  /**
   * 无障碍重要性。用于控制组件是否可被无障碍辅助服务识别。
   *
   * 支持的值为：
   *
   * "auto"：当前组件会转换为"yes"。
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
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilityLevel?: string;

  /**
   * 无障碍文本属性。当组件无文本属性时，屏幕朗读选中此组件不会播报，导致使用者无法清楚了解当前选中的组件。开发人员可为此类组件设置无障碍文本，屏幕朗读时将播报该文本，帮助使用者明确选中了什么组件。
   *
   * 默认值：‘ ’
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * 无障碍描述。此描述用于向用户详细解释当前组件，开发人员应提供详尽的文本说明，以协助用户理解即将执行的操作及其后果。特别是当这些后果无法仅从组件的属性和无障碍文本中直接获知时。如果组件同时具备文本属性和无障碍说明属性，当组件被选中
   * 时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。
   *
   * 默认值：‘ ’
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilityDescription?: ResourceStr;
}

/**
* CloseOptions用于定义Chip组件默认的关闭图标功能属性，包括无障碍功能属性，其中accessibilityText默认为"删除"。
*
* 继承于[AccessibilityOptions]{@link AccessibilityOptions}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 * @noninterop
 */
export interface CloseOptions extends AccessibilityOptions {

  /**
   * 设置Chip组件默认关闭图标的字体大小，不支持百分比，传入百分比时按默认值处理。
   *
   * 默认值：
   *
   * size为ChipSize.SMALL时，`$r('sys.float.chip_small_font_size')`
   *
   * 其他情况：`$r('sys.float.chip_normal_font_size')`
   *
   * 单位：fp
   *
   * 传入负数时，按默认值处理。值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  fontSize?: Dimension;
}

/**
* ChipSymbolGlyphOptions定义前缀图标和后缀图标的属性。
*
* > **说明：**
* >
 * > 不支持使用[SymbolEffect]{@link SymbolGlyphAttribute#symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)}修改动效类型及
 * > effectStrategy设置动效。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
export interface ChipSymbolGlyphOptions {

  /**
   * 设置Chip在非激活状态下显示的symbol类型图标。
   *
   * 默认值：不显示前缀图标或后缀图标
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  normal?: SymbolGlyphModifier;

  /**
   * 设置Chip在激活状态下显示的symbol类型图标。
   *
   * 默认值：不显示前缀图标或后缀图标
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  activated?: SymbolGlyphModifier;
}

/**
 * symbol类型后缀图标的无障碍朗读功能属性及点击事件回调。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 * @noninterop
 */
export interface ChipSuffixSymbolGlyphOptions {

  /**
   * 非激活态无障碍朗读功能属性。
   *
   * 默认值：undefined
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  normalAccessibility?: AccessibilityOptions;

  /**
   * 激活态无障碍朗读功能属性。
   *
   * 默认值：undefined
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  activatedAccessibility?: AccessibilityOptions;

  /**
   * 后缀图标点击事件回调。
   *
   * 值为undefined时，不设定后缀图标事件。
   *
   * 默认值：undefined
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  action?: VoidCallback;
}

/**
* LabelMarginOptions用于定义文本与左右侧图标之间间距。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
export interface LabelMarginOptions {

  /**
   * 文本与左侧图标的间距，不支持百分比。
   *
   * 默认值：
   *
   * size为ChipSize.SMALL时，left默认值：4
   *
   * size为ChipSize.NORMAL时，left默认值：6
   *
   * 单位：vp
   *
   * 超出取值范围按默认值处理。
   *
   * 取值范围：[0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  left?: Dimension;

  /**
   * 文本与右侧图标之间间距，不支持百分比。
   *
   * 默认值：
   *
   * size为ChipSize.SMALL时，right默认值：4
   *
   * size为ChipSize.NORMAL时，right默认值：6
   *
   * 单位：vp
   *
   * 超出取值范围按默认值处理。
   *
   * 取值范围：[0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  right?: Dimension;
}

/**
* LocalizedLabelMarginOptions用于定义本地化文本与左右侧图标之间间距。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
export interface LocalizedLabelMarginOptions {

  /**
   * 文本与起始侧图标的间距，不支持百分比。
   *
   * 默认值：
   *
   * size为ChipSize.SMALL时，start默认值：
   *
   * `LengthMetrics.resource($r('sys.float.chip_small_text_margin'))`
   *
   * size为ChipSize.NORMAL时，start默认值：
   *
   * `LengthMetrics.resource($r('sys.float.chip_normal_text_margin'))`
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  start?: LengthMetrics;

  /**
   * 文本与结束侧图标之间间距，不支持百分比。
   *
   * 默认值：
   *
   * size为ChipSize.SMALL时，end默认值：
   *
   * `LengthMetrics.resource($r('sys.float.chip_small_text_margin'))`
   *
   * size为ChipSize.NORMAL时，end默认值：
   *
   * `LengthMetrics.resource($r('sys.float.chip_normal_text_margin'))`
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  end?: LengthMetrics;
}

/**
* LabelOptions定义文本属性。
*
 * > **说明：**
 * >
 * > 从API版本26.0.0开始，backgroundSystemMaterial设置自动反色的系统材质时，fontColor使用支持反色的特殊系统资源，文字颜色自动适配到材质背景色的反色；
 * > activatedBackgroundSystemMaterial设置自动反色的系统材质时，activatedFontColor使用支持反色的特殊系统资源，Chip激活时的文字颜色自动适配到材质背景色的反色。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
export interface LabelOptions {

  /**
   * Chip组件显示的文本内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  text: string;

  /**
   * 字体大小，不支持百分比，传入百分比时按默认值处理。
   *
   * 传入负数时，按默认值处理。
   *
   * 默认值：$r('sys.float.ohos_id_text_size_button2')
   *
   * 单位：fp
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontSize?: Dimension;

  /**
   * 文字颜色。
   *
   * 默认值：$r('sys.color.ohos_id_color_text_primary')
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontColor?: ResourceColor;

  /**
   * Chip激活时的文字颜色。
   *
   * 默认值：$r('sys.color.ohos_id_color_text_primary_contrary')
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  activatedFontColor?: ResourceColor;

  /**
   * 设置Chip组件文本的字体样式。
   *
   * 默认值："HarmonyOS Sans"
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontFamily?: string;

  /**
   * 文本与左右侧图标之间间距。
   *
   * 默认值：
   *
   * size为ChipSize.SMALL时，{ left: 4, right: 4 }
   *
   * size为ChipSize.NORMAL时，{ left: 6, right: 6 }
   *
   * 单位：vp
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  labelMargin?: LabelMarginOptions;

  /**
   * 本地化文本与左右侧图标之间间距。
   *
   * 默认值：
   *
   * size为ChipSize.SMALL时，
   *
   * `{  start: LengthMetrics.resource($r('sys.float.chip_small_text_margin')),  end: LengthMetrics.resource($r('sys.float.chip_small_text_margin')) }`
   *
   * size为ChipSize.NORMAL时，
   *
   * `{  start: LengthMetrics.resource($r('sys.float.chip_normal_text_margin')),  end: LengthMetrics.resource($r('sys.float.chip_normal_text_margin')) }`
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  localizedLabelMargin?: LocalizedLabelMarginOptions;
}

/**
 * ChipOptions定义Chip的样式及具体样式参数。
 *
 * > **说明：**
 * >
 * > 1. 当`suffixSymbol`有传入参数时，`suffixIcon`和`allowClose`不生效；当`suffixSymbol`没有传入参数而`suffixIcon`有传入参数时，`allowClose`不生效；当
 * > `suffixSymbol`和`suffixIcon`都没有传入参数时，`allowClose`决定是否显示关闭图标。
 * >
 * > 2. `backgroundColor`和`activatedBackgroundColor`赋值为`undefined`时，显示默认背景颜色；赋值为非法值时，背景颜色透明。
 * >
 * > 3. 当prefixSymbol或suffixSymbol设置了图标时，若Chip为非激活状态，图标颜色fontColor为`[$r('sys.color.ohos_id_color_secondary')]`，若Chip为激活状
 * > 态，图标颜色fontColor为`[$r('sys.color.ohos_id_color_text_primary_contrary')]`。此外，当size为ChipSize.SMALL时，图标的默认字体大小fontSize为
 * > `$r('sys.float.chip_small_icon_size')`；当size为ChipSize.NORMAL或自定义大小时，图标的默认字体大小fontSize为
 * > `$r('sys.float.chip_normal_icon_size')`。
 * >
 * > 4. 当prefixIcon和suffixIcon设置了图标时，fillColor默认值均为：`$r('sys.color.chip_usually_icon_color')`。fillColor对颜色的解析与Image组件保持一
 * > 致。
 * >
 * > 5. 当prefixIcon和suffixIcon设置了图标时，activatedFillColor默认值均为：`$r('sys.color.chip_active_icon_color')`。activatedFillColor
 * > 对颜色的解析与Image组件保持一致。
 * >
 * > 6. 从API版本26.0.0开始，当配置backgroundSystemMaterial为自动反色材质时，prefixIcon和suffixIcon的填充色以及prefixSymbol和suffixSymbol在非激活状态下的文
 * > 字颜色会使用支持反色的系统资源，这些颜色会根据背景材质自动匹配反色效果。当设置activatedBackgroundSystemMaterial为自动反色材质时，prefixIcon和suffixIcon的激活态填充色以及
 * > prefixSymbol和suffixSymbol在激活状态下的文字颜色同样采用支持反色的系统资源，实现与背景材质反色的自动适配。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
export interface ChipOptions {

  /**
   * 设置Chip组件的前缀图标，显示在组件左侧。
   *
   * 默认值：不显示前缀图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * prefixIcon和prefixSymbol同时设置时，显示prefixSymbol的效果，prefixIcon无效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  prefixIcon?: PrefixIconOptions;

  /**
   * 前缀图标属性，symbol类型。常用于需要系统标准图标、动态图标效果的场景。
   *
   * 默认值：不显示前缀图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * prefixIcon和prefixSymbol同时设置时，显示prefixSymbol的效果，prefixIcon无效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  prefixSymbol?: ChipSymbolGlyphOptions;

  /**
   * 设置Chip组件显示的文本内容及样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  label: LabelOptions;

  /**
   * 设置Chip组件的后缀图标，显示在组件右侧。
   *
   * 默认值：不显示后缀图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * suffixIcon和suffixSymbol同时设置时，显示suffixSymbol的效果，suffixIcon无效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  suffixIcon?: SuffixIconOptions;

  /**
   * 后缀图标属性，symbol类型。常用于需要系统标准图标、动态图标效果的场景。
   *
   * 默认值：不显示后缀图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * suffixIcon和suffixSymbol同时设置时，显示suffixSymbol的效果，suffixIcon无效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  suffixSymbol?: ChipSymbolGlyphOptions;

  /**
   * symbol类型后缀图标的无障碍朗读功能属性及点击事件回调等。
   *
   * 默认值：不设置对应属性。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  suffixSymbolOptions?: ChipSuffixSymbolGlyphOptions;

  /**
   * 关闭图标是否显示。
   *
   * 默认值：true
   *
   * true：关闭图标显示；false：关闭图标不显示。
   *
   * 值为undefined时，按默认值处理。
   *
   * **说明**：当suffixSymbol有传入参数时，allowClose不生效；当suffixSymbol没有传入参数而suffixIcon有传入参数时，allowClose不生效；当suffixSymbol和
   * suffixIcon都没有传入参数时，allowClose决定是否显示关闭图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  allowClose?: boolean;

  /**
   * 默认关闭图标的功能属性，包括无障碍朗读功能和字体大小等属性。仅在默认关闭图标显示时生效，即allowClose为true且suffixSymbol和suffixIcon均未设置传入参数时。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  closeOptions?: CloseOptions;

  /**
   * Chip是否可用。
   *
   * 默认值：true。
   *
   * true：Chip可用；false：Chip不可用。
   *
   * **使用场景**：设置为false禁用Chip，适用于权限受限、数据未加载完成、条件不满足等需要禁止用户操作的场景。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  enabled?: boolean;

  /**
   * Chip是否为激活态。
   *
   * 默认值：false。
   *
   * true：Chip为激活态；false：Chip为非激活态。
   *
   * 值为undefined时，按默认值处理。
   *
   * **使用场景**：常用于标签选择场景表示当前选中项等。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  activated?: boolean;

  /**
   * Chip背景颜色。
   *
   * 默认值：$r('sys.color.ohos_id_color_button_normal')。
   *
   * 值为undefined时，按默认值处理。赋值为非法值时，背景颜色透明。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * 设置组件系统材质样式。不同材质具有不同的效果，能够影响组件的[backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、
   * [border]{@link CommonMethod#border}、[shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}等视觉属性。
   *
   * 默认值：undefined
   *
   * 值为undefined时，不应用材质样式。
   *
   * **说明**：当设置backgroundSystemMaterial时，应将backgroundColor设为Color.Transparent，否则会与系统材质冲突；当backgroundSystemMaterial为
   * undefined时，backgroundColor属性生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * Chip激活态的背景颜色。
   *
   * 默认值：$r('sys.color.ohos_id_color_emphasize')。
   *
   * 值为undefined时，按默认值处理。赋值为非法值时，背景颜色透明。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  activatedBackgroundColor?: ResourceColor;

  /**
   * 设置组件激活状态下的系统材质样式。不同材质具有不同的效果，能够影响组件的[backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、
   * [border]{@link CommonMethod#border}、[shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}等视觉属性。
   *
   * 默认值：undefined
   *
   * 值为undefined时，不应用材质样式。
   *
   * **说明**：当设置activatedBackgroundSystemMaterial时，应将activatedBackgroundColor设为Color.Transparent，否则会与系统材质冲突；当
   * activatedBackgroundSystemMaterial为undefined时，activatedBackgroundColor属性生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  activatedBackgroundSystemMaterial?: uiMaterial.Material;

  /**
   * Chip背景圆角半径大小，不支持百分比，传入百分比时按默认值处理。
   *
   * 取值范围：[0, +∞)
   *
   * 默认值：$r('sys.float.ohos_id_corner_radius_button')。
   *
   * 单位：vp
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  borderRadius?: Dimension;

  /**
   * Chip尺寸。
   *
   * 默认值：ChipSize.NORMAL
   *
   * **使用场景**：ChipSize.NORMAL适用于常规场景；ChipSize.SMALL适用于紧凑布局场景，如标签列表、筛选栏等；自定义SizeOptions适用于需要特定尺寸的场景。
   *
   * SizeOptions类型参数不支持百分比设置，异常值按默认值处理。
   *
   * **说明**：[适老化](docroot://ui/arkui-support-for-aging-adaptation.md)在size指定具体宽高时不生效，size设置为{ height: 0, width: 0 }除外。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  size?: ChipSize | SizeOptions;

  /**
   * 默认关闭图标点击事件。
   *
   * 值为undefined时，不触发关闭图标点击事件。
   *
   * **说明**：仅当关闭图标显示时生效，即suffixSymbol和suffixIcon都未传入参数且allowClose为true时。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onClose?: () => void;

  /**
   * Chip组件点击事件。
   *
   * 值为undefined时，Chip不能被点击。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onClicked?: Callback<void>;

  /**
   * 布局方向。
   *
   * 默认值：Direction.Auto。
   *
   * 值为undefined时，按默认值处理。
   *
   * **使用场景**：常用于国际化场景，适配阿拉伯语等从右到左（RTL）阅读习惯的语言环境，实现界面镜像效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  direction?: Direction;

  /**
   * Chip组件的无障碍描述。用于向用户详细解释当前组件，开发人员应提供详尽的文本说明，协助用户理解即将执行的操作及其结果。特别是当这些结果无法仅从组件属性和无障碍文本中直接获知时。如果组件同时具备文本属性和无障碍说明属性，当组件被选
   * 中时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。
   *
   * 默认值：空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Chip组件无障碍重要性。用于控制Chip组件是否可被无障碍辅助服务所识别。
   *
   * 支持的值为：
   *
   * "auto"：当前组件会转化为"yes"。
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
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilityLevel?: string;

  /**
   * Chip组件选中态类型。
   *
   * 默认值：当设置了activated属性但未指定accessibilitySelectedType时，默认使用CHECKED类型。当未设置activated属性时，默认使用CLICKED类型。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilitySelectedType?: AccessibilitySelectedType;

  /**
   * Chip组件文本与图标的最大的字体缩放倍数。
   *
   * 取值范围：[1, +∞)
   *
   * 设置的值小于1时，按值为1处理。异常值默认不生效。
   *
   * 默认值：1
   *
   * 值为undefined时，按默认值处理。
   *
   * **使用场景**：适用于需要限制字体放大上限的无障碍场景，防止字体过大导致布局溢出。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  maxFontScale?: number | Resource;

  /**
   * Chip组件文本与图标的最小的字体缩放倍数。
   *
   * 取值范围：[0, 1]
   *
   * 设置的值小于0时，按值为0处理。设置的值大于1时，按值为1处理。异常值默认不生效。
   *
   * 默认值：1
   *
   * 值为undefined时，按默认值处理。
   *
   * **使用场景**：适用于需要限制字体缩小下限的场景，保证文本可读性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  minFontScale?: number | Resource;

  /**
   * Chip组件的内边距。
   *
   * 默认值：
   *
   * - size为ChipSize.SMALL并且activated为true时，默认值：
   * `{  start: LengthMetrics.resource('sys.float.chip_activated_small_text_padding'),   end: LengthMetrics.resource('sys.float.chip_activated_small_text_padding'),  top: LengthMetrics.vp(4),  bottom: LengthMetrics.vp(4)}`
   *
   * - size为ChipSize.SMALL并且activated为false时，默认值：
   * `{  start: LengthMetrics.resource('sys.float.chip_small_text_padding'),  end: LengthMetrics.resource('sys.float.chip_small_text_padding'),  top: LengthMetrics.vp(4),  bottom: LengthMetrics.vp(4)}`
   *
   * - size不为ChipSize.SMALL并且activated为true时，默认值：
   * `{  start: LengthMetrics.resource('sys.float.chip_activated_normal_text_padding'),  end: LengthMetrics.resource('sys.float.chip_activated_normal_text_padding'),  top: LengthMetrics.vp(4),  bottom: LengthMetrics.vp(4)}`
   *
   * - size不为ChipSize.SMALL并且activated为false时，默认值：
   * `{  start: LengthMetrics.resource('sys.float.chip_normal_text_padding'),  end: LengthMetrics.resource('sys.float.chip_normal_text_padding'),  top: LengthMetrics.vp(4),  bottom: LengthMetrics.vp(4)}`
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  padding?: LocalizedPadding;

  /**
   * 统一设置Chip组件的文本与图标的字体大小，不支持百分比，传入百分比时按默认值处理。
   *
   * 该fontSize的优先级低于prefixSymbol、label、suffixSymbol和closeOptions中的fontSize属性。
   *
   * 默认值：
   *
   * - size为ChipSize.SMALL时，文本：`$r('sys.float.chip_small_font_size')`；图标：`$r('sys.float.chip_small_icon_size')`
   * - 其他情况下，文本：`$r('sys.float.chip_normal_font_size')`；图标：`$r('sys.float.chip_normal_icon_size')`
   *
   * 单位：fp
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  fontSize?: Dimension;
}

/**
 * 创建Chip组件。
*
 * @param { ChipOptions } options - 定义Chip组件的参数，包括尺寸、启用状态、激活态、前缀/后缀图标、文本内容、背景颜色、圆角、无障碍属性等，用于自定义Chip组件的样式和行为。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
@Builder
export declare function Chip(options: ChipOptions): void;