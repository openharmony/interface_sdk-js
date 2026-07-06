/*
 * Copyright (c) 2021-2026 Huawei Device Co., Ltd.
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
* 用于记录Grid页面内起始行的位置信息。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic
 */
declare interface StartLineInfo {

  /**
   * 目标索引或目标偏移量所在行的起始索引。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  startIndex: int;

  /**
   * startIndex对应的GridItem所在的起始行，一般为Grid视窗内的起始行，对于跨多行的GridItem需要找到该节点的起始行，可能在视窗外。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  startLine: int;

  /**
   * startIndex对应的GridItem的顶部与Grid顶部之间的偏移量。<br/>单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  startOffset: double;

  /**
   * 总滚动偏移量，即Grid中第一个GridItem的顶部与Grid顶部之间的偏移量。<br/>单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  totalOffset: double;
}

/**
 * 根据Grid的总偏移量，计算当前页面起始行的位置，用于快速滑动或反向滑动场景。
 *
 * @param { double } totalOffset - 总滚动偏移量，即Grid当中第一个GridItem的顶部与Grid顶部之间的偏移量。<br/>单位：vp
 * @returns { StartLineInfo }
 用于记录Grid页面内起始行的位置信息。
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic
 */
declare type OnGetStartIndexByOffsetCallback = (totalOffset: double) => StartLineInfo;

/**
* 根据指定的目标索引，计算Grid滚动到该位置时页面内对应的起始行，用于支持[scrollToIndex]{@link scroll:Scroller.scrollToIndex}等操作。
*
 * @param { int } targetIndex - 要滚动到的目标GridItem的索引。
 * @returns { StartLineInfo }
 用于记录Grid页面内起始行的位置信息。
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic
 */
declare type OnGetStartIndexByIndexCallback = (targetIndex: int) => StartLineInfo;

/**
* Grid布局选项。其中，irregularIndexes和onGetIrregularSizeByIndex可对仅设置rowsTemplate或columnsTemplate的Grid使用，可以指定一个index数组，并为其中的
* index对应的GridItem设置其占据的行数与列数，使用方法参见
* [示例3](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例3可滚动grid设置跨行跨列节点)；onGetRectByIndex可对同时设置
* rowsTemplate和columnsTemplate的Grid使用，为指定的index对应的GridItem设置位置和大小，使用方法参见
* [示例1](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例1固定行列grid)。
*
* 为提高Grid在包含大小不规则节点场景布局性能和准确性，可以使用onGetStartIndexByOffset和onGetStartIndexByIndex两个回调类型参数，两个回调必须同时
* 设置才能生效。该场景下，建议设置[onScrollBarUpdate](#onscrollbarupdate)来精准定位滚动条的位置。
*
* 为提高Grid在跳转、列数变化等场景的性能，应该尽量使用GridLayoutOptions。即使Grid中没有任何特殊的跨行跨列节点，也可以通过使用
* 'Grid(this.scroller, {regularSize: [1, 1]})'的方式提高跳转性能。参考<!--RP1-->
* [使用GridLayoutOptions提升Grid性能](docroot://performance/grid_optimization.md#使用gridlayoutoptions提升grid性能)<!--RP1End-->。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface GridLayoutOptions {

  /**
   * 大小规则的GridItem在Grid中占的行数和列数，只支持占1行1列即[1, 1]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  regularSize: [number, number];

  /**
   * 指定索引的GridItem在Grid中的大小是不规则的。当不设置onGetIrregularSizeByIndex时，irregularIndexes中
   * GridItem的默认大小为垂直滚动Grid的一整行或水平滚动Grid的一整列。
   *
   * @default number[] no irregular grid item
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  irregularIndexes?: number[];

  /**
   * Called to return the size of the irregular grid items with the specified index in [rows, columns].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onGetIrregularSizeByIndex?: (index: number) => [number, number];

  /**
   * Called to return the size of the grid items with the specified index in
   * [rowStart, columnStart, rowSpan, columnSpan].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onGetRectByIndex?: (index: number) => [number, number, number, number];

  /**
   * 根据Grid滚动的总偏移量，计算Grid当前页面起始行位置，用于快速滑动或反向滑动场景。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  onGetStartIndexByOffset?: OnGetStartIndexByOffsetCallback;

  /**
   * 根据指定的目标索引，计算Grid滚动到该位置时页面内的起始行，用于支持[scrollToIndex]{@link scroll:Scroller.scrollToIndex}等操作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  onGetStartIndexByIndex?: OnGetStartIndexByIndexCallback;
}

/**
* 网格容器，由“行”和“列”分割的单元格所组成，通过指定“项目”所在的单元格做出各种各样的布局。
*
* > **说明：**
*
* > 组件内部已绑定手势实现跟手滚动等功能，需要增加自定义手势操作时请参考[手势拦截增强]{@link common}进行处理。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface GridInterface {

  /**
   * 创建网格容器。
   *
   * @param { Scroller } scroller - 可滚动组件的控制器。用于与可滚动组件进行绑定。<br/>**说明：** <br/>不允许和其他滚动类组件，如：
   *     [ArcList]{@link @ohos.arkui.ArcList}、[List]{@link list}、[Grid]{@link grid}、[Scroll]{@link scroll}和
   *     [WaterFlow]{@link water_flow}绑定同一个滚动控制对象。
   * @param { GridLayoutOptions } layoutOptions - Grid布局选项。 [since 10]
   * @returns { GridAttribute } The attribute of the grid
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (scroller?: Scroller, layoutOptions?: GridLayoutOptions): GridAttribute;
}

/**
* 主轴布局方向枚举。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum GridDirection {

  /**
   * 主轴布局方向沿水平方向布局，即自左往右先填满一行，再去填下一行。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Row,

  /**
   * 主轴布局方向沿垂直方向布局，即自上往下先填满一列，再去填下一列。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Column,

  /**
   * 主轴布局方向沿水平方向反向布局，即自右往左先填满一行，再去填下一行。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  RowReverse,

  /**
   * 主轴布局方向沿垂直方向反向布局，即自下往上先填满一列，再去填下一列。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  ColumnReverse,
}

/**
* GridItem的对齐方式枚举。
*
* > **说明：**
* >
* > 1、只有可滚动的Grid中，设置STRETCH参数会生效，其他场景不生效。
*
* > 2、在Grid的一行中，如果每个GridItem都是大小规律的（只占一行一列），设置STRETCH参数会生效，存在跨行或跨列的GridItem的场景不生效。
*
* > 3、设置STRETCH后，只有不设置高度的GridItem才会以当前行中最高的GridItem作为自己的高度，设置过高度的GridItem高度不会变化。
*
* > 4、设置STRETCH后，Grid布局时会有额外的布局流程，可能会带来额外的性能开销。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum GridItemAlignment {

  /**
   * 使用Grid的默认对齐方式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DEFAULT = 0,

  /**
   * 以一行中的最高的GridItem作为其他GridItem的高度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  STRETCH = 1,
}

/**
* 滚动条位置和长度对象。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface ComputedBarAttribute {

  /**
   * Grid内容相对显示区域的总偏移，单位px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  totalOffset: number;

  /**
   * Grid内容总长度，单位px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  totalLength: number;
}

/**
* frameNode中[getEvent('Grid')]{@link FrameNode:typeNode.getEvent(node: FrameNode, nodeType: 'Grid')}方法的返回值，可用于给Grid节点设置
* 滚动事件。
*
* UIGridEvent继承于[UIScrollableCommonEvent]{@link UIScrollableCommonEvent}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare interface UIGridEvent extends UIScrollableCommonEvent {

  /**
   * 设置[onWillScroll](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#onwillscroll12)事件的回调。
   *
   * 方法入参为undefined时，会重置事件回调。
   *
   * @param { OnWillScrollCallback | undefined } callback - onWillScroll事件的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setOnWillScroll(callback: OnWillScrollCallback | undefined): void;

  /**
   * 设置[onDidScroll](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#ondidscroll12)事件的回调。
   *
   * 方法入参为undefined时，会重置事件回调。
   *
   * @param { OnScrollCallback | undefined } callback - onDidScroll事件的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setOnDidScroll(callback: OnScrollCallback | undefined): void;

  /**
   * 设置[onScrollIndex](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#onscrollindex)事件的回调。
   *
   * 方法入参为undefined时，会重置事件回调。
   *
   * @param { OnGridScrollIndexCallback | undefined } callback - onScrollIndex事件的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setOnScrollIndex(callback: OnGridScrollIndexCallback | undefined): void;
}

/**
* Grid组件可见区域item变化事件的回调类型。
*
 * @param {number} first - 当前显示的Grid起始位置的索引值。
 * @param {number} last - 当前显示的Grid终止位置的索引值。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare type OnGridScrollIndexCallback = (first: number, last: number) => void;

/**
* 除支持[通用属性]{@link common}和[滚动组件通用属性](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#属性)外，还支持以下属性：
* > **说明：**
* >
* > Grid组件使用通用属性[clip<sup>12+</sup>](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-sharp-clipping.md#clip12)和通用属性[clip<sup>18+</sup>](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-sharp-clipping.md#clip18)时默认值都为true。
* >
* > 设置Grid的padding后，如果子组件部分位于Grid内容区且部分位于padding区域内，则会显示；如果子组件完全位于padding区域内，则不会显示。如下图所示，GridItem1显示，而GridItem2不显示。
* >
* > ![GridPadding示意图](figures/gridPadding.png)
*
* 除支持[通用事件]{@link common}和[滚动组件通用事件](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#事件)外，还支持以下事件：
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class GridAttribute extends ScrollableCommonMethod<GridAttribute> {

  /**
   * 设置当前网格布局列的数量、固定列宽或最小列宽值，不设置时默认1列。
   *
   * 例如，&nbsp;'1fr&nbsp;1fr&nbsp;2fr'&nbsp;是将父组件分3列，将父组件允许的宽分为4等份，第1列占1份，第2列占1份，第3列占2份。
   *
   * columnsTemplate('repeat(auto-fit, track-size)')是设置最小列宽值为track-size，自动计算列数和实际列宽。
   *
   * columnsTemplate('repeat(auto-fill, track-size)')是设置固定列宽值为track-size，自动计算列数。
   *
   * columnsTemplate('repeat(auto-stretch, track-size)')是设置固定列宽值为track-size，使用columnsGap作为最小列间距，自动计算列数和实际列间距。
   *
   * 其中repeat、auto-fit、auto-fill、auto-stretch为关键字。track-size为列宽，支持的单位包括px、vp、%或有效数字，默认单位为vp，track-size至少包括一个有效列宽。
   *
   * auto-fit模式和auto-stretch模式只支持track-size为一个有效列宽值，并且auto-stretch模式中的track-size只支持px、vp和有效数字，不支持%。auto-fill模式支持一个或多个有效列
   * 宽，如columnsTemplate('repeat(auto-fill, 20)')、columnsTemplate('repeat(auto-fill, 20 80px)')。
   *
   * 使用效果可以参考[示例8](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例8设置自适应列数)。
   *
   * 设置为'0fr'时，该列的列宽为0，不显示GridItem。设置为其他非法值时，GridItem显示为固定1列。
   *
   * @param { string } value
   * @returns { GridAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  columnsTemplate(value: string): GridAttribute;

  /**
   * 设置当前网格组件布局列的数量，不设置时默认1列。
   *
   * 当value设置为string类型时，使用方法参考[columnsTemplate(value: string)]{@link GridAttribute#columnsTemplate(value: string)}。
   *
   * 当value设置为ItemFillPolicy类型时，将根据Grid组件宽度对应[断点类型](docroot://ui/arkts-layout-development-grid-layout.md#栅格容器断点)确定列数。
   *
   * 例如，ItemFillPolicy.BREAKPOINT_DEFAULT在组件宽度属于sm及更小的断点区间时显示2列，属于md断点区间时显示3列，属于lg及更大的断点区间时显示5列，且每列均为1fr。
   *
   * @param { string | ItemFillPolicy } value - 当前网格组件布局列的数量。
   * @returns { GridAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  columnsTemplate(value: string | ItemFillPolicy): GridAttribute;

  /**
   * 设置当前网格布局行的数量、固定行高或最小行高值，不设置时默认1行。
   *
   * 例如，&nbsp;'1fr&nbsp;1fr&nbsp;2fr'是将父组件分3行，将父组件允许的高分为4等份，第1行占1份，第2行占1份，第3行占2份。
   *
   * rowsTemplate('repeat(auto-fit, track-size)')是设置最小行高值为track-size，自动计算行数和实际行高。
   *
   * rowsTemplate('repeat(auto-fill, track-size)')是设置固定行高值为track-size，自动计算行数。
   *
   * rowsTemplate('repeat(auto-stretch, track-size)')是设置固定行高值为track-size，使用rowsGap为最小行间距，自动计算行数和实际行间距。
   *
   * 其中repeat、auto-fit、auto-fill、auto-stretch为关键字。track-size为行高，支持的单位包括px、vp、%或有效数字，默认单位为vp，track-size至少包括一个有效行高。
   *
   * auto-fit模式和auto-stretch模式只支持track-size为一个有效行高值，并且auto-stretch模式中的track-size只支持px、vp和有效数字，不支持%。auto-fill模式支持一个或多个有效行
   * 高，如rowsTemplate('repeat(auto-fill, 20)')、rowsTemplate('repeat(auto-fill, 20 80px)')。
   *
   * 设置为'0fr'，则这一行的行高为0，这一行GridItem不显示。设置为其他非法值，按固定1行处理。
   *
   * @param { string } value
   * @returns { GridAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  rowsTemplate(value: string): GridAttribute;

  /**
   * 设置列与列的间距。设置为小于0的值时，按默认值显示。
   *
   * @param { Length } value - 列与列的间距。<br/>默认值：0 <br/>取值范围：[0, +∞)
   * @returns { GridAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  columnsGap(value: Length): GridAttribute;

  /**
   * 设置行与行的间距。设置为小于0的值时，按默认值显示。
   *
   * @param { Length } value - 行与行的间距。<br/>默认值：0 <br/>取值范围：[0, +∞)
   * @returns { GridAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  rowsGap(value: Length): GridAttribute;

  /**
   * 设置滚动条的宽度，不支持百分比设置。宽度设置后，滚动条正常状态和按压状态宽度均为滚动条的宽度值。如果滚动条的宽度超过Grid组件主轴方向的高度，则滚动条的宽度会变为默认值。
   *
   * @param { number | string } value - 滚动条的宽度。<br/>默认值：4<br/>单位：vp<br/>取值范围：设置为小于0的值时，按默认值处理。设置为0时，不显示滚动条。
   * @returns { GridAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollBarWidth(value: number | string): GridAttribute;

  /**
   * 设置滚动条的宽度，不支持百分比设置。宽度设置后，滚动条正常状态和按压状态宽度均为滚动条的宽度值。如果滚动条的宽度超过Grid组件主轴方向的高度，则滚动条的宽度会变为4vp。支持Resource资源类型。
   *
   * 未通过该接口设置时，设置滚动条的宽度为4vp。
   *
   * @param { number | string | Resource } value - 滚动条的宽度。<br/>单位：vp<br/>取值范围：[0, +∞)。设置为小于0的值时，按4vp处理。设置为0时，不显示滚动条。
   * @returns { GridAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  scrollBarWidth(value: number | string | Resource): GridAttribute;

  /**
   * 设置滚动条的颜色。
   *
   * @param { Color | number | string } value - 滚动条的颜色。<br/>默认值：'#182431'（40%不透明度）<br/>number为HEX格式颜色，支持rgb或者argb，示例：0
   *     xffffff。<br/>string为rgb或者argb格式颜色，示例：'#ffffff'。
   * @returns { GridAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollBarColor(value: Color | number | string): GridAttribute;

  /**
   * 设置滚动条的颜色。与[scrollBarColor]{@link GridAttribute#scrollBarColor(value: Color | number | string)}相比， 参数名改为color，并开始支持
   * Resource类型。
   *
   * @param { Color | number | string | Resource } color - 滚动条的颜色。<br/>默认值：'#182431'（40%不透明度）<br/>number为HEX格式颜色，支持rgb或者
   *     argb，示例：0xffffff。string为rgb或者argb格式颜色，示例：'#ffffff'。
   * @returns { GridAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  scrollBarColor(color: Color | number | string | Resource): GridAttribute;

  /**
   * 设置滚动条状态。
   *
   * @param { BarState } value - 滚动条状态。<br/>默认值：BarState.Auto<br/>**说明：** <br/>API version 9及以下版本默认值为BarState.Off，API
   *     version 10及以上版本的默认值为BarState.Auto。
   * @returns { GridAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollBar(value: BarState): GridAttribute;

  /**
   * 在Grid每帧布局结束时触发，可通过该回调设置滚动条的位置及长度。
   *
   * 该接口只用作设置Grid的滚动条位置，不建议开发者在此接口中做业务逻辑处理。
   *
   * @param { function } event - 网格滚动回调，index为当前显示的网格起始位置的索引值，offset为当前显示的网格起始位置元素相对网格显示起始位置的偏移（单位vp），返回ComputedBarAttribute更新滚动条位置和高度。
   * @returns { GridAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onScrollBarUpdate(event: (index: number, offset: number) => ComputedBarAttribute): GridAttribute;

  /**
   * 当前网格显示的起始位置/终止位置的item发生变化时触发。网格初始化时会触发一次。Grid显示区域上第一个子组件/最后一个组件的索引值有变化就会触发。
   *
   * @param { function } event - 网格滚动回调，first为当前显示的网格起始位置的索引值，last为当前显示的网格终止位置的索引值。
   * @returns { GridAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onScrollIndex(event: (first: number, last: number) => void): GridAttribute;

  /**
   * 设置预加载的GridItem的数量，只在[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)和开启了
   * [virtualScroll]{@link RepeatAttribute#virtualScroll}开关的
   * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)中生效。<!--Del-->具体使用可参考
   * [减少应用白块说明](docroot://performance/arkts-performance-improvement-recommendation.md#减少应用滑动白块)。<!--DelEnd-->
   *
   * 设置缓存后会在Grid显示区域上下各缓存cachedCount*列数个GridItem。
   *
   * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)和开启了
   * [virtualScroll]{@link RepeatAttribute#virtualScroll}开关的
   * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)超出显示和缓存范围的GridItem会被释放。
   *
   * @param { number } value - 预加载的GridItem的数量。<br/>默认值：垂直滚动时为一个屏幕内可显示的行数，水平滚动时为一个屏幕内可显示的列数，最大值为16。<br/>取值范围：
   *     [0, +∞)，设置为小于0的值时，按1处理。<br/>通过状态变量单独更新value值时，Grid组件不会触发布局更新，缓存节点数量仅会在下次布局时更新。
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  cachedCount(value: number): GridAttribute;

  /**
   * 设置预加载的GridItem数量，并配置是否显示预加载节点。
   *
   * 设置缓存后会在Grid显示区域上下各缓存cachedCount*列数个GridItem。配合裁剪[clip]{@link CommonMethod#clip(value: boolean)}或内容裁剪
   * [clipContent](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#clipcontent14)属性可以显示出预加载节点。
   *
   * @param { number } count - 预加载的GridItem的数量。<br/>默认值：垂直滚动时为一个屏幕内可显示的行数，水平滚动时为一个屏幕内可显示的列数，最大值为16。<br/>取值范围：
   *     [0, +∞)，设置为小于0的值时，按1处理。<br/>通过状态变量单独更新count值时，Grid组件不会触发布局更新，缓存节点数量仅会在下次布局时更新。
   * @param { boolean } show - 被预加载的GridItem是否需要显示。设置为true时显示预加载的GridItem，设置为false时不显示预加载的GridItem。 <br/> 默认值：false
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  cachedCount(count: number, show: boolean): GridAttribute;

  /**
   * 设置Grid是否进入编辑模式，进入编辑模式可以拖拽Grid组件内部[GridItem]{@link gridItem}。
   *
   * @param { boolean } value - Grid是否进入编辑模式。设置为true时当前Grid组件处于可编辑模式，设置为false时当前Grid组件处于不可编辑模式。<br/>默认值：false
   * @returns { GridAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  editMode(value: boolean): GridAttribute;

  /**
   * 设置是否开启鼠标框选。开启框选后，可以配合GridItem的selected属性和onSelect事件获取GridItem的选中状态，还可以通过[多态样式]{@link common}设置GridItem的选中态样式（
   * GridItem默认无选中态样式）。
   *
   * @param { boolean } value - 是否开启鼠标框选。<br/>默认值：false<br/>false：关闭框选。true：开启框选。
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  multiSelectable(value: boolean): GridAttribute;

  /**
   * 设置可显示的最大行数或列数。设置为小于1的值时，按默认值显示。
   *
   * 当layoutDirection是Row/RowReverse时，表示可显示的最大列数。
   *
   * 当layoutDirection是Column/ColumnReverse时，表示可显示的最大行数。
   *
   * 当maxCount小于minCount时，maxCount和minCount都按默认值处理。
   *
   * @param { number } value - 可显示的最大行数或列数。<br/>默认值：Infinity
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  maxCount(value: number): GridAttribute;

  /**
   * 设置可显示的最小行数或列数。设置为小于1的值时，按默认值显示。
   *
   * 当layoutDirection是Row/RowReverse时，表示可显示的最小列数。
   *
   * 当layoutDirection是Column/ColumnReverse时，表示可显示的最小行数。
   *
   * 当minCount大于maxCount时，minCount和maxCount都按默认值处理。
   *
   * @param { number } value - 可显示的最小行数或列数。<br/>默认值：1
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  minCount(value: number): GridAttribute;

  /**
   * 设置一行的高度或者一列的宽度。
   *
   * 当layoutDirection是Row/RowReverse时，表示一行的高度。
   *
   * 当layoutDirection是Column/ColumnReverse时，表示一列的宽度。
   *
   * @param { number } value - 一行的高度或者一列的宽度。<br/>默认值：第一个元素的大小 <br/>单位：vp <br/>取值范围：(0, +∞)，设置为小于等于0的值时，按默认值显示。
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  cellLength(value: number): GridAttribute;

  /**
   * 设置布局的主轴方向。
   *
   * @param { GridDirection } value - 布局的主轴方向。<br/>默认值：GridDirection.Row
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  layoutDirection(value: GridDirection): GridAttribute;

  /**
   * 设置当前Grid组件是否支持在LazyForEach或Repeat中使用if/else渲染控制语法生成不包含任何子组件的空分支节点。未设置时不支持空分支节点。此属性初次赋值后不支持更新，所以赋值后无法在支持空分支、不支持空分支行为
   * 之间切换。
   *
   * @param { boolean | undefined } supported - 当前Grid组件是否支持在
   *     [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)或
   *     [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)中使用
   *     [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)渲染控制语法生成一个不含任何子节点的空分支节点。</br>true表示支
   *     持空分支节点；false表示不支持空分支节点。</br>值为undefined时，按false处理。
   * @returns { GridAttribute } the attribute of the Gird.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  supportEmptyBranchInLazyLoading(supported: boolean | undefined): GridAttribute;

  /**
   * 设置是否支持动画。当前支持GridItem拖拽动画。仅在滚动模式下（只设置rowsTemplate、columnsTemplate其中一个）支持动画。
   *
   * 仅在大小规则的Grid中支持拖拽动画，跨行或跨列场景不支持。
   *
   * supportAnimation动画效果参考[示例5（Grid拖拽场景）](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例5grid拖拽场景)，其他动
   * 画效果需要应用自定义拖拽实现。
   *
   * @param { boolean } value - 是否支持动画。设置为true时支持GridItem拖拽动画，设置为false时不支持GridItem拖拽动画。<br/>默认值：false
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  supportAnimation(value: boolean): GridAttribute;

  /**
   * 开始拖拽网格元素时触发。
   *
   * 手指长按GridItem时触发该事件。
   *
   * 由于拖拽检测也需要长按，且事件处理机制优先触发子组件事件，GridItem上绑定[LongPressGesture]{@link LongPressGestureInterface}时无法触发拖拽。如有长按和拖拽同时使用的需求可以
   * 使用通用拖拽事件。
   *
   * 拖拽浮起的网格元素可在应用窗口内移动，若需限制移动范围，可通过自定义手势实现，具体参考
   * [示例16（实现GridItem自定义拖拽）](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例16实现griditem自定义拖拽)。
   *
   * 不支持拖动到Grid边缘时自动滚动，可使用通用拖拽实现，具体参考
   * [示例17（通过拖拽事件实现griditem拖拽）](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例17通过拖拽事件实现griditem拖拽)。
   *
   * @param { function } event - Callback triggered when the dragging of a grid element starts.<br>In API version 22 and
   *     earlier versions, the parameter type is **(event: ItemDragInfo, itemIndex: number) => (() => any) | void**. For
   *     details about the **event** and **itemIndex** parameters, see
   *     [OnItemDragStartCallback]{@link OnItemDragStartCallback}. [since 8 - 22]
   * @param { OnItemDragStartCallback } event - 网格元素拖拽开始时触发的回调。<br>API version 22及之前版本，该参数类型为(event: ItemDragInfo,
   *     itemIndex: number) => (() => any) | void，其中event和itemIndex参数含义参考
   *     [OnItemDragStartCallback]{@link OnItemDragStartCallback}。 [since 23]
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onItemDragStart(event: OnItemDragStartCallback): GridAttribute;

  /**
   * 拖拽进入网格元素范围内时触发。
   *
   * @param { function } event - 拖拽点的信息。
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onItemDragEnter(event: (event: ItemDragInfo) => void): GridAttribute;

  /**
   * 拖拽在网格元素范围内移动时触发。
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onItemDragMove(event: (event: ItemDragInfo, itemIndex: number, insertIndex: number) => void): GridAttribute;

  /**
   * 拖拽离开网格元素时触发。
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onItemDragLeave(event: (event: ItemDragInfo, itemIndex: number) => void): GridAttribute;

  /**
   * 绑定该事件的网格元素可作为拖拽释放目标，当GridItem停止拖拽时触发。
   *
   * 当拖拽释放位置在网格元素之内时，isSuccess会返回true；在网格元素之外时，isSuccess会返回false。
   *
   * @param { function } event
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onItemDrop(
    event: (event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => void,
  ): GridAttribute;

  /**
   * 设置边缘滑动效果。
   *
   * @param { EdgeEffect } value - Grid组件的边缘滑动效果，支持弹簧效果和阴影效果。<br/>默认值：EdgeEffect.None
   * @param { EdgeEffectOptions } options - 组件内容大小小于组件自身时，是否开启滑动效果。设置为{ alwaysEnabled: true }会开启滑动效果，{ alwaysEnabled:
   *     false }不开启。<br/>默认值：{ alwaysEnabled: false } [since 11]
   * @returns { GridAttribute } The attribute of the grid
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  edgeEffect(value: EdgeEffect, options?: EdgeEffectOptions): GridAttribute;

  /**
   * 设置嵌套滚动选项。设置前后两个方向的嵌套滚动模式，实现与父组件的滚动联动。当组件内容大小小于组件自身，且[edgeEffect]{@link GridAttribute#edgeEffect}的options为{
   * alwaysEnabled: false }时，组件自身滑动手势不会触发，嵌套滚动属性不会生效，如果其父滚动组件有滑动手势，则会触发父组件的滑动手势。
   *
   * @param { NestedScrollOptions } value - 嵌套滚动选项。
   * @returns { GridAttribute } the attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  nestedScroll(value: NestedScrollOptions): GridAttribute;

  /**
   * 设置是否支持滚动手势。
   *
   * **说明：**
   *
   * 组件无法通过鼠标按下拖动操作进行滚动。
   *
   * @param { boolean } value - 是否支持滚动手势。设置为true时可以通过手指或者鼠标滚动，设置为false时无法通过手指或者鼠标滚动，但不影响控制器
   *     [Scroller]{@link Scroller}的滚动接口。<br/>默认值：true
   * @returns { GridAttribute } The attribute of the grid
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableScrollInteraction(value: boolean): GridAttribute;

  /**
   * 设置摩擦系数，手动划动滚动区域时生效，仅影响惯性滚动过程，对惯性滚动过程中的链式效果有间接影响。
   *
   * @param { number | Resource } value - 摩擦系数。<br/>默认值：非可穿戴设备为0.6，可穿戴设备为0.9。<br/>从API version 11开始，非可穿戴设备默认值为0.7。<br/>从
   *     API version 12开始，非可穿戴设备默认值为0.75。<br/>取值范围：(0, +∞)，设置为小于等于0的值时，按默认值处理。
   * @returns { GridAttribute } the attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  friction(value: number | Resource): GridAttribute;

  /**
   * 设置Grid中GridItem的对齐方式， 使用方法可以参考
   * [示例9](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例9以当前行最高的griditem的高度为其他griditem的高度)。
   *
   * @param { Optional<GridItemAlignment> } alignment - 设置Grid中GridItem的对齐方式。<br/>默认值：GridItemAlignment.DEFAULT
   * @returns { GridAttribute } The attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  alignItems(alignment: Optional<GridItemAlignment>): GridAttribute;

  /**
   * 设置交叉轴方向键走焦模式。
   *
   * @param { Optional<FocusWrapMode> } mode - 交叉轴方向键走焦模式。<br/>默认值：FocusWrapMode.DEFAULT<br/>**说明：** <br/>异常值按默认值处理，即交
   *     叉轴方向键不能换行。
   * @returns { GridAttribute } the attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  focusWrapMode(mode: Optional<FocusWrapMode>): GridAttribute;

  /**
   * 设置是否同步加载Grid区域内所有子组件。
   *
   * @param { boolean } enable - 是否同步加载Grid区域内所有子组件。<br/> true表示同步加载，false表示异步加载。默认值：true。<br/> **说明：** <br/>设置为false时，在
   *     首次显示、不带动画scrollToIndex跳转场景，若当帧布局耗时超过50ms，会将Grid区域内尚未布局的子组件延后到下一帧进行布局。
   * @returns { GridAttribute } The attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  syncLoad(enable: boolean): GridAttribute;

  /**
   * 配置编辑模式选项参数。
   *
   * @param { EditModeOptions } [options] - 编辑模式选项。
   * @returns { GridAttribute } - The attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  editModeOptions(options?: EditModeOptions): GridAttribute;

  /**
   * 设置Grid是否启用编辑模式，启用编辑模式后可以在Grid组件内滑动多选[GridItem]{@link gridItem}。未通过该接口设置时，不启用编辑模式。
   *
   * @param { boolean | undefined } enabled - 是否启用编辑模式。设置为true时启用编辑模式，可以滑动多选，设置为false或undefined时关闭编辑模式，不可滑动多选。
   * @returns { GridAttribute } The attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  enableEditMode(enabled: boolean | undefined): GridAttribute;

  /**
   * 编辑模式状态变化时触发。
   *
   * @param { Callback<boolean> | undefined } callback - 编辑模式状态变化时触发的回调。
   *     <br>传入undefined会取消注册回调。
   * @returns { GridAttribute } Grid组件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onEditModeChange(callback: Callback<boolean> | undefined): GridAttribute;

  /**
   * 网格滑动时触发。
   *
   * @param { function } event - 网格滚动回调，scrollOffset为每帧滚动偏移量，ScrollState为当前滑动状态。
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 12
   * @useinstead common.ScrollableCommonMethod#onDidScroll
   */
  onScroll(event: (scrollOffset: number, scrollState: ScrollState) => void): GridAttribute;

