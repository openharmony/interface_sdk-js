/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * Navigation type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamiconly
 * @deprecated since 13
 * @useinstead Navigation
 */
declare enum NavigationType {

  /**
   * Navigates to the specified page in the application.
   *
   * **NOTE**
   *
   * This API is supported since API version 7 and deprecated since API version 13. You are advised to use
   * [pushPath]{@link NavPathStack#pushPath(info: NavPathInfo, animated?: boolean)} instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 13
   * @useinstead NavPathStack#pushPath
   */
  Push = 0,

  /**
   * Returns to the specified page. If the specified page does not exist in the stack, no response is returned. If no
   * page is specified, the previous page is returned to.
   *
   * **NOTE**
   *
   * This API is supported since API version 7 and deprecated since API version 13. You are advised to use
   * [pop]{@link NavPathStack#pop(animated?: boolean)} instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 13
   * @useinstead NavPathStack#pop
   */
  Back = 1,

  /**
   * Replaces the current page with another one in the application and destroys the current page.
   *
   * **NOTE**
   *
   * This API is supported since API version 7 and deprecated since API version 13. You are advised to use
   * [replacePath]{@link NavPathStack#replacePath(info: NavPathInfo, animated?: boolean)} instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 13
   * @useinstead NavPathStack.replacePath
   */
  Replace = 2
}

/**
 * The **Navigator** component provides redirection.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamiconly
 * @deprecated since 13
 * @useinstead Navigation
 * @noninterop
 */
interface NavigatorInterface {

  /**
   * Called when the route jumps.
   *
   * @param { object } value - Information about the page to be redirected to.<br/>target: Path of the target page to be
   *     redirected to. <br/>type: Navigation type.<br>Default value: **NavigationType.Push**
   * @returns { NavigatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 13
   * @useinstead NavPathInfo
   */
  (value?: { target: string; type?: NavigationType }): NavigatorAttribute;

  /**
   * Called when using the navigator.
   *
   * @returns { NavigatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 13
   * @useinstead NavigationAttribute
   */
  (): NavigatorAttribute;
}

/**
 * Declare navigator properties.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamiconly
 * @deprecated since 13
 * @useinstead Navigation
 * @noninterop
 */
declare class NavigatorAttribute extends CommonMethod<NavigatorAttribute> {

  /**
   * Sets whether the **Navigator** component is activated. If the component is activated, the corresponding navigation
   * takes effect.
   *
   * @param { boolean } value - Whether the **Navigator** component is activated. The value **true** means that the
   *     component is activated, and **false** means the opposite.
   * @returns { NavigatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 13
   * @useinstead Navigation
   */
  active(value: boolean): NavigatorAttribute;

  /**
   * Sets the navigation type.
   *
   *
   * @param { NavigationType } value - Navigation type.<br>Default value: **NavigationType.Push**
   * @returns { NavigatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 13
   * @useinstead Navigation
   */
  type(value: NavigationType): NavigatorAttribute;

  /**
   * Sets the path of the target page to be redirected to. The target page must be added to the **main_pages.json**
   * file.
   *
   *
   * @param { string } value - Path of the target page to be redirected to.
   * @returns { NavigatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 13
   * @useinstead Navigation
   */
  target(value: string): NavigatorAttribute;

  /**
   * Sets the data that needs to be passed to the target page during redirection.
   *
   *
   * @param { object } value - Data that needs to be passed to the target page during redirection. You can use
   *     [router.getParams()]{@link @ohos.router:router.getParams} to obtain the data on the target page.
   * @returns { NavigatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 13
   * @useinstead NavPathInfo#param
   */
  params(value: object): NavigatorAttribute;
}

/**
 * The **Navigator** component provides redirection.
 *
 *
 * ###### Child Components
 *
 * Supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamiconly
 * @deprecated since 13
 * @useinstead Navigation
 * @noninterop
 */
declare const Navigator: NavigatorInterface;

/**
 * Defines Navigator Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamiconly
 * @deprecated since 13
 * @useinstead Navigation
 * @noninterop
 */
declare const NavigatorInstance: NavigatorAttribute;