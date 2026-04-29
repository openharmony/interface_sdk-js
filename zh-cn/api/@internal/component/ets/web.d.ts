/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
 * @kit ArkWeb
 */

/**
 * Provides methods for controlling the web controller.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Provides methods for controlling the web controller.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @since 10
 */
/**
 * Provides methods for controlling the web controller.
 *
 * @typedef { import('../api/@ohos.web.webview').default.WebviewController }
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare type WebviewController = import('../api/@ohos.web.webview').default.WebviewController;

/**
 * The callback of load committed.
 *
 * @typedef { function } OnNavigationEntryCommittedCallback
 * @param { LoadCommittedDetails } loadCommittedDetails - callback information of onNavigationEntryCommitted.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
type OnNavigationEntryCommittedCallback = (loadCommittedDetails: LoadCommittedDetails) => void;

/**
 * The callback of ssl error event.
 *
 * @typedef { function } OnSslErrorEventCallback
 * @param { SslErrorEvent } sslErrorEvent - callback information of onSslErrorEvent.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
/**
 * The callback of ssl error event.
 *
 * @typedef { function } OnSslErrorEventCallback
 * @param { SslErrorEvent } sslErrorEvent - callback information of onSslErrorEvent.
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
type OnSslErrorEventCallback = (sslErrorEvent: SslErrorEvent) => void;

/**
 * The callback of onOverrideErrorPage.
 *
 * @typedef { function } OnOverrideErrorPageCallback
 * @param { OnErrorReceiveEvent } errorPageEvent - The information of error.
 * @returns { string } - Return an HTML text content encoded in Base64.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
type OnOverrideErrorPageCallback = (errorPageEvent: OnErrorReceiveEvent) => string;

/**
 * 网页绘制页面最大内容度量信息的回调。
 *
 * @param { LargestContentfulPaint } largestContentfulPaint - 网页绘制页面最大内容度量的详细信息。
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
type OnLargestContentfulPaintCallback = (largestContentfulPaint: LargestContentfulPaint) => void;

/**
 * 网页绘制页面度量信息的回调，当网页加载完页面主要内容时会触发该回调。
 *
 * @param { FirstMeaningfulPaint } firstMeaningfulPaint - 绘制页面主要内容度量的详细信息。
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
type OnFirstMeaningfulPaintCallback = (firstMeaningfulPaint: FirstMeaningfulPaint) => void;

/**
 * 定义摄像头使用状态的值。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare enum CameraCaptureState {
  /**
   * 摄像头未工作。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  NONE = 0,
  /**
   * 摄像头暂停中。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  PAUSED = 1,
  /**
   * 摄像头捕获中。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  ACTIVE = 2
}

/**
 * 定义麦克风使用状态的值。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare enum MicrophoneCaptureState {
  /**
   * 麦克风未工作。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  NONE = 0,
  /**
   * 麦克风暂停中。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  PAUSED = 1,
  /**
   * 麦克风捕获中。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  ACTIVE = 2
}

/**
 * 定义摄像头触发回调时的改变前后的状态信息。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare interface CameraCaptureStateChangeInfo {
  /**
   * 原来的状态
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  originalState: CameraCaptureState;

  /**
   * 改变后的状态
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  newState: CameraCaptureState;
}

/**
 * 定义麦克风触发回调时的改变前后的状态信息。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare interface MicrophoneCaptureStateChangeInfo {
  /**
   * 原来的状态
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  originalState: MicrophoneCaptureState;

  /**
   * 改变后的状态
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  newState: MicrophoneCaptureState;
}

/**
 * The callback when camera capturing state of current page has been changed.
 *
 * @typedef { function } OnCameraCaptureStateChangeCallback
 * @param { CameraCaptureStateChangeInfo } event - the camera capturing state event.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
type OnCameraCaptureStateChangeCallback = (event: CameraCaptureStateChangeInfo) => void;

/**
 * The callback when microphone capturing state of current page has been changed.
 *
 * @typedef { function } OnMicrophoneCaptureStateChangeCallback
 * @param { MicrophoneCaptureStateChangeInfo } event - the microphone capturing state event.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
type OnMicrophoneCaptureStateChangeCallback = (event: MicrophoneCaptureStateChangeInfo) => void;

/**
 * The callback of onOverrideUrlLoading.
 * Should not call WebviewController.loadUrl with the request's URL and then return true.
 *
 * @typedef { function } OnOverrideUrlLoadingCallback
 * @param { WebResourceRequest } webResourceRequest - callback information of onOverrideUrlLoading.
 * @returns { boolean } - Returning true causes the current Web to abort loading the URL,
 *     false causes the Web to continue loading the url as usual.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
/**
 * The callback of onOverrideUrlLoading.
 * Should not call WebviewController.loadUrl with the request's URL and then return true.
 *
 * @typedef { function } OnOverrideUrlLoadingCallback
 * @param { WebResourceRequest } webResourceRequest - callback information of onOverrideUrlLoading.
 * @returns { boolean } - Returning true causes the current Web to abort loading the URL,
 *     false causes the Web to continue loading the url as usual.
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
type OnOverrideUrlLoadingCallback = (webResourceRequest: WebResourceRequest) => boolean;

/**
 * The callback of Intelligent Tracking Prevention.
 *
 * @typedef { function } OnIntelligentTrackingPreventionCallback
 * @param { IntelligentTrackingPreventionDetails } details - callback information of onIntelligentTrackingPrevention.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
type OnIntelligentTrackingPreventionCallback = (details: IntelligentTrackingPreventionDetails) => void;

/**
 * 当同层标签可见性变化时触发该回调。
 *
 * @param { NativeEmbedVisibilityInfo } nativeEmbedVisibilityInfo - 提供同层标签的可见性信息。
 * @syscap SystemCapability.Web.Webview.Core
 * @since 12 dynamic
 */
type OnNativeEmbedVisibilityChangeCallback = (nativeEmbedVisibilityInfo: NativeEmbedVisibilityInfo) => void;

/**
 * 增加、修改或删除同层渲染object标签内嵌param元素时触发此回调。
 *
 * @param { NativeEmbedParamDataInfo } event - object标签内嵌param元素的详细变化信息。
 * @syscap SystemCapability.Web.Webview.Core
 * @since 21 dynamic
 */
type OnNativeEmbedObjectParamChangeCallback = (event: NativeEmbedParamDataInfo) => void;

/**
 * Enum type supplied to {@link PinVerifyResult} when VerifyPinHandler#confirm being called.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare enum PinVerifyResult {
  /**
   * SUCCESS.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  PIN_VERIFICATION_SUCCESS = 0,
  /**
   * FAILED.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  PIN_VERIFICATION_FAILED = 1
}

/**
 * Enum type supplied to {@link CredentialType} when ClientAuthenticationHandler#confirm being called.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare enum CredentialType {
  /**
   * User credential.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  CREDENTIAL_USER = 2,
  /**
   * Application-specific credential.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  CREDENTIAL_APP = 3,
  /**
   * Hardware security key credential.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  CREDENTIAL_UKEY = 4
}

/**
 * Handle the result of PIN verification.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare class VerifyPinHandler {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  constructor();

  /**
   * Passes the PIN verify result.
   *
   * @param { PinVerifyResult } result The PIN code verify result.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  confirm(result: PinVerifyResult): void;
}

/**
 * Defines the event for PIN verification.
 *
 * @typedef VerifyPinEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare interface VerifyPinEvent {
  /**
   * Handle the result of PIN verification.
   *
   * @type { VerifyPinHandler }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  handler: VerifyPinHandler;

  /**
   * The identity of the Credential.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  identity: string;
}

/**
 * The callback of verify pin.
 *
 * @typedef { function } OnVerifyPinCallback
 * @param { VerifyPinEvent } verifyPinEvent - The event of verify PIN.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
type OnVerifyPinCallback = (verifyPinEvent: VerifyPinEvent) => void;

/**
 * 定义同层渲染object标签内嵌param元素的状态变化类型，当添加param元素时触发ADD，修改param元素属性触发UPDATE，删除param元素触发DELETE。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 21 dynamic
 */
declare enum  NativeEmbedParamStatus {
  /**
   * 添加param元素。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  ADD = 0,

  /**
   * 更改param元素属性。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  UPDATE = 1,

  /**
   * 删除param元素。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  DELETE = 2
}

/**
 * The source of console message.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare enum ConsoleMessageSource {
  /**
   * Logs generated by the browser's XML/HTML parser (such as HTML syntax errors, XML format exceptions), for example,
   * parsing warnings caused by unclosed HTML tags.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  XML = 0,

  /**
   * JavaScript execution error, such as syntax error or runtime exception.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  JAVASCRIPT = 1,

  /**
   * Web resource loading failure, such as JS/CSS/image 404.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  NETWORK = 2,

  /**
   * Console API usage, such as console.warn or console.error.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  CONSOLE_API = 3,

  /**
   * Logs from storage modules like LocalStorage, SessionStorage, IndexedDB, or Cookie.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  STORAGE = 4,

  /**
   * Logs from rendering engine (e.g., Blink), such as invalid CSS, layout issues, or rendering performance warnings.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  RENDERING = 5,

  /**
   * Security policy violations, such as HTTPS certificate error or mixed content.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  SECURITY = 6,

  /**
   * Other logs, such as those from extensions.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  OTHER = 7,

  /**
   * Usage of deprecated syntax, such as slider-vertical.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  DEPRECATION = 8,

  /**
   * Errors in service worker or shared worker, such as navigation preload being interrupted.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  WORKER = 9,

  /**
   * Rule violations, such as JavaScript execution exceeding 50ms.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  VIOLATION = 10,

  /**
   * Browser intervention due to potential user experience, security, or performance issues.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  INTERVENTION = 11,

  /**
   * Code practices that do not follow web security best practices, with improvement suggestions.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  RECOMMENDATION = 12
}

/**
 * 提供同层渲染object标签内嵌param元素的详细信息。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 21 dynamic
 */
declare interface NativeEmbedParamItem {
  /**
   * param元素的状态变化类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  status: NativeEmbedParamStatus;

  /**
   * param元素的id信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  id: string;

  /**
   * param元素的参数名称。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  name?: string;

  /**
   * param元素的参数值。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  value?: string;
}

/**
 * 提供同层渲染object标签内嵌param元素变化时同层标签的详细信息。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 21 dynamic
 */
declare interface NativeEmbedParamDataInfo {
  /**
   * 同层标签的唯一id。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  embedId: string;

  /**
   * 同层标签的id信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  objectAttributeId?: string;

  /**
   * 发生变化的param元素的详细信息，包括每一个param元素的状态变化类型、id、参数名称和参数值。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  paramItems?: Array<NativeEmbedParamItem>;
}

/**
 * Enum type supplied to {@link rotateRenderEffect} for setting the effect of rotation.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare enum WebRotateEffect {
  /**
   * The content area is drawn in top-left of the node.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  TOPLEFT_EFFECT = 0,

  /**
   * Scale the content area to cover the node.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  RESIZE_COVER_EFFECT = 1
}

/**
 * The configuration of native media player.
 *
 * @typedef NativeMediaPlayerConfig
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface NativeMediaPlayerConfig {
  /**
   * Should playing web media by native application instead of web player.
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enable: boolean;

  /**
   * The contents painted by native media player should overlay web page.
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  shouldOverlay: boolean;
}

/**
 * The callback of render process not responding.
 *
 * @typedef { function } OnRenderProcessNotRespondingCallback
 * @param { RenderProcessNotRespondingData } data - details of onRenderProcessNotResponding.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 12 dynamic
 */
type OnRenderProcessNotRespondingCallback = (data : RenderProcessNotRespondingData) => void;

/**
 * The callback of render process responding.
 *
 * @typedef { function } OnRenderProcessRespondingCallback
 * @syscap SystemCapability.Web.Webview.Core
 * @since 12 dynamic
 */
type OnRenderProcessRespondingCallback = () => void;

/**
 * 网页meta中viewport-fit配置项更改时触发的回调。
 *
 * @param { ViewportFit } viewportFit - 网页meta中viewport-fit配置的视口类型。
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
type OnViewportFitChangedCallback = (viewportFit: ViewportFit) => void;

/**
 * The callback of ads block
 *
 * @typedef { function } OnAdsBlockedCallback
 * @param { AdsBlockedDetails } details - details of OnAdsBlockedCallback.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
type OnAdsBlockedCallback = (details: AdsBlockedDetails) => void;

/**
 * Defines the ads block details.
 *
 * @interface AdsBlockedDetails
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface AdsBlockedDetails {
  /**
   * The url of main frame.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;

  /**
   * the url of ads.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  adsBlocked: Array<string>;
}

/**
 * Defines the web keyboard options when onInterceptKeyboardAttach event return.
 *
 * @interface WebKeyboardOptions
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface WebKeyboardOptions {
  /**
   * Whether the system keyboard is used.
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  useSystemKeyboard: boolean;

  /**
   * Set the enter key type when the system keyboard is used, the "enter" key related to the {@link inputMethodEngine}.
   *
   * @type { ?number }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enterKeyType?: number;

  /**
   * Set the custom keyboard builder when the custom keyboard is used.
   *
   * @type { ?CustomBuilder }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  customKeyboard?: CustomBuilder;
}

/**
 * Defines the regular expression rule.
 *
 * @typedef UrlRegexRule
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 23 dynamic
 */
declare interface UrlRegexRule {
  /**
   * Exact match of the second-level domain. For example, the second-level domain of https://www.example.com
   * is example.com, and the second-level domain of https://www.example.com.cn is example.com.cn. If the URL
   * is an IP address, the full IP is matched against the secondLevelDomain.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  secondLevelDomain : string;
  /**
   * Full URL regular expression.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  rule : string;
}

/**
 * Define the controller to interact with a custom keyboard, related to the {@link onInterceptKeyboardAttach} event.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare class WebKeyboardController {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  constructor();

  /**
   * Insert text into Editor.
   *
   * @param { string } text - text which will be inserted.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  insertText(text: string): void;

  /**
   * Delete text from back to front.
   *
   * @param { number } length - length of text, which will be deleted from back to front.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  deleteForward(length: number): void;

  /**
   * Delete text from front to back.
   *
   * @param { number } length - length of text, which will be deleted from front to back.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  deleteBackward(length: number): void;

  /**
   * Send the function of the key.
   *
   * @param { number } key - action indicates the "enter" key related to the {@link inputMethodEngine}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  sendFunctionKey(key: number): void;

  /**
   * Close the custom keyboard.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  close(): void;
}

/**
 * Defines the web keyboard callback info related to the {@link onInterceptKeyboardAttach} event.
 *
 * @interface WebKeyboardCallbackInfo
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface WebKeyboardCallbackInfo {
  /**
   * The web keyboard controller.
   *
   * @type { WebKeyboardController }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  controller: WebKeyboardController;

  /**
   * The attributes of web input element.
   *
   * @type { Record<string, string> }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  attributes: Record<string, string>;
}

/**
 * The callback of onInterceptKeyboardAttach event.
 *
 * @typedef { function } WebKeyboardCallback
 * @param { WebKeyboardCallbackInfo } keyboardCallbackInfo - callback information of onInterceptKeyboardAttach.
 * @returns { WebKeyboardOptions } Return the web keyboard options of this web component.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
type WebKeyboardCallback = (keyboardCallbackInfo: WebKeyboardCallbackInfo) => WebKeyboardOptions;

/**
 * Enum type supplied to {@link getMessageLevel} for receiving the console log level of JavaScript.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Enum type supplied to {@link getMessageLevel} for receiving the console log level of JavaScript.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare enum MessageLevel {
  /**
   * Debug level.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Debug level.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  Debug = 0,

  /**
   * Error level.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Error level.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  Error = 1,

  /**
   * Info level.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Info level.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  Info = 2,

  /**
   * Log level.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Log level.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  Log = 3,

  /**
   * Warn level.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Warn level.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  Warn = 4
}

/**
 * The Web's behavior to load from HTTP or HTTPS. Defaults to MixedMode.None.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * The Web's behavior to load from HTTP or HTTPS. Defaults to MixedMode.None.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
/**
 * The Web's behavior to load from HTTP or HTTPS. Defaults to MixedMode.None.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare enum MixedMode {
  /**
   * Allows all sources.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Allows all sources.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Allows all sources.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  All = 0,

  /**
   * Allows sources Compatibly.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Allows sources Compatibly.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Allows sources Compatibly.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  Compatible = 1,

  /**
   * Don't allow unsecure sources from a secure origin.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Don't allow unsecure sources from a secure origin.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Don't allow unsecure sources from a secure origin.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  None = 2
}

/**
 * The callback of safe browsing check.
 *
 * @typedef { function } OnSafeBrowsingCheckResultCallback
 * @param { ThreatType } threatType - callback information of onSafeBrowsingCheckResult.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
type OnSafeBrowsingCheckResultCallback = (threatType: ThreatType) => void;

/**
 * 点击事件检测结果类型。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 8 dynamiconly
 * @deprecated since 21
 * @useinstead @ohos.web.webview:webview.WebHitTestType
 */
declare enum HitTestType {
  /**
   * 可编辑的区域。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 21
   * @useinstead @ohos.web.webview:webview.WebHitTestType.EditText
   */
  EditText = 0,

  /**
   * 电子邮件地址。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 21
   * @useinstead @ohos.web.webview:webview.WebHitTestType.Email
   */
  Email = 1,

  /**
   * 超链接，其src为http。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 21
   * @useinstead @ohos.web.webview:webview.WebHitTestType.HttpAnchor
   */
  HttpAnchor = 2,

  /**
   * 带有超链接的图片，其中超链接的src为http。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 21
   * @useinstead @ohos.web.webview:webview.WebHitTestType.HttpAnchorImg
   */
  HttpAnchorImg = 3,

  /**
   * HTML::img标签。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 21
   * @useinstead @ohos.web.webview:webview.WebHitTestType.Img
   */
  Img = 4,

  /**
   * 地理地址。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 21
   * @useinstead @ohos.web.webview:webview.WebHitTestType.Map
   */
  Map = 5,

  /**
   * 电话号码。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 21
   * @useinstead @ohos.web.webview:webview.WebHitTestType.Phone
   */
  Phone = 6,

  /**
   * 未知内容。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 21
   * @useinstead @ohos.web.webview:webview.WebHitTestType.Unknown
   */
  Unknown = 7
}

/**
 * Enum type supplied to {@link cacheMode} for setting the Web cache mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Enum type supplied to {@link cacheMode} for setting the Web cache mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
/**
 * Enum type supplied to {@link cacheMode} for setting the Web cache mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare enum CacheMode {
  /**
   * load cache when they are available and not expired, otherwise load online.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * load cache when they are available and not expired, otherwise load online.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * load cache when they are available and not expired, otherwise load online.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  Default = 0,

  /**
   * load cache when they are available, otherwise load online.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * load cache when they are available, otherwise load online.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * load cache when they are available, otherwise load online.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  None = 1,

  /**
   * Load online and not cache.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Load online and not cache.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Load online and not cache.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  Online = 2,

  /**
   * load cache and not online.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * load cache and not online.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * load cache and not online.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  Only = 3,
}

/**
 * 设置Web的过滚动模式为关闭或开启。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare enum OverScrollMode {
  /**
   * Web过滚动模式关闭。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  NEVER = 0,

  /**
   * Web过滚动模式开启。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  ALWAYS = 1
}

/**
 * Enum type supplied to {@link blurOnKeyboardHideMode} for setting the web blurOnKeyboardHide mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 14 dynamic
 */
declare enum BlurOnKeyboardHideMode {
  /**
   * The focused input elements on webview will not blur when soft keyboard is hidden manually.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 14 dynamic
   */
  SILENT = 0,

