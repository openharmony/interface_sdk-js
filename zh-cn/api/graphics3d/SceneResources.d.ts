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
 * @file Defines 3D resource related interfaces
 * @kit ArkGraphics3D
 */

/*** if arkts static */
import { ResourceStr } from '@ohos.arkui.component';
/*** endif */
import { Vec2, Vec3, Vec4, Aabb, Quaternion } from './SceneTypes';
import { Callback } from '../@ohos.base';

/**
 * 场景资源类型枚举.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export enum SceneResourceType {
  /**
   * 资源是Unknown类型.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  UNKNOWN = 0,

  /**
   * 资源是Node类型.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  NODE = 1,

  /**
   * 资源是Environment类型.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  ENVIRONMENT = 2,

  /**
   * 资源是Material类型.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  MATERIAL = 3,

  /**
   * 资源是Mesh类型.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  MESH = 4,

  /**
   * 资源是Animation类型.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  ANIMATION = 5,

  /**
   * 资源是Shader类型.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  SHADER = 6,

  /**
   * 资源是Image类型.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  IMAGE = 7,

  /**
   * 资源是MeshResource类型
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  MESH_RESOURCE = 8,

  /**
   * 资源是Effect类型.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  EFFECT = 9
}

/**
 * 定义被其他3D资源扩展的场景资源.
 *
 * @interface SceneResource
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface SceneResource {
  /**
   * 场景资源名称.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * 场景资源类型.
   *
   * @type { SceneResourceType }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly resourceType: SceneResourceType;

  /**
   * 场景资源URI.
   *
   * @type { ?ResourceStr }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly uri?: ResourceStr;


  /**
   * 释放场景资源.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  destroy(): void;
}

/**
 * 着色器资源.
 *
 * @extends SceneResource
 * @interface Shader
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Shader extends SceneResource {
  /**
   * 着色器输入.
   * 
   * @type { Record<string, double | Vec2 | Vec3 | Vec4 | Image> }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly inputs: Record<string, double | Vec2 | Vec3 | Vec4 | Image>;

  /**
   * 设置着色器输入。与属性版本功能相同，但性能更优。
   * @param { Record<string, double | Vec2 | Vec3 | Vec4 | Image> } inputs - 着色器的输入
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  setShaderInputs(inputs: Record<string, double | Vec2 | Vec3 | Vec4 | Image>): void;
}

/**
 * 材质类型枚举.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export enum MaterialType {
  /**
   * 材质类型是Shader.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  SHADER = 1,
  
  /**
   * 材质是基于物理的金属粗糙度材质.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  METALLIC_ROUGHNESS = 2,

  /**
   * 材质是无光照材质.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  UNLIT = 3,

  /**
   * 材质是遮挡材质
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  OCCLUSION = 4,

  /**
   * 仅渲染材质表面接收的阴影，材质透明。
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  UNLIT_SHADOW_ALPHA = 100
}

/**
 * PBR材质剔除模式枚举.
 * 
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export enum CullMode {
  /**
   * 禁用剔除.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  NONE = 0,

  /**
   * 剔除正面.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  FRONT = 1,

  /**
   * 剔除背面.
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  BACK = 2
}

/**
 * 多边形模式枚举.
 * 
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export enum PolygonMode {
  /**
   * 渲染整个多边形
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  FILL = 0,

  /**
   * 仅渲染多边形的边（线框）
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  LINE = 1,

  /**
   * 仅渲染多边形的顶点
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  POINT = 2
}

/**
 * 混合接口.
 * 
 * @interface Blend
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface Blend {
  /**
   * 控制是否启用混合
   * 
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  enabled: boolean;
}

/**
 * 渲染排序层。在渲染槽中，层可以定义排序层顺序。
 * 可用值为0-63（0最先，63最后）。默认id值为32。
 * 典型用法：1. 将渲染排序层设置为对使用深度测试但未写入深度的对象进行渲染。
 * 2. 始终首先渲染角色和/或相机对象以剔除大部分视图。
 * 3. 对平面层进行排序。
 * 
 * @interface RenderSort
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface RenderSort {
  /**
   * 用于在渲染槽中对子网格进行排序的排序层.
   * 有效值为0-63.
   * 
   * @type { ?int }
   * @default 32 默认渲染排序层id。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  renderSortLayer?: int;

  /**
   * 排序层内描述精细顺序的排序层顺序.
   * 有效值为0-255.
   * 
   * @type { ?int }
   * @default 0 默认渲染排序层顺序。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  renderSortLayerOrder?: int;
}

/**
 * 材质资源.
 *
 * @extends SceneResource
 * @interface Material
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Material extends SceneResource {
  /**
   * 材质资源类型.
   *
   * @type { MaterialType }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly materialType: MaterialType;
  
  /**
   * 定义材质是否可以接收阴影.
   * 
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  shadowReceiver?: boolean;

  /**
   * 剔除模式.
   * 
   * @type { ?CullMode }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  cullMode?: CullMode;

  /**
   * 控制是否启用混合
   * 
   * @type { ?Blend }
   * @default undefined, which means that blending is disabled.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  blend?: Blend;

  /**
   * 透明度截止值[0,1]. Enabled if < 1.
   * 
   * @type { ?double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  alphaCutoff?: double;

  /**
   * 层的渲染排序优先级.
   * 
   * @type { ?RenderSort }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  renderSort?: RenderSort;

  /**
   * 材质的多边形模式
   * 
   * @type { ?PolygonMode}
   * @default PolygonMode.FILL 填充多边形模式
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  polygonMode?: PolygonMode;
}

/**
 * 材质属性接口.
 * 
 * @interface MaterialProperty
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface MaterialProperty {
  /**
   * 要使用的纹理. 如果未定义，factor定义漫反射颜色.
   * 
   * @type { Image | null }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  image: Image | null;

  /**
   * 纹理系数. 默认为{1,1,1,1}，表示无效果.
   * 
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  factor: Vec4;

  /**
   * 纹理采样器.
   * 
   * @type { ?Sampler }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  sampler?: Sampler;
}

/**
 * 基于物理的金属粗糙度材质资源.
 * 
 * @extends Material
 * @interface MetallicRoughnessMaterial
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface MetallicRoughnessMaterial extends Material {
  /**
   * PBR材质的基础颜色因子.
   * factor.xyzw的值定义rgba颜色.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  baseColor: MaterialProperty;

  /**
   * PBR材质的法线因子.
   * factor.x的值定义法线缩放.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  normal: MaterialProperty;

  /**
   * 金属粗糙度材质参数.
   * factor.y定义粗糙度，factor.z定义金属度，factor.a定义反射率.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  material: MaterialProperty;

  /**
   * PBR材质的环境光遮蔽.
   * factor.x定义环境光遮蔽因子.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  ambientOcclusion: MaterialProperty;

  /**
   * PBR材质的自发光属性.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  emissive: MaterialProperty;

  /**
   * 清漆强度.
   * factor.x定义清漆层强度.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  clearCoat: MaterialProperty;

  /**
   * 清漆粗糙度.
   * factor.y定义清漆层粗糙度.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  clearCoatRoughness: MaterialProperty;
  
  /**
   * 清漆法线.
   * factor.xyz定义RGB清漆法线缩放.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  clearCoatNormal: MaterialProperty;

  /**
   * PBR材质的光泽颜色.
   * Value of factor.xyz defines RGB sheen color,
   * Value of factor.w defines sheen roughness.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  sheen: MaterialProperty;

  /**
   * PBR材质的镜面反射颜色.
   * Value of factor.xyz defines RGB specular color,
   * Value of factor.w defines specular intensity.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  specular: MaterialProperty;
}

/**
 * 无光照材质资源
 * 
 * @extends Material
 * @interface UnlitMaterial
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export interface UnlitMaterial extends Material {
  /**
   * 无光照材质的基础颜色因子.
   * factor.xyzw的值定义rgba颜色.
   * 
   * @type { MaterialProperty }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 23 dynamic&static
   */
  baseColor: MaterialProperty
}

