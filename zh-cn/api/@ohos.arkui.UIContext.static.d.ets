
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

import { CustomBuilder, CustomBuilderT } from '@ohos.arkui.component';

import { GestureEvent, GestureRecognizer } from '@ohos.arkui.component';

import { ResourceStr, SizeOptions, VoidCallback } from '@ohos.arkui.component';

import { Nullable, Color, FontStyle, WidthBreakpoint, HeightBreakpoint, PixelRoundMode, RawInputEventType } from '@ohos.arkui.component';

import { TimePickerDialogOptions } from '@ohos.arkui.component';

import { AlertDialogParamWithConfirm, AlertDialogParamWithButtons, AlertDialogParamWithOptions } from '@ohos.arkui.component';

import { ActionSheetOptions } from '@ohos.arkui.component';

import { LocalStorage } from '@ohos.arkui.stateManagement';

import { DatePickerDialogOptions } from '@ohos.arkui.component';

import { TabsController } from '@ohos.arkui.component';

import { Scroller } from '@ohos.arkui.component';

import { KeyProcessingMode } from '@ohos.arkui.component';

import { TextMenuOptions, TextLayoutOptions, StyledString, Paragraph } from '@ohos.arkui.component';

import type { Callback } from './arkui/component/common';

import type { AsyncCallback } from './@ohos.base';

import { InputEventMonitor,  InputEventListener } from '@ohos.arkui.component';

import { AnimatorOptions, AnimatorResult } from './@ohos.animator';

import { SmartGestureAction, OperateIntention } from '@ohos.arkui.component';

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

import { ComponentContentBase } from 'arkui.ComponentContent';

import { TextPickerDialogOptions } from './arkui/component/textPicker';

import { TabsController } from './arkui/component/tabs';

import { TimePickerDialogOptions } from './arkui/component/timePicker';

import { LocalStorage } from './arkui/stateManagement/storage/localStorage';

import { DatePickerDialogOptions } from './arkui/component/datePicker';

import { GestureEvent, GestureRecognizer } from './arkui/component/gesture';

import { AlertDialogParamWithConfirm, AlertDialogParamWithButtons, AlertDialogParamWithOptions } from './arkui/component/alertDialog';

import { CustomBuilder, CustomBuilderT } from './arkui/component/builder';

import { ActionSheetOptions } from './arkui/component/actionSheet';

import { Scroller } from './arkui/component/scroll';

import { ResourceStr, SizeOptions, VoidCallback } from './arkui/component/units';

import { KeyProcessingMode } from './arkui/component/focus';

import type { Callback, AsyncCallback } from './@ohos.base';

import { TextMenuOptions, TextLayoutOptions, KeyboardAppearanceConfig } from './arkui/component/textCommon';

import { ComponentContentBase } from '../ComponentContent';

import { NodeEdges } from 'arkui.Graphics';

import { ComponentContent, FrameNode, Frame, LengthMetrics } from '@ohos.arkui.node';

import { ClickEvent, ExpectedFrameRateRange, DragItemInfo, AnimateParam, KeyframeAnimateParam, KeyframeState, SheetOptions, PopupCommonOptions, MenuOptions, KeyEvent, MouseEvent, TouchEvent } from './arkui/component/common';

