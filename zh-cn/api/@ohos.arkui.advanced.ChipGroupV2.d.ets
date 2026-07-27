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

import { ColorMetrics, LengthMetrics, SizeT } from '@ohos.arkui.node';
import { SymbolGlyphModifier } from './@ohos.arkui.modifier';
import {
  ChipV2Size,
  ChipV2ImageIconConfig,
  ChipV2SuffixImageIconConfig,
  ChipV2PrefixImageIconConfig,
  ChipV2LabelConfig,
  ChipV2CloseConfig,
  ChipV2SymbolIconConfig,
  ChipV2PrefixSymbolIconConfig,
  ChipV2SuffixSymbolIconConfig,
  ChipV2AccessibilityConfig,
  ChipV2ImageIcon,
  ChipV2SuffixImageIcon,
  ChipV2PrefixImageIcon,
  ChipV2Label,
  ChipV2CloseIcon,
  ChipV2SymbolIcon,
  ChipV2PrefixSymbolIcon,
  ChipV2SuffixSymbolIcon
} from '@ohos.arkui.advanced.ChipV2';
import uiMaterial from './@ohos.arkui.uiMaterial';

/**
* ChipGroupV2ItemConfig定义每个ChipV2的非通用属性配置。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipGroupV2ItemConfig {

  /**
   * 前缀Image图标属性，用于在ChipV2文本前显示Image图标。当需要在ChipV2左侧显示图标标识时设置此属性。
   *
   * 默认值：没有前缀Image图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  prefixIcon?: ChipV2PrefixImageIconConfig;

  /**
   * 前缀Symbol图标属性，用于在ChipV2文本前显示Symbol图标。当需要在ChipV2左侧显示Symbol图标标识时设置此属性。
   *
   * 默认值：没有前缀Symbol图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  prefixSymbolIcon?: ChipV2PrefixSymbolIconConfig;

  /**
   * 文本属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  label: ChipV2LabelConfig;

  /**
   * 后缀Image图标属性，用于在ChipV2文本后显示Image图标。设置该属性时，allowClose属性将不生效。
   *
   * 默认值：不显示后缀Image图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  suffixIcon?: ChipV2SuffixImageIconConfig;

  /**
   * 后缀Symbol图标属性，用于在ChipV2文本后显示Symbol图标。设置该属性时，allowClose属性将不生效。
   *
   * 默认值：不显示后缀Symbol图标。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  suffixSymbolIcon?: ChipV2SuffixSymbolIconConfig;

  /**
   * 关闭图标是否显示。取值原则：true表示关闭图标显示，false表示关闭图标不显示。
   *
   * 当传入suffixIcon或suffixSymbolIcon参数时，allowClose不生效；未传入suffixIcon和suffixSymbolIcon参数时，allowClose决定是否显示关闭图标。
   *
   * 默认值：false
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
   * - fontSize默认值：size为ChipV2Size.SMALL时，默认值为`$r('sys.float.chip_small_font_size')`；其他情况默认值为
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
  closeIcon?: ChipV2CloseConfig;

  /**
   * ChipGroupV2中ChipV2项的无障碍描述。此描述用于向用户详细解释ChipGroupV2中ChipV2项，开发人员应为ChipGroupV2中ChipV2项的属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及
   * 其可能产生的结果，特别是当这些结果无法仅从ChipGroupV2中ChipV2项的属性和无障碍文本中直接获知时。如果ChipGroupV2中ChipV2项同时具备文本属性和无障碍说明属性，当ChipGroupV2中ChipV2
   * 项被选中时，系统将首先播报ChipGroupV2中ChipV2项的文本属性，随后播报无障碍说明属性的内容。
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
   * ChipGroupV2中ChipV2项无障碍重要性。用于控制ChipGroupV2中ChipV2项是否可被无障碍辅助服务所识别。
   *
   * 支持的值为：
   *
   * "auto"：ChipGroupV2中ChipV2项会转换为"yes"。
   *
   * "yes"：ChipGroupV2中ChipV2项可被无障碍辅助服务所识别。
   *
   * "no"：ChipGroupV2中ChipV2项不可被无障碍辅助服务所识别。
   *
   * "no-hide-descendants"：ChipGroupV2中ChipV2项及其所有子组件不可被无障碍辅助服务所识别。
   * 
   * 传入不在支持范围内的值时，按默认值处理。
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
}

/**
 * ChipGroupV2Item定义了ChipGroupV2组件中的单个操作块项。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipGroupV2Item {
  /**
   * 前缀Image图标属性，用于在ChipV2文本前显示Image图标。当需要在ChipV2左侧显示图标标识时设置此属性。
   *
   * 默认值：没有前缀Image图标。
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
  public prefixIcon?: ChipV2PrefixImageIcon;

  /**
   * 前缀Symbol图标属性，用于在ChipV2文本前显示Symbol图标。当需要在ChipV2左侧显示Symbol图标标识时设置此属性。
   *
   * 默认值：没有前缀Symbol图标。
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
  public prefixSymbolIcon?: ChipV2PrefixSymbolIcon;

  /**
   * ChipV2文本属性。
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
   * 后缀Image图标属性，用于在ChipV2文本后显示Image图标。设置该属性时，allowClose属性将不生效。
   *
   * 默认值：不显示后缀Image图标。
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
  public suffixIcon?: ChipV2SuffixImageIcon;

  /**
   * 后缀Symbol图标属性，用于在ChipV2文本后显示Symbol图标。设置该属性时，allowClose属性将不生效。
   *
   * 默认值：不显示后缀Symbol图标。
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
  public suffixSymbolIcon?: ChipV2SuffixSymbolIcon;

  /**
   * 关闭图标是否显示。取值原则：true表示关闭图标显示，false表示关闭图标不显示。当传入suffixIcon或suffixSymbolIcon参数时，allowClose不生效；未传入suffixIcon和
   * suffixSymbolIcon参数时，allowClose决定是否显示关闭图标。
   *
   * 默认值：false
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
   * - fontSize默认值：size为ChipV2Size.SMALL时，默认值为`$r('sys.float.chip_small_font_size')`；其他情况默认值为
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
  public closeIcon?: ChipV2CloseConfig;

  /**
   * ChipGroupV2中ChipV2项的无障碍描述。此描述用于向用户详细解释ChipGroupV2中ChipV2项，开发人员应为ChipGroupV2中ChipV2项的属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及
   * 其可能产生的结果，特别是当这些结果无法仅从ChipGroupV2中ChipV2项的属性和无障碍文本中直接获知时。如果ChipGroupV2中ChipV2项同时具备文本属性和无障碍说明属性，当ChipGroupV2中ChipV2
   * 项被选中时，系统将首先播报ChipGroupV2中ChipV2项的文本属性，随后播报无障碍说明属性的内容。
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
   * ChipGroupV2中ChipV2项无障碍重要性。用于控制ChipGroupV2中ChipV2项是否可被无障碍辅助服务所识别。
   *
   * 支持的值为：
   *
   * "auto"：ChipGroupV2中ChipV2项会转换为"yes"。
   *
   * "yes"：ChipGroupV2中ChipV2项可被无障碍辅助服务所识别。
   *
   * "no"：ChipGroupV2中ChipV2项不可被无障碍辅助服务所识别。
   *
   * "no-hide-descendants"：ChipGroupV2中ChipV2项及其所有子组件不可被无障碍辅助服务所识别。
   * 
   * 传入不在支持范围内的值时，按默认值处理。
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
   * ChipGroupV2Item的构造函数。
   *
   * @param { ChipGroupV2ItemConfig } config - ChipGroupV2项配置。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(config: ChipGroupV2ItemConfig);
}

/**
 * ChipGroupV2Items定义了ChipGroupV2项的数组类，继承自Array<[ChipGroupV2Item]{@link ChipGroupV2Item}>。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipGroupV2Items extends Array<ChipGroupV2Item> {
  /**
   * ChipGroupV2Items的构造函数。
   *
   * @param { ChipGroupV2ItemConfig[] } items - ChipGroupV2项配置数组。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(items: ChipGroupV2ItemConfig[]);
}

/**
 * ChipGroupV2ItemStyleConfig定义了ChipV2的共通属性配置。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipGroupV2ItemStyleConfig {

  /**
   * ChipV2尺寸，使用时需要从ChipV2组件引入ChipV2Size类型。
   *
   * 默认值：ChipV2Size.NORMAL
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  size?: ChipV2Size | SizeT<LengthMetrics>;

  /**
   * ChipV2背景颜色。
   *
   * 默认值：$r('sys.color.ohos_id_color_button_normal')
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  backgroundColor?: ColorMetrics;

  /**
   * ChipV2文字颜色。
   *
   * 默认值：$r('sys.color.ohos_id_color_text_primary')
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fontColor?: ColorMetrics;

  /**
   * ChipV2选中时的文字颜色。设置后，当ChipV2被选中时，label文本会显示此颜色，替代未选中状态下的fontColor。
   *
   * 默认值：$r('sys.color.ohos_id_color_text_primary_contrary')
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  selectedFontColor?: ColorMetrics;

  /**
   * ChipV2选中时的背景颜色。设置后，当ChipV2被选中时，背景会填充此颜色，替代未选中状态下的backgroundColor。
   *
   * 默认值：$r('sys.color.ohos_id_color_emphasize')
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  selectedBackgroundColor?: ColorMetrics;

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
   * 设置组件选中状态下的系统材质样式。设置后，当ChipV2被选中时，应用此材质样式，替代未选中状态下的backgroundSystemMaterial。不同材质具有不同的效果，能够影响组件的背景色
   * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、边框颜色
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
  selectedBackgroundSystemMaterial?: uiMaterial.Material;
}

/**
 * ChipGroupV2ItemStyleConfig定义了ChipV2的共通属性配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipGroupV2ItemStyle {
  /**
   * ChipV2尺寸，使用时需要从ChipV2组件引入ChipV2Size类型。
   *
   * 默认值：ChipV2Size.NORMAL
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
  public size?: ChipV2Size | SizeT<LengthMetrics>;
  /**
   * ChipV2背景颜色。
   *
   * 默认值：$r('sys.color.ohos_id_color_button_normal')
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
  public backgroundColor?: ColorMetrics;

  /**
   * ChipV2文字颜色。
   *
   * 默认值：$r('sys.color.ohos_id_color_text_primary')
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
  public fontColor?: ColorMetrics;

  /**
   * ChipV2选中时的文字颜色。设置后，当ChipV2被选中时，label文本会显示此颜色，替代未选中状态下的fontColor。
   *
   * 默认值：$r('sys.color.ohos_id_color_text_primary_contrary')
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
  public selectedFontColor?: ColorMetrics;

  /**
   * ChipV2选中时的背景颜色。设置后，当ChipV2被选中时，背景会填充此颜色，替代未选中状态下的backgroundColor。
   *
   * 默认值：$r('sys.color.ohos_id_color_emphasize')
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
  public selectedBackgroundColor?: ColorMetrics;

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
   * 设置组件选中状态下的系统材质样式。设置后，当ChipV2被选中时，应用此材质样式，替代未选中状态下的backgroundSystemMaterial。不同材质具有不同的效果，能够影响组件的背景色
   * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、边框颜色
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
  public selectedBackgroundSystemMaterial?: uiMaterial.Material;

  /**
   * ChipGroupV2ItemStyle的构造函数。
   *
   * @param { ChipGroupV2ItemStyleConfig } config - ChipGroupV2项样式配置。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(config: ChipGroupV2ItemStyleConfig);
}

/**
 * ChipGroupV2SpaceConfig定义了ChipGroupV2左右内边距，以及ChipV2与ChipV2之间的间距配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipGroupV2SpaceConfig {

  /**
   * ChipV2与ChipV2之间的间距（不支持百分比）。
   *
   * 取值范围：
   *
   * - number类型：[0, +∞)，如0、8、16、24.5。
   * - string类型：单位为fp | vp | px | lpx且数值部分大于等于0的字符串，如"8vp"、"16fp"、"12px"、"10lpx"。
   * - 不支持：负数、百分比单位、无效字符串格式。
   * 
   * 传入不在取值范围内或不支持格式的值时，按默认值处理。
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
   * @since 26.0.0 dynamic
   */
  itemSpace?: string | number;

  /**
   * 左侧内边距（不支持百分比）。
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
   * @since 26.0.0 dynamic
   */
  startSpace?: Length;

  /**
   * 右侧内边距（不支持百分比）。
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
   * @since 26.0.0 dynamic
   */
  endSpace?: Length;
}

