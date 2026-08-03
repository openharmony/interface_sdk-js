/*
* Copyright (C) 2024 Huawei Device Co., Ltd.
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

import { ChipSize, ChipSymbolGlyphOptions, CloseOptions, ChipSuffixSymbolGlyphOptions } from '@ohos.arkui.advanced.Chip';

import { SymbolGlyphModifier } from './@ohos.arkui.modifier';

import uiMaterial from './@ohos.arkui.uiMaterial';

/**
 * IconOptions定义图标的通用属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
export interface IconOptions {

  /**
   * 图标图片或图片地址引用请参考[Image](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-image.md#image-1)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  src: ResourceStr;

  /**
   * 图标大小，不支持百分比。当需要自定义图标尺寸时设置此参数。
   *
   * 默认值：
   *
   * - ChipItemStyle.size为ChipSize.SMALL时，默认值为：{width: $r('sys.float.chip_small_icon_size'), height: $r('
   * sys.float.chip_small_icon_size')}
   * - 其他情况下，默认值为：{width: $r('sys.float.chip_normal_icon_size'), height: $r('sys.float.chip_normal_icon_size')}
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  size?: SizeOptions;
}

/**
* 后缀图标选项的类型。
*
* 继承自[IconOptions]{@link IconOptions}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 * @noninterop
 */
export interface SuffixImageIconOptions extends IconOptions {

  /**
   * 后缀图标响应事件，用户点击后缀图标时触发回调。当需要为后缀图标添加自定义交互功能时设置此参数，如执行搜索、打开菜单、删除项等操作。
   *
   * 值为undefined时，无后缀图标响应事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  action?: VoidCallback;

  /**
   * 后缀图标的无障碍文本属性。用于为用户进一步说明后缀图标，开发人员可为后缀图标的该属性设置相对较详细的解释文本，帮助用户理解将要执行的操作。如帮助用户理解将要执行的操作可能导致什么后果，尤其是当这些后果无法从后缀图标本身属性与无障碍
   * 文本中了解到时。若后缀图标既拥有文本属性又拥有无障碍说明属性，则后缀图标被选中时，先播报后缀图标的文本属性，再播报无障碍说明属性的内容。
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
  accessibilityText?: ResourceStr;

  /**
   * 后缀图标的无障碍描述。此描述用于向用户详细解释后缀图标，开发人员应为后缀图标的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果，特别是当这些后果无法仅从后缀图标的属性和无障碍文本中直接获知时。如果后缀
   * 图标同时具备文本属性和无障碍说明属性，当后缀图标被选中时，系统将首先播报后缀图标的文本属性，随后播报无障碍说明属性的内容。
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
   * 后缀图标无障碍重要性。用于控制后缀图标是否可被无障碍辅助服务所识别。当需要为无障碍辅助服务用户提供访问支持，或需要将装饰性图标从无障碍树中排除时设置此参数。
   *
   * 支持的值为：
   *
   * "auto"：后缀图标存在action时转化为“yes”，不存在action时，转化为“no”，适用于大多数场景。
   *
   * "yes"：后缀图标可被无障碍辅助服务所识别，适用于功能性图标。
   *
   * "no"：后缀图标不可被无障碍辅助服务所识别，适用于纯装饰性图标。
   *
   * "no-hide-descendants"：后缀图标及其所有子组件不可被无障碍辅助服务所识别，适用于需要隐藏整个区域的场景。
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
   * @since 14 dynamic
   */
  accessibilityLevel?: string;
}

