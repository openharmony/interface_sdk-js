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

import { Callback } from './@ohos.base';

/**
 * Register callbacks to observe ArkUI behavior.
 *
 * @namespace UIObserver
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
declare namespace UIObserver {
  /**
   * NavDestination state.
   *
   * @enum { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   * @form
   */
  export enum NavDestinationState {
    /**
     * When the NavDestination show.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     * @form
     */
    ON_SHOW = 0,

    /**
     * When the NavDestination hidden.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     * @form
     */
    ON_HIDDEN = 1
  }

  /**
   * NavDestination info.
   *
   * @interface NavDestinationInfo
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  export interface NavDestinationInfo {
    /**
     * Navigation id.
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    navigationId: ResourceStr,

    /**
     * Changed NavDestination name.
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    name: ResourceStr,

    /**
     * Changed NavDestination state.
     *
     * @type { NavDestinationState }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    state: NavDestinationState
  }

  /**
   * Registers a callback function to be called when the navigation destination is updated.
   *
   * @param { "navDestinationUpdate" } type - The type of event to listen for. Must be "navDestinationUpdate".
   * @param { Object } options - The options object.
   * @param { Callback<NavDestinationInfo> } callback - The callback function to be called when the navigation destination is updated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  export function on(type: "navDestinationUpdate", options: { navigationId: ResourceStr }, callback: Callback<NavDestinationInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { "navDestinationUpdate" } type - The type of event to remove the listener for. Must be "navDestinationUpdate".
   * @param { Object } options - The options object.
   * @param { Callback<NavDestinationInfo> } callback - The callback function to remove. If not provided, all callbacks for the given event type and navigation ID will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  export function off(type: "navDestinationUpdate", options: { navigationId: ResourceStr }, callback?: Callback<NavDestinationInfo>): void;

  /**
   * Registers a callback function to be called when the navigation destination is updated.
   *
   * @param { "navDestinationUpdate" } type - The type of event to listen for. Must be "navDestinationUpdate".
   * @param { Callback<NavDestinationInfo> } callback - The callback function to be called when the navigation destination is updated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  export function on(type: "navDestinationUpdate", callback: Callback<NavDestinationInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { "navDestinationUpdate"} type - The type of event to remove the listener for. Must be "navDestinationUpdate".
   * @param { Callback<NavDestinationInfo> } [callback] - The callback function to remove. If not provided, all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  export function off(type: "navDestinationUpdate", callback?: Callback<NavDestinationInfo>): void;
}

export default UIObserver;
