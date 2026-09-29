/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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
 * Obtains the main axis size of a specified water flow item based on its index.
 *
 * @param { number } index - Index of the **FlowItem** in the **WaterFlow**.<br/>Value range:
 *     [0, total number of child components - 1]
 * @returns { number } Main axis size, in vp, of the water flow item at the specified index, which is the height for a
 *     vertical **WaterFlow** component and the width for a horizontal **WaterFlow** component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type GetItemMainSizeByIndex = (index: number) => number;

/**
 * Describes the configuration of the water flow item section.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class SectionOptions {
  /**
   * Number of **FlowItem** components in the group, which must be a non-negative number. If the **itemsCount** of any
   * group received by the **splice**, **push**, or **update** method is less than 0, the method does not take effect (
   * returns false). Avoid using a group with **itemsCount** of 0, which may cause layout calculation exceptions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  itemsCount: number;

  /**
   * Number of columns (in vertical layout) or rows (in horizontal layout).
   *
   * Default value: **1**
   *
   * If the value is less than 1, the default value is used.
   *
   * @default 1 one column in vertical layout, or one row in horizontal layout
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  crossCount?: number;

  /**
   * Used to obtain the main axis size of the **FlowItem** at the specified index during the layout of the **WaterFlow**
   * component. For a vertical **WaterFlow**, it is the height; for a horizontal **WaterFlow**, it is the width, in vp.
   * When not set, the **WaterFlow** determines the main axis size based on the regular measurement result of the
   * **FlowItem**.
   *
   * **NOTE**
   *
   * 1. When both **onGetItemMainSizeByIndex** and the width and height attributes of the **FlowItem** are used,
   *     the main axis size is subject to the result returned by **onGetItemMainSizeByIndex**,
   *     which overrides the main axis length of the **FlowItem**.
   * 2. Using **onGetItemMainSizeByIndex** can improve the efficiency of jumping to a specified position or index
   *     in the **WaterFlow**. Avoid mixing groups with and without **onGetItemMainSizeByIndex** set,
   *     which may cause layout exceptions.
   * 3. When **onGetItemMainSizeByIndex** returns a negative number, the main axis size of the **FlowItem** is 0.
   * 4. If the main axis size of the **FlowItem** changes dynamically with the data,
   *     ensure that the value returned by **onGetItemMainSizeByIndex** is consistent with the data source.
   *     When using [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md),
   *     call [onDataChange]{@link DataChangeListener.onDataChange},
   *    [onDataReloaded]{@link DataChangeListener.onDataReloaded()},
   *     or [onDatasetChange]{@link DataChangeListener.onDatasetChange}
   *     to notify the framework that the data has changed after the data changes.
   *     When using [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md),
   *     modify the state array according to the data update rules of Repeat.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onGetItemMainSizeByIndex?: GetItemMainSizeByIndex;

  /**
   * Column gap of the section. If this parameter is not set, the [columnsGap]{@link WaterFlowAttribute#columnsGap} of
   * the **WaterFlow** component is used by default. If an invalid value is set, 0 vp is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  columnsGap?: Dimension;

  /**
   * Row gap of the section. If this parameter is not set, the [rowsGap]{@link WaterFlowAttribute#rowsGap} of the
   * **WaterFlow** component is used by default. If an invalid value is set, 0 vp is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  rowsGap?: Dimension;

  /**
   * Margins of the section. A value of the **Length** type specifies the margins on all the four sides.
   *
   * Default value: **0**
   *
   * Unit: vp
   *
   * When **margin** is set to a percentage, the width of the **WaterFlow** component is used as the base value for the
   * top, bottom, left, and right margins.
   *
   * @default {top: 0, right: 0, bottom: 0, left: 0}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  margin?: Margin | Dimension;
}

/**
 * Describes the water flow item sections.
 *
 * > **NOTE**
 * >
 * > After modifying the group information using **splice**, **push**, or **update**, ensure that the total number of
 * > child components in all groups is consistent with the actual total number of child components in the waterfall
 * > flow. Otherwise, the waterfall flow may fail to scroll because it cannot be laid out normally.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class WaterFlowSections {
  /**
   * A constructor used to create a **WaterFlowSections** object.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor();

  /**
   * Changes sections by removing or replacing an existing section and/or adding a section.
   *
   * @param { number } start - Zero-based index at which the changing starts. The value is converted to an integer.
   *     <br>**NOTE**
   *     <br>1. A negative index counts back from the end of the section list. **start + WaterFlowSections.length()** is
   *     used.
   *     <br>2. If **start** < -**WaterFlowSections.length()**, **0** is used.
   *     <br>3. If **start** >= **WaterFlowSections.length()**, a new section is added at the end.
   * @param { number } [deleteCount] - Number of sections to be deleted from the position specified by **start**.
   *     <br>**NOTE**
   *     <br>1. If **deleteCount** is omitted, or if its value is greater than or equal to the number of sections from
   *     the position specified by **start** to the end of the **WaterFlowSections**, then all sections from the
   *     position specified by **start** to the end of the **WaterFlowSections** will be deleted.
   *     <br>2. If **deleteCount** is **0** or a negative number, no sections are deleted.
   * @param { Array<SectionOptions> } [sections] - Sections to add to the section list, beginning from the position
   *     specified by **start**. If no section is specified, **splice()** will only delete sections from the
   *     **WaterFlow** component.
   * @returns { boolean } Returns **true** if the sections are successfully modified and returns **false** if the
   *     modification fails (**itemsCount** of any section to be added is not a non-negative number).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  splice(start: number, deleteCount?: number, sections?: Array<SectionOptions>): boolean;

  /**
   * Adds the specified sections to the end of the **WaterFlow** component.
   *
   * @param { SectionOptions } section - Group appended to the end of the **WaterFlow**, containing configuration
   *     information such as the number of flow items in the group, number of columns/rows, spacing, margin, and main
   *     axis size callback.
   * @returns { boolean } Returns **true** if the section is successfully added; returns **false** if the addition fails
   *     (**itemsCount** of the new section is not a non-negative number).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  push(section: SectionOptions): boolean;

  /**
   * Updates the configuration of a specified water flow item section.
   *
   * @param { number } sectionIndex - Zero-based index of the water flow item section to update. The value is converted
   *     to an integer.
   *     <br>**NOTE**
   *     <br>1. A negative index counts back from the end of the section list.
   *     **sectionIndex + WaterFlowSections.length()** is used.
   *     <br>2. If **sectionIndex** < -**WaterFlowSections.length()**, **0** is used.
   *     <br>3. If **sectionIndex** >= **WaterFlowSections.length()**, a new section is added at the end.
   * @param { SectionOptions } section - New group information used to replace the **FlowItem** group configuration at
   *     the specified index, including the number of flow items, number of columns/rows, spacing, margins, and main
   *     axis size callback.
   * @returns { boolean } Whether the group is updated successfully. The value **true** indicates that the group is
   *     updated successfully, and **false** indicates that the update fails (the itemsCount of the new group is not non
   *     -negative).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  update(sectionIndex:number, section: SectionOptions): boolean;

  /**
   * Obtains the configuration of all sections in the **WaterFlow** component.
   *
   * @returns { Array<SectionOptions> } Configuration of all sections in the **WaterFlow** component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  values(): Array<SectionOptions>;

  /**
   * Obtains the number of sections in the **WaterFlow** component.
   *
   * @returns { number } Number of sections in the **WaterFlow** component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  length(): number;
}

/**
 * Enumerates the layout modes of the **WaterFlow** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum WaterFlowLayoutMode {
  /**
   * Default layout mode where water flow items are arranged from top to bottom. Items in the viewport depend on the
   * layout of all items above them. In cases of jumping to a position or switching column counts, the layout of all
   * items above the viewport must be recalculated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  ALWAYS_TOP_DOWN = 0,

  /**
   * Moving-window layout mode. Only the layout information within the viewport is considered, and there is no
   * dependency on the flow items above the viewport. Therefore, when jumping backward or switching the number of
   * columns, only the flow items within the viewport need to be laid out. It is recommended to use this mode
   * preferentially, especially in scenarios where the app needs to support screen rotation or dynamically switch the
   * number of columns.
   *
   * **NOTE**
   *
   *  1. When jumping to a distant position without animation, flow items are laid out forward or backward
   *     based on the target position. After that, if you slide back to the position before the jump,
   *     the layout effect of the content may be inconsistent with the previous one.
   *     This effect may cause the top nodes to be misaligned when sliding back to the top after the jump.
   *  2. When the **SLIDING_WINDOW** layout mode is used and [WaterFlowSections]{@link WaterFlowSections}
   *     groups are set, after the scrolling animation ends, if the viewport contains the start position of a group
   *     and it is detected that the column or row start position of the group within the viewport is not aligned,
   *     or the start **FlowItem** of the group is inconsistent with the group start index,
   *     **WaterFlow** recalculates the layout to correct the group content position.
   *  3. When the **SLIDING_WINDOW** layout mode is used and [backToTop]{@link ScrollableCommonMethod<T>#backToTop}
   *     is called to return to the top, if the top is still not reached after the return-to-top animation ends,
   *     **WaterFlow** performs a top correction without animation to realign the content to the start position.
   *  4. The total offset returned by the [currentOffset]{@link Scroller#currentOffset}
   *     or [offset]{@link Scroller#offset} API of [scroller]{@link WaterFlowOptions}
   *     is inaccurate after a jump or data update is triggered, and is recalibrated when sliding back to the top.
   *     Since API version 23, the offset API is added.
   *  5. If a jump (such as [scrollToIndex]{@link Scroller#scrollToIndex} or [scrollEdge]{@link Scroller#scrollEdge}
   *     without animation) and an input offset (such as a sliding gesture or scrolling animation) are called
   *     within the same frame, both take effect.
   *  6. When [scrollToIndex]{@link Scroller#scrollToIndex} without animation is called to jump,
   *     if the jump is to a distant position (a position exceeding the number of flow items within the viewport),
   *     the moving-window mode estimates the total offset.
   *  7. The scrollbar
   *     [scrollBar](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#scrollbar11)
   *     display is supported only in API version 18 and later. In earlier versions,
   *     the scrollbar is not displayed even if it is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SLIDING_WINDOW = 1,
}

/**
 * Provides parameters of the **WaterFlow** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface WaterFlowOptions {
  /**
   * Footer component of the **WaterFlow** component, which is used to display custom content (such as loading
   * prompts and bottom icons) at the end of the waterfall. If this parameter is not set, no footer component is
   * displayed.
   * <br/>**NOTE**
   * <br/>1. For details about the usage, see [Example 1](#example-1-using-a-basic-waterflow-component).
   * <br/>2. When both **footer** and **footerContent** are set, the component set by **footerContent** takes precedence.
   * <br/>3. When group mixing layout is used, footer cannot be set separately.
   *     You can use the last group as the footer component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  footer?: CustomBuilder;

  /**
   * Footer component content of **WaterFlow**.
   * <br/>This parameter has a higher priority than **footer**. That is, when both **footer** and **footerContent**
   *     are set, the component set by **footerContent** takes precedence. When **footerContent** is not set,
   *     footer can still be used to set the footer component. When group mixing layout is used,
   *     the footer component cannot be set separately. You can use the last group as the footer component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  footerContent?: ComponentContent;

  /**
   * Controller of the scrollable component, bound to the scrollable component.
   * When not set, no external controller is bound, and the component manages scrolling by itself.
   * <br/>**NOTE**
   * <br/>1. It is not allowed to bind the same scroll controller to other scrollable components
   *     such as [ArcList](ts-container-arclist.md), [List](ts-container-list.md),
   *     [Grid](ts-container-grid.md), [Scroll](ts-container-scroll.md), and [WaterFlow](ts-container-waterflow.md).
   * <br/>2. When the [SLIDING_WINDOW](#waterflowlayoutmode12) layout mode is used,
   *     the total offset returned by [currentOffset](ts-container-scroll.md#currentoffset) or
   *     [offset](ts-container-scroll.md#offset23) of scroller is inaccurate after a jump or data update is triggered,
   *     and is recalibrated when scrolling back to the top.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  scroller?: Scroller;

  /**
   * **FlowItem** groups to implement mixed layout with different numbers of columns for different groups
   *     within the same **WaterFlow** component. Suitable for scenarios where different numbers of columns
   *     are required in different areas. When not set, a unified number of columns is used for layout.
   * <br/>**NOTE**
   * <br/>1. When group mixing layout is used, the [columnsTemplate](#columnstemplate)
   *     and [rowsTemplate](#rowstemplate) attributes are ignored.
   * <br/>2. When group mixing layout is used, **footer** cannot be set separately.
   *     You can use the last group as the footer component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  sections?: WaterFlowSections;

  /**
   * Layout mode of **WaterFlow**. Select a more suitable mode based on the usage scenario.
   *     **ALWAYS_TOP_DOWN** is suitable for scenarios with a fixed number of columns;
   *     **SLIDING_WINDOW** is suitable for scenarios such as dynamic number of columns,
   *     large data volume, and screen rotation.
   * <br/>**NOTE**<br/>Default value: [ALWAYS_TOP_DOWN](#waterflowlayoutmode12).
   *
   * @default ALWAYS_TOP_DOWN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  layoutMode?: WaterFlowLayoutMode;
}

/**
 * Represents the return value of the
 * [getEvent('WaterFlow')]{@link ../../../arkui/FrameNode:typeNode.getEvent(node: FrameNode, nodeType: 'WaterFlow')}
 * method in **frameNode**, which can be used to set scroll events for a **WaterFlow** node.
 *
 * **UIWaterFlowEvent** inherits from [UIScrollableCommonEvent]{@link UIScrollableCommonEvent}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare interface UIWaterFlowEvent extends UIScrollableCommonEvent {
  /**
   * Sets the callback for the
   * [onWillScroll](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#onwillscroll12) event.
   *
   * If the input parameter is **undefined**, the event callback is reset.
   *
   * @param { OnWillScrollCallback | undefined } callback - Callback for the **onWillScroll** event.
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
   * > **NOTE**
   * >
   * > **setOnWillScroll** is used to set the callback before each frame starts scrolling, and **setOnDidScroll** is
   * > used to set the callback after each frame finishes scrolling. The two can be used at the same time, and the
   * > callback of **setOnWillScroll** is triggered before that of **setOnDidScroll**.
   * > If the input parameter is **undefined**, the event callback is reset.
   *
   * @param { OnScrollCallback | undefined } callback - Callback for the **onDidScroll** event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setOnDidScroll(callback: OnScrollCallback | undefined): void;

  /**
   * Sets the callback of the [onScrollIndex]{@link WaterFlowAttribute#onScrollIndex} event.
   *
   * If the input parameter is **undefined**, the event callback is reset.
   *
   * @param { OnWaterFlowScrollIndexCallback | undefined } callback - Callback for the **onScrollIndex** event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setOnScrollIndex(callback: OnWaterFlowScrollIndexCallback | undefined): void;
}

/**
 * Represents a callback for item changes in the visible area of the **WaterFlow** component.
 *
 * @param {number} first - Index of the start position of the currently displayed WaterFlow.<br/>Normal value range:
 *     [0, total child components - 1]. When the list is empty, special values apply. For details, see
 *     [onScrollIndex]{@link WaterFlowAttribute#onScrollIndex}.
 * @param {number} last - Index of the end position of the currently displayed WaterFlow.<br/>Normal value range:
 *     [0, total child components - 1]. When the list is empty, special values apply. For details, see
 *     [onScrollIndex]{@link WaterFlowAttribute#onScrollIndex}.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare type OnWaterFlowScrollIndexCallback = (first: number, last: number) => void;

/**
 * The **WaterFlow** component is a waterfall flow container that consists of cells formed by rows and columns and
 * arranges items of different sizes from top to bottom according to the preset rules. It supports multi-column layout,
 * group mixing layout, lazy loading, auto calculation of the number of columns, and edge fading, and is suitable for
 * scenarios such as image galleries, product displays, and content feeds that need to display content of different
 * sizes.
 *
 * > **NOTE**
 * >
 * > The **WaterFlow** component supports displaying the waterfall flow layout, but does not support the editing mode or
 * > child element dragging.
 * >
 * > The component has built-in gestures for functions such as scroll-following. To add custom gesture operations, refer
 * > to [Gesture Blocking Enhancement]{@link ./common}.
 * >
 * > For more development instructions on **WaterFlow**, see
 * > [Creating a Waterfall Flow (WaterFlow)](docroot://ui/arkts-layout-development-create-waterflow.md). For NDK
 * > development, see [Implementing a Waterfall Flow Layout](docroot://ui/ndk-waterflow.md). For C APIs, see
 * > [ArkUI_NodeAttributeType (Scrollable Container Component Attribute)](docroot://reference/apis-arkui/capi-native-node-h-nodeattributetype-scrollablecontainer.md)
 * > and
 * > [ArkUI_WaterFlowSectionOption](docroot://reference/apis-arkui/capi-arkui-nativemodule-arkui-waterflowsectionoption.md).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
interface WaterFlowInterface {

  /**
   * Creates a **WaterFlow** component.
   *
   * @param { WaterFlowOptions } options - Parameters of the **WaterFlow** component, used to set the scroll controller,
   *     footer component, groups, and layout mode.
   * @returns { WaterFlowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  (options?: WaterFlowOptions): WaterFlowAttribute;
}

/**
 * In addition to [universal attributes]{@link ./common} and
 * [universal attributes of scrollable components](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#attributes),
 * the following attributes are supported:
 *
 * In addition to [universal events]{@link ./common} and
 * [scrollable component common events](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#events),
 * the following events are also supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare class WaterFlowAttribute extends ScrollableCommonMethod<WaterFlowAttribute> {
  /**
   * Sets the number of columns in the layout of the current **WaterFlow** component. If this attribute is not set, one
   * column is used by default. When [layoutDirection]{@link WaterFlowAttribute#layoutDirection} is set to horizontal
   * layout (**FlexDirection.Row** or **FlexDirection.RowReverse**), **columnsTemplate** does not take effect, and the
   * layout is controlled by [rowsTemplate]{@link WaterFlowAttribute#rowsTemplate}. When
   * [sections]{@link WaterFlowOptions} is used for group mixing layout, this attribute is ignored.
   *
   * For example, **'1fr 1fr 2fr'** indicates three columns, with the first column taking up 1/4 of the parent component
   * 's full width, the second column 1/4, and the third column 2/4.
   *
   * You can use **columnsTemplate('repeat(auto-fill,track-size)')** to automatically calculate the number of columns
   * based on the specified column width **track-size**. **repeat** and **auto-fill** are keywords. The units for
   * **track-size** can be px, vp (default), %, or a valid number. For details, see
   * [Example 2](docroot://reference/apis-arkui/arkui-ts/ts-container-waterflow.md#example-2-implementing-automatic-column-count-calculation).
   *
   * @param { string } value - Number of columns in the layout.
   *     <br>Default value: **'1fr'**
   * @returns { WaterFlowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  columnsTemplate(value: string): WaterFlowAttribute;
  /**
   * Sets the number of columns in the layout of the current **WaterFlow** component. If this attribute is not set, one
   * column is used by default. When [layoutDirection]{@link WaterFlowAttribute#layoutDirection} is set to horizontal
   * layout (**FlexDirection.Row** or **FlexDirection.RowReverse**), **columnsTemplate** does not take effect, and the
   * layout is controlled by [rowsTemplate]{@link WaterFlowAttribute#rowsTemplate}. When
   * [sections]{@link WaterFlowOptions} is used for group mixing layout, this attribute is ignored.
   *
   * When the value is of the string type, refer to
   * [columnsTemplate(value: string)]{@link WaterFlowAttribute#columnsTemplate(value: string)} for the usage.
   *
   * When the value is of the **ItemFillPolicy** type, the number of columns is determined based on the
   * [breakpoint type](docroot://ui/arkts-layout-development-grid-layout.md#breakpoints) corresponding to the width of
   * the **WaterFlow** component.
   *
   * For example, when the **fillType** attribute of **ItemFillPolicy** is set to **PresetFillType.BREAKPOINT_DEFAULT**,
   * two columns are displayed when the component width falls within the **sm** and smaller breakpoint ranges, three
   * columns are displayed within the **md** breakpoint range, and five columns are displayed within the **lg** and
   * larger breakpoint ranges, with each column being 1fr.
   *
   * @param { string | ItemFillPolicy } value - Number of columns in the current **WaterFlow** component layout. When
   *     **value** is of the **ItemFillPolicy** type, the number of columns is automatically determined based on the
   *     breakpoint type corresponding to the **WaterFlow** component width.
   * @returns { WaterFlowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  columnsTemplate(value: string | ItemFillPolicy): WaterFlowAttribute;
  /**
   * Sets the constraint size, which is used to limit the size range of child components during layout. For details
   * about how to use this API, see
   * [Example 1](docroot://reference/apis-arkui/arkui-ts/ts-container-waterflow.md#example-1-using-a-basic-waterflow-component).
   *
   * @param { ConstraintSizeOptions } value - Constraint size. If a value less than 0 is set, the parameter does not
   *     take effect. <br/>**NOTE**<br/>1. When both **itemConstraintSize** and the
   *     [constraintSize]{@link CommonMethod#constraintSize} attribute of **FlowItem** are set, the maximum value is
   *     used for **minWidth** or **minHeight**, and the minimum value is used for **maxWidth** or **maxHeight**.
   *     The adjusted values are then processed as the **constraintSize** of **FlowItem**.
   *     <br/>2. When only **itemConstraintSize** is set, it is equivalent to setting the same **constraintSize**
   *     for all child components of **WaterFlow**.
   *     <br/>3. After **itemConstraintSize** is converted to the **constraintSize** of **FlowItem**
   *     in either of the two ways above, the effective rules are the same as those of the universal attribute
   *     [constraintSize]{@link CommonMethod#constraintSize}.
   * @returns { WaterFlowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  itemConstraintSize(value: ConstraintSizeOptions): WaterFlowAttribute;

  /**
   * Sets the number of rows in the layout of the current **WaterFlow** component. If this attribute is not set, one row
   * is used by default. When [layoutDirection]{@link WaterFlowAttribute#layoutDirection} is set to vertical layout (
   * **FlexDirection.Column** or **FlexDirection.ColumnReverse**) or is not set, **rowsTemplate** does not take effect,
   * and the layout is controlled by [columnsTemplate]{@link WaterFlowAttribute#columnsTemplate(value: string)}. When
   * [sections]{@link WaterFlowOptions} is used for group mixing layout, this attribute is ignored.
   *
   * For example, **'1fr 1fr 2fr'** indicates three rows, with the first row taking up 1/4 of the parent component's
   * full height, the second row 1/4, and the third row 2/4.
   *
   * You can use **rowsTemplate('repeat(auto-fill,track-size)')** to automatically calculate the number of rows based on
   * the specified row height **track-size**. **repeat** and **auto-fill** are keywords. The units for **track-size**
   * can be px, vp (default), %, or a valid number.
   *
   * @param { string } value - Number of rows in the layout.
   *     <br>Default value: **'1fr'**
   * @returns { WaterFlowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  rowsTemplate(value: string): WaterFlowAttribute;

  /**
   * Sets the gap between columns. When group layout is used, each group can set the column gap separately through
   * **SectionOptions.columnsGap** to override this value.
   *
   * @param { Length } value - Gap between columns. <br/>Default value: **0**<br/>Unit: vp<br/>Value range:
   *     [0, +∞). Values less than 0 are treated as 0.
   * @returns { WaterFlowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  columnsGap(value: Length): WaterFlowAttribute;

  /**
   * Sets the gap between rows. When group layout is used, each group can set the row gap separately through
   * **SectionOptions.rowsGap** to override this value.
   *
   * @param { Length } value - Gap between rows. <br/>Default value: 0<br/>Unit: vp<br/>Value range:
   *     [0, +∞). Values less than 0 are treated as 0.
   * @returns { WaterFlowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  rowsGap(value: Length): WaterFlowAttribute;

  /**
   * Sets the main axis direction of the layout.
   *
   * @param { FlexDirection } value - Main axis direction of the layout.
   *     <br>Default value: **FlexDirection.Column**
   * @returns { WaterFlowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  layoutDirection(value: FlexDirection): WaterFlowAttribute;

  /**
   * Sets the nested scrolling mode in the forward and backward directions to implement scrolling linkage with the
   * parent component. For details, see
   * [Example 3: Implementing Nested Scrolling (Method 2)](docroot://reference/apis-arkui/arkui-ts/ts-container-scroll.md#example-3-implementing-nested-scrolling-method-2).
   *
   * @param { NestedScrollOptions } value - Nested scroll options, used to set the nested scrolling mode in both forward
   *     and backward directions to implement scrolling linkage with the parent component.
   * @returns { WaterFlowAttribute } the attribute of the water flow.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  nestedScroll(value: NestedScrollOptions): WaterFlowAttribute;

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
   * @returns { WaterFlowAttribute } The attribute of the waterflow
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableScrollInteraction(value: boolean): WaterFlowAttribute;

  /**
   * Sets the friction coefficient. It takes effect when the scroll area is manually scrolled, affects only the inertial
   * scrolling process, and has an indirect effect on the linkage effect of inertia being transferred to the parent
   * component during nested scrolling. It is suitable for scenarios where the sliding inertia effect of the waterfall
   * flow needs to be adjusted.
   *
   * @param { number | Resource } value - Friction coefficient.
   *     <br>Default value: **0.9** for wearable devices and **0.6** for non-wearable devices.
   *     <br>Since API version 11, the default value for non-wearable devices is **0.7**.
   *     <br>Since API version 12, the default value for non-wearable devices is **0.75**.
   *     <br>Value range: (0, +∞).
   *     <br>If the value is less than or equal to 0, the default value is used.
   * @returns { WaterFlowAttribute } the attribute of the water flow.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  friction(value: number | Resource): WaterFlowAttribute;

  /**
   * Number of items to be preloaded.
   *
   * This attribute takes effect only in
   * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md) and
   * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md) with
   * [virtualScroll]{@link RepeatAttribute#virtualScroll} enabled. **FlowItem** components that are outside the display
   * and cache range will be released.
   *
   * @param { number } value - Number of water flow items to be preloaded (cached).
   *     <br>Default value: number of nodes visible on the screen, with the maximum value of 16
   *     <br>Value range: [0, +∞).
   *     <br>Values less than 0 are treated as **1**.
   * @returns { WaterFlowAttribute } the attribute of the water flow.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  cachedCount(value: number): WaterFlowAttribute;

  /**
   * Sets the number of flow items to be cached (preloaded) and specifies whether to display the preloaded nodes.
   *
   * This attribute can be combined with the [clip]{@link CommonMethod#clip(value: boolean)} or
   * [clipContent](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#clipcontent14) attributes
   * to display the preloaded nodes.
   *
   * This parameter takes effect only when used with
   * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md) or the
   * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md) component that has virtualScroll
   * enabled. **FlowItem** elements outside the visible area and cache range will be released.
   *
   * @param { number } count - Number of water flow items to be preloaded (cached).
   *     <br>Default value: number of nodes visible on the screen, with the maximum value of 16
   *     <br>Value range: [0, +∞).
   *     <br>Values less than 0 are treated as **1**.
   * @param { boolean } show - Whether to display the cached water flow items. If this parameter is set to **true**, the
   *     preloaded flow items are displayed. If this parameter is set to **false**, the preloaded flow items are not
   *     displayed.
   *     <br> Default value: **false**.
   * @returns { WaterFlowAttribute } the attribute of the water flow.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  cachedCount(count: number, show: boolean): WaterFlowAttribute;

  /**
   * Sets whether to synchronously load all child components in the **WaterFlow** component.
   *
   * @param { boolean } enable - Whether to synchronously load all child components in the **WaterFlow** component.
   *     <br>**true**: synchronous loading; false: asynchronous loading
   *     <br>Default value: **true**
   *     <br>**NOTE**
   *     <br>When this parameter is set to **false**, in the first display or
   *     [scrollToIndex]{@link Scroller#scrollToIndex} jumps without animation, if the time consumed by the frame layout
   *     exceeds 50 ms, the child components that have not been laid out in the **WaterFlow** component are delayed to
   *     the next frame for layout.
   * @returns { WaterFlowAttribute } The attribute of the water flow.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  syncLoad(enable: boolean): WaterFlowAttribute;

  /**
   * Defines whether the **WaterFlow** component supports the generation of empty branch nodes that do not contain any
   * child components using the **if/else** rendering control syntax in **LazyForEach** or **Repeat**. If this attribute
   * is not set, empty branch nodes are not supported. This attribute cannot be updated after being set. Therefore, you
   * cannot switch between the behavior of supporting empty branches and the behavior of not supporting empty branches
   * after setting this attribute.
   *
   * > **NOTE**
   * >
   * > When [WaterFlowSections]{@link WaterFlowOptions} groups are set through the [sections]{@link WaterFlowSections}
   * > parameter, or the [SLIDING_WINDOW]{@link WaterFlowOptions} layout mode is set through
   * > [layoutMode]{@link WaterFlowLayoutMode}, the **FlowItem** components after an empty branch are displayed
   * > regardless of the value of **supportEmptyBranchInLazyLoading** or whether it is set.
   *
   * @param { boolean | undefined } supported - Whether the current **WaterFlow** component supports using the
   *     [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) rendering control syntax in
   *     [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md) or
   *     [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md) to generate an empty branch node
   *     that contains no child components.
   *     <br>The value **true** indicates that the FlowItem after the empty branch is displayed, and **false** indicates
   *     that it is not displayed.
   *     <br>If the value is undefined, it is processed as **false**.
   * @returns { WaterFlowAttribute } the attribute of the WaterFlow.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  supportEmptyBranchInLazyLoading(supported: boolean | undefined): WaterFlowAttribute;

  /**
   * Triggered when the **WaterFlow** content reaches the start position.
   *
   * @param { function } event - Callback triggered when the **WaterFlow** content reaches the start position.
   * @returns { WaterFlowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onReachStart(event: () => void): WaterFlowAttribute;

  /**
   * Triggered when the **WaterFlow** content reaches the end position.
   *
   * @param { function } event - Callback triggered when the **WaterFlow** content reaches the end position.
   * @returns { WaterFlowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onReachEnd(event: () => void): WaterFlowAttribute;

  /**
   * When this API is called back, the event parameter carries the amount of scrolling that is about to occur. The event
   * handler can calculate the actual amount of scrolling required based on the app scenario and return that value. The
   * waterfall flow scrolls according to the returned actual amount. It is suitable for scenarios where custom scrolling
   * behavior is required, such as adjusting the amount of scrolling per frame proportionally or blocking the scrolling
   * of the current frame under specific conditions.
   *
   * This event is triggered when either of the following conditions is met:
   *
   * 1. Scrolling is initiated by user interaction (for example, finger swipe, keyboard, or mouse operation).
   * 2. The **WaterFlow** component scrolls by inertia.
   * 3. Scrolling is triggered by calling the [fling]{@link Scroller#fling} API.
   *
   * This event is not triggered in the following scenarios:
   *
   * 1. A scroll control API other than [fling]{@link Scroller#fling} is called.
   * 2. The out-of-bounds bounce effect is active.
   * 3. The scrollbar is dragged.
   *
   * @param { function } event - Callback triggered when each frame scrolling starts. [since 10 - 19]
   * @param { OnScrollFrameBeginCallback } event - Callback triggered when each frame scrolling starts. [since 20]
   * @returns { WaterFlowAttribute } the attribute of the water flow.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onScrollFrameBegin(event: OnScrollFrameBeginCallback): WaterFlowAttribute;

  /**
   * Triggered when the first or last item displayed in the component changes. It is triggered once when the component
   * is initialized.
   *
   * This event is triggered when either of the preceding indexes changes.
   *
   * > **NOTE**
   * >
   * > This API can be called in [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { function } event - Callback function, triggered when the first or last item
   *     displayed in the waterflow changes.
   *     "first": the index of the first item displayed in the waterflow,
   *     "last": the index of the last item displayed in the waterflow.
   * @returns { WaterFlowAttribute } the attribute of the water flow.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onScrollIndex(event: (first: number, last: number) => void): WaterFlowAttribute;
}

/**
 * The **WaterFlow** component is a waterfall flow container that consists of cells formed by rows and columns and
 * arranges items of different sizes from top to bottom according to the preset rules. It supports multi-column layout,
 * group mixing layout, lazy loading, auto calculation of the number of columns, and edge fading, and is suitable for
 * scenarios such as image galleries, product displays, and content feeds that need to display content of different
 * sizes.
 *
 * > **NOTE**
 * >
 * > The **WaterFlow** component supports displaying the waterfall flow layout, but does not support the editing mode or
 * > child element dragging.
 * >
 * > The component has built-in gestures for functions such as scroll-following. To add custom gesture operations, refer
 * > to [Gesture Blocking Enhancement]{@link ./common}.
 * >
 * > For more development instructions on **WaterFlow**, see
 * > [Creating a Waterfall Flow (WaterFlow)](docroot://ui/arkts-layout-development-create-waterflow.md). For NDK
 * > development, see [Implementing a Waterfall Flow Layout](docroot://ui/ndk-waterflow.md). For C APIs, see
 * > [ArkUI_NodeAttributeType (Scrollable Container Component Attribute)](docroot://reference/apis-arkui/capi-native-node-h-nodeattributetype-scrollablecontainer.md)
 * > and
 * > [ArkUI_WaterFlowSectionOption](docroot://reference/apis-arkui/capi-arkui-nativemodule-arkui-waterflowsectionoption.md).
 *
 * ###### Child Components
 *
 * Only the [FlowItem]{@link ./flow_item} child component and custom components are supported. When a custom component
 * is used in **WaterFlow**, you are advised to use **FlowItem** as the top-level component of the custom component. You
 * are not advised to set attributes and event methods for the custom component.
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
 * > When the **visibility** attribute of a **WaterFlow** child component is set to **None**, the child component is not
 * > displayed, but the **columnsGap**, **rowsGap**, and **margin** around it still take effect.
 * > > When a large number of child components are involved, it is recommended to use methods such as lazy loading, data
 * > caching, component reuse, fixed width and height, and layout optimization to improve performance and reduce memory
 * > usage. For best practices, see
 * > [Optimizing Frame Loss for Waterfall Loading](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-waterflow-performance-optimization).
 * >
 * > In vertical layout, **WaterFlow** calculates the accumulated height of the placed child components in each column
 * > and places a new child component in the column with the smallest accumulated height to keep the overall layout
 * > compact.
 * >
 * > When the main axis size of a **FlowItem** changes after it is displayed, **WaterFlow** clears the affected layout
 * > information and recalculates the layout positions of the related **FlowItem** components from the changed position
 * > or the start position of the current window according to the current [layoutMode]{@link WaterFlowLayoutMode}.
 * > Because the waterfall flow places the **FlowItem** components that rejoin the layout into the column or row with
 * > the smallest current accumulated main axis size, the columns or rows and offsets of these **FlowItem** components
 * > may change, which appears as position jumping. To reduce position jumping, it is recommended to keep the main axis
 * > size of **FlowItem** stable. For asynchronous content such as images, it is recommended to preset a fixed width and
 * > height or a placeholder size. When using group mixing layout, you can also provide a stable main axis size through
 * > the [GetItemMainSizeByIndex]{@link GetItemMainSizeByIndex} callback.
 * >
 * > When [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md) or
 * > [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md) is used to dynamically generate
 * > **FlowItem** components, if the data that affects the main axis size of **FlowItem** changes, the framework should
 * > be notified that the data has changed: in the **LazyForEach** scenario, call the corresponding method of
 * > [DataChangeListener]{@link DataChangeListener} (such as [onDataChange]{@link DataChangeListener.onDataChange},
 * > [onDataReloaded]{@link DataChangeListener.onDataReloaded()}, or
 * > [onDatasetChange]{@link DataChangeListener.onDatasetChange}); in the **Repeat** scenario, modify the state array
 * > according to the data update rules of
 * > [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md). Otherwise, old nodes or old caches
 * > may be reused, causing the displayed content and layout results to be inconsistent with the data.
 * >
 * > If multiple columns have the same height, the leftmost column is used first. In RTL mode, the rightmost column is
 * > used first.
 * >
 * > Since API version 21, the maximum width and height of a single **WaterFlow** child component is 16777216 px. In API
 * > version 20 and earlier, the maximum width and height of a single **WaterFlow** child component is 1000000 px. A
 * > child component exceeding this size may cause scrolling or display exceptions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare const WaterFlow: WaterFlowInterface;

/**
 * Defines WaterFlow Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare const WaterFlowInstance: WaterFlowAttribute;