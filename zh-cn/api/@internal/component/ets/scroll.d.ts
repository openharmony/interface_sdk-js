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
 * 滚动对齐模式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ScrollAlign {

  /**
   * 列表项起始边与列表起始边对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  START,

  /**
   * 列表项在主轴上居中对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  CENTER,

  /**
   * 列表项末尾边与列表末尾边对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  END,

  /**
   * 列表项自动对齐。
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
 * 表示滚动操作产生的偏移量。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare interface OffsetResult {

  /**
   * 水平滚动偏移量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  xOffset: number;

  /**
   * 竖直滚动偏移量。
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
 * 滚动到容器边缘的参数。
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
 * 滚动到指定索引的参数。
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
 * 自定义滚动动画的参数。
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
 * 设置初始滚动偏移量的参数。
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
 * 定义UIScrollEvent，用于设置目标组件的不同通用事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare interface UIScrollEvent extends UIScrollableCommonEvent {

  /**
   * 设置或重置Scroll滚动前触发的回调。
   *
   * @param { ScrollOnWillScrollCallback | undefined } callback - 回调函数，在Scroll即将滚动时触发。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setOnWillScroll(callback: ScrollOnWillScrollCallback | undefined): void;

  /**
   * 设置或重置Scroll滚动时触发的回调。
   *
   * @param { ScrollOnScrollCallback | undefined } callback - 回调函数，在Scroll滚动时触发。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  setOnDidScroll(callback: ScrollOnScrollCallback | undefined): void;
}

/**
 * 可滚动容器组件的控制器，可以将此组件绑定至容器组件，然后通过它控制容器组件的滚动。同一个控制器不可以控制多个容器组件，目前支持绑定到ArcList、ArcScrollBar、List、Scroll、ScrollBar、Grid、WaterFlow上。
 *
 * <p><strong>说明</strong>
 * <br>1、Scroller控制器与滚动容器组件的绑定发生在组件创建阶段。
 * <br>2、Scroller控制器与滚动容器组件绑定后才可以正常调用Scroller方法，否则根据调用接口不同会不生效或者抛异常。
 * <br>3、以aboutToAppear为例，aboutToAppear在创建自定义组件的新实例后，在执行其build()方法之前执行。因此如果滚动组件在自定义组件build内，在该自定义组件aboutToAppear执行时，内部滚动组件还没有创建，是不能正常调用上述Scroller方法的。
 * <br>4、以onAppear为例，组件挂载显示后触发此回调。因此在滚动组件的onAppear回调执行时，滚动组件已经创建并已经和Scroller绑定成功，是可以正常调用Scroller方法的。
 * </p>
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
   * 滑动到指定位置。
   *
   * <p><strong>说明</strong>
   * <br>scrollTo动画速度大于200vp/s时，滚动组件区域内的组件不响应点击事件。
   * </p>
   *
   * @param { object } value [since 7 - 17]
   * @param { ScrollOptions } options - 滑动到指定位置的参数。 [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollTo(options: ScrollOptions);

  /**
   * 滚动到容器边缘，不区分滚动轴方向，Edge.Top和Edge.Start表现相同，Edge.Bottom和Edge.End表现相同。
   * Scroll组件默认有动画，Grid、List、WaterFlow组件默认无动画。
   *
   * @param { Edge } value - 滚动到的边缘位置。
   *     <br><em>原子化服务API</em>：该API可在原子化服务中使用，从API version 11开始。
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
   * 滚动类组件根据传入的初始速度进行惯性滚动。
   *
   * @param { number } velocity - 初始速度，单位vp/s。
   *     <br><em>说明</em>
   *     <br>设置为0时按异常值处理，不生效。正值表示向上方滚动，负值表示向下方滚动。
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
   * 滚动到下一页或上一页。
   *
   * @param { object } value [since 9 - 13]
   * @param { ScrollPageOptions } value - 翻页模式。 [since 14]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  scrollPage(value: ScrollPageOptions);

  /**
   * 滚动到下一页或上一页。
   *
   * @param { object } value - next: Whether to turn to the next page.
   *     The value <em>true</em> means to scroll to the next page, and <em>false</em> means to scroll to the previous
   *     page.
   *     direction: Scrolling direction: horizontal or vertical.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead Scroller#scrollPage
   */
  scrollPage(value: { next: boolean; direction?: Axis });

  /**
   * 获取当前滚动偏移量。
   *
   * <p><strong>说明</strong>
   * <br>1. 当Scroller没有和组件绑定时，该接口会返回undefined，但是接口中没有声明，
   * 推荐使用offset函数。
   * <br>2. Grid、List、WaterFlow组件有懒加载机制，组件内容没有加载并布局完成时，
   * 内容总偏移量通过估算得到，估算结果可能会有误差。其中List组件可以通过childrenMainSize
   * 属性解决估算不准确的问题，Grid与WaterFlow估算不准暂无解决方案。
   * </p>
   *
   * @returns { OffsetResult } 返回当前的滚动总偏移量。当Scroller没有和组件绑定时，返回值为undefined。 [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  currentOffset() : OffsetResult;

  /**
   * 获取当前滚动偏移量。
   *
   * @returns { OffsetResult | undefined } Returns the current scrolling offset.
   *     If the scroller not bound to a component, the return value is undefined.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  offset() : OffsetResult | undefined;

  /**
   * 滑动到指定索引位置，支持设置额外偏移量。
   * 开启smooth动效时，会对经过的所有item进行加载和布局计算，当大量加载item时会导致性能问题，
   * 建议先调用scrollToIndex不带动画跳转到目标附近位置，再调用scrollToIndex带动画滚动到目标位置。
   *
   * <p><strong>说明</strong>
   * <br>该接口仅对ArcList、Grid、List和WaterFlow组件生效。
   * <br>在LazyForEach、ForEach、Repeat刷新数据源时，需确保在数据刷新完成之后再调用此接口。
   * <br>从API version 11开始，在List中支持contentStartOffset和contentEndOffset。
   * 从API version 22开始，在Grid和Waterflow组件中支持设置contentStartOffset和contentEndOffset。
   * <br>- 当滚动容器组件设置contentStartOffset时，如果ScrollAlign设置为START，滚动结束时，
   * 指定item首部会与滚动容器组件contentStartOffset处对齐。
   * <br>- 当滚动容器组件设置contentEndOffset时，如果ScrollAlign设置为END，滚动结束时，
   * 指定item尾部会与滚动容器组件contentEndOffset处对齐。
   * <br>- 当滚动容器组件设置contentStartOffset或contentEndOffset时，如果ScrollAlign设置为AUTO，
   * 且指定item完全处于显示区内，不做调整；否则依照滚动距离最短的原则，将指定item首部与滚动组件
   * contentStartOffset处对齐，或指定item尾部与滚动组件contentEndOffset处对齐，使指定item完全显示。
   * </p>
   *
   * @param { number } value - 要滑动到的目标元素在当前容器中的索引值。
   *     <br><em>说明</em>
   *     <br>value值设置成负值或者大于当前容器子组件的最大索引值，视为异常值，本次跳转不生效。
   * @param { boolean } smooth - 设置滑动到列表项在列表中的索引值时是否有动效，true表示有动效，false表示没有动效。 [since 7 - 11]
   * @param { ScrollAlign } align - 指定滑动到的元素与当前容器的对齐方式。 [since 7 - 11]
   * @param { boolean } [smooth] - 设置滑动到列表项在列表中的索引值时是否有动效，true表示有动效，false表示没有动效。 [since 7 - 11]
   * @param { ScrollAlign } [align] - 指定滑动到的元素与当前容器的对齐方式。 [since 7 - 11]
   * @param { ScrollToIndexOptions } [options] - 设置滑动到指定Index的选项，如额外偏移量。<br>默认值：<em>0</em>，单位：vp [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollToIndex(value: number, smooth?: boolean, align?: ScrollAlign, options?: ScrollToIndexOptions);

  /**
   * 滚动指定距离。
   *
   * <p><strong>说明</strong>
   * <br>该接口支持ArcList、Scroll、List、Grid和WaterFlow组件。
   * </p>
   *
   * @param { Length } dx - 水平方向滚动距离，不支持百分比形式。
   * @param { Length } dy - 竖直方向滚动距离，不支持百分比形式。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  scrollBy(dx: Length, dy: Length);

  /**
   * 检查是否已滚动到底部。
   *
   * <p><strong>说明</strong>
   * <br>该接口支持ArcList、Scroll、List、Grid和WaterFlow组件。
   * </p>
   *
   * @returns { boolean } 返回是否已滚动到底部。true表示已经滚动到底部，false表示还没滚动到底部。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  isAtEnd(): boolean;

  /**
   * 获取子组件相对于父组件的大小和位置。
   *
   * <p><strong>说明</strong>
   * <br>index必须是显示区域内可见的子组件的索引，否则视为无效值。
   * <br>非法值返回的大小和位置均为0。
   * </p>
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
   * 根据坐标获取子组件的索引。
   *
   * <p><strong>说明</strong>
   * <br>坐标无效时返回<em>-1</em>。
   * </p>
   *
   * @param { number } x - x轴坐标，单位为vp。
   * @param { number } y - y轴坐标，单位为vp。
   * @returns { number } 返回子组件的索引。
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
   * 获取内容大小。
   *
   * @returns { SizeResult } 滚动组件内容总大小，包括内容宽度和高度。<br/>单位：vp
   * @throws { BusinessError } 100004 - Controller not bound to a component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  contentSize(): SizeResult;

  /**
   * 获取此控制器对应的FrameNode。
   *
   * @returns { FrameNode | undefined } Returns the FrameNode bound to this scroller.
   *     If the scroller is not bound to a component, the return value is undefined.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getFrameNode(): FrameNode | undefined;
}

/**
 * 滑动到指定位置的参数。
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
 * 翻页滚动行为的参数。
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
 * 可滚动的容器组件，当子组件的布局尺寸超过父组件的尺寸时，内容可以滚动。
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
 * @param { Edge } side - 滚动到的边缘位置。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnScrollEdgeCallback = (side: Edge) => void;

/**
 * onScrollFrameBegin回调返回的实际滚动偏移量。
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
 * @param { ScrollState } state - 当前滑动状态。
 * @returns { OnScrollFrameBeginHandlerResult } data - 返回实际滑动量。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnScrollFrameBeginCallback = (offset: number, state: ScrollState) => OnScrollFrameBeginHandlerResult;

/**
 * 定义Scroll组件的属性函数。
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
   * 设置滚动方向。该值被修改后会重置滚动偏移量。
   *
   * @param { ScrollDirection } value - 滚动方向。<br>默认值：<em>ScrollDirection.Vertical</em>
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
   *     <br>默认值：1。
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
   * 当maxZoomScale和minZoomScale不同时为1时，Scroll组件会启用缩放手势。
   *
   * @param { number } scale - Scroll组件内容的最小手势缩放比例。
   *     <br>默认值：1。
   *     <br>取值范围：(0, maxZoomScale]。大于maxZoomScale时按maxZoomScale处理。
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  minZoomScale(scale: number): ScrollAttribute;

  /**
   * 设置Scroll组件内容的缩放比例。该参数支持!!双向绑定变量。
   *
   * @param { number } scale - 设置Scroll组件内容的缩放比例。
   *     <br>默认值：1。
   *     <br>取值范围：(0, +∞)。
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  zoomScale(scale: number): ScrollAttribute;

  /**
   * 启用过缩放回弹效果。
   *
   * @param { boolean } enable - 启用过缩放回弹效果。设置为true表示启用该效果，设置为false表示禁用该效果。
   *     <br>默认值：true。
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
   * <p><strong>说明</strong>
   * <br>1、滚动组件触发滚动时触发，支持键鼠操作等其他触发滚动的输入设置。
   * <br>2、通过滚动控制器API接口调用。
   * <br>3、越界回弹。
   * </p>
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
   * <p><strong>说明</strong>
   * <br>1、滚动组件触发滚动时触发，支持键鼠操作等其他触发滚动的输入设置。
   * <br>2、通过滚动控制器API接口调用。
   * <br>3、越界回弹。
   * </p>
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
   * <p><strong>说明</strong>
   * <br>1、滚动组件触发滚动时触发，支持键鼠操作等其他触发滚动的输入设置。
   * <br>2、通过滚动控制器API接口调用。
   * <br>3、越界回弹。
   * </p>
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
   * <p><strong>说明</strong>
   * <br>1、滚动组件滚动到边缘时触发，支持键鼠操作等其他触发滚动的输入设置。
   * <br>2、通过滚动控制器API接口调用。
   * <br>3、越界回弹。
   * </p>
   *
   * @param { function } event [since 7 - 17]
   * @param { OnScrollEdgeCallback } event - 滚动到的边缘位置。 [since 18]
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onScrollEdge(event: OnScrollEdgeCallback): ScrollAttribute;

  /**
   * 滚动开始时触发。
   *
   * <p><strong>说明</strong>
   * <br>1、滚动组件开始滚动时触发，支持键鼠操作等其他触发滚动的输入设置。
   * <br>2、通过滚动控制器API接口调用后开始，带过渡动效。
   * </p>
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
   * <p><strong>说明</strong>
   * <br>1、滚动组件触发滚动后停止，支持键鼠操作等其他触发滚动的输入设置。
   * <br>2、通过滚动控制器API接口调用后停止，带过渡动效。
   * </p>
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
   * 滚动停止时触发。
   *
   * <p><strong>说明</strong>
   * <br>1、滚动组件触发滚动后停止，支持键鼠操作等其他触发滚动的输入设置。
   * <br>2、通过滚动控制器API接口调用后停止，带过渡动效。
   * </p>
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
   * 设置滚动条状态。如果容器组件无法滚动，则滚动条不显示。如果容器组件的子组件大小为无穷大，
   * 则滚动条不支持拖动和伴随滚动。从API version 10开始，当滚动组件存在圆角时，为避免滚动条被圆角截断，
   * 滚动条会自动计算距顶部和底部的避让距离。
   *
   * @param { BarState } barState - 滚动条状态。<br>默认值：<em>BarState.Auto</em>
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
   * @param { Color | number | string } color - 滚动条的颜色。<br>默认值：<em>'\#66182431'</em>
   *     <br>number为HEX格式颜色，支持rgb或者argb，示例：0xffffff。
   *     <br>string为rgb或者argb格式颜色，示例：'#ffffff'。
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollBarColor(color: Color | number | string): ScrollAttribute;

  /**
   * 设置滚动条的颜色。与scrollBarColor相比，color参数开始支持Resource类型。
   *
   * @param { Color | number | string | Resource } color - 滚动条的颜色。<br>默认值：<em>'\#66182431'</em>
   *     <br>number为HEX格式颜色，支持rgb或者argb，示例：0xffffff。
   *     string为rgb或者argb格式颜色，示例：'#ffffff'。
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  scrollBarColor(color: Color | number | string | Resource): ScrollAttribute;

  /**
   * 设置滚动条的宽度，不支持百分比设置。
   *
   * @param { number | string } value - 滚动条的宽度。<br>默认值：<em>4</em> <br>单位：vp
   *     <br>设置为小于0的值时，按默认值处理。设置为0时，不显示滚动条。
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  scrollBarWidth(value: number | string): ScrollAttribute;

  /**
   * 设置滚动条的宽度，不支持百分比设置。支持Resource资源类型。
   *
   * @param { number | string | Resource } value  - 滚动条的宽度。
   *     <br>单位：vp
   *     <br>默认值：<em>4</em>
   *     <br>取值范围：[0, +∞)。设置为小于0的值时，按4vp处理。设置为0时，不显示滚动条。
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
   * @param { EdgeEffect } edgeEffect - Scroll组件的边缘滑动效果，支持弹簧效果和阴影效果。
   *     <br>默认值：<em>EdgeEffect.None</em>
   * @param { EdgeEffectOptions } options - 组件内容大小小于组件自身时，是否开启滑动效果。
   *     设置为{ alwaysEnabled: true }会开启滑动效果，{ alwaysEnabled: false }不开启。
   *     <br>默认值：<em>{ alwaysEnabled: true }</em> [since 11]
   * @returns { ScrollAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  edgeEffect(edgeEffect: EdgeEffect, options?: EdgeEffectOptions): ScrollAttribute;

  /**
   * 每帧滚动开始前触发。
   *
   * <p><strong>说明</strong>
   * <br>满足以下任一条件时触发该事件：
   * <br>1. 用户交互（如手指滑动、键鼠操作等）触发滚动。
   * <br>2. Scroll惯性滚动。
   * <br>3. 调用fling接口触发滚动。
   * <br>不触发该事件的条件：
   * <br>1. 调用除fling接口外的其他滚动控制接口。
   * <br>2. 越界回弹。
   * <br>3. 拖动滚动条。
   * </p>
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
   * 设置前后两个方向的嵌套滚动模式，实现与父组件的滚动联动。
   * Scroll设置enablePaging或者scrollSnap，并同时设置父组件优先的嵌套滚动时，嵌套滚动不生效。
   *
   * @param { NestedScrollOptions } value - 嵌套滚动选项。
   *     <br>默认值：<em>{ scrollForward: NestedScrollMode.SELF_ONLY, scrollBackward: NestedScrollMode.SELF_ONLY
   *     }</em>
   * @returns { ScrollAttribute } Scroll组件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  nestedScroll(value: NestedScrollOptions): ScrollAttribute;

  /**
   * 设置是否支持滚动手势。设置为false时不支持手指或鼠标滚动，但不影响控制器的滚动接口。
   * 组件无法通过鼠标按下拖动操作进行滚动。
   *
   * @param { boolean } value - 是否支持滚动手势。设置为true时可以通过手指或者鼠标滚动，设置为false时无法通过手指或者鼠标滚动，但不影响控制器的滚动接口。<br>默认值：<em>true</em>
   * @returns { ScrollAttribute } Scroll组件的属性
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableScrollInteraction(value: boolean): ScrollAttribute;

  /**
   * 设置摩擦系数，手动划动滚动区域时生效，仅影响惯性滚动过程，对惯性滚动过程中的链式效果有间接影响。
   * 设置为小于等于0的值时，按默认值处理。
   *
   * @param { number | Resource } value - 摩擦系数。
   *     <br>默认值：非可穿戴设备为<em>0.6</em>，可穿戴设备为<em>0.9</em>
   *     <br>从API version 11开始，非可穿戴设备默认值为<em>0.7</em>。
   *     <br>从API version 12开始，非可穿戴设备默认值为<em>0.75</em>。
   * @returns { ScrollAttribute } Scroll组件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  friction(value: number | Resource): ScrollAttribute;

  /**
   * 设置Scroll组件的限位滚动模式。
   * 限位动画期间onWillScroll事件上报的滚动操作来源类型为ScrollSource.FLING。
   *
   * @param { ScrollSnapOptions } value - Scroll组件的限位滚动模式。
   * @returns { ScrollAttribute } Scroll组件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  scrollSnap(value: ScrollSnapOptions): ScrollAttribute;

  /**
   * 设置是否支持划动翻页。如果同时设置了划动翻页enablePaging和限位滚动scrollSnap，
   * 则scrollSnap优先生效，enablePaging不生效。
   *
   * @param { boolean } value - 是否支持划动翻页。设置为true支持滑动翻页，false不支持。
   *     <br>默认值：<em>false</em>
   * @returns { ScrollAttribute } Scroll组件的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  enablePaging(value: boolean): ScrollAttribute;

  /**
   * 设置初始滚动偏移量。只在首次布局时生效，后续动态修改该属性值不生效。
   *
   * @param { OffsetOptions } value - 初始滚动偏移量。当输入的大小为百分比时，
   *     初始滚动偏移量为Scroll组件主轴方向大小与百分比数值之积。
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
 * <p><strong>说明</strong>
 * <br>若通过onScrollFrameBegin事件和scrollBy方法实现容器嵌套滚动，需设置子滚动节点的EdgeEffect为None。如Scroll嵌套List滚动时，List组件的edgeEffect属性需设置为EdgeEffect.None。
 * </p>
 *
 * @param { number } xOffset - 相对于上一帧水平方向的偏移量，Scroll中的内容向左滚动时偏移量为正，向右滚动时偏移量为负。
 *     <br>单位vp
 * @param { number } yOffset - 相对于上一帧竖直方向的偏移量，Scroll中的内容向上滚动时偏移量为正，向下滚动时偏移量为负。
 *     <br>单位vp
 * @param { ScrollState } scrollState - 当前滚动状态。
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
 * @returns { void | OffsetResult } the remain offset for the Scroll,
 *     same as (xOffset, yOffset) when no OffsetResult is returned.
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
 * 可滚动的容器组件，当子组件的布局尺寸超过父组件的尺寸时，内容可以滚动。
 *
 * > **说明：**
 * >
 * > - 该组件嵌套List子组件滚动时，若List不设置宽高，则默认全部加载，在对性能有要求的场景下建议指定List的宽高。
 * > - 该组件滚动的前提是主轴方向大小小于内容大小。
 * > - Scroll组件通用属性clip的默认值为true。
 * >
 *
 * ###### 子组件
 *
 * 支持单个子组件。
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