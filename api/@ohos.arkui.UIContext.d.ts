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
import type componentUtils from './@ohos.arkui.componentUtils';
import { ComponentContent, FrameNode, Frame, LengthMetrics, Edges } from './@ohos.arkui.node';
import type { AnimatorOptions, AnimatorResult } from './@ohos.animator';
import type observer from './@ohos.arkui.observer';
import dialog from './@ohos.arkui.dialog';
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
 * <p><strong>NOTE</strong>:
 * <br>You must first use getFont() in UIContext to obtain a Font instance,
 * and then call the APIs using the obtained instance.
 * </p>
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
   * Gets a list of fonts supported by system.
   *
   * <p><strong>NOTE</strong>:
   * <br>This API takes effect only on 2-in-1 devices.
   * </p>
   *
   * @returns { Array<string> } A list of font names
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getSystemFontList(): Array<string>;

  /**
   * Get font details according to the font name.
   *
   * @param { string } fontName - font name
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
 * class UIInspector
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
export class UIInspector {
  /**
   * Sets the component after layout or draw criteria and returns the corresponding listening handle
   * @param { string } id - component id.
   * @returns { inspector.ComponentObserver } create listener for observer component event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the component after layout or draw criteria and returns the corresponding listening handle
   * @param { string } id - component id.
   * @returns { inspector.ComponentObserver } create listener for observer component event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  createComponentObserver(id: string): inspector.ComponentObserver;

  /**
   * Sets the component after layout or draw criteria and returns the corresponding listening handle.
   *
   * @param { string | number } id - component id or uniqueId of the component.
   * @returns { inspector.ComponentObserver } create listener for observer component event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  createComponentObserver(id: string | number): inspector.ComponentObserver;
}

/**
 * Provides APIs to access pages through URLs. You can use the APIs to navigate to a specified page in an application,
 * replace the current page with another one in the same application, and return to the previous page or a specified
 * page.
 *
 * > **NOTE**
 *
 * > In the following API examples, you must first use
 * > [getRouter()](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) in **UIContext** to
 * > obtain a **Router** instance, and then call the APIs using the obtained instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export class Router {

  /**
   * Navigates to a specified page in the application. This API uses an asynchronous callback to return the result.
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
   * Navigates to a specified page in the application. This API uses an asynchronous callback to return the result.
   * Compared with [pushUrl]{@link Router#pushUrl(options: router.RouterOptions, callback: AsyncCallback<void>)}, this
   * API supports the **mode** parameter, which enables you to set the routing mode.
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
   * Navigates to a specified page in the application. This API uses a promise to return the result. Compared with
   * [pushUrl]{@link Router#pushUrl(options: router.RouterOptions)}, this API supports the **mode** parameter, which
   * enables you to set the routing mode.
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
   * Replaces the current page with another one in the application and destroys the current page. This API uses an
   * asynchronous callback to return the result.
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
   * Replaces the current page with another one in the application and destroys the current page. This API uses a
   * promise to return the result.
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
   * Replaces the current page with another one in the application and destroys the current page. This API uses an
   * asynchronous callback to return the result. Compared with
   * [replaceUrl]{@link Router#replaceUrl(options: router.RouterOptions, callback: AsyncCallback<void>)}, this API
   * supports the **mode** parameter, which enables you to set the routing mode.
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
   * Replaces the current page with another one in the application and destroys the current page. This API uses a
   * promise to return the result. Compared with [replaceUrl]{@link Router#replaceUrl(options: router.RouterOptions)},
   * this API supports the **mode** parameter, which enables you to set the routing mode.
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
   * Clears all historical pages in the stack and retains only the current page at the top of the stack.
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
   * > **NOTE**
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
   * Obtains the number of pages in the current stack.
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
   * Obtains state information about the current page.
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
   * Obtains the status information about a page by its index.
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
   * Obtains the status information about a page by its URL.
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
   * Enables the display of a confirm dialog box before returning to the previous page.
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
   * Disables the display of a confirm dialog box before returning to the previous page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  hideAlertBeforeBackPage(): void;

  /**
   * Obtains the parameters passed from the page that initiates redirection to the current page.
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
   * Navigates to a page using the named route. This API uses an asynchronous callback to return the result.
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
   * Navigates to a page using the named route. This API uses an asynchronous callback to return the result. Compared
   * with
   * [pushNamedRoute]{@link Router#pushNamedRoute(options: router.NamedRouterOptions, callback: AsyncCallback<void>)},
   * this API supports the **mode** parameter, which enables you to set the routing mode.
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
   * Navigates to a page using the named route. This API uses a promise to return the result. Compared with
   * [pushNamedRoute]{@link Router#pushNamedRoute(options: router.NamedRouterOptions)}, this API supports the **mode**
   * parameter, which enables you to set the routing mode.
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
   * Replaces the current page with another one using the named route and destroys the current page. This API uses an
   * asynchronous callback to return the result.
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
   * Replaces the current page with another one using the named route and destroys the current page. This API uses a
   * promise to return the result.
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
   * Replaces the current page with another one using the named route and destroys the current page. This API uses an
   * asynchronous callback to return the result. Compared with
   * [replaceNamedRoute]{@link Router#replaceNamedRoute(options: router.NamedRouterOptions, callback: AsyncCallback<void>)},
   * this API supports the **mode** parameter, which enables you to set the routing mode.
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
   * Replaces the current page with another one using the named route and destroys the current page. This API uses a
   * promise to return the result. Compared with
   * [replaceNamedRoute]{@link Router#replaceNamedRoute(options: router.NamedRouterOptions)}, this API supports the
   * **mode** parameter, which enables you to set the routing mode.
   *
   * @param { router.NamedRouterOptions } options - Description of the new page.
   * @param { router.RouterMode } mode - Routing mode.
   * @returns { Promise<void> } Promise that returns no value.
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
 * Defines a type that can be used for component attributes and method parameters to customize the UI description and
 * generate custom components with a specific component ID.
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
 * Specifies the target node for component binding.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export interface TargetInfo {
  /**
   * Target node for binding popups or menus.<br>**NOTE**<br>1. When **id** is a number, it corresponds to the component's **UniqueID**,
   * whose uniqueness is guaranteed by the system.<br>2. When **id** is a string, 
   * it corresponds to the component specified by the universal attribute 
   * [id]{@link CommonMethod#id}. You must ensure the uniqueness of this ID, 
   * although there may be multiple instances.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  id: string | number;

  /**
   * Unique ID of the custom component where the target node is located. 
   * When the above **id** is specified as a string, this property can be used to narrow down the scope, 
   * helping you ensure the uniqueness of **id: string** within a certain range.
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
 * Sets the background luminance sampling parameters.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic
 */
export interface BackgroundLuminanceSamplingConfigs {
  /**
   * Color sampling interval, in milliseconds. The minimum value is 180 ms.
   *
   * @default 500
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  samplingInterval?: number;
  /**
   * Light color brightness threshold. The value must be an integer in the range of [0, 255]. The dark color brightness 
   * threshold must be less than the light color brightness threshold.
   *
   * @default 220
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  brightThreshold?: number;
  /**
   * Dark color brightness threshold. The value must be an integer in the range of [0, 255]. The dark color brightness 
   * threshold must be less than the light color brightness threshold.
   *
   * @default 150
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  darkThreshold?: number;
  /**
   * Sample area offset relative to the component, calculated from the component's upper left corner as the reference 
   * point.
   * 
   * The component's own area is used by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  region?: Edges<LengthMetrics>;
}

/**
 * Sets the background luminance color picking parameters, registers the luminance change listening callback, and 
 * unregisters the listening callback.
 * 
 * > **NOTE**
 * >
 * > In the following API examples, you must first use [getLuminanceSampler]{@link UIContext#getLuminanceSampler} in 
 * > **UIContext** to obtain a **LuminanceSampler** object, and then call the APIs using the obtained object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic
 */
export class LuminanceSampler {
  /**
   * Sets the color picking parameters. If the luminance threshold is not within the specified range or the dark 
   * threshold is greater than the luminance threshold, an exception is thrown.
   *
   * @param { BackgroundLuminanceSamplingConfigs } configs - Color picking parameters.
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
   * Registers the callback for listening to color picking.
   * 
   * The background luminance is divided into three ranges based on the luminance threshold and dark threshold set by 
   * the [setBackgroundLuminanceSamplingConfigs]{@link LuminanceSampler#setBackgroundLuminanceSamplingConfigs} API: 
   * [0, Dark threshold], (Dark threshold, Luminance threshold], and (Luminance threshold, 255]. The callback is 
   * triggered when the background luminance range changes (or the listener callback is registered for the first time) 
   * and the interval between the current color picking and the last color picking reaches the specified interval, and 
   * the current background luminance is returned.
   *
   * @param { Callback<number> } samplingCallback - Callback used to return the current background luminance.<br>Note:
   *     [offBackgroundLuminanceChange]{@link LuminanceSampler#off} cannot be called in the listening callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  onBackgroundLuminanceChange(samplingCallback: Callback<number>): void;
  /**
   * Unregisters the callback for listening to color picking. If no callback is specified, all listeners are canceled.
   *
   * @param { Callback<number> } [samplingCallback] - Callback to unregister.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  offBackgroundLuminanceChange(samplingCallback?: Callback<number>): void;
}

/**
 * Provides APIs to create and display toasts, dialog boxes, action menus, and custom popups.
 * 
 * > **NOTE**
 * >
 * > - The initial APIs of this class are supported since API version 10.
 * >
 * > - In the following API examples, you must first use [getPromptAction()]{@link UIContext#getPromptAction} in 
 * > **UIContext** to obtain a **PromptAction** instance, and then call the APIs using the obtained instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export class PromptAction {
  /**
   * Creates and displays a toast.
   *
   * @param { promptAction.ShowToastOptions } options - Toast configuration options
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
   * Displays a toast. This API uses a promise to return the toast ID for use with **closeToast**.
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
   * Closes the specified toast.
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
   * Creates and displays a dialog box. This API uses an asynchronous callback to return the result.
   *
   * @param { promptAction.ShowDialogOptions } options - Dialog box configuration options.
   * @param { AsyncCallback<promptAction.ShowDialogSuccessResponse> } callback - Callback used to return the result. 
   *      On success, **err** is **undefined** and **data** contains the dialog box response. 
   *      On failure, **err** provides error details.
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
   * Creates and displays a dialog box. This API uses a promise to return the result.
   *
   * @param { promptAction.ShowDialogOptions } options - Dialog box configuration options.
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
   * @param { promptAction.ActionMenuSuccessResponse } callback - Callback used to return the action menu
   * response result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10 dynamiconly
   * @deprecated since 11
   * @useinstead showActionMenu
   */
  showActionMenu(options: promptAction.ActionMenuOptions, callback: promptAction.ActionMenuSuccessResponse): void;