import { Nullable, Color, FontStyle, WidthBreakpoint, HeightBreakpoint, PixelRoundMode, RawInputEventType } from './arkui/component/enums';

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
 * 提供注册组件布局和组件绘制送显完成回调通知的能力。送显指节点的绘制命令发送到图形服务并完成显示。例如，开发者可在组件布局完成后获取组件精确尺寸，或在送显完成后执行截图、动画同步等操作，适用于需要精确感知组件布局和绘制时机的场景。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class UIInspector {
  /**
   * 注册组件布局和组件绘制送显完成回调通知。例如，开发者可在组件布局完成后获取组件精确尺寸，或在送显完成后执行截图、动画同步等操作。
   *
   * @param { string } id - 指定组件id，该id通过通用属性id或者key设置。
   * @returns { inspector.ComponentObserver } 组件回调事件监听句柄，用于注册和取消注册监听回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  createComponentObserver(id: string): inspector.ComponentObserver;
  /**
   * 注册组件布局和组件绘制送显完成回调通知。送显指节点的绘制命令发送到图形服务并完成显示。例如，开发者可在组件布局完成后获取组件精确尺寸，或在送显完成后执行截图、动画同步等操作。
   * 相比createComponentObserver，新增支持传入UniqueID（系统为节点分配的唯一标识）。
   *
   * @param { string | int } id - 类型为string时，为指定的组件id，该id通过通用属性id或者key设置。使用组件id创建监听句柄时，请确保该id对应的组件已经存在，否则后续监听无法生效。
   *     类型为int时，为系统为节点分配的唯一标识UniqueID，UniqueID通过getUniqueId获取。
   *     使用UniqueID创建监听句柄时，请确保UniqueID对应的节点已经存在，否则后续监听无法生效。int的取值范围为1~2147483647的整数。
   * @returns { inspector.ComponentObserver } 组件回调事件监听句柄，用于注册和取消注册监听回调。
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  id: string | int;

  /**
   * 目标节点所在的自定义组件的UniqueID。当上述id指定为string类型时，可通过此属性圈定范围。方便开发者在一定范围内保证id: string的唯一性。
   *
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
 * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
   * @since 23 static
   */
  closeToast(toastId: int): void;

  /**
   * 弹出对话框。
   *
   * @param { promptAction.ShowDialogOptions } options - 选项。
   * @param { AsyncCallback<promptAction.ShowDialogSuccessResponse> } callback - showDialog的回调。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  /**
   * 创建并显示对话框，对话框响应结果使用callback异步回调返回。
   *
   * @param { promptAction.ShowDialogOptions } options - 页面显示对话框信息描述。
   * @param { AsyncCallback<promptAction.ShowDialogSuccessResponse> } callback - 回调函数。弹出对话框成功，err为undefined，data为获取到的对话框响应结果，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 103306 - The dialog cannot be opened due to the system pop-up window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  showDialog(options: promptAction.ShowDialogOptions, callback: AsyncCallback<promptAction.ShowDialogSuccessResponse>): void;

  /**
   * 弹出对话框。
   *
   * @param { promptAction.ShowDialogOptions } options - 选项。
   * @returns { Promise<promptAction.ShowDialogSuccessResponse> } the promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  /**
   * 创建并显示对话框，使用Promise异步回调获取对话框的响应结果。
   *
   * @param { promptAction.ShowDialogOptions } options - 对话框选项。
   * @returns { Promise<promptAction.ShowDialogSuccessResponse> } Promise对象，返回对话框的响应结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 103306 - The dialog cannot be opened due to the system pop-up window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  showDialog(options: promptAction.ShowDialogOptions): Promise<promptAction.ShowDialogSuccessResponse>;

  /**
   * 显示操作菜单。
   *
   * @param { promptAction.ActionMenuOptions } options - 选项。
   * @param { AsyncCallback<promptAction.ActionMenuSuccessResponse> } callback - showActionMenu的回调。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  /**
   * 创建并显示操作菜单，菜单响应结果使用callback异步回调返回。
   *
   * @param { promptAction.ActionMenuOptions } options - 操作菜单选项。
   * @param { AsyncCallback<promptAction.ActionMenuSuccessResponse> } callback - 回调函数。弹出操作菜单成功，err为undefined，data为获取到的操作菜单响应结果，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 103306 - The dialog cannot be opened due to the system pop-up window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  showActionMenu(options: promptAction.ActionMenuOptions, callback: AsyncCallback<promptAction.ActionMenuSuccessResponse>): void;

  /**
   * 显示操作菜单。
   *
   * @param { promptAction.ActionMenuOptions } options - 选项。
   * @returns { Promise<promptAction.ActionMenuSuccessResponse> } callback - the callback of showActionMenu.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  /**
   * 创建并显示操作菜单，通过Promise异步回调获取菜单的响应结果。
   *
   * @param { promptAction.ActionMenuOptions } options - 操作菜单选项。
   * @returns { Promise<promptAction.ActionMenuSuccessResponse> } Promise对象，返回菜单的响应结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 103306 - The dialog cannot be opened due to the system pop-up window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
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
   * @throws { BusinessError } 103301 - The ComponentContent is incorrect.
   * @throws { BusinessError } 103302 - Dialog content already exists.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  /**
   * 创建并弹出dialogContent对应的自定义弹窗，使用Promise异步回调。通过该接口弹出的弹窗内容样式完全按照dialogContent中设置的样式显示，即相当于customDialog设置customStyle为true时的
   * 显示效果。
   *
   * @param { ComponentContent<T> } dialogContent - 自定义弹窗中显示的组件内容。
   * @param { promptAction.BaseDialogOptions } options - 弹窗样式。
   *   <br>**说明：** 如果BaseDialogOptions中的[isModal](docroot://reference/apis-arkui/js-apis-promptAction.md#basedialogoptions11)
   *   与[showInSubWindow](docroot://reference/apis-arkui/js-apis-promptAction.md#basedialogoptions11)同时设置为true，
   *   则只生效showInSubWindow = true，此时为非模态弹出框且不会显示蒙层，并在子窗口中显示。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The ComponentContent is incorrect.
   * @throws { BusinessError } 103302 - Dialog content already exists.
   * @throws { BusinessError } 103306 - The dialog cannot be opened due to the system pop-up window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  openCustomDialog<T extends Object>(dialogContent: ComponentContent<T>, options?: promptAction.BaseDialogOptions): Promise<void>;

  /**
   * 打开带有frameNode和控制器的自定义对话框。
   *
   * @param { ComponentContent<T> } dialogContent - 自定义对话框的内容。
   * @param { promptAction.DialogController } controller - 对话框控制器。
   * @param { promptAction.BaseDialogOptions } options - 选项。
   * @returns { Promise<void> } 函数返回的promise。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The ComponentContent is incorrect.
   * @throws { BusinessError } 103302 - Dialog content already exists.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  /**
   * 创建并弹出dialogContent对应的自定义弹窗，使用Promise异步回调。支持传入弹窗控制器与自定义弹窗绑定，后续可以通过控制器控制自定义弹窗。
   * 
   * 通过该接口弹出的弹窗内容样式完全按照dialogContent中设置的样式显示，即相当于customDialog设置customStyle为true时的显示效果。
   *
   * @param { ComponentContent<T> } dialogContent - 自定义弹窗中显示的组件内容。
   * @param { promptAction.DialogController } controller - 自定义弹窗的控制器。
   * @param { promptAction.BaseDialogOptions } options - 自定义弹窗的样式。 
   *    <br>**说明：** 如果BaseDialogOptions中的[isModal](docroot://reference/apis-arkui/js-apis-promptAction.md#basedialogoptions11)
   *    与[showInSubWindow](docroot://reference/apis-arkui/js-apis-promptAction.md#basedialogoptions11)同时设置为true，
   *    则只生效showInSubWindow = true，此时为非模态弹出框且不会显示蒙层，并在子窗口中显示。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 103301 - The ComponentContent is incorrect.
   * @throws { BusinessError } 103302 - Dialog content already exists.
   * @throws { BusinessError } 103306 - The dialog cannot be opened due to the system pop-up window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  openCustomDialogWithController<T extends Object>(dialogContent: ComponentContent<T>, controller: promptAction.DialogController,
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
   * @stagemodelonly
   * @since 23 static
   */
  updateCustomDialog<T extends Object>(dialogContent: ComponentContent<T>, options: promptAction.BaseDialogOptions): Promise<void>;

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
   * @stagemodelonly
   * @since 23 static
   */
  closeCustomDialog<T extends Object>(dialogContent: ComponentContent<T>): Promise<void>;

  /**
   * 打开自定义对话框。
   *
   * @param { promptAction.CustomDialogOptions } options - 选项。
   * @returns { Promise<int> } 返回closeCustomDialog可以使用的对话框ID。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  /**
   * 创建并弹出自定义弹窗。使用Promise异步回调返回对话框的id，可供closeCustomDialog使用。
   *
   * @param { promptAction.CustomDialogOptions } options - 自定义弹窗的内容。
   *   <br>**说明：** 如果BaseDialogOptions中的[isModal](docroot://reference/apis-arkui/js-apis-promptAction.md#basedialogoptions11)
   *   与[showInSubWindow](docroot://reference/apis-arkui/js-apis-promptAction.md#basedialogoptions11)同时设置为true，
   *   则只生效showInSubWindow = true，此时为非模态弹出框且不会显示蒙层，并在子窗口中显示。
   * @returns { Promise<int> } Promise对象。返回对话框id，可供closeCustomDialog使用。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 103306 - The dialog cannot be opened due to the system pop-up window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  openCustomDialog(options: promptAction.CustomDialogOptions): Promise<int>;

  /**
   * 使用控制器显示自定义对话框。
   *
   * @param { CustomBuilder | CustomBuilderT<int> } builder - 对话框生成器。
   * @param { promptAction.DialogController } [controller] - 对话框控制器。
   * @param { promptAction.DialogOptions } [options] - 选项。
   * @returns { Promise<int> } 返回将由closeCustomDialog使用的对话框ID。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  /**
   * 创建并弹出自定义弹窗。使用Promise异步回调返回对话框的id，可供closeCustomDialog使用。
   * 
   * 支持在自定义弹窗内容中持有弹窗ID进行对应操作。支持传入弹窗控制器与自定义弹窗绑定，后续可以通过控制器控制自定义弹窗。
   *
   * @param { CustomBuilder | CustomBuilderT<int> } builder - 自定义弹窗的内容。
   * @param { promptAction.DialogController } [controller] - 自定义弹窗的控制器。
   * @param { promptAction.DialogOptions } [options] - 自定义弹窗的样式。
   *    <br>**说明：** 如果BaseDialogOptions中的[isModal](docroot://reference/apis-arkui/js-apis-promptAction.md#basedialogoptions11)
   *    与[showInSubWindow](docroot://reference/apis-arkui/js-apis-promptAction.md#basedialogoptions11)同时设置为true，
   *    则只生效showInSubWindow = true，此时为非模态弹出框且不会显示蒙层，并在子窗口中显示。
   * @returns { Promise<int> } Promise对象。返回自定义弹窗ID。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal error.
   * @throws { BusinessError } 103306 - The dialog cannot be opened due to the system pop-up window.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  presentCustomDialog(builder: CustomBuilder | CustomBuilderT<int>, controller?: promptAction.DialogController, options?: promptAction.DialogOptions): Promise<int>;

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
   * @stagemodelonly
   * @since 23 static
   */
  closeCustomDialog(dialogId: int): void;

  /**
   * 返回最顶层显示的弹窗的顺序。
   * 
   * 获取最顶层显示的弹窗的顺序，可以在下一个弹窗时指定期望的顺序。
   *
   * @returns { LevelOrder | undefined } 返回弹窗层级信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getTopOrder(): LevelOrder | undefined;

  /**
   * 获取最底层显示的弹窗的顺序，可以在下一个弹窗时指定期望的顺序。
   *
   * @returns { LevelOrder | undefined } 返回弹窗层级信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
   * @stagemodelonly
   * @since 23 static
   */
  openPopup<T extends Object>(content: ComponentContent<T>, target: TargetInfo, options?: PopupCommonOptions): Promise<void>;

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
   * @stagemodelonly
   * @since 23 static
   */
  updatePopup<T extends Object>(content: ComponentContent<T>, options: PopupCommonOptions, partialUpdate?: boolean): Promise<void>;

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
   * @stagemodelonly
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
   * @stagemodelonly
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
   * @stagemodelonly
   * @since 23 static
   */
  updateMenu<T extends Object>(content: ComponentContent<T>, options: MenuOptions, partialUpdate?: boolean): Promise<void>;

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
   * @stagemodelonly
   * @since 23 static
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
   * @since 26.0.0 static
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
   * @since 26.0.0 static
   */
  showActionSheet(options: ActionSheetOptions): Promise<void>;
}

