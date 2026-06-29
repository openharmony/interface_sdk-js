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
import { Alignment } from './enums';
import { ComponentBuilder, CustomBuilder, Builder, CustomBuilderT, ConstructorT } from './builder';
import { AttributeModifier, CommonMethod, PointLightStyle } from './common';
/**
 * Options used to construct the stack.
 *
 * @interface StackOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface StackOptions {
    /**
     * Alignment of child components in the container.
     *
     * Anonymous Object Rectification
     * @type { ?Alignment }
     * @default Alignment.Center
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    alignContent?: Alignment;
}

/**
 * The StackAttribute.
 * 
 * @extends CommonMethod
 * @interface StackAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface StackAttribute extends CommonMethod {
    /**
     * Called when the alignment of items in the container is set.
     *
     * @param { Alignment | undefined } value
     * @returns { StackAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default alignContent(value: Alignment | undefined): this;
    /**
    * Sets the point light style.
    *
    * @param { PointLightStyle | undefined } value - The point light style.
    * @returns { StackAttribute } The attribute of the stack.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @systemapi
    * @stagemodelonly
    * @since 23 static
    */
    default pointLight(value: PointLightStyle | undefined): StackAttribute;
    /**
     * Set whether to synchronously load child nodes within one frame.
     *
     * @param { boolean | undefined } enable - Indicates whether to load subnodes in a frame synchronously.
     *     <br>Default value: <em>true</em>
     * @returns { StackAttribute } The attribute of the Stack.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default syncLoad(enable: boolean | undefined): this;
    /**
     * Set Stack options.
     *
     * @param { StackOptions } [options] - Stack constructor options
     * @returns { StackAttribute } Returns the instance of the StackAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setStackOptions(options?: StackOptions): this;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<StackAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { StackAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<StackAttribute> | AttributeModifier<CommonMethod>
        | undefined): this;
}

/**
 * Defines Stack Component.
 *
 * @param { StackOptions } [options] - Stack options.
 * @param { CustomBuilder } [content_] - container
 * @returns { StackAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Stack(
    options?: StackOptions,
    content_?: CustomBuilder,
): StackAttribute

/**
 * Defines Stack Component.
 *
 * @param { CustomBuilderT<StackAttribute> } style - the callback to set up component's attributes.
 * @param { CustomBuilder } [content_] - container
 * @returns { StackAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function Stack(
    style: CustomBuilderT<StackAttribute>,
    content_?: CustomBuilder,
): StackAttribute;

/**
 * Defines the Extendable Stack.
 *
 * @implements StackAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export declare abstract class ExtendableStack implements StackAttribute {
    /**
     * Constructor of Extendable Stack.
     *
     * @param { ConstructorT<T> } factory
     * @param { StackOptions } [options]
     * @param { CustomBuilder } [content_]
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    @ComponentBuilder
    static $_instantiate<T extends ExtendableStack>(
        factory: ConstructorT<T>, 
        options?: StackOptions,
        content_?: CustomBuilder
    ): T;

    /**
     * Entry of Extendable Stack.
     *
     * @param { CustomBuilderT<T> } styles
     * @param { ConstructorT<T> } factory
     * @param { CustomBuilder } [content_]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    @Builder
    static _instantiateImpl<T extends ExtendableStack>(
        styles: CustomBuilderT<T>, 
        factory: ConstructorT<T>, 
        content_?: CustomBuilder
    ): void;
    
    /**
     * Set the Stack Options.
     *
     * @param { StackOptions } [options]
     * @returns { ExtendableStack }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setStackOptions(options?: StackOptions): this;
}
