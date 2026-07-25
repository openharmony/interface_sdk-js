/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * 有子组件划入或划出ArcList显示区域时触发的回调。
 *
 * @param { number } start - ArcList显示区域内第一个子组件的索引值。
 * @param { number } end - ArcList显示区域内最后一个子组件的索引值。
 * @param { number } center - ArcList显示区域内中间位置子组件的索引值。
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type ArcScrollIndexHandler = (start: number, end: number, center: number) => void;

/**
 * 包含创建ArcList组件的基础参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface ArkListOptions {

  /**
   * 设置当前ArcList初次加载时视窗起始位置显示的item的索引值。
   *
   * 默认值：0
   *
   * **说明：**
   *
   * 设置为负数或超过了当前ArcList最后一个item的索引值时视为无效取值，无效取值按默认值显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  initialIndex?: number;

  /**
   * 可滚动组件的控制器。与ArcList绑定后，可以通过它控制ArcList的滚动。不设置时不绑定滚动控制器。
   *
   * **说明：**
   *
   * 不允许和其他滚动类组件，如：[List]{@link ./@internal/component/ets/list}、[Grid]{@link ./@internal/component/ets/grid}、
   * [Scroll]{@link ./@internal/component/ets/scroll}和[WaterFlow]{@link ./@internal/component/ets/water_flow}绑定同一个滚动控制对
   * 象。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  scroller?: Scroller;

  /**
   * ArcList的头部组件，用于在列表顶部显示标题或自定义内容。不设置时不显示头部组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  header?: ComponentContent;
}

/**
 * 弧形列表由沿弧形排列的一系列列表项组成，适用于圆形屏幕设备。适合连续、多行呈现同类数据，例如图片和文本。
 *
 * > **说明：**
 * >
 * > - 该组件支持在Phone、PC/2in1、Tablet、TV、Wearable设备上使用。API version 22及以前版本，在Phone、PC/2in1、Tablet、TV上使用会编译告警，但可以正常运行。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export interface ArcListInterface {

  /**
   * 创建弧形列表实例，传入弧形列表配置项参数。
   *
   * @param { ArkListOptions } [options]
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  (options?: ArkListOptions): ArcListAttribute;
}

/**
 * 用于展示弧形列表的子组件，必须配合[ArcList]{@link @ohos.arkui.ArcList}使用。
 *
 * > **说明：**
 * >
 * > - 该组件的父组件只能是[ArcList]{@link @ohos.arkui.ArcList}。
 * >
 * > - 当ArcListItem配合[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)使用时，其子组件在
 * > ArcListItem创建时创建；配合[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)或
 * > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)使用时，或直接作为
 * > [ArcList]{@link @ohos.arkui.ArcList}组件的子组件使用时，其子组件在ArcListItem布局时创建。
 * >
 * > - 该组件支持在Phone、PC/2in1、Tablet、TV、Wearable设备上使用。API version 22及以前版本，在Phone、PC/2in1、Tablet、TV上使用会编译告警，但可以正常运行。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export interface ArcListItemInterface {

  /**
   * 创建弧形列表子组件。
   *
   * @returns { ArcListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  (): ArcListItemAttribute;
}

/**
 * 除支持[通用属性]{@link ./@internal/component/ets/common}外，还支持以下属性（不支持
 * [滚动组件通用属性](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#属性)）：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export declare class ArcListAttribute extends CommonMethod<ArcListAttribute> {

  /**
   * 设置表冠响应灵敏度。
   *
   * @param { Optional<CrownSensitivity> } sensitivity - 表冠响应灵敏度。
   *     <br>默认值：CrownSensitivity.MEDIUM，响应速度适中。
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): ArcListAttribute;

  /**
   * 设置列表子项之间的间距。
   *
   * @param { Optional<LengthMetrics> } space - 列表子项之间的间距。
   *     <br>默认值：LengthMetrics.vp(0)
   *     <br>ArcList子组件的[visibility]{@link CommonMethod#visibility}属性设置为None时不显示，但该子组件上下的space还会生效。
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  space(space: Optional<LengthMetrics>): ArcListAttribute;

  /**
   * 设置滚动条状态。
   *
   * @param { Optional<BarState> } status - 滚动条状态。
   *     <br>默认值：BarState.Auto
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  scrollBar(status: Optional<BarState>): ArcListAttribute;

  /**
   * 设置滚动条的颜色。
   *
   * @param { Optional<ColorMetrics> } color - 设置滚动条颜色。
   *     <br>默认值：ColorMetrics.numeric(0xA9FFFFFF)
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  scrollBarColor(color: Optional<ColorMetrics>): ArcListAttribute;

  /**
   * 设置ArcList滚动条在按压态下的宽度。未设置时，按压态宽度为LengthMetrics.vp(24)。非按压态宽度固定为LengthMetrics.vp(4)，不受该属性影响。
   *
   * @param { Optional<LengthMetrics> } width - ArcList滚动条在按压态下的宽度。
   *     <br>默认值：LengthMetrics.vp(24)
   *     <br>非按压态宽度：LengthMetrics.vp(4)
   *     <br>设置为负值、undefined等异常值时，按滚动条的普通态宽度处理。
   *     <br>单位：vp
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  scrollBarWidth(width: Optional<LengthMetrics>): ArcListAttribute;

  /**
   * 设置列表中ArcListItem的预加载数量，懒加载场景只会预加载ArcList显示区域外上下各cachedCount行的ArcListItem，非懒加载场景会全部加载。懒加载、非懒加载都只布局ArcList显示区域+
   * ArcList显示区域外上下各cachedCount行的ArcListItem。
   *
   * @param { Optional<number> } count - ArcListItem的预加载数量。
   *     <br>默认值：根据屏幕内显示的节点个数设置，最大值为16。
   *     <br>取值范围：[0, +∞)
   *     <br>设置为负数时，按1处理。
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  cachedCount(count: Optional<number>): ArcListAttribute;

  /**
   * 设置当前ArcList是否启用链式联动动效，开启后列表滑动以及顶部和底部拖拽时会有链式联动的效果。
   *
   * 链式联动效果：ArcList内的ArcListItem间隔一定距离，在基本的滑动交互行为下，主动对象驱动从动对象进行联动，驱动效果遵循弹簧物理动效。
   *
   * @param { Optional<boolean> } enable - 是否启用链式联动动效。仅当边缘效果为[EdgeEffect.Spring]{@link EdgeEffect}时，链式联动动效才会生效。
   *     <br>默认值：false，不启用链式联动。true，启用链式联动。
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  chainAnimation(enable: Optional<boolean>): ArcListAttribute;

  /**
   * 设置ArcList组件的子组件在主轴方向的大小信息。
   *
   * @param { Optional<ChildrenMainSize> } size - 通过[ChildrenMainSize]{@link ChildrenMainSize}对象向ArcList组件精确提供所有子组件在主轴方向
   *     的大小信息，能够确保ArcList组件在子组件主轴尺寸不统一、子组件的增删变动、以及使用[scrollToIndex]{@link Scroller#scrollToIndex}等场景时，仍能保持其滑动位置的准确性。进而保
   *     证了[scrollTo]{@link Scroller#scrollTo}能够精准跳转至指定位置，[currentOffset]{@link Scroller#currentOffset}或
   *     [offset]{@link Scroller#offset}准确反映当前的滑动位置，且内置滚动条能够实现平滑移动，避免任何跳跃或突变。从API version 23开始，新增offset接口。
   *     <br> **说明：**
   *     <br>提供的主轴方向大小必须与子组件实际在主轴方向的大小一致，否则可能导致ArcList组件显示异常。子组件在主轴方向大小发生变化或进行增删操作时，必须通过调用ChildrenMainSize对象的方法在变更后通知
   *     ArcList组件，否则可能导致ArcList组件显示异常。
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  childrenMainSize(size: Optional<ChildrenMainSize>): ArcListAttribute;

  /**
   * 设置是否支持滚动手势。
   *
   * @param { Optional<boolean> } enable - 是否支持滚动手势。设置为true时可以通过手指或者鼠标滚动，设置为false时无法通过手指或者鼠标滚动，但不影响控制器
   *     [Scroller]{@link Scroller}的滚动接口。
   *     <br>默认值：true
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  enableScrollInteraction(enable: Optional<boolean>): ArcListAttribute;

  /**
   * 设置是否开启边缘渐隐效果。
   *
   * @param { Optional<boolean> } enable - fadingEdge生效时，会覆盖原组件的`.overlay()`属性。
   *     <br>fadingEdge生效时，建议不在该组件上设置background相关属性，会影响渐隐的显示效果。
   *     <br>fadingEdge生效时，组件会裁剪到边界，设置组件的[clip]{@link CommonMethod#clip(value: boolean)}属性为false不生效。
   *     <br>设置为true时开启边缘渐隐效果，设置为false时不开启边缘渐隐效果。
   *     <br>默认值：false
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  fadingEdge(enable: Optional<boolean>): ArcListAttribute;

  /**
   * 设置摩擦系数，手动滑动滚动区域时生效，仅影响惯性滚动过程。设置为小于等于0的值时，按默认值处理。
   *
   * @param { Optional<number> } friction - 摩擦系数，手动滑动滚动区域时生效，仅影响惯性滚动过程。设置为小于等于0的值时，按默认值处理。
   *     <br>默认值：0.8
   *     <br>取值范围：(0, +∞)
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  friction(friction: Optional<number>): ArcListAttribute;

  /**
   * 限制跟手滑动结束后，惯性滚动动效开始时的最大初始速度。设置为小于等于0的值时，按默认值处理。
   *
   * @param { Optional<number> } speed - 惯性滚动动效开始时的最大初始速度。设置为小于等于0的值时，按默认值处理。
   *     <br>默认值：9000
   *     <br>单位：vp/s
   *     <br>取值范围：(0, +∞)
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  flingSpeedLimit(speed: Optional<number>): ArcListAttribute;

  /**
   * 当子组件划入或划出ArcList的显示区域时，将触发此事件。在ArcList初始化时，此事件会被触发一次。当ArcList显示区域内的首个或末个子组件的索引值发生变化，或是显示区域中心的子组件发生变动时，同样会触发此事件。
   *
   * ArcList的边缘效果为弹簧效果时，在ArcList滑动到边缘后继续滑动以及松手回弹的过程中，不会触发onScrollIndex事件。
   *
   * @param { Optional<ArcScrollIndexHandler> } handler - 有子组件划入或划出ArcList显示区域时触发该回调。
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onScrollIndex(handler: Optional<ArcScrollIndexHandler>): ArcListAttribute;

  /**
   * 列表到达起始位置时触发。
   *
   * 当ArcList进行初始化时，若[initialIndex]{@link ArkListOptions}设定为0，将触发一次事件。当ArcList滚动至起始位置，亦会触发一次事件。在ArcList的边缘效果设置为弹簧效果时，滑动经
   * 过起始位置时会触发一次事件，而在回弹返回起始位置时，将再次触发一次事件。
   *
   * @param { Optional<VoidCallback> } handler - 列表到达起始位置时触发。
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onReachStart(handler: Optional<VoidCallback>): ArcListAttribute;

  /**
   * 列表到达末尾位置时触发。
   *
   * ArcList边缘效果为弹簧效果时，滑动经过末尾位置时触发一次该事件，回弹返回末尾位置时再触发一次该事件。
   *
   * @param { Optional<VoidCallback> } handler - 列表到达末尾位置时触发。
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onReachEnd(handler: Optional<VoidCallback>): ArcListAttribute;

  /**
   * 列表滑动开始时触发。手指拖动列表或列表的滚动条触发的滑动开始时，会触发该事件。使用[Scroller]{@link Scroller}滑动控制器触发的带动画的滑动，动画开始时会触发该事件。
   *
   * @param { Optional<VoidCallback> } handler - 列表滑动开始时触发。
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onScrollStart(handler: Optional<VoidCallback>): ArcListAttribute;

  /**
   * 列表滑动停止时触发。手指拖动列表或列表的滚动条触发的滑动，手指离开屏幕后滑动停止时会触发该事件。使用[Scroller]{@link Scroller}滑动控制器触发的带动画的滑动，动画停止会触发该事件。
   *
   * @param { Optional<VoidCallback> } handler - 列表滑动停止时触发。
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onScrollStop(handler: Optional<VoidCallback>): ArcListAttribute;

  /**
   * 列表滑动时每帧开始前触发，返回当前帧将要滑动的偏移量和当前滑动状态。返回的偏移量为计算得到的将要滑动的偏移量值，并非最终实际滑动偏移。
   *
   * @param { Optional<OnWillScrollCallback> } handler - 列表滑动时每帧开始前触发的回调。
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onWillScroll(handler: Optional<OnWillScrollCallback>): ArcListAttribute;

  /**
   * 列表滑动时触发，返回当前帧滑动的偏移量和当前滑动状态。
   *
   * @param { Optional<OnScrollCallback> } handler - 列表滑动时触发的回调。
   * @returns { ArcListAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onDidScroll(handler: Optional<OnScrollCallback>): ArcListAttribute;
}

/**
 * 除支持[通用属性]{@link ./@internal/component/ets/common}外，还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export declare class ArcListItemAttribute extends CommonMethod<ArcListItemAttribute> {

  /**
   * 用于设置ArcListItem是否自动缩放。开启后，ArcListItem会根据其在弧形列表中的位置自动调整显示尺寸。
   *
   * @param { Optional<boolean> } enable - ArcListItem是否支持自动缩放显示，true表示支持，false表示不支持。
   *     <br>默认值：true，支持自动缩放显示。
   * @returns { ArcListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  autoScale(enable: Optional<boolean>): ArcListItemAttribute;

  /**
   * 用于设置ArcListItem的划出操作。
   *
   * @param { Optional<SwipeActionOptions> } options - ArcListItem划出操作的配置选项，具体配置请参考SwipeActionOptions。未设置时，不配置划出操作。
   * @returns { ArcListItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  swipeAction(options: Optional<SwipeActionOptions>): ArcListItemAttribute;
}

/**
 * 定义ArcList组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export declare const ArcListInstance: ArcListAttribute;

/**
 * 定义ArcListItem组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export declare const ArcListItemInstance: ArcListItemAttribute;

/**
 * 弧形列表由沿弧形排列的一系列列表项组成，适用于圆形屏幕设备。适合连续、多行呈现同类数据，例如图片和文本。
 *
 * > **说明：**
 * >
 * > - 该组件支持在Phone、PC/2in1、Tablet、TV、Wearable设备上使用。API version 22及以前版本，在Phone、PC/2in1、Tablet、TV上使用会编译告警，但可以正常运行。
 *
 * ###### 子组件
 *
 * 仅支持[ArcListItem]{@link @ohos.arkui.ArcList}子组件。
 *
 * > **说明：**
 * >
 * > ArcList的子组件索引值计算规则：
 * >
 * > - 按子组件的顺序依次递增。
 * >
 * > - [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)语句中，只有条件成立的分支内的子组件会参与索引值计算，条件不成立的分支内子组
 * > 件不计算索引值。
 * >
 * > - [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)/
 * > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)语句中，会计算展开所有子组件索引值。
 * >
 * > - [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、
 * > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)和
 * > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)发生变化以后，会更新子组件索引值。
 * >
 * > - ArcList子组件[visibility]{@link CommonMethod#visibility}属性设置为Hidden或None依然会计算索引值。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @uicomponent [since 19]
 * @since 18 dynamic
 * @noninterop
 */
export declare const ArcList: ArcListInterface;

/**
 * 用于展示弧形列表的子组件，必须配合[ArcList]{@link @ohos.arkui.ArcList}使用。
 *
 * > **说明：**
 * >
 * > - 该组件的父组件只能是[ArcList]{@link @ohos.arkui.ArcList}。
 * >
 * > - 当ArcListItem配合[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)使用时，其子组件在
 * > ArcListItem创建时创建；配合[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)或
 * > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)使用时，或直接作为
 * > [ArcList]{@link @ohos.arkui.ArcList}组件的子组件使用时，其子组件在ArcListItem布局时创建。
 * >
 * > - 该组件支持在Phone、PC/2in1、Tablet、TV、Wearable设备上使用。API version 22及以前版本，在Phone、PC/2in1、Tablet、TV上使用会编译告警，但可以正常运行。
 *
 * ###### 子组件
 *
 * 可以包含单个子组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @uicomponent [since 19]
 * @since 18 dynamic
 * @noninterop
 */
export declare const ArcListItem: ArcListItemInterface;