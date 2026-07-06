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
   * Gutter size for minimum device width.
   * Unit: vp. Default value: **0vp**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  xs?: Length,

  /**
   * Gutter size for small device width.
   * Unit: vp. Default value: **0vp**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  sm?: Length,

  /**
   * Gutter size for medium device width.
   * Unit: vp. Default value: **0vp**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  md?: Length,

  /**
   * Gutter size for large device width.
   * Unit: vp. Default value: **0vp**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  lg?: Length,

  /**
   * Gutter size for extra large device width.
   * Unit: vp. Default value: **0vp**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  xl?: Length,

  /**
   * Gutter size for extra extra large device width.
   * Unit: vp. Default value: **0vp**.
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
 * Describes the numbers of grid columns for devices with different grid sizes.
 * 
 * In versions earlier than API version 20: When **GridRow** column spans are configured only at specific breakpoints, 
 * unconfigured breakpoints inherit values from the next smaller configured breakpoint. If no smaller breakpoint exists,
 * the default column count (12) is used for unconfigured breakpoints.
 * 
 * <!--code_no_check-->
 * 
 * Since API version 20: When **GridRow** column spans are configured only at specific breakpoints, unconfigured 
 * breakpoints inherit values from the next smaller configured breakpoint. If no smaller breakpoint exists, values are 
 * inherited from the next larger configured breakpoint.
 * 
 * <!--code_no_check-->
 * 
 * Recommendation: Explicitly configure **GridRow** column spans for all required breakpoints to prevent unexpected 
 * layout behavior caused by automatic value inheritance.
 * 
 * The width of each column is the content area size of the **GridRow** component minus the gutter of the grid child 
 * components, and then divided by the total number of columns. For example, if **columns** is set to **12**, **gutter**
 * is set to **10px**, and **padding** is set to **20px** for a **GridRow** component with a width of 800 px, the width 
 * of each column is (800 – 20 × 2 – 10 × 11)/12.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface GridRowColumnOption {
  /**
   * Number of grid columns on the device where the grid size is xs.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  xs?: number,

  /**
   * Number of grid columns on the device where the grid size is sm.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  sm?: number,

  /**
   * Number of grid columns on the device where the grid size is md.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  md?: number,

  /**
   * Number of grid columns on the device where the grid size is lg.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  lg?: number,

  /**
   * Number of grid columns on the device where the grid size is xl.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  xl?: number,

  /**
   * Number of grid columns on the device where the grid size is xxl.
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
   * Horizontal spacing between grid child components. 
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  x?: Length | GridRowSizeOption,

  /**
   * Vertical spacing between grid child components.
   * Unit: vp.
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
   * The window is used as a reference.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  WindowSize,

  /**
   * The container is used as a reference.
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
 * > - The location and size of a grid child component can be calculated only based on **span** and **offset**. If the 
 * > **span** values of child components add up to a number greater than the allowed number of columns, the grid will 
 * > automatically wrap lines.
 * >
 * > - If the **span** value of a single child component exceeds the maximum number of columns, the maximum number of 
 * > columns is used.
 * >
 * > - If a child component takes up more than the total number of columns according to its **offset** and **span** 
 * > settings, it will be placed in a new row.
 * >
 * > - Example: Item1: GridCol({ span: 6 }), Item2: GridCol({ span: 8, offset:11 })
 * > >
 * > > ![figures/gridRowOffsetToNextLine.png](docroot://reference/apis-arkui/arkui-ts/figures/gridRowOffsetToNextLine.png)
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum GridRowDirection {
  /**
   * Grid elements are arranged in the row direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Row,

  /**
   * Grid elements are arranged in the reverse row direction.
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface BreakPoints {
  /**
   * Array of monotonically increasing breakpoints.
   * 
   * Default value: **["320vp", "600vp", "840vp"]**
   * 
   * Invalid values are treated as the default value.
   * 
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  value?: Array<string>,

  /**
   * Breakpoint switching reference.
   * 
   * Default value: **BreakpointsReference.WindowSize**
   * 
   * Invalid values are treated as the default value.
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
   * Gutter of the grid layout.
   * 
   * Default value: **0**
   * 
   * Invalid values are treated as the default value.
   * 
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  gutter?: Length | GutterOption;

  /**
   * Number of columns in the grid layout.
   * 
   * The value is an integer greater than 0.
   * 
   * - Before API version 20: The default value is 12.
   * - API version 20 or later: The default value is { xs: 2, sm: 4, md: 8, lg: 12, xl: 12, xxl: 12 }.
   * 
   * Invalid values are treated as the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  columns?: number | GridRowColumnOption;

  /**
   * Array of breakpoint values and the corresponding reference based on the application window or container size.
   * 
   * Default value:
   *
   * ```
   * {
   *   value: ["320vp", "600vp", "840vp"],
   *   reference: BreakpointsReference.WindowSize
   * }
   * ```
   * 
   * Invalid values are treated as the default value.
   * 
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  breakpoints?: BreakPoints;

  /**
   * Arrangement direction of the grid layout.
   * 
   * Default value: **GridRowDirection.Row**
   * 
   * Invalid values are treated as the default value.
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
 * Defines the new version of grid-container component.
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
   * Creates a **GridRow** container.
   *
   * @param { GridRowOptions } option
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
   * Triggered when the breakpoint changes.
   *
   * > **NOTE**
   * > >
   * > When [breakpointsreference](#breakpointsreference) is set to **BreakpointsReference.ComponentSize**, you are not
   * > advised to dynamically change the [padding]{@link CommonMethod#padding} or [margin]{@link CommonMethod#margin}
   * > attribute value of the **GridRow** component in the **onBreakpointChange** callback.
   *
   * @param { function } callback - Breakpoint change. The value can be
   *     **"xs"**, **"sm"**, **"md"**, **"lg"**, **"xl"**, or **"xxl"**.
   * @returns { GridRowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onBreakpointChange(callback: (breakpoints: string) => void): GridRowAttribute;

  /**
   * Sets the alignment mode of the **GridCol** components along the vertical main axis of the **GridRow** component. 
   * The alignment mode of the **GridCol** component can also be set using **alignSelf(ItemAlign)**. If both of the
   * preceding methods are used, the setting of **alignSelf(ItemAlign)** prevails.
   *
   * @param { ItemAlign } value - Alignment mode of the **GridCol** components along the vertical main axis of the
   *     **GridRow** component.<br>Default value: **ItemAlign.Start**<br>Invalid values are treated as the default
   *     value.<br><br>**NOTE**<br>**ItemAlign** supports the following enums: **ItemAlign.Start**, **ItemAlign.Center**,
   *     **ItemAlign.End**, and **ItemAlign.Stretch**.
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
 * The **GridRow** component is used in a grid layout, together with its child component [GridCol]{@link GridCol}.
 * > **Child Components**
 * >
 * > This component can contain the **GridCol** child component.
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
