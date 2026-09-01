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
 * 提供Web控制器的方法。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare type WebviewController = import('../api/@ohos.web.webview').default.WebviewController;

/**
 * 导航条目提交时触发的回调。
 *
 * @param { LoadCommittedDetails } loadCommittedDetails - 提供已提交跳转的网页的详细信息。
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
type OnNavigationEntryCommittedCallback = (loadCommittedDetails: LoadCommittedDetails) => void;

/**
 * 用户加载资源时发生SSL错误时触发的回调，返回SSL错误详细信息。
 *
 * @param { SslErrorEvent } sslErrorEvent - 用户加载资源时发生SSL错误时传递的详细信息。
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 23]
 * @atomicservice
 * @since 12 dynamic
 */
type OnSslErrorEventCallback = (sslErrorEvent: SslErrorEvent) => void;

/**
 * onOverrideErrorPage的回调函数，网页加载失败时触发。
 *
 * @param { OnErrorReceiveEvent } errorPageEvent - 网页加载遇到错误时返回的相关信息。
 * @returns { string } 返回以Base64编码的HTML文本内容。
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
type OnOverrideErrorPageCallback = (errorPageEvent: OnErrorReceiveEvent) => string;

/**
 * 当网页绘制最大内容区域时触发的回调，用于获取最大内容绘制的性能度量信息。适用于需要监控网页加载性能、优化页面渲染速度等场景。与OnFirstMeaningfulPaintCallback关注主要内容加载完成、
 * OnFirstScreenPaintCallback关注首屏可见内容渲染完成相比，本回调关注最大内容元素的绘制时间，适合评估页面渲染完成度和性能瓶颈。
 *
 * @param { LargestContentfulPaint } largestContentfulPaint - 网页绘制页面最大内容度量的详细信息。
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
type OnLargestContentfulPaintCallback = (largestContentfulPaint: LargestContentfulPaint) => void;

/**
 * 网页首次绘制页面主要内容度量的回调，当网页加载完页面主要内容时会触发此回调。与OnLargestContentfulPaintCallback关注最大内容元素绘制时间、OnFirstScreenPaintCallback关注首屏可见内
 * 容渲染完成相比，本回调更关注主要内容是否加载完成，适合评估用户可见内容的加载体验。
 *
 * @param { FirstMeaningfulPaint } firstMeaningfulPaint - 绘制页面主要内容度量的详细信息。
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
type OnFirstMeaningfulPaintCallback = (firstMeaningfulPaint: FirstMeaningfulPaint) => void;

/**
 * 定义摄像头使用状态的值，用于标识摄像头的当前工作状态，帮助开发者实时监控摄像头资源使用情况，优化资源管理和用户隐私保护。
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
 * 定义麦克风使用状态的值，用于标识麦克风的当前工作状态，帮助开发者实时监控麦克风资源使用情况，优化资源管理和用户隐私保护。
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
 * 提供摄像头触发回调时的状态变化信息，包括改变前的状态和新状态。适用于需要监控摄像头状态变化的场景，提升摄像头管理的可见性和用户体验。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare interface CameraCaptureStateChangeInfo {
  /**
   * 改变前的状态。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  originalState: CameraCaptureState;

  /**
   * 改变后的状态。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  newState: CameraCaptureState;
}

/**
 * 提供麦克风触发回调时的状态变化信息，包括改变前的状态和改变后的状态。适用于需要监控麦克风状态变化的场景，提升麦克风管理的可见性和用户体验。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare interface MicrophoneCaptureStateChangeInfo {
  /**
   * 改变前的状态
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
 * 当页面摄像设备状态发生改变时触发此回调。
 *
 * @param { CameraCaptureStateChangeInfo } event - 网页摄像头状态发生改变时，返回原来的状态和改变后的状态。
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
type OnCameraCaptureStateChangeCallback = (event: CameraCaptureStateChangeInfo) => void;

/**
 * 当页面麦克风状态发生改变时触发此回调。
 *
 * @param { MicrophoneCaptureStateChangeInfo } event - 网页麦克风状态发生改变时，返回原来的状态和改变后的状态。
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
type OnMicrophoneCaptureStateChangeCallback = (event: MicrophoneCaptureStateChangeInfo) => void;

/**
 * 用于拦截URL加载请求的回调，可阻止特定URL的加载或进行自定义处理。适用于需要拦截广告、阻止恶意网站跳转等场景。
 *
 * @param { WebResourceRequest } webResourceRequest - url请求的相关信息。
 * @returns { boolean } 返回true表示阻止此次加载，否则允许此次加载。
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 23]
 * @atomicservice
 * @since 12 dynamic
 */
type OnOverrideUrlLoadingCallback = (webResourceRequest: WebResourceRequest) => boolean;

/**
 * 当跟踪者cookie被拦截时触发的回调。
 *
 * @param { IntelligentTrackingPreventionDetails } details - 提供智能防跟踪拦截的详细信息。
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
type OnIntelligentTrackingPreventionCallback = (details: IntelligentTrackingPreventionDetails) => void;

/**
 * 当同层标签可见性变化时触发该回调。
 *
 * @param { NativeEmbedVisibilityInfo } nativeEmbedVisibilityInfo - 提供同层标签可见性变化的信息。
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
 * PIN码认证结果，用于标识PIN码验证的执行状态。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare enum PinVerifyResult {
  /**
   * 成功。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  PIN_VERIFICATION_SUCCESS = 0,
  /**
   * 失败。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  PIN_VERIFICATION_FAILED = 1
}

/**
 * 凭证类型，用于定义身份认证中使用的凭证种类。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare enum CredentialType {
  /**
   * 用户凭证。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  CREDENTIAL_USER = 2,
  /**
   * 应用凭证。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  CREDENTIAL_APP = 3,
  /**
   * ukey凭证。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  CREDENTIAL_UKEY = 4
}

/**
 * VerifyPinHandler是Web组件中处理PIN码验证请求的类，用于在Web页面中需要身份认证的场景（如安全支付、敏感操作确认等）增强应用安全性。当需要用户PIN码认证时，该处理器通过onVerifyPin事件回调提供给应用，
 * 允许应用响应PIN码验证结果，有效防止未授权访问并保护用户隐私。示例代码参考[onVerifyPin]{@link WebAttribute#onVerifyPin}。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare class VerifyPinHandler {
  /**
   * VerifyPinHandler的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  constructor();

  /**
   * 通知Web组件PIN码认证结果。应用通过调用此方法将PIN码验证结果返回给Web组件，Web组件根据结果继续后续的认证流程。如果验证通过，Web组件将允许访问受保护内容；如果验证失败，Web组件将拒绝访问并可能提示用户重试。
   *
   * @param { PinVerifyResult } result - PIN码认证结果。成功表示Web组件将允许后续页面操作；失败则可能导致页面导航或内容加载被拦截。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  confirm(result: PinVerifyResult): void;
}

/**
 * 定义当需要用户进行PIN码认证时触发回调。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare interface VerifyPinEvent {
  /**
   * 通知Web组件用户操作行为。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  handler: VerifyPinHandler;

  /**
   * 用于认证的证书凭据标识。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  identity: string;
}

/**
 * 需要用户进行PIN码认证时触发的回调。
 *
 * @param { VerifyPinEvent } verifyPinEvent - 需要用户进行PIN码认证时触发的回调详情。
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
 * ConsoleMessage的日志来源。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare enum ConsoleMessageSource {
  /**
   * 由Web的 XML/HTML 解析器生成的日志（如 HTML 语法错误、XML 格式异常），比如HTML 标签未闭合导致的解析警告。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  XML = 0,

  /**
   * 执行JavaScript发生异常，比如 JS 语法错误、运行时异常。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  JAVASCRIPT = 1,

  /**
   * 加载网页资源失败，比如资源（JS/CSS/ 图片）404 加载失败。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  NETWORK = 2,

  /**
   * 网页调用W3C console接口，比如console.warn，console.error。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  CONSOLE_API = 3,

  /**
   * 存储相关模块（LocalStorage、SessionStorage、IndexedDB、Cookie）生成的日志（如存储配额超限、操作异常）。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  STORAGE = 4,

  /**
   * 渲染引擎（如 Blink）生成的日志（如 CSS 样式无效、布局异常、渲染性能警告）。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  RENDERING = 5,

  /**
   * 违反网页安全策略，HTTPS 证书错误、混合内容（HTTP 资源在 HTTPS 页面加载）。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  SECURITY = 6,

  /**
   * 其它，比如Web扩展插件产生的日志。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  OTHER = 7,

  /**
   * 使用了过期语法，比如slider-vertical。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  DEPRECATION = 8,

  /**
   * service worker，shared worker里面的错误，比如service worker navigation preload预加载请求未完成前被中断。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  WORKER = 9,

  /**
   * 违反规则，比如一段js执行超过50ms。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  VIOLATION = 10,

  /**
   * 当Web检测到某些可能危害用户体验、安全或性能的代码行为时，会主动介入并阻止或修改该行为，同时通过带有 kIntervention 的消息告知开发者。比如在没有用户交互的网页里面，触发DispatchBeforeUnload事件。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  INTERVENTION = 11,

  /**
   * 检测到不符合Web安全最佳实践的代码行为，提供改进建议。比如当页面中使用了可能存在 XSS 风险的 API（如 innerHTML、eval() 等），但未遵循 Trusted Types 安全规范时。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  RECOMMENDATION = 12
}

/**
 * 提供同层渲染object标签内嵌param元素的详细信息，包括状态和参数。适用于需要监控param元素变化的场景，提升同层元素管理的灵活性和准确性。
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
 * 提供同层渲染object标签内嵌param元素变化时同层标签的详细信息，包括标签ID和参数项。适用于需要监控param元素变化的场景，提升同层元素管理的灵活性和准确性。
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
 * 组件旋转时，宽高动画过程中组件内容如何填充以适应新尺寸的方式。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare enum WebRotateEffect {
  /**
   * 默认值，组件旋转时，保持动画终态的内容大小，并且内容始终与组件保持左上角对齐。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  TOPLEFT_EFFECT = 0,

  /**
   * 组件旋转时，保持动画终态内容的宽高比进行缩小或放大，使内容两边都大于或等于组件两边，且与组件保持中心对齐，显示内容的中间部分。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  RESIZE_COVER_EFFECT = 1
}

/**
 * 用于配置应用接管网页媒体播放功能接口[enableNativeMediaPlayer]{@link WebAttribute#enableNativeMediaPlayer}的功能，支持是否开启及是否覆盖网页内容。适用于需要自定义媒体
 * 播放行为的场景，提升媒体播放的集成度和用户体验。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface NativeMediaPlayerConfig {
  /**
   * 是否开启应用接管网页媒体播放功能。
   * 
   * true表示开启应用接管网页媒体播放功能，false表示关闭该功能。
   * 
   * 默认值：false。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enable: boolean;

  /**
   * 开启应用接管网页媒体播放功能后，应用接管网页视频的播放器画面是否覆盖网页内容。
   * 
   * true表示改变视频图层的层级，覆盖网页内容。false表示保持原层级，嵌入在网页中。
   * 
   * 默认值：false。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  shouldOverlay: boolean;
}

/**
 * 渲染进程无响应时触发的回调。
 *
 * @param { RenderProcessNotRespondingData } data - 渲染进程无响应的详细信息。
 * @syscap SystemCapability.Web.Webview.Core
 * @since 12 dynamic
 */
type OnRenderProcessNotRespondingCallback = (data : RenderProcessNotRespondingData) => void;

/**
 * 渲染进程由无响应状态变回正常运行状态时触发该回调。
 *
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
 * 当页面发生广告过滤时触发此回调。
 *
 * @param { AdsBlockedDetails } details - 发生广告拦截时，广告资源信息。
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
type OnAdsBlockedCallback = (details: AdsBlockedDetails) => void;

/**
 * 发生广告拦截时，广告资源信息。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface AdsBlockedDetails {
  /**
   * 发生广告过滤的页面url。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;

  /**
   * 被过滤的资源的url或dompath标识，被过滤的多个对象url相同则可能出现重复元素。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  adsBlocked: Array<string>;
}

/**
 * 拦截网页可编辑元素拉起软键盘的回调返回值，包括键盘类型和自定义键盘。适用于需要控制软键盘行为的场景。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface WebKeyboardOptions {
  /**
   * 是否使用系统默认软键盘。
   * 
   * true表示使用系统默认软键盘，false表示不使用系统默认软键盘。
   * 
   * 默认值：true。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  useSystemKeyboard: boolean;

  /**
   * 指定系统软键盘enter键的类型，取值范围见输入框架的定义[EnterKeyType]{@link @ohos.inputMethod:inputMethod.EnterKeyType}，该参数为可选参数，默认值为
   * UNSPECIFIED。当useSystemKeyboard为true，并且设置了有效的enterKeyType时候，才有效。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enterKeyType?: number;

  /**
   * 指定自定义键盘组件builder，可选参数，当useSystemKeyboard为false时，需要设置该参数，然后Web组件会拉起该自定义键盘。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  customKeyboard?: CustomBuilder;
}

/**
 * 定义Url正则表达式规则。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @crossplatform [since 26.1.0]
 * @since 23 dynamic
 */
declare interface UrlRegexRule {
  /**
   * 二级域名的精确匹配。例如，"https://www.example.com"的二级域名为example.com；"https://www.example.com.cn"二级域名为example.com.cn。网址没有二级域名则为
   * 空。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @crossplatform [since 26.1.0]
   * @since 23 dynamic
   */
  secondLevelDomain : string;
  /**
   * url正则表达式。 在secondLevelDomain匹配成功后，才进行url正则匹配。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @crossplatform [since 26.1.0]
   * @since 23 dynamic
   */
  rule : string;
}

/**
 * WebKeyboardController是ArkWeb提供的用于控制Web组件自定义键盘行为的控制器类。当Web页面中的输入框需要弹出键盘时，开发者可通过
 * [onInterceptKeyboardAttach]{@link WebAttribute#onInterceptKeyboardAttach}事件拦截系统默认键盘的挂载，并使用WebKeyboardController向当前聚焦的
 * Web输入框执行插入字符、前向/后向删除、发送Enter等功能键以及关闭自定义键盘等操作。该类适用于需要为Web场景实现自定义安全键盘、表情键盘、手写键盘或业务专属输入面板的应用，使开发者能够完全接管Web输入框的键盘输入逻辑。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare class WebKeyboardController {
  /**
   * WebKeyboardController的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  constructor();

  /**
   * Web输入框中插入字符。
   *
   * @param { string } text - 在当前光标位置插入Web输入框的文本。若存在选中文本则替换为该文本；触发输入事件；光标移动到插入文本末尾。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  insertText(text: string): void;

  /**
   * 删除光标前面的指定长度字符。
   *
   * @param { number } length - 删除光标前面的指定长度字符。
   *     <br>取值范围：[-2147483648 , 2147483647]，当参数值大于字符长度时，默认删除光标前面所有字符；参数值为负数时，不执行删除操作。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  deleteForward(length: number): void;

  /**
   * 删除光标后面的指定长度字符。
   *
   * @param { number } length - 删除光标后面的指定长度字符。
   *     <br>取值范围：[-2147483648 , 2147483647]，当参数值大于字符长度时，默认删除光标后面所有字符；参数值为负数时，不执行删除操作。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  deleteBackward(length: number): void;

  /**
   * 插入功能按键，目前仅支持Enter键类型，取值见[EnterKeyType]{@link @ohos.inputMethod:inputMethod.EnterKeyType}。
   *
   * @param { number } key - 功能键类型，仅支持Enter键。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  sendFunctionKey(key: number): void;

  /**
   * 关闭自定义键盘。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  close(): void;
}

/**
 * 拦截网页可编辑元素拉起软键盘的回调入参，包括[WebKeyboardController]{@link ./web}和可编辑元素的属性。适用于需要自定义键盘交互的场景，提升输入体验的定制性和灵活性。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface WebKeyboardCallbackInfo {
  /**
   * 提供控制自定义键盘的输入、删除、关闭等操作。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  controller: WebKeyboardController;

  /**
   * 触发本次软键盘弹出的网页元素属性。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  attributes: Record<string, string>;
}

/**
 * 拦截网页可编辑元素拉起软键盘的回调，一般在点击网页input标签时触发。
 *
 * @param { WebKeyboardCallbackInfo } keyboardCallbackInfo - 拦截网页拉起软键盘回调通知的入参，其中包括[WebKeyboardController]{@link ./web}、可
 *     编辑元素的属性。
 * @returns { WebKeyboardOptions } 回调函数通过返回[WebKeyboardOptions]{@link WebKeyboardOptions}来决定ArkWeb内核拉起不同类型的软键盘。
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
type WebKeyboardCallback = (keyboardCallbackInfo: WebKeyboardCallbackInfo) => WebKeyboardOptions;

/**
 * ConsoleMessage的信息级别。
 * 
 * > **说明：**
 * >
 * > - 在HTML5侧，调用console.log或console.info对应ConsoleMessage的信息级别都为MessageLevel.Info。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum MessageLevel {
  /**
   * 调试级别。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Debug = 1,

  /**
   * 消息级别。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Info = 2,

  /**
   * 警告级别。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Warn = 3,

  /**
   * 错误级别。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Error = 4,

  /**
   * 日志级别。
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
 * 混合内容模式。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum MixedMode {
  /**
   * 宽松模式：允许加载HTTP和HTTPS混合内容。所有不安全的内容都可以被加载。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  All = 0,

  /**
   * 兼容模式：允许部分HTTP内容在HTTPS页面中加载。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Compatible = 1,

  /**
   * 严格模式：不允许加载HTTP和HTTPS混合内容。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  None = 2
}

/**
 * 网站安全风险检查触发的回调。
 *
 * @param { ThreatType } threatType - 定义网站threat类型。
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
 * 缓存模式。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum CacheMode {
  /**
   * 优先使用未过期cache加载资源，无效或无cache时从网络获取。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Default = 0,

  /**
   * 优先使用cache（含过期）加载资源，无cache时从网络获取。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  None = 1,

  /**
   * 强制从网络获取最新资源，不使用任何cache。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Online = 2,

  /**
   * 仅使用本地cache加载资源。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Only = 3
}

/**
 * 设置Web的过滚动模式为关闭或开启。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 26.1.0]
 * @atomicservice
 * @since 11 dynamic
 */
declare enum OverScrollMode {
  /**
   * Web过滚动模式关闭。适用于不需要额外滚动效果的页面，如内容高度与容器高度匹配的场景。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice
   * @since 11 dynamic
   */
  NEVER = 0,

  /**
   * Web过滚动模式开启。适用于需要增强滚动反馈的场景，如列表页面或需要明确滚动边界指示的场景。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice
   * @since 11 dynamic
   */
  ALWAYS = 1
}

/**
 * 设置手动收起软键盘时Web元素是否失焦。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 14 dynamic
 */
declare enum BlurOnKeyboardHideMode {
  /**
   * 软键盘收起时Web组件失焦功能关闭，当用户手动收起软键盘时焦点仍在文本框。适用于需要保持输入焦点的场景。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 14 dynamic
   */
  SILENT = 0,

  /**
   * 软键盘收起时Web组件失焦功能开启，当用户手动收起软键盘时，焦点会从文本框转移到Web的body上，文本框失焦。适用于需要标准输入框行为的场景。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 14 dynamic
   */
  BLUR = 1
}

/**
 * Web深色模式的配置，用于控制网页内容的深色主题显示，帮助开发者根据用户偏好和系统主题提升视觉体验和可读性。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 26.1.0]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum WebDarkMode {
  /**
   * Web深色模式关闭。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Off = 0,

  /**
   * Web深色模式开启。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  On = 1,

  /**
   * Web深色模式跟随系统。适用于Web组件主题需要与系统保持一致的场景，推荐使用此模式以提供一致的用户体验。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Auto = 2
}

/**
 * Web屏幕捕获模式。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum WebCaptureMode {
  /**
   * 主屏捕获模式。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  HOME_SCREEN = 0
}

/**
 * 定义网站风险类型。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare enum ThreatType {
  /**
   * 非法网站。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  THREAT_ILLEGAL = 0,

  /**
   * 欺诈网站。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  THREAT_FRAUD = 1,

  /**
   * 存在安全风险的网站。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  THREAT_RISK = 2,

  /**
   * 涉嫌包含不健康内容的网站。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  THREAT_WARNING = 3,

  /**
   * 安全检查通过，未发现任何风险。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  THREAT_NONE = 4,

  /**
   * 未进行安全检查。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  THREAT_UNPROCESSED = 5
}

/**
 * 用于配置 Web 组件的媒体策略，包括音频续播有效期、音频独占模式等。适用于需要优化音频播放体验和多实例音频管理的场景，提升媒体播放的稳定性和用户体验。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface WebMediaOptions {
  /**
   * 被其他应用暂停的Web音视频能够自动续播的有效期，单位：秒。取值范围：[-2147483648, 2147483647]。值为0时，不自动续播；大于0时，将在该时间内尝试续播；小于0时，将在无限时间内尝试续播。由于近似值原因，该有
   * 效期可能存在一秒内的误差。 
   * 
   * **说明：** 
   * 
   * HLS视频被打断后，回到前台将自动续播，不受该时间控制。
   * 
   * 默认值：0。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  resumeInterval?: number;

  /**
   * 应用内多个Web实例的音频是否独占。
   * 
   * true表示应用内多个Web实例的音频独占，false表示不独占。
   * 
   * 默认值：true。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  audioExclusive?: boolean;

  /**
   * 应用中Web音频类型。默认值对应系统音频流类型[StreamUsage]{@link @ohos.multimedia.audio:audio.StreamUsage}中的STREAM_USAGE_MUSIC。用于改变组件音频类型
   * 与系统音频类型映射关系，影响ArkWeb音频焦点策略。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  audioSessionType?: AudioSessionType;
}

/**
 * 提供 Web 屏幕捕获的配置选项，包括捕获模式。适用于需要自定义网页录屏行为的场景，提升录屏功能的灵活性和用户体验。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface ScreenCaptureConfig {
  /**
   * Web屏幕捕获模式。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  captureMode: WebCaptureMode;
}

/**
 * FullScreenExitHandler 是 Web 组件提供的全屏退出处理类，用于响应网页退出全屏模式的事件。该类通过 exitFullScreen 方法通知开发者 Web 组件已退出全屏状态，帮助开发者及时处理全屏状态变化，调整
 * 应用界面布局或执行相应逻辑。示例代码参考[onFullScreenEnter]{@link WebAttribute#onFullScreenEnter}。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class FullScreenExitHandler {
  /**
   * FullScreenExitHandler的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor();

  /**
   * 通知开发者Web组件退出全屏。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  exitFullScreen(): void;
}

/**
 * 提供 Web 组件进入全屏的回调信息，包括视频尺寸和退出句柄。适用于需要处理全屏视频的场景，提升视频播放的沉浸式体验和可控性。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 18]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface FullScreenEnterEvent {
  /**
   * 用于退出全屏模式的函数句柄。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  handler: FullScreenExitHandler;

  /**
   * 视频的宽度，单位：px。如果进入全屏的是 `<video>` 元素，表示其宽度；如果进入全屏的子元素中包含 `<video>` 元素，表示第一个子视频元素的宽度；其他情况下，为0。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  videoWidth?: number;

  /**
   * 视频的高度，单位：px。如果进入全屏的是 `<video>` 元素，表示其高度；如果进入全屏的子元素中包含 `<video>` 元素，表示第一个子视频元素的高度；其他情况下，为0。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  videoHeight?: number;
}

/**
 * Web组件进入全屏时触发的回调。
 *
 * @param { FullScreenEnterEvent } event - Web组件进入全屏的回调事件详情。
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 18]
 * @atomicservice
 * @since 12 dynamic
 */
type OnFullScreenEnterCallback = (event: FullScreenEnterEvent) => void;

/**
 * 当鼠标/触摸板单击到同层标签时触发此回调。
 *
 * @param { NativeEmbedMouseInfo } event - 提供鼠标/触摸板在同层标签上单击或长按的详细信息。
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
type MouseInfoCallback = (event: NativeEmbedMouseInfo) => void;

/**
 * onRenderExited接口返回的渲染进程退出的具体原因。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 26.1.0]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum RenderExitReason {
  /**
   * 渲染进程异常退出，可能原因包括：渲染进程启动超时、达到进程数量上限导致系统回收旧渲染进程、多个页签同时关闭等。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  ProcessAbnormalTermination = 0,

  /**
   * 收到SIGKILL，或被手动终止。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  ProcessWasKilled = 1,

  /**
   * 渲染进程崩溃退出，如段错误。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  ProcessCrashed = 2,

  /**
   * 程序内存不足。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  ProcessOom = 3,

  /**
   * 其他原因，比如渲染进程孵化失败。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
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
 * onSslErrorEventReceive接口返回的SSL错误的具体原因。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 23]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum SslError {
  /**
   * 一般错误。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Invalid = 0,

  /**
   * 主机名不匹配。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  HostMismatch = 1,

  /**
   * 证书日期无效。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  DateInvalid = 2,

  /**
   * 证书颁发机构不受信任。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Untrusted = 3
}

/**
 * 文件选择器的模式，用于控制文件选择器的打开方式和行为，帮助开发者实现文件上传等文件操作场景。
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
 * Web布局模式的配置，用于控制Web内容的页面布局方式，帮助开发者根据屏幕尺寸和显示需求优化网页的适配性和用户体验。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 26.1.0]
 * @atomicservice
 * @since 11 dynamic
 */
declare enum WebLayoutMode {
  /**
   * Web布局跟随系统。适用于传统网页布局场景，保持与系统默认行为一致。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice
   * @since 11 dynamic
   */
  NONE = 0,

  /**
   * Web基于页面大小的自适应网页布局。适用于需要根据屏幕尺寸自动调整布局的场景，推荐用于移动端网页优化。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice
   * @since 11 dynamic
   */
  FIT_CONTENT = 1
}

/**
 * 触发渲染进程无响应回调的原因。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 12 dynamic
 */