/**
 * 定义了用于在UIObserver中监听点击事件的回调类型。
 *
 * @param { ClickEvent } event - 触发事件监听的点击事件的相关信息。
 * @param { FrameNode } [node] - 触发事件监听的点击事件所绑定的组件。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
type ClickEventListenerCallback = (event: ClickEvent, node?: FrameNode) => void;
/**
 * Pan手势事件监听函数类型。
 *
 * @param { GestureEvent } event - 触发事件监听的手势事件的相关信息。
 * @param { GestureRecognizer } current - 触发事件监听的手势识别器的相关信息。
 * @param { FrameNode } [node] - 触发事件监听的手势事件所绑定的组件。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
type PanListenerCallback = (event: GestureEvent, current: GestureRecognizer, node?: FrameNode) => void;
/**
 * 定义了用于在UIObserver中监听手势的回调类型。
 *
 * @param { GestureEvent } event - 触发事件监听的手势事件的相关信息。
 * @param { FrameNode } [node] - 触发事件监听的手势事件所绑定的组件。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
type GestureEventListenerCallback = (event: GestureEvent, node?: FrameNode) => void;

/**
 * Router和NavDestination等页面信息，若无对应的Router或NavDestination页面信息，则对应属性为undefined。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface PageInfo {

  /**
   * Router信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  routerPageInfo?: observer.RouterPageInfo;

  /**
   * NavDestination信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  navDestinationInfo?: observer.NavDestinationInfo;
}

/**
 * 初始化[OverlayManager]{@link @ohos.arkui.UIContext}时所用参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface OverlayManagerOptions {

  /**
   * 是否渲染overlay根节点，true表示渲染overlay根节点，false表示不渲染overlay根节点，默认值为true。
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  renderRootOverlay?: boolean;

  /**
   * 是否支持通过侧滑手势关闭OverlayManager下的ComponentContent，true表示可以通过侧滑关闭，false表示不可以通过侧滑关闭，默认值为false。
   *
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
 * 定义了用于在UIObserver中监控某个特定节点渲染状态的回调类型。
 *
 * @param { NodeRenderState } state - 触发事件监听的手势事件的相关信息。
 * @param { FrameNode } [node] - 触发事件监听的手势事件所绑定的组件，如果组件被释放将返回null。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare type NodeRenderStateChangeCallback = (state: NodeRenderState, node?: FrameNode) => void;

/**
 * 此枚举类型表示手势回调触发阶段，对应gesture.d.ts中定义的动作回调，但不同手势类型支持的阶段不同（如SwipeGesture仅包含WILL_START枚举值）。
 *
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
 * 此枚举类型用于指定需要监控的手势类型。
 *
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface GestureTriggerInfo {

  /**
   * 手势事件对象。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  event: GestureEvent;

  /**
   * 手势识别器对象。可从中获取手势的详细信息，但请勿在本地保留此对象，因为当节点释放后该对象可能失效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  current: GestureRecognizer;

  /**
   * 手势动作回调阶段。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  currentPhase: GestureActionPhase;

  /**
   * 触发手势的节点。默认值为null，表示没有触发手势的节点。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  node?: FrameNode;
}

/**
 * 该参数用于指定需要监听的手势回调阶段（传入空数组将无效），仅当手势触发指定阶段时才会发送通知。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface GestureObserverConfigs {

  /**
   * 手势事件对象。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  actionPhases: Array<GestureActionPhase>;
}

/**
 * 定义了用于在UIObserver中监控特定手势触发信息的回调类型。
 *
 * @param { GestureTriggerInfo } info - 交互触发的手势详情。
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
   * @param { observer.ObserverOptions } options - The options object.
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
   * 注册回调函数以监听手势触发信息。
   *
   * @param { GestureListenerType } type - 要监听的手势类型。
   * @param { GestureObserverConfigs } option - 绑定全局监听器时的配置选项。
   * @param { GestureListenerCallback } callback - 手势状态更新时的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
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
   * 注册一个回调函数，以便在特定节点的渲染状态发生变化时调用，当注册成功时，此回调将立即执行一次。
   * 
   * 注意节点数量的限制。出于性能考虑，在单个UI实例中，注册节点太多，将会抛出异常。
   * 
   * 通常，当组件被移动到屏幕外时，会收到RENDER_OUT的通知。但在某些情况下，即使组件移动到屏幕外也不会触发RENDER_OUT通知。例如，具有缓存功能的组件
   * [Swiper]{@link ./arkui/component/common}，即使[cachedCount]{@link SwiperAttribute#cachedCount(count: int|undefined, isShown: boolean|undefined)}
   * 属性中的参数isShown配置为true，也不会触发RENDER_OUT通知。
   *
   * @param { NodeIdentity } nodeIdentity - 节点标识。
   * @param { NodeRenderStateChangeCallback } callback - 回调函数。可以获得节点渲染状态改变事件的
   *     [NodeRenderState]{@link NodeRenderState}和组件的[FrameNode]{@link ./arkui/FrameNode}。
   * @throws { BusinessError } 161001 - The count of nodes monitoring render state is over the limitation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onNodeRenderState(nodeIdentity: NodeIdentity, callback: NodeRenderStateChangeCallback): void;

  /**
   * 取消监听节点渲染状态发生变化的callback回调。
   *
   * @param { NodeIdentity } nodeIdentity - 节点标识。
   * @param { NodeRenderStateChangeCallback } [callback] - 需要被注销的回调函数。不传参数时，取消该节点所有的渲染状态变化指令下发监听回调。
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
   * 监听点击事件指令下发情况，所注册回调将于点击事件触发前触发。回调类型为[ClickEventListenerCallback]{@link ClickEventListenerCallback}。支持屏幕朗读触控模式。
   *
   * @param { ClickEventListenerCallback } callback - 回调函数。可以获得点击事件的[ClickEvent]{@link ClickEvent}和组件的
   *     [FrameNode]{@link ./arkui/FrameNode}。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onWillClick(callback: ClickEventListenerCallback): void;

  /**
   * 取消监听[onWillClick]{@link UIObserver#onWillClick(callback: ClickEventListenerCallback)}中的点击事件指令下发情况。支持屏幕朗读触控模式。
   *
   * @param { ClickEventListenerCallback } [callback] - 需要被注销的回调函数。不传参数时，取消所有的点击事件指令下发监听回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  offWillClick(callback?: ClickEventListenerCallback): void;

  /**
   * 监听点击事件指令下发情况，所注册回调将于点击事件触发后触发。回调类型为[ClickEventListenerCallback]{@link ClickEventListenerCallback}。支持屏幕朗读触控模式。
   *
   * @param { ClickEventListenerCallback } callback - 回调函数。可以获得点击事件的[ClickEvent]{@link ClickEvent}和组件的
   *     [FrameNode]{@link ./arkui/FrameNode}。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onDidClick(callback: ClickEventListenerCallback): void;

  /**
   * 取消监听[onDidClick]{@link UIObserver#onDidClick(callback: ClickEventListenerCallback)}中的点击事件指令下发情况。支持屏幕朗读触控模式。
   *
   * @param { ClickEventListenerCallback } [callback] - 需要被注销的回调函数。不传参数时，取消所有的点击事件指令下发监听回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  offDidClick(callback?: ClickEventListenerCallback): void;

  /**
   * 监听点击事件指令下发情况，所注册回调将于点击事件触发前触发。回调类型为[GestureEventListenerCallback]{@link GestureEventListenerCallback}。支持屏幕朗读触控模式。
   *
   * @param { GestureEventListenerCallback } callback - 回调函数。可以获得点击事件的
   *     [GestureEvent]{@link GestureEvent}和组件的[FrameNode]{@link ./arkui/FrameNode}。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onWillTap(callback: GestureEventListenerCallback): void;

  /**
   * 取消监听[onWillTap]{@link UIObserver#onWillTap(callback: GestureEventListenerCallback)}中的点击事件指令下发情况。支持屏幕朗读触控模式。
   *
   * @param { GestureEventListenerCallback } [callback] - 需要被注销的回调函数。不传参数时，取消所有的点击事件指令下发监听回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  offWillTap(callback?: GestureEventListenerCallback): void;

  /**
   * 监听点击事件指令下发情况，所注册回调将于点击事件触发后触发。回调类型为[GestureEventListenerCallback]{@link GestureEventListenerCallback}。支持屏幕朗读触控模式。
   *
   * @param { GestureEventListenerCallback } callback - 回调函数。可以获得点击事件的
   *     [GestureEvent]{@link GestureEvent}和组件的[FrameNode]{@link ./arkui/FrameNode}。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onDidTap(callback: GestureEventListenerCallback): void;

  /**
   * 取消监听[onDidTap]{@link UIObserver#onDidTap(callback: GestureEventListenerCallback)}中的点击事件指令下发情况。支持屏幕朗读触控模式。
   *
   * @param { GestureEventListenerCallback } [callback] - 需要被注销的回调函数。不传参数时，取消所有的点击事件指令下发监听回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  offDidTap(callback?: GestureEventListenerCallback): void;

  /**
   * 监听Pan手势[onActionStart]{@link PanGesture.onActionStart}事件，在[onActionStart]{@link PanGesture.onActionStart}
   * 事件执行之前执行callback回调。支持手指滑动、鼠标滑动、鼠标滚轮和触摸板拖动，暂不支持屏幕朗读触控模式。
   *
   * @param { PanListenerCallback } callback - 回调函数。可以获得Pan手势事件的
   *     [GestureEvent]{@link GestureEvent}，[GestureRecognizer]{@link GestureRecognizer}和组件的[FrameNode]{@link ./arkui/FrameNode}。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onBeforePanStart(callback: PanListenerCallback): void;

  /**
   * 取消[onBeforePanStart]{@link UIObserver#onBeforePanStart(callback: PanListenerCallback)}监听Pan手势
   * [onActionStart]{@link PanGesture.onActionStart}事件执行前的callback回调。
   *
   * @param { PanListenerCallback } [callback] - 需要被注销的回调函数。不传参数时，取消所有的Pan手势
   *     [onActionStart]{@link PanGesture.onActionStart}事件执行前的指令下发监听回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  offBeforePanStart(callback?: PanListenerCallback): void;

  /**
   * 监听Pan手势[onActionEnd]{@link PanGesture.onActionEnd}事件执行前的指令下发情况，在[onActionEnd]{@link PanGesture.onActionEnd}
   * 事件执行之前执行callback回调。支持手指滑动、鼠标滑动、鼠标滚轮和触摸板拖动，暂不支持屏幕朗读触控模式。
   *
   * @param { PanListenerCallback } callback - 回调函数。可以获得Pan手势事件的
   *     [GestureEvent]{@link GestureEvent}，[GestureRecognizer]{@link GestureRecognizer}和组件的[FrameNode]{@link ./arkui/FrameNode}。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onBeforePanEnd(callback: PanListenerCallback): void;

  /**
   * 取消[onBeforePanEnd]{@link UIObserver#onBeforePanEnd(callback: PanListenerCallback)}监听Pan手势
   * [onActionEnd]{@link PanGesture.onActionEnd}事件执行前的callback回调。
   *
   * @param { PanListenerCallback } [callback] - 需要被注销的回调函数。不传参数时，取消所有的Pan手势
   *     [onActionEnd]{@link PanGesture.onActionEnd}事件执行前的指令下发监听回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  offBeforePanEnd(callback?: PanListenerCallback): void;

  /**
   * 监听Pan手势[onActionStart]{@link PanGesture.onActionStart}事件执行后的指令下发情况，在[onActionStart]{@link PanGesture.onActionStart}
   * 事件执行之后执行callback回调。支持手指滑动、鼠标滑动、鼠标滚轮和触摸板拖动，暂不支持屏幕朗读触控模式。
   *
   * @param { PanListenerCallback } callback - 回调函数。可以获得Pan手势事件的
   *     [GestureEvent]{@link GestureEvent}，[GestureRecognizer]{@link GestureRecognizer}和组件的[FrameNode]{@link ./arkui/FrameNode}。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onAfterPanStart(callback: PanListenerCallback): void;

  /**
   * 取消[onAfterPanStart]{@link UIObserver#onAfterPanStart(callback: PanListenerCallback)}监听Pan手势
   * [onActionStart]{@link PanGesture.onActionStart}事件执行后的callback回调。
   *
   * @param { PanListenerCallback } [callback] - 需要被注销的回调函数。不传参数时，取消所有的Pan手势
   *     [onActionStart]{@link PanGesture.onActionStart}事件执行后的指令下发监听回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  offAfterPanStart(callback?: PanListenerCallback): void;

  /**
   * 监听Pan手势[onActionEnd]{@link PanGesture.onActionEnd}事件执行后的指令下发情况，在[onActionEnd]{@link PanGesture.onActionEnd}
   * 事件执行之后执行callback回调。支持手指滑动、鼠标滑动、鼠标滚轮和触摸板拖动，暂不支持屏幕朗读触控模式。
   *
   * @param { PanListenerCallback } callback - 回调函数。可以获得Pan手势事件的
   *     [GestureEvent]{@link GestureEvent}，[GestureRecognizer]{@link GestureRecognizer}和组件的[FrameNode]{@link ./arkui/FrameNode}。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onAfterPanEnd(callback: PanListenerCallback): void;

  /**
   * 取消[onAfterPanEnd]{@link UIObserver#onAfterPanEnd(callback: PanListenerCallback)}监听Pan手势
   * [onActionEnd]{@link PanGesture.onActionEnd}事件执行后的callback回调。
   *
   * @param { PanListenerCallback } [callback] - 需要被注销的回调函数。不传参数时，取消所有的Pan手势
   *     [onActionEnd]{@link PanGesture.onActionEnd}事件执行后的指令下发监听回调。
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
 * 提供获取组件绘制区域坐标和大小的能力。
 * 
 * > **说明：**
 * >
 * > 以下API需先使用UIContext中的[getComponentUtils()]{@link UIContext#getComponentUtils}方法获取到ComponentUtils对象，再通过该对象调用对应方法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ComponentUtils {
  /**
   * 获取组件大小、位置、平移、缩放、旋转及仿射矩阵属性信息。
   * 
   * > **说明：**
   * >
   * > 该接口需要在目标组件布局完成以后获取目标组件区域大小信息，建议在[布局回调]{@link @ohos.arkui.inspector:inspector}中使用该接口。如果组件动态创建但未挂载组件树，则无法通过该接口获取正常的
   * > 组件信息。因为组件在未挂载组件树的情况下，一般未经过UI框架正常的测量与布局，此时请确保组件正常挂载组件树后再尝试获取组件信息。
   *
   * @param { string } id - 组件唯一标识id。
   * @returns { componentUtils.ComponentInfo } 组件大小、位置、平移缩放旋转及仿射矩阵属性信息。
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
   * @param { OrderOverlayOptions } [options] - 浮层的选项。
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
 * 提供发起主动拖拽的能力，当应用接收到触摸或长按等事件时可以主动发起拖拽的动作，并在其中携带拖拽信息。
 * 
 * > **说明：**
 * >
 * > 以下API需先使用UIContext中的[getDragController()]{@link UIContext#getDragController}方法获取DragController实例，再通过此实例调用对应方法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class DragController {
  /**
   * 主动发起拖拽能力，传入拖拽发起后跟手效果所拖拽的对象以及携带拖拽信息。通过回调返回拖拽事件结果。
   *
   * @param { CustomBuilder | DragItemInfo | undefined } custom - 拖拽发起后跟手效果所拖拽的对象。 <br/> **说明：** <br/>不支持全局builder。如果
   *     builder中使用了[Image]{@link ./arkui/component/common}组件，应尽量开启同步加载，即配置Image的
   *     [syncLoad]{@link ImageAttribute#syncLoad}为true。该builder只用于生成当次
   *     拖拽中显示的图片。builder的根组件宽高为0时，无法生成拖拽显示的图片导致拖拽失败。builder的修改不会同步到当前正在拖拽的图片，对builder的修改需要在下一次拖拽时生效。
   * @param { dragController.DragInfo } dragInfo - 拖拽信息。
   * @param { AsyncCallback<dragController.DragEventParam> } callback - 拖拽结束返回结果的回调<br/>- event：拖拽事件信息，仅包括拖拽结果。<br/>-
   *     extraParams：拖拽事件额外信息。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal handling failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  executeDrag(custom: CustomBuilder | DragItemInfo | undefined, dragInfo: dragController.DragInfo,
    callback: AsyncCallback<dragController.DragEventParam>): void;

  /**
   * 主动发起拖拽能力，传入拖拽发起后跟手效果所拖拽的对象以及携带拖拽信息。通过Promise返回拖拽事件结果。
   *
   * @param { CustomBuilder | DragItemInfo | undefined } custom - 拖拽发起后跟手效果所拖拽的对象。
   * @param { dragController.DragInfo } dragInfo - 拖拽信息。
   * @returns { Promise<dragController.DragEventParam> | null } 拖拽结束返回结果的回调<br/>- event：拖拽事件信息，仅包括拖拽结果。
   *     <br/>- extraParams：拖拽事件额外信息。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal handling failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  executeDrag(custom: CustomBuilder | DragItemInfo | undefined, dragInfo: dragController.DragInfo)
    : Promise<dragController.DragEventParam> | null;

  /**
   * 创建拖拽的Action对象，需要显式指定拖拽背板图（可多个），以及拖拽的数据，跟手点等信息；当通过一个已创建的Action对象发起的拖拽未结束时，无法再次创建新的Action对象，接口会抛出异常；当Action对象的生命周期结束
   * 后，注册在该对象上的回调函数会失效，因此需要在一个尽量长的作用域下持有该对象，并在每次发起拖拽前通过createDragAction返回新的对象覆盖旧值。
   * 
   * > **说明：**
   * >
   * > 建议控制传递的拖拽背板数量，传递过多容易导致拖起的效率问题。
   *
   * @param { Array<CustomBuilder | DragItemInfo> | undefined } customArray - 拖拽发起后跟手效果所拖拽的对象。
   * @param { dragController.DragInfo } dragInfo - 拖拽信息。
   * @returns { dragController.DragAction } 创建拖拽Action对象，主要用于后面实现注册监听拖拽状态改变事件和启动拖拽服务。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - Internal handling failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  createDragAction(customArray: Array<CustomBuilder | DragItemInfo> | undefined, dragInfo: dragController.DragInfo): dragController.DragAction;

  /**
   * 返回一个代表拖拽背板的对象。
   *
   * @returns { dragController.DragPreview } 一个代表拖拽背板的对象，提供背板样式设置的接口，在OnDrop和OnDragEnd回调中使用不生效。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getDragPreview(): dragController.DragPreview;

  /**
   * 当目标从父组件拖拽到子组件时，通过该方法设置是否会触发父组件的onDragLeave的回调。
   *
   * @param { boolean } enable - 将目标从父组件拖拽到子组件时，是否会触发父组件的onDragLeave的回调。true表示触发父组件的onDragLeave的回调，false表示不触发。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setDragEventStrictReportingEnabled(enable: boolean): void;

  /**
   * 控制应用是否可以发起拖拽。
   *
   * @param { dragController.DragStartRequestStatus } requestStatus - 定义应用是否可以发起拖拽。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
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
   * @since 23 static
   */
  cancelDataLoading(key: string): void;

  /**
   * 中断待执行的跟手变形落位动效，并立即触发其收尾流程。
   *
   * @returns { boolean } 返回中断结果。<br>返回true表示中断成功，返回false表示当前不存在待中断的跟手变形落位动效。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
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
 * 提供控制焦点的能力，如清除、移动和激活焦点等功能。
 * 
 * > **说明：**
 * >
 * > 以下API需先使用UIContext中的[getFocusController()]{@link UIContext#getFocusController}方法获取FocusController实例，再通过该实例调用对应方法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class FocusController {
  /**
   * 清除焦点，将焦点强制转移到页面根容器节点，焦点链路上其他节点失焦。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  clearFocus(): void;

  /**
   * 通过组件的id将焦点转移到组件树对应的实体节点，当前帧生效。
   *
   * @param { string } key - 节点对应的[组件标识]{@link ./arkui/component/common}。
   * @throws { BusinessError } 150001 - the component cannot be focused.
   * @throws { BusinessError } 150002 - This component has an unfocusable ancestor.
   * @throws { BusinessError } 150003 - the component is not on tree or does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  requestFocus(key: string): void;

  /**
   * 设置当前界面的[焦点激活态](docroot://ui/arkts-common-events-focus-event.md)。
   *
   * @param { boolean } isActive - 设置是否进入/退出焦点激活态。<br/>true表示设置进入焦点激活态，false表示设置退出焦点激活态。
   * @param { boolean } [autoInactive] - 设置焦点激活态退出逻辑。<br/>为true时，会自动在触摸事件、鼠标事件触发时退出，为false时，仅受开发者API控制。<br/>默认值：true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
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
   * @since 23 static
   */
  isActive(): boolean;

  /**
   * 设置页面切换时，新的页面是否需要主动获取焦点。
   *
   * @param { boolean } isAutoFocusTransfer - 设置页面切换时，新的页面是否需要主动获取焦点，例如[Router]{@link @ohos.router:router}、
   *     [Navigation]{@link ./arkui/component/common}、[Menu]{@link ./arkui/component/common}、
   *     [Dialog]{@link @ohos.arkui.advanced.Dialog}、[Popup]{@link @ohos.arkui.advanced.Popup}等。true表示需要主动获取焦点，false表示不需
   *     要主动获取焦点。默认值为true。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setAutoFocusTransfer(isAutoFocusTransfer: boolean): void;

  /**
   * 设置按键事件处理的优先级。
   *
   * @param { KeyProcessingMode } mode - 按键处理模式。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setKeyProcessingMode(mode: KeyProcessingMode): void;
}

/**
 * 光标样式。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Pointer
 * @since 23 static
 */
