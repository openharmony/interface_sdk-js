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
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod } from "./common";
import { ColorMetrics } from '../Graphics';
/**
 * Content scroll direction.
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
 * Defines the options of ScrollBar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ScrollBarOptions {

  /**
   * Sets the scroller of scroll bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  scroller: Scroller;

  /**
   * Sets the direction of scroll bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  direction?: ScrollBarDirection;

  /**
   * Sets the state of scroll bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  state?: BarState;
}

/**
 * The ScrollBarAttribute
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface ScrollBarAttribute extends CommonMethod {

  /**
   * Called when setting whether to enable nested scroll.
   *
   * @param { boolean | undefined } enabled - Whether to enable nested scroll.
   * @returns { this } The attribute of the scroll bar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableNestedScroll(enabled: boolean | undefined): this;

  /**
   * Color of the scrollbar.
   *
   * @param { ColorMetrics | undefined } color - Color of the scrollbar.
   *     Passing undefined will restore the default value.
   *     Default value: <em>'\#182431'</em>(40% opacity).
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default scrollBarColor(color: ColorMetrics | undefined): this;

  /**
   * Called attributeModifier.
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
 * Defines ScrollBar Component.
 *
 * @param { ScrollBarOptions } value - value
 * @param { CustomBuilder } [content_] - container
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
