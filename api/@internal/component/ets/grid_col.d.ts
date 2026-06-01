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
 * Defines the options of the **GridCol** component.
 * 
 * The values of `span`, `offset`, and `order` attributes are inherited in the sequence of **xs**, **sm**, **md**, 
 * **lg**, **xl**, and **xxl**. If no value is set for a breakpoint, the value is obtained from the previous breakpoint.
 * 
 * Since API version 20, inheritance of the **span** property follows rules detailed in 
 * [GridColColumnOption]{@link GridColColumnOption}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface GridColOptions {
  /**
   * Number of columns occupied by the component. If it is set to **0**, the component is not involved in layout 
   * calculation, that is, the component is not rendered.
   * 
   * The value must be a non-negative integer. Default value: **1**.
   * 
   * Invalid values are treated as the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  span?: number | GridColColumnOption;

  /**
   * Number of offset columns relative to the original position of the component.
   * 
   * The value must be a non-negative integer. Default value: **0**.
   * 
   * Invalid values are treated as the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  offset?: number | GridColColumnOption;

  /**
   * Sequence number of the component. Child components of the grid are sorted in ascending order based on their 
   * sequence numbers.
   * 
   * The value must be a non-negative integer. Default value: **0**.
   * 
   * Invalid values are treated as the default value.
   * 
   * **NOTE**
   * 
   * If a child component shares an **order** value with another child component or does not have **order** set, it is 
   * displayed based on its code sequence number.
   * 
   * If **order** is not set for all child components, those that have **order** set are displayed after those that do 
   * not and are sorted in ascending order based on the value.
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
 * Defines the the new version of grid-container child component.
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
   * Creates a **GridCol** component.
   *
   * @param { GridColOptions } option
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
   * Sets the number of columns occupied by the component. If it is set to **0**, the element is not involved in layout 
   * calculation, that is, the element is not rendered.
   *
   * @param { number | GridColColumnOption } value - Number of occupied columns.<br>The value must be a non-negative
   *     integer. Default value: **1**.<br>Invalid values are treated as the default value.
   * @returns { GridColAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  span(value: number | GridColColumnOption): GridColAttribute;

  /**
   * Sets the number of offset columns relative to the original position of the component.
   *
   * @param { number | GridColColumnOption } value - Number of offset columns relative to the previous child component
   *     of the grid<br>The value must be a non-negative integer. Default value: **0**.<br>Invalid values are treated as
   *     the default value.
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
   * @param { number | GridColColumnOption } value - Sequence number of the component. Child components of the grid are
   *     sorted in ascending order based on their sequence numbers.<br>The value must be a non-negative integer. Default
   *     value: **0**.<br>Invalid values are treated as the default value.
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
 * The **GridCol** component must be used as a child component of the [GridRow]{@link GridRow} container.
 * > **Child Components**
 * >
 * > This component can contain only one child component.
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
