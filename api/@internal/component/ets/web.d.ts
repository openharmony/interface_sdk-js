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
 * Defines methods for the web controller.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare type WebviewController = import('../api/@ohos.web.webview').default.WebviewController;

/**
 * Defines a callback invoked when a navigation entry is submitted.
 *
 * @param { LoadCommittedDetails } loadCommittedDetails - Detailed information about the web page that has been
 *     submitted for redirection.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
type OnNavigationEntryCommittedCallback = (loadCommittedDetails: LoadCommittedDetails) => void;

/**
 * Callback invoked when an SSL error occurs during resource loading. Returns detailed information about the SSL error.
 *
 * @param { SslErrorEvent } sslErrorEvent - Detailed information passed when an SSL error occurs during resource
 *     loading.
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 23]
 * @atomicservice
 * @since 12 dynamic
 */
type OnSslErrorEventCallback = (sslErrorEvent: SslErrorEvent) => void;

/**
 * Defines a callback of **onOverrideErrorPage**. This callback is triggered when a web page fails to be loaded.
 *
 * @param { OnErrorReceiveEvent } errorPageEvent - Information returned when an error occurs during web page loading.
 * @returns { string } Base64-encoded HTML text content.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
type OnOverrideErrorPageCallback = (errorPageEvent: OnErrorReceiveEvent) => string;

/**
 * Callback triggered when the largest content area is painted on the web page. Used to obtain performance measurement
 * information for the largest content paint. Applicable to scenarios such as monitoring web page loading performance
 * and optimizing page rendering speed. Compared with OnFirstMeaningfulPaintCallback, which focuses on the completion of
 * main content loading, and OnFirstScreenPaintCallback, which focuses on the rendering completion of the first screen's
 * visible content, this callback focuses on the paint time of the largest content element, making it suitable for
 * evaluating page rendering completeness and performance bottlenecks.
 *
 * @param { LargestContentfulPaint } largestContentfulPaint - Information about the largest content paint.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
type OnLargestContentfulPaintCallback = (largestContentfulPaint: LargestContentfulPaint) => void;

/**
 * Callback for measuring the first meaningful paint of the main content on the page. This callback is triggered when
 * the page finishes loading the main content. Compared with OnLargestContentfulPaintCallback, which focuses on the
 * paint time of the largest content element, and OnFirstScreenPaintCallback, which focuses on the rendering completion
 * of the first screen's visible content, this callback focuses more on whether the main content has finished loading,
 * making it suitable for evaluating the loading experience of user-visible content.
 *
 * @param { FirstMeaningfulPaint } firstMeaningfulPaint - Information about the first meaningful paint.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
type OnFirstMeaningfulPaintCallback = (firstMeaningfulPaint: FirstMeaningfulPaint) => void;

/**
 * Defines the camera capture states, which identify the current working status of the camera and help developers
 * monitor camera resource usage in real time, optimizing resource management and user privacy protection.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare enum CameraCaptureState {
  /**
   * The camera is not working.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  NONE = 0,
  /**
   * The camera is paused.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  PAUSED = 1,
  /**
   * The camera is active.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  ACTIVE = 2
}

/**
 * Defines the microphone capture states, which identify the current working status of the microphone and help
 * developers monitor microphone resource usage in real time, optimizing resource management and user privacy
 * protection.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare enum MicrophoneCaptureState {
  /**
   * The microphone is not working.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  NONE = 0,
  /**
   * The microphone is paused.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  PAUSED = 1,
  /**
   * The microphone is active.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  ACTIVE = 2
}

/**
 * Provides the state change information of the camera when the callback is triggered, including the state before the
 * change and the new state. It is suitable for scenarios where monitoring camera state changes is required, improving
 * camera management visibility and user experience.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare interface CameraCaptureStateChangeInfo {
  /**
   * State before the change.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  originalState: CameraCaptureState;

  /**
   * New state.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  newState: CameraCaptureState;
}

/**
 * Provides the state change information of the microphone when the callback is triggered, including the state before
 * the change and the state after the change. It is suitable for scenarios where monitoring microphone state changes is
 * required, improving microphone management visibility and user experience.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare interface MicrophoneCaptureStateChangeInfo {
  /**
   * State before the change.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  originalState: MicrophoneCaptureState;

  /**
   * New state.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  newState: MicrophoneCaptureState;
}

/**
 * This callback is triggered when the camera device state of the page changes.
 *
 * @param { CameraCaptureStateChangeInfo } event - Original and new camera state.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
type OnCameraCaptureStateChangeCallback = (event: CameraCaptureStateChangeInfo) => void;

/**
 * Defines a callback triggered when the microphone state of the page changes.
 *
 * @param { MicrophoneCaptureStateChangeInfo } event - Original and new microphone state.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
type OnMicrophoneCaptureStateChangeCallback = (event: MicrophoneCaptureStateChangeInfo) => void;

/**
 * Callback used to intercept URL loading requests. It can block the loading of specific URLs or perform custom
 * processing. Applicable to scenarios such as intercepting ads and blocking redirects to malicious websites.
 *
 * @param { WebResourceRequest } webResourceRequest - Information about the URL request.
 * @returns { boolean } Whether the loading is blocked. **true** is returned if the loading is blocked; otherwise,
 *     **false** is returned.
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 23]
 * @atomicservice
 * @since 12 dynamic
 */
type OnOverrideUrlLoadingCallback = (webResourceRequest: WebResourceRequest) => boolean;

/**
 * Defines a callback invoked when the tracker cookie is intercepted.
 *
 * @param { IntelligentTrackingPreventionDetails } details - Detailed information about intelligent tracking prevention.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
type OnIntelligentTrackingPreventionCallback = (details: IntelligentTrackingPreventionDetails) => void;

/**
 * Defines a callback invoked when the visibility of a same-layer tag changes.
 *
 * @param { NativeEmbedVisibilityInfo } nativeEmbedVisibilityInfo - Provides information about visibility changes of
 *     same-layer tags.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 12 dynamic
 */
type OnNativeEmbedVisibilityChangeCallback = (nativeEmbedVisibilityInfo: NativeEmbedVisibilityInfo) => void;

/**
 * Defines a callback triggered when the **param** element embedded in the same-layer rendered **object** tag is added,
 * modified, or deleted.
 *
 * @param { NativeEmbedParamDataInfo } event - Detailed information about the changes of the **param** element embedded
 *     in the **object** tag.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 21 dynamic
 */
type OnNativeEmbedObjectParamChangeCallback = (event: NativeEmbedParamDataInfo) => void;

/**
 * Defines the PIN verification results, which identify the execution status of PIN verification.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare enum PinVerifyResult {
  /**
   * Verification successful.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  PIN_VERIFICATION_SUCCESS = 0,
  /**
   * Verification failed.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  PIN_VERIFICATION_FAILED = 1
}

/**
 * Defines the credential types used for identity authentication.
 *
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
   * Application credential.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  CREDENTIAL_APP = 3,
  /**
   * UKey credential.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  CREDENTIAL_UKEY = 4
}

/**
 * VerifyPinHandler is a class in the Web component that handles PIN code verification requests. It is used to enhance
 * app security in scenarios requiring identity authentication on web pages (such as secure payment, sensitive operation
 * confirmation, etc.). When user PIN authentication is required, this handler is provided to the app through the
 * onVerifyPin event callback, allowing the app to respond to the PIN verification result, effectively preventing
 * unauthorized access and protecting user privacy. For sample code, see [onVerifyPin]{@link WebAttribute#onVerifyPin}.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare class VerifyPinHandler {
  /**
   * A constructor used to create a **VerifyPinHandler** instance.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  constructor();

  /**
   * Notifies the Web component of the PIN authentication result. The app calls this method to return the PIN
   * verification result to the Web component, which then continues the subsequent authentication process based on the
   * result. If the verification is successful, the Web component allows access to protected content; if the
   * verification fails, the Web component denies access and may prompt the user to retry.
   *
   * @param { PinVerifyResult } result - PIN authentication result. If successful, the Web component allows subsequent
   *     page operations; if failed, page navigation or content loading may be blocked.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  confirm(result: PinVerifyResult): void;
}

/**
 * Defines the callback triggered to notify the user of PIN verification.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare interface VerifyPinEvent {
  /**
   * User operation.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  handler: VerifyPinHandler;

  /**
   * Certificate credential ID used for verification.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  identity: string;
}

/**
 * Callback triggered to notify the user of PIN authentication.
 *
 * @param { VerifyPinEvent } verifyPinEvent - Details of the callback triggered to notify the user of PIN
 *     authentication.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
type OnVerifyPinCallback = (verifyPinEvent: VerifyPinEvent) => void;

/**
 * Enumerates the status change types of the **param** element embedded in the same-layer rendering tag **object**.
 * **ADD** is triggered when the **param** element is added, **UPDATE** is triggered when it is modified, and **DELETE**
 * is triggered when it is deleted.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 21 dynamic
 */
declare enum  NativeEmbedParamStatus {
  /**
   * Triggered when a **param** element is added.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  ADD = 0,

  /**
   * Triggered when a **param** element is modified.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  UPDATE = 1,

  /**
   * Triggered when a **param** element is deleted.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  DELETE = 2
}

/**
 * Enumerates the log sources of the console messages.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare enum ConsoleMessageSource {
  /**
   * Logs are generated by the XML/HTML parser of the web page, for example, HTML syntax errors, XML format exceptions,
   * and parsing warnings caused by unclosed HTML tags.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  XML = 0,

  /**
   * Logs are generated when an exception occurs during JavaScript execution, such as a JavaScript syntax error or
   * runtime exception.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  JAVASCRIPT = 1,

  /**
   * Logs are generated when web page resources (such as JS, CSS, and images) fail to be loaded and error code 404 is
   * returned.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  NETWORK = 2,

  /**
   * Logs are generated when web pages call W3C console APIs, such as **console.warn** and **console.error**.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  CONSOLE_API = 3,

  /**
   * Logs are generated when exceptions (such as storage quota exceeding and operation exceptions) occur on storage-
   * related modules (LocalStorage, SessionStorage, IndexedDB and Cookie).
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  STORAGE = 4,

  /**
   * Logs are generated when exceptions (such as invalid CSS styles, layout exceptions, and rendering performance
   * warnings) occur on the rendering engine (such as Blink).
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  RENDERING = 5,

  /**
   * Logs are generated when web page security policies are violated, HTTPS certificate errors occur, and mixed content
   * (HTTP resources are loaded on HTTPS pages) occurs.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  SECURITY = 6,

  /**
   * Logs are generated by other sources, such as web extension plugins.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  OTHER = 7,

  /**
   * Logs are generated when an expired syntax, such as **slider-vertical**, is used.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  DEPRECATION = 8,

  /**
   * Logs are generated when service worker errors occur, for example, service worker navigation preload requests are
   * interrupted before being completed.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  WORKER = 9,

  /**
   * Logs are generated when a rule is violated, for example, the execution of a piece of JavaScript code takes more
   * than 50 ms.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  VIOLATION = 10,

  /**
   * Logs are generated when the web page detects code behaviors that may compromise user experience, security, or
   * performance. The web page proactively intervenes, blocks or modifies the behavior, and notifies you of the behavior
   * through a message containing **kIntervention**. For example, the **DispatchBeforeUnload** event is triggered on a
   * web page without user interaction.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  INTERVENTION = 11,

  /**
   * Logs are generated when code behaviors that do not comply with web security best practices are detected and
   * improvement suggestions are provided. For example, when the page uses APIs (such as **innerHTML** and **eval()**)
   * that may have XSS risks and does not comply with the Trusted Types security specifications.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  RECOMMENDATION = 12
}

/**
 * Provides detailed information about the **param** element embedded in the same-layer rendering tag **object**,
 * including the status and parameters. It is suitable for scenarios where monitoring param element changes is required,
 * improving same-layer element management flexibility and accuracy.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 21 dynamic
 */
declare interface NativeEmbedParamItem {
  /**
   * Status change type of the **param** element.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  status: NativeEmbedParamStatus;

  /**
   * ID of the **param** element.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  id: string;

  /**
   * Name of the **param** element.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  name?: string;

  /**
   * Value of the **param** element.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  value?: string;
}

/**
 * Provides detailed information about the same-layer tag when the **param** element embedded in the **object** tag
 * changes, including the tag ID and parameter items. It is suitable for scenarios where monitoring param element
 * changes is required, improving same-layer element management flexibility and accuracy.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 21 dynamic
 */
declare interface NativeEmbedParamDataInfo {
  /**
   * Unique ID of the same-layer tag.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  embedId: string;

  /**
   * ID of the same-layer tag.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  objectAttributeId?: string;

  /**
   * Detailed information about the changed param elements, including the status change type, ID, parameter name, and
   * parameter value of each param element.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  paramItems?: Array<NativeEmbedParamItem>;
}

/**
 * Enumerates the modes in which the component's content is rendered to fit the new size during its width and height
 * animation process when the component is rotated.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare enum WebRotateEffect {
  /**
   * The component's content stays at the final size and always aligned with the upper left corner of the component.
   * This value is used by default.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  TOPLEFT_EFFECT = 0,

  /**
   * While maintaining its aspect ratio in the final state, the component's content is scaled to cover the component's
   * entire content box. It is always aligned with the center of the component, so that its middle part is displayed.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  RESIZE_COVER_EFFECT = 1
}

/**
 * Configures the [enableNativeMediaPlayer]{@link WebAttribute#enableNativeMediaPlayer} API for the app to take over web
 * page media playback, supporting whether to enable it and whether to override web page content. It is suitable for
 * scenarios where custom media playback behavior is required, improving media playback integration and user experience.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface NativeMediaPlayerConfig {
  /**
   * Whether to enable the app to take over web media playback.
   *
   * The value **true** indicates that the app takes over web media playback, and **false** indicates that this feature
   * is disabled.
   *
   * Default value: **false**
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enable: boolean;

  /**
   * Whether the player screen of the app-taken-over web video overlays the web content after the app takes over web
   * media playback.
   *
   * The value **true** indicates that the video layer level is changed to overlay the web content, and **false**
   * indicates that the original layer level is maintained and the video is embedded in the web page.
   *
   * Default value: **false**
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  shouldOverlay: boolean;
}

/**
 * Defines a callback invoked when the rendering process does not respond.
 *
 * @param { RenderProcessNotRespondingData } data - Detailed information about the unresponsive rendering process.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 12 dynamic
 */
type OnRenderProcessNotRespondingCallback = (data : RenderProcessNotRespondingData) => void;

/**
 * Defines a callback invoked when the rendering process transitions back to a normal operating state from an
 * unresponsive state.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 12 dynamic
 */
type OnRenderProcessRespondingCallback = () => void;

/**
 * Defines a callback invoked when the **viewport-fit** configuration in the web page's **\<meta>** tag changes.
 *
 * @param { ViewportFit } viewportFit - Viewport type for **viewport-fit** in the web page **<meta>** tag.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
type OnViewportFitChangedCallback = (viewportFit: ViewportFit) => void;

/**
 * Defines a callback invoked when ads are blocked on the web page.
 *
 * @param { AdsBlockedDetails } details - Detailed information about the blocked ads when ads are blocked.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
type OnAdsBlockedCallback = (details: AdsBlockedDetails) => void;

/**
 * Provides detailed information about the blocked ads when ads are blocked.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface AdsBlockedDetails {
  /**
   * URL of the page where ads are blocked.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;

  /**
   * URLs or dompaths of the blocked ads. If multiple ads have the same URLs, duplicate elements may exist.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  adsBlocked: Array<string>;
}

/**
 * Return value of the callback that intercepts the soft keyboard started from editable elements on the web page,
 * including the keyboard type and custom keyboard. It is suitable for scenarios where controlling soft keyboard
 * behavior is required.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface WebKeyboardOptions {
  /**
   * Whether to use the system's default soft keyboard.
   *
   * The value **true** means to use the system's default soft keyboard, and **false** means the opposite.
   *
   * Default value: **true**.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  useSystemKeyboard: boolean;

  /**
   * Type of the **Enter** key on the system soft keyboard. For details about the value range, see
   * [EnterKeyType]{@link @ohos.inputMethod:inputMethod.EnterKeyType}. This parameter is optional and the default value
   * is **UNSPECIFIED**. This parameter is valid only when **useSystemKeyboard** is set to **true** and **enterKeyType**
   * is set to a valid value.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enterKeyType?: number;

  /**
   * Builder of a custom keyboard. This parameter is required when **useSystemKeyboard** is set to **false**. After it
   * is set, the **Web** component starts the custom keyboard as configured.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  customKeyboard?: CustomBuilder;
}

/**
 * Defines the URL regular expression rule.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @crossplatform [since 26.1.0]
 * @since 23 dynamic
 */
declare interface UrlRegexRule {
  /**
   * Exact match of the second-level domain. For example, the second-level domain name of "https://www.example.com" is
   * **example.com**, and that of "https://www.example.com.cn" is **example.com.cn**. If the URL does not have a second-
   * level domain name, the value is empty.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @crossplatform [since 26.1.0]
   * @since 23 dynamic
   */
  secondLevelDomain : string;
  /**
   * URL regular expression. URL regular expression matching is performed only after **secondLevelDomain** is matched
   * successfully.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @crossplatform [since 26.1.0]
   * @since 23 dynamic
   */
  rule : string;
}

/**
 * WebKeyboardController is a controller class provided by ArkWeb for controlling the custom keyboard behavior of the
 * Web component. When an input field on a web page needs to display a keyboard, developers can intercept the mounting
 * of the system default keyboard through the [onInterceptKeyboardAttach]{@link WebAttribute#onInterceptKeyboardAttach}
 * event, and use WebKeyboardController to perform operations such as inserting characters, forward/backward deletion,
 * sending function keys like Enter, and closing the custom keyboard on the currently focused web input field. This
 * class is suitable for apps that need to implement custom secure keyboards, emoji keyboards, handwriting keyboards, or
 * business-specific input panels for web scenarios, enabling developers to fully take over the keyboard input logic of
 * web input fields.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare class WebKeyboardController {
  /**
   * Constructs a **WebKeyboardController** API.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  constructor();

  /**
   * Inserts characters into the **Web** component text box.
   *
   * @param { string } text - Text inserted into the web input box at the current cursor position. If there is selected
   *     text, it is replaced with this text. An input event is triggered. The cursor moves to the end of the inserted
   *     text.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  insertText(text: string): void;

  /**
   * Deletes a specified length of characters before the cursor.
   *
   * @param { number } length - Deletes a specified length of characters before the cursor.
   *     <br>Value range: [-2147483648, 2147483647]. When the parameter value is greater than the character length, all
   *     characters before the cursor are deleted by default. When the parameter value is negative, no deletion is
   *     performed.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  deleteForward(length: number): void;

  /**
   * Deletes a specified length of characters after the cursor.
   *
   * @param { number } length - Number of characters to delete after the cursor.
   *     <br>Value range: [-2147483648, 2147483647]. If the parameter value is greater than the character length, all
   *     characters after the cursor are deleted by default. If the parameter value is negative, no deletion is
   *     performed.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  deleteBackward(length: number): void;

  /**
   * Inserts a function key. Currently, only the Enter key type is supported. For details about the value, see
   * [EnterKeyType]{@link @ohos.inputMethod:inputMethod.EnterKeyType}.
   *
   * @param { number } key - Type of the function key. Only the Enter key is supported.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  sendFunctionKey(key: number): void;

  /**
   * Closes this custom keyboard.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  close(): void;
}

/**
 * Input parameters of the callback used to intercept the soft keyboard started from editable elements on a web page,
 * including [WebKeyboardController]{@link ./web} and the attributes of the editable element. It is suitable for
 * scenarios where custom keyboard interaction is required, improving input experience customization and flexibility.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface WebKeyboardCallbackInfo {
  /**
   * Controller used to control the input, deletion, and closure of the custom keyboard.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  controller: WebKeyboardController;

  /**
   * Attribute of the web page element that triggers the display of the soft keyboard.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  attributes: Record<string, string>;
}

/**
 * Defines a callback to intercept the soft keyboard initiated from editable elements on a web page. This event is
 * typically called when the **\<input>** tag on the web page is clicked.
 *
 * @param { WebKeyboardCallbackInfo } keyboardCallbackInfo - Input parameter of the callback used to intercept the soft
 *     keyboard initiated from editable elements on a web page, including [WebKeyboardController]{@link ./web} and
 *     editable element attributes.
 * @returns { WebKeyboardOptions } [WebKeyboardOptions]{@link WebKeyboardOptions} instance, which is used to determine
 *     which type of soft keyboard to start by the ArkWeb kernel.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
type WebKeyboardCallback = (keyboardCallbackInfo: WebKeyboardCallbackInfo) => WebKeyboardOptions;

/**
 * Enumerates the information levels of the console messages.
 *
 * > **NOTE**
 * >
 * > On the HTML5 side, calling console.log or console.info both correspond to the console message level of
 * > MessageLevel.Info.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum MessageLevel {
  /**
   * Debug level.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Debug = 1,

  /**
   * Information level.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Info = 2,

  /**
   * Warning level.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Warn = 3,

  /**
   * Error level.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Error = 4,

  /**
   * Log level.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @deprecated since 26.0.0
   */
  Log = 5
}

/**
 * Enumerates the mixed content modes.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum MixedMode {
  /**
   * Loose mode: HTTP and HTTPS hybrid content can be loaded. This means that all insecure content can be loaded.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  All = 0,

  /**
   * Compatible mode. Allows some HTTP content to be loaded on an HTTPS page.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Compatible = 1,

  /**
   * Strict mode: HTTP and HTTPS hybrid content cannot be loaded.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  None = 2
}

/**
 * Defines a callback invoked by a website safe browsing check.
 *
 * @param { ThreatType } threatType - Website threat type.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
type OnSafeBrowsingCheckResultCallback = (threatType: ThreatType) => void;

/**
 * Enumerates the test result types of the click event.
 *
 * > **NOTE**
 * >
 * > Supported since API version 9 and deprecated since API version 21. You are advised to use
 * > [WebHitTestType]{@link @ohos.web.webview:webview.WebHitTestType} instead.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 8 dynamiconly
 * @deprecated since 21
 * @useinstead @ohos.web.webview:webview.WebHitTestType
 */
declare enum HitTestType {
  /**
   * Editable area.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 21
   * @useinstead @ohos.web.webview:webview.WebHitTestType.EditText
   */
  EditText = 0,

  /**
   * Email address.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 21
   * @useinstead @ohos.web.webview:webview.WebHitTestType.Email
   */
  Email = 1,

  /**
   * Hyperlink whose **src** is **http**.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 21
   * @useinstead @ohos.web.webview:webview.WebHitTestType.HttpAnchor
   */
  HttpAnchor = 2,

  /**
   * Image with a hyperlink, where **src** is **http**.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 21
   * @useinstead @ohos.web.webview:webview.WebHitTestType.HttpAnchorImg
   */
  HttpAnchorImg = 3,

  /**
   * HTML::img tag.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 21
   * @useinstead @ohos.web.webview:webview.WebHitTestType.Img
   */
  Img = 4,

  /**
   * Geographical address.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 21
   * @useinstead @ohos.web.webview:webview.WebHitTestType.Map
   */
  Map = 5,

  /**
   * Phone number.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 21
   * @useinstead @ohos.web.webview:webview.WebHitTestType.Phone
   */
  Phone = 6,

  /**
   * Unknown content.
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
 * Enumerates the cache modes.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum CacheMode {
  /**
   * The cache that has not expired is preferentially used to load resources. If the cache is invalid or no cache is
   * available, resources are obtained from the Internet.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Default = 0,

  /**
   * Preferentially loads resources from the cache (including expired ones), and fetches them from the network when no
   * cache is available.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  None = 1,

  /**
   * The cache is not used to load the resources. All resources are forcibly obtained from the Internet.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Online = 2,

  /**
   * The local cache alone is used to load the resources.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Only = 3
}

/**
 * Enumerates whether to enable overscroll mode.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 26.1.0]
 * @atomicservice
 * @since 11 dynamic
 */
declare enum OverScrollMode {
  /**
   * Web overscroll mode disabled. Applicable to pages that do not require additional scrolling effects, such as
   * scenarios where the content height matches the container height.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice
   * @since 11 dynamic
   */
  NEVER = 0,

  /**
   * Web overscroll mode enabled. Applicable to pages that require enhanced scrolling feedback, such as list pages or
   * scenarios that require clear scroll boundary indication.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice
   * @since 11 dynamic
   */
  ALWAYS = 1
}

/**
 * Enumerates whether the **Web** component loses focus when the soft keyboard is hidden.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 14 dynamic
 */
declare enum BlurOnKeyboardHideMode {
  /**
   * The blur function of the Web component is disabled when the soft keyboard is hidden. When the user manually hides
   * the soft keyboard, the focus remains on the text box. This is applicable to scenarios where the input focus needs
   * to be retained.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 14 dynamic
   */
  SILENT = 0,

  /**
   * The blur function of the Web component is enabled when the soft keyboard is hidden. When the user manually hides
   * the soft keyboard, the focus moves from the text box to the body of the Web component, and the text box loses
   * focus. This is applicable to scenarios where standard input box behavior is required.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 14 dynamic
   */
  BLUR = 1
}

/**
 * Configures the web dark mode, which controls the dark theme display of web content and helps developers improve
 * visual experience and readability based on user preferences and system themes.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 26.1.0]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum WebDarkMode {
  /**
   * The web dark mode is disabled.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Off = 0,

  /**
   * The web dark mode is enabled.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  On = 1,

  /**
   * The Web dark mode follows the system. This mode is applicable to scenarios where the Web component theme needs to
   * stay consistent with the system. It is recommended to use this mode to provide a consistent user experience.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Auto = 2
}

/**
 * Enumerates the web screen capture modes.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum WebCaptureMode {
  /**
   * Home screen capture mode.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  HOME_SCREEN = 0
}

/**
 * Enumerates the website threat types.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare enum ThreatType {
  /**
   * Illegal website.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  THREAT_ILLEGAL = 0,

  /**
   * Fraudulent website.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  THREAT_FRAUD = 1,

  /**
   * Website that poses security risks.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  THREAT_RISK = 2,

  /**
   * Website suspected to contain unsafe content.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  THREAT_WARNING = 3,

  /**
   * Website that passes the security check and no risk is found.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  THREAT_NONE = 4,

  /**
   * Website that does not perform security check.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  THREAT_UNPROCESSED = 5
}

/**
 * Configures the media policy of the **Web** component, including the audio playback continuation validity period,
 * audio exclusive mode, and more. It is suitable for scenarios where audio playback experience optimization and multi-
 * instance audio management are required, improving media playback stability and user experience.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface WebMediaOptions {
  /**
   * Validity period during which Web audio and video paused by other apps can automatically resume playback, in
   * seconds. Value range: [-2147483648, 2147483647]. The value **0** means no automatic resumption; a value greater
   * than **0** means an attempt to resume within the specified period; a value less than **0** means an attempt to
   * resume within an unlimited period. Due to approximation, this validity period may have an error within one second.
   *
   * **NOTE**
   *
   * After an HLS video is interrupted, it will automatically resume when returning to the foreground, regardless of
   * this time setting.
   *
   * Default value: **0**.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  resumeInterval?: number;

  /**
   * Whether the audio of multiple Web instances in an app is exclusive.
   *
   * The value **true** means the audio of multiple Web instances in an app is exclusive, and **false** means the
   * opposite.
   *
   * Default value: **true**.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  audioExclusive?: boolean;

  /**
   * Web audio type in the app. The default value corresponds to STREAM_USAGE_MUSIC in the system audio stream type
   * [StreamUsage]{@link @ohos.multimedia.audio:audio.StreamUsage}. Used to change the mapping between the component
   * audio type and the system audio type, affecting the ArkWeb audio focus policy.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  audioSessionType?: AudioSessionType;
}

/**
 * Provides the web screen capture configuration options, including the capture mode. It is suitable for scenarios where
 * custom web page screen recording behavior is required, improving screen recording flexibility and user experience.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface ScreenCaptureConfig {
  /**
   * Web screen capture mode.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  captureMode: WebCaptureMode;
}

/**
 * Implements the **FullScreenExitHandler** object to notify you that the **Web** component exits full screen mode. For
 * details about the sample code, see [onFullScreenEnter]{@link WebAttribute#onFullScreenEnter}.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class FullScreenExitHandler {
  /**
   * Constructs a **FullScreenExitHandler** API.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor();

  /**
   * Exits full screen mode.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  exitFullScreen(): void;
}

/**
 * Provides the callback information for the **Web** component to enter the full-screen mode, including the video size
 * and exit handler. It is suitable for scenarios where handling full-screen video is required, improving video playback
 * immersive experience and controllability.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 18]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface FullScreenEnterEvent {
  /**
   * Function handle for exiting full screen mode.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  handler: FullScreenExitHandler;

  /**
   * Video width, in px. If the element that enters fulls screen mode is a **<video>** element, the value represents its
   * width; if the element that enters fulls screen mode contains a **<video>** element, the value represents the width
   * of the first sub-video element; in other cases, the value is **0**.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  videoWidth?: number;

  /**
   * Video height, in px. If the element that enters fulls screen mode is a **<video>** element, the value represents
   * its height; if the element that enters fulls screen mode contains a **<video>** element, the value represents the
   * height of the first sub-video element; in other cases, the value is **0**.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  videoHeight?: number;
}

/**
 * Defines a callback invoked when the **Web** component enters full screen mode.
 *
 * @param { FullScreenEnterEvent } event - Callback event for the **Web** component to enter full screen mode.
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 18]
 * @atomicservice
 * @since 12 dynamic
 */
type OnFullScreenEnterCallback = (event: FullScreenEnterEvent) => void;

/**
 * This callback is triggered when a same-layer tag is clicked using the mouse or touchpad.
 *
 * @param { NativeEmbedMouseInfo } event - Detailed information about the mouse or touchpad click or long press on the
 *     same-layer tag.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
type MouseInfoCallback = (event: NativeEmbedMouseInfo) => void;

/**
 * Enumerates the reasons why the rendering process exits.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 26.1.0]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum RenderExitReason {
  /**
   * The rendering process exited abnormally. Possible causes include rendering process startup timeout, system
   * reclaiming old rendering processes due to reaching the process quantity limit, and simultaneous closing of multiple
   * tabs.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  ProcessAbnormalTermination = 0,

  /**
   * The rendering process receives a SIGKILL message or is manually terminated.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  ProcessWasKilled = 1,

  /**
   * The rendering process crashes due to segmentation or other errors.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  ProcessCrashed = 2,

  /**
   * The program memory is insufficient.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  ProcessOom = 3,

  /**
   * Other reasons, such as rendering process spawning failure.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  ProcessExitUnknown = 4
}

/**
 * Defines a callback invoked when the context menu is hidden.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
type OnContextMenuHideCallback = () => void;

/**
 * Enumerates the error codes returned by **onSslErrorEventReceive** API.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 23]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum SslError {
  /**
   * Minor error.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Invalid = 0,

  /**
   * The host name does not match.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  HostMismatch = 1,

  /**
   * The certificate has an invalid date.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  DateInvalid = 2,

  /**
   * The certificate issuer is not trusted.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Untrusted = 3
}

/**
 * Defines the file selector mode, which controls how the file selector is opened and behaves, helping developers
 * implement file operation scenarios such as file upload.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum FileSelectorMode {
  /**
   * Open and upload a file.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  FileOpenMode = 0,

  /**
   * Open and upload multiple files.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  FileOpenMultipleMode = 1,

  /**
   * Open and upload a folder.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  FileOpenFolderMode = 2,

  /**
   * Save a file.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  FileSaveMode = 3
}

/**
 * Configures the web layout mode, which controls the page layout of web content and helps developers optimize web page
 * adaptability and user experience based on screen size and display requirements.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 26.1.0]
 * @atomicservice
 * @since 11 dynamic
 */
declare enum WebLayoutMode {
  /**
   * Web layout follows the system. This is suitable for traditional web page layout scenarios, keeping consistent with
   * the default system behavior.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice
   * @since 11 dynamic
   */
  NONE = 0,

