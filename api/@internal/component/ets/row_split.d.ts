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
 * The **RowSplit** component lays out child components horizontally and inserts a vertical divider between every two 
 * child components. It is suitable for scenarios that require horizontal multi-area layout and support dynamic 
 * adjustment of child component widths, such as the left and right panes of a file manager and the two-column layout of
 * a settings page. Through draggable dividers, users can flexibly adjust the width of each area.
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
 * > **NOTE**
 * >
 * > The default value of [shape clipping]{@link CommonMethod#clip(value: boolean)} of the **RowSplit** component is
 * > **true**.
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
   * Sets whether the divider is draggable. When set to **true**, the user can drag the divider to change the width of 
   * the child components; when set to **false**, the divider position is fixed.
   * 
    * > **NOTE**
    * >
    * > After initialization, if the child component width is greater than the spacing between adjacent dividers due to 
    * > an exception caused by dynamically modifying the universal attributes **margin**, **border**, and **padding**, 
    * > dragging the divider to change the child component width is not supported.
    *
    * > **NOTE**
    * >
    * > The divider of **RowSplit** can change the width of the left and right child components, but only to the extent
    * that the resultant width falls within the maximum and minimum widths of the child components. When the divider
    * is dragged, the child component width is calculated in real time. When the minimum or maximum width set for the
    * child component is reached, the divider stops moving.
    *
    * @param { boolean } value - Whether the divider can be dragged. When set to **true**, the divider can be dragged;
    *     when set to **false**, the divider cannot be dragged.
    *     <br>Default value: **false**
    *     <br>Invalid value: handled as the default value.
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
 * child components. It is suitable for scenarios that require horizontal multi-area layout and support dynamic 
 * adjustment of child component widths, such as the left and right panes of a file manager and the two-column layout of
 * a settings page. Through draggable dividers, users can flexibly adjust the width of each area.
 *
 * ###### Child Components
 * 
 * Supported
 * 
 * The **RowSplit** component limits the width of its child components through dividers. During initialization, the 
 * divider positions are calculated based on the width of its child components. After initialization, dynamically 
 * modifying the width of a child component does not change the divider positions, which remain unchanged. You can drag 
 * a divider to change the width of the child components.
 * 
 * > **NOTE**
 * >
 * > After initialization, dynamically modifying the [margin]{@link CommonMethod#margin}, 
 * > [border]{@link CommonMethod#border}, or [padding]{@link CommonMethod#padding} universal attributes may cause the 
 * > width of a child component to be greater than the spacing between adjacent dividers. In this exceptional case, 
 * > dragging a divider to change the width of the child components is not supported. This is because the divider 
 * > positions are determined during initialization, and dynamically modifying attributes such as margin, border, and 
 * > padding breaks the original layout calculation, preventing the dividers from correctly responding to drag 
 * > operations. You are advised to set the size and margin attributes of the child components properly during 
 * > initialization.
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
