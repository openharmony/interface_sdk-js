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
 * @file Defines 3D boids swarm simulation related interfaces
 * @kit ArkGraphics3D
 */

import { Scene } from './Scene';
import { Node } from './SceneNodes';
import { Vec3, Quaternion } from './SceneTypes';

/**
 * Boids simulation parameters bound per-boid.
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface BoidsSimParameters {
  /**
   * Initial velocity of the boid. Default: (0, 0, 0).
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  initialVelocity?: Vec3;

  /**
   * Initial position of the boid. When it's not set, the entity's current transform position is used.
   * Default: (NaN, NaN, NaN).
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  initialPosition?: Vec3;

  /**
   * Initial rotation of the boid. When it's not set, the entity's current transform rotation is used.
   * Default: (NaN, NaN, NaN, NaN).
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  initialRotation?: Quaternion;

  /**
   * Lower corner of the axis-aligned bounding box constraining boid movement.
   * When any component of boundaryMinPos is greater than or equal to the corresponding component of
   * boundaryMaxPos, this boid is considered unbounded. Default: (0, 0, 0).
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  boundaryMinPos?: Vec3;

  /**
   * Upper corner of the axis-aligned bounding box constraining boid movement. Default: (0, 0, 0).
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  boundaryMaxPos?: Vec3;

  /**
   * Maximum speed the boid can reach per simulation frame. Range: [0, +inf). Default: approximately 0.625.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  maxVelocityMag?: double;

  /**
   * Maximum acceleration the boid can reach per simulation frame. Range: [0, +inf). Default: approximately 39.06.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  maxAccelerationMag?: double;

  /**
   * Per-axis rotation limit in radians per simulation frame. Range: [0, +inf) per axis.
   * Default: approximately 0.0377 per axis.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  maxTurnRate?: Vec3;

  /**
   * How strongly the boid steers away from nearby neighbours within separationDistance. Range: [0, +inf). Default: 0.0
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  separationWeight?: double;

  /**
   * Perception radius for the separation rule. Only boids strictly within this distance contribute
   * to separation force (force is zero at the boundary). Range: [0, +inf). Default: 0.0
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  separationDistance?: double;

  /**
   * How strongly the boid steers to match the average heading of neighbours within alignmentDistance.
   * Range: [0, +inf). Default: 0.0
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  alignmentWeight?: double;

  /**
   * Perception radius for the alignment rule. Boids within this distance (inclusive) contribute
   * to alignment force. Range: [0, +inf). Default: 0.0
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  alignmentDistance?: double;

  /**
   * How strongly the boid steers toward the average position of neighbours within cohesionDistance.
   * Range: [0, +inf). Default: 0.0
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  cohesionWeight?: double;

  /**
   * Perception radius for the cohesion rule. Boids within this distance (inclusive) contribute
   * to cohesion force. Range: [0, +inf). Default: 0.0
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  cohesionDistance?: double;

  /**
   * How strongly the boid is pushed back when within boundaryDistance of the boundary box edges. Range: [0, +inf). Default: 0.0
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  boundaryWeight?: double;

  /**
   * Distance from boundary walls within which the boundary repulsion force takes effect. Range: [0, +inf). Default: 0.0
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  boundaryDistance?: double;

  /**
   * How strongly gravity field entities attract this boid. Range: [0, +inf). Default: 0.0
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  gravityWeight?: double;

  /**
   * How strongly repulsion field entities push this boid away. Range: [0, +inf). Default: 0.0
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  repulsionWeight?: double;
}

/**
 * Boids simulation gravity field parameters.
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface BoidsSimGravityParameters {
  /**
   * Radius of influence. Boids strictly within this distance from the entity are attracted
   * (force is zero at the boundary). Range: [0, +inf). Default: 0.0
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  radius?: double;

  /**
   * Magnitude of gravitational acceleration applied toward the entity. Range: [0, +inf). Default: 0.0
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  accelerationMag?: double;
}

/**
 * Boids simulation repulsion field parameters.
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export interface BoidsSimRepulsionParameters {
  /**
   * Radius of influence. Boids strictly within this distance from the entity are pushed away
   * (force is zero at the boundary). Range: [0, +inf). Default: 0.0
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  radius?: double;

  /**
   * Magnitude of repulsion acceleration applied away from the entity. Range: [0, +inf). Default: 0.0
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  accelerationMag?: double;
}

/**
 * Boids simulation world interface. Provides playback control and component management for boids simulation.
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export declare class BoidsSimWorld {
  /**
   * Start or resume the simulation.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  play(): void;

  /**
   * Pause the simulation.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  pause(): void;

  /**
   * Stop the simulation and reset all boids to their initial state.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  stop(): void;

  /**
   * Whether the simulation is currently playing.
   *
   * @returns { boolean } whether the simulation is currently playing.
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  get isPlaying(): boolean;

  /**
   * Add a boids simulation component to the given node.
   *
   * @param { Node } node - the node to add the component to
   * @param { BoidsSimParameters } param - boids simulation parameters
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  addBoidsSimComponent(node: Node, param: BoidsSimParameters): void;

  /**
   * Add a gravity field component to the given node.
   *
   * @param { Node } node - the node to add the component to
   * @param { BoidsSimGravityParameters } param - gravity field parameters
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  addBoidsSimGravityComponent(node: Node, param: BoidsSimGravityParameters): void;

  /**
   * Add a repulsion field component to the given node.
   *
   * @param { Node } node - the node to add the component to
   * @param { BoidsSimRepulsionParameters } param - repulsion field parameters
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  addBoidsSimRepulsionComponent(node: Node, param: BoidsSimRepulsionParameters): void;

  /**
   * Update the boids simulation component parameters on the given node.
   *
   * @param { Node } node - the node to update
   * @param { BoidsSimParameters } param - boids simulation parameters
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  setBoidsSimComponent(node: Node, param: BoidsSimParameters): void;

  /**
   * Update the gravity field component parameters on the given node.
   *
   * @param { Node } node - the node to update
   * @param { BoidsSimGravityParameters } param - gravity field parameters
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  setBoidsSimGravityComponent(node: Node, param: BoidsSimGravityParameters): void;

  /**
   * Update the repulsion field component parameters on the given node.
   *
   * @param { Node } node - the node to update
   * @param { BoidsSimRepulsionParameters } param - repulsion field parameters
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  setBoidsSimRepulsionComponent(node: Node, param: BoidsSimRepulsionParameters): void;

  /**
   * Get the boids simulation component parameters from the given node.
   *
   * @param { Node } node - the node to query
   * @returns { BoidsSimParameters | null } boids simulation parameters, or null if not found
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  getBoidsSimComponent(node: Node): BoidsSimParameters | null;

  /**
   * Get the gravity field component parameters from the given node.
   *
   * @param { Node } node - the node to query
   * @returns { BoidsSimGravityParameters | null } gravity field parameters, or null if not found
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  getBoidsSimGravityComponent(node: Node): BoidsSimGravityParameters | null;

  /**
   * Get the repulsion field component parameters from the given node.
   *
   * @param { Node } node - the node to query
   * @returns { BoidsSimRepulsionParameters | null } repulsion field parameters, or null if not found
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  getBoidsSimRepulsionComponent(node: Node): BoidsSimRepulsionParameters | null;

  /**
   * Remove the boids simulation component from the given node.
   *
   * @param { Node } node - the node to remove the component from
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  removeBoidsSimComponent(node: Node): void;

  /**
   * Remove the gravity field component from the given node.
   *
   * @param { Node } node - the node to remove the component from
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  removeBoidsSimGravityComponent(node: Node): void;

  /**
   * Remove the repulsion field component from the given node.
   *
   * @param { Node } node - the node to remove the component from
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  removeBoidsSimRepulsionComponent(node: Node): void;
}

/**
 * Boids simulation plugin. Provides static methods to manage boids simulation components.
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export declare class BoidsSimPlugin {
  /**
   * Get the default boids simulation world for the given scene.
   *
   * @param { Scene } scene - the scene to get the boids simulation world from
   * @returns { BoidsSimWorld | null } boids simulation world, or null if the plugin is not loaded
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  static getDefaultBoidsSimWorld(scene: Scene): BoidsSimWorld | null;
}
