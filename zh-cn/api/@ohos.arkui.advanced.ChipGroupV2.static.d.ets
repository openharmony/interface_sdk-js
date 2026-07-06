
'use static';
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

import {
  BuilderParam, Builder, Callback, ComponentV2, ResourceStr, VoidCallback, Direction, Length
} from './@ohos.arkui.component';

import { SymbolGlyphModifier } from './@ohos.arkui.modifier';

import { Require, Param, ObservedV2, Trace, Event } from './@ohos.arkui.stateManagement';

import { ColorMetrics, LengthMetrics, SizeT } from './@ohos.arkui.node';

import uiMaterial from '@ohos.arkui.uiMaterial';

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
  ChipV2ImageIcon,
  ChipV2SuffixImageIcon,
  ChipV2PrefixImageIcon,
  ChipV2Label,
  ChipV2CloseIcon,
  ChipV2SymbolIcon,
  ChipV2PrefixSymbolIcon,
  ChipV2SuffixSymbolIcon
} from './@ohos.arkui.advanced.ChipV2';

/**
 * 定义chipV2 item配置
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipGroupV2ItemConfig {

  /**
   * 前缀图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  prefixIcon?: ChipV2PrefixImageIconConfig;

  /**
   * 前缀符号图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  prefixSymbolIcon?: ChipV2PrefixSymbolIconConfig;

  /**
   * 标签。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  label: ChipV2LabelConfig;

  /**
   * 后缀图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  suffixIcon?: ChipV2SuffixImageIconConfig;

  /**
   * 后缀符号图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  suffixSymbolIcon?: ChipV2SuffixSymbolIconConfig;

  /**
   * 是否展示关闭图标
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  allowClose?: boolean;

  /**
   * 当'allowClose'为true时，为默认关闭图标设置config。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  closeIcon?: ChipV2CloseConfig;

  /**
   * 设置ChipGroupV2项的无障碍功能描述。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  accessibilityDescription?: ResourceStr;

  /**
   * 设置ChipGroupV2项的无障碍重要性。
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  accessibilityLevel?: string;
}

/**
 * 每个ChipV2的非通用属性
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export declare class ChipGroupV2Item {

  /**
   * 前缀图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public prefixIcon?: ChipV2PrefixImageIcon;

  /**
   * 前缀符号图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public prefixSymbolIcon?: ChipV2PrefixSymbolIcon;

  /**
   * 标签。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public label: ChipV2Label;

  /**
   * 后缀图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public suffixIcon?: ChipV2SuffixImageIcon;

  /**
   * 后缀符号图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public suffixSymbolIcon?: ChipV2SuffixSymbolIcon;

  /**
   * 是否展示关闭图标
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public allowClose?: boolean;

  /**
   * 当'allowClose'为true时，为默认关闭图标设置config。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public closeIcon?: ChipV2CloseConfig;

  /**
   * 设置ChipGroupV2项的无障碍功能描述。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public accessibilityDescription?: ResourceStr;

  /**
   * 设置ChipGroupV2项的无障碍重要性。
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public accessibilityLevel?: string;

  /**
   * ChipGroupV2Item的构造函数
   *
   * @param { ChipGroupV2ItemConfig } config - ChipGroupV2每一项配置
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(config: ChipGroupV2ItemConfig);
}

/**
 * 定义ChipGroupV2每一项操作块
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export declare class ChipGroupV2Items extends Array<ChipGroupV2Item> {

  /**
   * ChipGroupV2Items的构造函数
   *
   * @param { ChipGroupV2ItemConfig[] } items - ChipGroupV2的配置数组
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(items: ChipGroupV2ItemConfig[]);
}

/**
 * 定义ChipV2的共通属性
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipGroupV2ItemStyleConfig {

  /**
   * ChipV2大小。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  size?: ChipV2Size | SizeT<LengthMetrics>;

  /**
   * ChipV2背景色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  backgroundColor?: ColorMetrics;

  /**
   * 文本字体颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  fontColor?: ColorMetrics;

  /**
   * 选定的文本字体颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  selectedFontColor?: ColorMetrics;

  /**
   * 选中的背景色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  selectedBackgroundColor?: ColorMetrics;

  /**
   * 设置组件的系统材质，不同的材质效果不同，会影响背景颜色，边框，阴影和组件的其它视觉属性
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * 选择时，为组件设置系统样式材质。不同的材料有不同的效果，
   * 它可以影响组件的背景颜色、边框、阴影和其他视觉属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  selectedBackgroundSystemMaterial?: uiMaterial.Material;
}

/**
 * 定义了ChipV2的共通属性
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export declare class ChipGroupV2ItemStyle {

  /**
   * ChipV2大小。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public size?: ChipV2Size | SizeT<LengthMetrics>;

  /**
   * ChipV2背景色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public backgroundColor?: ColorMetrics;

  /**
   * 文本字体颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public fontColor?: ColorMetrics;

  /**
   * 选定的文本字体颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public selectedFontColor?: ColorMetrics;

  /**
   * 选中的背景色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public selectedBackgroundColor?: ColorMetrics;

  /**
   * 设置组件的系统材质，不同的材质效果不同，会影响背景颜色，边框，阴影和组件的其它视觉属性
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * 选择时，为组件设置系统样式材质。不同的材料有不同的效果，
   * 它可以影响组件的背景颜色、边框、阴影和其他视觉属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public selectedBackgroundSystemMaterial?: uiMaterial.Material;

  /**
   * ChipGroupV2ItemStyle的构造函数
   *
   * @param { ChipGroupV2ItemStyleConfig } config - ChipV2的共通属性
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(config: ChipGroupV2ItemStyleConfig);
}

/**
 * 定义ChipGroup间距。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipGroupV2SpaceConfig {

  /**
   * ChipV2之间的间距。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  itemSpace?: Length;

  /**
   * 起始间距。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  startSpace?: Length;

  /**
   * 结束间距。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  endSpace?: Length;
}

/**
 * 定义ChipGroupV2间距类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export declare class ChipGroupV2Space {

  /**
   * ChipV2之间的间距。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public itemSpace?: Length;

  /**
   * 起始间距。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public startSpace?: Length;

  /**
   * 结束间距。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public endSpace?: Length;

  /**
   * ChipGroupV2Space的构造函数
   *
   * @param { ChipGroupV2SpaceConfig } config - ChipGroupV2的间距配置
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(config: ChipGroupV2SpaceConfig);
}

/**
 * 定义图标项配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipGroupV2IconItemConfig {

  /**
   * 图标配置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  icon: ChipV2ImageIconConfig;

  /**
   * 图标响应事件
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  action: Callback<void>;

  /**
   * 设置图标的无障碍文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  accessibilityText?: ResourceStr;

  /**
   * 图标的无障碍描述
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  accessibilityDescription?: ResourceStr;

  /**
   * 图标的无障碍重要性
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  accessibilityLevel?: string;

  /**
   * 图标响应事件
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  action: Callback<void>;
}

/**
 * 定义符号项配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipGroupV2SymbolItemConfig {

  /**
   * 设置符号。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  symbol: SymbolGlyphModifier;

  /**
   * 在单击符号图标时调用的响应事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  action: VoidCallback;

  /**
   * 设置符号的无障碍文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  accessibilityText?: ResourceStr;

  /**
   * 设置符号的无障碍描述。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  accessibilityDescription?: ResourceStr;

  /**
   * 设置符号的无障碍重要性
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  accessibilityLevel?: string;

  /**
   * 在单击符号图标时调用的响应事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  action: VoidCallback;
}

/**
 * 定义ChipGroupV2内边距配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipGroupV2PaddingConfig {

  /**
   * ChipGroupV2的顶部边距
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  top: Length;

  /**
   * ChipGroupV2的底部边距。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  bottom: Length;
}

/**
 * 定义ChipGroupV2内边距
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export declare class ChipGroupV2Padding {

  /**
   * ChipGroupV2的顶部边距
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public top: Length;

  /**
   * ChipGroupV2的底部边距。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public bottom: Length;

  /**
   * ChipGroupV2Padding的构造函数
   *
   * @param { ChipGroupV2PaddingConfig } config - ChipGroupV2的内边距
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(config: ChipGroupV2PaddingConfig);
}

/**
 * 定义后缀图标群
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ComponentV2
export declare struct ChipGroupV2IconGroupSuffix {

  /**
   * 后缀项
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Require
  @Param
  items: Array<ChipGroupV2IconItemConfig | SymbolGlyphModifier | ChipGroupV2SymbolItemConfig>;

  /**
   * IconGroup后缀后台系统素材。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Param
  iconBackgroundSystemMaterial?: uiMaterial.Material;

  /**
   * ChipGroupV2IconGroupSuffix的build函数
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Builder
  build(): void;
}

/**
 * 定义ChipGroupV2的后缀构造函数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@Builder
export type ChipGroupV2SuffixBuilder = () => void;

/**
 * 定义ChipGroupV2。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ComponentV2
export declare struct ChipGroupV2 {

  /**
   * 每个ChipV2的特定属性
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Require
  @Param
  items: ChipGroupV2Items;

  /**
   * ChipV2项目的双向绑定回调方法。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Event
  $items?: Callback<ChipGroupV2Items>;

  /**
   * ChipV2项样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Param
  itemStyle?: ChipGroupV2ItemStyle;

  /**
   * 选择的ChipV2索引。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Param
  selectedIndexes?: Array<int>;

  /**
   * 双向绑定回调方法，为选中的ChipV2项目索引。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Event
  $selectedIndexes?: Callback<Array<int>>;

  /**
   * 是否选中多个ChipV2
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Param
  multiple?: boolean;

  /**
   * 左右内边距及ChipV2之间间距
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Param
  chipGroupSpace?: ChipGroupV2Space;

  /**
   * 设置ChipGroupV2的上下内边距
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Param
  chipGroupPadding?: ChipGroupV2Padding;

  /**
   * ChipV2状态改变时的回调方法
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Event
  onChange?: Callback<Array<int>>;

  /**
   * 将在ChipGroupV2的后缀中渲染的构建器函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @BuilderParam
  suffix?: ChipGroupV2SuffixBuilder;

  /**
   * ChipGroupV2的build函数
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Builder
  build(): void;
}

export {
  ChipGroupV2,
  ChipGroupV2IconGroupSuffix,
  ChipGroupV2ItemConfig,
  ChipGroupV2Item,
  ChipGroupV2Items,
  ChipGroupV2ItemStyleConfig,
  ChipGroupV2ItemStyle,
  ChipGroupV2SpaceConfig,
  ChipGroupV2Space,
  ChipGroupV2IconItemConfig,
  ChipGroupV2SymbolItemConfig,
  ChipGroupV2PaddingConfig,
  ChipGroupV2Padding;