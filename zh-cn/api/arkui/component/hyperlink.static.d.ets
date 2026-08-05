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
import { Resource } from './../../../api/global/resource';

import { CommonMethod, AttributeModifier } from "./common";
import { Color } from "./enums";

import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';

/**
 * 除支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)外，还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface HyperlinkAttribute extends CommonMethod {
  /**
   * 设置超链接文本的颜色。
   *
   * @param { Color | int | string | Resource | undefined } value
   * @returns { HyperlinkAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default color(value: Color | int | string | Resource | undefined): this;
  /**
   * 设置组件的动态属性。
   *
   * @param { AttributeModifier<HyperlinkAttribute> | AttributeModifier<CommonMethod> | undefined } modifier.
   * @returns { HyperlinkAttribute } the attribute of the HyperlinkAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<HyperlinkAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 定义Hyperlink组件。
 *
 * @param { string | Resource | undefined } address - Hyperlink组件跳转的网页地址。<br/>取值为undefined时，按无跳转链接地址处理。
 * @param { string | Resource } [content] - Hyperlink组件中超链接显示文本。<br/>若不传该参数且组件内无子组件时，默认显示address参数值链接地址。<br/>
 *     **说明：** <br/>组件内有子组件时，不显示超链接文本。
 *     <br>默认值：''。
 * @param { CustomBuilder } [content_] - The node of component.
 * @returns { HyperlinkAttribute }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Hyperlink(
    address: string | Resource | undefined, content?: string | Resource, 
    content_?: CustomBuilder,
): HyperlinkAttribute;
