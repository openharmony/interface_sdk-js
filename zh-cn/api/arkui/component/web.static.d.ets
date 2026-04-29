'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
import webview from '../../@ohos.web.webview';
import image from '../../@ohos.multimedia.image';
import { CommonMethod, Callback, TouchEvent, MouseEvent, NestedScrollOptions, KeyEvent, HapticFeedbackMode } from './common';
import { CustomBuilder } from './builder';
import { Resource } from '../../global/resource';
import { Position, ResourceStr, VoidCallback } from './units';
import { MenuType, EditMenuOptions, TextDataDetectorConfig } from './textCommon';
import { CopyOptions, NestedScrollMode } from './enums';
import { PreviewMenuOptions } from './richEditor';
import { ComponentBuilder } from './builder';
import { AttributeModifier, CommonMethod } from "./common";
/**
 * 提供Web控制器的方法。
 *
 * @typedef { webview.WebviewController }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export type WebviewController = webview.WebviewController;
/**
 * The callback of load committed.
 *
 * @typedef { function } OnNavigationEntryCommittedCallback
 * @param { LoadCommittedDetails } loadCommittedDetails - callback information of onNavigationEntryCommitted.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export type OnNavigationEntryCommittedCallback = (loadCommittedDetails: LoadCommittedDetails) => void;
/**
 * The callback of ssl error event.
 *
 * @typedef { function } OnSslErrorEventCallback
 * @param { SslErrorEvent } sslErrorEvent - callback information of onSslErrorEvent.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export type OnSslErrorEventCallback = (sslErrorEvent: SslErrorEvent) => void;
/**
 * The callback of onOverrideErrorPage.
 *
 * @typedef { function } OnOverrideErrorPageCallback
 * @param { OnErrorReceiveEvent } errorPageEvent - The information of error.
 * @returns { string } - Return an HTML text content encoded in Base64.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export type OnOverrideErrorPageCallback = (errorPageEvent: OnErrorReceiveEvent) => string;
/**
 * The callback of largestContentfulPaint.
 *
 * @param { LargestContentfulPaint } largestContentfulPaint - onLargestContentfulPaint的回调信息。
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export type OnLargestContentfulPaintCallback = (largestContentfulPaint: LargestContentfulPaint) => void;
/**
 * The callback of firstMeaningfulPaint.
 *
 * @param { FirstMeaningfulPaint } firstMeaningfulPaint - onFirstIndexfulPaint的回调信息。
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export type OnFirstMeaningfulPaintCallback = (firstMeaningfulPaint: FirstMeaningfulPaint) => void;
/**
 * The callback of onOverrideUrlLoading.
 * Should not call WebviewController.loadUrl with the request's URL and then return true.
 *
 * @typedef { function } OnOverrideUrlLoadingCallback
 * @param { WebResourceRequest } webResourceRequest - callback information of onOverrideUrlLoading.
 * @returns { boolean } - Returning true causes the current Web to abort loading the URL,
 *     false causes the Web to continue loading the url as usual.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export type OnOverrideUrlLoadingCallback = (webResourceRequest: WebResourceRequest) => boolean;
/**
 * The callback of Intelligent Tracking Prevention.
 *
 * @typedef { function } OnIntelligentTrackingPreventionCallback
 * @param { IntelligentTrackingPreventionDetails } details - callback information of onIntelligentTrackingPrevention.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export type OnIntelligentTrackingPreventionCallback = (details: IntelligentTrackingPreventionDetails) => void;
/**
 * The callback of onNativeEmbedVisibilityChange.
 *
 * @param { NativeEmbedVisibilityInfo } nativeEmbedVisibilityInfo - 的回调信息
 *     onNativeEmbed可见性更改。
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export type OnNativeEmbedVisibilityChangeCallback = (nativeEmbedVisibilityInfo: NativeEmbedVisibilityInfo) => void;
/**
 * The callback when the param element which is a child item of the object element has changed.
 *
 * @param { NativeEmbedParamDataInfo } event - param元素的回调信息。
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export type OnNativeEmbedObjectParamChangeCallback = (event: NativeEmbedParamDataInfo) => void;
/**
 * Enum type supplied to {@link PinVerifyResult} when VerifyPinHandler#confirm being called.
 *
 * @enum { int }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum PinVerifyResult {
  /**
   * SUCCESS.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  PIN_VERIFICATION_SUCCESS = 0,
  /**
   * FAILED.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  PIN_VERIFICATION_FAILED = 1
}
/**
 * Enum type supplied to {@link CredentialType} when ClientAuthenticationHandler#confirm being called.
 *
 * @enum { int }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum CredentialType {
  /**
   * User credential.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  CREDENTIAL_USER = 2,
  /**
   * Application-specific credential.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  CREDENTIAL_APP = 3,
  /**
   * Hardware security key credential.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  CREDENTIAL_UKEY = 4
}
/**
 * Handle the result of PIN verification.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare class VerifyPinHandler {
  /**
   * WebKeyboardController的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  constructor();
  /**
   * Passes the PIN verify result.
   *
   * @param { PinVerifyResult } result The PIN code verify result.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  confirm(result: PinVerifyResult): void;
}
/**
 * Defines the event for PIN verification.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface VerifyPinEvent {
  /**
   * Handle the result of PIN verification.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  handler: VerifyPinHandler;
  /**
   * The identity of the Credential.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  identity: string;
}
/**
 * The callback of verify pin.
 *
 * @typedef { function } OnVerifyPinCallback
 * @param { VerifyPinEvent } verifyPinEvent - The event of verify PIN.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export type OnVerifyPinCallback = (verifyPinEvent: VerifyPinEvent) => void;
/**
 * Enum type supplied to {@link NativeEmbedParamItem} when onNativeEmbedObjectParamChange being called.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum NativeEmbedParamStatus {
  /**
   * The param element is created.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  ADD = 0,
  /**
   * The param element is updated.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  UPDATE = 1,
  /**
   *The param element is deleted.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  DELETE = 2
}
/**
 * The source of console message.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum ConsoleMessageSource {
  /**
   * Logs generated by the browser's XML/HTML parser (such as HTML syntax errors, XML format exceptions), for example,
   * parsing warnings caused by unclosed HTML tags.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  XML = 0,
  /**
   * JavaScript execution error, such as syntax error or runtime exception.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  JAVASCRIPT = 1,
  /**
     * Web resource loading failure, such as JS/CSS/image 404.
     *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  NETWORK = 2,
  /**
     * Console API usage, such as console.warn or console.error.
     *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  CONSOLE_API = 3,
  /**
     * Logs from storage modules like LocalStorage, SessionStorage, IndexedDB, or Cookie.
     *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  STORAGE = 4,
  /**
     * Logs from rendering engine (e.g., Blink), such as invalid CSS, layout issues, or rendering performance warnings.
     *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  RENDERING = 5,
  /**
     * Security policy violations, such as HTTPS certificate error or mixed content.
     *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  SECURITY = 6,
  /**
     * Other logs, such as those from extensions.
     *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  OTHER = 7,
  /**
     * Usage of deprecated syntax, such as slider-vertical.
     *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  DEPRECATION = 8,
  /**
     * Errors in service worker or shared worker, such as navigation preload being interrupted.
     *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  WORKER = 9,
  /**
     * Rule violations, such as JavaScript execution exceeding 50ms.
     *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  VIOLATION = 10,
  /**
     * Browser intervention due to potential user experience, security, or performance issues.
     *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  INTERVENTION = 11,
  /**
     * Code practices that do not follow web security best practices, with improvement suggestions.
     *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  RECOMMENDATION = 12
}
/**
 * Defines the information of param element.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface NativeEmbedParamItem {
  /**
   * The status of the param.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  status: NativeEmbedParamStatus;
  /**
   * The id attribute of the param element.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  id: string;
  /**
   * The name attribute of the param element.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  name?: string;
  /**
   * The value attribute of the param element.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  value?: string;
}
/**
 * Defines the param data info.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface NativeEmbedParamDataInfo {
  /**
   * The native embed id.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  embedId: string;
  /**
   * The id attribute of the object element.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  objectAttributeId?: string;
  /**
   * The param element array
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  paramItems?: Array<NativeEmbedParamItem>;
}
/**
 * 组件旋转时，宽高动画过程中组件内容如何填充以适应新尺寸的方式。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum WebRotateEffect {
  /**
   * 默认值，组件旋转时，保持动画终态的内容大小，并且内容始终与组件保持左上角对齐。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  TOPLEFT_EFFECT = 0,
  /**
   * 组件旋转时，保持动画终态内容的宽高比进行缩小或放大，使内容两边都大于或等于组件两边，且与组件保持中心对齐，显示内容的中间部分。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  RESIZE_COVER_EFFECT = 1
}
/**
 * The configuration of native media player.
 *
 * @typedef NativeMediaPlayerConfig
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface NativeMediaPlayerConfig {
  /**
   * Should playing web media by native application instead of web player.
   *
   * @type { boolean }
   *    {@code true} means to enable the application to take over the web media playback function, {@code false} otherwise.
   *    Deflault value: false.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enable: boolean;
  /**
   * The contents painted by native media player should overlay web page.
   *
   * @type { boolean }
   *    {@code true} means changing the height of the video layer to cover the content of the webpage, {@code false} otherwise.
   *    Deflault value: false.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  shouldOverlay: boolean;
}
/**
 * 渲染进程无响应时触发的回调。
 *
 * @typedef { function } OnRenderProcessNotRespondingCallback
 * @param { RenderProcessNotRespondingData } data - 渲染进程无响应的详细信息。
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export type OnRenderProcessNotRespondingCallback = (data: RenderProcessNotRespondingData) => void;
/**
 * 渲染进程由无响应状态变回正常运行状态时触发该回调。
 *
 * @typedef { function } OnRenderProcessRespondingCallback
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export type OnRenderProcessRespondingCallback = () => void;
/**
 * The callback of ViewportFit Changed.
 *
 * @param { ViewportFit } viewportFit - OnViewportFitChangedCallback的详细信息。
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export type OnViewportFitChangedCallback = (viewportFit: ViewportFit) => void;
/**
 * The callback of ads block
 *
 * @typedef { function } OnAdsBlockedCallback
 * @param { AdsBlockedDetails } details - details of OnAdsBlockedCallback.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export type OnAdsBlockedCallback = (details: AdsBlockedDetails) => void;
/**
 * Defines the ads block details.
 *
 * @interface AdsBlockedDetails
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface AdsBlockedDetails {
  /**
   * The url of main frame.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  url: string;
  /**
   * the url of ads.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  adsBlocked: Array<string>;
}
/**
 * 拦截网页可编辑元素拉起软键盘的回调返回值，可以指定使用的键盘类型，并返回给web内核，以控制拉起不同类型的软键盘；
 *
 * @interface WebKeyboardOptions
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface WebKeyboardOptions {
  /**
   * 是否使用系统默认软键盘。true表示使用系统默认软键盘，false表示不使用系统默认软键盘。
   * 默认值：true。
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  useSystemKeyboard: boolean;
  /**
   * 指定系统软键盘enter键的类型，取值范围见输入框架的定义[EnterKeyType]{@link ./../../../@ohos.inputMethod:inputMethod.EnterKeyType}，该参数为可选参数，默
   * 认值为UNSPECIFIED。当useSystemKeyboard为true，并且设置了有效的enterKeyType时候，才有效。
   *
   * @type { ?int }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enterKeyType?: int;
  /**
   * 指定自定义键盘组件builder，可选参数，当useSystemKeyboard为false时，需要设置该参数，然后Web组件会拉起该自定义键盘。
   *
   * @type { ?CustomBuilder }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  customKeyboard?: CustomBuilder;
}
/**
 * Defines the regular expression rule.
 *
 * @typedef UrlRegexRule
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 23 static
 */
