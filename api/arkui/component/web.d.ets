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
 * @arkts 1.2
 */
import webview from '../../@ohos.web.webview';
import image from '../../@ohos.multimedia.image';
import { CustomBuilder, CommonMethod, Callback, TouchEvent, NestedScrollOptions, KeyEvent, UICommonMethod, AttributeModifier } from "./common";
import { Resource } from '../../global/resource';
import { Position, ResourceStr } from "./units";
import { MenuType, EditMenuOptions } from "./textCommon";
import { CopyOptions, NestedScrollMode } from "./enums";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
* Provides methods for controlling the web controller.
*
* @typedef { webview.WebviewController }
* @syscap SystemCapability.Web.Webview.Core
* @crossplatform
* @atomicservice
* @since 20
*/
export type WebviewController = webview.WebviewController;
/**
 * The callback of load committed.
 *
 * @typedef { function } OnNavigationEntryCommittedCallback
 * @param { LoadCommittedDetails } loadCommittedDetails - callback information of onNavigationEntryCommitted.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export type OnNavigationEntryCommittedCallback = (loadCommittedDetails: LoadCommittedDetails) => void;
/**
 * The callback of ssl error event.
 *
 * @typedef { function } OnSslErrorEventCallback
 * @param { SslErrorEvent } sslErrorEvent - callback information of onSslErrorEvent.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export type OnSslErrorEventCallback = (sslErrorEvent: SslErrorEvent) => void;
/**
 * The callback of largestContentfulPaint.
 *
 * @typedef { function } OnLargestContentfulPaintCallback
 * @param { LargestContentfulPaint } largestContentfulPaint - callback information of onLargestContentfulPaint.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export type OnLargestContentfulPaintCallback = (largestContentfulPaint: LargestContentfulPaint) => void;
/**
 * The callback of firstMeaningfulPaint.
 *
 * @typedef { function } OnFirstMeaningfulPaintCallback
 * @param { FirstMeaningfulPaint } firstMeaningfulPaint - callback information of onFirstMeaningfulPaint.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export type OnFirstMeaningfulPaintCallback = (firstMeaningfulPaint: FirstMeaningfulPaint) => void;
/**
 * The callback of onOverrideUrlLoading.
 * Should not call WebviewController.loadUrl with the request's URL and then return true.
 *
 * @typedef { function } OnOverrideUrlLoadingCallback
 * @param { WebResourceRequest } webResourceRequest - callback information of onOverrideUrlLoading.
 * @returns { boolean } - Returning true causes the current Web to abort loading the URL,
 *                        false causes the Web to continue loading the url as usual.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export type OnOverrideUrlLoadingCallback = (webResourceRequest: WebResourceRequest) => boolean;
/**
 * The callback of Intelligent Tracking Prevention.
 *
 * @typedef { function } OnIntelligentTrackingPreventionCallback
 * @param { IntelligentTrackingPreventionDetails } details - callback information of onIntelligentTrackingPrevention.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export type OnIntelligentTrackingPreventionCallback = (details: IntelligentTrackingPreventionDetails) => void;
/**
 * The callback of onNativeEmbedVisibilityChange.
 *
 * @typedef { function } OnNativeEmbedVisibilityChangeCallback
 * @param { NativeEmbedVisibilityInfo } nativeEmbedVisibilityInfo - callback information of onNativeEmbedVisibilityChange.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20
 */
export type OnNativeEmbedVisibilityChangeCallback = (nativeEmbedVisibilityInfo: NativeEmbedVisibilityInfo) => void;
/**
 * The configuration of native media player.
 *
 * @typedef NativeMediaPlayerConfig
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface NativeMediaPlayerConfig {
    /**
     * Should playing web media by native application instead of web player.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    enable: boolean;
    /**
     * The contents painted by native media player should overlay web page.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    shouldOverlay: boolean;
}
/**
 * The callback of render process not responding.
 *
 * @typedef { function } OnRenderProcessNotRespondingCallback
 * @param { RenderProcessNotRespondingData } data - details of onRenderProcessNotResponding.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20
 */
export type OnRenderProcessNotRespondingCallback = (data: RenderProcessNotRespondingData) => void;
/**
 * The callback of render process responding.
 *
 * @typedef { function } OnRenderProcessRespondingCallback
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20
 */
export type OnRenderProcessRespondingCallback = () => void;
/**
* The callback of ViewportFit Changed.
 *
 * @typedef { function } OnViewportFitChangedCallback
 * @param { ViewportFit } viewportFit - details of OnViewportFitChangedCallback.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export type OnViewportFitChangedCallback = (viewportFit: ViewportFit) => void;
/**
 * The callback of ads block
 *
 * @typedef { function } OnAdsBlockedCallback
 * @param { AdsBlockedDetails } details - details of OnAdsBlockedCallback.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export type OnAdsBlockedCallback = (details: AdsBlockedDetails) => void;
/**
 * Defines the ads block details.
 *
 * @interface AdsBlockedDetails
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface AdsBlockedDetails {
    /**
     * The url of main frame.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    url: string;
    /**
     * the url of ads.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    adsBlocked: Array<string>;
}
/**
 * Defines the web keyboard options when onInterceptKeyboardAttach event return.
 *
 * @interface WebKeyboardOptions
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface WebKeyboardOptions {
    /**
     * Whether the system keyboard is used.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    useSystemKeyboard: boolean;
    /**
     * Set the enter key type when the system keyboard is used, the "enter" key related to the {@link inputMethodEngine}.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    enterKeyType?: number;
    /**
     * Set the custom keyboard builder when the custom keyboard is used.
     *
     * @type { ?CustomBuilder }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    customKeyboard?: CustomBuilder;
}
/**
 * Define the controller to interact with a custom keyboard, related to the {@link onInterceptKeyboardAttach} event.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare class WebKeyboardController {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    constructor();
    /**
     * Insert text into Editor.
     *
     * @param { string } text - text which will be inserted.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    insertText(text: string): void;
    /**
     * Delete text from back to front.
     *
     * @param { number } length - length of text, which will be deleted from back to front.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    deleteForward(length: number): void;
    /**
     * Delete text from front to back.
     *
     * @param { number } length - length of text, which will be deleted from front to back.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    deleteBackward(length: number): void;
    /**
     * Send the function of the key.
     *
     * @param { number } key - action indicates the "enter" key related to the {@link inputMethodEngine}
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    sendFunctionKey(key: number): void;
    /**
     * Close the custom keyboard.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    close(): void;
}
/**
 * Defines the web keyboard callback info related to the {@link onInterceptKeyboardAttach} event.
 *
 * @interface WebKeyboardCallbackInfo
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface WebKeyboardCallbackInfo {
    /**
     * The web keyboard controller.
     *
     * @type { WebKeyboardController }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    controller: WebKeyboardController;
    /**
     * The attributes of web input element.
     *
     * @type { Record<string, string> }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
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
 * @since 20
 */
export type WebKeyboardCallback = (keyboardCallbackInfo: WebKeyboardCallbackInfo) => WebKeyboardOptions;
/**
 * Enum type supplied to {@link getMessageLevel} for receiving the console log level of JavaScript.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum MessageLevel {
    /**
     * Debug level.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Debug = 0,
    /**
     * Error level.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Error = 1,
    /**
     * Info level.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Info = 2,
    /**
     * Log level.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Log = 3,
    /**
     * Warn level.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Warn = 4
}
/**
 * The Web's behavior to load from HTTP or HTTPS. Defaults to MixedMode.None.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum MixedMode {
    /**
     * Allows all sources.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    All = 0,
    /**
     * Allows sources Compatibly.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Compatible = 1,
    /**
     * Don't allow unsecure sources from a secure origin.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
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
 * @since 20
 */
export type OnSafeBrowsingCheckResultCallback = (threatType: ThreatType) => void;
/**
 * Enum type supplied to {@link getHitTest} for indicating the cursor node HitTest.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare enum HitTestType {
    /**
     * The edit text.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    EditText = 0,
    /**
     * The email address.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    Email = 1,
    /**
     * The HTML::a tag with src=http.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    HttpAnchor = 2,
    /**
     * The HTML::a tag with src=http + HTML::img.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    HttpAnchorImg = 3,
    /**
     * The HTML::img tag.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    Img = 4,
    /**
     * The map address.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    Map = 5,
    /**
     * The phone number.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    Phone = 6,
    /**
     * Other unknown HitTest.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    Unknown = 7
}
/**
 * Enum type supplied to {@link cacheMode} for setting the Web cache mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum CacheMode {
    /**
     * load cache when they are available and not expired, otherwise load online.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Default = 0,
    /**
     * load cache when they are available, otherwise load online.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    None = 1,
    /**
     * Load online and not cache.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Online = 2,
    /**
     * load cache and not online.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Only = 3
}
/**
 * Enum type supplied to {@link overScrollMode} for setting the web overScroll mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare enum OverScrollMode {
    /**
     * Disable the web over-scroll mode.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    NEVER = 0,
    /**
     * Enable the web over-scroll mode.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    ALWAYS = 1
}
/**
 * Enum type supplied to {@link blurOnKeyboardHideMode} for setting the web blurOnKeyboardHide mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare enum BlurOnKeyboardHideMode {
    /**
     * The focused input elements on webview will not blur when soft keyboard is hidden manually.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    SILENT = 0,
    /**
     * The focused input elements on webview will blur when soft keyboard is hidden manually.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    BLUR = 1
}
/**
 * Enum type supplied to {@link darkMode} for setting the web dark mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare enum WebDarkMode {
    /**
     * Disable the web dark mode.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    Off = 0,
    /**
     * Enable the web dark mode.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    On = 1,
    /**
     * Make web dark mode follow the system.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    Auto = 2
}
/**
 * Enum type supplied to {@link captureMode} for setting the web capture mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare enum WebCaptureMode {
    /**
     * The home screen.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    HOME_SCREEN = 0
}
/**
 * Enum type supplied to {@link threatType} for the website's threat type.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare enum ThreatType {
    /**
     * Illegal websites.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    THREAT_ILLEGAL = 0,
    /**
     * Fraud websites.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    THREAT_FRAUD = 1,
    /**
     * Websites with security risks.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    THREAT_RISK = 2,
    /**
     * Websites suspected of containing unhealthy content.
     * ArkWeb will not intercept this type of website and apps could handle it themselves.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    THREAT_WARNING = 3
}
/**
 * Defines the Media Options.
 *
 * @typedef WebMediaOptions
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface WebMediaOptions {
    /**
     * The time interval for audio playback to resume.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    resumeInterval?: number;
    /**
     * Whether the audio of each web is exclusive.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    audioExclusive?: boolean;
}
/**
 * Defines the screen capture configuration.
 *
 * @typedef ScreenCaptureConfig
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface ScreenCaptureConfig {
    /**
     * The mode for selecting the recording area.
     *
     * @type { WebCaptureMode }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    captureMode: WebCaptureMode;
}
/**
 * Define the handler to exit the full screen mode, related to the {@link onFullScreenEnter} event.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class FullScreenExitHandler {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor();
    /**
     * Exit the full screen mode.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    exitFullScreen(): void;
}
/**
 * Defines the event details when the web component enter full screen mode.
 *
 * @typedef FullScreenEnterEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface FullScreenEnterEvent {
    /**
     * A function handle to exit full-screen mode.
     *
     * @type { FullScreenExitHandler }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    handler: FullScreenExitHandler;
    /**
     * The intrinsic width of the video if the fullscreen element contains video element, expressed in CSS pixels.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    videoWidth?: number;
    /**
     * The intrinsic height of the video if the fullscreen element contains video element, expressed in CSS pixels.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    videoHeight?: number;
}
/**
 * The callback when the web component enter full screen mode.
 *
 * @typedef { function } OnFullScreenEnterCallback
 * @param { FullScreenEnterEvent } event - callback information of onFullScreenEnter.
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type OnFullScreenEnterCallback = (event: FullScreenEnterEvent) => void;
/**
 * Enum type supplied to {@link renderExitReason} when onRenderExited being called.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare enum RenderExitReason {
    /**
     * Render process non-zero exit status.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    ProcessAbnormalTermination = 0,
    /**
     * SIGKILL or task manager kill.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    ProcessWasKilled = 1,
    /**
     * Segmentation fault.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    ProcessCrashed = 2,
    /**
     * Out of memory.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    ProcessOom = 3,
    /**
     * Unknown reason.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    ProcessExitUnknown = 4
}
/**
 * The callback of custom hide of the context menu.
 *
 * @typedef { function } OnContextMenuHideCallback
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export type OnContextMenuHideCallback = () => void;
/**
 * Enum type supplied to {@link error} when onSslErrorEventReceive being called.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare enum SslError {
    /**
     * General error.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    Invalid = 0,
    /**
     * Hostname mismatch.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    HostMismatch = 1,
    /**
     * The certificate date is invalid.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    DateInvalid = 2,
    /**
     * The certificate authority is not trusted.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    Untrusted = 3
}
/**
 * Enum type supplied to {@link FileSelectorParam} when onFileSelectorShow being called.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum FileSelectorMode {
    /**
     * Allows single file to be selected.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    FileOpenMode = 0,
    /**
     * Allows multiple files to be selected.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    FileOpenMultipleMode = 1,
    /**
     * Allows file folders to be selected.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    FileOpenFolderMode = 2,
    /**
     * Allows select files to save.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    FileSaveMode = 3
}
/**
 * Enum type supplied to {@link layoutMode} for setting the web layout mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare enum WebLayoutMode {
    /**
     * Web layout follows the system.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    NONE = 0,
    /**
     * Adaptive web layout based on page size.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    FIT_CONTENT = 1
}
/**
 * Enum type supplied to {@link RenderProcessNotRespondingData} when onRenderProcessNotResponding is called.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20
 */
