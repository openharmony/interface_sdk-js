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
 * ###### 子组件
 *
 * 无
 *
 * ###### 属性
 *
 * 不支持[通用属性]{@link ./@internal/component/ets/common}。
 *
 * ###### 事件
 *
 * 不支持[通用事件]{@link ./@internal/component/ets/common}
 *
 * @file Defines provides a push method for the target page in the routing table.
 * @kit ArkUI
 */

/**
 * 当跳转的目标[NavDestination]{@link ./@internal/component/ets/nav_destination}在不同的hsp分包且未被主包依赖时，首次运行原子化服务只会下载安装主包。此时需要使用
 * NavPushPathHelper先下载安装相应hsp分包，再将指定的[NavDestination]{@link ./@internal/component/ets/nav_destination}页面信息入栈或替换当前栈顶页面，从
 * 而使[Navigation]{@link ./@internal/component/ets/navigation}支持动态加载hsp分包后再跳转。
 * 
 * > **说明：**
 * >
 * > 该组件从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare class NavPushPathHelper {
  /**
   * NavPushPathHelper的构造函数。
   *
   * @param { NavPathStack } navPathStack - [Navigation]{@link ./@internal/component/ets/navigation}路由栈。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  constructor(navPathStack: NavPathStack);

  /**
   * 先判断分包是否存在，若不存在，则通过moduleName下载分包，再将info指定的[NavDestination]{@link ./@internal/component/ets/nav_destination}页面信息入栈，使
   * 用Promise异步回调。
   *
   * @param { string } moduleName - 目标[NavDestination]{@link ./@internal/component/ets/nav_destination}所在分包的moduleName。
   * @param { NavPathInfo } info - [NavDestination]{@link ./@internal/component/ets/nav_destination}页面的信息。
   * @param { boolean } [animated] - 是否支持转场动画。
   *     <br>默认值：true。
   *     <br>true：支持转场动画。
   *     <br>false：不支持转场动画。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 300001 - hsp silent install fail.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  pushPath(moduleName: string, info: NavPathInfo, animated?: boolean): Promise<void>;

  /**
   * 先判断分包是否存在，若不存在，则通过moduleName下载分包，再将info指定的[NavDestination]{@link ./@internal/component/ets/nav_destination}页面信息入栈，使
   * 用Promise异步回调。
   * 
   * 具体根据options中指定的[LaunchMode]{@link LaunchMode}不同，执行不同的跳转行为。
   *
   * @param { string } moduleName - 目标[NavDestination]{@link ./@internal/component/ets/nav_destination}所在分包的moduleName。
   * @param { NavPathInfo } info - [NavDestination]{@link ./@internal/component/ets/nav_destination}页面的信息。
   * @param { NavigationOptions } [options] - 页面栈操作选项。默认值为{ launchMode: LaunchMode.STANDARD, animated: true }。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 300001 - hsp silent install fail.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  pushPath(moduleName: string, info: NavPathInfo, options?: NavigationOptions): Promise<void>;

  /**
   * 先判断分包是否存在，若不存在，则通过moduleName下载分包，再将info指定的[NavDestination]{@link ./@internal/component/ets/nav_destination}页面信息入栈，使
   * 用Promise异步回调。
   *
   * @param { string } moduleName - 目标[NavDestination]{@link ./@internal/component/ets/nav_destination}所在分包的moduleName。
   * @param { NavPathInfo } info - [NavDestination]{@link ./@internal/component/ets/nav_destination}页面的信息。
   * @param { boolean } [animated] - 是否支持转场动画。
   *     <br>默认值：true。
   *     <br>true：支持转场动画。
   *     <br>false：不支持转场动画。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 先判断分包是否存在，若不存在，则通过moduleName下载分包，再将info指定的[NavDestination]{@link ./@internal/component/ets/nav_destination}页面信息入栈，使
   * 用Promise异步回调。
   * 
   * 具体根据options中指定不同的[LaunchMode]{@link LaunchMode}，有不同的行为。
   *
   * @param { string } moduleName - 目标[NavDestination]{@link ./@internal/component/ets/nav_destination}所在分包的moduleName。
   * @param { NavPathInfo } info - [NavDestination]{@link ./@internal/component/ets/nav_destination}页面的信息。
   * @param { NavigationOptions } [options] - 页面栈操作选项。默认值为{ launchMode: LaunchMode.STANDARD, animated: true }。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 先判断分包是否存在，若不存在，则通过moduleName下载分包，再将name指定的[NavDestination]{@link ./@internal/component/ets/nav_destination}页面信息入栈，传
   * 递的数据为param，使用Promise异步回调。
   *
   * @param { string } moduleName - 目标[NavDestination]{@link ./@internal/component/ets/nav_destination}所在分包的moduleName。
   * @param { string } name - [NavDestination]{@link ./@internal/component/ets/nav_destination}页面名称。
   * @param { Object } param - [NavDestination]{@link ./@internal/component/ets/nav_destination}页面详细参数。
   * @param { boolean } [animated] - 是否支持转场动画。
   *     <br>默认值：true。
   *     <br>true：支持转场动画。
   *     <br>false：不支持转场动画。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 300001 - hsp silent install fail.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  pushPathByName(moduleName: string, name: string, param: Object, animated?: boolean): Promise<void>;

  /**
   * 先判断分包是否存在，若不存在，则通过moduleName下载分包，再将name指定的[NavDestination]{@link ./@internal/component/ets/nav_destination}页面信息入栈，传
   * 递的数据为param，添加onPop回调接收入栈页面出栈时的返回结果，并进行处理，使用Promise异步回调。
   *
   * @param { string } moduleName - 目标[NavDestination]{@link ./@internal/component/ets/nav_destination}所在分包的moduleName。
   * @param { string } name - [NavDestination]{@link ./@internal/component/ets/nav_destination}页面名称。
   * @param { Object } param - [NavDestination]{@link ./@internal/component/ets/nav_destination}页面详细参数。
   * @param { Callback<PopInfo> } onPop - Callback回调，用于页面出栈时处理返回结果。
   * @param { boolean } [animated] - 是否支持转场动画。
   *     <br>默认值：true。
   *     <br>true：支持转场动画。
   *     <br>false：不支持转场动画。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 300001 - hsp silent install fail.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  pushPathByName(moduleName: string, name: string, param: Object,
    onPop: Callback<PopInfo>, animated?: boolean): Promise<void>;

  /**
   * 先判断分包是否存在，若不存在，则通过moduleName下载分包，再将name指定的[NavDestination]{@link ./@internal/component/ets/nav_destination}页面信息入栈，传
   * 递的数据为param，使用Promise异步回调。
   *
   * @param { string } moduleName - 目标[NavDestination]{@link ./@internal/component/ets/nav_destination}所在分包的moduleName。
   * @param { string } name - [NavDestination]{@link ./@internal/component/ets/nav_destination}页面名称。
   * @param { Object } param - [NavDestination]{@link ./@internal/component/ets/nav_destination}页面详细参数。
   * @param { boolean } [animated] - 是否支持转场动画。
   *     <br>默认值：true。
   *     <br>true：支持转场动画。
   *     <br>false：不支持转场动画。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 先判断分包是否存在，若不存在，则通过moduleName下载分包，再将name指定的[NavDestination]{@link ./@internal/component/ets/nav_destination}页面信息入栈，传
   * 递的数据为param，添加用于页面出栈时处理返回结果的onPop回调，使用Promise异步回调。
   *
   * @param { string } moduleName - 目标[NavDestination]{@link ./@internal/component/ets/nav_destination}所在分包的moduleName。
   * @param { string } name - [NavDestination]{@link ./@internal/component/ets/nav_destination}页面名称。
   * @param { Object } param - [NavDestination]{@link ./@internal/component/ets/nav_destination}页面的参数对象，用于向目标页面传递数据。
   * @param { Callback<PopInfo> } onPop - Callback回调，用于页面出栈时处理返回结果。
   * @param { boolean } [animated] - 是否支持转场动画。
   *     <br>默认值：true。
   *     <br>true：支持转场动画。
   *     <br>false：不支持转场动画。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 先判断分包是否存在，若不存在，则通过moduleName下载分包，再将当前页面栈栈顶退出，将info指定的
   * [NavDestination]{@link ./@internal/component/ets/nav_destination}页面信息入栈，使用Promise异步回调。
   *
   * @param { string } moduleName - 目标[NavDestination]{@link ./@internal/component/ets/nav_destination}所在分包的moduleName。
   * @param { NavPathInfo } info - 新栈顶页面参数信息。
   * @param { boolean } [animated] - 是否支持转场动画。
   *     <br>默认值：true。
   *     <br>true：支持转场动画。
   *     <br>false：不支持转场动画。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 300001 - hsp silent install fail.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  replacePath(moduleName: string, info: NavPathInfo, animated?: boolean): Promise<void>;

  /**
   * 先判断分包是否存在，若不存在，则通过moduleName下载分包，再将当前页面栈栈顶退出，将info指定的
   * [NavDestination]{@link ./@internal/component/ets/nav_destination}页面信息入栈，使用Promise异步回调。
   * 
   * 具体根据options中指定不同的[LaunchMode]{@link LaunchMode}，有不同的行为。
   *
   * @param { string } moduleName - 目标[NavDestination]{@link ./@internal/component/ets/nav_destination}所在分包的moduleName。
   * @param { NavPathInfo } info - 新栈顶页面参数信息。
   * @param { NavigationOptions } [options] - 页面栈操作选项。默认值为{ launchMode: LaunchMode.STANDARD, animated: true }。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 300001 - hsp silent install fail.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  replacePath(moduleName: string, info: NavPathInfo, options?: NavigationOptions): Promise<void>;

  /**
   * 先判断分包是否存在，若不存在，则通过moduleName下载分包，再将当前页面栈栈顶退出，将name指定的
   * [NavDestination]{@link ./@internal/component/ets/nav_destination}页面信息入栈，传递的数据为param，使用Promise异步回调。
   *
   * @param { string } moduleName - 目标[NavDestination]{@link ./@internal/component/ets/nav_destination}所在分包的moduleName。
   * @param { string } name - [NavDestination]{@link ./@internal/component/ets/nav_destination}页面名称。
   * @param { Object } param - [NavDestination]{@link ./@internal/component/ets/nav_destination}页面详细参数。
   * @param { boolean } [animated] - 是否支持转场动画。
   *     <br>默认值：true。
   *     <br>true：支持转场动画。
   *     <br>false：不支持转场动画。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 300001 - hsp silent install fail.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  replacePathByName(moduleName: string, name: string, param: Object, animated?: boolean): Promise<void>;
}