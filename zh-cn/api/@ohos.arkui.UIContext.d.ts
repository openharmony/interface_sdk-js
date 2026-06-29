/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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

import font from './@ohos.font';

import mediaQuery from './@ohos.mediaquery';

import type inspector from './@ohos.arkui.inspector';

import promptAction, { LevelOrder, LevelMode } from './@ohos.promptAction';

import router from './@ohos.router';

import dialog from './@ohos.arkui.dialog';

import type componentUtils from './@ohos.arkui.componentUtils';

import { ComponentContent, FrameNode, Frame, LengthMetrics, Edges } from './@ohos.arkui.node';

import type { AnimatorOptions, AnimatorResult } from './@ohos.animator';

import type observer from './@ohos.arkui.observer';

import { SimpleAnimatorOptions } from './@ohos.animator';

import type { Callback, AsyncCallback } from './@ohos.base';

import { MeasureOptions } from './@ohos.measure';

import type componentSnapshot from './@ohos.arkui.componentSnapshot';

import type dragController from './@ohos.arkui.dragController';

import image from './@ohos.multimedia.image';

import type common from './@ohos.app.ability.common';

import type pointer from './@ohos.multimodalInput.pointer';

/**
* class Font
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export class Font {

  /**
   * Register a customized font in the FontManager.
   *
   * @param { font.FontOptions } options - FontOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  registerFont(options: font.FontOptions): void;

  /**
   * 获取系统支持的字体列表。
   *
   * @returns { Array<string> } 字体名称列表
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getSystemFontList(): Array<string>;

  /**
   * 根据字体名称获取字体详细信息。
   *
   * @param { string } fontName - 字体名称
   * @returns { font.FontInfo } Returns the font info
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getFontByName(fontName: string): font.FontInfo;
}

/**
* class MediaQuery
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export class MediaQuery {

  /**
   * Sets the media query criteria and returns the corresponding listening handle
   *
   * @param { string } condition - media conditions
   * @returns { mediaQuery.MediaQueryListener } the corresponding listening handle
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  matchMediaSync(condition: string): mediaQuery.MediaQueryListener;
}

/**
* class UIInspector
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export class UIInspector {

  /**
   * Sets the component after layout or draw criteria and returns the corresponding listening handle
   *
   * @param { string } id - ID of the target component, set using the universal attributes [id]{@link CommonMethod#id}
   *     or [key]{@link CommonMethod#key}.
   * @returns { inspector.ComponentObserver } Component observer, which is used to register or unregister listeners
   *     for completion of component layout or drawing display.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  createComponentObserver(id: string): inspector.ComponentObserver;

  /**
   * 创建当前节点或者当前节点的子节点的布局和送显的事件监听句柄。
   *
   * @param { string | number } id - 当前节点的inspector key或者唯一id。
   * @returns { inspector.ComponentObserver } Component observer, which is used to register or unregister listeners
   *     for completion of component layout or drawing display.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  createComponentObserver(id: string | number): inspector.ComponentObserver;
}

/**
* class Router
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export class Router {

  /**
   * Navigates to a specified page in the application.
   *
   * @param { router.RouterOptions } options - Page routing parameters.
   * @param { AsyncCallback<void> } callback - - Callback for the router navigation result.<br>If the navigation succeeds,
   *     **error** is **undefined**. If the navigation fails, **error** is the error object returned by the system.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100002 - Uri error. The URI of the page to redirect is incorrect or does not exist
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  pushUrl(options: router.RouterOptions, callback: AsyncCallback<void>): void;

  /**
   * Navigates to a specified page in the application. This API uses a promise to return the result.
   *
   * @param { router.RouterOptions } options - Page routing parameters.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100002 - Uri error. The URI of the page to redirect is incorrect or does not exist
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  pushUrl(options: router.RouterOptions): Promise<void>;

  /**
   * Navigates to a specified page in the application.
   *
   * @param { router.RouterOptions } options - Page routing parameters.
   * @param { router.RouterMode } mode - Routing mode.
   * @param { AsyncCallback<void> } callback - - Callback for the router navigation result.<br>If the navigation succeeds,
   *     **error** is **undefined**. If the navigation fails, **error** is the error object returned by the system.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100002 - Uri error. The URI of the page to redirect is incorrect or does not exist
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  pushUrl(options: router.RouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void;

  /**
   * Navigates to a specified page in the application. This API uses a promise to return the result.
   *
   * @param { router.RouterOptions } options - Page routing parameters.
   * @param { router.RouterMode } mode - Routing mode.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100002 - Uri error. The URI of the page to redirect is incorrect or does not exist
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  pushUrl(options: router.RouterOptions, mode: router.RouterMode): Promise<void>;

  /**
   * Replaces the current page with another one in the application. The current page is destroyed after replacement.
   *
   * @param { router.RouterOptions } options - Description of the new page.
   * @param { AsyncCallback<void> } callback - - Callback for the router navigation result.<br>If the navigation succeeds,
   *     **error** is **undefined**. If the navigation fails, **error** is the error object returned by the system.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the
   *     standard system.
   * @throws { BusinessError } 200002 - Uri error. The URI of the page to be used for replacement is incorrect or does
   *     not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  replaceUrl(options: router.RouterOptions, callback: AsyncCallback<void>): void;

  /**
   * Replaces the current page with another one in the application. The current page is destroyed after replacement.
   *
   * @param { router.RouterOptions } options - Description of the new page.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the
   *     standard system.
   * @throws { BusinessError } 200002 - Uri error. The URI of the page to be used for replacement is incorrect or does
   *     not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  replaceUrl(options: router.RouterOptions): Promise<void>;

  /**
   * Replaces the current page with another one in the application. The current page is destroyed after replacement.
   *
   * @param { router.RouterOptions } options - Description of the new page.
   * @param { router.RouterMode } mode - Routing mode.
   * @param { AsyncCallback<void> } callback - - Callback for the router navigation result.<br>If the navigation succeeds,
   *     **error** is **undefined**. If the navigation fails, **error** is the error object returned by the system.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the
   *     standard system.
   * @throws { BusinessError } 200002 - Uri error. The URI of the page to be used for replacement is incorrect or does
   *     not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  replaceUrl(options: router.RouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void;

  /**
   * Replaces the current page with another one in the application. The current page is destroyed after replacement.
   *
   * @param { router.RouterOptions } options - Description of the new page.
   * @param { router.RouterMode } mode - Routing mode.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Failed to get the delegate. This error code is thrown only in the standard
   *     system.
   * @throws { BusinessError } 200002 - Uri error. The URI of the page to be used for replacement is incorrect or does
   *     not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  replaceUrl(options: router.RouterOptions, mode: router.RouterMode): Promise<void>;

  /**
   * Returns to the previous page or a specified page.
   *
   * @param { router.RouterOptions } options - Description of the target page. The **url** parameter specifies the URL
   *     of the page to return to. If the page with the specified URL does not exist in the navigation stack, no action
   *     is performed. If the navigation stack contains the corresponding URL, the application returns to the page with.
   *     the largest index.<br>If no URL is set, the application returns to the previous page, and the page is not
   *     rebuilt. The page in the page stack is not reclaimed. It will be reclaimed after being popped up.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  back(options?: router.RouterOptions): void;

  /**
   * Returns to the specified page.
   *
   * @param { number } index - Index of the target page to navigate to.
   *     <br>Value range: [0, +∞).
   * @param { Object } [params] - Parameters carried when returning to the page.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  back(index: number, params?: Object): void;

  /**
   * Clears all historical pages and retains only the current page at the top of the stack.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  clear(): void;

  /**
   * Obtains the number of pages in the current stack.
   *
   * @returns { string } Number of pages in the stack. The maximum value is **32**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @deprecated since 23
   * @useinstead ohos.arkui.UIContext.Router#getStackSize
   */
  getLength(): string;

  /**
   * Obtains information about the current page state.
   *
   * @returns { number } Number of pages in the stack. The maximum value is **32**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  getStackSize(): number;

  /**
   * Obtains information about the current page state.
   *
   * @returns { router.RouterState } Page routing state.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getState(): router.RouterState;

  /**
   * Obtains page information by index.
   *
   * @param { number } index - Index of the target page.
   *     <br>Value range: [1, +∞).
   * @returns { router.RouterState | undefined } State information about the target page. **undefined** if the specified
   *     index does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getStateByIndex(index: number): router.RouterState | undefined;

  /**
   * Obtains page information by url.
   *
   * @param { string } url - URL of the target page.
   * @returns { Array<router.RouterState> } Page routing state.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getStateByUrl(url: string): Array<router.RouterState>;

  /**
   * Pop up alert dialog to ask whether to back.
   *
   * @param { router.EnableAlertOptions } options - Description of the dialog box.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  showAlertBeforeBackPage(options: router.EnableAlertOptions): void;

  /**
   * Hide alert before back page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  hideAlertBeforeBackPage(): void;

  /**
   * Obtains information about the current page params.
   *
   * @returns { Object } Parameters passed from the page that initiates redirection to the current page.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getParams(): Object;

  /**
   * Navigates to a page using the named route. This API uses a promise to return the result.
   *
   * @param { router.NamedRouterOptions } options - Page routing parameters.
   * @param { AsyncCallback<void> } callback - - Callback for the router navigation result.<br>If the navigation succeeds,
   *     **error** is **undefined**. If the navigation fails, **error** is the error object returned by the system.
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
   * @since 10 dynamic
   */
  pushNamedRoute(options: router.NamedRouterOptions, callback: AsyncCallback<void>): void;

  /**
   * Navigates to a page using the named route. This API uses a promise to return the result.
   *
   * @param { router.NamedRouterOptions } options - Page routing parameters.
   * @returns { Promise<void> } Promise that returns no value.
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
   * @since 10 dynamic
   */
  pushNamedRoute(options: router.NamedRouterOptions): Promise<void>;

  /**
   * Navigates to a page using the named route. This API uses a promise to return the result.
   *
   * @param { router.NamedRouterOptions } options - Page routing parameters.
   * @param { router.RouterMode } mode - Routing mode.
   * @param { AsyncCallback<void> } callback - - Callback for the router navigation result.<br>If the navigation succeeds,
   *     **error** is **undefined**. If the navigation fails, **error** is the error object returned by the system.
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
   * @since 10 dynamic
   */
  pushNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void;

  /**
   * Navigates to a page using the named route. This API uses a promise to return the result.
   *
   * @param { router.NamedRouterOptions } options - Page routing parameters.
   * @param { router.RouterMode } mode - Routing mode.
   * @returns { Promise<void> } Promise that returns no value.
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
   * @since 10 dynamic
   */
  pushNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode): Promise<void>;

  /**
   * Replaces the current page with another one in the application. The current page is destroyed after replacement.
   *
   * @param { router.NamedRouterOptions } options - Description of the new page.
   * @param { AsyncCallback<void> } callback - - Callback for the router navigation result.<br>If the navigation succeeds,
   *     **error** is **undefined**. If the navigation fails, **error** is the error object returned by the system.
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
   * @since 10 dynamic
   */
  replaceNamedRoute(options: router.NamedRouterOptions, callback: AsyncCallback<void>): void;

  /**
   * Replaces the current page with another one in the application. The current page is destroyed after replacement.
   *
   * @param { router.NamedRouterOptions } options - Description of the new page.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not
   *     string.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the
   *     standard system.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  replaceNamedRoute(options: router.NamedRouterOptions): Promise<void>;

  /**
   * Replaces the current page with another one in the application. The current page is destroyed after replacement.
   *
   * @param { router.NamedRouterOptions } options - Description of the new page.
   * @param { router.RouterMode } mode - Routing mode.
   * @param { AsyncCallback<void> } callback - - Callback for the router navigation result.<br>If the navigation succeeds,
   *     **error** is **undefined**. If the navigation fails, **error** is the error object returned by the system.
   * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not
   *     string.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the
   *     standard system.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  replaceNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void;

  /**
   * 用指定的命名路由页面替换当前页面，并销毁被替换的页面，使用Promise异步回调。与[replaceNamedRoute]{@link Router#replaceNamedRoute(options:
   * router.NamedRouterOptions)}相比，新增了mode参数，即支持设置跳转页面使用的模式。
   *
   * @param { router.NamedRouterOptions } options - 替换页面描述信息。
   * @param { router.RouterMode } mode - 跳转页面使用的模式。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
   * @since 10 dynamic
   */
  replaceNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode): Promise<void>;
}

/**
 * 组件属性、方法参数可使用CustomBuilderWithId类型来自定义UI描述，并且可以指定组件ID生成用户自定义组件。
 *
 * @param { number } id
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type CustomBuilderWithId = (id: number) => void;

/**
* Defines the target info.
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export interface TargetInfo {

  /**
   * ID of target node.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  id: string | number;

  /**
   * Unique ID that generated by framework. This ID used to constrain range of target.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  componentId?: number;
}

/**
* 背景取色参数配置。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic
 */
export interface BackgroundLuminanceSamplingConfigs {

  /**
   * 取色间隔，单位为毫秒，最小值180ms。
   *
   * 默认值：500
   *
   * @default 500
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  samplingInterval?: number;

  /**
   * 浅色亮度阈值：[0, 255]内的整数，设置的深色亮度阈值应小于浅色亮度阈值。
   *
   * 默认值：220
   *
   * @default 220
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  brightThreshold?: number;

  /**
   * 深色亮度阈值：[0, 255]内的整数，设置的深色亮度阈值应小于浅色亮度阈值。
   *
   * 默认值：150
   *
   * @default 150
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  darkThreshold?: number;

  /**
   * 相对组件的取色区域偏移，以组件自身的左上点为基准进行偏移计算。
   *
   * 默认使用组件自身区域
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  region?: Edges<LengthMetrics>;
}

/**
* 设置背景亮度取色参数、注册亮度变化监听回调、取消注册监听回调。
*
* > **说明：**
* >
* > 以下API需先使用UIContext中的[getLuminanceSampler]{@link UIContext#getLuminanceSampler}方法获取到LuminanceSampler对象，再通过该对象调用对应方法。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic
 */
export class LuminanceSampler {

  /**
   * 设置取色参数配置。当亮度阈值不在指定范围内或暗阈值大于亮阈值将抛出异常。
   *
   * @param { BackgroundLuminanceSamplingConfigs } configs - 取色参数。
   * @throws { BusinessError } 100001 - Internal error.
   *     <br> 1. Incorrect parameter values.
   *     <br> 2. Incorrect parameters types.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  setBackgroundLuminanceSamplingConfigs(configs: BackgroundLuminanceSamplingConfigs): void;

  /**
   * 设置取色监听回调。
   *
   * 回调的触发条件：背景亮度根据[setBackgroundLuminanceSamplingConfigs]{@link LuminanceSampler#setBackgroundLuminanceSamplingConfigs}
   * 接口设置的亮阈值和暗阈值分为三个区间，[0，暗阈值)，[暗阈值，亮阈值]，(亮阈值，255]。背景亮度所在区间发生变化（或者首次注册监听回调），并且距离上次取色的时间间隔达到设置的取色时间间隔时触发取色回调，并返回当前背景亮度。
   *
   * @param { Callback<number> } samplingCallback - 监听回调。触发同时返回当前背景亮度。<br/>**说明**：监听回调里不能调用
   *     [offBackgroundLuminanceChange]{@link LuminanceSampler#off}。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  onBackgroundLuminanceChange(samplingCallback: Callback<number>): void;

  /**
   * 取消注册取色监听回调。未指定回调时，取消所有监听。
   *
   * @param { Callback<number> } [samplingCallback] - 监听回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  offBackgroundLuminanceChange(samplingCallback?: Callback<number>): void;
}

/**
* class PromptAction
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export class PromptAction {

  /**
   * Displays the notification text.
   *
   * @param { promptAction.ShowToastOptions } options - Toast configuration options.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  showToast(options: promptAction.ShowToastOptions): void;

  /**
   * Displays the notification text.
   *
   * @param { promptAction.ShowToastOptions } options - Toast configuration options.
   * @returns { Promise<number> } Promise that returns the toast ID for use with **closeToast**.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  openToast(options: promptAction.ShowToastOptions): Promise<number>;

  /**
   * Close the notification text.
   *
   * @param { number } toastId - Toast ID returned from **openToast**.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 103401 - Cannot find the toast.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  closeToast(toastId: number): void;

  /**
   * 弹出对话框。
   *
   * @param { promptAction.ShowDialogOptions } options - 选项。
   * @param { AsyncCallback<promptAction.ShowDialogSuccessResponse> } callback - showDialog的回调。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  showDialog(options: promptAction.ShowDialogOptions, callback: AsyncCallback<promptAction.ShowDialogSuccessResponse>): void;

  /**
   * 弹出对话框。
   *
   * @param { promptAction.ShowDialogOptions } options - 选项。
   * @returns { Promise<promptAction.ShowDialogSuccessResponse> } Promise that returns the dialog box response.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  showDialog(options: promptAction.ShowDialogOptions): Promise<promptAction.ShowDialogSuccessResponse>;

  /**
   * Shows an action menu in the given settings. This API uses an asynchronous callback to return the result.
   *
   * @param { promptAction.ActionMenuOptions } options - Action menu options.
   * @param { promptAction.ActionMenuSuccessResponse } callback - Callback used to return the menu response.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10 dynamiconly
   * @deprecated since 11
   * @useinstead showActionMenu
   */
  showActionMenu(options: promptAction.ActionMenuOptions, callback: promptAction.ActionMenuSuccessResponse): void;