export type PointerStyle = pointer.PointerStyle;

/**
 * 提供光标样式设置的能力。
 * 
 * > **说明：**
 * >
 * > 以下API需先使用UIContext中的[getCursorController()]{@link UIContext#getCursorController}方法获取CursorController实例，再通过此实例调用对应方法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class CursorController {
  /**
   * 恢复默认的光标样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
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
   * @since 23 static
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
 * 当前组件所在Ability的上下文。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @since 23 static
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
 * @since 23 static
 */
export declare class ComponentSnapshot {
  /**
   * 获取已加载的组件的截图，传入组件的[组件标识]{@link ./arkui/component/common}，找到对应组件进行截图。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 截图会获取最近一帧的绘制内容。如果在组件触发更新的同时调用截图，更新的渲染内容不会被截取到，截图会返回上一帧的绘制内容。
   *
   * @param { string } id - 目标组件的[组件标识]{@link ./arkui/component/common}。<br/>**说明：** 不支持未挂树组件，当传入的组件标识是离屏或缓存未挂树的节点时，系统不会
   *     对其进行截图。
   * @param { AsyncCallback<image.PixelMap> } callback - 回调函数。当截图返回结果成功，err为undefined，data为获取到的image.
   *     [PixelMap]{@link @ohos.multimedia.image:image.PixelMap}；否则为错误对象。
   * @param { componentSnapshot.SnapshotOptions } [options] - 截图相关的自定义参数。
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
  get(id: string, callback: AsyncCallback<image.PixelMap>, options?: componentSnapshot.SnapshotOptions): void;

  /**
   * 获取已加载的组件的截图，传入组件的[组件标识]{@link ./arkui/component/common}，找到对应组件进行截图。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 截图会获取最近一帧的绘制内容。如果在组件触发更新的同时调用截图，更新的渲染内容不会被截取到，截图会返回上一帧的绘制内容。
   *
   * @param { string } id - 目标组件的[组件标识]{@link ./arkui/component/common}。<br/>**说明：** 不支持未挂树组件，当传入的组件标识是离屏或缓存未挂树的节点时，系统不会
   *     对其进行截图。
   * @param { componentSnapshot.SnapshotOptions } [options] - 截图相关的自定义参数。
   * @returns { Promise<image.PixelMap> | null } Promise对象，返回组件截图对象。
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
   * 传入CustomBuilder自定义组件，系统对其进行离屏构建后进行截图。使用callback异步回调。
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
   * @param { int } [delay] - 指定触发截图指令的延迟时间。当布局中使用了图片组件时，需要指定延迟时间，以便系统解码图片资源。资源越大，解码需要的时间越长，建议尽量使用不需要解码的PixelMap资源。<br/>
   *     当使用PixelMap资源或对Image组件设置[syncLoad]{@link ImageAttribute#syncLoad}为true时，可以配置delay为0，强制
   *     不等待触发截图。该延迟时间并非指接口从调用到返回的时间，由于系统需要对传入的builder进行临时离屏构建，因此返回的时间通常要比该延迟时间长。<br/>**说明：** 截图接口传入的builder中，不应使用状态变量控制
   *     子组件的构建，如果必须要使用，在调用截图接口时，也不应再有变化，以避免出现截图不符合预期的情况。<br/> 默认值：300 <br/> 单位：毫秒 <br/> 取值范围：[0, +∞)，小于0时按默认值处理。
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
   * @throws { BusinessError } 160003 - Unsupported color space or dynamic range mode in snapshot options.
   * @throws { BusinessError } 160004 - isAuto(true) is not supported for offscreen node snapshots.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  createFromBuilder(builder: CustomBuilder, callback: AsyncCallback<image.PixelMap>,
    delay?: int, checkImageStatus?: boolean, options?: componentSnapshot.SnapshotOptions): void;

  /**
   * 传入CustomBuilder自定义组件，系统对其进行离屏构建后进行截图。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > - 由于需要等待组件构建、渲染成功，离屏截图的回调有500ms以内的延迟，不适宜使用在对性能敏感的场景。
   * >
   * > - 部分执行耗时任务的组件可能无法及时在截图前加载完成，因此会截取不到加载成功后的图像。例如：加载网络图片的[Image]{@link image}组件、[Web]{@link web}组件。
   *
   * @param { CustomBuilder } builder - 自定义组件构建函数。<br/>**说明：** 不支持全局builder。<br/>builder的根组件宽高为0时，截图操作会失败并抛出100001错误码。
   * @param { int } [delay] - 指定触发截图指令的延迟时间。当布局中使用了图片组件时，需要指定延迟时间，以便系统解码图片资源。资源越大，解码需要的时间越长，建议尽量使用不需要解码的PixelMap资源。<br/>
   *     当使用PixelMap资源或对Image组件设置[syncLoad]{@link ImageAttribute#syncLoad}为true时，可以配置delay为0，强制
   *     不等待触发截图。该延迟时间并非指接口从调用到返回的时间，由于系统需要对传入的builder进行临时离屏构建，因此返回的时间通常要比该延迟时间长。<br/>**说明：** 截图接口传入的builder中，不应使用状态变量控制
   *     子组件的构建，如果必须要使用，在调用截图接口时，也不应再有变化，以避免出现截图不符合预期的情况。<br/> 默认值：300 <br/> 单位：毫秒<br/> 取值范围：[0, +∞)，小于0时按默认值处理。
   * @param { boolean } [checkImageStatus] - 指定是否允许在截图之前，校验图片解码状态。如果为true，则会在截图之前检查所有Image组件是否已经解码完成，如果没有完成检查，则会放弃截图并返回异
   *     常。<br/>默认值：false
   * @param { componentSnapshot.SnapshotOptions } [options] - 截图相关的自定义参数。
   * @returns { Promise<image.PixelMap> | null } Promise对象，返回组件截图对象。
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
  createFromBuilder(builder: CustomBuilder, delay?: int,
    checkImageStatus?: boolean, options?: componentSnapshot.SnapshotOptions): Promise<image.PixelMap> | null;

  /**
   * 获取已加载的组件的截图。传入组件的[组件标识]{@link ./arkui/component/common}，找到对应组件进行截图，同步等待截图完成返回
   * [PixelMap]{@link @ohos.multimedia.image:image.PixelMap}。本方法会阻塞主线程，请谨慎使用。接口的最大等待时间为3s，如果3s后未返回将会抛出异常。
   * 
   * > **说明：**
   * >
   * > 截图会获取最近一帧的绘制内容。如果在组件触发更新的同时调用截图，更新的渲染内容不会被截取到，截图会返回上一帧的绘制内容。
   *
   * @param { string } id - 目标组件的[组件标识]{@link ./arkui/component/common}。 <br/>**说明：** 不支持未挂树组件，当传入的组件标识是离屏或缓存未挂树的节点时，系统不
   *     会对其进行截图。
   * @param { componentSnapshot.SnapshotOptions } [options] - 截图相关的自定义参数。
   * @returns { image.PixelMap | null } 截图返回的结果。
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
   * 获取已加载的组件的截图，传入组件的uniqueId，找到对应组件进行截图。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 截图会获取最近一帧的绘制内容。如果在组件触发更新的同时调用截图，更新的渲染内容不会被截取到，截图会返回上一帧的绘制内容。
   *
   * @param { int } uniqueId - 目标组件的uniqueId。FrameNode节点的uniqueId可通过
   *     [getUniqueId]{@link ./arkui/FrameNode:FrameNode#getUniqueId}接口获取。 <br/>**说明：** 不支持未挂树组件，当传入的组件标识是离屏或缓存未挂树的节点时，系
   *     统不会对其进行截图。
   * @param { componentSnapshot.SnapshotOptions } [options] - 截图相关的自定义参数。
   * @returns { Promise<image.PixelMap> | null } Promise对象，返回组件截图对象。
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
   * 获取已加载的组件的截图，传入组件的uniqueId，找到对应组件进行截图。同步等待截图完成返回[PixelMap]{@link @ohos.multimedia.image:image.PixelMap}。
   * 
   * > **说明：**
   * >
   * > 截图会获取最近一帧的绘制内容。如果在组件触发更新的同时调用截图，更新的渲染内容不会被截取到，截图会返回上一帧的绘制内容。
   *
   * @param { int } uniqueId - 目标组件的uniqueId。FrameNode节点的uniqueId可通过
   *     [getUniqueId]{@link ./arkui/FrameNode:FrameNode#getUniqueId}接口获取。<br/>**说明：** 不支持未挂树组件，当传入的组件标识是离屏或缓存未挂树的节点时，系统
   *     不会对其进行截图。
   * @param { componentSnapshot.SnapshotOptions } [options] - 截图相关的自定义参数。
   * @returns { image.PixelMap } 截图返回的结果。
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
   * 将传入的content对象进行截图。使用Promise异步回调。
   *
   * @param { ComponentContent<T> } content - 当前UIContext显示的组件内容。
   * @param { int } [delay] - 指定触发截图指令的延迟时间。当布局中使用了图片组件时，需要指定延迟时间，以便系统解码图片资源。资源越大，解码需要的时间越长，建议尽量使用不需要解码的PixelMap资源。<br/>
   *     当使用PixelMap资源或对Image组件设置[syncLoad]{@link ImageAttribute#syncLoad}为true时，可以配置delay为0，强制
   *     不等待触发截图。该延迟时间并非指接口从调用到返回的时间，由于系统需要对传入的builder进行临时离屏构建，因此返回的时间通常要比该延迟时间长。<br/>**说明：** 截图接口传入的builder中，不应使用状态变量控制
   *     子组件的构建，如果必须要使用，在调用截图接口时，也不应再有变化，以避免出现截图不符合预期的情况。<br/> 取值范围：[0,+∞) ，小于0时按默认值处理。<br/>默认值：300 <br/> 单位：毫秒
   * @param { boolean } [checkImageStatus] - 指定是否允许在截图之前，校验图片解码状态。如果为true，则会在截图之前检查所有Image组件是否已经解码完成，如果没有完成检查，则会放弃截图并返回异
   *     常。<br/>默认值：false
   * @param { componentSnapshot.SnapshotOptions } [options] - 截图相关的自定义参数。可以指定截图时图形侧绘制pixelmap的缩放比例与是否强制等待系统执行截图指令前所有绘制指令
   *     都执行完成之后再截图。
   * @returns { Promise<image.PixelMap> | null } Promise对象，返回组件截图对象。
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
   * @returns { Promise<image.PixelMap> | null } 截图返回的结果。
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
    * 查询组件截图的最大尺寸限制。
    *
    * @returns { componentSnapshot.SnapshotSizeLimitation } 组件截图的尺寸限制信息。
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 26.0.0 static
    */
   getSizeLimitation(): componentSnapshot.SnapshotSizeLimitation;
}

