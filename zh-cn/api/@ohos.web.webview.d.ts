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
 * @since 9
 */
/**
 * This module provides the capability to manage web modules.
 *
 * @namespace webview
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @since 10
 */
/**
 * This module provides the capability to manage web modules.
 *
 * @namespace webview
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 */
declare namespace webview {
  /**
   * Defines the Web's request/response header.
   *
   * @interface WebHeader
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Defines the Web's request/response header.
   *
   * @interface WebHeader
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the Web's request/response header.
   *
   * @interface WebHeader
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Defines the Web's request/response header.
   *
   * @typedef WebHeader
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  interface WebHeader {
    /**
     * Gets the key of the request/response header.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Gets the key of the request/response header.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Gets the key of the request/response header.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    headerKey: string;

    /**
     * Gets the value of the request/response header.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Gets the value of the request/response header.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Gets the value of the request/response header.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
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
   * Defines the mode for using HttpDns.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 10
   */
  /**
   * Defines the mode for using HttpDns.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  enum SecureDnsMode {
    /**
     * Do not use HttpDns, can be used to revoke previously used HttpDns configuration.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Do not use HttpDns, can be used to revoke previously used HttpDns configuration.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    OFF = 0,
    /**
     * By default, the user-settings of HttpDns is used for dns resolution, and if it fails,
     * the system dns is used for resolution.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * By default, the user-settings of HttpDns is used for dns resolution, and if it fails,
     * the system dns is used for resolution.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    AUTO = 1,
    /**
     * Use the user-settings of HttpDns for dns resolution. If it fails, it will not
     * fall back to the system dns, which will directly cause the page to fail to load.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Use the user-settings of HttpDns for dns resolution. If it fails, it will not
     * fall back to the system dns, which will directly cause the page to fail to load.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SECURE_ONLY = 2
  }

  /**
   * Defines the security level for the page.
   *
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  enum SecurityLevel {
    /**
     * Unable to determine whether it is safe or not, the non-http/https protocol used.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    NONE = 0,

    /**
     * Indicates the HTTPS protocol used by the page and the authentication is successful.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SECURE = 1,

    /**
     * The page is insecure. For example, the HTTP protocol is used or the HTTPS protocol
     * is used but use an legacy TLS version.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    WARNING = 2,

    /**
     * Attempted HTTPS and failed, the authentication is failed.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    DANGEROUS = 3
  }

  /**
   * The playback status of all audio and video.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enum MediaPlaybackState {
    /**
     * No audio or video currently.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    NONE = 0,

    /**
     * The audio and video on the page are being played.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    PLAYING = 1,

    /**
     * The audio and video on the page are paused.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    PAUSED = 2,

    /**
     * The audio and video on the page are stopped.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    STOPPED = 3
  }

  /**
   * The memory pressure level that can be set.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 14 dynamic
   */
  enum PressureLevel {
    /**
     * Modules are advised to free buffers that are cheap to re-allocate and not immediately needed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    MEMORY_PRESSURE_LEVEL_MODERATE = 1,

    /**
     * At this level, modules are advised to free all possible memory.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    MEMORY_PRESSURE_LEVEL_CRITICAL = 2
  }

  /**
   * 指示是否将 cookie 限制为仅创建它的同一站点的请求可以携带。指示是否将 cookie 限制为仅创建它的同一站点的请求可以携带。
   *
   * @enum { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  enum WebHttpCookieSameSitePolicy {
    /**
     * 标记为Secure的该类cookie，允许被跨域请求携带
     * 标记为Secure的该类cookie，允许被跨域请求携带
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    NONE = 0,

    /**
     * 允许特定跨站请求携带 cookie
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    LAX = 1,

    /**
     * 禁止跨站请求携带 cookie
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    STRICT = 2
  }

  /**
   * The form factors for User-Agent metadata.
   *
   * @enum { string }
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
   * @interface WebCustomScheme
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Defines the configuration of web custom scheme, related to {@link customizeSchemes} method.
   *
   * @interface WebCustomScheme
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Defines the configuration of web custom scheme, related to {@link customizeSchemes} method.
   *
   * @typedef WebCustomScheme
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  interface WebCustomScheme {

    /**
     * Name of the custom scheme.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Name of the custom scheme.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    schemeName: string;

    /**
     * Whether Cross-Origin Resource Sharing is supported.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Whether Cross-Origin Resource Sharing is supported.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    isSupportCORS: boolean;

    /**
     * Whether fetch request is supported.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Whether fetch request is supported.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    isSupportFetch: boolean;

    /**
     * If isStandard is true, the scheme will be handled as a standard scheme. The standard
     * schemes needs to comply with the URL normalization and parsing rules defined in Section 3.1 of RFC 1738,
     * which can be found in the http://www.ietf.org/rfc/rfc1738.txt.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isStandard?: boolean;

    /**
     * If isLocal is true, the same security rules as those applied to the "file" URL will be
     * used to handle the scheme.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isLocal?: boolean;

    /**
     * If isDisplayIsolated is true, then the scheme can only be displayed from other content
     * hosted using the same scheme.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isDisplayIsolated?: boolean;

    /**
     * If isSecure is true, the same security rules as those applied to the "https" URL will be
     * used to handle the scheme.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isSecure?: boolean;

    /**
     * If isCspBypassing is true, then this scheme can bypass Content Security Policy (CSP)
     * checks. In most cases, this value should not be true when isStandard is true.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isCspBypassing?: boolean;

    /**
     * If isCodeCacheSupported is true, then the js of this scheme can generate code cache.
     *
     * @type { ?boolean }
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
   * Provides basic information of web storage.
   *
   * @interface WebStorageOrigin
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Provides basic information of web storage.
   *
   * @interface WebStorageOrigin
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Provides basic information of web storage.
   *
   * @typedef WebStorageOrigin
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Provides basic information of web storage.
   *
   * @typedef WebStorageOrigin
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  interface WebStorageOrigin {
    /**
     * Url source.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Url source.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Url source.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    origin: string;
    /**
     * Specify the amount of storage for the source.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Specify the amount of storage for the source. Unit: byte.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Specify the amount of storage for the source. Unit: byte.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    usage: number;
    /**
     * the callback of getOriginUsage.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * the callback of getOriginUsage. Unit: byte.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * the callback of getOriginUsage. Unit: byte.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
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
   * Provides methods for managing web storage.3
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Provides methods for managing web storage.3
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Implements a WebStorage object to manage the Web SQL database and HTML5 Web Storage APIs.
   * All Web components in an application share a WebStorage object.
   *
   * <p><strong>API Note</strong>:<br>
   * You must load the Web component before calling the APIs in WebStorage.
   * </p>
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  class WebStorage {
    /**
     * Delete all the storage data.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Delete all the storage data.
     *
     * @param { boolean } incognito - {@code true} delete all the storage data in incognito mode;
     *                                {@code false} otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Deletes all data in the Web SQL Database.
     *
     * @param { boolean } incognito - Whether to delete all data in the Web SQL Database in incognito mode.
     *                                {@code true} means to delete all data in the Web SQL Database in incognito mode;
     *                                {@code false} means to delete all data in the Web SQL Database in normal non-incognito mode.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    static deleteAllData(incognito?: boolean): void;

    /**
     * Delete the storage data with the origin.
     *
     * @param { string } origin - The origin which to be deleted.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Delete the storage data with the origin.
     *
     * @param { string } origin - The origin which to be deleted.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Deletes all data in the specified origin.
     *
     * @param { string } origin - Index of the origin, which is obtained through {@link getOrigins}.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    static deleteOrigin(origin: string): void;

    /**
     * Get current all the web storage origins.
     * @returns { Promise<Array<WebStorageOrigin>> } - returns all the WebStorageOrigin.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100012 - Invalid web storage origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get current all the web storage origins.
     * @returns { Promise<Array<WebStorageOrigin>> } - returns all the WebStorageOrigin.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100012 - Invalid web storage origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Obtains information about all origins that are currently using the Web SQL Database.
     * This API uses a promise to return the result.
     *
     * @returns { Promise<Array<WebStorageOrigin>> } - Promise used to return the information about the origins.
     *                                                 For details, see {@link WebStorageOrigin}.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100012 - Invalid web storage origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    static getOrigins(): Promise<Array<WebStorageOrigin>>;

    /**
     * Get current all the web storage origins.
     * @param { AsyncCallback<Array<WebStorageOrigin>> } callback - callback used to return all the WebStorageOrigin.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100012 - Invalid web storage origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get current all the web storage origins.
     * @param { AsyncCallback<Array<WebStorageOrigin>> } callback - callback used to return all the WebStorageOrigin.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100012 - Invalid web storage origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Obtains information about all origins that are currently using the Web SQL Database.
     * This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<Array<WebStorageOrigin>> } callback - Callback used to return the information about the
     *                                                              origins. For details, see {@link WebStorageOrigin}.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100012 - Invalid web storage origin.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    static getOrigins(callback: AsyncCallback<Array<WebStorageOrigin>>): void;

    /**
     * Get the web storage quota with the origin.
     * @param { string } origin -  The origin which to be inquired.
     * @returns { Promise<number> } - the promise returned by the function. Unit: byte.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get the web storage quota with the origin.
     * @param { string } origin -  The origin which to be inquired.
     * @returns { Promise<number> } - the promise returned by the function. Unit: byte.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the web storage quota with the origin.
     * @param { string } origin -  The origin which to be inquired.
     * @returns { Promise<number> } - the promise returned by the function. Unit: byte.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    static getOriginQuota(origin: string): Promise<number>;

    /**
     * Get the web storage quota with the origin.
     * @param { string } origin -  The origin which to be inquired.
     * @param { AsyncCallback<number> } callback - the callback of getOriginQuota. Unit: byte.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get the web storage quota with the origin.
     * @param { string } origin -  The origin which to be inquired.
     * @param { AsyncCallback<number> } callback - the callback of getOriginQuota. Unit: byte.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the web storage quota with the origin.
     * @param { string } origin -  The origin which to be inquired.
     * @param { AsyncCallback<number> } callback - the callback of getOriginQuota. Unit: byte.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    static getOriginQuota(origin: string, callback: AsyncCallback<number>): void;

    /**
     * Get the web amount of storage with the origin.
     * @param { string } origin -  The origin which to be inquired.
     * @returns { Promise<number> } - the promise returned by the function. Unit: byte.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get the web amount of storage with the origin.
     * @param { string } origin -  The origin which to be inquired.
     * @returns { Promise<number> } - the promise returned by the function. Unit: byte.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the web amount of storage with the origin.
     * @param { string } origin -  The origin which to be inquired.
     * @returns { Promise<number> } - the promise returned by the function. Unit: byte.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    static getOriginUsage(origin: string): Promise<number>;

    /**
     * Get the web amount of storage with the origin.
     * @param { string } origin -  The origin which to be inquired.
     * @param { AsyncCallback<number> } callback - the callback of getOriginUsage. Unit: byte.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get the web amount of storage with the origin.
     * @param { string } origin -  The origin which to be inquired.
     * @param { AsyncCallback<number> } callback - the callback of getOriginUsage. Unit: byte.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the web amount of storage with the origin.
     * @param { string } origin -  The origin which to be inquired.
     * @param { AsyncCallback<number> } callback - the callback of getOriginUsage. Unit: byte.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100011 - Invalid origin.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    static getOriginUsage(origin: string, callback: AsyncCallback<number>): void;
  }

  /**
   * Provides methods for managing web database.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Implements a WebDataBase object.
   *
   * <p><strong>API Note</strong>:<br>
   * You must load the Web component before calling the APIs in WebDataBase.
   * </p>
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  class WebDataBase {
    /**
     * Get whether instances holds any http authentication credentials.
     * @returns { boolean } true if instances saved any http authentication credentials otherwise false.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get whether instances holds any http authentication credentials.
     * @returns { boolean } true if instances saved any http authentication credentials otherwise false.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    static existHttpAuthCredentials(): boolean;

    /**
     * Delete all http authentication credentials.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Deletes all HTTP authentication credentials saved in the cache. This API returns the result synchronously.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    static deleteHttpAuthCredentials(): void;

    /**
     * Get http authentication credentials.
     * @param { string } host - The host to which the credentials apply.
     * @param { string } realm - The realm to which the credentials apply.
     * @returns { Array<string> } Return an array containing username and password.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get http authentication credentials.
     * @param { string } host - The host to which the credentials apply.
     * @param { string } realm - The realm to which the credentials apply.
     * @returns { Array<string> } Return an array containing username and password.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    static getHttpAuthCredentials(host: string, realm: string): Array<string>;

    /**
     * Save http authentication credentials.
     * @param { string } host - The host to which the credentials apply.
     * @param { string } realm - The realm to which the credentials apply.
     * @param { string } username - The username.
     * @param { string } password - The password.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Saves HTTP authentication credentials for a given host and realm. This API returns the result synchronously.
     * @param { string } host - Host to which HTTP authentication credentials apply.
     * @param { string } realm - Realm to which HTTP authentication credentials apply.
     * @param { string } username - User name.
     * @param { string } password - Password.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
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
     * @throws { BusinessError } 17100011 - Invalid origin.
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
     * @throws { BusinessError } 17100011 - Invalid origin.
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
     * @throws { BusinessError } 17100011 - Invalid origin.
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
     * @throws { BusinessError } 17100011 - Invalid origin.
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
   * @typedef WebHttpCookie
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  interface WebHttpCookie {
    /**
     * 获取cookie的域名
     *
     * @type { string } The cookie's domain.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    domain: string;

    /**
     * 获取cookie的path
     *
     * @type { string } The cookie's path.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    path: string;

    /**
     * 获取cookie的name
     *
     * @type { string } The cookie's name.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    name: string;

    /**
     * 获取cookie的value
     *
     * @type { string } The cookie's value.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    value: string;
    /**
     * 获取cookie的失效日期
     *
     * @type { string } The cookie's expiration date.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    expiresDate: string;

    /**
     * 获取是否是session cookie
     *
     * @type { boolean } True if the cookie is session cookie.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    isSessionCookie: boolean;

    /**
     * 获取当前cookie是否被标记了HttpOnly
     *
     * @type { boolean } True if the cookie is marked as HttpOnly.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    isHttpOnly: boolean;

    /**
     * 获取当前cookie是否是secure cookie
     *
     *
     *
     * @type { boolean } True if the cookie is secure.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    isSecure: boolean;

    /**
     * 获取当前cookie的samesite策略
     *
     * @type { WebHttpCookieSameSitePolicy } The samesite policy.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    samesitePolicy: WebHttpCookieSameSitePolicy;
  }

  /**
   * Provides methods for managing the web cookies.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Provides methods for managing the web cookies.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  class WebCookieManager {
    /**
     * 获取当前web保存的所有cookie
     *
     *
     *
     * @param { boolean } incognito - {@code true} Gets all cookies in incognito context; {@code false} otherwise.
     * @returns { Promise<Array<WebHttpCookie>> } - 返回cookie列表
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    static fetchAllCookies(incognito: boolean):  Promise<Array<WebHttpCookie>>;

    /**
     * Gets all cookies for the given URL.
     *
     * @param { string } url - The URL for which the cookies are requested.
     * @returns { string } - The cookie value for the given URL.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9 dynamic
     * @deprecated since 11
     * @useinstead ohos.web.webview.WebCookieManager#fetchCookieSync
     */
    static getCookie(url: string): string;

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
     * @atomicservice
     * @since 11 dynamic
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
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    static fetchCookie(url: string): Promise<string>;