declare enum RenderProcessNotRespondingReason {
  /**
   * 发送给渲染进程的input事件响应超时。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  INPUT_TIMEOUT = 0,

  /**
   * 新的网页加载导航响应超时。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  NAVIGATION_COMMIT_TIMEOUT = 1
}

/**
 * FileSelectorParam是ArkWeb组件中的文件选择器参数类，用于获取Web页面中`<input type="file">`触发文件选择请求时的相关参数信息，包括文件选择模式、文件过滤类型、MIME类型、建议文件名、默认起
 * 始路径等，帮助开发者高效构建符合HTML规范的自定义文件选择器。
 * 
 * 当Web页面发起文件选择请求时，开发者通过FileSelectorParam获取前端传递的完整参数信息，据此构建与前端需求匹配的自定义文件选择器，确保文件选择的模式、类型过滤、命名等行为与HTML规范一致。
 * 
 * 在Web组件中需要自定义处理文件上传请求的场景下使用。注册`onShowFileSelector`回调以拦截文件选择请求；从回调事件的`fileSelector`属性获取FileSelectorParam实例；读取参数后构建对应的系统
 * 文件选择器（如DocumentViewPicker、PhotoViewPicker等）；通过FileSelectorResult返回选择结果至Web组件。
 * 
 * 示例代码参考[onShowFileSelector]{@link WebAttribute#onShowFileSelector}。
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
   * 获取文件选择器标题。
   *
   * @returns { string } 返回文件选择器标题字符串，表示当前文件选择器在界面上显示的标题文本。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getTitle(): string;

  /**
   * 获取文件选择器的模式。
   *
   * @returns { FileSelectorMode } 返回文件选择器的模式。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getMode(): FileSelectorMode;

  /**
   * 获取文件过滤类型。
   *
   * @returns { Array<string> } 返回文件过滤类型数组，包含用于限制文件选择器可选文件范围的类型信息。元素为扩展名（如'.png'），对应HTML accept属性。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getAcceptType(): Array<string>;

  /**
   * 获取是否调用多媒体能力。
   *
   * @returns { boolean } 返回是否调用多媒体能力。
   *     <br>true表示需要调用摄像头或麦克风等多媒体设备来获取文件（如拍照或录音），false表示仅从存储设备中选择已有文件。对应HTML input标签的capture属性。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  isCapture(): boolean;

  /**
   * 获取文件MIME类型。
   *
   * @returns { Array<string> } 原样返回HTML input标签的accept属性的值，包含指定允许选择的文件的MIME类型和扩展名信息。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 18 dynamic
   */
  getMimeTypes(): Array<string>;

  /**
   * 获取建议选择的文件名。对应HTML里[option](docroot://web/web-file-upload.md#自定义处理js接口拉起的文件请求)中的`suggestedName`。若前端未设置suggestedName，
   * 返回空字符串。开发者可在构建文件选择器时使用该返回值作为默认文件名，与[getDefaultPath]{@link FileSelectorParam#getDefaultPath}配合使用可预设完整的文件路径和名称。
   *
   * @returns { string } 返回建议选择的文件名字符串，表示建议用于文件选择器的默认文件名。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  getSuggestedName(): string;

  /**
   * 获取文件选择器默认起始路径。对应HTML里[option](docroot://web/web-file-upload.md#自定义处理js接口拉起的文件请求)中的`startIn`。
   *
   * @returns { string } 返回默认起始路径。
   *     <br>当前端startIn设置为公共目录`downloads`、`pictures`时，要注意应分别转化为OpenHarmony系统下的`download`和`images`，请参考
   *     [获取并使用公共目录](docroot://file-management/request-dir-permission.md)。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  getDefaultPath(): string;

  /**
   * 获取允许的各组文件类型的可选描述。对应HTML里[option](docroot://web/web-file-upload.md#自定义处理js接口拉起的文件请求)中的`description`。返回的描述数组与
   * getAcceptableFileTypes返回的文件类型组一一对应。开发者可在构建文件选择器时使用这些描述作为每组文件类型的显示文本，帮助用户理解可选择的文件类型。若前端未设置description，返回空字符串。
   *
   * @returns { Array<string> } 返回文件类型的描述字符串数组，包含各组文件类型的可选描述文本。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  getDescriptions(): Array<string>;

  /**
   * 获取文件选择器是否排除选项（\*\/\*），即所有文件。对应HTML里[option](docroot://web/web-file-upload.md#自定义处理js接口拉起的文件请求)中的
   * `excludeAcceptAllOption`。
   *
   * @returns { boolean } 返回是否排除“所有文件类型”选项。
   *     <br>true表示排除（不包含“所有文件类型”选项），false表示包含（开发者应确保文件选择器中包含“所有文件类型”选项）。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  isAcceptAllOptionExcluded(): boolean;

  /**
   * 获取文件类型信息。对应HTML里[option](docroot://web/web-file-upload.md#自定义处理js接口拉起的文件请求)中的`types`。返回值为二维数组，每个子数组代表一组允许的文件类型。开发者应
   * 在构建文件选择器时使用该返回值设置文件类型过滤规则，确保用户只能选择符合前端要求的文件。该参数与getAcceptType和getMimeTypes的区别在于types支持更精细的文件类型控制，可按MIME类型或扩展名分组设置。
   *
   * @returns { Array<Array<AcceptableFileType>> } 返回文件类型信息，为二维数组结构，包含多组可选文件类型的详细信息。对应HTML option的types属性。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  getAcceptableFileTypes(): Array<Array<AcceptableFileType>>;
}

/**
 * JsResult是Web组件在处理JavaScript弹窗事件时返回的结果处理对象，适用于开发者拦截并自定义处理`window.alert`、`window.confirm`、`window.prompt`等弹窗场景。开发者可在
 * [onAlert]{@link WebAttribute#onAlert}、[onConfirm]{@link WebAttribute#onConfirm}或
 * [onPrompt]{@link WebAttribute#onPrompt}等事件回调中，通过该对象向Web组件反馈用户的确认、取消或输入内容等操作结果，从而控制弹窗的后续行为。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class JsResult {
  /**
   * JsResult的构造函数。用于处理JavaScript弹窗事件。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor();

  /**
   * 通知Web组件用户取消弹窗操作。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  handleCancel(): void;

  /**
   * 通知Web组件用户确认弹窗操作。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  handleConfirm(): void;

  /**
   * 通知Web组件用户确认弹窗操作并传递对话框内容。
   *
   * @param { string } result - 用户输入的对话框内容。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  handlePromptConfirm(result: string): void;
}

/**
 * FileSelectorResult是ArkWeb组件中用于通知Web组件文件选择结果的类，支持应用层自定义文件选择行为、统一文件选择结果回传机制，适用于应用需要接管文件选择流程的场景，例如拉起系统文件选择器、图库选择器或相机选择器
 * 后，将选中的文件结果返回给Web页面。当Web组件中的HTML页面通过`<input type="file">`等方式发起文件选择请求时，应用可通过FileSelectorResult将用户选择的文件列表回传给Web组件，完成文件选择
 * 流程。该类主要在`onShowFileSelector`事件回调中使用，使应用能够灵活控制文件选择交互，提升用户体验的一致性。示例代码参考
 * [onShowFileSelector]{@link WebAttribute#onShowFileSelector}。
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
   * 通过传入的文件列表（fileList）通知Web组件用户选择的文件，完成文件选择流程。Web组件可以使用传入的文件列表进行后续处理。
   *
   * @param { Array<string> } fileList - 文件URI字符串数组，用于向Web组件传递用户选择的文件路径。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  handleFileList(fileList: Array<string>): void;
}

/**
 * HttpAuthHandler是Web组件用于处理HTTP认证请求的处理类。当服务器返回401 Unauthorized要求身份认证时，Web组件通过onHttpAuthRequest事件回调获取HttpAuthHandler实例，由
 * 应用决定是否提供认证凭据。示例代码参考[onHttpAuthRequest]{@link WebAttribute#onHttpAuthRequest}事件。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class HttpAuthHandler {
  /**
   * HttpAuthHandler的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor();

  /**
   * 使用用户名和密码进行HTTP认证操作。
   *
   * @param { string } userName - HTTP认证用户名，需为非空字符串。
   * @param { string } password - HTTP认证密码，需为非空字符串。
   * @returns { boolean } 认证成功时返回true，失败返回false。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  confirm(userName: string, password: string): boolean;

  /**
   * 通知Web组件用户取消HTTP认证操作。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  cancel(): void;

  /**
   * 检查当前主机存储的凭据是否适用，如果凭据在当前请求中曾被服务器拒绝过，则不适用。
   *
   * @returns { boolean } 存储的凭据适用时返回true，其他返回false。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  isHttpAuthInfoSaved(): boolean;
}

/**
 * SslErrorHandler是Web组件中处理SSL证书验证错误的类。当加载安全页面时遇到SSL证书错误（如证书过期、主机名不匹配、不受信任的CA），应用可通过onSslErrorEvent回调获取SslErrorHandler实
 * 例，并决定是否继续加载或取消导航。示例代码参考[onSslErrorEvent]{@link WebAttribute#onSslErrorEvent}事件。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 23]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class SslErrorHandler {
  /**
   * SslErrorHandler的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor();

  /**
   * 忽略SSL证书验证错误，继续加载页面。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  handleConfirm(): void;

  /**
   * 通知Web组件取消此请求，并停止当前SSL证书验证流程。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  handleCancel(): void;

  /**
   * 通知Web组件取消此请求，并根据参数abortLoading决定是否停止加载。
   *
   * @param { boolean } abortLoading - 是否在取消请求后停止加载页面。
   *     <br>true表示停止加载页面，false表示继续加载页面。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  handleCancel(abortLoading: boolean): void;
}

/**
 * ClientAuthenticationHandler是Web组件中处理SSL客户端证书认证请求的类。当服务器请求客户端证书进行TLS双向认证时，该处理器通过`onClientAuthenticationRequest`事件回调提供给
 * 应用，允许应用选择合适的证书凭据进行响应。示例代码参考[onClientAuthenticationRequest]{@link WebAttribute#onClientAuthenticationRequest}事件。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class ClientAuthenticationHandler {
  /**
   * ClientAuthenticationHandler的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor();

  /**
   * 通知Web组件使用指定的私钥和客户端证书链。
   *
   * @param { string } priKeyFile - 存放私钥文件的完整路径。
   * @param { string } certChainFile - 存放证书链文件的完整路径。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  confirm(priKeyFile: string, certChainFile: string): void;

  /**
   * 通知Web组件使用指定的凭据（从证书管理模块获得）。
   *
   * @param { string } authUri - 凭据的关键值。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  confirm(authUri: string): void;

  /**
   * 通知Web组件使用从证书管理模块获取的指定凭据和凭据类型。
   *
   * @param { string } identity - 用于识别凭据的唯一标识值。
   * @param { CredentialType | string } credentialTypeOrCertChainFile - 类型为CredentialType时，代表凭据类型；类型为string时，表示证书链文件路径。
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  confirm(identity: string, credentialTypeOrCertChainFile: CredentialType | string): void;

  /**
   * 通知Web组件取消客户端证书请求事件。对来自相同host和port服务器的后续请求，不再重复上报该事件。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  cancel(): void;

  /**
   * 通知Web组件忽略本次请求。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  ignore(): void;
}

/**
 * ProtectedResourceType 枚举定义了 Web 组件需要访问的受保护资源类型，用于控制MIDI、相机、麦克风、传感器等敏感资源的访问权限，帮助开发者在保护用户隐私的同时提供丰富的 Web 功能。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum ProtectedResourceType {
  /**
   * MIDI SYSEX资源。
   * 
   * 目前仅支持权限事件上报，MIDI设备的使用还未支持。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  MidiSysex = "TYPE_MIDI_SYSEX",

  /**
   * 视频捕获资源，例如相机。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  VIDEO_CAPTURE = "TYPE_VIDEO_CAPTURE",

  /**
   * 音频捕获资源，例如麦克风。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  AUDIO_CAPTURE = "TYPE_AUDIO_CAPTURE",

  /**
   * 传感器资源，例如加速度传感器。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  SENSOR = 'TYPE_SENSOR'
}

/**
 * PermissionRequest 是 Web 组件用于授权或拒绝权限请求的对象。当网页尝试访问受保护的系统资源（如摄像头、麦克风、地理位置等）时，ArkWeb 内核会通过
 * [onPermissionRequest]{@link WebAttribute#onPermissionRequest}事件回调向应用发送权限请求，应用通过 PermissionRequest 对象来决定是否授权这些请求。该对象适用
 * 于需要在应用中管理网页对敏感资源的访问权限、保护用户隐私、确保资源访问安全可控等场景，帮助开发者灵活处理网页权限请求。
 * 
 * > **说明：**
 * >
 * > - [grant]{@link PermissionRequest#grant}()与 [deny]{@link PermissionRequest#deny}() 方法互斥，对于同一个 PermissionRequest 对象，
 * > 只能调用其中一个方法。
 * >
 * > - 调用 grant() 或 deny() 后，该 PermissionRequest 对象已完成响应，不允许重复调用。
 * >
 * > - 未调用任何方法响应的 PermissionRequest 对象会导致权限请求超时。
 * >
 * > - grant() 方法的 resources 参数通常使用 getAccessibleResource() 方法的返回值。
 * >
 * > - 典型使用流程：调用 getAccessibleResource() 获取请求的资源列表，选择需要授权的资源后调用 grant() 进行授权。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class PermissionRequest {
  /**
   * PermissionRequest的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor();

  /**
   * 拒绝网页所请求的权限。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  deny(): void;

  /**
   * 获取网页来源。
   *
   * @returns { string } 当前请求权限网页的来源。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getOrigin(): string;

  /**
   * 获取网页所请求的权限资源列表，类型参考[ProtectedResourceType]{@link ProtectedResourceType}。
   *
   * @returns { Array<string> } 网页所请求的权限资源列表。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getAccessibleResource(): Array<string>;

  /**
   * 对网页所请求的权限进行授权。
   *
   * @param { Array<string> } resources - 网页被授予的权限资源列表，需通过 getAccessibleResource() 获取，类型参考
   *     [ProtectedResourceType]{@link ProtectedResourceType}。传入该参数后，网页将获得对指定资源的访问权限，若传入空列表，则表示拒绝所有权限请求。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  grant(resources: Array<string>): void;
}

/**
 * ScreenCaptureHandler 是 Web 组件提供的屏幕捕获权限处理类，用于响应网页发起的屏幕捕获请求。该类适用于在线教育、远程会议、屏幕录制等需要获取用户屏幕内容的应用场景。该类允许开发者通过 grant 或 deny 
 * 方法控制是否授予网页屏幕捕获权限，并通过 getOrigin 方法获取请求来源信息，帮助开发者在保护用户隐私的同时，灵活处理网页的屏幕捕获访问需求，提升应用的安全性和用户体验。示例代码参考
 * [onScreenCaptureRequest]{@link WebAttribute#onScreenCaptureRequest}事件。
 * 
 * > **说明：**
 * >
 * > -  [grant]{@link ScreenCaptureHandler#grant}()与 [deny]{@link ScreenCaptureHandler#deny}() 方法互斥，对同一个 
 * > ScreenCaptureHandler 实例的同一请求只能调用其中一个。
 * >
 * > - 调用后不应再对同一请求调用另一个方法。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class ScreenCaptureHandler {
  /**
   * ScreenCaptureHandler的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  constructor();

  /**
   * 获取网页来源。用于验证请求来源的可信度，或实现白名单机制以控制哪些网页可以进行屏幕捕获。
   *
   * @returns { string } 当前发起屏幕捕获请求的网页的来源。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getOrigin(): string;

  /**
   * 对网页访问的屏幕捕获操作进行授权。该方法会根据提供的配置参数授予屏幕捕获权限，授权后网页可以按照配置的参数进行屏幕捕获。配置参数会被验证，确保符合系统安全要求。用于用户同意网页的屏幕捕获请求后调用，或根据业务策略自动授权可信网页时
   * 使用。
   *
   * @param { ScreenCaptureConfig } config - 屏幕捕获配置，用于设置屏幕捕获的相关参数。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  grant(config: ScreenCaptureConfig): void;

  /**
   * 拒绝网页发起的屏幕捕获操作。用于用户选择不允许，或出于安全原因需要阻止屏幕捕获时调用。调用后将终止当前的屏幕捕获请求，系统会通知网页屏幕捕获权限被拒绝。拒绝操作不影响后续新的屏幕捕获请求。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  deny(): void;
}

/**
 * DataResubmissionHandler是Web组件中处理网页表单数据重新提交的处理类。当网页需要重新提交之前已发送的表单数据时，Web组件会通过`onDataResubmitted`事件回调提供
 * DataResubmissionHandler实例给应用，允许应用决定是否重新提交表单数据或取消导航。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class DataResubmissionHandler {
  /**
   * DataResubmissionHandler的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor();

  /**
   * 重新发送表单数据。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  resend(): void;

  /**
   * 取消重新发送表单数据。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  cancel(): void;
}

/**
 * ControllerHandler是ArkWeb提供的处理新建Web组件控制器分配的帮助类。当Web页面通过`window.open`等方式请求创建新窗口，且Web组件已开启
 * [multiWindowAccess]{@link WebAttribute#multiWindowAccess}能力时，系统通过[onWindowNew]{@link WebAttribute#onWindowNew}事件将
 * ControllerHandler对象提供给应用。开发者需调用其[setWebController]{@link ControllerHandler#setWebController}方法为新窗口设置有效的
 * [WebviewController]{@link @ohos.web.webview:webview.WebviewController}对象，将新窗口与页面中实际创建的Web组件关联；Web内核在等待
 * setWebController调用期间会阻塞渲染进程，若应用决定不创建新窗口，必须调用`setWebController(null)`通知Web内核，否则渲染进程会持续阻塞。典型使用场景是在自定义弹窗、新页面或分屏中打开Web新窗
 * 口，并需要应用侧显式管理新窗口的URL展示与安全隔离。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 26.1.0]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class ControllerHandler {
  /**
   * ControllerHandler的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor();

  /**
   * 设置新创建Web组件的WebviewController对象；若应用决定不创建新窗口，必须设置为null通知Web内核，否则会造成渲染进程阻塞。
   *
   * @param { WebviewController } controller - 新建Web组件的WebviewController对象，如果不需要打开新窗口请设置为null。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
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
   * 非输入框，指不可编辑的网页元素，如按钮、div、span等普通HTML元素。
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
 * 定义navigation类型。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare enum WebNavigationType {
  /**
   * 未知类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  UNKNOWN = 0,

  /**
   * 主文档上产生的新的历史节点跳转。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  MAIN_FRAME_NEW_ENTRY = 1,

  /**
   * 主文档上产生的到已有的历史节点的跳转。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  MAIN_FRAME_EXISTING_ENTRY = 2,

  /**
   * 子文档上产生的用户触发的跳转。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  NAVIGATION_TYPE_NEW_SUBFRAME = 4,

  /**
   * 子文档上产生的非用户触发的跳转。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  NAVIGATION_TYPE_AUTO_SUBFRAME = 5
}

/**
 * 定义Web组件的渲染方式，默认为异步渲染模式。
 * 
 * 建议使用异步渲染模式，异步渲染模式有更好的性能和更低的功耗。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare enum RenderMode {
  /**
   * Web组件异步渲染模式，ArkWeb组件作为图形surface节点，独立送显，Web组件的高度最大规格不超过7,680 px（物理像素）。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  ASYNC_RENDER = 0,

  /**
   * Web组件同步渲染模式，ArkWeb组件作为图形canvas节点，跟随系统组件一起送显，可以渲染更长的Web组件内容，Web组件的高度最大规格不超过500,000 px（物理像素）。
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
   * 默认值，整个网页可见。适用于希望网页完全在可视区域内显示的场景，推荐用于大多数常规网页。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  AUTO = 0,

  /**
   * 初始布局视口和视觉视口为适应设备显示屏的最大矩形内。适用于需要确保内容完全在安全区域内的场景，如避免刘海屏遮挡重要内容。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  CONTAINS = 1,

  /**
   * 初始布局视口和视觉视口为设备物理屏幕的外接矩形内。适用于需要网页内容延伸到屏幕边缘的场景，如全屏背景效果或沉浸式体验。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  COVER = 2
}

/**
 * WebContextMenuParam是ArkWeb组件中用于承载长按页面元素或鼠标右键弹出的上下文菜单信息的参数类，作为`onContextMenuShow`事件回调的数据载体，封装了菜单弹出位置、链接地址、媒体类型、选中文本、编辑
 * 状态等关键信息。
 * 
 * 自定义Web组件上下文菜单时，使用WebContextMenuParam获取用户长按/右击位置的网页元素详细信息（如链接URL、图片内容、媒体类型、输入框类型、编辑状态等），判断用户操作场景，决定是否拦截默认菜单并构建自定义菜单项。
 * 
 * 自定义Web组件长按或右键菜单（如替换默认菜单、根据不同元素类型提供差异化菜单项、预览图片等）时，在`onContextMenuShow`事件回调中使用WebContextMenuParam获取上下文信息。
 * 
 * 示例代码参考[onContextMenuShow]{@link WebAttribute#onContextMenuShow}。
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
   * 弹出菜单的x坐标，相对于Web组件左上角的水平距离。
   *
   * @returns { number } 获取成功时返回非负整数，失败时返回-1。
   *     <br>单位：px（物理像素）。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  x(): number;

  /**
   * 弹出菜单的y坐标，相对于Web组件左上角的垂直距离。
   *
   * @returns { number } 获取成功时返回非负整数，失败时返回-1。
   *     <br>单位：px（物理像素）。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  y(): number;

  /**
   * 获取经过安全检查的URL链接地址，可用于构建自定义菜单时提供"打开链接"、"分享链接"、"复制链接"等操作。
   * 
   * > **说明：**
   * >
   * > 与getUnfilteredLinkUrl()相比，该方法会对URL进行安全检查；与getSourceUrl()相比，该方法获取的是长按位置处的链接URL，而getSourceUrl()获取的是选中元素的src属性URL（如图
   * > 像、媒体等资源）。
   *
   * @returns { string } 如果长按位置是链接，返回经过安全检查的URL链接，否则返回空字符串。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getLinkUrl(): string;

  /**
   * 获取未经安全检查的原始URL链接地址。
   *
   * @returns { string } 如果长按位置是链接，返回原始的URL链接，否则返回空字符串。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getUnfilteredLinkUrl(): string;

  /**
   * 获取元素的src属性对应的URL链接地址。
   *
   * @returns { string } 如果选中的元素有src属性，返回src的URL。返回URL的最大上限为2MB，超出上限时返回空字符串。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getSourceUrl(): string;

  /**
   * 判断当前长按或右键位置是否存在图像内容，用于在自定义菜单中提供"保存图片"等图片相关功能。
   *
   * @returns { boolean } 长按位置存在图片返回true，否则返回false。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  existsImageContents(): boolean;

  /**
   * 获取网页元素的媒体类型。
   * 
   * > **说明：**
   * >
   * > 从API version 22开始，[getContextMenuMediaType]{@link WebContextMenuParam#getContextMenuMediaType}提供更丰富的媒体类型识别能力。
   *
   * @returns { ContextMenuMediaType } 网页元素媒体类型。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getMediaType(): ContextMenuMediaType;

  /**
   * 获取右键单击已选中文本时的内容，用于在自定义菜单中提供"复制"、"分享"、"翻译"、"搜索"等文本操作功能。
   *
   * @returns { string } 选中文本内容。如果右键单击位置存在选中的文本，返回选中的文本内容；不存在则返回空字符串。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getSelectionText(): string;

  /**
   * 获取上下文菜单事件的触发来源类型（如鼠标右键、长按操作等），用于根据不同来源调整菜单展示样式或提供差异化的菜单选项。
   *
   * @returns { ContextMenuSourceType } 菜单事件的触发来源类型，包括鼠标右键、长按等不同的触发方式。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getSourceType(): ContextMenuSourceType;

  /**
   * 获取网页元素的输入框类型（如文本框、密码框、搜索框等），用于根据输入框类型提供合适的编辑菜单选项（如文本框提供粘贴、全选，密码框只提供复制或隐藏密码等）。
   *
   * @returns { ContextMenuInputFieldType } 网页元素输入框的类型，包括文本框、密码框、邮箱框等不同类型，用于识别当前焦点所在的输入元素种类。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getInputFieldType(): ContextMenuInputFieldType;

  /**
   * 判断网页元素是否可编辑。用于在自定义菜单中动态显示或隐藏编辑相关选项（如可编辑时显示粘贴、剪切、全选，不可编辑时隐藏这些选项）。
   *
   * @returns { boolean } 网页元素可编辑返回true，否则返回false。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  isEditable(): boolean;

  /**
   * 获取网页元素的可编辑标识，用于精细控制自定义菜单选项的显示逻辑（如根据是否可复制、可粘贴、可撤销等显示对应的菜单项）。
   *
   * @returns { number } 获取网页元素可编辑标识，参照[ContextMenuEditStateFlags]{@link ContextMenuEditStateFlags}。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getEditStateFlags(): number;

  /**
   * 获取预览图的宽。
   *
   * @returns { number } 预览图的宽。
   *     <br>单位：px（物理像素）。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  getPreviewWidth(): number;

  /**
   * 获取预览图的高。
   *
   * @returns { number } 预览图的高。
   *     <br>单位：px（物理像素）。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  getPreviewHeight(): number;

  /**
   * 在上报上下文菜单事件时，获取用户长按或者右键点击的网页元素类型。
   *
   * @returns { ContextMenuDataMediaType } 网页元素的媒体类型，包括图片、视频、音频等不同类型，用于区分用户点击的网页元素种类。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  getContextMenuMediaType(): ContextMenuDataMediaType;
}

/**
 * WebContextMenuResult是ArkWeb组件中用于处理上下文菜单（长按页面元素或鼠标右键弹出菜单）事件的类。它为开发者提供了一系列菜单操作的执行能力，包括文本编辑操作（复制、粘贴、剪切、全选、撤销、重做、粘贴并匹配样式）
 * 、图片操作（复制图片、保存图片）、菜单控制（关闭菜单）以及密码自动填充功能。
 * 
 * 开发者通常在需要自定义Web组件上下文菜单行为时使用WebContextMenuResult。通过`onContextMenuShow`事件回调获取WebContextMenuResult实例，结合
 * WebContextMenuParam提供的菜单上下文信息，判断用户操作场景并调用相应的响应方法，从而实现自定义菜单交互逻辑。若开发者不执行任何菜单响应操作，则必须调用`closeContextMenu`方法关闭菜单。
 * 
 * 示例代码参考[onContextMenuShow<sup>9+</sup>]{@link WebAttribute#onContextMenuShow}。
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
   * 不执行WebContextMenuResult其他接口操作时，需要调用此接口关闭菜单。
   * 
   * > **说明：**
   * >
   * > 调用说明：
   * >
   * > - 调用WebContextMenuResult的其他方法（如copy、paste、cut等）完成操作后，应调用此方法关闭菜单。
   * >
   * > - 如果不再需要执行其他菜单操作，也应及时调用此方法关闭菜单。
   * >
   * > - 未调用此方法可能导致菜单资源未正确释放。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  closeContextMenu(): void;

  /**
   * 当WebContextMenuParam包含图片内容时，用于复制该图片到剪贴板，从API version 24开始支持对canvas图片进行复制。若需保存图片到本地文件，应使用saveImage()方法。
   * 
   * > **说明：**
   * >
   * > 完成操作后，应调用[closeContextMenu]{@link WebContextMenuResult#closeContextMenu}关闭菜单，未调用可能导致菜单资源未正确释放。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  copyImage(): void;

  /**
   * 执行复制文本操作。
   * 
   * > **说明：**
   * >
   * > 完成操作后，应调用[closeContextMenu]{@link WebContextMenuResult#closeContextMenu}关闭菜单，未调用可能导致菜单资源未正确释放。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  copy(): void;

  /**
   * 执行粘贴操作，保留原始格式。若需粘贴纯文本并匹配目标格式，应使用pasteAndMatchStyle()方法。
   * 
   * > **说明：**
   * >
   * > 完成操作后，应调用[closeContextMenu]{@link WebContextMenuResult#closeContextMenu}关闭菜单，未调用可能导致菜单资源未正确释放。
   * >
   * > 需要配置权限：
   * > [ohos.permission.READ_PASTEBOARD](docroot://security/AccessToken/restricted-permissions.md#ohospermissionread_pasteboard)。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  paste(): void;

  /**
   * 执行剪切操作。
   * 
   * > **说明：**
   * >
   * > 完成操作后，应调用[closeContextMenu]{@link WebContextMenuResult#closeContextMenu}关闭菜单，未调用可能导致菜单资源未正确释放。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  cut(): void;

  /**
   * 执行全选操作。
   * 
   * > **说明：**
   * >
   * > 完成操作后，应调用[closeContextMenu]{@link WebContextMenuResult#closeContextMenu}关闭菜单，未调用可能导致菜单资源未正确释放。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  selectAll(): void;

  /**
   * 执行重做操作，重新执行被撤销的操作。
   * 
   * > **说明：**
   * >
   * > 完成操作后，应调用[closeContextMenu]{@link WebContextMenuResult#closeContextMenu}关闭菜单，未调用可能导致菜单资源未正确释放。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  redo(): void;

  /**
   * 执行撤销操作，撤销上一次的编辑操作。
   * 
   * > **说明：**
   * >
   * > 完成操作后，应调用[closeContextMenu]{@link WebContextMenuResult#closeContextMenu}关闭菜单，未调用可能导致菜单资源未正确释放。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  undo(): void;

  /**
   * 执行与此上下文菜单相关的粘贴操作，粘贴的内容会匹配目标格式，以纯文本形式呈现。
   * 
   * > **说明：**
   * >
   * > 完成操作后，应调用[closeContextMenu]{@link WebContextMenuResult#closeContextMenu}关闭菜单，未调用可能导致菜单资源未正确释放。
   * >
   * > 需要配置权限：
   * > [ohos.permission.READ_PASTEBOARD](docroot://security/AccessToken/restricted-permissions.md#ohospermissionread_pasteboard)。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  pasteAndMatchStyle(): void;

  /**
   * 请求密码保险箱中的用户名或密码数据自动填充到当前获得焦点的输入框中。
   * 
   * > **说明：**
   * >
   * > 完成操作后，应调用[closeContextMenu]{@link WebContextMenuResult#closeContextMenu}关闭菜单，未调用可能导致菜单资源未正确释放。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  requestPasswordAutoFill(): void;

  /**
   * 保存上下文菜单相关的图片，调用后将触发下载流程。
   * 
   * > **说明：**
   * >
   * > 完成操作后，应调用[closeContextMenu]{@link WebContextMenuResult#closeContextMenu}关闭菜单，未调用可能导致菜单资源未正确释放。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 24 dynamic
   */
  saveImage(): void;
}

