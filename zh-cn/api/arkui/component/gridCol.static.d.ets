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
 * 用于自定义指定在不同宽度设备类型上，栅格子组件占据的栅格数量单位。
 *
 * @interface GridColColumnOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface GridColColumnOption {
    /**
     * 在栅格大小为xs的设备上，栅格容器组件的栅格列数。
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    xs?: int;
    /**
     * 在栅格大小为sm的设备上，栅格容器组件的栅格列数。
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    sm?: int;
    /**
     * 在栅格大小为md的设备上，栅格容器组件的栅格列数。
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    md?: int;
    /**
     * 在栅格大小为lg的设备上，栅格容器组件的栅格列数。
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    lg?: int;
    /**
     * 在栅格大小为xl的设备上，栅格容器组件的栅格列数。
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    xl?: int;
    /**
     * 在栅格大小为xxl的设备上，栅格容器组件的栅格列数。
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    xxl?: int;
}
/**
 * 设置栅格列布局组件布局选项。
 *
 * @interface GridColOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface GridColOptions {
    /**
     * 栅格子组件占用栅格容器组件的列数。
     * span为0表示该元素不参与布局计算，即不会被渲染。
     *
     * @type { ?(int | GridColColumnOption) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    span?: int | GridColColumnOption;
    /**
     * 栅格子组件相对于原本位置偏移的列数。
     *
     * @type { ?(int | GridColColumnOption) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset?: int | GridColColumnOption;
    /**
     * 元素的序号，根据栅格子组件的序号，从小到大对栅格子组件做排序。
     *
     * @type { ?(int | GridColColumnOption) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    order?: int | GridColColumnOption;
}

/**
 * The GridColAttribute.
 *
 * @extends CommonMethod
 * @interface GridColAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface GridColAttribute extends CommonMethod {
    /**
     * 设置占用列数。
     * span为0，意味着该元素不参与布局计算，即不会被渲染。
     *
     * @param { int | GridColColumnOption } value - 占用列数。<br/>
     *    取值为非负整数，默认值为1。<br/>
     *    非法值：按默认值处理。<br/>
     *    取值为undefined时，按默认值处理。
     * @returns { GridColAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default span(value: int | GridColColumnOption | undefined): this;
    /**
     * 设置相对于前一个栅格子组件偏移的列数。
     *
     * @param { int | GridColColumnOption } value - 相对于前一个栅格子组件偏移的列数。<br/>
     *    取值为非负整数，默认值：0<br/>
     *    非法值：按默认值处理。<br/>
     *    取值为undefined时，按默认值处理。
     * @returns { GridColAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default gridColOffset(value: int | GridColColumnOption | undefined): this;
    /**
     * 设置栅格子组件的序号，根据序号从小到大对栅格子组件进行排序。
     *
     * @param { int | GridColColumnOption } value - 元素的序号，根据栅格子组件的序号，
     *    从小到大对栅格子组件做排序。<br/>
     *    取值为非负整数，默认值：0<br/>
     *    非法值：按默认值处理。<br/>
     *    取值为undefined时，按默认值处理。
     * @returns { GridColAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default order(value: int | GridColColumnOption | undefined): this;
    /**
 	 * Set GridCol options.
 	 *
 	 * @param { GridColOptions } [options] - GridCol constructor options
 	 * @returns { GridColAttribute } Returns the instance of the GridColAttribute.
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 26.0.0 staticonly
 	 */
 	default setGridColOptions(options?: GridColOptions): this;
    /**
     * 设置组件的动态属性。
     *
     * @param { AttributeModifier<GridColAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * - 动态设置GridCol组件的属性。<br/>
     *   取值为undefined时，按当前组件的属性方法默认值处理。
     * @returns { GridColAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<GridColAttribute> | AttributeModifier<CommonMethod>
        | undefined): this;
}

/**
 * 栅格列布局组件。
 *
 * @param { GridColOptions } [option] - 栅格布局子组件参数。
 * @param { CustomBuilder } [content_] - container
 * @returns { GridColAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function GridCol(
    option?: GridColOptions, 
    content_?: CustomBuilder,
): GridColAttribute

/**
 * Defines GridCol Component.
 *
 * @param { CustomBuilderT<GridColAttribute> } style - the callback to set up component's attributes.
 * @param { CustomBuilder } [content_] - container
 * @returns { GridColAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function GridCol(
    style: CustomBuilderT<GridColAttribute>,
    content_?: CustomBuilder,
): GridColAttribute;