    /**
     * Gets all cookies for the given URL Asynchronously.
     *
     * @param { string } url - The URL for which the cookies are requested.
     * @param { boolean } incognito - {@code true} gets all cookies for the given URL
     *                                in incognito mode; {@code false} otherwise.
     * @returns { Promise<string> } - A promise resolved after the cookies of given URL have been gotten.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 14 dynamic
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
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    static fetchCookie(url: string, callback: AsyncCallback<string>): void;

    /**
     * Set a single cookie (key-value pair) for the given URL.
     *
     * @param { string } url - The URL for which the cookie is to be set.
     * @param { string } value - The cookie as a string, using the format of the 'Set-Cookie' HTTP response header.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @throws { BusinessError } 17100005 - The provided cookie value is invalid. It must follow the format specified
     * <br>in RFC 6265.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9 dynamic
     * @deprecated since 11
     * @useinstead ohos.web.webview.WebCookieManager#configCookieSync
     */
    static setCookie(url: string, value: string): void;

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
     * @atomicservice
     * @since 11 dynamic
     */
    static configCookieSync(url: string, value: string, incognito?: boolean): void;

    /**
     * Set a single cookie (key-value pair) for the given URL.
     *
     * @param { string } url - The URL for which the cookie is to be set.
     * @param { string } value - The cookie as a string, using the format of the 'Set-Cookie' HTTP response header.
     * @param { boolean } incognito - {@code true} set a single cookie (key-value pair) for the given URL
     *                                in incognito mode; {@code false} otherwise.
     * @param { boolean } includeHttpOnly - {@code true} HTTP-only cookies can also be overwritten;
     *                                      {@code false} otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @throws { BusinessError } 17100005 - The provided cookie value is invalid. It must follow the format specified
     * <br>in RFC 6265.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 14 dynamic
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
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    static configCookie(url: string, value: string): Promise<void>;

    /**
     * Set a single cookie (key-value pair) for the given URL Asynchronously.
     *
     * @param { string } url - The URL for which the cookie is to be set.
     * @param { string } value - The cookie as a string, using the format of the 'Set-Cookie' HTTP response header.
     * @param { boolean } incognito - {@code true} set a single cookie (key-value pair) for the given URL
     *                                in incognito mode; {@code false} otherwise.
     * @param { boolean } includeHttpOnly - {@code true} HTTP-only cookies can also be overwritten;
     *                                      {@code false} otherwise.
     * @returns { Promise<void> } - A promise resolved after the cookies of given URL have been set.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @throws { BusinessError } 17100005 - The provided cookie value is invalid. It must follow the format specified
     * <br>in RFC 6265.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 14 dynamic
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
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    static configCookie(url: string, value: string, callback: AsyncCallback<void>): void;

    /**
     * Save the cookies synchronously.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15 dynamic
     */
    static saveCookieSync(): void;

    /**
     * Save the cookies Asynchronously.
     * @returns { Promise<void> } - A promise resolved after the cookies have been saved.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Save the cookies Asynchronously.
     * @returns { Promise<void> } - A promise resolved after the cookies have been saved.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static saveCookieAsync(): Promise<void>;

    /**
     * Save the cookies Asynchronously.
     * @param { AsyncCallback<void> } callback - Called after the cookies have been saved.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Save the cookies Asynchronously.
     * @param { AsyncCallback<void> } callback - Called after the cookies have been saved.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static saveCookieAsync(callback: AsyncCallback<void>): void;

    /**
     * Get whether the instance can send and accept cookies.
     *
     * @returns { boolean } True if the instance can send and accept cookies else false.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get whether the instance can send and accept cookies.
     *
     * @returns { boolean } True if the instance can send and accept cookies else false.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static isCookieAllowed(): boolean;

    /**
     * Set whether the instance should send and accept cookies.
     * By default this is set to be true.
     *
     * @param { boolean } accept - Whether the instance should send and accept cookies.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Set whether the instance should send and accept cookies.
     * By default this is set to be true.
     *
     * @param { boolean } accept - Whether the instance should send and accept cookies.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static putAcceptCookieEnabled(accept: boolean): void;

    /**
     * Get whether the instance can send and accept thirdparty cookies.
     *
     * @returns { boolean } True if the instance can send and accept thirdparty cookies else false.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get whether the instance can send and accept thirdparty cookies.
     *
     * @returns { boolean } True if the instance can send and accept thirdparty cookies else false.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
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
     * @since 9
     */
    /**
     * Set whether the instance should send and accept thirdparty cookies.
     * By default this is set to be false.
     *
     * @param { boolean } accept - Whether the instance should send and accept thirdparty cookies.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static putAcceptThirdPartyCookieEnabled(accept: boolean): void;

    /**
     * Check whether exists any cookies.
     *
     * @returns { boolean } True if exists more than one cookie else false;
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Check whether exists any cookies.
     *
     * @param { boolean } incognito - {@code true} check whether exists any cookies.
     *                                in incognito mode; {@code false} otherwise.
     * @returns { boolean } True if exists more than one cookie else false;
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Check whether exists any cookies.
     *
     * @param { boolean } incognito - {@code true} check whether exists any cookies.
     *                                in incognito mode; {@code false} otherwise.
     * @returns { boolean } True if exists more than one cookie else false;
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    static existCookie(incognito?: boolean): boolean;

    /**
     * Remove all cookies.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.web.webview.WebCookieManager#clearAllCookiesSync
     */
    static deleteEntireCookie(): void;

    /**
     * Remove all cookies.
     *
     * @param { boolean } incognito - {@code true} remove all cookies in incognito mode;
     *                                {@code false} otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static clearAllCookiesSync(incognito?: boolean): void;

    /**
     * Remove all cookies Asynchronously.
     * @returns { Promise<void> } - A promise resolved after the cookies have been deleted.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    static clearAllCookies(): Promise<void>;

    /**
     * Remove all cookies Asynchronously.
     * @param { AsyncCallback<void> } callback - Called after the cookies have been deleted.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    static clearAllCookies(callback: AsyncCallback<void>): void;

    /**
     * Delete the session cookies.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.web.webview.WebCookieManager#clearSessionCookieSync
     */
    static deleteSessionCookie(): void;

    /**
     * Delete the session cookies.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static clearSessionCookieSync(): void;

    /**
     * Delete the session cookies Asynchronously.
     * @returns { Promise<void> } - A promise resolved after the cookies have been deleted.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static clearSessionCookie(): Promise<void>;

    /**
     * Delete the session cookies Asynchronously.
     * @param { AsyncCallback<void> } callback - Called after the cookies have been deleted.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Delete the session cookies Asynchronously.
     * @param { AsyncCallback<void> } callback - Called after the cookies have been deleted.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    static clearSessionCookie(callback: AsyncCallback<void>): void;

    /**
     * Delays the initialization of the web engine. By default, the web engine is initialized when the CookieManager
     * interface is called. By setting the 'lazy' parameter to true, the web engine will not be initialized when the
     * CookieManager interface is called. Instead, the web engine will be initialized either when the web component is
     * created or when initializeWebEngine is called.
     *
     * @param { boolean } lazy - Controls whether to delay the initialization of the web engine.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 dynamic
     */
    static setLazyInitializeWebEngine(lazy: boolean): void;
  }

