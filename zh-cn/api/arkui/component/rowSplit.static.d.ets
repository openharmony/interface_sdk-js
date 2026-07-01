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
import { ComponentBuilder, CustomBuilder, CustomBuilderT, Builder } from './builder';
import { AttributeModifier, CommonMethod } from './common';

/**
 * 将子组件横向布局，并在每个子组件之间插入纵向分割线。
 *
 * RowSplit通过分割线限制子组件的宽度。初始化时，分割线位置根据子组件的宽度来计算。
 * 初始化后，动态修改子组件的宽度不生效，分割线位置保持不变，可以通过拖动相邻分割线改变子组件宽度。
 *
 * 初始化后，动态修改
 * [margin](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#margin)、
 * [border](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border.md#border)、
 * [padding](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#padding)
 * 通用属性导致子组件宽度大于相邻分割线间距的异常情况下，不支持拖动分割线改变子组件的宽度。
 *
 * RowSplit组件[形状裁剪](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-sharp-clipping.md)的默认值为true。
 *
 * @extends CommonMethod
 * @interface RowSplitAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface RowSplitAttribute extends CommonMethod {
    /**
     * 设置分割线是否可拖拽。
     *
     * > 说明：
     * >
     * > RowSplit的分割线可以改变左右两边子组件的宽度，子组件可改变宽度的范围取决于子组件的最大最小宽度。
     *
     * @param { boolean | undefined } value - 分割线是否可拖拽。
     *     设置为true时表示分割线可拖拽，设置为false时表示分割线不可拖拽。
     *     默认值：false
     *     非法值：按默认值处理。
     *     取值为undefined时，按默认值处理。
     * @returns { RowSplitAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default resizeable(value: boolean | undefined): this;
    /**
     * Set RowSplit options.
     *
     * @returns { RowSplitAttribute } Returns the instance of the RowSplitAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setRowSplitOptions(): this;
    /**
     * 设置组件的动态属性。
     *
     * @param { AttributeModifier<RowSplitAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     *     动态设置RowSplit组件的属性。
     *     取值为undefined时，按当前组件的属性方法默认值处理。
     * @returns { RowSplitAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<RowSplitAttribute> | AttributeModifier<CommonMethod>
        | undefined): this;
}

/**
 * 带分割线的子组件横向分隔布局。
 *
 * @param { CustomBuilder } [content_] - 定义子组件的Builder函数。
 * @returns { RowSplitAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function RowSplit(

    content_?: CustomBuilder,
): RowSplitAttribute

/**
 * Defines RowSplit Component.
 *
 * @param { CustomBuilderT<RowSplitAttribute> } style - the callback to set up component's attributes.
 * @param { CustomBuilder } [content_] - container
 * @returns { RowSplitAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function RowSplit(
    style: CustomBuilderT<RowSplitAttribute>,
    content_?: CustomBuilder,
): RowSplitAttribute;