/**
 * ConsoleMessage是Web组件中封装JavaScript控制台输出信息的对象。当网页通过`console.log()`、`console.warn()`、`console.error()`等方法输出日志时，该对象通过
 * `onConsole`事件回调提供给应用，用于监控和检查网页调试输出。示例代码参考[onConsole事件]{@link WebAttribute#onConsole}。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class ConsoleMessage {
  /**
   * ConsoleMessage的构造函数。
   *
   * @param { string } message - ConsoleMessage的日志输出信息。
   * @param { string } sourceId - 网页源文件的路径和文件名。
   * @param { number } lineNumber - ConsoleMessage的行号。
   * @param { MessageLevel } messageLevel - ConsoleMessage的日志级别。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.ConsoleMessage#constructor
   */
  constructor(message: string, sourceId: string, lineNumber: number, messageLevel: MessageLevel);

  /**
   * ConsoleMessage的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor();

  /**
   * 获取控制台输出的日志信息。
   *
   * @returns { string } 返回控制台输出的日志信息。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getMessage(): string;

  /**
   * 获取网页源文件路径和文件名。
   *
   * @returns { string } 返回网页源文件路径和文件名。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getSourceId(): string;

  /**
   * 获取控制台输出在网页源文件中的行号。
   *
   * @returns { number } 返回控制台输出在网页源文件中的行号。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getLineNumber(): number;

  /**
   * 获取ConsoleMessage的信息级别。
   *
   * @returns { MessageLevel } 返回ConsoleMessage的信息级别。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getMessageLevel(): MessageLevel;

  /**
   * 获取ConsoleMessage的日志来源。
   *
   * @returns { ConsoleMessageSource } 返回ConsoleMessage的日志来源。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  getSource() : ConsoleMessageSource;
}

/**
 * WebResourceRequest是Web组件中表示网络资源请求的类，提供了关于请求资源的详细元数据。该对象在`onErrorReceive`、`onHttpErrorReceive`以及请求拦截等事件回调中使用，用于帮助开发者诊断
 * 网络错误、监控请求状态和实现资源拦截控制。通过使用该类，应用可以提升错误处理能力、增强请求可控性和优化用户体验。示例代码参考[onErrorReceive事件]{@link WebAttribute#onErrorReceive}。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class WebResourceRequest {
  /**
   * WebResourceRequest的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor();

  /**
   * 获取资源请求头信息。
   *
   * @returns { Array<Header> } 返回包含请求头键值对信息的数组，每个Header对象包含请求头的名称和对应的值，例如User-Agent、Content-Type等。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getRequestHeader(): Array<Header>;

  /**
   * 获取资源请求的URL信息。
   *
   * @returns { string } 返回完整的资源请求URL字符串，包含协议、域名、路径、查询参数等完整信息。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getRequestUrl(): string;

  /**
   * 判断资源请求是否与手势（如点击）相关联。
   *
   * @returns { boolean } 返回资源请求是否与手势（如点击）相关联。
   *     <br>true表示返回资源请求与手势（如点击）相关联，false表示返回资源请求与手势（如点击）不相关联。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  isRequestGesture(): boolean;

  /**
   * 判断资源请求是否为主frame。用于区分处理主frame和子frame请求。
   *
   * @returns { boolean } 返回资源请求是否为主frame的判断结果。
   *     <br>true表示资源请求为主frame，false表示资源请求不为主frame。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  isMainFrame(): boolean;

  /**
   * 判断资源请求是否被服务端重定向。用于检查请求重定向链，识别恶意重定向。
   *
   * @returns { boolean } 返回资源请求是否被服务端重定向。
   *     <br>true表示资源请求被服务端重定向，false表示资源请求未被服务端重定向。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  isRedirect(): boolean;

  /**
   * 获取请求方法。
   *
   * @returns { string } 返回HTTP请求方法字符串，常见值包括GET、POST、PUT、DELETE等，表示该资源请求所使用的HTTP方法类型。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  getRequestMethod(): string;
}

/**
 * WebResourceResponse是Web组件中表示HTTP响应并允许自定义网页资源响应的类。它在onHttpErrorReceive等事件中向应用提供服务器返回响应的状态码、状态描述、响应头、响应数据、编码、MIME类型等信息；
 * 在资源请求拦截场景中允许应用自定义响应的状态码、状态描述、响应头、响应数据、编码、MIME类型及数据就绪状态，从而由应用接管特定资源的返回内容。示例代码参考
 * [onHttpErrorReceive事件]{@link WebAttribute#onHttpErrorReceive}。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class WebResourceResponse {
  /**
   * WebResourceResponse的构造函数。用于创建HTTP响应对象，常用于资源请求拦截场景中自定义响应内容。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor();

  /**
   * 获取资源响应数据。
   *
   * @returns { string } 返回资源响应数据，为HTML格式的字符串内容。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getResponseData(): string;

  /**
   * 获取资源响应数据，支持多种数据类型。与getResponseData相比，该方法支持返回number（文件句柄）、ArrayBuffer（二进制数据）、Resource（$rawfile资源）等多种类型，建议在需要灵活数据类型支持
   * 时优先使用。
   *
   * @returns { string | number | ArrayBuffer | Resource | undefined } string返回HTML格式的字符串。 number返回文件句柄。 ArrayBuffer返回二进
   *     制数据。 Resource返回`$rawfile`资源。 如果没有可用数据，返回`undefined`。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @since 13 dynamic
   */
  getResponseDataEx(): string | number | ArrayBuffer | Resource | undefined;

  /**
   * 获取资源响应的编码。
   *
   * @returns { string } 返回资源响应的编码，如'utf-8'、'gbk'等字符集编码。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getResponseEncoding(): string;

  /**
   * 获取资源响应的媒体（MIME）类型。
   *
   * @returns { string } 返回资源响应的媒体（MIME）类型，如'text/html'、'application/json'等。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getResponseMimeType(): string;

  /**
   * 获取资源响应的状态码描述。
   *
   * @returns { string } 返回资源响应的状态码描述，如'OK'、'Not Found'等。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getReasonMessage(): string;

  /**
   * 获取资源响应头。
   *
   * @returns { Array<Header> } 返回资源响应头。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getResponseHeader(): Array<Header>;

  /**
   * 获取资源响应的状态码。
   *
   * @returns { number } 返回资源响应的状态码，如200表示成功，404表示未找到。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getResponseCode(): number;

  /**
   * 设置资源响应数据。
   *
   * @param { string | number | Resource } data - 要设置的资源响应数据。string表示HTML格式的字符串。number表示文件句柄，此句柄由系统的Web组件负
   *     责关闭。Resource表示应用rawfile目录下文件资源。ArrayBuffer表示资源的原始二进制数据。 [since 9 - 10]
   * @param { string | number | Resource | ArrayBuffer } data - 要设置的资源响应数据。string表示HTML格式的字符串。number表示文件句柄，此句柄由系统的Web组件负
   *     责关闭。Resource表示应用rawfile目录下文件资源。ArrayBuffer表示资源的原始二进制数据。 [since 11]
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  setResponseData(data: string | number | Resource | ArrayBuffer): void;

  /**
   * 设置资源响应的编码。
   *
   * @param { string } encoding - 要设置的资源响应的编码。编码格式需要与响应数据的实际编码保持一致，编码格式会影响浏览器或客户端对响应内容的解析和展示。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  setResponseEncoding(encoding: string): void;

  /**
   * 设置资源响应的媒体（MIME）类型。
   *
   * @param { string } mimeType - 要设置的资源响应的媒体（MIME）类型。常见的MIME类型包括：text/html（HTML文档）、application/json（JSON数据）、image/png（
   *     PNG图片）等。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  setResponseMimeType(mimeType: string): void;

  /**
   * 设置资源响应的状态码描述。
   *
   * @param { string } reason - 要设置的资源响应的状态码描述。状态码描述是对状态码的文本说明，通常与状态码对应使用，例如状态码为200时描述可设为“OK”，状态码为404时描述可设为“Not Found”。该
   *     描述会包含在HTTP响应中，便于客户端或开发者了解响应结果。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  setReasonMessage(reason: string): void;

  /**
   * 设置资源响应头。
   *
   * @param { Array<Header> } header - 要设置的资源响应头。响应头用于传递HTTP协议头信息，例如设置“Cache-Control”控制缓存策略，设置“Access-Control-Allow-
   *     Origin”实现跨域访问，设置“Content-Type”指定内容类型。设置响应头会影响浏览器或客户端对资源的处理方式。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  setResponseHeader(header: Array<Header>): void;

  /**
   * 设置资源响应的状态码。
   *
   * @param { number } code - 要设置的资源响应的状态码。如果该资源请求失败或响应状态为错误状态，请参考
   *     [@ohos.web.netErrorList]{@link @ohos.web.netErrorList:WebNetErrorList}设置相应错误码。常见错误码场景：404表示资源不存在，请检查资源路径；500表示服
   *     务器内部错误，请检查服务器状态；403表示无访问权限，请申请相应访问权限；401表示未授权，请检查认证信息。根据错误码检查网络配置、服务器状态或资源访问权限。避免设置错误码为 ERR_IO_PENDING，设置为该错误码可
   *     能会导致XMLHttpRequest同步请求阻塞。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  setResponseCode(code: number): void;

  /**
   * 设置资源响应数据是否已经就绪。
   * 
   * > **说明：**
   * >
   * > - 在资源请求拦截场景中，应先调用setResponseData()、setResponseEncoding()、setResponseMimeType()、setResponseHeader()、
   * > setResponseCode()、setReasonMessage()等方法设置响应的各个属性。最后调用setResponseIsReady(true)来触发资源返回。
   * >
   * > - 异步数据场景：需先调用setResponseIsReady(false)，待数据准备好后调用setResponseData()等设置方法，最后调用setResponseIsReady(true)来触发资源返回。
   * >
   * > - 如果不正确设置调用顺序，可能导致XMLHttpRequest同步请求阻塞。
   *
   * @param { boolean } IsReady - 资源响应数据是否已经就绪。
   *     <br>true表示资源响应数据已经就绪，false表示资源响应数据未就绪。
   *     <br>如果数据是异步提供，需要显式设置为false。设置为非法值如null，undefined或者不设置都会被认为数据已经准备好。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  setResponseIsReady(IsReady: boolean): void;

  /**
   * 获取响应数据是否已准备就绪。
   *
   * @returns { boolean } `true`表示响应数据已准备好，`false`表示未准备好。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @since 13 dynamic
   */
  getResponseIsReady(): boolean;
}

/**
 * Web组件返回的请求/响应头对象。适用于需要读取或修改HTTP头的场景，提升网络请求处理的灵活性和可控性。
 *
 * @interface Header [since 8 - 11]
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 18]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface Header {
  /**
   * 请求/响应头的key。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  headerKey: string;

  /**
   * 请求/响应头的value。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  headerValue: string;
}

/**
 * WebResourceError是Web组件中提供资源加载失败错误信息的类。该错误对象通过`onErrorReceive`和`onHttpErrorReceive`事件回调提供给应用，封装了错误详情用于调试和错误处理。通常与
 * WebResourceRequest配合使用以确定哪个资源加载失败。示例代码参考[onErrorReceive事件]{@link WebAttribute#onErrorReceive}。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class WebResourceError {
  /**
   * WebResourceError的构造函数，创建WebResourceError对象，用于封装Web组件资源加载失败时的错误信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor();

  /**
   * 获取加载资源的错误信息。用于详细描述资源加载失败的具体原因，开发者可将错误信息输出到日志用于调试分析，或向用户显示友好的错误提示。
   *
   * @returns { string } 返回加载资源的错误信息。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getErrorInfo(): string;

  /**
   * 获取加载资源的错误码。用于判断资源加载失败的具体原因（如网络错误、服务器错误、权限问题等），以便开发者根据错误类型采取相应的处理策略（如重试、提示用户、降级显示等）。
   *
   * @returns { number } 返回加载资源的错误码。错误码含义参考[WebNetErrorList]{@link @ohos.web.netErrorList:WebNetErrorList}或HTTP协议状态码。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getErrorCode(): number;

  /**
   * 获取加载资源的自定义错误码。自定义错误码通过[WebSchemeHandlerResponse]{@link webview.WebSchemeHandlerResponse}的
   * [setCustomErrorCode]{@link  webview.WebSchemeHandlerResponse#setCustomErrorCode}设置，
   * 并通过[onErrorReceive]{@link WebAttribute#onErrorReceive}事件直接传递给应用。
   *
   * @returns { number } 返回加载资源的自定义错误码。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 26.1.0 dynamic
   */
  getCustomErrorCode(): number;
}

/**
 * JsGeolocation是Web组件在收到网页地理位置权限请求时，提供给应用的授权响应对象。当网页通过JavaScript调用地理位置接口（如navigator.geolocation）请求获取设备位置信息时，应用需要决定是否授权该
 * 请求。JsGeolocation通过invoke方法允许应用对指定源的网页授予或拒绝地理位置权限，同时可选择将该权限决策保存到系统中，避免后续同一源再次请求时重复弹出授权提示。
 * 
 * JsGeolocation适用于Web组件中网页主动请求地理位置权限的场景。应用需先注册[onGeolocationShow事件]{@link WebAttribute#onGeolocationShow}，当网页发起地理位置权限请求
 * 时，该事件回调会将JsGeolocation对象传递给应用，应用在回调中调用invoke方法完成授权响应。使用时还需配置"ohos.permission.LOCATION"、"
 * ohos.permission.APPROXIMATELY_LOCATION"权限。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class JsGeolocation {
  /**
   * JsGeolocation的构造函数。构造函数本身不直接被应用调用，通常通过[onGeolocationShow事件]{@link WebAttribute#onGeolocationShow}回调获取JsGeolocation实
   * 例。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor();

  /**
   * 设置网页地理位置权限状态。该方法需在[onGeolocationShow事件]{@link WebAttribute#onGeolocationShow}回调中调用，用于对发起地理位置权限请求的网页进行授权响应。
   *
   * @param { string } origin - 发起地理位置权限请求的网页源，用于标识特定网站的地理位置请求来源。
   *     <br>origin格式必须遵循RFC 6454中定义的格式。
   * @param { boolean } allow - 设置的地理位置权限状态。
   *     <br>true表示开启地理位置权限，false表示不开启地理位置权限。
   * @param { boolean } retain - 是否允许将地理位置权限状态保存到系统中。可通过
   *     [GeolocationPermissions]{@link @ohos.web.webview:webview.GeolocationPermissions}接口管理保存到系统的地理位置权限。
   *     <br>true表示保存地理位置权限状态到系统，false表示不保存到系统。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  invoke(origin: string, allow: boolean, retain: boolean): void;
}

/**
 * 通过WebCookie可以控制Web组件中的cookie的各种行为，其中每个应用中的所有Web组件共享一个WebCookie。通过controller方法中的getCookieManager方法可以获取WebCookie对象，进行后续
 * 的cookie管理操作。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 8 dynamiconly
 * @deprecated since 23
 * @useinstead ohos.web.webview.webview.WebCookieManager
 */
declare class WebCookie {
  /**
   * WebCookie的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 23
   * @useinstead ohos.web.webview.webview.WebCookieManager
   */
  constructor();

  /**
   * 设置cookie，该方法为同步方法。设置成功返回true，否则返回false。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebCookieManager#setCookie
   */
  setCookie();

  /**
   * 将当前存在内存中的cookie同步到磁盘中，该方法为同步方法。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebCookieManager#saveCookieAsync
   */
  saveCookie();
}

/**
 * EventResult是ArkWeb Kit中用于通知Web组件同层事件消费结果的类。在同层嵌入场景下，应用与Web组件共同暴露在事件响应链中。EventResult允许应用向Web组件声明自身是否消费了触摸或鼠标事件，从而决定Web
 * 组件是否继续处理该事件。当应用设置消费结果为true时，表示应用已消费该事件，Web组件将不再消费；当设置为false时，表示应用不消费该事件，事件将由Web组件消费。EventResult用于设置触摸事件（
 * [TouchType]{@link TouchType}）和鼠标事件（[MouseAction]{@link MouseAction}，仅限左中右按键）的消费结果，通过[MouseButton]{@link MouseButton}定
 * 义鼠标按键的类型，适用于应用与Web组件同层交互的事件协调场景。
 * 
 * 触摸事件示例代码参考[onNativeEmbedGestureEvent]{@link WebAttribute#onNativeEmbedGestureEvent}。
 * 
 * 鼠标事件示例代码参考[onNativeEmbedMouseEvent]{@link WebAttribute#onNativeEmbedMouseEvent}。
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
   * @param { boolean } result - 是否消费该手势事件。
   *     <br>true表示消费该手势事件，false表示不消费该手势事件。
   *     <br>传入null或undefined时为true。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  setGestureEventResult(result: boolean): void;

  /**
   * 设置手势事件消费结果和冒泡控制。
   *
   * @param { boolean } result - 是否消费该手势事件。
   *     <br>true表示消费该手势事件，false表示不消费该手势事件。
   *     <br>传入null或undefined时为true。
   * @param { boolean } stopPropagation - 是否阻止冒泡，在result为true时生效。
   *     <br>true表示阻止冒泡，false表示不阻止冒泡。
   *     <br>传入null或undefined时为true。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 14 dynamic
   */
  setGestureEventResult(result: boolean, stopPropagation: boolean): void;

  /**
   * 设置鼠标事件消费结果和冒泡控制。
   *
   * @param { boolean } result - 是否消费该鼠标事件。
   *     <br>true表示消费该鼠标事件，false表示不消费该鼠标事件。 
   *     <br>传入null或undefined时为true。
   * @param { boolean } [stopPropagation] - 是否阻止冒泡，在result为true时生效。
   *     <br>true表示阻止冒泡，false表示不阻止冒泡。
   *     <br>传入null或undefined时为true。
   *     <br>默认值：true。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  setMouseEventResult(result: boolean, stopPropagation?: boolean): void;
}

/**
 **
 * WebController是ArkWeb组件的控制器类，用于控制Web组件的各种行为。一个WebController对象只能与一个Web组件绑定，绑定后开发者可通过该控制器对Web组件进行页面导航（前进/后退/加载）、焦点控制、缩放调
 * 整、页面刷新与停止、Cookie管理、JavaScript注入与执行等操作。
 * 
 * WebController适用于需要在应用侧对嵌入式Web组件进行主动控制的场景，例如实现浏览器式的前进后退导航、在应用侧与网页侧之间建立JavaScript交互通道、动态加载网页内容或管理Cookie数据。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.web.webview.webview.WebviewController
 */
declare class WebController {
  /**
   * WebController的构造函数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#constructor
   */
  constructor();

  /**
   * 调用此接口通知Web组件进入未激活状态。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#onInactive
   */
  onInactive(): void;

  /**
   * 调用此接口通知Web组件进入前台激活状态。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#onActive
   */
  onActive(): void;

  /**
   * 调整当前网页的缩放比例。
   *
   * @param { number } factor - The zoom factor.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.web.webview:webview.WebviewController#zoom
   */
  zoom(factor: number): void;

  /**
   * 删除所有前进后退记录。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#clearHistory
   */
  clearHistory(): void;

  /**
   * 异步执行JavaScript脚本，并通过回调方式返回脚本执行的结果。runJavaScript需要在loadUrl完成后，比如onPageEnd中调用。
   *
   * @param { object } options The options with a piece of code and a callback.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#runJavaScript
   */
  runJavaScript(options: { script: string, callback?: (result: string) => void });

  /**
   * baseUrl为空时，通过“data”协议加载指定的一段字符串。
   * 
   * 当baseUrl为“data”协议时，编码后的data字符串将被Web组件作为“data”协议加载。
   * 
   * 当baseUrl为“http/https”协议时，编码后的data字符串将被Web组件以类似loadUrl的方式以非编码字符串处理。
   *
   * @param { object } options The options with the data or URL and other information.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#loadData
   */
  loadData(options: { data: string, mimeType: string, encoding: string, baseUrl?: string, historyUrl?: string });

  /**
   * 使用指定的HTTP头加载指定的URL。
   * 
   * 通过loadUrl注入的对象只在当前document有效，即通过loadUrl导航到新的页面会无效。
   * 
   * 而通过registerJavaScriptProxy注入的对象，在loadUrl导航到新的页面也会有效。
   *
   * @param { object } options The options with the URL and other information.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#loadUrl
   */
  loadUrl(options: { url: string | Resource, headers?: Array<Header> });

  /**
   * 调用此接口通知Web组件刷新网页。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#refresh
   */
  refresh();

  /**
   * 停止页面加载。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#stop
   */
  stop();

  /**
   * 注入JavaScript对象到window对象中，并在window对象中调用该对象的方法。注入的对象在页面下一次（重新）加载前不会出现在JavaScript中。
   *
   * @param { object } options - The option with the JavaScript object and method list.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#registerJavaScriptProxy
   */
  registerJavaScriptProxy(options: { object: object, name: string, methodList: Array<string> });

  /**
   * 删除通过registerJavaScriptProxy注册到window上的指定name的应用侧JavaScript对象。删除后立即生效，无须调用[refresh]{@link WebController#refresh}接口。
   *
   * @param { string } name - 注册对象的名称，可在网页侧JavaScript中通过此名称调用应用侧JavaScript对象。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#deleteJavaScriptRegister
   */
  deleteJavaScriptRegister(name: string);

  /**
   * 获取当前被点击区域的元素类型。
   *
   * @returns { HitTestType } 被点击区域的元素类型。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.web.webview:webview.WebviewController#getHitTest
   */
  getHitTest(): HitTestType;