  /**
   * Enum type supplied to {@link onMessageEventExt} for indicating the type of web message.
   *
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 10
   */
  /**
   * Enum type supplied to {@link onMessageEventExt} for indicating the type of web message.
   *
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Enum type supplied to {@link onMessageEventExt} for indicating the type of web message.
   *
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  enum WebMessageType {
    /**
     * Unsupported data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Unsupported data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    NOT_SUPPORT = 0,

    /**
     * The string data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * The string data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The string data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    STRING = 1,

    /**
     * The number data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * The number data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The number data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    NUMBER = 2,

    /**
     * The boolean data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * The boolean data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The boolean data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    BOOLEAN = 3,

    /**
     * The arraybuffer data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * The arraybuffer data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    ARRAY_BUFFER = 4,

    /**
     * The array data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * The array data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The array data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    ARRAY = 5,

    /**
     * The error data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * The error data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The error data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    ERROR = 6
  }

  /**
   * The message received or sent from web message port.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 10
   */
  /**
   * The message received or sent from web message port.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * The message received or sent from web message port.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  class WebMessageExt {
    /**
     * Get the type of the web message.
     * @returns { WebMessageType } - Returns data of WebMessageType type
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get the type of the web message.
     * @returns { WebMessageType } - Returns data of WebMessageType type
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the type of the web message.
     * @returns { WebMessageType } - Returns data of WebMessageType type
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getType(): WebMessageType;

    /**
     * Get the string value of the web message.
     * @returns { string } - Returns data of string type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get the string value of the web message.
     * @returns { string } - Returns data of string type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the string value of the web message.
     * @returns { string } - Returns data of string type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getString(): string;

    /**
     * Get the number value of the web message.
     * @returns { number } - Returns data of number type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get the number value of the web message.
     * @returns { number } - Returns data of number type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the number value of the web message.
     * @returns { number } - Returns data of number type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getNumber(): number;

    /**
     * Get the boolean value of the web message.
     * @returns { boolean } - Returns data of Boolean type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get the boolean value of the web message.
     * @returns { boolean } - Returns data of Boolean type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the boolean value of the web message.
     * @returns { boolean } - Returns data of Boolean type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getBoolean(): boolean;

    /**
     * Get the array buffer value of the web message.
     * @returns { ArrayBuffer } - Returns data of ArrayBuffer type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get the array buffer value of the web message.
     * @returns { ArrayBuffer } - Returns data of ArrayBuffer type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    getArrayBuffer(): ArrayBuffer;

    /**
     * Get the array value of the web message.
     * @returns { Array<string | number | boolean> } - Returns data of Array type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get the array value of the web message.
     * @returns { Array<string | number | boolean> } - Returns data of Array type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the array value of the web message.
     * @returns { Array<string | number | boolean> } - Returns data of Array type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getArray(): Array<string | number | boolean>;

    /**
     * Get the error value of the web message.
     * @returns { Error } - Returns data of Error type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get the error value of the web message.
     * @returns { Error } - Returns data of Error type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the error value of the web message.
     * @returns { Error } - Returns data of Error type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getError(): Error;

    /**
     * Set the type of the web message.
     * @param { WebMessageType } type - set WebMessageType type data
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Set the type of the web message.
     * @param { WebMessageType } type - set WebMessageType type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Set the type of the web message.
     * @param { WebMessageType } type - set WebMessageType type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    setType(type: WebMessageType): void;

    /**
     * Set the string value of the web message.
     * @param { string } message - set string type data
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Set the string value of the web message.
     * @param { string } message - set string type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Set the string value of the web message.
     * @param { string } message - set string type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    setString(message: string): void;

    /**
     * Set the number value of the web message.
     * @param { number } message - set number type data
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Set the number value of the web message.
     * @param { number } message - set number type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Set the number value of the web message.
     * @param { number } message - set number type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    setNumber(message: number): void;

    /**
     * Set the boolean value of the web message.
     * @param { boolean } message - set boolean type data
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Set the boolean value of the web message.
     * @param { boolean } message - set boolean type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Set the boolean value of the web message.
     * @param { boolean } message - set boolean type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    setBoolean(message: boolean): void;

    /**
     * Set the array buffer value of the web message.
     * @param { ArrayBuffer } message - set ArrayBuffer type data
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Set the array buffer value of the web message.
     * @param { ArrayBuffer } message - set ArrayBuffer type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    setArrayBuffer(message: ArrayBuffer): void;

    /**
     * Set the array value of the web message.
     * @param { Array<string | number | boolean> } message - set Array type data
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Set the array value of the web message.
     * @param { Array<string | number | boolean> } message - set Array type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Set the array value of the web message.
     * @param { Array<string | number | boolean> } message - set Array type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    setArray(message: Array<string | number | boolean>): void;

    /**
     * Set the error value of the web message.
     * @param { Error } message - set Error type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Set the error value of the web message.
     * @param { Error } message - set Error type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Set the error value of the web message.
     * @param { Error } message - set Error type data
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    setError(message: Error): void;
  }

  /**
   * WebMessage type supplied to {@link onMessageEventExt} for indicating the type of web message.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * WebMessage type supplied to {@link onMessageEventExt} for indicating the type of web message.
   *
   * @typedef { ArrayBuffer | string }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  type WebMessage = ArrayBuffer | string;
  /**
   * Define html web message port.
   * @interface WebMessagePort
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Define html web message port.
   * @interface WebMessagePort
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Define html web message port.
   * @typedef WebMessagePort
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  interface WebMessagePort {
    /**
     * The flag indicates whether more formats are supported than string and array buffers.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * The flag indicates whether more formats are supported than string and array buffers.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    isExtentionType?: boolean;

    /**
     * Close port.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Close port.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    close(): void;

    /**
     * Post a message to other port.
     * @param { WebMessage } message - Message to send.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100010 - Failed to post messages through the port.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Post a message to other port.
     * @param { WebMessage } message - Message to send.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100010 - Failed to post messages through the port.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    postMessageEvent(message: WebMessage): void;

    /**
     * Receive message from other port.
     * @param { function } callback - Callback function for receiving messages.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100006 - Failed to register a message event for the port.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Receive message from other port.
     * @param { function } callback - Callback function for receiving messages.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100006 - Failed to register a message event for the port.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    onMessageEvent(callback: (result: WebMessage) => void): void;

    /**
     * Post a message to other port.
     * @param { WebMessageExt } message - Message to send.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100010 - Failed to post messages through the port.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Post a message to other port.
     * @param { WebMessageExt } message - Message to send.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100010 - Failed to post messages through the port.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Post a message to other port.
     * @param { WebMessageExt } message - Message to send.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100010 - Failed to post messages through the port.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    postMessageEventExt(message: WebMessageExt): void;

    /**
     * Receive message from other port.
     * @param { function } callback - Callback function for receiving messages.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100006 - Failed to register a message event for the port.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Receive message from other port.
     * @param { function } callback - Callback function for receiving messages.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100006 - Failed to register a message event for the port.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Receive message from other port.
     * @param { function } callback - Callback function for receiving messages.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100006 - Failed to register a message event for the port.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    onMessageEventExt(callback: (result: WebMessageExt) => void): void;
  }

  /**
   * Provides information for history item in BackForwardList.
   * @interface HistoryItem
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Provides information for history item in BackForwardList.
   * @interface HistoryItem
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Provides information for history item in BackForwardList.
   * @typedef HistoryItem
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  interface HistoryItem {
    /**
     * Pixelmap of icon.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Pixelmap of icon.
     * @type { image.PixelMap }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    icon: image.PixelMap;

    /**
     * Url of this history item.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Url of this history item.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    historyUrl: string;

    /**
     * Original request url of this history item.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Original request url of this history item.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    historyRawUrl: string;

    /**
     * Title of this history item.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Title of this history item.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    title: string;
  }

  /**
   * Provides back and forward history list information method. related to {@link HistoryItem}.
   * @interface BackForwardList
   * @syscap SystemCapability.Web.Webview.Core
   * @since 9
   */
  /**
   * Provides back and forward history list information method. related to {@link HistoryItem}.
   * @interface BackForwardList
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Provides back and forward history list information method. related to {@link HistoryItem}.
   * @typedef BackForwardList
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  interface BackForwardList {
    /**
     * Current index in BackForwardList.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Current index in BackForwardList.
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    currentIndex: number;

    /**
     * Size of in BackForwardList.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Size of in BackForwardList.
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    size: number;

    /**
     * Get history entry at given index.
     *
     * @param { number } index Index of back forward list entry.
     * @returns { HistoryItem } HistoryItem at given index in back forward list.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get history entry at given index.
     *
     * @param { number } index Index of back forward list entry.
     * @returns { HistoryItem } HistoryItem at given index in back forward list.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
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
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 10
   */
  /**
   * Enum type supplied to {@link runJavaScriptExt} for indicating the result of JavaScript code execution.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Enum type supplied to {@link runJavaScriptExt} for indicating the result of JavaScript code execution.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  enum JsMessageType {
    /**
     * Unsupported data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Unsupported data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    NOT_SUPPORT = 0,

    /**
     * The string data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * The string data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The string data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    STRING = 1,

    /**
     * The number data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * The number data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The number data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    NUMBER = 2,

    /**
     * The boolean data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * The boolean data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The boolean data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    BOOLEAN = 3,

    /**
     * The arraybuffer data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * The arraybuffer data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    ARRAY_BUFFER = 4,

    /**
     * The array data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * The array data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The array data type.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    ARRAY = 5
  }

  /**
   * The message for indicating the of result of JavaScript code execution.
   * @syscap SystemCapability.Web.Webview.Core
   * @since 10
   */
  /**
   * The message for indicating the of result of JavaScript code execution.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * The message for indicating the of result of JavaScript code execution.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  class JsMessageExt {
    /**
     * Get the type of the JavaScript code execution result.
     * @returns { JsMessageType } - Returns data of JsMessageType type
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get the type of the JavaScript code execution result.
     * @returns { JsMessageType } - Returns data of JsMessageType type
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the type of the JavaScript code execution result.
     * @returns { JsMessageType } - Returns data of JsMessageType type
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getType(): JsMessageType;

    /**
     * Get the string value of the JavaScript code execution result.
     * @returns { string } - Returns data of string type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get the string value of the JavaScript code execution result.
     * @returns { string } - Returns data of string type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the string value of the JavaScript code execution result.
     * @returns { string } - Returns data of string type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getString(): string;

    /**
     * Get the number value of the JavaScript code execution result.
     * @returns { number } - Returns data of number type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get the number value of the JavaScript code execution result.
     * @returns { number } - Returns data of number type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the number value of the JavaScript code execution result.
     * @returns { number } - Returns data of number type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getNumber(): number;

    /**
     * Get the boolean value of the JavaScript code execution result.
     * @returns { boolean } - Returns data of Boolean type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get the boolean value of the JavaScript code execution result.
     * @returns { boolean } - Returns data of Boolean type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the boolean value of the JavaScript code execution result.
     * @returns { boolean } - Returns data of Boolean type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getBoolean(): boolean;

    /**
     * Get the array buffer value of the JavaScript code execution result.
     * @returns { ArrayBuffer } - Returns data of ArrayBuffer
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get the array buffer value of the JavaScript code execution result.
     * @returns { ArrayBuffer } - Returns data of ArrayBuffer
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    getArrayBuffer(): ArrayBuffer;

    /**
     * Get the array value of the the JavaScript code execution result.
     * @returns { Array<string | number | boolean> } - Returns data of Array type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get the array value of the the JavaScript code execution result.
     * @returns { Array<string | number | boolean> } - Returns data of Array type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the array value of the the JavaScript code execution result.
     * @returns { Array<string | number | boolean> } - Returns data of Array type
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getArray(): Array<string | number | boolean>;

    /**
     * Get the object or exception of the the JavaScript code execution result and serialize it into a string.
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
     * Set whether to ignore Cache-Control: no-store?.
     * <p><strong>API Note</strong>:<br>
     * This setting controls whether prefetch operations bypass the HTTP Cache-Control: no-store directive.
     * Important?: Default behavior (false) aligns with HTTP security standards. Overriding (true) requires explicit risk
     * assessment for non-sensitive resources.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    ignoreCacheControlNoStore: boolean;

    /**
     * ?Set prefetch page interval limit.
     * <p><strong>API Note</strong>:<br>
     * Default 500ms (ensures only one successful prefetch within 500ms).
     * The interval throttles prefetch frequency to balance performance and resource usage.
     * 取值限定为整数。
     *
     * @type { number }
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
   * Enum type for ArkWeb Engine Version.
   *
   * <strong>ArkWeb Dual Web Engine Versioning Convention</strong>:
   * <p>See [ArkWeb Dual Web Engine Versioning Convention] for switching between Legacy and Evergreen Web Engine.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  enum ArkWebEngineVersion {
    /**
     * Use the system default ArkWeb engine.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    SYSTEM_DEFAULT = 0,

    /**
     * ArkWeb M114 version.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    M114 = 1,

    /**
     * ArkWeb M132 version.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    M132 = 2,

    /**
     * arkweb 144内核版本
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    M144 = 3,

    /**
     * ArkWeb auto use the newest ArkWeb Engine version.
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
     * 确定是否禁用PDFViewer。
     *
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
     * @since 20 dynamic
     */
    static setActiveWebEngineVersion(engineVersion: ArkWebEngineVersion): void;

    /**
     * Get the currently active ArkWeb engine version.
     * @returns {ArkWebEngineVersion} Active ArkWeb Engine version as defined by ArkWebEngineVersion
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static getActiveWebEngineVersion(): ArkWebEngineVersion;

    /**
     * Check if the currently active ArkWeb engine is Evergreen.
     * @returns {boolean} true means the application is using the Evergreen Web Engine, false means not.
     * @static
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
     * Set web engine to use HttpDns server to resolve dns.
     * @param { SecureDnsMode } secureDnsMode - using HttpDns.
     * @param { string } secureDnsConfig - The configuration of the HttpDns server.
     *                   Must be https protocol and only allow one server to be configured.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Set web engine to use HttpDns server to resolve dns.
     * @param { SecureDnsMode } secureDnsMode - using HttpDns.
     * @param { string } secureDnsConfig - The configuration of the HttpDns server.
     *                   Must be https protocol and only allow one server to be configured.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static setHttpDns(secureDnsMode: SecureDnsMode, secureDnsConfig: string): void;

    /**
     * Enables debugging of web contents.
     * @param { boolean } webDebuggingAccess {@code true} enables debugging of web contents; {@code false} otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Enables debugging of web contents.
     * @param { boolean } webDebuggingAccess {@code true} enables debugging of web contents; {@code false} otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
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
     * @param { boolean } webDebuggingAccess - Sets whether to enable web debugging.{@code true} enable web debugging;
 {@code false} disable web debugging. The default value is false.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    static setWebDebuggingAccess(webDebuggingAccess: boolean): void;

    /**
     * After enable PrivateNetworkAccess feature, ArkWeb will send a CORS preflight request before issuing any
     * sub-resource private network requests to request explicit permission from the target server. After disable
     * PrivateNetworkAccess, ArkWeb will no longer check whether the private network request is legitimate.
     * By default, PrivateNetworkAccess feature is enabled.
     *
     * @param { boolean } enable - {@code true} enable the private network acccess check; {@code false} otherwise.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static enablePrivateNetworkAccess(enable: boolean): void;
    /**
     * Get whether PrivateNetworkAccess is enabled.
     *
     * @returns { boolean } True if enable the ability to check private network access else false.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static isPrivateNetworkAccessEnabled(): boolean;

    /**
     * Enables debugging of web contents.
     * <p><strong>API Note</strong>:<br>
     * The port numbers from 0 to 1024 are prohibited. Ports less than 0 or greater than 65535 are considered invalid.
     * If an attempt is made to set these disabled or invalid ports, an exception will be thrown.
     * </p>
     *
     * @param { boolean } webDebuggingAccess {@code true} enables debugging of web contents; {@code false} otherwise.
     * @param { number } port Indicates the port of the devtools server. After the port is specified, a tcp server
     *                        socket is created instead of a unix domain socket.
     * @throws { BusinessError } 17100023 - The port number is not within the allowed range.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static setWebDebuggingAccess(webDebuggingAccess: boolean, port: number): void;

    /**
     * Set web engine socket idle timeout.
     * <p><strong>API Note</strong>:<br>
     * Unit: seconds, minimum 30s, maximum 5 minutes. If not set, the default is five minutes.
     * </p>
     *
     * @param { number } timeout - Socket idle timeout.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    static setSocketIdleTimeout(timeout: number): void;

    /**
     * Enable the ability to check website security risks.
     * Illegal and fraudulent websites are mandatory enabled and can't be disabled by this function.
     * @param { boolean } enable - {@code true} enable check the website security risks; {@code false} otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    enableSafeBrowsing(enable: boolean): void;

    /**
     * Get whether checking website security risks is enabled.
     * @returns { boolean } True if enable the ability to check website security risks else false.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    isSafeBrowsingEnabled(): boolean;

    /**
     * Checks whether the web page can go forward.
     * @returns { boolean } True if the web page can go forward else false.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Checks whether the web page can go forward.
     * @returns { boolean } True if the web page can go forward else false.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    accessForward(): boolean;

    /**
     * Checks whether the web page can go back.
     * @returns { boolean } True if the web page can go back else false.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Checks whether the web page can go back.
     * @returns { boolean } True if the web page can go back else false.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    accessBackward(): boolean;

    /**
     * Checks whether the web page can go back or forward the given number of steps.
     *
     * @param { number } step - The number of steps.
     * @returns { boolean } True if the web page can go back else false.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Checks whether the web page can go back or forward the given number of steps.
     *
     * @param { number } step - The number of steps.
     * @returns { boolean } True if the web page can go back else false.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    accessStep(step: number): boolean;

    /**
     * Goes forward in the history of the web page.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Goes forward in the history of the web page.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    forward(): void;

    /**
     * Goes back in the history of the web page.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Goes back in the history of the web page.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    backward(): void;

    /**
     * Clears the history in the Web.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Clears the history in the Web.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
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
     * Refreshes the current URL.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Refreshes the current URL.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
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
     * @since 24 dynamic
     */
    refresh(ignoreCache: boolean): void;