/**
 * ChipGroupV2Space定义了ChipGroupV2左右内边距，以及ChipV2与ChipV2之间的间距。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipGroupV2Space {
  /**
   * ChipV2与ChipV2之间的间距（不支持百分比）。
   *
   * 取值范围：
   *
   * - number类型：[0, +∞)，如0、8、16、24.5。
   * - string类型：单位为fp | vp | px | lpx且数值部分大于等于0的字符串，如"8vp"、"16fp"、"12px"、"10lpx"。
   * - 不支持：负数、百分比单位、无效字符串格式。
   *
   * 传入不在取值范围内或不支持格式的值时，按默认值处理。
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
   * @since 26.0.0 dynamic
   */
  @Trace
  public itemSpace?: string | number;
  /**
   * 左侧内边距（不支持百分比）。
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
   * @since 26.0.0 dynamic
   */
  @Trace
  public startSpace?: Length;

  /**
   * 右侧内边距（不支持百分比）。
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
   * @since 26.0.0 dynamic
   */
  @Trace
  public endSpace?: Length;

  /**
   * ChipGroupV2Space的构造函数。
   *
   * @param { ChipGroupV2SpaceConfig } config - ChipGroupV2间距配置。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(config: ChipGroupV2SpaceConfig);
}

/**
 * ChipGroupV2IconItemConfig定义了尾部图标项的配置，用于设置尾部图标的样式、交互和无障碍属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipGroupV2IconItemConfig {
  /**
   * 自定义尾部图标，设置后会在ChipGroupV2尾部区域显示指定的图标。
   *
   * 如果想动态修改图标尺寸，那么必须在引入[ChipGroupV2IconGroupSuffix]{@link ChipGroupV2IconGroupSuffix}时，使用
   * [SymbolGlyphModifier]{@link ./arkui/SymbolGlyphModifier:SymbolGlyphModifier}类型，并通过该类型提供的方法设置图标尺寸属性，例如通过fontSize或
   * size方法动态调整尺寸值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  icon: ChipV2ImageIconConfig;

  /**
   * 自定义尾部图标的响应事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  action: Callback<void>;

  /**
   * 尾部图标的无障碍文本属性。用于为用户进一步说明尾部图标，开发人员可为尾部图标的该属性设置相对较详细的解释文本，帮助用户理解将要执行的操作。例如，帮助用户理解将要执行的操作可能导致什么后果，尤其是当这些后果无法从尾部图标本身属性
   * 与无障碍文本中了解到时。若尾部图标既拥有文本属性又拥有无障碍说明属性，则尾部图标被选中时，先播报尾部图标的文本属性，再播报无障碍说明属性的内容。
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
   * 尾部图标的无障碍描述。此描述用于向用户详细解释尾部图标，开发人员应为尾部图标的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果，特别是当这些后果无法仅从尾部图标的属性和无障碍文本中直接获知时。如果
   * 尾部图标同时具备文本属性和无障碍说明属性，当尾部图标被选中时，系统将首先播报尾部图标的文本属性，随后播报无障碍说明属性的内容。
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
   * 尾部图标无障碍重要性。用于控制尾部图标是否可被无障碍辅助服务所识别。
   *
   * 支持的值为：
   *
   * "auto"：尾部图标转换为"yes"。
   *
   * "yes"：尾部图标可被无障碍辅助服务所识别。
   *
   * "no"：尾部图标不可被无障碍辅助服务所识别。
   *
   * "no-hide-descendants"：尾部图标及其所有子组件不可被无障碍辅助服务所识别。
   * 
   * 传入不在支持范围内的值时，按默认值处理。
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
}

/**
 * ChipGroupV2SymbolItemConfig定义了尾部Symbol图标的配置类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipGroupV2SymbolItemConfig {
  /**
   * 尾部图标的SymbolGlyphModifier配置对象，设置后会在ChipGroupV2尾部区域显示指定的Symbol图标，支持配置显示样式、渲染模式、颜色等属性。
   * 
   * **说明：** 传参SymbolGlyphModifier时，不支持使用symbolEffect修改动效类型和
   * [effectStrategy]{@link SymbolGlyphAttribute#effectStrategy}设置动效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  symbol: SymbolGlyphModifier;

  /**
   * 尾部图标响应事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  action: VoidCallback;

  /**
   * 尾部图标的无障碍文本属性。用于为用户进一步说明尾部图标，开发人员可为尾部图标的该属性设置相对较详细的解释文本，帮助用户理解将要执行的操作。例如，帮助用户理解将要执行的操作可能导致什么后果，尤其是当这些后果无法从尾部图标本身属性
   * 与无障碍文本中了解到时。若尾部图标既拥有文本属性又拥有无障碍说明属性，则尾部图标被选中时，先播报尾部图标的文本属性，再播报无障碍说明属性的内容。
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
   * 尾部图标的无障碍描述。此描述用于向用户详细解释尾部图标，开发人员应为尾部图标的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的后果，特别是当这些后果无法仅从尾部图标的属性和无障碍文本中直接获知时。如果
   * 尾部图标同时具备文本属性和无障碍说明属性，当尾部图标被选中时，系统将首先播报尾部图标的文本属性，随后播报无障碍说明属性的内容。
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
   * 尾部图标无障碍重要性。用于控制尾部图标是否可被无障碍辅助服务所识别。
   *
   * 支持的值为：
   *
   * "auto"：尾部图标转换为"yes"。
   *
   * "yes"：尾部图标可被无障碍辅助服务所识别。
   *
   * "no"：尾部图标不可被无障碍辅助服务所识别。
   *
   * "no-hide-descendants"：尾部图标及其所有子组件不可被无障碍辅助服务所识别。
   *
   * 传入不在支持范围内的值时，按默认值处理。
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
}

/**
 * ChipGroupV2PaddingConfig定义了ChipGroupV2的上下内边距配置，用于控制其整体高度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipGroupV2PaddingConfig {
  /**
   * ChipGroupV2的上方内边距（不支持百分比）。
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
   * @since 26.0.0 dynamic
   */
  top: Length;

  /**
   * ChipGroupV2的下方内边距（不支持百分比）。
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
   * @since 26.0.0 dynamic
   */
  bottom: Length;
}

