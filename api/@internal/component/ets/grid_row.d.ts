/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * Describes the gutter sizes for different device width types.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface GridRowSizeOption {
  /**
   * Gutter of the grid child components on minimum-width type devices. Value range: a number or string greater than or
   * equal to 0.
   *
   * Default value: **0vp**
   *
   * Unit: vp
   *
   * Invalid value: handled as the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  xs?: Length,

  /**
   * Gutter of the grid child components on small-width type devices. Value range: a number or string greater than or
   * equal to 0.
   *
   * Default value: **0vp**
   *
   * Unit: vp
   *
   * Invalid value: handled as the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  sm?: Length,

  /**
   * Gutter of the grid child components on medium-width type devices. Value range: a number or string greater than or
   * equal to 0.
   *
   * Default value: **0vp**
   *
   * Unit: vp
   *
   * Invalid value: handled as the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  md?: Length,

  /**
   * Gutter of the grid child components on large-width type devices. Value range: a number or string greater than or
   * equal to 0.
   *
   * Default value: **0vp**
   *
   * Unit: vp
   *
   * Invalid value: handled as the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  lg?: Length,

  /**
   * Gutter of the grid child components on extra-large-width type devices. Value range: a number or string greater than
   * or equal to 0.
   *
   * Default value: **0vp**
   *
   * Unit: vp
   *
   * Invalid value: handled as the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  xl?: Length,

  /**
   * Gutter of the grid child components on extra-extra-large-width type devices. Value range: a number or string
   * greater than or equal to 0.
   *
   * Default value: **0vp**
   *
   * Unit: vp
   *
   * Invalid value: handled as the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  xxl?: Length,
}

/**
 * Describes the grid column number configuration for different device width types.
 * 
 * Before API Version 20, if only partial breakpoints are set for **GridRow**'s grid column count, unconfigured
 * breakpoints inherit the column count from the nearest smaller configured breakpoint (for instance, **sm** is the
 * nearest smaller breakpoint of **md**). If no such smaller breakpoint is configured, the default grid column count 12
 * is used as a fallback.
 *
 * <!--code_no_check-->
 *
 * ```ts
 * columns: {xs:2, md:4, lg:8} // Equivalent to columns: {xs:2, sm:2, md:4, lg:8, xl:8, xxl:8}.
 * columns: {md:4, lg:8} // Equivalent to columns: {xs:12, sm:12, md:4, lg:8, xl:8, xxl:8}.
 * ```
 *
 * Since API version 20, if only partial breakpoints are set for **GridRow**'s grid column count, unconfigured
 * breakpoints inherit the column count from the nearest smaller configured breakpoint. If no smaller configured
 * breakpoint is available, the value from the nearest larger configured breakpoint is used as a fallback.
 *
 * <!--code_no_check-->
 *
 * ```ts
 * columns: {xs:2, md:4, lg:8} // Equivalent to columns: {xs:2, sm:2, md:4, lg:8, xl:8, xxl:8}.
 * columns: {md:4, lg:8} // Equivalent to columns: {xs:4, sm:4, md:4, lg:8, xl:8, xxl:8}.
 * ```
 *
 * Recommendation: Explicitly configure **GridRow** column spans for all required breakpoints to prevent unexpected
 * layout behavior caused by automatic value inheritance.
 * 
 * The width of each column is the content area size of the **GridRow** component minus the gutter of the grid child 
 * components, and then divided by the total number of columns. For example, if a **GridRow** with a width of 800 vp has
 * **columns** set to 12, **gutter** set to 10 vp, and **padding** set to 20 vp, the width of each column is (800 – 20 ×
 * 2 – 10 × 11)/12.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface GridRowColumnOption {
  /**
   * Number of grid columns of the grid container on a minimum-width device. The value is a positive integer.
   *
   * - Before API version 20: the default value is **12**.
   * - Since API version 20: the default value is **2**.
   *
   * If an invalid value is set, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  xs?: number,

  /**
   * Number of grid columns of the grid container on a small-width device. The value is a positive integer.
   *
   * - Before API version 20: the default value is **12**.
   * - Since API version 20: the default value is **4**.
   *
   * If an invalid value is set, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  sm?: number,

  /**
   * Number of grid columns of the grid container on a medium-width device. The value is a positive integer.
   *
   * - Before API version 20: the default value is **12**.
   * - Since API version 20: the default value is **8**.
   *
   * If an invalid value is set, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  md?: number,

  /**
   * Number of grid columns of the grid container on a large-width device. The value is a positive integer.
   *
   * - Before API version 20: the default value is **12**.
   * - Since API version 20: the default value is **12**.
   *
   * If an invalid value is set, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  lg?: number,

  /**
   * Number of grid columns of the grid container on an extra-large-width device. The value is a positive integer.
   *
   * - Before API version 20: the default value is **12**.
   * - Since API version 20: the default value is **12**.
   *
   * If an invalid value is set, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  xl?: number,

  /**
   * Number of grid columns of the grid container on an extra-extra-large-width device. The value is a positive integer.
   *
   * - Before API version 20: the default value is **12**.
   * - Since API version 20: the default value is **12**.
   *
   * If an invalid value is set, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  xxl?: number,
}

/**
 * Provides the gutter options for the grid layout to define the spacing between child components in different 
 * directions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface GutterOption {
  /**
   * Horizontal gutter between child components in the grid. Value range: a number or string greater than or equal to 0.
   *
   * Default value: **0vp**.
   *
   * Invalid value: the default value is used.
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  x?: Length | GridRowSizeOption,

  /**
   * Vertical gutter between child components in the grid. Value range: a number or string greater than or equal to 0.
   *
   * Default value: **0vp**.
   *
   * Invalid value: the default value is used.
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  y?: Length | GridRowSizeOption
}

/**
 * Breakpoint reference of the grid container component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum BreakpointsReference {
  /**
   * Uses the window as the reference. Breakpoint calculation is based on the app window size, suitable for scenarios
   * where responsive layout needs to adapt to overall window size changes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  WindowSize,

  /**
   * Uses the container as the reference. Breakpoint calculation is based on the size of the **GridRow** component
   * itself, suitable for scenarios where responsive layout needs to adapt to component container size changes, for
   * example, when **GridRow** is nested in another container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  ComponentSize,
}

/**
 * Grid element arrangement direction.
 * 
 * > **NOTE**
 * >
 * > - Grid elements can be arranged only in the **Row** or **RowReverse** direction, but not in the **Column** or 
 * > **ColumnReverse** direction.
 * >
 * > - The location and size of a grid child component can only be calculated through **span** and **offset**. When the
 * > **span** values of multiple child components exceed the specified number of columns, they automatically wrap to a
 * > new row.
 * >
 * > - When the **span** of a single element exceeds the maximum number of columns, the **span** is set to the maximum
 * > number of columns by default.
 * >
 * > - When the **offset** of a new row plus the **span** of the child component exceeds the total number of columns,
 * > the next child component is placed on a new row.
 * >
 * > - Example: Item1: GridCol({ span: 6 }), Item2: GridCol({ span: 8, offset:11 }).
 * >
 * > ![figures/gridRowOffsetToNextLine.png](docroot://reference/apis-arkui/arkui-ts/figures/gridRowOffsetToNextLine.png)
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum GridRowDirection {
  /**
   * Grid elements are arranged in the row direction. This is suitable for regular LTR (left-to-right) layout scenarios.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Row,

  /**
   * Grid elements are arranged in the reverse row direction. This is suitable for RTL (right-to-left) language layouts
   * or scenarios that require reverse arrangement.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  RowReverse,
}

/**
 * Sets breakpoints for the responsive grid container. For details about breakpoints, see 
 * [Breakpoints](docroot://ui/arkts-layout-development-grid-layout.md#breakpoints).
 *
 * <!--code_no_check-->
 *
 * ```ts
 * // Enable the xs, sm, and md breakpoints.
 * breakpoints: {value: ['100vp', '200vp']}
 * // Enable four breakpoints: xs, sm, md, and lg. The breakpoint range must be monotonically increasing.
 * breakpoints: {value: ['320vp', '600vp', '840vp']}
 * // Enable five breakpoints: xs, sm, md, lg, and xl. The count of breakpoint ranges must not be greater than
 * // the total number of configurable breakpoints minus one.
 * breakpoints: {value: ['320vp', '600vp', '840vp', '1080vp']}
 * ```
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface BreakPoints {
  /**
   * Monotonically increasing array of breakpoint positions. The string format is "number+vp", for example, "320vp" and
   * "600vp".
   * 
   * Default value: **["320vp", "600vp", "840vp"]**
   * 
   * Invalid value: The default value is used.
   * 
   * Unit: vp
   *
   * The default breakpoints apply to most scenarios. You can customize them for special screen sizes or specific layout
   * requirements.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  value?: Array<string>,

  /**
   * Reference object for breakpoint switching. The options are **WindowSize** (using the window as the reference) and
   * **ComponentSize** (using the container as the reference).
   * 
   * Default value: **BreakpointsReference.WindowSize**
   * 
   * Invalid value: The default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  reference?: BreakpointsReference,
}

/**
 * Defines layout options of the **GridRow** container.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface GridRowOptions {
  /**
   * Grid layout gutter.
   * 
   * Default value: **0vp**
   * 
   * Invalid value: The default value is used.
   * 
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  gutter?: Length | GutterOption;

  /**
   * Number of layout columns.
   * 
   * The value must be a positive integer.
   * 
   * - Before API version 20: The default value is **12**.
   * - Since API version 20: The default value is **{ xs: 2, sm: 4, md: 8, lg: 12, xl: 12, xxl: 12 }**.
   * 
   * Invalid value: The default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  columns?: number | GridRowColumnOption;

  /**
   * Used to set the monotonically increasing array of breakpoint positions, and the reference object for breakpoint
   * switching (based on the app window or container size).
   *
   * Default value: **{value: ["320vp", "600vp", "840vp"], reference: BreakpointsReference.WindowSize}**
   *
   * Invalid value: The default value is used.
   * 
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  breakpoints?: BreakPoints;

  /**
   * Grid layout arrangement direction. Supports **Row** (row-wise arrangement, suitable for conventional LTR layouts)
   * and **RowReverse** (reverse row-wise arrangement, suitable for RTL layouts or scenarios requiring reverse
   * arrangement).
   * 
   * Default value: **GridRowDirection.Row**
   * 
   * Invalid value: The default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  direction?: GridRowDirection;
}

/**
 * The responsive grid layout provides rules for layout design and resolves issues of dynamic layout across devices with
 * different sizes, thereby ensuring layout consistency across layouts on different devices.
 *
 * The **GridRow** component is used in a grid layout, together with its child component [GridCol]{@link ./grid_col}.
 *
 * It supports dynamically adjusting the number of columns and gutter sizes based on device sizes and breakpoints to
 * implement responsive layout.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop [since 11]
 */
interface GridRowInterface {
  /**
   * Defines a grid row layout container. It can only be used with grid child components in grid layout scenarios.
   *
   * @param { GridRowOptions } option - Layout options of the grid row layout container. This parameter is passed when
   *     you need to customize the grid layout (such as setting the number of columns, gutter, breakpoint positions, and
   *     arrangement direction). If not passed, the default configuration is used. **GridRow** must be used together
   *     with [GridCol]{@link ./grid_col} child components.
   * @returns { GridRowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  (option?: GridRowOptions): GridRowAttribute;
}

/**
 * In addition to the [universal attributes]{@link CommonMethod}, the following attributes are supported.
 *
 * In addition to the [universal events]{@link CommonMethod}, the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop [since 11]
 */
declare class GridRowAttribute extends CommonMethod<GridRowAttribute> {
  /**
   * Triggered when the breakpoint changes. The **breakpoints** parameter received by the callback indicates the current
   * breakpoint value (with possible values of **"xs"**, **"sm"**, **"md"**, **"lg"**, **"xl"**, and **"xxl"**). You can
   * perform corresponding UI layout adjustments or service logic processing based on the breakpoint value in the
   * callback.
   *
   * > **NOTE**
   * >
   * > - When [breakpointsreference]{@link BreakpointsReference} is set to **BreakpointsReference.ComponentSize**, do
   * > not dynamically modify the [padding]{@link CommonMethod#padding} or [margin]{@link CommonMethod#margin} attribute
   * > of the **GridRow** component in the **onBreakpointChange** callback. Otherwise, it may cause cyclic triggering of
   * > component size calculation, layout jitter, or rendering performance degradation.
   *
   * @param { function } callback - Callback invoked when the breakpoint changes. The parameter **breakpoints**
   *     indicates the current breakpoint value, which can be `"xs"`, `"sm"`, `"md"`, `"lg"`, `"xl"`, or `"xxl"`.
   * @returns { GridRowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onBreakpointChange(callback: (breakpoints: string) => void): GridRowAttribute;

  /**
   * Sets the alignment mode of **GridCol** within **GridRow** along the cross axis. The **GridCol** component can also
   * set its own alignment mode through **alignSelf([ItemAlign]{@link ItemAlign})**. When both alignment modes are set,
   * the setting of the **GridCol** component takes precedence.
   *
   * @param { ItemAlign } value - Alignment mode of **GridCol** within **GridRow** along the cross axis.
   *     <br>Default value: **ItemAlign.Start**
   *     <br>Invalid value: The default value is used.
   *     <br>**NOTE**
   *     <br>The supported **ItemAlign** values are: **ItemAlign.Start**, **ItemAlign.Center**, **ItemAlign.End**,
   *     **ItemAlign.Stretch**.
   * @returns { GridRowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  alignItems(value: ItemAlign): GridRowAttribute;
}

/**
 * The responsive grid layout provides rules for layout design and resolves issues of dynamic layout across devices with
 * different sizes, thereby ensuring layout consistency across layouts on different devices.
 *
 * The **GridRow** component is used in a grid layout, together with its child component [GridCol]{@link ./grid_col}.
 *
 * It supports dynamically adjusting the number of columns and gutter sizes based on device sizes and breakpoints to
 * implement responsive layout.
 *
 * ## Child Components
 *
 * This component can contain the **GridCol** child component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop [since 11]
 */
declare const GridRow: GridRowInterface;

/**
 * Defines GridRow Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop [since 11]
 */
declare const GridRowInstance: GridRowAttribute;