  /**
   * 显示给定设置中的操作菜单。该接口使用异步回调返回结果。
   *
   * @param { promptAction.ActionMenuOptions } options - 操作菜单选项。
   * @param { AsyncCallback<promptAction.ActionMenuSuccessResponse> } callback -  用于返回操作的回调
   *     菜单响应结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  showActionMenu(options: promptAction.ActionMenuOptions, callback: AsyncCallback<promptAction.ActionMenuSuccessResponse>): void;

  /**
   * 显示菜单。
   *
   * @param { promptAction.ActionMenuOptions } options - 选项。
   * @returns { Promise<promptAction.ActionMenuSuccessResponse> } callback - Promise that returns the action menu response.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  showActionMenu(options: promptAction.ActionMenuOptions): Promise<promptAction.ActionMenuSuccessResponse>;

  /**
   * 使用frameNode打开自定义对话框。
   *
   * @param { ComponentContent<T> } dialogContent - 自定义对话框的内容。
   * @param { promptAction.BaseDialogOptions } options - 选项。
   * @returns { Promise<void> } 函数返回的promise。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - Dialog content error. The ComponentContent is incorrect.
   * @throws { BusinessError } 103302 - Dialog content already exist. The ComponentContent has already been opened.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  openCustomDialog<T extends Object>(dialogContent: ComponentContent<T>, options?: promptAction.BaseDialogOptions): Promise<void>;

  /**
   * 打开带有frameNode和控制器的自定义对话框。
   *
   * isModal = true和showInSubWindow = true不能同时使用。
   *
   * @param { ComponentContent<T> } dialogContent - 自定义对话框的内容。
   * @param { promptAction.DialogController } controller - 对话框控制器。
   * @param { promptAction.BaseDialogOptions } options - 选项。
   * @returns { Promise<void> } 函数返回的promise。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - Dialog content error. The ComponentContent is incorrect.
   * @throws { BusinessError } 103302 - Dialog content already exist. The ComponentContent has already been opened.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  openCustomDialogWithController<T extends Object>(dialogContent: ComponentContent<T>, controller: promptAction.DialogController,
    options?: promptAction.BaseDialogOptions): Promise<void>;

  /**
   * Update the custom dialog with frameNode.
   *
   * @param { ComponentContent<T> } dialogContent - Content of the custom dialog box.
   * @param { promptAction.BaseDialogOptions } options - Dialog box style. Currently,
   *     only **alignment**, **offset**, **autoCancel**, and **maskColor** can be updated.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - Dialog content error. The ComponentContent is incorrect.
   * @throws { BusinessError } 103303 - Dialog content not found. The ComponentContent cannot be found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  updateCustomDialog<T extends Object>(dialogContent: ComponentContent<T>, options: promptAction.BaseDialogOptions): Promise<void>;

  /**
   * Closes a custom dialog box corresponding to dialogContent. This API uses a promise to return the result.
   *
   * @param { ComponentContent<T> } dialogContent -  Content of the custom dialog box.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - Dialog content error. The ComponentContent is incorrect.
   * @throws { BusinessError } 103303 - Dialog content not found. The ComponentContent cannot be found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  closeCustomDialog<T extends Object>(dialogContent: ComponentContent<T>): Promise<void>;

  /**
   * 打开自定义对话框。
   *
   * isModal = true和showInSubWindow = true不能同时使用。
   *   * @param { promptAction.CustomDialogOptions } options - 选项。   * @returns { Promise<number> } 返回将由closeCustomDialog使用的对话框ID。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  openCustomDialog(options: promptAction.CustomDialogOptions): Promise<number>;

  /**
   * 使用控制器显示自定义对话框。
   *
   * isModal = true和showInSubWindow = true不能同时使用。
   *
   * @param { CustomBuilder | CustomBuilderWithId } builder - 对话框生成器。
   * @param { promptAction.DialogController } [controller] - Controller of the custom dialog box. [since 26.0.0]
   * @param { promptAction.DialogOptions } [options] - Style of the custom dialog box.<br>
   *     Note: If both [isModal]{@link @ohos.promptAction:promptAction.BaseDialogOptions}
   *     and [showInSubWindow]{@link @ohos.promptAction:promptAction.BaseDialogOptions} in **BaseDialogOptions**
   *     are set to **true**, only **showInSubWindow** takes effect. In this case, the non-modal dialog box is displayed
   *     without mask in the subwindow. [since 26.0.0]
   * @returns { Promise<number> } Promise Promise used to return the custom dialog box ID.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  presentCustomDialog(builder: CustomBuilder | CustomBuilderWithId, controller?: promptAction.DialogController,
    options?: promptAction.DialogOptions): Promise<number>;

  /**
   * Close the custom dialog.
   *
   * @param { number } dialogId - ID of the custom dialog box to close. It is returned from **openCustomDialog**.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  closeCustomDialog(dialogId: number): void;

  /**
   * Get order value of top dialog.
   *
   * @returns { LevelOrder } Order of the topmost dialog box.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  getTopOrder(): LevelOrder;

  /**
   * Get order value of bottom dialog.
   *
   * @returns { LevelOrder } Order of the topmost dialog box.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  getBottomOrder(): LevelOrder;

  /**
   * Open popup with frameNode.
   *
   * @param { ComponentContent<T> } content - Content displayed in the popup.
   * @param { TargetInfo } target - Information about the target component to bind.
   * @param { PopupCommonOptions } [options] - Style of the popup.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The ComponentContent is incorrect.
   * @throws { BusinessError } 103302 - The ComponentContent already exists.
   * @throws { BusinessError } 103304 - The targetId does not exist.
   * @throws { BusinessError } 103305 - The node of targetId is not in the component tree.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  openPopup<T extends Object>(content: ComponentContent<T>, target: TargetInfo, options?: PopupCommonOptions): Promise<void>;

  /**
   * Update popup with frameNode.
   *
   * @param { ComponentContent<T> } content - Content displayed in the popup.
   * @param { PopupCommonOptions } options - Style of the popup.<br>
   *     **NOTE**<br>
   *     Updating the following properties is not supported: **showInSubWindow**, **focusable**, **onStateChange**,
   *     **onWillDismiss**, and **transition**.
   * @param { boolean } [partialUpdate] - Whether to update the popup in incremental mode.<br>
   *     Default value: **false**<br>
   *     **NOTE**<br>
   *     **true**: Incremental update. Only specified attributes in **options** are updated, and the other attributes
   *     retain their current values. If the attribute value passed in **options** is invalid or **undefined**,
   *     the attribute is not updated.<br>**false**: Full update. Specified attributes in **options** are updated,
   *     and the other attributes are restored to their default values.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The ComponentContent is incorrect.
   * @throws { BusinessError } 103303 - The ComponentContent cannot be found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  updatePopup<T extends Object>(content: ComponentContent<T>, options: PopupCommonOptions, partialUpdate?: boolean): Promise<void>;

  /**
   * Close popup with frameNode.
   *
   * @param { ComponentContent<T> } content - Content displayed in the popup.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The ComponentContent is incorrect.
   * @throws { BusinessError } 103303 - The ComponentContent cannot be found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  closePopup<T extends Object>(content: ComponentContent<T>): Promise<void>;

  /**
   * Open menu with frameNode.
   *
   * @param { ComponentContent<T> } content - Content displayed in the menu.
   * @param { TargetInfo } target - Information about the target component to bind.
   * @param { MenuOptions } [options] - Style of the menu.<br>**NOTE**<br>The **title** property is not effective.<br>
   *      The **preview** parameter supports only the **MenuPreviewMode** type.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The ComponentContent is incorrect.
   * @throws { BusinessError } 103302 - The ComponentContent already exists.
   * @throws { BusinessError } 103304 - The targetId does not exist.
   * @throws { BusinessError } 103305 - The node of targetId is not in the component tree.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  openMenu<T extends Object>(content: ComponentContent<T>, target: TargetInfo, options?: MenuOptions): Promise<void>;

  /**
   * Update menu with frameNode.
   *
   * @param { ComponentContent<T> } content - Content displayed in the menu.
   * @param { MenuOptions } options - Style of the menu.<br>**NOTE**<br>1. Updating for the following is not supported:
   *     **showInSubWindow**, **preview**, **previewAnimationOptions**, **transition**, **onAppear**, **aboutToAppear**,
   *     **onDisappear**, **aboutToDisappear**, **onWillAppear**, **onDidAppear**, **onWillDisappear**, and
   *     **onDidDisappear**.<br>2. The mask style can be updated by configuring [MenuMaskType]{@link MenuMaskType}.
   *     However, this API does not support mask presence toggling (that is, switching the mask from non-existent to
   *     existent or vice versa) by setting a boolean value.
   * @param { boolean } [partialUpdate] - Whether to update the menu in incremental mode. Default value: **false**.<br>
   *     **NOTE**<br>1. **true**: incremental update, where the specified properties in **options** are updated, and
   *     other properties stay at their current value.<br>2. **false**: full update, where all properties except those
   *     specified in **options** are restored to default values.
   * @returns { Promise<void> }  Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The ComponentContent is incorrect.
   * @throws { BusinessError } 103303 - The ComponentContent cannot be found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  updateMenu<T extends Object>(content: ComponentContent<T>, options: MenuOptions, partialUpdate?: boolean): Promise<void>;

  /**
   * Close menu with frameNode.
   *
   * @param { ComponentContent<T> } content - Content displayed in the menu.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The ComponentContent is incorrect.
   * @throws { BusinessError } 103303 - The ComponentContent cannot be found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  closeMenu<T extends Object>(content: ComponentContent<T>): Promise<void>;
}

/**
 * 提供统一的Dialog API。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export class DialogPresenter {
  /**
   * 提供一个固定样式的对话框。
   *
   * @param { dialog.DialogStyleOptions } [options] - 对话框选项。
   * @returns { Promise<DialogResult> } 用于返回对话结果的Promise。
   * @throws { BusinessError } 103306 - The dialog cannot be opened due to node mount failure.
   * @throws { BusinessError } 103308 - The dialog cannot be opened due to subwindow create failure.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  present(options?: dialog.DialogStyleOptions): Promise<DialogResult>;

  /**
   * 提供一个自定义样式的对话框，其中包含所提供的内容。
   *
   * content参数通过联合类型接受CustomBuilder或ComponentContent：
   * -CustomBuilder：自定义对话框内容的生成器函数。
   * - ComponentContent：支持状态驱动更新的ComponentContent。
   *
   * > **说明**
   * > isModal = true和showInSubWindow = true不能同时使用。
   *
   * @param { CustomBuilder | CustomBuilderWithId | ComponentContent<Object> } content - 自定义对话框内容。
   * @param { dialog.DialogCustomOptions } [options] - 自定义对话框选项。
   * @returns { Promise<DialogResult> } 用于返回对话结果的Promise。
   * @throws { BusinessError } 103301 - Dialog content error. The ComponentContent is incorrect.
   * @throws { BusinessError } 103302 - Dialog content already exist. The ComponentContent has already been opened.
   * @throws { BusinessError } 103306 - The dialog cannot be opened due to node mount failure.
   * @throws { BusinessError } 103308 - The dialog cannot be opened due to subwindow create failure.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  present(content: CustomBuilder | CustomBuilderWithId | ComponentContent<Object>, options?: dialog.DialogCustomOptions): Promise<DialogResult>;

  /**
   * 更新已呈现的自定义对话框。
   *
   * @param { ComponentContent<Object> } content - 用于标识对话框的内容。
   * @param { dialog.DialogBaseOptions } [options] - 要更新的选项。
   * @returns { Promise<void> } 不会返回任何值的Promise。
   * @throws { BusinessError } 103301 - Dialog content error. The ComponentContent is incorrect.
   * @throws { BusinessError } 103303 - Dialog content not found. The ComponentContent cannot be found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  update(content: ComponentContent<Object>, options?: dialog.DialogBaseOptions): Promise<void>;

  /**
   * 关闭对话框。
   * 接受对话ID（由当前返回）或ComponentContent引用。
   *
   * @param { int | ComponentContent<Object> } target - 要取消的对话ID或组件内容。
   * @returns { Promise<void> } 不会返回任何值的Promise。
   * @throws { BusinessError } 103301 - Dialog content error. The ComponentContent is incorrect.
   * @throws { BusinessError } 103303 - Dialog content not found. The ComponentContent cannot be found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  dismiss(target: int | ComponentContent<Object>): Promise<void>;
}

/**
 * 定义了用于在UIObserver中监听点击事件的回调类型。
 *
 * @param { ClickEvent } event - 触发事件监听的点击事件的相关信息。
 * @param { FrameNode } [node] - 触发事件监听的点击事件所绑定的组件。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type ClickEventListenerCallback = (event: ClickEvent, node?: FrameNode) => void;

/**
 * Pan手势事件监听函数类型。
 *
 * @param { GestureEvent } event - 触发事件监听的手势事件的相关信息。
 * @param { GestureRecognizer } current - 触发事件监听的手势识别器的相关信息。
 * @param { FrameNode } [node] - 触发事件监听的手势事件所绑定的组件。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare type PanListenerCallback = (event: GestureEvent, current: GestureRecognizer, node?: FrameNode) => void;

/**
 * 定义了用于在UIObserver中监听手势的回调类型。
 *
 * @param { GestureEvent } event - 触发事件监听的手势事件的相关信息。
 * @param { FrameNode } [node] - 触发事件监听的手势事件所绑定的组件。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type GestureEventListenerCallback = (event: GestureEvent, node?: FrameNode) => void;

/**
 * 定义节点标识类型。对于string类型，代表指定组件id，该id通过通用属性[id]{@link CommonMethod#id}设置。对于number类型，
 * 代表系统分配的唯一标识的节点UniqueID，可通过[getUniqueId]{@link FrameNode:FrameNode#getUniqueId}获取。
 *
 * @unionmember { string }
 * @unionmember { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export declare type NodeIdentity = string | number;

/**
 * 定义了用于在UIObserver中监控某个特定节点渲染状态的回调类型。
 *
 * @param { NodeRenderState } state - 触发事件监听的手势事件的相关信息。
 * @param { FrameNode } [node] - 触发事件监听的手势事件所绑定的组件，如果组件被释放将返回null。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export declare type NodeRenderStateChangeCallback = (state: NodeRenderState, node?: FrameNode) => void;

/**
 * 定义了用于在UIObserver中监控特定手势触发信息的回调类型。
 *
 * @param { GestureTriggerInfo } info - 交互触发的手势详情。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export declare type GestureListenerCallback = (info: GestureTriggerInfo) => void;

/**
* Defines the PageInfo type.
* The value of routerPageInfo indicates the information of the router page, or undefined if the
* frameNode does not have router page information. And the value of navDestinationInfo indicates
* the information of the navDestination, or undefined if the frameNode does not have navDestination
* information.
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface PageInfo {

  /**
   * the property of router page information.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  routerPageInfo?: observer.RouterPageInfo;

  /**
   * the property of navDestination information.
   *
   * @type { ?observer.NavDestinationInfo }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  navDestinationInfo?: observer.NavDestinationInfo;
}

/**
* the property of OverlayManager.
*
 * @interface OverlayManagerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
export interface OverlayManagerOptions {

  /**
   * the render property of overlay node.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  renderRootOverlay?: boolean;

  /**
   * Set whether support backPressed event or not.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 19 dynamic
   */
  enableBackPressedEvent?: boolean;
}

/**
* 使用顺序打开浮层的选项。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface OrderOverlayOptions {

  /**
   * 浮层的显示顺序。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  levelOrder?: LevelOrder;

  /**
   * 浮层的显示模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  levelMode?: LevelMode;

  /**
   * The uniqueId of any node in the router or navigation page.
   *
   * @type { ?int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  levelUniqueId?: int;
}

/**
* 提供UI组件行为变化的无感监听能力。
*
* > **说明：**
*
* > - 以下API需先使用UIContext中的[getUIObserver()]{@link UIContext#getUIObserver}方法获取到UIObserver对象，再通过该对象调用对应方法。
* >
* > - UIObserver仅能监听到本进程内的相关信息，不支持获取<!--Del-->[UIExtensionComponent]{@link ui_extension_component}等<!--DelEnd-->跨进程场景的信
* > 息。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export class UIObserver {

  /**
   *
   * @param { 'navDestinationUpdate' } type - Event type.
   *     The value is fixed at **'navDestinationUpdate'**, which indicates the state change event
   *     <br>of the **NavDestination** component.
   * @param { object } options - ID of the target **NavDestination** component.
   * @param { Callback<observer.NavDestinationInfo> } callback - Callback used to return the current
   *     <br>state of the **NavDestination** component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   *
   * @param { 'navDestinationUpdate' } type - Event type.
   *     The value is fixed at **'navDestinationUpdate'**, which indicates the state change event
   *     <br>of the **NavDestination** component.
   * @param { object } options - ID of the target **NavDestination** component.
   * @param { Callback<observer.NavDestinationInfo> } callback - Callback used to return the current
   *     <br>state of the **NavDestination** component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  on(type: 'navDestinationUpdate', options: { navigationId: ResourceStr }, callback: Callback<observer.NavDestinationInfo>): void;

  /**
   *
   * @param { 'navDestinationUpdate' } type - The type of event to remove the listener for. Must be '
   *     navDestinationUpdate'.
   * @param { object } options - Specify the id of observed navigation.
   * @param { Callback<observer.NavDestinationInfo> } callback - The callback function to remove. If not provided, all
   *     callbacks for the given event type and
   *     navigation ID will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   *
   * @param { 'navDestinationUpdate' } type - The type of event to remove the listener for. Must be '
   *     navDestinationUpdate'.
   * @param { object } options - The options object.
   * @param { Callback<observer.NavDestinationInfo> } callback - The callback function to remove. If not provided, all
   *     callbacks for the given event type and
   *     navigation ID will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  off(type: 'navDestinationUpdate', options: { navigationId: ResourceStr }, callback?: Callback<observer.NavDestinationInfo>): void;

  /**
   * Subscribes to status changes of this **NavDestination** component.
   *
   * @param { 'navDestinationUpdate' } type - Event type.
   * The value is fixed at **'navDestinationUpdate'**, which indicates the state change event of
   * <br>the **NavDestination** component.
   * @param { Callback<observer.NavDestinationInfo> } callback - Callback used to return the current state of
   * <brthe **NavDestination** component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Subscribes to status changes of this **NavDestination** component.
   *
   * @param { 'navDestinationUpdate' } type - Event type.
   *     The value is fixed at **'navDestinationUpdate'**,
   *     <br>which indicates the state change event of the **NavDestination** component.
   * @param { Callback<observer.NavDestinationInfo> } callback - Callback used to return the current state of
   *     <br>the **NavDestination** component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  on(type: 'navDestinationUpdate', callback: Callback<observer.NavDestinationInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'navDestinationUpdate'} type - The type of event to remove the listener for. Must be 'navDestinationUpdate
   *     '.
   * @param { Callback<observer.NavDestinationInfo> } [callback] - The callback function to remove. If not provided, all
   *     callbacks for the given event type
   *     will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'navDestinationUpdate'} type - The type of event to remove the listener for. Must be 'navDestinationUpdate
   *     '.
   * @param { Callback<observer.NavDestinationInfo> } [callback] - The callback function to remove. If not provided, all
   *     callbacks for the given event type
   *     will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  off(type: 'navDestinationUpdate', callback?: Callback<observer.NavDestinationInfo>): void;

  /**
   * Registers a callback function to be called when the navigation destination is updated.
   *
   * @param { 'navDestinationUpdateByUniqueId' } type - The type of event to listen for. Must be '
   *     navDestinationUpdateByUniqueId'.
   * @param { number } navigationUniqueId - The uniqueId of the navigation.
   * @param { Callback<observer.NavDestinationInfo> } callback - The callback function to be called when the navigation
   *     destination is updated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  on(type: 'navDestinationUpdateByUniqueId', navigationUniqueId: number, callback: Callback<observer.NavDestinationInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'navDestinationUpdateByUniqueId'} type - The type of event to remove the listener for. Must be '
   *     navDestinationUpdateByUniqueId'.
   * @param { number } navigationUniqueId - The uniqueId of the navigation.
   * @param { Callback<observer.NavDestinationInfo> } [callback] - The callback function to remove. If not provided, all
   *     callbacks for the given event type
   *     will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  off(type: 'navDestinationUpdateByUniqueId', navigationUniqueId: number, callback?: Callback<observer.NavDestinationInfo>): void;

  /**
   * Registers a callback function to be called when the scroll event start or stop.
   *
   * @param { 'scrollEvent' } type - The type of event to listen for. Must be 'scrollEvent'.
   * @param { observer.ObserverOptions } options - The options object.
   * @param { Callback<observer.ScrollEventInfo> } callback - The callback function to be called when the scroll event
   *     start or stop.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  on(type: 'scrollEvent', options: observer.ObserverOptions, callback: Callback<observer.ScrollEventInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'scrollEvent' } type - The type of event to remove the listener for. Must be 'scrollEvent'.
   * @param { observer.ObserverOptions } options - The options object.
   * @param { Callback<observer.ScrollEventInfo> } callback - The callback function to remove. If not provided, all
   *     callbacks for the given event type and
   *     scroll ID will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  off(type: 'scrollEvent', options: observer.ObserverOptions, callback?: Callback<observer.ScrollEventInfo>): void;

  /**
   * Registers a callback function to be called when the scroll event start or stop.
   *
   * @param { 'scrollEvent' } type - The type of event to listen for. Must be 'scrollEvent'.
   * @param { Callback<observer.ScrollEventInfo> } callback - The callback function to be called when the scroll event
   *     start or stop.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  on(type: 'scrollEvent', callback: Callback<observer.ScrollEventInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'scrollEvent'} type - The type of event to remove the listener for. Must be 'scrollEvent'.
   * @param { Callback<observer.ScrollEventInfo> } [callback] - The callback function to remove. If not provided, all
   *     callbacks for the given event type
   *     will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  off(type: 'scrollEvent', callback?: Callback<observer.ScrollEventInfo>): void;

  /**
   * Unsubscribes to state changes of the page in the router.
   *
   * @param { 'routerPageUpdate' } type - Event type.
   *     <br>The value is fixed at 'routerPageUpdate', which indicates the state change event of the page in the router.
   * @param { Callback<observer.RouterPageInfo> } callback - Callback to be unregistered.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Unsubscribes to state changes of the page in the router.
   *
   * @param { 'routerPageUpdate' } type - Event type.
   *     <br>The value is fixed at 'routerPageUpdate', which indicates the state change event of the page in the router.
   * @param { Callback<observer.RouterPageInfo> } callback - Callback to be unregistered.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  on(type: 'routerPageUpdate', callback: Callback<observer.RouterPageInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'routerPageUpdate' } type - The type of event to remove the listener for. Must be 'routerPageUpdate'.
   * @param { Callback<observer.RouterPageInfo> } [callback] - The callback function to remove. If not provided, all
   *     callbacks for the given event type
   *     will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  off(type: 'routerPageUpdate', callback?: Callback<observer.RouterPageInfo>): void;

  /**
   * 监听屏幕像素密度变化。
   *
   * @param { 'densityUpdate' } type - 监听事件，固定为'densityUpdate'，即屏幕像素密度变化。
   * @param { Callback<observer.DensityInfo> } callback - 回调函数。携带
   *     [DensityInfo]{@link @ohos.arkui.observer:uiObserver.DensityInfo}，返回变化后的屏幕像素密度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  on(type: 'densityUpdate', callback: Callback<observer.DensityInfo>): void;

  /**
   * 取消监听屏幕像素密度的变化。
   *
   * @param { 'densityUpdate' } type - 监听事件，固定为'densityUpdate'，即屏幕像素密度变化。
   * @param { Callback<observer.DensityInfo> } [callback] - 需要被注销的回调函数。若不指定具体的回调函数，则注销该
   *     [UIContext]{@link @ohos.arkui.UIContext}下所有屏幕像素密度变化事件监听。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  off(type: 'densityUpdate', callback?: Callback<observer.DensityInfo>): void;

  /**
   * 监听每一帧绘制指令下发情况。
   *
   * @param { 'willDraw' } type - 监听事件，固定为'willDraw'，即是否将要绘制。
   * @param { Callback<void> } callback - 回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  on(type: 'willDraw', callback: Callback<void>): void;

  /**
   * 取消监听每一帧绘制指令下发情况。
   *
   * @param { 'willDraw' } type - 监听事件，固定为'willDraw'，即是否将要绘制。
   * @param { Callback<void> } [callback] - 需要被注销的回调函数。不传参数时，取消所有绘制指令下发事件的监听回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  off(type: 'willDraw', callback?: Callback<void>): void;

  /**
   * 监听每一帧布局完成情况。
   *
   * @param { 'didLayout' } type - 监听事件，固定为'didLayout'，即是否布局完成。
   * @param { Callback<void> } callback - 回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  on(type: 'didLayout', callback: Callback<void>): void;

  /**
   * 取消监听每一帧布局完成情况。
   *
   * @param { 'didLayout' } type - 监听事件，固定为'didLayout'，即是否布局完成。
   * @param { Callback<void> } [callback] - 需要被注销的回调函数。不传参数时，取消所有布局完成的监听回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  off(type: 'didLayout', callback?: Callback<void>): void;

  /**
   * Registers a callback function to be called when the navigation switched to a new navDestination.
   *
   * @param { 'navDestinationSwitch' } type - The type of event to listen for. Must be 'navDestinationSwitch'.
   * @param { Callback<observer.NavDestinationSwitchInfo> } callback - The callback function to be called when
   *                                                                   the navigation switched to a new navDestination.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  on(
    type: 'navDestinationSwitch',
    callback: Callback<observer.NavDestinationSwitchInfo>
  ): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'navDestinationSwitch' } type - The type of event to remove the listener for. Must be '
   *     navDestinationSwitch'.
   * @param { Callback<observer.NavDestinationSwitchInfo> } [callback] - The callback function to remove. If not
   *     provided,
   *     all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  off(
    type: 'navDestinationSwitch',
    callback?: Callback<observer.NavDestinationSwitchInfo>
  ): void;

  /**
   * Registers a callback function to be called when the navigation switched to a new navDestination.
   *
   * @param { 'navDestinationSwitch' } type - The type of event to listen for. Must be 'navDestinationSwitch'.
   * @param { observer.NavDestinationSwitchObserverOptions } observerOptions - Options.
   * @param { Callback<observer.NavDestinationSwitchInfo> } callback - The callback function to be called when the
   *                                                                   navigation switched to a new navDestination.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  on(
    type: 'navDestinationSwitch',
    observerOptions: observer.NavDestinationSwitchObserverOptions,
    callback: Callback<observer.NavDestinationSwitchInfo>
  ): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'navDestinationSwitch' } type - The type of event to remove the listener for. Must be '
   *     navDestinationSwitch'.
   * @param { observer.NavDestinationSwitchObserverOptions } observerOptions - Options.
   * @param { Callback<observer.NavDestinationSwitchInfo> } [callback] - The callback function to remove. If not
   *     provided,
   *     all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  off(
    type: 'navDestinationSwitch',
    observerOptions: observer.NavDestinationSwitchObserverOptions,
    callback?: Callback<observer.NavDestinationSwitchInfo>
  ): void;

  /**
   * Registers a callback function to be called before clickEvent is called.
   *
   * @param { 'willClick' } type - The type of event to listen for.
   * @param { ClickEventListenerCallback } callback - The callback function to be called
   *                                                  when the clickEvent will be trigger or after.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  on(type: 'willClick', callback: ClickEventListenerCallback): void;

  /**
   * Removes a callback function to be called before clickEvent is called.
   *
   * @param { 'willClick' } type - The type of event to remove the listener for.
   * @param { ClickEventListenerCallback } [callback] - The callback function to remove. If not provided,
   *                                                    all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  off(type: 'willClick', callback?: ClickEventListenerCallback): void;

  /**
   * Registers a callback function to be called after clickEvent is called.
   *
   * @param { 'didClick' } type - The type of event to listen for.
   * @param { ClickEventListenerCallback } callback - The callback function to be called
   *                                                  when the clickEvent will be trigger or after.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  on(type: 'didClick', callback: ClickEventListenerCallback): void;

  /**
   * Removes a callback function to be called after clickEvent is called.
   *
   * @param { 'didClick' } type - The type of event to remove the listener for.
   * @param { ClickEventListenerCallback } [callback] - The callback function to remove. If not provided,
   *                                                    all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  off(type: 'didClick', callback?: ClickEventListenerCallback): void;

  /**
   * Registers a callback function to be called before tapGesture is called.
   *
   * @param { 'willClick' } type - The type of event to listen for.
   * @param { GestureEventListenerCallback } callback - The callback function to be called
   *                                                    when the clickEvent will be trigger or after.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  on(type: 'willClick', callback: GestureEventListenerCallback): void;

  /**
   * Removes a callback function to be called before tapGesture is called.
   *
   * @param { 'willClick' } type - The type of event to remove the listener for.
   * @param { GestureEventListenerCallback } [callback] - The callback function to remove. If not provided,
   *                                                      all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  off(type: 'willClick', callback?: GestureEventListenerCallback): void;

  /**
   * Registers a callback function to be called after tapGesture is called.
   *
   * @param { 'didClick' } type - The type of event to listen for.
   * @param { GestureEventListenerCallback } callback - The callback function to be called
   *                                                    when the clickEvent will be trigger or after.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  on(type: 'didClick', callback: GestureEventListenerCallback): void;

  /**
   * Removes a callback function to be called after tapGesture is called.
   *
   * @param { 'didClick' } type - The type of event to remove the listener for.
   * @param { GestureEventListenerCallback } [callback] - The callback function to remove. If not provided,
   *                                                      all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  off(type: 'didClick', callback?: GestureEventListenerCallback): void;

  /**
   * 监听Pan手势[onActionStart]{@link PanGestureInterface.onActionStart}事件，在
   * [onActionStart]{@link PanGestureInterface.onActionStart}事件执行之前执行callback回调。支持手指滑动、鼠标滑动、鼠标滚轮和触摸板拖动，暂不支持屏幕朗读触控模式。
   *
   * @param { 'beforePanStart' } type - 监听事件，固定为'beforePanStart'，用于监听Pan手势
   *     [onActionStart]{@link PanGestureInterface.onActionStart}事件执行前的指令下发情况，所注册回调将于Pan手势
   *     [onActionStart]{@link PanGestureInterface.onActionStart}事件触发前触发。
   * @param { PanListenerCallback } callback - 回调函数。可以获得Pan手势事件的
   *     [GestureEvent]{@link GestureEvent}，[GestureRecognizer]{@link GestureRecognizer}和组件的[FrameNode]{@link FrameNode}。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  on(type: 'beforePanStart', callback: PanListenerCallback): void;

  /**
   * 取消[on('beforePanStart')]{@link UIObserver#on(type: 'beforePanStart', callback: PanListenerCallback)}监听Pan手势
   * [onActionStart]{@link PanGestureInterface.onActionStart}事件执行前的callback回调。
   *
   * @param { 'beforePanStart' } type - 监听事件，固定为'beforePanStart'，即Pan手势
   *     [onActionStart]{@link PanGestureInterface.onActionStart}事件执行前的指令下发情况。
   * @param { PanListenerCallback } [callback] - 需要被注销的回调函数。不传参数时，取消所有的Pan手势
   *     [onActionStart]{@link PanGestureInterface.onActionStart}事件执行前的指令下发监听回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  off(type: 'beforePanStart', callback?: PanListenerCallback): void;

  /**
   * 监听Pan手势[onActionEnd]{@link PanGestureInterface.onActionEnd}事件执行前的指令下发情况，在
   * [onActionEnd]{@link PanGestureInterface.onActionEnd}事件执行之前执行callback回调。支持手指滑动、鼠标滑动、鼠标滚轮和触摸板拖动，暂不支持屏幕朗读触控模式。
   *
   * @param { 'beforePanEnd' } type - 监听事件，固定为'beforePanEnd'，用于监听Pan手势
   *     [onActionEnd]{@link PanGestureInterface.onActionEnd}事件执行前的指令下发情况，所注册回调将于Pan手势
   *     [onActionEnd]{@link PanGestureInterface.onActionEnd}事件触发前触发。
   * @param { PanListenerCallback } callback - 回调函数。可以获得Pan手势事件的
   *     [GestureEvent]{@link GestureEvent}，[GestureRecognizer]{@link GestureRecognizer}和组件的[FrameNode]{@link FrameNode}。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  on(type: 'beforePanEnd', callback: PanListenerCallback): void;

  /**
   * 取消[on('beforePanEnd')]{@link UIObserver#on(type: 'beforePanEnd', callback: PanListenerCallback)}监听Pan手势
   * [onActionEnd]{@link PanGestureInterface.onActionEnd}事件执行前的callback回调。
   *
   * @param { 'beforePanEnd' } type - 监听事件，固定为'beforePanEnd'，即Pan手势[onActionEnd]{@link PanGestureInterface.onActionEnd}事
   *     件执行前的指令下发情况。
   * @param { PanListenerCallback } [callback] - 需要被注销的回调函数。不传参数时，取消所有的Pan手势
   *     [onActionEnd]{@link PanGestureInterface.onActionEnd}事件执行前的指令下发监听回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  off(type: 'beforePanEnd', callback?: PanListenerCallback): void;

  /**
   * 监听Pan手势[onActionStart]{@link PanGestureInterface.onActionStart}事件执行后的指令下发情况，在
   * [onActionStart]{@link PanGestureInterface.onActionStart}事件执行之后执行callback回调。支持手指滑动、鼠标滑动、鼠标滚轮和触摸板拖动，暂不支持屏幕朗读触控模式。
   *
   * @param { 'afterPanStart' } type - 监听事件，固定为'afterPanStart'，用于监听Pan手势
   *     [onActionStart]{@link PanGestureInterface.onActionStart}事件执行后的指令下发情况，所注册回调将于Pan手势
   *     [onActionStart]{@link PanGestureInterface.onActionStart}事件触发后触发。
   * @param { PanListenerCallback } callback - 回调函数。可以获得Pan手势事件的
   *     [GestureEvent]{@link GestureEvent}，[GestureRecognizer]{@link GestureRecognizer}和组件的[FrameNode]{@link FrameNode}。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  on(type: 'afterPanStart', callback: PanListenerCallback): void;

  /**
   * 取消[on('afterPanStart')]{@link UIObserver#on(type: 'afterPanStart', callback: PanListenerCallback)}监听Pan手势
   * [onActionStart]{@link PanGestureInterface.onActionStart}事件执行后的callback回调。
   *
   * @param { 'afterPanStart' } type - 监听事件，固定为'afterPanStart'，即Pan手势
   *     [onActionStart]{@link PanGestureInterface.onActionStart}事件执行后的指令下发情况。
   * @param { PanListenerCallback } [callback] - 需要被注销的回调函数。不传参数时，取消所有的Pan手势
   *     [onActionStart]{@link PanGestureInterface.onActionStart}事件执行后的指令下发监听回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  off(type: 'afterPanStart', callback?: PanListenerCallback): void;

  /**
   * 监听Pan手势[onActionEnd]{@link PanGestureInterface.onActionEnd}事件执行后的指令下发情况，在
   * [onActionEnd]{@link PanGestureInterface.onActionEnd}事件执行之后执行callback回调。支持手指滑动、鼠标滑动、鼠标滚轮和触摸板拖动，暂不支持屏幕朗读触控模式。
   *
   * @param { 'afterPanEnd' } type - 监听事件，固定为'afterPanEnd'，用于监听Pan手势[onActionEnd]{@link PanGestureInterface.onActionEnd}
   *     事件执行后的指令下发情况，所注册回调将于Pan手势[onActionEnd]{@link PanGestureInterface.onActionEnd}事件触发后触发。
   * @param { PanListenerCallback } callback - 回调函数。可以获得Pan手势事件的
   *     [GestureEvent]{@link GestureEvent}，[GestureRecognizer]{@link GestureRecognizer}和组件的[FrameNode]{@link FrameNode}。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  on(type: 'afterPanEnd', callback: PanListenerCallback): void;

  /**
   * 取消[on('afterPanEnd')]{@link UIObserver#on(type: 'afterPanEnd', callback: PanListenerCallback)}监听Pan手势
   * [onActionEnd]{@link PanGestureInterface.onActionEnd}事件执行后的callback回调。
   *
   * @param { 'afterPanEnd' } type - 监听事件，固定为'afterPanEnd'，即Pan手势[onActionEnd]{@link PanGestureInterface.onActionEnd}事件执
   *     行后的指令下发情况。
   * @param { PanListenerCallback } [callback] - 需要被注销的回调函数。不传参数时，取消所有的Pan手势
   *     [onActionEnd]{@link PanGestureInterface.onActionEnd}事件执行后的指令下发监听回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  off(type: 'afterPanEnd', callback?: PanListenerCallback): void;

  /**
   * Registers a callback function to be called when the tabContent is showed or hidden.
   *
   * @param { 'tabContentUpdate' } type - The type of event to listen for. Must be 'tabContentUpdate'.
   * @param { observer.ObserverOptions } options - The options object.
   * @param { Callback<observer.TabContentInfo> } callback - The callback function to be called
   *                                                         when the tabContent show or hide.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  on(type: 'tabContentUpdate', options: observer.ObserverOptions, callback: Callback<observer.TabContentInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'tabContentUpdate' } type - The type of event to remove the listener for. Must be 'tabContentUpdate'.
   * @param { observer.ObserverOptions } options - The options object.
   * @param { Callback<observer.TabContentInfo> } callback - The callback function to remove. If not provided,
   *                                              all callbacks for the given event type and Tabs ID will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  off(type: 'tabContentUpdate', options: observer.ObserverOptions, callback?: Callback<observer.TabContentInfo>): void;

  /**
   * Registers a callback function to be called when the tabContent is showed or hidden.
   *
   * @param { 'tabContentUpdate' } type - The type of event to listen for. Must be 'tabContentUpdate'.
   * @param { Callback<observer.TabContentInfo> } callback - The callback function to be called
   *                                                         when the tabContent is showed or hidden.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  on(type: 'tabContentUpdate', callback: Callback<observer.TabContentInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'tabContentUpdate'} type - The type of event to remove the listener for. Must be 'tabContentUpdate'.
   * @param { Callback<observer.TabContentInfo> } callback - The callback function to remove. If not provided,
   *                                              all callbacks for the given event type and Tabs ID will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  off(type: 'tabContentUpdate', callback?: Callback<observer.TabContentInfo>): void;

  /**
   * 注册一个回调函数，当 tabContent 显示或隐藏时被调用。包括tabs首次加载时的tabContent显示情况以及 tabs 索引切换时tabContent显示情况。
   *
   * @param { 'tabChange' } type - 要监听的事件类型。必须是 'tabChange'。
   * @param { observer.ObserverOptions } config - 选项对象。包含监听的tabs组件ID。
   * @param { Callback<observer.TabContentInfo> } callback - 回调函数，当 tabContent 显示或隐藏时被调用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  on(type: 'tabChange', config: observer.ObserverOptions, callback: Callback<observer.TabContentInfo>): void;

  /**
   * 移除之前通过 `on()` 注册的回调函数。
   *
   * @param { 'tabChange' } type - 要移除监听的事件类型。必须是 'tabChange'。
   * @param { observer.ObserverOptions } config - 选项对象。包含监听的tabs组件ID。
   * @param { Callback<observer.TabContentInfo> } [callback] - 要移除的回调函数。
   * 如果未提供该参数，则将移除该tabs id的所有'tabChange'无感监听回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  off(type: 'tabChange', config: observer.ObserverOptions, callback?: Callback<observer.TabContentInfo>): void;

  /**
   * 注册一个回调函数，当 tabContent 显示或隐藏时被调用。包括tabs首次加载时的tabContent显示情况以及 tabs 索引切换时tabContent显示情况。
   *
   * @param { 'tabChange' } type - 要监听的事件类型。必须是 'tabChange'。
   * @param { Callback<observer.TabContentInfo> } callback - 回调函数，当 tabContent 显示或隐藏时调用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  on(type: 'tabChange', callback: Callback<observer.TabContentInfo>): void;

  /**
   * 移除之前通过 `on()` 注册的回调函数。
   *
   * @param { 'tabChange' } type - 要移除监听的事件类型。必须是 'tabChange'。
   * @param { Callback<observer.TabContentInfo> } [callback] - 要移除的回调函数。
   * 如果未提供该参数，则将移除所有tabs的所有'tabChange'无感监听回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  off(type: 'tabChange', callback?: Callback<observer.TabContentInfo>): void;

  /**
   * 注册窗口尺寸布局断点变化的回调函数。该方法用于监听窗口尺寸断点变化，可用于根据窗口尺寸自适应调整UI布局。使用callback异步回调。
   *
   * @param { 'windowSizeLayoutBreakpointChange' } type - 监听事件，固定为'windowSizeLayoutBreakpointChange'，用于监听窗口尺寸布局断点发生改变。
   * @param { Callback<observer.WindowSizeLayoutBreakpointInfo> } callback - 回调函数。携带WindowSizeLayoutBreakpointinfo，包含窗口宽
   *     度和高度所在的布局断点枚举。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 22 dynamic
   */
  on(type: 'windowSizeLayoutBreakpointChange', callback: Callback<observer.WindowSizeLayoutBreakpointInfo>): void;

