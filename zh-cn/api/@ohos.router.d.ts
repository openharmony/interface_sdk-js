/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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

import { Callback } from './@ohos.base';

import { AsyncCallback } from './@ohos.base';

/**
 * 本模块提供通过不同的url访问不同的页面，包括跳转到应用内的指定页面、同应用内的某个页面替换当前页面、返回上一页面或指定的页面等。
 * 
 * 推荐使用[Navigation组件](docroot://ui/arkts-navigation-architecture.md)作为应用路由框架。
 * 
 * > **说明：**
 * >
 * > - 页面路由需要在页面渲染完成之后才能调用，在onInit和onReady生命周期中页面还处于渲染阶段，禁止调用页面路由方法。
 * >
 * > - 本模块功能依赖UI的执行上下文，不可在[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的地方使用，参见
 * > [UIContext]{@link @ohos.arkui.UIContext}说明。
 * >
 * > - 如果使用传入callback形式的
 * > [pushUrl]{@link @ohos.arkui.UIContext:Router#pushUrl(options: router.RouterOptions, callback: AsyncCallback<void>)}
 * > 或
 * > [pushNamedRoute]{@link @ohos.arkui.UIContext:Router#pushNamedRoute(options: router.NamedRouterOptions, callback: AsyncCallback<void>)}
 * > 接口，callback中通过[getLength]{@link @ohos.arkui.UIContext:Router#getLength}等接口获取的栈信息为中间态的栈信息，可能与栈操作完全结束后，再通过
 * > [getLength]{@link @ohos.arkui.UIContext:Router#getLength}等接口获取的栈信息不一致。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare namespace router {

  /**
   * 路由跳转模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  export enum RouterMode {

    /**
     * 多实例模式，也是默认情况下的跳转模式。 
     * 
     * 目标页面会被添加到页面栈顶，无论栈中是否存在相同url的页面。
     * 
     * **说明：**  
     * 
     * 不使用路由跳转模式时，则按照默认的多实例模式进行跳转。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    Standard,

    /**
     * 单实例模式。
     * 
     * 如果目标页面的url已经存在于页面栈中，则该url页面移动到栈顶。
     * 
     * 如果目标页面的url在页面栈中不存在同url页面，则按照默认的多实例模式进行跳转。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    Single
  }

  /**
   * 路由跳转选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @crossplatform [since 19]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  interface RouterOptions {

    /**
     * 表示目标页面的url，可以用以下两种格式：
     * 
     * -?页面绝对路径，由配置文件中pages列表提供，例如：
     * 
     * ??-?pages/index/index
     * 
     * ??-?pages/detail/detail
     * 
     * -?特殊值，如果url的值是"/"，则跳转到首页，首页默认为页面跳转配置项src数组的第一个数据项。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Lite
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    url: string;

    /**
     * 表示路由跳转时要同时传递到目标页面的数据，切换到其他页面时，当前接收的数据失效。跳转到目标页面后，使用router.getParams()获取传递的参数，此外，在类web范式中，参数也可以在页面中直接使用，如
     * this.keyValue(keyValue为跳转时params参数中的key值)，如果目标页面中已有该字段，则其值会被传入的字段值覆盖。
     * 
     * **说明：** 
     * 
     * params参数只能传递可序列化的参数，不能传递方法和系统接口返回的对象（例如，媒体接口定义和返回的PixelMap对象）。建议开发者提取系统接口返回的对象中需要被传递的基础类型属性，自行构造object类型对象进行传递。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Lite
     * @crossplatform [since 19]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    params?: Object;

    /**
     * 表示对应的页面是否可恢复，默认为true。当为true时，表示可恢复，当为false时，表示不可恢复。
     * 
     * **说明：** 
     * 
     * 当应用退到后台，并且在未来的某个时间点，由于系统资源限制等原因被系统杀死，如果某个页面被设置成可恢复，那么该应用再次被拉到前台后系统可以恢复出页面，详细说明请参考
     * [UIAbility备份恢复](docroot://application-models/ability-recover-guideline.md)。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Lite
     * @since 14 dynamic
     */
    recoverable?: boolean;
  }

  /**
   * 页面状态信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  interface RouterState {

    /**
     * 表示当前页面在页面栈中的索引。从栈底到栈顶，index从1开始递增。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    index: number;

    /**
     * 表示当前页面的名称，即对应文件名。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    name: string;

    /**
     * 表示当前页面的路径。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    path: string;

    /**
     * 表示当前页面携带的参数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    params: Object;
  }

  /**
   * 页面状态信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  interface EnableAlertOptions {

    /**
     * 询问对话框内容。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    message: string;
  }

  /**
   * 跳转到应用内的指定页面。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [pushUrl]{@link @ohos.arkui.UIContext:Router#pushUrl(options: router.RouterOptions)}替代。
   *
   * @param { RouterOptions } options - 跳转页面描述信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.arkui.UIContext:Router#pushUrl(options: router.RouterOptions)
   */
  function push(options: RouterOptions): void;

  /**
   * 跳转到应用内的指定页面。
   * 
   * > **说明：**
   * >
   * > - 从API version 9开始支持，从API version 18开始废弃，建议使用
   * > [pushUrl]{@link @ohos.arkui.UIContext:Router#pushUrl(options: router.RouterOptions, callback: AsyncCallback<void>)}
   * > 替代。pushUrl需先通过[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取
   * > [Router]{@link @ohos.arkui.UIContext}实例，然后通过该实例进行调用。
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的
   * > [Router]{@link @ohos.arkui.UIContext}对象。
   *
   * @param { RouterOptions } options - 跳转页面描述信息。
   * @param { AsyncCallback<void> } callback - 异常响应回调。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100002 - Uri error. The URI of the page to redirect is incorrect or does not exist
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#pushUrl(options: router.RouterOptions, callback: AsyncCallback<void>)
   */
  function pushUrl(options: RouterOptions, callback: AsyncCallback<void>): void;

  /**
   * 跳转到应用内的指定页面。
   * 
   * > **说明：**
   * >
   * > - 从API version 9开始支持，从API version 18开始废弃，建议使用
   * > [pushUrl]{@link @ohos.arkui.UIContext:Router#pushUrl(options: router.RouterOptions)}替代。pushUrl需先通过
   * > [UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取
   * > [Router]{@link @ohos.arkui.UIContext}实例，然后通过该实例进行调用。
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的
   * > [Router]{@link @ohos.arkui.UIContext}对象。
   *
   * @param { RouterOptions } options - 跳转页面描述信息。
   * @returns { Promise<void> } 异常返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100002 - Uri error. The URI of the page to redirect is incorrect or does not exist
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#pushUrl(options: router.RouterOptions)
   */
  function pushUrl(options: RouterOptions): Promise<void>;

  /**
   * 跳转到应用内的指定页面。
   * 
   * > **说明：**
   * >
   * > - 从API version 9开始支持，从API version 18开始废弃，建议使用
   * > [pushUrl]{@link @ohos.arkui.UIContext:Router#pushUrl(options: router.RouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>)}
   * > 替代。pushUrl需先通过[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取
   * > [Router]{@link @ohos.arkui.UIContext}实例，然后通过该实例进行调用。
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的
   * > [Router]{@link @ohos.arkui.UIContext}对象。
   *
   * @param { RouterOptions } options - 跳转页面描述信息。
   * @param { RouterMode } mode - 跳转页面使用的模式。
   * @param { AsyncCallback<void> } callback - 异常响应回调。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100002 - Uri error. The URI of the page to redirect is incorrect or does not exist
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#pushUrl(options: router.RouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>)
   */
  function pushUrl(options: RouterOptions, mode: RouterMode, callback: AsyncCallback<void>): void;

  /**
   * 跳转到应用内的指定页面。
   * 
   * > **说明：**
   * >
   * > - 从API version 9开始支持，从API version 18开始废弃，建议使用
   * > [pushUrl]{@link @ohos.arkui.UIContext:Router#pushUrl(options: router.RouterOptions, mode: router.RouterMode)}替代。
   * > pushUrl需先通过[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取
   * > [Router]{@link @ohos.arkui.UIContext}实例，然后通过该实例进行调用。
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的
   * > [Router]{@link @ohos.arkui.UIContext}对象。
   *
   * @param { RouterOptions } options - 跳转页面描述信息。
   * @param { RouterMode } mode - 跳转页面使用的模式。
   * @returns { Promise<void> } 异常返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100002 - Uri error. The URI of the page to redirect is incorrect or does not exist
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#pushUrl(options: router.RouterOptions, mode: router.RouterMode)
   */
  function pushUrl(options: RouterOptions, mode: RouterMode): Promise<void>;

  /**
   * 用应用内的某个页面替换当前页面，并销毁被替换的页面。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [replaceUrl]{@link @ohos.arkui.UIContext:Router#replaceUrl(options: router.RouterOptions)}替代。
   *
   * @param { RouterOptions } options - 替换页面描述信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.arkui.UIContext:Router#replaceUrl(options: router.RouterOptions)
   */
  function replace(options: RouterOptions): void;

  /**
   * 用应用内的某个页面替换当前页面，并销毁被替换的页面。
   * 
   * > **说明：**
   * >
   * > - 从API version 9开始支持，除Lite Wearable外，从API version 18开始废弃，建议使用
   * > [replaceUrl]{@link @ohos.arkui.UIContext:Router#replaceUrl(options: router.RouterOptions, callback: AsyncCallback<void>)}
   * > 替代。replaceUrl需先通过[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取
   * > [Router]{@link @ohos.arkui.UIContext}实例，然后通过该实例进行调用。
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的
   * > [Router]{@link @ohos.arkui.UIContext}对象。
   *
   * @param { RouterOptions } options - 替换页面描述信息。
   * @param { AsyncCallback<void> } callback - 异常响应回调。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the
   *     standard system.
   * @throws { BusinessError } 200002 - Uri error. The URI of the page to be used for replacement is incorrect or does
   *     not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 18
   * @reserved ["liteWearable"] [since 11]
   * @useinstead @ohos.arkui.UIContext:Router#replaceUrl(options: router.RouterOptions, callback: AsyncCallback<void>)
   */
  function replaceUrl(options: RouterOptions, callback: AsyncCallback<void>): void;

  /**
   * 用应用内的某个页面替换当前页面，并销毁被替换的页面。不支持设置页面转场动效，如需设置，推荐使用[Navigation组件](docroot://ui/arkts-navigation-architecture.md)。
   * 
   * > **说明：**
   * >
   * > - 从API version 9开始支持，除Lite Wearable外，从API version 18开始废弃，建议使用
   * > [replaceUrl]{@link @ohos.arkui.UIContext:Router#replaceUrl(options: router.RouterOptions)}替代。replaceUrl需先通过
   * > [UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取
   * > [Router]{@link @ohos.arkui.UIContext}实例，然后通过该实例进行调用。
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的
   * > [Router]{@link @ohos.arkui.UIContext}对象。
   *
   * @param { RouterOptions } options - 替换页面描述信息。
   * @returns { Promise<void> } 异常返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the
   *     standard system.
   * @throws { BusinessError } 200002 - Uri error. The URI of the page to be used for replacement is incorrect or does
   *     not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 18
   * @reserved ["liteWearable"] [since 11]
   * @useinstead @ohos.arkui.UIContext:Router#replaceUrl(options: router.RouterOptions)
   */
  function replaceUrl(options: RouterOptions): Promise<void>;

  /**
   * 用应用内的某个页面替换当前页面，并销毁被替换的页面。
   * 
   * > **说明：**
   * >
   * > - 从API version 9开始支持，除Lite Wearable外，从API version 18开始废弃，建议使用
   * > [replaceUrl]{@link @ohos.arkui.UIContext:Router#replaceUrl(options: router.RouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>)}
   * > 替代。replaceUrl需先通过[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取
   * > [Router]{@link @ohos.arkui.UIContext}实例，然后通过该实例进行调用。
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的
   * > [Router]{@link @ohos.arkui.UIContext}对象。
   *
   * @param { RouterOptions } options - 替换页面描述信息。
   * @param { RouterMode } mode - 跳转页面使用的模式。
   * @param { AsyncCallback<void> } callback - 异常响应回调。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the
   *     standard system.
   * @throws { BusinessError } 200002 - Uri error. The URI of the page to be used for replacement is incorrect or does
   *     not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 18
   * @reserved ["liteWearable"] [since 11]
   * @useinstead @ohos.arkui.UIContext:Router#replaceUrl(options: router.RouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>)
   */
  function replaceUrl(options: RouterOptions, mode: RouterMode, callback: AsyncCallback<void>): void;

  /**
   * 用应用内的某个页面替换当前页面，并销毁被替换的页面。
   * 
   * > **说明：**
   * >
   * > - 从API version 9开始支持，除Lite Wearable外，从API version 18开始废弃，建议使用
   * > [replaceUrl]{@link @ohos.arkui.UIContext:Router#replaceUrl(options: router.RouterOptions, mode: router.RouterMode)}
   * > 替代。replaceUrl需先通过[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取
   * > [Router]{@link @ohos.arkui.UIContext}实例，然后通过该实例进行调用。
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的
   * > [Router]{@link @ohos.arkui.UIContext}对象。
   *
   * @param { RouterOptions } options - 替换页面描述信息。
   * @param { RouterMode } mode - 跳转页面使用的模式。
   * @returns { Promise<void> } 异常返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Failed to get the delegate. This error code is thrown only in the standard
   *     system.
   * @throws { BusinessError } 200002 - Uri error. The URI of the page to be used for replacement is incorrect or does
   *     not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 18
   * @reserved ["liteWearable"] [since 11]
   * @useinstead @ohos.arkui.UIContext:Router#replaceUrl(options: router.RouterOptions, mode: router.RouterMode)
   */
  function replaceUrl(options: RouterOptions, mode: RouterMode): Promise<void>;

  /**
   * 返回上一页面或指定的页面，会删除当前页面与指定页面之间的所有页面。
   * 
   * > **说明：**
   * >
   * > - 从API version 8开始支持，从API version 18开始废弃，建议使用
   * > [back]{@link @ohos.arkui.UIContext:Router#back(options?: router.RouterOptions)}替代。back需先通过
   * > [UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取
   * > [Router]{@link @ohos.arkui.UIContext}实例，然后通过该实例进行调用。
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的
   * > [Router]{@link @ohos.arkui.UIContext}对象。
   *
   * @param { RouterOptions } options - 返回页面描述信息，其中参数url指路由跳转时会返回到指定url的界面，如果页面栈上没有url页面，则不响应该情况。如果url未设置，则返回上一页，页面不会重新构
   *     建，页面栈里面的page不会回收，出栈后会被回收。back是返回接口，url设置为特殊值"/"不生效。如果是用命名路由的方式跳转，传入的url需是命名路由的名称。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#back(options?: router.RouterOptions)
   */
  function back(options?: RouterOptions): void;

  /**
   * 返回指定的页面，会删除当前页面与指定页面之间的所有页面。
   * 
   * > **说明：**
   * >
   * > - 从API version 12开始支持，从API version 18开始废弃，建议使用
   * > [back]{@link @ohos.arkui.UIContext:Router#back(index: number, params?: Object)}替代。back需先通过
   * > [UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取
   * > [Router]{@link @ohos.arkui.UIContext}实例，然后通过该实例进行调用。
   * >
   * > - 从API version 12开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的
   * > [Router]{@link @ohos.arkui.UIContext}对象。
   *
   * @param { number } index - 跳转目标页面的索引值。 从栈底到栈顶，index从1开始递增。
   * @param { Object } [params] - 页面返回时携带的参数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#back(index: number, params?: Object)
   */
  function back(index: number, params?: Object): void;

  /**
   * 清空页面栈中的所有历史页面，仅保留当前页面作为栈顶页面。
   * 
   * > **说明：**
   * >
   * > - 从API version 8开始支持，从API version 18开始废弃，建议使用[clear]{@link @ohos.arkui.UIContext:Router#clear}替代。clear需先通过
   * > [UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取
   * > [Router]{@link @ohos.arkui.UIContext}实例，然后通过该实例进行调用。
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的
   * > [Router]{@link @ohos.arkui.UIContext}对象。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#clear
   */
  function clear(): void;

  /**
   * 获取当前在页面栈内的页面数量。
   * 
   * > **说明：**
   * >
   * > - 从API version 8开始支持，从API version 18开始废弃，建议使用[getLength]{@link @ohos.arkui.UIContext:Router#getLength}替代。
   * > getLength需先通过[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取
   * > [Router]{@link @ohos.arkui.UIContext}实例，然后通过该实例进行调用。
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的
   * > [Router]{@link @ohos.arkui.UIContext}对象。
   *
   * @returns { string } 页面数量，页面栈支持最大数值是32。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#getLength
   */
  function getLength(): string;

  /**
   * 获取栈顶页面的状态信息。
   * 
   * > **说明：**
   * >
   * > - 从API version 8开始支持，从API version 18开始废弃，建议使用[getState]{@link @ohos.arkui.UIContext:Router#getState}替代。getLength需
   * > 先通过[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取
   * > [Router]{@link @ohos.arkui.UIContext}实例，然后通过该实例进行调用。
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的
   * > [Router]{@link @ohos.arkui.UIContext}对象。
   *
   * @returns { RouterState } 页面状态信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#getState
   */
  function getState(): RouterState;

  /**
   * 通过索引值获取对应页面的状态信息。
   * 
   * > **说明：**
   * >
   * > - 从API version 12开始支持，从API version 18开始废弃，建议使用
   * > [getStateByIndex]{@link @ohos.arkui.UIContext:Router#getStateByIndex}替代。getStateByIndex需先通过
   * > [UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取
   * > [Router]{@link @ohos.arkui.UIContext}实例，然后通过该实例进行调用。
   * >
   * > - 从API version 12开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的
   * > [Router]{@link @ohos.arkui.UIContext}对象。
   *
   * @param { number } index - 表示要获取的页面索引。从栈底到栈顶，index从1开始递增。
   * @returns { RouterState | undefined } State information about the target page; **undefined** if the specified index
   *     does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#getStateByIndex
   */
  function getStateByIndex(index: number): RouterState | undefined;

  /**
   * 通过url获取对应页面的状态信息。
   * 
   * > **说明：**
   * >
   * > - 从API version 12开始支持，从API version 18开始废弃，建议使用[getStateByUrl]{@link @ohos.arkui.UIContext:Router#getStateByUrl}替
   * > 代。getStateByUrl需先通过[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取
   * > [Router]{@link @ohos.arkui.UIContext}实例，然后通过该实例进行调用。
   * >
   * > - 从API version 12开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的
   * > [Router]{@link @ohos.arkui.UIContext}对象。
   *
   * @param { string } url - 表示要获取对应页面信息的url。
   * @returns { Array<RouterState> } 页面状态信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#getStateByUrl
   */
  function getStateByUrl(url: string): Array<RouterState>;

  /**
   * 开启页面返回询问对话框。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [showAlertBeforeBackPage]{@link @ohos.arkui.UIContext:Router#showAlertBeforeBackPage}替代。
   *
   * @param { EnableAlertOptions } options - 文本弹窗信息描述。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.arkui.UIContext:Router#showAlertBeforeBackPage
   */
  function enableAlertBeforeBackPage(options: EnableAlertOptions): void;

  /**
   * 开启页面返回询问对话框。
   * 
   * > **说明：**
   * >
   * > - 从API version 9开始支持，从API version 18开始废弃，建议使用
   * > [showAlertBeforeBackPage]{@link @ohos.arkui.UIContext:Router#showAlertBeforeBackPage}替代。showAlertBeforeBackPage需先
   * > 通过[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取
   * > [Router]{@link @ohos.arkui.UIContext}实例，然后通过该实例进行调用。
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的
   * > [Router]{@link @ohos.arkui.UIContext}对象。
   *
   * @param { EnableAlertOptions } options - 文本弹窗信息描述。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#showAlertBeforeBackPage
   */
  function showAlertBeforeBackPage(options: EnableAlertOptions): void;

  /**
   * 禁用页面返回询问对话框。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [hideAlertBeforeBackPage]{@link @ohos.arkui.UIContext:Router#hideAlertBeforeBackPage}替代。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.arkui.UIContext:Router#hideAlertBeforeBackPage
   */
  function disableAlertBeforeBackPage(): void;

  /**
   * 禁用页面返回询问对话框。
   * 
   * > **说明：**
   * >
   * > - 从API version 9开始支持，从API version 18开始废弃，建议使用
   * > [hideAlertBeforeBackPage]{@link @ohos.arkui.UIContext:Router#hideAlertBeforeBackPage}替代。hideAlertBeforeBackPage需先
   * > 通过[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取
   * > [Router]{@link @ohos.arkui.UIContext}实例，然后通过该实例进行调用。
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的
   * > [Router]{@link @ohos.arkui.UIContext}对象。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#hideAlertBeforeBackPage
   */
  function hideAlertBeforeBackPage(): void;

  /**
   * 获取发起跳转的页面往当前页传入的参数。
   * 
   * > **说明：**
   * >
   * > - 从API version 8开始支持，从API version 18开始废弃，建议使用[getParams]{@link @ohos.arkui.UIContext:Router#getParams}替代。
   * > getParams需先通过[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取
   * > [Router]{@link @ohos.arkui.UIContext}实例，然后通过该实例进行调用。
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的
   * > [Router]{@link @ohos.arkui.UIContext}对象。
   * >
   * > getParams只获取当前页面的参数，并不会清除页面关联的参数。
   *
   * @returns { Object } 发起跳转的页面往当前页传入的参数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#getParams
   */
  function getParams(): Object;

  /**
   * 命名路由跳转选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  interface NamedRouterOptions {

    /**
     * 表示目标命名路由页面的name。 
     * 
     * **系统能力：** SystemCapability.ArkUI.ArkUI.Full
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    name: string;

    /**
     * 表示路由跳转时要同时传递到目标页面的数据。跳转到目标页面后，使用router.getParams()获取传递的参数，此外，在类web范式中，参数也可以在页面中直接使用，如this.keyValue(keyValue为跳转时
     * params参数中的key值)，如果目标页面中已有该字段，则其值会被传入的字段值覆盖。 
     * 
     * **说明：** 
     * 
     * params参数不能传递方法和系统接口返回的对象（例如，媒体接口定义和返回的PixelMap对象）。建议开发者提取系统接口返回的对象中需要被传递的基础类型属性，自行构造object类型对象进行传递。
     * 
     * **系统能力：** SystemCapability.ArkUI.ArkUI.Full
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    params?: Object;

    /**
     * 表示对应的页面是否可恢复，默认为true。当为true时，表示可恢复，当为false时，表示不可恢复。
     * 
     * **说明：** 
     * 
     * 当应用退到后台，并且在未来的某个时间点，由于系统资源限制等原因被系统杀死，如果某个页面被设置成可恢复，那么该应用再次被拉到前台后系统可以恢复出页面，详细说明请参考
     * [UIAbility备份恢复](docroot://application-models/ability-recover-guideline.md)。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Lite
     * @since 14 dynamic
     */
    recoverable?: boolean;
  }

  /**
   * 跳转到指定的命名路由页面。
   * 
   * > **说明：**
   * >
   * > - 从API version 10开始支持，从API version 18开始废弃，建议使用
   * > [pushNamedRoute]{@link @ohos.arkui.UIContext:Router#pushNamedRoute(options: router.NamedRouterOptions, callback: AsyncCallback<void>)}
   * > 替代。pushNamedRoute需先通过[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取
   * > [Router]{@link @ohos.arkui.UIContext}实例，然后通过该实例进行调用。
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的
   * > [Router]{@link @ohos.arkui.UIContext}对象。
   *
   * @param { NamedRouterOptions } options - 跳转页面描述信息。
   * @param { AsyncCallback<void> } callback - 异常响应回调。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#pushNamedRoute(options: router.NamedRouterOptions, callback: AsyncCallback<void>)
   */
  function pushNamedRoute(options: NamedRouterOptions, callback: AsyncCallback<void>): void;

  /**
   * 跳转到指定的命名路由页面。
   * 
   * > **说明：**
   * >
   * > - 从API version 10开始支持，从API version 18开始废弃，建议使用
   * > [pushNamedRoute]{@link @ohos.arkui.UIContext:Router#pushNamedRoute(options: router.NamedRouterOptions)}替代。
   * > pushNamedRoute需先通过[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取
   * > [Router]{@link @ohos.arkui.UIContext}实例，然后通过该实例进行调用。
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的
   * > [Router]{@link @ohos.arkui.UIContext}对象。
   *
   * @param { NamedRouterOptions } options - 跳转页面描述信息。
   * @returns { Promise<void> } 异常返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#pushNamedRoute(options: router.NamedRouterOptions)
   */
  function pushNamedRoute(options: NamedRouterOptions): Promise<void>;

  /**
   * 跳转到指定的命名路由页面。
   * 
   * > **说明：**
   * >
   * > - 从API version 10开始支持，从API version 18开始废弃，建议使用
   * > [pushNamedRoute]{@link @ohos.arkui.UIContext:Router#pushNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>)}
   * > 替代。pushNamedRoute需先通过[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取
   * > [Router]{@link @ohos.arkui.UIContext}实例，然后通过该实例进行调用。
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的
   * > [Router]{@link @ohos.arkui.UIContext}对象。
   *
   * @param { NamedRouterOptions } options - 跳转页面描述信息。
   * @param { RouterMode } mode - 跳转页面使用的模式。
   * @param { AsyncCallback<void> } callback - 异常响应回调。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#pushNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>)
   */
  function pushNamedRoute(options: NamedRouterOptions, mode: RouterMode, callback: AsyncCallback<void>): void;

  /**
   * 跳转到指定的命名路由页面。
   * 
   * > **说明：**
   * >
   * > - 从API version 10开始支持，从API version 18开始废弃，建议使用
   * > [pushNamedRoute]{@link @ohos.arkui.UIContext:Router#pushNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode)}
   * > 替代。pushNamedRoute需先通过[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取
   * > [Router]{@link @ohos.arkui.UIContext}实例，然后通过该实例进行调用。
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的
   * > [Router]{@link @ohos.arkui.UIContext}对象。
   *
   * @param { NamedRouterOptions } options - 跳转页面描述信息。
   * @param { RouterMode } mode - 跳转页面使用的模式。
   * @returns { Promise<void> } 异常返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#pushNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode)
   */
  function pushNamedRoute(options: NamedRouterOptions, mode: RouterMode): Promise<void>;

  /**
   * 用指定的命名路由页面替换当前页面，并销毁被替换的页面。
   * 
   * > **说明：**
   * >
   * > - 从API version 10开始支持，从API version 18开始废弃，建议使用
   * > [replaceNamedRoute]{@link @ohos.arkui.UIContext:Router#replaceNamedRoute(options: router.NamedRouterOptions, callback: AsyncCallback<void>)}
   * > 替代。replaceNamedRoute需先通过[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取
   * > [Router]{@link @ohos.arkui.UIContext}实例，然后通过该实例进行调用。
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的
   * > [Router]{@link @ohos.arkui.UIContext}对象。
   *
   * @param { NamedRouterOptions } options - 替换页面描述信息。
   * @param { AsyncCallback<void> } callback - 异常响应回调。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the
   *     standard system.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#replaceNamedRoute(options: router.NamedRouterOptions, callback: AsyncCallback<void>)
   */
  function replaceNamedRoute(options: NamedRouterOptions, callback: AsyncCallback<void>): void;

  /**
   * 用指定的命名路由页面替换当前页面，并销毁被替换的页面。
   * 
   * > **说明：**
   * >
   * > - 从API version 10开始支持，从API version 18开始废弃，建议使用
   * > [replaceNamedRoute]{@link @ohos.arkui.UIContext:Router#replaceNamedRoute(options: router.NamedRouterOptions)}替代。
   * > replaceNamedRoute需先通过[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取
   * > [Router]{@link @ohos.arkui.UIContext}实例，然后通过该实例进行调用。
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的
   * > [Router]{@link @ohos.arkui.UIContext}对象。
   *
   * @param { NamedRouterOptions } options - 替换页面描述信息。
   * @returns { Promise<void> } 异常返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the
   *     standard system.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#replaceNamedRoute(options: router.NamedRouterOptions)
   */
  function replaceNamedRoute(options: NamedRouterOptions): Promise<void>;

  /**
   * 用指定的命名路由页面替换当前页面，并销毁被替换的页面。
   * 
   * > **说明：**
   * >
   * > - 从API version 10开始支持，从API version 18开始废弃，建议使用
   * > [replaceNamedRoute]{@link @ohos.arkui.UIContext:Router#replaceNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>)}
   * > 替代。replaceNamedRoute需先通过[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取
   * > [Router]{@link @ohos.arkui.UIContext}实例，然后通过该实例进行调用。
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的
   * > [Router]{@link @ohos.arkui.UIContext}对象。
   *
   * @param { NamedRouterOptions } options - 替换页面描述信息。
   * @param { RouterMode } mode - 跳转页面使用的模式。
   * @param { AsyncCallback<void> } callback - 异常响应回调。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the
   *     standard system.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#replaceNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>)
   */
  function replaceNamedRoute(options: NamedRouterOptions, mode: RouterMode, callback: AsyncCallback<void>): void;

  /**
   * 用指定的命名路由页面替换当前页面，并销毁被替换的页面。
   * 
   * > **说明：**
   * >
   * > - 从API version 10开始支持，从API version 18开始废弃，建议使用
   * > [replaceNamedRoute]{@link @ohos.arkui.UIContext:Router#replaceNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode)}
   * > 替代。replaceNamedRoute需先通过[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取
   * > [Router]{@link @ohos.arkui.UIContext}实例，然后通过该实例进行调用。
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的
   * > [Router]{@link @ohos.arkui.UIContext}对象。
   *
   * @param { NamedRouterOptions } options - 替换页面描述信息。
   * @param { RouterMode } mode - 跳转页面使用的模式。
   * @returns { Promise<void> } 异常返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Failed to get the delegate. This error code is thrown only in the standard
   *     system.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead @ohos.arkui.UIContext:Router#replaceNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode)
   */
  function replaceNamedRoute(options: NamedRouterOptions, mode: RouterMode): Promise<void>;
}

export default router;