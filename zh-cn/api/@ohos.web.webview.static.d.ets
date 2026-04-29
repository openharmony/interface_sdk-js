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
import { Resource } from './global/resource';
import { SizeOptions } from '@ohos.arkui.component';
import { AsyncCallback, BusinessError } from './@ohos.base';
import { Callback } from './@ohos.base';
import type cert from './@ohos.security.cert';
import type image from './@ohos.multimedia.image';
import type print from './@ohos.print';
import { WebNetErrorList } from './@ohos.web.netErrorList';
/**
 * 本模块提供Web控制能力，网页显示的能力请参考[组件描述]{@link ./@internal/component/ets/web}。
 *
 * @namespace webview
 * @syscap SystemCapability.Web.Webview.Core
 * @since 23 static
 */
declare namespace webview {
  /**
   * Defines the Web's request/response header.
   *
   * @typedef WebHeader
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  interface WebHeader {
    /**
     * Gets the key of the request/response header.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    headerKey: string;
    /**
     * Gets the value of the request/response header.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    headerValue: string;
    }
  /**
   * {@link getHitTest}接口用于指示游标节点。
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum WebHitTestType {
    /**
     * 可编辑的区域。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    EDIT_TEXT = 0,

    /**
     * 电子邮件地址。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    EMAIL = 1,

    /**
     * 超链接，其中src为http。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    HTTP_ANCHOR = 2,

    /**
     * 带有超链接的图片，其中src为http + HTML::img。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    HTTP_ANCHOR_IMG = 3,

    /**
     * HTML::img标签。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    IMG = 4,

    /**
     * 地理地址。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    MAP = 5,

    /**
     * 电话号码。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    PHONE = 6,

    /**
     * 未知内容。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    UNKNOWN = 7
    }
  /**
   * Defines the mode for using HttpDns.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum SecureDnsMode {
    /**
     * Do not use HttpDns, can be used to revoke previously used HttpDns configuration.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    OFF = 0,
    /**
     * By default, the user-settings of HttpDns is used for dns resolution, and if it fails,
     * the system dns is used for resolution.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    AUTO = 1,
    /**
     * Use the user-settings of HttpDns for dns resolution. If it fails, it will not
     * fall back to the system dns, which will directly cause the page to fail to load.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    SECURE_ONLY = 2
    }
  /**
   * Defines the security level for the page.
   *
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum SecurityLevel {
    /**
     * Unable to determine whether it is safe or not, the non-http/https protocol used.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    NONE = 0,
    /**
     * Indicates the HTTPS protocol used by the page and the authentication is successful.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    SECURE = 1,
    /**
     * The page is insecure. For example, the HTTP protocol is used or the HTTPS protocol
     * is used but use an legacy TLS version.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    WARNING = 2,
    /**
     * Attempted HTTPS and failed, the authentication is failed.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    DANGEROUS = 3
    }
  /**
   * The playback status of all audio and video.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum MediaPlaybackState {
    /**
     * No audio or video currently.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    NONE = 0,
    /**
     * The audio and video on the page are being played.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    PLAYING = 1,
    /**
     * The audio and video on the page are paused.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    PAUSED = 2,
    /**
     * The audio and video on the page are stopped.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    STOPPED = 3
    }
  /**
   * The memory pressure level that can be set.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum PressureLevel {
    /**
     * Modules are advised to free buffers that are cheap to re-allocate and not immediately needed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    MEMORY_PRESSURE_LEVEL_MODERATE = 1,
    /**
     * At this level, modules are advised to free all possible memory.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    MEMORY_PRESSURE_LEVEL_CRITICAL = 2
    }
  /**
   * Indicates whether to restrict cookies so that only requests sent back to the same site that
   * created them can carry them.
   *
   * @enum { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum WebHttpCookieSameSitePolicy {
    /**
     * Cookies marked as Secure are allowed to be carried in cross-site requests.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    NONE = 0,
    /**
     * Allow specific cross-site requests to carry cookies.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    LAX = 1,
    /**
     * Prohibit cross-site requests from carrying cookies.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    STRICT = 2
    }

  /**
   * The form factors for User-Agent metadata.
   *
   * @enum { string }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 24 static
   */
  enum UserAgentFormFactor {
    /**
     * Form factor option: Automotive.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
     */
    AUTOMOTIVE = 'Automotive',
    /**
     * Form factor option: Desktop.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
     */
    DESKTOP = 'Desktop',
    /**
     * Form factor option: Mobile.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
     */
    MOBILE = 'Mobile',
    /**
     * Form factor option: EInk.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
     */
    EINK = 'EInk',
    /**
     * Form factor option: Tablet.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
     */
    TABLET = 'Tablet',
    /**
         * Form factor option: Watch.
         *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
     */
    WATCH = 'Watch',
    /**
     * Form factor option: XR.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
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
   * @since 24 static
   */
  class UserAgentBrandVersion {
    /**
     * Sets the brand. Should not be blank.
     *
     * @param { string } brand - The brand.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
     */
    setBrand(brand: string): void;

    /**
     * Get the brand info.
     *
     * @returns { string } - Returns brand info of UserAgentBrandVersion.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
     */
    getBrand(): string;

    /**
     * Sets the major version. Should not be blank.
     *
     * @param { string } majorVersion - The major version.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
     */
    setMajorVersion(majorVersion: string): void;

    /**
     * Get the major version.
     *
     * @returns { string } - Returns major version of UserAgentBrandVersion.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
     */
    getMajorVersion(): string;

    /**
     * Sets the full version. Should not be blank.
     *
     * @param { string } fullVersion - The full version.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
     */
    setFullVersion(fullVersion: string): void;

    /**
     * Get the full version.
     *
     * @returns { string } - Returns full version of UserAgentBrandVersion.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
     */
    getFullVersion(): string;
    }

  /**
   * Holds User-Agent metadata information and uses to generate User-Agent client hints.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 24 static
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
     * @since 24 static
     */
    setBrandVersionList(brandVersionList: Array<UserAgentBrandVersion>): void;

    /**
     * Returns the current list of UserAgentBrandVersion which are used to generate the User-Agent client hints
     * sec-ch-ua and sec-ch-ua-full-version-list.
     *
     * @returns { Array<UserAgentBrandVersion> } - Returns the current list of UserAgentBrandVersion.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
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
     * @since 24 static
     */
    setArchitecture(arch: string): void;

    /**
     * Gets the value for sec-ch-ua-architecture.
     *
     * @returns { string } - Returns the value for sec-ch-ua-architecture.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
     */
    getArchitecture(): string;

    /**
     * Sets User-Agent metadata bitness default is "".
     *
     * @param { string } bitness - The bitness is used to generate User-Agent client hints sec-ch-ua-bitness.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
     */
    setBitness(bitness: string): void;

    /**
     * Gets the value for the sec-ch-ua-bitness.
     *
     * @returns { string } - Returns the value for the sec-ch-ua-bitness.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
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
     * @since 24 static
     */
    setFormFactors(formFactors: Array<UserAgentFormFactor>): void;

    /**
     * Gets the value for the sec-ch-ua-form-factors.
     *
     * @returns { Array<UserAgentFormFactor> } - Returns the form factors.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
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
     * @since 24 static
     */
    setFullVersion(fullVersion: string): void;

    /**
     * Gets the value for the sec-ch-ua-full-version.
     *
     * @returns { string } - Returns the value for the sec-ch-ua-full-version.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
     */
    getFullVersion(): string;

    /**
     * Sets User-Agent metadata mobile, default is true.
     *
     * @param { boolean } isMobile - The isMobile is used to generate User-Agent client hints sec-ch-ua-mobile.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
     */
    setMobile(isMobile: boolean): void;

    /**
     * Gets the value for the sec-ch-ua-mobile.
     *
     * @returns { boolean } - Returns the value for the sec-ch-ua-mobile.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
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
     * @since 24 static
     */
    setModel(model: string): void;

    /**
     * Gets the value for the sec-ch-ua-model.
     *
     * @returns { string } - Returns the value for the sec-ch-ua-model.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
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
     * @since 24 static
     */
    setPlatform(platform: string): void;

    /**
     * Gets the value for the sec-ch-ua-platform.
     *
     * @returns { string } - Returns the value for the sec-ch-ua-platform.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
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
     * @since 24 static
     */
    setPlatformVersion(platformVersion: string): void;

    /**
     * Gets the value for the sec-ch-ua-platform-version.
     *
     * @returns { string } - Returns the value for the sec-ch-ua-platform-version.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
     */
    getPlatformVersion(): string;

    /**
     * Sets User-Agent metadata wow64, default is false.
     *
     * @param { boolean } isWow64 - The wow64 is used to generate User-Agent client hints sec-ch-ua-wow64.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
     */
    setWow64(isWow64: boolean): void;