  /**
   * The focused input elements on webview will blur when soft keyboard is hidden manually.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 14 dynamic
   */
  BLUR = 1
}

/**
 * Web深色模式的配置
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum WebDarkMode {
  /**
   * Web深色模式关闭。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Off = 0,

  /**
   * Web深色模式开启。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  On = 1,

  /**
   * Web深色模式跟随系统。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Auto = 2
}

/**
 * Enum type supplied to {@link captureMode} for setting the web capture mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 10
 */
/**
 * Enum type supplied to {@link captureMode} for setting the web capture mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare enum WebCaptureMode {
  /**
   * The home screen.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 10
   */
  /**
   * The home screen.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  HOME_SCREEN = 0
}

/**
 * Enum type supplied to {@link threatType} for the website's threat type.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare enum ThreatType {
  /**
   * Illegal websites.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  THREAT_ILLEGAL = 0,

  /**
   * Fraud websites.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  THREAT_FRAUD = 1,

  /**
   * Websites with security risks.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  THREAT_RISK = 2,

  /**
   * Websites suspected of containing unhealthy content.
   * ArkWeb will not intercept this type of website and apps could handle it themselves.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  THREAT_WARNING = 3,

  /**
   * Security check passed, no risks found.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  THREAT_NONE = 4,

  /**
   * 未进行网址检测
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  THREAT_UNPROCESSED = 5,
}

/**
 * Defines the Media Options.
 *
 * @interface WebMediaOptions
 * @syscap SystemCapability.Web.Webview.Core
 * @since 10
 */
/**
 * Defines the Media Options.
 *
 * @interface WebMediaOptions
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
/**
 * Defines the Media Options.
 *
 * @typedef WebMediaOptions
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface WebMediaOptions {
  /**
   * The time interval for audio playback to resume.
   *
   * @type { ?number }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 10
   */
  /**
   * The time interval for audio playback to resume.
   *
   * @type { ?number }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  resumeInterval?: number;

  /**
   * Whether the audio of each web is exclusive.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 10
   */
  /**
   * Whether the audio of each web is exclusive.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  audioExclusive?: boolean;

  /**
   * 音频会话的类型
   *
   * @type { ?AudioSessionType }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  audioSessionType?: AudioSessionType;
}

/**
 * Defines the screen capture configuration.
 *
 * @interface ScreenCaptureConfig
 * @syscap SystemCapability.Web.Webview.Core
 * @since 10
 */
/**
 * Defines the screen capture configuration.
 *
 * @interface ScreenCaptureConfig
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
/**
 * Defines the screen capture configuration.
 *
 * @typedef ScreenCaptureConfig
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface ScreenCaptureConfig {
  /**
   * The mode for selecting the recording area.
   *
   * @type { WebCaptureMode }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 10
   */
  /**
   * The mode for selecting the recording area.
   *
   * @type { WebCaptureMode }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  captureMode: WebCaptureMode;
}

/**
 * Define the handler to exit the full screen mode, related to the {@link onFullScreenEnter} event.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Define the handler to exit the full screen mode, related to the {@link onFullScreenEnter} event.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
/**
 * Define the handler to exit the full screen mode, related to the {@link onFullScreenEnter} event.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare class FullScreenExitHandler {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor();

  /**
   * Exit the full screen mode.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Exit the full screen mode.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Exit the full screen mode.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  exitFullScreen(): void;
}

/**
 * Defines the event details when the web component enter full screen mode.
 *
 * @typedef FullScreenEnterEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
/**
 * Defines the event details when the web component enter full screen mode.
 *
 * @typedef FullScreenEnterEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface FullScreenEnterEvent {
  /**
   * A function handle to exit full-screen mode.
   *
   * @type { FullScreenExitHandler }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * A function handle to exit full-screen mode.
   *
   * @type { FullScreenExitHandler }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  handler: FullScreenExitHandler;

  /**
   * The intrinsic width of the video if the fullscreen element contains video element, expressed in CSS pixels.
   *
   * @type { ?number }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * The intrinsic width of the video if the fullscreen element contains video element, expressed in CSS pixels.
   *
   * @type { ?number }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  videoWidth?: number;

  /**
   * The intrinsic height of the video if the fullscreen element contains video element, expressed in CSS pixels.
   *
   * @type { ?number }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * The intrinsic height of the video if the fullscreen element contains video element, expressed in CSS pixels.
   *
   * @type { ?number }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  videoHeight?: number;
}

/**
 * The callback when the web component enter full screen mode.
 *
 * @typedef { function } OnFullScreenEnterCallback
 * @param { FullScreenEnterEvent } event - callback information of onFullScreenEnter.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
/**
 * The callback when the web component enter full screen mode.
 *
 * @typedef { function } OnFullScreenEnterCallback
 * @param { FullScreenEnterEvent } event - callback information of onFullScreenEnter.
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
type OnFullScreenEnterCallback = (event: FullScreenEnterEvent) => void;

/**
 * 当鼠标/触摸板点击到同层标签时触发该回调。
 *
 * @param { NativeEmbedMouseInfo } event - 提供鼠标/触摸板在同层标签上点击或长按的详细信息。
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
type MouseInfoCallback = (event: NativeEmbedMouseInfo) => void;

/**
 * Enum type supplied to {@link renderExitReason} when onRenderExited being called.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Enum type supplied to {@link renderExitReason} when onRenderExited being called.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare enum RenderExitReason {
  /**
   * Render process non-zero exit status.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Render process non-zero exit status.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  ProcessAbnormalTermination = 0,

  /**
   * SIGKILL or task manager kill.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * SIGKILL or task manager kill.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  ProcessWasKilled = 1,

  /**
   * Segmentation fault.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Segmentation fault.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  ProcessCrashed = 2,

  /**
   * Out of memory.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Out of memory.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  ProcessOom = 3,

  /**
   * Unknown reason.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Unknown reason.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  ProcessExitUnknown = 4
}

/**
 * 上下文菜单自定义隐藏的回调。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
type OnContextMenuHideCallback = () => void;

/**
 * Enum type supplied to {@link error} when onSslErrorEventReceive being called.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Enum type supplied to {@link error} when onSslErrorEventReceive being called.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
/**
 * Enum type supplied to {@link error} when onSslErrorEventReceive being called.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare enum SslError {
  /**
   * General error.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * General error.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  Invalid = 0,

  /**
   * Hostname mismatch.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Hostname mismatch.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Hostname mismatch.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  HostMismatch = 1,

  /**
   * The certificate date is invalid.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * The certificate date is invalid.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * The certificate date is invalid.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  DateInvalid = 2,

  /**
   * The certificate authority is not trusted.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * The certificate authority is not trusted.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * The certificate authority is not trusted.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  Untrusted = 3
}

/**
 * 文件选择器的模式。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum FileSelectorMode {
  /**
   * 打开上传单个文件。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  FileOpenMode = 0,

  /**
   * 打开上传多个文件。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  FileOpenMultipleMode = 1,

  /**
   * 打开上传文件夹模式。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  FileOpenFolderMode = 2,

  /**
   * 文件保存模式。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  FileSaveMode = 3
}

/**
 * Web布局模式的配置。
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare enum WebLayoutMode {
  /**
   * Web布局跟随系统。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  NONE = 0,

  /**
   * Web基于页面大小的自适应网页布局。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  FIT_CONTENT = 1
}

/**
 * Enum type supplied to {@link RenderProcessNotRespondingData} when onRenderProcessNotResponding is called.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 12 dynamic
 */
declare enum RenderProcessNotRespondingReason {
  /**
   * Timeout for input sent to render process.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  INPUT_TIMEOUT = 0,

  /**
   * Timeout for navigation commit.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  NAVIGATION_COMMIT_TIMEOUT = 1
}

/**
 * 封装消息信息，作为 {@link onFileSelectorShow} 方法的入参。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class FileSelectorParam {
  /**
   * FileSelectorParam的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor();

  /**
   * 获取此文件选择器的标题。
   *
   * @returns { string } Return the title of this file selector.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getTitle(): string;

  /**
   * 获取当前文件选择器的选择模式。
   *
   * @returns { FileSelectorMode } Return the FileSelectorMode of this file selector.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getMode(): FileSelectorMode;

  /**
   * 获取可接受的MIME类型数组。
   *
   * @returns { Array<string> } Return an array of acceptable MIME type.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getAcceptType(): Array<string>;

  /**
   * 获取此文件选择器是否使用实时媒体拍摄所得内容。
   *
   * @returns { boolean } Return {@code true} if captured media; return {@code false} otherwise.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  isCapture(): boolean;

  /**
   * 获取原始可接受 MIME 类型数组。
   *
   * @returns { Array<string> } Return an array of raw acceptable MIME type.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 18 dynamic
   */
  getMimeTypes(): Array<string>;

  /**
   * 获取推荐文件名列表。
   *
   * @returns { string } Return the suggested file names.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  getSuggestedName(): string;

  /**
   * 获取拉起选择器时默认打开的路径。
   *
   * @returns { string } Return to the default path opened when pulling up the selector.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  getDefaultPath(): string;

  /**
   * 获取文件类型的描述信息数组。
   *
   * @returns { Array<string> } Return an array of description of the file type.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  getDescriptions(): Array<string>;

  /**
   * 获取是否过滤完全匹配的文件类型。
   *
   * @returns { boolean } Return whether to filter all matching file types.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  isAcceptAllOptionExcluded(): boolean;

  /**
   * 获取网页文件的已选类型数组。
   *
   * @returns { Array<Array<AcceptableFileType>> } Return an array of selected types for web page files.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  getAcceptableFileTypes(): Array<Array<AcceptableFileType>>;
}

/**
 * 定义 JS 返回结果。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class JsResult {
  /**
   * JsResult的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor();

  /**
   * 若取消弹窗，则处理用户的JavaScript执行结果。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  handleCancel(): void;

  /**
   * 确认弹窗后，处理用户的 JavaScript 执行结果。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  handleConfirm(): void;

  /**
   * 确认提示框后，处理用户的 JavaScript 执行结果。
   *
   * @param { string } result - The content of the dialog box entered by the user.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  handlePromptConfirm(result: string): void;
}

/**
 * 定义文件选择器结果，与 {@link onFileSelectorShow} 方法相关联。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class FileSelectorResult {
  /**
   * FileSelectorResult的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor();

  /**
   * 选择文件列表。
   *
   * @param { Array<string> } fileList - List of files that need to be operated.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  handleFileList(fileList: Array<string>): void;
}

/**
 * Defines the http auth request result, related to {@link onHttpAuthRequest} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Defines the http auth request result, related to {@link onHttpAuthRequest} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare class HttpAuthHandler {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  constructor();

  /**
   * confirm.
   *
   * @param { string } userName
   * @param { string } password
   * @returns { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * confirm.
   *
   * @param { string } userName
   * @param { string } password
   * @returns { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  confirm(userName: string, password: string): boolean;

  /**
   * cancel.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * cancel.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  cancel(): void;

  /**
   * isHttpAuthInfoSaved.
   *
   * @returns { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * isHttpAuthInfoSaved.
   *
   * @returns { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  isHttpAuthInfoSaved(): boolean;
}

/**
 * Defines the ssl error request result, related to {@link onSslErrorEventReceive} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Defines the ssl error request result, related to {@link onSslErrorEventReceive} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
/**
 * Defines the ssl error request result, related to {@link onSslErrorEventReceive} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare class SslErrorHandler {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  constructor();

  /**
   * Confirm to use the SSL certificate.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Confirm to use the SSL certificate.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Confirm to use the SSL certificate.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  handleConfirm(): void;

  /**
   * Cancel this request.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Cancel this request.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Cancel this request.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  handleCancel(): void;

  /**
   *  ArkWeb遇到了SSL证书错误，该接口表示是否终止或者继续展示错误给用户。
   *
   * @param { boolean } abortLoading 如果abortLoading为true，则取消当前请求并停留在当前页面，如果为false，则拒绝忽略该SSL错误，最终展示空白页，如果开启了默认错误页，则显示默认错误页。默认为false
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  handleCancel(abortLoading: boolean): void;
}

/**
 * Defines the client certificate request result, related to {@link onClientAuthenticationRequest} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Defines the client certificate request result, related to {@link onClientAuthenticationRequest} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare class ClientAuthenticationHandler {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  constructor();

  /**
   * Confirm to use the specified private key and client certificate chain.
   *
   * @param { string } priKeyFile - The file that store private key.
   * @param { string } certChainFile - The file that store client certificate chain.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Confirm to use the specified private key and client certificate chain.
   *
   * @param { string } priKeyFile - The file that store private key.
   * @param { string } certChainFile - The file that store client certificate chain.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  confirm(priKeyFile: string, certChainFile: string): void;

  /**
   * Confirm to use the authUri.The authUri can be obtained from certificate management.
   *
   * @param { string } authUri is the key of credentials.The credentials contain sign info and client certificates info.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 10
   */
  /**
   * Confirm to use the authUri.The authUri can be obtained from certificate management.
   *
   * @param { string } authUri is the key of credentials.The credentials contain sign info and client certificates info.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  confirm(authUri: string): void;

  /**
   * Confirm to use the identify of the certificate. The identify can be obtained from certificate management.
   *
   * @param { string } identity - The identify of the credential.
   * @param { CredentialType | string } credentialTypeOrCertChainFile - The type of the credential or the file that store
   *     client certificate chain.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  confirm(identity: string, credentialTypeOrCertChainFile: CredentialType | string): void;

  /**
   * Cancel this certificate request.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Cancel this certificate request.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  cancel(): void;

  /**
   * Ignore this certificate request temporarily.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Ignore this certificate request temporarily.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  ignore(): void;
}

/**
 * Defines the accessible resource type, related to {@link onPermissionRequest} method.
 *
 * @enum { string }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Defines the accessible resource type, related to {@link onPermissionRequest} method.
 *
 * @enum { string }
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare enum ProtectedResourceType {
  /**
   * The MidiSysex resource.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * The MidiSysex resource.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  MidiSysex = "TYPE_MIDI_SYSEX",

  /**
   * The video capture resource, such as camera.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 10
   */
  /**
   * The video capture resource, such as camera.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  VIDEO_CAPTURE = "TYPE_VIDEO_CAPTURE",

  /**
   * The audio capture resource, such as microphone.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 10
   */
  /**
   * The audio capture resource, such as microphone.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  AUDIO_CAPTURE = "TYPE_AUDIO_CAPTURE",

  /**
   * The sensor resource, such as accelerometer.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  SENSOR = 'TYPE_SENSOR'
}

/**
 * Defines the onPermissionRequest callback, related to {@link onPermissionRequest} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Defines the onPermissionRequest callback, related to {@link onPermissionRequest} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare class PermissionRequest {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  constructor();

  /**
   * Reject the request.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Reject the request.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  deny(): void;

  /**
   * Gets the source if the webpage that attempted to access the restricted resource.
   *
   * @returns { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Gets the source if the webpage that attempted to access the restricted resource.
   *
   * @returns { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  getOrigin(): string;

  /**
   * Gets the resource that the webpage is trying to access.
   *
   * @returns { Array<string> }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Gets the resource that the webpage is trying to access.
   *
   * @returns { Array<string> }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  getAccessibleResource(): Array<string>;

  /**
   * Grant origin access to a given resource.
   *
   * @param { Array<string> } resources
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Grant origin access to a given resource.
   *
   * @param { Array<string> } resources
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  grant(resources: Array<string>): void;
}

/**
 * Defines the onScreenCapture callback, related to {@link onScreenCapture} method.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 10
 */
/**
 * Defines the onScreenCapture callback, related to {@link onScreenCapture} method.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare class ScreenCaptureHandler {
  /**
   * Constructor.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 10
   */
  /**
   * Constructor.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  constructor();

  /**
   * Gets the source of the webpage that attempted to access the restricted resource.
   *
   * @returns { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 10
   */
  /**
   * Gets the source of the webpage that attempted to access the restricted resource.
   *
   * @returns { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  getOrigin(): string;

  /**
   * Grant origin access to a given resource.
   * @param { ScreenCaptureConfig } config The screen capture configuration.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 10
   */
  /**
   * Grant origin access to a given resource.
   * @param { ScreenCaptureConfig } config The screen capture configuration.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  grant(config: ScreenCaptureConfig): void;

  /**
   * Reject the request.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 10
   */
  /**
   * Reject the request.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  deny(): void;
}

/**
 * Defines the onDataResubmission callback, related to {@link onDataResubmission} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Defines the onDataResubmission callback, related to {@link onDataResubmission} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare class DataResubmissionHandler {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  constructor();

  /**
   * Resend related form data.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Resend related form data.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  resend(): void;

  /**
   * Do not resend related form data.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Do not resend related form data.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  cancel(): void;
}

/**
 * Defines the onWindowNew callback, related to {@link onWindowNew} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Defines the onWindowNew callback, related to {@link onWindowNew} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare class ControllerHandler {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  constructor();

  /**
   * Set WebController object.
   *
   * @param { WebviewController } controller
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Set WebController object.
   *
   * @param { WebviewController } controller
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  setWebController(controller: WebviewController): void;
}

/**
 * 触发上下文菜单的事件来源。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum ContextMenuSourceType {
  /**
   * 其他事件来源。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  None = 0,

  /**
   * 鼠标事件。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Mouse = 1,

  /**
   * 长按事件。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  LongPress = 2
}

/**
 * 触发上下文菜单的网页元素类型。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum ContextMenuMediaType {
  /**
   * 其他非图片媒体类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  None = 0,

  /**
   * 图片类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Image = 1
}

/**
 * 触发上下文菜单的网页元素类型（增强获取类型能力）。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare enum ContextMenuDataMediaType {
  /**
   * 默认值，表示当前上下文菜单不关联任何媒体类型（例如右键文本或空白区域）。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  NONE = 0,

  /**
   * 图片类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  IMAGE = 1,

  /**
   * 视频类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  VIDEO = 2,

  /**
   * 音频类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  AUDIO = 3,

  /**
   * Canvas类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  CANVAS = 4
}

/**
 * 输入框类型。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum ContextMenuInputFieldType {
  /**
   * 非输入框。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  None = 0,

  /**
   * 纯文本类型，包括text、search、email等。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  PlainText = 1,

  /**
   * 密码类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Password = 2,

  /**
   * 数字类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Number = 3,

  /**
   * 电话号码类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Telephone = 4,

  /**
   * 其他类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Other = 5
}

/**
 * 定义同层标签生命周期，当加载页面中有同层标签会触发CREATE，同层标签移动或者放大会触发UPDATE，退出页面会触发DESTROY。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare enum NativeEmbedStatus {
  /**
   * 同层标签创建。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  CREATE = 0,

  /**
   * 同层标签更新。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  UPDATE = 1,

  /**
   * 同层标签销毁。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  DESTROY = 2,

  /**
   * 同层标签进入BFCache。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  ENTER_BFCACHE = 3,

  /**
   * 同层标签离开BFCache。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  LEAVE_BFCACHE = 4
}

/**
 * 支持以按位或的方式使用此枚举。例如，如果需要同时支持CAN_CUT、CAN_COPY和CAN_SELECT_ALL，可使用CAN_CUT | CAN_COPY | CAN_SELECT_ALL或11。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum ContextMenuEditStateFlags {
  /**
   * 不可编辑。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  NONE = 0,

  /**
   * 支持剪切。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  CAN_CUT = 1 << 0,

  /**
   * 支持拷贝。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  CAN_COPY = 1 << 1,

  /**
   * 支持粘贴。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  CAN_PASTE = 1 << 2,

  /**
   * 支持全选。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  CAN_SELECT_ALL = 1 << 3
}

/**
 * Enum type supplied to {@link navigationType} for the navigation's type.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare enum WebNavigationType {
  /**
   * Unknown type.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  UNKNOWN = 0,

  /**
   * A new entry was created due to a navigation happened on the main frame.
   * Contains all situations that will generate a mainframe navigation entry,
   * which means that navigations to a hash on the same document or history.pushState
   * also belong to this type.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  MAIN_FRAME_NEW_ENTRY = 1,

  /**
   * Navigate to an existing entry due to a navigation on the main frame.
   * e.g.
   *   1. History navigations.
   *   2. Reloads (contains loading the same url).
   *   3. Same-document navigations(history.replaceState(), location.replace()).
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  MAIN_FRAME_EXISTING_ENTRY = 2,

  /**
   * A navigation happened on subframe which was triggered by user.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  NAVIGATION_TYPE_NEW_SUBFRAME = 4,

  /**
   * A navigation happened on the subframe automatically.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  NAVIGATION_TYPE_AUTO_SUBFRAME = 5
}

/**
 * Defines the web render mode, related to {@link RenderMode}.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare enum RenderMode {
  /**
   * Web and arkui render asynchronously
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  ASYNC_RENDER = 0,

  /**
   * Web and arkui render synchronously
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  SYNC_RENDER = 1
}

/**
 * 网页meta中viewport-fit配置的视口类型。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare enum ViewportFit {
  /**
   * 默认值，整个网页可见。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  AUTO = 0,

  /**
   * 初始布局视口和视觉视口为适应设备显示屏的最大矩形内。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  CONTAINS = 1,

  /**
   * 初始布局视口和视觉视口为适应设备显示屏的最大矩形内。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  COVER = 2
}

/**
 * 定义上下文菜单参数，关联{@link WebContextMenuParam}方法。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class WebContextMenuParam {
  /**
   * WebContextMenuParam的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor();

  /**
   * 菜单在Web组件内的水平偏移坐标。
   *
   * @returns { number } 上下文菜单X坐标。
   *     正常情况下返回非负整数，否则返回 -1。
   *     单位：像素。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  x(): number;

  /**
   * 菜单在Web组件内的垂直偏移坐标。
   *
   * @returns { number } 上下文菜单Y坐标。
   *     正常情况下返回非负整数，否则返回 -1。
   *     单位：像素。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  y(): number;

  /**
   * 若长按位置为链接，则返回经过安全校验的链接 URL。
   *
   * @returns { string } 关联链接时返回链接地址，否则返回 null。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getLinkUrl(): string;

  /**
   * 若长按位置为链接，则返回该链接的原始 URL。
   *
   * @returns { string } 关联链接时返回未过滤的链接地址，否则返回 null。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getUnfilteredLinkUrl(): string;

  /**
   * 若选中元素包含 SRC 属性，则返回其资源地址 URL。
   *
   * @returns { string } 若当前上下文菜单源自元素 src 属性，则返回资源链接地址，否则返回 null。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getSourceUrl(): string;

  /**
   * 长按菜单所在位置是否包含图片内容。
   *
   * @returns { boolean } 返回当前上下文菜单位置是否存在图片内容。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  existsImageContents(): boolean;

  /**
   * 返回上下文节点的类型。
   *
   * @returns { ContextMenuMediaType } 返回上下文节点的类型。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getMediaType(): ContextMenuMediaType;

  /**
   * 返回选中的文本内容。
   *
   * @returns { string } 返回选中文本，未选中任何文本时返回 null。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getSelectionText(): string;

  /**
   * * 返回上下文菜单的来源类型。
   *
   * @returns { ContextMenuSourceType }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getSourceType(): ContextMenuSourceType;

  /**
   * 若上下文菜单在输入框上触发，则返回输入框类型。
   *
   * @returns { ContextMenuInputFieldType } 输入框上触发菜单时返回输入框类型。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getInputFieldType(): ContextMenuInputFieldType;

  /**
   * * 返回当前上下文是否可编辑。
   *
   * @returns { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  isEditable(): boolean;

  /**
   * 返回上下文可编辑状态标记 {@link ContextMenuEditStateFlags}。
   *
   * @returns { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getEditStateFlags(): number;

  /**
   * 返回选择菜单预览宽度。
   *
   * @returns { number } 菜单预览宽度。单位：像素。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  getPreviewWidth(): number;

  /**
   * 返回选择菜单预览高度。
   *
   * @returns { number } 预览菜单高度。单位：像素。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  getPreviewHeight(): number;

  /**
   * 返回上下文节点的类型。
   *
   * @returns { ContextMenuDataMediaType } 返回上下文节点的类型。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  getContextMenuMediaType(): ContextMenuDataMediaType;
}

/**
 * Defines the context menu result, related to {@link WebContextMenuResult} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class WebContextMenuResult {
  /**
   * WebContextMenuResult的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor();

  /**
   * 在WebContextMenuResult中无其他调用且需要关闭上下文菜单时，
   * 开发者需调用此函数关闭菜单。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  closeContextMenu(): void;

  /**
   * 若WebContextMenuParam包含图片内容，该函数将复制当前上下文菜单对应的图片。
   * 若WebContextMenuParam不包含图片内容，则该函数不执行任何操作。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  copyImage(): void;

  /**
   * 执行与此上下文菜单关联的复制操作。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  copy(): void;

  /**
   * 执行与此上下文菜单关联的粘贴操作。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  paste(): void;

  /**
   * 执行与此上下文菜单关联的剪切操作。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  cut(): void;

  /**
   * 执行与此上下文菜单关联的全选操作。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  selectAll(): void;

  /**
   * 执行与此上下文菜单关联的重做操作。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  redo(): void;

  /**
   * 执行与此上下文菜单关联的撤销操作。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  undo(): void;

  /**
   * 执行与此上下文菜单关联的粘贴并匹配样式操作。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  pasteAndMatchStyle(): void;

  /**
   * 请求将密码保险箱内容填充到输入框中。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  requestPasswordAutoFill(): void;

  /**
   * 执行与此上下文菜单关联的“另存为图像”操作将触发下载过程。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 24 dynamic
   */
  saveImage(): void;
}

/**
 * Encompassed message information as parameters to {@link onConsole} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Encompassed message information as parameters to {@link onConsole} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare class ConsoleMessage {
  /**
   * Constructor.
   *
   * @param { string } message - The console message.
   * @param { string } sourceId - The Web source file's path and name.
   * @param { number } lineNumber - The line number of the console message.
   * @param { MessageLevel } messageLevel - The console log level.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.ConsoleMessage#constructor
   */
  constructor(message: string, sourceId: string, lineNumber: number, messageLevel: MessageLevel);

  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  constructor();