  /**
   * Web adaptive layout based on page size. This is suitable for scenarios where the layout needs to automatically
   * adjust based on the screen size, and is recommended for mobile web page optimization.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice
   * @since 11 dynamic
   */
  FIT_CONTENT = 1
}

/**
 * Enumerates the reasons why the rendering process does not respond.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 12 dynamic
 */
declare enum RenderProcessNotRespondingReason {
  /**
   * The input event response sent to the rendering process times out.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  INPUT_TIMEOUT = 0,

  /**
   * The navigation for loading a new web page times out.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  NAVIGATION_COMMIT_TIMEOUT = 1
}

/**
 * FileSelectorParam is a file selector parameter class in the ArkWeb component, used to obtain parameter information
 * when a file selection request is triggered by `<input type="file">` in a web page, including the file selection mode,
 * file filtering type, MIME type, suggested file name, and default starting path. It helps developers efficiently build
 * custom file selectors that comply with HTML specifications.
 *
 * When a web page initiates a file selection request, developers use FileSelectorParam to obtain the complete parameter
 * information passed from the frontend, and build a custom file selector that matches the frontend requirements based
 * on this information, ensuring that the file selection mode, type filtering, naming, and other behaviors comply with
 * HTML specifications.
 *
 * Used in scenarios where the Web component needs to custom-handle file upload requests. Register the
 * `onShowFileSelector` callback to intercept file selection requests; obtain the FileSelectorParam instance from the
 * `fileSelector` property of the callback event; read the parameters and build a corresponding system file selector (
 * such as DocumentViewPicker, PhotoViewPicker, etc.); return the selection result to the Web component through
 * FileSelectorResult.
 *
 * For sample code, see [onShowFileSelector]{@link WebAttribute#onShowFileSelector}.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class FileSelectorParam {
  /**
   * Constructs a **FileSelectorParam**.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor();

  /**
   * Obtains the title of this file selector.
   *
   * @returns { string } Title string of the file selector, which indicates the title text displayed on the UI for the
   *     current file selector.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getTitle(): string;

  /**
   * Obtains the mode of the file selector.
   *
   * @returns { FileSelectorMode } Mode of the file selector.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getMode(): FileSelectorMode;

  /**
   * Obtains the file filtering type.
   *
   * @returns { Array<string> } Array of file filter types, containing type information used to limit the selectable
   *     file range in the file selector. The elements are extensions (such as '.png'), corresponding to the HTML accept
   *     attribute.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getAcceptType(): Array<string>;

  /**
   * Checks whether multimedia capabilities are invoked.
   *
   * @returns { boolean } Whether to invoke multimedia capabilities.
   *     <br>The value **true** means that multimedia devices such as the camera or microphone need to be called to
   *     obtain files (for example, taking a photo or recording audio), and **false** means that only existing files are
   *     selected from the storage device. Corresponds to the **capture** attribute of the HTML input tag.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  isCapture(): boolean;

  /**
   * Obtains the MIME type of a file.
   *
   * @returns { Array<string> } Value of the accept attribute of the HTML input element, containing the MIME types and
   *     file extensions allowed for selection.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 18 dynamic
   */
  getMimeTypes(): Array<string>;

  /**
   * Obtains the suggested file name. Corresponds to `suggestedName` in the HTML
   * [option](docroot://web/web-file-upload.md#custom-handling-of-file-requests-initiated-by-js-interface). If the
   * frontend does not set suggestedName, an empty string is returned. Developers can use this return value as the
   * default file name when building a file selector, and use it together with
   * [getDefaultPath]{@link FileSelectorParam#getDefaultPath} to preset the complete file path and name.
   *
   * @returns { string } String that suggests the default file name for the file selector.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  getSuggestedName(): string;

  /**
   * Obtains the default path of the file selector, which corresponds to **startIn** in HTML's
   * [option](docroot://web/web-file-upload.md#customizing-the-file-request-initiated-by-the-javascript-api).
   *
   * @returns { string } Default starting path.
   *     <br>When the frontend startIn is set to the public directories `downloads` or `pictures`, note that they should
   *     be converted to `download` and `images` in the OpenHarmony system, respectively. For details, see
   *     [Obtaining and Using Public Directories](docroot://file-management/request-dir-permission.md).
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  getDefaultPath(): string;

  /**
   * Obtains the optional description of each group of allowed file types. Corresponds to `description` in the HTML
   * [option](docroot://web/web-file-upload.md#custom-handling-of-file-requests-initiated-by-js-interface). The returned
   * description array corresponds one-to-one with the file type groups returned by getAcceptableFileTypes. Developers
   * can use these descriptions as the display text for each file type group when building a file selector, helping
   * users understand the selectable file types. If the frontend does not set description, an empty string is returned.
   *
   * @returns { Array<string> } Array of description strings for file types, containing optional description text for
   *     each group of file types.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  getDescriptions(): Array<string>;

  /**
   * Obtains whether the file selector excludes the option (*\/*), that is, all files. Corresponds to
   * `excludeAcceptAllOption` in the HTML
   * [option](docroot://web/web-file-upload.md#custom-handling-of-file-requests-initiated-by-js-interface).
   *
   * @returns { boolean } Whether to exclude the "All file types" option.
   *     <br>The value **true** means to exclude (the "All file types" option is not included), and **false** means to
   *     include (the developer must ensure that the "All file types" option is included in the file selector).
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  isAcceptAllOptionExcluded(): boolean;

  /**
   * Obtains the file type information. Corresponds to `types` in the HTML
   * [option](docroot://web/web-file-upload.md#custom-handling-of-file-requests-initiated-by-js-interface). The return
   * value is a two-dimensional array, where each sub-array represents a group of allowed file types. Developers should
   * use this return value to set file type filtering rules when building a file selector, ensuring that users can only
   * select files that meet the frontend requirements. The difference between this parameter and getAcceptType and
   * getMimeTypes is that types supports more fine-grained file type control, allowing grouping by MIME type or file
   * extension.
   *
   * @returns { Array<Array<AcceptableFileType>> } File type information, which is a two-dimensional array structure
   *     containing detailed information about multiple groups of optional file types. Corresponds to the types
   *     attribute of the HTML option.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  getAcceptableFileTypes(): Array<Array<AcceptableFileType>>;
}

/**
 * JsResult is a result handling object returned by the Web component when processing JavaScript dialog box events. It
 * is used in scenarios where developers intercept and customize the handling of dialog boxes such as `window.alert`,
 * `window.confirm`, and `window.prompt`. In event callbacks such as [onAlert]{@link WebAttribute#onAlert},
 * [onConfirm]{@link WebAttribute#onConfirm}, or [onPrompt]{@link WebAttribute#onPrompt}, developers can use this object
 * to feed back the user's operation results, such as confirmation, cancellation, or input content, to the Web
 * component, thereby controlling the subsequent behavior of the dialog box.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class JsResult {
  /**
   * Constructor of JsResult. Used to handle JavaScript dialog box events.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor();

  /**
   * Notifies the **Web** component of the user's cancel operation in the dialog box.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  handleCancel(): void;

  /**
   * Notifies the **Web** component of the user's confirm operation in the dialog box.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  handleConfirm(): void;

  /**
   * Notifies the Web component that the user has confirmed the dialog box operation and passes the dialog box content.
   *
   * @param { string } result - User input in the dialog box.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  handlePromptConfirm(result: string): void;
}

/**
 * The FileSelectorResult class in the ArkWeb component is used to notify the Web component of file selection results.
 * It supports custom file selection behavior at the app layer and a unified file selection result return mechanism,
 * making it suitable for scenarios where the app needs to take over the file selection process, such as returning
 * selected file results to a web page after launching the system file picker, gallery picker, or camera picker. When an
 * HTML page in the Web component initiates a file selection request through `<input type="file">` or similar means, the
 * app can use FileSelectorResult to return the user-selected file list to the Web component, completing the file
 * selection process. This class is primarily used in the `onShowFileSelector` event callback, enabling the app to
 * flexibly control file selection interactions and improve user experience consistency.
 *
 * For details about the sample code, see [onShowFileSelector]{@link WebAttribute#onShowFileSelector}.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class FileSelectorResult {
  /**
   * Constructs a **FileSelectorResult**.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor();

  /**
   * Notifies the Web component of the user-selected files through the passed file list (fileList), completing the file
   * selection process. The Web component can use the passed file list for subsequent processing.
   *
   * @param { Array<string> } fileList - Array of file URI strings, used to pass the file paths selected by the user to
   *     the Web component.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  handleFileList(fileList: Array<string>): void;
}

/**
 * HttpAuthHandler is a handler class used by the Web component to process HTTP authentication requests. When the server
 * returns 401 Unauthorized to request authentication, the Web component obtains an HttpAuthHandler instance through the
 * onHttpAuthRequest event callback, and the app decides whether to provide authentication credentials. For sample code,
 * see [onHttpAuthRequest]{@link WebAttribute#onHttpAuthRequest}.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class HttpAuthHandler {
  /**
   * Constructs an **HttpAuthHandler**.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor();

  /**
   * Performs HTTP authentication with the user name and password provided by the user.
   *
   * @param { string } userName - HTTP authentication user name, which must be a non-empty string.
   * @param { string } password - HTTP authentication password, which must be a non-empty string.
   * @returns { boolean } Returns **true** if authentication succeeds; returns **false** otherwise.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  confirm(userName: string, password: string): boolean;

  /**
   * Cancels HTTP authentication as requested by the user.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  cancel(): void;

  /**
   * Checks whether the credentials stored for the current host are applicable. The credentials are not applicable if
   * they have been rejected by the server in the current request.
   *
   * @returns { boolean } true if the stored credentials are applicable; false otherwise.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  isHttpAuthInfoSaved(): boolean;
}

/**
 * SslErrorHandler is a class in the Web component for handling SSL certificate verification errors. When an SSL
 * certificate error (such as certificate expiration, hostname mismatch, or untrusted CA) is encountered while loading a
 * secure page, the app can obtain an SslErrorHandler instance through the onSslErrorEvent callback and decide whether
 * to continue loading or cancel navigation. For sample code, see the
 * [onSslErrorEvent]{@link WebAttribute#onSslErrorEvent} event.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 23]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class SslErrorHandler {
  /**
   * Constructs a **SslErrorHandler** object.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor();

  /**
   * Ignores the SSL certificate verification error and continues loading the page.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  handleConfirm(): void;

  /**
   * Notifies the Web component to cancel this request and stops the current SSL certificate verification process.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  handleCancel(): void;

  /**
   * Cancels this request and determines whether to stop loading based on the **abortLoading** parameter.
   *
   * @param { boolean } abortLoading - Whether to stop loading the page after canceling the request.
   *     <br>The value **true** indicates that the page stops loading, and **false** indicates that the page continues
   *     loading.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  handleCancel(abortLoading: boolean): void;
}

/**
 * ClientAuthenticationHandler is a class in the **Web** component that handles SSL client certificate authentication
 * requests. When a server requests a client certificate for TLS mutual authentication, this handler is provided to the
 * app through the `onClientAuthenticationRequest` event callback, allowing the app to select appropriate certificate
 * credentials for response. For sample code, see
 * [onClientAuthenticationRequest]{@link WebAttribute#onClientAuthenticationRequest}.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class ClientAuthenticationHandler {
  /**
   * Constructs a **ClientAuthenticationHandler**.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor();

  /**
   * Uses the specified private key and client certificate chain.
   *
   * @param { string } priKeyFile - Full path for storing the private key file.
   * @param { string } certChainFile - Full path for storing the certificate chain file.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  confirm(priKeyFile: string, certChainFile: string): void;

  /**
   * Instructs the **Web** component to use the specified credentials (obtained from the certificate management module).
   *
   * @param { string } authUri - Key value of the credentials.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  confirm(authUri: string): void;

  /**
   * Instructs the **Web** component to use the specified credential and credential type obtained from the certificate
   * management module.
   *
   * @param { string } identity - Unique ID of a credential.
   * @param { CredentialType | string } credentialTypeOrCertChainFile - Credential type when the type is CredentialType,
   *     or certificate chain file path when the type is string.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  confirm(identity: string, credentialTypeOrCertChainFile: CredentialType | string): void;

  /**
   * Cancel this certificate request.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  cancel(): void;

  /**
   * Ignores this request.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  ignore(): void;
}

/**
 * Defines the types of protected resources that the Web component needs to access. It is used to control access
 * permissions for sensitive resources such as MIDI, camera, microphone, and sensors, helping developers provide rich
 * web functionality while protecting user privacy.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum ProtectedResourceType {
  /**
   * MIDI SYSEX resource.
   *
   * Currently, only permission events can be reported. MIDI devices are not yet supported.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  MidiSysex = "TYPE_MIDI_SYSEX",

  /**
   * Video capture resource, such as a camera.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  VIDEO_CAPTURE = "TYPE_VIDEO_CAPTURE",

  /**
   * Audio capture resource, such as a microphone.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  AUDIO_CAPTURE = "TYPE_AUDIO_CAPTURE",

  /**
   * Sensor resource, such as an acceleration sensor.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  SENSOR = 'TYPE_SENSOR'
}

/**
 * PermissionRequest is an object used by the **Web** component to grant or deny permission requests. When a web page
 * attempts to access protected system resources (such as camera, microphone, geolocation, etc.), the ArkWeb kernel
 * sends a permission request to the app through the [onPermissionRequest]{@link WebAttribute#onPermissionRequest} event
 * callback. The app then uses the PermissionRequest object to decide whether to grant these requests. This object is
 * applicable to scenarios where the app needs to manage web page access to sensitive resources, protect user privacy,
 * and ensure secure and controllable resource access, helping developers flexibly handle web page permission requests.
 *
 * > **NOTE**
 * >
 * > - The [grant]{@link PermissionRequest#grant}() and [deny]{@link PermissionRequest#deny}() methods are mutually
 * > exclusive. For the same PermissionRequest object, only one of them can be called.
 * >
 * > - After grant() or deny() is called, the PermissionRequest object has completed its response and cannot be called
 * > again.
 * >
 * > - A PermissionRequest object that has not been responded to by calling any method will cause the permission request
 * > to time out.
 * >
 * > - The resources parameter of the grant() method typically uses the return value of the getAccessibleResource()
 * > method.
 * >
 * > - Typical usage flow: Call getAccessibleResource() to obtain the list of requested resources, select the resources
 * > to be authorized, and then call grant() for authorization.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class PermissionRequest {
  /**
   * Constructs a **PermissionRequest** object.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor();

  /**
   * Denies the permission requested by the web page.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  deny(): void;

  /**
   * Obtains the origin of this web page.
   *
   * @returns { string } Origin of the web page that requests the permission.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getOrigin(): string;

  /**
   * Obtains the list of permission resources requested by the web page. For details about the type, see
   * [ProtectedResourceType]{@link ProtectedResourceType}.
   *
   * @returns { Array<string> } List of accessible resources requested by the web page.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getAccessibleResource(): Array<string>;

  /**
   * Grants the permission requested by the web page.
   *
   * @param { Array<string> } resources - List of permission resources granted to the web page, which must be obtained
   *     through getAccessibleResource(). For the type, see [ProtectedResourceType]{@link ProtectedResourceType}. After
   *     this parameter is passed in, the web page will obtain access to the specified resources. If an empty list is
   *     passed in, all permission requests are denied.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  grant(resources: Array<string>): void;
}

/**
 * **ScreenCaptureHandler** is a screen capture permission handling class provided by the **Web** component, used to
 * respond to screen capture requests initiated by web pages. This class is applicable to scenarios such as online
 * education, remote meetings, and screen recording where access to the user's screen content is required. It allows
 * developers to control whether to grant screen capture permission to a web page through the **grant** or **deny**
 * method, and to obtain request origin information through the **getOrigin** method. This helps developers flexibly
 * handle screen capture access requests from web pages while protecting user privacy, thereby improving app security
 * and user experience. For details about the sample code, see the
 * [onScreenCaptureRequest]{@link WebAttribute#onScreenCaptureRequest} event.
 *
 * > **NOTE**
 * >
 * > - The [grant]{@link ScreenCaptureHandler#grant}() and [deny]{@link ScreenCaptureHandler#deny}() methods are
 * > mutually exclusive. For the same request on the same **ScreenCaptureHandler** instance, only one of them can be
 * > called.
 * >
 * > - After calling one method, do not call the other method for the same request.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class ScreenCaptureHandler {
  /**
   * Constructs a **ScreenCaptureHandler** object.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  constructor();

  /**
   * Obtains the origin of the web page. This method is used to verify the trustworthiness of the request origin, or to
   * implement a whitelist mechanism to control which web pages can perform screen capture.
   *
   * @returns { string } Origin of the web page that initiates the current screen capture request.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getOrigin(): string;

  /**
   * Grants permission for the screen capture operation accessed by a web page. This method grants screen capture
   * permission based on the provided configuration parameters. After the permission is granted, the web page can
   * perform screen capture according to the configured parameters. The configuration parameters are validated to ensure
   * compliance with system security requirements. This method is called after the user agrees to the screen capture
   * request from a web page, or when automatically granting permission to trusted web pages based on business policies.
   *
   * @param { ScreenCaptureConfig } config - Screen capture configuration, which is used to set screen capture related
   *     parameters.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  grant(config: ScreenCaptureConfig): void;

  /**
   * Denies the screen capture operation initiated by a web page. This method is called when the user chooses not to
   * allow screen capture, or when screen capture needs to be blocked for security reasons. After being called, the
   * current screen capture request is terminated, and the system notifies the web page that the screen capture
   * permission has been denied. The denial does not affect subsequent new screen capture requests.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  deny(): void;
}

/**
 * Implements the **DataResubmissionHandler** object for resubmitting or canceling the web form data.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class DataResubmissionHandler {
  /**
   * Constructs a **DataResubmissionHandler** object.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor();

  /**
   * Resends the web form data.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  resend(): void;

  /**
   * Cancels the resending of web form data.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  cancel(): void;
}

/**
 * ControllerHandler is a helper class provided by ArkWeb for handling the allocation of controllers for newly created
 * Web components. When a web page requests to create a new window through methods such as `window.open`, and the Web
 * component has enabled the [multiWindowAccess]{@link WebAttribute#multiWindowAccess} capability, the system provides
 * the ControllerHandler object to the app through the [onWindowNew]{@link WebAttribute#onWindowNew} event. Developers
 * need to call its [setWebController]{@link ControllerHandler#setWebController} method to set a valid
 * [WebviewController]{@link @ohos.web.webview:webview.WebviewController} object for the new window, associating the new
 * window with the Web component actually created on the page. The web kernel blocks the render process while waiting
 * for the setWebController call. If the app decides not to create a new window, it must call `setWebController(null)`
 * to notify the web kernel; otherwise, the render process will remain blocked. Typical usage scenarios include opening
 * a new web window in a custom dialog box, a new page, or a split screen, where the app needs to explicitly manage the
 * URL display and security isolation of the new window.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 26.1.0]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class ControllerHandler {
  /**
   * Constructs a **ControllerHandler** API.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor();

  /**
   * Sets the WebviewController object for the newly created Web component. If the app decides not to create a new
   * window, this parameter must be set to null to notify the web kernel; otherwise, the render process will be blocked.
   *
   * @param { WebviewController } controller - **WebviewController** object of the **Web** component. If opening a new
   *     window is not needed, set it to **null**.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  setWebController(controller: WebviewController): void;
}

/**
 * Enumerates the event source types that trigger the context menu.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum ContextMenuSourceType {
  /**
   * Other event sources.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  None = 0,

  /**
   * Mouse event.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Mouse = 1,

  /**
   * Long press event.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  LongPress = 2
}

/**
 * Enumerates the media types that trigger the context menu.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum ContextMenuMediaType {
  /**
   * Other non-image media types.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  None = 0,

  /**
   * Image.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Image = 1
}

/**
 * Enumerates the media types that trigger the context menu (enhanced type obtaining capability).
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare enum ContextMenuDataMediaType {
  /**
   * Default value, indicating that the current context menu is not associated with any media type (for example, right-
   * click text or blank area).
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  NONE = 0,

  /**
   * Image.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  IMAGE = 1,

  /**
   * Video.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  VIDEO = 2,

  /**
   * Audio.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  AUDIO = 3,

  /**
   * Canvas.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  CANVAS = 4
}

/**
 * Enumerates the input field types.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum ContextMenuInputFieldType {
  /**
   * Non-input field, referring to non-editable web elements such as buttons, divs, spans, and other common HTML
   * elements.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  None = 0,

  /**
   * Plain text field, such as the text, search, or email field.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  PlainText = 1,

  /**
   * Password field.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Password = 2,

  /**
   * Number field.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Number = 3,

  /**
   * Phone number field.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Telephone = 4,

  /**
   * Field of any other type.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Other = 5
}

/**
 * Enumerates the lifecycles of the same-layer tag. When a same-layer tag exists on the loaded page, **CREATE** is
 * triggered. When a same-layer tag is moved or is enlarged, **UPDATE** is triggered. When the page exits, **DESTROY**
 * is triggered.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare enum NativeEmbedStatus {
  /**
   * The same-layer tag is created.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  CREATE = 0,

  /**
   * The same-layer tag is updated.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  UPDATE = 1,

  /**
   * The same-layer tag is destroyed.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  DESTROY = 2,

  /**
   * The same-layer tag enters BFCache.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  ENTER_BFCACHE = 3,

  /**
   * The same-layer tag leaves BFCache.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  LEAVE_BFCACHE = 4
}

/**
 * Enumerates the context menu edit state flags. This enum can be used in bitwise OR mode. For example, to support
 * **CAN_CUT**, **CAN_COPY**, and **CAN_SELECT_ALL** at the same time, use **CAN_CUT | CAN_COPY | CAN_SELECT_ALL** or
 * **11**.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum ContextMenuEditStateFlags {
  /**
   * Editing is not allowed.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  NONE = 0,

  /**
   * Cutting is supported.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  CAN_CUT = 1 << 0,

  /**
   * Copying is supported.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  CAN_COPY = 1 << 1,

  /**
   * Pasting is supported.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  CAN_PASTE = 1 << 2,

  /**
   * Selecting all is supported.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  CAN_SELECT_ALL = 1 << 3
}

/**
 * Enumerates the navigation types.
 *
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
   * Navigation to a new history entry from the main document.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  MAIN_FRAME_NEW_ENTRY = 1,

  /**
   * Navigation to an existing history entry from the main document.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  MAIN_FRAME_EXISTING_ENTRY = 2,

  /**
   * User-triggered navigation from a subdocument.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  NAVIGATION_TYPE_NEW_SUBFRAME = 4,

  /**
   * Non-user-triggered navigation from a subdocument.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  NAVIGATION_TYPE_AUTO_SUBFRAME = 5
}

/**
 * Enumerates the rendering modes of the **Web** component. By default, the asynchronous rendering mode is used.
 *
 * The asynchronous rendering mode is recommended because it has better performance and lower power consumption.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare enum RenderMode {
  /**
   * Asynchronous rendering mode of the Web component. The ArkWeb component acts as a graphics surface node and
   * independently outputs display. The maximum height of the Web component does not exceed 7,680 px (physical pixels).
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  ASYNC_RENDER = 0,

  /**
   * Synchronous rendering mode of the Web component. The ArkWeb component acts as a graphics canvas node and outputs
   * display together with system components, allowing longer Web component content to be rendered. The maximum height
   * of the Web component does not exceed 500,000 px (physical pixels).
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  SYNC_RENDER = 1
}

/**
 * Enumerates the viewport types available for **viewport-fit** in the web page **\<meta>** tag.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare enum ViewportFit {
  /**
   * Default value. The entire web page is visible. This is suitable for scenarios where the web page needs to be fully
   * displayed within the visible area, and is recommended for most common web pages.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  AUTO = 0,

  /**
   * The initial layout viewport and visual viewport are within the largest rectangle that fits the device display. This
   * is suitable for scenarios where content must be completely within the safe area, such as preventing important
   * content from being obscured by a notch.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  CONTAINS = 1,

  /**
   * The initial layout viewport and visual viewport are within the bounding rectangle of the device's physical screen.
   * This is suitable for scenarios where web page content needs to extend to the screen edges, such as full-screen
   * background effects or immersive experiences.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  COVER = 2
}

/**
 * WebContextMenuParam is a parameter class in the ArkWeb component used to carry context menu information displayed
 * when a user long presses a web element or right-clicks. As the data carrier for the **onContextMenuShow** event
 * callback, it encapsulates key information such as the menu popup position, link address, media type, selected text,
 * and edit state.
 *
 * When customizing the context menu of a Web component, use WebContextMenuParam to obtain detailed information about
 * the web element at the long press/right-click position (such as the link URL, image content, media type, input field
 * type, and edit state), determine the user operation scenario, and decide whether to intercept the default menu and
 * build custom menu items.
 *
 * When customizing the long press or right-click menu of a Web component (such as replacing the default menu, providing
 * differentiated menu items based on element types, or previewing images), use WebContextMenuParam in the
 * **onContextMenuShow** event callback to obtain context information.
 *
 * For sample code, see [onContextMenuShow]{@link WebAttribute#onContextMenuShow}.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class WebContextMenuParam {
  /**
   * Constructs a **WebContextMenuParam** object.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor();

  /**
   * X coordinate of the context menu, which is the horizontal distance relative to the upper left corner of the Web
   * component.
   *
   * @returns { number } Non-negative integer if successful; -1 otherwise.
   *     <br>Unit: px (physical pixel).
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  x(): number;

  /**
   * Y coordinate of the context menu, which is the vertical distance relative to the upper left corner of the Web
   * component.
   *
   * @returns { number } Non-negative integer when obtained successfully, and -1 otherwise.
   *     <br>Unit: px (physical pixel).
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  y(): number;

  /**
   * Obtains the URL link address that has passed the security check. This can be used to provide operations such as "
   * Open Link", "Share Link", and "Copy Link" when building a custom menu.
   *
   * > **NOTE**
   * >
   * > Compared with getUnfilteredLinkUrl(), this method performs a security check on the URL. Compared with
   * > getSourceUrl(), this method obtains the link URL at the long press position, whereas getSourceUrl() obtains the
   * > URL of the **src** attribute of the selected element (such as images, media, and other resources).
   *
   * @returns { string } Security-checked URL if the long-press position is a link; otherwise, an empty string.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getLinkUrl(): string;

  /**
   * Obtains the original URL link address that has not passed the security check.
   *
   * @returns { string } If the long-press position is a link, returns the original URL link; otherwise, returns an
   *     empty string.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getUnfilteredLinkUrl(): string;

  /**
   * Obtains the URL link address corresponding to the **src** attribute of the element.
   *
   * @returns { string } If the selected element has the **src** attribute, the URL in the **src** is returned. The
   *     maximum size of the returned URL is 2 MB. If the size exceeds the upper limit, an empty string is returned.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getSourceUrl(): string;

  /**
   * Checks whether there is image content at the current long press or right-click position. This is used to provide
   * image-related functions such as "Save Image" in a custom menu.
   *
   * @returns { boolean } true if an image exists at the long-press position; false otherwise.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  existsImageContents(): boolean;

  /**
   * Obtains the media type of the web element.
   *
   * > **NOTE**
   * >
   * > Since API version 22, [getContextMenuMediaType]{@link WebContextMenuParam#getContextMenuMediaType} provides
   * > richer media type identification capabilities.
   *
   * @returns { ContextMenuMediaType } Media type of the web page element.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getMediaType(): ContextMenuMediaType;

  /**
   * Obtains the content when right-clicking selected text. This is used to provide text operation functions such as "
   * Copy", "Share", "Translate", and "Search" in a custom menu.
   *
   * @returns { string } Selected text content. If selected text exists at the right-click position, the selected text
   *     is returned; otherwise, an empty string is returned.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getSelectionText(): string;

  /**
   * Obtains the trigger source type of the context menu event (such as mouse right-click, long press, etc.). This is
   * used to adjust the menu display style or provide differentiated menu options based on different sources.
   *
   * @returns { ContextMenuSourceType } Type of the trigger source for the context menu event, including right-click,
   *     long press, and other trigger methods.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getSourceType(): ContextMenuSourceType;

  /**
   * Obtains the input field type of the web element (such as text box, password box, search box, etc.). This is used to
   * provide appropriate editing menu options based on the input field type (such as Paste and Select All for text
   * boxes, and Copy or Hide Password for password boxes).
   *
   * @returns { ContextMenuInputFieldType } Type of the web element input field, including text, password, email, and
   *     other types. It is used to identify the type of the input element that currently has focus.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getInputFieldType(): ContextMenuInputFieldType;

  /**
   * Checks whether a web element is editable. This is used to dynamically show or hide editing-related options in a
   * custom menu (such as displaying Paste, Cut, and Select All when editable, and hiding these options when not
   * editable).
   *
   * @returns { boolean } true if the web element is editable; false otherwise.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  isEditable(): boolean;

  /**
   * Obtains the edit state flag of the web element. This is used to finely control the display logic of custom menu
   * options (such as displaying corresponding menu items based on whether copying, pasting, or undoing is available).
   *
   * @returns { number } Obtains the editable flag of the web element. See
   *     [ContextMenuEditStateFlags]{@link ContextMenuEditStateFlags}.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getEditStateFlags(): number;

  /**
   * Obtains the width of a preview image.
   *
   * @returns { number } Width of a preview image.
   *     <br>Unit: px (physical pixel)
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  getPreviewWidth(): number;

  /**
   * Obtains the height of a preview image.
   *
   * @returns { number } Height of a preview image.
   *     <br>Unit: px (physical pixel)
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  getPreviewHeight(): number;

  /**
   * Obtains the type of the web element that the user long presses or right-clicks when reporting a context menu event.
   *
   * @returns { ContextMenuDataMediaType } Media type of the web element, including image, video, audio, and other
   *     types, used to distinguish the type of web element tapped by the user.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  getContextMenuMediaType(): ContextMenuDataMediaType;
}

/**
 * WebContextMenuResult is a class in the ArkWeb component used to handle context menu events (triggered by long-
 * pressing a page element or right-clicking). It provides developers with a set of menu operation execution
 * capabilities, including text editing operations (copy, paste, cut, select all, undo, redo, paste and match style),
 * image operations (copy image, save image), menu control (close menu), and password auto-fill.
 *
 * Developers typically use WebContextMenuResult when they need to customize the context menu behavior of the Web
 * component. Obtain a WebContextMenuResult instance through the **onContextMenuShow** event callback, and use the menu
 * context information provided by **WebContextMenuParam** to determine the user operation scenario and call the
 * corresponding response method, thereby implementing custom menu interaction logic. If the developer does not perform
 * any menu response operation, the **closeContextMenu** method must be called to close the menu.
 *
 * For details about the sample code, see [onContextMenuShow<sup>9+</sup>]{@link WebAttribute#onContextMenuShow}.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class WebContextMenuResult {
  /**
   * Constructs a **WebContextMenuResult** object.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor();

  /**
   * Closes this context menu. This API must be called when no operations in **WebContextMenuResult** are performed.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  closeContextMenu(): void;

  /**
   * When **WebContextMenuParam** contains image content, this method is used to copy the image to the clipboard.
   * Starting from API version 24, copying canvas images is supported. If you need to save the image to a local file,
   * use the saveImage() method.
   *
   * > **NOTE**
   * >
   * > After the operation is complete, [closeContextMenu]{@link WebContextMenuResult#closeContextMenu} should be called
   * > to close the menu. Failure to do so may result in menu resources not being properly released.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  copyImage(): void;

  /**
   * Performs the copy text operation.
   *
   * > **NOTE**
   * >
   * > After the operation is complete, [closeContextMenu]{@link WebContextMenuResult#closeContextMenu} should be called
   * > to close the menu. Failure to do so may result in menu resources not being properly released.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  copy(): void;

  /**
   * Performs the paste operation, preserving the original format. If you need to paste plain text and match the target
   * format, use the pasteAndMatchStyle() method.
   *
   * > **NOTE**
   * >
   * > After the operation is complete, [closeContextMenu]{@link WebContextMenuResult#closeContextMenu} should be called
   * > to close the menu. Failure to do so may result in menu resources not being properly released.
   * >
   * > The permission
   * > [ohos.permission.READ_PASTEBOARD](docroot://security/AccessToken/restricted-permissions.md#ohospermissionread_pasteboard)
   * > must be declared.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  paste(): void;

  /**
   * Performs the cut operation.
   *
   * > **NOTE**
   * >
   * > After the operation is complete, [closeContextMenu]{@link WebContextMenuResult#closeContextMenu} should be called
   * > to close the menu. Failure to do so may result in menu resources not being properly released.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  cut(): void;

  /**
   * Performs the select all operation.
   *
   * > **NOTE**
   * >
   * > After the operation is complete, [closeContextMenu]{@link WebContextMenuResult#closeContextMenu} should be called
   * > to close the menu. Failure to do so may result in menu resources not being properly released.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  selectAll(): void;

  /**
   * Performs the redo operation, which re-executes the revoked operation.
   *
   * > **NOTE**
   * >
   * > After the operation is complete, [closeContextMenu]{@link WebContextMenuResult#closeContextMenu} should be called
   * > to close the menu. Failure to do so may result in menu resources not being properly released.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  redo(): void;

  /**
   * Performs the undo operation, which undoes the last editing operation.
   *
   * > **NOTE**
   * >
   * > After the operation is complete, [closeContextMenu]{@link WebContextMenuResult#closeContextMenu} should be called
   * > to close the menu. Failure to do so may result in menu resources not being properly released.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  undo(): void;

  /**
   * Performs the paste operation related to this context menu. The pasted content matches the target format and is
   * presented as plain text.
   *
   * > **NOTE**
   * >
   * > After the operation is complete, [closeContextMenu]{@link WebContextMenuResult#closeContextMenu} should be called
   * > to close the menu. Failure to do so may result in menu resources not being properly released.
   * >
   * > The permission
   * > [ohos.permission.READ_PASTEBOARD](docroot://security/AccessToken/restricted-permissions.md#ohospermissionread_pasteboard)
   * > must be declared.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  pasteAndMatchStyle(): void;

  /**
   * Requests the username or password data in the password vault to be automatically filled in the current focused text
   * box.
   *
   * > **NOTE**
   * >
   * > After the operation is complete, [closeContextMenu]{@link WebContextMenuResult#closeContextMenu} should be called
   * > to close the menu. Failure to do so may result in menu resources not being properly released.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  requestPasswordAutoFill(): void;

  /**
   * Saves the image related to this context menu. Calling this method triggers the download process.
   *
   * > **NOTE**
   * >
   * > After the operation is complete, [closeContextMenu]{@link WebContextMenuResult#closeContextMenu} should be called
   * > to close the menu. Failure to do so may result in menu resources not being properly released.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 24 dynamic
   */
  saveImage(): void;
}

/**
 * ConsoleMessage is an object that encapsulates JavaScript console output information in the **Web** component. When a
 * web page outputs logs through methods such as `console.log()`, `console.warn()`, and `console.error()`, this object
 * is provided to the app through the `onConsole` event callback for monitoring and inspecting web page debug output.
 * For sample code, see [onConsole event]{@link WebAttribute#onConsole}.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class ConsoleMessage {
  /**
   * Constructs a **ConsoleMessage** object.
   *
   * @param { string } message - Log output information of **ConsoleMessage**.
   * @param { string } sourceId - Path and name of the web page source file.
   * @param { number } lineNumber - Line number of **ConsoleMessage**.
   * @param { MessageLevel } messageLevel - Log level of **ConsoleMessage**.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.ConsoleMessage#constructor
   */
  constructor(message: string, sourceId: string, lineNumber: number, messageLevel: MessageLevel);

