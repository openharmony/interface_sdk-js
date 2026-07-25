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
* Swiper容器组件的控制器，可以将此对象绑定至Swiper组件，实现控制Swiper翻页等功能。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare class SwiperController {

  /**
   * SwiperController的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  constructor();

  /**
   * 翻至下一页。翻页带动效切换过程，时长通过Swiper的[duration]{@link SwiperAttribute#duration}属性设置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  showNext();

  /**
   * 翻至上一页。翻页带动效切换过程，时长通过Swiper的[duration]{@link SwiperAttribute#duration}属性设置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  showPrevious();

  /**
   * 翻至指定页面。
   *
   * @param { number } index - 指定页面在Swiper中的索引值。<br/>**说明：** <br/>设置的值小于0或大于最大页面索引时，取0。
   * @param { boolean } useAnimation - 设置翻至指定页面时是否有动效，true表示有动效，false表示没有动效。<br/>默认值：false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  changeIndex(index: number, useAnimation?: boolean);

  /**
   * 翻页至指定页面。
   *
   * > **说明：**
   *
   * > 该接口本身提供了不带动画跳转页面的能力（animationMode设置为false或者SwiperAnimationMode.NO_ANIMATION），不建议使用changeIndex接口启动动画后，直接使用
   * > finishAnimation接口打断来实现页面不带动画跳转。
   *
   * @param { number } index - 指定页面在Swiper中的索引值。<br/>**说明：** <br/>设置的值小于0或大于最大页面索引时，取0。
   * @param { SwiperAnimationMode | boolean } [animationMode] - 设置翻页至指定页面时的动效模式。<br/>默认值：
   *     SwiperAnimationMode.NO_ANIMATION<br/> **说明：** <br/>当传入true时有动效，等同于SwiperAnimationMode.DEFAULT_ANIMATION；当传入
   *     false时无动效，等同于SwiperAnimationMode.NO_ANIMATION。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  changeIndex(index: number, animationMode?: SwiperAnimationMode | boolean);

  /**
   * 停止播放动画。
   *
   * @param { function } callback - Callback invoked when the animation stops. [since 7 - 17]
   * @param { ?VoidCallback } callback - 动画结束的回调。 [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  finishAnimation(callback?: VoidCallback);

  /**
   * 控制Swiper预加载指定子节点。调用该接口后会一次性加载所有指定的子节点，因此为了性能考虑，建议分批加载子节点。使用Promise异步回调。
   *
   * 如果SwiperController对象未绑定任何Swiper组件，直接调用该接口，会抛出JS异常，并返回错误码100004。因此使用该接口时，建议通过try-catch捕获异常。
   *
   * 与[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)和自定义组件结合使用时，由于
   * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)只会保留缓存范围内的自定义组件，在缓存范围外的会被删除，因此需
   * 要开发者保证通过该接口预加载的节点index在缓存范围内。
   *
   * > **说明：**
   *
   * > Swiper的preloadItems需要在Swiper创建之后去调用，首次预加载推荐在Swiper的[onAppear]{@link CommonMethod#onAppear}生命周期中去控制。
   *
   * @param { Optional<Array<number>> } indices - 需预加载的子节点的下标数组。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter invalid. Possible causes:
   *     <br> 1. The parameter type is not Array<number>.
   *     <br> 2. The parameter is an empty array.
   *     <br> 3. The parameter contains an invalid index.
   * @throws { BusinessError } 100004 - Controller not bound to component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  preloadItems(indices: Optional<Array<number>>): Promise<void>;

  /**
   * 开启模拟拖拽功能。
   *
   * > **说明：**
   *
   * > - Swiper已经处在真实手势拖拽中，或者已经开启了模拟拖拽，调用接口会返回false表示操作失败。
   * >
   * > - 模拟拖拽无法触发嵌套滚动。
   *
   * @returns { boolean } 是否开启模拟拖拽功能。<br/>true表示开启模拟拖拽功能成功；false表示开启模拟拖拽功能失败。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  startFakeDrag(): boolean;

  /**
   * 设置模拟拖拽的拖拽距离。
   *
   * > **说明：**
   *
   * > - 模拟拖拽的距离需要依赖布局体现，建议接口在布局前调用，拖拽效果可以在当前帧布局后体现。如果在未布局前调用了多次该接口，当前帧布局时只生效最后一次调用传入的拖拽距离。
   * >
   * > - 在[loop]{@link SwiperAttribute#loop}设置为true的循环场景下，如果设置的模拟拖拽的距离大于布局总长度，此时模拟拖拽距离会被调整为拖拽到刚好显示第一个子节点（向布局起点拖拽）或者最后一个子
   * > 节点（向布局终点方向拖拽）的距离。
   * >
   * > - [onGestureSwipe]{@link SwiperAttribute#onGestureSwipe}事件、
   * > [onContentWillScroll]{@link SwiperAttribute#onContentWillScroll}事件在拖拽过程中不触发。
   * > [customContentTransition]{@link SwiperAttribute#customContentTransition}会在布局前触发，由于真实的拖拽距离可能在布局时被调整，在传入拖拽距离过大时，触发事
   * > 件时的返回的节点显示信息可能与布局结果不一致。
   *
   * @param { number } offset - 需要模拟拖拽的拖拽距离。<br/>正数表示向布局起点拖拽；负数表示向布局终点方向拖拽。
   *     <br>单位为：vp。
   * @returns { boolean } 是否消费传入的拖拽距离。<br/>true表示消费任意传入的拖拽距离；false表示当前没有在模拟拖拽中，或者已经拖拽到边界，没有消费传入的拖拽距离。<br/>设置0为不可消费的拖拽距离。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  fakeDragBy(offset: number): boolean;

  /**
   * 关闭模拟拖拽功能。
   *
   * > **说明：**
   *
   * > 在开启模拟拖拽后，如果接收到真实拖拽手势，模拟拖拽会结束。
   *
   * @returns { boolean } 是否关闭模拟拖拽功能。<br/>true表示关闭模拟拖拽功能成功；false表示关闭模拟拖拽功能失败。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  stopFakeDrag(): boolean;

  /**
   * 获取是否在模拟拖拽中的状态。
   *
   * @returns { boolean } 是否处在模拟拖拽状态。<br/>true表示当前处在模拟拖拽状态；false表示当前不处在模拟拖拽状态。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  isFakeDragging(): boolean;
}

/**
* 设置导航点与Swiper组件的距离。由于导航点有默认交互区域，交互区域高度为32vp，所以无法让显示部分完全贴底。若想实现完全贴底，可以使用
* [IndicatorComponent](docroot://reference/apis-arkui/arkui-ts/ts-swiper-components-indicator.md#indicatorcomponent)组件，
* 更灵活地调整位置。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class Indicator<T> {

  /**
   * 导航点左侧相对于Swiper的位置。
   *
   * @param { Length } value - 设置导航点左侧相对于Swiper的位置。<br/>未设置left和right时，进行自适应大小布局，按照指示器本身大小和Swiper的大小在主轴方向上进行居中对齐。<br/>设置
   *     为0时：按照0位置布局计算。<br/>优先级：高于right属性。<br/>取值范围：[0,Swiper宽度-导航点区域宽度]，超出该范围时，取最近的边界值。
   * @returns { T } 返回当前导航点指示器，用于支持链式调用配置其他导航点属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  left(value: Length): T;

  /**
   * 导航点顶部相对于Swiper的位置。
   *
   * @param { Length } value - 设置导航点顶部相对于Swiper的位置。<br/>未设置top和bottom时，进行自适应大小布局，按照指示器本身大小和Swiper的大小，在交叉轴方向上，位于底部，效果与设置
   *     bottom=0一致。<br/>设置为0时：按照0位置布局计算。<br/>优先级：高于bottom属性。<br/>取值范围：[0,Swiper高度-导航点区域高度]，超出该范围时，取最近的边界值。
   * @returns { T } 返回当前导航点指示器，用于支持链式调用配置其他导航点属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  top(value: Length): T;

  /**
   * 导航点右侧相对于Swiper的位置。
   *
   * @param { Length } value - 设置导航点右侧相对于Swiper的位置。<br/>未设置left和right时，进行自适应大小布局，按照指示器本身大小和Swiper的大小在主轴方向上进行居中对齐。<br/>设置
   *     为0时：按照0位置布局计算。<br/>优先级：低于left属性。<br/>取值范围：[0,Swiper宽度-导航点区域宽度]，超出该范围 时，取最近的边界值。
   * @returns { T } 返回当前导航点指示器，用于支持链式调用配置其他导航点属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  right(value: Length): T;

  /**
   * 导航点底部相对于Swiper的位置。
   *
   * @param { Length } value - 设置导航点底部相对于Swiper的位置。<br/>未设置top和bottom时，进行自适应大小布局，按照指示器本身大小和Swiper的大小，在交叉轴方向上，位于底部，效果与设置
   *     bottom=0一致。<br/>设置为0时：按照0位置布局计算。<br/>优先级：低于top属性。<br/>取值范围：[0,Swiper高度-导航点区域高度]，超出该范围时，取最近的边界值。
   * @returns { T } 返回当前导航点指示器，用于支持链式调用配置其他导航点属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  bottom(value: Length): T;

  /**
   * 导航点底部相对于Swiper的位置，并可通过ignoreSize属性忽略导航点大小。
   *
   * @param { LengthMetrics | Length } bottom - 设置导航点底部相对于Swiper的位置。<br/>未设置top和bottom时，进行自适应大小布局，按照指示器本身大小和Swiper的大小，在交
   *     叉轴方向上，位于底部，效果与设置bottom=0一致。<br/>设置为0时：按照0位置布局计算。<br/>优先级：低于top属性。<br/>取值范围：[0,Swiper高度-导航点区域高度]，超出该范围时，取最近的边界值。
   * @param { boolean } ignoreSize - 设置是否忽略导航点本身大小，默认false。<br/>设置为true时，忽略导航点大小，可以将导航点更靠近Swiper底部；设置为false时，不忽略导航点大小，导航点按默认大小布局。使用方法可以参考
   *     [示例9演示导航点space与bottom](docroot://reference/apis-arkui/arkui-ts/ts-container-swiper.md#示例9演示导航点space与bottom)。<br
   *     /> 说明：[数字导航点]{@link DigitIndicator}ignoreSize属性，不生效的场景如下：<br/> •  当[vertical]{@link SwiperAttribute#vertical} 设
   *     置为false，且bottom > 0。<br/>  •  当[vertical]{@link SwiperAttribute#vertical} 设置为true时：<br/>1、bottom > 0 时。<br/> 2、
   *     bottom设为undefined。 <br/> 3、isSidebarMiddle设置为false时。
   * @returns { T } 返回当前导航点指示器，用于支持链式调用配置其他导航点属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 19 dynamic
   */
  bottom(bottom: LengthMetrics | Length, ignoreSize: boolean): T;

  /**
   * 在[RTL]{@link LayoutDirection}模式下为导航点距离Swiper组件右边的距离，在[LTR]{@link LayoutDirection}模式下为导航点距离Swiper组件左边的距离。
   *
   * @param { LengthMetrics } value - 设置在RTL模式下为导航点距离Swiper组件右边的距离，在LTR模式下为导航点距离Swiper组件左边的距离。<br/>默认值：0<br/>单位：vp<br/>取
   *     值范围：[0, Swiper宽度-导航点区域宽度]，超出该范围时，取最近的边界值。
   * @returns { T } 返回当前导航点指示器，用于支持链式调用配置其他导航点属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  start(value: LengthMetrics): T;

  /**
   * 在RTL模式下为导航点距离Swiper组件左边的距离，在LTR模式下为导航点距离Swiper组件右边的距离。
   *
   * @param { LengthMetrics } value - 设置在RTL模式下为导航点距离Swiper组件左边的距离，在LTR模式下为导航点距离Swiper组件右边的距离。<br/>默认值：0<br/>单位：vp<br/>取
   *     值范围：[0, Swiper宽度-导航点区域宽度]，超出该范围时，取最近的边界值。
   * @returns { T } 返回当前导航点指示器，用于支持链式调用配置其他导航点属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  end(value: LengthMetrics): T;

  /**
   * 返回一个DotIndicator对象。
   *
   * @returns { DotIndicator } 圆点指示器对象，用于设置Swiper组件的圆点导航样式。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static dot(): DotIndicator;

  /**
   * 返回一个DigitIndicator对象。
   *
   * @returns { DigitIndicator } 数字指示器对象，用于设置Swiper组件的数字导航样式。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static digit(): DigitIndicator;
}

/**
* 构造圆点指示器的样式，继承自[Indicator]{@link Indicator}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class DotIndicator extends Indicator<DotIndicator> {

  /**
   * DotIndicator的构造函数。
   *
   * > **说明：**
   *
   * > - 按压导航点时，导航点会放大至1.33倍显示，因此非按压态时导航点的可见范围边界至实际范围边界存在一定距离，该距离会随着itemWidth、itemHeight、selectedItemWidth、
   * > selectedItemHeight等参数变大而变大。
   * >
   * > - 若页面数量较多、圆点导航点超出页面时，建议使用maxDisplayCount设置导航点显示个数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  constructor();

  /**
   * Swiper组件圆点导航指示器的宽。
   *
   * @param { Length } value - 设置Swiper组件圆点导航指示器的宽，不支持设置百分比。<br/>默认值：6<br/>单位：vp<br/>取值范围：(0, +∞)
   * @returns { DotIndicator } 返回当前圆点指示器，用于支持链式调用配置其他导航点属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  itemWidth(value: Length): DotIndicator;

  /**
   * Swiper组件圆点导航指示器的高。
   *
   * @param { Length } value - 设置Swiper组件圆点导航指示器的高，不支持设置百分比。<br/>默认值：6<br/>单位：vp<br/>取值范围：(0, +∞)
   * @returns { DotIndicator } 返回当前圆点指示器，用于支持链式调用配置其他导航点属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  itemHeight(value: Length): DotIndicator;

  /**
   * 选中Swiper组件圆点导航指示器的宽。
   *
   * @param { Length } value - 设置选中Swiper组件圆点导航指示器的宽，不支持设置百分比。<br/>默认值：6<br/>单位：vp<br/>取值范围：(0, +∞)
   * @returns { DotIndicator } 返回当前圆点指示器，用于支持链式调用配置其他导航点属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedItemWidth(value: Length): DotIndicator;

  /**
   * 选中Swiper组件圆点导航指示器的高。
   *
   * @param { Length } value - 设置选中Swiper组件圆点导航指示器的高，不支持设置百分比。<br/>默认值：6<br/>单位：vp<br/>取值范围：(0, +∞)
   * @returns { DotIndicator } 返回当前圆点指示器，用于支持链式调用配置其他导航点属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedItemHeight(value: Length): DotIndicator;

  /**
   * 是否显示Swiper组件圆点导航指示器的蒙版样式。
   *
   * @param { boolean } value - 设置是否显示Swiper组件圆点导航指示器的蒙版样式。true为显示Swiper组件圆点导航指示器的蒙版样式，false为不显示。<br/>默认值：false
   * @returns { DotIndicator } 返回当前圆点指示器，用于支持链式调用配置其他导航点属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  mask(value: boolean): DotIndicator;

  /**
   * Swiper组件圆点导航指示器的颜色。
   *
   * @param { ResourceColor } value - 设置Swiper组件圆点导航指示器的颜色。<br/>默认值：'#1A182431'，浅灰色。
   * @returns { DotIndicator } 返回当前圆点指示器，用于支持链式调用配置其他导航点属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  color(value: ResourceColor): DotIndicator;

  /**
   * 选中Swiper组件圆点导航指示器的颜色。
   *
   * @param { ResourceColor } value - 设置选中Swiper组件圆点导航指示器的颜色。<br/>默认值：'#007DFF'，蓝色。
   * @returns { DotIndicator } 返回当前圆点指示器，用于支持链式调用配置其他导航点属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedColor(value: ResourceColor): DotIndicator;

  /**
   * 圆点导航点指示器样式下，导航点显示个数最大值。
   *
   * @param { number } maxDisplayCount - 设置圆点导航点指示器样式下，导航点显示个数最大值，当实际导航点个数大于最大导航点个数时，会生效超长效果样式，样式如
   *     [示例5](docroot://reference/apis-arkui/arkui-ts/ts-container-swiper.md#示例5设置圆点导航点超长显示)所示。<br/>默认值：这个属性没有默认值，如果设置异
   *     常值那等同于没有超长显示效果。<br/>取值范围：[6, 9]<br/>**说明：** <br/>1、超长显示场景，目前暂时不支持交互功能（包括：手指点击拖拽、鼠标操作等）。<br/>2、在超长显示场景下，中间页面对应的选
   *     中导航点的位置，并不是完全固定的，取决于之前的翻页操作序列。<br/>3、当前仅支持displayCount为1的场景。
   * @returns { DotIndicator } 返回当前圆点指示器，用于支持链式调用配置其他导航点属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  maxDisplayCount(maxDisplayCount: number): DotIndicator;

  /**
   * 设置Swiper圆点导航点间距。
   *
   * @param { LengthMetrics } space - 设置圆点导航点间距，不支持设置百分比。<br/>默认值：PC/2in1设备上为10，其他设备为8。<br/>单位：vp<br/>取值范围：[0, +∞)
   * @returns { DotIndicator } 返回当前圆点指示器，用于支持链式调用配置其他导航点属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 19 dynamic
   */
  space(space: LengthMetrics): DotIndicator;

  /**
   * 设置导航点图标。
   *
   * @param { Array<IndicatorIconInfo> } iconList - 需要设置的导航点索引。
   * @returns { DotIndicator } 返回DotIndicator。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  indicatorIcon(iconList: Array<IndicatorIconInfo>): DotIndicator;
}

/**
* 自适应属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @form
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface SwiperAutoFill {

  /**
   * 设置元素显示最小宽度。
   *
   * 默认值：0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  minSize: VP;
}

/**
* 构造数字指示器的样式，继承自[Indicator]{@link Indicator}。
*
* > **说明：**
*
* > 按组翻页时，数字导航点显示的子节点数量不包括占位节点。
*
* > 数字导航点文本最大的字体缩放倍数[maxFontScale]{@link TextAttribute#maxFontScale}为2。
*
* > 页码的镜像显示依据为系统的RTL状态。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class DigitIndicator extends Indicator<DigitIndicator> {

  /**
   * DotIndicator的构造函数。
   *
   * > **说明：**
   *
   * > - 按压导航点时，导航点会放大至1.33倍显示，因此非按压态时导航点的可见范围边界至实际范围边界存在一定距离，该距离会随着itemWidth、itemHeight、selectedItemWidth、
   * > selectedItemHeight等参数变大而变大。
   * >
   * > - 若页面数量较多、圆点导航点超出页面时，建议使用maxDisplayCount设置导航点显示个数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  constructor();

  /**
   * Swiper组件数字导航点的字体颜色。
   *
   * @param { ResourceColor } value - 设置Swiper组件数字导航点的字体颜色。<br/>默认值：'#ff182431'
   * @returns { DigitIndicator } 返回当前数字指示器，用于支持链式调用配置其他导航点属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontColor(value: ResourceColor): DigitIndicator;

  /**
   * 选中Swiper组件数字导航点的字体颜色。
   *
   * @param { ResourceColor } value - 设置选中Swiper组件数字导航点的字体颜色。<br/>默认值：'#ff182431'
   * @returns { DigitIndicator } 返回当前数字指示器，用于支持链式调用配置其他导航点属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedFontColor(value: ResourceColor): DigitIndicator;

  /**
   * Swiper组件数字导航点的字体样式。
   *
   * @param { Font } value - 设置Swiper组件数字导航点的字体样式。<br/>只支持Font中size和weight参数，family和style设置不生效。<br/>默认值：<br/>{ size: 14,
   *      weight: FontWeight.Normal }
   * @returns { DigitIndicator } 返回当前数字指示器，用于支持链式调用配置其他导航点属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  digitFont(value: Font): DigitIndicator;

  /**
   * 选中Swiper组件数字导航点的字体样式。
   *
   * @param { Font } value - 设置选中Swiper组件数字导航点的字体样式。<br/>默认值：<br/>{ size: 14, weight: FontWeight.Normal }
   * @returns { DigitIndicator } 返回当前数字指示器，用于支持链式调用配置其他导航点属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedDigitFont(value: Font): DigitIndicator;
}

/**
* 左右箭头属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface ArrowStyle {

  /**
   * 设置箭头底板是否显示。为true时箭头底板显示，为false时箭头底板不显示。
   *
   * 默认值：false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  showBackground?: boolean;

  /**
   * 设置箭头显示位置。为true时箭头居中显示在Swiper组件两侧，为false时显示在导航点指示器两侧。
   *
   * 默认值：false
   *
   * 默认显示在导航点指示器两侧。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  isSidebarMiddle?: boolean;

  /**
   * 设置底板大小。
   *
   * 在导航点两侧显示：
   *
   * 默认值：24vp
   *
   * 在组件两侧显示：
   *
   * 默认值：32vp
   *
   * 不支持设置百分比。
   *
   * @default When isSidebarMiddle is false, the default value is 24vp, Otherwise,the default value is 32vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  backgroundSize?: Length;

  /**
   * 设置底板颜色。
   *
   * 在导航点两侧显示：
   *
   * 默认值：'#00000000'
   *
   * 在组件两侧显示：
   *
   * 默认值：'#19182431'
   *
   * @default When isSidebarMiddle is false, the default value is #00000000, Otherwise,the default value is #1918243
   *     1 [since 10 - 10]
   * @default When isSidebarMiddle is false, the default value is #00000000, Otherwise, the default value is #1918243
   *     1 [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * 设置箭头大小。
   *
   * 在导航点两侧显示时：
   *
   * 默认值：18vp
   *
   * 在组件两侧显示时：
   *
   * 默认值：24vp
   *
   * **说明：**
   *
   * showBackground为true时，arrowSize为backgroundSize的3/4。
   *
   * 不支持设置百分比。
   *
   * @default When isSidebarMiddle is false, the default value is 18vp, Otherwise, the default value is 24vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  arrowSize?: Length;

  /**
   * 设置箭头颜色。
   *
   * 默认值：'#182431'
   *
   * @default #182431
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  arrowColor?: ResourceColor;
}

/**
* Swiper在主轴上的尺寸大小模式枚举。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum SwiperDisplayMode {

  /**
   * Swiper滑动一页的宽度为Swiper组件自身的宽度。
   *
   * **说明**：从API version 7开始支持，从API version 10开始废弃，建议使用STRETCH替代。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead SwiperDisplayMode#STRETCH
   */
  Stretch,

  /**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead SwiperDisplayMode#AUTO_LINEAR
   */
  AutoLinear,

  /**
   * Carousel map extension.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  STRETCH,

  /**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 12
   * @useinstead Scroller#scrollTo
   */
  AUTO_LINEAR
}

