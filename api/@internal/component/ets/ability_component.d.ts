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

import {CommonMethod} from "./common";
import {Want} from "../api/common/ability/want";

/**
 * controller of ability.
 * @devices phone, tablet, car.
 * @since 7
 */
export declare class AbilityController {
    /**
     * constructor.
     * @devices phone, tablet, car.
     * @since 7
     */
    constructor();

    /**
     * load the ability in the AbilityComponent.
     * Want: Capability description to be loaded
     * @devices phone, tablet, car.
     * @since 7
     */
    startAbility(value: Want);

    /**
     * Perform a return operation inside the AbilityComponent.
     * @devices phone, tablet, car.
     * @since 7
     */
    performBackPress();

    /**
     * Obtains the number of tasks in the internal task stack of the AbilityComponent.
     * @devices phone, tablet, car.
     * @since 7
     */
    getStackCount();
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
export declare class AbilityComponentExtend<T> extends AbilityComponentAttribute<T> {
}

/**
 * AbilityComponent inheritance abilitycomponentattribute.
 * Want: Capability description to be loaded.
 * controller: Ability Controller.
 * @devices phone, tablet, car.
 * @since 7
 */
interface AbilityComponent extends AbilityComponentAttribute<AbilityComponent> {
  (value: { want: Want, controller?: AbilityController }): AbilityComponent;
}

/**
 * The attribute of ability.
 * @devices phone, tablet, car.
 * @since 7
 */
declare class AbilityComponentAttribute<T> extends CommonMethod<T> {
  /**
   * Callback when the abilityComponent environment starts up, after which the abilityController methods can be used.
   * @devices phone, tablet, car.
   * @since 7
   */
  onReady(event: () => void): T;

  /**
   * Callback when the abilityComponent environment is destroyed.
   * @devices phone, tablet, car.
   * @since 7
   */
  onDestroy(event: () => void): T;

  /**
   * This event is triggered when the abilityComponent loads the mobility. Name indicates the Ability name.
   * @devices phone, tablet, car.
   * @since 7
   */
  onAbilityCreated(event: (name: string) => void): T;

  /**
   * Internal to the AbilityComponent, which is triggered when the Ability moves to the foreground.
   * @devices phone, tablet, car.
   * @since 7
   */
  onAbilityMoveToFront(event: () => void): T;

  /**
   * Internal to the AbilityComponent, which is triggered before the Mobility is removed.
   * @devices phone, tablet, car.
   * @since 7
   */
  onAbilityWillRemove(event: () => void): T;
}

/**
 * @devices phone, tablet, car.
 * @since 7
 */
export declare const AbilityComponentInterface: AbilityComponent;
