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
 * Create Blank.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
interface BlankInterface {
  /**
   * Creates a **Blank** component.
   * 
   * Since API version 10: 
   * 
   * - When the **Blank** component is used within a [Row]{@link Row}, [Column]{@link Column}, or [Flex]{@link Flex} 
   * container, it will automatically stretch or shrink along the main axis if it does not have a main axis size 
   * specified. If the **Blank** component has a main axis size specified or if the container is set to adapt to the 
   * size of its child nodes, the component will not automatically stretch or shrink.
   * - Relationship between **size** and **min** of the **Blank** component on the main axis: max(min, size). 
   * - If the **Blank** component has a cross axis size specified, it will not fill up the parent container on the cross
   * axis. If it does not have a cross axis size specified, it will fill up the parent container on the cross axis, 
   * following the **ItemAlign.Stretch** mode, the default setting of **alignSelf**.
   *
   * @param { number | string } min - Minimum size of the **Blank** component in the container along the main axis.<br>
   *     Default value: **0**<br>If the type is number, the default unit is vp. If the type is string, the
   *     pixel unit can be explicitly specified, for example, '**10px**'. If the unit is not specified,
   *     the default unit vp is used, in which case **'10'** is equivalent to **10vp**.<br>Invalid values are treated as
   *     the default value.<br>**NOTE**<br>This parameter cannot be set in percentage. If the value is negative, the
   *     default value is used. If the minimum size is larger than the available space of the container, it is used as
   *     the component size, and the component extends beyond the container.
   * @returns { BlankAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (min?: number | string): BlankAttribute;
}

/**
 * In addition to the [universal attributes]{@link CommonMethod}, the following attributes are supported.
 * 
 * The [universal events]{@link CommonMethod} are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare class BlankAttribute extends CommonMethod<BlankAttribute> {
  /**
   * Sets the fill color of the **Blank** component. This attribute can be dynamically set using 
   * [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { ResourceColor } value - Color to fill the blank.<br>Default value: **Color.Transparent**<br>Invalid values
   *     are treated as the default value.
   * @returns { BlankAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  color(value: ResourceColor): BlankAttribute;
}

/**
 * The **Blank** component is a spacer in the layout, automatically filling the remaining space along the main axis of
 * its parent container. It works only when the parent component is [Row]{@link Row}, [Column]{@link Column}, or
 * [Flex]{@link Flex}.
 * > **Child Components**
 * >
 * > No child component can be set.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const Blank: BlankInterface;

/**
 * Defines Blank Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const BlankInstance: BlankAttribute;
