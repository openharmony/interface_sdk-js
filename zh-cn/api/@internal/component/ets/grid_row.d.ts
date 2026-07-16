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
 * 栅格在不同宽度设备类型下，gutter的大小。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface GridRowSizeOption {
    /**
     * 在最小宽度类型设备上，栅格子组件的间距。
     * 
     * 默认值：0vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    xs?: Length,
  
    /**
     * 在小宽度类型设备上，栅格子组件的间距。
     * 
     * 默认值：0vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    sm?: Length,
  
    /**
     * 在中等宽度类型设备上，栅格子组件的间距。
     * 
     * 默认值：0vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    md?: Length,
  
    /**
     * 在大宽度类型设备上，栅格子组件的间距。
     * 
     * 默认值：0vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    lg?: Length,
  
    /**
     * 在特大宽度类型设备上，栅格子组件的间距。
     * 
     * 默认值：0vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    xl?: Length,
  
    /**
     * 在超大宽度类型设备上，栅格子组件的间距。
     * 
     * 默认值：0vp
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
   * 栅格在不同宽度设备类型下，栅格列数。
   * 
   * API version 20之前，仅配置部分断点下GridRow组件的栅格列数，取已配置的更小断点的栅格列数补全未配置的栅格列数。若未配置更小断点的栅格列数，以默认栅格列数12补全未配置的栅格列数。
   * 
   * <!--code_no_check-->
   * 
   * API version 20及以后，仅配置部分断点下GridRow组件的栅格列数，取已配置的更小断点的栅格列数补全未配置的栅格列数。若未配置更小断点的栅格列数，取已配置的更大断点的栅格列数补全未配置的栅格列数。
   * 
   * <!--code_no_check-->
   * 
   * 建议手动配置不同断点下GridRow组件的栅格列数，避免默认补全的栅格列数的布局效果不符合预期。
   * 
   * 每列栅格的宽度为GridRow的内容区大小减去栅格子组件的间距gutter，再除以总的栅格列数。比如，宽800px的GridRow设置columns为12，gutter设置为10px，padding设置为20px，那么每列栅格的宽度为
   * (800 - 20 * 2 - 10 * 11) / 12。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  declare interface GridRowColumnOption {
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
   * 栅格布局间距类型，用于描述栅格子组件不同方向的间距。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  declare interface GutterOption {
    /**
     * 栅格子组件水平方向间距。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    x?: Length | GridRowSizeOption,
  
    /**
     * 栅格子组件竖直方向间距。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    y?: Length | GridRowSizeOption;
  }
  
  /**
   * 设置栅格容器组件的断点参照物。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  declare enum BreakpointsReference {
    /**
     * 以窗口为参照。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    WindowSize = 0,
  
    /**
     * 以容器为参照。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    ComponentSize = 1
  }
  
  /**
   * 栅格元素排列方向。
   * 
   * > **说明：**
   * >
   * > - 栅格元素仅支持Row/RowReverse排列，不支持column/ColumnReverse方向排列。
   * >
   * > - 栅格子组件仅能通过span、offset计算子组件位置与大小。多个子组件span超过规定列数时自动换行。
   * >
   * > - 单个元素span大小超过最大列数时后台默认span为最大column数。
   * >
   * > - 新一行的Offset加上子组件的span超过总列数时，将下一个子组件在新的一行放置。
   * >
   * > - 例：Item1: GridCol({ span: 6 })， Item2: GridCol({ span: 8, offset:11 })。 
   * > >
   * > >   !
   * > [figures/gridRowOffsetToNextLine.png](docroot://reference/apis-arkui/arkui-ts/figures/gridRowOffsetToNextLine.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  declare enum GridRowDirection {
    /**
     * 栅格元素按照行方向排列。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    Row = 0,
  
    /**
     * 栅格元素按照逆序行方向排列。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    RowReverse = 1
  }
  
  /**
   * 设置栅格容器组件的断点。更多断点的说明参考[栅格容器断点](docroot://ui/arkts-layout-development-grid-layout.md#栅格容器断点)。
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
     * 设置断点位置的单调递增数组。
     * 
     * 默认值：["320vp", "600vp", "840vp"] 
     * 
     * 非法值：按默认值处理。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    value?: Array<string>,
  
    /**
     * 断点切换参照物。
     * 
     * 默认值：BreakpointsReference.WindowSize 
     * 
     * 非法值：按默认值处理。
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
   * 设置栅格行布局容器的布局选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  declare interface GridRowOptions {
    /**
     * 栅格布局间距。
     * 
     * 默认值：0 
     * 
     * 非法值：按默认值处理。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    gutter?: Length | GutterOption;
  
    /**
     * 设置布局列数。
     * 
     * 取值为大于0的整数。
     * 
     * - API version 20之前：默认值为12。
     * - API version 20及之后：默认值为{ xs: 2, sm: 4, md: 8, lg: 12, xl: 12, xxl: 12 } 
     * 
     * 非法值：按默认值处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    columns?: number | GridRowColumnOption;
  
    /**
     * 设置断点值的断点数组以及基于应用窗口或容器尺寸的相应参照。
     * 
     * 默认值：
     * 
     * {
     * 
     * value: ["320vp", "600vp", "840vp"],
     * 
     * reference: BreakpointsReference.WindowSize
     * 
     * } 
     * 
     * 非法值：按默认值处理。
     * 
     * 单位：vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    breakpoints?: BreakPoints;
  
    /**
     * 栅格布局排列方向。
     * 
     * 默认值：GridRowDirection.Row 
     * 
     * 非法值：按默认值处理。
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
   * 栅格布局可以为布局提供规律性的结构，解决多尺寸多设备的动态布局问题，保证不同设备上各个模块的布局一致性。
   * 
   * 栅格容器组件，仅可以和栅格子组件([GridCol]{@link grid_col})在栅格布局场景中使用。
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
  interface GridRowInterface {
    /**
     * 栅格行布局容器。
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
   * 除支持[通用属性]{@link common}外，还支持以下属性：
   * 
   * 除支持[通用事件]{@link common}外，还支持以下事件：
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @noninterop
   * @since 9 dynamic
   */
  declare class GridRowAttribute extends CommonMethod<GridRowAttribute> {
    /**
     * 断点发生变化时触发回调。
     * 
     * > **说明：**
     * >
     * > - 当[断点参照物]{@link BreakpointsReference}设置为BreakpointsReference.ComponentSize时，不建议在onBreakpointChange回调中动态修改GridRow
     * > 组件的[padding]{@link CommonMethod#padding}或[margin]{@link CommonMethod#margin}属性值。
     *
     * @param { function } callback - breakpoints取值为`"xs"`、`"sm"`、`"md"`、`"lg"`、`"xl"`、`"xxl"`。
     * @returns { GridRowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @form
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    onBreakpointChange(callback: (breakpoints: string) => void): GridRowAttribute;
  
    /**
     * 设置GridRow中的GridCol垂直主轴方向对齐方式。GridCol本身也可通过alignSelf([ItemAlign]{@link ItemAlign})设置自身对齐方式。当上述两种对齐方式都设置时，以GridCol自身设
     * 置为准。
     *
     * @param { ItemAlign } value - GridRow中的GridCol垂直主轴方向对齐方式。<br/>默认值：ItemAlign.Start <br />非法值：按默认值处理。<br/>**说明**：<br/>
     *     ItemAlign支持的枚举：ItemAlign.Start、ItemAlign.Center、ItemAlign.End、ItemAlign.Stretch。
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
   * 栅格布局可以为布局提供规律性的结构，解决多尺寸多设备的动态布局问题，保证不同设备上各个模块的布局一致性。
   * 
   * 栅格容器组件，仅可以和栅格子组件([GridCol]{@link grid_col})在栅格布局场景中使用。
   * 
   * > **说明：**
   * 
   * ###### 子组件
   * 
   * 可以包含GridCol子组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @noninterop
   * @since 9 dynamic
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