
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
  * limitations under the License.@
  */

/**
 * @file api/@ohos.arkui.advanced.SegmentButtonV2.static.d.ets
 * @kit ArkUI
 */

import { 
    ResourceStr,
    Resource,
    LocalizedPadding,
    FontWeight,
    ShadowOptions,
    ShadowStyle,
    BlurStyle,
    BackgroundBlurStyleOptions,
    BackgroundEffectOptions,
    Direction,
    Callback,
    ComponentV2,
    Builder
} from './@ohos.arkui.component';

import { ObservedV2, Trace, Require, Param, Event } from './@ohos.arkui.stateManagement';

import { ColorMetrics, LengthMetrics, SizeT } from './@ohos.arkui.node';

import { ImageModifier, SymbolGlyphModifier, TextModifier } from './@ohos.arkui.modifier';

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
 * @since 23 static
 * @noninterop
 */
export interface SegmentButtonV2ItemOptions {

  /**
   * 分段按钮选项文本。
   * 默认值：undefined
   * 装饰器类型：@Trace
   * 。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  text?: ResourceStr;

  /**
   * 分段按钮选项图片类型图标。
   * 默认值：undefined
   * 装饰器类型：@Trace
   * 。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  icon?: ResourceStr;

  /**
   * 分段按钮选项的HM Symbol类型图标。
   * 默认值：undefined
   * 装饰器类型：@Trace
   * 。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  symbol?: Resource;

  /**
   * 分段按钮选项是否可用。
   * 默认值：true
   * true：可用；false：不可用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  enabled?: boolean;

  /**
   * 分段按钮选项文本属性样式修改器。
   * 默认值：undefined
   * 装饰器类型：@Trace
   * 。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  textModifier?: TextModifier;

  /**
   * 分段按钮选项图片类型图标属性的样式修改器。
   * 默认值：undefined
   * 装饰器类型：@Trace
   * 。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  iconModifier?: ImageModifier;

  /**
   * 分段按钮选项HM Symbol类型图标属性样式修改器。
   * 默认值：undefined
   * 装饰器类型：@Trace
   * 。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  symbolModifier?: SymbolGlyphModifier;

  /**
   * 分段按钮选项的无障碍文本
   * [accessibilityText](docroot://reference/apis-arkui-static/arkui-ts/ts-universal-attributes-accessibility.md#accessibilitytext)。
   * 默认值：""
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  accessibilityText?: ResourceStr;

  /**
   * 分段按钮选项的无障碍说明
   * [accessibilityDescription](docroot://reference/apis-arkui-static/arkui-ts/ts-universal-attributes-accessibility.md#accessibilitydescription)。
   * 默认值：""
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  accessibilityDescription?: ResourceStr;

  /**
   * 分段按钮选项的无障碍重要性
   * [accessibilityLevel](docroot://reference/apis-arkui-static/arkui-ts/ts-universal-attributes-accessibility.md#accessibilitylevel)。
   * 默认值："auto"
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  accessibilityLevel?: string;
}

/**
* 单选分段按钮选中项变更时调用的回调函数类型。
*
 * @param { int } selectedIndex - 分段按钮选项下标。
*     <br>取值限定为整数。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export type OnSelectedIndexChange = (selectedIndex: int) => void;

/**
* 多选分段按钮选中项变更时调用的回调函数类型。
*
 * @param { int[] } selectedIndexes - 分段按钮选项下标集合。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export type OnSelectedIndexesChange = (selectedIndexes: int[]) => void;

/**
* Defines segmented button item.
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ObservedV2
export declare class SegmentButtonV2Item {

  /**
   * 分段按钮选项文本。
   * 默认值：undefined
   * 装饰器类型：@Trace
   * 。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Trace
  text?: ResourceStr;

  /**
   * 分段按钮选项图片类型图标。
   * 默认值：undefined
   * 装饰器类型：@Trace
   * 。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Trace
  icon?: ResourceStr;

  /**
   * 分段按钮选项的HM Symbol类型图标。
   * 默认值：undefined
   * 装饰器类型：@Trace
   * 。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
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
   * 不支持设置undefined
   *
   * 装饰器类型：@Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Trace
  enabled: boolean;

  /**
   * 分段按钮选项文本属性样式修改器。
   * 默认值：undefined
   * 装饰器类型：@Trace
   * 。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Trace
  textModifier?: TextModifier;

  /**
   * 分段按钮选项图片类型图标属性的样式修改器。
   * 默认值：undefined
   * 装饰器类型：@Trace
   * 。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Trace
  iconModifier?: ImageModifier;

  /**
   * 分段按钮选项HM Symbol类型图标属性样式修改器。
   * 默认值：undefined
   * 装饰器类型：@Trace
   * 。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Trace
  symbolModifier?: SymbolGlyphModifier;

  /**
   * 分段按钮选项的无障碍文本
   * [accessibilityText](docroot://reference/apis-arkui-static/arkui-ts/ts-universal-attributes-accessibility.md#accessibilitytext)。
   * 默认值：""
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Trace
  accessibilityText?: ResourceStr;

  /**
   * 分段按钮选项的无障碍说明
   * [accessibilityDescription](docroot://reference/apis-arkui-static/arkui-ts/ts-universal-attributes-accessibility.md#accessibilitydescription)。
   * 默认值：""
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Trace
  accessibilityDescription?: ResourceStr;

  /**
   * 分段按钮选项的无障碍重要性
   * [accessibilityLevel](docroot://reference/apis-arkui-static/arkui-ts/ts-universal-attributes-accessibility.md#accessibilitylevel)。
   * 默认值："auto"
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Trace
  accessibilityLevel?: string;

  /**
   * 构造函数。
   *
   * @param { SegmentButtonV2ItemOptions } options - 分段按钮选项配置参数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  constructor(options: SegmentButtonV2ItemOptions);

  /**
   * 检查分段按钮选项是否已配置文本和图标。
   *
   * @returns { boolean }
   选项是否有图文混合配置。
   *     <br>true：有图文混合配置；false：无图文混合配置。
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  get isHybrid(): boolean;
}

/**
* 分段按钮选项集合。
*
* 继承自Array\<[SegmentButtonV2Item]{@link SegmentButtonV2Items}>
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ObservedV2
export declare class SegmentButtonV2Items extends Array<SegmentButtonV2Item> {

  /**
   * 构造一个长度为length的数组。
   *
   * @param { int } length - 长度。
   *     <br>取值限定为整数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  constructor(length: int);

  /**
   * 构造函数。
   *
   * @param { SegmentButtonV2ItemOptions[] } items - 分段按钮选项配置参数集合。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  constructor(items: SegmentButtonV2ItemOptions[]);

  /**
   * 是否支持图文混合选项。
   *
   * @returns { boolean }
   是否支持图文混合选项。
   *     <br>true：有图文混合选项；false：无图文混合选项。
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  get hasHybrid(): boolean;
}

/**
* 定义页签型分段按钮。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentV2
export declare struct TabSegmentButtonV2 {

  /**
   * 配置分段按钮的选项集合信息。不支持设置undefined
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Require
  @Param
  readonly items: SegmentButtonV2Items;

  /**
   * 配置分段按钮被选中的选项下标，第一项的编号为0，之后顺序增加。不支持设置undefined
   * 该成员只读，不支持更改。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Require
  @Param
  readonly selectedIndex: int;

  /**
   * 配置分段按钮选中项变更时触发的回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Event
  readonly $selectedIndex?: OnSelectedIndexChange;

  /**
   * 配置分段按钮选项被单击时触发的回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Event
  readonly onItemClicked?: Callback<int>;

  /**
   * 配置分段按钮选项文字大小的最小字体缩放倍数。
   * 默认值：0
   * **说明：**
   * 设置的值小于0时，按值为0处理，设置的值大于1，按值为1处理，异常值默认不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemMinFontScale?: double | Resource;

  /**
   * 配置分段按钮选项文字大小的最大放大倍数。
   * 默认值：1
   * **说明：**
   * 设置的值小于1时，按值为1处理，设置的值大于2，按值为2处理，异常值默认不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemMaxFontScale?: double | Resource;

  /**
   * 配置分段按钮选项之间的间隔。
   * 默认值：`LengthMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSpace?: LengthMetrics;

  /**
   * 配置分段按钮非选中选项的字体大小。
   * 默认值：`14fp`
   * **说明：**
   * 不支持设置百分比类型，异常值按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemFontSize?: LengthMetrics;

  /**
   * 配置分段按钮选中项的字体大小。
   * 默认值：`14fp`
   * **说明：**
   * 不支持设置百分比类型，异常值按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedFontSize?: LengthMetrics;

  /**
   * 配置分段按钮选中项的字体颜色。
   * 默认值：`ColorMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemFontColor?: ColorMetrics;

  /**
   * 配置分段按钮选中项的字体颜色。
   * 默认值：`ColorMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedFontColor?: ColorMetrics;

  /**
   * 配置分段按钮非选中选项的字体字重。
   * 默认值：FontWeight。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemFontWeight?: FontWeight;

  /**
   * 配置分段按钮选中项的字体字重。
   * 默认值：FontWeight。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedFontWeight?: FontWeight;

  /**
   * 配置分段按钮选项的圆角大小。
   * 默认值：`$r('sys。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemBorderRadius?: LengthMetrics;

  /**
   * 配置分段按钮选中的选项背景颜色。
   * 默认值：`ColorMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedBackgroundColor?: ColorMetrics;

  /**
   * 配置分段按钮选项中Image类型的图标大小。
   * 默认值：`{ width: LengthMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemIconSize?: SizeT<LengthMetrics>;

  /**
   * 配置分段按钮非选中的选项图标颜色。
   * 默认值：`ColorMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemIconFillColor?: ColorMetrics;

  /**
   * 配置分段按钮选中的选项图标颜色。
   * 默认值：`ColorMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedIconFillColor?: ColorMetrics;

  /**
   * 配置分段按钮选项中HM Symbol类型图标大小。
   * 默认值：`20fp`
   * **说明：**
   * 不支持设置百分比类型，异常值按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSymbolFontSize?: LengthMetrics;

  /**
   * 配置分段按钮非选中选项HM Symbol类型图标的颜色。
   * 默认值：`ColorMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSymbolFontColor?: ColorMetrics;

  /**
   * 配置分段按钮选中选项的HM Symbol类型图标颜色。
   * 默认值：`ColorMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedSymbolFontColor?: ColorMetrics;

  /**
   * 配置分段按钮选项最小高度。
   * 默认值：只有纯文本或者纯图标选项时：`$r('sys。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemMinHeight?: LengthMetrics;

  /**
   * 配置分段按钮选项内边距。
   * 默认值：`{ top: LengthMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemPadding?: LocalizedPadding;

  /**
   * 配置分段按钮选项阴影。
   * 默认值：ShadowStyle。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemShadow?: ShadowOptions | ShadowStyle;

  /**
   * 配置分段按钮背板颜色。
   * 默认值：`ColorMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly buttonBackgroundColor?: ColorMetrics;

  /**
   * 配置分段按钮背板模糊材质。
   * 默认值：undefined
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly buttonBackgroundBlurStyle?: BlurStyle;

  /**
   * 配置分段按钮背板模糊材质配置参数。
   * 默认值：undefined
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly buttonBackgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * 配置分段按钮背板模糊配置参数。
   * 默认值：undefined
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly buttonBackgroundEffect?: BackgroundEffectOptions;

  /**
   * 配置分段按钮背板的圆角大小。
   * 默认值：`$r('sys。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly buttonBorderRadius?: LengthMetrics;

  /**
   * 配置分段按钮最小高度。
   * 默认值：只有纯文本或者纯图标选项时：`$r('sys。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly buttonMinHeight?: LengthMetrics;

  /**
   * 配置分段按钮内边距。
   * 默认值：`$r('sys。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly buttonPadding?: LengthMetrics;

  /**
   * 配置分段按钮的布局方向。
   * 默认值：Direction。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly languageDirection?: Direction;

  /**
   * 设置组件的系统材质，不同的材质效果不同，会影响背景颜色，边框，阴影和组件的其它视觉属性
   * 设备行为差异：根据计算能力的不同，相同材质在不同设备上的效果可能不同。
   *
   * @type { ?uiMaterial.Material } material - System-styled material. [since 23 - 24]
   * @syscap SystemCapability.ArkUI.ArkUI.Full [since 23]
   * @systemapi [since 23 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  readonly backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * 设置当通过变量修改selectedIndex值时，是否开启分段按钮的属性动画。
   * true表示开启分段按钮的属性动画；未配置该属性或值为false时表示不开启分段按钮的属性动画，使用原有动画。
   * 默认值：false。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  @Param
  readonly enableStateAnimation?: boolean;

  /**
   * build函数用于构造TabSegmentButtonV2高级组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Builder
  build(): void;
}

/**
* 定义胶囊型分段按钮。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentV2
export declare struct CapsuleSegmentButtonV2 {

  /**
   * 配置分段按钮的选项集合信息。不支持设置undefined
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Require
  @Param
  readonly items: SegmentButtonV2Items;

  /**
   * 配置分段按钮被选中的选项下标，第一项的编号为0，之后顺序增加。不支持设置undefined
   * 该成员只读，不支持更改。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Require
  @Param
  readonly selectedIndex: int;

  /**
   * 配置分段按钮选中项变更时触发的回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Event
  readonly $selectedIndex?: OnSelectedIndexChange;

  /**
   * 配置分段按钮选项被单击时触发的回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Event
  readonly onItemClicked?: Callback<int>;

  /**
   * 配置分段按钮选项文字大小的最小字体缩放倍数。
   * 默认值：0
   * **说明：**
   * 设置的值小于0时，按值为0处理，设置的值大于1，按值为1处理，异常值默认不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemMinFontScale?: double | Resource;

  /**
   * 配置分段按钮选项文字大小的最大放大倍数。
   * 默认值：1
   * **说明：**
   * 设置的值小于1时，按值为1处理，设置的值大于2，按值为2处理，异常值默认不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemMaxFontScale?: double | Resource;

  /**
   * 配置分段按钮选项之间的间隔。
   * 默认值：`LengthMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSpace?: LengthMetrics;

  /**
   * 配置分段按钮选中项的字体颜色。
   * 默认值：`ColorMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemFontColor?: ColorMetrics;

  /**
   * 配置分段按钮选中项的字体颜色。
   * 默认值：`ColorMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedFontColor?: ColorMetrics;

  /**
   * 配置分段按钮非选中选项的字体大小。
   * 默认值：`14fp`
   * **说明：**
   * 不支持设置百分比类型，异常值按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemFontSize?: LengthMetrics;

  /**
   * 配置分段按钮选中项的字体大小。
   * 默认值：`14fp`
   * **说明：**
   * 不支持设置百分比类型，异常值按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedFontSize?: LengthMetrics;

  /**
   * 配置分段按钮非选中选项的字体字重。
   * 默认值：FontWeight。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemFontWeight?: FontWeight;

  /**
   * 配置分段按钮选中项的字体字重。
   * 默认值：FontWeight。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedFontWeight?: FontWeight;

  /**
   * 配置分段按钮选项的圆角大小。
   * 默认值：`$r('sys。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemBorderRadius?: LengthMetrics;

  /**
   * 配置分段按钮选中的选项背景颜色。
   * 默认值：`ColorMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedBackgroundColor?: ColorMetrics;

  /**
   * 配置分段按钮选项中Image类型的图标大小。
   * 默认值：`{ width: LengthMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemIconSize?: SizeT<LengthMetrics>;

  /**
   * 配置分段按钮非选中的选项图标颜色。
   * 默认值：`ColorMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemIconFillColor?: ColorMetrics;

  /**
   * 配置分段按钮选中的选项图标颜色。
   * 默认值：`ColorMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedIconFillColor?: ColorMetrics;

  /**
   * 配置分段按钮选项中HM Symbol类型图标大小。
   * 默认值：`20fp`
   * **说明：**
   * 不支持设置百分比类型，异常值按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSymbolFontSize?: LengthMetrics;

  /**
   * 配置分段按钮非选中选项HM Symbol类型图标的颜色。
   * 默认值：`ColorMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSymbolFontColor?: ColorMetrics;

  /**
   * 配置分段按钮选中选项的HM Symbol类型图标颜色。
   * 默认值：`ColorMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedSymbolFontColor?: ColorMetrics;

  /**
   * 配置分段按钮选项最小高度。
   * 默认值：只有纯文本或者纯图标选项时：`$r('sys。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemMinHeight?: LengthMetrics;

  /**
   * 配置分段按钮选项内边距。
   * 默认值：`{ top: LengthMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemPadding?: LocalizedPadding;

  /**
   * 配置分段按钮选项阴影。
   * 默认值：ShadowStyle。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemShadow?: ShadowOptions | ShadowStyle;

  /**
   * 配置分段按钮背板颜色。
   * 默认值：`ColorMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly buttonBackgroundColor?: ColorMetrics;

  /**
   * 配置分段按钮背板模糊材质。
   * 默认值：undefined
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly buttonBackgroundBlurStyle?: BlurStyle;

  /**
   * 配置分段按钮背板模糊材质配置参数。
   * 默认值：undefined
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly buttonBackgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * 配置分段按钮背板模糊配置参数。
   * 默认值：undefined
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly buttonBackgroundEffect?: BackgroundEffectOptions;

  /**
   * 配置分段按钮背板的圆角大小。
   * 默认值：`$r('sys。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly buttonBorderRadius?: LengthMetrics;

  /**
   * 配置分段按钮最小高度。
   * 默认值：只有纯文本或者纯图标选项时：`$r('sys。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly buttonMinHeight?: LengthMetrics;

  /**
   * 配置分段按钮内边距。
   * 默认值：`$r('sys。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly buttonPadding?: LengthMetrics;

  /**
   * 配置分段按钮的布局方向。
   * 默认值：Direction。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly languageDirection?: Direction;

  /**
   * 设置组件的系统材质，不同的材质效果不同，会影响背景颜色，边框，阴影和组件的其它视觉属性
   * 设备行为差异：根据计算能力的不同，相同材质在不同设备上的效果可能不同。
   *
   * @type { ?uiMaterial.Material } material - System-styled material. [since 23 - 24]
   * @syscap SystemCapability.ArkUI.ArkUI.Full [since 23]
   * @systemapi [since 23 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @since 23 static
   */
  @Param
  readonly backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * 设置当通过变量修改selectedIndex值时，是否开启分段按钮的属性动画。
   * true表示开启分段按钮的属性动画；未配置该属性或值为false时表示不开启分段按钮的属性动画，使用原有动画。
   * 默认值：false。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  @Param
  readonly enableStateAnimation?: boolean;

