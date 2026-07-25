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
 * 设置堆叠容器的子组件对齐方式。
 *
 * @interface StackOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface StackOptions {
    /**
     * 设置子组件在容器内的对齐方式。
     * 默认值：Alignment.Center，非法值：按默认值处理。
     *
     * @type { ?Alignment }
     * @default Alignment.Center
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    alignContent?: Alignment;
}

/**
 * 堆叠容器，子组件按照顺序依次入栈，后一个子组件覆盖前一个子组件。
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
     * 设置子组件在容器内的对齐方式。该属性与align同时设置时，后设置的属性生效。
     * 该属性与接口的构造入参同时设置时，生效属性上的设置效果。
     *
     * @param { Alignment | undefined } value - 所有子组件在容器内的对齐方式。
     *     默认值：Alignment.Center，非法值：按默认值处理。
     *     取值为undefined时，按默认值处理。
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
     * 设置是否同步加载Stack区域内所有子组件。
     *
     * @param { boolean } enable - 是否同步加载Stack区域内所有子组件。
     *     true表示同步加载；false表示异步加载。
     *     默认值：true。
     *     设置为false时，在首次显示场景，若当前帧布局耗时超过50ms，
     *     会将Stack区域内尚未布局的子组件延后到下一帧进行布局。
     * @returns { StackAttribute } The attribute of the Stack.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default syncLoad(enable: boolean): this;
    /**
     * 设置Stack选项。
     *
     * @param { StackOptions } [options] - Stack constructor options
     * @returns { StackAttribute } Returns the instance of the StackAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setStackOptions(options?: StackOptions): this;
    /**
     * 设置组件的动态属性。
     *
     * @param { AttributeModifier<StackAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     *     - 动态设置Stack组件的属性。
     *     取值为undefined时，按当前组件的属性方法默认值处理。
     * @returns { StackAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<StackAttribute> | AttributeModifier<CommonMethod>
        | undefined): this;
}

/**
 * 堆叠容器，子组件按照顺序依次入栈，后一个子组件覆盖前一个子组件。
 *
 * @param { StackOptions } [options] - 设置子组件在容器内的对齐方式。
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
     * @unpublished
     * @stagemodelonly
     * @since 26.1.0 staticonly
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
