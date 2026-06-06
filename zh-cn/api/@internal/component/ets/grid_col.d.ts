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
 * 用于自定义指定在不同宽度设备类型上，栅格子组件占据的栅格数量单位。
 * 
 * - API version 20之前，仅配置部分断点下GridCol组件所占列数，取已配置的更小断点的列数补全未配置的列数。若未配置更小断点的列数，取默认值1。
 *  <!--code_no_check-->
 *  ```ts
 *  span: {xs:2, md:4, lg:8} // 等于配置 span: {xs:2, sm:2, md:4, lg:8, xl:8, xxl:8}
 *  span: {md:4, lg:8} // 等于配置 span: {xs:1, sm:1, md:4, lg:8, xl:8, xxl:8}
 *  ```
 * - API version 20及以后，仅配置部分断点下GridCol组件所占列数，取已配置的更小断点的列数补全未配置的列数。若未配置更小断点的列数，取已配置的更大断点的列数补全未配置的列数。
 *  <!--code_no_check-->
 *  ```ts
 *  span: {xs:2, md:4, lg:8} // 等于配置 span: {xs:2, sm:2, md:4, lg:8, xl:8, xxl:8}
 *  span: {md:4, lg:8} // 等于配置 span: {xs:4, sm:4, md:4, lg:8, xl:8, xxl:8}
 *  ```
 * - 建议手动配置不同断点下GridCol组件所占列数，避免默认补全列数的布局效果不符合预期。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface GridColColumnOption {
    /**
     * 在栅格大小为xs的设备上，栅格容器组件的栅格列数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    xs?: number,
  
    /**
     * 在栅格大小为sm的设备上，栅格容器组件的栅格列数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    sm?: number,
  
    /**
     * 在栅格大小为md的设备上，栅格容器组件的栅格列数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    md?: number,
  
    /**
     * 在栅格大小为lg的设备上，栅格容器组件的栅格列数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    lg?: number,
  
    /**
     * 在栅格大小为xl的设备上，栅格容器组件的栅格列数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    xl?: number,
  
    /**
     * 在栅格大小为xxl的设备上，栅格容器组件的栅格列数。
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
   * 设置栅格列布局组件布局选项。
   * 
   * `span`、`offset`、`order`属性按照`xs`、`sm`、`md`、`lg`、`xl`、`xxl`的顺序具有“继承性”，未设置值的断点将会从前一个断点取值。
   * 
   * API version 20之后，`span`的继承规则见[GridColColumnOption]{@link GridColColumnOption}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  declare interface GridColOptions {
    /**
     * 栅格子组件占用栅格容器组件的列数。span为0表示该元素不参与布局计算，即不会被渲染。
     * 
     * 取值为非负整数，默认值为1 
     * 
     * 非法值：按默认值处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    span?: number | GridColColumnOption;
  
    /**
     * 栅格子组件相对于原本位置偏移的列数。
     * 
     * 取值为非负整数，默认值为0 
     * 
     * 非法值：按默认值处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    offset?: number | GridColColumnOption;
  
    /**
     * 元素的序号，根据栅格子组件的序号，从小到大对栅格子组件做排序。
     * 
     * 取值为非负整数，默认值为0。
     * 
     * 非法值：按默认值处理。
     * 
     * **说明：**
     * 
     * 当子组件不设置order或者设置相同的order，子组件按照代码顺序展示。
     * 
     * 当子组件部分设置order，部分不设置order时，未设置order的子组件依次排序靠前，设置了order的子组件按照数值从小到大排列。
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
   * 栅格子组件，必须作为栅格容器组件([GridRow]{@link grid_row})的子组件使用。
   * 
   * > **说明：**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @noninterop
   * @since 9 dynamic
   */
  interface GridColInterface {
    /**
     * 栅格列布局组件。
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
   * 除支持[通用属性]{@link common}外，还支持以下属性：
   * 
   * 支持[通用事件]{@link common}。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @noninterop
   * @since 9 dynamic
   */
  declare class GridColAttribute extends CommonMethod<GridColAttribute> {
    /**
     * 设置占用列数。span为0，意味着该元素不参与布局计算，即不会被渲染。
     *
     * @param { number | GridColColumnOption } value - 占用列数。<br/>取值为非负整数，默认值为1。<br />非法值：按默认值处理。
     * @returns { GridColAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    span(value: number | GridColColumnOption): GridColAttribute;
  
    /**
     * 设置相对于前一个栅格子组件偏移的列数。
     *
     * @param { number | GridColColumnOption } value - 相对于前一个栅格子组件偏移的列数。<br/>取值为非负整数，默认值：0  <br />非法值：按默认值处理。
     * @returns { GridColAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    gridColOffset(value: number | GridColColumnOption): GridColAttribute;
  
    /**
     * 设置栅格子组件的序号，根据序号从小到大对栅格子组件进行排序。
     *
     * @param { number | GridColColumnOption } value - 元素的序号，根据栅格子组件的序号，从小到大对栅格子组件做排序。<br/>取值为非负整数，默认值：0  <br />非法值：按默认值处
     *     理。
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
   * 栅格子组件，必须作为栅格容器组件([GridRow]{@link grid_row})的子组件使用。
   * 
   * > **说明：**
   * 
   * ###### 子组件
   * 
   * 可以包含单个子组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @noninterop
   * @since 9 dynamic
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