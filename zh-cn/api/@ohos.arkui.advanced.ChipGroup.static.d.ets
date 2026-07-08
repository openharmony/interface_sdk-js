
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

import { Component, BuilderParam, Builder, ResourceStr, SizeOptions, ResourceColor, VoidCallback, Length, Callback } from './@ohos.arkui.component';

import { PropRef, Require } from './@ohos.arkui.stateManagement';

import { ChipSize, ChipSymbolGlyphOptions, CloseOptions, ChipSuffixSymbolGlyphOptions } from './@ohos.arkui.advanced.Chip';

import { SymbolGlyphModifier } from './@ohos.arkui.modifier';

import uiMaterial from './@ohos.arkui.uiMaterial';

/**
* IconOptions定义图标的共通属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface IconOptions {

  /**
   * 图标图片或图片地址引用请参考[Image](docroot://reference/apis-arkui-static/arkui-ts/ts-basic-components-image.md#image-1)。
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
   * 默认值：undefined
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
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
 * @since 23 static
 * @noninterop
 */
export interface SuffixImageIconOptions extends IconOptions {

  /**
   * 后缀图标响应事件。
   *
   * 值为undefined时，无后缀图标响应事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
   */
  accessibilityText?: ResourceStr;

  /**
   * 后缀图标的无障碍描述。此描述用于向用户详细解释后缀图标，开发人员应为后缀图标的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果。特别是当这些后果无法仅从后缀图标的属性和无障碍文本中直接获知时。如果后缀
   * 图标同时具备文本属性和无障碍说明属性，当后缀图标被选中时，系统将首先播报后缀图标的文本属性，随后播报无障碍说明属性的内容。
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
   * 后缀图标无障碍重要性。用于控制后缀图标是否可被无障碍辅助服务所识别。
   *
   * 支持的值为:
   *
   * "auto"：后缀图标存在action时转化为“yes”，不存在action时，转化为“no”。
   *
   * "yes"：后缀图标可被无障碍辅助服务所识别。
   *
   * "no"：后缀图标不可被无障碍辅助服务所识别。
   *
   * "no-hide-descendants"：后缀图标及其所有子组件不可被无障碍辅助服务所识别。
   *
   * 默认值："auto"
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
* [ChipGroup]{@link ChipGroup}定义标签选项。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface ChipItemLabelOptions {

  /**
   * 文本内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  text: string;
}

/**
* ChipGroupItemOptions定义每个Chip的非通用属性。
*
* > **说明：**
* >
* > 当传入`suffixIcon`参数时，`allowClose`不生效；未传入`suffixIcon`参数时，`allowClose`决定是否显示移除图标。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface ChipGroupItemOptions {

  /**
   * 前缀Image图标属性。
   *
   * 默认值：没有前缀Image图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  prefixIcon?: IconOptions;

  /**
   * 前缀SymbolGlyph图标属性。
   *
   * 默认值：没有前缀SymbolGlyph图标。
   *
   * 值为undefined时，按默认值处理。
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
  label: ChipItemLabelOptions;

  /**
   * 后缀Image图标属性。
   *
   * 默认值：不显示后缀Image图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  suffixImageIcon?: SuffixImageIconOptions;

  /**
   * 后缀SymbolGlyph图标属性。
   *
   * 默认值：不显示后缀SymbolGlyph图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  suffixSymbol?: ChipSymbolGlyphOptions;

  /**
   * 后缀Symbol图标属性。
   *
   * 默认值：后缀Symbol图标无功能。
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
   * 删除图标是否显示。
   *
   * false表示删除图标不显示，true表示删除图标显示。
   *
   * 默认值：false
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
   * 默认删除图标的无障碍朗读功能属性。
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
   * ChipGroup中Chip项的无障碍描述。此描述用于向用户详细解释ChipGroup中Chip项，开发人员应为ChipGroup中Chip项的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的结果。特别是
   * 当这些结果无法仅从ChipGroup中Chip项的属性和无障碍文本中直接获知时。如果ChipGroup中Chip项同时具备文本属性和无障碍说明属性，当ChipGroup中Chip项被选中时，系统将首先播报ChipGroup中
   * Chip项的文本属性，随后播报无障碍说明属性的内容。
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
   * ChipGroup中Chip项无障碍重要性。用于控制ChipGroup中Chip项是否可被无障碍辅助服务所识别。
   *
   * 支持的值为:
   *
   * "auto"：ChipGroup中Chip项会转换为“yes”。
   *
   * "yes"：ChipGroup中Chip项可被无障碍辅助服务所识别。
   *
   * "no"：ChipGroup中Chip项不可被无障碍辅助服务所识别。
   *
   * "no-hide-descendants"：ChipGroup中Chip项及其所有子组件不可被无障碍辅助服务所识别。
   *
   * 默认值："auto"
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
}

/**
* ChipItemStyle定义了Chip的共通属性。
*
* > **说明：**
* >
* > 1. 操作块的大小有两种类型，一种是ChipSize，提供NORMAL和SMALL两种尺寸供选择；另一种是SizeOptions。
* >
* > 2. backgroundColor、selectedBackgroundColor传入undefined时，显示默认背景颜色，传入非法值时，背景色透明。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
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
   * @since 23 static
   * @noninterop
   */
  size?: ChipSize | SizeOptions;

