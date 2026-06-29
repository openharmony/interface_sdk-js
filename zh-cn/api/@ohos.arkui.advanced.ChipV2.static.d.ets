
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
    Builder, Callback, ComponentV2, LocalizedPadding, Resource, ResourceStr, VoidCallback, Direction
} from './@ohos.arkui.component';

import { ImageModifier, SymbolGlyphModifier, TextModifier } from './@ohos.arkui.modifier';

import { Require, Param, ObservedV2, Trace } from './@ohos.arkui.stateManagement';

import { ColorMetrics, LengthMetrics, SizeT } from './@ohos.arkui.node';

import uiMaterial from '@ohos.arkui.uiMaterial';

/**
 * ChipV2Size枚举
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export declare enum ChipV2Size {

  /**
   * 正常类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  NORMAL = 'NORMAL',

  /**
   * 小型类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SMALL = 'SMALL',
}

/**
 * ChipV2AccessibilitySelectedType的枚举
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export declare enum ChipV2AccessibilitySelectedType {

  /**
   * 单击型
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  CLICKED = 0,

  /**
   * 复选型
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  CHECKED = 1,

  /**
   * 单选型
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SELECTED = 2
}

/**
 * 定义图标公共配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipV2ImageIconConfig {

  /**
   * 图片资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  src: ResourceStr;

  /**
   * 图片大小配置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  size?: SizeT<LengthMetrics>;

  /**
   * 图像填充颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  fillColor?: ColorMetrics;

  /**
   * 激活时的图像填充颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  activatedFillColor?: ColorMetrics;

  /**
   * 图标的modifier。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  modifier?: ImageModifier;
}

/**
 * 定义ChipV2的图片图标选项
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export declare class ChipV2ImageIcon extends ChipV2Icon {

  /**
   * 图片资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public src: ResourceStr;

  /**
   * 图片大小配置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public size?: SizeT<LengthMetrics>;

  /**
   * 图像填充颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public fillColor?: ColorMetrics;

  /**
   * 激活时的图像填充颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public activatedFillColor?: ColorMetrics;

  /**
   * 图标的修饰器。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public modifier?: ImageModifier;

  /**
   * ChipV2ImageIcon的构造函数
   *
   * @param { ChipV2ImageIconConfig } config - 图标公共配置
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(config: ChipV2ImageIconConfig);
}

/**
 * 定义后缀图像图标配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipV2SuffixImageIconConfig extends ChipV2ImageIconConfig, ChipV2AccessibilityConfig {

  /**
   * 当单击后缀图标时调用的回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  action?: VoidCallback;

  /**
   * 当单击后缀图标时调用的回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  action?: VoidCallback;
}

/**
 * 定义后缀图标类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export declare class ChipV2SuffixImageIcon extends ChipV2ImageIcon {

  /**
   * 设置无障碍级别。
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
   * 设置无障碍功能文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public accessibilityText?: ResourceStr;

  /**
   * 设置无障碍功能描述。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public accessibilityDescription?: ResourceStr;

  /**
   * 当单击后缀图标时调用的回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public action?: VoidCallback;

  /**
   * ChipV2SuffixImageIcon的构造函数
   *
   * @param { ChipV2SuffixImageIconConfig } config - 后缀图像图标的配置
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(config: ChipV2SuffixImageIconConfig);
}

/**
 * 定义ChipV2图标
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export declare abstract class ChipV2Icon {

  /**
   * ChipV2Icon的构造函数
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor();
}

/**
 * 定义前缀图片图标配置结构体。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipV2PrefixImageIconConfig extends ChipV2ImageIconConfig {}

/**
 * 定义前缀图像图标类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export declare class ChipV2PrefixImageIcon extends ChipV2ImageIcon {

  /**
   * ChipV2PrefixImageIcon的构造函数
   *
   * @param { ChipV2PrefixImageIconConfig } config - 前缀图像图标的配置
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(config: ChipV2PrefixImageIconConfig);
}

/**
 * 定义无障碍配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipV2AccessibilityConfig {

  /**
   * 设置无障碍级别。
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  accessibilityLevel?: string;

  /**
   * 设置无障碍功能文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  accessibilityText?: ResourceStr;

  /**
   * 设置无障碍功能描述。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  accessibilityDescription?: ResourceStr;
}

/**
 * 定义ChipV2无障碍属性
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export declare class ChipV2Accessibility {

  /**
   * 设置无障碍级别。
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
   * 设置无障碍功能文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public accessibilityText?: ResourceStr;

  /**
   * 设置无障碍功能描述。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public accessibilityDescription?: ResourceStr;

  /**
   * ChipV2Accessibility的构造函数
   *
   * @param { ChipV2AccessibilityConfig } config - 无障碍配置
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(config: ChipV2AccessibilityConfig);
}

/**
 * 定义默认关闭图标的配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipV2CloseConfig extends ChipV2AccessibilityConfig {

  /**
   * 设置关闭图标的字体大小。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  fontSize?: LengthMetrics;
}

/**
 * 定义默认的关闭图标类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export declare class ChipV2CloseIcon extends ChipV2Accessibility {

  /**
   * 设置关闭图标的字体大小。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public fontSize?: LengthMetrics;

  /**
   * ChipV2CloseIcon的构造函数
   *
   * @param { ChipV2CloseConfig } config - 关闭图标配置
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(config: ChipV2CloseConfig);
}

/**
 * 定义ChipV2符号图标配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipV2SymbolIconConfig {

  /**
   * 非激活态Symbol
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  normal?: SymbolGlyphModifier;

  /**
   * 激活态Symbol
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  activated?: SymbolGlyphModifier;
}

/**
 * 定义Chip的Symbol图标。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export abstract class ChipV2SymbolIcon extends ChipV2Icon {

  /**
   * 非激活态Symbol
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public normal?: SymbolGlyphModifier;

  /**
   * 激活态Symbol
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public activated?: SymbolGlyphModifier;

  /**
   * ChipV2SymbolIcon的构造函数
   *
   * @param { ChipV2SymbolIconConfig } config - ChipV2符号图标配置
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(config: ChipV2SymbolIconConfig);
}

/**
 * 定义芯片前缀符号图标配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipV2PrefixSymbolIconConfig extends ChipV2SymbolIconConfig {}

/**
 * 定义前缀Symbol图标。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export declare class ChipV2PrefixSymbolIcon extends ChipV2SymbolIcon {

  /**
   * ChipV2PrefixSymbolIcon的构造函数
   *
   * @param { ChipV2PrefixSymbolIconConfig } config - ChipV2前缀符号图标配置
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(config: ChipV2PrefixSymbolIconConfig);
}

/**
 * 定义后缀符号的无障碍配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipV2SuffixSymbolIconConfig extends ChipV2SymbolIconConfig {

  /**
   * 为后缀符号设置正常的无障碍配置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  normalAccessibility?: ChipV2AccessibilityConfig;

  /**
   * 为后缀符号设置激活的无障碍配置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  activatedAccessibility?: ChipV2AccessibilityConfig;

  /**
   * 在单击后缀符号时调用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  action?: VoidCallback;

  /**
   * 在单击后缀符号时调用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  action?: VoidCallback;
}

/**
 * 定义后缀symbol图标的无障碍。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export declare class ChipV2SuffixSymbolIcon extends ChipV2SymbolIcon {

  /**
   * 为后缀符号设置正常的无障碍配置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public normalAccessibility?: ChipV2Accessibility;

  /**
   * 为后缀符号设置激活的无障碍配置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public activatedAccessibility?: ChipV2Accessibility;

  /**
   * 在单击后缀符号时调用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public action?: VoidCallback;

  /**
   * ChipV2SuffixSymbolIcon的构造函数
   *
   * @param { ChipV2SuffixSymbolIconConfig } config - 后缀符号配置
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(config: ChipV2SuffixSymbolIconConfig);
}

/**
 * 定义标签边距。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipV2LabelMarginConfig {

  /**
   * 标签左边距长度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  left?: LengthMetrics;

  /**
   * 右标签边距长度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  right?: LengthMetrics;
}

/**
 * 定义标签边距类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipV2LocalizedLabelMarginConfig {

  /**
   * 起始标签边距长度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  start?: LengthMetrics;

  /**
   * 结束标签边距长度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  end?: LengthMetrics;
}

/**
 * 定义标签配置
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipV2LabelConfig {

  /**
   * 文本内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  text: string;

  /**
   * 文本字体大小。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  fontSize?: LengthMetrics;

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
   * ChipV2激活时的文本字体颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  activatedFontColor?: ColorMetrics;

  /**
   * 文本字体系列。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  fontFamily?: string;

  /**
   * 标签边距。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  labelMargin?: ChipV2LabelMarginConfig;

  /**
   * 标签边距。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  localizedLabelMargin?: ChipV2LocalizedLabelMarginConfig;

  /**
   * 标签文本的modifier对象
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  modifier?: TextModifier;
}

/**
 * 定义chip标签类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export declare class ChipV2Label {

  /**
   * 文本内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public text: string;

  /**
   * 文本字体大小。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public fontSize?: LengthMetrics;

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
   * ChipV2激活时的文本字体颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public activatedFontColor?: ColorMetrics;

  /**
   * 文本字体系列。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public fontFamily?: string;

  /**
   * 标签边距。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public labelMargin?: ChipV2LabelMarginConfig;

  /**
   * 标签边距。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public localizedLabelMargin?: ChipV2LocalizedLabelMarginConfig;

  /**
   * 标签文本的修饰器。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public modifier?: TextModifier;

  /**
   * ChipV2Label的构造函数
   *
   * @param { ChipV2LabelConfig } config - 标签的配置
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(config: ChipV2LabelConfig);
}

/**
 * 定义ChipV2选项接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface IChipV2OptionsConfig {

  /**
   * Chip标签。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  label: ChipV2Label;

  /**
   * Chip前缀图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  prefixIcon?: ChipV2Icon;

  /**
   * Chip后缀图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  suffixIcon?: ChipV2Icon;

  /**
   * 显示关闭图标。
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
  closeIcon?: ChipV2CloseIcon;

  /**
   * Chip使能。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  enabled?: boolean;

  /**
   * 设置Chip是否处于激活状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  activated?: boolean;

  /**
   * Chip背景色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  backgroundColor?: ColorMetrics;

  /**
   * Chip激活时的背景色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  activatedBackgroundColor?: ColorMetrics;

  /**
   * Chip半径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  borderRadius?: LengthMetrics;

  /**
   * Chip尺寸。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  size?: ChipV2Size | SizeT<LengthMetrics>;

  /**
   * 当前Chip的方向属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  direction?: Direction;

  /**
   * 为Chip设置可访问性描述。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  accessibilityDescription?: ResourceStr;

  /**
   * 设置Chip的无障碍级别。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  accessibilityLevel?: string;

  /**
   * 为Chip设置无障碍选择类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  accessibilitySelectedType?: ChipV2AccessibilitySelectedType;

  /**
   * Chip的最大字体比例。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  maxFontScale?: double | Resource;

  /**
   * Chip的最小字体比例。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  minFontScale?: double | Resource;

  /**
   * Chip填充大小。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  padding?: LocalizedPadding;

  /**
   * 设置标签文本和关闭图标的字体大小。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  fontSize?: LengthMetrics;

  /**
   * 为组件设置系统样式材质。不同的材料有不同的效果，会影响
   * 组件的背景颜色、边框、阴影和其他视觉属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * 为激活的组件设置系统样式材质。不同的材料有不同的效果，
   * 它可以影响组件的背景颜色、边框、阴影和其他视觉属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  activatedBackgroundSystemMaterial?: uiMaterial.Material;

  /**
   * Chip关闭时触发的回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  onClose?: VoidCallback;

  /**
   * Chip被点击时触发的回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  onClicked?: Callback<void>;

  /**
   * Chip关闭时触发的回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  onClose?: VoidCallback;

  /**
   * Chip被点击时触发的回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  onClicked?: Callback<void>;
}

/**
 * 定义Chip选项类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ObservedV2
export class ChipV2Options {

  /**
   * Chip标签。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public label: ChipV2Label;

  /**
   * Chip前缀图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public prefixIcon?: ChipV2Icon;

  /**
   * Chip后缀图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public suffixIcon?: ChipV2Icon;

  /**
   * 显示关闭图标。
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
  public closeIcon?: ChipV2CloseIcon;

  /**
   * Chip使能。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public enabled?: boolean;

  /**
   * 设置Chip是否处于激活状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public activated?: boolean;

  /**
   * Chip背景色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public backgroundColor?: ColorMetrics;

  /**
   * Chip激活时的背景色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public activatedBackgroundColor?: ColorMetrics;

  /**
   * Chip半径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public borderRadius?: LengthMetrics;

  /**
   * Chip尺寸。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public size?: ChipV2Size | SizeT<LengthMetrics>;

  /**
   * 当前Chip的方向属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public direction?: Direction;

  /**
   * 为Chip设置可访问性描述。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public accessibilityDescription?: ResourceStr;

  /**
   * 设置Chip的无障碍级别。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public accessibilityLevel?: string;

  /**
   * 为Chip设置无障碍选择类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public accessibilitySelectedType?: ChipV2AccessibilitySelectedType;

  /**
   * Chip的最大字体比例。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public maxFontScale?: double | Resource;

  /**
   * Chip的最小字体比例。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public minFontScale?: double | Resource;

  /**
   * Chip填充大小。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public padding?: LocalizedPadding;

  /**
   * 设置标签文本和关闭图标的字体大小。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public fontSize?: LengthMetrics;

  /**
   * 为组件设置系统样式材质。不同的材料有不同的效果，会影响
   * 组件的背景颜色、边框、阴影和其他视觉属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * 为激活的组件设置系统样式材质。不同的材料有不同的效果，
   * 它可以影响组件的背景颜色、边框、阴影和其他视觉属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public activatedBackgroundSystemMaterial?: uiMaterial.Material;

  /**
   * Chip关闭时触发的回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  public onClose?: VoidCallback;

  /**
   * Chip被点击时触发的回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  public onClicked?: Callback<void>;

  /**
   * ChipV2Options的构造函数
   *
   * @param { IChipV2OptionsConfig } config - Chip的选项
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(config: IChipV2OptionsConfig);
}

/**
 * V2状态管理操作块组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ComponentV2
export declare struct ChipV2 {

  /**
   * Chip选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Require
  @Param
  readonly chipV2Options: ChipV2Options;

  /**
   * 设置Chip的build函数。
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
  ChipV2,
  ChipV2Size,
  ChipV2AccessibilitySelectedType,
  ChipV2ImageIconConfig,
  ChipV2ImageIcon,
  ChipV2SuffixImageIconConfig,
  ChipV2SuffixImageIcon,
  ChipV2PrefixImageIconConfig,
  ChipV2PrefixImageIcon,
  ChipV2Icon,
  ChipV2AccessibilityConfig,
  ChipV2Accessibility,
  ChipV2CloseConfig,
  ChipV2CloseIcon,
  ChipV2SymbolIconConfig,
  ChipV2SymbolIcon,
  ChipV2PrefixSymbolIconConfig,
  ChipV2PrefixSymbolIcon,
  ChipV2SuffixSymbolIconConfig,
  ChipV2SuffixSymbolIcon,
  ChipV2LabelMarginConfig,
  ChipV2LocalizedLabelMarginConfig,
  ChipV2LabelConfig,
  ChipV2Label,
  IChipV2OptionsConfig,
  ChipV2Options;