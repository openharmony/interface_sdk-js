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


import { LengthMetrics } from '../Graphics';
import { PointLightStyle, CommonMethod, UICommonMethod, AttributeModifier } from "./common";
import { FlexWrap, FlexDirection, ItemAlign, FlexAlign } from "./enums";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Defines the options of Flex.
 *
 * @interface FlexOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface FlexOptions {
    /**
     * Sets the horizontal layout of elements.
     *
     * @type { ?FlexDirection }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    direction?: FlexDirection;
    /**
     * Whether the Flex container is a single row/column arrangement or a multi-row/column arrangement.
     *
     * @type { ?FlexWrap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    wrap?: FlexWrap;
    /**
     * The alignment format of the subassembly on the Flex container spindle.
     *
     * @type { ?FlexAlign }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    justifyContent?: FlexAlign;
    /**
     * Alignment Format for Subassembly on Flex Container Cross Axis.
     *
     * @type { ?ItemAlign }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    alignItems?: ItemAlign;
    /**
     * The alignment of multiple lines of content when there is extra space in the cross axis.
     *
     * @type { ?FlexAlign }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    alignContent?: FlexAlign;
    /**
     * The space to be inserted, either horizontally or vertically,
     * between two adjacent components in the Flex container.
     *
     * @type { ?FlexSpaceOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    space?: FlexSpaceOptions;
}
/**
 * The space to be inserted, either horizontally or vertically,
 * between two adjacent components in the Flex container.
 *
 * @interface FlexSpaceOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface FlexSpaceOptions {
    /**
     * Defines the main space property.
     *
     * @type { ?LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    main?: LengthMetrics;
    /**
     * Defines the cross space property.
     *
     * @type { ?LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    cross?: LengthMetrics;
}
export declare interface FlexAttribute extends CommonMethod {
    /**
     * Defines the PointLight
     *
     * @param { PointLightStyle } value - The point light style.
     * @returns { FlexAttribute } The attribute of the flex.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    pointLight(value: PointLightStyle | undefined): this;
    attributeModifier(modifier: AttributeModifier<FlexAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UIFlexAttribute extends UICommonMethod {
    /**
     * Defines the PointLight
     *
     * @param { PointLightStyle } value - The point light style.
     * @returns { FlexAttribute } The attribute of the flex.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @memo
    pointLight(value: PointLightStyle | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<FlexAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function Flex(
    value?: FlexOptions, 
    @memo
    content_?: () => void,
): UIFlexAttribute