  /**
   * 使当前Web页面获取焦点。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#requestFocus
   */
  requestFocus();

  /**
   * 当前页面是否可后退，即当前页面是否有返回历史记录。
   *
   * @returns { boolean } 可以后退返回true，否则返回false。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#accessBackward
   */
  accessBackward(): boolean;

  /**
   * 当前页面是否可前进，即当前页面是否有前进历史记录。
   *
   * @returns { boolean } 返回true表示当前页面可以前进，返回false表示当前页面不可以前进。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#accessForward
   */
  accessForward(): boolean;

  /**
   * 检查当前页面是否可前进或者后退给定的step步。
   *
   * @param { number } step - 要跳转的步数，正数代表前进，负数代表后退。
   * @returns { boolean } 页面是否可以前进或后退给定的step步。true表示可以，false为不可以。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#accessStep
   */
  accessStep(step: number): boolean;

  /**
   * 按照历史栈，后退一个页面。建议在调用backward前先调用
   * [accessBackward<sup>9+</sup>]{@link @ohos.web.webview:webview.WebviewController#accessBackward}检查当前页面是否可后退。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#backward
   */
  backward();

  /**
   * 按照历史栈，前进一个页面。建议在调用forward前先调用
   * [accessForward<sup>9+</sup>]{@link @ohos.web.webview:webview.WebviewController#accessForward}检查当前页面是否可前进。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.webview.WebviewController#forward
   */
  forward();

  /**
   * 获取Web组件cookie管理对象。
   *
   * @returns { WebCookie } Web组件cookie管理对象，参考[WebCookie]{@link ./web}定义。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.webview.WebCookieManager
   */
  getCookieManager(): WebCookie;
}

/**
 * 通过[接口](docroot://reference/apis-arkweb/arkts-basic-components-web.md#接口)定义Web选项，包括网页资源地址、控制器、渲染方式等。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface WebOptions {
  /**
   * 网页资源地址。如果访问本地资源文件，请使用resource协议或$rawfile资源引用。如果加载应用包外沙箱路径的本地资源文件（文件支持html和txt类型），请使用file://沙箱文件路径。
   * 
   * src不能通过状态变量（例如：@State）动态更改地址，如需更改，请通过[loadUrl()]{@link @ohos.web.webview:webview.WebviewController#loadUrl}重新加载。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  src: string | Resource;

  /**
   * 控制器，通过controller可以控制Web组件各种行为，包括页面导航、生命周期状态、JavaScript交互等。从API version 9开始，WebController不再维护，建议使用
   * [WebviewController]{@link WebviewController}替代。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  controller: WebController | WebviewController;

  /**
   * 表示当前Web组件的渲染方式，`RenderMode.ASYNC_RENDER`表示Web组件异步渲染，`RenderMode.SYNC_RENDER`表示Web组件同步渲染，默认值
   * `RenderMode.ASYNC_RENDER`，该模式不支持动态调整。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  renderMode? : RenderMode;

  /**
   * 表示当前创建的Webview是否是隐私模式。true表示创建隐私模式，false表示创建正常模式。
   * 
   * 默认值：false。
   * 
   * 传入undefined或null时为false。<!--RP1--><!--RP1End-->
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 11 dynamic
   */
  incognitoMode? : boolean;

  /**
   * 表示当前Web组件指定共享渲染进程的token，多渲染进程模式下，相同token的Web组件会优先尝试复用绑定的渲染进程。绑定发生在渲染进程的初始化阶段。当渲染进程没有关联的Web组件时，其绑定关系将被移除。
   * 
   * 默认值： ""。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  sharedRenderProcessToken? : string;

  /**
   * 设定鼠标事件是否转换为触摸事件。true表示转换成触摸事件，适用于需要统一触摸和鼠标交互行为的场景；false表示不转换成触摸事件。
   * 
   * 默认值：false。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  emulateTouchFromMouseEvent? : boolean;
}

/**
 * 通过[javaScriptOnDocumentStart]{@link WebAttribute#javaScriptOnDocumentStart}属性注入到Web组件的ScriptItem对象。
 *
 * @interface ScriptItem [since 11 - 11]
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 26.1.0]
 * @atomicservice
 * @since 11 dynamic
 */
declare interface ScriptItem {
  /**
   * 需要注入、执行的JavaScript脚本。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice
   * @since 11 dynamic
   */
  script: string;

  /**
   * 一组允许来源的匹配规则。
   * 
   * 1.如果需要允许所有来源的网址，使用通配符“*”。
   * 
   * 2.如果需要精确匹配，则描述网站地址，如"https://www.example.com"。
   * 
   * 3.如果模糊匹配网址，可以使用“ * ”通配符替代，如"https://*.example.com"。不允许使用"x. * .y.com"、" * foobar.com"等。
   * 
   * 4.如果来源是ip地址，则使用规则2。
   * 
   * 5.对于http/https以外的协议（自定义协议），不支持使用精确匹配和模糊匹配，且必须以`://`结尾，例如"resource://"。
   * 
   * 6.一组scriptRule中，如果其中一条不满足以上规则，则整组scriptRule都不生效。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice
   * @since 11 dynamic
   */
  scriptRules: Array<string>;

  /**
   * 一组允许来源的正则匹配规则。 当scriptRules设置为[]时，才使用urlRegexRules进行匹配。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @crossplatform [since 26.1.0]
   * @since 23 dynamic
   */
  urlRegexRules? : Array<UrlRegexRule>;
}

/**
 * 提供已提交跳转的网页详细信息，包括是否主文档、导航类型等。适用于需要监控页面导航行为的场景，提升导航状态管理的准确性和用户体验。
 *
 * @interface LoadCommittedDetails [since 11 - 11]
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11 dynamic
 */
declare interface LoadCommittedDetails {
  /**
   * 是否是主文档。
   * 
   * true表示主文档，false表示非主文档。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  isMainFrame: boolean;

  /**
   * 是否在不更改文档的情况下进行的网页跳转。
   * 
   * true表示在不更改文档的情况下进行的网页跳转，false表示在更改文档的情况下进行的网页跳转。
   * 
   * 同文档跳转示例：1.参考片段跳转；2.pushState或replaceState触发的跳转；3.同一页面历史跳转。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  isSameDocument: boolean;

  /**
   * 是否提交的新节点替换了已有的节点。
   * 
   * true表示提交的新节点替换了已有的节点，false表示提交的新节点未替换已有的节点。
   * 
   * 另外在一些子文档跳转的场景，虽然没有实际替换已有节点，但是有一些属性发生了变更。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  didReplaceEntry: boolean;

  /**
   * 网页跳转的类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  navigationType: WebNavigationType;

  /**
   * 跳转到的网页的URL。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  url: string;
}

/**
 * 提供智能防跟踪拦截的详细信息，包括网站域名和追踪者域名。适用于需要监控广告拦截行为的场景，提升隐私保护的透明度和可控性。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface IntelligentTrackingPreventionDetails {
  /**
   * 网站域名。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  host: string;

  /**
   * 追踪者域名。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  trackerHost: string;
}

/**
 * 定义Web方法.
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
   * > **说明：**
   * >
   * > - 在HTML5侧，调用console.log或console.info对应ConsoleMessage的信息级别都为MessageLevel.Info。
   *
   * @param { WebOptions } value - Web组件的初始化配置选项，用于设置加载的网页资源（src）、绑定的控制器（controller）以及渲染模式等行为参数。具体属性结构请参考WebOptions接口定义。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (value: WebOptions): WebAttribute;
}

/**
 * 提供同层标签的详细信息，包括ID、类型、尺寸和位置等。适用于需要获取同层元素属性的场景，提升同层渲染的定制性和用户体验。
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
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  width?: number;

  /**
   * 同层标签的高，单位为px。
   *
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
   * object标签包含的params标签键值对列表，请使用Object提供的方法操作该对象，即`embed.info?.params?.["name"]`。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  params?: Map<string, string>;
}

/**
 * 提供同层标签生命周期变化的详细信息，包括状态和标签信息。适用于需要监控同层元素生命周期的场景，提升渲染状态管理的准确性和用户体验。
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
   * NativeImage的surfaceId。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  surfaceId?: string;

  /**
   * 同层标签的唯一id。
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
 * 提供同层标签的可见性信息，包括可见状态和标签ID。适用于需要监控同层元素可见性的场景，提升渲染状态管理的准确性和用户体验。
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
 * 提供手指触摸同层标签的详细信息，包括标签ID和触摸事件。适用于需要处理同层元素触摸交互的场景，提升触摸体验的定制性和灵活性。
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
 * 提供鼠标/触摸板在同层标签上点击或长按的详细信息，包括标签ID和鼠标事件。适用于需要处理同层元素鼠标交互的场景，提升鼠标体验的定制性和灵活性。
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
 * 提供网页绘制页面主要内容的详细信息，包括导航时间和绘制时间。适用于需要监控页面渲染性能的场景，提升性能优化的准确性和用户体验。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface FirstMeaningfulPaint {
  /**
   * 导航条加载时间，单位以微秒表示。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  navigationStartTime?: number;

  /**
   * 绘制页面主要内容时间，单位以毫秒表示。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  firstMeaningfulPaintTime?: number;
}

/**
 * 提供网页绘制页面最大内容的详细信息，包括导航时间和各类绘制时间。适用于需要监控页面渲染性能的场景，提升性能优化的准确性和用户体验。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LargestContentfulPaint {
  /**
   * 导航条加载时间，单位以微秒表示。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  navigationStartTime?: number;

  /**
   * 最大图片加载的时间，单位是以毫秒表示。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  largestImagePaintTime?: number;

  /**
   * 最大文本加载时间，单位是以毫秒表示。
   *
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

  /**
   * 最大图片开始加载时间，单位是以毫秒表示。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  largestImageLoadStartTime?: number;

  /**
   * 最大图片结束加载时间，单位是以毫秒表示。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  largestImageLoadEndTime?: number;
}

/**
 * 提供渲染进程无响应的详细信息。适用于需要诊断渲染进程异常的场景，提升故障排查的准确性和效率。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 12 dynamic
 */
declare interface RenderProcessNotRespondingData {
  /**
   * 网页的JavaScript调用栈信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  jsStack: string;

  /**
   * 网页的进程id。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  pid: number;

  /**
   * 触发渲染进程无响应回调的原因。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  reason: RenderProcessNotRespondingReason;
}

/**
 * 定义网页加载结束时触发的回调信息，包括页面URL。适用于需要监控页面加载完成的场景，提升页面生命周期的管理能力。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnPageEndEvent {
  /**
   * 网页加载完成后的页面URL地址。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;
}

/**
 * 定义网页加载开始时触发的回调信息，包括页面URL。适用于需要监控页面加载开始的场景，提升页面生命周期的管理能力。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnPageBeginEvent {
  /**
   * 网页加载开始时即将加载的页面URL地址。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;
}

/**
 * 定义网页加载开始时触发的回调信息，包括页面URL。适用于需要监控页面加载开始的场景，提升页面生命周期的管理能力。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
declare interface OnLoadStartedEvent {
  /**
   * 页面的URL地址。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  url: string;
}

/**
 * 定义网页加载结束时触发的回调信息，包括页面URL。适用于需要监控页面加载完成的场景，提升页面生命周期的管理能力。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
declare interface OnLoadFinishedEvent {
  /**
   * 页面的URL地址。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  url: string;
}

/**
 * 定义网页加载进度变化时触发的回调信息，包括新的进度值。适用于需要监控页面加载进度的场景，提升加载过程的可见性和用户体验。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnProgressChangeEvent {
  /**
   * 新的加载进度，取值范围为[0, 100]的整数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  newProgress: number;
}

/**
 * 定义网页标题更改时触发的回调信息，包括标题内容和来源。适用于需要监控页面标题变化的场景，提升页面信息的实时性和用户体验。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnTitleReceiveEvent {
  /**
   * document标题内容。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  title: string;

  /**
   * document标题来源，true表示来自网页的title标签，false表示该title是根据url自动生成。 
   * 
   * 默认值：false
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  isRealTitle?: boolean;
}

/**
 * 定义收到地理位置获取请求时触发的回调信息，包括源信息和地理对象。适用于需要处理地理位置权限的场景。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnGeolocationShowEvent {
  /**
   * 发起地理位置权限请求的网页源，用于标识特定网站的地理位置请求来源。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  origin: string;

  /**
   * 通知Web组件用户操作行为。
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
 * 定义刷新或关闭场景下，在即将离开当前页面时触发此回调。适用于表单编辑等场景，允许开发者拦截离开动作并弹窗确认，从而避免用户未提交的数据意外丢失。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 18]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnBeforeUnloadEvent {
  /**
   * 当前显示弹窗所在网页的URL。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;

  /**
   * 弹窗中显示的信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  message: string;

  /**
   *  通知Web组件用户操作行为。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  result: JsResult;

  /**
   * 页面是否刷新。
   * 
   * 当页面因刷新即将离开时，isReload为true；当页面因关闭即将离开时，isReload为false。
   * 
   * 默认值：false。
   *
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
 * 定义通知宿主应用JavaScript console消息。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnConsoleEvent {
  /**
   * 触发的控制台信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  message: ConsoleMessage;
}

/**
 * 定义网页加载遇到错误时触发的回调信息，包括请求和错误详情。适用于需要监控和处理网页加载错误的场景，提升错误处理的及时性和用户体验。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnErrorReceiveEvent {
  /**
   * 网页请求的封装信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  request: WebResourceRequest;

  /**
   * 网页加载资源错误的封装信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  error: WebResourceError;
}

/**
 * 定义网页收到资源加载HTTP错误时触发的回调信息，包括请求和响应详情。适用于需要监控和处理HTTP错误的场景，提升网络错误诊断的准确性和用户体验。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnHttpErrorReceiveEvent {
  /**
   * 网页请求的封装信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  request: WebResourceRequest;

  /**
   *  资源响应的封装信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  response: WebResourceResponse;
}

/**
 * 定义通知主应用开始下载文件的回调信息，包括URL、用户代理和文件详情。适用于需要监控和管理文件下载的场景，提升下载流程的可控性和用户体验。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnDownloadStartEvent {
  /**
   * 文件下载的URL。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;

  /**
   * 用于下载的用户代理。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  userAgent: string;

  /**
   * 服务器返回的 Content-Disposition响应头，服务器可能返回空。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  contentDisposition: string;

  /**
   * 服务器返回内容媒体类型（MIME）信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  mimetype: string;

  /**
   * 服务器返回文件的长度。单位：字节。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentLength: number;
}

/**
 * 定义导航完成时触发的回调信息，包括URL和刷新状态。适用于需要监控页面导航历史的场景，提升导航行为跟踪的准确性和用户体验。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 18]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnRefreshAccessedHistoryEvent {
  /**
   * 访问的url。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;

  /**
   * true表示该页面是被重新加载的（调用[refresh<sup>9+</sup>]{@link @ohos.web.webview:webview.WebviewController#refresh()}接口），false表示该页
   * 面是新加载的。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   */
  isRefreshed: boolean;

  /**
   * 是否是主文档触发。
   * 
   * true表示是主文档触发，false表示不是主文档触发。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  isMainFrame?: boolean;
}

/**
 * 定义渲染过程退出时触发。适用于需要监控渲染进程异常的场景，提升渲染稳定性和故障排查效率。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 26.1.0]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnRenderExitedEvent {
  /**
   * 渲染进程异常退出的具体原因。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice
   * @since 12 dynamic
   */
  renderExitReason: RenderExitReason;
}

/**
 * 定义文件选择器结果的回调信息，包括结果和参数详情。
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
 * 定义加载URL时触发的回调信息，包括资源URL。适用于需要监控资源加载行为的场景，提升资源管理的可见性和性能优化。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 26.1.0]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnResourceLoadEvent {
  /**
   * 所加载的资源文件url信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
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
 * 定义收到HTTP认证请求时触发的回调信息，包括主机和域信息。适用于需要处理HTTP身份验证的场景，提升认证流程的灵活性和安全性。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnHttpAuthRequestEvent {
  /**
   * 通知Web组件用户操作行为。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  handler: HttpAuthHandler;

  /**
   * HTTP身份验证凭据应用的主机。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  host: string;

  /**
   * HTTP身份验证凭据应用的域。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  realm: string;
}

/**
 * 定义Web组件加载URL之前触发的回调信息，包括请求详情。适用于需要拦截或修改网络请求的场景，提升请求控制的灵活性和安全性。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 23]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnInterceptRequestEvent {
  /**
   * url请求的相关信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  request: WebResourceRequest;
}

/**
 * 定义收到权限请求时触发的回调信息，包括请求详情。适用于需要处理权限授予的场景，提升权限管理的灵活性和安全性。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnPermissionRequestEvent {
  /**
   * 通知Web组件用户操作行为。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  request: PermissionRequest;
}

/**
 * 定义收到屏幕捕获请求时触发的回调信息。适用于需要处理屏幕录制权限的场景，提升录屏流程的可控性和安全性。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnScreenCaptureRequestEvent {
  /**
   * 通知Web组件用户操作行为。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  handler: ScreenCaptureHandler;
}

/**
 * 定义调用时触发的回调信息，以允许自定义显示上下文菜单。
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
 * 定义网页页内查找结果的回调信息，包括匹配项序号和总数。适用于需要监控页内搜索行为的场景，提升搜索交互的可见性和用户体验。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnSearchResultReceiveEvent {
  /**
   * 当前匹配的查找项的序号（从0开始）。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  activeMatchOrdinal: number;

  /**
   * 所有匹配到的关键词的个数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  numberOfMatches: number;

  /**
   * 当次页内查找操作是否结束。
   * 
   * true表示当次页内查找操作结束，false表示未结束。
   * 
   * 该方法可能回调多次，直到isDoneCounting为true。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  isDoneCounting: boolean;
}

/**
 * 定义滚动条滑动到指定位置时触发的回调信息，包括水平和垂直偏移量。
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
 * 定义网页收到SSL错误时触发的回调信息，包括错误码和证书链。适用于需要处理SSL错误的场景，提升安全异常的监控和处理能力。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 23]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnSslErrorEventReceiveEvent {
  /**
   * 通知Web组件用户操作行为。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  handler: SslErrorHandler;

  /**
   * 错误码。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  error: SslError;

  /**
   * 证书链数据。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @since 15 dynamic
   */
  certChainData?: Array<Uint8Array>;
}

/**
 * 定义需要提供SSL客户端证书时触发的回调信息，包括主机、端口和密钥类型。适用于需要处理客户端证书认证的场景，提升认证流程的灵活性和安全性。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnClientAuthenticationEvent {
  /**
   * 通知Web组件用户操作行为。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  handler : ClientAuthenticationHandler;

  /**
   * 请求证书服务器的主机名。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  host : string;

  /**
   * 请求证书服务器的端口号。有效范围为0-65535，超出范围时抛出异常。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  port : number;

  /**
   * 可接受的非对称密钥类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  keyTypes : Array<string>;

  /**
   * 与私钥匹配的证书可接受颁发者。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  issuers : Array<string>;
}

/**
 * 定义网页要求用户创建窗口时触发的回调。从API version 23开始，如需获取更多窗口信息，可使用[OnWindowNewExtEvent]{@link OnWindowNewExtEvent}。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 26.1.0]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnWindowNewEvent {
  /**
   * true代表请求创建对话框，false代表新标签页。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice
   * @since 12 dynamic
   */
  isAlert: boolean;

  /**
   * true代表用户触发，false代表非用户触发。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice
   * @since 12 dynamic
   */
  isUserTrigger: boolean;

  /**
   * 目标url。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice
   * @since 12 dynamic
   */
  targetUrl: string;

  /**
   * 用于设置新建窗口的WebviewController实例。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice
   * @since 12 dynamic
   */
  handler: ControllerHandler;
}

/**
 * 定义接收到apple-touch-icon URL时触发的回调信息，包括URL和预合成状态。适用于需要获取网页图标的场景，提升图标管理的灵活性和用户体验。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnTouchIconUrlReceivedEvent {
  /**
   * 接收到的apple-touch-icon url地址。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;

  /**
   * 对应apple-touch-icon是否为预合成。
   * 
   * true表示对应apple-touch-icon为预合成，false表示对应apple-touch-icon不是预合成。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  precomposed: boolean;
}

/**
 * 定义应用接收到新favicon时触发的回调信息，包括图标PixelMap对象。适用于需要获取网页favicon的场景，提升图标管理的灵活性和用户体验。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnFaviconReceivedEvent {
  /**
   * 接收到的favicon图标的PixelMap对象。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  favicon: PixelMap;
}

/**
 * 定义旧页面不再呈现，新页面即将可见时触发的回调函数。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnPageVisibleEvent {
  /**
   * 新页面的URL地址。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;
}

/**
 * 定义网页表单可以重新提交时触发的回调信息，包括提交句柄。适用于需要处理表单重试提交的场景，提升表单交互的可靠性和用户体验。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnDataResubmittedEvent {
  /**
   * 表单数据重新提交句柄。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  handler: DataResubmissionHandler;
}

/**
 * 定义网页音频播放状态改变时触发的回调信息，包括播放状态。适用于需要监控音频播放行为的场景，提升音频管理的可见性和用户体验。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnAudioStateChangedEvent {
  /**
   * 当前页面的音频播放状态，true表示正在播放，false表示未播放。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  playing: boolean;
}

/**
 * 定义网页首次内容绘制的回调信息，包括加载时间和绘制时间。适用于需要监控页面渲染性能的场景，提升性能优化的准确性和用户体验。
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
 * 定义截获资源加载时触发的回调信息，包括请求详情。适用于需要拦截或处理资源加载的场景，提升资源控制的灵活性和安全性。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface OnLoadInterceptEvent {
  /**
   * url请求的相关信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  data: WebResourceRequest;
}

/**
 * 定义网页过度滚动时触发的回调信息，包括水平和垂直偏移量。
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
 * 定义PDF页面滚动到底时触发的回调函数。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
declare interface OnPdfScrollEvent {

  /**
   * 页面的URL地址。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  url:string;
}
/**
 * 定义PDF加载成功或失败时触发的函数。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
declare interface OnPdfLoadEvent {
  /**
   * PDF页面加载结果。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  result: PdfLoadResult;

  /**
   * 页面的URL地址。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  url: string;
}
/**
 * 定义要注入的JavaScript对象，包括对象名、方法列表和权限配置。适用于需要实现JavaScript与原生交互的场景，提升跨语言调用的灵活性和安全性。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 20]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface JavaScriptProxy {
  /**
   * 参与注册的对象。只能声明方法，不能声明属性。方法必须是函数类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  object: object;

  /**
   * 注册对象的名称，与window中调用的对象名一致。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  name: string;

  /**
   * 参与注册的应用侧JavaScript对象的同步方法。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  methodList: Array<string>;

  /**
   * 控制器。从API version 9开始，WebController不再维护，建议使用WebviewController替代。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  controller: WebController | WebviewController;

  /**
   * 参与注册的应用侧JavaScript对象的异步方法。异步方法无法获取返回值。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  asyncMethodList?: Array<string>;

  /**
   * json字符串，默认为空，通过该字符串配置JSBridge的权限管控，可以定义object、method一级的url白名单。
   * 
   * JavaScriptProxy的permission参数支持resource/http/https协议，不支持file协议。
   * 
   * 示例请参考[前端页面调用应用侧函数](docroot://web/web-in-page-app-function-invoking.md)。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  permission?: string;
}

/**
 * 软键盘避让的模式。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamic
 */
declare enum WebKeyboardAvoidMode {
  /**
   * 软键盘避让时，仅调整可视视口大小，不调整布局视口大小。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  RESIZE_VISUAL = 0,

  /**
   * 默认值，软键盘避让时，同时调整可视视口和布局视口的大小。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  RESIZE_CONTENT = 1,

  /**
   * 不调整任何视口大小，不会触发软键盘避让。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  OVERLAYS_CONTENT = 2,

  /**
   * Web组件的软键盘避让行为将跟随UIcontext设置的[KeyboardAvoidMode]{@link @ohos.arkui.UIContext:KeyboardAvoidMode}模式，Web组件不再处理组件的避让。
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
 * 应用中 Web 音频类型，用于控制 Web 音频的音频流类型和行为，帮助开发者根据应用场景优化音频体验，如支持网页游戏声音与系统音乐同时播放。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
declare enum AudioSessionType {
  /**
   * 适用于网页游戏场景，支持Web游戏声音与系统音乐同时播放。对应系统音频流类型STREAM_USAGE_GAME。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  AMBIENT = 3
}

/**
 * 定义PDF页面的加载结果，用于标识PDF文件加载过程中的各种状态和错误类型，帮助开发者在PDF显示失败时进行错误诊断和用户提示。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 20 dynamic
 */
declare enum PdfLoadResult {

