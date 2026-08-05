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
 * [Text]{@link ./text}组件的子组件，用于统一管理多个[Span]{@link ./span}、[ImageSpan]{@link ./image_span}的背景色及圆角弧度，适用于需要为文本片段和图片组合设置统一背
 * 景样式的场景。
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
   * 定义ContainerSpan组件构造函数。
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
 * 仅支持以下属性：
 * 
 * 不支持[通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)。
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
   * 设置文本背景样式。子组件在不设置该属性时，将继承此属性值。未通过该接口设置时，默认背景颜色为Color.Transparent，圆角弧度为0。
   * 
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { TextBackgroundStyle } style - 文本背景样式，用于设置ContainerSpan组件内Span和ImageSpan的文本背景颜色和圆角弧度。子组件不设置该属性时将继承此样式。
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
   * @param { AttributeModifier<ContainerSpanAttribute> } modifier - 动态设置组件的属性。开发者需自定义类继承AttributeModifier接口，在
   *     applyNormalAttribute方法中接收ContainerSpanAttribute实例并动态修改ContainerSpan的属性值。
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
 * [Text]{@link ./text}组件的子组件，用于统一管理多个[Span]{@link ./span}、[ImageSpan]{@link ./image_span}的背景色及圆角弧度，适用于需要为文本片段和图片组合设置统一背
 * 景样式的场景。
 * 
 * ###### 子组件
 * 
 * 可以包含[Span]{@link ./span}、[ImageSpan]{@link ./image_span} 子组件。
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
 * 定义ContainerSpan组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare const ContainerSpanInstance: ContainerSpanAttribute;