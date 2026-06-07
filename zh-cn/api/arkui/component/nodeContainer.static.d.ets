'use static';
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

import { NodeController } from '../../@ohos.arkui.node';

import { CommonMethod, AttributeModifier } from './common';

import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';

/**
 * The NodeContainerAttribute.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface NodeContainerAttribute extends CommonMethod {

  /**
   * 设置属性修饰符。
   *
   * @param { AttributeModifier<NodeContainerAttribute> | AttributeModifier<CommonMethod> | undefined } modifier - NodeController的实例。
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  attributeModifier(
        modifier: AttributeModifier<NodeContainerAttribute> | AttributeModifier<CommonMethod> | undefined): this;

  /**
   * 设置NodeContainer选项。
   *
   * @param { NodeController } controller - NodeContainer的控制器实例。
   * @returns { this } NodeContainerAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  setNodeContainerOptions(controller: NodeController): this;
}

/**
 * 创建NodeContainer组件。
 *
 * @param { NodeController } controller - 一个NodeController对象，其用于控制NodeContainer中的节点的上树和下树，反映NodeContainer容器的生命周期。
 * @returns { NodeContainerAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function NodeContainer(
    controller: NodeController
): NodeContainerAttribute;

/**
 * 定义NodeContainer组件。需要在组件属性设置开始时调用setNodeContainerOptions，并在组件属性设置结束时调用applyAttributeFinish。
 *
 * @param { CustomBuilderT<NodeContainerAttribute> } style - 用于设置NodeContainer属性的回调。
 * @returns { NodeContainerAttribute } NodeContainer属性实例。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function NodeContainer(
    style: CustomBuilderT<NodeContainerAttribute>
): NodeContainerAttribute;