    /**
     * Loads the data or URL.
     *
     * @param { string } data - A string encoded according to "Base64" or "URL".
     * @param { string } mimeType - Media type. For example: "text/html".
     * @param { string } encoding - Encoding type. For example: "UTF-8".
     * @param { string } [baseUrl] - A specified URL path ("http"/"https"/"data" protocol),
     *                             which is assigned to window.origin by the Web component.
     * @param { string } [historyUrl] - History URL. When it is not empty, it can be managed by
     *                                history records to realize the back and forth function.
     *                                This property is invalid when baseUrl is empty.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *                           length exceeds 2048.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Loads the data or URL.
     *
     * @param { string } data - A string encoded according to "Base64" or "URL".
     * @param { string } mimeType - Media type. For example: "text/html".
     * @param { string } encoding - Encoding type. For example: "UTF-8".
     * @param { string } [baseUrl] - A specified URL path ("http"/"https"/"data" protocol),
     *                             which is assigned to window.origin by the Web component.
     * @param { string } [historyUrl] - History URL. When it is not empty, it can be managed by
     *                                history records to realize the back and forth function.
     *                                This property is invalid when baseUrl is empty.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    loadData(data: string, mimeType: string, encoding: string, baseUrl?: string, historyUrl?: string): void;

    /**
     * Loads the data or URL.
     *
     * @param { string | Resource } url - The URL to load.
     * @param { Array<WebHeader> } [headers] - Additional HTTP request header for URL.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid.
     * @throws { BusinessError } 17100003 - Invalid resource path or file type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Loads the data or URL.
     *
     * @param { string | Resource } url - The URL to load.
     * @param { Array<WebHeader> } [headers] - Additional HTTP request header for URL.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid.
     * @throws { BusinessError } 17100003 - Invalid resource path or file type.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Loads the data or URL.
     *
     * @param { string | Resource } url - The URL to load.
     * @param { Array<WebHeader> } [headers] - Additional HTTP request header for URL.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid.
     * @throws { BusinessError } 17100003 - Invalid resource path or file type.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
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
     * Stores the current page as a web archive.
     *
     * @param { string } baseName - Where the generated offline webpage is stored, This value cannot be null.
     * @param { boolean } autoName - Decide whether to automatically generate the file name. If false, it is
     *                               stored by the file name of baseName. If true, the file name is
     *                               automatically generated based on the current URL and stored in the file
     *                               directory of baseName.
     * @returns { Promise<string> } a promise resolved after the web archive has been stored. The parameter
     *                              will either be the filename under which the file was stored, or empty
     *                              if storing the file failed.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100003 - Invalid resource path or file type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Stores the current page as a web archive.
     *
     * @param { string } baseName - Where the generated offline webpage is stored, This value cannot be null.
     * @param { boolean } autoName - Decide whether to automatically generate the file name. If false, it is
     *                               stored by the file name of baseName. If true, the file name is
     *                               automatically generated based on the current URL and stored in the file
     *                               directory of baseName.
     * @returns { Promise<string> } a promise resolved after the web archive has been stored. The parameter
     *                              will either be the filename under which the file was stored, or empty
     *                              if storing the file failed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100003 - Invalid resource path or file type.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    storeWebArchive(baseName: string, autoName: boolean): Promise<string>;

    /**
     * Stores the current page as a web archive.
     *
     * @param { string } baseName - Where the generated offline webpage is stored, This value cannot be null.
     * @param { boolean } autoName - Decide whether to automatically generate the file name. If false, it is
     *                               stored by the file name of baseName. If true, the file name is
     *                               automatically generated based on the current URL and stored in the file
     *                               directory of baseName.
     * @param { AsyncCallback<string> } callback - called after the web archive has been stored. The parameter
     *                                             will either be the filename under which the file was stored,
     *                                             or empty if storing the file failed.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100003 - Invalid resource path or file type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Stores the current page as a web archive.
     *
     * @param { string } baseName - Where the generated offline webpage is stored, This value cannot be null.
     * @param { boolean } autoName - Decide whether to automatically generate the file name. If false, it is
     *                               stored by the file name of baseName. If true, the file name is
     *                               automatically generated based on the current URL and stored in the file
     *                               directory of baseName.
     * @param { AsyncCallback<string> } callback - called after the web archive has been stored. The parameter
     *                                             will either be the filename under which the file was stored,
     *                                             or empty if storing the file failed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100003 - Invalid resource path or file type.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    storeWebArchive(baseName: string, autoName: boolean, callback : AsyncCallback<string>): void;

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
     * Gets the default user agent.
     * @returns { string } Return user agent information.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Gets the default user agent.
     * @returns { string } Return user agent information.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Gets the default user agent.
     * @returns { string } Return user agent information.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    getUserAgent(): string;

    /**
     * Gets the title of current Web page.
     * @returns { string } Return to File Selector Title.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Gets the title of current Web page.
     * @returns { string } Return to File Selector Title.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
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
     * Goes forward or back backOrForward in the history of the web page.
     *
     * @param { number } step - Steps to go forward or backward.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Goes forward or back backOrForward in the history of the web page.
     *
     * @param { number } step - Steps to go forward or backward.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
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
     * Create web message ports
     * @returns { Array<WebMessagePort> } An array represent 2 WebMessagePort, then can use
     *                                    those ports to communication with html pages.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Create web message ports
     * @param { boolean } isExtentionType - Set whether the web message port supports extention type.
     * @returns { Array<WebMessagePort> } An array represent 2 WebMessagePort, then can use
     *                                    those ports to communication with html pages.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Create web message ports
     * @param { boolean } isExtentionType - Set whether the web message port supports extention type.
     * @returns { Array<WebMessagePort> } An array represent 2 WebMessagePort, then can use
     *                                    those ports to communication with html pages.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    createWebMessagePorts(isExtentionType?: boolean): Array<WebMessagePort>;

    /**
     * Post web message port to html
     *
     * @param { string } name - Data name information to send.
     * @param { Array<WebMessagePort> } ports - Port number array information to send.
     * @param { string } uri - URI to receive this information.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
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
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    postMessage(name: string, ports: Array<WebMessagePort>, uri: string): void;

    /**
     * Stops the current load.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Stops the current load.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    stop(): void;

    /**
     * Registers the JavaScript object and method list.
     *
     * @param { object } object - Application side JavaScript objects participating in registration.
     * @param { string } name - The name of the registered object, which is consistent with the
     *                          object name called in the window.
     * @param { Array<string> } methodList - Thr method of the application side JavaScript object participating
     *                                       in the registration.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Registers the JavaScript object and method list.
     *
     * @param { object } object - Application side JavaScript objects participating in registration.
     * @param { string } name - The name of the registered object, which is consistent with the
     *                          object name called in the window.
     * @param { Array<string> } methodList - Thr method of the application side JavaScript object participating
     *                                       in the registration.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Registers the supplied ArkTs object into this Web component.
     * The object is registered into all frames of the web page, including all iframes, using the specified name.
     * This allows the methods of the ArkTs object to be accessed from JavaScript.
     * <p><strong>API Note</strong>:<br>
     * Registed objects will not appear in JavaScript until the page is next (re)load.
     * To avoid memory leaks, registerJavaScriptProxy must be used together with deleteJavaScriptProxy.
     * To avoid security risks, it is recommended that registerJavaScriptProxy be used with trusted web components.
     * If the same method is registered repeatedly in both synchronous and asynchronous list, it will default to an asynchronous method.
     * The synchronous function list and asynchronous function list cannot be empty at the same time.<br>
     * otherwise, this registration will fail.
     *  <p>
     *
     * @param { object } object - Application side JavaScript objects participating in registration.
     * @param { string } name - The name of the registered object, which is consistent with the
     *                          object name called in the window.
     * @param { Array<string> } methodList - The method of the application side JavaScript object participating
     *                                       in the registration.
     * @param { Array<string> } [asyncMethodList] - The async method of the application side JavaScript object
     *                                            participating in the registration.
     * @param { string } [permission] - permission configuration defining web page URLs that can access JavaScriptProxy methods.
     *                                The configuration can be defined at two levels, object level and method level.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Registers the supplied ArkTs object into this Web component.
     * The object is registered into all frames of the web page, including all iframes, using the specified name.
     * This allows the methods of the ArkTS object to be accessed from JavaScript.
     * <p><strong>API Note</strong>:<br>
     * Registed objects will not appear in JavaScript until the page is next (re)load.
     * To avoid memory leaks, registerJavaScriptProxy must be used together with deleteJavaScriptProxy.
     * To avoid security risks, it is recommended that registerJavaScriptProxy be used with trusted web components.
     * If the same method is registered repeatedly in both synchronous and asynchronous list, it will default to an asynchronous method.
     * The synchronous function list and asynchronous function list cannot be empty at the same time.<br>
     * otherwise, this registration will fail.
     *  <p>
     *
     * @param { object } jsObject - Application side JavaScript objects participating in registration.
     * @param { string } name - The name of the registered object, which is consistent with the
     *                          object name called in the window.
     * @param { Array<string> } methodList - The method of the application side JavaScript object participating
     *                                       in the registration.
     * @param { Array<string> } [asyncMethodList] - The async method of the application side JavaScript object
     *                                            participating in the registration.
     * @param { string } [permission] - permission configuration defining web page URLs that can access JavaScriptProxy methods.
     *                                The configuration can be defined at two levels, object level and method level.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    registerJavaScriptProxy(jsObject: object, name: string, methodList: Array<string>,
        asyncMethodList?: Array<string>, permission?: string): void;

    /**
     * Deletes a registered JavaScript object with given name.
     *
     * @param { string } name - The name of a registered JavaScript object to be deleted.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100008 - Failed to delete JavaScriptProxy because it does not exist.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
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
     * @atomicservice
     * @since 11
     */
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
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
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
     * @since 9
     */
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
     * @atomicservice
     * @since 11 dynamic
     */
    searchAllAsync(searchString: string): void;

    /**
     * Clears the highlighting surrounding text matches created by searchAllAsync.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Clears the highlighting surrounding text matches created by searchAllAsync.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    clearMatches(): void;

    /**
     * Highlights and scrolls to the next match search.
     *
     * @param { boolean } forward - Step of search is back or forward.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Highlights and scrolls to the next match search.
     *
     * @param { boolean } forward - Step of search is back or forward.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    searchNext(forward: boolean): void;

    /**
     * Clears the ssl cache in the Web.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Clears the ssl cache in the Web.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    clearSslCache(): void;

    /**
     * Clears the client authentication certificate cache in the Web.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Clears the client authentication certificate cache in the Web.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    clearClientAuthenticationCache(): void;

    /**
     * Loads a piece of code and execute JS code in the context of the currently displayed page.
     *
     * @param { string } script - JavaScript Script.
     * @returns { Promise<string> } A promise is solved after the JavaScript script is executed.
     *                              This parameter will be the result of JavaScript script execution.
     *                              If the JavaScript script fails to execute or has no return value,
     *                              null will be returned.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100003 - Calling a JS method that returns an empty ArrayBuffer via runJavaScript.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Asynchronously execute JavaScript in the context of the currently displayed page.
     * The result of the script execution will be returned through a via Promise.
     * This method must be used on the UI thread, and the callback will also be invoked on the UI thread.
     * <p><strong>API Note</strong>:<br>
     * The state of JavaScript is no longer persisted across navigations like loadUrl.
     * For example, global variables and functions defined before calling loadUrl will not exist in the loaded page.
     * It is recommended that applications use registerJavaScriptProxy to ensure that the JavaScript state can be persisted across page navigations.
     * <p>
     *
     * @param { string } script - JavaScript Script.
     * @returns { Promise<string> } A promise is solved after the JavaScript script is executed.
     *                              This parameter will be the result of JavaScript script execution.
     *                              If the JavaScript script fails to execute or has no return value,
     *                              null will be returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100003 - Calling a JS method that returns an empty ArrayBuffer via runJavaScript.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    runJavaScript(script: string): Promise<string>;

    /**
     * Loads a piece of code and execute JS code in the context of the currently displayed page.
     *
     * @param { string } script - JavaScript Script.
     * @param { AsyncCallback<string> } callback - Callbacks execute JavaScript script results.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100003 - Calling a JS method that returns an empty ArrayBuffer via runJavaScript.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
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
     * @param { string } script - JavaScript Script.
     * @param { AsyncCallback<string> } callback - Callbacks execute JavaScript script results.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100003 - Calling a JS method that returns an empty ArrayBuffer via runJavaScript.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    runJavaScript(script: string, callback : AsyncCallback<string>): void;

    /**
     * Execute JavaScript code in the context of the currently displayed page, and return the result.
     *
     * @param { string } script - JavaScript Script.
     * @returns { Promise<JsMessageExt> } A promise is solved after the JavaScript script is executed.
     *                              This parameter will be the result of JavaScript script execution.
     *                              If the JavaScript script fails to execute or has no return value,
     *                              a none type value will be returned.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Execute JavaScript code in the context of the currently displayed page, and return the result.
     *
     * @param { string } script - JavaScript Script.
     * @returns { Promise<JsMessageExt> } A promise is solved after the JavaScript script is executed.
     *                              This parameter will be the result of JavaScript script execution.
     *                              If the JavaScript script fails to execute or has no return value,
     *                              a none type value will be returned.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Execute JavaScript code in the context of the currently displayed page, and return the result.
     *
     * @param { string | ArrayBuffer } script - JavaScript Script.
     * @returns { Promise<JsMessageExt> } A promise is solved after the JavaScript script is executed.
     *                              This parameter will be the result of JavaScript script execution.
     *                              If the JavaScript script fails to execute or has no return value,
     *                              a none type value will be returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Execute JavaScript code in the context of the currently displayed page, and return the result.
     *
     * @param { string | ArrayBuffer } script - JavaScript Script.
     * @returns { Promise<JsMessageExt> } A promise is solved after the JavaScript script is executed.
     *                              This parameter will be the result of JavaScript script execution.
     *                              If the JavaScript script fails to execute or has no return value,
     *                              a none type value will be returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    runJavaScriptExt(script: string | ArrayBuffer): Promise<JsMessageExt>;

    /**
     * Execute JavaScript code in the context of the currently displayed page, and return the result.
     *
     * @param { string } script - JavaScript Script.
     * @param { AsyncCallback<JsMessageExt> } callback - Callbacks execute JavaScript script results.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Execute JavaScript code in the context of the currently displayed page, and return the result.
     *
     * @param { string } script - JavaScript Script.
     * @param { AsyncCallback<JsMessageExt> } callback - Callbacks execute JavaScript script results.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
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
     * @atomicservice
     * @since 12
     */
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
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
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
     * Gets the url of current Web page.
     * @returns { string } Return the url of the current page.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Gets the url of current Web page.
     * @returns { string } Return the url of the current page.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
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
     * Gets the original url of current Web page.
     * @returns { string } Return the original url of the current page.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Gets the original url of current Web page.
     * @returns { string } Return the original url of the current page.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Gets the original url of current Web page.
     * @returns { string } Return the original url of the current page.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getOriginalUrl(): string;

    /**
     * Gets the favicon of current Web page.
     * @returns { image.PixelMap } Return the favicon bitmap of the current page.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Gets the favicon of current Web page.
     * @returns { image.PixelMap } Return the favicon bitmap of the current page.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    getFavicon(): image.PixelMap;

    /**
     * Put network state for web. Which is used to set window.navigator.onLine property in
     * JavaScript.
     * @param { boolean } enable - Whether enable window.navigator.onLine.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Put network state for web. Which is used to set window.navigator.onLine property in
     * JavaScript.
     * @param { boolean } enable - Whether enable window.navigator.onLine.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    setNetworkAvailable(enable: boolean): void;

    /**
     * Query if current document has image.
     *
     * @returns { Promise<boolean> } A promise resolved after query image has finished.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Asynchronous search for image existence on the current page through Promise method.
     *
     * @returns { Promise<boolean> } A promise resolved after query image has finished.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    hasImage(): Promise<boolean>;

    /**
     * Query if current document has image.
     *
     * @param { AsyncCallback<boolean> } callback - Called after query image has finished.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Asynchronous search for the presence of an image on the current page through callback method.
     *
     * @param { AsyncCallback<boolean> } callback - Called after query image has finished.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    hasImage(callback: AsyncCallback<boolean>): void;


    /**
     * Get back forward stack list from current webview.
     * @returns { BackForwardList } Back forward list for current webview.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get back forward stack list from current webview.
     * @returns { BackForwardList } Back forward list for current webview.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    getBackForwardEntries(): BackForwardList;

    /**
     * Remove resource cache in application. So this method will remove all cache for all web components in the
     * same application.
     *
     * @param { boolean } clearRom - Remove cache in both rom and ram if true. Otherwise only clear cache
     *                               in ram.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Clears the cache in the application. This API will clear the cache for all webviews in the same application.
     *
     * <p><strong>API Note</strong>:<br>
     * You can view the Webview cache in the data/storage/el2/base/cache/web/Cache directory.
     * </p>
     *
     * @param { boolean } clearRom - Whether to clear the cache in the ROM and RAM at the same time.
     *                               {@code true} means to clear the cache in the ROM and RAM at the same time;
     *                               {@code false} means to only clear the cache in the RAM.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    removeCache(clearRom: boolean): void;

    /**
     * Remove resource cache in application. So this method will remove all cache for all web components in the
     * same application.
     *
     * @param { boolean } clearRom - Remove cache in both rom and ram if true. Otherwise only clear cache
     *                               in ram.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
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
     * Restoring the web access stack, that is, the history of access.
     * @param { Uint8Array } state - Web access stack after serialization.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Restoring the web access stack, that is, the history of access.
     * @param { Uint8Array } state - Web access stack after serialization.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    restoreWebState(state: Uint8Array) : void;

    /**
     * Set whether the Web custom scheme supports cross domain and fetch requests.
     * @param { Array<WebCustomScheme> } schemes - Configuration of web custom scheme.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Set whether the Web custom scheme supports cross domain and fetch requests.
     * @param { Array<WebCustomScheme> } schemes - Configuration of web custom scheme.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Register Web custom schemes.
     * @param { Array<WebCustomScheme> } schemes - Configuration of web custom scheme.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100020 - Failed to register custom schemes.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
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
     * @atomicservice
     * @since 21 dynamic
     */
    static customizeSchemes(schemes: Array<WebCustomScheme>, lazyInitWebEngine: boolean): void;

