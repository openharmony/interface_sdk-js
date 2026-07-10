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
* 停止播放动画时，告知应用。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type FinishAnimationHandler = () => void;

/**
* ArcSwiper容器组件的控制器，可以将此对象绑定至ArcSwiper组件，可以通过它控制翻页。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export class ArcSwiperController {

  /**
   * ArcSwiperController的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor();

  /**
   * 翻至下一页。翻页带动效切换过程，时长通过[duration]{@link ArcSwiperAttribute#duration}指定。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  showNext();

  /**
   * 翻至上一页。翻页带动效切换过程，时长通过[duration]{@link ArcSwiperAttribute#duration}指定。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  showPrevious();

  /**
   * 停止播放动画。
   *
   * @param { FinishAnimationHandler } handler - 动画结束的回调。<br>默认值：不传入的情况，无回调
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  finishAnimation(handler?: FinishAnimationHandler);
}

/**
* 弧形方向。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export enum ArcDirection {

  /**
   * 3点钟方向。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  THREE_CLOCK_DIRECTION = 0,

  /**
   * 6点钟方向。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  SIX_CLOCK_DIRECTION = 1,

  /**
   * 9点钟方向。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  NINE_CLOCK_DIRECTION = 2
}

/**
* 提供弧形圆点指示器属性及功能。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export class ArcDotIndicator {

  /**
   * ArcDotIndicator的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor();

  /**
   * 设置弧形指示器的方向。
   *
   * @param { Optional<ArcDirection> } direction - 设置弧形指示器的方向。<br/>默认值：ArcDirection.SIX_CLOCK_DIRECTION，6点钟方向。
   * @returns { ArcDotIndicator } 提供弧形圆点指示器属性及功能。
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  arcDirection(direction: Optional<ArcDirection>): ArcDotIndicator;

  /**
   * 设置弧形指示器中，未选中导航点的颜色。
   *
   * @param { Optional<ResourceColor> } color - 设置弧形指示器中，未选中导航点的颜色。<br/>默认值：'#A9FFFFFF'
   * @returns { ArcDotIndicator } 提供弧形圆点指示器属性及功能。
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  itemColor(color: Optional<ResourceColor>): ArcDotIndicator;

  /**
   * 设置弧形指示器中，选中导航点的颜色。
   *
   * @param { Optional<ResourceColor> } color - 设置弧形指示器中，选中导航点的颜色。<br/>默认值：'#FF5EA1FF'
   * @returns { ArcDotIndicator } 提供弧形圆点指示器属性及功能。
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selectedItemColor(color: Optional<ResourceColor>): ArcDotIndicator;

  /**
   * 设置弧形指示器被长按时，弧形指示器的颜色。
   *
   * @param { Optional<ResourceColor> } color - 设置弧形指示器被长按时，弧形指示器的颜色。<br/>默认值：'#FF404040'
   * @returns { ArcDotIndicator } 提供弧形圆点指示器属性及功能。
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  backgroundColor(color: Optional<ResourceColor>): ArcDotIndicator;

  /**
   * 设置弧形指示器的遮罩渐变色。
   *
   * @param { Optional<LinearGradient> } color - 设置弧形指示器的遮罩渐变色。<br/>起始颜色默认值：'#00000000'<br/>结束颜色默认值：'#FF000000'
   * @returns { ArcDotIndicator } 提供弧形圆点指示器属性及功能。
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  maskColor(color: Optional<LinearGradient>): ArcDotIndicator;
}

/**
* Provide an interface for ArcSwiper.
*
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
interface ArcSwiperInterface {

  /**
   *
   * @param { ArcSwiperController } controller - Controller bound to the component to control the page turning.
   * @returns { ArcSwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  (controller?: ArcSwiperController): ArcSwiperAttribute;
}

/**
* 当前显示元素的索引变化时，告知应用。
*
 * @param { number } index - 当前显示元素的索引。index序列从0开始。
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type IndexChangedHandler = (index: number) => void;

/**
* 切换动画开始时的回调。
*
 * @param { number } index - 当前显示元素的索引，动画开始前的index值（不是最终结束动画的index值）。
 * @param { number } targetIndex - 切换动画目标元素的索引。
 * @param { SwiperAnimationEvent } event - 动画相关信息，包括主轴方向上当前显示元素和目标元素相对ArcSwiper起始位置的位移，以及离手速度。
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type AnimationStartHandler = (index: number, targetIndex: number, event: SwiperAnimationEvent) => void;

/**
* 切换动画结束时的回调。
*
 * @param { number } index - 当前显示元素的索引。
 * @param { SwiperAnimationEvent } event - 动画相关信息，只返回主轴方向上当前显示元素相对于ArcSwiper起始位置的位移。
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type AnimationEndHandler = (index: number, event: SwiperAnimationEvent) => void;

/**
* 在页面跟手滑动过程中，逐帧触发的回调。
*
 * @param { number } index - 当前显示元素的索引。
 * @param { SwiperAnimationEvent } event - 动画相关信息，只返回主轴方向上当前显示元素相对于ArcSwiper起始位置的位移。
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type GestureSwipeHandler = (index: number, event: SwiperAnimationEvent) => void;

/**
* ArcSwiper自定义切换动画相关信息。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface SwiperContentAnimatedTransition {

  /**
   * ArcSwiper自定义切换动画超时时间。从页面执行默认动画（页面滑动）至移出视窗外的第一帧开始计时，如果到达该时间后，开发者仍未调用
   * [SwiperContentTransitionProxy]{@link SwiperContentTransitionProxy}的
   * [finishTransition]{@link SwiperContentTransitionProxy.finishTransition}接口通知ArcSwiper组件此页面的自定义动画已结束，那么组件就会认为此页面的自定义动
   * 画已结束，立即在该页面节点下渲染树。单位ms，默认值为0。
   *
   * @default 0 ms
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  timeout?: number;

  /**
   * 自定义切换动画具体内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  transition: Callback<SwiperContentTransitionProxy>;
}

/**
* ArcSwiper自定义切换动画执行过程中，返回给开发者的proxy对象。开发者可通过该对象获取自定义动画视窗内的页面信息，同时，也可以通过调用该对象的finishTransition接口通知ArcSwiper组件页面自定义动画已结
* 束。
*
* > **说明：**
*
* > - 假设当前选中的子组件的索引为0，从第0页切换到第1页的动画过程中，每帧都会对视窗内所有页面触发回调，当视窗内有第0页和第1页两页时，每帧会触发两次回调。其中第一次回调的selectedIndex为0，index为0，
* > position为当前帧第0页相对于动画开始前第0页的移动比例，mainAxisLength为主轴方向上第0页的长度；第二次回调的selectedIndex仍为0，index为1，position为当前帧第1页相对于动画开始前第0
* > 页的移动比例，mainAxisLength为主轴方向上第1页的长度。
* >
* > - 若动画曲线为弹簧插值曲线，从第0页切换到第1页的动画过程中，可能会因为离手时的位置和速度，先过滑到第2页，再回弹到第1页，该过程中每帧会对视窗内第1页和第2页触发回调。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface SwiperContentTransitionProxy {

  /**
   * 当前选中页面的索引。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selectedIndex: number;

  /**
   * 视窗内页面的索引。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  index: number;

  /**
   * index页面相对于ArcSwiper主轴起始位置（selectedIndex对应页面的起始位置）的移动比例。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  position: number;

  /**
   * index对应页面在主轴方向上的长度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  mainAxisLength: number;

  /**
   * 通知ArcSwiper组件，此页面的自定义动画已结束。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  finishTransition(): void;
}

/**
* 除支持[通用属性]{@link common}外，还支持以下属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
declare class ArcSwiperAttribute extends CommonMethod<ArcSwiperAttribute> {

  /**
   * 设置当前在容器中显示的子组件的索引值。设置小于0或大于等于子组件数量时，按照默认值0处理。
   *
   * @param { Optional<number> } index - 当前在容器中显示的子组件的索引值。<br/>当index值为undefined时，按取值为0处理。
   * @returns { ArcSwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  index(index: Optional<number>): ArcSwiperAttribute;

  /**
   * 设置弧形圆点指示器样式。
   *
   * @param { Optional<ArcDotIndicator | boolean> } style - 弧形圆点指示器样式。<br/> - ArcDotIndicator：弧形圆点指示器属性及功能。<br/> -
   *     boolean：是否启用弧形圆点指示器。设置为true启用，false不启用。<br/> 默认值：true<br/> 默认类型：ArcDotIndicator
   * @returns { ArcSwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  indicator(style: Optional<ArcDotIndicator | boolean>): ArcSwiperAttribute;

  /**
   * 设置子组件切换的动画时长。
   *
   * @param { Optional<number> } duration - 子组件切换的动画时长。<br/>默认值：400<br/>单位：毫秒
   * @returns { ArcSwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  duration(duration: Optional<number>): ArcSwiperAttribute;

  /**
   * 设置是否为纵向滑动。
   *
   * @param { Optional<boolean> } isVertical - 是否为纵向滑动。<br/>true: 纵向滑动；false: 横向滑动。<br/>默认值：false
   * @returns { ArcSwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  vertical(isVertical: Optional<boolean>): ArcSwiperAttribute;

  /**
   * 是否禁用组件滑动切换功能。
   *
   * @param { Optional<boolean> } disabled - 是否禁用组件滑动切换功能。设置为true禁用，false不禁用。<br/>默认值：false
   * @returns { ArcSwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  disableSwipe(disabled: Optional<boolean>): ArcSwiperAttribute;

  /**
   * 设置旋转表冠的灵敏度。
   *
   * @param { Optional<CrownSensitivity> } sensitivity - 旋转表冠的灵敏度。<br/>默认值：CrownSensitivity.MEDIUM
   * @returns { ArcSwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): ArcSwiperAttribute;

  /**
   * 当前显示子组件的索引变化时触发该事件，返回值为当前显示子组件的索引值。
   *
   * ArcSwiper组件结合[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)使用时，不能在onChange事件里
   * 触发子页面UI的刷新。
   *
   * @param { Optional<IndexChangedHandler> } handler - 当前显示元素的索引回调。
   * @returns { ArcSwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onChange(handler: Optional<IndexChangedHandler>): ArcSwiperAttribute;

  /**
   * 切换动画开始时触发该回调。
   *
   * @param { Optional<AnimationStartHandler> } handler - 切换动画开始时的回调。
   * @returns { ArcSwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onAnimationStart(handler: Optional<AnimationStartHandler>): ArcSwiperAttribute;

  /**
   * 切换动画结束时触发该回调。
   *
   * 当ArcSwiper切换动效结束时触发，包括动画过程中手势中断，通过[SwiperController]{@link SwiperController}调用finishAnimation。参数为动画结束后的index值，多列
   * ArcSwiper时，index为最左侧组件的索引。
   *
   * @param { Optional<AnimationEndHandler> } handler - 切换动画结束时触发该回调。
   * @returns { ArcSwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onAnimationEnd(handler: Optional<AnimationEndHandler>): ArcSwiperAttribute;

  /**
   * 在页面跟手滑动过程中，逐帧触发该回调。
   *
   * @param { Optional<GestureSwipeHandler> } handler - 在页面跟手滑动过程中，逐帧触发该回调。
   * @returns { ArcSwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onGestureSwipe(handler: Optional<GestureSwipeHandler>): ArcSwiperAttribute;

  /**
   * 设置边缘滑动效果。 目前支持的滑动效果参见[EdgeEffect]{@link EdgeEffect}的。调用控制器接口时回弹不生效。
   *
   * @param {  Optional<EdgeEffect> } edgeEffect - 边缘滑动效果。<br/>默认值：EdgeEffect.Spring
   * @returns { ArcSwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  effectMode(edgeEffect: Optional<EdgeEffect>): ArcSwiperAttribute;

  /**
   * 自定义ArcSwiper页面切换动画。在页面跟手滑动和离手后执行切换动画的过程中，会对视窗内所有页面逐帧触发回调。开发者可以在回调中设置透明度、缩放比例、位移等属性来自定义切换动画。
   *
   * 在页面跟手滑动和离手后执行切换动画的过程中，会对视窗内所有页面逐帧触发[SwiperContentTransitionProxy]{@link SwiperContentTransitionProxy}回调。例如，当视窗内有下标为
   * 0、1的两个页面时，会每帧触发两次index值分别为0和1的回调。
   *
   * @param { Optional<SwiperContentAnimatedTransition> } transition - ArcSwiper自定义切换动画相关信息。
   * @returns { ArcSwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  customContentTransition(transition: Optional<SwiperContentAnimatedTransition>): ArcSwiperAttribute;

  /**
   * 是否关闭特殊动效效果。
   *
   * @param { Optional<boolean> } disabled - 是否关闭特殊动效效果。<br>true：关闭特殊动效效果；false：不关闭特殊动效效果。<br>传入参数非法时，按false处理。
   * @returns { ArcSwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  disableTransitionAnimation(disabled: Optional<boolean>): ArcSwiperAttribute;
}

/**
* Defines the ArcSwiper Component that can provide the ability for sub components to swipe and display.
*
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @uicomponent [since 19]
 * @since 18 dynamic
 * @noninterop
 */
declare let ArcSwiper: ArcSwiperInterface;

/**
 * Defines ArcSwiper Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
declare let ArcSwiperInstance: ArcSwiperAttribute;