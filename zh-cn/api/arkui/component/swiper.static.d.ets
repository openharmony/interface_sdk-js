
'use static';
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

import { IndicatorComponentController } from './indicatorcomponent';

import { CommonMethod, Callback, ICurve, Bindable, AttributeModifier } from './common';

import { EdgeEffect, Curve, PageFlipMode } from './enums';

import { Length, LengthMetrics, VoidCallback, ResourceColor, VP, Font, ItemFillPolicy } from './units';

import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';

import { ScrollState } from "./list";

/**
 * Provides methods for switching components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class SwiperController {

  /**
   * SwiperController的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor();

  /**
   * 翻至下一页。翻页带动效切换过程，时长通过Swiper的[duration]{@link SwiperAttribute.duration}属性设置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  showNext(): void;

  /**
   * 翻至上一页。翻页带动效切换过程，时长通过Swiper的[duration]{@link SwiperAttribute.duration}属性设置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  showPrevious(): void;

  /**
   * 翻页至指定页面。
   *
   * > **说明：**
   * >
   * > 该接口本身提供了不带动画跳转页面的能力（animationMode设置为false或者SwiperAnimationMode.NO_ANIMATION），不建议使用changeIndex接口启动动画后，直接使用
   * > finishAnimation接口打断来实现页面不带动画跳转。
   *
   * @param { int | undefined } index - 指定页面在Swiper中的索引值。<br/>取值为undefined时，按默认值处理。<br/>**说明：** <br/>设置的值小于0或大于最大页面索引时，取
   *     0。
   * @param { SwiperAnimationMode | boolean } [animationMode] - 设置翻页至指定页面时的动效模式。<br/>默认值：
   *     SwiperAnimationMode.NO_ANIMATION<br/> **说明：** <br/>当传入true时有动效，等同于SwiperAnimationMode.DEFAULT_ANIMATION；当传入
   *     false时无动效，等同于SwiperAnimationMode.NO_ANIMATION。<br/>true：有动效翻页；false：无动效翻页。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  changeIndex(index: int | undefined, animationMode?: SwiperAnimationMode | boolean): void;

  /**
   * 停止播放动画。
   *
   * @param { ?VoidCallback } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  finishAnimation(callback?: VoidCallback): void;

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
   * >
   * > Swiper的preloadItems需要在Swiper创建之后去调用，首次预加载推荐在Swiper的
   * > [onAppear](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-show-hide.md#onappear)生命周期中去控制。
   *
   * @param { Array<int> | undefined } indices - 需预加载的子节点的下标数组。<br/>取值为undefined时，默认全部加载。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter invalid. Possible causes:
   *     <br> 1. The parameter type is not Array<int>.
   *     <br> 2. The parameter is an empty array.
   *     <br> 3. The parameter contains an invalid index.
   * @throws { BusinessError } 100004 - Controller not bound to component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  preloadItems(indices: Array<int> | undefined): Promise<void>;

  /**
   * 开启模拟拖拽功能。
   *
   * > **说明：**
   * >
   * > - Swiper已经处在真实手势拖拽中，或者已经开启了模拟拖拽，调用接口会返回false表示操作失败。
   * >
   * > - 模拟拖拽无法触发嵌套滚动。
   *
   * @returns { boolean } 是否开启模拟拖拽功能。<br/>true表示开启模拟拖拽功能成功；false表示开启模拟拖拽功能失败。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  startFakeDrag(): boolean;

  /**
   * 设置模拟拖拽的拖拽距离。
   *
   * > **说明：**
   * >
   * > - 模拟拖拽的距离需要依赖布局体现，建议接口在布局前调用，拖拽效果可以在当前帧布局后体现。如果在未布局前调用了多次该接口，当前帧布局时只生效最后一次调用传入的拖拽距离。
   * >
   * > - 在[loop]{@link SwiperAttribute.loop}设置为true的循环场景下，如果设置的模拟拖拽的距离大于布局总长度，此时模拟拖拽距离会被调整为拖拽到刚好显示第一个子节点（向布局起点拖拽）或者最后一个子
   * > 节点（向布局终点方向拖拽）的距离。
   * >
   * > - [onGestureSwipe]{@link SwiperAttribute.onGestureSwipe}事件、
   * > [onContentWillScroll]{@link SwiperAttribute.onContentWillScroll}事件在拖拽过程中不触发。
   * > [customContentTransition]{@link SwiperAttribute.customContentTransition}会在布局前触发，由于真实的拖拽距离可能在布局时被调整，在传入拖拽距离过大时，触发事
   * > 件时的返回的节点显示信息可能与布局结果不一致。
   *
   * @param { float } offset - 需要模拟拖拽的拖拽距离。<br/>正数表示向布局起点拖拽；负数表示向布局终点方向拖拽。<br/>单位：vp
   * @returns { boolean } 是否消费传入的拖拽距离。<br/>true表示消费任意传入的拖拽距离；false表示当前没有在模拟拖拽中，或者已经拖拽到边界，没有消费传入的拖拽距离。<br/>设置0为不可消费的拖拽距离。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fakeDragBy(offset: float): boolean;

  /**
   * 关闭模拟拖拽功能。
   *
   * > **说明：**
   * >
   * > 在开启模拟拖拽后，如果接收到真实拖拽手势，模拟拖拽会结束。
   *
   * @returns { boolean } 是否关闭模拟拖拽功能。<br/>true表示关闭模拟拖拽功能成功；false表示关闭模拟拖拽功能失败。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  stopFakeDrag(): boolean;

  /**
   * 获取是否在模拟拖拽中的状态。
   *
   * @returns { boolean } 是否处在模拟拖拽状态。<br/>true表示当前处在模拟拖拽状态；false表示当前不处在模拟拖拽状态。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isFakeDragging(): boolean;
}

/**
 * Defines the indicator class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class Indicator {

  /**
   * 导航点左侧相对于Swiper的位置。
   *
   * @param { Length | undefined } value - 设置导航点左侧相对于Swiper的位置。<br/>未设置left和right时，进行自适应大小布局，按照指示器本身大小和Swiper的大小在主轴方向上进行
   *     居中对齐。<br/>设置为0时：按照0位置布局计算。<br/>优先级：高于right属性。<br/>取值范围：[0,Swiper宽度-导航点区域宽度]，超出该范围时，取最近的边界值。
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  left(value: Length | undefined): this;

  /**
   * 导航点顶部相对于Swiper的位置。
   *
   * @param { Length | undefined } value - 设置导航点顶部相对于Swiper的位置。<br/>未设置top和bottom时，进行自适应大小布局，按照指示器本身大小和Swiper的大小，在交叉轴方向上
   *     ，位于底部，效果与设置bottom=0一致。<br/>设置为0时：按照0位置布局计算。<br/>优先级：高于bottom属性。<br/>取值范围：[0,Swiper高度-导航点区域高度]，超出该范围时，取最近的边界值。
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  top(value: Length | undefined): this;

  /**
   * 导航点右侧相对于Swiper的位置。
   *
   * @param { Length | undefined } value - 设置导航点右侧相对于Swiper的位置。<br/>未设置left和right时，进行自适应大小布局，按照指示器本身大小和Swiper的大小在主轴方向上进行
   *     居中对齐。<br/>设置为0时：按照0位置布局计算。<br/>优先级：低于left属性。<br/>取值范围：[0,Swiper宽度-导航点区域宽度]，超出该范围 时，取最近的边界值。
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  right(value: Length | undefined): this;

  /**
   * 导航点底部相对于Swiper的位置。
   *
   * @param { Length | undefined } value - 设置导航点底部相对于Swiper的位置。<br/>未设置top和bottom时，进行自适应大小布局，按照指示器本身大小和Swiper的大小，在交叉轴方向上
   *     ，位于底部，效果与设置bottom=0一致。<br/>设置为0时：按照0位置布局计算。<br/>优先级：低于top属性。<br/>取值范围：[0,Swiper高度-导航点区域高度]，超出该范围时，取最近的边界值。
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bottom(value: Length | undefined): this;

  /**
   * 导航点底部相对于Swiper的位置，并可通过ignoreSize属性忽略导航点大小。
   *
   * @param { LengthMetrics | Length | undefined } bottom - 设置导航点底部相对于Swiper的位置。<br/>未设置top和bottom时，进行自适应大小布局，按照指示器本身大小和
   *     Swiper的大小，在交叉轴方向上，位于底部，效果与设置bottom=0一致。<br/>设置为0时：按照0位置布局计算。<br/>优先级：低于top属性。<br/>取值范围：[0,Swiper高度-导航点区域高度]，超出该
   *     范围时，取最近的边界值。
   * @param { boolean } ignoreSize - 设置是否忽略导航点本身大小，默认false。<br/>true表示可以将导航点更靠近Swiper底部；false表示忽略导航点本身大小。<br/>使用方法可以参考
   *     [示例9演示导航点space与bottom](docroot://reference/apis-arkui/arkui-ts/ts-container-swiper copy.md#示例9演示导航点space与bottom)
   *     。<br/> 说明：[数字导航点]{@link DigitIndicator}ignoreSize属性，不生效的场景如下：<br/> ?  当
   *     [vertical]{@link SwiperAttribute.vertical} 设置为false，且bottom > 0。<br/>  ?  当
   *     [vertical]{@link SwiperAttribute.vertical} 设置为true时：<br/>1、bottom > 0 时。<br/> 2、bottom设为undefined。 <br/> 3、
   *     isSidebarMiddle设置为false时。
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bottom(bottom: LengthMetrics | Length | undefined, ignoreSize: boolean): this;

  /**
   * 在[RTL]{@link ./../../@internal/component/ets/state_management:LayoutDirection}模式下为导航点距离Swiper组件右边的距离，在
   * [LTR]{@link ./../../@internal/component/ets/state_management:LayoutDirection}模式下为导航点距离Swiper组件左边的距离。
   *
   * @param { LengthMetrics | undefined } value - 设置在RTL模式下为导航点距离Swiper组件右边的距离，在LTR模式下为导航点距离Swiper组件左边的距离。<br/>默认值：0<br/
   *     >单位：vp<br/>取值范围：[0, Swiper宽度-导航点区域宽度]，超出该范围时，取最近的边界值。<br/>取值为undefined时，按默认值处理。
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  start(value: LengthMetrics | undefined): this;

  /**
   * 在RTL模式下为导航点距离Swiper组件左边的距离，在LTR模式下为导航点距离Swiper组件右边的距离。
   *
   * @param { LengthMetrics | undefined } value - 设置在RTL模式下为导航点距离Swiper组件左边的距离，在LTR模式下为导航点距离Swiper组件右边的距离。<br/>默认值：0<br/
   *     >单位：vp<br/>取值范围：[0, Swiper宽度-导航点区域宽度]，超出该范围时，取最近的边界值。<br/>取值为undefined时，按默认值处理。
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  end(value: LengthMetrics | undefined): this;

  /**
   * 返回一个DotIndicator对象。
   *
   * @returns { DotIndicator }
   圆点指示器对象，用于设置Swiper组件的圆点导航样式。
   * @stagemodelonly
   * @since 23 static
   */
  static dot(): DotIndicator;

  /**
   * 返回一个DigitIndicator对象。
   *
   * @returns { DigitIndicator }
   数字指示器对象，用于设置Swiper组件的数字导航样式。
   * @stagemodelonly
   * @since 23 static
   */
  static digit(): DigitIndicator;
}

