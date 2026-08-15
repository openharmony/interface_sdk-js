/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @kit ArkGraphics3D
 */

/*** if arkts static */
import { ResourceStr } from '@ohos.arkui.component';
/*** endif */
import { Shader, MaterialType, Material, Animation, Environment, Image, MeshResource, Sampler, SceneResource, Effect, ImageStream } from './SceneResources';
import { Camera, LightType, Light, Node, NodeType, Geometry } from './SceneNodes';
import { Position3, Color, GeometryDefinition, RenderingPipelineType, Vec2, Vec3, Vec4, ShadowAlgorithmType } from './SceneTypes';

/**
 * 场景加载参数对象，用于指定加载3D模型资源时的额外配置选项。典型使用场景为从MP4容器文件中加载内嵌的glb模型。
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface SceneLoadParams {
  /**
   * 3D模型数据在资源文件中的起始偏移量，单位为字节。
   * 系统将从资源文件的该偏移位置定位并读取glb模型数据。
   * 例如，当glb模型嵌在MP4容器文件中时，可将此参数设置为glb数据在MP4文件中的起始字节位置，使系统能够正确提取并加载模型。
   * 取值必须大于或等于0。默认值为0，表示模型数据从文件起始位置开始。
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
 * 场景资源参数对象，包含name和uri，用于提供场景资源的名称以及3D场景所需的资源文件路径。
 *
 * @typedef SceneResourceParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface SceneResourceParameters {
  /**
   * 要创建资源的名称，可由开发者自定义填写，用于标识该场景资源。
   *
   * @type { string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * 3D场景所需的资源文件路径。默认值为undefined。
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  uri?: ResourceStr;
}

/**
 * 场景节点参数对象，用于提供场景节点层次中的名称和路径。
 *
 * @typedef SceneNodeParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface SceneNodeParameters {
  /**
   * 要创建的节点名称，可由开发者自定义填写，用于标识场景节点。
   *
   * @type { string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * 场景节点层次中的路径。用于指定创建的相机、灯光或节点在场景节点层次中的放置位置。每层之间使用'/'符号进行分割。如果未提供，则将其设置为根节点的子节点。默认值为undefined。
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  path?: string;
}

/**
 * 射线检测命中结果对象，包含被射线击中的3D物体详细信息。
 *
 * @typedef RaycastResult
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface RaycastResult {
  /**
   * 被射线击中的3D场景节点，可通过该节点操作目标物体（如移动、旋转、隐藏）。
   *
   * @type { Node }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  node: Node;

  /**
   * 命中物体包围盒中心到相机中心的距离，单位为世界坐标系下的场景单位（比如cm、m、km等），取值范围大于0。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  centerDistance: double;

  /**
   * 射线与物体碰撞点的精确世界坐标（{x: number, y: number, z: number}），单位为世界坐标系下的场景单位（比如cm、m、km等）。
   *
   * @type { Position3 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  hitPosition: Position3;
}

/**
 * 射线检测参数配置，用于定义射线检测的行为。
 *
 * @interface RaycastParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface RaycastParameters {
  /**
   * 限定检测范围：仅检测该节点及其子节点。未设置时检测全场景。
   *
   * @type { ?Node }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  rootNode?: Node;
}

/**
 * 用于创建可在共享RenderContext的多个场景（[Scene]{@link Scene}）中共享的渲染资源。
 *
 * @interface RenderResourceFactory
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface RenderResourceFactory {
  /**
   * 根据指定场景资源参数创建一个着色器，使用Promise异步回调。
   *
   * @param { SceneResourceParameters } params - 创建着色器的参数
   * @returns { Promise<Shader> } Promise对象，返回创建的着色器对象。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  createShader(params: SceneResourceParameters): Promise<Shader>;

  /**
   * 根据指定场景资源参数创建一个图片，使用Promise异步回调。
   *
   * @param { SceneResourceParameters } params - 创建图片的参数
   * @returns { Promise<Image> } Promise对象，返回创建的图片对象。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  createImage(params: SceneResourceParameters): Promise<Image>;

  /**
   * 根据指定场景资源参数创建流图片，使用Promise异步回调。
   *
   * @param { SceneResourceParameters } params - 创建流图片的参数
   * @returns { Promise<ImageStream> } Promise对象，返回创建的流图片对象。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  createImageStream(params: SceneResourceParameters): Promise<ImageStream>;

  /**
   * 根据指定场景资源参数和几何体定义创建网格，使用Promise异步回调。
   *
   * @param { SceneResourceParameters } params - 创建网格的参数
   * @param { GeometryDefinition } geometry - 几何体定义
   * @returns { Promise<MeshResource> } Promise对象，返回创建的网格资源对象。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  createMesh(params: SceneResourceParameters, geometry: GeometryDefinition): Promise<MeshResource>;

  /**
   * 根据指定场景资源参数创建采样器，使用Promise异步回调。
   *
   * @param { SceneResourceParameters } params - 创建采样器的参数
   * @returns { Promise<Sampler> } Promise对象，返回创建的采样器对象。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  createSampler(params:SceneResourceParameters): Promise<Sampler>

  /**
   * 根据指定资源路径创建场景，如果不指定URI，则创建一个空场景，使用Promise异步回调。
   *
   * @param { ResourceStr } [uri] - 创建场景使用的资源路径，默认值为undefined。
   * @returns { Promise<Scene> } Promise对象，返回创建的场景对象。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  createScene(uri?: ResourceStr): Promise<Scene>;

  /**
   * 根据指定的资源路径和场景加载参数创建场景，使用Promise异步回调。
   *
   * @param { ResourceStr } uri - 创建场景使用的资源路径
   * @param { SceneLoadParams } param - 场景加载参数
   * @returns { Promise<Scene> } Promise对象，返回创建的场景对象。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  createScene(uri: ResourceStr, param: SceneLoadParams): Promise<Scene>;
}

/**
 * 相机创建参数配置，用于定义相机创建的额外选项。
 *
 * @interface CameraParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 21 dynamic
 * @since 23 static
 */
