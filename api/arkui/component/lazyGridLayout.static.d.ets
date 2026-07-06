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
 * The LazyGridLayoutAttribute.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface LazyGridLayoutAttribute extends CommonMethod {

  /**
   * The spacing between rows.
   *
   * @param { LengthMetrics | undefined } value
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default rowsGap(value: LengthMetrics | undefined): this;

  /**
   * The spacing between columns.
   *
   * @param { LengthMetrics | undefined } value
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default columnsGap(value: LengthMetrics | undefined): this;

  /**
   * Sets the header of the lazy grid layout.
   *
   * @param { CustomBuilder | undefined } builder - The header builder function
   *     <br>Passing undefined will remove the header.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default header(builder: CustomBuilder | undefined): this;

  /**
   * Sets the footer of the lazy grid layout.
   *
   * @param { CustomBuilder | undefined } builder - The footer builder function
   *     <br>Passing undefined will remove the footer.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default footer(builder: CustomBuilder | undefined): this;

  /**
   * Sets sticky style for header and footer.
   *
   * @param { StickyStyle | undefined } sticky - The sticky style for header and footer.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default sticky(sticky: StickyStyle | undefined): this;

  /**
   * Triggered when the index of child components in the visible area changes.
   *
   * @param { OnVisibleIndexesChangeCallback | undefined } callback - callback function, triggered
   *     when the index of child components in the visible area changes.
   *     Passing undefined will unregister the callback.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onVisibleIndexesChange(callback: OnVisibleIndexesChangeCallback | undefined): this;
}

/**
 * The LazyVGridLayoutAttribute
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface LazyVGridLayoutAttribute extends LazyGridLayoutAttribute {

  /**
   * This parameter specifies the number of columns in the current grid layout.
   *
   * @param { string | undefined } value
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default columnsTemplate(value: string | undefined): this;

  /**
   * Set LazyVGrid options.
   *
   * @returns { LazyVGridLayoutAttribute } Returns the instance of the LazyVGridLayoutAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setLazyVGridLayoutOptions(): this;

  /**
   * Called attributeModifier.
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
 * Defines LazyVGridLayout Component.
 *
 * @param { CustomBuilder } [content_] - container
 * @returns { LazyVGridLayoutAttribute } The attribute of the grid
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
 * Defines LazyVGridLayout Component.
 *
 * @param { CustomBuilderT<LazyVGridLayoutAttribute> } style_ - The style to create a LazyVGridLayout.
 * @param { CustomBuilder } [content_]
 * @returns { LazyVGridLayoutAttribute } The attribute of the LazyVGridLayout.
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
