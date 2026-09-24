/*
 * Copyright (c) 2021-2026 Huawei Device Co., Ltd.
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
 * Records the position of the start line in the grid.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic
 */
declare interface StartLineInfo {
  /**
   * In **OnGetStartIndexByOffsetCallback**, indicates the start index of the row where the scroll offset is located;
   * in **OnGetStartIndexByIndexCallback**, indicates the start index of the row where the target index is located.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  startIndex: int;

  /**
   * Start row number of the **GridItem** corresponding to **startIndex** in the grid layout.
   * If the **GridItem** spans multiple rows and the current viewport starts displaying
   * from the middle of the **GridItem**,
   * **startLine** still indicates the actual first row number occupied by the **GridItem** in the complete grid layout.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  startLine: int;

  /**
   * Offset between the top of the **GridItem** corresponding to **startIndex** and the top of the **Grid**.
   * <br>Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  startOffset: double;

  /**
   * Total scrolling offset, that is, the offset between the top of the first **GridItem** in the **Grid** component
   * and the top of the **Grid** component.
   * <br>Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  totalOffset: double;
}

/**
 * Calculates the start line position of the current page based on the total offset of the **Grid** component,
 * which is used for fast scrolling or reverse scrolling.
 * This callback must be set simultaneously with **onGetStartIndexByIndex** to take effect.
 *
 * @param { double } totalOffset - Total scrolling offset, that is, the offset
 *     between the top of the first **GridItem** in the **Grid** component
 *     and the top of the **Grid** component.
 *     <br>Unit:vp.
 * @returns { StartLineInfo } - Position of the start line in the grid.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic
 */
declare type OnGetStartIndexByOffsetCallback = (totalOffset: double) => StartLineInfo;

/**
 * Calculates the start line on the page when the grid is scrolled to the specified target index.
 * This API is used to support operations such as [scrollToIndex](Scroller#scrollToIndex).
 * This callback must be set simultaneously with **onGetStartIndexByOffset** to take effect.
 *
 * @param { int } targetIndex - Index of the target **GridItem** to be scrolled to.
 * @returns { StartLineInfo } - Position of the start line in the grid.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic
 */
declare type OnGetStartIndexByIndexCallback = (targetIndex: int) => StartLineInfo;

/**
 * Defines the grid layout options. In this API, **irregularIndexes** and **onGetIrregularSizeByIndex** can be used for
 * grids where either **rowsTemplate** or **columnsTemplate** is set. These properties allow you to specify an index
 * array and set the number of rows and columns to be occupied by a grid item at the specified index. For details about
 * the usage, see
 * [Example 3](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#example-3-implementing-a-scrollable-grid-with-grid-items-spanning-rows-and-columns).
 * On the other hand, **onGetRectByIndex** can be used for grids where both **rowsTemplate** and **columnsTemplate** are
 * set. It allows you to specify the position and size for the grid item at the specified index. For details about the
 * usage, see
 * [Example 1](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#example-1-creating-a-fixed-row-and-column-grid-layout).
 *
 * To improve the performance of **Grid** in scenarios such as jumps and column quantity changes, you are advised to use
 * **GridLayoutOptions** whenever possible. Even if there are no special cross-row or cross-column nodes in **Grid**,
 * performance during jumps can still be enhanced by using 'Grid(this.scroller, {regularSize: [1, 1]})'.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface GridLayoutOptions {

  /**
   * Number of rows and columns occupied by a grid item with regular size.
   * The only supported value is **[1, 1]**, meaning that the grid item occupies one row and one column.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  regularSize: [number, number];

  /**
   * Size of **GridItem** at the specified index in **Grid**.
   * The size is irregular. When **onGetIrregularSizeByIndex** is not set,
   * the grid item specified in this parameter occupies an entire row of the grid that scrolls vertically
   * or an entire column of the grid that scrolls horizontally.
   *
   * @default number[] no irregular grid item
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  irregularIndexes?: number[];

  /**
   * Number of rows and columns occupied by the grid item with an irregular size.
   * This parameter is used together with **irregularIndexes**.
   * In versions earlier than API version 12, the vertical scrolling grid does not support grid items
   * spanning multiple rows, and the horizontal scrolling grid does not support grid items spanning multiple columns.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onGetIrregularSizeByIndex?: (index: number) => [number, number];

  /**
   * Position and size of the grid item with the specified index,
   * in the format of [rowStart,columnStart,rowSpan,columnSpan],
   * <br>where **rowStart** indicates the row start position, **columnStart** indicates the column start position,
   * <br>**rowSpan** indicates the number of rows occupied by the grid item,
   * and **columnSpan** indicates the number of columns occupied by the grid item.
   * Their values are unitless.
   * <br>The values of **rowStart** and **columnStart** are natural numbers greater than or equal to 0.
   * If a negative value is set, the default value **0** is used.
   * <br>The values of **rowSpan** and **columnSpan** are natural numbers greater than or equal to 1.
   * If a decimal is set, it is rounded down. If the decimal set is less than 1, the value **1** is used.
   * <br>**NOTE**
   * <br>Case 1: If a grid item finds that the start position specified for it is already occupied,
   * it searches for an available start position from left to right and from top to bottom,
   * starting from position [0,0].
   * <br>Case 2: If any space other than the start position specified for a grid item is occupied,
   * the grid item is displayed within the available space left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onGetRectByIndex?: (index: number) => [number, number, number, number];

  /**
   * Calculates the start row position of the current grid page based on the total scroll offset,
   * used for fast scrolling or reverse scrolling scenarios. If not set, this callback is not enabled.
   * It must be set simultaneously with **onGetStartIndexByIndex** to take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  onGetStartIndexByOffset?: OnGetStartIndexByOffsetCallback;

  /**
   * Calculates the start row within the page when the **Grid** scrolls to a specified target index,
   * used to support operations such as [scrollToIndex](Scroller#scrollToIndex).
   * If not set, this callback is not enabled.
   * It must be set simultaneously with **onGetStartIndexByOffset** to take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  onGetStartIndexByIndex?: OnGetStartIndexByIndexCallback;
}

/**
 * The **Grid** component consists of cells formed by rows and columns. You can specify the cells where items are
 * located to form various layouts.
 *
 * > **NOTE**
 * >
 * > The component has been bound with gestures to implement functions such as follow-up scrolling. If you need to add
 * > custom gestures, refer to [Gesture Blocking Enhancement]{@link ./common}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface GridInterface {
  /**
   * Creates a **Grid** component.
   *
   * @param { Scroller } scroller - Controller of the scrollable component. It is used to bind to the scrollable
   *     component. If it is not set, no external controller is bound, and the component manages the scrolling behavior
   *     by itself.<br/>**NOTE**<br/>It is not allowed to bind the same scroll control object to other scrollable
   *     components, such as [ArcList]{@link @ohos.arkui.ArcList}, [List]{@link ./list}, [Grid]{@link ./grid},
   *     [Scroll]{@link ./scroll}, and [WaterFlow]{@link ./water_flow}.
   * @param { GridLayoutOptions } layoutOptions - Grid layout options, used to configure layout information such as
   *     **GridItem** spanning rows and columns. If it is not passed in, the **Grid** performs layout based on regular
   *     attributes such as **rowsTemplate** and **columnsTemplate** and the attributes of **GridItem** itself, without
   *     enabling the layout options provided by **GridLayoutOptions**.<br/> [since 10]
   * @returns { GridAttribute } The attribute of the grid
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (scroller?: Scroller, layoutOptions?: GridLayoutOptions): GridAttribute;
}

/**
 * Enumerates the main axis layout directions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum GridDirection {

  /**
   * Horizontal layout, where the child components are arranged from left to right as the main axis runs along the rows.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Row,

  /**
   * Vertical layout, where the child components are arranged from top to bottom as the main axis runs down the columns.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Column,

  /**
   * Reverse horizontal layout, where the child components are arranged from right to left as the main axis runs along
   * the rows.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  RowReverse,

  /**
   * Reverse vertical layout, where the child components are arranged from bottom up as the main axis runs down the
   * columns.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  ColumnReverse,
}

/**
 * Enumerates the alignment modes of grid items.
 *
 * > **NOTE**
 * >
 * > 1. The **STRETCH** option only takes effect in scrollable grids.
 *
 * > 2. The **STRETCH** option takes effect only if each grid item in a row is of a regular size (occupying only one row
 * > and one column). It is not effective in scenarios where there are grid items spanning across rows or columns.
 *
 * > 3. When **STRETCH** is used, only grid items without a set height will adopt the height of the tallest grid item in
 * > the current row; the height of grid items with a set height will remain unchanged.
 *
 * > 4. When **STRETCH** is used, the grid undergoes an additional layout process, which may incur additional
 * > performance overhead.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum GridItemAlignment {

  /**
   * Use the default alignment mode of the grid.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DEFAULT = 0,

  /**
   * Use the height of the tallest grid item in a row as the height for all other grid items in that row.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  STRETCH = 1,
}

/**
 * Provides information about the position and length of the scrollbar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface ComputedBarAttribute {

  /**
   * Total offset of the grid content relative to the display area, in vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  totalOffset: number;

  /**
   * Total length of the grid content, in vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  totalLength: number;
}

/**
 * Represents the return value of the
 * [getEvent('Grid')]{@link ../../../arkui/FrameNode:typeNode.getEvent(node: FrameNode, nodeType: 'Grid')} method in
 * **frameNode**, which can be used to set scroll events for a **Grid** node.
 *
 * **UIGridEvent** inherits from [UIScrollableCommonEvent]{@link UIScrollableCommonEvent}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare interface UIGridEvent extends UIScrollableCommonEvent {

  /**
   * Sets the callback for the
   * [onWillScroll](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#onwillscroll12) event.
   *
   * If the input parameter is **undefined**, the event callback is reset.
   *
   * @param { OnWillScrollCallback | undefined } callback - Callback for the **onWillScroll** event. When **undefined**
   *     is passed in, the event callback is reset.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setOnWillScroll(callback: OnWillScrollCallback | undefined): void;

  /**
   * Sets the callback for the
   * [onDidScroll](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#ondidscroll12) event.
   *
   * If the input parameter is **undefined**, the event callback is reset.
   *
   * @param { OnScrollCallback | undefined } callback - Callback for the **onDidScroll** event. When **undefined** is
   *     passed in, the event callback is reset.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setOnDidScroll(callback: OnScrollCallback | undefined): void;

  /**
   * Sets the callback of the [onScrollIndex]{@link GridAttribute#onScrollIndex} event.
   *
   * If the input parameter is **undefined**, the event callback is reset.
   *
   * @param { OnGridScrollIndexCallback | undefined } callback - Callback for the **onScrollIndex** event. When
   *     **undefined** is passed in, the event callback is reset.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setOnScrollIndex(callback: OnGridScrollIndexCallback | undefined): void;
}

/**
 * Represents a callback for item changes in the visible area of the **Grid** component.
 *
 * @param {number} first - Index of the first item of the **Grid** component.
 * @param {number} last - Index of the last item of the **Grid** component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare type OnGridScrollIndexCallback = (first: number, last: number) => void;

/**
 * In addition to [universal attributes]{@link ./common} and
 * [scrollable component common attributes](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#attributes),
 * the following attributes are also supported.
 *
 * In addition to [universal events]{@link ./common} and
 * [scrollable component common events](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#events),
 * the following events are also supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class GridAttribute extends ScrollableCommonMethod<GridAttribute> {

  /**
   * Sets the number of columns, fixed column width, or minimum column width of the grid. If this attribute is not set,
   * one column will be used.
   *
   * For example, **&nbsp;'1fr&nbsp;1fr&nbsp;2fr'&nbsp;** indicates three columns, with the first column taking up 1/4
   * of the parent component's full width, the second column 1/4, and the third column 2/4.
   *
   * **columnsTemplate('repeat(auto-fit, track-size)')**: The layout automatically calculates the number of columns and
   * the actual column width, while adhering to the minimum column width specified with **track-size**.
   *
   * **columnsTemplate('repeat(auto-fill, track-size)')**: The layout automatically calculates the number of columns
   * based on the fixed column width specified with **track-size**.
   *
   * **columnsTemplate('repeat(auto-stretch, track-size)')**: The layout uses **columnsGap** to define the minimum gap
   * between columns and automatically calculates the number of columns and the actual gap size based on the fixed
   * column width specified by **track-size**.
   *
   * **repeat**, **auto-fit**, **auto-fill**, and **auto-stretch** are keywords. **track-size** indicates the column
   * width, in the unit of px, vp (default), %, or any valid digit. The value must be greater than or equal to one valid
   * column width.
   *
   * In auto-fit and auto-stretch modes, only a valid column width value is supported for **track-size**. Additionally,
   * in auto-stretch mode, **track-size** only supports units such as px, vp, and valid numbers, but does not support
   * percentage (%). The auto-fill mode supports one or more valid column widths, for example, columnsTemplate('repeat(
   * auto-fill, 20)') or columnsTemplate('repeat(auto-fill, 20 80px)').
   *
   * For details about the effect, see
   * [Example 8]{@link ./grid}.
   *
   * If this attribute is set to **'0fr'**, the column width is 0, and grid item in the column is not displayed. If this
   * attribute is set to any other invalid value, the grid item is displayed as one column.
   *
   * @param { string } value - Number of columns or minimum column width of the grid.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  columnsTemplate(value: string): GridAttribute;

  /**
   * Number of columns in the current grid layout. If this attribute is not set, one column will be used.
   *
   * When the value is of the string type, refer to
   * [columnsTemplate(value: string)]{@link GridAttribute#columnsTemplate(value: string)} for the usage.
   *
   * When the value is of the **ItemFillPolicy** type, the number of columns is determined based on the
   * [breakpoint type](docroot://ui/arkts-layout-development-grid-layout.md#breakpoints) corresponding to the width of
   * the **Grid** component.
   *
   * For example, **ItemFillPolicy.BREAKPOINT_DEFAULT** displays two columns when the component width falls within the
   * sm or smaller breakpoint range, three columns for the md breakpoint range, and five columns for the lg or larger
   * breakpoint range, with each column being 1 fr.
   *
   * @param { string | ItemFillPolicy } value - Number of columns in the current grid layout. When **value** is of the
   *     string type, it indicates a fixed number of columns or the **repeat** function form; when **value** is of the
   *     **ItemFillPolicy** type, the number of columns is automatically determined based on the breakpoint.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  columnsTemplate(value: string | ItemFillPolicy): GridAttribute;
  /**
   * Sets the number of rows, fixed row height, or minimum row height of the grid. If this attribute is not set, one row
   * will be used.
   *
   * For example, **'1fr 1fr 2fr'** indicates three rows, with the first row taking up 1/4 of the parent component's
   * full height, the second row 1/4, and the third row 2/4.
   *
   * **rowsTemplate('repeat(auto-fit, track-size)')**: The layout automatically calculates the number of rows and the
   * actual row height, while adhering to the minimum row height specified with **track-size**.
   *
   * **rowsTemplate('repeat(auto-fill, track-size)')**: The layout automatically calculates the number of rows based on
   * the fixed row height specified with **track-size**.
   *
   * **rowsTemplate('repeat(auto-stretch, track-size)')**: The layout uses **rowsGap** to define the minimum gap between
   * rows and automatically calculates the number of rows and the actual gap size based on the fixed row height
   * specified with **track-size**.
   *
   * **repeat**, **auto-fit**, **auto-fill**, and **auto-stretch** are keywords. **track-size** indicates the row
   * height, in the unit of px, vp (default), %, or any valid digit. The value must be greater than or equal to one
   * valid row height.
   *
   * In auto-fit and auto-stretch modes, only a valid row height value is supported for **track-size**. Additionally, in
   * auto-stretch mode, **track-size** only supports units such as px, vp, and valid numbers, but does not support
   * percentage (%). The auto-fill mode supports one or more valid row heights, for example, rowsTemplate('repeat(auto-
   * fill, 20)') or rowsTemplate('repeat(auto-fill, 20 80px)').
   *
   * If this attribute is set to **'0fr'**, the row height is 0, and grid item in the row is not displayed. If this
   * attribute is set to any other invalid value, the grid item is displayed as one row.
   *
   * @param { string } value - Number of rows or minimum row height of the grid.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  rowsTemplate(value: string): GridAttribute;

  /**
   * Sets the gap between columns. A value less than 0 evaluates to the default value.
   *
   * @param { Length } value - Gap between columns.<br/>Default value: **0**<br/>Value range:
   *     [0, +∞). If a value less than 0 is set, the default value 0 is used.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  columnsGap(value: Length): GridAttribute;

  /**
   * Sets the gap between rows. A value less than 0 evaluates to the default value.
   *
   * @param { Length } value - Gap between rows.<br/>Default value: 0<br/>Value range:
   *     [0, +∞). If a value less than 0 is set, the default value 0 is used.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  rowsGap(value: Length): GridAttribute;

  /**
   * Sets the width of the scrollbar. Percentage values are not supported. After the width is set, the scrollbar width
   * in both the normal state and the pressed state is the set value. If the scrollbar width exceeds the visible size of
   * the **Grid** component along the main axis, the scrollbar width changes to the default value of 4 vp.
   *
   * @param { number | string } value - Width of the scrollbar.<br/>Default value: **4**<br/>Unit: vp<br/>Value range:
   *     [0, +∞). If the value is less than 0, the default value is used. If the value is 0, the scrollbar is not displayed.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollBarWidth(value: number | string): GridAttribute;

  /**
   * Sets the width of the scrollbar. Percentage values are not supported. After the width is set, the scrollbar width
   * in both the normal state and the pressed state is the set value. If the scrollbar width exceeds the visible size of
   * the **Grid** component along the main axis, the scrollbar width changes to the default value of 4 vp. Resource type
   * is supported.
   *
   * If this attribute is not set, the scrollbar width is 4 vp.
   *
   * @param { number | string | Resource } value - Scrollbar width.
   *     <br>Unit: vp
   *     <br>The value range is
   *     [0, +∞). If this parameter is set to a value less than 0, **4vp** is used.
   *     The value **0** means not to show the scrollbar.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  scrollBarWidth(value: number | string | Resource): GridAttribute;

  /**
   * Sets the scrollbar color.
   *
   * @param { Color | number | string } value - Scrollbar color.
   *     <br>Default value: **'#182431'** (40% opacity)
   *     <br>A number value indicates a HEX color in RGB or ARGB format, for example, **0xffffff**.
   *     <br>A string value indicates a color in RGB or ARGB format, for example, **'#ffffff'**.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollBarColor(value: Color | number | string): GridAttribute;

  /**
   * Sets the scrollbar color. Compared with
   * [scrollBarColor]{@link GridAttribute#scrollBarColor(value: Color | number | string)}, the parameter name is changed
   * to **color** and the Resource type is supported.
   *
   * @param { Color | number | string | Resource } color - Scrollbar color.
   *     <br>Default value: **'#182431'** (40% opacity)
   *     <br>A number value indicates a HEX color in RGB or ARGB format, for example, **0xffffff**. A string value
   *     indicates a color in RGB or ARGB format, for example, **'#ffffff'**.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  scrollBarColor(color: Color | number | string | Resource): GridAttribute;

  /**
   * Sets the scrollbar state.
   *
   * @param { BarState } value - Scrollbar state.
   *     <br>Default value: **BarState.Auto**
   *     <br>**NOTE**
   *     <br>In API version 9 and earlier versions, the default value is **BarState.Off**. Since API version 10, the
   *     default value is **BarState.Auto**.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollBar(value: BarState): GridAttribute;

  /**
   * Triggered at the end of each frame layout in the grid. You can use the callback to set the position and length of
   * the scrollbar.
   *
   * This API is intended solely for setting the scroll position of the grid. Avoid implementing service logic within
   * this API.
   *
   * @param { function } event - callback of grid scroll,
   *     index: Index of the first item of the grid.
   *     offset: Offset of the displayed first item relative to the start position of the grid, in vp.
   *     return ComputedBarAttribute: Position and length of the scrollbar.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onScrollBarUpdate(event: (index: number, offset: number) => ComputedBarAttribute): GridAttribute;

  /**
   * Triggered when the first or last item displayed in the grid changes, that is, when the index of either the first or
   * last item changes. It is triggered once when the grid is initialized.
   *
   * @param { function } event - of grid scroll,
   *     first is the index of the first item displayed in the grid,
   *     last is the index of the last item displayed in the grid.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onScrollIndex(event: (first: number, last: number) => void): GridAttribute;

  /**
   * Sets the number of grid rows/columns to be preloaded on both sides along the main axis. This attribute takes effect
   * only in [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md) and
   * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md) with
   * [virtualScroll]{@link RepeatAttribute#virtualScroll} enabled.<!--Del-->For details, see
   * [Minimizing White Blocks During Swiping](docroot://performance/arkts-performance-improvement-recommendation.md#minimizing-white-blocks-during-swiping).
   * <!--DelEnd-->
   *
   * After caching is set, **cachedCount** grid rows/columns are preloaded on both sides of the display area of the
   * **Grid** component along the main axis. During vertical scrolling, **cachedCount** rows are preloaded on the top
   * and bottom sides respectively. During horizontal scrolling, **cachedCount** columns are preloaded on the left and
   * right sides respectively.
   *
   * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md) and
   * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md) with
   * [virtualScroll]{@link RepeatAttribute#virtualScroll} enabled will release **GridItem** components that are outside
   * the display and cache range.
   *
   * @param { number } value - Number of grid items to be cached (preloaded).
   *     <br>Default value: the number of rows visible on the screen for vertical scrolling, or the number of columns
   *     visible on the screen for horizontal scrolling. The maximum value is 16.
   *     <br>Value range: [0, +∞).
   *     <br>Values less than 0 are treated as **1**.
   *     <br>When **value** is updated using a state variable, the **Grid** component does not trigger a layout update.
   *     The number of cached nodes is updated only during the next layout.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  cachedCount(value: number): GridAttribute;

  /**
   * Sets the number of grid rows/columns to be preloaded on both sides along the main axis, and configures whether to
   * display the preloaded nodes. This attribute takes effect only in
   * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md) and
   * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md) with
   * [virtualScroll]{@link RepeatAttribute#virtualScroll} enabled.
   *
   * After caching is set, **cachedCount** grid rows/columns are preloaded on both sides of the display area of the
   * **Grid** component along the main axis. During vertical scrolling, **cachedCount** rows are preloaded on the top
   * and bottom sides respectively. During horizontal scrolling, **cachedCount** columns are preloaded on the left and
   * right sides respectively. The preloaded nodes can be displayed together with the
   * [clip]{@link CommonMethod#clip(value: boolean)} or
   * [clipContent](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#clipcontent14) attribute.
   *
   * @param { number } count - Number of grid items to be cached (preloaded).
   *     <br>Default value: the number of rows visible on the screen for vertical scrolling, or the number of columns
   *     visible on the screen for horizontal scrolling. The maximum value is 16.
   *     <br>Value range: [0, +∞).
   *     <br>Values less than 0 are treated as **1**.
   *     <br>When the count value is updated using the state variable, the **Grid** component does not trigger a layout
   *     update. The number of cached nodes is updated only during the next layout.
   * @param { boolean } show - Whether to display the preloaded nodes. If this parameter is set to **true**, the
   *     preloaded **GridItem** is displayed. If this parameter is set to **false**, the preloaded **GridItem** is not
   *     displayed.
   *     <br> Default value: **false**
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  cachedCount(count: number, show: boolean): GridAttribute;

  /**
   * Sets whether to enable edit mode. In edit mode, the user can drag the [grid items]{@link ./gridItem} in the
   * **Grid** component.
   *
   * > **NOTE**
   * >
   * > This attribute takes effect only when neither **rowsTemplate** nor **columnsTemplate** is set.
   *
   * @param { boolean } value - Whether to enable edit mode. If this parameter is set to **true**, the **Grid**
   *     component is in edit mode. If this parameter is set to **false**, the **Grid** component is not in edit mode.
   *     <br>Default value: **false**
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  editMode(value: boolean): GridAttribute;

  /**
   * Sets whether to enable multiselect. After multiselect is enabled, you can use **GridItem**'s **selected** attribute
   * and **onSelect** event to obtain the selection state of **GridItem**. Additionally, you can set the selected state
   * style of **GridItem** using [Polymorphic Style]{@link ./common} (by default, **GridItem** has no selected state
   * style).
   *
   * @param { boolean } value - Whether to enable multiselect.
   *     <br>Default value: **false**
   *     <br>**false**: Multiselect is disabled. **true**: Multiselect is enabled.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  multiSelectable(value: boolean): GridAttribute;

  /**
   * Sets the maximum number of rows or columns that can be displayed. A value less than 1 evaluates to the default
   * value.
   *
   * > **NOTE**
   * >
   * > This attribute takes effect only when neither **rowsTemplate** nor **columnsTemplate** is set.
   *
   * When **layoutDirection** is **Row** or **RowReverse**, the value indicates the maximum number of columns that can
   * be displayed.
   *
   * When **layoutDirection** is **Column** or **ColumnReverse**, the value indicates the maximum number of rows that
   * can be displayed.
   *
   * If the value of **maxCount** is smaller than that of **minCount**, the default values of **maxCount** and
   * **minCount** are used.
   *
   * @param { number } value - Maximum number of rows or columns that can be displayed.<br/>Default value: **Infinity**<
   *     br/>Value range: [1, +∞). If the value is set to less than 1, the default value **Infinity** is used.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  maxCount(value: number): GridAttribute;

  /**
   * Sets the minimum number of rows or columns that can be displayed. A value less than 1 evaluates to the default
   * value.
   *
   * > **NOTE**
   * >
   * > This attribute takes effect only when neither **rowsTemplate** nor **columnsTemplate** is set.
   *
   * When **layoutDirection** is **Row** or **RowReverse**, the value indicates the minimum number of columns that can
   * be displayed.
   *
   * When **layoutDirection** is **Column** or **ColumnReverse**, the value indicates the minimum number of rows that
   * can be displayed.
   *
   * If the value of **minCount** is greater than that of **maxCount**, both **minCount** and **maxCount** are treated
   * as using their default values.
   *
   * @param { number } value - Minimum number of rows or columns that can be displayed.<br/>Default value: **1**<br/>
   *     Value range: [1, +∞). If a value less than 1 is set, the default value **1** is used.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  minCount(value: number): GridAttribute;

  /**
   * Sets the height per row or width per column.
   *
   * > **NOTE**
   * >
   * > This attribute takes effect only when neither **rowsTemplate** nor **columnsTemplate** is set.
   *
   * When **layoutDirection** is **Row** or **RowReverse**, the value indicates the height per row.
   *
   * When **layoutDirection** is **Column** or **ColumnReverse**, the value indicates the width per column.
   *
   * @param { number } value - Height of a row or width of a column.<br/>Default value: when **layoutDirection** is
   *     **Row** or **RowReverse**, the height of the first **GridItem**; when **layoutDirection** is **Column** or
   *     **ColumnReverse**, the width of the first **GridItem**.<br/>Unit: vp <br/>Value range: (0, +∞). If the value is
   *     set to a value less than or equal to 0, the default value is used.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  cellLength(value: number): GridAttribute;

  /**
   * Sets the main axis layout direction of the grid.
   *
   * > **NOTE**
   * >
   * > This attribute takes effect only when neither **rowsTemplate** nor **columnsTemplate** is set.
   *
   * @param { GridDirection } value - Main axis layout direction of the grid.
   *     <br>Default value: **GridDirection.Row**
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  layoutDirection(value: GridDirection): GridAttribute;

  /**
   * Sets whether the current **Grid** component supports the use of the if/else rendering syntax in **LazyForEach** or
   * **Repeat** to generate an empty branch node that contains no child component. If this attribute is not set, empty
   * branch nodes are not supported. This attribute cannot be updated after being set. Therefore, you cannot switch
   * between the behavior of supporting empty branches and the behavior of not supporting empty branches after setting
   * this attribute.
   *
   * @param { boolean | undefined } supported - Whether the current **Grid** component supports the use of the
   *     [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) rendering syntax in
   *     [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md) or
   *     [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md) to generate an empty branch node
   *     that contains no child component.<br>**true**: yes; **false**: no<br>If the value is **undefined**, it is
   *     processed as **false**.
   * @returns { GridAttribute } the attribute of the Gird.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  supportEmptyBranchInLazyLoading(supported: boolean | undefined): GridAttribute;

  /**
   * Sets whether to enable animation. Currently, the grid item drag animation is supported. Animation is supported only
   * in scrolling mode (only **rowsTemplate** or **columnsTemplate** is set).
   *
   * Drag animations are only supported in grids with fixed size rules; scenarios involving spanning across rows or
   * columns are not supported.
   *
   * For details about the **supportAnimation** animation effect, see
   * [Example 5: Implementing Dragging in a Grid](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#example-5-implementing-dragging-in-a-grid).
   * For other animation effects, customize the drag effect.
   *
   * @param { boolean } value - Whether to enable animation. If this parameter is set to **true**, the drag animation of
   *     **GridItem** is supported. If this parameter is set to **false**, the drag animation of **GridItem** is not
   *     supported.
   *     <br>Default value: **false**
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  supportAnimation(value: boolean): GridAttribute;

  /**
   * Triggered when dragging of a **GridItem** starts.
   *
   * This event is triggered when the user long presses a grid item.
   *
   * Drag gesture recognition is also initiated by a long press, and the event processing mechanism prioritizes child
   * component events. Therefore, when the grid item is bound to the
   * [LongPressGesture]{@link LongPressGestureInterface}, it cannot be dragged. In light of this, if both long press and
   * drag operations are required on the grid item, you can use the universal drag event.
   *
   * The dragged and lifted **GridItem** can move within the app window. To restrict the movement range, you can
   * implement it through a custom gesture. For details, see
   * [Example 16: Customizing the Drag Effect for GridItem](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#example-16-customizing-the-drag-effect-for-griditem).
   *
   * Automatic scrolling when dragging to the edge of the **Grid** is not supported. You can use the universal drag to
   * implement it. For details, see
   * [Example 17: Dragging Grid Items with Drag Events](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#example-17-dragging-grid-items-with-drag-events).
   * Since API version 26.0.0, you can use the
   * [onMove]{@link DynamicNode#onMove} API of
   * [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md),
   * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), and
   * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md) to implement this effect. For
   * details, see
   * [Example 22 (Dragging with OnMove)]{@link ./grid}.
   * It also supports dragging of **GridItem** that spans rows and columns, but note that the **Grid** must be
   * scrollable.
   *
   * @param { function } event - Callback triggered when the drag of a **GridItem** starts.
   *     <br>In API version 22 and earlier versions, the type of this parameter is
   *     **(event: ItemDragInfo, itemIndex: number) => (() => any) | void**. For the meanings of the **event** and
   *     **itemIndex** parameters, see [OnItemDragStartCallback]{@link OnItemDragStartCallback}. [since 8 - 22]
   * @param { OnItemDragStartCallback } event - Callback triggered when the drag of a **GridItem** starts.
   *     <br>In API version 22 and earlier versions, the type of this parameter is
   *     **(event: ItemDragInfo, itemIndex: number) => (() => any) | void**. For the meanings of the **event** and
   *     **itemIndex** parameters, see [OnItemDragStartCallback]{@link OnItemDragStartCallback}. [since 23]
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onItemDragStart(event: OnItemDragStartCallback): GridAttribute;

  /**
   * Triggered when a dragged item enters the range of a **GridItem**.
   *
   * @param { function } event - Information about the drag point.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onItemDragEnter(event: (event: ItemDragInfo) => void): GridAttribute;

  /**
   * Triggered when a dragged item moves within the range of a **GridItem**.
   *
   * @param { function } event - Information about the drag point.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onItemDragMove(event: (event: ItemDragInfo, itemIndex: number, insertIndex: number) => void): GridAttribute;

  /**
   * Triggered when a dragged item leaves a **GridItem**.
   *
   * @param { function } event - Information about the drag point.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onItemDragLeave(event: (event: ItemDragInfo, itemIndex: number) => void): GridAttribute;

  /**
   * The **GridItem** bound with this event can serve as a drop target. This event is triggered when the **GridItem**
   * stops being dragged.
   *
   * When the drop position is within the **GridItem**, **isSuccess** returns **true**; when it is outside the
   * **GridItem**, **isSuccess** returns **false**.
   *
   * @param { function } event - Information about the drag point.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onItemDrop(
    event: (event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => void,
  ): GridAttribute;

  /**
   * Sets the effect used when the scroll boundary is reached.
   *
   * @param { EdgeEffect } value - Effect used when the scroll boundary is reached. The spring and shadow effects are
   *     supported.
   *     <br>Default value: **EdgeEffect.None**
   * @param { EdgeEffectOptions } options - Whether to enable the scroll effect when the component content is smaller
   *     than the component itself. The value **{ alwaysEnabled: true }** means to enable the scroll effect, and
   *     **{ alwaysEnabled: false }** means the opposite.
   *     <br>Default value: **{ alwaysEnabled: false }** [since 11]
   * @returns { GridAttribute } The attribute of the grid
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  edgeEffect(value: EdgeEffect, options?: EdgeEffectOptions): GridAttribute;

  /**
   * Sets the nested scrolling options. Sets the nested scrolling modes for both forward and backward directions to
   * achieve scrolling linkage with the parent component. When the component content is smaller than the component
   * itself and **options** of [edgeEffect]{@link GridAttribute#edgeEffect} is set to **{ alwaysEnabled: false }**, the
   * component's own swipe gesture will not be triggered, and the nested scroll property will not take effect. If its
   * parent scrollable component has a swipe gesture, this swipe gesture will be triggered instead.
   *
   * @param { NestedScrollOptions } value - Nested scroll options, used to set the nested scrolling linkage behavior
   *     between the **Grid** component and its parent component.
   * @returns { GridAttribute } the attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  nestedScroll(value: NestedScrollOptions): GridAttribute;

  /**
   * Sets whether to support the scrolling gesture.
   *
   * > **NOTE**
   * >
   * > The component cannot be scrolled through mouse press-and-drag operations.
   *
   * @param { boolean } value - Whether to support scroll gestures. With the value **true**, scrolling via finger or
   *     mouse is enabled. With the value **false**, scrolling via finger or mouse is disabled, but this does not affect
   *     the scrolling APIs of the [Scroller]{@link Scroller}.
   *     <br>Default value: **true**
   * @returns { GridAttribute } The attribute of the grid
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableScrollInteraction(value: boolean): GridAttribute;

  /**
   * Sets the friction coefficient. It takes effect when the scroll area is swiped, and affects only the inertial
   * scrolling process. It has an indirect impact on the chained effect during inertial scrolling.
   *
   * @param { number | Resource } value - Friction coefficient.
   *     <br>Default value: **0.9** for wearable devices and **0.6** for non-wearable devices
   *     <br>Since API version 11, the default value for non-wearable devices is **0.7**.
   *     <br>Since API version 12, the default value for non-wearable devices is **0.75**.
   *     <br>Value range: (0, +∞). If this parameter is set to a value less than or equal to 0, the default value is
   *     used.
   * @returns { GridAttribute } the attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  friction(value: number | Resource): GridAttribute;

  /**
   * Sets the alignment mode of grid items in the grid. For details about the usage, see
   * [Example 9](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#example-9-setting-grid-item-heights-based-on-the-tallest-item-in-the-current-row).
   *
   * @param { Optional<GridItemAlignment> } alignment - Alignment mode of grid items in the grid.
   *     <br>Default value: **GridItemAlignment.DEFAULT**
   * @returns { GridAttribute } The attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  alignItems(alignment: Optional<GridItemAlignment>): GridAttribute;

  /**
   * Sets the focus wrap mode for cross-axis arrow keys.
   *
   * @param { Optional<FocusWrapMode> } mode - Focus wrap mode for cross-axis arrow keys.
   *     <br>Default value: **FocusWrapMode.DEFAULT**
   *     <br>**NOTE**
   *     <br>Abnormal values are treated as the default value, meaning that cross-axis arrow keys cannot wrap.
   * @returns { GridAttribute } the attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  focusWrapMode(mode: Optional<FocusWrapMode>): GridAttribute;

  /**
   * Sets whether to synchronously load all child components in the grid.
   *
   * @param { boolean } enable - Whether to synchronously load all child components in the grid.
   *     <br> **true**: yes; **false**: no Default value: **true**
   *     <br> **NOTE**
   *     <br>When this parameter is set to **false**, in the first display or **scrollToIndex** jumps without animation,
   *     if the time consumed by the frame layout exceeds 50 ms, the child components that have not been laid out in the
   *     grid are delayed to the next frame for layout.
   * @returns { GridAttribute } The attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  syncLoad(enable: boolean): GridAttribute;

  /**
   * Sets the options of the edit mode.
   *
   * @param { EditModeOptions } [options] - Edit mode options, used to configure behaviors such as the multi-select
   *     gathering animation, preview badge, multi-select style, and two-finger swipe multi-select in Grid edit mode.
   *     Pass this parameter when the preceding behaviors need to be adjusted; if it is not passed, each option uses the
   *     default value in the **EditModeOptions** object description.
   * @returns { GridAttribute } - The attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  editModeOptions(options?: EditModeOptions): GridAttribute;

  /**
   * Sets whether to enable the edit mode for the **Grid** component. After the edit mode is enabled, you can swipe to
   * select multiple [GridItem]{@link ./gridItem} components in the **Grid** component. If this API is not called, the
   * edit mode is not enabled.
   *
   * @param { boolean | undefined } enabled - Whether to enable the editing mode. This parameter supports two-way
   *     binding with a variable through [!!](docroot://ui/state-management/arkts-new-binding.md). When set to **true**,
   *     the editing mode is enabled and multiple items can be selected by swiping. When set to **false** or
   *     **undefined**, the editing mode is disabled and multiple items cannot be selected by swiping.
   * @returns { GridAttribute } The attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  enableEditMode(enabled: boolean | undefined): GridAttribute;

  /**
   * Triggered when the edit mode state of [enableEditMode]{@link GridAttribute#enableEditMode} changes. This API uses
   * an asynchronous callback to return the result.
   *
   * @param { Callback<boolean> | undefined } callback - Callback invoked when the edit mode state changes. The callback
   *     parameter is of the boolean type. The value **true** indicates entering the edit mode, and **false** indicates
   *     exiting the edit mode.
   *     <br>If **undefined** is passed in, the callback is canceled.
   * @returns { GridAttribute } The attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onEditModeChange(callback: Callback<boolean> | undefined): GridAttribute;

  /**
   * Called When sliding the grid.
   *
   * @param { function } event - callback of grid scroll,
   *     scrollOffset: Offset relative to the previous frame.
   *     The offset is positive when the **Grid** component is scrolled up and negative when it is scrolled down.
   *     <br>Unit: vp
   *     scrollState: Current scroll state.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 12
   * @useinstead common.ScrollableCommonMethod#onDidScroll
   */
  onScroll(event: (scrollOffset: number, scrollState: ScrollState) => void): GridAttribute;

