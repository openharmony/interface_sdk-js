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
 * limitations under the License.
 */

/**
  * @file
  * @kit ArkUI
 */

import { CommonMethod, Callback } from './common';

import { DotIndicator, DigitIndicator } from './swiper';

import { CommonMethod, Callback } from "./common";

import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { DotIndicator, DigitIndicator } from "./swiper";
import { Builder, ComponentBuilder, CustomBuilderT } from './../stateManagement/runtime';
import { CustomBuilder } from './builder';

/**
 * Indicator组件的控制器，可以将此对象绑定至Indicator组件来控制翻页。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class IndicatorComponentController {
  /**
   * IndicatorComponentController的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor();

  /**
   * 跳转到下一导航点。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  showNext(): void;

  /**
   * 跳转到上一导航点。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  showPrevious(): void;

  /**
   * 翻至指定页面。
   *
   * @param { int | undefined } index - 指定页面在Swiper中的索引值。
   * @param { boolean } [useAnimation] - 设置翻至指定页面时是否有动效，true表示有动效，false表示没有动效。<br/>默认值：false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  changeIndex(index: int | undefined, useAnimation?: boolean): void;
}

/**
 * 除支持[通用属性]{@link ./../../@internal/component/ets/common}外，还支持以下属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IndicatorComponentAttribute extends CommonMethod {
  /**
   * 设置首次显示时当前导航点的索引值。设置小于0或大于等于导航点数量时，按照默认值0处理。
   * 
   * 单独导航点组件和Swiper绑定的时候，该属性不生效。
   *
   * @param { int | undefined } index
   * @returns { IndicatorComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  initialIndex(index: int | undefined): this;

  /**
   * 设置导航点总数量。
   * 
   * 单独导航点组件和Swiper绑定的时候，以Swiper的页面数量为准。
   *
   * @param { int | undefined } totalCount
   * @returns { IndicatorComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  count(totalCount: int | undefined): this;

  /**
   * 设置可选导航点指示器样式。
   *
   * @param { DotIndicator | DigitIndicator | undefined } indicatorStyle - 可选导航点指示器样式。<br/> - DotIndicator：圆点指示器样式。<br/>
   *     - DigitIndicator：数字指示器样式。<br/>  默认类型：DotIndicator。
   * @returns { IndicatorComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  style(indicatorStyle: DotIndicator | DigitIndicator | undefined): this;

  /**
   * 设置是否开启循环。
   * 
   * 单独导航点组件和Swiper绑定的时候，该属性不生效。
   *
   * @param { boolean | undefined } isLoop
   * @returns { IndicatorComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  loop(isLoop: boolean | undefined): this;

  /**
   * 设置是否为纵向滑动。
   * 
   * 单独导航点组件和Swiper绑定的时候，该属性不生效。
   *
   * @param { boolean | undefined } isVertical
   * @returns { IndicatorComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  vertical(isVertical: boolean | undefined): this;

  /**
   * 当前显示的选中导航点索引变化时触发该事件，可通过回调函数获取当前选中导航点的索引值。
   *
   * @param { Callback<int> | undefined } event
   * @returns { IndicatorComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onChange(event: Callback<int> | undefined): this;


  /**
   * 设置indicatorComponent组件配置项。
   *
   * @param { IndicatorComponentController } [controller] - IndicatorComponent构造函数选项
   * @returns { IndicatorComponentAttribute } 返回IndicatorComponentAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setIndicatorComponentOptions(controller?: IndicatorComponentController): this;
}

/**
 * 单独导航点组件的构造函数，可配置该组件的控制器。
 *
 * @param { IndicatorComponentController } [controller] - IndicatorComponent constructor options
 * @returns { IndicatorComponentAttribute }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function IndicatorComponent(
  controller?: IndicatorComponentController
): IndicatorComponentAttribute;

/**
 * 定义IndicatorComponent组件
 *
 * @param { CustomBuilderT<IndicatorComponentAttribute> } style_ - indicatorComponent属性实例
 * @returns { IndicatorComponentAttribute }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function IndicatorComponent(
 style_: CustomBuilderT<IndicatorComponentAttribute>,
): IndicatorComponentAttribute;