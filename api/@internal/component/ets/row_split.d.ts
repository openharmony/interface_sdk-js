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
 * Provides interfaces for layout in the vertical direction.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
interface RowSplitInterface {
  /**
   * Creates a horizontal split layout container with dividers between child components.
   *
   * @returns { RowSplitAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (): RowSplitAttribute;
}

/**
 * In addition to the [universal attributes]{@link CommonMethod}, the following attributes are supported.
 *
 * The [universal events]{@link CommonMethod} are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare class RowSplitAttribute extends CommonMethod<RowSplitAttribute> {
  /**
   * Sets whether the divider can be dragged.
   *
   * > The divider of **RowSplit** can change the width of the left and right child components, but only to the
   * > extent that the resultant width falls within the maximum and minimum widths of the child components.
   *
   * @param { boolean } value - Whether the divider can be dragged. **true**: The divider can be dragged.
   *     **false**: The divider cannot be dragged.
   *     <br>Default value: **false**
   *     <br>Invalid values are treated as the default value.
   * @returns { RowSplitAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  resizeable(value: boolean): RowSplitAttribute;
}

/**
 * The **RowSplit** component lays out child components horizontally and inserts a vertical divider between every two
 * child components.
 * > **Note**
 * >
 * > This component limits the width of its child components through dividers. During initialization, the divider
 * > positions are calculated based on the width of its child components. After initialization, dynamic width
 * > modifications to child components do not affect divider positions. To adjust child component widths, drag the
 * > adjacent dividers.
 * >
 * > After initialization, dynamic changes to the [margin]{@link CommonMethod#margin},
 * > [border]{@link CommonMethod#border}, or [padding]{@link CommonMethod#padding} attributes may cause the
 * > width of the child components to exceed the allowable distance between adjacent dividers. In such cases, dividers
 * > cannot be dragged to adjust the width of the child components.
 * >
 * > **Child Components**
 * >
 * > Supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const RowSplit: RowSplitInterface;

/**
 * Defines RowSplit Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const RowSplitInstance: RowSplitAttribute;
