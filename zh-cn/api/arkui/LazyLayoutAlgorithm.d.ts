/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

import { FrameNode, LayoutConstraint } from './FrameNode';
import { Position } from './Graphics';

/**
 * [LazyDynamicLayout](docroot://reference/apis-arkui/arkui-ts/ts-container-lazydynamiclayout.md)组件支持的懒加载布局算法详细信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface LazyLayoutAlgorithm {}

/**
 * 懒加载布局方向枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export enum LazyLayoutDirection {
  /**
   * 向前方向，表示当前布局是从内容起始端往末尾端布局。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  FORWARD = 0,
  /**
   * 向后方向，表示当前布局是从内容末尾端往起始端布局。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  BACKWARD = 1
}

/**
 * 懒加载布局辅助类，提供布局方向和可视区域位置信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class LazyLayoutHelper {
  /**
   * 获取可视区域的起始位置。
   *
   * @returns { int } 可视区域的起始位置。
   *     <br>单位：px。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getViewStart(): int;
  /**
   * 获取可视区域的结束位置。
   *
   * @returns { int } 可视区域的结束位置。
   *     <br>单位：px。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getViewEnd(): int;
  /**
   * 获取懒加载布局方向。
   *
   * @returns { LazyLayoutDirection } 懒加载布局方向。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getLazyLayoutDirection(): LazyLayoutDirection;
  /**
   * 设置懒加载的调整偏移量。
   *
   * 在布局列数、间距等参数变化场景下，需要调用该接口调整偏移量以保持可视区域第一个子组件相对位置保持不变。
   *
   * 以垂直方向布局为例，当布局方向为LazyLayoutDirection.FORWARD时，该接口设置的偏移量为容器上边界的调整量，当布局方向为LazyLayoutDirection.BACKWARD时，该接口设置的偏移量为容器
   * 下边界的调整量。
   *
   * @param { int } offset - 设置的调整偏移量，往内容末尾端调整为正，往内容起始端调整为负。单位：px。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  setAdjustedOffset(offset: int): void;
  /**
   * 设置子组件为非激活状态。
   *
   * 如果子组件是通过[ForEach]{@link ../@internal/component/ets/for_each}或[Repeat]{@link ../@internal/component/ets/repeat}（未启
   * 用[virtualScroll]{@link RepeatAttribute#virtualScroll}）生成的，设置为非激活状态后将不显示。
   *
   * 如果子组件是通过[LazyForEach]{@link ../@internal/component/ets/lazy_for_each}或
   * [Repeat]{@link ../@internal/component/ets/repeat}（启用[virtualScroll]{@link RepeatAttribute#virtualScroll}）生成的，设置为非
   * 激活状态后将销毁或回收。
   *
   * [LazyForEach]{@link ../@internal/component/ets/lazy_for_each}或[Repeat]{@link ../@internal/component/ets/repeat}（启
   * 用[virtualScroll]{@link RepeatAttribute#virtualScroll}）只支持连续的激活子组件；在两个激活子组件之间设置子组件为非激活状态不会生效。
   *
   * 布局在可视区域外的子组件会自动设置为非激活状态。
   *
   * @param { int[] } children - 设置为非激活状态的子组件索引数组。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  setChildrenInactive(children: int[]): void;
}

/**
 * 自定义懒加载布局算法的构造入参，设置布局算法的主轴方向。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
interface LazyCustomLayoutAlgorithmOptions {
  /**
   * 定义懒加载布局的主轴方向。
   *
   * @default Axis.Vertical
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  axis?: Axis;
}

/**
 * 自定义懒加载布局算法类。
 *
 * > **说明：**
 * >
 * > LazyCustomLayoutAlgorithm类对象可以作为
 * > [LazyDynamicLayout](docroot://reference/apis-arkui/arkui-ts/ts-container-lazydynamiclayout.md)组件的入参指定布局算法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class LazyCustomLayoutAlgorithm implements LazyLayoutAlgorithm {
  /**
   * 自定义懒加载布局算法类的构造函数。
   *
   * @param { LazyCustomLayoutAlgorithmOptions } [option] - 自定义懒加载布局算法的构造入参，设置布局算法的轴向。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(option?: LazyCustomLayoutAlgorithmOptions);
  /**
   * 通过重写此函数，开发者可以自定义测量子组件的大小。ArkUI框架会在懒加载动态布局组件确定尺寸时，将该组件对应的FrameNode、布局约束和懒加载辅助对象通过onMeasure传递给开发者。不允许在onMeasure函数中改
   * 变状态变量。
   *
   * > **说明：**
   * >
   * > - 在此函数中，开发者可以调用[FrameNode]{@link ./FrameNode:FrameNode}的
   * > [getChild()]{@link ./FrameNode:FrameNode#getChild(index: number)}方法获取子组件FrameNode，调用
   * > [FrameNode]{@link ./FrameNode:FrameNode}的[measure()]{@link ./FrameNode:FrameNode#measure}方法测量子组件大小，参考
   * > LazyDynamicLayout组件
   * > [示例1（实现懒加载自定义布局）](docroot://reference/apis-arkui/arkui-ts/ts-container-lazydynamiclayout.md#示例1实现懒加载自定义布局)。
   * >
   * > - 在此函数中调用[getChild()]{@link ./FrameNode:FrameNode#getChild(index: number)}方法获取子组件时，必须传入
   * > [ExpandMode.LAZY_NOT_EXPAND]{@link ./FrameNode:ExpandMode}，避免全量加载子组件导致懒加载失效。调用
   * > [getChildrenCount()]{@link ./FrameNode:FrameNode#getChildrenCount()}方法获取子组件总数时，必须传入
   * > [ChildrenCountMode.ALL_NOT_EXPAND]{@link ./FrameNode:ChildrenCountMode}，避免获取子组件总数时全量加载子组件导致懒加载失效。
   *
   * @param { FrameNode } self - 懒加载动态布局组件在组件树上的实体节点。
   * @param { LayoutConstraint } constraint - 懒加载动态布局组件进行测量时使用的布局约束。
   * @param { LazyLayoutHelper } [helper] - 懒加载布局辅助对象，提供布局方向和可视区域位置信息。为undefined时表示不支持懒加载。helper为undefined的场景如下：
   *     <br>1. 在[WaterFlow]{@link ../@internal/component/ets/water_flow}组件多列模式或分段模式的多列分段下使用时不支持懒加载。
   *     <br>2. 在[List]{@link ../@internal/component/ets/list}组件下使用，当List设置了
   *     [lanes]{@link ListAttribute#lanes(value: number | LengthConstrain, gutter?: Dimension)}、
   *     [chainAnimation]{@link ListAttribute#chainAnimation}、[scrollSnapAlign]{@link ListAttribute#scrollSnapAlign}属性
   *     中的任意一个时不支持懒加载。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onMeasure(self: FrameNode, constraint: LayoutConstraint, helper?: LazyLayoutHelper): void;
  /**
   * 通过重写此函数，开发者可以自定义排列子组件的位置。ArkUI框架会在懒加载动态布局组件确定位置时，将该组件对应的FrameNode和布局位置通过onLayout传递给开发者。不允许在onLayout函数中改变状态变量。
   *
   * > **说明：**
   * >
   * > - 在此函数中，开发者可以调用[FrameNode]{@link ./FrameNode:FrameNode}的
   * > [getChild()]{@link ./FrameNode:FrameNode#getChild(index: number)}方法获取子组件FrameNode，调用
   * > [FrameNode]{@link ./FrameNode:FrameNode}的[layout()]{@link ./FrameNode:FrameNode#layout}方法设置子组件位置，参考
   * > LazyDynamicLayout组件
   * > [示例1（实现懒加载自定义布局）](docroot://reference/apis-arkui/arkui-ts/ts-container-lazydynamiclayout.md#示例1实现懒加载自定义布局)。
   * >
   * > - 在此函数中调用[getChild()]{@link ./FrameNode:FrameNode#getChild(index: number)}方法获取子组件时，必须传入
   * > [ExpandMode.LAZY_NOT_EXPAND]{@link ./FrameNode:ExpandMode}，避免全量加载子组件导致懒加载失效。调用
   * > [getChildrenCount()]{@link ./FrameNode:FrameNode#getChildrenCount()}方法获取子组件总数时，必须传入
   * > [ChildrenCountMode.ALL_NOT_EXPAND]{@link ./FrameNode:ChildrenCountMode}，避免获取子组件总数时全量加载子组件导致懒加载失效。
   *
   * @param { FrameNode } self - 懒加载动态布局组件在组件树上的实体节点。
   * @param { Position } position - 懒加载动态布局组件进行布局时使用的位置信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onLayout(self: FrameNode, position: Position): void;
}