  /**
   * 移除之前注册的窗口尺寸布局断点变化回调函数。如果未提供回调函数参数，将移除指定上下文的所有回调函数。使用callback异步回调。
   *
   * @param { 'windowSizeLayoutBreakpointChange' } type - 监听事件，固定为'windowSizeLayoutBreakpointChange'，用于监听窗口尺寸布局断点发生改变。
   * @param { Callback<observer.WindowSizeLayoutBreakpointInfo> } [callback] - 需要被注销的回调函数。若不指定具体的回调函数，则注销该
   *     [UIContext]{@link @ohos.arkui.UIContext}下所有窗口尺寸布局断点变化事件监听。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 22 dynamic
   */
  off(type: 'windowSizeLayoutBreakpointChange', callback?: Callback<observer.WindowSizeLayoutBreakpointInfo>): void;

  /**
   * 注册一个回调函数，以便在特定节点的渲染状态发生变化时调用，当注册成功时，此回调将立即执行一次。
   * 
   * 注意节点数量的限制。出于性能考虑，在单个UI实例中，注册节点太多，将会抛出异常。
   * 
   * 通常，当组件被移动到屏幕外时，会收到RENDER_OUT的通知。但在某些情况下，即使组件移动到屏幕外也不会触发RENDER_OUT通知。例如，具有缓存功能的组件[Swiper]{@link swiper}，即使
   * [cachedCount]{@link SwiperAttribute#cachedCount(count: number, isShown: boolean)}属性中的参数isShown配置为true，也不会触发
   * RENDER_OUT通知。
   *
   * @param { 'nodeRenderState' } type - 监听事件，固定为'nodeRenderState'，用于监听节点渲染状态发生改变。
   * @param { NodeIdentity } nodeIdentity - 节点标识。
   * @param { NodeRenderStateChangeCallback } callback - 回调函数。可以获得节点渲染状态改变事件的
   *     [NodeRenderState]{@link NodeRenderState}和组件的[FrameNode]{@link FrameNode}。
   * @throws { BusinessError } 161001 - The count of nodes monitoring render state is over the limitation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  on(type: 'nodeRenderState', nodeIdentity: NodeIdentity, callback: NodeRenderStateChangeCallback): void;

  /**
   * 取消监听节点渲染状态发生变化的callback回调。
   *
   * @param { 'nodeRenderState' } type - 监听事件，固定为'nodeRenderState'，即节点渲染状态变化指令下发情况。
   * @param { NodeIdentity } nodeIdentity - 节点标识。
   * @param { NodeRenderStateChangeCallback } [callback] - 需要被注销的回调函数。不传参数时，取消该节点所有的渲染状态变化指令下发监听回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  off(type: 'nodeRenderState', nodeIdentity: NodeIdentity, callback?: NodeRenderStateChangeCallback): void;

  /**
   * Registers a callback function to be called when text field's content is changed.
   *
   * @param { 'textChange' } type - The type of event to listen for. Must be 'textChange'.
   * @param { Callback<observer.TextChangeEventInfo> } callback - The callback function to be called when
   *     text field's content is changed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  on(type: 'textChange', callback: Callback<observer.TextChangeEventInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'textChange' } type - The type of event to remove the listener for. Must be 'textChange'.
   * @param { Callback<observer.TextChangeEventInfo> } [callback] - The callback function to remove. If not provided,
   *     all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  off(type: 'textChange', callback?: Callback<observer.TextChangeEventInfo>): void;

  /**
   * Registers a callback function to be called when text field's content is changed.
   *
   * @param { 'textChange' } type - The type of event to listen for. Must be 'textChange'.
   * @param { observer.ObserverOptions } identity - Identity options.
   * @param { Callback<observer.TextChangeEventInfo> } callback - The callback function to be called when the
   *     text field's content is changed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  on(type: 'textChange', identity: observer.ObserverOptions, callback: Callback<observer.TextChangeEventInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'textChange' } type - The type of event to remove the listener for. Must be 'textChange'.
   * @param { observer.ObserverOptions } identity - Identity options.
   * @param { Callback<observer.TextChangeEventInfo> } [callback] - The callback function to remove. If not provided,
   *     all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  off(type: 'textChange', identity: observer.ObserverOptions, callback?: Callback<observer.TextChangeEventInfo>): void;

  /**
   * 注册回调函数以监听手势触发信息。
   *
   * @param { GestureListenerType } type - 要监听的手势类型。
   * @param { GestureObserverConfigs } option - 绑定全局监听器时的配置选项。
   * @param { GestureListenerCallback } callback - 手势状态更新时的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  addGlobalGestureListener(type: GestureListenerType,
      option: GestureObserverConfigs, callback: GestureListenerCallback): void;

  /**
   * 移除某一手势监听器类型的回调函数。
   *
   * @param { GestureListenerType } type - 要移除监听器的事件类型。
   * @param { GestureListenerCallback } [callback] - 待移除的回调函数（未提供时将清除该手势类型的所有回调）。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  removeGlobalGestureListener(type: GestureListenerType, callback?: GestureListenerCallback): void;

  /**
   * 监听Swiper内容的切换事件。使用callback异步回调。
   *
   * @param { Callback<SwiperContentInfo> } callback - 回调函数。携带SwiperContentInfo，返回Swiper内容切换的信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  onSwiperContentUpdate(callback: Callback<SwiperContentInfo>): void;

  /**
   * 取消监听Swiper内容的切换事件。
   *
   * @param { Callback<SwiperContentInfo> } [callback] - 需要被注销的回调函数。不传参数时，取消该Swiper上所有的监听回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  offSwiperContentUpdate(callback?: Callback<SwiperContentInfo>): void;

  /**
   * 通过Swiper组件的id监听Swiper内容的切换事件。使用callback异步回调。
   *
   * @param { observer.ObserverOptions } config - 指定监听的Swiper组件信息。
   * @param { Callback<SwiperContentInfo> } callback - 回调函数。携带SwiperContentInfo，返回Swiper内容切换的信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  onSwiperContentUpdate(config: observer.ObserverOptions, callback: Callback<SwiperContentInfo>): void;

  /**
   * 取消通过Swiper组件id监听的Swiper内容切换事件。
   *
   * @param { observer.ObserverOptions } config - 指定监听的Swiper组件信息。
   * @param { Callback<SwiperContentInfo> } [callback] - 需要被注销的回调函数。不传参数时，取消该Swiper上所有的监听回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  offSwiperContentUpdate(config: observer.ObserverOptions, callback?: Callback<SwiperContentInfo>): void;

  /**
   * 注册一个callback，当router可见页面尺寸发生变化时触发注册监听回调函数，当可见的Router页面大小发生变化时，会触发该回调函数。使用callback异步回调。
   *
   * @param { Callback<observer.RouterPageInfo> } callback - 回调函数。携带RouterPageInfo，返回Router页面的信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  onRouterPageSizeChange(callback: Callback<observer.RouterPageInfo>): void;

  /**
   * 移除使用onRouterPageSizeChange接口注册的监听回调函数。使用callback异步回调。
   *
   * @param { Callback<observer.RouterPageInfo> } [callback] - 需要被移除的回调函数。不传参数时，移除所有回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  offRouterPageSizeChange(callback?: Callback<observer.RouterPageInfo>): void;

  /**
   * 注册监听回调函数，当可见的NavDestination大小发生变化时，会触发该回调函数。使用callback异步回调。
   *
   * @param { Callback<observer.NavDestinationInfo> } callback - 回调函数。携带NavDestinationInfo，返回NavDestination的信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  onNavDestinationSizeChange(callback: Callback<observer.NavDestinationInfo>): void;

  /**
   * 移除使用onNavDestinationSizeChange接口注册的监听回调函数。使用callback异步回调。
   *
   * @param { Callback<observer.NavDestinationInfo> } [callback] - 需要被移除的回调函数。不传参数时，移除所有回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  offNavDestinationSizeChange(callback?: Callback<observer.NavDestinationInfo>): void;

  /**
   * 注册监听回调函数，当属于指定Navigation的可见NavDestination的大小发生变化时，会触发该回调函数。使用callback异步回调。
   *
   * @param { number } navigationUniqueId - 希望监听NavDestination所属的Navigation的唯一ID，可以通过[queryNavigationInfo]{@link
   *     BaseCustomComponent#queryNavigationInfo}获取。
   * @param { Callback<observer.NavDestinationInfo> } callback - Callback to be removed. If no parameter is passed,
   *     all callbacks with the same **navigationUniqueId** setting are removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  onNavDestinationSizeChangeByUniqueId(navigationUniqueId: number, callback: Callback<observer.NavDestinationInfo>): void;

  /**
   * 移除使用onNavDestinationSizeChangeByUniqueId接口注册的监听回调函数。使用callback异步回调。
   *
   * @param { number } navigationUniqueId - 希望监听的NavDestination所属的Navigation的唯一ID，可以通过 [queryNavigationInfo]{@link
   *     BaseCustomComponent#queryNavigationInfo}获取。
   * @param { Callback<observer.NavDestinationInfo> } [callback] - 需要被移除的回调函数。不传参数时，移除所有指定了相同navigationUniqueId的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  offNavDestinationSizeChangeByUniqueId(navigationUniqueId: number, callback?: Callback<observer.NavDestinationInfo>): void;
}

/**
* Swiper组件的内容区信息。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export interface SwiperContentInfo {

  /**
   * Swiper组件的id。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  id: string;

  /**
   * Swiper子组件的唯一标识符。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  uniqueId: number;

  /**
   * 当前处于显示状态的Swiper子组件的信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  swiperItemInfos: Array<SwiperItemInfo>;
}

/**
* Swiper子组件的信息。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export interface SwiperItemInfo {

  /**
   * SwiperItem的uniqueId值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  uniqueId: number;

  /**
   * Swiper子组件在Swiper中的索引。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  index: number;
}

/**
 * 提供获取组件绘制区域坐标和大小的能力。
 * 
 * > **说明：**
 * >
 * > - 本Class首批接口从API version 10开始支持。
 * >
 * > - 以下API需先使用UIContext中的[getComponentUtils()]{@link UIContext#getComponentUtils}方法获取到ComponentUtils对象，再通过该对象调用对应方法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export class ComponentUtils {

  /**
   * 获取组件大小、位置、平移、缩放、旋转及仿射矩阵属性信息。
   * 
   * > **说明：**
   * >
   * > 该接口需要在目标组件布局完成以后获取目标组件区域大小信息，建议在[布局回调]{@link @ohos.arkui.inspector:inspector}中使用该接口。如果组件动态创建但未挂载组件树，则无法通过该接口获取正常的
   * > 组件信息。因为组件在未挂载组件树的情况下，一般未经过UI框架正常的测量与布局，此时请确保组件正常挂载组件树后再尝试获取组件信息。
   *
   * @param { string } id - 组件唯一标识id。
   * @returns { componentUtils.ComponentInfo } Size, position, translation, scaling, rotation, and affine matrix
   *     information of the component.
   * @throws { BusinessError } 100001 - UI execution context not found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getRectangleById(id: string): componentUtils.ComponentInfo;
}

/**
* class OverlayManager
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export class OverlayManager {

  /**
   * Adds a specified ComponentContent node to the OverlayManager.
   *
   * @param { ComponentContent } content - 	Content to add to the target node on the **OverlayManager**.<br>
   *     **NOTE**<br>
   *     By default, the new node is centered on the page and stacked according to its stacking level.
   * @param { number } [ index ] - Stacking level of the new node on the **OverlayManager**.<br>
   *     **NOTE**<br>
   *     If the value is greater than or equal to 0, a larger value means a higher layer for
   *     the **ComponentContent** node. If multiple **ComponentContent** nodes have the same index,
   *     the later-added ones appear above earlier ones.<br>If the value is less than 0, **null**, or **undefined**,
   *     the **ComponentContent** node is added at the highest level by default.<br>
   *     If the same **ComponentContent** node is added multiple times, only the last added one is retained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  addComponentContent(content: ComponentContent, index?: number): void;

  /**
   * Creates a floating layer node with the specified display order.
   * This API allows you to define the stacking order of the nodes when they are created.
   *
   * @param { ComponentContent } content - Content to add to the target node on the **OverlayManager**.
   *     <br>**NOTE**<br>
   *     By default, the new node is centered on the page and stacked according to its stacking level.
   * @param { LevelOrder } [ levelOrder ] - Display order of the new floating layer node.<br>
   *     **NOTE**<br>
   *     - Default value: **LevelOrder.clamp(0)**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  addComponentContentWithOrder(content: ComponentContent, levelOrder?: LevelOrder): void;

  /**
   * Removes a specified ComponentContent node from the OverlayManager
   *
   * @param { ComponentContent } content - Content to remove from the **OverlayManager**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  removeComponentContent(content: ComponentContent): void;

  /**
   * Show the ComponentContent.
   *
   * @param { ComponentContent } content - Content to show on the **OverlayManager**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  showComponentContent(content: ComponentContent): void;

  /**
   * Hide the ComponentContent.
   *
   * @param { ComponentContent } content - Content to hide on the **OverlayManager**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  hideComponentContent(content: ComponentContent): void;

  /**
   * Show all ComponentContents on the OverlayManager.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  showAllComponentContents(): void;

  /**
   * Hide all ComponentContents on the OverlayManager.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  hideAllComponentContents(): void;

  /**
   * 打开具有指定ComponentContent和选项的浮层。
   *
   * @param { ComponentContent } content - OverlayManager新增节点需要添加的内容。
   *     <p><strong>注意</strong>：。
   *     <br>默认情况下，新节点在页面中居中，并根据其堆叠级别进行堆叠。
   *     </p>
   * @param { OrderOverlayOptions } [ options ] - Options for the overlay.
   * @returns { Promise<void> } 函数返回的promise。
   * @throws { BusinessError } 103307 - The overlay cannot be opened due to the system pop-up window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  openOrderOverlay(content: ComponentContent, options?: OrderOverlayOptions): Promise<void>;
}

/**
 * 提供控制放大镜的能力。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export class Magnifier {

  /**
   * 将放大镜和组件绑定。
   *
   * @param { string } id - 组件id
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  bind(id: string): void;

  /**
   * 设置放大镜显示内容的位置。
   *
   * @param { number } x - 放大镜显示内容相对组件水平方向坐标。
   * 单位为vp。
   * @param { number } y - 放大镜显示内容相对组件垂直方向坐标。
   * 单位为vp。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  show(x: number, y: number): void;

  /**
   * 将放大镜和组件解绑。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  unbind(): void;
}

/**
* interface AtomicServiceBar
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export interface AtomicServiceBar {

  /**
   * Set the visibility of the bar, except the icon.
   *
   * @param { boolean } visible - whether this bar is visible.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   */
  setVisible(visible: boolean): void;

