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
 */

import type { Callback } from './@ohos.base';
import type UIAbilityContext from './application/UIAbilityContext';

/**
 * Register callbacks to observe ArkUI behavior.
 *
 * @namespace uiObserver
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
declare namespace uiObserver {
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
    ON_SHOWN = 0,

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
   * Router page state.
   *
   * @enum { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  export enum RouterPageState {
    /**
     * When the router page create.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    ABOUT_TO_APPEAR = 0,

    /**
     * When the router page destroy.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    ABOUT_TO_DISAPPEAR = 1,

    /**
     * When the router page show.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    ON_PAGE_SHOW = 2,

    /**
     * When the router page hide.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    ON_PAGE_HIDE = 3,

    /**
     * When back press event happened in the router page.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    ON_BACK_PRESS = 4
  }

  /**
   * ScrollEvent type.
   *
   * @enum { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
    export enum ScrollEventType {
      /**
       * When the ScrollEvent start.
       *
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @crossplatform
       * @since 12
       */
      SCROLL_START = 0,
  
      /**
       * When the ScrollEvent stop.
       *
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @crossplatform
       * @since 12
       */
      SCROLL_STOP = 1
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
   * ScrollEvent info.
   *
   * @interface ScrollEventInfo
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  export interface ScrollEventInfo {
    /**
     * Scroll id.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    id: string,

    /**
     * Changed ScrollEvent type.
     *
     * @type { ScrollEventType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    scrollEvent: ScrollEventType,

    /**
     * Changed ScrollEvent offset.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    offset: number
  }

    /**
   * observer options.
   *
   * @interface ObserverOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
    export interface ObserverOptions {
      /**
       * component id.
       *
       * @type { string }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @crossplatform
       * @since 12
       */
      id: string
    }

  /**
   * Router page info.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  export class RouterPageInfo {
    /**
     * The context of the changed router page.
     *
     * @type { UIAbilityContext | UIContext }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    context: UIAbilityContext | UIContext;

    /**
     * The index of the changed router page in router stack.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    index: number;

    /**
     * The name of the changed router page.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    name: string;

    /**
     * The path of the changed router page.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    path: string;

    /**
     * The state of the changed router page.
     *
     * @type { RouterPageState }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    state: RouterPageState;
  }

  /**
   * Density info.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  export class DensityInfo {
    /**
     * The context of the changed screen density.
     *
     * @type { UIContext }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    context: UIContext;

    /**
     * The changed screen density.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    density: number;
  }

  /**
   * Registers a callback function to be called when the navigation destination is updated.
   *
   * @param { 'navDestinationUpdate' } type - The type of event to listen for. Must be 'navDestinationUpdate'.
   * @param { object } options - The options object.
   * @param { Callback<NavDestinationInfo> } callback - The callback function to be called when the navigation destination is updated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  export function on(type: 'navDestinationUpdate', options: { navigationId: ResourceStr }, callback: Callback<NavDestinationInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'navDestinationUpdate' } type - The type of event to remove the listener for. Must be 'navDestinationUpdate'.
   * @param { object } options - The options object.
   * @param { Callback<NavDestinationInfo> } callback - The callback function to remove. If not provided, all callbacks for the given event type and
   *                                                    navigation ID will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  export function off(type: 'navDestinationUpdate', options: { navigationId: ResourceStr }, callback?: Callback<NavDestinationInfo>): void;

  /**
   * Registers a callback function to be called when the navigation destination is updated.
   *
   * @param { 'navDestinationUpdate' } type - The type of event to listen for. Must be 'navDestinationUpdate'.
   * @param { Callback<NavDestinationInfo> } callback - The callback function to be called when the navigation destination is updated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  export function on(type: 'navDestinationUpdate', callback: Callback<NavDestinationInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'navDestinationUpdate'} type - The type of event to remove the listener for. Must be 'navDestinationUpdate'.
   * @param { Callback<NavDestinationInfo> } [callback] - The callback function to remove. If not provided, all callbacks for the given event type
   *                                                      will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  export function off(type: 'navDestinationUpdate', callback?: Callback<NavDestinationInfo>): void;

  /**
   * Registers a callback function to be called when the scroll event start or stop.
   *
   * @param { 'scrollEvent' } type - The type of event to listen for. Must be 'scrollEvent'.
   * @param { ObserverOptions } options - The options object.
   * @param { Callback<ScrollEventInfo> } callback - The callback function to be called when the scroll event start or stop.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  export function on(type: 'scrollEvent', options: ObserverOptions, callback: Callback<ScrollEventInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'scrollEvent' } type - The type of event to remove the listener for. Must be 'scrollEvent'.
   * @param { ObserverOptions } options - The options object.
   * @param { Callback<ScrollEventInfo> } callback - The callback function to remove. If not provided, all callbacks for the given event type and
   *                                                    scroll ID will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  export function off(type: 'scrollEvent', options: ObserverOptions, callback?: Callback<ScrollEventInfo>): void;

  /**
   * Registers a callback function to be called when the scroll event start or stop.
   *
   * @param { 'scrollEvent' } type - The type of event to listen for. Must be 'scrollEvent'.
   * @param { Callback<ScrollEventInfo> } callback - The callback function to be called when the scroll event start or stop.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  export function on(type: 'scrollEvent', callback: Callback<ScrollEventInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'scrollEvent'} type - The type of event to remove the listener for. Must be 'scrollEvent'.
   * @param { Callback<ScrollEventInfo> } [callback] - The callback function to remove. If not provided, all callbacks for the given event type
   *                                                      will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  export function off(type: 'scrollEvent', callback?: Callback<ScrollEventInfo>): void;

  /**
   * Registers a callback function to be called when the router page is updated.
   *
   * @param { 'routerPageUpdate' } type - The type of event to listen for. Must be 'routerPageUpdate'.
   * @param { UIAbilityContext | UIContext } context - The context scope of the observer.
   * @param { Callback<RouterPageInfo> } callback - The callback function to be called when the router page is updated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  export function on(type: 'routerPageUpdate', context: UIAbilityContext | UIContext, callback: Callback<RouterPageInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'routerPageUpdate' } type - The type of event to remove the listener for. Must be 'routerPageUpdate'.
   * @param { UIAbilityContext | UIContext } context - The context scope of the observer.
   * @param { Callback<RouterPageInfo> } [callback] - The callback function to remove. If not provided, all callbacks for the given event type
   *                                                               will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  export function off(type: 'routerPageUpdate', context: UIAbilityContext | UIContext, callback?: Callback<RouterPageInfo>): void;

  /**
   * Registers a callback function to be called when the screen density is updated.
   *
   * @param { 'densityUpdate' } type - The type of event to listen for. Must be 'densityUpdate'.
   * @param { UIContext } context - The context scope of the observer.
   * @param { Callback<DensityInfo> } callback - The callback function to be called when the router page is updated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  export function on(type: 'densityUpdate', context: UIContext, callback: Callback<DensityInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'densityUpdate' } type - The type of event to remove the listener for. Must be 'densityUpdate'.
   * @param { UIContext } context - The context scope of the observer.
   * @param { Callback<DensityInfo> } [callback] - The callback function to remove. If not provided, all callbacks for the given event type
   *                                               will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  export function off(type: 'densityUpdate', context: UIContext, callback?: Callback<DensityInfo>): void;

  /**
   * Registers a callback function to be called when the draw command will be drawn.
   *
   * @param { 'willDraw' } type - The type of event to listen for. Must be 'willDraw'.
   * @param { UIContext } context - The context scope of the observer.
   * @param { Callback<void> } callback - The callback function to be called when the draw command will be drawn.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  export function on(type: 'willDraw', context: UIContext, callback: Callback<void>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'willDraw' } type - The type of event to remove the listener for. Must be 'willDraw'.
   * @param { UIContext } context - The context scope of the observer.
   * @param { Callback<void> } [callback] - The callback function to remove. If not provided, all callbacks for the given event type
   *                                               will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  export function off(type: 'willDraw', context: UIContext, callback?: Callback<void>): void;

  /**
   * Registers a callback function to be called when the layout is done.
   *
   * @param { 'didLayout' } type - The type of event to listen for. Must be 'didLayout'.
   * @param { UIContext } context - The context scope of the observer.
   * @param { Callback<void> } callback - The callback function to be called when the layout is done.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  export function on(type: 'didLayout', context: UIContext, callback: Callback<void>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'didLayout' } type - The type of event to remove the listener for. Must be 'didLayout'.
   * @param { UIContext } context - The context scope of the observer.
   * @param { Callback<void> } [callback] - The callback function to remove. If not provided, all callbacks for the given event type
   *                                               will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  export function off(type: 'didLayout', context: UIContext, callback?: Callback<void>): void;
}

export default uiObserver;
