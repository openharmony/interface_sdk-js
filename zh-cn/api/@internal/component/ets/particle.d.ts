/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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

/**
 * 粒子元组，表示定义动画参数配置值对的类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type ParticleTuple<T1, T2> = [T1, T2];

/**
 * 粒子速度配置。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface VelocityOptions {
  /**
   * 表示速度大小。
   * 
   * 默认值：{range:[0.0,0.0]}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  speed: ParticleTuple<number, number>;

  /**
   * 表示速度的方向，单位为度（°）。以元素几何中心为坐标原点，水平方向为X轴，正数表示顺时针方向旋转角度。
   * 
   * 默认值：{range:[0.0,0.0]}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  angle: ParticleTuple<number, number>;
}

/**
 * 粒子加速度配置。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface AccelerationOptions<
  ACC_SPEED_UPDATER extends ParticleUpdater,
  ACC_ANGLE_UPDATER extends ParticleUpdater
> {
  /**
   * 表示加速度大小。单位：vp/s²
   * 
   * 默认值：{range:[0.0,0.0]}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  speed?: ParticlePropertyOptions<number, ACC_SPEED_UPDATER>;

  /**
   * 表示加速度方向，单位为度（°）。
   * 
   * 默认值：{range:[0.0,0.0]}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  angle?: ParticlePropertyOptions<number, ACC_ANGLE_UPDATER>;
}

/**
 * 设置粒子参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface ParticleOptions<
  PARTICLE extends ParticleType,
  COLOR_UPDATER extends ParticleUpdater,
  OPACITY_UPDATER extends ParticleUpdater,
  SCALE_UPDATER extends ParticleUpdater,
  ACC_SPEED_UPDATER extends ParticleUpdater,
  ACC_ANGLE_UPDATER extends ParticleUpdater,
  SPIN_UPDATER extends ParticleUpdater
> {
  /**
   * 粒子发射器配置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  emitter: EmitterOptions<PARTICLE>;

  /**
   * 粒子颜色配置。
   * 
   * **说明**：
   * 
   * 默认值：{ range:[Color.White,Color.White] }。图片粒子不支持设置颜色。
   *
   * @default {range:['#FFFFFF','#FFFFFF']}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  color?: ParticleColorPropertyOptions<COLOR_UPDATER>;

  /**
   * 粒子透明度配置。
   * 
   * 默认值：{ range:[1.0,1.0] }
   *
   * @default {range:[1.0,1.0]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  opacity?: ParticlePropertyOptions<number, OPACITY_UPDATER>;

  /**
   * 粒子大小配置。
   * 
   * 默认值：{ range:[1.0,1.0] }
   *
   * @default {range:[1.0,1.0]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  scale?: ParticlePropertyOptions<number, SCALE_UPDATER>;

  /**
   * 粒子速度配置。
   * 
   * **说明**：
   * 
   * speed表示速度大小。angle表示速度的方向（单位：度），以元素几何中心为坐标原点，水平方向为X轴，正数表示顺时针方向旋转角度。
   * 
   * 默认值：{ speed:[0.0,0.0],angle:[0.0,0.0] }
   *
   * @type { ?object } [since 10 - 17]
   * @type { ?VelocityOptions } [since 18]
   * @default {speed:[0,0];angle:[0,0]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  velocity?: VelocityOptions;

  /**
   * 粒子加速度配置。 
   * 
   * **说明**：
   * 
   * speed表示加速度大小，angle表示加速度方向（单位：度）。
   * 
   * 默认值：{ speed:{range:[0.0,0.0]},angle:{range:[0.0,0.0]} }
   *
   * @type { ?object } [since 10 - 17]
   * @type { ?AccelerationOptions<ACC_SPEED_UPDATER, ACC_ANGLE_UPDATER> } [since 18]
   * @default {speed:{range:[0,0]};angle:{range:[0,0]}}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  acceleration?: AccelerationOptions<ACC_SPEED_UPDATER, ACC_ANGLE_UPDATER>;

  /**
   * 粒子自旋角度配置，单位为度（°）。 
   * 
   * 默认值：{range:[0.0,0.0]}
   * 
   * 方向：正数表示顺时针旋转，负数表示逆时针旋转。
   *
   * @default {range:[0,0]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  spin?: ParticlePropertyOptions<number, SPIN_UPDATER>;
}

/**
 * 设置粒子半径。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface PointParticleParameters {
  /**
   * 粒子半径。
   * 
   * 默认值：0，小于0时取默认值0。
   * 
   * 取值范围：[0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  radius: VP;
}

/**
 * 设置图片选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface ImageParticleParameters {
  /**
   * 图片路径，支持本地图片和网络图片，引用方式请参考[加载图片资源](docroot://ui/arkts-graphics-display.md#加载图片资源)。
   * 
   * 暂不支持svg图片类型。
   * 
   * src未发生变化时，会优先使用缓存的资源，无法动态切换资源。如需动态切换资源建议切换为不同的src。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  src: ResourceStr;

  /**
   * 图像尺寸，第一个参数为图像宽度，第二个参数为图像高度。
   * 
   * 默认值：[0, 0]
   *
   * @type { [Dimension, Dimension] } [since 10 - 17]
   * @type { ParticleTuple<Dimension, Dimension> } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  size: ParticleTuple<Dimension, Dimension>;

  /**
   * 图片显示模式。
   * 
   * 默认值：ImageFit.Cover
   *
   * @default ImageFit.Cover
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  objectFit?: ImageFit;
}

/**
 * 设置粒子配置项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface ParticleConfigs {
  /**
   * 点状粒子配置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ParticleType.POINT]: PointParticleParameters;

  /**
   * 图片粒子配置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ParticleType.IMAGE]: ImageParticleParameters;
}

/**
 * 设置发射器属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface EmitterProperty {

  /**
   * 索引，取整，按初始化参数中发射器的数组索引指定对应的发射器。异常默认值为0。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  index: number;

  /**
   * 发射器发射速率，即每秒发射粒子的数量。
   * 
   * 未传入时保持其当前的发射速率， 传入值小于0时取默认值5。emitRate值超过5000时会严重影响性能，可能导致帧率大幅下降，建议设置参数小于5000。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  emitRate?: number;

  /**
   * 发射器位置，只支持number类型。
   * 
   * 未传入时保持其当前的发射器位置。需传入两个有效参数，若其中一个为异常值，则position不生效。当对应index的发射器形状为环形（ANNULUS）时，position不生效。
   * 
   * x、y的取值范围：(-∞, +∞)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  position?: PositionT<number>;

  /**
   * 发射器的大小，只支持number类型。
   * 
   * 未传入时保持其当前发射器大小。需传入两个有效参数且都大于0，若其中一个为异常值，则size不生效。当对应index的发射器形状为环形（ANNULUS）时，size不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  size?: SizeT<number>;

  /**
    * 环形发射器参数。需要对应index的发射器形状为环形才生效，且对于环形发射器，position和size不生效。
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @crossplatform
    * @atomicservice
    * @since 20 dynamic
    */
   annulusRegion?: ParticleAnnulusRegion;
}

