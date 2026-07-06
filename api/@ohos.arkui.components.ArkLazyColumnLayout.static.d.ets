'use static'
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
import { ComponentBuilder, CustomBuilder, Builder, CustomBuilderT } from './arkui/component/builder';
import { AttributeModifier, CommonMethod, OnVisibleIndexesChangeCallback } from './arkui/component/common';
import { HorizontalAlign } from './arkui/component/enums';
import { StickyStyle } from './arkui/component/list';
import { LengthMetrics } from './arkui/Graphics';

/**
 * Defines the lazy column layout attribute.
 *
 * @extends CommonMethod
 * @interface { LazyColumnLayoutAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface LazyColumnLayoutAttribute extends CommonMethod {
    /**
     * The spacing between rows.
     *
     * @param { LengthMetrics | undefined } space - the spacing between rows.
     *     <br>Default value: 0. <br>Range: [0, +∞).
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default space(space: LengthMetrics | undefined): this;

    /**
     * Sets the horizontal alignment of the row content.
     *
     * @param { HorizontalAlign | undefined } value - the horizontal alignment of the row content.
     *     <br>Default value: HorizontalAlign.Center.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default alignItems(value: HorizontalAlign | undefined): this;

    /**
    * Sets the header of the lazy column layout.
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
    * Sets the footer of the lazy column layout.
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
     *     <br>Passing undefined will unregister the callback.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default onVisibleIndexesChange(callback: OnVisibleIndexesChangeCallback | undefined): this;

    /**
     * Set LazyColumnLayout options.
     *
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setLazyColumnLayoutOptions(): this;

    /**
     * Sets the attribute modifier.
     *
     * @param { AttributeModifier<LazyColumnLayoutAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default attributeModifier(modifier: AttributeModifier<LazyColumnLayoutAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines LazyColumnLayout Component.
 *
 * @param { CustomBuilder } [content_] - content
 * @returns { LazyColumnLayoutAttribute } The attribute of the LazyColumnLayout.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ComponentBuilder
export declare function LazyColumnLayout(
    content_?: CustomBuilder,
): LazyColumnLayoutAttribute;

/**
 * Defines LazyColumnLayout Component.
 *
 * @param { CustomBuilderT<LazyColumnLayoutAttribute> } style_ - The style to create a LazyColumnLayout.
 * @param { CustomBuilder } [content_] - content
 * @returns { LazyColumnLayoutAttribute } The attribute of the LazyColumnLayout.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function LazyColumnLayout(
    style_: CustomBuilderT<LazyColumnLayoutAttribute>,
    content_?: CustomBuilder
): LazyColumnLayoutAttribute;