  /**
   * Constructs a **ConsoleMessage** object.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor();

  /**
   * Obtains the log message of the console output.
   *
   * @returns { string } Log information output to the console.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getMessage(): string;

  /**
   * Obtains the path and file name of the web source file.
   *
   * @returns { string } Path and file name of the web source file.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getSourceId(): string;

  /**
   * Obtains the line number of the console output in the web source file.
   *
   * @returns { number } Line number of the console output in the web source file.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getLineNumber(): number;

  /**
   * Obtains the level of this console message.
   *
   * @returns { MessageLevel } Level of the console message.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getMessageLevel(): MessageLevel;

  /**
   * Obtains the log source of this console message.
   *
   * @returns { ConsoleMessageSource } Log source of the console message.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  getSource() : ConsoleMessageSource;
}

/**
 * WebResourceRequest is a class in the Web component that represents a network resource request, providing detailed
 * metadata about the requested resource. This object is used in event callbacks such as `onErrorReceive`,
 * `onHttpErrorReceive`, and request interception to help developers diagnose network errors, monitor request status,
 * and implement resource interception control. By using this class, the app can improve error handling, enhance request
 * controllability, and optimize user experience. For sample code, see
 * [onErrorReceive event]{@link WebAttribute#onErrorReceive}.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class WebResourceRequest {
  /**
   * Constructs a **WebResourceRequest** object.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor();

  /**
   * Obtains the information about the resource request header.
   *
   * @returns { Array<Header> } Array containing the key-value pair information of the request headers. Each **Header**
   *     object contains the name and corresponding value of a request header, such as User-Agent and Content-Type.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getRequestHeader(): Array<Header>;

  /**
   * Obtains the URL of the resource request.
   *
   * @returns { string } Returns the complete resource request URL string, including the protocol, domain name, path,
   *     and query parameters.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getRequestUrl(): string;

  /**
   * Checks whether the resource request is associated with a gesture (such as a tap).
   *
   * @returns { boolean } Whether the resource request is associated with a gesture (for example, a tap).
   *     <br>The value **true** indicates that the resource request is associated with a gesture, and **false**
   *     indicates the opposite.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  isRequestGesture(): boolean;

  /**
   * Checks whether the resource request is for the main frame. Used to differentiate between main frame and subframe
   * requests.
   *
   * @returns { boolean } Whether the resource request is a main frame request.
   *     <br>The value **true** indicates that the resource request is a main frame request, and **false** indicates
   *     that the resource request is not a main frame request.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  isMainFrame(): boolean;

  /**
   * Checks whether the resource request is redirected by the server. Used to inspect the request redirect chain and
   * identify malicious redirects.
   *
   * @returns { boolean } Whether the resource request is redirected by the server.
   *     <br>The value **true** indicates that the resource request is redirected by the server, and **false** indicates
   *     that the resource request is not redirected by the server.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  isRedirect(): boolean;

  /**
   * Obtains the request method.
   *
   * @returns { string } HTTP request method string. Common values include GET, POST, PUT, DELETE, etc., indicating the
   *     HTTP method type used for the resource request.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getRequestMethod(): string;
}

/**
 * WebResourceResponse is a class in the Web component that represents HTTP responses and allows custom web page
 * resource responses. In events such as onHttpErrorReceive, it provides the app with information including the status
 * code, status code description, response header, response data, encoding, and MIME type of the server response. In
 * resource request interception scenarios, it allows the app to customize the status code, status code description,
 * response header, response data, encoding, MIME type, and data readiness state of the response, so that the app takes
 * over the return content of specific resources. For sample code, see
 * [onHttpErrorReceive event]{@link WebAttribute#onHttpErrorReceive}.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class WebResourceResponse {
  /**
   * Constructor of WebResourceResponse. It is used to create an HTTP response object, commonly used for customizing
   * response content in resource request interception scenarios.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor();

  /**
   * Obtains the data in the resource response.
   *
   * @returns { string } Resource response data in HTML string format.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getResponseData(): string;

  /**
   * Obtains resource response data, supporting multiple data types. Compared with getResponseData, this method supports
   * returning various types such as number (file handle), ArrayBuffer (binary data), and Resource ($rawfile resource).
   * It is recommended to use this method when flexible data type support is needed.
   *
   * @returns { string | number | ArrayBuffer | Resource | undefined } An HTML string when the type is string; a file
   *     descriptor when the type is number; binary data when the type is ArrayBuffer; a **$rawfile** resource when the
   *     type is resource; or **undefined** if no data is available.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @since 13 dynamic
   */
  getResponseDataEx(): string | number | ArrayBuffer | Resource | undefined;

  /**
   * Obtains the encoding string of the resource response.
   *
   * @returns { string } Encoding of the resource response, for example, 'utf-8', 'gbk', and other character set
   *     encodings.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getResponseEncoding(): string;

  /**
   * Obtains the MIME type of the resource response.
   *
   * @returns { string } Media (MIME) type of the resource response, for example, 'text/html', 'application/json', etc.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getResponseMimeType(): string;

  /**
   * Obtains the status code description of the resource response.
   *
   * @returns { string } Status code description of the resource response, for example, 'OK' and 'Not Found'.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getReasonMessage(): string;

  /**
   * Obtains the resource response header.
   *
   * @returns { Array<Header> } Resource response header.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getResponseHeader(): Array<Header>;

  /**
   * Obtains the status code of the resource response.
   *
   * @returns { number } Status code of the resource response. For example, 200 indicates success and 404 indicates not
   *     found.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getResponseCode(): number;

  /**
   * Sets the data in the resource response.
   *
   * @param { string | number | Resource } data - Resource response data to set. When set to a string, the value
   *     indicates a string in HTML format. When set to a number, the value indicates a file handle, which is closed by
   *     the system **Web** component. When set to a **Resource** object, the value indicates the file resources in the
   *     **rawfile** directory of the application. When set to an **ArrayBuffer** object, the value indicates the
   *     original binary data of a resource. [since 9 - 10]
   * @param { string | number | Resource | ArrayBuffer } data - Resource response data to set. When set to a string, the
   *     value indicates a string in HTML format. When set to a number, the value indicates a file handle, which is
   *     closed by the system **Web** component. When set to a **Resource** object, the value indicates the file
   *     resources in the **rawfile** directory of the application. When set to an **ArrayBuffer** object, the value
   *     indicates the original binary data of a resource. [since 11]
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  setResponseData(data: string | number | Resource | ArrayBuffer): void;

  /**
   * Sets the encoding string of the resource response.
   *
   * @param { string } encoding - Encoding of the resource response to set. The encoding format must be consistent with
   *     the actual encoding of the response data. The encoding format affects how the browser or client parses and
   *     displays the response content.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  setResponseEncoding(encoding: string): void;

  /**
   * Sets the MIME type of the resource response.
   *
   * @param { string } mimeType - Media (MIME) type of the resource response to set. Common MIME types include text/html
   *     (HTML document), application/json (JSON data), image/png (PNG image), etc.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  setResponseMimeType(mimeType: string): void;

  /**
   * Sets the status code description of the resource response.
   *
   * @param { string } reason - Status code description of the resource response to set. The status code description is
   *     a textual explanation of the status code, usually used in correspondence with the status code. For example,
   *     when the status code is 200, the description can be set to "OK", and when the status code is 404, the
   *     description can be set to "Not Found". This description is included in the HTTP response, making it easier for
   *     the client or developer to understand the response result.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  setReasonMessage(reason: string): void;

  /**
   * Sets the resource response header.
   *
   * @param { Array<Header> } header - Resource response header to set. The response header is used to pass HTTP
   *     protocol header information, for example, setting "Cache-Control" to control the caching policy, setting "
   *     Access-Control-Allow-Origin" to implement cross-origin access, and setting "Content-Type" to specify the
   *     content type. Setting the response header affects how the browser or client processes the resource.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  setResponseHeader(header: Array<Header>): void;

  /**
   * Sets the status code of the resource response.
   *
   * @param { number } code - Status code of the resource response to set. If the resource request fails or the response
   *     status is an error status, refer to [@ohos.web.netErrorList]{@link @ohos.web.netErrorList:WebNetErrorList} to
   *     set the corresponding error code. Common error code scenarios: 404 indicates that the resource does not exist.
   *     Check the resource path. 500 indicates an internal server error. Check the server status. 403 indicates no
   *     access permission. Apply for the corresponding access permission. 401 indicates unauthorized access. Check the
   *     authentication information. Check the network configuration, server status, or resource access permission based
   *     on the error code. Avoid setting the error code to ERR_IO_PENDING, which may cause XMLHttpRequest synchronous
   *     requests to be blocked.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  setResponseCode(code: number): void;

  /**
   * Sets whether the resource response data is ready.
   *
   * > **NOTE**
   * >
   * > - In resource request interception scenarios, call setResponseData(), setResponseEncoding(), setResponseMimeType(
   * > ), setResponseHeader(), setResponseCode(), setReasonMessage(), and other methods first to set the response
   * > attributes. Finally, call setResponseIsReady(true) to trigger resource return.
   * >
   * > - Asynchronous data scenario: Call setResponseIsReady(false) first. After the data is ready, call setResponseData
   * > () and other setting methods, and finally call setResponseIsReady(true) to trigger resource return.
   * >
   * > - If the calling sequence is incorrect, XMLHttpRequest synchronous requests may be blocked.
   *
   * @param { boolean } IsReady - Whether the resource response data is ready.
   *     <br>The value **true** indicates that the resource response data is ready, and **false** indicates the
   *     opposite.
   *     <br>If the data is provided asynchronously, this parameter must be explicitly set to **false**. If this
   *     parameter is set to an invalid value, for example, **null** or **undefined**, or is not set, the data is
   *     considered ready.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  setResponseIsReady(IsReady: boolean): void;

  /**
   * Obtains whether the response data is ready.
   *
   * @returns { boolean } **true** indicates that the response data is ready, and **false** indicates the opposite.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @since 13 dynamic
   */
  getResponseIsReady(): boolean;
}

/**
 * Request/response header object returned by the **Web** component. It is suitable for scenarios where reading or
 * modifying HTTP headers is required, improving network request handling flexibility and controllability.
 *
 * @interface Header [since 8 - 11]
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface Header {
  /**
   * Key of the request or response header.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  headerKey: string;

  /**
   * Value of the request or response header.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  headerValue: string;
}

/**
 * WebResourceError is a class that provides error information when resource loading fails in the **Web** component. The
 * error object is provided to the app through the `onErrorReceive` and `onHttpErrorReceive` event callbacks,
 * encapsulating error details for debugging and error handling. It is typically used together with WebResourceRequest
 * to determine which resource failed to load. For sample code, see
 * [onErrorReceive event]{@link WebAttribute#onErrorReceive}.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class WebResourceError {
  /**
   * Constructor of WebResourceError. Creates a WebResourceError object to encapsulate error information when resource
   * loading fails in the **Web** component.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor();

  /**
   * Obtains the error information of the resource loading. It is used to describe the specific cause of the resource
   * loading failure in detail. Developers can output the error information to logs for debugging and analysis, or
   * display a user-friendly error message to users.
   *
   * @returns { string } Error information about resource loading.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getErrorInfo(): string;

  /**
   * Obtains the error code of the resource loading. It is used to determine the specific cause of the resource loading
   * failure (such as network errors, server errors, or permission issues), so that developers can take appropriate
   * handling strategies based on the error type (such as retrying, prompting the user, or degrading the display).
   *
   * @returns { number } Error code for loading the resource. For details about the error codes, see
   *     [WebNetErrorList]{@link @ohos.web.netErrorList:WebNetErrorList} or HTTP status codes.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getErrorCode(): number;

  /**
   * Gets the custom error code of the Web resource.
   *
   * @returns { number } Return the custom error code of the Web resource.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 26.1.0 dynamic
   */
  getCustomErrorCode(): number;
}

/**
 * JsGeolocation is the authorization response object provided to the app when the Web component receives a web page
 * geolocation permission request. When a web page requests device location information through JavaScript geolocation
 * APIs (such as navigator.geolocation), the app needs to decide whether to authorize the request. Through the invoke
 * method, JsGeolocation allows the app to grant or deny the geolocation permission for web pages of a specified origin,
 * and optionally save the permission decision to the system to avoid repeated authorization prompts when the same
 * origin requests again.
 *
 * JsGeolocation is applicable to scenarios where web pages in the Web component actively request geolocation
 * permission. The app must first register the [onGeolocationShow event]{@link WebAttribute#onGeolocationShow}. When a
 * web page initiates a geolocation permission request, the event callback passes the JsGeolocation object to the app,
 * and the app calls the invoke method in the callback to complete the authorization response. The "
 * ohos.permission.LOCATION" and "ohos.permission.APPROXIMATELY_LOCATION" permissions must also be configured.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class JsGeolocation {
  /**
   * Constructor of JsGeolocation. The constructor itself is not directly called by the app. The JsGeolocation instance
   * is typically obtained through the [onGeolocationShow event]{@link WebAttribute#onGeolocationShow} callback.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor();

  /**
   * Sets the geolocation permission status of a web page. This method must be called in the
   * [onGeolocationShow event]{@link WebAttribute#onGeolocationShow} callback to respond to the authorization request
   * from the web page that initiated the geolocation permission request.
   *
   * @param { string } origin - Web origin that initiates the location permission request, used to identify the source
   *     of a geolocation request from a specific website.
   *     <br>The origin format must comply with the format defined in RFC 6454.
   * @param { boolean } allow - Geolocation permission status.
   *     <br>The value **true** means to enable the geolocation permission, and **false** means the opposite.
   * @param { boolean } retain - Whether to allow the location permission state to be saved to the system. The location
   *     permissions saved to the system can be managed through the
   *     [GeolocationPermissions]{@link @ohos.web.webview:webview.GeolocationPermissions} API.
   *     <br>The value **true** indicates that the location permission state is saved to the system, and **false**
   *     indicates that it is not saved to the system.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  invoke(origin: string, allow: boolean, retain: boolean): void;
}

/**
 * Manages behavior of cookies in **Web** components. All **Web** components in an application share a **WebCookie**.
 * You can use the **getCookieManager** API in **controller** to obtain the **WebCookie** for subsequent cookie
 * management.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 8 dynamiconly
 * @deprecated since 23
 * @useinstead ohos.web.webview.webview.WebCookieManager
 */
declare class WebCookie {
  /**
   * Constructs a **WebCookie** object.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 23. No API is provided for substitute.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 23
   * @useinstead ohos.web.webview.webview.WebCookieManager
   */
  constructor();

  /**
   * Sets the cookie. This API returns the result synchronously. **true** is returned if the operation is successful;
   * otherwise, **false** is returned.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebCookieManager#setCookie
   */
  setCookie();

  /**
   * Saves the cookies in the memory to the drive. This API returns the result synchronously.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebCookieManager#saveCookieAsync
   */
  saveCookie();
}

/**
 * EventResult is a class in ArkWeb Kit used to notify the **Web** component of the same-layer event consumption result.
 * In same-layer embedding scenarios, the app and the **Web** component are both exposed in the event response chain.
 * EventResult allows the app to declare to the **Web** component whether it has consumed a touch or mouse event,
 * thereby determining whether the **Web** component continues to process the event. When the app sets the consumption
 * result to **true**, it indicates that the app has consumed the event and the **Web** component will no longer consume
 * it. When set to **false**, it indicates that the app does not consume the event, and the event will be consumed by
 * the **Web** component. EventResult is used to set the consumption result of touch events (
 * [TouchType]{@link TouchType}) and mouse events ([MouseAction]{@link MouseAction}, limited to left, middle, and right
 * buttons), with the mouse button type defined by [MouseButton]{@link MouseButton}. It is applicable to event
 * coordination scenarios where the app and the **Web** component interact at the same layer.
 *
 * For details about the sample code of the touch event, see
 * [onNativeEmbedGestureEvent]{@link WebAttribute#onNativeEmbedGestureEvent}.
 *
 * For details about the sample code of the mouse event, see
 * [onNativeEmbedMouseEvent]{@link WebAttribute#onNativeEmbedMouseEvent}.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare class EventResult {
  /**
   * Constructs a **EventResult** object.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  constructor();

  /**
   * Sets the gesture event consumption result.
   *
   * @param { boolean } result - Whether to consume the gesture event.
   *     <br>The value **true** means to consume the gesture event, and **false** means the opposite.
   *     <br>If **null** or **undefined** is passed in, the value is **true**.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  setGestureEventResult(result: boolean): void;

  /**
   * Sets the gesture event consumption result and bubbling control.
   *
   * @param { boolean } result - Whether to consume the gesture event.
   *     <br>The value **true** means to consume the gesture event, and **false** means the opposite.
   *     <br>If **null** or **undefined** is passed in, the value is **true**.
   * @param { boolean } stopPropagation - Whether to stop propagation. This parameter is valid only when **result** is
   *     set to **true**.
   *     <br>The value **true** means to stop propagation, and **false** means the opposite.
   *     <br>If **null** or **undefined** is passed in, the value is **true**.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 14 dynamic
   */
  setGestureEventResult(result: boolean, stopPropagation: boolean): void;

  /**
   * Sets the mouse event consumption result and bubbling control.
   *
   * @param { boolean } result - Whether to consume the mouse event.
   *     <br>true indicates consumption of the mouse event, and false indicates no consumption of the mouse event.
   *     <br>The value is true when null or undefined is passed in.
   * @param { boolean } [stopPropagation] - Whether to stop bubbling. This parameter takes effect only when result is
   *     true.
   *     <br>true indicates that bubbling is stopped, and false indicates that bubbling is not stopped.
   *     <br>The value is true when null or undefined is passed in.
   *     <br>Default value: true.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  setMouseEventResult(result: boolean, stopPropagation?: boolean): void;
}

/**
 * WebController is the controller class of the ArkWeb component, used to control various behaviors of the Web
 * component. A WebController object can be bound to only one Web component. After binding, developers can use the
 * controller to perform operations on the Web component, such as page navigation (forward/backward/loading), focus
 * control, zoom adjustment, page refresh and stop, cookie management, and JavaScript injection and execution.
 *
 * WebController is suitable for scenarios where active control of the embedded Web component is required on the app
 * side, such as implementing browser-like forward and backward navigation, establishing a JavaScript interaction
 * channel between the app side and the web page side, dynamically loading web page content, or managing cookie data.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.web.webview.webview.WebviewController
 */
declare class WebController {
  /**
   * Constructs a **WebController** object.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#constructor
   */
  constructor();

  /**
   * Called when the **Web** component enters the inactive state.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#onInactive
   */
  onInactive(): void;

  /**
   * Called when the **Web** component enters the active state.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#onActive
   */
  onActive(): void;

  /**
   * Sets a zoom factor for the current web page.
   *
   * @param { number } factor - Zoom factor. The value **1** indicates that the current zoom ratio remains unchanged. A
   *     value less than **1** indicates zooming out, and a value greater than **1** indicates zooming in. The value
   *     ranges from (0, 100].
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.web.webview:webview.WebviewController#zoom
   */
  zoom(factor: number): void;

  /**
   * Clears the browsing history.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#clearHistory
   */
  clearHistory(): void;

  /**
   * Executes a JavaScript script. This API uses an asynchronous callback to return the script execution result.
   * **runJavaScript** can be invoked only after **loadUrl** is executed. For example, it can be invoked in
   * **onPageEnd**.
   *
   * @param { object } options The options with a piece of code and a callback.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#runJavaScript
   */
  runJavaScript(options: { script: string, callback?: (result: string) => void });

  /**
   * If **baseUrl** is empty, the specified character string will be loaded using the data protocol.
   *
   * If **baseUrl** is set to a data URL, the encoded data string will be loaded by the Web component using the data
   * protocol.
   *
   * If **baseUrl** is set to an HTTP or HTTPS URL, the encoded data string will be processed by the Web component as a
   * non-encoded string in a manner similar to **loadUrl**.
   *
   * @param { object } options The options with the data or URL and other information.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#loadData
   */
  loadData(options: { data: string, mimeType: string, encoding: string, baseUrl?: string, historyUrl?: string });

  /**
   * Loads the specified URL with the given HTTP headers.
   *
   * The object injected through **loadUrl** is valid only in the current document. It will be invalid on a new page
   * navigated to through **loadUrl**.
   *
   * The object injected through **registerJavaScriptProxy** is still valid on a new page redirected through
   * **loadUrl**.
   *
   * @param { object } options The options with the URL and other information.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#loadUrl
   */
  loadUrl(options: { url: string | Resource, headers?: Array<Header> });

  /**
   * Called when the **Web** component refreshes the web page.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#refresh
   */
  refresh();

  /**
   * Stops page loading.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#stop
   */
  stop();

  /**
   * Injects a JavaScript object into the window object and calls the methods of the object in the window object. The
   * injected object does not appear in JavaScript until the next (re)load of the page.
   *
   * @param { object } options - The option with the JavaScript object and method list.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#registerJavaScriptProxy
   */
  registerJavaScriptProxy(options: { object: object, name: string, methodList: Array<string> });

  /**
   * Deletes a specific application JavaScript object that is registered with the window through
   * **registerJavaScriptProxy**. The deletion takes effect immediately, with no need for invoking the
   * [refresh]{@link WebController#refresh} API.
   *
   * @param { string } name - Name of the registered JavaScript object, which can be used to invoke the corresponding
   *     object on the application side from the web side.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#deleteJavaScriptRegister
   */
  deleteJavaScriptRegister(name: string);

  /**
   * Obtains the element type of the area being clicked.
   *
   * @returns { HitTestType } Element type of the area being clicked.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.web.webview:webview.WebviewController#getHitTest
   */
  getHitTest(): HitTestType;

  /**
   * Makes the current web page obtain focus.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#requestFocus
   */
  requestFocus();

  /**
   * Checks whether going to the previous page can be performed on the current page.
   *
   * @returns { boolean } **true** is returned if going to the previous page can be performed on the current page;
   *     otherwise, **false** is returned.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#accessBackward
   */
  accessBackward(): boolean;

  /**
   * Checks whether going to the next page can be performed on the current page.
   *
   * @returns { boolean } If going to the next page can be performed on the current page, **true** is returned;
   *     otherwise, **false** is returned.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#accessForward
   */
  accessForward(): boolean;

  /**
   * Checks whether the current page can move forward or backward by the given step.
   *
   * @param { number } step - Number of the steps to take. A positive number means to go forward, and a negative number
   *     means to go backward.
   * @returns { boolean } Whether the page can go forward or backward by the given step. The value **true** means it
   *     can, and **false** means it cannot.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#accessStep
   */
  accessStep(step: number): boolean;

  /**
   * Goes backward by one page in the history stack. You are advised to call
   * [accessBackward<sup>9+</sup>]{@link @ohos.web.webview:webview.WebviewController#accessBackward} to check whether
   * the current page can go backward before calling **backward**.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#backward
   */
  backward();

  /**
   * Goes forward by one page in the history stack. You are advised to call
   * [accessForward<sup>9+</sup>]{@link @ohos.web.webview:webview.WebviewController#accessForward} to check whether the
   * current page can go forward before calling **forward**.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#forward
   */
  forward();

  /**
   * Obtains the cookie management object of the **Web** component.
   *
   * @returns { WebCookie } Cookie management object of the **Web** component. For details, see
   *     [WebCookie]{@link ./web}.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.WebCookieManager
   */
  getCookieManager(): WebCookie;
}

/**
 * Defines Web options through the [API](docroot://reference/apis-arkweb/arkts-basic-components-web.md#api), including
 * the web page resource URL, controller, rendering mode, and more.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface WebOptions {
  /**
   * Web page resource address. If a local resource file is accessed, use the resource protocol or $rawfile resource
   * reference. If a local resource file in the sandbox path outside the app package is loaded (HTML and TXT file types
   * are supported), use file:// sandbox file path.
   *
   * src cannot be dynamically changed through a state variable (for example, @State). To change the address, reload the
   * page through [loadUrl()]{@link @ohos.web.webview:webview.WebviewController#loadUrl}.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  src: string | Resource;

  /**
   * Controller used to control various behaviors of the Web component, including page navigation, lifecycle state,
   * JavaScript interaction, etc. Since API version 9, WebController is no longer maintained. It is recommended to use
   * [WebviewController]{@link WebviewController} instead.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  controller: WebController | WebviewController;

  /**
   * Rendering mode of the current Web component. `RenderMode.ASYNC_RENDER` indicates asynchronous rendering, and
   * `RenderMode.SYNC_RENDER` indicates synchronous rendering. Default value: `RenderMode.ASYNC_RENDER`. This mode does
   * not support dynamic adjustment.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  renderMode? : RenderMode;

  /**
   * Whether the current Webview is created in incognito mode. The value **true** indicates incognito mode, and
   * **false** indicates normal mode.
   *
   * Default value: **false**.
   *
   * The value is **false** when undefined or null is passed in.<!--RP1--><!--RP1End-->
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 11 dynamic
   */
  incognitoMode? : boolean;

  /**
   * Token that specifies the shared render process for the current Web component. In multi-render-process mode, Web
   * components with the same token preferentially attempt to reuse the bound render process. The binding occurs during
   * the initialization phase of the render process. When a render process has no associated Web component, its binding
   * relationship is removed.
   *
   * Default value: **""**.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  sharedRenderProcessToken? : string;

  /**
   * Whether to convert mouse events to touch events. The value **true** indicates that mouse events are converted to
   * touch events, which is suitable for scenarios where touch and mouse interaction behaviors need to be unified;
   * **false** indicates that mouse events are not converted to touch events.
   *
   * Default value: **false**.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  emulateTouchFromMouseEvent? : boolean;
}

/**
 * Describes the **ScriptItem** object registered with the **Web** component through the
 * [javaScriptOnDocumentStart]{@link WebAttribute#javaScriptOnDocumentStart} attribute.
 *
 * @interface ScriptItem [since 11 - 11]
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 26.1.0]
 * @atomicservice
 * @since 11 dynamic
 */
declare interface ScriptItem {
  /**
   * JavaScript script to be registered and executed.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice
   * @since 11 dynamic
   */
  script: string;

  /**
   * A set of matching rules for allowed sources.
   *
   * 1. To allow URLs from all sources, use the wildcard "*".
   * 2. To perform exact matching, specify the website address, for example, "https://www.example.com".
   * 3. To perform fuzzy matching, use the "*" wildcard, for example, "https://*.example.com".
   * Patterns such as "x.*.y.com" and "*foobar.com" are not allowed.
   * 4. If the source is an IP address, use rule 2.
   * 5. For protocols other than HTTP/HTTPS (custom protocols), exact matching and fuzzy matching are not supported,
   * and the rule must end with `://`, for example, "resource://".
   * 6. In a set of scriptRules, if any rule does not meet the above requirements,
   * the entire set of scriptRules does not take effect.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice
   * @since 11 dynamic
   */
  scriptRules: Array<string>;

