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

/**
 * This component is used to implement a grid layout that supports lazy loading. It is suitable for scenarios where a
 * large number of grid items need to be rendered on demand in a scroll container, reducing the initial frame rendering
 * time and memory overhead.
 *
 * In versions earlier than API version 26.0.0, the parent component of the **LazyVGridLayout** component supports the
 * [WaterFlow]{@link ./water_flow} and [FlowItem]{@link ./flow_item} components. You can also encapsulate the parent
 * component using a custom component or [NodeContainer]{@link ./node_container} component and use it in **WaterFlow**
 * or **FlowItem**.
 *
 * Since API version 26.0.0, the parent component of this component also supports [List]{@link ./list},
 * [Scroll]{@link ./scroll}, or
 * [LazyColumnLayout](docroot://reference/apis-arkui/arkui-ts/ts-container-lazycolumnlayout.md). Additionally, custom
 * components or [NodeContainer]{@link ./node_container} components can be encapsulated and then used in **List**,
 * **Scroll**, or **LazyColumnLayout**.
 *
 * For more usage scenarios and complete examples of lazy loading layouts, see
 * [Creating Lazy Layouts](docroot://ui/arkts-layout-development-create-lazy-layout.md).
 *
 * > **NOTE**
 * >
 * > - The height of the **LazyVGridLayout** component adapts to content by default. It is not recommended to set
 * > attributes that fix or constrain the vertical dimension of the component, as doing so may cause display exceptions
 * > or prevent normal scrolling. The attributes involved include [height]{@link CommonMethod#height(value: Length)},
 * > **height** in [size]{@link CommonMethod#size}, **minHeight**\/**maxHeight** in
 * > [constraintSize]{@link CommonMethod#constraintSize}, [aspectRatio]{@link CommonMethod#aspectRatio},
 * > [layoutWeight]{@link CommonMethod#layoutWeight}, and scenarios where
 * > [height]{@link CommonMethod#height(heightValue: Length | LayoutPolicy)} takes a [LayoutPolicy]{@link LayoutPolicy}
 * > value.
 * >
 * > - When the parent component sets the main axis dimension, **LazyVGridLayout** performs lazy loading based on the
 * > visible area of the parent component. When the parent component does not set the main axis dimension,
 * > **LazyVGridLayout** is stretched by its content, causing all child components to be loaded and laid out.
 * >
 * > - The conditions for lazy loading support of this component under different parent components are as follows:
 * >
 * > 1. Under the **WaterFlow** component, lazy loading is supported only when **WaterFlow** is in single-column mode or
 * > a single-column segment in a segmented layout, and the layout direction [FlexDirection]{@link FlexDirection} is set
 * > to **FlexDirection.Column**. If this component is used in **WaterFlow**'s multi-column mode or horizontal layout (
 * > **FlexDirection.Row** or **FlexDirection.RowReverse**), lazy loading is not supported. In addition, using this
 * > component under a **WaterFlow** component with the layout direction set to **FlexDirection.ColumnReverse** will
 * > cause display exceptions.
 * >
 * > 2. Under the **List** component, the layout direction of **List** must be vertical (that is, the
 * > [listDirection]{@link ListAttribute#listDirection} attribute is set to **Axis.Vertical**). Using this component in
 * > a non-vertical **List** will cause the app to crash. When **List** has any one or more of the
 * > [lanes]{@link ListAttribute#lanes(value: number | LengthConstrain, gutter?: Dimension)},
 * > [chainAnimation]{@link ListAttribute#chainAnimation}, or [scrollSnapAlign]{@link ListAttribute#scrollSnapAlign}
 * > attributes set, the lazy loading feature of this component becomes ineffective.
 * >
 * > 3. Under the **Scroll** component, the layout direction of **Scroll** must be vertical (that is, the
 * > [scrollable]{@link ScrollAttribute#scrollable} attribute is set to **ScrollDirection.Vertical**). Using this
 * > component in a non-vertical **Scroll** will cause the app to crash.
 * >
 * > - When the lazy loading feature is in effect, this component loads only the child components within the visible
 * > area of the parent component, and preloads content half a screen above and below the visible area during idle time
 * > between frames.
 * >
 * > - The parent component here refers to the nearest upper-level scroll component of the current component. For
 * > specific meanings in other documents, refer to the corresponding content.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 * @noninterop
 */
interface LazyVGridLayoutInterface {

