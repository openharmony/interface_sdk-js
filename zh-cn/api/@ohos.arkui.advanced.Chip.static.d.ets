
'use static';
/*
* Copyright (C) 2025 Huawei Device Co., Ltd.
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

import { 
  Builder, 
  ResourceStr, 
  SizeOptions, 
  ResourceColor, 
  VoidCallback, 
  Dimension, 
  LengthMetrics, 
  Direction, 
  Component,
  Resource,
  LocalizedPadding,
} from './@ohos.arkui.component';

import { SymbolGlyphModifier } from './@ohos.arkui.modifier';

import { PropRef, Require } from './arkui/stateManagement/decorator';

import uiMaterial from './@ohos.arkui.uiMaterial';

/**
* ChipSize是Chip可指定的尺寸类型，如普通型Chip。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare enum ChipSize {

  /**
   * normal尺寸操作块。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  NORMAL = 'NORMAL',

  /**
   * small尺寸操作块。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  SMALL = 'SMALL',
}

/**
* AccessibilitySelectedType是Chip可指定的选中态类型，用于控制无障碍服务如何向用户传达组件的选中状态。不同的选中态类型提供了不同的语义和用户体验。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare enum AccessibilitySelectedType {

  /**
   * 单击型。组件不向无障碍服务报告任何选中状态，仅作为可单击组件使用。适用于执行某个操作但不保持状态的场景，如普通按钮。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  CLICKED = 0,

  /**
   * 复选型。组件通过
   * [accessibilityChecked](docroot://reference/apis-arkui-static/arkui-ts/ts-universal-attributes-accessibility.md#accessibilitychecked13)
   * 属性向无障碍服务报告选中状态。适用于多选场景，如标签筛选、属性选择等。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  CHECKED = 1,

  /**
   * 单选型。组件通过
   * [accessibilitySelected](docroot://reference/apis-arkui-static/arkui-ts/ts-universal-attributes-accessibility.md#accessibilityselected13)
   * 属性向无障碍服务报告选中状态。适用于表示当前选中项的场景，如导航栏标签、单选列表项等。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
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
 * @since 23 static
 * @noninterop
 */
export interface IconCommonOptions {

  /**
   * 图标图片或图片地址引用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  src: ResourceStr;

  /**
   * 图标大小，不支持百分比。
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
   * @since 23 static
   * @noninterop
   */
  size?: SizeOptions;

  /**
   * 图标填充颜色。
   *
   * 默认值：$r('sys.color.chip_usually_icon_color')
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  fillColor?: ResourceColor;

  /**
   * 操作块激活时图标填充颜色。
   *
   * 默认值：$r('sys.color.chip_active_icon_color')
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
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
 * @since 23 static
 * @noninterop
 */
export interface SuffixIconOptions extends IconCommonOptions {

  /**
   * 后缀图标设定事件。
   *
   * 值为undefined时，不设定后缀图标事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  action?: VoidCallback;

  /**
   * 后缀图标无障碍文本属性。当后缀图标不包含文本属性时，屏幕朗读选中后缀图标时不播报，使用者无法清楚地知道当前是否选中了后缀图标。为了解决此场景，开发人员可为不包含文字信息的后缀图标设置无障碍文本，当屏幕朗读选中后缀图标时播报无障碍文
   * 本的内容，帮助屏幕朗读的使用者清楚地知道自己是否选中了后缀图标。
   *
   * 默认值：' '
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  accessibilityText?: ResourceStr;

  /**
   * 后缀图标的无障碍描述。此描述用于向用户详细解释后缀图标，开发人员应为后缀图标的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果。特别是当这些后果无法仅从后缀图标的属性和无障碍文本中直接获知时。如果后缀
   * 图标同时具备文本属性和无障碍说明属性，当后缀图标被选中时，系统将首先播报后缀图标的文本属性，随后播报无障碍说明属性的内容。
   *
   * 默认值：' '
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  accessibilityDescription?: ResourceStr;

  /**
   * 后缀图标的无障碍重要性。用于控制后缀图标是否可被无障碍辅助服务识别。
   *
   * 支持的值为:
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
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
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
 * @since 23 static
 * @noninterop
 */
export interface PrefixIconOptions extends IconCommonOptions {}

/**
* 后缀图标的无障碍朗读功能属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface AccessibilityOptions {

  /**
   * 无障碍重要性。用于控制组件是否可被无障碍辅助服务识别。
   *
   * 支持的值为:
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
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  accessibilityLevel?: string;

  /**
   * 无障碍文本属性。当组件无文本属性时，屏幕朗读选中此组件不会播报，导致使用者无法清楚了解当前选中的组件。开发人员可为此类组件设置无障碍文本，屏幕朗读时将播报该文本，帮助使用者明确选中了什么组件。
   *
   * 默认值：' '
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  accessibilityText?: ResourceStr;

  /**
   * 无障碍描述。此描述用于向用户详细解释当前组件，开发人员应提供详尽的文本说明，以协助用户理解即将执行的操作及其后果。特别是当这些后果无法仅从组件的属性和无障碍文本中直接获知时。如果组件同时具备文本属性和无障碍说明属性，当组件被选中
   * 时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。
   *
   * 默认值：' '
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
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
 * @since 23 static
 * @noninterop
 */
export interface CloseOptions extends AccessibilityOptions {