  /**
   * Gets the message of a console message.
   *
   * @returns { string } Return the message of a console message.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Gets the message of a console message.
   *
   * @returns { string } Return the message of a console message.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  getMessage(): string;

  /**
   * Gets the Web source file's path and name of a console message.
   *
   * @returns { string } Return the Web source file's path and name of a console message.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Gets the Web source file's path and name of a console message.
   *
   * @returns { string } Return the Web source file's path and name of a console message.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Gets the Web source file's path and name of a console message.
   *
   * @returns { string } Return the Web source file's path and name of a console message.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  getSourceId(): string;

  /**
   * Gets the line number of a console message.
   *
   * @returns { number } Return the line number of a console message.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Gets the line number of a console message.
   *
   * @returns { number } Return the line number of a console message.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Gets the line number of a console message.
   *
   * @returns { number } Return the line number of a console message.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  getLineNumber(): number;

  /**
   * Gets the message level of a console message.
   *
   * @returns { MessageLevel } Return the message level of a console message, which can be {@link MessageLevel}.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Gets the message level of a console message.
   *
   * @returns { MessageLevel } Return the message level of a console message, which can be {@link MessageLevel}.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  getMessageLevel(): MessageLevel;

  /**
   * Gets the source of a console message.
   *
   * @returns { ConsoleMessageSource } Return the source of a console message.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  getSource() : ConsoleMessageSource;
}

/**
 * Encompassed message information as parameters to {@link onConsole} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines the Web resource request.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines the Web resource request.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @since 10
 */
/**
 * Defines the Web resource request.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare class WebResourceRequest {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  constructor();

  /**
   * Gets request headers.
   *
   * @returns { Array<Header> } Return the request headers
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Gets request headers.
   *
   * @returns { Array<Header> } Return the request headers
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Gets request headers.
   *
   * @returns { Array<Header> } Return the request headers
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  getRequestHeader(): Array<Header>;

  /**
   * Gets the request URL.
   *
   * @returns { string } Return the request URL.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Gets the request URL.
   *
   * @returns { string } Return the request URL.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Gets the request URL.
   *
   * @returns { string } Return the request URL.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  getRequestUrl(): string;

  /**
   * Check whether the request is associated with gesture.
   *
   * @returns { boolean } Return {@code true} if the request is associated with gesture;return {@code false} otherwise.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Check whether the request is associated with gesture.
   *
   * @returns { boolean } Return {@code true} if the request is associated with gesture;return {@code false} otherwise.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Check whether the request is associated with gesture.
   *
   * @returns { boolean } Return {@code true} if the request is associated with gesture;return {@code false} otherwise.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  isRequestGesture(): boolean;

  /**
   * Check whether the request is for getting the main frame.
   *
   * @returns { boolean } Return {@code true} if the request is associated with gesture for getting the main frame; return {@code false} otherwise.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Check whether the request is for getting the main frame.
   *
   * @returns { boolean } Return {@code true} if the request is associated with gesture for getting the main frame; return {@code false} otherwise.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Check whether the request is for getting the main frame.
   *
   * @returns { boolean } Return {@code true} if the request is associated with gesture for getting the main frame; return {@code false} otherwise.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  isMainFrame(): boolean;

  /**
   * Check whether the request redirects.
   *
   * @returns { boolean } Return {@code true} if the request redirects; return {@code false} otherwise.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Check whether the request redirects.
   *
   * @returns { boolean } Return {@code true} if the request redirects; return {@code false} otherwise.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Check whether the request redirects.
   *
   * @returns { boolean } Return {@code true} if the request redirects; return {@code false} otherwise.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  isRedirect(): boolean;

  /**
   * Get request method.
   *
   * @returns { string } Return the request method.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Get request method.
   *
   * @returns { string } Return the request method.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Get request method.
   *
   * @returns { string } Return the request method.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  getRequestMethod(): string;
}

/**
 * Defines the Web resource response.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines the Web resource response.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare class WebResourceResponse {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  constructor();

  /**
   * Gets the response data.
   *
   * @returns { string } Return the response data.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Gets the response data.
   *
   * @returns { string } Return the response data.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Gets the response data.
   *
   * @returns { string } Return the response data.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  getResponseData(): string;

  /**
   * Gets the response data.
   *
   * @returns { string | number | ArrayBuffer | Resource | undefined } Return the response data.
   *     string type indicate string in HTML format.
   *     number type indicate file handle.
   *     Resource type indicate $rawfile resource.
   *     ArrayBuffer type indicate binary data.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13
   */
  /**
   * Gets the response data.
   *
   * @returns { string | number | ArrayBuffer | Resource | undefined } Return the response data.
   *     string type indicate string in HTML format.
   *     number type indicate file handle.
   *     Resource type indicate $rawfile resource.
   *     ArrayBuffer type indicate binary data.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @since 18 dynamic
   */
  getResponseDataEx(): string | number | ArrayBuffer | Resource | undefined;

  /**
   * Gets the response encoding.
   *
   * @returns { string } Return the response encoding.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Gets the response encoding.
   *
   * @returns { string } Return the response encoding.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  getResponseEncoding(): string;

  /**
   * Gets the response MIME type.
   *
   * @returns { string } Return the response MIME type.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Gets the response MIME type.
   *
   * @returns { string } Return the response MIME type.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  getResponseMimeType(): string;

  /**
   * Gets the reason message.
   *
   * @returns { string } Return the reason message.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Gets the reason message.
   *
   * @returns { string } Return the reason message.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Gets the reason message.
   *
   * @returns { string } Return the reason message.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  getReasonMessage(): string;

  /**
   * Gets the response headers.
   *
   * @returns { Array<Header> } Return the response headers.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Gets the response headers.
   *
   * @returns { Array<Header> } Return the response headers.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Gets the response headers.
   *
   * @returns { Array<Header> } Return the response headers.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  getResponseHeader(): Array<Header>;

  /**
   * Gets the response code.
   *
   * @returns { number } Return the response code.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Gets the response code.
   *
   * @returns { number } Return the response code.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  getResponseCode(): number;

  /**
   * Sets the response data.
   *
   * @param { string | number | Resource } data - the response data.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Sets the response data.
   *
   * @param { string | number | Resource } data - the response data.
   *     string type indicate strings in HTML format.
   *     number type indicate file handle.
   *     Resource type indicate $rawfile resource.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 10
   */
  /**
   * Sets the response data.
   *
   * @param { string | number | Resource | ArrayBuffer } data - the response data.
   *     string type indicate strings in HTML format.
   *     number type indicate file handle.
   *     Resource type indicate $rawfile resource.
   *     ArrayBuffer type indicate binary data.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the response data.
   *
   * @param { string | number | Resource | ArrayBuffer } data - the response data.
   *     string type indicate strings in HTML format.
   *     number type indicate file handle.
   *     Resource type indicate $rawfile resource.
   *     ArrayBuffer type indicate binary data.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  setResponseData(data: string | number | Resource | ArrayBuffer): void;

  /**
   * Sets the response encoding.
   *
   * @param { string } encoding the response encoding.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Sets the response encoding.
   *
   * @param { string } encoding the response encoding.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the response encoding.
   *
   * @param { string } encoding the response encoding.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Sets the response encoding.
   *
   * @param { string } encoding the response encoding.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  setResponseEncoding(encoding: string): void;

  /**
   * Sets the response MIME type.
   *
   * @param { string } mimeType the response MIME type.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Sets the response MIME type.
   *
   * @param { string } mimeType the response MIME type.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the response MIME type.
   *
   * @param { string } mimeType the response MIME type.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Sets the response MIME type.
   *
   * @param { string } mimeType the response MIME type.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  setResponseMimeType(mimeType: string): void;

  /**
   * Sets the reason message.
   *
   * @param { string } reason the reason message.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Sets the reason message.
   *
   * @param { string } reason the reason message.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the reason message.
   *
   * @param { string } reason the reason message.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Sets the reason message.
   *
   * @param { string } reason the reason message.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  setReasonMessage(reason: string): void;

  /**
   * Sets the response headers.
   *
   * @param { Array<Header> } header the response headers.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Sets the response headers.
   *
   * @param { Array<Header> } header the response headers.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the response headers.
   *
   * @param { Array<Header> } header the response headers.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Sets the response headers.
   *
   * @param { Array<Header> } header the response headers.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  setResponseHeader(header: Array<Header>): void;

  /**
   * Sets the response code.
   *
   * @param { number } code the response code.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Sets the response code.
   *
   * @param { number } code the response code.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the response code.
   *
   * @param { number } code the response code.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Sets the response code.
   *
   * @param { number } code the response code.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  setResponseCode(code: number): void;

  /**
   * Sets the response is ready or not.
   *
   * @param { boolean } IsReady whether the response is ready.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Sets the response is ready or not.
   *
   * @param { boolean } IsReady whether the response is ready.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the response is ready or not.
   *
   * @param { boolean } IsReady whether the response is ready.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Sets the response is ready or not.
   *
   * @param { boolean } IsReady whether the response is ready.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  setResponseIsReady(IsReady: boolean): void;

  /**
   * Gets whether the response is ready.
   *
   * @returns { boolean } True indicates the response data is ready and false is not ready.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13
   */
  /**
   * Gets whether the response is ready.
   *
   * @returns { boolean } True indicates the response data is ready and false is not ready.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @since 18 dynamic
   */
  getResponseIsReady(): boolean;
}

/**
 * Defines the Web's request/response header.
 *
 * @interface Header
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines the Web's request/response header.
 *
 * @interface Header
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
/**
 * Defines the Web's request/response header.
 *
 * @typedef Header
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
/**
 * Defines the Web's request/response header.
 *
 * @typedef Header
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface Header {
  /**
   * Gets the key of the request/response header.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Gets the key of the request/response header.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Gets the key of the request/response header.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  headerKey: string;

  /**
   * Gets the value of the request/response header.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Gets the value of the request/response header.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Gets the value of the request/response header.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  headerValue: string;
}

/**
 * Defines the Web resource error.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines the Web resource error.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @since 10
 */
/**
 * Defines the Web resource error.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare class WebResourceError {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  constructor();

  /**
   * Gets the info of the Web resource error.
   *
   * @returns { string } Return the info of the Web resource error.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Gets the info of the Web resource error.
   *
   * @returns { string } Return the info of the Web resource error.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Gets the info of the Web resource error.
   *
   * @returns { string } Return the info of the Web resource error.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  getErrorInfo(): string;

  /**
   * Gets the code of the Web resource error.
   *
   * @returns { number } Return the code of the Web resource error.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Gets the code of the Web resource error.
   *
   * @returns { number } Return the code of the Web resource error.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Gets the code of the Web resource error.
   *
   * @returns { number } Return the code of the Web resource error.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  getErrorCode(): number;

  /**
   * Gets the custom error code of the Web resource.
   *
   * @returns { number } Return the custom error code of the Web resource.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 26.0.0 dynamic
   */
  getCustomErrorCode(): number;
}

/**
 * Defines the js geolocation request.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class JsGeolocation {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor();

  /**
   * Report the geolocation permission status from users.
   *
   * @param { string } origin - Index of the origin.
   * @param { boolean } allow - Geolocation permission status. {@code true} means to allow geolocation permission;
   *     {@code false} means to disallow geolocation permission.
   * @param { boolean } retain - Whether the geolocation permission status can be saved to the system.
   *     {@code true} means to allow the geolocation permission status to be saved to
   *     the system; {@code false} means to disallow the geolocation permission status to
   *     be saved to the system. You can manage the geolocation permissions saved
   *     to the system through {@link GeolocationPermissions}.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  invoke(origin: string, allow: boolean, retain: boolean): void;
}

/**
 * Defines the Web cookie.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines the Web cookie.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamiconly
 * @deprecated since 23
 * @useinstead ohos.web.webview.webview.WebCookieManager
 */
declare class WebCookie {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamiconly
   * @deprecated since 23
   * @useinstead ohos.web.webview.webview.WebCookieManager
   */
  constructor();

  /**
   * Sets the cookie.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebCookieManager#setCookie
   */
  setCookie();

  /**
   * Saves the cookies.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebCookieManager#saveCookieAsync
   */
  saveCookie();
}

/**
 * 通知Web组件同层事件消费结果，支持的事件：[触摸事件的类型]{@link enums:TouchType}和[鼠标事件的类型]{@link enums:MouseAction}，鼠标仅支持
 * [左中右按键]{@link enums:MouseButton}。
 *
 * 如果应用不消费该事件，则应设置消费结果为false，事件将会被Web组件消费；反之如果应用消费了该事件，则应将消费结果设置为true，Web组件将不消费该事件。若应用设置消费结果不符合以上使用规格，将产生与开发者预期不匹配的现象。
 *
 * 触摸事件示例代码参考[onNativeEmbedGestureEvent事件]{@link web:WebAttribute.onNativeEmbedGestureEvent}。
 *
 * 鼠标事件示例代码参考[onNativeEmbedMouseEvent事件]{@link web:WebAttribute.onNativeEmbedMouseEvent}。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare class EventResult {
  /**
   * EventResult的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  constructor();

  /**
   * 设置手势事件消费结果。
   *
   * @param { boolean } result - 是否消费该手势事件。<br>true表示消费该手势事件，false表示不消费该手势事件。<br>传入null或undefined时为true。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  setGestureEventResult(result: boolean): void;

  /**
   * 设置手势事件消费结果。
   *
   * @param { boolean } result - 是否消费该手势事件。<br>true表示消费该手势事件，false表示不消费该手势事件。<br>传入null或undefined时为true。
   * @param { boolean } stopPropagation - 是否阻止冒泡，在result为true时生效。<br>true表示阻止冒泡，false表示不阻止冒泡。<br>传入null或undefined时为true。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 14 dynamic
   */
  setGestureEventResult(result: boolean, stopPropagation: boolean): void;

  /**
   * 设置鼠标事件消费结果。
   *
   * @param { boolean } result - 是否消费该鼠标事件。<br>true表示消费该鼠标事件，false表示不消费该鼠标事件。<br>传入null或undefined时为true。
   * @param { boolean } [stopPropagation] - 是否阻止冒泡，在result为true时生效。<br>true表示阻止冒泡，false表示不阻止冒泡。<br>传入null或undefined时为
   *     true。<br>默认值：true。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  setMouseEventResult(result: boolean, stopPropagation?: boolean): void;
}

/**
 * Defines the Web controller.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.web.webview.webview.WebviewController
 */
declare class WebController {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#constructor
   */
  constructor();

  /**
   * Let the Web inactive.
   * It is no longer maintained since API version 9, and it is recommended to use {@link onInactive} instead.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#onInactive
   */
  onInactive(): void;

  /**
   * Let the Web active.
   * It is no longer maintained since API version 9, and it is recommended to use {@link onActive} instead.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#onActive
   */
  onActive(): void;

  /**
   * 对网页进行缩放。
   *
   * @param { number } factor 缩放系数。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#zoom
   */
  zoom(factor: number): void;

  /**
   * Clears the history in the Web.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#clearHistory
   */
  clearHistory(): void;

  /**
   * Asynchronously execute JavaScript in the context of the currently displayed page.
   * The result of the script execution will be returned through an asynchronous callback.
   * This method must be used on the UI thread, and the callback will also be invoked on the UI thread.
   * <p><strong>API Note</strong>:<br>
   * The state of JavaScript is no longer persisted across navigations like loadUrl.
   * For example, global variables and functions defined before calling loadUrl will not exist in the loaded page.
   * It is recommended that applications use registerJavaScriptProxy to ensure that the JavaScript state can be persisted across page navigations.
   * <p>
   *
   * @param { object } options The options with a piece of code and a callback.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#runJavaScript
   */
  runJavaScript(options: { script: string, callback?: (result: string) => void });

  /**
   * Loads the data or URL.
   *
   * @param { object } options The options with the data or URL and other information.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#loadData
   */
  loadData(options: { data: string, mimeType: string, encoding: string, baseUrl?: string, historyUrl?: string });

  /**
   * Loads the given URL.
   *
   * @param { object } options The options with the URL and other information.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#loadUrl
   */
  loadUrl(options: { url: string | Resource, headers?: Array<Header> });

  /**
   * refreshes the current URL.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#refresh
   */
  refresh();

  /**
   * Stops the current load.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#stop
   */
  stop();

  /**
   * Registers the JavaScript object and method list.
   *
   * @param { object } options - The option with the JavaScript object and method list.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#registerJavaScriptProxy
   */
  registerJavaScriptProxy(options: { object: object, name: string, methodList: Array<string> });

  /**
   * Deletes a registered JavaScript object with given name.
   *
   * @param { string } name - The name of a registered JavaScript object to be deleted.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#deleteJavaScriptRegister
   */
  deleteJavaScriptRegister(name: string);

  /**
   * 获取点击测试类型。
   *
   * @returns { HitTestType } 点击测试类型。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#getHitTest
   */
  getHitTest(): HitTestType;

  /**
   * Gets the request focus.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#requestFocus
   */
  requestFocus();

  /**
   * Checks whether the web page can go back.
   *
   * @returns { boolean } Whether the web page can go back.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#accessBackward
   */
  accessBackward(): boolean;

  /**
   * Checks whether the web page can go forward.
   *
   * @returns { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#accessForward
   */
  accessForward(): boolean;

  /**
   * Checks whether the web page can go back or forward the given number of steps.
   *
   * @param { number } step The number of steps.
   * @returns { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#accessStep
   */
  accessStep(step: number): boolean;

  /**
   * Goes back in the history of the web page.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#backward
   */
  backward();

  /**
   * Goes forward in the history of the web page.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#forward
   */
  forward();

