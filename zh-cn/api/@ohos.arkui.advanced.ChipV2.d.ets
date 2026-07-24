/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 */

import { ColorMetrics, LengthMetrics, SizeT } from './@ohos.arkui.node';
import { ImageModifier, SymbolGlyphModifier, TextModifier } from './@ohos.arkui.modifier';
import uiMaterial from './@ohos.arkui.uiMaterial';

/**
 * ChipV2Size是ChipV2可指定的尺寸类型，如普通型ChipV2。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare enum ChipV2Size {
  /**
   * 普通尺寸ChipV2。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  NORMAL = 'NORMAL',

  /**
   * 小尺寸ChipV2。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  SMALL = 'SMALL',
}

/**
 * ChipV2AccessibilitySelectedType是ChipV2可指定的选中态类型，用于控制无障碍辅助服务如何向用户传达组件的选中状态。不同的选中态类型提供了不同的语义和用户体验。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare enum ChipV2AccessibilitySelectedType {
  /**
   * 单击型。组件不向无障碍辅助服务报告任何选中状态，仅作为可单击组件使用。适用于执行某个操作但不保持状态的场景，如普通按钮。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  CLICKED = 0,

  /**
   * 复选型。组件通过[accessibilityChecked]{@link CommonMethod#accessibilityChecked}属性向无障碍辅助服务报告选中状态。适用于多选场景，如标签筛选、属性选择等。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  CHECKED = 1,

  /**
   * 单选型。组件通过[accessibilitySelected]{@link CommonMethod#accessibilitySelected}属性向无障碍辅助服务报告选中状态。适用于表示当前选中项的场景，如导航栏标签、单选列表
   * 项等。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  SELECTED = 2
}

/**
 * ChipV2ImageIconConfig定义图标的通用属性配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipV2ImageIconConfig {
  /**
   * 图标图片或图片地址引用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  src: ResourceStr;

  /**
   * 图标大小，不支持百分比。传入百分比时按默认值处理。
   *
   * 默认值：
   *
   * - 当ChipV2Options.size为ChipV2Size.SMALL时，默认值为：{width: $r('sys.float.chip_small_icon_size'), height: $r('
   * sys.float.chip_small_icon_size')}。
   * - 当ChipV2Options.size为ChipV2Size.NORMAL时，默认值为：{width: $r('sys.float.chip_normal_icon_size'), height: $r('
   * sys.float.chip_normal_icon_size')}。
   *
   * 单位：vp
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  size?: SizeT<LengthMetrics>;

  /**
   * 图标填充颜色。
   *
   * 默认值：$r('sys.color.chip_usually_icon_color')，非SVG图片不应用默认值。
   *
   * 值为undefined时，按默认值处理。
   *
   * 仅在图片格式为SVG时，fillColor属性才生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fillColor?: ColorMetrics;

  /**
   * ChipV2激活时图标填充颜色。
   *
   * 默认值：$r('sys.color.chip_active_icon_color')，非SVG图片不应用默认值。
   *
   * 值为undefined时，按默认值处理。
   *
   * 仅在图片格式为SVG时，activatedFillColor属性才生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  activatedFillColor?: ColorMetrics;

  /**
   * 图标修饰器，用于设置图标的通用属性。当需要通过modifier动态修改图标属性（如opacity、objectFit等）时传入此参数。不传入或传入undefined时，不应用修饰器，图标使用默认属性设置。
   *
   * 默认值：undefined，不应用修饰器。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  modifier?: ImageModifier;
}

/**
 * ChipV2ImageIcon定义图标图片的基类。
 *
 * 继承自[ChipV2Icon]{@link ChipV2Icon}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export abstract class ChipV2ImageIcon extends ChipV2Icon {
  /**
   * 图标图片或图片地址引用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public src: ResourceStr;

  /**
   * 图标大小，不支持百分比。传入百分比时按默认值处理。
   *
   * 默认值：
   *
   * - 当ChipV2Options.size为ChipV2Size.SMALL时，默认值为：{width: $r('sys.float.chip_small_icon_size'), height: $r('
   * sys.float.chip_small_icon_size')}。
   * - 当ChipV2Options.size为ChipV2Size.NORMAL时，默认值为：{width: $r('sys.float.chip_normal_icon_size'), height: $r('
   * sys.float.chip_normal_icon_size')}。
   *
   * 单位：vp
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public size?: SizeT<LengthMetrics>;

  /**
   * 图标填充颜色。
   *
   * 默认值：$r('sys.color.chip_usually_icon_color')，非SVG图片不应用默认值。
   *
   * 值为undefined时，按默认值处理。
   *
   * 仅在图片格式为SVG时，fillColor属性才生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public fillColor?: ColorMetrics;

  /**
   * ChipV2激活时图标填充颜色。
   *
   * 默认值：$r('sys.color.chip_active_icon_color')，非SVG图片不应用默认值。
   *
   * 值为undefined时，按默认值处理。
   *
   * 仅在图片格式为SVG时，activatedFillColor属性才生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public activatedFillColor?: ColorMetrics;

  /**
   * 图标修饰器，用于设置图标的通用属性。当需要通过modifier动态修改图标属性（如opacity、objectFit等）时传入此参数。不传入或传入undefined时，不应用修饰器，图标使用默认属性设置。
   *
   * 默认值：undefined，不应用修饰器。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public modifier?: ImageModifier;

  /**
   * ChipV2ImageIcon的构造函数。
   *
   * @param { ChipV2ImageIconConfig } config - 图标共通属性配置，用于设置Image类型图标的基本显示属性，包含src、size、fillColor、activatedFillColor等配置
   *     项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(config: ChipV2ImageIconConfig);
}

/**
 * ChipV2SuffixImageIconConfig定义后缀图标的属性配置。
 *
 * 继承自[ChipV2ImageIconConfig]{@link ChipV2ImageIconConfig}和[ChipV2AccessibilityConfig]{@link ChipV2AccessibilityConfig}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipV2SuffixImageIconConfig extends ChipV2ImageIconConfig, ChipV2AccessibilityConfig {
  /**
   * 后缀图标点击事件回调函数。当需要为后缀图标绑定点击事件并执行自定义操作时传入此回调函数（如触发特定功能、打开弹窗等）。点击后缀图标时调用此回调函数。
   *
   * 默认值：undefined，不设定后缀图标事件。不传入或传入undefined时，点击后缀图标无自定义响应。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  action?: VoidCallback;
}

/**
 * ChipV2SuffixImageIcon定义后缀图标类。
 *
 * 继承自[ChipV2ImageIcon]{@link ChipV2ImageIcon}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipV2SuffixImageIcon extends ChipV2ImageIcon {
  /**
   * 无障碍重要性。用于控制后缀图标是否可被无障碍辅助服务所识别。
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
   * 默认值："auto"
   *
   * 值为undefined时，按默认值处理。
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityLevel?: string;

  /**
   * 无障碍文本属性。当组件无文本属性时，屏幕朗读选中此组件不会播报，导致使用者无法清楚了解当前选中的组件。开发人员可为此类组件设置无障碍文本，屏幕朗读时将播报该文本，帮助使用者明确选中了什么组件。
   *
   * 默认值：空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityText?: ResourceStr;

  /**
   * 无障碍描述。此描述用于向用户详细解释当前组件，开发人员应提供详尽的文本说明，以协助用户理解即将执行的操作及其后果。特别是当这些后果无法仅从组件的属性和无障碍文本中直接获知时。如果组件同时具备文本属性和无障碍说明属性，当组件被选中
   * 时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。
   *
   * 默认值：空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityDescription?: ResourceStr;

  /**
   * 后缀图标点击事件回调函数。当需要为后缀图标绑定点击事件并执行自定义操作时传入此回调函数（如触发特定功能、打开弹窗等）。点击后缀图标时调用此回调函数。
   *
   * 默认值：undefined，不设定后缀图标事件。不传入或传入undefined时，点击后缀图标无自定义响应。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public action?: VoidCallback;

  /**
   * ChipV2SuffixImageIcon的构造函数。
   *
   * @param { ChipV2SuffixImageIconConfig } config - 后缀图标属性配置，用于设置后缀Image图标的显示属性、无障碍功能和点击事件，继承自ChipV2ImageIconConfig和
   *     ChipV2AccessibilityConfig，包含src、size、accessibilityLevel、action等配置项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(config: ChipV2SuffixImageIconConfig);
}

/**
 * ChipV2Icon定义图标的基类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export abstract class ChipV2Icon {
  /**
   * ChipV2Icon的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor();
}

/**
 * ChipV2PrefixImageIconConfig定义前缀图标的属性配置。
 *
 * 继承自[ChipV2ImageIconConfig]{@link ChipV2ImageIconConfig}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipV2PrefixImageIconConfig extends ChipV2ImageIconConfig {}

/**
 * ChipV2PrefixImageIcon定义前缀图标类。
 *
 * 继承自[ChipV2ImageIcon]{@link ChipV2ImageIcon}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipV2PrefixImageIcon extends ChipV2ImageIcon {
  /**
   * ChipV2PrefixImageIcon的构造函数。
   *
   * @param { ChipV2PrefixImageIconConfig } config - 前缀图标属性配置，用于设置前缀Image图标的显示属性，继承自ChipV2ImageIconConfig，包含src、size、
   *     fillColor等配置项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(config: ChipV2PrefixImageIconConfig);
}

/**
 * ChipV2AccessibilityConfig定义无障碍属性配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipV2AccessibilityConfig {
  /**
   * 无障碍重要性。用于控制后缀图标是否可被无障碍辅助服务所识别。
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
   * 默认值："auto"
   *
   * 值为undefined时，按默认值处理。
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityLevel?: string;

  /**
   * 无障碍文本属性。当组件无文本属性时，屏幕朗读选中此组件不会播报，导致使用者无法清楚了解当前选中的组件。开发人员可为此类组件设置无障碍文本，屏幕朗读时将播报该文本，帮助使用者明确选中了什么组件。
   *
   * 默认值：空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * 无障碍描述。此描述用于向用户详细解释当前组件，开发人员应提供详尽的文本说明，以协助用户理解即将执行的操作及其后果。特别是当这些后果无法仅从组件的属性和无障碍文本中直接获知时。如果组件同时具备文本属性和无障碍说明属性，当组件被选中
   * 时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。
   *
   * 默认值：空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityDescription?: ResourceStr;
}

/**
 * ChipV2Accessibility定义无障碍属性类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipV2Accessibility {
  /**
   * 无障碍重要性。用于控制后缀图标是否可被无障碍辅助服务所识别。
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
   * 默认值："auto"
   *
   * 值为undefined时，按默认值处理。
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityLevel?: string;

  /**
   * 无障碍文本属性。当组件无文本属性时，屏幕朗读选中此组件不会播报，导致使用者无法清楚了解当前选中的组件。开发人员可为此类组件设置无障碍文本，屏幕朗读时将播报该文本，帮助使用者明确选中了什么组件。
   *
   * 默认值：空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityText?: ResourceStr;

  /**
   * 无障碍描述。此描述用于向用户详细解释当前组件，开发人员应提供详尽的文本说明，以协助用户理解即将执行的操作及其后果。特别是当这些后果无法仅从组件的属性和无障碍文本中直接获知时。如果组件同时具备文本属性和无障碍说明属性，当组件被选中
   * 时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。
   *
   * 默认值：空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityDescription?: ResourceStr;

  /**
   * ChipV2Accessibility的构造函数。
   *
   * @param { ChipV2AccessibilityConfig } config - 无障碍属性配置，用于设置组件的无障碍功能属性，包含accessibilityText、accessibilityDescription、
   *     accessibilityLevel等配置项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(config: ChipV2AccessibilityConfig);
}

/**
 * ChipV2CloseConfig用于定义ChipV2组件关闭图标的功能属性配置，包括无障碍功能属性。
 *
 * 继承自[ChipV2AccessibilityConfig]{@link ChipV2AccessibilityConfig}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipV2CloseConfig extends ChipV2AccessibilityConfig {
  /**
   * 设置ChipV2组件默认关闭图标的大小，不支持百分比。传入百分比时按默认值处理。
   *
   * 默认值：
   *
   * size为ChipV2Size.SMALL时，默认值：`$r('sys.float.chip_small_font_size')`。
   *
   * size不为ChipV2Size.SMALL时，默认值：`$r('sys.float.chip_normal_font_size')`
   *
   * 单位：fp
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fontSize?: LengthMetrics;
}

/**
 * ChipV2CloseIcon用于定义ChipV2组件关闭图标的功能属性类，包括无障碍功能属性。
 *
 * 继承自[ChipV2Accessibility]{@link ChipV2Accessibility}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipV2CloseIcon extends ChipV2Accessibility {
  /**
   * 设置ChipV2组件默认关闭图标的大小，不支持百分比。传入百分比时按默认值处理。
   *
   * 默认值：
   *
   * size为ChipV2Size.SMALL时，默认值：`$r('sys.float.chip_small_font_size')`。
   *
   * size不为ChipV2Size.SMALL时，默认值：`$r('sys.float.chip_normal_font_size')`
   *
   * 单位：fp
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public fontSize?: LengthMetrics;

  /**
   * ChipV2CloseIcon的构造函数。
   *
   * @param { ChipV2CloseConfig } config - 关闭图标配置，用于自定义关闭图标的大小和无障碍属性，继承自ChipV2AccessibilityConfig，包含fontSize、
   *     accessibilityText、accessibilityDescription等配置项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(config: ChipV2CloseConfig);
}

/**
 * ChipV2SymbolIconConfig定义Symbol图标的属性配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipV2SymbolIconConfig {
  /**
   * 非激活时图标设定。
   *
   * 默认值：不显示前缀图标或后缀图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * 不支持使用[SymbolEffect]{@link SymbolGlyphAttribute#symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)}修改动效类型及
   * [effectStrategy]{@link SymbolGlyphAttribute#effectStrategy}设置动效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  normal?: SymbolGlyphModifier;

  /**
   * 激活时图标设定。
   *
   * 默认值：不显示前缀图标或后缀图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * 不支持使用[SymbolEffect]{@link SymbolGlyphAttribute#symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)}修改动效类型及
   * [effectStrategy]{@link SymbolGlyphAttribute#effectStrategy}设置动效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  activated?: SymbolGlyphModifier;
}

/**
 * ChipV2SymbolIcon定义Symbol图标类。
 *
 * 继承自[ChipV2Icon]{@link ChipV2Icon}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export abstract class ChipV2SymbolIcon extends ChipV2Icon {
  /**
   * 非激活时图标设定。
   *
   * 默认值：不显示前缀图标或后缀图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * 不支持使用[SymbolEffect]{@link SymbolGlyphAttribute#symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)}修改动效类型及
   * [effectStrategy]{@link SymbolGlyphAttribute#effectStrategy}设置动效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public normal?: SymbolGlyphModifier;

  /**
   * 激活时图标设定。
   *
   * 默认值：不显示前缀图标或后缀图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * 不支持使用[SymbolEffect]{@link SymbolGlyphAttribute#symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)}修改动效类型及
   * [effectStrategy]{@link SymbolGlyphAttribute#effectStrategy}设置动效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public activated?: SymbolGlyphModifier;

  /**
   * ChipV2SymbolIcon的构造函数。
   *
   * @param { ChipV2SymbolIconConfig } config - Symbol图标属性配置，用于设置Symbol类型图标在不同状态下的显示属性，包含normal、activated等配置项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(config: ChipV2SymbolIconConfig);
}

/**
 * ChipV2PrefixSymbolIconConfig定义前缀Symbol图标的属性配置。
 *
 * 继承自[ChipV2SymbolIconConfig]{@link ChipV2SymbolIconConfig}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipV2PrefixSymbolIconConfig extends ChipV2SymbolIconConfig {}

/**
 * ChipV2PrefixSymbolIcon定义前缀Symbol图标类。
 *
 * 继承自[ChipV2SymbolIcon]{@link ChipV2SymbolIcon}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipV2PrefixSymbolIcon extends ChipV2SymbolIcon {
  /**
   * ChipV2PrefixSymbolIcon的构造函数。
   *
   * @param { ChipV2PrefixSymbolIconConfig } config - 前缀Symbol图标属性配置，用于设置前缀Symbol图标的显示属性，继承自ChipV2SymbolIconConfig，包含
   *     normal、activated等配置项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(config: ChipV2PrefixSymbolIconConfig);
}

/**
 * ChipV2SuffixSymbolIconConfig定义后缀Symbol图标的属性配置。
 *
 * 继承自[ChipV2SymbolIconConfig]{@link ChipV2SymbolIconConfig}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipV2SuffixSymbolIconConfig extends ChipV2SymbolIconConfig {
  /**
   * 非激活态无障碍朗读功能属性。
   *
   * 默认值：undefined，无朗读内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  normalAccessibility?: ChipV2AccessibilityConfig;

  /**
   * 激活态无障碍朗读功能属性。
   *
   * 默认值：undefined，无朗读内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  activatedAccessibility?: ChipV2AccessibilityConfig;

  /**
   * 后缀图标点击事件回调函数。点击后缀图标时调用此回调函数。
   *
   * 默认值：不设定后缀图标事件。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  action?: VoidCallback;
}

/**
 * ChipV2SuffixSymbolIcon定义后缀Symbol图标类。
 *
 * 继承自[ChipV2SymbolIcon]{@link ChipV2SymbolIcon}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipV2SuffixSymbolIcon extends ChipV2SymbolIcon {
  /**
   * 非激活态无障碍朗读功能属性。
   *
   * 默认值：undefined，无朗读内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public normalAccessibility?: ChipV2Accessibility;

  /**
   * 激活态无障碍朗读功能属性。
   *
   * 默认值：undefined，无朗读内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public activatedAccessibility?: ChipV2Accessibility;

  /**
   * 后缀图标点击事件回调函数。点击后缀图标时调用此回调函数。
   *
   * 默认值：不设定后缀图标事件。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public action?: VoidCallback;

  /**
   * ChipV2SuffixSymbolIcon的构造函数。
   *
   * @param { ChipV2SuffixSymbolIconConfig } config - 后缀Symbol图标属性配置，用于设置后缀Symbol图标的显示属性和无障碍功能，继承自ChipV2
   *     SymbolIconConfig，包含normal、activated、normalAccessibility、activatedAccessibility、action等配置项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(config: ChipV2SuffixSymbolIconConfig);
}

/**
 * ChipV2LabelMarginConfig定义文本与左右侧图标之间间距配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipV2LabelMarginConfig {
  /**
   * 文本与左侧图标之间间距，不支持百分比。传入百分比时按默认值处理。
   *
   * 默认值：
   *
   * 无左侧图标时，left默认值：0。
   *
   * 有左侧图标且size为ChipV2Size.SMALL时，left默认值：4。
   *
   * 有左侧图标且size为ChipV2Size.NORMAL时，left默认值：6。
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
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  left?: LengthMetrics;

  /**
   * 文本与右侧图标之间间距，不支持百分比。传入百分比时按默认值处理。
   *
   * 默认值：
   *
   * 无右侧图标时，right默认值：0。
   *
   * 有右侧图标且size为ChipV2Size.SMALL时，right默认值：4。
   *
   * 有右侧图标且size为ChipV2Size.NORMAL时，right默认值：6。
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
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  right?: LengthMetrics;
}

/**
 * ChipV2LocalizedLabelMarginConfig用于定义本地化文本与左右侧图标之间间距配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipV2LocalizedLabelMarginConfig {
  /**
   * 文本与起始侧图标之间间距，不支持百分比。传入百分比时按默认值处理。
   *
   * 默认值：
   *
   * size为ChipV2Size.SMALL时，start默认值：
   *
   * `LengthMetrics.resource($r('sys.float.chip_small_text_margin'))`。
   *
   * size为ChipV2Size.NORMAL时，start默认值：
   *
   * `LengthMetrics.resource($r('sys.float.chip_normal_text_margin'))`。
   *
   * 单位：vp
   *
   * 取值范围：[0, +∞)
   *
   * 超出取值范围按默认值处理。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  start?: LengthMetrics;

  /**
   * 文本与结束侧图标之间间距，不支持百分比。传入百分比时按默认值处理。
   *
   * 默认值：
   *
   * size为ChipV2Size.SMALL时，end默认值：
   *
   * `LengthMetrics.resource($r('sys.float.chip_small_text_margin'))`。
   *
   * size为ChipV2Size.NORMAL时，end默认值：
   *
   * `LengthMetrics.resource($r('sys.float.chip_normal_text_margin'))`。
   *
   * 单位：vp
   *
   * 取值范围：[0, +∞)
   *
   * 超出取值范围按默认值处理。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  end?: LengthMetrics;
}

/**
 * ChipV2LabelConfig定义文本属性配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipV2LabelConfig {
  /**
   * 文本文字内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  text: string;

  /**
   * 文字字号，不支持百分比。传入百分比时按默认值处理。
   *
   * 默认值：
   *
   * size为ChipV2Size.SMALL时，默认值：$r('sys.float.chip_small_font_size')。
   *
   * 其他情况下，默认值：$r('sys.float.chip_normal_font_size')
   *
   * 单位：fp
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fontSize?: LengthMetrics;

  /**
   * 文字颜色。
   *
   * 默认值：$r('sys.color.chip_font_color')
   *
   * 值为undefined时，按默认值处理。
   *
   * 值为非法值时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fontColor?: ColorMetrics;

  /**
   * ChipV2激活时的文字颜色。
   *
   * 默认值：$r('sys.color.chip_activated_fontcolor')
   *
   * 值为undefined时，按默认值处理。
   *
   * 值为非法值时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  activatedFontColor?: ColorMetrics;

  /**
   * 文字字体。
   *
   * 默认值："HarmonyOS Sans"
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fontFamily?: string;

  /**
   * 文本与左右侧图标之间间距。
   *
   * 默认值：
   *
   * size为ChipV2Size.SMALL时，默认值：{ left: 4, right: 4 }。
   *
   * size为ChipV2Size.NORMAL时，默认值：{ left: 6, right: 6 }。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  labelMargin?: ChipV2LabelMarginConfig;

  /**
   * 本地化文本与左右侧图标之间间距。
   *
   * 默认值：
   *
   * size为ChipV2Size.SMALL时，默认值：
   *
   * `{  start: LengthMetrics.resource($r('sys.float.chip_small_text_margin')),  end: LengthMetrics.resource($r('sys.float.chip_small_text_margin')) }`。
   *
   * size为ChipV2Size.NORMAL时，默认值：
   *
   * `{  start: LengthMetrics.resource($r('sys.float.chip_normal_text_margin')),  end: LengthMetrics.resource($r('sys.float.chip_normal_text_margin')) }`。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  localizedLabelMargin?: ChipV2LocalizedLabelMarginConfig;

  /**
   * 文本修饰器，用于设置文本的通用属性。当需要通过modifier动态修改文本属性（如fontWeight、fontStyle等）时传入此参数。不传入或传入undefined时，不应用修饰器，文本使用默认属性设置。
   *
   * 默认值：undefined，不应用修饰器。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  modifier?: TextModifier;
}

/**
 * ChipV2Label定义文本属性类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipV2Label {
  /**
   * 文本文字内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public text: string;

  /**
   * 文字字号，不支持百分比。传入百分比时按默认值处理。
   *
   * 默认值：
   *
   * size为ChipV2Size.SMALL时，默认值：$r('sys.float.chip_small_font_size')。
   *
   * 其他情况下，默认值：$r('sys.float.chip_normal_font_size')
   *
   * 单位：fp
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public fontSize?: LengthMetrics;

  /**
   * 文字颜色。
   *
   * 默认值：$r('sys.color.chip_font_color')
   *
   * 值为undefined时，按默认值处理。
   *
   * 值为非法值时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public fontColor?: ColorMetrics;

  /**
   * ChipV2激活时的文字颜色。
   *
   * 默认值：$r('sys.color.chip_activated_fontcolor')
   *
   * 值为undefined时，按默认值处理。
   *
   * 值为非法值时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public activatedFontColor?: ColorMetrics;

  /**
   * 文字字体。
   *
   * 默认值："HarmonyOS Sans"
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public fontFamily?: string;

  /**
   * 文本与左右侧图标之间间距。
   *
   * 默认值：
   *
   * size为ChipV2Size.SMALL时，默认值：{ left: 4, right: 4 }。
   *
   * size为ChipV2Size.NORMAL时，默认值：{ left: 6, right: 6 }。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public labelMargin?: ChipV2LabelMarginConfig;

  /**
   * 本地化文本与左右侧图标之间间距。
   *
   * 默认值：
   *
   * size为ChipV2Size.SMALL时，默认值：
   *
   * `{  start: LengthMetrics.resource($r('sys.float.chip_small_text_margin')),  end: LengthMetrics.resource($r('sys.float.chip_small_text_margin')) }`。
   *
   * size为ChipV2Size.NORMAL时，默认值：
   *
   * `{  start: LengthMetrics.resource($r('sys.float.chip_normal_text_margin')),  end: LengthMetrics.resource($r('sys.float.chip_normal_text_margin')) }`。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public localizedLabelMargin?: ChipV2LocalizedLabelMarginConfig;

  /**
   * 文本修饰器，用于设置文本的通用属性。当需要通过modifier动态修改文本属性（如fontWeight、fontStyle等）时传入此参数。不传入或传入undefined时，不应用修饰器，文本使用默认属性设置。
   *
   * 默认值：undefined，不应用修饰器。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public modifier?: TextModifier;

  /**
   * ChipV2Label的构造函数。
   *
   * @param { ChipV2LabelConfig } config - 文本属性配置，用于设置ChipV2的文本显示属性，包含text、fontSize、fontColor、activatedFontColor、
   *     fontFamily等配置项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(config: ChipV2LabelConfig);
}

/**
 * IChipV2OptionsConfig定义ChipV2选项的配置接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface IChipV2OptionsConfig {
  /**
   * ChipV2文本属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  label: ChipV2Label;

  /**
   * ChipV2前缀图标。
   *
   * 默认值：不显示前缀图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  prefixIcon?: ChipV2Icon;

  /**
   * ChipV2后缀图标。
   *
   * 默认值：不显示后缀图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * 说明：当suffixIcon有传入参数时，allowClose属性不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  suffixIcon?: ChipV2Icon;

  /**
   * 是否显示关闭图标。
   *
   * 当`suffixIcon`有传入参数时，`allowClose`不生效；`suffixIcon`没有传入参数时，`allowClose`决定是否显示关闭图标。
   *
   * 默认值：true
   *
   * true：关闭图标显示；false：关闭图标不显示。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  allowClose?: boolean;

  /**
   * 关闭图标的配置，包括无障碍属性配置。当需要自定义关闭图标的大小或无障碍属性时设置此属性。
   *
   * 默认值：
   *
   * - 尺寸默认值：size为ChipV2Size.SMALL时，默认值为`$r('sys.float.chip_small_font_size')`；其他情况默认值为
   * `$r('sys.float.chip_normal_font_size')`。
   * - 无障碍默认值：无无障碍描述。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  closeIcon?: ChipV2CloseIcon;

  /**
   * ChipV2是否可用。
   *
   * 默认值：true
   *
   * true：ChipV2可用；false：ChipV2不可用。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  enabled?: boolean;

  /**
   * ChipV2是否为激活态。
   *
   * 默认值：false
   *
   * true：ChipV2为激活态；false：ChipV2为非激活态。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  activated?: boolean;

  /**
   * ChipV2背景颜色。
   *
   * 默认值：$r('sys.color.chip_background_color')
   *
   * 值为undefined时，按默认值处理。
   *
   * 值为非法值时，背景颜色透明。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  backgroundColor?: ColorMetrics;

  /**
   * ChipV2激活时的背景颜色。
   *
   * 默认值：$r('sys.color.chip_container_activated_color')
   *
   * 值为undefined时，按默认值处理。
   *
   * 值为非法值时，背景颜色透明。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  activatedBackgroundColor?: ColorMetrics;

  /**
   * ChipV2背景圆角半径大小，不支持百分比。传入百分比时按默认值处理。
   *
   * 默认值：
   *
   * size为ChipV2Size.NORMAL时，borderRadius默认值为：`$r('sys.float.chip_border_radius_normal')`。
   *
   * size为ChipV2Size.SMALL时，borderRadius默认值为：`$r('sys.float.chip_border_radius_small')`
   *
   * 单位：vp
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  borderRadius?: LengthMetrics;

  /**
   * ChipV2尺寸。
   *
   * 默认值：ChipV2Size.NORMAL
   *
   * SizeT<LengthMetrics>类型参数不支持百分比设置，异常值按默认值处理。
   *
   * **说明**：[适老化](docroot://ui/arkui-support-for-aging-adaptation.md)在size指定具体宽高时不生效，size设置为{ height: 0, width: 0 }除外。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  size?: ChipV2Size | SizeT<LengthMetrics>;

  /**
   * 布局方向。
   *
   * 默认值：Direction.Auto
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  direction?: Direction;

  /**
   * ChipV2的无障碍描述。此描述用于向用户详细解释当前组件，开发人员应为组件的这一属性提供详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的结果，特别是当这些结果无法仅从组件的属性和无障碍文本中直接获知时。如果组件同时具备
   * 文本属性和无障碍说明属性，当组件被选中时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。
   *
   * 默认值：空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * ChipV2的无障碍重要性。用于控制组件是否可被无障碍辅助服务所识别。
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
   * 默认值："auto"
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityLevel?: string;

  /**
   * ChipV2组件选中态类型。
   *
   * 默认值：当activated属性为true但未指定accessibilitySelectedType时，默认使用CHECKED类型。当activated属性为false或未设置时，默认使用CLICKED类型。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilitySelectedType?: ChipV2AccessibilitySelectedType;

  /**
   * ChipV2组件文本与图标的最大字体缩放倍数。
   *
   * 取值范围：[1, +∞)
   *
   * 设置的值小于1时，按值为1处理。异常值默认不生效。
   *
   * 默认值：1。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  maxFontScale?: number | Resource;

  /**
   * ChipV2组件文本与图标的最小字体缩放倍数。
   *
   * 取值范围：[0, 1]
   *
   * 设置的值小于0时，按值为0处理。设置的值大于1时，按值为1处理。异常值默认不生效。
   *
   * 默认值：1。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  minFontScale?: number | Resource;

  /**
   * ChipV2的内边距。
   *
   * 默认值：
   *
   * - size为ChipV2Size.SMALL并且activated为true时，默认值：
   * `{  start: LengthMetrics.resource('sys.float.chip_activated_small_text_padding'),   end: LengthMetrics.resource('sys.float.chip_activated_small_text_padding'),  top: LengthMetrics.vp(4),  bottom: LengthMetrics.vp(4)}`。
   *
   * - size为ChipV2Size.SMALL并且activated为false时，默认值：
   * `{  start: LengthMetrics.resource('sys.float.chip_small_text_padding'),  end: LengthMetrics.resource('sys.float.chip_small_text_padding'),  top: LengthMetrics.vp(4),  bottom: LengthMetrics.vp(4)}`。
   *
   * - size不为ChipV2Size.SMALL并且activated为true时，默认值：
   * `{  start: LengthMetrics.resource('sys.float.chip_activated_normal_text_padding'),  end: LengthMetrics.resource('sys.float.chip_activated_normal_text_padding'),  top: LengthMetrics.vp(4),  bottom: LengthMetrics.vp(4)}`。
   *
   * - size不为ChipV2Size.SMALL并且activated为false时，默认值：
   * `{  start: LengthMetrics.resource('sys.float.chip_normal_text_padding'),  end: LengthMetrics.resource('sys.float.chip_normal_text_padding'),  top: LengthMetrics.vp(4),  bottom: LengthMetrics.vp(4)}`。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  padding?: LocalizedPadding;

  /**
   * 统一设置ChipV2组件的文本与图标的字体大小，不支持百分比。传入百分比时按默认值处理。
   *
   * 该fontSize的优先级低于prefixIcon、label、suffixIcon和closeIcon中的fontSize属性。
   *
   * 默认值：
   *
   * - size为ChipV2Size.SMALL时，文本默认值：`$r('sys.float.chip_small_font_size')`；图标默认值：`$r('sys.float.chip_small_icon_size')`。
   * - 其他情况下，文本默认值：`$r('sys.float.chip_normal_font_size')`；图标默认值：`$r('sys.float.chip_normal_icon_size')`
   *
   * 单位：fp
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fontSize?: LengthMetrics;

  /**
   * 设置组件系统材质样式。不同材质具有不同的效果，能够影响组件的背景色[backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、边框颜色
   * [borderColor]{@link CommonMethod#borderColor}、边框宽度[borderWidth]{@link CommonMethod#borderWidth}、阴影
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}效果、材质层滤镜效果
   * [materialFilter]{@link CommonMethod#materialFilter}。
   *
   * 默认值：undefined，不应用材质样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * 设置组件激活状态下的系统材质样式。不同材质具有不同的效果，能够影响组件的背景色[backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、
   * 边框颜色[borderColor]{@link CommonMethod#borderColor}、边框宽度[borderWidth]{@link CommonMethod#borderWidth}、阴影
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}效果、材质层滤镜效果
   * [materialFilter]{@link CommonMethod#materialFilter}。
   *
   * 默认值：undefined，不应用材质样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  activatedBackgroundSystemMaterial?: uiMaterial.Material;

  /**
   * 默认关闭图标点击事件回调函数。
   *
   * 当allowClose为true且suffixIcon没有传入参数时，点击关闭图标执行此回调函数。
   *
   * 默认值：不执行该回调函数。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onClose?: VoidCallback;

  /**
   * ChipV2点击事件回调函数。
   *
   * 当enabled为true时，点击ChipV2触发点击事件；当enabled为false时，不触发点击事件。
   *
   * 默认值：不执行该回调函数。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onClicked?: Callback<void>;
}

/**
 * ChipV2Options定义ChipV2的样式及具体样式参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export class ChipV2Options {
  /**
   * ChipV2前缀图标。
   *
   * 默认值：不显示前缀图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public label: ChipV2Label;

  /**
   * ChipV2前缀图标。
   *
   * 默认值：不显示前缀图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public prefixIcon?: ChipV2Icon;

  /**
   * ChipV2后缀图标。
   *
   * 默认值：不显示后缀图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * 说明：当suffixIcon有传入参数时，allowClose属性不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public suffixIcon?: ChipV2Icon;

  /**
   * 是否显示关闭图标。
   *
   * 当`suffixIcon`有传入参数时，`allowClose`不生效；`suffixIcon`没有传入参数时，`allowClose`决定是否显示关闭图标。
   *
   * 默认值：true
   *
   * true：关闭图标显示；false：关闭图标不显示。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public allowClose?: boolean;

  /**
   * 关闭图标的配置，包括无障碍属性配置。当需要自定义关闭图标的大小或无障碍属性时设置此属性。
   *
   * 默认值：
   *
   * - 尺寸默认值：size为ChipV2Size.SMALL时，默认值为`$r('sys.float.chip_small_font_size')`；其他情况默认值为
   * `$r('sys.float.chip_normal_font_size')`。
   * - 无障碍默认值：无无障碍描述。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public closeIcon?: ChipV2CloseIcon;

  /**
   * ChipV2是否可用。
   *
   * 默认值：true
   *
   * true：ChipV2可用；false：ChipV2不可用。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public enabled?: boolean;

  /**
   * ChipV2是否为激活态。
   *
   * 默认值：false
   *
   * true：ChipV2为激活态；false：ChipV2为非激活态。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public activated?: boolean;

  /**
   * ChipV2背景颜色。
   *
   * 默认值：$r('sys.color.chip_background_color')
   *
   * 值为undefined时，按默认值处理。
   *
   * 值为非法值时，背景颜色透明。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public backgroundColor?: ColorMetrics;

  /**
   * ChipV2激活时的背景颜色。
   *
   * 默认值：$r('sys.color.chip_container_activated_color')
   *
   * 值为undefined时，按默认值处理。
   *
   * 值为非法值时，背景颜色透明。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public activatedBackgroundColor?: ColorMetrics;

  /**
   * ChipV2背景圆角半径大小，不支持百分比。传入百分比时按默认值处理。
   *
   * 默认值：
   *
   * size为ChipV2Size.NORMAL时，borderRadius默认值为：`$r('sys.float.chip_border_radius_normal')`。
   *
   * size为ChipV2Size.SMALL时，borderRadius默认值为：`$r('sys.float.chip_border_radius_small')`
   *
   * 单位：vp
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public borderRadius?: LengthMetrics;

  /**
   * ChipV2尺寸。
   *
   * 默认值：ChipV2Size.NORMAL
   *
   * SizeT<LengthMetrics>类型参数不支持百分比设置，异常值按默认值处理。
   *
   * **说明**：[适老化](docroot://ui/arkui-support-for-aging-adaptation.md)在size指定具体宽高时不生效，size设置为{ height: 0, width: 0 }除外。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public size?: ChipV2Size | SizeT<LengthMetrics>;
  /**
   * 布局方向。
   *
   * 默认值：Direction.Auto
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public direction?: Direction;

  /**
   * ChipV2的无障碍描述。此描述用于向用户详细解释当前组件，开发人员应为组件的这一属性提供详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的结果，特别是当这些结果无法仅从组件的属性和无障碍文本中直接获知时。如果组件同时具备
   * 文本属性和无障碍说明属性，当组件被选中时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。
   *
   * 默认值：空字符串。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityDescription?: ResourceStr;

  /**
   * ChipV2的无障碍重要性。用于控制组件是否可被无障碍辅助服务所识别。
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
   * 默认值："auto"
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityLevel?: string;

  /**
   * ChipV2组件选中态类型。
   *
   * 默认值：当activated属性为true但未指定accessibilitySelectedType时，默认使用CHECKED类型。当activated属性为false或未设置时，默认使用CLICKED类型。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilitySelectedType?: ChipV2AccessibilitySelectedType;

  /**
   * ChipV2组件文本与图标的最大字体缩放倍数。
   *
   * 取值范围：[1, +∞)
   *
   * 设置的值小于1时，按值为1处理。异常值默认不生效。
   *
   * 默认值：1。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public maxFontScale?: number | Resource;
  /**
   * ChipV2组件文本与图标的最小字体缩放倍数。
   *
   * 取值范围：[0, 1]
   *
   * 设置的值小于0时，按值为0处理。设置的值大于1时，按值为1处理。异常值默认不生效。
   *
   * 默认值：1。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public minFontScale?: number | Resource;
  /**
   * ChipV2的内边距。
   *
   * 默认值：
   *
   * - size为ChipV2Size.SMALL并且activated为true时，默认值：
   * `{  start: LengthMetrics.resource('sys.float.chip_activated_small_text_padding'),   
   * end: LengthMetrics.resource('sys.float.chip_activated_small_text_padding'),  
   * top: LengthMetrics.vp(4),  bottom: LengthMetrics.vp(4)}`。
   *
   * - size为ChipV2Size.SMALL并且activated为false时，默认值：
   * `{  start: LengthMetrics.resource('sys.float.chip_small_text_padding'),  
   * end: LengthMetrics.resource('sys.float.chip_small_text_padding'),  
   * top: LengthMetrics.vp(4),  bottom: LengthMetrics.vp(4)}`。
   *
   * - size不为ChipV2Size.SMALL并且activated为true时，默认值：
   * `{  start: LengthMetrics.resource('sys.float.chip_activated_normal_text_padding'),  
   * end: LengthMetrics.resource('sys.float.chip_activated_normal_text_padding'),  
   * top: LengthMetrics.vp(4),  bottom: LengthMetrics.vp(4)}`。
   *
   * - size不为ChipV2Size.SMALL并且activated为false时，默认值：
   * `{  start: LengthMetrics.resource('sys.float.chip_normal_text_padding'),  
   * end: LengthMetrics.resource('sys.float.chip_normal_text_padding'),  
   * top: LengthMetrics.vp(4),  bottom: LengthMetrics.vp(4)}`。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public padding?: LocalizedPadding;

  /**
   * 统一设置ChipV2组件的文本与图标的字体大小，不支持百分比。传入百分比时按默认值处理。
   *
   * 该fontSize的优先级低于prefixIcon、label、suffixIcon和closeIcon中的fontSize属性。
   *
   * 默认值：
   *
   * - size为ChipV2Size.SMALL时，文本默认值：`$r('sys.float.chip_small_font_size')`；图标默认值：`$r('sys.float.chip_small_icon_size')`。
   * - 其他情况下，文本默认值：`$r('sys.float.chip_normal_font_size')`；图标默认值：`$r('sys.float.chip_normal_icon_size')`
   *
   * 单位：fp
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public fontSize?: LengthMetrics;

  /**
   * 设置组件系统材质样式。不同材质具有不同的效果，能够影响组件的背景色[backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、边框颜色
   * [borderColor]{@link CommonMethod#borderColor}、边框宽度[borderWidth]{@link CommonMethod#borderWidth}、阴影
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}效果、材质层滤镜效果
   * [materialFilter]{@link CommonMethod#materialFilter}。
   *
   * 默认值：undefined，不应用材质样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * 设置组件激活状态下的系统材质样式。不同材质具有不同的效果，能够影响组件的背景色[backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、
   * 边框颜色[borderColor]{@link CommonMethod#borderColor}、边框宽度[borderWidth]{@link CommonMethod#borderWidth}、阴影
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}效果、材质层滤镜效果
   * [materialFilter]{@link CommonMethod#materialFilter}。
   *
   * 默认值：undefined，不应用材质样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public activatedBackgroundSystemMaterial?: uiMaterial.Material;

  /**
   * 默认关闭图标点击事件回调函数。
   *
   * 当allowClose为true且suffixIcon没有传入参数时，点击关闭图标执行此回调函数。
   *
   * 默认值：不执行该回调函数。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  public onClose?: VoidCallback;

  /**
   * ChipV2点击事件回调函数。
   *
   * 当enabled为true时，点击ChipV2触发点击事件；当enabled为false时，不触发点击事件。
   *
   * 默认值：不执行该回调函数。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  public onClicked?: Callback<void>;

  /**
   * ChipV2Options的构造函数。
   *
   * @param { IChipV2OptionsConfig } config - ChipV2样式配置，用于自定义ChipV2组件的外观和行为，包含label、prefixIcon、suffixIcon、allowClose、
   *     activated、backgroundColor等配置项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(config: IChipV2OptionsConfig);
}

/**
 * ChipV2是提供丰富样式和交互能力的操作块组件，支持前缀图标、后缀图标、激活状态、关闭按钮等特性，支持Symbol和Image两种图标类型，并提供完善的无障碍访问能力。该组件适用于搜索历史记录、邮件发送列表、标签选择、过滤器、联系人
 * 展示等场景。
 *
 * 该组件基于[状态管理（V2）](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v2)实现，相较于
 * [状态管理（V1）](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v1)，状态管理（V2）增强了对数据对象的深度观察与管理能力，不再局限于组
 * 件层级。借助状态管理（V2），开发者可以更灵活地控制组件的数据和状态，实现更高效的用户界面刷新。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ComponentV2
export declare struct ChipV2 {
  /**
   * 定义ChipV2组件的参数，用于自定义ChipV2组件的外观和行为，包含label、prefixIcon、suffixIcon、allowClose、activated、backgroundColor、size等配置项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Require
  @Param
  readonly chipV2Options: ChipV2Options;

  /**
   * build函数用于构造ChipV2高级组件的UI结构。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  build(): void;
}