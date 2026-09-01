/*
 * Copyright (c) 2026-2026 Huawei Device Co., Ltd.
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
 * Boids simulation parameters used to configure the behavioral attributes of each individual.
 *
 * > **NOTE**
 * >
 * > A simulation frame refers to the update cycle executed at a fixed time step in the Boids simulation, similar to FixedUpdate in Unity.
 * > The default time step is 16 ms (approximately 62.5 FPS). The simulation is driven by accumulating real time and consuming it in fixed steps.
 * > The default values of some parameters below are calculated based on this time step:
 * > - maxVelocityMag: 0.01 / 0.016 ≈ 0.625 (m/s).
 * > - maxAccelerationMag: maxVelocityMag / 0.016 ≈ 39.06 (m/s²).
 * > - maxTurnRate: π × 0.75 × 0.016 ≈ 0.0377 (rad/simulation frame).
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface BoidsSimParameters {
  /**
   * Initial velocity vector of each individual. Each component unit is m/s.
   * Default value: (0, 0, 0).
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  initialVelocity?: Vec3;

  /**
   * Initial position of each individual. Each component unit is m.
   * If not set, the current entity position is retained.
   * Default value: (NaN, NaN, NaN).
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  initialPosition?: Vec3;

  /**
   * Quaternion of the initial rotation direction of each individual.
   * If not set, the quaternion of the current entity rotation direction is retained.
   * Default value: (NaN, NaN, NaN, NaN).
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  initialRotation?: Quaternion;

  /**
   * Minimum corner of the axis-aligned bounding box that constrains the individual's movement range.
   * Each component unit is m. When any component of boundaryMinPos is greater than or equal to the corresponding component of boundaryMaxPos,
   * the individual is considered to have no boundary constraint.
   * Default value: (0, 0, 0).
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  boundaryMinPos?: Vec3;

  /**
   * Maximum corner of the axis-aligned bounding box that constrains the individual's movement range.
   * Each component unit is m.
   * Default value: (0, 0, 0).
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  boundaryMaxPos?: Vec3;

  /**
   * Maximum velocity that the individual can reach per simulation frame. Unit is m/s.
   * Value >= 0.
   * Default value is approximately 0.625.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  maxVelocityMag?: double;

  /**
   * Maximum acceleration that the individual can reach per simulation frame. Unit is m/s².
   * Value >= 0.
   * Default value is approximately 39.06.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  maxAccelerationMag?: double;

  /**
   * Maximum turn rate per axis per simulation frame. Each component unit is rad/simulation frame.
   * Each component value >= 0.
   * Default value for each component is approximately 0.0377.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  maxTurnRate?: Vec3;

  /**
   * Weight of the separation rule.
   * The intensity with which the individual is repelled by neighboring individuals within the separationDistance.
   * Value >= 0.
   * Default value: 0.0.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  separationWeight?: double;

  /**
   * Perception radius of the separation rule. Unit is m.
   * Only neighboring individuals strictly within this distance contribute to the separation force (boundary force is 0).
   * Value >= 0.
   * Default value: 0.0.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  separationDistance?: double;

  /**
   * Weight of the alignment rule.
   * The intensity with which the individual steers toward the average heading of neighboring individuals within the alignmentDistance.
   * Value >= 0.
   * Default value: 0.0.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  alignmentWeight?: double;

  /**
   * Perception radius of the alignment rule. Unit is m.
   * Neighboring individuals within this distance (inclusive) contribute to the alignment force.
   * Value >= 0.
   * Default value: 0.0.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  alignmentDistance?: double;

  /**
   * Weight of the cohesion rule.
   * The intensity with which the individual is attracted toward the average position of neighboring individuals within the cohesionDistance.
   * Value >= 0.
   * Default value: 0.0.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  cohesionWeight?: double;

  /**
   * Perception radius of the cohesion rule. Unit is m.
   * Neighboring individuals within this distance (inclusive) contribute to the cohesion force.
   * Value >= 0.
   * Default value: 0.0.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  cohesionDistance?: double;

  /**
   * Weight of the boundary constraint force.
   * The intensity with which the individual is pushed back by the boundary wall within the boundaryDistance.
   * Value >= 0.
   * Default value: 0.0.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  boundaryWeight?: double;

  /**
   * Effective distance of the boundary constraint force. Unit is m.
   * The individual is subject to a repulsive force when its distance to the boundary wall is within this distance.
   * Value >= 0.
   * Default value: 0.0.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  boundaryDistance?: double;

  /**
   * Attraction intensity of the attraction field on this individual.
   * Value >= 0.
   * Default value: 0.0.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  gravityWeight?: double;

  /**
   * Repulsion intensity of the repulsion field on this individual.
   * Value >= 0.
   * Default value: 0.0.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  repulsionWeight?: double;
}

/**
 * Attraction field parameters, used to configure the attraction field in the scene.
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface BoidsSimGravityParameters {
  /**
   * The radius of the attraction field. Only individuals strictly within this distance are attracted (boundary force is 0).
   * Value >= 0.
   * Default value: 0.0.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  radius?: double;

  /**
   * The magnitude of the attraction acceleration applied to the individual, with the direction pointing toward the attraction field entity.
   * Value >= 0.
   * Default value: 0.0.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  accelerationMag?: double;
}

/**
 * Repulsion field parameters, used to configure the repulsion field in the scene.
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface BoidsSimRepulsionParameters {
  /**
   * The radius of the repulsion field. Only individuals strictly within this distance are repelled (boundary force is 0).
   * Value >= 0.
   * Default value is 0.0.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  radius?: double;

  /**
   * The magnitude of the repulsion acceleration applied to the individual, whose direction points away from the repulsion field entity.
   * Value >= 0.
   * Default value is 0.0.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  accelerationMag?: double;
}

/**
 * The Boids simulation world object, used to manage the lifecycle and components of the Boids simulation.
 *
 * > **NOTE**
 * >
 * > Before using the following APIs, you need to obtain the Boids simulation world instance through {@link BoidsSimPlugin.getDefaultBoidsSimWorld}.
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export declare class BoidsSimWorld {
  /**
   * Starts or resumes the Boids simulation.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  play(): void;

  /**
   * Pauses the Boids simulation.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  pause(): void;

  /**
   * Stops the Boids simulation and resets the state.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  stop(): void;

  /**
   * Whether the current simulation is playing. true indicates it is playing, false indicates it is paused.
   *
   * @returns { boolean } true indicates it is playing, false indicates it is paused.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  get isPlaying(): boolean;

  /**
   * Adds a flock behavior component at the specified node.
   *
   * @param { Node } node - Node of the target scene.
   * @param { BoidsSimParameters } param - Flock behavior parameters.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  addBoidsSimComponent(node: Node, param: BoidsSimParameters): void;

  /**
   * Adds an attraction field component at the specified node.
   *
   * @param { Node } node - Node of the target scene.
   * @param { BoidsSimGravityParameters } param - Attraction field parameters.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  addBoidsSimGravityComponent(node: Node, param: BoidsSimGravityParameters): void;

  /**
   * Adds a repulsion field component at the specified node.
   *
   * @param { Node } node - Node of the target scene.
   * @param { BoidsSimRepulsionParameters } param - Repulsion field parameters.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  addBoidsSimRepulsionComponent(node: Node, param: BoidsSimRepulsionParameters): void;

  /**
   * Updates the flock behavior component on the specified node.
   *
   * @param { Node } node - Node of the target scene.
   * @param { BoidsSimParameters } param - Flock behavior parameters.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  setBoidsSimComponent(node: Node, param: BoidsSimParameters): void;

  /**
   * Updates the attraction field component on the specified node.
   *
   * @param { Node } node - Node of the target scene.
   * @param { BoidsSimGravityParameters } param - Attraction field parameters.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  setBoidsSimGravityComponent(node: Node, param: BoidsSimGravityParameters): void;

  /**
   * Updates the repulsion field component on the specified node.
   *
   * @param { Node } node - Node of the target scene.
   * @param { BoidsSimRepulsionParameters } param - Repulsion field parameters.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  setBoidsSimRepulsionComponent(node: Node, param: BoidsSimRepulsionParameters): void;

  /**
   * Gets the flock behavior parameters on the specified node.
   *
   * @param { Node } node - Node of the target scene.
   * @returns { BoidsSimParameters | null } Returns the flock behavior parameters,
   *     or null if the node does not have this component mounted.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  getBoidsSimComponent(node: Node): BoidsSimParameters | null;

  /**
   * Gets the attraction field parameters on the specified node.
   *
   * @param { Node } node - Node of the target scene.
   * @returns { BoidsSimGravityParameters | null } Returns the attraction field parameters,
   *     or null if the node does not have this component mounted.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  getBoidsSimGravityComponent(node: Node): BoidsSimGravityParameters | null;

  /**
   * Gets the repulsion field parameters on the specified node.
   *
   * @param { Node } node - Node of the target scene.
   * @returns { BoidsSimRepulsionParameters | null } Returns the repulsion field parameters,
   *     or null if the node does not have this component mounted.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  getBoidsSimRepulsionComponent(node: Node): BoidsSimRepulsionParameters | null;

  /**
   * Removes the flock behavior component from the specified node.
   *
   * @param { Node } node - Node of the target scene.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  removeBoidsSimComponent(node: Node): void;

  /**
   * Removes the attraction field component on the specified node.
   *
   * @param { Node } node - Node of the target scene.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  removeBoidsSimGravityComponent(node: Node): void;

  /**
   * Removes the repulsion field component from the specified node.
   *
   * @param { Node } node - Node of the target scene.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  removeBoidsSimRepulsionComponent(node: Node): void;
}

/**
 * Boids simulation plugin, providing static methods for obtaining the boids simulation world.
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export declare class BoidsSimPlugin {
  /**
   * Gets the Boids simulation world instance associated with the specified scene.
   *
   * @param { Scene } scene - Object of the target scene.
   * @returns { BoidsSimWorld | null } Returns the Boids simulation world instance, or null if it does not exist.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  static getDefaultBoidsSimWorld(scene: Scene): BoidsSimWorld | null;
}
