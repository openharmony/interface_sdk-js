/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * limitations under the License.@
 */

/**
 * @file api/@ohos.arkui.advanced.SegmentedButton.d.ts
 * @kit ArkUI
 */

import { ColorMetrics, LengthMetrics } from '@ohos.arkui.node';

import { ImageModifier, SymbolGlyphModifier, TextModifier } from '@ohos.arkui.modifier';

import { SizeT } from '@ohos.arkui.node';

import uiMaterial from './@ohos.arkui.uiMaterial';

/**
* 配置分段按钮选项参数。
*
* > **说明**
* >
* > 1. 当配置`symbol`和`icon`时，`symbol`的显示优先级更高。
* >
* > 2. 当`symbol`和`symbolModifier`同时设置HM Symbol资源时，`symbolModifier`设置的资源具有更高的显示优先级。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export interface SegmentButtonV2ItemOptions {

  /**
   * 分段按钮选项文本。
   *
   * 默认值：undefined
   *
   * 装饰器类型：@Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  text?: ResourceStr;

  /**
   * 分段按钮选项图片类型图标。
   *
   * 默认值：undefined
   *
   * 装饰器类型：@Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  icon?: ResourceStr;

  /**
   * 分段按钮选项的HM Symbol类型图标。
   *
   * 默认值：undefined
   *
   * 装饰器类型：@Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  symbol?: Resource;

  /**
   * 分段按钮选项是否可用。
   *
   * 默认值：true
   *
   * true：可用；false：不可用。
   *
   * 值为undefined时，按默认值处理。
   *
   * 装饰器类型：@Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  enabled?: boolean;

  /**
   * 分段按钮选项文本属性样式修改器。
   *
   * 默认值：undefined
   *
   * 装饰器类型：@Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  textModifier?: TextModifier;

  /**
   * 分段按钮选项图片类型图标属性的样式修改器。
   *
   * 默认值：undefined
   *
   * 装饰器类型：@Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  iconModifier?: ImageModifier;

  /**
   * 分段按钮选项HM Symbol类型图标属性样式修改器。
   *
   * 默认值：undefined
   *
   * 装饰器类型：@Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  symbolModifier?: SymbolGlyphModifier;

  /**
   * 分段按钮选项的无障碍文本[accessibilityText]{@link CommonMethod#accessibilityText(value: string)}。
   *
   * 默认值：""
   *
   * 值为undefined时，按默认值处理。
   *
   * 装饰器类型：@Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * 分段按钮选项的无障碍说明[accessibilityDescription]{@link CommonMethod#accessibilityDescription(value: string)}。
   *
   * 默认值：""
   *
   * 值为undefined时，按默认值处理。
   *
   * 装饰器类型：@Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * 分段按钮选项的无障碍重要性[accessibilityLevel]{@link CommonMethod#accessibilityLevel}。
   *
   * 默认值："auto"
   *
   * 值为undefined时，按默认值处理。
   *
   * 装饰器类型：@Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityLevel?: string;
}

/**
* 单选分段按钮选中项变更时调用的回调函数类型。
*
 * @param { number } selectedIndex - 分段按钮选项下标。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export type OnSelectedIndexChange = (selectedIndex: number) => void;

/**
* 多选分段按钮选中项变更时调用的回调函数类型。
*
 * @param { number[] } selectedIndexes - 分段按钮选项下标集合。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export type OnSelectedIndexesChange = (selectedIndexes: number[]) => void;

/**
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
@ObservedV2
export declare class SegmentButtonV2Item {

  /**
   * 分段按钮选项文本。
   *
   * 默认值：undefined
   *
   * 装饰器类型：@Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  text?: ResourceStr;

  /**
   * 分段按钮选项图片类型图标。
   *
   * 默认值：undefined
   *
   * 装饰器类型：@Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  icon?: ResourceStr;

  /**
   * 分段按钮选项的HM Symbol类型图标。
   *
   * 默认值：undefined
   *
   * 装饰器类型：@Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  symbol?: Resource;

  /**
   * 分段按钮选项是否可用。
   *
   * 默认值：true
   *
   * true：可用；false：不可用。
   *
   * 值为undefined时，按默认值处理。
   *
   * 装饰器类型：@Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  enabled: boolean;

  /**
   * 分段按钮选项文本属性样式修改器。
   *
   * 默认值：undefined
   *
   * 装饰器类型：@Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  textModifier?: TextModifier;

  /**
   * 分段按钮选项图片类型图标属性的样式修改器。
   *
   * 默认值：undefined
   *
   * 装饰器类型：@Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  iconModifier?: ImageModifier;

  /**
   * 分段按钮选项HM Symbol类型图标属性样式修改器。
   *
   * 默认值：undefined
   *
   * 装饰器类型：@Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  symbolModifier?: SymbolGlyphModifier;

  /**
   * 分段按钮选项的无障碍文本[accessibilityText]{@link CommonMethod#accessibilityText(value: string)}。
   *
   * 默认值：""
   *
   * 值为undefined时，按默认值处理。
   *
   * 装饰器类型：@Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  accessibilityText?: ResourceStr;

  /**
   * 分段按钮选项的无障碍说明[accessibilityDescription]{@link CommonMethod#accessibilityDescription(value: string)}。
   *
   * 默认值：""
   *
   * 值为undefined时，按默认值处理。
   *
   * 装饰器类型：@Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  accessibilityDescription?: ResourceStr;

  /**
   * 分段按钮选项的无障碍重要性[accessibilityLevel]{@link CommonMethod#accessibilityLevel}。
   *
   * 默认值："auto"
   *
   * 值为undefined时，按默认值处理。
   *
   * 装饰器类型：@Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  accessibilityLevel?: string;

  /**
   * 构造函数。
   *
   * @param { SegmentButtonV2ItemOptions } options - 分段按钮选项配置参数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options: SegmentButtonV2ItemOptions);

  /**
   * 检查分段按钮选项是否已配置文本和图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  get isHybrid(): boolean;
}

/**
* 分段按钮选项集合。
*
* 继承自 Array\<[SegmentButtonV2Item]{@link SegmentButtonV2Items}>
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
@ObservedV2
export declare class SegmentButtonV2Items extends Array<SegmentButtonV2Item> {

  /**
   * 构造函数。
   *
   * @param { SegmentButtonV2ItemOptions[] } items - 分段按钮选项配置参数集合。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(items: SegmentButtonV2ItemOptions[]);

  /**
   * 是否支持图文混合选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  get hasHybrid(): boolean;
}

/**
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
@ComponentV2
export declare struct TabSegmentButtonV2 {

  /**
   * 配置分段按钮的选项集合信息。
   *
   * 值为undefined时，不显示选项信息。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Require
  @Param
  readonly items: SegmentButtonV2Items;

  /**
   * 配置分段按钮被选中的选项下标，第一项的编号为0，之后顺序增加。
   *
   * 值为undefined时，不选中任何选项，其他非正数值，默认选项下标为0。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Require
  @Param
  readonly selectedIndex: number;

  /**
   * 配置分段按钮选中项变更时触发的回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Event
  $selectedIndex?: OnSelectedIndexChange;

  /**
   * 配置分段按钮选项被单击时触发的回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Event
  onItemClicked?: Callback<number>;

  /**
   * 配置分段按钮选项文字大小的最小字体缩放倍数。
   *
   * 取值范围：[0, 1]
   *
   * 默认值：0
   *
   * **说明：**
   *
   * 设置的值小于 0 时，按值为 0 处理，设置的值大于 1，按值为 1 处理，异常值默认不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemMinFontScale?: number | Resource;

  /**
   * 配置分段按钮选项文字大小的最大放大倍数。
   *
   * 取值范围：[1, 2]
   *
   * 默认值：1
   *
   * **说明：**
   *
   * 设置的值小于 1 时，按值为 1 处理，设置的值大于 2，按值为 2 处理，异常值默认不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemMaxFontScale?: number | Resource;

  /**
   * 配置分段按钮选项之间的间隔。
   *
   * 取值范围：[0, +∞)
   *
   * 默认值：`LengthMetrics.vp(0)`
   *
   * **说明：**
   *
   * 不支持设置百分比类型，异常值按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemSpace?: LengthMetrics;

  /**
   * 配置分段按钮非选中选项的字体大小。
   *
   * 取值范围：[0, +∞)
   *
   * 默认值：`14fp`
   *
   * **说明：**
   *
   * 不支持设置百分比类型，异常值按默认值处理。
   *
   * items设置textModifier的fontSize属性值时，itemFontSize不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemFontSize?: LengthMetrics;

  /**
   * 配置分段按钮选中项的字体大小。
   *
   * 取值范围：[0, +∞)
   *
   * 默认值：`14fp`
   *
   * **说明：**
   *
   * 不支持设置百分比类型，异常值按默认值处理。
   *
   * items设置textModifier的fontSize属性值时，itemSelectedFontSize不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemSelectedFontSize?: LengthMetrics;

  /**
   * 配置分段按钮选中项的字体颜色。
   *
   * 默认值：`$r('sys.color.font_primary')`
   *
   * 值为undefined时，按默认值处理。
   *
   * **说明：**
   *
   * items设置textModifier的fontColor属性值时，itemSelectedFontColor不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemFontColor?: ColorMetrics;

  /**
   * 配置分段按钮选中项的字体颜色。
   *
   * 默认值：`$r('sys.color.font_primary')`
   *
   * 值为undefined时，按默认值处理。
   *
   * **说明：**
   *
   * items设置textModifier的fontColor属性值时，itemSelectedFontColor不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemSelectedFontColor?: ColorMetrics;

  /**
   * 配置分段按钮非选中选项的字体字重。
   *
   * 默认值：FontWeight.Medium
   *
   * 超出取值范围按默认值处理。
   *
   * **说明：**
   *
   * items设置textModifier的fontWeight属性值时，itemFontWeight不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemFontWeight?: FontWeight;

  /**
   * 配置分段按钮选中项的字体字重。
   *
   * 默认值：FontWeight.Medium
   *
   * 超出取值范围按默认值处理。
   *
   * **说明：**
   *
   * items设置textModifier的fontWeight属性值时，itemSelectedFontWeight不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemSelectedFontWeight?: FontWeight;

  /**
   * 配置分段按钮选项的圆角大小。
   *
   * 取值范围：[0, +∞)
   *
   * 默认值：`$r('sys.float.segment_button_v2_selected_corner_radius')`
   *
   * 超出取值范围按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemBorderRadius?: LengthMetrics;

  /**
   * 配置分段按钮选中的选项背景颜色。
   *
   * 默认值：`$r('sys.color.segment_button_v2_tab_selected_item_background')`
   *
   * 值为undefined时，按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemSelectedBackgroundColor?: ColorMetrics;

  /**
   * 配置分段按钮选项中Image类型的图标大小。
   *
   * 取值范围：[0, +∞)
   *
   * 默认值：`{ width: LengthMetrics.vp(24), height: LengthMetrics.vp(24) }`
   *
   * 超出取值范围按默认值处理。
   *
   * **说明：**
   *
   * items设置iconModifier的width、height属性值时，itemIconSize不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemIconSize?: SizeT<LengthMetrics>;

  /**
   * 配置分段按钮非选中的选项图标颜色。
   *
   * 默认值：`$r('sys.color.font_secondary')`
   *
   * 值为undefined时，按默认值处理。
   *
   * **说明：**
   *
   * items设置iconModifier的fillColor属性值时，itemIconFillColor不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemIconFillColor?: ColorMetrics;

  /**
   * 配置分段按钮选中的选项图标颜色。
   *
   * 默认值：`$r('sys.color.font_primary')`
   *
   * 值为undefined时，按默认值处理。
   *
   * **说明：**
   *
   * items设置iconModifier的fillColor属性值时，itemSelectedIconFillColor不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemSelectedIconFillColor?: ColorMetrics;

  /**
   * 配置分段按钮选项中HM Symbol类型图标大小。
   *
   * 取值范围：[0, +∞)
   *
   * 默认值：`20fp`
   *
   * **说明：**
   *
   * 不支持设置百分比类型，异常值按默认值处理。
   *
   * items设置symbolModifier的fontSize属性值时，itemSymbolFontSize不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemSymbolFontSize?: LengthMetrics;

  /**
   * 配置分段按钮非选中选项HM Symbol类型图标的颜色。
   *
   * 默认值：`$r('sys.color.font_secondary')`
   *
   * 值为undefined时，按默认值处理。
   *
   * **说明：**
   *
   * items设置symbolModifier的fontColor属性值时，itemSymbolFontColor不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemSymbolFontColor?: ColorMetrics;

  /**
   * 配置分段按钮选中选项的HM Symbol类型图标颜色。
   *
   * 默认值：`$r('sys.color.font_primary')`
   *
   * 值为undefined时，按默认值处理。
   *
   * **说明：**
   *
   * items设置symbolModifier的fontColor属性值时，itemSelectedSymbolFontColor不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemSelectedSymbolFontColor?: ColorMetrics;

  /**
   * 配置分段按钮选项最小高度。
   *
   * 取值范围：[0, +∞)
   *
   * 默认值：
   *
   * 只有纯文本或者纯图标选项时：`$r('sys.float.segment_button_v2_singleline_selected_height')`；有图文混合的选项时：
   * `$r('sys.float.segment_button_v2_doubleline_selected_height')`
   *
   * 超出取值范围按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemMinHeight?: LengthMetrics;

  /**
   * 配置分段按钮选项内边距。
   *
   * 默认值：
   * `{ top: LengthMetrics.resource($r('sys.float.padding_level2')), bottom: LengthMetrics.resource($r('sys.float.padding_level2')), start: LengthMetrics.resource($r('sys.float.padding_level4')), end: LengthMetrics.resource($r('sys.float.padding_level4')) }`
   *
   * 值为undefined时，按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemPadding?: LocalizedPadding;

  /**
   * 配置分段按钮选项阴影。
   *
   * 默认值：ShadowStyle.OUTER_DEFAULT_XS
   *
   * 超出取值范围按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemShadow?: ShadowOptions | ShadowStyle;

  /**
   * 配置分段按钮背板颜色。
   *
   * 默认值：`$r('sys.color.segment_button_v2_tab_button_background')`
   *
   * 值为undefined时，按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly buttonBackgroundColor?: ColorMetrics;

  /**
   * 配置分段按钮背板模糊材质。
   *
   * 默认值：undefined
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly buttonBackgroundBlurStyle?: BlurStyle;

  /**
   * 配置分段按钮背板模糊材质配置参数。
   *
   * 默认值：undefined
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly buttonBackgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * 配置分段按钮背板模糊配置参数。
   *
   * 默认值：undefined
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly buttonBackgroundEffect?: BackgroundEffectOptions;

  /**
   * 配置分段按钮背板的圆角大小。
   *
   * 取值范围：[0, +∞)
   *
   * 默认值：`$r('sys.float.segment_button_v2_background_corner_radius')`
   *
   * 超出取值范围按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly buttonBorderRadius?: LengthMetrics;

  /**
   * 配置分段按钮最小高度。
   *
   * 取值范围：[0, +∞)
   *
   * 默认值：只有纯文本或者纯图标选项时：`$r('sys.float.segment_button_v2_singleline_background_height')`；有图文混合的选项时：
   * `$r('sys.float.segment_button_v2_doubleline_background_height')`
   *
   * 超出取值范围按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly buttonMinHeight?: LengthMetrics;

  /**
   * 配置分段按钮内边距。
   *
   * 取值范围：[0, +∞)
   *
   * 默认值：`$r('sys.float.padding_level1')`
   *
   * 超出取值范围按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly buttonPadding?: LengthMetrics;

  /**
   * 配置分段按钮的布局方向。
   *
   * 默认值：Direction.Auto
   *
   * 超出取值范围按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly languageDirection?: Direction;

  /**
   * 分段按钮组件的背景板的系统材质。不同系统材质包含不同的属性影响效果。传入材质后，SegmentButtonV2的动效发生改变。
   *
   * 默认值：无材质效果。
   *
   * 该成员只读，不支持更改。
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
  @Param
  readonly backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * 设置当通过变量修改selectedIndex值时，是否开启分段按钮的属性动画。
   * true表示开启分段按钮的属性动画；未配置该属性或值为false时表示不开启分段按钮的属性动画，使用原有动画。
   * 默认值：false
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  @Param
  readonly enableStateAnimation?: boolean;

  /**
   * Sets the build function of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  build(): void;
}

/**
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
@ComponentV2
export declare struct CapsuleSegmentButtonV2 {

  /**
   * 配置分段按钮的选项集合信息。
   *
   * 值为undefined时，不显示选项信息。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Require
  @Param
  readonly items: SegmentButtonV2Items;

  /**
   * 配置分段按钮被选中的选项下标，第一项的编号为0，之后顺序增加。
   *
   * 值为undefined时，不选中任何选项，其他非正数值，默认选项下标为0。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Require
  @Param
  readonly selectedIndex: number;

  /**
   * 配置分段按钮选中项变更时触发的回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Event
  $selectedIndex?: OnSelectedIndexChange;

  /**
   * 配置分段按钮选项被单击时触发的回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Event
  onItemClicked?: Callback<number>;

  /**
   * 配置分段按钮选项文字大小的最小字体缩放倍数。
   *
   * 取值范围：[0, 1]
   *
   * 默认值：0
   *
   * **说明：**
   *
   * 设置的值小于 0 时，按值为 0 处理，设置的值大于 1，按值为 1 处理，异常值默认不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemMinFontScale?: number | Resource;

  /**
   * 配置分段按钮选项文字大小的最大放大倍数。
   *
   * 取值范围：[1, 2]
   *
   * 默认值：1
   *
   * **说明：**
   *
   * 设置的值小于 1 时，按值为 1 处理，设置的值大于 2，按值为 2 处理，异常值默认不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemMaxFontScale?: number | Resource;

  /**
   * 配置分段按钮选项之间的间隔。
   *
   * 取值范围：[0, +∞)
   *
   * 默认值：`LengthMetrics.vp(0)`
   *
   * **说明：**
   *
   * 不支持设置百分比类型，异常值按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemSpace?: LengthMetrics;

  /**
   * 配置分段按钮选中项的字体颜色。
   *
   * 默认值：`$r('sys.color.font_primary')`
   *
   * 值为undefined时，按默认值处理。
   *
   * **说明：**
   *
   * items设置textModifier的fontColor属性值时，itemSelectedFontColor不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemFontColor?: ColorMetrics;

  /**
   * 配置分段按钮选中项的字体颜色。
   *
   * 默认值：`$r('sys.color.font_primary')`
   *
   * 值为undefined时，按默认值处理。
   *
   * **说明：**
   *
   * items设置textModifier的fontColor属性值时，itemSelectedFontColor不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemSelectedFontColor?: ColorMetrics;

  /**
   * 配置分段按钮非选中选项的字体大小。
   *
   * 取值范围：[0, +∞)
   *
   * 默认值：`14fp`
   *
   * **说明：**
   *
   * 不支持设置百分比类型，异常值按默认值处理。
   *
   * items设置textModifier的fontSize属性值时，itemFontSize不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemFontSize?: LengthMetrics;

  /**
   * 配置分段按钮选中项的字体大小。
   *
   * 取值范围：[0, +∞)
   *
   * 默认值：`14fp`
   *
   * **说明：**
   *
   * 不支持设置百分比类型，异常值按默认值处理。
   *
   * items设置textModifier的fontSize属性值时，itemSelectedFontSize不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemSelectedFontSize?: LengthMetrics;

  /**
   * 配置分段按钮非选中选项的字体字重。
   *
   * 默认值：FontWeight.Medium
   *
   * 超出取值范围按默认值处理。
   *
   * **说明：**
   *
   * items设置textModifier的fontWeight属性值时，itemFontWeight不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemFontWeight?: FontWeight;

  /**
   * 配置分段按钮选中项的字体字重。
   *
   * 默认值：FontWeight.Medium
   *
   * 超出取值范围按默认值处理。
   *
   * **说明：**
   *
   * items设置textModifier的fontWeight属性值时，itemSelectedFontWeight不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemSelectedFontWeight?: FontWeight;

  /**
   * 配置分段按钮选项的圆角大小。
   *
   * 取值范围：[0, +∞)
   *
   * 默认值：`$r('sys.float.segment_button_v2_selected_corner_radius')`
   *
   * 超出取值范围按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemBorderRadius?: LengthMetrics;

  /**
   * 配置分段按钮选中的选项背景颜色。
   *
   * 默认值：`$r('sys.color.segment_button_v2_tab_selected_item_background')`
   *
   * 值为undefined时，按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemSelectedBackgroundColor?: ColorMetrics;

  /**
   * 配置分段按钮选项中Image类型的图标大小。
   *
   * 取值范围：[0, +∞)
   *
   * 默认值：`{ width: LengthMetrics.vp(24), height: LengthMetrics.vp(24) }`
   *
   * 超出取值范围按默认值处理。
   *
   * **说明：**
   *
   * items设置iconModifier的width、height属性值时，itemIconSize不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemIconSize?: SizeT<LengthMetrics>;

  /**
   * 配置分段按钮非选中的选项图标颜色。
   *
   * 默认值：`$r('sys.color.font_secondary')`
   *
   * 值为undefined时，按默认值处理。
   *
   * **说明：**
   *
   * items设置iconModifier的fillColor属性值时，itemIconFillColor不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemIconFillColor?: ColorMetrics;

  /**
   * 配置分段按钮选中的选项图标颜色。
   *
   * 默认值：`$r('sys.color.font_primary')`
   *
   * 值为undefined时，按默认值处理。
   *
   * **说明：**
   *
   * items设置iconModifier的fillColor属性值时，itemSelectedIconFillColor不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemSelectedIconFillColor?: ColorMetrics;

  /**
   * 配置分段按钮选项中HM Symbol类型图标大小。
   *
   * 取值范围：[0, +∞)
   *
   * 默认值：`20fp`
   *
   * **说明：**
   *
   * 不支持设置百分比类型，异常值按默认值处理。
   *
   * items设置symbolModifier的fontSize属性值时，itemSymbolFontSize不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemSymbolFontSize?: LengthMetrics;

  /**
   * 配置分段按钮非选中选项HM Symbol类型图标的颜色。
   *
   * 默认值：`$r('sys.color.font_secondary')`
   *
   * 值为undefined时，按默认值处理。
   *
   * **说明：**
   *
   * items设置symbolModifier的fontColor属性值时，itemSymbolFontColor不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemSymbolFontColor?: ColorMetrics;

  /**
   * 配置分段按钮选中选项的HM Symbol类型图标颜色。
   *
   * 默认值：`$r('sys.color.font_primary')`
   *
   * 值为undefined时，按默认值处理。
   *
   * **说明：**
   *
   * items设置symbolModifier的fontColor属性值时，itemSelectedSymbolFontColor不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemSelectedSymbolFontColor?: ColorMetrics;

  /**
   * 配置分段按钮选项最小高度。
   *
   * 取值范围：[0, +∞)
   *
   * 默认值：
   *
   * 只有纯文本或者纯图标选项时：`$r('sys.float.segment_button_v2_singleline_selected_height')`；有图文混合的选项时：
   * `$r('sys.float.segment_button_v2_doubleline_selected_height')`
   *
   * 超出取值范围按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemMinHeight?: LengthMetrics;

  /**
   * 配置分段按钮选项内边距。
   *
   * 默认值：
   * `{ top: LengthMetrics.resource($r('sys.float.padding_level2')), bottom: LengthMetrics.resource($r('sys.float.padding_level2')), start: LengthMetrics.resource($r('sys.float.padding_level4')), end: LengthMetrics.resource($r('sys.float.padding_level4')) }`
   *
   * 值为undefined时，按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemPadding?: LocalizedPadding;

  /**
   * 配置分段按钮选项阴影。
   *
   * 默认值：ShadowStyle.OUTER_DEFAULT_XS
   *
   * 超出取值范围按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemShadow?: ShadowOptions | ShadowStyle;

  /**
   * 配置分段按钮背板颜色。
   *
   * 默认值：`$r('sys.color.segment_button_v2_tab_button_background')`
   *
   * 值为undefined时，按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly buttonBackgroundColor?: ColorMetrics;

  /**
   * 配置分段按钮背板模糊材质。
   *
   * 默认值：undefined
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly buttonBackgroundBlurStyle?: BlurStyle;

  /**
   * 配置分段按钮背板模糊材质配置参数。
   *
   * 默认值：undefined
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly buttonBackgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * 配置分段按钮背板模糊配置参数。
   *
   * 默认值：undefined
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly buttonBackgroundEffect?: BackgroundEffectOptions;

  /**
   * 配置分段按钮背板的圆角大小。
   *
   * 取值范围：[0, +∞)
   *
   * 默认值：`$r('sys.float.segment_button_v2_background_corner_radius')`
   *
   * 超出取值范围按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly buttonBorderRadius?: LengthMetrics;

  /**
   * 配置分段按钮最小高度。
   *
   * 取值范围：[0, +∞)
   *
   * 默认值：只有纯文本或者纯图标选项时：`$r('sys.float.segment_button_v2_singleline_background_height')`；有图文混合的选项时：
   * `$r('sys.float.segment_button_v2_doubleline_background_height')`
   *
   * 超出取值范围按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly buttonMinHeight?: LengthMetrics;

  /**
   * 配置分段按钮内边距。
   *
   * 取值范围：[0, +∞)
   *
   * 默认值：`$r('sys.float.padding_level1')`
   *
   * 超出取值范围按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly buttonPadding?: LengthMetrics;

  /**
   * 配置分段按钮的布局方向。
   *
   * 默认值：Direction.Auto
   *
   * 超出取值范围按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly languageDirection?: Direction;

  /**
   * 分段按钮组件的背景板的系统材质。不同系统材质包含不同的属性影响效果。传入材质后，SegmentButtonV2的动效发生改变。
   *
   * 默认值：无材质效果。
   *
   * 该成员只读，不支持更改。
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
  @Param
  readonly backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * 设置当通过变量修改selectedIndex值时，是否开启分段按钮的属性动画。
   * true表示开启分段按钮的属性动画；未配置该属性或值为false时表示不开启分段按钮的属性动画，使用原有动画。
   * 默认值：false
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  @Param
  readonly enableStateAnimation?: boolean;

  /**
   * Sets the build function of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  build(): void;
}

/**
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
@ComponentV2
export declare struct MultiCapsuleSegmentButtonV2 {

  /**
   * 配置分段按钮的选项集合信息。
   *
   * 值为undefined时，不显示选项信息。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Require
  @Param
  readonly items: SegmentButtonV2Items;

  /**
   * 配置分段按钮被选中的选项下标集合，第一项的编号为0，之后顺序增加。
   *
   * 值为undefined时，不选中任何选项。
   *
   * **说明：**
   *
   * 仅支持有效的按钮编号（第一个按钮编号为0，之后按顺序累加），如没有选中项可传入空数组`[]`。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Require
  @Param
  readonly selectedIndexes: number[];

  /**
   * 配置分段按钮选中项变更时触发的回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Event
  $selectedIndexes: OnSelectedIndexesChange;

  /**
   * 配置分段按钮选项被单击时触发的回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Event
  onItemClicked?: Callback<number>;

  /**
   * 配置分段按钮选项文字大小的最小字体缩放倍数。
   *
   * 取值范围：[0, 1]
   *
   * 默认值：0
   *
   * **说明：**
   *
   * 设置的值小于 0 时，按值为 0 处理，设置的值大于 1，按值为 1 处理，异常值默认不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemMinFontScale?: number | Resource;

  /**
   * 配置分段按钮选项文字大小的最大放大倍数。
   *
   * 取值范围：[1, 2]
   *
   * 默认值：1
   *
   * **说明：**
   *
   * 设置的值小于 1 时，按值为 1 处理，设置的值大于 2，按值为 2 处理，异常值默认不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemMaxFontScale?: number | Resource;

  /**
   * 配置分段按钮选项之间的间隔。
   *
   * 取值范围：[0, +∞)
   *
   * 默认值：`LengthMetrics.vp(1)`
   *
   * **说明：**
   *
   * 不支持设置百分比类型，异常值按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemSpace?: LengthMetrics;

  /**
   * 配置分段按钮非选中的选项字体颜色。
   *
   * 默认值：`$r('sys.color.font_secondary')`
   *
   * 值为undefined时，按默认值处理。
   *
   * **说明：**
   *
   * items设置textModifier的fontColor属性值时，itemFontColor不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemFontColor?: ColorMetrics;

  /**
   * 配置分段按钮选中项的字体颜色。
   *
   * 默认值：`$r('sys.color.font_primary')`
   *
   * 值为undefined时，按默认值处理。
   *
   * **说明：**
   *
   * items设置textModifier的fontColor属性值时，itemSelectedFontColor不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemSelectedFontColor?: ColorMetrics;

  /**
   * 配置分段按钮非选中选项的字体大小。
   *
   * 取值范围：[0, +∞)
   *
   * 默认值：`14fp`
   *
   * **说明：**
   *
   * 不支持设置百分比类型，异常值按默认值处理。
   *
   * items设置textModifier的fontSize属性值时，itemFontSize不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemFontSize?: LengthMetrics;

  /**
   * 配置分段按钮选中项的字体大小。
   *
   * 取值范围：[0, +∞)
   *
   * 默认值：`14fp`
   *
   * **说明：**
   *
   * 不支持设置百分比类型，异常值按默认值处理。
   *
   * items设置textModifier的fontSize属性值时，itemSelectedFontSize不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemSelectedFontSize?: LengthMetrics;

  /**
   * 配置分段按钮非选中选项的字体字重。
   *
   * 默认值：FontWeight.Medium
   *
   * 超出取值范围按默认值处理。
   *
   * **说明：**
   *
   * items设置textModifier的fontWeight属性值时，itemFontWeight不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemFontWeight?: FontWeight;

  /**
   * 配置分段按钮选中项的字体字重。
   *
   * 默认值：FontWeight.Medium
   *
   * 超出取值范围按默认值处理。
   *
   * **说明：**
   *
   * items设置textModifier的fontWeight属性值时，itemSelectedFontWeight不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemSelectedFontWeight?: FontWeight;

  /**
   * 配置分段按钮选项的圆角大小。
   *
   * 取值范围：[0, +∞)
   *
   * 默认值：`$r('sys.float.segment_button_v2_selected_corner_radius')`
   *
   * 超出取值范围按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemBorderRadius?: LengthMetrics;

  /**
   * 配置分段按钮非选中的选项背板颜色。
   *
   * 默认值：`$r('sys.color.segment_button_v2_multi_capsule_button_background')`
   *
   * 值为undefined时，按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemBackgroundColor?: ColorMetrics;

  /**
   * 配置分段按钮选项的背板效果。
   *
   * 默认值：undefined
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemBackgroundEffect?: BackgroundEffectOptions;

  /**
   * 配置分段按钮选项的模糊材质。
   *
   * 默认值：undefined
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemBackgroundBlurStyle?: BlurStyle;

  /**
   * 配置分段按钮选项的模糊材质配置参数。
   *
   * 默认值：undefined
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemBackgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * 配置分段按钮选中的选项背景颜色。
   *
   * 默认值：`$r('sys.color.segment_button_v2_tab_selected_item_background')`
   *
   * 值为undefined时，按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemSelectedBackgroundColor?: ColorMetrics;

  /**
   * 配置分段按钮选项中Image类型的图标大小。
   *
   * 取值范围：[0, +∞)
   *
   * 默认值：`{ width: LengthMetrics.vp(24), height: LengthMetrics.vp(24) }`
   *
   * 超出取值范围按默认值处理。
   *
   * **说明：**
   *
   * items设置iconModifier的width、height属性值时，itemIconSize不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemIconSize?: SizeT<LengthMetrics>;

  /**
   * 配置分段按钮非选中的选项图标颜色。
   *
   * 默认值：`$r('sys.color.font_secondary')`
   *
   * 值为undefined时，按默认值处理。
   *
   * **说明：**
   *
   * items设置iconModifier的fillColor属性值时，itemIconFillColor不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemIconFillColor?: ColorMetrics;

  /**
   * 配置分段按钮选中的选项图标颜色。
   *
   * 默认值：`$r('sys.color.font_primary')`
   *
   * 值为undefined时，按默认值处理。
   *
   * **说明：**
   *
   * items设置iconModifier的fillColor属性值时，itemSelectedIconFillColor不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemSelectedIconFillColor?: ColorMetrics;

  /**
   * 配置分段按钮选项中HM Symbol类型图标大小。
   *
   * 取值范围：[0, +∞)
   *
   * 默认值：`20fp`
   *
   * **说明：**
   *
   * 不支持设置百分比类型，异常值按默认值处理。
   *
   * items设置symbolModifier的fontSize属性值时，itemSymbolFontSize不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemSymbolFontSize?: LengthMetrics;

  /**
   * 配置分段按钮非选中选项HM Symbol类型图标的颜色。
   *
   * 默认值：`$r('sys.color.font_secondary')`
   *
   * 值为undefined时，按默认值处理。
   *
   * **说明：**
   *
   * items设置symbolModifier的fontColor属性值时，itemSymbolFontColor不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemSymbolFontColor?: ColorMetrics;

  /**
   * 配置分段按钮选中选项的HM Symbol类型图标颜色。
   *
   * 默认值：`$r('sys.color.font_primary')`
   *
   * 值为undefined时，按默认值处理。
   *
   * **说明：**
   *
   * items设置symbolModifier的fontColor属性值时，itemSelectedSymbolFontColor不生效。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemSelectedSymbolFontColor?: ColorMetrics;

  /**
   * 配置分段按钮选项最小高度。
   *
   * 取值范围：[0, +∞)
   *
   * 默认值：
   *
   * 只有纯文本或者纯图标选项时：`$r('sys.float.segment_button_v2_singleline_selected_height')`；有图文混合的选项时：
   * `$r('sys.float.segment_button_v2_doubleline_selected_height')`
   *
   * 超出取值范围按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemMinHeight?: LengthMetrics;

  /**
   * 配置分段按钮选项内边距。
   *
   * 默认值：
   * `{ top: LengthMetrics.resource($r('sys.float.padding_level2')), bottom: LengthMetrics.resource($r('sys.float.padding_level2')), start: LengthMetrics.resource($r('sys.float.padding_level4')), end: LengthMetrics.resource($r('sys.float.padding_level4')) }`
   *
   * 值为undefined时，按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly itemPadding?: LocalizedPadding;

  /**
   * 配置分段按钮的布局方向。
   *
   * 默认值：Direction.Auto
   *
   * 超出取值范围按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Param
  readonly languageDirection?: Direction;

  /**
   * Sets the build function of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  build(): void;
}