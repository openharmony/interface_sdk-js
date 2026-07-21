
'use static';
/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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

import { TextPickerDialogOptions, TextPickerDialogOptionsExt } from '@ohos.arkui.component';

import { ClickEvent, ExpectedFrameRateRange, DragItemInfo, AnimateParam, KeyframeAnimateParam, KeyframeState,
  SheetOptions, PopupCommonOptions, MenuOptions, KeyEvent, MouseEvent, TouchEvent,
  ContentCoverOptions } from '@ohos.arkui.component';

import { InputEventMonitor, InputEventListener } from '@ohos.arkui.component';

import { CustomBuilder, CustomBuilderT } from '@ohos.arkui.component';

import { GestureEvent, GestureRecognizer } from '@ohos.arkui.component';

import { ResourceStr, SizeOptions, VoidCallback } from '@ohos.arkui.component';

import { Nullable, Color, FontStyle, WidthBreakpoint, HeightBreakpoint, PixelRoundMode, RawInputEventType } from '@ohos.arkui.component';

import { TimePickerDialogOptions } from '@ohos.arkui.component';

import { AlertDialogParamWithConfirm, AlertDialogParamWithButtons, AlertDialogParamWithOptions } from '@ohos.arkui.component';

import { ActionSheetOptions } from '@ohos.arkui.component';

import { AnimatorOptions, AnimatorResult } from './@ohos.animator';

import { LocalStorage } from '@ohos.arkui.stateManagement';

import { DatePickerDialogOptions } from '@ohos.arkui.component';

import { TabsController } from '@ohos.arkui.component';

import { Scroller } from '@ohos.arkui.component';

import { KeyProcessingMode } from '@ohos.arkui.component';

import { TextMenuOptions, TextLayoutOptions, StyledString, Paragraph } from '@ohos.arkui.component';

import { SmartGestureAction, OperateIntention } from '@ohos.arkui.component';

import type { Callback } from './arkui/component/common';

import type { AsyncCallback } from './@ohos.base';

import mediaQuery from './@ohos.mediaquery';

import type inspector from './@ohos.arkui.inspector';

import type observer from '@ohos.arkui.observer';

import promptAction from './@ohos.promptAction';

import { LevelOrder, LevelMode } from './@ohos.promptAction';

import router from './@ohos.router';

import type componentUtils from './@ohos.arkui.componentUtils';

import { SimpleAnimatorOptions } from './@ohos.animator';

import font from './@ohos.font';

import { MeasureOptions } from './@ohos.measure';

import type componentSnapshot from './@ohos.arkui.componentSnapshot';

import type dragController from './@ohos.arkui.dragController';

import image from './@ohos.multimedia.image';

import type common from './@ohos.app.ability.common';

import type pointer from './@ohos.multimodalInput.pointer';

import { ComponentContent, FrameNode, Frame } from '@ohos.arkui.node';

import { ComponentContentBase } from 'arkui.ComponentContent';