    /**
     * Get certificate for the current website.
     * @returns { Promise<Array<cert.X509Cert>> } the promise of the current website's certificate.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get certificate for the current website.
     * @returns { Promise<Array<cert.X509Cert>> } the promise of the current website's certificate.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
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
     * @since 10
     */
    /**
     * Get certificate for the current website.
     * @param {AsyncCallback<Array<cert.X509Cert>>} callback - the callback of getCertificate.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    getCertificate(callback: AsyncCallback<Array<cert.X509Cert>>): void;

    /**
     * Set audio muted.
     * @param { boolean } mute - Set the audio muted or not.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Set webpage mute.
     * @param { boolean } mute - Set the audio muted or not.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    setAudioMuted(mute: boolean): void;

    /**
     * Prefetch the resources required by the page, but will not execute js or render the page.
     * @param { string } url - Which url to preresolve/preconnect.
     * @param { Array<WebHeader> } [additionalHeaders] - Additional HTTP request header of the URL.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2048.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Prefetch the resources required by the page, but will not execute js or render the page.
     * @param { string } url - Which url to preresolve/preconnect.
     * @param { Array<WebHeader> } [additionalHeaders] - Additional HTTP request header of the URL.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2048.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Prefetch the resources required by the page, but will not execute js or render the page.
     * @param { string } url - Which url to preresolve/preconnect.
     * @param { Array<WebHeader> } [additionalHeaders] - Additional HTTP request header of the URL.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2*1024*1024.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 22 dynamic
     */
    prefetchPage(url: string, additionalHeaders?: Array<WebHeader>): void;

    /**
     * Prefetch the resources required by the page, but will not execute js or render the page.
     * <p><strong>API Note</strong>:<br>
     * ?prefetchPage? does not cache resources with Cache-Control: no-store by default, and only allows one prefetch within
     * 500ms.
     * Prefetch behavior can be customized via ?prefetchOptions?, including ignoring Cache-Control: no-store and adjusting
     * the throttling interval.
     *
     * @param { string } url - Which url to preresolve/preconnect.
     * @param { Array<WebHeader> } [additionalHeaders] - Additional HTTP request header of the URL.
     * @param { PrefetchOptions } [prefetchOptions] - Prefetch behavior can be customized via ?prefetchOptions?,
     *     including ignoring Cache-Control: no-store and adjusting the throttling interval.
     * @throws { BusinessError } 17100001 - Init error. The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2048.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    /**
     * Prefetch the resources required by the page, but will not execute js or render the page.
     * <p><strong>API Note</strong>:<br>
     * ?prefetchPage? does not cache resources with Cache-Control: no-store by default, and only allows one prefetch within
     * 500ms.
     * Prefetch behavior can be customized via ?prefetchOptions?, including ignoring Cache-Control: no-store and adjusting
     * the throttling interval.
     *
     * @param { string } url - Which url to preresolve/preconnect.
     * @param { Array<WebHeader> } [additionalHeaders] - Additional HTTP request header of the URL.
     * @param { PrefetchOptions } [prefetchOptions] - Prefetch behavior can be customized via ?prefetchOptions?,
     *     including ignoring Cache-Control: no-store and adjusting the throttling interval.
     * @throws { BusinessError } 17100001 - Init error. The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2*1024*1024.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 dynamic
     */
    prefetchPage(url: string, additionalHeaders?: Array<WebHeader>, prefetchOptions?: PrefetchOptions): void;

    /**
     * Preresolve or Preconnect the url. This API can be called before loading the url to make loading faster.
     * @param { string } url - Which url to preresolve/preconnect.
     * @param { boolean } preconnectable - Indicates whether to preconnect.
     * @param { number } numSockets - If preconnectable is true, this parameter indicates the number of sockets to be
     *     preconnected.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2048.
     * @throws { BusinessError } 17100013 - The number of preconnect sockets is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Preresolve or Preconnect the url. This API can be called before loading the url to make loading faster.
     * @param { string } url - Which url to preresolve/preconnect.
     * @param { boolean } preconnectable - Indicates whether to preconnect.
     * @param { number } numSockets - If preconnectable is true, this parameter indicates the number of sockets to be
     *     preconnected.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2048.
     * @throws { BusinessError } 17100013 - The number of preconnect sockets is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    /**
     * Preresolve or Preconnect the url. This API can be called before loading the url to make loading faster.
     * @param { string } url - Which url to preresolve/preconnect.
     * @param { boolean } preconnectable - Indicates whether to preconnect.
     * @param { number } numSockets - If preconnectable is true, this parameter indicates the number of sockets
     *     to be preconnected.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2*1024*1024.
     * @throws { BusinessError } 17100013 - The number of preconnect sockets is invalid.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 22 dynamic
     */
    static prepareForPageLoad(url: string, preconnectable: boolean, numSockets: number): void;
    /**
     * Configure whether to enable automatic pre-connection to high-frequency URLs accessed during the application's
     * previous lifecycle after web initialization.
     * @param { boolean } enabled - Enable if true, disable if false.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    static setAutoPreconnect(enabled: boolean): void;
    /**
     * ?Retrieve whether the automatic pre-connection feature is enabled?.
     *
     * @returns { boolean } Return true if enabled, false if disabled.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    static isAutoPreconnectEnabled(): boolean;
    /**
     * Set custom user agent.
     * @param { string } userAgent - User custom agent information.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Set custom user agent.
     * @param { string } userAgent - User custom agent information.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
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
     * @since 20 dynamic
     */
    static setUserAgentForHosts(userAgent: string, hosts : Array<string>) : void;

    /**
     * Enable the UserAgent Client Hints.
     *
     * @param { boolean } enabled - UserAgent Client Hints will enabled when set true.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 24 dynamic
     */
    static setUserAgentClientHintsEnabled(enabled: boolean): void;


    /**
     * Get if the UserAgent Client Hints enabled.
     *
     * @returns { boolean } If UserAgent Client Hints was enabled.
     * @static
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
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static setAppCustomUserAgent(userAgent: string) : void;

    /**
     * Get custom user agent.
     * @returns { string } Get custom User agent information.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Get custom user agent.
     * @returns { string } Get custom User agent information.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    getCustomUserAgent(): string;

    /**
     * Set web engine socket connection timeout.
     * @param { number } timeout - Socket connection timeout.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     Incorrect parameter types. 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static setConnectionTimeout(timeout: number): void;

    /**
     * Set delegate for download.
     * Used to notify the progress of the download triggered from web.
     * @param { WebDownloadDelegate } delegate - Delegate used for download triggered from web.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Set delegate for download.
     * Used to notify the progress of the download triggered from web.
     * @param { WebDownloadDelegate } delegate - Delegate used for download triggered from web.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    setDownloadDelegate(delegate: WebDownloadDelegate): void;

    /**
     * Start a download.
     * @param { string } url - The download url.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2048.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Start a download.
     * @param { string } url - The download url.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2048.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    /**
     * Start a download.
     * @param { string } url - The download url.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2*1024*1024.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     */
    startDownload(url: string): void;

    /**
     * Loads the URL use "POST" method with post data.
     *
     * @param { string } url - Request the URL use "POST" method.
     * @param { ArrayBuffer } postData - This data will passed to "POST" request.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Loads the URL use "POST" method with post data.
     *
     * @param { string } url - Request the URL use "POST" method.
     * @param { ArrayBuffer } postData - This data will passed to "POST" request.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
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
     * Get the security level of the current page.
     *
     * @returns { SecurityLevel } the security level of current page.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    getSecurityLevel(): SecurityLevel;

    /**
     * Gets the loading progress for the current page.
     *
     * @returns { number } The loading progress for the current page.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    getProgress() : number;

    /**
     * Whether the incognito mode is set.
     *
     * @returns { boolean } {@code true} has been set the incognito mode; {@code false} otherwise.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
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
     * Get the url of the last frame that calls the JavaScriptProxy.
     * This should be called on the UI thread.
     *
     * @returns { string } The url of the last frame that calls the JavaScriptProxy.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    getLastJavascriptProxyCallingFrameUrl(): string;

    /**
     * Start current camera.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    startCamera(): void;

    /**
     * Stop current camera.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    stopCamera(): void;

    /**
     * Close current camera.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    closeCamera(): void;

    /**
     * Resume current microphone.
     *
     * @throws { BusinessError } 17100001 - Init error. The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    resumeMicrophone(): void;

    /**
     * Pause current microphone.
     *
     * @throws { BusinessError } 17100001 - Init error. The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    pauseMicrophone(): void;

    /**
     * Stop current microphone.
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
     * Pause all WebView timers.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static pauseAllTimers(): void;

    /**
     * Resume all timers suspended from the pauseAllTimers() interface.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static resumeAllTimers(): void;

    /**
     * Stop all audio and video playback on the web page.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    stopAllMedia(): void;

    /**
     * Resumes the playback of the audio and video that are paused by the pauseAllMedia interface.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    resumeAllMedia(): void;

    /**
     * Pause all audio and video playback on the web page.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    pauseAllMedia(): void;

    /**
     * Closes all full-screen videos on a web page.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    closeAllMediaPresentations(): void;

    /**
     * View the playback status of all audio and video on the web page.
     *
     * @returns { MediaPlaybackState } The playback status of all audio and video.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
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
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Set web scheme handler for specific scheme. This is only used for related web component.
     *
     * @param { string } scheme - String value for url scheme.
     * @param { WebSchemeHandler } handler - Web scheme handler.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    setWebSchemeHandler(scheme: string, handler: WebSchemeHandler): void;

    /**
     * Clear all web scheme handlers for related web component.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Clear all web scheme handlers for related web component.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    clearWebSchemeHandler(): void;

    /**
     * Set web scheme handler for specific scheme. This is used for service worker.
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
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
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
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
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
     * @atomicservice
     * @since 18 dynamic
     */
    enableIntelligentTrackingPrevention(enable: boolean): void;

    /**
     * Get whether Intelligent Tracking Prevention is enabled.
     *
     * @returns { boolean } True if enable the Intelligent Tracking Prevention; else false.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Get whether Intelligent Tracking Prevention is enabled.
     *
     * @returns { boolean } True if enable the Intelligent Tracking Prevention; else false.
     * @throws { BusinessError } 17100001 - Init error.
     *                           The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 18 dynamic
     */
    isIntelligentTrackingPreventionEnabled(): boolean;

    /**
     * Add bypassing hosts for Intelligent Tracking Prevention.
     *
     * @param { Array<string> } hostList - Hosts that bypass the Intelligent Tracking Prevention.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Add bypassing hosts for Intelligent Tracking Prevention.
     *
     * @param { Array<string> } hostList - Hosts that bypass the Intelligent Tracking Prevention.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 18 dynamic
     */
    static addIntelligentTrackingPreventionBypassingList(hostList: Array<string>): void;

    /**
     * Remove bypassing hosts for Intelligent Tracking Prevention.
     *
     * @param { Array<string> } hostList - Hosts needs to remove from bypass list.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Remove bypassing hosts for Intelligent Tracking Prevention.
     *
     * @param { Array<string> } hostList - Hosts needs to remove from bypass list.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 18 dynamic
     */
    static removeIntelligentTrackingPreventionBypassingList(hostList: Array<string>): void;

    /**
     * Clear bypassing hosts for Intelligent Tracking Prevention.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Clear bypassing hosts for Intelligent Tracking Prevention.
     *
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 18 dynamic
     */
    static clearIntelligentTrackingPreventionBypassingList(): void;

    /**
     * Get the default user agent.
     *
     * @returns {string} The default user agent string.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 14 dynamic
     */
    static getDefaultUserAgent(): string;

    /**
     * Register a callback to intercept web pages playing media.
     *
     * @param { CreateNativeMediaPlayerCallback } callback - Called everytime when web pages try to play media.
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
     * 根据指定的请求信息和附加的http请求头去预获取资源请求，存入内存缓存，并指定其缓存key和有效期，以加快加载速度。目前仅支持Content-Type为application/x-www-form-urlencoded的
     * post请求。最多可以预获取6个post请求。如果要预获取第7个，请通过
     * [clearPrefetchedResource]{@link webview.WebviewController.clearPrefetchedResource}清除不需要的post请求缓存，否则会自动清除最早预获取的
     * post缓存。如果要使用预获取的资源缓存，开发者需要在正式发起的post请求的请求头中增加键值“ArkWebPostCacheKey”，其内容为对应缓存的cacheKey。
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
     * Set IP address for host name.
     *
     * @param { string } hostName - Which host name to be resolved.
     * @param { string } address - Resolved IP address.
     * @param { number } aliveTime - The validity seconds for resolve cache.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static setHostIP(hostName: string, address: string, aliveTime: number): void;

    /**
     * Clear the host name IP address.
     *
     * @param { string } hostName - Which host name to be cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static clearHostIP(hostName: string): void;

    /**
     * Warmup the registered service worker associated the url.
     * @param { string } url - The url.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2048.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Warmup the registered service worker associated the url.
     * @param { string } url - The url.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2*1024*1024.
     * @static
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 22 dynamic
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
     * Enable the ability to block Ads, disabled by default.
     *
     * @param { boolean } enable {@code true} Enable Ads block; {@code false} otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Parameter string is too long. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
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
     * @atomicservice
     * @since 18 dynamic
     */
    enableAdsBlock(enable: boolean): void;

    /**
     * Get whether Ads block is enabled.
     *
     * @returns { boolean } True if the ability of AdsBlock is enabled; else false.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Get whether Ads block is enabled.
     *
     * @returns { boolean } True if the ability of AdsBlock is enabled; else false.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 18 dynamic
     */
    isAdsBlockEnabled(): boolean;

