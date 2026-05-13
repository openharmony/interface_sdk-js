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
import { VerticalAlign, FlexAlign } from './enums';
import { SpaceType } from './column';
import { ComponentBuilder, CustomBuilder, Builder, CustomBuilderT, ConstructorT } from './builder';
import { AttributeModifier, CommonMethod, PointLightStyle } from './common';
/**
 * Define options used to construct a row.
 *
 * @interface RowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RowOptions {
    /**
     * Row spacing.
     *
     * Anonymous Object Rectification
     * @type { ?(string | double) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    space?: string | double;
}
/**
 * Define options used to construct a row.
 *
 * @interface RowOptionsV2
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface RowOptionsV2 {
    /**
     * Vertical layout element spacing.
     *
     * @type { ?SpaceType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    space?: SpaceType;
}

/**
 * The RowAttribute.
 * 
 * @extends CommonMethod
 * @interface RowAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface RowAttribute extends CommonMethod {
    /**
     * Called when the vertical alignment is set.
     *
     * @param { VerticalAlign | undefined } value
     * @returns { RowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default alignItems(value: VerticalAlign | undefined): this;
    /**
     * Called when the horizontal alignment is set.
     *
     * @param { FlexAlign | undefined } value
     * @returns { RowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default justifyContent(value: FlexAlign | undefined): this;
    /**
    * Defines the PointLight
    *
    * @param { PointLightStyle | undefined } value - The point light style.
    * @returns { RowAttribute } The attribute of the row.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @systemapi
    * @stagemodelonly
    * @since 23 static
    */
    default pointLight(value: PointLightStyle | undefined): RowAttribute;
    /**
     * Called when the Main-Axis's direction is set reversed or not
     *
     * @param { boolean | undefined } isReversed - If the main axis is reversed.
     * @returns { RowAttribute } The attribute of the row.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default reverse(isReversed: boolean | undefined): this;
    /**
     * Set Row options.
     *
     * @param { RowOptions | RowOptionsV2 } [options] - Row constructor options
     * @returns { RowAttribute } Returns the instance of the RowAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setRowOptions(options?: RowOptions | RowOptionsV2): this;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<RowAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { RowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<RowAttribute> | AttributeModifier<CommonMethod>
        | undefined): this;
}

/**
 * Defines Row Component.
 *
 * @param { RowOptions | RowOptions | RowOptionsV2 } [options] - Row options.
 * @param { CustomBuilder } [content_] - container
 * @returns { RowAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Row(
    options?: RowOptions | RowOptions | RowOptionsV2,
    content_?: CustomBuilder,
): RowAttribute

/**
 * Defines Row Component.
 *
 * @param { CustomBuilderT<RowAttribute> } style - the callback to set up component's attributes.
 * @param { CustomBuilder } [content_] - container
 * @returns { RowAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function Row(
    style: CustomBuilderT<RowAttribute>,
    content_?: CustomBuilder,
): RowAttribute;

/**
 * Defines the Extendable Row.
 *
 * @implements RowAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export declare abstract class ExtendableRow implements RowAttribute {
    /**
     * Constructor of Extendable Row.
     *
     * @param { ConstructorT<T> } factory
     * @param { RowOptions | RowOptionsV2 } [options]
     * @param { CustomBuilder } [content_]
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    @ComponentBuilder
    static $_instantiate<T extends ExtendableRow>(
        factory: ConstructorT<T>, 
        options?: RowOptions | RowOptionsV2,
        content_?: CustomBuilder
    ): T;

    /**
     * Entry of Extendable Row.
     *
     * @param { CustomBuilderT<T> } styles
     * @param { ConstructorT<T> } factory
     * @param { CustomBuilder } [content_]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    @Builder
    static _instantiateImpl<T extends ExtendableRow>(
        styles: CustomBuilderT<T>, 
        factory: ConstructorT<T>, 
        content_?: CustomBuilder
    ): void;
    
    /**
     * Set the Row Options.
     *
     * @param { RowOptions | RowOptionsV2 } [options]
     * @returns { ExtendableRow }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setRowOptions(options?: RowOptions | RowOptionsV2): this;
}