/**
* 滑块视图容器，提供子组件滑动轮播显示的能力。适用于轮播图展示、图片浏览、引导页、卡片轮播等场景。
*
* > **说明：**
*
* > - Swiper组件通过内置的[PanGesture]{@link gesture}拖动手势实现滑动轮播效果，将[disableSwipe]{@link SwiperAttribute#disableSwipe}属性设为true
* > 时，会禁用该手势监听，从而阻止滑动操作。
* >
* > - Swiper中复用[NodeContainer]{@link node_container}时，禁止递归流程中子节点更新父节点状态变量。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface SwiperInterface {

  /**
   * 创建滑块视图容器。
   *
   * @param { SwiperController } controller - 给组件绑定一个控制器，用来控制组件翻页或者预加载指定子节点。
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (controller?: SwiperController): SwiperAttribute;
}

/**
* 导航点样式。
*
* > **说明：**
*
* > 从API version 8开始支持，从API version 10开始废弃，建议使用[indicator]{@link Indicator}替代。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8 dynamiconly
 * @deprecated since 10
 * @useinstead Indicator
 */
declare interface IndicatorStyle {

  /**
   * 设置导航点左侧相对于Swiper的位置。
   *
   * 未设置left和right时，进行自适应大小布局，按照指示器本身大小和Swiper的大小在主轴方向上进行居中对齐
   *
   * 设置为0时：按照0位置布局计算
   *
   * 优先级：高于right属性
   *
   * 取值范围：[0,Swiper宽度-导航点区域宽度]，超出该范围时，取最近的边界值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead DotIndicator#left
   */
  left?: Length;

