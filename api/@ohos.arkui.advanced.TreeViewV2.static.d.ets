'use static'
/*
* Copyright (C) 2025-2026 Huawei Device Co., Ltd.
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
import { ComponentV2 } from './arkui/component/customComponent';
import { ResourceStr } from './arkui/component/units';
import { Param } from './arkui/stateManagement/decorator';
import { SymbolGlyphModifier } from './arkui/SymbolGlyphModifier';
import { Builder } from './arkui/component/builder';
/**
 * Callback method of event registration and processing.
 *
 * @typedef { function } OnChangedCallback
 * @param { CallbackParamV2 } callbackParam - The result of event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
declare type OnChangedCallback = (callbackParam: CallbackParamV2) => void;
/**
 * Declare class TreeListenerV2
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class TreeListenerV2 {
    /**
     * Node click event registration and processing.
     * The event will not be destroyed after being processed.
     *
     * @param { OnChangedCallback } callback
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    onNodeClick(callback: OnChangedCallback): void;

    /**
     * Node click event registration and processing.
     * After the event is processed once, it will be destroyed.
     *
     * @param { OnChangedCallback } callback
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    onceNodeClick(callback: OnChangedCallback): void;

    /**
     * Destroy node click callback event.
     *
     * @param { OnChangedCallback } [callback]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    offNodeClick(callback?: OnChangedCallback): void;

    /**
     * Node add event registration and processing.
     * The event will not be destroyed after being processed.
     *
     * @param { OnChangedCallback } callback
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    onNodeAdd(callback: OnChangedCallback): void;

    /**
     * Node add event registration and processing.
     * After the event is processed once, it will be destroyed.
     *
     * @param { OnChangedCallback } callback
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    onceNodeAdd(callback: OnChangedCallback): void;

    /**
     * Destroy node add callback event.
     *
     * @param { OnChangedCallback } [callback]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    offNodeAdd(callback?: OnChangedCallback): void;

    /**
     * Node delete event registration and processing.
     * The event will not be destroyed after being processed.
     *
     * @param { OnChangedCallback } callback
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    onNodeDelete(callback: OnChangedCallback): void;

    /**
     * Node delete event registration and processing.
     * After the event is processed once, it will be destroyed.
     *
     * @param { OnChangedCallback } callback
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    onceNodeDelete(callback: OnChangedCallback): void;

    /**
     * Destroy node delete callback event.
     *
     * @param { OnChangedCallback } [callback]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    offNodeDelete(callback?: OnChangedCallback): void;

    /**
     * Node modify event registration and processing.
     * The event will not be destroyed after being processed.
     *
     * @param { OnChangedCallback } callback
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    onNodeModify(callback: OnChangedCallback): void;

    /**
     * Node modify event registration and processing.
     * After the event is processed once, it will be destroyed.
     *
     * @param { OnChangedCallback } callback
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    onceNodeModify(callback: OnChangedCallback): void;

    /**
     * Destroy node modify callback event.
     *
     * @param { OnChangedCallback } [callback]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    offNodeModify(callback?: OnChangedCallback): void;

    /**
     * Node move event registration and processing.
     * The event will not be destroyed after being processed.
     *
     * @param { OnChangedCallback } callback
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    onNodeMove(callback: OnChangedCallback): void;

    /**
     * Node move event registration and processing.
     * After the event is processed once, it will be destroyed.
     *
     * @param { OnChangedCallback } callback
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    onceNodeMove(callback: OnChangedCallback): void;

    /**
     * Destroy node move callback event.
     *
     * @param { OnChangedCallback } [callback]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    offNodeMove(callback?: OnChangedCallback): void;
}

/**
 * Declare class TreeListenerManagerV2
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class TreeListenerManagerV2 {
    /**
     * Get instance of treeListenerManagerV2.
     *
     * @returns { TreeListenerManagerV2 } - Returns the treeListenerManagerV2 instance.
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    static getInstance(): TreeListenerManagerV2;
    /**
     * Get treeListenerV2.
     *
     * @returns { TreeListenerV2 } - Returns the treeListenerV2 object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    getTreeListener(): TreeListenerV2;
}

/**
 * Declare TreeViewV2 Component
 *
 * @struct { TreeViewV2 }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ComponentV2
export declare struct TreeViewV2 {
    /**
     * Node data source of TreeViewV2.
     *
     * @type { TreeControllerV2 }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    @Param
    treeControllerV2: TreeControllerV2;
    
   /**
    * The method to build component.
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 26.0.0 staticonly
    */
   @Builder
   build(): void;
}