    /**
     * Get whether Ads block is enabled for current Webpage.
     *
     * @returns { boolean } True if the ability of AdsBlock is enabled for current Webpage; else false.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Get whether Ads block is enabled for current Webpage.
     *
     * @returns { boolean } True if the ability of AdsBlock is enabled for current Webpage; else false.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 18 dynamic
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
     * Sets a path list. When a file protocol accesses resources in the path list, it can access the local files across
     * domains. In addition, when a path list is set, the file protocol can access only the resources in the path list.
     * The behavior of {@link fileAccess} will be overwritten by that of this API.
     *
     * The paths in the list must be any of the following(sub path and module name must be provided):
     *
     * 1. The path of subdirectory of the application file directory, like "/data/storage/el2/base/files/example"
     *    or "/data/storage/el2/base/haps/entry/files/example".
     *    The application file directory is obtained using Context.filesDir in the Ability Kit.
     * 2. The path of application resource directory or its subdirectory, like "/data/storage/el1/bundle/entry/resource/resfile"
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
     * Trim memory by different memory pressure level.
     *
     * @param { PressureLevel } level - The memory pressure level for the ArkWeb.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Parameter string is too long. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    static trimMemoryByPressureLevel(level: PressureLevel): void;

    /**
     * Enable the BackForwardCache and indicate features that are allowed to enter BackForwardCache.
     * Default is disabled.
     *
     * @param { BackForwardCacheSupportedFeatures } features - The features that supports BackForwardCache.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    static enableBackForwardCache(features: BackForwardCacheSupportedFeatures): void;

    /**
     * Configure the BackForwardCache.
     *
     * @param { BackForwardCacheOptions } options - The configuration of BackForwardCache.
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
     * @param { number } timeout - the wait timeout, if timeout reach, promise will return, the unit is millisecond.
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
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Defines the state for download.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  enum WebDownloadState {
    /**
     * The web download is in progress.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The web download is in progress.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    IN_PROGRESS = 0,

    /**
     * The web download has been completed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The web download has been completed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    COMPLETED = 1,

    /**
     * The web download was canceled.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The web download was canceled.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    CANCELED = 2,

    /**
     * The web download was interrupted.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The web download was interrupted.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    INTERRUPTED = 3,

    /**
     * The web download is pending.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The web download is pending.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    PENDING = 4,

    /**
     * The web download has been paused.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * The web download has been paused.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    PAUSED = 5,

    /**
     * Unknown state.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Unknown state.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    UNKNOWN = 6
  }

  /**
   * Defines the error code for download.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Defines the error code for download.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  enum WebDownloadErrorCode {
    /**
     * Unknown error.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    ERROR_UNKNOWN = 0,

    /**
     * Generic file operation failure.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_FAILED = 1,

    /**
     * The file cannot be accessed due to certain restrictions.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_ACCESS_DENIED = 2,

    /**
     * There is not enough disk space.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_NO_SPACE = 3,

    /**
     * The file name is too long.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_NAME_TOO_LONG = 5,

    /**
     * The file is too large.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_TOO_LARGE = 6,

    /**
     * Some temporary problems occurred, such as not enough memory, files in use, and too many files open at the same time.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_TRANSIENT_ERROR = 10,

    /**
     * The file is blocked from accessing because of some local policy.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_BLOCKED = 11,

    /**
     * When trying to resume the download, Found that the file is not long enough, maybe the file no longer exists.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_TOO_SHORT = 13,

    /**
     * Hash mismatch.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_HASH_MISMATCH = 14,

    /**
     * The file already exists.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_SAME_AS_SOURCE = 15,

    /**
     * Generic network error.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    NETWORK_FAILED = 20,

    /**
     * The network operation timed out.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    NETWORK_TIMEOUT = 21,

    /**
     * The network was disconnected.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    NETWORK_DISCONNECTED = 22,

    /**
     * Server down.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    NETWORK_SERVER_DOWN = 23,

    /**
     * Invalid network requests，may redirect to unsupported scheme or an invalid URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    NETWORK_INVALID_REQUEST = 24,

    /**
     * The server returned a generic error.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SERVER_FAILED = 30,

    /**
     * The server does not support range requests.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SERVER_NO_RANGE = 31,

    /**
     * The server does not have the requested data.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SERVER_BAD_CONTENT = 33,

    /**
     * The server does not allow the file to be downloaded.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SERVER_UNAUTHORIZED = 34,

    /**
     * Server certificate error.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SERVER_CERT_PROBLEM = 35,

    /**
     * Server access forbidden.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SERVER_FORBIDDEN = 36,

    /**
     * Server unreachable.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SERVER_UNREACHABLE = 37,

    /**
     * The received data does not match content-length.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SERVER_CONTENT_LENGTH_MISMATCH = 38,

    /**
     * An unexpected cross-origin redirect happened.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SERVER_CROSS_ORIGIN_REDIRECT = 39,

    /**
     * User cancel.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * User cancel.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    USER_CANCELED = 40,

    /**
     * User shut down the application.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    USER_SHUTDOWN = 41,

    /**
     * Application crash.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    CRASH = 50
  }

  /**
   * Represents a download task, You can use this object to operate the corresponding download task.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Represents a download task, You can use this object to operate the corresponding download task.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  class WebDownloadItem {
    /**
     * Get guid.
     * @returns { string } - Returns the download's guid.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get guid.
     * @returns { string } - Returns the download's guid.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getGuid(): string;

    /**
     * Get current speed, in bytes per second.
     * @returns { number } - Returns the current download speed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get current speed, in bytes per second.
     * @returns { number } - Returns the current download speed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getCurrentSpeed(): number;

    /**
     * Get percent complete.
     * @returns { number } - Returns -1 if progress is unknown. 100 if the download is already complete.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get percent complete.
     * @returns { number } - Returns -1 if progress is unknown. 100 if the download is already complete.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getPercentComplete(): number;

    /**
     * Get total bytes.
     * @returns { number } - Returns the total bytes received, -1 if the total size is unknown.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get total bytes.
     * @returns { number } - Returns the total bytes received, -1 if the total size is unknown.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getTotalBytes(): number;

    /**
     * Get state of the web download.
     * @returns { WebDownloadState } - Returns the current download state.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get state of the web download.
     * @returns { WebDownloadState } - Returns the current download state.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getState(): WebDownloadState;

    /**
     * Get last error code of the web download.
     * @returns { WebDownloadErrorCode } - Returns the last error code.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get last error code of the web download.
     * @returns { WebDownloadErrorCode } - Returns the last error code.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getLastErrorCode(): WebDownloadErrorCode;

    /**
     * Get http method of the web download request.
     * @returns { string } - Returns the http request method.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get http method of the web download request.
     * @returns { string } - Returns the http request method.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getMethod(): string;

    /**
     * Get mime type of the web download.
     * @returns { string } - Returns the mimetype.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get mime type of the web download.
     * @returns { string } - Returns the mimetype.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getMimeType(): string;

    /**
     * Get url of the web download request.
     * @returns { string } - Returns the url.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get url of the web download request.
     * @returns { string } - Returns the url.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getUrl(): string;

    /**
     * Get suggested file name of the web download request.
     * @returns { string } - Returns the suggested file name.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get suggested file name of the web download request.
     * @returns { string } - Returns the suggested file name.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getSuggestedFileName(): string;

    /**
     * Start the web download.
     * Used in onBeforeDownload, If you want to start the current download, call this function.
     * @param { string } downloadPath - The content will be downloaded to this file.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * <br>2. Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Start the web download.
     * Used in onBeforeDownload, If you want to start the current download, call this function.
     * @param { string } downloadPath - The content will be downloaded to this file.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * <br>2. Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    start(downloadPath: string): void;

    /**
     * Cancel the web download.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Cancel the web download.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    cancel(): void;

    /**
     * Pause the web download.
     * @throws { BusinessError } 17100019 - The download task is not started yet.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Pause the web download.
     * @throws { BusinessError } 17100019 - The download task is not started yet.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    pause(): void;

    /**
     * Resume the web download.
     * Use WebDownloadManager.resumeDownload to resume deserialized downloads.
     * WebDownloadItem.resume is only used to resume the currently paused download.
     * @throws { BusinessError } 17100016 - The download task is not paused.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Resume the web download.
     * Use WebDownloadManager.resumeDownload to resume deserialized downloads.
     * WebDownloadItem.resume is only used to resume the currently paused download.
     * @throws { BusinessError } 17100016 - The download task is not paused.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    resume(): void;

    /**
     * Get received bytes.
     * @returns { number } - Returns the received bytes.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get received bytes.
     * @returns { number } - Returns the received bytes.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getReceivedBytes(): number;

    /**
     * Get full path of the web download.
     * @returns { string } - Returns the full path of the download.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get full path of the web download.
     * @returns { string } - Returns the full path of the download.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    getFullPath(): string;

    /**
     * 获取网页下载的原始url。
     *
     * @returns { string } - Returns the original url of the download.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getOriginalUrl(): string;

    /**
     * 获取网页下载的referrer url。
     *
     * @returns { string } - Returns the referrer url of the download.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getReferrerUrl(): string;

    /**
     * Serialize web download to typed array.
     * @returns { Uint8Array } - Returns the serialized data.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    serialize(): Uint8Array;

    /**
     * Deserialize web download from typed array.
     * @param { Uint8Array } serializedData - The serialized data.
     * @returns { WebDownloadItem } - Deserialize the serialized data into a WebDownloadItem.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * <br>2. Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static deserialize(serializedData: Uint8Array): WebDownloadItem;
  }

  /**
   * The download state is notified through this delegate.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * The download state is notified through this delegate.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  class WebDownloadDelegate {
    /**
     * Callback will be triggered before web download start.
     * @param { Callback<WebDownloadItem> } callback - The callback of download will be start.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Callback will be triggered before web download start.
     * @param { Callback<WebDownloadItem> } callback - The callback of download will be start.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    onBeforeDownload(callback: Callback<WebDownloadItem>): void;

    /**
     * Callback will be triggered when web download is processing.
     * @param { Callback<WebDownloadItem> } callback - The callback of download did update.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Callback will be triggered when web download is processing.
     * @param { Callback<WebDownloadItem> } callback - The callback of download did update.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    onDownloadUpdated(callback: Callback<WebDownloadItem>): void;

    /**
     * Callback will be triggered when web download is completed.
     * @param { Callback<WebDownloadItem> } callback - The callback of download did finish.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Callback will be triggered when web download is completed.
     * @param { Callback<WebDownloadItem> } callback - The callback of download did finish.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    onDownloadFinish(callback: Callback<WebDownloadItem>): void;

    /**
     * Callback will be triggered when web download is interrupted or canceled.
     * @param { Callback<WebDownloadItem> } callback - The callback of download did fail.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Callback will be triggered when web download is interrupted or canceled.
     * @param { Callback<WebDownloadItem> } callback - The callback of download did fail.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    onDownloadFailed(callback: Callback<WebDownloadItem>): void;
  }

  /**
   * You can trigger download manually through this interface, or resume failed or canceled downloads.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11
   */
  /**
   * You can trigger download manually through this interface, or resume failed or canceled downloads.
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  class WebDownloadManager {
    /**
     * Set a delegate used to receive the progress of the download triggered from WebDownloadManager.
     * @param { WebDownloadDelegate } delegate - Delegate used for download triggered from WebDownloadManager.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Set a delegate used to receive the progress of the download triggered from WebDownloadManager.
     * @param { WebDownloadDelegate } delegate - Delegate used for download triggered from WebDownloadManager.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    static setDownloadDelegate(delegate: WebDownloadDelegate): void;

    /**
     * Resume the canceled or failed download.
     * @param { WebDownloadItem } webDownloadItem - Download that need to be resume.
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
     * Initialize data stream.
     *
     * @returns { Promise<void> } The promise of data stream is initialized.
     * @throws { BusinessError } 17100022 - Failed to initialize the HTTP body stream.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    initialize(): Promise<void>;
    /**
     * Read the data stream to the buffer.
     *
     * @param { number } size - Read size.
     * @returns { Promise<ArrayBuffer> } Read array buffer of result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    read(size: number): Promise<ArrayBuffer>;
    /**
     * Get the total size of the data stream. When data is chunked, always return zero.
     *
     * @returns { number } Return size of data stream size.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    getSize(): number;
    /**
     * Get the current position of the data stream.
     *
     * @returns { number } Return position in post data stream.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    getPosition(): number;
    /**
     * Whether data stream is chunked.
     *
     * @returns { boolean } Whether data stream is chunked.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isChunked(): boolean;
    /**
     * Whether all data stream has been consumed. For chunked uploads,
     * returns false until the first read attempt.
     *
     * @returns { boolean } Whether data stream has been consumed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isEof(): boolean;
    /**
     * Returns true if the upload data in the stream is entirely in memory, and all read requests will succeed
     * synchronously. Expected to return false for chunked requests.
     *
     * @returns { boolean } Whether the data stream is in memory.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isInMemory(): boolean;
  }

  /**
   * Defines the resource type of request.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  enum WebResourceType {
    /**
     * Top level page.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    MAIN_FRAME = 0,

    /**
     * Frame or Iframe.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    SUB_FRAME = 1,

    /**
     * CSS stylesheet.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    STYLE_SHEET = 2,

    /**
     * External script.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    SCRIPT = 3,

    /**
     * Image (jpg/gif/png/etc).
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    IMAGE = 4,

    /**
     * Font.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    FONT_RESOURCE = 5,

    /**
     * Some other subresource. This is the default type if the actual type is unknown.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    SUB_RESOURCE = 6,

    /**
     * Object (or embed) tag for a plugin, or a resource that a plugin requested.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    OBJECT = 7,

    /**
     * Media resource.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    MEDIA = 8,

    /**
     * Main resource of a dedicated worker.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    WORKER = 9,

    /**
     * Main resource of a shared worker.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    SHARED_WORKER = 10,

    /**
     * Explicitly requested prefetch.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    PREFETCH = 11,

    /**
     * Favicon.
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
     * Ping request for <a ping>/sendBeacon.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    PING = 14,

    /**
     * The main resource of a service worker.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    SERVICE_WORKER = 15,

    /**
     * Report of Content Security Policy violations.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    CSP_REPORT = 16,

    /**
     * Resource that a plugin requested.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    PLUGIN_RESOURCE = 17,

    /**
     * A main-frame service worker navigation preload request.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    NAVIGATION_PRELOAD_MAIN_FRAME = 19,

    /**
     * A sub-frame service worker navigation preload request.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    NAVIGATION_PRELOAD_SUB_FRAME = 20
  }

  /**
   * Defines the Web resource request used for scheme handler.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * Defines the Web resource request used for scheme handler.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  class WebSchemeHandlerRequest {
    /**
     * Gets request headers.
     *
     * @returns { Array<WebHeader> } Return the request headers.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Gets request headers.
     *
     * @returns { Array<WebHeader> } Return the request headers.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    getHeader(): Array<WebHeader>;
    /**
     * Gets the request URL.
     *
     * @returns { string } Return the request URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Gets the request URL.
     *
     * @returns { string } Return the request URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    getRequestUrl(): string;
    /**
     * Get request method.
     *
     * @returns { string } Return the request method.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Get request method.
     *
     * @returns { string } Return the request method.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    getRequestMethod(): string;
    /**
     * Get referrer of request.
     *
     * @returns { string } Return referrer of request.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    getReferrer(): string;
    /**
     * Check whether the request is for getting the main frame.
     *
     * @returns { boolean } Whether request is main frame.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Check whether the request is for getting the main frame.
     *
     * @returns { boolean } Whether request is main frame.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    isMainFrame(): boolean;
    /**
     * Check whether the request is associated with gesture.
     *
     * @returns { boolean } Whether request has user gesture.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Check whether the request is associated with gesture.
     *
     * @returns { boolean } Whether request has user gesture.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    hasGesture(): boolean;
    /**
     * Get http body stream.
     *
     * @returns { WebHttpBodyStream | null } Return http body stream. If request has no http body stream, return null.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    getHttpBodyStream(): WebHttpBodyStream | null;
    /**
     * Get request's resource type.
     *
     * @returns { WebResourceType } Return the request's resource type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    getRequestResourceType(): WebResourceType;
    /**
     * Gets the URL of frame which trigger this request.
     *
     * @returns { string } Return the URL of frame which trigger this request.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    getFrameUrl(): string;
  }

  /**
   * Defines the Web resource response used for scheme handler.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * Defines the Web resource response used for scheme handler.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  class WebSchemeHandlerResponse {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
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
     * Set the resolved URL after redirects or changed as a result of HSTS.
     *
     * @param { string } url - Set response url for redirects.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Set the resolved URL after redirects or changed as a result of HSTS.
     *
     * @param { string } url - Set response url for redirects.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    setUrl(url: string): void;
    /**
     * Get the resolved URL after redirects or changed as a result of HSTS.
     *
     * @returns { string } Return response url for redirects.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Get the resolved URL after redirects or changed as a result of HSTS.
     *
     * @returns { string } Return response url for redirects.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    getUrl(): string;
    /**
     * Set net error code.
     * @param { WebNetErrorList } code - Set net error code.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Set net error code.
     * @param { WebNetErrorList } code - Set net error code.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    setNetErrorCode(code: WebNetErrorList): void;
    /**
     * Get net error code.
     *
     * @returns { WebNetErrorList } Return response error code.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Get net error code.
     *
     * @returns { WebNetErrorList } Return response error code.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    getNetErrorCode(): WebNetErrorList;
    /**
     * Set http status code.
     *
     * @param { number } code - Http status code.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Set http status code.
     *
     * @param { number } code - Http status code.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    setStatus(code: number): void;
    /**
     * Get http status code.
     *
     * @returns { number } Return http status code.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Get http status code.
     *
     * @returns { number } Return http status code.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    getStatus(): number;
    /**
     * Set status text.
     *
     * @param { string } text - Status text.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Set status text.
     *
     * @param { string } text - Status text.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    setStatusText(text: string): void;
    /**
     * Get status text.
     *
     * @returns { string } Return http status text.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Get status text.
     *
     * @returns { string } Return http status text.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    getStatusText(): string;
    /**
     * Set mime type.
     *
     * @param { string } type - Mime type.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Set mime type.
     *
     * @param { string } type - Mime type.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    setMimeType(type: string): void;
    /**
     * Get mime type.
     *
     * @returns { string } Return mime type of response.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Get mime type.
     *
     * @returns { string } Return mime type of response.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    getMimeType(): string;
    /**
     * Set the response encoding.
     *
     * @param { string } encoding - Encoding.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Set the response encoding.
     *
     * @param { string } encoding - Encoding.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    setEncoding(encoding: string): void;
    /**
     * Get the response encoding.
     *
     * @returns { string } Return encoding of response.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Get the response encoding.
     *
     * @returns { string } Return encoding of response.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    getEncoding(): string;
    /**
     * Set response hander value by name.
     *
     * @param { string } name - Header name.
     * @param { string } value - Header value.
     * @param { boolean } overwrite - Whether to overwrite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Set response hander value by name.
     *
     * @param { string } name - Header name.
     * @param { string } value - Header value.
     * @param { boolean } overwrite - Whether to overwrite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    setHeaderByName(name: string, value: string, overwrite: boolean): void;
    /**
     * Get the header value by name from the response.
     *
     * @param { string } name - Header name.
     * @returns { string } Return header value by name.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Get the header value by name from the response.
     *
     * @param { string } name - Header name.
     * @returns { string } Return header value by name.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    getHeaderByName(name: string): string;
  }

  /**
   * Used to intercept url requests. Response headers and body can be sent through
   * WebResourceHandler.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * Used to intercept url requests. Response headers and body can be sent through
   * WebResourceHandler.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  class WebResourceHandler {
    /**
     * Pass response headers to intercepted requests.
     *
     * @param { WebSchemeHandlerResponse } response - Set response header to intercept.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Pass response headers to intercepted requests.
     *
     * @param { WebSchemeHandlerResponse } response - Set response header to intercept.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    didReceiveResponse(response: WebSchemeHandlerResponse): void;
    /**
     * Pass response body data to intercepted requests.
     *
     * @param { ArrayBuffer } data - Set response body to intercept.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Pass response body data to intercepted requests.
     *
     * @param { ArrayBuffer } data - Set response body to intercept.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    didReceiveResponseBody(data: ArrayBuffer): void;
    /**
     * Notify that this request should be finished and there is no more data available.
     *
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Notify that this request should be finished and there is no more data available.
     *
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    didFinish(): void;
    /**
     * Notify that this request should be failed.
     *
     * @param { WebNetErrorList } code - Set response error code to intercept.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Notify that this request should be failed.
     *
     * @param { WebNetErrorList } code - Set response error code to intercept.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    didFail(code: WebNetErrorList): void;
    /**
     * Notify that this request should be failed.
     *
     * @param { WebNetErrorList } code - Set response error code to intercept.
     * @param { boolean } completeIfNoResponse - If completeIfNoResponse is true, when DidFailWithError is called, if
     *                                           DidReceiveResponse has not been called, a response is automatically
     *                                           constructed and the current request is terminated.
     * @throws { BusinessError } 17100101 - The errorCode is either ARKWEB_NET_OK or outside the range of error codes
     *                                      in WebNetErrorList.
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
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
     * @crossplatform
     * @since 23 dynamic
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
   * @atomicservice
   * @since 12 dynamic
   */
  /**
   * This class is used to intercept requests for a specified scheme.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  class WebSchemeHandler {
    /**
     * Callback for handling the request.
     *
     * @param { function } callback - Callback of handling the request. If callback return false,
     *     it means no interception.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Callback for handling the request.
     *
     * @param { function } callback - Callback of handling the request. If callback return false,
     *     it means no interception.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    onRequestStart(
      callback: (request: WebSchemeHandlerRequest, handler: WebResourceHandler) => boolean): void;

    /**
     * Callback when the request is completed.
     *
     * @param { Callback<WebSchemeHandlerRequest> } callback - Callback of request is completed.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    /**
     * Callback when the request is completed.
     *
     * @param { Callback<WebSchemeHandlerRequest> } callback - Callback of request is completed.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    onRequestStop(callback: Callback<WebSchemeHandlerRequest>): void;
  }

  /**
   * Enum type supplied to {@link handleStatusChanged} for indicating the playback status.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enum PlaybackStatus {
    /**
     * Player status is paused.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    PAUSED = 0,
    /**
     * Player status is playing.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    PLAYING = 1
  }

  /**
   * Enum type supplied to {@link handleNetworkStateChanged} for indicating the native player network state.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enum NetworkState {
    /**
     * Player does not do any download tasks.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    EMPTY = 0,
    /**
     * Player downloads finished, waiting for next task.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    IDLE = 1,
    /**
     * Player is downloading contents.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    LOADING = 2,
    /**
     * Player downloads failed, due to network error.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    NETWORK_ERROR = 3
  }

  /**
   * Enum type supplied to {@link handleReadyStateChanged} for indicating the native player network state.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enum ReadyState {
    /**
     * Player hasn't downloaded anything.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    HAVE_NOTHING = 0,
    /**
     * Player has downloaded metadata.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    HAVE_METADATA = 1,
    /**
     * Player has played all downloaded media data.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    HAVE_CURRENT_DATA = 2,
    /**
     * The buffered media data is not enough, and will cause jank.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    HAVE_FUTURE_DATA = 3,
    /**
     * The buffered media data is enough.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    HAVE_ENOUGH_DATA = 4
  }

  /**
   * Enum type supplied to {@link handleError} for indicating the error type of native media player.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enum MediaError {
    /**
     * Network error
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    NETWORK_ERROR = 1,
    /**
     * Media format error, such as not a valid file.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    FORMAT_ERROR = 2,
    /**
     * Decode error, such as decoder doesn't support this format.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    DECODE_ERROR = 3
  }

  /**
   * The native media player status handler.
   * Apps should use this class to handle native media player's status.
   *
   * @typedef NativeMediaPlayerHandler
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  interface NativeMediaPlayerHandler {

    /**
     * Handle native media player playback status.
     *
     * @param { PlaybackStatus } status - Playback status of native media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleStatusChanged(status: PlaybackStatus): void;

    /**
     * Handle native media player volume.
     *  volume: float
     *   value range: [0 - 1.0]
     *
     * @param { number } volume - Current volume of native media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleVolumeChanged(volume: number): void;

    /**
     * Handle native media player muted status.
     *
     * @param { boolean } muted - Current mute status of native media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleMutedChanged(muted: boolean): void;

    /**
     * Handle playback rate of native media player.
     *  playbackRate: float
     *   value range: [0 - infinity]
     *
     * @param { number } playbackRate - Current playback rate of native media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handlePlaybackRateChanged(playbackRate: number): void;

    /**
     * Handle duration time of media.
     *  duration: float
     *   value range: [0 - infinity]
     *
     * @param { number } duration - Duration time (in seconds) of media.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleDurationChanged(duration: number): void;

    /**
     * Handle current playing time of media.
     *  currentPlayTime: float
     *   value range: [0 - duration]
     *
     * @param { number } currentPlayTime - Current playing time (in seconds) of media.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleTimeUpdate(currentPlayTime: number): void;

    /**
     * Handle buffered end time of media.
     *  bufferedEndTime: float
     *   value range: [0 - duration]
     *
     * @param { number } bufferedEndTime - Buffered end time (in seconds) of media.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleBufferedEndTimeChanged(bufferedEndTime: number): void;

    /**
     * Handle native player ended event.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleEnded(): void;

    /**
     * Handle network state of native media player.
     *
     * @param { NetworkState } state - Network state of native media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleNetworkStateChanged(state: NetworkState): void;

    /**
     * Handle ready state of native media player.
     *
     * @param { ReadyState } state - Ready state of native media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleReadyStateChanged(state: ReadyState): void;

    /**
     * Handle native media player fullscreen state changed event.
     *
     * @param { boolean } fullscreen - Fullscreen state of native media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleFullscreenChanged(fullscreen: boolean): void;

    /**
     * Handle native media player seeking state.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleSeeking(): void;

    /**
     * Handle native media player seek finished state.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleSeekFinished(): void;

    /**
     * Handle native media player error event.
     *
     * @param { MediaError } error - Error type of native media player.
     * @param { string } errorMessage - Description of current error.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleError(error: MediaError, errorMessage: string): void;

    /**
     * Handle size of video.
     *
     * @param { number } width - Width of video.
     * @param { number } height - Height of video.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleVideoSizeChanged(width: number, height: number): void;
  }

  /**
   * The scenarios for suspending the media player.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  enum SuspendType {
    /**
     * Page enters the BackForwardCache.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    ENTER_BACK_FORWARD_CACHE = 0,

    /**
     * Page enters background.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    ENTER_BACKGROUND = 1,

    /**
     * Cleanup when the number of paused media player over limit.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    AUTO_CLEANUP = 2
  }

  /**
   * 恢复媒体播放的自定义函数
   *
   * @typedef NativeMediaPlayerBridge
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  interface NativeMediaPlayerBridge {
    /**
     * Notify native media player that the rect of video tag has changed.
     *
     * @param { number } x - The x position of video tag in web component.
     * @param { number } y - The y position of video tag in web component.
     * @param { number } width - The width of video tag.
     * @param { number } height - The height of video tag.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    updateRect(x: number, y: number, width: number, height: number): void;

    /**
     * Request to play.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    play(): void;

    /**
     * Request to pause.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    pause(): void;

    /**
     * Request to fast forward / back forward to targetTime.
     *  targetTime: float
     *   value range: [0 - duration]
     *
     * @param { number } targetTime - The target time (in seconds) to FF/BF to.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    seek(targetTime: number): void;

    /**
     * Request to change volume of native media player.
     *  volume: float
     *   value range: [0 - 1.0]
     *
     * @param { number } volume - The volume of native media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    setVolume(volume: number): void;

    /**
     * Request to mute native media player.
     *
     * @param { boolean } muted - Should mute native media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    setMuted(muted: boolean): void;

    /**
     * Request to change playback rate of native media player.
     *  playbackRate: float
     *   value range: [0 - 10.0]
     *
     * @param { number } playbackRate - The playback rate of native media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    setPlaybackRate(playbackRate: number): void;

    /**
     * Request to release native media player.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    release(): void;

    /**
     * Request to enter fullscreen.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    enterFullscreen(): void;

    /**
     * Request to exit fullscreen.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    exitFullscreen(): void;

    /**
     * Resume the native media player.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    resumePlayer?(): void;

    /**
     * Suspend to release native media player, not the NativeMediaPlayerBridge. The
     * embedder should save the status of player when release the native media player
     * through NativeMediaPlayerBridge.
     *
     * @param { SuspendType } type - The scenario for suspending the media player.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    suspendPlayer?(type: SuspendType): void;
  }

  /**
   * Enum type for indicating the media type of native media player.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enum MediaType {
    /**
     * Media type is video.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    VIDEO = 0,
    /**
     * Media type is audio.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    AUDIO = 1
  }

  /**
   * Enum type for indicating the media source type of native media player.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enum SourceType {
    /**
     * The type of media source is URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    URL = 0,
    /**
     * The type of media source is blob.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    MSE = 1
  }

  /**
   * Media source information. Uri and format.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  class MediaSourceInfo {
    /**
     * Source type, most time is URL.
     * @type { SourceType }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    type: SourceType;

    /**
     * Media source, most time is Uri.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    source: string;

    /**
     * Media format, such as mp4, webm, m3u8 etc.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    format: string;
  }

  /**
   * Rectangle definition.
   *
   * @typedef RectEvent
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  interface RectEvent {
    /**
     * X coordinator of top left point.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    x: number;
    /**
     * Y coordinator of top left point.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    y: number;
    /**
     * Width of this rectangle.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    width: number;
    /**
     * Height of this rectangle.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    height: number;
  }

  /**
   * Surface information.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  class NativeMediaPlayerSurfaceInfo {
    /**
     * Id of surface.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    id: string;

    /**
     * Surface rect info.
     * @type { RectEvent }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    rect: RectEvent;
  }

  /**
   * Enum type for indicating the preload type.
   * @enum {number}
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enum Preload {
    /**
     * Doesn't do preload.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    NONE = 0,
    /**
     * Only preload metadata.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    METADATA = 1,
    /**
     * Preload enough data to ensure playing is smooth.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    AUTO = 2
  }

  /**
   * Media information.
   *
   * @typedef MediaInfo
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  interface MediaInfo {
    /**
     * Id of media element.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    embedID: string,
    /**
     * Media type : Video or Audio.
     * @type { MediaType }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    mediaType: MediaType,
    /**
     * Media source list, player should choose an appropriate one to play.
     * @type { MediaSourceInfo[] }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    mediaSrcList: MediaSourceInfo[],
    /**
     * Surface to render media content on.
     * @type { NativeMediaPlayerSurfaceInfo }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    surfaceInfo: NativeMediaPlayerSurfaceInfo,
    /**
     * Should show media controls.
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    controlsShown: boolean,
    /**
     * Limit media controls items.
     *  Such as 'nodownload', 'nofullscreen', 'noremoteplayback'
     * @type { string[] }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    controlList: string[],
    /**
     * Player should be muted;
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    muted: boolean,
    /**
     * Player should show poster before media first frame shown.
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    posterUrl: string,
    /**
     * Preload type.
     * @type { Preload }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    preload: Preload,
    /**
     * Header information of a media network request.
     * @type { Record<string, string> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    headers: Record<string, string>,
    /**
     * The information list of attributes of media tag.
     * @type { Record<string, string> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
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
   * @atomicservice
   * @since 12 dynamic
   */
  type CreateNativeMediaPlayerCallback =
      (handler: NativeMediaPlayerHandler, mediaInfo: MediaInfo) => NativeMediaPlayerBridge;

