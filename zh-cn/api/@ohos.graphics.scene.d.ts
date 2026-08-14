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
 * @file ArkGraphics 3D
 * @kit ArkGraphics3D
 */

/**
 * 本模块提供ArkGraphics 3D中的色调映射等图像后处理方法。
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export { ToneMappingType, ToneMappingSettings, PostProcessSettings, BloomSettings, VignetteSettings, ColorFringeSettings } from './graphics3d/ScenePostProcessSettings';

/**
 * 本模块提供ArkGraphics 3D中的数据类型，包括向量、四元数等。
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export { Vec2, Vec3, Vec4, Color, Rect, Quaternion, Aabb, Position3, Rotation3, Scale3, GeometryType, GeometryDefinition,
  PrimitiveTopology, CustomGeometry, CubeGeometry, PlaneGeometry, SphereGeometry,
  RenderingPipelineType } from './graphics3d/SceneTypes';

/**
 * 本模块提供ArkGraphics 3D中的数据类型，包括向量、四元数等。
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export { Mat4x4, CylinderGeometry } from './graphics3d/SceneTypes';

/**
 * 本模块提供ArkGraphics 3D中常用的基本资源类型，包括材质、图片、着色器等。
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export { SceneResourceType, SceneResource, Shader, MaterialType, Material, ShaderMaterial,
  SubMesh, Mesh, Animation, EnvironmentBackgroundType, Environment, Image, ImageStream, CullMode, Blend,
  RenderSort, MaterialProperty, MetallicRoughnessMaterial, MeshResource, Morpher,
  Sampler, SamplerFilter, SamplerAddressMode, Effect } from './graphics3d/SceneResources';

/**
 * 本模块提供ArkGraphics 3D中常用的基本资源类型，包括材质、图片、着色器等。
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic&static
 */
export { UnlitShadowAlphaMaterial } from './graphics3d/SceneResources';

/**
 * 本模块提供ArkGraphics 3D中常用的基本资源类型，包括材质、图片、着色器等。
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export { PolygonMode, UnlitMaterial, OcclusionMaterial } from './graphics3d/SceneResources';

/**
 * 3D场景是以树状结构进行组织的，通过操作节点属性以及节点树结构可以改变3D场景。本模块提供ArkGraphics 3D中场景资源节点的类型及操作方法。
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export { LayerMask, NodeType, Container, Node, Geometry, LightType, Light, SpotLight, DirectionalLight,
  Camera } from './graphics3d/SceneNodes';

/**
 * ArkGraphics 3D基础模块，提供SceneResourceParameters、SceneNodeParameters等通用数据类型。同时提供glTF模型加载，场景元素、资源创建等基础方法。
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export { SceneResourceParameters, SceneNodeParameters, SceneResourceFactory, Scene, RaycastResult, RaycastParameters,
  RenderParameters, RenderResourceFactory, SceneComponent, RenderContext, CameraParameters, EffectParameters } from './graphics3d/Scene';

/**
 * ArkGraphics 3D基础模块，提供SceneResourceParameters、SceneNodeParameters等通用数据类型。同时提供glTF模型加载，场景元素、资源创建等基础方法。
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export { RenderConfiguration } from './graphics3d/Scene';

/**
 * 本模块提供ArkGraphics 3D中群组模拟动画的类型及操作方法。群组模拟动画是通过分离、对齐、凝聚等规则驱动群体中的个体，使其展现出类似自然界中鸟群、鱼群运动特征的计算机动画方法。
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export {
    BoidsSimPlugin, BoidsSimWorld, BoidsSimParameters, BoidsSimGravityParameters,
    BoidsSimRepulsionParameters } from './graphics3d/SceneBoidsSim';

/**
 * 本模块作为ArkGraphics 3D基础模块，提供场景加载参数等数据类型和场景加载方法。
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export { SceneLoadParams } from './graphics3d/Scene';

/**
 * 本模块提供ArkGraphics 3D中的数据类型，包括向量、四元数等。
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 26.0.0 dynamic&static
 */
export { ShadowAlgorithmType } from './graphics3d/SceneTypes';

/**
 * ArkGraphics 3D基础模块，提供SceneResourceParameters、SceneNodeParameters等通用数据类型。同时提供glTF模型加载，场景元素、资源创建等基础方法。
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 26.0.0 dynamic&static
 */
export { SoftShadowConfig, PCFConfig } from './graphics3d/Scene';