  /**
   * Regular expression matching rules for allowed sources. **urlRegexRules** is used for matching only when
   * **scriptRules** is set to **[]**.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @crossplatform [since 26.1.0]
   * @since 23 dynamic
   */
  urlRegexRules? : Array<UrlRegexRule>;
}

/**
 * Provides detailed information about the web page that has been submitted for redirection, including whether it is the
 * main document, the navigation type, and more. It is suitable for scenarios where monitoring page navigation behavior
 * is required, improving navigation state management accuracy and user experience.
 *
 * @interface LoadCommittedDetails [since 11 - 11]
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare interface LoadCommittedDetails {
  /**
   * Whether it is the main document.
   *
   * The value **true** indicates the main document, and **false** indicates a non-main document.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  isMainFrame: boolean;

  /**
   * Whether the web page navigation is performed without changing the document.
   *
   * The value **true** indicates that the web page navigation is performed without changing the document, and **false**
   * indicates that the web page navigation is performed with the document changed.
   *
   * Examples of same-document navigation: 1. Reference fragment navigation; 2. Navigation triggered by pushState or
   * replaceState; 3. History navigation within the same page.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  isSameDocument: boolean;

  /**
   * Whether the submitted new entry replaces the existing entry.
   *
   * The value **true** indicates that the submitted new entry replaces the existing entry, and **false** indicates the
   * opposite.
   *
   * In certain scenarios for navigation to a subdocument, although the existing entry is not replaced, some attributes
   * are changed.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  didReplaceEntry: boolean;

  /**
   * Navigation type.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  navigationType: WebNavigationType;

  /**
   * URL of the web page to navigate to.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  url: string;
}

/**
 * Provides detailed information about intelligent tracking prevention, including the website domain and tracker domain.
 * It is suitable for scenarios where monitoring ad blocking behavior is required, improving privacy protection
 * transparency and controllability.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface IntelligentTrackingPreventionDetails {
  /**
   * Host name.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  host: string;

  /**
   * Host name of the tracker.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  trackerHost: string;
}

/**
 * Defines the Web interface.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop [since 12]
 */
interface WebInterface {
  /**
   * Sets Value.
   *
   * @param { WebOptions } value - Define web options.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (value: WebOptions): WebAttribute;
}

/**
 * Provides detailed information about the same-layer tag, including the ID, type, size, and location. It is suitable
 * for scenarios where obtaining same-layer element attributes is required, improving same-layer rendering customization
 * and user experience.
 *
 * @interface NativeEmbedInfo [since 11 - 11]
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare interface NativeEmbedInfo {
  /**
   * ID of the same-layer tag.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  id?: string;

  /**
   * Type of the same-layer tag. The value is in lowercase.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  type?: string;

  /**
   * **src** information of the same-layer tag.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  src?: string;

  /**
   * Position of the same-layer tag relative to the upper left corner of the **Web** component as the coordinate origin,
   * in pixels. This position is different from the standard position.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  position?: Position;

  /**
   * Width of the same-layer tag, in px.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  width?: number;

  /**
   * Height of the same-layer tag, in px.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  height?: number;

  /**
   * URL of the same-layer tag.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  url?: string;

  /**
   * Tag name, which is in uppercase.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  tag?: string;

  /**
   * List of key-value pairs of the params tag in the object tag. Use the methods provided by Object to operate this
   * object, for example, `embed.info?.params?.["name"]`.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  params?: Map<string, string>;
}

/**
 * Provides detailed information about the changes of the same-layer tag lifecycle, including the status and tag
 * information. It is suitable for scenarios where monitoring same-layer element lifecycle is required, improving
 * rendering state management accuracy and user experience.
 *
 * @interface NativeEmbedDataInfo [since 11 - 11]
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare interface NativeEmbedDataInfo {
  /**
   * Lifecycle status of the same-layer tag.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  status?: NativeEmbedStatus;

  /**
   * SurfaceId of the NativeImage.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  surfaceId?: string;

  /**
   * Unique ID of the same-layer tag.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  embedId?: string;

  /**
   * Detailed information about the same-layer tag.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  info?: NativeEmbedInfo;
}

/**
 * Provides visibility information about the same-layer tag, including the visibility status and tag ID. It is suitable
 * for scenarios where monitoring same-layer element visibility is required, improving rendering state management
 * accuracy and user experience.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 12 dynamic
 */
declare interface NativeEmbedVisibilityInfo {
  /**
   * Whether the same-layer tag is visible.
   *
   * The value **true** indicates that the same-layer tag is visible, and **false** indicates the opposite.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  visibility: boolean;

  /**
   * ID of the same-layer rendered tag.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  embedId: string;
}

/**
 * Provides detailed information about finger touch on a same-layer tag, including the tag ID and touch event. It is
 * suitable for scenarios where handling same-layer element touch interaction is required, improving touch experience
 * customization and flexibility.
 *
 * @interface NativeEmbedTouchInfo [since 11 - 11]
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare interface NativeEmbedTouchInfo {
  /**
   * Unique ID of the same-layer tag.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  embedId?: string;

  /**
   * Touch action information.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  touchEvent?: TouchEvent;

  /**
   * Gesture event consumption result.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  result?: EventResult;
}

/**
 * Provides detailed information about clicking or touching and holding a same-layer tag using the mouse or touchpad,
 * including the tag ID and mouse event. It is suitable for scenarios where handling same-layer element mouse
 * interaction is required, improving mouse experience customization and flexibility.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
declare interface NativeEmbedMouseInfo {
  /**
   * Unique ID of the same-layer tag.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  embedId?: string;

  /**
   * Information about clicking or touching and holding using the mouse or touchpad.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  mouseEvent?: MouseEvent;

  /**
   * Mouse event consumption result.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  result?: EventResult;
}

/**
 * Provides detailed information about the first meaningful paint on the web page, including the navigation time and
 * paint time. It is suitable for scenarios where monitoring page rendering performance is required, improving
 * performance optimization accuracy and user experience.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface FirstMeaningfulPaint {
  /**
   * Start time of the navigation, in microseconds.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  navigationStartTime?: number;

  /**
   * Time taken for the first meaningful paint of the page, in milliseconds.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  firstMeaningfulPaintTime?: number;
}

/**
 * Provides detailed information about the largest contentful paint on the web page, including the navigation time and
 * various paint times. It is suitable for scenarios where monitoring page rendering performance is required, improving
 * performance optimization accuracy and user experience.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LargestContentfulPaint {
  /**
   * Start time of the navigation, in microseconds.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  navigationStartTime?: number;

  /**
   * Loading time of the maximum image, in milliseconds.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  largestImagePaintTime?: number;

  /**
   * Loading time of the maximum text, in milliseconds.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  largestTextPaintTime?: number;

  /**
   * Number of pixels of the maximum image.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  imageBPP?: number;

  /**
   * Start time of the loading of the maximum image, in milliseconds.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  largestImageLoadStartTime?: number;

  /**
   * End time of the loading of the maximum image, in milliseconds.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  largestImageLoadEndTime?: number;
}

/**
 * Provides detailed information about the unresponsive rendering process. It is suitable for scenarios where diagnosing
 * rendering process exceptions is required, improving troubleshooting accuracy and efficiency.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 12 dynamic
 */
declare interface RenderProcessNotRespondingData {
  /**
   * JavaScript call stack information of the web page.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  jsStack: string;

  /**
   * Process ID of the web page.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  pid: number;

  /**
   * Reason why the rendering process does not respond.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  reason: RenderProcessNotRespondingReason;
}

/**
 * Defines the callback information triggered when the web page loading ends, including the page URL. It is suitable for
 * scenarios where monitoring page loading completion is required, improving page lifecycle management capabilities.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnPageEndEvent {
  /**
   * URL of the page after the web page is loaded.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;
}

/**
 * Defines the callback information triggered when the web page loading begins, including the page URL. It is suitable
 * for scenarios where monitoring page loading start is required, improving page lifecycle management capabilities.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnPageBeginEvent {
  /**
   * URL of the page to be loaded when page loading starts.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;
}

/**
 * Defines the callback information triggered when the web page loading begins, including the page URL. It is suitable
 * for scenarios where monitoring page loading start is required, improving page lifecycle management capabilities.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
declare interface OnLoadStartedEvent {
  /**
   * URL of the page.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  url: string;
}

/**
 * Defines the callback information triggered when the web page loading ends, including the page URL. It is suitable for
 * scenarios where monitoring page loading completion is required, improving page lifecycle management capabilities.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
declare interface OnLoadFinishedEvent {
  /**
   * URL of the page.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  url: string;
}

/**
 * Defines the callback information triggered when the web page loading progress changes, including the new progress
 * value. It is suitable for scenarios where monitoring page loading progress is required, improving loading process
 * visibility and user experience.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnProgressChangeEvent {
  /**
   * New loading progress, which is an integer in the range [0, 100].
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  newProgress: number;
}

/**
 * Defines the callback information triggered when the document title of the web page is changed, including the title
 * content and source. It is suitable for scenarios where monitoring page title changes is required, improving page
 * information real-time performance and user experience.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnTitleReceiveEvent {
  /**
   * Document title.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  title: string;

  /**
   * Whether the document title is a real title. The value true indicates that the title is from the **title** tag of
   * the web page, and **false** indicates that the title is automatically generated based on the URL.
   *
   * Default value: **false**.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  isRealTitle?: boolean;
}

/**
 * Defines the callback information triggered when a request to obtain the geolocation information is received,
 * including the origin information and geolocation object. It is suitable for scenarios where handling geolocation
 * permissions is required.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnGeolocationShowEvent {
  /**
   * Origin of the web page that initiates the geolocation permission request, used to identify the source of the
   * geolocation request from a specific website.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  origin: string;

  /**
   * User operation.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  geolocation: JsGeolocation;
}

/**
 * Defines the callback used when a web page triggers **alert()**.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnAlertEvent {
  /**
   * URL of the web page where the dialog box is displayed.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;

  /**
   * Information displayed in the dialog box.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  message: string;

  /**
   * User operation result that is notified to the **Web** component.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  result: JsResult;
}

/**
 * Defines the callback triggered when the user is about to leave the current page in refresh or close scenarios. It is
 * suitable for scenarios such as form editing, allowing developers to intercept the leave action and display a
 * confirmation dialog, thereby preventing accidental loss of unsubmitted user data.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 18]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnBeforeUnloadEvent {
  /**
   * The url of the page.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;

  /**
   * The message of confirm dialog.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  message: string;

  /**
   *  Handle the user's JavaScript result.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  result: JsResult;

  /**
   * The isReload parameter is set to true when the page is refreshed;
   * otherwise, it remains false. Defult is false.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  isReload?: boolean;
}

/**
 * Defines the callback used when a web page triggers **confirm()**.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnConfirmEvent {
  /**
   * URL of the web page where the dialog box is displayed.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;

  /**
   * Information displayed in the dialog box.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  message: string;

  /**
   * User operation result that is notified to the **Web** component.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  result: JsResult;
}

/**
 * Defines the callback used when a web page triggers **prompt()**.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnPromptEvent {
  /**
   * URL of the web page where the dialog box is displayed.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;

  /**
   * Information displayed in the dialog box.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  message: string;

  /**
   * Default information returned by the dialog box.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  value: string;

  /**
   * User operation result that is notified to the **Web** component.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  result: JsResult;
}

/**
 * Represents the callback invoked to notify the host application of a JavaScript console message.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnConsoleEvent {
  /**
   * Console message.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  message: ConsoleMessage;
}

/**
 * Defines the callback information triggered when an error occurs during web page loading, including the request and
 * error details. It is suitable for scenarios where monitoring and handling web page loading errors are required,
 * improving error handling timeliness and user experience.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnErrorReceiveEvent {
  /**
   * Encapsulation of a web page request.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  request: WebResourceRequest;

  /**
   * Encapsulated information about the web page resource loading error.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  error: WebResourceError;
}

/**
 * Defines the callback information triggered when the web page receives an HTTP error during resource loading,
 * including the request and response details. It is suitable for scenarios where monitoring and handling HTTP errors
 * are required, improving network error diagnosis accuracy and user experience.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnHttpErrorReceiveEvent {
  /**
   * The information of request.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  request: WebResourceRequest;

  /**
   *  Web resource response of event.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  response: WebResourceResponse;
}

/**
 * Defines the callback information for notifying the host app that a file download has started, including the URL, user
 * agent, and file details. It is suitable for scenarios where monitoring and managing file downloads are required,
 * improving download process controllability and user experience.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnDownloadStartEvent {
  /**
   * URL for the download task.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;

  /**
   * User agent used for download.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  userAgent: string;

  /**
   * Content-Disposition response header returned by the server, which may be empty.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  contentDisposition: string;

  /**
   * MIME type of the content returned by the server.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  mimetype: string;

  /**
   * Length of the file returned by the server. Unit: byte.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentLength: number;
}

/**
 * Defines the callback information triggered when navigation is complete, including the URL and refresh status. It is
 * suitable for scenarios where monitoring page navigation history is required, improving navigation behavior tracking
 * accuracy and user experience.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 18]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnRefreshAccessedHistoryEvent {
  /**
   * URL to be accessed.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;

  /**
   * Whether the page is reloaded. The value **true** means that the page is reloaded by invoking the
   * [refresh<sup>9+</sup>]{@link @ohos.web.webview:webview.WebviewController#refresh()} API, and **false** means the
   * opposite.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  isRefreshed: boolean;

  /**
   * Whether the event is triggered by the main frame.
   *
   * The value **true** indicates that the event is triggered by the main frame, and **false** indicates the opposite.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  isMainFrame?: boolean;
}

/**
 * Defines the callback triggered when the rendering process exits. It is suitable for scenarios where monitoring
 * rendering process exceptions is required, improving rendering stability and troubleshooting efficiency.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 26.1.0]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnRenderExitedEvent {
  /**
   * Cause for the abnormal exit of the rendering process.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice
   * @since 12 dynamic
   */
  renderExitReason: RenderExitReason;
}

/**
 * Defines the callback information for the file selector result, including the result and parameter details.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnShowFileSelectorEvent {
  /**
   * File selection result to be sent to the **Web** component.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  result: FileSelectorResult;

  /**
   * Information about the file selector.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fileSelector: FileSelectorParam;
}

/**
 * Defines the callback information triggered when a URL is loaded, including the resource URL. It is suitable for
 * scenarios where monitoring resource loading behavior is required, improving resource management visibility and
 * performance optimization.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 26.1.0]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnResourceLoadEvent {
  /**
   * URL of the loaded resource file.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;
}

/**
 * Represents the callback invoked when the display scale of this page changes.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnScaleChangeEvent {
  /**
   * Display scale of the page before the change.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  oldScale: number;

  /**
   * Display scale of the page after the change.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  newScale: number;
}

/**
 * Defines the callback information triggered when an HTTP authentication request is received, including the host and
 * realm information. It is suitable for scenarios where handling HTTP authentication is required, improving
 * authentication process flexibility and security.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnHttpAuthRequestEvent {
  /**
   * User operation.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  handler: HttpAuthHandler;

  /**
   * Host to which the HTTP authentication credential is applied.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  host: string;

  /**
   * Realm to which the HTTP authentication credential is applied.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  realm: string;
}

/**
 * Defines the callback information triggered before the **Web** component loads a URL, including the request details.
 * It is suitable for scenarios where intercepting or modifying network requests is required, improving request control
 * flexibility and security.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 23]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnInterceptRequestEvent {
  /**
   * Information about the URL request.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  request: WebResourceRequest;
}

/**
 * Defines the callback information triggered when a permission request is received, including the request details. It
 * is suitable for scenarios where handling permission grants is required, improving permission management flexibility
 * and security.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnPermissionRequestEvent {
  /**
   * User operation.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  request: PermissionRequest;
}

/**
 * Defines the callback information triggered when a screen capture request is received. It is suitable for scenarios
 * where handling screen recording permissions is required, improving screen recording process controllability and
 * security.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnScreenCaptureRequestEvent {
  /**
   * User operation.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  handler: ScreenCaptureHandler;
}

/**
 * Defines the callback information triggered during a call to allow for the display of a custom context menu.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnContextMenuShowEvent {
  /**
   * Parameters related to the context menu.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  param: WebContextMenuParam;

  /**
   * Result of the context menu.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  result: WebContextMenuResult;
}

/**
 * Defines the callback information for the search result on the web page, including the match ordinal and total count.
 * It is suitable for scenarios where monitoring in-page search behavior is required, improving search interaction
 * visibility and user experience.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnSearchResultReceiveEvent {
  /**
   * Sequence number of the current match, which starts from 0.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  activeMatchOrdinal: number;

  /**
   * Total number of matches.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  numberOfMatches: number;

  /**
   * Whether the current in-page search operation is complete.
   *
   * The value **true** indicates that the current in-page search operation is complete, and **false** indicates the
   * opposite.
   *
   * This method may be called back multiple times until isDoneCounting is **true**.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  isDoneCounting: boolean;
}

/**
 * Defines the callback information triggered when the scrollbar scrolls to a specified position, including the
 * horizontal and vertical offsets.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnScrollEvent {
  /**
   * Position of the scrollbar on the x-axis relative to the leftmost of the web page.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  xOffset: number;

  /**
   * Position of the scrollbar on the y-axis relative to the top of the web page.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  yOffset: number;
}

/**
 * Defines the callback information triggered when the web page receives an SSL error, including the error code and
 * certificate chain. It is suitable for scenarios where handling SSL errors is required, improving security exception
 * monitoring and handling capabilities.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 23]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnSslErrorEventReceiveEvent {
  /**
   * User operation.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  handler: SslErrorHandler;

  /**
   * Error code.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  error: SslError;

  /**
   * Certificate chain data.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @since 15 dynamic
   */
  certChainData?: Array<Uint8Array>;
}

/**
 * Defines the callback information triggered when an SSL client certificate is required, including the host, port, and
 * key type. It is suitable for scenarios where handling client certificate authentication is required, improving
 * authentication process flexibility and security.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnClientAuthenticationEvent {
  /**
   * User operation.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  handler : ClientAuthenticationHandler;

  /**
   * Host name of the server that requests a certificate.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  host : string;

  /**
   * Port number for requesting the certificate server. The valid range is 0-65535, and an exception is thrown when the
   * value is out of range.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  port : number;

  /**
   * Acceptable asymmetric key types.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  keyTypes : Array<string>;

  /**
   * Issuer of the certificate that matches the private key.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  issuers : Array<string>;
}

/**
 * Defines the callback triggered when the web page requests the user to create a window. Starting from API version 23,
 * you can use [OnWindowNewExtEvent]{@link OnWindowNewExtEvent} to obtain more window information.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 26.1.0]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnWindowNewEvent {
  /**
   * Whether to open the target URL in a new window. The value **true** means to open the target URL in a new window,
   * and **false** means to open the target URL in a new tab.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice
   * @since 12 dynamic
   */
  isAlert: boolean;

  /**
   * Whether the creation is triggered by the user. The value **true** means that the creation is triggered by the user,
   * and **false** means the opposite.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice
   * @since 12 dynamic
   */
  isUserTrigger: boolean;

  /**
   * Target URL.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice
   * @since 12 dynamic
   */
  targetUrl: string;

  /**
   * **WebviewController** instance for setting the new window.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice
   * @since 12 dynamic
   */
  handler: ControllerHandler;
}

/**
 * Defines the callback information triggered when an apple-touch-icon URL is received, including the URL and
 * precomposed status. It is suitable for scenarios where obtaining web page icons is required, improving icon
 * management flexibility and user experience.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnTouchIconUrlReceivedEvent {
  /**
   * Received apple-touch-icon URL.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;

  /**
   * Whether the apple-touch-icon is precomposed.
   *
   * **true** indicates that the apple-touch-icon is precomposed, and **false** indicates the opposite.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  precomposed: boolean;
}

/**
 * Defines the callback information triggered when the app receives a new favicon, including the icon PixelMap object.
 * It is suitable for scenarios where obtaining web page favicons is required, improving icon management flexibility and
 * user experience.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnFaviconReceivedEvent {
  /**
   * **PixelMap** object of the received favicon.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  favicon: PixelMap;
}

/**
 * Represents the callback invoked when the old page is not displayed and the new page is about to be visible.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnPageVisibleEvent {
  /**
   * URL address of the new page.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;
}

/**
 * Defines the callback information triggered when the web form data can be resubmitted, including the submission
 * handler. It is suitable for scenarios where handling form retry submission is required, improving form interaction
 * reliability and user experience.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnDataResubmittedEvent {
  /**
   * Handler for resubmitting web form data.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  handler: DataResubmissionHandler;
}

/**
 * Defines the callback information triggered when the audio playback status on the web page changes, including the
 * playback status. It is suitable for scenarios where monitoring audio playback behavior is required, improving audio
 * management visibility and user experience.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnAudioStateChangedEvent {
  /**
   * Audio playback status on the current page. The value **true** means that audio is being played, and **false** means
   * the opposite.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  playing: boolean;
}

/**
 * Defines the callback information for the first content paint on the web page, including the load time and paint time.
 * It is suitable for scenarios where monitoring page rendering performance is required, improving performance
 * optimization accuracy and user experience.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnFirstContentfulPaintEvent {
  /**
   * Navigation start time, in microseconds.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  navigationStartTick: number;

  /**
   * Time between navigation and when the content is first rendered, in milliseconds.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  firstContentfulPaintMs: number;
}

/**
 * Defines the callback information triggered when resource loading is intercepted, including the request details. It is
 * suitable for scenarios where intercepting or handling resource loading is required, improving resource control
 * flexibility and security.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnLoadInterceptEvent {
  /**
   * Information about the URL request.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  data: WebResourceRequest;
}

/**
 * Defines the callback information triggered when the web page is overscrolled, including the horizontal and vertical
 * offsets.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnOverScrollEvent {
  /**
   * Horizontal overscroll offset based on the leftmost edge of the web page.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  xOffset: number;

  /**
   * Vertical overscroll offset based on the top edge of the web page.
   *
   * Unit: vp.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  yOffset: number;
}

/**
 * Defines the callback function triggered when the PDF page is scrolled to the bottom.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
declare interface OnPdfScrollEvent {

  /**
   * URL of the page.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  url:string;
}
/**
 * Defines the function triggered when the PDF loading is successful or fails.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
declare interface OnPdfLoadEvent {
  /**
   * The PDF page loading result.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  result: PdfLoadResult;

  /**
   * URL of the page.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  url: string;
}
/**
 * Defines the JavaScript object to be injected, including the object name, method list, and permission configuration.
 * It is suitable for scenarios where JavaScript-to-native interaction is required, improving cross-language call
 * flexibility and security.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 20]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface JavaScriptProxy {
  /**
   * Object participating in the registration. Only methods can be declared, not attributes. Methods must be of the
   * function type.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  object: object;

  /**
   * Name of the object to be registered, which is the same as that invoked in the window.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  name: string;

  /**
   * Synchronous methods of the JavaScript object to be registered at the application side.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  methodList: Array<string>;

  /**
   * Controller. Since API version 9, WebController is no longer maintained. You are advised to use WebviewController
   * instead.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  controller: WebController | WebviewController;

  /**
   * Asynchronous methods of the JavaScript object to be registered at the application side. Asynchronous methods cannot
   * obtain return values.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  asyncMethodList?: Array<string>;

  /**
   * JSON string, which is empty by default. This string is used to configure JSBridge permission control and define the
   * URL trustlist at the object and method levels.
   *
   * The **permission** parameter of JavaScriptProxy supports the resource, HTTP, and HTTPS protocols, but does not
   * support the file protocol.
   *
   * For the example, see
   * [Invoking Application Functions on the Frontend Page](docroot://web/web-in-page-app-function-invoking.md).
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  permission?: string;
}

/**
 * Enumerates the soft keyboard avoidance modes.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare enum WebKeyboardAvoidMode {
  /**
   * For soft keyboard avoidance, the visual viewport is resized, but not the layout viewport.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  RESIZE_VISUAL = 0,

  /**
   * For soft keyboard avoidance, both the visual viewport and layout viewport are resized. Default value.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  RESIZE_CONTENT = 1,

  /**
   * No viewport is resized, and soft keyboard avoidance is not triggered.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  OVERLAYS_CONTENT = 2,

  /**
   * The soft keyboard avoidance behavior of the **Web** component follows the
   * [KeyboardAvoidMode]{@link @ohos.arkui.UIContext:KeyboardAvoidMode} set by UIcontext. The **Web** component does not
   * process the avoidance behavior of the component.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  RETURN_TO_UICONTEXT = 3
}

/**
 * Enumerates the web element types.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 13 dynamic
 */
declare enum WebElementType {
  /**
   * Image.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  IMAGE = 1,

  /**
   * Hyperlink.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  LINK = 2,

  /**
   * Text or editable area.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  TEXT = 3
}

/**
 * Enumerates the response types of the menu.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 13 dynamic
 */
declare enum WebResponseType {
  /**
   * The menu is displayed when the component is long-pressed.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  LONG_PRESS = 1,

  /**
   * The menu is displayed when the component is right-clicked.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  RIGHT_CLICK = 2
}

/**
 * Defines the web audio types in the app, which control the audio stream type and behavior of web audio and help
 * developers optimize the audio experience based on app scenarios, such as supporting simultaneous playback of web game
 * sounds and system music.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
declare enum AudioSessionType {
  /**
   * Web game sounds and system music can be played at the same time. This value is applicable to web game scenarios.
   * Its corresponding system audio stream type is **STREAM_USAGE_GAME**.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  AMBIENT = 3
}

/**
 * Defines the PDF page loading results, which identify various states and error types during PDF file loading and help
 * developers diagnose errors and provide user prompts when PDF display fails.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
declare enum PdfLoadResult {

  /**
   * The PDF file is successfully loaded.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  LOAD_SUCCESS = 0,

  /**
   * Failed to load the PDF file.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  PARSE_ERROR_FILE = 1,

  /**
   * The PDF file format is not supported.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  PARSE_ERROR_FORMAT = 2,

  /**
   * The PDF file password is incorrect.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  PARSE_ERROR_PASSWORD = 3,

  /**
   * Failed to process the PDF file.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  PARSE_ERROR_HANDLER = 4
}

/**
 * Enumerates whether to allow the rendering process to bypass the vsync scheduling.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
declare enum WebBypassVsyncCondition {
  /**
   * The rendering process does not bypass the vsync scheduling. Default value.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  NONE = 0,

  /**
   * When scrollBy (which supports only scroll with an offset) is used and the web page scroll offset is 0, the
   * rendering process skips vsync scheduling and draws directly.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  SCROLLBY_FROM_ZERO_OFFSET = 1
}

/**
 * Configures preview menu options, supporting the vibration effect when the menu pops up. It is suitable for scenarios
 * where enhanced menu interaction feedback is required, improving user experience.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamiconly
 */
declare interface PreviewMenuOptions {
  /**
   * Vibration effect when the menu is displayed. The **ohos.permission.VIBRATE** permission is required.
   *
   * Default value: **HapticFeedbackMode.DISABLED**, indicating no vibration when the menu is displayed.
   *
   * @default HapticFeedbackMode.DISABLED
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamiconly
   */
  hapticFeedbackMode?: HapticFeedbackMode;
}

/**
 * Represents the selection menu option extension.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 13 dynamic
 */
declare interface SelectionMenuOptionsExt {
  /**
   * Callback invoked when the custom selection menu appears.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  onAppear?: Callback<void>;

  /**
   * Callback invoked when the custom selection menu disappears.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  onDisappear?: Callback<void>;

  /**
   * Preview content style of the custom selection menu. If this parameter is not set, there is no preview content.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  preview?: CustomBuilder;

  /**
   * Type of the custom selection menu.
   *
   * Default value: **MenuType.SELECTION_MENU**
   *
   * Since API version 20, **MenuType.PREVIEW_MENU** supports hyperlink preview.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  menuType?: MenuType;

  /**
   * Custom preview menu options.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  previewMenuOptions?: PreviewMenuOptions;

  /**
   * Callback invoked when the custom context menu on selection is shown.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  onMenuShow?: Callback<void>;

  /**
   * Callback invoked when the custom context menu on selection is hidden.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  onMenuHide?: Callback<void>;
}

/**
 * Provides the result details when a blank screen is detected, including the number of nodes with content. It is
 * suitable for scenarios where analyzing blank screen causes is required, improving blank screen diagnosis detail and
 * accuracy.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare interface BlankScreenDetails {
  /**
   * This attribute may exist when the contentful node detection policy is used and the threshold for the number of
   * detected nodes is set. Otherwise, this attribute does not exist.
   *
   * Number of contentful nodes that are detected.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  detectedContentfulNodesCount?: number;
}

/**
 * Defines the specific reasons for the blank screen, which identify the underlying causes of page blank screen
 * phenomena and help developers quickly locate the source of issues, improving the efficiency of troubleshooting page
 * loading problems and user experience.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare enum DetectedBlankScreenReason {
  /**
   * No contentful node is detected.
   *
   * This may be triggered when the detection policy is **DETECTION_CONTENTFUL_NODES_SEVENTEEN**.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  NO_CONTENTFUL_NODES = 0,
  /**
   * The number of contentful nodes detected is less than or equal to the threshold.
   *
   * This may be triggered when the detection policy is **DETECTION_CONTENTFUL_NODES_SEVENTEEN** and
   * **contentfulNodesCountThreshold** is set.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  SUB_THRESHOLD_CONTENTFUL_NODES = 1
}

/**
 * Provides the event information when a blank screen is detected, including the URL, reason, and details. It is
 * suitable for scenarios where monitoring page blank screen issues is required, improving blank screen diagnosis
 * accuracy and user experience.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare interface BlankScreenDetectionEventInfo {
  /**
   * URL of the page when a blank screen is detected.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  url: string;

  /**
   * Reason for the blank screen issue, which depends on the detection method.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  blankScreenReason: DetectedBlankScreenReason;

  /**
   * Details of the blank screen detection result. When the detection strategy that detects nodes with content is used
   * and the number of detected nodes with content does not exceed the threshold, this parameter contains detailed
   * information such as the number of nodes with content that are hit. If this strategy is not used or the number of
   * nodes exceeds the threshold, this parameter is empty.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  blankScreenDetails?: BlankScreenDetails;
}

/**
 * Defines a callback triggered when a blank screen is detected.
 *
 * @param { BlankScreenDetectionEventInfo } event - Detailed information when a blank screen is detected.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
type OnDetectBlankScreenCallback = (event: BlankScreenDetectionEventInfo) => void;

/**
 * Callback for onTextSelectionChange. Triggered when the text selection content changes.
 *
 * @param { string } selectionText - Selected text.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
type TextSelectionChangeCallback = (selectionText: string) => void;

/**
 * Defines the detection strategy methods used for blank screen detection, which specify the specific algorithms and
 * points for page content detection and help developers strike a balance between detection accuracy and performance
 * overhead, enabling timely identification of page rendering anomalies.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare enum BlankScreenDetectionMethod {
  /**
   * The page is detected using the 17-point detection method. When a rendered and contentful node is detected by a
   * detection point, it is considered that the detection point is hit. A contentful node refers to an image, video, or
   * text node.
   *
   * If no contentful node is detected or the number of contentful nodes is less than the threshold, a blank or near-
   * blank screen is displayed.
   *
   * The 17 detection points are as follows:
   *
   * Center point (1): The center point is at the geometric center of the page.
   *
   * Internal grid intersection points (16): A 5 × 5 uniform grid is defined in the page area. The 16 points are the
   * intersection points of four vertical equal division lines and four horizontal equal division lines in the page.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  DETECTION_CONTENTFUL_NODES_SEVENTEEN = 0
}

/**
 * Provides the policy configuration options for blank screen detection, including the detection timing, method, and
 * threshold. It is suitable for scenarios where custom blank screen detection behavior is required, improving blank
 * screen monitoring flexibility and accuracy.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare interface BlankScreenDetectionConfig {
  /**
   * Whether to enable the white screen policy feature. The value **true** indicates enabled, and **false** indicates
   * disabled.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  enable: boolean;

  /**
   * Sets the timing (in seconds after loading) at which to detect whether a white screen occurs.
   *
   * Unit: second.
   *
   * Note:
   *
   * 1. Duplicate values are ignored.
   * 2. The value must be greater than 0. Values less than 0 are ignored.
   *
   * Default value: [1.0, 3.0, 5.0].
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  detectionTiming?: number[];
  /**
   * Methods of the detection policy. The value is an array.
   *
   * **NOTE**
   *
   * 1. Duplicate values are ignored.
   *
   * Default value: **[BlankScreenDetectionMethod.DETECTION_CONTENTFUL_NODES_SEVENTEEN]**.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  detectionMethods?: BlankScreenDetectionMethod[];
  /**
   * This parameter takes effect only when the contentful node detection strategy is used.
   *
   * The value ranges from 0 to ${maximum nodes of the detection strategy}. If the value is less than or equal to the
   * threshold, a near-white screen is triggered.
   *
   * Default value: 0.
   *
   * Note: The maximum nodes of the detection strategy depend on the selected detection strategy.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  contentfulNodesCountThreshold?: number;
}

/**
 * Provides the event information when the first screen paint is detected, including the URL and paint time. It is
 * suitable for scenarios where monitoring page first screen rendering performance is required, improving performance
 * optimization accuracy and user experience.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare interface FirstScreenPaint {
  /**
   * URL of the first screen paint statistics.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  url: string;

  /**
   * Time when navigation starts for the page pointed to by url.
   *
   * Unit: ms.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  navigationStartTime: number;

  /**
   * Time when the first screen paint is completed for the page pointed to by url.
   *
   * Unit: ms.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  firstScreenPaintTime: number;
}

/**
 * This callback is triggered when the first screen rendering is detected to be complete. Compared with
 * OnFirstMeaningfulPaintCallback, which focuses on the completion of main content loading, and
 * OnLargestContentfulPaintCallback, which focuses on the paint time of the largest content element, this callback
 * focuses more on the rendering completion time of the first screen's visible content, making it suitable for
 * evaluating the user's first visual experience.
 *
 * @param { FirstScreenPaint } firstScreenPaint - Details about the first screen paint.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
type OnFirstScreenPaintCallback = (firstScreenPaint: FirstScreenPaint) => void;

/**
 * This callback is triggered when the input method is detected to be successfully attached.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
type OnInputmethodAttachedCallback = () => void;

/**
 * Defines the input method immersive mode in the WebView, which controls the display style of the soft keyboard and
 * helps developers provide a consistent visual experience based on the app theme and user preferences. It supports the
 * default appearance, system-following, light immersive, and dark immersive styles.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum WebKeyboardAppearanceMode {
  /**
   * Default appearance mode, without immersive style.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  NONE_IMMERSIVE = 0,

  /**
   * Immersive mode, following the system.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  IMMERSIVE = 1,

  /**
   * Light immersive style.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  LIGHT_IMMERSIVE = 2,

  /**
   * Dark immersive style.
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
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class WebAttribute extends CommonMethod<WebAttribute> {
  /**
   * Sets whether to allow execution of JavaScript scripts. If this attribute is not explicitly called, execution is
   * allowed by default.
   *
   * @param { boolean } javaScriptAccess - Whether to allow JavaScript script execution.
   *     <br>The value **true** means allowed, and **false** means not allowed.
   *     <br>The default value is **false** when undefined or null is passed.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  javaScriptAccess(javaScriptAccess: boolean): WebAttribute;

  /**
   * Sets whether to enable access to the file system in the application. This setting does not affect the access to the
   * files specified through
   * [$rawfile(filepath/filename)](docroot://quick-start/resource-categories-and-access.md#accessing-resources). For API
   * version 11 and earlier versions, access to the file system in the application is enabled by default if this
   * attribute is not explicitly called. Since API version 12, access to the file system in the application is disabled
   * by default if this attribute is not explicitly called.
   *
   * @param { boolean } fileAccess - Whether to enable access to the file system in the app.
   *     <br>The value **true** means to enable, and **false** means to disable.
   *     <br>In addition, when fileAccess is **false**, resources in the read-only resource directory
   *     `/data/storage/el1/bundle/entry/resources/resfile` can still be accessed through the file protocol, which is
   *     not controlled by fileAccess.
   *     <br>In API version 11 and earlier, the value is **true** when undefined or null is passed. In API version 12
   *     and later, the value is **false** when undefined or null is passed.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fileAccess(fileAccess: boolean): WebAttribute;

  /**
   * Sets whether to allow loading of image resources from the network (resources accessed via HTTP and HTTPS). If this
   * attribute is not explicitly called, loading is allowed by default.
   *
   * @param { boolean } onlineImageAccess - Whether to allow loading image resources from the network.
   *     <br>The value **true** means that loading is allowed, and **false** means it is not allowed.
   *     <br>When **undefined** or **null** is passed in, the value is **false**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onlineImageAccess(onlineImageAccess: boolean): WebAttribute;

  /**
   * Sets whether to enable the DOM Storage API permission. If this attribute is not explicitly called, the DOM Storage
   * API permission is disabled by default.
   *
   * @param { boolean } domStorageAccess - Sets whether to enable the Document Object Model storage interface (DOM
   *     Storage API).
   *     <br>The value **true** enables it, and **false** disables it.
   *     <br>If **undefined** or **null** is passed, the default value **false** is used.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  domStorageAccess(domStorageAccess: boolean): WebAttribute;

  /**
   * Sets whether to allow automatic loading of image resources. If this attribute is not explicitly called, automatic
   * loading is allowed by default.
   *
   * @param { boolean } imageAccess - Whether to allow automatic loading of image resources.
   *     <br>The value **true** means allowed, and **false** means not allowed.
   *     <br>If **undefined** or **null** is passed, the value is **false**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  imageAccess(imageAccess: boolean): WebAttribute;

  /**
   * Sets the behavior when a secure source attempts to load resources from an insecure source. When this attribute is
   * not explicitly called, the default value is **MixedMode.None**, which means that secure sources are not allowed to
   * load content from insecure sources.
   *
   * @param { MixedMode } mixedMode - Mixed content mode to be set.
   *     <br>If **undefined** or **null** is passed in, the value **MixedMode.All** is used.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  mixedMode(mixedMode: MixedMode): WebAttribute;

  /**
   * Sets whether to support zoom gestures. If this attribute is not explicitly called, zoom gestures are supported by
   * default.
   *
   * @param { boolean } zoomAccess - Whether to support gesture-based zooming.
   *     <br>The value **true** indicates supported, and **false** indicates not supported.
   *     <br>When **undefined** or **null** is passed, the value is **false**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  zoomAccess(zoomAccess: boolean): WebAttribute;

  /**
   * Sets whether to enable the geolocation permission. If this attribute is not explicitly called, the permission is
   * enabled by default. For details about how to use this feature, see
   * [Managing Location Permissions](docroot://web/web-geolocation-permission.md).
   *
   * @param { boolean } geolocationAccess - Whether to enable the geolocation permission.
   *     <br>The value **true** means to enable the permission, and **false** means the opposite.
   *     <br>The value **false** is used when **undefined** or **null** is passed in.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  geolocationAccess(geolocationAccess: boolean): WebAttribute;

  /**
   * Registers the ArkTS object in **javaScriptProxy** with the **Web** component. The object will be registered in all
   * frames of the web page, including all iframes, using the name specified in **JavaScriptProxy**. This enables
   * JavaScript to call methods of the ArkTS object in **javaScriptProxy**.
   *
   * > **NOTE**
   * >
   * > The **javaScriptProxy** API must be used together with
   * > [deleteJavaScriptRegister<sup>9+</sup>]{@link @ohos.web.webview:webview.WebviewController#deleteJavaScriptRegister}
   * > to prevent memory leaks.
   * >
   * > All parameters of the **javaScriptProxy** object cannot be updated.
   * >
   * > When registering a **javaScriptProxy** object, at least one of the synchronous or asynchronous method lists must
   * > be non-empty. Both types of methods can be registered simultaneously.
   * >
   * > This API supports registering only one object. To register multiple objects, use
   * > [registerJavaScriptProxy<sup>9+</sup>]{@link @ohos.web.webview:webview.WebviewController#registerJavaScriptProxy}.
   *
   * @param { object } javaScriptProxy - Object to be registered. Methods can be declared, but attributes cannot.
   *     <br>When **undefined** or **null** is passed in, the ArkTS object in javaScriptProxy is not registered with the
   *     **Web** component. [since 8 - 11]
   * @param { JavaScriptProxy } javaScriptProxy - Object to be registered. Methods can be declared, but attributes
   *     cannot.
   *     <br>When **undefined** or **null** is passed in, the ArkTS object in javaScriptProxy is not registered with the
   *     **Web** component. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  javaScriptProxy(javaScriptProxy: JavaScriptProxy): WebAttribute;

  /**
   * Sets whether to save the password. This API is an empty API.
   *
   * @param { boolean } password - Whether to allow the web component to save passwords. The value **true** means the
   *     web component is allowed to save passwords, and **false** means the opposite. If **undefined** or **null** is
   *     passed, the default value **false** is used.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead ohos.web.WebAttribute#enableAutofill
   */
  password(password: boolean): WebAttribute;

