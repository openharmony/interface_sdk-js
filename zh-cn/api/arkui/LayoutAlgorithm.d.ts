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
 * [DynamicLayout]{@link @ohos.arkui.components.ArkDynamicLayout}组件支持的布局算法详细信息。
 * 
 * > **说明：**
 *
 * @file
 * @kit ArkUI
 */

import { FrameNode, LayoutConstraint } from './FrameNode';
import { Position, LengthMetrics } from './Graphics';

/**
 * 动态布局容器[DynamicLayout]{@link @ohos.arkui.components.ArkDynamicLayout}的布局算法基础类型。
 * 
 * > **说明：**
 * >
 * > 该类型变量可以赋值具体的布局算法类对象，如[CustomLayoutAlgorithm]{@link CustomLayoutAlgorithm}类对象、
 * > [RowLayoutAlgorithm]{@link RowLayoutAlgorithm}类对象等。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 24 dynamic
 */
export interface LayoutAlgorithm {}

/**
 * 自定义布局算法类。
 * 
 * > **说明：**
 * >
 * > CustomLayoutAlgorithm类对象可以赋值给LayoutAlgorithm类型变量，作为[DynamicLayout]{@link @ohos.arkui.components.ArkDynamicLayout}组件
 * > 的入参指定布局算法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 24 dynamic
 */