  /**
   * Gets network cookie manager
   *
   * @returns { WebCookie }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.WebCookieManager
   */
  getCookieManager(): WebCookie;
}

/**
 * Defines the Web options.
 *
 * @interface WebOptions
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines the Web options.
 *
 * @interface WebOptions
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @since 10
 */
/**
 * Defines the Web options.
 *
 * @interface WebOptions
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11
 */
/**
 * Defines the Web options.
 *
 * @typedef WebOptions
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface WebOptions {
  /**
   * Sets the address of the web page to be displayed.
   *
   * @type { string | Resource }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Sets the address of the web page to be displayed.
   *
   * @type { string | Resource }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the address of the web page to be displayed.
   *
   * @type { string | Resource }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  src: string | Resource;

  /**
   * Sets the controller of the Web.
   *
   * @type { WebController | WebviewController }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Sets the controller of the Web.
   *
   * @type { WebController | WebviewController }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Sets the controller of the Web.
   *
   * @type { WebController | WebviewController }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the controller of the Web.
   *
   * @type { WebController | WebviewController }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  controller: WebController | WebviewController;

  /**
   * Sets the render mode of the web.
   *
   * @type { ?RenderMode }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  renderMode? : RenderMode;

  /**
   * Sets the incognito mode of the Web, the parameter is optional and default value is false.
   * When the Web is in incognito mode, cookies, records of websites, geolocation permissions
   * will not save in persistent files.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the incognito mode of the Web, the parameter is optional and default value is false.
   * When the Web is in incognito mode, cookies, records of websites, geolocation permissions
   * will not save in persistent files.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  incognitoMode? : boolean;

  /**
   * Sets the shared render process token of the web.
   * When the web is in multiprocess mode, web with the same
   * sharedRenderProcessToken will attempt to reuse the same render process.
   * The shared render process will remain active until all associated
   * web are destroyed.
   *
   * @type { ?string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  sharedRenderProcessToken? : string;

  /**
   * 设定鼠标事件是否被转换成触摸事件。
   *
   * 默认值：false。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  emulateTouchFromMouseEvent? : boolean;
}

/**
 * Defines the contents of the JavaScript to be injected.
 *
 * @interface ScriptItem
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
/**
 * Defines the contents of the JavaScript to be injected.
 *
 * @typedef ScriptItem
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface ScriptItem {
  /**
   * Sets the JavaScript to be injected.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  script: string;

  /**
   * Sets the rules of the JavaScript.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  scriptRules: Array<string>;

  /**
   * Set the regular expression rule that allows execution of this JavaScript.
   *
   * @type { ?Array<UrlRegexRule> }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  urlRegexRules? : Array<UrlRegexRule>;
}

/**
 * Defines the load committed details.
 *
 * @interface LoadCommittedDetails
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
/**
 * Defines the load committed details.
 *
 * @typedef LoadCommittedDetails
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LoadCommittedDetails {
  /**
   * Check whether the request is for getting the main frame.
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  isMainFrame: boolean;

  /**
   * Whether the navigation happened without changing document. Examples of
   * same document navigations are:
   *   1. reference fragment navigations.
   *   2. pushState/replaceState.
   *   3. same page history navigation
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  isSameDocument: boolean;

  /**
   * True if the committed entry has replaced the existing one. Note that in
   * case of subframes, the NavigationEntry and FrameNavigationEntry objects
   * don't actually get replaced - they're reused, but with updated attributes.
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  didReplaceEntry: boolean;

  /**
   * The type of the navigation.
   *
   * @type { WebNavigationType }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  navigationType: WebNavigationType;

  /**
   * The url to navigate.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  url: string;
}

/**
 * Defines the Intelligent Tracking Prevention details.
 *
 * @typedef IntelligentTrackingPreventionDetails
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface IntelligentTrackingPreventionDetails {
  /**
   * The host of website url.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  host: string;

  /**
   * The host of tracker url.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  trackerHost: string;
}

/**
 * Defines the Web interface.
 *
 * @interface WebInterface
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines the Web interface.
 *
 * @interface WebInterface
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @since 10
 */
/**
 * Defines the Web interface.
 *
 * @interface WebInterface
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11
 */
/**
 * Defines the Web interface.
 *
 * @typedef WebInterface
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
interface WebInterface {
  /**
   * Sets Value.
   *
   * @param { WebOptions } value
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Sets Value.
   *
   * @param { WebOptions } value
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Sets Value.
   *
   * @param { WebOptions } value
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  (value: WebOptions): WebAttribute;
}

/**
 * 提供同层标签的详细信息。
 *
 * @interface NativeEmbedInfo [since 11 - 11]
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare interface NativeEmbedInfo {
  /**
   * 同层标签的id信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  id?: string;

  /**
   * 同层标签的type信息，统一为小写字符。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  type?: string;

  /**
   * 同层标签的src信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  src?: string;

  /**
   * 同层标签相对于Web组件左上角为坐标原点的位置信息，此处区别于标准Position，单位为px。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  position?: Position;

  /**
   * 同层标签的宽，单位为px。
   *
   * @type { ?number }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  width?: number;

  /**
   * 同层标签的高，单位为px。
   *
   * @type { ?number }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  height?: number;

  /**
   * 同层标签的url信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  url?: string;

  /**
   * 标签名，统一为大写字符。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  tag?: string;

  /**
   * object标签包含的param标签键值对列表，该map本质为Object类型，请使用Object提供的方法操作该对象，即`embed.info?.param?.["name"]`。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  params?: Map<string, string>;
}

/**
 * 提供同层标签生命周期变化的详细信息。
 *
 * @interface NativeEmbedDataInfo [since 11 - 11]
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare interface NativeEmbedDataInfo {
  /**
   * 同层标签生命周期状态。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  status?: NativeEmbedStatus;

  /**
   * NativeImage的psurfaceid。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  surfaceId?: string;

  /**
   * 同层标签的id信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  embedId?: string;

  /**
   * 同层标签的详细信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  info?: NativeEmbedInfo;
}

/**
 * 提供同层标签的可见性信息。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 12 dynamic
 */
declare interface NativeEmbedVisibilityInfo {
  /**
   * 可见性。
   *
   * true表示可见，false表示不可见。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  visibility: boolean;

  /**
   * 同层渲染标签的唯一id。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  embedId: string;
}

/**
 * 提供手指触摸到同层标签的详细信息。
 *
 * @interface NativeEmbedTouchInfo [since 11 - 11]
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare interface NativeEmbedTouchInfo {
  /**
   * 同层标签的唯一id。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  embedId?: string;

  /**
   * 手指触摸动作信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  touchEvent?: TouchEvent;

  /**
   * 通知Web组件手势事件的消费结果。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  result?: EventResult;
}

/**
 * 提供鼠标/触摸板在同层标签上点击或长按的详细信息。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
declare interface NativeEmbedMouseInfo {
  /**
   * 同层标签的唯一id。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  embedId?: string;

  /**
   * 鼠标/触摸板点击/长按信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  mouseEvent?: MouseEvent;

  /**
   * 通知Web组件鼠标事件的消费结果。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  result?: EventResult;
}

/**
 * 提供网页绘制页面主要内容的详细信息。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface FirstMeaningfulPaint {
  /**
   * 导航条加载时间，单位以微秒表示。
   *
   * @type { ?number }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  navigationStartTime?: number;

  /**
   * 绘制页面主要内容时间，单位以毫秒表示。
   *
   * @type { ?number }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  firstMeaningfulPaintTime?: number;
}

/**
 * 提供网页绘制页面最大内容的详细信息。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LargestContentfulPaint {
  /**
   * 导航条加载时间，单位以微秒表示。
   *
   * @type { ?number }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  navigationStartTime?: number;

  /**
   * 最大图片加载的时间，单位是以毫秒表示。
   *
   * @type { ?number }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  largestImagePaintTime?: number;

  /**
   * 最大文本加载时间，单位是以毫秒表示。
   *
   * @type { ?number }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  largestTextPaintTime?: number;

  /**
   * 最大图片像素位数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  imageBPP?: number;
}

/**
 * Defines the render process not responding info.
 *
 * @interface RenderProcessNotRespondingData
 * @syscap SystemCapability.Web.Webview.Core
 * @since 12 dynamic
 */
declare interface RenderProcessNotRespondingData {
  /**
   * JavaScript stack info of the webpage when render process not responding.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  jsStack: string;

  /**
   * Process id of render process not responding.
   *
   * @type { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  pid: number;

  /**
   * Reason for the render process not responding.
   *
   * @type { RenderProcessNotRespondingReason }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  reason: RenderProcessNotRespondingReason;
}

/**
 * Defines the triggered function at the end of web page loading.
 *
 * @typedef OnPageEndEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnPageEndEvent {
  /**
   * The url of page.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;
}

/**
 * Defines the triggered function at the begin of web page loading.
 *
 * @typedef OnPageBeginEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnPageBeginEvent {
  /**
   * The url of page.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;
}

/**
 * 页面加载开始
 *
 * @typedef OnLoadStartedEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
declare interface OnLoadStartedEvent {
  /**
   * 当前加载中的url
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  url: string;
}

/**
 * Defines the triggered function at the end of web page loading.
 *
 * @typedef OnLoadFinishedEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
declare interface OnLoadFinishedEvent {
  /**
   * 当前加载中的url
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  url: string;
}

/**
 * Defines the triggered function when the page loading progress changes.
 *
 * @typedef OnProgressChangeEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnProgressChangeEvent {
  /**
   * The new progress of the page.
   *
   * @type { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  newProgress: number;
}

/**
 * Defines the triggered function when the title of the main application document changes.
 *
 * @typedef OnTitleReceiveEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnTitleReceiveEvent {
  /**
   * The title of the page.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  title: string;

  /**
   * Mark the source of the title. If it is true, the title is derived from the H5 title element;
   * If it is false, it is calculated from the URL. By default, it is calculated from the URL.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  isRealTitle?: boolean;
}

/**
 * Defines the triggered function when requesting to show the geolocation permission.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnGeolocationShowEvent {
  /**
   * Origin of the page.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  origin: string;

  /**
   * Defines the js geolocation request.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  geolocation: JsGeolocation;
}

/**
 * 定义网页触发 `alert()` 告警时的回调函数。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnAlertEvent {
  /**
   * 当前显示弹窗的网页的URL。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;

  /**
   * 显示在弹窗中的信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  message: string;

  /**
   * 通知Web组件用户的操作结果。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  result: JsResult;
}

/**
 * Defines the triggered function when the web page wants to confirm navigation from JavaScript onbeforeunload.
 *
 * @typedef OnBeforeUnloadEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
/**
 * Defines the triggered function when the web page wants to confirm navigation from JavaScript onbeforeunload.
 *
 * @typedef OnBeforeUnloadEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface OnBeforeUnloadEvent {
  /**
   * The url of the page.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * The url of the page.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  url: string;

  /**
   * The message of confirm dialog.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * The message of confirm dialog.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  message: string;

  /**
   *  Handle the user's JavaScript result.
   *
   * @type { JsResult }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   *  Handle the user's JavaScript result.
   *
   * @type { JsResult }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  result: JsResult;

  /**
   * 当页面刷新时，isReload 参数被设置为 true；否则，它保持为 false。默认值为 false。
   *
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  isReload?: boolean;
}

/**
 * 定义网页触发 `confirm()` 弹窗时的回调函数。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnConfirmEvent {
  /**
   * 当前显示弹窗的网页的URL。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;

  /**
   * 显示在弹窗中的信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  message: string;

  /**
   * 通知Web组件用户的操作结果。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  result: JsResult;
}

/**
 * 定义网页触发 `prompt()` 弹窗时的回调函数。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnPromptEvent {
  /**
   * 当前显示弹窗的网页的URL。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;

  /**
   * 显示在弹窗中的信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  message: string;

  /**
   * 对话框默认返回的信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  value: string;

  /**
   * 通知Web组件用户的操作结果。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  result: JsResult;
}

/**
 * Defines the triggered function when the web page receives a JavaScript console message.
 *
 * @typedef OnConsoleEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnConsoleEvent {
  /**
   * Console message information of the event.
   *
   * @type { ConsoleMessage }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  message: ConsoleMessage;
}

/**
 * Defines the triggered function when the web page receives a web resource loading error.
 *
 * @typedef OnErrorReceiveEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnErrorReceiveEvent {
  /**
   * The information of request.
   *
   * @type { WebResourceRequest }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  request: WebResourceRequest;

  /**
   * The information of error.
   *
   * @type { WebResourceError }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  error: WebResourceError;
}

/**
 * Defines the triggered function when the web page receives a web resource loading HTTP error.
 *
 * @typedef OnHttpErrorReceiveEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnHttpErrorReceiveEvent {
  /**
   * The information of request.
   *
   * @type { WebResourceRequest }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  request: WebResourceRequest;

  /**
   *  Web resource response of event.
   *
   * @type { WebResourceResponse }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  response: WebResourceResponse;
}

/**
 * Defines the triggered function when starting to download.
 *
 * @typedef OnDownloadStartEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnDownloadStartEvent {
  /**
   * The URL of page.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;

  /**
   * The userAgent of page.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  userAgent: string;

  /**
   * The contentDisposition of page.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * The contentDisposition of page.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  contentDisposition: string;

  /**
   * The mimetype of page.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  mimetype: string;

  /**
   * The contentLength of page.
   *
   * @type { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentLength: number;
}

/**
 * Defines the triggered callback when the Web page refreshes accessed history.
 *
 * @typedef OnRefreshAccessedHistoryEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
/**
 * Defines the triggered callback when the Web page refreshes accessed history.
 *
 * @typedef OnRefreshAccessedHistoryEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface OnRefreshAccessedHistoryEvent {
  /**
   * URL of the visit.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * URL of the visit.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  url: string;

  /**
   * If true, the page is being reloaded, otherwise,  means that the page is newly loaded.
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * If true, the page is being reloaded, otherwise,  means that the page is newly loaded.
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  isRefreshed: boolean;

  /**
   * Whether is triggered by main frame.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  isMainFrame?: boolean;
}

/**
 * Defines the triggered when the render process exits.
 *
 * @typedef OnRenderExitedEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnRenderExitedEvent {
  /**
   * The specific reason why the rendering process exits abnormally.
   *
   * @type { RenderExitReason }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  renderExitReason: RenderExitReason;
}

/**
 * 定义文件选择器结果。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnShowFileSelectorEvent {
  /**
   * 用于通知Web组件文件选择的结果。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  result: FileSelectorResult;

  /**
   * 文件选择器的相关信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fileSelector: FileSelectorParam;
}

/**
 * Defines the triggered when the url loading.
 *
 * @typedef OnResourceLoadEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnResourceLoadEvent {
  /**
   * The URL of the loaded resource file.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;
}

/**
 * 定义当前页面显示比例的变化时触发。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnScaleChangeEvent {
  /**
   * 变化前的显示比例百分比。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  oldScale: number;

  /**
   * 变化后的显示比例百分比。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  newScale: number;
}

/**
 * Defines the triggered when the browser needs credentials from the user.
 *
 * @typedef OnHttpAuthRequestEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnHttpAuthRequestEvent {
  /**
   * Defines the http auth request result.
   *
   * @type { HttpAuthHandler }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  handler: HttpAuthHandler;

  /**
   * Host of the page.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  host: string;

  /**
   * realm of the page.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  realm: string;
}

/**
 * Defines the triggered callback when the resources loading is intercepted.
 *
 * @typedef OnInterceptRequestEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
/**
 * Defines the triggered callback when the resources loading is intercepted.
 *
 * @typedef OnInterceptRequestEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare interface OnInterceptRequestEvent {
  /**
   * The information of request.
   *
   * @type { WebResourceRequest }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * The information of request.
   *
   * @type { WebResourceRequest }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  request: WebResourceRequest;
}

/**
 * Defines the triggered callback when the host application that web content from the specified origin is
 *     attempting to access the resources.
 *
 * @typedef OnPermissionRequestEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnPermissionRequestEvent {
  /**
   * Defines the onPermissionRequest callback.
   *
   * @type { PermissionRequest }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  request: PermissionRequest;
}

/**
 * Defines the triggered callback when the host application that web content from the specified origin is
 *     requesting to capture screen.
 *
 * @typedef OnScreenCaptureRequestEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnScreenCaptureRequestEvent {
  /**
   * Notifies the user of the operation behavior of the web component.
   *
   * @type { ScreenCaptureHandler }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  handler: ScreenCaptureHandler;
}

/**
 * 定义调用时触发的回调，以允许自定义显示上下文菜单。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnContextMenuShowEvent {
  /**
   * 菜单相关参数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  param: WebContextMenuParam;

  /**
   * 菜单相应事件传入内核。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  result: WebContextMenuResult;
}

/**
 * Defines function Triggered when the host application call searchAllAsync.
 *
 * @typedef OnSearchResultReceiveEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnSearchResultReceiveEvent {
  /**
   * The ordinal number of the currently matched lookup item (starting from 0).
   *
   * @type { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  activeMatchOrdinal: number;

  /**
   * The number of all matched keywords.
   *
   * @type { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  numberOfMatches: number;

  /**
   * Indicates whether the current in-page search operation is complete. The method may be called back multiple times until isDoneCounting is true.
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  isDoneCounting: boolean;
}

/**
 * 定义滚动条滑动到指定位置时触发。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnScrollEvent {
  /**
   * 以网页最左端为基准，水平滚动条滚动所在位置。
   *
   * 单位：vp。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  xOffset: number;

  /**
   * 以网页最上端为基准，竖直滚动条滚动所在位置。
   *
   * 单位：vp。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  yOffset: number;
}

/**
 * Defines the triggered callback when the Web page receives an ssl Error.
 *
 * @typedef OnSslErrorEventReceiveEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
/**
 * Defines the triggered callback when the Web page receives an ssl Error.
 *
 * @typedef OnSslErrorEventReceiveEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare interface OnSslErrorEventReceiveEvent {
  /**
   * Notifies the user of the operation behavior of the web component.
   *
   * @type { SslErrorHandler }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Notifies the user of the operation behavior of the web component.
   *
   * @type { SslErrorHandler }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  handler: SslErrorHandler;

  /**
   * Error codes.
   *
   * @type { SslError }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Error codes.
   *
   * @type { SslError }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  error: SslError;

  /**
   * Certificate chain data in DER format.
   *
   * @type { ?Array<Uint8Array> }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 15
   */
  /**
   * Certificate chain data in DER format.
   *
   * @type { ?Array<Uint8Array> }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @since 23 dynamic
   */
  certChainData?: Array<Uint8Array>;
}

/**
 * Defines the triggered callback when needs ssl client certificate from the user.
 *
 * @typedef OnClientAuthenticationEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnClientAuthenticationEvent {
  /**
   * Notifies the user of the operation behavior of the web component.
   *
   * @type { ClientAuthenticationHandler }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  handler : ClientAuthenticationHandler;

  /**
   * The hostname of the requesting certificate server.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  host : string;

  /**
   * The port number of the request certificate server.
   *
   * @type { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  port : number;

  /**
   * Acceptable asymmetric key types.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  keyTypes : Array<string>;

  /**
   * Certificates that match the private key are acceptable to the issuer.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  issuers : Array<string>;
}

/**
 * Defines the triggered callback when web page requires the user to create a window.
 *
 * @typedef OnWindowNewEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnWindowNewEvent {
  /**
   * true indicates the request to create a dialog and false indicates a new tab.
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  isAlert: boolean;

  /**
   * true indicates that it is triggered by the user, and false indicates that it is triggered by a non-user.
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  isUserTrigger: boolean;

  /**
   * Destination URL.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  targetUrl: string;

  /**
   * Lets you set the WebviewController instance for creating a new window.
   *
   * @type { ControllerHandler }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  handler: ControllerHandler;
}

/**
 * Defines the triggered callback when the application receive an new url of an apple-touch-icon.
 *
 * @typedef OnTouchIconUrlReceivedEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnTouchIconUrlReceivedEvent {
  /**
   * The apple-touch-icon URL address received.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;

  /**
   * Corresponding to whether apple-touch-icon is precomposited.
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  precomposed: boolean;
}

/**
 * Defines the triggered callback when the application receive a new favicon for the current web page.
 *
 * @typedef OnFaviconReceivedEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnFaviconReceivedEvent {
  /**
   * Received the Favicon icon for the PixelMap object.
   *
   * @type { PixelMap }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  favicon: PixelMap;
}

/**
 * Defines the triggered callback when previous page will no longer be drawn and next page begin to draw.
 *
 * @typedef OnPageVisibleEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnPageVisibleEvent {
  /**
   * The URL of page.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;
}

/**
 * Defines the triggered callback to decision whether resend form data or not.
 *
 * @typedef OnDataResubmittedEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnDataResubmittedEvent {
  /**
   * Form data resubmission handle.
   *
   * @type { DataResubmissionHandler }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  handler: DataResubmissionHandler;
}

/**
 * Defines the playing state of audio on web page.
 *
 * @typedef OnAudioStateChangedEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnAudioStateChangedEvent {
  /**
   * The audio playback status of the current page, true if playing true otherwise false.
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  playing: boolean;
}

/**
 * 定义网页首次内容绘制回调函数。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnFirstContentfulPaintEvent {
  /**
   * 启动页面加载开始的时间，单位以微秒表示。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  navigationStartTick: number;

  /**
   * 从启动页面加载开始到第一次绘制内容的时间，单位是以毫秒表示。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  firstContentfulPaintMs: number;
}

/**
 * Defines the triggered callback when the resources loading is intercepted.
 *
 * @typedef OnLoadInterceptEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnLoadInterceptEvent {
  /**
   * The information of request.
   *
   * @type { WebResourceRequest }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  data: WebResourceRequest;
}

/**
 * 定义网页过度滚动时触发的回调。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnOverScrollEvent {
  /**
   * 以网页最左端为基准，水平过度滚动的偏移量。
   *
   * 单位：vp。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  xOffset: number;

  /**
   * 以网页最上端为基准，竖直过度滚动的偏移量。
   *
   * 单位：vp。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  yOffset: number;
}

/**
 * Defines the function Triggered when the PDF page scrolling.
 *
 * @typedef OnPdfScrollEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
declare interface OnPdfScrollEvent {

  /**
   * PDF page url.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  url:string;
}
/**
 * Arkweb中加载PDF页面的事件
 *
 * @typedef OnPdfLoadEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
declare interface OnPdfLoadEvent {
  /**
   * The PDF page load result.
   *
   * @type { PdfLoadResult }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  result: PdfLoadResult;

  /**
   * 当前加载的PDF页面URL
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  url: string;
}
/**
 * Defines the JavaScript object to be injected.
 *
 * @typedef JavaScriptProxy
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
/**
 * Defines the JavaScript object to be injected.
 *
 * @typedef JavaScriptProxy
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface JavaScriptProxy {
  /**
   * Objects participating in registration.
   *
   * @type { object }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Objects participating in registration.
   *
   * @type { object }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  object: object;

  /**
   * The name of the registered object, which is consistent with the
   *                          object name called in the window.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * The name of the registered object, which is consistent with the
   *                          object name called in the window.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  name: string;

  /**
   * The method of the application side JavaScript object participating
   *                                       in the registration.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * The method of the application side JavaScript object participating
   *                                       in the registration.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  methodList: Array<string>;

  /**
   * Controller.
   *
   * @type { WebController | WebviewController }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Controller.
   *
   * @type { WebController | WebviewController }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  controller: WebController | WebviewController;

  /**
   * The async method of the application side JavaScript object participating in the registration.
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * The async method of the application side JavaScript object participating in the registration.
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  asyncMethodList?: Array<string>;

  /**
   * permission configuration defining web page URLs that can access JavaScriptProxy methods.
   * The configuration can be defined at two levels, object level and method level.
   *
   * @type { ?string }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  permission?: string;
}

/**
 * Enum type supplied to {@link keyboardAvoidMode} for setting the web keyboard avoid mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare enum WebKeyboardAvoidMode {
  /**
   * Resize the visual viewport when keyboard avoidance occurs.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  RESIZE_VISUAL = 0,

  /**
   * Resize the visual and layout viewport when keyboard avoidance occurs.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  RESIZE_CONTENT = 1,

  /**
   * Do not resize any viewport when keyboard avoidance occurs.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  OVERLAYS_CONTENT = 2,

  /**
   * When the soft keyboard avoids, follow the avoid result of UIContext.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  RETURN_TO_UICONTEXT = 3
}

/**
 * 网页元素信息。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 13 dynamic
 */
declare enum WebElementType {
  /**
   * 网页元素为图像类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  IMAGE = 1,

  /**
   * 网页元素为超链接类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  LINK = 2,

  /**
   * 网页元素为文本或可编辑区域类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  TEXT = 3
}

/**
 * 菜单的响应类型。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 13 dynamic
 */
declare enum WebResponseType {
  /**
   * 通过长按触发菜单弹出。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  LONG_PRESS = 1,

  /**
   * 通过鼠标右键触发菜单弹出。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  RIGHT_CLICK = 2
}

/**
 * Arkweb audio session Type
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
declare enum AudioSessionType {
  /**
   * Ambient audio, which is mixable with other types of audio.
   * This is useful in some special cases such as when the user wants to mix audios from multiple pages.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  AMBIENT = 3,
}

/**
 * PDF页面加载结果
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
declare enum PdfLoadResult {

  /**
   * The PDF page load success.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  LOAD_SUCCESS = 0,

  /**
   * PDF文件加载失败的错误码
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  PARSE_ERROR_FILE = 1,

  /**
   * PDF文件格式不支持错误码
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  PARSE_ERROR_FORMAT = 2,

  /**
   * The error code for the PDF password is wrong.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  PARSE_ERROR_PASSWORD = 3,

  /**
   * PDF处理失败错误码
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  PARSE_ERROR_HANDLER = 4
}

/**
 * 跳过渲染vsync条件。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
declare enum WebBypassVsyncCondition {
  /**
   * 默认值，按vsync调度流程绘制。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  NONE = 0,

  /**
   * 在使用scrollby（只支持带滚动偏移量）且Web页面滚动偏移量为0，渲染流程跳过vsync调度直接绘制。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  SCROLLBY_FROM_ZERO_OFFSET = 1
}

/**
 * 预览菜单选项。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamiconly
 */
declare interface PreviewMenuOptions {
  /**
   * 菜单弹出时振动效果。需配置"ohos.permission.VIBRATE"权限
   *
   * 默认值：HapticFeedbackMode.DISABLED，菜单弹出时不振动。
   *
   * @default HapticFeedbackMode.DISABLED
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamiconly
   */
  hapticFeedbackMode?: HapticFeedbackMode;
}

/**
 * 自定义菜单扩展项。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 13 dynamic
 */
declare interface SelectionMenuOptionsExt {
  /**
   * 自定义选择菜单弹出时回调。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  onAppear?: Callback<void>;

  /**
   * 自定义选择菜单关闭时回调。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  onDisappear?: Callback<void>;

  /**
   * 自定义选择菜单的预览内容样式，未配置时无预览内容。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  preview?: CustomBuilder;

  /**
   * 自定义选择菜单类型。
   *
   * 默认值：`MenuType.SELECTION_MENU`。
   *
   * 从API version 20起，`MenuType.PREVIEW_MENU`支持超链接预览。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  menuType?: MenuType;

  /**
   * 自定义选择预览菜单选项。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  previewMenuOptions?: PreviewMenuOptions;

  /**
   * 自定义选择菜单显示时回调。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  onMenuShow?: Callback<void>;

  /**
   * 自定义选择菜单隐藏时回调。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  onMenuHide?: Callback<void>;
}

/**
 * 定义检测到白屏时的结果的细节。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare interface BlankScreenDetails {
  /**
   * 在使用到检测有内容的节点检测策略时，且开发者自己设置了检测到节点数量阈值时，可能包含该属性。否则没有该属性。
   *
   * 表示当前命中了多少有内容的节点。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  detectedContentfulNodesCount?: number;
}

/**
 * 白屏的具体原因。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare enum DetectedBlankScreenReason {
  /**
   * 没有命中任何有内容的节点。
   *
   * 当检测策略为DETECTION_CONTENTFUL_NODES_SEVENTEEN时可能触发。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  NO_CONTENTFUL_NODES = 0,
  /**
   * 命中有内容节点的数量小于等于阈值。
   *
   * 当检测策略为DETECTION_CONTENTFUL_NODES_SEVENTEEN，且开发者设置了节点数量阈值contentfulNodesCountThreshold时可能触发。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  SUB_THRESHOLD_CONTENTFUL_NODES = 1
}

/**
 * 定义检测到白屏时的事件信息。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare interface BlankScreenDetectionEventInfo {
  /**
   * 检测到白屏时，页面的url。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  url: string;

  /**
   * 本次检测到白屏时，具体原因与检测的方法相关。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  blankScreenReason: DetectedBlankScreenReason;

  /**
   * 本次检测白屏的结果的细节。
   *
   * 如当发现近似白屏的现象产生，这个细节就包含具体命中了多少点。否则没有该属性。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  blankScreenDetails?: BlankScreenDetails;
}

/**
 * 检测到白屏时触发此回调。
 *
 * @param { BlankScreenDetectionEventInfo } event - 检测到白屏时的详细信息。
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
type OnDetectBlankScreenCallback = (event: BlankScreenDetectionEventInfo) => void;

/**
 * 文本选择内容发生变化后，通过回调返回选中的文本。
 *
 * @param { string } selectionText - 所选文本。
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
type TextSelectionChangeCallback = (selectionText: string) => void;

/**
 * 白屏检测使用的检测策略的方法。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare enum BlankScreenDetectionMethod {
  /**
   * 以17点检测法进行页面检测。当检测点命中已经渲染了且有意义的节点，则认为有命中。有意义的节点指的是图片，视频和文字节点。
   *
   * 当无命中，或少于用户设置阈值命中时，则认为是白屏或者近似白屏。
   *
   * 其中，检测的17个点位包括：
   *
   * 中心点 (1个)： 位于页面的几何中心。
   *
   * 内部网格交点 (16个)：在页面区域内定义一个5×5 的均匀网格，这16个点即为页面内4条垂直等分线和4条水平等分线的交点。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  DETECTION_CONTENTFUL_NODES_SEVENTEEN = 0
}

/**
 * 定义白屏检测的策略配置选项。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare interface BlankScreenDetectionConfig {
  /**
   * 是否使能白屏策略功能。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  enable: boolean;

  /**
   * 用以设置需要在加载后多少秒的时机来检测是否白屏。
   *
   * 单位：秒。
   *
   * 注：
   *
   * 1.重复值会忽略。
   *
   * 2.需大于0，小于0的值会被忽略。
   *
   * 默认值：[1.0,3.0,5.0]。
   *
   * @type { ?number[] }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  detectionTiming?: number[];
  /**
   * 使用检测策略的方法，是一个数组。
   *
   * 注：
   *
   * 1.重复值会忽略。
   *
   * 默认值：[BlankScreenDetectionMethod.DETECTION_CONTENTFUL_NODES_SEVENTEEN]。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  detectionMethods?: BlankScreenDetectionMethod[];
  /**
   * 在使用到检测有内容的节点检测策略时，才会生效。
   *
   * 可以设置0-${检测策略最大节点}，如果小于等于阈值则会触发近似白屏。
   *
   * 默认值：0。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  contentfulNodesCountThreshold?: number;
}

/**
 * 检测到首屏渲染时的事件信息。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare interface FirstScreenPaint {
  /**
   * 本次首屏渲染统计所对应的url。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  url: string;

  /**
   * url所指页面开始导航的时刻。
   *
   * 单位：毫秒。
   *
   * @type { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  navigationStartTime: number;

  /**
   * url所指页面首屏绘制完成的时刻。
   *
   * 单位：毫秒。
   *
   * @type { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  firstScreenPaintTime: number;
}

/**
 * 检测到首屏渲染结束时会触发此回调。
 *
 * @param { FirstScreenPaint } firstScreenPaint - 检测到首屏渲染时的详细信息。
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
type OnFirstScreenPaintCallback = (firstScreenPaint: FirstScreenPaint) => void;

/**
 * 当inputmethod被附加时，会触发回调。
 *
 * @typedef { function } OnInputmethodAttachedCallback
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
type OnInputmethodAttachedCallback = () => void;

/**
 * 提供给{@链接键盘外观}的枚举类型，用于设置Web键盘外观模式。
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum WebKeyboardAppearanceMode {
  /**
   * 默认皮肤模式，没有沉浸式风格。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  NONE_IMMERSIVE = 0,

  /**
   * 没有沉浸式风格
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  IMMERSIVE = 1,

  /**
   * 浅色沉浸式风格。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  LIGHT_IMMERSIVE = 2,

  /**
   * 深色沉浸式风格。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  DARK_IMMERSIVE = 3
}

/**
 * Defines the Web attribute functions.
 *
 * @extends CommonMethod<WebAttribute>
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines the Web attribute functions.
 *
 * @extends CommonMethod<WebAttribute>
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @since 10
 */
/**
 * Defines the Web attribute functions.
 *
 * @extends CommonMethod<WebAttribute>
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare class WebAttribute extends CommonMethod<WebAttribute> {
  /**
   * Sets whether the Web allows JavaScript scripts to execute.
   *
   * @param { boolean } javaScriptAccess - {@code true} means the Web can allows JavaScript scripts to execute; {@code false} otherwise.
   *    The default value is true.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Sets whether the Web allows JavaScript scripts to execute.
   *
   * @param { boolean } javaScriptAccess - {@code true} means the Web can allows JavaScript scripts to execute; {@code false} otherwise.
   *    The default value is true.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Sets whether the Web allows JavaScript scripts to execute.
   *
   * @param { boolean } javaScriptAccess - {@code true} means the Web can allows JavaScript scripts to execute; {@code false} otherwise.
   *    The default value is true.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  javaScriptAccess(javaScriptAccess: boolean): WebAttribute;

  /**
   * Sets whether enable local file system access in web.
   *
   * @param { boolean } fileAccess - {@code true} means enable local file system access in Web; {@code false} otherwise.
   *     The default value is true.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Sets whether enable local file system access in web.
   *
   * @param { boolean } fileAccess - {@code true} means enable local file system access in Web; {@code false} otherwise.
   *     The default value is true.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Sets whether to enable Access to the file system in the application.
   * This setting dose not affect the access to the files specified though $rawfile(filepath/filename).
   * <p><strong>API Note</strong>:<br>
   * fileAccess is disabled by default since API version 12.
   * When fileAccess is set to false, files in the read-only /data/storage/el1/bundle/entry/resources/resfile<br>
   * directory can still be accessed through the file protocol.
   * </p>
   *
   * @param { boolean } fileAccess - {@code true} means enable local file system access in Web; {@code false} otherwise.
   *     The default value is false.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Sets whether to enable access to the file system in the application.
   * This setting dose not affect the access to the files specified though $rawfile(filepath/filename).
   * <p><strong>API Note</strong>:<br>
   * fileAccess is disabled by default since API version 12.
   * When fileAccess is set to false, files in the read-only /data/storage/el1/bundle/entry/resources/resfile<br>
   * directory can still be accessed through the file protocol.
   * </p>
   *
   * @param { boolean } fileAccess - {@code true} means enable local file system access in Web; {@code false} otherwise.
   *     The default value is false.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  fileAccess(fileAccess: boolean): WebAttribute;

  /**
   * Sets whether to allow image resources to be loaded from the network.
   *
   * @param { boolean } onlineImageAccess - {@code true} means the Web can allow image resources to be loaded from the network;
   *    The default value is true.
   * {@code false} otherwise.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Sets whether to allow image resources to be loaded from the network.
   *
   * @param { boolean } onlineImageAccess - {@code true} means the Web can allow image resources to be loaded from the network;
   *    The default value is true.
   * {@code false} otherwise.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Sets whether to allow image resources to be loaded from the network.
   *    The default value is true.
   * @param { boolean } onlineImageAccess - {@code true} means the Web can allow image resources to be loaded from the network;
   * {@code false} otherwise.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onlineImageAccess(onlineImageAccess: boolean): WebAttribute;

  /**
   * Sets whether to enable the DOM Storage API permission.
   *
   * @param { boolean } domStorageAccess - {@code true} means enable the DOM Storage API permission in Web; {@code false} otherwise.
   *    The default value is false.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Sets whether to enable the DOM Storage API permission.
   *
   * @param { boolean } domStorageAccess - {@code true} means enable the DOM Storage API permission in Web; {@code false} otherwise.
   *    The default value is false.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Sets whether to enable the DOM Storage API permission.
   *    The default value is false.
   * @param { boolean } domStorageAccess - {@code true} means enable the DOM Storage API permission in Web; {@code false} otherwise.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  domStorageAccess(domStorageAccess: boolean): WebAttribute;

  /**
   * Sets whether the Web can automatically load image resources.
   *
   * @param { boolean } imageAccess - {@code true} means the Web can automatically load image resources; {@code false} otherwise.
   *    The default value is true.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Sets whether the Web can automatically load image resources.
   *
   * @param { boolean } imageAccess - {@code true} means the Web can automatically load image resources; {@code false} otherwise.
   *    The default value is true.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Sets whether the Web can automatically load image resources.
   *    The default value is true.
   * @param { boolean } imageAccess - {@code true} means the Web can automatically load image resources; {@code false} otherwise.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  imageAccess(imageAccess: boolean): WebAttribute;

  /**
   * Sets how to load HTTP and HTTPS content.
   *
   * @param { MixedMode } mixedMode - The mixed mode, which can be {@link MixedMode}.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Sets how to load HTTP and HTTPS content.
   *
   * @param { MixedMode } mixedMode - The mixed mode, which can be {@link MixedMode}.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the behavior when a secure origin attempts to load a resource from an insecure origin.
   * The default is MixedMode.None, meaning not allow a secure origin to load content from an insecure origin.
   *
   *
   * @param { MixedMode } mixedMode - The mixed mode, which can be {@link MixedMode}.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  mixedMode(mixedMode: MixedMode): WebAttribute;

  /**
   * 设置网页是否支持手势缩放。
   *
   * @param { boolean } zoomAccess {@code true} 表示网页支持手势缩放；{@code false} 表示不支持。
   *     默认值为 true。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  zoomAccess(zoomAccess: boolean): WebAttribute;

  /**
   * Sets whether to allow access to geographical locations.
   *
   * @param { boolean } geolocationAccess - Whether to enable geolocation access. {@code true} means the Web
   *     allows access to geographical locations; {@code false} means the
   *     Web disallows access to geographical locations. The default value is true.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  geolocationAccess(geolocationAccess: boolean): WebAttribute;

  /**
   * Injects the JavaScript object into window and invoke the function in window.
   *
   * @param { object } javaScriptProxy - The JavaScript object to be injected.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Injects the JavaScript object into window and invoke the function in window.
   *
   * @param { object } javaScriptProxy - The JavaScript object to be injected.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Injects the JavaScript object into window and invoke the function in window.
   *
   * @param { object } javaScriptProxy - The JavaScript object to be injected.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Registers the supplied ArkTs object in javaScriptProxy into this Web component.
   * The object is registered into all frames of the web page, including all frames, using the specified name in javaScriptProxy.
   * This allows the methods of the ArkTs object in javaScriptProxy to be accessed from JavaScript.
   *
   * <p><strong>API Note</strong>:
   * <strong>Performance Note</strong>:
   * <p>For details about how to arkWeb rendering framework adaptation solution,
   * see [ArkWeb Rendering Framework Adaptation]
   * {@link https://developer.huawei.com/consumer/en/doc/best-practices/bpta-arkweb_rendering_framework}
   * </p>
   *
   * @param { JavaScriptProxy } javaScriptProxy - The ArkTs object in javaScriptProxy will be registered into this Web component,
   * and the methods within the methodList of the injected ArkTs object declared in javaScriptProxy can be accessed by JavaScript.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Registers the supplied ArkTs object in javaScriptProxy into this Web component.
   * The object is registered into all frames of the web page, including all frames, using the specified name in javaScriptProxy.
   * This allows the methods of the ArkTs object in javaScriptProxy to be accessed from JavaScript.
   *
   * <p><strong>API Note</strong>:
   * <strong>Performance Note</strong>:
   * <p>For details about how to arkWeb rendering framework adaptation solution,
   * see [ArkWeb Rendering Framework Adaptation]
   * {@link https://developer.huawei.com/consumer/en/doc/best-practices/bpta-arkweb_rendering_framework}
   * </p>
   *
   * @param { JavaScriptProxy } javaScriptProxy - The ArkTs object in javaScriptProxy will be registered into this Web component,
   * and the methods within the methodList of the injected ArkTs object declared in javaScriptProxy can be accessed by JavaScript.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  javaScriptProxy(javaScriptProxy: JavaScriptProxy): WebAttribute;

  /**
   * 设置网页是否允许保存密码。
   *
   * @param { boolean } password - {@code true} 表示允许网页保存密码；{@code false} 表示不允许。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead ohos.web.WebAttribute#enableAutofill
   */
  password(password: boolean): WebAttribute;