  /**
   * build函数用于构造TabSegmentButtonV2高级组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Builder
  build(): void;
}

/**
* 定义胶囊型分段按钮。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentV2
export declare struct MultiCapsuleSegmentButtonV2 {

  /**
   * 配置分段按钮的选项集合信息。不支持设置undefined
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Require
  @Param
  readonly items: SegmentButtonV2Items;

  /**
   * 配置分段按钮被选中的选项下标集合，第一项的编号为0，之后顺序增加。
   * 不支持设置undefined
   * **说明：**
   * 仅支持有效的按钮编号（第一个按钮编号为0，之后按顺序累加），如没有选中项可传入空数组`[]`。
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Require
  @Param
  readonly selectedIndexes: int[];

  /**
   * 配置分段按钮选中项变更时的回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Event
  readonly $selectedIndexes?: OnSelectedIndexesChange;

  /**
   * 配置分段按钮选项被单击时触发的回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Event
  readonly onItemClicked?: Callback<int>;

  /**
   * 配置分段按钮选项文字大小的最小字体缩放倍数。
   * 默认值：0
   * **说明：**
   * 设置的值小于0时，按值为0处理，设置的值大于1，按值为1处理，异常值默认不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemMinFontScale?: double | Resource;

  /**
   * 配置分段按钮选项文字大小的最大放大倍数。
   * 默认值：1
   * **说明：**
   * 设置的值小于1时，按值为1处理，设置的值大于2，按值为2处理，异常值默认不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemMaxFontScale?: double | Resource;

  /**
   * 配置分段按钮选项之间的间隔。
   * 默认值：`LengthMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSpace?: LengthMetrics;

  /**
   * 配置分段按钮非选中的选项字体颜色。
   * 默认值：`ColorMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemFontColor?: ColorMetrics;

  /**
   * 配置分段按钮选中项的字体颜色。
   * 默认值：`ColorMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedFontColor?: ColorMetrics;

  /**
   * 配置分段按钮非选中选项的字体大小。
   * 默认值：`14fp`
   * **说明：**
   * 不支持设置百分比类型，异常值按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemFontSize?: LengthMetrics;

  /**
   * 配置分段按钮选中项的字体大小。
   * 默认值：`14fp`
   * **说明：**
   * 不支持设置百分比类型，异常值按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedFontSize?: LengthMetrics;

  /**
   * 配置分段按钮非选中选项的字体字重。
   * 默认值：FontWeight。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemFontWeight?: FontWeight;

  /**
   * 配置分段按钮选中项的字体字重。
   * 默认值：FontWeight。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedFontWeight?: FontWeight;

  /**
   * 配置分段按钮选项的圆角大小。
   * 默认值：`$r('sys。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemBorderRadius?: LengthMetrics;

  /**
   * 配置分段按钮非选中的选项背板颜色。
   *
   * 默认值：`ColorMetrics.resourceColor($r('sys.color.segment_button_v2_multi_capsule_button_background'))`
   *
   * 值为undefined时，按默认值处理。
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemBackgroundColor?: ColorMetrics;

  /**
   * 配置分段按钮非选中的选项背板效果。
   *
   * 默认值：undefined
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemBackgroundEffect?: BackgroundEffectOptions;

  /**
   * 配置分段按钮背板模糊材质。
   *
   * 默认值：undefined
   *
   * 该成员只读，不支持更改。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
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
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemBackgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * 配置分段按钮选中的选项背景颜色。
   * 默认值：`ColorMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedBackgroundColor?: ColorMetrics;

  /**
   * 配置分段按钮选项中Image类型的图标大小。
   * 默认值：`{ width: LengthMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemIconSize?: SizeT<LengthMetrics>;

  /**
   * 配置分段按钮非选中的选项图标颜色。
   * 默认值：`ColorMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemIconFillColor?: ColorMetrics;

  /**
   * 配置分段按钮选中的选项图标颜色。
   * 默认值：`ColorMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedIconFillColor?: ColorMetrics;

  /**
   * 配置分段按钮选项中HM Symbol类型图标大小。
   * 默认值：`20fp`
   * **说明：**
   * 不支持设置百分比类型，异常值按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSymbolFontSize?: LengthMetrics;

  /**
   * 配置分段按钮非选中选项HM Symbol类型图标的颜色。
   * 默认值：`ColorMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSymbolFontColor?: ColorMetrics;

  /**
   * 配置分段按钮选中选项的HM Symbol类型图标颜色。
   * 默认值：`ColorMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedSymbolFontColor?: ColorMetrics;

  /**
   * 配置分段按钮选项最小高度。
   * 默认值：只有纯文本或者纯图标选项时：`$r('sys。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemMinHeight?: LengthMetrics;

  /**
   * 配置分段按钮选项内边距。
   * 默认值：`{ top: LengthMetrics。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemPadding?: LocalizedPadding;

  /**
   * 配置分段按钮的布局方向。
   * 默认值：Direction。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly languageDirection?: Direction;

  /**
   * build函数用于构造TabSegmentButtonV2高级组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Builder
  build(): void;
}