/**
 * Define DotIndicator, the indicator type is dot.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class DotIndicator extends Indicator {

  /**
   * DotIndicator的构造函数。
   *
   * > **说明：**
   * >
   * > - 按压导航点时，导航点会放大至1.33倍显示，因此非按压态时导航点的可见范围边界至实际范围边界存在一定距离，该距离会随着itemWidth、itemHeight、selectedItemWidth、
   * > selectedItemHeight等参数变大而变大。
   * >
   * > - 若页面数量较多、圆点导航点超出页面时，建议使用maxDisplayCount设置导航点显示个数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor();

  /**
   * Swiper组件圆点导航指示器的宽。
   *
   * @param { Length | undefined } value - 设置Swiper组件圆点导航指示器的宽，不支持设置百分比。<br/>默认值：6<br/>单位：vp<br/>取值范围：(0, +∞)<br/>取值为
   *     undefined时，按默认值处理。
   * @returns { DotIndicator }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  itemWidth(value: Length | undefined): this;

  /**
   * Swiper组件圆点导航指示器的高。
   *
   * @param { Length | undefined } value - 设置Swiper组件圆点导航指示器的高，不支持设置百分比。<br/>默认值：6<br/>单位：vp<br/>取值范围：(0, +∞)<br/>取值为
   *     undefined时，按默认值处理。
   * @returns { DotIndicator }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  itemHeight(value: Length | undefined): this;

  /**
   * 选中Swiper组件圆点导航指示器的宽。
   *
   * @param { Length | undefined } value - 设置选中Swiper组件圆点导航指示器的宽，不支持设置百分比。<br/>默认值：6<br/>单位：vp<br/>取值范围：(0, +∞)<br/>取值为
   *     undefined时，按默认值处理。
   * @returns { DotIndicator }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  selectedItemWidth(value: Length | undefined): this;

  /**
   * 选中Swiper组件圆点导航指示器的高。
   *
   * @param { Length | undefined } value - 设置选中Swiper组件圆点导航指示器的高，不支持设置百分比。<br/>默认值：6<br/>单位：vp<br/>取值范围：(0, +∞)<br/>取值为
   *     undefined时，按默认值处理。
   * @returns { DotIndicator }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  selectedItemHeight(value: Length | undefined): this;

  /**
   * 是否显示Swiper组件圆点导航指示器的蒙版样式。
   *
   * @param { boolean | undefined } value - 设置是否显示Swiper组件圆点导航指示器的蒙版样式。<br/>true表示显示Swiper组件圆点导航指示器的蒙版样式；false表示不显示。<br/
   *     >默认值：false<br/>取值为undefined时，按默认值处理。
   * @returns { DotIndicator }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  mask(value: boolean | undefined): this;

  /**
   * Swiper组件圆点导航指示器的颜色。
   *
   * @param { ResourceColor | undefined } value - 设置Swiper组件圆点导航指示器的颜色。<br/>默认值：'#1A182431'，浅灰色。<br/>取值为undefined时，按默认值处
   *     理。
   * @returns { DotIndicator }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  color(value: ResourceColor | undefined): this;

  /**
   * 选中Swiper组件圆点导航指示器的颜色。
   *
   * @param { ResourceColor | undefined } value - 设置选中Swiper组件圆点导航指示器的颜色。<br/>默认值：'#007DFF'，蓝色。<br/>取值为undefined时，按默认值处理
   *     。
   * @returns { DotIndicator }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  selectedColor(value: ResourceColor | undefined): this;

  /**
   * 圆点导航点指示器样式下，导航点显示个数最大值。
   *
   * @param { int | undefined } maxDisplayCount - 设置圆点导航点指示器样式下，导航点显示个数最大值，当实际导航点个数大于最大导航点个数时，会生效超长效果样式，样式如
   *     [示例5](docroot://reference/apis-arkui/arkui-ts/ts-container-swiper copy.md#示例5设置圆点导航点超长显示)所示。<br/>取值范围：[6, 9]<br
   *     />**说明：** <br/>1、超长显示场景，目前暂时不支持交互功能（包括：手指点击拖拽、鼠标操作等）。<br/>2、在超长显示场景下，中间页面对应的选中导航点的位置，并不是完全固定的，取决于之前的翻页操作序列。<br/
   *     >3、当前仅支持displayCount为1的场景。<br/>取值为undefined时，等同于没有超长显示效果。
   * @returns { DotIndicator } return the DotIndicator
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  maxDisplayCount(maxDisplayCount: int | undefined): this;

  /**
   * 设置Swiper圆点导航点间距。
   *
   * @param { LengthMetrics | undefined } space - 设置圆点导航点间距，不支持设置百分比。<br/>默认值：PC/2in1设备上为10，其他设备为8。<br/>单位：vp<br/>取值范围：
   *     [0, +∞)<br/>取值为undefined时，按默认值处理。
   * @returns { DotIndicator }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  space(space: LengthMetrics | undefined): this;
}

/**
 * Set Swiper column count adaptation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SwiperAutoFill {

  /**
   * 设置元素显示最小宽度。
   *
   * 默认值：0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  minSize: VP;
}

/**
 * Define DigitIndicator, the indicator type is digit.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class DigitIndicator extends Indicator {

  /**
   * DotIndicator的构造函数。
   *
   * > **说明：**
   * >
   * > - 按压导航点时，导航点会放大至1.33倍显示，因此非按压态时导航点的可见范围边界至实际范围边界存在一定距离，该距离会随着itemWidth、itemHeight、selectedItemWidth、
   * > selectedItemHeight等参数变大而变大。
   * >
   * > - 若页面数量较多、圆点导航点超出页面时，建议使用maxDisplayCount设置导航点显示个数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor();

  /**
   * Swiper组件数字导航点的字体颜色。
   *
   * @param { ResourceColor | undefined } value - 设置Swiper组件数字导航点的字体颜色。<br/>默认值：'#ff182431'，黑色。<br/>取值为undefined时，按默认值处理
   *     。
   * @returns { DigitIndicator }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontColor(value: ResourceColor | undefined): this;

  /**
   * 选中Swiper组件数字导航点的字体颜色。
   *
   * @param { ResourceColor | undefined } value - 设置选中Swiper组件数字导航点的字体颜色。<br/>默认值：'#ff182431'，黑色。<br/>取值为undefined时，按默认值
   *     处理。
   * @returns { DigitIndicator }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  selectedFontColor(value: ResourceColor | undefined): this;

  /**
   * Swiper组件数字导航点的字体样式。
   *
   * @param { Font | undefined } value - 设置Swiper组件数字导航点的字体样式。<br/>只支持Font中size和weight参数，family和style设置不生效。<br/>默认值：{
   *     size:?14,?weight:?FontWeight.Normal?}<br/>取值为undefined时，按默认值处理。
   * @returns { DigitIndicator }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  digitFont(value: Font | undefined): this;

  /**
   * 选中Swiper组件数字导航点的字体样式。
   *
   * @param { Font | undefined } value - 设置选中Swiper组件数字导航点的字体样式。<br/>默认值：{?size:?14,?weight:?FontWeight.Normal?}<br/>取值为
   *     undefined时，按默认值处理。
   * @returns { DigitIndicator }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  selectedDigitFont(value: Font | undefined): this;
}

/**
 * Arrow object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ArrowStyle {

  /**
   * 设置箭头底板是否显示。
   * true：箭头底板显示；false：箭头底板不显示。
   * 默认值： false。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  showBackground?: boolean;

  /**
   * 设置箭头显示位置。
   * true：箭头居中显示在Swiper组件两侧；false：箭头显示在导航点指示器两侧。
   * 默认值： false。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isSidebarMiddle?: boolean;

  /**
   * 设置底板大小。
   * 不支持设置百分比。
   * <br>在导航点两侧显示：
   * 默认值：24vp
   * 在组件两侧显示：
   * 默认值：32vp。
   *
   * @default When isSidebarMiddle is false, the default value is 24vp, Otherwise,the default value is 32vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundSize?: Length;

  /**
   * 设置底板颜色。
   * 在导航点两侧显示：
   * 透明色.
   * 在组件两侧显示：
   * 默认值：'#19182431'，半透明深灰色。 默认值： '#00000000'。
   *
   * @default When isSidebarMiddle is false, the default value is #00000000, Otherwise, the default value is #19182431
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundColor?: ResourceColor;

  /**
   * 设置箭头大小。
   * 在导航点两侧显示时：
   * 在导航点两侧显示时：
   * 默认值：18vp
   * 在组件两侧显示时：
   * 默认值：24vp。
   *
   * @default When isSidebarMiddle is false, the default value is 18vp, Otherwise, the default value is 24vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  arrowSize?: Length;

  /**
   * 设置箭头颜色。
   * 默认值： '#182431'，深灰色。
   *
   * @default #182431
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  arrowColor?: ResourceColor;
}

/**
 * Swiper在主轴上的尺寸大小模式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SwiperDisplayMode {

  /**
   * Swiper滑动一页的宽度为Swiper组件自身的宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  STRETCH = 0
}

/**
 * Provides an interface for swiper animation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SwiperAnimationEvent {

  /**
   * Swiper当前显示元素在主轴方向上，相对于Swiper起始位置的位移。
   * 单位为： vp。
   *
   * @default 0.0 vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  currentOffset: double;

  /**
   * Swiper动画目标元素在主轴方向上，相对于Swiper起始位置的位移。
   * 单位为： vp。
   *
   * @default 0.0 vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  targetOffset: double;

  /**
   * Swiper离手动画开始时的离手速度。
   * 单位为： vp。
   *
   * @default 0.0 vp/s
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  velocity: double;
}

/**
 * Define autoPlay related options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AutoPlayOptions {

  /**
   * 在按下事件中配置子组件是否立即停止播放。
   *
   * true表示停止播放；false表示自动播放不中断。
   *
   * 默认值：true
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  stopWhenTouched: boolean;
}

/**
 * 定义用于控制缓存计数行为的属性
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface CachedCountOptions {

  /**
   * 预加载范围内的节点是否进行绘制。
   *
   * true表示预加载范围内的节点进行绘制；false表示预加载范围内的节点不进行绘制。
   *
   * 默认值：false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isShown?: boolean;

  /**
   * [cachedCount]{@link SwiperAttribute.default cachedCount(count: int | undefined, options: CachedCountOptions |
   * undefined)}
   * 是否按组计算。
   * true表示cachedCount按实际子组件个数计算，不按组计算；false表示如果displayCount.swipeByGroup=true，则cachedCount按组计算，否则按实际子组件个数计算。
   * 默认值： false。
   * undefined
   * 当设置为true时，cachedCount将根据实际的子组件计数来计算。
   * 独立于displayCount分组计算。
   * <br>如果启用了SwiftByGroup并且该值为false，则cachedCount将按组计算。
   * </p>。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  independent?: boolean;
}

/**
 * Swiper组件和父组件的嵌套滚动模式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SwiperNestedScrollMode {

  /**
   * Swiper只自身滚动，不与父组件联动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SELF_ONLY = 0,

  /**
   * Swiper自身先滚动，自身滚动到边缘以后父组件滚动。父组件滚动到边缘以后，如果父组件有边缘效果，则父组件触发边缘效果，否则Swiper触发边缘效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SELF_FIRST = 1
}

/**
 * Declare the animation mode of SwiperController's changeIndex method.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SwiperAnimationMode {

  /**
   * 无动效翻页至指定页面。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NO_ANIMATION = 0,

  /**
   * 有动效翻页至指定页面。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DEFAULT_ANIMATION = 1,

  /**
   * 先无动效翻页至指定页面附近，再有动效翻页至指定页面。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FAST_ANIMATION = 2
}

/**
 * 切换动画开始时触发的回调。
 *
 * @param { int } index - 当前显示元素的索引。多列Swiper时，index为最左侧组件的索引。
 *     取值范围为全体整数
 *     取值限定为整数。
 * @param { int } targetIndex - 当前显示元素的索引。多列Swiper时，index为最左侧组件的索引。
 *     取值范围为全体整数
 *     取值限定为整数。
 * @param { SwiperAnimationEvent } extraInfo - 动画相关信息，包括主轴方向上当前显示元素和目标元素相对Swiper起始位置的位移，以及离手速度。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnSwiperAnimationStartCallback = (index: int, targetIndex: int,
  extraInfo: SwiperAnimationEvent) => void;

/**
 * 切换动画结束时触发的回调。
 *
 * @param { int } index - 当前显示元素的索引。多列Swiper时，index为最左侧组件的索引。
 *     取值范围为全体整数
 *     取值限定为整数。
 * @param { SwiperAnimationEvent } extraInfo - 动画相关信息，只返回主轴方向上当前显示元素相对于Swiper起始位置的位移。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnSwiperAnimationEndCallback = (index: int, extraInfo: SwiperAnimationEvent) => void;

/**
 * 在页面跟手滑动过程中，逐帧触发的回调。
 *
 * @param { int } index - 当前显示元素的索引。多列Swiper时，index为最左侧组件的索引。
 *     取值范围为全体整数
 *     取值限定为整数。
 * @param { SwiperAnimationEvent } extraInfo - 动画相关信息，只返回主轴方向上当前显示元素相对于Swiper起始位置的位移。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnSwiperGestureSwipeCallback = (index: int, extraInfo: SwiperAnimationEvent) => void;

/**
 * 除支持[通用属性]{@link ./../../@internal/component/ets/common}外，还支持以下属性：
 *
 * > **说明：**
 * >
 * > Swiper组件通用属性[clip](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-sharp-clipping.md#clip12)的默认值为
 * > true。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SwiperAttribute extends CommonMethod {

  /**
   * 设置当前在容器中显示的子组件的索引值。设置小于0或大于等于子组件数量时，按照默认值0处理。
   *
   * 从API version 10开始，该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
   *
   * @param { int | Bindable<int> | undefined } value
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default index(value: int | Bindable<int> | undefined): this;

  /**
   * 设置子组件是否自动播放。轮播方向为索引从小到大。
   *
   * [loop]{@link SwiperAttribute.loop}为false时，自动轮播到最后一页时停止轮播。手势切换完成后，如果当前页面不是最后一页，自动轮播将继续播放。当Swiper不可见时会停止轮播。
   *
   * @param { boolean | undefined } value - 子组件是否自动播放。<br/>true：自动播放；false：不自动播放。<br/>传入非法值时，按false处理。<br/>取值为undefined时
   *     ，按默认值处理。
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default autoPlay(value: boolean | undefined): this;

  /**
   * 设置子组件是否自动播放。options入参控制手指或鼠标按下屏幕时子组件是否停止自动播放。
   *
   * 当[loop]{@link SwiperAttribute.loop}设置为false时，自动轮播将在到达最后一页时停止。在通过手势切换且未处于最后一页的情况下，轮播将继续进行。Swiper在不可见时，轮播也将停止。
   *
   * @param { boolean | undefined } autoPlay - 子组件是否自动播放。<br/>true：自动播放；false：不自动播放。<br/>传入非法值时，按false处理。<br/>取值为
   *     undefined时，按默认值处理。
   * @param { AutoPlayOptions | undefined } options - 配置手指或鼠标按下屏幕时子组件是否停止自动播放。当stopWhenTouched设置为true时，多指按下场景中任意一个手指抬起
   *     后，将自动继续播放。<br/>默认值：{ stopWhenTouched: true }，停止自动播放。<br/>取值为undefined时，按默认值处理。
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default autoPlay(autoPlay: boolean | undefined, options: AutoPlayOptions | undefined): this;

  /**
   * 设置使用自动播放时播放的时间间隔。
   *
   * @param { int | undefined } value
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default interval(value: int | undefined): this;

  /**
   * 设置可选导航点指示器样式。
   *
   * @param { IndicatorComponentController | DotIndicator | DigitIndicator | boolean | undefined } indicator -
   可选导航点指示器样
   *     式。<br/>- IndicatorComponentController：单独导航点指示器控制器。当使用单独导航点指示器控制器时，可以与外部单独导航点进行绑定，但是绑定的单独导航点和内置导航点不能同时存在。<br/> -
   *     DotIndicator：圆点指示器样式。<br/> - DigitIndicator：数字指示器样式。<br/> - boolean：是否启用导航点指示器。设置为true启用，false不启用。<br/>默认值：true
   *     <br/>默认类型：DotIndicator。<br/>true：启用导航点指示器；false：不启用导航点指示器。<br/>取值为undefined时，按默认值处理。
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default indicator(indicator: IndicatorComponentController | DotIndicator | DigitIndicator | boolean | undefined): this;

  /**
   * 设置导航点箭头样式。
   *
   * > **说明：**
   * >
   * > Swiper视窗内显示所有子节点时，只显示一屏，无法翻页，左右翻页箭头均不显示。
   *
   * @param { ArrowStyle | boolean | undefined } value - 支持设置箭头和底板样式，异常场景使用ArrowStyle对象中的默认值。<br/>true：显示默认的箭头和底板样式；
   *     false：不显示箭头和底板。<br/>默认值：false<br/>取值为undefined时，按默认值处理。
   * @param { boolean | undefined } [isHoverShow] - 设置鼠标悬停时是否显示箭头。<br/>默认值：false<br/>true：有导航点时鼠标悬停在导航点和箭头范围内显示箭头，无导航点时鼠
   *     标悬停在Swiper显示范围内显示箭头；false：常驻显示箭头。<br/>取值为undefined时，按默认值处理。<br/>**说明：**<br/>箭头显示时，支持点击翻页。
   * @returns { SwiperAttribute } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default displayArrow(value: ArrowStyle | boolean | undefined, isHoverShow?: boolean | undefined): this;

  /**
   * 设置是否开启循环。在LazyForEach懒循环加载模式下，加载的组件数量建议大于5个。预加载的组件数量不足时，可能会导致快速切换时出现空白或卡顿。
   *
   * @param { boolean | undefined } value
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default loop(value: boolean | undefined): this;

  /**
   * 设置子组件切换的动画时长。
   *
   * duration需要和[curve]{@link SwiperAttribute.curve}一起使用。
   *
   * curve默认曲线为[interpolatingSpring]{@link ./../../@ohos.curves:curves.interpolatingSpring}，此时动画时长只受曲线自身参数影响，不再受duration
   * 的控制。不受duration控制的曲线可以查阅[插值计算]{@link ./../../@ohos.curves:curves}模块，比如，
   * [springMotion]{@link ./../../@ohos.curves:curves.springMotion}、
   * [responsiveSpringMotion]{@link ./../../@ohos.curves:curves.responsiveSpringMotion}和interpolatingSpring类型的曲线不受
   * duration控制。如果希望动画时长受到duration控制，需要给curve设置其他曲线。
   *
   * @param { int | undefined } value
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default duration(value: int | undefined): this;

  /**
   * 设置是否为纵向滑动。
   *
   * @param { boolean | undefined } value
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default vertical(value: boolean | undefined): this;

  /**
   * 设置子组件与子组件之间间隙。不支持设置百分比。
   *
   * 类型为number或double时，默认单位vp。类型为string时，需要显式指定像素单位，如'10px'；未指定像素单位时，如'10'，单位为vp。
   *
   * @param { double | string | undefined } value
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default itemSpace(value: double | string | undefined): this;

  /**
   * 设置主轴方向上元素排列的模式，优先以[displayCount](docroot://reference/apis-arkui/arkui-ts/ts-container-swiper copy.md#displaycount8)
   * 设置的个数显示，displayCount未设置时本属性生效。
   *
   * @param { SwiperDisplayMode | undefined } value
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default displayMode(value: SwiperDisplayMode | undefined): this;

  /**
   * 设置预加载子组件个数，以当前页面为基准，加载当前显示页面的前后个数。前面item删除，后面会向前补位。例如cachedCount=1时，会将当前显示页面在索引序号上相邻的前一页和后一页的子组件都预加载。如果设置为按组翻页，即
   * displayCount的swipeByGroup参数设为true，预加载时会以组为基本单位。例如cachedCount=1，swipeByGroup=true时，会将当前组的前面一组和后面一组的子组件都预加载。
   *
   * > **说明：**
   * >
   * > - 在连续滑动场景中，一屏显示一个Swiper子组件时，通常将cachedCount值设置为1或2即可。最佳实践请参考
   * > [优化Swiper组件加载慢丢帧问题-缓存数据项](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-swiper_high_performance_development_guide#section143504547145)
   * > 。
   * >
   * > - 只在[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)和开启了virtualScroll开关的
   * > [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)中生效，生效后超出显示及缓存范围的子节点会被释放。
   *
   * @param { int | undefined } value
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default cachedCount(value: int | undefined): this;

  /**
   * 设置预加载子组件个数。
   *
   * > **说明：**
   * >
   * > - isShown值为true，且设置的count过大时，如果前后预加载范围内可加载的节点不足，循环场景下同一个可加载节点只会布局在一侧。
   *
   * @param { int | undefined } count - 预加载子组件个数。<br/>默认值：1<br/>取值范围：[0, +∞)，设置小于0的值时，按照默认值处理。<br/>取值为undefined时，按默认值处理。
   * @param { boolean | undefined } isShown - 预加载范围内的节点是否进行绘制，不下渲染树。<br/>true：预加载范围内的节点进行绘制；false：预加载范围内的节点不进行绘制。<br/>传入
   *     非法值以及undefined时，按false处理。
   * @returns { SwiperAttribute } the attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default cachedCount(count: int | undefined, isShown: boolean | undefined): this;

  /**
   * 设置预加载子组件个数和配置选项。
   *
   * > **说明：**
   * >
   * > - 当options的independent设置为true时，预加载子组件个数按count个数计算，与
   * > [displayCount](docroot://reference/apis-arkui/arkui-ts/ts-container-swiper copy.md#displaycount22)的分组swipeByGroup
   * > 计算解耦。例如cachedCount的count为1时，会将当前显示子节点的前一个和后一个子组件预加载。
   * >
   * > - 当displayCount的swipeByGroup参数设为true，且options的independent为false（默认值）时，预加载子组件个数以组为基本单位。例如cachedCount的count为1，
   * > displayCount的value为2，displayCount的swipeByGroup为true时，会将当前显示组的前一组和后一组的各两个子组件预加载。
   * >
   * > - 只在[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)和开启了virtualScroll开关的
   * > [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)中生效，生效后超出缓存范围的子节点会被释放。
   *
   * @param { int | undefined } count - 预加载子组件个数。<br/>取值范围：[0, +∞)，设置小于0的值时，按照1处理。<br/>取值为undefined时，按照1处理。
   * @param { CachedCountOptions | undefined } options - 预加载子组件的配置选项。<br/>取值为undefined时，按CachedCountOptions中的默认值处理。
   * @returns { SwiperAttribute } the attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default cachedCount(count: int | undefined, options: CachedCountOptions | undefined): this;

  /**
   * 设置Swiper视窗内元素显示个数。
   *
   * 使用number类型时，子元素主轴宽度会基于Swiper主轴宽度适应。子组件按照主轴均分Swiper宽度（减去displayCount-1个itemSpace）的方式进行主轴拉伸（收缩）布局，设置为小于等于0的值时，按默认值1显示
   * 。
   *
   * 使用string类型时，根据子元素的主轴宽度线性布局，不再适应Swiper主轴宽度。此时value值仅支持设置为'auto'，设置
   * [customContentTransition]{@link SwiperAttribute.customContentTransition}和
   * [onContentDidScroll]{@link SwiperAttribute.onContentDidScroll}事件不生效。
   *
   * 使用SwiperAutoFill类型时，子元素主轴宽度会基于Swiper主轴宽度适应。通过设置一个子组件最小宽度值minSize，会根据Swiper当前宽度和minSize值自动计算并更改一页内元素显示个数。当minSize为空或
   * 者小于等于0时，Swiper显示1列。
   *
   * > **说明：**
   * >
   * > 1.按组进行翻页时，判定翻页的拖拽距离阈值将调整为Swiper宽度的50%（若按子元素翻页，该阈值为子元素宽度的50%）。若最后一组的子元素数量少于displayCount，将利用占位子元素进行填充，占位子元素仅用于布局定位，
   * > 不显示任何内容，其位置将直接显示Swiper的背景样式。
   * >
   * > 2.displayCount设置为'auto'，并且设置非循环时，选中导航点的位置与视窗内首个页面的位置保持一致。如果翻页完成后，视窗内首个页面仅部分显示在视窗内，选中导航点亦与页面的位置保持一致，位于两个未选中的导航点之间。
   * > 在此情况下，建议开发者隐藏导航点。
   * >
   * > 3.导航点样式设定为圆形导航点，视窗内显示子元素数量等于1时（单页场景）或者 displayCount设置为'auto'时，显示导航点数量等于子元素数量。
   * >
   * > 4.displayCount设置为'auto'时，若设置swipeByGroup为true，则单个子元素按组翻页，一次只能翻一页。在此情况下，建议开发者不设置swipeByGroup或者设置swipeByGroup为false
   * > 。
   *
   * 当导航点样式设定为圆形导航点，视窗内显示子元素数量大于1（多页场景），显示导航点数量情况如下表：
   *
   * | 子元素总数量是否大于视窗内显示的子元素数量 | 是否按组翻页 | 是否循环        | 圆形导航点显示数量                                           | 说明
   *                           |
   * | ------------------------------------------ | ------------ | --------------- | -----------------------------------
   * ------------------------- | ---------------------------------------- |
   * | 是                                         | 是           | loop设置为true  | 圆形导航点的数量将与组数相等（组数计算方式为子元素总数量除以视窗内显示的子元素数
   * 量，若除不尽，则向上取整） | 该效果在displayCount设置为'auto'时不生效 |
   * | 是                                         | 是           | loop设置为false | 圆形导航点的数量将与组数相等（组数计算方式为子元素总数量除以视窗内显示的子元素数
   * 量，若除不尽，则向上取整） | 该效果在displayCount设置为'auto'时不生效 |
   * | 是                                         | 否           | loop设置为true  | 圆形导航点的数量将与实际可翻页次数一致（显示导航点的数量等于子元素总数量） |
   * —— |
   * | 是                                         | 否                     | loop设置为false | 圆形导航点的数量将与实际可翻页次数一致（计算方式是子元素的总
   * 数量减去视窗内显示的子元素数量+1个） | 该效果在displayCount设置为'auto'时不生效 |
   * | 否（同时子元素的总数量大于0）                       | —— | —— | 显示1个圆形导航点                                            | 该效果在
   * displayCount设置为'auto'时不生效 |
   * | 否（同时子元素的总数量等于0） | —— | —— | 显示0个圆形导航点 | —— |
   *
   * @param { int | string | SwiperAutoFill | undefined } value - The number of elements [since 23 - 24]
   * @param { int | string | SwiperAutoFill | ItemFillPolicy | undefined } value - 视窗内显示的子元素个数。<br/> 默认值：1<br/>取值范围：(0,
   *     +∞)，设置小于等于0的值时，按照1处理。<br/>取值为undefined时，按默认值处理。 [since 24]
   * @param { boolean | undefined } [swipeByGroup] - if swipe by group.
   *     <br>Default value: false
   *     <br>true: The page is turned by group. The number of subelements in each group is the value of displayCount.
   *     false: The default page turning behavior is used. That is, pages are turned based on subelements.    * @syscap SystemCapability.ArkUI.ArkUI.Full [since 23]
   * @returns { SwiperAttribute }    * @syscap SystemCapability.ArkUI.ArkUI.Full [since 23]
   * @syscap SystemCapability.ArkUI.ArkUI.Full    * @syscap SystemCapability.ArkUI.ArkUI.Full [since 23]
   * @stagemodelonly
   * @since 23 static
   */
  default displayCount(value: int | string | SwiperAutoFill | ItemFillPolicy| undefined, swipeByGroup?: boolean | undefined): this;

  /**
   * 设置边缘滑动效果，[loop]{@link SwiperAttribute.loop}为false或Swiper视窗内一屏显示所有子节点时生效。调用
   * [SwiperController.changeIndex()](docroot://reference/apis-arkui/arkui-ts/ts-container-swiper copy.md#changeindex12)
   * 、[SwiperController.showNext()]{@link SwiperController.showNext}和
   * [SwiperController.showPrevious()]{@link SwiperController.showPrevious}接口跳转至首尾页时不生效回弹。
   *
   * @param { EdgeEffect | undefined } value
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default effectMode(value: EdgeEffect | undefined): this;

  /**
   * 设置禁用组件滑动切换功能。适用于仅通过按钮或导航点控制翻页的场景，或需要限制用户滑动操作的场景。
   *
   * @param { boolean | undefined } value
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default disableSwipe(value: boolean | undefined): this;

  /**
   * 设置Swiper的动画曲线，默认为弹簧插值曲线，常用曲线参考[Curve]{@link ./../../@internal/component/ets/enums:Curve}，也可以通过
   * [插值计算]{@link ./../../@ohos.curves:curves}模块提供的接口创建自定义的插值曲线对象。
   *
   * @param { Curve | string | ICurve | undefined } value
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default curve(value: Curve | string | ICurve | undefined): this;

  /**
   * 当前显示元素索引变化时触发该事件，返回值为当前显示元素的索引值。
   *
   * Swiper组件结合LazyForEach使用时，不能在onChange事件里触发子页面UI的刷新。
   *
   * > **说明：**
   * >
   * > 如果是动画引起的索引变化，回调在动画结束时触发。
   *
   * @param { Callback<int> | undefined } event
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onChange(event: Callback<int> | undefined): this;

  /**
   * 当选中元素改变时触发该回调，返回值为当前选中的元素的索引值。
   *
   * @param { Callback<int> | undefined } event - 当前选中元素的索引。<br/>取值为undefined时，不使用回调函数。
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onSelected(event: Callback<int> | undefined): this;

  /**
   * 设置前边距，用于露出前一项的一小部分，使用效果可以参考
   * [示例1设置导航点交互及翻页动效](docroot://reference/apis-arkui/arkui-ts/ts-container-swiper copy.md#示例1设置导航点交互及翻页动效)。仅当Swiper子组件的
   * 布局方式为拉伸时生效，主要包括两种场景：1、displayMode属性设置为SwiperDisplayMode.STRETCH；2、displayCount属性设置为number类型。
   *
   * 当主轴方向为横向布局时，nextMargin/prevMargin中任意一个大于子组件测算的宽度，nextMargin和prevMargin均不显示。
   *
   * 当主轴方向为纵向布局时，nextMargin/prevMargin中任意一个大于子组件测算的高度，nextMargin和prevMargin均不显示。
   *
   * 使用nextMargin/prevMargin接口时，不要对子组件进行
   * [尺寸范围限制](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#constraintsize)，否则子节点主轴将不会被拉伸到预期长度
   * ，边距失去效果。
   *
   * > **说明：**
   * >
   * > 该接口不支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { Length | undefined } value - 前边距。不支持设置百分比。<br/>
   *     <br>按默认值处理。
   * @param { boolean | undefined } [ignoreBlank] - 非loop场景下首页不显示prevMargin。<br/>true：首页不显示空白的prevMargin，首页的左边缘与Swiper视窗
   *     左边缘对齐；false：首页显示空白prevMargin，首页的左边缘与Swiper视窗左边缘的距离为prevMargin。<br/>
   *     <br>默认值： false。
   * @returns { SwiperAttribute } The attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default prevMargin(value: Length | undefined, ignoreBlank?: boolean | undefined): this;

  /**
   * 当主轴方向为横向布局时，nextMargin或prevMargin中任意一个大于子组件测算的宽度，nextMargin和prevMargin均不显示。
   *
   * 当主轴方向为纵向布局时，nextMargin或prevMargin中任意一个大于子组件测算的高度，nextMargin和prevMargin均不显示。
   *
   * 使用nextMargin/prevMargin接口时，不要对子组件进行
   * [尺寸范围限制](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#constraintsize)，否则子节点主轴将不会被拉伸到预期长度
   * ，边距失去效果。
   *
   * > **说明：**
   * >
   * > 该接口不支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { Length | undefined } value - 后边距。不支持设置百分比。<br/>
   *     <br>按默认值处理。
   * @param { boolean | undefined } [ignoreBlank] - 非loop场景下尾页不显示nextMargin。<br/>true：尾页不显示空白的nextMargin，尾页的右边缘与Swiper视窗
   *     右边缘对齐；false：尾页显示空白nextMargin，尾页的右边缘与Swiper视窗右边缘的距离为nextMargin。<br/>
   *     <br>默认值： false。
   *     <br>按默认值处理.
   *     <br/>
   *     **说明：**<br/>尾页场景下，prevMargin和nextMargin的值相加作为左边边距显示前一个页面。 默认值： false。
   * @returns { SwiperAttribute } The attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default nextMargin(value: Length | undefined, ignoreBlank?: boolean | undefined): this;

  /**
   * 当选中元素改变时触发该回调，返回值为将要隐藏的元素的索引值。
   *
   * @param { Callback<int> | undefined } event - 将要隐藏元素的索引。<br/>取值为undefined时，不使用回调函数。
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onUnselected(event: Callback<int> | undefined): this;

  /**
   * Swiper滑动状态变化事件回调，在跟手滑动、离手动画、停止三种滑动状态变化时触发，返回值为当前滑动状态。
   *
   * @param { Callback<ScrollState> | undefined } event - 滑动状态变化的回调。<br/>取值为undefined时，不使用回调函数。
   * @returns { SwiperAttribute } -this
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onScrollStateChanged(event: Callback<ScrollState> | undefined): this;

  /**
   * 切换动画开始时触发该回调。
   *
   * > **说明：**
   * >
   * > - 调用此回调后，切换动画的逻辑将在渲染线程中执行，从而使处于空闲状态的主线程能够充分利用这段时间来加载子组件所需资源，减少后续在cachedCount范围内节点的预加载时间。最佳实践请参考
   * > [优化Swiper组件加载慢丢帧问题-提前加载数据](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-swiper_high_performance_development_guide#section8783121513246)
   * > 。
   * >
   * > - 当翻页动画时长为0时，只有以下场景会触发该回调：滑动翻页、自动轮播、调用SwiperController.showNext()和SwiperController.showPrevious()接口以及手指点击导航点翻页。
   *
   * @param { OnSwiperAnimationStartCallback | undefined } event
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onAnimationStart(event: OnSwiperAnimationStartCallback | undefined): this;

  /**
   * 切换动画结束时触发该回调。
   *
   * 当Swiper切换动效结束时触发，包括动画过程中手势中断，通过SwiperController调用finishAnimation。
   *
   * @param { OnSwiperAnimationEndCallback | undefined } event
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onAnimationEnd(event: OnSwiperAnimationEndCallback | undefined): this;

  /**
   * 在页面跟手滑动过程中，逐帧触发该回调。
   *
   * @param { OnSwiperGestureSwipeCallback | undefined } event
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onGestureSwipe(event: OnSwiperGestureSwipeCallback | undefined): this;

  /**
   * 设置Swiper组件和父组件的嵌套滚动模式。当Swiper嵌套在滚动容器（如List、Scroll）中时，需要根据业务需求选择合适的嵌套滚动模式。[loop]{@link SwiperAttribute.loop}为true时Swiper组件没有边缘，不会触发父组件嵌套滚动。
   *
   * > **说明：**
   * >
   * > 由于Swiper的抛滑动画逻辑和其它滚动类组件不同（Swiper一次只能滑动一页，抛滑时做翻页动画），当Swiper内嵌套其它滚动组件时，如果Swiper的翻页动画已经启动，将无法接受子节点上传的滚动偏移量。这时Swiper的
   * > 翻页动画和子节点的边缘效果动画会同时执行。
   *
   * @param { SwiperNestedScrollMode | undefined } value - Swiper组件和父组件的嵌套滚动模式。<br/>默认值：SwiperNestedScrollMode.SELF_ONLY
   *     <br/>取值为undefined时，按默认值处理。
   * @returns { SwiperAttribute } the attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default nestedScroll(value: SwiperNestedScrollMode | undefined): this;

  /**
   * 自定义Swiper页面切换动画。在页面跟手滑动和离手后执行切换动画的过程中，会对视窗内所有页面逐帧触发回调，开发者可以在回调中设置透明度、缩放比例、位移等属性来自定义切换动画。
   *
   * 使用说明：
   *
   * 1、循环场景下，设置prevMargin和nextMargin属性，使得Swiper视窗的前后两端区域显示同一页面时，该接口不生效。
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
   * @param { SwiperContentAnimatedTransition | undefined } transition - Swiper自定义切换动画相关信息。<br/>取值为undefined时，不使用回调函数。
   * @returns { SwiperAttribute } the attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default customContentTransition(transition: SwiperContentAnimatedTransition | undefined): this;

  /**
   * 监听Swiper页面滑动事件。
   *
   * 使用说明：
   *
   * 1、循环场景下，设置prevMargin和nextMargin属性，使得Swiper视窗的前后两端区域显示同一页面时，该接口不生效。
   *
   * 2、在页面滑动过程中，会对视窗内所有页面逐帧触发[ContentDidScrollCallback]{@link ContentDidScrollCallback}回调。例如，当视窗内有下标为0、1的两个页面时，会每帧触发两次
   * index值分别为0和1的回调。
   *
   * 3、设置displayCount属性的swipeByGroup参数为true时，若同组中至少有一个页面在视窗内时，则会对同组中所有页面触发回调。
   *
   * @param { ContentDidScrollCallback | undefined } handler - Swiper滑动时触发的回调。<br/>取值为undefined时，不使用回调函数。
   * @returns { SwiperAttribute } the attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onContentDidScroll(handler: ContentDidScrollCallback | undefined): this;

  /**
   * 设置导航点是否可交互。适用于需要通过其他方式（如按钮）控制翻页，或需要禁止用户通过导航点点击翻页的场景。
   *
   * @param { boolean | undefined } value - 导航点是否可交互。<br/>true：导航点可交互；false：导航点不可交互。<br/>传入参数非法时，按true处理。<br/>取值为
   *     undefined时，按true处理。
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default indicatorInteractive(value: boolean | undefined): this;

  /**
   * 设置鼠标滚轮翻页模式。未通过该接口设置时，默认为连续翻页模式，取值为PageFlipMode.CONTINUOUS。
   *
   * @param { PageFlipMode | undefined } mode - page flip mode on mouse wheel event. The default value is
   *     PageFlipMode.CONTINUOUS.
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default pageFlipMode(mode: PageFlipMode | undefined): this;

  /**
   * Swiper滑动行为拦截事件，在滑动前触发。Swiper会依据该事件的返回值来决定是否允许此次滑动行为。若返回true，表示允许此次滑动行为，Swiper页面将跟随滑动。若返回false，表示不允许此次滑动，页面将保持静止。
   *
   * 1. 触发该事件的场景仅限于手势操作，具体包括手指滑动、滚动鼠标滚轮以及使用键盘方向键进行焦点移动。
   *
   * 2. 在手指滑动的过程中，每帧都将触发该事件，系统会依据事件的返回值判断是否对每帧的滑动做出响应。
   *
   * 3. 对于滚动鼠标滚轮和使用键盘方向键进行焦点移动的场景，每次翻页操作都会触发一次该事件，翻页是否被允许将根据事件的返回值来决定。
   *
   * @param { ContentWillScrollCallback | undefined } handler - Swiper滑动时触发的回调。<br/>取值为undefined时，不使用回调函数。
   * @returns { SwiperAttribute } the attribute of the swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onContentWillScroll(handler: ContentWillScrollCallback | undefined): this;

  /**
   * 设置显示区域上方或前方插入或删除数据时是否保持可见内容位置不变。适用于使用单一
   * [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)作为Swiper子节点的情况，通过LazyForEach的
   * [onDataAdd]{@link ./../../@internal/component/ets/lazy_for_each:DataChangeListener.onDataAdd}、
   * [onDataDelete]{@link ./../../@internal/component/ets/lazy_for_each:DataChangeListener.onDataDelete}等接口修改数据源。其他场景下，显
   * 示区域上方或前方插入或删除数据，可见内容位置会变化。
   *
   * 在[displayCount](docroot://reference/apis-arkui/arkui-ts/ts-container-swiper copy.md#displaycount8)属性的swipeByGroup参数
   * 设置为true，即按组翻页生效时，一次在显示区域上方或前方插入或删除数据，且插入或删除的是一组节点数量倍数的数据量时，才能保持可见内容位置不变，否则可见内容位置可能会随每组数据重新分组改变。
   *
   * @param { boolean | undefined } enabled - 设置显示区域上方或前方插入或删除数据时是否要保持可见内容位置不变。<br/>默认值：false，显示区域上方或前方插入或删除数据时可见内容位置会跟随
   *     变化。 <br/>true：显示区域上方或前方插入或删除数据时可见内容位置不变。如果改变数据源是在动画过程中，由于目标索引变化会导致动画停止。<br/>取值为undefined时，按默认值处理。
   * @returns { SwiperAttribute } -the attribute of swiper.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default maintainVisibleContentPosition(enabled: boolean | undefined): this;

  /**
   * 动态设置Swiper组件的属性方法。
   *
   * @param { AttributeModifier<SwiperAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   在当前组件上，动态设置属
   *     性方法，支持使用if/else语法。<br/>CommonMethod：通用属性和事件。<br/>取值为undefined时，按当前组件的属性方法默认值处理。
   * @returns { SwiperAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<SwiperAttribute> | AttributeModifier<CommonMethod> | undefined): this;

  /**
   * 设置滑动器选项。
   *
   * @param { SwiperController } [controller] - Swiper构造函数选项
   * @returns { SwiperAttribute } 返回SwiperAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setSwiperOptions(controller?: SwiperController): this;
}

/**
 * Defines the swiper content animated transition options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SwiperContentAnimatedTransition {

  /**
   * Swiper自定义切换动画超时时间。从页面执行默认动画（页面滑动）至移出视窗外的第一帧开始计时，如果到达该时间后，开发者仍未调用
   * [SwiperContentTransitionProxy]{@link SwiperContentTransitionProxy}的finishTransition接口通知Swiper组件此页面的自定义动画已结束，那么组件就会认
   * 为此页面的自定义动画已结束，立即将该页面节点下渲染树。单位：ms
   * 单位为： ms，取值范围为全体整数，取值为undefined时，按默认值处理。 默认值： 0。
   *
   * @default 0 ms
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  timeout?: int;

  /**
   * 自定义切换动画具体内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  transition: Callback<SwiperContentTransitionProxy>;
}

/**
 * The proxy of SwiperContentAnimatedTransition.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SwiperContentTransitionProxy {

  /**
   * 当前选中页面的索引。
   * 取值范围为全体整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  selectedIndex: int;

  /**
   * 视窗内页面的索引。
   * 取值范围为全体整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  index: int;

  /**
   * index页面相对于Swiper主轴起始位置（selectedIndex对应页面的起始位置）的移动比例。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  position: double;

  /**
   * index对应页面在主轴方向上的长度。
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  mainAxisLength: double;

  /**
   * 通知Swiper组件，此页面的自定义动画已结束。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  finishTransition(): void;
}

/**
 * The result of swiper ContentWillScrollCallback.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SwiperContentWillScrollResult {

  /**
   * 当前页面对应的index。在一次跟手滑动过程中，只要手指未离开屏幕，该值将保持不变，即使该页面已完全移出视窗，如在涉及多个页面的场景中。
   * 取值范围为全体整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  currentIndex: int;

  /**
   * 滑动方向上即将显示的页面index。
   * 取值范围为全体整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  comingIndex: int;

  /**
   * 此次滑动的位移，带有符号，正负分别指示不同的翻页方向。正数表示从index=1向index=0翻页，负数表示从index=0向index=1翻页。
   * 在手指滑动的场景中，该值为滑动事件中每帧传递下来的偏移量。在滚动鼠标滚轮和使用键盘方向键导航的场景中，该值代表即将翻页的距离。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offset: double;
}

/**
 * Swiper滑动时触发的回调，参数可参考[SwiperContentTransitionProxy]{@link SwiperContentTransitionProxy}中的说明。
 *
 * @param { int } selectedIndex - 当前选中页面的索引。
 *     取值范围为全体整数
 *     取值限定为整数。
 * @param { int } index - 视窗内页面的索引。
 *     取值范围为全体整数
 *     取值限定为整数。
 * @param { double } position - index页面相对于Swiper主轴起始位置（selectedIndex对应页面的起始位置）的移动比例。
 * @param { double } mainAxisLength - index页面相对于Swiper主轴起始位置（selectedIndex对应页面的起始位置）的移动比例。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ContentDidScrollCallback = (selectedIndex: int, index: int, position: double,
  mainAxisLength: double) => void;

/**
 * Swiper即将滑动前触发的回调，返回值表示是否允许此次滑动。
 *
 * @param { SwiperContentWillScrollResult } result - 即将滑动的相关信息，主要包括：当前页面对应的index、滑动方向上即将显示的页面index和此次滑动的位移。
 * @returns { boolean } Swiper是否响应本次滑动，true表示响应，false表示不响应。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ContentWillScrollCallback = (result: SwiperContentWillScrollResult) => boolean;

/**
 * 创建滑块视图容器。
 *
 * @param { SwiperController } [controller] - 给组件绑定一个控制器，用来控制组件翻页或者预加载指定子节点。
 * @param { CustomBuilder } [content_] - 子组件。
 * @returns { SwiperAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Swiper(
  controller?: SwiperController,
  content_?: CustomBuilder
): SwiperAttribute;

/**
 * 定义Swiper组件
 *
 * @param { CustomBuilderT<SwiperAttribute> } style_ - swiper属性实例
 * @param { CustomBuilder } [content_] - 内容区。
 * @returns { SwiperAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function Swiper(
 style_: CustomBuilderT<SwiperAttribute>,
 content_?: CustomBuilder,
): SwiperAttribute;