  /**
   * Sets the mode of cache in Web.
   *
   * @param { CacheMode } cacheMode - The cache mode, which can be {@link CacheMode}.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Sets the mode of cache in Web.
   *
   * @param { CacheMode } cacheMode - The cache mode, which can be {@link CacheMode}.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the mode of cache in Web.
   *
   * @param { CacheMode } cacheMode - The cache mode, which can be {@link CacheMode}.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  cacheMode(cacheMode: CacheMode): WebAttribute;

  /**
   * 设置Web深色模式。当属性没有显式调用时，默认Web深色模式关闭。
   *
   * 当深色模式开启时，Web将启用媒体查询prefers-color-scheme中网页所定义的深色样式，若网页未定义深色样式，则保持原状。如需开启强制深色模式，建议配合
   * [forceDarkAccess]{@link WebAttribute.forceDarkAccess}使用。深色模式具体用法可参考[Web深色模式适配](docroot://web/web-set-dark-mode.md)。
   *
   * @param { WebDarkMode } mode - 设置Web的深色模式为关闭、开启或跟随系统。<br>传入null或undefined时为`WebDarkMode.Off`。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  darkMode(mode: WebDarkMode): WebAttribute;

  /**
   * 设置网页是否开启强制深色模式。该属性仅在[darkMode]{@link WebAttribute.darkMode}开启深色模式时生效。当属性没有显式调用时，默认网页不开启强制深色模式。
   *
   * @param { boolean } access - 设置网页是否开启强制深色模式。<br>true表示设置网页开启强制深色模式，false表示设置网页不开启强制深色模式。<br>传入null或undefined时为false。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  forceDarkAccess(access: boolean): WebAttribute;

  /**
   * Sets the media options.
   *
   * @param { WebMediaOptions } options The media options, which can be {@link WebMediaOptions}.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 10
   */
  /**
   * Sets the media options.
   *
   * @param { WebMediaOptions } options The media options, which can be {@link WebMediaOptions}.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  mediaOptions(options: WebMediaOptions): WebAttribute;

  /**
   * 设置网页是否保存表格数据。
   *
   * @param { boolean } tableData {@code true} 表示允许网页保存表格数据；{@code false} 表示不允许。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead ohos.web.WebAttribute#enableAutofill
   */
  tableData(tableData: boolean): WebAttribute;

  /**
   * 设置Web是否支持html中meta标签的viewport属性。该接口为空接口。
   *
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 10开始废弃，建议使用[metaViewport<sup>12+</sup>]{@link WebAttribute.metaViewport}替代。
   *
   * @param { boolean } wideViewModeAccess - 设置Web是否支持html中meta标签的viewport属性。<br/>true表示支持html中meta标签的viewport属性，false表示
   *     不支持html中meta标签的viewport属性。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead WebAttribute.metaViewport
   */
  wideViewModeAccess(wideViewModeAccess: boolean): WebAttribute;

  /**
   * 设置是否使用概览模式加载网页，即缩小内容以适应屏幕宽度。当属性没有显式调用时，默认允许使用概览模式加载网页。
   *
   * @param { boolean } overviewModeAccess - 设置是否使用概览模式加载网页。<br>true表示设置使用概览模式加载网页，false表示设置不使用概览模式加载网页。<br>传入undefined或
   *     null时为false。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  overviewModeAccess(overviewModeAccess: boolean): WebAttribute;

  /**
   * 设置网页的过度滚动模式
   *
   * @param { OverScrollMode } mode - 过度滚动模式，可参考 {@link OverScrollMode}。
   *     默认值为 OverScrollMode.NEVER。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  overScrollMode(mode: OverScrollMode): WebAttribute;

  /**
   * Sets the blur on for elements on webview when soft keyboard is hidden manually.
   *
   * @param { BlurOnKeyboardHideMode } mode - Default value is SILENT. Set BLUR to enable the blur on keyboard hide mode, which can be {@link BlurOnKeyboardHideMode}.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 14 dynamic
   */
  blurOnKeyboardHideMode(mode: BlurOnKeyboardHideMode): WebAttribute;

  /**
   * 设置页面的文本缩放百分比。
   *
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[textZoomRatio<sup>9+</sup>]{@link WebAttribute.textZoomRatio}代替。
   *
   * @param { number } textZoomAtio - 要设置的页面的文本缩放百分比。<br>取值范围为正整数。<br>默认值：100。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead WebAttribute.textZoomRatio
   */
  textZoomAtio(textZoomAtio: number): WebAttribute;

  /**
   * 设置页面的文本缩放百分比。当属性没有显式调用时，默认缩放百分比为100%。
   *
   * @param { number } textZoomRatio - 要设置的页面的文本缩放百分比。<br>取值为整数，范围为(0, 2147483647]。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  textZoomRatio(textZoomRatio: number): WebAttribute;

  /**
   * Sets whether the Web access the database.
   *
   * @param { boolean } databaseAccess {@code true} means the Web access the database; {@code false} otherwise.
   *    The default value is false.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Sets whether the Web access the database.
   *
   * @param { boolean } databaseAccess {@code true} means the Web access the database; {@code false} otherwise.
   *    The default value is false.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  databaseAccess(databaseAccess: boolean): WebAttribute;

  /**
   * 设置网页的初始缩放比例。
   *
   * @param { number } percent 网页初始缩放比例。
   *     取值范围：(0, 1000]。
   *     默认值：100。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  initialScale(percent: number): WebAttribute;

  /**
   * Sets the Web's user agent.
   *
   * @param { string } userAgent The Web's user agent.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead ohos.web.webview.webview.WebviewController#setCustomUserAgent
   */
  userAgent(userAgent: string): WebAttribute;

  /**
   * 设置meta标签的viewport属性是否可用。当属性没有显式调用时，默认支持meta标签的viewport属性。
   *
   * > **说明：**
   * >
   * > - 当前通过User-Agent中是否含有"Mobile"字段来判断是否开启前端HTML页面中meta标签的viewport属性。当User-Agent中不含有"Mobile"字段时，meta标签中viewport属性默认关闭
   * > ，此时可通过显性设置metaViewport属性为true来覆盖关闭状态。
   *
   * @param { boolean } enabled - 是否支持meta标签的viewport属性。<br>true表示支持meta标签的viewport属性，将解析viewport属性，并根据viewport属性布局。<br>
   *     false表示不支持meta标签的viewport属性，将不解析viewport属性，进行默认布局。<br>传入null或undefined时为true。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  metaViewport(enabled: boolean): WebAttribute;

  /**
   * Triggered at the end of web page loading.
   *
   * @param { function } callback The triggered function at the end of web page loading.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Triggered at the end of web page loading.
   *
   * @param { function } callback The triggered function at the end of web page loading.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Triggered at the end of web page loading.
   *
   * @param { function } callback The triggered function at the end of web page loading.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Triggered at the end of web page loading.
   *
   * @param { Callback<OnPageEndEvent> } callback The triggered function at the end of web page loading.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onPageEnd(callback: Callback<OnPageEndEvent>): WebAttribute;

  /**
   * 在页面加载开始时触发。此方法每次主框架加载时调用一次。
   * 嵌入框架的更改，例如点击目标为 iframe 的链接和片段导航（导航到 #fragment_id）
   * 不会触发此回调。
   * 与 onPageBegin 不同，onLoadStarted 仅在页面完全加载之前自动重定向时触发一次。
   * OnPageBegin 每次导航时都会触发。
   *
   * @param { Callback<OnLoadStartedEvent> } callback 网页加载开始时触发的函数。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  onLoadStarted(callback: Callback<OnLoadStartedEvent>): WebAttribute;

  /**
   * 通知宿主应用程序页面已加载完成。此方法仅为主框架调用。
   * 与 onPageEnd 不同，fragment导航也会触发 onLoadFinished
   *
   * @param { Callback<OnLoadFinishedEvent> } callback 网页加载结束时触发的函数。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  onLoadFinished(callback: Callback<OnLoadFinishedEvent>): WebAttribute;

  /**
   * Triggered at the begin of web page loading.
   *
   * @param { function } callback The triggered function at the begin of web page loading.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Triggered at the begin of web page loading.
   *
   * @param { function } callback The triggered function at the begin of web page loading.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Triggered at the begin of web page loading.
   *
   * @param { function } callback The triggered function at the begin of web page loading.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Called when the web page starts to be loaded.
   * This API is called only for the main frame, and not for the iframe or frameset content.
   *
   * @param { Callback<OnPageBeginEvent> } callback The triggered function at the begin of web page loading.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onPageBegin(callback: Callback<OnPageBeginEvent>): WebAttribute;

  /**
   * Triggered when the page loading progress changes.
   *
   * @param { function } callback The triggered function when the page loading progress changes.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Triggered when the page loading progress changes.
   *
   * @param { function } callback The triggered function when the page loading progress changes.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Triggered when the page loading progress changes.
   *
   * @param { Callback<OnProgressChangeEvent> } callback The triggered function when the page loading progress changes.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onProgressChange(callback: Callback<OnProgressChangeEvent>): WebAttribute;

  /**
   * Triggered when the title of the main application document changes.
   *
   * @param { function } callback The triggered function when the title of the main application document changes.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Triggered when the title of the main application document changes.
   *
   * @param { function } callback The triggered function when the title of the main application document changes.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Notifies the application that the title has changed..
   * If the page being loaded does not specify a title via the <title> element,
   * ArkWeb will generate a title baseed on the URL and return it to the application.
   *
   * @param { Callback<OnTitleReceiveEvent> } callback The triggered function when the title of the main application document changes.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onTitleReceive(callback: Callback<OnTitleReceiveEvent>): WebAttribute;

  /**
   * Triggered when requesting to hide the geolocation.
   *
   * @param { function } callback Callback invoked when the request for obtaining geolocation information has been
   *     canceled.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onGeolocationHide(callback: () => void): WebAttribute;

  /**
   * Triggered when requesting to show the geolocation permission.
   *
   * @param { function } callback The triggered function when requesting to show the geolocation permission.
   *     [since 8 - 11]
   * @param { Callback<OnGeolocationShowEvent> } callback - Callback invoked when a request to obtain the geolocation
   *     information is received. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onGeolocationShow(callback: Callback<OnGeolocationShowEvent>): WebAttribute;

  /**
   * Web 获取焦点时触发。
   *
   * @param { function } callback Web 获取焦点时触发的函数。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onRequestSelected(callback: () => void): WebAttribute;

  /**
   * Web 想要显示 JavaScript alert() 弹窗时触发。
   *
   * @param { function } callback 网页中调用 alert() 显示警告弹窗时使用的回调函数。[since 8 - 11]
   * @param { Callback<OnAlertEvent, boolean> } callback 网页中调用 alert() 显示警告弹窗时使用的回调。
   *     {@code true} 表示应用可调用自定义弹窗能力（带确认和取消按钮）。
   *     开发者需根据用户选择，使用 JsResult 接口通知 Web 组件是否离开当前页面。
   *     {@code false} 表示弹窗处理结果视为取消。[since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onAlert(callback: Callback<OnAlertEvent, boolean>): WebAttribute;

  /**
   * Triggered when the Web wants to confirm navigation from JavaScript onbeforeunload.
   *
   * @param { function } callback The triggered function when the web page wants to confirm navigation from JavaScript onbeforeunload.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Triggered when the Web wants to confirm navigation from JavaScript onbeforeunload.
   *
   * @param { function } callback The triggered function when the web page wants to confirm navigation from JavaScript onbeforeunload.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Triggered when the Web wants to confirm navigation from JavaScript onbeforeunload.
   *
   * @param { Callback<OnBeforeUnloadEvent, boolean> } callback The triggered function when the web page wants to confirm navigation from JavaScript onbeforeunload.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Triggered when the Web wants to confirm navigation from JavaScript onbeforeunload.
   *
   * @param { Callback<OnBeforeUnloadEvent, boolean> } callback The triggered function when the web page wants to confirm navigation from JavaScript onbeforeunload.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onBeforeUnload(callback: Callback<OnBeforeUnloadEvent, boolean>): WebAttribute;

  /**
   * 网页需要显示 JavaScript confirm() 确认弹窗时触发。
   *
   * @param { function } callback 网页调用 confirm() 时触发的回调函数。[since 8 - 11]
   * @param { Callback<OnConfirmEvent, boolean> } callback 网页调用 confirm() 时触发的回调。
   *     {@code true} 表示应用可调用自定义弹窗能力（包含确认和取消），
   *     需调用 JsResult 接口根据用户的确认/取消操作通知 Web 组件是否离开当前页面。
   *     {@code false} 表示函数内绘制的自定义弹窗无效。[since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onConfirm(callback: Callback<OnConfirmEvent, boolean>): WebAttribute;

  /**
   * 网页需要显示 JavaScript prompt() 输入弹窗时触发。
   *
   * @param { function } callback 网页调用 prompt() 时使用的回调函数。[since 9 - 11]
   * @param { Callback<OnPromptEvent, boolean> } callback 网页调用 prompt() 时使用的回调。
   *     {@code true} 表示应用可调用自定义弹窗能力（包含确认、取消和输入框），
   *     需调用 JsResult 接口根据用户的确认/取消操作通知 Web 组件最终处理结果。
   *     {@code false} 表示弹窗处理结果视为取消。[since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onPrompt(callback: Callback<OnPromptEvent, boolean>): WebAttribute;

  /**
   * Triggered when the web page receives a JavaScript console message.
   *
   * @param { function } callback The triggered function when the web page receives a JavaScript console message.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Triggered when the web page receives a JavaScript console message.
   *
   * @param { function } callback The triggered function when the web page receives a JavaScript console message.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Triggered when the web page receives a JavaScript console message.
   *
   * @param {  Callback<OnConsoleEvent, boolean> } callback The triggered function when the web page receives a JavaScript console message.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onConsole(callback: Callback<OnConsoleEvent, boolean>): WebAttribute;

  /**
   * Triggered when the web page receives a web resource loading error.
   *
   * @param { function } callback The triggered function when the web page receives a web resource loading error.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Triggered when the web page receives a web resource loading error.
   *
   * @param { function } callback The triggered function when the web page receives a web resource loading error.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Triggered when the web page receives a web resource loading error.
   *
   * @param { function } callback The triggered function when the web page receives a web resource loading error.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Triggered when the web page receives a web resource loading error.
   *
   * @param { Callback<OnErrorReceiveEvent> } callback The triggered function when the web page receives a web resource loading error.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onErrorReceive(callback: Callback<OnErrorReceiveEvent>): WebAttribute;

  /**
   * Triggered when the web page receives a web resource loading HTTP error.
   *
   * @param { function } callback The triggered function when the web page receives a web resource loading HTTP error.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Triggered when the web page receives a web resource loading HTTP error.
   *
   * @param { function } callback The triggered function when the web page receives a web resource loading HTTP error.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Triggered when the web page receives a web resource loading HTTP error.
   *
   * @param { Callback<OnHttpErrorReceiveEvent> } callback The triggered function when the web page receives a web resource loading HTTP error.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onHttpErrorReceive(callback: Callback<OnHttpErrorReceiveEvent>): WebAttribute;

  /**
   * Triggered when starting to download.
   *
   * @param { function } callback The triggered function when starting to download.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Triggered when starting to download.
   *
   * @param { function } callback The triggered function when starting to download.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Triggered when starting to download.
   *
   * @param { Callback<OnDownloadStartEvent> } callback The triggered function when starting to download.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDownloadStart(callback: Callback<OnDownloadStartEvent>): WebAttribute;

  /**
   * Triggered when the Web page refreshes accessed history.
   *
   * @param { function } callback The triggered callback when the Web page refreshes accessed history.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8
   */
  /**
   * Triggered when the Web page refreshes accessed history.
   *
   * @param { function } callback The triggered callback when the Web page refreshes accessed history.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Triggered when the Web page refreshes accessed history.
   *
   * @param { Callback<OnRefreshAccessedHistoryEvent> } callback The triggered callback when the Web page refreshes accessed history.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Triggered when the Web page refreshes accessed history.
   *
   * @param { Callback<OnRefreshAccessedHistoryEvent> } callback The triggered callback when the Web page refreshes accessed history.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onRefreshAccessedHistory(callback: Callback<OnRefreshAccessedHistoryEvent>): WebAttribute;

  /**
   * Triggered when the URL loading is intercepted.
   *
   * @param { function } callback The triggered callback when the URL loading is intercepted.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead ohos.web.WebAttribute#onLoadIntercept
   */
  onUrlLoadIntercept(callback: (event?: { data: string | WebResourceRequest }) => boolean): WebAttribute;