  /**
   * Creates and displays an action menu. This API uses an asynchronous callback to return the result.
   *
   * @param { promptAction.ActionMenuOptions } options - Action menu options.
   * @param { AsyncCallback<promptAction.ActionMenuSuccessResponse> } callback -  Callback used to return the result. 
   *    On success, **err** is **undefined** and **data** contains the action menu response. 
   *    On failure, **err** provides error details.
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
   * Creates and displays an action menu. This API uses a promise to return the result.
   *
   * @param { promptAction.ActionMenuOptions } options - Action menu options.
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
   * Opens a custom dialog box corresponding to **dialogContent**. This API uses a promise to return the result. 
   * The dialog box displayed through this API has its content fully following style settings of **dialogContent**. 
   * It is displayed in the same way where **customStyle** is set to **true**.
   *
   * @param { ComponentContent<T> } dialogContent - Content of the custom dialog box.
   * @param { promptAction.BaseDialogOptions } options - Dialog box style.<br>
   *    Note: If both [isModal]{@link @ohos.promptAction:promptAction.BaseDialogOptions} and [showInSubWindow]{@link @ohos.promptAction:promptAction.BaseDialogOptions}
   *    in **BaseDialogOptions** are set to **true**, only **showInSubWindow** takes effect. 
   *    In this case, the non-modal dialog box is displayed without mask in the subwindow.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Opens a custom dialog box corresponding to **dialogContent**. This API uses a promise to return the result. A dialog box controller can be bound to the custom dialog box, allowing for subsequent control of the dialog box through the controller.
   * 
   * The dialog box displayed through this API has its content fully following style settings of **dialogContent**. It is displayed in the same way where **customStyle** is set to **true**.
   *
   * @param { ComponentContent<T> } dialogContent - Content of the custom dialog box.
   * @param { promptAction.DialogController } controller - Controller of the custom dialog box.
   * @param { promptAction.BaseDialogOptions } options - Style of the custom dialog box.<br>
   *    Note: If both [isModal]{@link @ohos.promptAction:promptAction.BaseDialogOptions} 
   *    and [showInSubWindow]{@link @ohos.promptAction:promptAction.BaseDialogOptions} in **BaseDialogOptions** are set to **true**, 
   *    only **showInSubWindow** takes effect. In this case, the non-modal dialog box is displayed without mask in the subwindow.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Updates a custom dialog box corresponding to **dialogContent**. This API uses a promise to return the result.
   *
   * @param { ComponentContent<T> } dialogContent - Content of the custom dialog box.
   * @param { promptAction.BaseDialogOptions } options - Dialog box style. Currently, 
   *    only **alignment**, **offset**, **autoCancel**, and **maskColor** can be updated.
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
   * Closes a custom dialog box corresponding to **dialogContent**. This API uses a promise to return the result.
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
   * Creates and displays a custom dialog box. This API uses a promise to return the dialog box ID for use with **closeCustomDialog**.
   *
+   * @param { promptAction.CustomDialogOptions } options - Content of the custom dialog box.<br>
+   *    Note: If both [isModal]{@link @ohos.promptAction:promptAction.BaseDialogOptions} 
+   *    and [showInSubWindow]{@link @ohos.promptAction:promptAction.BaseDialogOptions} in **BaseDialogOptions** are set to **true**, 
+   *    only **showInSubWindow** takes effect. In this case, the non-modal dialog box is displayed without mask in the subwindow.
+   * @returns { Promise<number> } Promise that returns the dialog box ID for use with **closeCustomDialog**.
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
   * Creates and displays a custom dialog box. This API uses a promise to return the dialog box ID for use with **closeCustomDialog**.
   * 
   * The dialog box ID can be included in the dialog box content for related operations. A dialog box controller can be bound to the custom dialog box, allowing for subsequent control of the dialog box through the controller.
   *
   * @param { CustomBuilder | CustomBuilderWithId } builder - Content of the custom dialog box.
   * @param { promptAction.DialogController } [controller] - Controller of the custom dialog box.
   * @param { promptAction.DialogOptions } [options] - Style of the custom dialog box.<br>
   *    Note: If both [isModal]{@link @ohos.promptAction:promptAction.BaseDialogOptions} 
   *    and [showInSubWindow]{@link @ohos.promptAction:promptAction.BaseDialogOptions} in **BaseDialogOptions** are set to **true**, 
   *    only **showInSubWindow** takes effect. In this case, the non-modal dialog box is displayed without mask in the subwindow.
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
   * Closes the specified custom dialog box.
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
   * Obtains the order of the topmost dialog box.
   *
   * This API returns the order of the dialog box currently at the top layer. This information can be used to specify 
   * the desired order for subsequent dialog boxes.
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
   * This API returns the order of the dialog box currently at the bottom layer. This information can be used to specify 
   * the desired order for subsequent dialog boxes.
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
   * Creates and displays a popup with the specified content. This API uses a promise to return the result.
   * 
   * > **NOTE**
   * >
   * > - If an invalid **target** is provided, the popup will not be displayed.
   * >
   * > - You must maintain the provided **content**, on which [updatePopup]{@link PromptAction#updatePopup} and 
   * > [closePopup]{@link PromptAction#closePopup} rely to identify the target popup.
   * >
   * > - If your **wrapBuilder** includes other components (such as [Popup]{@link @ohos.arkui.advanced.Popup} or 
   * > [Chip]{@link @ohos.arkui.advanced.Chip}), the [ComponentContent]{@link ComponentContent:ComponentContent} 
   * > constructor must include four parameters, and the **options** parameter must be 
   * > **{ nestingBuilderSupported: true }**.
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
   * Updates the style of the popup corresponding to the provided **content**. This API uses a promise to return the result.
   * 
   * > **NOTE**
   * >
   * > Updating the following properties is not supported: **showInSubWindow**, **focusable**, **onStateChange**, **onWillDismiss**, and **transition**.
   *
   * @param { ComponentContent<T> } content - Content displayed in the popup.
   * @param { PopupCommonOptions } options - Style of the popup.<br>
   *    **NOTE**<br>
   *      Updating the following properties is not supported: **showInSubWindow**, **focusable**, **onStateChange**, 
   *      **onWillDismiss**, and **transition**.
   * @param { boolean } [partialUpdate] - Whether to update the popup in incremental mode.<br>
   *    Default value: **false**<br>
   *    **NOTE**<br>
   *    **true**: Incremental update. Only specified attributes in **options** are updated, and the other attributes retain
   *         their current values. If the attribute value passed in **options** is invalid or **undefined**, the attribute
   *         is not updated.<br>
   *    **false**: Full update. Specified attributes in **options** are updated, and the other attributes are restored to 
   *         their default values.
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
   * Closes the popup corresponding to the provided **content**. This API uses a promise to return the result.
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
   * Opens a menu with the specified content. This API uses a promise to return the result.
   * 
   * > **NOTE**
   * >
   * > - If an invalid **target** is provided, the menu will not be displayed.
   * >
   * > - You must maintain the provided **content**, on which [updateMenu]{@link PromptAction#updateMenu} and 
   * > [closeMenu]{@link PromptAction#closeMenu} rely to identify the target menu.
   * >
   * > - If your **wrapBuilder** includes other components (such as [Popup]{@link @ohos.arkui.advanced.Popup} or 
   * > [Chip]{@link @ohos.arkui.advanced.Chip}), the [ComponentContent]{@link ComponentContent:ComponentContent} 
   * > constructor must include four parameters, and the **options** parameter must be 
   * > **{ nestingBuilderSupported: true }**.
   * >
   * > - Nested subwindow dialog boxes are not supported. For example, when [openMenu]{@link PromptAction#openMenu} has 
   * > **showInSubWindow** set to **true**, another dialog box with **showInSubWindow=true** cannot be displayed.
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
   * Updates the style of the menu corresponding to the provided **content**. This API uses a promise to return the 
   * result.
   * 
   * > **NOTE**
   * >
   * > - Updating for the following is not supported: **showInSubWindow**, **preview**, **previewAnimationOptions**, 
   * > **transition**, **onAppear**, **aboutToAppear**, **onDisappear**, **aboutToDisappear**, **onWillAppear**, 
   * > **onDidAppear**, **onWillDisappear**, and **onDidDisappear**.
   * >
   * > - The mask style can be updated by configuring [MenuMaskType]{@link MenuMaskType}. However, this API does not 
   * > support mask presence toggling (that is, switching the mask from non-existent to existent or vice versa) by 
   * > setting a boolean value.
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
   * Closes the menu corresponding to the provided content. This API uses a promise to return the result.
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
 * Provides unified dialog APIs.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export class DialogPresenter {
  /**
   * Presents a fixed-style dialog box.
   *
   * @param { dialog.DialogStyleOptions } [options] - Dialog options.
   * @returns { Promise<DialogResult> } Promise used to return the dialog result.
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
   * Presents a custom-style dialog box with the provided content.
   *
   * The content parameter accepts CustomBuilder or ComponentContent via union type:
   * - CustomBuilder: Builder function for custom dialog content.
   * - ComponentContent: ComponentContent supporting state-driven updates.
   *
   * isModal = true and showInSubWindow = true cannot be used at the same time.
   *
   * @param { CustomBuilder | CustomBuilderWithId | ComponentContent<Object> } content - Custom dialog content.
   * @param { dialog.DialogCustomOptions } [options] - Custom dialog options.
   * @returns { Promise<DialogResult> } Promise used to return the dialog result.
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
   * Updates a presented custom dialog box.
   *
   * @param { ComponentContent<Object> } content - The content used to identify the dialog.
   * @param { dialog.DialogBaseOptions } [options] - Options to update.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Dismisses a dialog box.
   * Accepts either the dialog ID (returned by present) or the ComponentContent reference.
   *
   * @param { int | ComponentContent<Object> } target - The dialog ID or ComponentContent to dismiss.
   * @returns { Promise<void> } Promise that returns no value.
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
 * Defines the callback type for listening for click events in **UIObserver**.
 *
 * @param { ClickEvent } event - Information about the click event that triggers the callback.
 * @param { FrameNode } [node] - Component bound to the click event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type ClickEventListenerCallback = (event: ClickEvent, node?: FrameNode) => void;

/**
 * Defines a callback for pan gesture events.
 *
 * @param { GestureEvent } event - Information about the gesture event that triggers the callback.
 * @param { GestureRecognizer } current - Information about the gesture recognizer that detects the event.
 * @param { FrameNode } [node] - Component bound to the gesture event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare type PanListenerCallback = (event: GestureEvent, current: GestureRecognizer, node?: FrameNode) => void;

/**
 * Defines the callback type for gesture event listeners in **UIObserver**.
 *
 * @param { GestureEvent } event - Information about the gesture event that triggers the callback.
 * @param { FrameNode } [node] - Component bound to the gesture event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type GestureEventListenerCallback = (event: GestureEvent, node?: FrameNode) => void;

/**
 * Defines the type can be used for identiting the node, for the string type, it's the inspector id
 * set through .[id]{@link CommonMethod#id} attribute, and for the number type, it's the unique ID got from the FrameNode by
 * [getUniqueId]{@link FrameNode:FrameNode#getUniqueId} method.
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
 * Defines the callback type for listening for the rendering state of a specific node in **UIObserver**.
 *
 * @param { NodeRenderState } state - Information about the gesture event that triggers the callback.
 * @param { FrameNode } [node] - Component bound to the gesture event that triggers the listener; returns **null** if
 *     the component has been released.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export declare type NodeRenderStateChangeCallback = (state: NodeRenderState, node?: FrameNode) => void;

/**
 * Defines the callback type for listening for specific gesture trigger information in **UIObserver**.
 *
 * @param { GestureTriggerInfo } info - Details of the gesture triggered by the interaction.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export declare type GestureListenerCallback = (info: GestureTriggerInfo) => void;

/**
 * Represents the page information of the router or navigation destination. 
 * If there is no related page information, **undefined** is returned.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface PageInfo {

  /**
   * Router information.
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
 * Provides the parameters used for initializing [OverlayManager]{@link @ohos.arkui.UIContext}.
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
   *  Whether to render the overlay root node. The value **true** means to render the overlay root node, 
   * and **false** means the opposite. The default value is **true**.<br>
   * **Atomic service API**: This API can be used in atomic services since API version 15.
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
   * hether to enable the swipe-to-dismiss gesture for **ComponentContent** under **OverlayManager**. 
   * The value **true** means to enable the swipe-to-dismiss gesture, and **false** means the opposite. Default value: **false**.<br>
   * **Atomic service API**: This API can be used in atomic services since API version 19.
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
 * Options for opening an overlay with order.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface OrderOverlayOptions {
  /**
   * The display order of the overlay.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  levelOrder?: LevelOrder;

  /**
   * The display mode of the overlay.
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
 * Provides APIs for listening for UI component behavior changes.
 *
 * > **NOTE**
 * >
 * > - The initial APIs of this class are supported since API version 11.
 * >
 * > - In the following API examples, you must first use [getUIObserver()]{@link UIContext#getUIObserver} in
 * > **UIContext** to obtain a **UIObserver** instance, and then call the APIs using the obtained instance.
 * >
 * > - UIObserver can only listen for relevant information within the current process and does not support obtaining
 * > information in cross-process scenarios<!--Del--> such as [UIExtensionComponent]{@link ui_extension_component}<!--
 * > DelEnd-->.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export class UIObserver {
  /**
   * Subscribes to status changes of this **NavDestination** component.
   *
   * @param { 'navDestinationUpdate' } type - Event type.
   * The value is fixed at **'navDestinationUpdate'**, which indicates the state change event
   * <br>of the **NavDestination** component.
   * @param { object } options - ID of the target **NavDestination** component.
   * @param { Callback<observer.NavDestinationInfo> } callback - Callback used to return the current
   * <br>state of the **NavDestination** component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Subscribes to status changes of this **NavDestination** component.
   *
   * @param { 'navDestinationUpdate' } type - Event type.
   * The value is fixed at **'navDestinationUpdate'**, which indicates the state change event
   * <br>of the **NavDestination** component.
   * @param { object } options - ID of the target **NavDestination** component.
   * @param { Callback<observer.NavDestinationInfo> } callback - Callback used to return the current
   * <br>state of the **NavDestination** component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  on(type: 'navDestinationUpdate', options: { navigationId: ResourceStr }, callback: Callback<observer.NavDestinationInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'navDestinationUpdate' } type - The type of event to remove the listener for. Must be 'navDestinationUpdate'.
   * @param { object } options - Specify the id of observed navigation.
   * @param { Callback<observer.NavDestinationInfo> } callback - The callback function to remove. If not provided, all callbacks for the given event type and
   *                                                             navigation ID will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'navDestinationUpdate' } type - The type of event to remove the listener for. Must be 'navDestinationUpdate'.
   * @param { object } options - The options object.
   * @param { Callback<observer.NavDestinationInfo> } callback - The callback function to remove. If not provided, all callbacks for the given event type and
   *                                                             navigation ID will be removed.
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
   * The value is fixed at **'navDestinationUpdate'**,
   * <br>which indicates the state change event of the **NavDestination** component.
   * @param { Callback<observer.NavDestinationInfo> } callback - Callback used to return the current state of
   * <br>the **NavDestination** component.
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
   * @param { 'navDestinationUpdate'} type - The type of event to remove the listener for. Must be 'navDestinationUpdate'.
   * @param { Callback<observer.NavDestinationInfo> } [callback] - The callback function to remove. If not provided, all callbacks for the given event type
   *                                                               will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
   /**
    * Removes a callback function that was previously registered with `on()`.
    *
    * @param { 'navDestinationUpdate'} type - The type of event to remove the listener for. Must be 'navDestinationUpdate'.
    * @param { Callback<observer.NavDestinationInfo> } [callback] - The callback function to remove. If not provided, all callbacks for the given event type
    *                                                               will be removed.
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
   * @param { 'navDestinationUpdateByUniqueId' } type - The type of event to listen for. Must be 'navDestinationUpdateByUniqueId'.
   * @param { number } navigationUniqueId - The uniqueId of the navigation.
   * @param { Callback<observer.NavDestinationInfo> } callback - The callback function to be called when the navigation destination is updated.
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
    * @param { 'navDestinationUpdateByUniqueId'} type - The type of event to remove the listener for. Must be 'navDestinationUpdateByUniqueId'.
   * @param { number } navigationUniqueId - The uniqueId of the navigation.
    * @param { Callback<observer.NavDestinationInfo> } [callback] - The callback function to remove. If not provided, all callbacks for the given event type
    *                                                      will be removed.
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
    * @param { Callback<observer.ScrollEventInfo> } callback - The callback function to be called when the scroll event start or stop.
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
   * <br>The value is fixed at 'routerPageUpdate', which indicates the state change event of the page in the router.
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
   * <br>The value is fixed at 'routerPageUpdate', which indicates the state change event of the page in the router.
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
   * Listens for screen pixel density changes.
   *
   * @param { 'densityUpdate' } type - Event type. The value **'densityUpdate'** indicates the pixel density changes of
   *     the screen.
   * @param { Callback<observer.DensityInfo> } callback - Callback used to return the updated screen pixel density using
   *     a [DensityInfo]{@link @ohos.arkui.observer:uiObserver.DensityInfo} object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  on(type: 'densityUpdate', callback: Callback<observer.DensityInfo>): void;

  /**
   * Unregisters the listener for screen pixel density changes.
   *
   * @param { 'densityUpdate' } type - Event type. The value **'densityUpdate'** indicates the pixel density changes of
   *     the screen.
   * @param { Callback<observer.DensityInfo> } [callback] - Target listener to unregister. If no parameter is provided,
   *     all screen pixel density change listeners for the current [UIContext]{@link @ohos.arkui.UIContext} are removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  off(type: 'densityUpdate', callback?: Callback<observer.DensityInfo>): void;

  /**
   * Listens for drawing instruction dispatch in each frame.
   *
   * @param { 'willDraw' } type - Event event. The value **'willDraw'** indicates whether drawing is about to occur.
   * @param { Callback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  on(type: 'willDraw', callback: Callback<void>): void;

  /**
   * Unregisters the listener for drawing instruction dispatch in each frame.
   *
   * @param { 'willDraw' } type - Event event. The value **'willDraw'** indicates whether drawing is about to occur.
   * @param { Callback<void> } [callback] - Target listener to unregister. If no parameter is provided, all drawing
   *     instruction dispatch listeners are unregistered.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  off(type: 'willDraw', callback?: Callback<void>): void;

  /**
   * Listens for layout completion status in each frame.
   *
   * @param { 'didLayout' } type - Event type. The value **'didLayout'** indicates whether the layout has been
   *     completed.
   * @param { Callback<void> } callback - Callback used to return the result.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  on(type: 'didLayout', callback: Callback<void>): void;

  /**
   * Unregisters the listener for layout completion status in each frame.
   *
   * @param { 'didLayout' } type - Event type. The value **'didLayout'** indicates whether the layout has been
   *     completed.
   * @param { Callback<void> } [callback] - Target listener to unregister. If no parameter is provided, all layout
   *     completion listeners are unregistered.
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
   *     the navigation switched to a new navDestination.
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
   *     navigation switched to a new navDestination.
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
   *     when the clickEvent will be trigger or after.
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
   *     all callbacks for the given event type will be removed.
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
   *     when the clickEvent will be trigger or after.
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
   *     all callbacks for the given event type will be removed.
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
   *     when the clickEvent will be trigger or after.
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
   *     all callbacks for the given event type will be removed.
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
   *     when the clickEvent will be trigger or after.
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
   *     all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  off(type: 'didClick', callback?: GestureEventListenerCallback): void;

  /**
   * Listens for pan gesture [onActionStart]{@link PanGestureInterface.onActionStart} pre-execution events, executing
   * the callback before the actual [onActionStart]{@link PanGestureInterface.onActionStart} event. It works for finger
   * swiping, mouse dragging, mouse wheel scrolling, and touchpad movements, but not for screen reader touch mode.
   *
   * @param { 'beforePanStart' } type - Event type. The value is fixed at **'beforePanStart'**, indicating command
   *     dispatch before the execution of the pan gesture [onActionStart]{@link PanGestureInterface.onActionStart}
   *     event. The registered callback is triggered before **onActionStart** is executed.
   * @param { PanListenerCallback } callback - Callback used to return the result. It provides
   *     [GestureEvent]{@link GestureEvent}, [GestureRecognizer]{@link GestureRecognizer}, and the target component's
   *     [FrameNode]{@link FrameNode} information.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  on(type: 'beforePanStart', callback: PanListenerCallback): void;

  /**
   * Unregisters the listener for pan gesture [onActionStart]{@link PanGestureInterface.onActionStart} pre-execution
   * events, canceling callbacks registered via
   * [on('beforePanStart')]{@link UIObserver#on(type: 'beforePanStart', callback: PanListenerCallback)}.
   *
   * @param { 'beforePanStart' } type - Event type. The value is fixed at **'beforePanStart'**, indicating command
   *     dispatch before the execution of the pan gesture [onActionStart]{@link PanGestureInterface.onActionStart}
   *     event.
   * @param { PanListenerCallback } [callback] - Target listener to unregister. If no parameter is provided, all
   *     callback listeners for command dispatch before the execution of the pan gesture
   *     [onActionStart]{@link PanGestureInterface.onActionStart} event will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  off(type: 'beforePanStart', callback?: PanListenerCallback): void;

  /**
   * Listens for pan gesture [onActionEnd]{@link PanGestureInterface.onActionEnd} pre-execution events, executing the
   * callback before the actual [onActionEnd]{@link PanGestureInterface.onActionEnd} event. It works for finger swiping,
   * mouse dragging, mouse wheel scrolling, and touchpad movements, but not for screen reader touch mode.
   *
   * @param { 'beforePanEnd' } type - Event type. The value is fixed at **'beforePanEnd'**, indicating command dispatch
   *     before the execution of the pan gesture [onActionEnd]{@link PanGestureInterface.onActionEnd} event. The
   *     registered callback is triggered before **onActionEnd** is executed.
   * @param { PanListenerCallback } callback - Callback used to return the result. It provides
   *     [GestureEvent]{@link GestureEvent}, [GestureRecognizer]{@link GestureRecognizer}, and the target component's
   *     [FrameNode]{@link FrameNode} information.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  on(type: 'beforePanEnd', callback: PanListenerCallback): void;

  /**
   * Unregisters the listener for pan gesture [onActionEnd]{@link PanGestureInterface.onActionEnd} pre-execution events,
   * canceling callbacks registered via
   * [on('beforePanEnd')]{@link UIObserver#on(type: 'beforePanEnd', callback: PanListenerCallback)}.
   *
   * @param { 'beforePanEnd' } type - Event type. The value is fixed at **'beforePanEnd'**, indicating command dispatch
   *     before the execution of the pan gesture [onActionEnd]{@link PanGestureInterface.onActionEnd} event.
   * @param { PanListenerCallback } [callback] - Target listener to unregister. If no parameter is provided, all
   *     callback listeners for command dispatch before the execution of the pan gesture
   *     [onActionEnd]{@link PanGestureInterface.onActionEnd} event will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  off(type: 'beforePanEnd', callback?: PanListenerCallback): void;

  /**
   * Listens for pan gesture [onActionStart]{@link PanGestureInterface.onActionStart} post-execution events, executing
   * the callback after the actual [onActionStart]{@link PanGestureInterface.onActionStart} event. It works for finger
   * swiping, mouse dragging, mouse wheel scrolling, and touchpad movements, but not for screen reader touch mode.
   *
   * @param { 'afterPanStart' } type - Event type. The value is fixed at **'afterPanStart'**, indicating command
   *     dispatch after the execution of the pan gesture [onActionStart]{@link PanGestureInterface.onActionStart} event.
   *     The registered callback is triggered after **onActionStart** is executed.
   * @param { PanListenerCallback } callback - Callback used to return the result. It provides
   *     [GestureEvent]{@link GestureEvent}, [GestureRecognizer]{@link GestureRecognizer}, and the target component's
   *     [FrameNode]{@link FrameNode} information.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  on(type: 'afterPanStart', callback: PanListenerCallback): void;

  /**
   * Unregisters the listener for pan gesture [onActionStart]{@link PanGestureInterface.onActionStart} post-execution
   * events, canceling callbacks registered via
   * [on('afterPanStart')]{@link UIObserver#on(type: 'afterPanStart', callback: PanListenerCallback)}.
   *
   * @param { 'afterPanStart' } type - Event type. The value is fixed at **'afterPanStart'**, indicating command
   *     dispatch after the execution of the pan gesture [onActionStart]{@link PanGestureInterface.onActionStart} event.
   * @param { PanListenerCallback } [callback] - Target listener to unregister. If no parameter is provided, all
   *     callback listeners for command dispatch after the execution of the pan gesture
   *     [onActionStart]{@link PanGestureInterface.onActionStart} event will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  off(type: 'afterPanStart', callback?: PanListenerCallback): void;

  /**
   * Listens for pan gesture [onActionEnd]{@link PanGestureInterface.onActionEnd} post-execution events, executing the
   * callback after the actual [onActionEnd]{@link PanGestureInterface.onActionEnd} event. It works for finger swiping,
   * mouse dragging, mouse wheel scrolling, and touchpad movements, but not for screen reader touch mode.
   *
   * @param { 'afterPanEnd' } type - Event type. The value is fixed at **'beforePanEnd'**, indicating command dispatch
   *     after the execution of the pan gesture [onActionEnd]{@link PanGestureInterface.onActionEnd} event. The
   *     registered callback is triggered after **onActionEnd** is executed.
   * @param { PanListenerCallback } callback - Callback used to return the result. It provides
   *     [GestureEvent]{@link GestureEvent}, [GestureRecognizer]{@link GestureRecognizer}, and the target component's
   *     [FrameNode]{@link FrameNode} information.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  on(type: 'afterPanEnd', callback: PanListenerCallback): void;

  /**
   * Unregisters the listener for pan gesture [onActionEnd]{@link PanGestureInterface.onActionEnd} post-execution
   * events, canceling callbacks registered via
   * [on('afterPanEnd')]{@link UIObserver#on(type: 'afterPanEnd', callback: PanListenerCallback)}.
   *
   * @param { 'afterPanEnd' } type - Event type. The value is fixed at **'afterPanEnd'**, indicating command dispatch
   *     after the execution of the pan gesture [onActionEnd]{@link PanGestureInterface.onActionEnd} event.
   * @param { PanListenerCallback } [callback] - Target listener to unregister. If no parameter is provided, all
   *     callback listeners for command dispatch after the execution of the pan gesture
   *     [onActionEnd]{@link PanGestureInterface.onActionEnd} event will be removed.
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
   *     when the tabContent show or hide.
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
   *     all callbacks for the given event type and Tabs ID will be removed.
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
   *     when the tabContent is showed or hidden.
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
   *     all callbacks for the given event type and Tabs ID will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  off(type: 'tabContentUpdate', callback?: Callback<observer.TabContentInfo>): void;

  /**
   * Registers a callback function to be called when the tabContent is showed or hidden.
   * Include the cases when the first tab content shows and when the tab changes current index.
   *
   * @param { 'tabChange' } type - The type of event to listen for. Must be 'tabChange'.
   * @param { observer.ObserverOptions } config - The options object. Includes the observed component id.
   * @param { Callback<observer.TabContentInfo> } callback - The callback function to be called
   *     when when the tabContent is showed or hidden.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  on(type: 'tabChange', config: observer.ObserverOptions, callback: Callback<observer.TabContentInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'tabChange' } type - The type of event to remove the listener for. Must be 'tabChange'.
   * @param { observer.ObserverOptions } config - The config object. Includes the observed component id.
   * @param { Callback<observer.TabContentInfo> } [callback] - The callback function to remove.
   *     If not provided, all callbacks for the given event type and Tabs ID will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  off(type: 'tabChange', config: observer.ObserverOptions, callback?: Callback<observer.TabContentInfo>): void;

  /**
   * Registers a callback function to be called when the tabContent is showed or hidden.
   * Include the cases when the first tab content shows and when the tab changes current index.
   *
   * @param { 'tabChange' } type - The type of event to listen for. Must be 'tabChange'.
   * @param { Callback<observer.TabContentInfo> } callback - The callback function to be called
   *     when the tabContent is showed or hidden.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  on(type: 'tabChange', callback: Callback<observer.TabContentInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'tabChange' } type - The type of event to remove the listener for. Must be 'tabChange'.
   * @param { Callback<observer.TabContentInfo> } [callback] - The callback function to remove.
   *     If not provided, all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  off(type: 'tabChange', callback?: Callback<observer.TabContentInfo>): void;

  /**
   * Registers a callback for window size layout breakpoint changes. This enables adaptive UI layout adjustments based
   * on window size variations. This API uses an asynchronous callback to return the result.
   *
   * @param { 'windowSizeLayoutBreakpointChange' } type - Event type. The value is fixed at
   *     **'windowSizeLayoutBreakpointChange'**, indicating window size layout breakpoint changes.
   * @param { Callback<observer.WindowSizeLayoutBreakpointInfo> } callback - Callback used to return the result. It
   *     provides window width and height layout breakpoint enumerations using a **WindowSizeLayoutBreakpointinfo**
   *     object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 22 dynamic
   */
  on(type: 'windowSizeLayoutBreakpointChange', callback: Callback<observer.WindowSizeLayoutBreakpointInfo>): void;

