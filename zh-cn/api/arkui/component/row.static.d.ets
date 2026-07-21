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
 * 设置Row组件的子组件间距属性。
 *
 * @interface RowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RowOptions {
    /**
     * 横向布局元素间距。
     * 从API version 9开始，space为负数或者justifyContent设置为FlexAlign.SpaceBetween、
     * FlexAlign.SpaceAround、FlexAlign.SpaceEvenly时不生效。
     * 默认值：0
     * 单位：vp
     * 非法值：按默认值处理。
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
 * 设置Row组件的子组件间距属性。
 * 间距类型SpaceType支持number、string或Resource类型。
 *
 * @interface RowOptionsV2
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface RowOptionsV2 {
    /**
     * 横向布局元素间距。
     * space为负数或者justifyContent设置为FlexAlign.SpaceBetween、
     * FlexAlign.SpaceAround、FlexAlign.SpaceEvenly时不生效。
     * 默认值：0
     * 单位：vp
     * 非法值：按默认值处理。
     *
     * @type { ?SpaceType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    space?: SpaceType;
}

/**
 * 沿水平方向布局的容器。
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
     * 设置子组件在垂直方向上的对齐格式。
     *
     * @param { VerticalAlign | undefined } value - 子组件在垂直方向上的对齐格式。
     *     默认值：VerticalAlign.Center
     *     取值为undefined时，按默认值处理。
     * @returns { RowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default alignItems(value: VerticalAlign | undefined): this;
    /**
     * 设置子组件在水平方向上的对齐格式。
     *
     * > 说明：
     * >
     * > Row布局时若子组件不设置
     * > [flexShrink](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-flex-layout.md#flexshrink)
     * > 则默认不会压缩子组件，即所有子组件主轴大小累加可超过容器主轴，此时FlexAlign.Center和FlexAlign.End会失效。
     *
     * @param { FlexAlign | undefined } value - 子组件在水平方向上的对齐格式。
     *     默认值：FlexAlign.Start
     *     取值为undefined时，按默认值处理。
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
     * 设置子组件在水平方向上的排列是否反转。
     *
     * > 说明：
     * >
     * > 若未设置reverse属性，主轴方向不反转；若设置了reverse属性，且参数值为undefined，
     * > 则视为默认值true，主轴方向反转。
     * > 由于主轴排列方向受通用属性direction影响，若设置了direction属性，
     * > 则当reverse属性设置为true时，总在direction属性生效的结果上再做一次反转。
     *
     * @param { boolean | undefined } isReversed - 子组件在水平方向上的排列是否反转。
     *     默认值：true，设置true表示子组件在水平方向上反转排列，
     *     设置false表示子组件在水平方向上正序排列。
     *     取值为undefined时，按默认值处理。
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
     * 设置组件的动态属性。
     *
     * @param { AttributeModifier<RowAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     *     动态设置Row组件的属性。
     *     取值为undefined时，按当前组件的属性方法默认值处理。
     * @returns { RowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<RowAttribute> | AttributeModifier<CommonMethod>
        | undefined): this;
}

/**
 * 创建水平方向线性布局容器，可以设置子组件的间距。
 *
 * > 说明：
 * >
 * > 在复杂界面中使用多组件嵌套时，若布局组件的嵌套层数过深或嵌套的组件数量过多，将会产生额外开销。
 * > 建议通过移除冗余节点、利用布局边界减少布局计算、合理采用渲染控制语法及布局组件方法来优化性能。
 * > 最佳实践请参考[布局优化指导](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-improve-layout-performance)。
 *
 * @param { RowOptions | RowOptions | RowOptionsV2 } [options] - 横向布局元素间距，
     支持设置number、string或Resource类型。
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
     * @unpublished
     * @stagemodelonly
     * @since 26.1.0 staticonly
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