  /**
   * Sets the cache mode. When this attribute is not explicitly called, the default value **CacheMode.Default** is used.
   *
   * @param { CacheMode } cacheMode - Cache mode to set.
   *     <br>When **undefined** or **null** is passed in, the value is **CacheMode.Default**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  cacheMode(cacheMode: CacheMode): WebAttribute;

  /**
   * Sets the dark mode of the **Web** component. If this attribute is not explicitly called, dark mode is disabled by
   * default.
   *
   * When dark mode is enabled, the **Web** component enables the dark style defined in the media query
   * **prefers-color-scheme** of the web page. If it is not defined, the web page remains unchanged. To enable forcible
   * dark mode, use this API with [forceDarkAccess]{@link WebAttribute#forceDarkAccess}. For details about how to use
   * dark mode, see [Setting Dark Mode](docroot://web/web-set-dark-mode.md).
   *
   * @param { WebDarkMode } mode - Dark mode for the web page, which can be set to **Off**, **On**, or **Auto**.
   *     <br>When **null** or **undefined** is passed, the value is **WebDarkMode.Off**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  darkMode(mode: WebDarkMode): WebAttribute;

  /**
   * Sets whether to enable forcible dark mode for the web page. This API is applicable only when
   * [darkMode]{@link WebAttribute#darkMode} is enabled. When this attribute is not explicitly called, forcible dark
   * mode is disabled for the web page by default.
   *
   * @param { boolean } access - Whether to enable forced dark mode for web pages.
   *     <br>The value **true** means to enable it, and **false** means not to enable it.
   *     <br>If null or undefined is passed, the default value **false** is used.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  forceDarkAccess(access: boolean): WebAttribute;

  /**
   * Sets the web-based media playback policy, including the validity period for automatically resuming a paused web
   * audio, and whether the audio of multiple **Web** instances in an application is exclusive. When this attribute is
   * not explicitly set, the web audio cannot be automatically resumed after regaining the focus by default, and the
   * audio of multiple **Web** instances in an application is exclusive.
   *
   * > **NOTE**
   * >
   * > - Audios in the same **Web** instance are considered as the same audio.
   * >
   * > - The media playback policy controls videos with an audio track.
   * >
   * > - You are advised to set [audioExclusive]{@link WebMediaOptions} to the same value for all **Web** components.
   * >
   * > - Audio and video interruption takes effect within an application and between applications, and playback
   * > resumption takes effect only between applications.
   *
   * @param { WebMediaOptions } options - Web-based media playback policy.
   *     <br>After the parameter settings are updated, the playback must be started again for the settings to take
   *     effect.
   *     <br>When **undefined** or **null** is passed in, **{resumeInterval: 0, audioExclusive: true}** is used.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  mediaOptions(options: WebMediaOptions): WebAttribute;

  /**
   * Sets whether to save form data. When this attribute is not explicitly called, the **Web** component is allowed to
   * save form data by default. This API is an empty API.
   *
   * @param { boolean } tableData - Whether to allow the Web component to save form data. The value **true** means the
   *     Web component is allowed to save form data, and **false** means the opposite. If **undefined** or **null** is
   *     passed, the value is **true**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead ohos.web.WebAttribute#enableAutofill
   */
  tableData(tableData: boolean): WebAttribute;

  /**
   * Sets whether to support the **viewport** attribute of the HTML **\<meta>** tag. This API is an empty API.
   *
   * @param { boolean } wideViewModeAccess - Whether to support the **viewport** attribute of the HTML **<meta>** tag.
   *     <br>The value **true** means to support the **viewport** attribute of the HTML **<meta>** tag, and **false**
   *     means the opposite.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead WebAttribute.metaViewport
   */
  wideViewModeAccess(wideViewModeAccess: boolean): WebAttribute;

  /**
   * Sets whether to load web pages by using the overview mode. That is, zoom out the content to fit the screen width.
   * When this attribute is not explicitly called, web pages can be loaded in overview mode by default.
   *
   * @param { boolean } overviewModeAccess - Whether to load web pages in overview mode.
   *     <br>The value **true** means to use overview mode, and **false** means not to use it.
   *     <br>The default value is **false** when undefined or null is passed in.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  overviewModeAccess(overviewModeAccess: boolean): WebAttribute;

  /**
   * Sets the over-scroll mode of the **Web** component. When enabled, if the user scrolls to the edge of the root web
   * page, the **Web** component bounces back with an elastic animation, and inner pages on the root page do not trigger
   * the bounce effect. If this attribute is not explicitly called, the over-scroll mode is disabled by default.
   *
   * @param { OverScrollMode } mode - Whether to enable the overscroll mode.
   *     <br>When **undefined** or **null** is passed in, the value is **OverScrollMode.NEVER**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice
   * @since 11 dynamic
   */
  overScrollMode(mode: OverScrollMode): WebAttribute;

  /**
   * Sets the blur mode for **Web** elements when the soft keyboard is dismissed. If this attribute is not explicitly
   * called, the [BlurOnKeyboardHideMode.SILENT]{@link BlurOnKeyboardHideMode} mode is used by default.
   *
   * @param { BlurOnKeyboardHideMode } mode - Whether to enable blur mode of the web element when soft keyboard is
   *     hidden. The default value is **BlurOnKeyboardHideMode.SILENT**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 14 dynamic
   */
  blurOnKeyboardHideMode(mode: BlurOnKeyboardHideMode): WebAttribute;

  /**
   * Sets the text zoom ratio of the page.
   *
   * @param { number } textZoomAtio - Text zoom percentage of the page to set. The value 100 indicates the original
   *     size, a value greater than 100 indicates zoom-in, and a value less than 100 indicates zoom-out.
   *     <br>The value range is (0, 2147483647].
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead WebAttribute.textZoomRatio
   */
  textZoomAtio(textZoomAtio: number): WebAttribute;

  /**
   * Sets the text zoom ratio of the page. When this attribute is not explicitly called, the default zoom ratio is 100%.
   *
   * @param { number } textZoomRatio - Text zoom percentage for the page. The value **100** indicates the original size,
   *     a value greater than **100** indicates zoom in, and a value less than **100** indicates zoom out.
   *     <br>The value is an integer in the range (0, 2147483647].
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  textZoomRatio(textZoomRatio: number): WebAttribute;

  /**
   * Sets whether to enable the Web SQL Database storage API permission. If this permission is not explicitly called, it
   * is disabled by default.
   *
   * > **NOTE**
   * >
   * > - After the ArkWeb kernel is upgraded to M132, the API's control over the Web SQL Database becomes invalid
   * > because the kernel discards Web SQL. For details about the ArkWeb kernel version, see
   * > [Constraints](docroot://web/web-component-overview.md#constraints).
   *
   * @param { boolean } databaseAccess - Whether to enable Web SQL Database storage API permission.
   *     <br>**true** means enabling the detection, and **false** means disabling it.
   *     <br>If **undefined** or **null** is passed in, the value is **false**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  databaseAccess(databaseAccess: boolean): WebAttribute;

  /**
   * Sets the zoom percentage of the entire page. If this attribute is not explicitly called, the default value is
   * **100**.
   *
   * @param { number } percent - Scale factor of the entire page.
   *     <br>Value range: (0, 1000]
   *     <br>When **undefined** or **null** is passed in, the attribute setting does not take effect.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  initialScale(percent: number): WebAttribute;

  /**
   * Sets the user agent.
   *
   * @param { string } userAgent - User agent to set.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead ohos.web.webview.webview.WebviewController#setCustomUserAgent
   */
  userAgent(userAgent: string): WebAttribute;

  /**
   * Sets whether the **viewport** attribute of the **meta** tag is enabled. When this attribute is not explicitly
   * called, the **viewport** attribute of the **meta** tag is supported by default.
   *
   * > **NOTE**
   * >
   * > - Whether the **viewport** attribute of the **\<meta>** tag in the frontend HTML page is enabled is determined by
   * > checking whether the User-Agent contains the "Mobile" field. When the User-Agent does not contain the "Mobile"
   * > field, the **viewport** attribute in the **\<meta>** tag is disabled by default. In this case, you can explicitly
   * > set the **metaViewport** attribute to **true** to override the disabled state.
   *
   * @param { boolean } enabled - Whether the **viewport** attribute of the **meta** tag is enabled.
   *     <br>The value **true** indicates that the **viewport** attribute of the **meta** tag is enabled and parsed, and
   *     the layout is performed based on the **viewport** attribute.
   *     <br>The value **false** indicates the **viewport** attribute of the **meta** tag is disabled and not parsed,
   *     and the default layout is used.
   *     <br>When **null** or **undefined** is passed in, the value is **true**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  metaViewport(enabled: boolean): WebAttribute;

  /**
   * Triggered when the web page loading is finished. This callback is called only for the main frame content, and not
   * for the iframe or frameset content.
   *
   * @param { function } callback - Callback triggered when the web page loading is complete. [since 8 - 11]
   * @param { Callback<OnPageEndEvent> } callback - Callback triggered when the web page loading is complete. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onPageEnd(callback: Callback<OnPageEndEvent>): WebAttribute;

  /**
   * Triggered to notify the host application that the page loading starts. This method is called once each time the
   * main frame content is loaded. Therefore, for pages that contain iframes or frameset, **onLoadStarted** is called
   * only once for the main frame. This means that when the content of the embedded frame changes, for example, a link
   * or a fragment navigation in the iframe is clicked (navigation to **#fragment_id**), **onLoadStarted** is not
   * invoked.
   *
   * > **NOTE**
   * >
   * > - When the document of the pop-up window is modified by JavaScript before being loaded, **onLoadStarted** is
   * > simulated and the URL is set to null, because displaying the URL that is being loaded may be insecure.
   * > **onPageBegin** will not be simulated.
   *
   * @param { Callback<OnLoadStartedEvent> } callback - Callback triggered when a web page loading starts.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  onLoadStarted(callback: Callback<OnLoadStartedEvent>): WebAttribute;

  /**
   * Triggered to notify the host application that the page has been loaded. This method is called only when the main
   * frame loading is complete. For fragment navigations (navigations to **#fragment_id**), **onLoadFinished** is also
   * triggered.
   *
   * > **NOTE**
   * >
   * > - Fragment navigation also triggers **onLoadFinished**, but **onPageEnd** is not triggered.
   * >
   * > - If the main frame is automatically redirected before the page is fully loaded, **onLoadFinished** is triggered
   * > only once. **onPageEnd** is triggered each time the main frame is navigated.
   * >
   * > - When the document of the pop-up window is modified by JavaScript before being loaded, **onLoadStarted** is
   * > simulated and the URL is set to null, because displaying the URL that is being loaded may be insecure. <b class="
   * > + topic/ph hi-d/b " id="b145733136532">onPageBegin</b> will not be simulated.
   *
   * @param { Callback<OnLoadFinishedEvent> } callback - Callback triggered when the web page loading is complete.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  onLoadFinished(callback: Callback<OnLoadFinishedEvent>): WebAttribute;

  /**
   * Triggered when the web page starts to be loaded. This callback is called only for the main frame content, and not
   * for the iframe or frameset content.
   *
   * @param { function } callback - Callback triggered when a web page loading starts. [since 8 - 11]
   * @param { Callback<OnPageBeginEvent> } callback - Callback triggered when a web page loading starts. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onPageBegin(callback: Callback<OnPageBeginEvent>): WebAttribute;

  /**
   * Triggered when the web page loading progress changes.
   *
   * @param { function } callback - Callback triggered when the page loading progress changes. [since 8 - 11]
   * @param { Callback<OnProgressChangeEvent> } callback - Callback triggered when the page loading progress
   *     changes. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onProgressChange(callback: Callback<OnProgressChangeEvent>): WebAttribute;

  /**
   * Called when the **\<title>** element of the page document changes. If no title is set on the current page, ArkWeb
   * generates a title based on the page URL and returns it to the application before the loading is complete.
   *
   * @param { function } callback - Callback triggered when the document title on the page is changed. [since 8 - 11]
   * @param { Callback<OnTitleReceiveEvent> } callback - Callback triggered when the document title on the page is
   *     changed. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onTitleReceive(callback: Callback<OnTitleReceiveEvent>): WebAttribute;

  /**
   * Triggered to notify the user that the request for obtaining the geolocation information received when
   * [onGeolocationShow]{@link WebAttribute#onGeolocationShow} is called has been canceled.
   *
   * @param { function } callback - Callback invoked when the request for obtaining geolocation information has been
   *     canceled.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onGeolocationHide(callback: () => void): WebAttribute;

  /**
   * Called to notify the user that the geolocation information obtaining request is received. To use this API, the
   * **ohos.permission.LOCATION** and **ohos.permission.APPROXIMATELY_LOCATION** permissions must be configured. This
   * API uses an asynchronous callback to return the result.
   *
   * @param { function } callback - Callback triggered when the geolocation permission is requested, returning the
   *     geolocation information request object. [since 8 - 11]
   * @param { Callback<OnGeolocationShowEvent> } callback - Callback triggered when the geolocation permission is
   *     requested, returning the geolocation information request object. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onGeolocationShow(callback: Callback<OnGeolocationShowEvent>): WebAttribute;

  /**
   * Triggered when the **Web** component obtains the focus. If the **Web** component loads a web page in the unfocused
   * state and successfully obtains the focus, the callback is triggered twice.
   *
   * @param { function } callback - Callback triggered when a web page obtains the focus.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onRequestSelected(callback: () => void): WebAttribute;

  /**
   * Triggered when **alert()** is invoked to display an alert dialog box on the web page. Call the
   * [handleCancel]{@link JsResult#handleCancel} or [handleConfirm]{@link JsResult#handleConfirm} API when this callback
   * is triggered. Otherwise, the render process is blocked.
   *
   * @param { function } callback - Callback used when **alert()** is invoked to display an alert dialog box on the web
   *     page.
   *     <br>Return value: boolean
   *     <br> If the callback returns **true**, the application can use the custom dialog box (allows the confirm and
   *     cancel operations) and invoke the **JsResult** API to notify the **Web** component the confirmation result. If
   *     the callback returns **false**, the processing result of the dialog box is regarded as cancel. [since 8 - 11]
   * @param {  Callback<OnAlertEvent, boolean> } callback - Callback used when **alert()** is invoked to display an
   *     alert dialog box on the web page.
   *     <br>Return value: boolean
   *     <br> If the callback returns **true**, the application can use the custom dialog box (allows the confirm and
   *     cancel operations) and invoke the **JsResult** API to notify the **Web** component the confirmation result. If
   *     the callback returns **false**, the processing result of the dialog box is regarded as cancel. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onAlert(callback: Callback<OnAlertEvent, boolean>): WebAttribute;

  /**
   * Called when the page refresh is about to complete or the current page is closed.
   *
   * > **NOTE**
   * >
   * > - If the current **Web** component does not have the focus, **onBeforeUnload** is not triggered when the page is
   * > refreshed or closed.
   *
   * @param { function } callback - Callback triggered when the page refresh is about to complete or the current page is
   *     closed.
   *     <br>Return value: boolean
   *     <br> If the callback returns **true**, the application can use the custom dialog box (allows the confirm and
   *     cancel operations) and invoke the **JsResult** API to notify the **Web** component whether to exit the current
   *     page based on the user's operation. The value **false** means that the custom dialog box drawn in the function
   *     is ineffective. [since 8 - 11]
   * @param { Callback<OnBeforeUnloadEvent, boolean> } callback - Callback triggered when the page refresh is about to
   *     complete or the current page is closed.
   *     <br>Return value: boolean
   *     <br> If the callback returns **true**, the application can use the custom dialog box (allows the confirm and
   *     cancel operations) and invoke the **JsResult** API to notify the **Web** component whether to exit the current
   *     page based on the user's operation. The value **false** means that the custom dialog box drawn in the function
   *     is ineffective. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onBeforeUnload(callback: Callback<OnBeforeUnloadEvent, boolean>): WebAttribute;

  /**
   * Triggered when **confirm()** is invoked by the web page. Call the [handleCancel]{@link JsResult#handleCancel} or
   * [handleConfirm]{@link JsResult#handleConfirm} API when this callback is triggered. Otherwise, the render process is
   * blocked.
   *
   * @param { function } callback - Callback triggered when **confirm()** is invoked by the web page.
   *     <br>Return value: boolean
   *     <br> If the callback returns **true**, the application can use the custom dialog box (allows the confirm and
   *     cancel operations) and invoke the **JsResult** API to notify the **Web** component the confirmation result. If
   *     the callback returns **false**, the processing result of the dialog box is regarded as cancel. [since 8 - 11]
   * @param { Callback<OnConfirmEvent, boolean> } callback - Callback triggered when **confirm()** is invoked by the web
   *     page.
   *     <br>Return value: boolean
   *     <br> If the callback returns **true**, the application can use the custom dialog box (allows the confirm and
   *     cancel operations) and invoke the **JsResult** API to notify the **Web** component the confirmation result. If
   *     the callback returns **false**, the processing result of the dialog box is regarded as cancel. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onConfirm(callback: Callback<OnConfirmEvent, boolean>): WebAttribute;

  /**
   * Triggered when **prompt()** is invoked by the web page. Call the [handleCancel]{@link JsResult#handleCancel} or
   * [handlePromptConfirm]{@link JsResult#handlePromptConfirm} API when this callback is triggered. Otherwise, the
   * render process is blocked.
   *
   * @param { function } callback - Callback used when **prompt()** is invoked by the web page.
   *     <br>Return value: boolean
   *     <br> If the callback returns **true**, the application can use the custom dialog box (allows the confirm,
   *     cancel, and input operations) and invoke the **JsResult** API to notify the **Web** component the processing
   *     result. If the callback returns **false**, the processing result of the dialog box is regarded as
   *     cancel. [since 9 - 11]
   * @param { Callback<OnPromptEvent, boolean> } callback - Callback used when **prompt()** is invoked by the web page.
   *     <br>Return value: boolean
   *     <br> If the callback returns **true**, the application can use the custom dialog box (allows the confirm,
   *     cancel, and input operations) and invoke the **JsResult** API to notify the **Web** component the processing
   *     result. If the callback returns **false**, the processing result of the dialog box is regarded as
   *     cancel. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onPrompt(callback: Callback<OnPromptEvent, boolean>): WebAttribute;

  /**
   * Triggered to notify the host application of a JavaScript console message.
   *
   * @param { function } callback - Callback used when the web page receives a JavaScript console message.
   *     <br>Return value: boolean
   *     <br> The value **true** means that the message will not be printed to HiLog logs, and **false** means the
   *     opposite. [since 8 - 11]
   * @param {  Callback<OnConsoleEvent, boolean> } callback - Callback used when the web page receives a JavaScript
   *     console message.
   *     <br>Return value: boolean
   *     <br> The value **true** means that the message will not be printed to HiLog logs, and **false** means the
   *     opposite. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onConsole(callback: Callback<OnConsoleEvent, boolean>): WebAttribute;

  /**
   * Triggered when an error occurs during web page loading. The error may occur on the main resource or sub-resource.
   * You can use [isMainFrame]{@link WebResourceRequest#isMainFrame} to determine whether the error occurs on the main
   * resource. For performance reasons, simplify the implementation logic in the callback. This API is called when there
   * is no network connection.
   *
   * @param { function } callback - Callback used when an error occurs during web page loading. [since 8 - 11]
   * @param { Callback<OnErrorReceiveEvent> } callback - Callback used when an error occurs during web page
   *     loading. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onErrorReceive(callback: Callback<OnErrorReceiveEvent>): WebAttribute;

  /**
   * Called when an HTTP error (the response code is greater than or equal to 400) occurs during web page resource
   * loading.
   *
   * @param { function } callback - Callback triggered when an HTTP error occurs during web page resource
   *     loading. [since 8 - 11]
   * @param { Callback<OnHttpErrorReceiveEvent> } callback - Callback triggered when an HTTP error occurs during web
   *     page resource loading. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onHttpErrorReceive(callback: Callback<OnHttpErrorReceiveEvent>): WebAttribute;

  /**
   * Triggered to instruct the main application to start downloading a file.
   *
   * @param { function } callback - Callback used when a download starts. [since 8 - 11]
   * @param { Callback<OnDownloadStartEvent> } callback - Callback used when a download starts. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onDownloadStart(callback: Callback<OnDownloadStartEvent>): WebAttribute;

  /**
   * Triggered for the application to update its access history when the navigation is complete.
   *
   * @param { function } callback - Callback triggered when the navigation is complete. [since 8 - 11]
   * @param { Callback<OnRefreshAccessedHistoryEvent> } callback - Callback triggered when the navigation is
   *     complete. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onRefreshAccessedHistory(callback: Callback<OnRefreshAccessedHistoryEvent>): WebAttribute;

  /**
   * Triggered when the **Web** component is about to access a URL. This API is used to determine whether to block the
   * access.
   *
   * @param { function } callback - URL information.
   *     <br>The return value is of the Boolean type. If **true** is returned, the access is blocked. Otherwise, the
   *     access is allowed.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead ohos.web.WebAttribute#onLoadIntercept
   */
  onUrlLoadIntercept(callback: (event?: { data: string | WebResourceRequest }) => boolean): WebAttribute;

  /**
   * Triggered when an SSL error occurs during resource loading.
   *
   * @param { function } callback - Callback triggered when a web page detects an SSL error.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.WebAttribute#onSslErrorEventReceive
   */
  onSslErrorReceive(callback: (event?: { handler: Function, error: object }) => void): WebAttribute;