/**
 * 智慧手势处理基类。当通过[registerMonitor]{@link SmartGestureController#registerMonitor}接口动态自定义智慧手势行为时，其回调参数类型为具体的子类类型实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export abstract class BaseGestureHandlingProposal {
  /**
   * 智慧手势最终执行动作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  action: SmartGestureAction;

  /**
   * 智慧手势底层操作意图。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  operateIntention: OperateIntention;
}

/**
 * 带目标节点的智慧手势处理基类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export abstract class TargetedGestureProposal extends BaseGestureHandlingProposal {
  /**
   * 处理当前智慧手势的目标节点。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
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
 * @since 26.0.0 static
 */
export declare class ClickActionProposal extends TargetedGestureProposal {
  /**
   * 智慧手势点击动作处理的构造函数。
   *
   * @param { FrameNode } node - 响应点击动作的目标节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(node: FrameNode);
}

/**
 * 智慧手势选中动作处理。当通过[registerMonitor]{@link SmartGestureController#registerMonitor}接口动态自定义智慧手势行为时，设置返回值
 * [GestureHandlingResolution]{@link GestureHandlingResolution}的selectedProposal为该类型对象，会使目标组件被选中。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class SelectActionProposal extends TargetedGestureProposal {
  /**
   * 智慧手势选中动作处理的构造函数。
   *
   * @param { FrameNode } node - 响应选中动作的目标节点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(node: FrameNode);
}

/**
 * 智慧手势空动作处理。当通过[registerMonitor]{@link SmartGestureController#registerMonitor}接口动态自定义智慧手势行为时，设置返回值
 * [GestureHandlingResolution]{@link GestureHandlingResolution}的selectedProposal为该类型对象，不会触发任何动作。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class NoneActionProposal extends BaseGestureHandlingProposal {
  /**
   * 智慧手势空动作处理的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor();
}

/**
 * 智慧手势返回动作处理。当通过[registerMonitor]{@link SmartGestureController#registerMonitor}接口动态自定义智慧手势行为时，设置返回值
 * [GestureHandlingResolution]{@link GestureHandlingResolution}的selectedProposal为该类型对象，会返回上一页面。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class BackPressActionProposal extends BaseGestureHandlingProposal {
  /**
   * 智慧手势返回动作处理的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor();
}

/**
 * 智慧手势翻页动作处理，默认方向为向前翻页，包括向右和向下。当通过[registerMonitor]{@link SmartGestureController#registerMonitor}接口动态自定义智慧手势行为时，设置返回值
 * [GestureHandlingResolution]{@link GestureHandlingResolution}的selectedProposal为该类型对象，会触发目标组件的翻页操作。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class PageSwitchActionProposal extends TargetedGestureProposal {
  /**
   * 智慧手势翻页动作处理的构造函数。
   *
   * @param { FrameNode } node - 响应翻页动作的目标节点。
   * @param { int } pageCount - 翻页数量。<br/>取值范围：[0, +∞)，小于0时按0处理。<br/>单位为页。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
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
   * @since 26.0.0 static
   */
  pageCount: int;
}

