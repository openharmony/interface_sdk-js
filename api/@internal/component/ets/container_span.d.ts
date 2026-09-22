/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * As a child component of the [Text]{@link ./text} component, the **ContainerSpan** component is used to manage the
 * background colors and rounded corners of multiple [Span]{@link ./span} and [ImageSpan]{@link ./image_span} components
 * in a unified manner. It applies to scenarios where a unified background style needs to be set for a combination of
 * text segments and images.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 11. Newly added APIs will be marked with a superscript to indicate
 * > their.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
interface ContainerSpanInterface {
  /**
   * Defines the constructor of ContainerSpan.
   *
   * @returns { ContainerSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  (): ContainerSpanAttribute;
}

/**
 * Only the following attributes are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare class ContainerSpanAttribute {
  /**
   * Sets the text background style. Child components inherit this attribute value when they do not set it. When this
   * API is not used, the default background color is **Color.Transparent** and the default corner radius is 0.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { TextBackgroundStyle } style - Text background style, used to set the text background color and corner
   *     radius of **Span** and **ImageSpan** in the **ContainerSpan** component. Child components inherit this
   *     parameter value when they do not set it.
   * @returns { ContainerSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  textBackgroundStyle(style: TextBackgroundStyle): ContainerSpanAttribute;

  /**
   * Creates an attribute modifier.
   *
   * @param { AttributeModifier<ContainerSpanAttribute> } modifier - Modifier for dynamically setting attributes on the
   *     current component. You need to customize a class that inherits from the **AttributeModifier** API to receive a
   *     **ContainerSpanAttribute** instance in the **applyNormalAttribute** API and dynamically modify the value of the
   *     **ContainerSpan** attribute.
   * @returns { ContainerSpanAttribute } the attribute of the ContainerSpanAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  attributeModifier(modifier: AttributeModifier<ContainerSpanAttribute>): ContainerSpanAttribute;
}

/**
 * As a child component of the [Text]{@link ./text} component, the **ContainerSpan** component is used to manage the
 * background colors and rounded corners of multiple [Span]{@link ./span} and [ImageSpan]{@link ./image_span} components
 * in a unified manner. It applies to scenarios where a unified background style needs to be set for a combination of
 * text segments and images.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 11. Newly added APIs will be marked with a superscript to indicate
 * > their
 *
 * ###### Child Components
 *
 * This component can contain the [Span]{@link ./span} and [ImageSpan]{@link ./image_span} child components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare const ContainerSpan: ContainerSpanInterface;

/**
 * Defines ContainerSpan Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare const ContainerSpanInstance: ContainerSpanAttribute;