  /**
   * 设置导航点顶部相对于Swiper的位置。
   *
   * 未设置top和bottom时，进行自适应大小布局，按照指示器本身大小和Swiper的大小，在交叉轴方向上，位于底部，效果与设置bottom=0一致
   *
   * 设置为0时：按照0位置布局计算
   *
   * 优先级：高于bottom属性
   *
   * 取值范围：[0,Swiper高度-导航点区域高度]，超出该范围时，取最近的边界值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead DotIndicator#top
   */
  top?: Length;

  /**
   * 设置导航点右侧相对于Swiper的位置。
   *
   * 未设置left和right时，进行自适应大小布局，按照指示器本身大小和Swiper的大小在主轴方向上进行居中对齐
   *
   * 设置为0时：按照0位置布局计算
   *
   * 优先级：低于left属性
   *
   * 取值范围：[0,Swiper宽度-导航点区域宽度]，超出该范围时，取最近的边界值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead DotIndicator#right
   */
  right?: Length;

  /**
   * 设置导航点底部相对于Swiper的位置。
   *
   * 未设置top和bottom时，进行自适应大小布局，按照指示器本身大小和Swiper的大小，在交叉轴方向上，位于底部，效果与设置bottom=0一致
   *
   * 设置为0时：按照0位置布局计算
   *
   * 优先级：低于top属性
   *
   * 取值范围：[0,Swiper高度-导航点区域高度]，超出该范围时，取最近的边界值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead DotIndicator#bottom
   */
  bottom?: Length;

  /**
   * 设置导航点的直径，不支持设置百分比。
   *
   * 默认值：6vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead DotIndicator
   */
  size?: Length;

  /**
   * 设置是否显示导航点蒙层样式。
   *
   * true：显示导航点蒙层样式，false：不显示导航点蒙层样式。
   *
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead DotIndicator#mask
   */
  mask?: boolean;

  /**
   * 设置导航点的颜色。
   *
   * 默认值：'#1A182431'，浅灰色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead DotIndicator#color
   */
  color?: ResourceColor;

  /**
   * 设置选中的导航点的颜色。
   *
   * 默认值：'#007DFF'，蓝色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead DotIndicator#selectColor
   */
  selectedColor?: ResourceColor;
}