/**
 * 粒子配置。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface EmitterParticleOptions<PARTICLE extends ParticleType> {
  /**
   * 表示粒子类型，可以选择图片或点。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  type: PARTICLE;
  /**
   * 表示对应类型的配置。
   * 
   * config类型和type值有关联：
   * 
   * 1. 如果type为ParticleType.POINT，则config类型为[PointParticleParameters]{@link PointParticleParameters} 。
   * 2. 如果type为ParticleType.IMAGE，则config类型为[ImageParticleParameters]{@link ImageParticleParameters} 。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  config: ParticleConfigs[PARTICLE];

  /**
   * 表示发射的粒子总数，count取值>=-1,当count为-1表示粒子总数无限大。
   * 
   * **说明：**
   * 
   * 当count为-1时发射器将持续发射粒子，如果不需要持续产生大量粒子，建议不要将count设置为-1，可能对性能造成较大影响，建议配合合理的emitRate和lifetime设置以避免性能问题。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  count: number;

  /**
   * 表示单个粒子的生命周期，默认值1000（即1000ms，1s），lifetime>=-1。当lifetime为-1表示粒子生命周期无限大。当lifetime<-1，取默认值。
   * 
   * **说明：**如果不需要动画一直播放，建议不要将生命周期设置为-1，可能对性能造成较大影响。
   *
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  lifetime?: number;

  /**
   * 表示粒子生命周期取值范围，单位：毫秒(ms)。设置lifetimeRange后粒子的生命周期为[lifetime-lifetimeRange, lifetime+lifetimeRange]中间的一个随机整数。
   * lifetimeRange默认值为0，取值范围为0到正无穷。设置为负值时取默认值。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lifetimeRange?: number;
}

/**
 * 粒子发射器的配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface EmitterOptions<PARTICLE extends ParticleType> {
  /**
   * 粒子配置。
   * 
   * -type表示粒子类型，可以选择图片或点。
   * 
   * -config表示对应类型的配置。
   * 
   * -config类型和type值有关联：
   * 
   * 1. 如果type为ParticleType.POINT，则config类型为[PointParticleParameters]{@link PointParticleParameters} 。
   * 2. 如果type为ParticleType.IMAGE，则config类型为[ImageParticleParameters]{@link ImageParticleParameters} 。
   * 
   * -count表示发射的粒子总数，count取值>=-1，当count为-1表示粒子总数无限大。
   * 
   * -lifetime表示单个粒子的生命周期，默认值1000（即1000ms，1s），lifetime>=-1，当lifetime为-1表示粒子生命周期无限大。当lifetime<-1，取默认值。
   * 
   * **说明**：如果不需要动画一直播放，建议不要将生命周期设置为-1，可能对性能造成较大影响。
   * 
   * lifetimeRange表示粒子生命周期取值范围，设置lifetimeRange后粒子的生命周期为[lifetime-lifetimeRange, lifetime+lifetimeRange]中间的一个随机整数。
   * lifetimeRange默认值为0，取值范围为[0, +∞）。设置为负值时取默认值。
   *
   * @type { object } [since 10 - 17]
   * @type { EmitterParticleOptions<PARTICLE> } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  particle: EmitterParticleOptions<PARTICLE>;

  /**
   * 发射器发射速率（即每秒发射粒子数）。 默认值：5，小于0时取默认值5。emitRate值超过5000时会严重影响性能，可能导致帧率大幅下降，建议设置参数小于5000。
   *
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  emitRate?: number;

  /**
   * 发射器形状。
   * 
   * 默认值：ParticleEmitterShape.RECTANGLE
   *
   * @default ParticleEmitterShape.RECTANGLE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  shape?: ParticleEmitterShape;

  /**
   * 发射器位置（距离组件左上角的位置。第一个参数为x方向上的相对偏移，第二个参数为y轴方向相对偏移。）。当发射器形状为环形（即shape为ParticleEmitterShape.ANNULUS）时，此属性不生效，需通过
   * annulusRegion参数指定形状信息。 
   * 
   * 默认值：`[0.0, 0.0]`
   *
   * @type { ?[Dimension, Dimension] } [since 10 - 17]
   * @type { ?ParticleTuple<Dimension, Dimension> } [since 18]
   * @default [0,0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  position?: ParticleTuple<Dimension, Dimension>;

  /**
   * 发射器的大小。第一个参数为发射器宽，第二个参数为发射器高。当发射器形状为环形（即shape为ParticleEmitterShape.ANNULUS）时，此属性不生效，需通过annulusRegion参数指定形状信息。
   * 
   * 默认值：`['100%','100%']`(即发射窗口占满Particle组件)
   *
   * @type { ?[Dimension, Dimension] } [since 10 - 17]
   * @type { ?ParticleTuple<Dimension, Dimension> } [since 18]
   * @default ['100%','100%']
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  size?: ParticleTuple<Dimension, Dimension>;

  /**
   * 环形发射器参数。需要发射器形状为环形（即shape参数为ParticleEmitterShape.ANNULUS）时才生效，且对于环形发射器，形状信息必须通过annulusRegion参数指定，position和size不生效。未
   * 设置时，发射器不使用环形区域参数。
   *
   * @default {innerRadius:LengthMetrics.vp(0),outerRadius:LengthMetrics.vp(0)}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  annulusRegion?: ParticleAnnulusRegion;
}

/**
 * 设置粒子属性更新器配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface ParticlePropertyUpdaterConfigs<T> {
  /**
   * 无变化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ParticleUpdater.NONE]: void;

  /**
   * 表示变化方式为随机变化时，每秒的变化差值为设置区间随机生成的值。
   * 
   * 目标属性值为当前属性值叠加变化差值。如当前属性值为0.2，config取[0.1,1.0]:
   * 
   * 1、如果变化差值在区间[0.1,1.0]取随机值0.5，则目标属性值为0.2+0.5 = 0.7；
   * 
   * 2、变化差值也可以取负值。如当前属性值为0.2，config为 [-3.0,2.0],如果变化差值在区间[-3.0,2.0]取随机值-2.0，则目标属性值为0.2-2.0 = -1.8。
   * 
   * **说明：**
   * 
   * config配置的是变化差值的取值范围，差值的最大最小值没有约束。但是如果当前属性值叠加差值大于属性最大值，目标属性值取属性最大值；如果当前属性值叠加差值小于属性最小值，目标属性值取属性最小值。T为number。
   * 
   * 例如：opacity的取值范围[0.0,1.0]则当当前属性值叠加差值超过1.0，则取1.0。
   *
   * @type { [T, T] } [since 10 - 17]
   * @type { ParticleTuple<T, T> } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ParticleUpdater.RANDOM]: ParticleTuple<T, T>;

  /**
   * 表示变化方式为曲线变化时，属性变化的配置。数组类型表示当前属性可以设置多段动画，如0ms-3000ms，3000ms-5000ms，5000ms-8000ms分别设置动画。T为number。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ParticleUpdater.CURVE]: Array<ParticlePropertyAnimation<T>>;
}

/**
 * 属性变化配置。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface ParticleUpdaterOptions<TYPE, UPDATER extends ParticleUpdater> {
  /**
   * 表示属性变化类型。 
   * 
   * 默认值：type默认为ParticleUpdater.NONE。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  type: UPDATER;

  /**
   * 属性变化配置。属性变化类型type有三类：
   * 
   * 1、当type为ParticleUpdater.NONE，表示无变化，则config类型为[ParticlePropertyUpdaterConfigs]{@link ParticlePropertyUpdaterConfigs}
   * [ParticleUpdater.NONE]。
   * 
   * 2、当type为ParticleUpdater.RANDOM，表示变化类型为随机变化，则config类型为
   * [ParticlePropertyUpdaterConfigs]{@link ParticlePropertyUpdaterConfigs}[ParticleUpdater.RANDOM]。
   * 
   * 3、当type为ParticleUpdater.CURVE，表示变化类型为曲线变化，则config类型为
   * [ParticlePropertyUpdaterConfigs]{@link ParticlePropertyUpdaterConfigs}[ParticleUpdater.CURVE]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  config: ParticlePropertyUpdaterConfigs<TYPE>[UPDATER];
}

/**
 * 颜色变化方式为随机变化的时候，在区间内随机生成一个差值。r、g、b、a四个颜色通道每秒分别使用差值叠加当前颜色值，生成目标颜色值。实现颜色随机变化的效果。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface ParticleColorOptions {
  /**
   * r颜色通道的差值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  r: ParticleTuple<number, number>;

  /**
   * g颜色通道的差值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  g: ParticleTuple<number, number>;

  /**
   * b颜色通道的差值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  b: ParticleTuple<number, number>;

  /**
   * a颜色通道的差值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  a: ParticleTuple<number, number>;
}

/**
 * 颜色属性变化配置。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface ParticleColorUpdaterOptions<UPDATER extends ParticleUpdater> {
  /**
   * 表示颜色属性变化类型。
   * 
   * 默认值：type默认为 ParticleUpdater.NONE。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  type: UPDATER;

  /**
   * 颜色属性变化类型type有三类：
   * 
   * 1、当type为ParticleUpdater.NONE，表示无变化，则config类型为
   * [ParticleColorPropertyUpdaterConfigs]{@link ParticleColorPropertyUpdaterConfigs}[ParticleUpdater.NONE]。 
   * 
   * 2、type为ParticleUpdater.RANDOM，表示随机均匀变化，则config类型为
   * [ParticleColorPropertyUpdaterConfigs]{@link ParticleColorPropertyUpdaterConfigs}[ParticleUpdater.RANDOM]。 
   * 
   * 3、type为ParticleUpdater.CURVE,表示按动画曲线变化，则config类型为
   * [ParticleColorPropertyUpdaterConfigs]{@link ParticleColorPropertyUpdaterConfigs}[ParticleUpdater.CURVE]。 
   * 
   * **说明**：
   * 
   * 当type为ParticleUpdater.RANDOM或者ParticleUpdater.CURVE时，updater中颜色配置的优先级高于range中的颜色配置。在updater配置的动画时间周期内，以updater中的颜色配
   * 置来变化；在updater配置的动画时间周期外，以range中的颜色配置来变化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  config: ParticleColorPropertyUpdaterConfigs[UPDATER];
}

/**
 * 设置粒子属性选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface ParticlePropertyOptions<TYPE, UPDATER extends ParticleUpdater> {
  /**
   * 粒子初始属性值区间，粒子发射器生成粒子的属性值在range区间随机取值。
   * 
   * **说明**
   * 
   * 各项属性的非法输入取默认值，当最大值小于最小值的时候取默认区间。TYPE为number。
   * 
   * 不同属性的默认值不同：
   * 
   * 1、opacity属性：range:[1.0,1.0]，取值范围为[0, 1]，默认值为1.0。
   * 
   * 2、scale属性：range:[1.0,1.0]，取值范围为[0, 10000]，默认值为1.0。
   * 
   * 3、acceleration加速度speed属性：range:[0.0,0.0]，取值范围为[0, 10000]，默认值为0.0。
   * 
   * 4、acceleration加速度angle属性：range:[0.0,0.0]，取值范围为[-10000, 10000]，默认值为0.0。
   * 
   * 5、spin属性：range:[0.0,0.0]，取值范围为[-10000, 10000]，默认值为0.0。
   *
   * @type { [TYPE, TYPE] } [since 10 - 17]
   * @type { ParticleTuple<TYPE, TYPE> } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  range: ParticleTuple<TYPE, TYPE>;

  /**
   * 属性变化配置。属性变化类型type有三类：
   * 
   * 1、当type为ParticleUpdater.NONE，表示无变化，则config类型为[ParticlePropertyUpdaterConfigs]{@link ParticlePropertyUpdaterConfigs}
   * [ParticleUpdater.NONE]。
   * 
   * 2、当type为ParticleUpdater.RANDOM，表示变化类型为随机变化，则config类型为
   * [ParticlePropertyUpdaterConfigs]{@link ParticlePropertyUpdaterConfigs}[ParticleUpdater.RANDOM]。
   * 
   * 3、当type为ParticleUpdater.CURVE，表示变化类型为曲线变化，则config类型为
   * [ParticlePropertyUpdaterConfigs]{@link ParticlePropertyUpdaterConfigs}[ParticleUpdater.CURVE] 
   * 
   * 默认值：type默认为ParticleUpdater.NONE。
   *
   * @type { ?object } [since 10 - 17]
   * @type { ?ParticleUpdaterOptions<TYPE, UPDATER> } [since 18]
   * @default  {type:UPDATER.NONE;config:ParticlePropertyUpdaterConfigs<UPDATER.NONE>[UPDATER.NONE]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  updater?: ParticleUpdaterOptions<TYPE, UPDATER>;
}

/**
 * 设置粒子颜色属性更新器的配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface ParticleColorPropertyUpdaterConfigs {
  /**
   * 无变化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ParticleUpdater.NONE]: void;

  /**
   * 表示变化方式为随机变化的时候，对每个粒子在变化区间内随机生成一个差值。r、g、b、a四个颜色通道每秒分别使用差值叠加当前颜色值，生成目标颜色值。实现颜色随机变化的效果。
   *
   * @type { object } [since 10 - 17]
   * @type { ParticleColorOptions } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ParticleUpdater.RANDOM]: ParticleColorOptions;

  /**
   * 表示变化方式为曲线变化时，颜色变化的配置。数组类型表示当前属性可以设置多段动画，如0ms-3000ms，3000ms-5000ms，5000ms-8000ms分别设置动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ParticleUpdater.CURVE]: Array<ParticlePropertyAnimation<ResourceColor>>;
}

/**
 * 设置粒子颜色属性更新器配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface ParticleColorPropertyOptions<UPDATER extends ParticleUpdater> {
  /**
   * 粒子初始颜色区间，粒子发射器生成粒子的初始颜色在range区间随机取值。
   * 
   * 默认值：range:[Color.White,Color.White]
   *
   * @type { [ResourceColor, ResourceColor] } [since 10 - 17]
   * @type { ParticleTuple<ResourceColor, ResourceColor> } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  range: ParticleTuple<ResourceColor, ResourceColor>;

  /**
   * 粒子初始颜色随机值分布，允许用户选择颜色随机值生成的分布类型，支持均匀分布或正态（高斯）分布。
   * 
   * 默认值：DistributionType.UNIFORM
   *
   * @default DistributionType.UNIFORM
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  distributionType?: DistributionType;

  /**
   * 颜色属性变化配置。颜色属性变化类型type有三类：
   * 
   * 1、当type为ParticleUpdater.NONE，表示无变化，则config类型为
   * [ParticleColorPropertyUpdaterConfigs]{@link ParticleColorPropertyUpdaterConfigs}[ParticleUpdater.NONE]。 
   * 
   * 2、type为ParticleUpdater.RANDOM，表示随机均匀变化，则config类型为
   * [ParticleColorPropertyUpdaterConfigs]{@link ParticleColorPropertyUpdaterConfigs}[ParticleUpdater.RANDOM]。 
   * 
   * 3、type为ParticleUpdater.CURVE,表示按动画曲线变化，则config类型为
   * [ParticleColorPropertyUpdaterConfigs]{@link ParticleColorPropertyUpdaterConfigs}[ParticleUpdater.CURVE]。
   * 
   * 默认值：type默认为 ParticleUpdater.NONE。 
   * 
   * **说明**：
   * 
   * 当type为ParticleUpdater.RANDOM或者ParticleUpdater.CURVE时，updater中颜色配置的优先级高于range中的颜色配置。在updater配置的动画时间周期内，以updater中的颜色配
   * 置来变化；在updater配置的动画时间周期外，以range中的颜色配置来变化。
   *
   * @type { ?object } [since 10 - 17]
   * @type { ?ParticleColorUpdaterOptions<UPDATER> } [since 18]
   * @default {type:UPDATER.NONE;config:ParticleColorPropertyUpdaterConfigs[UPDATER.NONE]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  updater?: ParticleColorUpdaterOptions<UPDATER>;
}

/**
 * 设置粒子属性生命周期。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface ParticlePropertyAnimation<T> {
  /**
   * 属性起始值。非法输入取对应属性的默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  from: T;

  /**
   * 属性目标值。非法输入取对应属性的默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  to: T;

  /**
   * 动画开始时间。
   * 
   * 单位：毫秒。
   * 
   * 取值范围：[0, +∞)。传入负值时取默认值0。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  startMillis: number;

  /**
   * 动画结束时间。
   * 
   * 单位：毫秒。
   * 
   * 取值范围：[0, +∞)。传入负值时取默认值0。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  endMillis: number;

  /**
   * 设置动画曲线。
   * 
   * 默认值：Curve.Linear
   *
   * @default Curve.Linear
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  curve?: Curve | ICurve;
}

/**
 * 粒子动画的集合。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface Particles<
  PARTICLE extends ParticleType,
  COLOR_UPDATER extends ParticleUpdater,
  OPACITY_UPDATER extends ParticleUpdater,
  SCALE_UPDATER extends ParticleUpdater,
  ACC_SPEED_UPDATER extends ParticleUpdater,
  ACC_ANGLE_UPDATER extends ParticleUpdater,
  SPIN_UPDATER extends ParticleUpdater
> {
  /**
   * 粒子动画的集合。每个粒子动画（[ParticleOptions]{@link ParticleOptions}）包含粒子发射，同时可配置粒子的颜色、透明度、大小、速度、加速度与自旋角度，详见
   * [ParticleOptions]{@link ParticleOptions}属性说明。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  particles: Array<
    ParticleOptions<
      PARTICLE,
      COLOR_UPDATER,
      OPACITY_UPDATER,
      SCALE_UPDATER,
      ACC_SPEED_UPDATER,
      ACC_ANGLE_UPDATER,
      SPIN_UPDATER
    >
  >;
}

/**
 * Defines the particle Interface.
 *
 * @interface ParticleInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
interface ParticleInterface {
  /**
   * create a particle array.
   *
   * Anonymous Object Rectification.
   * @param { object } value - Particle value
   *     particles - list of ParticleOptions. [since 10 - 17]
   * @param { Particles<PARTICLE, COLOR_UPDATER, OPACITY_UPDATER, SCALE_UPDATER, ACC_SPEED_UPDATER, ACC_ANGLE_UPDATER,
  *     SPIN_UPDATER> } particles - Array of particles. [since 18]
  * @returns { ParticleAttribute } Returns the particle attribute.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @crossplatform 
  * @atomicservice [since 11]
  * @since 10 dynamic
   */
  <
    PARTICLE extends ParticleType,
    COLOR_UPDATER extends ParticleUpdater,
    OPACITY_UPDATER extends ParticleUpdater,
    SCALE_UPDATER extends ParticleUpdater,
    ACC_SPEED_UPDATER extends ParticleUpdater,
    ACC_ANGLE_UPDATER extends ParticleUpdater,
    SPIN_UPDATER extends ParticleUpdater
  >(particles: Particles<
      PARTICLE,
      COLOR_UPDATER,
      OPACITY_UPDATER,
      SCALE_UPDATER,
      ACC_SPEED_UPDATER,
      ACC_ANGLE_UPDATER,
      SPIN_UPDATER
    >): ParticleAttribute;
}

