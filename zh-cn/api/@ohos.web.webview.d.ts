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

import { AsyncCallback, BusinessError } from './@ohos.base';

import { Callback } from './@ohos.base';

import type cert from './@ohos.security.cert';

import type image from './@ohos.multimedia.image';

import type print from './@ohos.print';

import { WebNetErrorList } from './@ohos.web.netErrorList';

/**
 * This module provides the capability to manage web modules.
 *
 * @namespace webview
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare namespace webview {
  /**
   * Web组件返回的请求/响应头对象。
   *
   * @interface WebHeader [since 9 - 11]
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  interface WebHeader {
    /**
     * 请求/响应头的key。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    headerKey: string;

    /**
     * 请求/响应头的value。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    headerValue: string;
  }

  /**
   * [getLastHitTest]{@link @ohos.web.webview:webview.WebviewController#getLastHitTest}接口用于指示光标节点。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  enum WebHitTestType {
    /**
     * 可编辑的区域。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    EditText = 0,

    /**
     * 电子邮件地址。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    Email = 1,

    /**
     * 超链接，其中src为http。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    HttpAnchor = 2,

    /**
     * 带有超链接的图片，其中src为http + HTML::img。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    HttpAnchorImg = 3,

    /**
     * HTML::img标签。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    Img = 4,

    /**
     * 地理地址。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    Map = 5,

    /**
     * 电话号码。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    Phone = 6,

    /**
     * 未知内容。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    Unknown = 7
  }

  /**
   * Web组件使用HTTPDNS的模式。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enum SecureDnsMode {
    /**
     * 不使用HTTPDNS， 可以用于撤销之前使用的HTTPDNS配置。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    OFF = 0,
    /**
     * 自动模式，HttpDns的用户设置用于DNS解析，若解析失败，则使用系统DNS进行解析。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    AUTO = 1,
    /**
     * 强制使用设定的HTTPDNS服务器进行域名解析。如果解析失败，将不会回退到系统 DNS，这将直接导致页面加载失败。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    SECURE_ONLY = 2
  }

  /**
   * 当前网页的安全级别。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  enum SecurityLevel {
    /**
     * 页面既不绝对安全，也不是不安全，即是中立。例如，部分scheme非http/https的URL。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    NONE = 0,

    /**
     * 页面安全，页面使用的是HTTPS协议，且使用了信任的证书。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SECURE = 1,

    /**
     * 页面不安全。例如，使用HTTP协议或使用HTTPS协议但使用旧版TLS版本。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    WARNING = 2,

    /**
     * 尝试进行HTTPS连接但失败，认证未通过。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    DANGEROUS = 3
  }

  /**
   * 当前网页的播控状态。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enum MediaPlaybackState {
    /**
     * 页面无音视频启播。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    NONE = 0,

    /**
     * 页面音视频播放中。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    PLAYING = 1,

    /**
     * 页面音视频暂停。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    PAUSED = 2,

    /**
     * 页面音视频停止。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    STOPPED = 3
  }

  /**
   * 内存压力等级。在应用主动清理Web组件占用的缓存时，Web内核会根据内存压力等级，进行缓存释放。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 14 dynamic
   */
  enum PressureLevel {
    /**
     * 中等内存压力等级。这个等级下，Web内核会尝试释放重新分配开销较小且不需要立即使用的缓存。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    MEMORY_PRESSURE_LEVEL_MODERATE = 1,

    /**
     * 严重内存压力等级。这个等级下，Web内核会尝试释放所有可能的内存缓存。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    MEMORY_PRESSURE_LEVEL_CRITICAL = 2
  }

  /**
   * 指示是否将 cookie 限制为仅创建它的同一站点的请求可以携带。指示是否将 cookie 限制为仅创建它的同一站点的请求可以携带。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  enum WebHttpCookieSameSitePolicy {
    /**
     * 允许在跨站请求中携带cookie，但必须同时设置secure属性。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    NONE = 0,

    /**
     * 允许特定的跨站请求携带cookie。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    LAX = 1,

    /**
     * 禁止在跨站请求中携带cookie。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    STRICT = 2
  }

  /**
   * The form factors for User-Agent metadata.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 24 dynamic
   */
  enum UserAgentFormFactor {
    /**
     * Form factor option: Automotive.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    AUTOMOTIVE = 'Automotive',
    /**
     * Form factor option: Desktop.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    DESKTOP = 'Desktop',
    /**
     * Form factor option: Mobile.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    MOBILE = 'Mobile',
    /**
     * Form factor option: EInk.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    EINK = 'EInk',
    /**
     * Form factor option: Tablet.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    TABLET = 'Tablet',
    /**
     * Form factor option: Watch.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    WATCH = 'Watch',
    /**
     * Form factor option: XR.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    XR = 'XR'
  }

  /**
   * Class that holds brand name, major version and full version. Brand name and major version used to generated
   * User-Agent client hints sec-cu-ua. Brand name and full version used to generated user-agent client hint
   * sec-ch-ua-full-version-list.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 24 dynamic
   */
  class UserAgentBrandVersion {
    /**
     * Sets the brand. Should not be blank.
     *
     * @param { string } brand - The brand.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setBrand(brand: string): void;

    /**
     * Get the brand info.
     *
     * @returns { string } - Returns brand info of UserAgentBrandVersion.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getBrand(): string;

    /**
     * Sets the major version. Should not be blank.
     *
     * @param { string } majorVersion - The major version.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setMajorVersion(majorVersion: string): void;

    /**
     * Get the major version.
     *
     * @returns { string } - Returns major version of UserAgentBrandVersion.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getMajorVersion(): string;

    /**
     * Sets the full version. Should not be blank.
     *
     * @param { string } fullVersion - The full version.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setFullVersion(fullVersion: string): void;

    /**
     * Get the full version.
     *
     * @returns { string } - Returns full version of UserAgentBrandVersion.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getFullVersion(): string;
  }

  /**
   * Holds User-Agent metadata information and uses to generate User-Agent client hints.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 24 dynamic
   */
  class UserAgentMetadata {
    /**
     * Sets User-Agent metadata brands and their versions.
     *
     * <p><strong>API Note</strong>:<br>
     * The default value is an empty list which means the system default User-Agent metadata brands and versions will be
     * used to generate the User-Agent client hints.
     * </p>
     *
     * @param { Array<UserAgentBrandVersion> } brandVersionList - The brandVersionList is used to generate User-Agent
     *     client hints sec-ch-ua-full-version-list.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setBrandVersionList(brandVersionList: Array<UserAgentBrandVersion>): void;

    /**
     * Returns the current list of UserAgentBrandVersion which are used to generate the User-Agent client hints
     * sec-ch-ua and sec-ch-ua-full-version-list.
     *
     * @returns { Array<UserAgentBrandVersion> } - Returns the current list of UserAgentBrandVersion.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getBrandVersionList(): Array<UserAgentBrandVersion>;

    /**
     * Sets User-Agent metadata architecture.
     *
     * <p><strong>API Note</strong>:<br>
     * The default value is empty string which means the system default value will be used.
     * </p>
     *
     * @param { string } arch - The arch is used to generate User-Agent client hints sec-ch-ua-architecture.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setArchitecture(arch: string): void;

    /**
     * Gets the value for sec-ch-ua-architecture.
     *
     * @returns { string } - Returns the value for sec-ch-ua-architecture.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getArchitecture(): string;

    /**
     * Sets User-Agent metadata bitness default is "".
     *
     * @param { string } bitness - The bitness is used to generate User-Agent client hints sec-ch-ua-bitness.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setBitness(bitness: string): void;

    /**
     * Gets the value for the sec-ch-ua-bitness.
     *
     * @returns { string } - Returns the value for the sec-ch-ua-bitness.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getBitness(): string;

    /**
     * Sets User-Agent metadata form factors.
     *
     * <p><strong>API Note</strong>:<br>
     * The default value is empty list which means the system default value will be used.
     * Form factor value should be one or more of DESKTOP, AUTOMOTIVE, MOBILE, TABLET, XR, EINK, WATCH.
     * </p>
     *
     * @param { Array<UserAgentFormFactor> } formFactors - The formFactors is used to generate User-Agent client hints
     *     sec-ch-ua-form-factors.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setFormFactors(formFactors: Array<UserAgentFormFactor>): void;

    /**
     * Gets the value for the sec-ch-ua-form-factors.
     *
     * @returns { Array<UserAgentFormFactor> } - Returns the form factors.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getFormFactors(): Array<UserAgentFormFactor>;

    /**
     * Sets User-Agent metadata full version.
     *
     * <p><strong>API Note</strong>:<br>
     * The default value is empty string which means the system default value will be used.
     * </p>
     *
     * @param { string } fullVersion - The fullVersion is used to generate User-Agent client hints
     *     sec-ch-ua-full-version.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setFullVersion(fullVersion: string): void;

    /**
     * Gets the value for the sec-ch-ua-full-version.
     *
     * @returns { string } - Returns the value for the sec-ch-ua-full-version.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getFullVersion(): string;

    /**
     * Sets User-Agent metadata mobile, default is true.
     *
     * @param { boolean } isMobile - The isMobile is used to generate User-Agent client hints sec-ch-ua-mobile.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setMobile(isMobile: boolean): void;

    /**
     * Gets the value for the sec-ch-ua-mobile.
     *
     * @returns { boolean } - Returns the value for the sec-ch-ua-mobile.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getMobile(): boolean;

    /**
     * Sets User-Agent metadata model.
     *
     * <p><strong>API Note</strong>:<br>
     * The default value is empty string which means the system default value will be used.
     * </p>
     *
     * @param { string } model - The model is used to generate User-Agent client hints sec-ch-ua-model.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setModel(model: string): void;

    /**
     * Gets the value for the sec-ch-ua-model.
     *
     * @returns { string } - Returns the value for the sec-ch-ua-model.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getModel(): string;

    /**
     * Sets User-Agent metadata platform.
     *
     * <p><strong>API Note</strong>:<br>
     * The default value is empty string which means the system default value will be used.
     * </p>
     *
     * @param { string } platform - The platform is used to generate User-Agent client hints sec-ch-ua-platform.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setPlatform(platform: string): void;

    /**
     * Gets the value for the sec-ch-ua-platform.
     *
     * @returns { string } - Returns the value for the sec-ch-ua-platform.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getPlatform(): string;

    /**
     * Sets User-Agent metadata platform version.
     *
     * <p><strong>API Note</strong>:<br>
     * The default value is empty string which means the system default value will be used.
     * </p>
     *
     * @param { string } platformVersion - The platformVersion is used to generate User-Agent client hints
     *     sec-ch-ua-platform-version.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setPlatformVersion(platformVersion: string): void;

    /**
     * Gets the value for the sec-ch-ua-platform-version.
     *
     * @returns { string } - Returns the value for the sec-ch-ua-platform-version.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getPlatformVersion(): string;

    /**
     * Sets User-Agent metadata wow64, default is false.
     *
     * @param { boolean } isWow64 - The wow64 is used to generate User-Agent client hints sec-ch-ua-wow64.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setWow64(isWow64: boolean): void;

    /**
     * Gets the value for the sec-ch-ua-wow64.
     *
     * @returns { boolean } - Returns the value for the sec-ch-ua-wow64.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getWow64(): boolean;
  }

  /**
   * 提供点击区域的元素信息。示例代码参考
   * [getLastHitTest]{@link @ohos.web.webview:webview.WebviewController#getLastHitTest}.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  interface HitTestValue {

    /**
     * 当前被点击区域的元素类型。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    type: WebHitTestType;

    /**
     * 点击区域的附加参数信息。若被点击区域为图片或链接，则附加参数信息为其url地址。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    extra: string;
  }

  /**
   * Defines the configuration of web custom scheme, related to {@link customizeSchemes} method.
   *
   * @interface WebCustomScheme [since 9 - 11]
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  interface WebCustomScheme {

    /**
     * Name of the custom scheme.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    schemeName: string;

    /**
     * Whether Cross-Origin Resource Sharing is supported.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    isSupportCORS: boolean;

    /**
     * Whether fetch request is supported.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    isSupportFetch: boolean;

    /**
     * If isStandard is true, the scheme will be handled as a standard scheme. The standard
     * schemes needs to comply with the URL normalization and parsing rules defined in Section 3.1 of RFC 1738,
     * which can be found in the http://www.ietf.org/rfc/rfc1738.txt.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isStandard?: boolean;

    /**
     * If isLocal is true, the same security rules as those applied to the "file" URL will be
     * used to handle the scheme.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isLocal?: boolean;

    /**
     * If isDisplayIsolated is true, then the scheme can only be displayed from other content
     * hosted using the same scheme.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isDisplayIsolated?: boolean;

    /**
     * If isSecure is true, the same security rules as those applied to the "https" URL will be
     * used to handle the scheme.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isSecure?: boolean;

    /**
     * If isCspBypassing is true, then this scheme can bypass Content Security Policy (CSP)
     * checks. In most cases, this value should not be true when isStandard is true.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isCspBypassing?: boolean;

    /**
     * If isCodeCacheSupported is true, then the js of this scheme can generate code cache.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    isCodeCacheSupported?: boolean;
  }

  /**
   * Defines the callback of createPdf, related to {@link createPDF} method.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 14 dynamic
   */
  class PdfData {
    /**
     * Return the data stream generated by the webpage.
     *
     * @returns { Uint8Array } Data stream.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    pdfArrayBuffer(): Uint8Array;
  }

  /**
   * Defines the configuration of creating pdf, related to {@Link createPdf} method.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 14 dynamic
   */
  interface PdfConfiguration {
    /**
     * Number of the width.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    width: number;

    /**
     * Number of the height.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    height: number;

    /**
     * Number of the marginTop.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    marginTop: number;

    /**
     * Number of the marginBottom.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    marginBottom: number;

    /**
     * Number of the marginRight.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    marginRight: number;

    /**
     * Number of the marginLeft.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    marginLeft: number;

    /**
     * Number of the scaling.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    scale?: number;

    /**
     * Whether background should be printed when creating pdf.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    shouldPrintBackground?: boolean;
  }

  /**
   * 提供Web SQL数据库的使用信息。
   *
   * @interface WebStorageOrigin [since 9 - 11]
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  interface WebStorageOrigin {
    /**
     * 指定源的字符串索引。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    origin: string;
    /**
     * 指定源的存储量。
     *
     * 单位：byte。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    usage: number;
    /**
     * 指定源的存储配额。
     *
     * 单位：byte。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    quota: number;
  }

  /**
   * Web组件发送的资源请求信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  interface RequestInfo {
    /**
     * 请求的链接。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    url: string;

    /**
     * 请求的方法。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    method: string;

    /**
     * 请求的表单数据。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    formData: string;
  }

  /**
   * 网页当前的滚动偏移量。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 13 dynamic
   */
  interface ScrollOffset {
    /**
     * 网页在水平方向的滚动偏移量。取值为网页左边界x坐标与Web组件左边界x坐标的差值。
     *
     * 当网页向右过滚动时，取值范围为负值。
     *
     * 当网页没有过滚动或者网页向左过滚动时，取值为0或正值。
     *
     * 单位：vp。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 13 dynamic
     */
    x: number;

    /**
     * 网页在垂直方向的滚动偏移量。取值为网页上边界y坐标与Web组件上边界y坐标的差值。
     *
     * 当网页向下过滚动时，取值范围为负值。
     *
     * 当网页没有过滚动或者网页向上过滚动时，取值为0或正值。
     *
     * 单位：vp。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 13 dynamic
     */
    y: number;
  }

  /**
   * Subscribe to a callback of a specified type of web event once.
   *
   * @param {string} type Types of web event.
   * @param {Callback<void>} callback Indicate callback used to receive the web event.
   *
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3.Parameter verification failed.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Subscribe to a callback of a specified type of web event once.
   *
   * @param {string} type Types of web event.
   * @param {Callback<void>} callback Indicate callback used to receive the web event.
   *
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3.Parameter verification failed.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  function once(type: string, callback: Callback<void>): void;

  /**
   * 通过WebStorage可管理Web SQL数据库接口和HTML5 Web存储接口，每个应用中的所有Web组件共享一个WebStorage。
   *
   * > **说明：**
   * >
   * > - 本Class首批接口从API version 9开始支持。
   * >
   * > - 示例效果请以真机运行为准。
   * >
   * > - 目前调用WebStorage下的方法，都需要先加载Web组件。
   * >
   * > - 本Class下的接口在ArkWeb内核升级到M132版本后因内核废弃Web SQL，对Web SQL数据库的管理失效。ArkWeb内核版本参考ArkWeb简介
   * > [约束与限制](docroot://web/web-component-overview.md#约束与限制)。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  class WebStorage {
    /**
     * 清除被JavaScript存储API使用的所有存储数据，这包括Web SQL数据库和HTML5支持的Web存储API。
     *
     * @param { boolean } incognito - true表示删除所有隐私模式下内存中的web数据，false表示删除正常非隐私模式下Web的SQL数据库当前使用的所有存储。<br>默认值：false。<br>传入
     *     undefined或null时为false。 [since 11]
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static deleteAllData(incognito?: boolean): void;

    /**
     * 清除指定源所使用的存储。
     *
     * @param { string } origin - 指定源的字符串索引，来自于
     *     [getOrigins]{@link webview.WebStorage.static getOrigins(callback: AsyncCallback<Array<WebStorageOrigin>>)}。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     *     <br>3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static deleteOrigin(origin: string): void;

    /**
     * 以Promise方式异步获取当前使用Web SQL数据库和HTML5支持的Web存储API的所有源的信息。
     *
     * @returns { Promise<Array<WebStorageOrigin>> } Promise used to return the information about the origins.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100012 - Invalid web storage origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static getOrigins(): Promise<Array<WebStorageOrigin>>;

    /**
     * 以回调方式异步获取当前使用Web SQL数据库和HTML5支持的Web存储API的所有源的信息。
     *
     * @param { AsyncCallback<Array<WebStorageOrigin>> } callback - 以数组方式返回源的信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100012 - Invalid web storage origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static getOrigins(callback: AsyncCallback<Array<WebStorageOrigin>>): void;

    /**
     * 以Promise方式异步获取指定源的Web SQL数据库和HTML5支持的Web存储API的存储配额，配额以字节为单位。
     *
     * @param { string } origin - 指定源的字符串索引
     * @returns { Promise<number> } Promise实例，用于获取指定源的存储配额。
     *     <br>单位：byte。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static getOriginQuota(origin: string): Promise<number>;

    /**
     * 使用callback回调异步获取指定源的Web SQL数据库和HTML5支持的Web存储API的存储配额，配额以字节为单位。
     *
     * @param { string } origin - 指定源的字符串索引。
     * @param { AsyncCallback<number> } callback - 指定源的存储配额。<br>number是long型整数，范围为[-2147483648, 2147483647]。<br>单位：byte。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static getOriginQuota(origin: string, callback: AsyncCallback<number>): void;

    /**
     * 以Promise方式异步获取指定源的Web SQL数据库和HTML5支持的Web存储API的存储量，存储量以字节为单位。
     *
     * @param { string } origin - 指定源的字符串索引
     * @returns { Promise<number> } Promise实例，用于获取指定源的存储量。
     *     <br>单位：byte。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static getOriginUsage(origin: string): Promise<number>;

    /**
     * 以回调方式异步获取指定源的Web SQL数据库和HTML5支持的Web存储API的存储量，存储量以字节为单位。
     *
     * @param { string } origin - 指定源的字符串索引
     * @param { AsyncCallback<number> } callback - 指定源的存储量。<br>单位：byte。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static getOriginUsage(origin: string, callback: AsyncCallback<number>): void;
  }

  /**
   * Web组件数据库管理对象。
   *
   * > **说明：**
   * >
   * > - 本Class首批接口从API version 9开始支持。
   * >
   * > - 示例效果请以真机运行为准。
   * >
   * > - 目前调用WebDataBase下的方法，都需要先加载Web组件。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  class WebDataBase {
    /**
     * 判断是否存在任何已保存的HTTP身份验证凭据，该方法为同步方法。
     *
     * @returns { boolean } 是否存在任何已保存的HTTP身份验证凭据。
     *     <br>存在返回true，不存在返回false。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static existHttpAuthCredentials(): boolean;

    /**
     * 清除所有已保存的HTTP身份验证凭据，该方法为同步方法。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static deleteHttpAuthCredentials(): void;

    /**
     * 检索给定主机和域的HTTP身份验证凭据，该方法为同步方法。
     *
     * @param { string } host - HTTP身份验证凭据应用的主机。
     * @param { string } realm - HTTP身份验证凭据应用的域。
     * @returns { Array<string> } 包含用户名和密码的数组，检索失败返回空数组。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static getHttpAuthCredentials(host: string, realm: string): Array<string>;

    /**
     * 保存给定主机和域的HTTP身份验证凭据，该方法为同步方法。
     *
     * @param { string } host - HTTP身份验证凭据应用的主机。
     * @param { string } realm - HTTP身份验证凭据应用的域。
     * @param { string } username - 用户名。
     * @param { string } password - 密码。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static saveHttpAuthCredentials(host: string, realm: string, username: string, password: string): void;
  }

  /**
   * Provides a method for managing web geographic location permissions.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  class GeolocationPermissions {
    /**
     * Allow geolocation permissions for specifies source.
     *
     * @param { string } origin - Index of the origin.
     * @param { boolean } incognito - Whether to allow the specified origin to use the geolocation information in
     *     incognito mode. The value **true** means to allow the specified origin to use the geolocation information in
     *     incognito mode, and **false** means the opposite.<br>Default value: **false**.<br>If **null** or
     *     **undefined** is passed in, the value is **false**. [since 11]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin. The origin format must follow defined in RFC 6454.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static allowGeolocation(origin: string, incognito?: boolean): void;

    /**
     * Delete geolocation permissions for specifies source.
     *
     * @param { string } origin - Index of the origin.
     * @param { boolean } incognito - Whether to clear the geolocation permission status of a specified origin in
     *     incognito mode. The value **true** means to clear the geolocation permission status of a specified origin in
     *     incognito mode, and **false** means the opposite.<br>Default value: **false**.<br>If **null** or
     *     **undefined** is passed in, the value is **false**. [since 11]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin. The origin format must follow defined in RFC 6454.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static deleteGeolocation(origin: string, incognito?: boolean): void;

    /**
     * Delete all geolocation permissions.
     *
     * @param { boolean } incognito - Whether to clear the geolocation permission status of all sources in incognito
     *     mode. The value **true** means to clear the geolocation permission status of all sources in incognito mode,
     *     and **false** means the opposite.<br>Default value: **false**.<br>If **null** or **undefined** is passed in,
     *     the value is **false**. [since 11]
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static deleteAllGeolocation(incognito?: boolean): void;

    /**
     * Gets the geolocation permission status of the specified source.
     *
     * @param { string } origin - Index of the origin.
     * @param { boolean } incognito - Whether to obtain the geolocation permission status of the specified origin in
     *     incognito mode. The value **true** means to obtain the geolocation permission status of the specified origin
     *     in incognito mode, and **false** means the opposite.<br>Default value: **false**.<br>If **null** or
     *     **undefined** is passed, error code **401** is thrown. [since 11]
     * @returns { Promise<boolean> } Promise used to return the geolocation permission status of the specified origin.
     *     <br>If the operation is successful, the value **true** means that the geolocation permission is granted, and
     *     **false** means the opposite.
     *     <br>If the operation fails, the geolocation permission status of the specified origin is not found.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin. The origin format must follow defined in RFC 6454.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static getAccessibleGeolocation(origin: string, incognito?: boolean): Promise<boolean>;

    /**
     * Gets the geolocation permission status of the specified source.
     *
     * @param { string } origin - Index of the origin.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the geolocation permission status of the
     *     specified origin.<br>If the operation is successful, the value **true** means that the geolocation permission
     *     is granted, and **false** means the opposite.<br>If the operation fails, the geolocation permission status of
     *     the specified origin is not found.
     * @param { boolean } incognito - Whether to obtain the geolocation permission status of the specified origin in
     *     incognito mode. The value **true** means to obtain the geolocation permission status of the specified origin
     *     in incognito mode, and **false** means the opposite.<br>Default value: **false**.<br>If **null** or
     *     **undefined** is passed, error code **401** is thrown. [since 11]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin. The origin format must follow defined in RFC 6454.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static getAccessibleGeolocation(origin: string, callback: AsyncCallback<boolean>, incognito?: boolean): void;

    /**
     * Get all stored geolocation permission url source.
     *
     * @param { boolean } incognito - Whether to obtain the geolocation permission status of all origins in incognito
     *     mode. The value **true** means to obtain the geolocation permission status of all origins in incognito mode,
     *     and **false** means the opposite.<br>Default value: **false**.<br>If **null** or **undefined** is passed,
     *     error code **401** is thrown. [since 11]
     * @returns { Promise<Array<string>> } Promise used to return the geolocation permission status of all origins.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static getStoredGeolocation(incognito?: boolean): Promise<Array<string>>;

    /**
     * Get all stored geolocation permission url source.
     *
     * @param { AsyncCallback<Array<string>> } callback - Callback used to return the geolocation permission status of
     *     all origins.
     * @param { boolean } incognito - Whether to obtain the geolocation permission status of all origins in incognito
     *     mode. The value **true** means to obtain the geolocation permission status of all origins in incognito mode,
     *     and **false** means the opposite.<br>Default value: **false**.<br>If **null** or **undefined** is passed,
     *     error code **401** is thrown. [since 11]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static getStoredGeolocation(callback: AsyncCallback<Array<string>>, incognito?: boolean): void;
  }

  /**
   * Defines the Web's HTTPCookie.
   * <p><strong>API Note</strong>:<br>
   * The maximum length allowed for each attribute value in a cookie string is 1024.
   * </p>
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  interface WebHttpCookie {
    /**
     * 获取cookie的域名
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    domain: string;

    /**
     * 获取cookie的path
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    path: string;

    /**
     * 获取cookie的name
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    name: string;

    /**
     * 获取cookie的value
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    value: string;
    /**
     * 获取cookie的失效日期
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    expiresDate: string;

    /**
     * 获取是否是session cookie
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    isSessionCookie: boolean;

    /**
     * 获取当前cookie是否被标记了HttpOnly
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    isHttpOnly: boolean;

    /**
     * 获取当前cookie是否是secure cookie
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    isSecure: boolean;

    /**
     * 获取当前cookie的samesite策略
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    samesitePolicy: WebHttpCookieSameSitePolicy;
  }

  /**
   * 提供了用于管理网页Cookie的方法。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  class WebCookieManager {
    /**
     * 异步获取所有cookie。
     *
     * @param { boolean } incognito - {@code true} 隐私模式下获取所有Cookie。 {@code false} 非隐私模式下获取所有Cookie。
     * @returns { Promise<Array<WebHttpCookie>> } - Promise对象，用于获取所有cookie及其对应的字段值。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    static fetchAllCookies(incognito: boolean):  Promise<Array<WebHttpCookie>>;
    /**
     * 获取指定url对应cookie的值。
     *
     * @param { string } url - 要获取的cookie所属的url。
     * @returns { string } - 指定url对应的cookie的值。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.web.webview.WebCookieManager#fetchCookieSync
     */
    static getCookie(url: string): string;

    /**
     * 获取指定url对应cookie的值。
     *
     * > **说明：**
     * >
     * > - 系统会自动清理过期的cookie，对于同名key的数据，新数据将会覆盖前一个数据。
     * >
     * > - 为了获取可正常使用的cookie值，fetchCookieSync需传入完整链接。
     * >
     * > - fetchCookieSync用于获取所有的cookie值，每条cookie值之间会通过"; "进行分隔，但无法单独获取某一条特定的cookie值。
     *
     * @param { string } url - 要获取的cookie所属的url。
     * @param { boolean } incognito - true表示获取隐私模式下webview的内存cookies，false表示正常非隐私模式下的cookies。
     * @returns { string } - 指定url对应的cookie的值。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static fetchCookieSync(url: string, incognito?: boolean): string;

    /**
     * 以Promise方式异步获取指定url对应cookie的值。
     *
     * @param { string } url - 要获取的cookie所属的url。
     * @returns { Promise<string> } - Promise实例，用于获取指定url对应的cookie值。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    static fetchCookie(url: string): Promise<string>;

    /**
     * 以Promise方式异步获取指定url对应cookie的值。
     *
     * @param { string } url - 要获取的cookie所属的url。
     * @param { boolean } incognito - true表示获取隐私模式下webview的内存cookies，false表示正常非隐私模式下的cookies。
     * @returns { Promise<string> } - Promise实例，用于获取指定url对应的cookie值。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 14 dynamic
     */
    static fetchCookie(url: string, incognito: boolean): Promise<string>;

    /**
     * 异步callback方式获取指定url对应cookie的值。
     *
     * @param { string } url - 要获取的cookie所属的url。
     * @param { AsyncCallback<string> } callback - 在获取到指定URL的Cookie之后调用。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    static fetchCookie(url: string, callback: AsyncCallback<string>): void;

    /**
     * 为指定url设置单个cookie的值。
     *
     * @param { string } url - 要设置的cookie所属的url。
     * @param { string } value - 要设置的cookie的值。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @throws { BusinessError } 17100005 - The provided cookie value is invalid. It must follow the format specified
     *     <br>in RFC 6265.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.web.webview.WebCookieManager#configCookieSync
     */
    static setCookie(url: string, value: string): void;

    /**
     * 为指定url设置单个cookie的值。
     *
     * > **说明：**
     * >
     * > - configCookieSync中的url，可以指定域名的方式来使得页面内请求也附带上cookie。
     * >
     * > - 同步cookie的时机建议在Web组件加载之前完成。
     * >
     * > - cookie每30s周期性保存到磁盘中，也可以使用接口saveCookieAsync进行强制落盘。
     * >
     * > - value参数必须遵循Set-Cookie HTTP响应头的格式。形式为"key=value"的键值对，后面可跟随以分号分隔的cookie属性列表（例如"key=value;Max-Age=100"）。
     * >
     * > - 若存在相同host、path和名称的cookie，将被新cookie替换。若设置的cookie已过期，则不会存储该cookie。如需设置多个cookie，应多次调用此方法。
     * >
     * > - 若通过configCookieSync进行两次或多次设置cookie，则每次设置的cookie之间会通过"; "进行分隔。
     * >
     * > - 如果指定的值包含"Secure"属性，则url必须使用"https://"协议。
     * >
     * > - 如果要覆盖HttpOnly的cookies，需要在value中指定HttpOnly属性。
     *
     * @param { string } url - 要设置的cookie所属的url，建议使用完整的url。
     * @param { string } value - 要设置的cookie的值。
     * @param { boolean } incognito - true表示设置隐私模式下对应url的cookies，false表示设置正常非隐私模式下对应url的cookies。<br>默认值：false。 <br>传入
     *     undefined或null会抛出异常错误码401。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @throws { BusinessError } 17100005 - The provided cookie value is invalid. It must follow the format specified
     *     <br>in RFC 6265.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static configCookieSync(url: string, value: string, incognito?: boolean): void;

    /**
     * 为指定url设置cookie的值。
     *
     * > **说明：**
     * >
     * > - configCookieSync中的url，可以指定域名的方式来使得页面内请求也附带上cookie。
     * >
     * > - 同步cookie的时机建议在Web组件加载之前完成。
     * >
     * > - cookie每30s周期性保存到磁盘中，也可以使用接口saveCookieAsync进行强制落盘。
     * >
     * > - value参数必须遵循Set-Cookie HTTP响应头的格式。形式为"key=value"的键值对，后面可跟随以分号分隔的cookie属性列表（例如"key=value;Max-Age=100"）。
     * >
     * > - 若存在相同host、path和名称的cookie，将被新cookie替换。若设置的cookie已过期，则不会存储该cookie。如需设置多个cookie，应多次调用此方法。
     * >
     * > - 若通过configCookieSync进行两次或多次设置cookie，则每次设置的cookie之间会通过"; "进行分隔。
     * >
     * > - 如果指定的值包含"Secure"属性，则url必须使用"https://"协议。
     *
     * @param { string } url - 要设置的cookie所属的url。
     * @param { string } value - 要设置的cookie的值。
     * @param { boolean } incognito - true表示设置隐私模式下对应url的cookies，false表示设置正常非隐私模式下对应url的cookies。
     * @param { boolean } includeHttpOnly - true表示允许覆盖含有http-only的cookies，false表示不允许覆盖含有http-only的cookies。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @throws { BusinessError } 17100005 - The provided cookie value is invalid. It must follow the format specified
     *     <br>in RFC 6265.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 14 dynamic
     */
    static configCookieSync(url: string, value: string, incognito: boolean, includeHttpOnly: boolean): void;

    /**
     * 指定url设置单个cookie的值。使用Promise异步回调。
     *
     * @param { string } url - 要设置的cookie所属的url。
     * @param { string } value - 要设置的cookie的值。
     * @returns { Promise<void> } - Promise实例，用于获取指定url设置单个cookie值是否成功。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @throws { BusinessError } 17100005 - The provided cookie value is invalid. It must follow the format specified
     *     <br>in RFC 6265.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    static configCookie(url: string, value: string): Promise<void>;

    /**
     * 指定url设置单个cookie的值。使用Promise异步回调。
     *
     * @param { string } url - 要设置的cookie所属的url。
     * @param { string } value - 要设置的cookie的值。
     * @param { boolean } incognito - true表示设置隐私模式下对应url的cookies，false表示设置正常非隐私模式下对应url的cookies。
     * @param { boolean } includeHttpOnly - true表示允许覆盖含有http-only的cookies，false表示不允许覆盖含有http-only的cookies。
     * @returns { Promise<void> } - Promise实例，用于获取指定url设置单个cookie值是否成功。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @throws { BusinessError } 17100005 - The provided cookie value is invalid. It must follow the format specified
     *     <br>in RFC 6265.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 14 dynamic
     */
    static configCookie(url: string, value: string, incognito: boolean, includeHttpOnly: boolean): Promise<void>;

    /**
     * 异步callback方式为指定url设置单个cookie的值。
     *
     * @param { string } url - 要设置的cookie所属的url。
     * @param { string } value - 要设置的cookie的值。
     * @param { AsyncCallback<void> } callback - callback回调，用于获取设置cookie的结果
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @throws { BusinessError } 17100005 - The provided cookie value is invalid. It must follow the format specified
     *     <br>in RFC 6265.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    static configCookie(url: string, value: string, callback: AsyncCallback<void>): void;

    /**
     * 将当前可通过fetchCookie获取到的所有需要持久化的cookie同步保存到磁盘中。
     *
     * > **说明：**
     * >
     * > - saveCookieSync用于强制将需要持久化的cookies写入磁盘。PC/2in1和Tablet设备不会持久化session cookie，即使调用saveCookieSync，也不会将session
     * > cookie写入磁盘。
     * >
     * > - saveCookieSync将阻塞调用者直到操作完成，期间可能会执行I/O操作。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15 dynamic
     */
    static saveCookieSync(): void;

    /**
     * 将当前可通过fetchCookie获取到的所有需要持久化的cookie以Promise方法异步保存到磁盘中。
     *
     * @returns { Promise<void> } - Promise实例，用于获取cookie是否成功保存。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static saveCookieAsync(): Promise<void>;

    /**
     * 将当前可通过fetchCookie获取到的所有需要持久化的cookie异步保存到磁盘中。
     *
     * @param { AsyncCallback<void> } callback - callback回调，用于获取cookie是否成功保存。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static saveCookieAsync(callback: AsyncCallback<void>): void;

    /**
     * 获取WebCookieManager实例是否拥有发送和接收cookie的权限。
     *
     * @returns { boolean } 是否拥有发送和接收cookie的权限。
     *     <br>true表示拥有发送和接收cookie的权限，false表示无发送和接收cookie的权限。
     *     <br>默认值：true。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static isCookieAllowed(): boolean;

    /**
     * 设置WebCookieManager实例是否拥有发送和接收cookie的权限。
     *
     * @param { boolean } accept - 设置是否拥有发送和接收cookie的权限，默认为true，表示拥有发送和接收cookie的权限。false表示没有发送和接收cookie的权限。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static putAcceptCookieEnabled(accept: boolean): void;

    /**
     * 获取WebCookieManager实例是否拥有发送和接收第三方cookie的权限。
     *
     * @returns { boolean } 是否拥有发送和接收第三方cookie的权限。
     *     <br>true表示拥有发送和接收第三方cookie的权限，false表示无发送和接收第三方cookie的权限。
     *     <br>默认值：false。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static isThirdPartyCookieAllowed(): boolean;

    /**
     * 设置WebCookieManager实例是否拥有发送和接收第三方cookie的权限。
     *
     * @param { boolean } accept - 是否允许设置、获取第三方cookie。<br>true表示允许设置、获取第三方cookie，false表示不允许设置、获取第三方cookie。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static putAcceptThirdPartyCookieEnabled(accept: boolean): void;

    /**
     * 获取是否存在cookie。
     *
     * @param { boolean } incognito - true表示隐私模式下查询是否存在cookies，false表示正常非隐私模式下查询是否存在cookies。<br>默认值：false。<br>传入
     *     undefined或null时返回undefined。 [since 11]
     * @returns { boolean } true表示存在cookie，false表示不存在cookie。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static existCookie(incognito?: boolean): boolean;

    /**
     * 清除所有cookie。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.web.webview.WebCookieManager#clearAllCookiesSync
     */
    static deleteEntireCookie(): void;

    /**
     * 清除所有cookie。
     *
     * @param { boolean } incognito - true表示清除隐私模式下Webview的所有内存cookies，false表示清除正常非隐私模式下的持久化cookies。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static clearAllCookiesSync(incognito?: boolean): void;

    /**
     * 清除所有cookie。使用Promise异步回调。
     *
     * @returns { Promise<void> } - Promise实例，用于获取清除所有cookie是否成功。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    static clearAllCookies(): Promise<void>;

    /**
     * 异步callback方式清除所有cookie。
     *
     * @param { AsyncCallback<void> } callback - callback回调，用于获取清除所有cookie是否成功。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    static clearAllCookies(callback: AsyncCallback<void>): void;

    /**
     * 清除所有会话cookie。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.web.webview.WebCookieManager#clearSessionCookieSync
     */
    static deleteSessionCookie(): void;

    /**
     * 清除所有会话cookie。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static clearSessionCookieSync(): void;

    /**
     * 清除所有会话cookie。使用Promise异步回调。
     *
     * @returns { Promise<void> } - Promise实例，用于获取清除所有会话cookie是否成功。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static clearSessionCookie(): Promise<void>;

    /**
     * 异步callback方式清除所有会话cookie。
     *
     * @param { AsyncCallback<void> } callback - callback回调，用于获取清除所有会话cookie是否成功。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    static clearSessionCookie(callback: AsyncCallback<void>): void;

    /**
     * Delays the initialization of the web engine. By default, the web engine is initialized when the CookieManager
     * interface is called. By setting the 'lazy' parameter to true, the web engine will not be initialized when the
     * CookieManager interface is called. Instead, the web engine will be initialized either when the web component is
     * created or when initializeWebEngine is called.
     *
     * @param { boolean } lazy - Controls whether to delay the initialization of the web engine.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 dynamic
     */
    static setLazyInitializeWebEngine(lazy: boolean): void;
  }

  /**
   * 向 {@link onMessageEventExt} 提供的枚举类型，用于指示网络消息的类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enum WebMessageType {
    /**
     * 不支持的数据类型。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    NOT_SUPPORT = 0,

    /**
     * 字符串类型。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    STRING = 1,

    /**
     * 数值类型。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    NUMBER = 2,

    /**
     * 布尔类型。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    BOOLEAN = 3,

    /**
     * 原始二进制数据缓冲区。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    ARRAY_BUFFER = 4,

    /**
     * 数组类型。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    ARRAY = 5,

    /**
     * 错误类型。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    ERROR = 6
  }

  /**
   * The message received or sent from web message port.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  class WebMessageExt {
    /**
     * 获取数据对象的类型。
     *
     * @returns { WebMessageType } - 返回类型为 WebMessageType 的数据。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getType(): WebMessageType;

    /**
     * 获取数据对象的字符串类型数据。
     *
     * @returns { string } - 返回字符串类型的数据。
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getString(): string;

    /**
     * 获取数据对象的数值类型数据。
     *
     * @returns { number } - 返回数值类型的数据。
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getNumber(): number;

    /**
     * 获取数据对象的布尔类型数据。
     *
     * @returns { boolean } - 返回布尔类型的数据。
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getBoolean(): boolean;

    /**
     * 获取数据对象的原始二进制数据。
     *
     * @returns { ArrayBuffer } - 返回原始二进制数据。
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getArrayBuffer(): ArrayBuffer;

    /**
     * 获取数据对象的数组类型数据。
     *
     * @returns { Array<string | number | boolean> } - Returns data of Array type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getArray(): Array<string | number | boolean>;

    /**
     * 获取数据对象的错误类型数据。
     *
     * @returns { Error } - 返回错误对象类型的数据。
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getError(): Error;

    /**
     * 设置数据对象的类型。
     *
     * @param { WebMessageType } type - 设置 WebMessageType 类型数据。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    setType(type: WebMessageType): void;

    /**
     * 设置数据对象的字符串类型数据。
     *
     * @param { string } message - 字符串类型数据。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    setString(message: string): void;

    /**
     * 设置数据对象的数值类型数据。
     *
     * @param { number } message - 数值类型数据。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    setNumber(message: number): void;

    /**
     * 设置数据对象的布尔类型数据。
     *
     * @param { boolean } message - 布尔类型数据。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    setBoolean(message: boolean): void;

    /**
     * 设置数据对象的原始二进制数据。
     *
     * @param { ArrayBuffer } message - 原始二进制类型数据。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    setArrayBuffer(message: ArrayBuffer): void;

    /**
     * 设置数据对象的数组类型数据。
     *
     * @param { Array<string | number | boolean> } message - 数组类型数据。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    setArray(message: Array<string | number | boolean>): void;

    /**
     * 设置数据对象的错误对象类型数据。
     *
     * @param { Error } message - 错误对象类型数据。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    setError(message: Error): void;
  }

  /**
   * 用于描述{@link onMessageEventExt}所支持的数据类型。
   *
   * @unionmember { ArrayBuffer } [since 11]
   * @unionmember { string } [since 11]
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 9 dynamic
   */
  type WebMessage = ArrayBuffer | string;

  /**
   * Define html web message port.
   *
   * @interface WebMessagePort [since 9 - 11]
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  interface WebMessagePort {

    /**
     * 创建WebMessagePort时是否指定使用扩展增强接口（如 postMessageEventExt 和 onMessageEventExt）。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    isExtentionType?: boolean;

    /**
     * 不需要发送消息时关闭该消息端口。在使用close前，请先使用createWebMessagePorts创建消息端口。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    close(): void;

    /**
     * 发送WebMessage类型消息给HTML5侧，必须先调用onMessageEvent，否则会发送失败。
     *
     * @param { WebMessage } message - 要发送的消息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100010 - Failed to post messages through the port.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    postMessageEvent(message: WebMessage): void;

    /**
     * 在应用侧的消息端口上注册回调函数，接收HTML5侧发送过来的WebMessage类型消息。
     *
     * @param { function } callback - 用于接收消息的回调函数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100006 - Failed to register a message event for the port.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    onMessageEvent(callback: (result: WebMessage) => void): void;

    /**
     * 发送WebMessageType类型消息给HTML5侧，必须先调用onMessageEventExt，否则会发送失败。
     *
     * @param { WebMessageExt } message - 要发送的消息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100010 - Failed to post messages through the port.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    postMessageEventExt(message: WebMessageExt): void;

    /**
     * 在应用侧的消息端口上注册回调函数，接收HTML5侧发送过来的[WebMessageType]{@link @ohos.web.webview:webview.WebMessageType}类型消息。
     *
     * @param { function } callback - 接收到的消息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100006 - Failed to register a message event for the port.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    onMessageEventExt(callback: (result: WebMessageExt) => void): void;
  }

  /**
   * Provides information for history item in BackForwardList.
   *
   * @interface HistoryItem [since 9 - 11]
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  interface HistoryItem {
    /**
     * 历史页面图标的PixelMap对象。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    icon: image.PixelMap;

    /**
     * 历史记录项的url地址。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    historyUrl: string;

    /**
     * 历史记录项的原始url地址。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    historyRawUrl: string;

    /**
     * 历史记录项的标题。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    title: string;
  }

  /**
   * Provides back and forward history list information method. related to {@link HistoryItem}.
   *
   * @interface BackForwardList [since 9 - 11]
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  interface BackForwardList {
    /**
     * 当前在页面历史列表中的索引。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    currentIndex: number;

    /**
     * 历史列表中索引的数量，最多保存50条，超过时起始记录会被覆盖。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    size: number;

    /**
     * 获取历史列表中指定索引的历史记录项信息。
     *
     * @param { number } index 指定历史列表中的索引。
     * @returns { HistoryItem } 历史记录项。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    getItemAtIndex(index: number): HistoryItem;
  }

  /**
   * 获取全量绘制结果入参。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  interface SnapshotInfo {
    /**
     * snapshot的id。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    id?: string;

    /**
     * web绘制的尺寸，最多支持16000px * 16000px，长度单位支持px、vp、%，需保持不同参数传入长度单位一致，默认单位vp，超过规格时返回最大规格。（示例：width:'100px'，height:'200px'。
     * 或者 width:'20%'，height:'30%'。只写数字时单位为vp。）
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    size?: SizeOptions;
  }

  /**
   * 全量绘制回调结果。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  interface SnapshotResult {
    /**
     * snapshot的id。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    id?: string;

    /**
     * snapshot的状态，正常为true，失败为false，获取全量绘制结果失败，返回size的长宽都为0，map为空。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    status?: boolean;

    /**
     * web绘制的尺寸，最多支持16000px * 16000px，长度单位支持px、vp、%，需保持不同参数传入长度单位一致，默认单位vp，超过规格时返回最大规格。（示例：width:'100px'，height:'200px'。
     * 或者 width:'20%'，height:'30%'。只写数字时单位为vp。）
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    size?: SizeOptions;

    /**
     * 全量绘制结果为image.PixelMap格式。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    imagePixelMap?: image.PixelMap;
  }

  /**
   * Enum type supplied to {@link runJavaScriptExt} for indicating the result of JavaScript code execution.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enum JsMessageType {
    /**
     * 不支持的数据类型。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    NOT_SUPPORT = 0,

    /**
     * 字符串类型。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    STRING = 1,

    /**
     * 数值类型。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    NUMBER = 2,

    /**
     * 布尔类型。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    BOOLEAN = 3,

    /**
     * 原始二进制数据缓冲区。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    ARRAY_BUFFER = 4,

    /**
     * 数组类型。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    ARRAY = 5
  }

  /**
   * 该消息用于指示JavaScript代码执行结果的状态。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  class JsMessageExt {

    /**
     * 获取数据对象的类型。
     *
     * @returns { JsMessageType } - runJavaScriptExt接口脚本执行后返回的结果的类型。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getType(): JsMessageType;

    /**
     * 获取JavaScript代码执行结果的字符串类型数据。
     *
     * @returns { string } - 返回字符串类型的数据。
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getString(): string;

    /**
     * 获取JavaScript代码执行结果的数值类型数据。
     *
     * @returns { number } - 返回数值类型的数据。
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getNumber(): number;

    /**
     * 获取JavaScript代码执行结果的布尔类型数据。
     *
     * @returns { boolean } - 返回布尔类型的数据。
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getBoolean(): boolean;

    /**
     * 获取JavaScript代码执行结果的原始二进制数据。
     *
     * @returns { ArrayBuffer } - 返回原始二进制数据。
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getArrayBuffer(): ArrayBuffer;

    /**
     * 获取JavaScript代码执行结果的数组类型数据。
     *
     * @returns { Array<string | number | boolean> } - Returns data of Array type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getArray(): Array<string | number | boolean>;

    /**
     * 获取JS执行的异常信息，并将其序列化为字符串。
     *
     * @returns { string | null } - If an exception occurs, or the returned type is object, return the
     *     serialized string in the format of "Not support type: <{exception|object}>", Parts exceeding a length of
     *     2048 will be truncated; otherwise, return null.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 dynamic
     */
    getErrorDescription(): string | null;
  }

  /**
   * Defines the render process mode.
   *
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enum RenderProcessMode {
    /**
     * ArkWeb single rendering subprocess mode. In this mode, multiple Web pages reuse a rendering subprocess.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    SINGLE = 0,

    /**
     * ArkWeb multi-rendering subprocess mode. In this mode, there is one rendering subprocess per Web.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    MULTIPLE = 1
  }

  /**
   * Defines the PrefetchOptions class.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  class PrefetchOptions {
    /**
     * 设置是否忽略响应头中的Cache-Control: no-store。默认值：false。
     * <p><strong>API 说明</strong>:<br>
     * 此设置控制预取操作是否绕过 HTTP Cache-Control: no-store 指令。
     * 重要提示：默认行为（false）符合 HTTP 安全标准。若要覆盖默认行为（设置为 true），必须对非敏感资源进行明确的**风险评估**。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    ignoreCacheControlNoStore: boolean;

    /**
     * 设置两次网页预取的最小时间间隔。
     *
     * 每次预取时会计算和上次预取的间隔时间，若小于设置值，则取消本次预取。
     *
     * 该间隔用于限制预取的频率，以平衡性能和资源使用。
     *
     * 默认为500，最大值为500。单位: ms。
     *
     * 设置为负数时，默认为0。
     *
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    minTimeBetweenPrefetchesMs: number;

    /**
     * Constructor for PrefetchOptions.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    constructor();
  }

  /**
   * Web组件预编译JavaScript生成字节码缓存的配置对象，用于控制字节码缓存更新。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  interface CacheOptions {
    /**
     * 请求此JavaScript文件时服务器返回的响应头，使用E-Tag或Last-Modified标识文件版本，判断是否需要更新。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    responseHeaders: Array<WebHeader>;
  }

  /**
   * [OfflineResourceMap]{@link @ohos.web.webview:webview.OfflineResourceMap}对象对应的本地离线资源的接口类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  enum OfflineResourceType {
    /**
     * 图片类型的资源。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    IMAGE = 0,

    /**
     * CSS类型的资源。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    CSS = 1,

    /**
     * 通过<script src="" />标签加载的Javascript资源。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    CLASSIC_JS = 2,

    /**
     * 通过<script src="" type="module" />标签加载的Javascript资源。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    MODULE_JS = 3
  }

  /**
   * 本地离线资源配置对象，用于配置将被[injectOfflineResources]{@link @ohos.web.webview:webview.WebviewController.injectOfflineResources}
   * 接口注入到内存缓存的本地离线资源的相关信息，内核会根据此信息生成资源缓存，并据此控制缓存的有效期。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  interface OfflineResourceMap {
    /**
     * List of network addresses of the local offline resources. The first item in the list is used as the resources'
     * origin. If only one network address is provided, this single address is used for the resources' origin. The URL
     * supports only the HTTP and HTTPS protocols and contains a maximum of 2048 characters.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    urlList: Array<string>,

    /**
     * Content of a local offline resource.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    resource: Uint8Array,

    /**
     * HTTP response headers corresponding to the resources. The **Cache-Control** or **Expires** response header is
     * used to control the validity period of the resource in the memory cache. If neither of the headers is provided, a
     * default validity time of 86400 seconds (1 day) will be applied. The **Content-Type** response header is used to
     * define the MIME type of the resource. For resources of type MODULE_JS, a valid MIME type must be provided. For
     * other types, the MIME type is optional, with no default value. A non-standard MIME type can lead to the resource
     * being invalidated in the memory cache. If a **script** tag on the web page uses the **crossorigin** attribute,
     * the **Cross-Origin** response header must be set in the **responseHeaders** parameter of the API. The value for
     * this header should be **anonymous** or **use-credentials**.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    responseHeaders: Array<WebHeader>,

    /**
     * 资源的类型，目前仅支持Javascript、图片和CSS类型的资源。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    type: OfflineResourceType;
  }

  /**
   * Scroll滚动类型，用于[setScrollable]{@link setScrollable}。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  enum ScrollType {
    /**
     * 滚动事件，表示通过触摸屏、触摸板、鼠标滚轮生成的网页滚动。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    EVENT = 0
  }

  /**
   * 表示controller的绑定状态枚举
   *
   * @enum { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  enum ControllerAttachState {
    /**
     * 表示controller当前并未绑定一个web组件
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    UNATTACHED = 0,

    /**
     * Indicates webviewController is attached a web component.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    ATTACHED = 1
  }

  /**
   * 无白屏加载的异常错误码。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  enum WebBlanklessErrorCode {
    /**
     * 成功。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    SUCCESS = 0,

    /**
     * 未知错误，内部状态错误等。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    ERR_UNKNOWN = -1,

    /**
     * 参数不合法。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    ERR_INVALID_PARAM = -2,

    /**
     * WebViewController未绑定组件。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    ERR_CONTROLLER_NOT_INITED = -3,

    /**
     * 未匹配到key值，对于
     * [setBlanklessLoadingWithKey]{@link @ohos.web.webview:webview.WebviewController.setBlanklessLoadingWithKey}需与
     * [getBlanklessInfoWithKey]{@link @ohos.web.webview:webview.WebviewController.getBlanklessInfoWithKey}配套使用并且key值一致，
     * 否则返回该错误码。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    ERR_KEY_NOT_MATCH = -4,

    /**
     * 当相似度较低时，系统会判定为跳变太大，
     * [setBlanklessLoadingWithKey]{@link @ohos.web.webview:webview.WebviewController.setBlanklessLoadingWithKey}接口不会成功启
     * 用插帧。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    ERR_SIGNIFICANT_CHANGE = -5,

    /**
     * 在[BlanklessLoadingParam]{@link @ohos.web.webview:webview.BlanklessLoadingParam}设置的历史帧失效时间超出范围。
     *
     * 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    ERR_DURATION_OUT_OF_RANGE = -6,

    /**
     * 在[BlanklessLoadingParam]{@link @ohos.web.webview:webview.BlanklessLoadingParam}设置的历史帧失效时间超出范围。
     *
     * 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    ERR_EXPIRATION_TIME_OUT_OF_RANGE = -7
  }

  /**
   * 定义当前插帧状态
   *
   * 设备行为差异:仅支持手机平台，其他平台返回801
   *
   * @enum { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  enum BlanklessFrameInterpolationState {
    /**
     * 插帧成功
     *
     * 设备行为差异:仅支持手机平台，其他平台返回801
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    FRAME_INTERPOLATION_SUCCEEDED = 0,

    /**
     * 插帧失败
     *
     * 设备行为差异:仅支持手机平台，其他平台返回801
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    FRAME_INTERPOLATION_FAILED = 1,

    /**
     * 插帧移除
     *
     * 设备行为差异:仅支持手机平台，其他平台返回801
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    FRAME_INTERPOLATION_REMOVED = 2
  }

  /**
   * ArkWeb内核版本，请参考
   * [M114内核在OpenHarmony 6.0系统上的适配指导](https://gitcode.com/openharmony-tpc/chromium_src/blob/master/web/ReleaseNote/CompatibleWithLegacyWebEngine_6.0.md)
   * ，
   * [M132内核在OpenHarmony 7.0系统上的适配指导](https://gitcode.com/openharmony-tpc/chromium_src/blob/master/web/ReleaseNote/CompatibleWithLegacyWebEngine_7.0.md)
   * 。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  enum ArkWebEngineVersion {
    /**
     * 系统默认内核，OpenHarmony 6.0版本默认为M132，OpenHarmony 7.0版本默认为M144。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    SYSTEM_DEFAULT = 0,

    /**
     * OpenHarmony 6.0版本的遗留内核。开发者可选择此遗留内核，若系统版本上不存在此内核则设置无效。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    M114 = 1,

    /**
     * OpenHarmony 6.0版本的常青内核（OpenHarmony 7.0版本的遗留内核），M132为OpenHarmony 6.0版本的默认内核。若系统版本上不存在此内核则设置无效。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    M132 = 2,

    /**
     * OpenHarmony 7.0版本的常青内核，M144为OpenHarmony 7.0版本的默认内核。若系统版本上不存在此内核则设置无效。
     *
     * 26.0.0
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    M144 = 3,

    /**
     * 常青内核，系统的最新内核。开发者可选择在每个系统版本上都使用最新的内核，OpenHarmony开发套件（基于API 23）及之后所有系统版本都生效。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    ARKWEB_EVERGREEN = 99999
  }

  /**
   * 页面首屏加载预测信息，主要包括首屏相似度预测值，首屏加载耗时预测值，预测错误码，应用需根据此信息来决策是否启用无白屏加载插帧方案。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  interface BlanklessInfo {
    /**
     * 无白屏加载的异常错误码，见[WebBlanklessErrorCode]{@link @ohos.web.webview:webview.WebBlanklessErrorCode}定义。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    errCode: WebBlanklessErrorCode;

    /**
     * 首屏相似度，根据历史加载首屏内容计算相似度，范围为[0, 1.0]，1.0表示完全一致，数值越接近1，相似度越高。该值存在滞后性，本地加载的相似性将在下次加载时才可反映。建议当相似度较低时，应用不启用无白屏加载插帧方案。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    similarity: number;

    /**
     * 根据历史加载首屏耗时预测本次加载耗时，单位ms，取值范围需大于0。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    loadingTime: number;
  }

  /**
   * 1.定义插帧状态信息
   * 2.ArkWeb使能白屏插帧优化的场景
   *
   * 设备行为差异:仅支持手机平台，其他平台返回801
   *
   * @typedef BlanklessFrameInterpolationInfo
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  interface BlanklessFrameInterpolationInfo {
    /**
     * 1.唯一标识本页面的key值
     *
     * 设备行为差异:仅支持手机平台，其他平台返回801
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    key: string;

    /**
     * 1.当前插帧状态
     *
     * 设备行为差异:仅支持手机平台，其他平台返回801
     *
     * @type { BlanklessFrameInterpolationState }
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    state: BlanklessFrameInterpolationState;

    /**
     * 帧插入或者移除的时间点
     * 设备行为差异:仅支持手机平台，其他平台返回801
     * 取值限定为整数。
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    timestamp: number;

    /**
     * 插帧失败的原因
     *
     * 设备行为差异:仅支持手机平台，其他平台返回801
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    reason: string;
  }

  /**
   * 1.插帧加载参数
   *
   * 设备行为差异:仅支持手机平台，其他平台返回801
   *
   * @typedef BlanklessLoadingParam
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  interface BlanklessLoadingParam {
    /**
     * 本次是否使能开始插帧，true：使能，false：不使能
     *
     * 设备行为差异:仅支持手机平台，其他平台返回801
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    enable: boolean;

    /**
     * 本次插入帧的存续时间，单位ms
     * 有效时长范围为 {0} 和[200, 2000]的并集
     * 设备行为差异:仅支持手机平台，其他平台返回801
     * 取值限定为整数。
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    duration?: number;

    /**
     * 历史帧失效时间，UTC时间，单位：ms。用T表示当前UTC时间，同时已知30天为2592000000ms，取值范围：(T, T + 2592000000] 和 {0}的并集，其中0表示不指定失效时间，采用系统默认失效时间（7天）。
     *
     * 设备行为差异:仅支持手机平台，其他平台返回801
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    expirationTime?: number;

    /**
     * 白屏插帧回调函数，用于返回白屏插帧信息
     *
     * 设备行为差异:仅支持手机平台，其他平台返回801
     *
     * @type { ?Callback<BlanklessFrameInterpolationInfo> }
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    callback?: Callback<BlanklessFrameInterpolationInfo>;
  }

  /**
   * 定义enableAdvancedSecurityMode参数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface SecurityParams {
    /**
     * 决定是否关闭JIT。
     *
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    disableJITCompilation?: boolean;
    /**
     * 判断是否关闭WASM。
     *
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    disableWebAssembly?: boolean;
    /**
     * 判断是否禁用WebGL。
     *
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    disableWebGL?: boolean;
    /**
     * 是否禁用PDF查看器。true表示禁用，false表示不禁用。默认值：false。
     * 内置PDF解析引擎在解析复杂二进制格式和嵌入式脚本时容易存在漏洞，攻击者可构造特殊PDF文件利用字体解析或内存破坏漏洞控制应用主进程。
     * 禁用后无法在ArkWeb中加载PDF。非文档办公类App建议禁用，引导用户使用外部应用打开PDF。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    disablePDFViewer?: boolean;
    /**
     * 决定是否禁用MathML。
     *
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    disableMathML?: boolean;
    /**
     * 判断是否禁用ServiceWorker，默认为false。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    disableServiceWorker?: boolean;
    /**
     * 判断NonProxyUDP是否关闭。
     *
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    disableNonProxyUDP?: boolean;
  }

  /**
   * Provides methods for controlling the web controller.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Provides methods for controlling the web controller.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Provides methods for controlling the web controller.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  class WebviewController {
    /**
     * A constructor used to create a WebviewController object.
     *
     * @param { string } [webTag] - specified the name of the web component, Empty by default.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    constructor(webTag?: string);

    /**
     * 设置ArkWeb内核版本。若系统不支持指定版本，则设置无效。该接口为全局静态API，须在调用initializeWebEngine前执行，若已加载任何Web组件，则该设置无效。
     *
     * > **说明：**
     * >
     * > - setActiveWebEngineVersion不支持在异步线程中调用。
     * >
     * > - setActiveWebEngineVersion全局生效，在整个APP生命周期中调用一次即可，不需要重复调用。
     *
     * @param {ArkWebEngineVersion} engineVersion - ArkWeb内核版本。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static setActiveWebEngineVersion(engineVersion: ArkWebEngineVersion): void;

    /**
     * 获取当前ArkWeb内核版本。
     *
     * @returns {ArkWebEngineVersion} 返回由[ArkWebEngineVersion]{@link @ohos.web.webview:webview.ArkWebEngineVersion}所定义的当
     *     前使用的ArkWeb内核版本。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static getActiveWebEngineVersion(): ArkWebEngineVersion;

    /**
     * 判断当前系统是否正在使用常青内核，即系统的最新内核。
     *
     * @returns {boolean} 表示是否正在使用常青内核。正在使用返回true，否则返回false。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    static isActiveWebEngineEvergreen(): boolean;

    /**
     * Initialize the web engine before loading the Web components.
     * This is a global static API that must be called on the UI thread, and it will have no effect if any
     * Web components are loaded.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Initialize the web engine before loading the Web components.
     * This is a global static API that must be called on the UI thread, and it will have no effect if any
     * Web components are loaded.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static initializeWebEngine(): void;

   /**
     * 设置Web组件是否使用HTTPDNS解析DNS。
     *
     * @param { SecureDnsMode } secureDnsMode - 使用HTTPDNS的模式。
     * @param { string } secureDnsConfig - HTTPDNS server的配置，必须是https协议并且只允许配置一个server。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    static setHttpDns(secureDnsMode: SecureDnsMode, secureDnsConfig: string): void;

    /**
     * 设置是否启用网页调试功能。默认情况下，网页调试功能是关闭的。详情请参考DevTools工具。
     *
     * 安全提示：启用网页调试功能可以让用户检查修改Web页面内部状态，存在安全隐患因此，建议在应用正式发布版本时，不要开启此功能。
     *
     * @param { boolean } webDebuggingAccess - 设置是否启用网页调试功能。<br>true表示启用网页调试功能。false表示不启用网页调试功能。<br>默认值：false。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static setWebDebuggingAccess(webDebuggingAccess: boolean): void;

    /**
     * After enable PrivateNetworkAccess feature, ArkWeb will send a CORS preflight request before issuing any
     * sub-resource private network requests to request explicit permission from the target server. After disable
     * PrivateNetworkAccess, ArkWeb will no longer check whether the private network request is legitimate.
     * By default, PrivateNetworkAccess feature is enabled.
     *
     * @param { boolean } enable - {@code true} enable the private network acccess check; {@code false} otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static enablePrivateNetworkAccess(enable: boolean): void;
    /**
     * Get whether PrivateNetworkAccess is enabled.
     *
     * @returns { boolean } True if enable the ability to check private network access else false.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static isPrivateNetworkAccessEnabled(): boolean;

    /**
     * 设置是否启用无线网页调试功能，默认不开启。
     *
     * 当没有指定端口port时，该接口等同于
     * [setWebDebuggingAccess]{@link webview.WebviewController.static setWebDebuggingAccess(webDebuggingAccess: boolean)}
     * 接口，ArkWeb会启动一个本地domain socket监听。
     * 当指定了端口port时，ArkWeb会启动一个tcp socket监听。这时可以无线调试网页。
     *
     * 由于小于1024的端口号作为熟知或系统端口，在操作系统上需要特权才能开启，因此port的取值必须大于1024，否则该接口会抛出异常。
     *
     * 安全提示：启用网页调试功能可以让用户检查修改Web页面内部状态，存在安全隐患，不建议在应用正式发布版本中启用。
     *
     * @param { boolean } webDebuggingAccess 设置是否启用网页调试功能。<br/>true表示开启网页调试功能，false表示关闭网页调试功能。
     * @param { number } port 表示 devtools 服务器的端口。指定端口后，将创建一个 TCP 服务器套接字，而不是 Unix 域套接字。
     * @throws { BusinessError } 17100023 - The port number is not within the allowed range.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static setWebDebuggingAccess(webDebuggingAccess: boolean, port: number): void;

    /**
     * 设置ArkWeb中已使用过的空闲socket的超时时间。
     *
     * @param { number } timeout - ArkWeb中已经使用过的空闲socket的超时时间。<br>取值范围：[30,300]，单位：s。<br>小于30时生效值为30，大于300时生效值为300。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    static setSocketIdleTimeout(timeout: number): void;

    /**
     * 启用检查网站安全风险的功能，非法和欺诈网站是强制启用的，不能通过此功能禁用。
     *
     * @param { boolean } enable - {@code true} 启用检查网站安全风险的功能， {@code false} 表示不启用检查网站安全风险的功能。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    enableSafeBrowsing(enable: boolean): void;

    /**
     * 获取当前网页是否启用了检查网站安全风险。
     *
     * @returns { boolean } true表示启用了检查网站安全风险的功能，false表示未启用检查网站安全风险的功能。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    isSafeBrowsingEnabled(): boolean;

    /**
     * 当前页面是否可前进，即当前页面是否有前进历史记录。
     *
     * @returns { boolean } 可以前进返回true，否则返回false。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    accessForward(): boolean;

    /**
     * 当前页面是否可后退，即当前页面是否有返回历史记录。
     *
     * @returns { boolean } 当前页面可以后退返回true,否则返回false。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    accessBackward(): boolean;

    /**
     * 当前页面是否可前进或者后退给定的step步。
     *
     * @param { number } step - 要跳转的步数，正数代表前进，负数代表后退。
     * @returns { boolean } 页面是否前进或后退。
     *     <br>返回true表示可以前进或者后退，返回false表示不可以前进或后退。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    accessStep(step: number): boolean;

    /**
     * 按照历史栈，前进一个页面。一般结合accessForward一起使用。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    forward(): void;

    /**
     * 按照历史栈，后退一个页面。一般结合[accessBackward]{@link webview.WebviewController.accessBackward}一起使用。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    backward(): void;

    /**
     * 删除所有前进后退记录。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    clearHistory(): void;

    /**
     * Let the Web active.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Let the Web active.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    onActive(): void;

    /**
     * Let the Web inactive.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Let the Web inactive.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    onInactive(): void;

    /**
     * 调用此接口通知Web组件刷新网页。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    refresh(): void;

    /**
     * 通知Web组件刷新网页，可以选择是否忽略缓存刷新。
     *
     * @param { boolean } ignoreCache - Web组件刷新网页，选择是否忽略缓存刷新。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 24 dynamic
     */
    refresh(ignoreCache: boolean): void;

    /**
     * 加载指定的数据。
     *
     * baseUrl与historyUrl同时为空的情况下：
     *
     * encoding如果为非base64（包括空值），则假定数据对安全URL字符范围内的八位字节使用ASCII编码，对该范围外的八位字节使用URL的标准%xx十六进制编码。
     * data数据必须使用base64编码或将内容中的任何#字符编码为%23。否则#将被视为内容的结尾而剩余的文本将被用作文档片段标识符。
     *

     * @param { string } data - 按照"base64"或者"URL"编码后的一段字符串。
     * @param { string } mimeType - 媒体类型（MIME）。
     * @param { string } encoding - 编码类型，具体为"base64"或者"URL"编码。
     * @param { string } [baseUrl] - 按照"base64"或者"URL"编码后的一段字符串。
     * @param { string } [historyUrl] - 用作历史记录所使用的URL。非空时，历史记录以此URL进行管理。当baseUrl为空时，此属性无效。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2048. [since 9 - 10]
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    loadData(data: string, mimeType: string, encoding: string, baseUrl?: string, historyUrl?: string): void;

    /**
     * 加载指定的URL。
     *
     * @param { string | Resource } url - 需要加载的URL。
     * @param { Array<WebHeader> } [headers] - URL的附加HTTP请求头。<br>默认值： []。 <br>传入undefined或null会抛出异常错误码401。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid.
     * @throws { BusinessError } 17100003 - Invalid resource path or file type.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    loadUrl(url: string | Resource, headers?: Array<WebHeader>): void;

    /**
     * 获取当前被点击区域的元素类型。
     *
     * > **说明：**
     * >
     * > 从API version11开始支持，从API version 18开始废弃。建议使用[getLastHitTest]{@link webview.WebviewController#getLastHitTest}替代。
     *
     * @returns { WebHitTestType } 被点击区域的元素类型。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead webview.WebviewController#getLastHitTest
     */
    getHitTest(): WebHitTestType;

    /**
     * 以Promise方式异步保存当前页面。
     *
     * @param { string } baseName - 生成的离线网页存储位置，该值不能为空。
     * @param { boolean } autoName - 决定是否自动生成文件名。<br>false表示按baseName的文件名存储，true表示根据当前URL自动生成文件名，并按baseName的文件目录存储。
     * @returns { Promise<string> } Promise实例，保存成功返回文件路径，保存失败返回null。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100003 - Invalid resource path or file type.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    storeWebArchive(baseName: string, autoName: boolean): Promise<string>;

    /**
     * 以回调方式异步保存当前页面。
     *
     * @param { string } baseName - 生成的离线网页存储位置，该值不能为空。
     * @param { boolean } autoName - 决定是否自动生成文件名。<br>false表示按baseName的文件名存储，true表示根据当前URL自动生成文件名，并按baseName的文件目录存储。
     * @param { AsyncCallback<string> } callback - 返回文件存储路径，保存网页失败会返回null。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100003 - Invalid resource path or file type.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    storeWebArchive(baseName: string, autoName: boolean, callback: AsyncCallback<string>): void;

    /**
     * 调整当前网页的缩放比例，[zoomAccess]{@link @ohos.web.WebAttribute#zoomAccess}需为true.
     *
     * @param { number } factor - 基于当前网页所需调整的相对缩放比例，入参要求大于0，
     *     当入参为1时为默认加载网页的缩放比例，入参小于1为缩小，入参大于1为放大。
     *     <br>取值范围：(0，100]。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100004 - Function not enabled.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    zoom(factor: number): void;

    /**
     * 调用此接口将当前网页进行放大，比例为25%。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100004 - Function not enabled.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    zoomIn(): void;

    /**
     * 调用此接口将当前网页进行缩小，比例为20%。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100004 - Function not enabled.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    zoomOut(): void;

    /**
     * 获取当前被点击区域的元素信息。
     *
     * > **说明：**
     * >
     * > 从API version11开始支持，从API version 18开始废弃。建议使用[getLastHitTest]{@link webview.WebviewController#getLastHitTest}替代。
     *
     * @returns { HitTestValue } 点击区域的元素信息。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead webview.WebviewController#getLastHitTest
     */
    getHitTestValue(): HitTestValue;

    /**
     * Gets the id for the current Web.
     * @returns { number } Returns the index value of the current Web component.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Gets the id for the current Web.
     * @returns { number } Returns the index value of the current Web component.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Gets the index value of the current Web component for the management of multiple Web components.
     * @returns { number } Returns the index value of the current Web component.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getWebId(): number;

    /**
     * 获取当前默认用户代理。
     *
     * @returns { string } 默认用户代理。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    getUserAgent(): string;

    /**
     * 获取当前网页的标题。
     *
     * @returns { string } 当前网页的标题。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    getTitle(): string;

    /**
     * 获取当前网页的页面高度。具体使用详情请参考[获取网页内容高度](docroot://web/web-getpage-height.md)。
     *
     * @returns { number } 当前网页的页面高度。单位：vp。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    getPageHeight(): number;

    /**
     * 按照历史栈，前进或者后退指定步长的页面，当历史栈中不存在对应步长的页面时，不会进行页面跳转。
     *
     * 前进或者后退页面时，直接使用已加载过的网页，无需重新加载网页。
     *
     * @param { number } step - 需要前进或后退的步长。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    backOrForward(step: number): void;

    /**
     * 使当前Web页面获取焦点。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    requestFocus(): void;

    /**
     * 创建Web消息端口。
     *
     * @param { boolean } isExtentionType - 是否使用扩展增强接口。<br>默认值：false。[since 10]
     * @returns { Array<WebMessagePort> } web消息端口列表。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed. [since 10]
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    createWebMessagePorts(isExtentionType?: boolean): Array<WebMessagePort>;

    /**
     * 发送Web消息端口到HTML。
     *
     * @param { string } name - 要发送的消息名称。
     * @param { Array<WebMessagePort> } ports - 要发送的消息端口。
     * @param { string } uri - 接收该消息的URI。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    postMessage(name: string, ports: Array<WebMessagePort>, uri: string): void;

    /**
     * 停止页面加载。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    stop(): void;

    /**
     * Registers the JavaScript object and method list.
     *
     * @param { object } jsObject - Application side JavaScript objects participating in registration. [since 9]
     * @param { string } name - The name of the registered object, which is consistent with the
     *     object name called in the window.
     * @param { Array<string> } methodList - The method of the application side JavaScript object participating
     *     in the registration.
     * @param { Array<string> } [asyncMethodList] - The async method of the application side JavaScript object
     *     participating in the registration. [since 12]
     * @param { string } [permission] - permission configuration defining web page URLs that can access JavaScriptProxy
     *     methods.
     *     The configuration can be defined at two levels, object level and method level. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    registerJavaScriptProxy(jsObject: object, name: string, methodList: Array<string>,
        asyncMethodList?: Array<string>, permission?: string): void;

    /**
     * 删除一个已注册的、具有给定名称的JavaScript对象。
     *
     * @param { string } name - 要删除的已注册JavaScript对象的名称。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100008 - Failed to delete JavaScriptProxy because it does not exist.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    deleteJavaScriptRegister(name: string): void;

    /**
     * 异步查找网页中所有匹配关键字'searchString'的内容并高亮，结果通过
     * [onSearchResultReceive]{@link @ohos.web.WebAttribute#onsearchresultreceive}异步返回。
     *
     * @param { string } searchString - 查找的关键字。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    searchAllAsync(searchString: string): void;

    /**
     * 清除所有通过[searchAllAsync]{@link webview.WebviewController#searchAllAsync}匹配到的高亮字符查找结果。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    clearMatches(): void;

    /**
     * 滚动到下一个匹配的查找结果并高亮。
     *
     * @param { boolean } forward - 从前向后或者逆向查找方式。<br>true表示从前向后查找，false表示从后向前查找。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    searchNext(forward: boolean): void;

    /**
     * 清除Web组件记录的SSL证书错误事件对应的用户操作行为。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    clearSslCache(): void;

    /**
     * 清除Web组件记录的客户端证书请求事件对应的用户操作行为。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    clearClientAuthenticationCache(): void;

    /**
     * 在当前显示页面的上下文中异步执行JavaScript脚本，脚本执行的结果将通过Promise方式返回。此方法必须在用户界面（UI）线程上使用 ，并且回调也将在用户界面（UI）线程上调用。
     *
     * > **说明：**
     * >
     * > - 跨导航操作（如loadUrl）时，JavaScript状态 将不再保留，例如，调用loadUrl前定义的全局变量和函数在加载的页面中将不存在。
     * >
     * > - 建议应用程序使用registerJavaScriptProxy来确保JavaScript状态能够在页面导航间保持。
     *
     * @param { string } script - JavaScript脚本。
     * @returns { Promise<string> } Promise实例，返回脚本执行的结果，执行失败返回null。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100003 - Calling a JS method that returns an empty ArrayBuffer via runJavaScript.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    runJavaScript(script: string): Promise<string>;

    /**
     * 在当前显示页面的上下文中异步执行JavaScript脚本，脚本执行的结果将通过异步回调方式返回。此方法必须在用户界面（UI）线程上使用 ，并且回调也将在用户界面（UI）线程上调用。
     *
     * > **说明：**
     * >
     * > - 跨导航操作（如loadUrl）时，JavaScript状态将不再保留。例如，调用loadUrl前定义的全局变量和函数在加载的页面中将不存在。
     * >
     * > - 建议应用程序使用registerJavaScriptProxy来确保JavaScript状态能够在页面导航间保持。
     *
     * @param { string } script - JavaScript脚本。
     * @param { AsyncCallback<string> } callback - 回调执行JavaScript脚本结果。JavaScript脚本若执行失败或无返回值时，返回null。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100003 - Calling a JS method that returns an empty ArrayBuffer via runJavaScript.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    runJavaScript(script: string, callback: AsyncCallback<string>): void;

    /**
     * 异步执行JavaScript脚本，并通过Promise方式返回脚本执行的结果。
     *
     * @param { string } script - JavaScript Script. [since 10 - 11]
     * @param { string | ArrayBuffer } script - JavaScript脚本。 [since 10 - 11]
     * @returns { Promise<JsMessageExt> } Promise实例，返回脚本执行的结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    runJavaScriptExt(script: string | ArrayBuffer): Promise<JsMessageExt>;

    /**
     * 异步执行JavaScript脚本，并通过回调方式返回脚本执行的结果。
     *
     * @param { string } script - JavaScript Script. [since 10 - 11]
     * @param { string | ArrayBuffer } script - JavaScript脚本。 [since 10 - 11]
     * @param { AsyncCallback<JsMessageExt> } callback - 回调执行JavaScript脚本结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    runJavaScriptExt(script: string | ArrayBuffer, callback: AsyncCallback<JsMessageExt>): void;

    /**
     * Rendering current Web page into Pdf data, return the result in async mode.
     *
     * @param { PdfConfiguration } configuration - Parameters required for creating a PDF file.
     * @param { AsyncCallback<PdfData> } callback - Callback used to return the data stream of an online PDF file.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    createPdf(configuration: PdfConfiguration, callback: AsyncCallback<PdfData>): void;

    /**
     * Rendering current Web page into Pdf data, return the result in promise mode.
     *
     * @param { PdfConfiguration } configuration - Parameters required for creating a PDF file.
     * @returns { Promise<PdfData> } Promise used to return the data stream of a web page.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    createPdf(configuration: PdfConfiguration): Promise<PdfData>;

    /**
     * 获取当前页面的URL地址。
     *
     * @returns { string } 当前页面的URL地址。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    getUrl(): string;

    /**
     * 将Webview的内容向上滚动半个视框大小或者跳转到页面最顶部，通过top入参控制。
     *
     * @param { boolean } top - 是否跳转到页面最顶部。<br>false表示将页面内容向上滚动半个视框大小，true表示跳转到页面最顶部。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    pageUp(top: boolean): void;

    /**
     * 将Webview的内容向下滚动半个视框大小或者跳转到页面最底部，通过bottom入参控制。
     *
     * @param { boolean } bottom - 是否跳转到页面最底部。<br>false时表示将页面内容向下滚动半个视框大小，true表示跳转到页面最底部。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    pageDown(bottom: boolean): void;

    /**
     * 获取当前页面的原始URL地址。
     *
     * @returns { string } 当前页面的原始URL地址。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    getOriginalUrl(): string;

    /**
     * 获取页面的favicon图标。
     *
     * @returns { image.PixelMap } Return the favicon bitmap of the current page.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    getFavicon(): image.PixelMap;

    /**
     * 为网页设置网络状态。该功能用于在JavaScript中设置window.navigator.onLine属性。
     *
     * @param { boolean } enable - 设置JavaScript中的`window.navigator.onLine`属性。<br>true表示设置JavaScript中的`
     *     window.navigator.onLine`属性为true，false表示设置JavaScript中的`window.navigator.onLine`属性为false。<br>默认值：true。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    setNetworkAvailable(enable: boolean): void;

    /**
     * 通过Promise方式异步查找当前页面是否存在图像。
     *
     * @returns { Promise<boolean> } Promise实例，返回查找页面是否存在图像。
     *     <br> true表示页面存在图像；false表示页面不存在图像。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    hasImage(): Promise<boolean>;

    /**
     * 通过Callback方式异步查找当前页面是否存在图像。
     *
     * @param { AsyncCallback<boolean> } callback - 返回查找页面是否存在图像。<br> true表示页面存在图像；false表示页面不存在图像。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    hasImage(callback: AsyncCallback<boolean>): void;

    /**
     * 获取当前Webview的历史信息列表。
     *
     * > **说明：**
     * >
     * > onLoadIntercept在加载开始的时候触发，该时刻还未生成历史节点，所以在onLoadIntercept中调用getBackForwardEntries
     * > 拿到的历史栈不包括当前正在加载中的跳转。
     *
     * @returns { BackForwardList } 当前Webview的历史信息列表。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    getBackForwardEntries(): BackForwardList;

    /**
     * 清除应用中的资源缓存文件，此方法将会清除同一应用中所有Webview的缓存文件。
     *
     * @param { boolean } clearRom - 设置为true时同时清除ROM和RAM中的缓存，设置为false时只清除RAM中的缓存。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    removeCache(clearRom: boolean): void;

    /**
     * 清除应用中的资源缓存文件，此方法将会清除同一应用中所有Webview的缓存文件。
     *
     * @param { boolean } clearRom - 设置为true时同时清除ROM和RAM中的缓存，设置为false时只清除RAM中的缓存。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 18 dynamic
     */
    static removeAllCache(clearRom: boolean): void;

    /**
     * Scrolls the page to the specified absolute position within a specified period.
     *
     * 在指定时间内，将页面滚动到指定的绝对位置。
     *
     * @param { number } x - 绝对位置的水平坐标，当传入数值为负数时，按照传入0处理。<br>单位：vp。
     * @param { number } y - 绝对位置的垂直坐标，当传入数值为负数时，按照传入0处理。<br>单位：vp。
     * @param { number } [duration] - 滚动动画时间。<br>单位：ms。<br>不传入为无动画，当传入数值为负数或传入0时，按照不传入处理。
     *     <br>传入null或undefined时会抛出异常错误码401。 [since 14]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    scrollTo(x: number, y: number, duration?: number): void;

    /**
     * 在指定时间内将页面滚动指定的偏移量。
     *
     * @param { number } deltaX - 水平偏移量，其中水平向右为正方向。<br>单位：vp。
     * @param { number } deltaY - 垂直偏移量，其中垂直向下为正方向。<br>单位：vp。
     * @param { number } duration - 滚动动画时间。<br>单位：ms。
     *     <br>不传入为无动画，当传入数值为负数或传入0时，按照不传入处理。
     *     <br>传入null或undefined时会抛出异常错误码401。 [since 14]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    scrollBy(deltaX: number, deltaY: number, duration?: number): void;

    /**
     * 按照指定速度模拟对页面的轻扫滚动动作。
     *
     * @param { number } vx - 轻扫滚动的水平速度分量，其中水平向右为速度正方向。<br>单位：vp/s。
     * @param { number } vy - 轻扫滚动的垂直速度分量，其中垂直向下为速度正方向。<br>单位：vp/s。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    slideScroll(vx: number, vy: number): void;

    /**
     * Serialize the access stack of the web, that is, the history of access.
     * @returns { Uint8Array } Web access stack after serialization.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Serialize the access stack of the web, that is, the history of access.
     * @returns { Uint8Array } Web access stack after serialization.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    serializeWebState() : Uint8Array;

    /**
     * 当前Webview从序列化数据中恢复页面状态历史记录。
     * 如果state过大，可能会导致异常。建议state大于512k时，放弃恢复页面状态历史记录。
     * @param { Uint8Array } state - 页面状态历史记录序列化数据。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    restoreWebState(state: Uint8Array) : void;

    /**
     * 对Web内核赋予自定义协议URL的跨域请求与fetch请求的权限。当Web在跨域fetch自定义协议URL时，该fetch请求可被
     * onInterceptRequest事件接口所拦截，从而开发者可以进一步处理该请求。建议在任何Web组件初始化之前调用该接口。
     *
     * @param { Array<WebCustomScheme> } schemes - 自定义协议配置，最多支持同时配置10个自定义协议。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100020 - Failed to register custom schemes. [since 12]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static customizeSchemes(schemes: Array<WebCustomScheme>): void;

    /**
     * 对Web内核赋予自定义协议URL的跨域请求与fetch请求的权限。当Web在跨域fetch自定义协议URL时，该fetch请求可被
     * onInterceptRequest事件接口所拦截，从而开发者可以进一步处理该请求。建议在任何Web组件初始化之前调用该接口。
     *
     * @param { Array<WebCustomScheme> } schemes - 自定义协议配置，最多支持同时配置10个自定义协议。
     * @param { boolean } lazyInitWebEngine - 为true时：接口内部跳过初始化WebEngine。
     *     临时存储注册的方案，当它实际被传递给WebEngine时，这些方案将被传递给WebEngine
     *     初始化。当false时：接口内部自动进行WebEngine初始化
     *     - 表示接口内部是否跳过初始化WebEngine。<br>true表示接口内部跳过初始化WebEngine，并将注册的Schemes暂存，当它真正初始化
     *     时，这些Schemes将传递给WebEngine。false表示接口内部自动进行WebEngine初始化。
     * @throws { BusinessError } 17100020 - Failed to register custom schemes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. The length of the schemes array is greater than 10.
     *     2. The character length of the scheme is greater than 32.
     *     3. The character in the scheme is not within the allowed range of lowercase English letters, numbers,
     *     and the symbols ".", "+", "-".
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 21 dynamic
     */
    static customizeSchemes(schemes: Array<WebCustomScheme>, lazyInitWebEngine: boolean): void;

    /**
     * 获取当前网站的证书信息。使用Web组件加载https网站，会进行SSL证书校验，该接口会通过Promise异步返回当前网站的X509格式证书。
     *
     * @returns { Promise<Array<cert.X509Cert>> } the promise of the current website's certificate.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getCertificate(): Promise<Array<cert.X509Cert>>;

    /**
     * 获取当前网站的证书信息。使用Web组件加载https网站，会进行SSL证书校验，该接口会通过AsyncCallback异步返回当前网站的X509格式证书。
     *
     * @param {AsyncCallback<Array<cert.X509Cert>>} callback - 通过AsyncCallback异步返回当前网站的X509格式证书。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getCertificate(callback: AsyncCallback<Array<cert.X509Cert>>): void;

    /**
     * 设置网页静音。
     *
     * @param { boolean } mute - 表示是否将网页设置为静音状态。<br>true表示将网页设置为静音状态，false表示将网页取消静音状态。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    setAudioMuted(mute: boolean): void;

    /**
     * 在预测到将要加载的页面之前调用，可提前下载页面所需的资源（包括：主资源和子资源），但不会执行网页JavaScript代码或呈现网页，以加快页面加载速度。
     *
     * > **说明：**
     * >
     * > - 下载的页面资源会缓存五分钟左右，超过这段时间Web组件会自动释放。
     * >
     * > - prefetchPage对302重定向页面同样正常预取。
     * >
     * > - 先执行prefetchPage再加载页面时，已预取的资源将直接从缓存中加载。
     * >
     * > - 连续prefetchPage多个URL只有第一个生效。
     * >
     * > - prefetchPage有时间限制，500ms内不能多次预取。
     *
     * @param { string } url - 预加载的URL。
     * @param { Array<WebHeader> } [additionalHeaders] - URL的附加HTTP请求头。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2048. [since 10 - 21]
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2*1024*1024. [since 22]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    prefetchPage(url: string, additionalHeaders?: Array<WebHeader>): void;

    /**
     * Prefetch the resources required by the page, but will not execute js or render the page.
     *
     * > **说明：**
     * >
     * > - 下载的页面资源会缓存五分钟左右，超过这段时间Web组件会自动释放。
     * > - prefetchPage对302重定向页面同样正常预取。
     * ?> - prefetchPage默认不缓存Cache-Control: no-store的资源，并且只允许在500ms内进行一次预取。
     * > - 可以通过prefetchOptions自定义预取行为，包括忽略Cache-Control: no-store和调整节流间隔。
     *
     * @param { string } url - 预加载的URL。
     * @param { Array<WebHeader> } [additionalHeaders] - URL的附加HTTP请求头。<br>默认值： []
     * @param { PrefetchOptions } [prefetchOptions] - 预取行为可以通过 prefetchOptions 进行自定义，包括忽略 Cache-Control: no-store 以及调整节流间隔。
     * @throws { BusinessError } 17100001 - Init error. The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2048. [since 21 - 21]
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2*1024*1024. [since 22]
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    prefetchPage(url: string, additionalHeaders?: Array<WebHeader>, prefetchOptions?: PrefetchOptions): void;

    /**
     * 预连接URL，在加载URL之前调用此API，对URL只进行DNS解析，socket建链操作，并不获取主资源子资源。
     *
     * @param { string } url - 预连接的URL。
     * @param { boolean } preconnectable - 是否进行预连接。如果preconnectable为true，则对URL进行DNS解析，socket建链预连接；如果preconnectable为false
     *     ，则不做任何预连接操作。
     * @param { number } numSockets - 要预连接的socket数。socket数目连接需要大于0，最多允许6个连接。
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2048. [since 10 - 21]
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2*1024*1024. [since 22]
     * @throws { BusinessError } 17100013 - The number of preconnect sockets is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    static prepareForPageLoad(url: string, preconnectable: boolean, numSockets: number): void;
    /**
     * Configure whether to enable automatic pre-connection to high-frequency URLs accessed during the application's
     * previous lifecycle after web initialization.
     *
     * @param { boolean } enabled - Enable if true, disable if false.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    static setAutoPreconnect(enabled: boolean): void;
    /**
     * ?Retrieve whether the automatic pre-connection feature is enabled?.
     *
     * @returns { boolean } Return true if enabled, false if disabled.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    static isAutoPreconnectEnabled(): boolean;

    /**
     * 设置自定义用户代理，会覆盖系统的用户代理。
     *
     * @param { string } userAgent - 用户自定义代理信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    setCustomUserAgent(userAgent: string): void;
    /**
     * 设置用于指定主机的User-Agent，最多支持20,000个主机。
     *
     * 为同一个 User-Agent 多次设置相同的 Host 列表，将会覆盖之前的设置。也就是说，如果您希望取消某些Host使用指定的User-Agent，
     * 您需要重新为该 User-Agent 设置 Host 列表。
     *
     * @param { string } userAgent - The User-Agent string.
     * @param { Array<string> } hosts - The hosts to which the User-Agent apply.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static setUserAgentForHosts(userAgent: string, hosts : Array<string>) : void;

    /**
     * Enable the UserAgent Client Hints.
     *
     * @param { boolean } enabled - UserAgent Client Hints will enabled when set true.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 24 dynamic
     */
    static setUserAgentClientHintsEnabled(enabled: boolean): void;

    /**
     * Get if the UserAgent Client Hints enabled.
     *
     * @returns { boolean } If UserAgent Client Hints was enabled.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 24 dynamic
     */
    static getUserAgentClientHintsEnabled(): boolean;

    /**
     * Sets the User-Agent metadata corresponding to the User-Agent.
     *
     * <p><strong>API Note</strong>:<br>
     * This User-Agent metadata will be used to populate the User-Agent client hints, They can provide the client's
     * branding and version information, the underlying  operating system's branding and major version, as well as
     * details about the underlying device.
     *
     * @param { string } userAgent - The User-Agent string.
     * @param { UserAgentMetadata } metaData - The UserAgentMetadata for the userAgent.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 24 dynamic
     */
    setUserAgentMetadata(userAgent: string, metaData: UserAgentMetadata): void;

    /**
     * Get the User-Agent metadata corresponding to the User-Agent.
     *
     * @param { string } userAgent - The User-Agent string.
     * @returns { UserAgentMetadata } The UserAgentMetadata for the userAgent.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 24 dynamic
     */
    getUserAgentMetadata(userAgent: string): UserAgentMetadata;

    /**
     * Set the default User-Agent for the application.
     *
     * <p><strong>API Note</strong>:<br>
     * Unlike setCustomUserAgent, which only takes effect in the current web context, the
     * priority for pages loaded in the web is as follows:
     * 1. The User-Agent set by setCustomUserAgent is used first.
     * 2. If not set, it will check whether a specific User-Agent has been
     *    assigned to the current page via setUserAgentForHosts.
     * 3. If no specific User-Agent is assigned, the application will fall back
     *    to using the User-Agent set by setAppCustomUserAgent.
     * 4. If the app's default User-Agent is also not specified, the web's default
     *    User-Agent will be used as the final fallback.
     * </p>
     *
     * @param { string } userAgent - The User-Agent string.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static setAppCustomUserAgent(userAgent: string) : void;

    /**
     * 获取自定义用户代理。
     *
     * @returns { string } 用户自定义代理信息。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getCustomUserAgent(): string;

    /**
     * 设置网络连接超时时间，使用者可通过Web组件中的onErrorReceive方法获取超时错误码。若未调用该接口则默认超时时间为30秒。
     *
     * @param { number } timeout - socket连接超时时间，以秒为单位，必须为大于0的整数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static setConnectionTimeout(timeout: number): void;

    /**
     * 为当前的Web组件设置一个WebDownloadDelegate，该delegate用来接收页面内触发的下载进度的委托。
     *
     * @param { WebDownloadDelegate } delegate - 用来接收下载进度的委托。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    setDownloadDelegate(delegate: WebDownloadDelegate): void;

    /**
     * 使用Web组件的下载能力来下载指定的URL，比如下载网页中指定的图片。
     *
     * @param { string } url - 下载地址。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2048. [since 11 - 21]
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2*1024*1024. [since 22]
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    startDownload(url: string): void;

    /**
     * 使用"POST"方法加载带有postData的URL。
     *
     * @param { string } url - 需要加载的URL。
     * @param { ArrayBuffer } postData - 使用"POST"方法传递数据。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    postUrl(url: string, postData: ArrayBuffer): void;

    /**
     * Creates a PrintDocumentAdapter instance to provide content for printing.
     *
     * @param { string } jobName - Name of the file to print.
     * @returns { print.PrintDocumentAdapter } **PrintDocumentAdapter** instance created.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 11 dynamic
     */
    createWebPrintDocumentAdapter(jobName: string): print.PrintDocumentAdapter;

    /**
     * 获取当前网页的安全级别。
     *
     * @returns { SecurityLevel } 当前网页的安全级别，具体值为NONE、SECURE、WARNING、DANGEROUS。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    getSecurityLevel(): SecurityLevel;

    /**
     * Gets the loading progress for the current page.
     *
     * @returns { number } 当前页面加载进度，取值范围[0, 100]
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    getProgress() : number;

    /**
     * 查询当前是否是隐私模式的Webview。
     *
     * @returns { boolean } 返回是否是隐私模式的Webview。
     *     <br>true表示是隐私模式，false表示不是隐私模式。
     *     <br>默认为false。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    isIncognitoMode(): boolean;

    /**
     * 设置网页是否允许滚动。
     *
     * @param { boolean } enable - 表示是否将网页设置为允许滚动。<br>true表示设置为允许滚动，false表示禁止滚动。<br>默认值：true。
     * @param { ScrollType } type - 网页可触发的滚动类型，支持缺省配置。
     *     <br> - enable为false时，表示禁止ScrollType类型的滚动，当ScrollType缺省时表示禁止所有类型网页滚动。
     *     <br> - enable为true时，ScrollType缺省与否，都表示允许所有类型的网页滚动。
     *     <br>传入null或undefined时会抛出异常错误码401。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    setScrollable(enable: boolean, type?: ScrollType): void;

    /**
     * 获取当前网页是否允许滚动。
     *
     * @returns { boolean } 当前网页是否允许滚动。
     *     <br>true为允许滚动，false为禁止滚动。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    getScrollable(): boolean;

    /**
     * Set whether print web page background.
     *
     * @param { boolean } enable - Whether to print the web page background.<br>The value **true** means to print the
     *     web page background, and **false** means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    setPrintBackground(enable: boolean): void;

    /**
     * Get whether print web page background.
     *
     * @returns { boolean } Whether the web page background is printed.
     *     <br>The value **true** indicates that the web page background is printed, and **false** indicates the opposite.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    getPrintBackground(): boolean;

    /**
     * 获取最后一次调用注入的对象的frame的URL。该方法应在 UI 线程上调用。
     *
     * @returns { string } 最后一次调用注入的对象的frame的URL。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    getLastJavascriptProxyCallingFrameUrl(): string;

    /**
     * 开启当前网页摄像头捕获。使用摄像头功能前请在module.json5中添加权限: ohos.permission.CAMERA，具体权限的添加方法请参考
     * [在配置文件中声明权限](docroot://security/AccessToken/declare-permissions.md#在配置文件中声明权限)。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    startCamera(): void;

    /**
     * 停止当前网页摄像头捕获。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    stopCamera(): void;

    /**
     * 关闭当前网页摄像头捕获。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    closeCamera(): void;

    /**
     * 恢复当前网页麦克风捕获。使用麦克风功能前请在module.json5中添加权限: ohos.permission.MICROPHONE，具体权限的添加方法请参考
     * [在配置文件中声明权限](docroot://security/AccessToken/declare-permissions.md#在配置文件中声明权限)。
     *
     * @throws { BusinessError } 17100001 - Init error. The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    resumeMicrophone(): void;

    /**
     * 暂停当前网页麦克风捕获。
     *
     * @throws { BusinessError } 17100001 - Init error. The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    pauseMicrophone(): void;

    /**
     * 停止当前网页麦克风捕获。
     *
     * @throws { BusinessError } 17100001 - Init error. The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    stopMicrophone(): void;

    /**
     * 获取上一次发送post message给应用的HTML的frame的url
     *
     * @returns { string } The URL of frame that last sent a postMessage.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getLastPostMessageURL(): string;

    /**
     * 暂停所有WebView的定时器。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static pauseAllTimers(): void;

    /**
     * 恢复从pauseAllTimers()接口中被暂停的所有的定时器。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static resumeAllTimers(): void;

    /**
     * 控制网页所有音视频停止。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    stopAllMedia(): void;

    /**
     * 控制网页被pauseAllMedia接口暂停的音视频继续播放。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    resumeAllMedia(): void;

    /**
     * 控制网页所有音视频暂停。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    pauseAllMedia(): void;

    /**
     * 控制网页所有全屏视频关闭。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    closeAllMediaPresentations(): void;

    /**
     * 查询当前网页音视频播放状态。
     *
     * @returns { MediaPlaybackState } 当前网页的播放状态，具体值为NONE、PLAYING、PAUSED、STOPPED。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    getMediaPlaybackState(): MediaPlaybackState;

    /**
     * Set web scheme handler for specific scheme. This is only used for related web component.
     *
     * @param { string } scheme - String value for url scheme.
     * @param { WebSchemeHandler } handler - Web scheme handler.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    setWebSchemeHandler(scheme: string, handler: WebSchemeHandler): void;

    /**
     * Clear all web scheme handlers for related web component.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    clearWebSchemeHandler(): void;

    /**
     * Set web scheme handler for specific scheme. This is used for service worker.
     *
     * @param { string } scheme - String value for url scheme.
     * @param { WebSchemeHandler } handler - Web scheme handler.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static setServiceWorkerWebSchemeHandler(scheme: string, handler: WebSchemeHandler): void;

    /**
     * Clear all web service worker scheme handlers.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static clearServiceWorkerWebSchemeHandler(): void;

    /**
     * 启用智能防跟踪功能。
     *
     * @param { boolean } enable 是否启用智能防跟踪功能。<br>true表示启用智能防跟踪功能，false表示不启用智能防跟踪功能。<br>默认值：false。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    enableIntelligentTrackingPrevention(enable: boolean): void;

    /**
     * 获取Web组件是否启用了智能防跟踪功能。
     *
     * @returns { boolean } Web组件是否启用了智能防跟踪功能。
     *     <br>true表示启用了智能防跟踪功能，false表示未启用智能防跟踪功能。
     *     <br>默认值：false。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isIntelligentTrackingPreventionEnabled(): boolean;

    /**
     * 添加智能防跟踪功能绕过的域名列表。
     *
     * @param { Array<string> } hostList - 绕过智能防跟踪功能的域名列表。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static addIntelligentTrackingPreventionBypassingList(hostList: Array<string>): void;

    /**
     * 删除通过addIntelligentTrackingPreventionBypassingList接口添加的部分域名列表。
     *
     * @param { Array<string> } hostList - 绕过智能防跟踪功能的域名列表。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static removeIntelligentTrackingPreventionBypassingList(hostList: Array<string>): void;

    /**
     * 删除通过addIntelligentTrackingPreventionBypassingList接口添加的所有域名。
     *
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static clearIntelligentTrackingPreventionBypassingList(): void;

    /**
     * 获取默认用户代理。
     *
     * @returns {string} ArkWeb默认User-Agent字符串。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 14 dynamic
     */
    static getDefaultUserAgent(): string;

    /**
     * 注册回调函数，开启
     * [应用接管网页媒体播放功能](docroot://reference/apis-arkweb/arkts-basic-components-web-attributes.md#enablenativemediaplayer12)
     * 后，当网页中有播放媒体时，触发注册的回调函数。
     *
     * 如果应用接管网页媒体播放功能未开启，则注册的回调函数不会被触发。
     *
     * @param { CreateNativeMediaPlayerCallback } callback - 接管网页媒体播放的回调函数。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    onCreateNativeMediaPlayer(callback: CreateNativeMediaPlayerCallback): void;

    /**
     * 设置开启网页全量绘制能力。仅在web初始化时设置。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static enableWholeWebPageDrawing(): void;

    /**
     * 获取网页全量绘制结果。
     * 
     * > **说明：**
     * >
     * > 此接口不支持并发调用。
     * >
     * > 仅支持对渲染进程上的资源进行截图：静态图片和文本。
     * >
     * > 如果页面有视频则截图时会显示该视频的占位图片，没有占位图片则显示空白。
     *
     * @param { SnapshotInfo } info - 全量绘制结果入参。
     * @param { AsyncCallback<SnapshotResult> } callback - 全量绘制回调结果。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    webPageSnapshot(info: SnapshotInfo, callback: AsyncCallback<SnapshotResult>): void;

    /**
     * 根据指定的请求信息和附加的HTTP请求头去预获取资源请求，存入内存缓存，并指定其缓存key和有效期，以加快加载速度。目前仅支持Content-Type为application/x-www-form-urlencoded的
     * POST请求。最多可以预获取6个POST请求。如果要预获取第7个，请通过
     * [clearPrefetchedResource]{@link webview.WebviewController.clearPrefetchedResource}清除不需要的POST请求缓存，否则会自动清除最早预获取的
     * POST缓存。如果要使用预获取的资源缓存，开发者需要在正式发起的POST请求的请求头中增加键值“ArkWebPostCacheKey”，其内容为对应缓存的cacheKey。
     *
     * 内存缓存中的资源由内核自动管理，当注入的资源过多导致内存压力过大，内核自动释放未使用的资源，应避免注入大量资源到内存缓存中。
     *
     * @param { RequestInfo } request - 预获取请求的信息。
     * @param { Array<WebHeader> } [additionalHeaders] - 预获取请求的附加HTTP请求头。 <br>传入undefined或null会抛出异常错误码401。
     * @param { string } [cacheKey] - 用于后续查询预获取资源缓存的key。仅支持字母和数字，未传入或传入空则取默认值url作为key。<br>传入undefined或null会抛出异常错误码401。
     * @param { number } [cacheValidTime] - 预获取资源缓存的有效期。<br>取值范围：(0, 2147483647]。<br>默认值：300s。 <br>单位：s。    <br>传入
     *     undefined或null会抛出异常错误码401。
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left
     *     unspecified. 2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2048. [since 12 - 21]
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2*1024*1024. [since 22]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static prefetchResource(request: RequestInfo, additionalHeaders?: Array<WebHeader>, cacheKey?: string,
                            cacheValidTime?: number): void;

    /**
     * 根据指定的缓存key列表清除对应的预获取资源缓存。入参中的缓存key必须是[prefetchResource]{@link webview.WebviewController.prefetchResource}指定预获取到的资
     * 源缓存key。
     *
     * @param { Array<string> } cacheKeyList - 用于后续查询预获取资源缓存的key。仅支持字母和数字，未传入或传入空则取默认值url作为key。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static clearPrefetchedResource(cacheKeyList: Array<string>): void;

    /**
     * Set render process mode of the ArkWeb.
     *
     * @param { RenderProcessMode } mode - The render process mode for the ArkWeb.
     *        Call {@link getRenderProcessMode} to get the ArkWeb rendering subprocess mode of the current device.
     *        The enumerated value **0** indicates the single render subprocess mode,
     *        and **1** indicates the multi-render subprocess mode.
     *        If an invalid number other than the enumerated value of **RenderProcessMode** is passed,
     *        the multi-render subprocess mode is used by default.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static setRenderProcessMode(mode: RenderProcessMode): void;

    /**
     * Get render process mode of the ArkWeb.
     *
     * @returns { RenderProcessMode } mode - The render process mode of the ArkWeb.
     *          Call {@link getRenderProcessMode} to get the ArkWeb rendering subprocess mode of the current device,
     *          with an enumeration value of 0 as a single subprocess mode and an enumeration value of 1 as a multi-subprocess mode.
     *          If the obtained value is not within the range of the RenderProcessMode enumeration value,
     *          it defaults to the multi-rendering subprocess mode.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static getRenderProcessMode(): RenderProcessMode;

    /**
     * Destroy the rendering process.
     * Calling this interface will actively destroy the associated rendering process.
     * If the rendering process has not been started or destroyed, it has no effect.
     * In addition, destroying the rendering process will also affect all other instances associated with
     * the rendering process.
     *
     * @returns { boolean } true if it was possible to terminate the render process, otherwise false.
     *         Calling this on a not yet started, or an already terminated render will have no effect.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    terminateRenderProcess(): boolean;

    /**
     * 预编译JavaScript生成字节码缓存或根据提供的参数更新已有的字节码缓存。
     * 接口通过提供的文件信息、E-Tag响应头和Last-Modified响应头判断是否需要更新已有的字节码缓存。
     *
     * @param { string } url - 本地JavaScript文件对应的网络地址，即业务网页请求该文件的服务器版本时使用的网络地址。网络地址仅支持http或https协议，长度不超过2048。如果该网络地址对应的缓存
     *     失效，则业务网页将通过网络请求对应的资源。
     * @param { string | Uint8Array } script - 本地JavaScript的文本内容。内容不能为空。
     * @param { CacheOptions } cacheOptions - 用于控制字节码缓存更新。
     * @returns { Promise<number> } 生成字节码缓存的错误码，0表示无错误，-1表示内部错误。
     * @throws { BusinessError } 401 - Invalid input parameter.
     *     Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    precompileJavaScript(url: string, script: string | Uint8Array, cacheOptions: CacheOptions): Promise<number>;

    /**
     * 设置主机域名解析后的IP地址。
     *
     * @param { string } hostName - 要添加DNS记录的主机域名。
     * @param { string } address - 主机域名解析地址（支持IPv4，IPv6）。
     * @param { number } aliveTime - 缓存有效时间（秒）。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static setHostIP(hostName: string, address: string, aliveTime: number): void;

    /**
     * 清除指定主机域名解析后的IP地址。
     *
     * @param { string } hostName - 要清除DNS记录的主机域名。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static clearHostIP(hostName: string): void;

    /**
     * 预热ServiceWorker，以提升首屏页面的加载速度（仅限于会使用ServiceWorker的页面）。在加载URL之前调用此API。
     *
     * @param { string } url - 需要预热ServiceWorker的URL。
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2048. [since 12 - 21]
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2*1024*1024. [since 22]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static warmupServiceWorker(url: string): void;

    /**
     * 将本地离线资源注入到内存缓存中，以提升页面首次启动速度。
     * 内存缓存中的资源由内核自动管理，当注入的资源过多导致内存压力过大，内核自动释放未使用的资源，应避免注入大量资源到内存缓存中。
     * 正常情况下，资源的有效期由提供的Cache-Control或Expires响应头控制其有效期，默认的有效期为86400秒，即1天。
     * 资源的MIMEType通过提供的Content-Type响应头配置，Content-Type需符合标准，否则无法正常使用，MODULE_JS必须提供有效的MIMEType，其他类型可不提供。
     * 以此方式注入的资源，仅支持通过HTML中的标签加载。如果业务网页中的script标签使用了crossorigin属性，则必须在接口的responseHeaders参数中设置Cross-Origin响应头的值为anonymous
     * 或use-credentials。
     * 当调用`webview.WebviewController.SetRenderProcessMode(webview.RenderProcessMode.MULTIPLE)`接口后，应用会启动多渲染进程模式，此接口在此场景下不
     * 会生效。
     *
     * @param { Array<OfflineResourceMap> } resourceMaps - 本地离线资源配置对象，单次调用最大支持注入30个资源，单个资源最大支持10Mb。
     * @throws { BusinessError } 401 - Parameter error.
     *     Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2048. [since 12 - 21]
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2*1024*1024. [since 22]
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    injectOfflineResources(resourceMaps: Array<OfflineResourceMap>): void;

    /**
     * 启用广告过滤功能。
     *
     * @param { boolean } enable 是否启用广告过滤功能。<br>true表示启用广告过滤功能，false表示取消广告过滤功能。<br>默认值：false。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Parameter string is too long. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    enableAdsBlock(enable: boolean): void;

    /**
     * 查询广告过滤功能是否开启。
     *
     * @returns { boolean } 返回true代表广告过滤功能已开启，返回false代表广告过滤功能关闭。
     *     <br>默认值：false。
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isAdsBlockEnabled(): boolean;

    /**
     * 查询当前网页是否开启广告过滤功能。
     *
     * @returns { boolean } 返回true代表此网页已开启广告过滤，返回false代表当前网页已关闭广告过滤。
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isAdsBlockEnabledForCurPage(): boolean;

    /**
     * 获取ArkWeb对应Surface的ID，此ID可用于网页截图。
     * 
     * > **说明：**
     * >
     * > 仅Web组件渲染模式是ASYNC_RENDER时有效。getSurfaceId需要在Web组件初始化之后才能获取到值。
     *
     * @returns { string } ArkWeb持有Surface的ID。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    getSurfaceId(): string;

    /**
     * Set the URL trust list for the ArkWeb.
     * When the URL trust list has been set, only the URLs in the list can be accessed.
     *
     * @param { string } urlTrustList - the URL trust list in JSON format.
     *     An empty string means that all URLs are allowed to access.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Parameter string is too long. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    setUrlTrustList(urlTrustList: string): void;

    /**
     * Sets the URL trust list for the ArkWeb.
     *
     * <p><strong>API Note</strong>:<br>
     * When the URL trust list is set, only the URLs in the list can be accessed.
     *
     * Example of the urlTrustList:
     *
     * {
     *   "UrlPermissionList": [
     *     {
     *       "scheme": "https",
     *       "host": "www.example1.com",
     *       "port": 443,
     *       "path": "pathA/pathB"
     *     },
     *     {
     *       "scheme": "http",
     *       "host": "*.example2.com",
     *       "port": 80,
     *       "path": "test1/test2/test3"
     *     }
     *   ]
     * }
     * </p>
     *
     * @param { string } urlTrustList - The URL trust list in JSON format.
     *     An empty string means all URLs are allowed.
     * @param { boolean } allowOpaqueOrigin - If true, loading of opaque origin URLs (e.g., javascript, data) is
     *     allowed. If false, it is not allowed.
     * @param { boolean } supportWildcard - If true, wildcard matching is supported (e.g., *.example.com matches all
     *     subdomains). If false, wildcard matching is not supported.
     * @throws { BusinessError } 401 Parameter error, possible causes:
     *     1. Mandatory parameters are left unspecified
     *     2. JSON string exceeds 10MB limit
     *     3. JSON parsing failed (syntax errors, etc.)
     *     4. UrlPermissionList field is missing
     *     5. URL rule validation failed:
     *        - scheme must be http or https
     *        - host cannot be empty
     *        - port must be between 0-65535
     *        - path length cannot exceed 65536 characters
     * @throws { BusinessError } 17100001 - Initialization error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 24 dynamic
     */
    setUrlTrustList(urlTrustList: string, allowOpaqueOrigin: boolean, supportWildcard: boolean): void;

    /**
     * 设置一个路径列表，当file协议访问该路径列表中的资源时，允许跨域访问本地文件，也允许跨域访问其他在线资源。此外，当设置了路径列表时，file协议仅允许访问路径列表中的资源（
     * [fileAccess](docroot://reference/apis-arkweb/arkts-basic-components-web-attributes.md#fileaccess)的行为将会被此接口行为覆盖）。
     *
     * setPathAllowingUniversalAccess放开目录的跨域访问限制是一个高风险操作。基于最小权限原则，当前el1，el2放开的路径是固定的，路径列表中的路径应符合以下任一路径格式：
     *
     * 1.应用文件目录的子目录（应用文件目录通过Ability Kit中的
     * [Context.filesDir](docroot://reference/apis-ability-kit/js-apis-inner-application-context.md#属性)获取），例如：
     *
     * * /data/storage/el2/base/files/example
     * * /data/storage/el2/base/haps/entry/files/example
     *
     * 2.应用资源目录及其子目录（应用资源目录通过Ability Kit中的
     * [Context.resourceDir](docroot://reference/apis-ability-kit/js-apis-inner-application-context.md#属性)获取），例如：
     *
     * * /data/storage/el1/bundle/entry/resources/resfile
     * * /data/storage/el1/bundle/entry/resources/resfile/example
     *
     * 3.从API version 21开始，还包括了应用缓存目录及其子目录（应用缓存目录通过Ability Kit中的
     * [Context.cacheDir](docroot://reference/apis-ability-kit/js-apis-inner-application-context.md#属性)获取），例如：
     *
     * * /data/storage/el2/base/cache
     * * /data/storage/el2/base/haps/entry/cache/example
     * * 设置的目录路径中，不允许包含cache/web，否则会抛出异常码401。如果设置目录路径是cache，cache/web也不允许访问。
     *
     * 4.从API version 21开始，还包括了应用临时目录及其子目录（应用临时目录通过Ability Kit中的
     * [Context.tempDir](docroot://reference/apis-ability-kit/js-apis-inner-application-context.md#属性)获取），例如：
     *
     * * /data/storage/el2/base/temp
     * * /data/storage/el2/base/haps/entry/temp/example
     *
     * 当路径列表中有其中一个路径不满足以上条件之一，则会抛出异常码401，并且设置路径列表失败。当设置的路径列表为空，则file协议可访问范围以
     * [fileAccess](docroot://reference/apis-arkweb/arkts-basic-components-web-attributes.md#fileaccess)的行为为准。
     *
     * @param { Array<string> } pathList - 路径列表
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified.
     *     <br>2. Parameter string is too long.
     *     <br>3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    setPathAllowingUniversalAccess(pathList: Array<string>): void;

    /**
     * 是否开启默认错误页，开启后onOverrideErrorPage会在页面发生错误的时候进行回调
     * @param { boolean } enable - 是否开启
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    setErrorPageEnabled(enable: boolean): void;

    /**
     * Get whether default error page feature is enabled.
     *
     * @returns { boolean } - True if enable the default error page feature; else false.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    getErrorPageEnabled(): boolean;

    /**
     * 根据指定的内存压力等级，主动清理Web组件占用的缓存。
     *
     * @param { PressureLevel } level - 需要清理内存的内存等级。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified.
     *     <br>2. Parameter string is too long.
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    static trimMemoryByPressureLevel(level: PressureLevel): void;

    /**
     * 开启Web组件前进后退缓存功能，通过参数指定是否允许使用特定的页面进入前进后退缓存。
     * 默认设置为禁用。
     *
     * @param { BackForwardCacheSupportedFeatures } features - 允许使用特定的页面进入前进后退缓存中。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    static enableBackForwardCache(features: BackForwardCacheSupportedFeatures): void;

    /**
     * 可以设置Web组件中前进后退缓存的相关选项。
     *
     * @param { BackForwardCacheOptions } options - 用来控制Web组件前进后退缓存相关选项。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    setBackForwardCacheOptions(options: BackForwardCacheOptions): void;

    /**
     * 获取网页当前的滚动偏移量（包含过滚动偏移量）。
     *
     * @returns { ScrollOffset } 网页当前的滚动偏移量（包含过滚动偏移量）。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 13 dynamic
     */
    getScrollOffset(): ScrollOffset;

    /**
     * 将页面滚动指定的偏移量，返回值表示此次滚动是否执行成功。
     *
     * @param { number } deltaX - 水平偏移量，其中水平向右为正方向。 <br>单位：vp。
     * @param { number } deltaY - 垂直偏移量，其中垂直向下为正方向。 <br>单位：vp。
     * @returns { boolean } true表示当前网页可以滑动，false表示当前网页不可以滑动。
     *     <br>默认为false。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    scrollByWithResult(deltaX: number, deltaY: number): boolean;

    /**
     * 获取上一次被点击区域的元素信息。
     *
     * @returns { HitTestValue } 点击区域的元素信息。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 18 dynamic
     */
    getLastHitTest(): HitTestValue;

    /**
     * 获取webview controller是否绑定一个web组件
     * @returns { ControllerAttachState } 绑定状态
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    getAttachState(): ControllerAttachState;

    /**
     * 注册controller绑定状态变化的回调
     *
     * @param { 'controllerAttachStateChange' } type the event of controller attach state change.
     * @param { Callback<ControllerAttachState> } callback Callback used to return the controller attach state.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    on(type: 'controllerAttachStateChange', callback: Callback<ControllerAttachState>): void;

    /**
     * 取消注册controller绑定状态变化的回调
     *
     * @param { 'controllerAttachStateChange' } type the event of controller attach state change.
     * @param { Callback<ControllerAttachState> } callback Callback used to return the controller attach state.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    off(type: 'controllerAttachStateChange', callback?: Callback<ControllerAttachState>): void;

    /**
     * Wait for the controller to attach a web component until timeout.
     *
     * @param { number } timeout - 异步等待时长。取值范围: [0, 65535]单位: ms
     * @returns { Promise<ControllerAttachState> } Promise used to return the state of attach.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    waitForAttached(timeout: number): Promise<ControllerAttachState>;

    /**
     * 获取网页当前的滚动偏移量（不包含过滚动偏移量）。
     *
     * @returns { ScrollOffset } 网页当前的滚动偏移量（不包含过滚动偏移量）。
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    getPageOffset(): ScrollOffset;

    /**
     * 设置Web网页可视视口底部避让高度。
     * 
     * > **说明：**
     * >
     * > - avoidHeight有效值区间为[0, Web组件高度]，超出有效值区间时取边界值。
     * >
     * > - 该接口高度设置为非0时，Web组件位置和尺寸不变，可视视口向上避让avoidHeight，表现为Web网页内容抬升avoidHeight。该接口一般用于应用自定义网页底部避让区，不建议和点击web网页可编辑区拉起键盘的
     * > 场景同时使用。同时使用时，键盘弹起避让模式将使用OVERLAYS_CONTENT。
     * >
     * > - 该接口高度设置为0时，Web网页内容可恢复，键盘弹起避让模式将使用
     * > [keyboardAvoidMode()](docroot://reference/apis-arkweb/arkts-basic-components-web-attributes.md#keyboardavoidmode12)
     * > 声明的模式。
     *
     * @param { number } avoidHeight - 设置Web网页可视视口底部避让高度。<br>单位：vp<br>合法取值范围：0~Web组件高度<br>非法值设置行为：小于0取值为0，大于Web组件高度取值为
     *     Web组件高度。
     * @throws { BusinessError } 17100001 - Init error. The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 801 - This functionality is not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    avoidVisibleViewportBottom(avoidHeight: number): void;

    /**
     * 获取页面首屏加载预测信息（详细说明见[BlanklessInfo]{@link @ohos.web.webview:webview.BlanklessInfo}），并开始本次加载过渡帧生成，应用根据此信息确定是否需要启用无白屏
     * 加载。必须与[setBlanklessLoadingWithKey]{@link webview.WebviewController.setBlanklessLoadingWithKey}接口配套使用，并且必须在触发加载页面的
     * 接口之前或在`onLoadIntercept`中调用。需在`WebViewController`与Web组件绑定后才能使用。
     *
     * > **说明：**
     * >
     * > - 持久缓存容量：默认大小为30MB（约30页），可以通过接口
     * > [setBlanklessLoadingCacheCapacity]{@link webview.WebviewController.setBlanklessLoadingCacheCapacity}设置缓存容量，具体见该
     * > 接口说明。超过容量时根据LRU（Least Recently Used，淘汰不常用缓存的策略）机制更新缓存。自动清理超过7天的持久缓存数据，缓存清除后第三次加载页面开始有优化效果。
     * >
     * > - 如果发现快照相似度（即[BlanklessInfo]{@link @ohos.web.webview:webview.BlanklessInfo}中的similarity）极低，请确认key值是否传递正确。
     * >
     * > - 调用本接口后，将启用页面加载快照检测及生成过渡帧计算，会产生一定的资源开销。
     * >
     * > - 启用无白屏加载的页面会带来一定的资源开销，开销的大小与Web组件的分辨率相关。假设分辨率的宽度和高度分别为：w, h。页面在打开阶段会增加峰值内存，增加约12 * w * h B，页面打开后内存回收，不影响稳态内存。增
     * > 加固态应用缓存的大小，每个页面增加的缓存约w * h / 10 B，缓存位于应用缓存的位置。
     * >
     * > - 请在module.json5中添加权限: ohos.permission.INTERNET和ohos.permission.GET_NETWORK_INFO，具体权限的添加方法请参考
     * > [在配置文件中声明权限](docroot://security/AccessToken/declare-permissions.md#在配置文件中声明权限)。
     *
     * @param { string } key - 唯一标识本页面的key值。<br>合法取值范围：非空，长度不超过2048个字符。<br>设置非法值时不生效。
     * @returns { BlanklessInfo } 页面首屏加载预测信息，主要包括首屏相似度预测值，首屏加载耗时预测值，应用需根据此信息来决策是否启用无白屏加载插帧。
     * @throws { BusinessError } 801 This functionality is not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    getBlanklessInfoWithKey(key: string) : BlanklessInfo;

    /**
     * 设置无白屏加载是否启用，本接口必须与[getBlanklessInfoWithKey]{@link webview.WebviewController.getBlanklessInfoWithKey}接口配套使用。
     *
     * > **说明：**
     * >
     * > - 需在触发页面加载的接口之后调用，其他约束同[getBlanklessInfoWithKey]{@link webview.WebviewController.getBlanklessInfoWithKey}。
     * >
     * > - 页面加载必须在调用本接口的组件中进行。
     * >
     * > - 当相似度较低时，系统将判定为跳变过大，启用插帧会失败。
     * >
     * > - 请在module.json5中添加权限: ohos.permission.INTERNET和ohos.permission.GET_NETWORK_INFO，具体权限的添加方法请参考
     * > [在配置文件中声明权限](docroot://security/AccessToken/declare-permissions.md#在配置文件中声明权限)。
     *
     * @param { string } key - 唯一标识本页面的key值。必须与getBlanklessInfoWithKey接口的key值相同。<br>合法取值范围：非空，长度不超过2048个字符。<br>非法值设置行为：返
     *     回错误码WebBlanklessErrorCode，方案不生效。
     * @param { boolean } is_start - 是否启用开始插帧。true：启用，false：不启用。<br>传入undefined或null时为false。
     * @returns { WebBlanklessErrorCode } 返回接口调用是否成功，具体见
     *     [WebBlanklessErrorCode]{@link @ohos.web.webview:webview.WebBlanklessErrorCode}定义。
     * @throws { BusinessError } 801 This functionality is not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    setBlanklessLoadingWithKey(key: string, is_start: boolean) : WebBlanklessErrorCode;

    /**
     * 清除指定key值页面无白屏优化缓存，本接口只清除缓存。
     * 在小程序或Web应用场景中，当页面加载时内容变化显著，可能会出现一次明显的跳变。若对此跳变有所顾虑，可使用该接口清除页面缓存。
     *
     * > **说明：**
     * >
     * > - 清除之后的页面，需在第三次加载页面时才会产生优化效果。
     *
     * @param { Array<string> } [keys] - 清除Blankless优化方案页面的key值列表，key值为
     *     [getBlanklessInfoWithKey]{@link webview.WebviewController.getBlanklessInfoWithKey}中指定过的。<br>默认值：所有Blankless优化
     *     方案缓存的页面key列表。<br>合法取值范围：长度不超过2048，key列表长度<=100。key和加载页面时输入给ArkWeb的相同。<br>非法值设置行为：传入undefined/null会抛出异常错误码401；
     *     key长度超过2048时该key不生效；长度超过100时，取前100个；当为空时，使用默认值。
     * @throws { BusinessError } 801 This functionality is not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static clearBlanklessLoadingCache(keys?: Array<string>) : void;

    /**
     * 设置无白屏加载方案的持久化缓存容量，返回实际生效值。当接口没有显式调用时，默认缓存容量为30MB。当实际缓存超过容量时，将采用淘汰不常用的过渡帧的方式清理。
     *
     * @param { number } capacity - 设置持久化缓存设置，单位MB，最大设置不超过100MB。<br>合法取值范围：[0, 100]，当设置为0时，无缓存空间，则功能全局不开启。<br>非法值设置行为：小于
     *     0时生效值为0，大于100时生效值为100。
     * @returns { number } 返回实际生效的容量值，范围0~100。
     *     <br>小于0时生效值为0，大于100时生效值为100。
     * @throws { BusinessError } 801 This functionality is not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static setBlanklessLoadingCacheCapacity(capacity: number) : number;

    /**
     * Triggers frame interpolation and sets frame interpolation parameters. This API must be used in pair with the
     * getBlanklessInfoWithKey API.
     *
     * Device behavior differences: Only the mobile phone is supported. For other devices, 801 is returned.
     *
     * @param { string } key - Key value that uniquely identifies the current page.
     *     <br>Value range: (0, 2048]
     *     <br>The key value must be the same as that of getBlanklessInfoWithKey.
     * @param { BlanklessLoadingParam } param - The blankless loading parameter.
     *     <br>None
     * @returns { WebBlanklessErrorCode } WebBlanklessErrorCode.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    setBlanklessLoadingWithParams(key: string,
      param: BlanklessLoadingParam) : WebBlanklessErrorCode;

    /**
     * 设置web组件的销毁模式
     * @param { WebDestroyMode } mode web组件销毁模式，默认NORMAL_MODE
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static setWebDestroyMode(mode: WebDestroyMode): void;

    /**
     * Set the site isolation mode.
     *
     * @param { SiteIsolationMode } mode The site isolation mode of the application,
     *     default value depends on different devices type.
     * @throws { BusinessError } 17100001 - Init error. Possible causes:
     *     1. Site Isolation mode is already set by the developer.
     *     2. Site Isolation mode cannot be strict in single-render-process mode.
     *     3. Site Isolation mode cannot be changed while Secure Shield mode is active.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    static setSiteIsolationMode(mode: SiteIsolationMode): void;

    /**
     * Get the site isolation mode.
     *
     * @returns { SiteIsolationMode } The site isolation mode of the application.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    static getSiteIsolationMode(): SiteIsolationMode;

    /**
     * Set the WebSoftKeyboardBehaviorMode to decide whether the keyboard will be shown/hidden automatically in particular 
     * situation, for example, when web is inactive or active.
     *
     * @param { WebSoftKeyboardBehaviorMode } mode - The WebSoftKeyboardBehaviorMode of this web.
     * @throws { BusinessError } 17100001 - Init error. The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 dynamic
     */
    setSoftKeyboardBehaviorMode(mode: WebSoftKeyboardBehaviorMode): void;

    /**
     * 在Web页面场景，设置全局滚动条模式。不显式调用时，默认为
     * [ScrollbarMode.OVERLAY_LAYOUT_SCROLLBAR]{@link @ohos.web.webview:webview.ScrollbarMode}（非常驻滚动条）。
     *
     * > **说明：**
     * >
     * > - 根据滚动条模式，改变当前应用所有web滚动条模式为常驻滚动条或非常驻滚动条。
     * >
     * > - 若[forceDisplayScrollBar]{@link @ohos.web.WebAttribute#forcedisplayscrollbar}
     * > 接口与当前接口同时设置，forceDisplayScrollBar接口设置不生效。
     * >
     * > - 该接口需要在WebViewController绑定Web组件之前调用。
     *
     * @param { ScrollbarMode } scrollbarMode - 滚动条模式。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    static setScrollbarMode(scrollbarMode: ScrollbarMode): void;

    /**
     * 启用应用程序禁用PDFViewer等一些功能，以提高Web应用程序的安全级别
     *
     * @param { SecurityParams } securityParams - 参数表示将禁用支持的选项或项目。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    static enableAdvancedSecurityMode(securityParams: SecurityParams): void;
  }

  /**
   * Indicates the keyboard behavior mode of the web component, default value is DEFAULT.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  enum WebSoftKeyboardBehaviorMode {
    /**
     *  Soft keyboard will be hidden or shown automatically when web comes into pause/continue or blur/focus state
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 dynamic
     */
    DEFAULT = 0,

    /**
     *  Soft keyboard will not be hidden or shown automatically when web comes into pause/continue state
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 dynamic
     */
    DISABLE_AUTO_KEYBOARD_ON_ACTIVE = 1
  }
  /**
   * Defines the state for download.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 11 dynamic
   */
  enum WebDownloadState {
    /**
     * The web download is in progress.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    IN_PROGRESS = 0,

    /**
     * The web download has been completed.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    COMPLETED = 1,

    /**
     * The web download was canceled.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    CANCELED = 2,

    /**
     * The web download was interrupted.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    INTERRUPTED = 3,

    /**
     * The web download is pending.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    PENDING = 4,

    /**
     * The web download has been paused.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    PAUSED = 5,

    /**
     * Unknown state.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    UNKNOWN = 6
  }

  /**
   * 下载任务的错误码。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 11 dynamic
   */
  enum WebDownloadErrorCode {
    /**
     * 未知的错误。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    ERROR_UNKNOWN = 0,

    /**
     * 常规文件操作失败。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_FAILED = 1,

    /**
     * 没有权限访问文件。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_ACCESS_DENIED = 2,

    /**
     * 磁盘没有足够的空间。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_NO_SPACE = 3,

    /**
     * 文件名过长。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_NAME_TOO_LONG = 5,

    /**
     * 文件太大。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_TOO_LARGE = 6,

    /**
     * 出现了一些临时问题，例如内存不足、文件正在使用以及同时打开的文件过多。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_TRANSIENT_ERROR = 10,

    /**
     * 由于某些本地策略，文件被阻止访问。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_BLOCKED = 11,

    /**
     * 当尝试恢复下载时，发现文件不够长，可能该文件已不存在。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_TOO_SHORT = 13,

    /**
     * 哈希不匹配。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_HASH_MISMATCH = 14,

    /**
     * 文件已存在。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_SAME_AS_SOURCE = 15,

    /**
     * 一般网络错误。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    NETWORK_FAILED = 20,

    /**
     * 网络超时。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    NETWORK_TIMEOUT = 21,

    /**
     * 网络断开连接。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    NETWORK_DISCONNECTED = 22,

    /**
     * 服务器关闭。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    NETWORK_SERVER_DOWN = 23,

    /**
     * 无效的网络请求，可能重定向到不支持的方案或无效的URL。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    NETWORK_INVALID_REQUEST = 24,

    /**
     * 服务器返回了一个一般性错误。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SERVER_FAILED = 30,

    /**
     * 服务器不支持范围请求。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SERVER_NO_RANGE = 31,

    /**
     * 服务器没有请求的数据。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SERVER_BAD_CONTENT = 33,

    /**
     * 服务器不允许下载该文件。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SERVER_UNAUTHORIZED = 34,

    /**
     * 服务器证书错误。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SERVER_CERT_PROBLEM = 35,

    /**
     * 服务器访问被禁止。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SERVER_FORBIDDEN = 36,

    /**
     * 无法访问服务器。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SERVER_UNREACHABLE = 37,

    /**
     * 接收到的数据与内容长度不匹配。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SERVER_CONTENT_LENGTH_MISMATCH = 38,

    /**
     * 发生意外的跨站重定向。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SERVER_CROSS_ORIGIN_REDIRECT = 39,

    /**
     * 用户取消了下载。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    USER_CANCELED = 40,

    /**
     * 用户关闭了应用。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    USER_SHUTDOWN = 41,

    /**
     * 应用发生了崩溃。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    CRASH = 50
  }

  /**
   * 表示下载任务，您可以使用此对象来操作相应的下载任务。
   * 当前WebDownloadItem支持的下载文件名最长长度为255字节。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 11 dynamic
   */
  class WebDownloadItem {
    /**
     * 获取下载任务的唯一ID。
     *
     * @returns { string } - 下载任务的唯一ID。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getGuid(): string;

    /**
     * 获取下载的速度，单位：字节每秒。
     *
     * @returns { number } - 下载的速度（字节每秒）。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getCurrentSpeed(): number;

    /**
     * 获取下载的进度，100代表下载完成。
     *
     * @returns { number } - 下载完成的进度，100代表下载完成，-1代表进度未知。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getPercentComplete(): number;

    /**
     * 获取待下载文件的总长度。
     *
     * @returns { number } - 待下载文件的总长度，-1代表总大小未知。单位：字节。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getTotalBytes(): number;

    /**
     * 获取下载的状态。
     *
     * @returns { WebDownloadState } - 下载的状态。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getState(): WebDownloadState;

    /**
     * 获取下载的错误码。
     *
     * @returns { WebDownloadErrorCode } - 下载发生错误的时候的错误码。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getLastErrorCode(): WebDownloadErrorCode;

    /**
     * 获取下载任务的请求方式。
     *
     * @returns { string } - 下载的请求方式。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getMethod(): string;

    /**
     * 获取下载的媒体类型（例如，一个声音文件可能被标记为 audio/ogg ，一个图像文件可能是 image/png）。
     *
     * @returns { string } - 下载的媒体类型（例如，一个声音文件可能被标记为 audio/ogg ，一个图像文件可能是 image/png）。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getMimeType(): string;

    /**
     * 获取下载的请求地址。
     *
     * @returns { string } - 下载的请求地址。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getUrl(): string;

    /**
     * 获取下载的建议文件名。
     *
     * @returns { string } - 下载的建议文件名。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getSuggestedFileName(): string;

    /**
     * 开始下载到指定目录，参数为下载文件的磁盘存储路径（包含文件名）。
     *
     * > **说明：**
     * >
     * > 该接口应在WebDownloadDelegate的onBeforeDownload回调中使用。若在WebDownloadDelegate的onBeforeDownload中未调用start('xxx')，则下载任务将保持在
     * > PENDING状态。处于PENDING状态的下载会将文件下载到临时目录，临时文件会在WebDownloadItem.start指定目标路径后被重命名为目标路径，未下载完成的部分会在WebDownloadItem.start
     * > 指定目标路径后直接下载到目标路径。如果在调用WebDownloadItem.start之前不希望下载到临时文件路径，可以先通过WebDownloadItem.cancel取消当前下载任务，随后通过
     * > WebDownloadManager.resumeDownload恢复被取消的下载任务。
     *
     * @param { string } downloadPath - 下载文件的路径（包含文件名），路径长度与文件管理中长度一致，最长255字节。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     *     <br>2. Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    start(downloadPath: string): void;

    /**
     * 取消一个正在下载的下载任务。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    cancel(): void;

    /**
     * 暂停一个正在下载的下载任务。
     *
     * @throws { BusinessError } 17100019 - The download task is not started yet.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    pause(): void;

    /**
     * 恢复一个暂停的下载任务。
     *
     * @throws { BusinessError } 17100016 - The download task is not paused.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    resume(): void;

    /**
     * 获取已经接收的字节数。
     *
     * @returns { number } - 已经接收的字节数。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getReceivedBytes(): number;

    /**
     * 获取下载文件在磁盘上的全路径。
     *
     * @returns { string } - 下载文件在磁盘上的全路径。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getFullPath(): string;

    /**
     * 获取下载文件的原始URL地址。
     *
     * @returns { string } - 下载文件的原始URL地址。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getOriginalUrl(): string;

    /**
     * 获取下载文件的referrer地址。
     *
     * @returns { string } - 下载文件的referrer地址。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getReferrerUrl(): string;

    /**
     * 将失败的下载序列化到一个字节数组。
     *
     * @returns { Uint8Array } - 失败的下载序列化后的字节数组。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    serialize(): Uint8Array;

    /**
     * 将序列化后的字节数组反序列化为一个WebDownloadItem对象。
     *
     * @param { Uint8Array } serializedData - 序列化后的下载。
     * @returns { WebDownloadItem } - 从字节数组反序列化为一个WebDownloadItem对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     *     <br>2. Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static deserialize(serializedData: Uint8Array): WebDownloadItem;
  }

  /**
   * 下载任务的状态会通过该类的回调接口通知给用户。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 11 dynamic
   */
  class WebDownloadDelegate {
    /**
     * 下载开始前通知给用户，用户需要在此接口中调用WebDownloadItem.start("xxx")并提供下载路径，否则下载会一直处于PENDING状态。
     *
     * > **说明：**
     * >
     * > 处于PENDING状态的下载任务会首先将文件保存至临时目录。在调用WebDownloadItem.start并指定目标路径后，临时文件将被重命名为目标文件名，未完成下载的部分会在调用
     * > WebDownloadItem.start并指定目标路径后直接下载到目标路径。若希望避免在调用WebDownloadItem.start前生成临时文件，可先通过WebDownloadItem.cancel来取消当前的下载任
     * > 务，之后再使用WebDownloadManager.resumeDownload来恢复被取消的下载任务。
     *
     * @param { Callback<WebDownloadItem> } callback - 触发下载的回调。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    onBeforeDownload(callback: Callback<WebDownloadItem>): void;

    /**
     * 下载过程中的回调，通过该回调的参数可以了解下载进度等信息。
     *
     * @param { Callback<WebDownloadItem> } callback - 下载更新的回调。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    onDownloadUpdated(callback: Callback<WebDownloadItem>): void;

    /**
     * 下载完成的通知。
     *
     * @param { Callback<WebDownloadItem> } callback - 下载完成的回调。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    onDownloadFinish(callback: Callback<WebDownloadItem>): void;

    /**
     * 下载失败的通知。
     *
     * @param { Callback<WebDownloadItem> } callback - 下载失败的回调。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    onDownloadFailed(callback: Callback<WebDownloadItem>): void;
  }

  /**
   * 可以通过该类提供的接口来恢复失败的下载任务。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 11 dynamic
   */
  class WebDownloadManager {
    /**
     * 设置用于接收从WebDownloadManager触发的下载进度的委托。
     *
     * @param { WebDownloadDelegate } delegate - 用来接收下载进度的委托。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    static setDownloadDelegate(delegate: WebDownloadDelegate): void;

    /**
     * 恢复一个失败的下载任务。
     *
     * @param { WebDownloadItem } webDownloadItem - 待恢复的下载任务。
     * @throws { BusinessError } 17100018 - No WebDownloadDelegate has been set yet.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static resumeDownload(webDownloadItem: WebDownloadItem): void;
  }

  /**
   * The http body stream of the request.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  class WebHttpBodyStream {
    /**
     * 初始化WebHttpBodyStream。
     *
     * @returns { Promise<void> } Promise实例，用于获取WebHttpBodyStream是否初始化成功。
     * @throws { BusinessError } 17100022 - Failed to initialize the HTTP body stream.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    initialize(): Promise<void>;

    /**
     * 读取WebHttpBodyStream中的数据。
     *
     * @param { number } size - 读取WebHttpBodyStream中的字节数。单位：字节。
     * @returns { Promise<ArrayBuffer> } Promise实例，用于获取WebHttpBodyStream中读取的数据。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    read(size: number): Promise<ArrayBuffer>;

    /**
     * 获取WebHttpBodyStream中的数据大小，分块传输时总是返回零。
     *
     * @returns { number } 获取WebHttpBodyStream中的数据大小。单位：字节。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    getSize(): number;

    /**
     * 读取WebHttpBodyStream中当前的读取位置。
     *
     * @returns { number } WebHttpBodyStream中当前的读取位置。单位：字节。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    getPosition(): number;

    /**
     * WebHttpBodyStream是否采用分块传输。
     *
     * @returns { boolean } WebHttpBodyStream是否采用分块传输，如果采用分块传输则返回true，否则返回false。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isChunked(): boolean;

    /**
     * 判断WebHttpBodyStream中的所有数据是否都已被读取。
     *
     * @returns { boolean } WebHttpBodyStream中的所有数据是否都已被读取。
     *     <br>如果所有数据都已被读取，则返回true。对于分块传输类型的WebHttpBodyStream，在第一次读取尝试之前返回false。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isEof(): boolean;

    /**
     * 判断WebHttpBodyStream中的上传数据是否在内存中。
     *
     * @returns { boolean } WebHttpBodyStream中的上传数据是否在内存中。
     *     <br>如果WebHttpBodyStream中的上传数据完全在内存中，并且所有读取请求都将同步成功，则返回true。对于分块传输类型的数据，预期返回false。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isInMemory(): boolean;
  }

  /**
   * Defines the resource type of request.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  enum WebResourceType {
    /**
     * 顶层页面。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    MAIN_FRAME = 0,

    /**
     * Frame或Iframe。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    SUB_FRAME = 1,

    /**
     * CSS样式表。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    STYLE_SHEET = 2,

    /**
     * 外部脚本。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    SCRIPT = 3,

    /**
     * 图片（jpg/gif/png/以及其他）。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    IMAGE = 4,

    /**
     * 字体。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    FONT_RESOURCE = 5,

    /**
     * 其他子资源。如果实际类型未知，则是默认类型。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    SUB_RESOURCE = 6,

    /**
     * 插件的Object（或embed）标签，或者插件请求的资源。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    OBJECT = 7,

    /**
     * 媒体资源。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    MEDIA = 8,

    /**
     * 专用工作线程的主资源。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    WORKER = 9,

    /**
     * 共享工作线程的主资源。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    SHARED_WORKER = 10,

    /**
     * 明确的预取请求。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    PREFETCH = 11,

    /**
     * 网站图标。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    FAVICON = 12,

    /**
     * XMLHttpRequest.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    XHR = 13,

    /**
     * <a ping\>/sendBeacon的Ping请求。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    PING = 14,

    /**
     * service worker的主资源。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    SERVICE_WORKER = 15,

    /**
     * 内容安全策略违规报告。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    CSP_REPORT = 16,

    /**
     * 插件请求的资源。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    PLUGIN_RESOURCE = 17,

    /**
     * 触发service worker预热的主frame跳转请求。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    NAVIGATION_PRELOAD_MAIN_FRAME = 19,

    /**
     * 触发service worker预热的子frame跳转请求。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    NAVIGATION_PRELOAD_SUB_FRAME = 20
  }

  /**
   * 通过WebSchemeHandler拦截到的请求。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  class WebSchemeHandlerRequest {
    /**
     * 获取资源请求头信息。
     *
     * @returns { Array<WebHeader> } 返回资源请求头信息。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    getHeader(): Array<WebHeader>;

    /**
     * 获取资源请求的URL信息。
     *
     * @returns { string } 返回资源请求的URL信息。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    getRequestUrl(): string;

    /**
     * 获取请求方法。
     *
     * @returns { string } 返回请求方法。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    getRequestMethod(): string;

    /**
     * 获取referrer。
     *
     * @returns { string } 获取到的referrer。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    getReferrer(): string;

    /**
     * 判断资源请求是否为主frame。
     *
     * @returns { boolean } 判断资源请求是否为主frame，如果资源请求是主frame则返回true，否则返回false。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    isMainFrame(): boolean;

    /**
     * 获取资源请求是否与手势（如点击）相关联。
     *
     * @returns { boolean } 返回资源请求是否与手势（如点击）相关联，如果返回资源请求与手势相关联则返回true，否则返回false。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    hasGesture(): boolean;

    /**
     * 获取资源请求中的WebHttpBodyStream。
     *
     * @returns { WebHttpBodyStream | null } Return http body stream. If request has no http body stream, return null.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    getHttpBodyStream(): WebHttpBodyStream | null;

    /**
     * 获取资源请求的资源类型。
     *
     * @returns { WebResourceType } 返回资源请求的资源类型。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    getRequestResourceType(): WebResourceType;

    /**
     * 获取触发此请求的Frame的URL。
     *
     * @returns { string } 返回触发此请求的Frame的URL。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    getFrameUrl(): string;
  }

  /**
   * 请求的响应，可以为被拦截的请求创建一个Response并填充自定义的内容返回给Web组件。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  class WebSchemeHandlerResponse {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    constructor();
    /**
     * 给当前的Response设置重定向或因HSTS而更改后的URL，设置了url后会触发请求的跳转。
     *
     * @param { string } url - 即将要跳转的URL。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    setUrl(url: string): void;
    /**
     * 获取重定向或由于HSTS而更改后的URL。
     *
     * @returns { string } 获取经过重定向或由于HSTS而更改后的URL。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    getUrl(): string;
    /**
     * 给当前的Response设置网络错误码。
     *
     * @param { WebNetErrorList } code - 网络错误码。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    setNetErrorCode(code: WebNetErrorList): void;
    /**
     * 获取Response的网络错误码。
     *
     * @returns { WebNetErrorList } 获取Response的网络错误码。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    getNetErrorCode(): WebNetErrorList;
    /**
     * 给当前的Response设置HTTP状态码。
     *
     * @param { number } code - Http状态码。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    setStatus(code: number): void;
    /**
     * 获取Response的Http状态码。
     *
     * @returns { number } 获取Response的Http状态码。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    getStatus(): number;
    /**
     * 给当前的Response设置状态文本。
     *
     * @param { string } text - 状态文本。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    setStatusText(text: string): void;
    /**
     * 获取Response的状态文本。
     *
     * @returns { string } 状态文本。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    getStatusText(): string;
    /**
     * 给当前的Response设置媒体类型。
     *
     * @param { string } type - 媒体类型。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    setMimeType(type: string): void;
    /**
     * 获取Response的媒体类型。
     *
     * @returns { string } 媒体类型。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    getMimeType(): string;
    /**
     * 给当前的Response设置字符集。
     *
     * @param { string } encoding - 字符集。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    setEncoding(encoding: string): void;
    /**
     * 获取Response的字符集。
     *
     * @returns { string } 字符集。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    getEncoding(): string;
    /**
     * 给当前的Response设置头信息。
     *
     * @param { string } name - 头部（header）的名称。
     * @param { string } value - 头部（header）的值。
     * @param { boolean } overwrite - 如果为true，将覆盖现有的头部，否则不覆盖。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    setHeaderByName(name: string, value: string, overwrite: boolean): void;
    /**
     * 按名称获取Response头部字段值。
     *
     * @param { string } name - 头部（header）的名称。
     * @returns { string } 头部（header）的值。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    getHeaderByName(name: string): string;
  }

  /**
   * Used to intercept url requests. Response headers and body can be sent through
   * WebResourceHandler.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  class WebResourceHandler {
    /**
     * 将构造的响应头传递给被拦截的请求。
     *
     * @param { WebSchemeHandlerResponse } response - 该拦截请求的响应。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    didReceiveResponse(response: WebSchemeHandlerResponse): void;
    /**
     * 将构造的响应体传递给被拦截的请求。
     *
     * @param { ArrayBuffer } data - 响应体数据。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    didReceiveResponseBody(data: ArrayBuffer): void;
    /**
     * 通知Web组件被拦截的请求已经完成，并且没有更多的数据可用。
     *
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    didFinish(): void;
    /**
     * 通知ArkWeb内核被拦截请求应该返回失败。
     *
     * @param { WebNetErrorList } code - 网络错误码。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    didFail(code: WebNetErrorList): void;
    /**
     * Notify that this request should be failed.
     *
     * @param { WebNetErrorList } code - Set response error code to intercept.
     * @param { boolean } completeIfNoResponse - If completeIfNoResponse is true, when DidFailWithError is called, if
     *     DidReceiveResponse has not been called, a response is automatically
     *     constructed and the current request is terminated.
     * @throws { BusinessError } 17100101 - The errorCode is either ARKWEB_NET_OK or outside the range of error codes
     *     in WebNetErrorList.
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @since 20 dynamic
     */
    didFail(code: WebNetErrorList, completeIfNoResponse: boolean): void;

    /**
     * Notify that this request should be failed.
     *
     * @param { WebNetErrorList } code - Set response error code to intercept.
     * @param { boolean } completeIfNoResponse - If completeIfNoResponse is true, when DidFailWithError is called,
     *     if DidReceiveResponse has not been called, a response is automatically constructed and the current
     *     request is terminated.
     * @param { number } customErrorCode - The custom error code for this response, Web engine will pass the custom
     *     error code directly to the application through onErrorReceive.
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 26.0.0 dynamic
     */
    didFail(code: WebNetErrorList, completeIfNoResponse: boolean, customErrorCode: number): void;
  }

  /**
   * This class is used to intercept requests for a specified scheme.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  class WebSchemeHandler {
    /**
     * 当请求开始时的回调，在该回调函数中可以决定是否拦截该请求。
     *
     * @param { function } callback - 拦截对应scheme请求开始时触发的回调。request为请求，handler用于提供自定义的返回头以及返回体给Web组件，返回值表示该请求是否拦截。
     *     it means no interception.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    onRequestStart(
      callback: (request: WebSchemeHandlerRequest, handler: WebResourceHandler) => boolean): void;

    /**
     * 请求完成时的回调。
     *
     * @param { Callback<WebSchemeHandlerRequest> } callback - 对应请求结束的回调函数。
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    onRequestStop(callback: Callback<WebSchemeHandlerRequest>): void;
  }

  /**
   * [handleStatusChanged]{@link @ohos.web.webview:webview.NativeMediaPlayerHandler.handleStatusChanged} 接口参数， 用于表示播放器的播
   * 放状态。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enum PlaybackStatus {
    /**
     * 播放状态为暂停状态，表示媒体已暂停。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    PAUSED = 0,
    /**
     * 播放状态为播放状态，表示媒体正在播放。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    PLAYING = 1
  }

  /**
   * 播放器的网络状态。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enum NetworkState {
    /**
     * 播放器还没有开始下载数据。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    EMPTY = 0,
    /**
     * 播放器网络状态空闲，比如媒体分片下载完成，下一个分片还没有开始下载。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    IDLE = 1,
    /**
     * 播放器正在下载媒体数据。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    LOADING = 2,
    /**
     * 发生了网络错误。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    NETWORK_ERROR = 3
  }

  /**
   * 播放器的缓存状态。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enum ReadyState {
    /**
     * 没有缓存。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    HAVE_NOTHING = 0,
    /**
     * 只缓存了媒体元数据。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    HAVE_METADATA = 1,
    /**
     * 只缓存到当前的播放进度。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    HAVE_CURRENT_DATA = 2,
    /**
     * 缓存时长超过了当前的播放进度, 但是仍有可能导致卡顿。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    HAVE_FUTURE_DATA = 3,
    /**
     * 缓存了足够的数据，保证播放流畅。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    HAVE_ENOUGH_DATA = 4
  }

  /**
   * 播放器的错误类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enum MediaError {
    /**
     * 网络错误。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    NETWORK_ERROR = 1,
    /**
     * 媒体格式错误。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    FORMAT_ERROR = 2,
    /**
     * 解码错误。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    DECODE_ERROR = 3
  }

  /**
   * [CreateNativeMediaPlayerCallback]{@link @ohos.web.webview:webview.CreateNativeMediaPlayerCallback}回调函数的参数。应用通过该对象，将
   * 播放器的状态通知给 ArkWeb 内核。
   *
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 12开始支持。
   * >
   * > - 示例效果请以真机运行为准。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  interface NativeMediaPlayerHandler {

    /**
     * 当播放器的播放状态发生变化时，调用该方法将播放状态通知给 ArkWeb 内核。
     *
     * @param { PlaybackStatus } status - 播放器的播放状态。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleStatusChanged(status: PlaybackStatus): void;

    /**
     * 当播放器的音量发生变化时，调用该方法将音量通知给 ArkWeb 内核。
     *
     * @param { number } volume - 播放器的音量，取值范围：[0, 1.0]。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleVolumeChanged(volume: number): void;

    /**
     * 当播放器的静音状态发生变化时，调用该方法将静音状态通知给 ArkWeb 内核。
     *
     * @param { boolean } muted - 当前播放器是否静音。<br>true表示当前播放器静音，false表示当前播放器未静音。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleMutedChanged(muted: boolean): void;

    /**
     * 当播放器的播放速率发生变化时，调用该方法将播放速率通知给 ArkWeb 内核。
     *
     * @param { number } playbackRate - 播放速率，取值范围：[0, +∞)
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handlePlaybackRateChanged(playbackRate: number): void;

    /**
     * 当播放器解析出媒体的总时长时，调用该方法将媒体的总时长通知给 ArkWeb 内核。
     *
     * @param { number } duration - 媒体的总时长。<br>单位：秒，取值范围：[0, +∞)
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleDurationChanged(duration: number): void;

    /**
     * 当媒体的播放进度发生变化时，调用该方法将媒体的播放进度通知给 ArkWeb 内核。
     *
     * @param { number } currentPlayTime - 当前播放时间。<br>单位：秒，取值范围：[0, duration]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleTimeUpdate(currentPlayTime: number): void;

    /**
     * 当媒体的缓冲时长发生变化时，调用该方法将媒体的缓冲时长通知给 ArkWeb 内核。
     *
     * @param { number } bufferedEndTime - 媒体缓冲的时长。<br>单位：秒，取值范围：[0, duration]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleBufferedEndTimeChanged(bufferedEndTime: number): void;

    /**
     * 当媒体播放结束时，调用该方法将播放结束事件通知给 ArkWeb 内核。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleEnded(): void;

    /**
     * 当播放器的网络状态发生变化时，调用该方法将播放器的网络状态通知给 ArkWeb 内核。
     *
     * @param { NetworkState } state - 播放器的网络状态。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleNetworkStateChanged(state: NetworkState): void;

    /**
     * 当播放器的缓存状态发生变化时，调用该方法将播放器的缓存状态通知给 ArkWeb 内核。
     *
     * @param { ReadyState } state - 播放器的缓存状态。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleReadyStateChanged(state: ReadyState): void;

    /**
     * 当播放器的全屏状态发生变化时，调用该方法将播放器的全屏状态通知给 ArkWeb 内核。
     *
     * @param { boolean } fullscreen - 是否全屏。<br>true表示全屏，false表示未全屏。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleFullscreenChanged(fullscreen: boolean): void;

    /**
     * 当播放器进入seek状态时，调用该方法将seek进入事件通知 ArkWeb 内核。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleSeeking(): void;

    /**
     * 当播放器seek完成后，调用该方法将seek完成事件通知 ArkWeb 内核。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleSeekFinished(): void;

    /**
     * 当播放器发生错误时，调用该方法将错误通知 ArkWeb 内核。
     *
     * @param { MediaError } error - 错误类型。
     * @param { string } errorMessage - 错误的详细描述。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleError(error: MediaError, errorMessage: string): void;

    /**
     * 当播放器解析出视频的尺寸时， 调用该方法将视频尺寸通知 ArkWeb 内核。
     *
     * @param { number } width - 视频的宽，单位：像素，取值范围：[0, +∞)
     * @param { number } height - 视频的高，单位：像素，取值范围：[0, +∞)
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleVideoSizeChanged(width: number, height: number): void;
  }

  /**
   * 表示播放器的挂起类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  enum SuspendType {
    /**
     * 页面进入BFCache。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    ENTER_BACK_FORWARD_CACHE = 0,

    /**
     * 页面进入后台。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    ENTER_BACKGROUND = 1,

    /**
     * 系统自动清理。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    AUTO_CLEANUP = 2,
  }

  /**
   * [CreateNativeMediaPlayerCallback]{@link @ohos.web.webview:webview.CreateNativeMediaPlayerCallback}回调函数的返回值类型。接管网页媒体
   * 的播放器和ArkWeb内核之间的一个接口类。
   *
   * ArkWeb内核通过该接口类的实例对象来控制应用创建的用来接管网页媒体的播放器。
   *
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 12开始支持。
   * >
   * > - 示例效果请以真机运行为准。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  interface NativeMediaPlayerBridge {
    /**
     * 更新surface位置信息。
     *
     * @param { number } x - surface相对于Web组件的x坐标信息。<br>单位：px。
     * @param { number } y - surface相对于Web组件的y坐标信息。<br>单位：px。
     * @param { number } width - surface的宽度。<br>单位：px。
     * @param { number } height - surface的高度。<br>单位：px。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    updateRect(x: number, y: number, width: number, height: number): void;

    /**
     * 播放媒体。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    play(): void;

    /**
     * 暂停播放。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    pause(): void;

    /**
     * 跳转播放进度到指定时间点。
     *
     * @param { number } targetTime - 播放跳转到的时间点。<br>单位：秒。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    seek(targetTime: number): void;

    /**
     * 设置播放器音量值。
     *
     * @param { number } volume - 播放器的音量。<br>取值范围：[0, 1.0]，其中0表示静音，1.0表示最大音量。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    setVolume(volume: number): void;

    /**
     * 设置静音状态。
     *
     * @param { boolean } muted - 是否静音。<br>true表示静音，false表示未静音。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    setMuted(muted: boolean): void;

    /**
     * 设置播放速率。
     *
     * @param { number } playbackRate - 播放速率。<br>取值范围：[0, 10.0]，其中1表示原速播放。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    setPlaybackRate(playbackRate: number): void;

    /**
     * 销毁播放器。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    release(): void;

    /**
     * 播放器进入全屏。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    enterFullscreen(): void;

    /**
     * 播放器退出全屏。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    exitFullscreen(): void;

    /**
     * 通知应用重建播放器，并恢复播放器的状态信息。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    resumePlayer?(): void;

    /**
     * 通知应用销毁播放器，并保存播放器的状态信息。
     *
     * @param { SuspendType } type - 播放器挂起类型。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    suspendPlayer?(type: SuspendType): void;
  }

  /**
   * 表示媒体类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enum MediaType {
    /**
     * 视频。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    VIDEO = 0,
    /**
     * 音频。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    AUDIO = 1
  }

  /**
   * 表示媒体源的类型。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enum SourceType {
    /**
     * 媒体源的类型是URL。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    URL = 0,
    /**
     * 媒体源的类型是blob。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    MSE = 1
  }

  /**
   * 表示媒体源的信息。
   *
   * > **说明：**
   * >
   * > - 本Class首批接口从API version 12开始支持。
   * >
   * > - 示例效果请以真机运行为准。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  class MediaSourceInfo {
    /**
     * 媒体源的类型。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    type: SourceType;

    /**
     * 媒体源地址。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    source: string;

    /**
     * 媒体源格式，可能为空，需要开发者自行判断格式。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    format: string;
  }

  /**
   * 矩形定义。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  interface RectEvent {
    /**
     * 矩形区域左上角x坐标。
     *
     * 单位：px。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    x: number;
    /**
     * 矩形区域左上角y坐标。
     *
     * 单位：px。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    y: number;
    /**
     * 矩形的宽度。
     *
     * 单位：px。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    width: number;
    /**
     * 矩形的高度。
     *
     * 单位：px。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    height: number;
  }

  /**
   * [应用接管网页媒体播放功能](docroot://reference/apis-arkweb/arkts-basic-components-web-attributes.md#enablenativemediaplayer12)中
   * 用于同层渲染的 surface 信息。
   *
   * > **说明：**
   * >
   * > - 本Class首批接口从API version 12开始支持。
   * >
   * > - 示例效果请以真机运行为准。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  class NativeMediaPlayerSurfaceInfo {
    /**
     * surface的id，用于同层渲染的NativeImage的surfaceId。
     *
     * 详见[NativeEmbedDataInfo]{@link ./@internal/component/ets/web:NativeEmbedDataInfo}。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    id: string;

    /**
     * surface的位置信息。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    rect: RectEvent;
  }

  /**
   * 播放器预加载媒体数据。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enum Preload {
    /**
     * 不预加载。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    NONE = 0,
    /**
     * 只预加载媒体的元数据。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    METADATA = 1,
    /**
     * 预加载足够多的媒体数据，以保证能流畅地播放。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    AUTO = 2
  }

  /**
   * [CreateNativeMediaPlayerCallback]{@link @ohos.web.webview:webview.CreateNativeMediaPlayerCallback}回调函数的一个参数。包含了网页中媒
   * 体的信息。应用可以根据这些信息来创建接管网页媒体播放的播放器。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  interface MediaInfo {
    /**
     * ID of **<video>** or **<audio>** on the web page.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    embedID: string,
    /**
     * Type of the media.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    mediaType: MediaType,
    /**
     * Source of the media. There may be multiple sources. The application needs to select a supported source to play.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    mediaSrcList: MediaSourceInfo[],
    /**
     * Surface information used for same-layer rendering.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    surfaceInfo: NativeMediaPlayerSurfaceInfo,
    /**
     * Whether the **controls** attribute exists in **<video>** or **<audio>**.
     *
     * The value **true** means that the **controls** attribute exists in **<video>** or **<audio>**, and **false**
     * means the opposite.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    controlsShown: boolean,
    /**
     * Value of the **controlslist** attribute in **<video>** or **<audio>**.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    controlList: string[],
    /**
     * Whether to mute the player.
     *
     * The value **true** means to mute the player, and **false** means the opposite.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    muted: boolean,
    /**
     * URL of a poster.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    posterUrl: string,
    /**
     * Whether preloading is required.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    preload: Preload,
    /**
     * HTTP headers that need to be included in the player's request for media resources.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    headers: Record<string, string>,
    /**
     * Attributes in **<video>** or **<audio>**.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    attributes: Record<string, string>,
  }

  /**
   * [onCreateNativeMediaPlayer]{@link @ohos.web.webview:webview.WebviewController#onCreateNativeMediaPlayer(callback: CreateNativeMediaPlayerCallback)}
   * 方法的参数。一个回调函数，创建一个播放器，用于接管网页中的媒体播放。
   *
   * @param { NativeMediaPlayerHandler } handler - 通过该对象，将播放器的状态报告给 ArkWeb 内核。
   * @param { MediaInfo } mediaInfo - 网页媒体的信息。
   * @returns { NativeMediaPlayerBridge } 接管网页媒体的播放器和 ArkWeb 内核之间的一个接口类。<br/>应用需要实现该接口类。<br/> ArkWeb 内核通过该接口类的对象来控制应用创建的
   *     用来接管网页媒体的播放器。<br/>如果应用返回了 null，则表示应用不接管这个媒体的播放，由 ArkWeb 内核来播放该媒体。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  type CreateNativeMediaPlayerCallback =
      (handler: NativeMediaPlayerHandler, mediaInfo: MediaInfo) => NativeMediaPlayerBridge;

  /**
   * This class is used to set adblock config.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  class AdsBlockManager {
    /**
     * 向Web组件中设置自定义的符合通用easylist语法规则的广告过滤配置文件。
     *
     * > **说明：**
     * >
     * > 此接口设置的广告过滤规则，内部解析成功后会持久化存储，应用重启后不需要重复设置。
     *
     * @param {string} rulesFile - 指定了符合easylist通用语法的规则文件路径，应用需要有此文件的读权限。
     * @param {boolean} replace - true表示强制替换掉内置的默认规则，false表示设置的自定义规则将与内置规则共同工作。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static setAdsBlockRules(rulesFile: string, replace: boolean): void;

    /**
     * 向AdsBlockManager的DisallowedList中添加一组域名。广告过滤功能开启时，将禁用这些网站的广告过滤功能。
     *
     * > **说明：**
     * >
     * > 此接口设置的域名不会持久化，应用重启需要重新设置。
     * >
     * > 广告过滤特性会使用后缀匹配的方式判断domainSuffix和当前站点的url是否能匹配，例如，当前Web组件打开的网站是https://www.example.com，设置的DisallowedList中有'
     * > example.com'或者'www.example.com'，后缀匹配成功，此网站将禁用广告过滤，访问'https://m.example.com'也将禁用广告过滤。
     *
     * @param { Array<string> } domainSuffixes - 一组域名列表，如果网页URL与列表中的某个域名匹配，则该网页将被禁止使用广告拦截功能。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static addAdsBlockDisallowedList(domainSuffixes: Array<string>): void;

    /**
     * 向AdsBlockManager的AllowedList中添加一组域名，主要用于重新开启DisallowedList中的部分网站的广告过滤。
     *
     * > **说明：**
     * >
     * > 此接口设置的域名不会持久化，应用重启需要重新设置。
     * >
     * > AllowedList的优先级比DisallowedList高，例如，DisallowedList中配置了['example.com']，禁用了所有example.com域名下的网页，此时如果需要开启'
     * > news.example.com'下的广告过滤，可以使用addAdsBlockAllowedList(['news.example.com'])。
     *
     * @param { Array<string> } domainSuffixes - 一组域名列表，如果网页URL与列表中的某个条目匹配，则该网页将被允许使用广告拦截功能。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static addAdsBlockAllowedList(domainSuffixes: Array<string>): void;

    /**
     * 从AdsBlockManager的DisallowedList中删除一组域名。
     *
     * @param { Array<string> } domainSuffixes - 需要从禁止列表中移除的域名后缀列表。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static removeAdsBlockDisallowedList(domainSuffixes: Array<string>): void;

    /**
     * 从AdsBlockManager的AllowedList中删除一组域名。
     *
     * @param { Array<string> } domainSuffixes - 需要从允许列表中移除的域名后缀列表。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static removeAdsBlockAllowedList(domainSuffixes: Array<string>): void;

    /**
     * clear Ads Block Disallowed list.
     *
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static clearAdsBlockDisallowedList(): void;

    /**
     * clear Ads Block Allowed list.
     *
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static clearAdsBlockAllowedList(): void;
  }

  /**
   * This class is used to enable back forward cache supported features.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  class BackForwardCacheSupportedFeatures {

    /**
     * 是否允许使用同层渲染的页面进入前进后退缓存。
     *
     * 如果设置为允许，需要维护为同层渲染元素创建的系统控件的生命周期，避免造成泄漏。
     *
     * true：允许使用同层渲染的页面进入前进后退缓存，false：不允许使用同层渲染的页面进入前进后退缓存。
     *
     * 默认值：false。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    nativeEmbed: boolean;

    /**
     * 是否允许使用视频托管的页面进入前进后退缓存。
     *
     * 如果设置为允许，需要维护为视频元素创建的系统控件的生命周期，避免造成泄漏。
     *
     * true：允许使用视频托管的页面进入前进后退缓存，false：不允许使用视频托管的页面进入前进后退缓存。
     *
     * 默认值：false。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    mediaTakeOver: boolean;

    /**
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    constructor();
  }

  /**
   * 前进后退缓存相关设置对象，用来控制Web组件前进后退缓存相关选项。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  class BackForwardCacheOptions {
    /**
     * 设置每个Web组件允许缓存的最大页面个数。
     *
     * 默认为1，最大可设置为50。
     *
     * 设置为0或负数时，前进后退缓存功能不生效。
     *
     * Web会根据内存压力对缓存进行回收。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    size: number;

    /**
     * 设置每个Web组件允许页面在前进后退缓存中停留的时间。
     *
     * 设置为0或负数时，前进后退缓存功能不生效。
     *
     * 单位：秒。默认值：600。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    timeToLive: number;

    /**
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    constructor();
  }

  /**
   * Enum type supplied to {@link insertProxyRule} for indicating the scheme filter for proxy.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 19]
   * @since 15 dynamic
   */
  enum ProxySchemeFilter {
    /**
     * 所有的scheme都会使用代理。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    MATCH_ALL_SCHEMES = 0,
    /**
     * HTTP请求会使用代理。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    MATCH_HTTP = 1,
    /**
     * HTTPS请求会使用代理。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    MATCH_HTTPS = 2
  }

  /**
   * The ProxyConfig used by applyProxyOverride.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 19]
   * @since 15 dynamic
   */
  class ProxyConfig {
    /**
     * 插入一个旁路规则，该规则指示哪些URL应跳过覆盖代理，直接连接到服务器。
     * 这些可能是URL或IP地址，并且支持通配符。例如，"*.example.com" 表示对以下地址的请求：
     * "https://www.example.com"和"http://test.example.com"将直接连接服务器。
     *
     * @param { string } bypassRule - 与bypassRule匹配的URL会绕过代理。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    insertBypassRule(bypassRule: string): void;
    /**
     * 插入一条代理规则，指明符合schemeFilter条件的URL将直接连接到服务器。
     *
     * @param { ProxySchemeFilter } schemeFilter - 与schemeFilter匹配的URL会直接与服务器相连。<br>默认值：MATCH_ALL_SCHEMES。 <br>传入
     *     undefined或null会抛出异常错误码401。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    insertDirectRule(schemeFilter?: ProxySchemeFilter): void;
    /**
     * 插入一条代理规则，与schemeFilter匹配的URL都会使用指定代理。如果schemeFilter为空，所有URL都将使用指定代理。
     * use the proxy rule if schemeFilter is null.
     *
     * 代理的格式为[scheme://]host[:port]。Scheme是可选的，如果存在，必须为 HTTP、HTTPS 或 SOCKS。Scheme默认为 HTTP。
     * host可以是带括号的 IPv6 字面量、IPv4 字面量，或者一个或多个由点分隔的标签。port是可选的，默认为 HTTP 的 80、
     * HTTPS 的 443 和 SOCKS 的 1080。
     *
     * 例如 example.com host: example.com
     *      https://example.com  scheme: https  host: example.com
     *      example.com:8888     host: example.com  port: 8888
     *      https://example.com:8888  scheme:https  host: example.com  port:8888
     *      192.168.1.1  host: 192.168.1.1
     *      192.168.1.1:8888  host:192.168.1.1 port: 8888
     *      [10:20:30:40:50:60:70:80]
     *
     * @param { string } proxyRule - URL要使用的代理。
     * @param { ProxySchemeFilter } schemeFilter - 与schemeFilter匹配的URL会使用代理。<br>默认值：MATCH_ALL_SCHEMES。<br>传入undefined或
     *     null会抛出异常错误码401。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    insertProxyRule(proxyRule: string, schemeFilter?: ProxySchemeFilter): void;
    /**
     * 主机名中不包含句点（且不是IP字面量）的主机名将跳过代理，直接连接到服务器。示例："abc"、"local"、"some-domain"。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    bypassHostnamesWithoutPeriod(): void;
    /**
     * 默认情况下，某些主机名如果属于链路本地 IP 或 localhost 地址，则会自动绕过代理。
     * 例如，匹配以下任意条件（非详尽列表）的主机名：localhost、*.localhost、[::1]、127.0.0.1/8、169.254/16、[FE80::]/10。
     * 调用此函数可覆盖默认行为，并强制将 localhost 和链路本地 URL 通过代理发送。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    clearImplicitRules(): void;
    /**
     * 反转bypass规则。
     *
     * 若为 false，所有URL都将使用代理设置，除非URL匹配了绕过规则。
     * 若为 true，仅绕过列表中的URL会使用代理，其余所有URL都将直接连接。
     *
     * @param { boolean } reverse - 参数值默认是false，表示与[insertBypassRule]{@link webview.ProxyConfig.insertBypassRule}中的
     *     bypassRule匹配的URL会绕过代理，参数值为true时，表示与[insertBypassRule]{@link webview.ProxyConfig.insertBypassRule}中的bypassRule
     *     匹配的URL会使用代理。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    enableReverseBypass(reverse: boolean): void;
    /**
     * 获取不使用代理的URL列表。
     *
     * @returns { Array<string> } 不使用代理的URL列表。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    getBypassRules(): Array<string>;
    /**
     * 获取代理规则。
     *
     * @returns { Array<ProxyRule> } 代理规则。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    getProxyRules(): Array<ProxyRule>;
    /**
     * Returns if reverse bypass rules.
     *
     * @returns { boolean } If reverse bypass enabled.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    isReverseBypassEnabled(): boolean;
  }

  /**
   * The ProxyRule used by insertProxyRule.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 19]
   * @since 15 dynamic
   */
  class ProxyRule {
    /**
     * 获取代理规则中的ProxySchemeFilter信息。
     *
     * @returns { ProxySchemeFilter } 代理规则中的ProxySchemeFilter信息。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    getSchemeFilter(): ProxySchemeFilter;
    /**
     * 获取代理规则中的代理的Url信息。
     *
     * @returns { string } 代理规则中的代理的Url信息。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    getUrl(): string;
  }

  /**
   * The callback for proxy changed.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 19]
   * @since 15 dynamic
   */
  type OnProxyConfigChangeCallback = () => void;

  /**
   * This class is used for set proxy for ArkWeb.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 19]
   * @since 15 dynamic
   */
  class ProxyController {
    /**
     * 设置应用中所有Web使用的代理配置，与[insertBypassRule]{@link @ohos.web.webview:webview.ProxyConfig.insertBypassRule}中插入的bypass规则匹配
     * 的URL将不会使用代理，而是直接向URL指定的源地址发起请求。代理设置成功后，不保证网络连接后会立即使用新的代理设置，在加载页面之前请等待监听器触发，这个监听器将在UI线程上被调用。
     * 注意：调用 `applyProxyOverride` 会导致忽略任何现有的系统范围设置。
     *
     * @param { ProxyConfig } proxyConfig - 对代理的配置。
     * @param { OnProxyConfigChangeCallback } callback - 代理设置成功的回调。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    static applyProxyOverride(proxyConfig: ProxyConfig, callback: OnProxyConfigChangeCallback): void;
    /**
     * 移除代理配置。移除代理配置后，不保证网络连接后会立即使用新的代理设置，在加载页面之前等待监听器，这个监听器将在UI线程上被调用。
     *
     * @param { OnProxyConfigChangeCallback } callback - 代理配置变更的回调。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    static removeProxyOverride(callback: OnProxyConfigChangeCallback): void;
  }

  /**
   * 提供SetWebDestroyMode接口配置web组件的销毁模式
   * @enum { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  enum WebDestroyMode {
    /**
     * 普通销毁模式，当web组件触发销毁时，相关资源会在合适的时机释放
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    NORMAL_MODE = 0,

    /**
     * 快速销毁模式，当web组件触发销毁时，立即释放相关资源
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    FAST_MODE = 1
  }

  /**
   * Indicates the site isolation mode of the application, default value depends on different devices type.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  enum SiteIsolationMode {
    /**
     * The partial site isolation mode
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    PARTIAL = 0,

    /**
     * The strict site isolation mode
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    STRICT = 1
  }

  /**
   * Web页面场景下，全局滚动条模式。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  enum ScrollbarMode {
    /**
     * 非常驻滚动条。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    OVERLAY_LAYOUT_SCROLLBAR = 0,

    /**
     * 常驻滚动条。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    FORCE_DISPLAY_SCROLLBAR = 1,

    /**
     * 覆盖视觉视口滚动条。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    OVERLAY_VISUAL_SCROLLBAR = 2
  }
}

export default webview;