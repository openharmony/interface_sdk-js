/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * Defines the ParticleOptions Interface.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
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
   * @crossplatform
   * @since 10
   */
  emitter: EmitterOptions<PARTICLE>;

  /**
   * Particle color.
   * @type { ParticleColorPropertyOptions<COLOR_UPDATER> }
   * @default {range:['#FFFFFF','#FFFFFF']}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  color?: ParticleColorPropertyOptions<COLOR_UPDATER>;

  /**
   * Particle opacity.
   * @type { ParticlePropertyOptions<number, OPACITY_UPDATER> }
   * @default {range:[1.0,1.0]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  opacity?: ParticlePropertyOptions<number, OPACITY_UPDATER>;

  /**
   * Particle scale.
   * @type { ParticlePropertyOptions<number, SCALE_UPDATER> }
   * @default {range:[1.0,1.0]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  scale?: ParticlePropertyOptions<number, SCALE_UPDATER>;

  /**
   * particle velocity.
   * @type { speed: [number, number]; angle: [number, number] }
   * @default {speed:[0,0];angle:[0,0]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  velocity?: {
    speed: [number, number];
    angle: [number, number];
  };

  /**
   * Particle acceleration.
   * @type { speed?: ParticlePropertyOptions<number, ACC_SPEED_UPDATER>; angle?: ParticlePropertyOptions<number, ACC_ANGLE_UPDATER> }
   * @default {speed:{range:[0,0]};angle:{range:[0,0]}}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  acceleration?: {
    speed?: ParticlePropertyOptions<number, ACC_SPEED_UPDATER>;
    angle?: ParticlePropertyOptions<number, ACC_ANGLE_UPDATER>;
  };

  /**
   * Particle spin.
   * @type { ParticlePropertyOptions<number, SPIN_UPDATER> }
   * @default {range:[0,0]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  spin?: ParticlePropertyOptions<number, SPIN_UPDATER>;
}

/**
 * Defines the point particle parameters.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface PointParticleParameters {
  /**
   * Particle radius.
   * @type { VP }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  radius: VP;
}

/**
 * Defines the image particle parameters.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface ImageParticleParameters {
  /**
   * Particle image pixelMap.
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  src: ResourceStr;

  /**
   * Particle image size.
   * @type { [Dimension, Dimension] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  size: [Dimension, Dimension];

  /**
   * Sets the zoom type of an image.
   * @type { ImageFit }
   * @default ImageFit.Cover
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */  
  objectFit?: ImageFit;
}

interface ParticleConfigs {
  /**
   * Sets point type of Particle.
   * @type { PointParticleParameters } 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */    
  [ParticleType.POINT]: PointParticleParameters;

  /**
   * Sets image type of Particle.
   * @type { PointParticleParameters } 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */      
  [ParticleType.IMAGE]: ImageParticleParameters;
}

/**
 * Defines the emitter Options.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface EmitterOptions<PARTICLE extends ParticleType> {
  particle: {
    /**
     * Particle type.
     * @type { ParticleType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    type: PARTICLE;
    /**
     * Particle config.
     * @type { ParticleConfigs[PARTICLE] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    config: ParticleConfigs[PARTICLE];

    /**
     * Particle count.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    count: number;

    /**
     * Particle lifetime.
     * @type { number }
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    lifetime?: number;
  };

  /**
   * Rate of emitter, number of particles produced per second.
   * @type { number }
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  emitRate?: number;

  /**
   * Shape of emitter.
   * @type { ParticleEmitterShape }
   * @default ParticleEmitterShape.RECTANGLE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  shape?: ParticleEmitterShape;

  /**
   * Position of emitter.
   * The first element  means X-axis location.
   * The second element means the Y-axis location.
   * @type { [Dimension, Dimension] }
   * @default [0,0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  position?: [Dimension, Dimension];

  /**
   * Position of emitter.
   * The first element  means emitter width.
   * The second element means emitter height.
   * @type { [Dimension, Dimension] }
   * @default ['100%','100%']
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  size?: [Dimension, Dimension];
}

/**
 * Defines the particle property updater configs.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface ParticlePropertyUpdatorConfigs<T> {
  /**
   * No effecet of particle updater.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */  
  [ParticleUpdater.NONE]: void;

  /**
   * Random effecet of particle updater.
   * The first element  means emitter width.
   * The second element means emitter height.
   * @type { [T, T] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */    
  [ParticleUpdater.RANDOM]: [T, T];

  /**
   * Curve effecet of particle updater.
   * @type { Array<ParticlePropertyAnimation<T>> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */    
  [ParticleUpdater.CURVE]: Array<ParticlePropertyAnimation<T>>;
}

