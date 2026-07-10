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
import { ItemAlign } from './enums';
import { Length } from './units';
import { ComponentBuilder, CustomBuilder, CustomBuilderT, Builder } from './builder';
import { AttributeModifier, CommonMethod } from './common';
/**
 * 栅格在不同宽度设备类型下，gutter的大小。
 *
 * @interface GridRowSizeOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface GridRowSizeOption {
    /**
     * 在最小宽度类型设备上，栅格子组件的间距。
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    xs?: Length;
    /**
     * 在小宽度类型设备上，栅格子组件的间距。
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    sm?: Length;
    /**
     * 在中等宽度类型设备上，栅格子组件的间距。
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    md?: Length;
    /**
     * 在大宽度类型设备上，栅格子组件的间距。
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    lg?: Length;
    /**
     * 在特大宽度类型设备上，栅格子组件的间距。
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    xl?: Length;
    /**
     * 在超大宽度类型设备上，栅格子组件的间距。
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    xxl?: Length;
}
/**
 * 栅格在不同宽度设备类型下，栅格列数。
 *
 * @interface GridRowColumnOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface GridRowColumnOption {
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
 * 栅格布局间距类型，用于描述栅格子组件不同方向的间距。
 *
 * @interface GutterOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface GutterOption {
    /**
     * 栅格子组件水平方向间距。
     *
     * @type { ?(Length | GridRowSizeOption) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x?: Length | GridRowSizeOption;
    /**
     * 栅格子组件竖直方向间距。
     *
     * @type { ?(Length | GridRowSizeOption) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y?: Length | GridRowSizeOption;
}
/**
 * 设置栅格容器组件的断点参照物。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum BreakpointsReference {
    /**
     * 以窗口为参照。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    WindowSize,
    /**
     * 以容器为参照。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ComponentSize
}
/**
 * 栅格元素排列方向。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum GridRowDirection {
    /**
     * 栅格元素按照行方向排列。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Row,
    /**
     * 栅格元素按照逆序行方向排列。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    RowReverse
}
/**
 * 设置栅格容器组件的断点。
 *
 * @interface BreakPoints
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BreakPoints {
    /**
     * 设置断点位置的单调递增数组。
     *
     * @type { ?Array<string> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value?: Array<string>;
    /**
     * 断点切换参照物。
     *
     * @type { ?BreakpointsReference }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    reference?: BreakpointsReference;
}
/**
 * 设置栅格行布局容器的布局选项。
 *
 * @interface GridRowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface GridRowOptions {
    /**
     * 栅格布局间距。
     *
     * @type { ?(Length | GutterOption) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    gutter?: Length | GutterOption;
    /**
     * 设置布局列数。
     *
     * @type { ?(int | GridRowColumnOption) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    columns?: int | GridRowColumnOption;
    /**
     * 设置断点值的断点数组以及基于应用窗口或容器尺寸的相应参照。
     *
     * @type { ?BreakPoints }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    breakpoints?: BreakPoints;
    /**
     * 栅格布局排列方向。
     *
     * @type { ?GridRowDirection }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    direction?: GridRowDirection;
}

/**
 * The GridRowAttribute.
 *
 * @extends CommonMethod
 * @interface GridRowAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface GridRowAttribute extends CommonMethod {
    /**
     * 断点发生变化时触发回调。
     *
     * @param { function | undefined } callback - 断点发生变化时触发的回调。<br/>
     *    breakpoints：断点值，取值为"xs"、"sm"、"md"、"lg"、"xl"、"xxl"。<br/>
     *    取值为undefined时，不使用回调函数。
     * @returns { GridRowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onBreakpointChange(callback: ((breakpoints: string) => void) | undefined): this;
    /**
     * 设置GridRow中的GridCol垂直主轴方向对齐方式。
     * GridCol本身也可通过alignSelf设置自身对齐方式。
     * 当上述两种对齐方式都设置时，以GridCol自身设置为准。
     *
     * @param { ItemAlign | undefined } value - GridRow中的GridCol垂直主轴方向对齐方式。<br/>
     *    默认值：ItemAlign.Start<br/>
     *    非法值：按默认值处理。<br/>
     *    **说明**：<br/>
     *    ItemAlign支持的枚举：ItemAlign.Start、ItemAlign.Center、ItemAlign.End、
     *    ItemAlign.Stretch。<br/>
     *    取值为undefined时，按默认值处理。
     * @returns { GridRowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default alignItems(value: ItemAlign | undefined): this;
    /**
 	 * Set GridRow options.
 	 *
 	 * @param { GridRowOptions } [options] - GridRow constructor options
 	 * @returns { GridRowAttribute } Returns the instance of the GridRowAttribute.
 	 * @syscap SystemCapability.ArkUI.ArkUI.Full
 	 * @stagemodelonly
 	 * @since 26.0.0 staticonly
 	 */
 	default setGridRowOptions(options?: GridRowOptions): this;
    /**
     * 设置组件的动态属性。
     *
     * @param { AttributeModifier<GridRowAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * - 动态设置GridRow组件的属性。<br/>
     *   取值为undefined时，按默认值处理。
     * @returns { GridRowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<GridRowAttribute> | AttributeModifier<CommonMethod>
        | undefined): this;
}

/**
 * 栅格行布局容器。
 *
 * @param { GridRowOptions } [option] - 栅格布局子组件参数。
 * @param { CustomBuilder } [content_] - container
 * @returns { GridRowAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function GridRow(
    option?: GridRowOptions, 
    content_?: CustomBuilder,
): GridRowAttribute

/**
 * Defines GridRow Component.
 *
 * @param { CustomBuilderT<GridRowAttribute> } style - the callback to set up component's attributes.
 * @param { CustomBuilder } [content_] - container
 * @returns { GridRowAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function GridRow(
    style: CustomBuilderT<GridRowAttribute>,
    content_?: CustomBuilder,
): GridRowAttribute;
