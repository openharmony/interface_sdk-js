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
 * Span container interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop [since 12]
 */
interface ContainerSpanInterface {

  /**
   * Defines the constructor of ContainerSpan.
   *
   * @returns { ContainerSpanAttribute } The attribute of the container span.
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
 * The [universal events]{@link common} are not supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop [since 12]
 */
declare class ContainerSpanAttribute {

  /**
   * Span background style.
   *
   * @param { TextBackgroundStyle } style - The background style of span.
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
   *     current component.
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
 * As a child of the [Text]{@link text} component, the **ContainerSpan** component is used to manage the background
 * colors and rounded corners of multiple [Span]{@link span} and [ImageSpan]{@link image_span} components in a unified
 * manner.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop [since 12]
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
 * @noninterop [since 12]
 */
declare const ContainerSpanInstance: ContainerSpanAttribute;