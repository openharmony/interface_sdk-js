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
import { BarState, Edge, Color, EdgeEffect, ScrollSource, Curve } from './enums';
import { ICurve, RectResult, ScrollableCommonMethod, EdgeEffectOptions, NestedScrollOptions, CommonMethod } from './common';
import { Dimension, Length, VoidCallback, Resource, LengthMetrics } from './units';
import { ScrollSnapAlign, ScrollState } from "./list";
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod, UIScrollableCommonEvent, SizeResult, Bindable } from "./common";
import { FrameNode } from 'arkui.FrameNode';
/**
 * 滚动方向枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ScrollDirection {

  /**
   * Only vertical scrolling is supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Vertical,

  /**
   * Only horizontal scrolling is supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Horizontal,

  /**
   * Scrolling is disabled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  None,

  /**
   * 自由滚动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  FREE = 4
}

/**
 * 对齐方式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ScrollAlign {

  /**
   * The start edge of the list item is flush with the start edge of the list.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  START,

  /**
   * The list item is centered along the main axis of the list.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CENTER,

  /**
   * The end edge of the list item is flush with the end edge of the list.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  END,

  /**
   * The list item is automatically aligned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  AUTO
}

/**
 * 滑动偏移量对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface OffsetResult {

  /**
   * 水平滑动偏移。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  xOffset: double;

  /**
   * 竖直滑动偏移。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  yOffset: double;
}

/**
 * 滚动到边缘位置的参数选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ScrollEdgeOptions {

  /**
   * 设置滚动到容器边缘的固定速度。如果设置小于等于0的值，参数不生效。
   *
   * @default 0vp/s
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  velocity?: double;
}

/**
 * 滑动到指定Index的参数选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ScrollToIndexOptions {

  /**
   * 滑动到指定Index的额外偏移量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  extraOffset?: LengthMetrics;
}

/**
 * 自定义滚动动效的参数选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ScrollAnimationOptions {

  /**
   * 设置滚动时长。
   * <p><strong>说明</strong>。
   * 取值限定为整数。
   * <br>设置为小于0的值时，按默认值显示。
   * </p>
   *
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  duration?: int;

  /**
   * 设置滚动曲线。
   *
   * @default Curve.Ease
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  curve?: Curve | ICurve;

  /**
   * 设置滚动动画滚动到边界后，是否转换成越界回弹动画。
   * <p><strong>说明</strong>。
   * <br>仅在设置为true，且组件的edgeEffect设置为EdgeEffect.Spring时，使用动画滚动到边界会转换为越界回弹动画，
   * 设置为false时，滚动到边界会直接停止动画，不会转换为越界回弹动画。
   * </p>
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  canOverScroll?: boolean;
}

/**
 * 初始滚动偏移量的参数选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface OffsetOptions {

  /**
   * 水平滚动偏移。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  xOffset?: Dimension;

  /**
   * 垂直滚动偏移。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  yOffset?: Dimension;
}

/**
 * frameNode中[getEvent('Scroll')](docroot://reference/apis-arkui/js-apis-arkui-frameNode.md#geteventscroll19)方法的返回值，可用于给
 * Scroll节点设置滚动事件。
 *
 * UIScrollEvent继承于[UIScrollableCommonEvent]{@link UIScrollableCommonEvent}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface UIScrollEvent extends UIScrollableCommonEvent {

  /**
   * 设置[onWillScroll]{@link onWillScroll}事件的回调。
   *
   * 方法入参为undefined时，会重置事件回调。
   *
   * @param { ScrollOnWillScrollCallback | undefined } callback - onWillScroll事件的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setOnWillScroll(callback: ScrollOnWillScrollCallback | undefined): void;

  /**
   * 设置[onDidScroll]{@link onDidScroll}事件的回调。
   *
   * 方法入参为undefined时，会重置事件回调。
   *
   * @param { ScrollOnScrollCallback | undefined } callback - onDidScroll事件的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setOnDidScroll(callback: ScrollOnScrollCallback | undefined): void;
}

/**
 * 可滚动容器组件的控制器，可以将此组件绑定至容器组件，然后通过它控制容器组件的滚动。同一个控制器不可以控制多个容器组件，目前支持绑定到[ArcList]{@link @ohos.arkui.ArcList}、
 * [ArcScrollBar]{@link @ohos.arkui.ArcScrollBar}、[List]{@link list}、Scroll、[ScrollBar]{@link scroll_bar}、
 * [Grid]{@link grid}、[WaterFlow]{@link water_flow}上。
 *
 * > **说明：**
 * >
 * > 1、Scroller控制器与滚动容器组件的绑定发生在组件创建阶段。
 *
 * > 2、Scroller控制器与滚动容器组件绑定后才可以正常调用Scroller方法，否则根据调用接口不同会不生效或者抛异常。
 *
 * > 3、以[aboutToAppear](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoappear)为例，
 * > aboutToAppear在创建自定义组件的新实例后，在执行其build()方法之前执行。因此如果滚动组件在自定义组件build内，在该自定义组件aboutToAppear执行时，内部滚动组件还没有创建，是不能正常调用上述
 * > Scroller方法的。
 *
 * > 4、以[onAppear]{@link CommonMethod#onAppear}为例，组件挂载显示后触发此回调。因此在滚动组件的onAppear回调执行时，滚动组件已经创建并已经和Scroller绑定成功，是可以正常调用
 * > Scroller方法的。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class Scroller {

  /**
   * Scroller的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor();

  /**
   * 滑动到指定位置。
   *
   * > **说明：**
   *
   * > - scrollTo动画速度大于200vp/s时，滚动组件区域内的组件不响应点击事件。
   * >
   * > - 各组件行为存在差异：
   * >
   * >   - [ArcList]{@link @ohos.arkui.ArcList}和[List]{@link list}组件会对所有经过的item进行加载和布局。
   * >
   * >   - Grid组件和[SLIDING_WINDOW]模式的[WaterFlow]{@link water_flow}组件在跳转距离较大（大于2倍组件主轴高度）时，会直接估算出要显示的item。
   * >
   * >   - [ALWAYS_TOP_DOWN]模式的WaterFlow组件向后跳转（即dx或dy为正值时）会加载和布局所有经过的item，向前跳转（即dx或dy为负值时）会直接跳转到对应位置。
   *
   * @param { ScrollOptions } options - 滑动到指定位置的参数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  scrollTo(options: ScrollOptions): void;

  /**
   * 滚动到容器边缘，不区分滚动轴方向，Edge.Top和Edge.Start表现相同，Edge.Bottom和Edge.End表现相同。
   *
   * Scroll组件默认有动画，Grid、List、WaterFlow组件默认无动画。
   *
   * @param { Edge } value - 滚动到的边缘位置。
   * @param { ScrollEdgeOptions } [options] - 设置滚动到边缘位置的模式。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  scrollEdge(value: Edge, options?: ScrollEdgeOptions): void;

  /**
   * 滚动类组件根据传入的初始速度进行惯性滚动。
   *
   * @param { double } velocity - 惯性滚动的初始速度值。单位：vp/s<br/>**说明：**<br/>velocity值设置为0，视为异常值，本次滚动不生效。如果值为正数，则向顶部滚动；如果值为负数，
   *     则向底部滚动。<br/>。
   *     <br>取值范围：(-∞, +∞)。
   *     <br>
   *     <em>注意</em>
   *     <br>如果指定的值为0，则视为无效，此实例的滚动将不会
   *     生效。
   *     正值表示向顶部滚动，负值表示向
   *     底的意思。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100004 - Controller not bound to a component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fling(velocity: double): void;

  /**
   * 滚动到下一页或者上一页。
   *
   * @param { ScrollPageOptions } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  scrollPage(value: ScrollPageOptions): void;

  /**
   * 获取当前的滚动总偏移量。
   *
   * > **说明：**
   * >
   * > 1. 当Scroller没有和组件绑定时，该接口会返回undefined，但是接口中没有声明，推荐使用[offset]{@link Scroller#offset}函数。
   * >
   * > 2. Grid、List、WaterFlow组件有懒加载机制，组件内容没有加载并布局完成时，内容总偏移量通过估算得到，估算结果可能会有误差。其中List组件可以通过
   * > [childrenMainSize]{@link ListAttribute#childrenMainSize}属性解决估算不准确的问题，Grid与WaterFlow估算不准暂无解决方案。
   *
   * @returns { OffsetResult | undefined } Returns the current scrolling offset. If the scroller not bound to
   *     a component, the return value is undefined.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  currentOffset(): OffsetResult | undefined;

  /**
   * 获取当前的滚动总偏移量。除接口声明有undefined以外，其他与[currentOffset]{@link Scroller#currentOffset}接口保持一致。
   *
   * @returns { OffsetResult | undefined } Returns the current scrolling offset.
   *     If the scroller not bound to a component, the return value is undefined.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offset(): OffsetResult | undefined;

  /**
   * 滑动到指定Index，支持设置滑动额外偏移量。
   *
   * 开启smooth动效时，会对经过的所有item进行加载和布局计算，当大量加载item时会导致性能问题，建议先调用scrollToIndex不带动画跳转到目标附近位置，再调用scrollToIndex带动画滚动到目标位置。
   *
   * > **说明：**
   * >
   * > 1.仅支持ArcList、Grid、List、WaterFlow组件。
   * >
   * > 2.在[LazyForEach]{@link lazy_for_each}、[ForEach]{@link for_each}、[Repeat]{@link repeat}刷新数据源时，需确保在数据刷新完成之后再调用此接
   * > 口。
   * >
   * > 3.从API version 11开始，在List中支持
   * > [contentStartOffset](docroot://reference/apis-arkui/arkui-ts/ts-container-list.md#contentstartoffset11)和
   * > [contentEndOffset](docroot://reference/apis-arkui/arkui-ts/ts-container-list.md#contentendoffset11)。从API
   * > version 22开始，在Grid和Waterflow组件中支持设置
   * > [contentStartOffset](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#contentstartoffset22)
   * > 和
   * > [contentEndOffset](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#contentendoffset22)。
   * >
   * > - 当滚动容器组件设置contentStartOffset时，如果ScrollAlign设置为START，滚动结束时，指定item首部会与滚动容器组件contentStartOffset处对齐。
   * >
   * > - 当滚动容器组件设置contentEndOffset时，如果ScrollAlign设置为END，滚动结束时，指定item尾部会与滚动容器组件contentEndOffset处对齐。
   * >
   * > - 当滚动容器组件设置contentStartOffset或contentEndOffset时，如果ScrollAlign设置为AUTO，且指定item完全处于显示区内，不做调整；否则依照滚动距离最短的原则，将指定item
   * > 首部与滚动组件contentStartOffset处对齐，或指定item尾部与滚动组件contentEndOffset处对齐，使指定item完全显示。
   *
   * @param { int } value - 要滑动到的目标元素在当前容器中的索引值。      <br/>**说明：** <br/>value值设置成负值或者大于当前容器子组件的最大索引值，视为异常值，本次跳转不生效。
   *     <br>取值限定为整数。
   * @param { boolean } [smooth] - 设置滑动到列表项在列表中的索引值时是否有动效，true表示有动效，false表示没有动效。<br/>。
   *     <br>默认值：false。
   * @param { ScrollAlign } [align] - 指定滑动到的元素与当前容器的对齐方式。<br/>List中的默认值为：ScrollAlign.START。Grid中默认值为：ScrollAlign.AUTO。
   *     WaterFlow中的默认值为：ScrollAlign.START。<br/>**说明：** <br/>仅List、Grid、WaterFlow组件支持该参数。
   * @param { ScrollToIndexOptions } [options] - 设置滑动到指定Index的选项，如额外偏移量。<br/>。
   *     <br>单位为：vp。默认值：0，单位：vp。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  scrollToIndex(value: int, smooth?: boolean, align?: ScrollAlign, options?: ScrollToIndexOptions): void;

  /**
   * 滑动指定距离。
   *
   * > **说明：**
   *
   * > - 支持ArcList、Scroll、List、Grid、WaterFlow组件。
   * >
   * > - 各组件行为存在差异：
   * >
   * >   - [ArcList]{@link @ohos.arkui.ArcList}和[List]{@link list}组件会对所有经过的item进行加载和布局。
   * >
   * >   - Grid组件和[SLIDING_WINDOW]模式的[WaterFlow]{@link water_flow}组件在跳转距离较大（大于2倍组件主轴高度）时，会直接估算出要显示的item。
   * >
   * >   - [ALWAYS_TOP_DOWN]模式的WaterFlow组件向后跳转（即dx或dy为正值时）会加载和布局所有经过的item，向前跳转（即dx或dy为负值时）会直接跳转到对应位置。
   *
   * @param { Length } dx
   * @param { Length } dy
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  scrollBy(dx: Length, dy: Length): void;

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
   * @since 23 static
   */
  isAtEnd(): boolean;

  /**
   * 获取子组件的大小及相对容器组件的位置。
   *
   * > **说明：**
   * >
   * > 支持ArcList、Scroll、List、Grid、WaterFlow组件。
   *
   * @param { int } index - 子组件的索引值。**说明：**<br/>index必须是当前显示区域显示的子组件的索引值，否则视为非法值。非法值返回的大小和位置均为0。
   *     <br>取值限定为整数。
   * @returns { RectResult } 子组件的大小和相对于组件的位置。<br/>单位：vp。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100004 - Controller not bound to a component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getItemRect(index: int): RectResult;

  /**
   * 通过坐标获取子组件的索引。
   *
   * > **说明：**
   * >
   * > 支持List、Grid、WaterFlow组件。
   * >
   * > 非法值返回的索引为-1。
   *
   * @param { double } x - x轴坐标，单位为vp。
   * @param { double } y - y轴坐标，单位为vp。
   * @returns { int } 返回子组件的索引。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100004 - Controller not bound to a component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getItemIndex(x: double, y: double): int;

  /**
   * 获取滚动组件内容总大小。
   *
   * > **说明：**
   * >
   * > - Grid、List、WaterFlow和Scroll组件主轴方向内容大小为所有子组件布局后的总大小，交叉轴方向内容大小为组件自身交叉轴方向大小减去padding和border后的大小。
   * >
   * > - Grid、List、WaterFlow组件有懒加载机制，该接口依赖已布局的子节点进行估算。如果组件内容没有布局完成且子组件高度不一致，估算结果可能会有误差，需要开发者去适配，比如List组件可以通过
   * > childrenMainSize属性解决估算不准问题。
   * >
   * > - 如果应用动态增删子节点，则需要应用动态获取内容总大小，来保证接口获取结果的即时性。
   * >
   * > - 当Scroll组件设置scrollable为ScrollDirection.FREE自由滚动模式时，获取到的内容总大小为子组件缩放后的总大小。
   * >
   * > - 当Scroll组件设置scrollable为ScrollDirection.None不可滚动时，获取到的内容总大小为0。
   * >
   * > - 当Grid组件同时设置columnsTemplate和rowsTemplate，或columnsTemplate和rowsTemplate都不设置时即为不可滚动场景，此时获取到的内容总大小高度为0，宽度为Grid组件内
   * > 容区宽度。
   *
   * @returns { SizeResult } 滚动组件内容总大小，包括内容宽度和高度。<br/>单位：vp
   * @throws { BusinessError } 100004 - Controller not bound to a component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  contentSize() : SizeResult;

  /**
   * 获取与当前Scroller绑定的FrameNode。
   *
   * @returns { FrameNode | undefined } Returns the FrameNode bound to this scroller.
   *     If the scroller is not bound to a component, the return value is undefined.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  getFrameNode(): FrameNode | undefined;
}

/**
 * 滚动到指定位置的参数选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ScrollOptions {

  /**
   * 水平滚动总偏移量。
   * 匿名对象规范化。
   *
   * <p><strong>说明</strong>
   * <br>该参数值不支持设置百分比。
   * <br>仅滚动轴为x轴时生效。
   * <br>取值范围：当值小于0时，不带动画的滚动，按0处理。带动画的滚动，默认滚动到起始位置后停止，可通过设置animation参数，使滚动在越界时启动回弹动画。
   * <br>参数类型为number时单位为vp。
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  xOffset: double | string;

  /**
   * 垂直滚动总偏移量。
   * 匿名对象规范化。
   *
   * <p><strong>说明</strong>
   * <br>该参数值不支持设置百分比。
   * <br>仅滚动轴为y轴时生效。
   * <br>取值范围：当值小于0时，不带动画的滚动，按0处理。带动画的滚动，默认滚动到起始位置后停止，可通过设置animation参数，使滚动在越界时启动回弹动画。
   * <br>参数类型为number时单位为vp。
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  yOffset: double | string;

  /**
   * 动画配置。
   * 匿名对象规范化。
   * <p><strong>说明</strong>。
   * <br>当前List、Scroll、Grid、WaterFlow均支持boolean类型和ICurve曲线。
   * </p>
   *
   * @default ScrollAnimationOptions: { duration: 1000, curve: Curve.Ease, canOverScroll: false }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  animation?: ScrollAnimationOptions | boolean;

  /**
   * 滚动目标位置是否可以超出边界停留。仅当组件的edgeEffect设置为EdgeEffect.Spring时，滚动能够越界停留。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  canOverScroll?: boolean;
}

/**
 * 翻页模式的参数选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ScrollPageOptions {

  /**
   * 是否向下翻页。true表示向下翻页，false表示向上翻页。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  next: boolean;

  /**
   * 是否开启翻页动画效果。true有动画，false无动画。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  animation?: boolean;
}

/**
 * 限位滚动模式对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ScrollSnapOptions {

  /**
   * 设置Scroll组件限位滚动时的对齐方式。
   *
   * @default ScrollSnapAlign.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  snapAlign: ScrollSnapAlign;

  /**
   * 设置Scroll组件限位滚动时的分页点。
   * <p><strong>说明</strong>。
   * <br>1.当属性为Dimension时，Dimension表示每页的大小，系统按照该大小进行分页。
   * <br>2.当属性为Array&lt;Dimension&gt;时，每个Dimension表示分页点，系统按照分页点进行分页。每个Dimension的范围为[0,可滑动距离]。
   * <br>3.当该属性不填或者Dimension为小于等于0的输入时，按异常值，无限位滚动处理。当该属性值为Array&lt;Dimension&gt;数组时，数组中的数值必须为单调递增。
   * <br>4.当输入为百分比时，实际的大小为Scroll组件的视口与百分比数值之积。
   * </p>
   *
   * @default 100%
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  snapPagination?: Dimension | Array<Dimension>;

  /**
   * 在Scroll组件限位滚动模式下，该属性设置为true后，不允许Scroll在开头和第一页间自由滑动，该属性设置为false后，允许Scroll在开头和第一页间自由滑动。
   * <p><strong>说明</strong>。
   * <br>该属性仅当snapPagination属性为Array&lt;Dimension&gt;时生效，不支持Dimension。
   * </p>
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  enableSnapToStart?: boolean;

  /**
   * 在Scroll组件限位滚动模式下，该属性设置为true后，不允许Scroll在最后一页和末尾间自由滑动，该属性设置为false后，允许Scroll在最后一页和末尾间自由滑动。
   * <p><strong>说明</strong>。
   * <br>该属性仅当snapPagination属性为Array&lt;Dimension&gt;时生效，不支持Dimension。
   * </p>
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  enableSnapToEnd?: boolean;
}

/**
 * 滚动到边缘时触发的回调。
 *
 * @param { Edge } side - 滚动到的边缘位置。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnScrollEdgeCallback = (side: Edge) => void;

/**
 * [OnScrollFrameBeginCallback]返回的实际相对上一帧滚动偏移量。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface OnScrollFrameBeginHandlerResult {

  /**
   * 实际相对上一帧的滚动偏移量。
   * 匿名对象规范化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offsetRemain: double;
}

/**
 * Scroll每帧滚动前触发的回调。
 *
 * @param { double } offset - 即将发生的滑动量，单位vp。
 * @param { ScrollState } state - 当前滑动状态。
 * @returns { OnScrollFrameBeginHandlerResult } 返回实际滑动量。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnScrollFrameBeginCallback = (offset: double, state: ScrollState) => OnScrollFrameBeginHandlerResult;

/**
 * 除支持[通用属性]{@link common}和[滚动组件通用属性](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#属性)外，还支持
 * 以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface ScrollAttribute extends ScrollableCommonMethod {

  /**
   * 设置滚动方向。该值被修改后会重置滚动偏移量。
   *
   * @param { ScrollDirection | undefined } value - 滚动方向。<br/>默认值：ScrollDirection.Vertical<br/>取值为undefined时，按默认值处理。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default scrollable(value: ScrollDirection | undefined): this;

  /**
   * 设置Scroll组件内容的最大手势缩放比例。
   *
   * @param { double | undefined } scale - Scroll组件内容的最大手势缩放比例。<br>默认值：1<br>取值范围：(0, +∞)，小于或等于0时按默认值1处理。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default maxZoomScale(scale: double | undefined): this;

  /**
   * 设置Scroll组件内容的最小手势缩放比例。
   *
   * > **说明：**
   *
   * > 当maxZoomScale和minZoomScale不同时为1时，Scroll组件会启用缩放手势。
   *
   * @param { double | undefined } scale - Scroll组件内容的最小手势缩放比例。<br>默认值：1<br>取值范围：(0, maxZoomScale]，小于或等于0时按默认值1处理，大于
   *     maxZoomScale时按maxZoomScale处理。<br>取值为undefined时，按默认值1处理。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default minZoomScale(scale: double | undefined): this;

  /**
   * 设置Scroll组件内容的缩放比例。未通过该接口设置时，内容的缩放比例默认为1。
   *
   * @param { double | Bindable<double> | undefined } scale - 设置Scroll组件内容的缩放比例，该参数支持
   *     [!!](docroot://ui/state-management/arkts-new-binding.md)双向绑定变量。<br>默认值：1<br>取值范围：(0, +∞)，小于或等于0时按默认值1处理。<br>当
   *     设置为undefined时，按默认值1处理。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default zoomScale(scale: double | Bindable<double> | undefined): this;

  /**
   * 启用过缩放回弹效果。未通过该接口设置时，默认启用该效果。
   *
   * @param { boolean | undefined } enable - 启用过缩放回弹效果。设置为true表示启用该效果，设置为false表示禁用该效果。<br>默认值：true<br>取值为undefined时，启用
   *     该效果。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default enableBouncesZoom(enable: boolean | undefined): this;

  /**
   * 滚动事件回调，Scroll滚动前触发。
   *
   * 回调当前帧将要滚动的偏移量和当前滚动状态和滚动操作来源，其中回调的偏移量为计算得到的将要滚动的偏移量值，并非最终实际滚动偏移。可以通过该回调返回值指定Scroll将要滚动的偏移。
   *
   * 触发该事件的条件：
   *
   * 1、滚动组件触发滚动时触发，支持键鼠操作等其他触发滚动的输入设置。
   *
   * 2、通过滚动控制器API接口调用。
   *
   * 3、越界回弹。
   *
   * > **说明：**
   * >
   * > 滚动事件的回调函数在滚动过程中会被频繁触发，因此应避免在该回调函数中执行耗时操作，以防止应用出现卡顿和丢帧的问题。最佳实践请参考
   * > [主线程耗时操作优化指导-高频回调场景](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-time-optimization-of-the-main-thread#section10112623611)。
   *
   * @param { ScrollOnWillScrollCallback | undefined } handler - Scroll滚动前触发的回调。<br/>取值为undefined时，不使用回调函数。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onWillScroll(handler: ScrollOnWillScrollCallback | undefined): this;

  /**
   * 滚动事件回调，Scroll滚动时触发。
   *
   * 返回当前帧滚动的偏移量和当前滚动状态。
   *
   * 触发该事件的条件：
   *
   * 1、滚动组件触发滚动时触发，支持键鼠操作等其他触发滚动的输入设置。
   *
   * 2、通过滚动控制器API接口调用。
   *
   * 3、越界回弹。
   *
   * @param { ScrollOnScrollCallback | undefined } handler - Scroll滚动时触发的回调。<br/>取值为undefined时，不使用回调函数。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onDidScroll(handler: ScrollOnScrollCallback | undefined): this;

  /**
   * 滚动到边缘事件回调。
   *
   * 触发该事件的条件：
   *
   * 1、滚动组件滚动到边缘时触发，支持键鼠操作等其他触发滚动的输入设置。
   *
   * 2、通过滚动控制器API接口调用。
   *
   * 3、越界回弹。
   *
   * @param { OnScrollEdgeCallback | undefined } event - 滚动到的边缘位置。<br/>当Scroll设置为水平方向滚动时，上报[Edge.Center]{@link Edge}表示
   *     水平方向起始位置，上报[Edge.Baseline]{@link Edge}表示水平方向末尾位置。由于[Edge.Center]{@link Edge}和[Edge.Baseline]{@link Edge}枚举值已经
   *     废弃，推荐使用
   *     [onReachStart](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#onreachstart11)、
   *     [onReachEnd](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#onreachend11)事件监听是否滚动到
   *     边界。<br/>取值为undefined时，不使用回调函数。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onScrollEdge(event: OnScrollEdgeCallback | undefined): this;

  /**
   * 滚动开始时触发。手指拖动Scroll或拖动Scroll的滚动条触发的滚动开始时，会触发该事件。使用[Scroller]{@link Scroller}滚动控制器触发的带动画的滚动，动画开始时会触发该事件。
   *
   * 触发该事件的条件：
   *
   * 1、滚动组件开始滚动时触发，支持键鼠操作等其他触发滚动的输入设置。
   *
   * 2、通过滚动控制器API接口调用后开始，带过渡动效。
   *
   * @param { VoidCallback | undefined } event - 滚动开始回调。<br/>取值为undefined时，不使用回调函数。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onScrollStart(event: VoidCallback | undefined): this;

  /**
   * 滚动停止时触发。手拖动Scroll或拖动Scroll的滚动条触发的滚动，手离开屏幕后滚动停止时会触发该事件。使用[Scroller]{@link Scroller}滚动控制器触发的带动画的滚动，动画停止时会触发该事件。
   *
   * 触发该事件的条件：
   *
   * 1、滚动组件触发滚动后停止，支持键鼠操作等其他触发滚动的输入设置。
   *
   * 2、通过滚动控制器API接口调用后开始，带过渡动效。
   *
   * @param { VoidCallback | undefined } event - 滚动停止回调。<br/>取值为undefined时，不使用回调函数。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onScrollStop(event: VoidCallback | undefined): this;

  /**
   * 每帧缩放完成时触发。
   *
   * @param { ScrollOnDidZoomCallback | undefined } event - 每帧缩放完成时回调。<br/>当设置为undefined时，重置该事件回调。<br/>取值为undefined时，不
   *     使用回调函数。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onDidZoom(event: ScrollOnDidZoomCallback | undefined): this;

  /**
   * 手势缩放开始触发。
   *
   * @param { VoidCallback | undefined } event - 缩放开始回调。<br/>当设置为undefined时，重置该事件回调。<br/>取值为undefined时，不使用回调函数。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onZoomStart(event: VoidCallback | undefined): this;

  /**
   * 手势缩放停止时触发。
   *
   * @param { VoidCallback | undefined } event - 缩放停止回调。<br/>当设置为undefined时，重置该事件回调。<br/>取值为undefined时，不使用回调函数。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onZoomStop(event: VoidCallback | undefined): this;

  /**
   * 设置滚动条状态。如果容器组件无法滚动，则滚动条不显示。如果容器组件的子组件大小为无穷大，则滚动条不支持拖动和伴随滚动。
   *
   * 从API version 10开始，当滚动组件存在圆角时，为避免滚动条被圆角截断，滚动条会自动计算距顶部和底部的避让距离。
   *
   * @param { BarState | undefined } barState - 滚动条状态。<br/>默认值：BarState.Auto<br/>取值为undefined时，按默认值处理。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default scrollBar(barState: BarState | undefined): this;

  /**
   * 设置滚动条的颜色。与[scrollBarColor]{@link scrollBarColor}相比，color参数开始支持Resource类型。
   *
   * @param { Color | int | string | Resource | undefined } color - 滚动条的颜色。<br/>默认值：'#66182431'<br/>number为HEX格式颜色，支持
   *     rgb或者argb，示例：0xffffff。string为rgb或者argb格式颜色，示例：'#ffffff'。<br/>取值为undefined时，滚动条的颜色为默认颜色。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default scrollBarColor(color: Color | int | string | Resource | undefined): this;

  /**
   * 设置滚动条的宽度，不支持百分比设置。宽度设置后，滚动条正常状态和按压状态宽度均为滚动条的宽度值。如果滚动条的宽度超过Scroll组件主轴方向的高度，则滚动条的宽度会变为默认值。
   *
   * @param { double | string | undefined } value - 滚动条的宽度。<br/>默认值：4<br/>单位：vp<br/>取值范围：设置为小于0的值时，按默认值处理。设置为0时，不显示滚动
   *     条。<br/>取值为undefined时，按默认值处理。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default scrollBarWidth(value: double | string | undefined): this;

  /**
   * 设置滚动条的宽度，不支持百分比设置。宽度设置后，滚动条正常状态和按压状态宽度均为滚动条的宽度值。如果滚动条的宽度超过Scroll组件主轴方向的高度，则滚动条的宽度会变为4vp，支持Resource资源类型。
   *
   * 未通过该接口设置时，设置滚动条的宽度为4vp。
   *
   * @param { Resource | undefined } value - 滚动条的宽度。<br/>单位：vp <br/>取值范围：
   *     [0, +∞)。设置为小于0的值时，按4vp处理。设置为0时，不显示滚动条。<br/>取值为undefined时，按4vp处理。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default scrollBarWidth(value: Resource | undefined): this;

  /**
   * 设置边缘滑动效果。
   *
   * @param { EdgeEffect | undefined } edgeEffect - Scroll组件的边缘滑动效果，支持弹簧效果和阴影效果。<br/>默认值：EdgeEffect.None<br/>取值为
   *     undefined时，按默认值处理。
   * @param { EdgeEffectOptions | undefined } [options] - 组件内容大小小于组件自身时，是否开启滑动效果。设置为{ alwaysEnabled: true }会开启滑动效果，{
   *     alwaysEnabled: false }不开启。<br/>默认值：{ alwaysEnabled: true }<br/>取值为undefined时，按默认值处理。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default edgeEffect(edgeEffect: EdgeEffect | undefined, options?: EdgeEffectOptions | undefined): this;

  /**
   * 该接口回调时，事件参数传入即将发生的滚动量，事件处理函数中可根据应用场景计算实际需要的滚动量并作为事件处理函数的返回值返回，Scroll将按照返回值的实际滚动量进行滚动。
   *
   * 支持[offsetRemain]{@link OnScrollFrameBeginHandlerResult}为负值。
   *
   * 若通过onScrollFrameBegin事件和[scrollBy]{@link Scroller#scrollBy}方法实现容器嵌套滚动，需设置子滚动节点的[EdgeEffect]{@link edgeEffect}为
   * None。如Scroll嵌套List滚动时，List组件的
   * [edgeEffect](docroot://reference/apis-arkui/arkui-ts/ts-container-list.md#edgeeffect)属性需设置为EdgeEffect.None，否则抛滑
   * List，会触发List的边缘回弹动画，导致嵌套滚动失效。
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
   * @param { OnScrollFrameBeginCallback | undefined } event - 每帧滚动开始回调函数。<br/>取值为undefined时，不使用回调函数。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onScrollFrameBegin(event: OnScrollFrameBeginCallback | undefined): this;

  /**
   * 设置前后两个方向的嵌套滚动模式，实现与父组件的滚动联动。
   *
   * @param { NestedScrollOptions | undefined } value - 嵌套滚动选项。<br/>。
   *     <br>默认值：{ scrollForward: NestedScrollMode.SELF_ONLY,
   *     scrollBackward: NestedScrollMode.SELF_ONLY }。
   * @returns { this } scroll的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default nestedScroll(value: NestedScrollOptions | undefined): this;

  /**
   * 设置是否支持滚动手势。
   *
   * > **说明：**
   *
   * > 组件无法通过鼠标按下拖动操作进行滚动。
   *
   * @param { boolean | undefined } value - 是否支持滚动手势。设置为true时可以通过手指或者鼠标滚动，设置为false时无法通过手指或者鼠标滚动，但不影响控制器
   *     [Scroller]{@link Scroller}的滚动接口。<br/>默认值：true<br/>取值为undefined时，按默认值处理。
   * @returns { this }    * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableScrollInteraction(value: boolean | undefined): this;

  /**
   * 设置摩擦系数，手动划动滚动区域时生效，仅影响惯性滚动过程，对惯性滚动过程中的链式效果有间接影响。
   *
   * @param { double | Resource | undefined } value - 摩擦系数。<br/>。
   *     <br>默认值：非可穿戴设备为0。
   * @returns { this } scroll的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default friction(value: double | Resource | undefined): this;

  /**
   * 设置Scroll组件的限位滚动模式。
   *
   * 限位动画期间[onWillScroll]{@link onWillScroll}事件上报的滚动操作来源类型为ScrollSource.FLING。
   *
   * @param { ScrollSnapOptions | undefined } value - Scroll组件的限位滚动模式。<br/>取值为undefined时，按默认值处理。
   * @returns { this }    * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default scrollSnap(value: ScrollSnapOptions | undefined): this;

  /**
   * 设置是否支持划动翻页。如果同时设置了划动翻页enablePaging和限位滚动scrollSnap，则scrollSnap优先生效，enablePaging不生效。
   *
   * @param { boolean | undefined } value - 是否支持划动翻页。设置为true支持滑动翻页，false不支持。 <br/>。
   * @returns { this } scroll的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enablePaging(value: boolean | undefined): this;

  /**
   * 设置初始滚动偏移量。只在首次布局时生效，后续动态修改该属性值不生效。
   *
   * @param { OffsetOptions | undefined } value - 当输入的大小为百分比时，初始滚动偏移量为Scroll组件主轴方向大小与百分比数值之积。<br/>取值为undefined时，按默认值处
   *     理。
   * @returns { this } scroll的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default initialOffset(value: OffsetOptions | undefined): this;

  /**
   * 动态设置Scroll组件的属性方法。
   *
   * @param { AttributeModifier<ScrollAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<ScrollAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Scroll滚动时触发的回调。
 * > **说明：**
 * > 若通过[onScrollFrameBegin]{@link onScrollFrameBegin}事件和[scrollBy]{@link Scroller#scrollBy}方法实现容器嵌套滚动，需设置子滚动节点的
 * > EdgeEffect为None。如Scroll嵌套List滚动时，List组件的[edgeEffect](docroot://reference/apis-arkui/arkui-ts/ts-container-list.md#edgeeffect)
 * > 属性需设置为EdgeEffect.None。
 *
 * @param { double } xOffset - 相对于上一帧水平方向的偏移量，Scroll中的内容向左滚动时偏移量为正，向右滚动时偏移量为负。<br/>单位vp。
 *     <br>单位:vp。
 *     <br>单位:vp。
 * @param { double } yOffset - 相对于上一帧竖直方向的偏移量，Scroll中的内容向上滚动时偏移量为正，向下滚动时偏移量为负。<br/>单位vp。
 *     <br>单位:vp。
 *     <br>单位:vp。
 * @param { ScrollState } scrollState - 当前滚动状态。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ScrollOnScrollCallback = (xOffset: double, yOffset: double, scrollState: ScrollState) => void;

/**
 * Scroll滚动前触发的回调。
 *
 * @param { double } xOffset - 相对于上一帧水平方向的偏移量，Scroll中的内容向左滚动时偏移量为正，向右滚动时偏移量为负。<br/>单位vp。
 * @param { double } yOffset - 相对于上一帧竖直方向的偏移量，Scroll中的内容向上滚动时偏移量为正，向下滚动时偏移量为负。<br/>单位vp。
 * @param { ScrollState } scrollState - 当前滚动状态。
 * @param { ScrollSource } scrollSource - 当前滚动操作的来源。
 * @returns { undefined | OffsetResult } the remain offset for the Scroll,
 *     same as (xOffset, yOffset) when no OffsetResult is returned.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ScrollOnWillScrollCallback = (xOffset: double, yOffset: double, scrollState: ScrollState, scrollSource: ScrollSource) => (undefined | OffsetResult);

/**
 * Scroll每帧缩放完成时触发的回调。
 *
 * @param { double } scale - 当前缩放倍数。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type ScrollOnDidZoomCallback = (scale: double) => void;

/**
 * 创建Scroll滚动容器。
 *
 * @param { Scroller } [可滚动组件的控制器。用于与可滚动组件进行绑定。] - 可滚动组件的控制器。用于与可滚动组件进行绑定。
 * @param { CustomBuilder } [content_] - 子组件。
 * @returns { ScrollAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Scroll(
    scroller?: Scroller, 
    content_?: CustomBuilder,
): ScrollAttribute;