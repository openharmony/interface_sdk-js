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
 * @file The SceneResource module provides basic resource types in 3D graphics.
 * @kit ArkGraphics3D
 */

/*** if arkts static */
import { ResourceStr } from '@ohos.arkui.component';
/*** endif */
import { Vec2, Vec3, Vec4, Aabb, Quaternion } from './SceneTypes';
import { Callback } from '../@ohos.base';

/**
 * Enumerates the scene resource types, which are used to classify resources in a scene.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export enum SceneResourceType {
  /**
   * Unknown.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  UNKNOWN = 0,

  /**
   * Node type.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  NODE = 1,

  /**
   * Environment resource.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  ENVIRONMENT = 2,

  /**
   * Material type.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  MATERIAL = 3,

  /**
   * Mesh resource.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  MESH = 4,

  /**
   * Animation resource.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  ANIMATION = 5,

  /**
   * Shader resource.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  SHADER = 6,

  /**
   * Image resource.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  IMAGE = 7,

  /**
   * Mesh resource.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  MESH_RESOURCE = 8,

  /**
   * Post-processing effect resource.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  EFFECT = 9
}

/**
 * Describes a resource in a scene.
 *
 * @interface SceneResource
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface SceneResource {
  /**
   * Name. There is no special format requirement.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * Scene resource type. The default value is undefined.
   *
   * @type { SceneResourceType }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly resourceType: SceneResourceType;

  /**
   * Resource to load. The default value is undefined.
   *
   * @type { ?ResourceStr }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly uri?: ResourceStr;


  /**
   * Destroys the scene resource and releases all associated resources or references. Once released, the resource can no longer be used or accessed.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  destroy(): void;
}

/**
 * Shader resource, which inherits from [SceneResource]{@link SceneResource}.
 *
 * @extends SceneResource
 * @interface Shader
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Shader extends SceneResource {
  /**
   * Inputs of the shader.
   * 
   * @type { Record<string, double | Vec2 | Vec3 | Vec4 | Image> }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly inputs: Record<string, double | Vec2 | Vec3 | Vec4 | Image>;

  /**
   * Sets the inputs for the shader. This API delivers better performance than directly setting the **inputs** property.
   *
   * @param { Record<string, double | Vec2 | Vec3 | Vec4 | Image> } inputs - A mapping of strings to values for setting shader inputs.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  setShaderInputs(inputs: Record<string, double | Vec2 | Vec3 | Vec4 | Image>): void;
}

/**
 * Enumerates the material types in a scene. The material type defines how materials in a scene are rendered.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export enum MaterialType {
  /**
   * Shader-defined.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  SHADER = 1,
  
  /**
   * Metallic-Roughness model based on Physically Based Rendering (PBR), simulating realistic material lighting effects
   * through metallicity and roughness parameters.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  METALLIC_ROUGHNESS = 2,

  /**
   * Material that is not affected by lighting.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  UNLIT = 3,

  /**
   * Occlusion material: occludes other objects in the scene but does not occlude the environment.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  OCCLUSION = 4,

  /**
   * Draws only shadows. When the [Blend]{@link Blend} property of the material is enabled,
   * the material is blended with the background to simulate a transparent material effect.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  UNLIT_SHADOW_ALPHA = 100
}

/**
 * Enumerates the culling modes of PBR materials. You can improve rendering performance and visual quality by determining
 * whether the front or back faces of objects are culled.
 * 
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export enum CullMode {
  /**
   * Culling is disabled.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  NONE = 0,

  /**
   * Culls the front faces of geometric objects.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  FRONT = 1,

  /**
   * Culls the back faces of geometric objects.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  BACK = 2
}

/**
 * Enumerates the polygon drawing mode.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export enum PolygonMode {
  /**
   * Draws each face of the polygon.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  FILL = 0,

  /**
   * Draws only the wireframe of the polygon.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  LINE = 1,

  /**
   * Draws only the vertices of the polygon.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  POINT = 2
}

/**
 * Controls the transparency of materials.
 * 
 * @interface Blend
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface Blend {
  /**
   * Whether the transparency of the material is enabled. **true** if enabled, **false** otherwise.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  enabled: boolean;
}

/**
 * Describes the order in which materials are rendered, controlling the sequence of drawing in the rendering pipeline.
 * 
 * @interface RenderSort
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface RenderSort {
  /**
   * Rendering layer ID. A smaller value indicates an earlier rendering order.
   * The value range is [0, 63]. The default layer ID is 32.
   * 
   * @type { ?int }
   * @default 32 Default render sort layer id.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  renderSortLayer?: int;

  /**
   * Rendering order of different objects within the same rendering layer. A smaller value indicates an earlier rendering order.
   * The value range is [0, 255]. The default value is **0**.
   *
   * @type { ?int }
   * @default 0 Default render sort layer order.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  renderSortLayerOrder?: int;
}

/**
 * Material resource, which inherits from [SceneResource]{@link SceneResource}.
 *
 * @extends SceneResource
 * @interface Material
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Material extends SceneResource {
  /**
   * Material type.
   *
   * @type { MaterialType }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly materialType: MaterialType;
  
  /**
   * Whether the material receives shadows. **true** if the material receives shadows, **false** otherwise.
   * The default is **false**.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  shadowReceiver?: boolean;

  /**
   * Culling mode of the material, which can be used to determine whether to cull front or back faces.
   * The default value is **BACK**.
   *
   * @type { ?CullMode }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  cullMode?: CullMode;

  /**
   * Whether the material is transparent.
   * The default value is **false**.
   *
   * @type { ?Blend }
   * @default undefined, which means that blending is disabled.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  blend?: Blend;

  /**
   * Threshold of the alpha channel. If the alpha of a pixel is greater than or equal to this threshold, the pixel is rendered;
   * otherwise, the pixel is not rendered. Setting a value less than **1** enables this mode. The value range is [0, 1].
   * The default value is **1**.
   *
   * @type { ?double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  alphaCutoff?: double;

  /**
   * Rendering order, which determines the rendering sequence of materials in the rendering pipeline.
   * The default layer ID is 32, and the default order within the layer is 0.
   * 
   * @type { ?RenderSort }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  renderSort?: RenderSort;

  /**
   * Polygon drawing mode of the model.
   * The default value is **FILL**.
   *
   * @type { ?PolygonMode}
   * @default PolygonMode.FILL
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  polygonMode?: PolygonMode;
}

/**
 * Defines the textures, property factors, and texture samplers used by a material.
 * 
 * @interface MaterialProperty
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface MaterialProperty {
  /**
   * Texture map based on PBR properties to convey the texture information of the material.
   * 
   * @type { Image | null }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  image: Image | null;

  /**
   * PBR property factor, with different meanings for different properties.
   * 
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  factor: Vec4;

  /**
   * Texture sampler, with the default value set to **LINEAR** for magnification, minification, and mipmaps,
   * and to **REPEAT** for U, V, and W directions.
   *
   * @type { ?Sampler }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  sampler?: Sampler;
}

/**
 * Material resource for creating realistic appearances, using the Metallic-Roughness model based on PBR.
 * It simulates the surface lighting and reflection effects of different materials like metal and plastic
 * by adjusting metallicity and roughness parameters. It inherits from [Material]{@link Material}.
 * 
 * @extends Material
 * @interface MetallicRoughnessMaterial
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface MetallicRoughnessMaterial extends Material {
  /**
   * Base color map, which is used to represent the material's color in the absence of lighting.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  baseColor: MaterialProperty;

  /**
   * Normal map, which is used to represent the surface structure details of an object to enhance lighting realism
   * without altering the geometric structure.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  normal: MaterialProperty;

  /**
   * Metal material parameters.<br>**Roughness**: strength of reflection caused by the fine surface structure details of the material.<br>**Metallic**: metallic properties of the material.<br>**Reflectance**: reflectivity of the material.
   *
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  material: MaterialProperty;

  /**
   * Ambient occlusion map, which is used to simulate the occlusion of ambient light in recesses or detailed parts of an object
   * to enhance local shadows and improve detail realism.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  ambientOcclusion: MaterialProperty;

  /**
   * Emissive color, which is the color of the material as a light source.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  emissive: MaterialProperty;

  /**
   * Clear coat, similar to car paint, carbon fiber, or a wet surface,
   * which requires an additional transparent layer with reflective properties.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  clearCoat: MaterialProperty;

  /**
   * Roughness of the clear coat.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  clearCoatRoughness: MaterialProperty;
  
  /**
   * Normal map of the clear coat.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  clearCoatNormal: MaterialProperty;

  /**
   * Gentle, widespread shine of microfiber materials, ideal for representing fabrics and textiles.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  sheen: MaterialProperty;

  /**
   * Specular reflection of non-metallic materials, showing the intensity of traditional mirror-like reflections.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  specular: MaterialProperty;
}

/**
 * Material that is not affected by lighting. The shading value of the material is related only to the base color and is irrelevant to lighting conditions. It inherits from [Material]{@link Material}.
 *
 * @extends Material
 * @interface UnlitMaterial
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export interface UnlitMaterial extends Material {
  /**
   * Base color property, which defines the base color information of the material.
   *
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  baseColor: MaterialProperty
}

/**
 * This material inherits from [Material]{@link Material} and draws only the surface shadows.
 * When the [Blend]{@link Blend} property is enabled, the material can be blended with the background to simulate transparency.
 * 
 * @extends Material
 * @interface UnlitShadowAlphaMaterial
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic&static
 */
