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
 * Describes the numbers of grid columns occupied by the **GridCol** component on devices with different width types.
 *
 * - In versions earlier than API version 20: When you configure **GridCol** column spans only at specific breakpoints,
 * unconfigured breakpoints inherit values from the next smaller configured breakpoint. If no smaller breakpoint is
 * configured, the default value of **1** is used.

 *  <!--code_no_check-->

 *  ```ts
 *  span: {xs:2, md:4, lg:8} // Equivalent to span: {xs:2, sm:2, md:4, lg:8, xl:8, xxl:8}.
 *  span: {md:4, lg:8} // Equivalent to span: {xs:1, sm:1, md:4, lg:8, xl:8, xxl:8}.
 *  ```
 * - Since API version 20: When you configure **GridCol** column spans only at specific breakpoints, unconfigured
 * breakpoints inherit values from the next smaller configured breakpoint. If no smaller breakpoint exists, values are
 * inherited from the next larger configured breakpoint.

 *  <!--code_no_check-->

 *  ```ts
 *  span: {xs:2, md:4, lg:8} // Equivalent to span: {xs:2, sm:2, md:4, lg:8, xl:8, xxl:8}.
 *  span: {md:4, lg:8} // Equivalent to span: {xs:4, sm:4, md:4, lg:8, xl:8, xxl:8}.
 *  ```
 * - Recommendation: Explicitly configure **GridCol** column spans for all required breakpoints to prevent unexpected
 * layout behavior caused by automatic value inheritance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface GridColColumnOption {
  /**
   * Number of grid columns occupied by the grid child component on a minimum-width device. The value is a non-negative
   * integer. The default value is **1**. Illegal value: handled as the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  xs?: number,

  /**
   * Number of grid columns occupied by the grid child component on a small-width device. The value is a non-negative
   * integer. The default value is **1**. Illegal value: handled as the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  sm?: number,

  /**
   * Number of grid columns occupied by the grid child component on a medium-width device. The value is a non-negative
   * integer. The default value is **1**. Illegal value: handled as the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  md?: number,

  /**
   * Number of grid columns occupied by the grid child component on a large-width device. The value is a non-negative
   * integer. The default value is **1**. Illegal value: handled as the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  lg?: number,

  /**
   * Number of grid columns occupied by the grid child component on an extra-large-width device. The value is a non-
   * negative integer. The default value is **1**. Illegal value: handled as the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  xl?: number,

  /**
   * Number of grid columns occupied by the grid child component on an extra-extra-large-width device. The value is a
   * non-negative integer. The default value is **1**. Illegal value: handled as the default value.
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
 * Defines the options of the **GridCol** component.
 * 
 * The values of `span`, `offset`, and `order` attributes are inherited in the sequence of **xs**, **sm**, **md**, 
 * **lg**, **xl**, and **xxl**. If no value is set for a breakpoint, the value is obtained from the previous breakpoint.
 * 
 * Since API version 20, the inheritance rules for `span` are described in
 * [GridColColumnOption]{@link GridColColumnOption}, while the inheritance rules for `offset` and `order` remain
 * unchanged.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface GridColOptions {
  /**
   * Number of columns occupied by the grid child component in the grid container component. If span is set to **0**,
   * the element does not participate in layout calculation, that is, it is not rendered.
   * 
   * The value is a non-negative integer. The default value is **1**.
   * 
   * If an illegal value is set, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  span?: number | GridColColumnOption;

  /**
   * Number of columns by which the grid child component is offset from its original position. If offset is set to
   * **0**, no offset is applied.
   * 
   * The value is a non-negative integer. The default value is **0**.
   * 
   * If an illegal value is set, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  offset?: number | GridColColumnOption;

  /**
   * Sequence number of the element. Grid child components are sorted in ascending order based on their sequence
   * numbers.
   * 
   * The value is a non-negative integer. The default value is **0**.
   * 
   * If an illegal value is set, the default value is used.
   * 
   * **NOTE**
   * 
   * When child components do not have **order** set or have the same **order**, they are displayed in code order.
   * 
   * When some child components have **order** set and others do not, the child components without **order** are placed
   * first in sequence, and those with **order** are sorted in ascending order.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  order?: number | GridColColumnOption;
}

/**
 * A column component in the grid layout system. It must be used as a child component of the grid container component (
 * [GridRow]{@link ./grid_row}). It is suitable for responsive layout, multi-device adaptation, and other scenarios that
 * require dynamic column width adjustment. It supports responsive breakpoint configuration, cross-column layout,
 * offset, and sorting. Using the **GridCol** component enables quick implementation of responsive layouts, simplifying
 * multi-device adaptation development.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop [since 11]
 */
interface GridColInterface {
  /**
   * Defines a grid column layout component. After creation, it participates in the layout calculation of the grid
   * system as a child component of **GridRow**, based on the configured **span**, **offset**, and **order** attributes.
   *
   * @param { GridColOptions } option - Configuration options for the grid layout child component, which can be used to
   *     configure **span** (number of occupied columns), **offset** (number of offset columns), and **order** (sorting
   *     sequence). Pass this parameter when custom grid layout behavior is required (such as responsive column width,
   *     fixed offset position, and specified rendering order). This parameter can be omitted when the default grid
   *     layout is used. The default configuration is used when this parameter is not passed.
   * @returns { GridColAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  (option?: GridColOptions): GridColAttribute;
}

/**
 * In addition to the [universal attributes]{@link CommonMethod}, the following attributes are supported.
 *
 * The [universal events]{@link CommonMethod} are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop [since 11]
 */
declare class GridColAttribute extends CommonMethod<GridColAttribute> {
  /**
   * Sets the number of columns occupied by the grid child component. After the call is successful, the grid child
   * component occupies a grid area of the corresponding width based on the set column count. A span of **0** indicates
   * that the element does not participate in layout calculation, meaning it will not be rendered.
   *
   * @param { number | GridColColumnOption } value - Number of occupied columns. If **span** is **0**, the element does
   *     not participate in layout calculation and is not rendered.
   *     <br>The value is a non-negative integer, and the default value is **1**.
   *     <br>Illegal value: processed as the default value.
   *     <br>**Note:** This attribute has breakpoint inheritance. For details, see
   *     [GridColOptions]{@link GridColOptions}. Since API version 20, the default value inheritance rule has changed.
   *     For details, see [GridColColumnOption]{@link GridColColumnOption}.
   * @returns { GridColAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  span(value: number | GridColColumnOption): GridColAttribute;

  /**
   * Sets the number of columns by which the grid child component is offset relative to its original position.
   *
   * @param { number | GridColColumnOption } value - Number of columns offset relative to the original position. A value
   *     of **0** for **gridColOffset** indicates no offset.
   *     <br>The value is a non-negative integer, with a default value of **0**.
   *     <br>Illegal value: processed as the default value.
   *     <br>**Note:** This attribute has breakpoint inheritance. For details, see
   *     [GridColOptions]{@link GridColOptions}.
   * @returns { GridColAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  gridColOffset(value: number | GridColColumnOption): GridColAttribute;

  /**
   * Sets the display order of the grid child component. Grid child components are sorted in ascending order based on 
   * their sequence numbers.
   *
   * @param { number | GridColColumnOption } value - Element order number, sorted in ascending order based on the order
   *     numbers of grid child components.
   *     <br>The value is a non-negative integer. The default value is **0**.
   *     <br>Illegal value: handled as the default value.
   *     <br>**Note:** This attribute supports breakpoint inheritance. For details, see
   *     [GridColOptions]{@link GridColOptions}.
   * @returns { GridColAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  order(value: number | GridColColumnOption): GridColAttribute;
}

/**
 * A column component in the grid layout system. It must be used as a child component of the grid container component (
 * [GridRow]{@link ./grid_row}). It is suitable for responsive layout, multi-device adaptation, and other scenarios that
 * require dynamic column width adjustment. It supports responsive breakpoint configuration, cross-column layout,
 * offset, and sorting. Using the **GridCol** component enables quick implementation of responsive layouts, simplifying
 * multi-device adaptation development.
 *
 * ## Child Components
 *
 * This component can contain only one child component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop [since 11]
 */
declare const GridCol: GridColInterface;

/**
 * Defines GridCol Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop [since 11]
 */
declare const GridColInstance: GridColAttribute;