/**
 * LabelOptions定义文本属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
export interface LabelOptions {

  /**
   * Chip项显示的文本内容，用于设置Chip上展示的文字信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  text: string;
}

/**
* ChipGroupItemOptions定义每个Chip的非通用属性。
*
* > **说明：**
* >
 * > 当传入`suffixSymbol`参数时，`allowClose`不生效；当传入`suffixImageIcon`参数而`suffixSymbol`没有传入参数时，`allowClose`不生效；当`suffixSymbol`和
 * > `suffixImageIcon`都没有传入参数时，`allowClose`决定是否显示关闭图标。`suffixIcon`已废弃，请使用`suffixImageIcon`。
 * >
 * > `suffixSymbol`、`suffixImageIcon`均为后缀图标，同一Chip项中只能配置其中一个。若同时配置多个，仅优先级最高的生效（优先级：`suffixSymbol` > `suffixImageIcon`）。
 * > `suffixIcon`已废弃，建议使用`suffixImageIcon`替代。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
export interface ChipGroupItemOptions {

  /**
   * 前缀Image图标属性。当需要在Chip前显示图标以增强视觉识别或提供功能提示时设置此参数。
   *
   * 默认值：没有前缀Image图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  prefixIcon?: IconOptions;

  /**
   * 前缀SymbolGlyph图标属性。当需要在Chip前显示SymbolGlyph图标以增强视觉识别或提供功能提示时设置此参数。
   *
   * 默认值：没有前缀SymbolGlyph图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  prefixSymbol?: ChipSymbolGlyphOptions;

  /**
   * Chip项显示的文本内容，用于设置Chip上展示的文字信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  label: LabelOptions;

  /**
   * 后缀Image图标属性。当需要在Chip后显示Image图标以提供额外操作或状态提示时设置此参数。
   *
   * 默认值：不显示后缀Image图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * **说明**：当suffixIcon有传入参数时，allowClose不生效。
   *
   * **说明：** 从API version 12开始支持，从API version 14开始废弃。建议使用[suffixImageIcon]{@link SuffixImageIconOptions}替代。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   * @deprecated since 14
   * @useinstead ChipGroupItemOptions#suffixImageIcon
   */
  suffixIcon?: IconOptions;

  /**
   * 后缀Image图标属性。当需要在Chip后显示图标以提供额外操作或状态提示时设置此参数。
   *
   * **说明**：当suffixImageIcon有传入参数时，allowClose不生效；当suffixSymbol和suffixImageIcon同时配置时，仅suffixSymbol生效，suffixImageIcon不生效。
   *
   * 默认值：不显示后缀Image图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  suffixImageIcon?: SuffixImageIconOptions;

  /**
   * 后缀SymbolGlyph图标属性。当需要在Chip后显示SymbolGlyph图标以提供额外操作或状态提示时设置此参数。
   *
   * **说明**：当suffixSymbol有传入参数时，allowClose不生效。suffixSymbol与suffixImageIcon为互斥属性，同一Chip项中只能配置其中一个，若同时配置仅优先级最高的生效（优先级：
   * suffixSymbol > suffixImageIcon）。
   *
   * 默认值：不显示后缀SymbolGlyph图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  suffixSymbol?: ChipSymbolGlyphOptions;

  /**
   * 后缀Symbol图标属性，用于配置后缀Symbol图标的交互功能和无障碍属性。当需要为后缀Symbol图标添加点击事件或无障碍支持时设置此参数。
   *
   * 默认值：使用[ChipSuffixSymbolGlyphOptions]{@link @ohos.arkui.advanced.Chip:ChipSuffixSymbolGlyphOptions}的默认值。
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
   * false表示关闭图标不显示，true表示关闭图标显示。
   *
   * 当需要允许用户删除或移除Chip项时设置此参数为true，适用于编辑模式、可配置标签列表等场景。
   *
   * 默认值：false
   *
   * 值为undefined时，按默认值处理。
   *
   * **说明**：当suffixSymbol有传入参数时，allowClose不生效；当suffixSymbol没有传入参数而suffixIcon或suffixImageIcon有传入参数时，allowClose不生效；当
   * suffixSymbol、suffixIcon和suffixImageIcon都没有传入参数时，allowClose决定是否显示关闭图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  allowClose?: boolean;

  /**
   * 默认关闭图标的无障碍朗读功能和字体大小属性。当需要为关闭图标提供自定义的无障碍朗读内容和字体大小时设置此参数。
   *
   * 默认值：参考[CloseOptions]{@link @ohos.arkui.advanced.Chip:CloseOptions}中的默认配置。
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
   * ChipGroup中Chip项的无障碍描述。此描述用于向用户详细解释ChipGroup中Chip项，开发人员应为该Chip项的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的结果。特别是当这些结果无法仅从
   * 该Chip项的属性和无障碍文本中直接获知时。如果该Chip项同时具备label文本属性和无障碍说明属性，当其被选中时，系统将首先播报该Chip项的label文本属性，随后播报无障碍说明属性的内容。
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
   * ChipGroup中Chip项无障碍重要性。用于控制ChipGroup中Chip项是否可被无障碍辅助服务所识别。
   *
   * 支持的值为：
   *
   * "auto"：ChipGroup中Chip项会转换为“yes”，适用于大多数场景。
   *
   * "yes"：ChipGroup中Chip项可被无障碍辅助服务所识别，适用于需要明确启用无障碍访问的场景。
   *
   * "no"：ChipGroup中Chip项不可被无障碍辅助服务所识别，适用于纯装饰性图标的场景。
   *
   * "no-hide-descendants"：ChipGroup中Chip项及其所有子组件不可被无障碍辅助服务所识别，适用于需要隐藏整个区域的场景。
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
   * @since 14 dynamic
   */
  accessibilityLevel?: string;
}