  /**
   * Unregisters previously registered window size layout breakpoint change listeners. If no callback is specified, all
   * listeners for the current UI context are removed. This API uses an asynchronous callback to return the result.
   *
   * @param { 'windowSizeLayoutBreakpointChange' } type - Event type. The value is fixed at
   *     **'windowSizeLayoutBreakpointChange'**, indicating window size layout breakpoint changes.
   * @param { Callback<observer.WindowSizeLayoutBreakpointInfo> } [callback] - Target listener to unregister. If no
   *     parameter is provided, all window size layout breakpoint change listeners for the current
   *     [UIContext]{@link @ohos.arkui.UIContext} are removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 22 dynamic
   */
  off(type: 'windowSizeLayoutBreakpointChange', callback?: Callback<observer.WindowSizeLayoutBreakpointInfo>): void;

  /**
   * Registers a callback to be invoked when the rendering state of a specific node changes. This callback is executed
   * immediately once upon successful registration.
   *
   * Be mindful of node quantity limitations. For performance reasons, registering too many nodes within a single UI
   * instance will throw an exception.
   *
   * Typically, a **RENDER_OUT** notification is received when a component moves off-screen. However, in certain
   * scenarios, a **RENDER_OUT** notification might not be triggered even if a component has moved off-screen. For
   * example, components with caching capabilities like [Swiper]{@link swiper} will not trigger **RENDER_OUT**
   * notifications even when the **isShown** parameter in the
   * [cachedCount]{@link SwiperAttribute#cachedCount(count: number, isShown: boolean)} attribute is set to **true**.
   *
   * @param { 'nodeRenderState' } type - Event type. The value is fixed at **'nodeRenderState'**, indicating rendering
   *     state changes.
   * @param { NodeIdentity } nodeIdentity - Node ID.
   * @param { NodeRenderStateChangeCallback } callback - Callback used to return the result. It provides the
   *     [NodeRenderState]{@link NodeRenderState} of the node rendering state change event and the component's
   *     [FrameNode]{@link FrameNode}.
   * @throws { BusinessError } 161001 - The count of nodes monitoring render state is over the limitation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  on(type: 'nodeRenderState', nodeIdentity: NodeIdentity, callback: NodeRenderStateChangeCallback): void;

  /**
   * Unregisters the callback for listening for node rendering state changes.
   *
   * @param { 'nodeRenderState' } type - Event type. The value is fixed at **'nodeRenderState'**.
   * @param { NodeIdentity } nodeIdentity - Node ID.
   * @param { NodeRenderStateChangeCallback } [callback] - Target listener to unregister. If no parameter is provided,
   *     all node rendering state change listeners are unregistered.
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
   *                                                                  text field's content is changed.
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
   *                                                                     all callbacks for the given event type will be removed.
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
   * Registers a callback to listen for gesture triggering information.
   *
   * @param { GestureListenerType } type - Type of gesture to listen for.
   * @param { GestureObserverConfigs } option - Configuration options for binding the global listener.
   * @param { GestureListenerCallback } callback - Callback triggered when the gesture state updates.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  addGlobalGestureListener(type: GestureListenerType,
      option: GestureObserverConfigs, callback: GestureListenerCallback): void;

  /**
   * Unregisters the specified global gesture listener.
   *
   * @param { GestureListenerType } type - Event type.
   * @param { GestureListenerCallback } [callback] - Callback to unregister. If this parameter is not specified, this
   *     API unregisters all callbacks for this gesture type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  removeGlobalGestureListener(type: GestureListenerType, callback?: GestureListenerCallback): void;

  /**
   * Listens for content switching events of the **Swiper** component. This API uses an asynchronous callback to return
   * the result.
   *
   * @param { Callback<SwiperContentInfo> } callback - Callback used to return the result. It provides the **Swiper**
   *     content switching information using a **SwiperContentInfo** object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  onSwiperContentUpdate(callback: Callback<SwiperContentInfo>): void;

  /**
   * Unregister the listener for content switching events of the **Swiper** component.
   *
   * @param { Callback<SwiperContentInfo> } [callback] - Target listener to unregister. If no parameter is provided, all
   *     listeners for the **Swiper** component are unregistered.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  offSwiperContentUpdate(callback?: Callback<SwiperContentInfo>): void;

  /**
   * Listens for content switching events of a specific **Swiper** component identified by its ID. This API uses an
   * asynchronous callback to return the result.
   *
   * @param { observer.ObserverOptions } config - Information about the target **Swiper** component.
   * @param { Callback<SwiperContentInfo> } callback - Callback used to return the result. It provides the **Swiper**
   *     content switching information using a **SwiperContentInfo** object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  onSwiperContentUpdate(config: observer.ObserverOptions, callback: Callback<SwiperContentInfo>): void;

  /**
   * Unregister the listener for content switching events of a specific **Swiper** component identified by its ID.
   *
   * @param { observer.ObserverOptions } config - Information about the target **Swiper** component.
   * @param { Callback<SwiperContentInfo> } [callback] - Target listener to unregister. If no parameter is provided, all
   *     listeners for the **Swiper** component are unregistered.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  offSwiperContentUpdate(config: observer.ObserverOptions, callback?: Callback<SwiperContentInfo>): void;

  /**
   * Registers a callback that is triggered when the size of the visible router page changes. This API uses an
   * asynchronous callback to return the result.
   *
   * @param { Callback<observer.RouterPageInfo> } callback - Callback used to return the information about the router
   *     page.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  onRouterPageSizeChange(callback: Callback<observer.RouterPageInfo>): void;

  /**
   * Removes the listener callback registered using the **onRouterPageSizeChange** API. This API uses an asynchronous
   * callback to return the result.
   *
   * @param { Callback<observer.RouterPageInfo> } [callback] - Callback to be removed. If no parameter is passed, all
   *     callbacks are removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  offRouterPageSizeChange(callback?: Callback<observer.RouterPageInfo>): void;

  /**
   * Registers a callback that is triggered when the size of the visible navigation destination changes. This API uses
   * an asynchronous callback to return the result.
   *
   * @param { Callback<observer.NavDestinationInfo> } callback - Callback used to return navigation destination
   *     information.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  onNavDestinationSizeChange(callback: Callback<observer.NavDestinationInfo>): void;

  /**
   * Removes the listener callback registered using the **onNavDestinationSizeChange** API. This API uses an
   * asynchronous callback to return the result.
   *
   * @param { Callback<observer.NavDestinationInfo> } [callback] - Callback to be removed. If no parameter is passed,
   *     all callbacks are removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  offNavDestinationSizeChange(callback?: Callback<observer.NavDestinationInfo>): void;

  /**
   * Removes the listener callback registered using the **onNavDestinationSizeChangeByUniqueId** API. This API uses an
   * asynchronous callback to return the result.
   *
   * @param { number } navigationUniqueId - Unique ID of the **Navigation** component to which the **NavDestination**
   *     component to be listened belongs, which can be obtained through
   *     [queryNavigationInfo]{@link BaseCustomComponent#queryNavigationInfo}.
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
   * Removes a callback function that was previously registered with 'onNavDestinationSizeChangeByUniqueId()'.
   *
   * @param { number } navigationUniqueId - The uniqueId of the Navigation to which NavDestination belongs.
   * @param { Callback<observer.NavDestinationInfo> } [callback] - The callback function to remove. If not provided,
   *     all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  offNavDestinationSizeChangeByUniqueId(navigationUniqueId: number, callback?: Callback<observer.NavDestinationInfo>): void;
}

/**
 * Provides content area information of the **Swiper** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export interface SwiperContentInfo {

  /**
   * ID of the **Swiper** component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  id: string;

  /**
   * Unique ID of the **Swiper** component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  uniqueId: number;

  /**
   * Information about the currently visible child components within the **Swiper** container.
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
 * Provides information about **Swiper** child components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export interface SwiperItemInfo {

  /**
   * Unique ID of the **Swiper** child component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  uniqueId: number;

  /**
   * Index of the child component in the **Swiper** container.
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
 * Provides API for obtaining the coordinates and size of the drawing area of a component.
 *
 * > **NOTE**
 * >
 * > - The initial APIs of this class are supported since API version 10.
 * >
 * > - In the following API examples, you must first use [getComponentUtils()]{@link UIContext#getComponentUtils} in
 * > **UIContext** to obtain a **ComponentUtils** instance, and then call the APIs using the obtained instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export class ComponentUtils {

  /**
   * Obtains the size, position, translation, scaling, rotation, and affine matrix information of the specified
   * component.
   *
   * > **NOTE**
   * >
   * > This API should be called after the target component's layout is complete to obtain its size information. It is
   * > recommended that you use this API within [onAppear]{@link CommonMethod#onAppear}.
   *
   * @param { string } id - Unique component ID.
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
 * Provides the capability to draw overlays.
 * 
 * > **NOTE**
 * >
 * > - The initial APIs of this class are supported since API version 12.
 * >
 * > - In the following API examples, you must first use [getOverlayManager()]{@link UIContext#getOverlayManager} in 
 * > **UIContext** to obtain an **OverlayManager** instance, and then call the APIs using the obtained instance.
 * >
 * > - The nodes on **OverlayManager** are above the page level, but below such components as created through 
 * > **Dialog**, **Popup**, **Menu**, **BindSheet**, **BindContentCover**, and **Toast**.
 * >
 * > - The drawing method inside and outside the safe area of nodes on **OverlayManager** is consistent with that of the
 * > page, and the keyboard avoidance method is also the same as that of the page.
 * >
 * > - For properties related to **OverlayManager**, you are advised to use AppStorage for global storage across the 
 * > application to prevent changes in property values when switching pages, which could lead to service errors.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export class OverlayManager {
  /**
   * Adds a specified **ComponentContent** node to the **OverlayManager**.
   *
   * @param { ComponentContent } content - 	Content to add to the target node on the **OverlayManager**.<br>
   *      **NOTE**<br> 
   *      By default, the new node is centered on the page and stacked according to its stacking level.
   * @param { number } [ index ] - Stacking level of the new node on the **OverlayManager**.<br>
   *      **NOTE**<br> 
   *      If the value is greater than or equal to 0, a larger value means a higher layer for the **ComponentContent** node. 
   *      If multiple **ComponentContent** nodes have the same index, the later-added ones appear above earlier ones.<br> 
   *      If the value is less than 0, **null**, or **undefined**, the **ComponentContent** node is added at the highest level by default.<br>
   *      If the same **ComponentContent** node is added multiple times, only the last added one is retained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  addComponentContent(content: ComponentContent, index?: number): void;

  /**
   * Creates an overlay node with the specified display order.
   *
   * This API allows you to define the stacking order of the nodes when they are created.
   *
   * @param { ComponentContent } content - Content to add to the target node on the **OverlayManager**.
   *    <br>**NOTE**<br> 
   *    By default, the new node is centered on the page and stacked according to its stacking level.
   * @param { LevelOrder } [ levelOrder ] - Display order of the new floating layer node.<br>
   *    **NOTE**<br>
   *    - Default value: **LevelOrder.clamp(0)**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  addComponentContentWithOrder(content: ComponentContent, levelOrder?: LevelOrder): void;

  /**
   * Removes a specified node from the **OverlayManager**.
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
   * Shows a specified **ComponentContent** node on the **OverlayManager**.
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
   * Hides a specified **ComponentContent** node on the **OverlayManager**.
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
   * Shows all **ComponentContent** nodes on the **OverlayManager**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  showAllComponentContents(): void;

  /**
   * Hides all **ComponentContent** nodes on the **OverlayManager**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  hideAllComponentContents(): void;

  /**
   * Opens an overlay with the specified ComponentContent and options.
   *
   * @param { ComponentContent } content - Content to add to the new node on the OverlayManager.
   *     <p><strong>NOTE</strong>:
   *     <br>By default, the new node is centered on the page and stacked according to its stacking level.
   *     </p>
   * @param { OrderOverlayOptions } [ options ] - Options for the overlay.
   * @returns { Promise<void> } the promise returned by the function.
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
 * Provides the method for magnifier capabilities.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export class Magnifier {
  /**
   * Bind magnifier to a component.
   *
   * @param { string } id - component id.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  bind(id: string): void;

  /**
   * Set the position of the magnified content.
   *
   * @param { number } x - the x position of the magnified content relative to the component.
   *     The unit of x is vp.
   * @param { number } y - the y position of the magnified content relative to the component.
   *     The unit of y is vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  show(x: number, y: number): void;

  /**
   * Unbind the magnifier from its associated component.
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
   * When size and position of the bar changed, callback will be called.
   *
   * @param { Callback<Frame> } callback - Callback that param contains the Frame.
   *     The parameters of the callback function cannot be undefined or null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onBarRectChange(callback: Callback<Frame>): void;
}

/**
 * Defines the information provided when a specific gesture callback is triggered.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export interface GestureTriggerInfo {

  /**
   * Gesture event object.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  event: GestureEvent;

  /**
   * Gesture recognizer object. Detailed gesture information can be obtained from this object. However, avoid retaining
   * this object locally as it may become invalid after the node is released.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  current: GestureRecognizer;

  /**
   * Phase of the gesture action callback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  currentPhase: GestureActionPhase;

  /**
   * Node that triggers the gesture. The default value is **null**, indicating that no specific node triggers the
   * gesture.
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
 * Specifies the gesture callback phases to listen for (passing an empty array will be ineffective). Notifications are
 * sent only when the gesture triggers the specified phases.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export interface GestureObserverConfigs {

  /**
   * Gesture event object.
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
 * Provides frame rate configuration APIs for the **Swiper** component.
 *
 * > **NOTE**
 *
 * > - The initial APIs of this class are supported since API version 12.
 * >
 * > - **SwiperDynamicSyncScene** inherits from [DynamicSyncScene]{@link @ohos.arkui.UIContext} and represents the
 * > dynamic sync scene of the **Swiper** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
export class SwiperDynamicSyncScene extends DynamicSyncScene {

  /**
   * Dynamic sync scene of the **Swiper** component.
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
 * Provides APIs for initiating drag actions. When receiving a gesture event, such as a touch or long-press event, an
 * application can initiate a drag action and carry drag information therein.
 *
 * > **NOTE**
 * >
 * > In the following API examples, you must first use [getDragController()]{@link UIContext#getDragController} in
 * > **UIContext** to obtain a **DragController** instance, and then call the APIs using the obtained instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export class DragController {

  /**
   * Initiates a drag action, with the object to be dragged and the drag information passed in. This API uses a callback
   * to return the drag event result.
   *
   * @param { CustomBuilder | DragItemInfo } custom - Object to be dragged.<br> **NOTE**<br>The global builder is not
   *     supported. If the [Image]{@link image} component is used in the builder, enable synchronous loading, that is,
   *     set the [syncLoad]{@link ImageAttribute#syncLoad} attribute of the component to **true**. The builder is used
   *     only to generate the image displayed during the current dragging. If the root component of the builder has zero
   *     width or height, it will cause failure in drag image generation, which in turn breaks the entire drag
   *     operation. Changes to the builder, if any, apply to the next dragging, but not to the current dragging.
   * @param { dragController.DragInfo } dragInfo - Drag information.
   * @param { AsyncCallback<{ event: DragEvent, extraParams: string }> } callback - Callback used to return the result.<br>
   *     - **event**: drag event information that includes only the drag result.<br>- **extraParams**: extra
   *     information about the drag event. [since 11 - 11]
   * @param { AsyncCallback<dragController.DragEventParam> } callback - Callback used to return the result.<br>-
   *     **event**: drag event information that includes only the drag result.<br>- **extraParams**: extra information
   *     about the drag event. [since 12]
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
   * Initiates a drag action, with the object to be dragged and the drag information passed in. This API uses a promise
   * to return the drag event result.
   *
   * @param { CustomBuilder | DragItemInfo } custom - Object to be dragged.
   * @param { dragController.DragInfo } dragInfo - Drag information.
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
   * Creates a drag action object for initiating drag and drop operations. You need to explicitly specify one or more
   * drag previews, the drag data, and the drag handle point. If a drag operation initiated by an existing drag action
   * object is not completed, no new object can be created, and calling the API will throw an exception. After the
   * lifecycle of the drag action object ends, the callback functions registered on this object become invalid.
   * Therefore, it is necessary to hold this object within a longer scope and replace the old value with a new object
   * returned by **createDragAction** before each drag initiation.
   *
   * > **NOTE**
   * >
   * > For optimal drag and drop performance, limit the number of drag previews.
   *
   * @param { Array<CustomBuilder | DragItemInfo> } customArray - Object to be dragged.
   * @param { dragController.DragInfo } dragInfo - Drag information.
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
   * Obtains the **DragPreview** object, which represents the preview displayed during a drag operation.
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
   * Sets whether the **onDragLeave** callback of the parent component is triggered when an item is dragged from the
   * parent to the child component.
   *
   * @param { boolean } enable - Whether the **onDragLeave** callback of the parent component is triggered when an item
   *     is dragged from the parent to the child component. The value **true** means the **onDragLeave** callback of the
   *     parent component is triggered, and **false** means the opposite.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setDragEventStrictReportingEnabled(enable: boolean): void;

  /**
   * Controls whether the application can initiate a drag operation.
   *
   * @param { dragController.DragStartRequestStatus } requestStatus - Whether the application can initiate a drag
   *     operation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  notifyDragStartRequest(requestStatus: dragController.DragStartRequestStatus): void;

  /**
   * Cancels the data loading initiated by the [startDataLoading]{@link DragEvent.startDataLoading}
   * API. This API can be called only after the drag is released.
   *
   * @param { string } key - Identifier for the drag data. It is used to distinguish between different drag operations.
   *     The key can be obtained through the **startDataLoading** API.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 190004 - Operation failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  cancelDataLoading(key: string): void;

  /**
   * Interrupt the pending follow-hand morph drop animation and trigger the finish sequence immediately.
   *
   * @returns { boolean } Interruption result.<br>Returns **true** if the interruption is successful, and **false**
   *     if there is no pending follow-hand morph drop animation to interrupt.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interruptFollowHandMorphDropAnimation(): boolean;

  /**
   * Specifies whether to enable the display of a disallowed badge when dragged content is incompatible with a component
   * 's configured [allowDrop]{@link CommonMethod#allowDrop} types. When a component can accept or process dragged data
   * or returns **DragBehavior.COPY** to indicate copy mode processing, the drag preview shows a plus icon with data
   * count badge. When the component returns **DragBehavior.MOVE** to indicate cut mode processing, only the data count
   * badge appears. When this feature is enabled, the system automatically displays a disallowed badge during drag
   * operations if the dragged data types are incompatible with the target component's allowed drop types. This API
   * currently does not support [UIExtension]{@link @ohos.arkui.uiExtension:uiExtension}.
   *
   * @param { boolean } enabled - Whether to enable the display of a disallowed badge when dragged content is
   *     incompatible with a component's configured [allowDrop]{@link CommonMethod#allowDrop} types. The value **true**
   *     means to enable the display of a disallowed badge, and **false** means the opposite. The default value is
   *     **false**.
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
   * Get layout info of the styled string.
   *
   * @param { StyledString } styledString - The styled string value.
   * @param { TextLayoutOptions } [options] - The layout options.
   * @returns { Array<Paragraph> } paragraph result
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 20 dynamic
   */
  getParagraphs(styledString: StyledString, options?: TextLayoutOptions): Array<Paragraph>;
}

/**
 * Provides capabilities to control focus, including features such as clearing, moving, and activating focus.
 *
 * > **NOTE**
 * >
 * > In the following API examples, you must first use [getFocusController()]{@link UIContext#getFocusController} in
 * > **UIContext** to obtain a **FocusController** instance, and then call the APIs using the obtained instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 */
export class FocusController {