  /**
   * Triggered when the Web page receives an ssl Error.
   *
   * @param { function } callback The triggered callback when the Web page receives an ssl Error.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.WebAttribute#onSslErrorEventReceive
   */
  onSslErrorReceive(callback: (event?: { handler: Function, error: object }) => void): WebAttribute;

  /**
   * Triggered when the render process exits.
   *
   * @param { function } callback The triggered when the render process exits.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Triggered when the render process exits.
   *
   * @param { function } callback The triggered when the render process exits.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Triggered when the render process exits.
   *
   * @param { Callback<OnRenderExitedEvent> } callback The triggered when the render process exits.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onRenderExited(callback: Callback<OnRenderExitedEvent>): WebAttribute;

  /**
   * 文件选择器显示时触发。
   *
   * @param { function } callback 文件选择器显示时触发的回调函数。[since 9 - 11]
   * @param { Callback<OnShowFileSelectorEvent, boolean> } callback 文件选择器显示时触发的回调。
   *     {@code true} 表示用户可调用系统提供的弹窗能力。
   *     {@code false} 表示函数内绘制的自定义弹窗无效。[since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onShowFileSelector(callback: Callback<OnShowFileSelectorEvent, boolean>): WebAttribute;

  /**
   * Triggered when the render process exits.
   *
   * @param { function } callback The triggered when the render process exits.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.WebAttribute#onRenderExited
   */
  onRenderExited(callback: (event?: { detail: object }) => boolean): WebAttribute;

  /**
   * Triggered when the file selector shows.
   *
   * @param { function } callback The triggered when the file selector shows.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.WebAttribute#onShowFileSelector
   */
  onFileSelectorShow(callback: (event?: { callback: Function, fileSelector: object }) => void): WebAttribute;

  /**
   * Triggered when the url loading.
   *
   * @param { function } callback The triggered when the url loading.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Triggered when the url loading.
   *
   * @param { function } callback The triggered when the url loading.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Triggered when the url loading.
   *
   * @param { Callback<OnResourceLoadEvent> } callback The triggered when the url loading.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onResourceLoad(callback: Callback<OnResourceLoadEvent>): WebAttribute;

  /**
   * Triggered when the web component exit the full screen mode.
   *
   * @param { function } callback The triggered function when the web component exit the full screen mode.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Triggered when the web component exit the full screen mode.
   *
   * @param { function } callback The triggered function when the web component exit the full screen mode.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Triggered when the web component exit the full screen mode.
   *
   * @param { function } callback The triggered function when the web component exit the full screen mode.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onFullScreenExit(callback: () => void): WebAttribute;

  /**
   * Triggered when the web component enter the full screen mode.
   *
   * @param { function } callback The triggered function when the web component enter the full screen mode.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Triggered when the web component enter the full screen mode.
   *
   * @param { function } callback The triggered function when the web component enter the full screen mode.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Triggered when the web component enter the full screen mode.
   *
   * @param { OnFullScreenEnterCallback } callback - The triggered function when the web component enter the full screen mode.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Triggered when the web component enter the full screen mode.
   *
   * @param { OnFullScreenEnterCallback } callback - The triggered function when the web component enter the full screen mode.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onFullScreenEnter(callback: OnFullScreenEnterCallback): WebAttribute;

  /**
   * WebView 缩放比例变化时触发。
   *
   * @param { function } callback 缩放比例变化时触发的回调。[9 - 11 版本起支持]
   * @param { Callback<OnScaleChangeEvent> } callback 缩放比例变化时触发的回调。[12 版本起支持]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onScaleChange(callback: Callback<OnScaleChangeEvent>): WebAttribute;

  /**
   * Triggered when the browser needs credentials from the user.
   *
   * @param { function } callback The triggered when the browser needs credentials from the user.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Triggered when the browser needs credentials from the user.
   *
   * @param { function } callback The triggered when the browser needs credentials from the user.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Triggered when the browser needs credentials from the user.
   *
   * @param { Callback<OnHttpAuthRequestEvent, boolean> } callback The triggered when the browser needs credentials from the user.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onHttpAuthRequest(callback: Callback<OnHttpAuthRequestEvent, boolean>): WebAttribute;

  /**
   * Triggered when the resources loading is intercepted.
   *
   * @param { function } callback The triggered callback when the resources loading is intercepted.
   * @returns { WebAttribute } If the response value is null, the Web will continue to load the resources.
   *     Otherwise, the response value will be used
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Triggered when the resources loading is intercepted.
   *
   * @param { function } callback The triggered callback when the resources loading is intercepted.
   * @returns { WebAttribute } If the response value is null, the Web will continue to load the resources.
   *     Otherwise, the response value will be used
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Triggered when the resources loading is intercepted.
   *
   * @param { Callback<OnInterceptRequestEvent, WebResourceResponse> } callback The triggered
   *     callback when the resources loading is intercepted.
   * @returns { WebAttribute } If the response value is null, the Web will continue to load the resources.
   *     Otherwise, the response value will be used
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Triggered when the resources loading is intercepted.
   *
   * @param { Callback<OnInterceptRequestEvent, WebResourceResponse> } callback The triggered
   *     callback when the resources loading is intercepted.
   * @returns { WebAttribute } If the response value is null, the Web will continue to load the resources.
   *     Otherwise, the response value will be used
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  onInterceptRequest(callback: Callback<OnInterceptRequestEvent, WebResourceResponse>): WebAttribute;

  /**
   * Triggered when the host application that web content from the specified origin is attempting to access the resources.
   *
   * @param { function } callback The triggered callback when the host application that web content from the specified origin is
   *     attempting to access the resources.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Triggered when the host application that web content from the specified origin is attempting to access the resources.
   *
   * @param { function } callback The triggered callback when the host application that web content from the specified origin is
   *     attempting to access the resources.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Triggered when the host application that web content from the specified origin is attempting to access the resources.
   *
   * @param { Callback<OnPermissionRequestEvent> } callback The triggered callback when the host application that web content from the specified origin is
   *     attempting to access the resources.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onPermissionRequest(callback: Callback<OnPermissionRequestEvent>): WebAttribute;

  /**
   * Triggered when the host application that web content from the specified origin is requesting to capture screen.
   * @param { function } callback The triggered callback when the host application that web content from the specified origin is
   *     requesting to capture screen.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 10
   */
  /**
   * Triggered when the host application that web content from the specified origin is requesting to capture screen.
   * @param { function } callback The triggered callback when the host application that web content from the specified origin is
   *     requesting to capture screen.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Triggered when the host application that web content from the specified origin is requesting to capture screen.
   * @param { Callback<OnScreenCaptureRequestEvent> } callback The triggered callback when the host application that web content from the specified origin is
   *     requesting to capture screen.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onScreenCaptureRequest(callback: Callback<OnScreenCaptureRequestEvent>): WebAttribute;

  /**
   * 调用时触发，允许自定义显示上下文菜单。
   *
   * @param { function } callback 调用以允许自定义显示上下文菜单时触发的回调。[9 - 11 版本起支持]
   * @param { Callback<OnContextMenuShowEvent, boolean> } callback 调用以允许自定义显示上下文菜单时触发的回调。
   *     {@code true} 表示触发自定义菜单。
   *     {@code false} 表示自定义菜单无效。[12 版本起支持]
   * @returns { WebAttribute } 自定义显示返回 true，否则默认显示返回 false。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onContextMenuShow(callback: Callback<OnContextMenuShowEvent, boolean>): WebAttribute;

  /**
   * 调用时触发，允许自定义隐藏上下文菜单。
   *
   * @param { OnContextMenuHideCallback } callback 调用以允许自定义隐藏上下文菜单时触发的函数。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  onContextMenuHide(callback: OnContextMenuHideCallback): WebAttribute;

  /**
   * Set whether media playback needs to be triggered by user gestures.
   *
   * @param { boolean } access True if it needs to be triggered manually by the user else false.
   *    The default value is true.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Set whether media playback needs to be triggered by user gestures.
   *
   * @param { boolean } access True if it needs to be triggered manually by the user else false.
   *    The default value is true.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  mediaPlayGestureAccess(access: boolean): WebAttribute;

  /**
   * Notify search result to host application through onSearchResultReceive.
   *
   * @param { function } callback Function Triggered when the host application call searchAllAsync.
   * or searchNext api on WebController and the request is valid.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Notify search result to host application through onSearchResultReceive.
   *
   * @param { function } callback Function Triggered when the host application call searchAllAsync.
   * or searchNext api on WebController and the request is valid.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Notify search result to host application through onSearchResultReceive.
   *
   * @param { Callback<OnSearchResultReceiveEvent> } callback Function Triggered when the host application call searchAllAsync.
   * or searchNext api on WebController and the request is valid.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onSearchResultReceive(callback: Callback<OnSearchResultReceiveEvent>): WebAttribute;

  /**
   * 滚动条滑动到指定位置时触发。
   *
   * @param { function } callback 网页滚动到指定位置时触发的函数。[since 9 - 11]
   * @param { Callback<OnScrollEvent> } callback 网页滚动到指定位置时触发的函数。[since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onScroll(callback: Callback<OnScrollEvent>): WebAttribute;

  /**
   * Triggered when the Web page receives an ssl Error.
   *
   * @param { function } callback The triggered callback when the Web page receives an ssl Error.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Triggered when the Web page receives an ssl Error.
   *
   * @param { function } callback The triggered callback when the Web page receives an ssl Error.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Triggered when the Web page receives an ssl Error.
   *
   * @param { Callback<OnSslErrorEventReceiveEvent> } callback The triggered callback
   *     when the Web page receives an ssl Error.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Called to notify users when an SSL error occurs with a request for the main frame.
   * To include errors with requests for subframes, use the OnSslErrorEvent API.
   *
   * @param { Callback<OnSslErrorEventReceiveEvent> } callback The triggered callback
   *     when the Web page receives an ssl Error.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  onSslErrorEventReceive(callback: Callback<OnSslErrorEventReceiveEvent>): WebAttribute;

  /**
   * Triggered when the Web page receives an ssl Error.
   *
   * @param { OnSslErrorEventCallback } callback The triggered callback when the Web page receives an ssl Error.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Called to notify users when an SSL error occurs during the loading of resources (for the main frame and subframes).
   * To handle SSL errors for requests for the main frame, use the isMainFrame field to distinguish.
   *
   * @param { OnSslErrorEventCallback } callback The triggered callback when the Web page receives an ssl Error.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  onSslErrorEvent(callback: OnSslErrorEventCallback): WebAttribute;

  /**
   * Triggered when the Web page needs ssl client certificate from the user.
   *
   * @param { function } callback The triggered callback when needs ssl client certificate from the user.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Triggered when the Web page needs ssl client certificate from the user.
   *
   * @param { function } callback The triggered callback when needs ssl client certificate from the user.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Triggered when the Web page needs ssl client certificate from the user.
   *
   * @param { Callback<OnClientAuthenticationEvent> } callback The triggered callback when needs ssl client certificate from the user.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onClientAuthenticationRequest(callback: Callback<OnClientAuthenticationEvent>): WebAttribute;

  /**
   * Triggered when the Web page needs verify pin from the user.
   *
   * @param { OnVerifyPinCallback } callback - The triggered callback when needs verify pin from the user.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  onVerifyPin(callback: OnVerifyPinCallback): WebAttribute;

  /**
   * Triggered when web page requires the user to create a window.
   *
   * @param { function } callback The triggered callback when web page requires the user to create a window.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Triggered when web page requires the user to create a window.
   *
   * @param { function } callback The triggered callback when web page requires the user to create a window.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Triggered when web page requires the user to create a window.
   *
   * @param {  Callback<OnWindowNewEvent> } callback The triggered callback when web page requires the user to create a window.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onWindowNew(callback: Callback<OnWindowNewEvent>): WebAttribute;

  /**
   * Triggered when web page requires to create a new window.
   * If the {@link setWebController} interface is not called, the render process will be blocked.
   * If no new window is created, it is set to null when calling the {@link setWebController} interface,
   * informing the Web that no new window is created.
   * New windows must not be placed to directly cover the original Web component. Additionally,
   * their URLs?specifically the content shown in the address bar?should follow the same display
   * format as the main page, ensuring clarity for users and avoiding confusion. In cases where
   * reliable visual management of URLs is not feasible, restricting the creation of new windows
   * should be considered. It is also important to note that the origin of new window requests
   * cannot be tracked with certainty; such requests may even be triggered by third-party iframes.
   * For this reason, applications must implement default defensive measures like sandbox isolation
   * and permission controls to safeguard security.
   * @param {  Callback<OnWindowNewExtEvent> } callback The triggered callback when web page requires the user
   *     to create a window.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 23 dynamic
   */
  onWindowNewExt(callback: Callback<OnWindowNewExtEvent>): WebAttribute;

  /**
   * Triggered when web page requires the user to close a window.
   *
   * @param { function } callback The triggered callback when web page requires the user to close a window.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Triggered when web page requires the user to close a window.
   *
   * @param { function } callback The triggered callback when web page requires the user to close a window.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  onWindowExit(callback: () => void): WebAttribute;

  /**
   * Set whether multiple windows are supported.
   *
   * @param { boolean } multiWindow True if it needs to be triggered manually by the user else false.
   *    The default value is false.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Set whether multiple windows are supported.
   *
   * @param { boolean } multiWindow True if it needs to be triggered manually by the user else false.
   *    The default value is false.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  multiWindowAccess(multiWindow: boolean): WebAttribute;

  /**
   * Key events notify the application before the WebView consumes them.
   *
   * @param { function } callback Key event info.
   * @returns { WebAttribute } True if the application consumes key events else false.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Key events notify the application before the WebView consumes them.
   *
   * @param { function } callback Key event info.
   * @returns { WebAttribute } True if the application consumes key events else false.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  onInterceptKeyEvent(callback: (event: KeyEvent) => boolean): WebAttribute;

  /**
   * 设置网页的standard font字体库，用于渲染html前端未指定字体样式的元素。
   *
   * 当属性没有显式调用时，默认网页的standard font字体库为sans-serif。
   *
   * @param { string } family - 设置网页的standard font字体库。<br>传入null或undefined时为sans-serif。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  webStandardFont(family: string): WebAttribute;

  /**
   * 设置网页的serif font字体库，用于渲染html前端使用serif字体的元素。
   *
   * 当属性没有显式调用时，默认网页的serif font字体库为serif。
   *
   * @param { string } family - 设置网页的serif font字体库。<br>传入null或undefined时为serif。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  webSerifFont(family: string): WebAttribute;

  /**
   * 设置网页的sans-serif font字体库，用于渲染html前端使用sans-serif字体的元素。
   *
   * 当属性没有显式调用时，默认网页的sans-serif font字体库为sans-serif。
   *
   * @param { string } family - 设置网页的sans-serif font字体库。<br>传入null或undefined时为sans-serif。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  webSansSerifFont(family: string): WebAttribute;

  /**
   * 设置网页的fixed font字体库，用于渲染html前端使用monospace字体的元素。
   *
   * 当属性没有显式调用时，默认网页的fixed font字体库为monospace。
   *
   * @param { string } family - 设置网页的fixed font字体库。<br>传入null或undefined时为monospace。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  webFixedFont(family: string): WebAttribute;

  /**
   * 设置网页的fantasy font字体库，用于渲染html前端使用fantasy字体的元素。
   *
   * 当属性没有显式调用时，默认网页的fantasy font字体库为fantasy。
   *
   * @param { string } family - 设置网页的fantasy font字体库。<br>传入null或undefined时为fantasy。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  webFantasyFont(family: string): WebAttribute;

  /**
   * 设置网页的cursive font字体库，用于渲染html前端使用cursive字体的元素。
   *
   * 当属性没有显式调用时，默认网页的cursive font字体库为cursive。
   *
   * @param { string } family - 设置网页的cursive font字体库。<br>传入null或undefined时为cursive。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  webCursiveFont(family: string): WebAttribute;

  /**
   * 设置网页的默认等宽字体大小。对于html前端使用monospace字体且未指定font-size样式的元素，将按此值渲染字体大小。
   *
   * 当属性没有显式调用时，默认等宽字体大小为13。
   *
   * @param { number } size Font size.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Sets the default font size for the web page.
   *
   * @param { number } size - 设置网页的默认等宽字体大小，单位px。<br>输入值的范围为[-2^31, 2^31-1]，实际渲染时超过72px的值按照72px进行渲染，低于1px的值按照1px进行渲染。<br
   *     ><br>传入null或undefined时为13。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  defaultFixedFontSize(size: number): WebAttribute;

  /**
   * 设置网页的默认字体大小。对于html前端使用非monospace字体且未指定font-size样式的元素，将按此值渲染字体大小。
   *
   * 当属性没有显式调用时，网页的默认字体大小为16。
   *
   * @param { number } size Font size.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Sets the default font size for the web page.
   *
   * @param { number } size - 设置网页的默认字体大小，单位px。<br>输入值的范围为[-2^31, 2^31-1]，实际渲染时超过72px的值按照72px进行渲染，低于1px的值按照1px进行渲染。<br>传
   *     入null或undefined时为16。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  defaultFontSize(size: number): WebAttribute;

  /**
   * 设置网页字体大小最小值。对于html前端元素，若元素字体大小低于该接口设置值，将采用接口设置值渲染字体大小。
   *
   * 当属性没有显式调用时，默认网页字体大小最小值为8。
   *
   * @param { number } size Font size.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Sets the minimum font size for the web page.
   *
   * @param { number } size - 设置网页字体大小最小值，单位px。<br>输入值的范围为[-2^31, 2^31-1]，实际渲染时超过72px的值按照72px进行渲染，低于1px的值按照1px进行渲染。<br>传
   *     入null或undefined时为8。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  minFontSize(size: number): WebAttribute;

  /**
   * 设置网页逻辑字体大小最小值。
   *
   * 对于html前端未指定font-size样式的元素：
   *
   * 1. 若元素字体大小低于该接口设置值，将采用接口设置值渲染字体大小。
   * 2. 若minLogicalFontSize和minFontSize同时设置时，对于未指定font-size样式元素，将采用两者中的较大值。
   *
   * 当属性没有显式调用时，默认网页逻辑字体大小最小值为8。
   *
   * @param { number } size Font size.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Sets the minimum logical font size for the web page.
   *
   * @param { number } size - 设置网页逻辑字体大小最小值，单位px。<br>输入值的范围为[-2^31, 2^31-1]，实际渲染时超过72px的值按照72px进行渲染，低于1px的值按照1px进行渲染。<br
   *     >传入null或undefined时为18。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  minLogicalFontSize(size: number): WebAttribute;

  /**
   * 设置网页的默认字符编码。当属性没有显式调用时，网页的默认字符编码为"UTF-8"。
   *
   * @param { string } textEncodingFormat - 默认字符编码。<br>传入null或undefined时为"UTF-8"。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  defaultTextEncodingFormat(textEncodingFormat: string): WebAttribute;

  /**
   * 是否强制显示滚动条。
   *
   * @param { boolean } enabled {@code true} 表示显示；{@code false} 表示不显示。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 14 dynamic
   */
  forceDisplayScrollBar(enabled: boolean): WebAttribute;