/**
 * Declare CallbackParamV2
 *
 * @typedef CallbackParamV2
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface CallbackParamV2 {
    /**
     * Get the currentNodeId.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    currentNodeId: int;
    /**
     * ID of the current parent node.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    parentNodeId?: int;
    /**
     * Get the childIndex.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    childIndex?: int;
}
/**
 * Set subcomponent binded on tree item.
 *
 * @typedef { function } OnContainerCallback
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
declare type OnContainerCallback = () => void;
/**
 * Declare NodeParamV2
 *
 * @typedef NodeParamV2
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface NodeParamV2 {
    /**
     * Set the parentNodeId.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    parentNodeId?: int;

    /**
     * Set currentNodeId.
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    currentNodeId?: int;

    /**
     * Set catalog whether is floder.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    isFolder?: boolean;

    /**
     * Set the icon resource.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    icon?: ResourceStr;

    /**
     * Set the symbol resource.
     *
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    symbolIconStyle?: SymbolGlyphModifier;

    /**
     * Set selected icon resource.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    selectedIcon?: ResourceStr;

    /**
     * Set selected symbol resource.
     *
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    symbolSelectedIconStyle?: SymbolGlyphModifier;

    /**
     * Set edit icon resource.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    editIcon?: ResourceStr;

    /**
     * Set edit symbol resource.
     *
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    symbolEditIconStyle?: SymbolGlyphModifier;

    /**
     * Set primary title content.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    primaryTitle?: ResourceStr;

    /**
     * Set secondary title content.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    secondaryTitle?: ResourceStr;

    /**
     * set subcomponent binded on tree item.
     *
     * @type { ?OnContainerCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    container?: OnContainerCallback;
    
}

/**
 * Declare TreeControllerV2
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class TreeControllerV2 {
    /**
     * Delete a node.
     * Register an ON_ITEM_DELETE callback through the ListTreeListenerV2 mechanism to obtain the IDs of all deleted nodes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    removeNode(): void;

    /**
     * Modify the node name.
     * Register an ON_ITEM_MODIFY callback to obtain the ID, parent node ID, and node name of the modified node.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    modifyNode(): void;

    /**
     * Initialize the interface of the tree view. This interface is used to generate ListNodeDataSource data.
     * addNode is only designed for initialization. It can only be invoked during initialization.
     * A maximum of 50 directory levels can be added.
     * For details, see the comment description of NodeParam.
     *
     * @param { NodeParamV2 } [nodeParam] - Configuration information of the newly added node.
     * @returns { TreeControllerV2 } - ListTreeNode Tree view component proxy class.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    addNode(nodeParam?: NodeParamV2): TreeControllerV2;

    /**
     * This interface is called when a secondaryTitle needs to be updated
     *
     * @param { int } parentId - ID of the parent node.
     *     <br>Value range:The value must be greater than or equal to -1.
     * @param { ResourceStr } parentSubTitle - secondaryTitle of parent node.
     * @param { ResourceStr } currentSubtitle - secondaryTitle of current node.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    refreshNode(parentId: int, parentSubTitle: ResourceStr, currentSubtitle: ResourceStr): void;

    /**
     * After the initialization is complete by calling the addNode interface,
     * call this interface to complete initialization.
     * This interface must be called when you finish initializing the ListTreeViewV2 by addNode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    buildDone(): void;
}