/**
 * ChipGroupV2Padding定义了ChipGroupV2的上下内边距，用于控制其整体高度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipGroupV2Padding {
  /**
   * ChipGroupV2的上方内边距（不支持百分比）。
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
   * @since 26.0.0 dynamic
   */
  @Trace
  public top: Length;

  /**
   * ChipGroupV2的下方内边距（不支持百分比）。
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
   * @since 26.0.0 dynamic
   */
  @Trace
  public bottom: Length;

  /**
   * ChipGroupV2Padding的构造函数。
   *
   * @param { ChipGroupV2PaddingConfig } config - ChipGroupV2内边距配置。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(config: ChipGroupV2PaddingConfig);
}

/**
 * ChipGroupV2组件提供操作块群组容器，支持单选或多选、自定义样式和间距、以及尾部自定义内容。该组件适用于文件或资源内容的分类、标签选择、筛选等场景，可帮助开发者快速构建美观且交互丰富的标签组界面。
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
 * @noninterop
 */
@ComponentV2
export declare struct ChipGroupV2IconGroupSuffix {
  /**
   * 尾部区域显示的自定义项数组，支持ChipGroupV2IconItemConfig（Image图标）、SymbolGlyphModifier（Symbol图标）或ChipGroupV2SymbolItemConfig（Symbol
   * 图标配置）类型。
   *
   * 传参SymbolGlyphModifier时，不支持使用symbolEffect修改动效类型和[effectStrategy]{@link SymbolGlyphAttribute#effectStrategy}设置动效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   * @noninterop
   */
  @Require
  @Param
  items: Array<ChipGroupV2IconItemConfig | SymbolGlyphModifier | ChipGroupV2SymbolItemConfig>;

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
   * @noninterop
   */
  @Param
  iconBackgroundSystemMaterial?: uiMaterial.Material;

