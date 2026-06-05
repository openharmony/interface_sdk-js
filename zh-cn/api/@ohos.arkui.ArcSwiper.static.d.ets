
'use static';
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @arkts 1.2
 */

import { SwiperAnimationEvent } from '@ohos.arkui.component';

import { CrownSensitivity, EdgeEffect } from '@ohos.arkui.component';

import { LinearGradient } from '@ohos.arkui.component';

import { ResourceColor } from '@ohos.arkui.component';

import { CommonMethod, Callback } from '@ohos.arkui.component';

import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from '@ohos.arkui.component';

/**
 * 停止播放动画时，告知应用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type FinishAnimationHandler = () => void;

/**
 * ArcSwiper容器组件的控制器，可以将此对象绑定至ArcSwiper组件，实现控制ArcSwiper翻页等功能。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class ArcSwiperController {

  /**
   * ArcSwiperController的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor();

  /**
   * 翻至下一页。翻页带动效切换过程，时长通过[duration]{@link ArcSwiperAttribute.duration}指定。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  showNext(): void;

  /**
   * 翻至上一页。翻页带动效切换过程，时长通过[duration]{@link ArcSwiperAttribute.duration}指定。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  showPrevious(): void;

  /**
   * 停止播放动画。默认无回调。
   *
   * @param { FinishAnimationHandler } [handler] - 动画结束的回调。<br>默认值：不传入的情况，无回调
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  finishAnimation(handler?: FinishAnimationHandler): void;
}

/**
 * 弧形方向。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum ArcDirection {

  /**
   * 3点钟方向。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  THREE_CLOCK_DIRECTION = 0,

  /**
   * 6点钟方向。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SIX_CLOCK_DIRECTION = 1,

  /**
   * 9点钟方向。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  NINE_CLOCK_DIRECTION = 2
}

/**
 * 提供弧形圆点指示器属性及功能。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class ArcDotIndicator {

  /**
   * ArcDotIndicator的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor();

  /**
   * 设置弧形指示器的方向。未通过该接口设置时，形指示器的方向默认为6点钟方向。
   *
   * @param { ArcDirection | undefined } direction - 设置弧形指示器的方向。<br/>取值为undefined时，弧形指示器的方向为6点钟方向。
   * @returns { ArcDotIndicator }
   提供弧形圆点指示器属性及功能。
   * @stagemodelonly
   * @since 26.0.0 static
   */
  arcDirection(direction: ArcDirection | undefined): ArcDotIndicator;

  /**
   * 设置弧形指示器中，未选中导航点的颜色。未通过该接口设置时，未选中导航点的颜色默认为'#A9FFFFFF'。
   *
   * @param { ResourceColor | undefined } color - 设置弧形指示器中，未选中导航点的颜色。<br/>取值为undefined时，未选中导航点的颜色为'#A9FFFFFF'。
   * @returns { ArcDotIndicator }
   提供弧形圆点指示器属性及功能。
   * @stagemodelonly
   * @since 26.0.0 static
   */
  itemColor(color: ResourceColor | undefined): ArcDotIndicator;

  /**
   * 设置弧形指示器中，选中导航点的颜色。未通过该接口设置时，选中导航点的颜色默认为'#FF5EA1FF'。
   *
   * @param { ResourceColor | undefined } color - 设置弧形指示器中，选中导航点的颜色。<br/>取值为undefined时，选中导航点的颜色为'#FF5EA1FF'。
   * @returns { ArcDotIndicator }
   提供弧形圆点指示器属性及功能。
   * @stagemodelonly
   * @since 26.0.0 static
   */
  selectedItemColor(color: ResourceColor | undefined): ArcDotIndicator;

  /**
   * 设置弧形指示器被长按时，弧形指示器的颜色。未通过该接口设置时，弧形指示器被长按时，弧形指示器的颜色默认为'#FF404040'。
   *
   * @param { ResourceColor | undefined } color - 设置弧形指示器被长按时，弧形指示器的颜色。<br/>取值为undefined时，弧形指示器被长按时，弧形指示器的颜色为'#FF404040'
   *     。
   * @returns { ArcDotIndicator }
   提供弧形圆点指示器属性及功能。
   * @stagemodelonly
   * @since 26.0.0 static
   */
  backgroundColor(color: ResourceColor | undefined): ArcDotIndicator;

  /**
   * 设置弧形指示器的遮罩渐变色。未通过该接口设置时，弧形指示器的遮罩渐变色起始颜色默认为'#00000000'，结束颜色默认为'#FF000000'。
   *
   * @param { LinearGradient | undefined } color - 设置弧形指示器的遮罩渐变色。<br/>取值为undefined时，弧形指示器的遮罩渐变色起始颜色为'#00000000'，结束颜色为'#
   *     FF000000'。
   * @returns { ArcDotIndicator }
   提供弧形圆点指示器属性及功能。
   * @stagemodelonly
   * @since 26.0.0 static
   */
  maskColor(color: LinearGradient | undefined): ArcDotIndicator;
}