  /**
   * Whether web component can load resource from network.
   *
   * @param { boolean } block {@code true} means it can't load resource from network; {@code false} otherwise.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Whether web component can load resource from network.
   *
   * @param { boolean } block {@code true} means it can't load resource from network; {@code false} otherwise.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Whether web component can load resource from network.
   *
   * @param { boolean } block {@code true} means it can't load resource from network; {@code false} otherwise.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  blockNetwork(block: boolean): WebAttribute;

  /**
   * 设置是否绘制水平滚动条。
   *
   * @param { boolean } horizontalScrollBar 若需要绘制水平滚动条则为 true。
   *     默认值为 true。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  horizontalScrollBarAccess(horizontalScrollBar: boolean): WebAttribute;

  /**
   * 设置是否绘制垂直滚动条。
   *
   * @param { boolean } verticalScrollBar 若需要绘制垂直滚动条则为 true。
   *     默认值为 true。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  verticalScrollBarAccess(verticalScrollBar: boolean): WebAttribute;

  /**
   * Triggered when the application receive the url of an apple-touch-icon.
   *
   * @param { function } callback The triggered callback when the application receive an new url of an
   * apple-touch-icon.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Triggered when the application receive the url of an apple-touch-icon.
   *
   * @param { function } callback The triggered callback when the application receive an new url of an
   * apple-touch-icon.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Triggered when the application receive the url of an apple-touch-icon.
   *
   * @param { Callback<OnTouchIconUrlReceivedEvent> } callback The triggered callback when the application receive an new url of an
   * apple-touch-icon.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onTouchIconUrlReceived(callback: Callback<OnTouchIconUrlReceivedEvent>): WebAttribute;

  /**
   * Triggered when the application receive a new favicon for the current web page.
   *
   * @param { function } callback The triggered callback when the application receive a new favicon for the
   * current web page.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Triggered when the application receive a new favicon for the current web page.
   *
   * @param { function } callback The triggered callback when the application receive a new favicon for the
   * current web page.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Triggered when the application receive a new favicon for the current web page.
   *
   * @param { Callback<OnFaviconReceivedEvent> } callback The triggered callback when the application receive a new favicon for the
   * current web page.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onFaviconReceived(callback: Callback<OnFaviconReceivedEvent>): WebAttribute;

  /**
   * Triggered when previous page will no longer be drawn and next page begin to draw.
   *
   * @param { function } callback The triggered callback when previous page will no longer be drawn and next
   * page begin to draw.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Triggered when previous page will no longer be drawn and next page begin to draw.
   *
   * @param { function } callback The triggered callback when previous page will no longer be drawn and next
   * page begin to draw.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Triggered when previous page will no longer be drawn and next page begin to draw.
   *
   * @param {  Callback<OnPageVisibleEvent> } callback The triggered callback when previous page will no longer be drawn and next
   * page begin to draw.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onPageVisible(callback: Callback<OnPageVisibleEvent>): WebAttribute;

  /**
   * Triggered when the form could be resubmitted.
   *
   * @param { function } callback The triggered callback to decision whether resend form data or not.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Triggered when the form could be resubmitted.
   *
   * @param { function } callback The triggered callback to decision whether resend form data or not.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Triggered when the form could be resubmitted.
   *
   * @param { Callback<OnDataResubmittedEvent> } callback The triggered callback to decision whether resend form data or not.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onDataResubmitted(callback: Callback<OnDataResubmittedEvent>): WebAttribute;

  /**
   * 设置网页是否开启捏合流畅模式。该属性没有显式调用时，默认不开启捏合流畅模式。
   *
   * @param { boolean } isEnabled - 网页是否开启捏合流畅模式。<br>true表示设置网页开启捏合流畅模式，false表示设置网页不开启捏合流畅模式。<br>传入undefined或null时为false
   *     。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  pinchSmooth(isEnabled: boolean): WebAttribute;

  /**
   * Whether the window can be open automatically through JavaScript.
   *
   * @param { boolean } flag If it is true, the window can be opened automatically through JavaScript.
   * If it is false and user behavior, the window can be opened automatically through JavaScript.
   * Otherwise, the window cannot be opened.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 10
   */
  /**
   * Whether the window can be open automatically through JavaScript.
   *
   * @param { boolean } flag If it is true, the window can be opened automatically through JavaScript.
   * If it is false and user behavior, the window can be opened automatically through JavaScript.
   * Otherwise, the window cannot be opened.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  allowWindowOpenMethod(flag : boolean): WebAttribute;

  /**
   * Triggered when the playing state of audio on web page changed.
   *
   * @param { function } callback The playing state of audio on web page.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 10
   */
  /**
   * Triggered when the playing state of audio on web page changed.
   *
   * @param { function } callback The playing state of audio on web page.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Triggered when the playing state of audio on web page changed.
   *
   * @param { Callback<OnAudioStateChangedEvent> } callback The playing state of audio on web page.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onAudioStateChanged(callback: Callback<OnAudioStateChangedEvent>): WebAttribute;

  /**
   * 设置网页首次内容绘制回调函数。
   *
   * @param { function } callback - Callback invoked when the first content paint occurs on the web page. [since 10 - 11]
   * @param { Callback<OnFirstContentfulPaintEvent> } callback - 网页首次内容绘制回调函数。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onFirstContentfulPaint(callback: Callback<OnFirstContentfulPaintEvent>): WebAttribute;

  /**
   * 设置网页绘制页面主要内容回调函数。
   *
   * @param { OnFirstMeaningfulPaintCallback } callback - 网页绘制页面主要内容度量信息的回调。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onFirstMeaningfulPaint(callback: OnFirstMeaningfulPaintCallback): WebAttribute;

  /**
   * 设置网页绘制页面最大内容回调函数。
   *
   * @param { OnLargestContentfulPaintCallback } callback - 网页绘制页面最大内容度量信息的回调。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onLargestContentfulPaint(callback: OnLargestContentfulPaintCallback): WebAttribute;

  /**
   * Triggered when the resources loading is intercepted.
   *
   * @param { function } callback The triggered callback when the resources loading is intercepted.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 10
   */
  /**
   * Triggered when the resources loading is intercepted.
   *
   * @param { function } callback The triggered callback when the resources loading is intercepted.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Triggered when the resources loading is intercepted.
   *
   * @param { Callback<OnLoadInterceptEvent, boolean> } callback The triggered callback when the resources loading is intercepted.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onLoadIntercept(callback: Callback<OnLoadInterceptEvent, boolean>): WebAttribute;

  /**
   * Triggered when The controller is bound to the web component, this controller must be a WebviewController.
   * This callback can not use the interface about manipulating web pages.
   * @param { function } callback The triggered callback when web controller initialization success.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 10
   */
  /**
   * Triggered when The controller is bound to the web component, this controller must be a WebviewController.
   * This callback can not use the interface about manipulating web pages.
   * @param { function } callback The triggered callback when web controller initialization success.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  onControllerAttached(callback: () => void): WebAttribute;

  /**
   * 过度滚动时触发。
   *
   * @param { function } callback 发生过度滚动时触发的函数。[since 10 - 11]
   * @param { Callback<OnOverScrollEvent> } callback 发生过度滚动时触发的函数。[since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onOverScroll(callback: Callback<OnOverScrollEvent>): WebAttribute;

  /**
   * PDF页面用户滚动到底事件回调
   * @param { Callback<OnPdfScrollEvent> } callback Function Triggered when the scrolling to bottom.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  onPdfScrollAtBottom(callback: Callback<OnPdfScrollEvent>): WebAttribute;

  /**
   * Triggered when the PDF page load finish.
   * @param { Callback<OnPdfLoadEvent> } callback
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  onPdfLoadEvent(callback: Callback<OnPdfLoadEvent>): WebAttribute;

  /**
   * Called when received website security risk check result.
   *
   * @param { OnSafeBrowsingCheckResultCallback } callback - Function triggered when received website security risk check result.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  onSafeBrowsingCheckResult(callback: OnSafeBrowsingCheckResultCallback): WebAttribute;

  /**
   * Triggered when the website security risk check is completed.
   * <p><strong>API Note</strong>:<br>
   * Unlike onSafeBrowsingCheckResult, which is only triggered when a URL has security risks, onSafeBrowsingCheckFinish
   * is also triggered when the website security risk check is not performed or no risks are found.
   *
   * @param { OnSafeBrowsingCheckResultCallback } callback - Triggered when received website security risk check result.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  onSafeBrowsingCheckFinish(callback: OnSafeBrowsingCheckResultCallback): WebAttribute;

  /**
   * Called when the load committed.
   *
   * @param { OnNavigationEntryCommittedCallback } callback Function Triggered when a load committed.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  onNavigationEntryCommitted(callback: OnNavigationEntryCommittedCallback): WebAttribute;

  /**
   * Called when tracker's cookie is prevented.
   *
   * @param { OnIntelligentTrackingPreventionCallback } callback - Callback triggered when tracker's cookie is prevented.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onIntelligentTrackingPreventionResult(callback: OnIntelligentTrackingPreventionCallback): WebAttribute;

  /**
   * Injects the JavaScripts script into the Web component.
   * When the specified page or document starts to be loaded, the script is executed on any page whose source matches scriptRules.
   * <p><strong>API Note</strong>:<br>
   * The script runs before any JavaScript code of the page, when the DOM tree may not have been loaded or rendered.
   * The script is executed in the lexicographic order instead of array sequence.
   * if the array sequemce is required, you are advised to use the runJavaScriptOnDocumentStart interface.
   * You are not advised to use this API together with runJavaScriptOnDocumentStart.
   * </p>
   *
   * @param { Array<ScriptItem> } scripts - The array of the JavaScripts to be injected.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  javaScriptOnDocumentStart(scripts: Array<ScriptItem>): WebAttribute;

  /**
   * Injects the JavaScripts script into the Web component. When the specified page or document has been loaded,
   * the script is executed on any page whose source matches scriptRules.
   * <p><strong>API NOTE</strong>:<br>
   * The script runs before any Javascript code of the page, when the DOM tree has been loaded and rendered.
   * The script is excuted in the lexicographic order, not the array order.
   * You are not advised to use this API together with runJavaScriptOnDocumentEnd.
   * <p>
   *
   * @param { Array<ScriptItem> } scripts - The array of the JavaScripts to be injected.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  javaScriptOnDocumentEnd(scripts: Array<ScriptItem>): WebAttribute;

  /**
   * 设置Web布局模式。当属性没有显式调用时，默认Web布局跟随系统模式。常见问题请参考[Web组件大小自适应页面内容布局](docroot://web/web-fit-content.md)。
   *
   * > **说明：**
   * >
   * > 目前只支持两种Web布局模式，分别为Web布局跟随系统（`WebLayoutMode.NONE`）和Web组件高度基于前端页面高度的自适应网页布局（`WebLayoutMode.FIT_CONTENT`）。
   * >
   * > Web组件高度基于前端页面自适应布局有如下限制：
   * >
   * > - 如果Web组件宽或长度超过7680px，请在Web组件创建的时候指定`RenderMode.SYNC_RENDER`模式，否则会整个白屏。
   * >
   * > - Web组件创建后不支持动态切换layoutMode模式。
   * >
   * > - Web组件宽高规格：指定`RenderMode.ASYNC_RENDER`模式时，分别不超过7680px。
   * >
   * > - 频繁更改页面宽高会触发Web组件重新布局，影响体验。
   * >
   * > - 不支持瀑布流网页（下拉到底部加载更多）。
   * >
   * > - 不支持宽度自适应，仅支持高度自适应。
   * >
   * > - 由于高度自适应网页高度，您无法通过修改组件高度属性来修改组件高度。
   *
   * @param { WebLayoutMode } mode - 设置web布局模式，跟随系统或自适应布局。<br>传入null或undefined时为`WebLayoutMode.NONE`
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  layoutMode(mode: WebLayoutMode): WebAttribute;

  /**
   * 调用以设置嵌套滚动选项。
   *
   * @param { NestedScrollOptions } value - 嵌套滚动选项。 [since 11 - 13]
   * @param { NestedScrollOptions | NestedScrollOptionsExt } value - 嵌套滚动
   *     选项。[since 14]
   * @returns { WebAttribute } 滚动属性。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 11 dynamic
   */
  nestedScroll(value: NestedScrollOptions | NestedScrollOptionsExt): WebAttribute;

  /**
   * Sets the enable native embed mode for web.
   *
   * <p><strong>API Note</strong>:
   * <strong>Performance Note</strong>:
   * <p>For details about how to rendering native components on the Web using same-layer rendering,
   * see [Rendering Native Components on the Web Using Same-Layer Rendering]{@link https://developer.huawei.com/consumer/en/doc/best-practices/bpta-render-web-using-same-layer-render}
   * </p>
   *
   * @param { boolean } enabled - Whether to enable the same-layer rendering feature.
   *    The value true means to enable the same-layer rendering feature, and false means the opposite.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  enableNativeEmbedMode(enabled: boolean): WebAttribute;

  /**
   * 注册使用同层渲染的HTML标签名和类型。标签名仅支持使用<object\>和<embed\>。标签类型只能使用ASCII可显示字符。
   *
   * 若指定类型与W3C定义的<object\>或<embed\>标准类型重合，ArkWeb内核将其识别为非同层标签。
   *
   * 本接口同样受enableNativeEmbedMode接口控制，在未使能同层渲染时本接口无效。在不使用本接口的情况下，ArkWeb内核默认将"native/"前缀类型的<embed\>标签识别为同层标签。
   *
   * 具体使用详情请参考[同层渲染](docroot://web/web-same-layer.md#web页面中同层渲染输入框)指南。
   *
   * @param { string } tag - 标签名。
   * @param { string } type - 标签类型，内核使用前缀匹配此参数。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  registerNativeEmbedRule(tag: string, type:string): WebAttribute;

  /**
   * 当同层标签生命周期变化时触发该回调。
   *
   * @param { function } callback - 同层标签生命周期变化时触发该回调。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  onNativeEmbedLifecycleChange(callback: (event: NativeEmbedDataInfo) => void): WebAttribute;

  /**
   * 当网页中同层标签（例如<embed\>标签或<object\>标签）在视口内的可见性发生变化时，将触发该回调。同层标签默认不可见，若在页面首次加载时已可见，则会上报；若不可见，则不会上报。同层标签全部不可见才视为不可见，部分可见或
   * 全部可见则视为可见。若要获取因同层标签CSS属性（包括visibility、display以及尺寸变化）导致的可见状态变化，需配置
   * [nativeEmbedOptions]{@link web:WebAttribute.nativeEmbedOptions}，并将[EmbedOptions]{@link web:EmbedOptions}中的
   * supportCssDisplayChange参数设为true。
   *
   * @param { OnNativeEmbedVisibilityChangeCallback } callback - 同层标签可见性变化时触发该回调。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  onNativeEmbedVisibilityChange(callback: OnNativeEmbedVisibilityChangeCallback): WebAttribute;

  /**
   * 当手指触摸到同层标签时触发该回调。
   *
   * @param { function } callback - 手指触摸到同层标签时触发该回调。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  onNativeEmbedGestureEvent(callback: (event: NativeEmbedTouchInfo) => void): WebAttribute;

  /**
   * 在同层标签上执行以下行为时触发该回调：
   *
   * - 使用鼠标左键、中键、右键进行点击或长按。
   * - 使用触摸板进行对应鼠标左键、中键、右键点击长按的操作。
   *
   * @param { MouseInfoCallback } callback - 当鼠标/触摸板点击到同层标签时触发该回调。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  onNativeEmbedMouseEvent(callback: MouseInfoCallback): WebAttribute;

  /**
   * 调用以设置复制选项
   *
   * @param { CopyOptions } value - 复制选项。
   * @returns { WebAttribute } 滚动属性。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  copyOptions(value: CopyOptions): WebAttribute;

  /**
   * When the URL is about to be loaded into the current Web, it gives the application the opportunity to take control.
   * This will not called for POST requests, may be called for subframes and with non-HTTP(S) schemes.
   *
   * @param { OnOverrideUrlLoadingCallback } callback - The callback for onOverrideUrlLoading.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * When the URL is about to be loaded into the current Web, it gives the application the opportunity to take control.
   * This will not called for POST requests, may be called for subframes and with non-HTTP(S) schemes.
   *
   * @param { OnOverrideUrlLoadingCallback } callback - The callback for onOverrideUrlLoading.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  onOverrideUrlLoading(callback: OnOverrideUrlLoadingCallback): WebAttribute;

  /**
   * 页面文档资源发生错误的时候触发，只有主frame会触发
   *
   * @param { OnOverrideErrorPageCallback } callback The triggered function when the
   *                                        web page's document resource error.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  onOverrideErrorPage(callback: OnOverrideErrorPageCallback): WebAttribute;

  /**
   * 设置Web组件是否开启文本字体大小自动调整。当属性没有显式调用时，Web组件默认开启文本字体大小自动调整。
   *
   * 文本字体大小自动调整生效后，对于字号过小的文本将自动加大字号至16px~32px，避免屏幕较小（默认视口宽度 < 980px）的设备因为缺少移动端适配出现字体过小的可读性问题。
   *
   * > **说明：**
   * >
   * > - 文本字体大小自动调整生效需要满足的前置条件：
   * > >   - 设备形态为：Phone、Tablet、Wearable、TV。
   * > >   - Web组件视口宽度 < 980px。
   * > >   - 页面文本量大，页面文本的字号*字符数 ≥ 3920。
   * > >   - 前端无metaViewport设置，或metaViewport设置中无"width"和"initial-scale"属性。
   *
   * @param { boolean } textAutosizing - 文本自动调整大小。<br>true表示文本自动调整大小，false表示文本不自动调整大小。<br>传入undefined或null时为true。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  textAutosizing(textAutosizing: boolean): WebAttribute;

  /**
   * Enable app creates native media player to play web page media source.
   *
   * @param { NativeMediaPlayerConfig } config - The configuration of native media player.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enableNativeMediaPlayer(config: NativeMediaPlayerConfig): WebAttribute;

  /**
   * Triggered when render process not responding.
   *
   * @param { OnRenderProcessNotRespondingCallback } callback The triggered function when render process not responding.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  onRenderProcessNotResponding(callback: OnRenderProcessNotRespondingCallback): WebAttribute;

  /**
   * Triggered when the unresponsive render process becomes responsive.
   *
   * @param { OnRenderProcessRespondingCallback } callback The triggered function when the unresponsive render process becomes responsive.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  onRenderProcessResponding(callback: OnRenderProcessRespondingCallback): WebAttribute;

  /**
   * 设置自定义文本菜单。
   *
   * @param { Array<ExpandedMenuItemOptions> } expandedMenuOptions - 自定义文本菜单配置项。
   *     菜单项数量、菜单内容尺寸、startIcon 图标尺寸
   *     均与 ArkUI Menu 组件保持一致。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamiconly
   * @deprecated since 20
   * @useinstead ohos.web.WebAttribute#editMenuOptions
   */
  selectionMenuOptions(expandedMenuOptions: Array<ExpandedMenuItemOptions>): WebAttribute;

  /**
   * 网页meta中viewport-fit配置项更改时触发该回调，应用可在此回调中自适应布局视口。
   *
   * @param { OnViewportFitChangedCallback } callback - 网页meta中viewport-fit配置项更改时触发的回调。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onViewportFitChanged(callback: OnViewportFitChangedCallback): WebAttribute;

  /**
   * When the soft keyboard is about to be displayed on the current Web,
   * it gives the application the opportunity to intercept the system keyboard attachment.
   * The application can return the keyboard options to control the web to
   * pull up the soft keyboard of the different type.
   *
   * @param { WebKeyboardCallback } callback - The callback for onInterceptKeyboardAttach.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onInterceptKeyboardAttach(callback: WebKeyboardCallback): WebAttribute;

  /**
   * Called when received Ads blocked results.
   * If blocked results exist at the end of page loading, the first call will be triggered.
   * To avoid performance issues, subsequent results will be periodically reported through this api.
   *
   * @param { OnAdsBlockedCallback } callback - The callback for OnAdsBlockedCallback.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onAdsBlocked(callback: OnAdsBlockedCallback): WebAttribute;

  /**
   * Set web avoidance keyboard mode. The default value is WebKeyboardAvoidMode.RESIZE_CONTENT.
   *
   * @param { WebKeyboardAvoidMode } mode - The web keyboard avoid mode, which can be {@link WebKeyboardAvoidMode}.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  keyboardAvoidMode(mode: WebKeyboardAvoidMode): WebAttribute;

  /**
   * 设置自定义文本菜单。
   *
   * @param { EditMenuOptions } editMenu - 自定义文本菜单选项。
   *     菜单项数量、菜单内容尺寸和图标尺寸需与 ArkUI Menu 组件保持一致。
   *     菜单中仅支持使用系统提供的 id 枚举值（TextMenuItemId），
   *     包括剪切、复制、粘贴、全选、翻译、搜索以及网页中的部分 AI 菜单。
   *     onMenuItemClick 函数中的 textRange 参数在网页场景下无意义，
   *     传入值为 -1。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  editMenuOptions(editMenu: EditMenuOptions): WebAttribute;

  /**
   * 启用或禁用触觉反馈。
   *
   * @param { boolean } enabled - 默认值为 true，设置为 false 可禁用触觉反馈。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  enableHapticFeedback(enabled: boolean): WebAttribute;

  /**
   * 绑定到选择菜单。
   *
   * @param { WebElementType } elementType - 表示选择菜单的类型。
   * @param { CustomBuilder } content - 表示选择菜单的内容。
   * @param { WebResponseType } responseType - 表示选择菜单的响应类型。
   * @param { SelectionMenuOptionsExt } [options] - 表示选择菜单的配置项。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  bindSelectionMenu(elementType: WebElementType, content: CustomBuilder, responseType: WebResponseType,
    options?: SelectionMenuOptionsExt): WebAttribute;

  /**
   * 设置Web组件是否开启字重跟随系统设置变化。当属性没有显式调用时，Web组件默认开启字重跟随系统设置变化。
   *
   * > **说明：**
   * >
   * > 目前该能力只支持前端文本元素跟随变化，暂不支持canvas元素、内嵌docx和pdf格式中的文本跟随变化。
   *
   * @param { boolean } follow - 设置Web组件是否开启字重跟随系统设置变化。<br>true表示字重跟随系统设置中的字体粗细变化，系统设置改变时字重跟随变化。false表示字重不再跟随系统设置中的字体粗细变
   *     化，系统设置改变时维持当前字重不变。<br>传入undefined或null时为true。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 18 dynamic
   */
  enableFollowSystemFontWeight(follow: boolean): WebAttribute;

  /**
   * 设置是否对接播控
   *
   * @param { boolean } enabled true为开启，false为关闭
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 18 dynamic
   */
  enableWebAVSession(enabled: boolean): WebAttribute;

  /**
   * 设置是否开启分段解析HTML优化。当属性没有显式调用时，默认使用解析时间作为HTML分段解析的分段点。
   * ArkWeb内核在解析HTML文档结构时采取分段解析策略，旨在避免过多占用主线程资源，并使网页具有渐进式加载能力。ArkWeb内核默认使用解析时间作为分段点，当单次解析时间超过阈值时，会中断解析，随后进行布局和渲染操作。
   * 开启优化后，ArkWeb内核将不仅检查解析时间是否超出限制，还会额外判断解析的Token（HTML文档的最小解析单位，例如`<div>`、`attr="xxx"`等）数量是否超过内核规定的阈值，并下调此阈值。当页面的FCP（
   * First Contentful Paint 首次内容绘制）触发时会恢复成默认的中断判断逻辑。这将使得网页在FCP到来之前的解析操作更频繁，从而提高首帧内容被提前解析完成并进入渲染阶段的可能性，同时有效缩减首帧渲染的工作量，最终实
   * 现FCP时间提前。
   * 由于页面的FCP触发时会恢复成默认分段解析逻辑，因此分段解析HTML优化仅对每个Web组件加载的首个页面生效。
   *
   * @param { boolean} optimizeParserBudget - 设置开启分段解析HTML优化。<br>true表示使用解析个数代替解析时间作为HTML分段解析的分段点，并减少每段解析的个数上限。false表示使用
   *     解析时间作为HTML分段解析的分段点。<br>传入undefined或null时为false。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 15 dynamic
   */
  optimizeParserBudget(optimizeParserBudget: boolean): WebAttribute;

  /**
   * Injects the JavaScripts that will be run just after document object has been created.
   *
   * @param { Array<ScriptItem> } scripts - The JavaScripts executed in array order.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 15 dynamic
   */
  runJavaScriptOnDocumentStart(scripts: Array<ScriptItem>): WebAttribute;