/**
 * 无光照阴影透明度材质资源
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
   * UnlitShadowAlphaMaterial的基础颜色因子.
   * factor.xyzw的值定义rgba颜色
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
 * 着色器材质资源.
 *
 * @extends Material
 * @interface ShaderMaterial
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface ShaderMaterial extends Material {
  /**
   * 材质的颜色着色器.
   *
   * @type { ?Shader }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  colorShader?: Shader;
}

/**
 * 遮挡材质资源
 *
 * @extends Material
 * @interface OcclusionMaterial
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 23 dynamic&static
 */
export interface OcclusionMaterial extends Material {
}

/**
 * 采样器过滤模式
 * 
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export enum SamplerFilter {
  /**
   * 使用最近邻过滤
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  NEAREST = 0,
  /**
   * 使用线性过滤
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  LINEAR = 1,
}

/**
 * 采样器的寻址模式
 * 
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export enum SamplerAddressMode {
  /**
   * 重复
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  REPEAT = 0,

  /**
   * 镜像重复
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  MIRRORED_REPEAT = 1,

  /**
   * 钳制到边缘
   * 
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  CLAMP_TO_EDGE = 2,
}

/**
 * 采样器接口
 * 
 * @interface { Sampler }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface Sampler {
  /**
   * 放大过滤
   * 
   * @type { ?SamplerFilter }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  magFilter?: SamplerFilter;

  /**
   * 缩小过滤
   * 
   * @type { ?SamplerFilter }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  minFilter?: SamplerFilter;

  /**
   * Mip-map模式
   * 
   * @type { ?SamplerFilter }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  mipMapMode?: SamplerFilter;

  /**
   * U寻址模式
   * 
   * @type { ?SamplerAddressMode }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  addressModeU?: SamplerAddressMode;

  /**
   * V寻址模式
   * 
   * @type { ?SamplerAddressMode }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  addressModeV?: SamplerAddressMode;
}

/**
 * 子网格资源.
 *
 * @interface SubMesh
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface SubMesh {
  /**
   * 子网格的名称.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * 子网格的材质.
   *
   * @type { Material }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  material: Material;

  /**
   * 子网格的轴对齐包围盒.
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
 * 定义用于指定节点几何体形变目标的Morpher接口.
 * 
 * @interface Morpher
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20 dynamic
 * @since 23 static
 */