  /**
   * Clears the focus and forcibly moves the focus to the root container node of the page, causing other nodes in the
   * focus chain to lose focus.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  clearFocus(): void;

  /**
   * Transfers focus to a component node by the component ID, which is effective immediately.
   *
   * @param { string } key - [Component ID]{@link common} of the target node.
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
   * Sets the [focus activation state](docroot://ui/arkts-common-events-focus-event.md) of this page.
   *
   * @param { boolean } isActive - Whether to enter or exit the focus activation state.<br>The value **true** means to
   *     enter the focus activation state, and **false** means to exit the focus activation state.
   * @param { boolean } [autoInactive] - Logic for exiting the focus activation state.<br>The value **true** means the
   *     focus activation state will be exited automatically when touch or mouse events are triggered, and **false**
   *     means the state is controlled solely by API calls.<br>Default value: **true**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  activate(isActive: boolean, autoInactive?: boolean): void;

  /**
   * Obtains the focus activation state of the UI instance.
   *
   * For details about the focus activation state, see
   * [Basic Concepts](docroot://ui/arkts-common-events-focus-event.md#basic-concepts).
   *
   * @returns { boolean } Focus activation state of the UI instance. The value **true** means that the instance has
   *     entered the focus activation state, and **false** means that the instance has exited the focus activation
   *     state.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  isActive(): boolean;

  /**
   * Sets whether the new page automatically obtains focus during page switching.
   *
   * @param { boolean } isAutoFocusTransfer - Whether the new page automatically obtains focus during page switching
   *     using navigation components or APIs, such as [Router]{@link @ohos.router:router},
   *     [Navigation]{@link navigation}, [Menu]{@link menu}, [Dialog]{@link @ohos.arkui.advanced.Dialog}, and
   *     [Popup]{@link @ohos.arkui.advanced.Popup}. The value **true** means the new page automatically obtains focus,
   *     and **false** means the opposite. Default value: **true**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  setAutoFocusTransfer(isAutoFocusTransfer: boolean): void;

  /**
   * Sets the mode for processing key events.
   *
   * @param { KeyProcessingMode } mode - Mode for processing key events.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  setKeyProcessingMode(mode: KeyProcessingMode): void;
}

/**
 * Defines the pointer style.
 *
 * @syscap SystemCapability.MultimodalInput.Input.Pointer
 * @atomicservice
 * @since 12 dynamic
 */
export type PointerStyle = pointer.PointerStyle;

/**
 * Provides the capability to set cursor styles.
 *
 * > **NOTE**
 * >
 * > - The initial APIs of this class are supported since API version 12.
 * >
 * > - In the following API examples, you must first use [getCursorController()]{@link UIContext#getCursorController} in
 * > **UIContext** to obtain a **CursorController** instance, and then call the APIs using the obtained instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export class CursorController {

  /**
   * Restores the default cursor style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  restoreDefault(): void;

  /**
   * Sets the cursor style.
   *
   * > **NOTE**
   * >
   * > This API does not take effect immediately. The cursor style will be updated in the next rendering frame.
   *
   * @param { PointerStyle } value - Pointer style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setCursor(value: PointerStyle): void;

  /**
   * Sets the custom cursor style.
   *
   * > **NOTE**
   * >
   * > This API does not take effect immediately. The cursor style will be updated in the next rendering frame.
   *
   * @param { image.PixelMap } value - Pixel map of the custom mouse cursor style.
   * @param { int } [focusX] - X coordinate of the custom cursor's hotspot. The hotspot refers to the actual location
   *     where the click occurs.<br>Default value: **0**<br>Unit: px<br>Value range: [0, +∞)
   * @param { int } [focusY] - Y coordinate of the custom cursor's hotspot.<br>Default value: **0**<br>Unit: px<br>Value
   *     range: [0, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  setCustomCursor(value: image.PixelMap, focusX?: int, focusY?: int): void;
}

/**
 * Provides the capability to control the closing of context menus.
 * 
 * > **NOTE**
 * >
 * > - The initial APIs of this class are supported since API version 12.
 * >
 * > - In the following API examples, you must first use 
 * > [getContextMenuController()]{@link UIContext#getContextMenuController} in **UIContext** to obtain a 
 * > **ContextMenuController** instance, and then call the APIs using the obtained instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare class ContextMenuController {
  /**
   * Closes this context menu.
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
 * Implements the API for setting the task that needs to be executed during the next frame rendering.
 *
 * > **NOTE**
 * >
 * > - The following APIs must be used in conjunction with [postFrameCallback]{@link UIContext#postFrameCallback} and
 * > [postDelayedFrameCallback]{@link UIContext#postDelayedFrameCallback} from [UIContext]{@link @ohos.arkui.UIContext}.
 * > Extend this class and override either the [onFrame]{@link FrameCallback#onFrame} or
 * > [onIdle]{@link FrameCallback#onIdle} method to implement specific service logic.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export abstract class FrameCallback {
  /**
   * Called when the next frame is rendered.
   *
   * @param { number } frameTimeInNano - Time when the rendering of the next frame starts, in nanoseconds.<br>Value
   *     range: [0, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onFrame(frameTimeInNano: number): void;

  /**
   * Called after the rendering of the subsequent frame has finished and there is more than 1 millisecond left before
   * the next VSync signal. If the time left is not more than 1 millisecond, the execution of this API will be deferred
   * to a later frame.
   *
   * @param { number } timeLeftInNano - Remaining idle time for the current frame, in nanoseconds.<br>Value range:
   *     [0, +∞)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onIdle(timeLeftInNano: number): void;
}

/**
 * Defines the context of the current ability.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export type Context = common.Context;

/**
 * Provides APIs for obtaining component snapshots, including snapshots of components that have been loaded and
 * snapshots of components that have not been loaded yet.
 *
 * > **NOTE**
 * >
 * > - The initial APIs of this class are supported since API version 12.
 * >
 * > - In the following API examples, you must first use [getComponentSnapshot()]{@link UIContext#getComponentSnapshot}
 * > in **UIContext** to obtain a **ComponentSnapshot** instance, and then call the APIs using the obtained instance.
 * >
 * > - Transformation properties such as scaling, translation, and rotation only apply to the child components of the
 * > target component. Applying these transformation properties directly to the target component itself has no effect;
 * > the snapshot will still display the component as it appears before any transformations are applied.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 */
export class ComponentSnapshot {

