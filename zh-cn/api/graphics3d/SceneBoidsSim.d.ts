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
 * @file
 * @kit ArkGraphics3D
 */

import { Scene } from './Scene';
import { Node } from './SceneNodes';
import { Vec3, Quaternion } from './SceneTypes';

/**
 * 群组模拟参数，用于配置每个个体的行为属性。
 *
 * > **说明：**
 * >
 * > 模拟帧是指群组模拟中按固定时间步长执行的更新周期，类似Unity中的FixedUpdate。默认时间步长为16ms（约62.5FPS），模拟通过累积真实时间并按固定步长消耗来驱动。下文部分参数的默认值基于该时间步长计算：
 * > - **maxVelocityMag：** 0.01 / 0.016 ≈ 0.625（m/s）。
 * > - **maxAccelerationMag：** maxVelocityMag / 0.016 ≈ 39.06（m/s²）。
 * > - **maxTurnRate：** π × 0.75 × 0.016 ≈ 0.0377（rad/模拟帧）。
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
   * 每个个体的初始旋转方向的四元数。未设置时保留当前实体旋转方向的四元数。默认值为(NaN, NaN, NaN, NaN)。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  initialRotation?: Quaternion;

  /**
   * 约束个体运动范围的轴对齐包围盒最小角点，各分量单位为m。当boundaryMinPos的任一分量大于或等于boundaryMaxPos对应分量时，该个体视为无边界约束。默认值为(0, 0, 0)。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  boundaryMinPos?: Vec3;

  /**
   * 约束个体运动范围的轴对齐包围盒最大角点，各分量单位为m。默认值为(0, 0, 0)。
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
   * 对齐规则权重。个体在alignmentDistance范围内朝向邻近个体平均航向的强度。取值 >= 0。默认值为0.0。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  alignmentWeight?: double;

  /**
   * 对齐规则的感知半径，单位为m。在该距离内（含边界）的邻近个体对对齐力有贡献。取值 >= 0。默认值为0.0。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  alignmentDistance?: double;

  /**
   * 凝聚规则权重。个体在cohesionDistance范围内朝向邻近个体平均位置吸引的强度。取值 >= 0。默认值为0.0。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  cohesionWeight?: double;

  /**
   * 凝聚规则的感知半径，单位为m。在该距离内（含边界）的邻近个体对凝聚力有贡献。取值 >= 0。默认值为0.0。
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
   * 边界约束力生效距离，单位为m。个体距边界墙面在该距离内时受到排斥力。取值 >= 0。默认值为0.0。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  boundaryDistance?: double;

  /**
   * 引力场权重。引力场对该个体的吸引强度。取值 >= 0。默认值为0.0。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  gravityWeight?: double;

  /**
   * 斥力场权重。斥力场对该个体的排斥强度。取值 >= 0。默认值为0.0。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  repulsionWeight?: double;
}

/**
 * 引力场参数，用于配置场景中的引力场。
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface BoidsSimGravityParameters {
  /**
   * 引力场的作用半径。仅严格在该距离内的个体受到吸引（边界处力为0）。取值 >= 0。默认值为0.0。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  radius?: double;

  /**
   * 施加于个体的吸引加速度大小，其方向指向引力场实体。取值 >= 0。默认值为0.0。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  accelerationMag?: double;
}

/**
 * 斥力场参数，用于配置场景中的斥力场。
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface BoidsSimRepulsionParameters {
  /**
   * 斥力场的作用半径。仅严格在该距离内的个体受到排斥（边界处力为0）。取值 >= 0。默认值为0.0。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  radius?: double;

  /**
   * 施加于个体的排斥加速度大小，其方向远离斥力场实体。取值 >= 0。默认值为0.0。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  accelerationMag?: double;
}

/**
 * 群组模拟世界对象，用于管理群组模拟的生命周期及组件。
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
   * 开始或恢复群组模拟。当群组模拟处于停止状态时，调用此方法可以开始群组模拟；当群组模拟处于暂停状态时，调用此方法可以恢复群组模拟。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  play(): void;

  /**
   * 暂停群组模拟。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  pause(): void;

  /**
   * 停止群组模拟并重置状态。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  stop(): void;

  /**
   * 当前模拟是否正在播放。true表示正在播放，false表示已经暂停。
   *
   * @returns { boolean } 返回模拟是否正在播放
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  get isPlaying(): boolean;

  /**
   * 在指定节点上添加群组行为组件。
   *
   * @param { Node } node - 目标场景的节点。
   * @param { BoidsSimParameters } param - 群组行为参数。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  addBoidsSimComponent(node: Node, param: BoidsSimParameters): void;

  /**
   * 在指定节点上添加引力场组件。
   *
   * @param { Node } node - 目标场景的节点。
   * @param { BoidsSimGravityParameters } param - 引力场参数。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  addBoidsSimGravityComponent(node: Node, param: BoidsSimGravityParameters): void;

  /**
   * 在指定节点上添加斥力场组件。
   *
   * @param { Node } node - 目标场景的节点。
   * @param { BoidsSimRepulsionParameters } param - 斥力场参数。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  addBoidsSimRepulsionComponent(node: Node, param: BoidsSimRepulsionParameters): void;

  /**
   * 更新指定节点上的群组行为组件。
   *
   * @param { Node } node - 目标场景的节点。
   * @param { BoidsSimParameters } param - 群组行为参数。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  setBoidsSimComponent(node: Node, param: BoidsSimParameters): void;

  /**
   * 更新指定节点上的引力场组件。
   *
   * @param { Node } node - 目标场景的节点。
   * @param { BoidsSimGravityParameters } param - 引力场参数。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  setBoidsSimGravityComponent(node: Node, param: BoidsSimGravityParameters): void;

  /**
   * 更新指定节点上的斥力场组件。
   *
   * @param { Node } node - 目标场景的节点。
   * @param { BoidsSimRepulsionParameters } param - 斥力场参数。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  setBoidsSimRepulsionComponent(node: Node, param: BoidsSimRepulsionParameters): void;

  /**
   * 获取指定节点上的群组行为参数。
   *
   * @param { Node } node - 目标场景的节点。
   * @returns { BoidsSimParameters | null } 返回群组行为参数，若节点未挂载该组件则返回null。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  getBoidsSimComponent(node: Node): BoidsSimParameters | null;

  /**
   * 获取指定节点上的引力场参数。
   *
   * @param { Node } node - 目标场景的节点。
   * @returns { BoidsSimGravityParameters | null } 返回引力场参数，若节点未挂载该组件则返回null。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  getBoidsSimGravityComponent(node: Node): BoidsSimGravityParameters | null;

  /**
   * 获取指定节点上的斥力场参数。
   *
   * @param { Node } node - 目标场景的节点。
   * @returns { BoidsSimRepulsionParameters | null } 返回斥力场参数，若节点未挂载该组件则返回null。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  getBoidsSimRepulsionComponent(node: Node): BoidsSimRepulsionParameters | null;

  /**
   * 移除指定节点上的群组行为组件。
   *
   * @param { Node } node - 目标场景的节点。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  removeBoidsSimComponent(node: Node): void;

  /**
   * 移除指定节点上的引力场组件。
   *
   * @param { Node } node - 目标场景的节点。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  removeBoidsSimGravityComponent(node: Node): void;

  /**
   * 移除指定节点上的斥力场组件。
   *
   * @param { Node } node - 目标场景的节点。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  removeBoidsSimRepulsionComponent(node: Node): void;
}

/**
 * 群组模拟插件，提供静态方法用于获取群组模拟世界。
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export declare class BoidsSimPlugin {
  /**
   * 获取与指定场景关联的群组模拟世界实例。
   *
   * @param { Scene } scene - 目标场景的对象。
   * @returns { BoidsSimWorld | null } 返回群组模拟世界实例，若不存在则返回null。
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  static getDefaultBoidsSimWorld(scene: Scene): BoidsSimWorld | null;
}
