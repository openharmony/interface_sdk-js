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

import { UIContext } from '../@ohos.arkui.UIContext';
import { RenderNode } from './RenderNode';
/**
 * Defines FrameNode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export class FrameNode {
  /**
   * Constructor.
   *
   * @param { UIContext } uiContext - uiContext used to create the FrameNode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  constructor(uiContext: UIContext);

  /**
   * Get the RenderNode in FrameNode.
   *
   * @returns { RenderNode | null } - Returns a RenderNode inside the FrameNode, or null if not contained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  getRenderNode(): RenderNode | null;

  /**
   * Return a flag to indicate whether the current FrameNode can be modified.
   *
   * @returns { boolean } - Returns true if the FrameNode can be modified, otherwise return false.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  isModifiable(): boolean;

  /**
   * Add child to the end of the FrameNode's children.
   *
   * @param { FrameNode } node - The node will be added.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  appendChild(node: FrameNode): void;

  /**
   * Add child to the current FrameNode.
   *
   * @param { FrameNode } child - The node will be added.
   * @param { FrameNode | null } sibling - The new node is added after this node. When sibling is null, insert node as the first children of the node.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  insertChildAfter(child: FrameNode, sibling: FrameNode | null): void;

  /**
   * Remove child from the current FrameNode.
   *
   * @param { FrameNode } node - The node will be removed.
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  removeChild(node: FrameNode): void;

  /**
   * Clear children of the current FrameNode.
   * 
   * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  clearChildren(): void;

  /**
   * Get a child of the current FrameNode by index.
   *
   * @param { number } index - The index of the desired node in the children of FrameNode.
   * @returns { FrameNode | null } - Returns a FrameNode. When the required node does not exist, returns null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  getChild(index: number): FrameNode | null;

  /**
   * Get the first child of the current FrameNode.
   *
   * @returns {  FrameNode | null } - Returns a FrameNode, which is first child of the current FrameNode.
   * If current FrameNode does not have child node, returns null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  getFirstChild(): FrameNode | null;

  /**
   * Get the next sibling node of the current FrameNode.
   *
   * @returns { FrameNode | null } - Returns a FrameNode. If current FrameNode does not have next sibling node, returns null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  getNextSibling(): FrameNode | null;

  /**
   * Get the previous sibling node of the current FrameNode.
   *
   * @returns { FrameNode | null } - Returns a FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  getPreviousSibling(): FrameNode | null;

  /**
   * Get the parent node of the current FrameNode.
   *
   * @returns { FrameNode | null } - Returns a FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  getParent(): FrameNode | null;

  /**
   * Get the children count of the current FrameNode.
   *
   * @returns { number } - Returns the number of the children of the current FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  getChildrenCount(): number;

  /**
   * Dispose the FrameNode immediately.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  dispose(): void;
}
