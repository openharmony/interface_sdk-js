'use static'
/*
 * Copyright (c) 2025-2026 Huawei Device Co., Ltd.
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
import { EdgeEffectOptions, EditModeOptions, NestedScrollOptions, ItemDragInfo, ScrollableCommonMethod, CommonMethod, OnWillScrollCallback, OnScrollCallback, OnItemDragStartCallback } from './common';
import { Length, Resource, ItemFillPolicy } from './units';
import { Scroller, OnScrollFrameBeginCallback } from './scroll';
import { BarState, Color, EdgeEffect, FocusWrapMode } from './enums';
import { ComponentBuilder, CustomBuilder, Builder, CustomBuilderT, ConstructorT } from './builder';
import { AttributeModifier, Bindable, Callback, CommonMethod, UIScrollableCommonEvent } from "./common";
/**
 * 用于记录Grid页面内起始行的位置信息。
 *
 * **系统接口：** 此接口为系统接口。
 *
 * **模型约束：** 此接口仅可在Stage模型下使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare interface StartLineInfo {

  /**
   * 目标索引或目标偏移量所在行的起始索引。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  startIndex: int;

  /**
   * startIndex对应的GridItem所在的起始行，一般为Grid视窗内的起始行，对于跨多行的GridItem需要找到该节点的起始行，可能在视窗外。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  startLine: int;

  /**
   * startIndex对应的GridItem的顶部与Grid顶部之间的偏移量。
   * 单位：vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  startOffset: double;

  /**
   * 总滚动偏移量，即Grid中第一个GridItem的顶部与Grid顶部之间的偏移量。
   * 单位：vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  totalOffset: double;
}

/**
 * 根据Grid的总偏移量，计算当前页面起始行的位置，用于快速滑动或反向滑动场景。
 * **系统接口：** 此接口为系统接口。
 * **模型约束：** 此接口仅可在Stage模型下使用。
 *
 * @param { double } totalOffset - 总滚动偏移量，即Grid当中第一个GridItem的顶部与Grid顶部之间的偏移量。
 *     单位：vp。
 * @returns { StartLineInfo }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export type OnGetStartIndexByOffsetCallback = (totalOffset: double) => StartLineInfo;

/**
 * 根据指定的目标索引，计算Grid滚动到该位置时页面内对应的起始行，用于支持[scrollToIndex]{@link Scroller#scrollToIndex}等操作。
 * **系统接口：** 此接口为系统接口。
 * **模型约束：** 此接口仅可在Stage模型下使用。
 *
 * @param { int } targetIndex - 要滚动到的目标GridItem的索引。
 *     <br>取值限定为整数。
 * @returns { StartLineInfo }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export type OnGetStartIndexByIndexCallback = (targetIndex: int) => StartLineInfo;

/**
 * Grid布局选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface GridLayoutOptions {

  /**
   * 大小规则的GridItem在Grid中占的行数和列数，只支持占1行1列即[1, 1]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  regularSize: [
        int,
        int
    ];

  /**
   * 指定索引的GridItem在Grid中的大小是不规则的。
   *
   * @default int[] no irregular grid item
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  irregularIndexes?: int[];

  /**
   * 配合irregularIndexes使用，设置不规则GridItem占用的行数和列数。开发者可为irregularIndexes中指明的index对应的GridItem设置占用的行数和列数。在API version 12之前，垂直滚动Grid不支持GridItem占多行，水平滚动Grid不支持GridItem占多列。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onGetIrregularSizeByIndex?: (index: int) => [
        int,
        int
    ];

  /**
   * 设置指定索引index对应的GridItem的位置及大小[rowStart,columnStart,rowSpan,columnSpan]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onGetRectByIndex?: (index: int) => [
        int,
        int,
        int,
        int
    ];

  /**
   * 根据Grid滚动的总偏移量，计算Grid当前页面起始行位置，用于快速滑动或反向滑动场景。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  onGetStartIndexByOffset?: OnGetStartIndexByOffsetCallback;

  /**
   * 根据指定的目标索引，计算Grid滚动到该位置时页面内的起始行，用于支持[scrollToIndex]{@link Scroller#scrollToIndex}等操作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  onGetStartIndexByIndex?: OnGetStartIndexByIndexCallback;
}

/**
 * 主轴布局方向枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum GridDirection {

  /**
   * The row direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Row,

  /**
   * The column direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Column,

  /**
   * The row reverse direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RowReverse,

  /**
   * The column reverse direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ColumnReverse
}

/**
 * GridItem的对齐方式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum GridItemAlignment {

  /**
   * 使用Grid的默认对齐方式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DEFAULT = 0,

  /**
   * 以一行中的最高的GridItem作为其他GridItem的高度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  STRETCH = 1
}

/**
 * 滚动条位置和长度对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ComputedBarAttribute {

  /**
   * Grid内容相对显示区域的总偏移，单位px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  totalOffset: double;

  /**
   * Grid内容总长度，单位px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  totalLength: double;
}

/**
 * frameNode中[getEvent('Grid')](docroot://reference/apis-arkui/js-apis-arkui-frameNode.md#geteventgrid19)方法的返回值，可用于给Grid
 * 节点设置滚动事件。
 *
 * UIGridEvent继承于[UIScrollableCommonEvent]{@link UIScrollableCommonEvent}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface UIGridEvent extends UIScrollableCommonEvent {

  /**
   * 设置[onWillScroll](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#onwillscroll12)事件的回调。
   *
   * 方法入参为undefined时，会重置事件回调。
   *
   * @param { OnWillScrollCallback | undefined } callback - onWillScroll事件的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
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
   * @since 26.0.0 static
   */
  setOnDidScroll(callback: OnScrollCallback | undefined): void;

  /**
   * 设置[onScrollIndex]{@link onScrollIndex}事件的回调。
   *
   * 方法入参为undefined时，会重置事件回调。
   *
   * @param { OnGridScrollIndexCallback | undefined } callback - onScrollIndex事件的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setOnScrollIndex(callback: OnGridScrollIndexCallback | undefined): void;
}

/**
 * Grid组件可见区域item变化事件的回调类型。
 *
 * @param { int } first - 当前显示的Grid起始位置的索引值。
 * @param { int } last - 当前显示的Grid终止位置的索引值。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type OnGridScrollIndexCallback = (first: int, last: int) => void;

/**
 * 除支持[通用属性]{@link common}和[滚动组件通用属性](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#属性)外，还支持
 * 以下属性：
 *
 * > **说明：**
 * >
 * > Grid组件使用通用属性[clip<sup>12+</sup>]{@link CommonMethod#clip(value: boolean)}和通用属性
 * > [clip<sup>18+</sup>]{@link CommonMethod#clip(clip: Optional<boolean>)}时默认值都为true。
 * >
 * > 设置Grid的padding后，如果子组件部分位于Grid内容区且部分位于padding区域内，则会显示；如果子组件完全位于padding区域内，则不会显示。如下图所示，GridItem1显示，而GridItem2不显示。
 * >
 * > ![GridPadding示意图](docroot://reference/apis-arkui/arkui-ts/figures/gridPadding.png)
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface GridAttribute extends ScrollableCommonMethod {

  /**
   * 设置当前网格组件布局列的数量，不设置时默认1列。
   *
   * 当value设置为string类型时，使用方法参考[columnsTemplate(value: string)]{@link columnsTemplate}。
   *
   * 当value设置为ItemFillPolicy类型时，将根据Grid组件宽度对应[断点类型](docroot://ui/arkts-layout-development-grid-layout.md#栅格容器断点)确定列数。
   *
   * 例如，ItemFillPolicy.BREAKPOINT_DEFAULT在组件宽度属于sm及更小的断点区间时显示2列，属于md断点区间时显示3列，属于lg及更大的断点区间时显示5列，且每列均为1fr。
   *
   * @param { string | ItemFillPolicy | undefined } value - 当前网格组件布局列的数量。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default columnsTemplate(value: string | ItemFillPolicy | undefined): this;

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
   * auto-fit模式和auto-stretch模式只支持track-size为一个有效行高值，并且auto-stretch模式中的track-size只支持px、vp和有效数字，不支持%。auto-fill模式支持一个或多个有
   * 效行高，如rowsTemplate('repeat(auto-fill, 20)')、rowsTemplate('repeat(auto-fill, 20 80px)')。
   *
   * 设置为'0fr'，则这一行的行高为0，这一行GridItem不显示。设置为其他非法值，按固定1行处理。
   *
   * @param { string | undefined } value
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default rowsTemplate(value: string | undefined): this;

  /**
   * 设置列与列的间距。设置为小于0的值时，按默认值显示。
   *
   * @param { Length | undefined } value
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default columnsGap(value: Length | undefined): this;

  /**
   * 设置行与行的间距。设置为小于0的值时，按默认值显示。
   *
   * @param { Length | undefined } value
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default rowsGap(value: Length | undefined): this;

  /**
   * 设置滚动条的宽度，不支持百分比设置。宽度设置后，滚动条正常状态和按压状态宽度均为滚动条的宽度值。如果滚动条的宽度超过Grid组件主轴方向的高度，则滚动条的宽度会变为默认值。
   *
   * @param { double | string | undefined } value
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default scrollBarWidth(value: double | string | undefined): this;

  /**
   * 设置滚动条的宽度，不支持百分比设置。宽度设置后，滚动条正常状态和按压状态宽度均为滚动条的宽度值。如果滚动条的宽度超过Grid组件主轴方向的高度，则滚动条的宽度会变为4vp。支持Resource资源类型。
   *
   * 未通过该接口设置时，设置滚动条的宽度为4vp。
   *
   * @param { Resource | undefined } value - 滚动条的宽度。<br/>单位：vp<br/>取值范围：
   *     [0, +∞)。设置为小于0的值时，按4vp处理。设置为0时，不显示滚动条。<br/>取值为undefined时，按4vp处理。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default scrollBarWidth(value: Resource | undefined): this;

  /**
   * 设置滚动条的颜色。与[scrollBarColor]{@link scrollBarColor}相比， 参数名改为color，并开始支持Resource类型。
   *
   * @param { Color | int | string | Resource | undefined } color - 滚动条的颜色。<br/>默认值：'#182431'（40%不透明度）。<br/>number为HEX
   *     格式颜色，支持rgb或者argb，示例：0xffffff。string为rgb或者argb格式颜色，示例：'#ffffff'。<br/>取值为undefined时，按默认值处理。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default scrollBarColor(color: Color | int | string | Resource | undefined): this;

  /**
   * 设置滚动条状态。
   *
   * @param { BarState | undefined } value
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default scrollBar(value: BarState | undefined): this;

  /**
   * 在Grid每帧布局结束时触发，可通过该回调设置滚动条的位置及长度。
   *
   * 该接口只用作设置Grid的滚动条位置，不建议开发者在此接口中做业务逻辑处理。
   *
   * @param { function | undefined } event - 在Grid每帧布局结束时触发的回调，用于设置滚动条的位置及长度。<br/>index：当前显示的网格起始位置的索引值。<br/>offset：当前
   *     显示的网格起始位置元素相对网格显示起始位置的偏移，单位vp。<br/>[ComputedBarAttribute]{@link ComputedBarAttribute}：返回滚动条的位置及长度。<br/>
   *     undefined：不使用该回调函数。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onScrollBarUpdate(event: ((index: int, offset: double) => ComputedBarAttribute) | undefined): this;

  /**
   * 当前网格显示的起始位置/终止位置的item发生变化时触发。网格初始化时会触发一次。Grid显示区域上第一个子组件/最后一个组件的索引值有变化就会触发。
   *
   * @param { function | undefined } event - 当前网格显示的起始位置/终止位置的item发生变化时触发的回调。<br/>first：当前显示的网格起始位置的索引值。<br/>last：当前显示
   *     的网格终止位置的索引值。<br/>undefined：不使用该回调函数。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onScrollIndex(event: ((first: int, last: int) => void) | undefined): this;

  /**
   * 设置预加载的GridItem的数量，只在[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)和开启了
   * [virtualScroll](docroot://reference/apis-arkui/arkui-ts/ts-rendering-control-repeat.md#virtualscroll)开关的
   * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)中生效。<!--Del-->具体使用可参考
   * [减少应用白块说明](docroot://performance/arkts-performance-improvement-recommendation.md#减少应用滑动白块)。<!--DelEnd-->
   *
   * 设置缓存后会在Grid显示区域上下各缓存cachedCount*列数个GridItem。
   *
   * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)和开启了
   * [virtualScroll](docroot://reference/apis-arkui/arkui-ts/ts-rendering-control-repeat.md#virtualscroll)开关的
   * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)超出显示和缓存范围的GridItem会被释放。
   *
   * @param { int | undefined } value
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default cachedCount(value: int | undefined): this;

  /**
   * 设置预加载的GridItem数量，并配置是否显示预加载节点。
   *
   * 设置缓存后会在Grid显示区域上下各缓存cachedCount*列数个GridItem。配合裁剪[clip]{@link CommonMethod#clip(value: boolean)}或内容裁剪
   * [clipContent](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#clipcontent14)属性可以显示出预加载节
   * 点。
   *
   * @param { int | undefined } count - 预加载的GridItem的数量。<br/>默认值：垂直滚动时为一个屏幕内可显示的行数，水平滚动时为一个屏幕内可显示的列数，最大值为16。<br/>取值范围：
   *     [0, +∞)，设置为小于0的值时，按1处理。<br/>通过状态变量单独更新count值时，Grid组件不会触发布局更新，缓存节点数量仅会在下次布局时更新。<br/>取值为undefined时，按默认值处理。
   * @param { boolean | undefined } show - 被预加载的GridItem是否需要显示。设置为true时显示预加载的GridItem，设置为false时不显示预加载的GridItem。 <br/>
   *     默认值：false<br/>取值为undefined时，按默认值处理。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default cachedCount(count: int | undefined, show: boolean | undefined): this;

  /**
   * 设置Grid是否进入编辑模式，进入编辑模式可以拖拽Grid组件内部[GridItem]{@link gridItem}。
   *
   * @param { boolean | undefined } value
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default editMode(value: boolean | undefined): this;

  /**
   * 设置是否开启鼠标框选。开启框选后，可以配合GridItem的[selected]{@link GridItemAttribute#selected}属性和
   * [onSelect](docroot://reference/apis-arkui/arkui-ts/ts-container-griditem.md#onselect8)事件获取GridItem的选中状态，还可以通过
   * [多态样式]{@link common}设置GridItem的选中态样式（GridItem默认无选中态样式）。
   *
   * @param { boolean | undefined } value
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default multiSelectable(value: boolean | undefined): this;

  /**
   * 设置可显示的最大行数或列数。设置为小于1的值时，按默认值显示。
   *
   * 当layoutDirection是Row/RowReverse时，表示可显示的最大列数。
   *
   * 当layoutDirection是Column/ColumnReverse时，表示可显示的最大行数。
   *
   * 当maxCount小于minCount时，maxCount和minCount都按默认值处理。
   *
   * @param { int | undefined } value
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default maxCount(value: int | undefined): this;

  /**
   * 设置可显示的最小行数或列数。设置为小于1的值时，按默认值显示。
   *
   * 当layoutDirection是Row/RowReverse时，表示可显示的最小列数。
   *
   * 当layoutDirection是Column/ColumnReverse时，表示可显示的最小行数。
   *
   * 当minCount大于maxCount时，minCount和maxCount都按默认值处理。
   *
   * @param { int | undefined } value
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default minCount(value: int | undefined): this;

  /**
   * 设置一行的高度或者一列的宽度。
   *
   * 当layoutDirection是Row/RowReverse时，表示一行的高度。
   *
   * 当layoutDirection是Column/ColumnReverse时，表示一列的宽度。
   *
   * @param { double | undefined } value
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default cellLength(value: double | undefined): this;

  /**
   * 设置布局的主轴方向。
   *
   * @param { GridDirection | undefined } value
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default layoutDirection(value: GridDirection | undefined): this;

  /**
   * 设置是否支持动画。当前支持GridItem拖拽动画。仅在滚动模式下（只设置rowsTemplate、columnsTemplate其中一个）支持动画。
   *
   * 仅在大小规则的Grid中支持拖拽动画，跨行或跨列场景不支持。
   *
   * supportAnimation动画效果参考[示例5（Grid拖拽场景）](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例5grid拖拽场景)，其
   * 他动画效果需要应用自定义拖拽实现。
   *
   * @param { boolean | undefined } value
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default supportAnimation(value: boolean | undefined): this;

  /**
   * 设置当前Grid组件是否支持在LazyForEach或Repeat中使用if/else渲染控制语法生成不包含任何子组件的空分支节点。未设置时不支持空分支节点。此属性初次赋值后不支持更新，所以赋值后无法在支持空分支、不支持空分支
   * 行为之间切换。
   *
   * @param { boolean | undefined } supported - 当前Grid组件是否支持在
   *     [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)或
   *     [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)中使用
   *     [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)渲染控制语法生成一个不含任何子节点的空分支节点。</br>true表
   *     示支持空分支节点；false表示不支持空分支节点。</br>值为undefined时，按false处理。
   * @returns { this } the attribute of the Grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default supportEmptyBranchInLazyLoading(supported: boolean | undefined): this;

  /**
   * 开始拖拽网格元素时触发。
   *
   * 手指长按GridItem时触发该事件。
   *
   * 由于拖拽检测也需要长按，且事件处理机制优先触发子组件事件，GridItem上绑定[LongPressGesture]{@link LongPressGestureInterface}时无法触发拖拽。如有长按和拖拽同时使用的需求
   * 可以使用通用拖拽事件。
   *
   * 拖拽浮起的网格元素可在应用窗口内移动，若需限制移动范围，可通过自定义手势实现，具体参考
   * [示例16（实现GridItem自定义拖拽）](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例16实现griditem自定义拖拽)。
   *
   * 不支持拖动到Grid边缘时自动滚动，可使用通用拖拽实现，具体参考
   * [示例17（通过拖拽事件实现griditem拖拽）](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例17通过拖拽事件实现griditem拖拽)。
   *
   * @param { OnItemDragStartCallback | undefined } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onItemDragStart(event: OnItemDragStartCallback | undefined): this;

  /**
   * 拖拽进入网格元素范围内时触发。
   *
   * @param { function | undefined } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onItemDragEnter(event: ((event: ItemDragInfo) => void) | undefined): this;

  /**
   * 拖拽在网格元素范围内移动时触发。
   *
   * @param { function | undefined } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onItemDragMove(event: ((event: ItemDragInfo, itemIndex: int, insertIndex: int) => void) | undefined): this;

  /**
   * 拖拽离开网格元素时触发。
   *
   * @param { function | undefined } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onItemDragLeave(event: ((event: ItemDragInfo, itemIndex: int) => void) | undefined): this;

  /**
   * 绑定该事件的网格元素可作为拖拽释放目标，当GridItem停止拖拽时触发。
   *
   * 当拖拽释放位置在网格元素之内时，isSuccess会返回true；在网格元素之外时，isSuccess会返回false。
   *
   * @param { function | undefined } event
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onItemDrop(event: ((event: ItemDragInfo, itemIndex: int, insertIndex: int, isSuccess: boolean) => void) | undefined): this;

  /**
   * 设置边缘滑动效果。
   *
   * @param { EdgeEffect | undefined } value
   * @param { EdgeEffectOptions } [options]
   * @returns { this } The attribute of the grid
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default edgeEffect(value: EdgeEffect | undefined, options?: EdgeEffectOptions): this;

  /**
   * 设置嵌套滚动选项。设置前后两个方向的嵌套滚动模式，实现与父组件的滚动联动。当组件内容大小小于组件自身，且[edgeEffect]{@link edgeEffect}的options为{ alwaysEnabled: false
   * }时，组件自身滑动手势不会触发，嵌套滚动属性不会生效，如果其父滚动组件有滑动手势，则会触发父组件的滑动手势。
   *
   * @param { NestedScrollOptions | undefined } value - 嵌套滚动选项。<br/>取值为undefined时，按默认值处理。
   * @returns { this } the attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default nestedScroll(value: NestedScrollOptions | undefined): this;

  /**
   * 设置是否支持滚动手势。
   *
   * > **说明：**
   * >
   * > 组件无法通过鼠标按下拖动操作进行滚动。
   *
   * @param { boolean | undefined } value
   * @returns { this } The attribute of the grid
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableScrollInteraction(value: boolean | undefined): this;

  /**
   * 设置摩擦系数，手动划动滚动区域时生效，仅影响惯性滚动过程，对惯性滚动过程中的链式效果有间接影响。
   *
   * @param { double | Resource | undefined } value - 摩擦系数。<br/>默认值：非可穿戴设备为0.6，可穿戴设备为0.9。<br/>从API version 11开始，非可穿戴设备
   *     默认值为0.7。<br/>从API version 12开始，非可穿戴设备默认值为0.75。<br/>取值范围：(0, +∞)，设置为小于等于0的值时，按默认值处理。<br/>取值为undefined时，按默认值处理。
   * @returns { this } the attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default friction(value: double | Resource | undefined): this;

  /**
   * 设置Grid中GridItem的对齐方式， 使用方法可以参考
   * [示例9](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#示例9以当前行最高的griditem的高度为其他griditem的高度)。
   *
   * @param { GridItemAlignment | undefined } alignment - 设置Grid中GridItem的对齐方式。<br/>默认值：GridItemAlignment.DEFAULT<br/>
   *     取值为undefined时，按默认值处理。
   * @returns { this } The attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default alignItems(alignment: GridItemAlignment | undefined): this;

  /**
   * 配置编辑模式选项参数。
   *
   * @param { EditModeOptions } [options] - 编辑模式选项。
   * @returns { this } - The attribute of the grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default editModeOptions(options?: EditModeOptions): this;

  /**
   * 设置Grid是否启用编辑模式，启用编辑模式后可以在Grid组件内滑动多选[GridItem]{@link gridItem}。未通过该接口设置时，不启用编辑模式。
   *
   * @param { boolean | Bindable<boolean> | undefined } enabled - 是否启用编辑模式。设置为true时启用编辑模式，可以滑动多选，设置为false或undefined时关
   *     闭编辑模式，不可滑动多选。<br/>Bindable<boolean>时，支持双向绑定。
   * @returns { this } The attribute of the Grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default enableEditMode(enabled: boolean | Bindable<boolean> | undefined): this;

  /**
   * [enableEditMode]{@link enableEditMode}编辑模式状态变化时触发。使用callback异步回调。
   *
   * @param { Callback<boolean> | undefined } callback - 编辑模式状态变化时触发的回调。回调参数类型为boolean，true表示进入编辑模式，false表示退出编辑模式。<br>传入undefined时取消回调。
   * @returns { this } The attribute of the Grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onEditModeChange(callback: Callback<boolean> | undefined): this;

  /**
   * 设置交叉轴方向键走焦模式。
   *
   * @param { FocusWrapMode | undefined } mode - 交叉轴方向键走焦模式。<br/>默认值：FocusWrapMode.DEFAULT<br/>**说明：** <br/>异常值按默认值处理，
   *     即交叉轴方向键不能换行。<br/>取值为undefined时，按默认值处理。
   * @returns { this } the attribute of the Grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default focusWrapMode(mode: FocusWrapMode | undefined): this;

  /**
   * 设置是否同步加载Grid区域内所有子组件。
   *
   * @param { boolean | undefined } enable - 是否同步加载Grid区域内所有子组件。<br/> true表示同步加载，false表示异步加载。默认值：true。<br/> **说明：** <
   *     br/>设置为false时，在首次显示、不带动画scrollToIndex跳转场景，若当帧布局耗时超过50ms，会将Grid区域内尚未布局的子组件延后到下一帧进行布局。<br/>取值为undefined时，按默认值处
   *     理。
   * @returns { this } The attribute of the Grid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default syncLoad(enable: boolean | undefined): this;

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
   * @param { OnScrollFrameBeginCallback | undefined } event - 每帧滚动开始回调函数。<br/>取值为undefined时，不使用回调函数。
   * @returns { this } Returns the instance of the GridAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onScrollFrameBegin(event: OnScrollFrameBeginCallback | undefined): this;

  /**
   * 滚动事件回调，Grid滚动前触发。
   *
   * 回调当前帧将要滚动的偏移量和当前滚动状态和滚动操作来源，其中回调的偏移量为计算得到的将要滚动的偏移量值，并非最终实际滚动偏移。可以通过该回调返回值指定滚动组件将要滚动的偏移。
   *
   * @param { OnWillScrollCallback | undefined } handler - Grid滑动前触发的回调。<br/>取值为undefined时，不使用回调函数。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onWillScroll(handler: OnWillScrollCallback | undefined): this;

  /**
   * Grid滑动时触发，返回当前帧滑动的偏移量和当前滑动状态。
   *
   * @param { OnScrollCallback | undefined } handler - Grid滑动时触发的回调。<br/>取值为undefined时，不使用回调函数。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onDidScroll(handler: OnScrollCallback | undefined): this;

  /**
   * 设置网格选项。
   *
   * @param { Scroller } [scroller] - 与网格绑定的控制器
   * @param { GridLayoutOptions } [layoutOptions] - 帮助网格布局的选项
   * @returns { GridAttribute } 返回GridAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setGridOptions(scroller?: Scroller, layoutOptions?: GridLayoutOptions): this;

  /**
   * 动态设置Grid组件的属性方法。
   *
   * @param { AttributeModifier<GridAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<GridAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 创建网格容器。
 *
 * @param { Scroller } [scroller] - 可滚动组件的控制器，与可滚动组件进行绑定。
 * @param { GridLayoutOptions } [layoutOptions] - Grid布局选项。
 * @param { CustomBuilder } [content_] - Grid子组件。
 * @returns { GridAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Grid(
    scroller?: Scroller, layoutOptions?: GridLayoutOptions, 
    content_?: CustomBuilder,
): GridAttribute;

/**
* 可扩展Grid组件。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export declare abstract class ExtendableGrid implements GridAttribute {

  /**
   * 创建可扩展Grid组件实例。
   *
   * @param { ConstructorT<T> } factory
   * @param { Scroller } [scroller]
   * @param { GridLayoutOptions } [layoutOptions]
   * @param { CustomBuilder } [content_]
   * @returns { T }
   Grid组件实例。
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  @ComponentBuilder
  static $_instantiate<T extends ExtendableGrid>(
    factory: ConstructorT<T>, 
    scroller?: Scroller, 
    layoutOptions?: GridLayoutOptions, 
    content_?: CustomBuilder
  ): T;

  /**
   * 扩展网格组件入口
   *
   * @param { CustomBuilderT<T> } styles
   * @param { ConstructorT<T> } factory
   * @param { CustomBuilder } [content_]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @unpublished
   * @stagemodelonly
   * @since 26.1.0 staticonly
   */
  @Builder
  static _instantiateImpl<T extends ExtendableGrid>(
    styles: CustomBuilderT<T>, 
    factory: ConstructorT<T>, 
    content_?: CustomBuilder
  ): void;

  /**
   * 设置Grid组件选项。
   *
   * @param { Scroller } [scroller]
   * @param { GridLayoutOptions } [layoutOptions]
   * @returns { ExtendableGrid }
   Grid组件实例。
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public setGridOptions(
    scroller?: Scroller, 
    layoutOptions?: GridLayoutOptions
  ): this;
}

/**
* 可扩展Grid组件入口。
*
 * @param { CustomBuilderT<GridAttribute> } style_ - The style to create a Grid.
 * @param { CustomBuilder } [content_]
 * @returns { GridAttribute } The attribute of the Grid.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function Grid(
    style_: CustomBuilderT<GridAttribute>,
    content_?: CustomBuilder
): GridAttribute;