  /**
   * Triggered when the rendering process exits abnormally.
   *
   * A rendering process may be shared by multiple **Web** components. Each affected **Web** component triggers this
   * callback.
   *
   * You can call the bound **webviewController** APIs to restore the web page when this callback is triggered. For
   * example, [refresh]{@link @ohos.web.webview:webview.WebviewController#refresh()} and
   * [loadUrl]{@link @ohos.web.webview:webview.WebviewController#loadUrl}.
   *
   * For details about the component lifecycle, see
   * [Lifecycle of the Web Components](docroot://web/web-event-sequence.md).
   *
   * @param { Callback<OnRenderExitedEvent> } callback - Callback triggered when the rendering process exits
   *     abnormally. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onRenderExited(callback: Callback<OnRenderExitedEvent>): WebAttribute;

  /**
   * Triggered to process an HTML form whose input type is **file**. If this function is not called or returns
   * **false**, the **Web** component provides the default **Select file** UI. If it returns **true**, the application
   * can customize the response behavior for **Select file**.
   *
   * @param { function } callback - Callback triggered to notify the **Web** component of the file selection result.
   *     <br>Return value: boolean
   *     <br> The value **true** means that you can invoke the system-provided dialog box. The value **false** means
   *     that the custom dialog box drawn in the function is ineffective. [since 9 - 11]
   * @param { Callback<OnShowFileSelectorEvent, boolean> } callback - Callback triggered to notify the **Web** component
   *     of the file selection result.
   *     <br>Return value: boolean
   *     <br> The value **true** means that you can invoke the system-provided dialog box. The value **false** means
   *     that the custom dialog box drawn in the function is ineffective. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onShowFileSelector(callback: Callback<OnShowFileSelectorEvent, boolean>): WebAttribute;

  /**
   * Triggered when the rendering process exits due to an error or crash.
   *
   * A rendering process may be shared by multiple **Web** components. Each affected **Web** component triggers this
   * callback.
   *
   * You can call the bound **WebViewController** APIs to restore the web page when this callback is triggered. For
   * example, [refresh]{@link @ohos.web.webview:webview.WebviewController#refresh()} and
   * [loadUrl]{@link @ohos.web.webview:webview.WebviewController#loadUrl}.
   *
   * For details, see [Lifecycle of the Web Component](docroot://web/web-event-sequence.md).
   *
   * @param { function } callback - Callback triggered when the rendering process exits abnormally.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.WebAttribute#onRenderExited
   */
  onRenderExited(callback: (event?: { detail: object }) => boolean): WebAttribute;

  /**
   * Triggered to process an HTML form whose input type is **file**, in response to the tapping of the **Select File**
   * button.
   *
   * @param { function } callback - Callback to be executed when the file selector is triggered.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.WebAttribute#onShowFileSelector
   */
  onFileSelectorShow(callback: (event?: { callback: Function, fileSelector: object }) => void): WebAttribute;

  /**
   * Triggered to notify the **Web** component of the URL of the resource file to load.
   *
   * @param { function } callback - Callback triggered when a URL is loaded. [since 9 - 11]
   * @param { Callback<OnResourceLoadEvent> } callback - Callback triggered when a URL is loaded. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onResourceLoad(callback: Callback<OnResourceLoadEvent>): WebAttribute;

  /**
   * Triggered when the **Web** component exits full screen mode.
   *
   * @param { function } callback - Callback invoked when the component exits full screen mode.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onFullScreenExit(callback: () => void): WebAttribute;

  /**
   * Triggered when the **Web** component enters full screen mode.
   *
   * @param { OnFullScreenEnterCallback } callback - Callback invoked when the **Web** component enters full screen
   *     mode.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onFullScreenEnter(callback: OnFullScreenEnterCallback): WebAttribute;

  /**
   * Called when the page display scale changes.
   *
   * @param { function } callback - Callback triggered when the page display scale changes. [since 9 - 11]
   * @param { Callback<OnScaleChangeEvent> } callback - Callback triggered when the page display scale
   *     changes. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onScaleChange(callback: Callback<OnScaleChangeEvent>): WebAttribute;

  /**
   * Triggered when an HTTP authentication request is received.
   *
   * @param { function } callback - Callback invoked when the browser requires user credentials.
   *     <br>Return value: boolean
   *     <br> The value **true** means that the HTTP authentication is successful, and **false** means the
   *     opposite. [since 9 - 11]
   * @param { Callback<OnHttpAuthRequestEvent, boolean> } callback - Callback invoked when the browser requires user
   *     credentials.
   *     <br>Return value: boolean
   *     <br> The value **true** means that the HTTP authentication is successful, and **false** means the
   *     opposite. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onHttpAuthRequest(callback: Callback<OnHttpAuthRequestEvent, boolean>): WebAttribute;

  /**
   * Triggered when the **Web** component is about to access a URL. This API is used to block the URL and return the
   * response data. The **onInterceptRequest** API can intercept all redirection requests and return response data, but
   * cannot access POST request body content and obtain buffer data. In this scenario, use
   * [WebSchemeHandler]{@link @ohos.web.webview:webview.WebSchemeHandler} based on service requirements.
   *
   * @param { function } callback - Callback invoked when the **Web** component is about to load a URL.
   *     <br>The return value is [WebResourceResponse]{@link ./web}. If response data is returned, the data is loaded
   *     based on the response data. If no response data is returned, null is returned, indicating that the data is
   *     loaded in the original mode. [since 9 - 11]
   * @param { Callback<OnInterceptRequestEvent, WebResourceResponse> } callback - Callback invoked when the **Web**
   *     component is about to load a URL.
   *     <br>The return value is [WebResourceResponse]{@link ./web}. If response data is returned, the data is loaded
   *     based on the response data. If no response data is returned, null is returned, indicating that the data is
   *     loaded in the original mode. [since 12]
   * @returns { WebAttribute } If the response value is null, the Web will continue to load the resources.
   *     Otherwise, the response value will be used
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onInterceptRequest(callback: Callback<OnInterceptRequestEvent, WebResourceResponse>): WebAttribute;

  /**
   * Triggered when a permission request is received. To call this API, you need to declare the
   * **ohos.permission.CAMERA** and **ohos.permission.MICROPHONE** permissions.
   *
   * @param { Callback<OnPermissionRequestEvent> } callback - Callback invoked when a permission request is received.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  onPermissionRequest(callback: Callback<OnPermissionRequestEvent>): WebAttribute;

  /**
   * Triggered when a screen capture request is received.
   *
   * @param { Callback<OnScreenCaptureRequestEvent> } callback - Callback invoked when a screen capture request is
   *     received.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onScreenCaptureRequest(callback: Callback<OnScreenCaptureRequestEvent>): WebAttribute;

  /**
   * Triggered when a context menu is displayed after the user clicks the right mouse button or long presses a specific
   * element, such as an image or a link.
   *
   * @param { function } callback - Callback invoked during a call to allow for the display of a custom context menu.
   *     <br>Return value: boolean
   *     <br> The value **true** means that a custom menu is triggered, and **false** means that the custom menu is
   *     ineffective. [since 9 - 11]
   * @param { Callback<OnContextMenuShowEvent, boolean> } callback - Callback invoked during a call to allow for the
   *     display of a custom context menu.
   *     <br>Return value: boolean
   *     <br> The value **true** means that a custom menu is triggered, and **false** means that the custom menu is
   *     ineffective. [since 12]
   * @returns { WebAttribute } If custom display return true.Otherwise, default display return false.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onContextMenuShow(callback: Callback<OnContextMenuShowEvent, boolean>): WebAttribute;

  /**
   * Triggered when a context menu is hidden after the user clicks the right mouse button or long presses a specific
   * element, such as an image or a link.
   *
   * @param { OnContextMenuHideCallback } callback - Callback related to menus.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  onContextMenuHide(callback: OnContextMenuHideCallback): WebAttribute;

  /**
   * Sets whether autoplay of audible videos requires a user tap. Muted video playback is not affected by this API. If
   * this attribute is not explicitly set, a user tap is required by default.
   *
   * @param { boolean } access - Whether the autoplay of videos with audio requires a user tap.
   *     <br>The value **true** indicates that a user tap is required, and **false** indicates that the video can be
   *     autoplayed.
   *     <br>If **undefined** or **null** is passed, the value is **false**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  mediaPlayGestureAccess(access: boolean): WebAttribute;

  /**
   * Triggered to notify the caller of the search result on the web page.
   *
   * @param { function } callback - Callback invoked to notify the caller of the search result on the web
   *     page. [since 9 - 11]
   * @param { Callback<OnSearchResultReceiveEvent> } callback - Callback invoked to notify the caller of the search
   *     result on the web page. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onSearchResultReceive(callback: Callback<OnSearchResultReceiveEvent>): WebAttribute;

  /**
   * Triggered to notify the global scrolling position of the web page.
   *
   * > **NOTE**
   * >
   * > The change of the partial scrolling position cannot trigger this callback.
   * >
   * > To determine whether a page is globally scrolled, print **window.pagYOffset** or **window.pagXOffset** before and
   * > after scrolling.
   * >
   * > If the web page is scrolled globally, the value of **window.pagYOffset** or **window.pagXOffset** changes after
   * > the web page is scrolled. Otherwise, the value does not change.
   *
   * @param { function } callback - Callback triggered when the page is scrolled to a specified position. [since 9 - 11]
   * @param { Callback<OnScrollEvent> } callback - Callback triggered when the page is scrolled to a specified
   *     position. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onScroll(callback: Callback<OnScrollEvent>): WebAttribute;

  /**
   * Triggered to notify the host application when an SSL error occurs while loading the main-frame resource.
   *
   * To support errors for loading subframe resources, use the [OnSslErrorEvent]{@link WebAttribute#onSslErrorEvent}
   * API.
   *
   * > **NOTE**
   * >
   * > - Main resource: Entry file for the browser to load web pages, which is usually an HTML document.
   * >
   * > - Subresource: Dependency file referenced by the main resource, which is loaded when a specific tag is
   * > encountered during main resource parsing.
   * >
   * > - The application needs to call [handler.handleCancel()]{@link SslErrorHandler#handleCancel()} or
   * > [handler.handleConfirm()]{@link SslErrorHandler#handleConfirm} to process the callback. Otherwise, resource
   * > loading is canceled by default. The behavior of **handleConfirm()** or **handleCancel()** may be recorded to
   * > respond to future SSL errors.
   * >
   * > - The application can display a custom error page or silently record the problem.
   *
   * @param { function } callback - Callback invoked when the web page receives an SSL error. [since 9 - 11]
   * @param { Callback<OnSslErrorEventReceiveEvent> } callback - Callback invoked when the web page receives an SSL
   *     error. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onSslErrorEventReceive(callback: Callback<OnSslErrorEventReceiveEvent>): WebAttribute;

  /**
   * Triggered to notify users when an SSL error occurs during the loading of main-frame or subframe resources. To
   * handle SSL errors for loading the main-frame resources, use the [isMainFrame]{@link WebResourceRequest#isMainFrame}
   * field to distinguish.
   *
   * > **NOTE**
   * >
   * > - Main resource: Entry file for the browser to load web pages, which is usually an HTML document.
   * >
   * > - Subresource: Dependency file referenced by the main resource, which is loaded when a specific tag is
   * > encountered during main resource parsing.
   *
   * @param { OnSslErrorEventCallback } callback - Callback invoked when an SSL error occurs during resource loading.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  onSslErrorEvent(callback: OnSslErrorEventCallback): WebAttribute;

  /**
   * Triggered when an SSL client certificate request is received.
   *
   * > **NOTE**
   * >
   * > - The **Web** component can respond with
   * > [ClientAuthenticationHandler.confirm]{@link ClientAuthenticationHandler#confirm(authUri: string)},
   * > [ClientAuthenticationHandler.cancel]{@link ClientAuthenticationHandler#cancel}, or
   * > [ClientAuthenticationHandler.ignore]{@link ClientAuthenticationHandler#ignore}.
   * >
   * > - If **ClientAuthenticationHandler.confirm** or **ClientAuthenticationHandler.cancel** is called, the **Web**
   * > component stores the authentication result in the memory (within the application lifecycle) and does not call
   * > **onClientAuthenticationRequest()** again for the same host and port. If **onClientAuthenticationRequest.ignore**
   * > is called, the **Web** component does not store the authentication result.
   *
   * @param { function } callback - Callback invoked when an SSL client certificate is required. [since 9 - 11]
   * @param { Callback<OnClientAuthenticationEvent> } callback - Callback invoked when an SSL client certificate is
   *     required. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onClientAuthenticationRequest(callback: Callback<OnClientAuthenticationEvent>): WebAttribute;

  /**
   * Triggered to notify the user of PIN verification. This API uses an asynchronous callback to return the result.
   *
   * @param { OnVerifyPinCallback } callback - Callback triggered to notify the user of PIN authentication.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  onVerifyPin(callback: OnVerifyPinCallback): WebAttribute;

  /**
   * Triggered to notify the user of a new window creation request, when **multiWindowAccess** is enabled.
   *
   * If the [setWebController]{@link ControllerHandler#setWebController} API is not called, the render process will be
   * blocked.
   *
   * If no new window is created, set this parameter to **null** when invoking the
   * [setWebController]{@link ControllerHandler#setWebController} API to notify the **Web** component that no new window
   * is created.
   *
   * The new window cannot be directly overlaid on the original **Web** component, and its URL (for example, address bar
   * ) must be clearly displayed in the same way as the main page to prevent confusion. If visible management of trusted
   * URLs cannot be implemented, consider prohibiting the creation of new windows.
   *
   * Note that the source of a new window request cannot be reliably traced. The request may be initiated by a third-
   * party iframe. By default, the application needs to take defense measures such as sandbox isolation and permission
   * restriction to ensure security.
   *
   * @param {  Callback<OnWindowNewEvent> } callback - Callback invoked when the web page requests the user to create a
   *     window. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onWindowNew(callback: Callback<OnWindowNewEvent>): WebAttribute;

  /**
   * Triggered to notify the user of a new window creation request when
   * [multiWindowAccess]{@link WebAttribute#multiWindowAccess} is enabled.
   *
   * > **NOTE**
   * >
   * > - If the [setWebController]{@link ControllerHandler#setWebController} API is not called, the render process will
   * > be blocked.
   * >
   * > - If no new window is created, the [setWebController]{@link ControllerHandler#setWebController} API is called and
   * > set to **null**, notifying the web page that no new window is created.
   * >
   * > - The new window cannot be directly overlaid on the original **Web** component, and its URL (for example, address
   * > bar) must be clearly displayed in the same way as the main page to prevent confusion. If the URL display and
   * > verification mechanism cannot be ensured to be reliable, you need to disable the creation of new windows.
   * >
   * > - The source of a new window request cannot be reliably traced. The request may be initiated by a third-party
   * > iframe. By default, the application needs to take defense measures such as sandbox isolation and permission
   * > restriction to ensure security.
   *
   * @param {  Callback<OnWindowNewExtEvent> } callback - Callback invoked when the web page requests the user to create
   *     a window.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 23 dynamic
   */
  onWindowNewExt(callback: Callback<OnWindowNewExtEvent>): WebAttribute;

  /**
   * Triggered when this window is closed. This API works in the same way as
   * [onWindowNew]{@link WebAttribute#onWindowNew}. For security, applications should notify users that the pages they
   * interact with are closed.
   *
   * @param { function } callback - Callback invoked when the window is closed.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onWindowExit(callback: () => void): WebAttribute;

  /**
   * Sets whether to enable the multi-window permission. If this attribute is not explicitly called, the permission is
   * disabled by default.
   *
   * Enabling the multi-window permission requires implementation of the **onWindowNew** event. For the sample code, see
   * [onWindowNew]{@link WebAttribute#onWindowNew}.
   *
   * @param { boolean } multiWindow - Whether to enable the multi-window permission.
   *     <br>The value **true** means to enable, and **false** means the opposite.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  multiWindowAccess(multiWindow: boolean): WebAttribute;

  /**
   * Triggered when the key event is intercepted and before it is consumed by the webview.
   *
   * @param { function } callback - Key event that is triggered.
   *     <br>The return value is of the Boolean type. The value **true** means to pass the **KeyEvent** to the web
   *     kernel, and **false** means the opposite.
   * @returns { WebAttribute } True if the application consumes key events else false.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onInterceptKeyEvent(callback: (event: KeyEvent) => boolean): WebAttribute;

  /**
   * Sets the standard font family of the web page to render HTML elements whose font style is not specified.
   *
   * When this attribute is not explicitly called, the default standard font family of the web page is **sans-serif**.
   *
   * @param { string } family - Standard font family to set.
   *     <br>When **null** or **undefined** is passed in, the sans-serif font family is **sans-serif**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  webStandardFont(family: string): WebAttribute;

  /**
   * Sets the serif font family of the web page to render HTML elements that use the **serif** font.
   *
   * When this attribute is not explicitly called, the default serif font family of the web page is **serif**.
   *
   * @param { string } family - Serif font family to set.
   *     <br>When **null** or **undefined** is passed in, the sans-serif font family is **serif**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  webSerifFont(family: string): WebAttribute;

  /**
   * Sets the sans-serif font family of the web page to render HTML elements that use the **sans-serif** font.
   *
   * When this attribute is not explicitly called, the sans-serif font family of the web page is **sans-serif** by
   * default.
   *
   * @param { string } family - Sans-serif font family to set.
   *     <br>When **null** or **undefined** is passed in, the sans-serif font family is **sans-serif**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  webSansSerifFont(family: string): WebAttribute;

  /**
   * Sets the fixed font family of the web page to render HTML elements that use the **monospace** font.
   *
   * When this attribute is not explicitly called, the default fixed font family of the web page is **monospace**.
   *
   * @param { string } family - Fixed font family for web pages. The value is a font name string, for example, "
   *     monospace" or "Arial".
   *     <br>The value **monospace** is used when null or undefined is passed.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  webFixedFont(family: string): WebAttribute;

  /**
   * Sets the fantasy font family of the web page to render HTML elements that use the **fantasy** font.
   *
   * When this attribute is not explicitly called, the default fantasy font family of the web page is **fantasy**.
   *
   * @param { string } family - Fantasy font family to set.
   *     <br>When **null** or **undefined** is passed in, the value is **fantasy**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  webFantasyFont(family: string): WebAttribute;

  /**
   * Sets the cursive font family of the web page to render HTML elements that use the **cursive** font.
   *
   * When this attribute is not explicitly called, the default cursive font family of the web page is **cursive**.
   *
   * @param { string } family - Cursive font family to set.
   *     <br>When **null** or **undefined** is passed in, the value is **cursive**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  webCursiveFont(family: string): WebAttribute;

  /**
   * Sets the default fixed font size for the web page. For HTML elements that use the **monospace** font and do not
   * specify **font-size**, the font size is rendered based on this value.
   *
   * When this attribute is not explicitly called, the default fixed font size is **13**.
   *
   * @param { number } size - Default fixed font size to set, in px.
   *     <br>Value range: [-2^31, 2^31-1]. In actual rendering, values greater than 72 px are handled as 72 px, and
   *     values less than 1 px are handled as 1 px.
   *     <br>When **null** or **undefined** is passed in, the value is **13**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  defaultFixedFontSize(size: number): WebAttribute;

  /**
   * Sets the default font size for the web page. For HTML elements that use non-monospace fonts and do not specify
   * **font-size**, the font size is rendered based on this value.
   *
   * When this attribute is not explicitly called, the default font size of the web page is **16**.
   *
   * @param { number } size - Default font size to set, in px.
   *     <br>Value range: [-2^31, 2^31-1]. In actual rendering, values greater than 72 px are handled as 72 px, and
   *     values less than 1 px are handled as 1 px.
   *     <br>When **null** or **undefined** is passed in, the value is **16**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  defaultFontSize(size: number): WebAttribute;

  /**
   * Sets the minimum font size for the web page. If the font size of HTML elements is smaller than the value set by
   * this API, the font size is rendered based on the value set by this API.
   *
   * When no attribute is explicitly called, the default minimum font size of the web page is **8**.
   *
   * @param { number } size - Minimum font size to set, in px.
   *     <br>Value range: [-2^31, 2^31-1]. In actual rendering, values greater than 72 px are handled as 72 px, and
   *     values less than 1 px are handled as 1 px.
   *     <br>When **null** or **undefined** is passed in, the value is **8**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  minFontSize(size: number): WebAttribute;

  /**
   * Sets the minimum logical font size for the web page.
   *
   * For HTML elements whose font size is not specified:
   *
   * 1. If the font size of the element is smaller than the value set by this API, the font size is rendered based on the API value.
   * 2. If **minLogicalFontSize** and **minFontSize** are both set, the larger value of the two will be used for elements whose font size is not specified.
   *
   * When this attribute is not explicitly called, the default minimum logical font size of the web page is **8**.
   *
   * @param { number } size - Sets the minimum logical font size for web pages, in px.
   *     <br>The value ranges from [-2^31, 2^31-1]. During actual rendering, values greater than 72 px are rendered as 7
   *     2 px, and values less than 1 px are rendered as 1 px.
   *     <br>Defaults to 8 when null or undefined is passed in.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  minLogicalFontSize(size: number): WebAttribute;

  /**
   * Sets the default text encoding format for the web page. When this attribute is not explicitly called, the default
   * text encoding format of the web page is UTF-8.
   *
   * @param { string } textEncodingFormat - Default text encoding format.
   *     <br>When **null** or **undefined** is passed in, the value is **UTF-8**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  defaultTextEncodingFormat(textEncodingFormat: string): WebAttribute;

  /**
   * Sets whether the scroll bar is always visible. Under the always-visible settings, when the page size exceeds one
   * page, the scroll bar appears and remains visible. When this attribute is not explicitly called, the scroll bar is
   * not always visible by default.
   *
   * When **layoutMode** is set to **WebLayoutMode.FIT_CONTENT**, the **enabled** parameter is set to **false**.
   *
   * > **NOTE**
   * >
   * > - This interface takes effect globally across all web components in the current application. When multiple web
   * > components are set with different values, the value set for the first time will be used.
   * >
   * > - It is recommended that you use
   * > [setScrollbarMode]{@link @ohos.web.webview:webview.WebviewController#setScrollbarMode()} to set the scrollbar
   * > mode for all web components currently applied. If the setScrollbarMode interface is invoked at the same time,
   * > the setting of the forceDisplayScrollBar interface does not take effect.
   *
   * @param { boolean } enabled - Whether the scroll bar is always displayed.
   *     <br>The value **true** indicates that the scroll bar is always displayed, and **false** indicates the opposite.
   *     <br>When layoutMode is set to WebLayoutMode.FIT_CONTENT, the enabled parameter is forcibly set to **false**,
   *     and setting it to **true** does not take effect.
   *     <br>If **undefined** or **null** is passed in, the attribute setting does not take effect.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 14 dynamic
   */
  forceDisplayScrollBar(enabled: boolean): WebAttribute;

  /**
   * Sets whether to block online downloads. When this attribute is not explicitly called, online resources can be
   * loaded by default.
   *
   * @param { boolean } block - Whether to allow online downloads.
   *     <br>The value **true** means to block online downloads, and **false** means the opposite.
   *     <br>If **undefined** or **null** is passed in, the value is **false**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  blockNetwork(block: boolean): WebAttribute;

  /**
   * Sets whether to display the horizontal scrollbar, including the system default scrollbar and user-defined
   * scrollbars. If this attribute is not explicitly called, the scrollbar is displayed by default.
   *
   * > **NOTE**
   * >
   * > - If an [@State](docroot://ui/state-management/arkts-state.md) decorated variable is used to control the
   * > visibility of the horizontal scrollbar,
   * > [controller.refresh()]{@link @ohos.web.webview:webview.WebviewController#refresh()} must be called for the
   * > settings to take effect.
   * >
   * > - When the [@State](docroot://ui/state-management/arkts-state.md) decorated variable changes frequently and
   * > dynamically, it is recommended to maintain a one-to-one correspondence between the toggle variable and the
   * > **Web** component.
   *
   * @param { boolean } horizontalScrollBar - Sets whether to display the horizontal scrollbar.
   *     <br>The value **true** indicates to display it, and **false** indicates not to display it.
   *     <br>The default value is **false** when undefined or null is passed.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  horizontalScrollBarAccess(horizontalScrollBar: boolean): WebAttribute;

  /**
   * Sets whether to display the vertical scrollbar, including the system default scrollbar and user-defined scrollbars.
   * If this attribute is not explicitly called, the scrollbar is displayed by default.
   *
   * > **NOTE**
   * >
   * > - If an @State decorated variable is used to control the vertical scrollbar visibility, **controller.refresh()**
   * > must be called for the settings to take effect.
   * >
   * > - If the vertical scrollbar visibility changes frequently through an @State decorated variable, it is recommended
   * > that the variable correspond to the **Web** component one by one.
   *
   * @param { boolean } verticalScrollBar - Whether to display the vertical scrollbar.
   *     <br>The value **true** means to display, and **false** means not to display.
   *     <br>The default value is **false** when undefined or null is passed in.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  verticalScrollBarAccess(verticalScrollBar: boolean): WebAttribute;

  /**
   * Triggered when an apple-touch-icon URL is received.
   *
   * @param { function } callback - Callback invoked when an apple-touch-icon URL is received. [since 9 - 11]
   * @param { Callback<OnTouchIconUrlReceivedEvent> } callback - Callback invoked when an apple-touch-icon URL is
   *     received. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onTouchIconUrlReceived(callback: Callback<OnTouchIconUrlReceivedEvent>): WebAttribute;

  /**
   * Triggered when this web page receives a new favicon.
   *
   * @param { function } callback - Callback invoked when the current web page receives a new favicon. [since 9 - 11]
   * @param { Callback<OnFaviconReceivedEvent> } callback - Callback invoked when the current web page receives a new
   *     favicon. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onFaviconReceived(callback: Callback<OnFaviconReceivedEvent>): WebAttribute;

  /**
   * Triggered when the old page is not displayed and the new page is about to be visible.
   *
   * @param {  Callback<OnPageVisibleEvent> } callback - Callback invoked when the old page is not displayed and the new
   *     page is about to be visible. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onPageVisible(callback: Callback<OnPageVisibleEvent>): WebAttribute;

  /**
   * Triggered when the web form data can be resubmitted.
   *
   * @param { function } callback - Callback invoked when the web form data can be resubmitted. [since 9 - 11]
   * @param { Callback<OnDataResubmittedEvent> } callback - Callback invoked when the web form data can be
   *     resubmitted. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onDataResubmitted(callback: Callback<OnDataResubmittedEvent>): WebAttribute;

  /**
   * Sets whether to enable pinch smooth mode for the web page. When this attribute is not explicitly called, pinch
   * smooth mode is disabled by default.
   *
   * @param { boolean } isEnabled - Whether to enable pinch smooth mode for the web page.
   *     <br>The value **true** means to enable pinch smooth mode, and **false** means the opposite.
   *     <br>If **undefined** or **null** is passed in, the value is **false**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  pinchSmooth(isEnabled: boolean): WebAttribute;

  /**
   * Sets whether to allow a new window to automatically open through JavaScript.
   *
   * > **NOTE**
   * >
   * > - This API takes effect only when [javaScriptAccess]{@link WebAttribute#javaScriptAccess} is enabled.
   * >
   * > - This API opens a new window when [multiWindowAccess]{@link WebAttribute#multiWindowAccess} is enabled, and a
   * > local window when it is disabled.
   * >
   * > - The default value of **flag** is subject to the settings of the **persist.web.allowWindowOpenMethod.enabled**
   * > system attribute. If this attribute is not set, the default value of **flag** is **false**.
   * >
   * > - Run the **hdc shell param get persist.web.allowWindowOpenMethod.enabled** command to check whether the system
   * > attribute **persist.web.allowWindowOpenMethod.enabled** is enabled. If the attribute value is **1**, the system
   * > attribute is enabled. If the attribute value is **0** or does not exist, the system attribute is disabled. You
   * > can run the **hdc shell param set persist.web.allowWindowOpenMethod.enabled 1** command to enable the system
   * > attribute.
   *
   * @param { boolean } flag -
   *     <br>Whether to allow a new window to automatically open through JavaScript. The value **true** means to allow a
   *     new window to automatically open through JavaScript, and **false** means only to allow a new window to
   *     automatically open through JavaScript using user behaviors.
   *     <br>The user behavior here refers to a user requests to open a new window (**window.open**) within 5 seconds
   *     after operating the **Web** component.
   *     <br>The default value of **flag** is subject to the settings of the
   *     **persist.web.allowWindowOpenMethod.enabled** system attribute. If this attribute is set to **true**, the
   *     default value of **flag** is **true**. If this attribute is not set, the default value of **flag** is
   *     **false**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  allowWindowOpenMethod(flag : boolean): WebAttribute;

  /**
   * Triggered when the audio playback status on the web page changes.
   *
   * @param { Callback<OnAudioStateChangedEvent> } callback - Callback invoked when the audio playback status on the web
   *     page changes.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onAudioStateChanged(callback: Callback<OnAudioStateChangedEvent>): WebAttribute;

  /**
   * Triggered when the first content paint occurs on the web page.
   *
   * @param { function } callback - Callback invoked when the first content paint occurs on the web page. [since 10 - 11]
   * @param { Callback<OnFirstContentfulPaintEvent> } callback - Callback invoked when the first content paint occurs on
   *     the web page. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onFirstContentfulPaint(callback: Callback<OnFirstContentfulPaintEvent>): WebAttribute;

  /**
   * Triggered when the first meaningful paint occurs on the web page.
   *
   * @param { OnFirstMeaningfulPaintCallback } callback - Callback invoked when the First Meaningful Paint occurs on the
   *     web page.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onFirstMeaningfulPaint(callback: OnFirstMeaningfulPaintCallback): WebAttribute;

  /**
   * Triggered when the largest content paint occurs on the web page.
   *
   * @param { OnLargestContentfulPaintCallback } callback - Callback invoked when the largest content paint occurs on
   *     the web page.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onLargestContentfulPaint(callback: OnLargestContentfulPaintCallback): WebAttribute;

  /**
   * Triggered when the **Web** component is about to access a URL. This API is used to determine whether to block the
   * access.
   *
   * @param { function } callback - Callback triggered when a navigation (including iframe navigation) occurs, allowing
   *     the application to approve or cancel it.
   *     <br>The return value is of the Boolean type. The value **true** means to cancel the navigation, and **false**
   *     means the opposite.
   *     <br>If **undefined** or **null** is returned, the value is **false**. [since 10 - 11]
   * @param { Callback<OnLoadInterceptEvent, boolean> } callback - Callback triggered when a navigation (including
   *     iframe navigation) occurs, allowing the application to approve or cancel it.
   *     <br>The return value is of the Boolean type. The value **true** means to cancel the navigation, and **false**
   *     means the opposite.
   *     <br>If **undefined** or **null** is returned, the value is **false**. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onLoadIntercept(callback: Callback<OnLoadInterceptEvent, boolean>): WebAttribute;

  /**
   * Triggered when the controller is successfully bound to the **Web** component. The controller must be
   * **WebviewController**. Do not call APIs related to the **Web** component before this callback event. Otherwise, a
   * js-error exception will be thrown.
   *
   * The web page has not been loaded when the callback is called. Therefore, APIs related to web page operations, such
   * as [zoomIn]{@link @ohos.web.webview:webview.WebviewController#zoomIn},
   * [zoomOut]{@link @ohos.web.webview:webview.WebviewController#zoomOut}, cannot be used in the callback. You can use
   * APIs irrelevant to web page operations, such as
   * [loadUrl]{@link @ohos.web.webview:webview.WebviewController#loadUrl},
   * [getWebId]{@link @ohos.web.webview:webview.WebviewController#getWebId}.
   *
   * For details about the component lifecycle, see
   * [Lifecycle of the Web Component](docroot://web/web-event-sequence.md).
   *
   * @param { function } callback - Callback invoked when the ArkWeb controller is successfully initialized.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onControllerAttached(callback: () => void): WebAttribute;

  /**
   * Triggered when the web page is overscrolled. It is used to notify the application of the overscroll offset.
   *
   * @param { function } callback - Callback invoked when the web page is overscrolled. [since 10 - 11]
   * @param { Callback<OnOverScrollEvent> } callback - Callback invoked when the web page is overscrolled. [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onOverScroll(callback: Callback<OnOverScrollEvent>): WebAttribute;

  /**
   * Called to notify the user that the PDF page has been scrolled to the bottom.
   *
   * @param { Callback<OnPdfScrollEvent> } callback - Callback triggered to notify the user that the PDF page has been
   *     scrolled to the bottom.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  onPdfScrollAtBottom(callback: Callback<OnPdfScrollEvent>): WebAttribute;

  /**
   * Called to notify the user of whether the PDF page is successfully loaded.
   *
   * @param { Callback<OnPdfLoadEvent> } callback - Callback triggered to notify users of whether the PDF page is
   *     successfully loaded.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  onPdfLoadEvent(callback: Callback<OnPdfLoadEvent>): WebAttribute;

  /**
   * Called when the safe browsing check result is received.
   *
   * @param { OnSafeBrowsingCheckResultCallback } callback - Callback invoked when the safe browsing check result is
   *     received.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  onSafeBrowsingCheckResult(callback: OnSafeBrowsingCheckResultCallback): WebAttribute;

  /**
   * Called when the safe browsing check is complete.
   *
   * @param { OnSafeBrowsingCheckResultCallback } callback - Callback invoked when the safe browsing check result is
   *     received.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  onSafeBrowsingCheckFinish(callback: OnSafeBrowsingCheckResultCallback): WebAttribute;

  /**
   * Triggered when a web page redirection request is submitted.
   *
   * @param { OnNavigationEntryCommittedCallback } callback - Callback invoked when a web page redirection request is
   *     submitted.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  onNavigationEntryCommitted(callback: OnNavigationEntryCommittedCallback): WebAttribute;

  /**
   * Triggered when the intelligent tracking prevention feature is enabled and the tracker cookie is blocked.
   *
   * @param { OnIntelligentTrackingPreventionCallback } callback - Callback invoked when the intelligent tracking
   *     prevention feature is enabled and the tracker cookie is blocked.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onIntelligentTrackingPreventionResult(callback: OnIntelligentTrackingPreventionCallback): WebAttribute;

  /**
   * Injects a JavaScript script into the **Web** component. When the specified page or document starts to be loaded,
   * the script is executed on any page whose source matches **scriptRules**. When this attribute is not explicitly
   * called, JavaScript scripts are not injected into the **Web** component by default.
   *
   * > **NOTE**
   * >
   * > - The script is injected after the root element (HTML Element) of the web document is created but before any
   * > other content is loaded.
   * >
   * > - The scripts are executed in lexicographic order, not in the order of the array. If the original array order is
   * > required, use the [runJavaScriptOnDocumentStart]{@link WebAttribute#runJavaScriptOnDocumentStart} API instead.
   * >
   * > - When scripts with identical content are injected multiple times, they are silently deduplicated without display
   * > or notification, and the **scriptRules** from the first injection are used.
   * >
   * > - This API does not support [UrlRegexRule]{@link UrlRegexRule}.
   * >
   * > - You are advised to use [runJavaScriptOnDocumentStart]{@link WebAttribute#runJavaScriptOnDocumentStart} instead.
   *
   * @param { Array<ScriptItem> } scripts - Script item array to be injected.
   *     <br>When **undefined** or **null** is passed in, JavaScript scripts are not injected into **Web** components.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  javaScriptOnDocumentStart(scripts: Array<ScriptItem>): WebAttribute;

  /**
   * Injects a JavaScript script into the **Web** component. When the specified page or document has been loaded, the
   * script is executed on any page whose source matches **scriptRules**. When this attribute is not explicitly called,
   * JavaScript scripts are not injected into the **Web** component by default.
   *
   * > **NOTE**
   * >
   * > - The script runs after any JavaScript code on the page, and the DOM tree has already been loaded and rendered at
   * > that point.
   * >
   * > - The scripts are executed in lexicographic order, not in the order of the array.
   * >
   * > - When scripts with identical content are injected multiple times, they are silently deduplicated without display
   * > or notification, and the **scriptRules** from the first injection are used.
   * >
   * > - This API does not support [UrlRegexRule]{@link UrlRegexRule}.
   * >
   * > - You are advised to use [runJavaScriptOnDocumentEnd]{@link WebAttribute#runJavaScriptOnDocumentEnd} instead.
   *
   * @param { Array<ScriptItem> } scripts - Script item array to be injected.
   *     <br>When **undefined** or **null** is passed in, JavaScript scripts are not injected into **Web** components.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  javaScriptOnDocumentEnd(scripts: Array<ScriptItem>): WebAttribute;

  /**
   * Sets the layout mode of the **Web** component. If this attribute is not explicitly called, the **Web** layout
   * follows the system mode (**WebLayoutMode.NONE**) by default. For common issues, see
   * [Web Component Size Adapting to Page Content Layout](docroot://web/web-fit-content.md).
   *
   * > **NOTE**
   * >
   * > Currently, only two **Web** layout modes are supported:
   * >
   * > - The **Web** layout follows the system mode (**WebLayoutMode.NONE**).
   * >
   * > - The **Web** component height adapts to the frontend page height (**WebLayoutMode.FIT_CONTENT**).
   * >
   * > The adaptive layout of the **Web** component height based on the frontend page has the following limitations:
   * >
   * > - When **layoutMode** is set to **WebLayoutMode.FIT_CONTENT**:
   * >
   * > - [forceDisplayScrollBar]{@link WebAttribute#forceDisplayScrollBar} does not support persistent display.
   * >
   * > - [blankScreenDetectionConfig]{@link WebAttribute#blankScreenDetectionConfig} does not take effect.
   * >
   * > - If the width or height of the **Web** component exceeds 7680 px, specify the **RenderMode.SYNC_RENDER** mode
   * > when creating the **Web** component. Otherwise, the entire screen will be blank.
   * >
   * > - Dynamic switching of the **layoutMode** mode is not supported after the **Web** component is created.
   * >
   * > - **Web** component size specifications: When **RenderMode.ASYNC_RENDER** is specified, the width and height must
   * > not exceed 7680 px respectively.
   * >
   * > - Frequent changes to the page width and height will trigger re-layout of the **Web** component, affecting the
   * > user experience.
   * >
   * > - Waterfall layout web pages (loading more content when scrolling to the bottom) are not supported.
   * >
   * > - Width adaptation is not supported; only height adaptation is supported.
   * >
   * > - Because the height adapts to the web page height, you cannot modify the component height by changing the
   * > component height attribute.
   *
   * @param { WebLayoutMode } mode - Specifies the Web layout mode, which can follow the system or adaptive layout.
   *     <br>When null or undefined is passed, `WebLayoutMode.NONE` is used.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice
   * @since 11 dynamic
   */
  layoutMode(mode: WebLayoutMode): WebAttribute;