  /**
   * Chip背景颜色。
   *
   * 默认值：$r('sys.color.ohos_id_color_button_normal')
   *
   * 为undefined时，backgroundColor走默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  backgroundColor?: ResourceColor;

  /**
   * Chip文字颜色。
   *
   * 默认值：$r('sys.color.ohos_id_color_text_primary')
   *
   * 为undefined时，fontColor走默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  fontColor?: ResourceColor;

  /**
   * Chip激活时的文字颜色。
   *
   * 默认值：$r('sys.color.ohos_id_color_text_primary_contrary')
   *
   * 为undefined时，selectedFontColor走默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedFontColor?: ResourceColor;

  /**
   * Chip激活时的背景颜色。
   *
   * 默认值：$r('sys.color.ohos_id_color_emphasize')
   *
   * 为undefined时，selectedBackgroundColor走默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedBackgroundColor?: ResourceColor;
}

/**
* ChipGroupSpaceOptions 定义了ChipGroup左右内边距，以及Chip与Chip之间的间距。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface ChipGroupSpaceOptions {

  /**
   * Chip与Chip之间的间距（不支持百分比）。
   *
   * 取值范围：
   *
   * number类型: ≥ 0 的数值（如：0、8、16、24.5）。
   *
   * string类型: 单位为fp|vp|px|lpx且数值部分 ≥ 0 的字符串（如："8vp"、"16fp"、"12px"、"10lpx"）。
   *
   * double类型: ≥ 0 的数值（如：0、8、16、24.5）。
   *
   * 不支持: 负数、百分比单位、无效字符串格式。
   *
   * 默认值：8
   *
   * 单位：vp
   *
   * 为undefined时，itemSpace采取默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  itemSpace?: string | double;

  /**
   * 左侧内边距（不支持百分比）。
   *
   * 默认值：16
   *
   * 单位：vp
   *
   * 为undefined时，startSpace取默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  startSpace?: Length;

  /**
   * 右侧内边距（不支持百分比）。
   *
   * 默认值：16
   *
   * 单位：vp
   *
   * 如果为undefined，则使用默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  endSpace?: Length;
}

/**
* 定义了尾部builder接口，针对背板大小及颜色设置限制。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface IconItemOptions {

  /**
   * 自定义Builder icon。
   *
   * Chip大小是ChipSize.SMALL时，suffix默认值：{width: 16,height: 16}。
   *
   * Chip大小是ChipSize.NORMAL时，suffix默认值：{width: 24,height: 24}。</br> 如果想动态修改size，那么必须在引入
   * [IconGroupSuffix]{@link IconGroupSuffix}时，使用
   * [SymbolGlyphModifier](docroot://reference/apis-arkui-static/arkui-ts/ts-universal-attributes-attribute-symbolglyphmodifier.md#symbolglyphmodifier)
   * 类型。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  icon: IconOptions;

  /**
   * 自定义Builder items的回调，尾部图标被点击时触发。
   *
   * 为undefined时，表示解绑事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  action: VoidCallback;

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
   * @since 23 static
   * @noninterop
   */
  accessibilityText?: ResourceStr;

  /**
   * 后缀图标的无障碍描述。此描述用于向用户详细解释后缀图标，开发人员应为后缀图标的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果。特别是当这些后果无法仅从后缀图标的属性和无障碍文本中直接获知时。如果后缀
   * 图标同时具备文本属性和无障碍说明属性，当后缀图标被选中时，系统将首先播报后缀图标的文本属性，随后播报无障碍说明属性的内容。
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
   * 尾部图标无障碍重要性。用于控制尾部图标是否可被无障碍辅助服务所识别。
   *
   * 支持的值为:
   *
   * "auto"：尾部图标转化为“yes”。
   *
   * "yes"：尾部图标可被无障碍辅助服务所识别。
   *
   * "no"：尾部图标不可被无障碍辅助服务所识别。
   *
   * "no-hide-descendants"：尾部图标及其所有子组件不可被无障碍辅助服务所识别。
   *
   * 默认值："auto"
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
}

/**
* ChipGroup的尾部图标选项类型。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface SymbolItemOptions {

  /**
   * 尾部图标的SymbolGlyphModifier配置对象，用于设置图标的显示样式、渲染模式等。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  symbol: SymbolGlyphModifier;

  /**
   * 尾部图标响应事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
   */
  accessibilityText?: ResourceStr;