/**
 * class Font
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class Font {

  /**
   * Register a customized font in the FontManager.
   *
   * @param { font.FontOptions } options - FontOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  registerFont(options: font.FontOptions): void;

  /**
   * Gets a list of fonts supported by system.
   * @returns { Array<string> } A list of font names
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getSystemFontList(): Array<string>;

  /**
   * Get font details according to the font name.
   * @param { string } fontName - font name
   * @returns { font.FontInfo } Returns the font info
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getFontByName(fontName: string): font.FontInfo;
}

/**
 * class MediaQuery
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class MediaQuery {

  /**
   * Sets the media query criteria and returns the corresponding listening handle
   *
   * @param { string } condition - media conditions
   * @returns { mediaQuery.MediaQueryListener } the corresponding listening handle
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  matchMediaSync(condition: string): mediaQuery.MediaQueryListener;
}

/**
* class UIInspector
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class UIInspector {

  /**
   * 创建当前节点或者当前节点的子节点的布局和送显的事件监听句柄。
   *
   * @param { string } id - 当前节点的inspector key或者唯一id。
   * @returns { inspector.ComponentObserver } Component observer, which is used to register or unregister listeners
   *     for completion of component layout or drawing display.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  createComponentObserver(id: string): inspector.ComponentObserver;

  /**
   * 创建当前节点或者当前节点的子节点的布局和送显的事件监听句柄。
   *
   * @param { string | int } id - 当前节点的inspector key或者唯一id。
   * @returns { inspector.ComponentObserver } Component observer, which is used to register or unregister listeners
   *     for completion of component layout or drawing display.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  createComponentObserver(id: string | int): inspector.ComponentObserver;
}

/**
* 提供通过不同的url访问不同的页面，包括跳转到应用内的指定页面、同应用内的某个页面替换当前页面、返回上一页面或指定的页面等。
* > **说明：**
* >
* > - 本Class首批接口从API version 10开始支持。
* >
* > - 以下API需先使用UIContext中的[getRouter()](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取
* > 到Router对象，再通过该对象调用对应方法。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class Router {

  /**
   * 跳转到应用内的指定页面。使用callback异步回调。
   *
   * @param { router.RouterOptions } options - 跳转页面描述信息。
   * @param { AsyncCallback<void> } callback - router跳转结果回调函数。<br/>当路由跳转成功时，error为undefined。当路由跳转失败时，error为系统返回的错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100002 - Uri error. The URI of the page to redirect is incorrect or does not exist
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pushUrl(options: router.RouterOptions, callback: AsyncCallback<void>): void;

  /**
   * 跳转到应用内的指定页面，使用Promise异步回调。
   *
   * @param { router.RouterOptions } options - 跳转页面描述信息，包含url（目标页面路径）和params（传递的参数）等字段。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100002 - Uri error. The URI of the page to redirect is incorrect or does not exist
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pushUrl(options: router.RouterOptions): Promise<void>;

  /**
   * 跳转到应用内的指定页面。使用callback异步回调。与
   * [pushUrl]{@link Router#pushUrl(options: router.RouterOptions, callback:
   * AsyncCallback<void>)}相比，新增了mode参数，即支持设置跳转页面使用的模式。
   *
   * @param { router.RouterOptions } options - 跳转页面描述信息。
   * @param { router.RouterMode } mode - 跳转页面使用的模式，可选Standard（标准模式）或Single（单例模式）。建议根据页面栈管理需求选择：Standard模式适用于常规页面跳转；Single模式可避免相同页面重复入栈，适合登录页、主页等单例场景。
   * @param { AsyncCallback<void> } callback - router跳转结果回调函数。<br/>当路由跳转成功时，error为undefined。当路由跳转失败时，error为系统返回的错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100002 - Uri error. The URI of the page to redirect is incorrect or does not exist
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pushUrl(options: router.RouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void;

  /**
   * 跳转到应用内的指定页面，使用Promise异步回调。与[pushUrl]{@link Router#pushUrl(options:
   * router.RouterOptions)}相比，新增了mode参数，即支持设置跳转页面使用的模式。
   *
   * @param { router.RouterOptions } options - 跳转页面描述信息。
   * @param { router.RouterMode } mode - 跳转页面使用的模式，可选Standard（标准模式）或Single（单例模式）。建议根据页面栈管理需求选择：Standard模式适用于常规页面跳转；Single模式可避免相同页面重复入栈，适合登录页、主页等单例场景。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100002 - Uri error. The URI of the page to redirect is incorrect or does not exist
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pushUrl(options: router.RouterOptions, mode: router.RouterMode): Promise<void>;

  /**
   * 用应用内的某个页面替换当前页面，并销毁被替换的页面。使用callback异步回调。
   *
   * @param { router.RouterOptions } options - 替换页面描述信息。
   * @param { AsyncCallback<void> } callback - router跳转结果回调函数。<br/>当路由跳转成功时，error为undefined。当路由跳转失败时，error为系统返回的错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the standard system.
   * @throws { BusinessError } 200002 - Uri error. The URI of the page to be used for replacement is incorrect or does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  replaceUrl(options: router.RouterOptions, callback: AsyncCallback<void>): void;

  /**
   * 用应用内的某个页面替换当前页面，并销毁被替换的页面，使用Promise异步回调。
   *
   * @param { router.RouterOptions } options - 替换页面描述信息。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the standard system.
   * @throws { BusinessError } 200002 - Uri error. The URI of the page to be used for replacement is incorrect or does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  replaceUrl(options: router.RouterOptions): Promise<void>;

  /**
   * 用应用内的某个页面替换当前页面，并销毁被替换的页面。使用callback异步回调。与[replaceUrl]{@link Router#replaceUrl(options: router.RouterOptions,
   * callback: AsyncCallback<void>)}相比，新增了mode参数，即支持设置跳转页面使用的模式。
   *
   * @param { router.RouterOptions } options - 替换页面描述信息。
   * @param { router.RouterMode } mode - 跳转页面使用的模式，可选Standard（标准模式）或Single（单例模式）。建议根据页面栈管理需求选择：Standard模式适用于常规页面跳转；Single模式可避免相同页面重复入栈，适合登录页、主页等单例场景。
   * @param { AsyncCallback<void> } callback - router跳转结果回调函数。<br/>当路由跳转成功时，error为undefined。当路由跳转失败时，error为系统返回的错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the standard system.
   * @throws { BusinessError } 200002 - Uri error. The URI of the page to be used for replacement is incorrect or does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  replaceUrl(options: router.RouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void;

  /**
   * 用应用内的某个页面替换当前页面，并销毁被替换的页面，使用Promise异步回调。与[replaceUrl]{@link Router#replaceUrl(options:
   * router.RouterOptions)}相比，新增了mode参数，即支持设置跳转页面使用的模式。
   *
   * @param { router.RouterOptions } options - 替换页面描述信息。
   * @param { router.RouterMode } mode - 跳转页面使用的模式，可选Standard（标准模式）或Single（单例模式）。建议根据页面栈管理需求选择：Standard模式适用于常规页面跳转；Single模式可避免相同页面重复入栈，适合登录页、主页等单例场景。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Failed to get the delegate. This error code is thrown only in the standard system.
   * @throws { BusinessError } 200002 - Uri error. The URI of the page to be used for replacement is incorrect or does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  replaceUrl(options: router.RouterOptions, mode: router.RouterMode): Promise<void>;

  /**
   * 返回上一页面或指定的页面。
   *
   * @param { router.RouterOptions } options - 返回页面描述信息。当需要返回到指定的页面时传入此参数（通过url指定目标页面）；当只需返回上一页时可以不传入此参数。url指定返回的目标页面：若页面栈中存在该url，则返回至index最大的同名页面；若不存在则不响应操作。若url未设置，则返回上一页（页面不会重新构建，出栈后会被回收）。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  back(options?: router.RouterOptions): void;

  /**
   * 返回指定页面。
   *
   * @param { int } index - 跳转目标页面的索引值，从0开始计数（注意：与getStateByIndex的index参数不同，后者从1开始计数）。
   *     <br>取值范围:[0, +∞)。如果index超出页面栈范围或不存在对应页面，则不响应用户操作。
   * @param { Object } [params] - 页面返回时携带的参数。不传入时不携带参数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  back(index: int, params?: Object): void;

  /**
   * 清空页面栈中的所有历史页面，仅保留当前页面作为栈顶页面。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  clear(): void;

  /**
   * 获取当前在页面栈内的页面数量。
   * > **说明：**
   * > 从API version 10开始支持，从 API version 23开始废弃，建议使用[getStackSize]{@link Router#getStackSize}替代。
   *
   * @returns { string } 页面数量，页面栈支持最大数值是32。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getLength(): string;

  /**
   * 获取当前页面栈内的页面数量。
   *
   * @returns { int } 页面数量，页面栈支持最大数值是32。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getStackSize(): int;

  /**
   * 获取当前页面的状态信息。
   *
   * @returns { router.RouterState } Page state.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getState(): router.RouterState;

  /**
   * 通过索引值获取对应页面的状态信息。
   *
   * @param { int } index - 表示要获取的页面索引。
   *     <br>取值应为≥0的整数。
   * @returns { router.RouterState | undefined } Page state.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getStateByIndex(index: int): router.RouterState | undefined;

  /**
   * 通过url获取匹配指定url的页面的状态信息。
   *
   * @param { string } url - 表示要获取对应页面信息的url，需使用应用内页面路径格式。如果页面栈中没有对应url的页面，返回空数组。
   * @returns { Array<router.RouterState> } Page state.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getStateByUrl(url: string): Array<router.RouterState>;

  /**
   * 开启页面返回询问对话框。
   *
   * @param { router.EnableAlertOptions } options - 文本弹窗信息描述。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  showAlertBeforeBackPage(options: router.EnableAlertOptions): void;

  /**
   * 禁用页面返回询问对话框。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  hideAlertBeforeBackPage(): void;

  /**
   * 获取发起跳转的页面往当前页传入的参数。
   *
   * @returns { Object } 发起跳转的页面往当前页传入的参数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getParams(): Object;

  /**
   * 跳转到指定的命名路由页面。使用callback异步回调。
   *
   * @param { router.NamedRouterOptions } options - 跳转页面描述信息。
   * @param { AsyncCallback<void> } callback - router跳转结果回调函数。<br/>当路由跳转成功时，error为undefined。当路由跳转失败时，error为系统返回的错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pushNamedRoute(options: router.NamedRouterOptions, callback: AsyncCallback<void>): void;

  /**
   * 跳转到指定的命名路由页面，使用Promise异步回调。
   *
   * @param { router.NamedRouterOptions } options - 跳转页面描述信息。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pushNamedRoute(options: router.NamedRouterOptions): Promise<void>;

  /**
   * 跳转到指定的命名路由页面。使用callback异步回调。与 [pushNamedRoute]{@link Router#pushNamedRoute(options: router.NamedRouterOptions,
   * callback: AsyncCallback<void>)}相比， 新增了mode参数，即支持设置跳转页面使用的模式。
   *
   * @param { router.NamedRouterOptions } options - 跳转页面描述信息。
   * @param { router.RouterMode } mode - 跳转页面使用的模式。
   * @param { AsyncCallback<void> } callback - router跳转结果回调函数。<br/>当路由跳转成功时，error为undefined。当路由跳转失败时，error为系统返回的错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pushNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void;

  /**
   * 跳转到指定的命名路由页面，使用Promise异步回调。与[pushNamedRoute]{@link Router#pushNamedRoute(options:
   * router.NamedRouterOptions)}相比，新增了mode参数，即支持设置跳转页面使用的模式。
   *
   * @param { router.NamedRouterOptions } options - 跳转页面描述信息。
   * @param { router.RouterMode } mode - 跳转页面使用的模式。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 100003 - Page stack error. Too many pages are pushed.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  pushNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode): Promise<void>;

  /**
   * 用指定的命名路由页面替换当前页面，并销毁被替换的页面。使用callback异步回调。
   *
   * @param { router.NamedRouterOptions } options - 替换页面描述信息。
   * @param { AsyncCallback<void> } callback - router跳转结果回调函数。<br/>当路由跳转成功时，error为undefined。当路由跳转失败时，error为系统返回的错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the standard system.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  replaceNamedRoute(options: router.NamedRouterOptions, callback: AsyncCallback<void>): void;

  /**
   * 用指定的命名路由页面替换当前页面，并销毁被替换的页面，使用Promise异步回调。
   *
   * @param { router.NamedRouterOptions } options - 替换页面描述信息。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not string.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the standard system.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  replaceNamedRoute(options: router.NamedRouterOptions): Promise<void>;

  /**
   * 用指定的命名路由页面替换当前页面，并销毁被替换的页面。使用callback异步回调。与[replaceNamedRoute]{@link Router#replaceNamedRoute(options:
   * router.NamedRouterOptions, callback: AsyncCallback<void>)}相比，新增了mode参数，即支持设置跳转页面使用的模式。
   *
   * @param { router.NamedRouterOptions } options - 替换页面描述信息。
   * @param { router.RouterMode } mode - 跳转页面使用的模式。
   * @param { AsyncCallback<void> } callback - router跳转结果回调函数。<br/>当路由跳转成功时，error为undefined。当路由跳转失败时，error为系统返回的错误对象。
   * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not string.
   * @throws { BusinessError } 100001 - The UI execution context is not found. This error code is thrown only in the standard system.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
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
   * @throws { BusinessError } 100001 - Failed to get the delegate. This error code is thrown only in the standard system.
   * @throws { BusinessError } 100004 - Named route error. The named route does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  replaceNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode): Promise<void>;
}

/**
 * Defines the custom builder with id.
 *
 * @typedef { function } CustomBuilderWithId
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
declare type CustomBuilderWithId = (id: int) => void;

/**
* 指定组件绑定的目标节点。
*
 * @interface TargetInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface TargetInfo {

  /**
   * 指定popup或menu绑定的目标节点。
   *
   * **说明：**
   *
   * 1. 当id是number时，对应组件实例的UniqueID，此id由系统保证唯一性。
   * 2. 当id是string时，对应[通用属性id]{@link CommonMethod#id}所指定的组件，此id的唯一性需由开发者确保，但实际可能会有多个。
   *
   * @type { string | int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  id: string | int;

  /**
   * 目标节点所在的自定义组件的UniqueID。当上述id指定为string类型时，可通过此属性圈定范围。方便开发者在一定范围内保证id: string的唯一性。
   *
   * @type { ?int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  componentId?: int;
}

/**
* 创建并显示即时反馈、对话框、操作菜单以及自定义弹窗。
*
* > **说明：**
* >
* > - 本Class首批接口从API version 10开始支持。
* >
* > - 以下API需先使用UIContext中的[getPromptAction()]{@link @ohos.arkui.UIContext:UIContext#getPromptAction}方法获取到PromptAction对
* > 象，再通过该对象调用对应方法。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class PromptAction {

  /**
   * 创建并显示即时反馈。
   *
   * @param { promptAction.ShowToastOptions } options - Toast选项。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  showToast(options: promptAction.ShowToastOptions): void;

  /**
   * 显示即时反馈。使用Promise异步回调返回即时反馈的id，可供closeToast使用。
   *
   * @param { promptAction.ShowToastOptions } options - Toast选项。
   * @returns { Promise<int> } Promise对象。返回即时反馈的id，可供closeToast使用。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  openToast(options: promptAction.ShowToastOptions): Promise<int>;

  /**
   * 关闭即时反馈。
   *
   * @param { int } toastId - openToast返回的id。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 103401 - Cannot find the toast.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  closeToast(toastId: int): void;

  /**
   * 弹出对话框。
   *
   * @param { promptAction.ShowDialogOptions } options - 页面显示对话框信息描述。
   * @param { AsyncCallback<promptAction.ShowDialogSuccessResponse> } callback - 回调函数。弹出对话框成功，err为undefined，data为获取到的对话框响应结果，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  showDialog(options: promptAction.ShowDialogOptions,
    callback: AsyncCallback<promptAction.ShowDialogSuccessResponse>): void;

  /**
   * 弹出对话框。
   *
   * @param { promptAction.ShowDialogOptions } options - 对话框选项。
   * @returns { Promise<promptAction.ShowDialogSuccessResponse> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  showDialog(options: promptAction.ShowDialogOptions): Promise<promptAction.ShowDialogSuccessResponse>;

  /**
   * 显示操作菜单。
   *
   * @param { promptAction.ActionMenuOptions } options - 操作菜单选项。
   * @param { AsyncCallback<promptAction.ActionMenuSuccessResponse> } callback - 回调函数。弹出操作菜单成功，err为undefined，data为获取到的操作菜单响应结果，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  showActionMenu(options: promptAction.ActionMenuOptions,
    callback: AsyncCallback<promptAction.ActionMenuSuccessResponse>): void;

  /**
   * 显示操作菜单。
   *
   * @param { promptAction.ActionMenuOptions } options - 操作菜单选项。
   * @returns { Promise<promptAction.ActionMenuSuccessResponse> } callback - the callback of showActionMenu.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  showActionMenu(options: promptAction.ActionMenuOptions): Promise<promptAction.ActionMenuSuccessResponse>;

  /**
   * 使用frameNode打开自定义对话框。
   *
   * @param { ComponentContent<T> } dialogContent - 自定义弹窗中显示的组件内容。
   * @param { promptAction.BaseDialogOptions } options - 弹窗样式。
   *   <br>**说明：** 如果BaseDialogOptions中的[isModal](docroot://reference/apis-arkui/js-apis-promptAction.md#basedialogoptions11)
   *   与[showInSubWindow](docroot://reference/apis-arkui/js-apis-promptAction.md#basedialogoptions11)同时设置为true，
   *   则只生效showInSubWindow = true，此时为非模态弹出框且不会显示蒙层，并在子窗口中显示。
   * @returns { Promise<void> } 函数返回的promise。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The ComponentContent is incorrect.
   * @throws { BusinessError } 103302 - Dialog content already exists.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  openCustomDialog<T extends Object>(dialogContent: ComponentContent<T>,
    options?: promptAction.BaseDialogOptions): Promise<void>;

  /**
   * 打开带有frameNode和控制器的自定义对话框。
   *
   * @param { ComponentContent<T> } dialogContent - 自定义弹窗中显示的组件内容。
   * @param { promptAction.DialogController } controller - 自定义弹窗的控制器。
   * @param { promptAction.BaseDialogOptions } options - 自定义弹窗的样式。
   *    <br>**说明：** 如果BaseDialogOptions中的[isModal](docroot://reference/apis-arkui/js-apis-promptAction.md#basedialogoptions11)
   *    与[showInSubWindow](docroot://reference/apis-arkui/js-apis-promptAction.md#basedialogoptions11)同时设置为true，
   *    则只生效showInSubWindow = true，此时为非模态弹出框且不会显示蒙层，并在子窗口中显示。
   * @returns { Promise<void> } 函数返回的promise。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The ComponentContent is incorrect.
   * @throws { BusinessError } 103302 - Dialog content already exists.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  openCustomDialogWithController<T extends Object>(dialogContent: ComponentContent<T>,
    controller: promptAction.DialogController,
    options?: promptAction.BaseDialogOptions): Promise<void>;

  /**
   * 更新已弹出的dialogContent对应的自定义弹窗的样式，使用Promise异步回调。
   *
   * @param { ComponentContent<T> } dialogContent - 自定义弹窗中显示的组件内容。
   * @param { promptAction.BaseDialogOptions } options - 弹窗样式，目前仅支持更新alignment、offset、autoCancel、maskColor。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The ComponentContent is incorrect.
   * @throws { BusinessError } 103303 - The ComponentContent cannot be found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  updateCustomDialog<T extends Object>(dialogContent: ComponentContent<T>,
    options: promptAction.BaseDialogOptions): Promise<void>;

  /**
   * 关闭已弹出的dialogContent对应的自定义弹窗，使用Promise异步回调。
   *
   * @param { ComponentContent<T> } dialogContent - 自定义弹窗中显示的组件内容。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The ComponentContent is incorrect.
   * @throws { BusinessError } 103303 - The ComponentContent cannot be found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  closeCustomDialog<T extends Object>(dialogContent: ComponentContent<T>): Promise<void>;

  /**
   * 打开自定义对话框。
   *
   * @param { promptAction.CustomDialogOptions } options - 自定义弹窗的内容。
   *   <br>**说明：** 如果BaseDialogOptions中的[isModal](docroot://reference/apis-arkui/js-apis-promptAction.md#basedialogoptions11)
   *   与[showInSubWindow](docroot://reference/apis-arkui/js-apis-promptAction.md#basedialogoptions11)同时设置为true，
   *   则只生效showInSubWindow = true，此时为非模态弹出框且不会显示蒙层，并在子窗口中显示。
   * @returns { Promise<int> } 返回closeCustomDialog可以使用的对话框ID。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  openCustomDialog(options: promptAction.CustomDialogOptions): Promise<int>;

  /**
   * 使用控制器显示自定义对话框。
   *
   * @param { CustomBuilder | CustomBuilderT<int> } builder - 自定义弹窗的内容。
   * @param { promptAction.DialogController } [controller] - 自定义弹窗的控制器。
   * @param { promptAction.DialogOptions } [options] - 自定义弹窗的样式。
   *    <br>**说明：** 如果BaseDialogOptions中的[isModal](docroot://reference/apis-arkui/js-apis-promptAction.md#basedialogoptions11)
   *    与[showInSubWindow](docroot://reference/apis-arkui/js-apis-promptAction.md#basedialogoptions11)同时设置为true，
   *    则只生效showInSubWindow = true，此时为非模态弹出框且不会显示蒙层，并在子窗口中显示。
   * @returns { Promise<int> } 返回将由closeCustomDialog使用的对话框ID。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  presentCustomDialog(builder: CustomBuilder | CustomBuilderT<int>, controller?: promptAction.DialogController,
    options?: promptAction.DialogOptions): Promise<int>;

  /**
   * 关闭自定义弹窗。
   *
   * @param { int } dialogId - openCustomDialog返回的对话框id。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  closeCustomDialog(dialogId: int): void;

  /**
   * 返回最顶层显示的弹窗的顺序。
   *
   * 获取最顶层显示的弹窗的顺序，可以在下一个弹窗时指定期望的顺序。
   *
   * @returns { LevelOrder | undefined } the display order, or undefined if there is no dialog.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getTopOrder(): LevelOrder | undefined;

  /**
   * 获取最底层显示的弹窗的顺序，可以在下一个弹窗时指定期望的顺序。
   *
   * @returns { LevelOrder | undefined } the display order, or undefined if there is no dialog.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  getBottomOrder(): LevelOrder | undefined;

  /**
   * 创建并弹出以content作为内容的Popup弹窗，使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > - 使用该接口时，若未传入有效的target，则无法弹出popup弹窗。
   * >
   * > - 由于[updatePopup](docroot://reference/apis-arkui/arkts-apis-uicontext-promptaction copy.md#updatepopup18)和
   * > [closePopup](docroot://reference/apis-arkui/arkts-apis-uicontext-promptaction copy.md#closepopup18)依赖content去更新或者关闭
   * > 指定的popup弹窗，开发者需自行维护传入的content。
   * >
   * > - 如果在wrapBuilder中包含其他组件（例如：[Popup]{@link @ohos.arkui.advanced.Popup}、[Chip]{@link @ohos.arkui.advanced.Chip}组件），则
   * > [ComponentContent]{@link ComponentContent:ComponentContent}应采用带有四个参数的构造函数constructor，其中options参数应传递{
   * > nestingBuilderSupported: true }。
   *
   * @param { ComponentContent<T> } content - popup弹窗中显示的组件内容。
   * @param { TargetInfo } target - 需要绑定组件的信息。
   * @param { PopupCommonOptions } options - popup弹窗样式。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The content is incorrect.
   * @throws { BusinessError } 103302 - The content already exists.
   * @throws { BusinessError } 103304 - The target does not exist.
   * @throws { BusinessError } 103305 - The target node is not in the component tree.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  openPopup<T extends Object>(content: ComponentContent<T>, target: TargetInfo,
    options?: PopupCommonOptions): Promise<void>;

  /**
   * 更新content对应的Popup弹窗的样式，使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 不支持更新showInSubWindow、focusable、onStateChange、onWillDismiss、transition。
   *
   * @param { ComponentContent<T> } content - popup弹窗中显示的组件内容。
   * @param { PopupCommonOptions } options - popup弹窗样式。<br/>**说明：** <br/>不支持更新showInSubWindow、focusable、onStateChange、onWillDismiss、transition。
   * @param { boolean } partialUpdate - popup弹窗更新方式，默认值为false。
   *    <br/>**说明：** <br/>true：增量更新，此时更新options中的指定属性，其它属性保留当前值。options中传入的属性为异常值或undefined时，不会对该属性进行更新。
   *    <br/>false：全量更新，此时更新options中的指定属性，并且其他属性恢复默认值。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The ComponentContent is incorrect.
   * @throws { BusinessError } 103303 - The ComponentContent cannot be found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  updatePopup<T extends Object>(content: ComponentContent<T>, options: PopupCommonOptions,
    partialUpdate?: boolean): Promise<void>;

  /**
   * 关闭content对应的Popup弹窗，使用Promise异步回调。
   *
   * @param { ComponentContent<T> } content - popup弹窗中显示的组件内容。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The ComponentContent is incorrect.
   * @throws { BusinessError } 103303 - The ComponentContent cannot be found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  closePopup<T extends Object>(content: ComponentContent<T>): Promise<void>;

  /**
   * 创建并弹出以content作为内容的Menu弹窗。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > - 使用该接口时，若未传入有效的target，则无法弹出menu弹窗。
   * >
   * > - 由于[updateMenu](docroot://reference/apis-arkui/arkts-apis-uicontext-promptaction copy.md#updatemenu18)和
   * > [closeMenu](docroot://reference/apis-arkui/arkts-apis-uicontext-promptaction copy.md#closemenu18)依赖content去更新或者关闭指定
   * > 的menu弹窗，开发者需自行维护传入的content。
   * >
   * > - 如果在wrapBuilder中包含其他组件（例如：[Popup]{@link @ohos.arkui.advanced.Popup}、[Chip]{@link @ohos.arkui.advanced.Chip}组件），则
   * > [ComponentContent]{@link ComponentContent:ComponentContent}应采用带有四个参数的构造函数constructor，其中options参数应传递{
   * > nestingBuilderSupported: true }。
   * >
   * > - 子窗弹窗里不能再弹出子窗弹窗，例如[openMenu](docroot://reference/apis-arkui/arkts-apis-uicontext-promptaction copy.md#openmenu18)设
   * > 置了showInSubWindow为true时，则不能再弹出另一个设置了showInSubWindow为true的弹窗。
   *
   * @param { ComponentContent<T> } content - menu弹窗中显示的组件内容。
   * @param { TargetInfo } target - 需要绑定组件的信息。
   * @param { MenuOptions } options - menu弹窗样式。<br/>**说明：**<br/>title属性不生效。<br/>preview参数仅支持设置MenuPreviewMode类型。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The content is incorrect.
   * @throws { BusinessError } 103302 - The content already exists.
   * @throws { BusinessError } 103304 - The target does not exist.
   * @throws { BusinessError } 103305 - The target node is not in the component tree.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  openMenu<T extends Object>(content: ComponentContent<T>, target: TargetInfo, options?: MenuOptions): Promise<void>;

  /**
   * 更新content对应的Menu弹窗的样式。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > - 不支持更新showInSubWindow、preview、previewAnimationOptions、transition、onAppear、aboutToAppear、onDisappear、
   * > aboutToDisappear、onWillAppear、onDidAppear、onWillDisappear和onDidDisappear。
   * >
   * > - 支持mask通过设置[MenuMaskType]{@link MenuMaskType}实现更新蒙层样式，不支持mask通过设置boolean实现蒙层从无到有或者从有到无的更新。
   *
   * @param { ComponentContent<T> } content - menu弹窗中显示的组件内容。
   * @param { MenuOptions } options - menu弹窗样式。<br/>**说明：**
   *  <br/>1. 不支持更新showInSubWindow、preview、previewAnimationOptions、transition、onAppear、aboutToAppear、onDisappear、
   *        aboutToDisappear、onWillAppear、onDidAppear、onWillDisappear和onDidDisappear。
   *  <br/>2. 支持mask通过设置[MenuMaskType]{@link MenuMaskType}实现更新蒙层样式，不支持mask通过设置boolean实现蒙层从无到有或者从有到无的更新。
   * @param { boolean } partialUpdate - menu弹窗更新方式，默认值为false。<br/>**说明：**
   *    <br/>1. true为增量更新，保留当前值，更新options中的指定属性。
   *    <br/>2. false为全量更新，除options中的指定属性，其他属性恢复默认值。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The ComponentContent is incorrect.
   * @throws { BusinessError } 103303 - The ComponentContent cannot be found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  updateMenu<T extends Object>(content: ComponentContent<T>, options: MenuOptions,
    partialUpdate?: boolean): Promise<void>;

  /**
   * 关闭content对应的Menu弹窗。使用Promise异步回调。
   *
   * @param { ComponentContent<T> } content - menu弹窗中显示的组件内容。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The ComponentContent is incorrect.
   * @throws { BusinessError } 103303 - The ComponentContent cannot be found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  closeMenu<T extends Object>(content: ComponentContent<T>): Promise<void>;
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
 * @since 26.0.0 static
 */