/**
* Swiper组件动画相关信息集合。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface SwiperAnimationEvent {

  /**
   * Swiper当前显示元素在主轴方向上，相对于Swiper起始位置的位移。单位VP，默认值为0。
   *
   * @default 0.0 vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  currentOffset: number;

  /**
   * Swiper动画目标元素在主轴方向上，相对于Swiper起始位置的位移。单位VP，默认值为0。
   *
   * @default 0.0 vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  targetOffset: number;

  /**
   * Swiper离手动画开始时的离手速度。单位VP/S，默认值为0。
   *
   * @default 0.0 vp/s
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  velocity: number;
}

/**
* 自动播放属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare interface AutoPlayOptions {

  /**
   * 在按下事件中配置子组件是否立即停止播放。
   *
   * 设置为true时，停止播放。设置为false时，自动播放不中断。
   *
   * 默认值：true
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  stopWhenTouched: boolean;
}

/**
* 为指定的导航点索引设置的图标。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface IndicatorIconInfo {

  /**
   * 指定索引。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  index: int;

  /**
   * 需要设置的图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  icon: ResourceStr | SymbolGlyphModifier;
}

/**
* 预加载子组件的配置选项。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 24 dynamic
 */
declare interface CachedCountOptions {

  /**
   * 预加载范围内的节点是否进行绘制。
   *
   * 设置为true时，预加载范围内的节点进行绘制。
   *
   * 设置为false时，预加载范围内的节点不进行绘制。
   *
   * 默认值：false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 24 dynamic
   */
  isShown?: boolean;

  /**
   * [cachedCount]{@link SwiperAttribute#cachedCount(count: number, options: CachedCountOptions)}是否按组计算。
   *
   * 设置为true时，cachedCount按实际子组件个数计算，不按组计算。
   *
   * 设置为false时，如果displayCount.swipeByGroup=true，则cachedCount按组计算，否则按实际子组件个数计算。
   *
   * 默认值：false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 24 dynamic
   */
  independent?: boolean;
}

/**
* Swiper组件和父组件的嵌套滚动模式枚举。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare enum SwiperNestedScrollMode {

  /**
   * Swiper只自身滚动，不与父组件联动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  SELF_ONLY = 0,

  /**
   * Swiper自身先滚动，自身滚动到边缘以后父组件滚动。父组件滚动到边缘以后，如果父组件有边缘效果，则父组件触发边缘效果，否则Swiper触发边缘效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  SELF_FIRST = 1
}

/**
* Swiper组件翻页至指定页面的动效模式。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 15 dynamic
 */
declare enum SwiperAnimationMode {

  /**
   * 无动效翻页至指定页面。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  NO_ANIMATION = 0,

  /**
   * 有动效翻页至指定页面。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  DEFAULT_ANIMATION = 1,

  /**
   * 先无动效翻页至指定页面附近，再有动效翻页至指定页面。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  FAST_ANIMATION = 2
}

/**
* 切换动画开始时触发的回调。
*
 * @param { number } index - 当前显示元素的索引。多列Swiper时，index为最左侧组件的索引。
 * @param { number } targetIndex - 切换动画目标元素的索引。
 * @param { SwiperAnimationEvent } extraInfo - 动画相关信息，包括主轴方向上当前显示元素和目标元素相对Swiper起始位置的位移，以及离手速度。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnSwiperAnimationStartCallback = (index: number, targetIndex: number, extraInfo: SwiperAnimationEvent) => void;

/**
* 切换动画结束时触发的回调。
*
 * @param { number } index - 当前显示元素的索引。多列Swiper时，index为最左侧组件的索引。
 * @param { SwiperAnimationEvent } extraInfo - 动画相关信息，只返回主轴方向上当前显示元素相对于Swiper起始位置的位移。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnSwiperAnimationEndCallback = (index: number, extraInfo: SwiperAnimationEvent) => void;

/**
* 在页面跟手滑动过程中，逐帧触发的回调。
*
 * @param { number } index - 当前显示元素的索引。多列Swiper时，index为最左侧组件的索引。
 * @param { SwiperAnimationEvent } extraInfo - 动画相关信息，只返回主轴方向上当前显示元素相对于Swiper起始位置的位移。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnSwiperGestureSwipeCallback = (index: number, extraInfo: SwiperAnimationEvent) => void;

/**
* 除支持[通用属性]{@link common}外，还支持以下属性：
*
* 除支持[通用事件]{@link common}外，还支持以下事件：
*
* > **说明：**
*
* > Swiper组件通用属性[clip]{@link CommonMethod#clip(value: boolean)}的默认值为true。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class SwiperAttribute extends CommonMethod<SwiperAttribute> {

  /**
   * 设置当前在容器中显示的子组件的索引值。
   *
   * 从API version 10开始，该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
   *
   * @param { number } value - 当前在容器中显示的子组件的索引值。<br/>默认值：0 <br/>**说明：** <br/>设置的值小于0或大于最大页面索引时，取0。
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  index(value: number): SwiperAttribute;

  /**
   * 设置子组件是否自动播放。轮播方向为索引从小到大。
   *
   * [loop]{@link SwiperAttribute#loop}为false时，自动轮播到最后一页时停止轮播。手势切换完成后，如果当前页面不是最后一页，自动轮播将继续播放。当Swiper不可见时会停止轮播。
   *
   * @param { boolean } value - 子组件是否自动播放。<br/>true：自动播放；false：不自动播放。<br/>传入非法值时，按false处理。
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  autoPlay(value: boolean): SwiperAttribute;

  /**
   * 设置子组件是否自动播放。options入参控制手指或鼠标按下屏幕时子组件是否停止自动播放。
   *
   * 当[loop]{@link SwiperAttribute#loop}设置为false时，自动轮播将在到达最后一页时停止。在通过手势切换且未处于最后一页的情况下，轮播将继续进行。Swiper在不可见时，轮播也将停止。
   *
   * @param { boolean } autoPlay - 子组件是否自动播放。<br/>true：自动播放；false：不自动播放。<br/>传入非法值时，按false处理。
   * @param { AutoPlayOptions } options - 配置手指或鼠标按下屏幕时子组件是否停止自动播放。当stopWhenTouched设置为true时，多指按下场景中任意一个手指抬起后，将自动继续播放。<
   *     br/>默认值：{ stopWhenTouched: true }，停止自动播放。
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  autoPlay(autoPlay: boolean, options: AutoPlayOptions): SwiperAttribute;

  /**
   * 设置使用自动播放时播放的时间间隔。
   *
   * @param { number } value - 自动播放时播放的时间间隔。当该值小于[duration]{@link SwiperAttribute#duration}属性值时，翻页完成后会立即开始下一次轮播。<br/>默认
   *     值：3000<br/>单位：毫秒<br/>取值范围：[0, +∞)，设置小于0的值时，按照默认值处理。
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  interval(value: number): SwiperAttribute;

  /**
   * 设置导航点指示器样式。
   *
   * @param { boolean } value - Style of the navigation indicator.<br> - **DotIndicator**: dot-style indicator.<br> -
   *     **DigitIndicator**: digit-style indicator.<br> - **boolean**: whether to enable the navigation indicator.
   *     **true** to enable, **false** otherwise.<br>  Default value: **true**<br>  Default style:
   *     **DotIndicator** [since 7 - 9]
   * @param { DotIndicator | DigitIndicator | boolean } value - 导航点指示器样式。<br/> - DotIndicator：圆点指示器样式，适用于展示简洁的位置提示。
   *     <br/> - DigitIndicator：数字指示器样式，适用于需要明确显示当前位置的场景。<br/> - boolean：是
   *     否启用导航点指示器。设置为true启用，false不启用。<br/>默认值：true<br/>默认类型：DotIndicator [since 7 - 9]
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  indicator(value: DotIndicator | DigitIndicator | boolean): SwiperAttribute;

  /**
   * 设置外部绑定的导航点组件控制器。
   *
   * > **说明：**
   *
   * > 设置外部绑定的导航点组件控制器后，可以和外部导航点结合使用。外部导航点支持自定义设置显示位置和大小。详细介绍可参看[Indicator]{@link indicatorcomponent}。
   *
   * @param { IndicatorComponentController | DotIndicator | DigitIndicator | boolean } indicator - 可选导航点指示器样式。<br/>-
   *     IndicatorComponentController：单独导航点指示器控制器。当使用单独导航点指示器控制器时，可以与外部单独导航点进行绑定，但是绑定的单独导航点和内置导航点不能同时存在。<br/> -
   *     DotIndicator：圆点指示器样式。<br/> - DigitIndicator：数字指示器样式。<br/> - boolean：是否启用导航点指示器。设置为true启用，false不启用。<br/>默认值：true
   *     <br/>默认类型：DotIndicator
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  indicator(indicator: IndicatorComponentController | DotIndicator | DigitIndicator | boolean): SwiperAttribute;

  /**
   * 设置导航点箭头样式。
   *
   * > **说明：**
   *
   * > Swiper视窗内显示所有子节点时，只显示一屏，无法翻页，左右翻页箭头均不显示。
   *
   * @param { ArrowStyle | boolean } value - 支持设置箭头和底板样式，异常场景使用ArrowStyle对象中的默认值。设置为false不显示箭头和底板，true显示默认的箭头和底板样式。<br/>
   *     默认值：false
   * @param { boolean } isHoverShow - 设置鼠标悬停时是否显示箭头。<br/>默认值：false<br/>**说明：**<br/>1. isHoverShow为false时，常驻显示箭头。<br/>2.
   *     isHoverShow为true时，有导航点时鼠标悬停在导航点和箭头范围内显示箭头，无导航点时鼠标悬停在Swiper显示范围内显示箭头。<br/>3. 箭头显示时，支持点击翻页。
   * @returns { SwiperAttribute } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  displayArrow(value: ArrowStyle | boolean, isHoverShow?: boolean): SwiperAttribute;

  /**
   * 设置导航点是否开启循环。在LazyForEach懒循环加载模式下，加载的组件数量建议大于5个。预加载的组件数量不足时，可能会导致快速切换时出现空白或卡顿。
   *
   * @param { boolean } value - 是否开启循环。<br/>true：开启循环；false：不开启循环。<br/>传入参数非法时，按true处理。
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  loop(value: boolean): SwiperAttribute;

  /**
   * 设置子组件切换的动画时长。
   *
   * duration需要和[curve]{@link SwiperAttribute#curve}一起使用。
   *
   * curve默认曲线为[interpolatingSpring]{@link @ohos.curves:curves.interpolatingSpring}，此时动画时长只受曲线自身参数影响，不再受duration的控制。不受
   * duration控制的曲线可以查阅[插值计算]{@link @ohos.curves:curves}模块，比如，[springMotion]{@link @ohos.curves:curves.springMotion}、
   * [responsiveSpringMotion]{@link @ohos.curves:curves.responsiveSpringMotion}和interpolatingSpring类型的曲线不受duration控制。如果希
   * 望动画时长受到duration控制，需要给curve设置其他曲线。
   *
   * @param { number } value - 子组件切换的动画时长。<br/>默认值：400<br/>单位：毫秒<br/>取值范围：[0, +∞)，设置小于0的值时，按照默认值处理。
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  duration(value: number): SwiperAttribute;

  /**
   * 设置导航点是否为纵向排列。
   *
   * @param { boolean } value - 是否为纵向滑动。true为纵向滑动，false为横向滑动。<br/>默认值：false
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  vertical(value: boolean): SwiperAttribute;

  /**
   * 设置子组件与子组件之间间隙。不支持设置百分比。
   *
   * 类型为number时，默认单位vp。类型为string时，需要显式指定像素单位，如'10px'；未指定像素单位时，如'10'，单位为vp。
   *
   * @param { number | string } value - 子组件与子组件之间间隙。<br/>默认值：0<br/>取值范围：[0, +∞)，当设置数值小于0或超出Swiper组件宽度范围时，按照默认值处理。
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  itemSpace(value: number | string): SwiperAttribute;

  /**
   * 设置主轴方向上元素排列的模式，优先以
   * [displayCount]{@link SwiperAttribute#displayCount(value: number | string | SwiperAutoFill, swipeByGroup?: boolean)}
   * 设置的个数显示，displayCount未设置时本属性生效。
   *
   * @param { SwiperDisplayMode } value - 主轴方向上元素排列的模式。<br/>默认值：SwiperDisplayMode.STRETCH
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  displayMode(value: SwiperDisplayMode): SwiperAttribute;

  /**
   * 设置预加载子组件个数，以当前页面为基准，加载当前显示页面的前后个数。前面item删除，后面会向前补位。例如cachedCount=1时，会将当前显示页面在索引序号上相邻的前一页和后一页的子组件都预加载。如果设置为按组翻页，即
   * displayCount的swipeByGroup参数设为true，预加载时会以组为基本单位。例如cachedCount=1，swipeByGroup=true时，会将当前组的前面一组和后面一组的子组件都预加载。
   *
   * > **说明：**
   *
   * > - 在连续滑动场景中，一屏显示一个Swiper子组件时，通常将cachedCount值设置为1或2即可。最佳实践请参考
   * > [优化Swiper组件加载慢丢帧问题-缓存数据项](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-swiper_high_performance_development_guide#section143504547145)。
   * >
   * >
   * > - 只在[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)和开启了virtualScroll开关的
   * > [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)中生效，生效后超出显示及缓存范围的子节点会被释放。
   *
   * @param { number } value - 预加载子组件个数。<br/>默认值：1<br/>取值范围：[0, +∞)，设置小于0的值时，按照默认值处理。
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  cachedCount(value: number): SwiperAttribute;

  /**
   * 设置预加载子组件个数。
   *
   * > **说明：**
   *
   * > - isShown值为true，且设置的count过大时，如果前后预加载范围内可加载的节点不足，循环场景下同一个可加载节点只会布局在一侧。
   *
   * @param { number } count - 预加载子组件个数。<br/>默认值：1<br/>取值范围：[0, +∞)，设置小于0的值时，按照默认值处理。
   * @param { boolean } isShown - 预加载范围内的节点是否进行绘制，不下渲染树。<br/>true：预加载范围内的节点进行绘制；false：预加载范围内的节点不进行绘制。<br/>传入非法值时，按false处
   *     理。
   * @returns { SwiperAttribute } the attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  cachedCount(count: number, isShown: boolean): SwiperAttribute;

  /**
   * 设置预加载子组件个数和配置选项。
   *
   * > **说明：**
   *
   * > - 当options的independent设置为true时，预加载子组件个数按count个数计算，与
   * > [displayCount]{@link SwiperAttribute#displayCount(value: number | string | SwiperAutoFill | ItemFillPolicy, swipeByGroup?: boolean)}
   * > 的分组swipeByGroup计算解耦。例如cachedCount的count为1时，会将当前显示子节点的前一个和后一个子组件预加载。
   * >
   * > - 当displayCount的swipeByGroup参数设为true，且options的independent为false（默认值）时，预加载子组件个数以组为基本单位。例如cachedCount的count为1，
   * > displayCount的value为2，displayCount的swipeByGroup为true时，会将当前显示组的前一组和后一组的各两个子组件预加载。
   * >
   * > - 只在[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)和开启了virtualScroll开关的
   * > [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)中生效，生效后超出缓存范围的子节点会被释放。
   *
   * @param { number } count - 预加载子组件个数。<br/>。
   *     <br>取值范围：[0, +∞)。
   * @param { CachedCountOptions } options - 预加载子组件的配置选项。
   * @returns { SwiperAttribute } the attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 24 dynamic
   */
  cachedCount(count: number, options: CachedCountOptions): SwiperAttribute;

