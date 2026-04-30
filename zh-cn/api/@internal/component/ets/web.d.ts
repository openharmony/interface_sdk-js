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
 * ÍøÒ³»æÖÆÒ³Ãæ×î´óÄÚÈİ¶ÈÁ¿ĞÅÏ¢µÄ»Øµ÷¡£
 *
 * @param { LargestContentfulPaint } largestContentfulPaint - ÍøÒ³»æÖÆÒ³Ãæ×î´óÄÚÈİ¶ÈÁ¿µÄÏêÏ¸ĞÅÏ¢¡£
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
type OnLargestContentfulPaintCallback = (largestContentfulPaint: LargestContentfulPaint) => void;

/**
 * ÍøÒ³»æÖÆÒ³Ãæ¶ÈÁ¿ĞÅÏ¢µÄ»Øµ÷£¬µ±ÍøÒ³¼ÓÔØÍêÒ³ÃæÖ÷ÒªÄÚÈİÊ±»á´¥·¢¸Ã»Øµ÷¡£
 *
 * @param { FirstMeaningfulPaint } firstMeaningfulPaint - »æÖÆÒ³ÃæÖ÷ÒªÄÚÈİ¶ÈÁ¿µÄÏêÏ¸ĞÅÏ¢¡£
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
type OnFirstMeaningfulPaintCallback = (firstMeaningfulPaint: FirstMeaningfulPaint) => void;

/**
 * ¶¨ÒåÉãÏñÍ·Ê¹ÓÃ×´Ì¬µÄÖµ¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare enum CameraCaptureState {
  /**
   * ÉãÏñÍ·Î´¹¤×÷¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  NONE = 0,
  /**
   * ÉãÏñÍ·ÔİÍ£ÖĞ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  PAUSED = 1,
  /**
   * ÉãÏñÍ·²¶»ñÖĞ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  ACTIVE = 2
}

/**
 * ¶¨ÒåÂó¿Ë·çÊ¹ÓÃ×´Ì¬µÄÖµ¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare enum MicrophoneCaptureState {
  /**
   * Âó¿Ë·çÎ´¹¤×÷¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  NONE = 0,
  /**
   * Âó¿Ë·çÔİÍ£ÖĞ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  PAUSED = 1,
  /**
   * Âó¿Ë·ç²¶»ñÖĞ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  ACTIVE = 2
}

/**
 * ¶¨ÒåÉãÏñÍ·´¥·¢»Øµ÷Ê±µÄ¸Ä±äÇ°ºóµÄ×´Ì¬ĞÅÏ¢¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare interface CameraCaptureStateChangeInfo {
  /**
   * Ô­À´µÄ×´Ì¬
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  originalState: CameraCaptureState;

  /**
   * ¸Ä±äºóµÄ×´Ì¬
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  newState: CameraCaptureState;
}

/**
 * ¶¨ÒåÂó¿Ë·ç´¥·¢»Øµ÷Ê±µÄ¸Ä±äÇ°ºóµÄ×´Ì¬ĞÅÏ¢¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare interface MicrophoneCaptureStateChangeInfo {
  /**
   * Ô­À´µÄ×´Ì¬
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  originalState: MicrophoneCaptureState;

  /**
   * ¸Ä±äºóµÄ×´Ì¬
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
 * µ±Í¬²ã±êÇ©¿É¼ûĞÔ±ä»¯Ê±´¥·¢¸Ã»Øµ÷¡£
 *
 * @param { NativeEmbedVisibilityInfo } nativeEmbedVisibilityInfo - Ìá¹©Í¬²ã±êÇ©µÄ¿É¼ûĞÔĞÅÏ¢¡£
 * @syscap SystemCapability.Web.Webview.Core
 * @since 12 dynamic
 */
type OnNativeEmbedVisibilityChangeCallback = (nativeEmbedVisibilityInfo: NativeEmbedVisibilityInfo) => void;

/**
 * Ôö¼Ó¡¢ĞŞ¸Ä»òÉ¾³ıÍ¬²ãäÖÈ¾object±êÇ©ÄÚÇ¶paramÔªËØÊ±´¥·¢´Ë»Øµ÷¡£
 *
 * @param { NativeEmbedParamDataInfo } event - object±êÇ©ÄÚÇ¶paramÔªËØµÄÏêÏ¸±ä»¯ĞÅÏ¢¡£
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
 * ¶¨ÒåÍ¬²ãäÖÈ¾object±êÇ©ÄÚÇ¶paramÔªËØµÄ×´Ì¬±ä»¯ÀàĞÍ£¬µ±Ìí¼ÓparamÔªËØÊ±´¥·¢ADD£¬ĞŞ¸ÄparamÔªËØÊôĞÔ´¥·¢UPDATE£¬É¾³ıparamÔªËØ´¥·¢DELETE¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 21 dynamic
 */
declare enum  NativeEmbedParamStatus {
  /**
   * Ìí¼ÓparamÔªËØ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  ADD = 0,

  /**
   * ¸ü¸ÄparamÔªËØÊôĞÔ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  UPDATE = 1,

  /**
   * É¾³ıparamÔªËØ¡£
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
 * Ìá¹©Í¬²ãäÖÈ¾object±êÇ©ÄÚÇ¶paramÔªËØµÄÏêÏ¸ĞÅÏ¢¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 21 dynamic
 */
declare interface NativeEmbedParamItem {
  /**
   * paramÔªËØµÄ×´Ì¬±ä»¯ÀàĞÍ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  status: NativeEmbedParamStatus;

  /**
   * paramÔªËØµÄidĞÅÏ¢¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  id: string;

  /**
   * paramÔªËØµÄ²ÎÊıÃû³Æ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  name?: string;

  /**
   * paramÔªËØµÄ²ÎÊıÖµ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  value?: string;
}

/**
 * Ìá¹©Í¬²ãäÖÈ¾object±êÇ©ÄÚÇ¶paramÔªËØ±ä»¯Ê±Í¬²ã±êÇ©µÄÏêÏ¸ĞÅÏ¢¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 21 dynamic
 */
declare interface NativeEmbedParamDataInfo {
  /**
   * Í¬²ã±êÇ©µÄÎ¨Ò»id¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  embedId: string;

  /**
   * Í¬²ã±êÇ©µÄidĞÅÏ¢¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  objectAttributeId?: string;

  /**
   * ·¢Éú±ä»¯µÄparamÔªËØµÄÏêÏ¸ĞÅÏ¢£¬°üÀ¨Ã¿Ò»¸öparamÔªËØµÄ×´Ì¬±ä»¯ÀàĞÍ¡¢id¡¢²ÎÊıÃû³ÆºÍ²ÎÊıÖµ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  paramItems?: Array<NativeEmbedParamItem>;
}

/**
 * ç»„ä»¶æ—‹è½¬æ—¶ï¼Œå®½é«˜åŠ¨ç”»è¿‡ç¨‹ä¸­ç»„ä»¶å†…å®¹å¦‚ä½•å¡«å……ä»¥é€‚åº”æ–°å°ºå¯¸çš„æ–¹å¼ã€‚
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare enum WebRotateEffect {
  /**
   * é»˜è®¤å€¼ï¼Œç»„ä»¶æ—‹è½¬æ—¶ï¼Œä¿æŒåŠ¨ç”»ç»ˆæ€çš„å†…å®¹å¤§å°ï¼Œå¹¶ä¸”å†…å®¹å§‹ç»ˆä¸ç»„ä»¶ä¿æŒå·¦ä¸Šè§’å¯¹é½ã€‚
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  TOPLEFT_EFFECT = 0,

  /**
   * ç»„ä»¶æ—‹è½¬æ—¶ï¼Œä¿æŒåŠ¨ç”»ç»ˆæ€å†…å®¹çš„å®½é«˜æ¯”è¿›è¡Œç¼©å°æˆ–æ”¾å¤§ï¼Œä½¿å†…å®¹ä¸¤è¾¹éƒ½å¤§äºæˆ–ç­‰äºç»„ä»¶ä¸¤è¾¹ï¼Œä¸”ä¸ç»„ä»¶ä¿æŒä¸­å¿ƒå¯¹é½ï¼Œæ˜¾ç¤ºå†…å®¹çš„ä¸­é—´éƒ¨åˆ†ã€‚
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
 * ÍøÒ³metaÖĞviewport-fitÅäÖÃÏî¸ü¸ÄÊ±´¥·¢µÄ»Øµ÷¡£
 *
 * @param { ViewportFit } viewportFit - ÍøÒ³metaÖĞviewport-fitÅäÖÃµÄÊÓ¿ÚÀàĞÍ¡£
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
 * µã»÷ÊÂ¼ş¼ì²â½á¹ûÀàĞÍ¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 8 dynamiconly
 * @deprecated since 21
 * @useinstead @ohos.web.webview:webview.WebHitTestType
 */
declare enum HitTestType {
  /**
   * ¿É±à¼­µÄÇøÓò¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 21
   * @useinstead @ohos.web.webview:webview.WebHitTestType.EditText
   */
  EditText = 0,

  /**
   * µç×ÓÓÊ¼şµØÖ·¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 21
   * @useinstead @ohos.web.webview:webview.WebHitTestType.Email
   */
  Email = 1,

  /**
   * ³¬Á´½Ó£¬ÆäsrcÎªhttp¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 21
   * @useinstead @ohos.web.webview:webview.WebHitTestType.HttpAnchor
   */
  HttpAnchor = 2,

  /**
   * ´øÓĞ³¬Á´½ÓµÄÍ¼Æ¬£¬ÆäÖĞ³¬Á´½ÓµÄsrcÎªhttp¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 21
   * @useinstead @ohos.web.webview:webview.WebHitTestType.HttpAnchorImg
   */
  HttpAnchorImg = 3,

  /**
   * HTML::img±êÇ©¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 21
   * @useinstead @ohos.web.webview:webview.WebHitTestType.Img
   */
  Img = 4,

  /**
   * µØÀíµØÖ·¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 21
   * @useinstead @ohos.web.webview:webview.WebHitTestType.Map
   */
  Map = 5,

  /**
   * µç»°ºÅÂë¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 21
   * @useinstead @ohos.web.webview:webview.WebHitTestType.Phone
   */
  Phone = 6,

  /**
   * Î´ÖªÄÚÈİ¡£
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
 * ÉèÖÃWebµÄ¹ı¹ö¶¯Ä£Ê½Îª¹Ø±Õ»ò¿ªÆô¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare enum OverScrollMode {
  /**
   * Web¹ı¹ö¶¯Ä£Ê½¹Ø±Õ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  NEVER = 0,

  /**
   * Web¹ı¹ö¶¯Ä£Ê½¿ªÆô¡£
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
 * WebÉîÉ«Ä£Ê½µÄÅäÖÃ
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum WebDarkMode {
  /**
   * WebÉîÉ«Ä£Ê½¹Ø±Õ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Off = 0,

  /**
   * WebÉîÉ«Ä£Ê½¿ªÆô¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  On = 1,

  /**
   * WebÉîÉ«Ä£Ê½¸úËæÏµÍ³¡£
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
   * Î´½øĞĞÍøÖ·¼ì²â
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
   * ÒôÆµ»á»°µÄÀàĞÍ
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
 * µ±Êó±ê/´¥Ãş°åµã»÷µ½Í¬²ã±êÇ©Ê±´¥·¢¸Ã»Øµ÷¡£
 *
 * @param { NativeEmbedMouseInfo } event - Ìá¹©Êó±ê/´¥Ãş°åÔÚÍ¬²ã±êÇ©ÉÏµã»÷»ò³¤°´µÄÏêÏ¸ĞÅÏ¢¡£
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
 * ÉÏÏÂÎÄ²Ëµ¥×Ô¶¨ÒåÒş²ØµÄ»Øµ÷¡£
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
 * ÎÄ¼şÑ¡ÔñÆ÷µÄÄ£Ê½¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum FileSelectorMode {
  /**
   * ´ò¿ªÉÏ´«µ¥¸öÎÄ¼ş¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  FileOpenMode = 0,

  /**
   * ´ò¿ªÉÏ´«¶à¸öÎÄ¼ş¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  FileOpenMultipleMode = 1,

  /**
   * ´ò¿ªÉÏ´«ÎÄ¼ş¼ĞÄ£Ê½¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  FileOpenFolderMode = 2,

  /**
   * ÎÄ¼ş±£´æÄ£Ê½¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  FileSaveMode = 3
}

/**
 * Web²¼¾ÖÄ£Ê½µÄÅäÖÃ¡£
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare enum WebLayoutMode {
  /**
   * Web²¼¾Ö¸úËæÏµÍ³¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  NONE = 0,

  /**
   * Web»ùÓÚÒ³Ãæ´óĞ¡µÄ×ÔÊÊÓ¦ÍøÒ³²¼¾Ö¡£
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
 * ·â×°ÏûÏ¢ĞÅÏ¢£¬×÷Îª {@link onFileSelectorShow} ·½·¨µÄÈë²Î¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class FileSelectorParam {
  /**
   * FileSelectorParamµÄ¹¹Ôìº¯Êı¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor();

  /**
   * »ñÈ¡´ËÎÄ¼şÑ¡ÔñÆ÷µÄ±êÌâ¡£
   *
   * @returns { string } Return the title of this file selector.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getTitle(): string;

  /**
   * »ñÈ¡µ±Ç°ÎÄ¼şÑ¡ÔñÆ÷µÄÑ¡ÔñÄ£Ê½¡£
   *
   * @returns { FileSelectorMode } Return the FileSelectorMode of this file selector.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getMode(): FileSelectorMode;

  /**
   * »ñÈ¡¿É½ÓÊÜµÄMIMEÀàĞÍÊı×é¡£
   *
   * @returns { Array<string> } Return an array of acceptable MIME type.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getAcceptType(): Array<string>;

  /**
   * »ñÈ¡´ËÎÄ¼şÑ¡ÔñÆ÷ÊÇ·ñÊ¹ÓÃÊµÊ±Ã½ÌåÅÄÉãËùµÃÄÚÈİ¡£
   *
   * @returns { boolean } Return {@code true} if captured media; return {@code false} otherwise.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  isCapture(): boolean;

  /**
   * »ñÈ¡Ô­Ê¼¿É½ÓÊÜ MIME ÀàĞÍÊı×é¡£
   *
   * @returns { Array<string> } Return an array of raw acceptable MIME type.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 18 dynamic
   */
  getMimeTypes(): Array<string>;

