/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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
 * 根据index获取指定Item的主轴大小。
 *
 * @param { number } index - FlowItem在WaterFlow中的索引。<br/>取值范围：[0, 子节点总数-1]
 * @returns { number } 指定index的FlowItem的主轴大小，纵向瀑布流时为高度，横向瀑布流时为宽度，单位vp。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type GetItemMainSizeByIndex = (index: number) => number;

/**
 * FlowItem分组配置信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class SectionOptions {

  /**
   * 分组中FlowItem数量，必须是非负数。若splice、push、update方法收到的分组中有分组的itemsCount小于0，则不会执行该方法。
   * 避免使用itemsCount为0的分组，这可能导致布局计算异常。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  itemsCount: number;

  /**
   * 纵向布局时为列数，横向布局时为行数。
   *
   * 默认值：**1**
   *
   * 小于1的按默认值处理。
   *
   * @default 1 one column in vertical layout, or one row in horizontal layout
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  crossCount?: number;

  /**
   * 瀑布流组件布局过程中获取指定index的FlowItem的主轴大小，纵向瀑布流时为高度，横向瀑布流时为宽度，单位vp。
   *
   * <p><strong>说明</strong>
   * <br>1. 同时使用onGetItemMainSizeByIndex和FlowItem的宽高属性时，主轴大小以onGetItemMainSizeByIndex返回结果为准，onGetItemMainSizeByIndex会覆盖FlowItem的主轴长度。
   * <br>2. 使用onGetItemMainSizeByIndex可以提高瀑布流跳转到指定位置或index时的效率，避免混用设置onGetItemMainSizeByIndex和未设置的分组，会导致布局异常。
   * <br>3. onGetItemMainSizeByIndex返回负数时FlowItem高度为0。
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onGetItemMainSizeByIndex?: GetItemMainSizeByIndex;

  /**
   * 该分组的列间距，不设置该参数时默认使用瀑布流的columnsGap，设置非法值时使用0vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  columnsGap?: Dimension;

  /**
   * 该分组的行间距，不设置该参数时默认使用瀑布流的rowsGap，设置非法值时使用0vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  rowsGap?: Dimension;

  /**
   * 该分组的外边距参数为Length类型时，四个方向外边距同时生效。
   *
   * 默认值：**0**
   *
   * 单位：vp
   *
   * margin设置百分比时，上下左右外边距均以瀑布流的width作为基础值。
   *
   * @default {top: 0, right: 0, bottom: 0, left: 0}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
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
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class WaterFlowSections {

  /**
   * 创建一个瀑布流分组。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor();

  /**
   * 移除或者替换已存在的分组和/或添加新分组。
   *
   * @param { number } start - 从0开始计算的索引，会转换为整数，表示要开始改变分组的位置。<br/>**说明：** <br/>1. 如果索引是负数，则从末尾开始计算，使用`start +
   *     WaterFlowSections.length()`。<br/>2. 如果 `start < -WaterFlowSections.length()`，则使用0。<br/>3. 如果 `start >=
   *     WaterFlowSections.length()`，则在最后添加新分组。
   * @param { number } [deleteCount] - 从0开始计算的索引，会转换为整数，表示要开始改变分组的位置。<br/>**说明：** <br/>1. 如果索引是负数，则从末尾开始计算，使用`start +
   *     WaterFlowSections.length()`。<br/>2. 如果 `start < -WaterFlowSections.length()`，则使用0。<br/>3. 如果 `start >=
   *     WaterFlowSections.length()`，则在最后添加新分组。
   * @param { Array<SectionOptions> } [sections] - 表示要从start开始加入的分组。如果不指定，`splice()`将只从瀑布流中删除分组。
   * @returns { boolean } 分组修改成功返回true；修改失败（要加入的分组中有任意分组的itemsCount不是非负数）返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  splice(start: number, deleteCount?: number, sections?: Array<SectionOptions>): boolean;

  /**
   * 将指定分组添加到瀑布流末尾。
   *
   * @param { SectionOptions } section - 添加到瀑布流末尾的分组。
   * @returns { boolean } 分组添加成功返回true，添加失败（新分组的itemsCount不是非负数）返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  push(section: SectionOptions): boolean;

  /**
   * 修改指定索引分组的配置信息。
   *
   * @param { number } sectionIndex - 从0开始计算的索引，会转换为整数，表示要修改的分组的位置。<br/>**说明：** <br/>1. 如果索引是负数，则从末尾开始计算，使用`sectionIndex
   *     + WaterFlowSections.length()`。<br/>2. 如果`sectionIndex < -WaterFlowSections.length()`，则使用0。<br/>3. 如果`
   *     sectionIndex >= WaterFlowSections.length()`，则在最后添加新分组。
   * @param { SectionOptions } section - 新的分组信息。
   * @returns { boolean } 分组是否更新成功，新分组的itemsCount不是非负数时返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  update(sectionIndex:number, section: SectionOptions): boolean;

  /**
   * 获取瀑布流中所有分组配置信息。
   *
   * @returns { Array<SectionOptions> } 瀑布流中所有分组配置信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  values(): Array<SectionOptions>;

  /**
   * 获取瀑布流中分组数量。
   *
   * @returns { number } 瀑布流中分组数量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  length(): number;
}

/**
* 瀑布流组件布局模式枚举。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum WaterFlowLayoutMode {

  /**
   * 默认的从上到下的布局模式。视窗内的FlowItem依赖视窗上方所有FlowItem的布局信息。因此跳转或切换列数时，需要计算出上方所有的FlowItem的布局信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  ALWAYS_TOP_DOWN = 0,

  /**
   * 移动窗口式的布局模式。只考虑视窗内的布局信息，对视窗上方的FlowItem没有依赖关系，因此向后跳转或切换列数时只需要布局视窗内的FlowItem。
   * 建议优先采用该模式，尤其在应用需要支持屏幕旋转或动态切换列数的场景下。
   *
   * <p><strong>说明</strong>
   * <br> 1. 无动画跳转到较远的位置时，会以目标位置为基准，向前或向后布局FlowItem。这之后如果滑回跳转前的位置，内容的布局效果可能和之前不一致。
   * 这个效果会导致跳转后回滑到顶部时，顶部节点可能不对齐。所以该布局模式下会在滑动到顶部后自动调整布局，保证顶部对齐。
   * 如果有多个分组的情况下，会在滑动结束时调整在视窗内的分组。
   * <br> 2. scroller的currentOffset或offset接口返回的总偏移量在触发跳转或数据更新后不准确，在回滑到顶部时会重新校准。
   * <br> 3. 如果在同一帧内调用跳转（如无动画的scrollToIndex、scrollEdge）和输入偏移量（如滑动手势或滚动动画），两者都会生效。
   * <br> 4. 调用无动画的scrollToIndex进行跳转，如果跳转到较远位置（超过视窗内的FlowItem数量的位置）时，移动窗口模式对总偏移量进行估算。
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SLIDING_WINDOW = 1,
}

/**
 * 瀑布流组件参数对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface WaterFlowOptions {

  /**
   * 设置WaterFlow尾部组件，用于在瀑布流末尾显示自定义内容（如加载提示、底部标识等）。不设置时不显示尾部组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  footer?: CustomBuilder;

  /**
   * 设置WaterFlow尾部组件。
   * 该参数的优先级高于参数footer，即同时设置footer和footerContent时，以footerContent设置的组件为准。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  footerContent?: ComponentContent;

  /**
   * 可滚动组件的控制器，与可滚动组件绑定。
   *
   * <p><strong>说明</strong>
   * <br>不允许和其他滚动类组件，如：ArcList、List、Grid、Scroll和WaterFlow绑定同一个滚动控制对象。
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  scroller?: Scroller;

  /**
   * 设置FlowItem分组，实现同一个瀑布流组件内部各分组使用不同列数混合布局。适用于需要在不同区域使用不同列数布局的场景。不设置时使用统一列数布局。
   *
   * <p><strong>说明</strong>
   * <br>1. 使用分组混合布局时会忽略columnsTemplate和rowsTemplate属性。
   * <br>2. 使用分组混合布局时不支持单独设置footer，可以使用最后一个分组作为尾部组件。
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  sections?: WaterFlowSections;

  /**
   * 设置WaterFlow的布局模式，根据使用场景选择更切合的模式。
   *
   * @default ALWAYS_TOP_DOWN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  layoutMode?: WaterFlowLayoutMode;
}

/**
 * frameNode中
 * [getEvent('WaterFlow')]{@link ./../../../arkui/FrameNode:typeNode.getEvent(node: FrameNode, nodeType: 'WaterFlow')}方法
 * 的返回值，可用于给WaterFlow节点设置滚动事件。
 *
 * UIWaterFlowEvent继承于[UIScrollableCommonEvent]{@link common:UIScrollableCommonEvent}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare interface UIWaterFlowEvent extends UIScrollableCommonEvent {

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
   * 设置[onScrollIndex](docroot://reference/apis-arkui/arkui-ts/ts-container-waterflow.md#onscrollindex11)事件的回调。
   *
   * 方法入参为undefined时，会重置事件回调。
   *
   * @param { OnWaterFlowScrollIndexCallback | undefined } callback - onScrollIndex事件的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setOnScrollIndex(callback: OnWaterFlowScrollIndexCallback | undefined): void;
}

/**
 * WaterFlow组件可见区域item变化事件的回调类型。
 *
 * @param {number} first - 当前显示的瀑布流起始位置的索引值。
 * @param {number} last - 当前显示的瀑布流终止位置的索引值。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare type OnWaterFlowScrollIndexCallback = (first: number, last: number) => void;

/**
 * 瀑布流容器，由“行”和“列”分割的单元格所组成，通过容器自身的排列规则，将不同大小的“项目”自上而下，如瀑布般紧密布局。
 *
 * > **说明：**
 * >
 * > 该组件从API version 9 开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
 * >
 * > WaterFlow组件支持展示瀑布流布局，不支持编辑模式和子元素拖动功能。
 * >
 * > 组件内部已绑定手势实现跟手滚动等功能，需要增加自定义手势操作时请参考[手势拦截增强]{@link common}进行处理。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
interface WaterFlowInterface {

  /**
   * 创建瀑布流容器。
   *
   * @param { WaterFlowOptions } options - 瀑布流组件参数。
   * @returns { WaterFlowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  (options?: WaterFlowOptions): WaterFlowAttribute;
}

/**
 * 除支持[通用属性]{@link common}和[滚动组件通用属性](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#属性)外，还支持
 * 以下属性：
 *
 * 除支持[通用事件]{@link common}和[滚动组件通用事件](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#事件)外，还支持
 * 以下事件：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare class WaterFlowAttribute extends ScrollableCommonMethod<WaterFlowAttribute> {

  /**
   * 设置当前瀑布流组件布局列的数量，不设置时默认1列。
   *
   * 例如，'1fr 1fr 2fr' 是将父组件分3列，将父组件允许的宽分为4等份，第1列占1份，第2列占1份，第3列占2份。
   *
   * 可使用columnsTemplate('repeat(auto-fill,track-size)')根据给定的列宽track-size自动计算列数，其中repeat、auto-fill为关键字，track-size为可设置的宽度，
   * 支持的单位包括px、vp、%或有效数字，默认单位为vp，使用方法参见
   * [示例2](docroot://reference/apis-arkui/arkui-ts/ts-container-waterflow.md#示例2自动计算列数)。
   *
   * @param { string } value - 当前瀑布流组件布局列的数量。<br/>默认值：'1fr'
   * @returns { WaterFlowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  columnsTemplate(value: string): WaterFlowAttribute;

  /**
   * 设置当前瀑布流组件布局列的数量，不设置时默认1列。
   *
   * 当value设置为string类型时，使用方法参考
   * [columnsTemplate(value: string)](docroot://reference/apis-arkui/arkui-ts/ts-container-waterflow.md#columnstemplate)
   * 。
   *
   * 当value设置为ItemFillPolicy类型时，将根据WaterFlow组件宽度对应[断点类型](docroot://ui/arkts-layout-development-grid-layout.md#栅格容器断点)确定列
   * 数。
   *
   * 例如，ItemFillPolicy.BREAKPOINT_DEFAULT在组件宽度属于sm及更小的断点区间时显示2列，属于md断点区间时显示3列，属于lg及更大的断点区间时显示5列，且每列均为1fr。
   *
   * @param { string | ItemFillPolicy } value - 当前瀑布流组件布局列的数量。
   * @returns { WaterFlowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  columnsTemplate(value: string | ItemFillPolicy): WaterFlowAttribute;

  /**
   * 设置约束尺寸，子组件布局时，进行尺寸范围限制。使用方法参考[示例1](docroot://reference/apis-arkui/arkui-ts/ts-container-waterflow.md#示例1使用基本瀑布流)。
   *
   * @param { ConstraintSizeOptions } value - 约束尺寸。设置小于0的值，参数不生效。 <br/>**说明：**<br/>1.同时设置itemConstraintSize和FlowItem的
   *     [constraintSize](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#constraintsize)属性时，
   *     minWidth/minHeight会取其中的最大值，maxWidth/maxHeight会取其中的最小值，调整后的值作为FlowItem的constraintSize处理。<br/>2.只设置
   *     itemConstraintSize时，相当于对WaterFlow所有子组件设置了相同的constraintSize。<br/>3.itemConstraintSize通过以上两种方式转换成FlowItem的
   *     constraintSize后的生效规则与通用属性
   *     [constraintSize](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#constraintsize)相同。
   * @returns { WaterFlowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  itemConstraintSize(value: ConstraintSizeOptions): WaterFlowAttribute;

  /**
   * 设置当前瀑布流组件布局行的数量，不设置时默认1行。
   *
   * 例如，'1fr 1fr 2fr'是将父组件分3行，将父组件允许的高分为4等份，第1行占1份，第2行占1份，第3行占2份。
   *
   * 可使用rowsTemplate('repeat(auto-fill,track-size)')根据给定的行高track-size自动计算行数，其中repeat、auto-fill为关键字，track-size为可设置的高度，支持的
   * 单位包括px、vp、%或有效数字，默认单位为vp。
   *
   * @param { string } value - 当前瀑布流组件布局行的数量。<br/>默认值：'1fr'
   * @returns { WaterFlowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  rowsTemplate(value: string): WaterFlowAttribute;

  /**
   * 设置列与列的间距。
   *
   * @param { Length } value - 列与列的间距。 <br/>默认值：0<br/>取值范围：[0, +∞)，小于0时按0处理。
   * @returns { WaterFlowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  columnsGap(value: Length): WaterFlowAttribute;

  /**
   * 设置行与行的间距。
   *
   * @param { Length } value - 行与行的间距。 <br/>默认值：0<br/>取值范围：[0, +∞)，小于0时按0处理。
   * @returns { WaterFlowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  rowsGap(value: Length): WaterFlowAttribute;

  /**
   * 设置布局的主轴方向。
   *
   * @param { FlexDirection } value - 布局的主轴方向。<br/>默认值：FlexDirection.Column
   * @returns { WaterFlowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  layoutDirection(value: FlexDirection): WaterFlowAttribute;

  /**
   * 设置前后两个方向的嵌套滚动模式，实现与父组件的滚动联动。使用方法参考
   * [嵌套滚动实现方式二](docroot://reference/apis-arkui/arkui-ts/ts-container-scroll.md#示例3嵌套滚动实现方式二)。
   *
   * @param { NestedScrollOptions } value - 嵌套滚动选项。
   * @returns { WaterFlowAttribute } 瀑布流组件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  nestedScroll(value: NestedScrollOptions): WaterFlowAttribute;

  /**
   * 设置是否支持滚动手势。
   *
   * > **说明：**
   * >
   * > 组件无法通过鼠标按下拖动操作进行滚动。
   *
   * @param { boolean } value - 是否支持滚动手势。设置为true时可以通过手指或者鼠标滚动，设置为false时无法通过手指或者鼠标滚动，但不影响控制器
   *     [Scroller]{@link Scroller}的滚动接口。<br/>默认值：true
   * @returns { WaterFlowAttribute } 瀑布流组件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableScrollInteraction(value: boolean): WaterFlowAttribute;

  /**
   * 设置摩擦系数，手动划动滚动区域时生效，仅影响惯性滚动过程，对惯性滚动过程中的链式效果有间接影响。
   *
   * @param { number | Resource } value - 摩擦系数。<br/>默认值：非可穿戴设备为0.6，可穿戴设备为0.9。<br/>从API version 11开始，非可穿戴设备默认值为0.7。<br/>从
   *     API version 12开始，非可穿戴设备默认值为0.75。<br/>取值范围：(0, +∞)，设置为小于等于0的值时，按默认值处理。
   * @returns { WaterFlowAttribute } 瀑布流组件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  friction(value: number | Resource): WaterFlowAttribute;

  /**
   * 设置预加载的FlowItem数量。
   *
   * 只在[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)和开启了
   * [virtualScroll](docroot://reference/apis-arkui/arkui-ts/ts-rendering-control-repeat.md#virtualscroll)开关的
   * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)中生效，超出显示及缓存范围的FlowItem会被释放。
   *
   * @param { number } value - 预加载的FlowItem的数量。 <br/>默认值：根据屏幕内显示的节点个数设置，最大值为16。<br/>取值范围：[0, +∞)，设置为小于0的值时，按1处理。
   * @returns { WaterFlowAttribute } 瀑布流组件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  cachedCount(value: number): WaterFlowAttribute;

  /**
   * 设置预加载的FlowItem数量，并配置是否显示预加载节点。
   *
   * 配合[clip](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-sharp-clipping.md#clip12)或
   * [clipContent](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#clipcontent14)属性可以显示出预加载节点。
   *
   * 只在[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)和开启了virtualScroll开关的
   * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)中生效，超出显示及缓存范围的FlowItem会被释放。
   *
   * @param { number } count - 预加载的FlowItem的数量。 <br/>默认值：根据屏幕内显示的节点个数设置，最大值为16。<br/>取值范围：[0, +∞)，设置为小于0的值时，按1处理。
   * @param { boolean } show - 被预加载的FlowItem是否需要显示。设置为true时显示预加载的FlowItem，设置为false时不显示预加载的FlowItem。 <br/> 默认值：false
   * @returns { WaterFlowAttribute } 瀑布流组件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  cachedCount(count: number, show: boolean): WaterFlowAttribute;

  /**
   * 设置是否同步加载WaterFlow区域内所有子组件。
   *
   * @param { boolean } enable - 是否同步加载WaterFlow区域内所有子组件。<br/>true表示同步加载，false表示异步加载。<br/>默认值：true。<br/>**说明：** <br/>设置为
   *     false时，在首次显示、不带动画[scrollToIndex]{@link scroll:Scroller.scrollToIndex}跳转场景，若当帧布局耗时超过50ms，会将WaterFlow区域内尚未布局的子组件延
   *     后到下一帧进行布局。
   * @returns { WaterFlowAttribute } 瀑布流组件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  syncLoad(enable: boolean): WaterFlowAttribute;

  /**
   * 设置当前WaterFlow组件是否支持在LazyForEach或Repeat中使用if/else渲染控制语法生成不包含任何子组件的空分支节点。未设置时不支持空分支节点。此属性初次赋值后不支持更新，所以赋值后无法在支持空分支、不支持
   * 空分支行为之间切换。
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
   *     [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)渲染控制语法生成一个不含任何子节点的空分支节点。</br>true表示显
   *     示空分支后的FlowItem；false表示不显示空分支后的FlowItem。</br>值为undefined时，按false处理。
   * @returns { WaterFlowAttribute } 瀑布流组件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  supportEmptyBranchInLazyLoading(supported: boolean | undefined): WaterFlowAttribute;

  /**
   * 瀑布流内容到达起始位置时触发。
   *
   * @param { function } event - 瀑布流内容到达起始位置时触发的回调。
   * @returns { WaterFlowAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onReachStart(event: () => void): WaterFlowAttribute;

  /**
   * 瀑布流内容到达末尾位置时触发。
   *
   * @param { function } event - 瀑布流内容到达末尾位置时触发的回调。
   * @returns { WaterFlowAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onReachEnd(event: () => void): WaterFlowAttribute;

  /**
   * 该接口回调时，事件参数传入即将发生的滑动量，事件处理函数中可根据应用场景计算实际需要的滑动量并作为事件处理函数的返回值返回，瀑布流将按照返回值的实际滑动量进行滑动。
   *
   * 满足以下任一条件时触发该事件：
   *
   * 1. 用户交互（如手指滑动、键鼠操作等）触发滚动。
   * 2. WaterFlow惯性滚动。
   * 3. 调用[fling]{@link scroll:Scroller.fling}接口触发滚动。
   *
   * 不触发该事件的条件：
   *
   * 1. 调用除[fling]{@link scroll:Scroller.fling}接口外的其他滚动控制接口。
   * 2. 越界回弹。
   * 3. 拖动滚动条。
   *
   * @param { function } event - Callback triggered when each frame scrolling starts. [since 10 - 19]
   * @param { OnScrollFrameBeginCallback } event - 每帧滚动开始回调函数。 [since 20]
   * @returns { WaterFlowAttribute } 瀑布流组件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onScrollFrameBegin(event: OnScrollFrameBeginCallback): WaterFlowAttribute;

  /**
   * 当前瀑布流显示的起始位置/终止位置的子组件发生变化时触发。瀑布流初始化时会触发一次。
   *
   * @param { function } event - 回调函数，瀑布流显示的起始位置/终止位置的子组件发生变化时触发。
   *     "first"：当前显示的瀑布流起始位置的索引值，
   *     "last"：当前显示的瀑布流终止位置的索引值。
   * @returns { WaterFlowAttribute } 瀑布流组件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onScrollIndex(event: (first: number, last: number) => void): WaterFlowAttribute;
}

/**
 * 瀑布流容器，由“行”和“列”分割的单元格所组成，通过容器自身的排列规则，将不同大小的“项目”自上而下，如瀑布般紧密布局。
 *
 * > **说明：**
 * >
 * > 该组件从API version 9 开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
 * >
 * > WaterFlow组件支持展示瀑布流布局，不支持编辑模式和子元素拖动功能。
 * >
 * > 组件内部已绑定手势实现跟手滚动等功能，需要增加自定义手势操作时请参考[手势拦截增强]{@link common}进行处理。
 *
 * ###### 子组件
 *
 * 仅支持[FlowItem]{@link flow_item}子组件和自定义组件。自定义组件在WaterFlow下使用时，建议使用FlowItem作为自定义组件的顶层组件，不建议给自定义组件设置属性和事件方法。
 *
 * 支持通过渲染控制类型（[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、
 * [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)、
 * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)和
 * [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)）动态生成子组件，更推荐使用LazyForEach或Repeat以优化性能。
 *
 * > **说明：**
 * >
 * > WaterFlow子组件的visibility属性设置为None时不显示，但该子组件周围的columnsGap、rowsGap、margin仍会生效。
 * > >  在涉及大量子组件的情况下，建议采用懒加载、缓存数据、组件复用、固定宽高以及布局优化等方法，以提升性能和减少内存占用。最佳实践请参考
 * > [优化瀑布流加载慢丢帧问题](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-waterflow-performance-optimization)
 * > 。
 * >
 * > 纵向布局时，WaterFlow会计算每一列中已放置子组件的累计高度，并将新子组件放入累计高度最小的那一列，以保持整体布局紧凑。
 * >
 * > 若多个列的高度相同，优先放入最左边的列。在RTL模式下，优先放入最右边的列。
 * >
 * > 从API version 21开始，WaterFlow单个子组件的宽高最大为16777216px；API version 20及之前，WaterFlow单个子组件的宽高最大为1000000px。子组件超出该大小可能导致滚动或显示异
 * > 常。
 *
 * ###### WaterFlowOptions对象说明
 *
 * 瀑布流组件参数对象。
 *
 * **系统能力：** SystemCapability.ArkUI.ArkUI.Full
 *
 * | 名称     | 类型                                        | 只读 | 可选 | 说明                                     |
 * | ---------- | ----------------------------------------------- | ------ | -- | -------------------------------------------- |
 * | footer |  [CustomBuilder](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuilder8) | 否   | 是 | 设置WaterFlow尾部组件，用于在瀑布流末尾显示自定义内容（如加载提示、底部标识等）。不设置时不显示尾部组件。<br/>**说明：** <br/>使用方法参见[示例1](docroot://reference/apis-arkui/arkui-ts/ts-container-waterflow.md#示例1使用基本瀑布流)。<br/>**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。 |
 * | footerContent<sup>18+</sup> | [ComponentContent]{@link ./../../../arkui/ComponentContent} | 否 | 是 | 设置WaterFlow尾部组件。<br/>该参数的优先级高于参数footer，即同时设置footer和footerContent时，以footerContent设置的组件为准。<br/>**原子化服务API：** 从API version 18开始，该接口支持在原子化服务中使用。 |
 * | scroller | [Scroller]{@link scroll:Scroller} | 否   | 是 | 可滚动组件的控制器，与可滚动组件绑定。<br/>**说明：** <br/>不允许和其他滚动类组件，如：[ArcList]{@link ./../../../@ohos.arkui.ArcList}、[List]{@link list}、[Grid]{@link grid}、[Scroll]{@link scroll}和[WaterFlow]{@link water_flow}绑定同一个滚动控制对象。<br/>**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。 |
 * | sections<sup>12+</sup> |  [WaterFlowSections]{@link WaterFlowSections} | 否   | 是 | 设置FlowItem分组，实现同一个瀑布流组件内部各分组使用不同列数混合布局。适用于需要在不同区域使用不同列数布局的场景。不设置时使用统一列数布局。<br/>**说明：** <br/>1. 使用分组混合布局时会忽略[columnsTemplate](docroot://reference/apis-arkui/arkui-ts/ts-container-waterflow.md#columnstemplate)和[rowsTemplate](docroot://reference/apis-arkui/arkui-ts/ts-container-waterflow.md#rowstemplate)属性。<br/>2. 使用分组混合布局时不支持单独设置footer，可以使用最后一个分组作为尾部组件。<br/>**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。  |
 * | layoutMode<sup>12+</sup> |[WaterFlowLayoutMode]{@link WaterFlowLayoutMode} | 否 | 是 | 设置WaterFlow的布局模式，根据使用场景选择更切合的模式。<br/>**说明：** <br/>默认值：[ALWAYS_TOP_DOWN]{@link WaterFlowLayoutMode}。<br/>**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。 |
 *
 * ###### SectionOptions<sup>12+</sup>对象说明
 *
 * FlowItem分组配置信息。
 *
 * **原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。
 *
 * **系统能力：** SystemCapability.ArkUI.ArkUI.Full
 *
 * | 名称 | 类型 | 只读 | 可选 | 说明 |
 * |------|-----|-----|----|-----|
 * | itemsCount | number | 否 | 否 | 分组中FlowItem数量，必须是非负数。若splice、push、update方法收到的分组中有分组的itemsCount小于0，则不会执行该方法。 避免使用itemsCount为0的分组，这可能导致布局计算异常。|
 * | crossCount | number | 否 | 是 | 纵向布局时为列数，横向布局时为行数，默认值：1。小于1的按默认值处理。 |
 * | columnsGap | [Dimension]{@link units:Dimension} | 否 | 是 | 该分组的列间距，不设置该参数时默认使用瀑布流的[columnsGap](docroot://reference/apis-arkui/arkui-ts/ts-container-waterflow.md#columnsgap)，设置非法值时使用0vp。 |
 * | rowsGap | [Dimension]{@link units:Dimension} | 否 | 是 | 该分组的行间距，不设置该参数时默认使用瀑布流的[rowsGap](docroot://reference/apis-arkui/arkui-ts/ts-container-waterflow.md#rowsgap)，设置非法值时使用0vp。 |
 * | margin | [Margin]{@link units:Margin} \| [Dimension]{@link units:Dimension} | 否 | 是 | 该分组的外边距参数为Length类型时，四个方向外边距同时生效。<br>默认值：0<br>单位：vp<br>margin设置百分比时，上下左右外边距均以瀑布流的width作为基础值。 |
 * | onGetItemMainSizeByIndex | [GetItemMainSizeByIndex]{@link GetItemMainSizeByIndex} | 否 | 是 | 瀑布流组件布局过程中获取指定index的FlowItem的主轴大小，纵向瀑布流时为高度，横向瀑布流时为宽度，单位vp。<br/>**说明：** <br/>1. 同时使用onGetItemMainSizeByIndex和FlowItem的宽高属性时，主轴大小以onGetItemMainSizeByIndex返回结果为准，onGetItemMainSizeByIndex会覆盖FlowItem的主轴长度。<br/>2. 使用onGetItemMainSizeByIndex可以提高瀑布流跳转到指定位置或index时的效率，避免混用设置onGetItemMainSizeByIndex和未设置的分组，会导致布局异常。<br/>3. onGetItemMainSizeByIndex返回负数时FlowItem高度为0。 |
 *
 * ###### WaterFlowLayoutMode<sup>12+</sup>枚举说明
 *
 * 瀑布流组件布局模式枚举。
 *
 * **原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。
 *
 * **系统能力：** SystemCapability.ArkUI.ArkUI.Full
 *
 * | 名称 | 值 | 说明 |
 * | ------ | ------ | -------------------- |
 * | ALWAYS_TOP_DOWN | 0 | 默认的从上到下的布局模式。视窗内的FlowItem依赖视窗上方所有FlowItem的布局信息。因此跳转或切换列数时，需要计算出上方所有的FlowItem的布局信息。 |
 * | SLIDING_WINDOW | 1 | 移动窗口式的布局模式。只考虑视窗内的布局信息，对视窗上方的FlowItem没有依赖关系，因此向后跳转或切换列数时只需要布局视窗内的FlowItem。建议优先采用该模式，尤其在应用需要支持屏幕旋转或动态切换列数的场景下。 <br/>**说明：** <br/>1. 无动画跳转到较远的位置时，会以目标位置为基准，向前或向后布局FlowItem。这之后如果滑回跳转前的位置，内容的布局效果可能和之前不一致。 这个效果会导致跳转后回滑到顶部时，顶部节点可能不对齐。所以该布局模式下会在滑动到顶部后自动调整布局，保证顶部对齐。在有多个分组的情况下，会在滑动结束时调整在视窗内的分组。<br/> 2. [scroller](docroot://reference/apis-arkui/arkui-ts/ts-container-waterflow.md#waterflowoptions对象说明)的[currentOffset]{@link scroll:Scroller.currentOffset}或[offset]{@link scroll:Scroller.offset}接口返回的总偏移量在触发跳转或数据更新后不准确，在回滑到顶部时会重新校准，从API version 23开始，新增offset接口。 <br/> 3. 如果在同一帧内调用跳转（如无动画的[scrollToIndex]{@link scroll:Scroller.scrollToIndex}、[scrollEdge]{@link scroll:Scroller.scrollEdge}）和输入偏移量（如滑动手势或滚动动画），两者都会生效。 <br/> 4. 调用无动画的[scrollToIndex]{@link scroll:Scroller.scrollToIndex}进行跳转，如果跳转到较远位置（超过视窗内的FlowItem数量的位置）时，移动窗口模式对总偏移量进行估算。 <br/> 5. 仅在API version 18及以上版本中支持滚动条[scrollBar](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#scrollbar11)显示。低于此版本时，设置滚动条将不显示。|
 *
 * | 对比维度 | ALWAYS_TOP_DOWN (默认) | SLIDING_WINDOW |
 * |---------|------------------------|----------------|
 * | 适用场景 | 固定列数、简单瀑布流 | 动态列数、大数据量、屏幕旋转 |
 * | 布局策略 | 从顶部开始完整布局 | 滑动窗口式布局 |
 * | 性能特点 | 依赖上方所有 FlowItem | 只考虑视窗内布局 |
 * | 跳转效率 | 需要计算上方所有布局 | 快速跳转，无需完整计算 |
 * | 列数切换 | 需要重新计算全部布局 | 只重新布局视窗内容 |
 * | 屏幕旋转 | 支持，但性能较差 | 支持，性能好 |
 * | 滚动条显示 | 始终支持 | API 18+ 支持 |
 * | 布局一致性 | 始终保持一致 | 跳转后可能不一致 |
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare const WaterFlow: WaterFlowInterface;

/**
 * 瀑布流组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare const WaterFlowInstance: WaterFlowAttribute;