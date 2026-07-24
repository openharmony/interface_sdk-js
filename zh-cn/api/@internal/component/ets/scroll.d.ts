/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * 滚动方向枚举。
 *
 * FREE（自由滚动）模式下支持的能力：
 *
 * > **说明：**
 * >
 * > - `edgeEffect`属性仅支持`Spring`和`None`边缘滑动效果。
 * >
 * > - `onWillScroll`回调仅支持在跟手滑动阶段重载偏移量。
 * >
 * > - `onScrollEdge`回调只在到达边缘时触发一次，回弹后不会重复触发。
 * >
 * > - 在抛滑动画过程中切换边缘模式不会打断动画。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum ScrollDirection {

  /**
   * 仅支持竖直方向滚动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Vertical,

  /**
   * 仅支持水平方向滚动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Horizontal,

  /**
   * 支持水平和垂直方向滚动
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ScrollDirection#FREE
   */
  Free,

  /**
   * 不可滚动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  None,

  /**
   * 自由滚动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  FREE = 4,
}

/**
 * 对齐方式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ScrollAlign {

  /**
   * 首部对齐。指定item首部与滚动容器组件首部对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  START,

  /**
   * 居中对齐。指定item主轴方向居中对齐于滚动容器组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  CENTER,

  /**
   * 尾部对齐。指定item尾部与滚动容器组件尾部对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  END,

  /**
   * 自动对齐。
   *
   * 若指定item完全处于显示区，不做调整。否则依照滑动距离最短的原则，将指定item首部对齐或尾部对齐于滚动容器组件，使指定item完全处于显示区。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  AUTO,
}

/**
 * 滑动偏移量对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface OffsetResult {

  /**
   * 水平滑动偏移。
   *
   * 单位：vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  xOffset: number;

  /**
   * 竖直滑动偏移。
   *
   * 单位：vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  yOffset: number;
}

/**
 * 滚动到边缘位置的参数选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface ScrollEdgeOptions {

  /**
   * 滚动到边缘位置的固定速度。设置为小于等于0的值时该参数不生效。
   *
   * @default 0vp/s
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  velocity?: number;
}

/**
 * 滑动到指定Index的参数选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface ScrollToIndexOptions {

  /**
   * 滚动到指定索引的额外偏移量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  extraOffset?: LengthMetrics;
}

/**
 * 自定义滚动动效的参数选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface ScrollAnimationOptions {

  /**
   * 滚动时长。
   *
   * <p><strong>说明</strong>
   * <br>设置为小于0的值时，按默认值处理。
   * </p>
   *
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  duration?: number;

  /**
   * 滚动曲线。
   *
   * @default Curve.Ease
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  curve?: Curve | ICurve;

  /**
   * 是否启用过滚动。
   *
   * <p><strong>说明</strong>
   * <br> 设置为<em>true</em>时可以滚动超出边界并触发回弹动画，同时组件的<em>edgeEffect</em>属性需设置为EdgeEffect.Spring。
   * </p>
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  canOverScroll?: boolean;
}

/**
 * 初始滚动偏移量的参数选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OffsetOptions {

  /**
   * 水平滚动偏移量。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  xOffset?: Dimension;

  /**
   * 竖直滚动偏移量。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  yOffset?: Dimension;
}

/**
 * frameNode中[getEvent('Scroll')]{@link ../../../arkui/FrameNode:typeNode.getEvent(node: FrameNode, nodeType: 'Scroll')}
 * 方法的返回值，可用于给Scroll节点设置滚动事件。
 *
 * UIScrollEvent继承于[UIScrollableCommonEvent]{@link UIScrollableCommonEvent}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare interface UIScrollEvent extends UIScrollableCommonEvent {

  /**
   * [onWillScroll]{@link ScrollAttribute#onWillScroll}事件的回调。
   *
   * 方法入参为undefined时，会重置事件回调。
   *
   * @param { ScrollOnWillScrollCallback | undefined } callback - onWillScroll事件的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setOnWillScroll(callback: ScrollOnWillScrollCallback | undefined): void;

  /**
   * [onDidScroll]{@link ScrollAttribute#onDidScroll}事件的回调。
   *
   * 方法入参为undefined时，会重置事件回调。
   *
   * @param { ScrollOnScrollCallback | undefined } callback - onDidScroll事件的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setOnDidScroll(callback: ScrollOnScrollCallback | undefined): void;
}

/**
 * 可滚动容器组件的控制器，可以将此组件绑定至容器组件，然后通过它控制容器组件的滚动。同一个控制器不可以控制多个容器组件，目前支持绑定到ArcList、ArcScrollBar、List、Scroll、ScrollBar、Grid、
 * WaterFlow上。
 *
 * > **说明：**
 * >
 * > 1. Scroller控制器与滚动容器组件的绑定发生在组件创建阶段。
 *
 * > 2. Scroller控制器与滚动容器组件绑定后才可以正常调用Scroller方法，否则根据调用接口不同会不生效或者抛异常。
 *
 * > 3. 以[aboutToAppear](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoappear)为例，
 * > aboutToAppear在创建自定义组件的新实例后，在执行其build()方法之前执行。因此如果滚动组件在自定义组件build内，在该自定义组件aboutToAppear执行时，内部滚动组件还没有创建，是不能正常调用上述
 * > Scroller方法的。
 *
 * > 4. 以[onAppear]{@link CommonMethod#onAppear}为例，组件挂载显示后触发此回调。因此在滚动组件的onAppear回调执行时，滚动组件已经创建并已经和Scroller绑定成功，是可以正常调用
 * > Scroller方法的。
 *
 * ###### 导入对象
 *
 * ```ts
 * scroller: Scroller = new Scroller();
 * ```
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare class Scroller {

  /**
   * Scroller的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  constructor();

  /**
   * 滑动到指定位置，可用于目录跳转、返回顶部、搜索结果定位等场景。
   *
   * > **说明：**
   * >
   * > - scrollTo动画速度大于200vp/s时，滚动组件区域内的组件不响应点击事件。
   * >
   * > - 各组件行为存在差异：
   * >
   * > - [ArcList]{@link @ohos.arkui.ArcList}和[List]{@link ./list}组件会对所有经过的item进行加载和布局。
   * >
   * > - Grid组件和[SLIDING_WINDOW]{@link WaterFlowLayoutMode}模式的[WaterFlow]{@link ./water_flow}组件在跳转距离较大（大于2倍组件主轴高度）时，会直接估
   * > 算出要显示的item。跳转指一帧滑动。
   * >
   * > - [ALWAYS_TOP_DOWN]{@link WaterFlowLayoutMode}模式的WaterFlow组件向后跳转（即dx或dy为正值时）会加载和布局所有经过的item，向前跳转（即dx或dy为负值时）会直接跳转
   * > 到对应位置。跳转指一帧滑动。
   *
   * @param { object } value [since 7 - 17]
   * @param { ScrollOptions } options - 滑动到指定位置的参数，包含xOffset、yOffset、animation、canOverScroll等字段，用于指定滚动目标位置和滚动行
   *     为。 [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollTo(options: ScrollOptions);

  /**
   * 滚动到容器边缘，不区分滚动轴方向，Edge.Top和Edge.Start表现相同，Edge.Bottom和Edge.End表现相同。可用于返回顶部、跳转到内容末尾等场景。
   *
   * Scroll组件默认有动画，Grid、List、WaterFlow组件默认无动画。
   *
   * @param { Edge } value - 滚动到的边缘位置。
   * @param { ScrollEdgeOptions } [options] - 设置滚动到边缘位置的模式。
   *     <br><em>原子化服务API</em>：该API可在原子化服务中使用，从API version 12开始。 [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollEdge(value: Edge, options?: ScrollEdgeOptions);

  /**
   * 滚动类组件根据传入的初始速度进行惯性滚动，可用于模拟抛滑效果。
   *
   * @param { number } velocity - 惯性滚动的初始速度值。单位：vp/s<br/>**说明：**<br/>velocity值设置为0时，本次滚动不生效且不会产生滚动动画。如果值为正数，则向顶部滚动；如果值为负
   *     数，则向底部滚动。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100004 - Controller not bound to a component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fling(velocity: number): void;

  /**
   * 滚动到下一页或者上一页。
   *
   * @param { object } value [since 9 - 13]
   * @param { ScrollPageOptions } value - 设置翻页模式。包含next（是否向下翻页）和animation（是否开启翻页动画）字段，用于指定翻页行为。 [since 14]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  scrollPage(value: ScrollPageOptions);

  /**
   * 滚动到下一页或者上一页。
   *
   * @param { object } value - next：是否向下翻页。true表示向下翻页，false表示向上翻页。
   *     <br> direction：设置滚动方向为水平或竖直方向。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead Scroller#scrollPage
   */
  scrollPage(value: { next: boolean; direction?: Axis });

  /**
   * 获取当前的滚动总偏移量。
   *
   * > **说明：**
   * >
   * > 1. 当Scroller没有和组件绑定时，该接口会返回undefined，但是接口中没有声明。推荐使用[offset]{@link Scroller#offset}函数，其返回类型显式包含undefined。
   * >
   * > 2. Grid、List、WaterFlow组件有懒加载机制，组件内容没有加载并布局完成时，内容总偏移量通过估算得到，估算结果可能会有误差。其中List组件可以通过
   * > [childrenMainSize]{@link ListAttribute#childrenMainSize}属性解决估算不准确的问题，Grid与WaterFlow估算不准暂无解决方案。
   *
   * @returns { OffsetResult } 返回当前的滚动总偏移量。xOffset表示水平滚动总偏移量，yOffset表示竖直滚动总偏移量。<br/> [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  currentOffset() : OffsetResult;

  /**
   * 获取当前的滚动总偏移量。除接口声明有undefined以外，其他与[currentOffset]{@link Scroller#currentOffset}接口保持一致。
   *
   * @returns { OffsetResult | undefined } 返回当前的滚动总偏移量。xOffset表示水平滚动总偏移量，yOffset表示竖直滚动总偏移量。当Scroller没有和组件绑定时，该接口会返回
   *     undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  offset() : OffsetResult | undefined;

  /**
   * 滑动到指定Index，支持设置滑动额外偏移量。
   *
   * 开启smooth动画时，会对经过的所有item进行加载和布局计算。当大量加载item时会导致性能问题，开发者应先调用scrollToIndex不带动画跳转到目标附近位置，再调用scrollToIndex带动画滚动到目标位置，以优化
   * 性能。
   *
   * > **说明：**
   * >
   * > 1. 仅支持ArcList、Grid、List、WaterFlow组件。
   * >
   * > 2. 在[LazyForEach]{@link ./lazy_for_each}、[ForEach]{@link ./for_each}、[Repeat]{@link ./repeat}刷新数据源时，需确保在数据刷新完成之后再
   * > 调用此接口。
   * >
   * > 3. 从API version 11开始，在List中支持[contentStartOffset]{@link ListAttribute#contentStartOffset(value: number)}和
   * > [contentEndOffset]{@link ListAttribute#contentEndOffset(value: number)}。从API version 22开始，在Grid和WaterFlow组件中支持设置
   * > [contentStartOffset](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#contentstartoffset22)
   * > 和
   * > [contentEndOffset](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#contentendoffset22)。
   * >
   * > - 当滚动容器组件设置contentStartOffset时，如果ScrollAlign设置为START，滚动结束时，指定item首部会与滚动容器组件contentStartOffset处对齐。
   * >
   * > - 当滚动容器组件设置contentEndOffset时，如果ScrollAlign设置为END，滚动结束时，指定item尾部会与滚动容器组件contentEndOffset处对齐。
   * >
   * > - 当滚动容器组件设置contentStartOffset或contentEndOffset时，如果ScrollAlign设置为AUTO，且指定item完全处于显示区内，不做调整；否则依照滚动距离最短的原则，将指定item首部
   * > 与滚动组件contentStartOffset处对齐，或指定item尾部与滚动组件contentEndOffset处对齐，使指定item完全显示。
   *
   * @param { number } value - 要滑动到的目标元素在当前容器中的索引值。      <br/>**说明：** <br/>value值设置成负值或者大于当前容器子组件的最大索引值，视为异常值，本次跳转不生效。
   * @param { boolean } smooth - 设置滑动到列表项在列表中的索引值时是否有动画，true表示有动画，false表示没有动画。不传入时默认无动画。<br/>默认值：false。 [since 7 - 11]
   * @param { ScrollAlign } align - 指定滑动到的元素与当前容器的对齐方式，可根据期望item首部、尾部或居中显示选择对应对齐方式。<br/>默认值：List为ScrollAlign.START，Grid为
   *     ScrollAlign.AUTO，WaterFlow为ScrollAlign.START。<br/>**说明：** <br/>仅List、Grid、WaterFlow组件支持该参数。 [since 7 - 11]
   * @param { boolean } [smooth] - 设置滑动到列表项在列表中的索引值时是否有动画，true表示有动画，false表示没有动画。不传入时默认无动画。<br/>默认值：false。 [since 12]
   * @param { ScrollAlign } [align] - 指定滑动到的元素与当前容器的对齐方式，可根据期望item首部、尾部或居中显示选择对应对齐方式。<br/>默认值：List为ScrollAlign.START，
   *     Grid为ScrollAlign.AUTO，WaterFlow为ScrollAlign.START。<br/>**说明：** <br/>仅List、Grid、WaterFlow组件支持该参数。 [since 12]
   * @param { ScrollToIndexOptions } [options] - 设置滑动到指定Index的选项，包含extraOffset字段，用于指定滚动后的额外偏移量。<br/>不传入时无额外偏移量。<br/
   *     > [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollToIndex(value: number, smooth?: boolean, align?: ScrollAlign, options?: ScrollToIndexOptions);

  /**
   * 滑动指定距离。
   *
   * > **说明：**
   * >
   * > - 支持ArcList、Scroll、List、Grid、WaterFlow组件。
   * >
   * > - 各组件行为存在差异：
   * >
   * > - [ArcList]{@link @ohos.arkui.ArcList}和[List]{@link ./list}组件会对所有经过的item进行加载和布局。
   * >
   * > - Grid组件和[SLIDING_WINDOW]{@link WaterFlowLayoutMode}模式的WaterFlow组件在跳转距离较大（大于2倍组件主轴高度）时，会直接估算出要显示的item。跳转指一帧滑动。
   * >
   * > - [ALWAYS_TOP_DOWN]{@link WaterFlowLayoutMode}模式的WaterFlow组件向后跳转（即dx或dy为正值时）会加载和布局所有经过的item，向前跳转（即dx或dy为负值时）会直接跳转
   * > 到对应位置。跳转指一帧滑动。
   *
   * @param { Length } dx - 水平方向滚动距离，不支持百分比形式。 <br/>取值范围：(-∞, +∞)
   * @param { Length } dy - 竖直方向滚动距离，不支持百分比形式。 <br/>取值范围：(-∞, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  scrollBy(dx: Length, dy: Length);

  /**
   * 查询组件是否滚动到底部。
   *
   * > **说明：**
   * >
   * > 支持ArcList、Scroll、List、Grid、WaterFlow组件。
   *
   * @returns { boolean } true表示组件已经滚动到底部，false表示组件还没滚动到底部。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  isAtEnd(): boolean;

  /**
   * 获取子组件的大小及相对容器组件的位置。
   *
   * > **说明：**
   * >
   * > 支持ArcList、Scroll、List、Grid、WaterFlow组件。
   *
   * @param { number } index - 子组件的索引值。
   * @returns { RectResult } 子组件的大小和相对于组件的位置。<br/>单位：vp。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100004 - Controller not bound to a component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getItemRect(index: number): RectResult;

  /**
   * 通过坐标获取子组件的索引。
   *
   * > **说明：**
   * >
   * > 支持List、Grid、WaterFlow组件。
   *
   * @param { number } x - x轴坐标，单位为vp。
   * @param { number } y - y轴坐标，单位为vp。
   * @returns { number } 返回坐标命中的子组件索引。坐标未命中子组件时，返回-1。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100004 - Controller not bound to a component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  getItemIndex(x: number, y: number): number;

  /**
   * 获取滚动组件内容总大小。
   *
   * > **说明：**
   * >
   * > - Grid、List、WaterFlow和Scroll组件主轴方向内容大小为所有子组件布局后的总大小，交叉轴方向内容大小为组件自身交叉轴方向大小减去padding和border后的大小。
   * >
   * > - Grid、List、WaterFlow组件有懒加载机制，该接口依赖已布局的子节点进行估算。如果组件内容没有布局完成且子组件高度不一致，估算结果可能会有误差，开发者需要适配。例如，List组件可以通过
   * > childrenMainSize属性解决估算不准问题。
   * >
   * > - 如果应用动态增删子节点，则需要应用动态获取内容总大小，来保证接口获取结果的即时性。
   * >
   * > - 当Scroll组件设置scrollable为ScrollDirection.FREE自由滚动模式时，获取到的内容总大小为子组件缩放后的总大小。
   * >
   * > - 当Scroll组件设置scrollable为ScrollDirection.None不可滚动时，获取到的内容总大小为0。
   * >
   * > - 当Grid组件同时设置columnsTemplate和rowsTemplate，或columnsTemplate和rowsTemplate都不设置时即为不可滚动场景，此时获取到的内容总大小高度为0，宽度为Grid组件内容区
   * > 宽度。
   *
   * @returns { SizeResult } 滚动组件内容总大小。主轴方向内容大小为所有子组件布局后的总大小，交叉轴方向内容大小为组件自身交叉轴方向大小减去padding和border后的大小。<br/>单位：vp
   * @throws { BusinessError } 100004 - Controller not bound to a component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  contentSize(): SizeResult;

  /**
   * 获取与当前Scroller绑定的FrameNode。
   *
   * @returns { FrameNode | undefined } 当Scroller已绑定到Scroll、List、Grid、WaterFlow等滚动类组件时，返回对应组件的FrameNode；如果Scroller未绑定组件，
   *     则返回undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getFrameNode(): FrameNode | undefined;
}

/**
 * 滚动到指定位置的参数选项。
 *
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface ScrollOptions {

  /**
   * 水平滚动偏移量。
   *
   * <p><strong>说明</strong>
   * <br>不支持设置百分比。
   * <br>无动画滚动时，设置为小于0的值按0处理。有动画滚动时，默认停在起始位置。通过设置<em>animation</em>参数，可以在滚动超出边界时启用回弹效果。
   * <br>该参数仅在滚动轴为x轴时生效。
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  xOffset: number | string;

  /**
   * 竖直滚动偏移量。
   *
   * <p><strong>说明</strong>
   * <br>不支持设置百分比。
   * <br>无动画滚动时，设置为小于0的值按0处理。有动画滚动时，默认停在起始位置。通过设置<em>animation</em>参数，可以在滚动超出边界时启用回弹效果。
   * <br>该参数仅在滚动轴为y轴时生效。
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  yOffset: number | string;

  /**
   * 动画配置。
   *
   * <p><strong>说明</strong>
   * <br>目前List、Scroll、Grid和WaterFlow支持Boolean类型和ICurve。
   * </p>
   *
   *     布尔类型启用默认弹簧动效。 [since 10 - 11]
   *     布尔类型启用默认弹簧动效。 [since 12]
   * @default ScrollAnimationOptions: { duration: 1000, curve: Curve.Ease, canOverScroll: false } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  animation?: ScrollAnimationOptions | boolean;

  /**
   * 设置滚动目标位置是否可以超出边界。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  canOverScroll?: boolean;
}

/**
 * 翻页模式的参数选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare interface ScrollPageOptions {

  /**
   * 是否翻到下一页。设置为true表示翻到下一页，设置为false表示翻到上一页。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  next: boolean;

  /**
   * 是否开启翻页动画。设置为true表示开启翻页动画，设置为false表示不开启。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  animation?: boolean;
}

/**
 * 限位滚动模式对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface ScrollSnapOptions {

  /**
   * 限位滚动时的对齐方式。
   *
   * @default ScrollSnapAlign.NONE [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  snapAlign: ScrollSnapAlign;

  /**
   * 限位滚动时的分页点。
   *
   * <p><strong>说明</strong>
   * <br>1.当属性为Dimension时，Dimension表示每页的大小，系统按照该大小进行分页。
   * <br>2.当属性为Array\<Dimension\>时，每个Dimension表示分页点，系统按照分页点进行分页。每个Dimension的范围为[0,可滑动距离]。
   * <br>3.当该属性不填或者Dimension为小于等于0的输入时，按异常值，无限位滚动处理。当该属性值为Array\<Dimension\>数组时，数组中的数值必须为单调递增。
   * <br>4.当输入为百分比时，实际的大小为Scroll组件的视口与百分比数值之积。
   * </p>
   *
   * @default 100%
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  snapPagination?: Dimension | Array<Dimension>;

  /**
   * 在Scroll组件限位滚动模式下，该属性设置为true后，不允许Scroll在开头和第一页间自由滑动，该属性设置为false后，允许Scroll在开头和第一页间自由滑动。
   *
   * <p><strong>说明</strong>
   * <br>1. 该属性值默认为true。
   * <br>2. 该属性仅当snapPagination属性为Array\<Dimension\>时生效，不支持Dimension。
   * </p>
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableSnapToStart?: boolean;

  /**
   * 在Scroll组件限位滚动模式下，该属性设置为true后，不允许Scroll在最后一页和末尾间自由滑动，该属性设置为false后，允许Scroll在最后一页和末尾间自由滑动。
   *
   * <p><strong>说明</strong>
   * <br>1. 该属性值默认为true。
   * <br>2. 该属性仅当snapPagination属性为Array\<Dimension\>时生效，不支持Dimension。
   * </p>
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableSnapToEnd?: boolean;
}

/**
 * 可滚动的容器组件，当子组件的布局尺寸超过父组件的尺寸时，内容可以滚动。支持设置滚动方向、滚动条、边缘效果、嵌套滚动以及自由滚动缩放等能力，适用于内容超出显示区域或需要复杂滚动交互的场景。
 *
 * > **说明：**
 * >
 * > - 该组件嵌套List子组件滚动时，若List不设置宽高，则默认全部加载。在对性能有要求的场景下，开发者应指定List的宽高，以避免默认全部加载影响性能。
 * >
 * > - 该组件滚动的前提是主轴方向大小小于内容大小。
 * >
 * > - Scroll组件通用属性[clip]{@link CommonMethod#clip(value: boolean)}的默认值为true。
 * >
 * > - Scroll组件的高度超出屏幕显示范围时，可以通过设置通用属性[layoutWeight]{@link CommonMethod#layoutWeight}让Scroll高度适应主轴的剩余空间。
 * >
 * > - 手指触摸屏幕时，会停止当前触摸范围内所有滚动组件的滚动动画（[scrollTo]{@link Scroller#scrollTo}和[scrollToIndex]{@link Scroller#scrollToIndex}接口
 * > 触发的滚动动画除外），包括边缘回弹动画。
 * >
 * > - 组件内部已绑定手势实现跟手滚动等功能，需要增加自定义手势操作时请参考[手势拦截增强]{@link ./common}进行处理。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface ScrollInterface {

  /**
   * 创建Scroll滚动容器。
   *
   * @param { Scroller } scroller
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (scroller?: Scroller): ScrollAttribute;
}

/**
 * 滚动到边缘时触发的回调。
 *
 * @param { Edge } side - 滚动到的边缘位置。竖直方向滚动时，Edge.Top和Edge.Start表示起始边缘，Edge.Bottom和Edge.End表示末尾边缘。水平方向滚动时，Edge.Center表示水平方
 *     向起始位置，Edge.Baseline表示水平方向末尾位置。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnScrollEdgeCallback = (side: Edge) => void;

/**
 * [OnScrollFrameBeginCallback]{@link OnScrollFrameBeginCallback}返回的实际相对上一帧滚动偏移量。
 *
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API version 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface OnScrollFrameBeginHandlerResult {

  /**
   * 实际滚动偏移量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  offsetRemain: number;
}

/**
 * Scroll每帧滚动前触发的回调。
 *
 * @param { number } offset - 即将发生的滑动量，单位vp。
 * @param { ScrollState } state - 当前滑动状态。Idle表示空闲状态，Scroll表示滚动状态，Fling表示惯性滚动状态。
 * @returns { OnScrollFrameBeginHandlerResult } data 返回实际滑动量，Scroll将按照返回值中的offsetRemain进行滚动。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnScrollFrameBeginCallback = (offset: number, state: ScrollState) => OnScrollFrameBeginHandlerResult;

/**
 * 除支持[通用属性]{@link ./common}和[滚动组件通用属性](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#属性)外，还
 * 支持以下属性：
 *
 * 除支持[通用事件]{@link ./common}和[滚动组件通用事件](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#事件)外，还
 * 支持以下事件：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class ScrollAttribute extends ScrollableCommonMethod<ScrollAttribute> {

  /**
   * 设置滚动方向。该值被修改后会重置滚动偏移量。可根据布局选择竖直滚动、水平滚动或自由滚动。
   *
   * @param { ScrollDirection } value - 滚动方向。<br/>默认值：ScrollDirection.Vertical
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollable(value: ScrollDirection): ScrollAttribute;

  /**
   * 设置Scroll组件内容的最大手势缩放比例。
   *
   * @param { number } scale - Scroll组件内容的最大手势缩放比例。
   *     <br>默认值：1
   *     <br>取值范围：(0, +∞)，小于或等于0时按默认值1处理。
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  maxZoomScale(scale: number): ScrollAttribute;

  /**
   * 设置Scroll组件内容的最小手势缩放比例。
   *
   * @param { number } scale - Scroll组件内容的最小手势缩放比例。
   *     <br>默认值：1
   *     <br>取值范围：(0, maxZoomScale]，小于或等于0时按默认值1处理，大于maxZoomScale时按maxZoomScale处理。
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  minZoomScale(scale: number): ScrollAttribute;

  /**
   * 设置Scroll组件内容的缩放比例。
   *
   * @param { number } scale - 设置Scroll组件内容的缩放比例，该参数支持[!!](docroot://ui/state-management/arkts-new-binding.md)双向绑定变量。
   *     <br>默认值：1
   *     <br>取值范围：(0, +∞)，小于或等于0时按默认值1处理。
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  zoomScale(scale: number): ScrollAttribute;

  /**
   * 设置是否启用过缩放回弹效果。
   *
   * @param { boolean } enable - 是否启用过缩放回弹效果。当用户缩放超出最大或最小缩放比例时，释放手势后内容会回弹到最大或最小缩放比例。设置为true表示启用该效果，设置为false表示禁用该效果。
   *     <br>默认值：true
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  enableBouncesZoom(enable: boolean): ScrollAttribute;

  /**
   * 滚动事件回调，返回滚动时水平、竖直方向偏移量，单位vp。
   *
   * 触发该事件的条件：
   *
   * 1. 滚动组件触发滚动时触发，支持键鼠操作等其他触发滚动的输入设置。
   * 2. 通过滚动控制器API接口调用。
   * 3. 越界回弹。
   *
   * @param { function } event - callback when scroll,
   *     xOffset: 相对于上一帧水平方向的偏移量，Scroll中的内容向左滚动时偏移量为正，向右滚动时偏移量为负。<br/>单位vp。
   *     yOffset: 相对于上一帧竖直方向的偏移量，Scroll中的内容向上滚动时偏移量为正，向下滚动时偏移量为负。<br/>单位vp。
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 12
   * @useinstead scroll/Scroll#onWillScroll
   */
  onScroll(event: (xOffset: number, yOffset: number) => void): ScrollAttribute;

  /**
   * 滚动事件回调，Scroll滚动前触发。
   *
   * 回调当前帧将要滚动的偏移量和当前滚动状态和滚动操作来源，其中回调的偏移量为计算得到的将要滚动的偏移量值，并非最终实际滚动偏移。可以通过该回调返回值指定Scroll将要滚动的偏移。
   *
   * 触发该事件的条件：
   *
   * 1. 滚动组件触发滚动时触发，支持键鼠操作等其他触发滚动的输入设置。
   * 2. 通过滚动控制器API接口调用。
   * 3. 越界回弹。
   *
   * > **说明：**
   * >
   * > 滚动事件的回调函数在滚动过程中会被频繁触发，因此应避免在该回调函数中执行耗时操作，以防止应用出现卡顿和丢帧的问题。
   *
   * @param { ScrollOnWillScrollCallback } handler - Scroll滚动前触发的回调。
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillScroll(handler: ScrollOnWillScrollCallback): ScrollAttribute;

  /**
   * 滚动事件回调，Scroll滚动时触发。
   *
   * 返回当前帧滚动的偏移量和当前滚动状态。
   *
   * 触发该事件的条件：
   *
   * 1. 滚动组件触发滚动时触发，支持键鼠操作等其他触发滚动的输入设置。
   * 2. 通过滚动控制器API接口调用。
   * 3. 越界回弹。
   *
   * @param { ScrollOnScrollCallback } handler - Scroll滚动时触发的回调。
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidScroll(handler: ScrollOnScrollCallback): ScrollAttribute;

  /**
   * 滚动到边缘事件回调。
   *
   * 触发该事件的条件：
   *
   * 1. 滚动组件滚动到边缘时触发，支持键鼠操作等其他触发滚动的输入设置。
   * 2. 通过滚动控制器API接口调用。
   * 3. 越界回弹。
   *
   * @param { function } event [since 7 - 17]
   * @param { OnScrollEdgeCallback } event - 滚动到的边缘位置。<br/>当Scroll设置为水平方向滚动时，上报[Edge.Center]{@link Edge}表示水平方向起始位置，上报
   *     [Edge.Baseline]{@link Edge}表示水平方向末尾位置。由于[Edge.Center]{@link Edge}和[Edge.Baseline]{@link Edge}枚举值已经废弃，推荐使用
   *     [onReachStart](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#onreachstart11)、
   *     [onReachEnd](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#onreachend11)事件监听是否滚动到边
   *     界。 [since 18]
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onScrollEdge(event: OnScrollEdgeCallback): ScrollAttribute;

  /**
   * 滚动开始时触发。手指拖动Scroll或拖动Scroll的滚动条触发的滚动开始时，会触发该事件。使用[Scroller]{@link Scroller}滚动控制器触发的带动画的滚动，动画开始时会触发该事件。
   *
   * 触发该事件的条件：
   *
   * 1. 滚动组件开始滚动时触发，支持键鼠操作等其他触发滚动的输入设置。
   * 2. 通过滚动控制器API接口调用后开始，带过渡动效。
   *
   * @param { function } event [since 9 - 17]
   * @param { VoidCallback } event - 滚动开始回调。 [since 18]
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onScrollStart(event: VoidCallback): ScrollAttribute;

  /**
   * 滚动停止事件回调。
   *
   * 触发该事件的条件：
   *
   * 1. 滚动组件触发滚动后停止，支持键鼠操作等其他触发滚动的输入设置。
   * 2. 通过滚动控制器API接口调用后停止，带过渡动效。
   *
   * @param { function } event
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead scroll/Scroll#onScrollStop
   */
  onScrollEnd(event: () => void): ScrollAttribute;

  /**
   * 滚动停止时触发。手拖动Scroll或拖动Scroll的滚动条触发的滚动，手离开屏幕后滚动停止时会触发该事件。使用[Scroller]{@link Scroller}滚动控制器触发的带动画的滚动，动画停止时会触发该事件。
   *
   * 触发该事件的条件：
   *
   * 1. 滚动组件触发滚动后停止，支持键鼠操作等其他触发滚动的输入设置。
   * 2. 通过滚动控制器API接口调用后开始，带过渡动效。
   *
   * @param { function } event [since 9 - 17]
   * @param { VoidCallback } event - 滚动停止回调。 [since 18]
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onScrollStop(event: VoidCallback): ScrollAttribute;

  /**
   * 每帧缩放完成时触发。
   *
   * @param { ScrollOnDidZoomCallback } event - 每帧缩放完成时回调。
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onDidZoom(event: ScrollOnDidZoomCallback): ScrollAttribute;

  /**
   * 手势缩放开始触发。
   *
   * @param { VoidCallback } event - 缩放开始回调。
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onZoomStart(event: VoidCallback): ScrollAttribute;

  /**
   * 手势缩放停止时触发。
   *
   * @param { VoidCallback } event - 缩放停止回调。
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onZoomStop(event: VoidCallback): ScrollAttribute;

  /**
   * 设置滚动条状态。如果容器组件无法滚动，则滚动条不显示。如果容器组件的子组件大小为无穷大，则滚动条不支持拖动和伴随滚动。可用于控制滚动条是否常驻显示、自动显示或隐藏。
   *
   * 从API version 10开始，当滚动组件存在圆角时，为避免滚动条被圆角截断，滚动条会自动计算距顶部和底部的避让距离。
   *
   * @param { BarState } barState - 滚动条状态。<br/>默认值：BarState.Auto
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollBar(barState: BarState): ScrollAttribute;

  /**
   * 设置滚动条的颜色。
   *
   * @param { Color | number | string } color - 滚动条的颜色。<br/>默认值：'#66182431'<br/>number为HEX格式颜色，支持rgb或者argb，取值范围：
   *     [0x0, 0xFFFFFFFF]，示例：0xffffff。<br/>string为rgb或者argb格式颜色，示例：'#ffffff'。
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollBarColor(color: Color | number | string): ScrollAttribute;

  /**
   * 设置滚动条的颜色。与[scrollBarColor]{@link ScrollAttribute#scrollBarColor(color: Color | number | string)}相比，color参数开始支持
   * Resource类型。
   *
   * @param { Color | number | string | Resource } color - 滚动条的颜色。<br/>默认值：'#66182431'<br/>number为HEX格式颜色，支持rgb或者argb，取值
   *     范围：[0x0, 0xFFFFFFFF]，示例：0xffffff。string为rgb或者argb格式颜色，示例：'#ffffff'。
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  scrollBarColor(color: Color | number | string | Resource): ScrollAttribute;

  /**
   * 设置滚动条的宽度，不支持百分比设置。宽度设置后，滚动条正常状态和按压状态宽度均为滚动条的宽度值。如果滚动条的宽度超过Scroll组件主轴方向的可视尺寸，则滚动条的宽度会变为默认值4vp。
   *
   * @param { number | string } value - 滚动条的宽度。<br/>默认值：4<br/>单位：vp <br/>取值范围：设置为小于0的值时，按4vp处理。设置为0时，不显示滚动条。
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollBarWidth(value: number | string): ScrollAttribute;

  /**
   * 设置滚动条的宽度，不支持百分比设置。宽度设置后，滚动条正常状态和按压状态宽度均为滚动条的宽度值。如果滚动条的宽度超过Scroll组件主轴方向的可视尺寸，则滚动条的宽度会变为默认值4vp，支持Resource资源类型。
   *
   * 未通过该接口设置时，设置滚动条的宽度为4vp。
   *
   * @param { number | string | Resource } value  - 滚动条的宽度。<br/>默认值：4<br/>单位：vp <br/>取值范围：
   *     [0, +∞)。设置为小于0的值时，按4vp处理。设置为0时，不显示滚动条。
   * @returns { ScrollAttribute  }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  scrollBarWidth(value: number | string | Resource): ScrollAttribute;

  /**
   * 设置边缘滑动效果。
   *
   * @param { EdgeEffect } edgeEffect - Scroll组件的边缘滑动效果，支持弹簧效果和阴影效果。<br/>默认值：EdgeEffect.None
   * @param { EdgeEffectOptions } options - 组件内容大小小于组件自身时，是否开启滑动效果。设置为{ alwaysEnabled: true }会开启滑动效果，{ alwaysEnabled:
   *     false }不开启；不传入时使用默认值。<br/>默认值：{ alwaysEnabled: true }<br/> [since 11]
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  edgeEffect(edgeEffect: EdgeEffect, options?: EdgeEffectOptions): ScrollAttribute;

  /**
   * 该接口回调时，事件参数传入即将发生的滚动量，事件处理函数中可根据应用场景计算实际需要的滚动量并作为事件处理函数的返回值返回，Scroll将按照返回值的实际滚动量进行滚动。
   *
   * 支持[offsetRemain]{@link OnScrollFrameBeginHandlerResult}为负值。
   *
   * 若通过onScrollFrameBegin事件和[scrollBy]{@link Scroller#scrollBy}方法实现容器嵌套滚动，需设置子滚动节点的
   * [EdgeEffect]{@link ScrollAttribute#edgeEffect}为None。如Scroll嵌套List滚动时，List组件的
   * [edgeEffect]{@link ListAttribute#edgeEffect}属性需设置为EdgeEffect.None，否则抛滑List，会触发List的边缘回弹动画，导致嵌套滚动失效。
   *
   * 满足以下任一条件时触发该事件：
   *
   * 1. 用户交互（如手指滑动、键鼠操作等）触发滚动。
   * 2. Scroll惯性滚动。
   * 3. 调用[fling]{@link Scroller#fling}接口触发滚动。
   *
   * 不触发该事件的条件：
   *
   * 1. 调用除[fling]{@link Scroller#fling}接口外的其他滚动控制接口。
   * 2. 越界回弹。
   * 3. 拖动滚动条。
   *
   * @param { function } event [since 9 - 17]
   * @param { OnScrollFrameBeginCallback } event - 每帧滚动开始回调函数。 [since 18]
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onScrollFrameBegin(event: OnScrollFrameBeginCallback): ScrollAttribute;

  /**
   * 设置前后两个方向的嵌套滚动模式，实现与父组件的滚动联动。适用于页面内列表与外层滚动区域联动等嵌套滚动场景。
   *
   * @param { NestedScrollOptions } value - 嵌套滚动选项，用于配置前后两个方向的嵌套滚动模式，包含scrollForward（向前滚动模式）和scrollBackward（向后滚动模式）字段。
   *     NestedScrollMode.SELF_ONLY表示仅自身滚动，NestedScrollMode.SELF_FIRST表示自身优先滚动，NestedScrollMode.PARENT_FIRST表示父组件优先滚动，
   *     NestedScrollMode.PARALLEL表示自身和父组件同时滚动。<br/>默认值：{ scrollForward: NestedScrollMode.SELF_ONLY, scrollBackward:
   *     NestedScrollMode.SELF_ONLY }<br/>Scroll设置[enablePaging]{@link ScrollAttribute#enablePaging}或者
   *     [scrollSnap]{@link ScrollAttribute#scrollSnap}，并同时设置父组件优先的嵌套滚动时，嵌套滚动不生效。
   * @returns { ScrollAttribute } Scroll组件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  nestedScroll(value: NestedScrollOptions): ScrollAttribute;

  /**
   * 设置是否支持滚动手势。可用于在自定义拖动、自定义滚动等业务需要接管滑动手势的场景中，临时禁用滚动组件的用户手势滚动。
   *
   * @param { boolean } value - 是否支持滚动手势。设置为true时可以通过手指或者鼠标滚动，设置为false时无法通过手指或者鼠标滚动，但不影响控制器[Scroller]{@link Scroller}的滚动
   *     接口。<br/>默认值：true
   * @returns { ScrollAttribute } Scroll组件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableScrollInteraction(value: boolean): ScrollAttribute;

  /**
   * 设置摩擦系数，手动滑动滚动区域时生效，仅影响惯性滚动过程，对惯性滚动过程中的链式效果有间接影响。
   *
   * @param { number | Resource } value - 摩擦系数。<br/>默认值：非可穿戴设备为0.6，可穿戴设备为0.9。<br/>从API version 11开始，非可穿戴设备默认值为0.7。<br/>从
   *     API version 12开始，非可穿戴设备默认值为0.75。<br/>取值范围：(0, +∞)，设置为小于等于0的值时，按默认值处理。
   * @returns { ScrollAttribute } Scroll组件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  friction(value: number | Resource): ScrollAttribute;

  /**
   * 设置Scroll组件的限位滚动模式，用于实现分页滚动、卡片对齐等需要滚动结束后定位到指定位置的场景。
   *
   * 限位动画期间[onWillScroll]{@link ScrollAttribute#onWillScroll}事件上报的滚动操作来源类型为ScrollSource.FLING。
   *
   * @param { ScrollSnapOptions } value - Scroll组件的限位滚动模式。该对象包含snapAlign（对齐方式）、snapPagination（分页点）、enableSnapToStart（是否在
   *     开头限位）和enableSnapToEnd（是否在末尾限位）等属性。
   * @returns { ScrollAttribute } Scroll组件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  scrollSnap(value: ScrollSnapOptions): ScrollAttribute;

  /**
   * 设置是否支持滑动翻页。如果同时设置了滑动翻页enablePaging和限位滚动scrollSnap，则scrollSnap优先生效，enablePaging不生效。可用于书籍翻页、卡片分页浏览等场景。
   *
   * @param { boolean } value - 是否支持滑动翻页。设置为true支持滑动翻页，false不支持。 <br/>默认值：false
   * @returns { ScrollAttribute } Scroll组件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  enablePaging(value: boolean): ScrollAttribute;

  /**
   * 设置初始滚动偏移量。只在首次布局时生效，后续动态修改该属性值不生效。可用于页面首次显示时定位到指定滚动位置。
   *
   * @param { OffsetOptions } value - 当输入的大小为百分比时，初始滚动偏移量为Scroll组件主轴方向大小与百分比数值之积。
   * @returns { ScrollAttribute } Scroll组件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  initialOffset(value: OffsetOptions): ScrollAttribute;
}

/**
 * Scroll滚动时触发的回调。
 *
 * @param { number } xOffset - 相对于上一帧水平方向的偏移量，Scroll中的内容向左滚动时偏移量为正，向右滚动时偏移量为负。<br/>单位vp。
 * @param { number } yOffset - 相对于上一帧竖直方向的偏移量，Scroll中的内容向上滚动时偏移量为正，向下滚动时偏移量为负。<br/>单位vp。
 * @param { ScrollState } scrollState - 当前滚动状态。Idle表示空闲状态，Scroll表示滚动状态，Fling表示惯性滚动状态。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type ScrollOnScrollCallback = (xOffset: number, yOffset: number, scrollState: ScrollState) => void;

/**
 * Scroll滚动前触发的回调。
 *
 * @param { number } xOffset - 相对于上一帧水平方向的偏移量，Scroll中的内容向左滚动时偏移量为正，向右滚动时偏移量为负。
 *     <br>单位vp
 * @param { number } yOffset - 相对于上一帧竖直方向的偏移量，Scroll中的内容向上滚动时偏移量为正，向下滚动时偏移量为负。
 *     <br>单位vp
 * @param { ScrollState } scrollState - 当前滚动状态。
 * @param { ScrollSource } scrollSource - 当前滚动操作的来源。
 * @returns { void | OffsetResult } 返回OffsetResult时按照开发者指定的偏移量滚动；
 *     不返回时按回调参数(xOffset, yOffset)滚动。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type ScrollOnWillScrollCallback =
 (xOffset: number, yOffset: number, scrollState: ScrollState, scrollSource: ScrollSource) => void | OffsetResult;

/**
 * Scroll每帧缩放完成时触发的回调。
 *
 * @param { number } scale - 当前缩放倍数。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare type ScrollOnDidZoomCallback = (scale: number) => void;

/**
 * 可滚动的容器组件，当子组件的布局尺寸超过父组件的尺寸时，内容可以滚动。支持设置滚动方向、滚动条、边缘效果、嵌套滚动以及自由滚动缩放等能力，适用于内容超出显示区域或需要复杂滚动交互的场景。
 *
 * > **说明：**
 * >
 * > - 该组件嵌套List子组件滚动时，若List不设置宽高，则默认全部加载。在对性能有要求的场景下，开发者应指定List的宽高，以避免默认全部加载影响性能。
 * >
 * > - 该组件滚动的前提是主轴方向大小小于内容大小。
 * >
 * > - Scroll组件通用属性[clip]{@link CommonMethod#clip(value: boolean)}的默认值为true。
 * >
 * > - Scroll组件的高度超出屏幕显示范围时，可以通过设置通用属性[layoutWeight]{@link CommonMethod#layoutWeight}让Scroll高度适应主轴的剩余空间。
 * >
 * > - 手指触摸屏幕时，会停止当前触摸范围内所有滚动组件的滚动动画（[scrollTo]{@link Scroller#scrollTo}和[scrollToIndex]{@link Scroller#scrollToIndex}接口
 * > 触发的滚动动画除外），包括边缘回弹动画。
 * >
 * > - 组件内部已绑定手势实现跟手滚动等功能，需要增加自定义手势操作时请参考[手势拦截增强]{@link ./common}进行处理。
 *
 * ###### 子组件
 *
 * 支持单个子组件。
 *
 * > 从API version 21开始，Scroll单个子组件的宽高最大为16777216px；API version 20及之前，Scroll单个子组件的宽高最大为1000000px。子组件超出该大小可能导致滚动或显示异常。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const Scroll: ScrollInterface;

/**
 * 定义Scroll组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const ScrollInstance: ScrollAttribute;