  /**
   * »ñÈ¡ÍÆ¼öÎÄ¼şÃûÁĞ±í¡£
   *
   * @returns { string } Return the suggested file names.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  getSuggestedName(): string;

  /**
   * »ñÈ¡À­ÆğÑ¡ÔñÆ÷Ê±Ä¬ÈÏ´ò¿ªµÄÂ·¾¶¡£
   *
   * @returns { string } Return to the default path opened when pulling up the selector.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  getDefaultPath(): string;

  /**
   * »ñÈ¡ÎÄ¼şÀàĞÍµÄÃèÊöĞÅÏ¢Êı×é¡£
   *
   * @returns { Array<string> } Return an array of description of the file type.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  getDescriptions(): Array<string>;

  /**
   * »ñÈ¡ÊÇ·ñ¹ıÂËÍêÈ«Æ¥ÅäµÄÎÄ¼şÀàĞÍ¡£
   *
   * @returns { boolean } Return whether to filter all matching file types.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  isAcceptAllOptionExcluded(): boolean;

  /**
   * »ñÈ¡ÍøÒ³ÎÄ¼şµÄÒÑÑ¡ÀàĞÍÊı×é¡£
   *
   * @returns { Array<Array<AcceptableFileType>> } Return an array of selected types for web page files.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  getAcceptableFileTypes(): Array<Array<AcceptableFileType>>;
}

/**
 * ¶¨Òå JS ·µ»Ø½á¹û¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class JsResult {
  /**
   * JsResultµÄ¹¹Ôìº¯Êı¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor();

  /**
   * ÈôÈ¡Ïûµ¯´°£¬Ôò´¦ÀíÓÃ»§µÄJavaScriptÖ´ĞĞ½á¹û¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  handleCancel(): void;

  /**
   * È·ÈÏµ¯´°ºó£¬´¦ÀíÓÃ»§µÄ JavaScript Ö´ĞĞ½á¹û¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  handleConfirm(): void;

  /**
   * È·ÈÏÌáÊ¾¿òºó£¬´¦ÀíÓÃ»§µÄ JavaScript Ö´ĞĞ½á¹û¡£
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
 * ¶¨ÒåÎÄ¼şÑ¡ÔñÆ÷½á¹û£¬Óë {@link onFileSelectorShow} ·½·¨Ïà¹ØÁª¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class FileSelectorResult {
  /**
   * FileSelectorResultµÄ¹¹Ôìº¯Êı¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor();

  /**
   * Ñ¡ÔñÎÄ¼şÁĞ±í¡£
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
   *  ArkWebÓöµ½ÁËSSLÖ¤Êé´íÎó£¬¸Ã½Ó¿Ú±íÊ¾ÊÇ·ñÖÕÖ¹»òÕß¼ÌĞøÕ¹Ê¾´íÎó¸øÓÃ»§¡£
   *
   * @param { boolean } abortLoading Èç¹ûabortLoadingÎªtrue£¬ÔòÈ¡Ïûµ±Ç°ÇëÇó²¢Í£ÁôÔÚµ±Ç°Ò³Ãæ£¬Èç¹ûÎªfalse£¬Ôò¾Ü¾øºöÂÔ¸ÃSSL´íÎó£¬×îÖÕÕ¹Ê¾¿Õ°×Ò³£¬Èç¹û¿ªÆôÁËÄ¬ÈÏ´íÎóÒ³£¬ÔòÏÔÊ¾Ä¬ÈÏ´íÎóÒ³¡£Ä¬ÈÏÎªfalse
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
 * ´¥·¢ÉÏÏÂÎÄ²Ëµ¥µÄÊÂ¼şÀ´Ô´¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum ContextMenuSourceType {
  /**
   * ÆäËûÊÂ¼şÀ´Ô´¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  None = 0,

  /**
   * Êó±êÊÂ¼ş¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Mouse = 1,

  /**
   * ³¤°´ÊÂ¼ş¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  LongPress = 2
}

/**
 * ´¥·¢ÉÏÏÂÎÄ²Ëµ¥µÄÍøÒ³ÔªËØÀàĞÍ¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum ContextMenuMediaType {
  /**
   * ÆäËû·ÇÍ¼Æ¬Ã½ÌåÀàĞÍ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  None = 0,

  /**
   * Í¼Æ¬ÀàĞÍ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Image = 1
}

/**
 * ´¥·¢ÉÏÏÂÎÄ²Ëµ¥µÄÍøÒ³ÔªËØÀàĞÍ£¨ÔöÇ¿»ñÈ¡ÀàĞÍÄÜÁ¦£©¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare enum ContextMenuDataMediaType {
  /**
   * Ä¬ÈÏÖµ£¬±íÊ¾µ±Ç°ÉÏÏÂÎÄ²Ëµ¥²»¹ØÁªÈÎºÎÃ½ÌåÀàĞÍ£¨ÀıÈçÓÒ¼üÎÄ±¾»ò¿Õ°×ÇøÓò£©¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  NONE = 0,

  /**
   * Í¼Æ¬ÀàĞÍ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  IMAGE = 1,

  /**
   * ÊÓÆµÀàĞÍ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  VIDEO = 2,

  /**
   * ÒôÆµÀàĞÍ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  AUDIO = 3,

  /**
   * CanvasÀàĞÍ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  CANVAS = 4
}

/**
 * ÊäÈë¿òÀàĞÍ¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum ContextMenuInputFieldType {
  /**
   * ·ÇÊäÈë¿ò¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  None = 0,

  /**
   * ´¿ÎÄ±¾ÀàĞÍ£¬°üÀ¨text¡¢search¡¢emailµÈ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  PlainText = 1,

  /**
   * ÃÜÂëÀàĞÍ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Password = 2,

  /**
   * Êı×ÖÀàĞÍ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Number = 3,

  /**
   * µç»°ºÅÂëÀàĞÍ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Telephone = 4,

  /**
   * ÆäËûÀàĞÍ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Other = 5
}

/**
 * ¶¨ÒåÍ¬²ã±êÇ©ÉúÃüÖÜÆÚ£¬µ±¼ÓÔØÒ³ÃæÖĞÓĞÍ¬²ã±êÇ©»á´¥·¢CREATE£¬Í¬²ã±êÇ©ÒÆ¶¯»òÕß·Å´ó»á´¥·¢UPDATE£¬ÍË³öÒ³Ãæ»á´¥·¢DESTROY¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare enum NativeEmbedStatus {
  /**
   * Í¬²ã±êÇ©´´½¨¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  CREATE = 0,

  /**
   * Í¬²ã±êÇ©¸üĞÂ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  UPDATE = 1,

  /**
   * Í¬²ã±êÇ©Ïú»Ù¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  DESTROY = 2,

  /**
   * Í¬²ã±êÇ©½øÈëBFCache¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  ENTER_BFCACHE = 3,

  /**
   * Í¬²ã±êÇ©Àë¿ªBFCache¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  LEAVE_BFCACHE = 4
}

/**
 * Ö§³ÖÒÔ°´Î»»òµÄ·½Ê½Ê¹ÓÃ´ËÃ¶¾Ù¡£ÀıÈç£¬Èç¹ûĞèÒªÍ¬Ê±Ö§³ÖCAN_CUT¡¢CAN_COPYºÍCAN_SELECT_ALL£¬¿ÉÊ¹ÓÃCAN_CUT | CAN_COPY | CAN_SELECT_ALL»ò11¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum ContextMenuEditStateFlags {
  /**
   * ²»¿É±à¼­¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  NONE = 0,

  /**
   * Ö§³Ö¼ôÇĞ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  CAN_CUT = 1 << 0,

  /**
   * Ö§³Ö¿½±´¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  CAN_COPY = 1 << 1,

  /**
   * Ö§³ÖÕ³Ìù¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  CAN_PASTE = 1 << 2,

  /**
   * Ö§³ÖÈ«Ñ¡¡£
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
 * ÍøÒ³metaÖĞviewport-fitÅäÖÃµÄÊÓ¿ÚÀàĞÍ¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare enum ViewportFit {
  /**
   * Ä¬ÈÏÖµ£¬Õû¸öÍøÒ³¿É¼û¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  AUTO = 0,

  /**
   * ³õÊ¼²¼¾ÖÊÓ¿ÚºÍÊÓ¾õÊÓ¿ÚÎªÊÊÓ¦Éè±¸ÏÔÊ¾ÆÁµÄ×î´ó¾ØĞÎÄÚ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  CONTAINS = 1,

  /**
   * ³õÊ¼²¼¾ÖÊÓ¿ÚºÍÊÓ¾õÊÓ¿ÚÎªÊÊÓ¦Éè±¸ÏÔÊ¾ÆÁµÄ×î´ó¾ØĞÎÄÚ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  COVER = 2
}

/**
 * ¶¨ÒåÉÏÏÂÎÄ²Ëµ¥²ÎÊı£¬¹ØÁª{@link WebContextMenuParam}·½·¨¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class WebContextMenuParam {
  /**
   * WebContextMenuParamµÄ¹¹Ôìº¯Êı¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor();

  /**
   * ²Ëµ¥ÔÚWeb×é¼şÄÚµÄË®Æ½Æ«ÒÆ×ø±ê¡£
   *
   * @returns { number } ÉÏÏÂÎÄ²Ëµ¥X×ø±ê¡£
   *     Õı³£Çé¿öÏÂ·µ»Ø·Ç¸ºÕûÊı£¬·ñÔò·µ»Ø -1¡£
   *     µ¥Î»£ºÏñËØ¡£
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  x(): number;

  /**
   * ²Ëµ¥ÔÚWeb×é¼şÄÚµÄ´¹Ö±Æ«ÒÆ×ø±ê¡£
   *
   * @returns { number } ÉÏÏÂÎÄ²Ëµ¥Y×ø±ê¡£
   *     Õı³£Çé¿öÏÂ·µ»Ø·Ç¸ºÕûÊı£¬·ñÔò·µ»Ø -1¡£
   *     µ¥Î»£ºÏñËØ¡£
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  y(): number;

  /**
   * Èô³¤°´Î»ÖÃÎªÁ´½Ó£¬Ôò·µ»Ø¾­¹ı°²È«Ğ£ÑéµÄÁ´½Ó URL¡£
   *
   * @returns { string } ¹ØÁªÁ´½ÓÊ±·µ»ØÁ´½ÓµØÖ·£¬·ñÔò·µ»Ø null¡£
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getLinkUrl(): string;

  /**
   * Èô³¤°´Î»ÖÃÎªÁ´½Ó£¬Ôò·µ»Ø¸ÃÁ´½ÓµÄÔ­Ê¼ URL¡£
   *
   * @returns { string } ¹ØÁªÁ´½ÓÊ±·µ»ØÎ´¹ıÂËµÄÁ´½ÓµØÖ·£¬·ñÔò·µ»Ø null¡£
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getUnfilteredLinkUrl(): string;

  /**
   * ÈôÑ¡ÖĞÔªËØ°üº¬ SRC ÊôĞÔ£¬Ôò·µ»ØÆä×ÊÔ´µØÖ· URL¡£
   *
   * @returns { string } Èôµ±Ç°ÉÏÏÂÎÄ²Ëµ¥Ô´×ÔÔªËØ src ÊôĞÔ£¬Ôò·µ»Ø×ÊÔ´Á´½ÓµØÖ·£¬·ñÔò·µ»Ø null¡£
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getSourceUrl(): string;

  /**
   * ³¤°´²Ëµ¥ËùÔÚÎ»ÖÃÊÇ·ñ°üº¬Í¼Æ¬ÄÚÈİ¡£
   *
   * @returns { boolean } ·µ»Øµ±Ç°ÉÏÏÂÎÄ²Ëµ¥Î»ÖÃÊÇ·ñ´æÔÚÍ¼Æ¬ÄÚÈİ¡£
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  existsImageContents(): boolean;

  /**
   * ·µ»ØÉÏÏÂÎÄ½ÚµãµÄÀàĞÍ¡£
   *
   * @returns { ContextMenuMediaType } ·µ»ØÉÏÏÂÎÄ½ÚµãµÄÀàĞÍ¡£
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getMediaType(): ContextMenuMediaType;

  /**
   * ·µ»ØÑ¡ÖĞµÄÎÄ±¾ÄÚÈİ¡£
   *
   * @returns { string } ·µ»ØÑ¡ÖĞÎÄ±¾£¬Î´Ñ¡ÖĞÈÎºÎÎÄ±¾Ê±·µ»Ø null¡£
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getSelectionText(): string;

  /**
   * * ·µ»ØÉÏÏÂÎÄ²Ëµ¥µÄÀ´Ô´ÀàĞÍ¡£
   *
   * @returns { ContextMenuSourceType }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getSourceType(): ContextMenuSourceType;

  /**
   * ÈôÉÏÏÂÎÄ²Ëµ¥ÔÚÊäÈë¿òÉÏ´¥·¢£¬Ôò·µ»ØÊäÈë¿òÀàĞÍ¡£
   *
   * @returns { ContextMenuInputFieldType } ÊäÈë¿òÉÏ´¥·¢²Ëµ¥Ê±·µ»ØÊäÈë¿òÀàĞÍ¡£
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getInputFieldType(): ContextMenuInputFieldType;

  /**
   * * ·µ»Øµ±Ç°ÉÏÏÂÎÄÊÇ·ñ¿É±à¼­¡£
   *
   * @returns { boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  isEditable(): boolean;

  /**
   * ·µ»ØÉÏÏÂÎÄ¿É±à¼­×´Ì¬±ê¼Ç {@link ContextMenuEditStateFlags}¡£
   *
   * @returns { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getEditStateFlags(): number;

  /**
   * ·µ»ØÑ¡Ôñ²Ëµ¥Ô¤ÀÀ¿í¶È¡£
   *
   * @returns { number } ²Ëµ¥Ô¤ÀÀ¿í¶È¡£µ¥Î»£ºÏñËØ¡£
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  getPreviewWidth(): number;

  /**
   * ·µ»ØÑ¡Ôñ²Ëµ¥Ô¤ÀÀ¸ß¶È¡£
   *
   * @returns { number } Ô¤ÀÀ²Ëµ¥¸ß¶È¡£µ¥Î»£ºÏñËØ¡£
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  getPreviewHeight(): number;

  /**
   * ·µ»ØÉÏÏÂÎÄ½ÚµãµÄÀàĞÍ¡£
   *
   * @returns { ContextMenuDataMediaType } ·µ»ØÉÏÏÂÎÄ½ÚµãµÄÀàĞÍ¡£
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
   * WebContextMenuResultµÄ¹¹Ôìº¯Êı¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor();

  /**
   * ÔÚWebContextMenuResultÖĞÎŞÆäËûµ÷ÓÃÇÒĞèÒª¹Ø±ÕÉÏÏÂÎÄ²Ëµ¥Ê±£¬
   * ¿ª·¢ÕßĞèµ÷ÓÃ´Ëº¯Êı¹Ø±Õ²Ëµ¥¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  closeContextMenu(): void;

  /**
   * ÈôWebContextMenuParam°üº¬Í¼Æ¬ÄÚÈİ£¬¸Ãº¯Êı½«¸´ÖÆµ±Ç°ÉÏÏÂÎÄ²Ëµ¥¶ÔÓ¦µÄÍ¼Æ¬¡£
   * ÈôWebContextMenuParam²»°üº¬Í¼Æ¬ÄÚÈİ£¬Ôò¸Ãº¯Êı²»Ö´ĞĞÈÎºÎ²Ù×÷¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  copyImage(): void;

  /**
   * Ö´ĞĞÓë´ËÉÏÏÂÎÄ²Ëµ¥¹ØÁªµÄ¸´ÖÆ²Ù×÷¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  copy(): void;

  /**
   * Ö´ĞĞÓë´ËÉÏÏÂÎÄ²Ëµ¥¹ØÁªµÄÕ³Ìù²Ù×÷¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  paste(): void;

  /**
   * Ö´ĞĞÓë´ËÉÏÏÂÎÄ²Ëµ¥¹ØÁªµÄ¼ôÇĞ²Ù×÷¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  cut(): void;

  /**
   * Ö´ĞĞÓë´ËÉÏÏÂÎÄ²Ëµ¥¹ØÁªµÄÈ«Ñ¡²Ù×÷¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  selectAll(): void;

  /**
   * Ö´ĞĞÓë´ËÉÏÏÂÎÄ²Ëµ¥¹ØÁªµÄÖØ×ö²Ù×÷¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  redo(): void;

  /**
   * Ö´ĞĞÓë´ËÉÏÏÂÎÄ²Ëµ¥¹ØÁªµÄ³·Ïú²Ù×÷¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  undo(): void;

  /**
   * Ö´ĞĞÓë´ËÉÏÏÂÎÄ²Ëµ¥¹ØÁªµÄÕ³Ìù²¢Æ¥ÅäÑùÊ½²Ù×÷¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  pasteAndMatchStyle(): void;

  /**
   * ÇëÇó½«ÃÜÂë±£ÏÕÏäÄÚÈİÌî³äµ½ÊäÈë¿òÖĞ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  requestPasswordAutoFill(): void;

  /**
   * Ö´ĞĞÓë´ËÉÏÏÂÎÄ²Ëµ¥¹ØÁªµÄ¡°Áí´æÎªÍ¼Ïñ¡±²Ù×÷½«´¥·¢ÏÂÔØ¹ı³Ì¡£
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
 * Í¨ÖªWeb×é¼şÍ¬²ãÊÂ¼şÏû·Ñ½á¹û£¬Ö§³ÖµÄÊÂ¼ş£º[´¥ÃşÊÂ¼şµÄÀàĞÍ]{@link enums:TouchType}ºÍ[Êó±êÊÂ¼şµÄÀàĞÍ]{@link enums:MouseAction}£¬Êó±ê½öÖ§³Ö
 * [×óÖĞÓÒ°´¼ü]{@link enums:MouseButton}¡£
 *
 * Èç¹ûÓ¦ÓÃ²»Ïû·Ñ¸ÃÊÂ¼ş£¬ÔòÓ¦ÉèÖÃÏû·Ñ½á¹ûÎªfalse£¬ÊÂ¼ş½«»á±»Web×é¼şÏû·Ñ£»·´Ö®Èç¹ûÓ¦ÓÃÏû·ÑÁË¸ÃÊÂ¼ş£¬ÔòÓ¦½«Ïû·Ñ½á¹ûÉèÖÃÎªtrue£¬Web×é¼ş½«²»Ïû·Ñ¸ÃÊÂ¼ş¡£ÈôÓ¦ÓÃÉèÖÃÏû·Ñ½á¹û²»·ûºÏÒÔÉÏÊ¹ÓÃ¹æ¸ñ£¬½«²úÉúÓë¿ª·¢ÕßÔ¤ÆÚ²»Æ¥ÅäµÄÏÖÏó¡£
 *
 * ´¥ÃşÊÂ¼şÊ¾Àı´úÂë²Î¿¼[onNativeEmbedGestureEventÊÂ¼ş]{@link web:WebAttribute.onNativeEmbedGestureEvent}¡£
 *
 * Êó±êÊÂ¼şÊ¾Àı´úÂë²Î¿¼[onNativeEmbedMouseEventÊÂ¼ş]{@link web:WebAttribute.onNativeEmbedMouseEvent}¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare class EventResult {
  /**
   * EventResultµÄ¹¹Ôìº¯Êı¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  constructor();

  /**
   * ÉèÖÃÊÖÊÆÊÂ¼şÏû·Ñ½á¹û¡£
   *
   * @param { boolean } result - ÊÇ·ñÏû·Ñ¸ÃÊÖÊÆÊÂ¼ş¡£<br>true±íÊ¾Ïû·Ñ¸ÃÊÖÊÆÊÂ¼ş£¬false±íÊ¾²»Ïû·Ñ¸ÃÊÖÊÆÊÂ¼ş¡£<br>´«Èënull»òundefinedÊ±Îªtrue¡£
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  setGestureEventResult(result: boolean): void;

  /**
   * ÉèÖÃÊÖÊÆÊÂ¼şÏû·Ñ½á¹û¡£
   *
   * @param { boolean } result - ÊÇ·ñÏû·Ñ¸ÃÊÖÊÆÊÂ¼ş¡£<br>true±íÊ¾Ïû·Ñ¸ÃÊÖÊÆÊÂ¼ş£¬false±íÊ¾²»Ïû·Ñ¸ÃÊÖÊÆÊÂ¼ş¡£<br>´«Èënull»òundefinedÊ±Îªtrue¡£
   * @param { boolean } stopPropagation - ÊÇ·ñ×èÖ¹Ã°Åİ£¬ÔÚresultÎªtrueÊ±ÉúĞ§¡£<br>true±íÊ¾×èÖ¹Ã°Åİ£¬false±íÊ¾²»×èÖ¹Ã°Åİ¡£<br>´«Èënull»òundefinedÊ±Îªtrue¡£
   * @syscap SystemCapability.Web.Webview.Core
   * @since 14 dynamic
   */
  setGestureEventResult(result: boolean, stopPropagation: boolean): void;