  /**
   * Obtains the snapshot of a component that has been loaded based on the provided [component ID]{@link common}. This
   * API uses an asynchronous callback to return the result.
   *
   * > **NOTE**
   * >
   * > The snapshot captures content rendered in the last frame. If this API is called when the component triggers an
   * > update, the re-rendered content will not be included in the obtained snapshot.
   *
   * @param { string } id - [ID]{@link common} of the target component.<br>Note: Off-screen or cached components not
   *     mounted in the component tree are not supported.
   * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return the result. If the snapshot capture is
   *     successful, **err** is **undefined**, and **data** contains the resulting
   *     [PixelMap]{@link @ohos.multimedia.image:image.PixelMap}. Otherwise, **err** provides detailed error
   *     information.
   * @param { componentSnapshot.SnapshotOptions } [options] - Custom settings of the snapshot.
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
   * Obtains the snapshot of a component that has been loaded based on the provided [component ID]{@link common}. This
   * API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > The snapshot captures content rendered in the last frame. If this API is called when the component triggers an
   * > update, the re-rendered content will not be included in the obtained snapshot.
   *
   * @param { string } id - [ID]{@link common} of the target component.<br>Note: Off-screen or cached components not
   *     mounted in the component tree are not supported.
   * @param { componentSnapshot.SnapshotOptions } [options] - Custom settings of the snapshot.
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
   * Captures a snapshot of an offscreen-rendered component created from a [CustomBuilder]{@link common:CustomBuilder}.
   * This API uses an asynchronous callback to return the result.
   *
   * > **NOTE**
   * >
   * > - Due to the need to wait for the component to be built and rendered, there is a delay of not more than 500 ms in
   * > the callback for off-screen snapshot capturing. Therefore, this API is not recommended for performance-sensitive
   * > scenarios.
   * >
   * > - If a component is on a time-consuming task, for example, an [Image]{@link image} or [Web]{@link web} component
   * > that is loading online images, its loading may be still in progress when this API is called. In this case, the
   * > output snapshot does not represent the component in the way it looks when the loading is successfully completed.
   *
   * @param { CustomBuilder } builder - Builder of the custom component.<br>Note: The global builder is not supported.<
   *     br>If the root component of the builder has a width or height of zero, the snapshot operation will fail with
   *     error code 100001.
   * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return the result. If the snapshot capture is
   *     successful, **err** is **undefined**, and **data** contains the resulting
   *     [PixelMap]{@link @ohos.multimedia.image:image.PixelMap}. Otherwise, **err** provides detailed error
   *     information. The coordinates and size of the offscreen component's drawing area can be obtained through the
   *     callback.
   * @param { number } [delay] - Delay time for triggering the screenshot command. When the layout includes an image
   *     component, it is necessary to set a delay time to allow the system to decode the image resources. The decoding
   *     time is subject to the resource size. In light of this, whenever possible, use pixel map resources that do not
   *     require decoding.<br> When PixelMap resources are used or when [syncLoad]{@link ImageAttribute#syncLoad} is set
   *     to **true** for the **Image** component, you can set **delay** to **0** to forcibly capture snapshots without
   *     waiting. This delay time does not refer to the time from the API call to the return: As the system needs to
   *     temporarily construct the passed-in **builder** offscreen, the return time is usually longer than this delay.<
   *     br>Note: In the **builder** passed in, state variables should not be used to control the construction of child
   *     components. If they are used, they should not change when the API is called, so as to avoid unexpected snapshot
   *     results.<br> Default value: **300**<br> Unit: ms<br> Value range:
   *     [0, +∞). If the value is less than 0, the default value is used.
   * @param { boolean } [checkImageStatus] - Whether to verify the image decoding status before taking a snapshot. If
   *     the value is **true**, the system checks whether all **Image** components have been decoded before taking the
   *     snapshot. If the check is not completed, the system aborts the snapshot and returns an exception.<br>Default
   *     value: **false**.
   * @param { componentSnapshot.SnapshotOptions } [options] - Custom settings of the snapshot.
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
   * Captures a snapshot of an offscreen-rendered component created from a [CustomBuilder]{@link common:CustomBuilder}.
   * This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > - Due to the need to wait for the component to be built and rendered, there is a delay of not more than 500 ms in
   * > the callback for off-screen snapshot capturing. Therefore, this API is not recommended for performance-sensitive
   * > scenarios.
   * >
   * > - If a component is on a time-consuming task, for example, an [Image]{@link image} or [Web]{@link web} component
   * > that is loading online images, its loading may be still in progress when this API is called. In this case, the
   * > output snapshot does not represent the component in the way it looks when the loading is successfully completed.
   *
   * @param { CustomBuilder } builder - Builder of the custom component.<br>Note: The global builder is not supported.<
   *     br>If the root component of the builder has a width or height of zero, the snapshot operation will fail with
   *     error code 100001.
   * @param { number } [delay] - Delay time for triggering the screenshot command. When the layout includes an image
   *     component, it is necessary to set a delay time to allow the system to decode the image resources. The decoding
   *     time is subject to the resource size. In light of this, whenever possible, use pixel map resources that do not
   *     require decoding.<br> When PixelMap resources are used or when [syncLoad]{@link ImageAttribute#syncLoad} is set
   *     to **true** for the **Image** component, you can set **delay** to **0** to forcibly capture snapshots without
   *     waiting. This delay time does not refer to the time from the API call to the return: As the system needs to
   *     temporarily construct the passed-in **builder** offscreen, the return time is usually longer than this delay.<
   *     br>Note: In the **builder** passed in, state variables should not be used to control the construction of child
   *     components. If they are used, they should not change when the API is called, so as to avoid unexpected snapshot
   *     results.<br> Default value: **300**<br> Unit: ms<br> Value range:
   *     [0, +∞). If the value is less than 0, the default value is used.
   * @param { boolean } [checkImageStatus] - Whether to verify the image decoding status before taking a snapshot. If
   *     the value is **true**, the system checks whether all **Image** components have been decoded before taking the
   *     snapshot. If the check is not completed, the system aborts the snapshot and returns an exception.<br>Default
   *     value: **false**.
   * @param { componentSnapshot.SnapshotOptions } [options] - Custom settings of the snapshot.
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
   * Obtains the snapshot of a component that has been loaded based on the provided [component ID]{@link common}. This
   * API synchronously returns a [PixelMap]{@link @ohos.multimedia.image:image.PixelMap} after completing the capture.
   * Note that this API blocks the main thread and has a 3-second timeout. If the operation exceeds this limit, it
   * throws an exception. Use with caution in performance-critical scenarios.
   *
   * > **NOTE**
   * >
   * > The snapshot captures content rendered in the last frame. If this API is called when the component triggers an
   * > update, the re-rendered content will not be included in the obtained snapshot.
   *
   * @param { string } id - [ID]{@link common} of the target component.<br>Note: Off-screen or cached components not
   *     mounted in the component tree are not supported.
   * @param { componentSnapshot.SnapshotOptions } [options] - Custom settings of the snapshot.
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
   * Obtains the snapshot of a component that has been loaded based on the provided **uniqueId**. This API uses a
   * promise to return the result.
   *
   * > **NOTE**
   * >
   * > The snapshot captures content rendered in the last frame. If this API is called when the component triggers an
   * > update, the re-rendered content will not be included in the obtained snapshot.
   *
   * @param { number } uniqueId - Unique ID of the target component. The unique ID of the **FrameNode** can be obtained
   *     via the [getUniqueId]{@link FrameNode:FrameNode#getUniqueId} API.<br>Note: Off-screen or cached components not
   *     mounted in the component tree are not supported.
   * @param { componentSnapshot.SnapshotOptions } [options] - Custom settings of the snapshot.
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
   * Obtains the snapshot of a component that has been loaded based on the provided **uniqueId**. This API synchronously
   * waits for the snapshot to complete and returns a [PixelMap]{@link @ohos.multimedia.image:image.PixelMap} object.
   *
   * > **NOTE**
   * >
   * > The snapshot captures content rendered in the last frame. If this API is called when the component triggers an
   * > update, the re-rendered content will not be included in the obtained snapshot.
   *
   * @param { number } uniqueId - Unique ID of the target component. The unique ID of the **FrameNode** can be obtained
   *     via the [getUniqueId]{@link FrameNode:FrameNode#getUniqueId} API.<br>Note: Off-screen or cached components not
   *     mounted in the component tree are not supported.
   * @param { componentSnapshot.SnapshotOptions } [options] - Custom settings of the snapshot.
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
   * Captures a snapshot of the provided component content. This API uses a promise to return the result.
   *
   * @param { ComponentContent<T> } content - Component content to be captured. This is the content currently displayed
   *     in the **UIContext**.
   * @param { number } [delay] - Delay time for triggering the screenshot command. When the layout includes an image
   *     component, it is necessary to set a delay time to allow the system to decode the image resources. The decoding
   *     time is subject to the resource size. In light of this, whenever possible, use pixel map resources that do not
   *     require decoding.<br> When PixelMap resources are used or when [syncLoad]{@link ImageAttribute#syncLoad} is set
   *     to **true** for the **Image** component, you can set **delay** to **0** to forcibly capture snapshots without
   *     waiting. This delay time does not refer to the time from the API call to the return: As the system needs to
   *     temporarily construct the passed-in **builder** offscreen, the return time is usually longer than this delay.<
   *     br>Note: In the **builder** passed in, state variables should not be used to control the construction of child
   *     components. If they are used, they should not change when the API is called, so as to avoid unexpected snapshot
   *     results.<br> Value range:
   *     [0, +∞). If the value is less than 0, the default value is used.<br>Default value: **300**<br> Unit: ms
   * @param { boolean } [checkImageStatus] - Whether to verify the image decoding status before taking a snapshot. If
   *     the value is **true**, the system checks whether all **Image** components have been decoded before taking the
   *     snapshot. If the check is not completed, the system aborts the snapshot and returns an exception.<br>Default
   *     value: **false**.
   * @param { componentSnapshot.SnapshotOptions } [options] - Custom settings of the snapshot. You can specify the scale
   *     ratio for the pixelmap during rendering and whether to force the system to complete all rendering commands
   *     before taking the snapshot.
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
   * Captures a snapshot of the area between two specified components. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > The components corresponding to **start** and **end** must belong to the same component tree, and the **start**
   * > component must be an ancestor of the **end** component.
   *
   * @param { NodeIdentity } start - ID of the component marking the start of the capture range.
   * @param { NodeIdentity } end - ID of the component marking the end of the capture range.
   * @param { boolean } isStartRect - Whether to use the bounding rectangle of the **start** component to determine the
   *     capture range.<br>**true**: Use the bounding rectangle of the **start** component. **false**: Use the bounding
   *     rectangle of the **end** component.<br>Default value: **true**.
   * @param { componentSnapshot.SnapshotOptions } [options] - Custom snapshot configuration options. The **region**
   *     parameter is not supported.
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
   * Obtains the size limit of a component screenshot.
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
 * Base class for smart gesture handling. When dynamically customizing smart gesture behavior through the
 * [registerMonitor]{@link SmartGestureController#registerMonitor} API, the callback parameter type is an instance of a
 * specific subclass type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export abstract class BaseGestureHandlingProposal {

  /**
   * Final action of the smart gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  action: SmartGestureAction;

  /**
   * Underlying operation intention of the smart gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  operateIntention: OperateIntention;
}

/**
 * Base class for smart gesture handling with a target node.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export abstract class TargetedGestureProposal extends BaseGestureHandlingProposal {

  /**
   * Target node that handles the current smart gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  node: FrameNode;
}

/**
 * Smart gesture click action handling. When dynamically customizing smart gesture behavior through the
 * [registerMonitor]{@link SmartGestureController#registerMonitor} API, setting the return value
 * [GestureHandlingResolution]{@link GestureHandlingResolution}'s **selectedProposal** to an object of this type
 * triggers a click operation on the target component.
 *
 * > **NOTE**
 * >
 * > - This action handling follows the "select first, then click" processing semantics.
 * >
 * > - If the target node is not yet selected, this handling first establishes the selected state without immediately
 * > triggering the click.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class ClickActionProposal extends TargetedGestureProposal {

  /**
   * Constructor for the smart gesture click action handling.
   *
   * @param { FrameNode } node - Target node that responds to the click action.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(node: FrameNode);
}

/**
 * Smart gesture selection action handling. When dynamically customizing smart gesture behavior through the
 * [registerMonitor]{@link SmartGestureController#registerMonitor} API, setting the return value
 * [GestureHandlingResolution]{@link GestureHandlingResolution}'s **selectedProposal** to an object of this type causes
 * the target component to be selected.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class SelectActionProposal extends TargetedGestureProposal {

  /**
   * Constructor for the smart gesture selection action handling.
   *
   * @param { FrameNode } node - Target node that responds to the selection action.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(node: FrameNode);
}

/**
 * Smart gesture no-op action handling. When dynamically customizing smart gesture behavior through the
 * [registerMonitor]{@link SmartGestureController#registerMonitor} API, setting the return value
 * [GestureHandlingResolution]{@link GestureHandlingResolution}'s **selectedProposal** to an object of this type
 * triggers no action.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class NoneActionProposal extends BaseGestureHandlingProposal {

  /**
   * Constructor for the smart gesture no-op action handling.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor();
}

/**
 * Smart gesture back press action handling. When dynamically customizing smart gesture behavior through the
 * [registerMonitor]{@link SmartGestureController#registerMonitor} API, setting the return value
 * [GestureHandlingResolution]{@link GestureHandlingResolution}'s **selectedProposal** to an object of this type
 * navigates back to the previous page.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class BackPressActionProposal extends BaseGestureHandlingProposal {

  /**
   * Constructor for the smart gesture back press action handling.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor();
}

/**
 * Smart gesture page switch action handling. The default direction is forward page switching, including right and down.
 * When dynamically customizing smart gesture behavior through the
 * [registerMonitor]{@link SmartGestureController#registerMonitor} API, setting the return value
 * [GestureHandlingResolution]{@link GestureHandlingResolution}'s **selectedProposal** to an object of this type
 * triggers a page switching operation on the target component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class PageSwitchActionProposal extends TargetedGestureProposal {

  /**
   * Constructor for the smart gesture page switch action handling.
   *
   * @param { FrameNode } node - Target node that responds to the page switch action.
   * @param { int } pageCount - Number of pages to switch.<br/>Value range:
   *     [0, +∞). Values less than 0 are treated as 0.<br/>Unit: pages.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(node: FrameNode, pageCount: int);

  /**
   * Number of pages to switch in the smart gesture.
   *
   * Value range: [0, +∞). Values less than 0 are treated as 0.
   *
   * Unit: pages.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  pageCount: int;
}

/**
 * Smart gesture scroll action handling. The default direction is forward scrolling, including right and down. When
 * dynamically customizing smart gesture behavior through the
 * [registerMonitor]{@link SmartGestureController#registerMonitor} API, setting the return value
 * [GestureHandlingResolution]{@link GestureHandlingResolution}'s **selectedProposal** to an object of this type
 * triggers a scroll operation on the target component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class ScrollActionProposal extends TargetedGestureProposal {

  /**
   * Constructor for the smart gesture scroll action handling.
   *
   * @param { FrameNode } node - Target node that responds to the scroll action.
   * @param { double } distance - Scroll distance.<br/>Value range:
   *     [0, +∞). Values less than 0 are treated as 0.<br/>Unit: vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(node: FrameNode, distance: double);

  /**
   * Scroll distance of the smart gesture.
   *
   * Value range: [0, +∞). Values less than 0 are treated as 0.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  distance?: double;
}

/**
 * Class for declaring the result of smart gesture handling.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class GestureHandlingResolution {

  /**
   * Constructor for the smart gesture handling result.
   *
   * @param { boolean } isConsumed - Whether to consume the current smart gesture.<br/>**true**: The smart gesture is
   *     consumed. If [selectedProposal]{@link GestureHandlingResolution#selectedProposal}
   *     is not set, the system default action handling is used. If **selectedProposal** is set, the custom action
   *     handling is used.<br/>**false**: The smart gesture is not consumed, and the system treats it as unhandled.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(isConsumed: boolean);

  /**
   * Whether to consume the current smart gesture.
   *
   * **true**: The smart gesture is consumed. If **selectedProposal** is not set, the system default action handling is
   * used. If **selectedProposal** is set, the custom action handling is used.
   *
   * **false**: The smart gesture is not consumed, and the system treats it as unhandled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  isConsumed: boolean;

  /**
   * The smart gesture handling behavior specified by the user.
   *
   * When **isConsumed** is **true**: If **selectedProposal** is not set, the system default action handling is used. If
   * **selectedProposal** is set, the custom action handling is used.
   *
   * When **isConsumed** is **false**, the **selectedProposal** setting does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  selectedProposal?: BaseGestureHandlingProposal;
}

/**
 * Provides the capability to enable smart gestures, monitor them, control the selection state, and dynamically
 * determine smart gesture behavior.
 *
 * > **NOTE**
 * >
 * > The following APIs must be called using a **SmartGestureController** instance obtained via
 * > [getSmartGestureController()]{@link UIContext#getSmartGestureController} in **UIContext**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class SmartGestureController {

  /**
   * Sets whether to enable the tap and slide operations of smart gestures.
   *
   * > **NOTE**
   * >
   * > - This API affects only the tap and slide smart gestures, not the wrist-turn gesture.
   * >
   * > - When disabled, the [smartGestureShortcut]{@link CommonMethod#smartGestureShortcut}
   * > attribute on the component side is retained, but the tap and slide smart gestures will not be responded to.
   *
   * @param { boolean } enabled - Whether to enable the tap and slide smart gesture handling. The value **true** means
   *     to enable it, and **false** means to disable it.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  enableSmartTapAndSlideGestures(enabled: boolean): void;

  /**
   * Registers a smart gesture monitoring callback. Before the system processes the current smart gesture, the
   * application can receive the default action handling of the current gesture and apply custom intervention. The
   * callback is used for asynchronous callbacks.
   *
   * > **NOTE**
   * >
   * > - This API enables the application to receive the system's handling intent for the current smart gesture event
   * > before it is processed by the system and apply custom intervention.
   * >
   * > - Users can customize the behavior of the current smart gesture through this callback.
   * >
   * > - Multiple monitoring callbacks can be registered. They are triggered in the reverse order of registration (the
   * > last registered one is executed first). When a monitoring callback consumes the smart gesture event, that is,
   * > when the return value [GestureHandlingResolution]{@link GestureHandlingResolution}.isConsumed is **true**,
   * > subsequent monitoring callbacks will not be executed.
   * >
   * > - If the same callback is registered repeatedly, only the first registration takes effect; duplicate
   * > registrations are ignored.
   * >
   * > - The return value of the callback must be a valid [GestureHandlingResolution]{@link GestureHandlingResolution}
   * > instance; otherwise, the modification will not take effect.
   *
   * @param { Callback<BaseGestureHandlingProposal, GestureHandlingResolution> } monitorCallback - Smart gesture
   *     monitoring callback. The callback parameter is the default action handling provided by the system, and the
   *     return value is used to declare whether to consume the current smart gesture and whether to replace the default
   *     action handling.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  registerMonitor(monitorCallback: Callback<BaseGestureHandlingProposal, GestureHandlingResolution>): void;

  /**
   * Unregisters a smart gesture monitoring callback.
   *
   * @param { Callback<BaseGestureHandlingProposal, GestureHandlingResolution> } monitorCallback - The smart gesture
   *     monitoring callback to unregister.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  unregisterMonitor(monitorCallback: Callback<BaseGestureHandlingProposal, GestureHandlingResolution>): void;

  /**
   * Clears all monitoring callbacks registered for the current **UIContext**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  clearMonitors(): void;

  /**
   * Requests to set the specified component as the current smart gesture selected node. After successful selection, a
   * selection prompt box is displayed. The style of the selection box varies by device.
   *
   * > **NOTE**
   * >
   * > - The request takes effect only when all the following conditions are met: the target component can respond to
   * > smart gestures, the component is visible on the screen, and the component has an
   * > [onClick]{@link CommonMethod#onClick(event: Callback<ClickEvent>, distanceThreshold: number)} event bound or a
   * > [TapGesture]{@link TapGesture} gesture bound.
   * >
   * > - Whether a component can respond to smart gestures is determined by **enabled** in
   * > [smartGestureShortcut]{@link CommonMethod#smartGestureShortcut}.
   *
   * @param { string } id - Component [id]{@link CommonMethod#id}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  requestSelected(id: string): void;

  /**
   * Clears the currently selected node of smart gestures.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  clearSelected(): void;
}

/**
 * Enumerates resolution strategies for **UIContext** objects.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export const enum ResolveStrategy {
  /**
   * Obtain the UIContext of the current calling scope.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  CALLING_SCOPE = 0,

  /**
   * Obtain the UIContext of the instance that most recently switched to the focused state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  LAST_FOCUS = 1,

  /**
   * Obtain the UIContext of the instance with the largest instance ID.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  MAX_INSTANCE_ID = 2,

  /**
   * Obtain the UIContext of the unique UI instance (when only one UI instance exists).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  UNIQUE = 3,

  /**
   * Obtain the UIContext of the instance that most recently switched to the foreground.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  LAST_FOREGROUND = 4,

  /**
   * Obtain a UIContext with an ambiguous calling scope.
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
 * **ResolvedUIContext** instance object.
 *
 * > **NOTE**
 * >
 * > - You can preview how this component looks on a real device, but not in DevEco Studio Previewer.
 * >
 * > - **ResolvedUIContext** is inherited from [UIContext]{@link @ohos.arkui.UIContext}. Objects of this class contain
 * > the [UIContext]{@link @ohos.arkui.UIContext} instance and its parsing policy.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export class ResolvedUIContext extends UIContext {
  /**
   * Resolving strategy of the UIContext.
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
 * Implements a **UIContext** instance.
 *
 * > **NOTE**
 * >
 * > - You can preview how this component looks on a real device, but not in DevEco Studio Previewer.
 * >
 * > - The following APIs must be called through a corresponding UIContext instance. There are three ways to obtain a
 * > **UIContext** instance: (1) using the
 * > [getUIContext()](docroot://reference/apis-arkui/arkts-apis-window-Window.md#getuicontext10) method from
 * > ohos.window; (2) using the built-in method
 * > [getUIContext()](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-api.md#getuicontext) of a custom
 * > component; (3) using static methods of the UIContext class such as
 * > [getCallingScopeUIContext]{@link UIContext#getCallingScopeUIContext}. In this document, the **UIContext** instance
 * > is represented by **uiContext**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export class UIContext {
  /**
   * Construct a **UIContext** object.
   *
   * > **NOTE**
   * >
   * > A **UIContext** object created using the constructor points to an ambiguous UI context, meaning it is not bound
   * > to any specific UI instance. The unique ID of such a UIContext instance is -1.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  constructor();

  /**
   * Obtains the UIContext of this [calling scope](docroot://ui/arkts-global-interface.md#basic-concepts). This API
   * returns **undefined** if the calling scope is ambiguous.
   *
   * > **NOTE**
   * >
   * > The returned UIContext object may point to a destroyed UI instance, which usually occurs when an asynchronous
   * > task is dispatched from an instance that has already been destroyed. As such, you are advised to verify its
   * > validity via the [isAvailable]{@link UIContext#isAvailable} API.
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
   * Obtains the UIContext of the UI instance that most recently switched to the focused state.
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
   * Obtains the UIContext of the UI instance that most recently switched to the foreground state.
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
   * Obtains all currently valid UIContext instances.
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
   * Obtains a UIContext instance along with its resolution strategy using a predefined priority order.
   *
   * > **NOTE**
   * >
   * > This API resolves and returns a UIContext instance together with the strategy used to determine it,
   * >
   * > based on the following priority rules (in order):
   * >
   * > 1. UIContext in the current calling scope.
   * >
   * > 2. If only one UI instance exists, its UIContext is returned.
   * >
   * > 3. If a UI instance has switched to the focused state, and the most recently focused UI instance has not been
   * > destroyed, the UIContext of that most recently focused instance is returned.
   * >
   * > 4. If a UI instance has switched to the foreground state, and the most recently foreground UI instance has not
   * > been destroyed, the UIContext of that most recently foreground instance is returned.
   * >
   * > 5. If multiple UI instances exist, the UIContext with the largest unique instance ID is returned.
   * >
   * > 6. If none of the above conditions are met, an invalid UIContext instance is returned.
   *
   * @returns { ResolvedUIContext } UIContext instance along with its resolution strategy.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  static resolveUIContext(): ResolvedUIContext;

  /**
   * Checks whether the UI instance corresponding to this **UIContext** object is valid. The **UIContext** object can be
   * obtained using the [getUIContext](docroot://reference/apis-arkui/arkts-apis-window-Window.md#getuicontext10) API. A
   * UI instance is considered valid when the backend UI instance exists. UIContext objects created using
   * **new UIContext()** have no corresponding UI instance. After multiple
   * [loadContent](docroot://reference/apis-arkui/arkts-apis-window-Window.md#loadcontent9) operations, old UI instances
   * become invalid. In multi-window scenarios, when a window is closed, its UI instance becomes invalid. In summary, a
   * UIContext object is invalid when it has no corresponding backend UI instance.
   *
   * @returns { boolean } Whether the UI instance corresponding to the current **UIContext** object is valid. The value
   *     **true** indicates yes, and the value **false** indicates no.
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
   * @returns { UIInspector } object UIInspector.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
/**
   * get object UIInspector.
   * @returns { UIInspector } object UIInspector.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  getUIInspector(): UIInspector;

  /**
   * get the luminance sampler of the specified node. If the node cannot be found, return undefined.
   *
   * @param { TargetInfo } target - ID of target node.
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
   * @param { Array<string> } [filters] - the list of filters used to filter out component tree to be obtained.
   * @returns { string } the specified attributes of the component tree in json string.
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
   * @param { string } id - ID of the specified component tree to be obtained.
   * @param { number } depth - depth of the component tree to be obtained.
   * @param { Array<string> } [filters] - the list of filters used to filter out component tree to be obtained.
   * @returns { string } the specified attributes of the component tree in json string.
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
   * Obtains a PromptAction object.
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
   * Get the Dialog object.
   *
   * @returns { DialogPresenter } Dialog object.
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
   * Obtains the **UIObserver** object.
   *
   * @returns { UIObserver } **UIObserver** object.
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
   * Obtains the Magnifier object.
 *
   * @returns { Magnifier } Magnifier instance obtained.
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
   * Creates an **Animator** object.
   *
   * @param { AnimatorOptions } options - Animator options.
   * @returns { AnimatorResult } Animator result.
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
   * Creates an **AnimatorResult** object for animations. Compared to the previous 
   * [createAnimator]{@link UIContext#createAnimator(options: AnimatorOptions)} API, this API adds support for the 
   * [SimpleAnimatorOptions]{@link @ohos.animator:SimpleAnimatorOptions} type.
   *
   * @param { AnimatorOptions | SimpleAnimatorOptions } options - Animator options.
   * @returns { AnimatorResult } Animator result.
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
   * Adds transition animations for state changes in closure code.
   * 
   * > **NOTE**
   * >
   * > - Avoid using **animateTo** in **aboutToAppear** or **aboutToDisappear**.
   * >
   * > - When **animateTo** is called in 
   * > [aboutToAppear](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttoappear), the 
   * > component's build method is not executed yet, and internal components are not created. This means the animation 
   * > has no initial values to work with and will not function as expected.
   * >
   * > - During execution of 
   * > [aboutToDisappear](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#abouttodisappear), 
   * > the component is being destroyed, so animations should not be used.
   * >
   * > - When a component appears or disappears, animation effects can be added through 
   * > [component transition]{@link common}.
   * >
   * > - For properties that component transitions do not support, refer to 
   * > [Example 2: Enabling Component Disappearance After Animation Completion](docroot://reference/apis-arkui/arkui-ts/ts-explicit-animation.md#example-2-enabling-component-disappearance-after-animation-completion),
   * > which uses **animateTo** to achieve the effect of the component disappearing after the animation finishes.
   * >
   * > - In certain scenarios, using animateTo with 
   * > [state management V2](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v2) may 
   * > produce unexpected results. For details, see 
   * > [Using animateTo Failed in State Management V2](docroot://ui/state-management/arkts-new-local.md#using-animateto-failed-in-state-management-v2).
   * > 
   * >
   * > - When a UIAbility switches from the foreground to the background, any limited iteration animations that are 
   * > currently running will end immediately, thereby triggering the 
   * > [onFinish animation completion callback]{@link AnimateParam}.
   * >
   * > - If transition animations are turned off in Developer options, animations end on the current frame, and the 
   * > **onFinish** callback is executed immediately. Avoid placing timing-dependent functional logic inside this 
   * > callback.
   *
   * @param { AnimateParam } value - Animation settings.
   * @param { function } event - Closure function that displays the animation. The system automatically inserts the
   *     transition animation if the state changes in the closure function.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  animateTo(value: AnimateParam, event: () => void): void;

  /**
   * Shows an alert dialog box.
   *
   * @param { AlertDialogParamWithConfirm | AlertDialogParamWithButtons | AlertDialogParamWithOptions } options - Shows
   * an AlertDialog component in the given settings.
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
   * Set image cache capacity of decoded image count.
   * if not set, the application will not cache any decoded image.
   *
   * @param { number } value - capacity of decoded image count.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  setImageCacheCount(value: number): void;

  /**
   * Set image cache capacity of raw image data size in bytes before decode.
   * if not set, the application will not cache any raw image data.
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
   * Run custom functions inside the UIContext scope.
   *
   * @param { function } callback - The function called through UIContext.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  runScopedTask(callback: () => void): void;

  /**
   * Sets the avoidance mode for the virtual keyboard.
   *
   * >  **NOTE**
   * >
   * >  With **KeyboardAvoidMode.RESIZE**, the page is resized to prevent the virtual keyboard from obstructing the
   * >  view. Regarding components on the page, those whose width and height are set in percentage are resized with the
   * >  page, and those whose width and height are set to specific values are laid out according to their settings.
   * >  With **KeyboardAvoidMode.RESIZE**, **expandSafeArea([SafeAreaType.KEYBOARD],[SafeAreaEdge.BOTTOM])** does not
   * >  take effect.
   * >
   * >  With **KeyboardAvoidMode.NONE**, keyboard avoidance is disabled, and the page will be covered by the displayed
   * >  keyboard.
   * >
   * >  **setKeyboardAvoidMode** only affects page layouts. It does not apply to popup components, including the
   * > following: **Dialog**, **Popup**, **Menu**, **BindSheet**, **BindContentCover**, **Toast**, **OverlayManager**.
   * > For details about the avoidance mode of popup components, see
   * > [CustomDialogControllerOptions](docroot://reference/arkui-ts/ts-methods-custom-dialog-box.md).
   *
   * @param { KeyboardAvoidMode } value - Avoidance mode of the virtual keyboard.<br>Default value:
   *     **KeyboardAvoidMode.OFFSET**, which means that the page moves up when the keyboard is displayed.<br>When
   *     **setKeyboardAvoidMode** is set to an invalid value, this attribute does not take effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  setKeyboardAvoidMode(value: KeyboardAvoidMode): void;

  /**
   * Obtains the avoidance mode of the virtual keyboard.
   *
   * @returns { KeyboardAvoidMode } Avoidance mode of the virtual keyboard.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  getKeyboardAvoidMode(): KeyboardAvoidMode;

  /**
   * Sets the pixel rounding mode for this page.
   *
   * @param { PixelRoundMode } mode - Pixel rounding mode.
   *     Default value:**PixelRoundMode.PIXEL_ROUND_ON_LAYOUT_FINISH**.<br>If this parameter is set to an invalid value,
   *     the default value will be used.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  setPixelRoundMode(mode: PixelRoundMode): void;

  /**
   * Obtains the pixel rounding mode for this page.
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
   * @param { KeyEvent } event - The key event to be sent.
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
   * Generates a key frame animation. For details about how to use this API, see [keyframeAnimateTo]{@link common}.
   *
   * @param { KeyframeAnimateParam } param - Overall animation parameter of the keyframe animation.
   * @param { Array<KeyframeState> } keyframes - List of all keyframe states.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  keyframeAnimateTo(param: KeyframeAnimateParam, keyframes: Array<KeyframeState>): void;

  /**
   * Get FocusController.
   *
   * @returns { FocusController } - the FocusController
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  getFocusController(): FocusController;

  /**
   * Specifies a clear animation host instance context via the UIContext object and triggers the explicit animation to 
   * be dispatched immediately. This avoids issues where animations are not executed or animation end callbacks are not 
   * triggered due to inability to locate the instance or using an incorrect instance. This API uses an asynchronous 
   * callback to return the result.
   *
   * @param { AnimateParam } param - Animation settings.
   * @param { Callback<void> } processor - Callback function. It specifies the closure function that displays the
   *     animation. The system automatically inserts the transition animation if the state changes in the closure
   *     function.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi [since 12 - 22]
   * @publicapi [since 23]
   * @stagemodelonly
   * @atomicservice [since 23]
   * @since 12 dynamic
   */
  animateToImmediately(param: AnimateParam, processor: Callback<void>): void;