/**
 * 智慧手势滚动动作处理，默认方向为向前滚动，包括向右和向下。当通过[registerMonitor]{@link SmartGestureController#registerMonitor}接口动态自定义智慧手势行为时，设置返回值
 * [GestureHandlingResolution]{@link GestureHandlingResolution}的selectedProposal为该类型对象，会触发目标组件的滚动操作。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class ScrollActionProposal extends TargetedGestureProposal {
  /**
   * 智慧手势滚动动作处理的构造函数。
   *
   * @param { FrameNode } node - 响应滚动动作的目标节点。
   * @param { double } distance - 滚动距离。<br/>取值范围：[0, +∞)，小于0时按0处理。<br/>单位为vp。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
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
   * @since 26.0.0 static
   */
  distance: double;
}

/**
 * 智慧手势处理结果声明类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class GestureHandlingResolution {
  /**
   * 智慧手势处理结果的构造函数。
   *
   * @param { boolean } isConsumed - 是否消费当前智慧手势。<br/>true表示消费当前智慧手势，此时如果未设置
   *     [selectedProposal]{@link GestureHandlingResolution#selectedProposal}沿用系统默认动作处理，设置了selectedProposal以自定义动作处理。
   *     <br/>false表示不消费，系统将本次智慧手势视为未处理。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
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
   * @since 26.0.0 static
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
   * @since 26.0.0 static
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
 * @since 26.0.0 static
 */
