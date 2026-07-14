'use static';
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @arkts 1.2
 */

import { FrameNode, LayoutConstraint } from 'arkui.FrameNode';
import { LengthMetrics, NodePosition } from 'arkui.Graphics';
import { HorizontalAlign, FlexAlign, VerticalAlign, LocalizedAlignment } from './component/enums';
import { ItemFillPolicy } from './component/units';
import { ObservedV2, Trace } from '@ohos.arkui.stateManagement'

/**
 * DynamicLayout组件支持的布局算法基础类型。
 *
 * > **说明：**
 * >
 * > 该类型变量可以赋值具体的布局算法类对象，
 * > 如[CustomLayoutAlgorithm](#customlayoutalgorithm)类对象、
 * > [RowLayoutAlgorithm](#rowlayoutalgorithm)类对象等。
 *
 * @interface LayoutAlgorithm
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 24 static
 */
export declare interface LayoutAlgorithm {}

/**
 * 自定义布局算法类。
 *
 * > **说明：**
 * >
 * > CustomLayoutAlgorithm类对象可以作为
 * > [DynamicLayout](docroot://reference/apis-arkui/arkui-ts/ts-container-dynamiclayout.md)组件的入参指定布局算法。
 *
 * @implements LayoutAlgorithm
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 24 static
 */