  /**
   * Sets nested scrolling options.
   *
   * > **NOTE**
   * >
   * > - You can set the up, down, left, and right directions, or set the forward and backward nested scrolling modes to
   * > implement scrolling linkage with the parent component.
   * >
   * > - Containers that support nested scrolling: [Grid]{@link ./grid}, [List]{@link ./list}, [Scroll]{@link ./scroll},
   * > [Swiper]{@link ./swiper}, [Tabs]{@link ./tabs}, [WaterFlow]{@link ./water_flow}, [Refresh]{@link ./refresh} and
   * > [bindSheet]{@link CommonMethod#bindSheet}.
   * >
   * > - Input sources that support nested scrolling: gestures, mouse device, and touchpad.
   * >
   * > - In nested scrolling scenarios, since the **Web** component's over-scrolling to the edge will trigger the over-
   * > scroll bounce effect first, it is recommended that you set [overScrollMode]{@link WebAttribute#overScrollMode} to
   * > **OverScrollMode.NEVER** to avoid undermining user experience.
   *
   * @param { NestedScrollOptions } value - Nested scrolling options.
   *     <br> When the value is of the **NestedScrollOptions** type (forward and backward), the default nested scrolling
   *     mode of the **scrollForward** and **scrollBackward** options is
   *     [NestedScrollMode.SELF_FIRST]{@link NestedScrollMode}.
   *     <br> When the value is of the **NestedScrollOptionsExt** type (up, down, left, and right), the default nested
   *     scrolling mode of the **scrollUp**, **scrollDown**, **scrollLeft**, and **scrollRight** options is
   *     **NestedScrollMode.SELF_FIRST**. [since 11 - 13]
   * @param { NestedScrollOptions | NestedScrollOptionsExt } value - Nested scrolling options.
   *     <br> When the value is of the **NestedScrollOptions** type (forward and backward), the default nested scrolling
   *     mode of the **scrollForward** and **scrollBackward** options is
   *     [NestedScrollMode.SELF_FIRST]{@link NestedScrollMode}.
   *     <br> When the value is of the **NestedScrollOptionsExt** type (up, down, left, and right), the default nested
   *     scrolling mode of the **scrollUp**, **scrollDown**, **scrollLeft**, and **scrollRight** options is
   *     **NestedScrollMode.SELF_FIRST**. [since 14]
   * @returns { WebAttribute } the attribute of the scroll.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 11 dynamic
   */
  nestedScroll(value: NestedScrollOptions | NestedScrollOptionsExt): WebAttribute;

  /**
   * Sets whether to enable the same-layer rendering feature. When this method is not explicitly called, the same-layer
   * rendering feature is disabled by default.
   *
   * > **NOTE**
   * >
   * > APIs such as [registerNativeEmbedRule]{@link WebAttribute#registerNativeEmbedRule} and
   * > [nativeEmbedOptions]{@link WebAttribute#nativeEmbedOptions} take effect only when this attribute is enabled.
   *
   * @param { boolean } enabled - Whether to enable the same-layer rendering feature.
   *     <br>The value **true** means to enable the same-layer rendering feature, and **false** means the opposite.
   *     <br>When **undefined** or **null** is passed in, the value is **false**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  enableNativeEmbedMode(enabled: boolean): WebAttribute;

  /**
   * Registers the HTML tag name and type for same-layer rendering. The tag name only supports <object\> and <embed\>.
   * The tag type only supports visible ASCII characters.
   *
   * If the specified type is the same as the W3C standard <object\> or <embed\> type, the ArkWeb kernel identifies the
   * type as a non-same-layer tag.
   *
   * This API is also controlled by **enableNativeEmbedMode** and does not take effect when same-layer rendering is
   * disabled. When this API is not used, the ArkWeb kernel recognizes the <embed\> tags with the "native/" prefix as
   * same-layer tags.
   *
   * For details, see
   * [Using Same-Layer Rendering](docroot://web/web-same-layer.md#rendering-text-boxes-at-the-same-layer-on-web-pages).
   *
   * @param { string } tag - Tag name.
   * @param { string } type - Tag type. The ArkWeb kernel uses a prefix to match this parameter.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  registerNativeEmbedRule(tag: string, type:string): WebAttribute;

  /**
   * Triggered when the lifecycle of the same-layer tag changes.
   *
   * @param { function } callback - Callback invoked when the lifecycle of the same-layer tag changes.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  onNativeEmbedLifecycleChange(callback: (event: NativeEmbedDataInfo) => void): WebAttribute;

  /**
   * Triggered when the visibility of a same-layer tag (such as an **\<embed>** tag or an **\<object>** tag) on a web
   * page changes in the viewport. Same-layer tags are invisible by default. If a tag is visible when the page is loaded
   * for the first time, it is reported. If a tag is invisible, it is not reported. Same-layer tags are considered
   * invisible only when they are all invisible. Partially visible or all visible tags are considered visible. To obtain
   * the visible status change caused by the CSS attributes (including visibility, display, and size change) of the same
   * -layer tag, configure [nativeEmbedOptions]{@link WebAttribute#nativeEmbedOptions} and set
   * **supportCssDisplayChange** in [EmbedOptions]{@link EmbedOptions} to **true**.
   *
   * @param { OnNativeEmbedVisibilityChangeCallback } callback - Callback invoked when the visibility of a same-layer
   *     tag changes.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  onNativeEmbedVisibilityChange(callback: OnNativeEmbedVisibilityChangeCallback): WebAttribute;

  /**
   * Triggered when a finger touches a same-layer tag.
   *
   * @param { function } callback - Callback invoked when a finger touches a same-layer tag.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  onNativeEmbedGestureEvent(callback: (event: NativeEmbedTouchInfo) => void): WebAttribute;

  /**
   * Triggered when the following operations are performed on the same-layer tag:
   *
   * - Tapping or holding with the left, middle, or right mouse button.
   * - Tapping or holding the left, middle, or right mouse button using the touchpad.
   *
   * @param { MouseInfoCallback } callback - Callback triggered when a same-layer tag is clicked using the mouse or
   *     touchpad.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  onNativeEmbedMouseEvent(callback: MouseInfoCallback): WebAttribute;

  /**
   * Sets the clipboard copy scope option. If this attribute is not explicitly called, pasting across all apps on the
   * current device is supported by default after copying.
   *
   * > **NOTE**
   * >
   * > When this attribute is set to **CopyOptions.None**, the **enablePreviewMenu** configuration item in
   * > [dataDetectorConfig]{@link WebAttribute#dataDetectorConfig} does not take effect. When
   * > [enableDataDetector]{@link WebAttribute#enableDataDetector} is set to **true** and this attribute is set to
   * > **CopyOptions.LocalDevice**, the AI menu feature is activated.
   *
   * @param { CopyOptions } value - Pasteboard copy options.
   *     <br>When **undefined** or **null** is passed in, the value is **CopyOptions.None**.
   * @returns { WebAttribute } the attribute of the scroll.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  copyOptions(value: CopyOptions): WebAttribute;

  /**
   * Triggered when the URL is about to be loaded in the current web page, allowing the host application to obtain
   * control and determine whether to prevent the web page from loading the URL.
   *
   * > **NOTE**
   * >
   * > - POST requests do not trigger this callback.
   * >
   * > - This callback is triggered when the iframe loads a non-HTTP(S) document. It is not triggered for HTTP(S)
   * > documents, **about:blank**, or for any redirection that is started via **loadUrl(url: string)**.
   * >
   * > - Do not call **loadUrl(url: string)** with the same URL in the callback and return **true**. Doing so would
   * > unnecessarily cancel the current loading and start an identical one. To continue loading the current request URL,
   * > return **false** instead of calling **loadUrl(url: string)**.
   *
   * @param { OnOverrideUrlLoadingCallback } callback - Callback for **onOverrideUrlLoading**.
   *     <br>Return value: boolean
   *     <br> The value **true** means to stop loading the URL, and the value **false** means the opposite.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  onOverrideUrlLoading(callback: OnOverrideUrlLoadingCallback): WebAttribute;

  /**
   * Triggered when an error occurs during web page loading of main resources. You can use this API to customize the
   * error display page.
   *
   * > **NOTE**
   * >
   * > This feature takes effect only after the default error page is enabled by calling the
   * > [setErrorPageEnabled]{@link @ohos.web.webview:webview.WebviewController#setErrorPageEnabled(enable: boolean)}
   * > API.
   * >
   * > If the error code obtained through [errorPageEvent.error.getErrorCode()]{@link WebResourceError#getErrorCode} is
   * > greater than 0, it indicates an HTTP error. If the error code is less than 0, it indicates a network error.
   *
   * @param { OnOverrideErrorPageCallback } callback - Callback triggered when an error occurs during web page loading.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  onOverrideErrorPage(callback: OnOverrideErrorPageCallback): WebAttribute;

  /**
   * Sets whether to enable automatic font sizing for the **Web** component. When no attribute is explicitly called,
   * automatic font sizing is enabled for the **Web** component by default.
   *
   * After automatic font sizing takes effect, any text smaller than 16 px is enlarged to fall between 16 px and 32 px.
   * This eliminates readability issues on narrow screens (viewport < 980 px) where mobile-specific layouts are absent.
   *
   * > **NOTE**
   * >
   * > - The preconditions for automatic font sizing to take effect are as follows:
   * >
   * > - The device type should be phone, tablet, wearable, or TV.
   * >
   * > - The viewport width of the **Web** component is less than 980 px.
   * >
   * > - The page is text-heavy: font size (px) × character count ≥ 3920.
   * >
   * > - **metaViewport** is not set on the frontend, or the **metaViewport** does not contain the **width** and
   * > **initial-scale** attributes.
   *
   * @param { boolean } textAutosizing - Whether to enable automatic text resizing.
   *     <br>The value **true** means to enable automatic text resizing, and **false** means the opposite.
   *     <br>When **undefined** or **null** is passed in, the value is **true**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  textAutosizing(textAutosizing: boolean): WebAttribute;

  /**
   * Sets whether to enable the
   * [application to take over web page media playback](docroot://web/app-takeovers-web-media.md). When this attribute
   * is not explicitly called, the web page media playback takeover feature is disabled by default.
   *
   * @param { NativeMediaPlayerConfig } config - Configuration object for the app to take over web media playback. It
   *     contains the following attributes: enable (boolean type, whether to enable this feature, default value: false),
   *     shouldOverlay (boolean type, whether the player view of the app taking over web video playback overlays the web
   *     content after the feature is enabled, default value: false).
   *     <br>If undefined or null is passed, it is equivalent to `{enable: false, shouldOverlay: false}`.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enableNativeMediaPlayer(config: NativeMediaPlayerConfig): WebAttribute;

  /**
   * Triggered when the rendering process does not respond. If the **Web** component cannot process the input event or
   * navigate to a new URL within a proper time range, the web page process is considered unresponsive and the callback
   * is triggered.
   *
   * If the web page process does not respond, this callback may be triggered until the web page process responds again.
   * In this case, [onRenderProcessResponding]{@link WebAttribute#onRenderProcessResponding} is triggered.
   *
   * You can terminate the associated rendering process through
   * [terminateRenderProcess]{@link @ohos.web.webview:webview.WebviewController#terminateRenderProcess}, which may
   * affect other **Web** components in the same rendering process.
   *
   * @param { OnRenderProcessNotRespondingCallback } callback - Callback triggered when the rendering process does not
   *     respond.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  onRenderProcessNotResponding(callback: OnRenderProcessNotRespondingCallback): WebAttribute;

  /**
   * Triggered when the rendering process transitions back to a normal operating state from an unresponsive state. This
   * callback indicates that the web page was not actually frozen.
   *
   * @param { OnRenderProcessRespondingCallback } callback - Callback triggered when the rendering process transitions
   *     back to a normal operating state from an unresponsive state.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  onRenderProcessResponding(callback: OnRenderProcessRespondingCallback): WebAttribute;

  /**
   * Sets the extended options of the custom context menu on selection, including the text content, icon, and callback.
   *
   * The API only supports the selection of plain text; if the selected content contains images or other non-text
   * elements, the **action** information may display garbled content.
   *
   * > **NOTE**
   * >
   * > When used together with [editMenuOptions]{@link WebAttribute#editMenuOptions}, this API does not take effect.
   *
   * @param { Array<ExpandedMenuItemOptions> } expandedMenuOptions - Extended options of the custom context menu on
   *     selection.
   *     <br>The number of menu options, menu content size, and start icon size must be the same as those of the ArkUI
   *     [Menu]{@link ./menu} component.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamiconly
   * @deprecated since 20
   * @useinstead ohos.web.WebAttribute#editMenuOptions
   */
  selectionMenuOptions(expandedMenuOptions: Array<ExpandedMenuItemOptions>): WebAttribute;

  /**
   * Triggered when the **viewport-fit** configuration in the web page's **meta** tag changes. The application can adapt
   * its layout to the viewport within this callback.
   *
   * @param { OnViewportFitChangedCallback } callback - Callback invoked when the **viewport-fit** configuration in the
   *     web page's **meta** tag changes.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onViewportFitChanged(callback: OnViewportFitChangedCallback): WebAttribute;

  /**
   * Triggered before any editable element (such as the **input** tag) on the web page invokes the soft keyboard. The
   * application can use this API to intercept the display of the system's soft keyboard and configure a custom soft
   * keyboard. (With this API, the application can determine whether to use the system's default soft keyboard, a system
   * soft keyboard with a custom Enter key, or a completely application-defined soft keyboard).
   *
   * @param { WebKeyboardCallback } callback - Callback invoked for intercepting the soft keyboard started by the web
   *     page.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onInterceptKeyboardAttach(callback: WebKeyboardCallback): WebAttribute;

  /**
   * Called after an ad is blocked on the web page to notify the user of detailed information about the blocked ad. To
   * reduce the frequency of notifications and minimize the impact on the page loading process, only the first
   * notification is made when the page is fully loaded. Subsequent blocking events are reported at intervals of 1
   * second, and no notifications are sent if there is no ad blocked.
   *
   * @param { OnAdsBlockedCallback } callback - Callback of **onAdsBlocked**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onAdsBlocked(callback: OnAdsBlockedCallback): WebAttribute;

  /**
   * Sets the custom soft keyboard avoidance mode.
   *
   * If the keyboard avoidance mode set in **UIContext** is
   * [KeyboardAvoidMode.RESIZE]{@link @ohos.arkui.UIContext:KeyboardAvoidMode}, this API does not take effect.
   *
   * @param { WebKeyboardAvoidMode } mode - Web soft keyboard avoidance mode.
   *     <br>In the nested scrolling scenario, the soft keyboard avoidance mode of the **Web** component is not
   *     recommended, including **RESIZE_VISUAL** and **RESIZE_CONTENT**.
   *     <br>Default value: **WebKeyboardAvoidMode.RESIZE_CONTENT**
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  keyboardAvoidMode(mode: WebKeyboardAvoidMode): WebAttribute;

  /**
   * Sets a custom text selection menu for the **Web** component.
   *
   * > **NOTE**
   * >
   * > This API is similar to **bindSelectionMenu**, with the following differences:
   * >
   * > - **editMenuOptions**: Adds extension items based on the system default menu style, with the trigger conditions
   * > unchanged.
   * >
   * > - [bindSelectionMenu]{@link WebAttribute#bindSelectionMenu}: Fully customizes the menu style and trigger
   * > conditions, as defined by the developer.
   * >
   * > It is not recommended to use both at the same time. Choose based on the degree of customization required.
   * > You can use this attribute to customize a text menu.
   *
   * You can use [onCreateMenu]{@link EditMenuOptions.onCreateMenu} to modify, add, and delete menu options. If you do
   * not want to display the text menu, return an empty array.
   *
   * You can use [onMenuItemClick]{@link EditMenuOptions.onMenuItemClick} to customize the callback for menu options.
   * This function is triggered after a menu option is clicked and determines whether to execute the default callback
   * based on the return value. If **true** is returned, the system callback is not executed. If **false** is returned,
   * the system callback is executed.
   *
   * In [onPrepareMenu<sup>20+</sup>](docroot://reference/apis-arkui/arkui-ts/ts-text-common.md#properties-1), this
   * callback is triggered after the text selection area changes and before the menu is displayed. You can modify, add,
   * or delete menu options in the callback to dynamically update the menu.
   *
   * If this method is used together with
   * [selectionMenuOptions<sup>(deprecated)</sup>]{@link WebAttribute#selectionMenuOptions}, the
   * **selectionMenuOptions<sup> (deprecated) </sup>** method does not take effect.
   *
   * @param { EditMenuOptions } editMenu - Custom text menu options for the Web component.
   *     <br>The number of menu items, the content size, and the icon size are consistent with those of the ArkUI
   *     [Menu]{@link ./menu} component.
   *     <br>Among the system-provided ID enum values ([TextMenuItemId]{@link TextMenuItemId}) in the menu, only CUT,
   *     COPY, PASTE, SELECT_ALL, TRANSLATE, SEARCH, and AI_WRITER are supported in the Web component.
   *     <br>In the onMenuItemClick function, the textRange parameter is meaningless in the Web component, and the value
   *     passed in is -1.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  editMenuOptions(editMenu: EditMenuOptions): WebAttribute;

  /**
   * Sets whether to enable haptic feedback for long-pressed text in the **Web** component. The
   * **ohos.permission.VIBRATE** permission must be declared. When this attribute is not explicitly called, haptic
   * feedback is enabled by default.
   *
   * @param { boolean } enabled - Whether to enable vibration.
   *     <br>The value **true** indicates that vibration is enabled, and **false** indicates the opposite.
   *     <br>If **undefined** or **null** is passed, the default value is used, which means vibration is enabled.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.0.0]
   * @since 13 dynamic
   */
  enableHapticFeedback(enabled: boolean): WebAttribute;

  /**
   * Sets the custom selection menu.
   *
   * @param { WebElementType } elementType - Menu type.
   * @param { CustomBuilder } content - Menu content.
   * @param { WebResponseType } responseType - Response type of the menu.
   * @param { SelectionMenuOptionsExt } [options] - Menu options. The default configuration is used when undefined or
   *     null is passed in.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  bindSelectionMenu(elementType: WebElementType, content: CustomBuilder, responseType: WebResponseType,
      options?: SelectionMenuOptionsExt): WebAttribute;

  /**
   * Sets whether the **Web** component can change the font weight according to the system settings. When this attribute
   * is not explicitly called, the **Web** component can't change the font weight according to the system settings by
   * default.
   *
   * > **NOTE**
   * >
   * > Currently, only front-end text elements support this capability. The **canvas** element and embedded .docx and
   * > .pdf texts do not support this capability.
   *
   * @param { boolean } follow - Whether the **Web** component can change the font weight according to the system
   *     settings.
   *     <br>The value **true** means that the **Web** component can change the font weight according to the system
   *     settings, and **false** means the opposite.
   *     <br>When **undefined** or **null** is passed in, the value is **false**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 18 dynamic
   */
  enableFollowSystemFontWeight(follow: boolean): WebAttribute;

  /**
   * Sets whether to support an application to connect to media controller. If this attribute is not explicitly set, the
   * application can connect to media controller by default.
   *
   * @param { boolean } enabled - Whether to support an application to connect to media controller.
   *     <br>The value **true** means to support an application to connect to media controller, and **false** means the
   *     opposite.
   *     <br>When **undefined** or **null** is passed in, the value is **true**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 18 dynamic
   */
  enableWebAVSession(enabled: boolean): WebAttribute;

  /**
   * Sets whether to enable segment-based HTML parsing optimization. If no attribute is explicitly called, the parsing
   * time is used as the segment point by default.
   *
   * To avoid occupying too many main thread resources and enable progressive loading of web pages, the ArkWeb kernel
   * uses the segment-based parsing policy when parsing the HTML files. By default, the ArkWeb kernel uses the parsing
   * time as the segment point. When the parsing time exceeds the threshold, the parsing is interrupted and then the
   * layout and rendering operations are performed.
   *
   * After optimization is enabled, the ArkWeb kernel not only checks whether the parsing time exceeds the limit, but
   * also additionally determines whether the number of parsed tokens (the smallest parsing units of an HTML document,
   * such as `<div>`, `attr="xxx"`, etc.) exceeds the threshold specified by the kernel, and lowers this threshold. When
   * the FCP (First Contentful Paint) of the page is triggered, the default interrupt judgment logic is restored. This
   * makes the parsing operations before FCP more frequent, thereby increasing the possibility that the first-frame
   * content is parsed and enters the rendering phase earlier, while effectively reducing the rendering workload of the
   * first frame, ultimately advancing the FCP time.
   *
   * When the FCP of a page is triggered, the default segment parsing logic is restored. Therefore, the segment-based
   * HTML parsing optimization takes effect only for the first page loaded by each **Web** component.
   *
   * @param { boolean} optimizeParserBudget - Whether to enable segment-based HTML parsing optimization.
   *     <br>The value **true** means to use the number of parsed records instead of the parsing time as the segment
   *     point for HTML segment parsing, and reduce the upper limit of the number of parsed records in each segment. The
   *     value **false** means to use the parsing time as the segment point for HTML segment parsing.
   *     <br>If **undefined** or **null** is passed in, the value is **false**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 15 dynamic
   */
  optimizeParserBudget(optimizeParserBudget: boolean): WebAttribute;

  /**
   * Injects a JavaScript script into the **Web** component. When the specified page or document starts to be loaded,
   * the script is executed on any page whose source matches **scriptRules**. When this attribute is not explicitly
   * called, JavaScript scripts are not injected into the **Web** component by default.
   *
   * > **NOTE**
   * >
   * > - The script is injected after the root element (HTML Element) of the web document is created but before any
   * > other content is loaded.
   * >
   * > - The scripts are executed in the order of the array.
   * >
   * > - When scripts with identical content are injected multiple times, they are silently deduplicated without display
   * > or notification, and the **scriptRules** from the first injection are used.
   *
   * @param { Array<ScriptItem> } scripts - Script item array to be injected.
   *     <br>When **undefined** or **null** is passed in, JavaScript scripts are not injected into **Web** components.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @since 15 dynamic
   */
  runJavaScriptOnDocumentStart(scripts: Array<ScriptItem>): WebAttribute;

  /**
   * Injects a JavaScript script into the **Web** component. When the specified page or document has been loaded, the
   * script is executed on any page whose source matches **scriptRules**. When this attribute is not explicitly called,
   * JavaScript scripts are not injected into the **Web** component by default.
   *
   * > **NOTE**
   * >
   * > - The script runs after any JavaScript code on the page, and the DOM tree has already been loaded and rendered at
   * > that point.
   * >
   * > - The scripts are executed in the order of the array.
   * >
   * > - When scripts with identical content are injected multiple times, they are silently deduplicated without display
   * > or notification, and the **scriptRules** from the first injection are used.
   *
   * @param { Array<ScriptItem> } scripts - Script item array to be injected.
   *     <br>When **undefined** or **null** is passed in, JavaScript scripts are not injected into **Web** components.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @since 15 dynamic
   */
  runJavaScriptOnDocumentEnd(scripts: Array<ScriptItem>): WebAttribute;

  /**
   * Injects a JavaScript script into the **Web** component. When the **head** tag of the DOM tree is parsed, the script
   * is executed on any page whose source matches **scriptRules**. When this attribute is not explicitly called,
   * JavaScript scripts are not injected into the **Web** component by default.
   *
   * > **NOTE**
   * >
   * > - This script is executed in the array order.
   * >
   * > - If a script with the same content is injected for multiple times, the script is silently deduplicated, not
   * > displayed, and no notification is displayed. The **scriptRules** of the first injection is used.
   *
   * @param { Array<ScriptItem> } scripts - Script item array to be injected.
   *     <br>When **undefined** or **null** is passed in, JavaScript scripts are not injected into **Web** components.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 15 dynamic
   */
  runJavaScriptOnHeadEnd(scripts: Array<ScriptItem>): WebAttribute;

  /**
   * Sets the same-layer rendering configuration. This attribute takes effect only when
   * [enableNativeEmbedMode]{@link WebAttribute#enableNativeEmbedMode} is enabled and cannot be dynamically modified. If
   * this attribute is not explicitly called, the default value **{supportDefaultIntrinsicSize: false}** is used.
   *
   * @param { EmbedOptions } options - Configuration options of the same-layer rendering.
   *     <br>If **undefined** or **null** is passed in, the value **{supportDefaultIntrinsicSize: false}** is used.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 16 dynamic
   */
  nativeEmbedOptions(options?: EmbedOptions): WebAttribute;