  /**
   * ÉèÖÃÊó±êÊÂ¼şÏû·Ñ½á¹û¡£
   *
   * @param { boolean } result - ÊÇ·ñÏû·Ñ¸ÃÊó±êÊÂ¼ş¡£<br>true±íÊ¾Ïû·Ñ¸ÃÊó±êÊÂ¼ş£¬false±íÊ¾²»Ïû·Ñ¸ÃÊó±êÊÂ¼ş¡£<br>´«Èënull»òundefinedÊ±Îªtrue¡£
   * @param { boolean } [stopPropagation] - ÊÇ·ñ×èÖ¹Ã°Åİ£¬ÔÚresultÎªtrueÊ±ÉúĞ§¡£<br>true±íÊ¾×èÖ¹Ã°Åİ£¬false±íÊ¾²»×èÖ¹Ã°Åİ¡£<br>´«Èënull»òundefinedÊ±Îª
   *     true¡£<br>Ä¬ÈÏÖµ£ºtrue¡£
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
   * ¶ÔÍøÒ³½øĞĞËõ·Å¡£
   *
   * @param { number } factor Ëõ·ÅÏµÊı¡£
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
   * »ñÈ¡µã»÷²âÊÔÀàĞÍ¡£
   *
   * @returns { HitTestType } µã»÷²âÊÔÀàĞÍ¡£
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
   * Éè¶¨Êó±êÊÂ¼şÊÇ·ñ±»×ª»»³É´¥ÃşÊÂ¼ş¡£
   *
   * Ä¬ÈÏÖµ£ºfalse¡£
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
 * Ìá¹©Í¬²ã±êÇ©µÄÏêÏ¸ĞÅÏ¢¡£
 *
 * @interface NativeEmbedInfo [since 11 - 11]
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare interface NativeEmbedInfo {
  /**
   * Í¬²ã±êÇ©µÄidĞÅÏ¢¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  id?: string;

  /**
   * Í¬²ã±êÇ©µÄtypeĞÅÏ¢£¬Í³Ò»ÎªĞ¡Ğ´×Ö·û¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  type?: string;

  /**
   * Í¬²ã±êÇ©µÄsrcĞÅÏ¢¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  src?: string;

  /**
   * Í¬²ã±êÇ©Ïà¶ÔÓÚWeb×é¼ş×óÉÏ½ÇÎª×ø±êÔ­µãµÄÎ»ÖÃĞÅÏ¢£¬´Ë´¦Çø±ğÓÚ±ê×¼Position£¬µ¥Î»Îªpx¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  position?: Position;

  /**
   * Í¬²ã±êÇ©µÄ¿í£¬µ¥Î»Îªpx¡£
   *
   * @type { ?number }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  width?: number;

  /**
   * Í¬²ã±êÇ©µÄ¸ß£¬µ¥Î»Îªpx¡£
   *
   * @type { ?number }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  height?: number;

  /**
   * Í¬²ã±êÇ©µÄurlĞÅÏ¢¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  url?: string;

  /**
   * ±êÇ©Ãû£¬Í³Ò»Îª´óĞ´×Ö·û¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  tag?: string;

  /**
   * object±êÇ©°üº¬µÄparam±êÇ©¼üÖµ¶ÔÁĞ±í£¬¸Ãmap±¾ÖÊÎªObjectÀàĞÍ£¬ÇëÊ¹ÓÃObjectÌá¹©µÄ·½·¨²Ù×÷¸Ã¶ÔÏó£¬¼´`embed.info?.param?.["name"]`¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  params?: Map<string, string>;
}

/**
 * Ìá¹©Í¬²ã±êÇ©ÉúÃüÖÜÆÚ±ä»¯µÄÏêÏ¸ĞÅÏ¢¡£
 *
 * @interface NativeEmbedDataInfo [since 11 - 11]
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare interface NativeEmbedDataInfo {
  /**
   * Í¬²ã±êÇ©ÉúÃüÖÜÆÚ×´Ì¬¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  status?: NativeEmbedStatus;

  /**
   * NativeImageµÄpsurfaceid¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  surfaceId?: string;

  /**
   * Í¬²ã±êÇ©µÄidĞÅÏ¢¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  embedId?: string;

  /**
   * Í¬²ã±êÇ©µÄÏêÏ¸ĞÅÏ¢¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  info?: NativeEmbedInfo;
}

/**
 * Ìá¹©Í¬²ã±êÇ©µÄ¿É¼ûĞÔĞÅÏ¢¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 12 dynamic
 */
declare interface NativeEmbedVisibilityInfo {
  /**
   * ¿É¼ûĞÔ¡£
   *
   * true±íÊ¾¿É¼û£¬false±íÊ¾²»¿É¼û¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  visibility: boolean;

  /**
   * Í¬²ãäÖÈ¾±êÇ©µÄÎ¨Ò»id¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  embedId: string;
}

/**
 * Ìá¹©ÊÖÖ¸´¥Ãşµ½Í¬²ã±êÇ©µÄÏêÏ¸ĞÅÏ¢¡£
 *
 * @interface NativeEmbedTouchInfo [since 11 - 11]
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare interface NativeEmbedTouchInfo {
  /**
   * Í¬²ã±êÇ©µÄÎ¨Ò»id¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  embedId?: string;

  /**
   * ÊÖÖ¸´¥Ãş¶¯×÷ĞÅÏ¢¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  touchEvent?: TouchEvent;

  /**
   * Í¨ÖªWeb×é¼şÊÖÊÆÊÂ¼şµÄÏû·Ñ½á¹û¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  result?: EventResult;
}

/**
 * Ìá¹©Êó±ê/´¥Ãş°åÔÚÍ¬²ã±êÇ©ÉÏµã»÷»ò³¤°´µÄÏêÏ¸ĞÅÏ¢¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
declare interface NativeEmbedMouseInfo {
  /**
   * Í¬²ã±êÇ©µÄÎ¨Ò»id¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  embedId?: string;

  /**
   * Êó±ê/´¥Ãş°åµã»÷/³¤°´ĞÅÏ¢¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  mouseEvent?: MouseEvent;

  /**
   * Í¨ÖªWeb×é¼şÊó±êÊÂ¼şµÄÏû·Ñ½á¹û¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  result?: EventResult;
}

/**
 * Ìá¹©ÍøÒ³»æÖÆÒ³ÃæÖ÷ÒªÄÚÈİµÄÏêÏ¸ĞÅÏ¢¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface FirstMeaningfulPaint {
  /**
   * µ¼º½Ìõ¼ÓÔØÊ±¼ä£¬µ¥Î»ÒÔÎ¢Ãë±íÊ¾¡£
   *
   * @type { ?number }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  navigationStartTime?: number;

  /**
   * »æÖÆÒ³ÃæÖ÷ÒªÄÚÈİÊ±¼ä£¬µ¥Î»ÒÔºÁÃë±íÊ¾¡£
   *
   * @type { ?number }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  firstMeaningfulPaintTime?: number;
}

/**
 * Ìá¹©ÍøÒ³»æÖÆÒ³Ãæ×î´óÄÚÈİµÄÏêÏ¸ĞÅÏ¢¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LargestContentfulPaint {
  /**
   * µ¼º½Ìõ¼ÓÔØÊ±¼ä£¬µ¥Î»ÒÔÎ¢Ãë±íÊ¾¡£
   *
   * @type { ?number }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  navigationStartTime?: number;

  /**
   * ×î´óÍ¼Æ¬¼ÓÔØµÄÊ±¼ä£¬µ¥Î»ÊÇÒÔºÁÃë±íÊ¾¡£
   *
   * @type { ?number }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  largestImagePaintTime?: number;

  /**
   * ×î´óÎÄ±¾¼ÓÔØÊ±¼ä£¬µ¥Î»ÊÇÒÔºÁÃë±íÊ¾¡£
   *
   * @type { ?number }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  largestTextPaintTime?: number;

  /**
   * ×î´óÍ¼Æ¬ÏñËØÎ»Êı¡£
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
 * Ò³Ãæ¼ÓÔØ¿ªÊ¼
 *
 * @typedef OnLoadStartedEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
declare interface OnLoadStartedEvent {
  /**
   * µ±Ç°¼ÓÔØÖĞµÄurl
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
   * µ±Ç°¼ÓÔØÖĞµÄurl
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
 * ¶¨ÒåÍøÒ³´¥·¢ `alert()` ¸æ¾¯Ê±µÄ»Øµ÷º¯Êı¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnAlertEvent {
  /**
   * µ±Ç°ÏÔÊ¾µ¯´°µÄÍøÒ³µÄURL¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;

  /**
   * ÏÔÊ¾ÔÚµ¯´°ÖĞµÄĞÅÏ¢¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  message: string;

  /**
   * Í¨ÖªWeb×é¼şÓÃ»§µÄ²Ù×÷½á¹û¡£
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
   * µ±Ò³ÃæË¢ĞÂÊ±£¬isReload ²ÎÊı±»ÉèÖÃÎª true£»·ñÔò£¬Ëü±£³ÖÎª false¡£Ä¬ÈÏÖµÎª false¡£
   *
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  isReload?: boolean;
}

/**
 * ¶¨ÒåÍøÒ³´¥·¢ `confirm()` µ¯´°Ê±µÄ»Øµ÷º¯Êı¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnConfirmEvent {
  /**
   * µ±Ç°ÏÔÊ¾µ¯´°µÄÍøÒ³µÄURL¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;

  /**
   * ÏÔÊ¾ÔÚµ¯´°ÖĞµÄĞÅÏ¢¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  message: string;

  /**
   * Í¨ÖªWeb×é¼şÓÃ»§µÄ²Ù×÷½á¹û¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  result: JsResult;
}

/**
 * ¶¨ÒåÍøÒ³´¥·¢ `prompt()` µ¯´°Ê±µÄ»Øµ÷º¯Êı¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnPromptEvent {
  /**
   * µ±Ç°ÏÔÊ¾µ¯´°µÄÍøÒ³µÄURL¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;

  /**
   * ÏÔÊ¾ÔÚµ¯´°ÖĞµÄĞÅÏ¢¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  message: string;

  /**
   * ¶Ô»°¿òÄ¬ÈÏ·µ»ØµÄĞÅÏ¢¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  value: string;

  /**
   * Í¨ÖªWeb×é¼şÓÃ»§µÄ²Ù×÷½á¹û¡£
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
 * ¶¨ÒåÎÄ¼şÑ¡ÔñÆ÷½á¹û¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnShowFileSelectorEvent {
  /**
   * ÓÃÓÚÍ¨ÖªWeb×é¼şÎÄ¼şÑ¡ÔñµÄ½á¹û¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  result: FileSelectorResult;

  /**
   * ÎÄ¼şÑ¡ÔñÆ÷µÄÏà¹ØĞÅÏ¢¡£
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
 * ¶¨Òåµ±Ç°Ò³ÃæÏÔÊ¾±ÈÀıµÄ±ä»¯Ê±´¥·¢¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnScaleChangeEvent {
  /**
   * ±ä»¯Ç°µÄÏÔÊ¾±ÈÀı°Ù·Ö±È¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  oldScale: number;

  /**
   * ±ä»¯ºóµÄÏÔÊ¾±ÈÀı°Ù·Ö±È¡£
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
 * ¶¨Òåµ÷ÓÃÊ±´¥·¢µÄ»Øµ÷£¬ÒÔÔÊĞí×Ô¶¨ÒåÏÔÊ¾ÉÏÏÂÎÄ²Ëµ¥¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnContextMenuShowEvent {
  /**
   * ²Ëµ¥Ïà¹Ø²ÎÊı¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  param: WebContextMenuParam;

  /**
   * ²Ëµ¥ÏàÓ¦ÊÂ¼ş´«ÈëÄÚºË¡£
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
 * ¶¨Òå¹ö¶¯Ìõ»¬¶¯µ½Ö¸¶¨Î»ÖÃÊ±´¥·¢¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnScrollEvent {
  /**
   * ÒÔÍøÒ³×î×ó¶ËÎª»ù×¼£¬Ë®Æ½¹ö¶¯Ìõ¹ö¶¯ËùÔÚÎ»ÖÃ¡£
   *
   * µ¥Î»£ºvp¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  xOffset: number;

  /**
   * ÒÔÍøÒ³×îÉÏ¶ËÎª»ù×¼£¬ÊúÖ±¹ö¶¯Ìõ¹ö¶¯ËùÔÚÎ»ÖÃ¡£
   *
   * µ¥Î»£ºvp¡£
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
 * ¶¨ÒåÍøÒ³Ê×´ÎÄÚÈİ»æÖÆ»Øµ÷º¯Êı¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnFirstContentfulPaintEvent {
  /**
   * Æô¶¯Ò³Ãæ¼ÓÔØ¿ªÊ¼µÄÊ±¼ä£¬µ¥Î»ÒÔÎ¢Ãë±íÊ¾¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  navigationStartTick: number;

  /**
   * ´ÓÆô¶¯Ò³Ãæ¼ÓÔØ¿ªÊ¼µ½µÚÒ»´Î»æÖÆÄÚÈİµÄÊ±¼ä£¬µ¥Î»ÊÇÒÔºÁÃë±íÊ¾¡£
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
 * ¶¨ÒåÍøÒ³¹ı¶È¹ö¶¯Ê±´¥·¢µÄ»Øµ÷¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnOverScrollEvent {
  /**
   * ÒÔÍøÒ³×î×ó¶ËÎª»ù×¼£¬Ë®Æ½¹ı¶È¹ö¶¯µÄÆ«ÒÆÁ¿¡£
   *
   * µ¥Î»£ºvp¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  xOffset: number;

  /**
   * ÒÔÍøÒ³×îÉÏ¶ËÎª»ù×¼£¬ÊúÖ±¹ı¶È¹ö¶¯µÄÆ«ÒÆÁ¿¡£
   *
   * µ¥Î»£ºvp¡£
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
 * ArkwebÖĞ¼ÓÔØPDFÒ³ÃæµÄÊÂ¼ş
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
   * µ±Ç°¼ÓÔØµÄPDFÒ³ÃæURL
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
 * ÍøÒ³ÔªËØĞÅÏ¢¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 13 dynamic
 */
declare enum WebElementType {
  /**
   * ÍøÒ³ÔªËØÎªÍ¼ÏñÀàĞÍ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  IMAGE = 1,

  /**
   * ÍøÒ³ÔªËØÎª³¬Á´½ÓÀàĞÍ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  LINK = 2,

  /**
   * ÍøÒ³ÔªËØÎªÎÄ±¾»ò¿É±à¼­ÇøÓòÀàĞÍ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  TEXT = 3
}

/**
 * ²Ëµ¥µÄÏìÓ¦ÀàĞÍ¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 13 dynamic
 */
declare enum WebResponseType {
  /**
   * Í¨¹ı³¤°´´¥·¢²Ëµ¥µ¯³ö¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  LONG_PRESS = 1,

  /**
   * Í¨¹ıÊó±êÓÒ¼ü´¥·¢²Ëµ¥µ¯³ö¡£
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
 * PDFÒ³Ãæ¼ÓÔØ½á¹û
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
   * PDFÎÄ¼ş¼ÓÔØÊ§°ÜµÄ´íÎóÂë
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  PARSE_ERROR_FILE = 1,

  /**
   * PDFÎÄ¼ş¸ñÊ½²»Ö§³Ö´íÎóÂë
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
   * PDF´¦ÀíÊ§°Ü´íÎóÂë
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  PARSE_ERROR_HANDLER = 4
}

/**
 * Ìø¹ıäÖÈ¾vsyncÌõ¼ş¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
declare enum WebBypassVsyncCondition {
  /**
   * Ä¬ÈÏÖµ£¬°´vsyncµ÷¶ÈÁ÷³Ì»æÖÆ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  NONE = 0,

  /**
   * ÔÚÊ¹ÓÃscrollby£¨Ö»Ö§³Ö´ø¹ö¶¯Æ«ÒÆÁ¿£©ÇÒWebÒ³Ãæ¹ö¶¯Æ«ÒÆÁ¿Îª0£¬äÖÈ¾Á÷³ÌÌø¹ıvsyncµ÷¶ÈÖ±½Ó»æÖÆ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  SCROLLBY_FROM_ZERO_OFFSET = 1
}

/**
 * Ô¤ÀÀ²Ëµ¥Ñ¡Ïî¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamiconly
 */
declare interface PreviewMenuOptions {
  /**
   * ²Ëµ¥µ¯³öÊ±Õñ¶¯Ğ§¹û¡£ĞèÅäÖÃ"ohos.permission.VIBRATE"È¨ÏŞ
   *
   * Ä¬ÈÏÖµ£ºHapticFeedbackMode.DISABLED£¬²Ëµ¥µ¯³öÊ±²»Õñ¶¯¡£
   *
   * @default HapticFeedbackMode.DISABLED
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamiconly
   */
  hapticFeedbackMode?: HapticFeedbackMode;
}

/**
 * ×Ô¶¨Òå²Ëµ¥À©Õ¹Ïî¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 13 dynamic
 */
declare interface SelectionMenuOptionsExt {
  /**
   * ×Ô¶¨ÒåÑ¡Ôñ²Ëµ¥µ¯³öÊ±»Øµ÷¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  onAppear?: Callback<void>;

  /**
   * ×Ô¶¨ÒåÑ¡Ôñ²Ëµ¥¹Ø±ÕÊ±»Øµ÷¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  onDisappear?: Callback<void>;

  /**
   * ×Ô¶¨ÒåÑ¡Ôñ²Ëµ¥µÄÔ¤ÀÀÄÚÈİÑùÊ½£¬Î´ÅäÖÃÊ±ÎŞÔ¤ÀÀÄÚÈİ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  preview?: CustomBuilder;

  /**
   * ×Ô¶¨ÒåÑ¡Ôñ²Ëµ¥ÀàĞÍ¡£
   *
   * Ä¬ÈÏÖµ£º`MenuType.SELECTION_MENU`¡£
   *
   * ´ÓAPI version 20Æğ£¬`MenuType.PREVIEW_MENU`Ö§³Ö³¬Á´½ÓÔ¤ÀÀ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  menuType?: MenuType;

  /**
   * ×Ô¶¨ÒåÑ¡ÔñÔ¤ÀÀ²Ëµ¥Ñ¡Ïî¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  previewMenuOptions?: PreviewMenuOptions;

  /**
   * ×Ô¶¨ÒåÑ¡Ôñ²Ëµ¥ÏÔÊ¾Ê±»Øµ÷¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  onMenuShow?: Callback<void>;

  /**
   * ×Ô¶¨ÒåÑ¡Ôñ²Ëµ¥Òş²ØÊ±»Øµ÷¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  onMenuHide?: Callback<void>;
}

/**
 * ¶¨Òå¼ì²âµ½°×ÆÁÊ±µÄ½á¹ûµÄÏ¸½Ú¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare interface BlankScreenDetails {
  /**
   * ÔÚÊ¹ÓÃµ½¼ì²âÓĞÄÚÈİµÄ½Úµã¼ì²â²ßÂÔÊ±£¬ÇÒ¿ª·¢Õß×Ô¼ºÉèÖÃÁË¼ì²âµ½½ÚµãÊıÁ¿ãĞÖµÊ±£¬¿ÉÄÜ°üº¬¸ÃÊôĞÔ¡£·ñÔòÃ»ÓĞ¸ÃÊôĞÔ¡£
   *
   * ±íÊ¾µ±Ç°ÃüÖĞÁË¶àÉÙÓĞÄÚÈİµÄ½Úµã¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  detectedContentfulNodesCount?: number;
}

/**
 * °×ÆÁµÄ¾ßÌåÔ­Òò¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare enum DetectedBlankScreenReason {
  /**
   * Ã»ÓĞÃüÖĞÈÎºÎÓĞÄÚÈİµÄ½Úµã¡£
   *
   * µ±¼ì²â²ßÂÔÎªDETECTION_CONTENTFUL_NODES_SEVENTEENÊ±¿ÉÄÜ´¥·¢¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  NO_CONTENTFUL_NODES = 0,
  /**
   * ÃüÖĞÓĞÄÚÈİ½ÚµãµÄÊıÁ¿Ğ¡ÓÚµÈÓÚãĞÖµ¡£
   *
   * µ±¼ì²â²ßÂÔÎªDETECTION_CONTENTFUL_NODES_SEVENTEEN£¬ÇÒ¿ª·¢ÕßÉèÖÃÁË½ÚµãÊıÁ¿ãĞÖµcontentfulNodesCountThresholdÊ±¿ÉÄÜ´¥·¢¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  SUB_THRESHOLD_CONTENTFUL_NODES = 1
}

/**
 * ¶¨Òå¼ì²âµ½°×ÆÁÊ±µÄÊÂ¼şĞÅÏ¢¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare interface BlankScreenDetectionEventInfo {
  /**
   * ¼ì²âµ½°×ÆÁÊ±£¬Ò³ÃæµÄurl¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  url: string;

  /**
   * ±¾´Î¼ì²âµ½°×ÆÁÊ±£¬¾ßÌåÔ­ÒòÓë¼ì²âµÄ·½·¨Ïà¹Ø¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  blankScreenReason: DetectedBlankScreenReason;

  /**
   * ±¾´Î¼ì²â°×ÆÁµÄ½á¹ûµÄÏ¸½Ú¡£
   *
   * Èçµ±·¢ÏÖ½üËÆ°×ÆÁµÄÏÖÏó²úÉú£¬Õâ¸öÏ¸½Ú¾Í°üº¬¾ßÌåÃüÖĞÁË¶àÉÙµã¡£·ñÔòÃ»ÓĞ¸ÃÊôĞÔ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  blankScreenDetails?: BlankScreenDetails;
}

/**
 * ¼ì²âµ½°×ÆÁÊ±´¥·¢´Ë»Øµ÷¡£
 *
 * @param { BlankScreenDetectionEventInfo } event - ¼ì²âµ½°×ÆÁÊ±µÄÏêÏ¸ĞÅÏ¢¡£
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
type OnDetectBlankScreenCallback = (event: BlankScreenDetectionEventInfo) => void;

/**
 * ÎÄ±¾Ñ¡ÔñÄÚÈİ·¢Éú±ä»¯ºó£¬Í¨¹ı»Øµ÷·µ»ØÑ¡ÖĞµÄÎÄ±¾¡£
 *
 * @param { string } selectionText - ËùÑ¡ÎÄ±¾¡£
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
type TextSelectionChangeCallback = (selectionText: string) => void;

/**
 * °×ÆÁ¼ì²âÊ¹ÓÃµÄ¼ì²â²ßÂÔµÄ·½·¨¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare enum BlankScreenDetectionMethod {
  /**
   * ÒÔ17µã¼ì²â·¨½øĞĞÒ³Ãæ¼ì²â¡£µ±¼ì²âµãÃüÖĞÒÑ¾­äÖÈ¾ÁËÇÒÓĞÒâÒåµÄ½Úµã£¬ÔòÈÏÎªÓĞÃüÖĞ¡£ÓĞÒâÒåµÄ½ÚµãÖ¸µÄÊÇÍ¼Æ¬£¬ÊÓÆµºÍÎÄ×Ö½Úµã¡£
   *
   * µ±ÎŞÃüÖĞ£¬»òÉÙÓÚÓÃ»§ÉèÖÃãĞÖµÃüÖĞÊ±£¬ÔòÈÏÎªÊÇ°×ÆÁ»òÕß½üËÆ°×ÆÁ¡£
   *
   * ÆäÖĞ£¬¼ì²âµÄ17¸öµãÎ»°üÀ¨£º
   *
   * ÖĞĞÄµã (1¸ö)£º Î»ÓÚÒ³ÃæµÄ¼¸ºÎÖĞĞÄ¡£
   *
   * ÄÚ²¿Íø¸ñ½»µã (16¸ö)£ºÔÚÒ³ÃæÇøÓòÄÚ¶¨ÒåÒ»¸ö5¡Á5 µÄ¾ùÔÈÍø¸ñ£¬Õâ16¸öµã¼´ÎªÒ³ÃæÄÚ4Ìõ´¹Ö±µÈ·ÖÏßºÍ4ÌõË®Æ½µÈ·ÖÏßµÄ½»µã¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  DETECTION_CONTENTFUL_NODES_SEVENTEEN = 0
}

/**
 * ¶¨Òå°×ÆÁ¼ì²âµÄ²ßÂÔÅäÖÃÑ¡Ïî¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare interface BlankScreenDetectionConfig {
  /**
   * ÊÇ·ñÊ¹ÄÜ°×ÆÁ²ßÂÔ¹¦ÄÜ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  enable: boolean;

  /**
   * ÓÃÒÔÉèÖÃĞèÒªÔÚ¼ÓÔØºó¶àÉÙÃëµÄÊ±»úÀ´¼ì²âÊÇ·ñ°×ÆÁ¡£
   *
   * µ¥Î»£ºÃë¡£
   *
   * ×¢£º
   *
   * 1.ÖØ¸´Öµ»áºöÂÔ¡£
   *
   * 2.Ğè´óÓÚ0£¬Ğ¡ÓÚ0µÄÖµ»á±»ºöÂÔ¡£
   *
   * Ä¬ÈÏÖµ£º[1.0,3.0,5.0]¡£
   *
   * @type { ?number[] }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  detectionTiming?: number[];
  /**
   * Ê¹ÓÃ¼ì²â²ßÂÔµÄ·½·¨£¬ÊÇÒ»¸öÊı×é¡£
   *
   * ×¢£º
   *
   * 1.ÖØ¸´Öµ»áºöÂÔ¡£
   *
   * Ä¬ÈÏÖµ£º[BlankScreenDetectionMethod.DETECTION_CONTENTFUL_NODES_SEVENTEEN]¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  detectionMethods?: BlankScreenDetectionMethod[];
  /**
   * ÔÚÊ¹ÓÃµ½¼ì²âÓĞÄÚÈİµÄ½Úµã¼ì²â²ßÂÔÊ±£¬²Å»áÉúĞ§¡£
   *
   * ¿ÉÒÔÉèÖÃ0-${¼ì²â²ßÂÔ×î´ó½Úµã}£¬Èç¹ûĞ¡ÓÚµÈÓÚãĞÖµÔò»á´¥·¢½üËÆ°×ÆÁ¡£
   *
   * Ä¬ÈÏÖµ£º0¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  contentfulNodesCountThreshold?: number;
}

/**
 * ¼ì²âµ½Ê×ÆÁäÖÈ¾Ê±µÄÊÂ¼şĞÅÏ¢¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare interface FirstScreenPaint {
  /**
   * ±¾´ÎÊ×ÆÁäÖÈ¾Í³¼ÆËù¶ÔÓ¦µÄurl¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  url: string;

  /**
   * urlËùÖ¸Ò³Ãæ¿ªÊ¼µ¼º½µÄÊ±¿Ì¡£
   *
   * µ¥Î»£ººÁÃë¡£
   *
   * @type { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  navigationStartTime: number;

  /**
   * urlËùÖ¸Ò³ÃæÊ×ÆÁ»æÖÆÍê³ÉµÄÊ±¿Ì¡£
   *
   * µ¥Î»£ººÁÃë¡£
   *
   * @type { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  firstScreenPaintTime: number;
}

/**
 * ¼ì²âµ½Ê×ÆÁäÖÈ¾½áÊøÊ±»á´¥·¢´Ë»Øµ÷¡£
 *
 * @param { FirstScreenPaint } firstScreenPaint - ¼ì²âµ½Ê×ÆÁäÖÈ¾Ê±µÄÏêÏ¸ĞÅÏ¢¡£
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
type OnFirstScreenPaintCallback = (firstScreenPaint: FirstScreenPaint) => void;

/**
 * µ±inputmethod±»¸½¼ÓÊ±£¬»á´¥·¢»Øµ÷¡£
 *
 * @typedef { function } OnInputmethodAttachedCallback
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
type OnInputmethodAttachedCallback = () => void;

/**
 * Ìá¹©¸ø{@Á´½Ó¼üÅÌÍâ¹Û}µÄÃ¶¾ÙÀàĞÍ£¬ÓÃÓÚÉèÖÃWeb¼üÅÌÍâ¹ÛÄ£Ê½¡£
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum WebKeyboardAppearanceMode {
  /**
   * Ä¬ÈÏÆ¤·ôÄ£Ê½£¬Ã»ÓĞ³Á½şÊ½·ç¸ñ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  NONE_IMMERSIVE = 0,

  /**
   * Ã»ÓĞ³Á½şÊ½·ç¸ñ
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  IMMERSIVE = 1,

  /**
   * Ç³É«³Á½şÊ½·ç¸ñ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  LIGHT_IMMERSIVE = 2,

  /**
   * ÉîÉ«³Á½şÊ½·ç¸ñ¡£
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
   * ÉèÖÃÍøÒ³ÊÇ·ñÖ§³ÖÊÖÊÆËõ·Å¡£
   *
   * @param { boolean } zoomAccess {@code true} ±íÊ¾ÍøÒ³Ö§³ÖÊÖÊÆËõ·Å£»{@code false} ±íÊ¾²»Ö§³Ö¡£
   *     Ä¬ÈÏÖµÎª true¡£
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
   * ÉèÖÃÍøÒ³ÊÇ·ñÔÊĞí±£´æÃÜÂë¡£
   *
   * @param { boolean } password - {@code true} ±íÊ¾ÔÊĞíÍøÒ³±£´æÃÜÂë£»{@code false} ±íÊ¾²»ÔÊĞí¡£
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
   * ÉèÖÃWebÉîÉ«Ä£Ê½¡£µ±ÊôĞÔÃ»ÓĞÏÔÊ½µ÷ÓÃÊ±£¬Ä¬ÈÏWebÉîÉ«Ä£Ê½¹Ø±Õ¡£
   *
   * µ±ÉîÉ«Ä£Ê½¿ªÆôÊ±£¬Web½«ÆôÓÃÃ½Ìå²éÑ¯prefers-color-schemeÖĞÍøÒ³Ëù¶¨ÒåµÄÉîÉ«ÑùÊ½£¬ÈôÍøÒ³Î´¶¨ÒåÉîÉ«ÑùÊ½£¬Ôò±£³ÖÔ­×´¡£ÈçĞè¿ªÆôÇ¿ÖÆÉîÉ«Ä£Ê½£¬½¨ÒéÅäºÏ
   * [forceDarkAccess]{@link WebAttribute.forceDarkAccess}Ê¹ÓÃ¡£ÉîÉ«Ä£Ê½¾ßÌåÓÃ·¨¿É²Î¿¼[WebÉîÉ«Ä£Ê½ÊÊÅä](docroot://web/web-set-dark-mode.md)¡£
   *
   * @param { WebDarkMode } mode - ÉèÖÃWebµÄÉîÉ«Ä£Ê½Îª¹Ø±Õ¡¢¿ªÆô»ò¸úËæÏµÍ³¡£<br>´«Èënull»òundefinedÊ±Îª`WebDarkMode.Off`¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  darkMode(mode: WebDarkMode): WebAttribute;

  /**
   * ÉèÖÃÍøÒ³ÊÇ·ñ¿ªÆôÇ¿ÖÆÉîÉ«Ä£Ê½¡£¸ÃÊôĞÔ½öÔÚ[darkMode]{@link WebAttribute.darkMode}¿ªÆôÉîÉ«Ä£Ê½Ê±ÉúĞ§¡£µ±ÊôĞÔÃ»ÓĞÏÔÊ½µ÷ÓÃÊ±£¬Ä¬ÈÏÍøÒ³²»¿ªÆôÇ¿ÖÆÉîÉ«Ä£Ê½¡£
   *
   * @param { boolean } access - ÉèÖÃÍøÒ³ÊÇ·ñ¿ªÆôÇ¿ÖÆÉîÉ«Ä£Ê½¡£<br>true±íÊ¾ÉèÖÃÍøÒ³¿ªÆôÇ¿ÖÆÉîÉ«Ä£Ê½£¬false±íÊ¾ÉèÖÃÍøÒ³²»¿ªÆôÇ¿ÖÆÉîÉ«Ä£Ê½¡£<br>´«Èënull»òundefinedÊ±Îªfalse¡£
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
   * ÉèÖÃÍøÒ³ÊÇ·ñ±£´æ±í¸ñÊı¾İ¡£
   *
   * @param { boolean } tableData {@code true} ±íÊ¾ÔÊĞíÍøÒ³±£´æ±í¸ñÊı¾İ£»{@code false} ±íÊ¾²»ÔÊĞí¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead ohos.web.WebAttribute#enableAutofill
   */
  tableData(tableData: boolean): WebAttribute;

