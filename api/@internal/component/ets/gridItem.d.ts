/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * Enumerates styles of grid items.
 *
 * > **NOTE**
 * >
 * > To set the focused style for the grid item, the grid container must have paddings of greater than 4 vp for
 * > accommodating the focus frame of the grid item.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum GridItemStyle {

  /**
   * No style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  NONE = 0,

  /**
   * Hover or press style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  PLAIN = 1,
}

/**
 * Defines the style of a grid item.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface GridItemOptions {

  /**
   * Style of the grid item.
   *
   * Default value: **GridItemStyle.NONE**.
   *
   * If this parameter is set to **GridItemStyle.NONE**, no style is applied.
   *
   * If this parameter is set to **GridItemStyle.PLAIN**, the grid item is in hover or press style depending on the
   * state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  style?: GridItemStyle;
}

/**
 * The **GridItem** component provides a single item in a grid.
 *
 * > **NOTE**
 * >
 * > *
 * >
 * > * This component can be used only as a child of [Grid]{@link grid}.
 * >
 * > * When this component is used with
 * > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), its child components are
 * > created when it is created. When this component is used with
 * > [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) or
 * > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md), or when the parent component is
 * > **Grid**, its child components are created when it is laid out.
 * >
 * > * If a **Grid** component contains a large number of **GridItem** components, using
 * > [columnStart]{@link GridItemAttribute#columnStart}/[columnEnd]{@link GridItemAttribute#columnEnd} or
 * > [rowStart]{@link GridItemAttribute#rowStart}/[rowEnd]{@link GridItemAttribute#rowEnd} to set the size of
 * > **GridItem** components can lead to performance issues, especially when **scrollToIndex** is used to scroll to a
 * > specific index. This is because **Grid** will traverse all **GridItem** nodes sequentially to find the specified
 * > index, which can be time-consuming. To address this issue, it is recommended that you use
 * > [GridLayoutOptions]{@link GridLayoutOptions} for layout, which significantly improves the efficiency of finding the
 * > position of **GridItem** components. For best practices, see
 * > [Optimizing Frame Loss for Grid Component Loading](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-improve_grid_performance).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface GridItemInterface {

  /**
   * Creates a **GridItem** component.
   *
   * @param { GridItemOptions } value - Parameters of the grid item, containing the **style** parameter of the
   *     [GridItemStyle]{@link GridItemStyle} enum type. [since 11]
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (value?: GridItemOptions): GridItemAttribute;
}

/**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class GridItemAttribute extends CommonMethod<GridItemAttribute> {

  /**
   * Sets the start row number of the component.
   *
   * @param { number } value - Start row number of the component.<br>In scenarios where you need to specify the start
   *     row and column numbers and the number of rows and columns of a **GridItem**, you are advised to use the
   *     [GridLayoutOptions]{@link GridLayoutOptions} parameter of the **Grid** component. For details, see
   *     [Example 1: Creating a Fixed Row and Column Grid Layout](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#example-1-creating-a-fixed-row-and-column-grid-layout)
   *     and
   *     [Example 3: Implementing a Scrollable Grid with Grid Items Spanning Rows and Columns](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#example-3-implementing-a-scrollable-grid-with-grid-items-spanning-rows-and-columns).
   *     <br>Value range: [0, Total number of rows – 1].
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  rowStart(value: number): GridItemAttribute;

  /**
   * Sets the end row number of the component.
   *
   * @param { number } value - End row number of the component.<br>In scenarios where you need to specify the start row
   *     and column numbers and the number of rows and columns of a **GridItem**, you are advised to use the
   *     [GridLayoutOptions]{@link GridLayoutOptions} parameter of the **Grid** component. For details, see
   *     [Example 1: Creating a Fixed Row and Column Grid Layout](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#example-1-creating-a-fixed-row-and-column-grid-layout)
   *     and
   *     [Example 3: Implementing a Scrollable Grid with Grid Items Spanning Rows and Columns](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#example-3-implementing-a-scrollable-grid-with-grid-items-spanning-rows-and-columns).
   *     <br>Value range: [0, Total number of rows – 1].
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  rowEnd(value: number): GridItemAttribute;

  /**
   * Sets the start column number of the component.
   *
   * @param { number } value - Start column number of the component.<br>In scenarios where you need to specify the start
   *     row and column numbers and the number of rows and columns of a **GridItem**, you are advised to use the
   *     [GridLayoutOptions]{@link GridLayoutOptions} parameter of the **Grid** component. For details, see
   *     [Example 1: Creating a Fixed Row and Column Grid Layout](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#example-1-creating-a-fixed-row-and-column-grid-layout)
   *     and
   *     [Example 3: Implementing a Scrollable Grid with Grid Items Spanning Rows and Columns](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#example-3-implementing-a-scrollable-grid-with-grid-items-spanning-rows-and-columns).
   *     <br>Value range: [0, Total number of columns – 1].
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  columnStart(value: number): GridItemAttribute;

  /**
   * Sets the end column number of the component.
   *
   * @param { number } value - End column number of the component.<br>In scenarios where you need to specify the start
   *     row and column numbers and the number of rows and columns of a **GridItem**, you are advised to use the
   *     [GridLayoutOptions]{@link GridLayoutOptions} parameter of the **Grid** component. For details, see
   *     [Example 1: Creating a Fixed Row and Column Grid Layout](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#example-1-creating-a-fixed-row-and-column-grid-layout)
   *     and
   *     [Example 3: Implementing a Scrollable Grid with Grid Items Spanning Rows and Columns](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#example-3-implementing-a-scrollable-grid-with-grid-items-spanning-rows-and-columns).
   *     <br>Value range: [0, Total number of columns – 1].
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  columnEnd(value: number): GridItemAttribute;

  /**
   * Whether to re-create the component when it is being built.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 7 and deprecated since API version 9. Whether to re-create the component
   * > is automatically determined based on the component attributes and child component changes. No manual
   * > configuration is required.
   *
   * @param { boolean } value - Sets whether to re-create the component when it is being built.<br>Default value:
   *     **false**.
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  forceRebuild(value: boolean): GridItemAttribute;

  /**
   * Sets whether the grid item is selectable in the mouse selection box area. This attribute takes effect only when
   * mouse box selection is enabled for the parent **Grid** container.
   *
   * This attribute must be used before the [polymorphic style]{@link common} is set. Otherwise, the style settings will
   * not take effect.
   *
   * @param { boolean } value - Whether the grid item is selectable in the mouse selection box area. The **value** means
   *     that the grid item is selectable in the mouse selection box area, and **false** means the opposite.<br>Default
   *     value: **true**.
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  selectable(value: boolean): GridItemAttribute;

  /**
   * Sets whether the grid item is selected. This attribute supports two-way binding through
   * [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   *
   * This attribute must be used before the [polymorphic style]{@link common} is set. Otherwise, the style settings will
   * not take effect.
   *
   * @param { boolean } value - Whether the grid item is selected. The **value** means that the grid item is selected,
   *     and **false** means that the grid item is in the default state.<br>Default value: **false**.
   * @returns { GridItemAttribute } the attribute of the gridItem.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selected(value: boolean): GridItemAttribute;

  /**
   * Triggered when the selected state of the grid item changes.
   *
   * @param { function } event - Callback invoked when the selected state changes. The input parameter **isSelected**
   *     returns **true** if the grid item is selected in the mouse selection box area; returns **false** otherwise.
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onSelect(event: (isSelected: boolean) => void): GridItemAttribute;
}

/**
 * The **GridItem** component provides a single item in a grid.
 *
 * > **NOTE**
 * >
 * > *
 * >
 * > * This component can be used only as a child of [Grid]{@link grid}.
 * >
 * > * When this component is used with
 * > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), its child components are
 * > created when it is created. When this component is used with
 * > [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) or
 * > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md), or when the parent component is
 * > **Grid**, its child components are created when it is laid out.
 * >
 * > * If a **Grid** component contains a large number of **GridItem** components, using
 * > [columnStart]{@link GridItemAttribute#columnStart}/[columnEnd]{@link GridItemAttribute#columnEnd} or
 * > [rowStart]{@link GridItemAttribute#rowStart}/[rowEnd]{@link GridItemAttribute#rowEnd} to set the size of
 * > **GridItem** components can lead to performance issues, especially when **scrollToIndex** is used to scroll to a
 * > specific index. This is because **Grid** will traverse all **GridItem** nodes sequentially to find the specified
 * > index, which can be time-consuming. To address this issue, it is recommended that you use
 * > [GridLayoutOptions]{@link GridLayoutOptions} for layout, which significantly improves the efficiency of finding the
 * > position of **GridItem** components. For best practices, see
 * > [Optimizing Frame Loss for Grid Component Loading](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-improve_grid_performance).
 *
 * ###### Child Components
 *
 * This component can contain a single child component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const GridItem: GridItemInterface;

/**
 * Defines GridItem Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const GridItemInstance: GridItemAttribute;