export declare interface UrlRegexRule {
  /**
     * Exact match of the second-level domain. For example, the second-level domain of https://www.example.com
     * is example.com, and the second-level domain of https://www.example.com.cn is example.com.cn. If the URL
     * is an IP address, the full IP is matched against the secondLevelDomain.
     *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 23 static
   */
  secondLevelDomain: string;
  /**
     * Full URL regular expression.
     *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 23 static
   */
  rule: string;
}
/**
 * 控制自定义键盘。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare class WebKeyboardController {
  /**
   * WebKeyboardController的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  constructor();
  /**
   * Web输入框中插入字符。
   *
   * @param { string } text - 向Web输入框插入字符。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  insertText(text: string): void;
  /**
   * 从后往前删除Web输入框中指定长度的字符。
   *
   * @param { int } length - 从后往前删除Web输入框中指定长度的字符。<br>取值范围：[-2147483648 , 2147483647]，当参数值大于字符长度时，默认删除光标前面所有字符；参数值为负数时
   * ，不执行删除操作。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  deleteForward(length: int): void;
  /**
   * 从前往后删除Web输入框中指定长度的字符。
   *
   * @param { int } length - 从前往后删除Web输入框中指定长度的字符。<br>取值范围：[-2147483648 , 2147483647]，当参数值大于字符长度时，默认删除光标后面所有字符；参数值为负数时
   * ，不执行删除操作。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  deleteBackward(length: int): void;
  /**
   * 插入功能按键，目前仅支持Enter键类型，取值见[EnterKeyType]{@link ./../../../@ohos.inputMethod:inputMethod.EnterKeyType}。
   *
   * @param { int } key - 向Web输入框传递功能键，目前仅支持Enter键。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  sendFunctionKey(key: int): void;
  /**
   * Close the custom keyboard.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  close(): void;
}
/**
 * 拦截网页可编辑元素拉起软键盘的回调入参，其中包括[WebKeyboardController]{@link web}、可编辑元素的属性。
 *
 * @interface WebKeyboardCallbackInfo
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface WebKeyboardCallbackInfo {
  /**
   * 提供控制自定义键盘的输入、删除、关闭等操作。
   *
   * @type { WebKeyboardController }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  controller: WebKeyboardController;
  /**
   * 触发本次软键盘弹出的网页元素属性。
   *
   * @type { Record<string, string> }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  attributes: Record<string, string>;
}
/**
 * 拦截网页可编辑元素拉起软键盘的回调，一般在点击网页input标签时触发。
 *
 * @typedef { function } WebKeyboardCallback
 * @param { WebKeyboardCallbackInfo } keyboardCallbackInfo - 拦截网页拉起软键盘回调通知的入参，其中包括[WebKeyboardController]{@link web}、可编辑
 *     元素的属性。
 * @returns { WebKeyboardOptions } 回调函数通过返回[WebKeyboardOptions]{@link web:WebKeyboardOptions}来决定ArkWeb内核拉起不同类型的软键盘。
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export type WebKeyboardCallback = (keyboardCallbackInfo: WebKeyboardCallbackInfo) => WebKeyboardOptions;
/**
 * Enum type supplied to {@link getMessageLevel} for receiving the console log level of JavaScript.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum MessageLevel {
  /**
   * Debug level.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  DEBUG = 0,
  /**
   * Error level.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  ERROR = 1,
  /**
   * Info level.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  INFO = 2,
  /**
   * Log level.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  LOG = 3,
  /**
   * Warn level.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  WARN = 4
}
/**
 * The Web's behavior to load from HTTP or HTTPS. Defaults to MixedMode.None.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum MixedMode {
  /**
   * Allows all sources.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  ALL = 0,
  /**
   * Allows sources Compatibly.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  COMPATIBLE = 1,
  /**
   * Don't allow unsecure sources from a secure origin.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  NONE = 2
}
/**
 * The callback of safe browsing check.
 *
 * @typedef { function } OnSafeBrowsingCheckResultCallback
 * @param { ThreatType } threatType - callback information of onSafeBrowsingCheckResult.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export type OnSafeBrowsingCheckResultCallback = (threatType: ThreatType) => void;
/**
 * Enum type supplied to {@link cacheMode} for setting the Web cache mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum CacheMode {
  /**
   * load cache when they are available and not expired, otherwise load online.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  DEFAULT = 0,
  /**
   * load cache when they are available, otherwise load online.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  NONE = 1,
  /**
   * Load online and not cache.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  ONLINE = 2,
  /**
   * load cache and not online.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  ONLY = 3
}
/**
 * 设置Web的过滚动模式为关闭或开启。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum OverScrollMode {
  /**
   * Web过滚动模式关闭。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  NEVER = 0,
  /**
   * Web过滚动模式开启。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  ALWAYS = 1
}
/**
 * 设置手动收起软键盘时Web元素是否失焦。
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum BlurOnKeyboardHideMode {
  /**
   * 软键盘收起时Web组件失焦功能关闭，当用户手动收起软键盘时焦点仍在文本框。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  SILENT = 0,
  /**
   * 软键盘收起时Web组件失焦功能开启，当用户手动收起软键盘时，焦点会从文本框转移到Web的body上，文本框失焦。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  BLUR = 1
}
/**
 * Enum type supplied to {@link darkMode} for setting the web dark mode.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum WebDarkMode {
  /**
   * Disable the web dark mode.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  OFF = 0,
  /**
   * Enable the web dark mode.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  ON = 1,
  /**
   * Make web dark mode follow the system.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  AUTO = 2
}
/**
 * Enum type supplied to {@link captureMode} for setting the web capture mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum WebCaptureMode {
  /**
   * The home screen.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  HOME_SCREEN = 0
}
/**
 * Enum type supplied to {@link threatType} for the website's threat type.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum ThreatType {
  /**
   * Illegal websites.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  THREAT_ILLEGAL = 0,
  /**
   * Fraud websites.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  THREAT_FRAUD = 1,
  /**
   * Websites with security risks.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  THREAT_RISK = 2,
  /**
   * Websites suspected of containing unhealthy content.
   * ArkWeb will not intercept this type of website and apps could handle it themselves.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  THREAT_WARNING = 3,
  /**
   * Security check passed, no risks found.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  THREAT_NONE = 4,
  /**
   * Security check not performed.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  THREAT_UNPROCESSED = 5
}
/**
 * Defines the Media Options.
 *
 * @typedef WebMediaOptions
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface WebMediaOptions {
  /**
   * The time interval for audio playback to resume.
   * 取值范围为全体整数。
   *
   * @type { ?int }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  resumeInterval?: int;
  /**
   * Whether the audio of each web is exclusive.
   *
   * @type { ?boolean }
   *    {@code true} means audio exclusivity for multiple web instances within the application, {@code false} otherwise.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  audioExclusive?: boolean;
  /**
   * The type for audio sessions.
   *
   * @type { ?AudioSessionType }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  audioSessionType?: AudioSessionType;
}
/**
 * Defines the screen capture configuration.
 *
 * @typedef ScreenCaptureConfig
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface ScreenCaptureConfig {
  /**
   * The mode for selecting the recording area.
   *
   * @type { WebCaptureMode }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  captureMode: WebCaptureMode;
}
/**
 * Define the handler to exit the full screen mode, related to the {@link onFullScreenEnter} event.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare class FullScreenExitHandler {
  /**
   * WebKeyboardController的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  constructor();
  /**
   * Exit the full screen mode.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  exitFullScreen(): void;
}
/**
 * Defines the event details when the web component enter full screen mode.
 *
 * @typedef FullScreenEnterEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface FullScreenEnterEvent {
  /**
   * A function handle to exit full-screen mode.
   *
   * @type { FullScreenExitHandler }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  handler: FullScreenExitHandler;
  /**
   * The intrinsic width of the video if the fullscreen element contains video element, expressed in CSS pixels.
   * 取值范围为全体整数。
   *
   * @type { ?int }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  videoWidth?: int;
  /**
   * The intrinsic height of the video if the fullscreen element contains video element, expressed in CSS pixels.
   * 单位为： 像素，取值范围为全体整数。
   *
   * @type { ?int }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  videoHeight?: int;
}
/**
 * The callback when the web component enter full screen mode.
 *
 * @typedef { function } OnFullScreenEnterCallback
 * @param { FullScreenEnterEvent } event - callback information of onFullScreenEnter.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export type OnFullScreenEnterCallback = (event: FullScreenEnterEvent) => void;
/**
 * The callback when mouse event is triggered in native embed area
 *
 * @param { NativeEmbedMouseInfo } event - 原生嵌入区域中鼠标事件的回调信息。
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export type MouseInfoCallback = (event: NativeEmbedMouseInfo) => void;
/**
 * 返回的渲染进程退出的具体原因。
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum RenderExitReason {
  /**
   * 渲染进程异常退出，可能原因包括：渲染进程启动超时、达到进程数量上限导致系统回收旧渲染进程、多个页签同时关闭等。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  PROCESS_ABNORMAL_TERMINATION = 0,
  /**
   * 收到SIGKILL，或被手动终止。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  PROCESS_WAS_KILLED = 1,
  /**
   * 渲染进程崩溃退出，如段错误。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  PROCESS_CRASHED = 2,
  /**
   * 程序内存不足。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  PROCESS_OOM = 3,
  /**
   * 其他原因，比如渲染进程孵化失败。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  PROCESS_EXIT_UNKNOWN = 4
}
/**
 * 上下文菜单自定义隐藏的回调。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export type OnContextMenuHideCallback = () => void;
/**
 * 当检测到输入法绑定成功时，会触发此回调。
 *
 * @typedef { function } OnInputmethodAttachedCallback
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type OnInputmethodAttachedCallback = () => void;
/**
 * Enum type supplied to {@link error} when onSslErrorEventReceive being called.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum SslError {
  /**
   * General error.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  INVALID = 0,
  /**
   * Hostname mismatch.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  HOST_MISMATCH = 1,
  /**
   * The certificate date is invalid.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  DATE_INVALID = 2,
  /**
   * The certificate authority is not trusted.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  UNTRUSTED = 3
}
/**
 * 文件选择器的模式。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum FileSelectorMode {
  /**
   * 打开上传单个文件。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  FILE_OPEN_MODE = 0,
  /**
   * 打开上传多个文件。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  FILE_OPEN_MULTIPLE_MODE = 1,
  /**
   * 打开上传文件夹模式。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  FILE_OPEN_FOLDER_MODE = 2,
  /**
   * 文件保存模式。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  FILE_SAVE_MODE = 3
}
/**
 * Enum type supplied to {@link layoutMode} for setting the web layout mode.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum WebLayoutMode {
  /**
   * Web layout follows the system.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  NONE = 0,
  /**
   * Adaptive web layout based on page size.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  FIT_CONTENT = 1
}
/**
 * 触发渲染进程无响应回调的原因。
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum RenderProcessNotRespondingReason {
  /**
   * 发送给渲染进程的input事件响应超时。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  INPUT_TIMEOUT = 0,
  /**
   * 新的网页加载导航响应超时。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  NAVIGATION_COMMIT_TIMEOUT = 1
}
/**
 * Encompassed message information as parameters to {@link onFileSelectorShow} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare class FileSelectorParam {
  /**
   * WebKeyboardController的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  constructor();
  /**
   * Gets the title of this file selector.
   *
   * @returns { string } Return the title of this file selector.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getTitle(): string;
  /**
   * Gets the FileSelectorMode of this file selector.
   *
   * @returns { FileSelectorMode } Return the FileSelectorMode of this file selector.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getMode(): FileSelectorMode;
  /**
   * Gets an array of acceptable MIME type.
   *
   * @returns { Array<string> } Return an array of acceptable MIME type.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getAcceptType(): Array<string>;
  /**
   * Gets whether this file selector use a live media captured value.
   *
   * @returns { boolean } Return {@code true} if captured media; return {@code false} otherwise.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  isCapture(): boolean;
  /**
   * Gets an array of raw acceptable MIME type.
   *
   * @returns { Array<string> } Return an array of raw acceptable MIME type.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getMimeTypes(): Array<string>;
  /**
   * Gets suggested file names.
   *
   * @returns { string } Return the suggested file names.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getSuggestedName(): string;
  /**
   * Get the default path opened when pulling up the selector.
   *
   * @returns { string } Return to the default path opened when pulling up the selector.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getDefaultPath(): string;
  /**
   * Gets a description array of file types.
   *
   * @returns { Array<string> } Return an array of description of the file type.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getDescriptions(): Array<string>;
  /**
   * Gets whether to filter fully matching file types.
   *
   * @returns { boolean } Return whether to filter all matching file types.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  isAcceptAllOptionExcluded(): boolean;
  /**
   * Gets an array of selected types for web page files.
   *
   * @returns { Array<Array<AcceptableFileType>> } Return an array of selected types for web page files.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getAcceptableFileTypes(): Array<Array<AcceptableFileType>>;
}
/**
 * Defines the js result.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare class JsResult {
  /**
   * WebKeyboardController的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  constructor();
  /**
   * Handle the user's JavaScript result if cancel the dialog.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  handleCancel(): void;
  /**
   * Handle the user's JavaScript result if confirm the dialog.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  handleConfirm(): void;
  /**
   * Handle the user's JavaScript result if confirm the prompt dialog.
   *
   * @param { string } result - 
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  handlePromptConfirm(result: string): void;
}
/**
 * Defines the file selector result, related to {@link onFileSelectorShow} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare class FileSelectorResult {
  /**
   * WebKeyboardController的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  constructor();
  /**
   * select a list of files.
   *
   * @param { Array<string> } fileList - 
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  handleFileList(fileList: Array<string>): void;
}
/**
 * Defines the http auth request result, related to {@link onHttpAuthRequest} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare class HttpAuthHandler {
  /**
   * WebKeyboardController的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  constructor();
  /**
   * confirm.
   *
   * @param { string } userName
   * @param { string } password
   * @returns { boolean }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  confirm(userName: string, password: string): boolean;
  /**
   * cancel.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  cancel(): void;
  /**
   * isHttpAuthInfoSaved.
   *
   * @returns { boolean }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  isHttpAuthInfoSaved(): boolean;
}
/**
 * Defines the ssl error request result, related to {@link onSslErrorEventReceive} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare class SslErrorHandler {
  /**
   * WebKeyboardController的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  constructor();
  /**
   * Confirm to use the SSL certificate.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  handleConfirm(): void;
  /**
   * Cancel this request.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  handleCancel(): void;
  /**
   * ArkWeb has encountered an SSL certificate error, and this interface indicates whether to terminate or
   * continue displaying the error to users.
   *
   * @param { boolean } abortLoading If abortLoading is true, the current request will be canceled and the
   *     user will remain on the current page. If it is false, the SSL error will not be ignored, and a
   *     blank page will be displayed. If a default error page is enabled, the default error page will be
   *     shown instead. The default value is false.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  handleCancel(abortLoading: boolean): void;
}
/**
 * Defines the client certificate request result, related to {@link onClientAuthenticationRequest} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare class ClientAuthenticationHandler {
  /**
   * WebKeyboardController的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  constructor();
  /**
   * Confirm to use the specified private key and client certificate chain.
   *
   * @param { string } priKeyFile - The file that store private key.
   * @param { string } certChainFile - The file that store client certificate chain.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  confirm(priKeyFile: string, certChainFile: string): void;
  /**
   * Confirm to use the authUri.The authUri can be obtained from certificate management.
   *
   * @param { string } authUri is the key of credentials.The credentials contain sign info and client certificates info.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
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
   * @since 23 static
   */
  confirm(identity: string, credentialTypeOrCertChainFile: CredentialType | string): void;
  /**
   * Cancel this certificate request.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  cancel(): void;
  /**
   * Ignore this certificate request temporarily.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  ignore(): void;
}
/**
 * Defines the accessible resource type, related to {@link onPermissionRequest} method.
 *
 * @enum { string }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum ProtectedResourceType {

  /**
   * The MidiSysex resource. Currently, only permission events can be reported. MIDI devices are not yet supported.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  MIDI_SYSEX = 'TYPE_MIDI_SYSEX',

  /**
   * The video capture resource, such as camera.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  VIDEO_CAPTURE = 'TYPE_VIDEO_CAPTURE',

  /**
   * The audio capture resource, such as microphone.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  AUDIO_CAPTURE = 'TYPE_AUDIO_CAPTURE',
  /**
   * The sensor resource, such as accelerometer.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  SENSOR = 'TYPE_SENSOR'
}
/**
 * 权限请求。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare class PermissionRequest {
  /**
   * WebKeyboardController的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  constructor();
  /**
   * Reject the request.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  deny(): void;
  /**
   * Gets the source if the webpage that attempted to access the restricted resource.
   *
   * @returns { string }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getOrigin(): string;
  /**
   * Gets the resource that the webpage is trying to access.
   *
   * @returns { Array<string> }    * @syscap SystemCapability.Web.Webview.Core
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getAccessibleResource(): Array<string>;
  /**
   * Grant origin access to a given resource.
   *
   * @param { Array<string> } resources
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  grant(resources: Array<string>): void;
}
/**
 * Defines the onScreenCapture callback, related to {@link onScreenCapture} method.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare class ScreenCaptureHandler {
  /**
   * Constructor.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  constructor();
  /**
   * Gets the source of the webpage that attempted to access the restricted resource.
   *
   * @returns { string }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getOrigin(): string;
  /**
   * Grant origin access to a given resource.
   * @param { ScreenCaptureConfig } config The screen capture configuration.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  grant(config: ScreenCaptureConfig): void;
  /**
   * Reject the request.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  deny(): void;
}
/**
 * Defines the onDataResubmission callback, related to {@link onDataResubmission} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare class DataResubmissionHandler {
  /**
   * WebKeyboardController的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  constructor();
  /**
   * Resend related form data.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  resend(): void;
  /**
   * Do not resend related form data.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  cancel(): void;
}
/**
 * 新建Web组件的WebviewController对象。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare class ControllerHandler {
  /**
   * WebKeyboardController的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  constructor();
  /**
   * 设置WebviewController对象，如果不需要打开新窗口请设置为null。
   *
   * @param { WebviewController } controller
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  setWebController(controller: WebviewController): void;
}
/**
 * 触发上下文菜单的事件来源。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum ContextMenuSourceType {
  /**
   * 其他事件来源。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  NONE = 0,
  /**
   * 鼠标事件。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  MOUSE = 1,
  /**
   * 长按事件。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  LONG_PRESS = 2
}
/**
 * 触发上下文菜单的网页元素类型（增强获取类型能力）。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum ContextMenuMediaType {
  /**
   * 默认值，表示当前上下文菜单不关联任何媒体类型（例如右键文本或空白区域）。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  NONE = 0,
  /**
   * 图片类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  IMAGE = 1
}
/**
 * 触发上下文菜单的网页元素类型（增强获取类型能力）。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum ContextMenuDataMediaType {
  /**
   * 默认值，表示当前上下文菜单不关联任何媒体类型（例如右键文本或空白区域）。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  NONE = 0,
  /**
   * 图片类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  IMAGE = 1,
  /**
   * 视频类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  VIDEO = 2,
  /**
   * 音频类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  AUDIO = 3,
  /**
   * Canvas类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  CANVAS = 4
}
/**
 * 输入框类型。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum ContextMenuInputFieldType {
  /**
   * 非输入框。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  NONE = 0,
  /**
   * 纯文本类型，包括text、search、email等。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  PLAIN_TEXT = 1,
  /**
   * 密码类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  PASSWORD = 2,
  /**
   * 数字类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  NUMBER_DATA = 3,
  /**
   * 电话号码类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  TELEPHONE = 4,
  /**
   * 其他类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  OTHER = 5
}
/**
 * Defines the embed status, related to {@link NativeEmbedDataInfo}.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum NativeEmbedStatus {
  /**
   * The embed tag create.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  CREATE = 0,
  /**
   * The embed tag update.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  UPDATE = 1,
  /**
     * The embed tag destroy.
     *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  DESTROY = 2,
  /**
   * The embed tag enter backforward cache.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  ENTER_BFCACHE = 3,
  /**
   * The embed tag leave backforward cache.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  LEAVE_BFCACHE = 4
}
/**
 * 支持以按位或的方式使用此枚举。例如，如果需要同时支持CAN_CUT、CAN_COPY和CAN_SELECT_ALL，可使用CAN_CUT | CAN_COPY | CAN_SELECT_ALL或11。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum ContextMenuEditStateFlags {
  /**
   * 不可编辑。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  NONE = 0,
  /**
   * 支持剪切。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  CAN_CUT = 1 << 0,
  /**
   * 支持拷贝。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  CAN_COPY = 1 << 1,
  /**
   * 支持粘贴。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  CAN_PASTE = 1 << 2,
  /**
   * 支持全选。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  CAN_SELECT_ALL = 1 << 3
}
/**
 * Enum type supplied to {@link navigationType} for the navigation's type.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum WebNavigationType {
  /**
   * Unknown type.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  UNKNOWN = 0,
  /**
   * A new entry was created due to a navigation happened on the main frame.
   * Contains all situations that will generate a mainframe navigation entry,
   * which means that navigations to a hash on the same document or history.pushState
   * also belong to this type.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
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
   * @since 23 static
   */
  MAIN_FRAME_EXISTING_ENTRY = 2,
  /**
   * A navigation happened on subframe which was triggered by user.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  NAVIGATION_TYPE_NEW_SUBFRAME = 4,
  /**
   * A navigation happened on the subframe automatically.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  NAVIGATION_TYPE_AUTO_SUBFRAME = 5
}
/**
 * 定义Web组件的渲染方式，默认为异步渲染模式。建议使用异步渲染模式，异步渲染模式有更好的性能和更低的功耗。
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum RenderMode {
  /**
   * Web组件异步渲染模式，ArkWeb组件作为图形surface节点，独立送显，Web组件的宽度最大规格不超过7,680 px（物理像素）。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  ASYNC_RENDER = 0,
  /**
   * Web组件同步渲染模式，ArkWeb组件作为图形canvas节点，跟随系统组件一起送显，可以渲染更长的Web组件内容，Web组件的宽度最大规格不超过
   * 500,000 px（物理像素）。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  SYNC_RENDER = 1
}
/**
 * Defines the viewport-fit type, related to {@link ViewportFit}.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum ViewportFit {
  /**
   * No effect - the whole web page is viewable(default)
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  AUTO = 0,
  /**
   * The initial layout viewport and the visual viewport are set to the
   * largest rectangle which is inscribe in the display of the device.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  CONTAINS = 1,
  /**
   * The initial layout viewport and the visual viewport are set to the
   * circumscribe rectangle of the physical screen of the device.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  COVER = 2
}
/**
 * Defines the context menu param, related to {@link WebContextMenuParam} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare class WebContextMenuParam {
  /**
   * WebKeyboardController的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  constructor();
  /**
   * Horizontal offset coordinates of the menu within the Web component.
   *
   * @returns { int } The context menu x coordinate.
   *     Returns a non-negative integer if normal, otherwise returns -1.
   *     Unit: px.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  x(): int;
  /**
   * Vertical offset coordinates for the menu within the Web component.
   *
   * @returns { int } The context menu y coordinate.
   *     Returns a non-negative integer if normal, otherwise returns -1.
   *     Unit: px.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  y(): int;
  /**
   * If the long-press location is the link returns the link's security-checked URL.
   *
   * @returns { string } If relate to a link return link url, else return null.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getLinkUrl(): string;
  /**
   * If the long-press location is the link returns the link's original URL.
   *
   * @returns { string } If relate to a link return unfiltered link url, else return null.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getUnfilteredLinkUrl(): string;
  /**
   * Returns the SRC URL if the selected element has a SRC attribute.
   *
   * @returns { string } If this context menu is "src" attribute, return link url, else return null.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getSourceUrl(): string;
  /**
   * Long press menu location has image content.
   *
   * @returns { boolean } Return whether this context menu has image content.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  existsImageContents(): boolean;
  /**
   * Returns the type of context node.
   *
   * @returns { ContextMenuMediaType } Returns the type of context node.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getMediaType(): ContextMenuMediaType;
  /**
   * Returns the text of the selection.
   *
   * @returns { string } Returns the text of the selection.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getSelectionText(): string;
  /**
   * Returns the context menu source type.
   *
   * @returns { ContextMenuSourceType }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getSourceType(): ContextMenuSourceType;
  /**
   * Returns input field type if the context menu was invoked on an input field.
   *
   * @returns { ContextMenuInputFieldType } Input field type if the context menu was invoked on an input field.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getInputFieldType(): ContextMenuInputFieldType;
  /**
   * Returns whether the context is editable.
   *
   * @returns { boolean }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  isEditable(): boolean;
  /**
   * Returns the context editable flags {@link ContextMenuEditStateFlags}.
   *
   * @returns { int }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getEditStateFlags(): int;
  /**
     * Returns the selection menu preview width.
     *
   * @returns { int } The preview menu width. Unit: px.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getPreviewWidth(): int;
  /**
   * Returns the selection menu preview height.
   *
   * @returns { int } The preview menu height. Unit: px.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getPreviewHeight(): int;
  /**
   * Returns the type of context node.
   *
   * @returns { ContextMenuDataMediaType } Returns the type of context node.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getContextMenuMediaType(): ContextMenuDataMediaType;
}
/**
 * Defines the context menu result, related to {@link WebContextMenuResult} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare class WebContextMenuResult {
  /**
   * WebKeyboardController的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  constructor();
  /**
   * When close context menu without other call in WebContextMenuResult,
   * User should call this function to close menu
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  closeContextMenu(): void;
  /**
   *
   *
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  copyImage(): void;
  /**
   * Executes the copy operation related to this context menu.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  copy(): void;
  /**
   * Executes the paste operation related to this context menu.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  paste(): void;
  /**
   * Executes the cut operation related to this context menu.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  cut(): void;
  /**
   * Executes the selectAll operation related to this context menu.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  selectAll(): void;
  /**
   * Executes the redo operation related to this context menu.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  redo(): void;
  /**
   * Executes the undo operation related to this context menu.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  undo(): void;
  /**
   * Executes the paste and match style operation related to this context menu.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  pasteAndMatchStyle(): void;
  /**
   * Request to fill the password vault contents into the input field.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  requestPasswordAutoFill(): void;
  /**
   * 执行与此上下文菜单关联的“另存为图像”操作将触发下载过程。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 24 static
   */
  saveImage(): void;
}
/**
 * Encompassed message information as parameters to {@link onConsole} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare class ConsoleMessage {
  /**
   * WebKeyboardController的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  constructor();
  /**
   * Gets the message of a console message.
   *
   * @returns { string } Return the message of a console message.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getMessage(): string;
  /**
   * Gets the Web source file's path and name of a console message.
   *
   * @returns { string } Return the Web source file's path and name of a console message.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getSourceId(): string;
  /**
   * Gets the line number of a console message.
   *
   * @returns { int } Return the line number of a console message.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getLineNumber(): int;
  /**
   * Gets the message level of a console message.
   *
   * @returns { MessageLevel } Return the message level of a console message, which can be {@link MessageLevel}.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getMessageLevel(): MessageLevel;
  /**
     * Gets the source of a console message.
     *
   * @returns { ConsoleMessageSource } Return the source of a console message.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getSource(): ConsoleMessageSource;
}
/**
 * Defines the Web resource request.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare class WebResourceRequest {
  /**
   * WebKeyboardController的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  constructor();
  /**
   * Gets request headers.
   *
   * @returns { Array<Header> } Return the request headers
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getRequestHeader(): Array<Header>;
  /**
   * Gets the request URL.
   *
   * @returns { string } Return the request URL.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getRequestUrl(): string;
  /**
   * Check whether the request is associated with gesture.
   *
   * @returns { boolean } Return {@code true} if the request is associated with gesture;
   *     return {@code false} otherwise.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  isRequestGesture(): boolean;
  /**
   * Check whether the request is for getting the main frame.
   *
   * @returns { boolean } Return {@code true} if the request is associated with gesture for getting the main frame;
   *     return {@code false} otherwise.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  isMainFrame(): boolean;
  /**
   * Check whether the request redirects.
   *
   * @returns { boolean } Return {@code true} if the request redirects; return {@code false} otherwise.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  isRedirect(): boolean;
  /**
   * Get request method.
   *
   * @returns { string } Return the request method.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getRequestMethod(): string;
}
/**
 * Defines the Web resource response.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare class WebResourceResponse {
  /**
   * WebKeyboardController的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  constructor();
  /**
   * Gets the response data.
   *
   * @returns { string } Return the response data.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getResponseData(): string;
  /**
   * Gets the response data.
   *
   * @returns { string | int | ArrayBuffer | Resource | undefined } Return the response data.
   *                                                                string type indicate string in HTML format.
   *                                                                number type indicate file handle.
   *                                                                Resource type indicate $rawfile resource.
   *                                                                ArrayBuffer type indicate binary data.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getResponseDataEx(): string | int | ArrayBuffer | Resource | undefined;
  /**
   * Gets the response encoding.
   *
   * @returns { string } Return the response encoding.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getResponseEncoding(): string;
  /**
   * Gets the response MIME type.
   *
   * @returns { string } Return the response MIME type.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getResponseMimeType(): string;
  /**
   * Gets the reason message.
   *
   * @returns { string } Return the reason message.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getReasonMessage(): string;
  /**
   * Gets the response headers.
   *
   * @returns { Array<Header> } Return the response headers.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getResponseHeader(): Array<Header>;
  /**
   * Gets the response code.
   *
   * @returns { int } Return the response code.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getResponseCode(): int;
  /**
   * Sets the response data.
   *
   * @param { string | int | Resource | ArrayBuffer } data - the response data.
   *     string type indicate strings in HTML format.
   *     number type indicate file handle.
   *     Resource type indicate $rawfile resource.
   *     ArrayBuffer type indicate binary data.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  setResponseData(data: string | int | Resource | ArrayBuffer): void;
  /**
   * Sets the response encoding.
   *
   * @param { string } encoding the response encoding.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  setResponseEncoding(encoding: string): void;
  /**
   * Sets the response MIME type.
   *
   * @param { string } mimeType the response MIME type.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  setResponseMimeType(mimeType: string): void;
  /**
   * Sets the reason message.
   *
   * @param { string } reason the reason message.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  setReasonMessage(reason: string): void;
  /**
   * Sets the response headers.
   *
   * @param { Array<Header> } header the response headers.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  setResponseHeader(header: Array<Header>): void;
  /**
   * Sets the response code.
   *
   * @param { int } code the response code.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  setResponseCode(code: int): void;
  /**
   * Sets the response is ready or not.
   *
   * @param { boolean } IsReady whether the response is ready.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  setResponseIsReady(IsReady: boolean): void;
  /**
   * Gets whether the response is ready.
   *
   * @returns { boolean } True indicates the response data is ready and false is not ready.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getResponseIsReady(): boolean;
}
/**
 * Defines the Web's request/response header.
 *
 * @typedef Header
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface Header {
  /**
   * Gets the key of the request/response header.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  headerKey: string;
  /**
   * Gets the value of the request/response header.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  headerValue: string;
}
/**
 * Defines the Web resource error.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare class WebResourceError {
  /**
   * WebKeyboardController的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  constructor();
  /**
   * Gets the info of the Web resource error.
   *
   * @returns { string } Return the info of the Web resource error.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getErrorInfo(): string;
  /**
   * Gets the code of the Web resource error.
   *
   * @returns { int } Return the code of the Web resource error.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  getErrorCode(): int;
}
/**
 * Defines the js geolocation request.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare class JsGeolocation {
  /**
   * WebKeyboardController的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  constructor();
  /**
   * Report the geolocation permission status from users.
   *
   * @param { string } origin - The origin that ask for the geolocation permission.
   * @param { boolean } allow - The geolocation permission status.
   * @param { boolean } retain - Whether to allow the geolocation permission status to be saved to the system.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  invoke(origin: string, allow: boolean, retain: boolean): void;
}
/**
 * Defines the touch event result.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare class EventResult {
  /**
   * WebKeyboardController的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  constructor();
  /**
   * Set whether the event is consumed.
   *
   * @param { boolean } result -  True if the event is consumed.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  setGestureEventResult(result: boolean): void;
  /**
   * Set whether the event is consumed.
   *
   * @param { boolean } result -  True if the event is consumed.
   * @param { boolean } stopPropagation - Stops the propagation of events farther along.Default value is true.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  setGestureEventResult(result: boolean, stopPropagation: boolean): void;
  /**
   * Set whether the mouse event is consumed.
   *
   * @param { boolean } result -  True if the event is consumed.
   * @param { boolean } [stopPropagation] - {@code true} means to prevent mouse events from bubbling up,
   *     {@code false} otherwise. The default value is true.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  setMouseEventResult(result: boolean, stopPropagation?: boolean): void;
}
/**
 * 通过[接口](docroot://reference/apis-arkweb/arkts-basic-components-web.md#接口)定义Web选项。
 *
 * @typedef WebOptions
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface WebOptions {
  /**
   * 网页资源地址。如果访问本地资源文件，请使用$rawfile或者resource协议。如果加载应用包外沙箱路径的本地资源文件（文件支持html和txt类型），请使用file://沙箱文件路径。
   *
   * src不能通过状态变量（例如：@State）动态更改地址，如需更改，请通过
   * [loadUrl()]{@link ./../../../@ohos.web.webview:webview.WebviewController.loadUrl}重新加载。
   *
   * @type { string | Resource }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  src: string | Resource;
  /**
   * 控制器，通过controller可以控制Web组件各种行为（包括页面导航、生命周期状态、JavaScript交互等行为）。
   *
   * @type { WebviewController }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  controller: WebviewController;
  /**
   * 表示当前Web组件的渲染方式，`RenderMode.ASYNC_RENDER`表示Web组件异步渲染，`RenderMode.SYNC_RENDER`表示支持Web组件同步渲染能力，默认值`
   * RenderMode.ASYNC_RENDER`，该模式不支持动态调整。
   *
   * @type { ?RenderMode }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  renderMode?: RenderMode;
  /**
   * 表示当前创建的webview是否是隐私模式。true表示创建隐私模式的webview，false表示创建正常模式的webview。
   *
   * 默认值：false。
   *
   * 传入undefined或null时为false。
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  incognitoMode?: boolean;
  /**
   * 表示当前Web组件指定共享渲染进程的token，多渲染进程模式下，相同token的Web组件会优先尝试复用与token相绑定的渲染进程。token与渲染进程的绑定发生在渲染进程的初始化阶段。当渲染进程没有关联的Web组件时，其与
   * token绑定关系将被移除。
   *
   * 默认值： ""。
   *
   * @type { ?string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  sharedRenderProcessToken?: string;
  /**
   * 设定鼠标事件是否被转换成触摸事件。
   *
   * 默认值：false。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  emulateTouchFromMouseEvent?: boolean;
}
/**
 * Defines the contents of the JavaScript to be injected.
 *
 * @typedef ScriptItem
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface ScriptItem {
  /**
   * Sets the JavaScript to be injected.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  script: string;
  /**
   * Sets the rules of the JavaScript.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  scriptRules: Array<string>;
  /**
     * Set the regular expression rule that allows execution of this JavaScript.
     *
   * @type { ?Array<UrlRegexRule> }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 23 static
   */
  urlRegexRules?: Array<UrlRegexRule>;
}
/**
 * Defines the load committed details.
 *
 * @typedef LoadCommittedDetails
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface LoadCommittedDetails {
  /**
   * Check whether the request is for getting the main frame.
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
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
   * @since 23 static
   */
  isSameDocument: boolean;
  /**
   * True if the committed entry has replaced the existing one. Note that in
   * case of subframes, the NavigationEntry and FrameNavigationEntry objects
   * don't actually get replaced - they're reused, but with updated attributes.
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  didReplaceEntry: boolean;
  /**
   * The type of the navigation.
   *
   * @type { WebNavigationType }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  navigationType: WebNavigationType;
  /**
   * The url to navigate.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  url: string;
}
/**
 * Defines the Intelligent Tracking Prevention details.
 *
 * @typedef IntelligentTrackingPreventionDetails
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface IntelligentTrackingPreventionDetails {
  /**
   * The host of website url.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  host: string;
  /**
   * The host of tracker url.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  trackerHost: string;
}
/**
 * Defines the embed info.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface NativeEmbedInfo {
  /**
   * The embed id.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  id?: string;
  /**
   * Only when enableEmbedMode is true and type is marked as native/xxx will be recognized as a same layer component.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  type?: string;
  /**
   * The embed tag src.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  src?: string;
  /**
   * The coordinate position of embed element relative to the webComponent.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  position?: Position;
  /**
   * The embed tag width.
   * 取值限定为整数。
   * <br>单位:像素。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  width?: int;
  /**
   * The embed tag height.
   * 取值限定为整数。
   * <br>单位:像素。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  height?: int;
  /**
   * The embed tag url.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  url?: string;
  /**
   * The embed tag name.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  tag?: string;
  /**
   * The embed param list information used by object tag.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  params?: Map<string, string>;
}
/**
 * Defines the Embed Data info.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface NativeEmbedDataInfo {
  /**
   * The embed status.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  status?: NativeEmbedStatus;
  /**
   * The surface id.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  surfaceId?: string;
  /**
   * The embed id.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  embedId?: string;
  /**
   * The embed info.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  info?: NativeEmbedInfo;
}
/**
 * Defines the Embed Visibility info.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface NativeEmbedVisibilityInfo {
  /**
   * The embed visibility.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  visibility: boolean;
  /**
   * The embed id.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  embedId: string;
}
/**
 * Defines the user touch info.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface NativeEmbedTouchInfo {
  /**
   * The native embed id.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  embedId?: string;
  /**
   * An event sent when the state of contacts with a touch-sensitive surface changes.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  touchEvent?: TouchEvent;
  /**
   * Handle the user's touch result.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  result?: EventResult;
}
/**
 * Defines the user mouse info on embed layer.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface NativeEmbedMouseInfo {
  /**
   * The native embed id.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  embedId?: string;
  /**
   * An event sent when the state of contacts with a mouse-sensitive surface changes.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  mouseEvent?: MouseEvent;
  /**
   * Handle the user's mouse result.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  result?: EventResult;
}
/**
 * Defines the first content paint rendering of web page.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface FirstMeaningfulPaint {
  /**
   * Start time of navigation.
   * <br>单位:微秒。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  navigationStartTime?: long;
  /**
   * Paint time of first meaningful content.
   * <br>单位:毫秒。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  firstMeaningfulPaintTime?: long;
}
/**
 * Defines the largest content paint rendering of web page.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface LargestContentfulPaint {
  /**
   * Start time of navigation.
   * <br>单位:微秒。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  navigationStartTime?: long;
  /**
   * Paint time of largest image.
   * <br>单位:毫秒。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  largestImagePaintTime?: long;
  /**
   * Paint time of largest text.
   * <br>单位:毫秒。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  largestTextPaintTime?: long;
  /**
   * Bits per pixel of image.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  imageBPP?: double;
  /**
   * Load start time of largest image.
   * <br>单位:毫秒。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  largestImageLoadStartTime?: long;
  /**
   * Load end time of largest image.
   * <br>单位:毫秒。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  largestImageLoadEndTime?: long;
}
/**
 * 提供渲染进程无响应的详细信息。
 *
 * @interface RenderProcessNotRespondingData
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface RenderProcessNotRespondingData {
  /**
   * 网页的JavaScript调用栈信息。
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  jsStack: string;
  /**
   * 网页的进程id。
   *
   * @type { int }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  pid: int;
  /**
   * 触发渲染进程无响应回调的原因。
   *
   * @type { RenderProcessNotRespondingReason }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  reason: RenderProcessNotRespondingReason;
}
/**
 * Defines the triggered function at the end of web page loading.
 *
 * @typedef OnPageEndEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnPageEndEvent {
  /**
   * The url of page.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  url: string;
}
/**
 * Defines the triggered function at the begin of web page loading.
 *
 * @typedef OnPageBeginEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnPageBeginEvent {
  /**
   * The url of page.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  url: string;
}
/**
 * Defines the triggered function at the begin of web page loading.
 *
 * @typedef OnLoadStartedEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnLoadStartedEvent {
  /**
   * The url to be loaded.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  url: string;
}
/**
 * Defines the triggered function at the end of web page loading.
 *
 * @typedef OnLoadFinishedEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnLoadFinishedEvent {
  /**
   * The url to be loaded.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  url: string;
}
/**
 * Defines the triggered function when the page loading progress changes.
 *
 * @typedef OnProgressChangeEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnProgressChangeEvent {
  /**
   * The new progress of the page.
   *
   * @type { int }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  newProgress: int;
}
/**
 * Defines the triggered function when the title of the main application document changes.
 *
 * @typedef OnTitleReceiveEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnTitleReceiveEvent {
  /**
   * The title of the page.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  title: string;
  /**
   * Mark the source of the title. If it is true, the title is derived from the H5 title element;
   * If it is false, it is calculated from the URL. By default, it is calculated from the URL.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  isRealTitle?: boolean;
}
/**
 * Defines the triggered function when requesting to show the geolocation permission.
 *
 * @typedef OnGeolocationShowEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnGeolocationShowEvent {
  /**
   * Origin of the page.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  origin: string;
  /**
   * Defines the js geolocation request.
   *
   * @type { JsGeolocation }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  geolocation: JsGeolocation;
}
/**
 * 定义网页触发 `alert()` 告警时的回调函数。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnAlertEvent {
  /**
   * 当前显示弹窗的网页的URL。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  url: string;
  /**
   * 显示在弹窗中的信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  message: string;
  /**
   * 通知Web组件用户的操作结果。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  result: JsResult;
}
/**
 * Defines the triggered function when the web page wants to confirm navigation from JavaScript onbeforeunload.
 *
 * @typedef OnBeforeUnloadEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnBeforeUnloadEvent {
  /**
   * The url of the page.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  url: string;
  /**
   * The message of confirm dialog.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  message: string;
  /**
   *  Handle the user's JavaScript result.
   *
   * @type { JsResult }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  result: JsResult;
  /**
   * The isReload parameter is set to true when the page is refreshed;
   * otherwise, it remains false. Default is false.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  isReload?: boolean;
}
/**
 * 定义网页触发 `confirm()` 弹窗时的回调函数。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnConfirmEvent {
  /**
   * 当前显示弹窗的网页的URL。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  url: string;
  /**
   * 弹窗中显示的信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  message: string;
  /**
   * 通知Web组件用户的操作结果。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  result: JsResult;
}
/**
 * 定义网页触发 `prompt()` 弹窗时的回调函数。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnPromptEvent {
  /**
   * 当前显示弹窗的网页的URL。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  url: string;
  /**
   * 显示在弹窗中的信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  message: string;
  /**
   * 对话框默认返回的信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  value: string;
  /**
   * 通知Web组件用户的操作结果。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  result: JsResult;
}
/**
 * Defines the triggered function when the web page receives a JavaScript console message.
 *
 * @typedef OnConsoleEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnConsoleEvent {
  /**
   * Console message information of the event.
   *
   * @type { ConsoleMessage }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  message: ConsoleMessage;
}
/**
 * Defines the triggered function when the web page receives a web resource loading error.
 *
 * @typedef OnErrorReceiveEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnErrorReceiveEvent {
  /**
   * The information of request.
   *
   * @type { WebResourceRequest }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  request: WebResourceRequest;
  /**
   * The information of error.
   *
   * @type { WebResourceError }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  error: WebResourceError;
}
/**
 * Defines the triggered function when the web page receives a web resource loading HTTP error.
 *
 * @typedef OnHttpErrorReceiveEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnHttpErrorReceiveEvent {
  /**
   * The information of request.
   *
   * @type { WebResourceRequest }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  request: WebResourceRequest;
  /**
   *  Web resource response of event.
   *
   * @type { WebResourceResponse }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  response: WebResourceResponse;
}
/**
 * Defines the triggered function when starting to download.
 *
 * @typedef OnDownloadStartEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnDownloadStartEvent {
  /**
   * 文件下载的URL。
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  url: string;
  /**
   * The userAgent of page.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  userAgent: string;
  /**
   * The contentDisposition of page.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  contentDisposition: string;
  /**
   * The mimetype of page.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  mimetype: string;
  /**
   * The contentLength of page.
   *
   * @type { long }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  contentLength: long;
}
/**
 * Defines the triggered callback when the Web page refreshes accessed history.
 *
 * @typedef OnRefreshAccessedHistoryEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnRefreshAccessedHistoryEvent {
  /**
   * URL of the visit.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  url: string;
  /**
   * If true, the page is being reloaded, otherwise,  means that the page is newly loaded.
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  isRefreshed: boolean;
  /**
   * Whether is triggered by main frame.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  isMainFrame?: boolean;
}
/**
 * 定义渲染过程退出时触发。
 *
 * @typedef OnRenderExitedEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnRenderExitedEvent {
  /**
   * 渲染进程异常退出的具体原因。
   *
   * @type { RenderExitReason }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  renderExitReason: RenderExitReason;
}
/**
 * 定义文件选择器结果。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnShowFileSelectorEvent {
  /**
   * 用于通知Web组件文件选择的结果。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  result: FileSelectorResult;
  /**
   * 文件选择器的相关信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  fileSelector: FileSelectorParam;
}
/**
 * Defines the triggered when the url loading.
 *
 * @typedef OnResourceLoadEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnResourceLoadEvent {
  /**
   * The URL of the loaded resource file.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  url: string;
}
/**
 * 定义当前页面显示比例的变化时触发。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnScaleChangeEvent {
  /**
   * 变化前的显示比例百分比。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  oldScale: double;
  /**
   * 变化后的显示比例百分比。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  newScale: double;
}
/**
 * Defines the triggered when the browser needs credentials from the user.
 *
 * @typedef OnHttpAuthRequestEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnHttpAuthRequestEvent {
  /**
   * Defines the http auth request result.
   *
   * @type { HttpAuthHandler }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  handler: HttpAuthHandler;
  /**
   * Host of the page.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  host: string;
  /**
   * realm of the page.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  realm: string;
}
/**
 * Defines the triggered callback when the resources loading is intercepted.
 *
 * @typedef OnInterceptRequestEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnInterceptRequestEvent {
  /**
   * The information of request.
   *
   * @type { WebResourceRequest }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  request: WebResourceRequest;
}
/**
 * Defines the triggered callback when the host application that web content from the specified origin is
 *     attempting to access the resources.
 *
 * @typedef OnPermissionRequestEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnPermissionRequestEvent {
  /**
   * Defines the onPermissionRequest callback.
   *
   * @type { PermissionRequest }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  request: PermissionRequest;
}
/**
 * Defines the triggered callback when the host application that web content from the specified origin is
 *     requesting to capture screen.
 *
 * @typedef OnScreenCaptureRequestEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnScreenCaptureRequestEvent {
  /**
   * Notifies the user of the operation behavior of the web component.
   *
   * @type { ScreenCaptureHandler }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  handler: ScreenCaptureHandler;
}
/**
 * 定义调用时触发的回调，以允许自定义显示上下文菜单。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnContextMenuShowEvent {
  /**
   * 菜单相关参数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  param: WebContextMenuParam;
  /**
   * 菜单相应事件传入内核。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  result: WebContextMenuResult;
}
/**
 * Defines function Triggered when the host application call searchAllAsync.
 *
 * @typedef OnSearchResultReceiveEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnSearchResultReceiveEvent {
  /**
   * The ordinal number of the currently matched lookup item (starting from 0).
   *
   * @type { int }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  activeMatchOrdinal: int;
  /**
   * The number of all matched keywords.
   *
   * @type { int }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  numberOfMatches: int;
  /**
   * Indicates whether the current in-page search operation is complete. The method may be called
   * back multiple times until isDoneCounting is true.
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  isDoneCounting: boolean;
}
/**
 * 定义滚动条滑动到指定位置时触发。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnScrollEvent {
  /**
   * 以网页最左端为基准，水平滚动条滚动所在位置。
   * 单位：vp。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  xOffset: double;
  /**
   * 以网页最上端为基准，竖直滚动条滚动所在位置。
   * 单位：vp。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  yOffset: double;
}
/**
 * Defines the triggered callback when the Web page receives an ssl Error.
 *
 * @typedef OnSslErrorEventReceiveEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnSslErrorEventReceiveEvent {
  /**
   * Notifies the user of the operation behavior of the web component.
   *
   * @type { SslErrorHandler }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  handler: SslErrorHandler;
  /**
   * Error codes.
   *
   * @type { SslError }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  error: SslError;
  /**
   * Certificate chain data in DER format.
   *
   * @type { ?Array<Uint8Array> }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  certChainData?: Array<Uint8Array>;
}
/**
 * Defines the triggered callback when needs ssl client certificate from the user.
 *
 * @typedef OnClientAuthenticationEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnClientAuthenticationEvent {
  /**
   * Notifies the user of the operation behavior of the web component.
   *
   * @type { ClientAuthenticationHandler }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  handler: ClientAuthenticationHandler;
  /**
   * The hostname of the requesting certificate server.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  host: string;
  /**
   * The port number of the request certificate server.
   *
   * @type { int }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  port: int;
  /**
   * Acceptable asymmetric key types.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  keyTypes: Array<string>;
  /**
   * Certificates that match the private key are acceptable to the issuer.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  issuers: Array<string>;
}
/**
 * 定义网页要求用户创建窗口时触发的回调。
 *
 * @typedef OnWindowNewEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnWindowNewEvent {
  /**
   * true代表请求创建对话框，false代表新标签页。
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  isAlert: boolean;
  /**
   * true代表用户触发，false代表非用户触发。
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  isUserTrigger: boolean;
  /**
   * 目标url。
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  targetUrl: string;
  /**
   * 用于设置新建窗口的WebviewController实例。
   *
   * @type { ControllerHandler }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  handler: ControllerHandler;
}
/**
 * Defines the triggered callback when the application receive an new url of an apple-touch-icon.
 *
 * @typedef OnTouchIconUrlReceivedEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnTouchIconUrlReceivedEvent {
  /**
   * The apple-touch-icon URL address received.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  url: string;
  /**
   * Corresponding to whether apple-touch-icon is precomposited.
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  precomposed: boolean;
}
/**
 * Defines the triggered callback when the application receive a new favicon for the current web page.
 *
 * @typedef OnFaviconReceivedEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnFaviconReceivedEvent {
  /**
   * Received the Favicon icon for the image.PixelMap object.
   *
   * @type { image.PixelMap }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  favicon: image.PixelMap;
}
/**
 * 定义旧页面不再呈现，新页面即将可见时触发的回调函数。
 *
 * @typedef OnPageVisibleEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnPageVisibleEvent {
  /**
   * 文件下载的URL。
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  url: string;
}
/**
 * Defines the triggered callback to decision whether resend form data or not.
 *
 * @typedef OnDataResubmittedEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnDataResubmittedEvent {
  /**
   * Form data resubmission handle.
   *
   * @type { DataResubmissionHandler }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  handler: DataResubmissionHandler;
}
/**
 * Defines the playing state of audio on web page.
 *
 * @typedef OnAudioStateChangedEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnAudioStateChangedEvent {
  /**
   * The audio playback status of the current page, true if playing true otherwise false.
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  playing: boolean;
}
/**
 * Defines triggered when the first content rendering of web page.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnFirstContentfulPaintEvent {
  /**
   * The time at which navigation begins, expressed in microseconds.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  navigationStartTick: long;
  /**
   * The time it takes to draw content for the first time from navigation, expressed in milliseconds.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  firstContentfulPaintMs: long;
}
/**
 * Defines the triggered callback when the resources loading is intercepted.
 *
 * @typedef OnLoadInterceptEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnLoadInterceptEvent {
  /**
   * The information of request.
   *
   * @type { WebResourceRequest }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  data: WebResourceRequest;
}
/**
 * 定义网页过度滚动时触发的回调。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnOverScrollEvent {
  /**
   * 以网页最左端为基准，水平过度滚动的偏移量。
   * 单位：vp。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  xOffset: double;
  /**
   * 以网页最上端为基准，竖直过度滚动的偏移量。
   * 单位：vp。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  yOffset: double;
}
/**
 * Defines the function Triggered when the PDF page scrolling.
 *
 * @typedef OnPdfScrollEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnPdfScrollEvent {
  /**
   * PDF page url.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  url:string;
}
/**
 * Defines the function Triggered when the PDF load.
 *
 * @typedef OnPdfLoadEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnPdfLoadEvent {
  /**
   * The PDF page load result.
   *
   * @type { PdfLoadResult }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  result: PdfLoadResult;
  /**
   * The PDF page url.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  url: string;
}
/**
 * Defines the JavaScript object to be injected.
 *
 * @typedef JavaScriptProxy
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface JavaScriptProxy {
  /**
   * Objects participating in registration.
   *
   * @type { object }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  jsObject: object;
  /**
   * The name of the registered object, which is consistent with the
   *                          object name called in the window.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  name: string;
  /**
   * The method of the application side JavaScript object participating
   *                                       in the registration.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  methodList: Array<string>;
  /**
   * Controller.
   *
   * @type { WebviewController }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  controller: WebviewController;
  /**
   * The async method of the application side JavaScript object participating in the registration.
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  asyncMethodList?: Array<string>;
  /**
   * permission configuration defining web page URLs that can access JavaScriptProxy methods.
   * The configuration can be defined at two levels, object level and method level.
   *
   * @type { ?string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  permission?: string;
}
/**
 * 软键盘避让的模式。
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum WebKeyboardAvoidMode {
  /**
   * 软键盘避让时，仅调整可视视口大小，不调整布局视口大小。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  RESIZE_VISUAL = 0,
  /**
   * 默认值，软键盘避让时，同时调整可视视口和布局视口的大小。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  RESIZE_CONTENT = 1,
  /**
   * 不调整任何视口大小，不会触发软键盘避让。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  OVERLAYS_CONTENT = 2,
  /**
   * Web组件的软键盘避让行为将跟随UIcontext设置的
   * [KeyboardAvoidMode]{@link ./../../../@ohos.arkui.UIContext:KeyboardAvoidMode}模式，Web组件不再处理组件的避让。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  RETURN_TO_UICONTEXT = 3
}
/**
 * 网页元素信息。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum WebElementType {
  /**
   * 图片类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  IMAGE = 1,
  /**
   * 网页元素为超链接类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  LINK = 2,
  /**
   * 网页元素为文本或可编辑区域类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  TEXT = 3
}
/**
 * 菜单的响应类型。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum WebResponseType {
  /**
   * 通过长按触发菜单弹出。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  LONG_PRESS = 1,
  /**
   * 通过鼠标右键触发菜单弹出。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  RIGHT_CLICK = 2
}
/**
 * Arkweb audio session Type
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum AudioSessionType {
  /**
   * Ambient audio, which is mixable with other types of audio.
   * This is useful in some special cases such as when the user wants to mix audios from multiple pages.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  AMBIENT = 3
}
/**
 * PDF page load result
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum PdfLoadResult {
  /**
   * The PDF page load success.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  LOAD_SUCCESS = 0,
  /**
   * The error code for web load PDF file failed.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  PARSE_ERROR_FILE = 1,
  /**
   * The error code for the PDF format is not support.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  PARSE_ERROR_FORMAT = 2,
  /**
   * The error code for the PDF password is wrong.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  PARSE_ERROR_PASSWORD = 3,
  /**
   * The error code for the  PDF handler process failed.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  PARSE_ERROR_HANDLER = 4
}
/**
 * Enum type supplied to {@link bypassVsyncCondition} for setting the condition that bypass vsync.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum WebBypassVsyncCondition {
  /**
   * Bypass-vsync will not be triggered.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  NONE = 0,
  /**
   * Page scrolling offset is 0, and the scrollby function containing only the scroll offset parameter is called.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  SCROLLBY_FROM_ZERO_OFFSET = 1
}
/**
 * 自定义菜单扩展项。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface SelectionMenuOptionsExt {
  /**
   * 自定义选择菜单弹出时回调。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  onAppear?: VoidCallback;
  /**
   * 自定义选择菜单关闭时回调。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  onDisappear?: VoidCallback;
  /**
   * 自定义选择菜单的预览内容样式，未配置时无预览内容。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  preview?: CustomBuilder;
  /**
   * 自定义选择菜单类型。
   * SELECTION_MENU`.
   * 从API version 20起，`MenuType.
   * PREVIEW_MENU`支持超链接预览。 默认值： `MenuType。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  menuType?: MenuType;
  /**
   * 自定义选择预览菜单选项。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  previewMenuOptions?: PreviewMenuOptions;
  /**
   * 自定义选择菜单显示时回调。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  onMenuShow?: VoidCallback;
  /**
   * 自定义选择菜单隐藏时回调。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  onMenuHide?: VoidCallback;
}
/**
 * The details of this blank screen detection result.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface BlankScreenDetails {
  /**
   * The count of detected contentful nodes. This value only exists when developers configure a threshold.
   * 取值范围为全体整数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  detectedContentfulNodesCount?: int;
}
/**
 * Enum type supplied to {@link BlankScreenDetectionEventInfo} when onDetectedBlankScreen being called.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum DetectedBlankScreenReason {
  /**
   * None of any contentful nodes have been detected.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  NO_CONTENTFUL_NODES = 0,
  /**
   * Web has detected a few of contentful nodes but below the threshold.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  SUB_THRESHOLD_CONTENTFUL_NODES = 1
}
/**
 * Defines the blank screen detection event info.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface BlankScreenDetectionEventInfo {
  /**
   * The url of detected blank screen page.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  url: string;
  /**
   * The reason why we consider this page is blank.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  blankScreenReason: DetectedBlankScreenReason;
  /**
   * The details of this detection result.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  blankScreenDetails?: BlankScreenDetails;
}
/**
 * The callback when web engine detects current page is blank or nearly blank.
 *
 * @param { BlankScreenDetectionEventInfo } event - 检测事件信息。
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export type OnDetectBlankScreenCallback = (event: BlankScreenDetectionEventInfo) => void;
/**
 * onTextSelectionChange的回调函数，选区内容改变时触发。
 *
 * @param { string } selectionText - 返回所选文本的内容。
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export type TextSelectionChangeCallback = (selectionText: string) => void;
/**
 * The methods can be chosen to detect if current page is blank or nearly blank.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum BlankScreenDetectionMethod {
  /**
   * This detection method is used to probe whether there are rendered contentful nodes
   * at 17 coordinates distributed around the center of the page.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  DETECTION_CONTENTFUL_NODES_SEVENTEEN = 0
}
/**
 * The strategy of blank screen detection.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface BlankScreenDetectionConfig {
  /**
   * Enable blank screen detection or not.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enable: boolean;
  /**
   * The settings of the timing when web try to detect current page is blank or not.
   * The timing is the duration after web navigation.
   * <br>长度范围:[0, +∞)。单位:单位：秒。
   * <br>默认值:'[1.0,3.0,5.0]'。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  detectionTiming?: double[];
  /**
   * The combination of blank screen detection methods.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  detectionMethods?: BlankScreenDetectionMethod[];
  /**
   * When using the specific detection method of detecting contentful nodes, the threshold is used
   * to determine how close the detection is to being blank screen page.
   * 取值范围为全体整数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  contentfulNodesCountThreshold?: int;
}
/**
 * Defines the first screen paint info.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface FirstScreenPaint {
  /**
   * The url of first screen paint info.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  url: string;
  /**
   * The navigation start time of the url.
   * <br>单位:毫秒。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  navigationStartTime: long;
  /**
   * The first screen paint time of the url.
   * <br>单位:毫秒。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  firstScreenPaintTime: long;
}
/**
 * The callback reports the time required for the first screen painting of the current web page.
 *
 * @param { FirstScreenPaint } firstScreenPaint - 第一屏油漆信息。
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export type OnFirstScreenPaintCallback = (firstScreenPaint: FirstScreenPaint) => void;

/**
 * Indicates current camera capture state of current web page.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum CameraCaptureState {
  /**
   * None of any cameras are in use.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  NONE = 0,
  /**
   * This web page is not actively using camera capturing.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  PAUSED = 1,
  /**
   * This web page is actively using camera capturing.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  ACTIVE = 2
}

/**
 * Indicates current microphone capture state of current web page.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum MicrophoneCaptureState {
  /**
   * None of any microphones are in use.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  NONE = 0,
  /**
   * This web page is not actively using microphone capturing.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  PAUSED = 1,
  /**
   * This web page is actively using microphone capturing.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  ACTIVE = 2
}

/**
 * WebView中输入法沉浸模式。
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum WebKeyboardAppearanceMode {
  /**
   * 默认外观模式，不采用沉浸式风格。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  NONE_IMMERSIVE = 0,
  /**
   * 沉浸式模式，跟随系统。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  IMMERSIVE = 1,
  /**
   * 浅色沉浸式风格。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  LIGHT_IMMERSIVE = 2,
  /**
   * 深色沉浸式风格。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DARK_IMMERSIVE = 3
}

/**
 * Defines the camera capture state change info.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface CameraCaptureStateChangeInfo {
  /**
   * The original camera capture state.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  originalState: CameraCaptureState;

  /**
   * The new camera capture state.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  newState: CameraCaptureState;
}

/**
 * Defines the microphone capture state change info.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface MicrophoneCaptureStateChangeInfo {
  /**
   * The original microphone capture state.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  originalState: MicrophoneCaptureState;

  /**
   * The new microphone capture state.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  newState: MicrophoneCaptureState;
}

/**
 * 当前页面的摄像头捕捉状态切换时会触发的回调
 *
 * @param { CameraCaptureStateChangeInfo } event - 摄像机捕获状态事件。
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export type OnCameraCaptureStateChangeCallback = (event: CameraCaptureStateChangeInfo) => void;

/**
 * 当前页面的麦克风捕捉状态切换时会触发的回调
 *
 * @param { MicrophoneCaptureStateChangeInfo } event - 麦克风捕获状态事件。
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export type OnMicrophoneCaptureStateChangeCallback = (event: MicrophoneCaptureStateChangeInfo) => void;

/**
 * 定义 Web 属性相关函数
 *
 * @extends CommonMethod<WebAttribute>
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 * @noninterop
 */