  /**
   * 设置Swiper视窗内元素显示个数。
   *
   * 使用number类型时，子元素主轴宽度会基于Swiper主轴宽度适应。子组件按照主轴均分Swiper宽度（减去displayCount-1个itemSpace）的方式进行主轴拉伸（收缩）布局，设置为小于等于0的值时，按默认值1显
   * 示。
   *
   * 使用string类型时，根据子元素的主轴宽度线性布局，不再适应Swiper主轴宽度。此时value值仅支持设置为'auto'，设置
   * [customContentTransition]{@link SwiperAttribute#customContentTransition}和
   * [onContentDidScroll]{@link SwiperAttribute#onContentDidScroll}事件不生效。
   *
   * 使用SwiperAutoFill类型时，子元素主轴宽度会基于Swiper主轴宽度适应。通过设置一个子组件最小宽度值minSize，会根据Swiper当前宽度和minSize值自动计算并更改一页内元素显示个数。当minSize为空或
   * 者小于等于0时，Swiper显示1列。
   *
   * > **说明：**
   *
   * > - 按组进行翻页时，判定翻页的拖拽距离阈值将调整为Swiper宽度的50%（若按子元素翻页，该阈值为子元素宽度的50%）。若最后一组的子元素数量少于displayCount，将利用占位子元素进行填充，占位子元素仅用于布局定位，
   * > 不显示任何内容，其位置将直接显示Swiper的背景样式。
   * >
   * > - displayCount设置为'auto'，并且设置loop属性的值为false时，选中导航点的位置与视窗内首个页面的位置保持一致。如果翻页完成后，视窗内首个页面仅部分显示在视窗内，选中导航点亦与页面的位置保持一致，位于两
   * > 个未选中的导航点之间。在此情况下，建议开发者隐藏导航点。
   * >
   * > - 导航点样式设定为圆形导航点，视窗内显示子元素数量等于1时（单页场景）或者 displayCount设置为'auto'时，显示导航点数量等于子元素数量。
   * >
   * > - displayCount设置为'auto'时，若设置swipeByGroup为true，则单个子元素按组翻页，一次只能翻一页。在此情况下，建议开发者不设置swipeByGroup或者设置swipeByGroup为
   * > false。
   * >
   * > - 从API version 18开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * 当导航点样式设定为圆形导航点，视窗内显示子元素数量大于1（多页场景）<!--RP1--><!--RP1End-->，显示导航点数量情况如下表：
   *
   * | 子元素总数量是否大于视窗内显示的子元素数量 | 是否按组翻页 | 是否循环        | 圆形导航点显示数量                                           | 说明                                     |
   * | ------------------------------------------ | ------------ | --------------- | ------------------------------------------------------------ | ---------------------------------------- |
   * | 是                                         | 是           | loop设置为true  | 圆形导航点的数量将与组数相等（组数计算方式为子元素总数量除以视窗内显示的子元素数量，若除不尽，则向上取整） | 该效果在displayCount设置为'auto'时不生效 |
   * | 是                                         | 是           | loop设置为false | 圆形导航点的数量将与组数相等（组数计算方式为子元素总数量除以视窗内显示的子元素数量，若除不尽，则向上取整） | 该效果在displayCount设置为'auto'时不生效 |
   * | 是                                         | 否           | loop设置为true  | 圆形导航点的数量将与实际可翻页次数一致（显示导航点的数量等于子元素总数量） | —— |
   * | 是                                         | 否           | loop设置为false | 圆形导航点的数量将与实际可翻页次数一致（计算方式是子元素的总数量减去视窗内显示的子元素数量+1个） | 该效果在displayCount设置为'auto'时不生效 |
   * | 否（同时子元素的总数量大于0）                       | —— | —— | 显示1个圆形导航点                                            | 该效果在displayCount设置为'auto'时不生效 |
   * | 否（同时子元素的总数量等于0） | —— | —— | 显示0个圆形导航点 | —— |
   *
   * @param { number | string } value - Number of elements to display per page.<br> Default value: **1**<br>Value range:
   *     (0, +∞). If this parameter is set to a value less than or equal to 0, the default value is used. [since 8 - 9]
   * @param { number | string | SwiperAutoFill } value - 视窗内显示的子元素个数。<br/> 默认值：1<br/>取值范围：(0, +∞)，设置小于等于0的值时，按照默认值处理。 [since 8 - 9]
   * @param { boolean } [swipeByGroup] - 是否按组进行翻页。如果设为true，在翻页时会按组进行翻页，每组内子元素的数量为displayCount value的值；如果为false，则为默认翻页行为，
   *     即按照子元素进行翻页。<br/> 默认值：false [since 11]
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  displayCount(value: number | string | SwiperAutoFill, swipeByGroup?: boolean): SwiperAttribute;

  /**
   * 设置Swiper视窗内元素显示个数。
   *
   * 使用number类型时，子元素主轴宽度会基于Swiper主轴宽度适应。子组件按照主轴均分Swiper宽度（减去displayCount-1个itemSpace）的方式进行主轴拉伸（收缩）布局，设置为小于等于0的值时，按默认值1显
   * 示。
   *
   * 使用string类型时，根据子元素的主轴宽度线性布局，不再适应Swiper主轴宽度。此时value值仅支持设置为'auto'，设置
   * [customContentTransition]{@link SwiperAttribute#customContentTransition}和
   * [onContentDidScroll]{@link SwiperAttribute#onContentDidScroll}事件不生效。
   *
   * 使用SwiperAutoFill类型时，子元素主轴宽度会基于Swiper主轴宽度适应。通过设置一个子组件最小宽度值minSize，会根据Swiper当前宽度和minSize值自动计算并更改一页内元素显示个数。当minSize为空或
   * 者小于等于0时，Swiper显示1列。
   *
   * 使用ItemFillPolicy类型时，子元素主轴宽度会基于Swiper主轴宽度适应。将根据Swiper组件宽度对应断点类型确定显示个数。例如，设置断点类型为ItemFillPolicy.BREAKPOINT_DEFAULT时，在
   * 组件宽度相当于sm及更小断点区间时显示1列，相当于md断点区间时显示2列，相当于lg及更大断点区间时显示3列。
   *
   * 参数说明参考
   * [displayCount]{@link SwiperAttribute#displayCount(value: number | string | SwiperAutoFill, swipeByGroup?: boolean)}
   * 。
   *
   * @param { number | string | SwiperAutoFill | ItemFillPolicy } value - 视窗内显示的子元素个数。<br/> 取值范围：(0, +∞)，设置小于等于0的值时，按照1处
   *     理。
   * @param { boolean } [swipeByGroup] - 是否按组进行翻页。如果设为true，在翻页时会按组进行翻页，每组内子元素的数量为displayCount的值；如果为false，则为默认翻页行为，即按照子元素
   *     进行翻页。<br/> 默认值：false
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 22 dynamic
   */
  displayCount(value: number | string | SwiperAutoFill | ItemFillPolicy, swipeByGroup?: boolean): SwiperAttribute;

