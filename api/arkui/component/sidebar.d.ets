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


import { Resource } from '../../global/resource';
import { Length, ResourceColor, Dimension } from "./units";
import { CommonMethod, UICommonMethod, AttributeModifier } from "./common";
import image from '../../@ohos.multimedia.image';
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Sets the sidebar style of showing
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum SideBarContainerType {
    /**
     * The sidebar invisible
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Embed,
    /**
     * The sidebar visible
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Overlay,
    /**
     * The sidebar AUTO
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    AUTO
}
/**
 * Sets the sidebar position of showing
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum SideBarPosition {
    /**
     * The sidebar is on the Start of the container
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Start,
    /**
     * The sidebar is on the End of the container
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    End
}
/**
 * ButtonStyle icons.
 *
 * @typedef ButtonIconOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface ButtonIconOptions {
    /**
     * Defines whether an icon is shown.
     *
     * @type { string | PixelMap | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    shown: string | image.PixelMap | Resource;
    /**
     * Defines whether an icon is hidden.
     *
     * @type { string | PixelMap | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    hidden: string | image.PixelMap | Resource;
    /**
     * Defines whether an icon is switching.
     *
     * @type { ?(string | image.PixelMap | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    switching?: string | image.PixelMap | Resource;
}
/**
 * Sets the control button style
 *
 * @interface ButtonStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface ButtonStyle {
    /**
     * Set the left of control button
     * default value is 16vp.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    left?: number;
    /**
     * Set the top of control button
     * default value is 48vp.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    top?: number;
    /**
     * Set the width of control button
     * default value is 24vp.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    width?: number;
    /**
     * Set the height of control button
     * default value is 24vp.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    height?: number;
    /**
     * Set the button icon when sidebar status has changed
     *
     * @type { ?ButtonIconOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    icons?: ButtonIconOptions;
}
/**
 * Provides an interface for the style of a divider including stroke width, color, start margin
 * and end margin
 *
 * @interface DividerStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface DividerStyle {
    /**
     * Define the stroke width of the divider
     *
     * @type { Length }
     * @default 1vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    strokeWidth: Length;
    /**
     * Define the color of the divider
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    color?: ResourceColor;
    /**
     * Define the start margin of the divider
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    startMargin?: Length;
    /**
     * Define the end margin of the divider
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    endMargin?: Length;
}
export declare interface SideBarContainerAttribute extends CommonMethod {
    /**
     * Callback showControlButton function when setting the status of sidebar
     *
     * @param { boolean } value
     * @returns { SideBarContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    showSideBar(value: boolean | undefined): this;
    /**
     * Callback controlButton function when setting the style of button
     *
     * @param { ButtonStyle } value
     * @returns { SideBarContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    controlButton(value: ButtonStyle | undefined): this;
    /**
     * Callback showControlButton function when setting the status of button
     *
     * @param { boolean } value
     * @returns { SideBarContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    showControlButton(value: boolean | undefined): this;
    /**
     * Trigger callback when sidebar style of showing change finished.
     *
     * @param { function } callback
     * @returns { SideBarContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onChange(callback: ((value: boolean) => void) | undefined): this;
    /**
     * Sets the length of sidebar.
     * default value is 240vp.
     *
     * @param { number } value
     * @returns { SideBarContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    sideBarWidth(value: number | undefined): this;
    /**
     * Sets the min length of sidebar.
     * default value is 240vp.
     *
     * @param { number } value
     * @returns { SideBarContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    minSideBarWidth(value: number | undefined): this;
    /**
     * Sets the max length of sidebar.
     * default value is 280vp.
     *
     * @param { number } value
     * @returns { SideBarContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    maxSideBarWidth(value: number | undefined): this;
    /**
     * Sets the length of sidebar.
     *
     * @param { Length } value
     * @returns { SideBarContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    sideBarWidth(value: Length | undefined): this;
    /**
     * Sets the min length of sidebar.
     * default value is 200vp.
     *
     * @param { Length } value
     * @returns { SideBarContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    minSideBarWidth(value: Length | undefined): this;
    /**
     * Sets the max length of sidebar.
     * default value is 280vp.
     *
     * @param { Length } value
     * @returns { SideBarContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    maxSideBarWidth(value: Length | undefined): this;
    /**
     * Sets whether to automatically hide when drag sidebar width is less than the minimum width.
     * default value is true.
     *
     * @param { boolean } value
     * @returns { SideBarContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    autoHide(value: boolean | undefined): this;
    /**
     * Called when determining the location of the sidebar.
     * default value is Start.
     *
     * @param { SideBarPosition } value
     * @returns { SideBarContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    sideBarPosition(value: SideBarPosition | undefined): this;
    /**
     * Set divider style for sideBarContainer
     *
     * @param { DividerStyle | null } value - indicates the style of the divider or whether to show the divider.
     * @returns { SideBarContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    divider(value: DividerStyle | null | undefined): this;
    /**
     * Sets the min length of content.
     * default value is 360vp.
     *
     * @param { Dimension } value - min length of content.
     * @returns { SideBarContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    minContentWidth(value: Dimension | undefined): this;
    attributeModifier(modifier: AttributeModifier<SideBarContainerAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UISideBarContainerAttribute extends UICommonMethod {
    /**
     * Callback showControlButton function when setting the status of sidebar
     *
     * @param { boolean } value
     * @returns { SideBarContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    showSideBar(value: boolean | undefined): this;
    /**
     * Callback controlButton function when setting the style of button
     *
     * @param { ButtonStyle } value
     * @returns { SideBarContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    controlButton(value: ButtonStyle | undefined): this;
    /**
     * Callback showControlButton function when setting the status of button
     *
     * @param { boolean } value
     * @returns { SideBarContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    showControlButton(value: boolean | undefined): this;
    /**
     * Trigger callback when sidebar style of showing change finished.
     *
     * @param { function } callback
     * @returns { SideBarContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onChange(callback: ((value: boolean) => void) | undefined): this;
    /**
     * Sets the length of sidebar.
     * default value is 240vp.
     *
     * @param { number } value
     * @returns { SideBarContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    sideBarWidth(value: number | undefined): this;
    /**
     * Sets the min length of sidebar.
     * default value is 240vp.
     *
     * @param { number } value
     * @returns { SideBarContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    minSideBarWidth(value: number | undefined): this;
    /**
     * Sets the max length of sidebar.
     * default value is 280vp.
     *
     * @param { number } value
     * @returns { SideBarContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    maxSideBarWidth(value: number | undefined): this;
    /**
     * Sets the length of sidebar.
     *
     * @param { Length } value
     * @returns { SideBarContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    sideBarWidth(value: Length | undefined): this;
    /**
     * Sets the min length of sidebar.
     * default value is 200vp.
     *
     * @param { Length } value
     * @returns { SideBarContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    minSideBarWidth(value: Length | undefined): this;
    /**
     * Sets the max length of sidebar.
     * default value is 280vp.
     *
     * @param { Length } value
     * @returns { SideBarContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    maxSideBarWidth(value: Length | undefined): this;
    /**
     * Sets whether to automatically hide when drag sidebar width is less than the minimum width.
     * default value is true.
     *
     * @param { boolean } value
     * @returns { SideBarContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    autoHide(value: boolean | undefined): this;
    /**
     * Called when determining the location of the sidebar.
     * default value is Start.
     *
     * @param { SideBarPosition } value
     * @returns { SideBarContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    sideBarPosition(value: SideBarPosition | undefined): this;
    /**
     * Set divider style for sideBarContainer
     *
     * @param { DividerStyle | null } value - indicates the style of the divider or whether to show the divider.
     * @returns { SideBarContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    divider(value: DividerStyle | null | undefined): this;
    /**
     * Sets the min length of content.
     * default value is 360vp.
     *
     * @param { Dimension } value - min length of content.
     * @returns { SideBarContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    minContentWidth(value: Dimension | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<SideBarContainerAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function SideBarContainer(
    type?: SideBarContainerType, 
    @memo
    content_?: () => void,
): UISideBarContainerAttribute