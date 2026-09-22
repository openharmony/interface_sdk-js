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

import { UIContext } from '../@ohos.arkui.UIContext';
import { RenderNode } from './RenderNode';
import { Size, Position, Edges, LengthMetrics, SizeT } from './Graphics';
import { DrawContext } from './Graphics';
import { ComponentContent, ReactiveComponentContent } from './ComponentContent';
import { BusinessError } from '../@ohos.base';

/**
 * Describes the layout constraints of the component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LayoutConstraint {
  /**
   * Maximum size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  maxSize: Size;

  /**
   * Minimum size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  minSize: Size;

  /**
   * Size reference for calculating the percentage of a child node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  percentReference: Size;
}

/**
 * Provides options for configuring or querying the cross-language access permissions for a FrameNode. For example, for
 * nodes created using ArkTS, this API can control whether non-ArkTS languages are allowed to access or modify the
 * attributes of these nodes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare interface CrossLanguageOptions {
  /**
   * Whether the FrameNode supports cross-language settings.
   *
   * The value **true** means the FrameNode supports cross-language settings, and **false** means the opposite.
   *
   * The default value is **false**.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  attributeSetting?: boolean;

  /**
   * Whether the FrameNode supports cross-language operations on the component tree.
   *
   * The value **true** means the FrameNode supports cross-language operations on the component tree, and **false**
   * means the opposite.
   *
   * The default value is **false**.
   *
   * Note: When **treeOperating** is set to **true** for a FrameNode, the FrameNode can call
   * [addChild](docroot://reference/apis-arkui/capi-arkui-nativemodule-arkui-nativenodeapi-1.md#addchild),
   * [insertChildAfter](docroot://reference/apis-arkui/capi-arkui-nativemodule-arkui-nativenodeapi-1.md#insertchildafter),
   * [insertChildAt](docroot://reference/apis-arkui/capi-arkui-nativemodule-arkui-nativenodeapi-1.md#insertchildat),
   * [insertChildBefore](docroot://reference/apis-arkui/capi-arkui-nativemodule-arkui-nativenodeapi-1.md#insertchildbefore),
   * and [removeChild](docroot://reference/apis-arkui/capi-arkui-nativemodule-arkui-nativenodeapi-1.md#removechild)
   * across languages.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  treeOperating?: boolean;
}

/**
 * Describes the binding state of interaction events on components. When querying reveals an interaction event bound to
 * the current node, this object provides detailed event binding information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare interface InteractionEventBindingInfo {
  /**
   * Whether the event is bound declaratively.
   *
   * **true** means that the event is bound declaratively, and **false** means the opposite.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  baseEventRegistered: boolean;

  /**
   * Whether the event is bound through a custom component node. For details, see
   * [Basic Event Example](docroot://reference/apis-arkui/js-apis-arkui-frameNode.md#basic-event-example).
   *
   * The value **true** indicates that the event is bound through a custom component node, and **false** indicates the
   * opposite.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  nodeEventRegistered: boolean;

  /**
   * Whether the event is bound through node event registration (
   * [registerNodeEvent](docroot://reference/apis-arkui/capi-arkui-nativemodule-arkui-nativenodeapi-1.md#registernodeevent)
   * ).
   *
   * The value **true** means that the event is bound through node event registration, and **false** means the opposite.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  nativeEventRegistered: boolean;

  /**
   * Whether the component has built-in events (events that are defined internally by the component and do not require
   * manual binding).
   *
   * The value **true** indicates that the component has built-in events, and **false** indicates the opposite.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  builtInEventRegistered: boolean;
}

/**
 * Enumerates the expansion mode of child nodes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
export enum ExpandMode {
  /**
   * The child nodes of the current FrameNode are not expanded. If the FrameNode contains
   * [LazyForEach]{@link ../@internal/component/ets/lazy_for_each} child nodes, the child nodes of the current FrameNode
   * are not expanded when the child nodes on the main node tree are being obtained. The child node sequence numbers are
   * calculated based on the child nodes on the main node tree.
   *
   * Application scenario: Only expanded child nodes on the main node tree need to be obtained without triggering
   * expansion.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  NOT_EXPAND = 0,

  /**
   * The child nodes of the current FrameNode are expanded. If the FrameNode contains
   * [LazyForEach]{@link ../@internal/component/ets/lazy_for_each} child nodes, the child nodes of the current FrameNode
   * are expanded when all child nodes are being obtained. The child node sequence numbers are calculated based on all
   * child nodes.
   *
   * Application scenario: All child nodes, including lazy loading ones, need to be obtained.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  EXPAND = 1,

  /**
   * The child nodes of the current FrameNode are expanded on demand. If the FrameNode contains
   * [LazyForEach]{@link ../@internal/component/ets/lazy_for_each} child nodes, the child nodes of the current FrameNode
   * are not expanded when the child nodes on the main node tree are being obtained, and are expanded when the child
   * nodes not on the main node tree are being obtained. The child node sequence numbers are calculated based on all
   * child nodes.
   *
   * Application scenario: Child nodes on both the main node tree and non-main node tree need to be obtained on demand.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  LAZY_EXPAND = 2,

  /**
   * The child nodes of the current FrameNode are not expanded. If the FrameNode contains
   * [LazyForEach]{@link ../@internal/component/ets/lazy_for_each} child nodes, already expanded child nodes can be
   * returned directly. When obtaining unexpanded child nodes, only the node at the corresponding position is created
   * without expanding all child nodes. The child node sequence numbers are calculated based on all child nodes.
   *
   * Application scenario: Child nodes need to be obtained precisely by position without batch expansion of lazy loading
   * child nodes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  LAZY_NOT_EXPAND = 3
}

/**
 * Enumerates the modes of counting child nodes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export enum ChildrenCountMode {
  /**
   * Counting all child nodes after expansion. When a lazy loading node (such as
   * [LazyForEach]{@link ../@internal/component/ets/lazy_for_each}) is encountered, the node is expanded and the total
   * number of child nodes is returned.
   *
   * Whether to expand lazy loading nodes: yes
   *
   * Application scenario: scenarios where all child nodes need to be expanded and the total number returned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  ALL_EXPAND = 0,

  /**
   * Counting currently expanded child nodes. Lazy loading nodes are not expanded, and only the number of currently
   * expanded child nodes is returned. Lazy loading nodes that are not expanded are not included in the count.
   *
   * Whether to expand lazy loading nodes: no
   *
   * Application scenario: Only the number of expanded child nodes needs to be queried.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  ONLY_EXPANDED = 1,

  /**
   * Counting all child nodes. Lazy loading nodes are not expanded, but the total number of potential child nodes (
   * including both expanded and unexpanded lazy loading nodes) is returned. This counting mode provides the total
   * number of potential child nodes without triggering any expansion.
   *
   * Whether to expand lazy loading nodes: no
   *
   * Application scenario: This counting mode is used when the total number of all child nodes needs to be obtained.
   * Unlike **ALL_EXPAND**, this mode does not expand child nodes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  ALL_NOT_EXPAND = 2
}

/**
 * Enumerates polymorphic style states, which are used to process polymorphic styles.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export enum UIState {
  /**
   * Normal state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  NORMAL = 0,

  /**
   * Pressed state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  PRESSED = 1 << 0,

  /**
   * Focused state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  FOCUSED = 1 << 1,

  /**
   * Disabled state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  DISABLED = 1 << 2,

  /**
   * Selected state.
   *
   * Only supported by specific components: **Checkbox**, **Radio**, **Toggle**, **List**, **Grid**, **MenuItem**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  SELECTED = 1 << 3,

  /**
   * Hovered state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  HOVERED = 1 << 4
}

/**
 * Defines the callback triggered when the UI state changes. It receives the current [UIState]{@link UIState} value when
 * triggered. The parameter represents **UIState** enumerated values or their bitwise combinations.
 *
 * @param { FrameNode } node - Node triggering the UI state change.
 * @param { number } currentUIStates - Current UI states when the callback is triggered.
 *     <br>You can use a bitwise AND operation to determine which [UI states]{@link UIState} are currently included.
 *     <br>Bitwise AND operation: **if ((currentUIStates & UIState.PRESSED) == UIState.PRESSED)**.
 *     <br>If you only need to determine whether there is a single state, you can directly use
 *     **if (currentUIStates == UIState.PRESSED)**. Note: This method is valid only when a single state is active. To
 *     determine whether a specific state is included among multiple states, use a bitwise AND operation.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare type UIStatesChangeHandler = (node: FrameNode, currentUIStates: number) => void;

/**
 * **FrameNode** represents an entity node in the component tree, supporting capabilities such as node tree operations,
 * custom drawing and layout, position query, and animation. It can be used by a
 * [NodeController]{@link ./NodeController:NodeController} to mount a [BuilderNode]{@link ./BuilderNode} (that holds the
 * FrameNode) to a [NodeContainer]{@link ../@internal/component/ets/node_container} or mount a
 * [RenderNode]{@link ./RenderNode:RenderNode} to another FrameNode. It is suitable for scenarios where component node
 * trees need to be dynamically created and managed through code, enabling flexible UI composition and custom rendering
 * requirements that cannot be directly met by declarative components.
 *
 * > **NOTE**
 * >
 * > - **FrameNode** is not available in DevEco Studio Previewer.
 * >
 * > - FrameNodes cannot be dragged.
 * >
 * > - FrameNode objects do not support JSON serialization.
 * >
 * > - When the API of the [FrameNode]{@link FrameNode} object is invoked in the scenario of
 * > [ambiguous UI context](docroot://ui/arkts-global-interface.md#ambiguous-ui-context), you are advised to use the
 * > [runScopedTask]{@link @ohos.arkui.UIContext:UIContext.runScopedTask} API of
 * > [UIContext]{@link @ohos.arkui.UIContext} to specify the UI context. For details, see
 * > [Executing the Closure Bound to a UI Instance](docroot://ui/arkts-global-interface.md#executing-the-closure-bound-to-a-ui-instance).
 * >
 * > - In the FrameNode APIs, only the mandatory parameters of the [Optional]{@link Optional} type can be set to null or
 * > undefined.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export class FrameNode {
  /**
   * A constructor used to create a FrameNode.
   *
   * @param { UIContext } uiContext - UI context for node creation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  constructor(uiContext: UIContext);

  /**
   * Obtains the [RenderNode]{@link ./RenderNode:RenderNode} held by the FrameNode.
   *
   * @returns { RenderNode | null } **RenderNode** instance. If the current FrameNode does not hold any RenderNode,
   *     **null** is returned. If the current FrameNode is a node created by a declarative component, **null** is
   *     returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getRenderNode(): RenderNode | null;

  /**
   * Checks whether this FrameNode is modifiable.
   *
   * @returns { boolean } Whether the current node is modifiable.<br/>The value **true** indicates that the current node
   *     is modifiable, and **false** indicates the opposite.<br/>The value **false** is returned when the node is a
   *     system component proxy node in a
   *     [custom component node](docroot://ui/arkts-user-defined-node.md#custom-component-node-framenode) or when the
   *     node has been [disposed]{@link FrameNode#dispose} of.<br/>When **false** is returned, the current FrameNode
   *     does not support the following operations: [appendChild]{@link FrameNode#appendChild},
   *     [insertChildAfter]{@link FrameNode#insertChildAfter}, [removeChild]{@link FrameNode#removeChild},
   *     [clearChildren]{@link FrameNode#clearChildren}, [createAnimation]{@link FrameNode#createAnimation},
   *     [cancelAnimations]{@link FrameNode#cancelAnimations}, [moveTo]{@link FrameNode#moveTo},
   *     [addComponentContent]{@link FrameNode#addComponentContent}, [adoptChild]{@link FrameNode#adoptChild}, and
   *     [removeAdoptedChild]{@link FrameNode#removeAdoptedChild}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isModifiable(): boolean;

  /**
   * Appends a child node to the end of this FrameNode. If this FrameNode is not modifiable, an exception is thrown.
   * When **appendChild** is called, [typeNode]{@link typeNode} validates the type or number of child nodes. If the
   * validation fails, an exception is thrown. For specific limitations, see [typeNode]{@link typeNode}.
   *
   * @param { FrameNode } node - FrameNode to add.<br/> The node cannot be a non-modifiable FrameNode (for example, a
   *     declarative component node obtained through APIs such as **getFrameNodeById**). Only the FrameNode obtained
   *     through the **getFrameNode** API of [BuilderNode]{@link ./BuilderNode} can be added as a declarative child
   *     node. If the child node does not meet the specifications, an exception is thrown.<br/> The node cannot have a
   *     parent node; otherwise, an exception is thrown.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @throws { BusinessError } 100025 - The parameter is invalid. Details about the invalid parameter and the reason
   *     are included in the error message. For example: "The parameter 'node' is invalid: it cannot be adopted.
   *     " [since 22]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  appendChild(node: FrameNode): void;

  /**
   * Adds a new child node after the specified child node of this FrameNode. If the current FrameNode is not modifiable,
   * an exception is thrown. [typeNode]{@link typeNode} validates the child component type or count during
   * **insertChildAfter**, and throws an exception if the validation fails. For restrictions, see the description of
   * [typeNode]{@link typeNode}.
   *
   * @param { FrameNode } child - Child node to add.<br/>The child node cannot be a non-modifiable FrameNode (for
   *     example, a declarative component node obtained through APIs such as **getFrameNodeById**). Only the FrameNode
   *     obtained by [BuilderNode]{@link ./BuilderNode} through the **getFrameNode** API can be added as a declarative
   *     child node. If the child node does not meet the specifications, an exception is thrown.<br/>The child node
   *     cannot have a parent node; otherwise, an exception is thrown.
   * @param { FrameNode | null } sibling - Node after which the new child node will be inserted. If this parameter is
   *     left empty, the new node is inserted before the first subnode.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @throws { BusinessError } 100025 - The parameter is invalid. Details about the invalid parameter and the reason
   *     are included in the error message. For example: "The parameter 'child' is invalid: it cannot be adopted.
   *     " [since 22]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  insertChildAfter(child: FrameNode, sibling: FrameNode | null): void;

  /**
   * Deletes the specified child node from this FrameNode. If this FrameNode is not modifiable, an exception is thrown.
   *
   * @param { FrameNode } node - Child node to delete.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  removeChild(node: FrameNode): void;

  /**
   * Clears all child nodes of this FrameNode. If this FrameNode is not modifiable, an exception is thrown.
   *
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  clearChildren(): void;

  /**
   * Obtains the child node in the specified position of this node.
   *
   * @param { number } index - Index of the child node to obtain.
   *     <br>The value range of index is
   *     [0, +∞). If the current node has n child nodes, the valid value range of index is [0, n-1].
   * @returns { FrameNode | null } Child node obtained. If the FrameNode does not contain the specified child node, null
   *     is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getChild(index: number): FrameNode | null;

  /**
   * Obtains a child node at a specified index from this FrameNode, with optional support for specifying the expansion
   * mode of the child node.
   *
   * @param { number } index - Index of the child node to obtain.
   *     <br>The value range of index is
   *     [0, +∞). If the current node has n child nodes, the valid value range of index is [0, n-1].
   * @param { ExpandMode } expandMode - Expansion mode of the child node.
   *     <br>Default value: **ExpandMode.EXPAND**.
   * @returns { FrameNode | null } Child node obtained. If the FrameNode does not contain the specified child node, null
   *     is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  getChild(index: number, expandMode?: ExpandMode): FrameNode | null;

  /**
   * Obtains the sequence number of the first child node of this node that is in the main node tree. The child node
   * sequence numbers are calculated based on all child nodes.
   *
   * @returns { number } Sequence number of the first child node of this node that is in the main node tree.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  getFirstChildIndexWithoutExpand(): number;

  /**
   * Obtains the sequence number of the last child node of this node that is in the main node tree. The child node
   * sequence numbers are calculated based on all child nodes.
   *
   * @returns { number } Sequence number of the last child node of this node that is in the main node tree.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  getLastChildIndexWithoutExpand(): number;

  /**
   * Obtains the first child node of this FrameNode.
   *
   * @returns {  FrameNode | null } First child node. If the FrameNode does not contain any child node, null is
   *     returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getFirstChild(): FrameNode | null;

  /**
   * Obtains the next sibling node of this FrameNode.
   *
   * @returns { FrameNode | null } Next sibling node of the current FrameNode. If the FrameNode does not have the next
   *     sibling node, null is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getNextSibling(): FrameNode | null;

  /**
   * Obtains the previous sibling node of this FrameNode.
   *
   * @returns { FrameNode | null } Previous sibling node of the current FrameNode. If the FrameNode does not have the
   *     previous sibling node, null is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getPreviousSibling(): FrameNode | null;

  /**
   * Obtains the parent node of this FrameNode.
   *
   * @returns { FrameNode | null } Parent node of the current FrameNode. If the FrameNode does not contain a parent
   *     node, null is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getParent(): FrameNode | null;

  /**
   * Obtains the number of child nodes of this FrameNode.
   *
   * @returns { number } Number of child nodes of the current FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getChildrenCount(): number;

  /**
   * Obtains the number of child nodes of this FrameNode based on the specified counting mode.
   *
   * @param { ChildrenCountMode } [countMode] - The children count mode. Default value is ChildrenCountMode.ALL_EXPAND.
   * @returns { int } - Returns the number of children of the current FrameNode based on the count mode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getChildrenCount(countMode?: ChildrenCountMode): int;

  /**
   * Moves this FrameNode to a specified position within the target FrameNode. If this FrameNode is not modifiable, an
   * exception is thrown. When **targetParent** is a [typeNode]{@link typeNode}, the API validates the type or number of
   * child nodes. If the validation fails, an exception is thrown. For specific limitations, see
   * [typeNode]{@link typeNode}.
   *
   * > **NOTE**
   * >
   * > Currently, only the following types of [TypedFrameNode]{@link TypedFrameNode} are supported for the movement
   * > operations: [Stack]{@link typeNode.Stack}, [XComponent]{@link typeNode.XComponent}. This API does not work for
   * > other node types.
   * >
   * > This API only supports [BuilderNode]{@link ./BuilderNode:BuilderNode} with root components of these types:
   * > [Stack]{@link ../@internal/component/ets/stack}, [XComponent]{@link ../@internal/component/ets/xcomponent},
   * > [EmbeddedComponent]{@link ../@internal/component/ets/embedded_component}. This API does not work for other
   * > component types.
   *
   * @param { FrameNode } targetParent - Target parent node.
   *     <br>The target parent node must not be a declaratively created node, that is, a FrameNode that is not
   *     modifiable. If it does not meet the specifications, an exception is thrown.
   * @param { number } [index] - Index of the child node. The current FrameNode will be inserted before the child node
   *     at the specified sequence number in the target FrameNode. If the target FrameNode has *n* nodes, the value
   *     range for **index** is [0, *n*-1].
   *     <br>If the parameter is invalid or not specified, the current FrameNode will be added to the end of the target
   *     FrameNode.
   *     <br>Default value: **-1**
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @throws { BusinessError } 100027 - The current node has been adopted. [since 22]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  moveTo(targetParent: FrameNode, index?: number): void;

  /**
   * Immediately releases the reference to the underlying FrameNode entity.
   *
   * > **NOTE**
   * >
   * > - After a **FrameNode** object calls **dispose**, since it does not correspond to any entity FrameNode, calling
   * > certain query APIs (such as [getMeasuredSize]{@link FrameNode#getMeasuredSize} and
   * > [getLayoutPosition]{@link FrameNode#getLayoutPosition}) will cause a jscrash in the application.
   * >
   * > - You can use [getUniqueId]{@link FrameNode#getUniqueId} to determine whether the current FrameNode corresponds
   * > to an entity FrameNode. When the value of **UniqueID** is greater than 0, the object corresponds to an entity
   * > FrameNode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dispose(): void;

  /**
   * Obtains the position offset of this FrameNode relative to the window, in vp.
   *
   * @returns { Position } Position offset of the node relative to the window, in vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getPositionToWindow(): Position;

  /**
   * Obtains the position offset of this FrameNode relative to the parent component, in vp.
   *
   * @returns { Position } Position offset of the node relative to the parent component, in vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getPositionToParent(): Position;

  /**
   * Obtains the measured size of this FrameNode, in px.
   *
   * @returns { Size } Measured size of the node, in px.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getMeasuredSize(): Size;

  /**
   * Obtains the position offset of this FrameNode relative to the parent component after layout, in px. The offset is
   * the result of the parent component's layout on this node; therefore, the **offset** attribute that takes effect
   * after layout and the **position** attribute that does not participate in layout do not affect this offset value.
   *
   * @returns { Position } Position offset of the current FrameNode relative to the parent component after layout, in
   *     px.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getLayoutPosition(): Position;

  /**
   * Obtains the border width set by the user.
   *
   * @returns { Edges<LengthMetrics> } Border width set by the user.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getUserConfigBorderWidth(): Edges<LengthMetrics>;

  /**
   * Obtains the padding set by the user.
   *
   * @returns { Edges<LengthMetrics> } Padding set by the user.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getUserConfigPadding(): Edges<LengthMetrics>;

  /**
   * Obtains the margin set by the user.
   *
   * @returns { Edges<LengthMetrics> } Margin set by the user.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getUserConfigMargin(): Edges<LengthMetrics>;

  /**
   * Obtains the width and height set by the user.
   *
   * @returns { SizeT<LengthMetrics> } Width and height set by the user.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getUserConfigSize(): SizeT<LengthMetrics>;

  /**
   * Obtains the node ID set by the user, which is the same as the value of the
   * [component ID]{@link ../@internal/component/ets/common}.
   *
   * @returns { string } Node ID set by the user, which is the same as the value of the
   *     [component ID]{@link ../@internal/component/ets/common}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getId(): string;

  /**
   * Obtains the unique identifier (**UniqueID**) assigned by the system to this node.
   *
   * @returns { number } Unique identifier (**UniqueID**) assigned by the system.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getUniqueId(): number;

  /**
   * Obtains the type of the node. For built-in components, the node type corresponds to the component name. For
   * example, the node type of the [Button]{@link ../@internal/component/ets/button} component is **Button**. For custom
   * components that implement rendering, the node type is **__Common__**.
   *
   * @returns { string } Type of the node.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getNodeType(): string;

  /**
   * Obtains the opacity of the node. The minimum value is 0, and the maximum value is 1.
   *
   * @returns { number } Opacity of the node. Value range: [0, 1]. A larger value indicates lower opacity.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getOpacity(): number;

  /**
   * Obtains whether the node is visible.
   *
   * > **NOTE**
   * >
   * > The visibility of a node is determined by the **visibility** attribute of the component.
   *
   * @returns { boolean } Whether the node is visible.
   *     <br>The value **true** means that the node is visible, and **false** means the opposite.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isVisible(): boolean;

  /**
   * Obtains whether the node is clipped to the component area. After [dispose]{@link FrameNode#dispose} is called to
   * release the reference to the entity FrameNode, the return value is **true**.
   *
   * @returns { boolean } Whether the node is clipped to the component area.<br/>The value **true** indicates that the
   *     node is clipped to the component area, and **false** indicates the opposite.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isClipToFrame(): boolean;

  /**
   * Obtains whether the node is mounted to the main node tree.
   *
   * @returns { boolean } Whether the node is mounted to the main node tree.
   *     <br>The value **true** means that the node is mounted to the main node tree, and **false** means the opposite.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isAttached(): boolean;

  /**
   * Queries whether the current **FrameNode** object has been released from the reference to the backend entity node.
   * Each frontend node is bound to a corresponding backend entity node. After a node calls the **dispose** API to
   * release the binding, calling other APIs of this node may result in crashes or return default values. Due to service
   * requirements, there may be cases where a node's APIs are still called after the call to **dispose**. To address
   * this, this API is provided for you to check the validity of a node before operating on it, thereby avoiding
   * potential risks.
   *
   * @returns { boolean } Whether the reference to the backend node is released. The value **true** means that the
   *     reference to backend node is released, and **false** means the opposite.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  isDisposed(): boolean;

  /**
   * Obtains the structure information of the node, which is consistent with what is found in DevEco Studio's built-in <
   * !--RP1-->ArkUI Inspector <!--RP1End-->tool.
   *
   * > **NOTE**
   * >
   * > The **getInspectorInfo** API is designed for debugging purposes to obtain information about all nodes. Frequent
   * > calls to this API may cause performance degradation.
   *
   * @returns { Object } Structure information of the node.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getInspectorInfo(): Object;

  /**
   * Obtains the component's custom property by its name.
   *
   * @param { string } name - Name of the custom property.
   * @returns { Object | undefined } Value of the custom property.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getCustomProperty(name: string): Object | undefined;

  /**
   * Obtains the **UICommonEvent** object held in this FrameNode to set basic events. The set basic events will compete
   * with declaratively defined events for event handling without overriding them. If both event callbacks are
   * registered, the declaratively defined event callback takes precedence.
   *
   * In scenarios involving **LazyForEach**, where nodes may be destroyed and reconstructed, you need to reset or re-
   * attach event listeners to the newly created nodes to ensure they respond to events correctly.
   *
   * @returns { UICommonEvent } **UICommonEvent** object, which is used to set basic events.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get commonEvent(): UICommonEvent;

  /**
   * Obtains the **UIGestureEvent** object held by this FrameNode, which is used to set gesture events bound to the
   * component. Gesture events set using the **gestureEvent** API will not override gestures bound using the
   * [gesture binding API]{@link ../@internal/component/ets/common}. If both APIs are used to set gestures, the gesture
   * binding API takes precedence.
   *
   * In LazyForEach scenarios, due to node destruction and reconstruction, gesture event callbacks must be re-set for
   * reconstructed nodes to ensure that the listening events respond properly.
   *
   * @returns { UIGestureEvent } **UIGestureEvent** object, which is used to set the gestures bound to the component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  get gestureEvent(): UIGestureEvent;

  /**
   * Obtains the **CommonAttribute** API associated with the FrameNode, which is used to configure
   * [universal attributes]{@link ../@internal/component/ets/common} and
   * [universal events]{@link ../@internal/component/ets/common}.
   *
   * Note that only the attributes of a custom node can be modified.
   *
   * > **NOTE**
   * >
   * > The visual representation of the FrameNode is similar to that of a
   * > [Stack]{@link ../@internal/component/ets/stack} container that is aligned to the top start edge.
   * >
   * > For details about the supported attributes, see
   * > [attributeModifier Support for Attributes and Events](docroot://ui/arkts-user-defined-extension-attributeModifier.md#attributemodifier-support-for-attributes-and-events).
   *
   * @returns { CommonAttribute } **CommonAttribute** API of the FrameNode, used to configure universal attributes and
   *     universal events.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @noninterop
   */
  get commonAttribute(): CommonAttribute;

  /**
   * Implements custom drawing for the FrameNode. This API overrides the default drawing behavior and is invoked during
   * FrameNode content rendering.
   *
   * Note: The Canvas provided in the [DrawContext]{@link ./Graphics:DrawContext} parameter is a temporary command-
   * recording canvas, not the actual rendering canvas of the node. For usage instructions, see
   * [Adjusting the Transformation Matrix of the Custom Drawing Canvas](docroot://ui/arkts-user-defined-arktsNode-frameNode.md#adjusting-the-transformation-matrix-of-the-custom-drawing-canvas).
   *
   * @param { DrawContext } context - Graphics drawing context. The self-drawing area cannot exceed the component's own
   *     size.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDraw?(context: DrawContext): void;

  /**
   * Called when this FrameNode needs to determine its size. This API provides custom measurement and overrides the
   * default measurement method.
   *
   * @param { LayoutConstraint } constraint - Layout constraints used by the component for measurement.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onMeasure(constraint: LayoutConstraint): void;

  /**
   * Called when this FrameNode needs to determine its layout. This API provides custom layout and overrides the default
   * layout method. It can be used to specify how the FrameNode and its child nodes are positioned and sized within the
   * layout.
   *
   * @param { Position } position - Position used for component layout. The unit is px.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onLayout(position: Position): void;

  /**
   * Sets the measured size of this FrameNode. The default unit is px. If the set width or height values are negative,
   * they are automatically set to 0. It is recommended to call this API in [onMeasure]{@link FrameNode#onMeasure} to
   * set the result of custom measurement.
   *
   * @param { Size } size - Measured size of the FrameNode, in px.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setMeasuredSize(size: Size): void;

  /**
   * Sets the position of this FrameNode after layout. The default unit is px. It is recommended to call this API in
   * [onLayout]{@link FrameNode#onLayout} to set the result of custom layout.
   *
   * @param { Position } position - Position of the FrameNode after layout, in px.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setLayoutPosition(position: Position): void;

  /**
   * Measures this FrameNode and calculates its size based on the layout constraints of the parent container. If the
   * measurement method is overridden, the overridden method is called. It is recommended that this API be called in
   * [onMeasure]{@link FrameNode#onMeasure}.
   *
   * @param { LayoutConstraint } constraint - Parent container layout constraints used for measurement.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  measure(constraint: LayoutConstraint): void;

  /**
   * Lays out this FrameNode, specifying the layout positions for the FrameNode and its child nodes. If the layout
   * method is overridden, the overridden method is called. It is recommended that this API be called in
   * [onLayout]{@link FrameNode#onLayout}.
   *
   * @param { Position } position - Position used for component layout. The unit is px.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  layout(position: Position): void;

  /**
   * Marks this FrameNode as needing layout, so that it will be re-laid out in the next frame, triggering the calls of
   * [onMeasure]{@link FrameNode#onMeasure} and [onLayout]{@link FrameNode#onLayout} .
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setNeedsLayout(): void;

  /**
   * Invalidates this FrameNode to trigger a re-rendering of the self-drawing content, that is, re-invokes
   * [onDraw]{@link FrameNode#onDraw} for self-drawing.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  invalidate(): void;

  /**
   * Obtains the position offset of this FrameNode relative to the screen, in vp.
   *
   * @returns { Position } Position offset of the node relative to the screen, in vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getPositionToScreen(): Position;

  /**
   * Obtains the position offset of this FrameNode relative to the global display, in vp. The coordinate system
   * reference differs from that of [getPositionToScreen]{@link FrameNode#getPositionToScreen}. Choose the appropriate
   * API based on the actual scenario.
   *
   * @returns { Position } Position offset of the node relative to the global display, in vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  getGlobalPositionOnDisplay(): Position;

  /**
   * Obtains the position offset of this FrameNode relative to the window with drawing attributes applied, in vp.
   * Drawing attributes include [transform]{@link CommonMethod#transform(value: object)} and
   * [translate]{@link CommonMethod#translate(value: TranslateOptions)}. This API returns the transformed coordinates of
   * the upper left corner after component layout.
   *
   * @returns { Position } Offset of the node relative to the window, in vp. When other drawing attributes (such as
   *     **transform** and **translate**) are set, the return value may have a slight deviation due to floating-point
   *     precision.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getPositionToWindowWithTransform(): Position;

  /**
   * Obtains the position offset of this FrameNode relative to its parent component with drawing attributes applied, in
   * vp. Drawing attributes include [transform]{@link CommonMethod#transform(value: object)} and
   * [translate]{@link CommonMethod#translate(value: TranslateOptions)}. This API returns the transformed coordinates of
   * the upper left corner after component layout.
   *
   * @returns { Position } Offset of the node relative to its parent component, in vp. When other drawing attributes (
   *     such as **transform** and **translate**) are set, the return value may have slight deviations due to floating-
   *     point precision.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getPositionToParentWithTransform(): Position;

  /**
   * Obtains the position offset of this FrameNode relative to the screen with drawing attributes applied, in vp.
   * Drawing attributes include [transform]{@link CommonMethod#transform(value: object)} and
   * [translate]{@link CommonMethod#translate(value: TranslateOptions)}. This API returns the transformed coordinates of
   * the upper left corner after component layout.
   *
   * @returns { Position } Position offset of the node relative to the screen, in vp. When other drawing attributes (
   *     such as **transform**, and **translate**) are set, the return value may have slight deviations due to floating-
   *     point precision.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getPositionToScreenWithTransform(): Position;

  /**
   * Traverses down the tree and recursively releases the subtree with this node as the root.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  disposeTree(): void;

  /**
   * Adds component content. The current node must be modifiable, which means the return value of
   * [isModifiable]{@link FrameNode#isModifiable} must be **true**. If the node is not modifiable, an exception is
   * thrown.
   *
   * @param { ComponentContent<T> } content - Component content to display on the FrameNode. [since 12 - 21]
   * @param { ComponentContent<T> | ReactiveComponentContent<T> } content - Component content to display on the
   *     FrameNode. [since 22]
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  addComponentContent<T>(content: ComponentContent<T> | ReactiveComponentContent<T>): void;

  /**
   * Sets the cross-language access options for this FrameNode. For example, for nodes created using ArkTS, this API can
   * set whether non-ArkTS languages are allowed to set the attributes of these nodes. Since API version 26.0.0, this
   * API can set whether non-ArkTS languages are allowed to perform operations on the component tree. If the current
   * FrameNode is not modifiable or does not support setting cross-language access options, an exception will be thrown.
   *
   * > **NOTE**
   * >
   * > Currently, the cross-ArkTS language access option can only be configured for the following components:
   * > [Scroll]{@link typeNode.Scroll}, [Swiper]{@link typeNode.Swiper}, [List]{@link typeNode.List},
   * > [ListItem]{@link typeNode.ListItem}, [ListItemGroup]{@link typeNode.ListItemGroup},
   * > [WaterFlow]{@link typeNode.WaterFlow}, [FlowItem]{@link typeNode.FlowItem}, [Grid]{@link typeNode.Grid},
   * > [GridItem]{@link typeNode.GridItem}, [TextInput]{@link typeNode.TextInput}, [TextArea]{@link typeNode.TextArea},
   * > [Column]{@link typeNode.Column}, [Row]{@link typeNode.Row}, [Stack]{@link typeNode.Stack},
   * > [Flex]{@link typeNode.Flex}, [RelativeContainer]{@link typeNode.RelativeContainer},
   * > [Progress]{@link typeNode.Progress}, [LoadingProgress]{@link typeNode.LoadingProgress},
   * > [Image]{@link typeNode.Image}, [Button]{@link typeNode.Button}, [Checkbox]{@link typeNode.Checkbox},
   * > [Radio]{@link typeNode.Radio}, [Slider]{@link typeNode.Slider}, [Toggle]{@link typeNode.Toggle}, and
   * > [TypedFrameNode]{@link TypedFrameNode} of the [XComponent]{@link typeNode.XComponent} type.
   *
   * @param { CrossLanguageOptions } options - Cross-ArkTS language access options.
   * @throws { BusinessError } 100022 - The FrameNode cannot be set whether to support cross-language common attribute
   *     setting.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  setCrossLanguageOptions(options: CrossLanguageOptions): void;

  /**
   * Obtains the cross-language access options for this FrameNode. For example, for nodes created using ArkTS, this API
   * can obtain whether non-ArkTS languages are allowed to set the properties of these nodes and perform operations on
   * the cross-language component tree. Since API version 26.0.0, this API can obtain whether non-ArkTS languages are
   * allowed to perform operations on the component tree.
   *
   * @returns { CrossLanguageOptions } Cross-ArkTS language access options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  getCrossLanguageOptions(): CrossLanguageOptions;

  /**
   * Triggers child component recycling in global reuse scenarios and fully releases FrameNode backend resources for
   * [reuse]{@link FrameNode#reuse}. This ensures efficient resource reclamation and reuse.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  recycle(): void;

  /**
   * Triggers child component reuse in global reuse scenarios to recycle FrameNode backend resources and improve
   * resource utilization. To ensure adequate resource availability, call this API after the **recycle** API has been
   * executed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  reuse(): void;

  /**
   * Obtains the event binding information for the target node. Returns **undefined** if the specified interaction event
   * type is not bound to the component node.
   *
   * @param { EventQueryType } eventType - Type of the interaction event to query. For example,
   *     **EventQueryType.ON_CLICK** indicates querying the binding information of the tap event. For details about the
   *     enumerated values, see [EventQueryType]{@link EventQueryType}.
   * @returns { InteractionEventBindingInfo | undefined } **InteractionEventBindingInfo** object if the queried type of
   *     interaction event is bound on the current node, indicating event binding details; **undefined** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  getInteractionEventBindingInfo(eventType: EventQueryType): InteractionEventBindingInfo | undefined;

  /**
   * Adds the polymorphic style states supported by the component.
   *
   * @param { number } uiStates - UI states of the target node to be processed.
   *     <br>Multiple states can be specified simultaneously using bitwise OR operations, for example,
   *     **targetUIStates = UIState.PRESSED  |  UIState.FOCUSED**.
   * @param { UIStatesChangeHandler } statesChangeHandler - Callback invoked when the state changes.
   * @param { boolean } [excludeInner] - Whether to disable internal default state style processing. The default value
   *     is **false**. Internal default state style processing refers to the built-in state style response of a
   *     component (for example, the default visual feedback when a button is pressed).
   *     <br>The value **true** means to disable internal default state style processing, and **false** means not to
   *     disable it.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  addSupportedUIStates(uiStates: number, statesChangeHandler: UIStatesChangeHandler, excludeInner?: boolean): void;

  /**
   * Removes the state processing registration from the component.
   *
   * @param { number } uiStates - UI states to be removed.
   *     <br>Multiple states can be specified simultaneously using bitwise OR operations, for example,
   *     **removeUIStates = UIState.PRESSED  |  UIState.FOCUSED**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  removeSupportedUIStates(uiStates: number): void;

  /**
   * Creates a property animation for the FrameNode.
   *
   * @param { AnimationPropertyType } property - Animation property type.
   * @param { Optional<number[]> } startValue - Animation start value. The value can be **undefined** or an array. If it
   *     is an array, the array length must match the property enumeration. If it is **undefined**, the animation start
   *     value is not explicitly specified, and the last property end value set on the node is used as the start point
   *     of this animation. If it is an array:<br/>- **AnimationPropertyType.ROTATION**:
   *     [rotationX, rotationY, rotationZ], in degrees (°), indicating the rotation angles around the x, y, and z axes.<
   *     br/>- **AnimationPropertyType.TRANSLATION**: [translateX, translateY], in px, indicating the translation
   *     amounts along the x and y axes.<br/>- **AnimationPropertyType.SCALE**: [scaleX, scaleY], indicating the scale
   *     ratios in the x and y directions.<br/>- ** AnimationPropertyType.OPACITY**: [opacity], indicating the opacity.
   *     The value range of opacity is [0, 1]. Values outside this range are clamped to [0, 1], and the animation is
   *     created normally.<br/>When the property has never been set on the node, **startValue** must be explicitly
   *     specified to create the animation properly. When the property has already been set on the node (for example,
   *     when creating an animation for the second time or later), it is recommended not to explicitly specify
   *     **startValue**, or to explicitly specify **startValue** as the previous end value, so that the previous end
   *     value is used as the new animation start point to avoid a jump in the start value.
   * @param { number[] } endValue - Animation end value. The value is an array, and the array length must match the
   *     property enumeration.<br/>- ** AnimationPropertyType.ROTATION**: [rotationX, rotationY, rotationZ], in degrees
   *     (°), indicating the rotation angles around the x, y, and z axes.<br/>- **AnimationPropertyType.TRANSLATION**:
   *     [translateX, translateY], in px, indicating the translation amounts along the x and y axes.<br/>-
   *     **AnimationPropertyType.SCALE**: [scaleX, scaleY], indicating the scale ratios in the x and y directions.<br/>-
   *     **AnimationPropertyType.OPACITY**: [opacity], indicating the opacity. The value range of opacity is [0, 1].
   *     Values outside this range are clamped to [0, 1], and the animation is created normally.
   * @param { AnimateParam } param - Animation parameters, including the duration, animation curve, and end callback.
   * @returns { boolean } Whether the animation is created successfully.
   *     <br>Returns **true** if the animation is created successfully. If an end callback is specified in the animation
   *     parameters, it will be invoked upon animation completion.
   *     <br>Returns **false** if the animation creation fails. The end callback will not be invoked even if specified.
   *     <br>Possible failure reasons:
   *     <br> 1. The node has been released (the [dispose]{@link FrameNode#dispose} API has been called).
   *     <br> 2. The node is a built-in component proxy (where [isModifiable]{@link FrameNode#isModifiable} returns
   *     **false**).
   *     <br> 3. There is an invalid property enumeration or length mismatch between the property type and
   *     **startValue** or **endValue** arrays.
   *     <br> 4. No start value is available (**startValue** is **undefined** for the first animation of a property) or
   *     the start and end values are identical.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  createAnimation(property: AnimationPropertyType, startValue: Optional<number[]>, endValue: number[], param: AnimateParam): boolean;

  /**
   * Cancels all animations for specified properties on the FrameNode. This API executes synchronously in the node's
   * owning thread and blocks until cancellation completes. Upon successful cancellation, the node's property values
   * revert to their current display state at the time of cancellation.
   *
   * @param { AnimationPropertyType[] } properties - Array of animation properties to cancel. You can simultaneously
   *     cancel the animations of multiple properties on the node.
   * @returns { boolean } Whether the animation is canceled successfully.<br/>The value **true** indicates that the
   *     animation is canceled successfully.<br/>The value **false** indicates that the animation cancellation fails.<br
   *     />Possible causes of animation cancellation failure:<br/> 1. The node has been released and the
   *     [dispose]{@link FrameNode#dispose} API has been called.<br/> 2. For a proxy node of a system component, that
   *     is, a node whose [isModifiable]{@link FrameNode#isModifiable} is set to **false**, calling this API will fail.<
   *     br/> 3. The property enumeration array contains invalid enumeration values.<br/> 4. System exception. For
   *     example, an IPC exception causes the animation cancellation to fail.<br/>Additional notes:<br/> 1. Even if
   *     there is no animation on the property, attempting to cancel the animation on that property will also return
   *     **true** when no system exception occurs.<br/> 2. If you ensure that the input parameters are valid and the
   *     node is normal, a return value of **false** indicates that a system exception has occurred. In this case, you
   *     can try to cancel again after a period of time, or stop the animation on the property by calling the
   *     [createAnimation]{@link FrameNode#createAnimation} API with **duration** being set to **0**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  cancelAnimations(properties: AnimationPropertyType[]): boolean;

  /**
   * Obtains the property value of the FrameNode.
   *
   * @param { AnimationPropertyType } property - Animation property type.
   * @returns { number[] } Property value of the FrameNode. The length of the returned array depends on the property
   *     enumeration. An empty array is returned in case of exceptions.<br/>Return value formats for different property
   *     enumerations:<br/>- When the node has been released, the [dispose]{@link FrameNode#dispose} API has been
   *     called, or the property enumeration is invalid, an empty array with a length of 0 is returned.<br/>-
   *     **AnimationPropertyType.ROTATION**: [rotationX, rotationY, rotationZ], in degrees (°), indicating the rotation
   *     angles around the x, y, and z axes.<br/>- **AnimationPropertyType.TRANSLATION**: [translateX, translateY], in
   *     px, indicating the translation amounts along the x and y axes.<br/>- **AnimationPropertyType.SCALE**:
   *     [scaleX, scaleY], indicating the scale ratios in the x and y directions.<br/>-
   *     **AnimationPropertyType.OPACITY**: [opacity], indicating the opacity.<br/>1. After an animation is normally
   *     canceled, the property value on the node is restored to the value at the time of cancellation. This API can be
   *     used to obtain the displayed value after cancellation.<br/>2. During an animation, the return value of this API
   *     is the final value of the property, not the real-time value during the animation process.<br/>
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  getNodePropertyValue(property: AnimationPropertyType): number[];

  /**
   * Returns a flag indicating whether the current FrameNode was obtained through dynamic-static conversion,
   * includes conversions in both directions: dynamic-to-static and static-to-dynamic.
   *
   * @returns { boolean } - Returns true if the FrameNode was converted between dynamic and static states,
   *     otherwise, returns false.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  isTransferred(): boolean;

  /**
   * Forces immediate node property updates in this frame.
   *
   * By default, property modifications applied after the build phase are deferred until the next frame.
   *
   * This API ensures rendering synchronization by triggering immediate property updates.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  invalidateAttributes(): void;

  /**
   * Adopts the target node as an affiliated node. If the current FrameNode is not modifiable, an exception is thrown.
   * The adopted affiliated node must not already have a parent node. Calling this API does not actually add the target
   * node as a child node. Instead, it only allows the current node to receive lifecycle callbacks of the affiliated
   * node. When you need to listen to a lifecycle callback of a node without changing its parent-child relationship or
   * the component tree structure, you can adopt it as an affiliated node through this API.
   *
   * @param { FrameNode } child - Node to be adopted. The child node must not have a parent node; otherwise, an
   *     exception is thrown.
   * @throws { BusinessError } 100021 - The current FrameNode is not modifiable.
   * @throws { BusinessError } 100025 - The parameter is invalid. Details about the invalid parameter and the reason
   *     are included in the error message. For example: "The parameter 'child' is invalid: it cannot be disposed."
   * @throws { BusinessError } 100026 - The current FrameNode has been disposed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  adoptChild(child: FrameNode): void;

  /**
   * Removes the adopted target affiliated node. If the current FrameNode is not modifiable, an exception is thrown.
   *
   * @param { FrameNode } child - Target affiliated node that has been adopted.
   * @throws { BusinessError } 100021 - The current FrameNode is not modifiable.
   * @throws { BusinessError } 100025 - The parameter is invalid. Details about the invalid parameter and the reason
   *     are included in the error message. For example: "The parameter 'child' is invalid: it cannot be null."
   * @throws { BusinessError } 100026 - The current FrameNode has been disposed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  removeAdoptedChild(child: FrameNode): void;

  /**
   * Converts a coordinate point from this node's coordinate system to the target node's coordinate system.
   *
   * @param { Position } position - Relative coordinates in the coordinate system of the current node. The unit is vp.
   * @param { FrameNode } targetNode - Target node for this coordinate conversion. The converted point coordinates are
   *     relative coordinates in the coordinate system of this node. The targetNode must not be a released node and must
   *     share a common ancestor node with the current node; otherwise, an exception is thrown.
   * @returns { Position } Converted coordinates in the local coordinate system of the target node, in vp.
   * @throws { BusinessError } 100024 - The current FrameNode and the target FrameNode do not have a common ancestor
   *     node.
   * @throws { BusinessError } 100025 - The parameter is invalid. Details about the invalid parameter and the reason
   *     are included in the error message. For example: "The parameter 'targetNode' is invalid: it cannot be disposed."
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  convertPosition(position: Position, targetNode: FrameNode): Position;

  /**
   * Converts the coordinates of a point from the coordinate system of the current node to the coordinate system of the
   * window where the current node is located.
   *
   * @param { Position } positionByLocal - Relative coordinates in the current node's coordinate system. The unit is vp.
   * @returns { Position } Converted coordinates of the current node in the coordinate system of the window where the
   *     node is located, in vp.
   * @throws { BusinessError } 100026 - The current FrameNode has been disposed.
   * @throws { BusinessError } 100028 - The current FrameNode is not on the main tree.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  convertPositionToWindow(positionByLocal: Position): Position;

  /**
   * Converts the coordinates of a point from the coordinate system of the window where the current node is located to
   * the coordinate system of the current node.
   *
   * @param { Position } positionByWindow - Relative coordinates in the coordinate system of the window where the
   *     current node is located. The unit is vp.
   * @returns { Position } Converted coordinates in the current node's coordinate system, in vp.
   * @throws { BusinessError } 100026 - The current FrameNode has been disposed.
   * @throws { BusinessError } 100028 - The current FrameNode is not on the main tree.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  convertPositionFromWindow(positionByWindow: Position): Position;

  /**
   * Obtains whether the node is in render state. A node is considered to be in render state when its corresponding
   * RenderNode is present in the render tree.
   *
   * @returns { boolean } Whether the node is in render state.
   *     <br>**true**: The node is in render state. **false**: The node is not in render state.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  isInRenderState(): boolean;

  /**
   * Queries whether the node is mounted to the main node tree. Both this API and
   * [isAttached]{@link FrameNode#isAttached} are used to determine whether a node is mounted to the main node tree. The
   * difference is that this API throws error code 100026 when the node has called [dispose]{@link FrameNode#dispose} to
   * release the reference. You can choose this API or [isAttached]{@link FrameNode#isAttached} based on whether error
   * code validation upon node dispose (that is, throwing error code 100026) is needed.
   *
   * @returns { boolean } Whether the node is mounted to the main node tree.
   *     <br>The value **true** means that the node is mounted to the main node tree, and **false** means the opposite.
   * @throws { BusinessError } 100026 - The current FrameNode has been disposed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  isOnMainTree(): boolean;

  /**
   * Creates a specified number of FrameNodes in batches and returns a FrameNode array.
   *
   * @param { UIContext } uiContext - UI context for node creation.
   * @param { number } count - Number of nodes to be created. The value is an integer greater than 0. If the value is
   *     less than or equal to 0 or is not an integer, an empty array is returned.
   * @returns { FrameNode[] } Array of created FrameNodes.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  static createFrameNodes(uiContext: UIContext, count: number): FrameNode[];

  /**
   * Searches for all child nodes layer by layer from the current node (which is used as the root node) and returns the
   * first node that matches the specified ID. The search sequence is as follows: Search for direct child nodes first,
   * then level-2 child nodes, and so on. The search stops as soon as a matching node is found.
   *
   * @param { string } id - ID of the child node to be queried, which is the same as the
   *     [component ID]{@link ../@internal/component/ets/common}.
   * @returns { FrameNode | null } First node that matches the specified ID, which is returned by searching for all
   *     child nodes layer by layer from the current node (which is used as the root node). If no child node of the
   *     current node matches the specified ID, a null is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getFrameNodeById(id: string): FrameNode | null;

  /**
   * Searches for and returns the child node with the specified unique ID (which can be obtained using the
   * [getUniqueId]{@link FrameNode#getUniqueId} API) under the current node (which is used as the root node).
   *
   * @param { int } id - Unique ID of the child node to be queried.
   * @returns { FrameNode | null } Child node with the unique ID, which is found from the current node (which is used as
   *     the root node). If the child node with the unique ID cannot be found under the current node, a null is
   *     returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getFrameNodeByUniqueId(id: int): FrameNode | null;
}

/**
 * Extends [FrameNode]{@link FrameNode} to define a FrameNode with specific type constraints. It supports various
 * component types such as **Text**, **Image**, **Button**, and **Column**, and is suitable for scenarios where
 * component nodes of specific types need to be dynamically created through code.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface TypedFrameNode<C, T> extends FrameNode {
  /**
   * Passes construction parameters for creating a component, used to set or update the component's initial values.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  initialize: C;
  /**
   * Obtains the attribute setting object of the corresponding component to set or update its common and private
   * attributes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  readonly attribute: T;
}

/**
 * Provides APIs for creating a specific type of FrameNode, which can be mounted through the basic API of the FrameNode
 * and be displayed using a placeholder container. It is suitable for scenarios where component nodes of specific types
 * need to be dynamically created through code and custom-mounted.
 *
 * When **typeNode** is used to create [Text]{@link ../@internal/component/ets/text},
 * [Image]{@link ../@internal/component/ets/image}, [Select]{@link ../@internal/component/ets/select}, or
 * [Toggle]{@link ../@internal/component/ets/toggle} nodes, if the UI instance corresponding to the input
 * [UIContext]{@link @ohos.arkui.UIContext} is destroyed, this API returns an invalid FrameNode that cannot be properly
 * mounted or displayed.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
export namespace typeNode {
  /**
   * Represents a FrameNode of the **Text** type. This type of node does not allow child components to be added.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type Text = TypedFrameNode<TextInterface, TextAttribute>;

  /**
   * Creates a FrameNode of the **Text** type. When **typeNode** is used to create a **Text** node, after the UI
   * instance corresponding to the passed **UIContext** is destroyed, calling this API returns an invalid FrameNode that
   * cannot be properly mounted and displayed.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'Text' } nodeType - Node type. Set to **'Text'**.
   * @returns { Text } FrameNode of the **Text** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Text'): Text;

  /**
   * Obtains the attributes of a **Text** node. If the node is not created using ArkTS, cross-language access must be
   * enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.
   *
   * @param { FrameNode } node - Target node from which to obtain attributes.
   * @param { 'Text' } nodeType - Node type. Set to **'Text'**.
   * @returns { TextAttribute | undefined } Attributes of the **Text** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'Text'): TextAttribute | undefined;

  /**
   * Binds a [TextController]{@link TextController} instance to a [Text]{@link typeNode.Text} node. Cross-language
   * access must be enabled for nodes not created via ArkTS; otherwise, an exception will be thrown. This API does not
   * support declaratively created nodes.
   *
   * @param { FrameNode } node - Target node for controller binding.
   * @param { TextController } controller - **TextController** instance to bind.
   * @param { 'Text' } nodeType - Type of the target node bound to the controller. Set to **Text**.
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node
   *     is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function bindController(node: FrameNode, controller: TextController, nodeType: 'Text'): void;

  /**
   * Represents a FrameNode of the **Column** type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type Column = TypedFrameNode<ColumnInterface, ColumnAttribute>;

  /**
   * Creates a FrameNode of the **Column** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'Column' } nodeType - Node type. Set to **'Column'**.
   * @returns { Column } FrameNode of the **Column** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Column'): Column;

  /**
   * Obtains the attributes of a **Column** node. If the node is not created using ArkTS, cross-language access must be
   * enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.
   *
   * @param { FrameNode } node - Target node from which attributes are obtained.
   * @param { 'Column' } nodeType - Node type. Set to **'Column'**.
   * @returns { ColumnAttribute | undefined } Attributes of the **Column** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'Column'): ColumnAttribute | undefined;

  /**
   * Represents a FrameNode of the **Row** type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type Row = TypedFrameNode<RowInterface, RowAttribute>;

  /**
   * Creates a FrameNode of the Row type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'Row' } nodeType - Node type. Set to **'Row'**.
   * @returns { Row } FrameNode of the **Row** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Row'): Row;

  /**
   * Obtains the attributes of a **Row** node. If the node is not created using ArkTS, cross-language access must be
   * enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.
   *
   * @param { FrameNode } node - Target node from which to obtain attributes.
   * @param { 'Row' } nodeType - Node type. Set to **'Row'**.
   * @returns { RowAttribute | undefined } Attributes of the **Row** node, or **undefined** if they fail to be obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'Row'): RowAttribute | undefined;

  /**
   * Represents a FrameNode of the **Stack** type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type Stack = TypedFrameNode<StackInterface, StackAttribute>;

  /**
   * Creates a FrameNode of the **Stack** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'Stack' } nodeType - Node type. Set to **'Stack'**.
   * @returns { Stack } FrameNode of the **Stack** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Stack'): Stack;

  /**
   * Obtains the attributes of a **Stack** node. If the node is not created using ArkTS, cross-language access must be
   * enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.
   *
   * @param { FrameNode } node - Target node from which to obtain attributes.
   * @param { 'Stack' } nodeType - Node type. Set to **'Stack'**.
   * @returns { StackAttribute | undefined } Attributes of the **Stack** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'Stack'): StackAttribute | undefined;

  /**
   * Represents a FrameNode of the **GridRow** type. This type of node only allows child components of the **GridCol**
   * type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type GridRow = TypedFrameNode<GridRowInterface, GridRowAttribute>;

  /**
   * Creates a FrameNode of the **GridRow** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'GridRow' } nodeType - Node type. Set to **'GridRow'**.
   * @returns { GridRow } FrameNode of the **GridRow** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'GridRow'): GridRow;

  /**
   * Represents a FrameNode of the **GridCol** type. This type of node does not allow child components to be added.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type GridCol = TypedFrameNode<GridColInterface, GridColAttribute>;

  /**
   * Creates a FrameNode of the **GridCol** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'GridCol' } nodeType - Node type. Set to **'GridCol'**.
   * @returns { GridCol } FrameNode of the **GridCol** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'GridCol'): GridCol;

  /**
   * Represents a FrameNode of the Flex type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type Flex = TypedFrameNode<FlexInterface, FlexAttribute>;

  /**
   * Creates a FrameNode of the Flex type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'Flex' } nodeType - Node type. Set to **'Flex'**.
   * @returns { Flex } FrameNode of the **Flex** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Flex'): Flex;

  /**
   * Obtains the Flex node attributes. If the node is not created using ArkTS, cross-language access must be enabled;
   * otherwise, **undefined** is returned. This API does not support declaratively created nodes.
   *
   * @param { FrameNode } node - Target node from which to obtain attributes.
   * @param { 'Flex' } nodeType - Flex node type.
   * @returns { FlexAttribute | undefined } Flex node type. If the operation fails, undefined is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'Flex'): FlexAttribute | undefined;

  /**
   * Represents a FrameNode of the **Swiper** type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type Swiper = TypedFrameNode<SwiperInterface, SwiperAttribute>;

  /**
   * Creates a FrameNode of the **Swiper** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'Swiper' } nodeType - Node type. Set to **'Swiper'**.
   * @returns { Swiper } FrameNode of the **Swiper** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Swiper'): Swiper;

  /**
   * Obtains the attributes of a **Swiper** node. If the node is not created using ArkTS, cross-language access must be
   * enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.
   *
   * @param { FrameNode } node - Target node from which to obtain attributes.
   * @param { 'Swiper' } nodeType - Node type. Set to **'Swiper'**.
   * @returns { SwiperAttribute | undefined } Properties of the **Swiper** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'Swiper'): SwiperAttribute | undefined;

  /**
   * Binds a [SwiperController]{@link SwiperController} instance to the [Swiper]{@link typeNode.Swiper} node. Cross-
   * language access must be enabled for nodes not created via ArkTS; otherwise, an exception will be thrown. This API
   * does not support declaratively created nodes.
   *
   * @param { FrameNode } node - Target node for controller binding.
   * @param { SwiperController } controller - **SwiperController** instance.
   * @param { 'Swiper' } nodeType - Node type. Set to **'Swiper'**.
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node
   *     is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function bindController(node: FrameNode, controller: SwiperController, nodeType: 'Swiper'): void;

  /**
   * Represents a FrameNode of the **Progress** type. This type of node does not allow child components to be added.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type Progress = TypedFrameNode<ProgressInterface, ProgressAttribute>;

  /**
   * Creates a FrameNode of the **Progress** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'Progress' } nodeType - Node type. Set to **'Progress'**.
   * @returns { Progress } FrameNode of the **Progress** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Progress'): Progress;

  /**
   * Obtains the attributes of a **Progress** node. If the node is not created using ArkTS, cross-language access must
   * be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.
   *
   * @param { FrameNode } node - Target node from which to obtain attributes.
   * @param { 'Progress' } nodeType - Node type. Set to **'Progress'**.
   * @returns { ProgressAttribute | undefined } Properties of the **Progress** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'Progress'): ProgressAttribute | undefined;

  /**
   * Represents a FrameNode of the **Scroll** type. This type of node allows only one child component to be added.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type Scroll = TypedFrameNode<ScrollInterface, ScrollAttribute>;

  /**
   * Creates a FrameNode of the **Scroll** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'Scroll' } nodeType - Node type. Set to **'Scroll'**.
   * @returns { Scroll } FrameNode of the **Scroll** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Scroll'): Scroll;

  /**
   * Obtains the attributes of a **Scroll** node. If the node is not created using ArkTS, cross-language access must be
   * enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.
   *
   * @param { FrameNode } node - Target node from which to obtain attributes.
   * @param { 'Scroll' } nodeType - Node type. Set to **'Scroll'**.
   * @returns { ScrollAttribute | undefined } Attributes of the **Scroll** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 15 dynamic
   */
  function getAttribute(node: FrameNode, nodeType: 'Scroll'): ScrollAttribute | undefined;

  /**
   * Obtains the **UIScrollEvent** object held by the **Scroll** node, which is used to set scroll events. If the node
   * is not created via ArkTS, whether cross-language access is supported must be set. If cross-language access is not
   * supported, **undefined** is returned. This API does not support nodes created in a declarative manner. The scroll
   * events set through this API coexist with declaratively defined events. The set scroll events do not override the
   * original declarative events. When both event callbacks are set, the declarative event callback takes precedence.
   *
   * @param { FrameNode } node - Target node.
   * @param { 'Scroll' } nodeType - **Scroll** node type for scroll event configuration.
   * @returns { UIScrollEvent | undefined } **UIScrollEvent** object for the **Scroll** node, or **undefined** if it
   *     fails to be obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 19 dynamic
   */
  function getEvent(node: FrameNode, nodeType: 'Scroll'): UIScrollEvent | undefined;

  /**
   * Binds the [Scroller]{@link Scroller} to the [Scroll]{@link typeNode.Scroll} node. Cross-language access must be
   * enabled for nodes not created via ArkTS; otherwise, an exception will be thrown. This API supports declaratively
   * created nodes since API version 26.0.0. Versions earlier than API version 26.0.0 do not support this.
   *
   * @param { FrameNode } node - Target node to which the scroll controller is bound.
   * @param { Scroller } controller - Scroll controller.
   * @param { 'Scroll' } nodeType - Node type, which is **Scroll** in this API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. the type of the node is error.
   *     2. the node is null or undefined.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable. Introduced in API version 15 and will not
   *     be thrown above API version 24. [since 15 - 24]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 15 dynamic
   */
  function bindController(node: FrameNode, controller: Scroller, nodeType: 'Scroll'): void;

  /**
   * Represents a FrameNode of the **RelativeContainer** type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type RelativeContainer = TypedFrameNode<RelativeContainerInterface, RelativeContainerAttribute>;

  /**
   * Creates a FrameNode of the **RelativeContainer** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'RelativeContainer' } nodeType - Node type. Set to **'RelativeContainer'**.
   * @returns { RelativeContainer } FrameNode of the **RelativeContainer** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'RelativeContainer'): RelativeContainer;

  /**
   * Obtains the attributes of a **RelativeContainer** node. If the node is not created using ArkTS, cross-language
   * access must be enabled; otherwise, **undefined** is returned. This API does not support declaratively created
   * nodes.
   *
   * @param { FrameNode } node - Target node from which to obtain attributes.
   * @param { 'RelativeContainer' } nodeType - Node type. Set to **'RelativeContainer'**.
   * @returns { RelativeContainerAttribute | undefined } Attributes of the **RelativeContainer** node, or **undefined**
   *     if they fail to be obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'RelativeContainer'): RelativeContainerAttribute | undefined;

  /**
   * Represents a FrameNode of the **Divider** type. This type of node does not allow child components to be added.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type Divider = TypedFrameNode<DividerInterface, DividerAttribute>;

  /**
   * Creates a FrameNode of the **Divider** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'Divider' } nodeType - Node type. Set to **'Divider'**.
   * @returns { Divider } FrameNode of the **Divider** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Divider'): Divider;

  /**
   * Represents a FrameNode of the **LoadingProgress** type. This type of node does not allow child components to be
   * added.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type LoadingProgress = TypedFrameNode<LoadingProgressInterface, LoadingProgressAttribute>;

  /**
   * Creates a FrameNode of the **LoadingProgress** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'LoadingProgress' } nodeType - Node type. Set to **'LoadingProgress'**.
   * @returns { LoadingProgress } FrameNode of the **LoadingProgress** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'LoadingProgress'): LoadingProgress;

  /**
   * Obtains the attributes of a [LoadingProgress]{@link ../@internal/component/ets/loading_progress} node. If the node
   * is not created using ArkTS, cross-language access must be enabled; otherwise, **undefined** is returned. This API
   * does not support declaratively created nodes.
   *
   * @param { FrameNode } node - Target node from which to obtain attributes.
   * @param { 'LoadingProgress' } nodeType - Node type. Set to **'LoadingProgress'**.
   * @returns { LoadingProgressAttribute | undefined } Properties of the **LoadingProgress** node, or **undefined** if
   *     they fail to be obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'LoadingProgress'): LoadingProgressAttribute | undefined;

  /**
   * Represents a FrameNode of the **Search** type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type Search = TypedFrameNode<SearchInterface, SearchAttribute>;

  /**
   * Creates a FrameNode of the **Search** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'Search' } nodeType - Node type. Set to **'Search'**.
   * @returns { Search } FrameNode of the **Search** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Search'): Search;

  /**
   * Represents a FrameNode of the **Blank** type. This type of node does not allow child components to be added.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type Blank = TypedFrameNode<BlankInterface, BlankAttribute>;

  /**
   * Creates a FrameNode of the **Blank** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'Blank' } nodeType - Node type. Set to **'Blank'**.
   * @returns { Blank } FrameNode of the **Blank** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Blank'): Blank;

  /**
   * Represents a FrameNode of the **Image** type. This type of node does not allow child components to be added.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type Image = TypedFrameNode<ImageInterface, ImageAttribute>;

  /**
   * Creates a FrameNode of the **Image** type. When **typeNode** is used to create an **Image** node, after the UI
   * instance corresponding to the passed **UIContext** is destroyed, calling this API returns an invalid FrameNode that
   * cannot be properly mounted and displayed.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'Image' } nodeType - Node type, which is **Image** in this API.
   * @returns { Image } FrameNode of the **Image** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Image'): Image;

  /**
   * Obtains the attributes of an **Image** node. If the node is not created using ArkTS, cross-language access must be
   * enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.
   *
   * @param { FrameNode } node - Target node from which to obtain attributes.
   * @param { 'Image' } nodeType - Node type. Set to **'Image'**.
   * @returns { ImageAttribute | undefined } Properties of the **Image** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'Image'): ImageAttribute | undefined;

  /**
   * Represents a FrameNode of the **List** type. This type of node only allows child components of the
   * [ListItem]{@link typeNode.ListItem} and [ListItemGroup]{@link typeNode.ListItemGroup} types.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type List = TypedFrameNode<ListInterface, ListAttribute>;

  /**
   * Creates a FrameNode of the **List** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'List' } nodeType - Node type. Set to **'List'**.
   * @returns { List } FrameNode of the **List** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'List'): List;

  /**
   * Obtains the attributes of a **List** node. If the node is not created using ArkTS, cross-language access must be
   * enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.
   *
   * @param { FrameNode } node - Target node from which to obtain attributes.
   * @param { 'List' } nodeType - Node type. Set to **'List'**.
   * @returns { ListAttribute | undefined } Attributes of the **List** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'List'): ListAttribute | undefined;

  /**
   * Binds a [Scroller]{@link Scroller} instance to the [List]{@link typeNode.List} node. Cross-language access must be
   * enabled for nodes not created via ArkTS; otherwise, an exception will be thrown. This API supports declaratively
   * created nodes since API version 26.0.0. Versions earlier than API version 26.0.0 do not support this.
   *
   * @param { FrameNode } node - Target node to which the scroll controller is bound.
   * @param { Scroller } controller - Scroll controller.
   * @param { 'List' } nodeType - Node type. Set to **'List'**.
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node is
   *     incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable. Introduced in API version 20 and will not
   *     be thrown above API version 24. [since 20 - 24]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function bindController(node: FrameNode, controller: Scroller, nodeType: 'List'): void;

  /**
   * Represents a FrameNode of the **ListItem** type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type ListItem = TypedFrameNode<ListItemInterface, ListItemAttribute>;

  /**
   * Obtains the **UIListEvent** object held by the **List** node, which is used to set scroll events. If the node is
   * not created via ArkTS, whether cross-language access is supported must be set. If cross-language access is not
   * supported, **undefined** is returned. This API does not support nodes created in a declarative manner. The scroll
   * events set through this API coexist with declaratively defined events. The set scroll events do not override the
   * original declarative events. When both event callbacks are set, the declarative event callback takes precedence.
   *
   * @param { FrameNode } node - Target node.
   * @param { 'List' } nodeType - **List** node type for scroll event configuration.
   * @returns { UIListEvent | undefined } **UIListEvent** object for the **List** node, or **undefined** if it fails to
   *     be obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 19 dynamic
   */
  function getEvent(node: FrameNode, nodeType: 'List'): UIListEvent | undefined;

  /**
   * Creates a FrameNode of the **ListItem** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'ListItem' } nodeType - Node type. Set to **'ListItem'**.
   * @returns { ListItem } FrameNode of the **ListItem** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'ListItem'): ListItem;

  /**
   * Obtains the attributes of a **ListItem** node. If the node is not created using ArkTS, cross-language access must
   * be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.
   *
   * @param { FrameNode } node - Target node from which to obtain attributes.
   * @param { 'ListItem' } nodeType - Node type. Set to **'ListItem'**.
   * @returns { ListItemAttribute | undefined } Attributes of the **ListItem** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'ListItem'): ListItemAttribute | undefined;

  /**
   * Represents a FrameNode of the **TextInput** type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type TextInput = TypedFrameNode<TextInputInterface, TextInputAttribute>;

  /**
   * Creates a FrameNode of the **TextInput** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'TextInput' } nodeType - Node type. Set to **'TextInput'**.
   * @returns { TextInput } FrameNode of the **TextInput** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'TextInput'): TextInput;

  /**
   * Obtains the attributes of a **TextInput** node. If the node is not created using ArkTS, cross-language access must
   * be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.
   *
   * @param { FrameNode } node - Target node from which to obtain attributes.
   * @param { 'TextInput' } nodeType - Node type. Set to **'TextInput'**.
   * @returns { TextInputAttribute | undefined } Properties of the **TextInput** node, or **undefined** if they fail to
   *     be obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'TextInput'): TextInputAttribute | undefined;

  /**
   * Binds the input box controller [TextInputController]{@link TextInputController} to the
   * [TextInput]{@link typeNode.TextInput} node. If the node is not created via ArkTS, whether cross-language access is
   * supported must be set. If cross-language access is not supported, an exception is thrown. Since API version 26.0.0,
   * this API supports nodes created in a declarative manner. Versions earlier than API version 26.0.0 do not support
   * this.
   *
   * @param { FrameNode } node - Target node to which the input box controller is bound.
   * @param { TextInputController } controller - Input box controller.
   * @param { 'TextInput' } nodeType - Node type. Set to **'TextInput'**.
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node
   *     is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function bindController(node: FrameNode, controller: TextInputController, nodeType: 'TextInput'): void;

  /**
   * Represents a FrameNode of the **Button** type. When created in child component mode, this type of node allows only
   * one child component to be added. When created in label mode, it does not allow child components to be added.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type Button = TypedFrameNode<ButtonInterface, ButtonAttribute>;

  /**
   * Creates a FrameNode of the **Button** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'Button' } nodeType - Node type. Set to **'Button'**.
   * @returns { Button } FrameNode of the **Button** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Button'): Button;

  /**
   * Obtains the attributes of a **Button** node. If the node is not created using ArkTS, cross-language access must be
   * enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.
   *
   * @param { FrameNode } node - Target node from which to obtain attributes.
   * @param { 'Button' } nodeType - Node type. Set to **'Button'**.
   * @returns { ButtonAttribute | undefined } Attributes of the **Button** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'Button'): ButtonAttribute | undefined;

  /**
   * Represents a FrameNode of the **ListItemGroup** type. Only [ListItem]{@link ../@internal/component/ets/list_item}
   * child components can be added.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type ListItemGroup = TypedFrameNode<ListItemGroupInterface, ListItemGroupAttribute>;

  /**
   * Creates a FrameNode of the **ListItemGroup** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'ListItemGroup' } nodeType - Node type. Set to **'ListItemGroup'**.
   * @returns { ListItemGroup } FrameNode of the **ListItemGroup** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'ListItemGroup'): ListItemGroup;

  /**
   * Obtains the attributes of a **ListItemGroup** node. If the node is not created using ArkTS, cross-language access
   * must be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.
   *
   * @param { FrameNode } node - Target node from which to obtain attributes.
   * @param { 'ListItemGroup' } nodeType - Node type. Set to **'ListItemGroup'**.
   * @returns { ListItemGroupAttribute | undefined } Attributes of the **ListItemGroup** node, or **undefined** if they
   *     fail to be obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'ListItemGroup'): ListItemGroupAttribute | undefined;

  /**
   * Represents a FrameNode of the **WaterFlow** type. Only [FlowItem]{@link ../@internal/component/ets/flow_item} child
   * components can be added.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type WaterFlow = TypedFrameNode<WaterFlowInterface, WaterFlowAttribute>;

  /**
   * Creates a FrameNode of the **WaterFlow** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'WaterFlow' } nodeType - Node type. Set to **'WaterFlow'**.
   * @returns { WaterFlow } FrameNode of the **WaterFlow** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'WaterFlow'): WaterFlow;

  /**
   * Obtains the attributes of a **WaterFlow** node. If the node is not created using ArkTS, cross-language access must
   * be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.
   *
   * @param { FrameNode } node - Target node from which to obtain attributes.
   * @param { 'WaterFlow' } nodeType - Node type. Set to **'WaterFlow'**.
   * @returns { WaterFlowAttribute | undefined } Properties of the **WaterFlow** node, or **undefined** if they fail to
   *     be obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'WaterFlow'): WaterFlowAttribute | undefined;

  /**
   * Binds a [Scroller]{@link Scroller} instance to the [WaterFlow]{@link typeNode.WaterFlow} node. Cross-language
   * access must be enabled for nodes not created via ArkTS; otherwise, an exception will be thrown. This API supports
   * declaratively created nodes since API version 26.0.0.
   *
   * @param { FrameNode } node - Target node to which the scroll controller is bound.
   * @param { Scroller } controller - Scroll controller.
   * @param { 'WaterFlow' } nodeType - Node type. Set to **'WaterFlow'**.
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node
   *     is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable. Introduced in API version 20 and will not
   *     be thrown above API version 24. [since 20 - 24]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function bindController(node: FrameNode, controller: Scroller, nodeType: 'WaterFlow'): void;

  /**
   * Obtains the **UIWaterFlowEvent** object held by the [WaterFlow]{@link typeNode.WaterFlow} node, which is used to
   * set scroll events. If the node is not created via ArkTS, whether cross-language access is supported must be set. If
   * cross-language access is not supported, **undefined** is returned. This API does not support nodes created in a
   * declarative manner. The scroll events set through this API coexist with declaratively defined events. The set
   * scroll events do not override the original declarative events. When both event callbacks are set, the declarative
   * event callback takes precedence.
   *
   * @param { FrameNode } node - Target node.
   * @param { 'WaterFlow' } nodeType - **WaterFlow** node type for scroll event configuration.
   * @returns { UIWaterFlowEvent | undefined } **UIWaterFlowEvent** object for the **WaterFlow** node, or **undefined**
   *     if it fails to be obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 19 dynamic
   */
  function getEvent(node: FrameNode, nodeType: 'WaterFlow'): UIWaterFlowEvent | undefined;

  /**
   * Represents a FrameNode of the **FlowItem** type. This type of node allows only one child component to be added.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type FlowItem = TypedFrameNode<FlowItemInterface, FlowItemAttribute>;

  /**
   * Creates a FrameNode of the **FlowItem** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'FlowItem' } nodeType - Node type. Set to **'FlowItem'**.
   * @returns { FlowItem } FrameNode of the **FlowItem** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'FlowItem'): FlowItem;

  /**
   * Obtains the attributes of a **FlowItem** node. If the node is not created using ArkTS, cross-language access must
   * be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.
   *
   * @param { FrameNode } node - Target node from which to obtain attributes.
   * @param { 'FlowItem' } nodeType - Node type. Set to **'FlowItem'**.
   * @returns { FlowItemAttribute | undefined } Properties of the **FlowItem** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'FlowItem'): FlowItemAttribute | undefined;

  /**
   * Represents a FrameNode of the **XComponent** type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type XComponent = TypedFrameNode<XComponentInterface, XComponentAttribute>;

  /**
   * Creates a FrameNode of the **XComponent** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'XComponent' } nodeType - Node type. Set to **'XComponent'**.
   * @returns { XComponent } FrameNode of the **XComponent** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'XComponent'): XComponent;

  /**
   * Creates a FrameNode of the **XComponent** type based on the settings specified in **options**.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'XComponent' } nodeType - Node type. Set to **'XComponent'**.
   * @param { XComponentOptions } options - Options of the **XComponent**.
   * @returns { XComponent } FrameNode of the **XComponent** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  function createNode(context: UIContext, nodeType: 'XComponent', options: XComponentOptions): XComponent;

  /**
   * Creates a FrameNode of the **XComponent** type based on the settings specified in **parameters**.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'XComponent' } nodeType - Node type. Set to **'XComponent'**.
   * @param { NativeXComponentParameters } parameters - Options of the **XComponent**.
   * @returns { XComponent } FrameNode of the **XComponent** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 19 dynamic
   */
  function createNode(context: UIContext, nodeType: 'XComponent', parameters: NativeXComponentParameters): XComponent;

  /**
   * Obtain the attributes of an **XComponent** node. If the node is not created using ArkTS, cross-language access must
   * be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.
   *
   * @param { FrameNode } node - Target node from which to obtain attributes.
   * @param { 'XComponent' } nodeType - Node type. Set to **'XComponent'**.
   * @returns { XComponentAttribute | undefined } Properties of the **XComponent** node, or **undefined** if they fail
   *     to be obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'XComponent'): XComponentAttribute | undefined;

  /**
   * Represents a FrameNode of the **Checkbox** type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  type Checkbox = TypedFrameNode<CheckboxInterface, CheckboxAttribute>;

  /**
   * Creates a FrameNode of the **Checkbox** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'Checkbox' } nodeType - Node type. Set to **'Checkbox'**.
   * @returns { Checkbox } FrameNode of the **Checkbox** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 18 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Checkbox'): Checkbox;

  /**
   * Obtains the attributes of a **Checkbox** node. If the node is not created using ArkTS, cross-language access must
   * be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.
   *
   * @param { FrameNode } node - Target node from which to obtain attributes.
   * @param { 'Checkbox' } nodeType - Node type. Set to **'Checkbox'**.
   * @returns { CheckboxAttribute | undefined } Attributes of the **Checkbox** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'Checkbox'): CheckboxAttribute | undefined;

  /**
   * Represents a FrameNode of the **CheckboxGroup** type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  type CheckboxGroup = TypedFrameNode<CheckboxGroupInterface, CheckboxGroupAttribute>;

  /**
   * Creates a FrameNode of the **CheckboxGroup** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'CheckboxGroup' } nodeType - Node type. Set to **'CheckboxGroup'**.
   * @returns { CheckboxGroup } FrameNode of the **CheckboxGroup** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 18 dynamic
   */
  function createNode(context: UIContext, nodeType: 'CheckboxGroup'): CheckboxGroup;

  /**
   * Represents a FrameNode of the **Radio** type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  type Radio = TypedFrameNode<RadioInterface, RadioAttribute>;

  /**
   * Creates a FrameNode of the **Radio** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'Radio' } nodeType - Node type. Set to **'Radio'**.
   * @returns { Radio } FrameNode of the **Radio** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 18 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Radio'): Radio;

  /**
   * Obtains the attributes of a **Radio** node. If the node is not created using ArkTS, cross-language access must be
   * enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.
   *
   * @param { FrameNode } node - Target node from which to obtain attributes.
   * @param { 'Radio' } nodeType - Node type. Set to **'Radio'**.
   * @returns { RadioAttribute | undefined } Properties of the **Radio** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'Radio'): RadioAttribute | undefined;

  /**
   * Represents a FrameNode of the **Rating** type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  type Rating = TypedFrameNode<RatingInterface, RatingAttribute>;

  /**
   * Creates a FrameNode of the **Rating** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'Rating' } nodeType - Node type, which is **Rating** in this API.
   * @returns { Rating } FrameNode of the **Rating** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 18 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Rating'): Rating;

  /**
   * Represents a FrameNode of the **Select** type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  type Select = TypedFrameNode<SelectInterface, SelectAttribute>;

  /**
   * Creates a FrameNode of the **Select** type. When **typeNode** is used to create a **Select** node, after the UI
   * instance corresponding to the passed **UIContext** is destroyed, calling this API returns an invalid FrameNode that
   * cannot be properly mounted and displayed.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'Select' } nodeType - Node type. Set to **'Select'**.
   * @returns { Select } FrameNode of the **Select** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 18 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Select'): Select;

  /**
   * Represents a FrameNode of the **Slider** type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  type Slider = TypedFrameNode<SliderInterface, SliderAttribute>;

  /**
   * Creates a FrameNode of the **Slider** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'Slider' } nodeType - Node type. Set to **'Slider'**.
   * @returns { Slider } FrameNode of the **Slider** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 18 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Slider'): Slider;

  /**
   * Obtains the attributes of a **Slider** node. If the node is not created using ArkTS, cross-language access must be
   * enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.
   *
   * @param { FrameNode } node - Target node from which to obtain attributes.
   * @param { 'Slider' } nodeType - Node type. Set to **'Slider'**.
   * @returns { SliderAttribute | undefined } Properties of the **Slider** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'Slider'): SliderAttribute | undefined;

  /**
   * FrameNode of the [Toggle]{@link ../@internal/component/ets/toggle} type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  type Toggle = TypedFrameNode<ToggleInterface, ToggleAttribute>;

  /**
   * Creates a FrameNode of the **Toggle** type. When **typeNode** is used to create a **Toggle** node, after the UI
   * instance corresponding to the passed **UIContext** is destroyed, calling this API returns an invalid FrameNode that
   * cannot be properly mounted and displayed.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'Toggle' } nodeType - Node type. Set to **'Toggle'**.
   * @param { ToggleOptions } [options] - Options for creating a **Toggle** node. The switch style can only be set
   *     through the **type** attribute in **ToggleOptions**. When this parameter is not passed, the **type** attribute
   *     of **Toggle** must be set through the **initialize** API.
   * @returns { Toggle } FrameNode of the **Toggle** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 18 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Toggle', options?: ToggleOptions): Toggle;

  /**
   * Obtains the attributes of a **Toggle** node. If the node is not created using ArkTS, cross-language access must be
   * enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.
   *
   * @param { FrameNode } node - Target node from which to obtain attributes.
   * @param { 'Toggle' } nodeType - Node type. Set to **'Toggle'**.
   * @returns { ToggleAttribute | undefined } Properties of the **Toggle** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'Toggle'): ToggleAttribute | undefined;

  /**
   * Represents a FrameNode of the **Marquee** type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  type Marquee = TypedFrameNode<MarqueeInterface, MarqueeAttribute>;

  /**
   * Creates a FrameNode of the **Marquee** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'Marquee' } nodeType - Node type. Set to **'Marquee'**.
   * @returns { Marquee } FrameNode of the **Marquee** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 14 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Marquee'): Marquee;

  /**
   * Represents a FrameNode of the **TextArea** type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  type TextArea = TypedFrameNode<TextAreaInterface, TextAreaAttribute>;

  /**
   * Creates a FrameNode of the **TextArea** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'TextArea' } nodeType - Node type. Set to **'TextArea'**.
   * @returns { TextArea } FrameNode of the **TextArea** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 14 dynamic
   */
  function createNode(context: UIContext, nodeType: 'TextArea'): TextArea;

  /**
   * Obtains the attributes of a **TextArea** node. If the node is not created using ArkTS, cross-language access must
   * be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.
   *
   * @param { FrameNode } node - Target node from which to obtain attributes.
   * @param { 'TextArea' } nodeType - Node type. Set to **'TextArea'**.
   * @returns { TextAreaAttribute | undefined } Properties of the **TextArea** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'TextArea'): TextAreaAttribute | undefined;

  /**
   * Binds the input box controller [TextAreaController]{@link TextAreaController} to the
   * [TextArea]{@link typeNode.TextArea} node. If the node is not created via ArkTS, whether cross-language access is
   * supported must be set. If cross-language access is not supported, an exception is thrown. Since API version 26.0.0,
   * this API supports nodes created in a declarative manner. Versions earlier than API version 26.0.0 do not support
   * this.
   *
   * @param { FrameNode } node - Target node to which the input box controller is bound.
   * @param { TextAreaController } controller - Input box controller.
   * @param { 'TextArea' } nodeType - Node type. Set to **'TextArea'**.
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node
   *     is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function bindController(node: FrameNode, controller: TextAreaController, nodeType: 'TextArea'): void;

  /**
   * Represents a FrameNode of the **SymbolGlyph** type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  type SymbolGlyph = TypedFrameNode<SymbolGlyphInterface, SymbolGlyphAttribute>;

  /**
   * Creates a FrameNode of the **SymbolGlyph** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'SymbolGlyph' } nodeType - Node type. Set to **'SymbolGlyph'**.
   * @returns { SymbolGlyph } FrameNode of the **SymbolGlyph** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 14 dynamic
   */
  function createNode(context: UIContext, nodeType: 'SymbolGlyph'): SymbolGlyph;

  /**
   * Represents a FrameNode of the **QRCode** type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  type QRCode = TypedFrameNode<QRCodeInterface, QRCodeAttribute>;

  /**
   * Creates a FrameNode of the **QRCode** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'QRCode' } nodeType - Node type, which is **QRCode** in this API.
   * @returns { QRCode } FrameNode of the **QRCode** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 14 dynamic
   */
  function createNode(context: UIContext, nodeType: 'QRCode'): QRCode;

  /**
   * Represents a FrameNode of the **Badge** type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  type Badge = TypedFrameNode<BadgeInterface, BadgeAttribute>;

  /**
   * Creates a FrameNode of the **Badge** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'Badge' } nodeType - Node type. Set to **'Badge'**.
   * @returns { Badge } FrameNode of the **Badge** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 14 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Badge'): Badge;

  /**
   * Represents a FrameNode of the **TextClock** type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  type TextClock = TypedFrameNode<TextClockInterface, TextClockAttribute>;

  /**
   * Creates a FrameNode of the **TextClock** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'TextClock' } nodeType - Node type. Set to **'TextClock'**.
   * @returns { TextClock } FrameNode of the **TextClock** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 14 dynamic
   */
  function createNode(context: UIContext, nodeType: 'TextClock'): TextClock;

  /**
   * Represents a FrameNode of the **TextTimer** type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  type TextTimer = TypedFrameNode<TextTimerInterface, TextTimerAttribute>;

  /**
   * Creates a FrameNode of the **TextTimer** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'TextTimer' } nodeType - Node type. Set to **'TextTimer'**.
   * @returns { TextTimer } FrameNode of the **TextTimer** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 14 dynamic
   */
  function createNode(context: UIContext, nodeType: 'TextTimer'): TextTimer;

  /**
   * Represents a FrameNode of the **Grid** type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  type Grid = TypedFrameNode<GridInterface, GridAttribute>;

  /**
   * Creates a FrameNode of the **Grid** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'Grid' } nodeType - Node type. Set to **'Grid'**.
   * @returns { Grid } FrameNode of the **Grid** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 14 dynamic
   */
  function createNode(context: UIContext, nodeType: 'Grid'): Grid;

  /**
   * Obtains the attributes of a **Grid** node. If the node is not created using ArkTS, cross-language access must be
   * enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.
   *
   * @param { FrameNode } node - Target node from which to obtain attributes.
   * @param { 'Grid' } nodeType - Node type. Set to **'Grid'**.
   * @returns { GridAttribute | undefined } Properties of the **Grid** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'Grid'): GridAttribute | undefined;

  /**
   * Binds a [Scroller]{@link Scroller} instance to the [Grid]{@link typeNode.Grid} node. Cross-language access must be
   * enabled for nodes not created via ArkTS; otherwise, an exception will be thrown. This API supports declaratively
   * created nodes since API version 26.0.0. Versions earlier than API version 26.0.0 do not support this.
   *
   * @param { FrameNode } node - Target node to which the scroll controller is bound.
   * @param { Scroller } controller - Scroll controller.
   * @param { 'Grid' } nodeType - Node type. Set to **'Grid'**.
   * @throws { BusinessError } 100023 - Parameter error. Possible causes: 1. The component type of the node
   *     is incorrect. 2. The node is null or undefined. 3. The controller is null or undefined.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable. Introduced in API version 20 and will not
   *     be thrown above API version 24. [since 20 - 24]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function bindController(node: FrameNode, controller: Scroller, nodeType: 'Grid'): void;

  /**
   * Obtains the **UIGridEvent** object held by the **Grid** node, which is used to set scroll events. If the node is
   * not created via ArkTS, whether cross-language access is supported must be set. If cross-language access is not
   * supported, **undefined** is returned. This API does not support nodes created in a declarative manner. The scroll
   * events set through this API coexist with declaratively defined events. The set scroll events do not override the
   * original declarative events. When both event callbacks are set, the declarative event callback takes precedence.
   *
   * @param { FrameNode } node - Target node.
   * @param { 'Grid' } nodeType - **Grid** node type for scroll event configuration.
   * @returns { UIGridEvent | undefined } **UIGridEvent** object for the **Grid** node, or **undefined** if it fails to
   *     be obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 19 dynamic
   */
  function getEvent(node: FrameNode, nodeType: 'Grid'): UIGridEvent | undefined;

  /**
   * Represents a FrameNode of the **GridItem** type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  type GridItem = TypedFrameNode<GridItemInterface, GridItemAttribute>;

  /**
   * Creates a FrameNode of the **GridItem** type.
   *
   * @param { UIContext } context - UI context for node creation.
   * @param { 'GridItem' } nodeType - Node type. Set to **'GridItem'**.
   * @returns { GridItem } FrameNode of the **GridItem** type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 14 dynamic
   */
  function createNode(context: UIContext, nodeType: 'GridItem'): GridItem;

  /**
   * Obtains the attributes of a **GridItem** node. If the node is not created using ArkTS, cross-language access must
   * be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes.
   *
   * @param { FrameNode } node - Target node from which to obtain attributes.
   * @param { 'GridItem' } nodeType - Node type. Set to **'GridItem'**.
   * @returns { GridItemAttribute | undefined } Properties of the **GridItem** node, or **undefined** if they fail to be
   *     obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  export function getAttribute(node: FrameNode, nodeType: 'GridItem'): GridItemAttribute | undefined;
}

/**
 * Provides lazy loading capabilities for FrameNode data, implementing API functionality through
 * [LazyForEach]{@link ../@internal/component/ets/lazy_for_each}. It is suitable for scenarios such as long lists where
 * node data needs to be loaded on demand, improving rendering performance and reducing memory usage.
 *
 * > **NOTE**
 * >
 * > Numeric input parameters (such as **start**, **count**, **from**, and **to**) in **NodeAdapter** APIs must not be
 * > negative. Negative input parameters are ignored and trigger no processing.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class NodeAdapter {
  /**
   * A constructor used to create a **NodeAdapter** object.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor();
  /**
   * Disposes of this **NodeAdapter** object. Bindings, if any, of the object will be cleared before the object is
   * disposed of.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dispose(): void;
  /**
   * Sets the total number of items in this node.
   *
   * @param { number } count - Total number of items.
   *     <br>Value range: [0, +∞).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set totalNodeCount(count: number);
  /**
   * Get the total number of node count.
   *
   * @returns { number } - Return the total number of node count.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get totalNodeCount(): number;
  /**
   * Reloads all items in this node. This API actually calls the
   * [onDataReloaded]{@link DataChangeListener.onDataReloaded()} API in **LazyForEach** to instruct the component to
   * reload all data.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  reloadAllItems(): void;
  /**
   * Reloads a specified number of items starting from a specific index.
   *
   * @param { number } start - Starting index of the items to reload.
   *     <br>Value range: [0, +∞).
   * @param { number } count - Number of the items to reload.
   *     <br>Value range: [0, +∞).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  reloadItem(start: number, count: number): void;
  /**
   * Removes a specified number of items starting from a specific index.
   *
   * @param { number } start - Starting index of the items to remove.
   *     <br>Value range: [0, +∞).
   * @param { number } count - Number of the items to remove.
   *     <br>Value range: [0, +∞).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  removeItem(start: number, count: number): void;
  /**
   * Inserts a specified number of items starting from a specific index.
   *
   * @param { number } start - Starting index of the items to insert.
   *     <br>Value range: [0, +∞).
   * @param { number } count - Number of the items to insert.
   *     <br>Value range: [0, +∞).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  insertItem(start: number, count: number): void;
  /**
   * Moves items from the starting index to the ending index.
   *
   * @param { number } from - Original index from which the data will be moved.
   *     <br>Value range: [0, +∞).
   * @param { number } to - Target index to which the data will be moved.
   *     <br>Value range: [0, +∞).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  moveItem(from: number, to: number): void;
  /**
   * Obtains all available items. Available nodes include both currently displayed and preloaded nodes. The number of
   * preloaded nodes can be configured by adjusting the **cachedCount** property of the parent container, following the
   * [usage constraints](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md#constraints) of
   * **LazyForEach**.
   *
   * @returns { Array<FrameNode> } Set of FrameNode data nodes.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getAllAvailableItems(): Array<FrameNode>;
  /**
   * Called when a FrameNode is attached to the NodeAdapter.
   *
   * > **NOTE**
   * >
   * > In versions earlier than API version 26.0.0, this callback is triggered when the host node is mounted to the main
   * > tree. If you set this callback by dynamically assigning a value, you can complete the setting after calling
   * > [attachNodeAdapter]{@link NodeAdapter#attachNodeAdapter} and before the host node is mounted to the main tree,
   * > and receive this callback when the host node is mounted to the main tree.
   * >
   * > Since API version 26.0.0, this callback is triggered immediately when the NodeAdapter is bound to the host node,
   * > rather than when the host node is mounted to the main node tree. At this point, the host node may not yet be
   * > mounted to the main node tree. If the callback logic depends on the node being mounted (for example, accessing
   * > layout information or executing animations), it is recommended to register
   * > [onAppear]{@link CommonMethod#onAppear} in this callback and place the relevant logic in **onAppear** for
   * > execution. If you set this callback by dynamically assigning a value, complete the setting before calling
   * > [attachNodeAdapter]{@link NodeAdapter#attachNodeAdapter}; otherwise, the callback may not be triggered.
   *
   * @param { FrameNode } target - FrameNode node bound to the NodeAdapter.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onAttachToNode?(target: FrameNode): void;
  /**
   * Called when detachment occurs.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDetachFromNode?(): void;
  /**
   * Called during node initialization or when new child nodes are detected. The **index** parameter enables custom ID
   * generation. Ensure that IDs remain unique across different index values.
   *
   * @param { number } index - Index of the loaded node.
   *     <br>Value range: [0, +∞).
   * @returns { number } Custom ID. Make sure the ID is unique.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onGetChildId?(index: number): number;
  /**
   * Called during node initialization or when new child nodes are detected. When adding child components, follow the
   * child component restrictions for declarative components. For example, **WaterFlow** only supports adding
   * **FlowItem** child nodes. The parent node uses the child node's index and key to determine whether the node is
   * being loaded for the first time or a new node is sliding into view.
   *
   * @param { number } index - Index of the loaded node.
   *     <br>Value range: [0, +∞).
   * @returns { FrameNode } FrameNode node you created.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onCreateChild?(index: number): FrameNode;
  /**
   * Called when a child node is about to be disposed. Nodes that are neither displayed on the screen nor within the
   * preload range are considered nodes about to be disposed.
   *
   * @param { number } id - ID of the child node to be disposed of.
   * @param { FrameNode } node - FrameNode node to be disposed of.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDisposeChild?(id: number, node: FrameNode): void;
  /**
   * Called when a loaded node is reused. Node reuse occurs when the key value of a cached node matches that of the node
   * to be reused.
   *
   * @param { number } id - ID of the node to be reused.
   * @param { FrameNode } node - FrameNode node to be reused.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onUpdateChild?(id: number, node: FrameNode): void;
  /**
   * Attaches a FrameNode to a NodeAdapter. Each node can be bound to only one NodeAdapter. Attempts to re-attach to a
   * NodeAdapter that has already been attached to will fail and return **false**.
   *
   * > **NOTE**
   * >
   * > The following components can be bound: **Column**, **Row**, **Stack**, **GridRow**, **Flex**, **Swiper**,
   * > **RelativeContainer**, **List**, **ListItemGroup**, **WaterFlow**, and **Grid**.
   *
   * @param { NodeAdapter } adapter - NodeAdapter class for lazy loading.
   * @param { FrameNode } node - Attached FrameNode node.
   * @returns { boolean } Attachment result. Returns **true** if the attachment is successful; returns **false**
   *     otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static attachNodeAdapter(adapter: NodeAdapter, node: FrameNode): boolean;
  /**
   * Detaches a FrameNode from its NodeAdapter.
   *
   * @param { FrameNode } node - FrameNode node to be detached.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static detachNodeAdapter(node: FrameNode): void;

  /**
   * Queries whether the current **NodeAdapter** object has been released from the reference to the backend entity node.
   * Each frontend node is bound to a corresponding backend entity node. After a node calls the **dispose** API to
   * release the binding, calling other APIs of this node may result in crashes or return default values. Due to service
   * requirements, there may be cases where a node's APIs are still called after the call to **dispose**. To address
   * this, this API is provided for you to check the validity of a node before operating on it, thereby avoiding
   * potential risks.
   *
   * @returns { boolean } Whether the reference to the backend node is released. The value **true** means that the
   *     reference to backend node is released, and **false** means the opposite.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  isDisposed(): boolean;
}