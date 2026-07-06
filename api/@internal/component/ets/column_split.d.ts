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
 * Defines the ColumnSplit component.
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
 * > Similar to [RowSplit]{@link RowSplit}, the dividers of **ColumnSplit** adjust the height of adjacent child
 * > components. However, this adjustment is only applied to the extent that the resulting height stays within the
 * > height limits of the child components.
 * >
 * > Universal attributes such as [clip]{@link CommonMethod#clip} and [margin]{@link CommonMethod#margin} are supported.
 * > If **clip** is not set, the default value **true** is used.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface ColumnSplitDividerStyle {
  /**
   * Distance between the child component and the upper divider.<br>Default value: **0vp**<br>Invalid values are treated
   * as the default value. In this case, the attribute value obtained by the
   * [getInspectorByKey()](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-component-id.md#getinspectorbykey9)
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
   * Distance between the child component and the lower divider.<br>Default value: **0vp**<br>Invalid values are treated
   * as the default value. In this case, the attribute value obtained by the
   * [getInspectorByKey()](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-component-id.md#getinspectorbykey9)
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
declare class ColumnSplitAttribute extends CommonMethod<ColumnSplitAttribute> {
  /**
   * Sets whether the divider can be dragged.
   *
   * @param { boolean } value - Whether the divider can be dragged. **true**: The divider can be dragged.
   *     **false**: The divider cannot be dragged.
   *     <br>Default value: **false**
   *     <br>Invalid values are treated as the default value.
   * @returns { ColumnSplitAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  resizeable(value: boolean): ColumnSplitAttribute;

  /**
   * Margin of the divider.
   *
   * @param { ColumnSplitDividerStyle | null } value - Margin of the divider, that is, the distance between the
   *     divider and the child component.
   *     <br>Default value: **null**. When this parameter is set to null, the distance between the divider and the
   *     child component is 0 vp.
   *     <br>Invalid values are treated as the default value.
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
 * child components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const ColumnSplit: ColumnSplitInterface;