/**
 * ChipItemStyle定义了Chip的通用属性。
 *
 * > **说明：**
 * >
 * > 1. Chip的大小有两种类型，一种是ChipSize，提供NORMAL和SMALL两种尺寸供选择；另一种是SizeOptions。
 * >
 * > 2. backgroundColor、selectedBackgroundColor传入undefined时，显示默认背景颜色，传入非法值时，背景色透明。
 * >
 * > 3. 从API版本26.0.0开始，backgroundSystemMaterial设置自动反色的系统材质时，fontColor使用系统预定义的可反色颜色资源（如`$r('sys.color.font_primary')`），颜色
 * > 自动适配到材质背景色的反色。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
export interface ChipItemStyle {

  /**
   * Chip尺寸，使用时需要从Chip组件引入ChipSize类型。
   *
   * 默认值：ChipSize.NORMAL或{ height: 0, width: 0 }
   *
   * 为undefined时，使用默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  size?: ChipSize | SizeOptions;

  /**
   * Chip背景颜色。
   *
   * 默认值：$r('sys.color.ohos_id_color_button_normal')
   *
   * **说明**：从API版本26.0.0开始，当设置backgroundSystemMaterial时，应将backgroundColor设为Color.Transparent，否则会与系统材质冲突；当
   * backgroundSystemMaterial为undefined时，backgroundColor属性生效。
   *
   * 为undefined时，backgroundColor走默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * Chip文字颜色。
   *
   * 默认值：$r('sys.color.ohos_id_color_text_primary')
   *
   * **说明**：从API版本26.0.0开始，backgroundSystemMaterial设置自动反色的系统材质时，fontColor使用系统预定义的可反色颜色资源，文字颜色自动适配到材质背景色的反色。
   *
   * 为undefined时，fontColor走默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontColor?: ResourceColor;

  /**
   * Chip激活时的文字颜色。
   *
   * 默认值：$r('sys.color.ohos_id_color_text_primary_contrary')
   *
   * **说明**：从API版本26.0.0开始，selectedBackgroundSystemMaterial设置自动反色的系统材质时，selectedFontColor使用系统预定义的可反色颜色资源（如
   * `$r('sys.color.font_primary')`），颜色自动适配到材质背景色的反色。
   *
   * 为undefined时，selectedFontColor走默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selectedFontColor?: ResourceColor;

  /**
   * Chip激活时的背景颜色。
   *
   * 默认值：$r('sys.color.ohos_id_color_emphasize')
   *
   * **说明**：从API版本26.0.0开始，当设置selectedBackgroundSystemMaterial时，应将selectedBackgroundColor设为Color.Transparent，否则会与系统材质冲突；
   * 当selectedBackgroundSystemMaterial为undefined时，selectedBackgroundColor属性生效。
   *
   * 为undefined时，selectedBackgroundColor走默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selectedBackgroundColor?: ResourceColor;
}

/**
* ChipGroupSpaceOptions 定义了ChipGroup左右内边距，以及Chip与Chip之间的间距。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
export interface ChipGroupSpaceOptions {

  /**
   * Chip与Chip之间的间距（不支持百分比）。
   *
   * 取值范围：
   *
   * number类型：大于等于0的数值（如：0、8、16、24.5）。
   *
   * string类型：单位为fp | vp | px | lpx且数值部分大于等于0的字符串（如："8vp"、"16fp"、"12px"、"10lpx"）。
   *
   * **说明**：传入负数、百分比或无效字符串格式时，使用默认值。
   *
   * 默认值：8
   *
   * 单位：vp
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  itemSpace?: string | number;

  /**
   * 左侧内边距（不支持百分比）。
   *
   * 传入负数、百分比或无效字符串格式时，使用默认值。
   *
   * 默认值：16
   *
   * 单位：vp
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  startSpace?: Length;

  /**
   * 右侧内边距（不支持百分比）。
   *
   * 传入负数、百分比或无效字符串格式时，使用默认值。
   *
   * 默认值：16
   *
   * 单位：vp
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  endSpace?: Length;
}

/**
 * 定义了尾部builder接口，用于配置尾部图标及其背景区域的显示属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
export interface IconItemOptions {

  /**
   * 自定义Builder icon。
   *
   * Chip大小是ChipSize.SMALL时，icon的size默认值：{width: '16vp',height: '16vp'}。
   *
   * Chip大小是ChipSize.NORMAL时，icon的size默认值：{width: '24vp',height: '24vp'}。
   *
   * 如果想动态修改size，那么必须在引入[IconGroupSuffix]{@link IconGroupSuffix}时，使用
   * [SymbolGlyphModifier]{@link ./arkui/SymbolGlyphModifier:SymbolGlyphModifier}类型。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  icon: IconOptions;

  /**
   * 尾部图标点击事件回调，用户点击尾部图标时触发。当需要为尾部图标添加自定义交互功能时设置此参数，如执行特定操作、打开界面等。
   *
   * 为undefined时，不触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  action: Callback<void>;

  /**
   * 后缀图标的无障碍文本属性。用于为用户进一步说明后缀图标，开发人员可为后缀图标的该属性设置相对较详细的解释文本，帮助用户理解将要执行的操作。如帮助用户理解将要执行的操作可能导致什么后果，尤其是当这些后果无法从后缀图标本身属性与无障碍
   * 文本中了解到时。若后缀图标既拥有文本属性又拥有无障碍说明属性，则后缀图标被选中时，先播报后缀图标的文本属性，再播报无障碍说明属性的内容。
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
  accessibilityText?: ResourceStr;

  /**
   * 后缀图标的无障碍描述。此描述用于向用户详细解释后缀图标，开发人员应为后缀图标的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果，特别是当这些后果无法仅从后缀图标的属性和无障碍文本中直接获知时。如果后缀
   * 图标同时具备文本属性和无障碍说明属性，当后缀图标被选中时，系统将首先播报后缀图标的文本属性，随后播报无障碍说明属性的内容。
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
   * 后缀图标无障碍重要性。用于控制后缀图标是否可被无障碍辅助服务所识别。当需要为无障碍辅助服务用户提供访问支持，或需要将装饰性图标从无障碍树中排除时设置此参数。
   *
   * 支持的值为：
   *
   * "auto"：后缀图标存在action时转化为“yes”，不存在action时，转化为“no”，适用于大多数场景。
   *
   * "yes"：后缀图标可被无障碍辅助服务所识别，适用于功能性图标。
   *
   * "no"：后缀图标不可被无障碍辅助服务所识别，适用于纯装饰性图标。
   *
   * "no-hide-descendants"：后缀图标及其所有子组件不可被无障碍辅助服务所识别，适用于需要隐藏整个区域的场景。
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
   * @since 14 dynamic
   */
  accessibilityLevel?: string;
}

