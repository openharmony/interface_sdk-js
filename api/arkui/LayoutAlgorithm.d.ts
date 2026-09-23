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
 */

import { FrameNode, LayoutConstraint } from './FrameNode';
import { Position, LengthMetrics } from './Graphics';

/**
 * Basic layout algorithm of the [DynamicLayout]{@link @ohos.arkui.components.ArkDynamicLayout} container.
 *
 * > **NOTE**
 * >
 * > This type of variable can be assigned a specific layout algorithm class object, such as an object of the
 * > [CustomLayoutAlgorithm]{@link CustomLayoutAlgorithm} or [RowLayoutAlgorithm]{@link RowLayoutAlgorithm} class.
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
 * A custom layout algorithm class, which allows you to implement custom measurement and layout logic. It is suitable
 * for complex layout scenarios that require fine-grained control over child component sizes and positions, such as
 * waterfall flow layout, irregular grid layout, and dynamic flow layout. By overriding **onMeasure** and **onLayout**,
 * you can implement layout strategies that are not covered by the built-in layout algorithms.
 *
 * > **NOTE**
 * >
 * > The object of the **CustomLayoutAlgorithm** class can be used as the input parameter of the
 * > [DynamicLayout]{@link @ohos.arkui.components.ArkDynamicLayout} component to specify a layout algorithm.
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
     * Customizes the size of the child component to be measured. When the size of the dynamic layout component is
     * determined, the ArkUI framework will transfer the FrameNode and layout constraint of the component to you through
     * **onMeasure**. State variables should not be changed in this callback.
     *
     * > **NOTE**
     * >
     * > - **onMeasure** and [onLayout]{@link CustomLayoutAlgorithm#onLayout} usually need to be used together to
     * > complete the full custom layout process. The framework first calls **onMeasure** to measure the child component
     * > size, and then calls **onLayout** to set the child component position.
     * >
     * > - In this API, you can call [getChild()]{@link FrameNode:FrameNode#getChild(index: number)} of
     * > [FrameNode]{@link FrameNode:FrameNode} to obtain the child component FrameNode, call
     * > [measure()]{@link FrameNode:FrameNode#measure} of [FrameNode]{@link FrameNode:FrameNode} to measure the
     * > child component size. For details, see
     * > [Example 1: Implementing Waterfall Layout Using a Custom Layout Algorithm](docroot://reference/apis-arkui/arkui-ts/ts-container-dynamiclayout.md#example-1-implementing-waterfall-layout-using-a-custom-layout-algorithm).
     *
     * @param { FrameNode } self - Entity node of the dynamic layout component in the component tree, which is used to
     *     obtain the child component FrameNode and measure the child component size.
     * @param { LayoutConstraint } constraint - Layout constraint used by the dynamic layout component for measurement.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    onMeasure(self: FrameNode, constraint: LayoutConstraint): void;
    /**
     * Customizes the position of the child component to be arranged. When the position of the dynamic layout component
     * is determined, the ArkUI framework will transfer the FrameNode and layout position of the component to you
     * through **onLayout**. State variables should not be changed in this callback.
     *
     * > **NOTE**
     * >
     * > - **onLayout** and [onMeasure]{@link CustomLayoutAlgorithm#onMeasure} usually need to be used together to
     * > complete the full custom layout process. The framework first calls **onMeasure** to measure the child component
     * > size, and then calls **onLayout** to set the child component position.
     * >
     * > - In this API, you can call [getChild()]{@link FrameNode:FrameNode#getChild(index: number)} of
     * > [FrameNode]{@link FrameNode:FrameNode} to obtain the child component FrameNode, call
     * > [layout()]{@link FrameNode:FrameNode#layout} of [FrameNode]{@link FrameNode:FrameNode} to set the child
     * > component position. For details, see
     * > [Example 1: Implementing Waterfall Layout Using a Custom Layout Algorithm](docroot://reference/apis-arkui/arkui-ts/ts-container-dynamiclayout.md#example-1-implementing-waterfall-layout-using-a-custom-layout-algorithm).
     *
     * @param { FrameNode } self - Entity node of the dynamic layout component in the component tree, which is used to
     *     obtain the child component FrameNode and set the child component position.
     * @param { Position } position - Position information used in layout of the dynamic layout component.
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
 * Sets the spacing, main axis alignment method, cross axis alignment method, and main axis arrangement direction of the
 * vertical linear layout algorithm.
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
     * Vertical spacing between child components in a vertical layout.
     *
     * Value range: a non-negative number.
     *
     * Default value: **LengthMetrics.vp(0)**
     *
     * Invalid values are treated as the default value.
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
     * Horizontal alignment mode of all child components.
     *
     * Default value: **HorizontalAlign.Center**
     *
     * Invalid values are treated as the default value.
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
     * Vertical alignment mode of all child components.
     *
     * Default value: **FlexAlign.Start**
     *
     * Invalid values are treated as the default value.
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
     * Whether to reverse the vertical arrangement of child components. **true** indicates to reverse the vertical
     * arrangement of child components. The vertical direction is not affected by the common attribute **direction**.
     * **false** indicates to arrange child components in the vertical direction in normal order.
     *
     * Default value: **false**
     *
     * Invalid values are treated as the default value.
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
 * A vertical linear layout algorithm class, which is used to implement vertical linear arrangement of child components.
 * It is suitable for scenarios where child components need to be arranged vertically, such as vertical lists,
 * vertically stacked form items, and vertical menus. It supports setting the spacing between child components,
 * horizontal alignment mode, vertical alignment mode, and arrangement direction, which provides layout capabilities
 * similar to the **Column** component.
 *
 * > **NOTE**
 * >
 * > The object of the **ColumnLayoutAlgorithm** class can be used as the input parameter of the
 * > [DynamicLayout]{@link @ohos.arkui.components.ArkDynamicLayout} component to specify a layout algorithm.
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
     * Constructs the vertical linear layout algorithm class.
     *
     * @param { ColumnLayoutAlgorithmOptions } [option] - Input parameters for constructing the vertical linear layout
     *     algorithm, which are used to set the spacing, main axis alignment method, cross axis alignment method, and
     *     main axis arrangement direction of the layout algorithm. If not passed, the default value of each attribute
     *     is used.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    constructor(option?: ColumnLayoutAlgorithmOptions);
    /**
     * Vertical spacing between child components in a vertical layout.
     *
     * Value range: a non-negative number.
     *
     * Default value: **LengthMetrics.vp(0)**
     *
     * Invalid values are treated as the default value.
     *
     * Decorator: [@Trace](docroot://ui/state-management/arkts-new-observedV2-and-trace.md)
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
     * Horizontal alignment mode of all child components.
     *
     * Default value: **HorizontalAlign.Center**
     *
     * Invalid values are treated as the default value.
     *
     * Decorator: [@Trace](docroot://ui/state-management/arkts-new-observedV2-and-trace.md)
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
     * Vertical alignment mode of all child components.
     *
     * Default value: **FlexAlign.Start**
     *
     * Invalid values are treated as the default value.
     *
     * Decorator: [@Trace](docroot://ui/state-management/arkts-new-observedV2-and-trace.md)
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
     * Whether to reverse the vertical arrangement of child components. **true** indicates to reverse the vertical
     * arrangement of child components. The vertical direction is not affected by the common attribute **direction**.
     * **false** indicates to arrange child components in the vertical direction in normal order.
     *
     * Default value: **false**
     *
     * Invalid values are treated as the default value.
     *
     * Decorator: [@Trace](docroot://ui/state-management/arkts-new-observedV2-and-trace.md)
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
 * Sets the spacing, main axis alignment method, cross axis alignment method, and main axis arrangement direction of the
 * horizontal linear layout algorithm.
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
     * Horizontal spacing between child components in a horizontal layout.
     *
     * Value range: a non-negative number.
     *
     * Default value: **LengthMetrics.vp(0)**
     *
     * Invalid values are treated as the default value.
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
     * Vertical alignment mode of all child components.
     *
     * Default value: **VerticalAlign.Center**
     *
     * Invalid values are treated as the default value.
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
     * Horizontal alignment mode of all child components.
     *
     * Default value: **FlexAlign.Start**
     *
     * Invalid values are treated as the default value.
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
     * Whether to reverse the horizontal arrangement of child components. **true** indicates to reverse the horizontal
     * arrangement of child components. The horizontal direction is affected by the common attribute
     * [direction]{@link CommonMethod#direction}. If the [direction]{@link CommonMethod#direction} attribute takes
     * effect, the child components are arranged based on **direction** and then are reversed based on **isReverse**.
     * **false** indicates to arrange child components in the horizontal direction in normal order.
     *
     * Default value: **false**
     *
     * Invalid values are treated as the default value.
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
 * A horizontal linear layout algorithm class, which is used to implement horizontal linear arrangement of child
 * components. It is suitable for scenarios where child components need to be arranged horizontally, such as horizontal
 * lists, toolbars, tab bars, and action button groups. It supports setting the spacing between child components,
 * vertical alignment mode, horizontal alignment mode, and arrangement direction, which provides layout capabilities
 * similar to the **Row** component.
 *
 * > **NOTE**
 * >
 * > The object of the **RowLayoutAlgorithm** class can be used as the input parameter of the
 * > [DynamicLayout]{@link @ohos.arkui.components.ArkDynamicLayout} component to specify a layout algorithm.
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
     * Constructs the horizontal linear layout algorithm class.
     *
     * @param { RowLayoutAlgorithmOptions } [option] - Input parameters for constructing the horizontal linear layout
     *     algorithm, which are used to set the spacing, main axis alignment mode, cross axis alignment mode, and main
     *     axis arrangement direction of the layout algorithm. If not passed, the default value of each attribute is
     *     used.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    constructor(option?: RowLayoutAlgorithmOptions);
    /**
     * Horizontal spacing between child components in a horizontal layout. Value range: a non-negative number.
     *
     * Default value: **LengthMetrics.vp(0)**
     *
     * Invalid values are treated as the default value.
     *
     * Decorator: [@Trace](docroot://ui/state-management/arkts-new-observedV2-and-trace.md)
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
     * Vertical alignment mode of all child components.
     *
     * Default value: **VerticalAlign.Center**
     *
     * Invalid values are treated as the default value.
     *
     * Decorator: [@Trace](docroot://ui/state-management/arkts-new-observedV2-and-trace.md)
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
     * Horizontal alignment mode of all child components.
     *
     * Default value: **FlexAlign.Start**
     *
     * Invalid values are treated as the default value.
     *
     * Decorator: [@Trace](docroot://ui/state-management/arkts-new-observedV2-and-trace.md)
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
     * Whether to reverse the horizontal arrangement of child components. **true** indicates to reverse the horizontal
     * arrangement of child components. The horizontal direction is affected by the common attribute
     * [direction]{@link CommonMethod#direction}. If the [direction]{@link CommonMethod#direction} attribute takes
     * effect, the child components are arranged based on **direction** and then are reversed based on **isReverse**.
     * **false** indicates to arrange child components in the horizontal direction in normal order.
     *
     * Default value: **false**
     *
     * Invalid values are treated as the default value.
     *
     * Decorator: [@Trace](docroot://ui/state-management/arkts-new-observedV2-and-trace.md)
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
 * Sets the alignment method of the stack layout algorithm.
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
     * Alignment mode of child components in the stack layout algorithm.
     *
     * Default value: **LocalizedAlignment.CENTER**
     *
     * Invalid values are treated as the default value.
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
 * A stack layout algorithm class, which is used to implement stacked arrangement of child components. It is suitable
 * for scenarios where child components need to be displayed in a stacking manner, such as stacked layers, floating
 * buttons, content areas with backgrounds, and card stack effects. It supports setting the alignment mode of child
 * components within the stack container, which provides layout capabilities similar to the **Stack** component.
 *
 * > **NOTE**
 * >
 * > The object of the **StackLayoutAlgorithm** class can be used as the input parameter of the
 * > [DynamicLayout]{@link @ohos.arkui.components.ArkDynamicLayout} component to specify a layout algorithm.
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
     * Constructs the stack layout algorithm class.
     *
     * @param { StackLayoutAlgorithmOptions } [option] - Input parameters for constructing the stack layout algorithm,
     *     which are used to set the nine-box grid alignment mode. If not passed, the default value of each attribute is
     *     used.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    constructor(option?: StackLayoutAlgorithmOptions);
    /**
     * Alignment mode of child components in the stack layout algorithm.
     *
     * Default value: **LocalizedAlignment.CENTER**
     *
     * Invalid values are treated as the default value.
     *
     * Decorator: [@Trace](docroot://ui/state-management/arkts-new-observedV2-and-trace.md)
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
 * Sets the column count template, column spacing, and row spacing of the grid layout algorithm.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 24 dynamic
 */