    /**
     * Gets the value for the sec-ch-ua-wow64.
     *
     * @returns { boolean } - Returns the value for the sec-ch-ua-wow64.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
     */
    getWow64(): boolean;
    }
  /**
   * 提供点击区域的元素信息。示例代码参考{@link getLastHitTest}。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  interface HitTestValue {
    /**
     * 当前被点击区域的元素类型。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    type: WebHitTestType;
    /**
     * 点击区域的附加参数信息。若被点击区域为图片或链接，则附加参数信息为其url地址。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    extra: string;
    }
  /**
   * Defines the configuration of web custom scheme, related to {@link customizeSchemes} method.
   *
   * @typedef WebCustomScheme
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  interface WebCustomScheme {
    /**
     * Name of the custom scheme.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    schemeName: string;
    /**
     * Whether Cross-Origin Resource Sharing is supported.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    isSupportCORS: boolean;
    /**
     * Whether fetch request is supported.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    isSupportFetch: boolean;
    /**
     * If isStandard is true, the scheme will be handled as a standard scheme. The standard
     * schemes needs to comply with the URL normalization and parsing rules defined in Section 3.1 of RFC 1738,
     * which can be found in the http://www.ietf.org/rfc/rfc1738.txt.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    isStandard?: boolean;
    /**
     * If isLocal is true, the same security rules as those applied to the "file" URL will be
     * used to handle the scheme.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    isLocal?: boolean;
    /**
     * If isDisplayIsolated is true, then the scheme can only be displayed from other content
     * hosted using the same scheme.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    isDisplayIsolated?: boolean;
    /**
     * If isSecure is true, the same security rules as those applied to the "https" URL will be
     * used to handle the scheme.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    isSecure?: boolean;
    /**
     * If isCspBypassing is true, then this scheme can bypass Content Security Policy (CSP)
     * checks. In most cases, this value should not be true when isStandard is true.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    isCspBypassing?: boolean;
    /**
     * If isCodeCacheSupported is true, then the js of this scheme can generate code cache.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    isCodeCacheSupported?: boolean;
    }
  /**
   * Defines the callback of createPdf, related to {@link createPDF} method.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  class PdfData {
    /**
     * Return the data stream generated by the webpage.
     *
     * @returns { Uint8Array } return pdf data.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    pdfArrayBuffer(): Uint8Array;
    }
  /**
   * Defines the configuration of creating pdf, related to {@Link createPdf} method.
   *
   * @typedef PdfConfiguration
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  interface PdfConfiguration {
    /**
     * Number of the width.
     *
     * @type { double }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    width: double;
    /**
     * Number of the height.
     *
     * @type { double }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    height: double;
    /**
     * Number of the marginTop.
     *
     * @type { double }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    marginTop: double;
    /**
     * Number of the marginBottom.
     *
     * @type { double }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    marginBottom: double;
    /**
     * Number of the marginRight.
     *
     * @type { double }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    marginRight: double;
    /**
     * Number of the marginLeft.
     *
     * @type { double }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    marginLeft: double;
    /**
     * Number of the scaling.
     *
     * @type { ?double }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    scale?: double;
    /**
     * Whether background should be printed when creating pdf.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    shouldPrintBackground?: boolean;
    }
  /**
   * Provides basic information of web storage.
   *
   * @typedef WebStorageOrigin
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  interface WebStorageOrigin {
    /**
     * Url source.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    origin: string;
    /**
     * Specify the amount of storage for the source.
     *
     * @type { double }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    usage: double;
    /**
     * the callback of getOriginUsage.
     *
     * @type { double }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    quota: double;
    }
  /**
   * Defines the Web's request info.
   *
   * @typedef RequestInfo
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  interface RequestInfo {
    /**
     * Gets the url of the request.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    url: string;
    /**
     * Gets the method of the request.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    method: string;
    /**
     * Gets the form data of the request.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    formData: string;
    }
  /**
   * 网页当前的滚动偏移量。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  interface ScrollOffset {
    /**
     * 网页在水平方向的滚动偏移量。取值为网页左边界x坐标与Web组件左边界x坐标的差值。
     * 当网页向右过滚动时，取值范围为负值。
     * 当网页没有过滚动或者网页向左过滚动时，取值为0或正值。
     * 单位：vp
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    x: double;
    /**
     * 网页在垂直方向的滚动偏移量。取值为网页上边界y坐标与Web组件上边界y坐标的差值。
     * 当网页向下过滚动时，取值范围为负值。
     * 当网页没有过滚动或者网页向上过滚动时，取值为0或正值。
     * 单位：vp
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    y: double;
    }
  /**
   * 订阅一次指定类型Web事件的回调，Web事件的类型目前仅支持"webInited"，在Web引擎初始化完成时触发。
   *
   * 当应用中开始加载第一个Web组件时，Web引擎初始化，且后续再在同一应用中继续加载其他Web组件时不会再触发once回调。当应用销毁最后一个Web组件时，若再加载第一个Web组件，应用重新进入Web引擎初始化流程。
   *
   * @param {string} type Types of web event.
   * @param {Callback<void>} callback 所订阅的回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3.Parameter verification failed.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  function once(type: string, callback: Callback<void>): void;
  /**
   * Implements a WebStorage object to manage the Web SQL database and HTML5 Web Storage APIs.
   * All Web components in an application share a WebStorage object.
   *
   * <p><strong>API Note</strong>:<br>
   * You must load the Web component before calling the APIs in WebStorage.
   * </p>
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  class WebStorage {
    /**
     * Deletes all data in the Web SQL Database.
     *
     * @param { boolean } incognito - Whether to delete all data in the Web SQL Database in incognito mode.
     *                                {@code true} means to delete all data in the Web SQL Database in incognito mode;
     *                                {@code false} means to delete all data in the Web SQL Database in normal non-incognito mode.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static deleteAllData(incognito?: boolean): void;
    /**
     * Deletes all data in the specified origin.
     *
     * @param { string } origin - Index of the origin, which is obtained through {@link getOrigins}.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static deleteOrigin(origin: string): void;
    /**
     * Obtains information about all origins that are currently using the Web SQL Database.
     * This API uses a promise to return the result.
     *
     * @returns { Promise<Array<WebStorageOrigin>> } - Promise used to return the information about the origins.
     *     For details, see {@link WebStorageOrigin}.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100012 - Invalid web storage origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static getOrigins(): Promise<Array<WebStorageOrigin>>;
    /**
     * Obtains information about all origins that are currently using the Web SQL Database.
     * This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<Array<WebStorageOrigin>> } callback - Callback used to return
     *     the information about the origins. For details, see {@link WebStorageOrigin}.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100012 - Invalid web storage origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static getOrigins(callback: AsyncCallback<Array<WebStorageOrigin>>): void;
    /**
         * Get the web storage quota with the origin.
         *
     * @param { string } origin -  The origin which to be inquired.
     * @returns { Promise<double> } - 字节
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static getOriginQuota(origin: string): Promise<double>;
    /**
     * Get the web storage quota with the origin.
     * @param { string } origin -  The origin which to be inquired.
     * @param { AsyncCallback<double> } callback - the callback of getOriginQuota.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static getOriginQuota(origin: string, callback: AsyncCallback<double>): void;
    /**
     * Get the web amount of storage with the origin.
     * @param { string } origin -  The origin which to be inquired.
     * @returns { Promise<double> } - the promise returned by the function. Unit: byte.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static getOriginUsage(origin: string): Promise<double>;
    /**
     * Get the web amount of storage with the origin.
     * @param { string } origin -  The origin which to be inquired.
     * @param { AsyncCallback<double> } callback - the callback of getOriginUsage.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static getOriginUsage(origin: string, callback: AsyncCallback<double>): void;
    }
  /**
   * Implements a WebDataBase object.
   *
   * <p><strong>API Note</strong>:<br>
   * You must load the Web component before calling the APIs in WebDataBase.
   * </p>
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  class WebDataBase {
    /**
     * Get whether instances holds any http authentication credentials.
     * @returns { boolean } true if instances saved any http authentication credentials otherwise false.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static existHttpAuthCredentials(): boolean;
    /**
     * Deletes all HTTP authentication credentials saved in the cache. This API returns the result synchronously.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static deleteHttpAuthCredentials(): void;
    /**
     * Get http authentication credentials.
     * @param { string } host - The host to which the credentials apply.
     * @param { string } realm - The realm to which the credentials apply.
     * @returns { Array<string> } Return an array containing username and password.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static getHttpAuthCredentials(host: string, realm: string): Array<string>;
    /**
     * Saves HTTP authentication credentials for a given host and realm. This API returns the result synchronously.
     * @param { string } host - Host to which HTTP authentication credentials apply.
     * @param { string } realm - Realm to which HTTP authentication credentials apply.
     * @param { string } username - User name.
     * @param { string } password - Password.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static saveHttpAuthCredentials(host: string, realm: string, username: string, password: string): void;
    }
  /**
   * Implements a GeolocationPermissions object.
   *
   * <p><strong>API Note</strong>:<br>
   * You must load the Web component before calling the APIs in GeolocationPermissions.
   * </p>
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  class GeolocationPermissions {
    /**
     * Allows the specified origin to use the geolocation information.
     * @param { string } origin - Index of the origin.
     * @param { boolean } incognito - Whether to allow the specified origin to use the geolocation information
     *                                in incognito mode. {@code true} means to allow the specified origin to use the
     *                                geolocation information in incognito mode; {@code false} means to allow the
     *                                specified origin to use the geolocation information in normal non-incognito mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static allowGeolocation(origin: string, incognito?: boolean): void;
    /**
     * Delete geolocation permissions for specifies source.
     * @param { string } origin - Url source.
     * @param { boolean } incognito - {@code true} delete geolocation permissions for specifies source
     *                                in incognito mode; {@code false} otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static deleteGeolocation(origin: string, incognito?: boolean): void;
    /**
     * Clears the geolocation permission status of all sources.
     *
     * @param { boolean } incognito - Whether to clear the geolocation permission status of all sources in incognito
     *                                mode. {@code true} means to clear the geolocation permission status of
     *                                all sources in incognito mode; {@code false} means to clear the geolocation
     *                                permission status of all sources in normal non-incognito mode.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static deleteAllGeolocation(incognito?: boolean): void;
    /**
     * Gets the geolocation permission status of the specified source.
     * @param { string } origin - Url source.
     * @param { boolean } incognito - {@code true} gets the geolocation permission status of the
     *                                specified source in incognito mode; {@code false} otherwise.
     * @returns { Promise<boolean> } A Promise instance that obtains the permission status of the specified
     *     source and obtains successfully, true for authorization, false for access denial.
     *     Failed to get, indicating that the permission status of the specified source does not exist.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static getAccessibleGeolocation(origin: string, incognito?: boolean): Promise<boolean>;
    /**
     * Gets the geolocation permission status of the specified source.
     * @param { string } origin - Url source.
     * @param { AsyncCallback<boolean> } callback - Returns the geolocation permission status for
     *     the specified source. Successful acquisition, true means authorized, false means access is
     *     denied. Failed to get, indicating that the permission status of the specified source does not exist.
     * @param { boolean } incognito - {@code true} gets the geolocation permission status of the
     *                                specified source in incognito mode; {@code false} otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static getAccessibleGeolocation(origin: string, callback: AsyncCallback<boolean>, incognito?: boolean): void;
    /**
     * Get all stored geolocation permission url source.
     * @param { boolean } incognito - {@code true} get all stored geolocation permission url source
     *                                in incognito mode; {@code false} otherwise.
     * @returns { Promise<Array<string>> } A Promise instance that gets all source information about
     *     the stored geolocation permission state.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static getStoredGeolocation(incognito?: boolean): Promise<Array<string>>;
    /**
     * Get all stored geolocation permission url source.
     * @param { AsyncCallback<Array<string>> } callback - Returns all source information for
     *     stored geolocation permission states.
     * @param { boolean } incognito - {@code true} gets all stored geolocation permission url
     *                                source in incognito mode; {@code false} otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static getStoredGeolocation(callback: AsyncCallback<Array<string>>, incognito?: boolean): void;
    }
  /**
   * Defines the Web's HTTPCookie.
   * <p><strong>API Note</strong>:<br>
   * The maximum length allowed for each attribute value in a cookie string is 1024.
   * </p>
   *
   * @typedef WebHttpCookie
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  interface WebHttpCookie {
    /**
     * Gets the domain of the cookie.
     *
     * @type { string } The cookie's domain.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    domain: string;
    /**
     * Gets the cookie's path.
     *
     * @type { string } The cookie's path.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    path: string;
    /**
     * Gets the cookie's name.
     *
     * @type { string } The cookie's name.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    name: string;
    /**
     * Gets the cookie's value.
     *
     * @type { string } The cookie's value.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    value: string;
    /**
     * Gets the cookie's expiration date.
     *
     * @type { string } The cookie's expiration date.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    expiresDate: string;
    /**
     * Gets if the cookie is session cookie.
     *
     * @type { boolean } True if the cookie is session cookie.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    isSessionCookie: boolean;
    /**
     * Gets whether the current cookie is marked as HttpOnly.
     *
     * @type { boolean } True if the cookie is marked as HttpOnly.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    isHttpOnly: boolean;
    /**
     * Gets whether the current cookie is marked as Secure.
     *
     * @type { boolean } True if the cookie is secure.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    isSecure: boolean;
    /**
     * Gets the cookie's samesite policy.
     *
     * @type { WebHttpCookieSameSitePolicy } The samesite policy.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    samesitePolicy: WebHttpCookieSameSitePolicy;
    }
  /**
   * Provides methods for managing the web cookies.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  class WebCookieManager {
    /**
     * Fetches all stored cookies asynchronously.
     *
     * @param { boolean } incognito - {@code true} Gets all cookies in incognito context; {@code false} otherwise.
     * @returns { Promise<Array<WebHttpCookie>> } - A promise resolved after the cookies gotten.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static fetchAllCookies(incognito: boolean): Promise<Array<WebHttpCookie>>;


    /**
     * Gets all cookies for the given URL.
     *
     * @param { string } url - The URL for which the cookies are requested.
     * @param { boolean } incognito - {@code true} gets all cookies for the given URL
     *                                in incognito mode; {@code false} otherwise.
     * @returns { string } - The cookie value for the given URL.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static fetchCookieSync(url: string, incognito?: boolean): string;
    /**
     * Gets all cookies for the given URL Asynchronously.
     *
     * @param { string } url - The URL for which the cookies are requested.
     * @returns { Promise<string> } - A promise resolved after the cookies of given URL have been gotten.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static fetchCookie(url: string): Promise<string>;
    /**
     * Gets all cookies for the given URL Asynchronously.
     *
     * @param { string } url - The URL for which the cookies are requested.
     * @param { boolean } incognito - {@code true} gets all cookies for the given URL
     *     in incognito mode; {@code false} otherwise.
     * @returns { Promise<string> } - A promise resolved after the cookies of given URL have been gotten.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static fetchCookie(url: string, incognito: boolean): Promise<string>;
    /**
     * Gets all cookies for the given URL Asynchronously.
     *
     * @param { string } url - The URL for which the cookies are requested.
     * @param { AsyncCallback<string> } callback - Called after the cookies of given URL have been gotten.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static fetchCookie(url: string, callback: AsyncCallback<string>): void;
    /**
     * Set a single cookie (key-value pair) for the given URL.
     *
     * @param { string } url - The URL for which the cookie is to be set.
     * @param { string } value - The cookie as a string, using the format of the 'Set-Cookie' HTTP response header.
     * @param { boolean } incognito - {@code true} set a single cookie (key-value pair) for the given URL
     *                                in incognito mode; {@code false} otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @throws { BusinessError } 17100005 - The provided cookie value is invalid. It must follow the format specified
     * <br>in RFC 6265.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static configCookieSync(url: string, value: string, incognito?: boolean): void;
    /**
     * Set a single cookie (key-value pair) for the given URL.
     *
     * @param { string } url - The URL for which the cookie is to be set.
     * @param { string } value - The cookie as a string, using the format of the 'Set-Cookie' HTTP response header.
     * @param { boolean } incognito - {@code true} set a single cookie (key-value pair) for the given URL
     *     in incognito mode; {@code false} otherwise.
     * @param { boolean } includeHttpOnly - {@code true} HTTP-only cookies can also be overwritten;
     *     {@code false} otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @throws { BusinessError } 17100005 - The provided cookie value is invalid. It must follow the format specified
     * <br>in RFC 6265.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static configCookieSync(url: string, value: string, incognito: boolean, includeHttpOnly: boolean): void;
    /**
     * Set a single cookie (key-value pair) for the given URL Asynchronously.
     *
     * @param { string } url - The URL for which the cookie is to be set.
     * @param { string } value - The cookie as a string, using the format of the 'Set-Cookie' HTTP response header.
     * @returns { Promise<void> } - A promise resolved after the cookies of given URL have been set.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @throws { BusinessError } 17100005 - The provided cookie value is invalid. It must follow the format specified
     * <br>in RFC 6265.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static configCookie(url: string, value: string): Promise<void>;
    /**
     * Set a single cookie (key-value pair) for the given URL Asynchronously.
     *
     * @param { string } url - The URL for which the cookie is to be set.
     * @param { string } value - The cookie as a string, using the format of the 'Set-Cookie' HTTP response header.
     * @param { boolean } incognito - {@code true} set a single cookie (key-value pair) for the given URL
     *     in incognito mode; {@code false} otherwise.
     * @param { boolean } includeHttpOnly - {@code true} HTTP-only cookies can also be overwritten;
     *     {@code false} otherwise.
     * @returns { Promise<void> } - A promise resolved after the cookies of given URL have been set.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @throws { BusinessError } 17100005 - The provided cookie value is invalid. It must follow the format specified
     * <br>in RFC 6265.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static configCookie(url: string, value: string, incognito: boolean, includeHttpOnly: boolean): Promise<void>;
    /**
     * Set a single cookie (key-value pair) for the given URL Asynchronously.
     *
     * @param { string } url - The URL for which the cookie is to be set.
     * @param { string } value - The cookie as a string, using the format of the 'Set-Cookie' HTTP response header.
     * @param { AsyncCallback<void> } callback - Called after the cookies have been set.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @throws { BusinessError } 17100005 - The provided cookie value is invalid. It must follow the format specified
     * <br>in RFC 6265.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static configCookie(url: string, value: string, callback: AsyncCallback<void>): void;
    /**
     * Save the cookies synchronously.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static saveCookieSync(): void;
    /**
     * Save the cookies Asynchronously.
     * @returns { Promise<void> } - A promise resolved after the cookies have been saved.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static saveCookieAsync(): Promise<void>;
    /**
     * Save the cookies Asynchronously.
     * @param { AsyncCallback<void> } callback - Called after the cookies have been saved.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static saveCookieAsync(callback: AsyncCallback<void>): void;
    /**
     * Get whether the instance can send and accept cookies.
     *
     * @returns { boolean } True if the instance can send and accept cookies else false.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static isCookieAllowed(): boolean;
    /**
     * Set whether the instance should send and accept cookies.
     * By default this is set to be true.
     *
     * @param { boolean } accept - Whether the instance should send and accept cookies.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static putAcceptCookieEnabled(accept: boolean): void;
    /**
     * Get whether the instance can send and accept thirdparty cookies.
     *
     * @returns { boolean } True if the instance can send and accept thirdparty cookies else false.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static isThirdPartyCookieAllowed(): boolean;
    /**
     * Set whether the instance should send and accept thirdparty cookies.
     * By default this is set to be false.
     *
     * @param { boolean } accept - Whether the instance should send and accept thirdparty cookies.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static putAcceptThirdPartyCookieEnabled(accept: boolean): void;
    /**
     * Check whether exists any cookies.
     *
     * @param { boolean } incognito - {@code true} check whether exists any cookies.
     *                                in incognito mode; {@code false} otherwise.
     * @returns { boolean } True if exists more than one cookie else false;
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static existCookie(incognito?: boolean): boolean;
    /**
     * Remove all cookies.
     *
     * @param { boolean } incognito - {@code true} remove all cookies in incognito mode;
     *                                {@code false} otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static clearAllCookiesSync(incognito?: boolean): void;
    /**
     * Remove all cookies Asynchronously.
     * @returns { Promise<void> } - A promise resolved after the cookies have been deleted.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static clearAllCookies(): Promise<void>;
    /**
     * Remove all cookies Asynchronously.
     * @param { AsyncCallback<void> } callback - Called after the cookies have been deleted.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static clearAllCookies(callback: AsyncCallback<void>): void;
    /**
     * Delete the session cookies.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static clearSessionCookieSync(): void;
    /**
     * Delete the session cookies Asynchronously.
     * @returns { Promise<void> } - A promise resolved after the cookies have been deleted.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static clearSessionCookie(): Promise<void>;
    /**
     * Delete the session cookies Asynchronously.
     * @param { AsyncCallback<void> } callback - Called after the cookies have been deleted.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static clearSessionCookie(callback: AsyncCallback<void>): void;

    /**
     * Delays the initialization of the web engine. By default, the web engine is initialized
     * when the CookieManager interface is called. By setting the 'lazy' parameter to true,
     * the web engine will not be initialized when the CookieManager interface is called.
     * Instead, the web engine will be initialized either when the web component is created
     * or when initializeWebEngine is called.
     *
     * @param { boolean } lazy - Controls whether to delay the initialization of the web engine.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static setLazyInitializeWebEngine(lazy: boolean): void;
    }
  /**
   * Enum type supplied to {@link onMessageEventExt} for indicating the type of web message.
   *
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum WebMessageType {
    /**
     * Unsupported data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    NOT_SUPPORT = 0,
    /**
     * The string data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    STRING = 1,
    /**
     * The number data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    NUMBER = 2,
    /**
     * The boolean data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    BOOLEAN = 3,
    /**
     * The arraybuffer data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    ARRAY_BUFFER = 4,
    /**
     * The array data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    ARRAY = 5,
    /**
     * The error data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    ERROR = 6
    }
  /**
   * The message received or sent from web message port.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  class WebMessageExt {
    /**
     * Get the type of the web message.
     * @returns { WebMessageType } - Returns data of WebMessageType type
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getType(): WebMessageType;
    /**
     * Get the string value of the web message.
     * @returns { string } - Returns data of string type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getString(): string;
    /**
     * Get the number value of the web message.
     * @returns { double | long } - Returns data of number type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getNumber(): double | long;
    /**
     * Get the boolean value of the web message.
     * @returns { boolean } - Returns data of Boolean type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getBoolean(): boolean;
    /**
     * Get the array buffer value of the web message.
     * @returns { ArrayBuffer } - Returns data of ArrayBuffer type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getArrayBuffer(): ArrayBuffer;
    /**
     * Get the array value of the web message.
     * @returns { Array<string | double | long | boolean> } - Returns data of Array type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getArray(): Array<string | double | long | boolean>;
    /**
     * Get the error value of the web message.
     * @returns { Error } - Returns data of Error type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getError(): Error;
    /**
     * Set the type of the web message.
     * @param { WebMessageType } type - set WebMessageType type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    setType(type: WebMessageType): void;
    /**
     * Set the string value of the web message.
     * @param { string } message - set string type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    setString(message: string): void;
    /**
     * Set the number value of the web message.
     * @param { double } message - set number type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    setNumber(message: double): void;
    /**
     * Set the boolean value of the web message.
     * @param { boolean } message - set boolean type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    setBoolean(message: boolean): void;
    /**
     * Set the array buffer value of the web message.
     * @param { ArrayBuffer } message - set ArrayBuffer type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    setArrayBuffer(message: ArrayBuffer): void;
    /**
     * Set the array value of the web message.
     * @param { Array<string | double | long | boolean> } message - set Array type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    setArray(message: Array<string | double | long | boolean>): void;
    /**
     * Set the error value of the web message.
     * @param { Error } message - set Error type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    setError(message: Error): void;
    }
  /**
   * WebMessage type supplied to {@link onMessageEventExt} for indicating the type of web message.
   *
   * @typedef { ArrayBuffer | string }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  type WebMessage = ArrayBuffer | string;
  /**
   * Define html web message port.
   * @typedef WebMessagePort
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  interface WebMessagePort {
    /**
     * The flag indicates whether more formats are supported than string and array buffers.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    isExtentionType?: boolean;
    /**
     * Close port.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    close(): void;
    /**
     * Post a message to other port.
     * @param { WebMessage } message - Message to send.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100010 - Failed to post messages through the port.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    postMessageEvent(message: WebMessage): void;
    /**
     * Receive message from other port.
     * @param { function } callback - Callback function for receiving messages.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100006 - Failed to register a message event for the port.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    onMessageEvent(callback: (result: WebMessage) => void): void;
    /**
     * Post a message to other port.
     * @param { WebMessageExt } message - Message to send.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100010 - Failed to post messages through the port.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    postMessageEventExt(message: WebMessageExt): void;
    /**
     * Receive message from other port.
     * @param { function } callback - Callback function for receiving messages.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100006 - Failed to register a message event for the port.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    onMessageEventExt(callback: (result: WebMessageExt) => void): void;
    }
  /**
   * Provides information for history item in BackForwardList.
   * @typedef HistoryItem
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  interface HistoryItem {
    /**
     * Pixelmap of icon.
     * @type { image.PixelMap }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    icon: image.PixelMap;
    /**
     * Url of this history item.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    historyUrl: string;
    /**
     * Original request url of this history item.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    historyRawUrl: string;
    /**
     * Title of this history item.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    title: string;
    }
  /**
   * Provides back and forward history list information method. related to {@link HistoryItem}.
   * @typedef BackForwardList
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  interface BackForwardList {
    /**
     * Current index in BackForwardList.
     * @type { int }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    currentIndex: int;
    /**
     * Size of in BackForwardList.
     * @type { int }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    size: int;
    /**
     * Get history entry at given index.
     *
     * @param { int } index Index of back forward list entry.
     * @returns { HistoryItem } HistoryItem at given index in back forward list.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getItemAtIndex(index: int): HistoryItem;
    }
  /**
   * Defines the snapshot info.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  interface SnapshotInfo {
    /**
     * Id of the snapshot.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    id?: string;
    /**
     * Size of the web.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    size?: SizeOptions;
    }
  /**
   * Defines the snapshot result.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  interface SnapshotResult {
    /**
     * Id of the snapshot.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    id?: string;
    /**
     * The status of the snapshot.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    status?: boolean;
    /**
     * Size of the web.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    size?: SizeOptions;
    /**
     * The image in PixelMap format.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    imagePixelMap?: image.PixelMap;
    }
  /**
   * Enum type supplied to {@link runJavaScriptExt} for indicating the result of JavaScript code execution.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum JsMessageType {
    /**
     * Unsupported data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    NOT_SUPPORT = 0,
    /**
     * The string data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    STRING = 1,
    /**
     * The number data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    NUMBER = 2,
    /**
     * The boolean data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    BOOLEAN = 3,
    /**
     * The arraybuffer data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    ARRAY_BUFFER = 4,
    /**
     * The array data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    ARRAY = 5
    }
  /**
   * The message for indicating the of result of JavaScript code execution.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  class JsMessageExt {
    /**
     * Get the type of the JavaScript code execution result.
     * @returns { JsMessageType } - Returns data of JsMessageType type
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getType(): JsMessageType;
    /**
     * Get the string value of the JavaScript code execution result.
     * @returns { string } - Returns data of string type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getString(): string;
    /**
     * Get the number value of the JavaScript code execution result.
     * @returns { double | long } - Returns data of number type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getNumber(): double | long;
    /**
     * Get the boolean value of the JavaScript code execution result.
     * @returns { boolean } - Returns data of Boolean type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getBoolean(): boolean;
    /**
     * Get the array buffer value of the JavaScript code execution result.
     * @returns { ArrayBuffer } - Returns data of ArrayBuffer
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getArrayBuffer(): ArrayBuffer;
    /**
     * Get the array value of the the JavaScript code execution result.
     * @returns { Array<string | double | long | boolean> } - Returns data of Array type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getArray(): Array<string | double | long | boolean>;

    /**
     * Get the object or exception of the the JavaScript code execution result and serialize it into a string.
     * @returns { string | null } - if an exception occurs, or the returned type is object, return the
     *     serialized string in the format of "Not support type: <{exception|object}>", Parts exceeding a length of
     *     2048 will be truncated; otherwise, return null.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getErrorDescription(): string | null;
    }
  /**
   * ArkWeb渲染子进程模式类型。
   *
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum RenderProcessMode {
    /**
     * ArkWeb单渲染子进程模式。该模式下，多个Web复用一个渲染子进程。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    SINGLE = 0,
    /**
     * ArkWeb多渲染子进程模式。该模式下，每个Web一个渲染子进程。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    MULTIPLE = 1
    }
  /**
   * Defines the PrefetchOptions class.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  class PrefetchOptions {

    /**
     * ?Set prefetch page interval limit.
     * <p><strong>API Note</strong>:<br>
     * Unit: ms. Default 500ms (ensures only one successful prefetch within 500ms).
     * The interval throttles prefetch frequency to balance performance and resource usage.
     *
     * @type { int }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    minTimeBetweenPrefetchesMs: int;

    /**
     * Set whether to ignore Cache-Control: no-store?.
     * <p><strong>API Note</strong>:<br>
     * This setting controls whether prefetch operations bypass the HTTP Cache-Control: no-store directive.
     * Important?: Default behavior (false) aligns with HTTP security standards. Overriding (true) requires explicit risk
     * assessment for non-sensitive resources.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    ignoreCacheControlNoStore: boolean;
    /**
     * Constructor for PrefetchOptions.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    constructor();
    }
  /**
   * Options of generating code cache
   * @typedef CacheOptions
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  interface CacheOptions {
    /**
     * Response headers used to configure the validation key of code cache.
     * Currently only support E-Tag and Last-Modified.
     *
     * @type { Array<WebHeader> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    responseHeaders: Array<WebHeader>;
    }
  /**
   * Enum type supplied to {@link OfflineResourceMap} for indicating the type of resource.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum OfflineResourceType {
    /**
     * Resource of the image type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    IMAGE = 0,
    /**
     * Resource of the CSS type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    CSS = 1,
    /**
     * Javascript resource loaded through the <script src="" /> tag.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    CLASSIC_JS = 2,
    /**
     * Javascript resource loaded through the <script src="" type="module" /> tag.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    MODULE_JS = 3
    }
  /**
   * Define offline resource's content and info.
   * @typedef OfflineResourceMap
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  interface OfflineResourceMap {
    /**
     * Url list of resource. Url of urlList must be HTTP/HTTPS protocol and no longer than 2048.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    urlList: Array<string>;
    /**
     * Arraybuffer of resource. Size must less than 10Mb and cannot be empty.
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    resource: Uint8Array;
    /**
     * Response headers of resource.
     *
     * @type { Array<WebHeader> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    responseHeaders: Array<WebHeader>;
    /**
     * Resource type
     *
     * @type { OfflineResourceType }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    type: OfflineResourceType;
    }
  /**
   * Scroll滚动类型，用于{@link setScrollable}。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum ScrollType {
    /**
     * 滚动事件，表示通过触摸屏，触摸板，鼠标滚轮生成的网页滚动。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    EVENT = 0
    }
  /**
   * WebViewController与Web组件的绑定状态。
   *
   * @enum { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum ControllerAttachState {
    /**
     * 未绑定状态。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    UNATTACHED = 0,
    /**
     * 已绑定状态。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    ATTACHED = 1
    }
  /**
   * Enumerates the error codes of blankless. For details, see {@link setBlanklessLoadingWithKey} or {@link
   * BlanklessInfo}.
   *
   * @enum { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum WebBlanklessErrorCode {
    /**
     * The operation is successful.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    SUCCESS = 0,
    /**
     * Unknown error.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    ERR_UNKNOWN = -1,
    /**
     * Invalid parameter.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    ERR_INVALID_PARAM = -2,
    /**
     * The web controller is not bound to any component.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    ERR_CONTROLLER_NOT_INITED = -3,
    /**
     * The key value is not matched. This error code is returned when the key values of
     * setBlanklessLodingWithKey and getBlanklessInfoWithKey are not matched.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    ERR_KEY_NOT_MATCH = -4,
    /**
     * The system determines that the change is too large when the similarity is less than 0.33. As a result,
     * the setBlanklessLodingWithKey API fails to enable frame interpolation.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    ERR_SIGNIFICANT_CHANGE = -5,

    /**
     * BlanklessLoadingParam.duration的值不在有效值范围内
     *
     * 设备行为差异:仅支持手机平台，其他平台返回801
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 static
     */
    ERR_DURATION_OUT_OF_RANGE = -6,

