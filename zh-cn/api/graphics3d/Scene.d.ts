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
 * @file Defines 3D scene related interfaces
 * @kit ArkGraphics3D
 */

/*** if arkts static */
import { ResourceStr } from '@ohos.arkui.component';
/*** endif */
import { Shader, MaterialType, Material, Animation, Environment, Image, MeshResource, Sampler, SceneResource, Effect, ImageStream } from './SceneResources';
import { Camera, LightType, Light, Node, NodeType, Geometry } from './SceneNodes';
import { Position3, Color, GeometryDefinition, RenderingPipelineType, Vec2, Vec3, Vec4, ShadowAlgorithmType } from './SceneTypes';

/**
 * 加载场景的参数
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface SceneLoadParams {
  /**
   * 资源中3D模型数据的起始偏移量
   * 单位：字节，值必须大于等于0. 默认值：0.
   *
   * @default { 0 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  offset?: long;
}

/**
 * 场景资源参数类型.
 *
 * @typedef SceneResourceParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface SceneResourceParameters {
  /**
   * 场景资源参数的名称.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * 场景资源参数的资源URI.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  uri?: ResourceStr;
}

/**
 * 场景节点参数类型.
 *
 * @typedef SceneNodeParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface SceneNodeParameters {
  /**
   * 场景节点参数的名称.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * 场景节点参数的路径.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  path?: string;
}

/**
 * 射线检测命中结果.
 *
 * @typedef RaycastResult
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface RaycastResult {
  /**
   * 被击中的节点.
   *
   * @type { Node }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  node: Node;

  /**
   * 到轴对齐包围盒中心的距离, 单位为世界坐标系下的场景单位（例如cm、m、km等）.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  centerDistance: double;

  /**
   * 命中点的世界坐标位置, 单位为世界坐标系下的场景单位（例如cm、m、km等）.
   *
   * @type { Position3 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  hitPosition: Position3;
}

/**
 * 如何执行射线检测.
 *
 * @interface RaycastParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface RaycastParameters {
  /**
   * 如果定义，则仅搜索该节点层级下的节点
   * 如果未定义，则搜索场景中的所有节点
   *
   * @type { ?Node }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  rootNode?: Node;
}

/**
 * 渲染资源工厂，用于创建可在共享RenderContext的场景间共享的资源。
 *
 * @interface RenderResourceFactory
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface RenderResourceFactory {
  /**
   * 创建着色器.
   *
   * @param { SceneResourceParameters } params - 创建着色器的参数
   * @returns { Promise<Shader> } 返回创建的着色器
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  createShader(params: SceneResourceParameters): Promise<Shader>;

  /**
   * 创建图像.
   *
   * @param { SceneResourceParameters } params - 创建图像的参数
   * @returns { Promise<Image> } 返回创建的图像
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  createImage(params: SceneResourceParameters): Promise<Image>;

  /**
   * 创建图像流.
   *
   * @param { SceneResourceParameters } params - 创建图像流的参数
   * @returns { Promise<ImageStream> } 返回创建的图像流
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  createImageStream(params: SceneResourceParameters): Promise<ImageStream>;

  /**
   * 从顶点数组创建网格.
   *
   * @param { SceneResourceParameters } params - 创建网格对象的参数
   * @param { GeometryDefinition } geometry - 要创建的几何形状类型
   * @returns { Promise<MeshResource> } 返回创建的网格
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  createMesh(params: SceneResourceParameters, geometry: GeometryDefinition): Promise<MeshResource>;

  /**
   * 创建采样器.
   * 
   * @param { SceneResourceParameters } params - 创建采样器的参数
   * @returns { Promise<Sampler> } - 返回创建的采样器
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  createSampler(params:SceneResourceParameters): Promise<Sampler>

  /**
   * 从资源创建新场景.
   * 如果未提供uri，将返回空场景.
   *
   * @param { ResourceStr } [uri] - 创建场景的资源
   * @returns { Promise<Scene> } 返回创建的场景
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  createScene(uri?: ResourceStr): Promise<Scene>;

  /**
   * 从SceneLoadParams创建新场景.
   *
   * @param { ResourceStr } uri - 创建场景的资源
   * @param { SceneLoadParams } param - 场景加载参数
   * @returns { Promise<Scene> } 返回场景的Promise
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  createScene(uri: ResourceStr, param: SceneLoadParams): Promise<Scene>;
}

/**
 * 相机创建参数. 可用于定义相机创建的额外选项.
 *
 * @interface CameraParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 21 dynamic
 * @since 23 static
 */