  /**
   * Get FrameNode by id.
   *
   * @param { string } id - The id of FrameNode.
   * @returns { FrameNode | null } The instance of FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getFrameNodeById(id: string): FrameNode | null;

  /**
   * Get the FrameNode attached to current window by id.
   *
   * @param { string } id - The id of FrameNode.
   * @returns { FrameNode | null } The instance of FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getAttachedFrameNodeById(id: string): FrameNode | null;

  /**
   * Get FrameNode by uniqueId.
   * Obtains the entity node, FrameNode, of a component on the component tree using its uniqueId.
   * The return value depends on the type of component associated with the uniqueId.
   *
   * 1. If the uniqueId corresponds to a built-in component, the associated FrameNode is returned.
   * 2. If the uniqueId corresponds to a custom component: If the component has rendered content, its root node is
   * returned, with the type __Common__; if the component has no rendered content, the FrameNode of its first child
   * component is returned.
   * 3. If the uniqueId does not correspond to any component, null is returned.
   *
   * @param { number } id - The uniqueId of the FrameNode.
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
   *     navDestination and router page information. If the frame node does not have navDestination and
   *     router page information, it will return an empty object.
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
   * Sets the dynamic dimming degree of the component.
   *
   * > **NOTE**
   * >
   * > Applying other visual effects after this API is called may result in conflicts.
   *
   * @param { string } id - Component ID.
   * @param { number } value - Dynamic dimming degree of the component. The value range is [0, 1]. The component is
   *     brighter with a larger value.
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
   * Registers a local input event monitor.
   * 
   * The "Local" in the interface name indicates that the monitor is only valid within the current UIContext,
   * and does not affect other UIContext instances. Each UIContext maintains its own independent list of monitors.
   * 
   * Performance Warning: Do not perform time-consuming operations in the callback!
   * 
   * Monitor Object Notes:
   * 
   * - The returned Monitor object is a unique identifier created by the system.
   * - Developers cannot actively construct or forge this object.
   * - Must save the returned monitor object reference for subsequent cancellation.
   * - It is recommended to use a variable to save it to avoid losing the reference.
   * 
   * Usage Examples:
   * 
   * ```typescript
   * // Monitor a single event type
   * const monitor1 = uiContext.addLocalInputEventMonitor(
   * InputEventSubTypeMask.LEFT_MOUSE_DOWN,
   * (wrapper: RawInputEventWrapper) => {
   * if (wrapper.isMouseEvent()) {
   * const mouseEvent = wrapper.asMouseEvent();
   * console.log(`Mouse: (${mouseEvent.windowX}, ${mouseEvent.windowY})`);
   * return { action: InputEventInterceptAction.CONTINUE };  // Allow event to continue
   * }
   * return { action: InputEventInterceptAction.BLOCK };  // Block event
   * }
   * );
   * // Monitor multiple event types (using bitwise operations)
   * const monitor2 = uiContext.addLocalInputEventMonitor(
   * InputEventSubTypeMask.LEFT_MOUSE_DOWN | InputEventSubTypeMask.RIGHT_MOUSE_DOWN,
   * (wrapper: RawInputEventWrapper) => {
   * if (wrapper.isMouseEvent()) {
   * const mouseEvent = wrapper.asMouseEvent()!;
   * console.log(`Mouse button: ${mouseEvent.button}`);
   * return { action: InputEventInterceptAction.BLOCK };
   * }
   * return { action: InputEventInterceptAction.CONTINUE };
   * }
   * );
   * // When unregistering the monitor, use the returned Monitor object
   * uiContext.removeLocalInputEventMonitor(monitor1);
   * uiContext.removeLocalInputEventMonitor(monitor2);
   * ```
   *
   * @param { int } eventMask - Event type mask, specifying the types of events to monitor through
   *     bitwise operations.
   * @param { InputEventListener } listener - Event listener callback function.
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
   * Removes a local input event monitor.
   * 
   * **Important Notes**:
   * 
   * - Only Monitor objects returned by addLocalInputEventMonitor can be removed.
   * - Cannot unregister a monitor by manually constructing an object.
   * - If an invalid object is passed, the system silently ignores it.
   *
   * @param { InputEventMonitor } monitor - Monitor identifier object (returned by addLocalInputEventMonitor).
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
   * Get ComponentSnapshot.
   *
   * @returns { ComponentSnapshot } the ComponentSnapshot
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  getComponentSnapshot(): ComponentSnapshot;

  /**
   * Converts a value in vp units to a value in px.
   *
   * @param { number } value
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  vp2px(value: number): number;

  /**
   * Converts a value in px units to a value in vp.
   *
   * @param { number } value
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  px2vp(value: number): number;

  /**
   * Converts a value in fp units to a value in px.
   *
   * @param { number } value
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  fp2px(value: number): number;

  /**
   * Converts a value in px units to a value in fp.
   *
   * @param { number } value
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  px2fp(value: number): number;

  /**
   * Converts a value in lpx units to a value in px.
   *
   * @param { number } value
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  lpx2px(value: number): number;

  /**
   * Converts a value in px units to a value in lpx.
   *
   * @param { number } value
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  px2lpx(value: number): number;

  /**
   * Obtains the **LocalStorage** instance shared by this stage.
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
   * Obtains the context of this ability.
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
   * Obtains the name of the window where this instance is located.
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
   * Obtains the ID of the window to which the current application instance belongs.
   *
   * > **NOTE**
   * >
   * > If the UIContext resides inside a
   * > [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility} that runs in the main
   * > application process, the top-level window ID of the main application is returned.
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
   * Obtains the width breakpoint value of the window where this instance is located. The specific value is determined
   * by the vp value of the window width. For details, see [WidthBreakpoint]{@link WidthBreakpoint}.
   *
   * @returns { WidthBreakpoint } Width breakpoint value of the window where the current instance is located. If the
   *     window width is 0 vp, **WIDTH_XS** is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 13 dynamic
   */
  getWindowWidthBreakpoint(): WidthBreakpoint;

