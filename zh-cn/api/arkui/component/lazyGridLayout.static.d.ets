'use static'
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
 * limitations under the License.
 */
/**
 * @file
 * @kit ArkUI
 */
import { AttributeModifier, CommonMethod, OnVisibleIndexesChangeCallback } from './common';
import { LengthMetrics } from '../Graphics';
import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { StickyStyle } from './list';
/**
 * LazyGridLayout组件属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface LazyGridLayoutAttribute extends CommonMethod {

  /**
   * 设置行与行的间距。
   *
   * @param { LengthMetrics | undefined } value
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default rowsGap(value: LengthMetrics | undefined): this;

  /**
   * 设置列与列的间距。
   *
   * @param { LengthMetrics | undefined } value
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default columnsGap(value: LengthMetrics | undefined): this;

  /**
   * 设置懒加载网格布局的头部。
   *
   * @param { CustomBuilder | undefined } builder - 头部构建器函数。
   *     <br/>传入undefined将移除头部。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default header(builder: CustomBuilder | undefined): this;

  /**
   * 设置懒加载网格布局的尾部。
   *
   * @param { CustomBuilder | undefined } builder - 尾部构建器函数。
   *     <br/>传入undefined将移除尾部。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default footer(builder: CustomBuilder | undefined): this;

  /**
   * 设置头部和尾部的吸顶吸底样式。
   *
   * @param { StickyStyle | undefined } sticky - 头部和尾部的吸顶吸底样式。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default sticky(sticky: StickyStyle | undefined): this;

  /**
   * 当可视区域内子组件的索引值发生变化时触发回调。
   *
   * @param { OnVisibleIndexesChangeCallback | undefined } callback - 回调函数，当可视区域内子组件的索引值
   *     发生变化时触发。传入undefined将取消监听。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onVisibleIndexesChange(callback: OnVisibleIndexesChangeCallback | undefined): this;
}

/**
 * 除支持[通用属性]{@link common}外，还支持以下属性：
 *
 * ###### columnsGap
 *
 * default columnsGap(value: LengthMetrics | undefined): this
 *
 * 设置列与列的间距。设置为小于0的值时，按默认值显示。
 *
 * **原子化服务API（仅ArkTS-Dyn）：** 从API version 19开始，该接口支持在原子化服务中使用。
 *
 * **系统能力：** SystemCapability.ArkUI.ArkUI.Full
 *
 * **参数：**
 *
 * | 参数名 | 类型                         | 必填 | 说明                         |
 * | ------ | ---------------------------- | ---- | ---------------------------- |
 * | value  |  [LengthMetrics]{@link Graphics:LengthMetrics} \| undefined | 是   | 列与列的间距。<br/>默认值：0vp<br/>取值为undefined时，按默认值处理。 |
 *
 * ###### rowsGap
 *
 * default rowsGap(value: LengthMetrics | undefined): this
 *
 * 设置行与行的间距。设置为小于0的值时，按默认值显示。
 *
 * **原子化服务API（仅ArkTS-Dyn）：** 从API version 19开始，该接口支持在原子化服务中使用。
 *
 * **系统能力：** SystemCapability.ArkUI.ArkUI.Full
 *
 * **参数：**
 *
 * | 参数名 | 类型                         | 必填 | 说明                         |
 * | ------ | ---------------------------- | ---- | ---------------------------- |
 * | value  | [LengthMetrics]{@link Graphics:LengthMetrics} \| undefined | 是   | 行与行的间距。<br/>默认值：0vp<br/>取值为undefined时，按默认值处理。 |
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface LazyVGridLayoutAttribute extends LazyGridLayoutAttribute {

  /**
   * 设置当前网格布局列的数量、固定列宽或最小列宽值，不设置时默认1列。
   *
   * 例如，'1fr&nbsp;1fr&nbsp;2fr'&nbsp;是将父组件分3列，将父组件允许的宽分为4等份，第一列占1份，第二列占1份，第三列占2份。
   *
   * columnsTemplate('repeat(auto-fit, track-size)')是设置最小列宽值为track-size，自动计算列数和实际列宽。
   *
   * columnsTemplate('repeat(auto-fill, track-size)')是设置固定列宽值为track-size，自动计算列数。
   *
   * columnsTemplate('repeat(auto-stretch, track-size)')是设置固定列宽值为track-size，使用columnsGap为最小列间距，自动计算列数和实际列间距。
   *
   * 其中repeat、auto-fit、auto-fill、auto-stretch为关键字。track-size为列宽，支持的单位包括px、vp、%或有效数字，默认单位为vp，track-size至少包含一个有效列宽。
   *
   * auto-fit模式和auto-stretch模式只支持track-size为一个有效列宽值，并且auto-stretch模式中的track-size只支持px、vp和有效数字，不支持%。auto-fill模式支持一个或多个有
   * 效列宽，如columnsTemplate('repeat(auto-fill, 20)')、columnsTemplate('repeat(auto-fill, 20 80px)')。
   *
   * 设置为'0fr'时，该列的列宽为0，不显示子组件。设置为其他非法值时，子组件显示为固定1列。
   *
   * @param { string | undefined } value
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default columnsTemplate(value: string | undefined): this;

  /**
   * 设置LazyVGrid选项。
   *
   * @returns { LazyVGridLayoutAttribute } 返回LazyVGridLayoutAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setLazyVGridLayoutOptions(): this;

  /**
   * 动态设置LazyVGridLayout组件的属性方法。
   *
   * @param { AttributeModifier<LazyVGridLayoutAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<LazyVGridLayoutAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 创建垂直方向懒加载网格布局容器。
 *
 * @param { CustomBuilder } [content_] - 容器内容。
 * @returns { LazyVGridLayoutAttribute } 返回LazyVGridLayout组件的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function LazyVGridLayout(
    content_?: CustomBuilder,
): LazyVGridLayoutAttribute;

/**
 * 定义LazyVGridLayout组件。
 *
 * @param { CustomBuilderT<LazyVGridLayoutAttribute> } style_ - 创建LazyVGridLayout的样式
 * @param { CustomBuilder } [content_]
 * @returns { LazyVGridLayoutAttribute } LazyVGridLayout的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function LazyVGridLayout(
    style_: CustomBuilderT<LazyVGridLayoutAttribute>,
    content_?: CustomBuilder
): LazyVGridLayoutAttribute;