interface GridLayoutAlgorithmOptions {
    /**
     * Column template of the current grid layout, defining the width and number of columns. The string type must
     * conform to the template format, for example, **'1fr'** indicates a single-column layout, **'1fr 1fr 1fr'**
     * indicates a three-column equal-width layout, and **'1fr 2fr'** indicates a two-column layout where the second
     * column is twice as wide as the first. When **ItemFillPolicy** is used, adaptive column count can be achieved.
     *
     * Default value: **'1fr'**
     *
     * Invalid values are treated as the default value.
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
     * Spacing between columns. Value range: a non-negative number.
     *
     * Default value: **LengthMetrics.vp(0)**
     *
     * Invalid values are treated as the default value.
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
     * Spacing between rows. Value range: a non-negative number.
     *
     * Default value: **LengthMetrics.vp(0)**
     *
     * Invalid values are treated as the default value.
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
 * A grid layout algorithm class, which is used to implement grid arrangement of child components. It is suitable for
 * scenarios where child components need to be arranged in a grid format, such as grid menus, photo grids, app lists,
 * and product displays. It supports setting the column count template, column spacing, and row spacing, which provides
 * layout capabilities similar to the **Grid** component.
 *
 * > **NOTE**
 * >
 * > The object of the **GridLayoutAlgorithm** class can be used as the input parameter of the
 * > [DynamicLayout]{@link @ohos.arkui.components.ArkDynamicLayout} component to specify a layout algorithm.
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
     * Constructs the grid layout algorithm class.
     *
     * @param { GridLayoutAlgorithmOptions } [option] - Input parameters for constructing the grid layout algorithm,
     *     which are used to set the number of columns, column spacing, and row spacing of the grid layout. If not
     *     passed, the default value of each attribute is used.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    constructor(option?: GridLayoutAlgorithmOptions);
    /**
     * Column template of the current grid layout, defining the width and number of columns. The string type must
     * conform to the template format, for example, **'1fr'** indicates a single-column layout, **'1fr 1fr 1fr'**
     * indicates a three-column equal-width layout, and **'1fr 2fr'** indicates a two-column layout where the second
     * column is twice as wide as the first. When **ItemFillPolicy** is used, adaptive column count can be implemented.
     *
     * Default value: **'1fr'**
     *
     * Invalid values are treated as the default value.
     *
     * **Decorator:** [@Trace](docroot://ui/state-management/arkts-new-observedV2-and-trace.md)
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
     * Spacing between columns. Value range: a non-negative number.
     *
     * Default value: **LengthMetrics.vp(0)**
     *
     * Invalid values are treated as the default value.
     *
     * **Decorator:** [@Trace](docroot://ui/state-management/arkts-new-observedV2-and-trace.md)
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
     * Spacing between rows. Value range: a non-negative number.
     *
     * Default value: **LengthMetrics.vp(0)**
     *
     * Invalid values are treated as the default value.
     *
     * **Decorator:** [@Trace](docroot://ui/state-management/arkts-new-observedV2-and-trace.md)
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
