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
 * 访问在线网页时需添加网络权限：ohos.permission.INTERNET，
 * 具体申请方式请参考[声明权限](docroot://security/AccessToken/declare-permissions.md)。
 * 
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
 * 不支持[通用事件]{@link ./@internal/component/ets/common}。
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
 * > - 该组件从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
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
   * 网页资源地址，访问网络资源需要在AGC（AppGallery Connect）配置业务域名，访问本地资源仅支持包内文件（$rawfile）。
   * 不支持通过状态变量（例如@State）动态更新地址。加载的网页中支持通过JS SDK提供的接口调用系统能力，具体以JS SDK为准。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  src: ResourceStr;
  /**
   * 通过AtomicServiceWebController可以控制AtomicServiceWeb组件各种行为。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @ObjectLink
  controller: AtomicServiceWebController;
  /**
   * 设置是否允许加载超文本传输协议（HTTP）和超文本传输安全协议（HTTPS）混合内容，默认不允许加载HTTP和HTTPS混合内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  mixedMode?: MixedMode;
  /**
   * 设置Web深色模式，默认关闭。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  darkMode?: WebDarkMode;
  /**
   * 设置网页是否开启强制深色模式。true表示设置网页开启强制深色模式，false表示设置网页不开启强制深色模式。默认值：false。
   * 该属性仅在darkMode开启深色模式时生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  @Prop
  forceDarkAccess?: boolean;
  /**
   * 设置嵌套滚动选项。nestedScroll为NestedScrollOptions（向前、向后两个方向）类型时，
   * scrollForward、scrollBackward默认滚动选项为NestedScrollMode.SELF_FIRST。
   * nestedScroll为NestedScrollOptionsExt（上下左右四个方向）类型时，
   * scrollUp、scrollDown、scrollLeft、scrollRight默认滚动选项为NestedScrollMode.SELF_FIRST。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15 dynamiconly
   */
  @Prop
  nestedScroll?: NestedScrollOptions | NestedScrollOptionsExt;
  /**
   * 路由栈信息。当使用NavDestination作为页面的根容器时，需传入NavDestination容器对应的NavPathStack处理页面路由。默认值为空。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  navPathStack?: NavPathStack;
  /**
   * H5页面通过JS SDK的postMessage()发送消息后，Web组件对应的页面返回或销毁时，触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onMessage?: Callback<OnMessageEvent>;
  /**
   * 网页加载遇到错误时触发该回调。出于性能考虑，建议此回调中尽量执行简单逻辑。在无网络的情况下，触发此回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onErrorReceive?: Callback<OnErrorReceiveEvent>;
  /**
   * 网页加载资源时遇到HTTP错误（响应码>=400）触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onHttpErrorReceive?: Callback<OnHttpErrorReceiveEvent>;
  /**
   * 网页开始加载时触发该回调，且只在主frame触发，iframe或者frameset的内容加载时不会触发此回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onPageBegin?: Callback<OnPageBeginEvent>;
  /**
   * 网页加载完成时触发该回调，且只在主frame触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onPageEnd?: Callback<OnPageEndEvent>;
  /**
   * 当Controller成功绑定到Web组件时触发该回调，此回调中不能使用操作网页的相关接口。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onControllerAttached?: Callback<void>;
  /**
   * 当Web组件加载url之前触发该回调，用于判断是否阻止此次访问。默认允许加载。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onLoadIntercept?: OnLoadInterceptCallback;
  /**
   * 网页加载进度变化时触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onProgressChange?: Callback<OnProgressChangeEvent>;
}

/**
 * 定义页面返回或销毁时触发该回调。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare interface OnMessageEvent {
  /**
   * 消息列表。
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
   * 网页请求的封装信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  request: WebResourceRequest;

  /**
   * 网页加载资源错误的封装信息 。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  error: WebResourceError;
}

/**
 * 定义网页加载资源遇到HTTP错误时触发该回调。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare interface OnHttpErrorReceiveEvent {
  /**
   * 网页请求的封装信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  request: WebResourceRequest;

  /**
   * 资源响应的封装信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  response: WebResourceResponse;
}

/**
 * 定义网页加载开始时触发该回调。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare interface OnPageBeginEvent {
  /**
   * 页面的URL地址。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  url: string;
}

/**
 * 定义网页加载结束时触发该回调。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare interface OnPageEndEvent {
  /**
   * 页面的URL地址。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  url: string;
}

/**
 * 定义Web组件加载url之前触发的加载拦截事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare interface OnLoadInterceptEvent {
  /**
   * 网页请求的封装信息。
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
   * 新的加载进度，取值范围为0到100的整数。单位：%。
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
   * @returns { string } 自定义用户代理。默认User-Agent定义与使用场景请参考[User-Agent开发指导](docroot://web/web-default-userAgent.md)。
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
   * 建议在onControllerAttached回调事件中设置User-Agent，设置方式请参考示例。不建议将User-Agent设置在onLoadIntercept回调事件中，在部分场景下可能出现设置失败。
   * 
   * > **说明：**
   * >
   * > 当Web组件src设置了url，且未在onControllerAttached回调事件中设置User-Agent，再调用setCustomUserAgent方法时，可能会出现加载的页面与实际设置User-Agent不符的异常现
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
   * 通知AtomicServiceWeb组件刷新网页。
   *
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *     AtomicServiceWeb component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  refresh(): void;

  /**
   * 按照历史栈，前进一个页面。可结合[accessForward]{@link AtomicServiceWebController#accessForward}一起使用。
   *
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *     AtomicServiceWeb component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  forward(): void;

  /**
   * 按照历史栈，后退一个页面。可结合[accessBackward]{@link AtomicServiceWebController#accessBackward}一起使用。
   *
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *     AtomicServiceWeb component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  backward(): void;

  /**
   * 当前页面是否可前进，即当前页面是否有前进历史记录。可结合[forward]{@link AtomicServiceWebController#forward}一起使用，先通过此方法判断是否可前进，再调用forward执行前进操作。
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
   * 当前页面是否可后退，即当前页面是否有返回历史记录。可结合[backward]{@link AtomicServiceWebController#backward}一起使用，先通过此方法判断是否可后退，再调用backward执行后退
   * 操作。
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
   * @param { string | Resource } url - 需要加载的 URL，需为合法的URL格式。
   * @param { Array<WebHeader> } [headers] - URL的附加HTTP请求头。默认值为空数组，即不添加附加请求头。
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
 * 当Web组件加载url之前触发该回调，用于判断是否阻止此次访问。
 *
 * @param { OnLoadInterceptEvent } event - 当Web组件加载url之前触发的加载拦截事件。
 * @returns { boolean } 返回资源是否被拦截，true表示被拦截，false表示不被拦截。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export type OnLoadInterceptCallback = (event: OnLoadInterceptEvent) => boolean;