  /**
   * 网格到达起始位置时触发。
   *
   * Grid初始化时会触发一次，Grid滚动到起始位置时触发一次。Grid边缘效果为弹簧效果时，划动经过起始位置时触发一次，回弹回起始位置时再触发一次。
   *
   * @param { function } event - 网格到达起始位置时触发的回调。
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onReachStart(event: () => void): GridAttribute;

  /**
   * 网格到达末尾位置时触发。不满一屏并且最后一个子组件末端在Grid内时触发。
   *
   * Grid边缘效果为弹簧效果时，划动经过末尾位置时触发一次，回弹回末尾位置时再触发一次。
   *
   * @param { function } event - 网格到达末尾位置时触发的回调。
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onReachEnd(event: () => void): GridAttribute;

  /**
   * 网格滑动开始时触发。手指拖动网格或网格的滚动条触发的滑动开始时，会触发该事件。使用[Scroller]{@link Scroller}滑动控制器触发的带动画的滑动，动画开始时会触发该事件。
   *
   * @param { function } event - 网格滑动开始时触发的回调。
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onScrollStart(event: () => void): GridAttribute;

  /**
   * 网格滑动停止时触发。手指拖动网格或网格的滚动条触发的滑动，手指离开屏幕后滑动停止时会触发该事件。使用[Scroller]{@link Scroller}滑动控制器触发的带动画的滑动，动画停止会触发该事件。
   *
   * @param { function } event - 网格滑动停止时触发的回调。
   * @returns { GridAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onScrollStop(event: () => void): GridAttribute;

  /**
   * 该接口回调时，事件参数传入即将发生的滑动量，事件处理函数中可根据应用场景计算实际需要的滑动量并作为事件处理函数的返回值返回，网格将按照返回值的实际滑动量进行滑动。
   *
   * 满足以下任一条件时触发该事件：
   *
   * 1. 用户交互（如手指滑动、键鼠操作等）触发滚动。
   * 2. Grid惯性滚动。
   * 3. 调用[fling]{@link Scroller#fling}接口触发滚动。
   *
   * 不触发该事件的条件：
   *
   * 1. 调用除[fling]{@link Scroller#fling}接口外的其他滚动控制接口。
   * 2. 越界回弹。
   * 3. 拖动滚动条。
   *
   * @param { function } event - Callback triggered when each frame scrolling starts. [since 10 - 19]
   * @param { OnScrollFrameBeginCallback } event - 每帧滚动开始回调函数。 [since 20]
   * @returns { GridAttribute } Returns the instance of the GridAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onScrollFrameBegin(event: OnScrollFrameBeginCallback): GridAttribute;
}

/**
* 网格容器，由“行”和“列”分割的单元格所组成，通过指定“项目”所在的单元格做出各种各样的布局。
*
* > **说明：**
*
* > 组件内部已绑定手势实现跟手滚动等功能，需要增加自定义手势操作时请参考[手势拦截增强]{@link common}进行处理。
*
* ###### 子组件
*
* 仅支持[GridItem]{@link gridItem}子组件和自定义组件。自定义组件在Grid下使用时，建议使用GridItem作为自定义组件的顶层组件，不建议给自定义组件设置属性和事件方法。
*
* 支持通过渲染控制类型（[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、
* [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)、
* [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)和
* [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)）动态生成子组件，更推荐使用LazyForEach或Repeat以优化性能。
*
* > **说明：**
* >
* > Grid子组件的索引值计算规则：
* >
* > 按子组件的顺序依次递增。
* >
* > if/else语句中，只有条件成立分支内的子组件会参与索引值计算，条件不成立分支内的子组件不计算索引值。
* >
* > ForEach/LazyForEach和Repeat语句中，会计算展开所有子组件索引值。
* >
* > [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、
* > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)、
* > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)和
* > [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)发生变化以后，会更新子组件索引值。
* >
* > Grid子组件的visibility属性设置为Hidden或None时依然会计算索引值。
* >
* > Grid子组件的visibility属性设置为None时不显示，但依然会占用子组件对应的网格。
* >
* > Grid子组件设置position属性，会占用子组件对应的网格，子组件将显示在相对Grid左上角偏移position的位置。该子组件不会随其对应网格滚动，在对应网格滑出Grid显示范围外后不显示。
* >
* > 当Grid子组件之间留有空隙时，会根据当前的展示区域尽可能填补空隙，因此GridItem可能会随着网格滚动而改变相对位置。
* >
* > 从API version 21开始，Grid单个子组件的宽高最大为16777216px；API version 20及之前，Grid单个子组件的宽高最大为1000000px。子组件超出该大小可能导致滚动或显示异常。
*
* ###### GridLayoutOptions<sup>10+</sup>对象说明
*
* Grid布局选项。其中，irregularIndexes和onGetIrregularSizeByIndex可对仅设置rowsTemplate或columnsTemplate的Grid使用，可以指定一个index数组，并为其中的
* index对应的GridItem设置其占据的行数与列数，使用方法参见
* [示例3](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例3可滚动grid设置跨行跨列节点)；onGetRectByIndex可对同时设置
* rowsTemplate和columnsTemplate的Grid使用，为指定的index对应的GridItem设置位置和大小，使用方法参见
* [示例1](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例1固定行列grid)。
*
* 为提高Grid在跳转、列数变化等场景的性能，应该尽量使用GridLayoutOptions。即使Grid中没有任何特殊的跨行跨列节点，也可以通过使用'Grid(this.scroller, {regularSize: [1, 1]})
* '的方式提高跳转性能。参考<!--RP1-->
* [使用GridLayoutOptions提升Grid性能](docroot://performance/grid_optimization.md#使用gridlayoutoptions提升grid性能)<!--RP1End-->。
*
* **系统能力：** SystemCapability.ArkUI.ArkUI.Full
*
* <!--Table: 20%; 20%; 8%; 8%; 44%-->
*
* | 名称    | 类型      | 只读   | 可选 | 说明                    |
* | ----- | ------- | ---- | --  | --------------------- |
* | regularSize  | [number, number]  | 否    | 否 | 大小规则的GridItem在Grid中占的行数和列数，只支持占1行1列即[1, 1]。 <br/>**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。  |
* | irregularIndexes | number[] | 否    | 是 | 指定索引的GridItem在Grid中的大小是不规则的。当不设置onGetIrregularSizeByIndex时，irregularIndexes中GridItem的默认大小为垂直滚动Grid的一整行或水平滚动Grid的一整列。 <br/>**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。 |
* | onGetIrregularSizeByIndex | (index: number) => [number, number] | 否    | 是 | 配合irregularIndexes使用，设置不规则GridItem占用的行数和列数。开发者可为irregularIndexes中指明的index对应的GridItem设置占用的行数和列数。在API version 12之前，垂直滚动Grid不支持GridItem占多行，水平滚动Grid不支持GridItem占多列。<br/>**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。 |
* | onGetRectByIndex<sup>11+</sup> | (index: number) => [number, number,number,number] | 否  | 是 | 设置指定索引index对应的GridItem的位置及大小[rowStart,columnStart,rowSpan,columnSpan]。 <br/>其中rowStart为行起始位置，columnStart为列起始位置，无单位。 <br/>rowSpan为GridItem占用的行数，columnSpan为GridItem占用的列数，无单位。 <br/>rowStart和columnStart取大于等于0的自然数，若取负数时，rowStart和columnStart默认为0。 <br/>rowSpan和columnSpan取大于等于1的自然数，若取小数则向下取整，若小于1则按1计算。<br/>**说明：** <br/>第一种情况：某个GridItem发现给它指定的起始位置被占据了，则从起始位置[0,0]开始按顺序从左到右，从上到下寻找起始的放置位置。<br/>第二种情况：如果起始位置没有被占据，但其他位置被占据了，无法显示全部的GridItem大小，则只会布局一部分。<br/>**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。 |
*
* ###### GridItemAlignment<sup>12+</sup>枚举说明
*
* GridItem的对齐方式枚举。
*
* **原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。
*
* **系统能力：** SystemCapability.ArkUI.ArkUI.Full
*
* | 名称   | 值 | 说明                                 |
* | ------ |------| -------------------------------------- |
* | DEFAULT  |  0  | 使用Grid的默认对齐方式。 |
* | STRETCH |  1  | 以一行中的最高的GridItem作为其他GridItem的高度。 |
*
* > **说明：**
* >
* > 1、只有可滚动的Grid中，设置STRETCH参数会生效，其他场景不生效。<br/>
* > > 2、在Grid的一行中，如果每个GridItem都是大小规律的（只占一行一列），设置STRETCH参数会生效，存在跨行或跨列的GridItem的场景不生效。<br/>
* > > 3、设置STRETCH后，只有不设置高度的GridItem才会以当前行中最高的GridItem作为自己的高度，设置过高度的GridItem高度不会变化。<br/>
* > > 4、设置STRETCH后，Grid布局时会有额外的布局流程，可能会带来额外的性能开销。
*
* ###### GridDirection<sup>8+</sup>枚举说明
*
* 主轴布局方向枚举。
*
* **原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。
*
* **系统能力：** SystemCapability.ArkUI.ArkUI.Full
*
* | 名称   |值| 说明                                 |
* | ------ |------| -------------------------------------- |
* | Row  |  0  | 主轴布局方向沿水平方向布局，即自左往右先填满一行，再去填下一行。 |
* | Column |  1  | 主轴布局方向沿垂直方向布局，即自上往下先填满一列，再去填下一列。 |
* | RowReverse    |  2  | 主轴布局方向沿水平方向反向布局，即自右往左先填满一行，再去填下一行。 |
* | ColumnReverse   |  3  | 主轴布局方向沿垂直方向反向布局，即自下往上先填满一列，再去填下一列。 |
*
* ###### ComputedBarAttribute<sup>10+</sup>对象说明
*
* 滚动条位置和长度对象。
*
* **原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。
*
* **系统能力：** SystemCapability.ArkUI.ArkUI.Full
*
* | 名称         | 类型         | 只读 | 可选 |   说明         |
* | ----------- | ------------ | ---- | ---- | ---------- |
* | totalOffset | number | 否 | 否 |  Grid内容相对显示区域的总偏移，单位px。    |
* | totalLength   | number | 否 | 否 |  Grid内容总长度，单位px。    |
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const Grid: GridInterface;

/**
* 定义Grid组件实例。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const GridInstance: GridAttribute;