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
 * The **RenderNode** module provides APIs for creating a RenderNode in custom drawing settings with C APIs.
 *
 * > **NOTE**
 * >
 * > - Avoid modifying RenderNodes in [BuilderNode]{@link BuilderNode}. The [FrameNode]{@link FrameNode} associated with
 * > BuilderNode is designed solely for mounting the BuilderNode as a child component. Modifying attributes or 
 * > operations on the FrameNode's child nodes or their corresponding RenderNodes may lead to undefined behavior, 
 * > including display, event handling, and stability issues.
 * >
 * > - RenderNode objects do not support JSON serialization.
 *
 * @file
 * @kit ArkUI
 */

import { BusinessError } from '../@ohos.base';

import { DrawContext, Size, Offset, Position, Pivot, Scale, Translation, Matrix4, Rotation, Frame, BorderRadiuses, ShapeMask, ShapeClip, Edges, LengthMetricsUnit, BackgroundBlur, ContentBlur, ForegroundBlur } from './Graphics';

/**
 * The **RenderNode** module provides APIs for creating a RenderNode in custom drawing settings with C APIs.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export class RenderNode {
  /**
   * Constructor used to create a RenderNode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  constructor();

  /**
   * Appends a child node to this RenderNode.
   *
   * @param { RenderNode } node - Child node to append.
   * @throws { BusinessError } 100025 - The parameter is invalid. Details about the invalid parameter and the reason
   *     are included in the error message. For example: "The parameter 'node' is invalid: its corresponding FrameNode
   *     cannot be adopted." [since 22]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  appendChild(node: RenderNode): void;

  /**
   * Inserts a child node after the specified child node of this RenderNode.
   *
   * @param { RenderNode } child - Child node to add.
   * @param { RenderNode | null } sibling - Node after which the new child node will be inserted. If this parameter is
   *     left empty, the new node is inserted before the first subnode.
   * @throws { BusinessError } 100025 - The parameter is invalid. Details about the invalid parameter and the reason
   *     are included in the error message. For example: "The parameter 'child' is invalid: its corresponding FrameNode
   *     cannot be adopted." [since 22]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  insertChildAfter(child: RenderNode, sibling: RenderNode | null): void;

  /**
   * Deletes the specified child node from this RenderNode.
   *
   * @param { RenderNode } node - Child node to delete.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  removeChild(node: RenderNode): void;

  /**
   * Clears all child nodes of this RenderNode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  clearChildren(): void;

  /**
   * Obtains the child node in the specified position of this RenderNode.
   *
   * @param { number } index - Index of the child node to obtain.
   * @returns { RenderNode | null } Child node obtained. If the RenderNode does not contain the specified child node,
   *     null is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getChild(index: number): RenderNode | null;

  /**
   * Obtains the first child node of this RenderNode.
   *
   * @returns {  RenderNode | null } First child node. If the RenderNode does not contain any child node, null is
   *     returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getFirstChild(): RenderNode | null;

  /**
   * Obtains the next sibling node of this RenderNode.
   *
   * @returns { RenderNode | null } Next sibling node of the current RenderNode. If the RenderNode does not have the
   *     next sibling node, null is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getNextSibling(): RenderNode | null;

  /**
   * Obtains the previous sibling node of this RenderNode.
   *
   * @returns { RenderNode | null } Previous sibling node of the current RenderNode. If the RenderNode does not have the
   *     previous sibling node, null is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getPreviousSibling(): RenderNode | null;

  /**
   * Sets the background color for this RenderNode.
   *
   * @param { number } color - Background color value, in ARGB format, for example, **0xE5E5E5**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set backgroundColor(color: number);

  /**
   * Get the background color of the RenderNode.
   *
   * @default 0X00000000 [since 11 - 11]
   * @returns { number } - Returns a background color. Colors are defined as ARGB format represented by number.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get backgroundColor(): number;

  /**
   * Sets whether to clip this RenderNode. The value **true** means to clip the RenderNode to its set size.
   *
   * @param { boolean } useClip - Whether to clip the RenderNode.<br>The value **true** means to clip the RenderNode,
   *     and **false** means the opposite.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set clipToFrame(useClip: boolean);

  /**
   * Get whether the RenderNode clip to frame.
   *
   * @default true [since 11 - 11]
   * @returns { boolean } - Returns whether the RenderNode clip to frame.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get clipToFrame(): boolean;

  /**
   * Sets the opacity for this RenderNode. If the value passed in is less than **0**, the opacity is set to **0**. If
   * the value passed in is greater than **1**, the opacity is set to **1**.
   *
   * @param { number } value - Opacity to set.<br>Value range: [0, 1]. A larger value indicates lower transparency.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set opacity(value: number);

  /**
   * Get opacity of the RenderNode.
   *
   * @default 1 [since 11 - 11]
   * @returns { number } Returns the opacity of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get opacity(): number;

  /**
   * Sets the size for this RenderNode.
   *
   * @param { Size } size - Size to set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set size(size: Size);

  /**
   * Get frame size of the RenderNode.
   *
   * @default Size { width: 0, height: 0 } [since 11 - 11]
   * @returns { Size } The size of the RenderNode frame.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get size(): Size;

  /**
   * Sets the position for this RenderNode.
   *
   * @param { Position } position - Position to set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set position(position: Position);

  /**
   * Get frame position of the RenderNode.
   *
   * @default Position { x: 0, y: 0 } [since 11 - 11]
   * @returns { Position } - The position of the RenderNode frame.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get position(): Position;

  /**
   * Sets the size and position for this RenderNode. When this parameter is used together with
   * [position]{@link RenderNode#set position(position: Position)} and [size]{@link RenderNode#set size(size: Size)},
   * the one that is set later in time is prioritized.
   *
   * @param { Frame } frame - Size and position to set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set frame(frame: Frame);

  /**
   * Get frame info of the RenderNode.
   *
   * @default Frame { x: 0, y: 0, width: 0, height: 0 } [since 11 - 11]
   * @returns { Frame } - Returns frame info of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get frame(): Frame;

  /**
   * Sets the pivot for this RenderNode, which affects the scaling and rotation effects of the RenderNode.
   *
   * @param { Pivot } pivot - Pivot to set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set pivot(pivot: Pivot);

  /**
   * Get pivot vector of the RenderNode.
   *
   * @default Pivot { x: 0.5, y: 0.5 } [since 11 - 11]
   * @returns { Pivot } - Returns pivot vector of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get pivot(): Pivot;

  /**
   * Sets the scale factor for this RenderNode.
   *
   * @param { Scale } scale - Scale factor to set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set scale(scale: Scale);

  /**
   * Get scale vector of the RenderNode.
   *
   * @default Scale { x: 1, y: 1 } [since 11 - 11]
   * @returns { Scale } - Returns scale vector of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get scale(): Scale;

  /**
   * Sets the translation amount for this RenderNode.
   *
   * @param { Translation } translation - Translation amount to set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set translation(translation: Translation);

  /**
   * Get translation vector of the RenderNode.
   *
   * @default Translation { x: 0, y: 0 } [since 11 - 11]
   * @returns { Translation } - Returns translation vector of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get translation(): Translation;

  /**
   * Sets the rotation angle for this RenderNode.
   *
   * @param { Rotation } rotation - Rotation angle to set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set rotation(rotation: Rotation);

  /**
   * Get rotation vector of the RenderNode.
   *
   * @default Rotation { x: 0, y: 0, z: 0 } [since 11 - 11]
   * @returns { Rotation } - Returns rotation vector of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get rotation(): Rotation;

  /**
   * Sets the transformation matrix for this RenderNode.
   *
   * @param { Matrix4 } transform - Transformation matrix to set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set transform(transform: Matrix4);

  /**
   * Get transform info of the RenderNode.
   *
   * @default Matrix4 [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ] [since 11 - 11]
   * @returns {Matrix4 } - Returns transform info of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get transform(): Matrix4;

  /**
   * Sets the shadow color for this RenderNode, in ARGB format. If
   * [shadowAlpha]{@link RenderNode#set shadowAlpha(alpha: number)} is set, the opacity is subject to **shadowAlpha**.
   *
   * @param { number } color - Shadow color to set, in ARGB format.<br>The value must be a valid ARGB color.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set shadowColor(color: number);

  /**
   * Get shadow color of the RenderNode.
   *
   * @default 0X00000000 [since 11 - 11]
   * @returns { number } - Returns the shadow color of the RenderNode. Colors are defined as ARGB format represented by
   *     number.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get shadowColor(): number;

  /**
   * Sets the shadow offset for this RenderNode.
   *
   * @param { Offset } offset - Shadow offset to set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set shadowOffset(offset: Offset);

  /**
   * Get shadow offset of the RenderNode.
   *
   * @default Offset { x: 0, y: 0 } [since 11 - 11]
   * @returns { Offset } - Returns the shadow offset of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get shadowOffset(): Offset;

  /**
   * Sets the label for this RenderNode. If the RenderNode was created with **new**, the set label will appear in the
   * node Inspector information.
   *
   * @param { string } label - Label of the RenderNode to set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set label(label: string);

  /**
   * Get label of the RenderNode.
   *
   * @returns { string } - Returns the label of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get label(): string;

  /**
   * Sets the alpha value of the shadow color for this RenderNode.
   *
   * @param { number } alpha - Alpha value of the shadow color to set.<br> The value must be a valid alpha value.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set shadowAlpha(alpha: number);

  /**
   * Get shadow alpha of the RenderNode.
   *
   * @default 0 [since 11 - 11]
   * @returns { number } - Returns the shadow alpha of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get shadowAlpha(): number;

  /**
   * Sets the shadow elevation for this RenderNode.
   *
   * @param { number } elevation - Shadow elevation to set.<br> Value range: [0, +∞).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set shadowElevation(elevation: number);

  /**
   * Get shadow elevation of the RenderNode.
   *
   * @default 0 [since 11 - 11]
   * @returns { number } - Returns the shadow elevation of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get shadowElevation(): number;

  /**
   * Sets the shadow blur radius for this RenderNode.
   *
   * @param { number } radius - Shadow blur radius to set.<br> Value range: [0, +∞).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set shadowRadius(radius: number);

  /**
   * Get shadow radius of the RenderNode.
   *
   * @default 0 [since 11 - 11]
   * @returns { number } - Returns the shadow radius of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get shadowRadius(): number;

  /**
   * Sets the border style for this RenderNode.
   *
   * @param { Edges<BorderStyle> } style - Border style of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set borderStyle(style: Edges<BorderStyle>);

  /**
   * Get border style of the RenderNode.
   *
   * @returns { Edges<BorderStyle> } - Returns the border style of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get borderStyle(): Edges<BorderStyle>;

  /**
   * Sets the border width for this RenderNode.
   *
   * @param { Edges<number> } width - Border width of the RenderNode, in vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set borderWidth(width: Edges<number>);

  /**
   * Get border width of the RenderNode.
   *
   * @default 0
   * @returns { Edges<number> } - Returns the border width of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get borderWidth(): Edges<number>;

  /**
   * Sets the border color for this RenderNode.
   *
   * @param { Edges<number> } color - Border color of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set borderColor(color: Edges<number>);

  /**
   * Get border color of the RenderNode.
   *
   * @default 0XFF000000
   * @returns { Edges<number> } - Returns the border color of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get borderColor(): Edges<number>;

  /**
   * Sets the border corner radius for this RenderNode.
   *
   * @param { BorderRadiuses } radius - Border corner radius of the RenderNode, in vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set borderRadius(radius: BorderRadiuses);

  /**
   * Get border radius of the RenderNode.
   *
   * @default 0
   * @returns { BorderRadiuses } - Returns the border radius of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get borderRadius(): BorderRadiuses;

  /**
   * Sets the mask for this RenderNode.
   *
   * @param { ShapeMask } shapeMask - Shape mask of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set shapeMask(shapeMask: ShapeMask);

  /**
   * Get shape mask of the RenderNode.
   *
   * @returns { ShapeMask } - Returns the shape mask of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get shapeMask(): ShapeMask;

  /**
   * Sets the clipping shape for this RenderNode.
   *
   * @param { ShapeClip } shapeClip - Clipping shape of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set shapeClip(shapeClip: ShapeClip);

  /**
   * Get shape clip of the RenderNode.
   *
   * @returns { ShapeClip } - Returns the shape clip of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get shapeClip(): ShapeClip;

  /**
   * Sets whether to enable drawing priority for this node and its child nodes. When this feature is enabled, visual
   * attributes like opacity are applied during composition after drawing completes. The configuration result is as
   * follows.
   *
   * ![markNodeGroup](docroot://reference/apis-arkui/figures/renderNode-markNodeGroup.png)
   *
   * @param { boolean } isNodeGroup - Whether to enable drawing priority for this node and its child nodes.<br>**true**:
   *     Enable drawing priority. **false**: Disable drawing priority.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set markNodeGroup(isNodeGroup: boolean);

  /**
   * Get whether to preferentially draw the node and its children.
   *
   * @default false
   * @returns { boolean } - Return whether to preferentially draw the node and its children.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get markNodeGroup(): boolean;

  /**
   * Performs drawing. You need to implement this API. It is called when the RenderNode performs drawing.
   *
   * Note: The Canvas provided in the [DrawContext]{@link Graphics:DrawContext} parameter is a temporary command-
   * recording canvas, not the actual rendering canvas of the node. For usage instructions, see
   * [Adjusting the Transformation Matrix of the Custom Drawing Canvas](docroot://ui/arkts-user-defined-arktsNode-renderNode.md#adjusting-the-transformation-matrix-of-the-custom-drawing-canvas).
   *
   * > **NOTE**
   * >
   * > During RenderNode initialization, the **draw** method is invoked twice. The first call occurs when the FrameNode
   * > is initially created, triggering the rendering process. The second call occurs when the modifier is initially
   * > set, which triggers drawing. All subsequent drawing processes are triggered by the modifier.
   *
   * @param { DrawContext } context - Graphics drawing context.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  draw(context: DrawContext): void;

  /**
   * Triggers the re-rendering of this RenderNode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  invalidate(): void;

  /**
   * Releases this RenderNode immediately.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dispose(): void;

  /**
   * Sets the metric unit used by attributes of this RenderNode.
   *
   * @param { LengthMetricsUnit } unit - Metric unit used by attributes of the current RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set lengthMetricsUnit(unit: LengthMetricsUnit);

  /**
   * Get the length metrics unit of RenderNode.
   *
   * @default LengthMetricsUnit.DEFAULT
   * @returns { LengthMetricsUnit } - Return the length metrics unit of RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get lengthMetricsUnit(): LengthMetricsUnit;

  /**
   * Checks whether this RenderNode object has released its reference to its backend entity node. Frontend nodes
   * maintain references to corresponding backend entity nodes. After a node calls the **dispose** API to release this
   * reference, subsequent API calls may cause crashes or return default values. This API facilitates validation of node
   * validity prior to operations, thereby mitigating risks in scenarios where calls after disposal are required.
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
   * Set the background blur effect.
   *
   * @param { BackgroundBlur | undefined } blurValue - The background blur effect.
   *     If undefined, the background blur effect will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  set backgroundBlur(blurValue: BackgroundBlur | undefined);

  /**
   * Get the background blur effect.
   *
   * @returns { BackgroundBlur } - Returns the background blur effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  get backgroundBlur(): BackgroundBlur;

  /**
   * Set the content blur effect.
   *
   * @param { ContentBlur | undefined } blurValue - The content blur effect.
   *     If undefined, the content blur effect will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  set contentBlur(blurValue: ContentBlur | undefined);

  /**
   * Get the content blur effect.
   *
   * @returns { ContentBlur } - Returns the content blur effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  get contentBlur(): ContentBlur;

  /**
   * Set the foreground blur effect.
   *
   * @param { ForegroundBlur | undefined } blurValue - The foreground blur effect.
   *     If undefined, the foreground blur effect will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  set foregroundBlur(blurValue: ForegroundBlur | undefined);

  /**
   * Get the foreground blur effect.
   *
   * @returns { ForegroundBlur } - Returns the foreground blur effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  get foregroundBlur(): ForegroundBlur;
}