export interface Morpher {
  /**
   * 形变目标名称和权重
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
 * 网格节点拥有的网格实例
 *
 * @extends SceneResource
 * @interface Mesh
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Mesh extends SceneResource {
  /**
   * 网格的子网格.
   *
   * @type { SubMesh[] }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly subMeshes: SubMesh[];

  /**
   * 网格的轴对齐包围盒.
   *
   * @type { Aabb }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly aabb: Aabb;

  /**
   * 覆盖子网格材质的材质.
   *
   * @type { ?Material }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  materialOverride?: Material;
}

/**
 * 几何节点的网络数据描述资源
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
 * 动画资源.
 *
 * @extends SceneResource
 * @interface Animation
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Animation extends SceneResource {
  /**
   * 动画是否启用.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  enabled: boolean;

  /**
   * 动画速度因子
   * 负值使用给定速度因子反向播放动画
   *
   * @type { ?double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 20 dynamic
   * @since 23 static
   */
  speed?: double;

  /**
   * 动画持续时间, 单位为秒.
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly duration: double;

  /**
   * 动画是否正在运行.
   *
   * @type { boolean }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly running: boolean;

  /**
   * 动画在0~1之间的进度.
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly progress: double;

  /**
   * 注册动画完成时的回调.
   *
   * @param { Callback<void> } callback - 动画完成时调用的回调
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  onFinished(callback: Callback<void>): void;

  /**
   * 注册动画开始时的回调.
   *
   * @param { Callback<void> } callback - 动画开始时调用的回调
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  onStarted(callback: Callback<void>): void;

  /**
   * 暂停动画.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  pause(): void;

  /**
   * 重新启动动画.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  restart(): void;

  /**
   * 将动画跳转到指定位置.
   *
   * @param { double } position - 跳转到0~1之间的位置
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  seek(position: double): void;

  /**
   * 开始动画.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  start(): void;

  /**
   * 停止动画并将位置设置到开头.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  stop(): void;

  /**
   * 结束动画并将位置设置到结尾.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  finish(): void;
}

/**
 * 环境背景类型枚举.
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export enum EnvironmentBackgroundType {
  /**
   * 背景为空.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  BACKGROUND_NONE = 0,

  /**
   * 背景为图像.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  BACKGROUND_IMAGE = 1,

  /**
   * 背景为立方体贴图.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  BACKGROUND_CUBEMAP = 2,

  /**
   * 背景为等距柱状投影.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  BACKGROUND_EQUIRECTANGULAR = 3,
}

/**
 * 环境资源.
 *
 * @extends SceneResource
 * @interface Environment
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Environment extends SceneResource {
  /**
   * 环境背景类型.
   *
   * @type { EnvironmentBackgroundType }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  backgroundType: EnvironmentBackgroundType;

  /**
   * 环境间接漫反射因子.
   *
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  indirectDiffuseFactor: Vec4;

  /**
   * 环境间接镜面反射因子.
   *
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  indirectSpecularFactor: Vec4;

  /**
   * 环境贴图因子.
   *
   * @type { Vec4 }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  environmentMapFactor: Vec4;

  /**
   * 环境图像.
   *
   * @type { ?(Image | null) }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  environmentImage?: Image | null;

  /**
   * 环境辐射图像.
   *
   * @type { ?(Image | null) }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  radianceImage?: Image | null;

  /**
   * 辐射系数（九个Vec3的数组）.
   *
   * @type { ?Vec3[] }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  irradianceCoefficients?: Vec3[];

  /**
   * 环境旋转
   * 
   * @default Quaternion {x:0, y:0, z:0, w:1} 单位四元数（无旋转）
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  environmentRotation?: Quaternion
}

/**
 * 图像资源.
 *
 * @extends SceneResource
 * @interface Image
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface Image extends SceneResource {
  /**
   * 图像宽度, 单位为像素.
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  readonly width: int;

  /**
   * 图像高度, 单位为像素.
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
 * 图像流资源.
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface ImageStream extends Image {
  /**
   * 图像流的surfaceId.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  readonly surfaceId: string;
}

/**
 * 特效资源.
 * 
 * @extends SceneResource
 * @interface Effect
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 21 dynamic
 * @since 23 static
 */
export interface Effect extends SceneResource {
  /**
   * 控制特效是否启用.
   * 
   * @type { boolean }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  enabled: boolean;

  /**
   * 特效的ID.
   * 这是用于创建特效的ID.
   * 
   * @type { string }
   * @readonly
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 21 dynamic
   * @since 23 static
   */
  readonly effectId: string;

  /**
   * 获取特定特效属性的值.
   *
   * @param { string } propertyName - 特定属性的名称
   * @returns { Object | null | undefined } 特效属性值，如果"get"操作失败则返回null.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  getPropertyValue(propertyName: string): Object | null | undefined;

  /**
   * 设置特定特效属性的值
   *
   * @param { string } propertyName - 特定属性的名称
   * @param { Object | undefined } value - 要设置的属性值
   * @returns { boolean } 如果"set"操作失败则返回false
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  setPropertyValue(propertyName: string, value: Object | undefined): boolean;
}