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
 * Implements a grid layout that supports lazy loading.
 *
 * In versions earlier than API version 26.0.0, the parent component of the **LazyVGridLayout** component supports the
 * [WaterFlow]{@link water_flow} and [FlowItem]{@link flow_item} components. You can also encapsulate the parent
 * component using a custom component or [NodeContainer]{@link node_container} component and use it in **WaterFlow** or
 * **FlowItem**.
 *
 * Since API version 26.0.0, the parent component of this component also supports [List]{@link list},
 * [Scroll]{@link scroll}, or
 * [LazyColumnLayout](docroot://reference/apis-arkui/arkui-ts/ts-container-lazycolumnlayout.md). Additionally, custom
 * components or [NodeContainer]{@link node_container} components can be encapsulated and then used in **List**,
 * **Scroll**, or **LazyColumnLayout**.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 19. Updates will be marked with a superscript to indicate their
 * > earliest API version.
 * >
 * > - This component's height adapts to content by default. Setting the height, height constraints, or aspect ratio
 * > causes display anomalies.
 * >
 * > - The lazy loading conditions of this component in different parent components are as follows:
 * > >   1. In the **WaterFlow** component, lazy loading is supported only when it uses single-column mode or single-
 * > column segments in segmented layout and [FlexDirection]{@link FlexDirection} is set to **FlexDirection.Column**.
 * > Lazy loading is not supported if the **WaterFlow** component is in multi-column mode or the layout direction is
 * > **FlexDirection.Row** or **FlexDirection.RowReverse**. Using this component with **FlexDirection.ColumnReverse** in
 * > the **WaterFlow** component causes display anomalies.
 * > >   2. In the **List** component, the layout direction must be vertical (that is, the
 * > [listDirection]{@link ListAttribute#listDirection} property is set to **Axis.Vertical**). Using this component in a
 * > non-vertical **List** component will cause an application crash. If any of the **lanes**, **chainAnimation**, and
 * > **scrollSnapAlign** properties is set for the **List** component, the lazy loading of this component will become
 * > invalid.
 * > >   3. In the **Scroll** component, the layout direction must be vertical (that is, the value of the
 * > [scrollable]{@link ScrollAttribute#scrollable} property is **ScrollDirection.Vertical**). Using this component in a
 * > non-vertical **Scroll** component will cause an application crash.
 * >
 * > - When lazy loading is enabled, the component only loads child components within the visible area of the parent
 * > component, with pre-loading of half-screen content above and below the viewport during frame idle periods.
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
   * Sets the gap between rows. Values less than 0 are treated as the default value.
   *
   * @param { LengthMetrics } value - Gap between rows.<br>Default value: **0vp**
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  rowsGap(value: LengthMetrics): T;

  /**
   * Sets the gap between columns. Values less than 0 are treated as the default value.
   *
   * @param { LengthMetrics } value - Gap between columns.<br>Default value: **0vp**.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  columnsGap(value: LengthMetrics): T;

  /**
   * Sets the header of the lazy grid layout.
   *
   * @param { CustomBuilder | undefined } builder - The header builder function.
   *     <br>Passing undefined will remove the header.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  header(builder: CustomBuilder | undefined): T;

  /**
   * Sets the footer of the lazy grid layout.
   *
   * @param { CustomBuilder | undefined } builder - The footer builder function.
   *     <br>Passing undefined will remove the footer.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  footer(builder: CustomBuilder | undefined): T;

  /**
   * Sets the sticky style for header and footer.
   *
   * @param { StickyStyle | undefined } sticky - The sticky style for header and footer.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  sticky(sticky: StickyStyle | undefined): T;

  /**
   * Sets a callback for **onVisibleIndexesChange**. This callback is triggered when the index of a child component in
   * the visible area of **LazyVGridLayout** changes. It returns the start and end indexes of the child components in
   * the visible area. This API uses an asynchronous callback to return the result.
   *
   * @param { OnVisibleIndexesChangeCallback | undefined } callback - Callback for the **onVisibleIndexesChange**
   *     event. If the input parameter is **undefined**, the listening is canceled.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onVisibleIndexesChange(callback: OnVisibleIndexesChangeCallback | undefined): T;
}

/**
 * In addition to the [universal attributes]{@link common}, the following attributes are supported.
 *
 * In addition to the [universal events]{@link common}, the following events are supported.
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
   * Sets the number of columns, fixed column width, or minimum column width of the grid. If this attribute is not
   * set, one column will be used.
   *
   * For example, **'1fr 1fr 2fr'** indicates three columns, with the first column taking up 1/4 of the parent
   * component's full width, the second column 1/4, and the third column 2/4.
   *
   * **columnsTemplate('repeat(auto-fit, track-size)')**: The layout automatically calculates the number of columns
   * and their actual widths while respecting the minimum column width specified by **track-size**.
   *
   * **columnsTemplate('repeat(auto-fill, track-size)')**: The layout automatically calculates the number of columns
   * based on the fixed column width specified by **track-size**.
   *
   * **columnsTemplate('repeat(auto-stretch, track-size)')**: The layout uses **columnsGap** to define the minimum gap
   * between columns and automatically calculates the number of columns and the actual gap size based on the fixed
   * column width specified by **track-size**.
   *
   * **repeat**, **auto-fit**, **auto-fill**, and **auto-stretch** are keywords. **track-size** indicates the column
   * width, in units of px, vp (default), %, or any valid numeric value. The value must be greater than or equal to a
   * valid column width.
   *
   * In auto-fit and auto-stretch modes, only a valid column width value is supported for **track-size**. Additionally,
   * in auto-stretch mode, **track-size** only supports units such as px, vp, and valid numbers, but does not support
   * percentage (%). The auto-fill mode supports one or more valid column widths, for example:
   * columnsTemplate('repeat(auto-fill, 20)') or columnsTemplate('repeat(auto-fill, 20 80px)').
   *
   * If this attribute is set to **'0fr'**, the column width is 0, and child components are not displayed. If this
   * attribute is set to an invalid value, the child components are displayed in a fixed column.
   *
   * @param { string } value - Number of columns or minimum column width of the grid.
   * @returns { LazyVGridLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  columnsTemplate(value: string): LazyVGridLayoutAttribute;
}

/**
 * Implements a grid layout that supports lazy loading.
 *
 * In versions earlier than API version 26.0.0, the parent component of the **LazyVGridLayout** component supports the
 * [WaterFlow]{@link water_flow} and [FlowItem]{@link flow_item} components. You can also encapsulate the parent
 * component using a custom component or [NodeContainer]{@link node_container} component and use it in **WaterFlow** or
 * **FlowItem**.
 *
 * Since API version 26.0.0, the parent component of this component also supports [List]{@link list},
 * [Scroll]{@link scroll}, or
 * [LazyColumnLayout](docroot://reference/apis-arkui/arkui-ts/ts-container-lazycolumnlayout.md). Additionally, custom
 * components or [NodeContainer]{@link node_container} components can be encapsulated and then used in **List**,
 * **Scroll**, or **LazyColumnLayout**.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 19. Updates will be marked with a superscript to indicate their
 * > earliest API version.
 * >
 * > - This component's height adapts to content by default. Setting the height, height constraints, or aspect ratio
 * > causes display anomalies.
 * >
 * > - The lazy loading conditions of this component in different parent components are as follows:
 * > >   1. In the **WaterFlow** component, lazy loading is supported only when it uses single-column mode or single-
 * > column segments in segmented layout and [FlexDirection]{@link FlexDirection} is set to **FlexDirection.Column**.
 * > Lazy loading is not supported if the **WaterFlow** component is in multi-column mode or the layout direction is
 * > **FlexDirection.Row** or **FlexDirection.RowReverse**. Using this component with **FlexDirection.ColumnReverse** in
 * > the **WaterFlow** component causes display anomalies.
 * > >   2. In the **List** component, the layout direction must be vertical (that is, the
 * > [listDirection]{@link ListAttribute#listDirection} property is set to **Axis.Vertical**). Using this component in a
 * > non-vertical **List** component will cause an application crash. If any of the **lanes**, **chainAnimation**, and
 * > **scrollSnapAlign** properties is set for the **List** component, the lazy loading of this component will become
 * > invalid.
 * > >   3. In the **Scroll** component, the layout direction must be vertical (that is, the value of the
 * > [scrollable]{@link ScrollAttribute#scrollable} property is **ScrollDirection.Vertical**). Using this component in a
 * > non-vertical **Scroll** component will cause an application crash.
 * >
 * > - When lazy loading is enabled, the component only loads child components within the visible area of the parent
 * > component, with pre-loading of half-screen content above and below the viewport during frame idle periods.
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