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
 * ## Child Components
 *
 * No child component can be set.
 */
/**
 * Defines the Interface of NodeContainer. To display the node build by an associated NodeController.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
interface NodeContainerInterface {

  /**
   * Creates a **NodeContainer** component.
   *
   * @param { import('../api/@ohos.arkui.node').NodeController } controller - **NodeController** instance used to
   *     control the upper and lower tree nodes in the **NodeContainer**.
   *     It represents the lifecycle of the **NodeContainer**.
   * @returns { NodeContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  (controller: import('../api/@ohos.arkui.node').NodeController): NodeContainerAttribute;
}

/**
 * The [universal attributes](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md) are supported.
 *
 * The [universal events](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md) are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare class NodeContainerAttribute extends CommonMethod<NodeContainerAttribute> {}

/**
 * **NodeContainer** is a basic component for mounting custom nodes (such as [FrameNode]{@link FrameNode} or
 * [BuilderNode]{@link BuilderNode}) and dynamically managing node attachment and detachment through
 * [NodeController]{@link NodeController:NodeController}. This component does not support adding trailing child
 * components and requires a [NodeController]{@link NodeController:NodeController} instance for operation. It must be
 * used in combination with **NodeController**.
 * > **NOTE**
 * > Only custom [FrameNodes]{@link FrameNode} or the root FrameNode obtained from a [BuilderNode]{@link BuilderNode}
 * > can be attached to this component.
 * > [Proxy nodes]{@link FrameNode:FrameNode#isModifiable} of built-in system components obtained through querying
 * > cannot be attached to this component.
 * >
 * > This component does not work with the [attribute modifier]{@link common}.
 * >
 * > A [UIContext]{@link @ohos.arkui.UIContext} instance is used to construct the node tree for this component. During
 * > instance switching, the input parameter of the [makeNode]{@link NodeController:NodeController#makeNode} callback
 * > method of the bound [NodeController]{@link NodeController:NodeController} may be **undefined** due to instance
 * > mismatch. Therefore, this component does not support cross-instance node reuse.
 * >
 * > When this component is not destroyed, the unmounting of its mounted child nodes will not be triggered.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare const NodeContainer: NodeContainerInterface;

/**
 * Defines NodeContainer Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare const NodeContainerInstance: NodeContainerAttribute;