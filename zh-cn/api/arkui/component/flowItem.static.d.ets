'use static'
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
import { CommonMethod } from './common';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod } from "./common";
/**
 * The FlowItemAttribute.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface FlowItemAttribute extends CommonMethod {

  /**
   * 动态设置FlowItem组件的属性方法。
   *
   * @param { AttributeModifier<FlowItemAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<FlowItemAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 创建瀑布流子组件。
 *
 * @param { CustomBuilder } [content_] - 容器内容。
 * @returns { FlowItemAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function FlowItem(
    content_?: CustomBuilder,
): FlowItemAttribute