  /**
   * Injects the JavaScripts that will be run after document has been parsed finished.
   *
   * @param { Array<ScriptItem> } scripts - The JavaScripts executed in array order.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 15 dynamic
   */
  runJavaScriptOnDocumentEnd(scripts: Array<ScriptItem>): WebAttribute;

  /**
   * Injects the JavaScripts that will be run after head element has been parsed finished.
   *
   * @param { Array<ScriptItem> } scripts - The JavaScripts executed in array order.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 15 dynamic
   */
  runJavaScriptOnHeadEnd(scripts: Array<ScriptItem>): WebAttribute;

  /**
   * 设置同层渲染相关配置，该属性仅在[enableNativeEmbedMode]{@link WebAttribute.enableNativeEmbedMode}开启时生效，不支持动态修改。当属性没有显式调用时，默认为`{
   * supportDefaultIntrinsicSize: false}`。
   *
   * @param { EmbedOptions } options - 同层渲染相关配置。<br>传入undefined或null时为`{supportDefaultIntrinsicSize: false}`。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 16 dynamic
   */
  nativeEmbedOptions(options?: EmbedOptions): WebAttribute;

  /**
   * 开启实体识词
   *
   * @param { boolean } enable - true为开启实体识词，false关闭，默认值关闭
   * @returns { WebAttribute } web属性
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  enableDataDetector(enable: boolean): WebAttribute;

  /**
   * 实体识词配置
   *
   * @param { TextDataDetectorConfig } config - 实体识词配置
   * @returns { WebAttribute } web属性
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  dataDetectorConfig(config: TextDataDetectorConfig): WebAttribute;

  /**
   * 设置绕过vsync的条件。
   * 如果条件匹配，则绘制不依赖于Vsync信号，直接绘制
   *
   * @param { Callback<void> } callback The triggered function when the web page is active for window.open called by other web component.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  onActivateContent(callback: Callback<void>): WebAttribute;

  /**
   * 当开发者调用scrollBy接口进行页面滚动时，可以通过bypassVsyncCondition接口设置渲染流程跳过vsync（垂直同步）调度，直接触发绘制。该属性没有显式调用时，默认不跳过vsync调度。
   *
   * @param { WebBypassVsyncCondition } condition - 触发渲染流程跳过vsync调度的条件。 <br> 传入undefined或null时为NONE。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  bypassVsyncCondition(condition: WebBypassVsyncCondition): WebAttribute;

  /**
   * 设置手势获焦的模式。当用户使用不同手势操作web时，根据所设置的模式决定是否获焦和获焦时机。默认值DEFAULT，所有手势均会在touchDown时获焦。
   *
   * @param { GestureFocusMode } mode - The gesture focus mode, which can be {@link GestureFocusMode}.
   *    The default value is FocusMode.DEFAULT.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  gestureFocusMode(mode: GestureFocusMode): WebAttribute;

  /**
   * 设置是否遵守网页中 <meta name="viewport"> 标签设置的缩放限制。
   *
   * @param { boolean } enable {@code true} 表示 Web 遵守
   *     网页中 <meta name="viewport"> 标签设置的缩放限制；{@code false} 表示不遵守。
   *     默认值为 true。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  forceEnableZoom(enable: boolean): WebAttribute;

  /**
   * 当同层渲染object标签内嵌param元素变化时触发此回调。
   *
   * @param { OnNativeEmbedObjectParamChangeCallback } callback - 增加、修改或删除同层渲染object标签内嵌param元素时触发此回调。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  onNativeEmbedObjectParamChange(callback: OnNativeEmbedObjectParamChangeCallback): WebAttribute;

  /**
   * Set up the effect of web rotation
   *
   * @param { WebRotateEffect } effect - The effect of rotation.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  rotateRenderEffect(effect: WebRotateEffect): WebAttribute;

  /**
   * 设置网页是否支持使用 Ctrl 键进行缩放。
   *
   * @param { boolean } zoomControlAccess - {@code true} 表示网页支持使用 Ctrl 键缩放，
   *     {@code false} 表示不支持。
   *     默认值为 true。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  zoomControlAccess(zoomControlAccess: boolean): WebAttribute;

  /**
   * Web组件检测到白屏时触发此回调。
   *
   * > **说明：**
   * >
   * > - 需配合[blankScreenDetectionConfig]{@link web:WebAttribute.blankScreenDetectionConfig}使用。否则，默认关闭白屏检测功能，不会返回检测到白屏时的回
   * > 调函数。
   *
   * @param { OnDetectBlankScreenCallback } callback - Web组件检测到白屏时的回调函数。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  onDetectedBlankScreen(callback: OnDetectBlankScreenCallback): WebAttribute;

  /**
   * 设置白屏检测的策略配置，如使能开关、检测时间和检测策略等。当属性没有显式调用时，默认关闭白屏检测。
   *
   * > **说明：**
   * >
   * > - 根据detectConfig的配置，在网页加载后检测到白屏或者近似白屏现象，可触发回调
   * > [onDetectedBlankScreen]{@link web:WebAttribute.onDetectedBlankScreen}。
   * >
   * > - 设置后下次导航生效。
   * >
   * > - 当用户与网页发生交互后，不再会继续检查是否白屏。
   * >
   * > - 不支持layoutMode为WebLayoutMode.FIT_CONTENT的场景。
   *
   * @param { BlankScreenDetectionConfig } detectConfig - 白屏检测的策略配置。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  blankScreenDetectionConfig(detectConfig: BlankScreenDetectionConfig): WebAttribute;

  /**
   * Set whether to enable the back-to-top feature for web component when the status bar is touched.
   *
   * @param { boolean } backToTop {@code true} means enable the back-to-top feature,
   *     when the status bar is touched. {@code false} otherwise. The default value is true.
   *     True when passing in undefined and null.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  backToTop(backToTop: boolean): WebAttribute;

  /**
   * 设置是否启用文本选择的AI菜单功能，启用后可识别选区中的邮件、电话、网址、日期、地址等，并在文本选择菜单中展示对应的AI菜单项。默认启用AI菜单功能。
   *
   * AI菜单功能启用时，在网页中选中文本后，文本选择菜单能够展示对应的AI菜单项，包括[TextMenuItemId]{@link text_common:TextMenuItemId}中的url（打开链接）、email（新建邮件）、
   * phoneNumber（呼叫）、address（导航前往）、dateTime（新建日程）。
   *
   * AI菜单生效时，需在选中范围内，包括一个完整的AI实体，才能展示对应的选项。该菜单项与[TextMenuItemId]{@link text_common:TextMenuItemId}中的askAI菜单项不同时出现。
   *
   * 示例使用场景详见[使用Web组件的智能分词能力](docroot://web/web-data-detector.md)。
   *
   * > **说明：**
   * >
   * > 当enableSelectedDataDetector未配置或设置为true时，将遵循
   * > [dataDetectorConfig](docroot://reference/apis-arkweb/arkts-basic-components-web-attributes.md#datadetectorconfig20)
   * > 中types的配置；若
   * > [dataDetectorConfig](docroot://reference/apis-arkweb/arkts-basic-components-web-attributes.md#datadetectorconfig20)
   * > 也未配置，则默认识别所有类型。
   * >
   * > 当enableSelectedDataDetector设置为false时，不激活实体文本选择AI菜单项。
   *
   * @param { boolean } enable - 是否启用Web文本识别，true表示启用，false表示不启用。<br>传入undefined或null时属性重置为默认值。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  enableSelectedDataDetector(enable: boolean): WebAttribute;

  /**
   * 网页首屏渲染结束时触发此回调，使用callback异步回调。
   *
   * > **说明：**
   * >
   * > - 首屏渲染（First Screen Paint，FSP），记录了视口内图片、文本或视频元素完成渲染所需的时间，是衡量页面首次加载到渲染完成的核心性能指标。当一定时间内视口内没有可见元素超出历史绘制区域时，将视口内元素绘制的
   * > 历史最大的时刻视为首屏渲染完成时刻。
   * >
   * > - 接口在首屏绘制完成后，需要等待一定时间没有新的渲染信息需要处理后，才会上报回调。接口回调时刻和首屏渲染完成时刻不同。
   * >
   * > - 渲染未完成时，若用户输入或滚动页面，将会立即上报回调函数。
   * >
   * > - 该接口适用于在即时加载场景下获取首屏渲染时间，在预加载或预渲染场景下使用无法达到预期。
   *
   * @param { OnFirstScreenPaintCallback } callback - 回调函数，设置Web组件的检测到首屏渲染。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  onFirstScreenPaint(callback: OnFirstScreenPaintCallback): WebAttribute;

  /**
   * 设置是否启用自动填充功能。
   *
   * @param { boolean } value - 表示是否启用自动填充的标识。
   *      默认值为 true。true：启用，false：禁用。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  enableAutoFill(value: boolean): WebAttribute;

  /**
   * 文本选择发生变化时调用。
   *
   * @param { TextSelectionChangeCallback } callback - 文本选择变化时的回调函数。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  onTextSelectionChange(callback: TextSelectionChangeCallback): WebAttribute;

  /**
   * 设置 Web 组件支持 AI 图像识别能力。
   *
   * @param { boolean } enable - {@code true} 表示启用 Web AI 图像识别能力，
   *      {@code false} 表示禁用。
   *      默认值为 true。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  enableImageAnalyzer(enable: boolean): WebAttribute;

  /**
   * Triggered after camera capture state changed.
   *
   * @param { OnCameraCaptureStateChangeCallback } callback - callback triggered to
   *     report current page camera capture state changing event.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  onCameraCaptureStateChange(callback: OnCameraCaptureStateChangeCallback): WebAttribute;

  /**
   * Triggered after microphone capture state changed.
   *
   * @param { OnMicrophoneCaptureStateChangeCallback } callback - callback triggered to
   *     report current page microphone capture state changing event.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  onMicrophoneCaptureStateChange(callback: OnMicrophoneCaptureStateChangeCallback): WebAttribute;

  /**
   * 设置是否使能默认右键菜单
   *
   * @param { boolean } enable - {@code true} means the Web enable the default right-click context menu,
   *     {@code false} otherwise.
   *     The default value is false.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 24 dynamic
   */
  enableDefaultContextMenu(enable: boolean): WebAttribute;

  /**
   * 启用或禁用此组件的拖动。
   *
   * @param { boolean } value - {@code true}启用拖动，{@code false}禁用拖动。
   *     默认值为true。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enableDrag(value: boolean): WebAttribute;

  /**
   * 设置滚动条布局策略。
   * 控制滚动条在容器中的布局方式——要么遵循W3C标准，要么遵循系统默认值。
   *
   * @param { ScrollbarLayoutPolicy } policy - 要应用的布局策略。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  scrollbarLayoutPolicy(policy: ScrollbarLayoutPolicy): WebAttribute;

  /**
   * 在WebView组件中启用或禁用滚动手势的方向锁定。
   *
   * 当启用方向锁定时，滚动轴将根据初始
   * 滑动向量方向。此行为有助于防止意外的滚动方向更改
   * 在触摸交互过程中，特别是在嵌套滚动场景中。
   *
   * @param { boolean } value - 是否使能定向锁定。
   *     - `true`：为对应的类型类别启用方向锁定。
   *     - `false`：禁用对应类型类别的方向锁定。
   * @param { ScrollDirectionalLockType } type - 指定方向锁的应用场景。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enableScrollDirectionalLock(value: boolean, type: ScrollDirectionalLockType): WebAttribute;

  /**
   * Web组件的自定义AI会话配置。
   * 用于注册多个自定义AI会话。
   *
   * @param { Array<AISessionEvent> } aiSessions - AISessionOptions对象的数组。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  aiSessionOptions(aiSessions: Array<AISessionEvent>): WebAttribute;

  /**
   * 设置WebKeyboardAppearanceMode以决定软键盘的沉浸式模式。
   *
   * @param { WebKeyboardAppearanceMode } mode - 此网站的WebKeyboardAppearanceMode。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  keyboardAppearance(mode: WebKeyboardAppearanceMode): WebAttribute;

  /**
   * 当inputmethod被附加到IMF时，会触发回调。
   *
   * @param { OnInputmethodAttachedCallback } callback - 当inputmethod被附加到IMF时触发的回调。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  onInputmethodAttached(callback: OnInputmethodAttachedCallback): WebAttribute;
}

/**
 * Defines Web Component.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 8
 */
/**
 * Defines Web Component.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @since 10
 */
/**
 * Defines Web Component.
 *
 * <p><strong>API Note</strong>:
 *
 * <strong>Performance Note</strong>:
 * <p>For details about how to optimize the compilation, resource loading, and JSBridge performance,
 * see [Optimizing Web Page Loading]{@link https://developer.huawei.com/consumer/en/doc/best-practices/bpta-web-develop-optimization}
 * <p>When the white screen duration is long due to complex web page parsing,
 * you can enable [optimizeParserBudget]{@link WebAttribute.optimizeParserBudget} to reduce the first frame rendering content.</p>
 * </p>
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const Web: WebInterface;

/**
 * Defines Web Component instance.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines Web Component instance.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 * @noninterop
 */
declare const WebInstance: WebAttribute;

/**
 * Defines the ssl error event.
 *
 * @typedef SslErrorEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
/**
 * Defines the ssl error event.
 *
 * @typedef SslErrorEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare interface SslErrorEvent {
  /**
   * Notifies the user of the operation behavior of the web component.
   *
   * @type { SslErrorHandler }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Notifies the user of the operation behavior of the web component.
   *
   * @type { SslErrorHandler }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  handler: SslErrorHandler;

  /**
   * Error codes.
   *
   * @type { SslError }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Error codes.
   *
   * @type { SslError }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  error: SslError;

  /**
   * Request url.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Request url.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  url: string;

  /**
   * Original url.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Original url.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  originalUrl: string;

  /**
   * Referrer.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Referrer.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  referrer: string;

  /**
   * Whether the error is fatal.
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  isFatalError: boolean;

  /**
   * Whether the request is main frame.
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Whether the request is main frame.
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  isMainFrame: boolean;

  /**
   * Certificate chain data in DER format.
   *
   * @type { ?Array<Uint8Array> }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20
   */
  /**
   * Certificate chain data in DER format.
   *
   * @type { ?Array<Uint8Array> }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @since 23 dynamic
   */
  certChainData?: Array<Uint8Array>;
}

/**
 * > **说明：**
 * >
 * > 从API version 12开始支持，从API version 20开始废弃，建议使用
 * > [editMenuOptions]{@link WebAttribute#editmenuoptions}替代。
 * > 自定义菜单扩展项。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamiconly
 * @deprecated since 20
 * @useinstead EditMenuOptions
 */
declare interface ExpandedMenuItemOptions {
  /**
   * 显示内容。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamiconly
   * @deprecated since 20
   * @useinstead EditMenuOptions
   */
  content: ResourceStr;

  /**
   * 显示图标。默认值为空，不显示图标。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamiconly
   * @deprecated since 20
   * @useinstead EditMenuOptions
   */
  startIcon?: ResourceStr;

  /**
   * 选中的文本信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamiconly
   * @deprecated since 20
   * @useinstead EditMenuOptions
   */
  action: (selectedText: {plainText: string}) => void;
}

/**
 * 通过NestedScrollOptionsExt可以设置上下左右四个方向的嵌套滚动规则。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 23]
 * @since 14 dynamic
 */
declare interface NestedScrollOptionsExt {
  /**
   * 可滚动组件往上滚动时的嵌套滚动选项。
   *
   * 默认值：NestedScrollMode.SELF_FIRST。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @since 14 dynamic
   */
  scrollUp?: NestedScrollMode;

  /**
   * 可滚动组件往下滚动时的嵌套滚动选项。
   *
   * 默认值：NestedScrollMode.SELF_FIRST。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @since 14 dynamic
   */
  scrollDown?: NestedScrollMode;

  /**
   * 可滚动组件往右滚动时的嵌套滚动选项。
   *
   * 默认值：NestedScrollMode.SELF_FIRST。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @since 14 dynamic
   */
  scrollRight?: NestedScrollMode;

  /**
   * 可滚动组件往左滚动时的嵌套滚动选项。
   *
   * 默认值：NestedScrollMode.SELF_FIRST。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @since 14 dynamic
   */
  scrollLeft?: NestedScrollMode;
}

/**
 * Web同层渲染的配置。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 16 dynamic
 */
declare interface EmbedOptions {
  /**
   * 设置同层渲染元素是否支持固定大小 300 * 150。
   *
   * 当H5侧CSS设置了大小时，同层渲染元素大小为CSS大小，否则为固定大小。
   *
   * 为true时，固定大小为 300 * 150。
   *
   * 为false时，若H5侧CSS未设置大小，则同层渲染元素不渲染。
   *
   * 默认值：false
   *
   * 单位：像素。
   *
   * @default false
   * @syscap SystemCapability.Web.Webview.Core
   * @since 16 dynamic
   */
  supportDefaultIntrinsicSize?: boolean;
  /**
   * 设置同层渲染可见性接口是否支持显示属性。
   *
   * 同层渲染可见性接口默认支持同层标签相对于视口的可见状态。
   *
   * 设置为true时，支持显示CSS属性，包括visibility、display和宽高。
   *
   * 设置为false时，不支持显示CSS属性，仅支持同层标签相对于视口的可见性。
   *
   * @default false
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  supportCssDisplayChange?: boolean;
}

/**
 * 手势获焦的模式。
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
declare enum GestureFocusMode {
  /**
   * 默认值，Web会在触摸按下屏幕时申请获焦，包括点击、长按、滑动、缩放等任何触摸屏幕的手势行为。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  DEFAULT = 0,

  /**
   * Web只会在点击和长按手势事件生成时申请获焦，点击和长按在触摸抬起之后生成，滑动和缩放等手势行为不会获焦。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  GESTURE_TAP_AND_LONG_PRESS = 1
}

/**
 * 定义文件选择器拉取文件时网页推荐的文件类型信息。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare interface AcceptableFileType {
  /**
   * 文件MIME类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  mimeType: string;

  /**
   * 文件类型数组，包含若干可供选择的文件类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  acceptableType: Array<string>;
}

/**
 * Enum type for navigationPolicy in OnWindowNewExtEvent.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare enum NavigationPolicy {
  /**
   * NEW POPUP window.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  NEW_POPUP = 0,

  /**
   * Shift key when clicking.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  NEW_WINDOW = 1,

  /**
   * Middle mouse button or meta/ctrl key when clicking.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  NEW_BACKGROUND_TAB = 2,

  /**
   * Shift key + Middle mouse button or meta/ctrl key when clicking.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  NEW_FOREGROUND_TAB = 3
}

/**
 * Defines the window features info for window.open.
 *
 * @interface WindowFeatures
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare interface WindowFeatures {
  /**
   * The requested height of the containing window.
   *
   * @type { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  height: number;

  /**
   * The requested width of the containing window.
   *
   * @type { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  width: number;

  /**
   * The requested x-coordinate of the containing window.
   *
   * @type { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  x: number;

  /**
   * The requested y-coordinate of the containing window.
   *
   * @type { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  y: number;
}

/**
 * Defines the triggered callback when web page requires the user to create a window.
 *
 * @typedef OnWindowNewExtEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 23 dynamic
 */
declare interface OnWindowNewExtEvent {
  /**
   * true indicates the request to create a dialog and false indicates a new tab.
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 23 dynamic
   */
  isAlert: boolean;

  /**
   * true indicates that it is triggered by the user, and false indicates that it is triggered by a non-user.
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 23 dynamic
   */
  isUserTrigger: boolean;

  /**
   * Destination URL.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 23 dynamic
   */
  targetUrl: string;

  /**
   * Lets you set the WebviewController instance for creating a new window.
   *
   * @type { ControllerHandler }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 23 dynamic
   */
  handler: ControllerHandler;

  /**
   * Contains the attributes that a webpage requests from its containing web view, the parameters
   * of window.open.
   *
   * @type { WindowFeatures }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 23 dynamic
   */
  windowFeatures: WindowFeatures;

  /**
   * The navigation policy causing the new web view to be created.
   *
   * @type { NavigationPolicy }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 23 dynamic
   */
  navigationPolicy: NavigationPolicy;
}

/**
 * 定义滚动条布局模式控制参数的枚举类型。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum ScrollbarLayoutPolicy {
  /**
   * 滚动条左右布局模式跟随css设定。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  CONTENT = 0,

  /**
   * 滚动条左右布局模式跟随系统语种设定。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  SYSTEM = 1
}

/**
 * 定义滑动方向锁定的场景类型。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum ScrollDirectionalLockType {
  /**
   * 所有场景都支持滑动锁定。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  ALL = 0,

  /**
   * 嵌套滚动场景下支持滑动锁定。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  NESTED_SCROLL = 1
}

/**
 * AI会话创建回调函数类型。允许自定义模型初始化和结果处理。
 *
 * @param { string } id - The session task ID.
 * @param { string } params - Contextual data passed during creation.
 * @param { OnAISessionCallback } result - Callback function to notify the system of the creation result.
 * @returns { boolean } - `true`表示使用自定义逻辑，跳过系统默认行为；`false`表示继续执行系统默认逻辑。
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
type OnCreateAISession = (id: string, params: string, result: OnAISessionCallback) => boolean;

/**
 * AI会话执行操作回调函数类型。用于自定义实现AI模型执行。
 *
 * @param { string } id - 会话任务ID。
 * @param { string } params - 执行期间传递的上下文数据（以JSON字符串格式）。
 * @param { OnAISessionCallback } result - 通知执行结果的回调函数。
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
type OnExecuteAIAction = (id: string, params: string, result: OnAISessionCallback) => void;

/**
 * AI会话销毁回调函数类型。用于清理与自定义AI模型关联的资源。
 *
 * @param { string } id - 会话任务ID。
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
type OnDestroyAISession = (id: string) => void;

/**
 * 自定义AI会话配置对象，用于定义AI会话的生命周期回调。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface AISessionEvent {
  /**
   * AI会话类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  aiSessionType: AISessionType;

  /**
   * AI会话创建时触发的回调函数。返回`true`跳过系统默认行为，返回`false`继续执行系统默认逻辑。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  onCreateAISession: OnCreateAISession;

  /**
   * AI会话执行操作时触发的回调函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  onExecuteAIAction: OnExecuteAIAction;

  /**
   * AI会话销毁时触发的回调函数，用于清理与自定义AI模型关联的资源。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  onDestroyAISession: OnDestroyAISession;
}

/**
 * 支持的AI会话类型。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum AISessionType {
  /**
   * 翻译模型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  TRANSLATOR = 1,

  /**
   * 语言检测模型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  LANGUAGE_DETECTOR = 2,

  /**
   * 内容摘要生成模型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  SUMMARIZER = 3,

  /**
   * 写作助手模型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  WRITER = 4,

  /**
   * 内容改写助手模型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  REWRITER = 5,

  /**
   * 提示词模型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  PROMPT = 6,

  /**
   * 内容校对助手模型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  PROOFREADER = 7
}

/**
 * AI会话操作的结果状态。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum AISessionResultType {
  /**
   * 操作执行成功。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  SUCCESS = 0,

  /**
   * 操作执行失败。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  FAILURE = 1,

  /**
   * 操作正在执行中。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  RUNNING = 2
}

/**
 * AI会话操作结果回调函数类型。用于报告会话创建或执行的结果。
 *
 * @param { AISessionResultType } state - The current result state.
 * @param { string } content - The detailed result or response content.
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
type OnAISessionCallback = (state: AISessionResultType, content: string) => void;