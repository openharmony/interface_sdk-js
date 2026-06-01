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
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. The
 * > initial version information of the historical anonymous objects has been retained, which may result in the outer
 * > element's @since version number being later than the inner element's version number. However, this does not affect
 * > the use of the API.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare interface StackOptions {
  /**
   * Alignment of child components in the container.
   * Default value: Alignment.Center.
   * <br>Invalid values are treated as the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 18 dynamic
   */
  alignContent?: Alignment;
}

/**
 * Provides ports for stacking containers.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
interface StackInterface {
  /**
   * > **NOTE**
   * >
   * > Excessive component nesting can lead to performance degradation. In some scenarios, using component attributes 
   * > directly or leveraging system APIs can achieve the same effect as the stack container, reducing the number of 
   * > nested components and optimizing performance. For best practices, see 
   * > [Preferentially Using Component Properties Instead of Nested Components](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-component-nesting-optimization#section78181114123811)
   * > .
   *
   * @param { object } value [since 7 - 17]
   * @param { ?StackOptions } options - Alignment of child components in the container. [since 18]
   * @returns { StackAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (options?: StackOptions): StackAttribute;
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
declare class StackAttribute extends CommonMethod<StackAttribute> {
  /**
   * Sets the alignment of child components in the container. When both this attribute and the
   * [align]{@link CommonMethod#align} attribute are set, whichever is set last takes effect. When this attribute and
   * the constructor input parameters are set simultaneously, the attribute setting prevails.
   *
   * @param { Alignment } value - Alignment of child components in the container
   *     <br>Default value: **Alignment.Center**.
   *     <br>Invalid values are treated as the default value.
   * @returns { StackAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  alignContent(value: Alignment): StackAttribute;

  /**
   * Sets the point light style.
   *
   * @param { PointLightStyle } value - The point light style.
   * @returns { StackAttribute } The attribute of the stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  pointLight(value: PointLightStyle): StackAttribute;

  /**
   * Set whether to synchronously load child nodes within one frame.
   *
   * @param { boolean } enable - Whether to synchronously load child nodes within one frame.
   *     <br>Default value: <em>true</em>
   * @returns { StackAttribute } The attribute of the Stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  syncLoad(enable: boolean): StackAttribute;
}

/**
 * The **Stack** component provides a stack container where child components are successively stacked and the latter one
 * overwrites the previous one.
 * > **NOTE**
 * >
 * > - The general attribute [align]{@link CommonMethod#align} supports the mirroring capability on this component.
 * >
 * > **Child Components**
 * >
 * > Supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const Stack: StackInterface;

/**
 * Defines Stack Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const StackInstance: StackAttribute;