type ClickEventListenerCallback = (event: ClickEvent, node?: FrameNode) => void;

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
 * @since 26.0.0 static
 */
type PanListenerCallback = (event: GestureEvent, current: GestureRecognizer, node?: FrameNode) => void;

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
 * @since 26.0.0 static
 */
type GestureEventListenerCallback = (event: GestureEvent, node?: FrameNode) => void;

/**
* Router和NavDestination等页面信息，若无对应的Router或NavDestination页面信息，则对应属性为undefined。
*
 * @interface PageInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface PageInfo {

  /**
   * Router信息。
   *
   * @type { ?observer.RouterPageInfo }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  routerPageInfo?: observer.RouterPageInfo;

  /**
   * NavDestination信息。
   *
   * @type { ?observer.NavDestinationInfo }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  navDestinationInfo?: observer.NavDestinationInfo;
}

/**
* 初始化[OverlayManager]{@link @ohos.arkui.UIContext}时所用参数。
*
 * @interface OverlayManagerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface OverlayManagerOptions {

  /**
   * 是否渲染overlay根节点，true表示渲染overlay根节点，false表示不渲染overlay根节点，默认值为true。
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  renderRootOverlay?: boolean;

  /**
   * 是否支持通过侧滑手势关闭OverlayManager下的ComponentContent，true表示可以通过侧滑关闭，false表示不可以通过侧滑关闭，默认值为false。
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  enableBackPressedEvent?: boolean;
}

/**
 * 使用顺序打开浮层的选项。
 *
 * @interface OrderOverlayOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface OrderOverlayOptions {

  /**
   * 浮层的显示顺序。
   *
   * @type { ?LevelOrder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  levelOrder?: LevelOrder;

  /**
   * 浮层的显示模式。
   *
   * @type { ?LevelMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  levelMode?: LevelMode;

  /**
   * 路由器或导航页面中任何节点的唯一ID。
   *
   * @type { ?int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  levelUniqueId?: int;
}

/**
 * Defines the type can be used for identiting the node, for the string type, it's the inspector id
 * set through .id attribute, and for the int type, it's the unique ID got from the FrameNode by
 * getUniqueID method.
 *
 * @typedef { string | int } NodeIdentity
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare type NodeIdentity = string | int;

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
 * @since 26.0.0 static
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
   * @since 26.0.0 static
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
   * @since 26.0.0 static
   */
  ABOUT_TO_RENDER_OUT = 1
}