  /**
   * ÉèÖÃWebÊÇ·ñÖ§³ÖhtmlÖĞmeta±êÇ©µÄviewportÊôĞÔ¡£¸Ã½Ó¿ÚÎª¿Õ½Ó¿Ú¡£
   *
   * > **ËµÃ÷£º**
   * >
   * > ´ÓAPI version 8¿ªÊ¼Ö§³Ö£¬´ÓAPI version 10¿ªÊ¼·ÏÆú£¬½¨ÒéÊ¹ÓÃ[metaViewport<sup>12+</sup>]{@link WebAttribute.metaViewport}Ìæ´ú¡£
   *
   * @param { boolean } wideViewModeAccess - ÉèÖÃWebÊÇ·ñÖ§³ÖhtmlÖĞmeta±êÇ©µÄviewportÊôĞÔ¡£<br/>true±íÊ¾Ö§³ÖhtmlÖĞmeta±êÇ©µÄviewportÊôĞÔ£¬false±íÊ¾
   *     ²»Ö§³ÖhtmlÖĞmeta±êÇ©µÄviewportÊôĞÔ¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead WebAttribute.metaViewport
   */
  wideViewModeAccess(wideViewModeAccess: boolean): WebAttribute;

  /**
   * ÉèÖÃÊÇ·ñÊ¹ÓÃ¸ÅÀÀÄ£Ê½¼ÓÔØÍøÒ³£¬¼´ËõĞ¡ÄÚÈİÒÔÊÊÓ¦ÆÁÄ»¿í¶È¡£µ±ÊôĞÔÃ»ÓĞÏÔÊ½µ÷ÓÃÊ±£¬Ä¬ÈÏÔÊĞíÊ¹ÓÃ¸ÅÀÀÄ£Ê½¼ÓÔØÍøÒ³¡£
   *
   * @param { boolean } overviewModeAccess - ÉèÖÃÊÇ·ñÊ¹ÓÃ¸ÅÀÀÄ£Ê½¼ÓÔØÍøÒ³¡£<br>true±íÊ¾ÉèÖÃÊ¹ÓÃ¸ÅÀÀÄ£Ê½¼ÓÔØÍøÒ³£¬false±íÊ¾ÉèÖÃ²»Ê¹ÓÃ¸ÅÀÀÄ£Ê½¼ÓÔØÍøÒ³¡£<br>´«Èëundefined»ò
   *     nullÊ±Îªfalse¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  overviewModeAccess(overviewModeAccess: boolean): WebAttribute;

  /**
   * ÉèÖÃÍøÒ³µÄ¹ı¶È¹ö¶¯Ä£Ê½
   *
   * @param { OverScrollMode } mode - ¹ı¶È¹ö¶¯Ä£Ê½£¬¿É²Î¿¼ {@link OverScrollMode}¡£
   *     Ä¬ÈÏÖµÎª OverScrollMode.NEVER¡£
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
   * ÉèÖÃÒ³ÃæµÄÎÄ±¾Ëõ·Å°Ù·Ö±È¡£
   *
   * > **ËµÃ÷£º**
   * >
   * > ´ÓAPI version 8¿ªÊ¼Ö§³Ö£¬´ÓAPI version 9¿ªÊ¼·ÏÆú£¬½¨ÒéÊ¹ÓÃ[textZoomRatio<sup>9+</sup>]{@link WebAttribute.textZoomRatio}´úÌæ¡£
   *
   * @param { number } textZoomAtio - ÒªÉèÖÃµÄÒ³ÃæµÄÎÄ±¾Ëõ·Å°Ù·Ö±È¡£<br>È¡Öµ·¶Î§ÎªÕıÕûÊı¡£<br>Ä¬ÈÏÖµ£º100¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead WebAttribute.textZoomRatio
   */
  textZoomAtio(textZoomAtio: number): WebAttribute;

