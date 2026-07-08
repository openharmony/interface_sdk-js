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

import { LengthMetrics, SizeT, PositionT, Vector2T } from '../../arkui/Graphics';
import { VP, ResourceStr, Dimension, ResourceColor } from "./units";
import { ImageFit, Curve } from "./enums";
import { ICurve, CommonMethod } from './common';
import { ComponentBuilder } from "./../stateManagement/runtime";
import { AttributeModifier, CommonMethod } from "./common";
import { CustomBuilder, CustomBuilderT } from './builder';
/**
 * 粒子元组，表示定义一些动画参数的类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ParticleTuple<T1, T2> = [
    T1,
    T2
];
/**
 * 粒子速度配置。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface VelocityOptions {
    /**
     * 表示速度大小。
     * 
     * 默认值：{range:[0.0,0.0]}    
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    speed: ParticleTuple<double, double>;
    /**
     * 表示速度的方向（单位为角度）。以元素几何中心为坐标原点，水平方向为X轴，正数表示顺时针方向旋转角度。
     * 
     * 默认值：{range:[0.0,0.0]} 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    angle: ParticleTuple<double, double>;
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
 * @since 23 static
 */
export declare interface AccelerationOptions {
    /**
     * 表示加速度大小。
     * 
     * 默认值：{range:[0.0,0.0]}      
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    speed?: ParticlePropertyOptions;
    /**
     * 表示加速度方向（单位为角度）。
     * 
     * 默认值：{range:[0.0,0.0]} 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    angle?: ParticlePropertyOptions;
}
/**
 * 设置粒子参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ParticleOptions {
    /**
     * 粒子发射器配置。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    emitter: EmitterOptions;
    /**
     * 粒子颜色配置。
     * 
     * **说明**：
     * 
     * 默认值：{ range:[Color.White,Color.White] } 。图片粒子不支持设置颜色。
     *
     * @default {range:['#FFFFFF','#FFFFFF']}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color?: ParticleColorPropertyOptions;
    /**
     * 粒子透明度配置。
     * 
     * 默认值：{ range:[1.0,1.0] }
     *
     * @default {range:[1.0,1.0]}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    opacity?: ParticlePropertyOptions;
    /**
     * 粒子大小配置。
     * 
     * 默认值：{ range:[1.0,1.0] }
     *
     * @default {range:[1.0,1.0]}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scale?: ParticlePropertyOptions;
    /**
     * 粒子速度配置。
     * 
     * **说明**：
     * 
     * speed表示速度大小。angle表示速度的方向（单位为角度），以元素几何中心为坐标原点，水平方向为X轴，正数表示顺时针方向旋转角度。
     * 
     * 默认值：{ speed:[0.0,0.0],angle:[0.0,0.0] }
     *
     * @default {speed:[0,0];angle:[0,0]}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    velocity?: VelocityOptions;
    /**
     * 粒子加速度配置。 
     * 
     * **说明**：
     * 
     * speed表示加速度大小，angle表示加速度方向（单位为角度）。
     * 
     * 默认值：{ speed:{range:[0.0,0.0]},angle:{range:[0.0,0.0]} }
     *
     * @default {speed:{range:[0,0]};angle:{range:[0,0]}}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    acceleration?: AccelerationOptions;
    /**
     * 粒子自旋角度配置。 
     * 
     * 默认值：{range:[0.0,0.0]}
     * 
     * 方向：正数表示顺时针旋转，负数表示逆时针旋转。
     *
     * @default {range:[0,0]}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    spin?: ParticlePropertyOptions;
}
/**
 * 设置粒子半径。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface PointParticleParameters {
    /**
     * 粒子半径。
     * 
     * 默认值：0，小于0时取默认值0。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radius: VP;
}
/**
 * 设置图片选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ImageParticleParameters {
    /**
     * 图片路径，支持本地图片和网络图片，引用方式请参考[加载图片资源](docroot://ui/arkts-graphics-display.md#加载图片资源)。
     * 
     * 暂不支持svg图片类型。
     * 
     * src未发生变化时，会优先使用缓存的资源，无法动态切换资源。如需动态切换资源建议切换为不同的src。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    src: ResourceStr;
    /**
     * 图像尺寸。
     * 
     * 默认值：[0, 0]
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    size: ParticleTuple<Dimension, Dimension>;
    /**
     * 图片显示模式。
     *
     * @default ImageFit.Cover
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    objectFit?: ImageFit;
}
/**
 *
 * @unionmember { PointParticleParameters } 点状粒子配置。
 * @unionmember { ImageParticleParameters } 图片粒子配置。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ParticleConfigs = PointParticleParameters | ImageParticleParameters;
/**
 * 设置发射器属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface EmitterProperty {
    /**
     * 索引，取整，按初始化参数中发射器的数组索引指定对应的发射器。异常默认值为0。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    index: int;
    /**
     * 发射器发射速率，即每秒发射粒子的数量。
     * 
     * 未传入时保持其当前的发射速率， 传入值小于0时取默认值5。emitRate值超过5000时会极大影响性能，建议设置参数小于5000。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    emitRate?: int;
    /**
     * 发射器位置的数组，只支持number类型。
     * 
     * 未传入时保持其当前的发射器位置。需传入两个有效参数，若其中一个为异常值，则position不生效。
     * 
     * x、y的取值范围：(-∞, +∞)。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    position?: PositionT<double>;
    /**
     * 发射窗口的大小，只支持number类型。
     * 
     * 未传入时保持其当前发射窗口大小。需传入两个有效参数且都大于0，若其中一个为异常值，则size不生效。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    size?: SizeT<double>;
    /**
     * 环形发射器参数。需要对应index的发射器形状为环形才生效。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
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
 * @since 23 static
 */
export interface EmitterParticleOptions {
    /**
     * 表示粒子类型，可以选择图片或者是点。   
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type: ParticleType;
    /**
     * 表示对应类型的配置。
     * 
     * config类型和type值有关联：
     * 
     * 1. 如果type为ParticleType.POINT，则config类型为[PointParticleParameters]{@link PointParticleParameters} 。
     * 2. 如果type为ParticleType.IMAGE，则config类型为[ImageParticleParameters]{@link ImageParticleParameters} 。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    config: ParticleConfigs;
    /**
     * 表示发射的粒子总数，count取值>=-1,当count为-1表示粒子总数无限大。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    count: int;
    /**
     * 表示单个粒子的生命周期，默认值1000（即1000ms，1s），lifetime>=-1。当lifetime为-1表示粒子生命周期无限大。当lifetime<-1，取默认值。
     * 
     * **说明**：如果不需要动画一直播放，建议不要将生命周期设置为-1，可能对性能造成较大影响。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    lifetime?: int;
    /**
     * 表示粒子生命周期取值范围，设置lifetimeRange后粒子的生命周期为[lifetime-lifetimeRange, lifetime+lifetimeRange]中间的一个随机整数。lifetimeRange默认值为
     * 0，取值范围为0到正无穷。设置为负值时取默认值。 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    lifetimeRange?: int;
}
/**
 * 粒子发射器的配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface EmitterOptions {
    /**
     * 粒子配置。
     * 
     * -type表示粒子类型，可以选择图片或者是点。
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
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    particle: EmitterParticleOptions;
    /**
     * 发射器发射速率（即每秒发射粒子数）。 默认值：5，小于0时取默认值5。emitRate值超过5000时会极大影响性能，建议设置参数小于5000。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @default 5
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    emitRate?: int;
    /**
     * 发射器形状。
     * 
     * 默认值：ParticleEmitterShape.RECTANGLE
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @default ParticleEmitterShape.RECTANGLE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    shape?: ParticleEmitterShape;
    /**
     * 发射器位置（距离组件左上角的位置。第一个参数为x方向上的相对偏移，第二个参数为y轴方向相对偏移。） 
     * 
     * 默认值：`[0.0, 0.0]`
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @default [0,0]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    position?: ParticleTuple<Dimension, Dimension>;
    /**
     * 发射窗口的大小。第一个参数为发射器宽，第二个参数为发射器高。
     * 
     * 默认值：`['100%','100%']`(即发射窗口占满Particle组件)
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @default ['100%','100%']
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    size?: ParticleTuple<Dimension, Dimension>;
    /**
     * 环形发射器参数。需要发射器形状为环形（即shape参数为ParticleEmitterShape.ANNULUS）时才生效，且对于环形发射器，形状信息必须通过annulusRegion参数指定，position和size不生
     * 效。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @default {innerRadius:LengthMetrics.vp(0),outerRadius:LengthMetrics.vp(0)}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    annulusRegion?: ParticleAnnulusRegion;
}
/**
 * 设置粒子属性更新器配置。
 *
 * @unionmember { undefined } 无变化。
 * @unionmember { ParticleTuple<double, double> } 表示变化方式为匀速变化时，每秒的变化差值为设置区间随机生成的值。<br/>目标属性值为当前属性值叠加变化差值。如当前属性值为0.2，
 *     config取[0.1,1.0]:<br/>1、如果变化差值在区间[0.1,1.0]取随机值0.5，则目标属性值为0.2+0.5 = 0.7；<br/>2、变化差值也可以取负值。如当前属性值为0.2，config为
 *     [-3.0,2.0],如果变化差值在区间[-3.0,2.0]取随机值-2.0，则目标属性值为0.2-2.0 = -1.8。
 *     <br>**说明：**
 *     <br>config配置的是变化差值的取值范围，差值的最大最小值没有约束。但是如果当前属性值叠加差值大于属性最大值，目标属性值取属性最大值；如果当前属性值叠加差值小于属性最小值，目标属性值取属性最小值。T为number。
 *     <br>例如：opacity的取值范围[0.0,1.0]则当当前属性值叠加差值超过1.0，则取1.0。
 * @unionmember { Array<ParticlePropertyAnimation<double>> } 表示变化方式为曲线变化时，属性变化的配置。数组类型表示当前属性可以设置多段动画，如0ms-3000ms，3000ms-
 *     5000ms，5000ms-8000ms分别设置动画。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ParticlePropertyUpdaterConfigs = undefined | ParticleTuple<double, double> | Array<ParticlePropertyAnimation<double>>;
/**
 * 颜色属性变化配置。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ParticleUpdaterOptions {
    /**
     * 表示颜色属性变化类型。 
     * 
     * 默认值：type默认为ParticleUpdater.NONE。    **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type: ParticleUpdater;
    /**
     * 属性变化配置。属性变化类型type有三类：
     * 
     * 1、当type为ParticleUpdater.NONE，表示无变化，则config类型为
     * [ParticlePropertyUpdaterConfigs]{@link ParticlePropertyUpdaterConfigs}[ParticleUpdater.NONE]。
     * 
     * 2、当type为ParticleUpdater.RANDOM，表示变化类型为随机变化，则config类型为
     * [ParticlePropertyUpdaterConfigs]{@link ParticlePropertyUpdaterConfigs}[ParticleUpdater.RANDOM]。
     * 
     * 3、当type为ParticleUpdater.CURVE，表示变化类型为曲线变化，则config类型为
     * [ParticlePropertyUpdaterConfigs]{@link ParticlePropertyUpdaterConfigs}[ParticleUpdater.CURVE]。 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    config: ParticlePropertyUpdaterConfigs;
}
/**
 * 颜色变化方式为均匀变化的时候，在区间内随机生成一个差值。r、g、b、a四个颜色通道每秒分别使用差值叠加当前颜色值，生成目标颜色值。实现颜色随机变化的效果。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ParticleColorOptions {
    /**
     * r颜色通道的差值。   **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    r: ParticleTuple<int, int>;
    /**
     * g颜色通道的差值。   **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    g: ParticleTuple<int, int>;
    /**
     * b颜色通道的差值。   **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    b: ParticleTuple<int, int>;
    /**
     * a颜色通道的差值。   **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    a: ParticleTuple<int, int>;
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
 * @since 23 static
 */
export interface ParticleColorUpdaterOptions {
    /**
     * 表示颜色属性变化类型。
     * 
     * 默认值：type默认为 ParticleUpdater.NONE。     
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type: ParticleUpdater;
    /**
     * 颜色属性变化类型type有三类：
     * 
     * 1、当type为ParticleUpdater.NONE，表示无变化，则config类型为
     * [ParticleColorPropertyUpdaterConfigs]{@link ParticleColorPropertyUpdaterConfigs}[ParticleUpdater.NONE]。 
     * 
     * 2、type为ParticleUpdater.RANDOM，表示随机变化，则config类型为
     * [ParticleColorPropertyUpdaterConfigs]{@link ParticleColorPropertyUpdaterConfigs}[ParticleUpdater.RANDOM]。 
     * 
     * 3、type为ParticleUpdater.CURVE,表示按动画曲线变化，则config类型为
     * [ParticleColorPropertyUpdaterConfigs]{@link ParticleColorPropertyUpdaterConfigs}[ParticleUpdater.CURVE]。 
     * 
     * **说明**：
     * 
     * 当type为ParticleUpdater.RANDOM或者ParticleUpdater.CURVE时，updater中颜色配置的优先级高于range中的颜色配置。在updater配置的动画时间周期内，以updater中的颜
     * 色配置来变化；在updater配置的动画时间周期外，以range中的颜色配置来变化。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    config: ParticleColorPropertyUpdaterConfigs;
}
/**
 * 设置粒子属性选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ParticlePropertyOptions {
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
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    range: ParticleTuple<double, double>;
    /**
     * 属性变化配置。属性变化类型type有三类：
     * 
     * 1、当type为ParticleUpdater.NONE，表示无变化，则config类型为
     * [ParticlePropertyUpdaterConfigs]{@link ParticlePropertyUpdaterConfigs}[ParticleUpdater.NONE]。
     * 
     * 2、当type为ParticleUpdater.RANDOM，表示变化类型为随机变化，则config类型为
     * [ParticlePropertyUpdaterConfigs]{@link ParticlePropertyUpdaterConfigs}[ParticleUpdater.RANDOM]。
     * 
     * 3、当type为ParticleUpdater.CURVE，表示变化类型为曲线变化，则config类型为
     * [ParticlePropertyUpdaterConfigs]{@link ParticlePropertyUpdaterConfigs}[ParticleUpdater.CURVE] 
     * 
     * 默认值：type默认为ParticleUpdater.NONE。
     *
     * @default  {type:UPDATER.NONE;config:undefined}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    updater?: ParticleUpdaterOptions;
}
/**
 * 设置粒子颜色属性更新器的配置。
 *
 * @unionmember { undefined } 无变化。
 * @unionmember { ParticleColorOptions } 表示变化方式为均匀变化的时候，在区间内随机生成一个差值。r、g、b、a四个颜色通道每秒分别使用差值叠加当前颜色值，生成目标颜色值。实现颜色随机变化的效果。
 * @unionmember { Array<ParticlePropertyAnimation<ResourceColor>> } 表示变化方式为曲线变化时，颜色变化的配置。数组类型表示当前属性可以设置多段动画，如0ms-3000ms，
 *     3000ms-5000ms，5000ms-8000ms分别设置动画。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ParticleColorPropertyUpdaterConfigs = undefined | ParticleColorOptions | Array<ParticlePropertyAnimation<ResourceColor>>;
/**
 * 设置粒子颜色属性更新器配置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ParticleColorPropertyOptions {
    /**
     * 粒子初始颜色区间，粒子发射器生成粒子的初始颜色在range区间随机取值。
     * 
     * 默认值：range:[Color.White,Color.White] 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    range: ParticleTuple<ResourceColor, ResourceColor>;
    /**
     * 粒子初始颜色随机值分布，允许用户选择颜色随机值生成的分布类型，支持均匀分布或正态（高斯）分布。
     * 
     * 默认值：DistributionType.UNIFORM
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @default DistributionType.UNIFORM
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    distributionType?: DistributionType;
    /**
     * 颜色属性变化配置。颜色属性变化类型type有三类：
     * 
     * 1、当type为ParticleUpdater.NONE，表示无变化，则config类型为
     * [ParticleColorPropertyUpdaterConfigs]{@link ParticleColorPropertyUpdaterConfigs}[ParticleUpdater.NONE]。 
     * 
     * 2、type为ParticleUpdater.RANDOM，表示随机变化，则config类型为
     * [ParticleColorPropertyUpdaterConfigs]{@link ParticleColorPropertyUpdaterConfigs}[ParticleUpdater.RANDOM]。 
     * 
     * 3、type为ParticleUpdater.CURVE,表示按动画曲线变化，则config类型为
     * [ParticleColorPropertyUpdaterConfigs]{@link ParticleColorPropertyUpdaterConfigs}[ParticleUpdater.CURVE]。
     * 
     * 默认值：type默认为 ParticleUpdater.NONE。 
     * 
     * **说明**：
     * 
     * 当type为ParticleUpdater.RANDOM或者ParticleUpdater.CURVE时，updater中颜色配置的优先级高于range中的颜色配置。在updater配置的动画时间周期内，以updater中的颜
     * 色配置来变化；在updater配置的动画时间周期外，以range中的颜色配置来变化。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @default {type:UPDATER.NONE;config:undefined}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    updater?: ParticleColorUpdaterOptions;
}
/**
 * 设置粒子属性生命周期。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ParticlePropertyAnimation<T> {
    /**
     * 属性起始值。非法输入取对应属性的默认值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    from: T;
    /**
     * 属性目标值。非法输入取对应属性的默认值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    to: T;
    /**
     * 动画开始时间。
     * 
     * 单位：毫秒。
     * 
     * 取值范围：[0, +∞)。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    startMillis: int;
    /**
     * 动画结束时间。
     * 
     * 单位：毫秒。
     * 
     * 取值范围：[0, +∞)。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    endMillis: int;
    /**
     * 设置动画曲线。
     * 
     * 默认值：Curve.Linear
     *
     * @default Curve.Linear
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
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
 * @since 23 static
 */
export interface Particles {
    /**
     * 粒子动画的集合。每一个的粒子动画（[ParticleOptions]{@link ParticleOptions}）包含粒子发射，同时可配置粒子的颜色、透明度、大小、速度、加速度与旋转速度，详见
     * [ParticleOptions]{@link ParticleOptions}属性说明。 
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    particles: Array<ParticleOptions>;
}
/**
 * 粒子类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ParticleType {
    /**
     * 点状粒子
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    POINT = 'point',
    /**
     * 图片粒子
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    IMAGE = 'image'
}
/**
 * 粒子发射器形状。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ParticleEmitterShape {
    /**
     * 粒子发射器为矩形。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    RECTANGLE = 'rectangle',
    /**
     * 粒子发射器为圆形。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CIRCLE = 'circle',
    /**
     * 粒子发射器为椭圆形。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ELLIPSE = 'ellipse',
    /**
     * 粒子发射器为环形。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 20开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ANNULUS = 'annulus'
}
/**
 * Enumerates the color distribution types of a particle.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DistributionType {
    /**
     * Uniform distribution.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    UNIFORM = 0,
    /**
     * Gaussian distribution.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    GAUSSIAN = 1
}
/**
 * 粒子变化类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ParticleUpdater {
    /**
     * 无变化
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    NONE = 'none',
    /**
     * 随机变化
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    RANDOM = 'random',
    /**
     * 动画曲线变化
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CURVE = 'curve'
}

/**
 * 除支持[通用属性]{@link common}外还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @noninterop
 * @since 23 static
 */
export declare interface ParticleAttribute extends CommonMethod {
    /**
     * 设置扰动场。
     *
     * @param { Array<DisturbanceFieldOptions> | undefined } fields - 扰动场数组。
     * @returns { ParticleAttribute } Returns the particle attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default disturbanceFields(fields: Array<DisturbanceFieldOptions> | undefined): this;
    /**
     * 支持发射器位置动态更新。
     *
     * @param { Array<EmitterProperty> | undefined } value - 需要更新的emitter参数数组
     * @returns { ParticleAttribute } Returns the particle attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default emitter(value: Array<EmitterProperty> | undefined): this;

    /**
     * 设置粒子波动场。波动场会对影响范围内的粒子施加按波形变化的力，产生类似波纹扩散的效果。
     *
     * @param { Array<RippleFieldOptions> | undefined } fields - 粒子波动场数组。通过数组形式可以设置多个粒子波动场。当设置为undefined时，表示无波动场。
     * @returns { this } Returns this.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    default rippleFields(fields: Array<RippleFieldOptions> | undefined): this;

    /**
     * 设置粒子速度场。速度场会对影响范围内的粒子施加一个力，使粒子在原有速度的基础上叠加速度场指定的速度。
     *
     * @param { Array<VelocityFieldOptions> | undefined } fields - 粒子速度场数组。通过数组形式可设置多个粒子速度场。设置为undefined时表示无速度场。
     * @returns { this } Returns this.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    default velocityFields(fields: Array<VelocityFieldOptions> | undefined): this;

    /**
     * Add particle attribute modifier.
     *
     * @param { AttributeModifier<ParticleAttribute> | AttributeModifier<CommonMethod> | undefined } modifier -
     *     The AttributeModifier.
     * @returns { ParticleAttribute } Returns the particle attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<ParticleAttribute> | AttributeModifier<CommonMethod> | undefined): this;
    /**
     * Set Particle options.
     *
     * @param { Particles } particles - The options to create an Particle.
     * @returns { ParticleAttribute } Returns instance of  ParticleAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setParticleOptions(particles: Particles): this;
}
/**
 * 设置粒子扰动场参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DisturbanceFieldOptions {
    /**
     * 场强，表示场从中心向外的排斥力的强度，默认值0。正数表示排斥力方向朝外，负数表示吸引力，方向朝内。
     * 
     * 取值范围：(-∞, +∞)。
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    strength?: double;
    /**
     * 场的形状。
     * 
     * 默认为DisturbanceFieldShape.RECT。
     *
     * @default DisturbanceFieldShape.RECT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    shape?: DisturbanceFieldShape;
    /**
     * 场的大小。
     * 
     * 默认值 {width:0，height:0}。
     * 
     * width和height的取值范围：[0, +∞)。
     *
     * @default {width:0,height:0}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    size?: SizeT<double>;
    /**
     * 场的位置。
     * 
     * 默认值{x:0，y:0}。
     * 
     * x、y的取值范围：(-∞, +∞)。
     *
     * @default {x:0,y:0}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    position?: PositionT<double>;
    /**
     * 羽化值，表示场从中心点到场边缘的衰减程度，取值范围0到100的整数，如果0则表示场是一个刚体，所有范围内的粒子都被排斥在外。羽化值越大场的缓和程度越大，场范围内出现越多靠近中心点的粒子。
     * 
     * 默认值为0。
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    feather?: int;
    /**
     * 噪声尺度，用于控制噪声图案的整体大小，取值大于等于0。
     * 
     * 默认值1。
     *
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    noiseScale?: double;
    /**
     * 噪声频率，频率越大噪声越细腻，取值大于等于0。
     * 
     * 默认值1。
     *
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    noiseFrequency?: double;
    /**
     * 噪声振幅，噪声的波动的范围，振幅越大噪音之间差异越大。取值大于等于0。
     * 
     * 默认值1。
     *
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    noiseAmplitude?: double;
}
/**
 * 粒子形状。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DisturbanceFieldShape {
    /**
     * 长方形。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    RECT,
    /**
     * 圆。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CIRCLE,
    /**
     * 椭圆。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    ELLIPSE
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
 * @since 23 static
 */
export declare interface ParticleAnnulusRegion {
    /**
     * The coordinates of the center of the annulus
     *
     * @default {x:LengthMetrics.percent(0.5),y:LengthMetrics.percent(0.5)}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    center?: PositionT<LengthMetrics>;
    /**
     * The outer radius of the annulus
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    outerRadius: LengthMetrics;
    /**
     * The inner radius of the annulus
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    innerRadius: LengthMetrics;
    /**
     * The start angle of the annulus, in degree
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    startAngle?: double;
    /**
     * The end angle of the annulus, in degree
     *
     * @default 360
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    endAngle?: double;
}

/**
 * 用于设置粒子场的区域信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare interface FieldRegion {
  /**
   * The shape of the field
   *
   * @default DisturbanceFieldShape.RECT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  shape?: DisturbanceFieldShape;
  /**
   * The coordinates of the center position of the field. The top-left corner of the component is the origin of the
   * coordinate system. The coordinate unit is vp.
   *
   * @default {x:0,y:0}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  position?: PositionT<double>;
  /**
   * The size of the field. The unit of value is vp.
   *
   * @default {width:0,height:0}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  size?: SizeT<double>;
}

/**
 * 用于描述粒子波动场信息的参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare interface RippleFieldOptions {
  /**
   * The amplitude of the ripple field. The greater the amplitude, the stronger the force of the ripple field.
   * Range of values:[0, +∞)
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  amplitude?: double;
  /**
   * Wavelength, which is the distance over which a wave cycle changes. The larger
   * the wavelength, the slower the wave changes with distance, and the less pronounced the wave fluctiations.
   * Range of values:[0, +∞)
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  wavelength?: double;
  /**
   * Wave speed. The greater the wave speed, the faster the wave changes over time, and the more pronounced the wave
   * motion. Range of values:[0, +∞)
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  waveSpeed?: double;
  /**
   * The attenuation coefficient of the ripple field. The larger the attenuation coefficient, the faster the wave
   * attenuates over time. Range of values:[0,1]
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  attenuation?: double;
  /**
   * The central point where the ripple field generates force. The top-left corner of the component is the origin of
   * coordinates. The coordinate unit is vp.
   *
   * @default {x:0,y:0}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  center?: PositionT<double>;
  /**
   * The region influenced by the ripple field.
   *
   * @default {shape:DisturbanceFieldShape.RECT,position:{x:0,y:0},size:{width:0,height:0}}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  region?: FieldRegion;
}

/**
 * 用于描述粒子速度场信息的参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare interface VelocityFieldOptions {
  /**
   * The velocity values in each direction of the velocity field. Particles only acquire this velocity when within
   * the range of the velocity field; once they leave the range of the velocity field, they are no longer influenced
   * by it and do not gain this additional velocity.
   *
   * @default {x:0,y:0}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  velocity?: Vector2T<double>;
  /**
   * The region influenced by the velocity field.
   *
   * @default {shape:DisturbanceFieldShape.RECT,position:{x:0,y:0},size:{width:0,height:0}}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  region?: FieldRegion;
}

/**
 * Defines Particle Component
 *
 * @param { Particles } particles - particle constructor options [since 23]
 * @param { CustomBuilder } [content_] - container [since 23 - 23]
 * @returns { ParticleAttribute } [since 23]
 * @syscap SystemCapability.ArkUI.ArkUI.Full [since 23]
 * @stagemodelonly
 * @noninterop
 * @since 23 static
 */
@ComponentBuilder
export declare function Particle(
    particles: Particles, 
): ParticleAttribute;

/**
 * Defines Particle
 *
 * @param { CustomBuilderT<ParticleAttribute> } style_ - Particle attribute instance
 * @returns { ParticleAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function Particle(
  style_: CustomBuilderT<ParticleAttribute>,
): ParticleAttribute;