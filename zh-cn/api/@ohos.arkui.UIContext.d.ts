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

import router from './@ohos.router';

import type componentUtils from './@ohos.arkui.componentUtils';

import type observer from './@ohos.arkui.observer';

import type { Callback, AsyncCallback } from './@ohos.base';

import type componentSnapshot from './@ohos.arkui.componentSnapshot';

import image from './@ohos.multimedia.image';

import type pointer from './@ohos.multimodalInput.pointer';

import promptAction, { LevelOrder, LevelMode } from './@ohos.promptAction';

import { ComponentContent, FrameNode, Frame, LengthMetrics, Edges } from './@ohos.arkui.node';

import type { AnimatorOptions, AnimatorResult } from './@ohos.animator';

import { SimpleAnimatorOptions } from './@ohos.animator';

import { MeasureOptions } from './@ohos.measure';

import type dragController from './@ohos.arkui.dragController';

import type common from './@ohos.app.ability.common';

/**
 * class Font
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
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
 * @atomicservice
 * @since 11 dynamic
 */
export class Font {

  /**
   * Register a customized font in the FontManager.
   *
   * @param { font.FontOptions } options - FontOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Register a customized font in the FontManager.
   *
   * @param { font.FontOptions } options - FontOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  registerFont(options: font.FontOptions): void;

  /**
   * 获取系统支持的字体列表。
   *
   * @returns { Array<string> } 字体名称列表
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 10
   */
  /**
   * 获取系统支持的字体列表。
   *
   * <p><strong>NOTE</strong>:
   * <br>This API takes effect only on 2-in-1 devices.
   * </p>
   *
   * @returns { Array<string> } 字体名称列表
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  getSystemFontList(): Array<string>;

  /**
   * 根据字体名称获取字体详细信息。
   *
   * @param { string } fontName - 字体名称
   * @returns { font.FontInfo } Returns the font info
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 10
   */
  /**
   * 根据字体名称获取字体详细信息。
   *
   * @param { string } fontName - 字体名称
   * @returns { font.FontInfo } Returns the font info
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  getFontByName(fontName: string): font.FontInfo;
}

/**
 * class MediaQuery
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
 * class MediaQuery
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
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
   * @since 10
   */
  /**
   * Sets the media query criteria and returns the corresponding listening handle
   *
   * @param { string } condition - media conditions
   * @returns { mediaQuery.MediaQueryListener } the corresponding listening handle
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
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
   * 创建当前节点或者当前节点的子节点的布局和送显的事件监听句柄。
   *
   * @param { string | number } id - 当前节点的inspector key或者唯一id。
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
 * Defines the custom builder with id.
 *
 * @typedef { function } CustomBuilderWithId
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
 * @interface TargetInfo
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
   * @type { string | number }
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
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  componentId?: number;
}

/**
 * 背景亮度采样配置参数。
 *
 * @interface BackgroundLuminanceSamplingConfigs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic
 */
export interface BackgroundLuminanceSamplingConfigs {

  /**
   * 采样间隔，单位为毫秒。最小间隔为180毫秒。
   *
   * @type { ?number }
   * @default 500
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  samplingInterval?: number;

  /**
   * 亮度阈值。如果大于此阈值，则表示背景较亮。
   * 取值范围为[0, 255]。brightThreshold的值必须大于等于DarkThreshold的值。
   * 不在此范围内的值会导致参数设置异常。
   *
   * @type { ?number }
   * @default 220
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  brightThreshold?: number;

  /**
   * 黑暗阈值。如果小于此阈值，则背景为暗色。
   * 取值范围为[0, 255]。brightThreshold的值必须大于等于DarkThreshold的值。
   * 不在此范围内的值会导致参数设置异常。
   *
   * @type { ?number }
   * @default 150
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  darkThreshold?: number;

  /**
   * 采样区域，如果不指定，则为节点区域。
   *
   * @type { ?Edges<LengthMetrics> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  region?: Edges<LengthMetrics>;
}

/**
 * 类背景亮度采样器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic
 */
export class LuminanceSampler {

