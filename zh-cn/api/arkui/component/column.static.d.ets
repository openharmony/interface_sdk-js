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
 * Column组件构造函数中space支持的数据类型，取值类型为下表类型中的并集。
 *
 * | 类型 | 说明 |
 * | --- | --- |
 * | string | 表示值类型为字符串，可取任意值。 |
 * | double | 表示类型为数字，可取任意值。 |
 * | [Resource](docroot://reference/apis-arkui/arkui-ts/ts-types.md#resource) | 表示值为资源引用类型，取值为从系统资源或者应用资源中引入的数据值。 |
 *
 * @typedef { string | double | Resource } SpaceType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type SpaceType = string | double | Resource;
/**
 * 设置Column组件的子组件间距属性。
 *
 * @interface ColumnOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ColumnOptions {
    /**
     * 纵向布局元素垂直方向间距。<br>
     * space为负数或者
     * [justifyContent](docroot://reference/apis-arkui/arkui-ts/ts-container-column.md#justifycontent8)
     * 设置为FlexAlign.SpaceBetween、FlexAlign.SpaceAround、FlexAlign.SpaceEvenly时，space不生效。<br>
     * 默认值：0<br>
     * 非法值：按默认值处理。<br>
     * 单位：vp<br>
     * **说明：**<br>
     * space取值是大于等于0的数字，或者可以转换为数字的字符串。
     *
     * @type { ?(string | double) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    space?: string | double;
}
/**
 * 设置Column组件的子组件间距属性。间距类型SpaceType支持number、string或Resource类型。
 *
 * @interface ColumnOptionsV2
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ColumnOptionsV2 {
    /**
     * 纵向布局元素垂直方向间距。<br>
     * space为负数或者justifyContent设置为FlexAlign.SpaceBetween、FlexAlign.SpaceAround、
     * FlexAlign.SpaceEvenly时，space不生效。<br>
     * 默认值：0<br>
     * 单位：vp<br>
     * 非法值：按默认值处理。<br>
     * **说明：**<br>
     * space取值是大于等于0的数字，或者可以转换为数字的字符串，
     * 或者可以转换为数字的Resource类型数据。
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
     * 设置子组件在水平方向上的对齐格式。
     *
     * @param { HorizontalAlign | undefined } value - 子组件在水平方向上的对齐格式。<br>
     *    默认值：HorizontalAlign.Center<br>
     *    取值为undefined时，按默认值处理。
     * @returns { ColumnAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default alignItems(value: HorizontalAlign | undefined): this;
    /**
     * 设置子组件在垂直方向上的对齐格式。
     *
     * > **说明：**
     * >
     * > Column布局时若子组件不设置
     * > [flexShrink](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-flex-layout.md#flexshrink)
     * > 则默认不会压缩子组件，即所有子组件主轴大小累加可超过容器主轴，
     * > 此时FlexAlign.Center和FlexAlign.End会失效。
     *
     * @param { FlexAlign | undefined } value - 子组件在垂直方向上的对齐格式。<br>
     *    默认值：FlexAlign.Start<br>
     *    取值为undefined时，按默认值处理。
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
     * 设置子组件在垂直方向上的排列是否反转。
     *
     * > **说明：**
     * >
     * > 若未设置reverse属性，主轴方向不反转；若设置了reverse属性，且参数值为undefined，
     * > 则视为默认值true，主轴方向反转。<br>
     * > 通用属性direction只能改变Column交叉轴方向，不改变Column主轴方向，
     * > 因此与reverse属性互不影响。
     *
     * @param { boolean | undefined } isReversed - 子组件在垂直方向上的排列是否反转。<br>
     *    默认值：true，设置true表示子组件在垂直方向上反转排列，
     *    设置false表示子组件在垂直方向上正序排列。<br>
     *    取值为undefined时，按默认值处理。
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
     * 设置组件的动态属性。
     *
     * @param { AttributeModifier<ColumnAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     *    - 动态设置Column组件的属性。<br>
     *    取值为undefined时，按当前组件的属性方法默认值处理。
     * @returns { ColumnAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<ColumnAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 沿垂直方向布局的容器。
 *
 * > **说明：**
 * >
 * > Column未设置高度或宽度时，在主轴或交叉轴方向上自适应子组件大小。
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
     * @unpublished
     * @stagemodelonly
     * @since 26.1.0 staticonly
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
