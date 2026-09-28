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
 * Defines the particle tuple, which defines the type of animation parameter configuration value pairs.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type ParticleTuple<T1, T2> = [T1, T2];

/**
 * Particle velocity.
 * 
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface VelocityOptions {
  /**
   * Velocity magnitude.
   * 
   * Default value: **{range:[0.0,0.0]}**    
   * 
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  speed: ParticleTuple<number, number>;

  /**
   * Direction of velocity, in degrees (°). With the geometric center of the element as the coordinate origin and the 
   * horizontal direction as the X-axis, a positive value indicates a clockwise rotation angle.
   * 
   * Default value: **{range:[0.0,0.0]}** 
   * 
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
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
 * Particle acceleration.
 * 
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
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
   * Acceleration magnitude. Unit: vp/s²
   * 
   * Default value: **{range:[0.0,0.0]}**      
   * 
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  speed?: ParticlePropertyOptions<number, ACC_SPEED_UPDATER>;

  /**
   * Acceleration direction. The unit is degree (°).
   * 
   * Default value: **{range:[0.0,0.0]}** 
   * 
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
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
 * Sets particle parameters.
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
   * Particle emitter configuration.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  emitter: EmitterOptions<PARTICLE>;

  /**
   * Particle color configuration.
   * 
   * **Note:**
   * 
   * Default value: **{ range:[Color.White,Color.White] }**. Image particles do not support setting the color.
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
   * Particle opacity configuration.
   * 
   * Default value: **{ range:[1.0,1.0] }**
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
   * Particle size configuration.
   * 
   * Default value: **{ range:[1.0,1.0] }**
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
   * Particle velocity configuration.
   * 
   * **Note:**
   * 
   * **speed** indicates the velocity magnitude. **angle** indicates the direction of the velocity (unit: degree), with 
   * the geometric center of the element as the coordinate origin and the horizontal direction as the X-axis. A positive
   * value indicates clockwise rotation angle.
   * 
   * Default value: **{ speed:[0.0,0.0],angle:[0.0,0.0] }**
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
   * Particle acceleration configuration. 
   * 
   * **Note:**
   * 
   * **speed** indicates the acceleration magnitude, and angle indicates the acceleration direction (unit: degree).
   * 
   * Default value: **{ speed:{range:[0.0,0.0]},angle:{range:[0.0,0.0]}** }
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
   * Particle spin angle configuration, unit is degree (°). 
   * 
   * Default value: **{range:[0.0,0.0]}**
   * 
   * Direction: a positive value indicates clockwise rotation, and a negative value indicates counterclockwise rotation.
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
 * Sets the radius of a particle.
 *
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
   * Default value: **0**. If the value is less than 0, the default value **0** is used.
   * 
   * Value range: [0, +∞)
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
 * Sets the image options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface ImageParticleParameters {
  /**
   * Image path. Both local images and network images are supported. For details about how to reference images, see 
   * [Loading Image Resources](docroot://ui/arkts-graphics-display.md#loading-image-resources).
   * 
   * The SVG image type is not supported yet.
   * 
   * When src remains unchanged, cached resources are used preferentially, and resources cannot be switched dynamically.
   * To switch resources dynamically, you are advised to switch to a different src.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  src: ResourceStr;

  /**
   * Image size. The first parameter is the image width, and the second parameter is the image height.
   * 
   * Default value: [0, 0]
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
   * Default value: **ImageFit.Cover**
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
 * Sets particle configuration items.
 *
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ParticleType.IMAGE]: ImageParticleParameters;
}

/**
 * Sets the emitter attributes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface EmitterProperty {

  /**
   * Index, rounded to an integer, which specifies the corresponding emitter by the array index of the emitter in the 
   * initialization parameters. The default value is 0 for an invalid value.
   * 
   * **Atomic service API:** This API is supported in atomic services since API version 12.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  index: number;

  /**
   * Emission rate of the emitter, that is, the number of particles emitted per second.
   * 
   * If this parameter is not passed, the current emission rate is retained. If the passed value is less than 0, the 
   * default value 5 is used. An **emitRate** value greater than 5000 may have a significant impact on performance and a
   * sharp drop in frame rate. It is recommended to set this parameter to a value less than 5000.
   * 
   * **Atomic service API:** This API is supported in atomic services since API version 12.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  emitRate?: number;

  /**
   * Emitter position. Only the number type is supported.
   * 
   * If this parameter is not passed, the current emitter position is retained. Two valid parameters must be passed. If 
   * either of them is invalid, **position** does not take effect. When the shape of the emitter corresponding to the 
   * **index** is annulus (**ANNULUS**), **position** does not take effect.
   * 
   * Value range of x and y: (-∞, +∞).
   * 
   * **Atomic service API:** This API is supported in atomic services since API version 12.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  position?: PositionT<number>;

  /**
   * Size of the emitter. Only the number type is supported.
   * 
   * If this parameter is not passed, the current emitter size is retained. Two valid parameters greater than 0 must be 
   * passed. If either of them is invalid, **size** does not take effect. When the shape of the emitter corresponding to
   * the index is annulus (**ANNULUS**), **size** does not take effect.
   * 
   * **Atomic service API:** This API is supported in atomic services since API version 12.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  size?: SizeT<number>;

  /**
    * Ring emitter parameters. This parameter takes effect only when the shape of the emitter corresponding to the 
    * **index** is annulus. For a annulus emitter, **position** and **size** do not take effect.
    * 
    * **Atomic service API:** This API is supported in atomic services since API version 20.
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
 * Particle configuration.
 * 
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface EmitterParticleOptions<PARTICLE extends ParticleType> {
  /**
   * Particle type, which can be an image or a point.   
   * 
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  type: PARTICLE;
  /**
   * Configuration of the corresponding type.
   * 
   * The **config** type is related to the **type** value:
   * 
   * 1. If **type** is **ParticleType.POINT**, the **config** type is [PointParticleParameters]{@link PointParticleParameters}.
   * 2. If **type** is **ParticleType.IMAGE**, the **config** type is [ImageParticleParameters]{@link ImageParticleParameters}.
   * 
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  config: ParticleConfigs[PARTICLE];

  /**
   * Total number of emitted particles. The value of **count** must be greater than or equal to -1. When **count** is -
   * 1, the total number of particles is infinite.
   * 
   * **Note:**
   * 
   * When **count** is -1, the emitter continuously emits particles. If you do not need to continuously generate a large
   * number of particles, it is recommended not to set **count** to -1, as this may cause significant performance 
   * impact. It is recommended to set reasonable **emitRate** and **lifetime** values to avoid performance issues.
   * 
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  count: number;

  /**
   * Lifecycle of a single particle. The default value is **1000** (that is, 1000 ms, or 1 s), and **lifetime** must be 
   * greater than or equal to -1. When **lifetime** is -1, the particle lifecycle is infinite. When **lifetime** is less
   * than -1, the default value is used.
   * 
   * **Note:** If you do not need the animation to play continuously, it is recommended not to set the **lifecycle** to 
   * -1, as this may cause significant performance impact.
   * 
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
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
   * Value range of the particle lifecycle, in milliseconds (ms). After **lifetimeRange** is set, the particle lifecycle
   * is a random integer between [lifetime - lifetimeRange, lifetime + lifetimeRange]. The default value of 
   * **lifetimeRange** is **0**, and the value range is from 0 to positive infinity. When it is set to a negative value,
   * the default value is used. 
   * 
   * **Atomic service API:** Since API version 12, this API is supported in atomic services.
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
 * Defines the configuration options of the particle emitter.
 *
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
   * -**type** indicates the particle type, which can be an image or a point.
   * 
   * -**config** indicates the configuration of the corresponding type.
   * 
   * -The **config** type is related to the **type** value:
   * 
   * 1. If **type** is **ParticleType.POINT**, the **config** type is [PointParticleParameters]{@link PointParticleParameters}.
   * 2. If **type** is **ParticleType.IMAGE**, the **config** type is [ImageParticleParameters]{@link ImageParticleParameters}.
   * 
   * -**count** indicates the total number of emitted particles. The value of **count** must be greater than or equal to
   * -1. When **count** is -1, the total number of particles is infinite.
   * 
   * -**lifetime** indicates the lifecycle of a single particle. The default value is **1000** (that is, 1000 ms, 1 s). 
   * The value of lifetime must be greater than or equal to -1. When **lifetime** is -1, the particle lifecycle is 
   * infinite. When **lifetime** is less than -1, the default value is used.
   * 
   * **Note:** If the animation does not need to play continuously, it is recommended not to set the lifecycle to -1, as
   * this may cause significant performance impact.
   * 
   * **lifetimeRange** indicates the value range of the particle lifecycle. After **lifetimeRange** is set, the particle
   * lifecycle is a random integer in [lifetime - lifetimeRange, lifetime + lifetimeRange]. The default value of 
   * **lifetimeRange** is **0**, and the value range is 
   * [0, +∞). When it is set to a negative value, the default value is used.
   * 
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
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
   * Emission rate of the emitter (that is, the number of particles emitted per second). Default value: **5**. When the 
   * value is less than 0, the default value **5** is used. When **emitRate** exceeds 5000, performance is severely 
   * affected and the frame rate may drop significantly. It is recommended to set this parameter to a value less than 50
   * 00.
   * 
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
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
   * Shape of the emitter.
   * 
   * Default value: **ParticleEmitterShape.RECTANGLE**
   * 
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
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
   * Emitter position (the position relative to the upper left corner of the component. The first parameter is the 
   * relative offset in the x direction, and the second parameter is the relative offset in the y direction.). When the 
   * emitter shape is annular (that is, **shape** is **ParticleEmitterShape.ANNULUS**), this property does not take 
   * effect, and the shape information must be specified through the **annulusRegion** parameter. 
   * 
   * Default value: `[0.0, 0.0]`
   * 
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
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
   * Size of the emitter. The first parameter is the emitter width, and the second parameter is the emitter height. When
   * the emitter shape is annulus (that is, **shape** is **ParticleEmitterShape.ANNULUS**), this property does not take 
   * effect, and the shape information must be specified through the **annulusRegion** parameter.
   * 
   * Default value: `['100%','100%']` (that is, the emission window occupies the entire **Particle** component)
   * 
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
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
   * Ring emitter parameter. It takes effect only when the emitter shape is annulus (that is, the **shape** parameter is
   * **ParticleEmitterShape.ANNULUS**). For a annulus emitter, the shape information must be specified through the 
   * **annulusRegion** parameter, and **position** and **size** do not take effect. When it is not set, the emitter does
   * not use the annulus region parameter.
   * 
   * **Atomic service API:** Since API version 20, this API is supported in atomic services.
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
 * Sets the particle property updater configuration.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface ParticlePropertyUpdaterConfigs<T> {
  /**
   * No change.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  [ParticleUpdater.NONE]: void;

  /**
   * When the change mode is random, the change difference per second is a value randomly generated within the 
   * configured range.
   * 
   * The target property value is the current property value plus the change difference. For example, if the current 
   * property value is **0.2** and **config** is [0.1,1.0]:
   * 
   * 1. If the change difference takes a random value 0.5 within the range [0.1,1.0], the target property value is 0.2 + 0.5 = 0.7.
   * 2. The change difference can also be negative. For example, if the current property value is 0.2 and **config** is [-3.0,2.0], and the change difference takes a random value -2.0 within the range [-3.0,2.0], the target property value is 0.2 - 2.0 = -1.8.
   * 
   * **Note:**
   * 
   * **config** configures the value range of the change difference, and there is no constraint on the maximum and 
   * minimum values of the difference. However, if the current property value plus the difference is greater than the 
   * maximum property value, the target property value takes the maximum property value; if the current property value 
   * plus the difference is less than the minimum property value, the target property value takes the minimum property 
   * value. **T** is number.
   * 
   * For example, if the value range of **opacity** is [0.0,1.0], when the current property value plus the difference 
   * exceeds 1.0, 1.0 is used.
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
   * Configuration of property change when the change mode is curve. The array type indicates that multiple animation 
   * segments can be set for the current property, for example, **0ms-3000ms**, **3000ms-5000ms**, and 
   * **5000ms-8000ms**. **T** is number.
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
 * Defines the property change configuration.
 * 
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than the inner element's. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface ParticleUpdaterOptions<TYPE, UPDATER extends ParticleUpdater> {
  /**
   * Property change type. 
   * 
   * Default value: **type** defaults to **ParticleUpdater.NONE**.    **Atomic service API:** Since API version 11, this
   * API is supported in atomic services.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  type: UPDATER;

  /**
   * Property change configuration. The property change type has three categories:
   * 
   * 1. When **type** is **ParticleUpdater.NONE**, it indicates no change, and **config** is of type
   * [ParticlePropertyUpdaterConfigs]{@link ParticlePropertyUpdaterConfigs}[ParticleUpdater.NONE].
   * 2. When type is **ParticleUpdater.RANDOM**, it indicates the change type is random, and **config** is of type
   * [ParticlePropertyUpdaterConfigs]{@link ParticlePropertyUpdaterConfigs}[ParticleUpdater.RANDOM].
   * 3. When **type** is **ParticleUpdater.CURVE**, it indicates the change type is curve, and **config** is of type
   * [ParticlePropertyUpdaterConfigs]{@link ParticlePropertyUpdaterConfigs}[ParticleUpdater.CURVE].
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
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
 * Randomly generates a difference value within the interval when the color change mode is random. The four color 
 * channels—r, g, b, and a—each overlay the current color value with the difference value every second to produce the 
 * target color value, achieving the effect of random color changes.
 * 
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface ParticleColorUpdaterOptions<UPDATER extends ParticleUpdater> {
  /**
   * Change type of the color property.
   * 
   * Default value: **type** defaults to **ParticleUpdater.NONE**.     
   * 
   * **Atomic service API:** This API is supported in atomic services since API version 11.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  type: UPDATER;

  /**
   * The color property change type has three categories:
   * 
   * 1. When **type** is **ParticleUpdater.NONE**, it indicates no change, and the **config** type is [ParticleColorPropertyUpdaterConfigs]{@link ParticleColorPropertyUpdaterConfigs}[ParticleUpdater.NONE].
   * 2. When **type** is **ParticleUpdater.RANDOM**, it indicates random uniform change, and the **config** type is [ParticleColorPropertyUpdaterConfigs]{@link ParticleColorPropertyUpdaterConfigs}[ParticleUpdater.RANDOM].
   * 3. When **type** is **ParticleUpdater.CURVE**, it indicates change following the animation curve, and the **config** type is [ParticleColorPropertyUpdaterConfigs]{@link ParticleColorPropertyUpdaterConfigs}[ParticleUpdater.CURVE].
   * 
   * **NOTE**
   * 
   * When **type** is **ParticleUpdater.RANDOM** or **ParticleUpdater.CURVE**, the color configuration in **updater** 
   * takes precedence over the color configuration in **range**. Within the animation time period configured in updater,
   * the color changes according to the color configuration in **updater**; outside the animation time period configured
   * in **updater**, the color changes according to the color configuration in **range**.
   * 
   * **Atomic service API:** This API is supported in atomic services since API version 11.
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
 * Sets particle attributes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface ParticlePropertyOptions<TYPE, UPDATER extends ParticleUpdater> {
  /**
   * Initial particle property value range. The property value of the particle generated by the particle emitter is 
   * randomly selected within the range.
   * 
   * **Note:**
   * 
   * For each property, invalid input uses the default value. When the maximum value is less than the minimum value, the
   * default range is used. **TYPE** is number.
   * 
   * The default values of different properties are different:
   * 
   * 1. **opacity**: range:[1.0,1.0], value range is [0, 1], default value is **1.0**.
   * 2. **scale**: range:[1.0,1.0], value range is [0, 10000], default value is **1.0**.
   * 3. **speed** of **acceleration**: range:[0.0,0.0], value range is [0, 10000], default value is **0.0**.
   * 4. **angle** of **acceleration**: range:[0.0,0.0], value range is [-10000, 10000], default value is **0.0**.
   * 5. **spin**: range:[0.0,0.0], value range is [-10000, 10000], default value is **0.0**.
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
   * Property change configuration. The property change type has three categories:
   * 
   * 1. When **type** is **ParticleUpdater.NONE**, it indicates no change, and the **config** type is [ParticlePropertyUpdaterConfigs]{@link ParticlePropertyUpdaterConfigs}[ParticleUpdater.NONE].
   * 2. When **type** is **ParticleUpdater.RANDOM**, it indicates that the change type is random change, and the **config** type is [ParticlePropertyUpdaterConfigs]{@link ParticlePropertyUpdaterConfigs}[ParticleUpdater.RANDOM].
   * 3. When **type** is **ParticleUpdater.CURVE**, it indicates that the change type is curve change, and the **config** type is [ParticlePropertyUpdaterConfigs]{@link ParticlePropertyUpdaterConfigs}[ParticleUpdater.CURVE].
   * 
   * Default value: **type** defaults to **ParticleUpdater.NONE**.
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
 * Sets the configuration of the particle color attribute updater.
 *
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
   * Indicates that when the change mode is random, a difference value is randomly generated for each particle within 
   * the change range. The r, g, b, and a color channels each use the difference value to overlay the current color 
   * value per second to generate the target color value, achieving the effect of random color change.
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
   * Indicates the configuration of color change when the change mode is curve. The array type indicates that the 
   * current property can be set with multiple animation segments, for example, **0ms-3000ms**, **3000ms-5000ms**, and 
   * **5000ms-8000ms** are set as separate animations.
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
 * Sets the particle color attribute updater configuration.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface ParticleColorPropertyOptions<UPDATER extends ParticleUpdater> {
  /**
   * Particle initial color range. The initial color of particles generated by the particle emitter is randomly selected
   * from the **range**.
   * 
   * Default value: **range:[Color.White,Color.White]** 
   * 
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
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
   * Distribution type of the particle initial color random values. Allows you to select the distribution type for 
   * generating random color values, supporting uniform distribution or normal (Gaussian) distribution.
   * 
   * Default value: **DistributionType.UNIFORM**
   * 
   * **Atomic service API:** Since API version 12, this API is supported in atomic services.
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
   * Color property change configuration. The color property change type has three categories:
   * 
   * 1. When **type** is **ParticleUpdater.NONE**, it indicates no change, and the **config** type is [ParticleColorPropertyUpdaterConfigs]{@link ParticleColorPropertyUpdaterConfigs}[ParticleUpdater.NONE]. 
   * 2. When **type** is **ParticleUpdater.RANDOM**, it indicates random uniform change, and the **config** type is [ParticleColorPropertyUpdaterConfigs]{@link ParticleColorPropertyUpdaterConfigs}[ParticleUpdater.RANDOM]. 
   * 3. When **type** is **ParticleUpdater.CURVE**, it indicates change along an animation curve, and the **config** type is [ParticleColorPropertyUpdaterConfigs]{@link ParticleColorPropertyUpdaterConfigs}[ParticleUpdater.CURVE].
   * 
   * Default value: **type** defaults to **ParticleUpdater.NONE**. 
   * 
   * **NOTE**
   * 
   * When **type** is **ParticleUpdater.RANDOM** or **ParticleUpdater.CURVE**, the color configuration in **updater** 
   * takes precedence over the color configuration in **range**. Within the animation time period configured in 
   * **updater**, the color changes according to the color configuration in **updater**; outside the animation time 
   * period configured in **updater**, the color changes according to the color configuration in **range**.
   * 
   * **Atomic service API:** Since API version 11, this API is supported in atomic services.
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
 * Sets the lifecycle of particle properties.
 *
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
   * Value range: [0, +∞). If a negative value is passed in, the default value **0** is used.
   *
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
   * Value range: [0, +∞). If a negative value is passed in, the default value **0** is used.
   *
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
 * Defines a collection of particle animations.
 * 
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than the inner element's. This does not affect interface usability.
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
   * Collection of particle animations. Each particle animation ([ParticleOptions]{@link ParticleOptions}) contains 
   * particle emission, and can configure the color, opacity, size, velocity, acceleration, and spin angle of particles.
   * For details, see [ParticleOptions]{@link ParticleOptions}. 
   * 
   * **Atomic service API:** This API is supported in atomic services since API version 11.
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
   *
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
 * Particle type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ParticleType {
  /**
   * Point particle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  POINT = 'point',

  /**
   * Image particle.
   * 
   * Image particles do not support color settings.
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
 * Particle emitter shape.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ParticleEmitterShape {
  /**
   * The particle emitter is a rectangle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  RECTANGLE = 'rectangle',

  /**
   * The particle emitter is a circle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  CIRCLE = 'circle',

  /**
   * The particle emitter is an ellipse.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  ELLIPSE = 'ellipse',

  /**
    * The particle emitter is an annulus. When this shape is used, the **annulusRegion** parameter must be configured, 
    * and the **position** and **size** parameters do not take effect.
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
 * Defines the random distribution type of the initial color.
 *
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
 * Particle change type.
 *
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
   * Random uniform change.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  RANDOM = 'random',

  /**
   * Animation curve change.
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
 * Defines the Size type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type SizeT<T> = import('../api/arkui/Graphics').SizeT<T>;

/**
 * Sets or returns the position of the component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type PositionT<T> = import('../api/arkui/Graphics').PositionT<T>;

/**
 * Defines the **Vector2T** type. The **Vector2T** type contains two property values: **x** and **y**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare type Vector2T<T> = import('../api/arkui/Graphics').Vector2T<T>;

/**
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported.
 * 
 * The [universal events]{@link ./common} are supported.
 *
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
   * @param { Array<DisturbanceFieldOptions> } fields - Array of disturbance fields. Used to set the disturbance effect
   *     on the particle motion trajectory. By configuring multiple disturbance fields, repulsive or attractive forces
   *     can be applied to particles to change their motion trajectories.
   * @returns { ParticleAttribute } Returns the particle attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  disturbanceFields(fields: Array<DisturbanceFieldOptions>): ParticleAttribute;

  /**
   * Supports dynamic update of emitter properties. Use the index in **EmitterProperty** to specify the emitter to 
   * update (based on the array index of the emitter in the initialization parameters), and dynamically update the 
   * emission rate, position, size, and annular area parameters of the emitter. You must first create a particle 
   * animation and configure the emitter through the **Particle** API, and then dynamically update the parameters of the
   * corresponding emitter through the **emitter()** property. The **emitter()** property only updates the parameters of
   * existing emitters and cannot add new emitters.
   *
   * @param { Array<EmitterProperty> } value - Array of emitter parameters to be updated.
   * @returns { ParticleAttribute } Returns the particle attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  emitter(value: Array<EmitterProperty>): ParticleAttribute;

  /**
   * Sets the particle ripple field. The ripple field applies a force that changes in a waveform manner to particles 
   * within its influence range, producing an effect similar to ripple diffusion.
   *
   * @param { Array<RippleFieldOptions> | undefined } fields - Array of particle ripple fields. Multiple particle ripple
   *     fields can be set in the array form. When set to **undefined**, it indicates no ripple field.
   * @returns { ParticleAttribute } Returns the particle attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  rippleFields(fields: Array<RippleFieldOptions> | undefined): ParticleAttribute;

  /**
   * Sets the particle velocity field. The velocity field applies a force to particles within its influence range, so 
   * that the velocity specified by the velocity field is superimposed on the original velocity of the particles.
   *
   * @param { Array<VelocityFieldOptions> | undefined } fields - Array of particle velocity fields. Multiple particle
   *     velocity fields can be set in array form. When set to **undefined**, it indicates no velocity field.
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
 * Sets the parameters of the disturbance field.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface DisturbanceFieldOptions {

  /**
   * Field strength, which indicates the strength of the repulsive force from the center of the field outward. Default 
   * value: **0**. A positive value indicates that the repulsive force points outward, and a negative value indicates an
   * attractive force pointing inward.
   * 
   * Value range: (-∞, +∞).
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
   * Shape of the field.
   * 
   * The default value is **DisturbanceFieldShape.RECT**.
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
   * Size of the field, in vp.
   * 
   * Default value: **{width:0, height:0}**.
   * 
   * Value range of **width** and **height**: [0, +∞).
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
   * Position of the field, in vp.
   * 
   * Default value: **{x:0, y:0}**.
   * 
   * Value range of x and y: (-∞, +∞).
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
   * Feathering value, which indicates the degree of attenuation from the center of the field to the field edge. It is 
   * an integer ranging from 0 to 100. The value **0** indicates that the field is a rigid body, and all particles 
   * within the range are repelled. A larger feathering value indicates a greater degree of easing of the field, and 
   * more particles close to the center appear within the field range. If the value is set to negative or greater than 1
   * 00, the default value is used. If the value is set to a non-integer, it is truncated to an integer.
   * 
   * Default value: **0**.
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
   * Noise scale, used to control the overall size of the noise pattern. The value must be greater than or equal to 0.
   * 
   * Default value: **1**. If a negative value is passed in, the default value **1** is used.
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
   * Noise frequency. A larger frequency indicates finer noise. The value must be greater than or equal to 0.
   * 
   * Default value: **1**. If a negative value is passed in, the default value **1** is used.
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
   * Noise amplitude, which indicates the fluctuation range of the noise value. A larger amplitude indicates a larger 
   * fluctuation range. The value must be greater than or equal to 0.
   * 
   * Default value: **1**. If a negative value is passed in, the default value **1** is used.
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
 * Defines the shape of the disturbance field.
 *
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
 * Configures the annulus emitter area.
 * 
 * > **NOTE**
 * >
 * > - If **outerRadius** or **innerRadius** is less than 0 or uses the percentage unit, the value 0 is used.
 * >
 * > - If **outerRadius** is less than **innerRadius** (that is, the outer circle radius is less than the inner circle 
 * > radius), the smaller value is used as the new inner circle radius, and the larger value is used as the new outer 
 * > circle radius.
 * >
 * > - If **endAngle** is less than **startAngle** (that is, the end angle is less than the start angle), the smaller 
 * > value is used as the new start angle, and the larger value is used as the new end angle.
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
   * The coordinates of the center of the annulus
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
   * The outer radius of the annulus
   *
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
 * Sets the region information of the particle field.
 *
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
 * Defines the parameters used to describe the particle ripple field information.
 *
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
 * Defines the parameters used to describe the particle velocity field information.
 *
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
   * @default {shape:DisturbanceFieldShape.RECT,position:{x:0,y:0},size:{width:0,height:0}}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  region?: FieldRegion;
}