  /**
   * ÉèÖÃÒ³ÃæµÄÎÄ±¾Ëõ·Å°Ù·Ö±È¡£µ±ÊôĞÔÃ»ÓĞÏÔÊ½µ÷ÓÃÊ±£¬Ä¬ÈÏËõ·Å°Ù·Ö±ÈÎª100%¡£
   *
   * @param { number } textZoomRatio - ÒªÉèÖÃµÄÒ³ÃæµÄÎÄ±¾Ëõ·Å°Ù·Ö±È¡£<br>È¡ÖµÎªÕûÊı£¬·¶Î§Îª(0, 2147483647]¡£
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
   * ÉèÖÃÍøÒ³µÄ³õÊ¼Ëõ·Å±ÈÀı¡£
   *
   * @param { number } percent ÍøÒ³³õÊ¼Ëõ·Å±ÈÀı¡£
   *     È¡Öµ·¶Î§£º(0, 1000]¡£
   *     Ä¬ÈÏÖµ£º100¡£
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
   * ÉèÖÃmeta±êÇ©µÄviewportÊôĞÔÊÇ·ñ¿ÉÓÃ¡£µ±ÊôĞÔÃ»ÓĞÏÔÊ½µ÷ÓÃÊ±£¬Ä¬ÈÏÖ§³Ömeta±êÇ©µÄviewportÊôĞÔ¡£
   *
   * > **ËµÃ÷£º**
   * >
   * > - µ±Ç°Í¨¹ıUser-AgentÖĞÊÇ·ñº¬ÓĞ"Mobile"×Ö¶ÎÀ´ÅĞ¶ÏÊÇ·ñ¿ªÆôÇ°¶ËHTMLÒ³ÃæÖĞmeta±êÇ©µÄviewportÊôĞÔ¡£µ±User-AgentÖĞ²»º¬ÓĞ"Mobile"×Ö¶ÎÊ±£¬meta±êÇ©ÖĞviewportÊôĞÔÄ¬ÈÏ¹Ø±Õ
   * > £¬´ËÊ±¿ÉÍ¨¹ıÏÔĞÔÉèÖÃmetaViewportÊôĞÔÎªtrueÀ´¸²¸Ç¹Ø±Õ×´Ì¬¡£
   *
   * @param { boolean } enabled - ÊÇ·ñÖ§³Ömeta±êÇ©µÄviewportÊôĞÔ¡£<br>true±íÊ¾Ö§³Ömeta±êÇ©µÄviewportÊôĞÔ£¬½«½âÎöviewportÊôĞÔ£¬²¢¸ù¾İviewportÊôĞÔ²¼¾Ö¡£<br>
   *     false±íÊ¾²»Ö§³Ömeta±êÇ©µÄviewportÊôĞÔ£¬½«²»½âÎöviewportÊôĞÔ£¬½øĞĞÄ¬ÈÏ²¼¾Ö¡£<br>´«Èënull»òundefinedÊ±Îªtrue¡£
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
   * ÔÚÒ³Ãæ¼ÓÔØ¿ªÊ¼Ê±´¥·¢¡£´Ë·½·¨Ã¿´ÎÖ÷¿ò¼Ü¼ÓÔØÊ±µ÷ÓÃÒ»´Î¡£
   * Ç¶Èë¿ò¼ÜµÄ¸ü¸Ä£¬ÀıÈçµã»÷Ä¿±êÎª iframe µÄÁ´½ÓºÍÆ¬¶Îµ¼º½£¨µ¼º½µ½ #fragment_id£©
   * ²»»á´¥·¢´Ë»Øµ÷¡£
   * Óë onPageBegin ²»Í¬£¬onLoadStarted ½öÔÚÒ³ÃæÍêÈ«¼ÓÔØÖ®Ç°×Ô¶¯ÖØ¶¨ÏòÊ±´¥·¢Ò»´Î¡£
   * OnPageBegin Ã¿´Îµ¼º½Ê±¶¼»á´¥·¢¡£
   *
   * @param { Callback<OnLoadStartedEvent> } callback ÍøÒ³¼ÓÔØ¿ªÊ¼Ê±´¥·¢µÄº¯Êı¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  onLoadStarted(callback: Callback<OnLoadStartedEvent>): WebAttribute;

  /**
   * Í¨ÖªËŞÖ÷Ó¦ÓÃ³ÌĞòÒ³ÃæÒÑ¼ÓÔØÍê³É¡£´Ë·½·¨½öÎªÖ÷¿ò¼Üµ÷ÓÃ¡£
   * Óë onPageEnd ²»Í¬£¬fragmentµ¼º½Ò²»á´¥·¢ onLoadFinished
   *
   * @param { Callback<OnLoadFinishedEvent> } callback ÍøÒ³¼ÓÔØ½áÊøÊ±´¥·¢µÄº¯Êı¡£
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
   * Web »ñÈ¡½¹µãÊ±´¥·¢¡£
   *
   * @param { function } callback Web »ñÈ¡½¹µãÊ±´¥·¢µÄº¯Êı¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onRequestSelected(callback: () => void): WebAttribute;

  /**
   * Web ÏëÒªÏÔÊ¾ JavaScript alert() µ¯´°Ê±´¥·¢¡£
   *
   * @param { function } callback ÍøÒ³ÖĞµ÷ÓÃ alert() ÏÔÊ¾¾¯¸æµ¯´°Ê±Ê¹ÓÃµÄ»Øµ÷º¯Êı¡£[since 8 - 11]
   * @param { Callback<OnAlertEvent, boolean> } callback ÍøÒ³ÖĞµ÷ÓÃ alert() ÏÔÊ¾¾¯¸æµ¯´°Ê±Ê¹ÓÃµÄ»Øµ÷¡£
   *     {@code true} ±íÊ¾Ó¦ÓÃ¿Éµ÷ÓÃ×Ô¶¨Òåµ¯´°ÄÜÁ¦£¨´øÈ·ÈÏºÍÈ¡Ïû°´Å¥£©¡£
   *     ¿ª·¢ÕßĞè¸ù¾İÓÃ»§Ñ¡Ôñ£¬Ê¹ÓÃ JsResult ½Ó¿ÚÍ¨Öª Web ×é¼şÊÇ·ñÀë¿ªµ±Ç°Ò³Ãæ¡£
   *     {@code false} ±íÊ¾µ¯´°´¦Àí½á¹ûÊÓÎªÈ¡Ïû¡£[since 12]
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
   * ÍøÒ³ĞèÒªÏÔÊ¾ JavaScript confirm() È·ÈÏµ¯´°Ê±´¥·¢¡£
   *
   * @param { function } callback ÍøÒ³µ÷ÓÃ confirm() Ê±´¥·¢µÄ»Øµ÷º¯Êı¡£[since 8 - 11]
   * @param { Callback<OnConfirmEvent, boolean> } callback ÍøÒ³µ÷ÓÃ confirm() Ê±´¥·¢µÄ»Øµ÷¡£
   *     {@code true} ±íÊ¾Ó¦ÓÃ¿Éµ÷ÓÃ×Ô¶¨Òåµ¯´°ÄÜÁ¦£¨°üº¬È·ÈÏºÍÈ¡Ïû£©£¬
   *     Ğèµ÷ÓÃ JsResult ½Ó¿Ú¸ù¾İÓÃ»§µÄÈ·ÈÏ/È¡Ïû²Ù×÷Í¨Öª Web ×é¼şÊÇ·ñÀë¿ªµ±Ç°Ò³Ãæ¡£
   *     {@code false} ±íÊ¾º¯ÊıÄÚ»æÖÆµÄ×Ô¶¨Òåµ¯´°ÎŞĞ§¡£[since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onConfirm(callback: Callback<OnConfirmEvent, boolean>): WebAttribute;

  /**
   * ÍøÒ³ĞèÒªÏÔÊ¾ JavaScript prompt() ÊäÈëµ¯´°Ê±´¥·¢¡£
   *
   * @param { function } callback ÍøÒ³µ÷ÓÃ prompt() Ê±Ê¹ÓÃµÄ»Øµ÷º¯Êı¡£[since 9 - 11]
   * @param { Callback<OnPromptEvent, boolean> } callback ÍøÒ³µ÷ÓÃ prompt() Ê±Ê¹ÓÃµÄ»Øµ÷¡£
   *     {@code true} ±íÊ¾Ó¦ÓÃ¿Éµ÷ÓÃ×Ô¶¨Òåµ¯´°ÄÜÁ¦£¨°üº¬È·ÈÏ¡¢È¡ÏûºÍÊäÈë¿ò£©£¬
   *     Ğèµ÷ÓÃ JsResult ½Ó¿Ú¸ù¾İÓÃ»§µÄÈ·ÈÏ/È¡Ïû²Ù×÷Í¨Öª Web ×é¼ş×îÖÕ´¦Àí½á¹û¡£
   *     {@code false} ±íÊ¾µ¯´°´¦Àí½á¹ûÊÓÎªÈ¡Ïû¡£[since 12]
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
   * ÎÄ¼şÑ¡ÔñÆ÷ÏÔÊ¾Ê±´¥·¢¡£
   *
   * @param { function } callback ÎÄ¼şÑ¡ÔñÆ÷ÏÔÊ¾Ê±´¥·¢µÄ»Øµ÷º¯Êı¡£[since 9 - 11]
   * @param { Callback<OnShowFileSelectorEvent, boolean> } callback ÎÄ¼şÑ¡ÔñÆ÷ÏÔÊ¾Ê±´¥·¢µÄ»Øµ÷¡£
   *     {@code true} ±íÊ¾ÓÃ»§¿Éµ÷ÓÃÏµÍ³Ìá¹©µÄµ¯´°ÄÜÁ¦¡£
   *     {@code false} ±íÊ¾º¯ÊıÄÚ»æÖÆµÄ×Ô¶¨Òåµ¯´°ÎŞĞ§¡£[since 12]
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
   * WebView Ëõ·Å±ÈÀı±ä»¯Ê±´¥·¢¡£
   *
   * @param { function } callback Ëõ·Å±ÈÀı±ä»¯Ê±´¥·¢µÄ»Øµ÷¡£[9 - 11 °æ±¾ÆğÖ§³Ö]
   * @param { Callback<OnScaleChangeEvent> } callback Ëõ·Å±ÈÀı±ä»¯Ê±´¥·¢µÄ»Øµ÷¡£[12 °æ±¾ÆğÖ§³Ö]
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
   * µ÷ÓÃÊ±´¥·¢£¬ÔÊĞí×Ô¶¨ÒåÏÔÊ¾ÉÏÏÂÎÄ²Ëµ¥¡£
   *
   * @param { function } callback µ÷ÓÃÒÔÔÊĞí×Ô¶¨ÒåÏÔÊ¾ÉÏÏÂÎÄ²Ëµ¥Ê±´¥·¢µÄ»Øµ÷¡£[9 - 11 °æ±¾ÆğÖ§³Ö]
   * @param { Callback<OnContextMenuShowEvent, boolean> } callback µ÷ÓÃÒÔÔÊĞí×Ô¶¨ÒåÏÔÊ¾ÉÏÏÂÎÄ²Ëµ¥Ê±´¥·¢µÄ»Øµ÷¡£
   *     {@code true} ±íÊ¾´¥·¢×Ô¶¨Òå²Ëµ¥¡£
   *     {@code false} ±íÊ¾×Ô¶¨Òå²Ëµ¥ÎŞĞ§¡£[12 °æ±¾ÆğÖ§³Ö]
   * @returns { WebAttribute } ×Ô¶¨ÒåÏÔÊ¾·µ»Ø true£¬·ñÔòÄ¬ÈÏÏÔÊ¾·µ»Ø false¡£
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onContextMenuShow(callback: Callback<OnContextMenuShowEvent, boolean>): WebAttribute;

  /**
   * µ÷ÓÃÊ±´¥·¢£¬ÔÊĞí×Ô¶¨ÒåÒş²ØÉÏÏÂÎÄ²Ëµ¥¡£
   *
   * @param { OnContextMenuHideCallback } callback µ÷ÓÃÒÔÔÊĞí×Ô¶¨ÒåÒş²ØÉÏÏÂÎÄ²Ëµ¥Ê±´¥·¢µÄº¯Êı¡£
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
   * ¹ö¶¯Ìõ»¬¶¯µ½Ö¸¶¨Î»ÖÃÊ±´¥·¢¡£
   *
   * @param { function } callback ÍøÒ³¹ö¶¯µ½Ö¸¶¨Î»ÖÃÊ±´¥·¢µÄº¯Êı¡£[since 9 - 11]
   * @param { Callback<OnScrollEvent> } callback ÍøÒ³¹ö¶¯µ½Ö¸¶¨Î»ÖÃÊ±´¥·¢µÄº¯Êı¡£[since 12]
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
   * ÉèÖÃÍøÒ³µÄstandard font×ÖÌå¿â£¬ÓÃÓÚäÖÈ¾htmlÇ°¶ËÎ´Ö¸¶¨×ÖÌåÑùÊ½µÄÔªËØ¡£
   *
   * µ±ÊôĞÔÃ»ÓĞÏÔÊ½µ÷ÓÃÊ±£¬Ä¬ÈÏÍøÒ³µÄstandard font×ÖÌå¿âÎªsans-serif¡£
   *
   * @param { string } family - ÉèÖÃÍøÒ³µÄstandard font×ÖÌå¿â¡£<br>´«Èënull»òundefinedÊ±Îªsans-serif¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  webStandardFont(family: string): WebAttribute;

  /**
   * ÉèÖÃÍøÒ³µÄserif font×ÖÌå¿â£¬ÓÃÓÚäÖÈ¾htmlÇ°¶ËÊ¹ÓÃserif×ÖÌåµÄÔªËØ¡£
   *
   * µ±ÊôĞÔÃ»ÓĞÏÔÊ½µ÷ÓÃÊ±£¬Ä¬ÈÏÍøÒ³µÄserif font×ÖÌå¿âÎªserif¡£
   *
   * @param { string } family - ÉèÖÃÍøÒ³µÄserif font×ÖÌå¿â¡£<br>´«Èënull»òundefinedÊ±Îªserif¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  webSerifFont(family: string): WebAttribute;

  /**
   * ÉèÖÃÍøÒ³µÄsans-serif font×ÖÌå¿â£¬ÓÃÓÚäÖÈ¾htmlÇ°¶ËÊ¹ÓÃsans-serif×ÖÌåµÄÔªËØ¡£
   *
   * µ±ÊôĞÔÃ»ÓĞÏÔÊ½µ÷ÓÃÊ±£¬Ä¬ÈÏÍøÒ³µÄsans-serif font×ÖÌå¿âÎªsans-serif¡£
   *
   * @param { string } family - ÉèÖÃÍøÒ³µÄsans-serif font×ÖÌå¿â¡£<br>´«Èënull»òundefinedÊ±Îªsans-serif¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  webSansSerifFont(family: string): WebAttribute;

  /**
   * ÉèÖÃÍøÒ³µÄfixed font×ÖÌå¿â£¬ÓÃÓÚäÖÈ¾htmlÇ°¶ËÊ¹ÓÃmonospace×ÖÌåµÄÔªËØ¡£
   *
   * µ±ÊôĞÔÃ»ÓĞÏÔÊ½µ÷ÓÃÊ±£¬Ä¬ÈÏÍøÒ³µÄfixed font×ÖÌå¿âÎªmonospace¡£
   *
   * @param { string } family - ÉèÖÃÍøÒ³µÄfixed font×ÖÌå¿â¡£<br>´«Èënull»òundefinedÊ±Îªmonospace¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  webFixedFont(family: string): WebAttribute;

  /**
   * ÉèÖÃÍøÒ³µÄfantasy font×ÖÌå¿â£¬ÓÃÓÚäÖÈ¾htmlÇ°¶ËÊ¹ÓÃfantasy×ÖÌåµÄÔªËØ¡£
   *
   * µ±ÊôĞÔÃ»ÓĞÏÔÊ½µ÷ÓÃÊ±£¬Ä¬ÈÏÍøÒ³µÄfantasy font×ÖÌå¿âÎªfantasy¡£
   *
   * @param { string } family - ÉèÖÃÍøÒ³µÄfantasy font×ÖÌå¿â¡£<br>´«Èënull»òundefinedÊ±Îªfantasy¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  webFantasyFont(family: string): WebAttribute;

  /**
   * ÉèÖÃÍøÒ³µÄcursive font×ÖÌå¿â£¬ÓÃÓÚäÖÈ¾htmlÇ°¶ËÊ¹ÓÃcursive×ÖÌåµÄÔªËØ¡£
   *
   * µ±ÊôĞÔÃ»ÓĞÏÔÊ½µ÷ÓÃÊ±£¬Ä¬ÈÏÍøÒ³µÄcursive font×ÖÌå¿âÎªcursive¡£
   *
   * @param { string } family - ÉèÖÃÍøÒ³µÄcursive font×ÖÌå¿â¡£<br>´«Èënull»òundefinedÊ±Îªcursive¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  webCursiveFont(family: string): WebAttribute;

  /**
   * ÉèÖÃÍøÒ³µÄÄ¬ÈÏµÈ¿í×ÖÌå´óĞ¡¡£¶ÔÓÚhtmlÇ°¶ËÊ¹ÓÃmonospace×ÖÌåÇÒÎ´Ö¸¶¨font-sizeÑùÊ½µÄÔªËØ£¬½«°´´ËÖµäÖÈ¾×ÖÌå´óĞ¡¡£
   *
   * µ±ÊôĞÔÃ»ÓĞÏÔÊ½µ÷ÓÃÊ±£¬Ä¬ÈÏµÈ¿í×ÖÌå´óĞ¡Îª13¡£
   *
   * @param { number } size Font size.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Sets the default font size for the web page.
   *
   * @param { number } size - ÉèÖÃÍøÒ³µÄÄ¬ÈÏµÈ¿í×ÖÌå´óĞ¡£¬µ¥Î»px¡£<br>ÊäÈëÖµµÄ·¶Î§Îª[-2^31, 2^31-1]£¬Êµ¼ÊäÖÈ¾Ê±³¬¹ı72pxµÄÖµ°´ÕÕ72px½øĞĞäÖÈ¾£¬µÍÓÚ1pxµÄÖµ°´ÕÕ1px½øĞĞäÖÈ¾¡£<br
   *     ><br>´«Èënull»òundefinedÊ±Îª13¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  defaultFixedFontSize(size: number): WebAttribute;

  /**
   * ÉèÖÃÍøÒ³µÄÄ¬ÈÏ×ÖÌå´óĞ¡¡£¶ÔÓÚhtmlÇ°¶ËÊ¹ÓÃ·Çmonospace×ÖÌåÇÒÎ´Ö¸¶¨font-sizeÑùÊ½µÄÔªËØ£¬½«°´´ËÖµäÖÈ¾×ÖÌå´óĞ¡¡£
   *
   * µ±ÊôĞÔÃ»ÓĞÏÔÊ½µ÷ÓÃÊ±£¬ÍøÒ³µÄÄ¬ÈÏ×ÖÌå´óĞ¡Îª16¡£
   *
   * @param { number } size Font size.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Sets the default font size for the web page.
   *
   * @param { number } size - ÉèÖÃÍøÒ³µÄÄ¬ÈÏ×ÖÌå´óĞ¡£¬µ¥Î»px¡£<br>ÊäÈëÖµµÄ·¶Î§Îª[-2^31, 2^31-1]£¬Êµ¼ÊäÖÈ¾Ê±³¬¹ı72pxµÄÖµ°´ÕÕ72px½øĞĞäÖÈ¾£¬µÍÓÚ1pxµÄÖµ°´ÕÕ1px½øĞĞäÖÈ¾¡£<br>´«
   *     Èënull»òundefinedÊ±Îª16¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  defaultFontSize(size: number): WebAttribute;

  /**
   * ÉèÖÃÍøÒ³×ÖÌå´óĞ¡×îĞ¡Öµ¡£¶ÔÓÚhtmlÇ°¶ËÔªËØ£¬ÈôÔªËØ×ÖÌå´óĞ¡µÍÓÚ¸Ã½Ó¿ÚÉèÖÃÖµ£¬½«²ÉÓÃ½Ó¿ÚÉèÖÃÖµäÖÈ¾×ÖÌå´óĞ¡¡£
   *
   * µ±ÊôĞÔÃ»ÓĞÏÔÊ½µ÷ÓÃÊ±£¬Ä¬ÈÏÍøÒ³×ÖÌå´óĞ¡×îĞ¡ÖµÎª8¡£
   *
   * @param { number } size Font size.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Sets the minimum font size for the web page.
   *
   * @param { number } size - ÉèÖÃÍøÒ³×ÖÌå´óĞ¡×îĞ¡Öµ£¬µ¥Î»px¡£<br>ÊäÈëÖµµÄ·¶Î§Îª[-2^31, 2^31-1]£¬Êµ¼ÊäÖÈ¾Ê±³¬¹ı72pxµÄÖµ°´ÕÕ72px½øĞĞäÖÈ¾£¬µÍÓÚ1pxµÄÖµ°´ÕÕ1px½øĞĞäÖÈ¾¡£<br>´«
   *     Èënull»òundefinedÊ±Îª8¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  minFontSize(size: number): WebAttribute;

  /**
   * ÉèÖÃÍøÒ³Âß¼­×ÖÌå´óĞ¡×îĞ¡Öµ¡£
   *
   * ¶ÔÓÚhtmlÇ°¶ËÎ´Ö¸¶¨font-sizeÑùÊ½µÄÔªËØ£º
   *
   * 1. ÈôÔªËØ×ÖÌå´óĞ¡µÍÓÚ¸Ã½Ó¿ÚÉèÖÃÖµ£¬½«²ÉÓÃ½Ó¿ÚÉèÖÃÖµäÖÈ¾×ÖÌå´óĞ¡¡£
   * 2. ÈôminLogicalFontSizeºÍminFontSizeÍ¬Ê±ÉèÖÃÊ±£¬¶ÔÓÚÎ´Ö¸¶¨font-sizeÑùÊ½ÔªËØ£¬½«²ÉÓÃÁ½ÕßÖĞµÄ½Ï´óÖµ¡£
   *
   * µ±ÊôĞÔÃ»ÓĞÏÔÊ½µ÷ÓÃÊ±£¬Ä¬ÈÏÍøÒ³Âß¼­×ÖÌå´óĞ¡×îĞ¡ÖµÎª8¡£
   *
   * @param { number } size Font size.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Sets the minimum logical font size for the web page.
   *
   * @param { number } size - ÉèÖÃÍøÒ³Âß¼­×ÖÌå´óĞ¡×îĞ¡Öµ£¬µ¥Î»px¡£<br>ÊäÈëÖµµÄ·¶Î§Îª[-2^31, 2^31-1]£¬Êµ¼ÊäÖÈ¾Ê±³¬¹ı72pxµÄÖµ°´ÕÕ72px½øĞĞäÖÈ¾£¬µÍÓÚ1pxµÄÖµ°´ÕÕ1px½øĞĞäÖÈ¾¡£<br
   *     >´«Èënull»òundefinedÊ±Îª18¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  minLogicalFontSize(size: number): WebAttribute;

  /**
   * ÉèÖÃÍøÒ³µÄÄ¬ÈÏ×Ö·û±àÂë¡£µ±ÊôĞÔÃ»ÓĞÏÔÊ½µ÷ÓÃÊ±£¬ÍøÒ³µÄÄ¬ÈÏ×Ö·û±àÂëÎª"UTF-8"¡£
   *
   * @param { string } textEncodingFormat - Ä¬ÈÏ×Ö·û±àÂë¡£<br>´«Èënull»òundefinedÊ±Îª"UTF-8"¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  defaultTextEncodingFormat(textEncodingFormat: string): WebAttribute;

  /**
   * ÊÇ·ñÇ¿ÖÆÏÔÊ¾¹ö¶¯Ìõ¡£
   *
   * @param { boolean } enabled {@code true} ±íÊ¾ÏÔÊ¾£»{@code false} ±íÊ¾²»ÏÔÊ¾¡£
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
   * ÉèÖÃÊÇ·ñ»æÖÆË®Æ½¹ö¶¯Ìõ¡£
   *
   * @param { boolean } horizontalScrollBar ÈôĞèÒª»æÖÆË®Æ½¹ö¶¯ÌõÔòÎª true¡£
   *     Ä¬ÈÏÖµÎª true¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  horizontalScrollBarAccess(horizontalScrollBar: boolean): WebAttribute;

  /**
   * ÉèÖÃÊÇ·ñ»æÖÆ´¹Ö±¹ö¶¯Ìõ¡£
   *
   * @param { boolean } verticalScrollBar ÈôĞèÒª»æÖÆ´¹Ö±¹ö¶¯ÌõÔòÎª true¡£
   *     Ä¬ÈÏÖµÎª true¡£
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
   * ÉèÖÃÍøÒ³ÊÇ·ñ¿ªÆôÄóºÏÁ÷³©Ä£Ê½¡£¸ÃÊôĞÔÃ»ÓĞÏÔÊ½µ÷ÓÃÊ±£¬Ä¬ÈÏ²»¿ªÆôÄóºÏÁ÷³©Ä£Ê½¡£
   *
   * @param { boolean } isEnabled - ÍøÒ³ÊÇ·ñ¿ªÆôÄóºÏÁ÷³©Ä£Ê½¡£<br>true±íÊ¾ÉèÖÃÍøÒ³¿ªÆôÄóºÏÁ÷³©Ä£Ê½£¬false±íÊ¾ÉèÖÃÍøÒ³²»¿ªÆôÄóºÏÁ÷³©Ä£Ê½¡£<br>´«Èëundefined»ònullÊ±Îªfalse
   *     ¡£
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
   * ÉèÖÃÍøÒ³Ê×´ÎÄÚÈİ»æÖÆ»Øµ÷º¯Êı¡£
   *
   * @param { function } callback - Callback invoked when the first content paint occurs on the web page. [since 10 - 11]
   * @param { Callback<OnFirstContentfulPaintEvent> } callback - ÍøÒ³Ê×´ÎÄÚÈİ»æÖÆ»Øµ÷º¯Êı¡£ [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onFirstContentfulPaint(callback: Callback<OnFirstContentfulPaintEvent>): WebAttribute;

  /**
   * ÉèÖÃÍøÒ³»æÖÆÒ³ÃæÖ÷ÒªÄÚÈİ»Øµ÷º¯Êı¡£
   *
   * @param { OnFirstMeaningfulPaintCallback } callback - ÍøÒ³»æÖÆÒ³ÃæÖ÷ÒªÄÚÈİ¶ÈÁ¿ĞÅÏ¢µÄ»Øµ÷¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onFirstMeaningfulPaint(callback: OnFirstMeaningfulPaintCallback): WebAttribute;

  /**
   * ÉèÖÃÍøÒ³»æÖÆÒ³Ãæ×î´óÄÚÈİ»Øµ÷º¯Êı¡£
   *
   * @param { OnLargestContentfulPaintCallback } callback - ÍøÒ³»æÖÆÒ³Ãæ×î´óÄÚÈİ¶ÈÁ¿ĞÅÏ¢µÄ»Øµ÷¡£
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
   * ¹ı¶È¹ö¶¯Ê±´¥·¢¡£
   *
   * @param { function } callback ·¢Éú¹ı¶È¹ö¶¯Ê±´¥·¢µÄº¯Êı¡£[since 10 - 11]
   * @param { Callback<OnOverScrollEvent> } callback ·¢Éú¹ı¶È¹ö¶¯Ê±´¥·¢µÄº¯Êı¡£[since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onOverScroll(callback: Callback<OnOverScrollEvent>): WebAttribute;

  /**
   * PDFÒ³ÃæÓÃ»§¹ö¶¯µ½µ×ÊÂ¼ş»Øµ÷
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
   * ÉèÖÃWeb²¼¾ÖÄ£Ê½¡£µ±ÊôĞÔÃ»ÓĞÏÔÊ½µ÷ÓÃÊ±£¬Ä¬ÈÏWeb²¼¾Ö¸úËæÏµÍ³Ä£Ê½¡£³£¼ûÎÊÌâÇë²Î¿¼[Web×é¼ş´óĞ¡×ÔÊÊÓ¦Ò³ÃæÄÚÈİ²¼¾Ö](docroot://web/web-fit-content.md)¡£
   *
   * > **ËµÃ÷£º**
   * >
   * > Ä¿Ç°Ö»Ö§³ÖÁ½ÖÖWeb²¼¾ÖÄ£Ê½£¬·Ö±ğÎªWeb²¼¾Ö¸úËæÏµÍ³£¨`WebLayoutMode.NONE`£©ºÍWeb×é¼ş¸ß¶È»ùÓÚÇ°¶ËÒ³Ãæ¸ß¶ÈµÄ×ÔÊÊÓ¦ÍøÒ³²¼¾Ö£¨`WebLayoutMode.FIT_CONTENT`£©¡£
   * >
   * > Web×é¼ş¸ß¶È»ùÓÚÇ°¶ËÒ³Ãæ×ÔÊÊÓ¦²¼¾ÖÓĞÈçÏÂÏŞÖÆ£º
   * >
   * > - Èç¹ûWeb×é¼ş¿í»ò³¤¶È³¬¹ı7680px£¬ÇëÔÚWeb×é¼ş´´½¨µÄÊ±ºòÖ¸¶¨`RenderMode.SYNC_RENDER`Ä£Ê½£¬·ñÔò»áÕû¸ö°×ÆÁ¡£
   * >
   * > - Web×é¼ş´´½¨ºó²»Ö§³Ö¶¯Ì¬ÇĞ»»layoutModeÄ£Ê½¡£
   * >
   * > - Web×é¼ş¿í¸ß¹æ¸ñ£ºÖ¸¶¨`RenderMode.ASYNC_RENDER`Ä£Ê½Ê±£¬·Ö±ğ²»³¬¹ı7680px¡£
   * >
   * > - Æµ·±¸ü¸ÄÒ³Ãæ¿í¸ß»á´¥·¢Web×é¼şÖØĞÂ²¼¾Ö£¬Ó°ÏìÌåÑé¡£
   * >
   * > - ²»Ö§³ÖÆÙ²¼Á÷ÍøÒ³£¨ÏÂÀ­µ½µ×²¿¼ÓÔØ¸ü¶à£©¡£
   * >
   * > - ²»Ö§³Ö¿í¶È×ÔÊÊÓ¦£¬½öÖ§³Ö¸ß¶È×ÔÊÊÓ¦¡£
   * >
   * > - ÓÉÓÚ¸ß¶È×ÔÊÊÓ¦ÍøÒ³¸ß¶È£¬ÄúÎŞ·¨Í¨¹ıĞŞ¸Ä×é¼ş¸ß¶ÈÊôĞÔÀ´ĞŞ¸Ä×é¼ş¸ß¶È¡£
   *
   * @param { WebLayoutMode } mode - ÉèÖÃweb²¼¾ÖÄ£Ê½£¬¸úËæÏµÍ³»ò×ÔÊÊÓ¦²¼¾Ö¡£<br>´«Èënull»òundefinedÊ±Îª`WebLayoutMode.NONE`
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  layoutMode(mode: WebLayoutMode): WebAttribute;

  /**
   * µ÷ÓÃÒÔÉèÖÃÇ¶Ì×¹ö¶¯Ñ¡Ïî¡£
   *
   * @param { NestedScrollOptions } value - Ç¶Ì×¹ö¶¯Ñ¡Ïî¡£ [since 11 - 13]
   * @param { NestedScrollOptions | NestedScrollOptionsExt } value - Ç¶Ì×¹ö¶¯
   *     Ñ¡Ïî¡£[since 14]
   * @returns { WebAttribute } ¹ö¶¯ÊôĞÔ¡£
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
   * ×¢²áÊ¹ÓÃÍ¬²ãäÖÈ¾µÄHTML±êÇ©ÃûºÍÀàĞÍ¡£±êÇ©Ãû½öÖ§³ÖÊ¹ÓÃ<object\>ºÍ<embed\>¡£±êÇ©ÀàĞÍÖ»ÄÜÊ¹ÓÃASCII¿ÉÏÔÊ¾×Ö·û¡£
   *
   * ÈôÖ¸¶¨ÀàĞÍÓëW3C¶¨ÒåµÄ<object\>»ò<embed\>±ê×¼ÀàĞÍÖØºÏ£¬ArkWebÄÚºË½«ÆäÊ¶±ğÎª·ÇÍ¬²ã±êÇ©¡£
   *
   * ±¾½Ó¿ÚÍ¬ÑùÊÜenableNativeEmbedMode½Ó¿Ú¿ØÖÆ£¬ÔÚÎ´Ê¹ÄÜÍ¬²ãäÖÈ¾Ê±±¾½Ó¿ÚÎŞĞ§¡£ÔÚ²»Ê¹ÓÃ±¾½Ó¿ÚµÄÇé¿öÏÂ£¬ArkWebÄÚºËÄ¬ÈÏ½«"native/"Ç°×ºÀàĞÍµÄ<embed\>±êÇ©Ê¶±ğÎªÍ¬²ã±êÇ©¡£
   *
   * ¾ßÌåÊ¹ÓÃÏêÇéÇë²Î¿¼[Í¬²ãäÖÈ¾](docroot://web/web-same-layer.md#webÒ³ÃæÖĞÍ¬²ãäÖÈ¾ÊäÈë¿ò)Ö¸ÄÏ¡£
   *
   * @param { string } tag - ±êÇ©Ãû¡£
   * @param { string } type - ±êÇ©ÀàĞÍ£¬ÄÚºËÊ¹ÓÃÇ°×ºÆ¥Åä´Ë²ÎÊı¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  registerNativeEmbedRule(tag: string, type:string): WebAttribute;

  /**
   * µ±Í¬²ã±êÇ©ÉúÃüÖÜÆÚ±ä»¯Ê±´¥·¢¸Ã»Øµ÷¡£
   *
   * @param { function } callback - Í¬²ã±êÇ©ÉúÃüÖÜÆÚ±ä»¯Ê±´¥·¢¸Ã»Øµ÷¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  onNativeEmbedLifecycleChange(callback: (event: NativeEmbedDataInfo) => void): WebAttribute;

  /**
   * µ±ÍøÒ³ÖĞÍ¬²ã±êÇ©£¨ÀıÈç<embed\>±êÇ©»ò<object\>±êÇ©£©ÔÚÊÓ¿ÚÄÚµÄ¿É¼ûĞÔ·¢Éú±ä»¯Ê±£¬½«´¥·¢¸Ã»Øµ÷¡£Í¬²ã±êÇ©Ä¬ÈÏ²»¿É¼û£¬ÈôÔÚÒ³ÃæÊ×´Î¼ÓÔØÊ±ÒÑ¿É¼û£¬Ôò»áÉÏ±¨£»Èô²»¿É¼û£¬Ôò²»»áÉÏ±¨¡£Í¬²ã±êÇ©È«²¿²»¿É¼û²ÅÊÓÎª²»¿É¼û£¬²¿·Ö¿É¼û»ò
   * È«²¿¿É¼ûÔòÊÓÎª¿É¼û¡£ÈôÒª»ñÈ¡ÒòÍ¬²ã±êÇ©CSSÊôĞÔ£¨°üÀ¨visibility¡¢displayÒÔ¼°³ß´ç±ä»¯£©µ¼ÖÂµÄ¿É¼û×´Ì¬±ä»¯£¬ĞèÅäÖÃ
   * [nativeEmbedOptions]{@link web:WebAttribute.nativeEmbedOptions}£¬²¢½«[EmbedOptions]{@link web:EmbedOptions}ÖĞµÄ
   * supportCssDisplayChange²ÎÊıÉèÎªtrue¡£
   *
   * @param { OnNativeEmbedVisibilityChangeCallback } callback - Í¬²ã±êÇ©¿É¼ûĞÔ±ä»¯Ê±´¥·¢¸Ã»Øµ÷¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  onNativeEmbedVisibilityChange(callback: OnNativeEmbedVisibilityChangeCallback): WebAttribute;

  /**
   * µ±ÊÖÖ¸´¥Ãşµ½Í¬²ã±êÇ©Ê±´¥·¢¸Ã»Øµ÷¡£
   *
   * @param { function } callback - ÊÖÖ¸´¥Ãşµ½Í¬²ã±êÇ©Ê±´¥·¢¸Ã»Øµ÷¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  onNativeEmbedGestureEvent(callback: (event: NativeEmbedTouchInfo) => void): WebAttribute;

  /**
   * ÔÚÍ¬²ã±êÇ©ÉÏÖ´ĞĞÒÔÏÂĞĞÎªÊ±´¥·¢¸Ã»Øµ÷£º
   *
   * - Ê¹ÓÃÊó±ê×ó¼ü¡¢ÖĞ¼ü¡¢ÓÒ¼ü½øĞĞµã»÷»ò³¤°´¡£
   * - Ê¹ÓÃ´¥Ãş°å½øĞĞ¶ÔÓ¦Êó±ê×ó¼ü¡¢ÖĞ¼ü¡¢ÓÒ¼üµã»÷³¤°´µÄ²Ù×÷¡£
   *
   * @param { MouseInfoCallback } callback - µ±Êó±ê/´¥Ãş°åµã»÷µ½Í¬²ã±êÇ©Ê±´¥·¢¸Ã»Øµ÷¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  onNativeEmbedMouseEvent(callback: MouseInfoCallback): WebAttribute;

  /**
   * µ÷ÓÃÒÔÉèÖÃ¸´ÖÆÑ¡Ïî
   *
   * @param { CopyOptions } value - ¸´ÖÆÑ¡Ïî¡£
   * @returns { WebAttribute } ¹ö¶¯ÊôĞÔ¡£
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
   * Ò³ÃæÎÄµµ×ÊÔ´·¢Éú´íÎóµÄÊ±ºò´¥·¢£¬Ö»ÓĞÖ÷frame»á´¥·¢
   *
   * @param { OnOverrideErrorPageCallback } callback The triggered function when the
   *                                        web page's document resource error.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  onOverrideErrorPage(callback: OnOverrideErrorPageCallback): WebAttribute;

  /**
   * ÉèÖÃWeb×é¼şÊÇ·ñ¿ªÆôÎÄ±¾×ÖÌå´óĞ¡×Ô¶¯µ÷Õû¡£µ±ÊôĞÔÃ»ÓĞÏÔÊ½µ÷ÓÃÊ±£¬Web×é¼şÄ¬ÈÏ¿ªÆôÎÄ±¾×ÖÌå´óĞ¡×Ô¶¯µ÷Õû¡£
   *
   * ÎÄ±¾×ÖÌå´óĞ¡×Ô¶¯µ÷ÕûÉúĞ§ºó£¬¶ÔÓÚ×ÖºÅ¹ıĞ¡µÄÎÄ±¾½«×Ô¶¯¼Ó´ó×ÖºÅÖÁ16px~32px£¬±ÜÃâÆÁÄ»½ÏĞ¡£¨Ä¬ÈÏÊÓ¿Ú¿í¶È < 980px£©µÄÉè±¸ÒòÎªÈ±ÉÙÒÆ¶¯¶ËÊÊÅä³öÏÖ×ÖÌå¹ıĞ¡µÄ¿É¶ÁĞÔÎÊÌâ¡£
   *
   * > **ËµÃ÷£º**
   * >
   * > - ÎÄ±¾×ÖÌå´óĞ¡×Ô¶¯µ÷ÕûÉúĞ§ĞèÒªÂú×ãµÄÇ°ÖÃÌõ¼ş£º
   * > >   - Éè±¸ĞÎÌ¬Îª£ºPhone¡¢Tablet¡¢Wearable¡¢TV¡£
   * > >   - Web×é¼şÊÓ¿Ú¿í¶È < 980px¡£
   * > >   - Ò³ÃæÎÄ±¾Á¿´ó£¬Ò³ÃæÎÄ±¾µÄ×ÖºÅ*×Ö·ûÊı ¡İ 3920¡£
   * > >   - Ç°¶ËÎŞmetaViewportÉèÖÃ£¬»òmetaViewportÉèÖÃÖĞÎŞ"width"ºÍ"initial-scale"ÊôĞÔ¡£
   *
   * @param { boolean } textAutosizing - ÎÄ±¾×Ô¶¯µ÷Õû´óĞ¡¡£<br>true±íÊ¾ÎÄ±¾×Ô¶¯µ÷Õû´óĞ¡£¬false±íÊ¾ÎÄ±¾²»×Ô¶¯µ÷Õû´óĞ¡¡£<br>´«Èëundefined»ònullÊ±Îªtrue¡£
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
   * ÉèÖÃ×Ô¶¨ÒåÎÄ±¾²Ëµ¥¡£
   *
   * @param { Array<ExpandedMenuItemOptions> } expandedMenuOptions - ×Ô¶¨ÒåÎÄ±¾²Ëµ¥ÅäÖÃÏî¡£
   *     ²Ëµ¥ÏîÊıÁ¿¡¢²Ëµ¥ÄÚÈİ³ß´ç¡¢startIcon Í¼±ê³ß´ç
   *     ¾ùÓë ArkUI Menu ×é¼ş±£³ÖÒ»ÖÂ¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamiconly
   * @deprecated since 20
   * @useinstead ohos.web.WebAttribute#editMenuOptions
   */
  selectionMenuOptions(expandedMenuOptions: Array<ExpandedMenuItemOptions>): WebAttribute;