  /**
   * 设置Chip组件默认关闭图标的大小，不支持百分比。
   *
   * 默认值：
   *
   * size为ChipSize.SMALL时，`默认值：$r('sys.float.chip_small_font_size')`
   *
   * 其他情况默认值：`$r('sys.float.chip_normal_font_size')`
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontSize?: Dimension;
}

/**
* ChipSymbolGlyphOptions定义前缀图标和后缀图标的属性。
*
* > **说明：**
* >
* > 不支持使用
* > [SymbolEffect](docroot://reference/apis-arkui-static/arkui-ts/ts-basic-components-symbolGlyph.md#symboleffect12对象说明)
* > 修改动效类型及effectStrategy设置动效。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface ChipSymbolGlyphOptions {

  /**
   * 非激活时图标设定。
   *
   * 默认值：不显示前缀图标或后缀图标
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  normal?: SymbolGlyphModifier;

  /**
   * 激活时图标设定。
   *
   * 默认值：不显示前缀图标或后缀图标
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  activated?: SymbolGlyphModifier;
}

/**
* symbol类型后缀图标属性的无障碍朗读功能属性类型。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
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
   * @since 23 static
   * @noninterop
   */
  normalAccessibility?: AccessibilityOptions;

  /**
   * 激活态无障碍朗读功能属性。
   *
   * 默认值：undefined
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  activatedAccessibility?: AccessibilityOptions;

  /**
   * 后缀图标设定事件。
   *
   * 默认值：undefined
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  action?: VoidCallback;
}

/**
* LabelMarginOptions用于定义文本与左右侧图标之间间距。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface LabelMarginOptions {

  /**
   * 文本与左侧图标之间间距，不支持百分比。
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
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
   */
  right?: Dimension;
}

/**
* LocalizedLabelMarginOptions用于定义本地化文本与左右侧图标之间间距。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface LocalizedLabelMarginOptions {

  /**
   * 文本与左侧图标之间间距，不支持百分比。
   *
   * 默认值：
   *
   * size为ChipSize.SMALL时，start默认值:
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
   * @since 23 static
   * @noninterop
   */
  start?: LengthMetrics;

  /**
   * 文本与右侧图标之间间距，不支持百分比。
   *
   * 默认值：
   *
   * size为ChipSize.SMALL时，end默认值：
   *
   * `LengthMetrics.resource($r('sys.float.chip_small_text_margin'))`
   *
   * size为ChipSize.NORMAL时，end默认值:
   *
   * `LengthMetrics.resource($r('sys.float.chip_normal_text_margin'))`
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  end?: LengthMetrics;
}

/**
* LabelOptions定义文本属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface LabelOptions {

  /**
   * 文本文字内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  text: string;

  /**
   * 文字字号，不支持百分比。
   *
   * 默认值：$r('sys.float.ohos_id_text_size_button2')
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
   */
  fontColor?: ResourceColor;

