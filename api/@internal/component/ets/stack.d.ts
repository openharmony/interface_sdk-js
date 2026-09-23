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
 * Sets the alignment method of the child component in the stack container.
 *
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
   * Alignment of child components in the container. When this attribute and the constructor input parameter are set at
   * the same time, the value set by this attribute takes effect.
   *
   * Default value: **Alignment.Center**
   *
   * Invalid value: The default value is used.
   *
   * **Note:** When this parameter and [align]{@link CommonMethod#align(value: Alignment)} are set at the same time, the
   * attribute value set later overrides the one set earlier.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  alignContent?: Alignment;
}

/**
 * Defines a stack container where child components are successively stacked and the latter one overwrites the previous
 * one. The stacking order is based on the declaration order of child components in the parent container. A child
 * component declared later has a higher rendering level and visually covers the preceding child components. It is
 * suitable for scenarios that require layered layout, such as floating buttons or prompt messages on a page, text
 * labels overlaid on images or videos, and multi-layer pop-up windows or dialog boxes. Compared with nesting multiple
 * containers to achieve the layered effect, **Stack** provides a simpler and more efficient solution.
 *
 * > **NOTE**
 * >
 * > - The general attribute [align]{@link CommonMethod#align(value: Alignment)} supports the mirroring capability on
 * > this component.
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
   * Defines a stack container where child components are successively stacked and the latter one overwrites the
   * previous one. The stacking order is based on the declaration order of child components in the parent container. A
   * child component declared later has a higher rendering level and visually covers the preceding child components.
   *
   * > **NOTE**
   * >
   * > Excessive component nesting can lead to performance degradation. In scenarios where the same layout effect can be
   * > achieved through component attributes or system APIs, using these alternatives can reduce the nesting depth and
   * > thereby optimize performance. For best practices, see
   * > [Optimizing Component Nesting - Preferentially Using Component Properties Instead of Nested Components](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-component-nesting-optimization#section78181114123811).
   * >
   * > When both the **alignContent** parameter of this API and [align]{@link CommonMethod#align(value: Alignment)} are
   * > set, whichever is set last takes effect. When both the **alignContent** parameter of this API and the
   * > **alignContent** attribute are set, the value set by the attribute takes effect.
   *
   * @param { object } value [since 7 - 17]
   * @param { ?StackOptions } options - Alignment of child components in the container. Pass this parameter when child
   *     components need to be aligned to a specific position (such as top, bottom, or top-left corner) instead of being
   *     centered by default. If this parameter is not passed, the default configuration of **StackOptions** is used, in
   *     which **alignContent** defaults to **Alignment.Center**. [since 18]
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
   * Sets the alignment of child components in the container. When both this attribute and
   * [align]{@link CommonMethod#align(value: Alignment)} are set, whichever is set last takes effect. When both this
   * attribute and the constructor input parameter are set, the value set by the attribute takes effect, regardless of
   * the setting order.
   *
   * @param { Alignment } value - Alignment of all child components in the container.
   *     <br>Default value: **Alignment.Center**
   *     <br>Invalid value: the default value is used.
   * @returns { StackAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  alignContent(value: Alignment): StackAttribute;

  /**
   * Sets the point light style to add a point light effect to the **Stack** component, affecting the lighting
   * rendering of its stacked child components. A point light is a light source that emits light in all directions
   * from a specific position, and can be used to enhance the three-dimensional appearance and visual depth of the
   * UI. You can configure parameters such as the light position, color, and intensity through **PointLightStyle**.
   * For details, see [PointLightStyle]{@link PointLightStyle}.
   *
   * @param { PointLightStyle } value - Point light style, used to set the UI effect of a point light illuminating
   *     surrounding components, affecting the lighting rendering of components. The **PointLightStyle** object
   *     contains parameters such as the light source position, color, and intensity. For details about the
   *     configuration, see the link. Only the **Image**, **Column**, **Flex**, **Row**, and **Stack** components
   *     support setting a point light.
   * @returns { StackAttribute } The attribute of the stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  pointLight(value: PointLightStyle): StackAttribute;

  /**
   * Sets whether to synchronously load all child components in the stack container. During synchronous loading, all
   * child components complete layout calculation and rendering within the current frame. During asynchronous loading,
   * the system dynamically adjusts the layout timing of child components based on the layout duration of the current
   * frame to avoid blocking the main thread.
   *
    * > **NOTE**
    * >
    * > When this parameter is set to **false**, in the first display scenario, if the layout of the current frame
    * > takes more than 50 ms, the child components in the Stack area that have not been laid out are deferred to the
    * > next frame for layout.
    *
    * @param { boolean } enable - Whether to synchronously load all child components in the Stack area.
    *     <br>The value **true** means synchronous loading, and **false** means asynchronous loading.
    *     <br>Default value: **true**
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
 * Defines a stack container where child components are successively stacked and the latter one overwrites the previous
 * one. The stacking order is based on the declaration order of child components in the parent container. A child
 * component declared later has a higher rendering level and visually covers the preceding child components. It is
 * suitable for scenarios that require layered layout, such as floating buttons or prompt messages on a page, text
 * labels overlaid on images or videos, and multi-layer pop-up windows or dialog boxes. Compared with nesting multiple
 * containers to achieve the layered effect, **Stack** provides a simpler and more efficient solution.
 *
 * > **NOTE**
 * >
 * > - The general attribute [align]{@link CommonMethod#align(value: Alignment)} supports the mirroring capability on
 * > this component.
 *
 * ## Child Components
 *
 * Supported.
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