  /**
   * This class is used to set adblock config.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  class AdsBlockManager {
    /**
     * set Ads Block ruleset file, containing easylist rules.
     * @param {string} rulesFile - absolute file path contains app customized ads block rules.
     * @param {boolean} replace - (@code true)replace internal rules;(@code false) add to internal rules.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * set Ads Block ruleset file, containing easylist rules.
     * @param {string} rulesFile - absolute file path contains app customized ads block rules.
     * @param {boolean} replace - (@code true)replace internal rules;(@code false) add to internal rules.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 18 dynamic
     */
    static setAdsBlockRules(rulesFile: string, replace: boolean): void;

    /**
     * Add items to Ads Block Disallow list.
     * @param { Array<string> } domainSuffixes - list of domain suffix, if web page url matches someone in the list,
     * Ads Block will be disallowed for the web page.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Add items to Ads Block Disallow list.
     * @param { Array<string> } domainSuffixes - list of domain suffix, if web page url matches someone in the list,
     * Ads Block will be disallowed for the web page.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 18 dynamic
     */
    static addAdsBlockDisallowedList(domainSuffixes: Array<string>): void;

    /**
     * Add items to Ads Block Allow list.
     * By default, ads block is allowed for all pages unless they are added to the
     * disallow list. The priority of allowlist is higher than the disallowlist. It is
     * used to re-enable ads block on the page that matches disallow list.
     * @param { Array<string> } domainSuffixes - list of domain suffix, if web page url matches someone in the list,
     * Ads Block will be allowed for the web page.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Add items to Ads Block Allow list.
     * By default, ads block is allowed for all pages unless they are added to the
     * disallow list. The priority of allowlist is higher than the disallowlist. It is
     * used to re-enable ads block on the page that matches disallow list.
     * @param { Array<string> } domainSuffixes - list of domain suffix, if web page url matches someone in the list,
     * Ads Block will be allowed for the web page.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 18 dynamic
     */
    static addAdsBlockAllowedList(domainSuffixes: Array<string>): void;