export declare class SmartGestureController {
  /**
   * 设置是否启用智慧手势的敲一敲和划一划操作。
   * 
   * > **说明：**
   * >
   * > - 该接口仅影响智慧手势的敲一敲和划一划手势，不影响翻腕手势。
   * >
   * > - 关闭后，组件侧{@link CommonMethod#smartGestureShortcut}
   * > 配置仍会保留，但不会响应智慧手势的敲一敲和划一划手势。
   *
   * @param { boolean } enabled - 是否启用智慧手势的敲一敲和划一划手势处理。true表示启用，false表示关闭。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
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
   * @since 26.0.0 static
   */
  registerMonitor(monitorCallback: Callback<BaseGestureHandlingProposal, GestureHandlingResolution>): void;

  /**
   * 注销智慧手势监听回调。
   *
   * @param { Callback<BaseGestureHandlingProposal, GestureHandlingResolution> } monitorCallback - 需要注销的智慧手势监听回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  unregisterMonitor(monitorCallback: Callback<BaseGestureHandlingProposal, GestureHandlingResolution>): void;

  /**
   * 清空当前UIContext下注册的全部智慧手势监听回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  clearMonitors(): void;

  /**
   * 请求将指定组件设置为当前智慧手势选中节点。成功选中后会显示选中提示框，选中框样式根据设备有所不同。
   * 
   * > **说明：**
   * >
   * > - 仅当目标组件满足以下全部条件时，请求才会生效：组件可以响应智慧手势，且组件在屏幕内可见。
   * >
   * > - 组件能否响应智慧手势由{@link CommonMethod#smartGestureShortcut}中的enabled决定。
   *
   * @param { string } id - 组件的[id]{@link CommonMethod.id}。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  requestSelected(id: string): void;

  /**
   * 清空当前智慧手势选中节点。
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
   * @returns { UIContext | undefined } -The UIContext of the last focused UI instance or undefined if no one exists.
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
   * @returns { boolean } - 如果UIContext可用，返回true，否则返回false。
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
   * 获取**UIInspector**对象。
   *
   * @returns { UIInspector } 返回UIInspector实例对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getUIInspector(): UIInspector;

  /**
   * 获取组件树和组件属性。该接口处理时间较长，适用于
   * <br>testing scenarios only.
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
   * 获取指定组件及其子组件的属性。该接口处理时间较长，
   * <br>and is intended for testing scenarios only.
   * @param { string } id - [ID]{@link CommonMethod#id} of the target component.
   * @param { int } depth - Number of layers of child components. If the value is **0**, the attributes of the
   *     specified component and all its child components are obtained. If the value is **1**, only the attributes of
   *     <br>the specified component are obtained. If the value is **2**, the attributes of the specified component and its
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
   * 创建animator动画结果对象（AnimatorResult）。
   *
   * @param { AnimatorOptions | SimpleAnimatorOptions } options - 定义动画选项。
   * @returns { AnimatorResult } Animator结果接口。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
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
   * > - 在组件出现和消失时，可以通过[组件内转场]{@link ./@internal/component/ets/common}添加动画效果。
   * >
   * > - 组件内转场不支持的属性，可以参考[显式动画]{@link ./@internal/component/ets/common}中的
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
   * @since 23 static
   */
  animateTo(value: AnimateParam, event: () => void): void;