export interface CameraParameters {
  /**
   * 选择是否启用MSAA.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 22 dynamic
   * @since 23 static
   */
  msaa?: boolean;

  /**
   * 选择初始渲染管线类型.
   * 
   * @type { ?RenderingPipelineType }
    * @default RenderingPipelineType.FORWARD_LIGHTWEIGHT 前向轻量级渲染管线
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  renderingPipeline?: RenderingPipelineType;
}

/**
 * 特效参数
 * 
 * @interface EffectParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 21 dynamic
 * @since 23 static
 */
export interface EffectParameters {
  /**
   * Id of the effect to create.
   * 
   * @type { string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  effectId: string;
}

/**
 * 场景资源工厂.
 *
 * @extends RenderResourceFactory
 * @interface SceneResourceFactory
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface SceneResourceFactory extends RenderResourceFactory {
  /**
   * Create a camera.
   *
   * @param { SceneNodeParameters } params - 创建相机的参数
   * @returns { Promise<Camera> } 返回创建的相机
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  createCamera(params: SceneNodeParameters): Promise<Camera>;

  /**
   * Create a camera.
   *
   * @param { SceneNodeParameters } params - 创建相机的参数
   * @param { CameraParameters } cameraParams - 相机特定的额外参数
   * @returns { Promise<Camera> } 返回创建的相机
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  createCamera(params: SceneNodeParameters, cameraParams: CameraParameters): Promise<Camera>;

  /**
   * Create a light.
   *
   * @param { SceneNodeParameters } params - the param of creating a light
   * @param { LightType } lightType - 光源类型
   * @returns { Promise<Light> } 返回创建的光源
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  createLight(params: SceneNodeParameters, lightType: LightType): Promise<Light>;

  /**
   * Create a node.
   *
   * @param { SceneNodeParameters } params - 创建节点的参数
   * @returns { Promise<Node> } 返回创建的节点
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  createNode(params: SceneNodeParameters): Promise<Node>;

  /**
   * Create a material.
   *
   * @param { SceneResourceParameters } params - the param of creating a material
   * @param { MaterialType } materialType - 材质类型
   * @returns { Promise<Material> } 返回创建的材质
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  createMaterial(params: SceneResourceParameters, materialType: MaterialType): Promise<Material>;

  /**
   * Create an environment.
   *
   * @param { SceneResourceParameters } params - 创建环境对象的参数
   * @returns { Promise<Environment> } 返回创建的环境
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  createEnvironment(params: SceneResourceParameters): Promise<Environment>;

  /**
   * 创建几何节点.
   *
   * @param { SceneNodeParameters } params - 创建几何体的参数
   * @param { MeshResource } mesh resource - 几何体的网格数据
   * @returns { Promise<Geometry> } 返回创建的几何体
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  createGeometry(params: SceneNodeParameters, mesh:MeshResource): Promise<Geometry>;

  /**
   * 创建特效.
   * 
   * @param { EffectParameters } params - 创建特效的参数.
   * @returns { Promise<Effect> } 返回创建的特效.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  createEffect(params: EffectParameters): Promise<Effect>;
}

/**
 * 定义底层场景组件
 *
 * @interface SceneComponent
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface SceneComponent {
  /**
   * 场景组件名称
   *
   * @type { string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * 组件属性
   *
   * @type { Record<string, string | double | Vec2 | Vec3 | Vec4 | SceneResource | boolean | double[] | string[] |
   * SceneResource[] | Vec2[] | Vec3[] | Vec4[] | null | undefined> }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  readonly property: Record<string, string | double | Vec2 | Vec3 | Vec4 | SceneResource | boolean | double[] |
  string[] | SceneResource[] | Vec2[] | Vec3[] | Vec4[] | null | undefined>;
}

/**
 * 渲染上下文，定义所有渲染资源的上下文。同一渲染上下文中的资源可在该上下文内创建的场景间共享。
 *
 * @interface RenderContext
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface RenderContext {
  /**
   * 获取资源工厂.
   *
   * @returns { RenderResourceFactory } -- RenderResourceFactory实例
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  getRenderResourceFactory() : RenderResourceFactory;

  /**
   * 加载外部插件
   *
   * @param {string} name - 插件名称
   * @returns { Promise<boolean> } - 返回表示插件加载是否成功的Promise
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  loadPlugin(name: string): Promise<boolean>;

  /**
   * 注册资源路径
   *
   * @param { string } protocol - uri的协议
   * @param { string } uri - 要注册的路径
   * @returns { boolean } - 注册成功返回true，false表示协议已被注册
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  registerResourcePath(protocol: string, uri: string): boolean;
}

/**
 * 软阴影配置参数，控制算法类型及其配置
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export declare abstract class SoftShadowConfig {
  /**
   * 阴影渲染算法类型
   *
   * @returns { ShadowAlgorithmType }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  get shadowAlgorithmType(): ShadowAlgorithmType;
}

/**
 * PCF软阴影配置参数
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export declare class PCFConfig extends SoftShadowConfig {
  /**
   * 获取像素级阴影边缘周围的采样半径.
   *
   * @returns { double | undefined }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  get shadowSampleRadius(): double | undefined;

  /**
   * 设置像素级阴影边缘周围的采样半径.
   *
   * @param { double | undefined } value
   * @default 5.0
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  set shadowSampleRadius(value: double | undefined);

  /**
   * 获取用于渲染阴影像素的阴影图采样数量.
   * 值必须为正整数.
   *
   * @returns { int | undefined }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  get shadowSampleCount(): int | undefined;

  /**
   * 设置用于渲染阴影像素的阴影图采样数量.
   *
   * @param { int | undefined } value
   * @default 16
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  set shadowSampleCount(value: int | undefined);
}

/**
 * 全局渲染配置控制
 * 
 * @interface RenderConfiguration
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export interface RenderConfiguration {
  /**
   * 单个阴影贴图缓冲区的分辨率, undefined by default,
   *  which means we use (1024, 1024) as the resolution of a single shadow map.
   * 需要提供相同的x和y值以获得正确的阴影效果，单位为像素.
   *
   * @type { ?Vec2 }
   * @default { 1024, 1024 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  shadowResolution?: Vec2;

  /**
   * 软阴影配置参数，控制算法类型及其配置
   *
   * @default { undefined }, 表示使用默认硬阴影算法
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  softShadowConfig?: SoftShadowConfig;
}

/**
 * 定义手动渲染的参数.
 *
 * @interface RenderParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 15 dynamic
 * @since 23 static
 */
export interface RenderParameters {
  /**
   * 如果为true，即使场景没有变化也始终渲染
   * 自上一帧以来. 如果为false，则场景没有变化时可以省略渲染.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 15 dynamic
   * @since 23 static
   */
  alwaysRender?: boolean;
}

/**
 * 定义3D场景.
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export declare class Scene {
  /**
   * 获取默认渲染上下文
   *
   * @returns { RenderContext | null } -- 默认RenderContext实例
   * @static
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  static getDefaultRenderContext(): RenderContext | null;

  /**
   * 从ResourceStr创建新场景.
   * 如果未提供uri，将返回空场景.
   *
   * @param { ResourceStr } [uri] - 创建场景的资源
   * @returns { Promise<Scene> } 返回创建的场景
   * @static
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  static load(uri? : ResourceStr): Promise<Scene>;

  /**
   * 从SceneLoadParams创建新场景.
   *
   * @param { ResourceStr } uri - 创建场景的资源
   * @param { SceneLoadParams } param - 场景加载参数
   * @returns { Promise<Scene> } 返回场景的Promise
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  static load(uri: ResourceStr, param: SceneLoadParams):Promise<Scene>;

  /**
   * 场景的环境.
   *
   * @return { Environment }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  get environment(): Environment;

  /**
   * 场景的环境.
   *
   * @param { Environment } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  set environment(value: Environment);

  /**
   * 场景的动画.
   *
   * @return { Animation[] }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  get animations(): Animation[];

  /**
   * 场景的根节点.
   *
   * @return { Node | null }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  get root(): Node | null;

  /**
   * 通过路径获取节点.
   *
   * @param { string } path - 节点路径
   * @param { NodeType } type - 验证节点类型，如果不匹配则返回null
   * @returns { Node | null } 如果通过路径找到节点
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  getNodeByPath(path: string, type?: NodeType): Node | null;

  /**
   * 获取资源工厂.
   *
   * @returns { SceneResourceFactory } 如果通过路径找到节点
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  getResourceFactory(): SceneResourceFactory;

  /**
   * 释放所有原生场景资源. 所有TS引用将变为undefined.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  destroy(): void;

  /**
   * 将节点导入场景. 原始节点可能来自另一个场景.
   * 节点将被克隆，导入后对旧节点的修改将不可见.
   *
   * @param { string } name - 新创建节点的名称.
   * @param { Node } node - 要导入的节点.
   * @param { Node | null} parent - 父节点，根节点为null
   * @returns { Node } 新创建的节点.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  importNode(name: string, node: Node, parent: Node | null): Node;

  /**
   * 将场景作为节点导入场景. 节点层级将出现在父节点下.
   * 场景中的所有动画将被复制.
   *
   * @param { string } name - 新创建节点的名称
   * @param { Scene } scene - The scene to be imported.
   * @param { Node | null } parent - 父节点，根节点为null
   * @returns { Node } 新创建的节点.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  importScene(name: string, scene: Scene, parent: Node | null): Node;

   /**
   * 为所有活动相机渲染新帧.
   *
   * @param { RenderParameters } params - 渲染参数
   * @returns { boolean } 如果渲染被调度则返回true，否则返回false
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 15 dynamic
   * @since 23 static
   */
  renderFrame(params?: RenderParameters): boolean;

  /**
   * 创建新组件.
   *
   * @param { Node } node - 组件附加到的节点
   * @param { string } name - 要加载的组件名称. 有效名称由各插件定义.
   * @returns { Promise<SceneComponent> } - 新添加的组件.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  createComponent(node: Node, name: string): Promise<SceneComponent>;

  /**
   * 渲染配置设置
   *
   * @returns { RenderConfiguration }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  get renderConfiguration(): RenderConfiguration;

  /**
    * 通过名称获取组件.
    * 
    * @param { Node } node - 组件附加到的节点. 
    * @param { string } name - 组件名称
    * @returns { SceneComponent | null }
    * @syscap SystemCapability.ArkUi.Graphics3D
    * @since 20 dynamic
    * @since 23 static
    */
  getComponent(node: Node, name: string): SceneComponent | null;

  /**
   * 克隆以输入节点为根节点的节点或子树
   *
   * @param { Node } node - 要克隆的输入节点
   * @param { Node } parent - 克隆节点将被设置为其子节点的父节点
   * @param { string } name - 克隆节点的名称
   * @returns { Node | null } 克隆结果，如果克隆失败则返回null.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  cloneNode(node: Node, parent: Node, name: string): Node | null;
}