@ObservedV2
export declare class CustomLayoutAlgorithm implements LayoutAlgorithm {
    /**
     * 通过重写此函数，开发者可以自定义测量子组件的大小。
     * ArkUI框架会在动态布局组件确定尺寸时，将该组件对应的FrameNode和布局约束通过onMeasure传递给开发者。
     * 不允许在onMeasure函数中改变状态变量。
     *
     * > **说明：**
     * >
     * > 在此函数中，开发者可以调用
     * > [FrameNode](docroot://reference/apis-arkui/js-apis-arkui-frameNode.md#framenode-1)的
     * > [getChild()](docroot://reference/apis-arkui/js-apis-arkui-frameNode.md#getchild12)方法获取子组件FrameNode，
     * > 调用[FrameNode](docroot://reference/apis-arkui/js-apis-arkui-frameNode.md#framenode-1)的
     * > [measure()](docroot://reference/apis-arkui/js-apis-arkui-frameNode.md#measure12)方法测量子组件大小，
     * > 参考DynamicLayout组件
     * > [示例1（自定义布局算法实现瀑布流布局）](docroot://reference/apis-arkui/arkui-ts/ts-container-dynamiclayout.md#示例1自定义布局算法实现瀑布流布局)。
     *
     * @param { FrameNode } self - 动态布局组件在组件树上的实体节点。
     * @param { LayoutConstraint } constraint - 动态布局组件进行测量时使用的布局约束。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    onMeasure(self: FrameNode, constraint: LayoutConstraint): void;
    /**
     * 通过重写此函数，开发者可以自定义排列子组件的位置。
     * ArkUI框架会在动态布局组件确定位置时，将该组件对应的FrameNode和布局位置通过onLayout传递给开发者。
     * 不允许在onLayout函数中改变状态变量。
     *
     * > **说明：**
     * >
     * > 在此函数中，开发者可以调用
     * > [FrameNode](docroot://reference/apis-arkui/js-apis-arkui-frameNode.md#framenode-1)的
     * > [getChild()](docroot://reference/apis-arkui/js-apis-arkui-frameNode.md#getchild12)方法获取子组件FrameNode，
     * > 调用[FrameNode](docroot://reference/apis-arkui/js-apis-arkui-frameNode.md#framenode-1)的
     * > [layout()](docroot://reference/apis-arkui/js-apis-arkui-frameNode.md#layout12)方法设置子组件位置，
     * > 参考DynamicLayout组件
     * > [示例1（自定义布局算法实现瀑布流布局）](docroot://reference/apis-arkui/arkui-ts/ts-container-dynamiclayout.md#示例1自定义布局算法实现瀑布流布局)。
     *
     * @param { FrameNode } self - 动态布局组件在组件树上的实体节点。
     * @param { NodePosition } position - 动态布局组件进行布局时使用的位置信息。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    onLayout(self: FrameNode, position: NodePosition): void;
}

/**
 * 设置垂直方向线性布局算法的间距、主轴对齐方式、交叉轴对齐方式及主轴排列方向。
 *
 * @interface ColumnLayoutAlgorithmOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 24 static
 */
interface ColumnLayoutAlgorithmOptions {
    /**
     * 纵向布局元素垂直方向间距。
     * 非法值：按默认值处理。
     *
     * @type { ?LengthMetrics }
     * @default LengthMetrics.vp(0)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    space?: LengthMetrics;
    /**
     * 所有子组件在水平方向上的对齐格式。
     * 非法值：按默认值处理。
     *
     * @type { ?HorizontalAlign }
     * @default HorizontalAlign.Center
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    alignItems?: HorizontalAlign;
    /**
     * 所有子组件在垂直方向上的对齐格式。
     * 非法值：按默认值处理。
     *
     * @type { ?FlexAlign }
     * @default FlexAlign.Start
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    justifyContent?: FlexAlign;
    /**
     * 子组件在垂直方向上的排列是否反转。
     * 取值为true表示子组件在垂直方向上反转排列。
     * 取值为false表示子组件在垂直方向上正序排列。
     * 非法值：按默认值处理。
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    isReverse?: boolean;
}

/**
 * 垂直方向线性布局算法类。
 *
 * > **说明：**
 * >
 * > ColumnLayoutAlgorithm类对象可以作为
 * > [DynamicLayout](docroot://reference/apis-arkui/arkui-ts/ts-container-dynamiclayout.md)组件的入参指定布局算法。
 *
 * @implements LayoutAlgorithm
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 24 static
 */
@ObservedV2
export declare class ColumnLayoutAlgorithm implements LayoutAlgorithm {
    /**
     * 垂直方向线性布局算法类的构造函数。
     *
     * @param { ColumnLayoutAlgorithmOptions } [option] - 垂直方向线性布局算法的构造入参，
     *    设置布局算法的间距、主轴对齐方式、交叉轴对齐方式及主轴排列方向。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    constructor(option?: ColumnLayoutAlgorithmOptions);
    /**
     * 纵向布局元素垂直方向间距。
     * 非法值：按默认值处理。
     *
     * @type { ?LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    @Trace public space?: LengthMetrics;
    /**
     * 所有子组件在水平方向上的对齐格式。
     * 非法值：按默认值处理。
     *
     * @type { ?HorizontalAlign }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    @Trace public alignItems?: HorizontalAlign;
    /**
     * 所有子组件在垂直方向上的对齐格式。
     * 非法值：按默认值处理。
     *
     * @type { ?FlexAlign }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    @Trace public justifyContent?: FlexAlign;
    /**
     * 子组件在垂直方向上的排列是否反转。
     * 取值为true表示子组件在垂直方向上反转排列。
     * 取值为false表示子组件在垂直方向上正序排列。
     * 非法值：按默认值处理。
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    @Trace public isReverse?: boolean;
}

/**
 * 设置水平方向线性布局算法的间距、主轴对齐方式、交叉轴对齐方式及主轴排列方向。
 *
 * @interface RowLayoutAlgorithmOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 24 static
 */
interface RowLayoutAlgorithmOptions {
    /**
     * 横向布局元素水平方向间距。
     * 非法值：按默认值处理。
     *
     * @type { ?LengthMetrics }
     * @default LengthMetrics.vp(0)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    space?: LengthMetrics;
    /**
     * 所有子组件在垂直方向上的对齐格式。
     * 非法值：按默认值处理。
     *
     * @type { ?VerticalAlign }
     * @default VerticalAlign.Center
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    alignItems?: VerticalAlign;
    /**
     * 所有子组件在水平方向上的对齐格式。
     * 非法值：按默认值处理。
     *
     * @type { ?FlexAlign }
     * @default FlexAlign.Start
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    justifyContent?: FlexAlign;
    /**
     * 子组件在水平方向上的排列是否反转。
     * 取值为true表示子组件在水平方向上反转排列，
     * 由于水平方向受通用属性
     * [direction](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-location.md#direction)影响，
     * 如果[direction](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-location.md#direction)属性生效，
     * 再做一次反转。
     * 取值为false表示子组件在水平方向上正序排列。
     * 非法值：按默认值处理。
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    isReverse?: boolean;
}

/**
 * 水平方向线性布局算法类。
 *
 * > **说明：**
 * >
 * > RowLayoutAlgorithm类对象可以作为
 * > [DynamicLayout](docroot://reference/apis-arkui/arkui-ts/ts-container-dynamiclayout.md)组件的入参指定布局算法。
 *
 * @implements LayoutAlgorithm
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 24 static
 */
@ObservedV2
export declare class RowLayoutAlgorithm implements LayoutAlgorithm {
    /**
     * 水平方向线性布局算法类的构造函数。
     *
     * @param { RowLayoutAlgorithmOptions } [option] - 水平方向线性布局算法的构造入参，
     *    设置布局算法的间距、主轴对齐方式、交叉轴对齐方式及主轴排列方向。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    constructor(option?: RowLayoutAlgorithmOptions);
    /**
     * 横向布局元素水平方向间距。
     * 非法值：按默认值处理。
     *
     * @type { ?LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    @Trace public space?: LengthMetrics;
    /**
     * 所有子组件在垂直方向上的对齐格式。
     * 非法值：按默认值处理。
     *
     * @type { ?VerticalAlign }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    @Trace public alignItems?: VerticalAlign;
    /**
     * 所有子组件在水平方向上的对齐格式。
     * 非法值：按默认值处理。
     *
     * @type { ?FlexAlign }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    @Trace public justifyContent?: FlexAlign;
    /**
     * 子组件在水平方向上的排列是否反转。
     * 取值为true表示子组件在水平方向上反转排列，
     * 由于水平方向受通用属性
     * [direction](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-location.md#direction)影响，
     * 如果[direction](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-location.md#direction)属性生效，
     * 再做一次反转。
     * 取值为false表示子组件在水平方向上正序排列。
     * 非法值：按默认值处理。
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    @Trace public isReverse?: boolean;
}

/**
 * 设置堆叠布局算法的对齐方式。
 *
 * @interface StackLayoutAlgorithmOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 24 static
 */
interface StackLayoutAlgorithmOptions {
    /**
     * 设置子组件在堆叠布局算法中对齐格式。
     * 非法值：按默认值处理。
     *
     * @type { ?LocalizedAlignment }
     * @default LocalizedAlignment.Center
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    alignContent?: LocalizedAlignment;
}

/**
 * 堆叠布局算法类。
 *
 * > **说明：**
 * >
 * > StackLayoutAlgorithm类对象可以作为
 * > [DynamicLayout](docroot://reference/apis-arkui/arkui-ts/ts-container-dynamiclayout.md)组件的入参指定布局算法。
 *
 * @implements LayoutAlgorithm
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 24 static
 */
@ObservedV2
export declare class StackLayoutAlgorithm implements LayoutAlgorithm {
    /**
     * 堆叠布局算法类的构造函数。
     *
     * @param { StackLayoutAlgorithmOptions } [option] - 堆叠布局算法的构造入参，设置九宫格对齐格式。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    constructor(option?: StackLayoutAlgorithmOptions);
    /**
     * 设置子组件在堆叠布局算法中对齐格式。
     * 非法值：按默认值处理。
     *
     * @type { ?LocalizedAlignment }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    @Trace public alignContent?: LocalizedAlignment;
}

/**
 * 设置网格布局算法的列数模板、列间距、行间距。
 *
 * @interface GridLayoutAlgorithmOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 24 static
 */
interface GridLayoutAlgorithmOptions {
    /**
     * 设置当前网格布局的列数。
     * 非法值：按默认值处理。
     *
     * @type { ?(string | ItemFillPolicy) }
     * @default '1fr'
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    columnsTemplate?: string | ItemFillPolicy;
    /**
     * 列与列之间的间距。
     * 非法值：按默认值处理。
     *
     * @type { ?LengthMetrics }
     * @default LengthMetrics.vp(0)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    columnsGap?: LengthMetrics;
    /**
     * 行与行之间的间距。
     * 非法值：按默认值处理。
     *
     * @type { ?LengthMetrics }
     * @default LengthMetrics.vp(0)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    rowsGap?: LengthMetrics;
}

/**
 * 网格布局算法类。
 *
 * > **说明：**
 * >
 * > GridLayoutAlgorithm类对象可以作为
 * > [DynamicLayout](docroot://reference/apis-arkui/arkui-ts/ts-container-dynamiclayout.md)组件的入参指定布局算法。
 *
 * @implements LayoutAlgorithm
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 24 static
 */
export declare class GridLayoutAlgorithm implements LayoutAlgorithm {
    /**
     * 网格布局算法类的构造函数。
     *
     * @param { GridLayoutAlgorithmOptions } [option] - 网格布局算法的构造入参，
     *    设置网格布局的列数、列间距、行间距。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    constructor(option?: GridLayoutAlgorithmOptions);
    /**
     * 设置当前网格布局的列数。
     * 非法值：按默认值处理。
     *
     * @type { ?(string | ItemFillPolicy) }
     * @default '1fr'
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    public columnsTemplate?: string | ItemFillPolicy;
    /**
     * 列与列之间的间距。
     * 非法值：按默认值处理。
     *
     * @type { ?LengthMetrics }
     * @default LengthMetrics.vp(0)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    public columnsGap?: LengthMetrics;
    /**
     * 行与行之间的间距。
     * 非法值：按默认值处理。
     *
     * @type { ?LengthMetrics }
     * @default LengthMetrics.vp(0)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 24 static
     */
    public rowsGap?: LengthMetrics;
}