@ObservedV2
export class CustomLayoutAlgorithm implements LayoutAlgorithm {
    /**
     * 通过重写此函数，开发者可以自定义测量子组件的大小。ArkUI框架会在动态布局组件确定尺寸时，将该组件对应的FrameNode和布局约束通过onMeasure传递给开发者。不允许在onMeasure函数中改变状态变量。
     * 
     * > **说明：**
     * >
     * > 在此函数中，开发者可以调用[FrameNode]{@link FrameNode:FrameNode}的
     * > [getChild()]{@link FrameNode:FrameNode#getChild(index: number)}方法获取子组件FrameNode，调用
     * > [FrameNode]{@link FrameNode:FrameNode}的[measure()]{@link FrameNode:FrameNode#measure}方法测量子组件大小，参考DynamicLayout组
     * > 件
     * > [示例1（自定义布局算法实现瀑布流布局）](docroot://reference/apis-arkui/arkui-ts/ts-container-dynamiclayout.md#示例1自定义布局算法实现瀑布流布局)。
     *
     * @param { FrameNode } self - 动态布局组件在组件树上的实体节点。
     * @param { LayoutConstraint } constraint - 动态布局组件进行测量时使用的布局约束。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    onMeasure(self: FrameNode, constraint: LayoutConstraint): void;
    /**
     * 通过重写此函数，开发者可以自定义排列子组件的位置。ArkUI框架会在动态布局组件确定位置时，将该组件对应的FrameNode和布局位置通过onLayout传递给开发者。不允许在onLayout函数中改变状态变量。
     * 
     * > **说明：**
     * >
     * > 在此函数中，开发者可以调用[FrameNode]{@link FrameNode:FrameNode}的
     * > [getChild()]{@link FrameNode:FrameNode#getChild(index: number)}方法获取子组件FrameNode，调用
     * > [FrameNode]{@link FrameNode:FrameNode}的[layout()]{@link FrameNode:FrameNode#layout}方法设置子组件位置，参考DynamicLayout组件
     * > [示例1（自定义布局算法实现瀑布流布局）](docroot://reference/apis-arkui/arkui-ts/ts-container-dynamiclayout.md#示例1自定义布局算法实现瀑布流布局)。
     *
     * @param { FrameNode } self - 动态布局组件在组件树上的实体节点。
     * @param { Position } position - 动态布局组件进行布局时使用的位置信息。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    onLayout(self: FrameNode, position: Position): void;
}
 
/**
 * 设置垂直方向线性布局算法的间距、主轴对齐方式、交叉轴对齐方式及主轴排列方向。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 24 dynamic
 */
interface ColumnLayoutAlgorithmOptions {
    /**
     * 纵向布局元素垂直方向间距。
     * 
     * 默认值：LengthMetrics.vp(0) 
     * 
     * 非法值：按默认值处理。
     *
     * @default LengthMetrics.vp(0)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    space?: LengthMetrics;
    /**
     * 所有子组件在水平方向上的对齐格式。
     * 
     * 默认值：HorizontalAlign.Center 
     * 
     * 非法值：按默认值处理。
     *
     * @default HorizontalAlign.Center
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    alignItems?: HorizontalAlign;
    /**
     * 所有子组件在垂直方向上的对齐格式。
     * 
     * 默认值：FlexAlign.Start 
     * 
     * 非法值：按默认值处理。
     *
     * @default FlexAlign.Start
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    justifyContent?: FlexAlign;
    /**
     * 子组件在水平方向上的排列是否反转。取值为true表示子组件在水平方向上反转排列，由于水平方向受通用属性[direction]{@link CommonMethod#direction}影响，如果
     * [direction]{@link CommonMethod#direction}属性生效，再做一次反转。取值为false表示子组件在水平方向上正序排列。
     * 
     * 默认值：false 
     * 
     * 非法值：按默认值处理。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    isReverse?: boolean;
}
 
/**
 * 垂直方向线性布局算法类。
 * 
 * > **说明：**
 * >
 * > ColumnLayoutAlgorithm类对象可以赋值给LayoutAlgorithm类型变量，作为[DynamicLayout]{@link @ohos.arkui.components.ArkDynamicLayout}组件
 * > 的入参指定布局算法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 24 dynamic
 */
@ObservedV2
export class ColumnLayoutAlgorithm implements LayoutAlgorithm {
    /**
     * 垂直方向线性布局算法类的构造函数。
     *
     * @param { ColumnLayoutAlgorithmOptions } [option] - 垂直方向线性布局算法的构造入参，设置布局算法的间距、主轴对齐方式、交叉轴对齐方式及主轴排列方向。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    constructor(option?: ColumnLayoutAlgorithmOptions);
    /**
     * 纵向布局元素垂直方向间距。
     * 
     * 默认值：LengthMetrics.vp(0) 
     * 
     * 非法值：按默认值处理。
     * 
     * 装饰器类型：@Trace
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    @Trace public space?: LengthMetrics;
    /**
     * 所有子组件在水平方向上的对齐格式。
     * 
     * 默认值：HorizontalAlign.Center 
     * 
     * 非法值：按默认值处理。
     * 
     * 装饰器类型：@Trace
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    @Trace public alignItems?: HorizontalAlign;
    /**
     * 所有子组件在垂直方向上的对齐格式。
     * 
     * 默认值：FlexAlign.Start 
     * 
     * 非法值：按默认值处理。
     * 
     * 装饰器类型：@Trace
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    @Trace public justifyContent?: FlexAlign;
    /**
     * 子组件在水平方向上的排列是否反转。取值为true表示子组件在水平方向上反转排列，由于水平方向受通用属性[direction]{@link CommonMethod#direction}影响，如果
     * [direction]{@link CommonMethod#direction}属性生效，再做一次反转。取值为false表示子组件在水平方向上正序排列。
     * 
     * 默认值：false 
     * 
     * 非法值：按默认值处理。
     * 
     * 装饰器类型：@Trace
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    @Trace public isReverse?: boolean;
}
 
/**
 * 设置水平方向线性布局算法的间距、主轴对齐方式、交叉轴对齐方式及主轴排列方向。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 24 dynamic
 */
interface RowLayoutAlgorithmOptions {
    /**
     * 横向布局元素水平方向间距。
     * 
     * 默认值：LengthMetrics.vp(0) 
     * 
     * 非法值：按默认值处理。
     *
     * @default LengthMetrics.vp(0)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    space?: LengthMetrics;
    /**
     * 所有子组件在垂直方向上的对齐格式。
     * 
     * 默认值：VerticalAlign.Center 
     * 
     * 非法值：按默认值处理。
     *
     * @default VerticalAlign.Center
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    alignItems?: VerticalAlign;
    /**
     * 所有子组件在水平方向上的对齐格式。
     * 
     * 默认值：FlexAlign.Start 
     * 
     * 非法值：按默认值处理。
     *
     * @default FlexAlign.Start
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    justifyContent?: FlexAlign;
    /**
     * 子组件在水平方向上的排列是否反转。取值为true表示子组件在水平方向上反转排列，由于水平方向受通用属性[direction]{@link CommonMethod#direction}影响，如果
     * [direction]{@link CommonMethod#direction}属性生效，再做一次反转。取值为false表示子组件在水平方向上正序排列。
     * 
     * 默认值：false 
     * 
     * 非法值：按默认值处理。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    isReverse?: boolean;
}
 
/**
 * 水平方向线性布局算法类。
 * 
 * > **说明：**
 * >
 * > RowLayoutAlgorithm类对象可以赋值给LayoutAlgorithm类型变量，作为[DynamicLayout]{@link @ohos.arkui.components.ArkDynamicLayout}组件的入参
 * > 指定布局算法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 24 dynamic
 */
@ObservedV2
export class RowLayoutAlgorithm implements LayoutAlgorithm {
    /**
     * 水平方向线性布局算法类的构造函数。
     *
     * @param { RowLayoutAlgorithmOptions } [option] - 水平方向线性布局算法的构造入参，设置布局算法的间距、主轴对齐方式、交叉轴对齐方式及主轴排列方向。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    constructor(option?: RowLayoutAlgorithmOptions);
    /**
     * 横向布局元素水平方向间距。
     * 
     * 默认值：LengthMetrics.vp(0) 
     * 
     * 非法值：按默认值处理。
     * 
     * 装饰器类型：@Trace
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    @Trace public space?: LengthMetrics;
    /**
     * 所有子组件在垂直方向上的对齐格式。
     * 
     * 默认值：VerticalAlign.Center 
     * 
     * 非法值：按默认值处理。
     * 
     * 装饰器类型：@Trace
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    @Trace public alignItems?: VerticalAlign;
    /**
     * 所有子组件在水平方向上的对齐格式。
     * 
     * 默认值：FlexAlign.Start 
     * 
     * 非法值：按默认值处理。
     * 
     * 装饰器类型：@Trace
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    @Trace public justifyContent?: FlexAlign;
    /**
     * 子组件在水平方向上的排列是否反转。取值为true表示子组件在水平方向上反转排列，由于水平方向受通用属性[direction]{@link CommonMethod#direction}影响，如果
     * [direction]{@link CommonMethod#direction}属性生效，再做一次反转。取值为false表示子组件在水平方向上正序排列。
     * 
     * 默认值：false 
     * 
     * 非法值：按默认值处理。
     * 
     * 装饰器类型：@Trace
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    @Trace public isReverse?: boolean;
}
 
/**
 * 设置堆叠布局算法的对齐方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 24 dynamic
 */
interface StackLayoutAlgorithmOptions {
    /**
     * 设置子组件在堆叠布局算法中对齐格式。
     * 
     * 默认值：LocalizedAlignment.CENTER 
     * 
     * 非法值：按默认值处理。
     *
     * @default LocalizedAlignment.Center
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    alignContent?: LocalizedAlignment;
}
 
/**
 * 堆叠布局算法类。
 * 
 * > **说明：**
 * >
 * > StackLayoutAlgorithm类对象可以赋值给LayoutAlgorithm类型变量，作为[DynamicLayout]{@link @ohos.arkui.components.ArkDynamicLayout}组件的
 * > 入参指定布局算法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 24 dynamic
 */
@ObservedV2
export class StackLayoutAlgorithm implements LayoutAlgorithm {
    /**
     * 堆叠布局算法类的构造函数。
     *
     * @param { StackLayoutAlgorithmOptions } [option] - 堆叠布局算法的构造入参，设置九宫格对齐格式。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    constructor(option?: StackLayoutAlgorithmOptions);
    /**
     * 设置子组件在堆叠布局算法中对齐格式。 
     * 
     * 默认值：LocalizedAlignment.CENTER 
     * 
     * 非法值：按默认值处理。
     * 
     * 装饰器类型：@Trace
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    @Trace public alignContent?: LocalizedAlignment;
}

/**
 * 设置网格布局算法的列数模板、列间距、行间距。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 24 dynamic
 */
interface GridLayoutAlgorithmOptions {
    /**
     * 设置当前网格布局的列数。
     * 
     * 默认值：'1fr' 
     * 
     * 非法值：按默认值处理。
     * 
     * 装饰器类型：@Trace
     *
     * @default '1fr'
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    columnsTemplate?: string | ItemFillPolicy;
    /**
     * 列与列之间的间距。
     * 
     * 默认值：LengthMetrics.vp(0) 
     * 
     * 非法值：按默认值处理。
     * 
     * 装饰器类型：@Trace
     *
     * @default LengthMetrics.vp(0)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    columnsGap?: LengthMetrics;
    /**
     * 行与行之间的间距。
     * 
     * 默认值：LengthMetrics.vp(0) 
     * 
     * 非法值：按默认值处理。
     * 
     * 装饰器类型：@Trace
     *
     * @default LengthMetrics.vp(0)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    rowsGap?: LengthMetrics;
}
 
/**
 * 网格布局算法类。
 * 
 * > **说明：**
 * >
 * > GridLayoutAlgorithm类对象可以赋值给LayoutAlgorithm类型变量，作为[DynamicLayout]{@link @ohos.arkui.components.ArkDynamicLayout}组件的入
 * > 参指定布局算法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 24 dynamic
 */
@ObservedV2
export class GridLayoutAlgorithm implements LayoutAlgorithm {
    /**
     * 网格布局算法类的构造函数。
     *
     * @param { GridLayoutAlgorithmOptions } [option] - 网格布局算法的构造入参，设置网格布局的列数、列间距、行间距。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    constructor(option?: GridLayoutAlgorithmOptions);
    /**
     * 设置当前网格布局的列数。
     * 
     * 默认值：'1fr' 
     * 
     * 非法值：按默认值处理。
     * 
     * 装饰器类型：@Trace
     *
     * @default '1fr'
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    @Trace public columnsTemplate?: string | ItemFillPolicy;
    /**
     * 列与列之间的间距。
     * 
     * 默认值：LengthMetrics.vp(0) 
     * 
     * 非法值：按默认值处理。
     * 
     * 装饰器类型：@Trace
     *
     * @default LengthMetrics.vp(0)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    @Trace public columnsGap?: LengthMetrics;
    /**
     * 行与行之间的间距。
     * 
     * 默认值：LengthMetrics.vp(0) 
     * 
     * 非法值：按默认值处理。
     * 
     * 装饰器类型：@Trace
     *
     * @default LengthMetrics.vp(0)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    @Trace public rowsGap?: LengthMetrics;
}