  /**
   * 操作块激活时的文字颜色。
   *
   * 默认值：$r('sys.color.ohos_id_color_text_primary_contrary')
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  activatedFontColor?: ResourceColor;

  /**
   * 文字字体。
   *
   * 默认值："HarmonyOS Sans"
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  fontFamily?: string;

  /**
   * 文本与左右侧图标之间间距。
   *
   * 默认值：
   *
   * size为ChipSize.SMALL时，默认值：{ left: 4, right: 4 }
   *
   * size为ChipSize.NORMAL时，默认值：{ left: 6, right: 6 }
   *
   * 单位：vp
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  labelMargin?: LabelMarginOptions;

  /**
   * 本地化文本与左右侧图标之间间距。
   *
   * 默认值：
   *
   * size为ChipSize.SMALL时，默认值：
   *
   * `{  start: LengthMetrics.resource($r('sys.float.chip_small_text_margin')),  end: LengthMetrics.resource($r('sys.float.chip_small_text_margin')) }`
   *
   * size为ChipSize.NORMAL时，默认值：
   *
   * `{  start: LengthMetrics.resource($r('sys.float.chip_normal_text_margin')),  end: LengthMetrics.resource($r('sys.float.chip_normal_text_margin')) }`
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  localizedLabelMargin?: LocalizedLabelMarginOptions;
}

/**
* ChipOptions定义Chip的样式及具体式样参数。
*
* > **说明：**
* >
* > 1. 当`suffixSymbol`有传入参数时，`suffixIcon`和`allowClose`不生效；当`suffixSymbol`没有传入参数而`suffixIcon`有传入参数时，`allowClose`不生效；当
* > `suffixSymbol`和`suffixIcon`都没有传入参数时，`allowClose`决定是否显示删除图标。
* >
* > 2. `backgroundColor`和`activatedBackgroundColor`赋值为`undefined`时，显示默认背景颜色；赋值为非法值时，背景颜色透明。
* >
* > 3. prefixSymbol/suffixSymbol的fontColor默认值为：normalFontColor: `[$r('sys.color.ohos_id_color_primary')]`、
* > activatedFontColor: `[$r('sys.color.ohos_id_color_text_primary_contrary')]`。fontColor默认值为16。
* >
* > 4. prefixIcon的fillColor默认值为：`$r('sys.color.ohos_id_color_secondary')`，suffixIcon的fillColor默认值为：
* > `$r('sys.color.ohos_id_color_primary')`。fillColor对颜色的解析与Image组件保持一致。
* >
* > 5. prefixIcon和suffixIcon的activatedFillColor默认值均为：`$r('sys.color.ohos_id_color_text_primary_contrary')`。
* > activatedFillColor对颜色的解析与Image组件保持一致。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface ChipOptions {

  /**
   * 前缀图标属性。
   *
   * 默认值：不显示前缀图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * prefixIcon和prefixSymbol同时设置时，显示prefixSymbol的效果，prefixIcon无效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  prefixIcon?: PrefixIconOptions;

  /**
   * 前缀图标属性，symbol类型。
   *
   * 默认值：不显示前缀图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * prefixIcon和prefixSymbol同时设置时，显示prefixSymbol的效果，prefixIcon无效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  prefixSymbol?: ChipSymbolGlyphOptions;

  /**
   * 文本属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  label: LabelOptions;

  /**
   * 后缀图标属性。
   *
   * 默认值：不显示后缀图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * suffixIcon和suffixSymbol同时设置时，显示suffixSymbol的效果，suffixIcon无效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  suffixIcon?: SuffixIconOptions;

  /**
   * 后缀图标属性，symbol类型。
   *
   * 默认值：不显示后缀图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * suffixIcon和suffixSymbol同时设置时，显示suffixSymbol的效果，suffixIcon无效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  suffixSymbol?: ChipSymbolGlyphOptions;

  /**
   * symbol类型后缀图标属性的无障碍朗读功能属性。
   *
   * 默认值：不显示后缀图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  suffixSymbolOptions?: ChipSuffixSymbolGlyphOptions;

  /**
   * 关闭图标是否显示。
   *
   * 默认值：true
   *
   * true：删除图标显示；false：删除图标不显示。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  allowClose?: boolean;

  /**
   * 默认关闭图标的无障碍朗读功能属性。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  closeOptions?: CloseOptions;

  /**
   * Chip是否可选中。
   *
   * 默认值：true。
   *
   * true：操作块可选中；false：操作块不可选中。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  enabled?: boolean;

  /**
   * Chip是否为激活态。
   *
   * 默认值：false。
   *
   * true：操作块为激活态；false：操作块为非激活态。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  activated?: boolean;

  /**
   * Chip背景颜色。
   *
   * 默认值：$r('sys.color.ohos_id_color_button_normal')。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  backgroundColor?: ResourceColor;

  /**
   * Chip背景颜色。
   *
   * 默认值：$r('sys.color.ohos_id_color_button_normal')。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * Chip激活时的背景颜色。
   *
   * 默认值：$r('sys.color.ohos_id_color_emphasize')。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  activatedBackgroundColor?: ResourceColor;

  /**
   *    =* Set system-styled materials for the component which is activated. Different materials have different effects,
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  activatedBackgroundSystemMaterial?: uiMaterial.Material;

  /**
   * Chip背景圆角半径大小，不支持百分比。
   *
   * 默认值：$r('sys.float.ohos_id_corner_radius_button')。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  borderRadius?: Dimension;

  /**
   * Chip尺寸。
   *
   * 默认值：ChipSize.NORMAL
   *
   * SizeOptions类型参数不支持百分比设置，异常值按默认值处理。
   *
   * **说明**：[适老化](docroot://ui/arkui-support-for-aging-adaptation.md)在size指定具体宽高时不生效，size设置为{ height: 0, width: 0 }除外。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  size?: ChipSize | SizeOptions;

  /**
   * 默认关闭图标点击事件。
   *
   * 值为undefined时，关闭图标点击事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  onClose?: VoidCallback;

  /**
   * Chip点击事件。
   *
   * 值为undefined时，Chip不能被点击。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  onClicked?: VoidCallback;

  /**
   * 布局方向。
   *
   * 默认值：Direction.Auto。
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
   * Chip组件的无障碍描述。此描述用于向用户详细解释当前组件，开发人员应为组件的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的结果。特别是当这些结果无法仅从组件的属性和无障碍文本中直接获知时。如果组件同时
   * 具备文本属性和无障碍说明属性，当组件被选中时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。
   *
   * 默认值：空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Chip组件无障碍重要性。用于控制后缀图标是否可被无障碍辅助服务所识别。
   *
   * 支持的值为:
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
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
   */
  accessibilitySelectedType?: AccessibilitySelectedType;

