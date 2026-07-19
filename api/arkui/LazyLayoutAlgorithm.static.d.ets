'use static'
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
 * Defines lazy layout algorithm.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface LazyLayoutAlgorithm {}

/**
 * Defines the direction of lazy layout.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum LazyLayoutDirection {
  /**
   * Forward direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  FORWARD = 0,
  /**
   * Backward direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  BACKWARD = 1,
}

/**
 * Helper class for lazy layout algorithm.
 * Provides layout direction and view position information for lazy layout.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class LazyLayoutHelper {
  /**
   * Get the start position of the visible view.
   *
   * @returns { int } The start position of the visible view.
   *     <br>Unit: px.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  getViewStart(): int;
  /**
   * Get the end position of the visible view.
   *
   * @returns { int } The end position of the visible view.
   *     <br>Unit: px.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  getViewEnd(): int;
  /**
   * Get the lazy layout direction.
   *
   * @returns { LazyLayoutDirection } The lazy layout direction.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  getLazyLayoutDirection(): LazyLayoutDirection;
  /**
   * Set the adjusted offset for the lazy layout.
   *
   * @param { int } offset - The adjusted offset value to set.
   *     <br>Unit: px.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setAdjustedOffset(offset: int): void;
  /**
   * Set children inactive.
   *
   * If child components are generated via ForEach or Repeat without virtualScroll,
   * they will not be displayed after being set to inactive.
   * If child components are generated via LazyForEach or Repeat with virtualScroll,
   * they will be destroyed or recycled after being set to inactive.
   * LazyForEach and Repeat with virtualScroll only support consecutive active child components;
   * setting a child component to inactive between two active child components will not take effect.
   * Child components laid out outside the display area will be automatically set to inactive.
   *
   * @param { int[] } children - The indices of child components to set inactive.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setChildrenInactive(children: int[]): void;
}

/**
 * LazyCustomLayoutAlgorithm constructor options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface LazyCustomLayoutAlgorithmOptions {
  /**
   * Defines the lazy layout axis.
   *
   * @default Axis.Vertical
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  axis?: Axis;
}

/**
 * Defines the lazy custom layout algorithm.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class LazyCustomLayoutAlgorithm implements LazyLayoutAlgorithm {
  /**
   * Constructor.
   *
   * @param { LazyCustomLayoutAlgorithmOptions } [option] - set properties of lazy custom layout algorithm.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(option?: LazyCustomLayoutAlgorithmOptions);
  /**
   * Method to measure the DynamicLayout FrameNode and its content to determine the measured size.
   *
   * @param { FrameNode } self - The FrameNode of DynamicLayout component.
   * @param { LayoutConstraint } constraint - The layout constraint of the node,
   *     which will be used in measure process.
   * @param { LazyLayoutHelper } [helper] - The helper object for lazy layout algorithm,
   *     which provides layout direction and view position information.
   *     If undefined, it indicates that the current component is not used under a scrollable
   *     component and does not support lazy layout.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onMeasure(self: FrameNode, constraint: LayoutConstraint, helper?: LazyLayoutHelper): void;
  /**
   * Method to assign a position to the DynamicLayout FrameNode and each of its children.
   * It can be used to specify the layout location of the DynamicLayout FrameNode and its children.
   *
   * @param { FrameNode } self - The FrameNode of DynamicLayout component.
   * @param { NodePosition } position - The position of the node, will be used when executing layout method.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onLayout(self: FrameNode, position: NodePosition): void;
}