/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import { CommonMethod } from "./common";
import { Want } from "../api/common/ability/want";

/**
 * controller of ability.
 * @since 7
 * @systemapi
 */
export declare class AbilityController {
  /**
   * constructor.
   */
  constructor();

  /**
   * load the ability in the AbilityComponent.
   * Want: Capability description to be loaded
   */
  startAbility(value: Want);

  /**
   * Perform a return operation inside the AbilityComponent.
   */
  performBackPress();

  /**
   * Obtains the number of tasks in the internal task stack of the AbilityComponent.
   */
  getStackCount();
}

/**
 * AbilityComponent constructor params.
 * @since 7
 * @systemapi
 */
export declare interface AbilityComponentOptions {
  /**
   * Capability description to be loaded.
   */
  want: Want;

  /**
   * controller: Ability Controller.
   */
  controller?: AbilityController;
}

/**
 * AbilityComponent inheritance abilitycomponentattribute.
 * @since 7
 * @systemapi
 */
interface AbilityComponent extends AbilityComponentAttribute<AbilityComponent> {
  (value: AbilityComponentOptions): AbilityComponent;
}

/**
 * The attribute of ability.
 * @since 7
 * @systemapi
 */
declare class AbilityComponentAttribute<T> extends CommonMethod<T> {
  /**
   * Callback when the abilityComponent environment starts up, after which the abilityController methods can be used.
   */
  onReady(event: () => void): T;

  /**
   * Callback when the abilityComponent environment is destroyed.
   */
  onDestroy(event: () => void): T;

  /**
   * This event is triggered when the abilityComponent loads the mobility. Name indicates the Ability name.
   */
  onAbilityCreated(event: (name: string) => void): T;

  /**
   * Internal to the AbilityComponent, which is triggered when the Ability moves to the foreground.
   */
  onAbilityMoveToFront(event: () => void): T;

  /**
   * Internal to the AbilityComponent, which is triggered before the Mobility is removed.
   */
  onAbilityWillRemove(event: () => void): T;
}

// Used for IDE.
export declare class AbilityComponentExtend<T> extends AbilityComponentAttribute<T> {}
export declare const AbilityComponentInterface: AbilityComponent;