  /**
   * Sets whether to recognize special entities of web texts, such as emails, phone numbers, and URLs. This API depends
   * on the text recognition capability at the bottom layer of the device. Otherwise, the setting is invalid. When this
   * attribute is not explicitly called, the detector is disabled by default.
   *
   * > **NOTE**
   * >
   * > Attributes such as [dataDetectorConfig]{@link WebAttribute#dataDetectorConfig} and
   * > [enableSelectedDataDetector]{@link WebAttribute#enableSelectedDataDetector} take effect only when this attribute
   * > is enabled.
   * > If **enableDataDetector** is set to **true** and [dataDetectorConfig]{@link WebAttribute#dataDetectorConfig} is
   * > not set, all types of entities will be recognized, and the **color** and **decoration** attributes of the
   * > recognized entities will be changed to the following styles:
   *
   * <!--code_no_check-->
   *
   * When **enableDataDetector** is set to **true** and [copyOptions]{@link WebAttribute#copyOptions} is set to
   * **CopyOptions.LocalDevice**, the AI menu feature is activated. In this case, after text is selected on the web
   * page, the text selection menu can display the corresponding AI menu items, including **url** (open link), **email**
   * (create new email), **phoneNumber** (call), **address** (navigate to the location), and **dateTime** (create new
   * schedule reminder) from [TextMenuItemId]{@link TextMenuItemId}.
   *
   * When the AI menu takes effect, the corresponding option can be displayed only when the selection contains a
   * complete AI entity. This menu item and the askAI menu item in [TextMenuItemId]{@link TextMenuItemId} do not appear
   * at the same time.
   *
   * For details about the application scenario, see
   * [Using Smart Text Data Detector](docroot://web/web-data-detector.md).
   *
   * @param { boolean } enable - Whether to enable web text recognition. The value **true** means to enable web text
   *     recognition, and **false** means the opposite.
   *     <br>When **undefined** or **null** is passed in, the attribute setting does not take effect.
   * @returns { WebAttribute } The attribute of the web.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  enableDataDetector(enable: boolean): WebAttribute;

  /**
   * Configures text recognition settings.
   *
   * This API must be used together with [enableDataDetector]{@link WebAttribute#enableDataDetector}. It takes effect
   * only when **enableDataDetector** is set to **true**.
   *
   * When entities A and B overlap, the following rules are followed:
   *
   * 1. If A is a subset of B (A ⊂ B), then B is retained; otherwise, A is retained.
   * 2. If A is not a subset of B (A ⊄ B) and B is not a subset of A (B ⊄ A), and if the starting point of A is earlier
   *  than that of B (A.start < B.start), then A is retained; otherwise, B is retained.
   *
   * @param { TextDataDetectorConfig } config - Text recognition configuration.
   * @returns { WebAttribute } The attribute of the web.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  dataDetectorConfig(config: TextDataDetectorConfig): WebAttribute;

  /**
   * Triggered to check whether a bound **Web** instance exists based on the name when a web page triggers
   * **window.open(url, name)**. If the instance exists, it receives this callback to notify the application of
   * displaying it on the front end. If it does not exist, the application is notified to create a new **Web** instance
   * through [onWindowNew]{@link WebAttribute#onWindowNew}.
   *
   * > **NOTE**
   * >
   * > - Binding a **Web** instance by name: Call the **event.handler.setWebController** method in the [onWindowNew] (#
   * > onwindownew9) callback and transfer the controller of the new **Web** instance.
   * >
   * > - The name must comply with the regular expression **[a-zA-Z0-9_]+**. When the name is used as the value of the
   * > **target** attribute of the \<a> or \<form> tag, the bound **Web** instance also triggers this callback function.
   *
   * @param { Callback<void> } callback - Callback triggered on a new page after **window.open** is triggered on the
   *     original page.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  onActivateContent(callback: Callback<void>): WebAttribute;

  /**
   * Sets the rendering process to bypass vsync (vertical synchronization) scheduling and directly trigger drawing when
   * the **scrollBy** API is called to scroll the page. When this attribute is not explicitly called, vsync scheduling
   * is not skipped by default.
   *
   * @param { WebBypassVsyncCondition } condition - Condition for triggering the rendering process to bypass vsync
   *     scheduling.
   *     <br> When **undefined** or **null** is passed in, the value is **NONE**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  bypassVsyncCondition(condition: WebBypassVsyncCondition): WebAttribute;

  /**
   * Sets the gesture focus mode of the **Web** component, which controls the focus response behavior of the **Web**
   * component. If this attribute is not explicitly called, the default behavior is that any gesture causes the **Web**
   * component to gain focus when the gesture is pressed.
   *
   * @param { GestureFocusMode } mode - Gesture focus mode of the **Web** component. If **undefined** or **null** is
   *     passed in, the value **GestureFocusMode.DEFAULT** is used.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  gestureFocusMode(mode: GestureFocusMode): WebAttribute;

  /**
   * Sets whether to enable the forcible zoom functionality for the **Web** component.
   *
   * @param { boolean } enable - Whether to comply with the zoom restriction specified by the **<meta name="viewport">**
   *     tag on the web page.
   *     <br>The value **true** means to not comply with the web page zoom restriction, and **false** means the
   *     opposite.
   *     <br>When **undefined** or **null** is passed in, the attribute setting does not take effect.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  forceEnableZoom(enable: boolean): WebAttribute;

  /**
   * Called when the **param** element embedded in the same-layer rendering tag **object** changes.
   *
   * @param { OnNativeEmbedObjectParamChangeCallback } callback - Callback triggered when the **param** element embedded
   *     in the same-layer rendering tag **object** is added, modified, or deleted.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  onNativeEmbedObjectParamChange(callback: OnNativeEmbedObjectParamChangeCallback): WebAttribute;

  /**
   * Sets how the final state of the **Web** component's content is rendered during its width and height animation
   * process when the component rotates. If this attribute is not explicitly called, by default, the component's content
   * stays at the final size and always aligned with the upper left corner of the component.
   *
   * @param { WebRotateEffect } effect - How the final state of the **Web** component's content is rendered during its
   *     width and height animation process when the component rotates.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  rotateRenderEffect(effect: WebRotateEffect): WebAttribute;

  /**
   * Sets whether to allow zooming by pressing **Ctrl + '-/+'** or **Ctrl** + mouse wheel/touchpad.
   *
   * If this attribute is not explicitly called, zooming by pressing **Ctrl + '-/+'** or **Ctrl** + mouse wheel/touchpad
   * is allowed by default.
   *
   * @param { boolean } zoomControlAccess - Whether to allow zooming through key combinations. The value **true** means
   *     the zooming is supported, and **false** means the opposite. If null or undefined is passed, the default value
   *     **false** is used.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  zoomControlAccess(zoomControlAccess: boolean): WebAttribute;

  /**
   * Called when the **Web** component detects a blank screen.
   *
   * > **NOTE**
   * >
   * > - This method must be used with [blankScreenDetectionConfig]{@link WebAttribute#blankScreenDetectionConfig}.
   * > Otherwise, the blank screen detection is disabled by default, and the callback is not returned when a blank
   * > screen is detected.
   *
   * @param { OnDetectBlankScreenCallback } callback - Callback triggered when the **Web** component detects a blank
   *     screen.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  onDetectedBlankScreen(callback: OnDetectBlankScreenCallback): WebAttribute;

  /**
   * Sets the blank screen detection configuration, such as whether to enable the detection, detection time, and
   * detection policy. When this attribute is not explicitly called, blank screen detection is disabled by default.
   *
   * > **NOTE**
   * >
   * > - Based on the configuration of **detectConfig**,
   * > [onDetectedBlankScreen]{@link WebAttribute#onDetectedBlankScreen} may be triggered when a blank screen or near-
   * > blank screen is detected after a web page is loaded.
   * >
   * > - The setting takes effect in the next navigation.
   * >
   * > - After the user interacts with the web page, the system does not check whether a blank screen occurs.
   * >
   * > - This feature is not supported when **layoutMode** is set to **WebLayoutMode.FIT_CONTENT**.
   *
   * @param { BlankScreenDetectionConfig } detectConfig - Blank screen detection policy.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  blankScreenDetectionConfig(detectConfig: BlankScreenDetectionConfig): WebAttribute;

  /**
   * Sets whether to enable the back-to-top feature for the **Web** component when the status bar is touched. When this
   * attribute is not explicitly called, the back-to-top feature for the status bar is enabled by default.
   *
   * @param { boolean } backToTop - Whether to enable the back-to-top feature. The value **true** means to enable the
   *     feature, and **false** means the opposite.
   *     <br>When **undefined** or **null** is passed in, the value is **true**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  backToTop(backToTop: boolean): WebAttribute;

  /**
   * Sets whether to enable the AI menu feature for text selection menu. After the AI menu feature is enabled, the
   * email, phone number, website, date, and address in the selection can be identified, and the corresponding AI menu
   * items are displayed in the text selection menu. By default, the AI menu feature is enabled.
   *
   * When the AI menu feature is enabled, after text is selected on the web page, the text selection menu can display
   * the corresponding AI menu items, including **url** (open link), **email** (create new email), **phoneNumber** (call
   * ), **address** (navigate to the location), and **dateTime** (create new schedule) from
   * [TextMenuItemId]{@link TextMenuItemId}.
   *
   * When the AI menu takes effect, the corresponding option can be displayed only when the selection contains a
   * complete AI entity. This menu item and the askAI menu item in [TextMenuItemId]{@link TextMenuItemId} do not appear
   * at the same time.
   *
   * For details about the application scenario, see
   * [Using Smart Text Data Detector](docroot://web/web-data-detector.md).
   *
   * @param { boolean } enable - Whether to enable web text recognition. The value **true** means to enable web text
   *     recognition, and **false** means the opposite.
   *     <br>If **undefined** or **null** is passed in, the attribute is reset to the default value.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  enableSelectedDataDetector(enable: boolean): WebAttribute;

  /**
   * Triggered when the first screen paint of a web page is complete.
   *
   * > **NOTE**
   * >
   * > - First Screen Paint (FSP) records the time taken to render images, texts, and videos in the viewport. It is a
   * > core performance metric for measuring the duration from a page's initial load to the completion of rendering.
   * > When no visible elements within the viewport extend beyond the historical rendering area for a certain period of
   * > time, the moment when the maximum historical rendering of elements in the viewport is achieved is regarded as the
   * > completion time of first screen paint.
   * >
   * > - After the first screen is drawn, the API waits for a period of time and reports the callback when no new
   * > rendering information needs to be processed. The callback time is different from the first screen paint
   * > completion time.
   * >
   * > - If the user performs input operations or scrolls the page while rendering is still in progress, the callback
   * > function will be reported immediately.
   * >
   * > - This API is used to obtain the first screen rendering time in instant loading scenarios, but it will not
   * > deliver the expected results if used in preloading or prerendering scenarios.
   *
   * @param { OnFirstScreenPaintCallback } callback - Callback triggered when the first screen paint of the **Web**
   *     component is detected.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  onFirstScreenPaint(callback: OnFirstScreenPaintCallback): WebAttribute;

  /**
   * Sets whether to enable web page autofill. By default, this feature is enabled.
   *
   * <!--RP1-->
   *
   * > **NOTE**
   * >
   * > The autofill feature of this API depends on SmartFill service and Password Autofill Service.
   *
   * <!--RP1End-->
   *
   * @param { boolean } value - Whether to enable autofill for web pages. The value **true** means to enable autofill,
   *     and **false** means the opposite.
   *     <br>When **undefined** or **null** is passed in, the value is **true**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  enableAutoFill(value: boolean): WebAttribute;

  /**
   * Triggered when the text selection of the **Web** component changes. This API uses an asynchronous callback to
   * return the result.
   *
   * > **NOTE**
   * >
   * > - The gesture selection, mouse selection, and JS selection are supported.
   * >
   * > - This callback is triggered when the selection ends.
   * >
   * > - If the same selection is made using the same method as the previous one, this callback is not triggered. If the
   * > same selection is made using a different method from the previous one, this callback is triggered.
   *
   * @param { TextSelectionChangeCallback } callback - Callback triggered when the text selection changes.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  onTextSelectionChange(callback: TextSelectionChangeCallback): WebAttribute;

  /**
   * Sets whether to enable AI analysis of web page images. Currently, the image text recognition feature is supported.
   * If this attribute is not explicitly called, this feature is enabled by default.
   *
   * > **NOTE**
   * >
   * > When you long-press or hover the mouse over the image text, AI analyzer is triggered and the text in the image
   * > can be selected. The specifications of images that can trigger analyzer are as follows:
   * >
   * > - The original width and height of the image are greater than or equal to 100 pixels.
   * >
   * > - For [devices](docroot://quick-start/module-configuration-file.md#devicetypes) other than 2-in-1 devices, the
   * > image rendering width must exceed 80% of the web page width.
   *
   * @param { boolean } enable - Whether to enable AI analyzer for web page images. The value **true** means to enable
   *     AI analyzer, and **false** means the opposite.
   *     <br>If **undefined** or **null** is passed in, the value is reset to **true**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  enableImageAnalyzer(enable: boolean): WebAttribute;

  /**
   * Triggered to notify the user of the camera state on the current web page, which can be **None**, **Active**, or
   * **Paused**. This API uses an asynchronous callback to return the result.
   *
   * You can use the **startCamera**, **stopCamera**, and **closeCamera** APIs to enable, pause, and stop the camera
   * respectively. For details about how to use them, see
   * [startCamera]{@link @ohos.web.webview:webview.WebviewController#startCamera}.
   *
   * > **NOTE**
   * >
   * > **Active** is returned when the camera is being used on the current web page.
   * >
   * > **Paused** is returned when the camera is paused on the current web page.
   * >
   * > **None** is returned when the camera is not being used on the current web page.
   *
   * @param { OnCameraCaptureStateChangeCallback } callback - Callback triggered when the camera capture state changes.
   *     It returns the original and new states.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  onCameraCaptureStateChange(callback: OnCameraCaptureStateChangeCallback): WebAttribute;

  /**
   * Triggered to notify the user of the microphone state on the current web page, which can be **None**, **Active**,
   * or **Paused**. This API uses an asynchronous callback to return the result.
   *
   * You can use the **resumeMicrophone**, **pauseMicrophone**, and **stopMicrophone** APIs to resume, pause, and stop
   * the microphone. For details about how to use them, see
   * [resumeMicrophone]{@link @ohos.web.webview:webview.WebviewController#resumeMicrophone}.
   *
   * > **NOTE**
   * >
   * > **Active** is returned when the current web page is using the microphone; **Paused** is returned when the
   * > current web page pauses using the microphone; **None** is returned when the current web page does not use the
   * > microphone.
   * >
   * > When the microphone is being used and the **pauseMicrophone** API is called, the microphone pauses capturing
   * > audio and **Paused** is returned. You can call the **resumeMicrophone** API using ArkWeb to resume the capture.
   * >
   * > When the microphone is being used and the **stopMicrophone** API is called, the microphone stops capturing audio
   * > and **None** is returned. Capture cannot be resumed unless the frontend capture is restarted.
   * >
   * > When the microphone is paused and the **resumeMicrophone** API is called, the microphone continues capturing
   * > audio and **Active** is returned.
   * >
   * > When the microphone is paused and the **stopMicrophone** API is called, the microphone stops capturing audio and
   * > **None** is returned. Capture cannot be resumed unless the frontend capture is restarted.
   * >
   * > When the microphone is in the **None** state and the **resumeMicrophone** or **pauseMicrophone** API is called,
   * > the microphone state remains unchanged.
   *
   * @param { OnMicrophoneCaptureStateChangeCallback } callback - Callback triggered when the microphone capture state
   *     changes. It returns the original and new states.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  onMicrophoneCaptureStateChange(callback: OnMicrophoneCaptureStateChangeCallback): WebAttribute;

  /**
   * Sets whether to enable the default right-click context menu. If this method is not explicitly called, the menu is
   * disabled by default. The default menu supports only the **CUT**, **COPY**, **PASTE**, and **SELECT_ALL** menu
   * items.
   *
   * > **NOTE**
   * >
   * > - When the [onContextMenuShow]{@link WebAttribute#onContextMenuShow} callback is set and returns **true** in the
   * > callback, the setting of this API does not take effect.
   * >
   * > - The default menu items are controlled by [editMenuOptions]{@link WebAttribute#editMenuOptions}, through which
   * > you can customize the menu options.
   *
   * @param { boolean } enable - Whether to enable the default right-click context menu. The value **true** means
   *     enabled, and **false** means disabled.
   *     <br>When **undefined** or **null** is passed, the value is **false**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 24 dynamic
   */
  enableDefaultContextMenu(enable: boolean): WebAttribute;

  /**
   * Sets whether to enable the drag function. If this attribute is not explicitly called, the web page drag function is
   * enabled by default.
   *
   * @param { boolean } value - Whether to enable the web page drag function. The value **true** means enabled, and
   *     **false** means disabled. When **undefined** or **null** is passed, the value is **true**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enableDrag(value: boolean): WebAttribute;

  /**
   * Selects the layout mode of the vertical scrollbar within the **Web** component, used to adapt to the writing
   * direction of different languages. The **CONTENT** mode is suitable for scenarios where the web page CSS
   * **direction** attribute needs to be followed, while the **SYSTEM** mode is suitable for scenarios in multilingual
   * apps where the system language direction needs to be followed, such as for right-to-left languages like Arabic and
   * Hebrew.
   *
   * @param { ScrollbarLayoutPolicy } policy - Sets the layout mode of the vertical scrollbar within the **Web**
   *     component. Options: **CONTENT** (follows the web page CSS **direction** attribute), **SYSTEM** (lays out
   *     according to the left-to-right or right-to-left writing direction of the system language. For right-to-left
   *     languages, the scrollbar is laid out on the left side. This applies to all nested scrollbars within the web
   *     page).
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  scrollbarLayoutPolicy(policy: ScrollbarLayoutPolicy): WebAttribute;

  /**
   * Sets the scroll direction lock for the **Web** component to prevent simultaneous horizontal and vertical scrolling
   * when the user swipes diagonally, thereby improving the scrolling experience. If this method is not explicitly
   * called, scroll direction lock is supported by default in nested scrolling scenarios. The **ALL** mode applies to
   * all scenarios where scroll locking is needed, while the **NESTED_SCROLL** mode applies only to nested scrolling
   * scenarios.
   *
   * @param { boolean } value - Whether to enable scroll direction lock. The value **true** means the scroll direction
   *     is locked, and the scroll view locks the scroll axis based on the user's initial swipe direction. The value
   *     **false** means no locking.
   * @param { ScrollDirectionalLockType } type - Specifies the scenarios in which the **Web** component applies scroll
   *     direction lock. **ALL** means scroll lock is supported in all scenarios, and **NESTED_SCROLL** means scroll
   *     lock is supported in nested scrolling scenarios.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enableScrollDirectionalLock(value: boolean, type: ScrollDirectionalLockType): WebAttribute;

  /**
   * Configures custom frontend AI sessions for the **Web** component, used to register multiple custom AI sessions.
   *
   * @param { Array<AISessionEvent> } aiSessions - Array of frontend AI session configuration objects. Each object
   *     contains an AI session type and the corresponding lifecycle callback methods. Currently, only models included
   *     in [AISessionType]{@link AISessionType} are supported.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  aiSessionOptions(aiSessions: Array<AISessionEvent>): WebAttribute;

  /**
   * Sets the keyboard appearance mode, which controls the appearance style of the keyboard that pops up for input boxes
   * in the **Web** component, including immersive and non-immersive modes. If this method is not explicitly called, the
   * system immersive mode is followed by default.
   *
   * @param { WebKeyboardAppearanceMode } mode - Keyboard appearance. When **undefined** or **null** is passed, the
   *     system immersive mode is followed.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  keyboardAppearance(mode: WebKeyboardAppearanceMode): WebAttribute;

  /**
   * The callback is triggered when the inputmethod is attached to the IMF.
   *
   * @param { OnInputmethodAttachedCallback } callback - The triggered
   *     callback when the inputmethod is attached to the IMF.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  onInputmethodAttached(callback: OnInputmethodAttachedCallback): WebAttribute;

  /**
   * Sets whether to enable the overlay fullscreen playback feature for the **Web** component. If this attribute is not
   * explicitly called, this feature is disabled by default.
   *
   * > **NOTE**
   * >
   * > - Currently, only videos in H.264 and H.265 decoding formats are supported.
   * >
   * > - Only fullscreen requests initiated by video elements are responded to.
   *
   * @param { boolean } enabled - Whether to enable the overlay fullscreen playback feature for the **Web** component.
   *     <br>**true** means the feature is enabled.
   *     <br>**false** means the feature is disabled.
   *     <br>When **undefined** or **null** is passed, the value is **false**.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enableFullscreenVideoOverlay(enabled: boolean): WebAttribute;

  /**
   * Sets whether to enable the media resource network request proxy feature for the **Web** component. If this
   * attribute is not explicitly called, this feature is disabled by default.
   *
   * > **NOTE**
   * >
   * > - Currently, only HLS streaming media videos are supported.
   *
   * @param { boolean } enabled - Whether to enable the media resource network request proxy feature for the **Web**
   *     component.
   *     <br>**true** means the feature is enabled.
   *     <br>**false** means the feature is disabled.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enableMediaNetworkProxy(enabled: boolean): WebAttribute;
}

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
 * @crossplatform [since 10]
 * @atomicservice
 * @since 8 dynamic
 * @noninterop [since 11]
 */
declare const Web: WebInterface;

/**
 * Defines Web Component instance.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop [since 11]
 */
declare const WebInstance: WebAttribute;

/**
 * Callback details triggered when an SSL error occurs during resource loading by the user, including the URL, error
 * type, and certificate chain. It is suitable for scenarios where detailed analysis of SSL errors is required,
 * improving security issue diagnosis and troubleshooting efficiency.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 23]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface SslErrorEvent {
  /**
   * User operation.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  handler: SslErrorHandler;

  /**
   * Error code.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  error: SslError;

  /**
   * URL.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;

  /**
   * Original URL of the request.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  originalUrl: string;

  /**
   * Referrer URL.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  referrer: string;

  /**
   * Whether the error is a fatal error. A fatal error prevents the page from loading and rendering properly (for
   * example, certificate verification failure or protocol error), while a non-fatal error affects only the loading of
   * some resources (for example, image loading failure).
   *
   * The value **true** indicates a fatal error, and **false** indicates a non-fatal error.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  isFatalError: boolean;

  /**
   * Whether the resource is a main resource.
   *
   * The value **true** indicates a main resource, and **false** indicates a non-main resource.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  isMainFrame: boolean;

  /**
   * Certificate chain data.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @since 20 dynamic
   */
  certChainData?: Array<Uint8Array>;
}

/**
 * Custom menu extension item.
 *
 * > **NOTE**
 * >
 * > This API is supported from API version 12 and deprecated from API version 20. You are advised to use
 * > [editMenuOptions]{@link WebAttribute#editMenuOptions} instead.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamiconly
 * @deprecated since 20
 * @useinstead WebAttribute#editMenuOptions
 */
declare interface ExpandedMenuItemOptions {
  /**
   * Display content.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamiconly
   * @deprecated since 20
   * @useinstead EditMenuOptions
   */
  content: ResourceStr;

  /**
   * Display icon. The default value is empty, and no icon is displayed.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamiconly
   * @deprecated since 20
   * @useinstead EditMenuOptions
   */
  startIcon?: ResourceStr;

  /**
   * Callback invoked when the user selects a menu extension item. The callback parameter **selectedText** contains the
   * **plainText** field, which indicates the text content selected by the user.
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
 * Sets the nested scrolling rules of the **Web** component, supporting scrolling options in four directions: up, down,
 * left, and right.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 23]
 * @since 14 dynamic
 */
declare interface NestedScrollOptionsExt {
  /**
   * Nested scrolling options when the component scrolls up.
   *
   * Default value: **NestedScrollMode.SELF_FIRST**.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @since 14 dynamic
   */
  scrollUp?: NestedScrollMode;

  /**
   * Nested scrolling options when the component scrolls down.
   *
   * Default value: **NestedScrollMode.SELF_FIRST**.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @since 14 dynamic
   */
  scrollDown?: NestedScrollMode;

  /**
   * Nested scrolling options when the component scrolls right.
   *
   * Default value: **NestedScrollMode.SELF_FIRST**.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @since 14 dynamic
   */
  scrollRight?: NestedScrollMode;

  /**
   * Nested scrolling options when the component scrolls left.
   *
   * Default value: **NestedScrollMode.SELF_FIRST**.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @since 14 dynamic
   */
  scrollLeft?: NestedScrollMode;
}

/**
 * Configuration for Web same-layer rendering. Configures Web same-layer rendering options, including support for fixed
 * size and CSS display properties. It is suitable for scenarios where same-layer element rendering optimization is
 * required, improving rendering compatibility and flexibility.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 16 dynamic
 */
declare interface EmbedOptions {
  /**
   * Whether a same-layer rendering element supports the fixed size of 300 × 150.
   *
   * When the size of an element is set using CSS on the HTML5 side, the size of the same-layer rendering element uses
   * the CSS size. Otherwise, the size is fixed.
   *
   * If the value is **true**, the fixed size is 300 × 150.
   *
   * If the value is **false** and the CSS size is not set on the HTML5 side, the same-layer rendering elements are not
   * rendered.
   *
   * Default value: **false**.
   *
   * Unit: px.
   *
   * @default false
   * @syscap SystemCapability.Web.Webview.Core
   * @since 16 dynamic
   */
  supportDefaultIntrinsicSize?: boolean;
  /**
   * Whether the same-layer rendering visibility API supports the display attribute.
   *
   * By default, the visibility status of same-layer tags relative to the viewport is supported.
   *
   * If this attribute is set to **true**, CSS attributes can be displayed, including visibility, display, width, and
   * height.
   *
   * Otherwise, CSS attributes are not displayed, and only same-layer tags are visible relative to the viewport.
   *
   * @default false
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  supportCssDisplayChange?: boolean;
}

/**
 * Enumerates the focus modes.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
declare enum GestureFocusMode {
  /**
   * The **Web** component applies for the focus when it is touched, long-pressed, swiped, or zoomed.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  DEFAULT = 0,

  /**
   * The **Web** component applies for the focus only when it is touched and long-pressed. The swipe and zoom gestures
   * do not apply for the focus.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  GESTURE_TAP_AND_LONG_PRESS = 1
}

/**
 * Provides the file type information recommended by the file selector, including the MIME type and type array.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare interface AcceptableFileType {
  /**
   * MIME type of the file.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  mimeType: string;

  /**
   * Array of acceptable file types.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  acceptableType: Array<string>;
}

/**
 * Defines the modes of opening a new window in the WebView, including pop-up windows, new windows, foreground tabs, and
 * background tabs.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare enum NavigationPolicy {
  /**
   * Open in a new pop-up window.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  NEW_POPUP = 0,

  /**
   * Open in a new window.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  NEW_WINDOW = 1,

  /**
   * Open in a new tab in background.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  NEW_BACKGROUND_TAB = 2,

  /**
   * Open in a new tab in foreground.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  NEW_FOREGROUND_TAB = 3
}

/**
 * Provides the feature information of the new window requested to be created by the web page, including the size and
 * location. It is suitable for scenarios where precise control of new window attributes is required, improving window
 * layout accuracy and user experience.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare interface WindowFeatures {
  /**
   * Height of the new window, in pixels.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  height: number;

  /**
   * Width of the new window, in pixels.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  width: number;

  /**
   * X coordinate of the top-left corner of the new window, in pixels.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  x: number;

  /**
   * Y coordinate of the top-left corner of the new window, in pixels.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  y: number;
}

/**
 * Defines the callback information triggered when the web page requests to create a window, including the window
 * feature information and window opening method. It is suitable for scenarios where fine-grained control of new window
 * behavior is required, improving window management customization and user experience.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 23 dynamic
 */
declare interface OnWindowNewExtEvent {
  /**
   * The value **true** indicates that a dialog box is requested to be created, and the value **false** indicates that a
   * new tab page is requested to be created.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 23 dynamic
   */
  isAlert: boolean;

  /**
   * Whether the creation is triggered by the user. The value **true** means that the creation is triggered by the user,
   * and **false** means the opposite.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 23 dynamic
   */
  isUserTrigger: boolean;

  /**
   * URL to be opened in the new window.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 23 dynamic
   */
  targetUrl: string;

  /**
   * **WebviewController** instance for setting the new window.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 23 dynamic
   */
  handler: ControllerHandler;

  /**
   * Feature information of the new window requested to be created by the web page.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 23 dynamic
   */
  windowFeatures: WindowFeatures;

  /**
   * Window opening mode when the web page requests a user to create a new window.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 23 dynamic
   */
  navigationPolicy: NavigationPolicy;
}

/**
 * Defines the enumeration type for scrollbar layout mode control parameters.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum ScrollbarLayoutPolicy {
  /**
   * The left and right layout of the scrollbar follows the CSS settings.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  CONTENT = 0,

  /**
   * The left and right layout of the scrollbar follows the system language settings.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  SYSTEM = 1
}

/**
 * Defines the scenario types for scroll direction locking.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum ScrollDirectionalLockType {
  /**
   * Scroll locking is supported in all scenarios.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  ALL = 0,

  /**
   * Scroll locking is supported in nested scroll scenarios.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  NESTED_SCROLL = 1
}

/**
 * AI session creation callback function type. Allows custom model initialization and result processing.
 *
 * @param { string } id - The session task ID.
 * @param { string } params - Contextual data passed during creation.
 * @param { OnAISessionCallback } result - Callback function to notify the system of the creation result.
 * @returns { boolean } The value **true** indicates that custom logic is used, skipping the system default behavior;
 *     **false** indicates that the system default logic continues to be executed.
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
type OnCreateAISession = (id: string, params: string, result: OnAISessionCallback) => boolean;

/**
 * AI session execution operation callback function type. Used to implement custom AI model execution.
 *
 * @param { string } id - The session task ID.
 * @param { string } params - Contextual data passed during execution (in JSON string format).
 * @param { OnAISessionCallback } result - Callback function to notify the system of the execution result.
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
type OnExecuteAIAction = (id: string, params: string, result: OnAISessionCallback) => void;

/**
 * AI session destruction callback function type. Used to clean up resources associated with the custom AI model.
 *
 * @param { string } id - The session task ID.
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
type OnDestroyAISession = (id: string) => void;

/**
 * Custom AI session configuration object, used to define the lifecycle callbacks of an AI session, including creation,
 * execution, and destruction.
 *
 * <!--no_check-->
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface AISessionEvent {
  /**
   * AI session type.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  aiSessionType: AISessionType;

  /**
   * Callback function triggered when an AI session is created. Returns **true** to skip the system default behavior,
   * and **false** to continue executing the system default logic.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  onCreateAISession: OnCreateAISession;

  /**
   * Callback function triggered when an AI session executes an action.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  onExecuteAIAction: OnExecuteAIAction;

  /**
   * Callback function triggered when an AI session is destroyed, used to clean up resources associated with the custom
   * AI model.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  onDestroyAISession: OnDestroyAISession;
}

/**
 * Defines the supported AI session types.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum AISessionType {
  /**
   * Translation model.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  TRANSLATOR = 1,

  /**
   * Language detection model.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  LANGUAGE_DETECTOR = 2,

  /**
   * Content summary generation model.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  SUMMARIZER = 3,

  /**
   * Writing assistant model.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  WRITER = 4,

  /**
   * Content rewriting assistant model.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  REWRITER = 5,

  /**
   * Prompt model.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  PROMPT = 6,

  /**
   * Content proofreading assistant model.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  PROOFREADER = 7
}

/**
 * Defines the result status of AI session operations.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum AISessionResultType {
  /**
   * The operation is successful.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  SUCCESS = 0,

  /**
   * The operation failed.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  FAILURE = 1,

  /**
   * The operation is in progress.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  RUNNING = 2
}

/**
 * AI session operation result callback function type. Used to report the result of session creation or execution.
 *
 * @param { AISessionResultType } state - The current result state.
 * @param { string } content - The detailed result or response content.
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
type OnAISessionCallback = (state: AISessionResultType, content: string) => void;