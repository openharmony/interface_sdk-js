'use static'
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

import { LengthMetrics, SizeT, PositionT } from '../../arkui/Graphics';
import { VP, ResourceStr, Dimension, ResourceColor } from "./units";
import { ImageFit, Curve } from "./enums";
import { ICurve, CommonMethod } from './common';
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
import { AttributeModifier, CommonMethod } from "./common";
/**
 * Defines a pair of given type for particle.
 *
 * @typedef { [T1, T2] } ParticleTuple
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
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
 * @since 22 static
 * @noninterop
 */
export declare interface VelocityOptions {
    /**
     * Particle speed.
     *
     * Anonymous Object Rectification.
     * @type { ParticleTuple<number, number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    speed: ParticleTuple<number, number>;
    /**
     * Angle of particle's direction.
     *
     * Anonymous Object Rectification.
     * @type { ParticleTuple<number, number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    angle: ParticleTuple<number, number>;
}
/**
 * Defines acceleration options.
 *
 * @interface AccelerationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
 */
export declare interface AccelerationOptions {
    /**
     * Speed property options.
     *
     * @type { ?ParticlePropertyOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    speed?: ParticlePropertyOptions;
    /**
     * Angle property options.
     *
     * @type { ?ParticlePropertyOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    angle?: ParticlePropertyOptions;
}
/**
 * Defines the ParticleOptions Interface.
 * @interface ParticleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
 */
export interface ParticleOptions {
    /**
     * Particle emitter.
     * @type { EmitterOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     * @noninterop
     */
    emitter: EmitterOptions;
    /**
     * Particle color.
     * @type { ?ParticleColorPropertyOptions }
     * @default {range:['#FFFFFF','#FFFFFF']}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     * @noninterop
     */
    color?: ParticleColorPropertyOptions;
    /**
     * Particle opacity.
     * @type { ?ParticlePropertyOptions }
     * @default {range:[1.0,1.0]}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     * @noninterop
     */
    opacity?: ParticlePropertyOptions;
    /**
     * Particle scale.
     * @type { ?ParticlePropertyOptions }
     * @default {range:[1.0,1.0]}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     * @noninterop
     */
    scale?: ParticlePropertyOptions;
    /**
     * Particle velocity.
     *
     * @type { ?VelocityOptions }
     * @default {speed:[0,0];angle:[0,0]}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     * @noninterop
     */
    velocity?: VelocityOptions;
    /**
     * Particle acceleration.
     *
     * @type { ?AccelerationOptions }
     * @default {speed:{range:[0,0]};angle:{range:[0,0]}}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     * @noninterop
     */
    acceleration?: AccelerationOptions;
    /**
     * Particle spin.
     * @type { ?ParticlePropertyOptions }
     * @default {range:[0,0]}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     * @noninterop
     */
    spin?: ParticlePropertyOptions;
}
/**
 * Defines the parameters for a point-like particle.
 * @interface PointParticleParameters
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
 */
export interface PointParticleParameters {
    /**
     * Particle radius.
     * @type { VP }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     * @noninterop
     */
    radius: VP;
}
/**
 * Defines the parameters for an image-like particle.
 * @interface ImageParticleParameters
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
 */
export interface ImageParticleParameters {
    /**
     * Particle image pixelMap.
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     * @noninterop
     */
    src: ResourceStr;
    /**
     * Particle image size.
     *
     * Anonymous Object Rectification.
     * @type { ParticleTuple<Dimension, Dimension> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     * @noninterop
     */
    size: ParticleTuple<Dimension, Dimension>;
    /**
     * Image fit.
     * @type { ?ImageFit }
     * @default ImageFit.Cover
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     * @noninterop
     */
    objectFit?: ImageFit;
}
/**
 * Defines the particle configs.
 * @typedef {PointParticleParameters | ImageParticleParameters} ParticleConfigs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
 */
export type ParticleConfigs = PointParticleParameters | ImageParticleParameters;
/**
 * Defines the emitter property.
 *
 * @interface EmitterProperty
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
 */
export interface EmitterProperty {
    /**
     * Emitter index.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    index: number;
    /**
     * Emitter emission rate.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    emitRate?: number;
    /**
     * Emitter emission rate. Only support number type.
     *
     * @type { ?PositionT<number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    position?: PositionT<number>;
    /**
     * Emitter emission window size. Only support number type.
     *
     * @type { ?SizeT<number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    size?: SizeT<number>;
    /**
     * the description of the annulus region. This parameter is valid only for emitter whose shape is annulus.
     *
     * @type { ?ParticleAnnulusRegion }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    annulusRegion?: ParticleAnnulusRegion;
}
/**
 * Defines parameters of particles used by emitters.
 *
 * @interface EmitterParticleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
 */
export interface EmitterParticleOptions {
    /**
     * Particle type.
     *
     * @type { ParticleType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     * @noninterop
     */
    type: ParticleType;
    /**
     * Particle config.
     *
     * @type { ParticleConfigs }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     * @noninterop
     */
    config: ParticleConfigs;
    /**
     * Particle count.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     * @noninterop
     */
    count: number;
    /**
     * Particle lifetime.
     *
     * @type { ?number }
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     * @noninterop
     */
    lifetime?: number;
    /**
     * Particle lifetimeRange,value range [0, ∞).
     * when lifetimeRange>lifetime,minimum lifetime is 0.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     * @noninterop
     */
    lifetimeRange?: number;
}
/**
 * Defines the emitter Options.
 * @interface EmitterOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
 */
export interface EmitterOptions {
    /**
     * Set particle config.
     *
     * @type { EmitterParticleOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    particle: EmitterParticleOptions;
    /**
     * Emitting rate, that is, the number of particles produced per second.
     * @type { ?number }
     * @default 5
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    emitRate?: number;
    /**
     * Shape of emitter.
     * @type { ?ParticleEmitterShape }
     * @default ParticleEmitterShape.RECTANGLE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    shape?: ParticleEmitterShape;
    /**
     * Position of emitter.
     * The first element means X-axis location.
     * The second element means the Y-axis location.
     *
     * @type { ?ParticleTuple<Dimension, Dimension> }
     * @default [0,0]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    position?: ParticleTuple<Dimension, Dimension>;
    /**
     * Size of emitter.
     * The first element means emitter width.
     * The second element means emitter height.
     *
     * @type { ?ParticleTuple<Dimension, Dimension> }
     * @default ['100%','100%']
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    size?: ParticleTuple<Dimension, Dimension>;
    /**
     * the description of the annulus region. This parameter is valid only for emitter whose shape is annulus.
     *
     * @type { ?ParticleAnnulusRegion }
     * @default {innerRadius:LengthMetrics.vp(0),outerRadius:LengthMetrics.vp(0)}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    annulusRegion?: ParticleAnnulusRegion;
}
/**
 * Defines the particle property updater configs.
 * @typedef { undefined | ParticleTuple<number, number> |  Array<ParticlePropertyAnimation<number>> } ParticlePropertyUpdaterConfigs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
 */
export type ParticlePropertyUpdaterConfigs = undefined | ParticleTuple<number, number> | Array<ParticlePropertyAnimation<number>>;
/**
 * Defines the particle updater options.
 *
 * @typedef ParticleUpdaterOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
 */
export interface ParticleUpdaterOptions {
    /**
     * Particle updater type.
     *
     * @type { ParticleUpdater }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     * @noninterop
     */
    type: ParticleUpdater;
    /**
     * Particle updater configuration.
     *
     * @type { ParticlePropertyUpdaterConfigs }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     * @noninterop
     */
    config: ParticlePropertyUpdaterConfigs;
}
/**
 * Defines the particle color options.
 *
 * @typedef ParticleColorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
 */
export interface ParticleColorOptions {
    /**
     * Red component of particle color.
     *
     * Anonymous Object Rectification.
     * @type { ParticleTuple<number, number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    r: ParticleTuple<number, number>;
    /**
     * Green component of particle color.
     *
     * Anonymous Object Rectification.
     * @type { ParticleTuple<number, number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    g: ParticleTuple<number, number>;
    /**
     * Blue component of particle color.
     *
     * Anonymous Object Rectification.
     * @type { ParticleTuple<number, number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    b: ParticleTuple<number, number>;
    /**
     * Opacity component of particle color.
     *
     * Anonymous Object Rectification.
     * @type { ParticleTuple<number, number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    a: ParticleTuple<number, number>;
}
/**
 * Defines the particle color updater options.
 *
 * @interface ParticleColorUpdaterOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
 */
export interface ParticleColorUpdaterOptions {
    /**
     * Color updater.
     *
     * @type { ParticleUpdater }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    type: ParticleUpdater;
    /**
     * Color updater configuration.
     *
     * @type { ParticleColorPropertyUpdaterConfigs }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    config: ParticleColorPropertyUpdaterConfigs;
}
/**
 * Defines the particle property Options.
 * @interface ParticlePropertyOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
 */
export interface ParticlePropertyOptions {
    /**
     * Initial range, within which the initial value are randomly generated.
     *
     * @type { ParticleTuple<number, number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    range: ParticleTuple<number, number>;
    /**
     * Particle property updater.
     *
     * @type { ?ParticleUpdaterOptions }
     * @default  {type:UPDATER.NONE;config:undefined}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     * @noninterop
     */
    updater?: ParticleUpdaterOptions;
}
/**
 * Defines the particle color property updater configs.
 * @typedef {undefined | ParticleColorOptions | Array<ParticlePropertyAnimation<ResourceColor>>} ParticleColorPropertyUpdaterConfigs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
 */
export type ParticleColorPropertyUpdaterConfigs = undefined | ParticleColorOptions | Array<ParticlePropertyAnimation<ResourceColor>>;
/**
 * Defines the particle color property updater.
 * @interface ParticleColorPropertyOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
 */
export interface ParticleColorPropertyOptions {
    /**
     * Initial color range, within which the initial color is randomly generated.
     *
     * @type { ParticleTuple<ResourceColor, ResourceColor> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    range: ParticleTuple<ResourceColor, ResourceColor>;
    /**
     * Distribution type of particle color.
     * @type { ?DistributionType }
     * @default DistributionType.UNIFORM
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    distributionType?: DistributionType;
    /**
     * Particle color property updater.
     *
     * @type { ?ParticleColorUpdaterOptions }
     * @default {type:UPDATER.NONE;config:undefined}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     * @noninterop
     */
    updater?: ParticleColorUpdaterOptions;
}
/**
 * Defines the particle property lifecycle.
 * @interface ParticlePropertyAnimation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
 */
export interface ParticlePropertyAnimation<T> {
    /**
     * Start position of the particle animation.
     * @type { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    from: T;
    /**
     * End position of the particle animation.
     * @type { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    to: T;
    /**
     * Start millis of the particle animation.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    startMillis: number;
    /**
     * End millis of the particle animation.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    endMillis: number;
    /**
     * Curve of the particle animation.
     * @type { ?(Curve | ICurve) }
     * @default Curve.Linear
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    curve?: Curve | ICurve;
}
/**
 * Defines the Particles interface.
 *
 * @interface Particles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
 */
export interface Particles {
    /**
     * Array of particles.
     *
     * @type { Array<ParticleOptions> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    particles: Array<ParticleOptions>;
}
/**
 * Enumerates the particle types.
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
 */
export declare enum ParticleType {
    /**
     * Point-like particle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    POINT = 'point',
    /**
     * Image-like particle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    IMAGE = 'image'
}
/**
 * Enumerates the emitter shapes of a particle.
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
 */
export declare enum ParticleEmitterShape {
    /**
     * Rectangle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    RECTANGLE = 'rectangle',
    /**
     * Circle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    CIRCLE = 'circle',
    /**
     * Ellipse.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    ELLIPSE = 'ellipse',
    /**
     * Annulus.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    ANNULUS = 'annulus'
}
/**
 * Enumerates the color distribution types of a particle.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
 */
export declare enum DistributionType {
    /**
     * Uniform distribution.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    UNIFORM = 0,
    /**
     * Gaussian distribution.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    GAUSSIAN = 1
}
/**
 * Enumerates the updater types of a particle.
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
 */
export declare enum ParticleUpdater {
    /**
     * No updater is used.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    NONE = 'none',
    /**
     * Random updater.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    RANDOM = 'random',
    /**
     * Curve updater.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    CURVE = 'curve'
}
export declare interface ParticleAttribute extends CommonMethod {
    /**
     * Particle disturbance Field.
     *
     * @param { Array<DisturbanceFieldOptions> | undefined } fields - particle disturbance Field params.
     * @returns { ParticleAttribute } Returns the particle attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     * @noninterop
     */
    default disturbanceFields(fields: Array<DisturbanceFieldOptions> | undefined): this;
    /**
     * Add particle animation component properties.
     *
     * @param { Array<EmitterProperty> | undefined } value - The emitter property.
     * @returns { ParticleAttribute } Returns the particle attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     * @noninterop
     */
    default emitter(value: Array<EmitterProperty> | undefined): this;

