'use static';
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

import { FrameNode, LayoutConstraint } from 'arkui.FrameNode';
import { NodePosition } from 'arkui.Graphics';
import { Axis } from './component/enums';


/**
 * 定义懒加载布局算法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface LazyLayoutAlgorithm {}

/**
 * 定义懒加载布局的方向。
 *
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum LazyLayoutDirection {
  /**
   * 向前的方向。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  FORWARD = 0,
  /**
   * 向后的方向。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  BACKWARD = 1
}

/**
 * 懒布局算法的帮助器类，为懒布局提供布局方向和视图位置信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class LazyLayoutHelper {
  /**
   * 获取可见视图的起始位置。
   *
   * @returns { int } The start position of the visible view.
   *     <br>Unit: px.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  getViewStart(): int;
  /**
   * 获取可见视图的结束位置。
   *
   * @returns { int } The end position of the visible view.
   *     <br>Unit: px.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  getViewEnd(): int;
  /**
   * 获取懒加载布局方向。
   *
   * @returns { LazyLayoutDirection } The lazy layout direction.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  getLazyLayoutDirection(): LazyLayoutDirection;
  /**
   * 设置懒加载布局调整偏移量。
   *
   * @param { int } offset - 设置要的调整偏移值。
   *     <br>单位:单位：px。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setAdjustedOffset(offset: int): void;
  /**
   * 设置子项不活动。
   *
   * 如果子组件是通过ForEach或不带virtualScroll的Repeat生成的，将其设置为inactive后，将不会显示。
   * 如果子组件是通过LazyForEach或者通过带virtualScroll的Repeat来生成的，将其设置为非活动状态后将被销毁或回收。
   * 带有virtualScroll的LazyForEach和Repeat只支持连续活动的子组件，在两个活动的子组件之间设置子组件为inactive不会生效。
   * 布局在显示区域之外的子组件将自动设置为非活动状态。
   *
   * @param { int[] } children - 要设置非活动状态的子组件的索引。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setChildrenInactive(children: int[]): void;
}

/**
 * LazyCustomLayoutAlgorithm构造函数选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface LazyCustomLayoutAlgorithmOptions {
  /**
   * 定义懒加载布局轴。
   *
   * @default Axis.Vertical
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  axis?: Axis;
}

/**
 * 定义懒式自定义布局算法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class LazyCustomLayoutAlgorithm implements LazyLayoutAlgorithm {
  /**
   * 构造函数。
   *
   * @param { LazyCustomLayoutAlgorithmOptions } [option] - 设置懒加载自定义布局算法的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(option?: LazyCustomLayoutAlgorithmOptions);
  /**
   * 测量DynamicLayout FrameNode及其内容，以确定测量的大小的方法。
   *
   * @param { FrameNode } self - DynamicLayout组件的FrameNode。
   * @param { LayoutConstraint } constraint - 节点的布局约束，将在测量过程中使用。
   * @param { LazyLayoutHelper } [helper] - 懒布局算法的助手对象，提供布局方向和视图位置信息。
   *     如果未定义，则表示当前组件未在可滚动组件下使用，不支持懒布局。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onMeasure(self: FrameNode, constraint: LayoutConstraint, helper?: LazyLayoutHelper): void;
  /**
   * 方法为DynamicLayout的FrameNode及其每个子节点分配一个位置。
   * 它可以用于指定DynamicLayoutdFrameNode及其子节点的布局位置。
   *
   * @param { FrameNode } self - DynamicLayout组件的FrameNode。
   * @param { NodePosition } position - 节点的位置，将在执行布局方法时使用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onLayout(self: FrameNode, position: NodePosition): void;
}