/**
 * Defines the callback type used in UIObserver to monitor one specific node's render state.
 *
 * @typedef { function } NodeRenderStateChangeCallback
 * @param { NodeRenderState } state - the node's render state
 * @param { FrameNode } [node] - the information of frameNode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare type NodeRenderStateChangeCallback = (state: NodeRenderState, node?: FrameNode) => void;

/**
 * This is an enumeration type representing the gesture callback phases to be triggered, corresponding to
 * the action callbacks defined in gesture.d.ts. Therefore, not all gesture types have all the following
 * phase definitions. For example, SwipeGesture only has one callback named onAction, so it also only has
 * one enumeration type, which is WILL_START.
 *
 * @enum { number } GestureActionPhase
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export const enum GestureActionPhase {

  /**
   * The gesture has been successfully recognized by the system, and the action-start/action callback will be
   * executed immediately.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  WILL_START = 0,

  /**
   * This indicates the gesture has been determined to be an end, which usually happens when the user lifts their
   * fingers, ending the entire interaction, and the action-end callback will be executed immediately.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  WILL_END = 1
}

/**
 * This is an enumeration type indicating what kind of gesture you want to monitor for.
 *
 * @enum { number } GestureListenerType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export const enum GestureListenerType {

  /**
   * The tap gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  TAP = 0,

  /**
   * The long press gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  LONG_PRESS = 1,

  /**
   * The pan gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  PAN = 2,

  /**
   * The pinch gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  PINCH = 3,

  /**
   * The swipe gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SWIPE = 4,

  /**
   * The rotation gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  ROTATION = 5
}

/**
* 特定手势回调函数触发时的信息。
*
 * @interface GestureTriggerInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface GestureTriggerInfo {

  /**
   * 手势事件对象。
   *
   * @type { GestureEvent }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  event: GestureEvent;

  /**
   * 手势识别器对象。可从中获取手势的详细信息，但请勿在本地保留此对象，因为当节点释放后该对象可能失效。
   *
   * @type { GestureRecognizer }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  current: GestureRecognizer;

  /**
   * 手势动作回调阶段。
   *
   * @type { GestureActionPhase }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  currentPhase: GestureActionPhase;

  /**
   * 触发手势的节点。默认值为null，表示没有触发手势的节点。
   *
   * @type { ?FrameNode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  node?: FrameNode;
}

/**
* 该参数用于指定需要监听的手势回调阶段（传入空数组将无效），仅当手势触发指定阶段时才会发送通知。
*
 * @interface GestureObserverConfigs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface GestureObserverConfigs {

  /**
   * 手势事件对象。
   *
   * @type { Array<GestureActionPhase> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  actionPhases: Array<GestureActionPhase>;
}

/**
 * Defines the callback type used in UIObserver to monitor specific gesture triggered information.
 *
 * @typedef { function } GestureListenerCallback
 * @param { GestureTriggerInfo } info - the gesture details triggered with user interaction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare type GestureListenerCallback = (info: GestureTriggerInfo) => void;

/**
 * 注册回调来观察ArkUI的行为。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class UIObserver {

  /**
   * Registers a callback function to be called when the navigation destination is updated.
   *
   * @param { observer.NavDestinationSwitchObserverOptions } options - The options object.
   * @param { Callback<observer.NavDestinationInfo> } callback - The callback function to be called
   *     when the navigation destination is updated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onNavDestinationUpdate(
    options: observer.NavDestinationSwitchObserverOptions,
    callback: Callback<observer.NavDestinationInfo>
    ): void;

  /**
   * Removes a callback function that was previously registered with `onNavDestinationUpdate`.
   *
   * @param { observer.NavDestinationSwitchObserverOptions } options - The options object.
   * @param { Callback<observer.NavDestinationInfo> } [callback] - The callback function to remove. 
   *     If not provided, all callbacks for the given event type and navigation ID will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offNavDestinationUpdate(
    options: observer.NavDestinationSwitchObserverOptions,
    callback?: Callback<observer.NavDestinationInfo>
    ): void;

  /**
   * Registers a callback function to be called when the navigation destination is updated.
   *
   * @param { Callback<observer.NavDestinationInfo> } callback - The callback function to be called
   *     when the navigation destination is updated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onNavDestinationUpdate(callback: Callback<observer.NavDestinationInfo>): void;

  /**
   * Removes a callback function that was previously registered with `onNavDestinationUpdate`.
   *
   * @param { Callback<observer.NavDestinationInfo> } [callback] - The callback function to remove. 
   *     If not provided, all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offNavDestinationUpdate(callback?: Callback<observer.NavDestinationInfo>): void;

  /**
   * Registers a callback function to be called when the navigation destination is updated.
   *
   * @param { int } navigationUniqueId - The uniqueId of the navigation.
   * @param { Callback<observer.NavDestinationInfo> } callback - The callback function to be called when
   *     the navigation destination is updated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onNavDestinationUpdateByUniqueId(navigationUniqueId: int, callback: Callback<observer.NavDestinationInfo>): void;

  /**
   * Removes a callback function that was previously registered with `onNavDestinationUpdateByUniqueId`.
   *
   * @param { int } navigationUniqueId - The uniqueId of the navigation.
   * @param { Callback<observer.NavDestinationInfo> } [callback] - The callback function to remove. If not provided,
   *     all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offNavDestinationUpdateByUniqueId(navigationUniqueId: int, callback?: Callback<observer.NavDestinationInfo>): void;

  /**
   * Registers a callback function to be called when the scroll event starts or stops.
   *
   * @param { observer.ObserverOptions } options - The options object.
   * @param { Callback<observer.ScrollEventInfo> } callback - The callback function to be called when the scroll event
   *     start or stop.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onScrollEvent(options: observer.ObserverOptions, callback: Callback<observer.ScrollEventInfo>): void;

  /**
   * Removes a callback function that was previously registered with `onScrollEvent()`.
   *
   * @param { 'scrollEvent'} type - The type of event to remove the listener for. Must be 'scrollEvent'.
   * @param { Callback<observer.ScrollEventInfo> } [callback] - The callback function to remove. If not provided, all
   *     callbacks for the given event type and scroll ID will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offScrollEvent(options: observer.ObserverOptions, callback?: Callback<observer.ScrollEventInfo>): void;

  /**
   * Registers a callback function to be called when the scroll event starts or stops.
   *
   * @param { Callback<observer.ScrollEventInfo> } callback - The callback function to be called when the scroll event
   *     start or stop.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onScrollEvent(callback: Callback<observer.ScrollEventInfo>): void;

  /**
   * Removes a callback function that was previously registered with `onScrollEvent()`.
   *
   * @param { Callback<observer.ScrollEventInfo> } [callback] - The callback function to remove. If not provided, all
   *     callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offScrollEvent(callback?: Callback<observer.ScrollEventInfo>): void;

  /**
   * Registers a callback function to be called when the router page in a ui context is updated.
   *
   * @param { Callback<observer.RouterPageInfo> } callback - The callback function to be called
   *     when the router page is updated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onRouterPageUpdate(callback: Callback<observer.RouterPageInfo>): void;

  /**
   * Removes a callback function that was previously registered with `onRouterPageUpdate`.
   *
   * @param { Callback<observer.RouterPageInfo> } [callback] - The callback function to remove. If not provided,
   *     all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offRouterPageUpdate(callback?: Callback<observer.RouterPageInfo>): void;

  /**
   * Registers a callback function to be called when the screen density in a ui context is updated.
   *
   * @param { Callback<observer.DensityInfo> } callback - The callback function to be called when the screen density is
   *     updated.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDensityUpdate(callback: Callback<observer.DensityInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { Callback<observer.DensityInfo> } [callback] - The callback function to remove. If not provided, all
   *     callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offDensityUpdate(callback?: Callback<observer.DensityInfo>): void;

  /**
   * Registers a callback function to be called when the draw command will be drawn.
   *
   * @param { Callback<void> } callback - The callback function to be called when the draw command will be drawn.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onWillDraw(callback: Callback<void>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { Callback<void> } [callback] - The callback function to remove. If not provided, all callbacks for the
   *     given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offWillDraw(callback?: Callback<void>): void;

  /**
   * Registers a callback function to be called when the layout is done.
   *
   * @param { Callback<void> } callback - The callback function to be called when the layout is done.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDidLayout(callback: Callback<void>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { Callback<void> } [callback] - The callback function to remove. If not provided, all callbacks for the
   *     given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offDidLayout(callback?: Callback<void>): void;

  /**
   * Registers a callback function to be called when the navigation switched to a new navDestination.
   *
   * @param { Callback<observer.NavDestinationSwitchInfo> } callback - The callback function to be called when
   *     the navigation switched to a new navDestination.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onNavDestinationSwitch(callback: Callback<observer.NavDestinationSwitchInfo>): void;

  /**
   * Removes a callback function that was previously registered with `onNavDestinationSwitch`.
   *
   * @param { Callback<observer.NavDestinationSwitchInfo> } [callback] - The callback function to remove. 
   *     If not provided, all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offNavDestinationSwitch(callback?: Callback<observer.NavDestinationSwitchInfo>): void;

  /**
   * Registers a callback function to be called when the navigation switched to a new navDestination.
   *
   * @param { observer.NavDestinationSwitchObserverOptions } observerOptions - Options.
   * @param { Callback<observer.NavDestinationSwitchInfo> } callback - The callback function to be called when the
   *     navigation switched to a new navDestination.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onNavDestinationSwitch(
    observerOptions: observer.NavDestinationSwitchObserverOptions,
    callback: Callback<observer.NavDestinationSwitchInfo>
  ): void;

  /**
   * Removes a callback function that was previously registered with `onNavDestinationSwitch`.
   *
   * @param { observer.NavDestinationSwitchObserverOptions } observerOptions - Options.
   * @param { Callback<observer.NavDestinationSwitchInfo> } [callback] - The callback function to remove. 
   *     If not provided, all callbacks for the given event type will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offNavDestinationSwitch(
    observerOptions: observer.NavDestinationSwitchObserverOptions,
    callback?: Callback<observer.NavDestinationSwitchInfo>
  ): void;

  /**
   * 注册一个回调函数，当窗口大小布局断点改变时调用。
   * 此方法允许观察窗口大小断点的变化，可用于
   * 根据窗口尺寸调整UI布局。
   *
   * @param { Callback<observer.WindowSizeLayoutBreakpointInfo> } callback - 当窗口大小布局断点更改时调用的回调函数。回调函数接收到一个包含当前宽度和高度断点类型的{@link WindowSizeLayoutBreakpointInfo}对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @since 24 static
   */
  onWindowSizeLayoutBreakpointChange(callback: Callback<observer.WindowSizeLayoutBreakpointInfo>): void;

  /**
   * 移除之前注册的窗口大小布局断点更改的回调函数。
   * 如果没有提供回调，则将删除指定上下文的所有回调。
   *
   * @param { Callback<observer.WindowSizeLayoutBreakpointInfo> } [callback] - 要删除的特定回调函数。
   *     如果未提供，则将删除给定事件类型和上下文的所有回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @since 24 static
   */
  offWindowSizeLayoutBreakpointChange(callback?: Callback<observer.WindowSizeLayoutBreakpointInfo>): void;

  /**
   * Registers a callback function to be called when the tabContent is showed or hidden.
   *
   * @param { observer.ObserverOptions } options - The options object.
   * @param { Callback<observer.TabContentInfo> } callback - The callback function to be called
   *     when the tabContent show or hide.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onTabContentUpdate(options: observer.ObserverOptions, callback: Callback<observer.TabContentInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { observer.ObserverOptions } options - The options object.
   * @param { Callback<observer.TabContentInfo> } [callback] - The callback function to remove. If not provided,
   *     all callbacks for the given event type and Tabs ID will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offTabContentUpdate(options: observer.ObserverOptions, callback?: Callback<observer.TabContentInfo>): void;

  /**
   * Registers a callback function to be called when the tabContent is showed or hidden.
   *
   * @param { Callback<observer.TabContentInfo> } callback - The callback function to be called
   *     when the tabContent is showed or hidden.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onTabContentUpdate(callback: Callback<observer.TabContentInfo>): void;

  /**
   * Removes a callback function that was previously registered with `on()`.
   *
   * @param { Callback<observer.TabContentInfo> } [callback] - The callback function to remove. If not provided,
   *     all callbacks for the given event type and Tabs ID will be removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offTabContentUpdate(callback?: Callback<observer.TabContentInfo>): void;

  /**
   * 注册一个回调函数，当文本字段的内容被更改时将被调用。
   *
   * @param { Callback<observer.TextChangeEventInfo> } callback - 在以下情况下要调用的回调函数：
   *     文本字段的内容被更改。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  onTextChange(callback: Callback<observer.TextChangeEventInfo>): void;

  /**
   * 删除以前使用`on()`注册的回调函数。
   *
   * @param { Callback<observer.TextChangeEventInfo> } [callback] - 要删除的回调函数。如果不提供，
   *     将删除给定事件类型的所有回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  offTextChange(callback?: Callback<observer.TextChangeEventInfo>): void;

  /**
   * 注册一个回调函数，当文本字段的内容被更改时将被调用。
   *
   * @param { observer.ObserverOptions } identity - 身份选项。
   * @param { Callback<observer.TextChangeEventInfo> } callback - 回调函数在
   *     文本字段的内容被更改时调用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  onTextChange(identity: observer.ObserverOptions, callback: Callback<observer.TextChangeEventInfo>): void;

  /**
   * 删除以前使用`on()`注册的回调函数。
   *
   * @param { observer.ObserverOptions } identity - 身份选项。
   * @param { Callback<observer.TextChangeEventInfo> } [callback] - 要删除的回调函数。如果不提供，
   *     将删除给定事件类型的所有回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  offTextChange(identity: observer.ObserverOptions, callback?: Callback<observer.TextChangeEventInfo>): void;

  /**
   * 注册一个用于监听界面中的手势触发的监听器
   *
   * @param { GestureListenerType } type - 要监听的手势类型
   * @param { GestureObserverConfigs } option - 全局监听的选项
   * @param { GestureListenerCallback } callback - 监听回调函数
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  addGlobalGestureListener(type: GestureListenerType,
      option: GestureObserverConfigs, callback: GestureListenerCallback): void;

  /**
   * 删除指定类型的手势监听器
   *
   * @param { GestureListenerType } type - 要监听的事件类型
   * @param { GestureListenerCallback } [callback] - 要移除的回调函数。如果未提供该参数，则将移除给定事件类型的所有回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  removeGlobalGestureListener(type: GestureListenerType, callback?: GestureListenerCallback): void;

  /**
   * 注册一个回调函数，当 tabContent 显示或隐藏时被调用。包括tabs首次加载时的tabContent显示情况以及 tabs 索引切换时tabContent显示情况。
   *
   * @param { observer.ObserverOptions } config - 选项对象。包含监听的tabs组件ID。
   * @param { Callback<observer.TabContentInfo> } callback - 回调函数。当 tabContent 显示或隐藏时被调用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onTabChange(config: observer.ObserverOptions, callback: Callback<observer.TabContentInfo>): void;

  /**
   * 移除之前通过 `onTabChange` 注册的回调函数。
   *
   * @param { observer.ObserverOptions } config - 选项对象。包含监听的tabs组件ID。
   * @param { Callback<observer.TabContentInfo> } [callback] - 要移除的回调函数。
   * 如果未提供该参数，则将移除该tabs id的所有'tabChange'无感监听回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offTabChange(config: observer.ObserverOptions, callback?: Callback<observer.TabContentInfo>): void;

  /**
   * 注册一个回调函数，当 tabContent 显示或隐藏时被调用。包括tabs首次加载时的tabContent显示情况以及 tabs 索引切换时tabContent显示情况。
   *
   * @param { Callback<observer.TabContentInfo> } callback - 回调函数。当 tabContent 显示或隐藏时被调用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onTabChange(callback: Callback<observer.TabContentInfo>): void;

  /**
   * 移除之前通过 `onTabChange` 注册的回调函数。
   *
   * @param { Callback<observer.TabContentInfo> } [callback] - 要移除的回调函数。
   * 如果未提供该参数，则将移除所有tabs的所有'tabChange'无感监听回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offTabChange(callback?: Callback<observer.TabContentInfo>): void;

  /**
   * 监听Swiper内容的切换事件。使用callback异步回调。
   *
   * @param { Callback<SwiperContentInfo> } callback - 回调函数。携带SwiperContentInfo，返回Swiper内容切换的信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onSwiperContentUpdate(callback: Callback<SwiperContentInfo>): void;

  /**
   * 取消监听Swiper内容的切换事件。
   *
   * @param { Callback<SwiperContentInfo> } [callback] - 需要被注销的回调函数。不传参数时，取消该Swiper上所有的监听回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offSwiperContentUpdate(callback?: Callback<SwiperContentInfo>): void;

  /**
   * 通过Swiper组件的id监听Swiper内容的切换事件。使用callback异步回调。
   *
   * @param { observer.ObserverOptions } config - 指定监听的Swiper组件信息。
   * @param { Callback<SwiperContentInfo> } callback - 回调函数。携带SwiperContentInfo，返回Swiper内容切换的信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onSwiperContentUpdate(config: observer.ObserverOptions, callback: Callback<SwiperContentInfo>): void;

  /**
   * 取消通过Swiper组件id监听的Swiper内容切换事件。
   *
   * @param { observer.ObserverOptions } config - 指定监听的Swiper组件信息。
   * @param { Callback<SwiperContentInfo> } [callback] - 需要被注销的回调函数。不传参数时，取消该Swiper上所有的监听回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offSwiperContentUpdate(config: observer.ObserverOptions, callback?: Callback<SwiperContentInfo>): void;

  /**
   * 注册监听回调函数，当可见的Router页面大小发生变化时，会触发该回调函数。使用callback异步回调。
   *
   * @param { Callback<observer.RouterPageInfo> } callback - 回调函数。携带RouterPageInfo，返回Router页面的信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onRouterPageSizeChange(callback: Callback<observer.RouterPageInfo>): void;

  /**
   * 移除使用onRouterPageSizeChange接口注册的监听回调函数。使用callback异步回调。
   *
   * @param { Callback<observer.RouterPageInfo> } [callback] - 需要被移除的回调函数。不传参数时，移除所有回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offRouterPageSizeChange(callback?: Callback<observer.RouterPageInfo>): void;

  /**
   * 注册监听回调函数，当可见的NavDestination大小发生变化时，会触发该回调函数。使用callback异步回调。
   *
   * @param { Callback<observer.NavDestinationInfo> } callback - 回调函数。携带NavDestinationInfo，返回NavDestination的信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onNavDestinationSizeChange(callback: Callback<observer.NavDestinationInfo>): void;

  /**
   * 移除使用onNavDestinationSizeChange接口注册的监听回调函数。使用callback异步回调。
   *
   * @param { Callback<observer.NavDestinationInfo> } [callback] - 需要被移除的回调函数。不传参数时，移除所有回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offNavDestinationSizeChange(callback?: Callback<observer.NavDestinationInfo>): void;

  /**
   * 注册监听回调函数，当属于指定Navigation的可见NavDestination的大小发生变化时，会触发该回调函数。使用callback异步回调。
   *
   * @param { int } navigationUniqueId - 希望监听NavDestination所属的Navigation的唯一ID，可以通过[queryNavigationInfo](docroot://reference/apis-arkui/arkui-ts/ts-custom-co
   *     mponent-api.md#querynavigationinfo12) 获取。
   *     <br>取值限定为整数。
   * @param { Callback<observer.NavDestinationInfo> } callback - 回调函数。携带NavDestinationInfo，返回NavDestination的信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onNavDestinationSizeChangeByUniqueId(navigationUniqueId: int, callback: Callback<observer.NavDestinationInfo>): void;

  /**
   * 注册一个回调函数，当特定节点的渲染状态发生变化时调用该回调函数。
   * 注册成功后，该回调函数会立即执行一次。
   * [注意事项]：
   * 1. 请注意节点数量的限制：
   * 出于性能考虑，系统对单个UI实例中可以注册监控的节点数量进行了限制，如果超过限制，则会抛出异常。请谨慎使用此接口。
   * 2. 理解可能不触发通知的场景：
   * 通常，在具有视图或页面切换功能的容器组件中，
   * 当屏幕内的视图或页面被移出屏幕时，之前位于屏幕内的组件应从渲染树中移除，并应收到RENDER_OUT通知。然而，这并不总是发生，因为某些场景中，视图或组件被移出屏幕显示范围时，并不会触发RENDER_OUT通知。
   * 例如，一些具有缓存能力的组件可能会影响此行为，轮播组件（swiper）就是其中之一。轮播组件的cacheCount属性允许你通过其第二个参数isShow来强制设置，即使当前页面被移出显示范围，它仍会保留在渲染树中。这在屏幕上同时显示多个页面时非常有用。
   * 另一个例子是列表（list）或滚动（scroll）等滚动组件，它们的内部内容即使被滚动到屏幕显示范围之外，只要没有使用lazyForEach/Repeat，它们仍会保留在渲染树中。因此，渲染状态不会发生变化。一旦你理解了渲染状态变化触发的原理，这些场景就会更容易理解。
   *
   * @param { NodeIdentity } nodeIdentity - 目标节点的标识
   * @param { NodeRenderStateChangeCallback } callback - 当组件节点的渲染状态发生变化时执行的回调函数
   * @throws { BusinessError } 161001 - The count of nodes monitoring render state is over the limitation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onNodeRenderState(nodeIdentity: NodeIdentity, callback: NodeRenderStateChangeCallback): void;

  /**
   * 删除节点渲染状态监听回调
   *
   * @param { NodeIdentity } nodeIdentity - The identity of the target node
   * @param { NodeRenderStateChangeCallback } [callback] - 要移除的回调函数。如果未提供该参数，则将移除给定事件类型的所有回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  offNodeRenderState(nodeIdentity: NodeIdentity, callback?: NodeRenderStateChangeCallback): void;

  /**
   * 移除使用onNavDestinationSizeChangeByUniqueId接口注册的监听回调函数。使用callback异步回调。
   *
   * @param { int } navigationUniqueId - 希望监听的NavDestination所属的Navigation的唯一ID，可以通过[queryNavigationInfo](docroot://reference/apis-arkui/arkui-ts/ts-custom-c
   *     omponent-api.md#querynavigationinfo12)获取。
   *     <br>取值限定为整数。
   * @param { Callback<observer.NavDestinationInfo> } [callback] - 需要被删除的callback，如果没提供删除所有注册的回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offNavDestinationSizeChangeByUniqueId(navigationUniqueId: int, callback?: Callback<observer.NavDestinationInfo>): void;

  /**
   * 注册监听点击事件的无感监听函数
   *
   * @param { ClickEventListenerCallback } callback - 点击事件触发时的回调函数
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onWillClick(callback: ClickEventListenerCallback): void;

  /**
   * 解注册点击事件无感监听回调函数
   *
   * @param { ClickEventListenerCallback } [callback] - 要移除的回调函数。如果未提供该参数，则将移除给定事件类型的所有回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  offWillClick(callback?: ClickEventListenerCallback): void;

  /**
   * 注册一个在点击事件触发后执行的回调函数
   *
   * @param { ClickEventListenerCallback } callback - 无感监听回调函数
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onDidClick(callback: ClickEventListenerCallback): void;

  /**
   * 解注册无感监听回调函数
   *
   * @param { ClickEventListenerCallback } [callback] - 要移除的回调函数。如果未提供该参数，则将移除给定事件类型的所有回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  offDidClick(callback?: ClickEventListenerCallback): void;

  /**
   * 注册无感监听回调函数
   *
   * @param { GestureEventListenerCallback } callback - 无感监听回调函数
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onWillTap(callback: GestureEventListenerCallback): void;

  /**
   * 删除无感监听回调函数
   *
   * @param { GestureEventListenerCallback } [callback] - 要移除的回调函数。如果未提供该参数，则将移除给定事件类型的所有回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  offWillTap(callback?: GestureEventListenerCallback): void;

  /**
   * 注册无感监听函数
   *
   * @param { GestureEventListenerCallback } callback - 注册无感监听回调函数
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onDidTap(callback: GestureEventListenerCallback): void;

  /**
   * 移除无感监听回调函数
   *
   * @param { GestureEventListenerCallback } [callback] - 要移除的回调函数。如果未提供该参数，则将移除给定事件类型的所有回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  offDidTap(callback?: GestureEventListenerCallback): void;

  /**
   * 注册无感监听回调函数
   *
   * @param { PanListenerCallback } callback - 监听滑动手势事件的无感监听回调函数
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onBeforePanStart(callback: PanListenerCallback): void;

  /**
   * 移除无感监听回调函数。
   *
   * @param { PanListenerCallback } [callback] - 要移除的回调函数。如果未提供该参数，则将移除给定事件类型的所有回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  offBeforePanStart(callback?: PanListenerCallback): void;

  /**
   * 注册滑动手势的无感监听回调函数
   *
   * @param { PanListenerCallback } callback - 滑动手势无感监听回调函数
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onBeforePanEnd(callback: PanListenerCallback): void;

  /**
   * 删除无感监听回调函数
   *
   * @param { PanListenerCallback } [callback] - 要移除的回调函数。如果未提供该参数，则将移除给定事件类型的所有回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  offBeforePanEnd(callback?: PanListenerCallback): void;

  /**
   * 注册无感监听回调函数
   *
   * @param { PanListenerCallback } callback - 滑动手势无感监听回调函数
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onAfterPanStart(callback: PanListenerCallback): void;

  /**
   * 删除无感监听回调函数
   *
   * @param { PanListenerCallback } [callback] - 要移除的回调函数。如果未提供该参数，则将移除给定事件类型的所有回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  offAfterPanStart(callback?: PanListenerCallback): void;

  /**
   * 注册无感监听回调函数
   *
   * @param { PanListenerCallback } callback - 无感监听回调函数
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onAfterPanEnd(callback: PanListenerCallback): void;

  /**
   * 删除无感监听回调函数
   *
   * @param { PanListenerCallback } [callback] - 要移除的回调函数。如果未提供该参数，则将移除给定事件类型的所有回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  offAfterPanEnd(callback?: PanListenerCallback): void;
}

/**
* Swiper组件的内容区信息。
*
 * @interface SwiperContentInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface SwiperContentInfo {

  /**
   * Swiper组件的id。
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  id: string;

  /**
   * Swiper子组件的唯一标识符。
   * 取值限定为整数。
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  uniqueId: int;

  /**
   * 当前处于显示状态的Swiper子组件的信息。
   *
   * @type { Array<SwiperItemInfo> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  swiperItemInfos: Array<SwiperItemInfo>;
}

/**
* Swiper子组件的信息。
*
 * @interface SwiperContentInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface SwiperItemInfo {

  /**
   * Swiper子组件的唯一标识符。
   * 取值限定为整数。
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  uniqueId: int;

  /**
   * Swiper子组件在Swiper中的索引。
   * 取值限定为整数。
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  index: int;
}

/**
 * class ComponentUtils
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ComponentUtils {

  /**
   * Provide the ability to obtain the coordinates and size of component drawing areas.
   *
   * @param { string } id - ID of the component whose attributes are to be obtained.
   * @returns { componentUtils.ComponentInfo } the object of ComponentInfo.
   * @throws { BusinessError } 100001 - UI execution context not found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getRectangleById(id: string): componentUtils.ComponentInfo;
}

/**
* 提供绘制浮层的能力。
*
* > **说明：**
* >
* > - 本Class首批接口从API version 12开始支持。
*
* > - 以下API需先使用UIContext中的[getOverlayManager()]{@link @ohos.arkui.UIContext:UIContext#getOverlayManager}方法获取到
* > OverlayManager对象，再通过该对象调用对应方法。
* >
* > - OverlayManager上节点的层级在Page页面层级之上，在Dialog、Popup、Menu、BindSheet、BindContentCover和Toast等之下。
* >
* > - OverlayManager上节点安全区域内外的绘制方式与Page一致，键盘避让方式与Page一致。
* >
* > - 与OverlayManager相关的属性推荐采用AppStorage来进行应用全局存储，以免切换页面后属性值发生变化从而导致业务错误。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class OverlayManager {

  /**
   * 在OverlayManager上新增指定节点。
   *
   * @param { ComponentContent<T> } content - 在OverlayManager的指定节点上添加此content。 <br>**说明：** <br/> 新增的节点默认处于页面居中，按层级堆叠。
   * @param { int } [ index ] - 新增节点在OverlayManager上的层级位置。
   *   <br>**说明：** <br/> 当index ≥ 0时，越大，ComponentContent的层级越高；若多个ComponentContent的index相同，ComponentContent添加的时间越晚层级越高。
   *   <br/> 当index < 0、index = null或index = undefined时，ComponentContent默认添加至最高层。
   *   <br/>当同一个ComponentContent被添加多次时，只保留最后一次添加的ComponentContent。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  addComponentContent<T>(content: ComponentContent<T>, index?: int): void;

  /**
   * 创建浮层节点时，指定显示顺序。
   *
   * 支持在浮层节点创建时指定显示的顺序。
   *
   * @param { ComponentContent<T> } content - 在OverlayManager的指定节点上添加此content。 <br>**说明：** <br/> 新增的节点默认处于页面居中位置，按层级堆叠。
   * @param { LevelOrder } [ levelOrder ] - 新增浮层节点的显示顺序。<br />**说明：**<br />- 默认值：LevelOrder.clamp(0)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  addComponentContentWithOrder<T>(content: ComponentContent<T>, levelOrder?: LevelOrder): void;

  /**
   * 删除overlay上的指定节点。
   *
   * @param { ComponentContent<T> } content - 在OverlayManager上删除此content。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  removeComponentContent<T>(content: ComponentContent<T>): void;

  /**
   * 在OverlayManager上显示指定节点。
   *
   * @param { ComponentContent<T> } content - 在OverlayManager上显示此content。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  showComponentContent<T>(content: ComponentContent<T>): void;

  /**
   * 隐藏OverlayManager上的指定节点。
   *
   * @param { ComponentContent<T> } content - 在OverlayManager上隐藏此content。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  hideComponentContent<T>(content: ComponentContent<T>): void;

  /**
   * 显示OverlayManager上所有的ComponentContent。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  showAllComponentContents(): void;

  /**
   * 隐藏OverlayManager上的所有ComponentContent。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  hideAllComponentContents(): void;

  /**
   * 打开具有指定ComponentContent和选项的浮层。
   *
   * @param { ComponentContent<Object> } content - 该内容将被添加到OverlayManager中。
   * @param { OrderOverlayOptions } [ options ] - Options for the overlay.
   * @returns { Promise<void> } 函数返回的promise。
   * @throws { BusinessError } 103307 - The overlay cannot be opened due to the system pop-up window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  openOrderOverlay(content: ComponentContent<Object>, options?: OrderOverlayOptions): Promise<void>;
}

/**
 * 提供控制放大镜的能力。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class Magnifier {

  /**
   * 将放大镜和组件绑定。
   *
   * @param { string } id - 组件id
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bind(id: string): void;

  /**
   * 设置放大镜显示内容的位置。
   *
   * @param { double } x - 放大镜显示内容相对组件水平方向坐标。
   *     单位为vp
   * @param { double } y - 放大镜显示内容相对组件垂直方向坐标。
   *     单位为vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  show(x: double, y: double): void;

  /**
   * 将放大镜和组件解绑。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  unbind(): void;
}

/**
 * 原子化服务栏
 *
 * @interface AtomicServiceBar
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface AtomicServiceBar {

  /**
   * Set the visibility of the bar, except the icon.
   *
   * @param { boolean } visible - whether this bar is visible.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setVisible(visible: boolean): void;

  /**
   * Set the background color of the bar.
   *
   * @param { Nullable< Color | int | string> } color - the color to set, undefined indicates using default.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setBackgroundColor(color: Nullable< Color | int | string>): void;

  /**
   * Set the title of the bar.
   *
   * @param { string } content - the content of the bar.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setTitleContent(content: string): void;

  /**
   * Set the font style of the bar's title.
   *
   * @param { FontStyle } font - the font style of the bar's title.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setTitleFontStyle(font: FontStyle): void;

  /**
   * Set the color of the icon on the bar.
   *
   * @param { Nullable< Color | int | string> } color - the color to set to icon, undefined indicates using default.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setIconColor(color: Nullable< Color | int | string>): void;

  /**
   * Get size and position of the bar.
   *
   * @returns { Frame } The size and position of bar in vp relative to window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getBarRect(): Frame;
}

/**
 * Represents a dynamic synchronization scene.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class DynamicSyncScene {

  /**
   * Sets the FrameRateRange of the DynamicSyncScene.
   *
   * @param { ExpectedFrameRateRange } range - The range of frameRate.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setFrameRateRange(range: ExpectedFrameRateRange): void;

  /**
   * Gets the FrameRateRange of the DynamicSyncScene.
   *
   * @returns { ExpectedFrameRateRange } The range of frameRate.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getFrameRateRange(): ExpectedFrameRateRange;
}

/**
* 提供Swiper组件动态帧率场景的相关配置，适用于为动画过渡和手势跟手等不同交互场景设置差异化帧率范围，以兼顾流畅度和功耗，继承自[DynamicSyncScene]{@link DynamicSyncScene}。
*
 * @extends DynamicSyncScene
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class SwiperDynamicSyncScene extends DynamicSyncScene {

  /**
   * Swiper的动态帧率场景类型。
   *
   * @type { SwiperDynamicSyncSceneType }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly type: SwiperDynamicSyncSceneType;
}

/**
 * Represents a dynamic synchronization scene of Marquee.
 *
 * @extends DynamicSyncScene
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class MarqueeDynamicSyncScene extends DynamicSyncScene {

  /**
   * Type of the MarqueeDynamicSyncSceneType.
   * @type { MarqueeDynamicSyncSceneType }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly type: MarqueeDynamicSyncSceneType;
}

/**
 * class DragController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class DragController {

  /**
   * Execute a drag event.
   * @param { CustomBuilder | DragItemInfo | undefined } custom - Object used for prompts displayed when the object
   *     is dragged.
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
   * @since 23 static
   */
  executeDrag(custom: CustomBuilder | DragItemInfo | undefined, dragInfo: dragController.DragInfo,
    callback: AsyncCallback<dragController.DragEventParam>): void;

  /**
   * Execute a drag event.
   * @param { CustomBuilder | DragItemInfo | undefined } custom - Object used for prompts displayed when the object
   * is dragged.
   * @param { dragController.DragInfo } dragInfo - Information about the drag event.
   * @returns { Promise<dragController.DragEventParam> | null } A Promise with the drag event information. Null will be returned
   *     if the parameters' checking failed or some internal errors occur, for example: the runtime environment is
   *     broken.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal handling failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  executeDrag(custom: CustomBuilder | DragItemInfo | undefined, dragInfo: dragController.DragInfo)
    : Promise<dragController.DragEventParam> | null;

  /**
   * Create one drag action object, which can be used for starting drag later or monitoring the drag status after
   * drag started.
   * @param { Array<CustomBuilder | DragItemInfo> | undefined } customArray - Objects used for prompts 
   * displayed when the objects are dragged.
   * @param { dragController.DragInfo } dragInfo - Information about the drag event.
   * @returns { dragController.DragAction } one drag action object
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal handling failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  createDragAction(customArray: Array<CustomBuilder | DragItemInfo> | undefined,
    dragInfo: dragController.DragInfo): dragController.DragAction;

  /**
   * Get a drag preview object.
   * @returns { dragController.DragPreview } A drag preview object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getDragPreview(): dragController.DragPreview;

  /**
   * Enable drag event strict reporting for drag enter and leave notification in nested situation.
   * For example, the parent and child both register the onDragEnter/onDragLeave events, if this
   * flag is enabled, the parent will be notified with leave event, and the child will notified with
   * enter event at the same time, when user drag action is passing through the parent and enter the
   * scope of the child.
   * Please be noted, the default value of the flag is false, it means, for the same situation, the
   * parent will not receive the leave notification, just the child can get the enter event, which is
   * not fully strict.
   * @param { boolean } enable - Indicating enable drag event strict reporting or not.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setDragEventStrictReportingEnabled(enable: boolean): void;

  /**
   * Notify the drag start request to specific pending or continue.
   * @param { dragController.DragStartRequestStatus } requestStatus - Status about the drag start behavior.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  notifyDragStartRequest(requestStatus: dragController.DragStartRequestStatus): void;

  /**
   * Cancel the UDMF data sync process by passing in the data key as the identify, can only be used after the drop.
   *
   * @param { string } key - The data key returned by startDataLoading method.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 190004 - Operation failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
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
   * @since 26.0.0 static
   */
  interruptFollowHandMorphDropAnimation(): boolean;

  /**
   * Sets whether to enable the disallow badge icon show.
   *
   * Typically, when a component can receive or process data dragged by the user, or when it declares to the
   * system that data should be processed in COPY way by returning DragBehavior.COPY, the system will display
   * a plus sign together with the data number on the upper-left corner of the dragged object; if returning
   * DragBehavior.MOVE to the system to declare that data should be processed in CUT way, the system will only
   * display the data number on the upper-left corner of the dragged object.
   *
   * @param { boolean } enabled - Indicating enable the disallow status showing or not.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  enableDropDisallowedBadge(enabled: boolean): void;
}

/**
 * class MeasureUtils
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class MeasureUtils {

  /**
   * Obtains the width of the specified text in a single line layout.
   *
   * @param { MeasureOptions } options - Options.
   * @returns { double }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  measureText(options: MeasureOptions): double;

  /**
   * Obtains the width and height of the specified text in a single line layout.
   *
   * @param { MeasureOptions } options - Options of measure area occupied by text.
   * @returns { SizeOptions } width and height for text to display
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  measureTextSize(options: MeasureOptions): SizeOptions;

  /**
   * 获取属性字符串的布局信息。
   *
   * @param { StyledString } styledString - 属性字符串值。
   * @param { TextLayoutOptions } [options] - 布局选项。
   * @returns { Array<Paragraph> } 段落结果
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  getParagraphs(styledString: StyledString, options?: TextLayoutOptions): Array<Paragraph>;
}

/**
 * class FocusController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class FocusController {

  /**
   * clear focus to the root container.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  clearFocus(): void;

  /**
   * request focus to the specific component.
   * @param { string } key - the inspector key of the component.
   * @throws { BusinessError } 150001 - the component cannot be focused.
   * @throws { BusinessError } 150002 - This component has an unfocusable ancestor.
   * @throws { BusinessError } 150003 - the component is not on tree or does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  requestFocus(key: string): void;

  /**
   * Activate focus style.
   * @param { boolean } isActive - activate/deactivate the focus style.
   * @param { boolean } [autoInactive] - deactivate the focus style when touch event or mouse event triggers, the default value is true.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  activate(isActive: boolean, autoInactive?: boolean): void;

  /**
   * Get whether the focus style is active.
   * @returns { boolean } Whether the focus style is active.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isActive(): boolean;

  /**
   * Set whether to enable autofocus transfer.
   * @param { boolean } isAutoFocusTransfer - A Boolean value that indicates whether autofocus transfer is enabled.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setAutoFocusTransfer(isAutoFocusTransfer: boolean): void;

  /**
   * Set the priority of key event processing when component cannot handle the key event..
   * @param { KeyProcessingMode } mode - Key processing mode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setKeyProcessingMode(mode: KeyProcessingMode): void;
}

/**
 * Pointer style.
 *
 * @typedef {pointer.PointerStyle} PointerStyle
 * @syscap SystemCapability.MultimodalInput.Input.Pointer
 * @since 23 static
 */
