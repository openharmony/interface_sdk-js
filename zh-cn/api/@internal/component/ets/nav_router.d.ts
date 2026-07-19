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
* 路由信息。
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
   * 点击NavRouter跳转到的NavDestination页面的名称。
   *
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
   * 点击NavRouter跳转到NavDestination页面时，传递的参数。
   *
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
* 导航组件，默认提供点击响应处理，不需要开发者自定义点击事件逻辑。
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
   * 创建NavRouter。
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
   * 提供路由信息，指定点击NavRouter时，要跳转的NavDestination页面。
   *
   * @param { RouteInfo } value - 路由信息。
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
* 路由模式。
*
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
   * 跳转到新的NavDestination页面时，替换当前显示的NavDestination页面，页面销毁，但该页面信息仍保留在路由栈中。
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
* 除支持[通用属性]{@link common}外，还支持以下属性：
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
   * 组件激活状态切换时触发该回调。开发者点击激活NavRouter，加载对应的NavDestination子组件时，回调onStateChange(true)。NavRouter对应的NavDestination子组件不再显示时，回调
   * onStateChange(false)。
   *
   *
   * @param { function } callback - isActivated为true时表示激活，为false时表示未激活。
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
   * 设置指定点击NavRouter跳转到NavDestination页面时，使用的路由模式。
   *
   *
   * @param { NavRouteMode } mode - 指定点击NavRouter跳转到NavDestination页面时，使用的路由模式。<br/>默认值：NavRouteMode.PUSH_WITH_RECREATE
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
* 导航组件，默认提供点击响应处理，不需要开发者自定义点击事件逻辑。
*
*
* ###### 子组件
*
* 必须包含两个子组件，其中第二个子组件必须为[NavDestination]{@link nav_destination}。
*
* > **说明：**
* >
* > 子组件个数异常时：
* >
* > 1. 有且仅有1个时，触发路由到NavDestination的能力失效。
* >
* > 2. 有且仅有1个时，且使用NavDestination场景下，不进行路由。
* >
* > 3. 大于2个时，后续的子组件不显示。
* >
* > 4. 第二个子组件不为NavDestination时，触发路由功能失效。
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