  /**
   * alertDialog display.
   *
   * @param { AlertDialogParamWithConfirm | AlertDialogParamWithButtons | AlertDialogParamWithOptions } options - Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  showAlertDialog(options: AlertDialogParamWithConfirm | AlertDialogParamWithButtons | AlertDialogParamWithOptions): void;

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
   * @param { KeyEvent } event - The keyboard event.
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
   *     target uniqueId, or undefined if the frameNode is not existed or does not have navigation information.
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
   * @param { ComponentContentBase } bindSheetContent - 半模态页面中显示的组件内容。
   * @param { SheetOptions } [sheetOptions] - 半模态页面样式。<br/>**说明：** <br/>1. 不支持设置SheetOptions.uiContext，该属性的值固定为当前实例的
   *     UIContext。<br/>2. 若不传递targetId，则不支持设置SheetOptions.preferType为POPUP样式，若设置了POPUP样式则使用CENTER样式替代。<br/>3. 若不传递
   *     targetId，则不支持设置SheetOptions.mode为EMBEDDED模式，默认为OVERLAY模式。<br/>4. 其余属性的默认值参考[SheetOptions]{@link SheetOptions}文
   *     档。
   * @param { int } [targetId] - 需要绑定组件的ID，若不指定则不绑定任何组件。id不存在时返回错误码120004。在传入undefined时返回错误码401。
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
   * @since 23 static
   */
  openBindSheet(bindSheetContent: ComponentContentBase, sheetOptions?: SheetOptions, targetId?: int): Promise<void>;

  /**
   * 更新bindSheetContent对应的半模态页面的样式，使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 不支持更新SheetOptions.UIContext、SheetOptions.mode、回调函数。
   *
   * @param { ComponentContentBase } bindSheetContent - 半模态页面中显示的组件内容。
   * @param { SheetOptions } sheetOptions - 半模态页面样式。<br/>**说明：** <br/>不支持更新SheetOptions.uiContext、SheetOptions.mode、回调函
   *     数。
   * @param { boolean } [partialUpdate] - 半模态页面更新方式, 默认值为false。<br/>**说明：** <br/>1. true为增量更新，保留当前值，更新SheetOptions中的指定属
   *     性。 <br/>2. false为全量更新，除SheetOptions中的指定属性，其他属性恢复默认值。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
  updateBindSheet(bindSheetContent: ComponentContentBase, sheetOptions: SheetOptions, partialUpdate?: boolean): Promise<void>;

  /**
   * 关闭bindSheetContent对应的半模态页面，使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 使用此接口关闭半模态页面时，不会触发shouldDismiss回调。
   *
   * @param { ComponentContentBase } bindSheetContent - 半模态页面中显示的组件内容。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
  unbindTabsFromNestedScrollable(tabsController: TabsController, parentScroller: Scroller, childScroller: Scroller): void;

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
  static createUIContextWithoutWindow(context: common.UIAbilityContext | common.ExtensionContext) : UIContext | undefined;

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

  /**
   * 获取指定节点的亮度采样器。如果找不到节点，则返回undefined。
   *
   * @param { TargetInfo } target - 目标节点ID。
   * @returns { LuminanceSampler | undefined } the luminance sampler or undefined.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  getLuminanceSampler(target: TargetInfo): LuminanceSampler | undefined;

  /**
   * 在附加InputMethod之前，为此输入组件设置键盘外观配置。
   *
   * @param { int } uniqueId - 输入组件的唯一ID
   *     <br>取值范围为全体整数。
   * @param { KeyboardAppearanceConfig } config - 键盘的配置。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setKeyboardAppearanceConfig(uniqueId: int, config: KeyboardAppearanceConfig): void;

  /**
   * 设置 HSP 资源管理对象的缓存数量上限。
   *
   * 如果缓存数量上限设置得过高，可能会导致内存开销过大，存在性能风险。建议根据实际需求进行配置。
   *
   * @param { int } count - The cache limit of resource manager for HSP, must be non-negative integers.
   * @throws { BusinessError } 100101 - The parameter is less than 0.
   * @throws { BusinessError } 100102 - The parameter value cannot be a floating-point number.
   * @throws { BusinessError } 100103 - The function cannot be called from a non-main thread.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static setResourceManagerCacheMaxCountForHSP(count: int): void;
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
  CLEAR_SELECTED_TEXT_ON_EXTERNAL_TOUCH = 1,
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

  /**
   * 通过操作ID禁用菜单操作。
   *
   * @param { Array<TextMenuItemId> } items - 要禁用的菜单项ID
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static disableMenuItems(items: Array<TextMenuItemId>): void;
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ENABLED = 0,

  /**
   * 关闭自定义键盘接续。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DISABLED = 1
}

/**
 * 类背景亮度采样器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
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
   * @since 26.0.0 static
   */
  setBackgroundLuminanceSamplingConfigs(configs: BackgroundLuminanceSamplingConfigs): void;

  /**
   * 注册背景亮度变化的回调。
   *
   * @param { Callback<int> } samplingCallback - 亮度采样回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onBackgroundLuminanceChange(samplingCallback: Callback<int>): void;

  /**
   * 注销背景亮度变化的回调。
   *
   * @param { Callback<int> } [samplingCallback] - 亮度采样回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  offBackgroundLuminanceChange(samplingCallback?: Callback<int>): void;
}

/**
 * 背景亮度采样配置参数。
 *
 * @interface BackgroundLuminanceSamplingConfigs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface BackgroundLuminanceSamplingConfigs {

  /**
   * 采样间隔，单位为毫秒。最小间隔为180毫秒。
   *
   * @type { ?int }
   * @default 500
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  samplingInterval?: int;

  /**
   * 亮度阈值。如果大于此阈值，则表示背景较亮。
   * 取值范围为[0, 255]。brightThreshold的值必须大于等于DarkThreshold的值。
   * 不在此范围内的值会导致参数设置异常。
   *
   * @type { ?int }
   * @default 220
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  brightThreshold?: int;

  /**
   * 黑暗阈值。如果小于此阈值，则背景为暗色。
   * 取值范围为[0, 255]。brightThreshold的值必须大于等于DarkThreshold的值。
   * 不在此范围内的值会导致参数设置异常。
   * 取值范围为全体整数。
   *
   * @type { ?int }
   * @default 150
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  darkThreshold?: int;

  /**
   * 采样区域，如果不指定，则为节点区域。
   *
   * @type { ?NodeEdges<LengthMetrics> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  region?: NodeEdges<LengthMetrics>;
}