  /**
   * build函数用于构造ChipGroupV2IconGroupSuffix组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   * @noninterop
   */
  build(): void;
}

/**
 * ChipGroupV2组件提供操作块群组容器，支持单选或多选、自定义样式和间距、以及尾部自定义内容。该组件适用于文件或资源内容的分类、标签选择、筛选等场景，可帮助开发者快速构建美观且交互丰富的标签组界面。
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
export declare struct ChipGroupV2 {

  /**
   * 每个ChipV2的特定属性，参考[ChipGroupV2ItemConfig]{@link ChipGroupV2ItemConfig}类型。
   *
   * 值为undefined或空数组时，ChipGroupV2不渲染内部的[ChipV2]{@link @ohos.arkui.advanced.ChipV2}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Require
  @Param
  items: ChipGroupV2Items;

  /**
   * ChipV2项的双向绑定回调方法，当需要监听或修改ChipV2项列表时传入此回调。
   *
   * 默认值：undefined，不触发回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Event
  $items?: Callback<ChipGroupV2Items>;

  /**
   * ChipV2的style属性，如颜色、大小等，参考[ChipGroupV2ItemStyle]{@link ChipGroupV2ItemStyle}类型。
   *
   * 默认值：
   *
   * { size: ChipV2Size.NORMAL, backgroundColor: $r('sys.color.ohos_id_color_button_normal'), fontColor: $r('
   * sys.color.ohos_id_color_text_primary'), selectedFontColor: $r('sys.color.ohos_id_color_text_primary_contrary'), 
   * selectedBackgroundColor: $r('sys.color.ohos_id_color_emphasize') }
   *
   * 值为undefined时，按默认值处理。
   *
   * 图标填充色（[fillColor]{@link @ohos.arkui.advanced.ChipV2:ChipV2ImageIconConfig}和
   * [activatedFillColor]{@link @ohos.arkui.advanced.ChipV2:ChipV2ImageIconConfig}）的设置与对应的字体颜色保持一致：未选中状态下fillColor与
   * [fontColor]{@link ChipGroupV2ItemStyleConfig}保持一致，选中状态下activatedFillColor与
   * [selectedFontColor]{@link ChipGroupV2ItemStyleConfig}保持一致。如果需要设置不同的颜色，可以在传入items时使用
   * [prefixSymbolIcon]{@link ChipGroupV2ItemConfig}和[suffixSymbolIcon]{@link ChipGroupV2ItemConfig}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  itemStyle?: ChipGroupV2ItemStyle;

  /**
   * 被选中ChipV2的索引。
   *
   * 取值范围：索引值必须为大于等于0且小于items数组长度的整数。传入不在取值范围内的索引时，该索引不生效。
   * 
   * 默认值：[0]
   *
   * 值为undefined时，按默认值处理。
   *
   * 当multiple等于false时，如果没有传入selectedIndexes，默认是第一个ChipV2被选中，如果传入的selectedIndexes有多个元素时，默认第一个索引的ChipV2被选中。
   * 
   * 当multiple等于true时，如果没有传入selectedIndexes，默认第一个ChipV2被选中；如果传入的selectedIndexes有多个元素时，所有对应索引的ChipV2均被选中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  selectedIndexes?: Array<number>;

  /**
   * 被选中ChipV2索引的双向绑定回调方法，当需要监听或修改选中的ChipV2索引时传入此回调。
   *
   * 默认值：undefined，不触发回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Event
  $selectedIndexes?: Callback<Array<number>>;

  /**
   * 是否选中多个ChipV2。
   *
   * true：支持多个ChipV2选中；false：仅支持单个ChipV2选中。
   *
   * 默认值：false
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  multiple?: boolean;

  /**
   * 左右内边距及ChipV2之间间距。设置后可调整ChipGroupV2的左右内边距和ChipV2之间的间距，增大间距使布局更宽松，减小间距使布局更紧凑。参考
   * [ChipGroupV2Space]{@link ChipGroupV2Space}类型。
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
   * @since 26.0.0 dynamic
   */
  @Param
  chipGroupSpace?: ChipGroupV2Space;

  /**
   * 设置ChipGroupV2的上下内边距，以控制整体高度。类型为[ChipGroupV2Padding]{@link ChipGroupV2Padding}。
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
   * @since 26.0.0 dynamic
   */
  @Param
  chipGroupPadding?: ChipGroupV2Padding;

  /**
   * ChipV2状态改变时的回调方法，用于响应ChipV2选中状态变化。当需要监听ChipV2选中状态改变时传入此回调。
   * 
   * 触发场景：用户点击ChipV2改变选中状态时触发，返回当前选中ChipV2的索引数组。
   *
   * 默认值：undefined，不触发事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Event
  onChange?: Callback<Array<number>>;

  /**
   * 支持开发者自定义builder，如需在组件最右侧显示自定义内容可配置suffix属性，使用属性suffix需引用
   * [ChipGroupV2IconGroupSuffix]{@link ChipGroupV2IconGroupSuffix}接口。
   *
   * 默认值：undefined，不在最右侧显示自定义内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @BuilderParam
  suffix?: Callback<void>;

  /**
   * build函数用于构造ChipGroupV2高级组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   * @noninterop
   */
  build(): void;
}