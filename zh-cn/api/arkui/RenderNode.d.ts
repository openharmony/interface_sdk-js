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
 * 提供自绘制渲染节点RenderNode，支持开发者通过C API进行开发，完成自定义绘制需求。RenderNode还支持渲染节点树管理（添加、删除、查询子节点）、背景色与不透明度等视觉属性设置、变换（缩放、旋转、平移、变换矩阵）、阴影
 * 、边框、遮罩与裁剪、模糊效果等能力，适用于在Stage模型下进行自定义渲染与节点树管理的场景。
 * 
 * > **说明：**
 * >
 * > - 不建议对[BuilderNode]{@link ./BuilderNode}中的RenderNode进行修改操作。BuilderNode中持有的[FrameNode]{@link ./FrameNode}仅用于将该
 * > BuilderNode作为子节点挂载到其他FrameNode上，对该FrameNode或对应的RenderNode进行属性设置与子节点操作可能会产生未定义行为，包括但不限于显示异常、事件异常、稳定性问题等。
 * >
 * > - RenderNode对象不支持使用JSON序列化。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export class RenderNode {
  /**
   * RenderNode的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  constructor();

  /**
   * 在RenderNode最后一个子节点后添加新的子节点。
   *
   * @param { RenderNode } node - 需要添加的RenderNode。
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
   * 在RenderNode指定子节点之后添加新的子节点。
   *
   * @param { RenderNode } child - 需要添加的子节点。
   * @param { RenderNode | null } sibling - 新节点将插入到该节点之后。若该参数设置为空，则新节点将插入到首个子节点之前。
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
   * 从RenderNode中删除指定的子节点。
   *
   * @param { RenderNode } node - 需要删除的子节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  removeChild(node: RenderNode): void;

  /**
   * 清除当前RenderNode的所有子节点。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  clearChildren(): void;

  /**
   * 获取当前RenderNode指定位置的子节点。
   *
   * @param { number } index - 需要查询的子节点的序列号，从0开始。取值范围：[0, 子节点数量-1]，超出范围时返回null。不支持负索引。
   * @returns { RenderNode | null } 子节点。若该RenderNode不包含所查询的子节点，则返回空对象null。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getChild(index: number): RenderNode | null;

  /**
   * 获取当前RenderNode的第一个子节点。
   *
   * @returns {  RenderNode | null } 首个子节点。若该RenderNode不包含子节点，则返回空对象null。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getFirstChild(): RenderNode | null;

  /**
   * 获取当前RenderNode的下一个同级节点。
   *
   * @returns { RenderNode | null } 当前RenderNode的下一个同级节点。若该RenderNode不包含下一个同级节点，则返回空对象null。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getNextSibling(): RenderNode | null;

  /**
   * 获取当前RenderNode的上一个同级节点。
   *
   * @returns { RenderNode | null } 当前RenderNode的上一个同级节点。若该RenderNode不包含上一个同级节点，则返回空对象null。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getPreviousSibling(): RenderNode | null;

  /**
   * 设置当前RenderNode的背景颜色。
   *
   * @param { number } color - 背景颜色值，ARGB格式，示例：0xFFE5E5E5。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set backgroundColor(color: number);

  /**
   * 获取当前RenderNode的背景颜色。
   *
   * @default 0X00000000 [since 11 - 11]
   * @returns { number } - 当前RenderNode的背景颜色，默认值为0X00000000。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get backgroundColor(): number;

  /**
   * 设置是否对当前RenderNode剪裁。若设置为true，则超出该RenderNode大小的部分将会被截断。
   *
   * @param { boolean } useClip - 设置是否进行剪裁。
   *     <br>true表示对当前RenderNode剪裁，false表示不对当前RenderNode剪裁。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set clipToFrame(useClip: boolean);

  /**
   * 获取当前RenderNode是否需要进行剪裁。
   *
   * @default true [since 11 - 11]
   * @returns { boolean } - 当前RenderNode是否需要进行剪裁，默认值为true。<br>true表示对当前RenderNode剪裁，false表示不对当前RenderNode剪裁。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get clipToFrame(): boolean;

  /**
   * 设置当前RenderNode的不透明度。若输入的数值小于0，会被视为0。若输入的数值大于1，会被视为1。
   *
   * @param { number } value - 将要设置的不透明度，取值范围：[0, 1]，值越大透明度越低。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set opacity(value: number);

  /**
   * 获取当前RenderNode的不透明度。
   *
   * @default 1 [since 11 - 11]
   * @returns { number } 当前RenderNode的不透明度，默认值为1，不透明。<br>取值范围：[0, 1]。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get opacity(): number;

  /**
   * 设置当前RenderNode的大小。当和[frame]{@link RenderNode#set frame(frame: Frame)}同时使用时，以后设置的为准。
   *
   * @param { Size } size - 将要设置的RenderNode的大小。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set size(size: Size);

  /**
   * 获取当前RenderNode的大小。
   *
   * @default Size { width: 0, height: 0 } [since 11 - 11]
   * @returns { Size } 当前RenderNode的大小，默认值为{ width: 0, height: 0 }。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get size(): Size;

  /**
   * 设置当前RenderNode的位置。当和[frame]{@link RenderNode#set frame(frame: Frame)}同时使用时，以后设置的为准。
   *
   * @param { Position } position - 将要设置的RenderNode的位置。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set position(position: Position);

  /**
   * 获取当前RenderNode的位置。
   *
   * @default Position { x: 0, y: 0 } [since 11 - 11]
   * @returns { Position } - 获取当前RenderNode的位置，默认位置为{ x: 0, y: 0 }。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get position(): Position;

  /**
   * 设置当前RenderNode的大小和位置。当和[position]{@link RenderNode#set position(position: Position)}、
   * [size]{@link RenderNode#set size(size: Size)}同时使用时，以后设置的为准。
   *
   * @param { Frame } frame - 将要设置的RenderNode的大小和位置。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set frame(frame: Frame);

  /**
   * 获取当前RenderNode的大小和位置。
   *
   * @default Frame { x: 0, y: 0, width: 0, height: 0 } [since 11 - 11]
   * @returns { Frame } - 获取当前RenderNode的大小和位置，默认值为{ x: 0, y: 0, width: 0, height: 0 }。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get frame(): Frame;

  /**
   * 设置当前RenderNode的轴心，影响RenderNode的缩放和旋转效果。
   *
   * @param { Pivot } pivot - 将要设置的RenderNode的轴心。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set pivot(pivot: Pivot);

  /**
   * 获取当前RenderNode的轴心。
   *
   * @default Pivot { x: 0.5, y: 0.5 } [since 11 - 11]
   * @returns { Pivot } - 获取当前RenderNode的轴心，默认值为{ x: 0.5, y: 0.5}。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get pivot(): Pivot;

  /**
   * 设置当前RenderNode的缩放比例。缩放效果以[pivot]{@link RenderNode#set pivot(pivot: Pivot)}设置的轴心为中心进行缩放。
   *
   * @param { Scale } scale - 将要设置的RenderNode的缩放比例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set scale(scale: Scale);

  /**
   * 获取当前RenderNode的缩放比例。
   *
   * @default Scale { x: 1, y: 1 } [since 11 - 11]
   * @returns { Scale } - 获取当前RenderNode的缩放比例，默认值为{ x: 1, y: 1 }。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get scale(): Scale;

  /**
   * 设置当前RenderNode的平移量。
   *
   * @param { Translation } translation - 将要设置的RenderNode的平移量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set translation(translation: Translation);

  /**
   * 获取当前RenderNode的平移量。
   *
   * @default Translation { x: 0, y: 0 } [since 11 - 11]
   * @returns { Translation } - 获取当前RenderNode的平移量，默认值为{ x: 0, y: 0 }。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get translation(): Translation;

  /**
   * 设置当前RenderNode的旋转角度。旋转效果以[pivot]{@link RenderNode#set pivot(pivot: Pivot)}设置的轴心为中心进行旋转。
   *
   * @param { Rotation } rotation - 将要设置的RenderNode的旋转角度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set rotation(rotation: Rotation);

  /**
   * 获取当前RenderNode的旋转角度。
   *
   * @default Rotation { x: 0, y: 0, z: 0 } [since 11 - 11]
   * @returns { Rotation } - 将要设置的RenderNode的旋转角度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get rotation(): Rotation;

  /**
   * 设置当前RenderNode的变换矩阵。
   *
   * @param { Matrix4 } transform - 将要设置的RenderNode的变换矩阵。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set transform(transform: Matrix4);

  /**
   * 获取当前RenderNode的变换矩阵。默认值为：
   * ```ts
   * [
   *   1, 0, 0, 0,
   *   0, 1, 0, 0,
   *   0, 0, 1, 0,
   *   0, 0, 0, 1
   * ]
   * ```
   *
   * @default Matrix4 [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ] [since 11 - 11]
   * @returns {Matrix4 } - 当前RenderNode的变换矩阵，默认值为单位矩阵。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get transform(): Matrix4;

  /**
   * 设置当前RenderNode的阴影颜色，ARGB格式。若设置了[shadowAlpha]{@link RenderNode#set shadowAlpha(alpha: number)}，则不透明度以shadowAlpha为准。
   *
   * @param { number } color - 将要设置的RenderNode的阴影颜色，ARGB格式。
   *     <br>示例：0xFF00FF00。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set shadowColor(color: number);

  /**
   * 获取当前RenderNode的阴影颜色。
   *
   * @default 0X00000000 [since 11 - 11]
   * @returns { number } - 当前RenderNode的阴影颜色，ARGB格式，默认值为0X00000000。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get shadowColor(): number;

  /**
   * 设置当前RenderNode的阴影偏移。
   *
   * @param { Offset } offset - 将要设置的RenderNode的阴影偏移。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set shadowOffset(offset: Offset);

  /**
   * 获取当前RenderNode的阴影偏移。
   *
   * @default Offset { x: 0, y: 0 } [since 11 - 11]
   * @returns { Offset } - 当前RenderNode的阴影偏移，默认值为{ x: 0, y: 0 }。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get shadowOffset(): Offset;

  /**
   * 设置当前RenderNode的标签。若当前节点是通过new创建的RenderNode，则设置的标签信息会显示在节点Inspector信息的属性中。
   *
   * @param { string } label - 将要设置的RenderNode的标签。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set label(label: string);

  /**
   * 获取当前RenderNode的标签。
   *
   * @returns { string } - 当前RenderNode的标签，默认值为""。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get label(): string;

  /**
   * 设置当前RenderNode的阴影颜色的Alpha值。若设置了该属性，则阴影颜色的不透明度以该属性为准，覆盖
   * [shadowColor]{@link RenderNode#set shadowColor(color: number)}中的Alpha值。
   *
   * @param { number } alpha - 将要设置的RenderNode的阴影颜色的Alpha值。
   *     <br> 取值范围：[0, 1]。超出范围的值会被钳位到[0, 1]。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set shadowAlpha(alpha: number);

  /**
   * 获取当前RenderNode的阴影颜色的Alpha值。
   *
   * @default 0 [since 11 - 11]
   * @returns { number } - 当前RenderNode的阴影颜色的Alpha值，默认值为0。<br>取值范围：[0, 1]。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get shadowAlpha(): number;

  /**
   * 设置当前RenderNode的阴影的光照高度。光照高度用于模拟光源相对于节点的高度，值越大阴影越扩散。
   *
   * @param { number } elevation - 将要设置的RenderNode的阴影的光照高度，单位为vp。
   *     <br>取值范围：[0, +∞)。传入负数时不产生光照阴影。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set shadowElevation(elevation: number);

  /**
   * 获取当前RenderNode的阴影的光照高度。
   *
   * @default 0 [since 11 - 11]
   * @returns { number } - 当前RenderNode的阴影的光照高度，默认值为0。 <br> 取值范围：[0, +∞)。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get shadowElevation(): number;

  /**
   * 设置当前RenderNode的阴影模糊半径。
   *
   * @param { number } radius - 将要设置的RenderNode的阴影模糊半径，单位为vp。
   *     <br>取值范围：[0, +∞)。传入负数时不绘制阴影。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  set shadowRadius(radius: number);

  /**
   * 获取当前RenderNode的阴影模糊半径。
   *
   * @default 0 [since 11 - 11]
   * @returns { number } - 当前RenderNode的阴影模糊半径，默认值为0。<br> 取值范围：[0, +∞)。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get shadowRadius(): number;

  /**
   * 设置当前RenderNode的边框样式。
   *
   * @param { Edges<BorderStyle> } style - RenderNode的边框样式。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set borderStyle(style: Edges<BorderStyle>);

  /**
   * 获取当前RenderNode的边框样式。
   *
   * @returns { Edges<BorderStyle> } - RenderNode的边框样式，默认所有边框样式为BorderStyle.Solid。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get borderStyle(): Edges<BorderStyle>;

  /**
   * 设置当前RenderNode的边框宽度。
   *
   * @param { Edges<number> } width - RenderNode的边框宽度，单位为vp。
   *     <br>取值范围：[0, +∞)。传入负数或0时不绘制边框。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set borderWidth(width: Edges<number>);

  /**
   * 获取当前RenderNode的边框宽度。
   *
   * @default 0
   * @returns { Edges<number> } - RenderNode的边框宽度，默认所有边框宽度为0vp。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get borderWidth(): Edges<number>;

  /**
   * 设置当前RenderNode的边框颜色。
   *
   * @param { Edges<number> } color - RenderNode的边框颜色，ARGB格式，示例：0XFF000000。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set borderColor(color: Edges<number>);

  /**
   * 获取当前RenderNode的边框颜色。
   *
   * @default 0XFF000000
   * @returns { Edges<number> } - RenderNode的边框颜色，默认所有边框颜色为0XFF000000。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get borderColor(): Edges<number>;

  /**
   * 设置当前RenderNode的边框圆角。
   *
   * @param { BorderRadiuses } radius - RenderNode的边框圆角，单位为vp。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set borderRadius(radius: BorderRadiuses);

  /**
   * 获取当前RenderNode的边框圆角。
   *
   * @default 0
   * @returns { BorderRadiuses } - RenderNode的边框圆角，默认所有边框圆角为0vp。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get borderRadius(): BorderRadiuses;

  /**
   * 设置当前RenderNode的遮罩。
   *
   * @param { ShapeMask } shapeMask - RenderNode的遮罩。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set shapeMask(shapeMask: ShapeMask);

  /**
   * 获取当前RenderNode的遮罩。
   *
   * @returns { ShapeMask } - RenderNode的遮罩，默认无遮罩效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get shapeMask(): ShapeMask;

  /**
   * 设置当前RenderNode的裁剪形状。
   *
   * @param { ShapeClip } shapeClip - RenderNode的裁剪形状。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set shapeClip(shapeClip: ShapeClip);

  /**
   * 获取当前RenderNode的裁剪形状。
   *
   * @returns { ShapeClip } - RenderNode的裁剪形状，默认无裁剪效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get shapeClip(): ShapeClip;

  /**
   * 标记是否优先绘制节点及其子节点。若设置为true，则透明度等属性将在节点绘制完毕后再进行合成，适用于多个半透明节点重叠且需要正确合成透明度效果的场景。设置效果如下：
   * 
   * ![markNodeGroup](docroot://reference/apis-arkui/figures/renderNode-markNodeGroup.png)
   *
   * @param { boolean } isNodeGroup - 设置是否优先绘制节点及其子节点。
   *     <br>true表示优先绘制节点及其子节点，false表示不是优先绘制节点及其子节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set markNodeGroup(isNodeGroup: boolean);

  /**
   * 获取当前节点是否标记了优先绘制。
   *
   * @default false
   * @returns { boolean } - 当前节点是否标记了优先绘制。
   *     <br>true表示当前节点标记了优先绘制，false表示当前节点没有标记优先绘制。
   *     <br>默认值为false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get markNodeGroup(): boolean;

  /**
   * 绘制方法，需要开发者进行实现。该方法会在RenderNode进行绘制时被调用。
   * 
   * 该接口的[DrawContext]{@link ./Graphics:DrawContext}中的Canvas是用于记录指令的临时Canvas，并非节点的真实Canvas。使用请参见
   * [调整自定义绘制Canvas的变换矩阵](docroot://ui/arkts-user-defined-arktsNode-renderNode.md#调整自定义绘制canvas的变换矩阵)。
   * 
   * > **说明：**
   * >
   * > RenderNode初始化时，会调用两次draw方法。第一次调用是在首次创建FrameNode时触发Render流程，第二次调用是在首次设置modifier时触发绘制。后续绘制流程皆由modifier触发。
   *
   * @param { DrawContext } context - 图形绘制上下文。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  draw(context: DrawContext): void;

  /**
   * 该方法会触发RenderNode的重新渲染，重新渲染时会调用[draw]{@link RenderNode#draw}方法。若开发者继承了RenderNode并实现了draw方法，调用invalidate()后将重新执行draw方
   * 法中的绘制逻辑。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  invalidate(): void;

  /**
   * 立即释放当前RenderNode。调用此方法后，RenderNode将解除与后端实体节点的引用关系，再次调用该节点的接口可能会出现crash或返回默认值。可通过
   * [isDisposed]{@link RenderNode#isDisposed}接口查询节点是否已释放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dispose(): void;

  /**
   * 设置RenderNode各个属性使用的单位。适用于需要精确像素控制（如使用PX单位）或跟随系统默认排版（如使用DEFAULT单位）的场景。
   *
   * @param { LengthMetricsUnit } unit - 设置RenderNode各个属性使用的单位。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set lengthMetricsUnit(unit: LengthMetricsUnit);

  /**
   * 获取RenderNode各个属性使用的单位。
   *
   * @default LengthMetricsUnit.DEFAULT
   * @returns { LengthMetricsUnit } - 获取RenderNode各个属性使用的单位，默认值为LengthMetricsUnit.DEFAULT。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get lengthMetricsUnit(): LengthMetricsUnit;

  /**
   * 查询当前RenderNode对象是否已解除与后端实体节点的引用关系。当节点调用dispose接口后，再次调用其他接口可能会出现crash、返回默认值的情况，建议开发者在操作节点前调用此接口检查其有效性，避免潜在风险。
   *
   * @returns { boolean } 后端实体节点是否解除引用。true表示节点已与后端实体节点解除引用，false表示节点未与后端实体节点解除引用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  isDisposed(): boolean;

  /**
   * 设置当前RenderNode的背景模糊效果，对节点背景区域进行模糊处理。
   *
   * @param { BackgroundBlur | undefined } blurValue - 背景模糊效果。undefined表示无背景模糊效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  set backgroundBlur(blurValue: BackgroundBlur | undefined);

  /**
   * 获取背景模糊效果。
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
   * 设置当前RenderNode的内容模糊效果，对节点绘制内容进行模糊处理。
   *
   * @param { ContentBlur | undefined } blurValue - 内容模糊效果。undefined表示无内容模糊效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  set contentBlur(blurValue: ContentBlur | undefined);

  /**
   * 背景模糊效果。默认值为{radius: 0}。
   *
   * @returns { ContentBlur } - 背景模糊效果。默认值为{radius: 0}。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  get contentBlur(): ContentBlur;

  /**
   * 设置当前RenderNode的前景模糊效果，对节点前景区域进行模糊处理。
   *
   * @param { ForegroundBlur | undefined } blurValue - 前景模糊效果。undefined表示无前景模糊效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  set foregroundBlur(blurValue: ForegroundBlur | undefined);

  /**
   * 获取内容模糊效果。
   *
   * @returns { ForegroundBlur } - 内容模糊效果。默认值为{radius: 0}。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  get foregroundBlur(): ForegroundBlur;
}