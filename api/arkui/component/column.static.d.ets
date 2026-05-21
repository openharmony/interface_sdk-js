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
import { HorizontalAlign, FlexAlign } from './enums';
import { Resource } from './../../global/resource';
import { ComponentBuilder, CustomBuilder, Builder, CustomBuilderT, ConstructorT } from './builder';
import { AttributeModifier, CommonMethod, PointLightStyle } from './common';
/**
 * Defines the space property with string, double and resource unit.
 *
 * @typedef { string | double | Resource } SpaceType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type SpaceType = string | double | Resource;
/**
 * Column constructor options.
 *
 * @interface ColumnOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ColumnOptions {
    /**
     * Vertical layout element spacing.
     *
     * @type { ?(string | double) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    space?: string | double;
}
/**
 * Column constructor options.
 *
 * @interface ColumnOptionsV2
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ColumnOptionsV2 {
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
 * The ColumnAttribute.
 * 
 * @extends CommonMethod
 * @interface ColumnAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface ColumnAttribute extends CommonMethod {
    /**
     * Sets the alignment format of the subassembly in the horizontal direction.
     *
     * @param { HorizontalAlign | undefined } value
     * @returns { ColumnAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default alignItems(value: HorizontalAlign | undefined): this;
    /**
     * Sets the alignment format of the subassembly in the vertical direction.
     *
     * @param { FlexAlign | undefined } value
     * @returns { ColumnAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default justifyContent(value: FlexAlign | undefined): this;
    /**
    * Defines the PointLight
    *
    * @param { PointLightStyle | undefined } value - The point light style.
    * @returns { ColumnAttribute } The attribute of the column.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @systemapi
    * @stagemodelonly
    * @since 23 static
    */
    default pointLight(value: PointLightStyle | undefined): ColumnAttribute;
    /**
     * Called when the Main-Axis's direction is set reversed or not
     *
     * @param { boolean | undefined } isReversed - If the main axis is reversed.
     * @returns { ColumnAttribute } The attribute of the column.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default reverse(isReversed: boolean | undefined): this;
    /**
     * Set Column options.
     *
     * @param { ColumnOptions | ColumnOptionsV2 } [options] - Column constructor options
     * @returns { ColumnAttribute } Returns the instance of the ColumnAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setColumnOptions(options?: ColumnOptions | ColumnOptionsV2): this;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<ColumnAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { ColumnAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<ColumnAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines Column Component.
 *
 * @param { ColumnOptions | ColumnOptions | ColumnOptionsV2 } [options] - Column options.
 * @param { CustomBuilder } [content_] - container
 * @returns { ColumnAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Column(
    options?: ColumnOptions | ColumnOptions | ColumnOptionsV2,
    content_?: CustomBuilder,
): ColumnAttribute

/**
 * Defines Column Component.
 *
 * @param { CustomBuilderT<ColumnAttribute> } style - the callback to set up component's attributes.
 * @param { CustomBuilder } [content_] - container
 * @returns { ColumnAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function Column(
    style: CustomBuilderT<ColumnAttribute>,
    content_?: CustomBuilder,
): ColumnAttribute;

/**
 * Defines the Extendable Column.
 *
 * @implements ColumnAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export declare abstract class ExtendableColumn implements ColumnAttribute {
    /**
     * Constructor of Extendable Column.
     *
     * @param { ConstructorT<T> } factory
     * @param { ColumnOptions | ColumnOptionsV2 } [options]
     * @param { CustomBuilder } [content_]
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    @ComponentBuilder
    static $_instantiate<T extends ExtendableColumn>(
        factory: ConstructorT<T>, 
        options?: ColumnOptions | ColumnOptionsV2, 
        content_?: CustomBuilder
    ): T;

    /**
     * Entry of Extendable Column.
     *
     * @param { CustomBuilderT<T> } styles
     * @param { ConstructorT<T> } factory
     * @param { CustomBuilder } [content_]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    @Builder
    static _instantiateImpl<T extends ExtendableColumn>(
        styles: CustomBuilderT<T>, 
        factory: ConstructorT<T>, 
        content_?: CustomBuilder
    ): void;
    
    /**
     * Set the Column Options.
     *
     * @param { ColumnOptions | ColumnOptionsV2 } [options]
     * @returns { ExtendableColumn }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setColumnOptions(options?: ColumnOptions | ColumnOptionsV2): this;
}