    /**
     * remove items from Ads Block Disallowed list.
     * @param { Array<string> } domainSuffixes - list of domain suffix needed be removed from disallow list
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * remove items from Ads Block Disallowed list.
     * @param { Array<string> } domainSuffixes - list of domain suffix needed be removed from disallow list
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 18 dynamic
     */
    static removeAdsBlockDisallowedList(domainSuffixes: Array<string>): void;

    /**
     * remove items from Ads Block Allowed list.
     * @param { Array<string> } domainSuffixes - list of domain suffix needed be removed from allow list
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * remove items from Ads Block Allowed list.
     * @param { Array<string> } domainSuffixes - list of domain suffix needed be removed from allow list
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 18 dynamic
     */
    static removeAdsBlockAllowedList(domainSuffixes: Array<string>): void;

    /**
     * clear Ads Block Disallowed list.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * clear Ads Block Disallowed list.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 18 dynamic
     */
    static clearAdsBlockDisallowedList(): void;

    /**
     * clear Ads Block Allowed list.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * clear Ads Block Allowed list.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 18 dynamic
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
     * Whether cache the pages that use native embed.
     * Default is false;
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    nativeEmbed: boolean;

    /**
     * Whether cache the pages that use media take over.
     * Default is false;
     *
     * @type { boolean }
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
   * This class is used to set back forward cache options.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  class BackForwardCacheOptions {
    /**
     * Set the maximum size of pages that can cache.
     * Default is 1, max is 50.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    size: number;

    /**
     * Set the lifetime in seconds in the BackForwardCache.
     * Default is 600.
     *
     * @type { number }
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
   * @enum { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 15
   */
  /**
   * Enum type supplied to {@link insertProxyRule} for indicating the scheme filter for proxy.
   * @enum { number }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 19 dynamic
   */
  enum ProxySchemeFilter {
    /**
     * This indicates all the schemes will use the proxy.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * This indicates all the schemes will use the proxy.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19 dynamic
     */
    MATCH_ALL_SCHEMES = 0,
    /**
     * This indicates only the HTTP requests will use the proxy.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * This indicates only the HTTP requests will use the proxy.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19 dynamic
     */
    MATCH_HTTP = 1,
    /**
     * This indicates only the HTTPS requests will use the proxy.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * This indicates only the HTTPS requests will use the proxy.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19 dynamic
     */
    MATCH_HTTPS = 2
  }
  /**
   * The ProxyConfig used by applyProxyOverride.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 15
   */
  /**
   * The ProxyConfig used by applyProxyOverride.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 19 dynamic
   */
  class ProxyConfig {
    /**
     * Insert a bypass rule that indicates URLs that should skip the override proxy and connect the server directly instead.
     * These maybe URLs or IP addresses and wildcards are supported. e.g. "*.example.com" means that requests to
     * "https://www.example.com" and "http://test.example.com" will connect the server directly.
     *
     * @param { string } bypassRule - The bypass rule.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * Insert a bypass rule that indicates URLs that should skip the override proxy and connect the server directly instead.
     * These maybe URLs or IP addresses and wildcards are supported. e.g. "*.example.com" means that requests to
     * "https://www.example.com" and "http://test.example.com" will connect the server directly.
     *
     * @param { string } bypassRule - The bypass rule.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19 dynamic
     */
    insertBypassRule(bypassRule: string): void;
    /**
     * Insert a proxy rule that indicates URLs that match the schemeFilter will connect the server directly.
     *
     * @param { ProxySchemeFilter } schemeFilter - The scheme filter for this rule.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * Insert a proxy rule that indicates URLs that match the schemeFilter will connect the server directly.
     *
     * @param { ProxySchemeFilter } schemeFilter - The scheme filter for this rule.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19 dynamic
     */
    insertDirectRule(schemeFilter?: ProxySchemeFilter): void;
    /**
     * Insert a proxy rule which indicates that requests matching the schemeFilter should use an override proxy, all requests will
     * use the proxy rule if schemeFilter is null.
     *
     * The format for proxy is [scheme://]host[:port]. Scheme is optional and must be HTTP, HTTPS, or SOCKS if present. Scheme defaults to HTTP.
     * Host is an IPv6 literal with brackets, an IPv4 literal or one or more labels seperated by a period. Port number is optional and defaults
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
     * @since 15
     */
    /**
     * Insert a proxy rule which indicates that requests matching the schemeFilter should use an override proxy, all requests will
     * use the proxy rule if schemeFilter is null.
     *
     * The format for proxy is [scheme://]host[:port]. Scheme is optional and must be HTTP, HTTPS, or SOCKS if present. Scheme defaults to HTTP.
     * Host is an IPv6 literal with brackets, an IPv4 literal or one or more labels seperated by a period. Port number is optional and defaults
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
     * @atomicservice
     * @since 19 dynamic
     */
    insertProxyRule(proxyRule: string, schemeFilter?: ProxySchemeFilter): void;
    /**
     * Hostnames without a period in them (and that are not IP literals) will skip the proxy and connect the server directly.
     * Examples: "abc", "local", "some-domain".
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * Hostnames without a period in them (and that are not IP literals) will skip the proxy and connect the server directly.
     * Examples: "abc", "local", "some-domain".
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19 dynamic
     */
    bypassHostnamesWithoutPeriod(): void;
    /**
     * By default, certain hostnames implicitly bypass the proxy if they are link-local IPs, or localhost addresses. For instance
     * hostnames matching any of (non-exhaustive list): localhost *.localhost [::1] 127.0.0.1/8 169.254/16 [FE80::]/10
     * Call this function to override the default behavior and force localhost and link-local URLs to be sent through the proxy.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * By default, certain hostnames implicitly bypass the proxy if they are link-local IPs, or localhost addresses. For instance
     * hostnames matching any of (non-exhaustive list): localhost *.localhost [::1] 127.0.0.1/8 169.254/16 [FE80::]/10
     * Call this function to override the default behavior and force localhost and link-local URLs to be sent through the proxy.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19 dynamic
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
     * @since 15
     */
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
     * @atomicservice
     * @since 19 dynamic
     */
    enableReverseBypass(reverse: boolean): void;
    /**
     * Returns the bypass rules.
     *
     * @returns { Array<string> } The bypass rules.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * Returns the bypass rules.
     *
     * @returns { Array<string> } The bypass rules.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19 dynamic
     */
    getBypassRules(): Array<string>;
    /**
     * Returns the proxy rules.
     *
     * @returns { Array<ProxyRule> } The proxy rules.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * Returns the proxy rules.
     *
     * @returns { Array<ProxyRule> } The proxy rules.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19 dynamic
     */
    getProxyRules(): Array<ProxyRule>;
    /**
     * Returns if reverse bypass rules.
     *
     * @returns { boolean } If reverse bypass enabled.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * Returns if reverse bypass rules.
     *
     * @returns { boolean } If reverse bypass enabled.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19 dynamic
     */
    isReverseBypassEnabled(): boolean;
  }

  /**
   * The ProxyRule used by insertProxyRule.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 15
   */
  /**
   * The ProxyRule used by insertProxyRule.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 19 dynamic
   */
  class ProxyRule {
    /**
     * Returns the scheme filter used for this rule.
     *
     * @returns { ProxySchemeFilter } The scheme filter used for this rule.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * Returns the scheme filter used for this rule.
     *
     * @returns { ProxySchemeFilter } The scheme filter used for this rule.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19 dynamic
     */
    getSchemeFilter(): ProxySchemeFilter;
    /**
     * Returns the proxy URL.
     *
     * @returns { string } The proxy URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * Returns the proxy URL.
     *
     * @returns { string } The proxy URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19 dynamic
     */
    getUrl(): string;
  }

  /**
   * The callback for proxy changed.
   *
   * @typedef { function }
   * @syscap SystemCapability.Web.Webview.Core
   * @since 15
   */
  /**
   * The callback for proxy changed.
   *
   * @typedef { function }
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 19 dynamic
   */
  type OnProxyConfigChangeCallback = () => void;

  /**
   * This class is used for set proxy for ArkWeb.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 15
   */
  /**
   * This class is used for set proxy for ArkWeb.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 19 dynamic
   */
  class ProxyController {
    /**
     * Sets ProxyConfig which will be used by all Webs in the app. URLs that match patterns in the bypass list will connect the server directly.
     * Instead, the request will use the proxy specified by the config. Requests are not guaranteed to use the new proxy immediately; wait for
     * the listener before loading a page. This listener will be called on the UI thread.
     * Note: calling applyProxyOverride will cause any existing system wide setting to be ignored.
     *
     * @param { ProxyConfig } proxyConfig - The proxy config.
     * @param { OnProxyConfigChangeCallback } callback - Called when the proxy has been changed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * Sets ProxyConfig which will be used by all Webs in the app. URLs that match patterns in the bypass list will connect the server directly.
     * Instead, the request will use the proxy specified by the config. Requests are not guaranteed to use the new proxy immediately; wait for
     * the listener before loading a page. This listener will be called on the UI thread.
     * Note: calling applyProxyOverride will cause any existing system wide setting to be ignored.
     *
     * @param { ProxyConfig } proxyConfig - The proxy config.
     * @param { OnProxyConfigChangeCallback } callback - Called when the proxy has been changed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19 dynamic
     */
    static applyProxyOverride(proxyConfig: ProxyConfig, callback: OnProxyConfigChangeCallback): void;
    /**
     * Remove the proxy config. Requests are not guaranteed to not use the proxy; Wait for the listener before loading a page. This listener
     * will be called on the UI thread.
     *
     * @param { OnProxyConfigChangeCallback } callback - Called when the proxy has been changed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    /**
     * Remove the proxy config. Requests are not guaranteed to not use the proxy; Wait for the listener before loading a page. This listener
     * will be called on the UI thread.
     *
     * @param { OnProxyConfigChangeCallback } callback - Called when the proxy has been changed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 19 dynamic
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