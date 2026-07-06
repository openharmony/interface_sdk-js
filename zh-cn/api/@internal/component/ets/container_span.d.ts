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
 * 提供一个用于创建ContainerSpan组件的接口。
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
   *
   * 定义ContainerSpan组件构造函数。
   *
   * @returns { ContainerSpanAttribute }    * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  (): ContainerSpanAttribute;
}

/**
 * 仅支持以下属性：
 * 
 * 不支持[通用事件]{@link common}。
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
   * Span的背景样式
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
   * 设置组件的动态属性。
   *
   * @param { AttributeModifier<ContainerSpanAttribute> } modifier - 动态设置组件的属性。
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
 * [Text]{@link text}组件的子组件，用于统一管理多个[Span]{@link span}、[ImageSpan]{@link image_span}的背景色及圆角弧度。
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
 * 定义ContainerSpan组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop [since 12]
 */
declare const ContainerSpanInstance: ContainerSpanAttribute;