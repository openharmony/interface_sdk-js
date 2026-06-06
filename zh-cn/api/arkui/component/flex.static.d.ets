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
import { LengthMetrics } from '../Graphics';
import { FlexWrap, FlexDirection, ItemAlign, FlexAlign } from './enums';
import { ComponentBuilder, CustomBuilder, CustomBuilderT, Builder} from './builder';
import { AttributeModifier, CommonMethod, PointLightStyle } from './common';
/**
 * 设置Flex子组件的排列对齐方式。
 *
 * @interface FlexOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface FlexOptions {
    /**
     * 子组件在Flex容器上排列的方向，即主轴的方向。
     *
     * @type { ?FlexDirection }
     * @default FlexDirection.Row
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    direction?: FlexDirection;
    /**
     * Flex容器是单行/列还是多行/列排列。
     *
     * @type { ?FlexWrap }
     * @default FlexWrap.NoWrap
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    wrap?: FlexWrap;
    /**
     * 所有子组件在Flex容器主轴上的对齐格式。
     *
     * @type { ?FlexAlign }
     * @default FlexAlign.Start
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    justifyContent?: FlexAlign;
    /**
     * 所有子组件在Flex容器交叉轴上的对齐格式。
     *
     * @type { ?ItemAlign }
     * @default ItemAlign.Start
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    alignItems?: ItemAlign;
    /**
     * 当交叉轴存在额外空间时，多行内容之间的对齐方式。
     * 仅在wrap为Wrap或WrapReverse下生效。
     *
     * @type { ?FlexAlign }
     * @default FlexAlign.Start
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    alignContent?: FlexAlign;
    /**
     * 所有子组件在Flex容器主轴或交叉轴的间距。
     *
     * @type { ?FlexSpaceOptions }
     * @default {main: LengthMetrics.px(0), cross: LengthMetrics.px(0)}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    space?: FlexSpaceOptions;
}
/**
 * 设置Flex容器的子组件在主轴或交叉轴的间距。
 *
 * @interface FlexSpaceOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface FlexSpaceOptions {
    /**
     * Flex容器主轴上的space。
     *
     * @type { ?LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    main?: LengthMetrics;
    /**
     * Flex容器交叉轴上的space。
     *
     * @type { ?LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    cross?: LengthMetrics;
}

/**
 * The FlexAttribute.
 *
 * @extends CommonMethod
 * @interface FlexAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface FlexAttribute extends CommonMethod {
    /**
    * Defines the PointLight
    *
    * @param { PointLightStyle | undefined } value - The point light style.
    * @returns { FlexAttribute } The attribute of the flex.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @systemapi
    * @stagemodelonly
    * @since 23 static
    */
    default pointLight(value: PointLightStyle | undefined): FlexAttribute;
    /**
 	 * Set Flex options.
 	 *
 	 * @param { FlexOptions } [value] - Flex constructor options
 	 * @returns { FlexAttribute } Returns the instance of the FlexAttribute.
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 26.0.0 staticonly
 	 */
 	default setFlexOptions(value?: FlexOptions): this;
    /**
     * 设置组件的动态属性。
     *
     * @param { AttributeModifier<FlexAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * - 动态设置Flex组件的属性。<br/>
     *   取值为undefined时，按当前组件的属性方法默认值处理。
     * @returns { FlexAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<FlexAttribute> | AttributeModifier<CommonMethod>
        | undefined): this;
}

/**
 * Flex布局容器。
 *
 * @param { FlexOptions } [value] - 弹性布局子组件参数。
 * @param { CustomBuilder } [content_] - container
 * @returns { FlexAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Flex(
    value?: FlexOptions,
    content_?: CustomBuilder,
): FlexAttribute

/**
 * Defines Flex Component.
 *
 * @param { CustomBuilderT<FlexAttribute> } style - the callback to set up component's attributes.
 * @param { CustomBuilder } [content_] - container
 * @returns { FlexAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function Flex(
    style: CustomBuilderT<FlexAttribute>,
    content_?: CustomBuilder,
): FlexAttribute;