  /**
   * Obtains the height breakpoint value of the window where this instance is located. The specific value is determined
   * based on the window aspect ratio. For details, see [HeightBreakpoint]{@link HeightBreakpoint}.
   *
   * @returns { HeightBreakpoint } Height breakpoint value of the window where the current instance is located. If the
   *     window aspect ratio is 0, **HEIGHT_SM** is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 13 dynamic
   */
  getWindowHeightBreakpoint(): HeightBreakpoint;

  /**
   * Creates a sheet whose content is as defined in **bindSheetContent** and displays the sheet. This API uses a promise
   * to return the result.  
   * 
   * > **NOTE**
   * >
   * > 1. When calling this API, if no valid value is provided for **targetId**, you won't be able to set 
   * > **SheetOptions.preferType** to **POPUP** or **SheetOptions.mode** to **EMBEDDED**.
   * >
   * > 2. Since [updateBindSheet]{@link UIContext#updateBindSheet} and [closeBindSheet]{@link UIContext#closeBindSheet} 
   * > depend on **bindSheetContent**, you need to maintain the passed **bindSheetContent** yourself.
   * >
   * > 3. Setting **SheetOptions.UIContext** is not supported.
   *
   * @param { ComponentContent<T> } bindSheetContent - Content to display on the sheet.
   * @param { SheetOptions } sheetOptions - Style of the sheet.<br>**NOTE**<br>1. **SheetOptions.uiContext** cannot be
   *     set. Its value is fixed to the **UIContext** object of the current instance.<br>2. If **targetId** is not
   *     passed in, **SheetOptions.preferType** cannot be set to **POPUP**; if **POPUP** is set, it will be replaced
   *     with **CENTER**.<br>3. If **targetId** is not passed in, **SheetOptions.mode** cannot be set to **EMBEDDED**;
   *     the default mode is **OVERLAY**.<br>4. For the default values of other attributes, see
   *     [SheetOptions]{@link SheetOptions}.
   * @param { number } targetId - ID of the component to be bound. If this parameter is not set, no component is bound.
   *     If the ID does not exist, the error code 120004 is returned. Returns error code 401 if **undefined** is passed
   *     in.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Updates the style of the sheet corresponding to the provided **bindSheetContent**. This API uses a promise to 
   * return the result.
   * 
   * > **NOTE**
   * >
   * > **SheetOptions.UIContext**, **SheetOptions.mode**, and callback functions cannot be updated.
   *
   * @param { ComponentContent<T> } bindSheetContent - Content to display on the sheet.
   * @param { SheetOptions } sheetOptions - Style of the sheet.<br>**NOTE**<br>**SheetOptions.UIContext** and
   *     **SheetOptions.mode** cannot be updated.
   * @param { boolean } partialUpdate - Whether to update the sheet in incremental mode.<br>Default value: **false**<br>
   *     **NOTE**<br>1. **true**: incremental update, where the specified properties in **SheetOptions** are updated,
   *     and other properties stay at their current value.<br>2. **false**: full update, where all properties except
   *     those specified in **SheetOptions** are restored to default values.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Closes the sheet corresponding to **bindSheetContent**. This API uses a promise to return the result.
   * 
   * > **NOTE**
   * >
   * > Closing a sheet using this API will not invoke the **shouldDismiss** callback.
   *
   * @param { ComponentContent<T> } bindSheetContent - Content to display on the sheet.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Post a frame callback to run on the next frame.
   *
   * @param { FrameCallback } frameCallback - The frame callback to run on the next frame.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  postFrameCallback(frameCallback: FrameCallback): void;

  /**
   * Post a frame callback to run on the next frame after the specified delay.
   *
   * @param { FrameCallback } frameCallback - The frame callback to run on the next frame.
   * @param { number } delayTime - The delay time in milliseconds,
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  postDelayedFrameCallback(frameCallback: FrameCallback, delayTime: number): void;

  /**
   * Require DynamicSyncScene by id.
   *
   * @param { string } id - The id of DynamicSyncScene.
   * @returns { Array<DynamicSyncScene>} The instance of SwiperDynamicSyncScene.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  requireDynamicSyncScene(id: string): Array<DynamicSyncScene>;

  /**
   * Clear the cache generated by using $r/$rawfile to retrieve resources in HSP. This cache is used to accelerate the
   * process of repeatedly loading resources. Clearing this cache may slow down the loading speed of resources during
   * page overload.
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
   * Sets whether to freeze a specific component by **id** to prevent it from being marked as dirty and triggering
   * layout updates.
   *
   * @param { string } id - ID of the target component.
   * @param { boolean } isFrozen - Whether to freeze the component.<br>The value **true** means to freeze the component,
   *     and **false** means the opposite.<br>Default value: **false**.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  freezeUINode(id: string, isFrozen: boolean): void;

  /**
   * Sets whether to freeze a specific component by **uniqueId** to prevent it from being marked as dirty and triggering
   * layout updates.
   *
   * @param { number } uniqueId - Unique ID of the component.
   * @param { boolean } isFrozen - Whether to freeze the component.<br>The value **true** means to freeze the component,
   *     and **false** means the opposite.<br>Default value: **false**.
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
   * Set the keyboard appearance config for this input component before attach InputMethod.
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
   * Creates a UI instance that does not depend on a window and returns its UI context. The created UI instance is a
   * singleton.
   *
   * > **NOTE**
   * >
   * > The returned UI context can only be used to create [custom nodes](docroot://ui/arkts-user-defined-node.md). It
   * > cannot be used for other UI operations.
   *
   * @param { common.UIAbilityContext | common.ExtensionContext } context - Context corresponding to
   *     [UIAbility]{@link @ohos.app.ability.UIAbility} or
   *     [ExtensionAbility]{@link @ohos.app.ability.ExtensionAbility:ExtensionAbility}.
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
   * Destroys the UI instance created using
   * [createUIContextWithoutWindow]{@link UIContext#createUIContextWithoutWindow}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  static destroyUIContextWithoutWindow(): void;

  /**
   * Set the upper limit for the cache count of HSP resource management objects.
   * 
   * If the upper limit of the cache is set too high, there is a risk of excessive memory overhead.
   * It is recommended to configure it according to actual needs.
   *
   * @param { number } count - The cache limit of resource manager for HSP, must be non negative integers.
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
   * Obtains the unique ID of a UI instance object. In multi-instance scenarios, you can use this unique ID to
   * distinguish between different UI instance objects for easier management.
   *
   * @returns { number } Unique ID of the backend instance. The value range is [-1, +∞).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  getId(): number;

  /**
   * Set the switch for memory recycling of invisible image nodes
   *
   * @param { boolean } enabled - The switch for memory recycling.
   *     <br>Default value: false, Passing `undefined` restores the default value.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  recycleInvisibleImageMemory(enabled: boolean): void;

  /**
   * Set custom keyboard continue feature.
   *
   * @param { CustomKeyboardContinueFeature } feature - The custom keyboard continue feature.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  setCustomKeyboardContinueFeature(feature: CustomKeyboardContinueFeature): void;

  /**
   * Obtains the root node of the page corresponding to the UIContext.
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
    * Checks whether the current UI instance is in easy split mode.
    *
    * @returns { boolean } Returns true if the current UI instance is in easy split mode; returns false otherwise.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @crossplatform
    * @atomicservice
    * @since 24 dynamic
    */
   isEasySplit(): boolean;