  /**
   * PDF页面加载成功。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  LOAD_SUCCESS = 0,

  /**
   * PDF文件加载失败。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  PARSE_ERROR_FILE = 1,

  /**
   * PDF文件格式不支持。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  PARSE_ERROR_FORMAT = 2,

  /**
   * PDF文件密码不正确。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  PARSE_ERROR_PASSWORD = 3,

  /**
   * PDF文件处理失败。
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
   * 在使用scrollBy（只支持带滚动偏移量）且Web页面滚动偏移量为0，渲染流程跳过vsync调度直接绘制。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  SCROLLBY_FROM_ZERO_OFFSET = 1
}

/**
 * 用于配置预览菜单选项，支持设置菜单弹出时的振动效果。适用于需要增强菜单交互反馈的场景，提升用户体验。
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
 * 提供检测到白屏时的结果细节，包括有内容节点数量。适用于需要分析白屏原因的场景，提升白屏诊断的详细性和准确性。
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
 * 白屏的具体原因，用于标识页面白屏现象的底层原因，帮助开发者快速定位问题来源，提升页面加载问题的排查效率和用户体验。
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
 * 提供检测到白屏时的事件信息，包括URL、原因和细节。适用于需要监控页面白屏问题的场景，提升白屏诊断的准确性和用户体验。
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
   * 本次检测白屏的结果的细节。当使用检测有内容的节点检测策略，且检测到的有内容节点数量未超过阈值时，此参数包含当前命中了多少有内容节点等详细信息；未使用该策略或节点数量超过阈值时，此参数为空。
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
 * onTextSelectionChange的回调，选区内容改变时触发。
 *
 * @param { string } selectionText - 返回所选文本的内容。
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
type TextSelectionChangeCallback = (selectionText: string) => void;

/**
 * 白屏检测使用的检测策略的方法，用于定义页面内容检测的具体算法和点位，帮助开发者在检测准确性和性能开销之间取得平衡，及时发现页面渲染异常。
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
 * 提供白屏检测的策略配置选项，包括检测时机、方法和阈值。适用于需要自定义白屏检测行为的场景，提升白屏监控的灵活性和准确性。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 22 dynamic
 */
declare interface BlankScreenDetectionConfig {
  /**
   * 是否启用白屏策略功能。true表示启用，false表示不启用。
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
   * 注：检测策略最大节点依赖于所选择的检测策略。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  contentfulNodesCountThreshold?: number;
}

/**
 * 提供首屏渲染事件的信息，包括URL和绘制时间。适用于需要监控页面首屏渲染性能的场景，提升性能优化的准确性和用户体验。
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
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  navigationStartTime: number;

  /**
   * url所指页面首屏绘制完成的时刻。
   * 
   * 单位：毫秒。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  firstScreenPaintTime: number;
}

/**
 * 检测到首屏渲染结束时会触发此回调。与OnFirstMeaningfulPaintCallback关注主要内容加载完成、OnLargestContentfulPaintCallback关注最大内容元素绘制时间相比，本回调更关注首屏可见内
 * 容的渲染完成时间，适合评估用户首次视觉体验。
 *
 * @param { FirstScreenPaint } firstScreenPaint - 检测到首屏渲染时的详细信息。
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
type OnFirstScreenPaintCallback = (firstScreenPaint: FirstScreenPaint) => void;

/**
 * 当检测到输入法绑定成功时，会触发此回调。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
type OnInputmethodAttachedCallback = () => void;

/**
 * WebView中输入法沉浸模式，用于控制软键盘的显示风格，帮助开发者根据应用主题和用户偏好提供一致性的视觉体验，支持默认外观、系统跟随、浅色和深色沉浸式风格。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum WebKeyboardAppearanceMode {
  /**
   * 默认外观模式，不采用沉浸式风格。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  NONE_IMMERSIVE = 0,

  /**
   * 沉浸式模式，跟随系统。
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
 * 定义了Web属性函数。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class WebAttribute extends CommonMethod<WebAttribute> {
  /**
   * 设置是否允许执行JavaScript脚本。当属性没有显式调用时，默认允许。
   *
   * @param { boolean } javaScriptAccess - 是否允许执行JavaScript脚本。
   *     <br>true表示允许，false表示不允许。
   *     <br>传入undefined或null时为false。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  javaScriptAccess(javaScriptAccess: boolean): WebAttribute;

  /**
   * 设置是否开启应用中文件系统的访问。[$rawfile(filepath/filename)](docroot://quick-start/resource-categories-and-access.md#资源访问)中的文件不受该
   * 属性影响而被限制访问。API version 11及以前，当属性没有显式调用时，默认开启应用中文件系统的访问。API version 12及以后，当属性没有显式调用时，默认不开启应用中文件系统的访问。
   *
   * @param { boolean } fileAccess - 设置是否开启应用中文件系统的访问。
   *     <br>true表示开启，false表示不开启。
   *     <br>同时，当fileAccess为false的时候，仅只读资源目录`/data/storage/el1/bundle/entry/resources/resfile`里面的资源依然可以通过file协议访问，不受
   *     fileAccess管控。
   *     <br>API version 11及以前，传入undefined或null时为true，API version 12及以后传入undefined或null时为false。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fileAccess(fileAccess: boolean): WebAttribute;

  /**
   * 设置是否允许从网络加载图片资源（通过 HTTP 和 HTTPS 访问的资源）。当属性没有显式调用时，默认允许。
   *
   * @param { boolean } onlineImageAccess - 设置是否允许从网络加载图片资源。
   *     <br>true 表示允许，false 表示不允许。
   *     <br>传入 undefined 或 null 时为 false。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onlineImageAccess(onlineImageAccess: boolean): WebAttribute;

  /**
   * 设置是否开启文档对象模型存储接口（DOM Storage API）权限，当属性没有显式调用时，默认不开启文档对象模型存储接口（DOM Storage API）权限。
   *
   * @param { boolean } domStorageAccess - 设置是否开启文档对象模型存储接口（DOM Storage API）权限。
   *     <br>true表示开启，false表示不开启。
   *     <br>传入undefined或null时为false。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  domStorageAccess(domStorageAccess: boolean): WebAttribute;

  /**
   * 设置是否允许自动加载图片资源。当属性没有显式调用时，默认允许。
   *
   * @param { boolean } imageAccess - 设置是否允许自动加载图片资源。
   *     <br>true 表示允许，false 表示不允许。
   *     <br>传入 undefined 或 null 时为 false。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  imageAccess(imageAccess: boolean): WebAttribute;

  /**
   * 设定当安全源尝试从非安全源加载资源时的行为。当属性没有显式调用时，默认值为MixedMode.None，即禁止安全源从非安全源加载内容。
   *
   * @param { MixedMode } mixedMode - 要设置的混合内容模式。
   *     <br>传入undefined或null时为MixedMode.All。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  mixedMode(mixedMode: MixedMode): WebAttribute;

  /**
   * 设置是否支持手势进行缩放。该属性没有显式调用时，默认支持。
   *
   * @param { boolean } zoomAccess - 设置是否支持手势进行缩放。
   *     <br>true表示支持，false表示不支持。
   *     <br>传入undefined或null时为false。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  zoomAccess(zoomAccess: boolean): WebAttribute;

  /**
   * 设置是否开启获取地理位置权限。当属性没有显式调用时，默认开启。具体使用方式参考[管理位置权限](docroot://web/web-geolocation-permission.md)。
   *
   * @param { boolean } geolocationAccess - 设置是否开启获取地理位置权限。
   *     <br>true表示开启，false表示不开启。
   *     <br>传入undefined或null时为false。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  geolocationAccess(geolocationAccess: boolean): WebAttribute;

  /**
   * 将javaScriptProxy中的ArkTS对象注册到Web组件中，该对象将使用JavaScriptProxy中指定的名称注册到网页的所有框架中，包括所有iframe，这使得JavaScript可以调用
   * javaScriptProxy中ArkTS对象的方法。
   * 
   * > **说明：**
   * >
   * > javaScriptProxy接口需要和
   * > [deleteJavaScriptRegister<sup>9+</sup>]{@link @ohos.web.webview:webview.WebviewController#deleteJavaScriptRegister}
   * > 接口配合使用，防止内存泄漏。
   * >
   * > javaScriptProxy对象的所有参数不支持更新。
   * >
   * > 注册javaScriptProxy对象时，同步与异步列表请至少选择一项不为空，可同时注册两类方法。
   * >
   * > 此接口只支持注册一个对象，若需要注册多个对象请使用
   * > [registerJavaScriptProxy<sup>9+</sup>]{@link @ohos.web.webview:webview.WebviewController#registerJavaScriptProxy}
   * > 。
   *
   * @param { object } javaScriptProxy - 参与注册的对象。只能声明方法，不能声明属性。
   *     <br>传入undefined或null时不将javaScriptProxy中的ArkTS对象注册到Web组件中。 [since 8 - 11]
   * @param { JavaScriptProxy } javaScriptProxy - 参与注册的对象。只能声明方法，不能声明属性。
   *     <br>传入undefined或null时不将javaScriptProxy中的ArkTS对象注册到Web组件中。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  javaScriptProxy(javaScriptProxy: JavaScriptProxy): WebAttribute;

  /**
   * 设置是否应保存密码。该接口为空接口。
   *
   * @param { boolean } password - 设置为true时，表示允许Web保存密码。
   *     <br>设置为false时，表示不允许Web保存密码。
   *     <br>传入undefined或null时为false。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead ohos.web.WebAttribute#enableAutofill
   */
  password(password: boolean): WebAttribute;

  /**
   * 设置缓存模式。当属性没有显式调用时，默认为`CacheMode.Default`。
   *
   * @param { CacheMode } cacheMode - 要设置的缓存模式。
   *     <br>传入undefined或null时为CacheMode.Default。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  cacheMode(cacheMode: CacheMode): WebAttribute;

  /**
   * 设置Web深色模式。当属性没有显式调用时，默认关闭。
   * 
   * 当深色模式开启时，Web将启用媒体查询prefers-color-scheme中网页所定义的深色样式，若网页未定义深色样式，则保持原状。如需开启强制深色模式，建议配合
   * [forceDarkAccess]{@link WebAttribute#forceDarkAccess}使用。深色模式具体用法可参考[Web深色模式适配](docroot://web/web-set-dark-mode.md)。
   *
   * @param { WebDarkMode } mode - 设置Web的深色模式为关闭、开启或跟随系统。
   *     <br>传入null或undefined时为`WebDarkMode.Off`。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  darkMode(mode: WebDarkMode): WebAttribute;

  /**
   * 设置网页是否开启强制深色模式。该属性仅在[darkMode]{@link WebAttribute#darkMode}开启深色模式时生效。当属性没有显式调用时，默认网页不开启强制深色模式。
   *
   * @param { boolean } access - 设置网页是否开启强制深色模式。
   *     <br>true表示开启，false表示设置不开启。
   *     <br>传入null或undefined时为false。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  forceDarkAccess(access: boolean): WebAttribute;

  /**
   * 设置Web媒体播放的策略，其中包括：Web中的音频在重新获焦后能够自动续播的有效期、应用内多个Web实例的音频是否独占。当该属性未显式设置时，默认Web中的音频重新获焦后无法自动续播、应用内多个Web实例的音频是独占的。
   * 
   * > **说明：**
   * >
   * > - 同一Web实例中的多个音频均视为同一音频。
   * >
   * > - 该媒体播放策略将同时管控有声视频。
   * >
   * > - 建议为所有Web组件设置相同的[audioExclusive]{@link WebMediaOptions}值。
   * >
   * > - 音视频互相打断在应用内和应用间生效，续播只在应用间生效。
   *
   * @param { WebMediaOptions } options - 设置Web的媒体策略。
   *     <br>属性参数更新后需重新播放音频方可生效。
   *     <br>传入undefined或null时为`{resumeInterval: 0, audioExclusive: true}`
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  mediaOptions(options: WebMediaOptions): WebAttribute;

  /**
   * 设置是否应保存表单数据。当属性没有显式调用时，默认允许Web保存表单数据。该接口为空接口。
   *
   * @param { boolean } tableData - 设置为true时，表示允许Web保存表单数据。
   *     <br>设置为false时，表示不允许Web保存表单数据。
   *     <br>传入undefined或null时为true。
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
   * @param { boolean } overviewModeAccess - 设置是否使用概览模式加载网页。
   *     <br>true表示使用，false表示不使用。
   *     <br>传入undefined或null时为false。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  overviewModeAccess(overviewModeAccess: boolean): WebAttribute;

  /**
   * 设置Web过滚动模式。开启时，用户在Web根页面滑动到边缘时，Web会通过弹性动画弹回界面，根页面上的内部页面不会触发回弹。该属性没有显式调用时，默认关闭。
   *
   * @param { OverScrollMode } mode - 设置Web的过滚动模式为关闭或开启。
   *     <br>传入undefined或null时为OverScrollMode.NEVER。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice
   * @since 11 dynamic
   */
  overScrollMode(mode: OverScrollMode): WebAttribute;

  /**
   * 设置当软键盘收起时Web元素失焦模式。当属性没有显式调用时，默认按[BlurOnKeyboardHideMode.SILENT]{@link BlurOnKeyboardHideMode}模式处理。
   *
   * @param { BlurOnKeyboardHideMode } mode - 设置当软键盘收起时Web元素失焦关闭或开启。默认值：`BlurOnKeyboardHideMode.SILENT`。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 14 dynamic
   */
  blurOnKeyboardHideMode(mode: BlurOnKeyboardHideMode): WebAttribute;

  /**
   * 设置页面的文本缩放百分比。
   *
   * @param { number } textZoomAtio - 要设置的页面的文本缩放百分比。100表示原始大小，大于100表示放大，小于100表示缩小。
   *     <br>取值范围为(0, 2147483647]。
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
   * @param { number } textZoomRatio - 要设置的页面的文本缩放百分比，100表示原始大小，大于100表示放大，小于100表示缩小。
   *     <br>取值为整数，范围为(0, 2147483647]。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  textZoomRatio(textZoomRatio: number): WebAttribute;

  /**
   * 设置Web SQL数据库存储API权限，若未显式调用，此权限默认关闭。
   * 
   * > **说明：**
   * >
   * > - 本接口在ArkWeb内核升级到M132版本后因内核废弃Web SQL，对Web SQL数据库的控制失效。ArkWeb内核版本参考ArkWeb简介
   * > [约束与限制](docroot://web/web-component-overview.md#约束与限制)。
   *
   * @param { boolean } databaseAccess - 设置是否开启Web SQL数据库存储API权限。
   *     <br>true表示开启，false表示关闭。
   *     <br>传入undefined或null时为false。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  databaseAccess(databaseAccess: boolean): WebAttribute;

  /**
   * 设置整体页面的缩放百分比。该属性没有显式调用时，默认为100。
   *
   * @param { number } percent - 要设置的整体页面的缩放百分比。
   *     <br>取值范围：(0, 1000]。
   *     <br>传入undefined或null时属性设置不生效。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  initialScale(percent: number): WebAttribute;

  /**
   * 设置用户代理。
   *
   * @param { string } userAgent - 要设置的用户代理。
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
   * > - 当前通过User-Agent中是否含有"Mobile"字段来判断是否开启前端HTML页面中meta标签的viewport属性。当User-Agent中不含有"Mobile"字段时，meta标签中viewport属性默认关
   * > 闭，此时可通过显式设置metaViewport属性为true来覆盖关闭状态。
   *
   * @param { boolean } enabled - 是否支持meta标签的viewport属性。
   *     <br>true表示支持meta标签的viewport属性，将解析viewport属性，并根据viewport属性布局。
   *     <br>false表示不支持meta标签的viewport属性，将不解析viewport属性，进行默认布局。
   *     <br>传入null或undefined时为true。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  metaViewport(enabled: boolean): WebAttribute;

  /**
   * 网页加载完成时触发该回调，且只在主frame触发，iframe或者frameset的内容加载时不会触发此回调。
   *
   * @param { function } callback - 网页加载结束时触发。 [since 8 - 11]
   * @param { Callback<OnPageEndEvent> } callback - 网页加载结束时触发。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onPageEnd(callback: Callback<OnPageEndEvent>): WebAttribute;

  /**
   * 通知宿主应用页面开始加载。此方法在每次主frame加载时调用一次，因此对于包含iframes或frameset的页面，onLoadStarted仅针对主frame调用一次。这意味着当嵌入式frame的内容发生变化时，如点击
   * iframe中的链接或Fragment跳转（即跳转到#fragment_id的导航）等，不会调用onLoadStarted。
   * 
   * > **说明：**
   * >
   * > - 当弹出窗口的文档在加载之前被JavaScript修改时，它将模拟触发onLoadStarted，并将URL设置为空，因为显示当前正在加载的URL可能不安全。onPageBegin将不会被模拟。
   *
   * @param { Callback<OnLoadStartedEvent> } callback - 网页加载开始时触发。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  onLoadStarted(callback: Callback<OnLoadStartedEvent>): WebAttribute;

  /**
   * 通知宿主应用页面已加载完成。此方法仅在主frame加载完成时被调用。对于片段跳转（即导航至#fragment_id），onLoadFinished同样会被触发。
   * 
   * > **说明：**
   * >
   * > - 片段导航也会触发onLoadFinished，但onPageEnd不会被触发。
   * >
   * > - 如果主框架在页面完全加载之前被自动重定向，onLoadFinished只会触发一次。onPageEnd会在每次主框架导航时触发。
   * >
   * > - 当弹出窗口的文档在加载之前被JavaScript修改时，它将模拟触发onLoadStarted，并将URL设置为空，因为显示当前正在加载的URL可能不安全。onPageBegin将不会被模拟。
   *
   * @param { Callback<OnLoadFinishedEvent> } callback - 网页加载结束时触发。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  onLoadFinished(callback: Callback<OnLoadFinishedEvent>): WebAttribute;

  /**
   * 网页开始加载时触发该回调，且只在主frame触发，iframe或者frameset的内容加载时不会触发此回调。
   *
   * @param { function } callback - 网页加载结束时触发。 [since 8 - 11]
   * @param { Callback<OnPageBeginEvent> } callback - 网页加载开始时触发。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onPageBegin(callback: Callback<OnPageBeginEvent>): WebAttribute;

  /**
   * 网页加载进度变化时触发该回调。
   *
   * @param { function } callback - 页面加载进度变化时触发的回调。 [since 8 - 11]
   * @param { Callback<OnProgressChangeEvent> } callback - 页面加载进度变化时触发的回调。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onProgressChange(callback: Callback<OnProgressChangeEvent>): WebAttribute;

  /**
   * 当页面文档标题`<title>`元素发生变更时，触发回调。若当前页面未显示设置标题，ArkWeb将在加载完成前基于页面的URL生成标题并返回给应用。
   *
   * @param { function } callback - 页面文档标题发生变更时触发。 [since 8 - 11]
   * @param { Callback<OnTitleReceiveEvent> } callback - 页面文档标题发生变更时触发。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onTitleReceive(callback: Callback<OnTitleReceiveEvent>): WebAttribute;

  /**
   * 通知用户先前被调用[onGeolocationShow]{@link WebAttribute#onGeolocationShow}时收到地理位置信息获取请求已被取消。用于清理定位相关资源，优化资源使用。
   *
   * @param { function } callback - 地理位置信息获取请求已被取消的回调函数。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onGeolocationHide(callback: () => void): WebAttribute;

  /**
   * 通知用户收到地理位置信息获取请求，需配置"ohos.permission.LOCATION"、"ohos.permission.APPROXIMATELY_LOCATION"权限。使用callback异步回调。用于显示自定义的位置
   * 权限申请弹窗、实现位置服务说明、根据应用需求选择是否授权，提供更好的位置权限管理体验。
   *
   * @param { function } callback - 回调函数，请求显示地理位置权限时触发，返回地理位置信息请求对象。
   *     geolocation information request object. [since 8 - 11]
   * @param { Callback<OnGeolocationShowEvent> } callback - 回调函数，请求显示地理位置权限时触发，返回地理位置信息请求对象。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onGeolocationShow(callback: Callback<OnGeolocationShowEvent>): WebAttribute;

  /**
   * 当Web组件获取焦点时触发回调。如果组件在未获焦状态下加载网页并成功获取焦点，将触发两次回调。
   *
   * @param { function } callback - 当网页获取焦点时触发的回调。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onRequestSelected(callback: () => void): WebAttribute;

  /**
   * 网页触发alert()告警弹窗时触发回调。若不调用[handleCancel]{@link JsResult#handleCancel}或[handleConfirm]{@link JsResult#handleConfirm}接
   * 口，会造成渲染进程阻塞。
   *
   * @param { function } callback - 网页触发alert()告警弹窗时触发。
   *     <br>返回值boolean。当回调返回true时，应用可调用自定义弹窗能力（包括确认和取消），并根据用户的确认或取消操作调用JsResult通知Web组件最终确认结果。当回调返回false时，弹窗的处理结果会被视为取
   *     消。 [since 8 - 11]
   * @param {  Callback<OnAlertEvent, boolean> } callback - 网页触发alert()告警弹窗时触发。
   *     <br>返回值boolean。当回调返回true时，应用可调用自定义弹窗能力（包括确认和取消），并根据用户的确认或取消操作调用JsResult通知Web组件最终确认结果。当回调返回false时，弹窗的处理结果会被视为取
   *     消。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onAlert(callback: Callback<OnAlertEvent, boolean>): WebAttribute;

  /**
   * 即将完成页面刷新或关闭当前页面时触发此回调。
   * 
   * > **说明：**
   * >
   * > - 如果当前Web组件没有得到焦点，刷新或关闭当前页面时onBeforeUnload不会触发。
   *
   * @param { function } callback - 即将完成页面刷新或关闭当前页面时触发。
   *     <br>返回值boolean。当回调返回true时，应用可以调用自定义弹窗能力（包括确认和取消），并且需要根据用户的确认或取消操作调用JsResult通知Web组件最终是否离开当前页面。当回调返回false时，函数中绘制的
   *     自定义弹窗无效。 [since 8 - 11]
   * @param { Callback<OnBeforeUnloadEvent, boolean> } callback - 即将完成页面刷新或关闭当前页面时触发。
   *     <br>返回值boolean。当回调返回true时，应用可以调用自定义弹窗能力（包括确认和取消），并且需要根据用户的确认或取消操作调用JsResult通知Web组件最终是否离开当前页面。当回调返回false时，函数中绘制的
   *     自定义弹窗无效。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onBeforeUnload(callback: Callback<OnBeforeUnloadEvent, boolean>): WebAttribute;

  /**
   * 网页调用confirm()告警时触发此回调。若不调用[handleCancel]{@link JsResult#handleCancel}或[handleConfirm]{@link JsResult#handleConfirm}
   * 接口，会造成渲染进程阻塞。
   *
   * @param { function } callback - 网页调用confirm()告警时触发。
   *     <br>返回值boolean。当回调返回true时，应用可以调用自定义弹窗能力（包括确认和取消），并且需要根据用户的确认或取消操作调用JsResult通知Web组件最终确认结果。当回调返回false时，弹窗的处理结果会被视
   *     为取消。 [since 8 - 11]
   * @param { Callback<OnConfirmEvent, boolean> } callback - 网页调用confirm()告警时触发。
   *     <br>返回值boolean。当回调返回true时，应用可以调用自定义弹窗能力（包括确认和取消），并且需要根据用户的确认或取消操作调用JsResult通知Web组件最终确认结果。当回调返回false时，弹窗的处理结果会被视
   *     为取消。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onConfirm(callback: Callback<OnConfirmEvent, boolean>): WebAttribute;

  /**
   * 网页调用prompt()告警时触发此回调。若不调用[handleCancel]{@link JsResult#handleCancel}或
   * [handlePromptConfirm]{@link JsResult#handlePromptConfirm}接口，会造成渲染进程阻塞。
   *
   * @param { function } callback - 网页调用prompt()告警时触发。
   *     <br>返回值boolean。当回调返回true时，应用可以调用自定义弹窗能力（包括确认、取消和输入），并且需要根据用户的确认或取消操作调用JsResult通知Web组件最终处理结果。当回调返回false时，弹窗的处理结果
   *     会被视为取消。 [since 9 - 11]
   * @param { Callback<OnPromptEvent, boolean> } callback - 网页调用prompt()告警时触发。
   *     <br>返回值boolean。当回调返回true时，应用可以调用自定义弹窗能力（包括确认、取消和输入），并且需要根据用户的确认或取消操作调用JsResult通知Web组件最终处理结果。当回调返回false时，弹窗的处理结果
   *     会被视为取消。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onPrompt(callback: Callback<OnPromptEvent, boolean>): WebAttribute;

  /**
   * 通知宿主应用JavaScript console消息。
   *
   * @param { function } callback - 网页收到JavaScript控制台消息时触发。
   *     <br>返回值boolean。当返回true时，该条消息将不会再打印至hilog日志，返回false时仍会打印至hilog日志。 [since 8 - 11]
   * @param {  Callback<OnConsoleEvent, boolean> } callback - 网页收到JavaScript控制台消息时触发。
   *     <br>返回值boolean。当返回true时，该条消息将不会再打印至hilog日志，返回false时仍会打印至hilog日志。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onConsole(callback: Callback<OnConsoleEvent, boolean>): WebAttribute;

  /**
   * 网页加载遇到错误时触发该回调。主资源与子资源出错都会回调该接口，可以通过[isMainFrame]{@link WebResourceRequest#isMainFrame}来判断是否是主资源报错。出于性能考虑，建议此回调中尽量执
   * 行简单逻辑。在无网络的情况下，触发此回调。
   *
   * @param { function } callback - 网页收到 Web 资源加载错误时触发。 [since 8 - 11]
   * @param { Callback<OnErrorReceiveEvent> } callback - 网页收到 Web 资源加载错误时触发。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onErrorReceive(callback: Callback<OnErrorReceiveEvent>): WebAttribute;

  /**
   * 网页加载资源遇到的HTTP错误（响应码>=400）时触发该回调。
   *
   * @param { function } callback - 网页收到加载资源返回HTTP错误码时触发。 [since 8 - 11]
   * @param { Callback<OnHttpErrorReceiveEvent> } callback - 网页收到加载资源返回HTTP错误码时触发。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onHttpErrorReceive(callback: Callback<OnHttpErrorReceiveEvent>): WebAttribute;

  /**
   * 通知主应用开始下载文件。
   *
   * @param { function } callback - 开始下载时触发此回调。 [since 8 - 11]
   * @param { Callback<OnDownloadStartEvent> } callback - 开始下载时触发此回调。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onDownloadStart(callback: Callback<OnDownloadStartEvent>): WebAttribute;

  /**
   * 导航完成时触发该回调，用于应用更新其访问的历史链接。
   *
   * @param { function } callback - 在导航完成时触发。 [since 8 - 11]
   * @param { Callback<OnRefreshAccessedHistoryEvent> } callback - 在导航完成时触发。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onRefreshAccessedHistory(callback: Callback<OnRefreshAccessedHistoryEvent>): WebAttribute;

  /**
   * 当Web组件加载url之前触发该回调，用于判断是否阻止此次访问。
   *
   * @param { function } callback - url的相关信息。
   *     <br>返回值：boolean，true表示阻止此次加载，false表示允许此次加载。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead ohos.web.WebAttribute#onLoadIntercept
   */
  onUrlLoadIntercept(callback: (event?: { data: string | WebResourceRequest }) => boolean): WebAttribute;

