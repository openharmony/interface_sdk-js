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
import { UICommonEvent } from 'commonEvent';
import { CommonAttribute } from 'commonAttribute';
import { DrawContext } from './Graphics';

/**
 * Layout constraint, include the max size, the min size and the reference size for children to calculate percent.
 *
 * @interface LayoutConstraint
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare interface LayoutConstraint {
  /**
   * MaxSize
   *
   * @type { Size }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  maxSize: Size;
  
  /**
   * MinSize
   *
   * @type { Size }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  minSize: Size;
  
  /**
   * PercentReference, if the size unit of the child nodes is percentage, then they use PercentReference to calculate
   * the px size.
   *
   * @type { Size }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  percentReference: Size;
}

/**
 * Defines FrameNode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines FrameNode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
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
  /**
   * Constructor.
   *
   * @param { UIContext } uiContext - uiContext used to create the FrameNode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
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
  /**
   * Get the RenderNode in FrameNode.
   *
   * @returns { RenderNode | null } - Returns a RenderNode inside the FrameNode, or null if not contained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  getRenderNode(): RenderNode | null;

  /**
   * Return a flag to indicate whether the current FrameNode can be modified. Indicates whether the FrameNode supports appendChild, insertChildAfter, removeChild, clearChildren.
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
   * @returns {  FrameNode | null } - Returns a FrameNode, which is first child of the current FrameNode. If current FrameNode does not have child node, returns null.
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
   * @returns { FrameNode | null } - Returns a FrameNode. If current FrameNode does not have previous sibling node, returns null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  getPreviousSibling(): FrameNode | null;

  /**
   * Get the parent node of the current FrameNode.
   *
   * @returns { FrameNode | null } - Returns a FrameNode. If current FrameNode does not have parent node, returns null.
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

  /**
   * Get the position of the node relative to window.
   *
   * @returns { Position } - Returns position of the node relative to window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  getPositionToWindow(): Position;

  /**
   * Get the position of the node relative to its parent.
   *
   * @returns { Position } - Returns position of the node relative to its parent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  getPositionToParent(): Position;

  /**
   * Get the size of the FrameNode after measure, with unit PX.
   *
   * @returns { Size } - Returns the size of the FrameNode after measure, with unit PX.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  getMeasuredSize(): Size;

  /**
   * Get the offset to the parent of the FrameNode after layout, with unit PX.
   *
   * @returns { Position } - Returns the offset to the parent of the FrameNode after layout, with unit PX.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  getLayoutPosition(): Position;

  /**
   * Get the user config border width of the FrameNode.
   *
   * @returns { Edges<LengthMetrics> } - Returns the user config border width of the FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  getUserConfigBorderWidth(): Edges<LengthMetrics>;

  /**
   * Get the user config padding of the FrameNode.
   *
   * @returns { Edges<LengthMetrics> } - Returns the user config padding of the FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  getUserConfigPadding(): Edges<LengthMetrics>;

  /**
   * Get the user config margin of the FrameNode.
   *
   * @returns { Edges<LengthMetrics> } - Returns the user config margin of the FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  getUserConfigMargin(): Edges<LengthMetrics>;

  /**
   * Get the user config size of the FrameNode.
   *
   * @returns { SizeT<LengthMetrics> } - Returns the user config size of the FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  getUserConfigSize(): SizeT<LengthMetrics>;

  /**
   * Get the id of the FrameNode.
   *
   * @returns { string } - Returns the id of the FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  getId(): string;

  /**
   * Get the unique id of the FrameNode.
   *
   * @returns { number } - Returns the unique id of the FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  getUniqueId(): number;

  /**
   * Get the type of the FrameNode. The type is the name of component, for example, the nodeType of Button is "Button",
   * and the nodeType of custom  component is "__Common__".
   *
   * @returns { string } - Returns the type of the FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  getNodeType(): string;

  /**
   * Get the opacity of the FrameNode.
   *
   * @returns { number } - Returns the opacity of the FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  getOpacity(): number;

  /**
   * Get if the FrameNode is visible.
   *
   * @returns { boolean } - Returns if the FrameNode is visible.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  isVisible(): boolean;

  /**
   * Get if the FrameNode is clip to frame.
   *
   * @returns { boolean } - Returns if the FrameNode is clip to frame.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  isClipToFrame(): boolean;

  /**
   * Get if the FrameNode is attached.
   *
   * @returns { boolean } - Returns if the FrameNode is attached.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  isAttached(): boolean;

  /**
   * Get the inspector information of the FrameNode.
   *
   * @returns { Object } - Returns the inspector information of the FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  getInspectorInfo(): Object;

  /**
   * * Get the custom property of the component corresponding to this FrameNode.
   *
   * @param { string } name - the name of the custom property.
   * @returns { Object | undefined } - Returns the value of the custom property.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  getCustomProperty(name: string): Object | undefined;

  /**
   * Set commonEvent response to the current FrameNode.
   *
   * @returns { UICommonEvent } - Returns a Object inside the FrameNode, which is used to set callbacks about different events.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  get commonEvent(): UICommonEvent;

  /**
   * Get the CommonAttribute of the current FrameNode.
   *
   * @returns { CommonAttribute } - Returns the CommonAttribute which is used to modify the common attributes of the FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  get commonAttribute(): CommonAttribute;

  /**
   * Draw Method. Executed when the associated RenderNode in the current FrameNode is onDraw.
   *
   * @param { DrawContext } context - The DrawContext will be used when executed draw method.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  onDraw?(context: DrawContext): void;

  /**
   * Method to measure the FrameNode and its content to determine the measured size. Use this method to override the
   * default measure method when measuring the FrameNode.
   *
   * @param { LayoutConstraint } constraint - The layout constraint of the node, will be used when executed measure
   * method.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  onMeasure(constraint: LayoutConstraint): void;

  /**
   * Method to assign a position to the FrameNode and each of its children. Use this method to override the
   * default layout method.
   *
   * @param { Position } position - The position of the node, will be used when executed layout method.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  onLayout(position: Position): void;

  /**
   * Set the size of the FrameNode after measure, with unit PX.
   *
   * @param { Size } size - The size of the FrameNode after measure.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  setMeasuredSize(size: Size): void;

  /**
   * Set the position to the parent of the FrameNode after layout, with unit PX.
   *
   * @param { Position } position - The position to the parent of the FrameNode after layout.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  setLayoutPosition(position: Position): void;

  /**
   * This is called to find out how big the FrameNode should be. The parent node supplies constraint information. The
   * actual measurement work of the FrameNode is performed in onMeasure or the default measure method.
   *
   * @param { LayoutConstraint } constraint - The layout constraint of the node, supplied by the parent node.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  measure(constraint: LayoutConstraint): void;

  /**
   * This is called to assign position to the FrameNode and all of its descendants. The position is used to init
   * the position of the frameNode, and the actual layout work of FrameNode is performed in onLayout or the default
   * layout method.
   *
   * @param { Position } position - The position of the node, will be used when executed the layout method.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  layout(position: Position): void;

  /**
   * Mark the frame node as need layout.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  setNeedsLayout(): void;

  /**
   * Invalidate the RenderNode in the FrameNode, which will cause a re-render of the RenderNode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  invalidate(): void;

  /**
   * Get the position of the node relative to screen.
   *
   * @returns { Position } - Returns position of the node relative to screen.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  getPositionToScreen(): Position;

  /**
   * Get the position of the node relative to window with transform.
   *
   * @returns { Position } - Returns position of the node relative to window with transform.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  getPositionToWindowWithTransform(): Position;

  /**
   * Get the position of the node relative to its parent with transform.
   *
   * @returns { Position } - Returns position of the node relative to its parent with transform.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  getPositionToParentWithTransform(): Position;

  /**
   * Get the position of the node relative to screen with transform.
   *
   * @returns { Position } - Returns position of the node relative to screen with transform.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  getPositionToScreenWithTransform(): Position;
}