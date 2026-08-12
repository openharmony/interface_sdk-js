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
 * @file Defines 3D boids swarm simulation related interfaces
 * @kit ArkGraphics3D
 */

import { Scene } from './Scene';
import { Node } from './SceneNodes';
import { Vec3, Quaternion } from './SceneTypes';

/**
 * 群组模拟参数，用于配置每个个体的行为属性。
 *
 * > **说明：**
 * > 模拟帧是指群组模拟中按固定时间步长执行的更新周期，类似Unity中的FixedUpdate。
 * > 默认时间步长为16ms（约62.5FPS），模拟通过累积真实时间并按固定步长消耗来驱动。
 * > 下文部分参数的默认值基于该时间步长计算：
 * > - maxVelocityMag： 0.01 / 0.016 ≈ 0.625（m/s）。
 * > - maxAccelerationMag： maxVelocityMag / 0.016 ≈ 39.06（m/s²）。
 * > - maxTurnRate： π × 0.75 × 0.016 ≈ 0.0377（rad/模拟帧）。
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface BoidsSimParameters {
  /**
   * 每个个体的初始速度向量，各分量单位为m/s。默认值为(0, 0, 0)。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  initialVelocity?: Vec3;

  /**
   * 每个个体的初始位置，各分量单位为m。未设置时保留当前实体位置。默认值为(NaN, NaN, NaN)。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  initialPosition?: Vec3;

  /**
   * boid的初始旋转. 未设置时，使用实体的当前变换旋转.
   * 默认值：(NaN, NaN, NaN, NaN).
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  initialRotation?: Quaternion;

  /**
   * 约束boid运动的轴对齐包围盒最小角点。当boundaryMinPos的任何分量大于等于对应boundaryMaxPos分量时，该boid被视为无边界。默认值：(0, 0, 0)。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  boundaryMinPos?: Vec3;

  /**
   * 约束boid运动的轴对齐包围盒最大角点. 默认值：(0, 0, 0).
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  boundaryMaxPos?: Vec3;

  /**
   * 个体每模拟帧可达到的最大速度，单位为m/s。取值 >= 0。默认值约为0.625。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  maxVelocityMag?: double;

  /**
   * 个体每模拟帧可达到的最大加速度，单位为m/s²。取值 >= 0。默认值约为39.06。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  maxAccelerationMag?: double;

  /**
   * 每模拟帧每轴最大转向速率，各分量单位为rad/模拟帧。每个分量取值 >= 0。默认值各分量约为0.0377。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  maxTurnRate?: Vec3;

  /**
   * 分离规则权重。个体在separationDistance范围内受邻近个体排斥的强度。取值 >= 0。默认值为0.0。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  separationWeight?: double;

  /**
   * 分离规则的感知半径，单位为m。仅严格在该距离内的邻近个体对分离力有贡献（边界处力为0）。取值 >= 0。默认值为0.0。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  separationDistance?: double;

  /**
   * boid在alignmentDistance范围内匹配邻近个体平均航向的强度。取值范围：[0, +∞)。默认值：0.0
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  alignmentWeight?: double;

  /**
   * 对齐规则的感知半径。此距离范围内的boid会对齐航向。取值范围：[0, +∞)。默认值：0.0
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  alignmentDistance?: double;

  /**
   * boid在cohesionDistance范围内朝向邻近个体平均位置的强度。取值范围：[0, +∞)。默认值：0.0
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  cohesionWeight?: double;

  /**
   * 凝聚规则的感知半径。此距离范围内的boid会相互聚集。取值范围：[0, +∞)。默认值：0.0
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  cohesionDistance?: double;

  /**
   * 边界约束力权重。个体在boundaryDistance范围内被边界墙推回的强度。取值 >= 0。默认值为0.0。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  boundaryWeight?: double;

  /**
   * 边界斥力生效的距离。取值范围：[0, +∞)。默认值：0.0
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  boundaryDistance?: double;

  /**
   * 引力场对该boid的吸引强度。取值范围：[0, +∞)。默认值：0.0
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  gravityWeight?: double;

  /**
   * 斥力场对该boid的排斥强度。取值范围：[0, +∞)。默认值：0.0
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  repulsionWeight?: double;
}

/**
 * Boids模拟引力场参数。
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface BoidsSimGravityParameters {
  /**
   * 作用半径。实体在此距离范围内的boid会受到吸引（边界处力为零）。取值范围：[0, +∞)。默认值：0.0
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  radius?: double;

  /**
   * 施加于boid、方向指向实体的吸引加速度大小。取值范围：[0, +∞)。默认值：0.0
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  accelerationMag?: double;
}

/**
 * Boids模拟斥力场参数。
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface BoidsSimRepulsionParameters {
  /**
   * 作用半径。实体在此距离范围内的boid会被推开（边界处力为零）。取值范围：[0, +∞)。默认值：0.0
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  radius?: double;

  /**
   * 施加于boid、方向远离实体的排斥加速度大小。取值范围：[0, +∞)。默认值：0.0
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  accelerationMag?: double;
}

/**
 * 群组模拟世界接口. 提供群组模拟的播放控制和组件管理.
 *
 * > **说明：**
 * > 使用以下接口前，需先通过[BoidsSimPlugin.getDefaultBoidsSimWorld]{@link BoidsSimPlugin.getDefaultBoidsSimWorld}获取群组模拟世界实例。
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export declare class BoidsSimWorld {
  /**
   * 开始或恢复模拟.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  play(): void;

  /**
   * 暂停模拟.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  pause(): void;

  /**
   * 停止模拟并重置所有boid到初始状态.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  stop(): void;

  /**
   * 模拟是否正在播放.
   *
   * @returns { boolean } 返回模拟是否正在播放
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  get isPlaying(): boolean;

  /**
   * 在指定节点上添加群组模拟组件.
   *
   * @param { Node } node - 要添加组件的节点
   * @param { BoidsSimParameters } param - 群组模拟参数
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  addBoidsSimComponent(node: Node, param: BoidsSimParameters): void;

  /**
   * 在指定节点上添加引力场组件.
   *
   * @param { Node } node - 要添加组件的节点
   * @param { BoidsSimGravityParameters } param - 引力场参数
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  addBoidsSimGravityComponent(node: Node, param: BoidsSimGravityParameters): void;

  /**
   * 在指定节点上添加斥力场组件.
   *
   * @param { Node } node - 要添加组件的节点
   * @param { BoidsSimRepulsionParameters } param - 斥力场参数
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  addBoidsSimRepulsionComponent(node: Node, param: BoidsSimRepulsionParameters): void;

  /**
   * 更新指定节点上的群组模拟组件参数.
   *
   * @param { Node } node - 要更新的节点
   * @param { BoidsSimParameters } param - 群组模拟参数
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  setBoidsSimComponent(node: Node, param: BoidsSimParameters): void;

  /**
   * 更新指定节点上的引力场组件参数.
   *
   * @param { Node } node - 要更新的节点
   * @param { BoidsSimGravityParameters } param - 引力场参数
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  setBoidsSimGravityComponent(node: Node, param: BoidsSimGravityParameters): void;

  /**
   * 更新指定节点上的斥力场组件参数.
   *
   * @param { Node } node - 要更新的节点
   * @param { BoidsSimRepulsionParameters } param - 斥力场参数
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  setBoidsSimRepulsionComponent(node: Node, param: BoidsSimRepulsionParameters): void;

  /**
   * 获取指定节点上的群组模拟组件参数.
   *
   * @param { Node } node - 要查询的节点
   * @returns { BoidsSimParameters | null } 群组模拟参数，如果未找到则返回null
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  getBoidsSimComponent(node: Node): BoidsSimParameters | null;

  /**
   * 获取指定节点上的引力场组件参数.
   *
   * @param { Node } node - 要查询的节点
   * @returns { BoidsSimGravityParameters | null } 引力场参数，如果未找到则返回null
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  getBoidsSimGravityComponent(node: Node): BoidsSimGravityParameters | null;

  /**
   * 获取指定节点上的斥力场组件参数.
   *
   * @param { Node } node - 要查询的节点
   * @returns { BoidsSimRepulsionParameters | null } 斥力场参数，如果未找到则返回null
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  getBoidsSimRepulsionComponent(node: Node): BoidsSimRepulsionParameters | null;

  /**
   * 从指定节点移除群组模拟组件.
   *
   * @param { Node } node - 要移除组件的节点
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  removeBoidsSimComponent(node: Node): void;

  /**
   * 从指定节点移除引力场组件.
   *
   * @param { Node } node - 要移除组件的节点
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  removeBoidsSimGravityComponent(node: Node): void;

  /**
   * 从指定节点移除斥力场组件.
   *
   * @param { Node } node - 要移除组件的节点
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  removeBoidsSimRepulsionComponent(node: Node): void;
}

/**
 * 群组模拟插件. 提供用于管理群组模拟组件的静态方法.
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export declare class BoidsSimPlugin {
  /**
   * 获取指定场景的默认群组模拟世界.
   *
   * @param { Scene } scene - 要获取群组模拟世界的场景
   * @returns { BoidsSimWorld | null } 返回群组模拟世界实例，若不存在则返回null。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  static getDefaultBoidsSimWorld(scene: Scene): BoidsSimWorld | null;
}