  /**
   * 通知用户加载资源时发生SSL错误。
   *
   * @param { function } callback - 当网页检测到SSL错误时触发的回调。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.WebAttribute#onSslErrorEventReceive
   */
  onSslErrorReceive(callback: (event?: { handler: Function, error: object }) => void): WebAttribute;

  /**
   * 应用渲染进程异常退出时触发该回调。
   * 
   * 多个Web组件可能共享单个渲染进程，每个受影响的Web组件都会触发该回调。
   * 
   * 应用处理该回调时，可以调用绑定的webviewController相关接口来恢复页面。例如[refresh]{@link @ohos.web.webview:webview.WebviewController#refresh()}
   * 、[loadUrl]{@link @ohos.web.webview:webview.WebviewController#loadUrl}等。
   * 
   * 组件生命周期回调详情可参考[Web组件的生命周期](docroot://web/web-event-sequence.md)。
   *
   * @param { Callback<OnRenderExitedEvent> } callback - 渲染过程退出时触发。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onRenderExited(callback: Callback<OnRenderExitedEvent>): WebAttribute;

  /**
   * 用于处理具有“文件”输入类型的HTML表单。若不调用此函数或返回false，Web组件会提供默认的“选择文件”处理界面。若返回true，应用可以自定义“选择文件”的响应行为。
   *
   * @param { function } callback - 通知Web组件文件选择的结果。
   *     <br>返回值boolean。当返回值为true时，应用可以自定义“选择文件”的响应行为。当返回值为false时，函数中绘制的自定义弹窗无效，Web组件将使用系统默认的“选择文件”处理界面。 [since 9 - 11]
   * @param { Callback<OnShowFileSelectorEvent, boolean> } callback - 通知Web组件文件选择的结果。
   *     <br>返回值boolean。当返回值为true时，应用可以自定义“选择文件”的响应行为。当返回值为false时，函数中绘制的自定义弹窗无效，Web组件将使用系统默认的“选择文件”处理界面。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onShowFileSelector(callback: Callback<OnShowFileSelectorEvent, boolean>): WebAttribute;

  /**
   * 应用渲染进程因错误或崩溃退出时触发回调。
   * 
   * 多个Web组件可能共享单个渲染进程，每个受影响的Web组件都会触发该回调。
   * 
   * 应用处理该回调时，可以调用绑定的WebViewController接口来恢复页面。例如[refresh]{@link @ohos.web.webview:webview.WebviewController#refresh()}、
   * [loadUrl]{@link @ohos.web.webview:webview.WebviewController#loadUrl}等。
   * 
   * 详情可参考[Web组件的生命周期](docroot://web/web-event-sequence.md)。
   *
   * @param { function } callback - 渲染过程退出时触发。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.WebAttribute#onRenderExited
   */
  onRenderExited(callback: (event?: { detail: object }) => boolean): WebAttribute;

  /**
   * 调用此函数以处理具有“文件”输入类型的HTML表单，以响应用户按下的“选择文件”按钮。
   *
   * @param { function } callback - 当触发文件选择器时需要执行的回调。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.web.WebAttribute#onShowFileSelector
   */
  onFileSelectorShow(callback: (event?: { callback: Function, fileSelector: object }) => void): WebAttribute;

  /**
   * 通知Web组件所加载的资源文件url信息。
   *
   * @param { function } callback - 加载url时触发。 [since 9 - 11]
   * @param { Callback<OnResourceLoadEvent> } callback - 加载url时触发。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onResourceLoad(callback: Callback<OnResourceLoadEvent>): WebAttribute;

  /**
   * 通知开发者Web组件退出全屏模式。用于恢复状态栏和导航栏、调整页面布局恢复正常显示、实现全屏与正常显示的平滑切换，提供更好的全屏交互体验。
   *
   * @param { function } callback - 退出全屏模式时的回调函数，无参数。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onFullScreenExit(callback: () => void): WebAttribute;

  /**
   * 通知开发者Web组件进入全屏模式。用于隐藏状态栏和导航栏、调整页面布局以适应全屏、实现沉浸式视频播放等全屏体验。
   *
   * @param { OnFullScreenEnterCallback } callback - Web组件进入全屏时的回调信息，包含videoWidth、videoHeight和handler字段。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onFullScreenEnter(callback: OnFullScreenEnterCallback): WebAttribute;

  /**
   * 当页面显示比例发生变化时，触发该回调。用于监听用户缩放行为，提供更好的页面缩放体验。
   *
   * @param { function } callback - 当页面显示比例发生变化时，触发该回调。 [since 9 - 11]
   * @param { Callback<OnScaleChangeEvent> } callback - 当页面显示比例发生变化时，触发该回调。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onScaleChange(callback: Callback<OnScaleChangeEvent>): WebAttribute;

  /**
   * 通知收到HTTP认证请求。
   *
   * @param { function } callback - 当浏览器需要用户的凭据时触发。
   *     <br>返回值boolean。返回true表示HTTP认证成功，返回false表示HTTP认证失败。 [since 9 - 11]
   * @param { Callback<OnHttpAuthRequestEvent, boolean> } callback - 当浏览器需要用户的凭据时触发。
   *     <br>返回值boolean。返回true表示HTTP认证成功，返回false表示HTTP认证失败。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onHttpAuthRequest(callback: Callback<OnHttpAuthRequestEvent, boolean>): WebAttribute;

  /**
   * 当Web组件加载URL之前触发该回调，用于拦截URL并返回响应数据。`onInterceptRequest`可拦截所有跳转请求并返回响应数据，但无法访问POST请求体（Body）内容，且不支持分片缓冲（buffer）类型数据获取。
   * 此类场景需改用[WebSchemeHandler]{@link @ohos.web.webview:webview.WebSchemeHandler}实现，依据具体业务需求进行判断。
   *
   * @param { function } callback - 当Web组件加载url之前触发此回调。
   *     <br>返回值[WebResourceResponse]{@link ./web}。返回响应数据则按照响应数据加载，无响应数据则返回null表示按照原来的方式加载。 [since 9 - 11]
   * @param { Callback<OnInterceptRequestEvent, WebResourceResponse> } callback - 当Web组件加载url之前触发此回调。
   *     <br>返回值[WebResourceResponse]{@link ./web}。返回响应数据则按照响应数据加载，无响应数据则返回null表示按照原来的方式加载。 [since 12]
   * @returns { WebAttribute } If the response value is null, the Web will continue to load the resources.
   *     Otherwise, the response value will be used
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onInterceptRequest(callback: Callback<OnInterceptRequestEvent, WebResourceResponse>): WebAttribute;

  /**
   * 通知收到获取权限请求，需配置"ohos.permission.CAMERA"、"ohos.permission.MICROPHONE"权限。用于自定义权限申请弹窗样式、实现细粒度的权限控制、在特定条件下拒绝或授予权限请求，提供更好
   * 的权限管理体验。
   *
   * @param { Callback<OnPermissionRequestEvent> } callback - 收到权限请求时触发。事件对象包含请求的权限类型（如摄像头、麦克风）、请求来源等信息。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  onPermissionRequest(callback: Callback<OnPermissionRequestEvent>): WebAttribute;

  /**
   * 通知收到屏幕捕获请求。用于控制页面截图权限、实现隐私保护、防止敏感信息泄露，保护用户隐私和数据安全。
   *
   * @param { Callback<OnScreenCaptureRequestEvent> } callback - 收到屏幕捕获请求时触发。事件对象包含请求来源URL、请求的捕获模式等信息。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onScreenCaptureRequest(callback: Callback<OnScreenCaptureRequestEvent>): WebAttribute;

  /**
   * 长按特定元素（例如图片，链接）或鼠标右键，弹出菜单。用于自定义右键菜单项、实现复制、保存、分享等功能、隐藏默认菜单项，提供更好的上下文交互体验。
   *
   * @param { function } callback 调用以允许自定义显示上下文菜单时触发的回调。[9 - 11 版本起支持]
   * @param { Callback<OnContextMenuShowEvent, boolean> } callback - 调用时触发的回调，以允许自定义显示上下文菜单。
   *     <br>返回值boolean。返回true表示触发自定义菜单，返回false表示触发的自定义菜单无效，将使用系统默认菜单。 [since 12]
   * @returns { WebAttribute } 自定义显示返回 true，否则默认显示返回 false。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onContextMenuShow(callback: Callback<OnContextMenuShowEvent, boolean>): WebAttribute;

  /**
   * 长按特定元素（例如图片，链接）或鼠标右键，隐藏菜单。
   *
   * @param { OnContextMenuHideCallback } callback - 上下文菜单隐藏时触发。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  onContextMenuHide(callback: OnContextMenuHideCallback): WebAttribute;

  /**
   * 设置有声视频的自动播放是否需要用户手动点击，静音视频播放不受该接口管控。当该属性未显式设置时，默认需要用户手动点击。
   *
   * @param { boolean } access - 设置有声视频的自动播放是否需要用户手动点击。
   *     <br>true 表示需要用户手动点击，false 表示不需要，能自动播放。
   *     <br>传入 undefined 或 null 时为 false。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  mediaPlayGestureAccess(access: boolean): WebAttribute;

  /**
   * 回调通知调用方网页页内查找的结果。
   *
   * @param { function } callback - 通知调用方网页页内查找的结果。 [since 9 - 11]
   * @param { Callback<OnSearchResultReceiveEvent> } callback - 通知调用方网页页内查找的结果。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onSearchResultReceive(callback: Callback<OnSearchResultReceiveEvent>): WebAttribute;

  /**
   * 通知网页全局滚动位置。
   * 
   * > **说明：**
   * >
   * > 通知的是页面全局滚动位置，局部滚动位置的变化是无法触发此回调。
   * >
   * > 判断页面是否是全局滚动，在滚动前后打印window.pageYOffset或者window.pageXOffset。
   * >
   * > 如果是全局滚动，window.pageYOffset或者window.pageXOffset的值在滚动前后会有变化，反之没有变化。
   *
   * @param { function } callback - Callback triggered when the page is scrolled to a specified position. [since 9 - 11]
   * @param { Callback<OnScrollEvent> } callback - 当页面滚动到指定位置时触发。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onScroll(callback: Callback<OnScrollEvent>): WebAttribute;

  /**
   * 通知用户加载资源时发生SSL错误，只支持主资源。
   * 
   * 如果需要支持子资源，请使用[OnSslErrorEvent]{@link WebAttribute#onSslErrorEvent}接口。
   * 
   * > **说明：**
   * >
   * > - 主资源：浏览器加载网页的入口文件，通常是HTML文档。
   * >
   * > - 子资源：主资源中引用的依赖文件，由主资源解析过程中遇到特定标签时触发加载。
   * >
   * > - 应用程序需要调用[handler.handleCancel()]{@link SslErrorHandler#handleCancel()}或
   * > [handler.handleConfirm()]{@link SslErrorHandler#handleConfirm}处理该回调，如果没有处理该回调则默认取消资源加载。handleConfirm()或者
   * > handleCancel()的行为可能会被记录下来，以便为将来的SSL错误做出响应。
   * >
   * > - 应用程序可以用于显示自定义错误页面或静默记录问题。
   *
   * @param { function } callback - 当网页收到SSL错误时触发。 [since 9 - 11]
   * @param { Callback<OnSslErrorEventReceiveEvent> } callback - 当网页收到SSL错误时触发。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onSslErrorEventReceive(callback: Callback<OnSslErrorEventReceiveEvent>): WebAttribute;

  /**
   * 通知用户加载资源（主资源+子资源）时发生SSL错误，如果只想处理主资源的SSL错误，请用[isMainFrame]{@link WebResourceRequest#isMainFrame}字段进行区分。
   * 
   * > **说明：**
   * >
   * > - 主资源：浏览器加载网页的入口文件，通常是HTML文档。
   * >
   * > - 子资源：主资源中引用的依赖文件，由主资源解析过程中遇到特定标签时触发加载。
   *
   * @param { OnSslErrorEventCallback } callback - 通知用户加载资源时发生SSL错误。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  onSslErrorEvent(callback: OnSslErrorEventCallback): WebAttribute;

  /**
   * 通知用户收到SSL客户端证书请求事件。
   * 
   * > **说明：**
   * >
   * > - Web组件有三种响应方式：[ClientAuthenticationHandler.confirm]{@link ClientAuthenticationHandler#confirm(authUri: string)}（
   * > 继续）、[ClientAuthenticationHandler.cancel]{@link ClientAuthenticationHandler#cancel}（取消）或
   * > [ClientAuthenticationHandler.ignore]{@link ClientAuthenticationHandler#ignore}（忽略）。
   * >
   * > - 如果调用ClientAuthenticationHandler.confirm或ClientAuthenticationHandler.cancel，ArkWeb会将认证结果存储在内存中（在应用程序的生命周期内），并且不会
   * > 对相同的主机和端口再次调用onClientAuthenticationRequest()。如果调用onClientAuthenticationRequest.ignore，ArkWeb则不会存储该认证结果。
   * >
   * > - 需配置"ohos.permission.ACCESS_CERT_MANAGER"权限。
   *
   * @param { function } callback - 当需要用户提供的SSL客户端证书时触发的回调。 [since 9 - 11]
   * @param { Callback<OnClientAuthenticationEvent> } callback - 当需要用户提供的SSL客户端证书时触发的回调。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onClientAuthenticationRequest(callback: Callback<OnClientAuthenticationEvent>): WebAttribute;

  /**
   * 通知用户进行PIN码认证。使用callback异步回调。
   *
   * @param { OnVerifyPinCallback } callback - 当需要用户进行PIN码认证时触发的回调。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  onVerifyPin(callback: OnVerifyPinCallback): WebAttribute;

  /**
   * 在开启multiWindowAccess（多窗口访问）属性的情况下，通知应用有新建窗口请求。如需获取更丰富的窗口信息建议使用onWindowNewExt。
   * 
   * 若不调用[setWebController]{@link ControllerHandler#setWebController}接口，会造成渲染进程阻塞。
   * 
   * 如果没有创建新窗口，调用[setWebController]{@link ControllerHandler#setWebController}接口时设置成null，通知Web没有创建新窗口。
   * 
   * 新窗口需避免直接覆盖在原Web组件上，且应与主页面以相同形式明确显示其URL（如地址栏）以防止用户混淆。若无法实现可信的URL可视化管理，则需考虑禁止创建新窗口。
   * 
   * 需注意：新窗口请求来源无法可靠追溯，可能由第三方iframe发起，应用需默认采取沙箱隔离、限制权限等防御性措施以确保安全。
   *
   * @param {  Callback<OnWindowNewEvent> } callback - 网页要求用户创建窗口时触发的回调。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onWindowNew(callback: Callback<OnWindowNewEvent>): WebAttribute;

  /**
   * 在启用[multiWindowAccess]{@link WebAttribute#multiWindowAccess}的情况下，通知应用有新建窗口请求。
   * 
   * > **说明：**
   * >
   * > - 若不调用[setWebController]{@link ControllerHandler#setWebController}接口，会造成渲染进程阻塞。
   * >
   * > - 若未创建新窗口，调用[setWebController]{@link ControllerHandler#setWebController}接口并设置成null，通知Web未创建新窗口。
   * >
   * > - 新窗口需避免直接覆盖在原Web组件上，且应与主页面以相同形式明确显示其URL（如地址栏）以防止用户混淆。若无法确保URL的显示和验证机制可靠，则需考虑禁止创建新窗口。
   * >
   * > - 新窗口请求来源无法可靠追溯，可能由第三方iframe发起，应用需默认采取沙箱隔离、限制权限等防御性措施以确保安全。
   *
   * @param {  Callback<OnWindowNewExtEvent> } callback - 网页要求用户创建窗口时触发的回调。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 23 dynamic
   */
  onWindowNewExt(callback: Callback<OnWindowNewExtEvent>): WebAttribute;

  /**
   * 通知应用有窗口关闭请求。和[onWindowNew]{@link WebAttribute#onWindowNew}一样，从安全角度考虑，应用应确保用户可以知道他们交互的页面已关闭。
   *
   * @param { function } callback - 窗口请求关闭的回调函数。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onWindowExit(callback: () => void): WebAttribute;

  /**
   * 设置是否开启多窗口权限。当属性没有显式调用时，默认不开启。
   * 
   * 使能多窗口权限时，需要实现onWindowNew事件，示例代码参考[onWindowNew]{@link WebAttribute#onWindowNew}。
   *
   * @param { boolean } multiWindow - 设置是否开启多窗口权限。
   *     <br>true表示开启，false表示不开启。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  multiWindowAccess(multiWindow: boolean): WebAttribute;

  /**
   * 设置键盘事件的回调函数，该回调在被Webview使用前触发。
   *
   * @param { function } callback - 触发的KeyEvent事件。
   *     <br>返回值为boolean类型，true表示将该KeyEvent传入Webview内核，false表示不将该KeyEvent传入Webview内核。
   * @returns { WebAttribute } True if the application consumes key events else false.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onInterceptKeyEvent(callback: (event: KeyEvent) => boolean): WebAttribute;

  /**
   * 设置网页的standard font字体库，用于渲染html前端未指定字体样式的元素。
   * 
   * 当属性没有显式调用时，默认网页的standard font字体库为sans-serif。
   *
   * @param { string } family - 设置网页的standard font字体库。
   *     <br>传入null或undefined时为sans-serif。
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
   * @param { string } family - 设置网页的serif font字体库。
   *     <br>传入null或undefined时为serif。
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
   * @param { string } family - 设置网页的sans-serif font字体库。
   *     <br>传入null或undefined时为sans-serif。
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
   * @param { string } family - 设置网页的fixed font字体库，传入值为字体名称字符串，如"monospace"、"Arial"等。
   *     <br>传入null或undefined时为monospace。
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
   * @param { string } family - 设置网页的fantasy font字体库。
   *     <br>传入null或undefined时为fantasy。
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
   * @param { string } family - 设置网页的cursive font字体库。
   *     <br>传入null或undefined时为cursive。
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
   * @param { number } size - 设置网页的默认等宽字体大小，单位px。
   *     <br>输入值的范围为[-2^31, 2^31-1]，实际渲染时超过72px的值按照72px进行渲染，低于1px的值按照1px进行渲染。
   *     <br>传入null或undefined时为13。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  defaultFixedFontSize(size: number): WebAttribute;

  /**
   * 设置网页的默认字体大小。对于html前端使用非monospace字体且未指定font-size样式的元素，将按此值渲染字体大小。
   * 
   * 当属性没有显式调用时，网页的默认字体大小为16。
   *
   * @param { number } size - 设置网页的默认字体大小，单位px。
   *     <br>输入值的范围为[-2^31, 2^31-1]，实际渲染时超过72px的值按照72px进行渲染，低于1px的值按照1px进行渲染。
   *     <br>传入null或undefined时为16。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  defaultFontSize(size: number): WebAttribute;

  /**
   * 设置网页字体大小最小值。对于html前端元素，若元素字体大小低于该接口设置值，将采用接口设置值渲染字体大小。
   * 
   * 当属性没有显式调用时，默认网页字体大小最小值为8。
   *
   * @param { number } size - 设置网页字体大小最小值，单位px。
   *     <br>输入值的范围为[-2^31, 2^31-1]，实际渲染时超过72px的值按照72px进行渲染，低于1px的值按照1px进行渲染。
   *     <br>传入null或undefined时为8。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
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
   * @param { number } size - 设置网页逻辑字体大小最小值，单位px。
   *     <br>输入值的范围为[-2^31, 2^31-1]，实际渲染时超过72px的值按照72px进行渲染，低于1px的值按照1px进行渲染。
   *     <br>传入null或undefined时为8。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  minLogicalFontSize(size: number): WebAttribute;

  /**
   * 设置网页的默认字符编码。当属性没有显式调用时，网页的默认字符编码为"UTF-8"。
   *
   * @param { string } textEncodingFormat - 默认字符编码。
   *     <br>传入null或undefined时为"UTF-8"。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  defaultTextEncodingFormat(textEncodingFormat: string): WebAttribute;

  /**
   * 设置滚动条是否常驻。在常驻状态下，当页面大小超过一页时，滚动条出现且不消失。该属性没有显式调用时，默认设置滚动条不常驻。
   * 
   * 全量展开模式下不支持滚动条常驻，即layoutMode为WebLayoutMode.FIT_CONTENT模式时，参数enabled为false。
   * 
   * > **说明：**
   * >
   * > - 该接口在当前应用的所有Web组件中全局生效。多个Web组件设置不同值时，以首次设置的值为准。
   * >
   * > - 若同时调用[setScrollbarMode]{@link @ohos.web.webview:webview.WebviewController#setScrollbarMode()}，该接口设置不生效。
   *
   * @param { boolean } enabled - 滚动条是否常驻。
   *     <br>true表示滚动条常驻，false表示滚动条不常驻。
   *     <br>当layoutMode为WebLayoutMode.FIT_CONTENT模式时，enabled参数强制为false，设置true也不生效。
   *     <br>传入undefined或null时属性设置不生效。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 14 dynamic
   */
  forceDisplayScrollBar(enabled: boolean): WebAttribute;