export interface UnlitShadowAlphaMaterial extends Material {
  /**
   * Color information of the shadow on the surface of a transparent material.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  baseColor: MaterialProperty;
}

/**
 * Shader material, which inherits from [Material]{@link Material}.
 *
 * @extends Material
 * @interface ShaderMaterial
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface ShaderMaterial extends Material {
  /**
   * Shader. The default value is undefined.
   *
   * @type { ?Shader }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  colorShader?: Shader;
}

/**
 * Occlusion material: occludes other objects in the scene but does not occlude the environment. It is inherited from [Material]{@link Material}.
 *
 * @extends Material
 * @interface OcclusionMaterial
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export interface OcclusionMaterial extends Material {
}

/**
 * Enumerates the filtering modes of a sampler.
 * The filtering mode determines the interpolation method used when sampling textures,
 * controlling how final pixel colors are calculated during texture scaling or deformation.
 * 
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export enum SamplerFilter {
  /**
   * Uses nearest-neighbor interpolation, which is fast but can result in jagged edges.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  NEAREST = 0,
  /**
   * Uses linear interpolation, providing a smoother appearance but with a slight performance cost.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  LINEAR = 1,
}

/**
 * Enumerates the sampler addressing modes, which are used to control how texture coordinates are handled
 * when they go beyond the [0, 1] range.
 * 
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export enum SamplerAddressMode {
  /**
   * The texture repeats when the coordinates exceed the range.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  REPEAT = 0,

  /**
   * The texture mirrors and repeats when the coordinates exceed the range.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  MIRRORED_REPEAT = 1,

  /**
   * The edge pixels of the texture are stretched when the coordinates exceed the range.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  CLAMP_TO_EDGE = 2,
}

/**
 * Describes the sampling modes used during texture sampling.
 * 
 * @interface { Sampler }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface Sampler {
  /**
   * Sampling mode when the texture is enlarged. The default value is **LINEAR**.
   *
   * @type { ?SamplerFilter }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  magFilter?: SamplerFilter;

  /**
   * Sampling mode when the texture is reduced. The default value is **LINEAR**.
   *
   * @type { ?SamplerFilter }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  minFilter?: SamplerFilter;

  /**
   * Sampling modes between different texture resolutions. The default value is **LINEAR**.
   *
   * @type { ?SamplerFilter }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  mipMapMode?: SamplerFilter;

  /**
   * Sampling mode of the texture in the U (horizontal) direction. The default value is **REPEAT**.
   *
   * @type { ?SamplerAddressMode }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  addressModeU?: SamplerAddressMode;

  /**
   * Sampling mode of the texture in the V (vertical) direction. The default value is **REPEAT**.
   *
   * @type { ?SamplerAddressMode }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  addressModeV?: SamplerAddressMode;
}

/**
 * Sub-mesh resource.
 *
 * @interface SubMesh
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface SubMesh {
  /**
   * Name. There is no special format requirement.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * Material.
   *
   * @type { Material }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  material: Material;

  /**
   * Axis aligned bounding box.
   *
   * @type { Aabb }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly aabb: Aabb;
}

/**
 * Defines the deformation of 3D models by adjusting the weights of different deformation targets to create dynamic effects.
 * 
 * @interface Morpher
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface Morpher {
  /**
   * Used to store the names and weights of deformation targets.
   * The weight value is usually within the range of [0.0, 1.0].
   * 
   * @type { Record<string, double> }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  readonly targets: Record<string, double>;
}

/**
 * Mesh resource, which inherits from [SceneResource]{@link SceneResource}.
 *
 * @extends SceneResource
 * @interface Mesh
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Mesh extends SceneResource {
  /**
   * Array of sub-meshes.
   *
   * @type { SubMesh[] }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly subMeshes: SubMesh[];

  /**
   * Axis aligned bounding box.
   *
   * @type { Aabb }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly aabb: Aabb;

  /**
   * Material. The default value is undefined.
   *
   * @type { ?Material }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  materialOverride?: Material;
}

/**
 * Mesh resource, which inherits from [SceneResource]{@link SceneResource}.
 *
 *
 * @extends SceneResource
 * @interface MeshResource
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export interface MeshResource extends SceneResource {
}

/**
 * Animation resource, which inherits from [SceneResource]{@link SceneResource}.
 *
 * @extends SceneResource
 * @interface Animation
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Animation extends SceneResource {
  /**
   * Whether the animation is enabled. **true** if enabled, **false** otherwise.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  enabled: boolean;

  /**
   * Playback speed factor of the animation. The default value is **1.0**, indicating that the animation is played at normal speed.
   * If the value is negative, the animation plays in reverse.
   *
   * @type { ?double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  speed?: double;

  /**
   * Animation duration, in seconds. The value must be greater than or equal to 0.
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly duration: double;

  /**
   * Whether the animation is running. **true** if running, **false** otherwise.
   *
   * @type { boolean }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly running: boolean;

  /**
   * Playing progress of the animation. The value range is [0, 1].
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly progress: double;

  /**
   * Called when the animation playback is complete or the **finish** API is called.
   *
   * @param { Callback<void> } callback - Callback function. The return value is null.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  onFinished(callback: Callback<void>): void;

  /**
   * Called when the animation starts to play. The start operation is triggered by calling **start** or **restart**.
   *
   * @param { Callback<void> } callback - Callback function. The return value is null.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  onStarted(callback: Callback<void>): void;

  /**
   * Pauses the animation. The animation remains in the current playing progress.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  pause(): void;

  /**
   * Plays the animation from the beginning.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  restart(): void;

  /**
   * Plays the animation from the specified position.
   *
   * @param { double } position - Position from which the animation playback starts. The value range is [0, 1].
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  seek(position: double): void;

  /**
   * Plays the animation based on the current progress.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  start(): void;

  /**
   * Stops playing the animation and sets its progress to **0** (not started).
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  stop(): void;

  /**
   * Finishes the playing of the animation and sets its progress of **1** (finished).
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  finish(): void;
}

/**
 * Enumerates the environment background types, which are used to define how the background of a scene is presented.
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export enum EnvironmentBackgroundType {
  /**
   * No background.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  BACKGROUND_NONE = 0,

  /**
   * Image background.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  BACKGROUND_IMAGE = 1,

  /**
   * Cubemap background.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  BACKGROUND_CUBEMAP = 2,

  /**
   * Equirectangular projection background.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  BACKGROUND_EQUIRECTANGULAR = 3,
}

/**
 * Environment resource, which inherits from [SceneResource]{@link SceneResource}.
 *
 * @extends SceneResource
 * @interface Environment
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Environment extends SceneResource {
  /**
   * Environment background type.
   *
   * @type { EnvironmentBackgroundType }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  backgroundType: EnvironmentBackgroundType;

  /**
   * Indirect diffuse factor.
   *
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  indirectDiffuseFactor: Vec4;

  /**
   * Indirect specular factor.
   *
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  indirectSpecularFactor: Vec4;

  /**
   * Environment map factor.
   *
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  environmentMapFactor: Vec4;

  /**
   * Environment image. The default value is undefined.
   *
   * @type { ?(Image | null) }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  environmentImage?: Image | null;

  /**
   * Radiance image. The default value is undefined.
   *
   * @type { ?(Image | null) }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  radianceImage?: Image | null;

  /**
   * Irradiance coefficients. The default value is undefined.
   *
   * @type { ?Vec3[] }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  irradianceCoefficients?: Vec3[];

  /**
   * Rotation of the ambient light. The default value is undefined. The parameter must be a normalized quaternion.
   * 
   * @default Quaternion {x:0, y:0, z:0, w:1}
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  environmentRotation?: Quaternion
}

/**
 * Image resource, which inherits from [SceneResource]{@link SceneResource}.
 *
 * @extends SceneResource
 * @interface Image
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Image extends SceneResource {
  /**
   * Image width, in px. The value must be greater than 0.
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly width: int;

  /**
   * Image height, in px. The value must be greater than 0.
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly height: int;
}

/**
 * ImageStream resource.
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface ImageStream extends Image {
  /**
   * The surfaceId of the imageStream.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  readonly surfaceId: string;
}

/**
 * Effect resource, which inherits from [SceneResource]{@link SceneResource}. It is obtained from the [createEffect]{@link SceneResourceFactory.createEffect} API.
 *
 * @extends SceneResource
 * @interface Effect
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 21 dynamic
 * @since 23 static
 */
export interface Effect extends SceneResource {
  /**
   * Enabled status of the effect. **true** if enabled, **false** otherwise.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  enabled: boolean;

  /**
   * Effect ID, which is in the format of 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX', for example, **'e68a7f45-2d21-4a0d-9aef-7d9c825d3f12'**. It is used to create an effect.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  readonly effectId: string;

  /**
   * Obtains the value of the specified effect property.
   *
   * @param { string } propertyName - Name of a specified effect property. Currently, the following strings are supported:<br>-'exposure': exposure level of an image.<br>-'vibrance': natural saturation of an image.
   * @returns { Object | null | undefined } Effect property value. If the value fails to be obtained, **null** is returned.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  getPropertyValue(propertyName: string): Object | null | undefined;

  /**
   * Sets the value of a specified effect property.
   *
   * @param { string } propertyName - Name of a specified effect property. Currently, the following strings are supported:<br>-'exposure': exposure level of an image.<br>-'vibrance': natural saturation of an image.
   * @param { Object | undefined } value - Value of the effect property to set.<br>-'exposure': The value is of the number type. The recommended value range is [-5, 5]. A larger value indicates a brighter image.<br>-'vibrance': The value is of the number type. The recommended value range is [-1, 1]. A larger value indicates more vivid image colors.
   * @returns { boolean } Whether the operation of setting the effect property value is successful. **true** indicates that the setting is successful, and **false** indicates that the setting fails.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  setPropertyValue(propertyName: string, value: Object | undefined): boolean;
}