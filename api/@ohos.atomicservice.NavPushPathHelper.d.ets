/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * ###### Child Components
 * 
 * Not supported
 *
 * ###### Attributes
 *
 * The [universal attributes]{@link ./@internal/component/ets/common} are not supported.
 *
 * ###### Events
 * 
 * The [universal events]{@link ./@internal/component/ets/common} are not supported.
 *
 * @file Defines provides a push method for the target page in the routing table.
 * @kit ArkUI
 */

/**
 * On the initial launch, the atomic service only downloads and installs the main package and its dependencies.
 * Therefore, if the [NavDestination]{@link ./@internal/component/ets/nav_destination} resides in a different HSP
 * subpackage that is not a dependency of the main package, you'll need to use **NavPushPathHelper** to download and
 * install the corresponding HSP subpackage first. After that, push the specified **NavDestination** page information
 * onto the stack. This way, you enable [Navigation]{@link ./@internal/component/ets/navigation} to support dynamic
 * loading of the HSP subpackage before the navigation occurs.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare class NavPushPathHelper {
  /**
   * A constructor used to create a **NavPushPathHelper** object.
   *
   * @param { NavPathStack } navPathStack - [Navigation]{@link ./@internal/component/ets/navigation} stack.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  constructor(navPathStack: NavPathStack);

  /**
   * Checks for the target subpackage and, if it is not present, initiates a download using the specified module name.
   * Once the subpackage is downloaded, the API pushes the
   * [NavDestination]{@link ./@internal/component/ets/nav_destination} page specified by the **info** parameter onto the
   * navigation stack. This API uses a promise to handle asynchronous operations.
   *
   * @param { string } moduleName - Module name of the package where the
   *     [NavDestination]{@link ./@internal/component/ets/nav_destination} page is located.
   * @param { NavPathInfo } info - Information about the
   *     [NavDestination]{@link ./@internal/component/ets/nav_destination} page.
   * @param { boolean } [animated] - Whether to support the transition animation.
   *     <br>Default value: **true**.
   *     <br>**true**: The transition animation is supported.
   *     <br>**false**: The transition animation is not supported.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 300001 - hsp silent install fail.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  pushPath(moduleName: string, info: NavPathInfo, animated?: boolean): Promise<void>;

  /**
   * Checks for the target subpackage and, if it is not present, initiates a download using the specified module name.
   * Once the subpackage is downloaded, the API pushes the
   * [NavDestination]{@link ./@internal/component/ets/nav_destination} page specified by the **info** parameter onto the
   * navigation stack. This API uses a promise to handle asynchronous operations.
   *
   * Depending on the [LaunchMode]{@link LaunchMode} specified in the **options** parameter, different behaviors will be
   * triggered.
   *
   * @param { string } moduleName - Module name of the package where the
   *     [NavDestination]{@link ./@internal/component/ets/nav_destination} page is located.
   * @param { NavPathInfo } info - Information about the
   *     [NavDestination]{@link ./@internal/component/ets/nav_destination} page.
   * @param { NavigationOptions } [options] - Navigation options. The default value is
   *     **{ launchMode: LaunchMode.STANDARD, animated: true }**.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 300001 - hsp silent install fail.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  pushPath(moduleName: string, info: NavPathInfo, options?: NavigationOptions): Promise<void>;

  /**
   * Checks for the target subpackage and, if it is not present, initiates a download using the specified module name.
   * Once the subpackage is downloaded, the API pushes the
   * [NavDestination]{@link ./@internal/component/ets/nav_destination} page specified by the **info** parameter onto the
   * navigation stack. This API uses a promise to handle asynchronous operations.
   *
   * @param { string } moduleName - Module name of the package where the
   *     [NavDestination]{@link ./@internal/component/ets/nav_destination} page is located.
   * @param { NavPathInfo } info - Information about the
   *     [NavDestination]{@link ./@internal/component/ets/nav_destination} page.
   * @param { boolean } [animated] - Whether to support the transition animation.
   *     <br>Default value: **true**.
   *     <br>**true**: The transition animation is supported.
   *     <br>**false**: The transition animation is not supported.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100005 - Builder function not registered.
   * @throws { BusinessError } 100006 - NavDestination not found.
   * @throws { BusinessError } 300001 - hsp silent install fail.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  pushDestination(moduleName: string, info: NavPathInfo, animated?: boolean): Promise<void>;

  /**
   * Checks for the target subpackage and, if it is not present, initiates a download using the specified module name.
   * Once the subpackage is downloaded, the API pushes the
   * [NavDestination]{@link ./@internal/component/ets/nav_destination} page specified by the **info** parameter onto the
   * navigation stack. This API uses a promise to handle asynchronous operations.
   *
   * Depending on the [LaunchMode]{@link LaunchMode} specified in the **options** parameter, different behaviors will be
   * triggered.
   *
   * @param { string } moduleName - Module name of the package where the
   *     [NavDestination]{@link ./@internal/component/ets/nav_destination} page is located.
   * @param { NavPathInfo } info - Information about the
   *     [NavDestination]{@link ./@internal/component/ets/nav_destination} page.
   * @param { NavigationOptions } [options] - Navigation options. The default value is
   *     **{ launchMode: LaunchMode.STANDARD, animated: true }**.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameters types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100005 - Builder function not registered.
   * @throws { BusinessError } 100006 - NavDestination not found.
   * @throws { BusinessError } 300001 - hsp silent install fail.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  pushDestination(moduleName: string, info: NavPathInfo, options?: NavigationOptions): Promise<void>;

  /**
   * Checks for the target subpackage and, if it is not present, initiates a download using the specified module name.
   * Once the subpackage is downloaded, the API pushes the
   * [NavDestination]{@link ./@internal/component/ets/nav_destination} page specified by the **name** parameter onto the
   * navigation stack, along with the data specified by **param**. This API uses a promise to handle asynchronous
   * operations.
   *
   * @param { string } moduleName - Module name of the package where the
   *     [NavDestination]{@link ./@internal/component/ets/nav_destination} page is located.
   * @param { string } name - Name of the [NavDestination]{@link ./@internal/component/ets/nav_destination} page.
   * @param { Object } param - Settings of the [NavDestination]{@link ./@internal/component/ets/nav_destination} page.
   * @param { boolean } [animated] - Whether to support the transition animation.
   *     <br>Default value: **true**.
   *     <br>**true**: The transition animation is supported.
   *     <br>**false**: The transition animation is not supported.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 300001 - hsp silent install fail.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  pushPathByName(moduleName: string, name: string, param: Object, animated?: boolean): Promise<void>;

  /**
   * Checks for the target subpackage and, if it is not present, initiates a download using the specified module name.
   * Once the subpackage is downloaded, the API pushes the
   * [NavDestination]{@link ./@internal/component/ets/nav_destination} page specified by the **name** parameter onto the
   * navigation stack, along with the data specified by **param**. The **onPop** callback handles the return results
   * when the page is popped from the stack. This API uses a promise to handle asynchronous operations.
   *
   * @param { string } moduleName - Module name of the package where the
   *     [NavDestination]{@link ./@internal/component/ets/nav_destination} page is located.
   * @param { string } name - Name of the [NavDestination]{@link ./@internal/component/ets/nav_destination} page.
   * @param { Object } param - Settings of the [NavDestination]{@link ./@internal/component/ets/nav_destination} page.
   * @param { Callback<PopInfo> } onPop - Callback used to receive the result.
   * @param { boolean } [animated] - Whether to support the transition animation.
   *     <br>Default value: **true**.
   *     <br>**true**: The transition animation is supported.
   *     <br>**false**: The transition animation is not supported.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 300001 - hsp silent install fail.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  pushPathByName(moduleName: string, name: string, param: Object,
    onPop: Callback<PopInfo>, animated?: boolean): Promise<void>;

  /**
   * Checks for the target subpackage and, if it is not present, initiates a download using the specified module name.
   * Once the subpackage is downloaded, the API pushes the
   * [NavDestination]{@link ./@internal/component/ets/nav_destination} page specified by the **name** parameter onto the
   * navigation stack, along with the data specified by **param**. This API uses a promise to handle asynchronous
   * operations.
   *
   * @param { string } moduleName - Module name of the package where the
   *     [NavDestination]{@link ./@internal/component/ets/nav_destination} page is located.
   * @param { string } name - Name of the [NavDestination]{@link ./@internal/component/ets/nav_destination} page.
   * @param { Object } param - Settings of the [NavDestination]{@link ./@internal/component/ets/nav_destination} page.
   * @param { boolean } [animated] - Whether to support the transition animation.
   *     <br>Default value: **true**.
   *     <br>**true**: The transition animation is supported.
   *     <br>**false**: The transition animation is not supported.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100005 - Builder function not registered.
   * @throws { BusinessError } 100006 - NavDestination not found.
   * @throws { BusinessError } 300001 - hsp silent install fail.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  pushDestinationByName(moduleName: string, name: string, param: Object, animated?: boolean): Promise<void>;

  /**
   * Checks for the target subpackage and, if it is not present, initiates a download using the specified module name.
   * Once the subpackage is downloaded, the API pushes the
   * [NavDestination]{@link ./@internal/component/ets/nav_destination} page specified by the **name** parameter onto the
   * navigation stack, along with the data specified by **param**. The **onPop** callback handles the return results
   * when the page is popped from the stack. This API uses a promise to handle asynchronous operations.
   *
   * @param { string } moduleName - Module name of the package where the
   *     [NavDestination]{@link ./@internal/component/ets/nav_destination} page is located.
   * @param { string } name - Name of the [NavDestination]{@link ./@internal/component/ets/nav_destination} page.
   * @param { Object } param - Settings of the [NavDestination]{@link ./@internal/component/ets/nav_destination} page.
   * @param { Callback<PopInfo> } onPop - Callback used to handle the result returned when the page is popped out of the
   *     stack.
   * @param { boolean } [animated] - Whether to support the transition animation.
   *     <br>Default value: **true**.
   *     <br>**true**: The transition animation is supported.
   *     <br>**false**: The transition animation is not supported.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100005 - Builder function not registered.
   * @throws { BusinessError } 100006 - NavDestination not found.
   * @throws { BusinessError } 300001 - hsp silent install fail.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  pushDestinationByName(moduleName: string, name: string, param: Object,
    onPop: Callback<PopInfo>, animated?: boolean): Promise<void>;

  /**
   * Checks for the target subpackage and, if it is not present, initiates a download using the specified module name.
   * Once the subpackage is downloaded, the API pops the top page from the current navigation stack and pushes the
   * [NavDestination]{@link ./@internal/component/ets/nav_destination} page specified by the **info** parameter onto the
   * stack. This API uses a promise to handle asynchronous operations.
   *
   * @param { string } moduleName - Module name of the package where the
   *     [NavDestination]{@link ./@internal/component/ets/nav_destination} page is located.
   * @param { NavPathInfo } info - Parameters of the page to replace the top of the navigation stack.
   * @param { boolean } [animated] - Whether to support the transition animation.
   *     <br>Default value: **true**.
   *     <br>**true**: The transition animation is supported.
   *     <br>**false**: The transition animation is not supported.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 300001 - hsp silent install fail.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  replacePath(moduleName: string, info: NavPathInfo, animated?: boolean): Promise<void>;

  /**
   * Checks for the target subpackage and, if it is not present, initiates a download using the specified module name.
   * Once the subpackage is downloaded, the API pops the top page from the current navigation stack. This API uses a
   * promise to handle asynchronous operations.
   *
   * Depending on the [LaunchMode]{@link LaunchMode} specified in the **options** parameter, different behaviors will be
   * triggered.
   *
   * @param { string } moduleName - Module name of the package where the
   *     [NavDestination]{@link ./@internal/component/ets/nav_destination} page is located.
   * @param { NavPathInfo } info - Parameters of the page to replace the top of the navigation stack.
   * @param { NavigationOptions } [options] - Navigation options. The default value is
   *     **{ launchMode: LaunchMode.STANDARD, animated: true }**.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 300001 - hsp silent install fail.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  replacePath(moduleName: string, info: NavPathInfo, options?: NavigationOptions): Promise<void>;

  /**
   * Checks for the target subpackage and, if it is not present, initiates a download using the specified module name.
   * Once the subpackage is downloaded, the API pops the top page from the current navigation stack and pushes the page
   * specified by the **name** parameter onto the stack. This API uses a promise to handle asynchronous operations.
   *
   * @param { string } moduleName - Module name of the package where the
   *     [NavDestination]{@link ./@internal/component/ets/nav_destination} page is located.
   * @param { string } name - Name of the [NavDestination]{@link ./@internal/component/ets/nav_destination} page.
   * @param { Object } param - Settings of the [NavDestination]{@link ./@internal/component/ets/nav_destination} page.
   * @param { boolean } [animated] - Whether to support the transition animation.
   *     <br>Default value: **true**.
   *     <br>**true**: The transition animation is supported.
   *     <br>**false**: The transition animation is not supported.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 300001 - hsp silent install fail.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  replacePathByName(moduleName: string, name: string, param: Object, animated?: boolean): Promise<void>;
}