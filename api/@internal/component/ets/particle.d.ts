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
   * Particle velocity.
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
 * Defines the parameters for a point-like particle.
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
 * Defines the parameters for an image-like particle.
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
   * Image fit.
   * @type { ImageFit }
   * @default ImageFit.Cover
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */  
  objectFit?: ImageFit;
}

/**
 * Defines the particle configs.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface ParticleConfigs {
  /**
   * Point-like Particle.
   * @type { PointParticleParameters } 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */    
  [ParticleType.POINT]: PointParticleParameters;

  /**
   * Image-like Particle.
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
  /**
   * Set particle config.
   * @type { object } 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */      
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
   * Emitting rate, that is, the number of particles produced per second.
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
   * The first element means X-axis location.
   * The second element means the Y-axis location.
   * @type { [Dimension, Dimension] }
   * @default [0,0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  position?: [Dimension, Dimension];

  /**
   * Size of emitter.
   * The first element means emitter width.
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
interface ParticlePropertyUpdaterConfigs<T> {
  /**
   * No effect of particle updater.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */  
  [ParticleUpdater.NONE]: void;

  /**
   * Random effect of particle updater.
   * The first element means emitter width.
   * The second element means emitter height.
   * @type { [T, T] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */    
  [ParticleUpdater.RANDOM]: [T, T];

  /**
   * Curve effect of particle updater.
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
   * Initial range, within which the initial value are randomly generated.
   * @type { [T, T] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  range: [TYPE, TYPE];

  /**
   * Particle property updater.
   * @type { type: UPDATER; config: ParticlePropertyUpdaterConfigs<TYPE>[UPDATER] }
   * @default  {type:UPDATER.NONE;config:ParticlePropertyUpdaterConfigs<UPDATER.NONE>[UPDATER.NONE]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  updater?: {
    type: UPDATER;
    config: ParticlePropertyUpdaterConfigs<TYPE>[UPDATER];
  };
}

/**
 * Defines the particle color property updater configs.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface ParticleColorPropertyUpdaterConfigs {
  /**
   * No effect of particle color property updater.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */    
  [ParticleUpdater.NONE]: void;

  /**
   * Random effect of particle color property updater.
   * @type { object }
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
   * Curve effect of particle color property updater.
   * 
   * @type { Array<ParticlePropertyAnimation<ResourceColor>> }
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
   * Initial color range, within which the initial color is randomly generated.
   * @type { [ResourceColor, ResourceColor] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */  
  range: [ResourceColor, ResourceColor];

  /**
   * Particle color property updater.
   * @type { ?{type: UPDATER;config: ParticleColorPropertyUpdaterConfigs[UPDATER];} }
   * @default {type:UPDATER.NONE;config:ParticleColorPropertyUpdaterConfigs[UPDATER.NONE]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */    
  updater?: {
    type: UPDATER;
    config: ParticleColorPropertyUpdaterConfigs[UPDATER];
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
   * Start position of the particle animation. 
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  from: T;

  /**
   * End position of the particle animation.
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  to: T;

  /**
   * Start millis of the particle animation.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  startMillis: number;

  /**
   * End millis of the particle animation. 
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  endMillis: number;

  /**
   * Curve of the particle animation.
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
   * @param { Array<ParticleOptions<PARTICLE,COLOR_UPDATER,OPACITY_UPDATER,SCALE_UPDATER,ACC_SPEED_UPDATER,ACC_ANGLE_UPDATER,SPIN_UPDATER>> } 
   * particles - list of ParticleOptions.
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
 * Enumerates the particle types.
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum ParticleType {
  /**
   * Point-like particle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  POINT = 'point',

  /**
   * Image-like particle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  IMAGE = 'image',
}

/**
 * Enumerates the emitter shapes of a particle.
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum ParticleEmitterShape {
  /**
   * Rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  RECTANGLE = 'rectangle',

  /**
   * Circle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  CIRCLE = 'circle',

  /**
   * Ellipse.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  ELLIPSE = 'ellipse',
}

/**
 * Enumerates the updater types of a particle.
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum ParticleUpdater {
  /**
   * No updater is used.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */  
  NONE = 'none',

  /**
   * Random updater.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  RANDOM = 'random',

  /**
   * Curve updater.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  CURVE = 'curve',
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