  /**
   * Whether to enable or disable event passthrough.
   *
   * @param { boolean } enabled - enable or disable event passthrough. The default value is false.
   * @param { RawInputEventType } eventType - the type of raw input event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservicet
   * @since 26.0.0 dynamic
   */
  enableEventPassthrough(enabled: boolean, eventType: RawInputEventType): void;

  /**
   * Sets the text selection clear policy for text component.
   * Default policy: **TextSelectionClearPolicy.KEEP_SELECTED_TEXT_ON_EXTERNAL_TOUCH**
   *
   * @param { TextSelectionClearPolicy } policy - The text selection clear policy.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  setTextSelectionClearPolicy(policy: TextSelectionClearPolicy): void;

  /**
   * Get object smart gesture controller.
   *
   * @returns { SmartGestureController } object smart gesture controller.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getSmartGestureController(): SmartGestureController;
}

/**
 * Enumerates the modes in which the layout responds when the keyboard is displayed.
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  OFFSET = 0,

  /**
   * Resize Type, the layout is resized.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  RESIZE = 1,

  /**
   * Offset Type, the layout moves up, and this adjustment also occurs if the caret position in the text box changes.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  OFFSET_WITH_CARET = 2,

  /**
   * Resize Type, the layout moves up, and this adjustment also occurs if the caret position in the text box changes.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  RESIZE_WITH_CARET = 3,

  /**
   * None Type, the layout is not adjusted to avoid the keyboard.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  NONE = 4
}

/**
 * Enum of TextSelectionClearPolicy
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export const enum TextSelectionClearPolicy {
  /**
   * Keep the selected text when touch outside of text component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  KEEP_SELECTED_TEXT_ON_EXTERNAL_TOUCH = 0,

  /**
   * Clear the selected text when touch outside of text component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  CLEAR_SELECTED_TEXT_ON_EXTERNAL_TOUCH = 1,
}

/**
 * Enum of SwiperDynamicSyncSceneType
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
export const enum SwiperDynamicSyncSceneType {
  /**
   * Scene type is GESTURE.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  GESTURE = 0,

  /**
   * Scene type is ANIMATION.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  ANIMATION = 1
}

/**
 * Enum of scene type for Marquee
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
   * Disable all system service menus, such as translation and ai writer.
   * True means disable, false means enable.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  static disableSystemServiceMenuItems(disable: boolean): void;

  /**
   * Disable menu action by action id.
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
 * Enumerates triggering phases of gesture callbacks, corresponding to the action callbacks defined in **gesture.d.ts**.
 * However, different gesture types support different phases (for example, **SwipeGesture** only includes the
 * **WILL_START** enumerated value).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export const enum GestureActionPhase {

  /**
   * The gesture has been successfully recognized by the system, and the action-start/action callback will be
   * executed immediately.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  WILL_START = 0,

  /**
   * This indicates the gesture has been determined to be an end, which usually happens when the user lifts their
   * fingers, ending the entire interaction, and the action-end callback will be executed immediately.
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
 * Enumerates the types of gestures to be listened for.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export const enum GestureListenerType {

  /**
   * The tap gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  TAP = 0,

  /**
   * The long press gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  LONG_PRESS = 1,

  /**
   * The pan gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  PAN = 2,

  /**
   * The pinch gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  PINCH = 3,

  /**
   * The swipe gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  SWIPE = 4,

  /**
   * The rotation gesture.
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
  * Enum of CustomKeyboardContinueFeature
  *
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @crossplatform
  * @atomicservice
  * @since 23 dynamic
  */
 export const enum CustomKeyboardContinueFeature {

  /**
   * Enable custom keyboard continuation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  ENABLED = 0,

  /**
   * Disable custom keyboard continuation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  DISABLED = 1
}
