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
import { Vec2, Vec3, Vec4, Aabb, Quaternion } from './SceneTypes';
import { Callback } from '../@ohos.base';

/**
 * 场景资源类型枚举，对场景中的资源进行分类。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export enum SceneResourceType {
  /**
   * 未定义类型。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  UNKNOWN = 0,

  /**
   * 节点类型。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  NODE = 1,

  /**
   * 环境类型。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  ENVIRONMENT = 2,

  /**
   * 材质类型。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  MATERIAL = 3,

  /**
   * 网格类型。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  MESH = 4,

  /**
   * 动画类型。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  ANIMATION = 5,

  /**
   * 着色器类型。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  SHADER = 6,

  /**
   * 图片类型。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  IMAGE = 7,

  /**
   * 网格资源类型。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  MESH_RESOURCE = 8,

  /**
   * 后处理特效类型。
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  EFFECT = 9
}

/**
 * 用于表示场景中的资源。
 *
 * @interface SceneResource
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface SceneResource {
  /**
   * 名称，没有特殊格式要求。
   *
   * @type { string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * 场景资源类型，默认值为undefined。
   *
   * @type { SceneResourceType }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly resourceType: SceneResourceType;

  /**
   * 需要加载的资源，默认值为undefined。
   *
   * @type { ?ResourceStr }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly uri?: ResourceStr;


  /**
   * 销毁场景资源，释放所有关联的资源或引用，一旦被释放，资源就不能被再次使用或访问。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  destroy(): void;
}

/**
 * 着色器，继承自SceneResource。
 *
 * @extends SceneResource
 * @interface Shader
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Shader extends SceneResource {
  /**
   * 着色器输入。
   * 
   * @type { Record<string, double | Vec2 | Vec3 | Vec4 | Image> }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly inputs: Record<string, double | Vec2 | Vec3 | Vec4 | Image>;

  /**
   * 设置Shader的输入，该接口性能优于直接设置inputs属性。
   * @param { Record<string, double | Vec2 | Vec3 | Vec4 | Image> } inputs - 一个字符串到值的映射，用于设置着色器输入。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  setShaderInputs(inputs: Record<string, double | Vec2 | Vec3 | Vec4 | Image>): void;
}

/**
 * 场景中物体材质类型枚举，定义材质的渲染方式。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export enum MaterialType {
  /**
   * 材质由着色器定义。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  SHADER = 1,
  
  /**
   * 采用基于物理渲染（PBR）的金属-粗糙度模型，通过金属度与粗糙度参数，模拟更真实的材质光照效果。
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  METALLIC_ROUGHNESS = 2,

  /**
   * 不受光照影响的材质。
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  UNLIT = 3,

  /**
   * 遮挡材质，能够遮挡场景中的其他物体但不会遮挡环境。
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  OCCLUSION = 4,

  /**
   * 仅对阴影进行绘制，当材质开启Blend属性，与背景融合模拟透明材质效果。
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  UNLIT_SHADOW_ALPHA = 100
}

/**
 * 用于设置基于物理渲染（PBR）材质的剔除模式枚举。通过控制剔除物体的正面或背面几何面片，提升渲染性能和视觉效果。
 * 
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export enum CullMode {
  /**
   * 禁用剔除。
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  NONE = 0,

  /**
   * 剔除正面几何面片。
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  FRONT = 1,

  /**
   * 剔除背面几何面片。
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  BACK = 2
}

/**
 * 控制多边形绘制模式的枚举。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export enum PolygonMode {
  /**
   * 绘制多边形的每个面。
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  FILL = 0,

  /**
   * 仅绘制多边形线框。
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  LINE = 1,

  /**
   * 仅绘制多边形顶点。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  POINT = 2
}

/**
 * 用于控制材质的透明效果。
 *
 * @interface Blend
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface Blend {
  /**
   * 是否启用材质的透明效果模式。true表示开启透明，false表示关闭透明。
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  enabled: boolean;
}

/**
 * 定义材质物体的渲染顺序，控制不同物体在渲染管线中的绘制先后。
 *
 * @interface RenderSort
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface RenderSort {
  /**
   * 渲染图层id，数值越小，渲染顺序越靠前。取值范围[0, 63]，默认图层id为32。
   *
   * @type { ?int }
   * @default 32
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  renderSortLayer?: int;

  /**
   * 同一渲染图层内，不同物体的渲染顺序，数值越小，越先渲染。取值范围[0, 255]，默认值为0。
   *
   * @type { ?int }
   * @default 0
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  renderSortLayerOrder?: int;
}

/**
 * 材质类型，继承自SceneResource。
 *
 * @extends SceneResource
 * @interface Material
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Material extends SceneResource {
  /**
   * 材质类型。
   *
   * @type { MaterialType }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly materialType: MaterialType;
  
  /**
   * 材质是否接收阴影。true表示该材质接收阴影，false表示不接收，默认值为false。
   * 
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  shadowReceiver?: boolean;

  /**
   * 当前材质的剔除模式设置，用于控制是否剔除背面几何面片，默认值为BACK。
   * 
   * @type { ?CullMode }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  cullMode?: CullMode;

  /**
   * 材质的透明效果设置，默认值为undefined，即禁用材质的透明属性。
   * 
   * @type { ?Blend }
   * @default undefined
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  blend?: Blend;

  /**
   * 透明通道阈值，如果像素的alpha值等于或高于此阈值，则渲染该像素；如果低于此阈值，则不会渲染该像素。
   * 设置值小于1时，则开启该模式，取值范围为[0, 1]，默认值为1。
   * 
   * @type { ?double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  alphaCutoff?: double;

  /**
   * 渲染排序设置，用于控制材质在渲染管线中的渲染顺序，渲染图层id默认值为32，同一图层内的渲染顺序默认值为0。
   * 
   * @type { ?RenderSort }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  renderSort?: RenderSort;

  /**
   * 模型的多边形绘制模式，默认值为FILL。
   * 
   * @type { ?PolygonMode}
   * @default PolygonMode.FILL
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  polygonMode?: PolygonMode;
}

/**
 * 材质属性接口，用于定义材质所使用的纹理、属性因子及纹理采样器信息。
 *
 * @interface MaterialProperty
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface MaterialProperty {
  /**
   * 基于物理渲染（PBR）属性纹理贴图，用于表达材质的纹理信息。
   *
   * @type { Image | null }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  image: Image | null;

  /**
   * 基于物理渲染（PBR）属性因子，不同属性不同含义。
   *
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  factor: Vec4;

  /**
   * 纹理贴图采样器，默认使用放大、缩小和mipmap过滤模式为线性过滤（LINEAR），纹理贴图U、V、W方向的寻址模式为重复（REPEAT）。
   * 
   * @type { ?Sampler }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  sampler?: Sampler;
}

/**
 * 用于实现真实感外观的材质资源。
 * 采用基于物理渲染（PBR）的金属-粗糙度模型，通过调节金属度和粗糙度参数，可模拟金属、塑料等不同材质的表面光照与反射效果，继承自Material。
 *
 * @extends Material
 * @interface MetallicRoughnessMaterial
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface MetallicRoughnessMaterial extends Material {
  /**
   * 基础颜色贴图，用于表达材质在没有光照情况下所表达的颜色信息。
   *
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  baseColor: MaterialProperty;

  /**
   * 法线贴图，表达物体表面结构细节，使光照效果更真实，不改变几何结构。
   *
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  normal: MaterialProperty;

  /**
   * 金属材质参数。
   * 粗糙度（Roughness）：表达材质因其表面细微的结构细节所导致的反光强弱程度。
   * 金属度（Metallic）：表达材质的金属属性。
   * 反射度（Reflectance）：材质的光反射率。
   *
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  material: MaterialProperty;

  /**
   * 环境光遮蔽贴图，用于模拟环境光在物体凹陷或细节部分的遮挡效果，增强局部阴影表现，提高细节真实感。
   *
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  ambientOcclusion: MaterialProperty;

  /**
   * 自发光颜色，表达材质自身作为光源向外发光的颜色信息。
   *
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  emissive: MaterialProperty;

  /**
   * 透明图层，用于在材质表面叠加一层具有反光特性的透明图层，可模拟车漆、碳纤、被水打湿的表面等材质的光泽表现。
   *
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  clearCoat: MaterialProperty;

  /**
   * 透明图层粗糙度。
   *
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  clearCoatRoughness: MaterialProperty;
  
  /**
   * 透明图层法线贴图。
   *
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  clearCoatNormal: MaterialProperty;

  /**
   * 微纤维漫反射材质光泽，可用于表示布料和织物材料。
   *
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  sheen: MaterialProperty;

  /**
   * 非金属材质的高光反射，表示传统镜面反射强度。
   *
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  specular: MaterialProperty;
}

/**
 * 不受光照影响的材质，其着色值只与设置的基础颜色有关，与光照条件无关，继承自Material。
 *
 * @extends Material
 * @interface UnlitMaterial
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export interface UnlitMaterial extends Material {
  /**
   * 基础颜色属性，用于表达材质的基础颜色信息。
   *
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  baseColor: MaterialProperty
}

/**
 * 此材质继承自Material，仅绘制材质表面阴影。材质启用Blend属性时，可与背景融合模拟透明效果。
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
   * 基础颜色属性，用于表示透明材质表面阴影的颜色信息。
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
 * 着色器材质，继承自Material。
 *
 * @extends Material
 * @interface ShaderMaterial
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface ShaderMaterial extends Material {
  /**
   * 着色器，默认值为undefined。
   *
   * @type { ?Shader }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  colorShader?: Shader;
}

/**
 * 遮挡材质，能够遮挡场景中的其他物体但不会遮挡环境，继承自Material。
 *
 * @extends Material
 * @interface OcclusionMaterial
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export interface OcclusionMaterial extends Material {
}

/**
 * 采样器过滤模式枚举，定义纹理采样时的插值方法，用于控制纹理在缩放或变形时如何计算最终像素的颜色值。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export enum SamplerFilter {
  /**
   * 使用最近邻插值进行采样，速度快但边缘可能锯齿明显。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  NEAREST = 0,
  /**
   * 使用线性插值进行采样，效果更平滑但性能略低。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  LINEAR = 1,
}

/**
 * 采样器寻址模式枚举，用于控制纹理坐标超出[0, 1]范围时的处理方式。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export enum SamplerAddressMode {
  /**
   * 纹理坐标超出范围时，纹理会重复平铺。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  REPEAT = 0,

  /**
   * 纹理坐标超出范围时，纹理以镜像方式重复。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  MIRRORED_REPEAT = 1,

  /**
   * 纹理坐标超出范围时，贴图边缘像素会被拉伸延伸。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  CLAMP_TO_EDGE = 2,
}

/**
 * 采样器接口，用于定义纹理贴图采样时的过滤方式。
 *
 * @interface { Sampler }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface Sampler {
  /**
   * 放大过滤模式，控制纹理贴图被放大时的采样方式，默认值为LINEAR。
   *
   * @type { ?SamplerFilter }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  magFilter?: SamplerFilter;

  /**
   * 缩小过滤模式，控制纹理贴图被缩小时的采样方式，默认值为LINEAR。
   *
   * @type { ?SamplerFilter }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  minFilter?: SamplerFilter;

  /**
   * mipmap过滤模式，控制纹理贴图在多层不同分辨率之间的采样方式，默认值为LINEAR。
   *
   * @type { ?SamplerFilter }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  mipMapMode?: SamplerFilter;

  /**
   * 纹理贴图U方向（水平）的采样方式，默认值为REPEAT。
   *
   * @type { ?SamplerAddressMode }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  addressModeU?: SamplerAddressMode;

  /**
   * 纹理贴图V方向（垂直）的采样方式，默认值为REPEAT。
   *
   * @type { ?SamplerAddressMode }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  addressModeV?: SamplerAddressMode;
}

/**
 * 子网格类型。
 *
 * @interface SubMesh
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface SubMesh {
  /**
   * 名称，没有特殊格式要求。
   *
   * @type { string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * 材质。
   *
   * @type { Material }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  material: Material;

  /**
   * 轴对齐包围盒。
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
 * 用于控制3D模型的形变，通过调整不同形变目标的权重，实现模型的动态变形效果。
 *
 * @interface Morpher
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface Morpher {
  /**
   * 用于存储所有形变目标的名称和对应的权重。权重值通常在[0.0, 1.0]范围内。
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
 * 网格类型，继承自SceneResource。
 *
 * @extends SceneResource
 * @interface Mesh
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Mesh extends SceneResource {
  /**
   * 子网格数组。
   *
   * @type { SubMesh[] }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly subMeshes: SubMesh[];

  /**
   * 轴对齐包围盒。
   *
   * @type { Aabb }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly aabb: Aabb;

  /**
   * 材质，默认为空。
   *
   * @type { ?Material }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  materialOverride?: Material;
}

/**
 * 网格资源，继承自SceneResource。
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
 * 动画类型，继承自SceneResource。
 *
 * @extends SceneResource
 * @interface Animation
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Animation extends SceneResource {
  /**
   * 动画是否启用。true表示可以播放动画，false表示不可以播放动画。
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  enabled: boolean;

  /**
   * 动画的播放速度因子。默认值为1.0，表示正常速度播放。如果设置为负值，动画将以反向速度播放。
   *
   * @type { ?double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  speed?: double;

  /**
   * 动画持续时间，单位为秒（s），取值范围大于等于0。
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly duration: double;

  /**
   * 动画运行状态。true表示动画正在播放，false表示动画停止播放。
   *
   * @type { boolean }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly running: boolean;

  /**
   * 动画进度状态，取值区间为[0, 1]。
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly progress: double;

  /**
   * 动画播放结束时执行的回调函数，动画播放完成或者finish操作会触发这个回调。
   *
   * @param { Callback<void> } callback - 回调函数，返回值为空。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  onFinished(callback: Callback<void>): void;

  /**
   * 当动画开始播放时执行的回调函数，start操作以及restart操作也会触发这个回调。
   *
   * @param { Callback<void> } callback - 回调函数，返回值为空。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  onStarted(callback: Callback<void>): void;

  /**
   * 将动画暂停，动画的播放进度保持在当前状态。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  pause(): void;

  /**
   * 从动画的起点开始播放动画。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  restart(): void;

  /**
   * 将动画进度跳转到指定位置，不改变动画的播放状态（已播放仍继续播放，已暂停仍暂停）。
   *
   * @param { double } position - 要重新播放动画的起始位置，取值区间为[0, 1]。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  seek(position: double): void;

  /**
   * 基于当前进度开始播放一个动画。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  start(): void;

  /**
   * 停止播放一个动画，并将动画的进度设置为0。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  stop(): void;

  /**
   * 直接跳转到动画的最后，并将动画的进度设置为1。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  finish(): void;
}

/**
 * 环境背景类型枚举，用于定义场景的背景呈现方式。
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export enum EnvironmentBackgroundType {
  /**
   * 无背景。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  BACKGROUND_NONE = 0,

  /**
   * 图片背景。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  BACKGROUND_IMAGE = 1,

  /**
   * 立方体贴图背景。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  BACKGROUND_CUBEMAP = 2,

  /**
   * 等距柱状投影背景。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  BACKGROUND_EQUIRECTANGULAR = 3,
}

/**
 * 环境类型，继承自SceneResource。
 *
 * @extends SceneResource
 * @interface Environment
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Environment extends SceneResource {
  /**
   * 环境背景类型。
   *
   * @type { EnvironmentBackgroundType }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  backgroundType: EnvironmentBackgroundType;

  /**
   * 间接散射系数。
   *
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  indirectDiffuseFactor: Vec4;

  /**
   * 间接反射系数。
   *
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  indirectSpecularFactor: Vec4;

  /**
   * 环境地图系数。
   *
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  environmentMapFactor: Vec4;

  /**
   * 环境图片，默认为undefined。
   *
   * @type { ?(Image | null) }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  environmentImage?: Image | null;

  /**
   * 辐射图片，默认为undefined。
   *
   * @type { ?(Image | null) }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  radianceImage?: Image | null;

  /**
   * 辐射系数，默认为undefined。
   *
   * @type { ?Vec3[] }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  irradianceCoefficients?: Vec3[];

  /**
   * 环境光的旋转，默认为undefined，接收参数需为归一化后的四元数。
   *
   * @default undefined
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  environmentRotation?: Quaternion
}

/**
 * 图片类型，继承自SceneResource。
 *
 * @extends SceneResource
 * @interface Image
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Image extends SceneResource {
  /**
   * 图片宽度，单位为像素（px），取值范围大于0。
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly width: int;

  /**
   * 图片高度，单位为像素（px），取值范围大于0。
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
 * 流图片类型，继承自Image。
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface ImageStream extends Image {
  /**
   * 流ID，由数字字符组成，数字取值必须为大于0的整数。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  readonly surfaceId: string;
}

/**
 * 特效类型，继承自SceneResource。由createEffect接口获得。
 *
 * @extends SceneResource
 * @interface Effect
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 21 dynamic
 * @since 23 static
 */
