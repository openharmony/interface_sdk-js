/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
import { TextBackgroundStyle } from "./span";
import { AttributeModifier } from './common';
import { ComponentBuilder } from "./../stateManagement/runtime";
import { AttributeModifier, CommonMethod } from "./common";

import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { CustomBuilder, CustomBuilderT } from './builder';

/**
 * 仅支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface ContainerSpanAttribute {
  /**
   * 设置文本背景样式。子组件在不设置该属性时，将继承此属性值。
   *
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { TextBackgroundStyle | undefined } style - 文本背景样式。<br />默认值：<br />{<br />  color: Color.Transparent,<br /
   *     >  radius: 0<br />}<br/>设置undefined时恢复默认值。
   * @returns { ContainerSpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default textBackgroundStyle(style: TextBackgroundStyle | undefined): this;
  /**
   * 设置组件的动态属性。
   *
   * @param { AttributeModifier<ContainerSpanAttribute> | undefined } modifier.
   * @returns { ContainerSpanAttribute } the attribute of the ContainerSpanAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<ContainerSpanAttribute> | undefined): this;
  /**
   * 设置组件源码重定向信息。
   *
   * @param { string } sourceLine - 源码行号。
   * @param { string } [moduleName] - 组件所属模块名。
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default debugLine(sourceLine: string, moduleName?: string): this;

  /**
   * 设置ContainerSpan选项。
   *
   * @returns { ContainerSpanAttribute } 返回ContainerSpan属性实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @unpublished
   * @stagemodelonly
   * @since 26.1.0 staticonly
   */
  default setContainerSpanOptions(): this;

  /**
   * 通知组件已完成其属性的设置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @unpublished
   * @stagemodelonly
   * @since 26.1.0 staticonly
   */
  default applyAttributesFinish(): void;
}

/**
 * 定义ContainerSpan组件。
 *
 * @param { CustomBuilder } [content_]
 * @returns { ContainerSpanAttribute }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function ContainerSpan(
    content_?: CustomBuilder,
): ContainerSpanAttribute;

/**
 * 定义ContainerSpan组件。
 *
 * @param { CustomBuilderT<ContainerSpanAttribute> } style - containerspan属性实例。
 * @param { CustomBuilder } [content_] - 容器。
 * @returns { ContainerSpanAttribute }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @unpublished
 * @stagemodelonly
 * @since 26.1.0 staticonly
 * @noninterop
 */
@Builder
export declare function ContainerSpan(
    style: CustomBuilderT<ContainerSpanAttribute>,
    content_?: CustomBuilder,
): ContainerSpanAttribute;