  /**
   * Set the background color of the bar.
   *
   * @param { Nullable< Color | number | string> } color - the color to set, undefined indicates using default.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  setBackgroundColor(color: Nullable< Color | number | string>): void;

  /**
   * Set the title of the bar.
   *
   * @param { string } content - the content of the bar.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  setTitleContent(content: string): void;

  /**
   * Set the font style of the bar's title.
   *
   * @param { FontStyle } font - the font style of the bar's title.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  setTitleFontStyle(font: FontStyle): void;

  /**
   * Set the color of the icon on the bar.
   *
   * @param { Nullable< Color | number | string> } color - the color to set to icon, undefined indicates using default.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  setIconColor(color: Nullable< Color | number | string>): void;

  /**
   * Get size and position of the bar.
   *
   * @returns { Frame } The size and position of bar in vp relative to window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  getBarRect(): Frame;

  /**
   * 当appbar的组件大小发生变化时会触发调用。
   *
   * @param { Callback<Frame> } callback - 回调函数的参数为Frame。当传入的callback为undefined时表示取消监听appbar组件的大小变化。回调函数触发时，回调函数的参数不可能为undefined或者null。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onBarRectChange(callback: Callback<Frame>): void;
}

/**
 * 特定手势回调函数触发时的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export interface GestureTriggerInfo {

  /**
   * 手势事件对象。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  event: GestureEvent;

  /**
   * 手势识别器对象。可从中获取手势的详细信息，但请勿在本地保留此对象，因为当节点释放后该对象可能失效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  current: GestureRecognizer;

  /**
   * 手势动作回调阶段。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  currentPhase: GestureActionPhase;

  /**
   * 触发手势的节点。默认值为null，表示没有触发手势的节点。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  node?: FrameNode;
}

/**
 * 该参数用于指定需要监听的手势回调阶段（传入空数组将无效），仅当手势触发指定阶段时才会发送通知。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export interface GestureObserverConfigs {

  /**
   * 手势事件对象。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  actionPhases: Array<GestureActionPhase>;
}

/**
 * Represents a dynamic synchronization scene.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
export class DynamicSyncScene {

  /**
   * Sets the FrameRateRange of the DynamicSyncScene.
   *
   * @param { ExpectedFrameRateRange } range - The range of frameRate.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  setFrameRateRange(range: ExpectedFrameRateRange): void;

  /**
   * Gets the FrameRateRange of the DynamicSyncScene.
   *
   * @returns { ExpectedFrameRateRange } The range of frameRate.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  getFrameRateRange(): ExpectedFrameRateRange;
}

/**
* 提供Swiper组件相关帧率的配置。
*
* > **说明**
* > SwiperDynamicSyncScene继承自[DynamicSyncScene]{@link @ohos.arkui.UIContext}，对应Swiper的动态帧率场景。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
export class SwiperDynamicSyncScene extends DynamicSyncScene {

  /**
   * Swiper的动态帧率场景。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  readonly type: SwiperDynamicSyncSceneType;
}

/**
* Represents a dynamic synchronization scene of Marquee.
*
 * @extends DynamicSyncScene
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 14 dynamic
 */
export class MarqueeDynamicSyncScene extends DynamicSyncScene {

  /**
   * Type of the MarqueeDynamicSyncSceneType.
   *
   * @type { MarqueeDynamicSyncSceneType }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 14 dynamic
   */
  readonly type: MarqueeDynamicSyncSceneType;
}

/**
 * 提供发起主动拖拽的能力，当应用接收到触摸或长按等事件时可以主动发起拖拽的动作，并在其中携带拖拽信息。
 * 
 * > **说明：**
 * >
 * > 以下API需先使用UIContext中的[getDragController()]{@link UIContext#getDragController}方法获取DragController实例，再通过此实例调用对应方法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export class DragController {

  /**
   * 主动发起拖拽能力，传入拖拽发起后跟手效果所拖拽的对象以及携带拖拽信息。通过回调返回拖拽事件结果。
   *
   * @param { CustomBuilder | DragItemInfo } custom - 拖拽发起后跟手效果所拖拽的对象。 <br/> **说明：** <br/>不支持全局builder。如果builder中使用了
   *     [Image]{@link image}组件，应尽量开启同步加载，即配置Image的[syncLoad]{@link ImageAttribute#syncLoad}为true。该builder只用于生成当次拖拽中显示的图
   *     片。builder的根组件宽高为0时，无法生成拖拽显示的图片导致拖拽失败。builder的修改不会同步到当前正在拖拽的图片，对builder的修改需要在下一次拖拽时生效。
   * @param { dragController.DragInfo } dragInfo - 拖拽信息。
   * @param { AsyncCallback<{ event: DragEvent, extraParams: string }> } callback - Callback used to return the result.<br>
   *     - **event**: drag event information that includes only the drag result.<br>- **extraParams**: extra
   *     information about the drag event. [since 11 - 11]
   * @param { AsyncCallback<dragController.DragEventParam> } callback - 拖拽结束返回结果的回调<br/>- event：拖拽事件信息，仅包括拖拽结果。<br/>-
   *     extraParams：拖拽事件额外信息。 [since 12]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal handling failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  executeDrag(custom: CustomBuilder | DragItemInfo, dragInfo: dragController.DragInfo,
    callback: AsyncCallback<dragController.DragEventParam>): void;

  /**
   * 主动发起拖拽能力，传入拖拽发起后跟手效果所拖拽的对象以及携带拖拽信息。通过Promise返回拖拽事件结果。
   *
   * @param { CustomBuilder | DragItemInfo } custom - 拖拽发起后跟手效果所拖拽的对象。
   * @param { dragController.DragInfo } dragInfo - 拖拽信息。
   * @returns { Promise<{ event: DragEvent, extraParams: string }> } Callback used to return the result.
   *     <br>- **event**: drag event information that includes only the drag result.
   *     <br>- **extraParams**: extra information about the drag event. [since 11 - 11]
   * @returns { Promise<dragController.DragEventParam> } A Promise with the drag event information. [since 12]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal handling failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  executeDrag(custom: CustomBuilder | DragItemInfo, dragInfo: dragController.DragInfo)
    : Promise<dragController.DragEventParam>;

  /**
   * 创建拖拽的Action对象，需要显式指定拖拽背板图（可多个），以及拖拽的数据，跟手点等信息；当通过一个已创建的Action对象发起的拖拽未结束时，无法再次创建新的Action对象，接口会抛出异常；当Action对象的生命周期结束
   * 后，注册在该对象上的回调函数会失效，因此需要在一个尽量长的作用域下持有该对象，并在每次发起拖拽前通过createDragAction返回新的对象覆盖旧值。
   * 
   * > **说明：**
   * >
   * > 建议控制传递的拖拽背板数量，传递过多容易导致拖起的效率问题。
   *
   * @param { Array<CustomBuilder | DragItemInfo> } customArray - 拖拽发起后跟手效果所拖拽的对象。
   * @param { dragController.DragInfo } dragInfo - 拖拽信息。
   * @returns { dragController.DragAction } **DragAction** object, which is used to subscribe to drag state changes and
   *     start the drag service.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal handling failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  createDragAction(customArray: Array<CustomBuilder | DragItemInfo>, dragInfo: dragController.DragInfo): dragController.DragAction;

  /**
   * 返回一个代表拖拽背板的对象。
   *
   * @returns { dragController.DragPreview } **DragPreview** object. It provides the API for setting the preview style.
   *     It does not work in the **OnDrop** and **OnDragEnd** callbacks.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getDragPreview(): dragController.DragPreview;

  /**
   * 当目标从父组件拖拽到子组件时，通过该方法设置是否会触发父组件的onDragLeave的回调。
   *
   * @param { boolean } enable - 将目标从父组件拖拽到子组件时，是否会触发父组件的onDragLeave的回调。true表示触发父组件的onDragLeave的回调，false表示不触发。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setDragEventStrictReportingEnabled(enable: boolean): void;

  /**
   * 控制应用是否可以发起拖拽。
   *
   * @param { dragController.DragStartRequestStatus } requestStatus - 定义应用是否可以发起拖拽。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  notifyDragStartRequest(requestStatus: dragController.DragStartRequestStatus): void;

  /**
   * 当使用[startDataLoading]{@link DragEvent.startDataLoading}获取拖拽数据时，可调用该接口取消数据传输。仅可在拖拽释放后调用。
   *
   * @param { string } key - 拖拽数据的标识，用于区分每次拖拽。key可通过startDataLoading接口获取。
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 190004 - Operation failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  cancelDataLoading(key: string): void;

  /**
   * 中断待执行的跟手变形落位动效，并立即触发其收尾流程。
   *
   * @returns { boolean } 返回中断结果。<br>返回true表示中断成功，返回false表示当前不存在待中断的跟手变形落位动效。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interruptFollowHandMorphDropAnimation(): boolean;

  /**
   * 当组件的类型与配置的[allowDrop]{@link CommonMethod#allowDrop}无交集时可显示禁用角标。通常，当组件可以接收或处理拖拽数据，或当它返回DragBehavior.COPY向系统声明数据以复制方式
   * 处理时，拖拽对象会显示加号及数据编号的角标。如果返回DragBehavior.MOVE以向系统声明数据以剪切方式处理，拖拽对象将只显示数据编号的角标。当目标进行拖拽时，若系统决定或组件显式声明无法处理拖拽数据，可通过该方法检查是否
   * 应显示拖拽禁止角标。该接口暂不支持[UIExtension]{@link @ohos.arkui.uiExtension:uiExtension}。
   *
   * @param { boolean } enabled - 当组件的类型与配置的[allowDrop]{@link CommonMethod#allowDrop}无交集时可显示禁用角标，当目标进行拖拽时，通过
   *     enableDropDisallowedBadge方法检查是否显示拖拽禁止角标。true表示显示拖拽禁止角标，false表示不显示拖拽禁止角标。默认值为false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  enableDropDisallowedBadge(enabled: boolean): void;
}

/**
 * class MeasureUtils
 *
 * <p><strong>NOTE</strong>:
 * <br>You must first use getMeasureUtils() in UIContext to obtain a MeasureUtils instance,
 * and then call the APIs using the obtained instance.
 * </p>
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export class MeasureUtils {

  /**
   * Obtains the width of the specified text in a single line layout.
   *
   * @param { MeasureOptions } options - Options.
   * @returns { number } - The unit is px.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  measureText(options: MeasureOptions): number;

  /**
   * Obtains the width and height of the specified text in a single line layout.
   *
   * @param { MeasureOptions } options - Options of measure area occupied by text.
   * @returns { SizeOptions } width and height for text to display.The return values for text width and height are both
   *     in px.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  measureTextSize(options: MeasureOptions): SizeOptions;

  /**
   * 获取样式字符串的布局信息。
   *
   * @param { StyledString } styledString - 样式化的字符串值。
   * @param { TextLayoutOptions } [options] - 布局选项。
   * @returns { Array<Paragraph> } 段落结果
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 20 dynamic
   */
  getParagraphs(styledString: StyledString, options?: TextLayoutOptions): Array<Paragraph>;
}