export declare enum RenderProcessNotRespondingReason {
    /**
     * Timeout for input sent to render process.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    INPUT_TIMEOUT = 0,
    /**
     * Timeout for navigation commit.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    NAVIGATION_COMMIT_TIMEOUT = 1
}
/**
 * Encompassed message information as parameters to {@link onFileSelectorShow} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class FileSelectorParam {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor();
    /**
     * Gets the title of this file selector.
     * @returns { string } Return the title of this file selector.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getTitle(): string;
    /**
     * Gets the FileSelectorMode of this file selector.
     * @returns { FileSelectorMode } Return the FileSelectorMode of this file selector.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getMode(): FileSelectorMode;
    /**
     * Gets an array of acceptable MIME type.
     * @returns { Array<string> } Return an array of acceptable MIME type.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getAcceptType(): Array<string>;
    /**
     * Gets whether this file selector use a live media captured value.
     *
     * @returns { boolean } Return {@code true} if captured media; return {@code false} otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    isCapture(): boolean;
    /**
     * Gets an array of raw acceptable MIME type.
     * @returns { Array<string> } Return an array of raw acceptable MIME type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    getMimeTypes(): Array<string>;
}
/**
 * Defines the js result.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class JsResult {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor();
    /**
     * Handle the user's JavaScript result if cancel the dialog.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    handleCancel(): void;
    /**
     * Handle the user's JavaScript result if confirm the dialog.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    handleConfirm(): void;
    /**
     * Handle the user's JavaScript result if confirm the prompt dialog.
     *
     * @param { string } result
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    handlePromptConfirm(result: string): void;
}
/**
 * Defines the file selector result, related to {@link onFileSelectorShow} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class FileSelectorResult {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor();
    /**
     * select a list of files.
     *
     * @param { Array<string> } fileList
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    handleFileList(fileList: Array<string>): void;
}
/**
 * Defines the http auth request result, related to {@link onHttpAuthRequest} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class HttpAuthHandler {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor();
    /**
     * confirm.
     *
     * @param { string } userName
     * @param { string } password
     * @returns { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    confirm(userName: string, password: string): boolean;
    /**
     * cancel.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    cancel(): void;
    /**
     * isHttpAuthInfoSaved.
     *
     * @returns { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    isHttpAuthInfoSaved(): boolean;
}
/**
 * Defines the ssl error request result, related to {@link onSslErrorEventReceive} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare class SslErrorHandler {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    constructor();
    /**
     * Confirm to use the SSL certificate.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    handleConfirm(): void;
    /**
     * Cancel this request.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    handleCancel(): void;
}
/**
 * Defines the client certificate request result, related to {@link onClientAuthenticationRequest} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare class ClientAuthenticationHandler {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    constructor();
    /**
     * Confirm to use the specified private key and client certificate chain.
     *
     * @param { string } priKeyFile - The file that store private key.
     * @param { string } certChainFile - The file that store client certificate chain.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    confirm(priKeyFile: string, certChainFile: string): void;
    /**
     * Confirm to use the authUri.The authUri can be obtained from certificate management.
     *
     * @param { string } authUri is the key of credentials.The credentials contain sign info and client certificates info.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    confirm(authUri: string): void;
    /**
     * Cancel this certificate request.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    cancel(): void;
    /**
     * Ignore this certificate request temporarily.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    ignore(): void;
}
/**
 * Defines the accessible resource type, related to {@link onPermissionRequest} method.
 *
 * @enum { string }
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum ProtectedResourceType {
    /**
     * The MidiSysex resource.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    MidiSysex = 'TYPE_MIDI_SYSEX',
    /**
     * The video capture resource, such as camera.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    VIDEO_CAPTURE = 'TYPE_VIDEO_CAPTURE',
    /**
     * The audio capture resource, such as microphone.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    AUDIO_CAPTURE = 'TYPE_AUDIO_CAPTURE',
    /**
     * The sensor resource, such as accelerometer.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    SENSOR = 'TYPE_SENSOR'
}
/**
 * Defines the onPermissionRequest callback, related to {@link onPermissionRequest} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class PermissionRequest {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor();
    /**
     * Reject the request.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    deny(): void;
    /**
     * Gets the source if the webpage that attempted to access the restricted resource.
     *
     * @returns { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getOrigin(): string;
    /**
     * Gets the resource that the webpage is trying to access.
     *
     * @returns { Array<string> }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getAccessibleResource(): Array<string>;
    /**
     * Grant origin access to a given resource.
     *
     * @param { Array<string> } resources
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    grant(resources: Array<string>): void;
}
/**
 * Defines the onScreenCapture callback, related to {@link onScreenCapture} method.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare class ScreenCaptureHandler {
    /**
     * Constructor.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    constructor();
    /**
     * Gets the source of the webpage that attempted to access the restricted resource.
     *
     * @returns { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    getOrigin(): string;
    /**
     * Grant origin access to a given resource.
     * @param { ScreenCaptureConfig } config The screen capture configuration.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    grant(config: ScreenCaptureConfig): void;
    /**
     * Reject the request.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    deny(): void;
}
/**
 * Defines the onDataResubmission callback, related to {@link onDataResubmission} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare class DataResubmissionHandler {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    constructor();
    /**
     * Resend related form data.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    resend(): void;
    /**
     * Do not resend related form data.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    cancel(): void;
}
/**
 * Defines the onWindowNew callback, related to {@link onWindowNew} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare class ControllerHandler {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    constructor();
    /**
     * Set WebController object.
     *
     * @param { WebviewController } controller
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    setWebController(controller: WebviewController): void;
}
/**
 * Defines the context menu source type, related to {@link onContextMenuShow} method.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare enum ContextMenuSourceType {
    /**
     * Other source types.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    None = 0,
    /**
     * Mouse.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    Mouse = 1,
    /**
     * Long press.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    LongPress = 2
}
/**
 * Defines the context menu media type, related to {@link onContextMenuShow} method.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare enum ContextMenuMediaType {
    /**
     * Not a special node or other media types.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    None = 0,
    /**
     * Image.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    Image = 1
}
/**
 * Defines the context menu input field type, related to {@link onContextMenuShow} method.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare enum ContextMenuInputFieldType {
    /**
     * Not an input field.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    None = 0,
    /**
     * The plain text type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    PlainText = 1,
    /**
     * The password type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    Password = 2,
    /**
     * The number type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    Number = 3,
    /**
     * The telephone type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    Telephone = 4,
    /**
     * Other types.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    Other = 5
}
/**
 * Defines the embed status, related to {@link NativeEmbedDataInfo}.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare enum NativeEmbedStatus {
    /**
     * The embed tag create.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    CREATE = 0,
    /**
     * The embed tag update.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    UPDATE = 1,
    /**
     * The embed tag destroy.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    DESTROY = 2,
    /**
     * The embed tag enter backforward cache.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    ENTER_BFCACHE = 3,
    /**
     * The embed tag leave backforward cache.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    LEAVE_BFCACHE = 4
}
/**
 * Defines the context menu supported event bit flags, related to {@link onContextMenuShow} method.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare enum ContextMenuEditStateFlags {
    /**
     * Not editable.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    NONE = 0,
    /**
     * Clipping is supported.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    CAN_CUT = 1 << 0,
    /**
     * Copies are supported.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    CAN_COPY = 1 << 1,
    /**
     * Support for pasting.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    CAN_PASTE = 1 << 2,
    /**
     * Select all is supported.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    CAN_SELECT_ALL = 1 << 3
}
/**
 * Enum type supplied to {@link navigationType} for the navigation's type.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare enum WebNavigationType {
    /**
     * Unknown type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
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
     * @since 20
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
     * @since 20
     */
    MAIN_FRAME_EXISTING_ENTRY = 2,
    /**
     * A navigation happened on subframe which was triggered by user.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    NAVIGATION_TYPE_NEW_SUBFRAME = 4,
    /**
     * A navigation happened on the subframe automatically.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    NAVIGATION_TYPE_AUTO_SUBFRAME = 5
}
/**
 * Defines the web render mode, related to {@link RenderMode}.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare enum RenderMode {
    /**
     * Web and arkui render asynchronously
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    ASYNC_RENDER = 0,
    /**
     * Web and arkui render synchronously
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    SYNC_RENDER = 1
}
/**
 * Defines the viewport-fit type, related to {@link ViewportFit}.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare enum ViewportFit {
    /**
     * No effect - the whole web page is viewable(default)
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    AUTO = 0,
    /**
     * The initial layout viewport and the visual viewport are set to the
     * largest rectangle which is inscribe in the display of the device.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    CONTAINS = 1,
    /**
     * The initial layout viewport and the visual viewport are set to the
     * circumscribe rectangle of the physical screen of the device.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    COVER = 2
}
/**
 * Defines the context menu param, related to {@link WebContextMenuParam} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare class WebContextMenuParam {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    constructor();
    /**
     * Horizontal offset coordinates of the menu within the Web component.
     *
     * @returns { number } The context menu x coordinate.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    x(): number;
    /**
     * Vertical offset coordinates for the menu within the Web component.
     *
     * @returns { number } The context menu y coordinate.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    y(): number;
    /**
     * If the long-press location is the link returns the link's security-checked URL.
     *
     * @returns { string } If relate to a link return link url, else return null.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    getLinkUrl(): string;
    /**
     * If the long-press location is the link returns the link's original URL.
     *
     * @returns { string } If relate to a link return unfiltered link url, else return null.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    getUnfilteredLinkUrl(): string;
    /**
     * Returns the SRC URL if the selected element has a SRC attribute.
     *
     * @returns { string } If this context menu is "src" attribute, return link url, else return null.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    getSourceUrl(): string;
    /**
     * Long press menu location has image content.
     *
     * @returns { boolean } Return whether this context menu has image content.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    existsImageContents(): boolean;
    /**
     * Returns the type of context node.
     *
     * @returns { ContextMenuMediaType } Returns the type of context node.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    getMediaType(): ContextMenuMediaType;
    /**
     * Returns the text of the selection.
     *
     * @returns { string } Returns the text of the selection.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    getSelectionText(): string;
    /**
     * Returns the context menu source type.
     *
     * @returns { ContextMenuSourceType }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    getSourceType(): ContextMenuSourceType;
    /**
     * Returns input field type if the context menu was invoked on an input field.
     *
     * @returns { ContextMenuInputFieldType } Input field type if the context menu was invoked on an input field.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    getInputFieldType(): ContextMenuInputFieldType;
    /**
     * Returns whether the context is editable.
     *
     * @returns { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    isEditable(): boolean;
    /**
     * Returns the context editable flags {@link ContextMenuEditStateFlags}.
     *
     * @returns { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    getEditStateFlags(): number;
    /**
     * Returns the selection menu preview width.
     *
     * @returns { number } The preview menu width.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    getPreviewWidth(): number;
    /**
     * Returns the selection menu preview height.
     *
     * @returns { number } The preview menu height.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    getPreviewHeight(): number;
}
/**
 * Defines the context menu result, related to {@link WebContextMenuResult} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare class WebContextMenuResult {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    constructor();
    /**
     * When close context menu without other call in WebContextMenuResult,
     * User should call this function to close menu
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    closeContextMenu(): void;
    /**
     * If WebContextMenuParam has image content, this function will copy image related to this context menu.
     * If WebContextMenuParam has no image content, this function will do nothing.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    copyImage(): void;
    /**
     * Executes the copy operation related to this context menu.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    copy(): void;
    /**
     * Executes the paste operation related to this context menu.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    paste(): void;
    /**
     * Executes the cut operation related to this context menu.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    cut(): void;
    /**
     * Executes the selectAll operation related to this context menu.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    selectAll(): void;
}
/**
 * Encompassed message information as parameters to {@link onConsole} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class ConsoleMessage {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor();
    /**
     * Gets the message of a console message.
     *
     * @returns { string } Return the message of a console message.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getMessage(): string;
    /**
     * Gets the Web source file's path and name of a console message.
     *
     * @returns { string } Return the Web source file's path and name of a console message.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getSourceId(): string;
    /**
     * Gets the line number of a console message.
     *
     * @returns { number } Return the line number of a console message.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getLineNumber(): number;
    /**
     * Gets the message level of a console message.
     *
     * @returns { MessageLevel } Return the message level of a console message, which can be {@link MessageLevel}.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getMessageLevel(): MessageLevel;
}
/**
 * Defines the Web resource request.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class WebResourceRequest {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor();
    /**
     * Gets request headers.
     *
     * @returns { Array<Header> } Return the request headers
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getRequestHeader(): Array<Header>;
    /**
     * Gets the request URL.
     *
     * @returns { string } Return the request URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getRequestUrl(): string;
    /**
     * Check whether the request is associated with gesture.
     *
     * @returns { boolean } Return {@code true} if the request is associated with gesture;return {@code false} otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    isRequestGesture(): boolean;
    /**
     * Check whether the request is for getting the main frame.
     *
     * @returns { boolean } Return {@code true} if the request is associated with gesture for getting the main frame; return {@code false} otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    isMainFrame(): boolean;
    /**
     * Check whether the request redirects.
     *
     * @returns { boolean } Return {@code true} if the request redirects; return {@code false} otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    isRedirect(): boolean;
    /**
     * Get request method.
     *
     * @returns { string } Return the request method.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getRequestMethod(): string;
}
/**
 * Defines the Web resource response.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class WebResourceResponse {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor();
    /**
     * Gets the response data.
     *
     * @returns { string } Return the response data.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getResponseData(): string;
    /**
     * Gets the response data.
     *
     * @returns { string | number | ArrayBuffer | Resource | undefined } Return the response data.
     *                                                                   string type indicate string in HTML format.
     *                                                                   number type indicate file handle.
     *                                                                   Resource type indicate $rawfile resource.
     *                                                                   ArrayBuffer type indicate binary data.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 20
     */
    getResponseDataEx(): string | number | ArrayBuffer | Resource | undefined;
    /**
     * Gets the response encoding.
     *
     * @returns { string } Return the response encoding.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getResponseEncoding(): string;
    /**
     * Gets the response MIME type.
     *
     * @returns { string } Return the response MIME type.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getResponseMimeType(): string;
    /**
     * Gets the reason message.
     *
     * @returns { string } Return the reason message.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getReasonMessage(): string;
    /**
     * Gets the response headers.
     *
     * @returns { Array<Header> } Return the response headers.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getResponseHeader(): Array<Header>;
    /**
     * Gets the response code.
     *
     * @returns { number } Return the response code.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getResponseCode(): number;
    /**
     * Sets the response data.
     *
     * @param { string | number | Resource | ArrayBuffer } data - the response data.
     *                                              string type indicate strings in HTML format.
     *                                              number type indicate file handle.
     *                                              Resource type indicate $rawfile resource.
     *                                              ArrayBuffer type indicate binary data.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    setResponseData(data: string | number | Resource | ArrayBuffer): void;
    /**
     * Sets the response encoding.
     *
     * @param { string } encoding the response encoding.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    setResponseEncoding(encoding: string): void;
    /**
     * Sets the response MIME type.
     *
     * @param { string } mimeType the response MIME type.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    setResponseMimeType(mimeType: string): void;
    /**
     * Sets the reason message.
     *
     * @param { string } reason the reason message.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    setReasonMessage(reason: string): void;
    /**
     * Sets the response headers.
     *
     * @param { Array<Header> } header the response headers.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    setResponseHeader(header: Array<Header>): void;
    /**
     * Sets the response code.
     *
     * @param { number } code the response code.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    setResponseCode(code: number): void;
    /**
     * Sets the response is ready or not.
     *
     * @param { boolean } IsReady whether the response is ready.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    setResponseIsReady(IsReady: boolean): void;
    /**
     * Gets whether the response is ready.
     *
     * @returns { boolean } True indicates the response data is ready and false is not ready.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 20
     */
    getResponseIsReady(): boolean;
}
/**
 * Defines the Web's request/response header.
 *
 * @typedef Header
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface Header {
    /**
     * Gets the key of the request/response header.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    headerKey: string;
    /**
     * Gets the value of the request/response header.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    headerValue: string;
}
/**
 * Defines the Web resource error.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class WebResourceError {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor();
    /**
     * Gets the info of the Web resource error.
     *
     * @returns { string } Return the info of the Web resource error.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getErrorInfo(): string;
    /**
     * Gets the code of the Web resource error.
     *
     * @returns { number } Return the code of the Web resource error.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getErrorCode(): number;
}
/**
 * Defines the js geolocation request.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class JsGeolocation {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor();
    /**
     * Report the geolocation permission status from users.
     *
     * @param { string } origin - The origin that ask for the geolocation permission.
     * @param { boolean } allow - The geolocation permission status.
     * @param { boolean } retain - Whether to allow the geolocation permission status to be saved to the system.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    invoke(origin: string, allow: boolean, retain: boolean): void;
}
/**
 * Defines the touch event result.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare class EventResult {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    constructor();
    /**
     * Set whether the event is consumed.
     *
     * @param { boolean } result - True if the event is consumed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    setGestureEventResult(result: boolean): void;
    /**
     * Set whether the event is consumed.
     *
     * @param { boolean } result - True if the event is consumed.
     * @param { boolean } stopPropagation - Stops the propagation of events farther along.Default value is true.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    setGestureEventResult(result: boolean, stopPropagation: boolean): void;
}
/**
 * Defines the Web options.
 *
 * @typedef WebOptions
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface WebOptions {
    /**
     * Sets the address of the web page to be displayed.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    src: string | Resource;
    /**
     * Sets the controller of the Web.
     *
     * @type { WebviewController }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    controller: WebviewController;
    /**
     * Sets the render mode of the web.
     *
     * @type { ?RenderMode }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    renderMode?: RenderMode;
    /**
      * Sets the incognito mode of the Web, the parameter is optional and default value is false.
      * When the Web is in incognito mode, cookies, records of websites, geolocation permissions
      * will not save in persistent files.
      *
      * @type { ?boolean }
      * @syscap SystemCapability.Web.Webview.Core
      * @crossplatform
      * @atomicservice
      * @since 20
      */
    incognitoMode?: boolean;
    /**
     * Sets the shared render process token of the web.
     * When the web is in multiprocess mode, web with the same
     * sharedRenderProcessToken will attempt to reuse the same render process.
     * The shared render process will remain active until all associated
     * web are destroyed.
     *
     * @type { ?string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    sharedRenderProcessToken?: string;
}
/**
 * Defines the contents of the JavaScript to be injected.
 *
 * @typedef ScriptItem
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface ScriptItem {
    /**
     * Sets the JavaScript to be injected.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    script: string;
    /**
     * Sets the rules of the JavaScript.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    scriptRules: Array<string>;
}
/**
 * Defines the load committed details.
 *
 * @typedef LoadCommittedDetails
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface LoadCommittedDetails {
    /**
     * Check whether the request is for getting the main frame.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
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
     * @since 20
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
     * @since 20
     */
    didReplaceEntry: boolean;
    /**
     * The type of the navigation.
     *
     * @type { WebNavigationType }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    navigationType: WebNavigationType;
    /**
     * The url to navigate.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    url: string;
}
/**
 * Defines the Intelligent Tracking Prevention details.
 *
 * @typedef IntelligentTrackingPreventionDetails
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface IntelligentTrackingPreventionDetails {
    /**
     * The host of website url.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    host: string;
    /**
     * The host of tracker url.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    trackerHost: string;
}
/**
 * Defines the embed info.
 *
 * @typedef NativeEmbedInfo
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface NativeEmbedInfo {
    /**
     * The embed id.
     *
     * @type { ?string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    id?: string;
    /**
     * Only when enableEmbedMode is true and type is marked as native/xxx will be recognized as a same layer component.
     *
     * @type { ?string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    type?: string;
    /**
     * The embed tag src.
     *
     * @type { ?string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    src?: string;
    /**
     * The coordinate position of embed element relative to the webComponent.
     *
     * @type { ?Position }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    position?: Position;
    /**
     * The embed tag width.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    width?: number;
    /**
     * The embed tag height.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    height?: number;
    /**
     * The embed tag url.
     *
     * @type { ?string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    url?: string;
    /**
     * The embed tag name.
     *
     * @type { ?string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    tag?: string;
    /**
     * The embed param list information used by object tag.
     *
     * @type { ?Map<string, string> }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    params?: Map<string, string>;
}
/**
 * Defines the Embed Data info.
 *
 * @typedef NativeEmbedDataInfo
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface NativeEmbedDataInfo {
    /**
     * The embed status.
     *
     * @type { ?NativeEmbedStatus }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    status?: NativeEmbedStatus;
    /**
     * The surface id.
     *
     * @type { ?string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    surfaceId?: string;
    /**
     * The embed id.
     *
     * @type { ?string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    embedId?: string;
    /**
     * The embed info.
     *
     * @type { ?NativeEmbedInfo }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    info?: NativeEmbedInfo;
}
/**
 * Defines the Embed Visibility info.
 *
 * @typedef NativeEmbedVisibilityInfo
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20
 */
