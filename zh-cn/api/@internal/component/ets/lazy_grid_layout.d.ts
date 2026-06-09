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
* 该组件用于实现支持懒加载的网格布局。
*
* API版本26.0.0之前，其父组件支持[WaterFlow]{@link water_flow}和[FlowItem]{@link flow_item}组件，并支持使用自定义组件或
* [NodeContainer]{@link node_container}组件封装后应用在WaterFlow或FlowItem中。
*
* 从API版本26.0.0开始，其父组件新增支持[List]{@link list}、[Scroll]{@link scroll}和
* [LazyColumnLayout](docroot://reference/apis-arkui/arkui-ts/ts-container-lazycolumnlayout.md)，同时新增支持使用自定义组件或
* [NodeContainer]{@link node_container}组件封装后应用在List、Scroll或LazyColumnLayout中。
*
* > **说明：**
* >
* > - 该组件从API version 19开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
* >
* > - 本模块接口仅可在Stage模型下使用。
* >
* > - LazyVGridLayout组件高度默认自适应内容，不建议设置高度、高度约束或宽高比，设置后会导致显示异常。
* >
* > - 该组件在不同父组件下的懒加载支持条件如下：
* > >   1. 在WaterFlow组件下，仅在WaterFlow组件的单列模式或分段布局中的单列分段，并且布局方向[FlexDirection]{@link FlexDirection}设置为
* > FlexDirection.Column的情况下支持懒加载。在WaterFlow的多列模式或布局方向为FlexDirection.Row或FlexDirection.RowReverse的情况下使用该组件，则不支持懒加载。此外，在
* > 布局方向为FlexDirection.ColumnReverse的WaterFlow组件下使用该组件会导致显示异常。
* > >   2. 在List组件下，要求List组件布局方向必须是竖直方向（即[listDirection]{@link ListAttribute#listDirection}属性设置为Axis.Vertical）。在非竖直方向的
* > List中使用该组件会导致应用崩溃。当List设置了lanes、chainAnimation、scrollSnapAlign属性中的任意一个时，该组件的懒加载功能会失效。
* > >   3. 在Scroll组件下，要求Scroll组件布局方向必须是竖直方向（即[scrollable]{@link ScrollAttribute#scrollable}属性设置为
* > ScrollDirection.Vertical）。在非竖直方向的Scroll中使用该组件会导致应用崩溃。
* >
* > - 当懒加载功能生效时，该组件仅加载父组件显示区域内的子组件，并在帧间空闲时隙预加载显示区域上方和下方各半屏的内容。
*
* ###### OnVisibleIndexesChangeCallback
*
* OnVisibleIndexesChangeCallback = (start: number, end: number) => void
*
* LazyVGridLayout可视区域内子组件的索引值发生变化时触发的回调类型。
*
* **起始版本：** 26.0.0
*
* **原子化服务API：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
*
* **模型约束：** 此接口仅可在Stage模型下使用。
*
* **系统能力：** SystemCapability.ArkUI.ArkUI.Full
*
* **参数：**
*
* | 参数名 | 类型   | 必填 | 说明                                  |
* | ------ | ------ | ---- | ------------------------------------- |
* | start  | number | 是  | 当前可视区域内子组件的起始索引。可视区域内无子组件或者LazyVGridLayout内无子组件时返回-1。 |
* | end  | number | 是  | 当前可视区域内子组件的结束索引。可视区域内无子组件或者LazyVGridLayout内无子组件时返回-1。 |
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
   * @param { LengthMetrics } value
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
   * @param { LengthMetrics } value
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
   * @param { CustomBuilder | undefined } builder - 头部组件构建函数。
   *     <br>传入undefined时移除头部组件。
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
   * 设置onVisibleIndexesChange回调函数。当LazyVGridLayout可视区域内子组件的索引值发生变化时触发回调，返回可视区域内子组件的起始索引值和结束索引值。使用callback异步回调。
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
declare class LazyVGridLayoutAttribute extends LazyGridLayoutAttribute<LazyVGridLayoutAttribute> {

  /**
   * 设置当前网格布局列的数量、固定列宽或最小列宽值，不设置时默认1列。
   *
   * 例如，'1fr&nbsp;1fr&nbsp;2fr'&nbsp;是将父组件分3列，将父组件允许的宽分为4等份，第一列占1份，第二列占1份，第三列占2份。
   *
   * columnsTemplate('repeat(auto-fit, track-size)')是设置最小列宽值为track-size，自动计算列数和实际列宽。
   *
   * columnsTemplate('repeat(auto-fill, track-size)')是设置固定列宽值为track-size，自动计算列数。
   *
   * columnsTemplate('repeat(auto-stretch, track-size)')是设置固定列宽值为track-size，使用columnsGap为最小列间距，自动计算列数和实际列间距。
   *
   * 其中repeat、auto-fit、auto-fill、auto-stretch为关键字。track-size为列宽，支持的单位包括px、vp、%或有效数字，默认单位为vp，track-size至少包含一个有效列宽。
   *
   * auto-fit模式和auto-stretch模式只支持track-size为一个有效列宽值，并且auto-stretch模式中的track-size只支持px、vp和有效数字，不支持%。auto-fill模式支持一个或多个有效列
   * 宽，如columnsTemplate('repeat(auto-fill, 20)')、columnsTemplate('repeat(auto-fill, 20 80px)')。
   *
   * 设置为'0fr'时，该列的列宽为0，不显示子组件。设置为其他非法值时，子组件显示为固定1列。
   *
   * @param { string } value - 当前网格布局列的数量或最小列宽值。
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
* 该组件用于实现支持懒加载的网格布局。
*
* API版本26.0.0之前，其父组件支持[WaterFlow]{@link water_flow}和[FlowItem]{@link flow_item}组件，并支持使用自定义组件或
* [NodeContainer]{@link node_container}组件封装后应用在WaterFlow或FlowItem中。
*
* 从API版本26.0.0开始，其父组件新增支持[List]{@link list}、[Scroll]{@link scroll}和
* [LazyColumnLayout](docroot://reference/apis-arkui/arkui-ts/ts-container-lazycolumnlayout.md)，同时新增支持使用自定义组件或
* [NodeContainer]{@link node_container}组件封装后应用在List、Scroll或LazyColumnLayout中。
*
* > **说明：**
* >
* > - 该组件从API version 19开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
* >
* > - 本模块接口仅可在Stage模型下使用。
* >
* > - LazyVGridLayout组件高度默认自适应内容，不建议设置高度、高度约束或宽高比，设置后会导致显示异常。
* >
* > - 该组件在不同父组件下的懒加载支持条件如下：
* > >   1. 在WaterFlow组件下，仅在WaterFlow组件的单列模式或分段布局中的单列分段，并且布局方向[FlexDirection]{@link FlexDirection}设置为
* > FlexDirection.Column的情况下支持懒加载。在WaterFlow的多列模式或布局方向为FlexDirection.Row或FlexDirection.RowReverse的情况下使用该组件，则不支持懒加载。此外，在
* > 布局方向为FlexDirection.ColumnReverse的WaterFlow组件下使用该组件会导致显示异常。
* > >   2. 在List组件下，要求List组件布局方向必须是竖直方向（即[listDirection]{@link ListAttribute#listDirection}属性设置为Axis.Vertical）。在非竖直方向的
* > List中使用该组件会导致应用崩溃。当List设置了lanes、chainAnimation、scrollSnapAlign属性中的任意一个时，该组件的懒加载功能会失效。
* > >   3. 在Scroll组件下，要求Scroll组件布局方向必须是竖直方向（即[scrollable]{@link ScrollAttribute#scrollable}属性设置为
* > ScrollDirection.Vertical）。在非竖直方向的Scroll中使用该组件会导致应用崩溃。
* >
* > - 当懒加载功能生效时，该组件仅加载父组件显示区域内的子组件，并在帧间空闲时隙预加载显示区域上方和下方各半屏的内容。
*
* ###### OnVisibleIndexesChangeCallback
*
* OnVisibleIndexesChangeCallback = (start: number, end: number) => void
*
* LazyVGridLayout可视区域内子组件的索引值发生变化时触发的回调类型。
*
* **起始版本：** 26.0.0
*
* **原子化服务API：** 从API版本26.0.0开始，该接口支持在原子化服务中使用。
*
* **模型约束：** 此接口仅可在Stage模型下使用。
*
* **系统能力：** SystemCapability.ArkUI.ArkUI.Full
*
* **参数：**
*
* | 参数名 | 类型   | 必填 | 说明                                  |
* | ------ | ------ | ---- | ------------------------------------- |
* | start  | number | 是  | 当前可视区域内子组件的起始索引。可视区域内无子组件或者LazyVGridLayout内无子组件时返回-1。 |
* | end  | number | 是  | 当前可视区域内子组件的结束索引。可视区域内无子组件或者LazyVGridLayout内无子组件时返回-1。 |
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