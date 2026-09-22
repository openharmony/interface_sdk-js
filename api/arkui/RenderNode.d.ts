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
import { DrawContext, Size, Offset, Position, Pivot, Scale, Translation, Matrix4, Rotation, Frame, BorderRadiuses, ShapeMask, ShapeClip, Edges, LengthMetricsUnit, BackgroundBlur, ContentBlur, ForegroundBlur } from './Graphics';

/**
 * The **RenderNode** module provides APIs for creating a RenderNode in custom drawing settings with C APIs.
 * **RenderNode** also supports capabilities such as render node tree management (adding, removing, and querying child
 * nodes), visual attribute settings like background color and opacity, transformations (scaling, rotation, translation,
 * and transformation matrices), shadows, borders, masks and clipping, and blur effects. It is suitable for custom
 * rendering and node tree management scenarios in the stage model.
 *
 * > **NOTE**
 * >
 * > - Avoid modifying RenderNodes in [BuilderNode]{@link ./BuilderNode}. The [FrameNode]{@link ./FrameNode} associated
 * > with BuilderNode is designed solely for mounting the BuilderNode as a child component. Modifying attributes or
 * > operations on the FrameNode's child nodes or their corresponding RenderNodes may lead to undefined behavior,
 * > including display, event handling, and stability issues.
 * >
 * > - RenderNode objects do not support JSON serialization.
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
   * @param { number } index - Sequence number of the child node to query, starting from 0. Value range:
   *     [0, Number of child nodes - 1]. **null** is returned if the value is out of range. Negative indexes are not
   *     supported.
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
   * @param { number } color - Background color in ARGB format, for example, **0xFFE5E5E5**.
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
   * @param { boolean } useClip - Whether to clip the RenderNode.
   *     <br>The value **true** means to clip the RenderNode, and **false** means the opposite.
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
   * @param { number } value - Opacity to set. The value range is [0, 1], and a larger value indicates lower
   *     transparency.
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
   * Sets the size of the current RenderNode. When used together with [frame]{@link RenderNode#set frame(frame: Frame)},
   * the one set later prevails.
   *
   * @param { Size } size - Size to set for the RenderNode.
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
   * Sets the position of the current RenderNode. When used together with
   * [frame]{@link RenderNode#set frame(frame: Frame)}, the one set later prevails.
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
   * Sets the scale factor of the current RenderNode. Scaling is performed centered on the pivot set by
   * [pivot]{@link RenderNode#set pivot(pivot: Pivot)}.
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
   * Sets the rotation angle of the current RenderNode. Rotation is performed centered on the pivot set by
   * [pivot]{@link RenderNode#set pivot(pivot: Pivot)}.
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
   * @param { number } color - Shadow color to set for the RenderNode, in ARGB format.
   *     <br>Example: **0xFF00FF00**
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
   * Sets the label of the current RenderNode. If the current node is a RenderNode created through **new**, the label
   * information will be displayed in the attribute of the node's **Inspector** information.
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
   * Sets the alpha value of the shadow color of the current RenderNode. If this attribute is set, the opacity of the
   * shadow color is determined by this attribute, overriding the alpha value in
   * [shadowColor]{@link RenderNode#set shadowColor(color: number)}.
   *
   * @param { number } alpha - Alpha value of the shadow color to set for the RenderNode.
   *     <br>Value range: [0, 1]. Values out of range will be clamped to [0, 1].
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
   * Sets the shadow elevation of the current RenderNode. The shadow elevation simulates the height of the light source
   * relative to the node. A larger value results in a more diffused shadow.
   *
   * @param { number } elevation - Shadow elevation to set for the RenderNode, in vp.
   *     <br>Value range: [0, +∞). No shadow is generated when a negative number is passed in.
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
   * @param { number } radius - Blur radius of the shadow to set for the RenderNode, in vp.
   *     <br>Value range: [0, +∞). No shadow is drawn when a negative number is passed in.
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
   *     <br>Value range: [0, +∞). No border is drawn when a negative number or 0 is passed in.
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
   * @param { Edges<number> } color - Border color of the RenderNode, in ARGB format. Example: **0XFF000000**
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
   * attributes like opacity are applied during composition after drawing completes. This API is suitable for scenarios
   * where multiple semi-transparent nodes overlap and correct compositing of the opacity effect is required. The
   * configuration result is as follows.
   *
   * ![markNodeGroup](docroot://reference/apis-arkui/figures/renderNode-markNodeGroup.png)
   *
   * @param { boolean } isNodeGroup - Whether to enable drawing priority for this node and its child nodes.
   *     <br>**true**: enable drawing priority. **false**: disable drawing priority.
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
   * Note: The Canvas provided in the [DrawContext]{@link ./Graphics:DrawContext} parameter is a temporary command-
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
   * Triggers re-rendering of the RenderNode, during which the [draw]{@link RenderNode#draw} API is called. If you
   * inherit the RenderNode and implement the **draw** API, calling **invalidate()** will re-execute the drawing logic
   * in the **draw** API.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  invalidate(): void;

  /**
   * Immediately releases the current RenderNode. After this API is called, the RenderNode will release its reference to
   * the backend entity node. Calling APIs of this node again may cause a crash or return default values. You can query
   * whether the node has been released through the [isDisposed]{@link RenderNode#isDisposed} API.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dispose(): void;

  /**
   * Sets the metric unit used by attributes of the RenderNode. This API is suitable for scenarios that require precise
   * pixel control (such as using px) or following the system default layout (such as using DEFAULT).
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
   * Queries whether the current RenderNode object has released its reference to the backend entity node. After a node
   * calls the **dispose** API, calling other APIs may cause a crash or return default values. You are advised to call
   * this API to check the validity of the node before operating on it, to avoid potential risks.
   *
   * @returns { boolean } Whether the reference to the backend node is released. The value **true** indicates that the
   *     reference to the backend node is released, and **false** indicates the opposite.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  isDisposed(): boolean;

  /**
   * Sets the background blur effect of the current RenderNode, which blurs the background area of the node.
   *
   * @param { BackgroundBlur | undefined } blurValue - Background blur effect. The value **undefined** indicates that no
   *     background blur effect is applied.
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
   * Sets the content blur effect of the current RenderNode, which blurs the drawn content of the node.
   *
   * @param { ContentBlur | undefined } blurValue - Content blur effect. The value **undefined** indicates that no
   *     content blur effect is applied.
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
   * Sets the foreground blur effect of the current RenderNode, which blurs the foreground area of the node.
   *
   * @param { ForegroundBlur | undefined } blurValue - Foreground blur effect. The value **undefined** indicates that no
   *     foreground blur effect is applied.
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