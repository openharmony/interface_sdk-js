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
 * @file 导出3D接口
 * @kit ArkGraphics3D
 */

/**
 * 导出后处理设置
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export { ToneMappingType, ToneMappingSettings, PostProcessSettings, BloomSettings, VignetteSettings, ColorFringeSettings } from './graphics3d/ScenePostProcessSettings';

/**
 * 导出场景类型
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export { Vec2, Vec3, Vec4, Color, Rect, Quaternion, Aabb, Position3, Rotation3, Scale3, GeometryType, GeometryDefinition,
  PrimitiveTopology, CustomGeometry, CubeGeometry, PlaneGeometry, SphereGeometry,
  RenderingPipelineType } from './graphics3d/SceneTypes';

/**
 * 导出场景类型
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export { Mat4x4, CylinderGeometry } from './graphics3d/SceneTypes';

/**
 * 导出场景资源
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export { SceneResourceType, SceneResource, Shader, MaterialType, Material, ShaderMaterial,
  SubMesh, Mesh, Animation, EnvironmentBackgroundType, Environment, Image, ImageStream, CullMode, Blend,
  RenderSort, MaterialProperty, MetallicRoughnessMaterial, MeshResource, Morpher,
  Sampler, SamplerFilter, SamplerAddressMode, Effect } from './graphics3d/SceneResources';

/**
 * 导出场景资源
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic&static
 */
export { UnlitShadowAlphaMaterial } from './graphics3d/SceneResources';

/**
 * 导出场景资源
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export { PolygonMode, UnlitMaterial, OcclusionMaterial } from './graphics3d/SceneResources';

/**
 * 导出场景节点
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export { LayerMask, NodeType, Container, Node, Geometry, LightType, Light, SpotLight, DirectionalLight,
  Camera } from './graphics3d/SceneNodes';

/**
 * 导出场景
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export { SceneResourceParameters, SceneNodeParameters, SceneResourceFactory, Scene, RaycastResult, RaycastParameters,
  RenderParameters, RenderResourceFactory, SceneComponent, RenderContext, CameraParameters, EffectParameters } from './graphics3d/Scene';

/**
 * 导出场景
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export { RenderConfiguration } from './graphics3d/Scene';

/**
 * 导出BoidsSim
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export {
    BoidsSimPlugin, BoidsSimWorld, BoidsSimParameters, BoidsSimGravityParameters,
    BoidsSimRepulsionParameters } from './graphics3d/SceneBoidsSim';

/**
 * 导出SceneLoadParams
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export { SceneLoadParams } from './graphics3d/Scene';

/**
 * 导出场景类型
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 26.0.0 dynamic&static
 */
export { ShadowAlgorithmType } from './graphics3d/SceneTypes';

/**
 * 导出场景
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 26.0.0 dynamic&static
 */
export { SoftShadowConfig, PCFConfig } from './graphics3d/Scene';