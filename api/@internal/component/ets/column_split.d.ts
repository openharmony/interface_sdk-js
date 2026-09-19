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
 * The **ColumnSplit** component lays out child components vertically and inserts a horizontal divider between every two
 * child components. It is suitable for scenarios that require a vertical multi-area layout with dynamic area resizing, 
 * such as dashboard UIs and adjustable top-bottom split layouts. Through draggable dividers, users can flexibly adjust 
 * the height of each area, enhancing UI interactivity and user experience.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
interface ColumnSplitInterface {
  /**
   * Creates a vertical split layout container with dividers between child components.
   *
   * @returns { ColumnSplitAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (): ColumnSplitAttribute;
}

/**
 * Sets the distance between the child component and the upper and lower dividers.
 * 
 * > **NOTE**
 * >
 * > Similar to [RowSplit]{@link ./row_split}, the dividers of **ColumnSplit** adjust the height of adjacent child 
 * > components. However, this adjustment is only applied to the extent that the resulting height stays within the 
 * > height limits of the child components.
 * >
 * > Universal attributes such as [clip]{@link CommonMethod#clip(value: boolean)} and 
 * > [margin]{@link CommonMethod#margin} are supported. If **clip** is not set, the default value **true** is used.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface ColumnSplitDividerStyle {
  /**
   * Distance between the child component and the divider above it. This spacing can be adjusted (for example, to 
   * prevent content from overlapping with the divider or to improve layout aesthetics).
   * 
   * Default value: **0vp**
   * 
   * Value range: negative values are not supported.
   * 
   * Illegal value: treated as the default value, in which case the attribute value obtained by the 
   * [getInspectorByKey()](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-component-id.md#getinspectorbykey9)
   * API is **undefined**.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  startMargin?: Dimension;

  /**
   * Distance between the child component and the divider below it. This spacing can be adjusted (for example, to 
   * prevent content from overlapping with the divider or to improve layout aesthetics).
   * 
   * Default value: **0vp**
   * 
   * Value range: negative values are not supported.
   * 
   * Illegal value: treated as the default value, in which case the attribute value obtained by the 
   * [getInspectorByKey()](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-component-id.md#getinspectorbykey9)
   * API is **undefined**.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  endMargin?: Dimension;
}

/**
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported.
 * 
 * > **NOTE**
 * >
 * > The default value of [shape clipping]{@link CommonMethod#clip(value: boolean)} of the **ColumnSplit** component is **true**.
 * 
 * The [universal events]{@link ./common} are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare class ColumnSplitAttribute extends CommonMethod<ColumnSplitAttribute> {
  /**
   * Sets whether the divider can be dragged. When set to **true**, the user can drag the divider to adjust the height 
   * of adjacent child components. When set to **false**, the divider cannot be dragged and the child component height 
   * is fixed.
   * 
   * > **NOTE**
   * >
   * > After initialization, when dynamic modification of the [margin]{@link CommonMethod#margin}, 
   * > [border]{@link CommonMethod#border}, or [padding]{@link CommonMethod#padding} universal attributes causes a child
   * > component size to exceed the spacing between adjacent dividers, dragging the divider to change the child 
   * > component height is not supported.
   *
   * @param { boolean } value - Whether the divider can be dragged. The value **true** means that the divider can be
   *     dragged, and **false** means the opposite. The height adjustment range of a child component is limited by its
   *     maximum and minimum heights. When the size of a child component is greater than the spacing between adjacent
   *     dividers, divider drag is not supported. After initialization, when dynamic modification of **margin**,
   *     **border**, or **padding** universal attributes causes the size of a child component to be greater than the
   *     spacing between adjacent dividers, divider drag to change the height of the child component is not supported.
   *     <br>Default value: **false** 
   *     <br>Illegal value: The default value is used.
   * @returns { ColumnSplitAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  resizeable(value: boolean): ColumnSplitAttribute;

  /**
   * Sets the distance between the divider and the child components.
   *
   * @param { ColumnSplitDividerStyle | null } value - Margin of the divider, which sets the distance between the
   *     divider and child components. The object properties include: **startMargin** (distance between the child
   *     component and the divider above) and **endMargin** (distance between the child component and the divider below
   *     ).
   *     <br>Default value: **null**. When set to **null**, the distance between the divider and child components is 0
   *     vp.
   *     <br>Illegal value: The default value is used.
   * @returns { ColumnSplitAttribute } the attribute of the ColumnSplit
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  divider(value: ColumnSplitDividerStyle | null): ColumnSplitAttribute;
}

/**
 * Defines ColumnSplit Component instance.
 * > **Child Components**
 * >
 * > Supported
 * >
 * > **Note**
 * > - This component limits the height of its child components through dividers. During initialization, the divider
 * positions are calculated based on the height of its child components. After initialization, dynamic height
 * modifications to child components do not affect divider positions. To adjust child component heights, drag the
 * adjacent dividers.
 * >
 * > - After initialization, dynamic changes to the
 * [margin]{@link CommonMethod#margin}, [border]{@link CommonMethod#border}, or [padding]{@link CommonMethod#padding}
 * attributes may cause the size of the child components to exceed the allowable distance between adjacent dividers.
 * In such cases, dividers cannot be dragged to adjust the height of the child components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const ColumnSplitInstance: ColumnSplitAttribute;

/**
 * The **ColumnSplit** component lays out child components vertically and inserts a horizontal divider between every two
 * child components. It is suitable for scenarios that require a vertical multi-area layout with dynamic area resizing, 
 * such as dashboard UIs and adjustable top-bottom split layouts. Through draggable dividers, users can flexibly adjust 
 * the height of each area, enhancing UI interactivity and user experience.
 * 
 * ###### Child Components
 * 
 * Supported
 * 
 * **ColumnSplit** limits the height of child components through dividers. During initialization, the divider positions 
 * are calculated based on the heights of the child components. After initialization, dynamically modifying the height 
 * of child components does not take effect, and the divider positions remain unchanged. After **resizeable** is set to 
 * **true**, the height of child components can be changed by dragging adjacent dividers.
 * 
 * After initialization, when dynamic modification of the [margin]{@link CommonMethod#margin}, 
 * [border]{@link CommonMethod#border}, or [padding]{@link CommonMethod#padding} universal attributes causes a child 
 * component size to exceed the spacing between adjacent dividers, dragging the divider to change the child component 
 * height is not supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const ColumnSplit: ColumnSplitInterface;
