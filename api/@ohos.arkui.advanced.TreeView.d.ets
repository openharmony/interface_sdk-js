/*
* Copyright (C) 2023-2025 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
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
 * Enumerates the listening types of tree view nodes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare enum TreeListenType {
  /**
   * Listens for click events of nodes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  NODE_CLICK = "NodeClick",
  /**
   * Listens for add events of nodes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  NODE_ADD = "NodeAdd",
  /**
   * Listens for delete events of nodes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  NODE_DELETE = "NodeDelete",
  /**
   * Listens for modify events of nodes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  NODE_MODIFY = "NodeModify",
  /**
   * Listens for move events of nodes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  NODE_MOVE = "NodeMove"
}

/**
 * Listener of the tree view component. You can bind it to the **TreeView** component and use it to listen for changes
 * of tree nodes. One listener can be bound to only one **TreeView** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare class TreeListener {
  /**
   * Declare class TreeListener
   *
   * @param { TreeListenType } type - Listening type.
   * @param { (callbackParam: CallbackParam) => void } callback - Node information.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  on(type: TreeListenType, callback: (callbackParam: CallbackParam) => void): void;

  /**
   * Declare class TreeListener
   *
   * @param { TreeListenType } type - Listening type.
   * @param { (callbackParam: CallbackParam) => void } callback - Node information.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  once(type: TreeListenType, callback: (callbackParam: CallbackParam) => void): void;

  /**
   * Registers a one-off listener.
   *
   * @param { TreeListenType } type - Listening type.
   * @param { (callbackParam: CallbackParam) => void } callback - Node information.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  off(type: TreeListenType, callback?: (callbackParam: CallbackParam) => void): void;
}

/**
 * Implements a **TreeListenerManager** object, which can be bound to a **TreeView** component to listen for changes of
 * tree nodes. One **TreeListenerManager** object can be bound to only one tree view component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare class TreeListenerManager {
  /**
   * Obtains a **TreeListenerManager** singleton object.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @return treeListenerManager instance
   */
  static getInstance(): TreeListenerManager;

  /**
   * Obtains a listener.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @return treeListener object
   */
  getTreeListener(): TreeListener;
}

/**
 * The **TreeView** component represents a tree view used to display a hierarchical list of items. Each item can contain
 * subitems, which may be expanded or collapsed.
 *
 * This component is applicable in productivity applications, such as side navigation bars in notepad, email, and
 * Gallery applications.
 *
 * > **NOTE**
 * >
 * > - If the **TreeView** component has [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} configured, the compiler toolchain automatically
 * > generates an additional **__Common__** node and mounts the universal attributes and universal events on this node
 * > rather than the **TreeView** component itself. As a result, the configured universal attributes and universal
 * > events may fail to take effect or behave as intended. For this reason, avoid using universal attributes and events
 * > with the **TreeView** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
@Component
export declare struct TreeView {
  /**
   * Node information of the tree view.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  treeController: TreeController;
}

/**
 * Declare CallbackParam
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export interface CallbackParam {
  /**
   * ID of the current child node.
   *
   * The value must be greater than or equal to 0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  currentNodeId: number;

  /**
   * ID of the current parent node.
   *
   * The value must be greater than or equal to -1.
   *
   * Default value: **-1**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  parentNodeId?: number;

  /**
   * Child index.
   *
   * The value must be greater than or equal to -1.
   *
   * Default value: **-1**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  childIndex?: number;
}

/**
 * Declare NodeParam
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export interface NodeParam {
  /**
   * ID of the parent node.
   *
   * The value must be greater than or equal to -1.
   *
   * Default value: -1. The root node ID is -1. If the value is less than -1, the setting does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  parentNodeId?: number;

  /**
   * Current child node ID.
   *
   * The value must be greater than or equal to -1.
   *
   * The value cannot be the root node ID or null. Otherwise, an exception is thrown. In addition, duplicate
   * **currentNodeId** values are not allowed.
   *
   * Default value: **-1**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  currentNodeId?: number;

  /**
   * Whether the node is a directory.
   *
   * Default value: **false**.
   *
   * **true**: The node is a directory. **false**: The node is not a directory.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  isFolder?: boolean;

  /**
   * Icon.
   *
   * The default value is an empty string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  icon?: ResourceStr;

  /**
   * Icon of the selected node.
   *
   * The default value is an empty string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedIcon?: ResourceStr;

  /**
   * Edit icon.
   *
   * The default value is an empty string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  editIcon?: ResourceStr;

  /**
   * Primary title.
   *
   * The default value is an empty string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  primaryTitle?: ResourceStr;

  /**
   * Secondary title.
   *
   * The default value is an empty string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  secondaryTitle?: ResourceStr;

  /**
   * Right-click child component bound to the node. The child component is decorated with @Builder.
   *
   * Default value: **() => void**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  container?: () => void;

  /**
   * Symbol edit icon, which has a higher priority than **editIcon**.
   *
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  symbolEditIconStyle?: SymbolGlyphModifier;

  /**
   * Symbol icon, which has higher priority than **icon**.
   *
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  symbolIconStyle?: SymbolGlyphModifier;

  /**
   * Symbol icon of the selected node., which has higher priority than **selectedIcon**.
   *
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 18 dynamic
   */
  symbolSelectedIconStyle?: SymbolGlyphModifier;
}

/**
 * Implements a **TreeController** object, which can be bound to a tree view component to control the node information
 * of the component. One **TreeController** object can be bound to only one tree view component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export declare class TreeController {
  /**
   * Removes the selected node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  removeNode(): void;

  /**
   * Modifies the selected node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  modifyNode(): void;

  /**
   * Adds a child node to the selected node.
   *
   * @param { NodeParam } nodeParam - Node information.
   * @returns { TreeController } Controller of the **TreeView** component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  addNode(nodeParam?: NodeParam): TreeController;

  /**
   * Refreshes the tree view. You can call this API to update the information about the current node.
   *
   * @param { number } parentId - ID of the parent node.
   *     <br>The value must be greater than or equal to -1.
   * @param { ResourceStr } parentSubTitle - Secondary text of the parent node.
   * @param { ResourceStr } currentSubtitle - Secondary text of the current node.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  refreshNode(parentId: number, parentSubTitle: ResourceStr, currentSubtitle: ResourceStr): void;

  /**
   * Builds a tree view. After a node is added, this API must be called to save the tree information.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  buildDone(): void;
}