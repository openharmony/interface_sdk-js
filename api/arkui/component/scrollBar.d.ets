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


import { Scroller } from "./scroll";
import { BarState } from "./enums";
import { Optional, CommonMethod, UICommonMethod, AttributeModifier } from "./common";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Content scroll direction.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum ScrollBarDirection {
    /**
     * Vertical scrolling is supported.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Vertical,
    /**
     * Horizontal scrolling is supported.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Horizontal
}
/**
 * Defines the options of ScrollBar.
 *
 * @interface ScrollBarOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface ScrollBarOptions {
    /**
     * Sets the scroller of scroll bar.
     *
     * @type { Scroller }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    scroller: Scroller;
    /**
     * Sets the direction of scroll bar.
     *
     * @type { ?ScrollBarDirection }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    direction?: ScrollBarDirection;
    /**
     * Sets the state of scroll bar.
     *
     * @type { ?BarState }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    state?: BarState;
}
export declare interface ScrollBarAttribute extends CommonMethod {
    /**
     * Called when setting whether to enable nested scroll.
     * @param { Optional<boolean> } enabled - Whether to enable nested scroll.
     * @returns { ScrollBarAttribute } The attribute of the scroll bar
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enableNestedScroll(enabled: boolean | undefined): this;
    attributeModifier(modifier: AttributeModifier<ScrollBarAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UIScrollBarAttribute extends UICommonMethod {
    /**
     * Called when setting whether to enable nested scroll.
     * @param { Optional<boolean> } enabled - Whether to enable nested scroll.
     * @returns { ScrollBarAttribute } The attribute of the scroll bar
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    enableNestedScroll(enabled: boolean | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<ScrollBarAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function ScrollBar(
    value: ScrollBarOptions, 
    @memo
    content_?: () => void,
): UIScrollBarAttribute