  /**
   * 设置边缘滑动效果，[loop]{@link SwiperAttribute#loop}为false或Swiper视窗内一屏显示所有子节点时生效。调用
   * [SwiperController.changeIndex()]{@link SwiperController#changeIndex(index: number, useAnimation?: boolean)}、
   * [SwiperController.showNext()]{@link SwiperController#showNext}和
   * [SwiperController.showPrevious()]{@link SwiperController#showPrevious}接口跳转至首尾页时不生效回弹。
   *
   * @param { EdgeEffect } value - 边缘滑动效果。<br/>默认值：EdgeEffect.Spring
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  effectMode(value: EdgeEffect): SwiperAttribute;

  /**
   * 设置禁用组件滑动切换功能。适用于仅通过按钮或导航点控制翻页的场景，或需要限制用户滑动操作的场景。
   *
   * @param { boolean } value - 禁用组件滑动切换功能。设置为true禁用，false不禁用。<br/>默认值：false
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  disableSwipe(value: boolean): SwiperAttribute;

  /**
   * 设置Swiper的动画曲线，默认为弹簧插值曲线，常用曲线参考[Curve]{@link Curve}，也可以通过[插值计算]{@link @ohos.curves:curves}模块提供的接口创建自定义的插值曲线对象。
   *
   * @param { Curve | string } value - Animation curve.<br>The **string** type is deprecated since API version 9 (see
   *     [curves.init]{@link @ohos.curves:curves.init}, [curves.steps]{@link @ohos.curves:curves.steps},
   *     [curves.cubicBezier]{@link @ohos.curves:curves.cubicBezier}, and
   *     [curves.spring]{@link @ohos.curves:curves.spring}). Use **Curve** or **ICurve** instead.<br>Default value:
   *     **[interpolatingSpring]{@link @ohos.curves:curves.interpolatingSpring}(-1, 1, 328, 34)**. [since 8 - 9]
   * @param { Curve | string | ICurve } value - Swiper的动画曲线。<br/>string类型来源[curves.init]{@link @ohos.curves:curves.init}，
   *     [curves.steps]{@link @ohos.curves:curves.steps}，[curves.cubicBezier]{@link @ohos.curves:curves.cubicBezier}，
   *     [curves.spring]{@link @ohos.curves:curves.spring}函数从API version 9开始废弃，推荐使用Curve和ICurve类型。<br/>默认值：
   *     [interpolatingSpring]{@link @ohos.curves:curves.interpolatingSpring}(-1, 1, 328, 34) [since 8 - 9]
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  curve(value: Curve | string | ICurve): SwiperAttribute;

  /**
   * 当前显示元素索引变化时触发该事件，返回值为当前显示元素的索引值。
   *
   * Swiper组件结合LazyForEach使用时，不能在onChange事件里触发子页面UI的刷新。
   *
   * > **说明：**
   *
   * > 如果是动画引起的索引变化，回调在动画结束时触发。
   *
   * @param { function } event - Index of the currently displayed element. [since 7 - 17]
   * @param { Callback<number> } event - 当前显示元素的索引。 [since 18]
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onChange(event: Callback<number>): SwiperAttribute;

  /**
   * 当选中元素改变时触发该回调，返回值为当前选中的元素的索引值。
   *
   * @param { Callback<number> } event - 当前选中元素的索引。
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  onSelected(event: Callback<number>): SwiperAttribute;

  /**
   * 设置导航点样式。
   *
   * > **说明：**
   *
   * > 从API version 8开始支持，从API version 10开始废弃，建议使用
   * > [indicator]{@link SwiperAttribute#indicator(value: DotIndicator | DigitIndicator | boolean)}替代。
   *
   * @param { IndicatorStyle } value - 导航点样式。
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead SwiperAttribute#indicator(value: DotIndicator | DigitIndicator | boolean)
   */
  indicatorStyle(value?: IndicatorStyle): SwiperAttribute;

