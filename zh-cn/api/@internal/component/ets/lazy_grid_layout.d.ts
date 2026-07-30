/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * 该组件用于实现支持懒加载的网格布局，适用于在滚动容器中按需渲染大量网格项的场景，可减少首帧渲染时间和内存开销。
 *
 * API版本26.0.0之前，其父组件支持[WaterFlow]{@link ./water_flow}和[FlowItem]{@link ./flow_item}组件，并支持使用自定义组件或
 * [NodeContainer]{@link ./node_container}组件封装后应用在WaterFlow或FlowItem中。
 *
 * 从API版本26.0.0开始，其父组件新增支持[List]{@link ./list}、[Scroll]{@link ./scroll}和
 * [LazyColumnLayout](docroot://reference/apis-arkui/arkui-ts/ts-container-lazycolumnlayout.md)，同时新增支持使用自定义组件或
 * [NodeContainer]{@link ./node_container}组件封装后应用在List、Scroll或LazyColumnLayout中。
 *
 * 更多关于懒加载布局的使用场景和完整示例，可参考[创建懒加载布局](docroot://ui/arkts-layout-development-create-lazy-layout.md)。
 *
 * > **说明：**
 * >
 * > - LazyVGridLayout组件高度默认自适应内容，不建议设置会固定或约束组件垂直方向尺寸的属性，设置后会导致显示异常或无法正常滚动。涉及的属性包括
 * > [height]{@link CommonMethod#height(value: Length)}、[size]{@link CommonMethod#size}中的height、
 * > [constraintSize]{@link CommonMethod#constraintSize}中的minHeight/maxHeight、
 * > [aspectRatio]{@link CommonMethod#aspectRatio}、[layoutWeight]{@link CommonMethod#layoutWeight}，以及
 * > [height]{@link CommonMethod#height(heightValue: Length | LayoutPolicy)}取[LayoutPolicy]{@link LayoutPolicy}值的场景。
 * >
 * > - 当父组件设置主轴方向尺寸时，LazyVGridLayout按照父组件可视区域进行懒加载；当父组件未设置主轴方向尺寸时，LazyVGridLayout会被内容撑开，导致所有子组件都会被加载布局。
 * >
 * > - 该组件在不同父组件下的懒加载支持条件如下：
 * >
 * > 1. 在WaterFlow组件下，仅在WaterFlow组件的单列模式或分段布局中的单列分段，并且布局方向[FlexDirection]{@link FlexDirection}设置为FlexDirection.Column的情况
 * > 下支持懒加载。在WaterFlow的多列模式或横向布局（FlexDirection.Row或FlexDirection.RowReverse）下使用该组件，则不支持懒加载。此外，在布局方向为
 * > FlexDirection.ColumnReverse的WaterFlow组件下使用该组件会导致显示异常。
 * >
 * > 2. 在List组件下，要求List组件布局方向必须是竖直方向（即[listDirection]{@link ListAttribute#listDirection}属性设置为Axis.Vertical）。在非竖直方向的List中
 * > 使用该组件会导致应用崩溃。当List设置了[lanes]{@link ListAttribute#lanes(value: number | LengthConstrain, gutter?: Dimension)}、
 * > [chainAnimation]{@link ListAttribute#chainAnimation}、[scrollSnapAlign]{@link ListAttribute#scrollSnapAlign}属性中的任意一个
 * > 或多个时，该组件的懒加载功能会失效。
 * >
 * > 3. 在Scroll组件下，要求Scroll组件布局方向必须是竖直方向（即[scrollable]{@link ScrollAttribute#scrollable}属性设置为ScrollDirection.Vertical）。在
 * > 非竖直方向的Scroll中使用该组件会导致应用崩溃。
 * >
 * > - 当懒加载功能生效时，该组件仅加载父组件可视区域内的子组件，并在帧间空闲时隙预加载可视区域上方和下方各半屏的内容。
 * >
 * > - 此处的父组件指最靠近当前组件的上层滚动组件，其他文档下的具体含义请参考对应内容。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 * @noninterop
 */
interface LazyVGridLayoutInterface {

  /**
   * 创建垂直方向懒加载网格布局容器。
   *
   * @returns { LazyVGridLayoutAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  (): LazyVGridLayoutAttribute;
}

/**
 * 除支持[通用属性]{@link common}外，还支持以下属性：
 *
 * 除支持[通用事件]{@link common}外，还支持以下事件：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 * @noninterop
 */
declare class LazyGridLayoutAttribute<T> extends CommonMethod<T> {

  /**
   * 设置行与行的间距。设置为小于0的值时，按默认值显示。
   *
   * @param { LengthMetrics } value - <br>行与行的间距。<br/>取值范围：[0, +∞)。
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  rowsGap(value: LengthMetrics): T;

  /**
   * 设置列与列的间距。设置为小于0的值时，按默认值显示。
   *
   * @param { LengthMetrics } value - 列与列的间距。<br/>取值范围：[0, +∞)。
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  columnsGap(value: LengthMetrics): T;

  /**
   * 设置LazyVGridLayout的头部组件。
   *
   * > **说明：**
   * >
   * > 头部组件位于容器顶部区域，通常用于展示标题、分组说明或其他固定在内容前方的元素。
   * >
   * > 当本组件随滚动容器滚动至可视区域内，且通过[sticky](#sticky)设置了header吸顶模式时，header会吸附在滚动容器可视区域顶部。
   *
   * @param { CustomBuilder | undefined } builder - 头部组件构造函数。<br/>方法入参为undefined时，当前LazyVGridLayout不设置头部组件，如果已有头部组件，也会被移除。
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  header(builder: CustomBuilder | undefined): T;

  /**
   * 设置LazyVGridLayout的尾部组件。
   *
   * @param { CustomBuilder | undefined } builder - 尾部组件构建函数。
   *     <br>传入undefined时移除尾部组件。
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  footer(builder: CustomBuilder | undefined): T;

  /**
   * 设置头部和尾部组件的吸顶吸底样式。
   *
   * @param { StickyStyle | undefined } sticky - 头部和尾部组件的吸顶吸底样式。
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  sticky(sticky: StickyStyle | undefined): T;

  /**
   * 设置onVisibleIndexesChange回调函数。当LazyVGridLayout可视区域内子组件的索引值发生变化时触发回调，返回可视区域内子组件的起始索引值和结束索引值。
   *
   * > **说明：**
   * >
   * >
   * 当父组件设置主轴方向尺寸时，LazyVGridLayout按照父组件可视区域进行懒加载。此时onVisibleIndexesChange回调中start返回当前可视区域起始位置子组件的索引值，end返回当前可视区域结束位置子组件的
   * 索引值。
   * >
   * > 当父组件未设置主轴方向尺寸时，LazyVGridLayout会被内容撑开，导致所有子组件都会被加载布局。此时onVisibleIndexesChange回调中start返回0，end返回数据源最后一个子组件的索引值。
   * >
   * > 此处的父组件指最靠近当前组件的上层滚动组件，其他文档下的具体含义请参考对应内容。
   *
   * @param { OnVisibleIndexesChangeCallback | undefined } callback - onVisibleIndexesChange事件的回调函数。
   *     传入undefined时取消监听。
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onVisibleIndexesChange(callback: OnVisibleIndexesChangeCallback | undefined): T;
}

/**
 * 除支持[通用属性]{@link ./common}外，还支持以下属性：
 *
 * 除支持[通用事件]{@link ./common}外，还支持以下事件：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 * @noninterop
 */
declare class LazyVGridLayoutAttribute extends LazyGridLayoutAttribute<LazyVGridLayoutAttribute> {

  /**
   * 设置当前网格布局列的数量、固定列宽或最小列宽值，不设置时默认1列。
   *
   * 例如，'1fr&nbsp;1fr&nbsp;2fr'&nbsp;表示将父组件分为3列，将父组件允许的宽度分为4等份，第一列占1份，第二列占1份，第三列占2份。
   *
   * columnsTemplate('repeat(auto-fit, track-size)')是设置最小列宽值为track-size，自动计算列数和实际列宽。
   *
   * columnsTemplate('repeat(auto-fill, track-size)')是设置固定列宽值为track-size，自动计算列数。
   *
   * columnsTemplate('repeat(auto-stretch, track-size)')是设置固定列宽值为track-size，使用
   * [columnsGap](docroot://reference/apis-arkui/arkui-ts/ts-container-lazyvgridlayout.md#columnsgap)作为最小列间距，自动计算列数和实际列间
   * 距。
   *
   * 其中repeat、auto-fit、auto-fill、auto-stretch为关键字。track-size为列宽，支持的单位包括px、vp、%或有效数字，默认单位为vp，track-size至少包括一个有效列宽。
   *
   * auto-fit模式和auto-stretch模式只支持track-size为一个有效列宽值，并且auto-stretch模式中的track-size只支持px、vp和有效数字，不支持%。auto-fill模式支持一个或多个有效列
   * 宽，如columnsTemplate('repeat(auto-fill, 20)')、columnsTemplate('repeat(auto-fill, 20 80px)')。
   *
   * 使用效果可以参考[示例3](docroot://reference/apis-arkui/arkui-ts/ts-container-lazyvgridlayout.md#示例3设置自适应列数)。
   *
   * 设置为'0fr'时，该列的列宽为0，不显示子组件。设置为其他非法值时，子组件显示为固定1列。
   *
   * @param { string } value - 当前网格布局列的数量、固定列宽或最小列宽值。
   * @returns { LazyVGridLayoutAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  columnsTemplate(value: string): LazyVGridLayoutAttribute;
}

/**
 * 该组件用于实现支持懒加载的网格布局，适用于在滚动容器中按需渲染大量网格项的场景，可减少首帧渲染时间和内存开销。
 *
 * API版本26.0.0之前，其父组件支持[WaterFlow]{@link ./water_flow}和[FlowItem]{@link ./flow_item}组件，并支持使用自定义组件或
 * [NodeContainer]{@link ./node_container}组件封装后应用在WaterFlow或FlowItem中。
 *
 * 从API版本26.0.0开始，其父组件新增支持[List]{@link ./list}、[Scroll]{@link ./scroll}和
 * [LazyColumnLayout](docroot://reference/apis-arkui/arkui-ts/ts-container-lazycolumnlayout.md)，同时新增支持使用自定义组件或
 * [NodeContainer]{@link ./node_container}组件封装后应用在List、Scroll或LazyColumnLayout中。
 *
 * 更多关于懒加载布局的使用场景和完整示例，可参考[创建懒加载布局](docroot://ui/arkts-layout-development-create-lazy-layout.md)。
 *
 * > **说明：**
 * >
 * > - LazyVGridLayout组件高度默认自适应内容，不建议设置会固定或约束组件垂直方向尺寸的属性，设置后会导致显示异常或无法正常滚动。涉及的属性包括
 * > [height]{@link CommonMethod#height(value: Length)}、[size]{@link CommonMethod#size}中的height、
 * > [constraintSize]{@link CommonMethod#constraintSize}中的minHeight/maxHeight、
 * > [aspectRatio]{@link CommonMethod#aspectRatio}、[layoutWeight]{@link CommonMethod#layoutWeight}，以及
 * > [height]{@link CommonMethod#height(heightValue: Length | LayoutPolicy)}取[LayoutPolicy]{@link LayoutPolicy}值的场景。
 * >
 * > - 当父组件设置主轴方向尺寸时，LazyVGridLayout按照父组件可视区域进行懒加载；当父组件未设置主轴方向尺寸时，LazyVGridLayout会被内容撑开，导致所有子组件都会被加载布局。
 * >
 * > - 该组件在不同父组件下的懒加载支持条件如下：
 * >
 * > 1. 在WaterFlow组件下，仅在WaterFlow组件的单列模式或分段布局中的单列分段，并且布局方向[FlexDirection]{@link FlexDirection}设置为FlexDirection.Column的情况
 * > 下支持懒加载。在WaterFlow的多列模式或横向布局（FlexDirection.Row或FlexDirection.RowReverse）下使用该组件，则不支持懒加载。此外，在布局方向为
 * > FlexDirection.ColumnReverse的WaterFlow组件下使用该组件会导致显示异常。
 * >
 * > 2. 在List组件下，要求List组件布局方向必须是竖直方向（即[listDirection]{@link ListAttribute#listDirection}属性设置为Axis.Vertical）。在非竖直方向的List中
 * > 使用该组件会导致应用崩溃。当List设置了[lanes]{@link ListAttribute#lanes(value: number | LengthConstrain, gutter?: Dimension)}、
 * > [chainAnimation]{@link ListAttribute#chainAnimation}、[scrollSnapAlign]{@link ListAttribute#scrollSnapAlign}属性中的任意一个
 * > 或多个时，该组件的懒加载功能会失效。
 * >
 * > 3. 在Scroll组件下，要求Scroll组件布局方向必须是竖直方向（即[scrollable]{@link ScrollAttribute#scrollable}属性设置为ScrollDirection.Vertical）。在
 * > 非竖直方向的Scroll中使用该组件会导致应用崩溃。
 * >
 * > - 当懒加载功能生效时，该组件仅加载父组件可视区域内的子组件，并在帧间空闲时隙预加载可视区域上方和下方各半屏的内容。
 * >
 * > - 此处的父组件指最靠近当前组件的上层滚动组件，其他文档下的具体含义请参考对应内容。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 * @noninterop
 */
declare const LazyVGridLayout: LazyVGridLayoutInterface;

/**
 * 定义垂直方向懒加载网格布局组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 * @noninterop
 */
declare const LazyVGridLayoutInstance: LazyVGridLayoutAttribute;