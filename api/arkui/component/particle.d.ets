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
 * @file
 * @kit ArkUI
 * @arkts 1.2
 */


import { SizeT as _SizeT, PositionT as _PositionT } from '../../arkui/Graphics';
import { VP, ResourceStr, Dimension, ResourceColor } from "./units";
import { ImageFit, Curve } from "./enums";
import { ICurve, CommonMethod, UICommonMethod, AttributeModifier } from "./common";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Defines a pair of given type for particle.
 *
 * @typedef { [T1, T2] } ParticleTuple
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type ParticleTuple<T1, T2> = [
    T1,
    T2
];
/**
 * Defines velocity options.
 *
 * @typedef VelocityOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface VelocityOptions {
    /**
     * Particle speed.
     * @type { ParticleTuple<number, number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    speed: ParticleTuple<number, number>;
    /**
     * Angle of particle's direction.
     * @type { ParticleTuple<number, number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    angle: ParticleTuple<number, number>;
}
/**
 * Defines acceleration options.
 *
 * @typedef AccelerationOptions<ACC_SPEED_UPDATER extends ParticleUpdater, ACC_ANGLE_UPDATER extends ParticleUpdater>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface AccelerationOptions<ACC_SPEED_UPDATER extends ParticleUpdater, ACC_ANGLE_UPDATER extends ParticleUpdater> {
    /**
     * Speed property options.
     * @type { ?ParticlePropertyOptions<number, ACC_SPEED_UPDATER> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    speed?: ParticlePropertyOptions<number, ACC_SPEED_UPDATER>;
    /**
     * Angle property options.
     * @type { ?ParticlePropertyOptions<number, ACC_ANGLE_UPDATER> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    angle?: ParticlePropertyOptions<number, ACC_ANGLE_UPDATER>;
}
/**
 * Defines the ParticleOptions Interface.
 * @interface ParticleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface ParticleOptions<PARTICLE extends ParticleType, COLOR_UPDATER extends ParticleUpdater, OPACITY_UPDATER extends ParticleUpdater, SCALE_UPDATER extends ParticleUpdater, ACC_SPEED_UPDATER extends ParticleUpdater, ACC_ANGLE_UPDATER extends ParticleUpdater, SPIN_UPDATER extends ParticleUpdater> {
    /**
     * Particle emitter.
     * @type { EmitterOptions<PARTICLE> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    emitter: EmitterOptions<PARTICLE>;
    /**
     * Particle color.
     * @type { ?ParticleColorPropertyOptions<COLOR_UPDATER> }
     * @default {range:['#FFFFFF','#FFFFFF']}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    color?: ParticleColorPropertyOptions<COLOR_UPDATER>;
    /**
     * Particle opacity.
     * @type { ?ParticlePropertyOptions<number, OPACITY_UPDATER> }
     * @default {range:[1.0,1.0]}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    opacity?: ParticlePropertyOptions<number, OPACITY_UPDATER>;
    /**
     * Particle scale.
     * @type { ?ParticlePropertyOptions<number, SCALE_UPDATER> }
     * @default {range:[1.0,1.0]}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    scale?: ParticlePropertyOptions<number, SCALE_UPDATER>;
    /**
     * Particle velocity.
     * @type { ?VelocityOptions }
     * @default {speed:[0,0];angle:[0,0]}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    velocity?: VelocityOptions;
    /**
     * Particle acceleration.
     * @type { ?AccelerationOptions<ACC_SPEED_UPDATER, ACC_ANGLE_UPDATER> }
     * @default {speed:{range:[0,0]};angle:{range:[0,0]}}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    acceleration?: AccelerationOptions<ACC_SPEED_UPDATER, ACC_ANGLE_UPDATER>;
    /**
     * Particle spin.
     * @type { ?ParticlePropertyOptions<number, SPIN_UPDATER> }
     * @default {range:[0,0]}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    spin?: ParticlePropertyOptions<number, SPIN_UPDATER>;
}
/**
 * Defines the parameters for a point-like particle.
 * @interface PointParticleParameters
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface PointParticleParameters {
    /**
     * Particle radius.
     * @type { VP }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    radius: VP;
}
/**
 * Defines the parameters for an image-like particle.
 * @interface ImageParticleParameters
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface ImageParticleParameters {
    /**
     * Particle image pixelMap.
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    src: ResourceStr;
    /**
     * Particle image size.
     * @type { ParticleTuple<Dimension, Dimension> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    size: ParticleTuple<Dimension, Dimension>;
    /**
     * Image fit.
     * @type { ?ImageFit }
     * @default ImageFit.Cover
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    objectFit?: ImageFit;
}
/**
 * Defines the particle configs.
 * @interface ParticleConfigs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface ParticleConfigs {
    /**
     * Point-like Particle.
     * @type { PointParticleParameters }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    point: PointParticleParameters;
    /**
     * Image-like Particle.
     * @type { ImageParticleParameters }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    image: ImageParticleParameters;
}
/**
 * Defines the emitter property.
 *
 * @interface EmitterProperty
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface EmitterProperty {
    /**
     * Emitter index.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    index: number;
    /**
     * Emitter emission rate.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    emitRate?: number;
    /**
     * Emitter emission rate. Only support number type.
     *
     * @type { ?PositionT<number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    position?: PositionT<number>;
    /**
     * Emitter emission window size. Only support number type.
     *
     * @type { ?SizeT<number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    size?: SizeT<number>;
}
/**
 * Defines parameters of particles used by emitters.
 *
 * @typedef EmitterParticleOptions<PARTICLE extends ParticleType>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface EmitterParticleOptions<PARTICLE extends ParticleType> {
    /**
     * Particle type.
     * @type { PARTICLE }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    type: PARTICLE;
    /**
     * Particle config.
     * @type { PointParticleParameters | ImageParticleParameters }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    config: PointParticleParameters | ImageParticleParameters;
    /**
     * Particle count.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    count: number;
    /**
     * Particle lifetime.
     * @type { ?number }
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    lifetime?: number;
    /**
     * Particle lifetimeRange,value range [0, ∞).
     * when lifetimeRange>lifetime,minimum lifetime is 0.
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    lifetimeRange?: number;
}
/**
 * Defines the emitter Options.
 * @interface EmitterOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface EmitterOptions<PARTICLE extends ParticleType> {
    /**
     * Set particle config.
     * @type { EmitterParticleOptions<PARTICLE> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    particle: EmitterParticleOptions<PARTICLE>;
    /**
     * Emitting rate, that is, the number of particles produced per second.
     * @type { ?number }
     * @default 5
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    emitRate?: number;
    /**
     * Shape of emitter.
     * @type { ?ParticleEmitterShape }
     * @default ParticleEmitterShape.RECTANGLE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    shape?: ParticleEmitterShape;
    /**
     * Position of emitter.
     * The first element means X-axis location.
     * The second element means the Y-axis location.
     * @type { ?ParticleTuple<Dimension, Dimension> }
     * @default [0,0]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    position?: ParticleTuple<Dimension, Dimension>;
    /**
     * Size of emitter.
     * The first element means emitter width.
     * The second element means emitter height.
     * @type { ?ParticleTuple<Dimension, Dimension> }
     * @default ['100%','100%']
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    size?: ParticleTuple<Dimension, Dimension>;
}
/**
 * Defines the particle property updater configs.
 * @interface ParticlePropertyUpdaterConfigs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface ParticlePropertyUpdaterConfigs<T> {
    /**
     * No effect of particle updater.
     *
     * @type { undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    none: undefined;
    /**
     * Random effect of particle updater.
     * @type { ParticleTuple<T, T> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    random: ParticleTuple<T, T>;
    /**
     * Curve effect of particle updater.
     * @type { Array<ParticlePropertyAnimation<T>> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    curve: Array<ParticlePropertyAnimation<T>>;
}
/**
 * Defines the particle updater options.
 *
 * @typedef ParticleUpdaterOptions<TYPE, UPDATER extends ParticleUpdater>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface ParticleUpdaterOptions<TYPE, UPDATER extends ParticleUpdater> {
    /**
     * Particle updater type.
     * @type { UPDATER }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    type: UPDATER;
    /**
     * Particle updater configuration.
     * @type { undefined | ParticleTuple<TYPE, TYPE> | Array<ParticlePropertyAnimation<TYPE>> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    config: undefined | ParticleTuple<TYPE, TYPE> | Array<ParticlePropertyAnimation<TYPE>>;
}
/**
 * Defines the particle color options.
 *
 * @typedef ParticleColorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface ParticleColorOptions {
    /**
     * Red component of particle color.
     * @type { ParticleTuple<number, number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    r: ParticleTuple<number, number>;
    /**
     * Green component of particle color.
     * @type { ParticleTuple<number, number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    g: ParticleTuple<number, number>;
    /**
     * Blue component of particle color.
     * @type { ParticleTuple<number, number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    b: ParticleTuple<number, number>;
    /**
     * Opacity component of particle color.
     * @type { ParticleTuple<number, number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    a: ParticleTuple<number, number>;
}
/**
 * Defines the particle color updater options.
 *
 * @typedef ParticleColorUpdaterOptions<UPDATER extends ParticleUpdater>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface ParticleColorUpdaterOptions<UPDATER extends ParticleUpdater> {
    /**
     * Color updater.
     * @type { UPDATER }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    type: UPDATER;
    /**
     * Color updater configuration.
     * @type { undefined | ParticleColorOptions | Array<ParticlePropertyAnimation<ResourceColor>> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    config: undefined | ParticleColorOptions | Array<ParticlePropertyAnimation<ResourceColor>>;
}
/**
 * Defines the particle property Options.
 * @interface ParticlePropertyOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface ParticlePropertyOptions<TYPE, UPDATER extends ParticleUpdater> {
    /**
     * Initial range, within which the initial value are randomly generated.
     * @type { ParticleTuple<TYPE, TYPE> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    range: ParticleTuple<TYPE, TYPE>;
    /**
     * Particle property updater.
     * @type { ?ParticleUpdaterOptions<TYPE, UPDATER> }
     * @default  {type:UPDATER.NONE;config:ParticlePropertyUpdaterConfigs<UPDATER.NONE>[UPDATER.NONE]}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    updater?: ParticleUpdaterOptions<TYPE, UPDATER>;
}
/**
 * Defines the particle color property updater configs.
 * @interface ParticleColorPropertyUpdaterConfigs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface ParticleColorPropertyUpdaterConfigs {
    /**
     * No effect of particle color property updater.
     *
     * @type { undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    none: undefined;
    /**
     * Random effect of particle color property updater.
     * @type { ParticleColorOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    random: ParticleColorOptions;
    /**
     * Curve effect of particle color property updater.
     *
     * @type { Array<ParticlePropertyAnimation<ResourceColor>> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    curve: Array<ParticlePropertyAnimation<ResourceColor>>;
}
/**
 * Defines the particle color property updater configs which can support generics.
 * @interface ParticleColorPropertyOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface ParticleColorPropertyOptions<UPDATER extends ParticleUpdater> {
    /**
     * Initial color range, within which the initial color is randomly generated.
     * @type { ParticleTuple<ResourceColor, ResourceColor> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    range: ParticleTuple<ResourceColor, ResourceColor>;
    /**
     * Distribution type of particle color.
     * @type { ?DistributionType }
     * @default DistributionType.UNIFORM
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    distributionType?: DistributionType;
    /**
     * Particle color property updater.
     * @type { ?ParticleColorUpdaterOptions<UPDATER> }
     * @default {type:UPDATER.NONE;config:ParticleColorPropertyUpdaterConfigs[UPDATER.NONE]}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    updater?: ParticleColorUpdaterOptions<UPDATER>;
}
/**
 * Defines the particle property lifecycle.
 * @interface ParticlePropertyAnimation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface ParticlePropertyAnimation<T> {
    /**
     * Start position of the particle animation.
     * @type { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    from: T;
    /**
     * End position of the particle animation.
     * @type { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    to: T;
    /**
     * Start millis of the particle animation.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    startMillis: number;
    /**
     * End millis of the particle animation.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    endMillis: number;
    /**
     * Curve of the particle animation.
     * @type { ?(Curve | ICurve) }
     * @default Curve.Linear
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    curve?: Curve | ICurve;
}
/**
 * Defines the particle array.
 *
 * @interface Particles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface Particles<PARTICLE extends ParticleType = ParticleType, COLOR_UPDATER extends ParticleUpdater = ParticleUpdater, OPACITY_UPDATER extends ParticleUpdater = ParticleUpdater, SCALE_UPDATER extends ParticleUpdater = ParticleUpdater, ACC_SPEED_UPDATER extends ParticleUpdater = ParticleUpdater, ACC_ANGLE_UPDATER extends ParticleUpdater = ParticleUpdater, SPIN_UPDATER extends ParticleUpdater = ParticleUpdater> {
    /**
     * Array of particles.
     * @type { Array<ParticleOptions<PARTICLE, COLOR_UPDATER, OPACITY_UPDATER, SCALE_UPDATER, ACC_SPEED_UPDATER, ACC_ANGLE_UPDATER, SPIN_UPDATER>> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    particles: Array<ParticleOptions<PARTICLE, COLOR_UPDATER, OPACITY_UPDATER, SCALE_UPDATER, ACC_SPEED_UPDATER, ACC_ANGLE_UPDATER, SPIN_UPDATER>>;
}
/**
 * Enumerates the particle types.
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum ParticleType {
    /**
     * Point-like particle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    POINT = 'point',
    /**
     * Image-like particle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    IMAGE = 'image'
}
/**
 * Enumerates the emitter shapes of a particle.
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum ParticleEmitterShape {
    /**
     * Rectangle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    RECTANGLE = 'rectangle',
    /**
     * Circle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    CIRCLE = 'circle',
    /**
     * Ellipse.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    ELLIPSE = 'ellipse'
}
/**
 * Enumerates the color distribution types of a particle.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum DistributionType {
    /**
     * Uniform distribution.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    UNIFORM = 0,
    /**
     * Gaussian distribution.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    GAUSSIAN = 1
}
/**
 * Enumerates the updater types of a particle.
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum ParticleUpdater {
    /**
     * No updater is used.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    NONE = 'none',
    /**
     * Random updater.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    RANDOM = 'random',
    /**
     * Curve updater.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    CURVE = 'curve'
}
/**
 * Defines the SizeT type.
 *
 * @typedef { _SizeT<T> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type SizeT<T> = _SizeT<T>;
/**
 * Defines the PositionT type.
 *
 * @typedef { _PositionT<T> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type PositionT<T> = _PositionT<T>;
export declare interface ParticleAttribute extends CommonMethod {
    /**
     * Particle disturbance Field.
     *
     * @param { Array<DisturbanceFieldOptions> } fields - particle disturbance Field params.
     * @returns { ParticleAttribute } Returns the particle attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    disturbanceFields(fields: Array<DisturbanceFieldOptions> | undefined): this;
    /**
     * Add particle animation component properties.
     *
     * @param { Array<EmitterProperty> } value - The emitter property.
     * @returns { ParticleAttribute } Returns the particle attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    emitter(value: Array<EmitterProperty> | undefined): this;
    attributeModifier(modifier: AttributeModifier<ParticleAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * Defines particle disturbance Field params.
 * @interface DisturbanceFieldOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface DisturbanceFieldOptions {
    /**
     * Strength of the repulsive force from the center outward,
     * with positive numbers indicating outward repulsion and negative numbers indicating
     * inward attraction.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    strength?: number;
    /**
     * Disturbance filed shape.
     *
     * @type { ?DisturbanceFieldShape }
     * @default DisturbanceFieldShape.RECT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    shape?: DisturbanceFieldShape;
    /**
     * Disturbance filed size width value width, height.
     *
     * @type { ?SizeT<number> }
     * @default {width:0,height:0}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    size?: SizeT<number>;
    /**
     * Disturbance filed position width value x, y.
     *
     * @type { ?PositionT<number> }
     * @default {x:0,y:0}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    position?: PositionT<number>;
    /**
     * Attenuation degree of the field from the center point to the field boundary.
     * ranging from 0 to 100 integers. If 0, it indicates that the field is a rigid body,
     * and all particles within the range will be excluded.
     * a larger feather value indicates a greater degree of relaxation in the field,
     * and more particles near the center point will appear in the field strength range. The default value is 0.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    feather?: number;
    /**
     * Scaling parameter is used to control the overall size of noise, with a value greater or equal 0.
     *
     * @type { ?number }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    noiseScale?: number;
    /**
    * Noise frequency with a value greater or equal 0.
    *
    * @type { ?number }
    * @default 1
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 20
    */
    noiseFrequency?: number;
    /**
     * NoiseAmplitude fluctuation range of noise,  value,
     *
     * @type { ?number }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    noiseAmplitude?: number;
}
/**
 * Defines particle disturbance shape.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum DisturbanceFieldShape {
    /**
     * Shape rect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    RECT,
    /**
    * Shape circle.
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 20
    */
    CIRCLE,
    /**
     * Shape eclipse.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    ELLIPSE
}
export declare interface UIParticleAttribute extends UICommonMethod {
    /**
     * Particle disturbance Field.
     *
     * @param { Array<DisturbanceFieldOptions> } fields - particle disturbance Field params.
     * @returns { ParticleAttribute } Returns the particle attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    disturbanceFields(fields: Array<DisturbanceFieldOptions> | undefined): this;
    /**
     * Add particle animation component properties.
     *
     * @param { Array<EmitterProperty> } value - The emitter property.
     * @returns { ParticleAttribute } Returns the particle attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    emitter(value: Array<EmitterProperty> | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<ParticleAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function Particle(
    particles: Particles, 
    @memo
    content_?: () => void,
): UIParticleAttribute