  /**
   * ÍøÒ³metaÖĞviewport-fitÅäÖÃÏî¸ü¸ÄÊ±´¥·¢¸Ã»Øµ÷£¬Ó¦ÓÃ¿ÉÔÚ´Ë»Øµ÷ÖĞ×ÔÊÊÓ¦²¼¾ÖÊÓ¿Ú¡£
   *
   * @param { OnViewportFitChangedCallback } callback - ÍøÒ³metaÖĞviewport-fitÅäÖÃÏî¸ü¸ÄÊ±´¥·¢µÄ»Øµ÷¡£
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
   * ÉèÖÃ×Ô¶¨ÒåÎÄ±¾²Ëµ¥¡£
   *
   * @param { EditMenuOptions } editMenu - ×Ô¶¨ÒåÎÄ±¾²Ëµ¥Ñ¡Ïî¡£
   *     ²Ëµ¥ÏîÊıÁ¿¡¢²Ëµ¥ÄÚÈİ³ß´çºÍÍ¼±ê³ß´çĞèÓë ArkUI Menu ×é¼ş±£³ÖÒ»ÖÂ¡£
   *     ²Ëµ¥ÖĞ½öÖ§³ÖÊ¹ÓÃÏµÍ³Ìá¹©µÄ id Ã¶¾ÙÖµ£¨TextMenuItemId£©£¬
   *     °üÀ¨¼ôÇĞ¡¢¸´ÖÆ¡¢Õ³Ìù¡¢È«Ñ¡¡¢·­Òë¡¢ËÑË÷ÒÔ¼°ÍøÒ³ÖĞµÄ²¿·Ö AI ²Ëµ¥¡£
   *     onMenuItemClick º¯ÊıÖĞµÄ textRange ²ÎÊıÔÚÍøÒ³³¡¾°ÏÂÎŞÒâÒå£¬
   *     ´«ÈëÖµÎª -1¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  editMenuOptions(editMenu: EditMenuOptions): WebAttribute;

  /**
   * ÆôÓÃ»ò½ûÓÃ´¥¾õ·´À¡¡£
   *
   * @param { boolean } enabled - Ä¬ÈÏÖµÎª true£¬ÉèÖÃÎª false ¿É½ûÓÃ´¥¾õ·´À¡¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  enableHapticFeedback(enabled: boolean): WebAttribute;

  /**
   * °ó¶¨µ½Ñ¡Ôñ²Ëµ¥¡£
   *
   * @param { WebElementType } elementType - ±íÊ¾Ñ¡Ôñ²Ëµ¥µÄÀàĞÍ¡£
   * @param { CustomBuilder } content - ±íÊ¾Ñ¡Ôñ²Ëµ¥µÄÄÚÈİ¡£
   * @param { WebResponseType } responseType - ±íÊ¾Ñ¡Ôñ²Ëµ¥µÄÏìÓ¦ÀàĞÍ¡£
   * @param { SelectionMenuOptionsExt } [options] - ±íÊ¾Ñ¡Ôñ²Ëµ¥µÄÅäÖÃÏî¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  bindSelectionMenu(elementType: WebElementType, content: CustomBuilder, responseType: WebResponseType,
    options?: SelectionMenuOptionsExt): WebAttribute;

  /**
   * ÉèÖÃWeb×é¼şÊÇ·ñ¿ªÆô×ÖÖØ¸úËæÏµÍ³ÉèÖÃ±ä»¯¡£µ±ÊôĞÔÃ»ÓĞÏÔÊ½µ÷ÓÃÊ±£¬Web×é¼şÄ¬ÈÏ¿ªÆô×ÖÖØ¸úËæÏµÍ³ÉèÖÃ±ä»¯¡£
   *
   * > **ËµÃ÷£º**
   * >
   * > Ä¿Ç°¸ÃÄÜÁ¦Ö»Ö§³ÖÇ°¶ËÎÄ±¾ÔªËØ¸úËæ±ä»¯£¬Ôİ²»Ö§³ÖcanvasÔªËØ¡¢ÄÚÇ¶docxºÍpdf¸ñÊ½ÖĞµÄÎÄ±¾¸úËæ±ä»¯¡£
   *
   * @param { boolean } follow - ÉèÖÃWeb×é¼şÊÇ·ñ¿ªÆô×ÖÖØ¸úËæÏµÍ³ÉèÖÃ±ä»¯¡£<br>true±íÊ¾×ÖÖØ¸úËæÏµÍ³ÉèÖÃÖĞµÄ×ÖÌå´ÖÏ¸±ä»¯£¬ÏµÍ³ÉèÖÃ¸Ä±äÊ±×ÖÖØ¸úËæ±ä»¯¡£false±íÊ¾×ÖÖØ²»ÔÙ¸úËæÏµÍ³ÉèÖÃÖĞµÄ×ÖÌå´ÖÏ¸±ä
   *     »¯£¬ÏµÍ³ÉèÖÃ¸Ä±äÊ±Î¬³Öµ±Ç°×ÖÖØ²»±ä¡£<br>´«Èëundefined»ònullÊ±Îªtrue¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 18 dynamic
   */
  enableFollowSystemFontWeight(follow: boolean): WebAttribute;