    /**
     * BlanklessLoadingParam.expirationTime不在有效值范围内
     *
     * 设备行为差异:仅支持手机平台，其他平台返回801
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 static
     */
    ERR_EXPIRATION_TIME_OUT_OF_RANGE = -7
    }

  /**
   * 插帧状态信息
   *
   * <strong>ArkWeb Dual Web Engine Versioning Convention</strong>:
   * <p>See [ArkWeb Dual Web Engine Versioning Convention] for switching between Legacy and Evergreen Web Engine.
   *
   * 设备行为差异:仅支持手机平台，其他平台返回801
   *
   * @enum { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 23 static
   */
  enum BlanklessFrameInterpolationState {
    /**
     * 插帧成功
     *
     * 设备行为差异:仅支持手机平台，其他平台返回801
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 static
     */
    FRAME_INTERPOLATION_SUCCEEDED = 0,

    /**
     * 插帧失败
     *
     * 设备行为差异:仅支持手机平台，其他平台返回801
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 static
     */
    FRAME_INTERPOLATION_FAILED = 1,

    /**
     * 插帧移除
     *
     * 设备行为差异:仅支持手机平台，其他平台返回801
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 static
     */
    FRAME_INTERPOLATION_REMOVED = 2
    }

  /**
   * Enum type for ArkWeb Engine Version.
   *
   * <strong>ArkWeb Dual Web Engine Versioning Convention</strong>:
   * <p>See [ArkWeb Dual Web Engine Versioning Convention] for switching between Legacy and Evergreen Web Engine.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum ArkWebEngineVersion {
    /**
     * Use the system default ArkWeb engine.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    SYSTEM_DEFAULT = 0,
    /**
     * ArkWeb M114 version.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    M114 = 1,
    /**
     * ArkWeb M132 version.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    M132 = 2,
    /**
         * ArkWeb auto use the newest ArkWeb Engine version.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 26.0.0 static
     */
    M144 = 3,
    /**
         * ArkWeb auto use the newest ArkWeb Engine version.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    ARKWEB_EVERGREEN = 99999
    }
  /**
   * Defines the blankless information.
   *
   * @typedef BlanklessInfo
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  interface BlanklessInfo {
    /**
     * Defines the error codes of blankless.
     * @type { WebBlanklessErrorCode }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    errCode: WebBlanklessErrorCode;
    /**
     * Obtains the similarity of snapshots generated by the blankless loading solution based on the last
     * several snapshots. The value ranges from 0 to 1.0. The value 1.0 indicates that the snapshots are the same. A
     * value closer to 1 indicates higher similarity. This value has a certain lag, meaning that the similarity of
     * the current loading will only be reflected in the next loading.
     * It is recommended that the frame interpolation functionality be disabled when the similarity is 0.
     * @type { double }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    similarity: double;
    /**
     * Obtains the loading time based on the historical loading time. The unit is ms and the value is greater
     * than 0.
     *
     * @type { int }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    loadingTime: int;
    }

  /**
   * 插帧状态信息
   *
   * 设备行为差异:仅支持手机平台，其他平台返回801
   *
   * @typedef BlanklessFrameInterpolationInfo
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 23 static
   */
  interface BlanklessFrameInterpolationInfo {
    /**
     * 唯一标识本页面的key值
     *
     * 设备行为差异:仅支持手机平台，其他平台返回801
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 static
     */
    key: string;

    /**
     * 当前插帧状态
     *
     * 设备行为差异:仅支持手机平台，其他平台返回801
     *
     * @type { BlanklessFrameInterpolationState }
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 static
     */
    state: BlanklessFrameInterpolationState;

    /**
     * 帧插入或者移除的时间点
     *
     * 设备行为差异:仅支持手机平台，其他平台返回801
     *
     * @type { int }
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 static
     */
    timestamp: int;

    /**
     * 插帧失败的原因
     *
     * 设备行为差异:仅支持手机平台，其他平台返回801
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 static
     */
    reason: string;
  }

  /**
   * 插帧加载参数
   *
   * 设备行为差异:仅支持手机平台，其他平台返回801
   *
   * @typedef BlanklessLoadingParam
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 23 static
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
     * @since 23 static
     */
    enable: boolean;

    /**
     * 本次插入帧的存续时间，单位ms。有效时长范围为 {0} 和 [200, 2000]的并集。
     *
     * 设备行为差异:仅支持手机平台，其他平台返回801
     *
     * @type { ?int }
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 static
     */
    duration?: int;

    /**
     * 历史帧失效时间，UTC时间，单位：ms。用T表示当前UTC时间，同时已知30天为2592000000ms，取值范围：(T, T + 2592000000] 和 {0}的并集，其中0表示不指定失效时间，采用系统默认失效时间（7天）。
     *
     * 设备行为差异:仅支持手机平台，其他平台返回801
     *
     * @type { ?int }
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 static
     */
    expirationTime?: int;

    /**
     * 白屏插帧回调函数，用于返回白屏插帧信息
     *
     * 设备行为差异:仅支持手机平台，其他平台返回801
     *
     * @type { ?Callback<BlanklessFrameInterpolationInfo> }
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 static
     */
    callback?: Callback<BlanklessFrameInterpolationInfo>;
  }

  /**
   * 安全特性选项配置。
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  interface SecurityParams {
    /**
     * 是否禁用JIT编译。true表示禁用，false表示不禁用。默认值：false。
     * V8引擎为了性能，会将热点代码编译为机器码。绝大多数浏览器漏洞（如Type Confusion）都是通过操纵JIT优化过程实现的。禁用后不影响网页功能，
     * 对于复杂JS代码性能下降17%左右。建议有条件禁用该特性，对于纯展示类、非计算密集型页面（例如新闻、文档）建议不禁用。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    disableJITCompilation?: boolean;
    /**
     * 是否禁用WebAssembly。true表示禁用，false表示不禁用。默认值：false。
     * 编译后的机器码在WASM中执行，而WASM容易存在内存安全漏洞。建议有条件禁用，对于纯展示类、非计算密集型页面（例如新闻、文档）建议禁用。
     * 禁用后潜在影响依赖视频编解码、复杂加密的网页功能。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    disableWebAssembly?: boolean;
    /**
     * 是否禁用WebGL。true表示禁用，false表示不禁用。默认值：false。
     * WebGL允许JavaScript直接调用GPU驱动进行渲染，攻击者可能利用底层驱动漏洞实现沙箱逃逸或远程代码执行，同时WebGL也可能被应用于用户指纹识别攻击。
     * 禁用后无法进行3D渲染，部分2D画布退回到CPU渲染，可能帧率下降。金融支付类、即时通讯、政务系统等敏感业务建议禁用。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    disableWebGL?: boolean;
    /**
     * 是否禁用PDF查看器。true表示禁用，false表示不禁用。默认值：false。
     * 内置PDF解析引擎在解析复杂二进制格式和嵌入式脚本时容易存在漏洞，攻击者可构造特殊PDF文件利用字体解析或内存破坏漏洞控制应用主进程。
     * 禁用后无法在ArkWeb中加载PDF。非文档办公类App建议禁用，引导用户使用外部应用打开PDF。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    disablePDFViewer?: boolean;
    /**
     * 是否禁用MathML。true表示禁用，false表示不禁用。默认值：false。
     * MathML是内核中一个相对陈旧的渲染模块，往往缺乏足够的自动化审计和模糊测试，容易成为侧信道攻击或属性注入XSS的跳板。
     * 禁用后<math>标签内容将无法正确解析展示，可能影响极少数未进行JS适配的科学网站公式排版。建议禁用。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    disableMathML?: boolean;
    /**
     * 是否禁用Service Worker。true表示禁用，false表示不禁用。默认值：false。
     * Service Worker具有持久化控制权，可在Web页面后台常驻并拦截网络请求。若网页存在XSS漏洞，攻击者可利用其安装恶意Service Worker实施中间人攻击。
     * 禁用后失去离线访问功能、Web消息推送无法使用、失去预加载能力。银行、证券等对会话新鲜度要求极高的行业建议禁用。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    disableServiceWorker?: boolean;
    /**
     * 是否禁用WebRTC非代理UDP。true表示禁用，false表示不禁用。默认值：false。
     * WebRTC开启时可能导致恶意流量绕过代理通道，暴露用户的真实物理IP地址，造成隐私泄露。禁用后强制所有流量走TCP代理会增加延迟，视频通话、实时对讲等功能可能无法建立连接。
     * 匿名社交、出海业务、强制代理等场景建议禁用。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    disableNonProxyUDP?: boolean;
  }

  /**
   * 通过WebviewController可以控制Web组件各种行为（包括页面导航、生命周期状态、JavaScript交互等行为）。一个WebviewController对象只能控制一个Web组件，且必须在Web组件和
   * WebviewController绑定后，才能调用WebviewController上的方法（静态方法除外）。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  class WebviewController {
    /**
     * 用于创建 WebviewController 对象的构造函数。
     * 说明：不传参：new webview.WebviewController()表示构造函数为空，不使用C API时不需要传参。
     * 传参且参数是合法字符串：new webview.WebviewController("xxx")，用于开发者区分多实例，并调用对应实例下的方法。
     * 传入参数为空：new webview.WebviewController("")或new webview.WebviewController(undefined)，该场景下参数无意义，无法区分多个实例，直接返回undefined，需要开发者判断返回值是否正常。
     * Web组件销毁后会解绑WebViewController，之后调用WebviewController的非静态方法会抛出17100001异常，应注意调用时机和捕获异常，防止进程异常退出。
     *
     * @param { string } [webTag] - 指定了 Web 组件的名称。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    constructor(webTag?: string);
    /**
     * Set active ArkWeb engine version.
     * If the system does not support the specified version, it will not take effect.
     * This is a global static API that must be called before initializeWebEngine, and it will have no effect if any
     * Web components are loaded.
     *
     * <strong>Legacy Web Engine Compatibility Note</strong>:
     * <p>When using legacy ArkWeb Engine, some ArkWeb newly created API will not take effect,<br>
     * see [Compatible with Legacy Web Engine in release note]  for compatibility guidelines.
     * </p>
     *
     * @param {ArkWebEngineVersion} engineVersion - the ArkWebEngineVersion
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static setActiveWebEngineVersion(engineVersion: ArkWebEngineVersion): void;
    /**
     * Get the currently active ArkWeb engine version.
     * @returns {ArkWebEngineVersion} Active ArkWeb Engine version as defined by ArkWebEngineVersion
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static getActiveWebEngineVersion(): ArkWebEngineVersion;
    /**
         * Check if the currently active ArkWeb engine is Evergreen.
     * @returns {boolean} true means the application is using the Evergreen Web Engine, false means not.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static isActiveWebEngineEvergreen(): boolean;
    /**
     * 在Web组件初始化之前，通过此接口加载Web引擎的动态库文件，以提高启动性能。自动预连接历史访问过的高频网站。
     * 说明：
     * initializeWebEngine不支持在异步线程中调用，否则会造成崩溃。
     * initializeWebEngine全局生效，在整个APP生命周期中调用一次即可，不需要重复调用。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static initializeWebEngine(): void;
    /**
     * Set web engine to use HttpDns server to resolve dns.
     * @param { SecureDnsMode } secureDnsMode - using HttpDns.
     * @param { string } secureDnsConfig - The configuration of the HttpDns server.
     *     Must be https protocol and only allow one server to be configured.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static setHttpDns(secureDnsMode: SecureDnsMode, secureDnsConfig: string): void;
    /**
     * Sets whether to enable web debugging. By default, web debugging is disabled.
     * For details, see Debugging Frontend Pages by Using DevTools.
     *
     * <p><strong>API Note</strong>:<br>
     * Enabling web debugging allows users to check and modify the internal status of the web page,
     * which poses security risks. Therefore, you are advised not to enable this function
     * in the officially released version of the app.
     * </p>
     *
     * @param { boolean } webDebuggingAccess - Sets whether to enable web debugging.
     *     {@code true} enable web debugging;
     *     {@code false} disable web debugging. The default value is false.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static setWebDebuggingAccess(webDebuggingAccess: boolean): void;
    /**
     * After enable PrivateNetworkAccess feature, ArkWeb will send a CORS preflight request before issuing any
     * sub-resource private network requests to request explicit permission from the target server. After disable
     * PrivateNetworkAccess, ArkWeb will no longer check whether the private network request is legitimate.
     * By default, PrivateNetworkAccess feature is enabled.
     *
     * @param {boolean} enable - {@code true} enable the private network acccess check; {@code false} otherwise.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static enablePrivateNetworkAccess(enable: boolean): void;
    /**
     * Get whether PrivateNetworkAccess is enabled.
     *
     * @returns {boolean} True is enable the ability to check private network access else false.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static isPrivateNetworkAccessEnabled(): boolean;
    /**
     * Enables debugging of web contents.
     * <p><strong>API Note</strong>:<br>
     * The port numbers from 0 to 1024 are prohibited. Ports less than 0 or greater than 65535 are
     * considered invalid.
     * If an attempt is made to set these disabled or invalid ports, an exception will be thrown.
     * </p>
     *
     * @param { boolean } webDebuggingAccess {@code true} enables debugging of web contents;
     *     {@code false} otherwise.
     * @param { int } port Indicates the port of the devtools server. After the port is specified, a tcp server
     *     socket is created instead of a unix domain socket.
     * @throws { BusinessError } 17100023 - The port number is not within the allowed range.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static setWebDebuggingAccess(webDebuggingAccess: boolean, port: int): void;
    /**
     * Set web engine socket idle timeout.
     * <p><strong>API Note</strong>:<br>
     * Unit: seconds, minimum 30s, maximum 5 minutes. If not set, the default is five minutes.
     * </p>
     *
     * @param { int } timeout - Socket idle timeout.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static setSocketIdleTimeout(timeout: int): void;
    /**
     * Enable the ability to check website security risks.
     * Illegal and fraudulent websites are mandatory enabled and can't be disabled by this function.
     * @param { boolean } enable - {@code true} enable check the website security risks; {@code false} otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    enableSafeBrowsing(enable: boolean): void;
    /**
     * Get whether checking website security risks is enabled.
     * @returns { boolean } True if enable the ability to check website security risks else false.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    isSafeBrowsingEnabled(): boolean;
    /**
     * Checks whether the web page can go forward.
     * @returns { boolean } True if the web page can go forward else false.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    accessForward(): boolean;
    /**
     * Checks whether the web page can go back.
     * @returns { boolean } True if the web page can go back else false.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    accessBackward(): boolean;
    /**
     * Checks whether the web page can go back or forward the given number of steps.
     *
     * @param { int } step - The number of steps.
     * @returns { boolean } True if the web page can go back else false.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    accessStep(step: int): boolean;
    /**
     * Goes forward in the history of the web page.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    forward(): void;
    /**
     * Goes back in the history of the web page.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    backward(): void;
    /**
     * Clears the history in the Web.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    clearHistory(): void;
    /**
     * 调用此接口通知Web组件进入前台激活状态。
     * 激活状态是应用与用户互动的状态。应用会保持这种状态，直到发生某些事件（例如收到来电或设备屏幕关闭）时将焦点从应用移开。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    onActive(): void;
    /**
     * 调用此接口通知Web组件进入未激活状态。开发者可以在此回调中实现应用失去焦点时应表现的恰当行为。
     * 此状态下会尽可能的暂停任何可以安全暂停的内容，例如动画和地理位置。
     * 但不会暂停JavaScript，要全局暂停JavaScript，请使用pauseAllTimers。要重新激活Web组件，请调用onActive。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    onInactive(): void;
    /**
     * Refreshes the current URL.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    refresh(): void;
    /**
     * Refreshes the current URL.
     *
     * @param { boolean } ignoreCache - If set to true, it indicates an end-to-end request with "pragma: no-cache";
     *     otherwise, it performs a normal refresh.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
     */
    refresh(ignoreCache: boolean): void;
    /**
     * Loads the data or URL.
     *
     * @param { string } data - A string encoded according to "Base64" or "URL".
     * @param { string } mimeType - Media type. For example: "text/html".
     * @param { string } encoding - Encoding type. For example: "UTF-8".
     * @param { string } [baseUrl] - A specified URL path ("http"/"https"/"data" protocol),
     *     which is assigned to window.origin by the Web component.
     * @param { string } [historyUrl] - History URL. When it is not empty, it can be managed by
     *     history records to realize the back and forth function.
     *     This property is invalid when baseUrl is empty.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    loadData(data: string, mimeType: string, encoding: string, baseUrl?: string, historyUrl?: string): void;
    /**
         * Loads the data or URL.
         *
     * @param { string | Resource } url - The URL to load.
     * @param { Array<WebHeader> } [headers] - Additional HTTP request header for URL.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid.
     * @throws { BusinessError } 17100003 - Invalid resource path or file type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    loadUrl(url: string | Resource, headers?: Array<WebHeader>): void;
    /**
     * Stores the current page as a web archive.
     *
     * @param { string } baseName - Where the generated offline webpage is stored, This value cannot be null.
     * @param { boolean } autoName - Decide whether to automatically generate the file name. If false, it is
     *     stored by the file name of baseName. If true, the file name is automatically generated based on the
     *     current URL and stored in the file directory of baseName.
     * @returns { Promise<string> } a promise resolved after the web archive has been stored. The parameter
     *     will either be the filename under which the file was stored, or empty if storing the file failed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100003 - Invalid resource path or file type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    storeWebArchive(baseName: string, autoName: boolean): Promise<string>;
    /**
     * Stores the current page as a web archive.
     *
     * @param { string } baseName - Where the generated offline webpage is stored, This value cannot be null.
     * @param { boolean } autoName - Decide whether to automatically generate the file name. If false, it is
     *     stored by the file name of baseName. If true, the file name is automatically generated based on the
     *     current URL and stored in the file directory of baseName.
     * @param { AsyncCallback<string> } callback - called after the web archive has been stored. The parameter
     *     will either be the filename under which the file was stored, or empty if storing the file failed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100003 - Invalid resource path or file type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    storeWebArchive(baseName: string, autoName: boolean, callback: AsyncCallback<string>): void;
    /**
     * 调整当前网页的缩放比例，[zoomAccess]{@link @ohos.web.WebAttribute#zoomAccess}需为true。
     *
     * @param { double } factor - 基于当前网页所需调整的相对缩放比例，入参要求大于0，当入参为1时为默认加载网页的缩放比例，入参小于1为缩小，入参大于1为放大。
     *     <br>取值范围：(0，100]。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100004 - Function not enabled.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    zoom(factor: double): void;
    /**
     * 调用此接口将当前网页进行放大，比例为25%。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100004 - Function not enabled.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    zoomIn(): void;
    /**
     * 调用此接口将当前网页进行缩小，比例为20%。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100004 - Function not enabled.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    zoomOut(): void;
    /**
     * Gets the index value of the current Web component for the management of multiple Web components.
     * @returns { int } Returns the index value of the current Web component.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getWebId(): int;
    /**
     * Gets the default user agent.
     * @returns { string } Return user agent information.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getUserAgent(): string;
    /**
     * Gets the title of current Web page.
     * @returns { string } Return to File Selector Title.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getTitle(): string;
    /**
     * Obtains the height of this web page.
     *
     * @returns { int } Height of the current web page. Unit: vp.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getPageHeight(): int;
    /**
     * Goes forward or back backOrForward in the history of the web page.
     *
     * @param { int } step - Steps to go forward or backward.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    backOrForward(step: int): void;
    /**
     * 使当前web页面获取焦点。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    requestFocus(): void;
    /**
     * Create web message ports
     * @param { boolean } isExtentionType - Set whether the web message port supports extention type.
     * @returns { Array<WebMessagePort> } An array represent 2 WebMessagePort, then can use
     *     those ports to communication with html pages.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    createWebMessagePorts(isExtentionType?: boolean): Array<WebMessagePort>;
    /**
     * Post web message port to html
     *
     * @param { string } name - Data name information to send.
     * @param { Array<WebMessagePort> } ports - Port number array information to send.
     * @param { string } uri - URI to receive this information.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    postMessage(name: string, ports: Array<WebMessagePort>, uri: string): void;
    /**
     * Stops the current load.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    stop(): void;
    /**
     * Registers the supplied ArkTS object into this Web component.
     * The object is registered into all frames of the web page, including all iframes, using the specified name.
     * This allows the methods of the ArkTS object to be accessed from JavaScript.
     * <p><strong>API Note</strong>:<br>
     * Registed objects will not appear in JavaScript until the page is next (re)load.
     * To avoid memory leaks, registerJavaScriptProxy must be used together with deleteJavaScriptProxy.
     * To avoid security risks, it is recommended that registerJavaScriptProxy be used with trusted web components.
     * If the same method is registered repeatedly in both synchronous and asynchronous list,
     * it will default to an asynchronous method.
     * The synchronous function list and asynchronous function list cannot be empty at the same time.<br>
     * otherwise, this registration will fail.
     *  <p>
     *
     * @param { object } jsObject - Application side JavaScript objects participating in registration.
     * @param { string } name - The name of the registered object, which is consistent with the
     *     object name called in the window.
     * @param { Array<string> } methodList - The method of the application side JavaScript object participating
     *     in the registration.
     * @param { Array<string> } [asyncMethodList] - The async method of the application side JavaScript object
     *     participating in the registration.
     * @param { string } [permission] - permission configuration defining web page URLs that can access
     *     JavaScriptProxy methods.
     *     The configuration can be defined at two levels, object level and method level.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    registerJavaScriptProxy(jsObject: object, name: string, methodList: Array<string>,
            asyncMethodList?: Array<string>, permission?: string): void;
    /**
     * Deletes a registered JavaScript object with given name.
     *
     * @param { string } name - The name of a registered JavaScript object to be deleted.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100008 - Failed to delete JavaScriptProxy because it does not exist.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    deleteJavaScriptRegister(name: string): void;
    /**
     * Search all instances of 'searchString' on the page and highlights them,
     * result will be notify through callback onSearchResultReceive.
     *
     * @param { string } searchString - String to be search.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                         The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    searchAllAsync(searchString: string): void;
    /**
     * Clears the highlighting surrounding text matches created by searchAllAsync.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    clearMatches(): void;
    /**
     * Highlights and scrolls to the next match search.
     *
     * @param { boolean } forward - Step of search is back or forward.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    searchNext(forward: boolean): void;
    /**
     * Clears the ssl cache in the Web.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    clearSslCache(): void;
    /**
     * Clears the client authentication certificate cache in the Web.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    clearClientAuthenticationCache(): void;
    /**
     * Asynchronously execute JavaScript in the context of the currently displayed page.
     * The result of the script execution will be returned through a via Promise.
     * This method must be used on the UI thread, and the callback will also be invoked on the UI thread.
     * <p><strong>API Note</strong>:<br>
     * The state of JavaScript is no longer persisted across navigations like loadUrl.
     * For example, global variables and functions defined before calling loadUrl will not exist in the loaded page.
     * It is recommended that applications use registerJavaScriptProxy to ensure that the JavaScript state can be
     * persisted across page navigations.
     * <p>
     *
     * @param { string } script - JavaScript Script.
     * @returns { Promise<string> } A promise is solved after the JavaScript script is executed.
     *     This parameter will be the result of JavaScript script execution.
     *     If the JavaScript script fails to execute or has no return value, null will be returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100003 - Calling a JS method that returns an empty ArrayBuffer via runJavaScript.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    runJavaScript(script: string): Promise<string>;
    /**
     * Asynchronously execute JavaScript in the context of the currently displayed page.
     * The result of the script execution will be returned through an asynchronous callback.
     * This method must be used on the UI thread, and the callback will also be invoked on the UI thread.
     * <p><strong>API Note</strong>:<br>
     * The state of JavaScript is no longer persisted across navigations like loadUrl.
     * For example, global variables and functions defined before calling loadUrl will not exist in the loaded page.
     * It is recommended that applications use registerJavaScriptProxy to ensure that the JavaScript state can be
     * persisted across page navigations.
     * <p>
     *
     * @param { string } script - JavaScript Script.
     * @param { AsyncCallback<string> } callback - Callbacks execute JavaScript script results.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100003 - Calling a JS method that returns an empty ArrayBuffer via runJavaScript.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    runJavaScript(script: string, callback: AsyncCallback<string>): void;
    /**
     * Execute JavaScript code in the context of the currently displayed page, and return the result.
     *
     * @param { string | ArrayBuffer } script - JavaScript Script.
     * @returns { Promise<JsMessageExt> } A promise is solved after the JavaScript script is executed.
     *     This parameter will be the result of JavaScript script execution.
     *     If the JavaScript script fails to execute or has no return value,
     *     a none type value will be returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    runJavaScriptExt(script: string | ArrayBuffer): Promise<JsMessageExt>;
    /**
     * Execute JavaScript code in the context of the currently displayed page, and return the result.
     *
     * @param { string | ArrayBuffer } script - JavaScript Script.
     * @param { AsyncCallback<JsMessageExt> } callback - Callbacks execute JavaScript script results.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    runJavaScriptExt(script: string | ArrayBuffer, callback: AsyncCallback<JsMessageExt>): void;
    /**
     * Rendering current Web page into Pdf data, return the result in async mode.
     *
     * @param { PdfConfiguration } configuration - configuration for createPdf,
     *     including page width and height, etc.
     *     {@Link PdfConfiguration}
     * @param { AsyncCallback<PdfData> } callback - Callbacks execute createPdf results.
     *     PdfData is pdf data stream of current web page in Uint8Array
     *     {@Link PdfData}.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    createPdf(configuration: PdfConfiguration, callback: AsyncCallback<PdfData>): void;
    /**
     * Rendering current Web page into Pdf data, return the result in promise mode.
     *
     * @param { PdfConfiguration } configuration - configuration for createPdf,
     *     including page width and height, etc.
     *     {@Link PdfConfiguration}
     * @returns { Promise<PdfData> } The promise returned by the function.
     *     PdfData is pdf data stream of current web page in Uint8Array
     *     {@Link PdfData}.
     *     If createPdf fails or no return value, a none type value will be returned.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    createPdf(configuration: PdfConfiguration): Promise<PdfData>;
    /**
     * Gets the url of current Web page.
     * @returns { string } Return the url of the current page.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getUrl(): string;
    /**
     * 将Webview的内容向上滚动半个视框大小或者跳转到页面最顶部，通过top入参控制。
     *
     * @param { boolean } top - 是否跳转到页面顶部，如果设置为false，则
     *     页面内容将向上滚动视图框架大小的一半，
     *     当设置为true时，它将跳到页面顶部
     *     - 是否跳转到页面最顶部。<br>false表示将页面内容向上滚动半个视框大小，true表示跳转到页面最顶部。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
     *     unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    pageUp(top: boolean): void;
    /**
     * 将Webview的内容向下滚动半个视框大小或者跳转到页面最底部，通过bottom入参控制。
     *
     * @param { boolean } bottom - 是否跳转到页面底部，如果设置为false，则
     *     页面内容将向下滚动视图框架大小的一半，
     *     当设置为true时，它将跳转到页面底部
     *     - 是否跳转到页面最底部。<br>false时表示将页面内容向下滚动半个视框大小，true表示跳转到页面最底部。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
     *     unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    pageDown(bottom: boolean): void;
    /**
     * Gets the original url of current Web page.
     * @returns { string } Return the original url of the current page.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getOriginalUrl(): string;
    /**
     * Gets the favicon of current Web page.
     * @returns { image.PixelMap } Return the favicon bitmap of the current page.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getFavicon(): image.PixelMap;
    /**
     * Put network state for web. Which is used to set window.navigator.onLine property in
     * JavaScript.
     * @param { boolean } enable - Whether enable window.navigator.onLine.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    setNetworkAvailable(enable: boolean): void;
    /**
     * Asynchronous search for image existence on the current page through Promise method.
     *
     * @returns { Promise<boolean> } A promise resolved after query image has finished.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    hasImage(): Promise<boolean>;
    /**
     * Asynchronous search for the presence of an image on the current page through callback method.
     *
     * @param { AsyncCallback<boolean> } callback - Called after query image has finished.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    hasImage(callback: AsyncCallback<boolean>): void;
    /**
     * Get back forward stack list from current webview.
     * @returns { BackForwardList } Back forward list for current webview.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getBackForwardEntries(): BackForwardList;
    /**
     * Clears the cache in the application. This API will clear the cache for all webviews in the same application.
     *
     * <p><strong>API Note</strong>:<br>
     * You can view the Webview cache in the data/storage/el2/base/cache/web/Cache directory.
     * </p>
     *
     * @param { boolean } clearRom - Whether to clear the cache in the ROM and RAM at the same time.
     *     {@code true} means to clear the cache in the ROM and RAM at the same time;
     *     {@code false} means to only clear the cache in the RAM.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    removeCache(clearRom: boolean): void;
    /**
     * Remove resource cache in application. So this method will remove all cache for all web components in the
     * same application.
     *
     * @param { boolean } clearRom - Remove cache in both rom and ram if true. Otherwise only clear cache
     *     in ram.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static removeAllCache(clearRom: boolean): void;
    /**
     * 在指定时间内，将页面滚动到指定的绝对位置。
     *
     * @param { double } x - 位置的x
     *     - 绝对位置的水平坐标，当传入数值为负数时，按照传入0处理。<br>单位：vp。<br><br>
     * @param { double } y - 位置的y
     *     - 绝对位置的垂直坐标，当传入数值为负数时，按照传入0处理。<br>单位：vp。<br><br>
     * @param { int } [duration] - the scroll animation duration.
     *     <br>取值范围为全体整数，如果没有传递值，或者是负数或者是0。
     *     没有
     *     动画化。
     *     <br>Unit: millisecond, The value range is all integers, If the value is not passed, or is negative or 0,
     *     there is no
     *     animation.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
     *     unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    scrollTo(x: double, y: double, duration?: int): void;

    /**
         * 在指定时间内将页面滚动指定的偏移量。
         *
     * @param { double } deltaX - 位置的Δx
         *     - 水平偏移量，其中水平向右为正方向。<br>单位：vp。<br><br>
     * @param { double } deltaY - 位置的Δy
         *     - 垂直偏移量，其中垂直向下为正方向。<br>单位：vp。<br><br>
     * @param { int } [duration] - the scroll animation duration.
         *     <br>取值范围为全体整数，如果没有传递值，或为负数或0，则没有
         *     动画化。
         *     <br>Unit: millisecond, The value range is all integers, If the value is not passed, or is negative or 0,
         *     there is no
         *     animation.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
     *     unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    scrollBy(deltaX: double, deltaY: double, duration?: int): void;

    /**
     * 按照指定速度模拟对页面的轻扫滚动动作。
     *
     * @param { double } vx - 速度的x速度。单位为vp/s
     *     - 轻扫滚动的水平速度分量，其中水平向右为速度正方向。<br>单位：vp/ms。
     * @param { double } vy - 速度的y速度。单位为vp/s
     *     - 轻扫滚动的垂直速度分量，其中垂直向下为速度正方向。<br>单位：vp/ms。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
     *     unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    slideScroll(vx: double, vy: double): void;
    /**
     * 将当前Webview的页面状态历史记录信息序列化。
     * @returns { Uint8Array } 当前Webview的页面状态历史记录序列化后的数据。
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    serializeWebState(): Uint8Array;
    /**
     * 当前Webview从序列化数据中恢复页面状态历史记录。
     * 如果state过大，可能会导致异常。建议state大于512k时，放弃恢复页面状态历史记录。
     * @param { Uint8Array } state - 页面状态历史记录序列化数据。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    restoreWebState(state: Uint8Array): void;
    /**
     * Register Web custom schemes.
     * @param { Array<WebCustomScheme> } schemes - Configuration of web custom scheme.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100020 - Failed to register custom schemes.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static customizeSchemes(schemes: Array<WebCustomScheme>): void;
    /**
     * Register Web custom schemes.
     *
     * @param { Array<WebCustomScheme> } schemes - Configuration of web custom scheme.
     * @param { boolean } lazyInitWebEngine - When true: The interface internally skips initializing WebEngine and
     *     temporarily stores the registered schemes, which will be passed to WebEngine when it actually
     *     initializes. When false: The interface automatically performs WebEngine initialization internally.
     * @throws { BusinessError } 17100020 - Failed to register custom schemes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. The length of the schemes array is greater than 10.
     *     2. The character length of the scheme is greater than 32.
     *     3. The character in the scheme is not within the allowed range of lowercase English letters, numbers,
     *     and the symbols ".", "+", "-".
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static customizeSchemes(schemes: Array<WebCustomScheme>, lazyInitWebEngine: boolean): void;
    /**
     * Get certificate for the current website.
     * @returns { Promise<Array<cert.X509Cert>> } the promise of the current website's certificate.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getCertificate(): Promise<Array<cert.X509Cert>>;
    /**
     * Get certificate for the current website.
     * @param {AsyncCallback<Array<cert.X509Cert>>} callback - the callback of getCertificate.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getCertificate(callback: AsyncCallback<Array<cert.X509Cert>>): void;
    /**
     * Set webpage mute.
     * @param { boolean } mute - Set the audio muted or not.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    setAudioMuted(mute: boolean): void;
    /**
     * Prefetch the resources required by the page, but will not execute js or render the page.
     * @param { string } url - Which url to preresolve/preconnect.
     * @param { Array<WebHeader> } [additionalHeaders] - Additional HTTP request header of the URL.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2*1024*1024.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    prefetchPage(url: string, additionalHeaders?: Array<WebHeader>): void;

    /**
     * Prefetch the resources required by the page, but will not execute js or render the page.
     * <p><strong>API Note</strong>:<br>
     * ?prefetchPage? does not cache resources with Cache-Control: no-store by default,
     * and only allows one prefetch within 500ms.
     * Prefetch behavior can be customized via ?prefetchOptions?, including ignoring Cache-Control:
     * no-store and adjusting the throttling interval.
     *
     * @param { string } url - Which url to preresolve/preconnect.
     * @param { Array<WebHeader> } [additionalHeaders] - Additional HTTP request header of the URL.
     * @param { PrefetchOptions } [prefetchOptions] - Prefetch behavior can be customized via ?prefetchOptions?,
     *     including ignoring Cache-Control: no-store and adjusting the throttling interval.
     * @throws { BusinessError } 17100001 - Init error. The WebviewController must be associated with
     *     a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2*1024*1024.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    prefetchPage(url: string, additionalHeaders?: Array<WebHeader>, prefetchOptions?: PrefetchOptions): void;
    /**
     * Preresolve or Preconnect the url. This API can be called before loading the url to make loading faster.
     * @param { string } url - Which url to preresolve/preconnect.
     * @param { boolean } preconnectable - Indicates whether to preconnect.
     * @param { int } numSockets - If preconnectable is true, this parameter indicates the number of sockets
     *     to be preconnected.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *                           length exceeds 2048.
     * @throws { BusinessError } 17100013 - The number of preconnect sockets is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static prepareForPageLoad(url: string, preconnectable: boolean, numSockets: int): void;
    /**
     * Configure whether to enable automatic pre-connection to high-frequency URLs accessed during the application's
     * previous lifecycle after web initialization.
     * @param { boolean } enabled - Enable if true, disable if false.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static setAutoPreconnect(enabled: boolean): void;
    /**
     * ?Retrieve whether the automatic pre-connection feature is enabled?.
     *
     * @returns { boolean } Return true if enabled, false if disabled.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static isAutoPreconnectEnabled(): boolean;
    /**
     * Set custom user agent.
     * @param { string } userAgent - User custom agent information.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    setCustomUserAgent(userAgent: string): void;
    /**
     * Set the User-Agent to be used for specified hosts, with a maximum of 20,000 hosts.
     * <p><strong>API Note</strong>:<br>
     * Setting the same host list multiple times for the same User-Agent will override
     * the previous settings. That is, if you want to cancel certain hosts from using
     * the specified User-Agent, you need to reset the host list for that User-Agent.
     * </p>
     *
     * @param { string } userAgent - The User-Agent string.
     * @param { Array<string> } hosts - The hosts to which the User-Agent apply.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static setUserAgentForHosts(userAgent: string, hosts : Array<string>) : void;

    /**
     * Enable the UserAgent Client Hints.
     *
     * @param { boolean } enabled - User-Agent Client Hints will enabled when set true.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
     */
    static setUserAgentClientHintsEnabled(enabled: boolean): void;

    /**
     * Get if the UserAgent Client Hints enabled.
     *
     *
     * @returns { boolean } If User-Agent Client Hints was enabled.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
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
     * The User-Agent can be set with setCustomUserAgent or setAppCustomUserAgent or setUserAgentForHosts.
     *
     * If the UserAgentMetadata is not found according to the overridden User-Agent and the overridden User-Agent
     * contains the system default User-Agent, the system default value will be used.
     *
     * If the UserAgentMetadata is null but the overridden User-Agent doesn't contain the system default user-agent,
     * only the low-entry User-Agent client hints will be generated.
     * </p>
     *
     * @param { string } userAgent - The User-Agent string.
     * @param { UserAgentMetadata } metaData - The UserAgentMetadata for the userAgent.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
     */
    setUserAgentMetadata(userAgent: string, metaData: UserAgentMetadata): void;

    /**
     * Get the User-Agent metadata corresponding to the User-Agent.
     *
     * @param { string } userAgent - The User-Agent string.
     * @returns { UserAgentMetadata } The UserAgentMetadata for the userAgent.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
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
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static setAppCustomUserAgent(userAgent: string) : void;
    /**
     * Get custom user agent.
     * @returns { string } Get custom User agent information.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getCustomUserAgent(): string;
    /**
     * Set web engine socket connection timeout.
     *
     * @param { int } timeout - Socket connection timeout.
     *     取值限定为整数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static setConnectionTimeout(timeout: int): void;
    /**
     * Set delegate for download.
     * Used to notify the progress of the download triggered from web.
     * @param { WebDownloadDelegate } delegate - Delegate used for download triggered from web.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    setDownloadDelegate(delegate: WebDownloadDelegate): void;
    /**
     * Start a download.
     * @param { string } url - The download url.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2 *1024 *1024.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    startDownload(url: string): void;
    /**
         * Loads the URL use "POST" method with post data.
         *
     * @param { string } url - Request the URL use "POST" method.
     * @param { ArrayBuffer } postData - This data will passed to "POST" request.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    postUrl(url: string, postData: ArrayBuffer): void;
    /**
     * Creates a PrintDocumentAdapter instance to provide content for printing.
     * @param { string } jobName - Name of the file to print.
     * @returns { print.PrintDocumentAdapter } Return PrintDocumentAdapter instance created.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    createWebPrintDocumentAdapter(jobName: string): print.PrintDocumentAdapter;
    /**
     * Get the security level of the current page.
     *
     * @returns { SecurityLevel } the security level of current page.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getSecurityLevel(): SecurityLevel;
    /**
     * Gets the loading progress for the current page.
     *
     * @returns { int } The loading progress for the current page.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getProgress() : int;
    /**
     * Whether the incognito mode is set.
     *
     * @returns { boolean } {@code true} has been set the incognito mode; {@code false} otherwise.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    isIncognitoMode(): boolean;
    /**
     * 设置网页是否允许滚动。
     *
     * @param { boolean } enable - 表示是否将网页设置为允许滚动。true表示设置为允许滚动，false表示禁止滚动。
     * @param { ScrollType } [type] - Enable scrolling type
     *     When the input parameter enable is false, it indicates that scrolling of the ScrollType type is prohibited.
     *     When ScrollType is not specified,it indicates that all types of webpage scrolling are prohibited.
     *     When the input parameter enable is true, regardless of whether ScrollType is specified, it indicates that
     *     all types of webpage scrolling are allowed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
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
     * @since 23 static
     */
    getScrollable(): boolean;
    /**
     * Set whether print web page background.
     *
     * @param { boolean } enable - Set whether print web page background
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    setPrintBackground(enable: boolean): void;
    /**
     * Get whether print web page background.
     * @returns { boolean } Get whether print web page background.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getPrintBackground(): boolean;
    /**
     * Get the url of the last frame that calls the JavaScriptProxy.
     * This should be called on the UI thread.
     *
     * @returns { string } The url of the last frame that calls the JavaScriptProxy.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getLastJavascriptProxyCallingFrameUrl(): string;
    /**
     * Start current camera.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    startCamera(): void;
    /**
     * Stop current camera.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    stopCamera(): void;
    /**
     * Close current camera.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    closeCamera(): void;
    /**
     * 当前麦克风继续捕捉
     *
     * @throws { BusinessError } 17100001 - Init error.The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    resumeMicrophone(): void;
    /**
     * 当前麦克风暂停捕捉
     *
     * @throws { BusinessError } 17100001 - Init error.The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    pauseMicrophone(): void;
    /**
     * 当前麦克风停止捕捉
     *
     * @throws { BusinessError } 17100001 - Init error.The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    stopMicrophone(): void;

    /**
         * 获取上一次发送post message到应用的HTML的frame的URL
         *
     * @returns { string } The URL of frame that last sent a postMessage.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    getLastPostMessageURL(): string;
    /**
     * 暂停所有WebView的定时器。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static pauseAllTimers(): void;
    /**
     * 恢复从pauseAllTimers()接口中被暂停的所有的定时器。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static resumeAllTimers(): void;
    /**
     * Stop all audio and video playback on the web page.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    stopAllMedia(): void;
    /**
     * Resumes the playback of the audio and video that are paused by the pauseAllMedia interface.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    resumeAllMedia(): void;
    /**
     * Pause all audio and video playback on the web page.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    pauseAllMedia(): void;
    /**
     * Closes all full-screen videos on a web page.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    closeAllMediaPresentations(): void;
    /**
     * View the playback status of all audio and video on the web page.
     *
     * @returns { MediaPlaybackState } The playback status of all audio and video.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getMediaPlaybackState(): MediaPlaybackState;
    /**
     * Set web scheme handler for specific scheme. This is only used for related web component.
     *
     * @param { string } scheme - String value for url scheme.
     * @param { WebSchemeHandler } handler - Web scheme handler.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    setWebSchemeHandler(scheme: string, handler: WebSchemeHandler): void;
    /**
     * Clear all web scheme handlers for related web component.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    clearWebSchemeHandler(): void;
    /**
     * Set web scheme handler for specific scheme. This is used for service worker.
     * @param { string } scheme - String value for url scheme.
     * @param { WebSchemeHandler } handler - Web scheme handler.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static setServiceWorkerWebSchemeHandler(scheme: string, handler: WebSchemeHandler): void;
    /**
     * Clear all web service worker scheme handlers.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static clearServiceWorkerWebSchemeHandler(): void;
    /**
     * Enable the ability to use Intelligent Tracking Prevention; default is disabled.
     *
     * @param { boolean } enable {@code true} enable Intelligent Tracking Prevention; {@code false} otherwise.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    enableIntelligentTrackingPrevention(enable: boolean): void;
    /**
     * Get whether Intelligent Tracking Prevention is enabled.
     *
     * @returns { boolean } True if enable the Intelligent Tracking Prevention; else false.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    isIntelligentTrackingPreventionEnabled(): boolean;
    /**
     * Add bypassing hosts for Intelligent Tracking Prevention.
     *
     * @param { Array<string> } hostList - Hosts that bypass the Intelligent Tracking Prevention.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static addIntelligentTrackingPreventionBypassingList(hostList: Array<string>): void;
    /**
     * Remove bypassing hosts for Intelligent Tracking Prevention.
     *
     * @param { Array<string> } hostList - Hosts needs to remove from bypass list.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static removeIntelligentTrackingPreventionBypassingList(hostList: Array<string>): void;
    /**
     * Clear bypassing hosts for Intelligent Tracking Prevention.
     *
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static clearIntelligentTrackingPreventionBypassingList(): void;
    /**
     * Get the default user agent.
     *
     * @returns {string} The default user agent string.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static getDefaultUserAgent(): string;
    /**
     * Register a callback to intercept web pages playing media.
     *
     * @param { CreateNativeMediaPlayerCallback } callback - Called everytime when web pages try to play media.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    onCreateNativeMediaPlayer(callback: CreateNativeMediaPlayerCallback): void;
    /**
     * Enables the full drawing capability for the web page.
     * This API works only during Web component initialization.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static enableWholeWebPageDrawing(): void;
    /**
     * Web page snapshot.
     *
     * @param { SnapshotInfo } info - The snapshot info.
     * @param { AsyncCallback<SnapshotResult> } callback - the callback of snapshot.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    webPageSnapshot(info: SnapshotInfo, callback: AsyncCallback<SnapshotResult>): void;
    /**
     * Prefetches resource requests based on specified request information and additional HTTP request headers,
     * saves the requests to the memory cache, and specifies the cache key and validity period to accelerate
     * loading.
     * Currently, only POST requests whose Content-Type is application/x-www-form-urlencoded are supported.
     * A maximum of six POST requests can be pre-obtained. To prefetch the seventh post request,
     * call API{@link clearPrefetchedResource} to clear the cache of unnecessary post requests.
     * Otherwise, the cache of the earliest prefetched POST request will be automatically cleared.
     * To use the prefetched resource cache, you need to add the key value ArkWebPostCacheKey to the header of the
     * POST request. The content of the key value is the cacheKey of the corresponding cache.
     * @param { RequestInfo } request - The information of the request.
     * @param { Array<WebHeader> } [additionalHeaders] - Additional HTTP request header of the request.
     * @param { string } [cacheKey] - The key for memory cache. Default value is the url of the request.
     *     Only support number and letters.
     * @param { int } [cacheValidTime] - The valid time of the cache for request, ranges greater than 0.
     *     The unit is second. Default value is 300s.
     *     The value of cacheValidTime must between 1 and 2147483647.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2 *1024 *1024.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static prefetchResource(request: RequestInfo, additionalHeaders?: Array<WebHeader>, cacheKey?: string,
        cacheValidTime?: int): void;
    /**
     * Clears the cache of prefetched resources based on the specified cache key list.
     * The cache key in the input parameter must be the prefetched resource cache key specified
     * by API{@link prefetchResource}.
     * @param { Array<string> } cacheKeyList - The keys for memory cache.
     *     The key in cacheKeyList only support number and letters.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static clearPrefetchedResource(cacheKeyList: Array<string>): void;
    /**
     * 设置ArkWeb渲染子进程模式。
     *
     * @param { RenderProcessMode } mode - - 渲染子进程模式。
     * 可以先调用getRenderProcessMode()查看当前设备的ArkWeb渲染子进程模式，枚举值0为单子进程模式，枚举值1为多子进程模式。
     * 手机默认为单渲染子进程模式，平板和PC/2in1默认为多渲染子进程模式。
     * 如果传入RenderProcessMode枚举值之外的非法数字，则默认识别为多渲染子进程模式。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static setRenderProcessMode(mode: RenderProcessMode): void;
    /**
     * 查询ArkWeb的渲染子进程模式。
     *
     * @returns { RenderProcessMode } mode - 渲染子进程模式类型。
     * 调用getRenderProcessMode()获取当前设备的ArkWeb渲染子进程模式，枚举值0为单子进程模式，枚举值1为多子进程模式。
     * 如果获取的值不在RenderProcessMode枚举值范围内，则默认为多渲染子进程模式。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static getRenderProcessMode(): RenderProcessMode;
    /**
     * 销毁渲染进程。
     * 调用该接口将会主动销毁相关联的渲染进程。如果渲染进程尚未启动，或者已销毁则没有任何影响。此外销毁渲染进程会同时影响所有与该渲染进程关联的其他实例。
     *
     * @returns { boolean } 返回销毁渲染进程的结果。返回true表示渲染进程可以被销毁或已被销毁，返回false表示渲染进程不可以被销毁。
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    terminateRenderProcess(): boolean;
    /**
     * Compile javascript and generate code cache.
     * @param { string } url - Url of the javascript. Only support HTTP/HTTPS protocol and length
     *     no longer than 2048.
     * @param { string | Uint8Array } script - Javascript source code. script must not be empty.
     * @param { CacheOptions } cacheOptions - Generate code cache option.
     * @returns { Promise<int> } - The promise returned by the function.
     *     0 means generate code cache successfully, -1 means internal error.
     * @throws { BusinessError } 401 - Invalid input parameter.
     *    Possible causes: 1. Mandatory parameters are left unspecified.
     *    2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *    The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    precompileJavaScript(url: string, script: string | Uint8Array, cacheOptions: CacheOptions): Promise<int>;
    /**
     * Set IP address for host name.
     *
     * @param { string } hostName - Which host name to be resolved.
     * @param { string } address - Resolved IP address.
     * @param { int } aliveTime - The validity seconds for resolve cache.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static setHostIP(hostName: string, address: string, aliveTime: int): void;
    /**
     * Clear the host name IP address.
     *
     * @param { string } hostName - Which host name to be cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static clearHostIP(hostName: string): void;
    /**
     * Warmup the registered service worker associated the url.
     * @param { string } url - The url.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *                           length exceeds 2048.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static warmupServiceWorker(url: string): void;
    /**
     * Inject offline resources into cache.
     *
     * @param { Array<OfflineResourceMap> } resourceMaps - Array of offline resource info maps.
     *     The count of array must between 1 and 30.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2 *1024 *1024.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    injectOfflineResources(resourceMaps: Array<OfflineResourceMap>): void;
    /**
     * Enable the ability to block Ads, disabled by default.
     *
     * @param { boolean } enable {@code true} Enable Ads block; {@code false} otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Parameter string is too long. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    enableAdsBlock(enable: boolean): void;
    /**
     * Get whether Ads block is enabled.
     *
     * @returns { boolean } True if the ability of AdsBlock is enabled; else false.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    isAdsBlockEnabled(): boolean;
    /**
     * Get whether Ads block is enabled for current Webpage.
     *
     * @returns { boolean } True if the ability of AdsBlock is enabled for current Webpage; else false.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    isAdsBlockEnabledForCurPage(): boolean;
    /**
     * Get the ID of the surface created by ArkWeb. This ID can be used for web page screenshots.
     *
     * @returns { string } The ID of the surface created by ArkWeb.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
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
     * @since 23 static
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
     * @since 24 static
     */
    setUrlTrustList(urlTrustList: string, allowOpaqueOrigin: boolean, supportWildcard: boolean): void;

    /**
     * Sets a path list. When a file protocol accesses resources in the path list,
     * it can access the local files across domains. In addition, when a path list is set,
     * the file protocol can access only the resources in the path list.
     * The behavior of {@link fileAccess} will be overwritten by that of this API.
     *
     * The paths in the list must be any of the following(sub path and module name must be provided):
     *
     * 1. The path of subdirectory of the application file directory, like "/data/storage/el2/base/files/example"
     *    or "/data/storage/el2/base/haps/entry/files/example".
     *    The application file directory is obtained using Context.filesDir in the Ability Kit.
     * 2. The path of application resource directory or its subdirectory,
     *    like "/data/storage/el1/bundle/entry/resource/resfile"
     *    or "/data/storage/el1/bundle/entry/resource/resfile/example".
     *    The application resource directory is obtained from Context.resourceDir in the Ability Kit.
     *
     * If a path in the list is not of the preceding paths, error code 401 is reported and the path list fails
     * to be set. When the path list is set to empty, the accessible files for the file protocol are subject to
     * the behavior of the {@link fileAccess}.
     *
     * @param { Array<string> } pathList - The path list allow universal access.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Parameter string is too long. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    setPathAllowingUniversalAccess(pathList: Array<string>): void;
    /**
     * Set whether enable the error page. onOverrideErrorPage will be triggered when the page error.
     *
     * @param { boolean } enable - Whether enable the error page.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    setErrorPageEnabled(enable: boolean): void;
    /**
     * Get whether default error page feature is enabled.
     *
     * @returns  { boolean } -  True if enable the default error page feature; else false.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getErrorPageEnabled(): boolean;
    /**
     * Trim memory by different memory pressure level.
     *
     * @param { PressureLevel } level - The memory pressure level for the ArkWeb.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Parameter string is too long. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static trimMemoryByPressureLevel(level: PressureLevel): void;
    /**
     * Enable the BackForwardCache and indicate features that are allowed to enter BackForwardCache.
     * Default is disabled.
     *
     * @param { BackForwardCacheSupportedFeatures } [features] - The features that supports BackForwardCache.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static enableBackForwardCache(features?: BackForwardCacheSupportedFeatures): void;
    /**
     * Configure the BackForwardCache.
     *
     * @param { BackForwardCacheOptions } [options] - The configuration of BackForwardCache.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    setBackForwardCacheOptions(options?: BackForwardCacheOptions): void;
    /**
     * 获取网页当前的滚动偏移量（包含过滚动偏移量）。
     *
     * @returns { ScrollOffset } 网页当前的滚动偏移量（包含过滚动偏移量）。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getScrollOffset(): ScrollOffset;
    /**
     * 将页面滚动指定的偏移量，返回值表示此次滚动是否执行成功。若未显式调用该属性，默认当前网页不可以滑动。
     *
     * @param { double } deltaX - 位置的Δx。单位为vp
     *     - 水平偏移量，其中水平向右为正方向。 <br>单位：vp。
     * @param { double } deltaY - 位置的Δy。单位为vp
     *     - 垂直偏移量，其中垂直向下为正方向。 <br>单位：vp。
     * @returns { boolean } true表示当前网页可以滑动，false表示当前网页不可以滑动。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
     *     unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    scrollByWithResult(deltaX: double, deltaY: double): boolean;

    /**
     * 获取上一次被点击区域的元素信息。
     *
     * @returns { HitTestValue } 点击区域的元素信息。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getLastHitTest(): HitTestValue;
    /**
     * 查询当前WebViewController是否绑定一个Web组件。
     * @returns { ControllerAttachState } WebViewController与Web组件的绑定状态。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getAttachState(): ControllerAttachState;
    /**
     * 注册WebViewController绑定状态事件，通过Callback方式获取WebViewController绑定状态的变化通知。
     *
     * @param { Callback<ControllerAttachState> } callback 表示注册WebViewController绑定状态事件，固定为"controllerAttachStateChange"。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    onControllerAttachStateChange(callback: Callback<ControllerAttachState>): void;
    /**
     * 取消WebViewController绑定状态事件的注册，取消后将不再接收Callback通知。
     *
     * @param { Callback<ControllerAttachState> } [callback] WebViewController绑定状态发生改变时的回调函数，默认情况下不填写回调函数。
     * 如果填写了Callback，将仅取消注册该特定的回调。如果不填写Callback，将取消注册所有回调。传入null或undefined时会抛出异常错误码401。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    offControllerAttachStateChange(callback?: Callback<ControllerAttachState>): void;
    /**
     * 异步等待WebViewController与Web组件绑定完成，绑定完成或超时触发回调，通过Promise方式返回当前ControllerAttachState状态。
     *
     * @param { int } timeout - 异步等待时长。取值范围: [0, 65535]单位: ms
     * @returns { Promise<ControllerAttachState> } Promise used to return the state of attach.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    waitForAttached(timeout: int): Promise<ControllerAttachState>;
    /**
     * 获取网页当前的滚动偏移量（不包含过滚动偏移量）。
     *
     * @returns { ScrollOffset } 网页当前的滚动偏移量（不包含过滚动偏移量）。
     * @throws { BusinessError } 801 This functionality is not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getPageOffset(): ScrollOffset;
    /**
     * Sets the bottom avoidance height of the web visible viewport.
     * When setting non-zero height, the position and size of the web component remain unchanged,
     * and the visible viewport upward avoids avoidHeight,
     * as manifested by the web page content raising avoidHeight.
     * In this case, the keyboardAvoidMode will be OVERLAYS_CONTENT
     * when clicking the input box in the web page.
     * When setting zero, web page content can be restored
     * and the keyboardAvoidMode will be the value set by keyboardAvoidMode().
     *
     * @param { int } avoidHeight - the height value of the visible viewport avoidance.
     *     The valid interval of avoidHeight is [0, the height of web component].
     *     When avoidHeight is out of the valid interval, it takes the boundary value of the interval.
     *     取值限定为整数。
     *     <br>单位:vp。
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    avoidVisibleViewportBottom(avoidHeight: int): void;
    /**
     * Obtains the prediction information about the blankless loading solution and enables the generation of
     * the transition frame for the current loading. The application determines whether to enable the blankless
     * loading solution based on the information.
     *
     * @param { string } key  The key value that uniquely identifies the page.
     *     Default value: N/A.
     *     The value cannot be empty or exceed 2048 characters.
     *     When an invalid value is set, this API does not take effect.
     * @returns { BlanklessInfo } The prediction information about the blankless loading solution.
     * @throws { BusinessError } 801 Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getBlanklessInfoWithKey(key: string) : BlanklessInfo;
    /**
     * Sets whether to enable blankless page loading. This API must be used in pair with the
     * getBlanklessInfoWithKey API.
     *
     * @param { string } key  The key value that uniquely identifies the current page. It must be the same as
     *     the key value of the getBlanklessInfoWithKey API.
     *     Default value: N/A.
     *     The value cannot be empty or exceed 2048 characters.
     *     When an invalid value is set, the error code WebBlanklessErrorCode is returned, and the API does not
     *     take effect.
     * @param { boolean } is_start  Whether to enable frame interpolation. The value true indicates to enable
     *     frame interpolation, and the value false indicates the opposite.
     *     The default value is false.
     *     The value can be true or false.
     *     Action for setting an invalid value: N/A.
     * @returns { WebBlanklessErrorCode } WebBlanklessErrorCode.
     * @throws { BusinessError } 801 Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    setBlanklessLoadingWithKey(key: string, is_start: boolean) : WebBlanklessErrorCode;
    /**
     * Clears the blankless loading cache of the page with a specified key value.
     *
     * @param { Array<string> } [keys]  The list of key values of pages cached in the blankless loading
     *     solution. These key values are specified in getBlanklessInfoKey.
     *     The default value is the list of key values of all pages cached in the blankless loading solution.
     *     The key length cannot exceed 2048 characters, and the number of keys must be less than or equal to 100.
     *     The URL is the same as that input to the Web component during page loading.
     *     When the key length exceeds 2048 characters, the key does not take effect. When the number of keys
     *     exceeds 100, the first 100 keys are used. If these parameters are left empty, the default values are used.
     * @throws { BusinessError } 801 Capability not supported.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static clearBlanklessLoadingCache(keys?: Array<string>) : void;
    /**
     * Sets the cache capacity of the blankless loading solution and returns the value that takes effect. If
     * this API is not called, the default capacity 30 MB is used. The maximum capacity cannot exceed 100 MB.
     *
     * @param { int } capacity  Cache capacity, in MB. The maximum value is 100 MB.
     *     The default value is 30 MB.
     *     The value ranges from 0 to 100. If this parameter is set to 0, no cache capacity is available and the
     *     functionality is disabled globally.
     *     When the value is set to a number smaller than 0, the value 0 takes effect. When the value is set to a
     *     number greater than 100, the value 100 takes effect.
     * @returns { int } The effective value that ranges from 0 MB to 100 MB.
     * @throws { BusinessError } 801 Capability not supported.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static setBlanklessLoadingCacheCapacity(capacity: int) : int;

    /**
         * 触发插帧，并设置插帧参数，与”getBlanklessInfoWithKey” 配套使用
         *
         * 设备行为差异:仅支持手机平台，其他平台返回801
         *
     * @param { string } key - 唯一标识本页面的key值，需与getBlanklessInfoWithKey的key值相同
         *     <br>取值范围:(0, 2048]
         *     <br>Value range: (0, 2048]
         *     <br>which must be the same as the key value in getBlanklessInfoWithKey
     * @param { BlanklessLoadingParam } param - The parameter of blankless.
         *     For details see {@Link BlanklessLoadingParam}.
         *     <br>na
     * @returns { WebBlanklessErrorCode } WebBlanklessErrorCode.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 static
     */
    setBlanklessLoadingWithParams(key: string,
            param: BlanklessLoadingParam) : WebBlanklessErrorCode;

    /**
     * 设置Web组件的销毁模式。当Web组件销毁时，销毁模式会影响Web内核资源释放的时机，例如JavaScript运行上下文、渲染上下文等。
     * 默认值：WebDestroyMode.NORMAL_MODE（普通模式），由系统决定销毁时机。应用可设置WebDestroyMode.FAST_MODE（快速模式），以立即销毁资源，从而提升特定场景的性能。
     * 说明：WebDestroyMode.FAST_MODE（快速模式）会改变Web组件销毁时机，应用需关注依赖Web组件销毁时机的错误实现，
     * 例如：Web组件销毁后仍调用WebviewController的未定义行为，与WebDestroyMode.NORMAL_MODE（普通模式）相比，销毁时机提前，有更高的几率触发未关联绑定的异常（17100001），
     * 建议应用捕捉异常，或者通过getAttachState方法查询是否绑定状态，来避免稳定性问题。
     * @param { WebDestroyMode } mode web destroy mode, default NORMAL_MODE.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static setWebDestroyMode(mode: WebDestroyMode): void;
    /**
     * 设置站点隔离模式。站点隔离机制将不同源的网站隔离在不同的Render进程中，减少跨域攻击面。
     * 例如：PC等设备上，在未启用站点隔离模式时，原有进程模型是每一个Tab对应一个Render进程，开启站点隔离后，一个Tab下不同源的Iframe可在独立的Render进程中运行。
     * 对于仅加载可信网页的第三方应用，可以关闭此功能，以提升性能并减少内存占用，同时减少跨域访问的拦截。
     * 默认值根据不同的设备而定，PC/Table采用严格站点隔离SiteIsolationMode.STRICT，Phone默认部分站点隔离SiteIsolationMode.PARTIAL。坚盾守护模式下采用严格站点隔离。
     * 说明：
     * 不能在单子进程模式下设置严格站点隔离。
     * 接口只能在初始化时调用一次，不支持反复修改。
     *
     * @param { SiteIsolationMode } mode 设置站点隔离模式。
     * 默认值取决于设备类型和设备模式：PC/Tablet默认严格站点隔离，Phone默认部分站点隔离；坚盾守护模式默认严格站点隔离。
     * @throws { BusinessError } 17100001 - Init error. Possible causes:
     *     1. Site Isolation mode is already set by the developer.
     *     2. Site Isolation mode cannot be strict in single-render-process mode.
     *     3. Site Isolation mode cannot be changed while Secure Shield mode is active.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static setSiteIsolationMode(mode: SiteIsolationMode): void;
    /**
     * 查询当前生效的站点隔离模式。
     *
     * @returns { SiteIsolationMode } 站点隔离模式类型。getSiteIsolationMode()查询当前生效的站点隔离模式。
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static getSiteIsolationMode(): SiteIsolationMode;
    /**
     * 设置软键盘自动控制模式，当接口没有显式调用时，Web组件失去焦点或获得焦点、状态切换为inactive或active时，系统均会尝试触发软键盘自动隐藏或拉起。
     *
     * @param { WebSoftKeyboardBehaviorMode } mode - Web软键盘自动控制模式。
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    setSoftKeyboardBehaviorMode(mode: WebSoftKeyboardBehaviorMode): void;

    /**
     * 在Web页面场景，设置全局滚动条模式。不显式调用时，默认为
     * [ScrollbarMode.OVERLAY_LAYOUT_SCROLLBAR]{@link ScrollbarMode}（非常驻滚动条）。
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
     * @since 23 static
     */
    static setScrollbarMode(scrollbarMode: ScrollbarMode): void;

    /**
     * 通过配置安全特性选项禁用特定的Web引擎能力，以降低攻击面。
     * 说明：
     * 该接口为全局静态API，在整个APP生命周期中调用一次即可，不需要重复调用。
     * 必须在initializeWebEngine()之前调用，否则设置无效。
     *
     * @param { SecurityParams } securityParams - 安全特性选项配置。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    static enableAdvancedSecurityMode(securityParams: SecurityParams): void;
    }

  /**
   * Web软键盘自动控制模式。
   * @enum {int}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum WebSoftKeyboardBehaviorMode {
    /**
     * 当Web组件失去焦点或获得焦点、状态切换为inactive或active时，系统均会尝试触发软键盘自动隐藏或拉起（默认值）。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * Web组件在inactive或active状态切换时，系统不再尝试触发软键盘自动隐藏或拉起。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    DISABLE_AUTO_KEYBOARD_ON_ACTIVE = 1
  }
  /**
   * Defines the state for download.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum WebDownloadState {
    /**
     * The web download is in progress.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    IN_PROGRESS = 0,
    /**
     * The web download has been completed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    COMPLETED = 1,
    /**
     * The web download was canceled.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    CANCELED = 2,
    /**
     * The web download was interrupted.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    INTERRUPTED = 3,
    /**
     * The web download is pending.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    PENDING = 4,
    /**
     * The web download has been paused.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    PAUSED = 5,
    /**
     * Unknown state.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    UNKNOWN = 6
    }
  /**
   * Defines the error code for download.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum WebDownloadErrorCode {
    /**
     * Unknown error.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    ERROR_UNKNOWN = 0,
    /**
     * Generic file operation failure.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    FILE_FAILED = 1,
    /**
     * The file cannot be accessed due to certain restrictions.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    FILE_ACCESS_DENIED = 2,
    /**
     * There is not enough disk space.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    FILE_NO_SPACE = 3,
    /**
     * The file name is too long.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    FILE_NAME_TOO_LONG = 5,
    /**
     * The file is too large.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    FILE_TOO_LARGE = 6,
    /**
     * Some temporary problems occurred, such as not enough memory, files in use, and too many files
     * open at the same time.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    FILE_TRANSIENT_ERROR = 10,
    /**
     * The file is blocked from accessing because of some local policy.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    FILE_BLOCKED = 11,
    /**
     * When trying to resume the download, Found that the file is not long enough, maybe the file no longer exists.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    FILE_TOO_SHORT = 13,
    /**
     * Hash mismatch.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    FILE_HASH_MISMATCH = 14,
    /**
     * The file already exists.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    FILE_SAME_AS_SOURCE = 15,
    /**
     * Generic network error.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    NETWORK_FAILED = 20,
    /**
     * The network operation timed out.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    NETWORK_TIMEOUT = 21,
    /**
     * The network was disconnected.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    NETWORK_DISCONNECTED = 22,
    /**
     * Server down.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    NETWORK_SERVER_DOWN = 23,
    /**
     * Invalid network requests，may redirect to unsupported scheme or an invalid URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    NETWORK_INVALID_REQUEST = 24,
    /**
     * The server returned a generic error.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    SERVER_FAILED = 30,
    /**
     * The server does not support range requests.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    SERVER_NO_RANGE = 31,
    /**
     * The server does not have the requested data.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    SERVER_BAD_CONTENT = 33,
    /**
     * The server does not allow the file to be downloaded.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    SERVER_UNAUTHORIZED = 34,
    /**
     * Server certificate error.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    SERVER_CERT_PROBLEM = 35,
    /**
     * Server access forbidden.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    SERVER_FORBIDDEN = 36,
    /**
     * Server unreachable.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    SERVER_UNREACHABLE = 37,
    /**
     * The received data does not match content-length.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    SERVER_CONTENT_LENGTH_MISMATCH = 38,
    /**
     * An unexpected cross-origin redirect happened.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    SERVER_CROSS_ORIGIN_REDIRECT = 39,
    /**
     * User cancel.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    USER_CANCELED = 40,
    /**
     * User shut down the application.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    USER_SHUTDOWN = 41,
    /**
     * Application crash.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    CRASH = 50
    }
  /**
   * Represents a download task, You can use this object to operate the corresponding download task.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  class WebDownloadItem {
    /**
     * Get guid.
     * @returns { string } - Returns the download's guid.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getGuid(): string;
    /**
     * Get current speed, in bytes per second.
     * @returns { int } - Returns the current download speed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getCurrentSpeed(): int;
    /**
     * Get percent complete.
     * @returns { int } - Returns -1 if progress is unknown. 100 if the download is already complete.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getPercentComplete(): int;
    /**
     * Get total bytes.
     * @returns { long } - Returns the total bytes received, -1 if the total size is unknown.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getTotalBytes(): long;
    /**
     * Get state of the web download.
     * @returns { WebDownloadState } - Returns the current download state.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getState(): WebDownloadState;
    /**
     * Get last error code of the web download.
     * @returns { WebDownloadErrorCode } - Returns the last error code.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getLastErrorCode(): WebDownloadErrorCode;
    /**
     * Get http method of the web download request.
     * @returns { string } - Returns the http request method.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getMethod(): string;
    /**
     * Get mime type of the web download.
     * @returns { string } - Returns the mimetype.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getMimeType(): string;
    /**
     * Get url of the web download request.
     * @returns { string } - Returns the url.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getUrl(): string;
    /**
     * Get suggested file name of the web download request.
     * @returns { string } - Returns the suggested file name.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getSuggestedFileName(): string;

    /**
     * 获取该下载任务的原始url
     *
     * @returns { string } - 返回原始url
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
     */
    getOriginalUrl(): string;

    /**
     * 获取该下载任务的referrer url
     *
     * @returns { string } - 返回该下载任务的referrer url
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 static
     */
    getReferrerUrl(): string;
    /**
     * Start the web download.
     * Used in onBeforeDownload, If you want to start the current download, call this function.
     * @param { string } downloadPath - The content will be downloaded to this file.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * <br>2. Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    start(downloadPath: string): void;
    /**
     * Cancel the web download.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    cancel(): void;
    /**
     * Pause the web download.
     * @throws { BusinessError } 17100019 - The download task is not started yet.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    pause(): void;
    /**
     * Resume the web download.
     * Use WebDownloadManager.resumeDownload to resume deserialized downloads.
     * WebDownloadItem.resume is only used to resume the currently paused download.
     * @throws { BusinessError } 17100016 - The download task is not paused.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    resume(): void;
    /**
     * Get received bytes.
     * @returns { long } - Returns the received bytes.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getReceivedBytes(): long;
    /**
     * Get full path of the web download.
     * @returns { string } - Returns the full path of the download.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getFullPath(): string;
    /**
     * Serialize web download to typed array.
     * @returns { Uint8Array } - Returns the serialized data.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    serialize(): Uint8Array;
    /**
     * Deserialize web download from typed array.
     * @param { Uint8Array } serializedData - The serialized data.
     * @returns { WebDownloadItem } - Deserialize the serialized data into a WebDownloadItem.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * <br>2. Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static deserialize(serializedData: Uint8Array): WebDownloadItem;
    }
  /**
   * The download state is notified through this delegate.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  class WebDownloadDelegate {
    /**
     * Callback will be triggered before web download start.
     * @param { Callback<WebDownloadItem> } callback - The callback of download will be start.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    onBeforeDownload(callback: Callback<WebDownloadItem>): void;
    /**
     * Callback will be triggered when web download is processing.
     * @param { Callback<WebDownloadItem> } callback - The callback of download did update.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    onDownloadUpdated(callback: Callback<WebDownloadItem>): void;
    /**
     * Callback will be triggered when web download is completed.
     * @param { Callback<WebDownloadItem> } callback - The callback of download did finish.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    onDownloadFinish(callback: Callback<WebDownloadItem>): void;
    /**
     * Callback will be triggered when web download is interrupted or canceled.
     * @param { Callback<WebDownloadItem> } callback - The callback of download did fail.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    onDownloadFailed(callback: Callback<WebDownloadItem>): void;
    }
  /**
   * You can trigger download manually through this interface, or resume failed or canceled downloads.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  class WebDownloadManager {
    /**
     * Set a delegate used to receive the progress of the download triggered from WebDownloadManager.
     * @param { WebDownloadDelegate } delegate - Delegate used for download triggered from WebDownloadManager.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static setDownloadDelegate(delegate: WebDownloadDelegate): void;
    /**
     * Resume the canceled or failed download.
     * @param { WebDownloadItem } webDownloadItem - Download that need to be resume.
     * @throws { BusinessError } 17100018 - No WebDownloadDelegate has been set yet.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static resumeDownload(webDownloadItem: WebDownloadItem): void;
    }
  /**
   * The http body stream of the request.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  class WebHttpBodyStream {
    /**
     * Initialize data stream.
     *
     * @returns { Promise<void> } The promise of data stream is initialized.
     * @throws { BusinessError } 17100022 - Failed to initialize the HTTP body stream.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    initialize(): Promise<void>;
    /**
     * Read the data stream to the buffer.
     *
     * @param { int } size - Read size.
     *     取值限定为整数。
     * @returns { Promise<ArrayBuffer> } Read array buffer of result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    read(size: int): Promise<ArrayBuffer>;
    /**
     * Get the total size of the data stream. When data is chunked, always return zero.
     *
     * @returns { long } Return size of data stream size.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getSize(): long;
    /**
     * Get the current position of the data stream.
     *
     * @returns { long } Return position in post data stream.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getPosition(): long;
    /**
     * Whether data stream is chunked.
     *
     * @returns { boolean } Whether data stream is chunked.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    isChunked(): boolean;
    /**
     * Whether all data stream has been consumed. For chunked uploads,
     * returns false until the first read attempt.
     *
     * @returns { boolean } Whether data stream has been consumed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    isEof(): boolean;
    /**
     * Returns true if the upload data in the stream is entirely in memory, and all read requests will succeed
     * synchronously. Expected to return false for chunked requests.
     *
     * @returns { boolean } Whether the data stream is in memory.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    isInMemory(): boolean;
    }
  /**
   * Defines the resource type of request.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum WebResourceType {
    /**
     * Top level page.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    MAIN_FRAME = 0,
    /**
     * Frame or Iframe.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    SUB_FRAME = 1,
    /**
     * CSS stylesheet.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    STYLE_SHEET = 2,
    /**
     * External script.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    SCRIPT = 3,
    /**
     * Image (jpg/gif/png/etc).
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    IMAGE = 4,
    /**
     * Font.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    FONT_RESOURCE = 5,
    /**
     * Some other subresource. This is the default type if the actual type is unknown.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    SUB_RESOURCE = 6,
    /**
     * Object (or embed) tag for a plugin, or a resource that a plugin requested.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    OBJECT = 7,
    /**
     * Media resource.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    MEDIA = 8,
    /**
     * Main resource of a dedicated worker.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    WORKER = 9,
    /**
     * Main resource of a shared worker.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    SHARED_WORKER = 10,
    /**
     * Explicitly requested prefetch.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    PREFETCH = 11,
    /**
     * Favicon.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    FAVICON = 12,
    /**
     * XMLHttpRequest.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    XHR = 13,
    /**
     * Ping request for <a ping>/sendBeacon.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    PING = 14,
    /**
     * The main resource of a service worker.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    SERVICE_WORKER = 15,
    /**
     * Report of Content Security Policy violations.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    CSP_REPORT = 16,
    /**
     * Resource that a plugin requested.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    PLUGIN_RESOURCE = 17,
    /**
     * A main-frame service worker navigation preload request.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    NAVIGATION_PRELOAD_MAIN_FRAME = 19,
    /**
     * A sub-frame service worker navigation preload request.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    NAVIGATION_PRELOAD_SUB_FRAME = 20
    }
  /**
   * Defines the Web resource request used for scheme handler.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  class WebSchemeHandlerRequest {
    /**
     * Gets request headers.
     *
     * @returns { Array<WebHeader> } Return the request headers.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getHeader(): Array<WebHeader>;
    /**
     * Gets the request URL.
     *
     * @returns { string } Return the request URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getRequestUrl(): string;
    /**
     * Get request method.
     *
     * @returns { string } Return the request method.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getRequestMethod(): string;
    /**
     * Get referrer of request.
     *
     * @returns { string } Return referrer of request.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getReferrer(): string;
    /**
     * Check whether the request is for getting the main frame.
     *
     * @returns { boolean } Whether request is main frame.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    isMainFrame(): boolean;
    /**
     * Check whether the request is associated with gesture.
     *
     * @returns { boolean } Whether request has user gesture.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    hasGesture(): boolean;
    /**
     * Get http body stream.
     *
     * @returns { WebHttpBodyStream | null } Return http body stream. If request has no http body stream, return null.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getHttpBodyStream(): WebHttpBodyStream | null;
    /**
     * Get request's resource type.
     *
     * @returns { WebResourceType } Return the request's resource type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getRequestResourceType(): WebResourceType;
    /**
     * Gets the URL of frame which trigger this request.
     *
     * @returns { string } Return the URL of frame which trigger this request.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getFrameUrl(): string;
    }
  /**
   * Defines the Web resource response used for scheme handler.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  class WebSchemeHandlerResponse {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    constructor();
    /**
     * Set the resolved URL after redirects or changed as a result of HSTS.
     *
     * @param { string } url - Set response url for redirects.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    setUrl(url: string): void;
    /**
     * Get the resolved URL after redirects or changed as a result of HSTS.
     *
     * @returns { string } Return response url for redirects.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getUrl(): string;
    /**
     * Set net error code.
     * @param { WebNetErrorList } code - Set net error code.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    setNetErrorCode(code: WebNetErrorList): void;
    /**
     * Get net error code.
     *
     * @returns { WebNetErrorList } Return response error code.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getNetErrorCode(): WebNetErrorList;
    /**
     * Set http status code.
     *
     * @param { int } code - Http status code.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    setStatus(code: int): void;
    /**
     * Get http status code.
     *
     * @returns { int } Return http status code.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getStatus(): int;
    /**
     * Set status text.
     *
     * @param { string } text - Status text.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    setStatusText(text: string): void;
    /**
     * Get status text.
     *
     * @returns { string } Return http status text.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getStatusText(): string;
    /**
     * Set mime type.
     *
     * @param { string } type - Mime type.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    setMimeType(type: string): void;
    /**
     * Get mime type.
     *
     * @returns { string } Return mime type of response.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getMimeType(): string;
    /**
     * Set the response encoding.
     *
     * @param { string } encoding - Encoding.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    setEncoding(encoding: string): void;
    /**
     * Get the response encoding.
     *
     * @returns { string } Return encoding of response.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getEncoding(): string;
    /**
     * Set response hander value by name.
     *
     * @param { string } name - Header name.
     * @param { string } value - Header value.
     * @param { boolean } overwrite - Whether to overwrite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    setHeaderByName(name: string, value: string, overwrite: boolean): void;
    /**
     * Get the header value by name from the response.
     *
     * @param { string } name - Header name.
     * @returns { string } Return header value by name.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getHeaderByName(name: string): string;
    }
  /**
   * Used to intercept url requests. Response headers and body can be sent through
   * WebResourceHandler.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  class WebResourceHandler {
    /**
     * Pass response headers to intercepted requests.
     *
     * @param { WebSchemeHandlerResponse } response - Set response header to intercept.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    didReceiveResponse(response: WebSchemeHandlerResponse): void;
    /**
     * Pass response body data to intercepted requests.
     *
     * @param { ArrayBuffer } data - Set response body to intercept.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    didReceiveResponseBody(data: ArrayBuffer): void;
    /**
     * Notify that this request should be finished and there is no more data available.
     *
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    didFinish(): void;
    /**
     * Notify that this request should be failed.
     *
     * @param { WebNetErrorList } code - Set response error code to intercept.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
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
     *                                      in WebNetErrorList.
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    didFail(code: WebNetErrorList, completeIfNoResponse: boolean): void;
    }
  /**
   * This class is used to intercept requests for a specified scheme.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  class WebSchemeHandler {
    /**
     * Callback for handling the request.
     *
     * @param { function } callback - Callback of handling the request. If callback return false,
     *     it means no interception.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    onRequestStart(
        callback: (request: WebSchemeHandlerRequest, handler: WebResourceHandler) => boolean): void;
    /**
     * Callback when the request is completed.
     *
     * @param { Callback<WebSchemeHandlerRequest> } callback - Callback of request is completed.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    onRequestStop(callback: Callback<WebSchemeHandlerRequest>): void;
    }
  /**
   * Enum type supplied to {@link handleStatusChanged} for indicating the playback status.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum PlaybackStatus {
    /**
     * Player status is paused.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    PAUSED = 0,
    /**
     * Player status is playing.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    PLAYING = 1
    }
  /**
   * Enum type supplied to {@link handleNetworkStateChanged} for indicating the native player network state.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum NetworkState {
    /**
     * Player does not do any download tasks.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    EMPTY = 0,
    /**
     * Player downloads finished, waiting for next task.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    IDLE = 1,
    /**
     * Player is downloading contents.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    LOADING = 2,
    /**
     * Player downloads failed, due to network error.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    NETWORK_ERROR = 3
    }
  /**
   * Enum type supplied to {@link handleReadyStateChanged} for indicating the native player network state.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum ReadyState {
    /**
     * Player hasn't downloaded anything.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    HAVE_NOTHING = 0,
    /**
     * Player has downloaded metadata.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    HAVE_METADATA = 1,
    /**
     * Player has played all downloaded media data.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    HAVE_CURRENT_DATA = 2,
    /**
     * The buffered media data is not enough, and will cause jank.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    HAVE_FUTURE_DATA = 3,
    /**
     * The buffered media data is enough.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    HAVE_ENOUGH_DATA = 4
    }
  /**
   * Enum type supplied to {@link handleError} for indicating the error type of native media player.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum MediaError {
    /**
     * Network error
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    NETWORK_ERROR = 1,
    /**
     * Media format error, such as not a valid file.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    FORMAT_ERROR = 2,
    /**
     * Decode error, such as decoder doesn't support this format.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    DECODE_ERROR = 3
    }
  /**
   * The native media player status handler.
   * Apps should use this class to handle native media player's status.
   *
   * @typedef NativeMediaPlayerHandler
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  interface NativeMediaPlayerHandler {
    /**
     * Handle native media player playback status.
     *
     * @param { PlaybackStatus } status - Playback status of native media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    handleStatusChanged(status: PlaybackStatus): void;
    /**
     * Handle native media player volume.
     *  volume: float
     *   value range: [0 - 1.0]
     *
     * @param { double } volume - Current volume of native media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    handleVolumeChanged(volume: double): void;
    /**
     * Handle native media player muted status.
     *
     * @param { boolean } muted - Current mute status of native media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    handleMutedChanged(muted: boolean): void;
    /**
     * Handle playback rate of native media player.
     *  playbackRate: float
     *   value range: [0 - infinity]
     *
     * @param { double } playbackRate - Current playback rate of native media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    handlePlaybackRateChanged(playbackRate: double): void;
    /**
         * Handle duration time of media.
         *  duration: float
         *   value range: [0 - infinity]
         *
     * @param { double } duration - Duration time of media, Unit: seconds.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    handleDurationChanged(duration: double): void;
    /**
     * Handle current playing time of media.
     *  currentPlayTime: float
     *   value range: [0 - duration]
     *
     * @param { double } currentPlayTime - Current playing time of media, Unit: seconds.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    handleTimeUpdate(currentPlayTime: double): void;
    /**
     * Handle buffered end time of media.
     *  bufferedEndTime: float
     *   value range: [0 - duration]
     *
     * @param { double } bufferedEndTime - Buffered end time of media, Unit: seconds.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    handleBufferedEndTimeChanged(bufferedEndTime: double): void;
    /**
     * Handle native player ended event.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    handleEnded(): void;
    /**
     * Handle network state of native media player.
     *
     * @param { NetworkState } state - Network state of native media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    handleNetworkStateChanged(state: NetworkState): void;
    /**
     * Handle ready state of native media player.
     *
     * @param { ReadyState } state - Ready state of native media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    handleReadyStateChanged(state: ReadyState): void;
    /**
     * Handle native media player fullscreen state changed event.
     *
     * @param { boolean } fullscreen - Fullscreen state of native media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    handleFullscreenChanged(fullscreen: boolean): void;
    /**
     * Handle native media player seeking state.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    handleSeeking(): void;
    /**
     * Handle native media player seek finished state.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    handleSeekFinished(): void;
    /**
     * Handle native media player error event.
     *
     * @param { MediaError } error - Error type of native media player.
     * @param { string } errorMessage - Description of current error.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    handleError(error: MediaError, errorMessage: string): void;
    /**
         * Handle size of video.
         *
     * @param { double } width - Width of video, Unit: px.
     * @param { double } height - Height of video, Unit: px.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    handleVideoSizeChanged(width: double, height: double): void;
    }
  /**
   * The scenarios for suspending the media player.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum SuspendType {
    /**
     * Page enters the BackForwardCache.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    ENTER_BACK_FORWARD_CACHE = 0,
    /**
     * Page enters background.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    ENTER_BACKGROUND = 1,
    /**
     * Cleanup when the number of paused media player over limit.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    AUTO_CLEANUP = 2
    }
  /**
   * The function of reusme media play.
   *
   * @typedef { function } ResumePlayerFn
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  type ResumePlayerFn = () => void;
  /**
   * The function of suspend media play.
   *
   * @typedef { function } SuspendPlayerFn
   * @param { SuspendType } type - The scenario for suspending the media player.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  type SuspendPlayerFn = (type: SuspendType) => void;
  /**
   * The function of the rect of video tag has changed.
   *
   * @typedef { function } UpdateRectFn
   * @param { double } x - The x position of video tag in web component.
   * @param { double } y - The y position of video tag in web component.
   * @param { double } width - The width of video tag.
   * @param { double } height - The height of video tag.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  type UpdateRectFn = (x: double, y: double, width: double, height: double) => void;
  /**
   * The bridge between web core and native media player.
   * Apps should implements this interface, and pass an instance to web core.
   * Then web core can control native media player by this bridge.
   *
   * @typedef NativeMediaPlayerBridge
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  interface NativeMediaPlayerBridge {
    /**
     * Notify native media player that the rect of video tag has changed.
     *
     * @typedef { UpdateRectFn }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    updateRect: UpdateRectFn;
    /**
     * Request to play.
     *
     * @typedef { ZeroParamFn<> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    play: ZeroParamFn<>;
    /**
     * Request to pause.
     *
     * @typedef { ZeroParamFn<> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    pause: ZeroParamFn<>;
    /**
     * Request to fast forward / back forward to targetTime.
     *  targetTime: float
     *   value range: [0 - duration]
     *
     * @typedef { OneParamFn<double> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    seek: OneParamFn<double>;
    /**
     * Request to change volume of native media player.
     *  volume: float
     *   value range: [0 - 1.0]
     *
     * @typedef { OneParamFn<double> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    setVolume: OneParamFn<double>;
    /**
     * Request to mute native media player.
     *
     * @typedef { OneParamFn<boolean> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    setMuted: OneParamFn<boolean>;
    /**
     * Request to change playback rate of native media player.
     *  playbackRate: float
     *   value range: [0 - 10.0]
     *
     * @typedef { OneParamFn<double> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    setPlaybackRate: OneParamFn<double>;
    /**
     * Request to release native media player.
     *
     * @typedef { ZeroParamFn<> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    release: ZeroParamFn<>;
    /**
     * Request to enter fullscreen.
     *
     * @typedef { ZeroParamFn<> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    enterFullscreen: ZeroParamFn<>;
    /**
     * Request to exit fullscreen.
     *
     * @typedef { ZeroParamFn<> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    exitFullscreen: ZeroParamFn<>;
    /**
     * Resume the native media player.
     *
     * @type { ?ResumePlayerFn }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    resumePlayer?: ResumePlayerFn;
    /**
     * Suspend to release native media player, not the NativeMediaPlayerBridge. The
     * embedder should save the status of player when release the native media player
     * through NativeMediaPlayerBridge.
     *
     * @type { ?SuspendPlayerFn }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    suspendPlayer?: SuspendPlayerFn;
    }
  /**
   * Enum type for indicating the media type of native media player.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum MediaType {
    /**
     * Media type is video.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    VIDEO = 0,
    /**
     * Media type is audio.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    AUDIO = 1
    }
  /**
   * Enum type for indicating the media source type of native media player.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum SourceType {
    /**
     * The type of media source is URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    URL = 0,
    /**
     * The type of media source is blob.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    MSE = 1
    }
  /**
   * Media source information. Uri and format.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  class MediaSourceInfo {
    /**
     * Source type, most time is URL.
     * @type { SourceType }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    type: SourceType;
    /**
     * Media source, most time is Uri.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    source: string;
    /**
     * Media format, such as mp4, webm, m3u8 etc.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    format: string;
    }
  /**
   * Rectangle definition.
   *
   * @typedef RectEvent
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  interface RectEvent {
    /**
     * X coordinator of top left point.
     * 单位为： 像素。
     *
     * @type { double }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    x: double;
    /**
     * Y coordinator of top left point.
     *
     * @type { double }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    y: double;
    /**
     * Width of this rectangle.
     *
     * @type { double }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    width: double;
    /**
     * Height of this rectangle.
     *
     * @type { double }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    height: double;
    }
  /**
   * Surface information.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  class NativeMediaPlayerSurfaceInfo {
    /**
     * Id of surface.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    id: string;
    /**
     * Surface rect info.
     * @type { RectEvent }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    rect: RectEvent;
    }
  /**
   * Enum type for indicating the preload type.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum Preload {
    /**
     * Doesn't do preload.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    NONE = 0,
    /**
     * Only preload metadata.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    METADATA = 1,
    /**
     * Preload enough data to ensure playing is smooth.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    AUTO = 2
    }
  /**
   * Media information.
   *
   * @typedef MediaInfo
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  interface MediaInfo {
    /**
     * Id of media element.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    embedID: string,
    /**
     * Media type : Video or Audio.
     * @type { MediaType }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    mediaType: MediaType,
    /**
     * Media source list, player should choose an appropriate one to play.
     * @type { MediaSourceInfo[] }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    mediaSrcList: MediaSourceInfo[],
    /**
     * Surface to render media content on.
     * @type { NativeMediaPlayerSurfaceInfo }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    surfaceInfo: NativeMediaPlayerSurfaceInfo,
    /**
     * Should show media controls.
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    controlsShown: boolean,
    /**
     * Limit media controls items.
     *  Such as 'nodownload', 'nofullscreen', 'noremoteplayback'
     * @type { string[] }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    controlList: string[],
    /**
     * Player should be muted;
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    muted: boolean,
    /**
     * Player should show poster before media first frame shown.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    posterUrl: string,
    /**
     * Preload type.
     * @type { Preload }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    preload: Preload,
    /**
     * Header information of a media network request.
     * @type { Record<string, string> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    headers: Record<string, string>,
    /**
     * The information list of attributes of media tag.
     * @type { Record<string, string> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    attributes: Record<string, string>,
    }
  /**
   * The callback of creating a native media player.
   *
   * @typedef { function }
   * @param { NativeMediaPlayerHandler } handler - callback information of onCreateNativeMediaPlayer.
   * @param { MediaInfo } mediaInfo - callback information of onCreateNativeMediaPlayer.
   * @returns { NativeMediaPlayerBridge } Returns whether the app takes over the media.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  type CreateNativeMediaPlayerCallback =
        (handler: NativeMediaPlayerHandler, mediaInfo: MediaInfo) => NativeMediaPlayerBridge;
  /**
   * This class is used to set adblock config.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  class AdsBlockManager {
    /**
     * set Ads Block ruleset file, containing easylist rules.
     * @param {string} rulesFile - absolute file path contains app customized ads block rules.
     * @param {boolean} replace - (@code true)replace internal rules;(@code false) add to internal rules.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static setAdsBlockRules(rulesFile: string, replace: boolean): void;
    /**
     * Add items to Ads Block Disallow list.
     * @param { Array<string> } domainSuffixes - list of domain suffix, if web page url matches someone in the list,
     *     Ads Block will be disallowed for the web page.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static addAdsBlockDisallowedList(domainSuffixes: Array<string>): void;
    /**
     * Add items to Ads Block Allow list.
     * By default, ads block is allowed for all pages unless they are added to the
     * disallow list. The priority of allowlist is higher than the disallowlist. It is
     * used to re-enable ads block on the page that matches disallow list.
     * @param { Array<string> } domainSuffixes - list of domain suffix, if web page url matches someone in the list,
     *     Ads Block will be allowed for the web page.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static addAdsBlockAllowedList(domainSuffixes: Array<string>): void;
    /**
     * remove items from Ads Block Disallowed list.
     * @param { Array<string> } domainSuffixes - list of domain suffix needed be removed from disallow list
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static removeAdsBlockDisallowedList(domainSuffixes: Array<string>): void;
    /**
     * remove items from Ads Block Allowed list.
     * @param { Array<string> } domainSuffixes - list of domain suffix needed be removed from allow list
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static removeAdsBlockAllowedList(domainSuffixes: Array<string>): void;
    /**
     * clear Ads Block Disallowed list.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static clearAdsBlockDisallowedList(): void;
    /**
     * clear Ads Block Allowed list.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static clearAdsBlockAllowedList(): void;
    }
  /**
   * This class is used to enable back forward cache supported features.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  class BackForwardCacheSupportedFeatures {
    /**
     * Whether cache the pages that use native embed.
     * Default is false;
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    nativeEmbed: boolean;
    /**
     * Whether cache the pages that use media take over.
     * Default is false;
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    mediaTakeOver: boolean;
    
     * Constructor for BackForwardCacheSupportedFeatures./
     * Constructor for BackForwardCacheSupportedFeatures.*
     * Constructor for BackForwardCacheSupportedFeatures.*
     * Constructor for BackForwardCacheSupportedFeatures.

     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures.*
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures.@
     * Constructor for BackForwardCacheSupportedFeatures.s
     * Constructor for BackForwardCacheSupportedFeatures.y
     * Constructor for BackForwardCacheSupportedFeatures.s
     * Constructor for BackForwardCacheSupportedFeatures.c
     * Constructor for BackForwardCacheSupportedFeatures.a
     * Constructor for BackForwardCacheSupportedFeatures.p
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures.S
     * Constructor for BackForwardCacheSupportedFeatures.y
     * Constructor for BackForwardCacheSupportedFeatures.s
     * Constructor for BackForwardCacheSupportedFeatures.t
     * Constructor for BackForwardCacheSupportedFeatures.e
     * Constructor for BackForwardCacheSupportedFeatures.m
     * Constructor for BackForwardCacheSupportedFeatures.C
     * Constructor for BackForwardCacheSupportedFeatures.a
     * Constructor for BackForwardCacheSupportedFeatures.p
     * Constructor for BackForwardCacheSupportedFeatures.a
     * Constructor for BackForwardCacheSupportedFeatures.b
     * Constructor for BackForwardCacheSupportedFeatures.i
     * Constructor for BackForwardCacheSupportedFeatures.l
     * Constructor for BackForwardCacheSupportedFeatures.i
     * Constructor for BackForwardCacheSupportedFeatures.t
     * Constructor for BackForwardCacheSupportedFeatures.y
     * Constructor for BackForwardCacheSupportedFeatures..
     * Constructor for BackForwardCacheSupportedFeatures.W
     * Constructor for BackForwardCacheSupportedFeatures.e
     * Constructor for BackForwardCacheSupportedFeatures.b
     * Constructor for BackForwardCacheSupportedFeatures..
     * Constructor for BackForwardCacheSupportedFeatures.W
     * Constructor for BackForwardCacheSupportedFeatures.e
     * Constructor for BackForwardCacheSupportedFeatures.b
     * Constructor for BackForwardCacheSupportedFeatures.v
     * Constructor for BackForwardCacheSupportedFeatures.i
     * Constructor for BackForwardCacheSupportedFeatures.e
     * Constructor for BackForwardCacheSupportedFeatures.w
     * Constructor for BackForwardCacheSupportedFeatures..
     * Constructor for BackForwardCacheSupportedFeatures.C
     * Constructor for BackForwardCacheSupportedFeatures.o
     * Constructor for BackForwardCacheSupportedFeatures.r
     * Constructor for BackForwardCacheSupportedFeatures.e
     * Constructor for BackForwardCacheSupportedFeatures.

     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures.*
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures.@
     * Constructor for BackForwardCacheSupportedFeatures.s
     * Constructor for BackForwardCacheSupportedFeatures.i
     * Constructor for BackForwardCacheSupportedFeatures.n
     * Constructor for BackForwardCacheSupportedFeatures.c
     * Constructor for BackForwardCacheSupportedFeatures.e
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures.2
     * Constructor for BackForwardCacheSupportedFeatures.3
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures.s
     * Constructor for BackForwardCacheSupportedFeatures.t
     * Constructor for BackForwardCacheSupportedFeatures.a
     * Constructor for BackForwardCacheSupportedFeatures.t
     * Constructor for BackForwardCacheSupportedFeatures.i
     * Constructor for BackForwardCacheSupportedFeatures.c
     * Constructor for BackForwardCacheSupportedFeatures.

     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures.*
     * Constructor for BackForwardCacheSupportedFeatures./
     * Constructor for BackForwardCacheSupportedFeatures.
    constructor();
    }
  /**
   * This class is used to set back forward cache options.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  class BackForwardCacheOptions {
    /**
     * Set the maximum size of pages that can cache.
     * Default is 1, max is 50.
     *
     * @type { int }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    size: int;
    /**
     * Set the lifetime in seconds in the BackForwardCache.
     * Default is 600.
     * 取值限定为整数。
     *
     * @type { int }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    timeToLive: int;
    
     * Constructor for BackForwardCacheSupportedFeatures./
     * Constructor for BackForwardCacheSupportedFeatures.*
     * Constructor for BackForwardCacheSupportedFeatures.*
     * Constructor for BackForwardCacheSupportedFeatures.

     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures.*
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures.@
     * Constructor for BackForwardCacheSupportedFeatures.s
     * Constructor for BackForwardCacheSupportedFeatures.y
     * Constructor for BackForwardCacheSupportedFeatures.s
     * Constructor for BackForwardCacheSupportedFeatures.c
     * Constructor for BackForwardCacheSupportedFeatures.a
     * Constructor for BackForwardCacheSupportedFeatures.p
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures.S
     * Constructor for BackForwardCacheSupportedFeatures.y
     * Constructor for BackForwardCacheSupportedFeatures.s
     * Constructor for BackForwardCacheSupportedFeatures.t
     * Constructor for BackForwardCacheSupportedFeatures.e
     * Constructor for BackForwardCacheSupportedFeatures.m
     * Constructor for BackForwardCacheSupportedFeatures.C
     * Constructor for BackForwardCacheSupportedFeatures.a
     * Constructor for BackForwardCacheSupportedFeatures.p
     * Constructor for BackForwardCacheSupportedFeatures.a
     * Constructor for BackForwardCacheSupportedFeatures.b
     * Constructor for BackForwardCacheSupportedFeatures.i
     * Constructor for BackForwardCacheSupportedFeatures.l
     * Constructor for BackForwardCacheSupportedFeatures.i
     * Constructor for BackForwardCacheSupportedFeatures.t
     * Constructor for BackForwardCacheSupportedFeatures.y
     * Constructor for BackForwardCacheSupportedFeatures..
     * Constructor for BackForwardCacheSupportedFeatures.W
     * Constructor for BackForwardCacheSupportedFeatures.e
     * Constructor for BackForwardCacheSupportedFeatures.b
     * Constructor for BackForwardCacheSupportedFeatures..
     * Constructor for BackForwardCacheSupportedFeatures.W
     * Constructor for BackForwardCacheSupportedFeatures.e
     * Constructor for BackForwardCacheSupportedFeatures.b
     * Constructor for BackForwardCacheSupportedFeatures.v
     * Constructor for BackForwardCacheSupportedFeatures.i
     * Constructor for BackForwardCacheSupportedFeatures.e
     * Constructor for BackForwardCacheSupportedFeatures.w
     * Constructor for BackForwardCacheSupportedFeatures..
     * Constructor for BackForwardCacheSupportedFeatures.C
     * Constructor for BackForwardCacheSupportedFeatures.o
     * Constructor for BackForwardCacheSupportedFeatures.r
     * Constructor for BackForwardCacheSupportedFeatures.e
     * Constructor for BackForwardCacheSupportedFeatures.

     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures.*
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures.@
     * Constructor for BackForwardCacheSupportedFeatures.s
     * Constructor for BackForwardCacheSupportedFeatures.i
     * Constructor for BackForwardCacheSupportedFeatures.n
     * Constructor for BackForwardCacheSupportedFeatures.c
     * Constructor for BackForwardCacheSupportedFeatures.e
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures.2
     * Constructor for BackForwardCacheSupportedFeatures.3
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures.s
     * Constructor for BackForwardCacheSupportedFeatures.t
     * Constructor for BackForwardCacheSupportedFeatures.a
     * Constructor for BackForwardCacheSupportedFeatures.t
     * Constructor for BackForwardCacheSupportedFeatures.i
     * Constructor for BackForwardCacheSupportedFeatures.c
     * Constructor for BackForwardCacheSupportedFeatures.

     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures. 
     * Constructor for BackForwardCacheSupportedFeatures.*
     * Constructor for BackForwardCacheSupportedFeatures./
     * Constructor for BackForwardCacheSupportedFeatures.
    constructor();
    }
  /**
   * Enum type supplied to {@link insertProxyRule} for indicating the scheme filter for proxy.
   * @enum { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum ProxySchemeFilter {
    /**
     * This indicates all the schemes will use the proxy.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    MATCH_ALL_SCHEMES = 0,
    /**
     * This indicates only the HTTP requests will use the proxy.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    MATCH_HTTP = 1,

    /**
     * This indicates only the HTTPS requests will use the proxy.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    MATCH_HTTPS = 2
    }
  /**
   * The ProxyConfig used by applyProxyOverride.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  class ProxyConfig {
    /**
     * Insert a bypass rule that indicates URLs that should skip the override proxy and connect the server
     * directly instead.
     * These maybe URLs or IP addresses and wildcards are supported. e.g. "*.example.com" means that requests to
     * "https://www.example.com" and "http://test.example.com" will connect the server directly.
     *
     * @param { string } bypassRule - The bypass rule.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    insertBypassRule(bypassRule: string): void;
    /**
     * Insert a proxy rule that indicates URLs that match the schemeFilter will connect the server directly.
     *
     * @param { ProxySchemeFilter } schemeFilter - The scheme filter for this rule.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    insertDirectRule(schemeFilter?: ProxySchemeFilter): void;
    /**
     * Insert a proxy rule which indicates that requests matching the schemeFilter should use an override proxy,
     * all requests will use the proxy rule if schemeFilter is null.
     *
     * The format for proxy is [scheme://]host[:port]. Scheme is optional and must be HTTP, HTTPS,
     * or SOCKS if present. Scheme defaults to HTTP.
     * Host is an IPv6 literal with brackets, an IPv4 literal or one or more labels seperated by a period.
     * Port number is optional and defaults
     * to 80 for HTTP, 443 for HTTPS and 1080 for SOCKS.
     *
     * e.g. example.com host: example.com
     *      https://example.com  scheme: https  host: example.com
     *      example.com:8888     host: example.com  port: 8888
     *      https://example.com:8888  scheme:https  host: example.com  port:8888
     *      192.168.1.1  host: 192.168.1.1
     *      192.168.1.1:8888  host:192.168.1.1 port: 8888
     *      [10:20:30:40:50:60:70:80]
     *
     * @param { string } proxyRule - The proxy rule.
     * @param { ProxySchemeFilter } schemeFilter - The scheme filter for this rule.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    insertProxyRule(proxyRule: string, schemeFilter?: ProxySchemeFilter): void;
    /**
     * Hostnames without a period in them (and that are not IP literals) will skip the proxy
     * and connect the server directly.
     * Examples: "abc", "local", "some-domain".
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    bypassHostnamesWithoutPeriod(): void;
    /**
     * By default, certain hostnames implicitly bypass the proxy if they are link-local IPs,
     * or localhost addresses. For instance hostnames matching any of (non-exhaustive list):
     * localhost *.localhost [::1] 127.0.0.1/8 169.254/16 [FE80::]/10
     * Call this function to override the default behavior and force localhost and link-local
     * URLs to be sent through the proxy.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    clearImplicitRules(): void;
    /**
     * Reverse the bypass rules.
     *
     * If false all URLs will use proxy settings except URLs match the bypass rules.
     * If true only URLs in the bypass list will use proxy, and all other URLs will be connected to directly.
     *
     * @param { boolean } reverse - If reverse the bypass rule.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    enableReverseBypass(reverse: boolean): void;
    /**
     * Returns the bypass rules.
     *
     * @returns { Array<string> } The bypass rules.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getBypassRules(): Array<string>;
    /**
     * Returns the proxy rules.
     *
     * @returns { Array<ProxyRule> } The proxy rules.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getProxyRules(): Array<ProxyRule>;
    /**
     * Returns if reverse bypass rules.
     *
     * @returns { boolean } If reverse bypass enabled.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    isReverseBypassEnabled(): boolean;
    }
  /**
   * The ProxyRule used by insertProxyRule.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  class ProxyRule {
    /**
     * Returns the scheme filter used for this rule.
     *
     * @returns { ProxySchemeFilter } The scheme filter used for this rule.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getSchemeFilter(): ProxySchemeFilter;
    /**
     * Returns the proxy URL.
     *
     * @returns { string } The proxy URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    getUrl(): string;
    }
  /**
   * The callback for proxy changed.
   *
   * @typedef { function }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  type OnProxyConfigChangeCallback = () => void;
  /**
   * This class is used for set proxy for ArkWeb.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  class ProxyController {
    /**
     * Sets ProxyConfig which will be used by all Webs in the app. URLs that match patterns in the bypass
     * list will connect the server directly.
     * Instead, the request will use the proxy specified by the config. Requests are not guaranteed to use
     * the new proxy immediately; wait for
     * the listener before loading a page. This listener will be called on the UI thread.
     * Note: calling applyProxyOverride will cause any existing system wide setting to be ignored.
     *
     * @param { ProxyConfig } proxyConfig - The proxy config.
     * @param { OnProxyConfigChangeCallback } callback - Called when the proxy has been changed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static applyProxyOverride(proxyConfig: ProxyConfig, callback: OnProxyConfigChangeCallback): void;
    /**
     * Remove the proxy config. Requests are not guaranteed to not use the proxy;
     * Wait for the listener before loading a page. This listener
     * will be called on the UI thread.
     *
     * @param { OnProxyConfigChangeCallback } callback - Called when the proxy has been changed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    static removeProxyOverride(callback: OnProxyConfigChangeCallback): void;
    }
  /**
   * Web组件的销毁模式，当Web组件销毁时，销毁模式会影响Web内核的资源释放时机，例如JavaScript运行上下文、渲染上下文等等。
   *
   * @enum { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum WebDestroyMode {
    /**
     * 普通模式，由系统决定Web组件资源的销毁时机。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    NORMAL_MODE = 0,
    /**
     * 快速模式，当Web组件触发销毁时，立即销毁相关的内部资源。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    FAST_MODE = 1
    }
  /**
   * The function with zero parameter.
   *
   * @typedef { function } zeroParamFn
   * @returns { V } The return value.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  type ZeroParamFn<V=void> = () => V;
  /**
   * The function with one parameter.
   *
   * @typedef { function } oneParamFn
   * @param { T } param - the first param.
   * @returns { V } The return value.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  type OneParamFn<T,V=void> = (param: T) => V;
  /**
   * 站点隔离机制将不同源的网站隔离在不同的渲染进程中，减少跨域攻击面。例如，PC上原有进程模型是每一个Tab对应一个Render进程，站点隔离打开后，让不同源的Iframe运行在独立的Render进程中。
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum SiteIsolationMode {
    /**
     * The partial site isolation mode
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    PARTIAL = 0,
    /**
     * The strict site isolation mode
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    STRICT = 1
  }

  /**
   * Web页面场景下，全局滚动条模式。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 static
   */
  enum ScrollbarMode {
    /**
     * 非常驻滚动条。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    OVERLAY_LAYOUT_SCROLLBAR = 0,

    /**
     * 常驻滚动条。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 static
     */
    FORCE_DISPLAY_SCROLLBAR = 1,

    /**
     * 覆盖视觉视口滚动条。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    OVERLAY_VISUAL_SCROLLBAR = 2
    }
}

export default webview;