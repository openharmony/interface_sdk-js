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
 * Basic layout algorithm of the
 * [DynamicLayout](docroot://reference/apis-arkui/arkui-ts/ts-container-dynamiclayout.md) container.
 *
 * > **NOTE**
 * >
 * > This type of variable can be assigned a specific layout algorithm class object, such as an object of the
 * > [CustomLayoutAlgorithm]{@link ./CustomLayoutAlgorithm} or [RowLayoutAlgorithm]{@link ./RowLayoutAlgorithm} class.
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
 * Custom layout algorithm class.
 *
 * > **NOTE**
 * >
 * > The object of the **CustomLayoutAlgorithm** class can be assigned to a variable of the **LayoutAlgorithm** type as
 * > the input parameter of the
 * > [DynamicLayout](docroot://reference/apis-arkui/arkui-ts/ts-container-dynamiclayout.md) component to specify the
 * > layout algorithm.
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
     * > In this callback, you can call
     * > [getChild()](docroot://reference/apis-arkui/js-apis-arkui-frameNode.md#getchild12) of
     * > [FrameNode](docroot://reference/apis-arkui/js-apis-arkui-frameNode.md#framenode-1) to obtain the child
     * > component **FrameNode** and call
     * > [measure()](docroot://reference/apis-arkui/js-apis-arkui-frameNode.md#measure12) of
     * > [FrameNode](docroot://reference/apis-arkui/js-apis-arkui-frameNode.md#framenode-1) to measure the size of the
     * > child component. For details, see
     * > [Example 1](docroot://reference/apis-arkui/arkui-ts/ts-container-dynamiclayout.md#example-1-implementing-waterfall-layout-using-a-custom-layout-algorithm).
     *
     * @param { FrameNode } self - Entity node of the dynamic layout component in the component tree.
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
     * is determined, the ArkUI framework will transfer the FrameNode and layout position of the component to you through
     * **onLayout**. State variables should not be changed in this callback.
     *
     * > **NOTE**
     * >
     * > In this callback, you can call
     * > [getChild()](docroot://reference/apis-arkui/js-apis-arkui-frameNode.md#getchild12) of
     * > [FrameNode](docroot://reference/apis-arkui/js-apis-arkui-frameNode.md#framenode-1) to obtain the child
     * > component **FrameNode** and call
     * > [layout()](docroot://reference/apis-arkui/js-apis-arkui-frameNode.md#layout12) of
     * > [FrameNode](docroot://reference/apis-arkui/js-apis-arkui-frameNode.md#framenode-1) to set the position of the
     * > child component. For details, see
     * > [Example 1](docroot://reference/apis-arkui/arkui-ts/ts-container-dynamiclayout.md#example-1-implementing-waterfall-layout-using-a-custom-layout-algorithm).
     *
     * @param { FrameNode } self - Entity node of the dynamic layout component in the component tree.
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
     * Vertical spacing between elements in a vertical layout.
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
     * arrangement of child components. **false** indicates to arrange child components in the vertical direction in
     * normal order.
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
 * Vertical linear layout algorithm class.
 *
 * > **NOTE**
 * >
 * > The object of the **ColumnLayoutAlgorithm** class can be assigned to a variable of the **LayoutAlgorithm** type as
 * > the input parameter of the
 * > [DynamicLayout](docroot://reference/apis-arkui/arkui-ts/ts-container-dynamiclayout.md) component to specify the
 * > layout algorithm.
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
     *     main axis arrangement direction of the layout algorithm.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    constructor(option?: ColumnLayoutAlgorithmOptions);
    /**
     * Vertical spacing between elements in a vertical layout.
     *
     * Default value: **LengthMetrics.vp(0)**
     *
     * Invalid values are treated as the default value.
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
     * arrangement of child components. **false** indicates to arrange child components in the vertical direction in
     * normal order.
     *
     * Default value: **false**
     *
     * Invalid values are treated as the default value.
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
 * @interface RowLayoutAlgorithmOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 24 dynamic
 */
interface RowLayoutAlgorithmOptions {
    /**
     * Horizontal spacing between elements in a horizontal layout.
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
     * [direction](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-location.md#direction). If the
     * [direction](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-location.md#direction) attribute takes
     * effect, the arrangement is reversed again. **false** indicates to arrange child components in the horizontal
     * direction in normal order.
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
 * Horizontal linear layout algorithm class.
 *
 * > **NOTE**
 * >
 * > The object of the **RowLayoutAlgorithm** class can be assigned to a variable of the **LayoutAlgorithm** type as the
 * > input parameter of the
 * > [DynamicLayout](docroot://reference/apis-arkui/arkui-ts/ts-container-dynamiclayout.md) component to specify the
 * > layout algorithm.
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
     *     algorithm, which are used to set the spacing, main axis alignment method, cross axis alignment method, and
     *     main axis arrangement direction of the layout algorithm.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic
     */
    constructor(option?: RowLayoutAlgorithmOptions);
    /**
     * Horizontal spacing between elements in a horizontal layout.
     *
     * Default value: **LengthMetrics.vp(0)**
     *
     * Invalid values are treated as the default value.
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
     * [direction](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-location.md#direction). If the
     * [direction](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-location.md#direction) attribute takes
     * effect, the arrangement is reversed again. **false** indicates to arrange child components in the horizontal
     * direction in normal order.
     *
     * Default value: **false**
     *
     * Invalid values are treated as the default value.
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
 * @interface StackLayoutAlgorithmOptions
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
 * Stack layout algorithm class.
 *
 * > **NOTE**
 * >
 * > The object of the **StackLayoutAlgorithm** class can be assigned to a variable of the **LayoutAlgorithm** type as
 * > the input parameter of the
 * > [DynamicLayout](docroot://reference/apis-arkui/arkui-ts/ts-container-dynamiclayout.md) component to specify the
 * > layout algorithm.
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
     *     which are used to set the nine-box grid alignment mode.
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
 * Sets the number of columns, column spacing, and row spacing of the grid layout algorithm.
 *
 * @interface GridLayoutAlgorithmOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 24 dynamic
 */
interface GridLayoutAlgorithmOptions {
    /**
     * Number of columns in the grid layout.
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
     * Spacing between columns.
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
     * Spacing between rows.
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
 * Grid layout algorithm class.
 *
 * > **NOTE**
 * >
 * > The object of the **GridLayoutAlgorithm** class can be assigned to a variable of the **LayoutAlgorithm** type as the
 * > input parameter of the
 * > [DynamicLayout](docroot://reference/apis-arkui/arkui-ts/ts-container-dynamiclayout.md) component to specify the
 * > layout algorithm.
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
     *     which are used to set the number of columns, column spacing, and row spacing of the grid layout.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    constructor(option?: GridLayoutAlgorithmOptions);
    /**
     * Number of columns in the grid layout.
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
    @Trace public columnsTemplate?: string | ItemFillPolicy;
    /**
     * Spacing between columns.
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
    @Trace public columnsGap?: LengthMetrics;
    /**
     * Spacing between rows.
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
    @Trace public rowsGap?: LengthMetrics;
}