  /**
   * 设置背景亮度采样配置。
   *
   * @param { BackgroundLuminanceSamplingConfigs } configs - 采样配置。
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
   * 注册背景亮度变化的回调。
   *
   * @param { Callback<number> } samplingCallback - 亮度采样回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  onBackgroundLuminanceChange(samplingCallback: Callback<number>): void;

  /**
   * 注销背景亮度变化的回调。
   *
   * @param { Callback<number> } [samplingCallback] - 亮度采样回调。
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
 * @since 10
 */
/**
 * class PromptAction
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
export class PromptAction {

  /**
   * Displays the notification text.
   *
   * @param { promptAction.ShowToastOptions } options - Options.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Shows a toast in the given settings.
   *
   * @param { promptAction.ShowToastOptions } options - Toast options.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  showToast(options: promptAction.ShowToastOptions): void;

  /**
   * Displays the notification text.
   *
   * @param { promptAction.ShowToastOptions } options - Options.
   * @returns { Promise<number> } return the toast id that will be used by closeToast.
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
   * @param { number } toastId - the toast id that returned by openToast.
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
   * @param { promptAction.ShowDialogOptions } options - Options.
   * @param { AsyncCallback<promptAction.ShowDialogSuccessResponse> } callback - the callback of showDialog.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * 弹出对话框。
   *
   * @param { promptAction.ShowDialogOptions } options - Options.
   * @param { AsyncCallback<promptAction.ShowDialogSuccessResponse> } callback - the callback of showDialog.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Shows a dialog box in the given settings. This API uses an asynchronous callback to return the result.
   *
   * @param { promptAction.ShowDialogOptions } options - 对话框选项。
   * @param { AsyncCallback<promptAction.ShowDialogSuccessResponse> } callback - 用于返回对话框的回调
   *     框响应结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * Shows a dialog box in the given settings. This API uses an asynchronous callback to return the result.
   *
   * @param { promptAction.ShowDialogOptions } options - 对话框选项。
   * @param { AsyncCallback<promptAction.ShowDialogSuccessResponse> } callback - 用于返回对话框的回调
   *     框响应结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 103306 - The dialog cannot be opened due to the system pop-up window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  showDialog(options: promptAction.ShowDialogOptions, callback: AsyncCallback<promptAction.ShowDialogSuccessResponse>): void;

  /**
   * 弹出对话框。
   *
   * @param { promptAction.ShowDialogOptions } options - Options.
   * @returns { Promise<promptAction.ShowDialogSuccessResponse> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Shows a dialog box. This API uses a promise to return the result.
   *
   * @param { promptAction.ShowDialogOptions } options - 对话框选项。
   * @returns { Promise<promptAction.ShowDialogSuccessResponse> } Promise used to return the dialog
   *     box response result.
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
  /**
   * Shows a dialog box. This API uses a promise to return the result.
   *
   * @param { promptAction.ShowDialogOptions } options - 对话框选项。
   * @returns { Promise<promptAction.ShowDialogSuccessResponse> } Promise used to return the dialog
   *     box response result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 103306 - The dialog cannot be opened due to the system pop-up window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  showDialog(options: promptAction.ShowDialogOptions): Promise<promptAction.ShowDialogSuccessResponse>;

  /**
   * Shows an action menu in the given settings. This API uses an asynchronous callback to return the result.
   *
   * @param { promptAction.ActionMenuOptions } options - Action menu options.
   * @param { promptAction.ActionMenuSuccessResponse } callback - Callback used to return the action menu
   * response result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
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
   * 显示给定设置中的操作菜单。该接口使用异步回调返回结果。
   *
   * @param { promptAction.ActionMenuOptions } options - 操作菜单选项。
   * @param { AsyncCallback<promptAction.ActionMenuSuccessResponse> } callback - 用于返回操作的回调
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
  /**
   * 显示给定设置中的操作菜单。该接口使用异步回调返回结果。
   *
   * @param { promptAction.ActionMenuOptions } options - 操作菜单选项。
   * @param { AsyncCallback<promptAction.ActionMenuSuccessResponse> } callback - 用于返回操作的回调
   *     菜单响应结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 103306 - The dialog cannot be opened due to the system pop-up window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  showActionMenu(options: promptAction.ActionMenuOptions, callback: AsyncCallback<promptAction.ActionMenuSuccessResponse>): void;

  /**
   * 显示菜单。
   *
   * @param { promptAction.ActionMenuOptions } options - Options.
   * @returns { Promise<promptAction.ActionMenuSuccessResponse> } callback - the callback of showActionMenu.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 10
   */
  /**
   * Shows an action menu in the given settings. This API uses an asynchronous callback to return the result.
   *
   * @param { promptAction.ActionMenuOptions } options - 操作菜单选项。
   * @returns { Promise<promptAction.ActionMenuSuccessResponse> } callback - Promise used to return the action
   *     menu response result.
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
  /**
   * Shows an action menu in the given settings. This API uses an asynchronous callback to return the result.
   *
   * @param { promptAction.ActionMenuOptions } options - 操作菜单选项。
   * @returns { Promise<promptAction.ActionMenuSuccessResponse> } callback - Promise used to return the action
   *     menu response result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 103306 - The dialog cannot be opened due to the system pop-up window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
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
   * @throws { BusinessError } 103306 - The dialog cannot be opened due to the system pop-up window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
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
   * @throws { BusinessError } 103306 - The dialog cannot be opened due to the system pop-up window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  openCustomDialogWithController<T extends Object>(dialogContent: ComponentContent<T>, controller: promptAction.DialogController,
    options?: promptAction.BaseDialogOptions): Promise<void>;

  /**
   * Update the custom dialog with frameNode.
   *
   * @param { ComponentContent<T> } dialogContent - the content of custom dialog.
   * @param { promptAction.BaseDialogOptions } options - Options.
   * only alignment, offset, autoCancel, and maskColor can be updated.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
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
   * @param { ComponentContent<T> } dialogContent - Content of the custom dialog box.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
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
   *
   * @param { promptAction.CustomDialogOptions } options - 选项。
   * @returns { Promise<number> } 返回将由closeCustomDialog使用的对话框ID。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * 打开自定义对话框。
   *
   * isModal = true和showInSubWindow = true不能同时使用。
   *
   * @param { promptAction.CustomDialogOptions } options - 选项。
   * @returns { Promise<number> } 返回将由closeCustomDialog使用的对话框ID。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 103306 - The dialog cannot be opened due to the system pop-up window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  openCustomDialog(options: promptAction.CustomDialogOptions): Promise<number>;

  /**
   * 使用控制器显示自定义对话框。
   *
   * isModal = true和showInSubWindow = true不能同时使用。
   *
   * @param { CustomBuilder | CustomBuilderWithId } builder - 对话框生成器。
   * @param { promptAction.DialogController } controller - 对话框控制器。
   * @param { promptAction.DialogOptions } options - 选项。
   * @returns { Promise<number> } 返回将由closeCustomDialog使用的对话框ID。
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
  /**
   * 使用控制器显示自定义对话框。
   *
   * isModal = true和showInSubWindow = true不能同时使用。
   *
   * @param { CustomBuilder | CustomBuilderWithId } builder - 对话框生成器。
   * @param { promptAction.DialogController } [controller] - 对话框控制器。
   * @param { promptAction.DialogOptions } [options] - 选项。
   * @returns { Promise<number> } 返回将由closeCustomDialog使用的对话框ID。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 103306 - The dialog cannot be opened due to the system pop-up window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  presentCustomDialog(builder: CustomBuilder | CustomBuilderWithId, controller?: promptAction.DialogController,
    options?: promptAction.DialogOptions): Promise<number>;

  /**
   * Close the custom dialog.
   *
   * @param { number } dialogId - the dialog id that returned by openCustomDialog.
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
   * @returns { LevelOrder } the display order.
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
   * @returns { LevelOrder } the display order.
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
   * @param { ComponentContent<T> } content - The content of popup.
   * @param { TargetInfo } target - The target of popup.
   * @param { PopupCommonOptions } options - Options.
   * @returns { Promise<void> } the promise returned by the function.
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
  openPopup<T extends Object>(content: ComponentContent<T>, target: TargetInfo, options?: PopupCommonOptions): Promise<void>;

  /**
   * Update popup with frameNode.
   *
   * @param { ComponentContent<T> } content - The content of popup.
   * @param { PopupCommonOptions } options - Options.
   * @param { boolean } partialUpdate - If true, only the specified properties in the options are updated,
   *                                    otherwise the rest of the properties are overwritten with the default values.
   *                                    Default value is false.
   * @returns { Promise<void> } the promise returned by the function.
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
  updatePopup<T extends Object>(content: ComponentContent<T>, options: PopupCommonOptions, partialUpdate?: boolean): Promise<void>;

  /**
   * Close popup with frameNode.
   *
   * @param { ComponentContent<T> } content - The content of popup.
   * @returns { Promise<void> } the promise returned by the function.
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
   * @param { ComponentContent<T> } content - The content of menu.
   * @param { TargetInfo } target - The target of menu.
   * @param { MenuOptions } options - Options.
   * @returns { Promise<void> } the promise returned by the function.
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
   * @param { ComponentContent<T> } content - The content of menu.
   * @param { MenuOptions } options - Options.
   * @param { boolean } partialUpdate - If true, only the specified properties in the MenuOptions are updated,
   *                                    otherwise the rest of the properties are overwritten with the default values.
   *                                    Default value is false.
   * @returns { Promise<void> } the promise returned by the function.
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
  updateMenu<T extends Object>(content: ComponentContent<T>, options: MenuOptions, partialUpdate?: boolean): Promise<void>;

  /**
   * Close menu with frameNode.
   *
   * @param { ComponentContent<T> } content - The content of menu.
   * @returns { Promise<void> } the promise returned by the function.
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

  /**
   * 显示告警对话框。
   *
   * @param { AlertDialogParamWithConfirm | AlertDialogParamWithButtons | AlertDialogParamWithOptions } options -
   告警对话框的选项。
   * @returns { Promise<void> } 函数返回的promise。
   * @throws { BusinessError } 103306 - The dialog cannot be opened due to the system pop-up window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  showAlertDialog(options: AlertDialogParamWithConfirm | AlertDialogParamWithButtons | AlertDialogParamWithOptions): Promise<void>;

  /**
   * 显示操作列表。
   *
   * @param { ActionSheetOptions } options - 操作列表的选项。
   * @returns { Promise<void> } 函数返回的promise。
   * @throws { BusinessError } 103306 - The dialog cannot be opened due to the system pop-up window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  showActionSheet(options: ActionSheetOptions): Promise<void>;
}

/**
 * Defines the callback type used in UIObserver watch click event.
 * The value of event indicates the information of ClickEvent.
 * The value of node indicates the frameNode which will receive the event.
 *
 * @typedef { function } ClickEventListenerCallback
 * @param { ClickEvent } event - the information of ClickEvent
 * @param { FrameNode } [node] - the information of frameNode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type ClickEventListenerCallback = (event: ClickEvent, node?: FrameNode) => void;

/**
 * Defines the callback type used in UIObserver watch pan event.
 * The value of event indicates the information of pan event.
 * The value of node indicates the frameNode which will receive the event.
 *
 * @typedef { function } PanListenerCallback
 * @param { GestureEvent } event - the information of pan event
 * @param { GestureRecognizer } current - the information of panRecognizer
 * @param { FrameNode } [node] - the information of frameNode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare type PanListenerCallback = (event: GestureEvent, current: GestureRecognizer, node?: FrameNode) => void;

/**
 * Defines the callback type used in UIObserver watch gesture.
 * The value of event indicates the information of gesture.
 * The value of node indicates the frameNode which will receive the event.
 *
 * @typedef { function } GestureEventListenerCallback
 * @param { GestureEvent } event - the information of GestureEvent
 * @param { FrameNode } [node] - the information of frameNode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type GestureEventListenerCallback = (event: GestureEvent, node?: FrameNode) => void;

/**
 * 定义用于标识节点的类型，对于字符串类型，它是通过.id属性设置的检查器ID，对于数字类型，它是通过getUniqueID方法从FrameNode获取的唯一ID。
 *
 * @typedef { string | number } NodeIdentity
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export declare type NodeIdentity = string | number;

/**
 * Defines the callback type used in UIObserver to monitor one specific node's render state.
 *
 * @typedef { function } NodeRenderStateChangeCallback
 * @param { NodeRenderState } state - the node's render state
 * @param { FrameNode } [node] - the information of frameNode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export declare type NodeRenderStateChangeCallback = (state: NodeRenderState, node?: FrameNode) => void;

/**
 * 定义UIObserver中用于监控特定手势触发信息的回调类型。
 *
 * @typedef { function } GestureListenerCallback
 * @param { GestureTriggerInfo } info - the gesture details triggered with user interaction
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
 * @interface PageInfo
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
   * @type { ?observer.RouterPageInfo }
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
   * @type { ?boolean }
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
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 19
   */
  /**
   * Set whether support backPressed event or not.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  enableBackPressedEvent?: boolean;
}

/**
 * 使用顺序打开浮层的选项。
 *
 * @interface OrderOverlayOptions
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
   * @type { ?LevelOrder }
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
   * @type { ?LevelMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  levelMode?: LevelMode;

  /**
   * 路由器或导航页面中任何节点的唯一ID。
   * 取值范围为全体整数。
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  levelUniqueId?: number;
}

/**
 * 注册回调来观察ArkUI的行为。
 * 在下面的API示例中，首先需要在UIContext中使用getUIMonitor()来获取一个UIMonitor实例。
 * 然后使用获取到的实例调用接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
/**
 * 注册回调来观察ArkUI的行为。
 * 在下面的API示例中，首先需要在UIContext中使用getUIMonitor()来获取一个UIMonitor实例。
 * 然后使用获取到的实例调用接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
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
   * @param { Callback<observer.ScrollEventInfo> } callback - The callback function to remove. If not provided, all callbacks for the given event type and
   *                                                    scroll ID will be removed.
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
   * @param { Callback<observer.ScrollEventInfo> } callback - The callback function to be called when the scroll event start or stop.
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
   * @param { Callback<observer.ScrollEventInfo> } [callback] - The callback function to remove. If not provided, all callbacks for the given event type
   *                                                      will be removed.
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
   * @param { Callback<observer.RouterPageInfo> } [callback] - The callback function to remove. If not provided, all callbacks for the given event type
   *                                                               will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'routerPageUpdate' } type - The type of event to remove the listener for. Must be 'routerPageUpdate'.
   * @param { Callback<observer.RouterPageInfo> } [callback] - The callback function to remove. If not provided, all callbacks for the given event type
   *                                                               will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  off(type: 'routerPageUpdate', callback?: Callback<observer.RouterPageInfo>): void;

  /**
   * Registers a callback function to be called when the screen density in a ui context is updated.
   *
   * @param { 'densityUpdate' } type - The type of event to listen for. Must be 'densityUpdate'.
   * @param { Callback<observer.DensityInfo> } callback - The callback function to be called when the screen density is updated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  on(type: 'densityUpdate', callback: Callback<observer.DensityInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'densityUpdate' } type - The type of event to remove the listener for. Must be 'densityUpdate'.
   * @param { Callback<observer.DensityInfo> } [callback] - The callback function to remove. If not provided, all callbacks for the given event type
   *                                                        will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  off(type: 'densityUpdate', callback?: Callback<observer.DensityInfo>): void;

  /**
   * Registers a callback function to be called when the draw command will be drawn.
   *
   * @param { 'willDraw' } type - The type of event to listen for. Must be 'willDraw'.
   * @param { Callback<void> } callback - The callback function to be called when the draw command will be drawn.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  on(type: 'willDraw', callback: Callback<void>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'willDraw' } type - The type of event to remove the listener for. Must be 'willDraw'.
   * @param { Callback<void> } [callback] - The callback function to remove. If not provided, all callbacks for the given event type
   *                                                        will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  off(type: 'willDraw', callback?: Callback<void>): void;

  /**
   * Registers a callback function to be called when the layout is done.
   *
   * @param { 'didLayout' } type - The type of event to listen for. Must be 'didLayout'.
   * @param { Callback<void> } callback - The callback function to be called when the layout is done.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  on(type: 'didLayout', callback: Callback<void>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { 'didLayout' } type - The type of event to remove the listener for. Must be 'didLayout'.
   * @param { Callback<void> } [callback] - The callback function to remove. If not provided, all callbacks for the given event type
   *                                                        will be removed.
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
   * @param { 'navDestinationSwitch' } type - The type of event to remove the listener for. Must be 'navDestinationSwitch'.
   * @param { Callback<observer.NavDestinationSwitchInfo> } [callback] - The callback function to remove. If not provided,
   *                                                                     all callbacks for the given event type will be removed.
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
   * @param { 'navDestinationSwitch' } type - The type of event to remove the listener for. Must be 'navDestinationSwitch'.
   * @param { observer.NavDestinationSwitchObserverOptions } observerOptions - Options.
   * @param { Callback<observer.NavDestinationSwitchInfo> } [callback] - The callback function to remove. If not provided,
   *                                                                     all callbacks for the given event type will be removed.
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
   * Registers a callback function to be called before panGesture onActionStart is called.
   *
   * @param { 'beforePanStart' } type - The type of event to listen for.
   * @param { PanListenerCallback } callback - The callback function to be called
   *                                                when the panGesture will be trigger or after.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  on(type: 'beforePanStart', callback: PanListenerCallback): void;

  /**
   * Removes a callback function to be called before panGesture onActionStart is called.
   *
   * @param { 'beforePanStart' } type - The type of event to remove the listener for.
   * @param { PanListenerCallback } [callback] - The callback function to remove. If not provided,
   *                                                      all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  off(type: 'beforePanStart', callback?: PanListenerCallback): void;

  /**
   * Registers a callback function to be called before panGesture onActionEnd is called.
   *
   * @param { 'beforePanEnd' } type - The type of event to listen for.
   * @param { PanListenerCallback } callback - The callback function to be called
   *                                                when the panGesture will be trigger or after.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  on(type: 'beforePanEnd', callback: PanListenerCallback): void;

  /**
   * Removes a callback function to be called before panGesture onActionEnd is called.
   *
   * @param { 'beforePanEnd' } type - The type of event to remove the listener for.
   * @param { PanListenerCallback } [callback] - The callback function to remove. If not provided,
   *                                                      all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  off(type: 'beforePanEnd', callback?: PanListenerCallback): void;

  /**
   * Registers a callback function to be called after panGesture onActionStart is called.
   *
   * @param { 'afterPanStart' } type - The type of event to listen for.
   * @param { PanListenerCallback } callback - The callback function to be called
   *                                                when the panGesture will be trigger or after.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  on(type: 'afterPanStart', callback: PanListenerCallback): void;

  /**
   * Removes a callback function to be called after panGesture onActionStart is called.
   *
   * @param { 'afterPanStart' } type - The type of event to remove the listener for.
   * @param { PanListenerCallback } [callback] - The callback function to remove. If not provided,
   *                                                      all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  off(type: 'afterPanStart', callback?: PanListenerCallback): void;

  /**
   * Registers a callback function to be called after panGesture onActionEnd is called.
   *
   * @param { 'afterPanEnd' } type - The type of event to listen for.
   * @param { PanListenerCallback } callback - The callback function to be called
   *                                                when the panGesture will be trigger or after.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  on(type: 'afterPanEnd', callback: PanListenerCallback): void;

  /**
   * Removes a callback function to be called after panGesture onActionEnd is called.
   *
   * @param { 'afterPanEnd' } type - The type of event to remove the listener for.
   * @param { PanListenerCallback } [callback] - The callback function to remove. If not provided,
   *                                                      all callbacks for the given event type will be removed.
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
   * 注册一个回调函数，以便在窗口大小布局断点发生变化时调用。
   * 此方法可用于观察窗口大小断点的变化，从而
   * 根据窗口尺寸自适应地调整用户界面布局。
   *
   * @param { 'windowSizeLayoutBreakpointChange' } type - 要监听的事件类型。
   *     必须是 'windowSizeLayoutBreakpointChange'。
   * @param { Callback<observer.WindowSizeLayoutBreakpointInfo> } callback - 当窗口大小布局断点发生变化时，要调用的回调函数。该回调函数接收一个
   *     {@link WindowSizeLayoutBreakpointInfo} 对象，其中包含当前的宽度和高度断点分类。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 22 dynamic
   */
  on(type: 'windowSizeLayoutBreakpointChange', callback: Callback<observer.WindowSizeLayoutBreakpointInfo>): void;