/**
 * 提供控制焦点的能力，如清除、移动和激活焦点等功能。
 * 
 * > **说明：**
 * >
 * > 以下API需先使用UIContext中的[getFocusController()]{@link UIContext#getFocusController}方法获取FocusController实例，再通过该实例调用对应方法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 */
export class FocusController {

  /**
   * 清除焦点，将焦点强制转移到页面根容器节点，焦点链路上其他节点失焦。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  clearFocus(): void;

  /**
   * 通过组件的id将焦点转移到组件树对应的实体节点，当前帧生效。
   *
   * @param { string } key - 节点对应的[组件标识]{@link common}。
   * @throws { BusinessError } 150001 - the component cannot be focused.
   * @throws { BusinessError } 150002 - This component has an unfocusable ancestor.
   * @throws { BusinessError } 150003 - the component is not on tree or does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  requestFocus(key: string): void;

  /**
   * 设置当前界面的[焦点激活态](docroot://ui/arkts-common-events-focus-event.md)。
   *
   * @param { boolean } isActive - 设置是否进入/退出焦点激活态。<br/>true表示设置进入焦点激活态，false表示设置退出焦点激活态。
   * @param { boolean } [autoInactive] - 设置焦点激活态退出逻辑。<br/>为true时，会自动在触摸事件、鼠标事件触发时退出，为false时，仅受开发者API控制。<br/>默认值：true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  activate(isActive: boolean, autoInactive?: boolean): void;

  /**
   * 返回UI实例的焦点激活态。
   * 
   * 焦点激活态可参考[基础概念：焦点激活态](docroot://ui/arkts-common-events-focus-event.md#基础概念)。
   *
   * @returns { boolean } 返回UI实例的焦点激活态。true表示当前进入焦点激活态，false表示当前已退出焦点激活态。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  isActive(): boolean;

  /**
   * 设置页面切换时，新的页面是否需要主动获取焦点。
   *
   * @param { boolean } isAutoFocusTransfer - 设置页面切换时，新的页面是否需要主动获取焦点，例如[Router]{@link @ohos.router:router}、
   *     [Navigation]{@link navigation}、[Menu]{@link menu}、[Dialog]{@link @ohos.arkui.advanced.Dialog}、
   *     [Popup]{@link @ohos.arkui.advanced.Popup}等。true表示需要主动获取焦点，false表示不需要主动获取焦点。默认值为true。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  setAutoFocusTransfer(isAutoFocusTransfer: boolean): void;

  /**
   * 设置按键事件处理的优先级。
   *
   * @param { KeyProcessingMode } mode - 按键处理模式。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  setKeyProcessingMode(mode: KeyProcessingMode): void;
}

/**
 * 光标样式。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Pointer
 * @atomicservice
 * @since 12 dynamic
 */
export type PointerStyle = pointer.PointerStyle;

/**
 * 提供光标样式设置的能力。
 * 
 * > **说明：**
 * >
 * > - 本Class首批接口从API version 12开始支持。
 * >
 * > - 以下API需先使用UIContext中的[getCursorController()]{@link UIContext#getCursorController}方法获取CursorController实例，再通过此实例调用对应方法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export class CursorController {

  /**
   * 恢复默认的光标样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  restoreDefault(): void;

  /**
   * 更改当前的鼠标光标样式。
   * 
   * > **说明：**
   * >
   * > 该接口调用后不会立即生效，而是在下一帧改变鼠标光标样式。
   *
   * @param { PointerStyle } value - 光标样式。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setCursor(value: PointerStyle): void;

  /**
   * 设置自定义鼠标光标样式。
   * 
   * > **说明：**
   * >
   * > 该接口调用后不会立即生效，而是在下一帧改变鼠标光标样式。
   *
   * @param { image.PixelMap } value - 自定义鼠标光标样式的像素图。最大尺寸为256*256px，超过该尺寸时设置自定义鼠标光标样式不生效。
   * @param { int } [focusX] - 自定义光标的焦点X坐标。焦点指的是鼠标实际点击的位置，焦点设置为(0, 0)时表示图片左上角为实际点击位置。<br/>默认值：0<br/>单位：px<br/>取值范围：
   *     [0, +∞)
   * @param { int } [focusY] - 自定义光标的焦点Y坐标。<br/>默认值：0<br/>单位：px<br/>取值范围：[0, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  setCustomCursor(value: image.PixelMap, focusX?: int, focusY?: int): void;
}

/**
* class ContextMenuController
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare class ContextMenuController {

  /**
   * Close context menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  close(): void;
}

/**
* 用于设置下一帧渲染时需要执行的任务。
*
* > **说明：**
* >
* > - 以下API需要配合[UIContext]{@link @ohos.arkui.UIContext}中的[postFrameCallback]{@link UIContext#postFrameCallback}和
* > [postDelayedFrameCallback]{@link UIContext#postDelayedFrameCallback}使用。开发者需要继承该类并重写
* > [onFrame]{@link FrameCallback#onFrame}或[onIdle]{@link FrameCallback#onIdle}方法，实现具体的业务逻辑。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export abstract class FrameCallback {

  /**
   * 在下一帧进行渲染时，该方法将被执行。
   *
   * @param { number } frameTimeInNano - 下一帧渲染开始执行的时间，以纳秒为单位。<br/>取值范围：[0, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onFrame(frameTimeInNano: number): void;

  /**
   * 在下一帧渲染结束时，如果距离下一个Vsync信号到来还有1ms以上的剩余时间，该方法将被执行，否则将顺延至后面的帧。
   *
   * @param { number } timeLeftInNano - 这一帧剩余的空闲时间，以纳秒为单位。<br/>取值范围：[0, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onIdle(timeLeftInNano: number): void;
}

/**
* 当前组件所在Ability的上下文。
*
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export type Context = common.Context;

/**
 * 提供获取组件截图的能力，包括已加载的组件的截图和没有加载的组件的截图。
 * 
 * > **说明：**
 * >
 * > - 本Class首批接口从API version 12开始支持。
 * >
 * > - 以下API需先使用UIContext中的[getComponentSnapshot()]{@link UIContext#getComponentSnapshot}方法获取ComponentSnapshot对象，再通过此实例调用对应方法。
 * >
 * > - 缩放、平移、旋转等图形变换属性只对被截图组件的子组件生效；对目标组件本身应用图形变换属性不生效，显示的还是图形变换前的效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 */
export class ComponentSnapshot {