export declare interface NativeEmbedVisibilityInfo {
    /**
     * The embed visibility.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    visibility: boolean;
    /**
     * The embed id.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    embedId: string;
}
/**
 * Defines the user touch info.
 *
 * @typedef NativeEmbedTouchInfo
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface NativeEmbedTouchInfo {
    /**
     * The native embed id.
     *
     * @type { ?string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    embedId?: string;
    /**
     * An event sent when the state of contacts with a touch-sensitive surface changes.
     *
     * @type { ?TouchEvent }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    touchEvent?: TouchEvent;
    /**
     * Handle the user's touch result.
     *
     * @type { ?EventResult }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    result?: EventResult;
}
/**
 * Defines the first content paint rendering of web page.
 *
 * @typedef FirstMeaningfulPaint
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface FirstMeaningfulPaint {
    /**
     * Start time of navigation.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    navigationStartTime?: number;
    /**
     * Paint time of first meaningful content.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    firstMeaningfulPaintTime?: number;
}
/**
 * Defines the largest content paint rendering of web page.
 *
 * @typedef LargestContentfulPaint
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface LargestContentfulPaint {
    /**
     *  Start time of navigation.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    navigationStartTime?: number;
    /**
     * Paint time of largest image.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    largestImagePaintTime?: number;
    /**
     * Paint time of largest text.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    largestTextPaintTime?: number;
    /**
     * Bits per pixel of image.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    imageBPP?: number;
    /**
     * Load start time of largest image.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    largestImageLoadStartTime?: number;
    /**
     * Load end time of largest image.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    largestImageLoadEndTime?: number;
}
/**
 * Defines the render process not responding info.
 *
 * @interface RenderProcessNotRespondingData
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20
 */
export declare interface RenderProcessNotRespondingData {
    /**
     * JavaScript stack info of the webpage when render process not responding.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    jsStack: string;
    /**
     * Process id of render process not responding.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    pid: number;
    /**
     * Reason for the render process not responding.
     *
     * @type { RenderProcessNotRespondingReason }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
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
 * @since 20
 */
export declare interface OnPageEndEvent {
    /**
     * The url of page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
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
 * @since 20
 */
export declare interface OnPageBeginEvent {
    /**
     * The url of page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
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
 * @since 20
 */
export declare interface OnProgressChangeEvent {
    /**
     * The new progress of the page.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
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
 * @since 20
 */
export declare interface OnTitleReceiveEvent {
    /**
     * The title of the page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    title: string;
}
/**
 * Defines the triggered function when requesting to show the geolocation permission.
 *
 * @typedef OnGeolocationShowEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface OnGeolocationShowEvent {
    /**
     * Origin of the page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    origin: string;
    /**
     * Defines the js geolocation request.
     *
     * @type { JsGeolocation }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    geolocation: JsGeolocation;
}
/**
 * Defines the triggered function when the web page wants to display a JavaScript alert() dialog.
 *
 * @typedef OnAlertEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface OnAlertEvent {
    /**
     * The url of the page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    url: string;
    /**
     * The message of alert dialog.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    message: string;
    /**
     *  Handle the user's JavaScript result.
     *
     * @type { JsResult }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    result: JsResult;
}
/**
 * Defines the triggered function when the web page wants to confirm navigation from JavaScript onbeforeunload.
 *
 * @typedef OnBeforeUnloadEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface OnBeforeUnloadEvent {
    /**
     * The url of the page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    url: string;
    /**
     * The message of confirm dialog.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    message: string;
    /**
     *  Handle the user's JavaScript result.
     *
     * @type { JsResult }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    result: JsResult;
}
/**
 * Defines the triggered function when the web page wants to display a JavaScript confirm() dialog.
 *
 * @typedef OnConfirmEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface OnConfirmEvent {
    /**
     * The url of the page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    url: string;
    /**
     * The message of confirm dialog.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    message: string;
    /**
     *  Handle the user's JavaScript result.
     *
     * @type { JsResult }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    result: JsResult;
}
/**
 * Defines the triggered function when the web page wants to display a JavaScript prompt() dialog.
 *
 * @typedef OnPromptEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface OnPromptEvent {
    /**
     * The url of the page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    url: string;
    /**
     * The message of prompt dialog.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    message: string;
    /**
     * The value of prompt dialog.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    value: string;
    /**
     *  Handle the user's JavaScript result.
     *
     * @type { JsResult }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
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
 * @since 20
 */
export declare interface OnConsoleEvent {
    /**
     * Console message information of the event.
     *
     * @type { ConsoleMessage }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
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
 * @since 20
 */
export declare interface OnErrorReceiveEvent {
    /**
     * The information of request.
     *
     * @type { WebResourceRequest }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    request: WebResourceRequest;
    /**
     * The information of error.
     *
     * @type { WebResourceError }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
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
 * @since 20
 */
export declare interface OnHttpErrorReceiveEvent {
    /**
     * The information of request.
     *
     * @type { WebResourceRequest }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    request: WebResourceRequest;
    /**
     *  Web resource response of event.
     *
     * @type { WebResourceResponse }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
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
 * @since 20
 */
export declare interface OnDownloadStartEvent {
    /**
     * The URL of page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    url: string;
    /**
     * The userAgent of page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    userAgent: string;
    /**
     * The contentDisposition of page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    contentDisposition: string;
    /**
     * The mimetype of page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    mimetype: string;
    /**
     * The contentLength of page.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    contentLength: number;
}
/**
 * Defines the triggered callback when the Web page refreshes accessed history.
 *
 * @typedef OnRefreshAccessedHistoryEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface OnRefreshAccessedHistoryEvent {
    /**
     * URL of the visit.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    url: string;
    /**
     * If true, the page is being reloaded, otherwise,  means that the page is newly loaded.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    isRefreshed: boolean;
}
/**
 * Defines the triggered when the render process exits.
 *
 * @typedef OnRenderExitedEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface OnRenderExitedEvent {
    /**
     * The specific reason why the rendering process exits abnormally.
     *
     * @type { RenderExitReason }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    renderExitReason: RenderExitReason;
}
/**
 * Defines the triggered when the file selector shows.
 *
 * @typedef OnShowFileSelectorEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface OnShowFileSelectorEvent {
    /**
     * Defines the file selector result.
     *
     * @type { FileSelectorResult }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    result: FileSelectorResult;
    /**
     * Encompassed message information as parameters to fileSelector.
     *
     * @type { FileSelectorParam }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    fileSelector: FileSelectorParam;
}
/**
 * Defines the triggered when the url loading.
 *
 * @typedef OnResourceLoadEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface OnResourceLoadEvent {
    /**
     * The URL of the loaded resource file.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    url: string;
}
/**
 * Defines the triggered when the scale of WebView changed.
 *
 * @typedef OnScaleChangeEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface OnScaleChangeEvent {
    /**
     * Old scale of the page.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    oldScale: number;
    /**
     * New scale of the page.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
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
 * @since 20
 */
export declare interface OnHttpAuthRequestEvent {
    /**
     * Defines the http auth request result.
     *
     * @type { HttpAuthHandler }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    handler: HttpAuthHandler;
    /**
     * Host of the page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    host: string;
    /**
     * realm of the page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    realm: string;
}
/**
 * Defines the triggered callback when the resources loading is intercepted.
 *
 * @typedef OnInterceptRequestEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface OnInterceptRequestEvent {
    /**
     * The information of request.
     *
     * @type { WebResourceRequest }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
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
 * @since 20
 */
export declare interface OnPermissionRequestEvent {
    /**
     * Defines the onPermissionRequest callback.
     *
     * @type { PermissionRequest }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
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
 * @since 20
 */
export declare interface OnScreenCaptureRequestEvent {
    /**
     * Notifies the user of the operation behavior of the web component.
     *
     * @type { ScreenCaptureHandler }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    handler: ScreenCaptureHandler;
}
/**
 * Defines the triggered callback when called to allow custom display of the context menu.
 *
 * @typedef OnContextMenuShowEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface OnContextMenuShowEvent {
    /**
     * The menu-related parameters.
     *
     * @type { WebContextMenuParam }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    param: WebContextMenuParam;
    /**
     * The menu corresponding event is passed to the kernel.
     *
     * @type { WebContextMenuResult }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    result: WebContextMenuResult;
}
/**
 * Defines function Triggered when the host application call searchAllAsync.
 *
 * @typedef OnSearchResultReceiveEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface OnSearchResultReceiveEvent {
    /**
     * The ordinal number of the currently matched lookup item (starting from 0).
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    activeMatchOrdinal: number;
    /**
     * The number of all matched keywords.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    numberOfMatches: number;
    /**
     * Indicates whether the current in-page search operation is complete. The method may be called back multiple times until isDoneCounting is true.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    isDoneCounting: boolean;
}
/**
 * Defines function Triggered when the scroll bar slides to the specified position.
 *
 * @typedef OnScrollEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface OnScrollEvent {
    /**
     * The X offset of the scroll.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    xOffset: number;
    /**
     * The Y offset of the scroll.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    yOffset: number;
}
/**
 * Defines the triggered callback when the Web page receives an ssl Error.
 *
 * @typedef OnSslErrorEventReceiveEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface OnSslErrorEventReceiveEvent {
    /**
     * Notifies the user of the operation behavior of the web component.
     *
     * @type { SslErrorHandler }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    handler: SslErrorHandler;
    /**
     * Error codes.
     *
     * @type { SslError }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    error: SslError;
    /**
     * Certificate chain data in DER format.
     *
     * @type { ?Array<Uint8Array> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    certChainData?: Array<Uint8Array>;
}
/**
 * Defines the triggered callback when needs ssl client certificate from the user.
 *
 * @typedef OnClientAuthenticationEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface OnClientAuthenticationEvent {
    /**
     * Notifies the user of the operation behavior of the web component.
     *
     * @type { ClientAuthenticationHandler }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    handler: ClientAuthenticationHandler;
    /**
     * The hostname of the requesting certificate server.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    host: string;
    /**
     * The port number of the request certificate server.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    port: number;
    /**
     * Acceptable asymmetric key types.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    keyTypes: Array<string>;
    /**
     * Certificates that match the private key are acceptable to the issuer.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    issuers: Array<string>;
}
/**
 * Defines the triggered callback when web page requires the user to create a window.
 *
 * @typedef OnWindowNewEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface OnWindowNewEvent {
    /**
     * true indicates the request to create a dialog and false indicates a new tab.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    isAlert: boolean;
    /**
     * true indicates that it is triggered by the user, and false indicates that it is triggered by a non-user.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    isUserTrigger: boolean;
    /**
     * Destination URL.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    targetUrl: string;
    /**
     * Lets you set the WebviewController instance for creating a new window.
     *
     * @type { ControllerHandler }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    handler: ControllerHandler;
}
/**
 * Defines the triggered callback when the application receive an new url of an apple-touch-icon.
 *
 * @typedef OnTouchIconUrlReceivedEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface OnTouchIconUrlReceivedEvent {
    /**
     * The apple-touch-icon URL address received.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    url: string;
    /**
     * Corresponding to whether apple-touch-icon is precomposited.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    precomposed: boolean;
}
/**
 * Defines the triggered callback when the application receive a new favicon for the current web page.
 *
 * @typedef OnFaviconReceivedEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface OnFaviconReceivedEvent {
    /**
     * Received the Favicon icon for the image.PixelMap object.
     *
     * @type { image.PixelMap }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    favicon: image.PixelMap;
}
/**
 * Defines the triggered callback when previous page will no longer be drawn and next page begin to draw.
 *
 * @typedef OnPageVisibleEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface OnPageVisibleEvent {
    /**
     * The URL of page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    url: string;
}
/**
 * Defines the triggered callback to decision whether resend form data or not.
 *
 * @typedef OnDataResubmittedEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface OnDataResubmittedEvent {
    /**
     * Form data resubmission handle.
     *
     * @type { DataResubmissionHandler }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    handler: DataResubmissionHandler;
}
/**
 * Defines the playing state of audio on web page.
 *
 * @typedef OnAudioStateChangedEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface OnAudioStateChangedEvent {
    /**
     * The audio playback status of the current page, true if playing true otherwise false.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    playing: boolean;
}
/**
 * Defines triggered when the first content rendering of web page.
 *
 * @typedef OnFirstContentfulPaintEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface OnFirstContentfulPaintEvent {
    /**
     * The time at which navigation begins, expressed in microseconds.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    navigationStartTick: number;
    /**
     * The time it takes to draw content for the first time from navigation, expressed in milliseconds.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
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
 * @since 20
 */
export declare interface OnLoadInterceptEvent {
    /**
     * The information of request.
     *
     * @type { WebResourceRequest }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    data: WebResourceRequest;
}
/**
 * Defines the function Triggered when the over scrolling.
 *
 * @typedef OnOverScrollEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface OnOverScrollEvent {
    /**
     * Based on the leftmost part of the page, the horizontal scroll offset is over.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    xOffset: number;
    /**
     * Based on the top of the page, the vertical scroll offset is over.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    yOffset: number;
}
/**
 * Defines the JavaScript object to be injected.
 *
 * @typedef JavaScriptProxy
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface JavaScriptProxy {
    /**
     * Objects participating in registration.
     *
     * @type { object }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    object: object;
    /**
     * The name of the registered object, which is consistent with the
     *                          object name called in the window.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    name: string;
    /**
     * The method of the application side JavaScript object participating
     *                                       in the registration.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    methodList: Array<string>;
    /**
     * Controller.
     *
     * @type { WebviewController }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    controller: WebviewController;
    /**
     * The async method of the application side JavaScript object participating in the registration.
     *
     * @type { ?Array<string> }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    asyncMethodList?: Array<string>;
    /**
     * permission configuration defining web page URLs that can access JavaScriptProxy methods.
     * The configuration can be defined at two levels, object level and method level.
     *
     * @type { ?string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    permission?: string;
}
/**
 * Enum type supplied to {@link keyboardAvoidMode} for setting the web keyboard avoid mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare enum WebKeyboardAvoidMode {
    /**
     * Resize the visual viewport when keyboard avoidance occurs.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    RESIZE_VISUAL = 0,
    /**
     * Resize the visual and layout viewport when keyboard avoidance occurs.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    RESIZE_CONTENT = 1,
    /**
     * Do not resize any viewport when keyboard avoidance occurs.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    OVERLAYS_CONTENT = 2
}
/**
 * Defines Web Elements type.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20
 */
export declare enum WebElementType {
    /**
     * Image,corresponding HTML image type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    IMAGE = 1
}
/**
 * ResponseType for contextMenu
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20
 */
export declare enum WebResponseType {
    /**
     * Long press.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    LONG_PRESS = 1
}
/**
 * Defines the selection menu options.
 *
 * @typedef SelectionMenuOptionsExt
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20
 */
export declare interface SelectionMenuOptionsExt {
    /**
     * Callback function when the selection menu appears.
     *
     * @type { ?Callback<void> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    onAppear?: Callback<void>;
    /**
     * Callback function when the selection menu disappears.
     *
     * @type { ?Callback<void> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    onDisappear?: Callback<void>;
    /**
     * The preview content of selection menu.
     *
     * @type { ?CustomBuilder }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    preview?: CustomBuilder;
    /**
     * Menu type, default value is MenuType.SELECTION_MENU.
     *
     * @type { ?MenuType }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    menuType?: MenuType;
}
export declare interface WebAttribute extends CommonMethod {
    /**
     * Sets whether the Web allows JavaScript scripts to execute.
     *
     * @param { boolean } javaScriptAccess - {@code true} means the Web can allows JavaScript scripts to execute; {@code false} otherwise.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    javaScriptAccess(javaScriptAccess: boolean | undefined): this;
    /**
     * Sets whether enable local file system access in Web.
     *
     * @param { boolean } fileAccess - {@code true} means enable local file system access in Web; {@code false} otherwise.
     *    The default value is false.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    fileAccess(fileAccess: boolean | undefined): this;
    /**
     * Sets whether to allow image resources to be loaded from the network.
     *    The default value is true.
     * @param { boolean } onlineImageAccess - {@code true} means the Web can allow image resources to be loaded from the network;
     * {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onlineImageAccess(onlineImageAccess: boolean | undefined): this;
    /**
     * Sets whether to enable the DOM Storage API permission.
     *    The default value is false.
     * @param { boolean } domStorageAccess - {@code true} means enable the DOM Storage API permission in Web; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    domStorageAccess(domStorageAccess: boolean | undefined): this;
    /**
     * Sets whether the Web can automatically load image resources.
     *    The default value is true.
     * @param { boolean } imageAccess - {@code true} means the Web can automatically load image resources; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    imageAccess(imageAccess: boolean | undefined): this;
    /**
    * Sets how to load HTTP and HTTPS content.
    *
    * @param { MixedMode } mixedMode - The mixed mode, which can be {@link MixedMode}.
    * @returns { WebAttribute }
    * @syscap SystemCapability.Web.Webview.Core
    * @crossplatform
    * @atomicservice
     * @since 20
     */
    mixedMode(mixedMode: MixedMode | undefined): this;
    /**
     * Sets whether the Web supports zooming using gestures.
     *
     * @param { boolean } zoomAccess {@code true} means the Web supports zooming using gestures; {@code false} otherwise.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    zoomAccess(zoomAccess: boolean | undefined): this;
    /**
     * Sets whether to allow access to geographical locations.
     *
     * @param { boolean } geolocationAccess - {@code true} means the Web allows access to geographical locations; {@code false} otherwise.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    geolocationAccess(geolocationAccess: boolean | undefined): this;
    /**
     * Injects the JavaScript object into window and invoke the function in window.
     *
     * @param { JavaScriptProxy } javaScriptProxy - The JavaScript object to be injected.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    javaScriptProxy(javaScriptProxy: JavaScriptProxy | undefined): this;
    /**
     * Sets the mode of cache in Web.
     *
     * @param { CacheMode } cacheMode - The cache mode, which can be {@link CacheMode}.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    cacheMode(cacheMode: CacheMode | undefined): this;
    /**
     * Sets the dark mode of Web.
     *
     * @param { WebDarkMode } mode - The dark mode, which can be {@link WebDarkMode}.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    darkMode(mode: WebDarkMode | undefined): this;
    /**
     * Sets whether to enable forced dark algorithm when the web is in dark mode
     *
     * @param { boolean } access {@code true} means enable the force dark algorithm; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    forceDarkAccess(access: boolean | undefined): this;
    /**
     * Sets the media options.
     *
     * @param { WebMediaOptions } options The media options, which can be {@link WebMediaOptions}.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    mediaOptions(options: WebMediaOptions | undefined): this;
    /**
     * Sets whether the Web access overview mode.
     *
     * @param { boolean } overviewModeAccess {@code true} means the Web access overview mode; {@code false} otherwise.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    overviewModeAccess(overviewModeAccess: boolean | undefined): this;
    /**
      * Sets the over-scroll mode for web
      *
      * @param { OverScrollMode } mode - The over-scroll mode, which can be {@link OverScrollMode}.
      * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
      * @atomicservice
      * @since 20
      */
    overScrollMode(mode: OverScrollMode | undefined): this;
    /**
     * Sets the blur on for elements on webview when soft keyboard is hidden manually.
     *
     * @param { BlurOnKeyboardHideMode } mode - Default value is SILENT. Set BLUR to enable the blur on keyboard hide mode, which can be {@link BlurOnKeyboardHideMode}.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    blurOnKeyboardHideMode(mode: BlurOnKeyboardHideMode | undefined): this;
    /**
     * Sets the ratio of the text zoom.
     *
     * @param { number } textZoomRatio The ratio of the text zoom.  The default value is 100, ranging from 1 to +∞.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    textZoomRatio(textZoomRatio: number | undefined): this;
    /**
     * Sets whether the Web access the database.
     *
     * @param { boolean } databaseAccess {@code true} means the Web access the database; {@code false} otherwise.
     *    The default value is false.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    databaseAccess(databaseAccess: boolean | undefined): this;
    /**
     * Sets the initial scale for the Web.
     *
     * @param { number } percent the initial scale for the Web.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    initialScale(percent: number | undefined): this;
    /**
     * Set whether to support the viewport attribute of the meta tag in the frontend page.
     *
     * @param { boolean } enabled {@code true} means support the viewport attribute of the meta tag; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    metaViewport(enabled: boolean | undefined): this;
    /**
     * Triggered at the end of web page loading.
     *
     * @param { Callback<OnPageEndEvent> } callback The triggered function at the end of web page loading.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onPageEnd(callback: Callback<OnPageEndEvent> | undefined): this;
    /**
     * Triggered at the begin of web page loading.
     *
     * @param { Callback<OnPageBeginEvent> } callback The triggered function at the begin of web page loading.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onPageBegin(callback: Callback<OnPageBeginEvent> | undefined): this;
    /**
     * Triggered when the page loading progress changes.
     *
     * @param { Callback<OnProgressChangeEvent> } callback The triggered function when the page loading progress changes.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onProgressChange(callback: Callback<OnProgressChangeEvent> | undefined): this;
    /**
     * Triggered when the title of the main application document changes.
     *
     * @param { Callback<OnTitleReceiveEvent> } callback The triggered function when the title of the main application document changes.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onTitleReceive(callback: Callback<OnTitleReceiveEvent> | undefined): this;
    /**
     * Triggered when requesting to hide the geolocation.
     *
     * @param { function } callback The triggered function when requesting to hide the geolocation permission.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onGeolocationHide(callback: (() => void) | undefined): this;
    /**
     * Triggered when requesting to show the geolocation permission.
     *
     * @param { Callback<OnGeolocationShowEvent> } callback The triggered function when requesting to show the geolocation permission.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onGeolocationShow(callback: Callback<OnGeolocationShowEvent> | undefined): this;
    /**
     * Triggered when the Web gets the focus.
     *
     * @param { function } callback The triggered function when the Web gets the focus.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onRequestSelected(callback: (() => void) | undefined): this;
    /**
     * Triggered when the Web wants to display a JavaScript alert() dialog.
     *
     * @param {  Callback<OnAlertEvent, boolean> } callback The triggered function when the web page wants to display a JavaScript alert() dialog.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onAlert(callback: Callback<OnAlertEvent, boolean> | undefined): this;
    /**
     * Triggered when the Web wants to confirm navigation from JavaScript onbeforeunload.
     *
     * @param { Callback<OnBeforeUnloadEvent, boolean> } callback The triggered function when the web page wants to confirm navigation from JavaScript onbeforeunload.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onBeforeUnload(callback: Callback<OnBeforeUnloadEvent, boolean> | undefined): this;
    /**
     * Triggered when the web page wants to display a JavaScript confirm() dialog.
     *
     * @param { Callback<OnConfirmEvent, boolean> } callback The triggered function when the web page wants to display a JavaScript confirm() dialog.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onConfirm(callback: Callback<OnConfirmEvent, boolean> | undefined): this;
    /**
     * Triggered when the web page wants to display a JavaScript prompt() dialog.
     *
     * @param { Callback<OnPromptEvent, boolean> } callback The triggered function when the web page wants to display a JavaScript prompt() dialog.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onPrompt(callback: Callback<OnPromptEvent, boolean> | undefined): this;
    /**
     * Triggered when the web page receives a JavaScript console message.
     *
     * @param {  Callback<OnConsoleEvent, boolean> } callback The triggered function when the web page receives a JavaScript console message.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onConsole(callback: Callback<OnConsoleEvent, boolean> | undefined): this;
    /**
     * Triggered when the web page receives a web resource loading error.
     *
     * @param { Callback<OnErrorReceiveEvent> } callback The triggered function when the web page receives a web resource loading error.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onErrorReceive(callback: Callback<OnErrorReceiveEvent> | undefined): this;
    /**
     * Triggered when the web page receives a web resource loading HTTP error.
     *
     * @param { Callback<OnHttpErrorReceiveEvent> } callback The triggered function when the web page receives a web resource loading HTTP error.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onHttpErrorReceive(callback: Callback<OnHttpErrorReceiveEvent> | undefined): this;
    /**
     * Triggered when starting to download.
     *
     * @param { Callback<OnDownloadStartEvent> } callback The triggered function when starting to download.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onDownloadStart(callback: Callback<OnDownloadStartEvent> | undefined): this;
    /**
     * Triggered when the Web page refreshes accessed history.
     *
     * @param { Callback<OnRefreshAccessedHistoryEvent> } callback The triggered callback when the Web page refreshes accessed history.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onRefreshAccessedHistory(callback: Callback<OnRefreshAccessedHistoryEvent> | undefined): this;
    /**
     * Triggered when the render process exits.
     *
     * @param { Callback<OnRenderExitedEvent> } callback The triggered when the render process exits.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onRenderExited(callback: Callback<OnRenderExitedEvent> | undefined): this;
    /**
     * Triggered when the file selector shows.
     *
     * @param { Callback<OnShowFileSelectorEvent, boolean> } callback The triggered when the file selector shows.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onShowFileSelector(callback: Callback<OnShowFileSelectorEvent, boolean> | undefined): this;
    /**
     * Triggered when the url loading.
     *
     * @param { Callback<OnResourceLoadEvent> } callback The triggered when the url loading.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onResourceLoad(callback: Callback<OnResourceLoadEvent> | undefined): this;
    /**
     * Triggered when the web component exit the full screen mode.
     *
     * @param { function } callback The triggered function when the web component exit the full screen mode.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onFullScreenExit(callback: (() => void) | undefined): this;
    /**
     * Triggered when the web component enter the full screen mode.
     *
     * @param { OnFullScreenEnterCallback } callback - The triggered function when the web component enter the full screen mode.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onFullScreenEnter(callback: OnFullScreenEnterCallback | undefined): this;
    /**
     * Triggered when the scale of WebView changed.
     *
     * @param { Callback<OnScaleChangeEvent> } callback The triggered when the scale of WebView changed.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onScaleChange(callback: Callback<OnScaleChangeEvent> | undefined): this;
    /**
     * Triggered when the browser needs credentials from the user.
     *
     * @param { Callback<OnHttpAuthRequestEvent, boolean> } callback The triggered when the browser needs credentials from the user.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onHttpAuthRequest(callback: Callback<OnHttpAuthRequestEvent, boolean> | undefined): this;
    /**
     * Triggered when the resources loading is intercepted.
     *
     * @param { Callback<OnInterceptRequestEvent, WebResourceResponse> } callback The triggered callback when the resources loading is intercepted.
     * @returns { WebAttribute } If the response value is null, the Web will continue to load the resources. Otherwise, the response value will be used
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onInterceptRequest(callback: Callback<OnInterceptRequestEvent, WebResourceResponse> | undefined): this;
    /**
     * Triggered when the host application that web content from the specified origin is attempting to access the resources.
     *
     * @param { Callback<OnPermissionRequestEvent> } callback The triggered callback when the host application that web content from the specified origin is
     *     attempting to access the resources.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onPermissionRequest(callback: Callback<OnPermissionRequestEvent> | undefined): this;
    /**
     * Triggered when the host application that web content from the specified origin is requesting to capture screen.
     * @param { Callback<OnScreenCaptureRequestEvent> } callback The triggered callback when the host application that web content from the specified origin is
     *     requesting to capture screen.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onScreenCaptureRequest(callback: Callback<OnScreenCaptureRequestEvent> | undefined): this;
    /**
     * Triggered when called to allow custom display of the context menu.
     *
     * @param { Callback<OnContextMenuShowEvent, boolean> } callback The triggered callback when called to allow custom display of the context menu.
     * @returns { WebAttribute } If custom display return true.Otherwise, default display return false.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onContextMenuShow(callback: Callback<OnContextMenuShowEvent, boolean> | undefined): this;
    /**
     * Triggered when called to allow custom hide of the context menu.
     *
     * @param { OnContextMenuHideCallback } callback The triggered function when called to allow custom hide of the context menu.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onContextMenuHide(callback: OnContextMenuHideCallback | undefined): this;
    /**
     * Set whether media playback needs to be triggered by user gestures.
     *
     * @param { boolean } access True if it needs to be triggered manually by the user else false.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    mediaPlayGestureAccess(access: boolean | undefined): this;
    /**
     * Notify search result to host application through onSearchResultReceive.
     *
     * @param { Callback<OnSearchResultReceiveEvent> } callback Function Triggered when the host application call searchAllAsync.
     * or searchNext api on WebController and the request is valid.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onSearchResultReceive(callback: Callback<OnSearchResultReceiveEvent> | undefined): this;
    /**
     * Triggered when the scroll bar slides to the specified position.
     *
     * @param { Callback<OnScrollEvent> } callback Function Triggered when the scroll bar slides to the specified position.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onScroll(callback: Callback<OnScrollEvent> | undefined): this;
    /**
     * Triggered when the Web page receives an ssl Error.
     *
     * @param { Callback<OnSslErrorEventReceiveEvent> } callback The triggered callback when the Web page receives an ssl Error.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onSslErrorEventReceive(callback: Callback<OnSslErrorEventReceiveEvent> | undefined): this;
    /**
     * Triggered when the Web page receives an ssl Error.
     *
     * @param { OnSslErrorEventCallback } callback The triggered callback when the Web page receives an ssl Error.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onSslErrorEvent(callback: OnSslErrorEventCallback | undefined): this;
    /**
     * Triggered when the Web page needs ssl client certificate from the user.
     *
     * @param { Callback<OnClientAuthenticationEvent> } callback The triggered callback when needs ssl client certificate from the user.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onClientAuthenticationRequest(callback: Callback<OnClientAuthenticationEvent> | undefined): this;
    /**
     * Triggered when web page requires the user to create a window.
     *
     * @param {  Callback<OnWindowNewEvent> } callback The triggered callback when web page requires the user to create a window.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onWindowNew(callback: Callback<OnWindowNewEvent> | undefined): this;
    /**
     * Triggered when web page requires the user to close a window.
     *
     * @param { function } callback The triggered callback when web page requires the user to close a window.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onWindowExit(callback: (() => void) | undefined): this;
    /**
     * Set whether multiple windows are supported.
     *
     * @param { boolean } multiWindow True if it needs to be triggered manually by the user else false.
     *    The default value is false.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    multiWindowAccess(multiWindow: boolean | undefined): this;
    /**
     * Key events notify the application before the WebView consumes them.
     *
     * @param { function } callback Key event info.
     * @returns { WebAttribute } True if the application consumes key events else false.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onInterceptKeyEvent(callback: ((event: KeyEvent) => boolean) | undefined): this;
    /**
     * Set the font of webview standard font library. The default font is "sans serif".
     *
     * @param { string } family Standard font set series.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    webStandardFont(family: string | undefined): this;
    /**
     * Set the font of webview serif font library. The default font is "serif".
     *
     * @param { string } family Serif font set series.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    webSerifFont(family: string | undefined): this;
    /**
     * Set the font of webview sans serif font library. The default font is "sans-serif".
     *
     * @param { string } family Sans serif font set series.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    webSansSerifFont(family: string | undefined): this;
    /**
     * Set the font of webview fixed font library. The default font is "monospace".
     *
     * @param { string } family Fixed font set series.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    webFixedFont(family: string | undefined): this;
    /**
     * Set the font of webview fantasy font library. The default font is "fantasy".
     *
     * @param { string } family fantasy font set series.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    webFantasyFont(family: string | undefined): this;
    /**
     * Set the font of webview cursive font library. The default font is "cursive".
     *
     * @param { string } family Cursive font set series.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    webCursiveFont(family: string | undefined): this;
    /**
     * Set the default fixed font value of webview. The default value is 13, ranging from 1 to 72.
     *
     * @param { number } size Font size.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    defaultFixedFontSize(size: number | undefined): this;
    /**
     * Set the default font value of webview. The default value is 16, ranging from 1 to 72.
     *
     * @param { number } size Font size.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    defaultFontSize(size: number | undefined): this;
    /**
     * Set the minimum value of webview font. The default value is 8, ranging from 1 to 72.
     *
     * @param { number } size Font size.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    minFontSize(size: number | undefined): this;
    /**
     * Set the logical minimum value of webview font. The default value is 8, ranging from 1 to 72.
     *
     * @param { number } size Font size.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    minLogicalFontSize(size: number | undefined): this;
    /**
     * Set the default text encodingFormat value of webview. The default value is UTF-8.
     *
     * @param { string } textEncodingFormat text encodingFormat.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    defaultTextEncodingFormat(textEncodingFormat: string | undefined): this;
    /**
     * Whether force display the scroll bar.
     *
     * @param { boolean } enabled {@code true} means show; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    forceDisplayScrollBar(enabled: boolean | undefined): this;
    /**
     * Whether web component can load resource from network.
     *
     * @param { boolean } block {@code true} means it can't load resource from network; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    blockNetwork(block: boolean | undefined): this;
    /**
     * Set whether paint horizontal scroll bar.
     *
     * @param { boolean } horizontalScrollBar True if it needs to paint horizontal scroll bar.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    horizontalScrollBarAccess(horizontalScrollBar: boolean | undefined): this;
    /**
     * Set whether paint vertical scroll bar.
     *
     * @param { boolean } verticalScrollBar True if it needs to paint vertical scroll bar.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    verticalScrollBarAccess(verticalScrollBar: boolean | undefined): this;
    /**
     * Triggered when the application receive the url of an apple-touch-icon.
     *
     * @param { Callback<OnTouchIconUrlReceivedEvent> } callback The triggered callback when the application receive an new url of an
     * apple-touch-icon.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onTouchIconUrlReceived(callback: Callback<OnTouchIconUrlReceivedEvent> | undefined): this;
    /**
     * Triggered when the application receive a new favicon for the current web page.
     *
     * @param { Callback<OnFaviconReceivedEvent> } callback The triggered callback when the application receive a new favicon for the
     * current web page.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onFaviconReceived(callback: Callback<OnFaviconReceivedEvent> | undefined): this;
    /**
     * Triggered when previous page will no longer be drawn and next page begin to draw.
     *
     * @param {  Callback<OnPageVisibleEvent> } callback The triggered callback when previous page will no longer be drawn and next
     * page begin to draw.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onPageVisible(callback: Callback<OnPageVisibleEvent> | undefined): this;
    /**
     * Triggered when the form could be resubmitted.
     *
     * @param { Callback<OnDataResubmittedEvent> } callback The triggered callback to decision whether resend form data or not.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onDataResubmitted(callback: Callback<OnDataResubmittedEvent> | undefined): this;
    /**
     * Set whether enable pinch smooth mode.
     *
     * @param { boolean } isEnabled True if it needs to enable smooth mode.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    pinchSmooth(isEnabled: boolean | undefined): this;
    /**
     * Whether the window can be open automatically through JavaScript.
     *
     * @param { boolean } flag If it is true, the window can be opened automatically through JavaScript.
     * If it is false and user behavior, the window can be opened automatically through JavaScript.
     * Otherwise, the window cannot be opened.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    allowWindowOpenMethod(flag: boolean | undefined): this;
    /**
     * Triggered when the playing state of audio on web page changed.
     *
     * @param { Callback<OnAudioStateChangedEvent> } callback The playing state of audio on web page.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onAudioStateChanged(callback: Callback<OnAudioStateChangedEvent> | undefined): this;
    /**
     * Triggered when the first content rendering of web page.
     *
     * @param { Callback<OnFirstContentfulPaintEvent> } callback
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onFirstContentfulPaint(callback: Callback<OnFirstContentfulPaintEvent> | undefined): this;
    /**
     * Called when the First rendering of meaningful content time(FMP)
     *
     * @param { OnFirstMeaningfulPaintCallback } callback Function Triggered when the firstMeaningfulPaint.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onFirstMeaningfulPaint(callback: OnFirstMeaningfulPaintCallback | undefined): this;
    /**
     * Called when the Maximum content rendering time(LCP).
     *
     * @param { OnLargestContentfulPaintCallback } callback Function Triggered when the largestContentfulPaint.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onLargestContentfulPaint(callback: OnLargestContentfulPaintCallback | undefined): this;
    /**
     * Triggered when the resources loading is intercepted.
     *
     * @param { Callback<OnLoadInterceptEvent, boolean> } callback The triggered callback when the resources loading is intercepted.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onLoadIntercept(callback: Callback<OnLoadInterceptEvent, boolean> | undefined): this;
    /**
     * Triggered when The controller is bound to the web component, this controller must be a WebviewController.
     * This callback can not use the interface about manipulating web pages.
     * @param { function } callback The triggered callback when web controller initialization success.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onControllerAttached(callback: (() => void) | undefined): this;
    /**
     * Triggered when the over scrolling.
     * @param { Callback<OnOverScrollEvent> } callback Function Triggered when the over scrolling.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onOverScroll(callback: Callback<OnOverScrollEvent> | undefined): this;
    /**
     * Called when received website security risk check result.
     *
     * @param { OnSafeBrowsingCheckResultCallback } callback - Function triggered when received website security risk check result.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onSafeBrowsingCheckResult(callback: OnSafeBrowsingCheckResultCallback | undefined): this;
    /**
     * Called when the load committed.
     *
     * @param { OnNavigationEntryCommittedCallback } callback Function Triggered when a load committed.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onNavigationEntryCommitted(callback: OnNavigationEntryCommittedCallback | undefined): this;
    /**
     * Called when tracker's cookie is prevented.
     *
     * @param { OnIntelligentTrackingPreventionCallback } callback - Callback triggered when tracker's cookie is prevented.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onIntelligentTrackingPreventionResult(callback: OnIntelligentTrackingPreventionCallback | undefined): this;
    /**
     * Injects the JavaScripts before Webview creates the DOM tree, and then the JavaScript snippet will run after the document has been created.
     * @param { Array<ScriptItem> } scripts - The array of the JavaScripts to be injected.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    javaScriptOnDocumentStart(scripts: Array<ScriptItem> | undefined): this;
    /**
     * Injects the JavaScripts before Webview creates the DOM tree, and then the JavaScript snippet will run after the document has been created.
     * @param { Array<ScriptItem> } scripts - The array of the JavaScripts to be injected.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    javaScriptOnDocumentEnd(scripts: Array<ScriptItem> | undefined): this;
    /**
     * Set web layout Mode.
     * @param { WebLayoutMode } mode - The web layout mode, which can be {@link WebLayoutMode}.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    layoutMode(mode: WebLayoutMode | undefined): this;
    /**
     * Called to setting the nested scroll options.
     *
     * @param { NestedScrollOptions | NestedScrollOptionsExt } value - options for
     *     nested scrolling.
     * @returns { WebAttribute } the attribute of the scroll.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    nestedScroll(value: NestedScrollOptions | NestedScrollOptionsExt | undefined): this;
    /**
     * Sets the enable native embed mode for web.
     *
     * @param { boolean } mode - True if it needs to enable native embed mode.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    enableNativeEmbedMode(mode: boolean | undefined): this;
    /**
     * Register native pattern with specific tag and type.
     *
     * @param { string } tag - Tag name used by html webpage.
     * @param { string } type - Type of the tag.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    registerNativeEmbedRule(tag: string | undefined, type: string | undefined): this;
    /**
     * Triggered when embed lifecycle changes.
     *
     * @param { function } callback - Function Triggered when embed lifecycle changes.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onNativeEmbedLifecycleChange(callback: ((event: NativeEmbedDataInfo) => void) | undefined): this;
    /**
     * Triggered when embed visibility changes.
     *
     * @param { OnNativeEmbedVisibilityChangeCallback } callback - Callback triggered when embed visibility changes.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    onNativeEmbedVisibilityChange(callback: OnNativeEmbedVisibilityChangeCallback | undefined): this;
    /**
     * Triggered when gesture effect on embed tag.
     *
     * @param { function } callback - Function Triggered when gesture effect on embed tag.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onNativeEmbedGestureEvent(callback: ((event: NativeEmbedTouchInfo) => void) | undefined): this;
    /**
     * Called to set copy option
     *
     * @param { CopyOptions } value - copy option.
     * @returns { WebAttribute } the attribute of the scroll.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    copyOptions(value: CopyOptions | undefined): this;
    /**
     * When the URL is about to be loaded into the current Web, it gives the application the opportunity to take control.
     * This will not called for POST requests, may be called for subframes and with non-HTTP(S) schemes.
     *
     * @param { OnOverrideUrlLoadingCallback } callback - The callback for onOverrideUrlLoading.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onOverrideUrlLoading(callback: OnOverrideUrlLoadingCallback | undefined): this;
    /**
     * Enable whether to automatically resize text. The default value is true.
     *
     * @param { boolean } textAutosizing - Whether to enable text autosizing.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    textAutosizing(textAutosizing: boolean | undefined): this;
    /**
     * Enable app creates native media player to play web page media source.
     *
     * @param { NativeMediaPlayerConfig } config - The configuration of native media player.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    enableNativeMediaPlayer(config: NativeMediaPlayerConfig | undefined): this;
    /**
     * Triggered when render process not responding.
     *
     * @param { OnRenderProcessNotRespondingCallback } callback The triggered function when render process not responding.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    onRenderProcessNotResponding(callback: OnRenderProcessNotRespondingCallback | undefined): this;
    /**
     * Triggered when the unresponsive render process becomes responsive.
     *
     * @param { OnRenderProcessRespondingCallback } callback The triggered function when the unresponsive render process becomes responsive.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    onRenderProcessResponding(callback: OnRenderProcessRespondingCallback | undefined): this;
    /**
     * Triggered when the viewport-fit meta is detected for web page.
     *
     * @param { OnViewportFitChangedCallback } callback - The callback for onViewportFitChanged.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onViewportFitChanged(callback: OnViewportFitChangedCallback | undefined): this;
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
     * @since 20
     */
    onInterceptKeyboardAttach(callback: WebKeyboardCallback | undefined): this;
    /**
     * Called when received Ads blocked results.
     * If blocked results exist at the end of page loading, the first call will be triggered.
     * To avoid performance issues, subsequent results will be periodically reported through this api.
     *
     * @param { OnAdsBlockedCallback } callback - The callback for OnAdsBlockedCallback.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    onAdsBlocked(callback: OnAdsBlockedCallback | undefined): this;
    /**
     * Set web avoidance keyboard mode. The default value is WebKeyboardAvoidMode.RESIZE_CONTENT.
     *
     * @param { WebKeyboardAvoidMode } mode - The web keyboard avoid mode, which can be {@link WebKeyboardAvoidMode}.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    keyboardAvoidMode(mode: WebKeyboardAvoidMode | undefined): this;
    /**
     * Set the custom text menu.
     *
     * @param { EditMenuOptions } editMenu - Customize text menu options.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    editMenuOptions(editMenu: EditMenuOptions | undefined): this;
    /**
     * Enable or disable haptic feedback.
     *
     * @param { boolean } enabled - Default value is true, set false to disable haptic feedback.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    enableHapticFeedback(enabled: boolean | undefined): this;
    /**
     * Bind to the selection menu.
     *
     * @param { WebElementType } elementType - Indicates the type of selection menu.
     * @param { CustomBuilder } content - Indicates the content of selection menu.
     * @param { WebResponseType } responseType - Indicates response type of selection menu.
     * @param { SelectionMenuOptionsExt } [options] - Indicates the options of selection menu.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    bindSelectionMenu(elementType: WebElementType | undefined, content: CustomBuilder | undefined, responseType: WebResponseType | undefined, options?: SelectionMenuOptionsExt | undefined): this;
    /**
     * Sets whether to optimize parser budget to reduce FCP time
     *
     * @param { boolean} optimizeParserBudget Default value is false, set true to enable optimize parser budget.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    optimizeParserBudget(optimizeParserBudget: boolean | undefined): this;
    /**
     * Sets whether to follow the system font weight.
     *
     * @param { boolean } follow The value true means to follow the system font weight, and false means the opposite.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    enableFollowSystemFontWeight(follow: boolean | undefined): this;
    /**
     * Sets whether to enable AVSession for web pages.
     *
     * @param { boolean } enabled Whether to enable AVSession. The value true means to enable AVSession, and false means the opposite.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    enableWebAVSession(enabled: boolean | undefined): this;
    /**
     * Injects the JavaScripts that will be run just after document object has been created.
     *
     * @param { Array<ScriptItem> } scripts - The JavaScripts executed in array order.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    runJavaScriptOnDocumentStart(scripts: Array<ScriptItem> | undefined): this;
    /**
     * Injects the JavaScripts that will be run after document has been parsed finished.
     *
     * @param { Array<ScriptItem> } scripts - The JavaScripts executed in array order.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    runJavaScriptOnDocumentEnd(scripts: Array<ScriptItem> | undefined): this;
    /**
     * Injects the JavaScripts that will be run after head element has been parsed finished.
     *
     * @param { Array<ScriptItem> } scripts - The JavaScripts executed in array order.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    runJavaScriptOnHeadEnd(scripts: Array<ScriptItem> | undefined): this;
    /**
     * Sets the embed options, only valid when enableNativeEmbedMode is true.
     *
     * @param { EmbedOptions } options The embed options, which can be {@link EmbedOptions}.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    nativeEmbedOptions(options?: EmbedOptions | undefined): this;
    attributeModifier(modifier: AttributeModifier<WebAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * Defines the ssl error event.
 *
 * @typedef SslErrorEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 20
 */
export declare interface SslErrorEvent {
    /**
     * Notifies the user of the operation behavior of the web component.
     *
     * @type { SslErrorHandler }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    handler: SslErrorHandler;
    /**
     * Error codes.
     *
     * @type { SslError }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    error: SslError;
    /**
     * Request url.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    url: string;
    /**
     * Original url.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    originalUrl: string;
    /**
     * Referrer.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    referrer: string;
    /**
     * Whether the error is fatal.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    isFatalError: boolean;
    /**
     * Whether the request is main frame.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    isMainFrame: boolean;
}
/**
 * Define nested scroll options
 *
 * @interface NestedScrollOptionsExt
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20
 */
export declare interface NestedScrollOptionsExt {
    /**
     * Set NestedScrollMode when the scrollable component scrolls up
     *
     * @type { ?NestedScrollMode }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    scrollUp?: NestedScrollMode;
    /**
     * Set NestedScrollMode when the scrollable component scrolls down
     *
     * @type { ?NestedScrollMode }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    scrollDown?: NestedScrollMode;
    /**
     * Set NestedScrollMode when the scrollable component scrolls right
     *
     * @type { ?NestedScrollMode }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    scrollRight?: NestedScrollMode;
    /**
     * Set NestedScrollMode when the scrollable component scrolls left
     *
     * @type { ?NestedScrollMode }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    scrollLeft?: NestedScrollMode;
}
/**
 * Defines the Embed Options.
 *
 * @typedef EmbedOptions
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20
 */
export declare interface EmbedOptions {
    /**
     * Whether the embed element support the default intrinsic size of 300 * 150.
     * <br>Default value is false. If false, then the intrinsic size is 0 * 0.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    supportDefaultIntrinsicSize?: boolean;
}
export declare interface UIWebAttribute extends UICommonMethod {
    /**
     * Sets whether the Web allows JavaScript scripts to execute.
     *
     * @param { boolean } javaScriptAccess - {@code true} means the Web can allows JavaScript scripts to execute; {@code false} otherwise.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    javaScriptAccess(javaScriptAccess: boolean | undefined): this;
    /**
     * Sets whether enable local file system access in Web.
     *
     * @param { boolean } fileAccess - {@code true} means enable local file system access in Web; {@code false} otherwise.
     *    The default value is false.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    fileAccess(fileAccess: boolean | undefined): this;
    /**
     * Sets whether to allow image resources to be loaded from the network.
     *    The default value is true.
     * @param { boolean } onlineImageAccess - {@code true} means the Web can allow image resources to be loaded from the network;
     * {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onlineImageAccess(onlineImageAccess: boolean | undefined): this;
    /**
     * Sets whether to enable the DOM Storage API permission.
     *    The default value is false.
     * @param { boolean } domStorageAccess - {@code true} means enable the DOM Storage API permission in Web; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    domStorageAccess(domStorageAccess: boolean | undefined): this;
    /**
     * Sets whether the Web can automatically load image resources.
     *    The default value is true.
     * @param { boolean } imageAccess - {@code true} means the Web can automatically load image resources; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    imageAccess(imageAccess: boolean | undefined): this;
    /**
    * Sets how to load HTTP and HTTPS content.
    *
    * @param { MixedMode } mixedMode - The mixed mode, which can be {@link MixedMode}.
    * @returns { WebAttribute }
    * @syscap SystemCapability.Web.Webview.Core
    * @crossplatform
    * @atomicservice
     * @since 20
     */
    @memo
    mixedMode(mixedMode: MixedMode | undefined): this;
    /**
     * Sets whether the Web supports zooming using gestures.
     *
     * @param { boolean } zoomAccess {@code true} means the Web supports zooming using gestures; {@code false} otherwise.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    zoomAccess(zoomAccess: boolean | undefined): this;
    /**
     * Sets whether to allow access to geographical locations.
     *
     * @param { boolean } geolocationAccess - {@code true} means the Web allows access to geographical locations; {@code false} otherwise.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    geolocationAccess(geolocationAccess: boolean | undefined): this;
    /**
     * Injects the JavaScript object into window and invoke the function in window.
     *
     * @param { JavaScriptProxy } javaScriptProxy - The JavaScript object to be injected.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    javaScriptProxy(javaScriptProxy: JavaScriptProxy | undefined): this;
    /**
     * Sets the mode of cache in Web.
     *
     * @param { CacheMode } cacheMode - The cache mode, which can be {@link CacheMode}.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    cacheMode(cacheMode: CacheMode | undefined): this;
    /**
     * Sets the dark mode of Web.
     *
     * @param { WebDarkMode } mode - The dark mode, which can be {@link WebDarkMode}.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    darkMode(mode: WebDarkMode | undefined): this;
    /**
     * Sets whether to enable forced dark algorithm when the web is in dark mode
     *
     * @param { boolean } access {@code true} means enable the force dark algorithm; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    forceDarkAccess(access: boolean | undefined): this;
    /**
     * Sets the media options.
     *
     * @param { WebMediaOptions } options The media options, which can be {@link WebMediaOptions}.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    mediaOptions(options: WebMediaOptions | undefined): this;
    /**
     * Sets whether the Web access overview mode.
     *
     * @param { boolean } overviewModeAccess {@code true} means the Web access overview mode; {@code false} otherwise.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    overviewModeAccess(overviewModeAccess: boolean | undefined): this;
    /**
      * Sets the over-scroll mode for web
      *
      * @param { OverScrollMode } mode - The over-scroll mode, which can be {@link OverScrollMode}.
      * @returns { WebAttribute }
      * @syscap SystemCapability.Web.Webview.Core
      * @atomicservice
      * @since 20
      */
    @memo
    overScrollMode(mode: OverScrollMode | undefined): this;
    /**
     * Sets the blur on for elements on webview when soft keyboard is hidden manually.
     *
     * @param { BlurOnKeyboardHideMode } mode - Default value is SILENT. Set BLUR to enable the blur on keyboard hide mode, which can be {@link BlurOnKeyboardHideMode}.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    blurOnKeyboardHideMode(mode: BlurOnKeyboardHideMode | undefined): this;
    /**
     * Sets the ratio of the text zoom.
     *
     * @param { number } textZoomRatio The ratio of the text zoom.  The default value is 100, ranging from 1 to +∞.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    textZoomRatio(textZoomRatio: number | undefined): this;
    /**
     * Sets whether the Web access the database.
     *
     * @param { boolean } databaseAccess {@code true} means the Web access the database; {@code false} otherwise.
     *    The default value is false.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    databaseAccess(databaseAccess: boolean | undefined): this;
    /**
     * Sets the initial scale for the Web.
     *
     * @param { number } percent the initial scale for the Web.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    initialScale(percent: number | undefined): this;
    /**
     * Set whether to support the viewport attribute of the meta tag in the frontend page.
     *
     * @param { boolean } enabled {@code true} means support the viewport attribute of the meta tag; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    metaViewport(enabled: boolean | undefined): this;
    /**
     * Triggered at the end of web page loading.
     *
     * @param { Callback<OnPageEndEvent> } callback The triggered function at the end of web page loading.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onPageEnd(callback: Callback<OnPageEndEvent> | undefined): this;
    /**
     * Triggered at the begin of web page loading.
     *
     * @param { Callback<OnPageBeginEvent> } callback The triggered function at the begin of web page loading.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onPageBegin(callback: Callback<OnPageBeginEvent> | undefined): this;
    /**
     * Triggered when the page loading progress changes.
     *
     * @param { Callback<OnProgressChangeEvent> } callback The triggered function when the page loading progress changes.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onProgressChange(callback: Callback<OnProgressChangeEvent> | undefined): this;
    /**
     * Triggered when the title of the main application document changes.
     *
     * @param { Callback<OnTitleReceiveEvent> } callback The triggered function when the title of the main application document changes.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onTitleReceive(callback: Callback<OnTitleReceiveEvent> | undefined): this;
    /**
     * Triggered when requesting to hide the geolocation.
     *
     * @param { function } callback The triggered function when requesting to hide the geolocation permission.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onGeolocationHide(callback: (() => void) | undefined): this;
    /**
     * Triggered when requesting to show the geolocation permission.
     *
     * @param { Callback<OnGeolocationShowEvent> } callback The triggered function when requesting to show the geolocation permission.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onGeolocationShow(callback: Callback<OnGeolocationShowEvent> | undefined): this;
    /**
     * Triggered when the Web gets the focus.
     *
     * @param { function } callback The triggered function when the Web gets the focus.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onRequestSelected(callback: (() => void) | undefined): this;
    /**
     * Triggered when the Web wants to display a JavaScript alert() dialog.
     *
     * @param {  Callback<OnAlertEvent, boolean> } callback The triggered function when the web page wants to display a JavaScript alert() dialog.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onAlert(callback: Callback<OnAlertEvent, boolean> | undefined): this;
    /**
     * Triggered when the Web wants to confirm navigation from JavaScript onbeforeunload.
     *
     * @param { Callback<OnBeforeUnloadEvent, boolean> } callback The triggered function when the web page wants to confirm navigation from JavaScript onbeforeunload.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onBeforeUnload(callback: Callback<OnBeforeUnloadEvent, boolean> | undefined): this;
    /**
     * Triggered when the web page wants to display a JavaScript confirm() dialog.
     *
     * @param { Callback<OnConfirmEvent, boolean> } callback The triggered function when the web page wants to display a JavaScript confirm() dialog.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onConfirm(callback: Callback<OnConfirmEvent, boolean> | undefined): this;
    /**
     * Triggered when the web page wants to display a JavaScript prompt() dialog.
     *
     * @param { Callback<OnPromptEvent, boolean> } callback The triggered function when the web page wants to display a JavaScript prompt() dialog.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onPrompt(callback: Callback<OnPromptEvent, boolean> | undefined): this;
    /**
     * Triggered when the web page receives a JavaScript console message.
     *
     * @param {  Callback<OnConsoleEvent, boolean> } callback The triggered function when the web page receives a JavaScript console message.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onConsole(callback: Callback<OnConsoleEvent, boolean> | undefined): this;
    /**
     * Triggered when the web page receives a web resource loading error.
     *
     * @param { Callback<OnErrorReceiveEvent> } callback The triggered function when the web page receives a web resource loading error.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onErrorReceive(callback: Callback<OnErrorReceiveEvent> | undefined): this;
    /**
     * Triggered when the web page receives a web resource loading HTTP error.
     *
     * @param { Callback<OnHttpErrorReceiveEvent> } callback The triggered function when the web page receives a web resource loading HTTP error.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onHttpErrorReceive(callback: Callback<OnHttpErrorReceiveEvent> | undefined): this;
    /**
     * Triggered when starting to download.
     *
     * @param { Callback<OnDownloadStartEvent> } callback The triggered function when starting to download.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onDownloadStart(callback: Callback<OnDownloadStartEvent> | undefined): this;
    /**
     * Triggered when the Web page refreshes accessed history.
     *
     * @param { Callback<OnRefreshAccessedHistoryEvent> } callback The triggered callback when the Web page refreshes accessed history.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onRefreshAccessedHistory(callback: Callback<OnRefreshAccessedHistoryEvent> | undefined): this;
    /**
     * Triggered when the render process exits.
     *
     * @param { Callback<OnRenderExitedEvent> } callback The triggered when the render process exits.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onRenderExited(callback: Callback<OnRenderExitedEvent> | undefined): this;
    /**
     * Triggered when the file selector shows.
     *
     * @param { Callback<OnShowFileSelectorEvent, boolean> } callback The triggered when the file selector shows.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onShowFileSelector(callback: Callback<OnShowFileSelectorEvent, boolean> | undefined): this;
    /**
     * Triggered when the url loading.
     *
     * @param { Callback<OnResourceLoadEvent> } callback The triggered when the url loading.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onResourceLoad(callback: Callback<OnResourceLoadEvent> | undefined): this;
    /**
     * Triggered when the web component exit the full screen mode.
     *
     * @param { function } callback The triggered function when the web component exit the full screen mode.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onFullScreenExit(callback: (() => void) | undefined): this;
    /**
     * Triggered when the web component enter the full screen mode.
     *
     * @param { OnFullScreenEnterCallback } callback - The triggered function when the web component enter the full screen mode.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onFullScreenEnter(callback: OnFullScreenEnterCallback | undefined): this;
    /**
     * Triggered when the scale of WebView changed.
     *
     * @param { Callback<OnScaleChangeEvent> } callback The triggered when the scale of WebView changed.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onScaleChange(callback: Callback<OnScaleChangeEvent> | undefined): this;
    /**
     * Triggered when the browser needs credentials from the user.
     *
     * @param { Callback<OnHttpAuthRequestEvent, boolean> } callback The triggered when the browser needs credentials from the user.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onHttpAuthRequest(callback: Callback<OnHttpAuthRequestEvent, boolean> | undefined): this;
    /**
     * Triggered when the resources loading is intercepted.
     *
     * @param { Callback<OnInterceptRequestEvent, WebResourceResponse> } callback The triggered callback when the resources loading is intercepted.
     * @returns { WebAttribute } If the response value is null, the Web will continue to load the resources. Otherwise, the response value will be used
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onInterceptRequest(callback: Callback<OnInterceptRequestEvent, WebResourceResponse> | undefined): this;
    /**
     * Triggered when the host application that web content from the specified origin is attempting to access the resources.
     *
     * @param { Callback<OnPermissionRequestEvent> } callback The triggered callback when the host application that web content from the specified origin is
     *     attempting to access the resources.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onPermissionRequest(callback: Callback<OnPermissionRequestEvent> | undefined): this;
    /**
     * Triggered when the host application that web content from the specified origin is requesting to capture screen.
     * @param { Callback<OnScreenCaptureRequestEvent> } callback The triggered callback when the host application that web content from the specified origin is
     *     requesting to capture screen.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onScreenCaptureRequest(callback: Callback<OnScreenCaptureRequestEvent> | undefined): this;
    /**
     * Triggered when called to allow custom display of the context menu.
     *
     * @param { Callback<OnContextMenuShowEvent, boolean> } callback The triggered callback when called to allow custom display of the context menu.
     * @returns { WebAttribute } If custom display return true.Otherwise, default display return false.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onContextMenuShow(callback: Callback<OnContextMenuShowEvent, boolean> | undefined): this;
    /**
     * Triggered when called to allow custom hide of the context menu.
     *
     * @param { OnContextMenuHideCallback } callback The triggered function when called to allow custom hide of the context menu.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onContextMenuHide(callback: OnContextMenuHideCallback | undefined): this;
    /**
     * Set whether media playback needs to be triggered by user gestures.
     *
     * @param { boolean } access True if it needs to be triggered manually by the user else false.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    mediaPlayGestureAccess(access: boolean | undefined): this;
    /**
     * Notify search result to host application through onSearchResultReceive.
     *
     * @param { Callback<OnSearchResultReceiveEvent> } callback Function Triggered when the host application call searchAllAsync.
     * or searchNext api on WebController and the request is valid.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onSearchResultReceive(callback: Callback<OnSearchResultReceiveEvent> | undefined): this;
    /**
     * Triggered when the scroll bar slides to the specified position.
     *
     * @param { Callback<OnScrollEvent> } callback Function Triggered when the scroll bar slides to the specified position.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onScroll(callback: Callback<OnScrollEvent> | undefined): this;
    /**
     * Triggered when the Web page receives an ssl Error.
     *
     * @param { Callback<OnSslErrorEventReceiveEvent> } callback The triggered callback when the Web page receives an ssl Error.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onSslErrorEventReceive(callback: Callback<OnSslErrorEventReceiveEvent> | undefined): this;
    /**
     * Triggered when the Web page receives an ssl Error.
     *
     * @param { OnSslErrorEventCallback } callback The triggered callback when the Web page receives an ssl Error.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onSslErrorEvent(callback: OnSslErrorEventCallback | undefined): this;
    /**
     * Triggered when the Web page needs ssl client certificate from the user.
     *
     * @param { Callback<OnClientAuthenticationEvent> } callback The triggered callback when needs ssl client certificate from the user.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onClientAuthenticationRequest(callback: Callback<OnClientAuthenticationEvent> | undefined): this;
    /**
     * Triggered when web page requires the user to create a window.
     *
     * @param {  Callback<OnWindowNewEvent> } callback The triggered callback when web page requires the user to create a window.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onWindowNew(callback: Callback<OnWindowNewEvent> | undefined): this;
    /**
     * Triggered when web page requires the user to close a window.
     *
     * @param { function } callback The triggered callback when web page requires the user to close a window.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onWindowExit(callback: (() => void) | undefined): this;
    /**
     * Set whether multiple windows are supported.
     *
     * @param { boolean } multiWindow True if it needs to be triggered manually by the user else false.
     *    The default value is false.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    multiWindowAccess(multiWindow: boolean | undefined): this;
    /**
     * Key events notify the application before the WebView consumes them.
     *
     * @param { function } callback Key event info.
     * @returns { WebAttribute } True if the application consumes key events else false.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onInterceptKeyEvent(callback: ((event: KeyEvent) => boolean) | undefined): this;
    /**
     * Set the font of webview standard font library. The default font is "sans serif".
     *
     * @param { string } family Standard font set series.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    webStandardFont(family: string | undefined): this;
    /**
     * Set the font of webview serif font library. The default font is "serif".
     *
     * @param { string } family Serif font set series.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    webSerifFont(family: string | undefined): this;
    /**
     * Set the font of webview sans serif font library. The default font is "sans-serif".
     *
     * @param { string } family Sans serif font set series.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    webSansSerifFont(family: string | undefined): this;
    /**
     * Set the font of webview fixed font library. The default font is "monospace".
     *
     * @param { string } family Fixed font set series.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    webFixedFont(family: string | undefined): this;
    /**
     * Set the font of webview fantasy font library. The default font is "fantasy".
     *
     * @param { string } family fantasy font set series.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    webFantasyFont(family: string | undefined): this;
    /**
     * Set the font of webview cursive font library. The default font is "cursive".
     *
     * @param { string } family Cursive font set series.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    webCursiveFont(family: string | undefined): this;
    /**
     * Set the default fixed font value of webview. The default value is 13, ranging from 1 to 72.
     *
     * @param { number } size Font size.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    defaultFixedFontSize(size: number | undefined): this;
    /**
     * Set the default font value of webview. The default value is 16, ranging from 1 to 72.
     *
     * @param { number } size Font size.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    defaultFontSize(size: number | undefined): this;
    /**
     * Set the minimum value of webview font. The default value is 8, ranging from 1 to 72.
     *
     * @param { number } size Font size.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    minFontSize(size: number | undefined): this;
    /**
     * Set the logical minimum value of webview font. The default value is 8, ranging from 1 to 72.
     *
     * @param { number } size Font size.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    minLogicalFontSize(size: number | undefined): this;
    /**
     * Set the default text encodingFormat value of webview. The default value is UTF-8.
     *
     * @param { string } textEncodingFormat text encodingFormat.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    defaultTextEncodingFormat(textEncodingFormat: string | undefined): this;
    /**
     * Whether force display the scroll bar.
     *
     * @param { boolean } enabled {@code true} means show; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    forceDisplayScrollBar(enabled: boolean | undefined): this;
    /**
     * Whether web component can load resource from network.
     *
     * @param { boolean } block {@code true} means it can't load resource from network; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    blockNetwork(block: boolean | undefined): this;
    /**
     * Set whether paint horizontal scroll bar.
     *
     * @param { boolean } horizontalScrollBar True if it needs to paint horizontal scroll bar.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    horizontalScrollBarAccess(horizontalScrollBar: boolean | undefined): this;
    /**
     * Set whether paint vertical scroll bar.
     *
     * @param { boolean } verticalScrollBar True if it needs to paint vertical scroll bar.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    verticalScrollBarAccess(verticalScrollBar: boolean | undefined): this;
    /**
     * Triggered when the application receive the url of an apple-touch-icon.
     *
     * @param { Callback<OnTouchIconUrlReceivedEvent> } callback The triggered callback when the application receive an new url of an
     * apple-touch-icon.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onTouchIconUrlReceived(callback: Callback<OnTouchIconUrlReceivedEvent> | undefined): this;
    /**
     * Triggered when the application receive a new favicon for the current web page.
     *
     * @param { Callback<OnFaviconReceivedEvent> } callback The triggered callback when the application receive a new favicon for the
     * current web page.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onFaviconReceived(callback: Callback<OnFaviconReceivedEvent> | undefined): this;
    /**
     * Triggered when previous page will no longer be drawn and next page begin to draw.
     *
     * @param {  Callback<OnPageVisibleEvent> } callback The triggered callback when previous page will no longer be drawn and next
     * page begin to draw.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onPageVisible(callback: Callback<OnPageVisibleEvent> | undefined): this;
    /**
     * Triggered when the form could be resubmitted.
     *
     * @param { Callback<OnDataResubmittedEvent> } callback The triggered callback to decision whether resend form data or not.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onDataResubmitted(callback: Callback<OnDataResubmittedEvent> | undefined): this;
    /**
     * Set whether enable pinch smooth mode.
     *
     * @param { boolean } isEnabled True if it needs to enable smooth mode.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    pinchSmooth(isEnabled: boolean | undefined): this;
    /**
     * Whether the window can be open automatically through JavaScript.
     *
     * @param { boolean } flag If it is true, the window can be opened automatically through JavaScript.
     * If it is false and user behavior, the window can be opened automatically through JavaScript.
     * Otherwise, the window cannot be opened.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    allowWindowOpenMethod(flag: boolean | undefined): this;
    /**
     * Triggered when the playing state of audio on web page changed.
     *
     * @param { Callback<OnAudioStateChangedEvent> } callback The playing state of audio on web page.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onAudioStateChanged(callback: Callback<OnAudioStateChangedEvent> | undefined): this;
    /**
     * Triggered when the first content rendering of web page.
     *
     * @param { Callback<OnFirstContentfulPaintEvent> } callback
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onFirstContentfulPaint(callback: Callback<OnFirstContentfulPaintEvent> | undefined): this;
    /**
     * Called when the First rendering of meaningful content time(FMP)
     *
     * @param { OnFirstMeaningfulPaintCallback } callback Function Triggered when the firstMeaningfulPaint.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onFirstMeaningfulPaint(callback: OnFirstMeaningfulPaintCallback | undefined): this;
    /**
     * Called when the Maximum content rendering time(LCP).
     *
     * @param { OnLargestContentfulPaintCallback } callback Function Triggered when the largestContentfulPaint.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onLargestContentfulPaint(callback: OnLargestContentfulPaintCallback | undefined): this;
    /**
     * Triggered when the resources loading is intercepted.
     *
     * @param { Callback<OnLoadInterceptEvent, boolean> } callback The triggered callback when the resources loading is intercepted.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onLoadIntercept(callback: Callback<OnLoadInterceptEvent, boolean> | undefined): this;
    /**
     * Triggered when The controller is bound to the web component, this controller must be a WebviewController.
     * This callback can not use the interface about manipulating web pages.
     * @param { function } callback The triggered callback when web controller initialization success.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onControllerAttached(callback: (() => void) | undefined): this;
    /**
     * Triggered when the over scrolling.
     * @param { Callback<OnOverScrollEvent> } callback Function Triggered when the over scrolling.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onOverScroll(callback: Callback<OnOverScrollEvent> | undefined): this;
    /**
     * Called when received website security risk check result.
     *
     * @param { OnSafeBrowsingCheckResultCallback } callback - Function triggered when received website security risk check result.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onSafeBrowsingCheckResult(callback: OnSafeBrowsingCheckResultCallback | undefined): this;
    /**
     * Called when the load committed.
     *
     * @param { OnNavigationEntryCommittedCallback } callback Function Triggered when a load committed.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onNavigationEntryCommitted(callback: OnNavigationEntryCommittedCallback | undefined): this;
    /**
     * Called when tracker's cookie is prevented.
     *
     * @param { OnIntelligentTrackingPreventionCallback } callback - Callback triggered when tracker's cookie is prevented.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onIntelligentTrackingPreventionResult(callback: OnIntelligentTrackingPreventionCallback | undefined): this;
    /**
     * Injects the JavaScripts before Webview creates the DOM tree, and then the JavaScript snippet will run after the document has been created.
     * @param { Array<ScriptItem> } scripts - The array of the JavaScripts to be injected.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    javaScriptOnDocumentStart(scripts: Array<ScriptItem> | undefined): this;
    /**
     * Injects the JavaScripts before Webview creates the DOM tree, and then the JavaScript snippet will run after the document has been created.
     * @param { Array<ScriptItem> } scripts - The array of the JavaScripts to be injected.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    javaScriptOnDocumentEnd(scripts: Array<ScriptItem> | undefined): this;
    /**
     * Set web layout Mode.
     * @param { WebLayoutMode } mode - The web layout mode, which can be {@link WebLayoutMode}.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    layoutMode(mode: WebLayoutMode | undefined): this;
    /**
     * Called to setting the nested scroll options.
     *
     * @param { NestedScrollOptions | NestedScrollOptionsExt } value - options for
     *     nested scrolling.
     * @returns { WebAttribute } the attribute of the scroll.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    nestedScroll(value: NestedScrollOptions | NestedScrollOptionsExt | undefined): this;
    /**
     * Sets the enable native embed mode for web.
     *
     * @param { boolean } mode - True if it needs to enable native embed mode.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    enableNativeEmbedMode(mode: boolean | undefined): this;
    /**
     * Register native pattern with specific tag and type.
     *
     * @param { string } tag - Tag name used by html webpage.
     * @param { string } type - Type of the tag.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    registerNativeEmbedRule(tag: string | undefined, type: string | undefined): this;
    /**
     * Triggered when embed lifecycle changes.
     *
     * @param { function } callback - Function Triggered when embed lifecycle changes.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onNativeEmbedLifecycleChange(callback: ((event: NativeEmbedDataInfo) => void) | undefined): this;
    /**
     * Triggered when embed visibility changes.
     *
     * @param { OnNativeEmbedVisibilityChangeCallback } callback - Callback triggered when embed visibility changes.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    @memo
    onNativeEmbedVisibilityChange(callback: OnNativeEmbedVisibilityChangeCallback | undefined): this;
    /**
     * Triggered when gesture effect on embed tag.
     *
     * @param { function } callback - Function Triggered when gesture effect on embed tag.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onNativeEmbedGestureEvent(callback: ((event: NativeEmbedTouchInfo) => void) | undefined): this;
    /**
     * Called to set copy option
     *
     * @param { CopyOptions } value - copy option.
     * @returns { WebAttribute } the attribute of the scroll.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    copyOptions(value: CopyOptions | undefined): this;
    /**
     * When the URL is about to be loaded into the current Web, it gives the application the opportunity to take control.
     * This will not called for POST requests, may be called for subframes and with non-HTTP(S) schemes.
     *
     * @param { OnOverrideUrlLoadingCallback } callback - The callback for onOverrideUrlLoading.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onOverrideUrlLoading(callback: OnOverrideUrlLoadingCallback | undefined): this;
    /**
     * Enable whether to automatically resize text. The default value is true.
     *
     * @param { boolean } textAutosizing - Whether to enable text autosizing.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    textAutosizing(textAutosizing: boolean | undefined): this;
    /**
     * Enable app creates native media player to play web page media source.
     *
     * @param { NativeMediaPlayerConfig } config - The configuration of native media player.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    enableNativeMediaPlayer(config: NativeMediaPlayerConfig | undefined): this;
    /**
     * Triggered when render process not responding.
     *
     * @param { OnRenderProcessNotRespondingCallback } callback The triggered function when render process not responding.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    @memo
    onRenderProcessNotResponding(callback: OnRenderProcessNotRespondingCallback | undefined): this;
    /**
     * Triggered when the unresponsive render process becomes responsive.
     *
     * @param { OnRenderProcessRespondingCallback } callback The triggered function when the unresponsive render process becomes responsive.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    @memo
    onRenderProcessResponding(callback: OnRenderProcessRespondingCallback | undefined): this;
    /**
     * Triggered when the viewport-fit meta is detected for web page.
     *
     * @param { OnViewportFitChangedCallback } callback - The callback for onViewportFitChanged.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onViewportFitChanged(callback: OnViewportFitChangedCallback | undefined): this;
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
     * @since 20
     */
    @memo
    onInterceptKeyboardAttach(callback: WebKeyboardCallback | undefined): this;
    /**
     * Called when received Ads blocked results.
     * If blocked results exist at the end of page loading, the first call will be triggered.
     * To avoid performance issues, subsequent results will be periodically reported through this api.
     *
     * @param { OnAdsBlockedCallback } callback - The callback for OnAdsBlockedCallback.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    onAdsBlocked(callback: OnAdsBlockedCallback | undefined): this;
    /**
     * Set web avoidance keyboard mode. The default value is WebKeyboardAvoidMode.RESIZE_CONTENT.
     *
     * @param { WebKeyboardAvoidMode } mode - The web keyboard avoid mode, which can be {@link WebKeyboardAvoidMode}.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 20
     */
    @memo
    keyboardAvoidMode(mode: WebKeyboardAvoidMode | undefined): this;
    /**
     * Set the custom text menu.
     *
     * @param { EditMenuOptions } editMenu - Customize text menu options.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    @memo
    editMenuOptions(editMenu: EditMenuOptions | undefined): this;
    /**
     * Enable or disable haptic feedback.
     *
     * @param { boolean } enabled - Default value is true, set false to disable haptic feedback.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    @memo
    enableHapticFeedback(enabled: boolean | undefined): this;
    /**
     * Bind to the selection menu.
     *
     * @param { WebElementType } elementType - Indicates the type of selection menu.
     * @param { CustomBuilder } content - Indicates the content of selection menu.
     * @param { WebResponseType } responseType - Indicates response type of selection menu.
     * @param { SelectionMenuOptionsExt } [options] - Indicates the options of selection menu.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    @memo
    bindSelectionMenu(elementType: WebElementType | undefined, content: CustomBuilder | undefined, responseType: WebResponseType | undefined, options?: SelectionMenuOptionsExt | undefined): this;
    /**
     * Sets whether to optimize parser budget to reduce FCP time
     *
     * @param { boolean} optimizeParserBudget Default value is false, set true to enable optimize parser budget.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    @memo
    optimizeParserBudget(optimizeParserBudget: boolean | undefined): this;
    /**
     * Sets whether to follow the system font weight.
     *
     * @param { boolean } follow The value true means to follow the system font weight, and false means the opposite.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    @memo
    enableFollowSystemFontWeight(follow: boolean | undefined): this;
    /**
     * Sets whether to enable AVSession for web pages.
     *
     * @param { boolean } enabled Whether to enable AVSession. The value true means to enable AVSession, and false means the opposite.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    @memo
    enableWebAVSession(enabled: boolean | undefined): this;
    /**
     * Injects the JavaScripts that will be run just after document object has been created.
     *
     * @param { Array<ScriptItem> } scripts - The JavaScripts executed in array order.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    @memo
    runJavaScriptOnDocumentStart(scripts: Array<ScriptItem> | undefined): this;
    /**
     * Injects the JavaScripts that will be run after document has been parsed finished.
     *
     * @param { Array<ScriptItem> } scripts - The JavaScripts executed in array order.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    @memo
    runJavaScriptOnDocumentEnd(scripts: Array<ScriptItem> | undefined): this;
    /**
     * Injects the JavaScripts that will be run after head element has been parsed finished.
     *
     * @param { Array<ScriptItem> } scripts - The JavaScripts executed in array order.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    @memo
    runJavaScriptOnHeadEnd(scripts: Array<ScriptItem> | undefined): this;
    /**
     * Sets the embed options, only valid when enableNativeEmbedMode is true.
     *
     * @param { EmbedOptions } options The embed options, which can be {@link EmbedOptions}.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20
     */
    @memo
    nativeEmbedOptions(options?: EmbedOptions | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<WebAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function Web(
    value: WebOptions, 
    @memo
    content_?: () => void,
): UIWebAttribute