/**
 * 当前显示元素的索引变化时，告知应用。
 *
 * @param { int } index - 当前显示元素的索引。index序列从0开始。
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type IndexChangedHandler = (index: int) => void;

/**
 * 切换动画开始时的回调。
 *
 * @param { int } index - 当前显示元素的索引，动画开始前的index值（不是最终结束动画的index值）。
 * @param { int } targetIndex - 当前显示元素的索引，动画开始前的index值（不是最终结束动画的index值）。
 * @param { SwiperAnimationEvent } event - 动画相关信息，包括主轴方向上当前显示元素和目标元素相对ArcSwiper起始位置的位移，以及离手速度。
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type AnimationStartHandler = (index: int, targetIndex: int, event: SwiperAnimationEvent) => void;

/**
 * 切换动画结束时的回调。
 *
 * @param { int } index - 当前显示元素的索引。
 * @param { SwiperAnimationEvent } event - 动画相关信息，只返回主轴方向上当前显示元素相对于ArcSwiper起始位置的位移。
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type AnimationEndHandler = (index: int, event: SwiperAnimationEvent) => void;

/**
 * 在页面跟手滑动过程中，逐帧触发的回调。
 *
 * @param { int } index - 当前显示元素的索引。
 * @param { SwiperAnimationEvent } event - 动画相关信息，只返回主轴方向上当前显示元素相对于ArcSwiper起始位置的位移。
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type GestureSwipeHandler = (index: int, event: SwiperAnimationEvent) => void;

/**
 * ArcSwiper自定义切换动画相关信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface ArcSwiperContentAnimatedTransition {

  /**
   * ArcSwiper自定义切换动画超时时间。从页面执行默认动画（页面滑动）至移出视窗外的第一帧开始计时，如果到达该时间后，开发者仍未调用
   * [SwiperContentTransitionProxy](docroot://reference/apis-arkui/arkui-ts/ts-container-arcswiper copy.md#swipercontenttransitionproxy)
   * 的[finishTransition]{@link ArcSwiperContentTransitionProxy.finishTransition}接口通知ArcSwiper组件此页面的自定义动画已结束，那么组件就会认为此页面的
   * 自定义动画已结束，立即在该页面节点下渲染树。单位ms，默认值为0。
   *
   * @default 0ms
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  timeout?: int;

  /**
   * 自定义切换动画具体内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  transition: Callback<ArcSwiperContentTransitionProxy>;
}

/**
 * ArcSwiper自定义切换动画执行过程中，返回给开发者的proxy对象。开发者可通过该对象获取自定义动画视窗内的页面信息，同时，也可以通过调用该对象的finishTransition接口通知ArcSwiper组件页面自定义动画已结束
 * 。
 *
 * > **说明：**
 * >
 * > - 假设当前选中的子组件的索引为0，从第0页切换到第1页的动画过程中，每帧都会对视窗内所有页面触发回调，当视窗内有第0页和第1页两页时，每帧会触发两次回调。其中第一次回调的selectedIndex为0，index为0，
 * > position为当前帧第0页相对于动画开始前第0页的移动比例，mainAxisLength为主轴方向上第0页的长度；第二次回调的selectedIndex仍为0，index为1，position为当前帧第1页相对于动画开始前第0
 * > 页的移动比例，mainAxisLength为主轴方向上第1页的长度。
 * >
 * > - 若动画曲线为弹簧插值曲线，从第0页切换到第1页的动画过程中，可能会因为离手时的位置和速度，先过滑到第2页，再回弹到第1页，该过程中每帧会对视窗内第1页和第2页触发回调。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface ArcSwiperContentTransitionProxy {

  /**
   * 当前选中页面的索引。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  selectedIndex: int;

  /**
   * 视窗内页面的索引。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  index: int;

  /**
   * index页面相对于ArcSwiper主轴起始位置（selectedIndex对应页面的起始位置）的移动比例。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  position: double;

  /**
   * index对应页面在主轴方向上的长度。
   *
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  mainAxisLength: double;

  /**
   * 通知ArcSwiper组件，此页面的自定义动画已结束。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  finishTransition(): void;
}

/**
 * 除支持[通用属性]{@link ./@internal/component/ets/common}外，还支持以下属性，不支持[Menu控制]{@link ./@internal/component/ets/common}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface ArcSwiperAttribute extends CommonMethod {

  /**
   * 设置当前在容器中显示的子组件的索引值。设置小于0或大于等于子组件数量时，按照默认值0处理。
   *
   * @param { int | undefined } index - 当前在容器中显示的子组件的索引值。<br/>取值为undefined时，当前在容器中显示的子组件的索引值为0。
   * @returns { ArcSwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default index(index: int | undefined): this;

  /**
   * 设置弧形圆点指示器样式。未通过该接口设置时，默认启用弧形圆点指示器样式。
   *
   * @param { ArcDotIndicator | boolean | undefined } style - ArcDotIndicator：弧形圆点指示器属性及功能。<br/>- boolean：是否启用弧形圆点指示器。
   *     设置为true启用，false不启用。<br/>取值为undefined时，启用弧形圆点指示器样式。<br/>默认类型：ArcDotIndicator
   * @returns { ArcSwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default indicator(style: ArcDotIndicator | boolean | undefined): this;

  /**
   * 设置子组件切换的动画时长。未通过该接口设置时，默认子组件切换的动画时长为400ms。
   *
   * @param { int | undefined } duration - 子组件切换的动画时长。<br/>取值为undefined时，子组件切换的动画时长为400。<br/>单位：毫秒
   * @returns { ArcSwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default duration(duration: int | undefined): this;

  /**
   * 设置是否为纵向滑动。未通过该接口设置时，默认为横向滑动。
   *
   * @param { boolean | undefined } isVertical - 是否为纵向滑动。<br/>true表示纵向滑动；false表示横向滑动。<br/>取值为undefined时，进行横向滑动。
   * @returns { ArcSwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default vertical(isVertical: boolean | undefined): this;

  /**
   * 是否禁用组件滑动切换功能。未通过该接口设置时，默认不禁用组件滑动切换功能。
   *
   * @param { boolean | undefined } disabled - 是否禁用组件滑动切换功能。设置为true禁用，false不禁用。<br/>取值为undefined时，不禁用组件滑动切换功能。
   * @returns { ArcSwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default disableSwipe(disabled: boolean | undefined): this;

  /**
   * 设置旋转表冠的灵敏度。未通过该接口设置时，旋转表冠的灵敏度默认为CrownSensitivity.MEDIUM。
   *
   * @param { CrownSensitivity | undefined } sensitivity - 旋转表冠的灵敏度。<br/>取值为undefined时，旋转表冠的灵敏度为CrownSensitivity.MEDIUM。
   * @returns { ArcSwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default digitalCrownSensitivity(sensitivity: CrownSensitivity | undefined): this;

  /**
   * 当前显示子组件的索引变化时触发该事件，返回值为当前显示子组件的索引值。
   *
   * ArcSwiper组件结合[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)使用时，不能在onChange事件里
   * 触发子页面UI的刷新。
   *
   * @param { IndexChangedHandler | undefined } handler - 当前显示的子组件索引变化时触发该事件。<br/>取值为undefined时，无回调。
   * @returns { ArcSwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onChange(handler: IndexChangedHandler | undefined): this;

  /**
   * 切换动画开始时触发该回调。
   *
   * @param { AnimationStartHandler | undefined } handler - 切换动画开始时的回调。<br/>取值为undefined时，无回调。
   * @returns { ArcSwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onAnimationStart(handler: AnimationStartHandler | undefined): this;

  /**
   * 切换动画结束时触发该回调。默认无回调。
   *
   * 当ArcSwiper切换动效结束时触发，包括动画过程中手势中断，通过[SwiperController]{@link ./@internal/component/ets/swiper:SwiperController}调用
   * finishAnimation。参数为动画结束后的index值，多列ArcSwiper时，index为最左侧组件的索引。
   *
   * @param { AnimationEndHandler | undefined } handler - 切换动画结束时触发该回调。<br/>取值为undefined时，无回调。
   * @returns { ArcSwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onAnimationEnd(handler: AnimationEndHandler | undefined): this;

  /**
   * 在页面跟手滑动过程中，逐帧触发该回调。
   *
   * @param { GestureSwipeHandler | undefined } handler - 在页面跟手滑动过程中，逐帧触发该回调。<br/>取值为undefined时，无回调。
   * @returns { ArcSwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onGestureSwipe(handler: GestureSwipeHandler | undefined): this;

  /**
   * 设置边缘滑动效果。未通过该接口设置时，边缘滑动效果默认为EdgeEffect.Spring。
   *
   * @param { EdgeEffect | undefined } edgeEffect - 边缘滑动效果。<br/>取值为undefined时，边缘滑动效果为EdgeEffect.Spring。
   * @returns { ArcSwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default effectMode(edgeEffect: EdgeEffect | undefined): this;

  /**
   * 自定义ArcSwiper页面切换动画。在页面跟手滑动和离手后执行切换动画的过程中，会对视窗内所有页面逐帧触发回调。开发者可以在回调中设置透明度、缩放比例、位移等属性来自定义切换动画。
   *
   * 在页面跟手滑动和离手后执行切换动画的过程中，会对视窗内所有页面逐帧触发
   * [SwiperContentTransitionProxy](docroot://reference/apis-arkui/arkui-ts/ts-container-arcswiper copy.md#swipercontenttransitionproxy)
   * 回调。例如，当视窗内有下标为0、1的两个页面时，会每帧触发两次index值分别为0和1的回调。
   *
   * @param { ArcSwiperContentAnimatedTransition | undefined } transition - ArcSwiper自定义切换动画相关信息。<br/>取值为undefined时，无回调。
   * @returns { ArcSwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default customContentTransition(transition: ArcSwiperContentAnimatedTransition | undefined): this;

  /**
   * 是否关闭特殊动效效果。未通过该接口设置时，默认不关闭特殊动效效果。
   *
   * @param { boolean | undefined } disabled - 是否关闭特殊动效效果。<br/>取值为undefined时，不关闭特殊动效效果。
   * @returns { ArcSwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default disableTransitionAnimation(disabled: boolean | undefined): this;

  /**
   * 设置arcSwiper选项。
   *
   * @param { ArcSwiperController } [controller] - ArcSwiper构造函数选项
   * @returns { ArcSwiperAttribute } 返回ArcSwiperAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setArcSwiperOptions(controller?: ArcSwiperController): this;
}

/**
 * 创建弧形滑块视图容器。
 *
 * @param { ArcSwiperController } [controller] - 给组件绑定一个控制器，用来控制组件翻页。
 * @param { CustomBuilder } [content_] - 可以包含子组件。<br/>**说明：** <br/>1. 子组件类型：系统组件和自定义组件，支持渲染控制类型（
 *     [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、
 *     [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)和
 *     [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)）。<br/>2. 不建议在执行翻页动画过程中增加或减少子
 *     组件，会导致未进行动画的子组件提前进入视窗，引起显示异常。
 * @returns { ArcSwiperAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ComponentBuilder
export declare function ArcSwiper(
    controller?: ArcSwiperController, 
    content_?: CustomBuilder
): ArcSwiperAttribute;

/**
 * 定义ArcSwiper组件
 *
 * @param { CustomBuilderT<ArcSwiperAttribute> } style_ - arcSwiper属性实例
 * @param { CustomBuilder } [content_] - 内容区
 * @returns { ArcSwiperAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function ArcSwiper(
 style_: CustomBuilderT<ArcSwiperAttribute>,
 content_?: CustomBuilder,
): ArcSwiperAttribute;