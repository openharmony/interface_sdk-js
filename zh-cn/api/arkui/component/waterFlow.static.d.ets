'use static'
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
import { AttributeModifier, UIScrollableCommonEvent, ScrollableCommonMethod, NestedScrollOptions, CommonMethod, OnWillScrollCallback, OnScrollCallback } from './common';
import { Builder, CustomBuilder, ComponentBuilder, CustomBuilderT } from './builder';
import { Length, Dimension, Margin, ConstraintSizeOptions, Resource, ItemFillPolicy } from './units';
import { Scroller, OnScrollFrameBeginCallback } from "./scroll";
import { ScrollState } from "./list";
import { FlexDirection } from './enums';
import { ComponentContentBase } from '../../arkui/ComponentContent';
/**
 * 根据index获取指定Item的主轴大小。
 *
 * @param { int } index - FlowItem在WaterFlow中的索引。<br/>。
 *     <br>取值范围：[0, 子节点总数-1]。
 * @returns { double } 指定index的FlowItem的主轴大小，纵向瀑布流时为高度，横向瀑布流时为宽度，单位vp。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type GetItemMainSizeByIndex = (index: int) => double;

/**
 * 描述瀑布流项分组的配置信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class SectionOptions {

  /**
   * 该分组中FlowItem的数量。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  itemsCount: int;

  /**
   * 该分组纵向布局时的列数，或横向布局时的行数。
   * 取值限定为整数。
   * <br> 小于1的按默认值处理。
   *
   * @default 1 one column in vertical layout, or one row in horizontal layout
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  crossCount?: int;

  /**
   * 瀑布流组件布局过程中获取指定index的FlowItem的主轴大小的回调，纵向瀑布流时为高度，横向瀑布流时为宽度，单位vp。
   * <p><strong>说明</strong>。
   * <br>1. 同时使用onGetItemMainSizeByIndex和FlowItem的宽高属性时，主轴大小以onGetItemMainSizeByIndex返回结果为准，onGetItemMainSizeByIndex会覆盖FlowItem的主轴长度。
   * <br>2. 使用onGetItemMainSizeByIndex可以提高瀑布流跳转到指定位置或index时的效率，避免混用设置onGetItemMainSizeByIndex和未设置的分组，会导致布局异常。
   * <br>3. onGetItemMainSizeByIndex返回负数时FlowItem高度为0。
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onGetItemMainSizeByIndex?: GetItemMainSizeByIndex;

  /**
   * 该分组的列间距，不设置该参数时默认使用瀑布流的columnsGap，设置非法值时使用0vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  columnsGap?: Dimension;

  /**
   * 该分组的行间距，不设置该参数时默认使用瀑布流的rowsGap，设置非法值时使用0vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  rowsGap?: Dimension;

  /**
   * 该分组的外边距，参数为Length类型时，四个方向外边距同时生效。
   *
   * @default {top: 0, right: 0, bottom: 0, left: 0}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  margin?: Margin | Dimension;
}

/**
 * 瀑布流分组信息。
 *
 * > **说明：**
 * >
 * > 使用splice、push、update修改分组信息后需要保证所有分组子节点总数与瀑布流实际子节点总数一致，否则会出现瀑布流因为不能正常布局而无法滑动的问题。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class WaterFlowSections {

  /**
   * 创建一个瀑布流分组。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor();

  /**
   * 移除或者替换已存在的分组和/或添加新分组。
   *
   * @param { int } start - 从0开始计算的索引，会转换为整数，表示要开始改变分组的位置。<br/>**说明：** <br/>1. 如果索引是负数，则从末尾开始计算，使用
   *     `start + WaterFlowSections.length()`。<br/>2. 如果 `start < -WaterFlowSections.length()`，则使用0。<br/>3. 如果
   *     `start >= WaterFlowSections.length()`，则在最后添加新分组。
   *     <br>取值限定为整数。
   * @param { int } [deleteCount] - 从0开始计算的索引，会转换为整数，表示要开始改变分组的位置。<br/>**说明：** <br/>1. 如果索引是负数，则从末尾开始计算，使用
   *     `start + WaterFlowSections.length()`。<br/>2. 如果 `start < -WaterFlowSections.length()`，则使用0。<br/>3. 如果
   *     `start >= WaterFlowSections.length()`，则在最后添加新分组。
   *     <br>取值限定为整数。
   * @param { Array<SectionOptions> } [sections] - 表示要从start开始加入的分组。如果不指定，`splice()`将只从瀑布流中删除分组。
   * @returns { boolean } 分组修改成功返回true；修改失败（要加入的分组中有任意分组的itemsCount不是非负数）返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  splice(start: int, deleteCount?: int, sections?: Array<SectionOptions>): boolean;

  /**
   * 将指定分组添加到瀑布流末尾。
   *
   * @param { SectionOptions } section - 添加到瀑布流末尾的分组。
   * @returns { boolean } 分组添加成功返回true，添加失败（新分组的itemsCount不是非负数）返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  push(section: SectionOptions): boolean;

  /**
   * 修改指定索引分组的配置信息。
   *
   * @param { int } sectionIndex - 从0开始计算的索引，会转换为整数，表示要修改的分组的位置。<br/>**说明：** <br/>1. 如果索引是负数，则从末尾开始计算，使用
   *     `sectionIndex + WaterFlowSections.length()`。<br/>2. 如果`sectionIndex < -WaterFlowSections.length()`，则使用0。<br/>
   *     3. 如果`sectionIndex >= WaterFlowSections.length()`，则在最后添加新分组。
   *     <br>取值限定为整数。
   * @param { SectionOptions } section - 新的分组信息。
   * @returns { boolean } 分组是否更新成功。true：分组更新成功，false：新分组的itemsCount不是非负数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  update(sectionIndex: int, section: SectionOptions): boolean;

  /**
   * 获取瀑布流中所有分组配置信息。
   *
   * @returns { Array<SectionOptions> } 瀑布流中所有分组配置信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  values(): Array<SectionOptions>;

  /**
   * 获取瀑布流中分组数量。
   *
   * @returns { int } 瀑布流中分组数量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  length(): int;
}

/**
 * 声明瀑布流的布局模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum WaterFlowLayoutMode {

  /**
   * 默认的从上到下的布局模式。视窗内的FlowItem依赖视窗上方所有FlowItem的布局信息。因此跳转或切换列数时，需要计算出上方所有的FlowItem的布局信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ALWAYS_TOP_DOWN = 0,

  /**
   * 移动窗口式的布局模式。只考虑视窗内的布局信息，对视窗上方的FlowItem没有依赖关系，因此向后跳转或切换列数时只需要布局视窗内的FlowItem。
   *
   * <p><strong>说明</strong>
   * <br> 1. 无动画跳转到较远的位置时，会以目标位置为基准，向前或向后布局FlowItem。这之后如果滑回跳转前的位置，内容的布局效果可能和之前不一致。
   * 这会导致跳转后回滑到顶部时，顶部节点可能不对齐。所以该布局模式下会在滑动到顶部后自动调整布局，保证顶部对齐。在有多个分组的情况下，会在滑动结束时调整在视窗内的分组。
   * <br> 2. scroller的currentOffset接口返回的总偏移量在触发跳转或数据更新后不准确，在回滑到顶部时会重新校准。
   * <br> 3. 如果在同一帧内调用跳转（如无动画的scrollToIndex、scrollEdge）和输入偏移量（如滑动手势或滚动动画），两者都会生效。
   * <br> 4. 调用无动画的scrollToIndex进行跳转，如果跳转到较远位置（超过视窗内的FlowItem数量的位置）时，移动窗口模式对总偏移量进行估算。
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SLIDING_WINDOW = 1
}

/**
 * 提供瀑布流组件的参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface WaterFlowOptions {

  /**
   * 瀑布流组件的尾部组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  footer?: CustomBuilder;

  /**
   * 瀑布流组件的尾部组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  footerContent?: ComponentContentBase;

  /**
   * 可滚动组件的控制器，与可滚动组件绑定。
   * <p><strong>说明</strong>。
   * <br>不允许和其他滚动类组件，如ArcList、List、Grid、Scroll绑定同一个滚动控制对象。
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  scroller?: Scroller;

  /**
   * 瀑布流项分组，不同分组可以设置不同的列数。
   * <p><strong>说明</strong>。
   * <br>1. 使用分组时，columnsTemplate和rowsTemplate属性将被忽略。
   * <br>2. 使用分组时不支持单独设置footer，可以使用最后一个分组作为尾部组件。
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  sections?: WaterFlowSections;

  /**
   * 瀑布流组件的布局模式。
   *
   * @default ALWAYS_TOP_DOWN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  layoutMode?: WaterFlowLayoutMode;
}

/**
 * frameNode中[getEvent('WaterFlow')](docroot://reference/apis-arkui/js-apis-arkui-frameNode.md#geteventwaterflow19)方法的返回
 * 值，可用于给WaterFlow节点设置滚动事件。
 *
 * UIWaterFlowEvent继承于[UIScrollableCommonEvent]{@link UIScrollableCommonEvent}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface UIWaterFlowEvent extends UIScrollableCommonEvent {

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
   * @param { OnWaterFlowScrollIndexCallback | undefined } callback - onScrollIndex事件的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setOnScrollIndex(callback: OnWaterFlowScrollIndexCallback | undefined): void;
}

/**
 * WaterFlow组件可见区域item变化事件的回调类型。
 *
 * @param { int } first - 当前显示的瀑布流起始位置的索引值。
 * @param { int } last - 当前显示的瀑布流终止位置的索引值。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare type OnWaterFlowScrollIndexCallback = (first: int, last: int) => void;

/**
 * 除支持[通用属性]{@link common}和[滚动组件通用属性](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#属性)外，还支持
 * 以下属性：
 *
 * > **说明：**
 * >
 * > WaterFlow组件使用通用属性[clip<sup>12+</sup>]{@link CommonMethod#clip(value: boolean)}和通用属性
 * > [clip<sup>18+</sup>]{@link CommonMethod#clip(clip: Optional<boolean>)}时默认值都为true。
 * >
 * > WaterFlow组件内容裁剪模式[ContentClipMode<sup>14+</sup>枚举说明]{@link ContentClipMode}为ContentClipMode.CONTENT_ONLY，padding区域会
 * > 被裁剪不显示。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface WaterFlowAttribute extends ScrollableCommonMethod {

  /**
   * 设置当前瀑布流组件布局列的数量，不设置时默认1列。
   *
   * 当value设置为string类型时，使用方法参考[columnsTemplate(value: string)]{@link columnsTemplate}。
   *
   * 当value设置为ItemFillPolicy类型时，将根据WaterFlow组件宽度对应[断点类型](docroot://ui/arkts-layout-development-grid-layout.md#栅格容器断点)确
   * 定列数。
   *
   * 例如，ItemFillPolicy.BREAKPOINT_DEFAULT在组件宽度属于sm及更小的断点区间时显示2列，属于md断点区间时显示3列，属于lg及更大的断点区间时显示5列，且每列均为1fr。
   *
   * @param { string | ItemFillPolicy | undefined } value - 当前瀑布流组件布局列的数量。<br/>取值为undefined时，当前瀑布流组件布局列的数量为1列。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default columnsTemplate(value: string | ItemFillPolicy | undefined): this;

  /**
   * 设置约束尺寸，子组件布局时，进行尺寸范围限制。使用方法参考[示例1](docroot://reference/apis-arkui/arkui-ts/ts-container-waterflow.md#示例1使用基本瀑布流)。
   *
   * @param { ConstraintSizeOptions | undefined } value - 约束尺寸。设置小于0的值，参数不生效。 <br/>**说明：**<br/>1.同时设置
   *     itemConstraintSize和FlowItem的[constraintSize]{@link CommonMethod#constraintSize}属性时，minWidth/minHeight会取其中的最大
   *     值，maxWidth/maxHeight会取其中的最小值，调整后的值作为FlowItem的constraintSize处理。<br/>2.只设置itemConstraintSize时，相当于对WaterFlow所有子组
   *     件设置了相同的constraintSize。<br/>3.itemConstraintSize通过以上两种方式转换成FlowItem的constraintSize后的生效规则与通用属性
   *     [constraintSize]{@link CommonMethod#constraintSize}相同。<br/>取值为undefined时，按默认值处理。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default itemConstraintSize(value: ConstraintSizeOptions | undefined): this;

  /**
   * 设置当前瀑布流组件布局行的数量，不设置时默认1行。
   *
   * 例如，'1fr 1fr 2fr'是将父组件分3行，将父组件允许的高分为4等份，第1行占1份，第2行占1份，第3行占2份。
   *
   * 可使用rowsTemplate('repeat(auto-fill,track-size)')根据给定的行高track-size自动计算行数，其中repeat、auto-fill为关键字，track-size为可设置的高度，支
   * 持的单位包括px、vp、%或有效数字，默认单位为vp。
   *
   * @param { string | undefined } value - 当前瀑布流组件布局行的数量。<br/>默认值：'1fr'<br/>取值为undefined时，按默认值处理。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default rowsTemplate(value: string | undefined): this;

  /**
   * 设置列与列的间距。
   *
   * @param { Length | undefined } value - 列与列的间距。<br/>。
   *     <br>取值应≥0。默认值：0<br/>单位：vp<br/>取值范围：
   *     [0, +∞)，小于0时按0处理。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default columnsGap(value: Length | undefined): this;

  /**
   * 设置行与行的间距。
   *
   * @param { Length | undefined } value - 行与行的间距。<br/>默认值：0<br/>单位：vp<br/>取值范围：
   *     [0, +∞)，小于0时按0处理。<br/>取值为undefined时，按默认值处理。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default rowsGap(value: Length | undefined): this;

  /**
   * 设置布局的主轴方向。
   *
   * @param { FlexDirection | undefined } value -  布局的主轴方向。<br/>默认值：FlexDirection.Column<br/>取值为undefined时，按默认值处理。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default layoutDirection(value: FlexDirection | undefined): this;

  /**
   * 设置预加载的FlowItem数量。
   *
   * 只在[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)和开启了
   * [virtualScroll](docroot://reference/apis-arkui/arkui-ts/ts-rendering-control-repeat.md#virtualscroll)开关的
   * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)中生效，超出显示及缓存范围的FlowItem会被释放。
   *
   * @param { int | undefined } value - 预加载的FlowItem的数量。 <br/>默认值：根据屏幕内显示的节点个数设置，最大值为16。<br/>取值范围：
   *     [0, +∞)，设置为小于0的值时，按1处理。<br/>取值为undefined时，按默认值处理。
   * @returns { this } 瀑布流的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default cachedCount(value: int | undefined): this;

  /**
   * 设置预加载的FlowItem数量，并配置是否显示预加载节点。
   *
   * 配合[clip]{@link CommonMethod#clip(value: boolean)}或
   * [clipContent](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#clipcontent14)属性可以显示出预加载节
   * 点。
   *
   * 只在[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)和开启了
   * [virtualScroll](docroot://reference/apis-arkui/arkui-ts/ts-rendering-control-repeat.md#virtualscroll)开关的
   * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)中生效，超出显示及缓存范围的FlowItem会被释放。
   *
   * @param { int | undefined } count - 预加载的FlowItem的数量。 <br/>默认值：根据屏幕内显示的节点个数设置，最大值为16。<br/>取值范围：
   *     [0, +∞)，设置为小于0的值时，按1处理。<br/>取值为undefined时，按默认值处理。
   * @param { boolean | undefined } show - 被预加载的FlowItem是否需要显示。设置为true时显示预加载的FlowItem，设置为false时不显示预加载的FlowItem。 <br/>
   *     默认值：false<br/>取值为undefined时，按默认值处理。
   * @returns { this } 瀑布流的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default cachedCount(count: int | undefined, show: boolean | undefined): this;

  /**
   * 设置是否同步加载WaterFlow区域内所有子组件。
   *
   * @param { boolean | undefined } enable - 是否同步加载WaterFlow区域内所有子组件。<br/>true表示同步加载，false表示异步加载。<br/>取值为undefined时，同步
   *     加载WaterFlow区域内所有子组件。<br/>默认值：true。<br/>**说明：** <br/>设置为false时，在首次显示、不带动画
   *     [scrollToIndex]{@link Scroller#scrollToIndex}跳转场景，若当帧布局耗时超过50ms，会将WaterFlow区域内尚未布局的子组件延后到下一帧进行布局。
   * @returns { this } 瀑布流的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default syncLoad(enable: boolean | undefined): this;

  /**
   * 设置当前WaterFlow组件是否支持在LazyForEach或Repeat中使用if/else渲染控制语法生成不包含任何子组件的空分支节点。未设置时不支持空分支节点。此属性初次赋值后不支持更新，所以赋值后无法在支持空分支、不
   * 支持空分支行为之间切换。
   *
   * > **说明：**
   * >
   * > 当通过[sections](docroot://reference/apis-arkui/arkui-ts/ts-container-waterflow.md#waterflowoptions对象说明)参数设置了
   * > [WaterFlowSections]{@link WaterFlowSections}分组，或通过
   * > [layoutMode](docroot://reference/apis-arkui/arkui-ts/ts-container-waterflow.md#waterflowoptions对象说明)设置
   * > [SLIDING_WINDOW]{@link WaterFlowLayoutMode}布局模式时，supportEmptyBranchInLazyLoading设为true、false、undefined或不设置
   * > supportEmptyBranchInLazyLoading，空分支后的FlowItem都会显示。
   *
   * @param { boolean | undefined } supported - 当前WaterFlow组件是否支持在
   *     [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)或
   *     [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)中使用
   *     [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)渲染控制语法生成一个不含任何子节点的空分支节点。</br>true表
   *     示显示空分支后的FlowItem；false表示不显示空分支后的FlowItem。</br>值为undefined时，按false处理。
   * @returns { this } 瀑布流的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default supportEmptyBranchInLazyLoading(supported: boolean | undefined): this;

  /**
   * 该接口回调时，事件参数传入即将发生的滑动量，事件处理函数中可根据应用场景计算实际需要的滑动量并作为事件处理函数的返回值返回，瀑布流将按照返回值的实际滑动量进行滑动。
   *
   * 满足以下任一条件时触发该事件：
   *
   * 1. 用户交互（如手指滑动、键鼠操作等）触发滚动。
   * 2. WaterFlow惯性滚动。
   * 3. 调用[fling]{@link Scroller#fling}接口触发滚动。
   *
   * 不触发该事件的条件：
   *
   * 1. 调用除[fling]{@link Scroller#fling}接口外的其他滚动控制接口。
   * 2. 越界回弹。
   * 3. 拖动滚动条。
   *
   * @param { OnScrollFrameBeginCallback | undefined } event - 每帧滚动开始回调函数。<br/>取值为undefined时，不使用回调函数。
   * @returns { this } 瀑布流的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onScrollFrameBegin(event: OnScrollFrameBeginCallback | undefined): this;

  /**
   * 当前瀑布流显示的起始位置/终止位置的子组件发生变化时触发。瀑布流初始化时会触发一次。
   *
   * 瀑布流显示区域上第一个子组件/最后一个组件的索引值有变化就会触发。
   *
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { function | undefined } event - 当前瀑布流显示的起始位置/终止位置的子组件发生变化时触发的回调。<br/>first：当前显示的瀑布流起始位置的索引值。取值范围：
   *     [0, 子节点总数-1]<br/>last：当前显示的瀑布流终止位置的索引值。取值范围：[0, 子节点总数-1]<br/>undefined：不使用该回调函数。
   * @returns { this } 瀑布流的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onScrollIndex(event: ((first: int, last: int) => void) | undefined): this;

  /**
   * 滚动事件回调，WaterFlow滚动前触发。
   *
   * 回调当前帧将要滚动的偏移量和当前滚动状态和滚动操作来源，其中回调的偏移量为计算得到的将要滚动的偏移量值，并非最终实际滚动偏移。可以通过该回调返回值指定滚动组件将要滚动的偏移。
   *
   * @param { OnWillScrollCallback | undefined } handler - WaterFlow滑动前触发的回调。<br/>取值为undefined时，不使用回调函数。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onWillScroll(handler: OnWillScrollCallback | undefined): this;

  /**
   * WaterFlow滑动时触发，返回当前帧滑动的偏移量和当前滑动状态。
   *
   * @param { OnScrollCallback | undefined } handler - WaterFlow滑动时触发的回调。<br/>取值为undefined时，不使用回调函数。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onDidScroll(handler: OnScrollCallback | undefined): this;

  /**
   * 设置WaterFlow选项。
   *
   * @param { WaterFlowOptions } [options] - WaterFlow构造函数选项
   * @returns { WaterFlowAttribute } 返回WaterFlowAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setWaterFlowOptions(options?: WaterFlowOptions): this;

  /**
   * 动态设置WaterFlow组件的属性方法。
   *
   * @param { AttributeModifier<WaterFlowAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<WaterFlowAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 定义瀑布流组件。
 *
 * @param { WaterFlowOptions } [瀑布流参数] - 瀑布流参数
 * @param { CustomBuilder } [content_] - 子组件
 * @returns { WaterFlowAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function WaterFlow(
    options?: WaterFlowOptions, 
    content_?: CustomBuilder,
): WaterFlowAttribute;

/**
 * 定义WaterFlow组件。
 *
 * @param { CustomBuilderT<WaterFlowAttribute> } style_ - 创建WaterFlow的样式
 * @param { CustomBuilder } [content_]
 * @returns { WaterFlowAttribute } WaterFlow的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function WaterFlow(
    style_: CustomBuilderT<WaterFlowAttribute>, 
    content_?: CustomBuilder
): WaterFlowAttribute;