  /**
   * Creates a vertical lazy-loading grid layout container.
   *
   * @returns { LazyVGridLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  (): LazyVGridLayoutAttribute;
}

/**
 * Defines the lazy grid layout attribute.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 * @noninterop
 */
declare class LazyGridLayoutAttribute<T> extends CommonMethod<T> {
  /**
   * Sets the gap between rows. The default value is **0vp**. If a value less than 0 is set, the default value is used.
   *
   * @param { LengthMetrics } value - Spacing between rows.<br/>Value range: [0, +∞)
   * @returns { T } Current **LazyVGridLayout** component itself, used to support chained calls.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  rowsGap(value: LengthMetrics): T;

  /**
   * Sets the gap between columns. The default value is **0vp**. If a value less than 0 is set,
   * the default value is used. When [columnsTemplate](#columnstemplate) is set to **auto-stretch** mode,
   * **columnsGap** serves as the minimum column gap,
   * and the actual column gap is automatically calculated by the system.
   *
   * @param { LengthMetrics } value - Spacing between columns.<br/>Value range: [0, +∞)
   * @returns { T } Current **LazyVGridLayout** component itself, which supports chained calls.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  columnsGap(value: LengthMetrics): T;

  /**
   * Sets the header component of the current **LazyVGridLayout**.
   *
   * > **NOTE**
   * >
   * > The header component is located at the top of the container and is typically used to display titles,
   * > group descriptions, or other elements fixed before the content.
   * >
   * > When this component scrolls into the visible area along with the scroll container
   * > and the header stick-to-top mode is set through [sticky](#sticky),
   * > the header sticks to the top of the visible area of the scroll container.
   *
   * @param { CustomBuilder | undefined } builder - Constructor of the header component.
   *                                      <br/>When the method input parameter is **undefined**,
   *                                      the current **LazyVGridLayout** does not set a header component.
   *                                      If a header component already exists, it is also removed.
   * @returns { T } Returns the current **LazyVGridLayout** component itself for chained calls.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  header(builder: CustomBuilder | undefined): T;

  /**
   * Sets the footer component of the current **LazyVGridLayout**.
   *
   * > **NOTE**
   * >
   * > The footer component is located at the bottom of the container
   * > and is typically used to display supplementary information,
   * > loading status, or other elements fixed after the content.
   * >
   * > When this component scrolls into the visible area along with the scroll container
   * > and the footer stick-to-bottom mode is set through [sticky](#sticky),
   * > the footer sticks to the bottom of the visible area of the scroll container.
   *
   * @param { CustomBuilder | undefined } builder - Footer component constructor.
   *                                      <br/>When the method input parameter is **undefined**,
   *                                      the current **LazyVGridLayout** does not set a footer component.
   *                                      If a footer component already exists, it will also be removed.
   * @returns { T } Returns the current **LazyVGridLayout** component itself for chained calls.
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
   * When this component scrolls into the visible area along with the scroll container and the header stick-to-top or
   * footer stick-to-bottom mode is set through **sticky**, the header sticks to the top of the visible area of the
   * scroll container, and the footer sticks to the bottom of the visible area of the scroll container.
   *
   * > **NOTE**
   * >
   * > Due to floating-point calculation precision issues, gaps may appear during scrolling after **sticky** is set.
   * This can be resolved by using [pixelRound]{@link CommonMethod#pixelRound} to round the current component's pixels
   * downward.
   *
   * @param { StickyStyle | undefined } sticky - Sticky style of the header and footer components.
   *     The **sticky** attribute can be set to **StickyStyle.Header** or **StickyStyle.Footer**,
   *     or to **StickyStyle.BOTH** to support both header stick-to-top and footer stick-to-bottom.
   *     <br/>When the method input parameter is **undefined**, the default value **StickyStyle.None** is restored.
   *     <br/>When not set through this API, the header does not stick to the top
   *     and the footer does not stick to the bottom by default.
   * @returns { T } Returns the current **LazyVGridLayout** component itself for chained calls.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  sticky(sticky: StickyStyle | undefined): T;

  /**
   * Sets the **onVisibleIndexesChange** callback. When the index values of child components of **LazyVGridLayout**
   * within the visible area change, the callback is triggered,
   * returning the start index and end index of the child components in the visible area.
   *
   * > **NOTE**
   * >
   * > When the parent component sets the main axis dimension,
   * > **LazyVGridLayout** performs lazy loading based on the visible area of the parent component.
   * > In this case, in the **onVisibleIndexesChange** callback,
   * > **start** returns the index of the child component at the start position of the current visible area,
   * > and **end** returns the index of the child component at the end position of the current visible area.
   * >
   * > When the parent component does not set the main axis dimension,
   * > **LazyVGridLayout** is stretched by its content, causing all child components to be loaded and laid out.
   * > In this case, in the **onVisibleIndexesChange** callback, **start** returns **0**,
   * > and **end** returns the index of the last child component in the data source.
   * >
   * > When the lazy loading feature of this component becomes ineffective
   * > due to the parent component configuration conditions mentioned above,
   * > all child components are loaded and laid out. In this case, in the **onVisibleIndexesChange** callback,
   * > **start** returns **0**, and **end** returns the index of the last child component in the data source.
   * >
   * > The parent component here refers to the nearest upper-level scroll component of the current component.
   * > For specific meanings in other documents, refer to the corresponding content.
   *
   * @param { OnVisibleIndexesChangeCallback | undefined } callback - Callback for the **onVisibleIndexesChange** event.
   *                                                       When the method input parameter is **undefined**,
   *                                                       the listening is canceled.
   * @returns { T } Returns the current **LazyVGridLayout** component itself for chained calls.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onVisibleIndexesChange(callback: OnVisibleIndexesChangeCallback | undefined): T;
}

/**
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported.
 *
 * In addition to the [universal events]{@link ./common}, the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 * @noninterop
 */
declare class LazyVGridLayoutAttribute extends LazyGridLayoutAttribute<LazyVGridLayoutAttribute> {
  /**
   * Sets the number of columns, fixed column width, or minimum column width of the grid. If this attribute is not set,
   * one column will be used.
   *
   * For example, **'1fr 1fr 2fr'** means that the parent component is divided into 3 columns, and the
   * available width of the parent component is divided into 4 equal parts, with the first column occupying 1 part, the
   * second column occupying 1 part, and the third column occupying 2 parts.
   *
   * **columnsTemplate('repeat(auto-fit, track-size)')**: The layout automatically calculates the number of columns and
   * their actual widths while respecting the minimum column width specified by **track-size**.
   *
   * **columnsTemplate('repeat(auto-fill, track-size)')**: The layout automatically calculates the number of columns
   * based on the fixed column width specified by **track-size**.
   *
   * **columnsTemplate('repeat(auto-stretch, track-size)')** sets a fixed column width of **track-size**, uses
   * [columnsGap]{@link LazyGridLayoutAttribute<T>#columnsGap} as the minimum
   * column gap, and automatically calculates the number of columns and the actual column gap.
   *
   * **repeat**, **auto-fit**, **auto-fill**, and **auto-stretch** are keywords. **track-size** indicates the column
   * width, in units of px, vp, %, or any valid numeric value. The default unit is vp. **track-size** must include at
   * least one valid column width.
   *
   * The **auto-fit** and **auto-stretch** modes support only one valid column width value for **track-size**, and
   * **track-size** in **auto-stretch** mode supports only px, vp, and valid numeric values, not %. The **auto-fill**
   * mode supports one or more valid column widths, for example, **columnsTemplate('repeat(auto-fill, 20)')** and
   * **columnsTemplate('repeat(auto-fill, 20 80px)')**.
   *
   * For usage effects, see
   * [Example 3]{@link ./lazyvgridlayout}.
   *
   * If this attribute is set to **'0fr'**, the column width is 0, and child components are not displayed. If this
   * attribute is set to an invalid value, the child components are displayed in a fixed column.
   *
   * @param { string } value - Number of columns, fixed column width, or minimum column width value of the current grid
   *     layout.
   * @returns { LazyVGridLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  columnsTemplate(value: string): LazyVGridLayoutAttribute;

  /**
   * Number of columns in the current grid layout. If this attribute is not set, one column will be used.
   *
   * When template is of the string type, refer to
   * [columnsTemplate(value: string)]{@link LazyVGridLayoutAttribute#columnsTemplate(value: string)} for the
   * usage.
   *
   * When template is of the **ItemFillPolicy** type, the number of columns is determined based on the
   * [breakpoint type](docroot://ui/arkts-layout-development-grid-layout.md#breakpoints) corresponding to the width of
   * the **LazyVGridLayout** component.
   *
   * For example, the **ItemFillPolicy.BREAKPOINT_DEFAULT** component displays two columns when the component width
   * falls within the sm or smaller breakpoint range, three columns for the md breakpoint range, and five columns for
   * the lg or larger breakpoint range, with each column being 1 fr.
   *
   * @param { string | ItemFillPolicy } template - Number of columns in the current grid layout.
   * @returns { LazyVGridLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.2.0 dynamic
   */
  columnsTemplate(template: string | ItemFillPolicy): LazyVGridLayoutAttribute;
}

/**
 * This component is used to implement a grid layout that supports lazy loading. It is suitable for scenarios where a
 * large number of grid items need to be rendered on demand in a scroll container, reducing the initial frame rendering
 * time and memory overhead.
 *
 * In versions earlier than API version 26.0.0, the parent component of the **LazyVGridLayout** component supports the
 * [WaterFlow]{@link ./water_flow} and [FlowItem]{@link ./flow_item} components. You can also encapsulate the parent
 * component using a custom component or [NodeContainer]{@link ./node_container} component and use it in **WaterFlow**
 * or **FlowItem**.
 *
 * Since API version 26.0.0, the parent component of this component also supports [List]{@link ./list},
 * [Scroll]{@link ./scroll}, or
 * [LazyColumnLayout](docroot://reference/apis-arkui/arkui-ts/ts-container-lazycolumnlayout.md). Additionally, custom
 * components or [NodeContainer]{@link ./node_container} components can be encapsulated and then used in **List**,
 * **Scroll**, or **LazyColumnLayout**.
 *
 * For more usage scenarios and complete examples of lazy loading layouts, see
 * [Creating Lazy Layouts](docroot://ui/arkts-layout-development-create-lazy-layout.md).
 *
 * > **NOTE**
 * >
 * > - The height of the **LazyVGridLayout** component adapts to content by default. It is not recommended to set
 * > attributes that fix or constrain the vertical dimension of the component, as doing so may cause display exceptions
 * > or prevent normal scrolling. The attributes involved include [height]{@link CommonMethod#height(value: Length)},
 * > **height** in [size]{@link CommonMethod#size}, **minHeight**\/**maxHeight** in
 * > [constraintSize]{@link CommonMethod#constraintSize}, [aspectRatio]{@link CommonMethod#aspectRatio},
 * > [layoutWeight]{@link CommonMethod#layoutWeight}, and scenarios where
 * > [height]{@link CommonMethod#height(heightValue: Length | LayoutPolicy)} takes a [LayoutPolicy]{@link LayoutPolicy}
 * > value.
 * >
 * > - When the parent component sets the main axis dimension, **LazyVGridLayout** performs lazy loading based on the
 * > visible area of the parent component. When the parent component does not set the main axis dimension,
 * > **LazyVGridLayout** is stretched by its content, causing all child components to be loaded and laid out.
 * >
 * > - The conditions for lazy loading support of this component under different parent components are as follows:
 * >
 * > 1. Under the **WaterFlow** component, lazy loading is supported only when **WaterFlow** is in single-column mode or
 * > a single-column segment in a segmented layout, and the layout direction [FlexDirection]{@link FlexDirection} is set
 * > to **FlexDirection.Column**. If this component is used in **WaterFlow**'s multi-column mode or horizontal layout (
 * > **FlexDirection.Row** or **FlexDirection.RowReverse**), lazy loading is not supported. In addition, using this
 * > component under a **WaterFlow** component with the layout direction set to **FlexDirection.ColumnReverse** will
 * > cause display exceptions.
 * >
 * > 2. Under the **List** component, the layout direction of **List** must be vertical (that is, the
 * > [listDirection]{@link ListAttribute#listDirection} attribute is set to **Axis.Vertical**). Using this component in
 * > a non-vertical **List** will cause the app to crash. When **List** has any one or more of the
 * > [lanes]{@link ListAttribute#lanes(value: number | LengthConstrain, gutter?: Dimension)},
 * > [chainAnimation]{@link ListAttribute#chainAnimation}, or [scrollSnapAlign]{@link ListAttribute#scrollSnapAlign}
 * > attributes set, the lazy loading feature of this component becomes ineffective.
 * >
 * > 3. Under the **Scroll** component, the layout direction of **Scroll** must be vertical (that is, the
 * > [scrollable]{@link ScrollAttribute#scrollable} attribute is set to **ScrollDirection.Vertical**). Using this
 * > component in a non-vertical **Scroll** will cause the app to crash.
 * >
 * > - When the lazy loading feature is in effect, this component loads only the child components within the visible
 * > area of the parent component, and preloads content half a screen above and below the visible area during idle time
 * > between frames.
 * >
 * > - The parent component here refers to the nearest upper-level scroll component of the current component. For
 * > specific meanings in other documents, refer to the corresponding content.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 * @noninterop
 */
declare const LazyVGridLayout: LazyVGridLayoutInterface;

/**
 * Defines the lazy vertical grid layout component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 * @noninterop
 */
declare const LazyVGridLayoutInstance: LazyVGridLayoutAttribute;