  /**
   * 设置前边距，用于露出前一项的一小部分，使用效果可以参考
   * [示例1设置导航点交互及翻页动效](docroot://reference/apis-arkui/arkui-ts/ts-container-swiper.md#示例1设置导航点交互及翻页动效)。仅当Swiper子组件的布局方式为
   * 拉伸时生效，主要包括两种场景：1、displayMode属性设置为SwiperDisplayMode.STRETCH；2、displayCount属性设置为number类型。
   *
   * 当主轴方向为横向布局时，nextMargin/prevMargin中任意一个大于子组件测算的宽度，nextMargin和prevMargin均不显示。
   *
   * 当主轴方向为纵向布局时，nextMargin/prevMargin中任意一个大于子组件测算的高度，nextMargin和prevMargin均不显示。
   *
   * 使用nextMargin/prevMargin接口时，不要对子组件进行[尺寸范围限制]{@link CommonMethod#constraintSize}，否则子节点主轴将不会被拉伸到预期长度，边距失去效果。
   *
   * > **说明：**
   *
   * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Length } value - 前边距。不支持设置百分比。<br/>默认值：0
   * @param { boolean } [ignoreBlank] - 非loop场景下首页不显示prevMargin。在非loop场景下，设置为true时，首页不显示空白的prevMargin，首页的左边缘与Swiper视窗左边缘
   *     对齐；设置false时，首页显示空白prevMargin，首页的左边缘与Swiper视窗左边缘的距离为prevMargin。<br/>默认值：false <br/>**说明：**<br/>首页场景下，prevMargin和
   *     nextMargin的值相加作为右边边距显示后一个页面。 [since 12]
   * @returns { SwiperAttribute } The attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  prevMargin(value: Length, ignoreBlank?: boolean): SwiperAttribute;

  /**
   * 设置后边距，用于露出后一项的一小部分，使用效果可以参考
   * [示例1设置导航点交互及翻页动效](docroot://reference/apis-arkui/arkui-ts/ts-container-swiper.md#示例1设置导航点交互及翻页动效)。仅当Swiper子组件的布局方式为
   * 拉伸时生效，主要包括两种场景：1、displayMode属性设置为SwiperDisplayMode.STRETCH；2、displayCount属性设置为number类型。
   *
   * 当主轴方向为横向布局时，nextMargin或prevMargin中任意一个大于子组件测算的宽度，nextMargin和prevMargin均不显示。
   *
   * 当主轴方向为纵向布局时，nextMargin或prevMargin中任意一个大于子组件测算的高度，nextMargin和prevMargin均不显示。
   *
   * 使用nextMargin/prevMargin接口时，不要对子组件进行[尺寸范围限制]{@link CommonMethod#constraintSize}，否则子节点主轴将不会被拉伸到预期长度，边距失去效果。
   *
   * > **说明：**
   *
   * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Length } value - 后边距。不支持设置百分比。<br/>默认值：0
   * @param { boolean } [ignoreBlank] - 非loop场景下尾页不显示nextMargin。在非loop场景下，设置为true时，尾页不显示空白的nextMargin，尾页的右边缘与Swiper视窗右边缘
   *     对齐；设置false时，尾页显示空白nextMargin，尾页的右边缘与Swiper视窗右边缘的距离为nextMargin。<br/>默认值：false <br/>**说明：**<br/>尾页场景下，prevMargin和
   *     nextMargin的值相加作为左边边距显示前一个页面。 [since 12]
   * @returns { SwiperAttribute } The attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  nextMargin(value: Length, ignoreBlank?: boolean): SwiperAttribute;

  /**
   * 当选中元素改变时触发该回调，返回值为将要隐藏的元素的索引值。
   *
   * @param { Callback<number> } event - 将要隐藏元素的索引。
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  onUnselected(event: Callback<number>): SwiperAttribute;

  /**
   * Swiper滑动状态变化事件回调，在跟手滑动、离手动画、停止三种滑动状态变化时触发，返回值为当前滑动状态。
   *
   * @param { Callback<ScrollState> } event - 滑动状态变化的回调。
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  onScrollStateChanged(event: Callback<ScrollState>): SwiperAttribute;

  /**
   * 切换动画开始时触发该回调。
   *
   * > **说明：**
   *
   * > - 调用此回调后，切换动画的逻辑将在渲染线程中执行，从而使处于空闲状态的主线程能够充分利用这段时间来加载子组件所需资源，减少后续在cachedCount范围内节点的预加载时间。最佳实践请参考
   * > [优化Swiper组件加载慢丢帧问题-提前加载数据](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-swiper_high_performance_development_guide#section8783121513246)。
   * >
   * >
   * > - 当翻页动画时长为0时，只有以下场景会触发该回调：滑动翻页、自动轮播、调用SwiperController.showNext()和SwiperController.showPrevious()接口以及手指点击导航点翻页。
   *
   * @param { function } event - Callback triggered when the page transition animation starts. [since 9 - 17]
   * @param { OnSwiperAnimationStartCallback } event - 切换动画开始时触发的回调。 [since 18]
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onAnimationStart(event: OnSwiperAnimationStartCallback): SwiperAttribute;

  /**
   * 切换动画结束时触发该回调。
   *
   * 当Swiper切换动效结束时触发，包括动画过程中手势中断，通过SwiperController调用finishAnimation。
   *
   * @param { function } event - Callback triggered when the page transition animation ends. [since 9 - 17]
   * @param { OnSwiperAnimationEndCallback } event - 切换动画结束时触发的回调。 [since 18]
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onAnimationEnd(event: OnSwiperAnimationEndCallback): SwiperAttribute;

  /**
   * 在页面跟手滑动过程中，逐帧触发该回调。
   *
   * @param { function } event - Callback triggered on a frame-by-frame basis when the page is turned by a swipe.
   *     **onGestureSwipe** is called after **onTouch**. For post-release operations, consider using
   *     [onAnimationStart]{@link SwiperAttribute#onAnimationStart}. [since 10 - 17]
   * @param { OnSwiperGestureSwipeCallback } event - 在页面跟手滑动过程中，逐帧触发的回调。onGestureSwipe回调触发时机在onTouch之后，如果需要在离手后执行操作建议使用
   *     [onAnimationStart]{@link SwiperAttribute#onAnimationStart}。 [since 18]
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onGestureSwipe(event: OnSwiperGestureSwipeCallback): SwiperAttribute;

  /**
   * 设置Swiper组件和父组件的嵌套滚动模式。当Swiper嵌套在滚动容器（如List、Scroll）中时，需要根据业务需求选择合适的嵌套滚动模式。[loop]{@link SwiperAttribute#loop}为true时Swiper组件没有边缘，不会触发父组件嵌套滚动。
   *
   * > **说明：**
   *
   * > 由于Swiper的抛滑动画逻辑和其它滚动类组件不同（Swiper一次只能滑动一页，抛滑时做翻页动画），当Swiper内嵌套其它滚动组件时，如果Swiper的翻页动画已经启动，将无法接受子节点上传的滚动偏移量。这时Swiper的
   * > 翻页动画和子节点的边缘效果动画会同时执行。
   *
   * @param { SwiperNestedScrollMode } value - Swiper组件和父组件的嵌套滚动模式。<br/>传入非法值时，按SwiperNestedScrollMode.SELF_ONLY处理。
   * @returns { SwiperAttribute } the attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  nestedScroll(value: SwiperNestedScrollMode): SwiperAttribute;

  /**
   * 自定义Swiper页面切换动画。在页面跟手滑动和离手后执行切换动画的过程中，会对视窗内所有页面逐帧触发回调，开发者可以在回调中设置透明度、缩放比例、位移等属性来自定义切换动画。
   *
   * 使用说明：
   *
   * 1、循环场景下，设置prevMargin和nextMargin属性，使得Swiper前后端显示同一页面时，该接口不生效。
   *
   * 2、在页面跟手滑动和离手后执行切换动画的过程中，会对视窗内所有页面逐帧触发[SwiperContentTransitionProxy]{@link SwiperContentTransitionProxy}回调。例如，当视窗内有下
   * 标为0、1的两个页面时，会每帧触发两次index值分别为0和1的回调。
   *
   * 3、设置displayCount属性的swipeByGroup参数为true时，若同组中至少有一个页面在视窗内时，则会对同组中所有页面触发回调，若同组所有页面均不在视窗内时，则会一起下渲染树。
   *
   * 4、在页面跟手滑动和离手后执行切换动画的过程中，默认动画（页面滑动）依然会发生，若希望页面不滑动，可以设置主轴方向上负的位移（translate属性）来抵消页面滑动。例如：当displayCount属性值为2，视窗内有下标为0、1
   * 的两个页面时，页面水平滑动过程中，可以逐帧设置第0页的translate属性在x轴上的值为-position * mainAxisLength来抵消第0页的位移，设置第1页的translate属性在x轴上的值为-(position
   * - 1) * mainAxisLength来抵消第1页的位移。
   *
   * @param { SwiperContentAnimatedTransition } transition - Swiper自定义切换动画相关信息。
   * @returns { SwiperAttribute } the attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 26.0.0]
   * @atomicservice
   * @since 12 dynamic
   */
  customContentTransition(transition: SwiperContentAnimatedTransition): SwiperAttribute;