  /**
   * 获取已加载的组件的截图，传入组件的[组件标识]{@link common}，找到对应组件进行截图。使用callback异步回调。
   * 
   * > **说明：** 
   * >
   * > 截图会获取最近一帧的绘制内容。如果在组件触发更新的同时调用截图，更新的渲染内容不会被截取到，截图会返回上一帧的绘制内容。
   *
   * @param { string } id - 目标组件的[组件标识]{@link common}。<br/>**说明：** 不支持未挂树组件，当传入的组件标识是离屏或缓存未挂树的节点时，系统不会对其进行截图。
   * @param { AsyncCallback<image.PixelMap> } callback - 回调函数。当截图返回结果成功，err为undefined，data为获取到的image.
   *     [PixelMap]{@link @ohos.multimedia.image:image.PixelMap}；否则为错误对象。
   * @param { componentSnapshot.SnapshotOptions } [options] - 截图相关的自定义参数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options. [since 23]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get(id: string, callback: AsyncCallback<image.PixelMap>, options?: componentSnapshot.SnapshotOptions): void;

  /**
   * 获取已加载的组件的截图，传入组件的[组件标识]{@link common}，找到对应组件进行截图。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 截图会获取最近一帧的绘制内容。如果在组件触发更新的同时调用截图，更新的渲染内容不会被截取到，截图会返回上一帧的绘制内容。
   *
   * @param { string } id - 目标组件的[组件标识]{@link common}。<br/>**说明：** 不支持未挂树组件，当传入的组件标识是离屏或缓存未挂树的节点时，系统不会对其进行截图。
   * @param { componentSnapshot.SnapshotOptions } [options] - 截图相关的自定义参数。
   * @returns { Promise<image.PixelMap> } Promise used to return the snapshot object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options. [since 23]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get(id: string, options?: componentSnapshot.SnapshotOptions): Promise<image.PixelMap>;

  /**
   * 传入[CustomBuilder]{@link common:CustomBuilder}自定义组件，系统对其进行离屏构建后进行截图。使用callback异步回调。
   * 
   * > **说明：** 
   * >
   * > - 由于需要等待组件构建、渲染成功，离屏截图的回调有500ms以内的延迟，不适宜使用在对性能敏感的场景。
   * >
   * > - 部分执行耗时任务的组件可能无法及时在截图前加载完成，因此会截取不到加载成功后的图像。例如：加载网络图片的[Image]{@link image}组件、[Web]{@link web}组件。
   *
   * @param { CustomBuilder } builder - 自定义组件构建函数。<br/>**说明：** 不支持全局builder。<br/>builder的根组件宽高为0时，截图操作会失败并抛出100001错误码。
   * @param { AsyncCallback<image.PixelMap> } callback - 回调函数。当截图返回结果成功，err为undefined，data为获取到的image.
   *     [PixelMap]{@link @ohos.multimedia.image:image.PixelMap}；否则为错误对象。支持在回调中获取离屏组件绘制区域坐标和大小。
   * @param { number } [delay] - 指定触发截图指令的延迟时间。当布局中使用了图片组件时，需要指定延迟时间，以便系统解码图片资源。资源越大，解码需要的时间越长，建议尽量使用不需要解码的PixelMap资源。<br/>
   *     当使用PixelMap资源或对Image组件设置[syncLoad]{@link ImageAttribute#syncLoad}为true时，可以配置delay为0，强制不等待触发截图。该延迟时间并非指接口从调
   *     用到返回的时间，由于系统需要对传入的builder进行临时离屏构建，因此返回的时间通常要比该延迟时间长。<br/>**说明：** 截图接口传入的builder中，不应使用状态变量控制子组件的构建，如果必须要使用，在调用截图
   *     接口时，也不应再有变化，以避免出现截图不符合预期的情况。<br/> 默认值：300 <br/> 单位：毫秒 <br/> 取值范围：[0, +∞)，小于0时按默认值处理。
   * @param { boolean } [checkImageStatus] - 指定是否允许在截图之前，校验图片解码状态。如果为true，则会在截图之前检查所有Image组件是否已经解码完成，如果没有完成检查，则会放弃截图并返回异
   *     常。<br/>默认值：false
   * @param { componentSnapshot.SnapshotOptions } [options] - 截图相关的自定义参数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The builder is not a valid build function.
   * @throws { BusinessError } 160001 - An image component in builder is not ready for taking a snapshot. The check for
   *     the ready state is required when the checkImageStatus option is enabled.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options. [since 23]
   * @throws { BusinessError } 160004 - isAuto(true) is not supported for offscreen node snapshots. [since 23]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  createFromBuilder(builder: CustomBuilder, callback: AsyncCallback<image.PixelMap>,
    delay?: number, checkImageStatus?: boolean, options?: componentSnapshot.SnapshotOptions): void;

  /**
   * 传入[CustomBuilder]{@link common:CustomBuilder}自定义组件，系统对其进行离屏构建后进行截图。使用Promise异步回调。
   * 
   * > **说明：** 
   * >
   * > - 由于需要等待组件构建、渲染成功，离屏截图的回调有500ms以内的延迟，不适宜使用在对性能敏感的场景。
   * >
   * > - 部分执行耗时任务的组件可能无法及时在截图前加载完成，因此会截取不到加载成功后的图像。例如：加载网络图片的[Image]{@link image}组件、[Web]{@link web}组件。
   *
   * @param { CustomBuilder } builder - 自定义组件构建函数。<br/>**说明：** 不支持全局builder。<br/>builder的根组件宽高为0时，截图操作会失败并抛出100001错误码。
   * @param { number } [delay] - 指定触发截图指令的延迟时间。当布局中使用了图片组件时，需要指定延迟时间，以便系统解码图片资源。资源越大，解码需要的时间越长，建议尽量使用不需要解码的PixelMap资源。<
   *     br/> 当使用PixelMap资源或对Image组件设置[syncLoad]{@link ImageAttribute#syncLoad}为true时，可以配置delay为0，强制不等待触发截图。该延迟时间并非指接口从调
   *     用到返回的时间，由于系统需要对传入的builder进行临时离屏构建，因此返回的时间通常要比该延迟时间长。<br/>**说明：** 截图接口传入的builder中，不应使用状态变量控制子组件的构建，如果必须要使用，在调用截图
   *     接口时，也不应再有变化，以避免出现截图不符合预期的情况。<br/> 默认值：300 <br/> 单位：毫秒<br/> 取值范围：[0, +∞)，小于0时按默认值处理。
   * @param { boolean } [checkImageStatus] - 指定是否允许在截图之前，校验图片解码状态。如果为true，则会在截图之前检查所有Image组件是否已经解码完成，如果没有完成检查，则会放弃截图并返回异
   *     常。<br/>默认值：false
   * @param { componentSnapshot.SnapshotOptions } [options] - 截图相关的自定义参数。
   * @returns { Promise<image.PixelMap> } Promise used to return the snapshot object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The builder is not a valid build function.
   * @throws { BusinessError } 160001 - An image component in builder is not ready for taking a snapshot. The check for
   *     the ready state is required when the checkImageStatus option is enabled.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options. [since 23]
   * @throws { BusinessError } 160004 - isAuto(true) is not supported for offscreen node snapshots. [since 23]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  createFromBuilder(builder: CustomBuilder, delay?: number,
    checkImageStatus?: boolean, options?: componentSnapshot.SnapshotOptions): Promise<image.PixelMap>;

  /**
   * 获取已加载的组件的截图。传入组件的[组件标识]{@link common}，找到对应组件进行截图，同步等待截图完成返回[PixelMap]{@link @ohos.multimedia.image:image.PixelMap}。
   * 本方法会阻塞主线程，请谨慎使用。接口的最大等待时间为3s，如果3s后未返回将会抛出异常。
   * 
   * > **说明：**
   * >
   * > 截图会获取最近一帧的绘制内容。如果在组件触发更新的同时调用截图，更新的渲染内容不会被截取到，截图会返回上一帧的绘制内容。
   *
   * @param { string } id - 目标组件的[组件标识]{@link common}。 <br/>**说明：** 不支持未挂树组件，当传入的组件标识是离屏或缓存未挂树的节点时，系统不会对其进行截图。
   * @param { componentSnapshot.SnapshotOptions } [options] - 截图相关的自定义参数。
   * @returns { image.PixelMap } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @throws { BusinessError } 160002 - Timeout.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options. [since 23]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getSync(id: string, options?: componentSnapshot.SnapshotOptions): image.PixelMap;

  /**
   * 获取已加载的组件的截图，传入组件的uniqueId，找到对应组件进行截图。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 截图会获取最近一帧的绘制内容。如果在组件触发更新的同时调用截图，更新的渲染内容不会被截取到，截图会返回上一帧的绘制内容。
   *
   * @param { number } uniqueId - 目标组件的uniqueId。FrameNode节点的uniqueId可通过
   *     [getUniqueId]{@link FrameNode:FrameNode#getUniqueId}接口获取。 <br/>**说明：** 不支持未挂树组件，当传入的组件标识是离屏或缓存未挂树的节点时，系统不会对其进行截
   *     图。
   * @param { componentSnapshot.SnapshotOptions } [options] - 截图相关的自定义参数。
   * @returns { Promise<image.PixelMap> } Promise used to return the snapshot object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options. [since 23]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  getWithUniqueId(uniqueId: number, options?: componentSnapshot.SnapshotOptions): Promise<image.PixelMap>;

  /**
   * 获取已加载的组件的截图，传入组件的uniqueId，找到对应组件进行截图。同步等待截图完成返回[PixelMap]{@link @ohos.multimedia.image:image.PixelMap}。
   * 
   * > **说明：**
   * >
   * > 截图会获取最近一帧的绘制内容。如果在组件触发更新的同时调用截图，更新的渲染内容不会被截取到，截图会返回上一帧的绘制内容。
   *
   * @param { number } uniqueId - 目标组件的uniqueId。FrameNode节点的uniqueId可通过
   *     [getUniqueId]{@link FrameNode:FrameNode#getUniqueId}接口获取。<br/>**说明：** 不支持未挂树组件，当传入的组件标识是离屏或缓存未挂树的节点时，系统不会对其进行截
   *     图。
   * @param { componentSnapshot.SnapshotOptions } [options] - 截图相关的自定义参数。
   * @returns { image.PixelMap } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @throws { BusinessError } 160002 - Timeout.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options. [since 23]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  getSyncWithUniqueId(uniqueId: number, options?: componentSnapshot.SnapshotOptions): image.PixelMap;

  /**
   * 将传入的content对象进行截图。使用Promise异步回调。
   *
   * @param { ComponentContent<T> } content - 当前UIContext显示的组件内容。
   * @param { number } [delay] - 指定触发截图指令的延迟时间。当布局中使用了图片组件时，需要指定延迟时间，以便系统解码图片资源。资源越大，解码需要的时间越长，建议尽量使用不需要解码的PixelMap资源。<
   *     br/> 当使用PixelMap资源或对Image组件设置[syncLoad]{@link ImageAttribute#syncLoad}为true时，可以配置delay为0，强制不等待触发截图。该延迟时间并非指接口从调
   *     用到返回的时间，由于系统需要对传入的builder进行临时离屏构建，因此返回的时间通常要比该延迟时间长。<br/>**说明：** 截图接口传入的builder中，不应使用状态变量控制子组件的构建，如果必须要使用，在调用截图
   *     接口时，也不应再有变化，以避免出现截图不符合预期的情况。<br/> 取值范围：[0,+∞) ，小于0时按默认值处理。<br/>默认值：300 <br/> 单位：毫秒
   * @param { boolean } [checkImageStatus] - 指定是否允许在截图之前，校验图片解码状态。如果为true，则会在截图之前检查所有Image组件是否已经解码完成，如果没有完成检查，则会放弃截图并返回异
   *     常。<br/>默认值：false
   * @param { componentSnapshot.SnapshotOptions } [options] - 截图相关的自定义参数。可以指定截图时图形侧绘制pixelmap的缩放比例与是否强制等待系统执行截图指令前所有绘制指令
   *     都执行完成之后再截图。
   * @returns { Promise<image.PixelMap> } Promise used to return the snapshot object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The builder is not a valid build function.
   * @throws { BusinessError } 160001 - An image component in builder is not ready for taking a snapshot. The check for
   *     the ready state is required when the checkImageStatus option is enabled.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options. [since 23]
   * @throws { BusinessError } 160004 - isAuto(true) is not supported for offscreen node snapshots. [since 23]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  createFromComponent<T extends Object>(content: ComponentContent<T>, delay?: number,
    checkImageStatus?: boolean, options?: componentSnapshot.SnapshotOptions): Promise<image.PixelMap>;

  /**
   * 传入两个组件的ID，获取范围内的组件的截图，并通过Promise返回结果。
   * 
   * > **说明：**
   * >
   * > start对应的组件和end对应的组件必须为同一棵组件树上的组件，且start对应的组件需要为end对应的组件的祖先组件。
   *
   * @param { NodeIdentity } start - 范围开始的组件的ID。
   * @param { NodeIdentity } end - 范围结束的组件的ID。
   * @param { boolean } isStartRect - 范围是否以开始组件的外接矩形为准。<br/>true表示以开始组件的外接矩形为准，false表示以结束组件的外接矩形为准。<br/>默认值为true。
   * @param { componentSnapshot.SnapshotOptions } [options] - 截图相关的自定义参数，不支持region参数。
   * @returns { Promise<image.PixelMap> } Result of the snapshot.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 100001 - Invalid ID detected.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options. [since 23]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  getWithRange(start: NodeIdentity, end: NodeIdentity, isStartRect: boolean,
    options?: componentSnapshot.SnapshotOptions): Promise<image.PixelMap>;

  /**
   * 查询组件截图的最大尺寸限制。
   *
   * @returns { componentSnapshot.SnapshotSizeLimitation } Size limit of a component screenshot.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getSizeLimitation(): componentSnapshot.SnapshotSizeLimitation;
}

/**
 * 智慧手势处理基类。当通过[registerMonitor]{@link SmartGestureController#registerMonitor}接口动态自定义智慧手势行为时，其回调参数类型为具体的子类类型实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export abstract class BaseGestureHandlingProposal {

  /**
   * 智慧手势最终执行动作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  action: SmartGestureAction;

  /**
   * 智慧手势底层操作意图。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  operateIntention: OperateIntention;
}

/**
 * 带目标节点的智慧手势处理基类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export abstract class TargetedGestureProposal extends BaseGestureHandlingProposal {

  /**
   * 处理当前智慧手势的目标节点。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  node: FrameNode;
}

/**
 * 智慧手势点击动作处理。当通过[registerMonitor]{@link SmartGestureController#registerMonitor}接口动态自定义智慧手势行为时，设置返回值
 * [GestureHandlingResolution]{@link GestureHandlingResolution}的selectedProposal为该类型对象，会触发目标组件的点击操作。
 * 
 * > **说明：**
 * >
 * > - 该动作处理遵循“先选中，再点击”的处理语义。
 * >
 * > - 当目标节点尚未被选中时，本次处理会优先建立选中态，而不会立即触发点击。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class ClickActionProposal extends TargetedGestureProposal {

  /**
   * 智慧手势点击动作处理的构造函数。
   *
   * @param { FrameNode } node - 响应点击动作的目标节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(node: FrameNode);
}

/**
 * 智慧手势选中动作处理。当通过[registerMonitor]{@link SmartGestureController#registerMonitor}接口动态自定义智慧手势行为时，设置返回值
 * [GestureHandlingResolution]{@link GestureHandlingResolution}的selectedProposal为该类型对象，会使目标组件被选中。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class SelectActionProposal extends TargetedGestureProposal {

  /**
   * 智慧手势选中动作处理的构造函数。
   *
   * @param { FrameNode } node - 响应选中动作的目标节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(node: FrameNode);
}

/**
 * 智慧手势空动作处理。当通过[registerMonitor]{@link SmartGestureController#registerMonitor}接口动态自定义智慧手势行为时，设置返回值
 * [GestureHandlingResolution]{@link GestureHandlingResolution}的selectedProposal为该类型对象，不会触发任何动作。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class NoneActionProposal extends BaseGestureHandlingProposal {

  /**
   * 智慧手势空动作处理的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor();
}

/**
 * 智慧手势返回动作处理。当通过[registerMonitor]{@link SmartGestureController#registerMonitor}接口动态自定义智慧手势行为时，设置返回值
 * [GestureHandlingResolution]{@link GestureHandlingResolution}的selectedProposal为该类型对象，会返回上一页面。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class BackPressActionProposal extends BaseGestureHandlingProposal {

  /**
   * 智慧手势返回动作处理的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor();
}

/**
 * 智慧手势翻页动作处理，默认方向为向前翻页，包括向右和向下。当通过[registerMonitor]{@link SmartGestureController#registerMonitor}接口动态自定义智慧手势行为时，设置返回值
 * [GestureHandlingResolution]{@link GestureHandlingResolution}的selectedProposal为该类型对象，会触发目标组件的翻页操作。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class PageSwitchActionProposal extends TargetedGestureProposal {

  /**
   * 智慧手势翻页动作处理的构造函数。
   *
   * @param { FrameNode } node - 响应翻页动作的目标节点。
   * @param { int } pageCount - 翻页数量。<br/>取值范围：[0, +∞)，小于0时按0处理。<br/>单位为页。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(node: FrameNode, pageCount: int);

  /**
   * 智慧手势翻页数量。
   * 
   * 取值范围：[0, +∞)，小于0时按0处理。
   * 
   * 单位为页。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  pageCount: int;
}

/**
 * 智慧手势滚动动作处理，默认方向为向前滚动，包括向右和向下。当通过[registerMonitor]{@link SmartGestureController#registerMonitor}接口动态自定义智慧手势行为时，设置返回值
 * [GestureHandlingResolution]{@link GestureHandlingResolution}的selectedProposal为该类型对象，会触发目标组件的滚动操作。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class ScrollActionProposal extends TargetedGestureProposal {

  /**
   * 智慧手势滚动动作处理的构造函数。
   *
   * @param { FrameNode } node - 响应滚动动作的目标节点。
   * @param { double } distance - 滚动距离。<br/>取值范围：[0, +∞)，小于0时按0处理。<br/>单位为vp。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(node: FrameNode, distance: double);

  /**
   * 智慧手势滚动距离。
   * 
   * 取值范围：[0, +∞)，小于0时按0处理。
   * 
   * 单位为vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  distance?: double;
}

/**
 * 智慧手势处理结果声明类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class GestureHandlingResolution {

  /**
   * 智慧手势处理结果的构造函数。
   *
   * @param { boolean } isConsumed - 是否消费当前智慧手势。<br/>true表示消费当前智慧手势，此时如果未设置
   *     [selectedProposal]{@link GestureHandlingResolution#selectedProposal}沿用系统默认动作处理，设置了selectedProposal以自定义动作处理。
   *     <br/>false表示不消费，系统将本次智慧手势视为未处理。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(isConsumed: boolean);

  /**
   * 是否消费当前智慧手势。
   * 
   * true表示消费当前智慧手势，此时如果未设置selectedProposal沿用系统默认动作处理，设置了selectedProposal以自定义动作处理。
   * 
   * false表示不消费，系统将本次智慧手势视为未处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  isConsumed: boolean;

  /**
   * 用户指定的智慧手势处理行为。
   * 
   * 当isConsumed为true时，如果未设置selectedProposal沿用系统默认动作处理，设置了selectedProposal以自定义动作处理。
   * 
   * 当isConsumed为false时，selectedProposal设置不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  selectedProposal?: BaseGestureHandlingProposal;
}

/**
 * 提供智慧手势使能、监听、选中态控制，以及动态决策智慧手势行为的能力。
 * 
 * > **说明：**
 * >
 * > 以下API需先使用UIContext中的[getSmartGestureController()]{@link UIContext#getSmartGestureController}方法获取SmartGestureController实例，
 * > 再通过该实例调用对应方法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class SmartGestureController {

  /**
   * 设置是否启用智慧手势的敲一敲和划一划操作。
   * 
   * > **说明：**
   * >
   * > - 该接口仅影响智慧手势的敲一敲和划一划手势，不影响翻腕手势。
   * >
   * > - 关闭后，组件侧[smartGestureShortcut]{@link CommonMethod#smartGestureShortcut}配置仍会保留，但不会响应智慧手势的敲一敲和划一划手势。
   *
   * @param { boolean } enabled - 是否启用智慧手势的敲一敲和划一划手势处理。true表示启用，false表示关闭。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  enableSmartTapAndSlideGestures(enabled: boolean): void;

  /**
   * 注册智慧手势监听回调。在系统处理当前智慧手势前，应用可接收当前手势的默认动作处理并进行自定义干预。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > - 该接口使应用能够在系统处理当前智慧手势事件前接收其处理意图，并进行自定义干预。
   * >
   * > - 用户可通过该回调自定义决策本次智慧手势的行为。
   * >
   * > - 用户可注册多个监听回调，按照后注册先执行的顺序触发，当某个监听回调消费智慧手势事件后，即返回值[GestureHandlingResolution]{@link GestureHandlingResolution}.
   * > isConsumed为true时，后续监听回调不再执行。
   * >
   * > - 当用户重复注册相同回调时，只会保存首次注册的回调，重复注册不生效。
   * >
   * > - 回调返回值必须是合法的[GestureHandlingResolution]{@link GestureHandlingResolution}实例，否则本次改写不生效。
   *
   * @param { Callback<BaseGestureHandlingProposal, GestureHandlingResolution> } monitorCallback - 智慧手势监听回调。回调参数为系统给出的默认
   *     动作处理，返回值用于声明是否消费当前智慧手势以及是否替换默认动作处理。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  registerMonitor(monitorCallback: Callback<BaseGestureHandlingProposal, GestureHandlingResolution>): void;

  /**
   * 注销智慧手势监听回调。
   *
   * @param { Callback<BaseGestureHandlingProposal, GestureHandlingResolution> } monitorCallback - 需要注销的智慧手势监听回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  unregisterMonitor(monitorCallback: Callback<BaseGestureHandlingProposal, GestureHandlingResolution>): void;

  /**
   * 清空当前UIContext下注册的全部智慧手势监听回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  clearMonitors(): void;

  /**
   * 请求将指定组件设置为当前智慧手势选中节点。成功选中后会显示选中提示框，选中框样式根据设备有所不同。
   * 
   * > **说明：**
   * >
   * > - 仅当目标组件满足以下全部条件时，请求才会生效：组件可以响应智慧手势，且组件在屏幕内可见，且组件绑定了
   * > [onClick]{@link CommonMethod#onClick(event: Callback<ClickEvent>, distanceThreshold: number)}或绑定了单击手势[TapGesture]{@link TapGesture}。
   * >
   * > - 组件能否响应智慧手势由[smartGestureShortcut]{@link CommonMethod#smartGestureShortcut}中的enabled决定。
   *
   * @param { string } id - 组件的[id]{@link CommonMethod#id}。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  requestSelected(id: string): void;

  /**
   * 清空当前智慧手势选中节点。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  clearSelected(): void;
}

/**
* UIContext对象的解析策略。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export const enum ResolveStrategy {

  /**
   * 获取调用作用域的UIContext。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  CALLING_SCOPE = 0,

  /**
   * 获取最近切换到获焦状态的UIContext。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  LAST_FOCUS = 1,

  /**
   * 获取实例ID最大的UIContext。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  MAX_INSTANCE_ID = 2,

  /**
   * 获取唯一UI实例的UIContext。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  UNIQUE = 3,

  /**
   * 获取最近切换到前台状态的UIContext。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  LAST_FOREGROUND = 4,

  /**
   * 获取未定义调用作用域的UIContext。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  UNDEFINED = 5
}

/**
* ResolvedUIContext实例对象。
*
* > **说明：**
* >
* > - 示例效果请以真机运行为准，当前DevEco Studio预览器不支持。
* >
* > - ResolvedUIContext继承自[UIContext]{@link @ohos.arkui.UIContext}，该类对象包含[UIContext]{@link @ohos.arkui.UIContext}实例和
* > [UIContext]{@link @ohos.arkui.UIContext}的解析策略。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export class ResolvedUIContext extends UIContext {

  /**
   * [UIContext]{@link @ohos.arkui.UIContext}的解析策略。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  strategy: ResolveStrategy;
}

/**
* UIContext实例对象。
*
* > **说明：**
*
* > - 示例效果请以真机运行为准，当前DevEco Studio预览器不支持。
* >
* > - 以下API需要通过对应的UIContext实例调用。获取UIContext分为三种方式，第一种是使用ohos.window中的
* > [getUIContext()](docroot://reference/apis-arkui/arkts-apis-window-Window.md#getuicontext10)方法获取UIContext实例，第二种是通过自定
* > 义组件内置方法[getUIContext()](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-api.md#getuicontext)获取UIContext
* > 实例，第三种是通过UIContext类的静态方法如[getCallingScopeUIContext]{@link UIContext#getCallingScopeUIContext}获取UIContext实例。本文中
* > UIContext对象以uiContext表示。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export class UIContext {

  /**
   * 构造UIContext对象。
   *
   * > **说明：**
   * >
   * > 通过构造函数创建的UIContext对象指向不明确的UI上下文，即不指向任何UI实例。该UIContext对应实例的唯一标识ID为-1。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  constructor();

  /**
   * 获取当前[调用作用域](docroot://ui/arkts-global-interface.md#基本概念)的UIContext，调用作用域不明确时返回undefined。
   *
   * > **说明：**
   * >
   * > 返回的UIContext对象可能指向一个已销毁的UI实例，通常在由已销毁的实例抛出异步任务时出现。建议通过[isAvailable]{@link UIContext#isAvailable}接口判断其有效性。
   *
   * @returns { UIContext | undefined } UIContext of the current
   *     [calling scope](docroot://ui/arkts-global-interface.md#basic-concepts). Returns **undefined** if the calling
   *     scope is ambiguous.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  static getCallingScopeUIContext(): UIContext | undefined;

  /**
   * 获取最近一次切换到获焦状态的UI实例的UIContext。
   *
   * @returns { UIContext | undefined } UIContext of the UI instance that most recently switched to the focused state.
   *     Returns **undefined** if the most recently focused instance has been destroyed or if no instance has ever been
   *     focused.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  static getLastFocusedUIContext(): UIContext | undefined;

  /**
   * 获取最近一次切换到前台状态的UI实例的UIContext。
   *
   * @returns { UIContext | undefined } UIContext of the UI instance that most recently switched to the foreground
   *     state. Returns **undefined** if the most recently foreground UI instance has been destroyed or if no UI
   *     instance has ever been in the foreground.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  static getLastForegroundUIContext(): UIContext | undefined;

  /**
   * 获取所有当前有效的UIContext实例。
   *
   * @returns { UIContext[] } Array of all currently valid UIContext instances. Returns an empty array if no valid
   *     UIContext instance exists.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  static getAllUIContexts(): UIContext[];

  /**
   * 使用优先级策略获取带有解析策略的UIContext实例对象。
   *
   * > **说明：**
   * >
   * > 按照预定义的优先级顺序解析并返回UIContext实例和UIContext的解析策略。
   * >
   * > 解析规则按顺序如下：
   * >
   * > 1. 当前调用作用域中的UIContext。
   * >
   * > 2. 如果只存在一个UI实例，则返回其UIContext。
   * >
   * > 3. 如果存在UI实例切换到获焦状态，且最近一次切换到获焦状态的UI实例未销毁，则返回最近一次获焦UI实例的UIContext。
   * >
   * > 4. 如果存在UI实例切换到前台状态，且最近一次切换到前台状态的UI实例未销毁，则返回最近一次切换到前台状态的UI实例的UIContext。
   * >
   * > 5. 如果存在多个UI实例，则返回实例唯一标识的ID最大的UIContext。
   * >
   * > 6. 如果以上条件均不满足，则返回一个无效的UIContext实例。
   *
   * @returns { ResolvedUIContext } 返回带有解析策略的UIContext实例对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  static resolveUIContext(): ResolvedUIContext;

  /**
   * 判断UIContext对象对应的UI实例是否有效。使用
   * [getUIContext](docroot://reference/apis-arkui/arkts-apis-window-Window.md#getuicontext10)方法获取UIContext对象。后端UI实例存在时，
   * 该UI实例有效。通过new UIContext()创建的UIContext对象无对应的UI实例；多次
   * [loadContent](docroot://reference/apis-arkui/arkts-apis-window-Window.md#loadcontent9)后，旧的UI实例会失效。多窗口应用场景，当窗口关闭后，该窗
   * 口的UI实例失效。总而言之，当UIContext对象没有对应的后端UI实例时，该对象是无效的。
   *
   * @returns { boolean } 返回UIContext对象对应的UI实例是否有效。true表示有效，false表示无效。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  isAvailable(): boolean;

  /**
   * get object font.
   *
   * @returns { Font } object Font.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getFont(): Font;

  /**
   * get object mediaQuery.
   *
   * @returns { MediaQuery } object MediaQuery.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getMediaQuery(): MediaQuery;

  /**
   * get object UIInspector.
   *
   * @returns { UIInspector }    **UIInspector** object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getUIInspector(): UIInspector;

  /**
   * 获取[LuminanceSampler]{@link @ohos.arkui.UIContext}取色对象，通过该对象设置背景亮度取色参数、注册亮度变化监听回调、取消注册监听回调。
   *
   * @param { TargetInfo } target - 目标组件的标识。
   * @returns { LuminanceSampler | undefined } the luminance sampler or undefined.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  getLuminanceSampler(target: TargetInfo): LuminanceSampler | undefined;

  /**
   * get the filtered attributes of the component tree.
   *
   * @param { Array<string> } [filters] - List of component attributes used for filtering. Currently, only the following
   *     filter fields are supported:
   *     <br>**"id"**: unique ID of the component.
   *     <br>**"src"**: source of the resource.
   *     <br>**"content"**: information or data contained in the element, component, or object.
   *     <br>**"editable"**: whether the component is editable.
   *     <br>**"scrollable"**: whether the component is scrollable.
   *     <br>**"selectable"**: whether the component is selectable.
   *     <br>**"focusable"**: whether the component is focusable.
   *     <br>**"focused"**: whether the component is currently focused.
   *     <br>If **filters** includes one or more fields, unspecified fields will be filtered out from the results.
   *     <br>If **filters** is not provided or is an empty array, none of the aforementioned fields
   *     <br>will be filtered out.
   *     <br>The following filter field is supported since API version 20:
   *     <br>**"isLayoutInspector"**: whether the component tree contains custom components.
   *     <br>If **filters** is omitted or
   *     <br>does not contain **"isLayoutInspector"**, the returned component tree
   *     <br>will not include custom component details.
   *     <br>Other filter fields are used only in testing scenarios.
   * @returns { string } JSON string of the component tree and component attributes. For details about each field in
   *     the component, see the return value description of [getInspectorInfo]{@link FrameNode#getInspectorInfo}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getFilteredInspectorTree(filters?: Array<string>): string;

  /**
   * get the filtered attributes of the component tree with the specified id and depth
   *
   * @param { string } id - [ID]{@link CommonMethod#id} of the target component.
   * @param { number } depth - Number of layers of child components. If the value is **0**, the attributes of the
   *     specified component and all its child components are obtained. If the value is **1**, only the attributes of
   *     <br>the specified component are obtained. If the value is **2**, the attributes of
   *     <br>the specified component and its
   *     <br>level-1 child components are obtained. The rest can be deduced by analogy.
   * @param { Array<string> } [filters] - List of component attributes used for filtering. Currently, only the following
   *     filter fields are supported:
   *     <br>**"id"**: unique ID of the component.
   *     <br>**"src"**: source of the resource.
   *     <br>**"content"**: information or data contained in the element, component, or object.
   *     <br>**"editable"**: whether the component is editable.
   *     <br>**"scrollable"**: whether the component is scrollable.
   *     <br>**"selectable"**: whether the component is selectable.
   *     <br>**"focusable"**: whether the component is focusable.
   *     <br>**"focused"**: whether the component is currently focused.
   *     <br>If **filters** includes one or more fields, unspecified fields will be filtered out from the results.
   *     <br>If **filters** is not provided or is an empty array, none of the aforementioned fields
   *     <br>will be filtered out.
   *     <br>Other filter fields are used only in testing scenarios.
   * @returns { string } JSON string of the attributes of the specified component and its child components. For details
   *     about each field in the component, see the return value
   *     <br>description of [getInspectorInfo]{@link FrameNode#getInspectorInfo}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getFilteredInspectorTreeById(id: string, depth: number, filters?: Array<string>): string;

  /**
   * Obtains a Router object.
   *
   * @returns { Router } Router object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getRouter(): Router;

  /**
   * get object PromptAction.
   *
   * @returns { PromptAction } PromptAction object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getPromptAction(): PromptAction;

  /**
   * 获取Dialog对象。
   *
   * @returns { DialogPresenter } Dialog对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  getDialogPresenter(): DialogPresenter;

  /**
   * get object ComponentUtils.
   *
   * @returns { ComponentUtils } object ComponentUtils.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getComponentUtils(): ComponentUtils;

  /**
   * 获取UIObserver对象。
   *
   * @returns { UIObserver } 返回UIObserver实例对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getUIObserver(): UIObserver;

  /**
   * Obtains the OverlayManager object.
   *
   * @returns { OverlayManager } OverlayManager instance obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getOverlayManager(): OverlayManager;

  /**
   * 获取[Magnifier]{@link @ohos.arkui.UIContext}对象，可控制放大镜显示和隐藏。
   *
   * @returns { Magnifier } Magnifier对象，可用于控制放大镜的显示和隐藏。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  getMagnifier(): Magnifier;

  /**
   * Init OverlayManager.
   *
   * @param { OverlayManagerOptions } options - Options.
   * @returns { boolean } Returns true if it is called first and before getting an OverlayManager instance; returns
   *     false otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  setOverlayManagerOptions(options: OverlayManagerOptions): boolean;

  /**
   * Get object OverlayManagerOptions.
   *
   * @returns { OverlayManagerOptions } object OverlayManagerOptions.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  getOverlayManagerOptions(): OverlayManagerOptions;

  /**
   * 定义Animator类。
   *
   * @param { AnimatorOptions } options - 定义动画选项。
   * @returns { AnimatorResult } Animator结果接口。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  createAnimator(options: AnimatorOptions): AnimatorResult;

  /**
   * 创建animator动画结果对象（AnimatorResult）。与[createAnimator]{@link UIContext#createAnimator(options: AnimatorOptions)}相比，新增对
   * [SimpleAnimatorOptions]{@link @ohos.animator:SimpleAnimatorOptions}类型入参的支持。
   *
   * @param { AnimatorOptions | SimpleAnimatorOptions } options - 定义动画选项。
   * @returns { AnimatorResult } Animator结果接口。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  createAnimator(options: AnimatorOptions | SimpleAnimatorOptions): AnimatorResult;

  /**
   * 提供animateTo接口，用于为闭包代码中的状态变化添加过渡动画效果。
   *
   * > **说明：**
   * >
   * > - 不推荐在aboutToAppear、aboutToDisappear中调用动画。
   * >
   * > - 如果在[aboutToAppear](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoappear)中调用动
   * > 画，自定义组件内的build还未执行，内部组件还未创建，动画时机过早，动画属性没有初值无法对组件产生动画。
   * >
   * > - 执行[aboutToDisappear](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttodisappear)
   * > 时，组件即将销毁，不能在aboutToDisappear里面做动画。
   * >
   * > - 在组件出现和消失时，可以通过[组件内转场]{@link common}添加动画效果。
   * >
   * > - 组件内转场不支持的属性，可以参考[显式动画]{@link common}中的
   * > [示例2](docroot://reference/apis-arkui/arkui-ts/ts-explicit-animation.md#示例2动画执行结束后组件消失)，使用animateTo实现动画执行结束后组件消失的效
   * > 果。
   * >
   * > - 某些场景下，在[状态管理V2](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v2)中使用animateTo动画，会产生异常效果，
   * > 具体可参考：[在状态管理V2中使用animateTo动画效果异常](docroot://ui/state-management/arkts-new-local.md#在状态管理v2中使用animateto动画效果异常)。
   * >
   * > - UIAbility从前台切换至后台时会立即结束仍在步进中的有限循环动画，从而触发动画播放完成回调[onFinish]{@link AnimateParam}。
   * >
   * > - 在设置的开发者选项中关闭过渡动画，动画会当帧结束，onFinish动画播放完成回调会立即执行，请避免在回调中加入时序相关的功能逻辑。
   *
   * @param { AnimateParam } value - 设置动画效果相关参数。
   * @param { function } event - 指定显示动效的闭包函数，在闭包函数中导致的状态变化系统会自动插入过渡动画。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  animateTo(value: AnimateParam, event: () => void): void;

  /**
   * alertDialog display.
   *
   * @param { AlertDialogParamWithConfirm | AlertDialogParamWithButtons | AlertDialogParamWithOptions } options - Shows
   *     an AlertDialog component in the given settings.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  showAlertDialog(options: AlertDialogParamWithConfirm | AlertDialogParamWithButtons | AlertDialogParamWithOptions): void;

  /**
   * actionSheet display.
   *
   * @param { ActionSheetOptions } value - Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Shows an action sheet in the given settings.
   *
   * @param { ActionSheetOptions } value - Parameters of the action sheet.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  showActionSheet(value: ActionSheetOptions): void;

  /**
   * datePickerDialog display.
   *
   * @param { DatePickerDialogOptions } options - Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  showDatePickerDialog(options: DatePickerDialogOptions): void;

  /**
   * timePickerDialog display.
   *
   * @param { TimePickerDialogOptions } options - Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  showTimePickerDialog(options: TimePickerDialogOptions): void;

  /**
   * textPickerDialog display.
   *
   * @param { TextPickerDialogOptions } options - Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  showTextPickerDialog(options: TextPickerDialogOptions): void;

  /**
   * textPickerDialog display.
   *
   * @param { TextPickerDialogOptions | TextPickerDialogOptionsExt } style - Dialog style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  showTextPickerDialog(style: TextPickerDialogOptions | TextPickerDialogOptionsExt): void;

  /**
   * 设置内存中缓存解码后图片的数量上限，提升再次加载同源图片的加载速度。如果不设置则默认为0，不进行缓存。缓存采用内置的LRU策略，新图片加载后，如果超过缓存上限，会删除最久未再次加载的缓存。建议根据应用内存需求，设置合理缓存数量，数字过大可能导致内存使用过高。
   *
   * @param { number } value - 内存中缓存解码后图片的数量上限
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  setImageCacheCount(value: number): void;

  /**
   * 设置内存中缓存解码前图片数据的大小上限，单位为字节，提升再次加载同源图片的加载速度。如果不设置则默认为0，不进行缓存。缓存采用内置的LRU策略，新图片加载后，如果解码前数据超过缓存上限，会删除最久未再次加载的图片数据缓存。建议根据应用内存需求，设置合理缓存上限，过大可能导致应用内存使用过高。
   *
   * @param { number } value - capacity of raw image data size in bytes.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  setImageRawDataCacheSize(value: number): void;

  /**
   * 在当前UI上下文执行传入的回调函数。
   *
   * @param { function } callback - 回调函数
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  runScopedTask(callback: () => void): void;

  /**
   * 控制虚拟键盘抬起时页面的避让模式。
   *
   * >  **说明：**
   * >
   * >
   * KeyboardAvoidMode.RESIZE模式会压缩页面大小，页面中设置百分比宽高的组件会跟随页面压缩，而直接设置宽高的组件会按设置的固定大小布局。设置KeyboardAvoidMode的RESIZE模式时，expandSa
   * feArea([SafeAreaType.KEYBOARD],[SafeAreaEdge.BOTTOM])不生效。
   * >
   * >  KeyboardAvoidMode.NONE模式配置页面不避让键盘，页面会被抬起的键盘遮盖。
   * >
   * >
   * setKeyboardAvoidMode针对页面生效，对于弹窗类组件不生效，比如Dialog、Popup、Menu、BindSheet、BindContentCover、Toast、OverlayManager。弹窗类组件的避让模
   * 式可以参考CustomDialogControllerOptions对象说明。
   *
   * @param { KeyboardAvoidMode } value - 配置虚拟键盘抬起时页面的避让模式。<br />默认值：KeyboardAvoidMode.OFFSET，键盘抬起时默认避让模式为上抬。<br
   *     />setKeyboardAvoidMode传入异常值时，该属性设置不生效。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  setKeyboardAvoidMode(value: KeyboardAvoidMode): void;

  /**
   * 返回虚拟键盘抬起时页面的避让模式。
   *
   * @returns { KeyboardAvoidMode } 返回虚拟键盘抬起时的页面避让模式。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  getKeyboardAvoidMode(): KeyboardAvoidMode;

  /**
   * 设置当前页面的像素取整模式。
   *
   * @param { PixelRoundMode } mode - 像素取整模式。<br />默认值：PixelRoundMode.PIXEL_ROUND_ON_LAYOUT_FINISH<br/>设置异常值时，该属性为默认值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  setPixelRoundMode(mode: PixelRoundMode): void;

  /**
   * 获取当前应用的像素取整模式。
   *
   * @returns { PixelRoundMode } Pixel rounding mode of the current page.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  getPixelRoundMode(): PixelRoundMode;

  /**
   * Dispach keyboard event to the frameNode with inspector key.
   *
   * @param { number | string } node - The uniqueId or inspector key of the target FrameNode.
   * @param { KeyEvent } event - The keyboard event.
   * @returns { boolean } Returns whether the key event is consumed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  dispatchKeyEvent(node: number | string, event: KeyEvent): boolean;

  /**
   * Get AtomicServiceBar.
   *
   * @returns { Nullable<AtomicServiceBar> } The atomic service bar.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  getAtomicServiceBar(): Nullable<AtomicServiceBar>;

  /**
   * Get DragController.
   *
   * @returns { DragController } the DragController
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  getDragController(): DragController;

  /**
   * Get MeasureUtils.
   *
   * @returns { MeasureUtils } the MeasureUtils
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getMeasureUtils(): MeasureUtils;

  /**
   * 产生关键帧动画。该接口的使用说明请参考[keyframeAnimateTo]{@link common}。
   *
   * @param { KeyframeAnimateParam } param - 关键帧动画的整体动画参数。
   * @param { Array<KeyframeState> } keyframes - 所有的关键帧状态的列表。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  keyframeAnimateTo(param: KeyframeAnimateParam, keyframes: Array<KeyframeState>): void;

  /**
   * 获取焦点控制器。
   *
   * @returns { FocusController } 焦点控制器
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  getFocusController(): FocusController;

  /**
   * 通过UIContext对象指定明确的动画主实例上下文，并触发显式动画立即下发。避免由于找不到实例或实例不对，导致的动画不执行或动画结束回调不执行问题。使用callback异步回调。
   *
   * @param { AnimateParam } param - 设置动画效果相关参数。
   * @param { Callback<void> } processor - 回调函数。指定显示动效的闭包函数，在闭包函数中导致的状态变化系统会自动插入过渡动画。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi [since 12 - 22]
   * @publicapi [since 23]
   * @stagemodelonly
   * @atomicservice [since 23]
   * @since 12 dynamic
   */
  animateToImmediately(param: AnimateParam, processor: Callback<void>): void;