    /**
     * Add particle attribute modifier.
     *
     * @param { AttributeModifier<ParticleAttribute> | AttributeModifier<CommonMethod> | undefined } modifier -
     *  The AttributeModifier.
     * @returns { ParticleAttribute } Returns the particle attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     * @noninterop
     */
    default attributeModifier(modifier: AttributeModifier<ParticleAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * Defines particle disturbance Field params.
 * @interface DisturbanceFieldOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
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
     * @since 22 static
     */
    strength?: number;
    /**
     * Disturbance filed shape.
     *
     * @type { ?DisturbanceFieldShape }
     * @default DisturbanceFieldShape.RECT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    shape?: DisturbanceFieldShape;
    /**
     * Disturbance filed size width value width, height.
     *
     * @type { ?SizeT<number> }
     * @default {width:0,height:0}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    size?: SizeT<number>;
    /**
     * Disturbance filed position width value x, y.
     *
     * @type { ?PositionT<number> }
     * @default {x:0,y:0}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
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
     * @since 22 static
     */
    feather?: number;
    /**
     * Scaling parameter is used to control the overall size of noise, with a value greater or equal 0.
     *
     * @type { ?number }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    noiseScale?: number;
    /**
    * Noise frequency with a value greater or equal 0.
    *
    * @type { ?number }
    * @default 1
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 22 static
    */
    noiseFrequency?: number;
    /**
     * NoiseAmplitude fluctuation range of noise,  value,
     *
     * @type { ?number }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    noiseAmplitude?: number;
}
/**
 * Defines particle disturbance shape.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
 */
export declare enum DisturbanceFieldShape {
    /**
     * Shape rect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    RECT,
    /**
    * Shape circle.
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 22 static
    */
    CIRCLE,
    /**
     * Shape eclipse.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    ELLIPSE
}
/**
 * Defines particle annuslus region params.
 * @interface ParticleAnnulusRegion
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
 */
export declare interface ParticleAnnulusRegion {
    /**
     * The coordinates of the center of the annulus
     *
     * @type { ?PositionT<LengthMetrics> }
     * @default {x:LengthMetrics.percent(0.5),y:LengthMetrics.percent(0.5)}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    center?: PositionT<LengthMetrics>;
    /**
     * The outer radius of the annulus
     *
     * @type { LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    outerRadius: LengthMetrics;
    /**
     * The inner radius of the annulus
     *
     * @type { LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    innerRadius: LengthMetrics;
    /**
     * The start angle of the annulus, in degree
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    startAngle?: number;
    /**
     * The end angle of the annulus, in degree
     *
     * @type { ?number }
     * @default 360
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    endAngle?: number;
}


/**
 * Defines Particle Component
 *
 * @param { Particles } particles - particle constructor options
 * @param { function } [content_] - container
 * @returns { ParticleAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
 * @noninterop
 */
@memo
@ComponentBuilder
export declare function Particle(
    particles: Particles, 
    @memo
    content_?: () => void,
): ParticleAttribute
