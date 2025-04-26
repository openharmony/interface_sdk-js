/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @arkts 1.2
 */


import { CommonMethod, UICommonMethod, AttributeModifier } from "./common";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Defines the grid item style.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum GridItemStyle {
    /**
     * Show none style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    NONE = 0,
    /**
     * Show plain style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    PLAIN = 1
}
/**
 * Defines the grid item options.
 *
 * @interface GridItemOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface GridItemOptions {
    /**
     * Describes the GridItem style.
     *
     * @type { ?GridItemStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    style?: GridItemStyle;
}
export declare interface GridItemAttribute extends CommonMethod {
    /**
     * This parameter specifies the start line number of the current element.
     *
     * @param { number } value
     * @returns { GridItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    rowStart(value: number | undefined): this;
    /**
     * Specifies the end line number of the current element.
     *
     * @param { number } value
     * @returns { GridItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    rowEnd(value: number | undefined): this;
    /**
     * This parameter specifies the start column number of the current element.
     *
     * @param { number } value
     * @returns { GridItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    columnStart(value: number | undefined): this;
    /**
     * This parameter specifies the end column number of the current element.
     *
     * @param { number } value
     * @returns { GridItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    columnEnd(value: number | undefined): this;
    /**
     * Called when judging whether it is selectable.
     *
     * @param { boolean } value
     * @returns { GridItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    selectable(value: boolean | undefined): this;
    /**
     * Called when judging whether it is selected.
     * This parameter supports $$ for two-way binding of variables.
     *
     * @param { boolean } value - if the gridItem is selected.
     * @returns { GridItemAttribute } the attribute of the gridItem.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    selected(value: boolean | undefined): this;
    /**
     * Called when the gridItem is selected.
     *
     * @param { function } event
     * @returns { GridItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onSelect(event: ((isSelected: boolean) => void) | undefined): this;
    attributeModifier(modifier: AttributeModifier<GridItemAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UIGridItemAttribute extends UICommonMethod {
    /**
     * This parameter specifies the start line number of the current element.
     *
     * @param { number } value
     * @returns { GridItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    rowStart(value: number | undefined): this;
    /**
     * Specifies the end line number of the current element.
     *
     * @param { number } value
     * @returns { GridItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    rowEnd(value: number | undefined): this;
    /**
     * This parameter specifies the start column number of the current element.
     *
     * @param { number } value
     * @returns { GridItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    columnStart(value: number | undefined): this;
    /**
     * This parameter specifies the end column number of the current element.
     *
     * @param { number } value
     * @returns { GridItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    columnEnd(value: number | undefined): this;
    /**
     * Called when judging whether it is selectable.
     *
     * @param { boolean } value
     * @returns { GridItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    selectable(value: boolean | undefined): this;
    /**
     * Called when judging whether it is selected.
     * This parameter supports $$ for two-way binding of variables.
     *
     * @param { boolean } value - if the gridItem is selected.
     * @returns { GridItemAttribute } the attribute of the gridItem.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    selected(value: boolean | undefined): this;
    /**
     * Called when the gridItem is selected.
     *
     * @param { function } event
     * @returns { GridItemAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onSelect(event: ((isSelected: boolean) => void) | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<GridItemAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function GridItem(
    value?: GridItemOptions, 
    @memo
    content_?: () => void,
): UIGridItemAttribute