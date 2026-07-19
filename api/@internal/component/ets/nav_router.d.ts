/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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

/**
 * Route information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamiconly
 * @deprecated since 13
 * @useinstead Navigation#NavPathStack and navDestination
 */
declare interface RouteInfo {

  /**
   * Name of the navigation destination page to be redirected to.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 13
   * @useinstead Navigation.NavPathInfo#name
   */
  name: string;

  /**
   * Parameter transferred during redirection.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 13
   * @useinstead Navigation.NavPathInfo#param
   */
  param?: unknown;
}

/**
 * The **NavRouter** component provides default processing logic for responding to clicks, eliminating the need for
 * manual logic definition.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamiconly
 * @deprecated since 13
 * @useinstead Navigation#NavPathStack and navDestination
 * @noninterop
 */
declare interface NavRouterInterface {

  /**
   * Constructor.
   *
   * @returns { NavRouterAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 13
   * @useinstead NavDestinationAttribute
   */
  (): NavRouterAttribute;

  /**
   * Provides route information so that clicking the **NavRouter** component redirects the user to the specified
   * navigation destination page.
   *
   *
   *
   * @param { RouteInfo } value - Route information.
   * @returns { NavRouterAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 13
   * @useinstead Navigation#NavPathInfo
   */
  (value: RouteInfo): NavRouterAttribute;
}

/**
 * Defines the routing policy.
 *
 * > **NOTE**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamiconly
 * @deprecated since 13
 * @useinstead Navigation#NavPathStack and navDestination
 */
declare enum NavRouteMode {

  /**
   * The new navigation destination page replaces the current one. The current page is destroyed, but the information
   * about this page is retained in the navigation stack.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 13
   * @useinstead Navigation#LaunchMode
   */
  PUSH_WITH_RECREATE,

  /**
   * The new navigation destination page overwrites the current one. The current page is not destroyed, and the
   * information about this page is retained in the navigation stack.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 13
   * @useinstead Navigation#LaunchMode
   */
  PUSH,

  /**
   * The new navigation destination page replaces the current one. The current page is destroyed, and the information
   * about this page is removed from the navigation stack.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 13
   * @useinstead Navigation#LaunchMode
   */
  REPLACE
}

/**
 * In addition to the [universal attributes]{@link common}, the following attributes are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamiconly
 * @deprecated since 13
 * @useinstead Navigation#NavPathStack and navDestination
 * @noninterop
 */
declare class NavRouterAttribute extends CommonMethod<NavRouterAttribute> {

  /**
   * Called when the component activation status changes. **onStateChange(true)** is called when the **NavRouter**
   * component is activated and its **NavDestination** child component is loaded. **onStateChange(false)** is called
   * when the **NavDestination** child component is not displayed.
   *
   * > **NOTE**
   *
   * @param { function } callback - Component activation status. The value **true** means that component is activated,
   *     and **false** means the opposite.
   * @returns { NavRouterAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 13
   * @useinstead NavDestination#onShown
   */
  onStateChange(callback: (isActivated: boolean) => void): NavRouterAttribute;

  /**
   * Sets the route mode used for redirecting the user from the **NavRouter** component to the specified navigation
   * destination page.
   *
   * > **NOTE**
   *
   * @param { NavRouteMode } mode - Route mode used for redirection.<br>Default value:
   *     **NavRouteMode.PUSH_WITH_RECREATE**
   * @returns { NavRouterAttribute } Returns the instance of the NavRouterAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 13
   * @useinstead Navigation#LaunchMode
   */
  mode(mode: NavRouteMode): NavRouterAttribute;
}

/**
 * The **NavRouter** component provides default processing logic for responding to clicks, eliminating the need for
 * manual logic definition.
 *
 * > **NOTE**
 * >
 * > This component is deprecated since API version 13. You are advised to use [NavPathStack]{@link NavPathStack} in
 * > conjunction with the **navDestination** attribute for page routing.
 *
 * ###### Child Components
 *
 * This component must contain two child components, the second of which must be
 * [NavDestination]{@link nav_destination}.
 *
 * > **NOTE**
 * >
 * > 1. If there is only one child component, the navigation to the **NavDestination** component does not work.
 * >
 * > 2. If there is only the **NavDestination** child component, the navigation does not work.
 * >
 * > 3. If there are more than two child components, the excess child components are not displayed.
 * >
 * > 4. If the second child component is not **NavDestination**, the navigation does not work.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamiconly
 * @deprecated since 13
 * @useinstead Navigation#NavPathStack and navDestination
 * @noninterop
 */
declare const NavRouter: NavRouterInterface;

/**
 * Defines NavRouter Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamiconly
 * @deprecated since 13
 * @useinstead Navigation#NavPathStack and navDestination
 * @noninterop
 */
declare const NavRouterInstance: NavRouterAttribute;