export type PointerStyle = pointer.PointerStyle;

/**
 * class CursorController
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class CursorController {

  /**
   * Restore default cursor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  restoreDefault(): void;

  /**
   * Set cursor style.
   *
   * @param { PointerStyle } value - cursor style enum.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
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
   * @since 26.0.0 static
   */
  setCustomCursor(value: image.PixelMap, focusX?: int, focusY?: int): void;
}

/**
* 提供控制菜单关闭的能力。
*
* > **说明：**
* >
* > - 本Class首批接口从API version 12开始支持。
*
* > - 以下API需先使用UIContext中的[getContextMenuController()]{@link @ohos.arkui.UIContext:UIContext#getContextMenuController}方
* > 法获取ContextMenuController实例，再通过此实例调用对应方法。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ContextMenuController {

  /**
   * 关闭菜单。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  close(): void;
}

/**
 * Class FrameCallback
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare abstract class FrameCallback {

  /**
   * Call when a new display frame is being rendered.
   *
   * @param { long } frameTimeInNano - The frame time in nanoseconds.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onFrame(frameTimeInNano: long): void;

  /**
   * Called at the end of the next idle frame. If there is no next frame, will request one automatically.
   *
   * @param { long } timeLeftInNano - The remaining time from the deadline for this frame.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onIdle(timeLeftInNano: long): void;
}

/**
 * The base context of an ability or an application. It allows access to
 * application-specific resources.
 *
 * @typedef { common.Context } Context
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @since 23 static
 */
