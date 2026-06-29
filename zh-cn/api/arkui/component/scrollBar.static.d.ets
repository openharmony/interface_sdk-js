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
import { Scroller } from "./scroll";
import { BarState } from './enums';
import { CommonMethod } from './common';
import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { AttributeModifier, CommonMethod } from "./common";
import { ColorMetrics } from '../Graphics';
/**
 * 内容滚动方向。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ScrollBarDirection {

  /**
   * Vertical scrolling is supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Vertical,

  /**
     * Horizontal scrolling is supported.
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Horizontal
}

/**
 * 定义滚动条的参数选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ScrollBarOptions {

  /**
   * 设置滚动条的控制器。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  scroller: Scroller;

  /**
   * 设置滚动条的方向。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  direction?: ScrollBarDirection;

  /**
   * 设置滚动条的状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  state?: BarState;
}

/**
 * 除支持[通用属性]{@link common}外，还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface ScrollBarAttribute extends CommonMethod {

  /**
   * 设置滚动条是否嵌套滚动。
   *
   * @param { boolean | undefined } enabled - 是否执行嵌套滚动。设置为true执行嵌套滚动，设置为false不嵌套滚动。 <br/>默认值：false <br/>取值为undefined时，
   *     按默认值处理。
   * @returns { this } The attribute of the scroll bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableNestedScroll(enabled: boolean | undefined): this;

  /**
   * 设置滚动条滑块的颜色，仅滚动条不放置子组件时生效。
   *
   * @param { ColorMetrics | undefined } color - 滚动条的颜色。<br/>取值为undefined时，滚动条的颜色为'#66182431'。<br/>默认值：
   *     ColorMetrics.numeric(0x66182431)
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default scrollBarColor(color: ColorMetrics | undefined): this;

  /**
   * 设置滚动条选项。
   *
   * @param { ScrollBarOptions } value - ScrollBar constructor options
   * @returns { ScrollBarAttribute } 返回ScrollBarAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setScrollBarOptions(value: ScrollBarOptions): this;

  /**
   * 动态设置ScrollBar组件的属性方法。
   *
   * @param { AttributeModifier<ScrollBarAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<ScrollBarAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 定义滚动条组件。
 *
 * @param { ScrollBarOptions } 滚动条参数 - 滚动条参数
 * @param { CustomBuilder } [content_] - 子组件
 * @returns { ScrollBarAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function ScrollBar(
    value: ScrollBarOptions, 
    content_?: CustomBuilder,
): ScrollBarAttribute;

/**
 * 定义滚动条组件。
 *
 * @param { CustomBuilderT<ScrollBarAttribute> } style_ - The style to create a ScrollBar.
 * @param { CustomBuilder } [content_]
 * @returns { ScrollBarAttribute } ScrollBar的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function ScrollBar(
    style_: CustomBuilderT<ScrollBarAttribute>, 
    content_?: CustomBuilder
): ScrollBarAttribute;