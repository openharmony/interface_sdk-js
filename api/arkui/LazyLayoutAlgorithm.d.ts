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
 * Provides the details about the lazy loading layout algorithms supported by the
 * [LazyDynamicLayout](docroot://reference/apis-arkui/arkui-ts/ts-container-lazydynamiclayout.md) component, helping you
 * customize measurement and arrangement of child components, obtain visible area information, and control the active
 * state of child components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface LazyLayoutAlgorithm {}

/**
 * Enumerates lazy loading layout directions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export enum LazyLayoutDirection {
  /**
   * Forward direction, indicating that the current layout is from the start to the end of the content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  FORWARD = 0,
  /**
   * Backward direction, indicating that the current layout is from the end to the start of the content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  BACKWARD = 1,
}

/**
 * Lazy loading layout auxiliary class, which provides the layout direction and visible area position information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class LazyLayoutHelper {
  /**
   * Obtains the start position of the visible area. It can be used together with
   * [getViewEnd]{@link LazyLayoutHelper#getViewEnd} to determine the visible area range for custom measurement.
   *
   * @returns { int } Start position of the visible area.
   *     <br>The unit is px.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getViewStart(): int;
  /**
   * Obtains the end position of the visible area. It can be used together with
   * [getViewStart]{@link LazyLayoutHelper#getViewStart} to determine the visible area range for custom measurement.
   *
   * @returns { int } End position of the visible area.
   *     <br>The unit is px.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getViewEnd(): int;
  /**
   * Obtains the lazy loading layout direction. This API can be used to determine whether to start layout from the
   * beginning or end of the content in custom measurement.
   *
   * @returns { LazyLayoutDirection } Lazy loading layout direction.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getLazyLayoutDirection(): LazyLayoutDirection;
  /**
   * Sets an adjusted offset for lazy loading.
   *
   * When parameters such as the number of layout columns and spacing change, this API needs to be called to adjust
   * the offset to keep the relative position of the first child component in the visible area unchanged.
   *
   * Take the vertical layout as an example. When the layout direction is **LazyLayoutDirection.FORWARD**, the offset
   * set by this API is the adjustment value of the upper boundary of the container. When the layout direction is
   * **LazyLayoutDirection.BACKWARD**, the offset set by this API is the adjustment value of the lower boundary of the
   * container.
   *
   * @param { int } offset - Adjusted offset. A positive value indicates that the position is adjusted towards the end
   *     of the content, and a negative value indicates that the position is adjusted towards the start of the
   *     content. The unit is px.
   *     <br>The value should be an integer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  setAdjustedOffset(offset: int): void;
  /**
   * Sets a child component to the inactive state.
   *
   * If a child component is generated through [ForEach]{@link ../@internal/component/ets/for_each} or
   * [Repeat]{@link ../@internal/component/ets/repeat} (with [virtualScroll]{@link RepeatAttribute#virtualScroll}
   * disabled), it will not be displayed after being set to the inactive state.
   *
   * If a child component is generated through [LazyForEach]{@link ../@internal/component/ets/lazy_for_each} or
   * [Repeat]{@link ../@internal/component/ets/repeat} (with [virtualScroll]{@link RepeatAttribute#virtualScroll}
   * enabled), it will be destroyed or recycled after being set to the inactive state.
   *
   * [LazyForEach]{@link ../@internal/component/ets/lazy_for_each} or
   * [Repeat]{@link ../@internal/component/ets/repeat} (with [virtualScroll]{@link RepeatAttribute#virtualScroll}
   * enabled) supports only consecutive active child components. Setting a child component to the inactive state
   * between two active child components does not take effect.
   *
   * Child components outside the visible area are automatically set to the inactive state.
   *
   * @param { int[] } children - Index array of child components to be set to the inactive state. An index must be a
   *     non-negative integer within the range [0, Total child components - 1]. The index outside this range does not
   *     take effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  setChildrenInactive(children: int[]): void;
}

/**
 * Input parameters for constructing the custom lazy loading layout algorithm, which are used to set the main axis
 * direction of the layout algorithm.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
interface LazyCustomLayoutAlgorithmOptions {
  /**
   * Main axis direction of the lazy loading layout. **Axis.Vertical** is used for the vertical layout of the main
   * axis, and **Axis.Horizontal** is used for the horizontal layout of the main axis.
   *
   * Default value: **Axis.Vertical**
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
 * A custom lazy loading layout algorithm class. It supports custom measurement and arrangement of child components by
 * overriding [onMeasure]{@link LazyCustomLayoutAlgorithm#onMeasure} and
 * [onLayout]{@link LazyCustomLayoutAlgorithm#onLayout}.
 *
 * > **NOTE**
 * >
 * > The object of the **LazyCustomLayoutAlgorithm** class can be used as the input parameter of the
 * > [LazyDynamicLayout](docroot://reference/apis-arkui/arkui-ts/ts-container-lazydynamiclayout.md) component to specify
 * > a layout algorithm.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class LazyCustomLayoutAlgorithm implements LazyLayoutAlgorithm {
  /**
   * Constructor of the custom lazy loading layout algorithm class.
   *
   * @param { LazyCustomLayoutAlgorithmOptions } [option] - Input parameters for constructing the custom lazy loading
   *     layout algorithm, which are used to set the axis direction of the layout algorithm. This parameter needs to
   *     be passed when the main axis direction needs to be specified. If not passed, the main axis direction is
   *     **Axis.Vertical**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(option?: LazyCustomLayoutAlgorithmOptions);
  /**
   * Customizes the size of the child component to be measured. When the size of the lazy loading dynamic layout
   * component is determined, the ArkUI framework will transfer the FrameNode, layout constraint, and lazy loading
   * auxiliary object corresponding to the component to you through **onMeasure**. State variables should not be
   * changed in this callback.
   *
   * > **NOTE**
   * >
   * > - In this callback, you can call the [getChild()]{@link ./FrameNode:FrameNode#getChild(index: number)} API of
   * > [FrameNode]{@link ./FrameNode:FrameNode} to obtain the child component FrameNode and call the
   * > [measure()]{@link ./FrameNode:FrameNode#measure} API of [FrameNode]{@link ./FrameNode:FrameNode} to measure the
   * > size of the child component. For details, see
   * > [Example 1: Implementing Custom Lazy Loading Layout]{@link ./LazyLayoutAlgorithm}
   * > of the **LazyDynamicLayout** component.
   * >
   * > - When calling [getChild()]{@link ./FrameNode:FrameNode#getChild(index: number)} in this callback to obtain a
   * > child component, you must pass [ExpandMode.LAZY_NOT_EXPAND]{@link ./FrameNode:ExpandMode} to prevent lazy
   * > loading from becoming invalid due to full loading of child components. When calling
   * > [getChildrenCount()]{@link ./FrameNode:FrameNode#getChildrenCount()} to obtain the total number of child
   * > components, you must pass [ChildrenCountMode.ALL_NOT_EXPAND]{@link ./FrameNode:ChildrenCountMode} to prevent
   * > lazy loading from becoming invalid due to full loading of child components.
   *
   * @param { FrameNode } self - Entity node of the lazy loading dynamic layout component in the component tree.
   * @param { LayoutConstraint } constraint - Layout constraint used when the lazy loading dynamic layout component is
   *     measured.
   * @param { LazyLayoutHelper } [helper] - Lazy loading layout auxiliary object, which provides the layout direction
   *     and visible area position information. If the value is **undefined**, lazy loading is not supported. The
   *     value of **helper** is **undefined** in the following scenarios:
   *     <br>1. Lazy loading is not supported when the [WaterFlow]{@link ../@internal/component/ets/water_flow}
   *     component uses the multi-column mode or uses the section mode with any section being in multi-column format.
   *     <br>2. Lazy loading is not supported when any of
   *     [lanes]{@link ListAttribute#lanes(value: number | LengthConstrain, gutter?: Dimension)},
   *     [chainAnimation]{@link ListAttribute#chainAnimation}, and
   *     [scrollSnapAlign]{@link ListAttribute#scrollSnapAlign} is set for the
   *     [List]{@link ../@internal/component/ets/list} component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onMeasure(self: FrameNode, constraint: LayoutConstraint, helper?: LazyLayoutHelper): void;
  /**
   * Customizes the position of the child component to be arranged. When the position of the lazy loading dynamic
   * layout component is determined, the ArkUI framework will transfer the FrameNode and layout position of the
   * component to you through **onLayout**. State variables should not be changed in this callback.
   *
   * > **NOTE**
   * >
   * > - In this callback, you can call the [getChild()]{@link ./FrameNode:FrameNode#getChild(index: number)} API of
   * > [FrameNode]{@link ./FrameNode:FrameNode} to obtain the child component FrameNode and call the
   * > [layout()]{@link ./FrameNode:FrameNode#layout} API of [FrameNode]{@link ./FrameNode:FrameNode} to set the
   * > position of the child component. For details, see
   * > [Example 1: Implementing Custom Lazy Loading Layout]{@link ./LazyLayoutAlgorithm}
   * > of the **LazyDynamicLayout** component.
   * >
   * > - When calling [getChild()]{@link ./FrameNode:FrameNode#getChild(index: number)} in this callback to obtain a
   * > child component, you must pass [ExpandMode.LAZY_NOT_EXPAND]{@link ./FrameNode:ExpandMode} to prevent lazy
   * > loading from becoming invalid due to full loading of child components. When calling
   * > [getChildrenCount()]{@link ./FrameNode:FrameNode#getChildrenCount()} to obtain the total number of child
   * > components, you must pass [ChildrenCountMode.ALL_NOT_EXPAND]{@link ./FrameNode:ChildrenCountMode} to prevent
   * > lazy loading from becoming invalid due to full loading of child components.
   *
   * @param { FrameNode } self - Entity node of the lazy loading dynamic layout component in the component tree.
   * @param { Position } position - Position information used when the lazy loading dynamic layout component is laid
   *     out.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onLayout(self: FrameNode, position: Position): void;
}