/**
 * ChipGroup的后缀图标选项类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 14 dynamic
 * @noninterop
 */
export interface SymbolItemOptions {

  /**
   * 尾部图标的SymbolGlyphModifier配置对象，用于设置图标的显示样式、渲染模式等。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 14 dynamic
   */
  symbol: SymbolGlyphModifier;

  /**
   * 尾部图标响应事件，用户点击尾部图标时触发回调。当需要为尾部图标添加自定义交互功能时设置此参数，如执行特定操作、打开界面等。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  action: VoidCallback;

  /**
   * 尾部图标的无障碍文本属性。用于为用户进一步说明尾部图标，开发人员可为尾部图标的该属性设置相对较详细的解释文本，帮助用户理解将要执行的操作。如帮助用户理解将要执行的操作可能导致什么后果，尤其是当这些后果无法从尾部图标本身属性与无障碍
   * 文本中了解到时。若尾部图标既拥有文本属性又拥有无障碍说明属性，则尾部图标被选中时，先播报尾部图标的文本属性，再播报无障碍说明属性的内容。
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
  accessibilityText?: ResourceStr;

  /**
   * 尾部图标的无障碍描述。此描述用于向用户详细解释尾部图标，开发人员应为尾部图标的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果，特别是当这些后果无法仅从尾部图标的属性和无障碍文本中直接获知时。如果尾部
   * 图标同时具备文本属性和无障碍说明属性，当尾部图标被选中时，系统将首先播报尾部图标的文本属性，随后播报无障碍说明属性的内容。
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
   * 尾部图标无障碍重要性。用于控制尾部图标是否可被无障碍辅助服务所识别。当需要为无障碍辅助服务用户提供访问支持，或需要将装饰性图标从无障碍树中排除时设置此参数。
   *
   * 支持的值为：
   *
   * "auto"：尾部图标转化为“yes”，适用于大多数场景。
   *
   * "yes"：尾部图标可被无障碍辅助服务所识别，适用于需要明确启用无障碍访问的场景。
   *
   * "no"：尾部图标不可被无障碍辅助服务所识别，适用于纯装饰性图标的场景。
   *
   * "no-hide-descendants"：尾部图标及其所有子组件不可被无障碍辅助服务所识别，适用于需要隐藏整个区域的场景。
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
* ChipGroupPaddingOptions定义了ChipGroup的上下内边距，用于控制其整体高度。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
export interface ChipGroupPaddingOptions {

  /**
   * ChipGroup的上方内边距（不支持百分比）。
   *
   * 传入负数、百分比或无效字符串格式时，使用默认值。
   *
   * 默认值：14
   *
   * 单位：vp
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  top: Length;

  /**
   * ChipGroup的下方内边距（不支持百分比）。
   *
   * 传入负数、百分比或无效字符串格式时，使用默认值。
   *
   * 默认值：14
   *
   * 单位：vp
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  bottom: Length;
}

/**
 * ChipGroup组件提供操作块群组能力，支持单选或多选模式，可自定义样式、图标和间距，支持选中状态管理和事件回调。适用于文件分类、资源筛选、标签选择、内容分组等多种场景，帮助开发者快速实现选择功能，提供统一的视觉和交互体验。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
@Component
export declare struct IconGroupSuffix {

  /**
   * 尾部区域显示的自定义项数组，支持IconItemOptions（Image图标）、SymbolGlyphModifier（Symbol图标）或SymbolItemOptions（Symbol图标配置）类型。
   *
   * @type { Array<IconItemOptions | SymbolGlyphModifier> } [since 12 - 13]
   * @type { Array<IconItemOptions | SymbolGlyphModifier | SymbolItemOptions> } [since 14]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  @Require
  @Prop
  items: Array<IconItemOptions | SymbolGlyphModifier | SymbolItemOptions>;

  /**
   * 设置组件系统材质样式。不同材质具有不同的效果，能够影响组件的[backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、
   * [border]{@link CommonMethod#border}、[shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}视觉属性。设置自
   * 动反色的系统材质时，fontColor如果使用系统预定义的可反色颜色资源（如`$r('sys.color.font_primary')`），颜色自动适配到材质背景色的反色。
   *
   * 默认值：undefined
   *
   * 值为undefined时，不应用材质样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Prop
  iconBackgroundSystemMaterial?: uiMaterial.Material;
}

/**
 * ChipGroup组件提供操作块群组能力，支持单选或多选模式，可自定义样式、图标和间距，支持选中状态管理和事件回调。适用于文件分类、资源筛选、标签选择、内容分组等多种场景，帮助开发者快速实现选择功能，提供统一的视觉和交互体验。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
@Component
export declare struct ChipGroup {

  /**
   * 每个Chip的特定属性，参考[ChipGroupItemOptions[]]{@link ChipGroupItemOptions}类型。
   *
   * 若为undefined时，ChipGroup默认为空。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  @Require
  @Prop
  items: ChipGroupItemOptions[];

  /**
   * `Chip`的`style`属性，如颜色、大小等，参考[ChipItemStyle]{@link ChipItemStyle}类型。
   *
   * 默认值：
   *
   * {  size: ChipSize.NORMAL, backgroundColor: $r('sys.color.ohos_id_color_button_normal'), fontColor: $r('
   * sys.color.ohos_id_color_text_primary'), selectedFontColor: $r('sys.color.ohos_id_color_text_primary_contrary'),
   * selectedBackgroundColor: $r('sys.color.ohos_id_color_emphasize') }
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  @Prop
  itemStyle?: ChipItemStyle;

  /**
   * 被选中Chip的索引。
   *
   * 取值范围：索引值为非负整数，且不能超过items数组长度减1。
   *
   * 传入负数、超出数组范围的索引值或非整数时，该索引值不生效。
   *
   * 默认值：[0]
   *
   * 若multiple=false，selectedIndexes为空数组时默认选中第1个；selectedIndexes包含多个元素时仅第一个索引生效。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  @Prop
  selectedIndexes?: Array<number>;

  /**
   * 是否选中多个`Chip`。
   *
   * `true`：支持多个`Chip`选中；`false`：仅支持单个`Chip`选中。
   *
   * 默认值：`false`
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  @Prop
  multiple?: boolean;

  /**
   * 左右内边距及Chip之间间距。参考[ChipGroupSpaceOptions]{@link ChipGroupSpaceOptions}类型。
   *
   * 默认值：{ itemSpace: 8, startSpace: 16, endSpace: 16 }
   *
   * 单位：vp
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  @Prop
  chipGroupSpace?: ChipGroupSpaceOptions;

  /**
   * 设置ChipGroup的上下内边距，以控制整体高度。类型为[ChipGroupPaddingOptions]{@link ChipGroupPaddingOptions}。
   *
   * 默认值：{ top: 14, bottom: 14 }
   *
   * 单位：vp
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  @Prop
  chipGroupPadding?: ChipGroupPaddingOptions;

  /**
   * 设置组件系统材质样式。不同材质具有不同的效果，能够影响组件的[backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、
   * [border]{@link CommonMethod#border}、[shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}视觉属性。设置自
   * 动反色的系统材质时，fontColor如果使用系统预定义的可反色颜色资源（如`$r('sys.color.font_primary')`），颜色自动适配到材质背景色的反色。
   *
   * 默认值：undefined
   *
   * 值为undefined时，不应用材质样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Prop
  backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * 设置组件选中状态的系统材质样式。不同材质具有不同的效果，能够影响组件选中时的[backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、
   * [border]{@link CommonMethod#border}、[shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}视觉属性。设置自
   * 动反色的系统材质时，selectedFontColor如果使用系统预定义的可反色颜色资源（如`$r('sys.color.font_primary')`），颜色自动适配到材质背景色的反色。当设置
   * selectedBackgroundSystemMaterial时，应将selectedBackgroundColor设为Color.Transparent，否则会与系统材质冲突。
   *
   * 默认值：undefined
   *
   * 值为undefined时，不应用选中状态的材质样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Prop
  selectedBackgroundSystemMaterial?: uiMaterial.Material;

  /**
   * Chip状态改变时的回调方法，用于监听Chip选中状态的变更。该回调在selectedIndexes属性更新后触发，开发者可在回调中获取最新的选中状态并执行相应操作，如更新UI、保存选中数据、触发业务逻辑等。当需要响应Chip选中
   * 状态变化时传入此参数，不传入时不监听状态变化。
   *
   * 若为undefined，不触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onChange?: Callback<Array<number>>;

  /**
   * 支持开发者自定义builder，如需在组件最右侧显示自定义内容可配置suffix属性，使用属性suffix需引用[IconGroupSuffix]{@link IconGroupSuffix}接口。
   *
   * 默认不传入时，没有suffix。
   *
   * 值为undefined时，没有suffix。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  @BuilderParam
  suffix?: Callback<void>;
}