export interface Effect extends SceneResource {
  /**
   * 特效打开状态。true表示开启特效，false表示关闭特效。
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  enabled: boolean;

  /**
   * 特效ID，固定格式为'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX'，用于特效的创建，比如'e68a7f45-2d21-4a0d-9aef-7d9c825d3f12'。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  readonly effectId: string;

  /**
   * 获取特定特效属性的值。
   *
   * @param { string } propertyName - 特定特效属性的名称。目前支持的字符串为：
   *     -'exposure'：该属性表示图像的曝光度。
   *     -'vibrance'：该属性表示图像的自然饱和度。
   * @returns { Object | null | undefined } 特效属性值。
   *     若当前Effect类型下不存在与传入的propertyName匹配的属性，则获取属性值失败，返回null；
   *     若propertyName对应的可选属性未设置，则返回undefined。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  getPropertyValue(propertyName: string): Object | null | undefined;

  /**
   * 设置特定特效属性的值。
   *
   * @param { string } propertyName - 特定特效属性的名称。目前支持的字符串为：
   *     -'exposure'：该属性表示图像的曝光度。
   *     -'vibrance'：该属性表示图像的自然饱和度。
   * @param { Object | undefined } value - 要设置的特效属性值。
   *     'exposure'：value实际类型为number，推荐取值范围[-5, 5]。取值越大，图像越亮。
   *     'vibrance'：value实际类型为number，推荐取值范围 [-1, 1]。取值越大，图像颜色越鲜艳。
   * @returns { boolean } 返回设置特效属性值操作是否成功。true表示设置成功，false表示设置失败。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  setPropertyValue(propertyName: string, value: Object | undefined): boolean;
}