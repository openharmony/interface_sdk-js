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
 * @param { number } index - Index of the target water flow item.<br>Value range: [0, total number of child nodes - 1].
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
   * Number of **FlowItem** components in a section. The value must be a non-negative number. If the **splice**,
   * **push**, or **update** APIs receive a section whose **itemsCount** is set to a negative number, these APIs will
   * not be executed. Do not use a section whose **itemsCount** is **0**. Otherwise, the layout calculation may be
   * abnormal.
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
   * Callback used to obtain the main axis size, in vp, of the water flow item at a specified index during the layout
   * process of the **WaterFlow** component. For a vertical **WaterFlow** component, this size refers to the height, and
   * for a horizontal **WaterFlow** component, it refers to the width.
   *
   * **NOTE**
   *
   * 1. When both **onGetItemMainSizeByIndex** and the width or height attribute of **FlowItem** are used,
   * the main-axis size is determined by the return value of **onGetItemMainSizeByIndex**,
   * which will override the main-axis length of **FlowItem**.
   * 2. Using **onGetItemMainSizeByIndex** can improve the efficiency of jumping to a specific position
   * or index in the **WaterFlow** component. Avoid mixing the use of **onGetItemMainSizeByIndex** with sections
   * that do not have it set, as this can cause layout exceptions.
   * 3. If **onGetItemMainSizeByIndex** returns a negative number, the height of the water flow item is 0.
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
 * > After the section information is modified using **splice**, **push**, and **update**, ensure that the total number
 * > of child nodes in all sections matches the actual total number of child nodes in the **WaterFlow** component. Any
 * > failure to do so may result in layout issues that prevent the **WaterFlow** component from scrolling properly.
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
   * @param { number } start - Zero-based index at which the changing starts. The value is converted to an integer.<br>
   *     **NOTE**<br>1. A negative index counts back from the end of the section list.
   *     **start + WaterFlowSections.length()** is used.<br>2. If **start** < -**WaterFlowSections.length()**, **0** is
   *     used.<br>3. If **start** >= **WaterFlowSections.length()**, a new section is added at the end.
   * @param { number } [deleteCount] - Number of sections to be deleted from the position specified by **start**.<br>
   *     **NOTE**<br>1. If **deleteCount** is omitted, or if its value is greater than or equal to the number of
   *     sections from the position specified by **start** to the end of the **WaterFlowSections**, then all sections
   *     from the position specified by **start** to the end of the **WaterFlowSections** will be deleted.<br>2. If
   *     **deleteCount** is **0** or a negative number, no sections are deleted.
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
   * @param { SectionOptions } section - Sections to add to the end of the **WaterFlow** component.
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
   *     to an integer.<br>**NOTE**<br>1. A negative index counts back from the end of the section list.
   *     **sectionIndex + WaterFlowSections.length()** is used.<br>2. If **sectionIndex** < -
   *     **WaterFlowSections.length()**, **0** is used.<br>3. If **sectionIndex** >= **WaterFlowSections.length()**, a
   *     new section is added at the end.
   * @param { SectionOptions } section - New section configuration.
   * @returns { boolean } Returns whether the update is successful. If the value of **itemsCount** in any section to add
   *     is not a non-negative integer, **false** is returned.
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
   * items above the must be recalculated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  ALWAYS_TOP_DOWN = 0,

  /**
   * Sliding window mode. Only the layout information inside the viewport is considered, with no dependency on
   * **FlowItem** components above the viewport. Hence, when jumping forward or switching column counts, only the
   * **FlowItem** components within the viewport need to be laid out. This mode is recommended, especially when the
   * application needs to support screen rotation or dynamic column‑count switching.
   *
   * **NOTE**
   *
   * 1. During a non-animated redirection to a distant position, water flow items are laid out forward or backward based
   * on the target position. If the user then swipes back to the original position,
   * the layout of the content may differ from before.
   * This can lead to misalignment of the top nodes when a user swipes back to the top after the redirection.
   * To counteract this issue, in this layout mode,
   * the layout will be automatically adjusted after reaching the top of the viewport to ensure that the top is aligned.
   * If there are multiple sections, adjustments will be made to the sections within the viewport when sliding ends.
   * 2. The total offset returned by the [currentOffset]{@link Scroller#currentOffset}
   * or [offset]{@link Scroller#offset} API of [scroller]{@link WaterFlowOptions}
   * is inaccurate after the jump or data update is triggered.
   * The offset will be recalibrated when the user scrolls back to the top.
   * The offset API is added in API version 23 and later versions.
   * 3. If a jump action (for example, by calling [scrollToIndex]{@link Scroller#scrollToIndex}
   * without animation or [scrollEdge]{@link Scroller#scrollEdge})
   * and an input offset (such as from a swipe gesture or a scrolling animation)
   * are both initiated within the same frame, both will be executed.
   * 4. If the [scrollToIndex]{@link Scroller#scrollToIndex} API is called without animation
   * to jump to a distant position (beyond the range of visible water flow items in the window),
   * the total offset is calculated in the sliding window mode.
   * 5. The [scrollBar](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#scrollbar11)
   * is supported only in API version 18 and later. In earlier versions, the scrollbar will not be displayed.
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
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  footer?: CustomBuilder;

  /**
   * Footer of the **WaterFlow** component. This parameter has a higher priority than **footer**. If both
   * **footer** and **footerContent** are set, the component set by **footerContent** will be used.
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
   *
   * <p><strong>NOTE</strong>
   * <br>The scroller cannot be bound to other scrollable components, such as ArcList, List, Grid, Scroll, or WaterFlow.
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  scroller?: Scroller;

  /**
   * Water flow item sections, used to implement mixed layouts with different column counts for each section within
   * the same **WaterFlow** component. This is applicable to scenarios where different numbers of columns are
   * required in different areas. If this parameter is not set, the layout with the same number of columns is used.
   *
   * <p><strong>NOTE</strong>
   * <br>1. When <em>sections</em> is used, the <em>columnsTemplate</em> and <em>rowsTemplate</em> attributes
   * are ignored.
   * <br>2. When <em>sections</em> is used, the footer cannot be set separately.
   * The last section can function as the footer.
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  sections?: WaterFlowSections;

  /**
   * Layout mode of the <em>WaterFlow</em> component.
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
 * [getEvent('WaterFlow')]{@link FrameNode:typeNode.getEvent(node: FrameNode, nodeType: 'WaterFlow')} method in
 * **frameNode**, which can be used to set scroll events for a **WaterFlow** node.
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
   * If the input parameter is **undefined**, the event callback is reset.
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
   * Sets the callback of the
   * [onScrollIndex](docroot://reference/apis-arkui/arkui-ts/ts-container-waterflow.md#onscrollindex11) event.
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
 * @param {number} first - Index of the first item of the component.
 * @param {number} last - Index of the last item of the component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare type OnWaterFlowScrollIndexCallback = (first: number, last: number) => void;

/**
 * The **WaterFlow** component is a water flow container that consists of cells formed by rows and columns and arranges
 * items of different sizes from top to bottom according to the preset rules.
 *
 * > **NOTE**
 *
 * > The **WaterFlow** component supports the waterfall layout but does not support the edit mode or dragging of child
 * > elements.
 * >
 * > The component has been bound with gestures to implement functions such as following the finger. If you need to add
 * > custom gestures, refer to [Enhanced Gesture Interception]{@link common}.
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
   * @param { WaterFlowOptions } options - Parameters of the **WaterFlow** component.
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
 * In addition to [universal attributes]{@link common} and
 * [scrollable component common attributes](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#attributes),
 * the following attributes are also supported.
 *
 * In addition to [universal events]{@link common} and
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
   * Sets the number of columns in the layout. If this attribute is not set, one column is used by default.
   *
   * For example, **'1fr 1fr 2fr'** indicates three columns, with the first column taking up 1/4 of the parent component
   * 's full width, the second column 1/4, and the third column 2/4.
   *
   * You can use **columnsTemplate('repeat(auto-fill,track-size)')** to automatically calculate the number of columns
   * based on the specified column width **track-size**. **repeat** and **auto-fill** are keywords. The units for
   * **track-size** can be px, vp (default), %, or a valid number. For details, see
   * [Example 2](docroot://reference/apis-arkui/arkui-ts/ts-container-waterflow.md#example-2-implementing-automatic-column-count-calculation).
   *
   * @param { string } value - Number of columns in the layout.<br>Default value: **'1fr'**
   * @returns { WaterFlowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  columnsTemplate(value: string): WaterFlowAttribute;

  /**
   * Sets the number of columns in the layout. If this attribute is not set, one column is used by default.
   *
   * When the value is of the string type, refer to
   * [columnsTemplate(value: string)]{@link WaterFlowAttribute#columnsTemplate(value: string)} for the usage.
   *
   * When the value is of the **ItemFillPolicy** type, the number of columns is determined based on the
   * [breakpoint type](docroot://ui/arkts-layout-development-grid-layout.md#breakpoints) corresponding to the width of
   * the **WaterFlow** component.
   *
   * For example, the **ItemFillPolicy.BREAKPOINT_DEFAULT** component displays two columns when the component width
   * falls within the sm or smaller breakpoint range, three columns for the md breakpoint range, and five columns for
   * the lg or larger breakpoint range, with each column being 1 fr.
   *
   * @param { string | ItemFillPolicy } value - Number of columns in the layout.
   * @returns { WaterFlowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  columnsTemplate(value: string | ItemFillPolicy): WaterFlowAttribute;

  /**
   * Sets the size constraints of the child components during layout. For details about how to use this API, see
   * [Example 1](docroot://reference/apis-arkui/arkui-ts/ts-container-waterflow.md#example-1-using-a-basic-waterflow-component).
   *
   * @param { ConstraintSizeOptions } value - Size constraints of the child components during layout. If the value
   *     specified is less than **0**, this parameter does not take effect.<br>**NOTE**<br>1. If both
   *     **itemConstraintSize** and the [constraintSize]{@link CommonMethod#constraintSize} attribute of the
   *     **FlowItem** are set, the **minWidth** (or **minHeight**) will be the larger of the two values, and the
   *     **maxWidth** (or **maxHeight**) will be the smaller of the two values. The resulting values will then be used
   *     as the **constraintSize** for the **FlowItem**.<br>2. When only **itemConstraintSize** is set, it effectively
   *     applies a uniform size constraint to all child components in the **WaterFlow**.<br>3. The
   *     **itemConstraintSize** attribute, once converted to the **constraintSize** attribute of the **FlowItem**
   *     through the two methods mentioned above, follows the same rules for taking effect as the universal attribute
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
   * Sets the number of rows in the layout. If this attribute is not set, one row is used by default.
   *
   * For example, **'1fr 1fr 2fr'** indicates three rows, with the first row taking up 1/4 of the parent component's
   * full height, the second row 1/4, and the third row 2/4.
   *
   * You can use **rowsTemplate('repeat(auto-fill,track-size)')** to automatically calculate the number of rows based on
   * the specified row height **track-size**. **repeat** and **auto-fill** are keywords. The units for **track-size**
   * can be px, vp (default), %, or a valid number.
   *
   * @param { string } value - Number of rows in the layout.<br>Default value: **'1fr'**
   * @returns { WaterFlowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  rowsTemplate(value: string): WaterFlowAttribute;

  /**
   * Sets the gap between columns.
   *
   * @param { Length } value - Gap between columns.<br>Default value: **0**<br>Value range:
   *     [0, +∞). A value less than 0 evaluates to the value **0**.
   * @returns { WaterFlowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  columnsGap(value: Length): WaterFlowAttribute;

  /**
   * Sets the gap between rows.
   *
   * @param { Length } value - Gap between rows.<br>Default value: **0**<br>Value range:
   *     [0, +∞). A value less than 0 evaluates to the value **0**.
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
   * @param { FlexDirection } value - Main axis direction of the layout.<br>Default value: **FlexDirection.Column**
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
   * @param { NestedScrollOptions } value - Nested scrolling options.
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
   *     the scrolling APIs of the [Scroller]{@link Scroller}.<br>Default value: **true**
   * @returns { WaterFlowAttribute } The attribute of the waterflow
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableScrollInteraction(value: boolean): WaterFlowAttribute;

  /**
   * Sets the friction coefficient. It applies only to gestures in the scrolling area, and it affects only indirectly
   * the scroll chaining during the inertial scrolling process.
   *
   * @param { number | Resource } value - Friction coefficient.<br>Default value: **0.9** for wearable devices and
   *     **0.6** for non-wearable devices.<br>Since API version 11, the default value for non-wearable devices is
   *     **0.7**.<br>Since API version 12, the default value for non-wearable devices is **0.75**.<br>Value range: (0, +
   *     ∞).<br>If the value is less than or equal to 0, the default value is used.
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
   * @param { number } value - Number of water flow items to be preloaded (cached).<br>Default value: number of nodes
   *     visible on the screen, with the maximum value of 16<br>Value range:
   *     [0, +∞).<br>Values less than 0 are treated as **1**.
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
   * @param { number } count - Number of water flow items to be preloaded (cached).<br>Default value: number of nodes
   *     visible on the screen, with the maximum value of 16<br>Value range:
   *     [0, +∞).<br>Values less than 0 are treated as **1**.
   * @param { boolean } show - Whether to display the cached water flow items. If this parameter is set to **true**, the
   *     preloaded flow items are displayed. If this parameter is set to **false**, the preloaded flow items are not
   *     displayed.<br> Default value: **false**.
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
   * @param { boolean } enable - Whether to synchronously load all child components in the **WaterFlow** component.<br>
   *     **true**: synchronous loading; false: asynchronous loading<br>Default value: **true**<br>**NOTE**<br>When this
   *     parameter is set to **false**, in the first display or [scrollToIndex]{@link Scroller#scrollToIndex} jumps
   *     without animation, if the time consumed by the frame layout exceeds 50 ms, the child components that have not
   *     been laid out in the **WaterFlow** component are delayed to the next frame for layout.
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
   * > When [WaterFlowSections]{@link WaterFlowSections} is set using the [sections]{@link WaterFlowOptions} parameter,
   * > or when the [SLIDING_WINDOW]{@link WaterFlowLayoutMode} layout mode is set using the
   * > [layoutMode]{@link WaterFlowOptions} parameter, the **FlowItem** after the empty branch is displayed regardless
   * > of the **supportEmptyBranchInLazyLoading** setting.
   *
   * @param { boolean | undefined } supported - Whether the current **WaterFlow** component supports the use of the
   *     [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) rendering syntax in
   *     [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md) or
   *     [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md) to generate an empty branch node
   *     that contains no child component.<br>**true** indicates that the **FlowItem** after the empty branch is
   *     displayed; **false** indicates the opposite.<br>If the value is **undefined**, it is processed as **false**.
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
   * When this API is called back, the event parameter passes the scroll offset that is about to occur. The event
   * processing function can calculate the actually required scroll offset based on the application scenario and return
   * it as the return value. The **WaterFlow** component will then scroll according to this returned actual scroll
   * offset.
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
   * Triggered when the first or last item displayed in the component changes.
   * It is triggered once when the component is initialized.
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
 * The **WaterFlow** component is a water flow container that consists of cells formed by rows and columns and arranges
 * items of different sizes from top to bottom according to the preset rules.
 *
 * > **NOTE**
 *
 * > The **WaterFlow** component supports the waterfall layout but does not support the edit mode or dragging of child
 * > elements.
 * >
 * > The component has been bound with gestures to implement functions such as following the finger. If you need to add
 * > custom gestures, refer to [Enhanced Gesture Interception]{@link common}.
 *
 * ###### Child Components
 *
 * Only the [FlowItem]{@link flow_item} child component and custom components are supported. When a custom component is
 * used in **WaterFlow**, you are advised to use **FlowItem** as the top-level component of the custom component. You
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
 * > When the **visibility** attribute of a child component of **WaterFlow** is set to **None**, this child component is
 * > not displayed in the container, but its **columnsGap**, **rowsGap**, and **margin** settings are still effective.
 * > >  If there are a large number of child components, you are advised to adopt methods such as lazy loading, data
 * > caching, component reuse, fixed dimensions, and layout optimization to improve performance and reduce memory usage.
 * > For best practices, see
 * > [Optimizing Frame Loss for Waterfall Loading](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-waterflow-performance-optimization).
 * >
 * > In vertical layout mode, **WaterFlow** calculates the cumulative height of child components in each column and
 * > places new child components in the column with the smallest cumulative height to maintain a compact overall layout.
 * >
 * > If the heights of multiple columns are the same, the leftmost column is prioritized. In RTL mode, the rightmost
 * > column is prioritized.
 * >
 * > Starting from API version 21, the maximum width or height for a single child component inside a **WaterFlow**
 * > container is 16,777,216 px. In API version 20 and earlier versions, the limit was 1,000,000 px. If a child
 * > component exceeds the applicable size limit, scrolling or display behavior may become abnormal.
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