  /**
   * 尾部图标的无障碍描述。此描述用于向用户详细解释尾部图标，开发人员应为尾部图标的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果。特别是当这些后果无法仅从尾部图标的属性和无障碍文本中直接获知时。如果尾部
   * 图标同时具备文本属性和无障碍说明属性，当尾部图标被选中时，系统将首先播报尾部图标的文本属性，随后播报无障碍说明属性的内容。
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
   * 尾部图标无障碍重要性。用于控制尾部图标是否可被无障碍辅助服务所识别。
   *
   * 支持的值为:
   *
   * "auto"：尾部图标转化为“yes”。
   *
   * "yes"：尾部图标可被无障碍辅助服务所识别。
   *
   * "no"：尾部图标不可被无障碍辅助服务所识别。
   *
   * "no-hide-descendants"：尾部图标及其所有子组件不可被无障碍辅助服务所识别。
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
}

/**
* ChipGroupPaddingOptions定义了ChipGroup的上下内边距，用于控制其整体高度。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface ChipGroupPaddingOptions {

  /**
   * ChipGroup的上方内边距（不支持百分比）。 单位：vp
   *
   * 默认值：14
   *
   * 为undefined时，top取默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  top: Length;

  /**
   * ChipGroup的下方内边距（不支持百分比）。 单位：vp
   *
   * 默认值：14
   *
   * 为undefined时，bottom取默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  bottom: Length;
}

/**
* Defines IconGroupSuffix.
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Component
export declare struct IconGroupSuffix {

  /**
   * 尾部区域显示的自定义项数组，支持IconItemOptions（Image图标）、SymbolGlyphModifier（Symbol图标）或SymbolItemOptions（Symbol图标配置）类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Require
  @PropRef
  items: Array<IconItemOptions | SymbolGlyphModifier | SymbolItemOptions>;

  /**
   * 设置IconGroup后缀背景系统材质。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @PropRef
  iconBackgroundSystemMaterial?: uiMaterial.Material;

  /**
   * build函数用于构造ChipGroup高级组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}

/**
* 用于构造chipGroup尾部图标的构造器。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Builder
export type ChipGroupSuffixBuilder = () => void;

/**
* ChipGroup组件提供操作块群组，用于文件或资源内容的分类等场景。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Component
export declare struct ChipGroup {

  /**
   * 每个[Chip](docroot://reference/apis-arkui-static/arkui-ts/ohos-arkui-advanced-Chip.md)的特定属性，参考
   * [ChipGroupItemOptions[]]{@link ChipGroupItemOptions}类型。
   *
   * 若为undefined时，ChipGroup默认为空。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Require
  @PropRef
  items: ChipGroupItemOptions[];

  /**
   * `Chip`的`style`属性，如颜色，大小等，参考[ChipItemStyle]{@link ChipItemStyle}类型。
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
   * @since 23 static
   * @noninterop
   */
  @PropRef
  itemStyle?: ChipItemStyle;

  /**
   * 被选中Chip的索引。
   *
   * 默认值：[0]
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @PropRef
  selectedIndexes?: Array<int>;

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
   * @since 23 static
   * @noninterop
   */
  @PropRef
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
   * @since 23 static
   * @noninterop
   */
  @PropRef
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
   * @since 23 static
   * @noninterop
   */
  @PropRef
  chipGroupPadding?: ChipGroupPaddingOptions;

  /**
   * 设置IconGroup后缀背景系统材质。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @PropRef
  backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * Set system-styled materials for the component when selected. Different materials have different effects,
   * which can influence the backgroundColor, border, shadow, and other visual attributes of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @PropRef
  selectedBackgroundSystemMaterial?: uiMaterial.Material;

  /**
   * Chip状态改变时的回调方法。
   *
   * 若为undefined，表示解绑事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  onChange?: Callback<Array<int>>;

  /**
   * 支持开发者自定义builder，如需在组件最右侧显示自定义内容可配置suffix属性，使用属性suffix需引用[IconGroupSuffix]{@link IconGroupSuffix}接口。
   *
   * 默认不传入时，没有suffix。
   *
   * 值为undefined时，没有suffix。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @BuilderParam
  suffix?: ChipGroupSuffixBuilder;

  /**
   * build函数用于构造ChipGroup高级组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}