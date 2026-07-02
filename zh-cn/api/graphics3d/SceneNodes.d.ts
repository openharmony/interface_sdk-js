/*
 * Copyright (c) 2024-2024 Huawei Device Co., Ltd.
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
 * @file Defines 3D node related interfaces
 * @kit ArkGraphics3D
 */

import { SceneResource, Mesh, Morpher, Effect } from './SceneResources';
import { RaycastParameters, RaycastResult } from './Scene';
import { Position3, Quaternion, Scale3, Color, Vec2, Vec3, RenderingPipelineType, Mat4x4 } from './SceneTypes';
import { PostProcessSettings } from './ScenePostProcessSettings';

/**
 * 定义节点的图层掩码.
 *
 * @interface LayerMask
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface LayerMask {
  /**
   * 获取图层掩码是否启用.
   *
   * @param { int } index - 图层掩码
   * @returns { boolean } 图层掩码是否启用 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  getEnabled(index: int): boolean;

  /**
   * 设置图层掩码是否启用.
   *
   * @param { int } index - 图层掩码
   * @param { boolean } enabled - 图层掩码是否启用
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  setEnabled(index: int, enabled: boolean): void;
}

/**
 * 节点类型枚举.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export enum NodeType {
  /**
   * 节点是空节点.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  NODE = 1,

  /**
   * 节点是几何节点.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  GEOMETRY = 2,

  /**
   * 节点是相机节点.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  CAMERA = 3,

  /**
   * 节点是光源节点.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  LIGHT = 4,

  /** 
   * 节点是自定义类型.
   * 通常这意味着该节点是在扩展插件中定义的类型.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  CUSTOM = 255
}

/**
 * 定义场景对象容器.
 *
 * @interface Container
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Container<T> {
  /**
   * 将项目追加到容器.
   *
   * @param { T } item - 要追加到容器末尾的项目
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  append(item: T): void;

  /**
   * 插入项目.
   *
   * @param { T } item - 要插入到容器的项目
   * @param { T | null } sibling - 在此项目后插入，如果sibling为null则插入到头部
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  insertAfter(item: T, sibling: T | null): void;

  /**
   * 从容器的子节点中移除项目.
   *
   * @param { T } item - 要移除的项目
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  remove(item: T): void;

  /**
   * 从容器的子节点列表中返回给定索引的子节点.
   *
   * @param { int } index - 要返回的子节点的索引
   * @returns { T | null } 返回由索引指定的项目
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  get(index: int): T | null;

  /**
   * 清空所有子节点.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  clear(): void;

  /**
   * 返回容器中的项目数量.
   *
   * @returns { int } 容器的数量
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  count(): int;
}

/**
 * 定义Node接口.
 *
 * @extends SceneResource
 * @interface Node
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Node extends SceneResource {
  /**
   * 节点位置, 单位为世界坐标系下的场景单位（例如cm、m、km等）.
   *
   * @type { Position3 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  position: Position3;

  /**
   * 节点旋转.
   *
   * @type { Quaternion }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  rotation: Quaternion;

  /**
   * 节点缩放.
   *
   * @type { Scale3 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  scale: Scale3;

  /**
   * 节点可见性标志.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  visible: boolean;

  /**
   * 节点类型.
   *
   * @type { NodeType }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly nodeType: NodeType;

  /**
   * 节点图层掩码.
   *
   * @type { LayerMask }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly layerMask: LayerMask;

  /**
   * 节点路径.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly path: string;

  /**
   * 节点的父节点.
   *
   * @type { Node | null }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly parent: Node | null;

  /**
   * 通过路径获取节点.
   *
   * @param { string } path - 要查询的节点路径
   * @returns { Node | null }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  getNodeByPath(path: string): Node | null;

  /**
   * 节点的子节点.
   *
   * @type { Container<Node> }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly children: Container<Node>
}

/**
 * 定义Geometry接口.
 *
 * @extends Node
 * @interface Geometry
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Geometry extends Node {
  /**
   * 节点的网格.
   *
   * @type { Mesh }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly mesh: Mesh;
  
  /**
   * Morpher目标定义.
   * 
   * @type { ?Morpher }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  readonly morpher?: Morpher;
}

/**
 * 光源类型枚举.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export enum LightType {
  /**
   * 平行光.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  DIRECTIONAL = 1,

  /**
   * 聚光灯.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  SPOT = 2,
}

/**
 * 定义Light接口.
 *
 * @extends Node
 * @interface Light
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Light extends Node {
  /**
   * 光源类型.
   *
   * @type { LightType }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly lightType: LightType;

  /**
   * 光源颜色.
   *
   * @type { Color }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  color: Color;

  /**
   * 光源强度, 单位为坎德拉.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  intensity: double;

  /**
   * 是否投射阴影.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  shadowEnabled: boolean;

  /**
   * 是否启用光源.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  enabled: boolean;
}

/**
 * 定义聚光灯.
 *
 * @extends Light
 * @interface SpotLight
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface SpotLight extends Light {
  /**
   * 聚光灯的内角, 单位为弧度.
   * 
   * @type { ?double }
   * @default 0
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  innerAngle?: double;

  /**
   * 聚光灯的外角, 单位为弧度.
   * 
   * @type { ?double }
    * @default PI / 4.0 π/4 弧度
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  outerAngle?: double;
}

/**
 * 定义平行光.
 *
 * @extends Light
 * @interface DirectionalLight
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface DirectionalLight extends Light {
}

/**
 * 定义相机.
 *
 * @extends Node
 * @interface Camera
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Camera extends Node {
  /**
   * 相机视场, 单位为弧度.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  fov: double;

  /**
   * 相机近平面, 单位为世界坐标系下的场景单位（例如cm、m、km等）.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  nearPlane: double;

  /**
   * 相机远平面, 单位为世界坐标系下的场景单位（例如cm、m、km等）.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  farPlane: double;

  /**
   * 相机是否启用.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  enabled: boolean;

  /**
   * 相机的后处理设置.
   *
   * @type { PostProcessSettings | null }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  postProcess: PostProcessSettings | null;

  /**
   * 应用于相机输出的特效.
   * 
   * @type { Container<Effect> }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  readonly effects: Container<Effect>;

  /**
   * 背景清除颜色（环境背景会覆盖此颜色,
   * 需要BACKGROUND_NONE才能实际生效).
   *
   * @type { Color | null }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  clearColor: Color | null;

  /**
   * 控制是否启用MSAA.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 22 dynamic
   * @since 23 static
   */
  msaa?: boolean;

  /**
   * 控制渲染管线. 
   * 请注意，如果选择了FORWARD_LIGHTWEIGHT管线，某些功能将不可用.
   *
   * @type { ?RenderingPipelineType }
    * @default RenderingPipelineType.FORWARD_LIGHTWEIGHT 前向轻量级渲染管线
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  renderingPipeline?: RenderingPipelineType;

  /**
   * 向屏幕上的位置投射射线并列出射线击中的对象.
   * @param { Vec2 } viewPosition - 在归一化设备坐标中投射的位置.
   * @param { RaycastParameters } params - 执行射线检测使用的选项.
   * @returns { Promise<RaycastResult[]> } - 返回命中结果数组的Promise，按从近到远排序. 数组可能为空.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  raycast(viewPosition: Vec2, params: RaycastParameters): Promise<RaycastResult[]>;

  /**
   * 获取相机的视图矩阵.
   * @returns { Mat4x4 } -- 相机的视图矩阵
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  getViewMatrix(): Mat4x4;

  /**
   * 获取相机的投影矩阵.
   * @returns { Mat4x4 } -- 相机的投影矩阵
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  getProjectionMatrix(): Mat4x4;
}