  /**
   * 设置Web组件是否阻止从网络加载资源。当属性没有显式调用时，默认允许从网络加载资源。
   *
   * @param { boolean } block - 设置Web组件是否允许从网络加载资源。
   *     <br>true表示不允许从网络加载资源，false表示允许从网络加载资源。
   *     <br>传入undefined或null时为false。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  blockNetwork(block: boolean): WebAttribute;

  /**
   * 设置是否显示横向滚动条，包括系统默认滚动条和用户自定义滚动条。该属性没有显式调用时，默认显示。
   * 
   * > **说明：**
   * >
   * > - 通过[@State](docroot://ui/state-management/arkts-state.md)变量控制横向滚动条的隐藏/显示后，需要调用
   * > [controller.refresh()]{@link @ohos.web.webview:webview.WebviewController#refresh()}生效。
   * >
   * > - 通过[@State](docroot://ui/state-management/arkts-state.md)变量频繁动态改变时，建议切换开关变量和Web组件一一对应。
   *
   * @param { boolean } horizontalScrollBar - 设置是否显示横向滚动条。
   *     <br>true表示显示，false表示不显示。
   *     <br>传入undefined或null时为false。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  horizontalScrollBarAccess(horizontalScrollBar: boolean): WebAttribute;

  /**
   * 设置是否显示纵向滚动条，包括系统默认滚动条和用户自定义滚动条。该属性没有显式调用时，默认显示。
   * 
   * > **说明：**
   * >
   * > - 通过@State变量控制纵向滚动条的隐藏/显示后，需要调用controller.refresh()生效。
   * >
   * > - 通过@State变量频繁动态改变时，建议切换开关变量和Web组件一一对应。
   *
   * @param { boolean } verticalScrollBar - 设置是否显示纵向滚动条。
   *     <br>true表示显示，false表示不显示。
   *     <br>传入undefined或null时为false。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  verticalScrollBarAccess(verticalScrollBar: boolean): WebAttribute;

  /**
   * 接收到apple-touch-icon URL地址时触发的回调函数。
   *
   * @param { function } callback - 接收到的apple-touch-icon URL地址时触发。 [since 9 - 11]
   * @param { Callback<OnTouchIconUrlReceivedEvent> } callback - 接收到的apple-touch-icon URL地址时触发。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onTouchIconUrlReceived(callback: Callback<OnTouchIconUrlReceivedEvent>): WebAttribute;

  /**
   * 设置应用为当前页面接收到新的favicon时的回调函数。
   *
   * @param { function } callback - 当前页面接收到新的favicon时触发。 [since 9 - 11]
   * @param { Callback<OnFaviconReceivedEvent> } callback - 当前页面接收到新的favicon时触发。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onFaviconReceived(callback: Callback<OnFaviconReceivedEvent>): WebAttribute;

  /**
   * 设置旧页面不再呈现，新页面即将可见时触发的回调函数。
   *
   * @param {  Callback<OnPageVisibleEvent> } callback - 旧页面不再呈现，新页面即将可见时触发的回调函数。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onPageVisible(callback: Callback<OnPageVisibleEvent>): WebAttribute;

  /**
   * 当网页表单可以重新提交时触发的回调函数。
   *
   * @param { function } callback - 网页表单可以重新提交时触发。 [since 9 - 11]
   * @param { Callback<OnDataResubmittedEvent> } callback - 网页表单可以重新提交时触发。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onDataResubmitted(callback: Callback<OnDataResubmittedEvent>): WebAttribute;

  /**
   * 设置网页是否开启捏合流畅模式。该属性没有显式调用时，默认不开启捏合流畅模式。
   *
   * @param { boolean } isEnabled - 网页是否开启捏合流畅模式。
   *     <br>true表示设置网页开启捏合流畅模式，false表示设置网页不开启捏合流畅模式。
   *     <br>传入undefined或null时为false。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  pinchSmooth(isEnabled: boolean): WebAttribute;

  /**
   * 设置网页是否可以通过JavaScript自动打开新窗口。
   * 
   * > **说明：**
   * >
   * > - 该属性仅在[javaScriptAccess]{@link WebAttribute#javaScriptAccess}开启时生效。
   * >
   * > - 该属性在[multiWindowAccess]{@link WebAttribute#multiWindowAccess}开启时打开新窗口，关闭时打开本地窗口。
   * >
   * > - 该属性的默认值与系统属性`persist.web.allowWindowOpenMethod.enabled`保持一致，如果未设置系统属性则默认值为false。
   * >
   * > - 通过`hdc shell param get persist.web.allowWindowOpenMethod.enabled` 检查是否开启系统属性
   * > `persist.web.allowWindowOpenMethod.enabled`。若属性值为1代表开启系统属性；若属性值为0或不存在，代表未开启系统属性，可通过命令
   * > `hdc shell param set persist.web.allowWindowOpenMethod.enabled 1` 开启系统属性。
   *
   * @param { boolean } flag -
   *     <br>true表示网页可以通过JavaScript自动打开新窗口，该属性为false时，用户行为仍可通过JavaScript自动打开新窗口，但非用户行为不能通过JavaScript自动打开新窗口。
   *     <br>此处的用户行为是指，在用户对Web组件进行点击等操作后，同时在5秒内请求打开新窗口（window.open）的行为。
   *     <br>默认值与系统属性关联，当系统属性`persist.web.allowWindowOpenMethod.enabled`为true时，默认值为true，如果未设置系统属性则默认值为false。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  allowWindowOpenMethod(flag : boolean): WebAttribute;

  /**
   * 设置网页上的音频播放状态发生改变时的回调函数。
   *
   * @param { Callback<OnAudioStateChangedEvent> } callback - 网页上的音频播放状态发生改变时触发。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onAudioStateChanged(callback: Callback<OnAudioStateChangedEvent>): WebAttribute;

  /**
   * 设置网页首次内容绘制时触发的回调函数。
   *
   * @param { function } callback - Callback invoked when the first content paint occurs on the web page. [since 10 - 11]
   * @param { Callback<OnFirstContentfulPaintEvent> } callback - 回调函数，返回导航开始时间戳、首次内容绘制耗时等性能指标。 [since 12]
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
   * 当Web组件加载url之前触发该回调，用于判断是否阻止此次访问。
   * 
   * > **说明：**
   * >
   * > - onLoadIntercept无法获取到完整的headers，如需获取完整headers建议在[onInterceptRequest]{@link WebAttribute#onInterceptRequest}或者通过
   * > WebSchemeHandler的
   * > [onRequestStart]{@link @ohos.web.webview:webview.WebSchemeHandler#onRequestStart( callback: (request: WebSchemeHandlerRequest, handler: WebResourceHandler) => boolean)}
   * > 中获取。
   *
   * @param { function } callback - Callback triggered when a navigation (including iframe navigation) occurs, allowing
   *     the application to approve or cancel it.
   *     <br>The return value is of the Boolean type. The value **true** means to cancel the navigation, and **false**
   *     means the opposite.
   *     <br>If **undefined** or **null** is returned, the value is **false**. [since 10 - 11]
   * @param { Callback<OnLoadInterceptEvent, boolean> } callback - 导航触发时的回调包括iframe导航，在回调中可以选择允许或者取消此次导航。
   *     <br>返回值为boolean类型。返回true表示取消此次导航，false表示允许此次导航。
   *     <br>返回undefined或null时为false。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onLoadIntercept(callback: Callback<OnLoadInterceptEvent, boolean>): WebAttribute;

  /**
   * 当Controller成功绑定到Web组件时触发该回调，并且该Controller必须为WebviewController，且禁止在该事件回调前调用Web组件相关的接口，否则会抛出js-error异常。
   * 
   * 因该回调调用时网页还未加载，无法在回调中使用有关操作网页的接口，例如[zoomIn]{@link @ohos.web.webview:webview.WebviewController#zoomIn}、
   * [zoomOut]{@link @ohos.web.webview:webview.WebviewController#zoomOut}等，可以使用
   * [loadUrl]{@link @ohos.web.webview:webview.WebviewController#loadUrl}、
   * [getWebId]{@link @ohos.web.webview:webview.WebviewController#getWebId}等操作网页不相关的接口。
   * 
   * 组件生命周期详情可参考[Web组件的生命周期](docroot://web/web-event-sequence.md)。
   *
   * @param { function } callback - 当ArkWeb控制器初始化成功时触发的回调。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onControllerAttached(callback: () => void): WebAttribute;

  /**
   * 该接口在网页过度滚动时触发，用于通知网页过度滚动的偏移量。
   *
   * @param { function } callback - Callback invoked when the web page is overscrolled. [since 10 - 11]
   * @param { Callback<OnOverScrollEvent> } callback - 网页过度滚动时触发。 [since 12]
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onOverScroll(callback: Callback<OnOverScrollEvent>): WebAttribute;

  /**
   * 通知用户PDF页面已滚动到底。
   *
   * @param { Callback<OnPdfScrollEvent> } callback - 当PDF滚动到垂直方向底部时，会触发回调，通知用户PDF页面已滚动到底。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  onPdfScrollAtBottom(callback: Callback<OnPdfScrollEvent>): WebAttribute;

  /**
   * 通知用户PDF页面加载状态，包括成功或失败。
   *
   * @param { Callback<OnPdfLoadEvent> } callback - 当PDF加载成功或失败时，会触发回调，通知用户PDF页面加载状态。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  onPdfLoadEvent(callback: Callback<OnPdfLoadEvent>): WebAttribute;

  /**
   * 收到网站安全风险检查结果时触发的回调。
   * 
   * > **说明：**
   * >
   * > - 需要使用release包，debug包不生效。
   * >
   * > - 开启未成年模式，设置网页内容拦截，触发回调。
   *
   * @param { OnSafeBrowsingCheckResultCallback } callback - 收到网站安全风险检查结果时触发的回调。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  onSafeBrowsingCheckResult(callback: OnSafeBrowsingCheckResultCallback): WebAttribute;

  /**
   * 网站安全风险检查结束时触发的回调。
   * 
   * > **说明：**
   * >
   * > - 需要使用release包，debug包不生效。
   * >
   * > - 开启未成年模式，设置网页内容拦截，触发回调。
   *
   * @param { OnSafeBrowsingCheckResultCallback } callback - 收到网站安全风险检查结果时触发的回调。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  onSafeBrowsingCheckFinish(callback: OnSafeBrowsingCheckResultCallback): WebAttribute;

  /**
   * 当网页跳转提交时触发该回调。
   *
   * @param { OnNavigationEntryCommittedCallback } callback - 网页跳转提交时触发的回调。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  onNavigationEntryCommitted(callback: OnNavigationEntryCommittedCallback): WebAttribute;

  /**
   * 智能防跟踪功能使能时，当追踪者cookie被拦截时触发该回调。
   * 
   * > **说明：**
   * >
   * > - 需要使用release包，debug包不生效。
   *
   * @param { OnIntelligentTrackingPreventionCallback } callback - 智能防跟踪功能使能时，当追踪者cookie被拦截时触发的回调。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onIntelligentTrackingPreventionResult(callback: OnIntelligentTrackingPreventionCallback): WebAttribute;

  /**
   * 将JavaScript脚本注入到Web组件中，当指定页面或者文档开始加载时，该脚本将在其来源与scriptRules匹配的任何页面中执行。当属性没有显式调用时，默认不将JavaScript脚本注入到Web组件中。
   * 
   * > **说明：**
   * >
   * > - 网页文档根元素（HTML Element）创建后、但尚未加载任何其他内容之前注入脚本。
   * >
   * > - 该脚本按照字典序执行，非数组本身顺序，若需数组本身顺序，建议使用[runJavaScriptOnDocumentStart]{@link WebAttribute#runJavaScriptOnDocumentStart}
   * > 接口。
   * >
   * > - 内容相同的脚本多次注入时将被静默去重，不展示，不提醒，使用首次注入时的scriptRules。
   * >
   * > - 本接口不支持[UrlRegexRule]{@link UrlRegexRule}。
   * >
   * > - 建议使用[runJavaScriptOnDocumentStart]{@link WebAttribute#runJavaScriptOnDocumentStart}代替。
   *
   * @param { Array<ScriptItem> } scripts - 需要注入的ScriptItem数组。
   *     <br>传入undefined或null时不将JavaScript脚本注入到Web组件中。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  javaScriptOnDocumentStart(scripts: Array<ScriptItem>): WebAttribute;

  /**
   * 将JavaScript脚本注入到Web组件中，当指定页面或者文档加载完成时，该脚本将在其来源与scriptRules匹配的任何页面中执行。当属性没有显式调用时，默认不将JavaScript脚本注入到Web组件中。
   * 
   * > **说明：**
   * >
   * > - 该脚本将在页面的任何JavaScript代码之后运行，并且DOM树此时已经加载、渲染完毕。
   * >
   * > - 该脚本按照字典序执行，非数组本身顺序。
   * >
   * > - 内容相同的脚本多次注入时将被静默去重，不展示，不提醒，使用首次注入时的scriptRules。
   * >
   * > - 本接口不支持[UrlRegexRule]{@link UrlRegexRule}。
   * >
   * > - 建议使用[runJavaScriptOnDocumentEnd]{@link WebAttribute#runJavaScriptOnDocumentEnd}代替。
   *
   * @param { Array<ScriptItem> } scripts - 需要注入的ScriptItem数组。
   *     <br>传入undefined或null时不将JavaScript脚本注入到Web组件中。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  javaScriptOnDocumentEnd(scripts: Array<ScriptItem>): WebAttribute;

  /**
   * 设置Web布局模式。当属性没有显式调用时，默认Web布局跟随系统模式（WebLayoutMode.NONE）。常见问题请参考[Web组件大小自适应页面内容布局](docroot://web/web-fit-content.md)。
   * 
   * > **说明：**
   * >
   * > 目前只支持两种Web布局模式，分别为
   * >
   * > - Web布局跟随系统（`WebLayoutMode.NONE`）。
   * >
   * > - Web组件高度基于前端页面高度的自适应网页布局（`WebLayoutMode.FIT_CONTENT`）。
   * >
   * > Web组件高度基于前端页面自适应布局有如下限制：
   * >
   * > - 当layoutMode设置为WebLayoutMode.FIT_CONTENT
   * >
   * > - [forceDisplayScrollBar]{@link WebAttribute#forceDisplayScrollBar}不支持常驻
   * >
   * > - [blankScreenDetectionConfig]{@link WebAttribute#blankScreenDetectionConfig}不生效
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
   * @param { WebLayoutMode } mode - 设置Web布局模式，跟随系统或自适应布局。
   *     <br>传入null或undefined时为`WebLayoutMode.NONE`
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @atomicservice
   * @since 11 dynamic
   */
  layoutMode(mode: WebLayoutMode): WebAttribute;

  /**
   * 调用以设置嵌套滚动选项。
   * 
   * > **说明：**
   * >
   * > - 可以设置上下左右四个方向，或者设置向前、向后两个方向的嵌套滚动模式，实现与父组件的滚动联动。
   * >
   * > - 支持嵌套滚动的容器：[Grid]{@link ./grid}、[List]{@link ./list}、[Scroll]{@link ./scroll}、[Swiper]{@link ./swiper}、
   * > [Tabs]{@link ./tabs}、[WaterFlow]{@link ./water_flow}、[Refresh]{@link ./refresh}、
   * > [bindSheet]{@link CommonMethod#bindSheet}。
   * >
   * > - 支持嵌套滚动的输入事件：使用手势、鼠标、触控板。
   * >
   * > - 嵌套滚动场景下，由于Web滚动到边缘时会优先触发过滚动的过界回弹效果，建议设置[overScrollMode]{@link WebAttribute#overScrollMode}为
   * > `OverScrollMode.NEVER`，避免影响此场景的用户体验。
   *
   * @param { NestedScrollOptions } value - 可滚动组件滚动时的嵌套滚动选项。
   *     <br> value为NestedScrollOptions（向前、向后两个方向）类型时，scrollForward、scrollBackward默认滚动选项为
   *     [NestedScrollMode.SELF_FIRST]{@link NestedScrollMode}。 
   *     <br> value为NestedScrollOptionsExt（上下左右四个方向）类型时，scrollUp、scrollDown、scrollLeft、scrollRight默认滚动选项为
   *     NestedScrollMode.SELF_FIRST。 [since 11 - 13]
   * @param { NestedScrollOptions | NestedScrollOptionsExt } value - 可滚动组件滚动时的嵌套滚动选项。
   *     <br> value为NestedScrollOptions（向前、向后两个方向）类型时，scrollForward、scrollBackward默认滚动选项为
   *     [NestedScrollMode.SELF_FIRST]{@link NestedScrollMode}。 
   *     <br> value为NestedScrollOptionsExt（上下左右四个方向）类型时，scrollUp、scrollDown、scrollLeft、scrollRight默认滚动选项为
   *     NestedScrollMode.SELF_FIRST。 [since 14]
   * @returns { WebAttribute } 滚动属性。
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 11 dynamic
   */
  nestedScroll(value: NestedScrollOptions | NestedScrollOptionsExt): WebAttribute;

  /**
   * 设置是否开启同层渲染功能。当该方法没有显式调用时，默认不开启同层渲染功能。
   * 
   * > **说明：**
   * >
   * > [registerNativeEmbedRule]{@link WebAttribute#registerNativeEmbedRule}和
   * > [nativeEmbedOptions]{@link WebAttribute#nativeEmbedOptions}等接口依赖此属性开启时才生效。
   *
   * @param { boolean } enabled - 是否开启同层渲染功能。
   *     <br>true表示开启同层渲染功能，false表示不开启同层渲染功能。
   *     <br>传入undefined或null时为false。
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
   * > **说明：**
   * >
   * > - 本接口与onNativeEmbedVisibilityChange都监控同层标签状态，但监控维度不同。
   * 
   * onNativeEmbedLifecycleChange监控生命周期状态（如CREATE/UPDATE/DESTROY/ENTER_BFCACHE/LEAVE_BFCACHE），适用于处理标签的创建、销毁、缓存等生命周期事件。
   * 
   * onNativeEmbedVisibilityChange监控视口内的可见性变化（Visible/Hidden），适用于处理标签滚动进出视口的场景。两者可根据实际需求配合使用或单独使用。
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
   * 全部可见则视为可见。获取因同层标签CSS属性（包括visibility、display以及尺寸变化）导致的可见状态变化，需配置
   * [nativeEmbedOptions]{@link WebAttribute#nativeEmbedOptions}，并将[EmbedOptions]{@link EmbedOptions}中的
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
   * 设置剪贴板复制范围选项。该属性没有显式调用时，默认支持复制后在当前设备所有应用内粘贴。
   * 
   * > **说明：**
   * >
   * > 当设置为CopyOptions.None时，[dataDetectorConfig]{@link WebAttribute#dataDetectorConfig}中的enablePreviewMenu配置项无效。当
   * > [enableDataDetector]{@link WebAttribute#enableDataDetector}设置为true且此属性设置为CopyOptions.LocalDevice时，AI菜单功能将被激活。
   *
   * @param { CopyOptions } value - 要设置的剪贴板复制范围选项。
   *     <br>传入undefined或null时为CopyOptions.None。
   * @returns { WebAttribute } 滚动属性。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  copyOptions(value: CopyOptions): WebAttribute;

  /**
   * 当URL将要加载到当前Web中时触发该回调，让宿主应用程序有机会获得控制权，判断是否阻止Web加载URL。
   * 
   * > **说明：**
   * >
   * > - POST请求不会触发该回调。
   * >
   * > - iframe加载HTTP(s)协议或about:blank时不会触发该回调，而加载非HTTP(s)协议的跳转会触发；调用loadUrl(url: string)主动触发的跳转不会触发该回调。
   * >
   * > - 不要在回调中使用相同的URL调用loadUrl(url: string)方法，然后返回true。 这样会不必要地中止当前加载，并用相同的URL发起一次新的加载。 要继续加载当前请求URL的正确做法是直接返回false，而不
   * > 是调用loadUrl(url: string)。
   *
   * @param { OnOverrideUrlLoadingCallback } callback - onOverrideUrlLoading的回调。
   *     <br>返回值boolean。返回true表示中止加载URL，返回false表示继续在Web中加载URL。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  onOverrideUrlLoading(callback: OnOverrideUrlLoadingCallback): WebAttribute;

  /**
   * 网页加载遇到错误时触发该回调，可用于设置自定义错误页替换ArkWeb提供的默认错误页。默认仅mainframe加载出错时触发；启用subframe错误页功能后，subframe加载出错时也会触发。
   * 
   * > **说明：**
   * >
   * > - 该功能需通过调用
   * > [setErrorPageEnabled]{@link @ohos.web.webview:webview.WebviewController#setErrorPageEnabled(enable: boolean)}<sup
   * > >20+</sup>启用mainframe错误页功能后才会生效。如需同时启用subframe错误页功能，请调用
   * > [setErrorPageEnabled]{@link @ohos.web.webview:webview.WebviewController#setErrorPageEnabled(enable: boolean, includeSubframe: boolean)}
   * > 接口并将includeSubframe设置为true。
   * >
   * > - 通过[errorPageEvent.request.isMainFrame()]{@link WebResourceRequest#isMainFrame}判断请求来源是mainframe还是subframe，以便在回调中
   * > 分别设置对应的自定义错误页。
   * >
   * > - 通过[errorPageEvent.error.getErrorCode()]{@link WebResourceError#getErrorCode}获取的错误码大于0代表http协议错误，小于0代表网络错误。
   *
   * @param { OnOverrideErrorPageCallback } callback - 网页加载遇到错误时触发。
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
   * >
   * > - 设备形态为：Phone、Tablet、Wearable、TV。
   * >
   * > - Web组件视口宽度 < 980px。
   * >
   * > - 页面文本量大，页面文本的字号*字符数 ≥ 3920。
   * >
   * > - 前端无metaViewport设置，或metaViewport设置中无"width"和"initial-scale"属性。
   *
   * @param { boolean } textAutosizing - 文本自动调整大小。
   *     <br>true表示文本自动调整大小，false表示文本不自动调整大小。
   *     <br>传入undefined或null时为true。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  textAutosizing(textAutosizing: boolean): WebAttribute;

  /**
   * 开启[应用接管网页媒体播放功能](docroot://web/app-takeovers-web-media.md)。当属性没有显式调用时，默认不开启接管网页媒体播放功能。
   *
   * @param { NativeMediaPlayerConfig } config - 应用接管网页媒体播放功能的配置对象。包含以下属性：enable（boolean 类型，是否开启该功能，默认为 false），
   *     shouldOverlay（boolean 类型，当功能开启后，应用接管网页视频的播放器画面是否覆盖网页内容，默认为 false）。
   *     <br>传入 undefined 或 null 时为`{enable: false, shouldOverlay: false}`。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enableNativeMediaPlayer(config: NativeMediaPlayerConfig): WebAttribute;

  /**
   * 渲染进程无响应时触发该回调函数。如果Web组件无法处理输入事件，或者无法在合理的时间范围内导航到新的URL，则认为网页进程无响应，并将触发该回调。
   * 
   * 只要网页进程一直无响应，此回调仍可能会持续触发，直到网页进程再次响应，此时[onRenderProcessResponding]{@link WebAttribute#onRenderProcessResponding}将会触发。
   * 
   * 应用可以通过WebviewController接口
   * [terminateRenderProcess]{@link @ohos.web.webview:webview.WebviewController#terminateRenderProcess}来终止关联的渲染进程，这可能会影响
   * 同一渲染进程的其他Web组件。
   *
   * @param { OnRenderProcessNotRespondingCallback } callback - 渲染进程无响应时触发的回调。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  onRenderProcessNotResponding(callback: OnRenderProcessNotRespondingCallback): WebAttribute;

  /**
   * 渲染进程由无响应状态变回正常运行状态时触发该回调函数，该回调表明该网页并非真正卡死。
   *
   * @param { OnRenderProcessRespondingCallback } callback - 渲染进程由无响应状态变回正常运行状态时触发的回调。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  onRenderProcessResponding(callback: OnRenderProcessRespondingCallback): WebAttribute;

  /**
   * Web组件自定义菜单扩展项接口，允许用户设置扩展项的文本内容、图标、回调方法。
   * 
   * 该接口只支持选中纯文本，当选中内容包含图片及其他非文本内容时，action信息中会显示乱码。
   * 
   * > **说明：**
   * >
   * > 本接口在与[editMenuOptions]{@link WebAttribute#editMenuOptions}同时使用时，本接口不生效。
   *
   * @param { Array<ExpandedMenuItemOptions> } expandedMenuOptions - 扩展菜单选项。<br/>菜单项数量，及菜单的content大小、startIcon图标尺寸，与
   *     ArkUI [Menu]{@link ./menu}组件保持一致。
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
   * 当网页中的可编辑元素（如input标签）需要弹出软键盘时触发此回调。应用可以在回调中拦截系统软键盘的弹出，配置应用定制的软键盘（应用根据该接口可以决定使用系统默认软键盘/定制enter键的系统软键盘/全部由应用自定义的软键盘）。
   *
   * @param { WebKeyboardCallback } callback - 拦截网页拉起软键盘回调。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onInterceptKeyboardAttach(callback: WebKeyboardCallback): WebAttribute;

  /**
   * 一个页面发生广告过滤后，通过此回调接口通知过滤的详细信息。由于页面可能随时发生变化并不断产生网络请求，为了减少通知频次、降低对页面加载过程的影响，仅在页面加载完成时进行首次通知，此后发生的过滤将间隔1秒钟上报，无广告过滤则无通知。
   *
   * @param { OnAdsBlockedCallback } callback - 广告过滤的回调。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onAdsBlocked(callback: OnAdsBlockedCallback): WebAttribute;

  /**
   * Web组件自定义软件键盘避让模式。
   * 
   * 当UIContext设置的键盘避让模式为[KeyboardAvoidMode.RESIZE]{@link @ohos.arkui.UIContext:KeyboardAvoidMode}模式时，该接口功能不生效。
   *
   * @param { WebKeyboardAvoidMode } mode - Web软键盘避让模式。
   *     <br>嵌套滚动场景下不推荐使用web软键盘避让，包括RESIZE_VISUAL与RESIZE_CONTENT。
   *     <br>默认值：`WebKeyboardAvoidMode.RESIZE_CONTENT`避让行为。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  keyboardAvoidMode(mode: WebKeyboardAvoidMode): WebAttribute;

  /**
   * 设置Web组件自定义文本选择菜单。
   * 
   * > **说明：**
   * >
   * > 本接口与bindSelectionMenu功能类似，差异如下：
   * >
   * > - editMenuOptions：在系统默认菜单风格基础上添加扩展项，触发条件不变。
   * >
   * > - [bindSelectionMenu]{@link WebAttribute#bindSelectionMenu}：完全自定义菜单风格和触发条件，由开发者定义。
   * >
   * > 两者不宜同时使用，建议根据自定义程度需求选择。
   * > 用户可以通过该属性设置自定义的文本菜单。
   * 
   * 在[onCreateMenu]{@link EditMenuOptions.onCreateMenu}中，可以修改、增加、删除菜单选项，如果希望不显示文本菜单，需要返回空数组。
   * 
   * 在[onMenuItemClick]{@link EditMenuOptions.onMenuItemClick}中，可以自定义菜单选项的回调函数。该函数在菜单选项被点击后触发，并根据返回值决定是否执行系统默认的回调。返回true
   * 不执行系统回调，返回false继续执行系统回调。
   * 
   * 在[onPrepareMenu<sup>20+</sup>](docroot://reference/apis-arkui/arkui-ts/ts-text-common.md#属性-1)中，当文本选择区域变化后显示菜单之前触发该
   * 回调，可在该回调中进行修改、增加、删除菜单选项，实现动态更新菜单。
   * 
   * 本接口在与[selectionMenuOptions<sup>(deprecated)</sup>]{@link WebAttribute#selectionMenuOptions}同时使用时，会使
   * selectionMenuOptions<sup>(deprecated)</sup>不生效。
   *
   * @param { EditMenuOptions } editMenu - Web自定义文本菜单选项。
   *     <br>菜单项数量，及菜单的content大小、icon图标尺寸，与ArkUI [Menu]{@link ./menu}组件保持一致。
   *     <br>菜单中系统自带的id枚举值（[TextMenuItemId]{@link TextMenuItemId}）在Web中仅支持CUT、COPY、PASTE、SELECT_ALL、TRANSLATE、SEARCH、
   *     AI_WRITER七项。
   *     <br>onMenuItemClick函数中textRange参数在Web中无意义，传入值为-1。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  editMenuOptions(editMenu: EditMenuOptions): WebAttribute;

  /**
   * 设置Web组件长按文本选择是否开启振动。需配置"ohos.permission.VIBRATE"。该属性没有显式调用时，默认开启振动。
   *
   * @param { boolean } enabled - 是否开启振动。
   *     <br>true表示开启振动，false表示不开启振动。
   *     <br>传入undefined或null时保持默认值，即开启振动。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.0.0]
   * @since 13 dynamic
   */
  enableHapticFeedback(enabled: boolean): WebAttribute;

  /**
   * 设置自定义选择菜单。
   *
   * @param { WebElementType } elementType - 菜单的类型。
   * @param { CustomBuilder } content - 菜单的内容。
   * @param { WebResponseType } responseType - 菜单的响应类型。
   * @param { SelectionMenuOptionsExt } [options] - 菜单的选项。传入undefined或null时使用默认配置。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 13 dynamic
   */
  bindSelectionMenu(elementType: WebElementType, content: CustomBuilder, responseType: WebResponseType,
      options?: SelectionMenuOptionsExt): WebAttribute;

  /**
   * 设置Web组件是否开启字重跟随系统设置变化。当属性没有显式调用时，Web组件默认字重不跟随系统设置变化。
   * 
   * > **说明：**
   * >
   * > 目前该能力只支持前端文本元素跟随变化，暂不支持canvas元素、内嵌docx和pdf格式中的文本跟随变化。
   *
   * @param { boolean } follow - 设置Web组件是否开启字重跟随系统设置变化。
   *     <br>true表示字重跟随系统设置中的字体粗细变化，系统设置改变时字重跟随变化。false表示字重不再跟随系统设置中的字体粗细变化，系统设置改变时维持当前字重不变。
   *     <br>传入undefined或null时为false。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 18 dynamic
   */
  enableFollowSystemFontWeight(follow: boolean): WebAttribute;

  /**
   * 设置是否支持应用对接到播控中心。当属性没有显式设置时，默认支持应用对接到播控中心。
   *
   * @param { boolean } enabled - 设置是否支持应用对接到播控中心。
   *     <br>true表示支持应用对接到播控中心，false表示不支持应用对接到播控中心。
   *     <br>传入undefined或null时为true。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 18 dynamic
   */
  enableWebAVSession(enabled: boolean): WebAttribute;

