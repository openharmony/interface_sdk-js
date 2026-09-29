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
 * The **LazyVWaterFlowLayout** component is used to implement a waterfall layout that supports lazy loading, suitable 
 * for displaying a large number of list items with varying heights, such as image walls and product lists. Through the 
 * lazy loading mechanism, this component only loads content in and near the visible area, reducing memory usage and 
 * rendering overhead, and improving scrolling smoothness. This component should be placed under a vertical 
 * [List]{@link ./@internal/component/ets/list}, [Scroll]{@link ./@internal/component/ets/scroll}, or 
 * [WaterFlow]{@link ./@internal/component/ets/water_flow} component, and supports being used after being wrapped by 
 * [FlowItem]{@link ./@internal/component/ets/flow_item}, 
 * [LazyColumnLayout](docroot://reference/apis-arkui/arkui-ts/ts-container-lazycolumnlayout.md), a custom component, or 
 * [NodeContainer]{@link ./@internal/component/ets/node_container}.
 * 
 * For more usage scenarios and complete examples of lazy-loading layouts, see 
 * [Creating Lazy Layouts](docroot://ui/arkts-layout-development-create-lazy-layout.md).
 * 
 * > **NOTE**
 * >
 * > - The height of the **LazyVWaterFlowLayout** component adapts to content by default. You are advised not to set 
 * > attributes that fix or constrain the vertical dimension of the component. Setting such attributes may cause display
 * > exceptions or scrolling failures. The attributes involved include 
 * > [height]{@link CommonMethod#height(value: Length)}, the **height** in [size]{@link CommonMethod#size}, minHeight/
 * > maxHeight in [constraintSize]{@link CommonMethod#constraintSize}, [aspectRatio]{@link CommonMethod#aspectRatio}, 
 * > [layoutWeight]{@link CommonMethod#layoutWeight}, and the scenario where 
 * > [height]{@link CommonMethod#height(heightValue: Length | LayoutPolicy)} takes a [LayoutPolicy]{@link LayoutPolicy} 
 * > value.
 * >
 * > - When the parent component sets the main axis dimension, **LazyVWaterFlowLayout** performs lazy loading based on 
 * > the visible area of the parent component. When the parent component does not set the main axis dimension, 
 * > **LazyVWaterFlowLayout** is stretched by its content, causing all child components to be loaded and laid out.
 * >
 * > - The lazy loading support conditions for this component under different parent components are as follows:
 * >
 * > 1. Under the **List** component, the **List** component's layout direction must be vertical (that is, the 
 * > [listDirection]{@link ListAttribute#listDirection} attribute is set to **Axis.Vertical**). Using this component in 
 * > a non-vertical List will cause the app to crash. When the **List** has any one or more of the 
 * > [lanes]{@link ListAttribute#lanes(value: number | LengthConstrain, gutter?: Dimension)}, 
 * > [chainAnimation]{@link ListAttribute#chainAnimation}, or [scrollSnapAlign]{@link ListAttribute#scrollSnapAlign} 
 * > attributes set, the lazy loading feature of this component becomes invalid.
 * >
 * > 2. Under the **Scroll** component, the **Scroll** component's layout direction must be vertical (that is, the 
 * > [scrollable]{@link ScrollAttribute#scrollable} attribute is set to ScrollDirection.Vertical). Using this component 
 * > in a non-vertical **Scroll** will cause the app to crash.
 * >
 * > 3. Under the **WaterFlow** component, lazy loading is supported only when the **WaterFlow** component is in single-
 * > column mode or a single-column segment in segmented layout, and the 
 * > [layoutDirection]{@link WaterFlowAttribute#layoutDirection} attribute is set to **FlexDirection.Column**. When the 
 * > **WaterFlow** is in multi-column mode or the layout direction is **FlexDirection.Row** or 
 * > **FlexDirection.RowReverse**, the lazy loading feature of this component becomes invalid. In addition, using this 
 * > component under a **WaterFlow** component with the layout direction set to **FlexDirection.ColumnReverse** will 
 * > cause display exceptions.
 * >
 * > 4. When used after being wrapped by **FlowItem**, **LazyColumnLayout**, a custom component, or **NodeContainer**, 
 * > the lazy loading behavior depends on the configuration conditions of the upper-level scroll component (such as 
 * > **WaterFlow**, **Scroll**, or **List**).
 * >
 * > - When lazy loading is in effect, this component only loads the child components within the visible area of the 
 * > parent component, and preloads content half a screen above and below the visible area during idle time between 
 * > frames.
 * >
 * > - The parent component here refers to the nearest upper-level scroll component of the current component. For 
 * > specific meanings in other documents, refer to the corresponding content.
 *
 * @file
 * @kit ArkUI
 */

/**
 * Defines the lazy vertical waterflow layout component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface LazyVWaterFlowLayoutInterface {
  /**
   * Construct the lazy vertical waterflow attribute.
   *
   * @returns { LazyVWaterFlowLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  (): LazyVWaterFlowLayoutAttribute;
}

/**
 * Defines the lazy waterflow layout attribute.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class LazyWaterFlowLayoutAttribute<T> extends CommonMethod<T> {
  /**
   * Sets the gap between rows. The default value is **LengthMetrics.vp(0)**. If a value less than 0 is set,
   * **LengthMetrics.vp(0)** is used.
   *
   * @param { LengthMetrics | undefined } value - Gap between rows.<br/>(0)<br/>** is used.
   *     <br/>If the method input parameter is **undefined**, the default value (**LengthMetrics.vp(0)**) is restored.
   *     <br>Value range:  [0, +∞)<br/>If set to a value less than 0, **LengthMetrics.vp(0). Default value:
   *     **LengthMetrics.vp**.
   * @returns { T } Current **LazyVWaterFlowLayout** component itself, used to support chained calls.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  rowsGap(value: LengthMetrics | undefined): T;

  /**
   * Sets the gap between columns. The default value is **LengthMetrics.vp(0)**. If a value less than 0 is set,
   * **LengthMetrics.vp(0)** is used. When used together
   * with the **repeat(auto-stretch, track-size)** mode of [columnsTemplate](#columnstemplate),
   * this value serves as the minimum column spacing,
   * and the system automatically calculates the actual column gap and number of columns.
   *
   * @param { LengthMetrics | undefined } value - Gap between columns.<br/>(0)<br/>**.
   *     <br/>When the method input parameter is **undefined**, it is restored to the default value
   *     (**LengthMetrics.vp(0)**).
   *     <br>Value range:  [0, +∞)<br/>When set to a value less than 0, it is treated as **LengthMetrics.vp(0).
   *     Default value: **LengthMetrics.vp**.
   * @returns { T } Current **LazyVWaterFlowLayout** component itself, used to support chained calls.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  columnsGap(value: LengthMetrics | undefined): T;

  /**
   * Sets the header component of the current **LazyVWaterFlowLayout**. If this API is not used,
   * no header component is set by default.
   * The sticky style of the header component takes effect
   * only after being set through the [sticky](#sticky) attribute.
   *
   * > **NOTE**
   * >
   * > The header component is located at the top area of the container, typically used to display titles,
   * > group descriptions, or other elements fixed in front of the content.
   * >
   * > When this component scrolls into the visible area with the scroll container,
   * > and the header sticky style is set through [sticky](#sticky),
   * > the header will stick to the top of the visible area of the scroll container.
   *
   * @param { CustomBuilder | undefined } builder - Constructor of the header component.
   *                                      <br/>When the input parameter is **undefined**, no header component is set.
   *                                      If a header component already exists, it is also removed.
   * @returns { T } Returns the current **LazyVWaterFlowLayout** component itself, used to support chained calls.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  header(builder: CustomBuilder | undefined): T;

  /**
   * Sets the footer component of the current **LazyVWaterFlowLayout**. If this API is not used,
   * no footer component is set by default.
   * The sticky style of the footer component takes effect only after being set through the [sticky](#sticky) attribute.
   *
   * > **NOTE**
   * >
   * > The footer component is located at the bottom area of the container,
   * > typically used to display supplementary information, loading status,
   * > or other elements fixed behind the content.
   * >
   * > When this component scrolls into the visible area with the scroll container,
   * > and the footer sticky style is set through [sticky](#sticky),
   * > the footer will stick to the bottom of the visible area of the scroll container.
   *
   * @param { CustomBuilder | undefined } builder - Footer component constructor.
   *                                      <br/>When the input parameter is **undefined**, no footer component is set.
   *                                      If a footer component already exists, it will be removed.
   * @returns { T } Current **LazyVWaterFlowLayout** component itself, used to support chained calls.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  footer(builder: CustomBuilder | undefined): T;

  /**
   * Sets the sticky style of [header](#header) and [footer](#footer).
   *
   * When this component scrolls into the visible area with the scroll container, and the optional **sticky** attribute
   * is set for header stick-to-top or footer stick-to-bottom, the header will stick to the top of the visible area of
   * the scroll container, and the footer will stick to the bottom of the visible area of the scroll container. If
   * **sticky** is not set, the header component does not stick to the top and the footer component does not stick to
   * the bottom by default.
   *
   * > **NOTE**
   * >
   * > Due to floating-point calculation precision, gaps may appear during scrolling after **sticky** is set. You can
   * use [pixelRound]{@link CommonMethod#pixelRound} to specify downward pixel rounding for the current component to
   * resolve this issue.
   *
   * @param { StickyStyle | undefined } sticky - Sticky style of the header component and footer component.
   *     The **sticky** attribute can be set to **StickyStyle.Header** (header component sticks to the top),
   *     **StickyStyle.Footer** (footer component sticks to the bottom),
   *     **StickyStyle.BOTH** (both header sticks to the top and footer sticks to the bottom),
   *     or **StickyStyle.None** (sticky style disabled).
   *     <br/>When the input parameter is **undefined**, the default value **StickyStyle.None** is restored.
   *     <br/>If this API is not used, the header component does not stick to the top
   *     and the footer component does not stick to the bottom by default.
   * @returns { T } Returns the current **LazyVWaterFlowLayout** component itself, used to support chained calls.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  sticky(sticky: StickyStyle | undefined): T;

  /**
   * Sets the **onVisibleIndexesChange** callback. When the indexes of child components
   * in the visible area of **LazyVWaterFlowLayout** change, the callback is triggered,
   * returning the start index and end index of the child components in the visible area.
   *
   * > **NOTE**
   * >
   * > When the parent component sets the main axis dimension, **LazyVWaterFlowLayout** performs lazy loading
   * > based on the visible area of the parent component. In this case, in the **onVisibleIndexesChange** callback,
   * > **start** returns the index of the child component at the start position of the current visible area,
   * > and **end** returns the index of the child component at the end position of the current visible area.
   * >
   * > When the parent component does not set the main axis dimension,
   * > **LazyVWaterFlowLayout** is stretched by its content, causing all child components to be loaded and laid out.
   * > In this case, in the **onVisibleIndexesChange** callback, **start** returns 0,
   * > and **end** returns the index of the last child component in the data source.
   * >
   * > When the lazy loading feature of this component becomes invalid
   * > due to the parent component configuration conditions mentioned above,
   * > all child components are loaded and laid out. In this case, in the **onVisibleIndexesChange** callback,
   * > **start** returns 0, and **end** returns the index of the last child component in the data source.
   * >
   * > The parent component here refers to the nearest **List**, **Scroll**,
   * > or **WaterFlow** component found upward from the current component. **FlowItem**, **LazyColumnLayout**,
   * > custom components, and **NodeContainer** serve only as intermediate wrapping layers
   * > and are not considered parent components here.
   * > For specific meanings in other documents, refer to the corresponding content.
   *
   * @param { OnVisibleIndexesChangeCallback | undefined } callback - Callback invoked
   *                                                       when the index of a child component
   *                                                       in the visible area changes.
   *                                                       <br/>When the method input parameter is **undefined**,
   *                                                       the listening is canceled.
   * @returns { T } Returns the current **LazyVWaterFlowLayout** component itself, used to support chained calls.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onVisibleIndexesChange(callback: OnVisibleIndexesChangeCallback | undefined): T;
}

/**
 * Defines the lazy vertical waterflow layout attribute.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class LazyVWaterFlowLayoutAttribute extends LazyWaterFlowLayoutAttribute<LazyVWaterFlowLayoutAttribute> {
  /**
   * Sets the number of columns, fixed column width, or minimum column width of the current **LazyVWaterFlowLayout**.
   * If this attribute is not set, one column is used by default.
   *
   * - When **value** is of the string type, you can set the number of columns, fixed column width,
   *   or minimum column width of the current **LazyVWaterFlowLayout**.
   *   Typical values and their meanings are as follows. For usage effects,
   *   see [Example 3](#example-3-setting-adaptive-column-count):
   *
   *   1. **columnsTemplate('1fr 1fr 2fr')** divides the **LazyVWaterFlowLayout** into three columns,
   *     with the component width divided into four equal parts: the first column takes up one part,
   *     the second column takes up one part, and the third column takes up two parts.
   *   2. **columnsTemplate('repeat(auto-fit, track-size)')** sets the minimum column width to **track-size**
   *     and automatically calculates the number of columns and the actual column width.
   *   3. **columnsTemplate('repeat(auto-fill, track-size)')** sets the fixed column width to **track-size**
   *     and automatically calculates the number of columns.
   *   4. **columnsTemplate('repeat(auto-stretch, track-size)')** sets the fixed column width to **track-size**,
   *     uses [columnsGap](#columnsgap) as the minimum column spacing,
   *     and automatically calculates the number of columns and the actual column spacing.
   *
   *   Here, **repeat**, **auto-fit**, **auto-fill**, and **auto-stretch** are keywords.
   *   **track-size** is the column width, which supports units including px, vp, %, or a valid number.
   *   The default unit is vp. **track-size** must include at least one valid column width.
   *   The **auto-fit** mode and **auto-stretch** mode support only one valid column width value for **track-size**,
   *   and in the **auto-stretch** mode, **track-size** supports only px, vp, and valid numbers, not %.
   *   The **auto-fill** mode supports one or more valid column widths, for example,
   *   **columnsTemplate('repeat(auto-fill, 20)')** and **columnsTemplate('repeat(auto-fill, 20 80px)')**.
   *
   * - When **value** is of the **ItemFillPolicy** type, the number of columns is determined
   *   based on the [breakpoint type](../../../ui/arkts-layout-development-grid-layout.md#breakpoints)
   *   corresponding to the width of the **LazyVWaterFlowLayout** component.
   *   For example, when the **fillType** attribute of **ItemFillPolicy**
   *   is set to **PresetFillType.BREAKPOINT_DEFAULT**,
   *   two columns are displayed when the component width falls within the sm or smaller breakpoint interval,
   *   three columns when within the md breakpoint interval,
   *   and five columns when within the lg or larger breakpoint interval,
   *   with each column set to **1fr** (meaning each column takes up one equal portion of the available width).
   *
   * - When **value** is set to **undefined**, the default value (one column) is restored.
   *
   * @param { string | ItemFillPolicy | undefined } value - Number of columns, fixed column width,
   *                                                minimum column width value,
   *                                                or breakpoint fill policy of **LazyVWaterFlowLayout**.
   * @returns { LazyVWaterFlowLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  columnsTemplate(value: string | ItemFillPolicy | undefined): LazyVWaterFlowLayoutAttribute;
}

/**
 * Defines LazyVWaterFlowLayout Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @uicomponent
 * @since 26.0.0 dynamic
 */
export declare const LazyVWaterFlowLayout: LazyVWaterFlowLayoutInterface;

/**
 * Defines LazyVWaterFlowLayout Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare const LazyVWaterFlowLayoutInstance: LazyVWaterFlowLayoutAttribute;