  /**
   * ÉèÖÃÊÇ·ñ¶Ô½Ó²¥¿Ø
   *
   * @param { boolean } enabled trueÎª¿ªÆô£¬falseÎª¹Ø±Õ
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 18 dynamic
   */
  enableWebAVSession(enabled: boolean): WebAttribute;

  /**
   * ÉèÖÃÊÇ·ñ¿ªÆô·Ö¶Î½âÎöHTMLÓÅ»¯¡£µ±ÊôĞÔÃ»ÓĞÏÔÊ½µ÷ÓÃÊ±£¬Ä¬ÈÏÊ¹ÓÃ½âÎöÊ±¼ä×÷ÎªHTML·Ö¶Î½âÎöµÄ·Ö¶Îµã¡£
   * ArkWebÄÚºËÔÚ½âÎöHTMLÎÄµµ½á¹¹Ê±²ÉÈ¡·Ö¶Î½âÎö²ßÂÔ£¬Ö¼ÔÚ±ÜÃâ¹ı¶àÕ¼ÓÃÖ÷Ïß³Ì×ÊÔ´£¬²¢Ê¹ÍøÒ³¾ßÓĞ½¥½øÊ½¼ÓÔØÄÜÁ¦¡£ArkWebÄÚºËÄ¬ÈÏÊ¹ÓÃ½âÎöÊ±¼ä×÷Îª·Ö¶Îµã£¬µ±µ¥´Î½âÎöÊ±¼ä³¬¹ıãĞÖµÊ±£¬»áÖĞ¶Ï½âÎö£¬Ëæºó½øĞĞ²¼¾ÖºÍäÖÈ¾²Ù×÷¡£
   * ¿ªÆôÓÅ»¯ºó£¬ArkWebÄÚºË½«²»½ö¼ì²é½âÎöÊ±¼äÊÇ·ñ³¬³öÏŞÖÆ£¬»¹»á¶îÍâÅĞ¶Ï½âÎöµÄToken£¨HTMLÎÄµµµÄ×îĞ¡½âÎöµ¥Î»£¬ÀıÈç`<div>`¡¢`attr="xxx"`µÈ£©ÊıÁ¿ÊÇ·ñ³¬¹ıÄÚºË¹æ¶¨µÄãĞÖµ£¬²¢ÏÂµ÷´ËãĞÖµ¡£µ±Ò³ÃæµÄFCP£¨
   * First Contentful Paint Ê×´ÎÄÚÈİ»æÖÆ£©´¥·¢Ê±»á»Ö¸´³ÉÄ¬ÈÏµÄÖĞ¶ÏÅĞ¶ÏÂß¼­¡£Õâ½«Ê¹µÃÍøÒ³ÔÚFCPµ½À´Ö®Ç°µÄ½âÎö²Ù×÷¸üÆµ·±£¬´Ó¶øÌá¸ßÊ×Ö¡ÄÚÈİ±»ÌáÇ°½âÎöÍê³É²¢½øÈëäÖÈ¾½×¶ÎµÄ¿ÉÄÜĞÔ£¬Í¬Ê±ÓĞĞ§Ëõ¼õÊ×Ö¡äÖÈ¾µÄ¹¤×÷Á¿£¬×îÖÕÊµ
   * ÏÖFCPÊ±¼äÌáÇ°¡£
   * ÓÉÓÚÒ³ÃæµÄFCP´¥·¢Ê±»á»Ö¸´³ÉÄ¬ÈÏ·Ö¶Î½âÎöÂß¼­£¬Òò´Ë·Ö¶Î½âÎöHTMLÓÅ»¯½ö¶ÔÃ¿¸öWeb×é¼ş¼ÓÔØµÄÊ×¸öÒ³ÃæÉúĞ§¡£
   *
   * @param { boolean} optimizeParserBudget - ÉèÖÃ¿ªÆô·Ö¶Î½âÎöHTMLÓÅ»¯¡£<br>true±íÊ¾Ê¹ÓÃ½âÎö¸öÊı´úÌæ½âÎöÊ±¼ä×÷ÎªHTML·Ö¶Î½âÎöµÄ·Ö¶Îµã£¬²¢¼õÉÙÃ¿¶Î½âÎöµÄ¸öÊıÉÏÏŞ¡£false±íÊ¾Ê¹ÓÃ
   *     ½âÎöÊ±¼ä×÷ÎªHTML·Ö¶Î½âÎöµÄ·Ö¶Îµã¡£<br>´«Èëundefined»ònullÊ±Îªfalse¡£
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
   * ÉèÖÃÍ¬²ãäÖÈ¾Ïà¹ØÅäÖÃ£¬¸ÃÊôĞÔ½öÔÚ[enableNativeEmbedMode]{@link WebAttribute.enableNativeEmbedMode}¿ªÆôÊ±ÉúĞ§£¬²»Ö§³Ö¶¯Ì¬ĞŞ¸Ä¡£µ±ÊôĞÔÃ»ÓĞÏÔÊ½µ÷ÓÃÊ±£¬Ä¬ÈÏÎª`{
   * supportDefaultIntrinsicSize: false}`¡£
   *
   * @param { EmbedOptions } options - Í¬²ãäÖÈ¾Ïà¹ØÅäÖÃ¡£<br>´«Èëundefined»ònullÊ±Îª`{supportDefaultIntrinsicSize: false}`¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 16 dynamic
   */
  nativeEmbedOptions(options?: EmbedOptions): WebAttribute;

  /**
   * ¿ªÆôÊµÌåÊ¶´Ê
   *
   * @param { boolean } enable - trueÎª¿ªÆôÊµÌåÊ¶´Ê£¬false¹Ø±Õ£¬Ä¬ÈÏÖµ¹Ø±Õ
   * @returns { WebAttribute } webÊôĞÔ
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  enableDataDetector(enable: boolean): WebAttribute;

  /**
   * ÊµÌåÊ¶´ÊÅäÖÃ
   *
   * @param { TextDataDetectorConfig } config - ÊµÌåÊ¶´ÊÅäÖÃ
   * @returns { WebAttribute } webÊôĞÔ
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  dataDetectorConfig(config: TextDataDetectorConfig): WebAttribute;

  /**
   * ÉèÖÃÈÆ¹ıvsyncµÄÌõ¼ş¡£
   * Èç¹ûÌõ¼şÆ¥Åä£¬Ôò»æÖÆ²»ÒÀÀµÓÚVsyncĞÅºÅ£¬Ö±½Ó»æÖÆ
   *
   * @param { Callback<void> } callback The triggered function when the web page is active for window.open called by other web component.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  onActivateContent(callback: Callback<void>): WebAttribute;

  /**
   * µ±¿ª·¢Õßµ÷ÓÃscrollBy½Ó¿Ú½øĞĞÒ³Ãæ¹ö¶¯Ê±£¬¿ÉÒÔÍ¨¹ıbypassVsyncCondition½Ó¿ÚÉèÖÃäÖÈ¾Á÷³ÌÌø¹ıvsync£¨´¹Ö±Í¬²½£©µ÷¶È£¬Ö±½Ó´¥·¢»æÖÆ¡£¸ÃÊôĞÔÃ»ÓĞÏÔÊ½µ÷ÓÃÊ±£¬Ä¬ÈÏ²»Ìø¹ıvsyncµ÷¶È¡£
   *
   * @param { WebBypassVsyncCondition } condition - ´¥·¢äÖÈ¾Á÷³ÌÌø¹ıvsyncµ÷¶ÈµÄÌõ¼ş¡£ <br> ´«Èëundefined»ònullÊ±ÎªNONE¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  bypassVsyncCondition(condition: WebBypassVsyncCondition): WebAttribute;

  /**
   * ÉèÖÃÊÖÊÆ»ñ½¹µÄÄ£Ê½¡£µ±ÓÃ»§Ê¹ÓÃ²»Í¬ÊÖÊÆ²Ù×÷webÊ±£¬¸ù¾İËùÉèÖÃµÄÄ£Ê½¾ö¶¨ÊÇ·ñ»ñ½¹ºÍ»ñ½¹Ê±»ú¡£Ä¬ÈÏÖµDEFAULT£¬ËùÓĞÊÖÊÆ¾ù»áÔÚtouchDownÊ±»ñ½¹¡£
   *
   * @param { GestureFocusMode } mode - The gesture focus mode, which can be {@link GestureFocusMode}.
   *    The default value is FocusMode.DEFAULT.
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  gestureFocusMode(mode: GestureFocusMode): WebAttribute;

  /**
   * ÉèÖÃÊÇ·ñ×ñÊØÍøÒ³ÖĞ <meta name="viewport"> ±êÇ©ÉèÖÃµÄËõ·ÅÏŞÖÆ¡£
   *
   * @param { boolean } enable {@code true} ±íÊ¾ Web ×ñÊØ
   *     ÍøÒ³ÖĞ <meta name="viewport"> ±êÇ©ÉèÖÃµÄËõ·ÅÏŞÖÆ£»{@code false} ±íÊ¾²»×ñÊØ¡£
   *     Ä¬ÈÏÖµÎª true¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  forceEnableZoom(enable: boolean): WebAttribute;

  /**
   * µ±Í¬²ãäÖÈ¾object±êÇ©ÄÚÇ¶paramÔªËØ±ä»¯Ê±´¥·¢´Ë»Øµ÷¡£
   *
   * @param { OnNativeEmbedObjectParamChangeCallback } callback - Ôö¼Ó¡¢ĞŞ¸Ä»òÉ¾³ıÍ¬²ãäÖÈ¾object±êÇ©ÄÚÇ¶paramÔªËØÊ±´¥·¢´Ë»Øµ÷¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  onNativeEmbedObjectParamChange(callback: OnNativeEmbedObjectParamChangeCallback): WebAttribute;

  /**
   * è®¾ç½®Webç»„ä»¶æ—‹è½¬æ—¶ï¼Œå®½é«˜åŠ¨ç”»è¿‡ç¨‹ä¸­ç»„ä»¶å†…å®¹çš„å¡«å……æ–¹å¼ã€‚è‹¥æœªæ˜¾å¼è°ƒç”¨å±æ€§ï¼Œé»˜è®¤ä¿æŒåŠ¨ç”»ç»ˆæ€çš„å†…å®¹å¤§å°ï¼Œå†…å®¹å§‹ç»ˆä¸ç»„ä»¶å·¦ä¸Šè§’å¯¹é½ã€‚
   *
   * @param { WebRotateEffect } effect - è®¾ç½®Webç»„ä»¶æ—‹è½¬æ—¶ï¼Œå®½é«˜åŠ¨ç”»è¿‡ç¨‹ä¸­ç»„ä»¶å†…å®¹çš„å¡«å……æ–¹å¼ã€‚
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  rotateRenderEffect(effect: WebRotateEffect): WebAttribute;

  /**
   * ÉèÖÃÍøÒ³ÊÇ·ñÖ§³ÖÊ¹ÓÃ Ctrl ¼ü½øĞĞËõ·Å¡£
   *
   * @param { boolean } zoomControlAccess - {@code true} ±íÊ¾ÍøÒ³Ö§³ÖÊ¹ÓÃ Ctrl ¼üËõ·Å£¬
   *     {@code false} ±íÊ¾²»Ö§³Ö¡£
   *     Ä¬ÈÏÖµÎª true¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  zoomControlAccess(zoomControlAccess: boolean): WebAttribute;

  /**
   * Web×é¼ş¼ì²âµ½°×ÆÁÊ±´¥·¢´Ë»Øµ÷¡£
   *
   * > **ËµÃ÷£º**
   * >
   * > - ĞèÅäºÏ[blankScreenDetectionConfig]{@link web:WebAttribute.blankScreenDetectionConfig}Ê¹ÓÃ¡£·ñÔò£¬Ä¬ÈÏ¹Ø±Õ°×ÆÁ¼ì²â¹¦ÄÜ£¬²»»á·µ»Ø¼ì²âµ½°×ÆÁÊ±µÄ»Ø
   * > µ÷º¯Êı¡£
   *
   * @param { OnDetectBlankScreenCallback } callback - Web×é¼ş¼ì²âµ½°×ÆÁÊ±µÄ»Øµ÷º¯Êı¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  onDetectedBlankScreen(callback: OnDetectBlankScreenCallback): WebAttribute;

  /**
   * ÉèÖÃ°×ÆÁ¼ì²âµÄ²ßÂÔÅäÖÃ£¬ÈçÊ¹ÄÜ¿ª¹Ø¡¢¼ì²âÊ±¼äºÍ¼ì²â²ßÂÔµÈ¡£µ±ÊôĞÔÃ»ÓĞÏÔÊ½µ÷ÓÃÊ±£¬Ä¬ÈÏ¹Ø±Õ°×ÆÁ¼ì²â¡£
   *
   * > **ËµÃ÷£º**
   * >
   * > - ¸ù¾İdetectConfigµÄÅäÖÃ£¬ÔÚÍøÒ³¼ÓÔØºó¼ì²âµ½°×ÆÁ»òÕß½üËÆ°×ÆÁÏÖÏó£¬¿É´¥·¢»Øµ÷
   * > [onDetectedBlankScreen]{@link web:WebAttribute.onDetectedBlankScreen}¡£
   * >
   * > - ÉèÖÃºóÏÂ´Îµ¼º½ÉúĞ§¡£
   * >
   * > - µ±ÓÃ»§ÓëÍøÒ³·¢Éú½»»¥ºó£¬²»ÔÙ»á¼ÌĞø¼ì²éÊÇ·ñ°×ÆÁ¡£
   * >
   * > - ²»Ö§³ÖlayoutModeÎªWebLayoutMode.FIT_CONTENTµÄ³¡¾°¡£
   *
   * @param { BlankScreenDetectionConfig } detectConfig - °×ÆÁ¼ì²âµÄ²ßÂÔÅäÖÃ¡£
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
   * ÉèÖÃÊÇ·ñÆôÓÃÎÄ±¾Ñ¡ÔñµÄAI²Ëµ¥¹¦ÄÜ£¬ÆôÓÃºó¿ÉÊ¶±ğÑ¡ÇøÖĞµÄÓÊ¼ş¡¢µç»°¡¢ÍøÖ·¡¢ÈÕÆÚ¡¢µØÖ·µÈ£¬²¢ÔÚÎÄ±¾Ñ¡Ôñ²Ëµ¥ÖĞÕ¹Ê¾¶ÔÓ¦µÄAI²Ëµ¥Ïî¡£Ä¬ÈÏÆôÓÃAI²Ëµ¥¹¦ÄÜ¡£
   *
   * AI²Ëµ¥¹¦ÄÜÆôÓÃÊ±£¬ÔÚÍøÒ³ÖĞÑ¡ÖĞÎÄ±¾ºó£¬ÎÄ±¾Ñ¡Ôñ²Ëµ¥ÄÜ¹»Õ¹Ê¾¶ÔÓ¦µÄAI²Ëµ¥Ïî£¬°üÀ¨[TextMenuItemId]{@link text_common:TextMenuItemId}ÖĞµÄurl£¨´ò¿ªÁ´½Ó£©¡¢email£¨ĞÂ½¨ÓÊ¼ş£©¡¢
   * phoneNumber£¨ºô½Ğ£©¡¢address£¨µ¼º½Ç°Íù£©¡¢dateTime£¨ĞÂ½¨ÈÕ³Ì£©¡£
   *
   * AI²Ëµ¥ÉúĞ§Ê±£¬ĞèÔÚÑ¡ÖĞ·¶Î§ÄÚ£¬°üÀ¨Ò»¸öÍêÕûµÄAIÊµÌå£¬²ÅÄÜÕ¹Ê¾¶ÔÓ¦µÄÑ¡Ïî¡£¸Ã²Ëµ¥ÏîÓë[TextMenuItemId]{@link text_common:TextMenuItemId}ÖĞµÄaskAI²Ëµ¥Ïî²»Í¬Ê±³öÏÖ¡£
   *
   * Ê¾ÀıÊ¹ÓÃ³¡¾°Ïê¼û[Ê¹ÓÃWeb×é¼şµÄÖÇÄÜ·Ö´ÊÄÜÁ¦](docroot://web/web-data-detector.md)¡£
   *
   * > **ËµÃ÷£º**
   * >
   * > µ±enableSelectedDataDetectorÎ´ÅäÖÃ»òÉèÖÃÎªtrueÊ±£¬½«×ñÑ­
   * > [dataDetectorConfig](docroot://reference/apis-arkweb/arkts-basic-components-web-attributes.md#datadetectorconfig20)
   * > ÖĞtypesµÄÅäÖÃ£»Èô
   * > [dataDetectorConfig](docroot://reference/apis-arkweb/arkts-basic-components-web-attributes.md#datadetectorconfig20)
   * > Ò²Î´ÅäÖÃ£¬ÔòÄ¬ÈÏÊ¶±ğËùÓĞÀàĞÍ¡£
   * >
   * > µ±enableSelectedDataDetectorÉèÖÃÎªfalseÊ±£¬²»¼¤»îÊµÌåÎÄ±¾Ñ¡ÔñAI²Ëµ¥Ïî¡£
   *
   * @param { boolean } enable - ÊÇ·ñÆôÓÃWebÎÄ±¾Ê¶±ğ£¬true±íÊ¾ÆôÓÃ£¬false±íÊ¾²»ÆôÓÃ¡£<br>´«Èëundefined»ònullÊ±ÊôĞÔÖØÖÃÎªÄ¬ÈÏÖµ¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  enableSelectedDataDetector(enable: boolean): WebAttribute;

  /**
   * ÍøÒ³Ê×ÆÁäÖÈ¾½áÊøÊ±´¥·¢´Ë»Øµ÷£¬Ê¹ÓÃcallbackÒì²½»Øµ÷¡£
   *
   * > **ËµÃ÷£º**
   * >
   * > - Ê×ÆÁäÖÈ¾£¨First Screen Paint£¬FSP£©£¬¼ÇÂ¼ÁËÊÓ¿ÚÄÚÍ¼Æ¬¡¢ÎÄ±¾»òÊÓÆµÔªËØÍê³ÉäÖÈ¾ËùĞèµÄÊ±¼ä£¬ÊÇºâÁ¿Ò³ÃæÊ×´Î¼ÓÔØµ½äÖÈ¾Íê³ÉµÄºËĞÄĞÔÄÜÖ¸±ê¡£µ±Ò»¶¨Ê±¼äÄÚÊÓ¿ÚÄÚÃ»ÓĞ¿É¼ûÔªËØ³¬³öÀúÊ·»æÖÆÇøÓòÊ±£¬½«ÊÓ¿ÚÄÚÔªËØ»æÖÆµÄ
   * > ÀúÊ·×î´óµÄÊ±¿ÌÊÓÎªÊ×ÆÁäÖÈ¾Íê³ÉÊ±¿Ì¡£
   * >
   * > - ½Ó¿ÚÔÚÊ×ÆÁ»æÖÆÍê³Éºó£¬ĞèÒªµÈ´ıÒ»¶¨Ê±¼äÃ»ÓĞĞÂµÄäÖÈ¾ĞÅÏ¢ĞèÒª´¦Àíºó£¬²Å»áÉÏ±¨»Øµ÷¡£½Ó¿Ú»Øµ÷Ê±¿ÌºÍÊ×ÆÁäÖÈ¾Íê³ÉÊ±¿Ì²»Í¬¡£
   * >
   * > - äÖÈ¾Î´Íê³ÉÊ±£¬ÈôÓÃ»§ÊäÈë»ò¹ö¶¯Ò³Ãæ£¬½«»áÁ¢¼´ÉÏ±¨»Øµ÷º¯Êı¡£
   * >
   * > - ¸Ã½Ó¿ÚÊÊÓÃÓÚÔÚ¼´Ê±¼ÓÔØ³¡¾°ÏÂ»ñÈ¡Ê×ÆÁäÖÈ¾Ê±¼ä£¬ÔÚÔ¤¼ÓÔØ»òÔ¤äÖÈ¾³¡¾°ÏÂÊ¹ÓÃÎŞ·¨´ïµ½Ô¤ÆÚ¡£
   *
   * @param { OnFirstScreenPaintCallback } callback - »Øµ÷º¯Êı£¬ÉèÖÃWeb×é¼şµÄ¼ì²âµ½Ê×ÆÁäÖÈ¾¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  onFirstScreenPaint(callback: OnFirstScreenPaintCallback): WebAttribute;

  /**
   * ÉèÖÃÊÇ·ñÆôÓÃ×Ô¶¯Ìî³ä¹¦ÄÜ¡£
   *
   * @param { boolean } value - ±íÊ¾ÊÇ·ñÆôÓÃ×Ô¶¯Ìî³äµÄ±êÊ¶¡£
   *      Ä¬ÈÏÖµÎª true¡£true£ºÆôÓÃ£¬false£º½ûÓÃ¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  enableAutoFill(value: boolean): WebAttribute;

  /**
   * ÎÄ±¾Ñ¡Ôñ·¢Éú±ä»¯Ê±µ÷ÓÃ¡£
   *
   * @param { TextSelectionChangeCallback } callback - ÎÄ±¾Ñ¡Ôñ±ä»¯Ê±µÄ»Øµ÷º¯Êı¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  onTextSelectionChange(callback: TextSelectionChangeCallback): WebAttribute;

  /**
   * ÉèÖÃ Web ×é¼şÖ§³Ö AI Í¼ÏñÊ¶±ğÄÜÁ¦¡£
   *
   * @param { boolean } enable - {@code true} ±íÊ¾ÆôÓÃ Web AI Í¼ÏñÊ¶±ğÄÜÁ¦£¬
   *      {@code false} ±íÊ¾½ûÓÃ¡£
   *      Ä¬ÈÏÖµÎª true¡£
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
   * ÉèÖÃÊÇ·ñÊ¹ÄÜÄ¬ÈÏÓÒ¼ü²Ëµ¥
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
   * ÆôÓÃ»ò½ûÓÃ´Ë×é¼şµÄÍÏ¶¯¡£
   *
   * @param { boolean } value - {@code true}ÆôÓÃÍÏ¶¯£¬{@code false}½ûÓÃÍÏ¶¯¡£
   *     Ä¬ÈÏÖµÎªtrue¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enableDrag(value: boolean): WebAttribute;

  /**
   * ÉèÖÃ¹ö¶¯Ìõ²¼¾Ö²ßÂÔ¡£
   * ¿ØÖÆ¹ö¶¯ÌõÔÚÈİÆ÷ÖĞµÄ²¼¾Ö·½Ê½¡ª¡ªÒªÃ´×ñÑ­W3C±ê×¼£¬ÒªÃ´×ñÑ­ÏµÍ³Ä¬ÈÏÖµ¡£
   *
   * @param { ScrollbarLayoutPolicy } policy - ÒªÓ¦ÓÃµÄ²¼¾Ö²ßÂÔ¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  scrollbarLayoutPolicy(policy: ScrollbarLayoutPolicy): WebAttribute;

  /**
   * ÔÚWebView×é¼şÖĞÆôÓÃ»ò½ûÓÃ¹ö¶¯ÊÖÊÆµÄ·½ÏòËø¶¨¡£
   *
   * µ±ÆôÓÃ·½ÏòËø¶¨Ê±£¬¹ö¶¯Öá½«¸ù¾İ³õÊ¼
   * »¬¶¯ÏòÁ¿·½Ïò¡£´ËĞĞÎªÓĞÖúÓÚ·ÀÖ¹ÒâÍâµÄ¹ö¶¯·½Ïò¸ü¸Ä
   * ÔÚ´¥Ãş½»»¥¹ı³ÌÖĞ£¬ÌØ±ğÊÇÔÚÇ¶Ì×¹ö¶¯³¡¾°ÖĞ¡£
   *
   * @param { boolean } value - ÊÇ·ñÊ¹ÄÜ¶¨ÏòËø¶¨¡£
   *     - `true`£ºÎª¶ÔÓ¦µÄÀàĞÍÀà±ğÆôÓÃ·½ÏòËø¶¨¡£
   *     - `false`£º½ûÓÃ¶ÔÓ¦ÀàĞÍÀà±ğµÄ·½ÏòËø¶¨¡£
   * @param { ScrollDirectionalLockType } type - Ö¸¶¨·½ÏòËøµÄÓ¦ÓÃ³¡¾°¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enableScrollDirectionalLock(value: boolean, type: ScrollDirectionalLockType): WebAttribute;

  /**
   * Web×é¼şµÄ×Ô¶¨ÒåAI»á»°ÅäÖÃ¡£
   * ÓÃÓÚ×¢²á¶à¸ö×Ô¶¨ÒåAI»á»°¡£
   *
   * @param { Array<AISessionEvent> } aiSessions - AISessionOptions¶ÔÏóµÄÊı×é¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  aiSessionOptions(aiSessions: Array<AISessionEvent>): WebAttribute;

  /**
   * ÉèÖÃWebKeyboardAppearanceModeÒÔ¾ö¶¨Èí¼üÅÌµÄ³Á½şÊ½Ä£Ê½¡£
   *
   * @param { WebKeyboardAppearanceMode } mode - ´ËÍøÕ¾µÄWebKeyboardAppearanceMode¡£
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  keyboardAppearance(mode: WebKeyboardAppearanceMode): WebAttribute;

  /**
   * µ±inputmethod±»¸½¼Óµ½IMFÊ±£¬»á´¥·¢»Øµ÷¡£
   *
   * @param { OnInputmethodAttachedCallback } callback - µ±inputmethod±»¸½¼Óµ½IMFÊ±´¥·¢µÄ»Øµ÷¡£
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
 * > **ËµÃ÷£º**
 * >
 * > ´ÓAPI version 12¿ªÊ¼Ö§³Ö£¬´ÓAPI version 20¿ªÊ¼·ÏÆú£¬½¨ÒéÊ¹ÓÃ
 * > [editMenuOptions]{@link WebAttribute#editmenuoptions}Ìæ´ú¡£
 * > ×Ô¶¨Òå²Ëµ¥À©Õ¹Ïî¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamiconly
 * @deprecated since 20
 * @useinstead EditMenuOptions
 */
declare interface ExpandedMenuItemOptions {
  /**
   * ÏÔÊ¾ÄÚÈİ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamiconly
   * @deprecated since 20
   * @useinstead EditMenuOptions
   */
  content: ResourceStr;