/**
 * 粒子类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ParticleType {
  /**
   * 点状粒子
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  POINT = 'point',

  /**
   * 图片粒子。
   * 
   * 图片粒子不支持设置颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  IMAGE = 'image'
}

/**
 * 粒子发射器形状。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ParticleEmitterShape {
  /**
   * 粒子发射器为矩形。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  RECTANGLE = 'rectangle',

  /**
   * 粒子发射器为圆形。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  CIRCLE = 'circle',

  /**
   * 粒子发射器为椭圆形。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  ELLIPSE = 'ellipse',

  /**
    * 粒子发射器为环形。使用此形状时必须配置annulusRegion参数，且position和size参数不生效。
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @crossplatform
    * @atomicservice
    * @since 20 dynamic
    */
   ANNULUS = 'annulus'
}

/**
 * 初始颜色随机值分布类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum DistributionType {
  /**
   * 初始颜色随机值分布为均匀分布。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  UNIFORM = 0,

  /**
   * 初始颜色随机值分布为高斯分布。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  GAUSSIAN = 1
}

/**
 * 粒子变化类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ParticleUpdater {
  /**
   * 无变化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  NONE = 'none',

  /**
   * 随机均匀变化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  RANDOM = 'random',

  /**
   * 动画曲线变化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  CURVE = 'curve'
}

/**
 * 定义Size类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type SizeT<T> = import('../api/arkui/Graphics').SizeT<T>;

/**
 * 用于设置或返回组件的位置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type PositionT<T> = import('../api/arkui/Graphics').PositionT<T>;

/**
 * 定义Vector2T类型。其中Vector2T类型包含x和y两个属性值。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare type Vector2T<T> = import('../api/arkui/Graphics').Vector2T<T>;

/**
 * 除支持[通用属性]{@link ./common}外还支持以下属性：
 * 
 * 支持[通用事件]{@link ./common}。
 *
 * @extends CommonMethod<ParticleAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
declare class ParticleAttribute extends CommonMethod<ParticleAttribute> {
  /**
   * 设置扰动场。
   *
   * @param { Array<DisturbanceFieldOptions> } fields - 扰动场数组。用于设置粒子运动轨迹的干扰效果，通过配置多个扰动场可对粒子施加排斥力或吸引力，改变粒子的运动轨迹。
   * @returns { ParticleAttribute } Returns the particle attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  disturbanceFields(fields: Array<DisturbanceFieldOptions>): ParticleAttribute;

  /**
   * 支持发射器属性动态更新。通过EmitterProperty中的index指定需要更新的发射器（按初始化参数中发射器的数组索引），可动态更新发射器的发射速率、位置、大小和环形区域参数。必须先通过Particle接口创建粒子动画并配置
   * 发射器，再通过emitter()属性动态更新对应发射器的参数，emitter()属性仅更新已有发射器的参数，不能新增发射器。
   *
   * @param { Array<EmitterProperty> } value - 需要更新的发射器参数数组。
   * @returns { ParticleAttribute } Returns the particle attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  emitter(value: Array<EmitterProperty>): ParticleAttribute;

  /**
   * 设置粒子波动场。波动场会对影响范围内的粒子施加按波形变化的力，产生类似波纹扩散的效果。
   *
   * @param { Array<RippleFieldOptions> | undefined } fields - 粒子波动场数组。通过数组形式可以设置多个粒子波动场。当设置为undefined时，表示无波动场。
   * @returns { ParticleAttribute } Returns the particle attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  rippleFields(fields: Array<RippleFieldOptions> | undefined): ParticleAttribute;

  /**
   * 设置粒子速度场。速度场会对影响范围内的粒子施加一个力，使粒子在原有速度的基础上叠加速度场指定的速度。
   *
   * @param { Array<VelocityFieldOptions> | undefined } fields - 粒子速度场数组。通过数组形式可设置多个粒子速度场。设置为undefined时表示无速度场。
   * @returns { ParticleAttribute } Returns the particle attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  velocityFields(fields: Array<VelocityFieldOptions> | undefined): ParticleAttribute;
}

/**
 * 定义Particle组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
declare const Particle: ParticleInterface;

/**
 * 设置粒子扰动场参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface DisturbanceFieldOptions {

  /**
   * 场强，表示场从中心向外的排斥力的强度，默认值0。正数表示排斥力方向朝外，负数表示吸引力，方向朝内。
   * 
   * 取值范围：(-∞, +∞)。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  strength?: number;

  /**
   * 场的形状。
   * 
   * 默认为DisturbanceFieldShape.RECT。
   *
   * @default DisturbanceFieldShape.RECT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  shape?: DisturbanceFieldShape;

  /**
   * 场的大小，单位：vp。
   * 
   * 默认值 {width:0, height:0}。
   * 
   * width和height的取值范围：[0, +∞)。
   *
   * @default {width:0,height:0}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  size?: SizeT<number>;

  /**
   * 场的位置，单位：vp。
   * 
   * 默认值{x:0, y:0}。
   * 
   * x、y的取值范围：(-∞, +∞)。
   *
   * @default {x:0,y:0}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  position?: PositionT<number>;

  /**
   * 羽化值，表示场从中心点到场边缘的衰减程度，取值范围为0到100的整数。取值为0时表示场是一个刚体，所有范围内的粒子都被排斥在外。羽化值越大场的缓和程度越大，场范围内出现越多靠近中心点的粒子。设置为负值或大于100时取默认值，设置为
   * 非整数时截断取整。
   * 
   * 默认值为0。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  feather?: number;

  /**
   * 噪声尺度，用于控制噪声图案的整体大小，取值大于等于0。
   * 
   * 默认值1。传入负值时取默认值1。
   *
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  noiseScale?: number;

  /**
   * 噪声频率，频率越大噪声越细腻，取值大于等于0。
   * 
   * 默认值1。传入负值时取默认值1。
   *
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  noiseFrequency?: number;

  /**
   * 噪声振幅，表示噪声值的波动范围，振幅越大波动范围越大。取值大于等于0。
   * 
   * 默认值1。传入负值时取默认值1。
   *
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  noiseAmplitude?: number;
}

/**
 * 扰动场形状。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum DisturbanceFieldShape {

  /**
   * 矩形。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  RECT = 0,

  /**
   * 圆。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  CIRCLE = 1,

  /**
   * 椭圆。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  ELLIPSE = 2

}

/**
 * 用于设置环形发射器区域的配置信息。
 * 
 * > **说明：**
 * >
 * > - outerRadius、innerRadius小于零或使用百分比单位时，会按零进行处理。
 * >
 * > - 当outerRadius小于innerRadius时（即外圆半径小于内圆半径时），会将当前较小的值作为新的内圆半径，将较大的值作为新的外圆半径。
 * >
 * > - 当endAngle小于startAngle时（即结束角度小于起始角度时），会将当前较小的值作为新的起始角度，将较大的值作为新的结束角度。
 * >
 * > ![](docroot://reference/apis-arkui/arkui-ts/figures/annulus.png)
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface ParticleAnnulusRegion {
  /**
   * 圆环的圆心坐标，组件的左上角为坐标原点。默认值：{x:LengthMetrics.percent(0.5),y:LengthMetrics.percent(0.5)}
   *
   * @default {x:LengthMetrics.percent(0.5),y:LengthMetrics.percent(0.5)}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  center?: PositionT<LengthMetrics>;
  /**
   * 圆环的外圆半径。小于零或使用百分比单位时按零进行处理。当outerRadius小于innerRadius时，会将当前较小的值作为新的内圆半径，将较大的值作为新的外圆半径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  outerRadius: LengthMetrics;
  /**
   * 圆环的内圆半径。小于零或使用百分比单位时按零进行处理。当outerRadius小于innerRadius时，会将当前较小的值作为新的内圆半径，将较大的值作为新的外圆半径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  innerRadius: LengthMetrics;
  /**
   * 圆环的起始角度。
   * 
   * 单位：度（°）
   * 
   * 取值范围：(-∞, +∞)
   * 
   * 默认值：0
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  startAngle?: number;
  /**
   * 圆环的结束角度。
   * 
   * 单位：度（°）
   * 
   * 取值范围：(-∞, +∞)
   * 
   * 默认值：360
   *
   * @default 360
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  endAngle?: number;
}

/**
 * 用于设置粒子场的区域信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare interface FieldRegion {
  /**
   * 粒子场的区域形状。
   * 
   * 默认值：DisturbanceFieldShape.RECT
   *
   * @default DisturbanceFieldShape.RECT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  shape?: DisturbanceFieldShape;
  /**
   * 粒子场的区域中心位置。坐标单位为vp。
   * 
   * 默认值：{x:0, y:0}
   *
   * @default {x:0,y:0}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  position?: PositionT<number>;
  /**
   * 粒子场的区域大小。值的单位为vp。
   * 
   * 默认值：{width:0, height:0}
   * 
   * 取值范围：
   * 
   * width：[0, +∞)
   * 
   * height：[0, +∞)
   * 
   * 当size的width（或height）设置为负值时取width（或height）的默认值。
   *
   * @default {width:0,height:0}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  size?: SizeT<number>;
}

/**
 * 用于描述粒子波动场信息的参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare interface RippleFieldOptions {
  /**
   * 描述粒子波动场波的幅值。幅值越大，波动场的力越大，粒子在波动场作用下产生的位移变化越明显，波纹扩散效果越强烈。
   * 
   * 取值范围：[0, +∞)
   * 
   * 默认值：0
   * 
   * 设置为负值时取默认值。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  amplitude?: number;
  /**
   * 描述粒子波动场的波长，即一个波周期的变化距离。波长越大，则随距离的变化，波的变化越慢，波动越不明显，粒子受波动影响的周期变长。
   * 
   * 取值范围：[0, +∞)
   * 
   * 默认值：0
   * 
   * 设置为负值时取默认值。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  wavelength?: number;
  /**
   * 描述粒子波动场的波速。波速越大，则随时间的变化，波的变化越快，波动越明显，粒子受波动影响的响应越迅速。单位：vp/s。
   * 
   * 取值范围：[0, +∞)
   * 
   * 默认值：0
   * 
   * 设置为负值时取默认值。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  waveSpeed?: number;
  /**
   * 描述粒子波动场波的衰减系数。衰减系数越大，则随时间的变化，波的衰减越快，粒子受到的波动场力随时间迅速减弱，波纹扩散效果逐渐消失。
   * 
   * 取值范围：[0, 1]
   * 
   * 默认值：0.0
   * 
   * 设置的数值不在范围内时取默认值。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  attenuation?: number;
  /**
   * 粒子波动场产生力的中心位置。组件的左上角为坐标原点。坐标单位为vp。
   * 
   * 默认值：{x:0, y:0}
   *
   * @default {x:0,y:0}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  center?: PositionT<number>;
  /**
   * 粒子波动场影响的区域信息，其中区域信息包括区域形状、区域大小以及区域中心位置。
   * 
   * 默认值：{shape:DisturbanceFieldShape.RECT, position:{x:0, y:0}, size:{width:0, height:0}}
   *
   * @default {shape:DisturbanceFieldShape.RECT,position:{x:0,y:0},size:{width:0,height:0}}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  region?: FieldRegion;
}

/**
 * 用于描述粒子速度场信息的参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare interface VelocityFieldOptions {
  /**
   * 粒子速度场的各方向速度值。粒子只有在速度场作用范围内时获得该速度，离开速度场范围后不受该速度场影响，不获得该额外的速度。单位：vp/s。
   * 
   * 默认值：{x:0, y:0}
   *
   * @default {x:0,y:0}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  velocity?: Vector2T<number>;
  /**
   * 粒子速度场影响的区域信息，其中区域信息包括区域形状、区域大小以及区域中心位置。
   * 
   * 默认值：{shape:DisturbanceFieldShape.RECT, position:{x:0, y:0}, size:{width:0, height:0}}
   *
   * @default {shape:DisturbanceFieldShape.RECT,position:{x:0,y:0},size:{width:0,height:0}}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  region?: FieldRegion;
}