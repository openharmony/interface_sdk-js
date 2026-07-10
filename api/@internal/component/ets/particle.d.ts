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
 * Defines a pair of given type for particle.
 *
 * @typedef { [T1, T2] } ParticleTuple
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type ParticleTuple<T1, T2> = [T1, T2];

/**
 * Defines velocity options.
 *
 *  * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer
 * > element's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @typedef VelocityOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface VelocityOptions {
  /**
   * Time rate at which the particle moves.
   *
   * @type { ParticleTuple<number, number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  speed: ParticleTuple<number, number>;

  /**
   * Direction (in angles) in which the particle moves, with the geometric center of the element as the coordinate 
   * origin and the horizontal direction as the x-axis. A positive number indicates clockwise rotation.
   *
   * @type { ParticleTuple<number, number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  angle: ParticleTuple<number, number>;
}

/**
 * Particle acceleration.
 * 
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the
 * > outer element's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @typedef AccelerationOptions<ACC_SPEED_UPDATER extends ParticleUpdater, ACC_ANGLE_UPDATER extends ParticleUpdater>
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
   * Acceleration speed.
   * 
   * Default value: **{range:[0.0,0.0]}**
   *
   * @type { ?ParticlePropertyOptions<number, ACC_SPEED_UPDATER> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  speed?: ParticlePropertyOptions<number, ACC_SPEED_UPDATER>;

  /**
   * Acceleration direction (in angles).
   * 
   * Default value: **{range:[0.0,0.0]}**
   *
   * @type { ?ParticlePropertyOptions<number, ACC_ANGLE_UPDATER> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  angle?: ParticlePropertyOptions<number, ACC_ANGLE_UPDATER>;
}

/**
 * Defines the ParticleOptions Interface.
 *
 * @interface ParticleOptions
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
   * Particle emitter.
   * @type { EmitterOptions<PARTICLE> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  emitter: EmitterOptions<PARTICLE>;

  /**
   * Particle color.
   * 
   * **NOTE**
   * 
   * Default value: **{ range:[Color.White,Color.White] }.** Colors cannot be set for image particles.
   *
   * @type { ?ParticleColorPropertyOptions<COLOR_UPDATER> }
   * @default {range:['#FFFFFF','#FFFFFF']}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  color?: ParticleColorPropertyOptions<COLOR_UPDATER>;

  /**
   * Particle opacity.
   * 
   * Default value: **{ range:[1.0,1.0] }**
   *
   * @type { ?ParticlePropertyOptions<number, OPACITY_UPDATER> }
   * @default {range:[1.0,1.0]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  opacity?: ParticlePropertyOptions<number, OPACITY_UPDATER>;

  /**
   * Particle scale.
   * 
   * Default value: **{ range:[1.0,1.0] }**
   *
   * @type { ?ParticlePropertyOptions<number, SCALE_UPDATER> }
   * @default {range:[1.0,1.0]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  scale?: ParticlePropertyOptions<number, SCALE_UPDATER>;

  /**
   * Particle velocity.
   * 
   * **NOTE**
   * 
   * **speed** indicates the time rate at which the particle moves. **angle** indicates the direction (in angles) in 
   * which the particle moves, with the geometric center of the element as the coordinate origin and the horizontal 
   * direction as the x-axis. A positive number indicates clockwise rotation.
   * 
   * Default value: **{speed: [0.0,0.0],angle: [0.0,0.0] }**
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
   * Particle acceleration.
   * 
   * **NOTE**
   * 
   * **speed** indicates the acceleration speed, and **angle** indicates the acceleration direction (in angles).
   * 
   * Default value: **{ speed:{range:[0.0,0.0]},angle:{range:[0.0,0.0]} }**
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
   * Particle spin angle.
   * 
   * Default value: **{range:[0.0,0.0]}**
   * 
   * Direction: A positive number indicates clockwise spinning, and a negative number indicates anticlockwise spinning.
   *
   * @type { ?ParticlePropertyOptions<number, SPIN_UPDATER> }
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
 * Defines the parameters for a point-like particle.
 * @interface PointParticleParameters
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface PointParticleParameters {
  /**
   * Particle radius.
   *
   * @type { VP }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  radius: VP;
}

/**
 * Defines the parameters for an image-like particle.
 * @interface ImageParticleParameters
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface ImageParticleParameters {
  /**
   * Path to the image. Local and online sources are supported. For details about how to reference an image, see 
   * [Loading Image Resources](docroot://ui/arkts-graphics-display.md#loading-image-resources).
   * 
   * SVG images are not supported.
   * 
   * If the value of src does not change, the cached resource is preferentially used. As a result, resources cannot be 
   * dynamically switched. If you want to dynamically switch resources, you are advised to switch to different src 
   * values.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  src: ResourceStr;

  /**
   * Particle image size.
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
   * Image display mode.
   *
   * @type { ?ImageFit }
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
 * Defines the particle configs.
 *
 * @interface ParticleConfigs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface ParticleConfigs {
  /**
   * Point particle configuration.
   *
   * @type { PointParticleParameters } 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ParticleType.POINT]: PointParticleParameters;

  /**
   * Image particle configuration.
   *
   * @type { ImageParticleParameters } 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ParticleType.IMAGE]: ImageParticleParameters;
}

/**
 * Defines the emitter property.
 *
 * @interface EmitterProperty
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface EmitterProperty {

  /**
   * Index of the emitter based on the index array of the emitters in the initialization parameters. The value is 
   * rounded to the nearest whole number. The default value **0** is used in case of exceptions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  index: number;

  /**
   * Emit rate, that is, the number of particles emitted per second.
   * 
   * If no value is passed in, the current emit rate is retained. If a value less than 0 is passed in, the default value
   * **5** is used. The **emitRate** value can significantly impact performance when it exceeds 5000; you are advised to
   * set it to be less than 5000.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  emitRate?: number;

  /**
   * Array of emitter positions. Only the number type is supported.
   * 
   * If no value is passed in, the current emitter position is retained. Two valid values must be passed in; if either 
   * is an invalid value, **position** will not take effect.
   * 
   * Value range of **x** and **y**: (-∞, +∞).
   *
   * @type { ?PositionT<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  position?: PositionT<number>;

  /**
   * Size of the emit window. Only the number type is supported.
   * 
   * If no value is passed in, the current emitter window size is retained. Two valid values greater than 0 must be 
   * passed in; if either is an invalid value, **size** will not take effect.
   *
   * @type { ?SizeT<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  size?: SizeT<number>;

  /**
   * the description of the annulus region. This parameter is valid only for emitter whose shape is annulus.
   *
   * @type { ?ParticleAnnulusRegion }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
   annulusRegion?: ParticleAnnulusRegion;
}

/**
 * Defines parameters of particles used by emitters.
 *
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @typedef EmitterParticleOptions<PARTICLE extends ParticleType>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface EmitterParticleOptions<PARTICLE extends ParticleType> {
  /**
   * Particle type, which can be **IMAGE** or **POINT**.
   *
   * @type { PARTICLE }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  type: PARTICLE;
  /**
   * Configuration of the particle type.
   * 
   * The value type of **config** is subject to the value of **type**.
   * 
   * 1. If the type is ParticleType.POINT, the config type is [PointParticleParameters]{@link PointParticleParameters}.
   * 2. If the type is ParticleType.IMAGE, the config type is [ImageParticleParameters]{@link ImageParticleParameters}.
   *
   * @type { ParticleConfigs[PARTICLE] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  config: ParticleConfigs[PARTICLE];

  /**
   * Number of particles. The value is greater than or equal to -1. The value **-1** indicates that the number of 
   * particles is infinite.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  count: number;

  /**
   * Lifetime of a single particle. The default value is **1000** (that is, 1000 ms, 1s). The value is greater than or 
   * equal to -1. The value **-1** indicates that the lifetime of the particle is infinite. If the value specified is 
   * less than **-1**, the default value is used.
   * 
   * Note: If you do not want the animation to keep playing, you are advised not to set the lifetime to –1, which may 
   * greatly affect the performance.
   *
   * @type { ?number }
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  lifetime?: number;

  /**
   * Random integer within the range of [lifetime – lifetimeRange, lifetime + lifetimeRange]. After lifetimeRange is 
   * set, the particle lifecycle is a random integer within the range. The default value is 0. The value range is from 0
   * to positive infinity. If it is set to a negative value, the default value is used.
   *
   * @type { ?number }
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
 * Particle emitter configuration.
 *
 * @interface EmitterOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface EmitterOptions<PARTICLE extends ParticleType> {
  /**
   * Particle configuration.
   * 
   * - **type**: particle type, which can be **IMAGE** or **POINT**.
   * - **config**: configuration of the particle type.
   * - The value type of **config** is subject to the value of **type**.
   * 
   * 1. If the type is ParticleType.POINT, the config type is [PointParticleParameters]{@link PointParticleParameters}.
   * 2. If the type is ParticleType.IMAGE, the config type is [ImageParticleParameters]{@link ImageParticleParameters}.
   * 
   * - **count**: number of particles. The value is greater than or equal to -1. The value **-1** indicates that the 
   * number of particles is infinite.
   * - **lifetime**: lifetime of a single particle. The default value is **1000** (that is, 1000 ms, 1s). The value is 
   * greater than or equal to -1. The value **-1** indicates that the lifetime of the particle is infinite. If the value
   * specified is less than **-1**, the default value is used.
   * 
   * Note: If you do not want the animation to keep playing, you are advised not to set the lifetime to –1, which may 
   * greatly affect the performance.
   * 
   * The **lifeTimeRange** parameter indicates the range of the particle lifetime. After this parameter is set, the 
   * lifetime of a particle is a random integer within the range of 
   * [lifetime – lifeTimeRange, lifetime + lifeTimeRange]. The default value of lifeTimeRange is 0. The value ranges 
   * from 0 to positive infinity. If it is set to a negative value, the default value is used.
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
   * Emit rate (that is, the number of particles emitted per second).
   * 
   * Default value: **5**. If the value specified is less than 0, the default value is used.
   * 
   * The **emitRate** value can significantly impact performance when it exceeds 5000; you are advised to set it to be 
   * less than 5000.
   *
   * @type { ?number }
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  emitRate?: number;

  /**
   * Shape of emitter.
   * 
   * Default value: ParticleEmitterShape.RECTANGLE
   *
   * @type { ?ParticleEmitterShape }
   * @default ParticleEmitterShape.RECTANGLE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  shape?: ParticleEmitterShape;

  /**
   * Emitter position (distance from the upper left corner of the component). The first parameter indicates the relative
   * offset along the x-axis, and the second parameter indicates the relative offset along the y-axis.
   * 
   * Default value: **[0.0, 0.0]**
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
   * Size of the emit window. The first parameter indicates the emitter width, and the second parameter indicates the 
   * emitter height.
   * 
   * Default value: **['100%','100%']** (that is, the emission window occupies the entire Particle component.)
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
   * Annulus emitter parameters. This parameter takes effect only when the emitter shape is annulus (that is, the shape 
   * parameter is ParticleEmitterShape.ANNULUS). For an annulus emitter, the shape information must be specified by the 
   * annulusRegion parameter, and the position and size parameters do not take effect.
   *
   * @type { ?ParticleAnnulusRegion }
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
 * Defines the particle property updater configs.
 * @interface ParticlePropertyUpdaterConfigs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface ParticlePropertyUpdaterConfigs<T> {
  /**
   * No effect of particle updater.
   *
   * @type { void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ParticleUpdater.NONE]: void;

  /**
   * The property changes randomly, with the per-second change difference being a value randomly generated from the 
   * range.
   * 
   * The target property value is obtained by applying the change difference to the current property value. For example,
   * if the current property value is **0.2** and **config** is set to **[0.1,1.0]**, then:
   * 
   * 1. When the random change difference is 0.5, the target property value is 0.2 + 0.5 = 0.7.
   * 2. The change difference may also be a negative value. For example, if the current property
   * value is **0.2** and **config** is set to **[-3.0,2.0]**, then when the random change difference is **-2.0**,
   * the target property value is 0.2 - 2.0 = -1.8.
   * 
   * **NOTE**
   * 
   * **config** sets the value range of the change difference. While the change difference does not have a maximum or 
   * minimum value limit, the target property value does. Therefore, if the target property value is greater than the 
   * maximum property value, the maximum property value will be used instead; if the target property value is less than 
   * the minimum property value, the minimum property value will be used instead. **T** represents a number.
   * 
   * For example, if the value range of **opacity** is **[0.0, 1.0]**, then if the target property value is greater than
   * 1.0, **1.0** will be used instead.
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
   * The property changes with the animation curve. The array type indicates that multiple animation segments can be set
   * for the current property, for example, 0-3000 ms, 3000-5000 ms, and 5000-8000 ms. **T** represents a number.
   *
   * @type { Array<ParticlePropertyAnimation<T>> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ParticleUpdater.CURVE]: Array<ParticlePropertyAnimation<T>>;
}

/**
 * Defines the particle updater options.
 * 
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @typedef ParticleUpdaterOptions<TYPE, UPDATER extends ParticleUpdater>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface ParticleUpdaterOptions<TYPE, UPDATER extends ParticleUpdater> {
  /**
   * Particle updater type.
   *
   * @type { UPDATER }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  type: UPDATER;

  /**
   * How the property is updated. The available options of **type** are as follows:
   * 
   * 1. **ParticleUpdater.NONE**: The property does not change. In this case, the **config** type is
   *  [ParticlePropertyUpdaterConfigs]{@link ParticlePropertyUpdaterConfigs}[ParticleUpdater.NONE].
   * 2. **ParticleUpdater.RANDOM**: The property changes randomly. In this case, the **config** type is
   *  [ParticlePropertyUpdaterConfigs]{@link ParticlePropertyUpdaterConfigs}[ParticleUpdater.RANDOM].
   * 3. **ParticleUpdater.CURVE**: The property changes with the animation curve. In this case,
   * the **config** type is
   * [ParticlePropertyUpdaterConfigs]{@link ParticlePropertyUpdaterConfigs}[ParticleUpdater.CURVE].
   *
   * @type { ParticlePropertyUpdaterConfigs<TYPE>[UPDATER] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  config: ParticlePropertyUpdaterConfigs<TYPE>[UPDATER];
}

/**
 * The color changes randomly, with the per-second change difference being a value randomly generated from the range. 
 * The target color is obtained by applying the change difference to the current color value of each of the R, G, B, A 
 * channels.  
 * 
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @typedef ParticleColorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface ParticleColorOptions {
  /**
   * Difference value for the red color channel.
   *
   * @type { ParticleTuple<number, number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  r: ParticleTuple<number, number>;

  /**
   * Difference value for the green color channel.
   *
   * @type { ParticleTuple<number, number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  g: ParticleTuple<number, number>;

  /**
   * Difference value for the blue color channel.
   *
   * @type { ParticleTuple<number, number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  b: ParticleTuple<number, number>;

  /**
   * Difference value for the alpha (transparency) channel.
   *
   * @type { ParticleTuple<number, number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  a: ParticleTuple<number, number>;
}

/**
 * How the color property is updated.
 * 
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @typedef ParticleColorUpdaterOptions<UPDATER extends ParticleUpdater>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface ParticleColorUpdaterOptions<UPDATER extends ParticleUpdater> {
  /**
   * Type of property updating.
   * 
   * The default value of **type** is **ParticleUpdater.NONE**.
   *
   * @type { UPDATER }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  type: UPDATER;

  /**
   * Color updater configuration.
   * 
   * The available options of **type** are as follows:
   * 
   * 1. **ParticleUpdater.NONE**: The property does not change. In this case,
   *  the **config** type is [ParticleColorPropertyUpdaterConfigs]{@link ParticleColorPropertyUpdaterConfigs}[ParticleUpdater.NONE].
   * 2. **ParticleUpdater.RANDOM**: The property changes randomly. In this case,
   *  the **config** type is [ParticleColorPropertyUpdaterConfigs]{@link ParticleColorPropertyUpdaterConfigs}[ParticleUpdater.RANDOM].
   * 3. **ParticleUpdater.CURVE**: The property changes with the animation curve.
   *  In this case, the **config** type is [ParticleColorPropertyUpdaterConfigs]{@link ParticleColorPropertyUpdaterConfigs}[ParticleUpdater.CURVE].
   * 
   * **NOTE**
   * 
   * When **type** is set to **ParticleUpdater.RANDOM** or **ParticleUpdater.CURVE**, the color configuration in 
   * **updater** has higher priority than that in **range**. During the animation period specified by updater, the color
   * changes based on the color configuration in updater. Before the animation period specified by updater, the color 
   * changes based on the color configuration in range.
   *
   * @type { ParticleColorPropertyUpdaterConfigs[UPDATER] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  config: ParticleColorPropertyUpdaterConfigs[UPDATER];
}

/**
 * Defines the particle property Options.
 * @interface ParticlePropertyOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface ParticlePropertyOptions<TYPE, UPDATER extends ParticleUpdater> {
  /**
   * Initial property value range of the particle. The initial property value of particles generated by the particle 
   * emitter is randomly selected in this range.
   * 
   * **NOTE**
   * 
   * If a property is set to an invalid value, the default value will be used. If the maximum value is less than the 
   * minimum value, the default range will be used. **TYPE** is number.
   * 
   * The default value varies by property:
   * 
   * 1. **opacity** property: **range:[1.0,1.0]**; the value range is [0, 1]; the default value is **1.0**.
   * 2. **scale** property: **range:[1.0,1.0]**; the value range is [0, 10000]; the default value is **1.0**.
   * 3. **acceleration** speed property:
   *   **range:[0.0,0.0]**; the value range is [0, 10000]; the default value is **0.0**.
   * 4. **acceleration** angle property:
   *   **range:[0.0,0.0]**; the value range is [-10000, 10000]; the default value is **0.0**.
   * 5. **spin** speed property: **range:[0.0,0.0]**; the value range is [-10000, 10000]; the default value is **0.0**.
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
   * How the property is updated. The available options of **type** are as follows:
   * 
   * 1. **ParticleUpdater.NONE**: The property does not change. In this case, the **config** type is
   *  [ParticlePropertyUpdaterConfigs]{@link ParticlePropertyUpdaterConfigs}[ParticleUpdater.NONE].
   * 2. **ParticleUpdater.RANDOM**: The property changes randomly. In this case, the **config** type is
   *  [ParticlePropertyUpdaterConfigs]{@link ParticlePropertyUpdaterConfigs}[ParticleUpdater.RANDOM].
   * 3. **ParticleUpdater.CURVE**: The property changes with the animation curve. In this case, the
   *  **config** type is [ParticlePropertyUpdaterConfigs]{@link ParticlePropertyUpdaterConfigs}[ParticleUpdater.CURVE].
   * 
   * The default value of **type** is **ParticleUpdater.NONE**.
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
 * Defines the particle color property updater configs.
 * @interface ParticleColorPropertyUpdaterConfigs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface ParticleColorPropertyUpdaterConfigs {
  /**
   * The color does not change.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ParticleUpdater.NONE]: void;

  /**
   * The color changes randomly, with the per-second change difference being a value randomly generated from the range. 
   * The target color is obtained by applying the change difference to the current color value of each of the R, G, B, A
   * channels.
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
   * The color changes with the animation curve. The array type indicates that multiple animation segments can be set 
   * for the current property, for example, 0–3000 ms, 3000–5000 ms, and 5000–8000 ms.
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
 * Defines the particle color property updater configs which can support generics.
 * @interface ParticleColorPropertyOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface ParticleColorPropertyOptions<UPDATER extends ParticleUpdater> {
  /**
   * Initial color range of the particle. The initial color of particles generated by the particle emitter is randomly 
   * selected in this range.
   * 
   * Default value: range:[Color.White,Color.White]
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
   * Type of random value distribution for the initial color of the particle. Both uniform distribution and normal (
   * Gaussian) distribution are supported.
   * 
   * Default value: **DistributionType.UNIFORM**
   *
   * @type { ?DistributionType }
   * @default DistributionType.UNIFORM
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  distributionType?: DistributionType;

  /**
   * How the color property is updated. The available options of **type** are as follows:
   * 
   * 1. **ParticleUpdater.NONE**: The property does not change. In this case, the **config** type is
   *  [ParticleColorPropertyUpdaterConfigs]{@link ParticleColorPropertyUpdaterConfigs}[ParticleUpdater.NONE].
   * 2. **ParticleUpdater.RANDOM**: The property changes randomly. In this case, the **config** type
   *  is [ParticleColorPropertyUpdaterConfigs]{@link ParticleColorPropertyUpdaterConfigs}[ParticleUpdater.RANDOM].
   * 3. **ParticleUpdater.CURVE**: The property changes with the animation curve. In this case, the **config** type
   *  is [ParticleColorPropertyUpdaterConfigs]{@link ParticleColorPropertyUpdaterConfigs}[ParticleUpdater.CURVE].
   * 
   * The default value of **type** is **ParticleUpdater.NONE**.
   * 
   * **NOTE**
   * 
   * When **type** is set to **ParticleUpdater.RANDOM** or **ParticleUpdater.CURVE**, the color configuration in 
   * **updater** has higher priority than that in **range**. During the animation time period configured in **updater**,
   * the color configuration from **updater** is used. Outside of the animation time period configured in **updater**, 
   * the color configuration from **range** is used.
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
 * Defines the particle property lifecycle.
 * @interface ParticlePropertyAnimation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface ParticlePropertyAnimation<T> {
  /**
   * Initial value of the property. If the value is invalid, the default value will be used.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  from: T;

  /**
   * Target value of the property. If the value is invalid, the default value will be used.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  to: T;

  /**
   * Start time of the animation.
   * 
   * Unit: ms.
   * 
   * Value range: [0, +∞).
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  startMillis: number;

  /**
   * End time of the animation.
   * 
   * Unit: ms.
   * 
   * Value range: [0, +∞).
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  endMillis: number;

  /**
   * Animation curve.
   * 
   * Default value: **Curve.Linear**
   *
   * @type { ?(Curve | ICurve) }
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
 * Defines the particle array.
 * 
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @typedef Particles
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
   * An array of particle options, each of which covers the emitter, color, opacity, scale, velocity, acceleration, and 
   * spin speed of particles. For details, see [ParticleOptions]{@link ParticleOptions}.
   *
   * @type { Array<ParticleOptions<PARTICLE, COLOR_UPDATER, OPACITY_UPDATER, SCALE_UPDATER, ACC_SPEED_UPDATER, ACC_ANGLE_UPDATER, SPIN_UPDATER>> }
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
 * Enumerates the particle types.
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ParticleType {
  /**
   * Point-like particle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  POINT = 'point',

  /**
   * Image-like particle.
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
 * Enumerates the emitter shapes of a particle.
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ParticleEmitterShape {
  /**
   * Rectangle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  RECTANGLE = 'rectangle',

  /**
   * Circle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  CIRCLE = 'circle',

  /**
   * Ellipse.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  ELLIPSE = 'ellipse',

  /**
   * Annulus.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
   ANNULUS = 'annulus'
}

/**
 * Enumerates the color distribution types of a particle.
 * 
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum DistributionType {
  /**
   * The initial color random values are distributed uniformly.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  UNIFORM = 0,

  /**
   * The initial color random values are distributed according to a Gaussian distribution.
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
 * Enumerates the updater types of a particle.
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ParticleUpdater {
  /**
   * No change.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  NONE = 'none',

  /**
   * Random change.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  RANDOM = 'random',

  /**
   * Change with the animation curve.
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
 * Defines the SizeT type.
 *
 * @typedef { import('../api/arkui/Graphics').SizeT<T> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type SizeT<T> = import('../api/arkui/Graphics').SizeT<T>;

/**
 * Defines the PositionT type.
 *
 * @typedef { import('../api/arkui/Graphics').PositionT<T> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type PositionT<T> = import('../api/arkui/Graphics').PositionT<T>;

/**
 * Defines the Vector2T type. The Vector2T type contains two attribute values: x and y.
 *
 * @typedef { import('../api/arkui/Graphics').Vector2T<T> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare type Vector2T<T> = import('../api/arkui/Graphics').Vector2T<T>;

/**
 * Defines the Particle component attribute functions.
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
   * Sets the disturbance fields.
   *
   * @param { Array<DisturbanceFieldOptions> } fields - Array of disturbance fields.
   * @returns { ParticleAttribute } Returns the particle attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  disturbanceFields(fields: Array<DisturbanceFieldOptions>): ParticleAttribute;

  /**
   * Sets the emitter parameters.
   *
   * @param { Array<EmitterProperty> } value - Array of emitter parameters to set.
   * @returns { ParticleAttribute } Returns the particle attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  emitter(value: Array<EmitterProperty>): ParticleAttribute;

  /**
   * Sets the particle wave field. The wave field applies a force that changes according to the waveform to particles 
   * within the affected range, producing an effect similar to the spreading of ripples.
   *
   * @param { Array<RippleFieldOptions> | undefined } fields - Particle wave field array. You can set multiple particle
   *     wave fields in array form. If this parameter is set to undefined, no wave field is available.
   * @returns { ParticleAttribute } Returns the particle attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  rippleFields(fields: Array<RippleFieldOptions> | undefined): ParticleAttribute;

  /**
   * Sets the particle velocity field. The velocity field applies a force to particles within the affected range, so 
   * that the particles move at the velocity specified by the velocity field in addition to their original velocity.
   *
   * @param { Array<VelocityFieldOptions> | undefined } fields - Particle velocity field array. You can set multiple
   *     particle velocity fields in array form. If this parameter is set to undefined, there is no velocity field.
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
 * Defines Particle Component.
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
 * Defines particle disturbance Field params.
 *
 * @interface DisturbanceFieldOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface DisturbanceFieldOptions {

  /**
   * Field strength, which indicates the intensity of the repulsive force from the center outward. The default value is 
   * **0**. Positive values indicate a repulsive force directed outward, while negative values indicate an attractive 
   * force directed inward.
   * 
   * Value range: (-∞, +∞).
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  strength?: number;

  /**
   * Shape of the field.
   * 
   * Default value: **DisturbanceFieldShape.RECT**
   *
   * @type { ?DisturbanceFieldShape }
   * @default DisturbanceFieldShape.RECT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  shape?: DisturbanceFieldShape;

  /**
   * Size of the field.
   * 
   * Default value: {width:0, height:0}.
   * 
   * Value range of **width** and **height**: [0, +∞).
   *
   * @type { ?SizeT<number> }
   * @default {width:0,height:0}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  size?: SizeT<number>;

  /**
   * Position of the field.
   * 
   * Default value: {x:0, y:0}.
   * 
   * Value range of **x** and **y**: (-∞, +∞).
   *
   * @type { ?PositionT<number> }
   * @default {x:0,y:0}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  position?: PositionT<number>;

  /**
   * Feather value, which represents the degree of attenuation from the center of the field to its edges. The value is 
   * an integer ranging from 0 to 100. A value of 0 indicates that the field is rigid, and all particles within its 
   * range are repelled. The higher the feather value, the more gradual the field becomes, resulting in more particles 
   * close to the center point appearing within the field's range.
   * 
   * Default value: **0**.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  feather?: number;

  /**
   * Noise scale, used to control the overall size of the noise pattern. The value is greater than or equal to 0.
   * 
   * Default value: **1**.
   *
   * @type { ?number }
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  noiseScale?: number;

  /**
   * Noise frequency. The higher the frequency, the finer the noise. The value is greater than or equal to 0.
   * 
   * Default value: **1**.
   *
   * @type { ?number }
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  noiseFrequency?: number;

  /**
   * Noise amplitude, which indicates the range of noise fluctuations. The greater the amplitude, the greater the 
   * difference between the noises. The value is greater than or equal to 0.
   * 
   * Default value: **1**.
   *
   * @type { ?number }
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
 * Defines particle disturbance shape.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum DisturbanceFieldShape {

  /**
   * Rectangle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  RECT = 0,

  /**
   * Circle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  CIRCLE = 1,

  /**
   * Ellipse.
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
 * Configures the annular emitter area.
 * 
 * > **NOTE**
 * >
 * > - If the value of outerRadius or innerRadius is less than 0 or uses the percentage unit, the value is considered as
 * > 0.
 * >
 * > - If the value of outerRadius is less than that of innerRadius, the smaller value is used as the new inner radius 
 * > and the larger value is used as the new outer radius.
 * >
 * > - If the value of endAngle is less than that of startAngle, the smaller value is used as the new start angle and 
 * > the larger value is used as the new end angle.
 * >
 * > ![](docroot://reference/apis-arkui/arkui-ts/figures/annulus.png)
 * 
 * @interface ParticleAnnulusRegion
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface ParticleAnnulusRegion {
  /**
   * The coordinates of the center of the annulus
   *
   * @type { ?PositionT<LengthMetrics> }
   * @default {x:LengthMetrics.percent(0.5),y:LengthMetrics.percent(0.5)}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  center?: PositionT<LengthMetrics>;
  /**
   * The outer radius of the annulus
   *
   * @type { LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  outerRadius: LengthMetrics;
  /**
   * The inner radius of the annulus
   *
   * @type { LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  innerRadius: LengthMetrics;
  /**
   * The start angle of the annulus, in degree
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  startAngle?: number;
  /**
   * The end angle of the annulus, in degree
   *
   * @type { ?number }
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
 * Defines the area information of the particle field.
 * 
 * @interface FieldRegion
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare interface FieldRegion {
  /**
   * The shape of the field
   *
   * @type { ?DisturbanceFieldShape }
   * @default DisturbanceFieldShape.RECT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  shape?: DisturbanceFieldShape;
  /**
   * The coordinates of the center position of the field. The top-left corner of the component is the origin of the
   * coordinate system. The coordinate unit is vp.
   *
   * @type { ?PositionT<number> }
   * @default {x:0,y:0}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  position?: PositionT<number>;
  /**
   * The size of the field. The unit of value is vp.
   *
   * @type { ?SizeT<number> }
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
 * Defines ripple field options.
 * 
 * @interface RippleFieldOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare interface RippleFieldOptions {
  /**
   * The amplitude of the ripple field. The greater the amplitude, the stronger the force of the ripple field.
   * Range of values:[0, +∞)
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  amplitude?: number;
  /**
   * Wavelength, which is the distance over which a wave cycle changes. The larger
   * the wavelength, the slower the wave changes with distance, and the less pronounced the wave fluctiations.
   * Range of values:[0, +∞)
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  wavelength?: number;
  /**
   * Wave speed. The greater the wave speed, the faster the wave changes over time, and the more pronounced the wave
   * motion. Range of values:[0, +∞)
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  waveSpeed?: number;
  /**
   * The attenuation coefficient of the ripple field. The larger the attenuation coefficient, the faster the wave
   * attenuates over time. Range of values:[0,1]
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  attenuation?: number;
  /**
   * The central point where the ripple field generates force. The top-left corner of the component is the origin of
   * coordinates. The coordinate unit is vp.
   *
   * @type { ?PositionT<number> }
   * @default {x:0,y:0}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  center?: PositionT<number>;
  /**
   * The region influenced by the ripple field.
   *
   * @type { ?FieldRegion }
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
 * Parameter used to describe the velocity field of particles.
 * 
 * @interface VelocityFieldOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare interface VelocityFieldOptions {
  /**
   * The velocity values in each direction of the velocity field. Particles only acquire this velocity when within
   * the range of the velocity field; once they leave the range of the velocity field, they are no longer influenced
   * by it and do not gain this additional velocity.
   *
   * @type { ?Vector2T<number> }
   * @default {x:0,y:0}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  velocity?: Vector2T<number>;
  /**
   * The region influenced by the velocity field.
   *
   * @type { ?FieldRegion }
   * @default {shape:DisturbanceFieldShape.RECT,position:{x:0,y:0},size:{width:0,height:0}}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  region?: FieldRegion;
}