  /**
   * ÏÔÊ¾Í¼±ê¡£Ä¬ÈÏÖµÎª¿Õ£¬²»ÏÔÊ¾Í¼±ê¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamiconly
   * @deprecated since 20
   * @useinstead EditMenuOptions
   */
  startIcon?: ResourceStr;

  /**
   * Ñ¡ÖĞµÄÎÄ±¾ĞÅÏ¢¡£
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
 * Í¨¹ıNestedScrollOptionsExt¿ÉÒÔÉèÖÃÉÏÏÂ×óÓÒËÄ¸ö·½ÏòµÄÇ¶Ì×¹ö¶¯¹æÔò¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 23]
 * @since 14 dynamic
 */
declare interface NestedScrollOptionsExt {
  /**
   * ¿É¹ö¶¯×é¼şÍùÉÏ¹ö¶¯Ê±µÄÇ¶Ì×¹ö¶¯Ñ¡Ïî¡£
   *
   * Ä¬ÈÏÖµ£ºNestedScrollMode.SELF_FIRST¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @since 14 dynamic
   */
  scrollUp?: NestedScrollMode;

  /**
   * ¿É¹ö¶¯×é¼şÍùÏÂ¹ö¶¯Ê±µÄÇ¶Ì×¹ö¶¯Ñ¡Ïî¡£
   *
   * Ä¬ÈÏÖµ£ºNestedScrollMode.SELF_FIRST¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @since 14 dynamic
   */
  scrollDown?: NestedScrollMode;

  /**
   * ¿É¹ö¶¯×é¼şÍùÓÒ¹ö¶¯Ê±µÄÇ¶Ì×¹ö¶¯Ñ¡Ïî¡£
   *
   * Ä¬ÈÏÖµ£ºNestedScrollMode.SELF_FIRST¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @since 14 dynamic
   */
  scrollRight?: NestedScrollMode;

  /**
   * ¿É¹ö¶¯×é¼şÍù×ó¹ö¶¯Ê±µÄÇ¶Ì×¹ö¶¯Ñ¡Ïî¡£
   *
   * Ä¬ÈÏÖµ£ºNestedScrollMode.SELF_FIRST¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @since 14 dynamic
   */
  scrollLeft?: NestedScrollMode;
}

/**
 * WebÍ¬²ãäÖÈ¾µÄÅäÖÃ¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 16 dynamic
 */
declare interface EmbedOptions {
  /**
   * ÉèÖÃÍ¬²ãäÖÈ¾ÔªËØÊÇ·ñÖ§³Ö¹Ì¶¨´óĞ¡ 300 * 150¡£
   *
   * µ±H5²àCSSÉèÖÃÁË´óĞ¡Ê±£¬Í¬²ãäÖÈ¾ÔªËØ´óĞ¡ÎªCSS´óĞ¡£¬·ñÔòÎª¹Ì¶¨´óĞ¡¡£
   *
   * ÎªtrueÊ±£¬¹Ì¶¨´óĞ¡Îª 300 * 150¡£
   *
   * ÎªfalseÊ±£¬ÈôH5²àCSSÎ´ÉèÖÃ´óĞ¡£¬ÔòÍ¬²ãäÖÈ¾ÔªËØ²»äÖÈ¾¡£
   *
   * Ä¬ÈÏÖµ£ºfalse
   *
   * µ¥Î»£ºÏñËØ¡£
   *
   * @default false
   * @syscap SystemCapability.Web.Webview.Core
   * @since 16 dynamic
   */
  supportDefaultIntrinsicSize?: boolean;
  /**
   * ÉèÖÃÍ¬²ãäÖÈ¾¿É¼ûĞÔ½Ó¿ÚÊÇ·ñÖ§³ÖÏÔÊ¾ÊôĞÔ¡£
   *
   * Í¬²ãäÖÈ¾¿É¼ûĞÔ½Ó¿ÚÄ¬ÈÏÖ§³ÖÍ¬²ã±êÇ©Ïà¶ÔÓÚÊÓ¿ÚµÄ¿É¼û×´Ì¬¡£
   *
   * ÉèÖÃÎªtrueÊ±£¬Ö§³ÖÏÔÊ¾CSSÊôĞÔ£¬°üÀ¨visibility¡¢displayºÍ¿í¸ß¡£
   *
   * ÉèÖÃÎªfalseÊ±£¬²»Ö§³ÖÏÔÊ¾CSSÊôĞÔ£¬½öÖ§³ÖÍ¬²ã±êÇ©Ïà¶ÔÓÚÊÓ¿ÚµÄ¿É¼ûĞÔ¡£
   *
   * @default false
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  supportCssDisplayChange?: boolean;
}

/**
 * ÊÖÊÆ»ñ½¹µÄÄ£Ê½¡£
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
declare enum GestureFocusMode {
  /**
   * Ä¬ÈÏÖµ£¬Web»áÔÚ´¥Ãş°´ÏÂÆÁÄ»Ê±ÉêÇë»ñ½¹£¬°üÀ¨µã»÷¡¢³¤°´¡¢»¬¶¯¡¢Ëõ·ÅµÈÈÎºÎ´¥ÃşÆÁÄ»µÄÊÖÊÆĞĞÎª¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  DEFAULT = 0,

  /**
   * WebÖ»»áÔÚµã»÷ºÍ³¤°´ÊÖÊÆÊÂ¼şÉú³ÉÊ±ÉêÇë»ñ½¹£¬µã»÷ºÍ³¤°´ÔÚ´¥ÃşÌ§ÆğÖ®ºóÉú³É£¬»¬¶¯ºÍËõ·ÅµÈÊÖÊÆĞĞÎª²»»á»ñ½¹¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  GESTURE_TAP_AND_LONG_PRESS = 1
}

/**
 * ¶¨ÒåÎÄ¼şÑ¡ÔñÆ÷À­È¡ÎÄ¼şÊ±ÍøÒ³ÍÆ¼öµÄÎÄ¼şÀàĞÍĞÅÏ¢¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare interface AcceptableFileType {
  /**
   * ÎÄ¼şMIMEÀàĞÍ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  mimeType: string;

  /**
   * ÎÄ¼şÀàĞÍÊı×é£¬°üº¬Èô¸É¿É¹©Ñ¡ÔñµÄÎÄ¼şÀàĞÍ¡£
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
 * ¶¨Òå¹ö¶¯Ìõ²¼¾ÖÄ£Ê½¿ØÖÆ²ÎÊıµÄÃ¶¾ÙÀàĞÍ¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum ScrollbarLayoutPolicy {
  /**
   * ¹ö¶¯Ìõ×óÓÒ²¼¾ÖÄ£Ê½¸úËæcssÉè¶¨¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  CONTENT = 0,

  /**
   * ¹ö¶¯Ìõ×óÓÒ²¼¾ÖÄ£Ê½¸úËæÏµÍ³ÓïÖÖÉè¶¨¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  SYSTEM = 1
}

/**
 * ¶¨Òå»¬¶¯·½ÏòËø¶¨µÄ³¡¾°ÀàĞÍ¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum ScrollDirectionalLockType {
  /**
   * ËùÓĞ³¡¾°¶¼Ö§³Ö»¬¶¯Ëø¶¨¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  ALL = 0,

  /**
   * Ç¶Ì×¹ö¶¯³¡¾°ÏÂÖ§³Ö»¬¶¯Ëø¶¨¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  NESTED_SCROLL = 1
}

/**
 * AI»á»°´´½¨»Øµ÷º¯ÊıÀàĞÍ¡£ÔÊĞí×Ô¶¨ÒåÄ£ĞÍ³õÊ¼»¯ºÍ½á¹û´¦Àí¡£
 *
 * @param { string } id - The session task ID.
 * @param { string } params - Contextual data passed during creation.
 * @param { OnAISessionCallback } result - Callback function to notify the system of the creation result.
 * @returns { boolean } - `true`±íÊ¾Ê¹ÓÃ×Ô¶¨ÒåÂß¼­£¬Ìø¹ıÏµÍ³Ä¬ÈÏĞĞÎª£»`false`±íÊ¾¼ÌĞøÖ´ĞĞÏµÍ³Ä¬ÈÏÂß¼­¡£
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
type OnCreateAISession = (id: string, params: string, result: OnAISessionCallback) => boolean;

/**
 * AI»á»°Ö´ĞĞ²Ù×÷»Øµ÷º¯ÊıÀàĞÍ¡£ÓÃÓÚ×Ô¶¨ÒåÊµÏÖAIÄ£ĞÍÖ´ĞĞ¡£
 *
 * @param { string } id - »á»°ÈÎÎñID¡£
 * @param { string } params - Ö´ĞĞÆÚ¼ä´«µİµÄÉÏÏÂÎÄÊı¾İ£¨ÒÔJSON×Ö·û´®¸ñÊ½£©¡£
 * @param { OnAISessionCallback } result - Í¨ÖªÖ´ĞĞ½á¹ûµÄ»Øµ÷º¯Êı¡£
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
type OnExecuteAIAction = (id: string, params: string, result: OnAISessionCallback) => void;

/**
 * AI»á»°Ïú»Ù»Øµ÷º¯ÊıÀàĞÍ¡£ÓÃÓÚÇåÀíÓë×Ô¶¨ÒåAIÄ£ĞÍ¹ØÁªµÄ×ÊÔ´¡£
 *
 * @param { string } id - »á»°ÈÎÎñID¡£
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
type OnDestroyAISession = (id: string) => void;

/**
 * ×Ô¶¨ÒåAI»á»°ÅäÖÃ¶ÔÏó£¬ÓÃÓÚ¶¨ÒåAI»á»°µÄÉúÃüÖÜÆÚ»Øµ÷¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface AISessionEvent {
  /**
   * AI»á»°ÀàĞÍ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  aiSessionType: AISessionType;

  /**
   * AI»á»°´´½¨Ê±´¥·¢µÄ»Øµ÷º¯Êı¡£·µ»Ø`true`Ìø¹ıÏµÍ³Ä¬ÈÏĞĞÎª£¬·µ»Ø`false`¼ÌĞøÖ´ĞĞÏµÍ³Ä¬ÈÏÂß¼­¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  onCreateAISession: OnCreateAISession;

  /**
   * AI»á»°Ö´ĞĞ²Ù×÷Ê±´¥·¢µÄ»Øµ÷º¯Êı¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  onExecuteAIAction: OnExecuteAIAction;

  /**
   * AI»á»°Ïú»ÙÊ±´¥·¢µÄ»Øµ÷º¯Êı£¬ÓÃÓÚÇåÀíÓë×Ô¶¨ÒåAIÄ£ĞÍ¹ØÁªµÄ×ÊÔ´¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  onDestroyAISession: OnDestroyAISession;
}

/**
 * Ö§³ÖµÄAI»á»°ÀàĞÍ¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum AISessionType {
  /**
   * ·­ÒëÄ£ĞÍ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  TRANSLATOR = 1,

  /**
   * ÓïÑÔ¼ì²âÄ£ĞÍ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  LANGUAGE_DETECTOR = 2,

  /**
   * ÄÚÈİÕªÒªÉú³ÉÄ£ĞÍ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  SUMMARIZER = 3,

  /**
   * Ğ´×÷ÖúÊÖÄ£ĞÍ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  WRITER = 4,

  /**
   * ÄÚÈİ¸ÄĞ´ÖúÊÖÄ£ĞÍ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  REWRITER = 5,

  /**
   * ÌáÊ¾´ÊÄ£ĞÍ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  PROMPT = 6,

  /**
   * ÄÚÈİĞ£¶ÔÖúÊÖÄ£ĞÍ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  PROOFREADER = 7
}

/**
 * AI»á»°²Ù×÷µÄ½á¹û×´Ì¬¡£
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum AISessionResultType {
  /**
   * ²Ù×÷Ö´ĞĞ³É¹¦¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  SUCCESS = 0,

  /**
   * ²Ù×÷Ö´ĞĞÊ§°Ü¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  FAILURE = 1,

  /**
   * ²Ù×÷ÕıÔÚÖ´ĞĞÖĞ¡£
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  RUNNING = 2
}

/**
 * AI»á»°²Ù×÷½á¹û»Øµ÷º¯ÊıÀàĞÍ¡£ÓÃÓÚ±¨¸æ»á»°´´½¨»òÖ´ĞĞµÄ½á¹û¡£
 *
 * @param { AISessionResultType } state - The current result state.
 * @param { string } content - The detailed result or response content.
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
type OnAISessionCallback = (state: AISessionResultType, content: string) => void;