  /**
   * 监听Swiper页面滑动事件。
   *
   * 使用说明：
   *
   * 1、循环场景下，设置prevMargin和nextMargin属性，使得Swiper前后端显示同一页面时，该接口不生效。
   *
   * 2、在页面滑动过程中，会对视窗内所有页面逐帧触发[ContentDidScrollCallback]{@link ContentDidScrollCallback}回调。例如，当视窗内有下标为0、1的两个页面时，会每帧触发两次
   * index值分别为0和1的回调。
   *
   * 3、设置displayCount属性的swipeByGroup参数为true时，若同组中至少有一个页面在视窗内时，则会对同组中所有页面触发回调。
   *
   * @param { ContentDidScrollCallback } handler - Swiper滑动时触发的回调。
   * @returns { SwiperAttribute } the attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onContentDidScroll(handler: ContentDidScrollCallback): SwiperAttribute;

  /**
   * 设置导航点是否可交互。适用于需要通过其他方式（如按钮）控制翻页，或需要禁止用户通过导航点点击翻页的场景。
   *
   * @param { boolean } value - 导航点是否可交互。<br/>true：导航点可交互；false：导航点不可交互。<br/>传入参数非法时，按true处理。
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  indicatorInteractive(value: boolean): SwiperAttribute;

  /**
   * 设置鼠标滚轮翻页模式。未通过该接口设置时，默认为连续翻页模式，取值为PageFlipMode.CONTINUOUS。
   *
   * @param { Optional<PageFlipMode> } mode - 鼠标滚轮翻页模式。<br/>取undefined时，按取值为PageFlipMode.CONTINUOUS处理。
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  pageFlipMode(mode: Optional<PageFlipMode>): SwiperAttribute;

  /**
   * Swiper滑动行为拦截事件，在滑动前触发。Swiper会依据该事件的返回值来决定是否允许此次滑动行为。若返回true，表示允许此次滑动行为，Swiper页面将跟随滑动。若返回false，表示不允许此次滑动，页面将保持静止。
   *
   * 1. 触发该事件的场景仅限于手势操作，具体包括手指滑动、滚动鼠标滚轮以及使用键盘方向键进行焦点移动。
   *
   * 2. 在手指滑动的过程中，每帧都将触发该事件，系统会依据事件的返回值判断是否对每帧的滑动做出响应。
   *
   * 3. 对于滚动鼠标滚轮和使用键盘方向键进行焦点移动的场景，每次翻页操作都会触发一次该事件，翻页是否被允许将根据事件的返回值来决定。
   *
   * @param { ContentWillScrollCallback } handler - Swiper滑动时触发的回调。
   * @returns { SwiperAttribute } the attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  onContentWillScroll(handler: ContentWillScrollCallback): SwiperAttribute;

  /**
   * 设置显示区域上方或前方插入或删除数据时是否保持可见内容位置不变。适用于使用单一
   * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)作为Swiper子节点的情况，通过LazyForEach的
   * [onDataAdd]{@link DataChangeListener.onDataAdd}、[onDataDelete]{@link DataChangeListener.onDataDelete}等接口修改数据源。其他场景
   * 下，显示区域上方或前方插入或删除数据，可见内容位置会变化。
   *
   * 在
   * [displayCount]{@link SwiperAttribute#displayCount(value: number | string | SwiperAutoFill, swipeByGroup?: boolean)}
   * 属性的swipeByGroup参数设置为true，即按组翻页生效时，一次在显示区域上方或前方插入或删除数据，且插入或删除的是一组节点数量倍数的数据量时，才能保持可见内容位置不变，否则可见内容位置可能会随每组数据重新分组改变。
   *
   * @param { boolean } enabled - 设置显示区域上方或前方插入或删除数据时是否要保持可见内容位置不变。<br/>默认值：false，显示区域上方或前方插入或删除数据时可见内容位置会跟随变化。 true：显示区
   *     域上方或前方插入或删除数据时可见内容位置不变。如果改变数据源是在动画过程中，由于目标索引变化会导致动画停止。
   * @returns { SwiperAttribute } the attribute of swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  maintainVisibleContentPosition(enabled: boolean): SwiperAttribute;
}

/**
* Swiper自定义切换动画相关信息。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form [since 26.0.0]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface SwiperContentAnimatedTransition {

  /**
   * Swiper自定义切换动画超时时间。从页面执行默认动画（页面滑动）至移出视窗外的第一帧开始计时，如果到达该时间后，开发者仍未调用
   * [SwiperContentTransitionProxy]{@link SwiperContentTransitionProxy}的finishTransition接口通知Swiper组件此页面的自定义动画已结束，那么组件就会认
   * 为此页面的自定义动画已结束，立即将该页面节点下渲染树。单位ms，默认值为0。
   *
   * @default 0 ms
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 26.0.0]
   * @atomicservice
   * @since 12 dynamic
   */
  timeout?: number;

  /**
   * 自定义切换动画具体内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 26.0.0]
   * @atomicservice
   * @since 12 dynamic
   */
  transition: Callback<SwiperContentTransitionProxy>;
}

/**
* Swiper自定义切换动画执行过程中，返回给开发者的proxy对象。开发者可通过该对象获取自定义动画视窗内的页面信息，同时，也可以通过调用该对象的finishTransition接口通知Swiper组件页面自定义动画已结束。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form [since 26.0.0]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface SwiperContentTransitionProxy {

  /**
   * 当前选中页面的索引。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 26.0.0]
   * @atomicservice
   * @since 12 dynamic
   */
  selectedIndex: number;

  /**
   * 视窗内页面的索引。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 26.0.0]
   * @atomicservice
   * @since 12 dynamic
   */
  index: number;

  /**
   * index页面相对于Swiper主轴起始位置（selectedIndex对应页面的起始位置）的移动比例。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 26.0.0]
   * @atomicservice
   * @since 12 dynamic
   */
  position: number;

  /**
   * index对应页面在主轴方向上的长度，单位vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 26.0.0]
   * @atomicservice
   * @since 12 dynamic
   */
  mainAxisLength: number;

  /**
   * 通知Swiper组件，此页面的自定义动画已结束。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 26.0.0]
   * @atomicservice
   * @since 12 dynamic
   */
  finishTransition(): void;
}

/**
* 滑动的相关信息，主要包括：当前页面对应的index、滑动方向上即将显示的页面index和此次滑动的位移。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 15 dynamic
 */
declare interface SwiperContentWillScrollResult {

  /**
   * 当前页面对应的index。在一次跟手滑动过程中，只要手指未离开屏幕，该值将保持不变，即使该页面已完全移出视窗，如在涉及多个页面的场景中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  currentIndex: number;

  /**
   * 滑动方向上即将显示的页面index。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  comingIndex: number;

  /**
   * 此次滑动的位移，带有符号，正负分别指示不同的翻页方向。正数表示从index=1向index=0翻页，负数表示从index=0向index=1翻页。
   *
   * 在手指滑动的场景中，该值为滑动事件中每帧传递下来的偏移量。在滚动鼠标滚轮和使用键盘方向键导航的场景中，该值代表即将翻页的距离。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  offset: number;
}

/**
* Swiper滑动时触发的回调，参数可参考[SwiperContentTransitionProxy]{@link SwiperContentTransitionProxy}中的说明。
*
 * @param { number } selectedIndex - 当前选中页面的索引。
 * @param { number } index - 视窗内页面的索引。
 * @param { number } position - 视窗内页面的索引。
 * @param { number } mainAxisLength - 视窗内页面的索引。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type ContentDidScrollCallback = (selectedIndex: number, index: number, position: number, mainAxisLength: number) => void;

/**
* Swiper即将滑动前触发的回调，返回值表示是否允许此次滑动。
*
 * @param { SwiperContentWillScrollResult } result - 即将滑动的相关信息，主要包括：当前页面对应的index、滑动方向上即将显示的页面index和此次滑动的位移。
 * @returns { boolean } Swiper是否响应本次滑动，true表示响应，false表示不响应。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 15 dynamic
 */
declare type ContentWillScrollCallback = (result: SwiperContentWillScrollResult) => boolean;

/**
* 滑块视图容器，提供子组件滑动轮播显示的能力。适用于轮播图展示、图片浏览、引导页、卡片轮播等场景。
*
* > **说明：**
*
* > - Swiper组件通过内置的[PanGesture]{@link gesture}拖动手势实现滑动轮播效果，将[disableSwipe]{@link SwiperAttribute#disableSwipe}属性设为true
* > 时，会禁用该手势监听，从而阻止滑动操作。
* >
* > - Swiper中复用[NodeContainer]{@link node_container}时，禁止递归流程中子节点更新父节点状态变量。
*
* ###### 子组件
*
* 可以包含子组件。
*
* > **说明：**
* >
* > - 子组件类型：系统组件和自定义组件，支持渲染控制类型（[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、
* > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)、
* > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)和
* > [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)）。不建议子组件中混用懒加载组件（包括LazyForEach、Repeat
* > ）和非懒加载组件，或者子组件中使用多个懒加载组件，否则可能导致懒加载组件预加载能力失效等问题。不建议在组件动画过程中对数据源进行操作，否则会导致布局出现异常。
* >
* > - Swiper子组件的[visibility]{@link CommonMethod#visibility}属性设置为Visibility.None，且Swiper的displayCount属性设置为'auto'时，对应子组件在
* > 视窗内不占位，但不影响导航点个数；visibility属性设置为Visibility.None或者Visibility.Hidden时，对应子组件不显示，但依然会在视窗内占位。
* >
* > - 当Swiper子组件设置了[offset]{@link CommonMethod#offset}属性时，会按照子组件的层级进行绘制，层级高的子组件会覆盖层级低的子组件。例如，Swiper包含3个子组件，其中第3个子组件设置了
* > offset({ x : 100 })，那么在横向循环滑动中，第3个子组件会覆盖第1个子组件，此时可设置第1个子组件的[zIndex]{@link CommonMethod#zIndex}属性值大于第3个子组件，使第1个子组件层级
* > 高于第3个子组件。
* >
* > - 在走焦到用户定义的子节点时，导航点、箭头会由于[焦点样式](docroot://ui/arkts-common-events-focus-event.md#焦点样式)修改zIndex的行为被遮挡。
* >
* > - 在包含大量子组件的场景中，建议采用懒加载、缓存数据、预加载数据和组件复用等方法，以优化Swiper的性能并减少内存占用。最佳实践请参考
* > [优化Swiper组件加载慢丢帧问题](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-swiper_high_performance_development_guide)。
* >
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const Swiper: SwiperInterface;

/**
* Defines Swiper Component instance.
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const SwiperInstance: SwiperAttribute;