/**
 * Defines the particle property Options.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface ParticlePropertyOptions<TYPE, UPDATER extends ParticleUpdater> {
  /**
   * Particle property range.
   * @type { [T, T] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  range: [TYPE, TYPE];

  /**
   * Particle property updater.
   * @type { type: UPDATER; config: ParticlePropertyUpdatorConfigs<TYPE>[UPDATER] }
   * @default  {type:UPDATER.NONE;config:ParticlePropertyUpdatorConfigs<UPDATER.NONE>[UPDATER.NONE]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  updater?: {
    type: UPDATER;
    config: ParticlePropertyUpdatorConfigs<TYPE>[UPDATER];
  };
}

/**
 * Defines the particle color property updater configs.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface ParticleColorPropertyUpdatorConfigs {
  /**
   * No effecet of particle color Property updater.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */    
  [ParticleUpdater.NONE]: void;

  /**
   * Random effecet of particle color Property updater.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */  
  [ParticleUpdater.RANDOM]: {
    r: [number, number];
    g: [number, number];
    b: [number, number];
    a: [number, number];
  };

  /**
   * Curve effecet of particle color Property updater.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */   
  [ParticleUpdater.CURVE]: Array<ParticlePropertyAnimation<ResourceColor>>;
}

/**
 * Defines the particle color property updater configs which can support generics.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface ParticleColorPropertyOptions<UPDATER extends ParticleUpdater> {
  /**
   * Particle color property range.
   * @type { [ResourceColor, ResourceColor] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */  
  range: [ResourceColor, ResourceColor];

  /**
   * Particle color property updater.
   * @type { ?{type: UPDATER;config: ParticleColorPropertyUpdatorConfigs[UPDATER];} }
   * @default {type:UPDATER.NONE;config:ParticleColorPropertyUpdatorConfigs[UPDATER.NONE]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */    
  updater?: {
    type: UPDATER;
    config: ParticleColorPropertyUpdatorConfigs[UPDATER];
  };
}

/**
 * Defines the particle property lifecycle.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface ParticlePropertyAnimation<T> {
  /**
   * particle scale beginning position.
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  from: T;

  /**
   * Particle scale ending position.
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  to: T;

  /**
   * Particle scale start milis.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  startMilis: number;

  /**
   * Particle scale end milis.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  endMilis: number;

  /**
   * Particle scale animation curve.
   * @type { ?(Curve | ICurve) }
   * @crossplatform
   * @since 10
   */
  curve?: Curve | ICurve;
}

/**
 * Defines the particle Interface.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface ParticleInterface {
  /**
   * ImageAnimator is returned.
   * @param { Array<ParticleOptions<PARTICLE,COLOR_UPDATER,OPACITY_UPDATER,SCALE_UPDATER,ACC_SPEED_UPDATER,ACC_ANGLE_UPDATER,SPIN_UPDATER>> } particles - list of ParticleOptions.
   * @returns { ParticleAttribute } Returns the particle attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  <
    PARTICLE extends ParticleType,
    COLOR_UPDATER extends ParticleUpdater,
    OPACITY_UPDATER extends ParticleUpdater,
    SCALE_UPDATER extends ParticleUpdater,
    ACC_SPEED_UPDATER extends ParticleUpdater,
    ACC_ANGLE_UPDATER extends ParticleUpdater,
    SPIN_UPDATER extends ParticleUpdater
  >(value: {
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
  }): ParticleAttribute;
}

/**
 * The type of particle.
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum ParticleType {
  /**
   * Indicating particle type a point.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  POINT = "point",

  /**
   * Indicating particle type a Image.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  IMAGE = "image",
}

/**
 * The type of particle.
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum ParticleEmitterShape {
  /**
   * Indicating emitter shape a rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  RECTANGLE = "rectangle",

  /**
   * Indicating emitter shape a circle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  CIRCLE = "circle",

  /**
   * Indicating emitter shape a ellipsis.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  ELLIPSIS = "ellipsis",
}

/**
 * The type of particle.
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum ParticleUpdater {
  /**
   * Indicating none updater type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */  
  NONE = "none",

  /**
   * Indicating random updater type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  RANDOM = "random",

  /**
   * Indicating curve updater type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  CURVE = "curve",
}

/**
 * Defines the Particle component attribute functions.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class ParticleAttribute extends CommonMethod<ParticleAttribute> {}

/**
 * Defines Particle Component.
 * @type { ParticleAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const Particle: ParticleInterface;