  /**
   * Triggered when the grid reaches the start position.
   *
   * This event is triggered once when the **Grid** is initialized and once when the **Grid** scrolls to the start
   * position. When the edge effect of the **Grid** is a spring effect, this event is triggered once when the swipe
   * passes the start position and once again when the rebound returns to the start position.
   *
   * @param { function } event - Callback triggered when the grid reaches the start position.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onReachStart(event: () => void): GridAttribute;

  /**
   * Triggered when the grid reaches the end position. It is triggered when the grid content does not fill one screen
   * and the end of the last child component is within the **Grid**.
   *
   * When the edge effect of the **Grid** is a spring effect, this event is triggered once when the swipe passes the end
   * position and once again when the rebound returns to the end position.
   *
   * @param { function } event - Callback triggered when the grid reaches the end position.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onReachEnd(event: () => void): GridAttribute;

  /**
   * Triggered when the grid starts scrolling initiated by the user's finger dragging the grid or its scrollbar. This
   * event is also triggered when the animation contained in the scrolling triggered by [Scroller]{@link Scroller}
   * starts.
   *
   * @param { function } event - Callback invoked when the grid starts scrolling.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onScrollStart(event: () => void): GridAttribute;

  /**
   * Triggered when the grid stops scrolling after the user's finger leaves the screen. This event is also triggered
   * when the animation contained in the scrolling triggered by [Scroller]{@link Scroller} stops.
   *
   * @param { function } event - Callback when the grid stops scrolling.
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onScrollStop(event: () => void): GridAttribute;

  /**
   * When this API is called back, the event parameter passes the scroll offset that is about to occur. The event
   * processing function can calculate the actually required scroll offset based on the application scenario and return
   * it as the return value. The grid will then scroll according to this returned actual scroll offset.
   *
   * This event is triggered when either of the following conditions is met:
   *
   * 1. Scrolling is initiated by user interaction (for example, finger swipe, keyboard, or mouse operation).
   * 2. The **Grid** component scrolls by inertia.
   * 3. Call the [fling]{@link Scroller#fling} API to trigger scrolling.
   *
   * This event is not triggered in the following scenarios:
   *
   * 1. A scroll control API other than [fling]{@link Scroller#fling} is called.
   * 2. The out-of-bounds bounce effect is active.
   * 3. The scrollbar is dragged.
   *
   * @param { function } event - Callback triggered when each frame scrolling starts. [since 10 - 19]
   * @param { OnScrollFrameBeginCallback } event - Callback triggered when each frame scrolling starts. [since 20]
   * @returns { GridAttribute } Returns the instance of the GridAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onScrollFrameBegin(event: OnScrollFrameBeginCallback): GridAttribute;
}

/**
 * The **Grid** component consists of cells formed by rows and columns. You can specify the cells where items are
 * located to form various layouts.
 *
 * > **NOTE**
 * >
 * > The component has been bound with gestures to implement functions such as follow-up scrolling. If you need to add
 * > custom gestures, refer to [Gesture Blocking Enhancement]{@link ./common}.
 *
 * ###### Child Components
 *
 * Child components are limited to [GridItem]{@link ./gridItem} and custom components. When using custom components
 * inside **Grid**, it is recommended to wrap the custom component with a **GridItem** as the top-level container.
 * Setting attributes or event methods directly on custom components is not recommended.
 *
 * Child components can be dynamically generated using rendering control types
 * [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md),
 * [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md),
 * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), and
 * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md). **LazyForEach** or **Repeat** is
 * recommended to optimize performance.
 *
 * > **NOTE**
 * >
 * > Below are the rules for calculating the indexes of the child components of **Grid**:
 * >
 * > The index increases in ascending order of child components.
 * >
 * > In the **if/else** statement, only the child components in the branch where the condition is met participate in the
 * > index calculation.
 * >
 * > In the ForEach/LazyForEach and Repeat statements, index values are calculated for all expanded child components.
 * >
 * > After changes occur in [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md),
 * > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md),
 * > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), and
 * > [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md), index values are updated
 * > accordingly for child components.
 * >
 * > The child component that has the **visibility** attribute set to **Hidden** or **None** is included in the index
 * > calculation.
 * >
 * > The child component that has the **visibility** attribute set to **None** is not displayed, but still takes up the
 * > corresponding cell.
 * >
 * > The child component that has the **position** attribute set is displayed in the corresponding cell, offset by the
 * > distance specified by **position** relative to the upper left corner of the grid. This child component does not
 * > scroll with the corresponding cell and is not displayed after the corresponding cell extends beyond the display
 * > range of the grid.
 * >
 * > When there is a gap between child components, it is filled as much as possible based on the current display area.
 * > Therefore, the relative position of grid items may change as the grid scrolls.
 * >
 * > Since API version 21, the maximum width and height of a single **Grid** child component are 16777216 px. In API
 * > version 20 and earlier versions, the maximum width and height of a single **Grid** child component are 1000000 px.
 * > Exceeding these limits may result in scrolling or display abnormalities.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const Grid: GridInterface;

/**
 * Defines Grid Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const GridInstance: GridAttribute;