  /**
   * 设置是否开启分段解析HTML优化。当属性没有显式调用时，默认使用解析时间作为HTML分段解析的分段点。
   * 
   * ArkWeb内核在解析HTML文档结构时采取分段解析策略，旨在避免过多占用主线程资源，并使网页具有渐进式加载能力。ArkWeb内核默认使用解析时间作为分段点，当单次解析时间超过阈值时，会中断解析，随后进行布局和渲染操作。
   * 
   * 开启优化后，ArkWeb内核将不仅检查解析时间是否超出限制，还会额外判断解析的Token（HTML文档的最小解析单位，例如`<div>`、`attr="xxx"`等）数量是否超过内核规定的阈值，并下调此阈值。当页面的FCP（
   * First Contentful Paint 首次内容绘制）触发时会恢复成默认的中断判断逻辑。这将使得网页在FCP到来之前的解析操作更频繁，从而提高首帧内容被提前解析完成并进入渲染阶段的可能性，同时有效缩减首帧渲染的工作量，最终实
   * 现FCP时间提前。
   * 
   * 由于页面的FCP触发时会恢复成默认分段解析逻辑，因此分段解析HTML优化仅对每个Web组件加载的首个页面生效。
   *
   * @param { boolean} optimizeParserBudget - 设置开启分段解析HTML优化。
   *     <br>true表示使用解析个数代替解析时间作为HTML分段解析的分段点，并减少每段解析的个数上限。false表示使用解析时间作为HTML分段解析的分段点。
   *     <br>传入undefined或null时为false。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 15 dynamic
   */
  optimizeParserBudget(optimizeParserBudget: boolean): WebAttribute;

  /**
   * 将JavaScript脚本注入到Web组件中，当指定页面或者文档开始加载时，该脚本将在其来源与scriptRules匹配的任何页面中执行。当属性没有显式调用时，默认不将JavaScript脚本注入到Web组件中。
   * 
   * > **说明：**
   * >
   * > - 网页文档根元素（HTML Element）创建后、但尚未加载任何其他内容之前注入脚本。
   * >
   * > - 该脚本按照数组本身顺序执行。
   * >
   * > - 内容相同的脚本多次注入时将被静默去重，不展示，不提醒，使用首次注入时的scriptRules。
   *
   * @param { Array<ScriptItem> } scripts - 需要注入的ScriptItem数组。
   *     <br>传入undefined或null时不将JavaScript脚本注入到Web组件中。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @since 15 dynamic
   */
  runJavaScriptOnDocumentStart(scripts: Array<ScriptItem>): WebAttribute;

  /**
   * 将JavaScript脚本注入到Web组件中，当指定页面或者文档加载完成时，该脚本将在其来源与scriptRules匹配的任何页面中执行。当属性没有显式调用时，默认不将JavaScript脚本注入到Web组件中。
   * 
   * > **说明：**
   * >
   * > - 该脚本将在页面的任何JavaScript代码之后运行，并且DOM树此时已经加载、渲染完毕。
   * >
   * > - 该脚本按照数组本身顺序执行。
   * >
   * > - 内容相同的脚本多次注入时将被静默去重，不展示，不提醒，使用首次注入时的scriptRules。
   *
   * @param { Array<ScriptItem> } scripts - 需要注入的ScriptItem数组。
   *     <br>传入undefined或null时不将JavaScript脚本注入到Web组件中。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 26.1.0]
   * @since 15 dynamic
   */
  runJavaScriptOnDocumentEnd(scripts: Array<ScriptItem>): WebAttribute;

  /**
   * 将JavaScript脚本注入到Web组件中，当页面DOM树head标签解析完成时，该脚本将在其来源与scriptRules匹配的任何页面中执行。当属性没有显式调用时，默认不将JavaScript脚本注入到Web组件中。
   * 
   * > **说明：**
   * >
   * > - 该脚本按照数组本身顺序执行。
   * >
   * > - 内容相同的脚本多次注入时将被静默去重，不展示，不提醒，使用首次注入时的scriptRules。
   *
   * @param { Array<ScriptItem> } scripts - 需要注入的ScriptItem数组。
   *     <br>传入undefined或null时不将JavaScript脚本注入到Web组件中。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 15 dynamic
   */
  runJavaScriptOnHeadEnd(scripts: Array<ScriptItem>): WebAttribute;

  /**
   * 设置同层渲染相关配置，该属性仅在[enableNativeEmbedMode]{@link WebAttribute#enableNativeEmbedMode}开启时生效，不支持动态修改。当属性没有显式调用时，默认为
   * `{supportDefaultIntrinsicSize: false}`。
   *
   * @param { EmbedOptions } options - 同层渲染相关配置。
   *     <br>传入undefined或null时为`{supportDefaultIntrinsicSize: false}`。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 16 dynamic
   */
  nativeEmbedOptions(options?: EmbedOptions): WebAttribute;

  /**
   * 设置是否识别网页文本特殊实体，如邮件、电话、网址等。该接口依赖设备底层具备文本识别能力，否则设置无效。该属性没有显式调用时，默认不启用。
   * 
   * > **说明：**
   * >
   * > [dataDetectorConfig]{@link WebAttribute#dataDetectorConfig}和
   * > [enableSelectedDataDetector]{@link WebAttribute#enableSelectedDataDetector}等属性依赖此属性开启时才能正常生效。
   * > 当enableDataDetector设置为true，同时不设置[dataDetectorConfig]{@link WebAttribute#dataDetectorConfig}属性时，默认识别所有类型的实体，所识别实体的
   * > color和decoration会被更改为如下样式：
   * 
   * <!--code_no_check-->
   * 
   * 当enableDataDetector设置为true且[copyOptions]{@link WebAttribute#copyOptions}设置为CopyOptions.LocalDevice时，AI菜单功能将被激活。此时，在
   * 网页中选中文本后，文本选择菜单能够展示对应的AI菜单项，包括[TextMenuItemId]{@link TextMenuItemId}中的url（打开链接）、email（新建邮件）、phoneNumber（呼叫）、address
   * （导航至该位置）、dateTime（新建日程提醒）。
   * 
   * AI菜单生效时，需在选中范围内，包括一个完整的AI实体，才能展示对应的选项。该菜单项与[TextMenuItemId]{@link TextMenuItemId}中的askAI菜单项不同时出现。
   * 
   * 示例使用场景详见[使用Web组件的智能分词能力](docroot://web/web-data-detector.md)。
   *
   * @param { boolean } enable - 是否启用Web文本识别，true表示启用，false表示不启用。
   *     <br>传入undefined或null时属性设置不生效。
   * @returns { WebAttribute } The attribute of the web.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  enableDataDetector(enable: boolean): WebAttribute;

  /**
   * 设置文本识别配置。
   * 
   * 需配合[enableDataDetector]{@link WebAttribute#enableDataDetector}一起使用，设置enableDataDetector为true时，dataDetectorConfig的配置
   * 才能生效。
   * 
   * 当两个实体A、B重叠时，按以下规则保留实体：
   * 
   * 1. 若A&nbsp;⊂&nbsp;B，则保留B，反之则保留A。
   * 2. 当A&nbsp;⊄&nbsp;B且B&nbsp;⊄&nbsp;A时，若A.start&nbsp;<&nbsp;B.start，则保留A，反之则保留B。
   *
   * @param { TextDataDetectorConfig } config - 文本识别配置。
   * @returns { WebAttribute } The attribute of the web.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  dataDetectorConfig(config: TextDataDetectorConfig): WebAttribute;

  /**
   * Web页面触发window.open(url, name)时，会根据name查找是否存在已绑定的Web实例。若存在，该实例将收到此回调以通知应用需将其展示至前端；若不存在，则通过
   * [onWindowNew]{@link WebAttribute#onWindowNew}通知应用创建新Web实例。
   * 
   * > **说明：**
   * >
   * > - 通过name绑定Web实例‌：需在[onWindowNew]{@link WebAttribute#onWindowNew}回调中调用event.handler.setWebController方法，并传入新Web实例的
   * > controller，以完成绑定。
   * >
   * > - name‌命名需符合正则表达式[a-zA-Z0-9_]+。当该name被用作\<a>或\<form>标签的target属性值时，已绑定的Web实例同样会触发此回调。
   *
   * @param { Callback<void> } callback - 再次在原页面触发window.open后，在已打开的新页面触发该回调。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  onActivateContent(callback: Callback<void>): WebAttribute;

  /**
   * 当开发者调用scrollBy接口进行页面滚动时，可以通过bypassVsyncCondition接口设置渲染流程跳过vsync（垂直同步）调度，直接触发绘制。该属性没有显式调用时，默认不跳过vsync调度。
   *
   * @param { WebBypassVsyncCondition } condition - 触发渲染流程跳过vsync调度的条件。 
   *     <br> 传入undefined或null时为NONE。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  bypassVsyncCondition(condition: WebBypassVsyncCondition): WebAttribute;

  /**
   * 设置Web组件手势获焦模式，用于控制Web组件的焦点响应行为。该属性没有显式调用时，默认表示手势按下时，任何手势均会使Web组件获焦。
   *
   * @param { GestureFocusMode } mode - 设置Web组件手势获焦模式。传入undefined或null时为GestureFocusMode.DEFAULT。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  gestureFocusMode(mode: GestureFocusMode): WebAttribute;

  /**
   * 设置Web组件是否启用强制缩放功能。
   *
   * @param { boolean } enable - 设置是否遵从网页中`<meta name="viewport">`标签设置的缩放限制。
   *     <br>设置为`true`时，不遵从网页缩放限制；设置为`false`时，遵从网页缩放限制。
   *     <br>传入`undefined`与`null`时属性设置不生效。
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
   * 设置Web组件旋转时，宽高动画过程中组件内容的填充方式。若未显式调用属性，默认保持动画终态的内容大小，内容始终与组件左上角对齐。
   *
   * @param { WebRotateEffect } effect - 设置Web组件旋转时，宽高动画过程中组件内容的填充方式。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  rotateRenderEffect(effect: WebRotateEffect): WebAttribute;

  /**
   * 设置是否允许通过组合按键（Ctrl+'-/+'或Ctrl+鼠标滚轮/触摸板）进行缩放。
   * 
   * 当属性没有显式调用时，默认允许通过组合按键进行缩放。
   *
   * @param { boolean } zoomControlAccess - 设置是否允许通过组合按键进行缩放。true表示支持，false表示不支持。传入null或undefined时为false。
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
   * > - 需配合[blankScreenDetectionConfig]{@link WebAttribute#blankScreenDetectionConfig}使用。否则，默认关闭白屏检测功能，不会返回检测到白屏时的回调函数。
   *
   * @param { OnDetectBlankScreenCallback } callback - 检测到白屏时触发。事件对象包含页面URL、白屏原因、检测到的内容节点数等诊断信息。
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
   * > - 根据detectConfig的配置，在网页加载后检测到白屏或者近似白屏现象，可触发回调[onDetectedBlankScreen]{@link WebAttribute#onDetectedBlankScreen}。
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
   * 设置Web组件是否启用点击状态栏网页回到顶部功能。当属性没有显式调用时，默认开启状态栏网页回到顶部功能。
   *
   * @param { boolean } backToTop - 是否启用Web点击状态栏回顶，true表示启用，false表示不启用。
   *     <br>传入undefined或null时为true。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  backToTop(backToTop: boolean): WebAttribute;

  /**
   * 设置是否启用文本选择的AI菜单功能，启用后可识别选区中的邮件、电话、网址、日期、地址等，并在文本选择菜单中展示对应的AI菜单项。默认启用AI菜单功能。
   * 
   * AI菜单功能启用时，在网页中选中文本后，文本选择菜单能够展示对应的AI菜单项，包括[TextMenuItemId]{@link TextMenuItemId}中的url（打开链接）、email（新建邮件）、phoneNumber（
   * 呼叫）、address（导航前往）、dateTime（新建日程）。
   * 
   * AI菜单生效时，需在选中范围内，包括一个完整的AI实体，才能展示对应的选项。该菜单项与[TextMenuItemId]{@link TextMenuItemId}中的askAI菜单项不同时出现。
   * 
   * 示例使用场景详见[使用Web组件的智能分词能力](docroot://web/web-data-detector.md)。
   *
   * @param { boolean } enable - 是否启用Web文本识别，true表示启用，false表示不启用。
   *     <br>传入undefined或null时属性重置为默认值。
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
   * @param { OnFirstScreenPaintCallback } callback - 首屏渲染完成时触发。事件对象包含页面URL、导航开始时间、首屏渲染时间等性能指标。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  onFirstScreenPaint(callback: OnFirstScreenPaintCallback): WebAttribute;

  /**
   * 设置是否启用网页自动填充，默认开启。
   * 
   * <!--RP1-->
   * 
   * > **说明：**
   * >
   * > 本接口的自动填充功能，依赖“智能填充服务”和“密码填充服务”的支持。
   * 
   * <!--RP1End-->
   *
   * @param { boolean } value - 是否启用网页自动填充，true表示启用，false表示不启用。
   *     <br>传入undefined或null时为true。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  enableAutoFill(value: boolean): WebAttribute;

  /**
   * 设置Web组件选区文本改变时的回调函数。
   * 
   * > **说明：**
   * >
   * > - 支持手势选中、鼠标选中以及JS选中选区。
   * >
   * > - 使用上述方式选中内容结束后触发回调。
   * >
   * > - 使用同样方式选中和上一次相同内容时，不触发回调；使用不同方式选中和上一次相同内容时，依然触发。
   *
   * @param { TextSelectionChangeCallback } callback - 文本选区变化时触发。回调参数包含当前选中的文本内容。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  onTextSelectionChange(callback: TextSelectionChangeCallback): WebAttribute;

  /**
   * 设置是否启用网页图片AI分析，当前支持图片文字识别功能。属性未显式调用时，该功能默认开启。
   * 
   * > **说明：**
   * >
   * > 长按或鼠标悬停在图片文字上时，触发图片AI分析，可以选中图片中的文字。能够触发分析的图片规格如下。
   * >
   * > - 图片的原始长宽均不小于100px。
   * >
   * > - 在[设备类型](docroot://quick-start/module-configuration-file.md#devicetypes标签)不为2in1的设备上，需要图片渲染宽度超过网页宽度的80%。
   *
   * @param { boolean } enable - 是否启用网页图片AI分析，true表示启用，false表示不启用。
   *     <br>传入undefined或null时重置为true。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  enableImageAnalyzer(enable: boolean): WebAttribute;

  /**
    * 通知应用当前网页的摄像头状态，摄像头有三个状态：无状态、捕获中、暂停中。使用callback异步回调。
    * 
    * 可以通过startCamera，stopCamera，closeCamera这三个接口来切换摄像头的状态。这三个接口分别对应开启，暂停，停止摄像头功能。示例使用场景详见
    * [startCamera]{@link @ohos.web.webview:webview.WebviewController#startCamera}。
    * 
    * > **说明：**
    * >
    * > 当前网页正在使用摄像头时，返回在捕获中状态。
    * >
    * > 当前网页暂停使用摄像头时，返回暂停中状态。
    * >
    * > 当前网页完全没有使用摄像头时，返回无状态。
    *
   * @param { OnCameraCaptureStateChangeCallback } callback - 回调函数。当摄像头捕获状态改变时触发该回调，返回原来的状态和改变后的状态。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  onCameraCaptureStateChange(callback: OnCameraCaptureStateChangeCallback): WebAttribute;

  /**
    * 通知应用当前网页中麦克风状态，麦克风有三个状态：未工作、捕获中、暂停中。使用callback异步回调。
    * 
    * 可以通过resumeMicrophone，pauseMicrophone，stopMicrophone这三个接口来切换麦克风的状态。这三个接口功能分别对应解除暂停，暂停，停止麦克风。示例使用场景详见
    * [resumeMicrophone<sup>23+</sup>]{@link @ohos.web.webview:webview.WebviewController#resumeMicrophone}。
    * 
    * > **说明：**
    * >
    * > 当前网页正在使用麦克风时，返回捕获中状态；当前网页暂停使用麦克风时，返回暂停中状态；当前网页完全没有使用麦克风时，返回未工作状态。
    * >
    * > 当前麦克风处于捕获中状态时，设置暂停使用，当前麦克风变为暂停中状态。可通过ArkWeb设置麦克风开始使用状态进行恢复捕捉。
    * >
    * > 当前麦克风处于捕获中状态时，设置停止使用，当前麦克风停止捕捉，麦克风变为未工作状态。除非重新前端开始捕捉，否则无法恢复。
    * >
    * > 当前麦克风处于暂停中状态时，设置开始使用，当前麦克风继续捕捉，变为捕获中状态。
    * >
    * > 当前麦克风处于暂停中状态时，设置停止使用，当前麦克风停止捕捉，变为未工作状态。除非重新前端开始捕捉，否则无法恢复。
    * >
    * > 当前麦克风处于未工作状态时，设置开始使用以及暂停使用，麦克风状态均不发生变化。
    *
   * @param { OnMicrophoneCaptureStateChangeCallback } callback - 回调函数。当麦克风捕获状态改变时触发，返回原来的状态和改变后的状态。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  onMicrophoneCaptureStateChange(callback: OnMicrophoneCaptureStateChangeCallback): WebAttribute;

  /**
   * 设置是否启用默认右键上下文菜单。不调用该方法时，默认不启用。默认菜单仅支持CUT、COPY、PASTE、SELECT_ALL菜单项。
   * 
   * > **说明：**
   * >
   * > - 当设置了[onContextMenuShow]{@link WebAttribute#onContextMenuShow}回调并在回调中返回true时，本接口的设置不生效。
   * >
   * > - 默认菜单项会受[editMenuOptions]{@link WebAttribute#editMenuOptions}控制，通过该属性可以自定义菜单选项。
   *
   * @param { boolean } enable - 是否启用默认右键上下文菜单，true表示启用，false表示不启用。
   *     <br>传入undefined或null时为false。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 24 dynamic
   */
  enableDefaultContextMenu(enable: boolean): WebAttribute;

  /**
   * 设置是否启用拖拽功能。不调用该属性时，默认启用网页拖拽功能。
   *
   * @param { boolean } value - 是否启用网页拖拽功能，true表示启用，false表示不启用。传入undefined或null时为true。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enableDrag(value: boolean): WebAttribute;

  /**
   * 选择Web组件内垂直滚动条的布局方式，用于适配不同语言的书写方向。CONTENT模式适用于需要跟随网页CSS direction属性的场景，SYSTEM模式适用于多语言应用中需要跟随系统语言方向设置的场景，如阿拉伯语、希伯来语等从
   * 右到左书写的语言。
   *
   * @param { ScrollbarLayoutPolicy } policy - 设置Web组件内垂直滚动条布局模式。可选值：CONTENT（跟随网页css的direction属性设置），SYSTEM（根据系统语种的左右书写方向
   *     进行布局，对于从右向左书写的语言，滚动条将布局在左侧。对于网页内嵌套的多层滚动条均适用）。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  scrollbarLayoutPolicy(policy: ScrollbarLayoutPolicy): WebAttribute;

  /**
   * 设置Web组件滑动方向锁定，防止用户在斜向滑动时同时触发水平和垂直滚动，提升滚动体验。不调用该方法设置时，默认在嵌套滚动场景下支持滑动方向锁定。ALL模式适用于所有需要锁定滑动的场景，NESTED_SCROLL模式仅适用于嵌套滚动
   * 场景。
   *
   * @param { boolean } value - 是否支持滑动方向锁定。`true` 表示滑动方向锁定，滚动视图会根据用户初始滑动的方向来锁定滚动轴，`false` 表示不锁定。
   * @param { ScrollDirectionalLockType } type - 设置Web组件在哪些场景下希望滑动方向锁定。ALL表示所有场景都支持滑动锁定，NESTED_SCROLL表示在嵌套滚动场景下支持滑动锁定。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enableScrollDirectionalLock(value: boolean, type: ScrollDirectionalLockType): WebAttribute;

  /**
   * 自定义Web组件的前端AI会话配置，用于注册多个自定义AI会话。
   *
   * @param { Array<AISessionEvent> } aiSessions - 前端AI会话配置对象数组，每个对象包含AI会话类型及对应的生命周期回调方法。当前仅支持
   *     [AISessionType]{@link AISessionType}中包含的模型。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  aiSessionOptions(aiSessions: Array<AISessionEvent>): WebAttribute;

  /**
   * 设置键盘外观模式，用于控制Web组件内输入框弹出键盘的外观样式，包括沉浸式和非沉浸式模式。不调用该方法时，默认跟随系统的沉浸式模式。
   *
   * @param { WebKeyboardAppearanceMode } mode - 键盘外观。传入undefined或null时，跟随系统的沉浸式模式。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  keyboardAppearance(mode: WebKeyboardAppearanceMode): WebAttribute;

  /**
   * 网页绑定输入法成功时触发此回调，使用callback异步回调。
   *
   * @param { OnInputmethodAttachedCallback } callback - 设置Web组件检测到输入法绑定成功时的回调函数。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  onInputmethodAttached(callback: OnInputmethodAttachedCallback): WebAttribute;

  /**
   * 设置 Web 组件是否开启覆盖式全屏播放功能。当属性没有显式调用时，默认不开启该能力。
   * 
   * > **说明：**
   * >
   * > - 当前只支持H264、H265解码格式的视频。
   * >
   * > - 只有视频元素发出的全屏请求才会响应。
   * > 26.0.0
   *
   * @param { boolean } enabled - 设置 Web 组件是否开启覆盖式全屏播放功能。
   *     <br>true 表示开启该功能。
   *     <br>false 表示不开启。
   *     <br>传入 undefined 或 null 时为 false。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enableFullscreenVideoOverlay(enabled: boolean): WebAttribute;

  /**
   * 设置Web组件是否开启媒体资源网络请求代理功能。当属性没有显式调用时，默认不开启该能力。
   * 
   * > **说明：**
   * >
   * > - 当前只支持HLS流媒体视频。
   * > 26.0.0
   *
   * @param { boolean } enabled - 设置Web组件是否开启媒体资源网络请求代理功能。
   *     <br>true表示开启该功能。
   *     <br>false表示不开启。
   * @returns { WebAttribute }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enableMediaNetworkProxy(enabled: boolean): WebAttribute;
}

/**
 * 定义 Web 组件。
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
 * 定义 Web 组件的实例。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop [since 11]
 */
declare const WebInstance: WebAttribute;

/**
 * 用户加载资源时发生SSL错误时触发的回调详情，包括URL、错误类型和证书链。适用于需要详细分析SSL错误的场景，提升安全问题的诊断和排查效率。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 23]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface SslErrorEvent {
  /**
   * 通知Web组件用户操作行为。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  handler: SslErrorHandler;

  /**
   * 错误码。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  error: SslError;

  /**
   * url地址。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  url: string;

  /**
   * 请求的原始url地址。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  originalUrl: string;

  /**
   * referrer url地址。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  referrer: string;

  /**
   * 是否是致命错误。致命错误会导致页面无法正常加载和渲染（如证书验证失败、协议错误），非致命错误只影响部分资源的加载（如图片加载失败）。
   * 
   * true表示致命错误，false表示非致命错误。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  isFatalError: boolean;

  /**
   * 是否是主资源。
   * 
   * true表示主资源，false表示非主资源。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  isMainFrame: boolean;

  /**
   * 证书链数据。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @since 20 dynamic
   */
  certChainData?: Array<Uint8Array>;
}

/**
 * 自定义菜单扩展项。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12 dynamiconly
 * @deprecated since 20
 * @useinstead WebAttribute#editMenuOptions
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
   * 回调函数，用于接收用户选择菜单扩展项后的操作。回调参数selectedText包含plainText字段，表示用户选中的文本内容。
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
 * 用于设置Web组件嵌套滚动规则，支持上下左右四个方向的滚动选项。
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
 * Web同层渲染的配置。用于配置Web同层渲染选项，包括支持固定大小和CSS显示属性。适用于需要优化同层元素渲染效果的场景，提升渲染的兼容性和灵活性。
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
   * 单位：px
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
 * 提供文件选择器推荐的文件类型信息，包括MIME类型和类型数组。
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
 * WebView中新窗口的打开方式，支持弹窗、新窗口、前台和后台标签页等多种方式。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare enum NavigationPolicy {
  /**
   * 在新弹窗中打开。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  NEW_POPUP = 0,

  /**
   * 在新窗口中打开。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  NEW_WINDOW = 1,

  /**
   * 在新标签页中以后台方式打开。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  NEW_BACKGROUND_TAB = 2,

  /**
   * 在新标签页中以前台方式打开。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  NEW_FOREGROUND_TAB = 3
}

/**
 * 提供网页请求创建的新窗口特征信息，包括大小和位置。适用于需要精确控制新窗口属性的场景，提升窗口布局的准确性和用户体验。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 dynamic
 */
declare interface WindowFeatures {
  /**
   * 新窗口高度（单位：像素）。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  height: number;

  /**
   * 新窗口宽度（单位：像素）。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  width: number;

  /**
   * 新窗口左上角横坐标（单位：像素）。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  x: number;

  /**
   * 新窗口左上角纵坐标（单位：像素）。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  y: number;
}

/**
 * 定义网页请求创建窗口时触发的回调信息，包括窗口特征信息和窗口打开方式。适用于需要精细控制新窗口行为的场景，提升窗口管理的定制性和用户体验。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 23 dynamic
 */
declare interface OnWindowNewExtEvent {
  /**
   * true代表请求创建对话框，false代表请求创建新标签页。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 23 dynamic
   */
  isAlert: boolean;

  /**
   * true代表用户触发，false代表非用户触发。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 23 dynamic
   */
  isUserTrigger: boolean;

  /**
   * 请求的新窗口中需要打开的url。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 23 dynamic
   */
  targetUrl: string;

  /**
   * 用于设置新建窗口的WebviewController实例。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 23 dynamic
   */
  handler: ControllerHandler;

  /**
   * 网页请求创建的新窗口特征信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 23 dynamic
   */
  windowFeatures: WindowFeatures;

  /**
   * 网页请求用户创建新窗口时的窗口打开方式。
   *
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
 * @returns { boolean } `true`表示使用自定义逻辑，跳过系统默认行为；`false`表示继续执行系统默认逻辑。
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
type OnCreateAISession = (id: string, params: string, result: OnAISessionCallback) => boolean;

/**
 * AI会话执行操作回调函数类型。用于自定义实现AI模型执行。
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
 * AI会话销毁回调函数类型。用于清理与自定义AI模型关联的资源。
 *
 * @param { string } id - The session task ID.
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
type OnDestroyAISession = (id: string) => void;

/**
 * 自定义AI会话配置对象，用于定义AI会话的生命周期回调，包括创建、执行和销毁。
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