  /**
   * 通过组件的id获取组件树的实体节点。
   *
   * @param { string } id - 节点对应的[组件标识]{@link common}。
   * @returns { FrameNode | null } The instance of FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getFrameNodeById(id: string): FrameNode | null;

  /**
   * 通过组件的id获取当前窗口上的实体节点。
   *
   * @param { string } id - 节点对应的[组件标识]{@link common}。
   * @returns { FrameNode | null } The instance of FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getAttachedFrameNodeById(id: string): FrameNode | null;

  /**
   * 提供getFrameNodeByUniqueId接口通过组件的uniqueId获取组件树的实体节点。
   *
   * 1. 当uniqueId对应的是系统组件时，返回组件所对应的FrameNode；
   * 2. 当uniqueId对应的是自定义组件时：
   *    - 若其有渲染内容，且没有被[@Reusable装饰器](docroot://ui/state-management/arkts-reusable.md)修饰时，返回该自定义组件的根节点，类型为__Common__。
   *    - 若其无渲染内容，或者被[@Reusable装饰器](docroot://ui/state-management/arkts-reusable.md)修饰时，在该自定义组件的子组件创建完成前调用此接口，将返回null；在该自定义组件的子组件创建完成后调用，返回其第一个子组件的FrameNode。
   * 3. 当uniqueId无对应的组件时，返回null。
   *
   * @param { number } id - 节点对应的UniqueId
   * @returns { FrameNode | null } - The FrameNode with the target uniqueId, or null if the frameNode is not existed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getFrameNodeByUniqueId(id: number): FrameNode | null;

  /**
   * Get page information of the frameNode with uniqueId.
   *
   * @param { number } id - The uniqueId of the target FrameNode.
   * @returns { PageInfo } - The page information of the frameNode with the target uniqueId, includes
   * navDestination and router page information. If the frame node does not have navDestination and
   * router page information, it will return an empty object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getPageInfoByUniqueId(id: number): PageInfo;

  /**
   * Get navigation information of the frameNode with uniqueId.
   *
   * @param { number } id - The uniqueId of the target FrameNode.
   * @returns { observer.NavigationInfo | undefined } - The navigation information of the frameNode with the
   *     target uniqueId, or undefined if the frameNode is not existed or does not have navigation information.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getNavigationInfoByUniqueId(id: number): observer.NavigationInfo | undefined;

  /**
   * 通过该方法设置组件的压暗程度。
   *
   * > **说明：**
   * >
   * > 设置该属性后设置其他效果类属性会导致效果冲突。
   *
   * @param { string } id - 组件id。
   * @param { number } value - 组件压暗程度取值范围[0,1], 由0到1逐渐变亮。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  setDynamicDimming(id: string, value: number): void;

  /**
   * Get object cursor controller.
   *
   * @returns { CursorController } object cursor controller.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getCursorController(): CursorController;

  /**
   * 注册本地输入事件监视器。
   *
   * 接口名中的“Local”表示监视器只在当前UIContext内有效。
   * 并且不影响其他UIContext实例。每个UIContext都维护自己独立的监视器列表。
   *
   * > **说明**
   * > >性能警告：不要在回调中执行耗时操作！
   * > >监控对象注释：
   * > >
   * > -返回的Monitor对象是系统创建的唯一标识符。
   * > >
   * > -开发人员不能主动构造或伪造此对象。
   * > >
   * > -必须保存返回的监控对象引用，以便后续取消。
   * > >
   * > -建议使用变量来保存，以免丢失引用。
   * > >使用示例：
   * > >。
   *
   * @param { int } eventMask - 事件类型掩码，指定要监视的事件类型
   *     位运算。
   *     <br>取值限定为整数。
   * @param { InputEventListener } listener - 事件监听器回调函数。
   * @returns { InputEventMonitor } Unique identifier object for the monitor, used for subsequent
   *     cancellation of registration.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  addLocalInputEventMonitor(eventMask: int, listener: InputEventListener): InputEventMonitor;

  /**
   * 删除本地输入事件监视器。
   *
   * **重要说明**：
   * -只能移除addLocalInputEventMonitor返回的Monitor对象。
   * -无法通过手动构造对象来注销监视器。
   * -如果传递了一个无效的对象，系统会默默地忽略它。
   *
   * @param { InputEventMonitor } monitor - 监控标识对象（由addLocalInputEventMonitor返回）。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  removeLocalInputEventMonitor(monitor: InputEventMonitor): void;

  /**
   * Get object context menu controller.
   *
   * @returns { ContextMenuController } object context menu controller.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getContextMenuController(): ContextMenuController;

  /**
   * 获取组件快照。
   *
   * @returns { ComponentSnapshot } 组件快照。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  getComponentSnapshot(): ComponentSnapshot;

  /**
   * 将vp单位的数值转换为以px为单位的数值。
   *
   * 转换公式为：px值 = vp值 × 像素密度
   *
   * 像素密度：当前窗口生效的像素密度值，即虚拟屏幕的密度[VirtualScreenConfig]{@link @ohos.display:display.VirtualScreenConfig}.density。
   *
   * > **说明：**
   * >
   * > 1. getUIContext需在windowStage.
   * > [loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)之后调用，确保UIContext初始化完成后
   * > 调用此接口，否则无法返回准确结果。
   * >
   * > 2. UI实例未创建时，[像素单位]{@link common}中的vp2px接口使用默认屏幕的虚拟像素比进行转换。在该场景下，开发者使用UIContext接口替换时，可参考
   * > [像素单位转换接口替换为UIContext接口](docroot://ui/arkts-global-interface.md#像素单位转换接口替换为uicontext接口)。
   *
   * @param { number } value
   * @returns { number }
   转换后的数值。<br/>取值范围：(-∞, +∞)
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  vp2px(value: number): number;

  /**
   * 将px单位的数值转换为以vp为单位的数值。
   *
   * 转换公式为：vp值 = px值 ÷ 像素密度
   *
   * 像素密度：当前窗口生效的像素密度值，即虚拟屏幕的密度[VirtualScreenConfig]{@link @ohos.display:display.VirtualScreenConfig}.density。
   *
   * > **说明：**
   * >
   * > 1. getUIContext需在windowStage.
   * > [loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)之后调用，确保UIContext初始化完成后
   * > 调用此接口，否则无法返回准确结果。
   * >
   * > 2. UI实例未创建时，[像素单位]{@link common}中的px2vp接口使用默认屏幕的虚拟像素比进行转换。在该场景下，开发者使用UIContext接口替换时，可参考
   * > [像素单位转换接口替换为UIContext接口](docroot://ui/arkts-global-interface.md#像素单位转换接口替换为uicontext接口)。
   *
   * @param { number } value
   * @returns { number }
   转换后的数值。<br/>取值范围：(-∞, +∞)
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  px2vp(value: number): number;

  /**
   * 将fp单位的数值转换为以px为单位的数值。
   *
   * 转换公式为：px值 = fp值 × 像素密度 × 字体缩放比例
   *
   * 像素密度：当前窗口生效的像素密度值，即虚拟屏幕的密度[VirtualScreenConfig]{@link @ohos.display:display.VirtualScreenConfig}.density。
   *
   * 字体缩放比例：系统设置的字体缩放系数，对应 [Configuration.fontScale](docroot://reference/apis-arkui/arkui-ts/ts-types.md#configuration)。
   *
   *
   * > **说明：**
   * >
   * > getUIContext需在windowStage.
   * > [loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)之后调用，确保UIContext初始化完成后
   * > 调用此接口，否则无法返回准确结果。
   *
   * @param { number } value
   * @returns { number }
   转换后的数值。<br/>取值范围：(-∞, +∞)
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  fp2px(value: number): number;

  /**
   * 将px单位的数值转换为以fp为单位的数值。
   *
   * 转换公式为：fp值 = px值 ÷ 像素密度 ÷ 字体缩放比例
   *
   * 像素密度：当前窗口生效的像素密度值，即虚拟屏幕的密度[VirtualScreenConfig]{@link @ohos.display:display.VirtualScreenConfig}.density。
   *
   * 字体缩放比例：系统设置的字体缩放系数，对应 [Configuration.fontScale](docroot://reference/apis-arkui/arkui-ts/ts-types.md#configuration)。
   *
   *
   * > **说明：**
   * >
   * > getUIContext需在windowStage.
   * > [loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)之后调用，确保UIContext初始化完成后
   * > 调用此接口，否则无法返回准确结果。
   *
   * @param { number } value
   * @returns { number }
   转换后的数值。<br/>取值范围：(-∞, +∞)
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  px2fp(value: number): number;

  /**
   * 将lpx单位的数值转换为以px为单位的数值。
   *
   * 转换公式为：px值 = lpx值 × 实际屏幕宽度与逻辑宽度（通过[designWidth](docroot://quick-start/module-configuration-file.md#pages标签)配置）的比值。
   *
   * > **说明：**
   * >
   * > getUIContext需在windowStage.
   * > [loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)之后调用，确保UIContext初始化完成后
   * > 调用此接口，否则无法返回准确结果。
   *
   * @param { number } value
   * @returns { number }
   转换后的数值。<br/>取值范围：(-∞, +∞)
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  lpx2px(value: number): number;

  /**
   * 将px单位的数值转换为以lpx为单位的数值。
   *
   * 转换公式为：lpx值 = px值 ÷ 实际屏幕宽度与逻辑宽度（通过[designWidth](docroot://quick-start/module-configuration-file.md#pages标签)配置）的比值。
   *
   * > **说明：**
   * >
   * > getUIContext需在windowStage.
   * > [loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)之后调用，确保UIContext初始化完成后
   * > 调用此接口，否则无法返回准确结果。
   *
   * @param { number } value
   * @returns { number }
   转换后的数值。<br/>取值范围：(-∞, +∞)
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  px2lpx(value: number): number;

  /**
   * 获取当前stage共享的LocalStorage实例。
   *
   * @returns { LocalStorage | undefined } **LocalStorage** instance if it exists; **undefined** if it does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getSharedLocalStorage(): LocalStorage | undefined;

  /**
   * 获得当前元能力的Context。
   *
   * @returns { Context | undefined } Context of the ability. The context type depends on the ability type. For example,
   *     if this API is called in a page within a UIAbility window, the returned context type is
   *     [UIAbilityContext]{@link UIAbilityContext:UIAbilityContext}. If this API is called in a page within an
   *     ExtensionAbility window, the returned context type is
   *     [ExtensionContext]{@link ExtensionContext:ExtensionContext}. If the ability context does not exist,
   *     **undefined** is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getHostContext(): Context | undefined;

  /**
   * 获取当前实例所在窗口的名称。
   *
   * @returns { string | undefined } Name of the window where the current instance is located. If the window does not
   *     exist, **undefined** is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getWindowName(): string | undefined;

  /**
   * 获取当前应用实例所属的窗口ID。
   *
   * > **说明：**
   * >
   * > 若UIContext位于主应用程序进程中的[UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}内，则返回主应用程
   * > 序的顶层窗口ID。
   *
   * @returns { number | undefined } ID of the window to which the current application instance belongs. If the window
   *     does not exist, **undefined** is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  getWindowId(): number | undefined;

  /**
   * 获取当前实例所在窗口的宽度断点枚举值。具体枚举值根据窗口宽度vp值确定，详见 [WidthBreakpoint]{@link WidthBreakpoint}。
   *
   * @returns { WidthBreakpoint } 当前实例所在窗口的宽度断点枚举值。若窗口宽度为 0vp，则返回WIDTH_XS。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 13 dynamic
   */
  getWindowWidthBreakpoint(): WidthBreakpoint;

