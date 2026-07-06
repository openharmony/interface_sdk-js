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
import { Dimension } from './units';
import { ComponentBuilder, CustomBuilder, CustomBuilderT, Builder } from './builder';
import { AttributeModifier, CommonMethod } from './common';
/**
 * 设置子组件与上下分割线的距离。
 *
 * @interface ColumnSplitDividerStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ColumnSplitDividerStyle {
    /**
     * 子组件与其上方分割线的距离。<br>
     * 默认值：0vp<br>
     * 非法值：按默认值处理，此时
     * [getInspectorByKey()](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-component-id.md#getinspectorbykey9)
     * 接口获取到的属性值为undefined。
     *
     * @type { ?Dimension }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    startMargin?: Dimension;
    /**
     * 子组件与其下方分割线的距离。<br>
     * 默认值：0vp<br>
     * 非法值：按默认值处理，此时
     * [getInspectorByKey()](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-component-id.md#getinspectorbykey9)
     * 接口获取到的属性值为undefined。
     *
     * @type { ?Dimension }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    endMargin?: Dimension;
}

/**
 * The ColumnSplitAttribute.
 *
 * @extends CommonMethod
 * @interface ColumnSplitAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface ColumnSplitAttribute extends CommonMethod {
    /**
     * 设置分割线是否可拖拽。
     *
     * @param { boolean | undefined } value - 分割线是否可拖拽。设置为true时表示分割线可拖拽，
     *    设置为false时表示分割线不可拖拽。<br>
     *    默认值：false<br>
     *    非法值：按默认值处理。<br>
     *    取值为undefined时，按默认值处理。
     * @returns { ColumnSplitAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default resizeable(value: boolean | undefined): this;
    /**
     * 设置分割线的margin。
     *
     * @param { ColumnSplitDividerStyle | null | undefined } value - 分割线的margin，
     *    即设置分割线与子组件的距离。<br>
     *    默认值：null。当设置为null时，分割线与子组件的距离为0vp。<br>
     *    非法值：按默认值处理。<br>
     *    取值为undefined时，按默认值处理。
     * @returns { ColumnSplitAttribute } the attribute of the ColumnSplit
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default divider(value: ColumnSplitDividerStyle | null | undefined): this;
    /**
 	 * Set ColumnSplit options.
 	 *
     * @returns { ColumnSplitAttribute }
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 26.0.0 staticonly
 	 */
 	default setColumnSplitOptions(): this;
    /**
     * 设置组件的动态属性。
     *
     * @param { AttributeModifier<ColumnSplitAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     *    - 动态设置ColumnSplit组件的属性。<br>
     *    取值为undefined时，按当前组件的属性方法默认值处理。
     * @returns { ColumnSplitAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<ColumnSplitAttribute>
        | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 将子组件纵向布局，并在每个子组件之间插入横向分割线。
 *
 * ColumnSplit通过分割线限制子组件的高度。初始化时，分割线位置根据子组件的高度来计算。
 * 初始化后，动态修改子组件的高度不生效，分割线位置保持不变，可通过拖动相邻分割线改变子组件高度。
 *
 * 初始化后，动态修改
 * [margin](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#margin)、
 * [border](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border.md#border)、
 * [padding](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#padding)
 * 通用属性导致子组件尺寸大于相邻分割线间距的异常情况下，不支持拖动分割线改变子组件的高度。
 *
 * > **说明：**
 * >
 * > ColumnSplit组件
 * > [形状裁剪](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-sharp-clipping.md)
 * > 的默认值为true。
 * >
 * > 与[RowSplit](docroot://reference/apis-arkui/arkui-ts/ts-container-rowsplit.md)相同，
 * > ColumnSplit的分割线可调整上下两侧子组件的高度，
 * > 子组件的高度调整范围受其最大最小高度限制。
 * >
 * > 支持[clip](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-sharp-clipping.md#clip12)、
 * > [margin](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#margin)
 * > 等通用属性，未设置clip属性时，其默认值为true。
 *
 * @param { CustomBuilder } [content_] - 定义子组件的Builder函数。
 * @returns { ColumnSplitAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function ColumnSplit(
    
    content_?: CustomBuilder,
): ColumnSplitAttribute

/**
 * Defines ColumnSplit Component.
 *
 * @param { CustomBuilderT<ColumnSplitAttribute> } style - the callback to set up component's attributes.
 * @param { CustomBuilder } [content_] - container
 * @returns { ColumnSplitAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function ColumnSplit(
    style: CustomBuilderT<ColumnSplitAttribute>,
    content_?: CustomBuilder,
): ColumnSplitAttribute;