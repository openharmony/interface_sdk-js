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
 * @file ArkGraphics 3D
 * @kit ArkGraphics3D
 */

/**
 * provides image post-processing methods (for example, tone mapping) in 3D graphics.
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export { ToneMappingType, ToneMappingSettings, PostProcessSettings, BloomSettings, VignetteSettings, ColorFringeSettings } from './graphics3d/ScenePostProcessSettings';

/**
 * provides the data types in 3D graphics, including vectors and quaternions.
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export { Vec2, Vec3, Vec4, Color, Rect, Quaternion, Aabb, Position3, Rotation3, Scale3, GeometryType, GeometryDefinition,
  PrimitiveTopology, CustomGeometry, CubeGeometry, PlaneGeometry, SphereGeometry,
  RenderingPipelineType } from './graphics3d/SceneTypes';

/**
 * provides the data types in 3D graphics, including vectors and quaternions.
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export { Mat4x4, CylinderGeometry } from './graphics3d/SceneTypes';

/**
 * provides basic resource types, such as materials, images, and shaders, which are commonly used in 3D graphics.
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export { SceneResourceType, SceneResource, Shader, MaterialType, Material, ShaderMaterial,
  SubMesh, Mesh, Animation, EnvironmentBackgroundType, Environment, Image, ImageStream, CullMode, Blend,
  RenderSort, MaterialProperty, MetallicRoughnessMaterial, MeshResource, Morpher,
  Sampler, SamplerFilter, SamplerAddressMode, Effect } from './graphics3d/SceneResources';

/**
 * provides basic resource types, such as materials, images, and shaders, which are commonly used in 3D graphics.
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic&static
 */
export { UnlitShadowAlphaMaterial } from './graphics3d/SceneResources';

/**
 * provides basic resource types, such as materials, images, and shaders, which are commonly used in 3D graphics.
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export { PolygonMode, UnlitMaterial, OcclusionMaterial } from './graphics3d/SceneResources';

/**
 * 3D scenes adopt a tree structure. You can change the 3D scene by operating the node properties and the node tree structure. The module provides the types and operation methods of scene nodes in 3D graphics.
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export { LayerMask, NodeType, Container, Node, Geometry, LightType, Light, SpotLight, DirectionalLight,
  Camera } from './graphics3d/SceneNodes';

/**
 * ArkGraphics 3D basic module, which provides common data types such as SceneResourceParameters and SceneNodeParameters. It also provides basic methods such as glTF model loading, scene creation, and resource creation.
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export { SceneResourceParameters, SceneNodeParameters, SceneResourceFactory, Scene, RaycastResult, RaycastParameters,
  RenderParameters, RenderResourceFactory, SceneComponent, RenderContext, CameraParameters, EffectParameters } from './graphics3d/Scene';

/**
 * ArkGraphics 3D basic module, which provides common data types such as SceneResourceParameters and SceneNodeParameters. It also provides basic methods such as glTF model loading, scene creation, and resource creation.
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export { RenderConfiguration } from './graphics3d/Scene';

/**
 * This module provides types and operation methods for Boids simulation animation in 3D graphics. Boids simulation animation is a computer animation method that drives individuals in a group through rules such as separation, alignment, and cohesion, making them exhibit movement characteristics similar to flocks of birds or schools of fish in nature.
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export {
    BoidsSimPlugin, BoidsSimWorld, BoidsSimParameters, BoidsSimGravityParameters,
    BoidsSimRepulsionParameters } from './graphics3d/SceneBoidsSim';

/**
 * ArkGraphics 3D basic module, which provides common data types such as SceneResourceParameters and SceneNodeParameters. It also provides basic methods such as glTF model loading, scene creation, and resource creation.
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export { SceneLoadParams } from './graphics3d/Scene';

/**
 * Export scene types
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 26.0.0 dynamic&static
 */
export { ShadowAlgorithmType } from './graphics3d/SceneTypes';

/**
 * Export scene
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 26.0.0 dynamic&static
 */
export { SoftShadowConfig, PCFConfig } from './graphics3d/Scene';