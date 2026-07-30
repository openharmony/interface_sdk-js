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
 * ###### 需要权限
 * 
 * 访问在线网页时需添加网络权限：ohos.permission.INTERNET，具体申请方式请参考[声明权限](docroot://security/AccessToken/declare-permissions.md)。
 * 
 * ###### 子组件
 * 
 * 无
 * 
 * ###### 属性
 * 
 * 不支持[通用属性]{@link ./@internal/component/ets/common}
 * 
 * ###### 事件
 * 
 * 不支持[通用事件]{@link ./@internal/component/ets/common}
 *
 * @file Defines the atomicService web component
 * @kit ArkUI
 */

import { Callback } from '@ohos.base';

/**
 * 为开发者提供满足定制化诉求的Web高阶组件，屏蔽原生Web组件中无需关注的接口，并提供JS扩展能力。
 * 
 * > **说明：**
 * >
 * > - 示例效果请以真机运行为准，当前DevEco Studio预览器不支持。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
@Component
export declare struct AtomicServiceWeb {
  /**
   * The address of the web page to be displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  src: ResourceStr;
  /**
   * Sets the controller of the AtomicServiceWeb.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @ObjectLink
  controller: AtomicServiceWebController;
  /**
   * Sets how to load HTTP and HTTPS content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  mixedMode?: MixedMode;
  /**
   * Sets the dark mode of Web.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  darkMode?: WebDarkMode;
  /**
   * Sets whether to enable forced dark algorithm when the web is in dark mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  forceDarkAccess?: boolean;
  /**
   * 设置嵌套滚动选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15 dynamiconly
   */
  @Prop
  nestedScroll?: NestedScrollOptions | NestedScrollOptionsExt;
  /**
   * The navPathStack to control page route in Navigation and NavDestination.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  navPathStack?: NavPathStack;
  /**
   * The callback method to invoke after page is back or destroyed if postMessage() is called in H5 page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onMessage?: Callback<OnMessageEvent>;
  /**
   * Triggered when the web page receives a web resource loading error.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onErrorReceive?: Callback<OnErrorReceiveEvent>;
  /**
   * Triggered when the web page receives a web resource loading HTTP error.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onHttpErrorReceive?: Callback<OnHttpErrorReceiveEvent>;
  /**
   * Triggered at the begin of web page loading.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onPageBegin?: Callback<OnPageBeginEvent>;
  /**
   * Triggered at the end of web page loading.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onPageEnd?: Callback<OnPageEndEvent>;
  /**
   * Triggered when The controller is bound to the web component, this controller must be a WebviewController.
   * This callback can not use the interface about manipulating web pages.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onControllerAttached?: Callback<void>;
  /**
   * Triggered when the resources loading is intercepted.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onLoadIntercept?: OnLoadInterceptCallback;
  /**
   * Triggered when the page loading progress changes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onProgressChange?: Callback<OnProgressChangeEvent>;
}

/**
 * 定义页面回退或销毁时触发该回调。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare interface OnMessageEvent {
  /**
   * The message data list.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  data: object[];
}

/**
 * 定义网页加载遇到错误时触发该回调。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare interface OnErrorReceiveEvent {
  /**
   * Web resource request of event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  request: WebResourceRequest;

  /**
   * Web resource error of event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  error: WebResourceError;
}

/**
 * 定义网页收到加载资源加载HTTP错误时触发。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare interface OnHttpErrorReceiveEvent {
  /**
   * Web resource request of event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  request: WebResourceRequest;

  /**
   * Web resource response of event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  response: WebResourceResponse;
}

/**
 * 定义网页加载开始时触发的函数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare interface OnPageBeginEvent {
  /**
   * The url of page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  url: string;
}

/**
 * 定义网页加载结束时触发的函数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare interface OnPageEndEvent {
  /**
   * The url of page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  url: string;
}

/**
 * 当资源加载被拦截时，加载拦截事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare interface OnLoadInterceptEvent {
  /**
   * Web resource request of event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  data: WebResourceRequest;
}

/**
 * 定义网页加载进度变化时触发该回调。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare interface OnProgressChangeEvent {
  /**
   * The new progress of the page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  newProgress: number;
}

/**
 * 通过AtomicServiceWebController可以控制AtomicServiceWeb组件各种行为。一个AtomicServiceWebController对象只能控制一个AtomicServiceWeb组件，且必须在
 * AtomicServiceWeb组件和AtomicServiceWebController绑定后，才能调用AtomicServiceWebController上的方法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
@Observed
export declare class AtomicServiceWebController {
  /**
   * 获取当前默认用户代理。
   *
   * @returns { string } 默认用户代理。默认User-Agent定义与使用场景请参考[User-Agent开发指导](docroot://web/web-default-userAgent.md)。
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *     AtomicServiceWeb component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  getUserAgent(): string;

  /**
   * 获取自定义用户代理。
   *
   * @returns { string } 用户自定义代理信息。默认User-Agent定义与使用场景请参考[User-Agent开发指导](docroot://web/web-default-userAgent.md)。
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *     AtomicServiceWeb component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  getCustomUserAgent(): string;

  /**
   * 设置自定义用户代理，会覆盖系统的用户代理。
   * 
   * 建议在onControllerAttached回调事件中设置User-Agent，设置方式请参考示例。不建议将User-Agent设置在onLoadIntercept回调事件中，会概率性出现设置失败。
   * 
   * > **说明：**
   * >
   * > 当Web组件src设置了url，且未在onControllerAttached回调事件中设置User-Agent。再调用setCustomUserAgent方法时，可能会出现加载的页面与实际设置User-Agent不符的异常现
   * > 象。
   *
   * @param { string } userAgent - 用户自定义代理信息。建议先使用[getUserAgent]{@link AtomicServiceWebController#getUserAgent}获取当前默认用户代
   *     理，在此基础上追加自定义用户代理信息。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *     AtomicServiceWeb component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  setCustomUserAgent(userAgent: string): void;

  /**
   * 调用此接口通知AtomicServiceWeb组件刷新网页。
   *
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *     AtomicServiceWeb component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  refresh(): void;

  /**
   * 按照历史栈，前进一个页面。一般结合[accessForward]{@link AtomicServiceWebController#accessForward}一起使用。
   *
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *     AtomicServiceWeb component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  forward(): void;

  /**
   * 按照历史栈，后退一个页面。一般结合[accessBackward]{@link AtomicServiceWebController#accessBackward}一起使用。
   *
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *     AtomicServiceWeb component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  backward(): void;

  /**
   * 当前页面是否可前进，即当前页面是否有前进历史记录。
   *
   * @returns { boolean } 可以前进返回true，否则返回false。
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *     AtomicServiceWeb component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  accessForward(): boolean;

  /**
   * 当前页面是否可后退，即当前页面是否有返回历史记录。
   *
   * @returns { boolean } 可以后退返回true，否则返回false。
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *     AtomicServiceWeb component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  accessBackward(): boolean;

  /**
   * 当前页面是否可前进或者后退给定的step步。
   *
   * @param { number } step - 要跳转的步数，正数代表前进，负数代表后退。
   * @returns { boolean } 页面是否可前进或者后退给定的step步。返回true表示可以前进或者后退，返回false表示不可以前进或后退。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *     AtomicServiceWeb component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  accessStep(step: number): boolean;

  /**
   * 加载指定的URL。
   *
   * @param { string | Resource } url - 需要加载的 URL。
   * @param { Array<WebHeader> } [headers] - URL的附加HTTP请求头。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *     AtomicServiceWeb component.
   * @throws { BusinessError } 17100002 - Invalid url.
   * @throws { BusinessError } 17100003 - Invalid resource path or file type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  loadUrl(url: string | Resource, headers?: Array<WebHeader>): void;
}

/**
 * Web组件返回的请求/响应头对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare interface WebHeader {
  /**
   * 请求/响应头的key。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  headerKey: string;

  /**
   * 请求/响应头的value。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  headerValue: string;
}

/**
 * 资源加载被拦截时触发该回调。
 *
 * @param { OnLoadInterceptEvent } event - 当资源加载被拦截时，加载拦截事件。
 * @returns { boolean } 返回资源是否被拦截，true表示被拦截。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export type OnLoadInterceptCallback = (event: OnLoadInterceptEvent) => boolean;