  /**
   * Chip组件文本与图标的最大的字体缩放倍数。
   *
   * 取值范围：[1, +∞)
   *
   * 设置的值小于1时，按值为1处理。异常值默认不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  maxFontScale?: double | Resource;

  /**
   * Chip组件文本与图标的最小的字体缩放倍数。
   *
   * 取值范围：[0, 1]
   *
   * 设置的值小于0时，按值为0处理。设置的值大于1时，按值为1处理。异常值默认不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  minFontScale?: double | Resource;

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
   * @since 23 static
   */
  padding?: LocalizedPadding;

  /**
   * 统一设置Chip组件的文本与图标的字体大小，不支持百分比。
   *
   * 该fontSize的优先级低于prefixSymbol、label、suffixSymbol和closeOptions中的fontSize属性。
   *
   * 默认值：
   *
   * - size为ChipSize.SMALL时，文本默认值：`$r('sys.float.chip_small_font_size')`；图标默认值：`$r('sys.float.chip_small_icon_size')`
   * - 其他情况下，文本默认值：`$r('sys.float.chip_normal_font_size')`；图标默认值：`$r('sys.float.chip_normal_icon_size')`
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontSize?: Dimension;
}

/**
*
 * @param { ChipOptions } options - 定义Chip组件的参数。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Builder
export declare function Chip(options: ChipOptions): void;