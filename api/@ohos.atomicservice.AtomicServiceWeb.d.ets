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
 * ###### Required Permissions
 * 
 * **ohos.permission.INTERNET**, required for accessing online web pages. For details about how to apply for a 
 * permission, see [Declaring Permissions](docroot://security/AccessToken/declare-permissions.md).
 * 
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
 * @file Defines the atomicService web component
 * @kit ArkUI
 */

import { Callback } from '@ohos.base';

/**
 * **AtomicServiceWeb** is an advanced web component offering customization to meet specific demands. It shields
 * irrelevant APIs from the native **Web** component and extends functionality through JavaScript capabilities.
 *
 * > **NOTE**
 * >
 * > - You can preview how this component looks on a real device, but not in DevEco Studio Previewer.
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
   * Sets the nested scroll options.
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
 * Represents the callback invoked when the page is navigated back or destroyed.
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
 * Represents the callback invoked when an error occurs during web page loading.
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
 * Represents the callback invoked when an HTTP error occurs during web page resource loading.
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
 * Represents the callback invoked when the web page loading begins.
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
 * Represents the callback invoked when the web page loading ends.
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
 * Represents the event triggered when resource loading is intercepted.
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
 * Represents the callback invoked when the web page loading progress changes.
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
 * Implements an **AtomicServiceWebController** object for controlling the behavior of the **AtomicServiceWeb**
 * component. An **AtomicServiceWebController** can control only one **AtomicServiceWeb** component, and the APIs on the
 * **AtomicServiceWebController** can be called only after it has been bound to the target **AtomicServiceWeb**
 * component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
@Observed
export declare class AtomicServiceWebController {
  /**
   * Obtains the default user agent of this web page.
   *
   * @returns { string } Default user agent. For details about the specifications and usage scenarios, see
   *     [Developing User-Agent](docroot://web/web-default-userAgent.md).
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *     AtomicServiceWeb component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  getUserAgent(): string;

  /**
   * Obtains a custom user agent.
   *
   * @returns { string } Information about the custom user agent. For details about the specifications and usage
   *     scenarios, see [Developing User-Agent](docroot://web/web-default-userAgent.md).
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *     AtomicServiceWeb component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  getCustomUserAgent(): string;

  /**
   * Sets a custom user agent, which will override the default user agent.
   *
   * Set the user agent in the **onControllerAttached** callback to ensure that it takes effect. For details about the
   * setting, see the example. Avoid setting the user agent in **onLoadIntercept**. Otherwise, the setting may fail
   * occasionally.
   *
   * > **NOTE**
   * >
   * > If a URL is set for the **Web** component **src** and **UserAgent** is not set in the **onControllerAttached**
   * > callback, calling **setCustomUserAgent** may cause mismatches between the loaded page and the intended user
   * > agent.
   *
   * @param { string } userAgent - Information about the custom user agent. It is recommended that you obtain the
   *     current default user agent through [getUserAgent]{@link AtomicServiceWebController#getUserAgent} and then
   *     customize the obtained user agent.
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
   * Refreshes the web page.
   *
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *     AtomicServiceWeb component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  refresh(): void;

  /**
   * Moves to the next page based on the history stack. This API is generally used together with
   * [accessForward]{@link AtomicServiceWebController#accessForward}.
   *
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *     AtomicServiceWeb component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  forward(): void;

  /**
   * Moves to the previous page based on the history stack. This API is generally used together with
   * [accessBackward]{@link AtomicServiceWebController#accessBackward}.
   *
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *     AtomicServiceWeb component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  backward(): void;

  /**
   * Checks whether going to the next page can be performed on this page.
   *
   * @returns { boolean } Returns **true** if going to the next page can be performed on the current page; returns
   *     **false** otherwise.
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *     AtomicServiceWeb component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  accessForward(): boolean;

  /**
   * Checks whether going to the previous page can be performed on this page.
   *
   * @returns { boolean } Returns **true** if going to the previous page can be performed on the current page; returns
   *     **false** otherwise.
   * @throws { BusinessError } 17100001 - Init error. The AtomicServiceWebController must be associated with a
   *     AtomicServiceWeb component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  accessBackward(): boolean;

  /**
   * Checks whether this page can navigate forward or backward by the specified number of steps.
   *
   * @param { number } step - Number of the steps to take. A positive number means to go forward, and a negative number
   *     means to go backward.
   * @returns { boolean } Whether the page can navigate forward or backward by the specified number of steps. Returns
   *     **true** if navigation can be performed on the current page; returns **false** otherwise.
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
   * Loads a specified URL.
   *
   * @param { string | Resource } url - URL to load.
   * @param { Array<WebHeader> } [headers] - Additional HTTP request header of the URL.
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
 * Describes the request/response header returned by the **AtomicServiceWeb** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare interface WebHeader {
  /**
   * Key of the request/response header.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  headerKey: string;

  /**
   * Value of the request/response header.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  headerValue: string;
}

/**
 * Represents the callback invoked when resource loading is intercepted.
 *
 * @param { OnLoadInterceptEvent } event - Event triggered when resource loading is intercepted.
 * @returns { boolean } Whether resource loading is intercepted. The value **true** indicates that resource loading is
 *     intercepted.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export type OnLoadInterceptCallback = (event: OnLoadInterceptEvent) => boolean;