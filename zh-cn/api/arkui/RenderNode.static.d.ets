
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

import { DrawContext, Size, NodeOffset, NodePosition, Pivot, Scale, Translation, Matrix4, Rotation, Frame, NodeBorderRadiuses, ShapeMask, ShapeClip, NodeEdges, LengthMetricsUnit, BackgroundBlur, ContentBlur, ForegroundBlur } from 'arkui.Graphics';

import { BorderStyle } from '@ohos.arkui.component';

/**
 * Node将自定义节点的二级模块API组织在一起，方便开发者进行导出使用。
 *
 * > **说明：**
 *
 * > - 当前不支持在预览器中使用自定义节点。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class RenderNode {

  /**
   * Constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor();

  /**
   * 向渲染节点的子节点列表末尾追加子节点。
   *
   * @param { RenderNode } node - 待添加的节点。
   * @throws { BusinessError } 100025 - The parameter is invalid. Details about the invalid parameter and the reason
   *     are included in the error message. For example: "The parameter 'node' is invalid: its corresponding FrameNode
   *     cannot be adopted."
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  appendChild(node: RenderNode): void;

  /**
   * 向当前渲染节点添加子节点。
   *
   * @param { RenderNode } child - 待添加的子节点。
   * @param { RenderNode | null } sibling - 新节点将在此节点之后添加。当sibling为null时，将节点插入为该节点的第一个子节点。
   * @throws { BusinessError } 100025 - The parameter is invalid. Details about the invalid parameter and the reason
   *     are included in the error message. For example: "The parameter 'child' is invalid: its corresponding FrameNode
   *     cannot be adopted."
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  insertChildAfter(child: RenderNode, sibling: RenderNode | null): void;

  /**
   * Remove child from the current RenderNode.
   *
   * @param { RenderNode } node - The node will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  removeChild(node: RenderNode): void;

  /**
   * Clear children of the current RenderNode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  clearChildren(): void;

  /**
   * Get a child of the current RenderNode by index.
   *
   * @param { int } index - The index of the desired node in the children of RenderNode.
   * @returns { RenderNode | null } - Returns a RenderNode. When the required node does not exist, returns null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getChild(index: int): RenderNode | null;

  /**
   * Get the first child of the current RenderNode.
   *
   * @returns {  RenderNode | null } - Returns a RenderNode, which is first child of the current RenderNode.
   *     If current RenderNode does not have child node, returns null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getFirstChild(): RenderNode | null;

  /**
   * Get the next sibling node of the current RenderNode.
   *
   * @returns { RenderNode | null } - Returns a RenderNode. If current RenderNode does not have next
   *     sibling node, returns null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getNextSibling(): RenderNode | null;

  /**
   * Get the previous sibling node of the current RenderNode.
   *
   * @returns { RenderNode | null } - Returns a RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getPreviousSibling(): RenderNode | null;

  /**
   * Set the background color of the RenderNode.
   *
   * @param { int } color - The background color. Colors are defined as ARGB format represented by number.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set backgroundColor(color: int);

  /**
   * Get the background color of the RenderNode.
   *
   * @returns { int } - Returns a background color. Colors are defined as ARGB format represented by number.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get backgroundColor(): int;

  /**
   * Set whether the RenderNode clip to frame.
   *
   * @param { boolean } useClip - Whether the RenderNode clip to frame.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set clipToFrame(useClip: boolean);

  /**
   * Get whether the RenderNode clip to frame.
   *
   * @returns { boolean } - Returns whether the RenderNode clip to frame.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get clipToFrame(): boolean;

  /**
   * Set opacity of the RenderNode.
   *
   * @param { double } value - The opacity of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set opacity(value: double);

  /**
   * Get opacity of the RenderNode.
   *
   * @returns { double } Returns the opacity of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get opacity(): double;

  /**
   * Set frame size of the RenderNode.
   *
   * @param { Size } size - The size of the RenderNode frame.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set size(size: Size);

  /**
   * Get frame size of the RenderNode.
   *
   * @returns { Size } The size of the RenderNode frame.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get size(): Size;

  /**
   * Set frame position of the RenderNode.
   *
   * @param { NodePosition } position - The position of the RenderNode frame.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set position(position: NodePosition);

  /**
   * Get frame position of the RenderNode.
   *
   * @returns { NodePosition } - The position of the RenderNode frame.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get position(): NodePosition;

  /**
   * Set frame info of the RenderNode.
   *
   * @param { Frame } frame - The frame info of the RenderNode frame.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set frame(frame: Frame);

  /**
   * Get frame info of the RenderNode.
   *
   * @returns { Frame } - Returns frame info of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get frame(): Frame;

  /**
   * Set pivot of the RenderNode.
   *
   * @param { Pivot } pivot - The pivot of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set pivot(pivot: Pivot);

  /**
   * Get pivot vector of the RenderNode.
   *
   * @returns { Pivot } - Returns pivot vector of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get pivot(): Pivot;

  /**
   * Set scale of the RenderNode.
   *
   * @param { Scale } scale - The scale of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set scale(scale: Scale);

  /**
   * Get scale vector of the RenderNode.
   *
   * @returns { Scale } - Returns scale vector of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get scale(): Scale;

  /**
   * Set translation of the RenderNode.
   *
   * @param { Translation } translation - the translate vector of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set translation(translation: Translation);

  /**
   * Get translation vector of the RenderNode.
   *
   * @returns { Translation } - Returns translation vector of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get translation(): Translation;

  /**
   * Set rotation vector of the RenderNode.
   *
   * @param { Rotation } rotation - The rotation vector of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set rotation(rotation: Rotation);

  /**
   * Get rotation vector of the RenderNode.
   *
   * @returns { Rotation } - Returns rotation vector of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get rotation(): Rotation;

  /**
   * Set transform info of the RenderNode.
   *
   * @param { Matrix4 } transform - the transform info of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set transform(transform: Matrix4);

  /**
   * Get transform info of the RenderNode.
   *
   * @returns {Matrix4 } - Returns transform info of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get transform(): Matrix4;

  /**
   * 设置RenderNode的阴影颜色。
   *
   * @param { int } color - RenderNode的阴影颜色。颜色定义为数字表示的ARGB格式。
   *     <br>取值限定为整数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set shadowColor(color: int);

  /**
   * Get shadow color of the RenderNode.
   *
   * @returns { int } - Returns the shadow color of the RenderNode. Colors are defined as ARGB format represented
   *     by number.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get shadowColor(): int;

  /**
   *
   *
   * @param { NodeOffset } offset - 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set shadowOffset(offset: NodeOffset);

  /**
   * Get shadow offset of the RenderNode.
   *
   * @returns { NodeOffset } - Returns the shadow offset of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get shadowOffset(): NodeOffset;

  /**
   * Set label of the RenderNode.
   *
   * @param { string } label - the label of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set label(label: string);

  /**
   * Get label of the RenderNode.
   *
   * @returns { string } - Returns the label of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get label(): string;

  /**
   * Set shadow alpha of the RenderNode.
   *
   * @param { double } alpha - the shadow alpha of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set shadowAlpha(alpha: double);

  /**
   * Get shadow alpha of the RenderNode.
   *
   * @returns { double } - Returns the shadow alpha of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get shadowAlpha(): double;

  /**
   * Set shadow elevation of the RenderNode.
   *
   * @param { double } elevation - the shadow elevation of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set shadowElevation(elevation: double);

  /**
   * Get shadow elevation of the RenderNode.
   *
   * @returns { double } - Returns the shadow elevation of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get shadowElevation(): double;

  /**
   * Set shadow radius of the RenderNode.
   *
   * @param { double } radius - the shadow radius of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set shadowRadius(radius: double);

  /**
   * Get shadow radius of the RenderNode.
   *
   * @returns { double } - Returns the shadow radius of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get shadowRadius(): double;

  /**
   * Set border style of the RenderNode.
   *
   * @param { NodeEdges<BorderStyle> } style - the border style of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set borderStyle(style: NodeEdges<BorderStyle>);

  /**
   * Get border style of the RenderNode.
   *
   * @returns { NodeEdges<BorderStyle> | undefined } - Returns the border style of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get borderStyle(): NodeEdges<BorderStyle> | undefined;

  /**
   * Set border width of the RenderNode.
   *
   * @param { NodeEdges<double> } width - the border width of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set borderWidth(width: NodeEdges<double>);

  /**
   * 获取RenderNode的边框宽度。
   *
   * @returns { NodeEdges<double> | undefined } - Returns the border width of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get borderWidth(): NodeEdges<double> | undefined;

  /**
   * Set border color of the RenderNode.
   *
   * @param { NodeEdges<int> } color - the border color of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set borderColor(color: NodeEdges<int>);

  /**
   * 获取RenderNode的边框颜色。
   *
   * @returns { NodeEdges<int> | undefined } - Returns the border color of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get borderColor(): NodeEdges<int> | undefined;

  /**
   * Set border radius of the RenderNode.
   *
   * @param { NodeBorderRadiuses } radius - the border radius of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set borderRadius(radius: NodeBorderRadiuses);

  /**
   * 获取RenderNode的边界半径。
   *
   * @returns { NodeBorderRadiuses | undefined } - Returns the border radius of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get borderRadius(): NodeBorderRadiuses | undefined;

  /**
   * Set shape mask of the RenderNode.
   *
   * @param { ShapeMask } shapeMask - the shape mask of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set shapeMask(shapeMask: ShapeMask);

  /**
   * Get shape mask of the RenderNode.
   *
   * @returns { ShapeMask | undefined } - Returns the shape mask of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get shapeMask(): ShapeMask | undefined;

  /**
   * Set shape clip of the RenderNode.
   *
   * @param { ShapeClip } shapeClip - the shape clip of the RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set shapeClip(shapeClip: ShapeClip);

  /**
   * 获取RenderNode的形状裁剪属性
   *
   * @returns { ShapeClip } - 返回RenderNode的形状裁剪属性
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get shapeClip(): ShapeClip;

  /**
   * Mark whether to preferentially draw the node and its children.
   *
   * @param { boolean } isNodeGroup - The parameter indicates whether to preferentially draw the node and its children.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set markNodeGroup(isNodeGroup: boolean);

  /**
   * Get whether to preferentially draw the node and its children.
   *
   * @returns { boolean } - Return whether to preferentially draw the node and its children.
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get markNodeGroup(): boolean;

  /**
   * Draw Method. Executed when the associated RenderNode is onDraw.
   *
   * @param { DrawContext } context - The DrawContext will be used when executed draw method.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  draw(context: DrawContext): void;

  /**
   * Invalidate the RenderNode, which will cause a re-render of the RenderNode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  invalidate(): void;

  /**
   * Dispose the RenderNode immediately.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  dispose(): void;

  /**
   * 获取RenderNode是否已解绑。
   *
   * @returns { boolean } - 如果RenderNode已解绑，返回true，否则返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isDisposed(): boolean;

  /**
   * Set the length metrics unit of RenderNode.
   *
   * @param { LengthMetricsUnit } unit - The length metrics unit of RenderNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set lengthMetricsUnit(unit: LengthMetricsUnit);

  /**
   * Get the length metrics unit of RenderNode.
   *
   * @returns { LengthMetricsUnit } - Return the length metrics unit of RenderNode.
   * @default LengthMetricsUnit.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get lengthMetricsUnit(): LengthMetricsUnit;

  /**
   * 设置背景模糊效果。当参数为undefined时，移除背景模糊效果。
   *
   * @param { BackgroundBlur | undefined } blurValue - 背景模糊效果。undefined表示移除效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  set backgroundBlur(blurValue: BackgroundBlur | undefined);

  /**
   * 获取背景模糊效果。
   *
   * @returns { BackgroundBlur } - 返回背景模糊效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  get backgroundBlur(): BackgroundBlur;

  /**
   * 设置内容模糊效果。当参数为undefined时，移除内容模糊效果。
   *
   * @param { ContentBlur | undefined } blurValue - 内容模糊效果。undefined表示移除效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  set contentBlur(blurValue: ContentBlur | undefined);

  /**
   * 获取内容模糊效果。
   *
   * @returns { ContentBlur } - 返回内容模糊效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  get contentBlur(): ContentBlur;

  /**
   * 设置前景模糊效果。当参数为undefined时，移除前景模糊效果。
   *
   * @param { ForegroundBlur | undefined } blurValue - 前景模糊效果。undefined表示移除效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  set foregroundBlur(blurValue: ForegroundBlur | undefined);

  /**
   * 获取前景模糊效果。
   *
   * @returns { ForegroundBlur } - 返回前景模糊效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  get foregroundBlur(): ForegroundBlur;
}