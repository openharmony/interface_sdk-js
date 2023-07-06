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
 * Defines the ColumnSplit component.
 *
 * @interface ColumnSplitInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the ColumnSplit component.
 *
 * @interface ColumnSplitInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface ColumnSplitInterface {
  /**
   * Layout the subassemblies vertically and insert a horizontal divider line between each subassemblies.
   *
   * @returns { ColumnSplitAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Layout the subassemblies vertically and insert a horizontal divider line between each subassemblies.
   *
   * @returns { ColumnSplitAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  (): ColumnSplitAttribute;
}

/**
 * Defines the ColumnSplit component attribute functions.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the ColumnSplit component attribute functions.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class ColumnSplitAttribute extends CommonMethod<ColumnSplitAttribute> {
  /**
   * Indicates whether the split line can be dragged. The default value is false.
   *
   * @param { boolean } value
   * @returns { ColumnSplitAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Indicates whether the split line can be dragged. The default value is false.
   *
   * @param { boolean } value
   * @returns { ColumnSplitAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  resizeable(value: boolean): ColumnSplitAttribute;
}

/**
 * Defines ColumnSplit Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines ColumnSplit Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const ColumnSplitInstance: ColumnSplitAttribute;

/**
 * Defines ColumnSplit Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines ColumnSplit Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const ColumnSplit: ColumnSplitInterface;