export type Context = common.Context;

/**
 * class ComponentSnapshot
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ComponentSnapshot {

  /**
   * Get a component snapshot by component id.
   *
   * @param { string } id - 目标组件ID，开发者通过 .id 属性设置
   * @param { AsyncCallback<image.PixelMap> } callback - 可返回截图位图结果的回调函数
   * @param { componentSnapshot.SnapshotOptions } [options] - 截图选项
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get(id: string, callback: AsyncCallback<image.PixelMap>, options?: componentSnapshot.SnapshotOptions): void;

  /**
   * Get a component snapshot by component id.
   *
   * @param { string } id - Target component ID, set by developer through .id attribute.
   * @param { componentSnapshot.SnapshotOptions } [options] - Define the snapshot options.
   * @returns { Promise<image.PixelMap> | null } A Promise with the snapshot in PixelMap format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get(id: string, options?: componentSnapshot.SnapshotOptions): Promise<image.PixelMap> | null;

  /**
   * Generate a snapshot from a custom component builder.
   *
   * @param { CustomBuilder } builder - Builder function of a custom component.
   * @param { AsyncCallback<image.PixelMap> } callback - Callback that contains the snapshot in PixelMap format.
   * @param { int } [delay] - Defines the delay time to render the snapshot.
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
   * @since 23 static
   */
  createFromBuilder(builder: CustomBuilder, callback: AsyncCallback<image.PixelMap>,
    delay?: int, checkImageStatus?: boolean, options?: componentSnapshot.SnapshotOptions): void;

  /**
   * Generate a snapshot from a custom component builder.
   *
   * @param { CustomBuilder } builder - Builder function of a custom component.
   * @param { int } [delay] - Defines the delay time to render the snapshot.
   * @param { boolean } [checkImageStatus] - Defines if check the image decoding status before taking snapshot.
   * @param { componentSnapshot.SnapshotOptions } [options] - Define the snapshot options.
   * @returns { Promise<image.PixelMap> | null } A Promise with the snapshot in PixelMap format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The builder is not a valid build function.
   * @throws { BusinessError } 160001 - An image component in builder is not ready for taking a snapshot. The check for
   * the ready state is required when the checkImageStatus option is enabled.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options.
   * @throws { BusinessError } 160004 - isAuto(true) is not supported for offscreen node snapshots.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  createFromBuilder(builder: CustomBuilder, delay?: int,
    checkImageStatus?: boolean, options?: componentSnapshot.SnapshotOptions): Promise<image.PixelMap> | null;

  /**
   * Take a screenshot of the specified component in synchronous mode,
   * this mode will block the main thread, please use it with caution, the maximum
   * waiting time of the interface is 3s, if it does not return after 3s, an exception will be thrown.
   *
   * @param { string } id - Target component ID, set by developer through .id attribute.
   * @param { componentSnapshot.SnapshotOptions } [options] - Define the snapshot options.
   * @returns { image.PixelMap | null } The snapshot result in PixelMap format. Null will be returned
   *     if the parameters' checking failed or some internal errors occur, for example: the runtime environment is
   *     broken.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @throws { BusinessError } 160002 - Timeout.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getSync(id: string, options?: componentSnapshot.SnapshotOptions): image.PixelMap | null;

  /**
   * Get a component snapshot by uniqueId.
   *
   * @param { int } uniqueId - The uniqueId of the node, can get through getUniqueId.
   * @param { componentSnapshot.SnapshotOptions } [options] - Define the snapshot options.
   * @returns { Promise<image.PixelMap> | null } A Promise with the snapshot in PixelMap format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Invalid ID.
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getWithUniqueId(uniqueId: int, options?: componentSnapshot.SnapshotOptions): Promise<image.PixelMap> | null;

  /**
   * Take a screenshot of the specified component in synchronous mode,
   * this mode will block the main thread, please use it with caution, the maximum
   * waiting time of the interface is 3s, if it does not return after 3s, an exception will be thrown.
   *
   * @param { int } uniqueId - The uniqueId of the node, can get through getUniqueId.
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
   * @since 23 static
   */
  getSyncWithUniqueId(uniqueId: int, options?: componentSnapshot.SnapshotOptions): image.PixelMap;

  /**
   * Generate a snapshot from a custom component content.
   *
   * @param { ComponentContent<T> } content - The content to be taken snapshot.
   * @param { int } [delay] - Defines the delay time to render the snapshot.
   * @param { boolean } [checkImageStatus] - Defines if check the image decoding status before taking snapshot.
   * @param { componentSnapshot.SnapshotOptions } [options] - Define the snapshot options.
   * @returns { Promise<image.PixelMap> | null } A Promise with the snapshot in PixelMap format.
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
   * @since 23 static
   */
  createFromComponent<T extends Object>(content: ComponentContent<T>, delay?: int,
    checkImageStatus?: boolean, options?: componentSnapshot.SnapshotOptions): Promise<image.PixelMap> | null;

  /**
   * Get a component snapshot by component range.
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
   * @since 26.0.0 static
   */
  getWithRange(start: NodeIdentity, end: NodeIdentity, isStartRect: boolean,
    options?: componentSnapshot.SnapshotOptions): Promise<image.PixelMap> | null;

  /**
   * 查询组件截图大小限制。
   *
   * @returns { componentSnapshot.SnapshotSizeLimitation } The size limitation for taking a component snapshot.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  getSizeLimitation(): componentSnapshot.SnapshotSizeLimitation;
}

/**
 * 类BaseGestureHandlingProposal。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export abstract class BaseGestureHandlingProposal {

  /**
   * 要执行的智能手势操作。定义手势触发的具体操作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  action: SmartGestureAction;

  /**
   * 底层的用户操作意图。表示基本的用户交互目标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  operateIntention: OperateIntention;
}

/**
 * 类TargetedGestureProposal。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export abstract class TargetedGestureProposal extends BaseGestureHandlingProposal {

  /**
   * 手势处理的目标节点。该节点将接收并处理手势事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  node: FrameNode;
}

/**
 * 类ClickActionProposal。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class ClickActionProposal extends TargetedGestureProposal {

  /**
   * ClickActionProposal构造函数。
   *
   * @param { FrameNode } node - 响应点击操作的节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(node: FrameNode);
}

/**
 * 类SelectActionProposal。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class SelectActionProposal extends TargetedGestureProposal {

  /**
   * SelectActionProposal构造函数。
   *
   * @param { FrameNode } node - 响应选择操作的节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(node: FrameNode);
}

/**
 * 类NoneActionProposal。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class NoneActionProposal extends BaseGestureHandlingProposal {

  /**
   * NoneActionProposal构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor();
}

/**
 * 类BackPressActionProposal。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class BackPressActionProposal extends BaseGestureHandlingProposal {

  /**
   * BackPressActionProposal构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor();
}

/**
 * 类PageSwitchActionProposal。默认的页面切换方向为前进。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class PageSwitchActionProposal extends TargetedGestureProposal {

  /**
   * PageSwitchActionProposal构造函数。
   *
   * @param { FrameNode } node - 响应页面切换动作的节点。
   * @param { int } pageCount - 要切换的页数。
   *     取值限定为整数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(node: FrameNode, pageCount: int);

  /**
   * 手势操作的页数参数。指定要导航的页数。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  pageCount: int;
}

/**
 * 类ScrollActionProposal。默认滚动方向为向前。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class ScrollActionProposal extends TargetedGestureProposal {

  /**
   * ScrollActionProposal构造函数。
   *
   * @param { FrameNode } node - 响应滚动动作的节点。
   * @param { double } distance - 滚动或滑动的距离。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(node: FrameNode, distance: double);

  /**
   * 手势操作的距离参数。用于滚动或滑动等动作，以指定移动距离。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  distance: double;
}

/**
 * 类手势处理解决方案。表示开发者对智能手势处理的决策结果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class GestureHandlingResolution {

  /**
   * GestureHandlingResolution构造函数。
   *
   * @param { boolean } isConsumed - 是否消费当前手势事件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(isConsumed: boolean);

  /**
   * 判断是否消费当前手势事件。如果手势没有被消费，它会告诉消费者该手势不被支持。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isConsumed: boolean;

  /**
   * 开发者最终选择的手势处理方案。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  selectedProposal?: BaseGestureHandlingProposal;
}

/**
 * 类SmartGestureController。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class SmartGestureController {

  /**
   * 开启或关闭手表的智能点击和滑动手势。此开关控制点击和滑动手势的新实现。启用后，将使用新的智能手势处理流水线。禁用时，将使用传统实现以实现兼容性。
   *
   * @param { boolean } enabled - 是否启用智能点击和滑动手势处理。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  enableSmartTapAndSlideGestures(enabled: boolean): void;

  /**
   * 注册一个回调函数来监听手势事件。在系统处理手势事件之前，应用程序可以接收到当前手势的处理意图，并进行自定义干预。
   *
   * @param { Callback<BaseGestureHandlingProposal, GestureHandlingResolution> } monitorCallback - 手势识别时调用的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  registerMonitor(monitorCallback: Callback<BaseGestureHandlingProposal, GestureHandlingResolution>): void;

  /**
   * 注销监听手势事件的回调函数。
   *
   * @param { Callback<BaseGestureHandlingProposal, GestureHandlingResolution> } monitorCallback - 识别手势时调用的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  unregisterMonitor(monitorCallback: Callback<BaseGestureHandlingProposal, GestureHandlingResolution>): void;

  /**
   * 清除监听手势事件的回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  clearMonitors(): void;

  /**
   * 通过节点的标识符请求智能手势选择节点。
   *
   * @param { string } id - 要选择的节点的标识符。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  requestSelected(id: string): void;

  /**
   * 清除当前智能手势选择。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  clearSelected(): void;
}

/**
* UIContext解析策略枚举
*
 * @enum { number } strategy of resolved UIContext.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export const enum ResolveStrategy {

  /**
   * 获取调用作用域的UIContext
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CALLING_SCOPE = 0,

  /**
   * 获取最后获得焦点的UI实例的UIContext
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LAST_FOCUS = 1,

  /**
   * 获取实例ID最大的UIContext
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  MAX_INSTANCE_ID = 2,

  /**
   * 获取唯一UI实例的UIContext
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  UNIQUE = 3,

  /**
   * 取最后进入前台的UI实例的UIContext
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LAST_FOREGROUND = 4,

  /**
   * 获取未定义调用作用域的UIContext
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  UNDEFINED = 5
}

/**
 * UIContext.resolveUIContext接口的返回值类型，属于UIContext类型的子类，额外包含获取该UIContext的解析策略。
 *
 * @extends UIContext
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ResolvedUIContext extends UIContext {

  /**
   * UIContext的解析策略
   *
   * @type { ResolveStrategy }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  strategy: ResolveStrategy;
}

/**
 * UIContext类
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class UIContext {

  /**
   * UIContext 构造函数
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  constructor();

  /**
   * 获取与当前调用作用域关联的 UIContext
   *
   *
   *
   * @returns { UIContext | undefined } - The UIContext for the current calling scope,
   *     or undefined if no context can be determined from the call stack.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  static getCallingScopeUIContext(): UIContext | undefined;

  /**
   * 获取最后获焦的 UI 实例的 UIContext（如果存在）。
   *
   *
   *
   * @returns { UIContext | undefined } - The UIContext of the last focused UI instance or undefined if no one exists.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  static getLastFocusedUIContext(): UIContext | undefined;

  /**
   * 获取最后处于前台的 UI 实例的 UIContext（如果存在）。
   *
   *
   *
   * @returns { UIContext | undefined } - The UIContext of the last foregrounded UI instance or undefined if no one
   *     exists
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  static getLastForegroundUIContext(): UIContext | undefined;

  /**
   * 获取所有当前活跃的 UIContext 实例。
   *
   *
   *
   * @returns { UIContext[] } - An array containing all valid UIContext instances,
   *     returns an empty array if no contexts are available.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  static getAllUIContexts(): UIContext[];

  /**
   * 使用优先级策略解析UIContext
   *
   * 按照预定义优先级顺序解析并返回UIContext实例。
   * 解析规则按顺序如下：
   * <br>1. 返回当前调用作用域对应的UIContext
   * <br>2. 当仅存在单个UI实例时，返回该唯一实例的UIContext
   * <br>3. 若存在最后获得焦点的UI实例，返回其UIContext
   * <br>4. 若存在最后进入前台的UI实例，返回其UIContext
   * <br>5. 若存在任何UI实例，返回最大实例ID的UIContext
   * <br>6. 当不满足上述所有条件时，返回未定义调用作用域内的UIContext实例
   *
   * @returns { ResolvedUIContext } - ResolvedUIContext实例
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static resolveUIContext(): ResolvedUIContext;

  /**
   * get object font.
   *
   * @returns { Font } object Font.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getFont(): Font;

  /**
   * 检查UIContext对象是否可用。
   * @returns { boolean } 如果UIContext可用，返回true，否则返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isAvailable(): boolean;

  /**
   * get object mediaQuery.
   *
   * @returns { MediaQuery } object MediaQuery.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getMediaQuery(): MediaQuery;

  /**
   * get object UIInspector.
   *
   * @returns { UIInspector }    **UIInspector**对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getUIInspector(): UIInspector;

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
   *     <br>If **filters** is not provided or is an empty array, none of the aforementioned fields will be filtered out.
   *     <br>Other filter fields are used only in testing scenarios.
   * @returns { string } JSON string of the component tree and component attributes. For details about each field in
   *     the component, see the return value description of [getInspectorInfo]{@link FrameNode#getInspectorInfo}.
   * @throws { BusinessError } 100023 - Unable to obtain current ui context.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getFilteredInspectorTree(filters?: Array<string>): string;

  /**
   * get the filtered attributes of the component tree with the specified id and depth
   *
   * @param { string } id - [ID]{@link CommonMethod#id} of the target component.
   * @param { int } depth - depth of the component tree to be obtained.
   *     <br>取值限定为整数。
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
   *     <br>If **filters** is not provided or is an empty array, none of the aforementioned fields will be filtered out.
   *     <br>Other filter fields are used only in testing scenarios.
   * @returns { string } JSON string of the attributes of the specified component and its child components. For details
   *     about each field in the component, see the return value description of [getInspectorInfo]{@link FrameNode#getInspectorInfo}.
   * @throws { BusinessError } 100023 - Unable to obtain current ui context.
   * @throws { BusinessError } 100024 - The parameter depth must be greater than 0.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getFilteredInspectorTreeById(id: string, depth: int, filters?: Array<string>): string;

  /**
   * get object router.
   *
   * @returns { Router } object Router.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getRouter(): Router;

  /**
   * get object PromptAction.
   *
   * @returns { PromptAction } object PromptAction.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getPromptAction(): PromptAction;

  /**
   * get object ComponentUtils.
   * @returns { ComponentUtils } object ComponentUtils.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getComponentUtils(): ComponentUtils;

  /**
   * Get the UI observer.
   *
   * @returns { UIObserver } The UI observer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getUIObserver(): UIObserver;

  /**
   * Get object OverlayManager.
   *
   * @returns { OverlayManager } object OverlayManager.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getOverlayManager(): OverlayManager;

  /**
   * 获取放大镜对象。
   *
   * @returns { Magnifier } 放大镜对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getMagnifier(): Magnifier;

  /**
   * Init OverlayManager.
   *
   * @param { OverlayManagerOptions } options - Options.
   * @returns { boolean } Returns true if it is called first and before getting an OverlayManager instance; returns false otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setOverlayManagerOptions(options: OverlayManagerOptions): boolean;

  /**
   * Get object OverlayManagerOptions.
   *
   * @returns { OverlayManagerOptions } object OverlayManagerOptions.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getOverlayManagerOptions(): OverlayManagerOptions;

  /**
   * Create an animator object for custom animation.
   *
   * @param { AnimatorOptions | SimpleAnimatorOptions } options - Options.
   * @returns { AnimatorResult }
      * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  createAnimator(options: AnimatorOptions | SimpleAnimatorOptions): AnimatorResult;

  /**
   * Defining animation function
   *
   * @param { AnimateParam } value - parameters for animation.
   * @param { function } event - the closure base on which, the system will create animation automatically
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  animateTo(value: AnimateParam, event: () => void): void;

  /**
   * alertDialog display.
   *
   * @param { AlertDialogParamWithConfirm | AlertDialogParamWithButtons | AlertDialogParamWithOptions } options -
   Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  showAlertDialog(
    options: AlertDialogParamWithConfirm | AlertDialogParamWithButtons | AlertDialogParamWithOptions): void;

  /**
   * actionSheet display.
   *
   * @param { ActionSheetOptions } value - Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  showActionSheet(value: ActionSheetOptions): void;

  /**
   * datePickerDialog display.
   *
   * @param { DatePickerDialogOptions } options - Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  showDatePickerDialog(options: DatePickerDialogOptions): void;

  /**
   * timePickerDialog display.
   *
   * @param { TimePickerDialogOptions } options - Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  showTimePickerDialog(options: TimePickerDialogOptions): void;

  /**
   * textPickerDialog display.
   *
   * @param { TextPickerDialogOptions | TextPickerDialogOptionsExt } style - Dialog style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  showTextPickerDialog(style: TextPickerDialogOptions | TextPickerDialogOptionsExt): void;

  /**
   * Set image cache capacity of decoded image count.
   * if not set, the application will not cache any decoded image.
   *
   * @param { int } value - capacity of decoded image count.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setImageCacheCount(value: int): void;

  /**
   * Set image cache capacity of raw image data size in bytes before decode.
   * if not set, the application will not cache any raw image data.
   *
   * @param { int } value - capacity of raw image data size in bytes.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setImageRawDataCacheSize(value: int): void;

  /**
   * Run custom functions inside the UIContext scope.
   *
   * @param { function } callback - The function called through UIContext.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  runScopedTask(callback: () => void): void;

  /**
   * Set KeyboardAvoidMode. The default mode is KeyboardAvoidMode.OFFSET
   *
   * @param { KeyboardAvoidMode } value - The mode of keyboard avoid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setKeyboardAvoidMode(value: KeyboardAvoidMode): void;

  /**
   * Get KeyboardAvoidMode.
   * @returns { KeyboardAvoidMode } The mode of keyboard avoid.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getKeyboardAvoidMode(): KeyboardAvoidMode;

  /**
   * Set the pixel round mode of the system. The default mode is PixelRoundMode.PIXEL_ROUND_ON_LAYOUT_FINISH.
   *
   * @param { PixelRoundMode } mode - The mode of pixel round.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setPixelRoundMode(mode: PixelRoundMode): void;

  /**
   * Get the pixel round mode of the system.
   *
   * @returns { PixelRoundMode } the mode of pixel round.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getPixelRoundMode(): PixelRoundMode;

  /**
   * Dispach keyboard event to the frameNode with inspector key.
   *
   * @param { int | string } node - The uniqueId or inspector key of the target FrameNode.
   * @returns { boolean } Returns whether the key event is consumed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  dispatchKeyEvent(node: int | string, event: KeyEvent): boolean;

  /**
   * Get AtomicServiceBar.
   * @returns { Nullable<AtomicServiceBar> } The atomic service bar.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getAtomicServiceBar(): Nullable<AtomicServiceBar>;

  /**
   * Get DragController.
   * @returns { DragController } the DragController
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getDragController(): DragController;

  /**
   * Get MeasureUtils.
   * @returns { MeasureUtils } the MeasureUtils
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getMeasureUtils(): MeasureUtils;

  /**
   * Defining keyframe animation function.
   *
   * @param { KeyframeAnimateParam } param - overall animation parameters
   * @param { Array<KeyframeState> } keyframes - all keyframe states
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  keyframeAnimateTo(param: KeyframeAnimateParam, keyframes: Array<KeyframeState>): void;

  /**
   * Get FocusController.
   * @returns { FocusController } the FocusController
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getFocusController(): FocusController;

  /**
   * 通过 **UIContext** 对象提供提供显式动画立即下发功能。
   * 当多个属性动画同时加载时，您可以调用此 API 来立即执行由处理函数引起的视图状态变化的过渡动画。
   *
   * @param { AnimateParam } param - 设置动画效果相关参数
   * @param { VoidCallback } processor - 指定显示动画的处理函数，在该函数中导致的状态变化系统会自动插入过渡动画。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  animateToImmediately(param: AnimateParam, processor: VoidCallback): void;

  /**
   * Get FrameNode by id.
   *
   * @param { string } id - The id of FrameNode.
   * @returns { FrameNode | null } The instance of FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getFrameNodeById(id: string): FrameNode | null;

  /**
   * Get the FrameNode attached to current window by id.
   *
   * @param { string } id - The id of FrameNode.
   * @returns { FrameNode | null } The instance of FrameNode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getAttachedFrameNodeById(id: string): FrameNode | null;

  /**
   * Get FrameNode by uniqueId.
   *
   * @param { int } id - The uniqueId of the FrameNode.
   * @returns { FrameNode | null } - The FrameNode with the target uniqueId, or null if the frameNode is not existed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getFrameNodeByUniqueId(id: int): FrameNode | null;

  /**
   * Get page information of the frameNode with uniqueId.
   *
   * @param { int } id - The uniqueId of the target FrameNode.
   * @returns { PageInfo } - The page information of the frameNode with the target uniqueId, includes
   *     navDestination and router page information. If the frame node does not have navDestination and
   *     router page information, it will return an empty object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getPageInfoByUniqueId(id: int): PageInfo;

  /**
   * Get navigation information of the frameNode with uniqueId.
   *
   * @param { int } id - The uniqueId of the target FrameNode.
   * @returns { observer.NavigationInfo | undefined } - The navigation information of the frameNode with the
   * target uniqueId, or undefined if the frameNode is not existed or does not have navigation information.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getNavigationInfoByUniqueId(id: int): observer.NavigationInfo | undefined;

  /**
   * Dynamic dimming.
   *
   * @param { string } id - The id of FrameNode.
   * @param { double } value - Compared to the original level of dimming.value range [0,1],
   *     set values less than 0 to 0 and values greater than 1 to 1.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  setDynamicDimming(id: string, value: double): void;

  /**
   * Get object cursor controller.
   *
   * @returns { CursorController } object cursor controller.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getCursorController(): CursorController;

  /**
   * 注册本地输入事件监视器。
   *
   * 接口名中的“Local”表示监视器只在当前UIContext内有效。
   * 并且不影响其他UIContext实例。每个UIContext都维护自己独立的监视器列表。
   *
   * @param { int } eventMask - 事件类型掩码，指定要监视的事件类型
   *     位运算。
   * @param { InputEventListener } listener - 事件监听器回调函数。
   * @returns { InputEventMonitor } Unique identifier object for the monitor, used for subsequent
   *     cancellation of registration.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
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
   * @since 26.0.0 static
   */
  removeLocalInputEventMonitor(monitor: InputEventMonitor): void;

  /**
   * Get object context menu controller.
   *
   * @returns { ContextMenuController } object context menu controller.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getContextMenuController(): ContextMenuController;

  /**
   * Get ComponentSnapshot.
   * @returns { ComponentSnapshot } the ComponentSnapshot
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getComponentSnapshot(): ComponentSnapshot;

  /**
   * Converts a value in vp units to a value in px.
   * @param { double } value
   * @returns { double }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  vp2px(value: double): double;

  /**
   * Converts a value in px units to a value in vp.
   * @param { double } value
   * @returns { double }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  px2vp(value: double): double;

  /**
   * Converts a value in fp units to a value in px.
   * @param { double } value
   * @returns { double }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fp2px(value: double): double;

  /**
   * Converts a value in px units to a value in fp.
   * @param { double } value
   * @returns { double }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  px2fp(value: double): double;

  /**
   * Converts a value in lpx units to a value in px.
   * @param { double } value
   * @returns { double }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  lpx2px(value: double): double;

  /**
   * Converts a value in px units to a value in lpx.
   * @param { double } value
   * @returns { double }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  px2lpx(value: double): double;

  /**
   * Get current LocalStorage shared from stage.
   *
   * @returns { LocalStorage | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getSharedLocalStorage(): LocalStorage | undefined;

  /**
   * Obtains context of the ability.
   *
   * @returns { Context | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getHostContext(): Context | undefined;

  /**
   * Get the name of current window.
   *
   * @returns { string | undefined } The name of current window, or undefined if the window doesn't exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getWindowName(): string | undefined;

  /**
   * 获取当前UIContext所属的窗口ID。
   * <p>**注意**：
   * 如果当前UIContext处于宿主进程中运行的UIExtensionAbility内，
   * 此方法将返回宿主应用程序的顶层窗口ID。
   * </p>
   *
   * @returns { int | undefined } - Window id. If the current UIContext is unavailable, return undefined.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getWindowId(): int | undefined;

  /**
   * Get the width breakpoint of current window.
   *
   * @returns { WidthBreakpoint } The width breakpoint of current window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getWindowWidthBreakpoint(): WidthBreakpoint;

  /**
   * Get the height breakpoint of current window.
   *
   * @returns { HeightBreakpoint } The height breakpoint of current window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getWindowHeightBreakpoint(): HeightBreakpoint;

  /**
   * 打开BindSheet半模态.
   *
   * @param { ComponentContentBase } bindSheetContent - BindSheet半模态的内容.
   * @param { SheetOptions } [sheetOptions] - 半模态的选项
   * @param { int } [targetId] - BindSheet半模态所附着的FrameNode的唯一标识符
   *     <br>取值范围:(0, +∞)
   * @returns { Promise<void> } 函数返回的promise对象
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
   * @since 23 static
   */
  openBindSheet(bindSheetContent: ComponentContentBase,
    sheetOptions?: SheetOptions, targetId?: int): Promise<void>;

  /**
   * 更新BindSheet半模态的参数选项
   *
   * @param { ComponentContentBase } bindSheetContent - BindSheet半模态的内容.
   * @param { SheetOptions } sheetOptions - 待更新的半模态的选项参数.
   * @param { boolean } [partialUpdate] - 如果为真，则仅更新 sheetOptions 中指定的属性，
   *     否则其余属性将被默认值覆盖。
   *     默认值为 false。
   * @returns { Promise<void> } 函数返回的promise对象
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 120001 - The bindSheetContent is incorrect.
   * @throws { BusinessError } 120003 - The bindSheetContent cannot be found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  updateBindSheet(bindSheetContent: ComponentContentBase,
    sheetOptions: SheetOptions, partialUpdate?: boolean): Promise<void>;

  /**
   * 关闭BindSheet半模态.
   *
   * @param { ComponentContentBase } bindSheetContent - BindSheet半模态的内容
   * @returns { Promise<void> } 函数返回的promise对象
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 120001 - The bindSheetContent is incorrect.
   * @throws { BusinessError } 120003 - The bindSheetContent cannot be found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  closeBindSheet(bindSheetContent: ComponentContentBase): Promise<void>;

  /**
   * Post a frame callback to run on the next frame.
   *
   * @param { FrameCallback } frameCallback - The frame callback to run on the next frame.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  postFrameCallback(frameCallback: FrameCallback): void;

  /**
   * Post a frame callback to run on the next frame after the specified delay.
   *
   * @param { FrameCallback } frameCallback - The frame callback to run on the next frame.
   * @param { long } delayTime - The delay time in milliseconds,
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  postDelayedFrameCallback(frameCallback: FrameCallback, delayTime: long): void;

  /**
   * Require DynamicSyncScene by id.
   *
   * @param { string } id - The id of DynamicSyncScene.
   * @returns { Array<DynamicSyncScene>} The instance of SwiperDynamicSyncScene.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  requireDynamicSyncScene(id: string): Array<DynamicSyncScene>;

  /**
   * Clear the cache generated by using $r/$rawfile to retrieve resources in HSP. This cache is used to accelerate the
   * process of repeatedly loading resources. Clearing this cache may slow down the loading speed of resources during
   * page overload.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  clearResourceCache(): void;

  /**
   * Checks whether current font scale follows the system.
   *
   * @returns { boolean } Returns true if current font scale follows the system; returns false otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isFollowingSystemFontScale(): boolean;

  /**
   * Get the max font scale.
   *
   * @returns { double } The max font scale.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getMaxFontScale(): double;

  /**
   * Bind tabs to scrollable container component to automatically hide tab bar.
   *
   * @param { TabsController } tabsController - The controller of the tabs.
   * @param { Scroller } scroller - The controller of the scrollable container component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bindTabsToScrollable(tabsController: TabsController, scroller: Scroller): void;

  /**
   * Unbind tabs from scrollable container component.
   *
   * @param { TabsController } tabsController - The controller of the tabs.
   * @param { Scroller } scroller - The controller of the scrollable container component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
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
   * @since 23 static
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
   * @since 23 static
   */
  unbindTabsFromNestedScrollable(tabsController: TabsController, parentScroller: Scroller,
    childScroller: Scroller): void;

  /**
   * 设置是否支持应用内横向滑动返回上一级。
   *
   * @param { boolean | undefined } enabled - 是否支持应用内横向滑动返回，默认值为true。<br>当值为true时，支持应用内横向滑动返回。<br>当值为false时，不支持应用内横向滑动返回。
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 23 static
   */
  enableSwipeBack(enabled: boolean | undefined): void;

  /**
   * Sets the component freezing flag based on the component id to prevent the
   * UI component from marking and updating dirty areas.
   * @param { string } id - Id of the frame node.
   * @param { boolean } isFrozen  - whether the component is frozen.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  freezeUINode(id: string, isFrozen: boolean): void;

  /**
   * 根据组件唯一标识符设置组件冻结标志，以防止UI组件标记和更新脏区。
   * @param { int } uniqueId - 节点的唯一标识符
   * @param { boolean } isFrozen - 组件是否处于冻结状态
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  freezeUINode(uniqueId: int, isFrozen: boolean): void;

  /**
   * Get object text menu controller.
   *
   * @returns { TextMenuController } object text menu controller.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getTextMenuController(): TextMenuController;

  /**
   * Create a UI instance singleton without window and get its UIContext object.
   *
   * @param { common.UIAbilityContext | common.ExtensionContext } context - UIAbilityContext or ExtensionContext.
   * @returns { UIContext | undefined } object UIContext, or undefined when failed.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br> 1. The number of parameters is incorrect.
   * <br> 2. Invalid parameter type of context.
   * @throws { BusinessError } 100001 - Internal error.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static createUIContextWithoutWindow(
    context: common.UIAbilityContext | common.ExtensionContext): UIContext | undefined;

  /**
   * Destroy the UI instance singleton without window.
   *
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static destroyUIContextWithoutWindow(): void;

  /**
   * 线程安全的UI状态变量更新接口。
   *
   * @param { VoidCallback } callback - 在UI线程中执行的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  setUIStates(callback: VoidCallback): void;

  /**
   * Get id of the UI instance.
   *
   * @returns { int } Returns id of the UI instance.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getId(): int;

  /**
   * 设置不可见Image节点内存回收配置开关，由系统应用配置，默认不开启；开启后，在应用退后台不可见页面下挂载的Image节点会进行内存回收。
   *
   * @param { boolean } enabled - 使能开关项：true开启，false关闭；
   *     默认不开启，由系统应用按需开启。
   *     <br>默认值：false
   *     配置为异常undefined时，恢复为默认值false
   *     <br>默认值：false
   *     配置为异常undefined时，恢复为默认值false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  recycleInvisibleImageMemory(enabled: boolean): void;

  /**
   * 设置自定义键盘接续特性。
   *
   * @param { CustomKeyboardContinueFeature } feature - 自定义键盘接续特性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setCustomKeyboardContinueFeature(feature: CustomKeyboardContinueFeature): void;

  /**
   * 获取UIContext对应页面的根节点。
   *
   *
   * @returns { FrameNode | null } The root node of the corresponding page of the UIContext,
   *     or null if no root node exists.
   * @throws { BusinessError } 120007 - The UIContext is not available.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  getPageRootNode(): FrameNode | null;

  /**
   * 检查当前UI实例是否处于分栏模式。
   *
   * @returns { boolean } 返回当前UI实例是否处于分栏模式。true表示处于分栏模式，false表示未处于分栏模式。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  isEasySplit(): boolean;

  /**
   * 是否启用或禁用事件直通。
   *
   * @param { boolean | undefined } enabled - 启用或禁用事件直通。默认值为false。
   * @param { RawInputEventType } eventType - 原始输入事件的类型。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  enableEventPassthrough(enabled: boolean | undefined, eventType: RawInputEventType): void;

  /**
   * 设置文本组件的文本选择清除策略。
   * 默认策略：**TextSelectionClearPolicy.KEEP_ON_EXTERNAL_CLICK**。
   *
   * @param { TextSelectionClearPolicy } policy - 文本选择清除策略。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setTextSelectionClearPolicy(policy: TextSelectionClearPolicy): void;

  /**
   * 获取智能手势控制器。
   *
   * @returns { SmartGestureController } 智能手势控制器。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  getSmartGestureController(): SmartGestureController;
}

/**
 * Enum of KeyBoardAvoidMethodType
 *
 * @enum { number } KeyBoardAvoidMethodType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export const enum KeyboardAvoidMode {

  /**
   * Default Type, offset the whole page when keyBoard height changed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  OFFSET = 0,

  /**
   * Resize Type, resize the page when keyBoard height changed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RESIZE = 1,

  /**
   * Offset Type, offset the whole page when caret position or keyboard height changed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  OFFSET_WITH_CARET = 2,

  /**
   * Resize Type, resize the whole page when when caret position or keyboard height changed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RESIZE_WITH_CARET = 3,

  /**
   * None Type, nothing to do when keyboard height changed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NONE = 4
}

/**
 * TextSelectionClearPolicy的枚举
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export const enum TextSelectionClearPolicy {

  /**
   * 在文本组件之外单击时，保留选定文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  KEEP_SELECTED_TEXT_ON_EXTERNAL_TOUCH = 0,

  /**
   * 在文本组件外部单击时清除选定的文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  CLEAR_SELECTED_TEXT_ON_EXTERNAL_TOUCH = 1
}

/**
 * Enum of SwiperDynamicSyncSceneType
 *
 * @enum { number } SwiperDynamicSyncSceneType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export const enum SwiperDynamicSyncSceneType {

  /**
   * Scene type is GESTURE.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  GESTURE = 0,

  /**
   * Scene type is ANIMATION.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ANIMATION = 1
}

/**
 * Enum of scene type for Marquee
 *
 * @enum { number } MarqueeDynamicSyncSceneType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export const enum MarqueeDynamicSyncSceneType {

  /**
   * Scene type is ANIMATION.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ANIMATION = 1
}

/**
 * class TextMenuController
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class TextMenuController {

  /**
   * Set text menu options.
   *
   * @param { TextMenuOptions } options - the options of the text menu.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setMenuOptions(options: TextMenuOptions): void;

  /**
   * Disable all system service menus, such as translation and ai writer.
   * True means disable, false means enable.
   *
   * @param { boolean } disable - flag to disable service menu items
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static disableSystemServiceMenuItems(disable: boolean): void;
}

/**
* 自定义键盘接续特性的枚举。
*
 * @enum { int } CustomKeyboardContinueFeature
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export const enum CustomKeyboardContinueFeature {

  /**
   * 使能自定义键盘接续。
   *
   * @syscap SystemCapability. ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ENABLED = 0,

  /**
   * 关闭自定义键盘接续。
   *
   * @syscap SystemCapability. ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DISABLED = 1
}