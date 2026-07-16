/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
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
 * The **Router** module provides APIs to access pages through URIs.
 * 
 * > **NOTE**
 * >
 * > - The APIs of this module are no longer maintained since API version 8. You are advised to use 
 * > [@ohos.router]{@link @ohos.router:router} instead.
 *
 * @file Page Routing
 * @kit ArkUI
 */

/**
 * Defines the page routing parameters.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @since 3 dynamiconly
 * @deprecated since 8
 * @reserved ["liteWearable"]
 * @useinstead ohos.router#RouterOptions
 */
export interface RouterOptions {
  /**
   * URI of the target page, in either of the following formats:
   *
   * 1. Absolute path, which is provided by the page list in the **config.json** file. Examples:
   *
   * - pages/index/index
   * - pages/detail/detail
   *
   * 2. Specific path. If the URI is a slash (/), the home page is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.router.RouterOptions#url
   */
  uri: string;

  /**
   * Data that needs to be passed to the target page during redirection. The target page can use **router.getParams()**
   * to obtain the passed parameters, for example, **this.keyValue** (**keyValue** is the value of a key in **params**).
   * In the web-like paradigm, these parameters can be directly used on the target page. If the field specified by
   * **key** already exists on the target page, the passed value of the key will be displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.router.RouterOptions#params
   */
  params?: Object;
}

/**
 * Defines the parameters for routing back.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7 dynamiconly
 * @deprecated since 8
 * @useinstead ohos.router#RouterOptions
 */
export interface BackRouterOptions {
  /**
   * URI of the page to return to. If the specified page does not exist in the page stack, the application does not
   * respond. If this parameter is not set, the application returns to the previous page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router.RouterOptions#url
   */
  uri?: string;

  /**
   * Data that needs to be passed to the target page during redirection.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 7 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.router.RouterOptions#params
   */
  params?: Object;
}

/**
 * Defines the routing state.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 3 dynamiconly
 * @deprecated since 8
 * @useinstead ohos.router#RouterState
 */
export interface RouterState {
  /**
   * Index of the current page in the stack. The index starts from 1 from the bottom to the top of the stack.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router.RouterState#index
   */
  index: number;

  /**
   * Name of the current page, that is, the file name.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router.RouterState#name
   */
  name: string;

  /**
   * Path of the current page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router.RouterState#path
   */
  path: string;
}

/**
 * Defines the **EnableAlertBeforeBackPage** parameter.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 6 dynamiconly
 * @deprecated since 8
 * @useinstead ohos.router#EnableAlertOptions
 */
export interface EnableAlertBeforeBackPageOptions {
  /**
   * Content displayed in the confirm dialog box.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router.EnableAlertOptions#message
   */
  message: string;

  /**
   * Called when the **OK** button in the confirm dialog box is clicked. **errMsg** indicates the returned information.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router#EnableAlertOptions
   */
  success?: (errMsg: string) => void;

  /**
   * Called when the **Cancel** button in the confirm dialog box is clicked. **errMsg** indicates the returned
   * information.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router#EnableAlertOptions
   */
  cancel?: (errMsg: string) => void;

  /**
   * Called when the dialog box is closed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router#EnableAlertOptions
   */
  complete?: () => void;
}

/**
 * Defines the **DisableAlertBeforeBackPage** parameter.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 6 dynamiconly
 * @deprecated since 8
 * @useinstead ohos.router#RouterOptions
 */
export interface DisableAlertBeforeBackPageOptions {
  /**
   * Called when the dialog box is closed. **errMsg** indicates the returned information.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router#RouterOptions
   */
  success?: (errMsg: string) => void;

  /**
   * Called when the dialog box fails to be closed. **errMsg** indicates the returned information.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router#RouterOptions
   */
  cancel?: (errMsg: string) => void;

  /**
   * Called when the dialog box is closed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router#RouterOptions
   */
  complete?: () => void;
}

/**
 * List of routing parameters.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7 dynamiconly
 * @deprecated since 8
 * @useinstead ohos.router.RouterOptions#params
 */
type ParamsInterface = {
  [key: string]: Object;
};

/**
 * The **Router** module provides APIs to access pages through URIs.
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @since 3 dynamiconly
 * @deprecated since 8
 * @useinstead ohos.router#router
 */
export default class Router {
  /**
   * Navigates to a specified page in the application.
   *
   * > **NOTE**
   * >
   * > The page routing stack supports a maximum of 32 pages.
   *
   * @param { RouterOptions } options - Page routing parameters. For details, see **RouterOptions**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router.router#push
   */
  static push(options: RouterOptions): void;

  /**
   * Replaces the current page with another one in the application and destroys the current page.
   *
   * @param { RouterOptions } options - Page routing parameters. For details, see **RouterOptions**.
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 3 dynamiconly
   * @deprecated since 8
   * @reserved ["liteWearable"]
   * @useinstead ohos.router.router#replace
   */
  static replace(options: RouterOptions): void;

  /**
   * Returns to the previous or a specified page.
   *
   * > **NOTE**
   * >
   * > In the example, the **uri** field indicates the page route, which is specified by the **pages** list in the
   * > configuration file.
   *
   * @param { BackRouterOptions } options - For details, see **BackRouterOptions**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router.router#back
   */
  static back(options?: BackRouterOptions): void;

  /**
   * Obtains parameter information about the current page.
   *
   * @returns { ParamsInterface } For details, see **ParamsInterface**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router.router#getParams
   */
  static getParams(): ParamsInterface;

  /**
   * Clears all historical pages in the stack and retains only the current page at the top of the stack.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router.router#clear
   */
  static clear(): void;

  /**
   * Obtains the number of pages in the current stack.
   *
   * @returns { string } Number of pages in the stack. The maximum value is **32**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router.router#getLength
   */
  static getLength(): string;

  /**
   * Obtains state information about the current page.
   *
   * @returns { RouterState } For details, see **RouterState**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 3 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router.router#getState
   */
  static getState(): RouterState;

  /**
   * Enables the display of a confirm dialog box before returning to the previous page.
   *
   * @param { EnableAlertBeforeBackPageOptions } options - For details, see **EnableAlertBeforeBackPageOptions**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router.router#showAlertBeforeBackPage
   */
  static enableAlertBeforeBackPage(options: EnableAlertBeforeBackPageOptions): void;

  /**
   * Disables the display of a confirm dialog box before returning to the previous page.
   *
   * @param { DisableAlertBeforeBackPageOptions } options - For details, see **DisableAlertBeforeBackPageOptions**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.router.router#hideAlertBeforeBackPage
   */
  static disableAlertBeforeBackPage(options?: DisableAlertBeforeBackPageOptions): void;
}