export interface CameraParameters {
  /**
   * 相机是否使能MSAA，true表示使能MSAA，false表示不使能MSAA。默认值为false。
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 22 dynamic
   * @since 23 static
   */
  msaa?: boolean;

  /**
   * 选择初始渲染管线类型，默认为轻量级前向渲染管线类型。
   *
   * @type { ?RenderingPipelineType }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  renderingPipeline?: RenderingPipelineType;
}

/**
 * 特效参数配置，用于指定创建特效时所需的特效ID，作为createEffect接口的入参来创建特效对象。
 * 
 * @interface EffectParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 21 dynamic
 * @since 23 static
 */
export interface EffectParameters {
  /**
   * 用于创建特效的ID，固定格式为'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX'，比如'e68a7f45-2d21-4a0d-9aef-7d9c825d3f12'。
   *
   * @type { string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  effectId: string;
}

/**
 * 用于创建3D场景中资源的接口，例如相机、光源等，继承自RenderResourceFactory。
 *
 * @extends RenderResourceFactory
 * @interface SceneResourceFactory
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface SceneResourceFactory extends RenderResourceFactory {
  /**
   * 根据节点参数创建相机，使用Promise异步回调。
   *
   * @param { SceneNodeParameters } params - 场景节点参数
   * @returns { Promise<Camera> } Promise对象，返回相机对象。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  createCamera(params: SceneNodeParameters): Promise<Camera>;

  /**
   * 根据节点参数与相机参数创建相机，使用Promise异步回调。
   *
   * @param { SceneNodeParameters } params - 场景节点参数
   * @param { CameraParameters } cameraParams - 相机参数
   * @returns { Promise<Camera> } Promise对象，返回相机对象。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  createCamera(params: SceneNodeParameters, cameraParams: CameraParameters): Promise<Camera>;

  /**
   * 根据节点参数和灯光类型创建灯光，使用Promise异步回调。
   *
   * @param { SceneNodeParameters } params - 场景节点参数
   * @param { LightType } lightType - 灯光类型
   * @returns { Promise<Light> } Promise对象，返回灯光对象。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  createLight(params: SceneNodeParameters, lightType: LightType): Promise<Light>;

  /**
   * 创建节点，使用Promise异步回调。
   *
   * @param { SceneNodeParameters } params - 场景节点参数
   * @returns { Promise<Node> } Promise对象，返回节点对象。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  createNode(params: SceneNodeParameters): Promise<Node>;

  /**
   * 根据场景资源参数和材质类型创建材质，使用Promise异步回调。
   *
   * @param { SceneResourceParameters } params - 场景资源参数
   * @param { MaterialType } materialType - 材质类型
   * @returns { Promise<Material> } Promise对象，返回材质对象。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  createMaterial(params: SceneResourceParameters, materialType: MaterialType): Promise<Material>;

  /**
   * 根据场景资源参数创建环境，使用Promise异步回调。
   *
   * @param { SceneResourceParameters } params - 场景资源参数
   * @returns { Promise<Environment> } Promise对象，返回环境对象。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  createEnvironment(params: SceneResourceParameters): Promise<Environment>;

  /**
   * 根据场景节点参数和网格数据创建几何对象，使用Promise异步回调。
   *
   * @param { SceneNodeParameters } params - 场景节点参数
   * @param { MeshResource } mesh - 网格数据参数
   * @returns { Promise<Geometry> } Promise对象，返回几何对象。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  createGeometry(params: SceneNodeParameters, mesh:MeshResource): Promise<Geometry>;

  /**
   * 根据特效参数创建特效对象，使用Promise异步回调。
   *
   * @param { EffectParameters } params - 特效参数
   * @returns { Promise<Effect> } Promise对象，返回特效对象。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  createEffect(params: EffectParameters): Promise<Effect>;
}

/**
 * 表示基础场景组件，用于描述场景节点的组件信息，包括组件名称及其对应的属性集合。
 *
 * @interface SceneComponent
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface SceneComponent {
  /**
   * 要创建场景组件的名称，可由开发者自定义填写，用于标识场景组件。
   *
   * @type { string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * 组件的属性集合，以键值对形式存储。支持多种基础类型和复杂类型，用于描述场景组件的各种属性，单位及取值范围取决于具体场景组件。
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
 * 定义了所有渲染资源的上下文。在同一渲染上下文中创建的多个场景之间，可以共享渲染资源。
 *
 * @interface RenderContext
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface RenderContext {
  /**
   * 获取渲染资源工厂，提供创建不同渲染资源的功能。
   *
   * @returns { RenderResourceFactory } 返回一个RenderResourceFactory实例，用于创建渲染资源。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  getRenderResourceFactory() : RenderResourceFactory;

  /**
   * 用于加载指定名称的插件，通过插件名称查找并加载对应的插件资源，使用Promise异步回调。
   *
   * @param {string} name - 要加载的插件名称，必须是系统预定义或已注册且可用的插件名称，且符合命名规范。
   * @returns { Promise<boolean> } 返回一个Promise对象，解析结果为boolean类型，表示插件加载是否成功。true表示加载成功，false表示加载失败。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  loadPlugin(name: string): Promise<boolean>;

  /**
   * 注册shader等资产文件所在的路径目录及其检索名，通过检索名查找并替换shader内部关联文件的路径描述，找到对应的资产路径目录，
   * 实现资产及其关联文件的正确加载。
   *
   * @param { string } protocol - 要注册的路径检索名，用作shader内部关联文件路径的前缀标识，
   *     必须是系统未预定义或未注册且非空的检索名称。
   * @param { string } uri - 要注册的资产路径目录，与检索名对应，shader加载时会将路径中的检索名前缀替换为该目录，
   *     必须是资产文件所在文件夹路径。
   * @returns { boolean } - 返回资产文件路径是否注册成功。true表示注册成功；
   *     false表示注册失败，可能原因为检索名已被注册或输入参数不可用。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  registerResourcePath(protocol: string, uri: string): boolean;
}

/**
 * 软阴影配置抽象基类，用于控制阴影渲染的算法类型及其参数配置。
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export declare abstract class SoftShadowConfig {
  /**
   * 阴影算法的枚举值。
   *
   * @returns { ShadowAlgorithmType }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  get shadowAlgorithmType(): ShadowAlgorithmType;
}

/**
 * PCF（Percentage Closer Filtering，百分比邻近过滤）软阴影配置类，继承自SoftShadowConfig。
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export declare class PCFConfig extends SoftShadowConfig {
  /**
   * 采样半径，决定了阴影边缘模糊的范围，半径越大，阴影边缘越柔和。采样半径过大会导致阴影过度模糊，失去阴影形状特征。
   * 默认值为5.0。
   * 取值范围：>= 0。
   * - 设置为0时，将不进行PCF采样，无阴影效果。
   * - 设置为undefined时，恢复默认值5.0进行渲染。
   *
   * @returns { double | undefined }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  get shadowSampleRadius(): double | undefined;

  /**
   * 采样半径，决定了阴影边缘模糊的范围，半径越大，阴影边缘越柔和。采样半径过大会导致阴影过度模糊，失去阴影形状特征。
   * 默认值为5.0。
   * 取值范围：>= 0。
   * - 设置为0时，将不进行PCF采样，无阴影效果。
   * - 设置为undefined时，恢复默认值5.0进行渲染。
   *
   * @param { double | undefined } value
   * @default 5.0
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  set shadowSampleRadius(value: double | undefined);

  /**
   * 采样数量，决定了每个像素采样阴影图的次数，数量越多，阴影质量越高，但性能开销越大。
   * 默认值为16。
   * 取值范围：0 ~ 64。
   * - 超出此范围的值会被自动限制到最近的有效边界值（例如65实际按64处理）。
   * - 设置为0时，将不进行PCF采样，无阴影效果。
   * - 设置为undefined时，恢复默认值16进行渲染。
   *
   * @returns { int | undefined }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  get shadowSampleCount(): int | undefined;

  /**
   * 采样数量，决定了每个像素采样阴影图的次数，数量越多，阴影质量越高，但性能开销越大。
   * 默认值为16。
   * 取值范围：0 ~ 64。
   * - 超出此范围的值会被自动限制到最近的有效边界值（例如65实际按64处理）。
   * - 设置为0时，将不进行PCF采样，无阴影效果。
   * - 设置为undefined时，恢复默认值16进行渲染。
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
 * 渲染配置接口。
 * 
 * @interface RenderConfiguration
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export interface RenderConfiguration {
  /**
   * 表示全局阴影贴图分辨率，单位为像素（px）。默认值为undefined，表示阴影贴图分辨率设置为1024 * 1024。输入的值需要大于0才能正确生效。如果输入值为浮点数则自动截取整数部分；如果输入值小于或等于0则无视该输入，维持原有配置。
   *
   * @type { ?Vec2 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  shadowResolution?: Vec2;

  /**
   * 软阴影配置参数，用于控制阴影渲染的算法类型及其具体配置。
   * 当值为undefined或不设置该参数时，使用默认的硬阴影算法（无阴影柔化效果）。
   * 当设置为有效的SoftShadowConfig对象（如PCFConfig）时，启用对应的软阴影算法。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  softShadowConfig?: SoftShadowConfig;
}

/**
 * 渲染参数接口。
 *
 * @interface RenderParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 15 dynamic
 * @since 23 static
 */
export interface RenderParameters {
  /**
   * 表示是否每一帧都渲染。true表示每一帧都渲染，false表示按需渲染。默认值为true。
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 15 dynamic
   * @since 23 static
   */
  alwaysRender?: boolean;
}

/**
 * 用于设置场景。Scene采用树状层次结构组织场景节点，根节点（root）作为场景的入口。
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export declare class Scene {
  /**
   * 获取当前图形对象所关联的渲染上下文。
   *
   * @returns { RenderContext | null } 返回当前对象关联的渲染上下文，若对象尚未关联任何渲染上下文，则返回null。
   * @static
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  static getDefaultRenderContext(): RenderContext | null;

  /**
   * 通过传入的资源路径加载资源，使用Promise异步回调。
   * 调用后，应该在Scene使用完毕时调用[destroy]{@link destroy}释放资源，否则可能导致资源泄漏。
   *
   * @param { ResourceStr } [uri] - 待加载的模型文件资源路径，默认值为undefined。
   * @returns { Promise<Scene> } Promise对象，返回场景对象。
   * @static
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  static load(uri? : ResourceStr): Promise<Scene>;

  /**
   * 根据指定的资源路径和场景加载参数加载资源，使用Promise异步回调。
   *
   * @param { ResourceStr } uri - 待加载的模型文件资源路径
   * @param { SceneLoadParams } param - 场景加载参数
   * @returns { Promise<Scene> } Promise对象，返回场景对象。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  static load(uri: ResourceStr, param: SceneLoadParams):Promise<Scene>;

  /**
   * 环境对象。
   *
   * @return { Environment }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  get environment(): Environment;

  /**
   * 环境对象。
   *
   * @param { Environment } value
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  set environment(value: Environment);

  /**
   * 动画数组，用于保存3D场景中的动画对象。
   *
   * @return { Animation[] }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  get animations(): Animation[];

  /**
   * 3D场景树根节点。
   *
   * @return { Node | null }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  get root(): Node | null;

  /**
   * 通过路径获取节点。
   *
   * @param { string } path - 场景节点层次中的路径。每层之间使用'/'符号进行分割。
   * @param { NodeType } type - 预期返回的节点类型。当需要确保返回特定类型的节点时传入此参数，不传入时返回路径上找到的第一个节点（不限制类型）。默认值为空。
   * @returns { Node | null } 返回请求节点的实例，如果没有找到或者找到的节点类型与传入的参数不相符则返回空。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  getNodeByPath(path: string, type?: NodeType): Node | null;

  /**
   * 获取场景资源工厂对象。
   *
   * @returns { SceneResourceFactory } 返回场景资源工厂对象。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  getResourceFactory(): SceneResourceFactory;

  /**
   * 销毁场景，释放所有的场景资源。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  destroy(): void;

  /**
   * 一般用于从其他场景导入节点。
   *
   * @param { string } name - 导入节点后的名称，由开发者自定义，无特殊要求。
   * @param { Node } node - 被导入的节点。
   * @param { Node | null} parent - 被导入节点在新场景中的父节点。
   * @returns { Node } 被导入的节点。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  importNode(name: string, node: Node, parent: Node | null): Node;

  /**
   * 在当前场景中导入其他场景。
   *
   * @param { string } name - 导入场景的根节点名称，由开发者自定义，无特殊要求。
   * @param { Scene } scene - 被导入的场景。
   * @param { Node | null } parent - 被导入场景在新场景中的父节点。
   * @returns { Node } 被导入场景的根节点。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  importScene(name: string, scene: Scene, parent: Node | null): Node;

   /**
   * 通过该接口可以实现按需渲染，例如控制渲染帧率。
   *
   * @param { RenderParameters } params - 渲染参数，默认值为undefined。
   * @returns { boolean } 渲染被成功调度返回true，否则返回false。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 15 dynamic
   * @since 23 static
   */
  renderFrame(params?: RenderParameters): boolean;