  /**
   * 移除之前为窗口大小布局断点变化注册的回调函数。
   * 如果未提供回调函数，则会移除指定上下文的所有回调函数。
   *
   * @param { 'windowSizeLayoutBreakpointChange' } type - 要移除监听器的事件类型。
   *     必须是 'windowSizeLayoutBreakpointChange'
   * @param { Callback<observer.WindowSizeLayoutBreakpointInfo> } [callback] - 要移除的具体回调函数。
   *     如果未提供，则将移除给定事件类型和上下文下的所有回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 22 dynamic
   */
  off(type: 'windowSizeLayoutBreakpointChange', callback?: Callback<observer.WindowSizeLayoutBreakpointInfo>): void;

  /**
   * 注册一个回调函数，当特定节点的渲染状态发生变化时调用。
   * 此回调将在注册成功时立即执行一次。
   * [注意事项]：
   * 1. 注意节点数量的限制：
   * 出于性能考虑，系统对单个UI实例中可以注册用于监控的节点数量进行了限制，如果超过限制将抛出异常。请谨慎使用此接口。
   * 2. 了解可能不会发生通知的场景：
   * 通常，在具有视图或页面切换功能的容器组件中，当屏幕内的视图或页面被移出屏幕时，屏幕内之前的组件应从渲染树中移除，并应收到RENDER_OUT通知。然而，这并不总是如此，因为某些场景涉及视图或组件被移出屏幕显示范围而不会触发RENDER_OUT通知。
   *
   * @param { 'nodeRenderState' } type - The type of event to listen for.
   * @param { NodeIdentity } nodeIdentity - The identity of the target node
   * @param { NodeRenderStateChangeCallback } callback - The callback function to be called
   *                                                    when the clickEvent will be trigger or after.
   * @throws { BusinessError } 161001 - The count of nodes monitoring render state is over the limitation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  on(type: 'nodeRenderState', nodeIdentity: NodeIdentity, callback: NodeRenderStateChangeCallback): void;

  /**
   * Removes a callback function to be called before tapGesture is called.
   *
   * @param { 'nodeRenderState' } type - The type of event to remove the listener for.
   * @param { NodeIdentity } nodeIdentity - The identity of the target node
   * @param { NodeRenderStateChangeCallback } [callback] - The callback function to remove. If not provided,
   *                                                      all callbacks for the given event type will be removed.
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
   * Registers a callback to monitor the gesture trigger information.
   *
   * @param { GestureListenerType } type - The type of gesture to monitor.
   * @param { GestureObserverConfigs } option - The options when bind the global listener.
   * @param { GestureListenerCallback } callback - The callback function to be called when any gesture's state
   *                                               is updated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  addGlobalGestureListener(type: GestureListenerType,
      option: GestureObserverConfigs, callback: GestureListenerCallback): void;

  /**
   * 移除一个手势监听器类型的回调函数。
   *
   * @param { GestureListenerType } type - The type of event to remove the listener for.
   * @param { GestureListenerCallback } [callback] - The callback function to be removed. If not provided,
   *                                                      all callbacks for the given gesture type will be removed.
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
 * class ComponentUtils
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
 * class ComponentUtils
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
export class ComponentUtils {

  /**
   * 提供获取组件绘图区域的坐标和大小的能力。
   *
   * @param { string } id - 需要获取属性的组件ID。
   * @returns { componentUtils.ComponentInfo } the object of ComponentInfo.
   * @throws { BusinessError } 100001 - UI execution context not found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 10
   */
  /**
   * 提供获取组件绘图区域的坐标和大小的能力。
   *
   * @param { string } id - 需要获取属性的组件ID。
   * @returns { componentUtils.ComponentInfo } the object of ComponentInfo.
   * @throws { BusinessError } 100001 - UI execution context not found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  getRectangleById(id: string): componentUtils.ComponentInfo;
}

/**
 * class OverlayManager
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
   * @param { ComponentContent } content - 	Content to add to the new node on the OverlayManager.
   * <p><strong>NOTE</strong>:
   * <br>By default, the new node is centered on the page and stacked according to its stacking level.
   * </p>
   *
   * @param { number } [ index ] - Stacking level of the new node on the OverlayManager.
   * <p><strong>NOTE</strong>:
   * <br>If the value is greater than or equal to 0, a larger value indicates a higher stacking level; for those that
   * have the same index, the one that is added at a later time has a higher stacking level. If the value is less than
   * 0 or is null or undefined, the ComponentContent node is added at the highest level by default. If the same
   * ComponentContent node is added multiple times, only the last added one is retained.
   * </p>
   *
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
   * @param { ComponentContent } content - Content to add to the new node on the OverlayManager.
   * <p><strong>NOTE</strong>:
   * <br>By default, the new node is centered on the page and stacked according to its stacking level.
   * </p>
   *
   * @param { LevelOrder } [ levelOrder ] - The display order of the ComponentContDisplay order of the new floating
   * layer node, default is LevelOrder.clamp(0)
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
   * @param { ComponentContent } content - Content to remove from the OverlayManager.
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
   * @param { ComponentContent } content - The content will be shown.
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
   * @param { ComponentContent } content - The content will be hidden.
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
   *     <p><strong>注意</strong>：
   *     <br>默认情况下，新节点在页面中居中，并根据其堆叠级别进行堆叠。
   *     </p>
   * @param { OrderOverlayOptions } [options] - 浮层的选项。
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
 * @interface AtomicServiceBar
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
/**
 * interface AtomicServiceBar
 * @interface AtomicServiceBar
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
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
   * @since 11
   */
  /**
   * Set the background color of the bar.
   *
   * @param { Nullable< Color | number | string> } color - the color to set, undefined indicates using default.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  setBackgroundColor(color: Nullable< Color | number | string>): void;

  /**
   * Set the title of the bar.
   *
   * @param { string } content - the content of the bar.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 11
   */
  /**
   * Set the title of the bar.
   *
   * @param { string } content - the content of the bar.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  setTitleContent(content: string): void;

  /**
   * Set the font style of the bar's title.
   *
   * @param { FontStyle } font - the font style of the bar's title.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 11
   */
  /**
   * Set the font style of the bar's title.
   *
   * @param { FontStyle } font - the font style of the bar's title.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  setTitleFontStyle(font: FontStyle): void;

  /**
   * Set the color of the icon on the bar.
   *
   * @param { Nullable< Color | number | string> } color - the color to set to icon, undefined indicates using default.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 11
   */
  /**
   * Set the color of the icon on the bar.
   *
   * @param { Nullable< Color | number | string> } color - the color to set to icon, undefined indicates using default.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
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
 * 当触发一个特定的手势回调时，提供的信息。
 *
 * @interface GestureTriggerInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export interface GestureTriggerInfo {

  /**
   * The gesture event object.
   *
   * @type { GestureEvent }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  event: GestureEvent;

  /**
   * 手势识别器对象。您可以从该对象中获取手势的详细信息，但请不要将此对象保存在本地，因为当节点释放时，该对象可能不可用。
   *
   * @type { GestureRecognizer }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  current: GestureRecognizer;

  /**
   * 手势回调阶段。
   *
   * @type { GestureActionPhase }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  currentPhase: GestureActionPhase;

  /**
   * The node which the gesture is being triggered on.
   *
   * @type { ?FrameNode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  node?: FrameNode;
}

/**
 * The observer options for global gesture listener.
 *
 * @interface GestureObserverConfigs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export interface GestureObserverConfigs {

  /**
   * 想要监控手势回调阶段。只有当手势被触发时，才能通知特定的动作阶段。
   * 如果提供空数组，则注册将没有任何效果。
   *
   * @type { Array<GestureActionPhase> }
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
 * class DragController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 11
 */
/**
 * class DragController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12
 */
/**
 * class DragController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export class DragController {

  /**
   * Execute a drag event.
   * @param { CustomBuilder | DragItemInfo } custom - Object used for prompts displayed when the object is dragged.
   * @param { dragController.DragInfo } dragInfo - Information about the drag event.
   * @param { AsyncCallback<{ event: DragEvent, extraParams: string }> } callback - Callback that contains
   * the drag event information.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal handling failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 11
   */
  /**
   * Execute a drag event.
   * @param { CustomBuilder | DragItemInfo } custom - Object used for prompts displayed when the object is dragged.
   * @param { dragController.DragInfo } dragInfo - Information about the drag event.
   * @param { AsyncCallback<dragController.DragEventParam> } callback - Callback that contains
   * the drag event information.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal handling failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * Execute a drag event.
   * @param { CustomBuilder | DragItemInfo } custom - Object used for prompts displayed when the object is dragged.
   * @param { dragController.DragInfo } dragInfo - Information about the drag event.
   * @param { AsyncCallback<dragController.DragEventParam> } callback - Callback that contains
   * the drag event information.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal handling failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  executeDrag(custom: CustomBuilder | DragItemInfo, dragInfo: dragController.DragInfo,
    callback: AsyncCallback<dragController.DragEventParam>): void;

  /**
   * Create one drag action object, which can be used for starting drag later or monitoring the drag status after drag started.
   * @param { Array<CustomBuilder | DragItemInfo> } customArray - Objects used for prompts displayed when the objects are dragged.
   * @param { dragController.DragInfo } dragInfo - Information about the drag event.
   * @returns { dragController.DragAction } one drag action object
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal handling failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 11
   */
  /**
   * Create one drag action object, which can be used for starting drag later or monitoring the drag status after drag started.
   * @param { Array<CustomBuilder | DragItemInfo> } customArray - Objects used for prompts displayed when the objects are dragged.
   * @param { dragController.DragInfo } dragInfo - Information about the drag event.
   * @returns { dragController.DragAction } one drag action object
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal handling failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * Create one drag action object, which can be used for starting drag later or monitoring the drag status after drag started.
   * @param { Array<CustomBuilder | DragItemInfo> } customArray - Objects used for prompts displayed when the objects are dragged.
   * @param { dragController.DragInfo } dragInfo - Information about the drag event.
   * @returns { dragController.DragAction } one drag action object
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal handling failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  createDragAction(customArray: Array<CustomBuilder | DragItemInfo>, dragInfo: dragController.DragInfo): dragController.DragAction;

  /**
   * Get a drag preview object, which provides the functions of setting color or updating animation and has no effect in OnDrop and OnDragEnd callback.
   * @returns { dragController.DragPreview } A drag preview object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 11
   */
  /**
   * Get a drag preview object.
   * @returns { dragController.DragPreview } A drag preview object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * Get a drag preview object.
   * @returns { dragController.DragPreview } A drag preview object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  getDragPreview(): dragController.DragPreview;

  /**
   * 为拖拽进入和离开通知启用拖动事件严格报告。
   * 例如，父子都注册了onDragEnter/onDragLeave事件，如果这
   * 标志被启用，则父对象将收到休假事件通知，子对象将收到
   * 同时输入事件，当用户拖动操作通过父级时，输入
   * 孩子的范围。
   * 请注意，该标志的默认值为false，它意味着，对于相同的情况，
   * 父类不会收到请假通知，只有子类可以收到进入事件，这个事件是
   * 并不完全严格。
   *
   * @param { boolean } enable - 是否启用拖拽事件严格上报。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setDragEventStrictReportingEnabled(enable: boolean): void;

  /**
   * Notify the drag start request to specific pending or continue.
   * @param { dragController.DragStartRequestStatus } requestStatus - Status about the drag start behavior.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  notifyDragStartRequest(requestStatus: dragController.DragStartRequestStatus): void;

  /**
   * 通过传入数据密钥作为标识，取消UDMF数据同步过程，只有在删除后才能使用。
   *
   * @param { string } key - startDataLoading方法返回的数据键。
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 190004 - Operation failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  cancelDataLoading(key: string): void;

  /**
   * 中断挂起的后续变形放下动画并立即触发完成序列。
   *
   * @returns { boolean } 如果成功中断，则返回true，如果没有挂起，则返回false
   *     后续的变形掉落动画来中断。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interruptFollowHandMorphDropAnimation(): boolean;

  /**
   * 设置是否启用禁用徽章图标显示。
   * 通常，当一个组件可以接收或处理用户拖动的数据，或者当它通过返回 `DragBehavior.COPY` 向系统声明数据应以 COPY 方式处理时，系统会在拖动对象的左上角显示一个加号和数据数量；如果向系统返回 `DragBehavior.MOVE` 以声明数据应以 CUT 方式处理，系统则仅在拖动对象的左上角显示数据数量。
   * 在某些情况下，当系统确定或组件明确声明无法处理用户正在拖动的数据时，系统会以与 `DragBehavior.MOVE` 相同的方式显示徽章图标。
   * 因此，如果您希望更清晰地显示状态，可以提前在 UI 实例上调用此方法，强制系统在这些情况下在左上角显示一个明确的禁止图标，用户可以清楚地知道该数据无法处理。
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   * @param { boolean } enabled - 指示是否显示不允许状态。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  enableDropDisallowedBadge(enabled: boolean): void;

  /**
   * Execute a drag event.
   * @param { CustomBuilder | DragItemInfo } custom - Object used for prompts displayed when the object is dragged.
   * @param { dragController.DragInfo } dragInfo - Information about the drag event.
   * @returns { Promise<{ event: DragEvent, extraParams: string }> } A Promise with the drag event information.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal handling failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Execute a drag event.
   * @param { CustomBuilder | DragItemInfo } custom - Object used for prompts displayed when the object is dragged.
   * @param { dragController.DragInfo } dragInfo - Information about the drag event.
   * @returns { Promise<dragController.DragEventParam> } A Promise with the drag event information.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal handling failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  /**
   * Execute a drag event.
   * @param { CustomBuilder | DragItemInfo } custom - Object used for prompts displayed when the object is dragged.
   * @param { dragController.DragInfo } dragInfo - Information about the drag event.
   * @returns { Promise<dragController.DragEventParam> } A Promise with the drag event information.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal handling failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  executeDrag(custom: CustomBuilder | DragItemInfo, dragInfo: dragController.DragInfo)
    : Promise<dragController.DragEventParam>;;

  /**
   * Execute a drag event.
   * @param { CustomBuilder | DragItemInfo } custom - Object used for prompts displayed when the object is dragged.
   * @param { dragController.DragInfo } dragInfo - Information about the drag event.
   * @returns { Promise<{ event: DragEvent, extraParams: string }> } A Promise with the drag event information.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal handling failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 11
   */
  /**
   * Execute a drag event.
   * @param { CustomBuilder | DragItemInfo } custom - Object used for prompts displayed when the object is dragged.
   * @param { dragController.DragInfo } dragInfo - Information about the drag event.
   * @returns { Promise<dragController.DragEventParam> } A Promise with the drag event information.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal handling failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * Execute a drag event.
   * @param { CustomBuilder | DragItemInfo } custom - Object used for prompts displayed when the object is dragged.
   * @param { dragController.DragInfo } dragInfo - Information about the drag event.
   * @returns { Promise<dragController.DragEventParam> } A Promise with the drag event information.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal handling failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  executeDrag(custom: CustomBuilder | DragItemInfo, dragInfo: dragController.DragInfo)
    : Promise<dragController.DragEventParam>;
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
   * @returns { SizeOptions } width and height for text to display.The return values for text width and height are both in px.
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
 * 类FocusController
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * 类FocusController
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export class FocusController {

  /**
   * 清除根容器的焦点。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * 清除根容器的焦点。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  clearFocus(): void;

  /**
   * 请求焦点到指定组件。
   *
   * @param { string } key - 组件的检查器Key。
   * @throws { BusinessError } 150001 - the component cannot be focused.
   * @throws { BusinessError } 150002 - This component has an unfocusable ancestor.
   * @throws { BusinessError } 150003 - the component is not on tree or does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * 请求焦点到指定组件。
   *
   * @param { string } key - 组件的检查器Key。
   * @throws { BusinessError } 150001 - the component cannot be focused.
   * @throws { BusinessError } 150002 - This component has an unfocusable ancestor.
   * @throws { BusinessError } 150003 - the component is not on tree or does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  requestFocus(key: string): void;

  /**
   * Activate focus style.
   * @param { boolean } isActive - activate/deactivate the focus style.
   * @param { boolean } [autoInactive] - deactivate the focus style when touch event or mouse event triggers, the default value is true.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  activate(isActive: boolean, autoInactive?: boolean): void;

  /**
   * Get whether the focus style is active.
   * @returns { boolean } Whether the focus style is active.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  isActive(): boolean;

  /**
   * Set whether to enable autofocus transfer.
   * @param { boolean } isAutoFocusTransfer - A Boolean value that indicates whether autofocus transfer is enabled.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  setAutoFocusTransfer(isAutoFocusTransfer: boolean): void;

  /**
   * 当组件本身无法消费按键事件时，设置按键事件的处理模式
   * @param { KeyProcessingMode } mode - 按键处理模式
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  setKeyProcessingMode(mode: KeyProcessingMode): void;
}

/**
 * Pointer style.
 *
 * @typedef {pointer.PointerStyle} PointerStyle
 * @syscap SystemCapability.MultimodalInput.Input.Pointer
 * @atomicservice
 * @since 12 dynamic
 */
export type PointerStyle = pointer.PointerStyle;

/**
 * class CursorController
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export class CursorController {

  /**
   * Restore default cursor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  restoreDefault(): void;

  /**
   * 设置光标样式。
   *
   * @param { PointerStyle } value - 光标样式枚举。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setCursor(value: PointerStyle): void;

  /**
   * 设置自定义光标样式。
   *
   * @param { image.PixelMap } value - 自定义光标样式。
   * @param { int } [focusX] - 自定义光标的焦点x。取值大于等于0。默认的
   *     值为0。
   * @param { int } [focusY] - 自定义光标的焦点y。取值大于等于0。默认的
   *     值为0。
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
 * The base context of an ability or an application. It allows access to
 * application-specific resources.
 *
 * @typedef { common.Context } Context
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export type Context = common.Context;

/**
 * class ComponentSnapshot
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
/**
 * class ComponentSnapshot
 *
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export class ComponentSnapshot {

  /**
   * 通过组件标识获取组件截图
   *
   * @param { string } id - Target component ID, set by developer through .id attribute.
   * @param { AsyncCallback<image.PixelMap> } callback - Callback that contains the snapshot in PixelMap format.
   * @param { componentSnapshot.SnapshotOptions } [options] - Define the snapshot options.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * 通过组件标识获取组件截图
   *
   * @param { string } id - Target component ID, set by developer through .id attribute.
   * @param { AsyncCallback<image.PixelMap> } callback - Callback that contains the snapshot in PixelMap format.
   * @param { componentSnapshot.SnapshotOptions } [options] - Define the snapshot options.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  get(id: string, callback: AsyncCallback<image.PixelMap>, options?: componentSnapshot.SnapshotOptions): void;

  /**
   * 通过组件标识获取截图
   *
   * @param { string } id - Target component ID, set by developer through .id attribute.
   * @param { componentSnapshot.SnapshotOptions } [options] - Define the snapshot options.
   * @returns { Promise<image.PixelMap> } A Promise with the snapshot in PixelMap format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * 通过组件标识获取截图
   *
   * @param { string } id - Target component ID, set by developer through .id attribute.
   * @param { componentSnapshot.SnapshotOptions } [options] - Define the snapshot options.
   * @returns { Promise<image.PixelMap> } A Promise with the snapshot in PixelMap format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  get(id: string, options?: componentSnapshot.SnapshotOptions): Promise<image.PixelMap>;

  /**
   * 通过一个离屏组件 builder 获取截图结果
   *
   * @param { CustomBuilder } builder - Builder function of a custom component.
   * @param { AsyncCallback<image.PixelMap> } callback - Callback that contains the snapshot in PixelMap format.
   * @param { number } [delay] - Defines the delay time to render the snapshot.
   * @param { boolean } [checkImageStatus] - Defines if check the image decoding status before taking snapshot.
   * @param { componentSnapshot.SnapshotOptions } [options] - Define the snapshot options.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The builder is not a valid build function.
   * @throws { BusinessError } 160001 - An image component in builder is not ready for taking a snapshot. The check for
   *     the ready state is required when the checkImageStatus option is enabled.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * 通过一个离屏组件 builder 获取截图结果
   *
   * @param { CustomBuilder } builder - Builder function of a custom component.
   * @param { AsyncCallback<image.PixelMap> } callback - Callback that contains the snapshot in PixelMap format.
   * @param { number } [delay] - Defines the delay time to render the snapshot.
   * @param { boolean } [checkImageStatus] - Defines if check the image decoding status before taking snapshot.
   * @param { componentSnapshot.SnapshotOptions } [options] - Define the snapshot options.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The builder is not a valid build function.
   * @throws { BusinessError } 160001 - An image component in builder is not ready for taking a snapshot. The check for
   *     the ready state is required when the checkImageStatus option is enabled.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options.
   * @throws { BusinessError } 160004 - isAuto(true) is not supported for offscreen node snapshots.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  createFromBuilder(builder: CustomBuilder, callback: AsyncCallback<image.PixelMap>,
    delay?: number, checkImageStatus?: boolean, options?: componentSnapshot.SnapshotOptions): void;

  /**
   * 从组件builder获取截图
   *
   * @param { CustomBuilder } builder - Builder function of a custom component.
   * @param { number } [delay] - Defines the delay time to render the snapshot.
   * @param { boolean } [checkImageStatus] - Defines if check the image decoding status before taking snapshot.
   * @param { componentSnapshot.SnapshotOptions } [options] - Define the snapshot options.
   * @returns { Promise<image.PixelMap> } A Promise with the snapshot in PixelMap format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The builder is not a valid build function.
   * @throws { BusinessError } 160001 - An image component in builder is not ready for taking a snapshot. The check for
   *     the ready state is required when the checkImageStatus option is enabled.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * 从组件builder获取截图
   *
   * @param { CustomBuilder } builder - Builder function of a custom component.
   * @param { number } [delay] - Defines the delay time to render the snapshot.
   * @param { boolean } [checkImageStatus] - Defines if check the image decoding status before taking snapshot.
   * @param { componentSnapshot.SnapshotOptions } [options] - Define the snapshot options.
   * @returns { Promise<image.PixelMap> } A Promise with the snapshot in PixelMap format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The builder is not a valid build function.
   * @throws { BusinessError } 160001 - An image component in builder is not ready for taking a snapshot. The check for
   *     the ready state is required when the checkImageStatus option is enabled.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options.
   * @throws { BusinessError } 160004 - isAuto(true) is not supported for offscreen node snapshots.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  createFromBuilder(builder: CustomBuilder, delay?: number,
    checkImageStatus?: boolean, options?: componentSnapshot.SnapshotOptions): Promise<image.PixelMap>;

  /**
   * 以同步模式截取指定组件的组件截图，
   * 此模式会阻塞主线程，请谨慎使用。该接口的最大等待时间为3秒，如果3秒后仍未返回，则会抛出异常
   *
   * @param { string } id - 目标组件ID，开发者可使用.id属性设置
   * @param { componentSnapshot.SnapshotOptions } [options] - 组件截图选项
   * @returns { image.PixelMap } The snapshot result in PixelMap format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @throws { BusinessError } 160002 - Timeout.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * 以同步模式截取指定组件的组件截图，
   * 此模式会阻塞主线程，请谨慎使用。该接口的最大等待时间为3秒，如果3秒后仍未返回，则会抛出异常
   *
   * @param { string } id - 目标组件ID，开发者可使用.id属性设置
   * @param { componentSnapshot.SnapshotOptions } [options] - 组件截图选项
   * @returns { image.PixelMap } The snapshot result in PixelMap format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @throws { BusinessError } 160002 - Timeout.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  getSync(id: string, options?: componentSnapshot.SnapshotOptions): image.PixelMap;

  /**
   * 通过组件uniqueID获取组件截图
   *
   * @param { number } uniqueId - 组件ID，可通过getUniqueId获取
   * @param { componentSnapshot.SnapshotOptions } [options] - 组件截图选项
   * @returns { Promise<image.PixelMap> } A Promise with the snapshot in PixelMap format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  /**
   * 通过组件uniqueID获取组件截图
   *
   * @param { number } uniqueId - 组件ID，可通过getUniqueId获取
   * @param { componentSnapshot.SnapshotOptions } [options] - 组件截图选项
   * @returns { Promise<image.PixelMap> } A Promise with the snapshot in PixelMap format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  getWithUniqueId(uniqueId: number, options?: componentSnapshot.SnapshotOptions): Promise<image.PixelMap>;

  /**
   * Take a screenshot of the specified component in synchronous mode,
   * this mode will block the main thread, please use it with caution, the maximum
   * waiting time of the interface is 3s, if it does not return after 3s, an exception will be thrown.
   *
   * @param { number } uniqueId - The uniqueId of the node, can get through getUniqueId.
   * @param { componentSnapshot.SnapshotOptions } [options] - Define the snapshot options.
   * @returns { image.PixelMap } The snapshot result in PixelMap format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @throws { BusinessError } 160002 - Timeout.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  /**
   * Take a screenshot of the specified component in synchronous mode,
   * this mode will block the main thread, please use it with caution, the maximum
   * waiting time of the interface is 3s, if it does not return after 3s, an exception will be thrown.
   *
   * @param { number } uniqueId - The uniqueId of the node, can get through getUniqueId.
   * @param { componentSnapshot.SnapshotOptions } [options] - Define the snapshot options.
   * @returns { image.PixelMap } The snapshot result in PixelMap format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @throws { BusinessError } 160002 - Timeout.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  getSyncWithUniqueId(uniqueId: number, options?: componentSnapshot.SnapshotOptions): image.PixelMap;

  /**
   * Generate a snapshot from a custom component content.
   *
   * @param { ComponentContent<T> } content - The content to be taken snapshot.
   * @param { number } [delay] - Defines the delay time to render the snapshot.
   * @param { boolean } [checkImageStatus] - Defines if check the image decoding status before taking snapshot.
   * @param { componentSnapshot.SnapshotOptions } [options] - Define the snapshot options.
   * @returns { Promise<image.PixelMap> } A Promise with the snapshot in PixelMap format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The builder is not a valid build function.
   * @throws { BusinessError } 160001 - An image component in builder is not ready for taking a snapshot. The check for
   *     the ready state is required when the checkImageStatus option is enabled.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  /**
   * Generate a snapshot from a custom component content.
   *
   * @param { ComponentContent<T> } content - The content to be taken snapshot.
   * @param { number } [delay] - Defines the delay time to render the snapshot.
   * @param { boolean } [checkImageStatus] - Defines if check the image decoding status before taking snapshot.
   * @param { componentSnapshot.SnapshotOptions } [options] - Define the snapshot options.
   * @returns { Promise<image.PixelMap> } A Promise with the snapshot in PixelMap format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The builder is not a valid build function.
   * @throws { BusinessError } 160001 - An image component in builder is not ready for taking a snapshot. The check for
   *     the ready state is required when the checkImageStatus option is enabled.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options.
   * @throws { BusinessError } 160004 - isAuto(true) is not supported for offscreen node snapshots.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  createFromComponent<T extends Object>(content: ComponentContent<T>, delay?: number,
    checkImageStatus?: boolean, options?: componentSnapshot.SnapshotOptions): Promise<image.PixelMap>;

  /**
   * 通过组件范围获取组件快照。
   *
   * @param { NodeIdentity } start - the start component ID, set by developer through .id attribute or the unique ID
   *     get from FrameNode.
   * @param { NodeIdentity } end - the end component ID, set by developer through.id attribute or the unique ID
   *     get from FrameNode.
   * @param { boolean } isStartRect - indicating the snapshot rect to use, true for using the
   *     rect of the start component, false for using the rect of the end component.
   * @param { componentSnapshot.SnapshotOptions } [options] - Define the snapshot options.
   * @returns { Promise<image.PixelMap> } A Promise with the snapshot in PixelMap format.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 100001 - Invalid ID detected.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  /**
   * 通过组件范围获取组件快照。
   *
   * @param { NodeIdentity } start - the start component ID, set by developer through .id attribute or the unique ID
   *     get from FrameNode.
   * @param { NodeIdentity } end - the end component ID, set by developer through.id attribute or the unique ID
   *     get from FrameNode.
   * @param { boolean } isStartRect - indicating the snapshot rect to use, true for using the
   *     rect of the start component, false for using the rect of the end component.
   * @param { componentSnapshot.SnapshotOptions } [options] - Define the snapshot options.
   * @returns { Promise<image.PixelMap> } A Promise with the snapshot in PixelMap format.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 100001 - Invalid ID detected.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  getWithRange(start: NodeIdentity, end: NodeIdentity, isStartRect: boolean,
    options?: componentSnapshot.SnapshotOptions): Promise<image.PixelMap>;

  /**
    * 查询组件截图大小限制。
    *
   * @returns { componentSnapshot.SnapshotSizeLimitation } The size limitation for taking a component snapshot.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getSizeLimitation(): componentSnapshot.SnapshotSizeLimitation;
}

/**
 * 类BaseGestureHandlingProposal。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export abstract class BaseGestureHandlingProposal {

  /**
   * 要执行的智能手势操作。定义手势触发的具体操作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  action: SmartGestureAction;

  /**
   * 底层的用户操作意图。表示基本的用户交互目标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  operateIntention: OperateIntention;
}

/**
 * 带目标目标手势操作建议。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export abstract class TargetedGestureProposal extends BaseGestureHandlingProposal {

  /**
   * 手势处理的目标节点。该节点将接收并处理手势事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  node: FrameNode;
}

/**
 * 类ClickActionProposal。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class ClickActionProposal extends TargetedGestureProposal {

  /**
   * ClickActionProposal构造函数。
   *
   * @param { FrameNode } node - 响应点击操作的节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(node: FrameNode);
}

/**
 * 类SelectActionProposal。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class SelectActionProposal extends TargetedGestureProposal {

  /**
   * SelectActionProposal构造函数。
   *
   * @param { FrameNode } node - 响应选择操作的节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(node: FrameNode);
}

/**
 * 类NoneActionProposal。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class NoneActionProposal extends BaseGestureHandlingProposal {

  /**
   * NoneActionProposal构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor();
}

/**
 * 类BackPressActionProposal。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class BackPressActionProposal extends BaseGestureHandlingProposal {

  /**
   * BackPressActionProposal构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor();
}

/**
 * 类PageSwitchActionProposal。默认的页面切换方向为向前。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class PageSwitchActionProposal extends TargetedGestureProposal {

  /**
   * PageSwitchActionProposal构造函数。
   *
   * @param { FrameNode } node - 响应页面切换动作的节点。
   * @param { int } pageCount - 要切换的页数。
   *     取值限定为整数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(node: FrameNode, pageCount: int);

  /**
   * 手势操作的页数参数。指定要向前导航的页数。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  pageCount: int;
}

/**
 * 类ScrollActionProposal。默认滚动方向为向前。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class ScrollActionProposal extends TargetedGestureProposal {

  /**
   * ScrollForwardActionProposal构造函数。
   *
   * @param { FrameNode } node - 响应滚动动作的节点。
   * @param { double } distance - 滚动或滑动的距离。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(node: FrameNode, distance: double);

  /**
   * 手势操作的距离参数。用于滚动或滑动等动作，以指定移动距离。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  distance?: double;
}

/**
 * 类手势处理解决方案。表示开发者对智能手势处理的决策结果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class GestureHandlingResolution {

  /**
   * GestureHandlingResolution构造函数。
   *
   * @param { boolean } isConsumed - 是否消费当前手势事件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(isConsumed: boolean);

  /**
   * 判断是否消费当前手势事件。如果手势没有被消费，它将通知
   * 不支持手势的消费者。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  isConsumed: boolean;

  /**
   * 开发者最终选择的手势处理方案。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  selectedProposal?: BaseGestureHandlingProposal;
}

/**
 * 类SmartGestureController。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class SmartGestureController {

  /**
   * 开启或关闭手表的智能点击和滑动手势。此开关控制点击和滑动手势的新实现。启用后，将使用新的智能手势处理流水线。禁用时，将使用传统实现以实现兼容性。
   *
   * @param { boolean } enabled - 是否启用智能点击和滑动手势处理。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  enableSmartTapAndSlideGestures(enabled: boolean): void;

  /**
   * 注册一个回调函数来监听手势事件。在系统处理手势事件之前，应用程序可以接收到当前手势的处理意图，并进行自定义干预。
   *
   * @param { Callback<BaseGestureHandlingProposal, GestureHandlingResolution> } monitorCallback - 手势识别时调用的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  registerMonitor(monitorCallback: Callback<BaseGestureHandlingProposal, GestureHandlingResolution>): void;

  /**
   * 注销监听手势事件的回调函数。
   *
   * @param { Callback<BaseGestureHandlingProposal, GestureHandlingResolution> } monitorCallback - 手势识别时调用的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  unregisterMonitor(monitorCallback: Callback<BaseGestureHandlingProposal, GestureHandlingResolution>): void;

  /**
   * 清除监听手势事件的回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  clearMonitors(): void;

  /**
   * 通过节点的标识符请求智能手势选择节点。
   *
   * @param { string } id - 要选择的节点的标识符。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  requestSelected(id: string): void;

  /**
   * 清除当前智能手势选择。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  clearSelected(): void;
}

/**
 * UIContext解析策略枚举
 *
 * @enum { number } strategy of resolved UIContext.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export const enum ResolveStrategy {

  /**
   * 获取调用作用域的UIContext
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  CALLING_SCOPE = 0,

  /**
   * 获取最后获得焦点的UI实例的UIContext
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  LAST_FOCUS = 1,

  /**
   * 获取实例ID最大的UIContext
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  MAX_INSTANCE_ID = 2,

  /**
   * 获取唯一UI实例的UIContext
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  UNIQUE = 3,

  /**
   * 获取最后进入前台的UI实例的UIContext
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  LAST_FOREGROUND = 4,

  /**
   * 获取未定义调用作用域的UIContext
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
 * UIContext.resolveUIContext接口的返回值类型，属于UIContext类型的子类，额外包含获取该UIContext的解析策略。
 *
 * @extends UIContext
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
export class ResolvedUIContext extends UIContext {

  /**
   * UIContext的解析策略
   *
   * @type { ResolveStrategy }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  strategy: ResolveStrategy;
}

/**
 * Enum of KeyBoardAvoidMethodType
 *
 * @enum { number } KeyBoardAvoidMethodType
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
  CLEAR_SELECTED_TEXT_ON_EXTERNAL_TOUCH = 1,
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
 * @enum { number } MarqueeDynamicSyncSceneType
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
 * @enum { number } NodeRenderState
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
 * 这是一个枚举类型，表示要触发的手势回调阶段，对应于 gesture.d.ts 中定义的动作回调。因此，并非所有手势类型都具有以下所有阶段定义。例如，SwipeGesture 只有一个名为 onAction 的回调，因此它也只有一个枚举类型，即 WILL_START。
 *
 * @enum { number } GestureActionPhase
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
 * 这是一个枚举类型，用于指示您要监视哪种手势。
 *
 * @enum { number } GestureListenerType
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
 * @enum { number } CustomKeyboardContinueFeature
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

/**
 * 动画组状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export const enum AnimationGroupStatus {

  /**
   * 动画组空闲。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  IDLE = 0,

  /**
   * 动画组正在运行。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  RUNNING = 1,

  /**
   * 动画组暂停。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  PAUSED = 2,

  /**
   * 动画组已停止。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  STOPPED = 3,

  /**
   * 动画组完成。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  FINISHED = 4
}

/**
 * 定义动画组类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export class AnimationGroup {

  /**
   * 添加animateTo动画。
   *
   * @param { AnimateParam } param - 动画参数。
   * @param { Callback<void> } processor - 动画关闭。
   * @param { AnimationChildOptions } [options] - 子动画选项。
   * @returns { AnimationItem } 动画项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  addAnimateTo(param: AnimateParam, processor: Callback<void>, options?: AnimationChildOptions): AnimationItem;

  /**
   * 添加keyframeAnimateTo动画。
   *
   * @param { KeyframeAnimateParam } param - 关键帧动画参数。
   * @param { Array<KeyframeState> } keyframes - 关键帧的数组。
   * @param { AnimationChildOptions } [options] - 子动画选项。
   * @returns { AnimationItem } 动画项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  addKeyframeAnimateTo(param: KeyframeAnimateParam, keyframes: Array<KeyframeState>,
    options?: AnimationChildOptions): AnimationItem;

  /**
   * 获取所有子动画。
   *
   * @returns { Array<AnimationItem> } Array of child animations.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getAnimations(): Array<AnimationItem>;

  /**
   * 通过ID获取动画。
   *
   * @param { string } id - 动画ID。
   * @returns { AnimationItem | undefined } Animation with specified ID, or undefined if not found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getAnimation(id: string): AnimationItem | undefined;

  /**
   * 移除动画。
   *
   * @param { AnimationItem } animation - 要移除的动画。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  removeAnimation(animation: AnimationItem): void;

  /**
   * 按ID移除动画。
   *
   * @param { string } id - 动画ID。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  removeAnimationById(id: string): void;

  /**
   * 清除所有子动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  clearAnimations(): void;

  /**
   * 播放动画组。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  play(): void;

  /**
   * 暂停动画组。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  pause(): void;

  /**
   * 停止动画组。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  stop(): void;

  /**
   * 获取动画组状态。
   *
   * @returns { AnimationGroupStatus } Animation group status.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getStatus(): AnimationGroupStatus;
}

/**
 * 动画组模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export const enum AnimationGroupMode {

  /**
   * 并行执行模式。所有动画同时开始。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  PARALLEL = 0,

  /**
   * 顺序执行模式。动画陆续开始。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  SEQUENTIAL = 1,

  /**
   * 自定义执行模式。动画在自定义beginTime开始。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  CUSTOM = 2
}

/**
 * 定义动画项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface AnimationItem {

  /**
   * 获取动画ID。
   *
   *
   *
   *
   * @returns { string } Animation ID.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getId(): string;

  /**
   * 播放动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  play(): void;

  /**
   * 暂停动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  pause(): void;

  /**
   * 停止动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  stop(): void;
}

/**
 * 动画组选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface AnimationGroupParams {

  /**
   * 动画组执行模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  mode: AnimationGroupMode;

  /**
   * 动画组的总持续时间（以毫秒为单位）。
   * 如果未设置，子动画使用自己的持续时间。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  duration?: int;

  /**
   * 以毫秒为单位的开始延迟。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  delay?: int;

  /**
   * 顺序模式下动画之间的间隔时间，以毫秒为单位。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  interval?: int;

  /**
   * 重复计数。-1表示无限循环。
   *
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  repeatCount?: int;

  /**
   * 是否自动回退。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  autoreverses?: boolean;

  /**
   * 完成回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onFinish?: Callback<void>;

  /**
   * 开始回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onStart?: Callback<void>;

  /**
   * 重复回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onRepeat?: Callback<void>;
}

/**
 * 动画子选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface AnimationChildOptions {

  /**
   * 动画ID。如果没有设置，则会自动生成ID。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  id?: string;
}

/**
 * Class FrameCallback
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export abstract class FrameCallback {}

/**
 * UIContext类
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
 * UIContext类
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
export class UIContext {}