export declare interface WebAttribute extends CommonMethod {
  /**
   * Sets whether the Web allows JavaScript scripts to execute.
   *
   * @param { boolean | undefined } javaScriptAccess - {@code true} means the Web can allows JavaScript
   *     scripts to execute; {@code false} otherwise.
   *     The default value is true.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default javaScriptAccess(javaScriptAccess: boolean | undefined): this;
  /**
   * Sets whether to enable access to the file system in the application.
   * This setting dose not affect the access to the files specified though $rawfile(filepath/filename).
   * <p><strong>API Note</strong>:<br>
   * fileAccess is disabled by default since API version 12.
   * When fileAccess is set to false, files in the read-only /data/storage/el1/bundle/entry/resources/resfile<br>
   * directory can still be accessed through the file protocol.
   * </p>
   *
   * @param { boolean | undefined } fileAccess - {@code true} means enable local file system access in Web;
   *     {@code false} otherwise.
   *     The default value is false.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default fileAccess(fileAccess: boolean | undefined): this;
  /**
   * Sets whether to allow image resources to be loaded from the network.
   * The default value is true.
   * @param { boolean | undefined } onlineImageAccess - {@code true} means the Web can allow image resources
   *     to be loaded from the network;
   *     {@code false} otherwise.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onlineImageAccess(onlineImageAccess: boolean | undefined): this;
  /**
   * Sets whether to enable the DOM Storage API permission.
   * The default value is false.
   * @param { boolean | undefined } domStorageAccess - {@code true} means enable the DOM Storage API permission
   *     in Web; {@code false} otherwise.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default domStorageAccess(domStorageAccess: boolean | undefined): this;
  /**
   * Sets whether the Web can automatically load image resources.
   * The default value is true.
   * @param { boolean | undefined } imageAccess - {@code true} means the Web can automatically load image resources;
   *     {@code false} otherwise.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default imageAccess(imageAccess: boolean | undefined): this;
  /**
   * Sets the behavior when a secure origin attempts to load a resource from an insecure origin.
   * The default is MixedMode.None, meaning not allow a secure origin to load content from an insecure origin.
   *
   * @param { MixedMode | undefined } mixedMode - The mixed mode, which can be {@link MixedMode}.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default mixedMode(mixedMode: MixedMode | undefined): this;
  /**
   * Sets whether the Web supports zooming using gestures.
   *
   * @param { boolean | undefined } zoomAccess - {@code true} means the Web supports zooming using gestures; {@code
   *     false} otherwise.
   *     The default value is true.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default zoomAccess(zoomAccess: boolean | undefined): this;
  /**
   * Sets whether to allow access to geographical locations.
   *
   * @param { boolean | undefined } geolocationAccess - {@code true} means the Web allows access to geographical
   *     locations; {@code false} otherwise.
   *     The default value is true.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default geolocationAccess(geolocationAccess: boolean | undefined): this;
  /**
   * Registers the supplied ArkTS object in javaScriptProxy into this Web component.
   * The object is registered into all frames of the web page, including all frames, using the specified name
   * in javaScriptProxy. This allows the methods of the ArkTS object in javaScriptProxy to be accessed from
   * JavaScript.
   *
   * <p><strong>API Note</strong>:
   * <strong>Performance Note</strong>:
   * <p>For details about how to arkWeb rendering framework adaptation solution,
   * see [ArkWeb Rendering Framework Adaptation]
   * {@link https://developer.huawei.com/consumer/en/doc/best-practices/bpta-arkweb_rendering_framework}
   * </p>
   *
   * @param { JavaScriptProxy | undefined } javaScriptProxy - The ArkTS object in javaScriptProxy will be registered
   *     into this Web component, and the methods within the methodList of the injected ArkTS object declared in
   *     javaScriptProxy can be accessed by JavaScript.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default javaScriptProxy(javaScriptProxy: JavaScriptProxy | undefined): this;
  /**
   * Sets the mode of cache in Web.
   *
   * @param { CacheMode | undefined } cacheMode - The cache mode, which can be {@link CacheMode}.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default cacheMode(cacheMode: CacheMode | undefined): this;
  /**
   * Sets the dark mode of Web.
   *
   * @param { WebDarkMode | undefined } mode - The dark mode, which can be {@link WebDarkMode}.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default darkMode(mode: WebDarkMode | undefined): this;
  /**
   * Sets whether to enable forced dark algorithm when the web is in dark mode
   *
   * @param { boolean | undefined } access {@code true} means enable the force dark algorithm; {@code false}
   *     otherwise.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default forceDarkAccess(access: boolean | undefined): this;
  /**
   * Sets the media options.
   *
   * @param { WebMediaOptions | undefined } options The media options, which can be {@link WebMediaOptions}.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default mediaOptions(options: WebMediaOptions | undefined): this;
  /**
   * Sets whether the Web access overview mode.
   *
   * @param { boolean | undefined } overviewModeAccess {@code true} means the Web access overview mode;
   *     {@code false} otherwise.
   *     The default value is true.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default overviewModeAccess(overviewModeAccess: boolean | undefined): this;
  /**
   * Sets the over-scroll mode for web
   * 开启滚动模式后，当用户滑动到网页根页面的边缘时，网页会跳转
   * > **说明**
   * > 背向
   * > 界面通过弹性动画实现，根页面的内部页面不会触发跳转
   * > 背向。
   *
   * @param { OverScrollMode | undefined } mode - The over-scroll mode, which can be {@link OverScrollMode}.
   *     The default value is OverScrollMode.NEVER.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default overScrollMode(mode: OverScrollMode | undefined): this;
  /**
   * 设置当软键盘收起时Web元素失焦模式。
   *
   * @param { BlurOnKeyboardHideMode | undefined } mode - 设置当软键盘收起时Web元素失焦关闭或开启。默认值：`
   * BlurOnKeyboardHideMode.SILENT`。
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default blurOnKeyboardHideMode(mode: BlurOnKeyboardHideMode | undefined): this;
  /**
   * Sets the ratio of the text zoom.
   *
   * @param { int | undefined } textZoomRatio Text zoom ratio to set. The value is an integer.
   *     The value range is (0, 2147483647].
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default textZoomRatio(textZoomRatio: int | undefined): this;
  /**
   * Sets whether the Web access the database.
   *
   * @param { boolean | undefined } databaseAccess - {@code true} means the Web access the database;
   *     {@code false} otherwise.
   *     The default value is false.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default databaseAccess(databaseAccess: boolean | undefined): this;
  /**
   * Sets the initial scale for the Web.
   *
   * @param { double | undefined } percent - the initial scale for the Web.
   *     <br>Value range: (0, 1000]. Default value: 100.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default initialScale(percent: double | undefined): this;
  /**
   * Set whether to support the viewport attribute of the meta tag in the frontend page.
   *
   * @param { boolean | undefined } enabled {@code true} means support the viewport attribute of the
   *     meta tag; {@code false} otherwise.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default metaViewport(enabled: boolean | undefined): this;
  /**
   * Triggered at the end of web page loading.
   *
   * @param { Callback<OnPageEndEvent> | undefined } callback The triggered function at the end of web page loading.
   * @returns { WebAttribute }    * @syscap SystemCapability.Web.Webview.Core
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onPageEnd(callback: Callback<OnPageEndEvent> | undefined): this;
  /**
     * Triggered at the begin of web page loading. This method is called once for each main frame load.  Embedded frame
     * changes, i.e. clicking a link whose target is an iframe and fragment navigations (navigations to #fragment_id)
     * will not trigger this callback.
     *
     * <p><strong>API Note</strong>:<br>
     * Different from onPageBegin, onLoadStarted is triggered only once if the mainframe is automatically redirected
     * before the page is completely loaded. OnPageBegin is triggered every navigation.
     * </p>
     *
   * @param { Callback<OnLoadStartedEvent> | undefined } callback The triggered function at the begin of web page
     *     loading.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onLoadStarted(callback: Callback<OnLoadStartedEvent> | undefined): this;
  /**
   * Notify the host application that a page has finished loading. This method is called only for main frame.
   *
   * <p><strong>API Note</strong>:<br>
   * Different from onPageEnd, fragment navigation also triggers onLoadFinished.
   * </p>
   *
   * @param { Callback<OnLoadFinishedEvent> | undefined } callback The triggered function at the end of web page
   *     loading.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onLoadFinished(callback: Callback<OnLoadFinishedEvent> | undefined): this;
  /**
   * Called when the web page starts to be loaded.
   * This API is called only for the main frame, and not for the iframe or frameset content.
   *
   * @param { Callback<OnPageBeginEvent> | undefined } callback The triggered function at the begin of web page
   *     loading.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onPageBegin(callback: Callback<OnPageBeginEvent> | undefined): this;
  /**
   * Triggered when the page loading progress changes.
   *
   * @param { Callback<OnProgressChangeEvent> | undefined } callback The triggered function when the page loading
   *     progress changes.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onProgressChange(callback: Callback<OnProgressChangeEvent> | undefined): this;
  /**
   * Notifies the application that the title has changed.
   * If the page being loaded does not specify a title via the <title> element,
   * ArkWeb will generate a title baseed on the URL and return it to the application.
   *
   * @param { Callback<OnTitleReceiveEvent> | undefined } callback The triggered function when the title of the main
   *     application document changes.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onTitleReceive(callback: Callback<OnTitleReceiveEvent> | undefined): this;
  /**
   * Triggered when requesting to hide the geolocation.
   *
   * @param { function | undefined } callback - The triggered function when requesting to hide the geolocation
   *     permission.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onGeolocationHide(callback: (() => void) | undefined): this;
  /**
   * Triggered when requesting to show the geolocation permission.
   *
   * @param { Callback<OnGeolocationShowEvent> | undefined } callback - The triggered function when requesting to
   *     show the geolocation permission.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onGeolocationShow(callback: Callback<OnGeolocationShowEvent> | undefined): this;
  /**
   * Triggered when the Web gets the focus.
   *
   * @param { function | undefined } callback The triggered function when the Web gets the focus.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onRequestSelected(callback: (() => void) | undefined): this;
  /**
   * Triggered when the Web wants to display a JavaScript alert() dialog.
   *
   * @param { Callback<OnAlertEvent, boolean> | undefined } callback - Callback used when alert() is invoked to display
   *     an alert dialog box on the web page.
   *     {@code true} means the application can invoke custom pop-up dialog capabilities (with confirmation and
   *     cancellation buttons).
   *     Developers need to use the JsResult interface to notify the web component whether to leave the current page
   *     according to the user's choice.
   *     {@code false} means the pop-up processing result is considered as cancelled.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onAlert(callback: Callback<OnAlertEvent, boolean> | undefined): this;
  /**
   * Triggered when the Web wants to confirm navigation from JavaScript onbeforeunload.
   *
   * @param { Callback<OnBeforeUnloadEvent, boolean> | undefined } callback The triggered function when the web page wants
   *     to confirm navigation from JavaScript onbeforeunload.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onBeforeUnload(callback: Callback<OnBeforeUnloadEvent, boolean> | undefined): this;
  /**
   * Triggered when the web page wants to display a JavaScript confirm() dialog.
   *
   * @param { Callback<OnConfirmEvent, boolean> | undefined } callback - Callback triggered when confirm() is invoked by
   *     the web page.
   *     {@code true} means the application can call the custom pop-up capability (including confirmation and
   *     cancellation), and needs to call JsResult
   *     to notify the Web component whether to leave the current page based on the user's confirmation or
   *     cancellation operation.
   *     {@code false} means the custom pop-up drawn in the function is invalid.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onConfirm(callback: Callback<OnConfirmEvent, boolean> | undefined): this;
  /**
   * Triggered when the web page wants to display a JavaScript prompt() dialog.
   *
   * @param { Callback<OnPromptEvent, boolean> | undefined } callback - Callback used when prompt() is invoked by the
   *     web page.
   *     {@code true} means the application can call the custom pop-up window capability (including confirmation,
   *     cancellation, and input),and needs to
   *     call JsResult to notify the Web component of the final processing result based on the user's confirmation or
   *     cancellation operation.
   *     {@code false} means the pop-up window processing result is considered as a cancellation.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onPrompt(callback: Callback<OnPromptEvent, boolean> | undefined): this;
  /**
   * Triggered when the web page receives a JavaScript console message.
   *
   * @param {  Callback<OnConsoleEvent, boolean> | undefined } callback The triggered function when the web page
   *     receives a JavaScript console message.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onConsole(callback: Callback<OnConsoleEvent, boolean> | undefined): this;
  /**
   * Triggered when the web page receives a web resource loading error.
   *
   * @param { Callback<OnErrorReceiveEvent> | undefined } callback The triggered function when the web page receives
   *     a web resource loading error.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onErrorReceive(callback: Callback<OnErrorReceiveEvent> | undefined): this;
  /**
   * Triggered when the web page receives a web resource loading HTTP error.
   *
   * @param { Callback<OnHttpErrorReceiveEvent> | undefined } callback The triggered function when the web page receives
   *     a web resource loading HTTP error.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onHttpErrorReceive(callback: Callback<OnHttpErrorReceiveEvent> | undefined): this;
  /**
   * Triggered when starting to download.
   *
   * @param { Callback<OnDownloadStartEvent> | undefined } callback The triggered function when starting to download.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onDownloadStart(callback: Callback<OnDownloadStartEvent> | undefined): this;
  /**
   * Triggered when the Web page refreshes accessed history.
   *
   * @param { Callback<OnRefreshAccessedHistoryEvent> | undefined } callback The triggered callback when the Web page
   *     refreshes accessed history.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onRefreshAccessedHistory(callback: Callback<OnRefreshAccessedHistoryEvent> | undefined): this;
  /**
   * 应用渲染进程异常退出时触发该回调。
   *
   * 多个Web组件可能共享单个渲染进程，每个受影响的Web组件都会触发该回调。
   *
   * 应用处理该回调时，可以调用绑定的webviewController相关接口来恢复页面。例如
   * [refresh]{@link ./../../../@ohos.web.webview:webview.WebviewController#refresh()}、
   * [loadUrl]{@link ./../../../@ohos.web.webview:webview.WebviewController.loadUrl}等。
   *
   * 组件生命周期回调详情可参考[Web组件的生命周期](docroot://web/web-event-sequence.md)。
   *
   * @param { Callback<OnRenderExitedEvent> | undefined } callback 渲染过程退出时触发。
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onRenderExited(callback: Callback<OnRenderExitedEvent> | undefined): this;
  /**
   * Triggered when the file selector shows.
   * 调用此函数处理输入类型为“file”的HTML表单。如果不调用此函数或返回false
   * > **说明**
   * > ，
   * > Web组件提供了默认的“选择文件”处理接口。如果它返回true，则应用程序可以
   * > 定制化
   * > “选择文件”响应行为。
   *
   * @param { Callback<OnShowFileSelectorEvent, boolean> | undefined } callback - The triggered when the file selector
   *     shows.
   *     {@code true} means the user can call the system-provided pop-up window capability.
   *     {@code false} means the custom pop-up window drawn in the function is invalid.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onShowFileSelector(callback: Callback<OnShowFileSelectorEvent, boolean> | undefined): this;
  /**
   * Triggered when the url loading.
   *
   * @param { Callback<OnResourceLoadEvent> | undefined } callback The triggered when the url loading.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onResourceLoad(callback: Callback<OnResourceLoadEvent> | undefined): this;
  /**
   * Triggered when the web component exit the full screen mode.
   *
   * @param { function | undefined } callback The triggered function when the web component exit the full screen mode.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onFullScreenExit(callback: (() => void) | undefined): this;
  /**
   * Triggered when the web component enter the full screen mode.
   *
   * @param { OnFullScreenEnterCallback | undefined } callback - The triggered function when the web component enter
   *     the full screen mode.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onFullScreenEnter(callback: OnFullScreenEnterCallback | undefined): this;
  /**
   * Triggered when the scale of WebView changed.
   *
   * @param { Callback<OnScaleChangeEvent> | undefined } callback The triggered when the scale of WebView changed.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onScaleChange(callback: Callback<OnScaleChangeEvent> | undefined): this;
  /**
   * Triggered when the browser needs credentials from the user.
   *
   * @param { Callback<OnHttpAuthRequestEvent, boolean> | undefined } callback The triggered when the browser needs
   *     credentials from the user.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onHttpAuthRequest(callback: Callback<OnHttpAuthRequestEvent, boolean> | undefined): this;
  /**
   * Triggered when the resources loading is intercepted.
   *
   * @param { Callback<OnInterceptRequestEvent, WebResourceResponse | null> | undefined } callback The triggered
   *     callback when the resources loading is intercepted.
   * @returns { WebAttribute } If the response value is null, the Web will continue to load the resources.
   *     Otherwise, the response value will be used
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onInterceptRequest(callback: Callback<OnInterceptRequestEvent, WebResourceResponse | null> | undefined): this;
  /**undefined
   * Triggered when the host application that web content from the specified origin is attempting to access
   * the resources.
   *
   * @param { Callback<OnPermissionRequestEvent> | undefined } callback The triggered callback when the host
   *     application that web content from the specified origin is attempting to access the resources.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onPermissionRequest(callback: Callback<OnPermissionRequestEvent> | undefined): this;
  /**
   * Triggered when the host application that web content from the specified origin is requesting to capture screen.
   * @param { Callback<OnScreenCaptureRequestEvent> | undefined } callback The triggered callback when the host
   *     application that web content from the specified origin is requesting to capture screen.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onScreenCaptureRequest(callback: Callback<OnScreenCaptureRequestEvent> | undefined): this;
  /**
   * Triggered when called to allow custom display of the context menu.
   *
   * @param { Callback<OnContextMenuShowEvent, boolean> | undefined } callback The triggered callback when called to
   *     allow custom display of the context menu.
   *     {@code true} means the custom menu is triggered.
   *     {@code false} means the custom menu is invalid.
   * @returns { WebAttribute } If custom display return true.Otherwise, default display return false.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onContextMenuShow(callback: Callback<OnContextMenuShowEvent, boolean> | undefined): this;
  /**
   * Triggered when called to allow custom hide of the context menu.
   *
   * @param { OnContextMenuHideCallback | undefined } callback The triggered function when called to allow custom hide
   *     of the context menu.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onContextMenuHide(callback: OnContextMenuHideCallback | undefined): this;
  /**
   * Set whether media playback needs to be triggered by user gestures.
   *
   * @param { boolean | undefined } access True if it needs to be triggered manually by the user else false.
   *     The default value is true.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default mediaPlayGestureAccess(access: boolean | undefined): this;
  /**
   * Notify search result to host application through onSearchResultReceive.
   *
   * @param { Callback<OnSearchResultReceiveEvent> | undefined } callback Function Triggered when the host application
   *     call searchAllAsync. or searchNext api on WebController and the request is valid.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onSearchResultReceive(callback: Callback<OnSearchResultReceiveEvent> | undefined): this;
  /**
   * Triggered when the scroll bar slides to the specified position.
   *
   * @param { Callback<OnScrollEvent> | undefined } callback - Function triggered when the web page scroll to the
   *     specified position.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onScroll(callback: Callback<OnScrollEvent> | undefined): this;
  /**
   * Called to notify users when an SSL error occurs with a request for the main frame.
   * To include errors with requests for subframes, use the OnSslErrorEvent API.
   *
   * @param { Callback<OnSslErrorEventReceiveEvent> | undefined } callback The triggered callback
   *     when the Web page receives an ssl Error.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onSslErrorEventReceive(callback: Callback<OnSslErrorEventReceiveEvent> | undefined): this;
  /**
   * Called to notify users when an SSL error occurs during the loading of resources (for the main frame
   * and subframes).
   * To handle SSL errors for requests for the main frame, use the isMainFrame field to distinguish.
   *
   * @param { OnSslErrorEventCallback | undefined } callback The triggered callback when the Web page
   *     receives an ssl Error.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onSslErrorEvent(callback: OnSslErrorEventCallback | undefined): this;
  /**
   * Triggered when the Web page needs ssl client certificate from the user.
   *
   * @param { Callback<OnClientAuthenticationEvent> | undefined } callback The triggered callback when needs
   *     ssl client certificate from the user.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onClientAuthenticationRequest(callback: Callback<OnClientAuthenticationEvent> | undefined): this;
  /**
   * Triggered when the Web page needs verify pin from the user.
   *
   * @param { OnVerifyPinCallback | undefined } callback The triggered callback when needs verify pin from the user.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onVerifyPin(callback: OnVerifyPinCallback | undefined): this;
  /**
   * Triggered when web page requires the user to create a window.
   *
   * @param {  Callback<OnWindowNewEvent> | undefined } callback The triggered callback when web page requires
   *     the user to create a window.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onWindowNew(callback: Callback<OnWindowNewEvent> | undefined): this;
  /**
   * 在启用[multiWindowAccess](docroot://reference/apis-arkweb/arkts-basic-components-web-attributes.md#multiwindowaccess9)的情
   * 况下，通知用户新建窗口请求。
   *
   * 说明：
   *
   * 若不调用[setWebController](docroot://reference/apis-arkweb/arkts-basic-components-web-ControllerHandler.md#setwebcontroller9)接口，会造成render进程阻塞。
   *
   * 若未创建新窗口，调用[setWebController](docroot://reference/apis-arkweb/arkts-basic-components-web-ControllerHandler.md#setwebcontroller9)接口并设置成null，通知Web未创建新窗口。
   *
   * 新窗口需避免直接覆盖在原Web组件上，且应与主页面以相同形式明确显示其URL（如地址栏）以防止用户混淆。若无法确保URL的显示和验证机制可靠，则需考虑禁止创建新窗口。
   *
   * 新窗口请求来源无法可靠追溯，可能由第三方iframe发起，应用需默认采取沙箱隔离、限制权限等防御性措施以确保安全。
   * @param { Callback<OnWindowNewExtEvent> | undefined } callback 网页要求用户创建窗口时触发的回调。
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onWindowNewExt(callback: Callback<OnWindowNewExtEvent> | undefined): this;
  /**
   * 通知用户窗口关闭请求。和[onWindowNew](docroot://reference/apis-arkweb/arkts-basic-components-web-events.md#onwindownew9)一样，从安全角度讲
   * ，应用应该确保用户可以知道他们交互的页面已关闭。
   *
   * @param { function | undefined } callback 窗口请求关闭的回调函数。
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onWindowExit(callback: (() => void) | undefined): this;
  /**
   * 设置是否开启多窗口权限。
   *
   * 使能多窗口权限时，需要实现onWindowNew事件，示例代码参考
   * [onWindowNew事件](docroot://reference/apis-arkweb/arkts-basic-components-web-events.md#onwindownew9)。
   * @param { boolean | undefined } multiWindow True if it needs to be triggered manually by the user else false.
   *    The default value is false.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default multiWindowAccess(multiWindow: boolean | undefined): this;
  /**
   * 设置键盘事件的回调函数，该回调在被Webview使用前触发。
   *
   * @param { function | undefined } callback 触发的KeyEvent事件
   * @returns { WebAttribute } 返回值为boolean类型，true表示将该KeyEvent传入Webview内核，false表示不将该KeyEvent传入Webview内核。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onInterceptKeyEvent(callback: ((event: KeyEvent) => boolean) | undefined): this;
  /**
   * Set the font of webview standard font library. The default font is "sans serif".
   *
   * @param { string | undefined } family Standard font set series.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default webStandardFont(family: string | undefined): this;
  /**
   * Set the font of webview serif font library. The default font is "serif".
   *
   * @param { string | undefined } family Serif font set series.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default webSerifFont(family: string | undefined): this;
  /**
   * Set the font of webview sans serif font library. The default font is "sans-serif".
   *
   * @param { string | undefined } family Sans serif font set series.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default webSansSerifFont(family: string | undefined): this;
  /**
   * Set the font of webview fixed font library. The default font is "monospace".
   *
   * @param { string | undefined } family Fixed font set series.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default webFixedFont(family: string | undefined): this;
  /**
   * Set the font of webview fantasy font library. The default font is "fantasy".
   *
   * @param { string | undefined } family fantasy font set series.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default webFantasyFont(family: string | undefined): this;
  /**
   * Set the font of webview cursive font library. The default font is "cursive".
   *
   * @param { string | undefined } family Cursive font set series.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default webCursiveFont(family: string | undefined): this;
  /**
   * Set the default fixed font value of webview. The default value is 13, ranging from 1 to 72.
   *
   * @param { int | undefined } size - Font size.
   *     <br>取值约束:实际渲染时超过72px的值按照72px进行渲染，低于1px的值按照1px进行渲染。
   *     <br>取值范围：【-2^31,2^31-1】，单位：px。
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default defaultFixedFontSize(size: int | undefined): this;
  /**
   * Set the default font value of webview. The default value is 16, ranging from 1 to 72.
   *
   * @param { int | undefined } size - Font size.
   *     <br>取值约束:实际渲染时超过72px的值按照72px进行渲染，低于1px的值按照1px进行渲染。
   *     <br>Value range:[-2^31, 2^31-1].Unit:px.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default defaultFontSize(size: int | undefined): this;
  /**
   * Set the minimum value of webview font. The default value is 8, ranging from 1 to 72.
   *
   * @param { int | undefined } size - Font size.
   *     <br>取值约束:实际渲染时超过72px的值按照72px进行渲染，低于1px的值按照1px进行渲染。
   *     <br>取值范围：【-2^31,2^31-1】，单位：px。
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default minFontSize(size: int | undefined): this;
  /**
   * Set the logical minimum value of webview font. The default value is 8, ranging from 1 to 72.
   *
   * @param { int | undefined } size - Font size.
   *     <br>取值约束:实际渲染时超过72px的值按照72px进行渲染，低于1px的值按照1px进行渲染。
   *     <br>取值范围：【-2^31,2^31-1】，单位：px。
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default minLogicalFontSize(size: int | undefined): this;
  /**
   * Set the default text encodingFormat value of webview. The default value is UTF-8.
   *
   * @param { string | undefined } textEncodingFormat text encodingFormat.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default defaultTextEncodingFormat(textEncodingFormat: string | undefined): this;
  /**
   * Whether force display the scroll bar.
   *
   * @param { boolean | undefined } enabled {@code true} means show; {@code false} otherwise.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default forceDisplayScrollBar(enabled: boolean | undefined): this;
  /**
   * Whether web component can load resource from network.
   *
   * @param { boolean | undefined } block {@code true} means it can't load resource from network;
   *     {@code false} otherwise.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default blockNetwork(block: boolean | undefined): this;
  /**
   * Set whether paint horizontal scroll bar.
   *
   * @param { boolean | undefined } horizontalScrollBar True if it needs to paint horizontal scroll bar.
   *     The default value is true.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default horizontalScrollBarAccess(horizontalScrollBar: boolean | undefined): this;
  /**
   * Set whether paint vertical scroll bar.
   *
   * @param { boolean | undefined } verticalScrollBar True if it needs to paint vertical scroll bar.
   *     The default value is true.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default verticalScrollBarAccess(verticalScrollBar: boolean | undefined): this;
  /**
   * Triggered when the application receive the url of an apple-touch-icon.
   *
   * @param { Callback<OnTouchIconUrlReceivedEvent> | undefined } callback The triggered callback when the
   *     application receive an new url of an apple-touch-icon.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onTouchIconUrlReceived(callback: Callback<OnTouchIconUrlReceivedEvent> | undefined): this;
  /**
   * Triggered when the application receive a new favicon for the current web page.
   *
   * @param { Callback<OnFaviconReceivedEvent> | undefined } callback The triggered callback when the application
   *     receive a new favicon for the current web page.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onFaviconReceived(callback: Callback<OnFaviconReceivedEvent> | undefined): this;
  /**
   * 设置旧页面不再呈现，新页面即将可见时触发的回调函数。
   *
   * @param {  Callback<OnPageVisibleEvent> | undefined } callback 旧页面不再呈现，新页面即将可见时触发的回调函数。
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onPageVisible(callback: Callback<OnPageVisibleEvent> | undefined): this;
  /**
   * Triggered when the form could be resubmitted.
   *
   * @param { Callback<OnDataResubmittedEvent> | undefined } callback The triggered callback to decision whether
   *     resend form data or not.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onDataResubmitted(callback: Callback<OnDataResubmittedEvent> | undefined): this;
  /**
   * Set whether enable pinch smooth mode.
   *
   * @param { boolean | undefined } isEnabled True if it needs to enable smooth mode.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default pinchSmooth(isEnabled: boolean | undefined): this;
  /**
   * 设置网页是否可以通过JavaScript自动打开新窗口。
   *
   * 说明：
   * 该属性仅在[javaScriptAccess](docroot://reference/apis-arkweb/arkts-basic-components-web-attributes.md#javascriptaccess)开启时生效。
   * 该属性在[multiWindowAccess](docroot://reference/apis-arkweb/arkts-basic-components-web-attributes.md#multiwindowaccess9)开启时打开新窗口，关闭时打开本地窗口。
   * 该属性的默认值与系统属性`persist.web.allowWindowOpenMethod.enabled`保持一致，如果未设置系统属性则默认值为false。
   * 通过`hdc shell param get persist.web.allowWindowOpenMethod.enabled` 检查是否开启系统属性`
   * persist.web.allowWindowOpenMethod.enabled`。若属性值为1代表开启系统属性；若属性值为0或不存在，代表未开启系统属性，可通过命令`hdc shell param set
   * persist.web.allowWindowOpenMethod.enabled 1` 开启系统属性。
   *
   * @param { boolean | undefined } flag If it is true, the window can be opened automatically through JavaScript.
   * If it is false and user behavior, the window can be opened automatically through JavaScript.
   * Otherwise, the window cannot be opened.
   * The user behavior here refers to the behavior of requesting to open a new window (window. open) within 5 seconds after
   * the user clicks or performs other operations on the web component.
   * The default value is associated with system properties.
   * When the system property **persist.web.allowWindowOpenMethod.enabled** is set to true, the default value is true.
   * If the system property is not set, the default value is false.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default allowWindowOpenMethod(flag: boolean | undefined): this;
  /**
   * Triggered when the playing state of audio on web page changed.
   *
   * @param { Callback<OnAudioStateChangedEvent> | undefined } callback Callback invoked when the audio playback
   *     status on the webpage changes.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onAudioStateChanged(callback: Callback<OnAudioStateChangedEvent> | undefined): this;
  /**
   * Triggered when the first content rendering of web page.
   *
   * @param { Callback<OnFirstContentfulPaintEvent> | undefined } callback
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onFirstContentfulPaint(callback: Callback<OnFirstContentfulPaintEvent> | undefined): this;
  /**
   * Called when the First rendering of meaningful content time(FMP)
   *
   * @param { OnFirstMeaningfulPaintCallback | undefined } callback Function Triggered when the firstMeaningfulPaint.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onFirstMeaningfulPaint(callback: OnFirstMeaningfulPaintCallback | undefined): this;
  /**
   * Called when the Maximum content rendering time(LCP).
   *
   * @param { OnLargestContentfulPaintCallback | undefined } callback Function Triggered when the
   *     largestContentfulPaint.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onLargestContentfulPaint(callback: OnLargestContentfulPaintCallback | undefined): this;
  /**
   * Triggered when the resources loading is intercepted.
   *
   * @param { Callback<OnLoadInterceptEvent, boolean> | undefined } callback The triggered callback when the resources
   *     loading is intercepted.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onLoadIntercept(callback: Callback<OnLoadInterceptEvent, boolean> | undefined): this;
  /**
   * 当Controller成功绑定到Web组件时触发该回调，并且该Controller必须为WebviewController，且禁止在该事件回调前调用Web组件相关的接口，否则会抛出js-error异常。
   *
   * 因该回调调用时网页还未加载，无法在回调中使用有关操作网页的接口，例如[zoomIn]{@link ./../../../@ohos.web.webview:webview.WebviewController.zoomIn}、
   * [zoomOut]{@link ./../../../@ohos.web.webview:webview.WebviewController.zoomOut}等，可以使用
   * [loadUrl]{@link ./../../../@ohos.web.webview:webview.WebviewController.loadUrl}、
   * [getWebId]{@link ./../../../@ohos.web.webview:webview.WebviewController.getWebId}等操作网页不相关的接口。
   *
   * 组件生命周期详情可参考[Web组件的生命周期](docroot://web/web-event-sequence.md)。
   * @param { function | undefined } callback 当ArkWeb控制器初始化成功时触发的回调。
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onControllerAttached(callback: (() => void) | undefined): this;
  /**
   * Triggered when the over scrolling.
   *
   * @param { Callback<OnOverScrollEvent> | undefined } callback - Function Triggered when the over scrolling.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onOverScroll(callback: Callback<OnOverScrollEvent> | undefined): this;
  /**
   * Triggered when the PDF in web page scrolling at bottom with pdf scroll event.
   * @param { Callback<OnPdfScrollEvent> | undefined } callback Function Triggered when the scrolling to bottom.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onPdfScrollAtBottom(callback: Callback<OnPdfScrollEvent> | undefined): this;
  /**
   * Triggered when the PDF page load finish.
   * @param { Callback<OnPdfLoadEvent> | undefined } callback
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onPdfLoadEvent(callback: Callback<OnPdfLoadEvent> | undefined): this;
  /**
   * Called when received website security risk check result.
   *
   * @param { OnSafeBrowsingCheckResultCallback | undefined } callback - Function triggered when received website
   *     security risk check result.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onSafeBrowsingCheckResult(callback: OnSafeBrowsingCheckResultCallback | undefined): this;
  /**
   * Triggered when the website security risk check is completed.
   * <p><strong>API Note</strong>:<br>
   * Unlike onSafeBrowsingCheckResult, which is only triggered when a URL has security risks,
   * onSafeBrowsingCheckFinish is also triggered when the website security risk check is not performed or no
   * risks are found.
   *
   * @param { OnSafeBrowsingCheckResultCallback | undefined } callback - Triggered when received website
   *     security risk check result.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onSafeBrowsingCheckFinish(callback: OnSafeBrowsingCheckResultCallback | undefined): this;
  /**
   * Called when the load committed.
   *
   * @param { OnNavigationEntryCommittedCallback | undefined } callback Function Triggered when a load committed.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onNavigationEntryCommitted(callback: OnNavigationEntryCommittedCallback | undefined): this;
  /**
   * Called when tracker's cookie is prevented.
   *
   * @param { OnIntelligentTrackingPreventionCallback | undefined } callback - Callback triggered when tracker's
   *     cookie is prevented.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onIntelligentTrackingPreventionResult(callback: OnIntelligentTrackingPreventionCallback | undefined): this;
  /**
   * Injects the JavaScripts script into the Web component.
   * When the specified page or document starts to be loaded, the script is executed on any page whose source
   * matches scriptRules.
   * <p><strong>API Note</strong>:<br>
   * The script runs before any JavaScript code of the page, when the DOM tree may not have been loaded or rendered.
   * The script is executed in the lexicographic order instead of array sequence.
   * if the array sequemce is required, you are advised to use the runJavaScriptOnDocumentStart interface.
   * You are not advised to use this API together with runJavaScriptOnDocumentStart.
   * </p>
   *
   * @param { Array<ScriptItem> | undefined } scripts - The array of the JavaScripts to be injected.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default javaScriptOnDocumentStart(scripts: Array<ScriptItem> | undefined): this;
  /**
   * Injects the JavaScripts script into the Web component. When the specified page or document has been loaded,
   * the script is executed on any page whose source matches scriptRules.
   * <p><strong>API NOTE</strong>:<br>
   * The script runs before any Javascript code of the page, when the DOM tree has been loaded and rendered.
   * The script is excuted in the lexicographic order, not the array order.
   * You are not advised to use this API together with runJavaScriptOnDocumentEnd.
   * <p>
   *
   * @param { Array<ScriptItem> | undefined } scripts - The array of the JavaScripts to be injected.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default javaScriptOnDocumentEnd(scripts: Array<ScriptItem> | undefined): this;
  /**
   * Set web layout Mode.
   *
   * @param { WebLayoutMode | undefined } mode - The web layout mode, which can be {@link WebLayoutMode}.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default layoutMode(mode: WebLayoutMode | undefined): this;
  /**
   * Called to setting the nested scroll options.
   *
   * <p><strong>API Note</strong>:<br>
   * You can set four directions: up, down, left, and right, or set nested scrolling modes for forward and
   * backward directions to achieve scrolling linkage with the parent component.<br>
   * When value is of type NestedScrollOptionsExt (four directions: up, down, left, and right), the default
   * scrolling options for scrollUp, scrollDown, scrollLeft, and scrollRight are NestedScrollMode.SELF_FIRST.<br>
   * When value is of type NestedScrollOptions (two directions: forward and backward), the default scrolling
   * options for scrollForward and scrollBackward are NestedScrollMode.SELF_FIRST.<br>
   * Supported nested scrolling containers: Grid, List, Scroll, Swiper, Tabs, WaterFlow, Refresh, bindSheet.<br>
   * Supported nested scrolling input events: gestures, mouse, and trackpad.<br>
   * In nested scrolling scenarios, since web scrolling to the edge will prioritize triggering the overscroll
   * bounce effect, it is recommended to set overScrollMode to OverScrollMode.NEVER to avoid affecting the user
   * experience in this scenario.</p>
   *
   * @param { NestedScrollOptions | NestedScrollOptionsExt | undefined } value - options for
   *     nested scrolling.
   * @returns { WebAttribute } the attribute of the scroll.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default nestedScroll(value: NestedScrollOptions | NestedScrollOptionsExt | undefined): this;
  /**
   * Sets the enable native embed mode for web.
   *
   * <p><strong>API Note</strong>:
   * <strong>Performance Note</strong>:
   * <p>For details about how to rendering native components on the Web using same-layer rendering.
   * </p>
   *
   * @param { boolean | undefined } enabled - Whether to enable the same-layer rendering feature.
   *     The value true means to enable the same-layer rendering feature, and false means the opposite.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default enableNativeEmbedMode(enabled: boolean | undefined): this;
  /**
   * Register native pattern with specific tag and type.
   *
   * @param { string | undefined } tag - Tag name used by html webpage.
   * @param { string | undefined } type - Type of the tag.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default registerNativeEmbedRule(tag: string | undefined, type: string | undefined): this;
  /**
   * Triggered when embed lifecycle changes.
   *
   * <p><strong>API Note</strong>:
   * <strong>Performance Note</strong>:
   * <p>For details about how to rendering native components on the Web using same-layer rendering.
   * </p>
   *
   * @param { function | undefined } callback - Function Triggered when embed lifecycle changes.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onNativeEmbedLifecycleChange(callback: ((event: NativeEmbedDataInfo) => void) | undefined): this;
  /**
   * Triggered when embed visibility changes.
   *
   * @param { OnNativeEmbedVisibilityChangeCallback | undefined } callback - Callback triggered when embed
   *     visibility changes.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onNativeEmbedVisibilityChange(callback: OnNativeEmbedVisibilityChangeCallback | undefined): this;
  /**
   * Triggered when gesture effect on embed tag.
   *
   * <p><strong>API Note</strong>:
   * <strong>Performance Note</strong>:
   * <p>For details about how to rendering native components on the Web using same-layer rendering.
   * </p>
   *
   * @param { function | undefined } callback - Function Triggered when gesture effect on embed tag.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onNativeEmbedGestureEvent(callback: ((event: NativeEmbedTouchInfo) => void) | undefined): this;
  /**
   * Triggered when mouse effect on embed tag.
   *
   * @param { MouseInfoCallback | undefined } callback - callback Triggered when mouse effect on embed tag.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onNativeEmbedMouseEvent(callback: MouseInfoCallback | undefined): this;
  /**
   * Called to set copy option
   *
   * @param { CopyOptions | undefined } value - copy option.The default value is CopyOptions.LocalDevice.
   * @returns { WebAttribute } the attribute of the scroll.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default copyOptions(value: CopyOptions | undefined): this;
  /**
   * When the URL is about to be loaded into the current Web, it gives the application the opportunity to
   * take control.
   * This will not called for POST requests, may be called for subframes and with non-HTTP(S) schemes.
   *
   * @param { OnOverrideUrlLoadingCallback | undefined } callback - The callback for onOverrideUrlLoading.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onOverrideUrlLoading(callback: OnOverrideUrlLoadingCallback | undefined): this;
  /**
   * Triggered when the web page's document resource error.
   * <p><strong>API Note</strong>:<br>
   * This only triggered for main frame.
   * </p>
   *
   * @param { OnOverrideErrorPageCallback | undefined } callback The triggered function when the
   *     web page's document resource error.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onOverrideErrorPage(callback: OnOverrideErrorPageCallback | undefined): this;
  /**
   * Enable whether to automatically resize text. The default value is true.
   *
   * @param { boolean | undefined } textAutosizing - Whether to enable text autosizing.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default textAutosizing(textAutosizing: boolean | undefined): this;
  /**
   * Enable app creates native media player to play web page media source.
   *
   * @param { NativeMediaPlayerConfig | undefined } config - The configuration of native media player.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default enableNativeMediaPlayer(config: NativeMediaPlayerConfig | undefined): this;
  /**
   * 渲染进程无响应时触发该回调函数。如果Web组件无法处理输入事件，或者无法在合理的时间范围内导航到新的URL，则认为网页进程无响应，并将触发该回调。
   *
   * 只要网页进程一直无响应，此回调仍可能会持续触发，直到网页进程再次响应，此时
   * [onRenderProcessResponding](docroot://reference/apis-arkweb/arkts-basic-components-web-events.md#onrenderprocessresponding12)
   * 将会触发。
   *
   * 应用可以通过WebviewController接口
   * [terminateRenderProcess]{@link ./../../../@ohos.web.webview:webview.WebviewController.terminateRenderProcess}来终止关联的渲染
   * 进程，这可能会影响同一渲染进程的其他Web组件。
   *
   * @param { OnRenderProcessNotRespondingCallback | undefined } callback 渲染进程无响应时触发的回调。
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onRenderProcessNotResponding(callback: OnRenderProcessNotRespondingCallback | undefined): this;
  /**
   * 渲染进程由无响应状态变回正常运行状态时触发该回调函数，该回调表明该网页并非真正卡死。
   *
   * @param { OnRenderProcessRespondingCallback | undefined } callback 渲染进程由无响应状态变回正常
   * 运行状态时触发的回调。
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onRenderProcessResponding(callback: OnRenderProcessRespondingCallback | undefined): this;
  /**
   * Triggered when the viewport-fit meta is detected for web page.
   *
   * @param { OnViewportFitChangedCallback | undefined } callback - The callback for onViewportFitChanged.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onViewportFitChanged(callback: OnViewportFitChangedCallback | undefined): this;
  /**
   * 网页中可编辑元素（如input标签）拉起软键盘之前会回调该接口，应用可以使用该接口拦截系统软键盘的弹出，
   * 配置应用定制的软键盘（应用根据该接口可以决定使用系统默认软键盘/定制enter键的系统软键盘/全部由应用自定义的软键盘）。
   *
   * @param { WebKeyboardCallback | undefined } callback - 拦截网页拉起软键盘回调。
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onInterceptKeyboardAttach(callback: WebKeyboardCallback | undefined): this;
  /**
   * Called when received Ads blocked results.
   * If blocked results exist at the end of page loading, the first call will be triggered.
   * To avoid performance issues, subsequent results will be periodically reported through this api.
   *
   * @param { OnAdsBlockedCallback | undefined } callback - The callback for OnAdsBlockedCallback.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onAdsBlocked(callback: OnAdsBlockedCallback | undefined): this;
  /**
   * Web组件自定义软件键盘避让模式。
   * 当UIContext设置的键盘避让模式为[KeyboardAvoidMode.RESIZE]{@link ./../../../@ohos.arkui.UIContext:KeyboardAvoidMode}模式时，该接口功能不生效。
   *
   * @param { WebKeyboardAvoidMode | undefined } mode - Web软键盘避让模式。<br>嵌套滚动场景下不推荐使用web软键盘避让，包括
   * RESIZE_VISUAL与RESIZE_CONTENT。默认值：`WebKeyboardAvoidMode.RESIZE_CONTENT`避让行为。
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default keyboardAvoidMode(mode: WebKeyboardAvoidMode | undefined): this;
  /**
   * Set the custom text menu.
   *
   * @param { EditMenuOptions | undefined } editMenu - Customize text menu options.
   *     The number of menu items, as well as the content size and icon size of the menu,
   *     should be consistent with the ArkUI Menu component.
   *     The system-provided id enumeration values (TextMenuItemId) in the menu are only
   *     supported for CUT, COPY, PASTE, SELECT_ALL, TRANSLATE, SEARCH and some AI menu in the web.
   *     The textRange parameter in the onMenuItemClick function is meaningless in the web,
   *     and the input value is -1.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default editMenuOptions(editMenu: EditMenuOptions | undefined): this;
  /**
   * Enable or disable haptic feedback.
   *
   * @param { boolean | undefined } enabled - Default value is true, set false to disable haptic feedback.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default enableHapticFeedback(enabled: boolean | undefined): this;
  /**
   * Bind to the selection menu.
   *
   * @param { WebElementType | undefined } elementType - Indicates the type of selection menu.
   * @param { CustomBuilder | undefined } content - Indicates the content of selection menu.
   * @param { WebResponseType | undefined } responseType - Indicates response type of selection menu.
   * @param { SelectionMenuOptionsExt | undefined } [options] - Indicates the options of selection menu.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default bindSelectionMenu(elementType: WebElementType | undefined, content: CustomBuilder | undefined, responseType: WebResponseType | undefined, options?: SelectionMenuOptionsExt | undefined): this;
  /**
   * Sets whether to enable AVSession for web pages.
   *
   * @param { boolean | undefined } follow The value true means to follow the system font weight,
   *     and false means the opposite.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default enableFollowSystemFontWeight(follow: boolean | undefined): this;
  /**
   * Sets whether to optimize parser budget to reduce FCP time
   *
   * @param { boolean | undefined } enabled Whether to enable AVSession. The value true means to enable AVSession,
   *     and false means the opposite.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default enableWebAVSession(enabled: boolean | undefined): this;
  /**
   * Sets whether to follow the system font weight.
   *
   * @param { boolean | undefined } optimizeParserBudget Default value is false, set true to enable
   *     optimize parser budget.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default optimizeParserBudget(optimizeParserBudget: boolean | undefined): this;
  /**
   * Injects the JavaScripts that will be run just after document object has been created.
   *
   * @param { Array<ScriptItem> | undefined } scripts - The JavaScripts executed in array order.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default runJavaScriptOnDocumentStart(scripts: Array<ScriptItem> | undefined): this;
  /**
   * Injects the JavaScripts that will be run after document has been parsed finished.
   *
   * @param { Array<ScriptItem> | undefined } scripts - The JavaScripts executed in array order.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default runJavaScriptOnDocumentEnd(scripts: Array<ScriptItem> | undefined): this;
  /**
   * Injects the JavaScripts that will be run after head element has been parsed finished.
   *
   * @param { Array<ScriptItem> | undefined } scripts - The JavaScripts executed in array order.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default runJavaScriptOnHeadEnd(scripts: Array<ScriptItem> | undefined): this;
  /**
   * Sets the embed options, only valid when enableNativeEmbedMode is true.
   *
   * @param { EmbedOptions | undefined } options - The embed options, which can be {@link EmbedOptions}.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default nativeEmbedOptions(options?: EmbedOptions | undefined): this;
  /**
   * Enable data detector.
   *
   * @param { boolean | undefined } enable - {@code true} means enable data detector in Web;{@code false} otherwise.
   *     The default value is false.
   * @returns { WebAttribute } The attribute of the web.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default enableDataDetector(enable: boolean | undefined): this;
  /**
   * Data detector with config.
   *
   * @param { TextDataDetectorConfig | undefined } config - The config of text data detector.
   * @returns { WebAttribute } The attribute of the web.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default dataDetectorConfig(config: TextDataDetectorConfig | undefined): this;
  /**
   * 当Web页面触发window.open(url, name)时，会根据name查找是否存在已绑定的Web实例。若存在，该实例将收到此回调以通知应用需将其展示至前端；若不存在，则通过
   * [onWindowNew](docroot://reference/apis-arkweb/arkts-basic-components-web-events.md#onwindownew9)通知应用创建新Web实例。
   *
   * 说明：通过name绑定Web实例?：需在[onWindowNew](docroot://reference/apis-arkweb/arkts-basic-components-web-events.md#onwindownew9)
   * 回调中调用event.handler.setWebController方法，并传入新Web实例的controller，以完成绑定。
   * name?命名需符合正则表达式[a-zA-Z0-9_]+。当该name被用作\<a>或\<form>标签的target属性值时，已绑定的Web实例同样会触发此回调。
   *
   * @param { VoidCallback | undefined } callback 再次在原页面触发window.open后，在已打开的新页面触发该回调。
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onActivateContent(callback: VoidCallback | undefined): this;
  /**
   * Sets up a condition that bypass vsync.
   * If the condition is matched, the drawing schedule does not rely on Vsync scheduling and directly
   * rendering and drawing
   *
   * @param { WebBypassVsyncCondition | undefined } condition - The condition to bypass render vsync.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default bypassVsyncCondition(condition: WebBypassVsyncCondition | undefined): this;
  /**
   * Set the gesture focus acquisition mode.
   * When users interact with the web using different gestures,
   * this determines whether and when focus is acquired based on the configured mode.
   * Default value: DEFAULT, where all gestures acquire focus on touch down.
   *
   * @param { GestureFocusMode | undefined } mode - The gesture focus mode, which can be {@link GestureFocusMode}.
   *     The default value is FocusMode.DEFAULT.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default gestureFocusMode(mode: GestureFocusMode | undefined): this;
  /**
   * Set whether to comply with the zoom restrictions set by the<meta name="viewport">tag in the webpage.
   *
   * @param { boolean | undefined } enable {@code true} means the Web Comply with the zoom restrictions
   *     set by the<meta name="viewport">tag on the webpage; {@code false} otherwise.
   *     The default value is true.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default forceEnableZoom(enable: boolean | undefined): this;
  /**
   * Triggered when the param element which is a child item of the object element has changed.
   *
   * @param { OnNativeEmbedObjectParamChangeCallback | undefined } callback - callback Triggered when the param
   *     element has changed.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onNativeEmbedObjectParamChange(callback: OnNativeEmbedObjectParamChangeCallback | undefined): this;
  /**
     * 设置Web组件旋转时，宽高动画过程中组件内容的填充方式。若未显式调用属性，默认保持动画终态的内容大小，内容始终与组件左上角对齐。
     *
   * @param { WebRotateEffect | undefined } effect - 设置Web组件旋转时，宽高动画过程中组件内容的填充方式。
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default rotateRenderEffect(effect: WebRotateEffect | undefined): this;
  /**
   * Sets whether the Web supports zooming using Ctrl.
   *
   * @param { boolean | undefined } zoomControlAccess - {@code true} means the Web supports zooming using Ctrl,
   *     {@code false} otherwise.
   *     The default value is true.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default zoomControlAccess(zoomControlAccess: boolean | undefined): this;
  /**
   * Triggered when web engine detects the current page is blank screen or nearly blank.
   *
   * @param { OnDetectBlankScreenCallback | undefined } callback - callback triggered when web engine detects
   *     current page is blank or nearly blank.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onDetectedBlankScreen(callback: OnDetectBlankScreenCallback | undefined): this;
  /**
   * The options for blank screen detection.
   *
   * @param { BlankScreenDetectionConfig | undefined } detectConfig - the strategy config for detection.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default blankScreenDetectionConfig(detectConfig: BlankScreenDetectionConfig | undefined): this;
  /**
   * Set whether to enable the back-to-top feature for web component when the status bar is touched.
   *
   * @param { boolean | undefined } backToTop {@code true} means enable the back-to-top feature,
   *     when the status bar is touched. {@code false} otherwise. The default value is true.
   *     True when passing in undefined and null.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default backToTop(backToTop: boolean | undefined): this;
  /**
   * Enable selected data detector.
   *
   * @param { boolean | undefined } enable - whether to enable the selected data detector.
   *     {@code true} means enable all select data detector in Web;{@code false} otherwise.
   *     The default value is true.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default enableSelectedDataDetector(enable: boolean | undefined): this;
  /**
   * Triggered when the first screen of the web page has been painted.
   *
   * @param { OnFirstScreenPaintCallback | undefined } callback - callback triggered to
   *     report the info for the first screen painting of the current web page.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onFirstScreenPaint(callback: OnFirstScreenPaintCallback | undefined): this;
  /**
   * Sets whether enable auto fill or not.
   *
   * @param { boolean | undefined } value - Indicates the flag whether autofill is enabled.
   *      Default value is true.true: enable, false: disable.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default enableAutoFill(value: boolean | undefined): this;
  /**
   * Called when the text selection changes.
   *
   * @param { TextSelectionChangeCallback | undefined } callback - when the text selection changes.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onTextSelectionChange(callback: TextSelectionChangeCallback | undefined): this;
  /**
   * Set up web component to support AI image recognition capability.
   *
   * @param { boolean | undefined } enable - {@code true} means the Web AI image recognition capability,
   *      {@code false} otherwise.
   *      The default value is true.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default enableImageAnalyzer(enable: boolean | undefined): this;
  /**
     * Triggered after camera capture state changed.
     *
   * @param { OnCameraCaptureStateChangeCallback } callback -  callback triggered to
     *     report current page camera capture state changing event.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onCameraCaptureStateChange(callback: OnCameraCaptureStateChangeCallback | undefined): this;
  /**
     * Triggered when microphone capture state changed.
     *
   * @param { OnMicrophoneCaptureStateChangeCallback } callback -  callback triggered to
     *     report current page microphone capture state changing event.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  default onMicrophoneCaptureStateChange(callback: OnMicrophoneCaptureStateChangeCallback | undefined): this;
  /**
     * 设置是否使能默认右键菜单
     *
   * @param { boolean | undefined } enable - {@code true} means the Web enable the default right-click context menu,
     *     {@code false} otherwise.
     *     The default value is false.
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 24 static
   */
  default enableDefaultContextMenu(enable: boolean | undefined): this;
  /**
   * 启用或禁用此组件的拖动。
   *
   * @param { boolean | undefined } value - {@code true}启用拖动，{@code false}禁用拖动。
   *     默认值为true。
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default enableDrag(value: boolean | undefined): this;
  /**
   * 设置滚动条布局策略。
   *
   * @param { ScrollbarLayoutPolicy | undefined } policy - 要应用的布局策略。
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default scrollbarLayoutPolicy(policy: ScrollbarLayoutPolicy | undefined): this;
  /**
   * 在WebView组件中启用或禁用滚动手势的方向锁定。
   *
   * @param { boolean | undefined } value - 是否使能定向锁定。
   *     - `true`：启用方向锁（嵌套滚动场景下默认）。
   *     - `false`：禁用方向锁。
   * @param { ScrollDirectionalLockType | undefined } type - 指定方向锁的应用场景。
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default enableScrollDirectionalLock(value: boolean | undefined, type: ScrollDirectionalLockType | undefined): this;
  /**
   * Web组件的自定义AI会话配置。
   * 用于注册多个自定义AI会话。
   *
   * @param { Array<AISessionEvent> | undefined } aiSessions - AISessionOptions对象的数组。
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default aiSessionOptions(aiSessions: Array<AISessionEvent> | undefined): this;
  /**
   * Set the attribute modifier
   *
   * @param { AttributeModifier<WebAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { WebAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<WebAttribute> | AttributeModifier<CommonMethod> | undefined): this;
  /**
   * 设置键盘外观。不调用该方法时，默认跟随系统的沉浸式模式。
   *
   * @param { WebKeyboardAppearanceMode | undefined } mode - 键盘外观。传入undefined或null时，跟随系统的沉浸式模式。
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default keyboardAppearance(mode: WebKeyboardAppearanceMode | undefined): this;
  /**
   * 网页绑定输入法成功时触发此回调，使用callback异步回调。
   * @param { OnInputmethodAttachedCallback | undefined } callback - 回调函数，设置Web组件检测到输入法绑定成功时的回调。
   * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onInputmethodAttached(callback: OnInputmethodAttachedCallback | undefined): this;
}
/**
 * Defines the ssl error event.
 *
 * @typedef SslErrorEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface SslErrorEvent {
  /**
   * Notifies the user of the operation behavior of the web component.
   *
   * @type { SslErrorHandler }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  handler: SslErrorHandler;
  /**
   * Error codes.
   *
   * @type { SslError }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  error: SslError;
  /**
   * Request url.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  url: string;
  /**
   * Original url.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  originalUrl: string;
  /**
   * Referrer.
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  referrer: string;
  /**
   * Whether the error is fatal.
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  isFatalError: boolean;
  /**
   * Whether the request is main frame.
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  isMainFrame: boolean;
  /**
   * Certificate chain data in DER format.
   *
   * @type { ?Array<Uint8Array> }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  certChainData?: Array<Uint8Array>;
}
/**
 * 通过NestedScrollOptionsExt可以设置上下左右四个方向的嵌套滚动规则。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface NestedScrollOptionsExt {
  /**
   * 可滚动组件往上滚动时的嵌套滚动选项。
   * SELF_FIRST。 默认值： NestedScrollMode。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  scrollUp?: NestedScrollMode;
  /**
   * 可滚动组件往下滚动时的嵌套滚动选项。
   * SELF_FIRST。 默认值： NestedScrollMode。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  scrollDown?: NestedScrollMode;
  /**
   * 可滚动组件往右滚动时的嵌套滚动选项。
   * SELF_FIRST。 默认值： NestedScrollMode。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  scrollRight?: NestedScrollMode;
  /**
   * 可滚动组件往左滚动时的嵌套滚动选项。
   * SELF_FIRST。 默认值： NestedScrollMode。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  scrollLeft?: NestedScrollMode;
}
/**
 * Defines the Embed Options.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface EmbedOptions {
  /**
   * Whether the embed element support the default intrinsic size of 300 * 150, expressed in CSS pixels.
   * <br>When CSS size is set, the embed element size is CSS size, otherwise it is intrinsic size.
   * <br>If true, then the intrinsic size is 300 * 150.
   * <br>If false, the embed element will not be rendered when the CSS size is not set.
   *
   * @default false
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  supportDefaultIntrinsicSize?: boolean;
  /**
   * Whether the {@link onNativeEmbedVisibilityChange} event support css display atrribute of
   * the embed element.
   * <br>Default value is false. If true, the change of the CSS display property of
   * embed element will be reported through the {@link onNativeEmbedVisibilityChange} event.
   *
   * @default false
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  supportCssDisplayChange?: boolean;
}
/**
 * 手势获焦的模式。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum GestureFocusMode {
  /**
   * 默认值，Web会在触摸按下屏幕时申请获焦，包括点击、长按、滑动、缩放等任何触摸屏幕的手势行为。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  DEFAULT = 0,
  /**
   * Web只会在点击和长按手势事件生成时申请获焦，点击和长按在触摸抬起之后生成，
   * 滑动和缩放等手势行为不会获焦。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  GESTURE_TAP_AND_LONG_PRESS = 1
}
/**
 * 定义文件选择器拉取文件时网页推荐的文件类型信息。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface AcceptableFileType {
  /**
   * 文件MIME类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  mimeType: string;
  /**
   * 文件类型数组，包含若干可供选择的文件类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  acceptableType: Array<string>;
}
/**
 * WebView中新窗口的打开方式。
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare enum NavigationPolicy {
  /**
   * 在新弹窗中打开。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  NEW_POPUP = 0,
  /**
   * 在新窗口中打开。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  NEW_WINDOW = 1,
  /**
   * 在新标签页中以后台方式打开。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  NEW_BACKGROUND_TAB = 2,
  /**
   * 在新标签页中以前台方式打开。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  NEW_FOREGROUND_TAB = 3
}
/**
 * 网页请求创建的新窗口特征信息，包括大小和位置。
 *
 * @interface WindowFeatures
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface WindowFeatures {
  /**
   * 新窗口高度（单位：像素）。
   *
   * @type { double }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  height: double;
  /**
   * 新窗口宽度（单位：像素）。
   *
   * @type { double }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  width: double;
  /**
   * 新窗口左上角横坐标（单位：像素）。
   *
   * @type { double }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  x: double;
  /**
   * 新窗口左上角纵坐标（单位：像素）。
   *
   * @type { double }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  y: double;
}
/**
 * 定义网页请求用户创建窗口时触发的回调。
 *
 * @typedef OnWindowNewExtEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
export declare interface OnWindowNewExtEvent {
  /**
   * true代表请求创建对话框，false代表新标签页。
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  isAlert: boolean;
  /**
   * true代表用户触发，false代表非用户触发。
   *
   * @type { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  isUserTrigger: boolean;
  /**
   * 目标url。
   *
   * @type { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  targetUrl: string;
  /**
   * 用于设置新建窗口的WebviewController实例。
   *
   * @type { ControllerHandler }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  handler: ControllerHandler;
  /**
   * 网页请求创建的新窗口特征信息。
   *
   * @type { WindowFeatures }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  windowFeatures: WindowFeatures;
  /**
   * 网页请求用户创建新窗口时的窗口打开方式。
   *
   * @type { NavigationPolicy }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  navigationPolicy: NavigationPolicy;
}
/**
 * 定义滚动条的布局策略，与{@link scrollbarLayoutPolicy}配合使用。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum ScrollbarLayoutPolicy {
  /**
   * 滚动条布局遵循W3C标准（CSS/HTML/XHTML）。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  CONTENT = 0,

  /**
   * 遵循系统语言中滚动条布局的系统UI约定。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SYSTEM = 1
}
/**
 * 定义滑动方向锁定的场景类型。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum ScrollDirectionalLockType {
  /**
   * 所有场景都支持滑动锁定。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  ALL = 0,

  /**
   * 嵌套滚动场景下支持滑动锁定。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  NESTED_SCROLL = 1
}
/**
 * AI会话创建时触发。
 * 支持自定义模型初始化和结果处理。
 * 返回`true`以绕过系统默认行为；
 * return `false`继续执行默认逻辑。
 *
 * @param { string } id - 会话任务ID。
 * @param { string } params - 会话任务ID。
 * @param { OnAISessionCallback } result - 创建时传递的上下文数据。
 * @returns { boolean } - result - 通知创建结果的回调函数。
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type OnCreateAISession = (id: string, params: string, result: OnAISessionCallback) => boolean;
/**
 * 执行AI会话动作时触发。
 * 支持AI模型执行的自定义实现。
 *
 * @param { string } id - 会话任务ID。
 * @param { string } params - 会话任务ID。
 * @param { OnAISessionCallback } result - 执行期间传递的上下文数据（以JSON字符串格式）。
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type OnExecuteAIAction = (id: string, params: string, result: OnAISessionCallback) => void;
/**
 * 当AI会话销毁时触发。
 * 用于清理自定义AI模型关联的资源。
 *
 * @param { string } id - 会话任务ID。
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type OnDestroyAISession = (id: string) => void;
/**
 * Web组件的自定义AI会话模型集成。
 * 用户可以通过该接口定义自定义AI会话行为。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface AISessionEvent {
  /**
   * AI会话的类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  aiSessionType: AISessionType;

  /**
   * AI会话创建时触发。
   * 支持自定义模型初始化和结果处理。
   * 返回`true`以绕过系统默认行为；
   * return `false`继续执行默认逻辑。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onCreateAISession: OnCreateAISession;

  /**
   * 执行AI会话动作时触发。
   * 支持AI模型执行的自定义实现。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onExecuteAIAction: OnExecuteAIAction;

  /**
   * 当AI会话销毁时触发。
   * 用于清理自定义AI模型关联的资源。
   *
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onDestroyAISession: OnDestroyAISession;
}
/**
 * 表示支持的AI会话类型的枚举。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum AISessionType {
  /**
   * 翻译器模型
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  TRANSLATOR = 1,

  /**
   * 语言检测器模型
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  LANGUAGE_DETECTOR = 2,

  /**
   * 摘要生成器模型
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SUMMARIZER = 3,

  /**
   * 写作助手模型
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  WRITER = 4,

  /**
   * 重写助手模型
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  REWRITER = 5,

  /**
   * 提示工程模型
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  PROMPT = 6,

  /**
   * 校对助手模特
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  PROOFREADER = 7
}
/**
 * 表示AI会话操作的结果状态的枚举。
 *
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum AISessionResultType {
  /**
   * 操作已成功完成。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SUCCESS = 0,

  /**
   * 操作失败。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  FAILURE = 1,

  /**
   * 操作当前正在进行中。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  RUNNING = 2
}
/**
 * AI会话操作的回调类型。
 * 用于上报会话创建或执行的结果。
 *
 * @param { AISessionResultType } state - 当前结果状态。
 * @param { string } content - 当前结果状态。
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type OnAISessionCallback = (state: AISessionResultType, content: string) => void;
/**
 * Defines Web Component.
 *
 * @param { WebOptions } value.
 * @param { CustomBuilder } [content_] - container.
 * @returns { WebAttribute }
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function Web(
    value: WebOptions,
    content_?: CustomBuilder,
): WebAttribute;