  /**
   * 在指定节点上创建新的组件，根据组件名称异步创建并附加到节点上，使用Promise异步回调。
   *
   * @param { Node } node - 组件需要附加到的节点。
   * @param { string } name - 要创建的组件名称，由各插件定义有效名称。
   * @returns { Promise<SceneComponent> } Promise对象，返回新创建的场景组件。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  createComponent(node: Node, name: string): Promise<SceneComponent>;

  /**
   * 渲染配置接口。
   *
   * @returns { RenderConfiguration }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  get renderConfiguration(): RenderConfiguration;

  /**
    * 根据指定的组件名称，从给定节点上获取对应的组件实例。
    *
    * @param { Node } node - 组件附加的节点。
    * @param { string } name - 需要获取的组件名称，必须为系统预定义或已注册的自定义组件名称，且需符合命名规范。
    * @returns { SceneComponent | null } 返回对应名称的组件对象，若未找到则返回null。
    * @syscap SystemCapability.ArkUi.Graphics3D
    * @since 20 dynamic
    * @since 23 static
    */
  getComponent(node: Node, name: string): SceneComponent | null;

  /**
   * 在当前所在场景中克隆节点，不支持跨场景克隆节点。
   *
   * @param { Node } node - 被克隆的节点。
   * @param { Node } parent - 被克隆的节点在当前所在场景中的目标父节点。被克隆的节点node和目标父节点parent需要属于同一个场景scene。
   * @param { string } name - 克隆节点的名称，由开发者自定义，无特殊要求。
   * @returns { Node | null } 返回克隆节点。克隆失败则返回null。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  cloneNode(node: Node, parent: Node, name: string): Node | null;
}