  /**
   * 获取当前实例所在窗口的高度断点。具体枚举值根据窗口高宽比确定，详见 [HeightBreakpoint]{@link HeightBreakpoint}。
   *
   * @returns { HeightBreakpoint } 当前实例所在窗口的宽高比对应的高度断点枚举值。若窗口高宽比为0，则返回HEIGHT_SM。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 13 dynamic
   */
  getWindowHeightBreakpoint(): HeightBreakpoint;

  /**
   * 创建并弹出以bindSheetContent作为内容的半模态页面，使用Promise异步回调。通过该接口弹出的半模态页面样式完全按照bindSheetContent中设置的样式显示。
   *
   * > **说明：**
   * >
   * > 1. 使用该接口时，若未传入有效的targetId，则不支持设置SheetOptions.preferType为POPUP模式、不支持设置SheetOptions.mode为EMBEDDED模式。
   * >
   * > 2. 由于[updateBindSheet]{@link UIContext#updateBindSheet}和[closeBindSheet]{@link UIContext#closeBindSheet}依赖
   * > bindSheetContent去更新或者关闭指定的半模态页面，开发者需自行维护传入的bindSheetContent。
   * >
   * > 3. 不支持设置SheetOptions.UIContext。
   *
   * @param { ComponentContent<T> } bindSheetContent - 半模态页面中显示的组件内容。
   * @param { SheetOptions } sheetOptions - 半模态页面样式。<br/>**说明：** <br/>1. 不支持设置SheetOptions.uiContext，该属性的值固定为当前实例的
   *     UIContext。<br/>2. 若不传递targetId，则不支持设置SheetOptions.preferType为POPUP样式，若设置了POPUP样式则使用CENTER样式替代。<br/>3. 若不传递
   *     targetId，则不支持设置SheetOptions.mode为EMBEDDED模式，默认为OVERLAY模式。<br/>4. 其余属性的默认值参考[SheetOptions]{@link SheetOptions}文
   *     档。
   * @param { number } targetId - 需要绑定组件的ID，若不指定则不绑定任何组件。id不存在时返回错误码120004。在传入undefined时返回错误码401。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 120001 - The bindSheetContent is incorrect.
   * @throws { BusinessError } 120002 - The bindSheetContent already exists.
   * @throws { BusinessError } 120004 - The targetId does not exist.
   * @throws { BusinessError } 120005 - The node of targetId is not in the component tree.
   * @throws { BusinessError } 120006 - The node of targetId is not a child of the page node or NavDestination node.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  openBindSheet<T extends Object>(bindSheetContent: ComponentContent<T>, sheetOptions?: SheetOptions, targetId?: number): Promise<void>;

  /**
   * 更新bindSheetContent对应的半模态页面的样式，使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 不支持更新SheetOptions.UIContext、SheetOptions.mode、回调函数。
   *
   * @param { ComponentContent<T> } bindSheetContent - 半模态页面中显示的组件内容。
   * @param { SheetOptions } sheetOptions - 半模态页面样式。<br/>**说明：** <br/>不支持更新SheetOptions.uiContext、SheetOptions.mode、回调函
   *     数。
   * @param { boolean } partialUpdate - 半模态页面更新方式, 默认值为false。<br/>**说明：** <br/>1. true为增量更新，保留当前值，更新SheetOptions中的指定属性。
   *     <br/>2. false为全量更新，除SheetOptions中的指定属性，其他属性恢复默认值。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 120001 - The bindSheetContent is incorrect.
   * @throws { BusinessError } 120003 - The bindSheetContent cannot be found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  updateBindSheet<T extends Object>(bindSheetContent: ComponentContent<T>, sheetOptions: SheetOptions, partialUpdate?: boolean): Promise<void>;

  /**
   * 关闭bindSheetContent对应的半模态页面，使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 使用此接口关闭半模态页面时，不会触发shouldDismiss回调。
   *
   * @param { ComponentContent<T> } bindSheetContent - 半模态页面中显示的组件内容。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 120001 - The bindSheetContent is incorrect.
   * @throws { BusinessError } 120003 - The bindSheetContent cannot be found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  closeBindSheet<T extends Object>(bindSheetContent: ComponentContent<T>): Promise<void>;

  /**
   * 注册一个回调，仅在下一帧渲染时调用。
   *
   * @param { FrameCallback } frameCallback - 下一帧需要执行的回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  postFrameCallback(frameCallback: FrameCallback): void;

  /**
   * 注册一个回调，在延迟一段时间后的下一帧进行渲染时执行。
   *
   * @param { FrameCallback } frameCallback - 下一帧需要执行的回调。
   * @param { number } delayTime - 延迟的时间，以毫秒为单位。传入null、undefined或小于0的值，会按0处理。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  postDelayedFrameCallback(frameCallback: FrameCallback, delayTime: number): void;

  /**
   * 请求组件的动态帧率场景，用于自定义场景相关帧率配置。
   *
   * @param { string } id - 节点对应的[组件标识]{@link common}。
   * @returns { Array<DynamicSyncScene>} The instance of SwiperDynamicSyncScene.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  requireDynamicSyncScene(id: string): Array<DynamicSyncScene>;

  /**
   * 清除跨模块（[HSP](docroot://quick-start/in-app-hsp.md)包）访问资源时生成的资源对象缓存。清除缓存后，下次访问该模块资源的加载时间会增加。
   *
   * @throws { BusinessError } 202 - The caller is not a system application. [since 12 - 22]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice [since 12 - 12]
   * @since 12 dynamic
   */
  clearResourceCache(): void;

  /**
   * Checks whether current font scale follows the system.
   *
   * @returns { boolean } Returns true if current font scale follows the system; returns false otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  isFollowingSystemFontScale(): boolean;

  /**
   * Get the max font scale.
   *
   * @returns { number } The max font scale.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  getMaxFontScale(): number;

  /**
   * Bind tabs to scrollable container component to automatically hide tab bar.
   *
   * @param { TabsController } tabsController - The controller of the tabs.
   * @param { Scroller } scroller - The controller of the scrollable container component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  bindTabsToScrollable(tabsController: TabsController, scroller: Scroller): void;

  /**
   * Unbind tabs from scrollable container component.
   *
   * @param { TabsController } tabsController - The controller of the tabs.
   * @param { Scroller } scroller - The controller of the scrollable container component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  unbindTabsFromScrollable(tabsController: TabsController, scroller: Scroller): void;

  /**
   * Bind tabs to nested scrollable container components to automatically hide tab bar.
   *
   * @param { TabsController } tabsController - The controller of the tabs.
   * @param { Scroller } parentScroller - The controller of the parent scrollable container component.
   * @param { Scroller } childScroller - The controller of the child scrollable container component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  bindTabsToNestedScrollable(tabsController: TabsController, parentScroller: Scroller, childScroller: Scroller): void;

  /**
   * Unbind tabs from nested scrollable container components.
   *
   * @param { TabsController } tabsController - The controller of the tabs.
   * @param { Scroller } parentScroller - The controller of the parent scrollable container component.
   * @param { Scroller } childScroller - The controller of the child scrollable container component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  unbindTabsFromNestedScrollable(tabsController: TabsController, parentScroller: Scroller, childScroller: Scroller): void;

  /**
   * whether to enable or disable swipe to back event.
   *
   * @param { Optional<boolean> } enabled - enable or disable swipe to back event.
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @atomicservice
   * @since 18 dynamic
   */
  enableSwipeBack(enabled: Optional<boolean>): void;

  /**
   * 通过id设置组件冻结状态，防止组件被标记为脏从而触发布局更新。
   *
   * @param { string } id - 组件的id。
   * @param { boolean } isFrozen - 是否设置冻结。<br/>true表示设置冻结，false表示设置不冻结。<br/>默认值为false。
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  freezeUINode(id: string, isFrozen: boolean): void;

  /**
   * 通过uniqueId设置组件的冻结状态，防止组件被标记为脏从而触发布局更新。
   *
   * @param { number } uniqueId - 组件的uniqueId。
   * @param { boolean } isFrozen - 是否设置冻结。<br/>true表示设置冻结，false表示设置不冻结。<br/>默认值为false。
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  freezeUINode(uniqueId: number, isFrozen: boolean): void;

  /**
   * Get object text menu controller.
   *
   * @returns { TextMenuController } object text menu controller.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 16 dynamic
   */
  getTextMenuController(): TextMenuController;

  /**
   * 在输入框绑定输入法前设置键盘样式配置
   *
   * @param { number } uniqueId - The unique id of the input component.
   * @param { KeyboardAppearanceConfig } config - The config of keyboard.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  setKeyboardAppearanceConfig(uniqueId: number, config: KeyboardAppearanceConfig): void;

  /**
   * 创建一个不依赖窗口的UI实例，并返回其UI上下文。该接口所创建的UI实例是单例。
   *
   * > **说明：**
   * >
   * > 返回的UI上下文只可用于创建[自定义节点](docroot://ui/arkts-user-defined-node.md)，不能执行其他UI操作。
   *
   * @param { common.UIAbilityContext | common.ExtensionContext } context -    *     [UIAbility]{@link @ohos.app.ability.UIAbility}或
   *     [ExtensionAbility]{@link @ohos.app.ability.ExtensionAbility:ExtensionAbility}所对应的上下文环境。
   * @returns { UIContext | undefined } Context of the created UI instance, or **undefined** if creation fails.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. The number of parameters is incorrect.
   *     <br> 2. Invalid parameter type of context.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  static createUIContextWithoutWindow(context: common.UIAbilityContext | common.ExtensionContext) : UIContext | undefined;

  /**
   * 销毁[createUIContextWithoutWindow]{@link UIContext#createUIContextWithoutWindow}创建的UI实例。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  static destroyUIContextWithoutWindow(): void;

  /**
   * 设置HSP资源管理对象的缓存数量上限。
   *
   * 如果缓存的上限设置得过高，可能会导致内存开销过大，存在内存过载的风险。
   * 建议根据实际需求进行配置。
   *
   * @param { number } count - HSP资源管理器的缓存限制必须为非负整数。
   * @throws { BusinessError } 100101 - The parameter is less than 0.
   * @throws { BusinessError } 100102 - The parameter value cannot be a floating point number.
   * @throws { BusinessError } 100103 - The function cannot be called from a non main thread.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 21 dynamic
   */
  static setResourceManagerCacheMaxCountForHSP(count: number): void;

  /**
   * 获取UI实例对象唯一标识，多实例场景下，开发者可使用此唯一标识区分多个UI实例对象，便于管理。
   *
   * @returns { number } 后端实例的唯一标识。取值范围为[-1, +∞)。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  getId(): number;

  /**
   * 设置不可见Image节点内存回收配置开关，由系统应用配置，默认不开启；开启后，在应用退后台不可见页面下挂载的Image节点会进行内存回收。
   *
   * @param { boolean } enabled - 使能开关项：true开启，false关闭；
   *     默认不开启，由系统应用按需开启。
   *     <br>默认值：false
   *     <br>默认值：false
   *     <br>默认值：false
   *     <br>默认值：false
   *     <br>配置为异常undefined时，恢复为默认值false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  recycleInvisibleImageMemory(enabled: boolean): void;

  /**
   * 设置自定义键盘接续特性。
   *
   * @param { CustomKeyboardContinueFeature } feature - 自定义键盘接续特性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  setCustomKeyboardContinueFeature(feature: CustomKeyboardContinueFeature): void;

  /**
   * 获取UIContext对应页面的根节点。
   *
   * @returns { FrameNode | null } FrameNode of the root node of the page or **null**.
   *     <br>If no valid FrameNode is available, **null** is returned.
   *     <br>If no page is loaded in the window, **null** is returned.
   * @throws { BusinessError } 120007 - The UIContext is not available.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  getPageRootNode(): FrameNode | null;

  /**
   * 检查当前UI实例是否处于分栏模式。
   *
   * @returns { boolean } 返回当前UI实例是否处于分栏模式。true表示处于分栏模式，false表示未处于分栏模式。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  isEasySplit(): boolean;

  /**
   * 是否启用或禁用事件直通。
   *
   * @param { boolean } enabled - 启用或禁用事件透传。默认值为false。
   * @param { RawInputEventType } eventType - 原始输入事件的类型。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservicet
   * @since 26.0.0 dynamic
   */
  enableEventPassthrough(enabled: boolean, eventType: RawInputEventType): void;

  /**
   * 设置文本组件的文本选择清除策略。
   * 默认策略：**TextSelectionClearPolicy.KEEP_ON_EXTERNAL_CLICK**。
   *
   * @param { TextSelectionClearPolicy } policy - 文本选择清除策略。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  setTextSelectionClearPolicy(policy: TextSelectionClearPolicy): void;

  /**
   * 获取对象智能手势控制器。
   *
   * @returns { SmartGestureController } 智能手势控制器对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getSmartGestureController(): SmartGestureController;
}

/**
 * 配置键盘弹出时页面的避让模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
export const enum KeyboardAvoidMode {

  /**
   * Offset Type, the layout moves up.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  OFFSET = 0,

  /**
   * Resize Type, the layout is resized.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  RESIZE = 1,

  /**
   * Offset Type, the layout moves up, and this adjustment also occurs if the caret position in the text box changes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  OFFSET_WITH_CARET = 2,

  /**
   * Resize Type, the layout moves up, and this adjustment also occurs if the caret position in the text box changes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  RESIZE_WITH_CARET = 3,

  /**
   * None Type, the layout is not adjusted to avoid the keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  NONE = 4
}

/**
 * TextSelectionClearPolicy的枚举
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export const enum TextSelectionClearPolicy {

  /**
   * 在文本组件之外单击时，保留选定文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  KEEP_SELECTED_TEXT_ON_EXTERNAL_TOUCH = 0,

  /**
   * 在文本组件外部单击时清除选定的文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  CLEAR_SELECTED_TEXT_ON_EXTERNAL_TOUCH = 1
}

/**
* 枚举值，表示动态帧率场景的类型。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
export const enum SwiperDynamicSyncSceneType {

  /**
   * 手势操作场景。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  GESTURE = 0,

  /**
   * 动画过渡场景。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  ANIMATION = 1
}

/**
* Marquee的动态帧率场景的类型枚举
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 14 dynamic
 */
export const enum MarqueeDynamicSyncSceneType {

  /**
   * Scene type is ANIMATION.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 14 dynamic
   */
  ANIMATION = 1
}

/**
 * class TextMenuController
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 16 dynamic
 */
export class TextMenuController {

  /**
   * Set text menu options.
   *
   * @param { TextMenuOptions } options - the options of the text menu.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 16 dynamic
   */
  setMenuOptions(options: TextMenuOptions): void;

  /**
   * 禁用所有的系统菜单
   *
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  static disableSystemServiceMenuItems(disable: boolean): void;

  /**
   * 按照id禁用菜单项
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  static disableMenuItems(items: Array<TextMenuItemId>): void;
}

/**
* An enumeration type that identifies the current node's rendering state. The UI components used in
* the application are automatically managed by the system and controlled for participation in graphical
* rendering by either mounting them onto the render tree or removing them from it. Only nodes that
* participate in graphical rendering have the potential to be displayed. However, participating in
* rendering does not equal to the node's visibility, as there may be many occlusion scenarios in the
* actual implementation of the application. Nevertheless, if a node does not participate in rendering,
* it will definitely not be visible.
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export const enum NodeRenderState {

  /**
   * The node has been mount on to the render tree and will soon be rendered. Generally, after the next frame,
   * the user will be able to see this node. However, this is not always the case, as in reality, the node may be
   * occluded by other nodes, meaning it is rendered but not be visible.
   * When registering a listener for the render state using the UIObserver interface, the system will immediately
   * trigger the callback once, and the state notified at this time typically represents the current state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  ABOUT_TO_RENDER_IN = 0,

  /**
   * The node has been removed from the render tree and will no longer be rendered shortly. Generally speaking,
   * after the next frame, the user will no longer be able to see this node.
   * When registering a listener for the render state using the UIObserver interface, the system will immediately
   * trigger the callback once, and the state notified at this time typically represents the current state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  ABOUT_TO_RENDER_OUT = 1
}

/**
 * 此枚举类型表示手势回调触发阶段，对应gesture.d.ts中定义的动作回调，但不同手势类型支持的阶段不同（如SwipeGesture仅包含WILL_START枚举值）。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export const enum GestureActionPhase {

  /**
   * 该手势已被系统成功识别，action-start/action回调函数将立即执行。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  WILL_START = 0,

  /**
   * 这表示手势已被确定为结束，这通常发生在用户抬起手指，结束整个交互时，并且动作结束回调将立即执行。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  WILL_END = 1
}

/**
 * 此枚举类型用于指定需要监控的手势类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export const enum GestureListenerType {

  /**
   * 点击手势
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  TAP = 0,

  /**
   * 长按手势
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  LONG_PRESS = 1,

  /**
   * 滑动手势
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  PAN = 2,

  /**
   * 缩放手势
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  PINCH = 3,

  /**
   * 快滑手势
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  SWIPE = 4,

  /**
   * 旋转手势
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  ROTATION = 5
}

/**
* 自定义键盘接续特性的枚举。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
export const enum CustomKeyboardContinueFeature {

  /**
   * 使能自定义键盘接续。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  ENABLED = 0,

  /**
   * 关闭自定义键盘接续。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  DISABLED = 1
}