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
   * Describes the request/response header returned by the **Web** component.
   *
   * @interface WebHeader [since 9 - 11]
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  interface WebHeader {
    /**
     * Key of the request/response header.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    headerKey: string;

    /**
     * Value of the request/response header.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    headerValue: string;
  }

  /**
   * Enumerates the node types that the cursor hits.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  enum WebHitTestType {
    /**
     * Editable area.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    EditText = 0,

    /**
     * Email address.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    Email = 1,

    /**
     * Hyperlink with an HTTP address.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    HttpAnchor = 2,

    /**
     * Image with a hyperlink, where the link address is HTTP + HTML::img.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    HttpAnchorImg = 3,

    /**
     * HTML::img tag.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    Img = 4,

    /**
     * Geographical address.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    Map = 5,

    /**
     * Phone number.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    Phone = 6,

    /**
     * Unknown content.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    Unknown = 7
  }

  /**
   * Enumerates the modes in which the **Web** component uses HTTPDNS.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enum SecureDnsMode {
    /**
     * HTTPDNS is not used. It can be used to revoke the previously used HTTPDNS configuration.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    OFF = 0,
    /**
     * HTTPDNS is used in automatic mode. If the specified HTTPDNS server is unavailable for resolution, the component
     * falls back to the system DNS server.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    AUTO = 1,
    /**
     * The specified HTTPDNS server is forcibly used for DNS resolution.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    SECURE_ONLY = 2
  }

  /**
   * Enumerates the security levels of the web page.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 11 dynamic
   */
  enum SecurityLevel {
    /**
     * The web page is neither absolutely secure nor insecure, that is, neutral. A typical example is a web page whose
     * URL scheme is not HTTP or HTTPS.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    NONE = 0,

    /**
     * The web page is secure, using the HTTPS protocol and a trusted certificate.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SECURE = 1,

    /**
     * The web page is insecure. A typical example is a web page that uses the HTTP or HTTPS protocol but an outdated
     * TLS version.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    WARNING = 2,

    /**
     * The web page is dangerous. This means that the page may have attempted to load HTTPS scripts to no avail, have
     * failed authentication, or contain insecure active content in HTTPS, malware, phishing, or any other sources of
     * major threats.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    DANGEROUS = 3
  }

  /**
   * Enumerates the playback control states of the current web page.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enum MediaPlaybackState {
    /**
     * No audio or video playback is started on the page.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    NONE = 0,

    /**
     * The audio and video on the page are being played.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    PLAYING = 1,

    /**
     * The audio and video on the page are paused.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    PAUSED = 2,

    /**
     * The audio and video on the page are stopped.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    STOPPED = 3
  }

  /**
   * Enumerates the memory pressure levels. When an application clears the cache occupied by the **Web** component, the
   * **Web** kernel releases the cache based on the memory pressure level.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 14 dynamic
   */
  enum PressureLevel {
    /**
     * Moderate memory pressure level. At this level, the **Web** kernel attempts to release the cache that has low
     * reallocation overhead and does not need to be used immediately.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    MEMORY_PRESSURE_LEVEL_MODERATE = 1,

    /**
     * Critical memory pressure level. At this level, the **Web** kernel attempts to release all possible memory caches.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    MEMORY_PRESSURE_LEVEL_CRITICAL = 2
  }

  /**
   * Enumerates the policies for sending cookies in cross-site requests.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  enum WebHttpCookieSameSitePolicy {
    /**
     * Cookies can be carried in cross-site requests, but the **secure** attribute must be set.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    NONE = 0,

    /**
     * Cookies can be carried in specific cross-site requests, such as navigation scenarios of some GET requests.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    LAX = 1,

    /**
     * Cookies cannot be carried in cross-site requests.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    STRICT = 2
  }

  /**
   * Enumerates the user device forms.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 24 dynamic
   */
  enum UserAgentFormFactor {
    /**
     * Telematics device, which is a string.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    AUTOMOTIVE = 'Automotive',
    /**
     * PC, which is a string.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    DESKTOP = 'Desktop',
    /**
     * Mobile phone, which is a string.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    MOBILE = 'Mobile',
    /**
     * E-ink screen, which is a string.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    EINK = 'EInk',
    /**
     * Tablet, which is a string.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    TABLET = 'Tablet',
    /**
     * Watch, a string type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    WATCH = 'Watch',
    /**
     * VR+AR device, a string type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    XR = 'XR'
  }

  /**
   * UserAgentBrandVersion is a data class in the ArkWeb framework used to configure the brand name and version number
   * in User-Agent client hints, and is used together with [UserAgentMetadata]{@link webview.UserAgentMetadata}. In the
   * User-Agent Client Hints mechanism, the browser reports brand and version information to the server through request
   * headers such as Sec-CH-UA-Full-Version-List. UserAgentBrandVersion is used to define a single brand entry in it.
   *
   * UserAgentBrandVersion provides methods for setting and obtaining the brand name and version number: setBrand/
   * getBrand are used to set and obtain the brand name (for example, "ArkWeb"), setMajorVersion/getMajorVersion are
   * used to set and obtain the major version number (for example, "126"), and setFullVersion/getFullVersion are used to
   * set and obtain the full version number (for example, "126.0.0.0"). An app can customize the browser identity
   * information reported by the Web component to the server by modifying these values.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 24 dynamic
   */
  class UserAgentBrandVersion {
    /**
     * Sets the brand name.
     *
     * @param { string } brand - Brand name, which cannot be an empty string.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setBrand(brand: string): void;

    /**
     * Obtains the brand name.
     *
     * @returns { string } Brand name string.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getBrand(): string;

    /**
     * Sets the major version number.
     *
     * @param { string } majorVersion - Major version number, which cannot be an empty string.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setMajorVersion(majorVersion: string): void;

    /**
     * Obtains the major version number.
     *
     * @returns { string } Major version number string.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getMajorVersion(): string;

    /**
     * Sets the full version number.
     *
     * @param { string } fullVersion - Full version number, which cannot be an empty string.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setFullVersion(fullVersion: string): void;

    /**
     * Obtains the full version number.
     *
     * @returns { string } Full version number string.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getFullVersion(): string;
  }

  /**
   * UserAgentMetadata is a class in the ArkWeb framework used to configure the complete metadata for User-Agent Client
   * Hints. User-Agent Client Hints is a modern HTTP request header mechanism that reports client information to the
   * server through a set of Sec-CH-UA series headers, replacing the traditional User-Agent string to achieve more
   * secure and more granular browser identity identification. Through UserAgentMetadata, apps can customize all client
   * information fields reported by the Web component to the server.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 24 dynamic
   */
  class UserAgentMetadata {
    /**
     * Sets the brand and version information.
     *
     * @param { Array<UserAgentBrandVersion> } brandVersionList - **Sec-CH-UA-Full-Version-List** of the request header.
     *     If this parameter is left empty, the default ArkWeb value is used.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setBrandVersionList(brandVersionList: Array<UserAgentBrandVersion>): void;

    /**
     * Obtains the brand and version information list. If the corresponding
     * [setBrandVersionList]{@link webview.UserAgentMetadata#setBrandVersionList} is not called for configuration, the
     * default value of the list is:
     * [{"brand":"Chromium","version":[ChromeCompatibleVersion](docroot://web/web-default-userAgent.md#default-user-agent-structure)}, {"brand":"ArkWeb","version":[OSVersion](docroot://web/web-default-userAgent.md#default-user-agent-structure)}].
     *
     * @returns { Array<UserAgentBrandVersion> } Brand and version information list.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getBrandVersionList(): Array<UserAgentBrandVersion>;

    /**
     * Sets the architecture type of the platform.
     *
     * @param { string } arch - **Sec-CH-UA-Arch** of the request header. If this parameter is left empty, the default
     *     ArkWeb value is used.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setArchitecture(arch: string): void;

    /**
     * Obtains the architecture type of the platform. If the corresponding
     * [setArchitecture]{@link webview.UserAgentMetadata#setArchitecture} is not called for configuration, the default
     * value of the architecture type is: "".
     *
     * @returns { string } Platform architecture type.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getArchitecture(): string;

    /**
     * Sets the bitness type of the platform.
     *
     * @param { string } bitness - Corresponds to the Sec-CH-UA-Bitness request header. If empty, the default value of
     *     ArkWeb is used.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setBitness(bitness: string): void;

    /**
     * Obtains the bitness type of the platform. If the corresponding
     * [setBitness]{@link webview.UserAgentMetadata#setBitness} is not called for configuration, the default value of
     * the bitness type is: Desktop: "64", other devices: "".
     *
     * @returns { string } Bitness type of the platform.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getBitness(): string;

    /**
     * Sets the device form, such as the mobile phone or tablet.
     *
     * @param { Array<UserAgentFormFactor> } formFactors - **Sec-CH-UA-Form-Factor** of the request header. If this
     *     parameter is left empty, the default ArkWeb value is used.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setFormFactors(formFactors: Array<UserAgentFormFactor>): void;

    /**
     * Obtains the device form factor information, such as phone and tablet. If the corresponding
     * [setFormFactors]{@link webview.UserAgentMetadata#setFormFactors} is not called for configuration, the default
     * value of the form factor information is: Phone: "Mobile", Watch: "Watch", Automotive: "Automotive", PC: "Desktop"
     * , Tablet: "Tablet".
     *
     * @returns { Array<UserAgentFormFactor> } Device form information.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getFormFactors(): Array<UserAgentFormFactor>;

    /**
     * Sets the full version number.
     *
     * @param { string } fullVersion - **Sec-CH-UA-Full-Version** of the request header. If this parameter is left
     *     empty, the default ArkWeb value is used.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setFullVersion(fullVersion: string): void;

    /**
     * Obtains the full version number. If the corresponding
     * [setFullVersion]{@link webview.UserAgentMetadata#setFullVersion} is not called for configuration, the default
     * value of the version number is: "".
     *
     * @returns { string } Full version number.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getFullVersion(): string;

    /**
     * Sets whether the device is a mobile device.
     *
     * @param { boolean } isMobile - Whether the device is a mobile device. Corresponds to the Sec-CH-UA-Mobile request
     *     header. The value true means the device is a mobile device, and false means the opposite.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setMobile(isMobile: boolean): void;

    /**
     * Obtains whether the device is a mobile device. If the corresponding
     * [setMobile]{@link webview.UserAgentMetadata#setMobile} is not called for configuration, the default value is:
     * Phone: true, Watch, Automotive, Tablet, Large screen: false.
     *
     * @returns { boolean } Whether the device is a mobile device. **true** means yes; **false** otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getMobile(): boolean;

    /**
     * Sets the device model.
     *
     * @param { string } model - Value of the Sec-CH-UA-Model request header. If empty, the default value of ArkWeb is
     *     used.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setModel(model: string): void;

    /**
     * Obtains the device model. If the corresponding [setModel]{@link webview.UserAgentMetadata#setModel} is not called
     * for configuration, the default value of the model is: Phone: obtains the device model based on
     * const.product.model; Watch, Large screen, Automotive, PC, Tablet: "".
     *
     * @returns { string } Device model.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getModel(): string;

    /**
     * Sets the OS name.
     *
     * @param { string } platform - **Sec-CH-UA-Platform** of the request header. If this parameter is left empty, the
     *     default ArkWeb value is used.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setPlatform(platform: string): void;

    /**
     * Obtains the operating system name. If the corresponding
     * [setPlatform]{@link webview.UserAgentMetadata#setPlatform} is not called for configuration, the default value of
     * the name is: "OpenHarmony".
     *
     * @returns { string } OS name.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getPlatform(): string;

    /**
     * Sets the OS version.
     *
     * @param { string } platformVersion - **Sec-CH-UA-Platform-Version** of the request header. If this parameter is
     *     left empty, the default ArkWeb value is used.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setPlatformVersion(platformVersion: string): void;

    /**
     * Obtains the operating system version number. If the corresponding
     * [setPlatformVersion]{@link webview.UserAgentMetadata#setPlatformVersion} is not called for configuration, the
     * default value of the version number is: follows the OpenHarmony platform version number rules, same as
     * const.product.os.dist.version.
     *
     * @returns { string } OS version.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getPlatformVersion(): string;

    /**
     * Sets whether the binary file runs in 32-bit mode on a 64-bit Windows.
     *
     * @param { boolean } isWow64 - Corresponds to the Sec-CH-UA-WoW64 request header. Whether the binary file is
     *     running in 32-bit mode on 64-bit Windows. The value **true** means yes, and **false** means no.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setWow64(isWow64: boolean): void;

    /**
     * Obtains whether the binary file is running in 32-bit mode on 64-bit Windows. If the corresponding
     * [setWow64]{@link webview.UserAgentMetadata#setWow64} is not called for configuration, the default value is false.
     *
     * @returns { boolean } Whether the binary file runs in 32-bit mode on a 64-bit Windows. **true** means yes;
     *     **false** otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getWow64(): boolean;
  }

  /**
   * Provides the element information of the area being clicked. For the sample code, see
   * [getLastHitTest]{@link webview.WebviewController#getLastHitTest}.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  interface HitTestValue {

    /**
     * Element type of the area being clicked.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    type: WebHitTestType;

    /**
     * Extra information of the area being clicked. If the area being clicked is an image or a link, the extra
     * information is the URL of the image or link.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    extra: string;
  }

  /**
   * Defines a custom URL scheme.
   *
   * @interface WebCustomScheme [since 9 - 11]
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  interface WebCustomScheme {

    /**
     * Custom protocol name. The maximum length is 32, and only lowercase letters, digits, '.', '+', and '-' are
     * supported. It must start with a letter. If the preceding restrictions are not met, the custom protocol
     * configuration does not take effect.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    schemeName: string;

    /**
     * Whether to support cross-origin resource sharing (CORS).
     *
     * The value **true** means to support cross-origin resource sharing (CORS), and **false** means the opposite.
     *
     * Default value: **true**.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    isSupportCORS: boolean;

    /**
     * Whether to support fetch requests.
     *
     * The value **true** means to support fetch requests, and **false** means the opposite.
     *
     * Default value: **true**.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    isSupportFetch: boolean;

    /**
     * Whether the scheme with this option set is processed as a standard scheme. A standard scheme must comply with the
     * URL parsing rules defined in RFC 1738 section 3.1 and the URL normalization rules defined in RFC 3986 section 6.
     * 2.
     *
     * **true** indicates that the scheme with this option set is processed as a standard scheme, and **false**
     * indicates that it is not processed as a standard scheme.
     *
     * Default value: true.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isStandard?: boolean;

    /**
     * Whether the scheme is treated with the same security rules as those applied to file URLs.
     *
     * The value **true** indicates that the scheme is treated with the same security rules as those applied to file
     * URLs, and the value **false** indicates the opposite.
     *
     * Default value: **true**.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isLocal?: boolean;

    /**
     * Whether the content of the scheme with this option set can only be displayed or accessed from other content of
     * the same scheme.
     *
     * **true** indicates that the content of the scheme with this option set can only be displayed or accessed from
     * other content of the same scheme, and **false** indicates that the content of the scheme with this option set can
     * be displayed or accessed from content of other schemes.
     *
     * Default value: true.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isDisplayIsolated?: boolean;

    /**
     * Whether the scheme is treated with the same security rules as those applied to HTTPS URLs. The value **true**
     * indicates that the scheme is treated with the same security rules as those applied to HTTPS URLs, and **false**
     * indicates the opposite.
     *
     * Default value: **true**.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isSecure?: boolean;

    /**
     * Whether the scheme with this option set can bypass Content Security Policy (CSP) checks.
     *
     * **true** indicates that the scheme with this option set can bypass CSP checks, and **false** indicates that it
     * cannot bypass CSP checks.
     *
     * Default value: true.
     *
     * When **isStandard** is set to **true**, this value should not be set. If **isCspBypassing** is still set to
     * **true** in this case, the CSP bypass behavior may not meet expectations.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isCspBypassing?: boolean;

    /**
     * Whether JavaScript resources of the scheme with this option set support code cache generation.
     *
     * **true** indicates that JavaScript resources of the scheme with this option set support code cache generation,
     * and **false** indicates that they do not support code cache generation.
     *
     * Default value: false.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    isCodeCacheSupported?: boolean;
  }

  /**
   * PdfData is a class used by the Web component to encapsulate the PDF data stream generated from a web page. When an
   * app needs to save the web page content loaded by the Web component in PDF format, the
   * [createPdf]{@link webview.WebviewController#createPdf(configuration: PdfConfiguration, callback: AsyncCallback<PdfData>)}
   * method of [WebviewController]{@link webview.WebviewController} is used to convert the web page content into a PDF
   * data stream, which is returned as a PdfData object in a callback or promise. The app then obtains the data stream
   * in Uint8Array format through the pdfArrayBuffer method of PdfData and writes the data to a local PDF file using
   * file I/O APIs.
   *
   * PdfData is applicable to scenarios such as saving web page content offline and generating web page PDF reports.
   * Before using it, load the Web component and ensure that the web page content has been rendered, and then call
   * createPdf to generate the PDF data stream.
   *
   * > **NOTE**
   * >
   * > - When a PDF file is generated on a web page, a data stream is returned, which is encapsulated by the **PdfData**
   * > class.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 14 dynamic
   */
  class PdfData {
    /**
     * Obtains the data stream generated by a web page. For the complete sample code, see
     * [createPdf]{@link webview.WebviewController#createPdf(configuration: PdfConfiguration, callback: AsyncCallback<PdfData>)}.
     *
     * @returns { Uint8Array } PDF data stream generated from the web page, which can be used with file I/O APIs to
     *     write the data to a local PDF file.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    pdfArrayBuffer(): Uint8Array;
  }

  /**
   * Input parameter of the
   * [createPdf]{@link webview.WebviewController#createPdf(configuration: PdfConfiguration, callback: AsyncCallback<PdfData>)}
   * function.
   *
   * > **NOTE**
   * >
   * > The number of pixels is calculated as follows: Number of pixels = 96 x Number of inches.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 14 dynamic
   */
  interface PdfConfiguration {
    /**
     * Page Width.
     *
     * Value range: greater than or equal to 0. If the value is out of range, it is set to 0.
     *
     * Unit: inch.
     *
     * Recommended value: A4 paper page width 8.27 inches.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    width: number;

    /**
     * Page Height.
     *
     * Value range: greater than or equal to 0. If the value is out of range, it is set to 0.
     *
     * Unit: inch.
     *
     * Recommended value: A4 paper page height 11.69 inches.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    height: number;

    /**
     * Top margin.
     *
     * The value range is [0.0, half of the page height). If the value is not within the value range, set it to **0.0**.
     *
     * Unit: inch.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    marginTop: number;

    /**
     * Bottom margin.
     *
     * The value range is [0.0, half of the page height). If the value is not within the value range, set it to **0.0**.
     *
     * Unit: inch.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    marginBottom: number;

    /**
     * Right margin.
     *
     * The value range is [0.0, half of the page width). If the value is not within the value range, set it to **0.0**.
     *
     * Unit: inch.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    marginRight: number;

    /**
     * Left margin.
     *
     * The value range is [0.0, half of the page width). If the value is not within the value range, set it to **0.0**.
     *
     * Unit: inch.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    marginLeft: number;

    /**
     * Scale multiple.
     *
     * The value range is [0.0, 2.0]. If the value is less than 0.0, set it to **0.0**. If the value is greater than 2.
     * 0, set it to **2.0**.
     *
     * Default value: **1.0**
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    scale?: number;

    /**
     * Whether to print the background color. The value **true** means to print the background color, and **false**
     * means the opposite.
     *
     * Default value: **false**.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    shouldPrintBackground?: boolean;
  }

  /**
   * Provides usage information of the Web SQL Database.
   *
   * @interface WebStorageOrigin [since 9 - 11]
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  interface WebStorageOrigin {
    /**
     * Index of the origin.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    origin: string;
    /**
     * Storage usage of the specified source.
     *
     * Unit: byte.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    usage: number;
    /**
     * Storage quota of the specified source.
     *
     * Unit: byte.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    quota: number;
  }

  /**
   * Describes the information about the resource request sent by the **Web** component.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  interface RequestInfo {
    /**
     * URL of the request.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    url: string;

    /**
     * Method of the request.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    method: string;

    /**
     * Form data in the request body.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    formData: string;
  }

  /**
   * Represents the current scrolling offset of a web page.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 13 dynamic
   */
  interface ScrollOffset {
    /**
     * Horizontal scroll offset of the web page. The value is the difference between the x-coordinate of the left edge
     * of the web page and the x-coordinate of the left edge of the Web component.
     *
     * When the web page is over-scrolled to the right, the value is negative.
     *
     * When the web page is not over-scrolled or is over-scrolled to the left, the value is 0 or positive.
     *
     * Unit: vp.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 13 dynamic
     */
    x: number;

    /**
     * Vertical scroll offset of the web page. The value is the difference between the y-coordinate of the top edge of
     * the web page and the y-coordinate of the top edge of the Web component.
     *
     * When the web page is over-scrolled downward, the value is negative.
     *
     * When the web page is not over-scrolled or is over-scrolled upward, the value is 0 or positive.
     *
     * Unit: vp.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 13 dynamic
     */
    y: number;
  }

  /**
   * Registers a one-time callback for web events of the specified type. Currently, only **webInited** is supported.
   * This callback is triggered when the Web engine initialization is complete.
   *
   * When the first **Web** component is loaded in an app, the Web engine is initialized, and the once() callback is not
   * triggered when other **Web** components are subsequently loaded in the same app. When the app destroys the last
   * **Web** component, if the first **Web** component is loaded again, the app re-enters the Web engine initialization
   * process.
   *
   * @param {string} type - Type of the Web event. Currently, only **"webInited"** (Web engine initialization complete)
   *     is supported.
   * @param {Callback<void>} callback - Callback invoked when the Web engine initialization is complete.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function once(type: string, callback: Callback<void>): void;

  /**
   * Implements a **WebStorage** object to manage the Web SQL database and HTML5 Web Storage APIs. All **Web**
   * components in an application share a **WebStorage** object.
   *
   * > **NOTE**
   * >
   * > - You must load the **Web** component before calling the APIs in **WebStorage**.
   * >
   * > - After the ArkWeb kernel is upgraded to M132, the Web SQL database management becomes invalid because the kernel
   * > discards Web SQL. For details about the ArkWeb kernel version, see
   * > [Constraints](docroot://web/web-component-overview.md#constraints).
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  class WebStorage {
    /**
     * Deletes all storage data used by JavaScript storage APIs, including the Web SQL Database and HTML5-supported Web
     * storage APIs.
     *
     * @param { boolean } incognito - Whether to delete all data in the Web SQL Database in incognito mode. The value
     *     **true** means to delete all data in the Web SQL Database in incognito mode, and **false** means the
     *     opposite.
     *     <br>Default value: **false**.
     *     <br>If **undefined** or **null** is passed, the value is **false**. [since 11]
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static deleteAllData(incognito?: boolean): void;

    /**
     * Deletes all data in the specified origin.
     *
     * @param { string } origin - Index of the origin, which is obtained through
     *     [getOrigins]{@link webview.WebStorage.getOrigins(callback: AsyncCallback<Array<WebStorageOrigin>>)}.
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
     * Obtains information about origins that are currently using the Web SQL Database and HTML5-supported Web Storage
     * APIs. This API uses a promise to return the result.
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
     * Obtains information about origins that are currently using the Web SQL Database and HTML5-supported Web Storage
     * APIs. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<Array<WebStorageOrigin>> } callback - Callback used to return the information about the
     *     origins.
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
     * Obtains the storage quota of an origin in the Web SQL Database and HTML5-supported Web Storage APIs, in bytes.
     * This API uses a promise to return the result.
     *
     * @param { string } origin - Index of the origin.
     * @returns { Promise<number> } Promise used to return the storage quota of the origin.
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
     * Obtains the storage quota of an origin in Web SQL Database and HTML5-supported Web Storage APIs, in bytes. This
     * API uses an asynchronous callback to return the result.
     *
     * @param { string } origin - Index of the origin.
     * @param { AsyncCallback<number> } callback - Storage quota of the origin.
     *     <br>**number** is a long integer ranging from -2,147,483,648 to 2,147,483,647.
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
     * Obtains the storage usage of an origin in the Web SQL Database and HTML5-supported Web Storage APIs, in bytes.
     * This API uses a promise to return the result.
     *
     * @param { string } origin - Index of the origin.
     * @returns { Promise<number> } Promise used to return the storage usage of the origin.
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
     * Obtains the storage usage of an origin in the Web SQL Database and HTML5-supported Web Storage APIs, in bytes.
     * This API uses an asynchronous callback to return the result.
     *
     * @param { string } origin - Index of the origin.
     * @param { AsyncCallback<number> } callback - Storage usage of the origin.
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
   * Implements a **WebDataBase** object.
   *
   * > **NOTE**
   * >
   * > - You must load the **Web** component before calling the APIs in **WebDataBase**.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  class WebDataBase {
    /**
     * Checks whether any saved HTTP authentication credentials exist. This API returns the result synchronously.
     *
     * @returns { boolean } Whether any saved HTTP authentication credentials exist.
     *     <br>**true** is returned if any saved HTTP authentication credentials exist; otherwise, **false** is
     *     returned.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static existHttpAuthCredentials(): boolean;

    /**
     * Deletes all HTTP authentication credentials saved in the cache. This API returns the result synchronously.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static deleteHttpAuthCredentials(): void;

    /**
     * Retrieves HTTP authentication credentials for a given host and realm. This API returns the result synchronously.
     *
     * @param { string } host - Host address of the HTTP authentication credential app, in the format of '
     *     www.example.com' or '192.168.1.1', excluding the protocol and port number.
     * @param { string } realm - Authentication realm of the HTTP authentication credential app, which indicates the
     *     scope or protection area for authentication under the same host. It is usually specified by the WWW-
     *     Authenticate header returned by the server.
     * @returns { Array<string> } Array of the matching user names and passwords is returned if the operation is
     *     successful; otherwise, an empty array is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static getHttpAuthCredentials(host: string, realm: string): Array<string>;

    /**
     * Saves HTTP authentication credentials for a given host and realm. This API returns the result synchronously.
     *
     * @param { string } host - Host of the HTTP authentication credential. Used to match the host corresponding to the
     *     credential.
     * @param { string } realm - Realm of the HTTP authentication credential. Used to match the authentication realm
     *     corresponding to the credential.
     * @param { string } username - Username for HTTP authentication, which serves as the identity for accessing
     *     protected resources.
     * @param { string } password - Password for HTTP authentication. Used with the username to complete authentication.
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
   * GeolocationPermissions is the geolocation permission management object for the Web component. It provides
   * management capabilities such as querying, authorizing, and deleting saved geolocation permission statuses in the
   * Web component. With GeolocationPermissions, an app can pre-authorize access for a specific origin before a web page
   * initiates a geolocation request, and can also proactively query or clear saved permission records without relying
   * on the pop-up authorization flow when a web page requests permission.
   *
   * GeolocationPermissions is suitable for scenarios where proactive management of Web component geolocation
   * permissions is required. For example, an app may want to pre-authorize trusted websites to access geolocation,
   * avoiding authorization prompts on each visit; or an app may need to clear geolocation permission records that are
   * no longer needed by the user. The following permissions are required for accessing geolocation:
   * ohos.permission.LOCATION, ohos.permission.APPROXIMATELY_LOCATION, and ohos.permission.LOCATION_IN_BACKGROUND. For
   * details about the permissions, see
   * [Development Guide for Location Permission Application](docroot://device/location/location-permission-guidelines.md).
   *
   * > **NOTE**
   * >
   * > - You must load the **Web** component before calling the APIs in **GeolocationPermissions**.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  class GeolocationPermissions {
    /**
     * Allows the specified origin to use the geolocation APIs. It is used to pre-authorize geolocation permission for
     * trusted websites to avoid repeated pop-ups, or to allow an app to proactively manage the geolocation
     * authorization of a specific origin.
     *
     * @param { string } origin - String of the specified origin.
     *     <br>The origin format must comply with the format defined in RFC 6454. An exception is thrown when a string
     *     that does not comply with the RFC 6454 format is input, with error code 17100011.
     * @param { boolean } incognito - The value **true** indicates that the specified origin is allowed to use
     *     geolocation in privacy mode, and **false** indicates that the specified origin is allowed to use geolocation
     *     in normal (non-privacy) mode.
     *     <br>Default value: **false**.
     *     <br>The value is **false** when null or undefined is input. [since 11]
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
     * Clears the geolocation permission status of the specified origin. It is used to revoke the geolocation
     * authorization of a specified website, or to provide an app with the ability to manage permissions by origin.
     *
     * @param { string } origin - String of the specified origin.
     *     <br>The origin format must comply with the format defined in RFC 6454. Throws an exception when a string that
     *     does not comply with the RFC 6454 format is input. Error code: 17100011.
     * @param { boolean } incognito - Whether to clear the geolocation permission status of the specified origin in
     *     privacy mode. The value **true** indicates clearing in privacy mode, and **false** indicates clearing in
     *     normal non-privacy mode.
     *     <br>Default value: **false**.
     *     <br>The value is **false** when null or undefined is input. [since 11]
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
     * Clears the geolocation permission status of all origins. It is used to revoke geolocation authorization in
     * batches in scenarios such as user logout or one-click clearing.
     *
     * @param { boolean } incognito - The value **true** indicates clearing the geolocation permission status of all
     *     origins in Privacy Mode, and **false** indicates clearing the geolocation permission status of all origins in
     *     Normal Mode.
     *     <br>Default value: **false**.
     *     <br>The value **false** is used when null or undefined is input. [since 11]
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static deleteAllGeolocation(incognito?: boolean): void;

    /**
     * Obtains the geolocation permission status of the specified origin. This API uses a promise to return the result.
     * It is used to query the geolocation authorization result of a specified website, such as displaying the
     * permission status on a settings page or verifying authorization before access.
     *
     * @param { string } origin - String of the specified origin.
     *     <br>The origin format must comply with the format defined in RFC 6454. An exception is thrown when a string
     *     that does not comply with the RFC 6454 format is input, with error code 17100011.
     * @param { boolean } incognito - Whether to obtain the geolocation permission status of the specified origin in
     *     privacy mode. The value **true** indicates obtaining in privacy mode, and **false** indicates obtaining in
     *     normal mode.
     *     <br>Default value: **false**.
     *     <br>An exception with error code 401 is thrown when null or undefined is input. [since 11]
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
     * Obtains the geolocation permission status of the specified origin. This API uses an asynchronous callback to
     * return the result. It is used to query the geolocation authorization result of a specified website, such as
     * displaying the permission status on a settings page or verifying authorization before access.
     *
     * @param { string } origin - String of the specified origin.
     *     <br>The origin format must comply with the format defined in RFC 6454. An exception is thrown when a non-
     *     conforming input string is input. Error code: 17100011.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the geolocation permission status of the
     *     specified origin.
     *     <br>If the operation is successful, the value **true** means that the geolocation permission is granted, and
     *     **false** means the opposite.
     *     <br>If the operation fails, the geolocation permission status of the specified origin is not found.
     * @param { boolean } incognito - The value **true** indicates to get the geolocation permission status of the
     *     specified origin in privacy mode, and **false** indicates to get it in normal mode.
     *     <br>Default value: **false**.
     *     <br>Throws an exception error with error code 401 when null or undefined is input. [since 11]
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
     * Obtains the geolocation permission status of all origins. This API uses a promise to return the result. It is
     * used to obtain a list of websites that have been granted geolocation permission, such as displaying on a privacy
     * settings page or batch management on a permission management page.
     *
     * @param { boolean } incognito - The value **true** indicates that all origin information of stored geolocation
     *     permission status is obtained in private mode, and **false** indicates that it is obtained in normal mode.
     *     <br>Default value: **false**.
     *     <br>Throws an exception error code 401 when null or undefined is passed in. [since 11]
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
     * Obtains the geolocation permission status of all origins. This API uses an asynchronous callback to return the
     * result. It is used to obtain a list of websites that have been granted geolocation permission, such as displaying
     * on a privacy settings page or batch management on a permission management page.
     *
     * @param { AsyncCallback<Array<string>> } callback - Callback invoked to return all origin information of stored
     *     geolocation permission statuses. The callback parameters include: error (error object, which is null when
     *     retrieval is successful) and origins (array of origin strings with stored geolocation permissions, where each
     *     element is an origin string that complies with the format defined in RFC 6454). When retrieval fails, error
     *     is the error object.
     * @param { boolean } incognito - Whether to obtain all origin information of stored geolocation permission statuses
     *     in privacy mode. The value **true** indicates privacy mode, and **false** indicates normal mode.
     *     <br>Default value: **false**.
     *     <br>Throws an exception error code 401 when null or undefined is passed in. [since 11]
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
   * Defines cookie-related fields.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  interface WebHttpCookie {
    /**
     * Domain names that can access the cookie.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    domain: string;

    /**
     * Path of the cookie.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    path: string;

    /**
     * Name of the cookie.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    name: string;

    /**
     * Value of the cookie.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    value: string;
    /**
     * Expiration time of the cookie. For details about the time format, see
     * [Date](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Date). If the time string passed in
     * does not conform to this format, the cookie setting does not take effect.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    expiresDate: string;

    /**
     * Whether the cookie is a session cookie.
     *
     * The value **true** indicates that the cookie is a session cookie, and **false** indicates the opposite.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    isSessionCookie: boolean;

    /**
     * Whether the cookie can be accessed only through HTTP requests.
     *
     * The value **true** means the cookie can be accessed only through HTTP, not through JavaScript; **false** means
     * the cookie can be accessed through JavaScript.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    isHttpOnly: boolean;

    /**
     * Whether the cookie can be sent only through HTTPS.
     *
     * The value **true** means the cookie can be sent only through HTTPS, not through HTTP; **false** means the cookie
     * can be sent through HTTP.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    isSecure: boolean;

    /**
     * Same-site policy of the cookie.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    samesitePolicy: WebHttpCookieSameSitePolicy;
  }

  /**
   * WebCookieManager is the cookie manager for Web components, providing global management capabilities for cookies in
   * Web components. With this class, developers can obtain, set, save, and clear cookies, as well as control cookie
   * permissions. All methods of this class are static, and all Web components in an app share a single WebCookieManager
   * instance. The cookie format complies with the [RFC6265](https://www.rfc-editor.org/info/rfc6265/) standard.
   *
   * When browsing web pages in Privacy Mode, data such as cookies and caches are not written to local persistent
   * storage. After the Web component in Privacy Mode is destroyed, this data is cleared and not retained.
   *
   * > **NOTE**
   * >
   * > - Static methods must be used on the user interface (UI) thread.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  class WebCookieManager {
    /**
     * Obtains all cookies. This API uses a promise to return the result.
     *
     * @param { boolean } incognito - {@code true} Gets all cookies in incognito context; {@code false} otherwise.
     * @returns { Promise<Array<WebHttpCookie>> } Promise used to obtain all cookies and their corresponding field
     *     values.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    static fetchAllCookies(incognito: boolean): Promise<Array<WebHttpCookie>>;

    /**
     * Obtains the cookie value of the specified URL.
     *
     * @param { string } url - URL for which the cookie is to be obtained. A complete URL is recommended.
     * @returns { string } Cookie value corresponding to the specified URL.
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
     * Obtains the cookie value of the specified URL.
     *
     * > **NOTE**
     * >
     * > - The system automatically deletes expired cookies. For data with the same key name, the new data overwrites
     * > the previous data.
     * >
     * > - To obtain a usable cookie value, you are advised to pass a complete URL to fetchCookieSync.
     * >
     * > - fetchCookieSync is used to obtain all cookie values. Each cookie value is separated by "; ", but a specific
     * > cookie value cannot be obtained individually.
     *
     * @param { string } url - URL for which the cookie is to be obtained. A complete URL is recommended.
     * @param { boolean } incognito - Whether to obtain the cookie in incognito mode. The value **true** means to obtain
     *     the cookie in incognito mode, and **false** means the opposite.
     *     <br>The default value is **false**.
     *     <br>If **undefined** or **null** is passed, error code **401** will be thrown.
     * @returns { string } Cookie value corresponding to the specified URL.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 26.1.0]
     * @atomicservice
     * @since 11 dynamic
     */
    static fetchCookieSync(url: string, incognito?: boolean): string;

    /**
     * Obtains the cookies corresponding to a specified URL. The optional parameter incognito specifies whether to
     * obtain cookies in Privacy Mode, and the optional parameter includePartitionedCookies specifies whether to obtain
     * first-party partitioned cookies.
     *
     * > **NOTE**
     * >
     * > - The system automatically deletes expired cookies. For data with the same key name, the new data overwrites
     * > the previous data.
     * >
     * > - To obtain a usable cookie value, you are advised to pass a complete URL to fetchCookieSync.
     * >
     * > - fetchCookieSync is used to obtain all cookie values. Each cookie value is separated by "; ", but a specific
     * > cookie value cannot be obtained individually.
     *
     * @param { string } url - URL of the cookie to obtain. A complete URL is recommended.
     * @param { boolean } [incognito] - Whether to obtain the in-memory cookies of the Web component in Privacy Mode.
     *     The value **true** indicates Privacy Mode, and **false** indicates Non-Privacy Mode.
     *     <br>Default value: **false**.
     *     <br>Passing **undefined** or **null** throws error code 401.
     * @param { boolean } [includePartitionedCookies] - Whether to allow obtaining first-party partitioned cookies. The
     *     value **true** indicates that first-party partitioned cookies are allowed, and **false** indicates that they
     *     are not allowed.
     *     <br>Default value: **false**.
     *     <br>Passing **undefined** or **null** throws error code 401.
     * @returns { string } Cookies corresponding to the specified URL.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    static fetchCookieSync(url: string, incognito?: boolean, includePartitionedCookies?: boolean): string;

    /**
     * Obtains the cookie value of a specified URL. This API uses a promise to return the result.
     *
     * @param { string } url - URL for which the cookie is to be obtained. It is recommended to use a complete URL.
     * @returns { Promise<string> } Promise used to return the result.
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
     * Obtains the cookie value of a specified URL. This API uses a promise to return the result.
     *
     * @param { string } url - URL for which the cookie is to be obtained. A complete URL is recommended.
     * @param { boolean } incognito - Whether to obtain the cookie in incognito mode. The value **true** means to obtain
     *     the cookie in incognito mode, and **false** means the opposite.
     * @returns { Promise<string> } Promise used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 14 dynamic
     */
    static fetchCookie(url: string, incognito: boolean): Promise<string>;

    /**
     * Obtains the cookies corresponding to a specified URL. The parameter incognito specifies whether to obtain cookies
     * in Privacy Mode, and the parameter includePartitionedCookies specifies whether to obtain first-party partitioned
     * cookies. This API uses a promise to return the result.
     *
     * @param { string } url - URL of the cookie to obtain. A complete URL is recommended.
     * @param { boolean } incognito - Whether to obtain the in-memory cookies of the Web component in Privacy Mode. The
     *     value **true** indicates Privacy Mode, and **false** indicates Non-Privacy Mode.
     *     <br>Passing **undefined** or **null** throws error code 401.
     * @param { boolean } includePartitionedCookies - Whether to allow obtaining first-party partitioned cookies. The
     *     value **true** indicates that first-party partitioned cookies are allowed, and **false** indicates that they
     *     are not allowed.
     *     <br>Passing **undefined** or **null** throws error code 401.
     * @returns { Promise<string> } Promise used to obtain the cookies corresponding to the specified URL.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    static fetchCookie(url: string, incognito: boolean, includePartitionedCookies: boolean): Promise<string>;

    /**
     * Obtains the cookie value of a specified URL. This API uses an asynchronous callback to return the result.
     *
     * @param { string } url - URL for which the cookie is to be obtained. A complete URL is recommended.
     * @param { AsyncCallback<string> } callback - Callback used to obtain the cookie.
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
     * Sets a cookie for the specified URL.
     *
     * @param { string } url - URL of the cookie to set. A complete URL is recommended.
     * @param { string } value - Cookie value to set.
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
     * Sets a cookie for the specified URL.
     *
     * > **NOTE**
     * >
     * > - In configCookieSync, you can specify a domain name in the URL so that in-page requests also carry the cookie.
     * >
     * > - Cookies are periodically saved to the disk every 30 seconds. You can also use
     * > [saveCookieAsync]{@link webview.WebCookieManager.saveCookieAsync(callback: AsyncCallback<void>)} for force
     * > storage.
     * >
     * > - The value parameter must follow the format of the Set-Cookie HTTP response header. It is a key-value pair in
     * > the form of "key=value", optionally followed by a cookie property list separated by "; " (for example, "key=
     * > value; Max-Age=100").
     * >
     * > - If a cookie with the same host, path, and name exists, it will be replaced by the new cookie. If the cookie
     * > to set has expired, it will not be stored. To set multiple cookies, call this method multiple times.
     * >
     * > - If configCookieSync is called twice or more to set cookies, each cookie set is separated by "; ".
     * >
     * > - If the specified value contains the "Secure" attribute, the URL must use the "https://" protocol.
     * >
     * > - To overwrite HttpOnly cookies, specify the HttpOnly attribute in the value.
     *
     * @param { string } url - URL of the cookie to set. A complete URL is recommended.
     * @param { string } value - Cookie value to set.
     * @param { boolean } incognito - Whether to set the cookies in incognito mode. The value **true** means to set the
     *     cookies in incognito mode, and **false** means the opposite.
     *     <br>The default value is **false**.
     *     <br>If **undefined** or **null** is passed, error code **401** will be thrown.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @throws { BusinessError } 17100005 - The provided cookie value is invalid. It must follow the format specified
     *     <br>in RFC 6265.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 26.1.0]
     * @atomicservice
     * @since 11 dynamic
     */
    static configCookieSync(url: string, value: string, incognito?: boolean): void;

    /**
     * Sets a single cookie value for a specified URL.
     *
     * > **NOTE**
     * >
     * > - In configCookieSync, you can specify a domain name in the URL so that in-page requests also carry the cookie.
     * >
     * > - Cookies are periodically saved to the disk every 30 seconds. You can also use
     * > [saveCookieAsync]{@link webview.WebCookieManager.saveCookieAsync(callback: AsyncCallback<void>)} for force
     * > storage.
     * >
     * > - The value parameter must follow the format of the Set-Cookie HTTP response header. It is a key-value pair in
     * > the form of "key=value", optionally followed by a cookie property list separated by "; " (for example, "key=
     * > value; Max-Age=100").
     * >
     * > - If a cookie with the same host, path, and name exists, it will be replaced by the new cookie. If the cookie
     * > to set has expired, it will not be stored. To set multiple cookies, call this method multiple times.
     * >
     * > - If configCookieSync is called twice or more to set cookies, each cookie set is separated by "; ".
     * >
     * > - If the specified value contains the "Secure" attribute, the URL must use the "https://" protocol.
     *
     * @param { string } url - URL of the cookie to set. A complete URL is recommended.
     * @param { string } value - Cookie value to set.
     * @param { boolean } incognito - Whether to set the cookies in incognito mode. The value **true** means to set the
     *     cookies in incognito mode, and **false** means the opposite.
     * @param { boolean } includeHttpOnly - Whether to overwrite cookies containing **HttpOnly**. The value **true**
     *     means to overwrite cookies containing **HttpOnly**, and **false** means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @throws { BusinessError } 17100005 - The provided cookie value is invalid. It must follow the format specified
     *     <br>in RFC 6265.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 26.1.0]
     * @since 14 dynamic
     */
    static configCookieSync(url: string, value: string, incognito: boolean, includeHttpOnly: boolean): void;

    /**
     * Sets a single cookie value for a specified URL. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > - In configCookie, you can specify a domain name in the URL so that in-page requests also carry the cookie.
     * >
     * > - Cookies are periodically saved to the disk every 30 seconds. You can also use
     * > [saveCookieAsync]{@link webview.WebCookieManager.saveCookieAsync(callback: AsyncCallback<void>)} for force
     * > storage.
     * >
     * > - The value parameter must follow the format of the Set-Cookie HTTP response header. It is a key-value pair in
     * > the form of "key=value", optionally followed by a cookie property list separated by "; " (for example, "key=
     * > value; Max-Age=100").
     * >
     * > - If a cookie with the same host, path, and name exists, it will be replaced by the new cookie. If the cookie
     * > to set has expired, it will not be stored. To set multiple cookies, call this method multiple times.
     * >
     * > - If configCookie is called twice or more to set cookies, each cookie set is separated by "; ".
     * >
     * > - If the specified value contains the "Secure" attribute, the URL must use the "https://" protocol.
     * >
     * > - To overwrite HttpOnly cookies, specify the HttpOnly attribute in the value.
     *
     * @param { string } url - URL of the cookie to set. A complete URL is recommended.
     * @param { string } value - Cookie value to set.
     * @returns { Promise<void> } Promise used to return the result.
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
     * Sets a single cookie value for a specified URL. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > - In configCookie, you can specify a domain name in the URL so that in-page requests also carry the cookie.
     * >
     * > - Cookies are periodically saved to the disk every 30 seconds. You can also use
     * > [saveCookieAsync]{@link webview.WebCookieManager.saveCookieAsync(callback: AsyncCallback<void>)} for force
     * > storage.
     * >
     * > - The value parameter must follow the format of the Set-Cookie HTTP response header. It is a key-value pair in
     * > the form of "key=value", optionally followed by a cookie property list separated by "; " (for example, "key=
     * > value; Max-Age=100").
     * >
     * > - If a cookie with the same host, path, and name exists, it will be replaced by the new cookie. If the cookie
     * > to set has expired, it will not be stored. To set multiple cookies, call this method multiple times.
     * >
     * > - If configCookie is called twice or more to set cookies, each cookie set is separated by "; ".
     * >
     * > - If the specified value contains the "Secure" attribute, the URL must use the "https://" protocol.
     *
     * @param { string } url - URL to which the cookie to set belongs. A complete URL is recommended.
     * @param { string } value - Cookie value to set.
     * @param { boolean } incognito - Whether to set the cookies in incognito mode. The value **true** means to set the
     *     cookies in incognito mode, and **false** means the opposite.
     * @param { boolean } includeHttpOnly - Whether to overwrite cookies containing **HttpOnly**. The value **true**
     *     means to overwrite cookies containing **HttpOnly**, and **false** means the opposite.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @throws { BusinessError } 17100005 - The provided cookie value is invalid. It must follow the format specified
     *     <br>in RFC 6265.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 26.1.0]
     * @since 14 dynamic
     */
    static configCookie(url: string, value: string, incognito: boolean, includeHttpOnly: boolean): Promise<void>;

    /**
     * Sets a single cookie value for a specified URL. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > - In configCookie, you can specify a domain name in the URL so that in-page requests also carry the cookie.
     * >
     * > - Cookies are periodically saved to the disk every 30 seconds. You can also use
     * > [saveCookieAsync]{@link webview.WebCookieManager.saveCookieAsync(callback: AsyncCallback<void>)} for force
     * > storage.
     * >
     * > - The value parameter must follow the format of the Set-Cookie HTTP response header. It is a key-value pair in
     * > the form of "key=value", optionally followed by a cookie property list separated by "; " (for example, "key=
     * > value; Max-Age=100").
     * >
     * > - If a cookie with the same host, path, and name exists, it will be replaced by the new cookie. If the cookie
     * > to set has expired, it will not be stored. To set multiple cookies, call this method multiple times.
     * >
     * > - If configCookie is called twice or more to set cookies, each cookie set is separated by "; ".
     * >
     * > - If the specified value contains the "Secure" attribute, the URL must use the "https://" protocol.
     * >
     * > - To overwrite HttpOnly cookies, specify the HttpOnly attribute in the value.
     *
     * @param { string } url - URL of the cookie to set. A complete URL is recommended.
     * @param { string } value - Cookie value to set.
     * @param { AsyncCallback<void> } callback - Callback used to return the result of setting the cookie.
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
     * Synchronously saves all cookies (that can be obtained through **fetchCookie** and need to be persisted) to the
     * disk.
     *
     * > **NOTE**
     * >
     * > - saveCookieSync is used to forcibly write cookies that need to be persisted to the disk. Session cookies are
     * > not persisted on PC/2-in-1 and tablet devices. Even if saveCookieSync is called, session cookies are not
     * > written to the disk.
     * >
     * > - saveCookieSync blocks the caller until the operation is complete, during which I/O operations may be
     * > performed.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15 dynamic
     */
    static saveCookieSync(): void;

    /**
     * Saves all cookies that can be obtained through fetchCookie and need to be persisted to the disk. This API uses a
     * promise to return the result.
     *
     * > **NOTE**
     * >
     * > - saveCookieAsync is used to forcibly write cookies that need to be persisted to the disk. Session cookies are
     * > not persisted on PC/2-in-1 and tablet devices. Even if saveCookieAsync is called, session cookies are not
     * > written to the disk.
     *
     * @returns { Promise<void> } Promise used to return the operation result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 26.1.0]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static saveCookieAsync(): Promise<void>;

    /**
     * Asynchronously saves all cookies (that can be obtained through **fetchCookie** and need to be persisted) to the
     * disk.
     *
     * > **NOTE**
     * >
     * > - saveCookieAsync is used to forcibly write cookies that need to be persisted to the disk. Session cookies are
     * > not persisted on PC/2-in-1 and tablet devices. Even if saveCookieAsync is called, session cookies are not
     * > written to the disk.
     *
     * @param { AsyncCallback<void> } callback - Callback used to indicate whether the cookie is saved successfully.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 26.1.0]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static saveCookieAsync(callback: AsyncCallback<void>): void;

    /**
     * Checks whether the **WebCookieManager** instance has the permission to send and receive cookies.
     *
     * @returns { boolean } Whether the **WebCookieManager** instance has the permission to send and receive cookies.
     *     <br>The value **true** indicates that the **WebCookieManager** instance has the permission to send and
     *     receive cookies, and **false** indicates the opposite.
     *     <br>Default value: **true**.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static isCookieAllowed(): boolean;

    /**
     * Sets whether the **WebCookieManager** instance has the permission to send and receive cookies.
     *
     * @param { boolean } accept - Whether to have the permission to send and receive cookies. The default value is
     *     **true**, indicating that the app has the permission to send and receive cookies. The value **false**
     *     indicates that the app does not have the permission to send and receive cookies.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 26.1.0]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static putAcceptCookieEnabled(accept: boolean): void;

    /**
     * Checks whether the **WebCookieManager** instance has the permission to send and receive third-party cookies.
     *
     * @returns { boolean } Whether the **WebCookieManager** instance has the permission to send and receive third-party
     *     cookies.
     *     <br>The value **true** indicates that the **WebCookieManager** instance has the permission to send and
     *     receive third-party cookies, and **false** indicates the opposite.
     *     <br>The default value is **false**.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static isThirdPartyCookieAllowed(): boolean;

    /**
     * Sets whether the **WebCookieManager** instance has the permission to send and receive third-party cookies.
     *
     * @param { boolean } accept - Whether to allow sending and receiving third-party cookies.
     *     <br>The value **true** means allowed, and **false** means not allowed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 26.1.0]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static putAcceptThirdPartyCookieEnabled(accept: boolean): void;

    /**
     * Checks whether cookies exist.
     *
     * @param { boolean } incognito - Whether to check for cookies in incognito mode. The value **true** means to check
     *     for cookies in incognito mode, and **false** means the opposite.
     *     <br>The default value is **false**.
     *     <br>If **undefined** or **null** is passed, **undefined** is returned. [since 11]
     * @returns { boolean } Whether cookies exist. The value **true** means that cookies exist, and **false** means the
     *     opposite.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static existCookie(incognito?: boolean): boolean;

    /**
     * Deletes all cookies.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.web.webview.WebCookieManager#clearAllCookiesSync
     */
    static deleteEntireCookie(): void;

    /**
     * Clears all cookies, including session cookies and persistent cookies. To clear only session cookies, use
     * [clearSessionCookieSync]{@link webview.WebCookieManager#clearSessionCookieSync}.
     *
     * @param { boolean } incognito - Whether to clear all cookies in incognito mode. The value **true** means to clear
     *     all cookies in incognito mode, and **false** means the opposite.
     *     <br>The default value is **false**.
     *     <br>If **undefined** or **null** is passed, cookies are not cleared.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 26.1.0]
     * @atomicservice
     * @since 11 dynamic
     */
    static clearAllCookiesSync(incognito?: boolean): void;

    /**
     * Clears all cookies, including session cookies and persistent cookies. This API uses a promise to return the
     * result. To clear only session cookies, use
     * [clearSessionCookie]{@link webview.WebCookieManager.clearSessionCookie()}.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    static clearAllCookies(): Promise<void>;

    /**
     * Clears all cookies, including session cookies and persistent cookies. This API uses an asynchronous callback to
     * return the result. To clear only session cookies, use
     * [clearSessionCookie]{@link webview.WebCookieManager.clearSessionCookie(callback: AsyncCallback<void>)}.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result, indicating whether all cookies are
     *     cleared successfully.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    static clearAllCookies(callback: AsyncCallback<void>): void;

    /**
     * Deletes all session cookies.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.web.webview.WebCookieManager#clearSessionCookieSync
     */
    static deleteSessionCookie(): void;

    /**
     * Deletes all session cookies.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 26.1.0]
     * @atomicservice
     * @since 11 dynamic
     */
    static clearSessionCookieSync(): void;

    /**
     * Clears all session cookies. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static clearSessionCookie(): Promise<void>;

    /**
     * Clears all session cookies. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback function used to return whether all session cookies are
     *     cleared successfully.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    static clearSessionCookie(callback: AsyncCallback<void>): void;

    /**
     * Sets whether to delay the initialization of the ArkWeb kernel. If this method is not called, the ArkWeb kernel is
     * not delayed by default.
     *
     * > **NOTE**
     * >
     * > - This API is a global static method. It must be called before using ArkWeb components and initializing the
     * > ArkWeb kernel. Otherwise, the setting does not take effect.
     * >
     * > - This API applies only to APIs that initialize CookieManager when called, such as other APIs of this class
     * > WebCookieManager. After this API is called and set to **true**, calling applicable APIs skips the
     * > initialization of the ArkWeb kernel when initializing CookieManager. You need to initialize the ArkWeb kernel
     * > separately afterwards.
     *
     * @param { boolean } lazy - Controls whether to delay the initialization of the web engine.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 dynamic
     */
    static setLazyInitializeWebEngine(lazy: boolean): void;
  }

  /**
   * Enumerates the data types supported by the [WebMessagePort]{@link webview.WebMessagePort} API.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enum WebMessageType {
    /**
     * Unsupported data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    NOT_SUPPORT = 0,

    /**
     * String type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    STRING = 1,

    /**
     * Number type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    NUMBER = 2,

    /**
     * Boolean type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    BOOLEAN = 3,

    /**
     * Raw binary data buffer.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    ARRAY_BUFFER = 4,

    /**
     * Array type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    ARRAY = 5,

    /**
     * Error object type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    ERROR = 6
  }

  /**
   * Implements a **WebMessageExt** object that received and sent by the [WebMessagePort]{@link webview.WebMessagePort}
   * API.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  class WebMessageExt {
    /**
     * Obtains the type of the data object. For details about the sample code, see
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}.
     *
     * @returns { WebMessageType } Data types supported by the [webMessagePort]{@link webview.WebMessagePort} API.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getType(): WebMessageType;

    /**
     * Obtains string-type data of the data object. For details about the sample code, see
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}.
     *
     * @returns { string } Data of the string type.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getString(): string;

    /**
     * Obtains number-type data of the data object. For details about the sample code, see
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}.
     *
     * @returns { number } Data of the number type.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getNumber(): number;

    /**
     * Obtains Boolean-type data of the data object. For details about the sample code, see
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}.
     *
     * @returns { boolean } Data of the Boolean type.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getBoolean(): boolean;

    /**
     * Obtains raw binary data of the data object. For details about the sample code, see
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}.
     *
     * @returns { ArrayBuffer } Raw binary data.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getArrayBuffer(): ArrayBuffer;

    /**
     * Obtains array-type data of the data object. For details about the sample code, see
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}.
     *
     * @returns { Array<string | number | boolean> } Data of the array type.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getArray(): Array<string | number | boolean>;

    /**
     * Obtains the error-object-type data of the data object. For details about the sample code, see
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}.
     *
     * @returns { Error } Data of the error object type.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getError(): Error;

    /**
     * Sets the type for the data object. For details about the sample code, see
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}.
     *
     * @param { WebMessageType } type - Data types supported by the [webMessagePort]{@link webview.WebMessagePort} API.
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
     * Sets the string-type data of the data object. For details about the sample code, see
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}.
     *
     * @param { string } message - String type.
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
     * Sets the number-type data of the data object. For details about the sample code, see
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}.
     *
     * @param { number } message - Data of the number type.
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
     * Sets the Boolean-type data for the data object. For details about the sample code, see
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}.
     *
     * @param { boolean } message - Data of the Boolean type.
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
     * Sets the raw binary data for the data object. For details about the sample code, see
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}.
     *
     * @param { ArrayBuffer } message - Raw binary data.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    setArrayBuffer(message: ArrayBuffer): void;

    /**
     * Sets the array-type data for the data object. For details about the sample code, see
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}.
     *
     * @param { Array<string | number | boolean> } message - Data of the array type.
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
     * Sets the error-object-type data for the data object. For details about the sample code, see
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}.
     *
     * @param { Error } message - Data of the error object type.
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
   * Defines the data types supported by {@link onMessageEventExt}.
   *
   * @unionmember { ArrayBuffer } String type. [since 11]
   * @unionmember { string } Binary type. [since 11]
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 9 dynamic
   */
  type WebMessage = ArrayBuffer | string;
  /**
   * WebMessagePort is a message port interface in the Web component used for bidirectional communication between the
   * app side (ArkTS) and the HTML5 side (JavaScript). A pair of associated ports is created through
   * createWebMessagePorts, with one port sent to the HTML5 side and the other retained on the app side, enabling cross-
   * runtime message passing. WebMessagePort supports two message protocols: the basic protocol uses WebMessage as the
   * message carrier (postMessageEvent/onMessageEvent), and the extended protocol uses WebMessageExt to support richer
   * data types (postMessageEventExt/onMessageEventExt).
   *
   * @interface WebMessagePort [since 9 - 11]
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  interface WebMessagePort {
    /**
     * Whether to use the extended interface such as postMessageEventExt and onMessageEventExt when creating a
     * WebMessagePort.
     *
     * The value true means to use the extended interface, and false means the opposite.
     *
     * Default value: false.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    isExtentionType?: boolean;

    /**
     * Closes this message port when messages do not need to be sent. Before calling this method, call
     * [createWebMessagePorts]{@link webview.WebviewController#createWebMessagePorts} to create a message port.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    close(): void;

    /**
     * Sends a message of the [WebMessage]{@link webview.WebMessage} type to the HTML5 side. The
     * [onMessageEvent]{@link webview.WebMessagePort.onMessageEvent(callback: (result: WebMessage) => void)} API must be
     * invoked first. Otherwise, the message fails to be sent. For details about the sample code, see
     * [postMessage]{@link webview.WebviewController#postMessage}.
     *
     * @param { WebMessage } message - Message to send.
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
     * Registers a callback on the application message port to receive messages of the
     * [WebMessage]{@link webview.WebMessage} type from the HTML5 side. For details about the sample code, see
     * [postMessage]{@link webview.WebviewController#postMessage}.
     *
     * @param { function } callback - Message received.
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
     * Sends a message of the [WebMessageType]{@link webview.WebMessageType} type to the HTML5 side. You must call
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}
     * first. Otherwise, the message fails to be sent. For the complete sample code, see
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}.
     *
     * @param { WebMessageExt } message - Message to send.
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
     * Registers a callback on the application message port to receive messages of the
     * [WebMessageType]{@link webview.WebMessageType} type from the HTML5 side.
     *
     * @param { function } callback - Message received.
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
   * Describes a historical page record.
   *
   * @interface HistoryItem [since 9 - 11]
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  interface HistoryItem {
    /**
     * **PixelMap** object of the icon on the historical page.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    icon: image.PixelMap;

    /**
     * URL of the historical page.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    historyUrl: string;

    /**
     * Original URL of the historical page.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    historyRawUrl: string;

    /**
     * Title of the historical page.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    title: string;
  }

  /**
   * BackForwardList is an interface in the ArkWeb framework for accessing the browsing history list of a Web component.
   * It is obtained through the [getBackForwardEntries]{@link webview.WebviewController#getBackForwardEntries} method.
   * This interface provides read-only access to the page navigation history. Developers can obtain basic information
   * about the current history list (the current index and the total number of history entries), as well as detailed
   * information about a specific history item by index.
   *
   * @interface BackForwardList [since 9 - 11]
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  interface BackForwardList {
    /**
     * Index of the current page in the backforward list.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    currentIndex: number;

    /**
     * Number of history records in the history list. A maximum of 50 records are saved. When the limit is exceeded, the
     * earliest record is overwritten.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    size: number;

    /**
     * Obtains the information of the history item at the specified index in the history list. A BackForwardList
     * instance must be obtained first through the
     * [getBackForwardEntries]{@link webview.WebviewController#getBackForwardEntries} method.
     *
     * @param { number } index - Index of the history item in the backforward list.
     * @returns { HistoryItem } History item.
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
   * Provides information used to obtain a full drawing result.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  interface SnapshotInfo {
    /**
     * ID of the snapshot, used to identify this full rendering request so that the corresponding full rendering data
     * can be matched in the callback result. If not passed, no ID is specified and the system handles it automatically.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    id?: string;

    /**
     * Size of the Web rendering. The maximum supported size is 16000px * 16000px. The supported length units are px,
     * vp, and %. The length units passed in different parameters must be consistent; otherwise, the rendering size may
     * not meet expectations. The default unit is vp. If the specified size exceeds the specification, the maximum
     * specification is returned. If not passed, the rendering is performed at the actual size of the screenshot area. (
     * Example: width:'100px', height:'200px'. Or width:'20%', height:'30%'. If only a number is specified, the unit is
     * vp.)
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    size?: SizeOptions;
  }

  /**
   * Represents a full drawing result.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  interface SnapshotResult {
    /**
     * Snapshot ID.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    id?: string;

    /**
     * Status of the snapshot. The value **true** indicates normal, and **false** indicates failure. If obtaining the
     * full rendering result fails, the width and height of the returned size are both 0, and imagePixelMap is empty.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    status?: boolean;

    /**
     * Actual size rendered by Web. The SizeOptions object contains the width and height attributes, both of which are
     * of the number type, in vp.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    size?: SizeOptions;

    /**
     * The **image.PixelMap** format.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    imagePixelMap?: image.PixelMap;
  }
  /**
   * Enumerates the data types of the results returned after the
   * [runJavaScriptExt]{@link webview.WebviewController#runJavaScriptExt(script: string | ArrayBuffer, callback: AsyncCallback<JsMessageExt>)}
   * API is executed.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enum JsMessageType {
    /**
     * Unsupported data type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    NOT_SUPPORT = 0,

    /**
     * String type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    STRING = 1,

    /**
     * Number type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    NUMBER = 2,

    /**
     * Boolean type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    BOOLEAN = 3,

    /**
     * Raw binary data buffer.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    ARRAY_BUFFER = 4,

    /**
     * Array type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    ARRAY = 5
  }

  /**
   * JsMessageExt is a data class in the ArkWeb framework used to encapsulate the result returned after executing a
   * JavaScript script through the
   * [runJavaScriptExt]{@link webview.WebviewController#runJavaScriptExt(script: string | ArrayBuffer, callback: AsyncCallback<JsMessageExt>)}
   * API. Unlike the conventional runJavaScript API, runJavaScriptExt supports richer return value types, and
   * JsMessageExt provides a type-safe way to access these diverse return results. Developers first obtain the data type
   * through the getType method of JsMessageExt, and then call the corresponding get method to retrieve the specific
   * value.
   *
   * JsMessageExt supports parsing of multiple JavaScript return value types: string (getString), number (getNumber),
   * boolean (getBoolean), raw binary data (getArrayBuffer), array (getArray), and more. When the obtained data type
   * does not match the actual stored type (for example, calling getString on a numeric type), error code 17100014 is
   * thrown. Starting from API version 22, JsMessageExt also provides the getErrorDescription method for obtaining
   * exception information during JavaScript execution. If the return value is of the object type, it is uniformly
   * formatted into a description string.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  class JsMessageExt {
    /**
     * Obtains the type of the data object. For details about the sample code, see
     * [runJavaScriptExt]{@link webview.WebviewController#runJavaScriptExt(script: string | ArrayBuffer, callback: AsyncCallback<JsMessageExt>)}.
     *
     * @returns { JsMessageType } Data type of the result returned after the
     *     [runJavaScriptExt]{@link webview.WebviewController#runJavaScriptExt(script: string | ArrayBuffer, callback: AsyncCallback<JsMessageExt>)}
     *     API is executed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getType(): JsMessageType;

    /**
     * Obtains string-type data of the data object. For details about the sample code, see
     * [runJavaScriptExt]{@link webview.WebviewController#runJavaScriptExt(script: string | ArrayBuffer, callback: AsyncCallback<JsMessageExt>)}.
     *
     * @returns { string } String-type data obtained after the script of the runJavaScriptExt API is executed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getString(): string;

    /**
     * Obtains number-type data of the data object. For details about the sample code, see
     * [runJavaScriptExt]{@link webview.WebviewController#runJavaScriptExt(script: string | ArrayBuffer, callback: AsyncCallback<JsMessageExt>)}.
     *
     * @returns { number } Numeric data obtained after the script of the runJavaScriptExt API is executed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getNumber(): number;

    /**
     * Obtains Boolean-type data of the data object. For details about the sample code, see
     * [runJavaScriptExt]{@link webview.WebviewController#runJavaScriptExt(script: string | ArrayBuffer, callback: AsyncCallback<JsMessageExt>)}.
     *
     * @returns { boolean } Boolean data obtained after the script of the runJavaScriptExt API is executed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getBoolean(): boolean;

    /**
     * Obtains raw binary data of the data object. For details about the sample code, see
     * [runJavaScriptExt]{@link webview.WebviewController#runJavaScriptExt(script: string | ArrayBuffer, callback: AsyncCallback<JsMessageExt>)}.
     *
     * @returns { ArrayBuffer } Raw binary data obtained after the execution of the runJavaScriptExt interface script.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getArrayBuffer(): ArrayBuffer;

    /**
     * Obtains array-type data of the data object. For details about the sample code, see
     * [runJavaScriptExt]{@link webview.WebviewController#runJavaScriptExt(script: string | ArrayBuffer, callback: AsyncCallback<JsMessageExt>)}.
     *
     * @returns { Array<string | number | boolean> } Array data obtained after the script of the runJavaScriptExt API is
     *     executed.
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getArray(): Array<string | number | boolean>;

    /**
     * Obtains the error information about the JavaScript execution. For details about the sample code, see
     * [runJavaScriptExt]{@link webview.WebviewController#runJavaScriptExt(script: string | ArrayBuffer, callback: AsyncCallback<JsMessageExt>)}.
     *
     * @returns { string | null } If an exception occurs during JavaScript script execution, or the return value is of
     *     the object type, the system formats the exception information or object into the string "Not support type: <{
     *     exception | object}>". The string length does not exceed 2048 characters, and the excess part will be
     *     truncated. If the object contains members of the callback type, they will be automatically ignored during
     *     serialization. In all other cases, the interface returns null.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 dynamic
     */
    getErrorDescription(): string | null;
  }

  /**
   * Enumerates the ArkWeb renderer subprocess mode types. You can select the appropriate mode based on the app's
   * requirements for memory usage and renderer process isolation.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enum RenderProcessMode {
    /**
     * ArkWeb single render subprocess mode. In this mode, multiple **Web** components share one render subprocess.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    SINGLE = 0,

    /**
     * ArkWeb multi-render subprocess mode. In this mode, each **Web** component has a rendering subprocess.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    MULTIPLE = 1
  }

  /**
   * PrefetchOptions is a configuration class in the ArkWeb framework for customizing web page prefetch behavior. It is
   * set through the prefetch-related API of
   * [prefetchPage]{@link webview.WebviewController#prefetchPage(url: string, additionalHeaders?: Array<WebHeader>, prefetchOptions?: PrefetchOptions)},
   * and the customizable settings include whether to ignore Cache-Control: no-store in the response header and the
   * minimum time interval between two prefetches.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  class PrefetchOptions {
    /**
     * Sets whether to ignore Cache-Control: no-store in the response header.
     *
     * If set to true, the header is ignored; if set to false, it is not ignored.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    ignoreCacheControlNoStore: boolean;

    /**
     * Sets the minimum time interval between two web page prefetches.
     *
     * During each prefetch, the interval from the last prefetch is calculated. If it is less than the set value, the
     * current prefetch is canceled.
     *
     * Value range: [0, 500].
     *
     * If set to a negative number, the default value 0 is used.
     *
     * Unit: ms
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    minTimeBetweenPrefetchesMs: number;

    /**
     * A constructor used to create a **PrefetchOptions** instance.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    constructor();
  }

  /**
   * Represents a configuration object for precompiling JavaScript in the **Web** component to generate bytecode cache,
   * which is designed to control the updating of the bytecode cache.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  interface CacheOptions {
    /**
     * Response headers returned by the server when requesting this JavaScript file. ETag or Last-Modified is used to
     * identify the file version and determine whether an update is needed.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    responseHeaders: Array<WebHeader>;
  }

  /**
   * Enumerates the offline resource types corresponding to the [OfflineResourceMap]{@link webview.OfflineResourceMap}
   * object.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  enum OfflineResourceType {
    /**
     * Resource of the image type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    IMAGE,

    /**
     * Resource of the CSS type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    CSS,

    /**
     * JavaScript resources loaded via the <script src="" /> tag.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    CLASSIC_JS,

    /**
     * JavaScript resources loaded via the <script src="" type="module" /> tag.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    MODULE_JS
  }

  /**
   * Implements an **OfflineResourceMap** object, which is used to set information related to local offline resources
   * that will be injected into memory cache through the
   * [injectOfflineResources]{@link webview.WebviewController#injectOfflineResources} API. The ArkWeb engine will
   * generate resource caches based on this information and control the validity period of the cache accordingly.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  interface OfflineResourceMap {
    /**
     * List of network addresses corresponding to the local offline resources. The first item in the list serves as the
     * origin of the resources. If only one network address is provided, it is used as the origin of the resources. The
     * URL supports only HTTP or HTTPS and cannot exceed 2048 characters. If the preceding restrictions are not met, the
     * resource injection fails.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    urlList: Array<string>;

    /**
     * Content of a local offline resource.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    resource: Uint8Array;

    /**
     * HTTP response headers corresponding to the resources. The Cache-Control or Expires response header provided is
     * used to control the validity period of the resources in the memory cache. If not provided, the default validity
     * period is 86400 seconds, that is, 1 day. The Content-Type response header provided is used to define the MIME
     * type of the resources. MODULE_JS must provide a valid MIME type. Other types may not provide one, and there is no
     * default value. A non-standard MIME type will cause the memory cache to become invalid. If the script tag in the
     * service web page uses the crossorigin attribute, the Cross-Origin response header must be set to **anonymous** or
     * **use-credentials** in the responseHeaders parameter of this API. Otherwise, the memory cache may become invalid.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    responseHeaders: Array<WebHeader>;

    /**
     * Type of the resources. Currently, only JavaScript, image, and CSS resources are supported.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    type: OfflineResourceType;
  }

  /**
   * Enumerates the scroll types for [setScrollable]{@link webview.WebviewController#setScrollable}.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  enum ScrollType {
    /**
     * Scroll event, which represents web page scrolling generated through the touchscreen, touchpad, or mouse wheel.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    EVENT = 0
  }

  /**
   * Binding state between WebviewController and the Web component.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  enum ControllerAttachState {
    /**
     * Unattached.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    UNATTACHED = 0,

    /**
     * Attached.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    ATTACHED = 1
  }

  /**
   * Enumerates the error codes of the blankless loading.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  enum WebBlanklessErrorCode {
    /**
     * Operation successful.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    SUCCESS = 0,

    /**
     * Unknown error or internal status error.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    ERR_UNKNOWN = -1,

    /**
     * Invalid parameter.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    ERR_INVALID_PARAM = -2,

    /**
     * **WebViewController** is not bound to any component.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    ERR_CONTROLLER_NOT_INITED = -3,

    /**
     * No key value is matched.
     * [setBlanklessLoadingWithKey]{@link @ohos.web.webview:webview.WebviewController#setBlanklessLoadingWithKey} must
     * be used with [getBlanklessInfoWithKey]{@link @ohos.web.webview:webview.WebviewController#getBlanklessInfoWithKey}
     * and their key values must be the same. Otherwise, this error code is returned.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    ERR_KEY_NOT_MATCH = -4,

    /**
     * The similarity is low, and the system determines that the scene change is too large. As a result, the
     * [setBlanklessLoadingWithKey]{@link @ohos.web.webview:webview.WebviewController#setBlanklessLoadingWithKey} API
     * does not enable frame interpolation.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    ERR_SIGNIFICANT_CHANGE = -5,

    /**
     * The frame interpolation duration set in [BlanklessLoadingParam]{@link webview.BlanklessLoadingParam} is out of
     * range.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    ERR_DURATION_OUT_OF_RANGE = -6,

    /**
     * The historical frame expiration time set in [BlanklessLoadingParam]{@link webview.BlanklessLoadingParam} is out
     * of range.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    ERR_EXPIRATION_TIME_OUT_OF_RANGE = -7
  }

  /**
   * Frame interpolation status of blankless loading.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  enum BlanklessFrameInterpolationState {
    /**
     * Frame interpolation succeeded.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    FRAME_INTERPOLATION_SUCCEEDED = 0,

    /**
     * Frame interpolation failed.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    FRAME_INTERPOLATION_FAILED = 1,

    /**
     * The frame interpolation is removed.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    FRAME_INTERPOLATION_REMOVED = 2
  }

  /**
   * For ArkWeb kernel versions, see
   * [Adaptation Guide for the M114 Kernel on OpenHarmony 6.0](https://gitcode.com/openharmony-tpc/chromium_src/blob/master/web/ReleaseNote/CompatibleWithLegacyWebEngine_6.0.md)
   * and
   * [Adaptation Guide for the M132 Kernel on OpenHarmony 7.0](https://gitcode.com/openharmony-tpc/chromium_src/blob/master/web/ReleaseNote/CompatibleWithLegacyWebEngine_7.0.md).
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  enum ArkWebEngineVersion {
    /**
     * System default kernel (see [Constraints](docroot://web/web-component-overview.md#constraints)). The default
     * kernel is M132 for OpenHarmony 6.0 and M144 for OpenHarmony 7.0.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    SYSTEM_DEFAULT = 0,

    /**
     * Legacy kernel of OpenHarmony 6.0. Developers can select this legacy kernel. If this kernel does not exist on the
     * system version, the setting does not take effect and the system default kernel is used.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    M114 = 1,

    /**
     * Evergreen kernel of OpenHarmony 6.0 (legacy kernel of OpenHarmony 7.0). M132 is the default kernel of OpenHarmony
     * 6.0. If this kernel does not exist on the system version, the setting does not take effect and the system default
     * kernel is used.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    M132 = 2,

    /**
     * Evergreen kernel of OpenHarmony 7.0. M144 is the default kernel of OpenHarmony 7.0. If this kernel does not exist
     * on the system version, the setting does not take effect and the system default kernel is used.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    M144 = 3,

    /**
     * The latest kernel (evergreen kernel) of the system. Developers can select this kernel to always use the latest
     * kernel on each system version.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    ARKWEB_EVERGREEN = 99999
  }

  /**
   * Prediction information about the first screen loading of the page, mainly including the predicted first screen
   * similarity, predicted first screen loading duration, and predicted error code. The app determines whether to
   * enable the White-Screen-Free Loading frame interpolation scheme based on this information.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  interface BlanklessInfo {
    /**
     * Error code of blankless loading. For details, see
     * [WebBlanklessErrorCode]{@link @ohos.web.webview:webview.WebBlanklessErrorCode}.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    errCode: WebBlanklessErrorCode;

    /**
     * Similarity of the first screen. The similarity is calculated based on the first screen content of historical
     * loads. The value ranges from [0, 1.0], where **1.0** indicates a complete match. The closer the value is to 1,
     * the higher the similarity. This value has a lagging nature, meaning the similarity of a local load will only be
     * reflected in the next load. It is recommended that the app does not enable the white-screen-free loading frame
     * insertion solution when the similarity is below a specific threshold (for example, 0.33).
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    similarity: number;

    /**
     * Predicts the loading time of the current load based on the first screen loading time of historical loads.
     * Unit: ms. Value range: greater than 0.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    loadingTime: number;
  }

  /**
   * White-Screen-Free Loading frame interpolation status information, which is used as the callback input parameter in
   * [BlanklessLoadingParam]{@link webview.BlanklessLoadingParam}.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  interface BlanklessFrameInterpolationInfo {
    /**
     * Key value that uniquely identifies the page where the frame is interpolated. The value is the same as the key
     * value of [setBlanklessLoadingWithParams]{@link webview.WebviewController#setBlanklessLoadingWithParams}.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    key: string;

    /**
     * Current frame interpolation state.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    state: BlanklessFrameInterpolationState;

    /**
     * Time when the frame interpolation is successful, fails, or removed, in ms (UTC time).
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    timestamp: number;

    /**
     * Reason for the frame interpolation failure.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    reason: string;
  }

  /**
   * Loading parameters of the White-Screen-Free Loading frame interpolation scheme.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  interface BlanklessLoadingParam {
    /**
     * Whether to enable the white-screen-free loading frame interpolation scheme.
     *
     * The value **true** means enabled, and **false** means disabled.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    enable: boolean;

    /**
     * Duration of frame interpolation.
     *
     * The value range is the union of **[200, 2000]** and **{0}**, where **0** indicates that the duration is not
     * specified and the system automatically sets a proper duration.
     *
     * Unit: ms.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    duration?: number;

    /**
     * Expiration time of the historical frame, in UTC time.
     *
     * **T** indicates the current UTC time. If the expiration time is 30 days, the value is 2592000000 ms. The value
     * range is the union of **(T, T + 2592000000]** and **{0}**. **0** indicates that the expiration time is not
     * specified and the default expiration time (7 days) is used.
     *
     * Unit: ms.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    expirationTime?: number;

    /**
     * Callback invoked after frame interpolation succeeds, fails, or is removed.
     *
     * This takes effect only when **enable** is **true**. This parameter is optional. If not set, no operation is
     * performed.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    callback?: Callback<BlanklessFrameInterpolationInfo>;
  }

  /**
   * Security feature option configuration. This class provides a set of boolean switches for controlling the enablement
   * status of specific Web features in the ArkWeb kernel. By disabling non-essential high-risk modules (such as JIT
   * compilation, WebAssembly, and WebGL), you can reduce the attack surface and lower potential exploit risks. All
   * properties are optional, with the default value false (not disabled). Configure them based on your specific
   * business scenarios.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface SecurityParams {
    /**
     * Whether to disable JIT compilation. true means disabled, and false means the opposite. Default value: false.
     * To optimize performance, the V8 engine compiles hot code into machine code. Most browser vulnerabilities
     * (such as Type Confusion) are exploited by manipulating the JIT optimization process. Disabling it does not affect
     * web page functions, but the performance of complex JavaScript code decreases by about 17%. It is recommended that
     * this feature be disabled if possible. For pure display and non-computing-intensive pages (such as news and
     * documents), it is recommended that this feature not be disabled.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    disableJITCompilation?: boolean;
    /**
     * Whether to disable WebAssembly. true means disabled, and false means the opposite. Default value: false.
     * The compiled machine code is executed in WASM, which is prone to memory security vulnerabilities. It is
     * recommended that this feature be disabled if possible. For pure display and non-computing-intensive pages
     * (such as news and documents), it is recommended that this feature be disabled. Disabling it may affect web
     * page functions that depend on video encoding and decoding and complex encryption.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    disableWebAssembly?: boolean;
    /**
     * Whether to disable WebGL. true means disabled, and false means the opposite. Default value: false.
     * WebGL allows JavaScript to directly invoke the GPU driver for rendering. Attackers may exploit underlying
     * driver vulnerabilities to implement sandbox escape or remote code execution. In addition, WebGL may be used
     * for user fingerprint identification attacks. Disabling it prevents 3D rendering and causes some 2D canvases
     * to fall back to CPU rendering, which may result in a lower frame rate.It is recommended that this feature be
     * disabled for sensitive services such as financial payment, instant messaging, and government systems.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    disableWebGL?: boolean;
    /**
     * Whether to disable the PDF viewer. true means disabled, and false means the opposite. Default value: false.
     * The built-in PDF parsing engine is prone to vulnerabilities when parsing complex binary formats and embedded
     * scripts. Attackers can construct special PDF files to exploit font parsing or memory corruption vulnerabilities
     * to control the main process of the app. Disabling it prevents PDF loading in ArkWeb. It is recommended that
     * this feature be disabled for non-document office apps and users be guided to use external
     * apps to open PDF files.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    disablePDFViewer?: boolean;
    /**
     * Whether to disable MathML. true means disabled, and false means the opposite. Default value: false.
     * MathML is an outdated rendering module in the kernel and often lacks sufficient automated auditing
     * and fuzzing. It is prone to becoming a stepping stone for side-channel attacks or attribute injection XSS.
     * Disabling it prevents proper parsing and rendering of <math> tag content, which may affect formula layout
     * on a small number of science websites that have not been adapted for JavaScript. Disabling it is recommended.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    disableMathML?: boolean;
    /**
     * Whether to disable Service Worker. true means disabled, and false means the opposite. Default value: false.
     * Service Worker has persistent control and can reside in the background of web pages and intercept network
     * requests.  If a web page has an XSS vulnerability, attackers can exploit it to install malicious Service
     * Worker and launch man-in-the-middle (MITM) attacks. Disabling it disables offline access, prevents Web
     * push notifications from working, and removes preloading capabilities. It is recommended that this feature
     * be disabled in industries that have high requirements on session freshness, such as banking and securities.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    disableServiceWorker?: boolean;
    /**
     * Whether to disable non-proxy UDP for WebRTC. true means disabled, and false means the opposite. Default
     * value: false. When WebRTC is enabled, it may allow malicious traffic to bypass the proxy tunnel, exposing
     * the user's real physical IP address and resulting in privacy leakage. Disabling it forces all traffic
     * through the TCP proxy, increasing latency and potentially preventing connection establishment for features
     * such as video calls and real-time intercom. It is recommended that this feature be disabled in scenarios
     * such as anonymous social networking, global services, and forcible proxy.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    disableNonProxyUDP?: boolean;
  }

  /**
   * WebviewController is the core controller for various behaviors of the **Web** component, providing extensive
   * functions such as page loading and navigation control, JavaScript interaction, lifecycle management, scroll
   * control, page zoom and content search, message port communication, and cache and certificate management. A
   * WebviewController object can control only one **Web** component, and methods on WebviewController (except static
   * methods) can be called only after the **Web** component is bound to WebviewController.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  class WebviewController {
    /**
     * Constructs a **WebviewController** object.
     *
     * > **NOTE**
     * >
     * > - No parameter: new webview.WebviewController() indicates an empty constructor. No parameter is required when
     * > the C API is not used.
     * >
     * > - Parameter is a valid string: new webview.WebviewController("xxx"), used for developers to distinguish
     * > multiple instances and call methods under the corresponding instance.
     * >
     * > - Empty parameter: new webview.WebviewController("") or new webview.WebviewController(undefined). In this
     * > scenario, the parameter is meaningless and cannot distinguish multiple instances. **undefined** is returned
     * > directly, and developers need to check whether the return value is normal.
     * >
     * > After the **Web** component is destroyed, it is unbound from WebViewController. Subsequently, calling non-
     * > static methods of WebviewController will throw a
     * > [17100001](docroot://reference/apis-arkweb/errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component)
     * > exception. Pay attention to the call timing and catch exceptions to prevent abnormal process exit.
     *
     * @param { string } [webTag] - Name of the **Web** component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    constructor(webTag?: string);

    /**
     * Sets the ArkWeb kernel version. If the system does not support the specified version, the setting does not take
     * effect and the system default kernel is used (see
     * [Constraints](docroot://web/web-component-overview.md#constraints)). This API is a global static API and must be
     * executed before **initializeWebEngine** is called. If any **Web** component has been loaded, the setting does not
     * take effect. Typical use case: when features or compatibility requirements of a specific kernel version are
     * needed, you can switch to the corresponding kernel version.
     *
     * > **NOTE**
     * >
     * > - **setActiveWebEngineVersion** cannot be called in an asynchronous thread.
     * >
     * > - **setActiveWebEngineVersion** takes effect globally and needs to be called only once in an application
     * > lifecycle.
     *
     * @param {ArkWebEngineVersion} engineVersion - ArkWeb kernel version.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static setActiveWebEngineVersion(engineVersion: ArkWebEngineVersion): void;

    /**
     * Obtains the current ArkWeb kernel version.
     *
     * @returns {ArkWebEngineVersion} The ArkWeb kernel version defined by
     *     [ArkWebEngineVersion]{@link webview.ArkWebEngineVersion}.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static getActiveWebEngineVersion(): ArkWebEngineVersion;

    /**
     * Checks whether the system is using the evergreen kernel, that is, the latest kernel.
     *
     * @returns {boolean} Whether the system is using the evergreen kernel. If the system is using the evergreen kernel,
     *     **true** is returned. Otherwise, **false** is returned.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    static isActiveWebEngineEvergreen(): boolean;

    /**
     * Loads the dynamic library file of the web engine through this API before the **Web** component is initialized, so
     * as to improve startup performance. It also automatically preconnects to frequently visited websites in history.
     *
     * > **NOTE**
     * >
     * > - **initializeWebEngine** cannot be called in an asynchronous thread. Otherwise, the system breaks down.
     * >
     * > - **initializeWebEngine** takes effect globally and needs to be called only once in an application lifecycle.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static initializeWebEngine(): void;

    /**
     * Sets how the **Web** component uses HTTPDNS for DNS resolution.
     *
     * @param { SecureDnsMode } secureDnsMode - Mode in which HTTPDNS is used.
     * @param { string } secureDnsConfig - Information about the HTTPDNS server to use, which must use HTTPS. Only one
     *     HTTPDNS server can be configured.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    static setHttpDns(secureDnsMode: SecureDnsMode, secureDnsConfig: string): void;

    /**
     * Sets whether to enable web debugging. For details, see
     * [Debugging Frontend Pages by Using DevTools](docroot://web/web-debugging-with-devtools.md).
     *
     * NOTE: Enabling web debugging allows users to check and modify the internal status of the web page, which poses
     * security risks. Therefore, you are advised not to enable this feature in the officially released version of the
     * application.
     *
     * @param { boolean } webDebuggingAccess - Sets whether to enable web debugging.
     *     <br>The value **true** means to enable web debugging, and **false** means the opposite.
     *     <br>Default value: **false**.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static setWebDebuggingAccess(webDebuggingAccess: boolean): void;

    /**
     * Sets the private network access check feature.
     *
     * After this feature is enabled, the **Web** component performs CORS preflight on private network requests (such as
     * requests for accessing local servers or intranet resources). It sends an OPTIONS preflight request to obtain
     * explicit authorization from the target server and then transmits the actual data. Disabling this feature will
     * skip the security check.
     *
     * > **NOTE**
     * >
     * > The private network access check feature currently takes effect mainly for Web Worker scenarios.
     *
     * @param { boolean } enable - Whether to enable the private network access check feature. The value **true** means
     *     to enable the private network access check feature, and **false** means the opposite.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static enablePrivateNetworkAccess(enable: boolean): void;
    /**
     * Obtains whether the private network access check feature is enabled for the **Web** component.
     *
     * > **NOTE**
     * >
     * > The private network access check feature currently takes effect mainly for Web Worker scenarios.
     *
     * @returns { boolean } Whether the private network access check feature is enabled for the **Web** component. The
     *     value **true** indicates that the private network access check feature is enabled, and **false** indicates
     *     the opposite.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static isPrivateNetworkAccessEnabled(): boolean;

    /**
     * Sets whether to enable wireless web debugging. By default, wireless web debugging is disabled.
     *
     * * If no port is specified, this API is equivalent to the
     * [setWebDebuggingAccess]{@link webview.WebviewController.setWebDebuggingAccess(webDebuggingAccess: boolean)} API.
     * In this case, ArkWeb starts a local domain socket listener.
     * * When a port is specified, ArkWeb starts a TCP socket listener. In this case, you can debug the web page
     * wirelessly. For details, see
     * [Wireless Debugging](docroot://web/web-debugging-with-devtools.md#wireless-debugging).
     *
     * A port number smaller than 1024 is a well-known or system port and can be enabled only with privileges in the
     * operating system. Therefore, the value of port must be greater than 1024. Otherwise, the API throws an exception.
     *
     * NOTE: Enabling web debugging allows users to check and modify the internal status of the web page, which poses
     * security risks. Therefore, you are advised not to enable this feature in the officially released version of the
     * application.
     *
     * @param { boolean } webDebuggingAccess - Sets whether to enable web debugging.
     *     <br>The value **true** indicates that web page debugging is enabled, and **false** indicates the opposite.
     * @param { number } port - Specifies the TCP port number of the DevTools service. If no port is specified, this API
     *     is equivalent to the [setWebDebuggingAccess] (#setwebdebuggingaccess) API.
     *     <br>Value range: (1024, 65535]
     *     <br>If the value of port is within the range of [0, 1024], the **BusinessError** exception is thrown. The
     *     error code is **17100023**.
     * @throws { BusinessError } 17100023 - The port number is not within the allowed range.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static setWebDebuggingAccess(webDebuggingAccess: boolean, port: number): void;

    /**
     * Sets the timeout interval for used sockets to stay idle in the **Web** component. If the value is different from
     * the timeout interval of existing idle sockets, the existing idle sockets are cleared according to the new value.
     *
     * If this API is not used to set the timeout interval for idle sockets, the default value **300s** is used for the
     * **Web** component.
     *
     * @param { number } timeout - Timeout interval for used sockets to stay idle in the **Web** component, in seconds.
     *     <br>Value range: [30, 300].
     *     <br>If the value is less than 30, the value **30** takes effect. If the value is greater than 300, the value
     *     **300** takes effect.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    static setSocketIdleTimeout(timeout: number): void;

    /**
     * Enables the safe browsing feature. This feature is forcibly enabled and cannot be disabled for identified
     * untrusted websites.
     *
     * By default, this feature does not take effect. OpenHarmony provides only the malicious website blocking web UI.
     * The website risk detection and web UI display features are implemented by the vendor. You are advised to listen
     * for
     * [DidStartNavigation](https://gitcode.com/openharmony-tpc/chromium_src/blob/master/content/public/browser/web_contents_observer.h)
     * and
     * [DidRedirectNavigation](https://gitcode.com/openharmony-tpc/chromium_src/blob/master/content/public/browser/web_contents_observer.h)
     * in **WebContentsObserver** for detection.
     *
     * > **NOTE**
     * >
     * > This API does not take effect.
     *
     * @param { boolean } enable - Whether to enable the safe browsing feature.
     *     <br>The value **true** means to enable the safe browsing feature, and **false** means the opposite.
     *     <br>Default value: **false**.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    enableSafeBrowsing(enable: boolean): void;

    /**
     * Checks whether the safe browsing feature is enabled for this web page.
     *
     * @returns { boolean } Whether the safe browsing feature is enabled for this web page.
     *     <br>The value **true** indicates that the safe browsing feature is enabled, and **false** indicates the
     *     opposite.
     *     <br>Default value: **false**.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    isSafeBrowsingEnabled(): boolean;

    /**
     * Checks whether going to the next page can be performed on the current page.
     *
     * You can use [getBackForwardEntries]{@link webview.WebviewController#getBackForwardEntries} to obtain the
     * historical information list of the current WebView and use
     * [accessStep]{@link webview.WebviewController#accessStep} to determine whether to move forward or backward based
     * on the specified number of steps.
     *
     * @returns { boolean } **true** is returned if going to the next page can be performed on the current page;
     *     otherwise, **false** is returned.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    accessForward(): boolean;

    /**
     * Checks whether going to the previous page can be performed on the current page.
     *
     * You can use [getBackForwardEntries]{@link webview.WebviewController#getBackForwardEntries} to obtain the
     * historical information list of the current WebView and use
     * [accessStep]{@link webview.WebviewController#accessStep} to determine whether to move forward or backward based
     * on the specified number of steps.
     *
     * > **NOTE**
     * >
     * > If [setCustomUserAgent]{@link webview.WebviewController#setCustomUserAgent} is called when the **Web**
     * > component is loaded for the first time, the value of **accessBackward** may be **false** when there are
     * > multiple historical entries. That is, there is no backward entry. You are advised to call the
     * > **setCustomUserAgent** method to set a user agent before using **loadUrl** to load a specific page.
     * >
     * > Causes: When the **Web** component is loaded for the first time, calling
     * > [setCustomUserAgent]{@link webview.WebviewController#setCustomUserAgent} causes the component to reload and
     * > retain the initial history entry. Then the new entry replaces the initial history entry and no new history
     * > entry is generated. As a result, the value of **accessBackward** is false.
     *
     * @returns { boolean } **true** is returned if going to the previous page can be performed on the current page.
     *     Otherwise, **false** is returned.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    accessBackward(): boolean;

    /**
     * Checks whether a specific number of steps forward or backward can be performed on the current page.
     *
     * @param { number } step - Number of the steps to take. A positive number means to move forward, and a negative
     *     number means to move backward.
     * @returns { boolean } Whether a specific number of steps forward or backward can be performed on the current page.
     *     <br>**true** is returned if a specific number of steps forward or backward can be performed on the current
     *     page; otherwise, **false** is returned.
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
     * Moves forward by one page in the history stack. Generally used together with
     * [accessForward]{@link webview.WebviewController#accessForward}.
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
     * Moves to the previous page based on the history stack. This API is generally used together with
     * [accessBackward]{@link webview.WebviewController#accessBackward}.
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
     * Clears the browsing history. You are not advised to call **clearHistory()** in **onErrorReceive()** and
     * **onPageBegin()**. Otherwise, abnormal exit occurs.
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
     * Called when the **Web** component enters the active state.
     *
     * The application can interact with the user while in the active foreground state, and it remains in this state
     * until the focus is moved away from it due to some event (for example, an incoming call is received or the device
     * screen is turned off).
     *
     * If the page was previously in the inactive state, the event listener registered through document.addEventListener
     * ('visibilitychange',...) in the H5 page will be triggered, and document.visibilityState changes from "hidden" to
     * "visible".
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    onActive(): void;

    /**
     * Called when the **Web** component enters the inactive state. You can implement the behavior to perform after the
     * application loses focus.
     *
     * When this API is called, any content that can be safely paused, such as animations and geographical locations, is
     * paused as much as possible. However, the JavaScript is not paused. To pause the JavaScript globally, use
     * [pauseAllTimers]{@link webview.WebviewController#pauseAllTimers}. To reactivate the **Web** component, use
     * [onActive]{@link webview.WebviewController#onActive}.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    onInactive(): void;

    /**
     * Called when the **Web** component refreshes the web page.
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
     * Notifies the **Web** component to refresh the web page. You can choose whether to ignore the cache refresh.
     *
     * @param { boolean } ignoreCache - Whether to ignore cache refresh when the **Web** component refreshes the web
     *     page.
     *     <br>The value **true** means to ignore the cache refresh, and **false** means the opposite.
     *     <br>**NOTE**
     *     <br>If **undefined** or **null** is passed in, the value is **false**.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 24 dynamic
     */
    refresh(ignoreCache: boolean): void;

    /**
     * Loads specified data.
     *
     * When both **baseUrl** and **historyUrl** are empty:
     *
     * If **encoding** is not base64 (including null values), ASCII encoding is used for octets within the secure URL
     * character range, and the standard %xx hexadecimal encoding of the URL is used for octets outside the secure URL
     * character range.
     *
     * **data** must be encoded using Base64 or any hash (#) in the content must be encoded as %23. Otherwise, hash (#)
     * is considered as the end of the content, and the remaining text is used as the document fragment identifier.
     *
     * > **NOTE**
     * >
     * > - To load a local image, you can assign a space to either **baseUrl** or **historyUrl**. For details, see the
     * > sample code.
     * >
     * > - In the scenario of loading a local image, **baseUrl** and **historyUrl** cannot be both empty. Otherwise, the
     * > image cannot be loaded.
     * >
     * > - If the rich text in HTML contains special characters such as hash (#), you are advised to set the values of
     * > **baseUrl** and **historyUrl** to spaces.
     * >
     * > - To load texts, you need to set
     * > `<meta name="viewport" content="width=device-width, initial-scale=1.0" charset="utf-8">` to avoid inconsistent
     * > font sizes.
     *
     * @param { string } data - String obtained after being base64 or URL encoded.
     * @param { string } mimeType - Media type (MIME).
     * @param { string } encoding - Encoding type, which can be base64 or URL.
     * @param { string } [baseUrl] - URL (HTTP/HTTPS/data compliant), which is assigned by the **Web** component to
     *     **window.origin**. If a large number of HTML files need to be loaded, set this parameter to **data**.
     *     <br>If **undefined** or **null** is passed, error code **401** will be thrown.
     * @param { string } [historyUrl] - URL used for historical records. If this parameter is not empty, historical
     *     records are managed based on this URL. This parameter is invalid when **baseUrl** is left empty.
     *     <br>If **undefined** or **null** is passed, error code **401** will be thrown.
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
     * Loads a specified URL.
     *
     * @param { string | Resource } url - URL to load.
     * @param { Array<WebHeader> } [headers] - Additional HTTP request header of the URL.
     *     <br>Default value: **[]**.
     *     <br>If **undefined** or **null** is passed, error code **401** will be thrown.
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
     * Obtains the element type of the area being clicked.
     *
     * @returns { WebHitTestType } Element type of the area being clicked.
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
     * Stores this web page. This API uses a promise to return the result.
     *
     * @param { string } baseName - Save path of the web page. The value cannot be null.
     * @param { boolean } autoName - Whether to automatically generate a file name.
     *     <br>The value **false** means the file is stored with the name specified by baseName, and **true** means the
     *     file name is automatically generated based on the current URL and stored in the directory specified by
     *     baseName.
     * @returns { Promise<string> } Promise used to return the save path if the operation is successful and null
     *     otherwise.
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
     * Stores this web page. This API uses an asynchronous callback to return the result.
     *
     * @param { string } baseName - Save path of the web page. The value cannot be null.
     * @param { boolean } autoName - Whether to automatically generate a file name.
     *     <br>The value **false** means the file is stored with the file name specified by **baseName**, and **true**
     *     means the file name is automatically generated based on the current URL and stored in the directory specified
     *     by **baseName**.
     * @param { AsyncCallback<string> } callback - Callback used to return the save path if the operation is successful
     *     and null otherwise.
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
     * Zooms in or out of this web page. This API is effective only when [zoomAccess]{@link WebAttribute#zoomAccess} is
     * **true**.
     *
     * @param { number } factor - Relative zoom ratio. The value must be greater than 0. The value **1** indicates that
     *     the page is not zoomed. A value smaller than **1** indicates zoom-out, and a value greater than **1**
     *     indicates zoom-in.
     *     <br>Value range: (0, 100]
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
     * Zooms in on this web page by 25%.
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
     * Zooms out of this web page by 20%.
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
     * Obtains the element information of the area being clicked.
     *
     * @returns { HitTestValue } Element information of the area being clicked.
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
     * Obtains the index value of the **Web** component, which can be used for managing multiple **Web** components.
     *
     * @returns { number } Index of the Web component.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    getWebId(): number;

    /**
     * Obtains the default user agent of this web page.
     *
     * For details about the default **User-Agent**, see
     * [Developing User-Agent](docroot://web/web-default-userAgent.md).
     *
     * @returns { string } Default user agent.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    getUserAgent(): string;

    /**
     * Obtains the title of the current web page.
     *
     * @returns { string } Title of the current web page.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    getTitle(): string;

    /**
     * Obtains the height of this web page. For details, see
     * [Obtaining the Web Page Content Height](docroot://web/web-getpage-height.md).
     *
     * @returns { number } Height of the current web page. Unit: vp
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    getPageHeight(): number;

    /**
     * Performs a specific number of steps forward or backward on the current page based on the history stack. No
     * redirection will be performed if the corresponding page does not exist in the history stack.
     *
     * Because the previously loaded web pages are used for the operation, no page reloading is involved.
     *
     * @param { number } step - Number of the steps to take.
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
     * Requests focus for the specified component.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    requestFocus(): void;

    /**
     * Creates web message ports.
     *
     * @param { boolean } isExtentionType - Whether to use the extended interface.
     *     <br>The value **true** means to use the extended interface, and **false** means the opposite.
     *     <br>Default value: **false**.
     *     <br>If **undefined** or **null** is passed, error code **401** will be thrown. [since 10]
     * @returns { Array<WebMessagePort> } List of web message ports.
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
     * Sends a web message to an HTML window.
     *
     * @param { string } name - Name of the message to send.
     * @param { Array<WebMessagePort> } ports - Message ports for sending the message.
     * @param { string } uri - URI for receiving the message.
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
     * Stops page loading.
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
     * Registers a proxy for interaction between the application and web pages loaded by the **Web** component.
     * Registers a JavaScript object with the window. APIs of this object can then be invoked in the window.
     *
     * For the example, see
     * [Invoking Application Functions on the Frontend Page](docroot://web/web-in-page-app-function-invoking.md).
     *
     * > **NOTE**
     * >
     * > - The **registerJavaScriptProxy** API must be used together with the **deleteJavaScriptRegister** API to
     * > prevent memory leak.
     * >
     * > - It is recommended that **registerJavaScriptProxy** be used only with trusted URLs and over secure HTTPS
     * > connections. Injecting JavaScript objects into untrusted web components can expose your application to
     * > malicious attacks.
     * >
     * > - After **registerJavaScriptProxy** is called, the application exposes the registered JavaScript object to all
     * > page frames.
     * >
     * > - If a **registerJavaScriptProxy** is both registered in the synchronous and asynchronous lists, it is called
     * > asynchronously by default.
     * >
     * > - You should register **registerJavaScriptProxy** either in synchronous list or in asynchronous list.
     * > Otherwise, this API fails to be registered.
     * >
     * > - After the HTML5 thread submits an asynchronous JavaScript task to the ETS main thread, the HTML5 thread can
     * > continue to execute subsequent tasks without waiting for the task execution to complete and return a result. In
     * > this way, scenarios where the HTML5 thread is blocked due to long-running JavaScript tasks or a congested ETS
     * > thread can be effectively reduced. However, an asynchronous JavaScript task cannot return a value, and a task
     * > execution sequence cannot be ensured. Therefore, you should determine whether to use a synchronous or
     * > asynchronous function based on a specific scenario.
     * >
     * > - The injected object does not appear in JavaScript until the page is reloaded.
     *
     * @param { object } jsObject - Application-side JavaScript object to be registered. Methods and attributes can be
     *     declared separately, but cannot be registered and used at the same time. If an object contains only
     *     attributes, HTML5 can access the attributes in the object. If an object contains only methods, HTML5 can
     *     access the methods in the object.
     *     <br>1. The parameter and return value can be any of the following types:
     *     <br>string, number, boolean.
     *     <br>2. Dictionary or Array, with a maximum of 10 nested layers and 10,000 data records per layer.
     *     <br>3. Object, which must contain the **methodNameListForJsProxy:[fun1, fun2]** attribute, where **fun1** and
     *     **fun2** are methods that can be called.
     *     <br>4. The parameter also supports Function and Promise. Their callback cannot have return values.
     *     <br>5. The return value supports Promise. Its callback cannot have a return value.
     * @param { string } name - Name of the object to be registered, which is the same as that invoked in the window.
     *     After registration, the window can use this name to access the JavaScript object at the application side.
     * @param { Array<string> } methodList - Synchronous methods of the JavaScript object to be registered at the
     *     application side.
     * @param { Array<string> } [asyncMethodList] - Asynchronous methods of the JavaScript object to be registered at
     *     the application side. The default value is null. Asynchronous methods cannot obtain return values.
     *     <br>If **undefined** or **null** is passed, error code **401** will be thrown. [since 12]
     * @param { string } [permission] - JSON string, which is empty by default. This string is used to configure
     *     JSBridge permission control and define the URL trustlist at the object and method levels.
     *     <br>1. The **scheme** and **host** parameters cannot be empty. The **host** does not support wildcards and
     *     can contain only complete host names.
     *     <br>2. You can configure only the object-level trustlist, which takes effect for all JSBridge methods.
     *     <br>3. If method-level trustlists are configured for JSBridge method A, the intersection of object-level and
     *     method-level trustlists takes effect.
     *     <br>If **undefined** or **null** is passed, error code **401** will be thrown. [since 12]
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
     * Deletes a JavaScript object with the specified name on the application side that is registered with the window
     * using [registerJavaScriptProxy]{@link webview.WebviewController#registerJavaScriptProxy} or
     * [javaScriptProxy]{@link WebAttribute#javaScriptProxy}. The deletion takes effect after the page is reloaded.
     *
     * @param { string } name - Name of the registered JavaScript object, which can be used to invoke the corresponding
     *     object on the application side from the web side.
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
     * Searches the web page for content that matches the keyword specified by **'searchString'** and highlights the
     * matches on the page. This API returns the result asynchronously through
     * [onSearchResultReceive]{@link WebAttribute#onSearchResultReceive}.
     *
     * @param { string } searchString - Search keyword.
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
     * Clears the matches found through [searchAllAsync]{@link webview.WebviewController#searchAllAsync}.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    clearMatches(): void;

    /**
     * Searches for and highlights the next match.
     *
     * @param { boolean } forward - Whether to search forward or backward.
     *     <br>The value **true** indicates a forward search, and the value **false** indicates a backward search.
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
     * Clears the user operation corresponding to the SSL certificate error event recorded by the **Web** component.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    clearSslCache(): void;

    /**
     * Clears the user operation corresponding to the client certificate request event recorded by the **Web**
     * component.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    clearClientAuthenticationCache(): void;

    /**
     * Executes a JavaScript script asynchronously in the context of the current page. This API uses a promise to return
     * the script execution result. This method and its callback must be used on the UI thread.
     *
     * > **NOTE**
     * >
     * > - The JavaScript status is no longer retained during navigation operations (such as **loadUrl**). For example,
     * > the global variables and functions defined before **loadUrl** is called do not exist in the loaded page.
     * >
     * > - It is recommended that the app use **registerJavaScriptProxy** to ensure that the JavaScript status can be
     * > retained across page navigation.
     * >
     * > - Currently, passing objects is not supported. Passing structs is supported.
     * >
     * > - Executing asynchronous methods cannot obtain return values. Determine whether to use synchronous or
     * > asynchronous methods based on the specific context.
     * >
     * > - The string data type passed from the frontend page to the app side is treated as JSON-formatted data and
     * > needs to be deserialized with JSON.parse.
     *
     * @param { string } script - JavaScript script.
     * @returns { Promise<string> } Promise used to return the result if the operation is successful and null otherwise.
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
     * Executes a JavaScript script asynchronously in the context of the current page. This API uses an asynchronous
     * callback to return the script execution result. This method and its callback must be used on the UI thread.
     *
     * > **NOTE**
     * >
     * > - The JavaScript status is no longer retained during navigation operations (such as **loadUrl**). For example,
     * > the global variables and functions defined before **loadUrl** is called do not exist in the loaded page.
     * >
     * > - It is recommended that the app use **registerJavaScriptProxy** to ensure that the JavaScript status can be
     * > retained across page navigation.
     * >
     * > - Currently, passing objects is not supported. Passing structs is supported.
     * >
     * > - Executing asynchronous methods cannot obtain return values. Determine whether to use synchronous or
     * > asynchronous methods based on the specific context.
     * >
     * > - The string data type passed from the frontend page to the app side is treated as JSON-formatted data and
     * > needs to be deserialized with JSON.parse.
     *
     * @param { string } script - JavaScript script.
     * @param { AsyncCallback<string> } callback - Callback used to return the result. **null** is returned if the
     *     JavaScript script fails to be executed or no value is returned.
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
     * Executes a JavaScript script asynchronously and returns the script execution result through a promise.
     * **runJavaScriptExt** can be invoked only after **loadUrl** is executed, for example, in
     * [onPageEnd]{@link WebAttribute#onPageEnd}.
     *
     * > **NOTE**
     * >
     * > - The string data type passed from the frontend page to the app side is treated as JSON-formatted data and
     * > needs to be deserialized with JSON.parse.
     *
     * @param { string } script - JavaScript script. [since 10 - 11]
     * @param { string | ArrayBuffer } script - JavaScript script. [since 12]
     * @returns { Promise<JsMessageExt> } Promise used to return the script execution result.
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
     * Executes a JavaScript script. This API uses an asynchronous callback to return the script execution result.
     * **runJavaScriptExt** can be invoked only after **loadUrl** is executed. For example, it can be invoked in
     * **onPageEnd**.
     *
     * > **NOTE**
     * >
     * > - The string data type passed from the frontend page to the app side is treated as JSON-formatted data and
     * > needs to be deserialized with JSON.parse.
     *
     * @param { string } script - JavaScript script. [since 10 - 11]
     * @param { string | ArrayBuffer } script - JavaScript script. [since 12]
     * @param { AsyncCallback<JsMessageExt> } callback - Callback used to return the result.
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
     * Obtains the data stream of a specified web page using an asynchronous callback.
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
     * Obtains the data stream of a specified web page using a promise.
     *
     * @param { PdfConfiguration } configuration - Parameters required for creating a PDF file.
     * @returns { Promise<PdfData> } Promise used to return the result. It returns a web page PDF data stream (a PdfData
     *     object containing PDF binary data represented as an ArrayBuffer).
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    createPdf(configuration: PdfConfiguration): Promise<PdfData>;

    /**
     * Obtains the URL of the current page.
     *
     * @returns { string } URL address of the current page.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    getUrl(): string;

    /**
     * Scrolls the page up by half the viewport or jumps to the top of the page.
     *
     * @param { boolean } top - Whether to jump to the top of the page.
     *     <br>The value **false** means to scroll the page up by half the viewport, and the value **true** means to
     *     jump to the top of the page.
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
     * Scrolls the page down by half the viewport or jumps to the bottom of the page.
     *
     * @param { boolean } bottom - Whether to jump to the bottom of the page.
     *     <br>The value **false** means to scroll the page down by half the viewport, and the value **true** means to
     *     jump to the bottom of the page.
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
     * Obtains the original URL of the current page.
     *
     * Risk warning: If you want to obtain the URL for JavaScriptProxy communication API authentication, use
     * [getLastJavascriptProxyCallingFrameUrl<sup>12+</sup>]{@link webview.WebviewController#getLastJavascriptProxyCallingFrameUrl}.
     *
     * @returns { string } Original URL address of the current page.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    getOriginalUrl(): string;

    /**
     * Obtains the favicon of this page.
     *
     * @returns { image.PixelMap } **PixelMap** object of the favicon of the page.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    getFavicon(): image.PixelMap;

    /**
     * Sets the **window.navigator.onLine** attribute in JavaScript.
     *
     * @param { boolean } enable - Whether to enable the **window.navigator.onLine** attribute.
     *     <br>The value **true** indicates that the **window.navigator.onLine** attribute is enabled, and the value
     *     **false** indicates the opposite.
     *     <br>Default value: **true**.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 26.1.0]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    setNetworkAvailable(enable: boolean): void;

    /**
     * Checks whether this page contains images. This API uses a promise to return the result.
     *
     * @returns { Promise<boolean> } Promise used to return the result.
     *     <br> The value **true** indicates that this page contains images, and the value **false** indicates the
     *     opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    hasImage(): Promise<boolean>;

    /**
     * Checks whether this page contains images. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result.
     *     <br> The value **true** indicates that this page contains images, and the value **false** indicates the
     *     opposite.
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
     * Obtains the historical information list of the current WebView.
     *
     * > **NOTE**
     * >
     * > [onLoadIntercept]{@link WebAttribute#onLoadIntercept} is triggered when the loading starts. At this time, no
     * > historical node is generated. Therefore, the historical stack obtained by calling **getBackForwardEntries** in
     * > **onLoadIntercept** does not include the page that is being loaded.
     *
     * @returns { BackForwardList } The history list of the current WebView.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    getBackForwardEntries(): BackForwardList;

    /**
     * Removes all resource caches generated by Webview in the app.
     *
     * @param { boolean } clearRom - Whether to clear the cache files in both ROM and RAM. If this parameter is set to
     *     **true**, the cache files in both ROM and RAM are cleared. If this parameter is set to **false**, only the
     *     cache files in RAM are cleared.
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
     * Removes all resource caches generated by Webview (including private mode) in the app.
     *
     * @param { boolean } clearRom - Whether to clear the cache files in both ROM and RAM. If this parameter is set to
     *     **true**, the cache files in both ROM and RAM are cleared. If this parameter is set to **false**, only the
     *     cache files in RAM are cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 18 dynamic
     */
    static removeAllCache(clearRom: boolean): void;

    /**
     * Scrolls the page to the specified absolute position within a specified period.
     *
     * @param { number } x - X coordinate of the absolute position. If the value is a negative number, the value 0 is
     *     used.
     *     <br>Unit: vp
     * @param { number } y - Y coordinate of the absolute position. If the value is a negative number, the value 0 is
     *     used.
     *     <br>Unit: vp
     * @param { number } [duration] - Scrolling animation duration,
     *     <br>in milliseconds.
     *     <br>If no value is input or the input value is a negative number or 0, the animation is disabled.
     *     <br>If **null** or **undefined** is passed, error code **401** is thrown. [since 14]
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
     * Scrolls the page by the specified amount within a specified period.
     *
     * @param { number } deltaX - Amount to scroll by along the x-axis. The positive direction is rightward.
     *     <br>Unit: vp
     * @param { number } deltaY - Amount to scroll by along the y-axis. The positive direction is downward.
     *     <br>Unit: vp
     * @param { number } duration - Scrolling animation duration,
     *     <br>in milliseconds.
     *     <br>If no value is input or the input value is a negative number or 0, the animation is disabled.
     *     <br>If **null** or **undefined** is passed, error code **401** is thrown. [since 14]
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
     * Simulates a slide-to-scroll action on the page at the specified velocity.
     *
     * @param { number } vx - Horizontal velocity component of swipe scrolling, where rightward is the positive
     *     direction.
     *     <br>Unit: vp/s.
     * @param { number } vy - Vertical velocity component of swipe scrolling, where downward is the positive direction.
     *     <br>Unit: vp/s.
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
     * Serializes the page status history of the current WebView.
     *
     * @returns { Uint8Array } Serialized data of the page state history of the current WebView.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    serializeWebState(): Uint8Array;

    /**
     * Restores the page status history from the serialized data of the current WebView.
     *
     * If the value of **state** is too large, exceptions may occur. It is recommended that the page status history be
     * not restored when the **state** value is greater than 512 KB.
     *
     * @param { Uint8Array } state - Serialized data of the page status history.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    restoreWebState(state: Uint8Array) : void;

    /**
     * Grants the cross-domain request and fetch request permissions for custom protocol URLs to the web kernel. When
     * the Web performs a cross-domain fetch of a custom protocol URL, the fetch request can be intercepted by the
     * [onInterceptRequest]{@link WebAttribute#onInterceptRequest} event API, so that developers can further process the
     * request. It is recommended to call this API before any **Web** component is initialized.
     *
     * @param { Array<WebCustomScheme> } schemes - Array of up to 10 custom schemes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100020 - Failed to register custom schemes. [since 12]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static customizeSchemes(schemes: Array<WebCustomScheme>): void;

    /**
     * Grants the cross-domain request and fetch request permissions for custom protocol URLs to the web kernel. When
     * the Web performs a cross-domain fetch of a custom protocol URL, the fetch request can be intercepted by the
     * [onInterceptRequest]{@link WebAttribute#onInterceptRequest} event API, so that developers can further process the
     * request. It is recommended to call this API before any **Web** component is initialized.
     *
     * @param { Array<WebCustomScheme> } schemes - Array of up to 10 custom schemes.
     * @param { boolean } lazyInitWebEngine - Whether to skip WebEngine initialization in the API.
     *     <br>The value **true** means to skip the WebEngine initialization and store the registered schemes
     *     temporarily. When the WebEngine is initialized, the schemes are transferred to the WebEngine. The value false
     *     means to initialize the WebEngine automatically in the API.
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
     * Obtains the certificate information of this website. When the **Web** component is used to load an HTTPS website,
     * SSL certificate verification is performed. This API uses a promise to return the
     * [X.509 certificate]{@link @ohos.security.cert:cert.X509Cert} of the current website.
     *
     * @returns { Promise<Array<cert.X509Cert>> } Promise used to obtain the X.509 certificate array of the current
     *     HTTPS website.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getCertificate(): Promise<Array<cert.X509Cert>>;

    /**
     * Obtains the certificate information of the current website. When the **Web** component is used to load an HTTPS
     * website, SSL certificate verification is performed. This API uses an asynchronous callback to return the X.509
     * certificate (for the X509Cert certificate type definition, see
     * [X509Cert]{@link @ohos.security.cert:cert.X509Cert}) of the current website, so that developers can display the
     * website certificate information.
     *
     * @param {AsyncCallback<Array<cert.X509Cert>>} callback - Callback used to obtain the X.509 certificate array of
     *     the current website.
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
     * Mutes the web page. Typical use cases include: the app needs to control the web page volume (such as providing a
     * mute switch), or needs to mute during background playback.
     *
     * @param { boolean } mute - Whether to mute the web page.
     *     <br>The value **true** means to mute the web page, and **false** means the opposite.
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
     * Prefetches resources in the background for a page that is likely to be accessed in the near future, without
     * executing the page JavaScript code or presenting the page. This can significantly reduce the load time for the
     * prefetched page.
     *
     * > **NOTE**
     * >
     * > - The downloaded page resources are cached for about five minutes. After this period, the **Web** component
     * > automatically releases them.
     * >
     * > - **prefetchPage** can also normally prefetch 302 redirect pages.
     * >
     * > - When **prefetchPage** is executed first and then the page is loaded, the prefetched resources are loaded
     * > directly from the cache.
     * >
     * > - When multiple URLs are prefetched consecutively with **prefetchPage**, only the first one takes effect.
     * >
     * > - **prefetchPage** has a time limit. Multiple prefetches cannot be performed within 500 ms.
     * >
     * > - **prefetchPage** caches all resources except those with the Cache-Control: no-store header. If a Vary
     * > response header or Cache-Control: no-store header exists, or the downloaded page resources have been cached for
     * > more than five minutes, the resources are revalidated before use.
     *
     * @param { string } url - URL to preload.
     * @param { Array<WebHeader> } [additionalHeaders] - Additional HTTP request headers for the URL.
     *     <br>Default value: []
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2*1024*1024. [since 22]
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2048. [since 10 - 21]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    prefetchPage(url: string, additionalHeaders?: Array<WebHeader>): void;

    /**
     * Prefetches resources in the background for a page that is likely to be accessed in the near future, without
     * executing the page JavaScript code or presenting the page. This can significantly reduce the load time for the
     * prefetched page.
     *
     * > **NOTE**
     * >
     * > - The downloaded page resources are cached for about five minutes. After this period, the **Web** component
     * > automatically releases them.
     * >
     * > - **prefetchPage** can also normally prefetch 302 redirect pages.
     * >
     * > - When **prefetchPage** is executed first and then the page is loaded, the prefetched resources are loaded
     * > directly from the cache.
     * >
     * > - **prefetchPage** caches all resources except those with the Cache-Control: no-store header. If a Vary
     * > response header or Cache-Control: no-store header exists, or the downloaded page resources have been cached for
     * > more than five minutes, the resources are revalidated before use.
     *
     * @param { string } url - URL to preload.
     * @param { Array<WebHeader> } [additionalHeaders] - Additional HTTP request headers for the URL.
     *     <br>Default value: []
     * @param { PrefetchOptions } [prefetchOptions] - Options for customizing the prefetch behavior.
     *     <br>The minimum interval between two prefetches is 500 ms. By default, Cache-Control: no-store in the
     *     response header is not ignored.
     * @throws { BusinessError } 17100001 - Init error. The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2*1024*1024. [since 22]
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2048. [since 21 - 21]
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    prefetchPage(url: string, additionalHeaders?: Array<WebHeader>, prefetchOptions?: PrefetchOptions): void;

    /**
     * Preconnects to a URL. Call this API before loading the URL. It only performs DNS resolution and socket connection
     * for the URL, without fetching the main resource or sub-resources.
     *
     * @param { string } url - URL for preconnection.
     * @param { boolean } preconnectable - Whether to perform preconnection. If the value is **true**, DNS resolution
     *     and socket connection preconnection are performed for the URL. If the value is **false**, no preconnection
     *     operation is performed.
     * @param { number } numSockets - Number of sockets to be preconnected. The value must be greater than 0. A maximum
     *     of six socket connections are allowed.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2*1024*1024. [since 22]
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2048. [since 10 - 21]
     * @throws { BusinessError } 17100013 - The number of preconnect sockets is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    static prepareForPageLoad(url: string, preconnectable: boolean, numSockets: number): void;
    /**
     * Sets the automatic preconnection status of the Web kernel. If this API is not set, automatic preconnection is
     * enabled by default.
     *
     * This API must be called before [initializeWebEngine()]{@link webview.WebviewController#initializeWebEngine}
     * initializes the kernel or a **Web** component is created. If any **Web** component has been loaded, the setting
     * does not take effect.
     *
     * @param { boolean } enabled - Whether to enable automatic preconnection of the Web kernel. The value **true**
     *     means to enable the private network access check feature, and **false** means the opposite.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    static setAutoPreconnect(enabled: boolean): void;
    /**
     * Queries the automatic preconnection status of the Web kernel.
     *
     * If the automatic preconnection status of the Web kernel is not set by using
     * [setAutoPreconnect]{@link webview.WebviewController#setAutoPreconnect}, automatic preconnection is enabled by
     * default, and **true** is returned.
     *
     * @returns { boolean } Whether auto preconnection is enabled for the Web kernel. The value **true** indicates that
     *     the private network access check feature is enabled, and **false** indicates the opposite.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    static isAutoPreconnectEnabled(): boolean;
    /**
     * Sets a custom user agent, which will overwrite the default user agent.
     *
     * > **NOTE**
     * >
     * > - When **src** of the **Web** component is set to a URL, it is recommended to set **User-Agent** in the
     * > [onControllerAttached]{@link WebAttribute#onControllerAttached} callback. Do not set it in the
     * > **onLoadIntercept** callback, as this may cause the setting to fail or lead to unexpected results.
     * >
     * > - If **User-Agent** is not set in the **onControllerAttached** callback, calling **setCustomUserAgent** later
     * > may cause an anomaly where the loaded page does not match the actually set **User-Agent**.
     * >
     * > - When **src** of the **Web** component is not set to a URL, it is recommended to call **setCustomUserAgent**
     * > to set **User-Agent** first, and then use **loadUrl** to load a specific page.
     * >
     * > - For the definition and usage scenarios of the default **User-Agent**, see
     * > [User-Agent Development Guide](docroot://web/web-default-user-agent.md).
     *
     * @param { string } userAgent - Information about the custom user agent. It is recommended that you obtain the
     *     current default user agent through [getUserAgent]{@link webview.WebviewController#getUserAgent} and then
     *     customize the obtained user agent.
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
     * Sets a custom user agent for a specific website, which overwrites the system user agent and takes effect for all
     * **Web** components in the application.
     *
     * To set a custom user agent for a specific website, you are advised to call the **setUserAgentForHosts** method to
     * set **User-Agent** before creating a **Web** component, and then create a **Web** component with a specified src
     * or use [loadUrl]{@link webview.WebviewController#loadUrl} to load a specific page.
     *
     * For details about the default **User-Agent** definition, application scenarios, and API priorities, see
     * [Developing User-Agent](docroot://web/web-default-userAgent.md).
     *
     * @param { string } userAgent - Information about the custom user agent. It is recommended that you obtain the
     *     current default user agent through [getDefaultUserAgent]{@link webview.WebviewController#getDefaultUserAgent}
     *     and then customize the obtained user agent.
     * @param { Array<string> } hosts - List of domain names related to the custom user agent. Only the latest list is
     *     retained each time the API is called. The maximum number of entries is 20,000, and the excessive entries are
     *     automatically truncated.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static setUserAgentForHosts(userAgent: string, hosts : Array<string>) : void;

    /**
     * Sets whether to enable the User-Agent Client Hints feature.
     *
     * > **NOTE**
     * >
     * > User-Agent Client Hints (UA-CH) is a privacy protection mechanism that replaces the traditional **User-Agent**
     * > string. It transfers client information through on-demand requests and structured data, reducing the risk of
     * > excessive tracking.
     * >
     * > If this method is not used, the User-Agent Client Hints feature is disabled by default.
     *
     * @param { boolean } enabled - Whether to enable the User-Agent Client Hints feature.<br/>The value **true** means
     *     enabled, and **false** means disabled.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 24 dynamic
     */
    static setUserAgentClientHintsEnabled(enabled: boolean): void;

    /**
     * Queries whether the User-Agent Client Hints feature is currently enabled.
     *
     * @returns { boolean } Whether the User-Agent Client Hints feature is enabled. The value **true** indicates
     *     enabled, and **false** indicates disabled.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 24 dynamic
     */
    static getUserAgentClientHintsEnabled(): boolean;

    /**
     * Sets the **UserAgentMetadata** corresponding to the **User-Agent**.
     *
     * > **NOTE**
     * >
     * > User-Agent Metadata is used to populate user agent client hints. It can provide the brand and version
     * > information of the client, the brand and major version of the underlying operating system, and detailed
     * > information about the underlying device.
     * >
     * > The user agent can be set through setCustomUserAgent, setAppCustomUserAgent, or setUserAgentForHosts.
     * >
     * > If no UserAgentMetadata is found based on the overridden User-Agent, and the overridden User-Agent contains the
     * > system default User-Agent, the system default value is used.
     * >
     * > If no UserAgentMetadata is found based on the overridden User-Agent, but the overridden User-Agent does not
     * > contain the system default user agent, only low-level user agent client hints are generated.
     *
     * @param { string } userAgent - Information about the custom user agent. You can use
     *     [getUserAgent]{@link webview.WebviewController#getUserAgent} to obtain the current default user agent.
     * @param { UserAgentMetadata } metaData - **UserAgentMetadata** corresponding to the user agent. You can use
     *     [getUserAgentMetadata]{@link webview.WebviewController#getUserAgentMetadata} to obtain the current default
     *     value and then modify it using the corresponding method.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 24 dynamic
     */
    setUserAgentMetadata(userAgent: string, metaData: UserAgentMetadata): void;

    /**
     * Obtains the UserAgentMetadata information of a user agent.
     *
     * @param { string } userAgent - Information about the custom user agent. You can use
     *     [getUserAgent]{@link webview.WebviewController#getUserAgent} to obtain the current default user agent.
     * @returns { UserAgentMetadata } [UserAgentMetadata]{@link webview.UserAgentMetadata} corresponding to userAgent.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 24 dynamic
     */
    getUserAgentMetadata(userAgent: string): UserAgentMetadata;

    /**
     * Sets the application-level custom user agent, which will overwrite the system user agent and take effect for all
     * **Web** components in the application.
     *
     * If you need to set the application-level custom user agent, you are advised to call the **setAppCustomUserAgent**
     * method to set the **User-Agent** before creating the **Web** component, and then create the **Web** component
     * with the specified src or load the page using [loadUrl]{@link webview.WebviewController#loadUrl}.
     *
     * For details about the default **User-Agent** definition, application scenarios, and API priorities, see
     * [Developing User-Agent](docroot://web/web-default-userAgent.md).
     *
     * @param { string } userAgent - Information about the custom user agent. It is recommended that you obtain the
     *     current default user agent through [getDefaultUserAgent]{@link webview.WebviewController#getDefaultUserAgent}
     *     and then customize the obtained user agent.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static setAppCustomUserAgent(userAgent: string) : void;

    /**
     * Obtains a custom user agent.
     *
     * For details about the default **User-Agent**, see
     * [Developing User-Agent](docroot://web/web-default-userAgent.md).
     *
     * @returns { string } Information about the custom user agent.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getCustomUserAgent(): string;

    /**
     * Sets the network connection timeout interval. You can use the **onErrorReceive** method in the **Web** component
     * to obtain the timeout error code. If this API is not called, the default timeout interval is **30** seconds.
     *
     * @param { number } timeout - Socket connection timeout duration, in seconds. The value must be a positive integer.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static setConnectionTimeout(timeout: number): void;

    /**
     * Sets a **WebDownloadDelegate** for the current **Web** component. The delegate is used to receive the download
     * progress triggered within the page.
     *
     * @param { WebDownloadDelegate } delegate - Delegate used to receive the download progress.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    setDownloadDelegate(delegate: WebDownloadDelegate): void;

    /**
     * Uses the download capability of the **Web** component to download a specified URL, for example, downloading a
     * specified image from a web page.
     *
     * @param { string } url - Download URL.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2*1024*1024. [since 22]
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2048. [since 11 - 21]
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    startDownload(url: string): void;

    /**
     * Loads a URL with postData using the "POST" method. If the URL is not a network URL, the
     * [loadUrl]{@link webview.WebviewController#loadUrl} method is used to load the URL, and the postData parameter is
     * ignored.
     *
     * @param { string } url - URL to load.
     * @param { ArrayBuffer } postData - Data to transfer using the POST method. The request must be encoded in "
     *     application/x-www-form-urlencoded" format.
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
     * Creates a **PrintDocumentAdapter** instance to provide content for printing.
     *
     * @param { string } jobName - Name of the file to print.
     * @returns { print.PrintDocumentAdapter } Adapter for the print document, which controls the print behavior and
     *     print task. It can print the current web page content through the print service.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 11 dynamic
     */
    createWebPrintDocumentAdapter(jobName: string): print.PrintDocumentAdapter;

    /**
     * Obtains the security level of this web page.
     *
     * @returns { SecurityLevel } Security level of the web page. The value can be **NONE**, **SECURE**, **WARNING**, or
     *     **DANGEROUS**.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    getSecurityLevel(): SecurityLevel;

    /**
     * Obtains the loading progress of the current web page.
     *
     * @returns { number } Loading progress of the current page. The value range is [0, 100].
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    getProgress() : number;

    /**
     * Checks whether this Webview is in incognito mode.
     *
     * @returns { boolean } Whether the Webview is in incognito mode.
     *     <br>The value **true** indicates that incognito mode is enabled for WebView, and **false** indicates the
     *     opposite.
     *     <br>Default value: **false**.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    isIncognitoMode(): boolean;

    /**
     * Sets whether this web page is scrollable.
     *
     * @param { boolean } enable - Whether this web page is scrollable.
     *     <br>The value **true** indicates that this web page is scrollable, and **false** indicates the opposite.
     *     <br>Default value: **true**.
     * @param { ScrollType } type - Scrolling type supported by the web page. The default value is supported.
     *     <br> - If the value of **enable** is set to **false**, the specified **ScrollType** is disabled. If
     *     **ScrollType** is set to the default value, all scrolling types are disabled.
     *     <br> - If the value of **enable** is set to **true**, all scrolling types are enabled regardless of the value
     *     of **ScrollType**.
     *     <br>If **null** or **undefined** is passed, error code **401** is thrown.
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
     * Obtains whether this web page is scrollable.
     *
     * @returns { boolean } Whether this web page is scrollable.
     *     <br>The value **true** indicates that this web page is scrollable, and **false** indicates the opposite.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    getScrollable(): boolean;

    /**
     * Sets whether to print the background of a web page. If the setting of this API is inconsistent with that of
     * [PrintAttributes]{@link @ohos.print:print.PrintAttributes}, the setting of this API takes precedence.
     *
     * @param { boolean } enable - Whether to print the web page background.
     *     <br>The value **true** means to print the web page background, and **false** means the opposite.
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
     * Obtains whether the web page background is printed.
     *
     * @returns { boolean } Whether to print the web page background.
     *     <br>The value **true** means to print the web page background; **false** means not to print the web page
     *     background.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    getPrintBackground(): boolean;

    /**
     * Injects a JavaScript object into the window object through
     * [registerJavaScriptProxy]{@link webview.WebviewController#registerJavaScriptProxy} or
     * [javaScriptProxy]{@link WebAttribute#javaScriptProxy}. This API obtains the URL of the frame that last called the
     * injected object.
     *
     * @returns { string } URL of the frame of the last injected object.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    getLastJavascriptProxyCallingFrameUrl(): string;

    /**
     * Enables the camera capture of the current web page. Before using the camera, add the **ohos.permission.CAMERA**
     * permission to **module.json5**. For details about how to add the permission, see
     * [Declaring Permissions in the Configuration File](docroot://security/AccessToken/declare-permissions.md).
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    startCamera(): void;

    /**
     * Stops the camera capture of the current web page.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    stopCamera(): void;

    /**
     * Disables the camera capture of the current web page.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    closeCamera(): void;

    /**
     * Resumes microphone capture on the current web page. Before using the microphone , add the
     * **ohos.permission.MICROPHONE** permission to **module.json5**. For details about how to add the permission, see
     * [Declaring Permissions in the Configuration File](docroot://security/AccessToken/declare-permissions.md).
     *
     * @throws { BusinessError } 17100001 - Init error. The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    resumeMicrophone(): void;

    /**
     * Pauses microphone capture on the current web page.
     *
     * > **NOTE**
     * >
     * > Differences from resumeMicrophone and stopMicrophone:
     * >
     * > pauseMicrophone only pauses microphone capture and can be restored through resumeMicrophone; stopMicrophone
     * > stops capture and releases resources.
     *
     * @throws { BusinessError } 17100001 - Init error. The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    pauseMicrophone(): void;

    /**
     * Stops microphone capture on the current web page.
     *
     * @throws { BusinessError } 17100001 - Init error. The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    stopMicrophone(): void;

    /**
     * Pauses all WebView timers. While the timers are paused, timer operations such as setInterval and setTimeout in
     * the web page are suspended. It is recommended to pause timers when the app enters the background and resume them
     * when the app returns to the foreground, so as to save resources. This API can be used in pair with
     * [resumeAllTimers]{@link webview.WebviewController#resumeAllTimers}() to avoid timer state confusion.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static pauseAllTimers(): void;

    /**
     * Resumes all timers that are paused from the **pauseAllTimers()** API.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static resumeAllTimers(): void;

    /**
     * Stops all audio and video on a web page.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    stopAllMedia(): void;

    /**
     * Resumes the playback of the audio and video that are paused by the pauseAllMedia interface.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    resumeAllMedia(): void;

    /**
     * Pauses all audio and video on a web page.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    pauseAllMedia(): void;

    /**
     * Closes all full-screen videos on a web page.
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    closeAllMediaPresentations(): void;

    /**
     * Queries the audio and video playback status of the current web page.
     *
     * @returns { MediaPlaybackState } Playback control status of the current web page. The options are **NONE**,
     *     **PLAYING**, **PAUSED**, and **STOPPED**.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    getMediaPlaybackState(): MediaPlaybackState;

    /**
     * Sets a [WebSchemeHandler]{@link webview.WebSchemeHandler} for the **Web** component. The
     * [WebSchemeHandler]{@link webview.WebSchemeHandler} class is used to intercept requests of a specified scheme.
     *
     * @param { string } scheme - Protocol to be intercepted.
     * @param { WebSchemeHandler } handler - Interceptor that intercepts this protocol.
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
     * Clears all WebSchemeHandlers set for the **Web** component.
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
     * Sets a WebSchemeHandler for all **Web** components of the current app, used to intercept requests of a specified
     * scheme in ServiceWorker.
     *
     * @param { string } scheme - Protocol to be intercepted.
     * @param { WebSchemeHandler } handler - Interceptor that intercepts this protocol.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static setServiceWorkerWebSchemeHandler(scheme: string, handler: WebSchemeHandler): void;

    /**
     * Clears all WebSchemeHandlers that are set in the application and used to intercept ServiceWorker.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static clearServiceWorkerWebSchemeHandler(): void;

    /**
     * Enables intelligent tracking prevention.
     *
     * @param { boolean } enable - Whether to enable intelligent tracking prevention.
     *     <br>The value **true** means to enable intelligent tracking prevention, and **false** means the opposite.
     *     <br>Default value: **false**.
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
     * Obtains whether the **Web** component has enabled intelligent tracking prevention.
     *
     * @returns { boolean } Whether the Web component has enabled the smart anti-tracking feature.
     *     <br>The value **true** indicates that the smart anti-tracking feature is enabled, and **false** indicates
     *     that it is not enabled.
     *     <br>Default value: **false**
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isIntelligentTrackingPreventionEnabled(): boolean;

    /**
     * Adds a list of domain names that bypass intelligent tracking prevention.
     *
     * @param { Array<string> } hostList - List of domain names that bypass intelligent tracking prevention.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static addIntelligentTrackingPreventionBypassingList(hostList: Array<string>): void;

    /**
     * Deletes the domain names from the list of domain names added through the
     * **addIntelligentTrackingPreventionBypassingList** API.
     *
     * @param { Array<string> } hostList - List of domain names that bypass intelligent tracking prevention.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static removeIntelligentTrackingPreventionBypassingList(hostList: Array<string>): void;

    /**
     * Deletes all domain names from the list of domain names added through the
     * **addIntelligentTrackingPreventionBypassingList** API.
     *
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static clearIntelligentTrackingPreventionBypassingList(): void;

    /**
     * Obtains the default user agent.
     *
     * This API can be called only in the UI thread.
     *
     * For details about the default **User-Agent**, see
     * [Developing User-Agent](docroot://web/web-default-userAgent.md).
     *
     * @returns {string} Default **User-Agent** string of ArkWeb.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 26.1.0]
     * @since 14 dynamic
     */
    static getDefaultUserAgent(): string;

    /**
     * Registers a callback function. After [enableNativeMediaPlayer]{@link WebAttribute#enableNativeMediaPlayer} is
     * used to enable the app to take over web page media playback, the registered callback function is triggered when
     * media is played on the web page.
     *
     * If the application does not take over media playback on the web page, this callback is not invoked.
     *
     * @param { CreateNativeMediaPlayerCallback } callback - Callback when the application takes over media playback on
     *     the web page.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    onCreateNativeMediaPlayer(callback: CreateNativeMediaPlayerCallback): void;

    /**
     * Enables the full drawing capability for the web page. This API works only during **Web** component
     * initialization.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static enableWholeWebPageDrawing(): void;

    /**
     * Obtains the full drawing result of the web page.
     *
     * > **NOTE**
     * >
     * > - This API does not support concurrent calls.
     * >
     * > - Only supports taking snapshots of resources on the rendering process: static images and text.
     * >
     * > - If the page contains a video, a placeholder image of the video is displayed in the snapshot. If there is no
     * > placeholder image, a blank area is displayed.
     *
     * @param { SnapshotInfo } info - Information for obtaining the full drawing result.
     * @param { AsyncCallback<SnapshotResult> } callback - Callback used to return the result.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    webPageSnapshot(info: SnapshotInfo, callback: AsyncCallback<SnapshotResult>): void;

    /**
     * Prefetches resource requests based on specified request information and additional HTTP request headers, saves
     * them to the memory cache, and specifies the cache key and validity period to accelerate loading. Currently, only
     * POST requests with Content-Type of application/x-www-form-urlencoded are supported. A maximum of six POST
     * requests can be prefetched. To prefetch a seventh one, use
     * [clearPrefetchedResource]{@link webview.WebviewController#clearPrefetchedResource} to clear unnecessary POST
     * request caches. Otherwise, the earliest prefetched POST cache is automatically cleared. To use the prefetched
     * resource cache, developers need to add the key-value pair "ArkWebPostCacheKey" to the request header of the
     * actual POST request, with the value being the cacheKey of the corresponding cache.
     *
     * Resources in the memory cache are automatically managed by the kernel. When too many resources are injected,
     * causing excessive memory pressure, the kernel automatically releases unused resources. However, injecting a large
     * number of resources into the memory cache should still be avoided.
     *
     * @param { RequestInfo } request - Information about the prefetched request.
     * @param { Array<WebHeader> } [additionalHeaders] - Additional HTTP request header of the prefetched request.
     *     <br>If **undefined** or **null** is passed, error code **401** will be thrown.
     * @param { string } [cacheKey] - Key used to query the cache of prefetched resources. The value can contain only
     *     letters and digits. If this parameter is not passed or is left empty, **url** is used by default.
     *     <br>If **undefined** or **null** is passed, error code **401** will be thrown.
     * @param { number } [cacheValidTime] - Validity period of the prefetched resource cache.
     *     <br>Value range: (0, 2147483647].
     *     <br>Default value: 300s.
     *     <br>Unit: s.
     *     <br>If undefined or null is passed in, an exception with error code 401 is thrown.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left
     *     unspecified. 2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2*1024*1024. [since 22]
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2048. [since 12 - 21]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static prefetchResource(request: RequestInfo, additionalHeaders?: Array<WebHeader>, cacheKey?: string,
                            cacheValidTime?: number): void;

    /**
     * Clears the cache of prefetched resources based on the specified cache key list. The cache key in the input
     * parameter must be the prefetched resource cache key specified by
     * [prefetchResource]{@link webview.WebviewController#prefetchResource}.
     *
     * @param { Array<string> } cacheKeyList - Key used to query the cache of prefetched resources. The value can
     *     contain only letters and digits. If this parameter is not passed or is left empty, **url** is used by
     *     default.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static clearPrefetchedResource(cacheKeyList: Array<string>): void;

    /**
     * Sets the ArkWeb rendering subprocess mode. You can select the appropriate mode based on the app's requirements
     * for memory usage and rendering process isolation.
     *
     * @param { RenderProcessMode } mode - Render subprocess mode.
     *     <br>You can call [getRenderProcessMode()]{@link webview.WebviewController#getRenderProcessMode} to view the
     *     ArkWeb rendering subprocess mode of the current device. The enumerated value **0** indicates the single
     *     render subprocess mode, and **1** indicates the multi-render subprocess mode.
     *     <br>By default, mobile phones use the single render subprocess mode, and tablets and PCs/2in1 devices use the
     *     multi-render subprocess mode.
     *     <br>If an invalid number other than the enumerated value of **RenderProcessMode** is passed, the multi-render
     *     subprocess mode is used by default.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static setRenderProcessMode(mode: RenderProcessMode): void;

    /**
     * Obtains the ArkWeb render subprocess mode.
     *
     * @returns { RenderProcessMode } Render subprocess mode.
     *     <br>You can call **getRenderProcessMode()** to obtain the ArkWeb child render process mode of the current
     *     device. The enumerated value **0** indicates the single child render process mode, and **1** indicates the
     *     multi-child render process mode.
     *     <br>If the obtained value is not an enumerated value of **RenderProcessMode**, the multi-render subprocess
     *     mode is used by default.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static getRenderProcessMode(): RenderProcessMode;

    /**
     * Terminates this render process.
     *
     * Calling this API will destroy the associated render process. If the render process has not been started or has
     * been destroyed, there is no impact. In addition, destroying the render process affects all other instances
     * associated with the render process.
     *
     * @returns { boolean } Whether the render process is terminated.
     *     <br>The value **true** indicates that the render process can be destroyed or has been destroyed, and
     *     **false** indicates the opposite.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    terminateRenderProcess(): boolean;

    /**
     * Precompiles JavaScript to generate the bytecode cache or update the existing bytecode cache based on the provided
     * parameters.
     *
     * The API determines whether to update the existing bytecode cache based on the provided file information, E-Tag
     * response header, and Last-Modified response header.
     *
     * @param { string } url - Network address corresponding to the local JavaScript file, that is, the network address
     *     used when the service web page requests the server version of the file. The network address supports only the
     *     HTTP and HTTPS protocols and contains a maximum of 2048 characters. If the cache corresponding to the network
     *     address is invalid, the service web page requests the corresponding resource through the network.
     * @param { string | Uint8Array } script - Text content of the local JavaScript. The content cannot be empty.
     * @param { CacheOptions } cacheOptions - Whether to update the bytecode cache.
     * @returns { Promise<number> } Promise used to return the error code for generating the bytecode cache. The value
     *     **0** indicates no error, and the value **-1** indicates an internal error.
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
     * Sets the IP address of the host after domain name resolution.
     *
     * @param { string } hostName - Domain name of the host whose DNS records are to be added.
     * @param { string } address - Host domain name resolution address (IPv4 and IPv6).
     * @param { number } aliveTime - Cache validity period, in seconds.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static setHostIP(hostName: string, address: string, aliveTime: number): void;

    /**
     * Clears the IP address of a specified host after domain name resolution.
     *
     * @param { string } hostName - Domain name of the host whose DNS records are to be cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static clearHostIP(hostName: string): void;

    /**
     * Warms up ServiceWorker to improve the loading speed of the first screen page (only for pages that use
     * ServiceWorker). Call this API before loading the URL.
     *
     * @param { string } url - URL of the ServiceWorker to preload.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2*1024*1024. [since 22]
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2048. [since 12 - 21]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static warmupServiceWorker(url: string): void;

    /**
     * Injects local offline resources to the memory cache to improve the initial page startup speed.
     *
     * Resources in the memory cache are automatically managed by the ArkWeb engine. When the injected resources are
     * excessive and cause significant memory pressure, the engine will automatically release unused resources. It is
     * advisable to avoid injecting a large number of resources into the memory cache.
     *
     * Under normal circumstances, the validity period of the resources is controlled by the provided Cache-Control or
     * Expires response header, with a default validity period of 86,400 seconds, which is one day.
     *
     * The MIME type of the resources is configured through the provided Content-Type response header. The Content-Type
     * must comply with standards; otherwise, the resources cannot be used correctly. For resources of type MODULE_JS, a
     * valid MIME type must be provided. For other types, the MIME type is optional.
     *
     * Resources injected in this mode can be loaded only through HTML tags. If a **script** tag on the web page uses
     * the **crossorigin** attribute, the **Cross-Origin** response header must be set in the **responseHeaders**
     * parameter of the API. The value for this header should be **anonymous** or **use-credentials**.
     *
     * After **webview.WebviewController.SetRenderProcessMode(webview.RenderProcessMode.MULTIPLE)** is called, the
     * application starts the multi-rendering process mode. This API does not take effect in this scenario.
     *
     * @param { Array<OfflineResourceMap> } resourceMaps - Configuration object for local offline resources. A maximum
     *     of 30 resources can be injected in a single call, with a maximum size of 10 MB per individual resource.
     * @throws { BusinessError } 401 - Parameter error.
     *     Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2*1024*1024. [since 22]
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2048. [since 12 - 21]
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    injectOfflineResources(resourceMaps: Array<OfflineResourceMap>): void;

    /**
     * Enables ad blocking.
     *
     * > **NOTE**
     * >
     * > - The ad blocking feature works only for the release-type application, not the debug-type application.
     *
     * @param { boolean } enable - Whether to enable ad blocking.
     *     <br>The value **true** means to enable ad blocking, and **false** means the opposite.
     *     <br>Default value: **false**.
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
     * Checks whether ad blocking is enabled.
     *
     * @returns { boolean } **true** is returned if ad blocking is enabled; otherwise, **false** is returned.
     *     <br>Default value: **false**.
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isAdsBlockEnabled(): boolean;

    /**
     * Checks whether ad blocking is enabled on this web page.
     *
     * After ads blocking is enabled for the **Web** component, this feature is enabled for all web pages by default.
     * You can call [addAdsBlockDisallowedList]{@link webview.AdsBlockManager#addAdsBlockDisallowedList} to disable the
     * feature for specific domains.
     *
     * @returns { boolean } **true** is returned if ad blocking is enabled; otherwise, **false** is returned.
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isAdsBlockEnabledForCurPage(): boolean;

    /**
     * Obtains the ID of the surface corresponding to ArkWeb. The ID can be used to capture a screenshot of the web
     * page.
     *
     * > **NOTE**
     * >
     * > This API is valid only when the **Web** component rendering mode is **ASYNC_RENDER**. The value of
     * > **getSurfaceId** can be obtained only after the **Web** component is initialized.
     *
     * @returns { string } ID of the surface held by ArkWeb.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    getSurfaceId(): string;

    /**
     * Sets a URL trust list for the Web. Only URLs in the trust list are allowed to be loaded or navigated to.
     * Otherwise, they are intercepted and an alert page is displayed.
     *
     * @param { string } urlTrustList - URL whitelist, configured in JSON format. The maximum size is 10 MB.<br/>The
     *     whitelist setting API uses an overwrite mode. When the API is called multiple times, the last setting takes
     *     effect.<br/>When this parameter is set to an empty string, the whitelist is canceled and access to all URLs
     *     is allowed.
     *     <br/>JSON format example:
     *     <br/>{
     *     <br>  "UrlPermissionList": [
     *     <br/>    {
     *     <br/>      "scheme": "https",
     *     <br/>      "host": "www.example1.com",
     *     <br/>      "port": 443,
     *     <br/>      "path": "pathA/pathB"
     *     <br/>    },
     *     <br/>    {
     *     <br/>      "scheme": "http",
     *     <br/>      "host": "www.example2.com",
     *     <br/>      "port": 80,
     *     <br/>      "path": "test1/test2/test3"<br/>    }
     *     <br/>  ]
     *     <br/>}
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Parameter string is too long. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    setUrlTrustList(urlTrustList: string): void;

    /**
     * Sets a URL trust list for the Web. Only URLs in the trust list are allowed to be loaded or navigated to.
     * Otherwise, they are intercepted and an alert page is displayed. This API extends the control over opaque origin
     * URLs and wildcard rules.
     *
     * @param { string } urlTrustList - URL whitelist configured in JSON format, with a maximum size of 10 MB.<br/>The
     *     whitelist setting uses an overwrite mode. When this API is called multiple times, the last setting takes
     *     effect.<br/>When this parameter is set to an empty string, the whitelist is canceled and all URLs are
     *     allowed.
     *     <br/>JSON format example:
     *     <br/>{
     *     <br>  "UrlPermissionList": [
     *     <br/>    {
     *     <br/>      "scheme": "https",
     *     <br/>      "host": "www.example1.com",
     *     <br/>      "port": 443,
     *     <br/>      "path": "pathA/pathB"
     *     <br/>    },
     *     <br/>    {
     *     <br/>      "scheme": "http",
     *     <br/>      "host": "www.example2.com",
     *     <br/>      "port": 80,
     *     <br/>      "path": "test1/test2/test3"<br/>    }
     *     <br/>  ]
     *     <br/>}
     * @param { boolean } allowOpaqueOrigin - Whether to allow loadUrl to directly load
     *     [opaque origin URLs](https://mdn.org.cn/en-US/docs/Web/URI/Reference/Schemes) such as javascript/data. The
     *     value **true** means allowed, and **false** means not allowed.
     * @param { boolean } supportWildcard - Whether to support wildcard matching for **host** and **path**. For example,
     *     to allow access to **a.example.com** and **b.example.com** when ***.example.com** is configured in the
     *     trustlist. **true** to support, and **false** otherwise.
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
     * Sets a path list. When the file protocol accesses resources in the path list, cross-origin access to local files
     * and other online resources is allowed. In addition, when a path list is set, the file protocol only allows access
     * to resources in the path list. Typical use case: used when the **Web** component needs to be allowed to access
     * local resource files across origins while restricting the access scope to ensure security. (The behavior of
     * [fileAccess]{@link WebAttribute#fileAccess} will be overridden by the behavior of this API.)
     *
     * Using setPathAllowingUniversalAccess to relax cross-origin access restrictions on directories is a high-risk
     * operation. Based on the principle of least privilege, the paths for el1 and el2 are fixed. The paths in the path
     * list must conform to one of the following path formats:
     *
     * 1. A subdirectory of the app file directory. (The app file directory is obtained through [Context.filesDir]
     * (docroot://reference/apis-ability-kit/js-apis-inner-application-context.md#properties) in Ability Kit.)
     * For example:
     *
     * * /data/storage/el2/base/files/example
     * * /data/storage/el2/base/haps/entry/files/example
     *
     * 2. The app resource directory or its subdirectory.
     * (The app resource directory is obtained through [Context.resourceDir]
     * (docroot://reference/apis-ability-kit/js-apis-inner-application-context.md#properties) in Ability Kit.)
     * For example:
     *
     * * /data/storage/el1/bundle/entry/resource/resfile
     * * /data/storage/el1/bundle/entry/resource/resfile/example
     *
     * 3. Since API version 21, the app cache directory and its subdirectory are also included.
     * (The app cache directory is obtained through [Context.cacheDir]
     * (docroot://reference/apis-ability-kit/js-apis-inner-application-context.md#properties) in Ability Kit.)
     * For example:
     *
     * * /data/storage/el2/base/cache
     * * /data/storage/el2/base/haps/entry/cache/example
     * * The **cache/web** directory is not allowed. If it is included, an exception with the code **401** will be
     * thrown. If the **cache** directory is set, **cache/web** cannot be accessed.
     *
     * 4. Since API version 21, the app temporary directory and its subdirectory are also included.
     * (The app temporary directory is obtained through [Context.tempDir]
     * (docroot://reference/apis-ability-kit/js-apis-inner-application-context.md#properties) in Ability Kit.)
     * For example:
     *
     * * /data/storage/el2/base/temp
     * * /data/storage/el2/base/haps/entry/temp/example
     *
     * If a path in the list is not of the preceding paths, error code 401 is reported and the path list fails to be
     * set. When the path list is set to empty, the accessible files for the file protocol are subject to the behavior
     * of the [fileAccess]{@link WebAttribute#fileAccess}.
     *
     * @param { Array<string> } pathList - The path list.
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
     * Sets whether to enable the default error page.
     *
     * When this API is set to true, if an error occurs during page loading, the
     * [onOverrideErrorPage]{@link WebAttribute#onOverrideErrorPage} callback is triggered. You can customize the error
     * display page in the callback.
     *
     * @param { boolean } enable - Whether to enable the default error page. The value **true** means to enable the
     *     default error page, and **false** means the opposite.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    setErrorPageEnabled(enable: boolean): void;

    /**
     * Sets whether to enable the mainframe error page feature, and controls whether to also enable the subframe error
     * page feature.
     *
     * When **enable** is set to **true**, an error page is displayed when a mainframe loading error occurs: if the
     * [onOverrideErrorPage]{@link WebAttribute#onOverrideErrorPage} callback is set, the user-defined error page is
     * displayed; if not, the default error page provided by ArkWeb is displayed. When both **enable** and
     * **includeSubframe** are set to **true**, an error page is also displayed when a subframe loading error occurs,
     * and the **onOverrideErrorPage** callback also takes effect for subframes.
     *
     * > **NOTE**
     * >
     * > - When **enable** is set to **false**, the error page feature for both mainframe and subframe is disabled
     * > regardless of the value of **includeSubframe**.
     * >
     * > - When **includeSubframe** is set to **false**, the behavior of this API is the same as that of
     * > [setErrorPageEnabled]{@link webview.WebviewController#setErrorPageEnabled(enable: boolean)}<sup>20+</sup>, that
     * > is, only the mainframe error page feature is enabled, and the subframe error page feature is not enabled.
     * >
     * > - You can use [errorPageEvent.request.isMainFrame()]{@link WebResourceRequest#isMainFrame} to determine whether
     * > the error source is a mainframe or a subframe, so as to set the corresponding custom error page in the
     * > **onOverrideErrorPage** callback.
     *
     * @param { boolean } enable - Whether to enable the mainframe error page feature. The value **true** means to
     *     enable it, and **false** means the opposite. When enabled, an error page is displayed when a mainframe
     *     loading error occurs.
     * @param { boolean } includeSubframe - Whether to also enable the subframe error page feature. The value **true**
     *     means to enable it, and **false** means the opposite. When enabled, an error page is also displayed when a
     *     subframe loading error occurs. This parameter takes effect only when **enable** is **true**.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    setErrorPageEnabled(enable: boolean, includeSubframe: boolean): void;

    /**
     * Queries whether the default error page is enabled.
     *
     * @returns { boolean } Whether the default error page is enabled.
     *     <br>The value true indicates that the default error page is enabled, and false indicates the opposite.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    getErrorPageEnabled(): boolean;

    /**
     * Queries whether the subframe error page feature is enabled.
     *
     * @returns { boolean } Returns whether the subframe error page feature is enabled.
     *     <br>- **true**: The subframe error page feature is enabled (that is, both **enable** and **includeSubframe**
     *     are **true**).
     *     <br>- **false**: The subframe error page feature is not enabled (including the case where the error page
     *     feature is not enabled, or the error page feature is enabled but the subframe error page feature is not
     *     enabled).
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getSubframeErrorPageEnabled(): boolean;

    /**
     * Clears the cache occupied by **Web** component based on the specified memory pressure level.
     *
     * @param { PressureLevel } level - Pressure level of the memory to be cleared.
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
     * Enables the back-forward cache of a **Web** component. You can specify whether to add a specific page to the back
     * -forward cache.
     *
     * This API must be called before [initializeWebEngine()]{@link webview.WebviewController#initializeWebEngine}
     * initializes the kernel.
     *
     * @param { BackForwardCacheSupportedFeatures } features - Features of the pages, which allow them to be added to
     *     the back-forward cache.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    static enableBackForwardCache(features: BackForwardCacheSupportedFeatures): void;

    /**
     * Sets the back-forward cache options of the **Web** component.
     *
     * @param { BackForwardCacheOptions } options - Options to control the back-forward cache of the **Web** component.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    setBackForwardCacheOptions(options: BackForwardCacheOptions): void;

    /**
     * Obtains the current scrolling offset (including the over-scrolling offset) of the web page.
     *
     * @returns { ScrollOffset } Current scroll offset of the web page (including the overscroll offset), containing x
     *     and y coordinates, in vp.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 13 dynamic
     */
    getScrollOffset(): ScrollOffset;

    /**
     * Scrolls the page by the specified amount and returns value to indicate whether the scrolling is successful.
     *
     * @param { number } deltaX - Amount to scroll by along the x-axis. The positive direction is rightward.
     *     <br>Unit: vp
     * @param { number } deltaY - Amount to scroll by along the y-axis. The positive direction is downward.
     *     <br>Unit: vp
     * @returns { boolean } The value **true** indicates that the current web page can be scrolled, and **false**
     *     indicates that the current web page cannot be scrolled.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    scrollByWithResult(deltaX: number, deltaY: number): boolean;

    /**
     * Obtains the element information of the area being clicked last time.
     *
     * @returns { HitTestValue } Element information of the area being clicked.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 18 dynamic
     */
    getLastHitTest(): HitTestValue;

    /**
     * Checks whether the current **WebViewController** is bound to a **Web** component.
     *
     * @returns { ControllerAttachState } Attach status of **WebViewController** and the **Web** component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    getAttachState(): ControllerAttachState;

    /**
     * Registers the attach state event of **WebViewController**, which obtains the attach state change notification
     * through a callback.
     *
     * @param { 'controllerAttachStateChange' } type - Attach state event of **WebViewController**, whose value is fixed
     *     to **controllerAttachStateChange**.
     * @param { Callback<ControllerAttachState> } callback - Callback triggered when the attach state of
     *     **WebViewController** changes.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    on(type: 'controllerAttachStateChange', callback: Callback<ControllerAttachState>): void;

    /**
     * Deregisters the attach state event of **WebViewController**. After the deregistration, callback notifications
     * will not be received.
     *
     * @param { 'controllerAttachStateChange' } type - Attach state event of **WebViewController**, whose value is fixed
     *     to **controllerAttachStateChange**.
     * @param { Callback<ControllerAttachState> } callback - Callback triggered when the attach state of
     *     **WebViewController** changes. By default, this parameter is left blank. If **Callback** is specified, only
     *     the specified callback is deregistered. Otherwise, all callbacks will be deregistered.
     *     <br>If **null** or **undefined** is passed, error code **401** is thrown.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    off(type: 'controllerAttachStateChange', callback?: Callback<ControllerAttachState>): void;

    /**
     * Asynchronously waits for the **WebViewController** to be attached to the **Web** component. If the attachment is
     * complete or times out, a callback is triggered to return the current
     * [ControllerAttachState]{@link webview.ControllerAttachState} through a promise.
     *
     * @param { number } timeout - Asynchronous waiting duration.
     *     <br>Value range: [0, 65535]
     *     <br>Unit: ms.
     * @returns { Promise<ControllerAttachState> } Promise used to return the current
     *     [ControllerAttachState]{@link webview.ControllerAttachState}.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    waitForAttached(timeout: number): Promise<ControllerAttachState>;

    /**
     * Obtains the current scrolling offset of the web page (excluding the over-scrolling offset).
     *
     * @returns { ScrollOffset } Current scroll offset of the web page (excluding over-scroll offset), which contains x
     *     and y coordinates, in vp.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    getPageOffset(): ScrollOffset;

    /**
     * Sets the bottom avoidance height of the visible viewport on the web page.
     *
     * > **NOTE**
     * >
     * > - The valid value range of **avoidHeight** is [0, height of the **Web** component]. Values outside this range
     * > are adjusted to the nearest boundary.
     * >
     * > - When a non-zero value is specified for **avoidHeight**, the position and size of the **Web** component remain
     * > unchanged, but the visible viewport shift upwards by the specified height, lifting the web page content by the
     * > **avoidHeight**. This API is used to customize the avoidance area at the bottom of a web page. It is not
     * > recommended that this API be used when the editable area of the web page is tapped to pull up the keyboard. If
     * > this API is used in this scenario, the keyboard avoidance mode is set to **OVERLAYS_CONTENT**.
     * >
     * > - When the height of this API is set to **0**, the web page content can be restored, and the keyboard avoidance
     * > mode is specified by [keyboardAvoidMode()]{@link WebAttribute#keyboardAvoidMode}.
     *
     * @param { number } avoidHeight - Bottom avoidance height of the visible viewport on the web page.
     *     <br>Unit: vp.
     *     <br>Value range: [0, height of the **Web** component]
     *     <br>If the value is less than 0, the value **0** is used. If the value is greater than the height of the
     *     **Web** component, the height of the **Web** component is used.
     * @throws { BusinessError } 17100001 - Init error. The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 801 - This functionality is not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    avoidVisibleViewportBottom(avoidHeight: number): void;

    /**
     * Obtains the prediction information about blankless loading (for details, see
     * [BlanklessInfo]{@link @ohos.web.webview:webview.BlanklessInfo}) and starts to generate the loading transition
     * frame. The application determines whether to enable blankless loading based on the information. This API must be
     * used together with the [setBlanklessLoadingWithKey]{@link webview.WebviewController#setBlanklessLoadingWithKey}
     * API before the page loading API is triggered or in **onLoadIntercept**, and after the **WebViewController** is
     * bound to the **Web** component.
     *
     * > **NOTE**
     * >
     * > - The default size of the persistent cache capacity is 30 MB (about 30 pages). You can set the cache capacity
     * > by calling [setBlanklessLoadingCacheCapacity]{@link webview.WebviewController#setBlanklessLoadingCacheCapacity}
     * > . For details, see the description of this API. When the maximum capacity is exceeded, the cache is updated
     * > based on the Least Recently Used (LRU) mechanism. The persistent cache data that has been stored for more than
     * > seven days is automatically cleared. After the cache is cleared, the optimization effect appears when the page
     * > is loaded for the third time.
     * >
     * > - If the snapshot similarity (**similarity** in [BlanklessInfo]{@link @ohos.web.webview:webview.BlanklessInfo})
     * > is extremely low, check whether the **key** value is correct.
     * >
     * > - After this API is called, page loading snapshot detection and transition frame generation calculation are
     * > enabled, which generates certain resource overhead.
     * >
     * > - Blankless loading consumes certain resources, which depends on the resolution of the **Web** component. When
     * > the width and height of the resolution are respectively **w** and **h**, the peak memory usage increases by
     * > about **12 × w × h** B in the page-opening phase. After the page is opened, the memory is reclaimed, which does
     * > not affect the stable memory usage. When the size of the solid-state application cache is increased, the
     * > increased cache of each page is about **w × h/10** B and the cache is located in the application cache.
     * >
     * > - Add the **ohos.permission.INTERNET** and **ohos.permission.GET_NETWORK_INFO** permissions to **module.json5**
     * > . For details, see
     * > [Declaring Permissions in the Configuration File](docroot://security/AccessToken/declare-permissions.md#declaring-permissions-in-the-configuration-file).
     *
     * @param { string } key - Key value that uniquely identifies the page.<br>The value cannot be empty and can contain
     *     a maximum of 2048 characters.<br>Invalid values do not take effect.
     * @returns { BlanklessInfo } Prediction information about blankless loading, including the first screen similarity
     *     and first screen loading duration. The application determines whether to enable blankless loading based on
     *     the prediction information.
     * @throws { BusinessError } 801 This functionality is not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    getBlanklessInfoWithKey(key: string) : BlanklessInfo;

    /**
     * Sets whether to enable blankless loading. This API must be used together with
     * [getBlanklessInfoWithKey]{@link webview.WebviewController#getBlanklessInfoWithKey}.
     *
     * > **NOTE**
     * >
     * > - This API must be called after the page loading API is triggered. Other restrictions are the same as those of
     * > [getBlanklessInfoWithKey]{@link webview.WebviewController#getBlanklessInfoWithKey}.
     * >
     * > - The page must be loaded in the component that calls this API.
     * >
     * > - When the similarity is low, the system will deem the scene change too abrupt and frame insertion will fail.
     * >
     * > - Add the **ohos.permission.INTERNET** and **ohos.permission.GET_NETWORK_INFO** permissions to **module.json5**
     * > . For details, see
     * > [Declaring Permissions in the Configuration File](docroot://security/AccessToken/declare-permissions.md#declaring-permissions-in-the-configuration-file).
     *
     * @param { string } key - Key value that uniquely identifies the page. This value must be the same as the **key**
     *     value of the **getBlanklessInfoWithKey** API.<br>The value cannot be empty and can contain a maximum of 2048
     *     characters.<br>When an invalid value is set, the error code **WebBlanklessErrorCode** is returned, and the
     *     API does not take effect.
     * @param { boolean } is_start - Whether to enable frame interpolation. The value **true** means to enable frame
     *     interpolation, and **false** means the opposite.<br>If **undefined** or **null** is passed in, the value is
     *     **false**.
     * @returns { WebBlanklessErrorCode } Whether the API is successfully called. For details, see
     *     [WebBlanklessErrorCode]{@link @ohos.web.webview:webview.WebBlanklessErrorCode}.
     * @throws { BusinessError } 801 This functionality is not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    setBlanklessLoadingWithKey(key: string, is_start: boolean) : WebBlanklessErrorCode;

    /**
     * Clears the blankless loading cache of the page with a specified key value.
     *
     * In an applet or web application, when the content changes significantly during page loading, an obvious scene
     * change may occur. If you are concerned about this change, you can use this API to clear the page cache.
     *
     * > **NOTE**
     * >
     * > - After the page is cleared, the optimization effect appears when the page is loaded for the third time.
     *
     * @param { Array<string> } [keys] - Key value list on the pages using the blankless optimization solution. The
     *     **key** value has been specified in
     *     [getBlanklessInfoWithKey]{@link webview.WebviewController#getBlanklessInfoWithKey}.<br>Default value: key
     *     list of all pages cached by the blankless optimization solution.<br>Valid value range: The key length cannot
     *     exceed 2048 characters, and the number of keys must be less than or equal to 100. The key value is the same
     *     as that input to the **Web** component during page loading.<br>Invalid value setting behavior: If
     *     **undefined** or **null** is passed, error code **401** is thrown. If the key length exceeds 2048, the key
     *     does not take effect. If the key length exceeds 100, the first 100 values are used. If the key is empty, the
     *     default value is used.
     * @throws { BusinessError } 801 This functionality is not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static clearBlanklessLoadingCache(keys?: Array<string>) : void;

    /**
     * Sets the persistent cache capacity of the blankless loading solution and returns the value that takes effect. If
     * the API is not explicitly called, the default cache capacity is 30 MB. When this limit is exceeded, transition
     * frames that are not frequently used are eliminated.
     *
     * @param { number } capacity - Persistent cache capacity, in MB. The maximum value is 100 MB.<br>The value ranges
     *     from 0 to 100. If this parameter is set to **0**, no cache capacity is available and the functionality is
     *     disabled globally.<br>When a value less than 0 is set, the value **0** takes effect. When a value greater
     *     than 100 is set, the value **100** takes effect.
     * @returns { number } Effective value that ranges from 0 MB to 100 MB.
     *     <br>When a value less than 0 is set, the value **0** takes effect. When a value greater than 100 is set, the value
     *     **100** takes effect.
     * @throws { BusinessError } 801 This functionality is not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static setBlanklessLoadingCacheCapacity(capacity: number) : number;

    /**
     * Sets the configuration parameters for frame interpolation during blankless loading. This API must be used with
     * [getBlanklessInfoWithKey]{@link webview.WebviewController#getBlanklessInfoWithKey}. Compared with
     * [setBlanklessLoadingWithKey]{@link webview.WebviewController#setBlanklessLoadingWithKey}, this API supports more
     * parameter settings for frame interpolation during blankless loading, including the frame interpolation duration,
     * cache data validity period, and custom callback after frame interpolation is complete.
     *
     * > **NOTE**
     * >
     * > - This API must be called after the page loading API is triggered. Other restrictions are the same as those of
     * > [getBlanklessInfoWithKey]{@link webview.WebviewController#getBlanklessInfoWithKey}.
     * >
     * > - The page must be loaded in the component that calls this API.
     * >
     * > - When the similarity is low, the system will deem the scene change too abrupt and frame insertion will fail.
     * >
     * > - Add the **ohos.permission.INTERNET** and **ohos.permission.GET_NETWORK_INFO** permissions to
     * > **module.json5**. For details, see
     * > [Declaring Permissions in the Configuration File](docroot://security/AccessToken/declare-permissions.md#declaring-permissions-in-the-configuration-file).
     *
     * @param { string } key - Key value that uniquely identifies the page. This value must be the same as the **key**
     *     value of the **getBlanklessInfoWithKey** API.
     *     <br>The value cannot be empty and can contain a maximum of 2048 characters.
     *     <br>When an invalid value is set, the error code **WebBlanklessErrorCode** is returned, and the API does not
     *     take effect.
     * @param { BlanklessLoadingParam } param - Parameters for frame interpolation of blankless loading.
     * @returns { WebBlanklessErrorCode } API calling result.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    setBlanklessLoadingWithParams(key: string,
      param: BlanklessLoadingParam) : WebBlanklessErrorCode;

    /**
     * Sets the destroy mode of the **Web** component. The destroy mode of the **Web** component affects the time when
     * web kernel resources, such as the JavaScript running context and rendering context, are released. The default
     * value is [WebDestroyMode.NORMAL_MODE]{@link webview.WebDestroyMode} (normal mode), indicating that the system
     * determines the destroy time. You can set [WebDestroyMode.FAST_MODE]{@link webview.WebDestroyMode} (fast mode) to
     * destroy resources immediately, improving performance in specific scenarios.
     *
     * > **NOTE**
     * >
     * > [WebDestroyMode.FAST_MODE]{@link webview.WebDestroyMode} changes the time when the **Web** component is
     * > destroyed. When it is used, pay attention to the incorrect implementation that depends on the destroy time of
     * > the **Web** component. For example, when a **WebViewController** is called in fast mode rather than using
     * > [WebDestroyMode.NORMAL_MODE]{@link webview.WebDestroyMode}, the unbinding exception (**17100001**) is more
     * > likely to be triggered. In this case, the application needs to capture the exception, or use
     * > [getAttachState]{@link webview.WebviewController#getAttachState} to obtain the attach state to avoid stability
     * > problems.
     *
     * @param { WebDestroyMode } mode - Destroy mode of the **Web** component.
     *     <br>Default value: **WebDestroyMode.NORMAL_MODE**
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static setWebDestroyMode(mode: WebDestroyMode): void;

    /**
     * Sets the site isolation mode. The site isolation mechanism isolates websites from different origins in different
     * rendering processes to reduce the cross-domain attack surface. For example, on devices such as PCs, when site
     * isolation mode is not enabled, the original process model assigns one rendering process per tab. After site
     * isolation is enabled, iframes from different origins within a tab can run in independent rendering processes.
     *
     * For third-party applications that load only trusted web pages, you can disable this functionality to improve
     * performance, reduce memory usage, and reduce interception of cross-domain access. The default value varies
     * according to the device. [SiteIsolationMode.STRICT]{@link webview.SiteIsolationMode} is used for PCs and tablets,
     * and [SiteIsolationMode.PARTIAL]{@link webview.SiteIsolationMode} is used for phones. In
     * [Secure Shield mode](docroot://web/web-secure-shield-mode.md), strict site isolation is used.
     *
     * > **NOTE**
     * >
     * > Strict site isolation cannot be set in single-process mode.
     * >
     * > This API can be called only once during initialization. The site isolation mode cannot be repeatedly changed.
     *
     * @param { SiteIsolationMode } mode - Site isolation mode.
     *     <br>The default value depends on the device type and device mode. For PCs and tablets, strict site isolation
     *     is used by default. For phones, partial site isolation is used by default. In Secure Shield mode, strict site
     *     isolation is used by default.
     * @throws { BusinessError } 17100001 - Init error. Possible causes:
     *     1. Site Isolation mode is already set by the developer.
     *     2. Site Isolation mode cannot be strict in single-render-process mode.
     *     3. Site Isolation mode cannot be changed while Secure Shield mode is active.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    static setSiteIsolationMode(mode: SiteIsolationMode): void;

    /**
     * Queries the currently effective site isolation mode.
     *
     * @returns { SiteIsolationMode } Site isolation mode.
     *     <br>getSiteIsolationMode() queries the currently effective site isolation mode.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    static getSiteIsolationMode(): SiteIsolationMode;

    /**
     * Sets the automatic control mode of the soft keyboard. When this API is not explicitly called, the system attempts
     * to automatically hide or show the soft keyboard when the **Web** component loses or gains focus, or when its
     * state switches to inactive or active. Typical use case: when you do not want the **Web** component to
     * automatically hide or re-show the soft keyboard during inactive or active state switching, use
     * DISABLE_AUTO_KEYBOARD_ON_ACTIVE; when you need to retain the default automatic management behavior, use DEFAULT.
     *
     * @param { WebSoftKeyboardBehaviorMode } mode - Behavior mode of the web soft keyboard.
     * @throws { BusinessError } 17100001 - Init error. The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 dynamic
     */
    setSoftKeyboardBehaviorMode(mode: WebSoftKeyboardBehaviorMode): void;

    /**
     * Sets the global scrollbar mode in the web page. When this API is not explicitly called,
     * [ScrollbarMode.OVERLAY_LAYOUT_SCROLLBAR]{@link webview.ScrollbarMode} is used by default, indicating that the
     * scroll bar is not always displayed.
     *
     * > **NOTE**
     * >
     * > - You can set whether to always display the web scrollbar of the current application based on the scrollbar
     * > mode.
     * >
     * > - If the [forceDisplayScrollBar]{@link WebAttribute#forceDisplayScrollBar} API is set at the same time as this
     * > API, the setting of **forceDisplayScrollBar** does not take effect.
     * >
     * > - This API must be called before WebViewController is bound to a **Web** component.
     *
     * @param { ScrollbarMode } scrollbarMode - Scroll bar mode.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    static setScrollbarMode(scrollbarMode: ScrollbarMode): void;

    /**
     * Disables specific web engine capabilities by configuring security feature options to reduce the attack surface.
     * Typical use cases include: apps with high security requirements (such as financial and government apps) should
     * enable advanced security mode to disable unnecessary web engine capabilities.
     *
     * > **NOTE**
     * >
     * > - This API is a global static API. It only needs to be called once during the entire app lifecycle and does not
     * > need to be called repeatedly.
     * >
     * > - It must be called before [initializeWebEngine()]{@link webview.WebviewController#initializeWebEngine}.
     * > Otherwise, the setting does not take effect.
     *
     * @param { SecurityParams } securityParams - Security feature option configuration.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    static enableAdvancedSecurityMode(securityParams: SecurityParams): void;

    /**
     * Executes `AIPageCommand` asynchronously. This API uses a promise to return the result. The command type and
     * command parameters are specified through the `command` parameter in JSON string format.
     *
     * > **NOTE**
     * >
     * > - The return format varies for different commands. For details, see
     * > [AIPageCommand](docroot://reference/apis-arkweb/arkts-apis-webview-AIPageCommand.md) and
     * > [AIPageInteraction](docroot://reference/apis-arkweb/arkts-apis-webview-AIPageInteraction.md).
     * >
     * > - When a command cannot be dispatched or has no result to return, the promise may return an empty string.
     * >
     * > - When the return value is not empty, it is a JSON string. The app can parse it with `JSON.parse` before use.
     *
     * @param { string } command - Command parameter in JSON format. The parameter format varies for different commands.
     *     For query commands, see [AIPageCommand](docroot://reference/apis-arkweb/arkts-apis-webview-AIPageCommand.md).
     *     For interaction commands, see
     *     [AIPageInteraction](docroot://reference/apis-arkweb/arkts-apis-webview-AIPageInteraction.md).
     * @returns { Promise<string> } Promise used to return the command execution result in JSON format. The return
     *     format varies for different commands. When a command cannot be dispatched or has no return value, an empty
     *     string is returned.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 17100024 - Command format error.
     *     The command parameter does not conform to the JSON format requirements.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    executeAIPageCommand(command: string): Promise<string>;
  }

  /**
   * Enumerates the behavior modes of the web soft keyboard.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  enum WebSoftKeyboardBehaviorMode {
    /**
     * When the **Web** component is focused or unfocused, or its status changes to inactive or active, the system
     * attempts to hide or display the soft keyboard. This value is used by default.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 dynamic
     */
    DEFAULT = 0,

    /**
     * When the **Web** component's status changes between inactive and active, the system does not hide or start the
     * soft keyboard.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 dynamic
     */
    DISABLE_AUTO_KEYBOARD_ON_ACTIVE = 1
  }

  /**
   * Enumerates the states of a download task.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 11 dynamic
   */
  enum WebDownloadState {
    /**
     * The download task is in progress.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    IN_PROGRESS = 0,

    /**
     * The download task is completed.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    COMPLETED,

    /**
     * The download task has been canceled.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    CANCELED,

    /**
     * The download task is interrupted.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    INTERRUPTED,

    /**
     * The download task is pending.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    PENDING,

    /**
     * The download task is paused.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    PAUSED,

    /**
     * The state of the download task is unknown.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    UNKNOWN,
  }

  /**
   * Enumerates the download task error codes.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 11 dynamic
   */
  enum WebDownloadErrorCode {
    /**
     * Unknown error.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    ERROR_UNKNOWN = 0,

    /**
     * Failed to operate the file.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_FAILED = 1,

    /**
     * No permission to access the file.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_ACCESS_DENIED = 2,

    /**
     * The disk space is insufficient.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_NO_SPACE = 3,

    /**
     * The file name is too long.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_NAME_TOO_LONG = 5,

    /**
     * The file is too large.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_TOO_LARGE = 6,

    /**
     * Some temporary issues occur, such as insufficient memory, files in use, and too many files open at the same time.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_TRANSIENT_ERROR = 10,

    /**
     * Access to the file is blocked due to certain local policies.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_BLOCKED = 11,

    /**
     * The file to resume downloading is not long enough. It may not exist.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_TOO_SHORT = 13,

    /**
     * Hash mismatch.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_HASH_MISMATCH = 14,

    /**
     * The file already exists.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    FILE_SAME_AS_SOURCE = 15,

    /**
     * Common network error.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    NETWORK_FAILED = 20,

    /**
     * Network connection timeout.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    NETWORK_TIMEOUT = 21,

    /**
     * Network disconnected.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    NETWORK_DISCONNECTED = 22,

    /**
     * The server is shut down.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    NETWORK_SERVER_DOWN = 23,

    /**
     * Invalid network request. The request may be redirected to an unsupported scheme or an invalid URL.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    NETWORK_INVALID_REQUEST = 24,

    /**
     * The server returns a general error.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SERVER_FAILED = 30,

    /**
     * The server does not support the range request.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SERVER_NO_RANGE = 31,

    /**
     * The server does not have the requested data.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SERVER_BAD_CONTENT = 33,

    /**
     * The file cannot be downloaded from the server.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SERVER_UNAUTHORIZED = 34,

    /**
     * The server certificate is incorrect.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SERVER_CERT_PROBLEM = 35,

    /**
     * The access to the server is forbidden.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SERVER_FORBIDDEN = 36,

    /**
     * The server cannot be accessed.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SERVER_UNREACHABLE = 37,

    /**
     * The received data does not match the content length.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SERVER_CONTENT_LENGTH_MISMATCH = 38,

    /**
     * An unexpected cross-site redirection occurs.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    SERVER_CROSS_ORIGIN_REDIRECT = 39,

    /**
     * The user cancels the download.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    USER_CANCELED = 40,

    /**
     * The user closes the application.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    USER_SHUTDOWN = 41,

    /**
     * The application crashes.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    CRASH = 50
  }

  /**
   * WebDownloadItem is a class in the ArkWeb framework used to represent and manage a single download task. Through the
   * callback parameters of [WebDownloadDelegate]{@link webview.WebDownloadDelegate}, an app can obtain a
   * WebDownloadItem instance and then query and control the download task, including starting the download to a
   * specified path, querying the download progress and status, pausing/resuming/canceling the task, and serializing
   * failed tasks for later recovery.
   *
   * > **NOTE**
   * >
   * > - During the download process, the download progress is notified to the user through WebDownloadDelegate, and the
   * > user can operate the download task through the WebDownloadItem parameter.
   * >
   * > - The maximum length of the download file path (including the file name) supported by WebDownloadItem is 255
   * > bytes<!--RP1--><!--RP1End-->.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 11 dynamic
   */
  class WebDownloadItem {
    /**
     * Obtains the unique ID of this download task.
     *
     * @returns { string } Unique ID of the download task.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getGuid(): string;

    /**
     * Obtains the download speed, in bytes per second.
     *
     * @returns { number } Download speed, in bytes per second.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getCurrentSpeed(): number;

    /**
     * Obtains the download progress. The value **100** indicates that the download is complete.
     *
     * @returns { number } Download progress. The value **100** indicates that the download is complete, and the value
     *     **-1** indicates that the progress is unknown.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getPercentComplete(): number;

    /**
     * Obtains the total length of the file to be downloaded.
     *
     * @returns { number } Total length of the file to be downloaded. The value -1 indicates that the total size is
     *     unknown. Unit: byte.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getTotalBytes(): number;

    /**
     * Obtains the download state.
     *
     * @returns { WebDownloadState } Download state.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getState(): WebDownloadState;

    /**
     * Obtains the download error code.
     *
     * @returns { WebDownloadErrorCode } Error code when the download fails.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getLastErrorCode(): WebDownloadErrorCode;

    /**
     * Obtains the request mode of this download task.
     *
     * @returns { string } Request mode of the download task.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getMethod(): string;

    /**
     * Obtains the MIME type of this download task (for example, a sound file may be marked as audio/ogg, and an image
     * file may be image/png).
     *
     * @returns { string } MIME type (for example, audio/ogg for a sound file, and image/png for an image file).
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getMimeType(): string;

    /**
     * Obtains the download request URL.
     *
     * @returns { string } Download request URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getUrl(): string;

    /**
     * Obtains the suggested file name for this download task.
     *
     * @returns { string } Suggested file name.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getSuggestedFileName(): string;

    /**
     * Starts downloading to the specified directory. The parameter specifies the disk storage path (including the file
     * name) of the download file.
     *
     * > **NOTE**
     * >
     * > This API must be used in the **onBeforeDownload** callback of **WebDownloadDelegate**. If it is not called in
     * > the callback, the download task remains in the PENDING state and is downloaded to a temporary directory. After
     * > the target path is specified by **WebDownloadItem.start**, the temporary files are renamed to the target path
     * > and the unfinished files are directly downloaded to the target path. If you do not want to download the file to
     * > the temporary directory before invoking **WebDownloadItem.start**, you can call **WebDownloadItem.cancel** to
     * > cancel the current download task and then call **WebDownloadManager.resumeDownload** to resume the task.
     *
     * @param { string } downloadPath - Path of the download file (including the file name). The path length is the same
     *     as that in the file manager, with a maximum of 255 bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     *     <br>2. Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    start(downloadPath: string): void;

    /**
     * Cancels the download task.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    cancel(): void;

    /**
     * Pauses the download task.
     *
     * @throws { BusinessError } 17100019 - The download task is not started yet.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    pause(): void;

    /**
     * Resumes a download task.
     *
     * @throws { BusinessError } 17100016 - The download task is not paused.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    resume(): void;

    /**
     * Obtains the number of received bytes.
     *
     * @returns { number } Number of received bytes.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getReceivedBytes(): number;

    /**
     * Obtains the full path of the downloaded file on the disk.
     *
     * @returns { string } Full path of the downloaded file on the disk.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getFullPath(): string;

    /**
     * Obtains the original URL address of the download file.
     *
     * @returns { string } Original URL address of the download file.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getOriginalUrl(): string;

    /**
     * Obtains the referrer address of the download file.
     *
     * @returns { string } Referrer address of the download file.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getReferrerUrl(): string;

    /**
     * Serializes the failed download to a byte array.
     *
     * @returns { Uint8Array } Byte array into which the failed download is serialized.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    serialize(): Uint8Array;

    /**
     * Deserializes the serialized byte array into a **WebDownloadItem** object.
     *
     * @param { Uint8Array } serializedData - Serialized byte array.
     * @returns { WebDownloadItem } **WebDownloadItem** object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     *     <br>2. Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static deserialize(serializedData: Uint8Array): WebDownloadItem;
  }

  /**
   * WebDownloadDelegate is a delegate class in the ArkWeb framework used to listen for and handle download task events
   * of the Web component. When a web page in the Web component triggers a file download (for example, when the user
   * taps a download link or the **startDownload** method is called), the download task state changes are notified to
   * the app through the callback APIs of this class. Developers register a **WebDownloadDelegate** instance with the
   * Web component through **setDownloadDelegate** to take over the complete lifecycle management of the download
   * process.
   *
   * WebDownloadDelegate defines four download lifecycle callbacks:
   * [onBeforeDownload]{@link webview.WebDownloadDelegate#onBeforeDownload(callback: Callback<WebDownloadItem>)} is
   * invoked before the download starts, and the app must call
   * [WebDownloadItem.start]{@link webview.WebDownloadItem#start} in this callback and specify a download path;
   * otherwise, the download remains in the PENDING state.
   * [onDownloadUpdated]{@link webview.WebDownloadDelegate#onDownloadUpdated(callback: Callback<WebDownloadItem>)} is
   * invoked during the download process, providing updated information such as the download progress (percentage) and
   * the number of bytes received.
   * [onDownloadFinish]{@link webview.WebDownloadDelegate#onDownloadFinish(callback: Callback<WebDownloadItem>)} is
   * invoked when the download is complete.
   * [onDownloadFailed]{@link webview.WebDownloadDelegate#onDownloadFailed(callback: Callback<WebDownloadItem>)} is
   * invoked when the download fails, and the failed task can be saved through
   * [WebDownloadItem.serialize]{@link webview.WebDownloadItem#serialize} for later recovery.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 11 dynamic
   */
  class WebDownloadDelegate {
    /**
     * Invoked to notify the app before the download starts. The app must call **WebDownloadItem.start("xxx")** in this
     * API and provide a download path. Otherwise, the download remains in the PENDING state.
     *
     * > **NOTE**
     * >
     * > For a download task in the PENDING state, the file is first saved to a temporary directory. After
     * > [WebDownloadItem.start]{@link webview.WebDownloadItem#start} is called and the target path is specified, the
     * > temporary file is renamed to the target file name, and the remaining part of the download is saved directly to
     * > the target path. To avoid generating a temporary file before **WebDownloadItem.start** is called, you can first
     * > cancel the current download task through [WebDownloadItem.cancel]{@link webview.WebDownloadItem#cancel}, and
     * > then use [WebDownloadManager.resumeDownload]{@link webview.WebDownloadManager#resumeDownload} to resume the
     * > canceled download task.
     *
     * @param { Callback<WebDownloadItem> } callback - Callback invoked before the download starts.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    onBeforeDownload(callback: Callback<WebDownloadItem>): void;

    /**
     * Callback invoked during the download process. The app can obtain information such as the download progress (
     * percentage) and the number of bytes received through this callback to monitor or update the download status.
     *
     * @param { Callback<WebDownloadItem> } callback - Callback used to return the download update.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    onDownloadUpdated(callback: Callback<WebDownloadItem>): void;

    /**
     * Callback invoked when the download is complete. The app can obtain the information of the completed download task
     * through this callback for subsequent processing (such as updating the UI or notifying the user).
     *
     * @param { Callback<WebDownloadItem> } callback - Callback invoked when the download is complete.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    onDownloadFinish(callback: Callback<WebDownloadItem>): void;

    /**
     * Callback invoked when the download fails. The app can obtain detailed information about the download failure
     * through this callback for error handling, retry, or logging.
     *
     * @param { Callback<WebDownloadItem> } callback - Callback for the download failure.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    onDownloadFailed(callback: Callback<WebDownloadItem>): void;
  }

  /**
   * WebDownloadManager is a static management class for download tasks of the Web component in the ArkWeb framework. It
   * manages all file download processes triggered by the Web component. Developers can use this class to set a download
   * delegate to receive download progress callbacks and resume failed download tasks. All methods of this class are
   * static methods and take effect globally within the entire app.
   *
   * WebDownloadManager works together with [WebDownloadDelegate]{@link webview.WebDownloadDelegate} and
   * [WebDownloadItem]{@link webview.WebDownloadItem}: WebDownloadManager is responsible for lifecycle management and
   * delegate setting of download tasks, WebDownloadDelegate reports download progress and status change events to the
   * app layer, and WebDownloadItem represents a single download task entity, supporting operations such as pause,
   * resume, and cancel.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 11 dynamic
   */
  class WebDownloadManager {
    /**
     * Sets the delegate used to receive download progress triggered by WebDownloadManager.
     *
     * > **NOTE**
     * >
     * > - Before calling this API, if the Web component has not been created and the
     * > [initializeWebEngine]{@link webview.WebviewController#initializeWebEngine} method has not been executed, you
     * > must call this method to initialize the web kernel first. Otherwise, calling this API is invalid.
     *
     * @param { WebDownloadDelegate } delegate - Delegate used to receive the download progress.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    static setDownloadDelegate(delegate: WebDownloadDelegate): void;

    /**
     * Resumes a failed download task. You need to obtain the deserialized object through the
     * [WebDownloadItem.deserialize]{@link webview.WebDownloadItem#deserialize} method. This applies only to previously
     * failed download tasks.
     *
     * > **NOTE**
     * >
     * > - Before calling this API, if the Web component has not been created and the initializeWebEngine method has not
     * > been executed to complete web kernel initialization, you must call the initializeWebEngine method for
     * > initialization first. Otherwise, calling this API is invalid.
     * >
     * > - You must call [setDownloadDelegate]{@link webview.WebDownloadManager#setDownloadDelegate} to set the download
     * > delegate first. Otherwise, error code 17100018 will be thrown.
     *
     * @param { WebDownloadItem } webDownloadItem - Download task restored from serialized data.
     * @throws { BusinessError } 17100018 - No WebDownloadDelegate has been set yet.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static resumeDownload(webDownloadItem: WebDownloadItem): void;
  }

  /**
   * WebHttpBodyStream is an HTTP request body data stream object used to read the request body data of POST, PUT, and
   * other requests in custom scheme interception scenarios. This object is obtained through the getHttpBodyStream
   * method of WebSchemeHandlerRequest and supports data of the BYTES, FILE, BLOB, and CHUNKED types. Developers can use
   * this API to read uplink data in a custom protocol interceptor, enabling inspection or forwarding of the request
   * body. Note: Other APIs in this class can be called only after
   * [initialize]{@link webview.WebHttpBodyStream#initialize} succeeds.
   *
   * WebHttpBodyStream works in conjunction with [WebSchemeHandlerRequest]{@link webview.WebSchemeHandlerRequest}:
   * WebSchemeHandlerRequest represents the intercepted request, and WebHttpBodyStream represents the HTTP body data
   * stream of that request. By reading data from the stream, developers can obtain the complete request body content.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  class WebHttpBodyStream {
    /**
     * Initializes this **WebHttpBodyStream** instance.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 17100022 - Failed to initialize the HTTP body stream.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    initialize(): Promise<void>;
    /**
     * Reads data from this **WebHttpBodyStream** instance.
     *
     * @param { number } size - Number of bytes to read from the WebHttpBodyStream. Unit: byte.
     * @returns { Promise<ArrayBuffer> } Promise used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    read(size: number): Promise<ArrayBuffer>;
    /**
     * Obtains the size of data in this **WebHttpBodyStream** instance. This API always returns zero when chunked
     * transfer is used.
     *
     * @returns { number } Data size of the WebHttpBodyStream, in bytes.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    getSize(): number;
    /**
     * Reads the current read position in this **WebHttpBodyStream** instance.
     *
     * @returns { number } Current read position in WebHttpBodyStream. Unit: Byte.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    getPosition(): number;
    /**
     * Checks whether this **WebHttpBodyStream** instance is transmitted by chunk.
     *
     * @returns { boolean } Whether the **WebHttpBodyStream** instance is transmitted by chunk. The value **true**
     *     indicates that the **WebHttpBodyStream** instance is transmitted by chunk, and **false** indicates the
     *     opposite.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isChunked(): boolean;
    /**
     * Checks whether all data in this **WebHttpBodyStream** instance has been read.
     *
     * @returns { boolean } Whether all data in the **WebHttpBodyStream** instance has been read.
     *     <br>This API returns **true** if all data in the **WebHttpBodyStream** instance is read. It returns **false**
     *     before the first read attempt is made for the **WebHttpBodyStream** instance that uses chunked transfer.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isEof(): boolean;
    /**
     * Checks whether the uploaded data in this **WebHttpBodyStream** instance is in memory.
     *
     * @returns { boolean } Whether the uploaded data in the **WebHttpBodyStream** instance is stored in memory.
     *     <br>This API returns **true** if all the upload data in the **WebHttpBodyStream** instance is in memory and
     *     all read requests will be completed synchronously. **false** is returned if the data is chunked.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isInMemory(): boolean;
  }

  /**
   * Enumerates the types of requested resources.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  enum WebResourceType {
    /**
     * Top-level page.
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
     * Image (JPG, GIF, PNG, or other format).
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
     * Other sub-resource. If the type is unknown, it is used as the default type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    SUB_RESOURCE = 6,

    /**
     * Object (or embed) tag of the plug-in, or the resource requested by the plug-in.
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
     * Main resource of a dedicated worker thread.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    WORKER = 9,

    /**
     * Main resource of a shared worker thread.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    SHARED_WORKER = 10,

    /**
     * Explicit prefetch request.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    PREFETCH = 11,

    /**
     * Website icon.
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
     * <a ping>/sendBeacon ping request.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    PING = 14,

    /**
     * Main resource of a service worker.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    SERVICE_WORKER = 15,

    /**
     * Report of Content Security Policy violation.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    CSP_REPORT = 16,

    /**
     * Resource requested by the plug-in.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    PLUGIN_RESOURCE = 17,

    /**
     * Main frame redirection request that triggers service worker preloading.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    NAVIGATION_PRELOAD_MAIN_FRAME = 19,

    /**
     * Subframe redirection request that triggers service worker preloading.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    NAVIGATION_PRELOAD_SUB_FRAME = 20
  }

  /**
   * The WebSchemeHandlerRequest class defines a wrapper object for resource requests intercepted through
   * WebSchemeHandler. When a developer registers a custom protocol handler (WebSchemeHandler), the Web kernel creates a
   * WebSchemeHandlerRequest instance and passes it to the callback method upon intercepting a request matching the
   * protocol. This object provides the following request information query methods: getting request header information,
   * request URL, request method, source URL, determining whether it is a main frame request, whether it is associated
   * with a user gesture, getting the request body stream, resource type, and the frame URL that triggered the request,
   * so as to determine whether to intercept the request and construct a corresponding response.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  class WebSchemeHandlerRequest {
    /**
     * Obtains the information about the resource request header.
     *
     * @returns { Array<WebHeader> } Information about the resource request header.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    getHeader(): Array<WebHeader>;
    /**
     * Obtains the URL of the resource request.
     *
     * @returns { string } URL of the resource request.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    getRequestUrl(): string;
    /**
     * Obtains the request method.
     *
     * @returns { string } Request method.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    getRequestMethod(): string;
    /**
     * Obtains the referrer.
     *
     * @returns { string } Obtained referrer.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    getReferrer(): string;
    /**
     * Checks whether the resource request is from the main frame.
     *
     * @returns { boolean } Whether the resource request is for the main frame. The value **true** indicates the
     *     resource request is for the main frame, and **false** indicates otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    isMainFrame(): boolean;
    /**
     * Checks whether the resource request is associated with a gesture (for example, a tap).
     *
     * @returns { boolean } true if the resource request is associated with a gesture (such as a tap); false otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    hasGesture(): boolean;
    /**
     * Obtains the **WebHttpBodyStream** instance in this resource request.
     *
     * @returns { WebHttpBodyStream | null } **WebHttpBodyStream** instance in the resource request. If there is no
     *     **WebHttpBodyStream** instance, **null** is returned.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    getHttpBodyStream(): WebHttpBodyStream | null;
    /**
     * Obtains the resource type of this resource request.
     *
     * @returns { WebResourceType } Resource type of the resource request.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    getRequestResourceType(): WebResourceType;
    /**
     * Obtains the URL of the frame that triggers this request.
     *
     * @returns { string } URL of the frame that triggers the request.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    getFrameUrl(): string;
  }

  /**
   * WebSchemeHandlerResponse is a class used to construct HTTP response data in custom scheme interception scenarios.
   * Developers use this class to create a Response object, set properties such as HTTP status code, status text, MIME
   * type, character set, custom response headers, network error code, and redirection URL, and then return the custom
   * response to the Web component through WebResourceHandler. This class is the core data carrier for custom resource
   * interception.
   *
   * WebSchemeHandlerResponse is used together with WebResourceHandler: the developer constructs a
   * WebSchemeHandlerResponse object and fills in the response properties, and then sends the response header to the
   * intercepted request through the didReceiveResponse method of WebResourceHandler.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  class WebSchemeHandlerResponse {
    /**
     * Constructs a **Response** object.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    constructor();
    /**
     * Sets the redirection URL or the URL changed due to HSTS for this response. After the URL is set, a redirection to
     * the new URL is triggered.
     *
     * @param { string } url - URL after redirection or change due to HSTS.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    setUrl(url: string): void;
    /**
     * Obtains the redirection URL or the URL changed due to HSTS.
     *
     * Risk warning: To obtain a URL for JavaScriptProxy communication API authentication, use
     * [getLastJavascriptProxyCallingFrameUrl<sup>12+</sup>]{@link webview.WebviewController#getLastJavascriptProxyCallingFrameUrl}.
     *
     * @returns { string } URL after redirection or HSTS change.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    getUrl(): string;
    /**
     * Sets the network error code for this response.
     *
     * @param { WebNetErrorList } code - Network error code.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    setNetErrorCode(code: WebNetErrorList): void;
    /**
     * Obtains the network error code of the response.
     *
     * @returns { WebNetErrorList } Network error code returned for the Response.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    getNetErrorCode(): WebNetErrorList;
    /**
     * Sets the HTTP status code for this response.
     *
     * @param { number } code - HTTP status code.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    setStatus(code: number): void;
    /**
     * Obtains the HTTP status code of the response.
     *
     * @returns { number } Returns the HTTP status code of the Response.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    getStatus(): number;
    /**
     * Sets the status text for this response.
     *
     * @param { string } text - Status text.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    setStatusText(text: string): void;
    /**
     * Obtains the status text of this response.
     *
     * @returns { string } Status text.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    getStatusText(): string;
    /**
     * Sets the MIME type for the current response. For example, set it to text/html when injecting HTML content, and
     * set it to application/json when injecting JSON data.
     *
     * @param { string } type - Media type (MIME type).
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    setMimeType(type: string): void;
    /**
     * Obtains the MIME type of this response.
     *
     * @returns { string } MIME type string of the response content, for example, 'text/html' or 'application/json'.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    getMimeType(): string;
    /**
     * Sets the character encoding format for the current response.
     *
     * @param { string } encoding - Character encoding format.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    setEncoding(encoding: string): void;
    /**
     * Obtains the character encoding format of the response.
     *
     * @returns { string } Character encoding format of the response content, such as 'utf-8', 'gbk', etc.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    getEncoding(): string;
    /**
     * Sets the header information for this response.
     *
     * @param { string } name - Name of the header, which specifies the HTTP response header field name to set. Common
     *     values include 'Content-Type', 'Authorization', 'Cache-Control', etc.
     * @param { string } value - Value of the header, which specifies the content of the HTTP response header field. It
     *     must match the header field corresponding to the name parameter. For example, when name is 'Content-Type',
     *     value can be 'text/html; charset=utf-8'.
     * @param { boolean } overwrite - Whether to override the existing header. The value **true** means to override the
     *     existing header, and **false** means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    setHeaderByName(name: string, value: string, overwrite: boolean): void;
    /**
     * Obtains the value of a response header field by name.
     *
     * @param { string } name - Name of the response header field to obtain.
     * @returns { string } Value of the response header field with the specified name.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    getHeaderByName(name: string): string;
    /**
     * Set the custom error code for the Web response.
     *
     * @param { number } customErrorCode - The custom error code for this response, Web engine will pass the custom
     *     error code directly to the application through onErrorReceive.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.1.0 dynamic
     */
    setCustomErrorCode(customErrorCode: number): void;
    /**
     * Get the custom error code of the Web response.
     *
     * @returns { number } Return the custom error code that was set for this response.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.1.0 dynamic
     */
    getCustomErrorCode(): number;
  }

  /**
   * WebResourceHandler is a handler used to return the result of an intercepted request to the **Web** component in
   * custom scheme interception scenarios. After **WebSchemeHandler** decides to intercept a request, the developer uses
   * **WebResourceHandler** to provide a custom response header (**didReceiveResponse**) and response body data (
   * **didReceiveResponseBody**) to the **Web** component, and notifies the request of completion (**didFinish**) or
   * failure (**didFail**). **didFail** supports an overloaded method (API version 20+) to simplify the error handling
   * process. This API enables the app layer to fully customize the response to network requests.
   *
   * **WebResourceHandler** works with [WebSchemeHandler]{@link webview.WebSchemeHandler} and
   * [WebSchemeHandlerResponse]{@link webview.WebSchemeHandlerResponse}: the **onRequestStart** callback of
   * **WebSchemeHandler** receives a **WebResourceHandler** instance, the developer constructs a
   * **WebSchemeHandlerResponse** object, passes the response header and response body data through
   * **didReceiveResponse** and **didReceiveResponseBody** of **WebResourceHandler**, and finally calls **didFinish** or
   * **didFail** to end the request.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  class WebResourceHandler {
    /**
     * Passes the constructed response header to the intercepted request. This API must be called before **didFinish**
     * or **didFail**.
     *
     * @param { WebSchemeHandlerResponse } response - Response to the intercepted request, which is used to pass custom
     *     response header information, including the status code and response header fields, to the Web component. The
     *     developer must construct this object first and then pass it to the intercepted request through the
     *     didReceiveResponse method.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    didReceiveResponse(response: WebSchemeHandlerResponse): void;
    /**
     * Passes the constructed response body to the intercepted request. This API must be called before **didFinish** or
     * **didFail**.
     *
     * @param { ArrayBuffer } data - Binary data of the ArrayBuffer type, used to pass HTTP response body content.
     *     Developers need to construct binary data in the corresponding format based on the response content type (such
     *     as text, images, JSON, etc.).
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    didReceiveResponseBody(data: ArrayBuffer): void;
    /**
     * Notifies the **Web** component that the intercepted request is complete and no more data is available. Before
     * calling this API, call [didReceiveResponse]{@link webview.WebResourceHandler#didReceiveResponse} to pass in the
     * response header.
     *
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    didFinish(): void;
    /**
     * Notifies the ArkWeb kernel that the intercepted request will fail and ends the network request. Before calling
     * this API, call [didReceiveResponse]{@link webview.WebResourceHandler#didReceiveResponse} to pass in the response
     * header.
     *
     * @param { WebNetErrorList } code - Network error code, used to identify the cause of the request failure.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    didFail(code: WebNetErrorList): void;
    /**
     * Notifies the ArkWeb kernel that the intercepted request will fail. If **completeIfNoResponse** is set to
     * **false**, call [didReceiveResponse]{@link webview.WebResourceHandler#didReceiveResponse} first to pass in the
     * response header. If **completeIfNoResponse** is set to **true** and
     * [didReceiveResponse]{@link webview.WebResourceHandler#didReceiveResponse} is not called beforehand, a response
     * header is automatically generated with the network error code -104. For details, see
     * [WebNetErrorList]{@link @ohos.web.netErrorList:WebNetErrorList}.
     *
     * @param { WebNetErrorList } code - Network error code that identifies the cause of the request failure.
     * @param { boolean } completeIfNoResponse - Whether to automatically complete this network request when
     *     [didReceiveResponse]{@link webview.WebResourceHandler#didReceiveResponse} is not called. The value **true**
     *     means to automatically generate a response header (with network error code -104) and complete the request,
     *     and **false** means to wait for the app to call
     *     [didReceiveResponse]{@link webview.WebResourceHandler#didReceiveResponse}.
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
     * @since 26.1.0 dynamic
     */
    didFail(code: WebNetErrorList, completeIfNoResponse: boolean, customErrorCode: number): void;
  }

  /**
   * WebSchemeHandler is an interceptor class used to intercept network requests for a specified scheme (protocol),
   * supporting scenarios such as custom protocol handling, local resource substitution, and specific request
   * interception. Developers implement the onRequestStart callback to decide whether to intercept a request, and
   * intercepted requests can have custom response content returned through WebResourceHandler. The WebSchemeHandler
   * instance is registered to a specified scheme through the
   * [setWebSchemeHandler]{@link webview.WebviewController#setWebSchemeHandler} method of WebviewController, thereby
   * intercepting and processing all requests for that scheme.
   *
   * WebSchemeHandler works in conjunction with [WebSchemeHandlerRequest]{@link webview.WebSchemeHandlerRequest},
   * [WebResourceHandler]{@link webview.WebResourceHandler}, and
   * [WebSchemeHandlerResponse]{@link webview.WebSchemeHandlerResponse}: the onRequestStart callback receives a
   * WebSchemeHandlerRequest (information about the intercepted request) and a WebResourceHandler (the handler used to
   * return a custom response), and returns a boolean value indicating whether to intercept. onRequestStop is triggered
   * when the request ends (only for intercepted requests) and is used for resource cleanup.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  class WebSchemeHandler {
    /**
     * Called when a request starts. In this callback, you can determine whether to intercept the request. If **false**
     * is returned, the request is not intercepted and the handler is invalid. If **true** is returned, the request is
     * intercepted.
     *
     * > **NOTE**
     * >
     * > - Redirected URLs cannot be intercepted individually. To intercept a redirected URL, you must also intercept
     * > the original request URL.
     *
     * @param { function } callback - Callback invoked when interception of the corresponding scheme request starts.
     *     `request` is the request, and `handler` is used to provide custom response headers and response body to the
     *     Web component. The return value **true** indicates that the request is intercepted, and **false** indicates
     *     that the request is not intercepted and the handler becomes invalid.
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
     * Called when the request is complete. This callback is triggered only when the
     * [onRequestStart]{@link webview.WebSchemeHandler#onRequestStart( callback: (request: WebSchemeHandlerRequest, handler: WebResourceHandler) => boolean)}
     * callback intercepts the request. Specifically, this callback is invoked in the following cases:
     *
     * 1. WebResourceHandler calls didFail or didFinish.
     * 2. The request is interrupted due to other reasons (such as network errors or system exceptions).
     *
     * @param { Callback<WebSchemeHandlerRequest> } callback - Callback invoked when the request is complete.
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    onRequestStop(callback: Callback<WebSchemeHandlerRequest>): void;
  }

  /**
   * Enumerates the playback statuses of the player, which is an input parameter of the
   * [handleStatusChanged]{@link webview.NativeMediaPlayerHandler.handleStatusChanged} API.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enum PlaybackStatus {
    /**
     * Media paused.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    PAUSED = 0,
    /**
     * Media playing.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    PLAYING = 1
  }

  /**
   * Enumerates the network statuses of the player.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enum NetworkState {
    /**
     * The player has not started downloading data.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    EMPTY = 0,
    /**
     * The player's network activity is idle. This could mean that the download of a media segment is complete, and the
     * player is waiting to start downloading the next segment.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    IDLE = 1,
    /**
     * The player is downloading media data.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    LOADING = 2,
    /**
     * A network error occurs.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    NETWORK_ERROR = 3
  }

  /**
   * Enumerates the cache states of the player.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enum ReadyState {
    /**
     * There is no data cached.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    HAVE_NOTHING = 0,
    /**
     * Only media metadata is cached.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    HAVE_METADATA = 1,
    /**
     * Data up to the current playback position is cached.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    HAVE_CURRENT_DATA = 2,
    /**
     * The buffered duration exceeds the current playback progress, but stuttering may still occur.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    HAVE_FUTURE_DATA = 3,
    /**
     * Sufficient data has been cached to ensure smooth playback.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    HAVE_ENOUGH_DATA = 4
  }

  /**
   * Enumerates the error types of the player.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enum MediaError {
    /**
     * Network error.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    NETWORK_ERROR = 1,
    /**
     * Media format error.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    FORMAT_ERROR = 2,
    /**
     * Decoding error.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    DECODE_ERROR = 3
  }

  /**
   * NativeMediaPlayerHandler is the parameter of the
   * [CreateNativeMediaPlayerCallback]{@link webview.CreateNativeMediaPlayerCallback} callback function. When an app
   * uses [NativeMediaPlayerBridge]{@link webview.NativeMediaPlayerBridge} to take over web media playback, it must
   * synchronize various player state changes to the ArkWeb kernel in real time. This ensures that the web JavaScript
   * can obtain the correct player state. The ArkWeb kernel converts these states into standard HTML5 Media Events and
   * triggers the event listeners registered in the web page, thereby ensuring the normal functioning of the web page.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  interface NativeMediaPlayerHandler {

    /**
     * Called to notify the ArkWeb engine of the playback status of the player when the playback status changes.
     *
     * @param { PlaybackStatus } status - Player status.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleStatusChanged(status: PlaybackStatus): void;

    /**
     * Called to notify the ArkWeb engine of the volume of the player when the volume changes.
     *
     * @param { number } volume - Volume of the player. Value range: [0, 1.0]. If the value is out of range, the ArkWeb
     *     kernel will not execute it.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleVolumeChanged(volume: number): void;

    /**
     * Called to notify the ArkWeb engine of the muted status of the player when the muted status changes.
     *
     * @param { boolean } muted - Whether the player is muted.
     *     <br>The value **true** indicates that the player is muted, and **false** indicates the opposite.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleMutedChanged(muted: boolean): void;

    /**
     * When the playback rate of the player changes, this method is called to notify the ArkWeb kernel of the playback
     * rate.
     *
     * @param { number } playbackRate - Playback rate. The value range is
     *     [0, +∞). If a negative number is passed in, the ArkWeb kernel will not execute it.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handlePlaybackRateChanged(playbackRate: number): void;

    /**
     * Called to notify the ArkWeb engine of the total duration of the media.
     *
     * @param { number } duration - Total duration of the media.
     *     <br>Unit: second. Value range:
     *     [0, +∞). If a negative number is passed in, the ArkWeb kernel will not execute.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleDurationChanged(duration: number): void;

    /**
     * Called to notify the ArkWeb engine of the playback progress when the playback progress changes.
     *
     * @param { number } currentPlayTime - Current playback time.
     *     <br>Unit: second. Value range: [0, duration]. If the value is out of range, the ArkWeb kernel will not
     *     execute it.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleTimeUpdate(currentPlayTime: number): void;

    /**
     * Called to notify the ArkWeb engine of the buffer time when the buffer time changes.
     *
     * @param { number } bufferedEndTime - Duration of the buffered media.
     *     <br>Unit: second. Value range: [0, duration]. If the value is out of range, the ArkWeb kernel will not
     *     execute.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleBufferedEndTimeChanged(bufferedEndTime: number): void;

    /**
     * When media playback ends, this method is called to notify the ArkWeb kernel of the playback end event.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleEnded(): void;

    /**
     * Called to notify the ArkWeb engine of the network status of the player when the network status changes.
     *
     * @param { NetworkState } state - Network status of the player.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleNetworkStateChanged(state: NetworkState): void;

    /**
     * Called to notify the ArkWeb engine of the cache status of the player when the cache status changes.
     *
     * @param { ReadyState } state - Cache status of the player.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleReadyStateChanged(state: ReadyState): void;

    /**
     * Called to notify the ArkWeb engine of the full screen status of the player when the full screen status changes.
     *
     * @param { boolean } fullscreen - Whether the player is in full screen.
     *     <br>The value **true** means that the player is in full screen, and **false** means the opposite.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleFullscreenChanged(fullscreen: boolean): void;

    /**
     * When the player enters the seek state, this method is called to notify the ArkWeb kernel of the seek entry event.
     * After the seek is complete, handleSeekFinished should be called to notify the ArkWeb kernel of the seek
     * completion event.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleSeeking(): void;

    /**
     * When the player completes seeking, this method is called to notify the ArkWeb kernel of the seek completion
     * event.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleSeekFinished(): void;

    /**
     * When an error occurs in the player, this method is called to notify the ArkWeb kernel of the error.
     *
     * @param { MediaError } error - Error object type.
     * @param { string } errorMessage - Error message.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleError(error: MediaError, errorMessage: string): void;

    /**
     * When the player parses the video dimensions, this method is called to notify the ArkWeb kernel of the video size.
     *
     * @param { number } width - Width of the video, in pixels. Value range:
     *     [0, +∞). If a negative number is passed in, the ArkWeb kernel ignores this value.
     * @param { number } height - Height of the video, in pixels. Value range:
     *     [0, +∞). If a negative number is passed in, the ArkWeb kernel ignores this value.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleVideoSizeChanged(width: number, height: number): void;
  }

  /**
   * Enumerates the suspension types of the player.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  enum SuspendType {
    /**
     * The page enters the BFCache.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    ENTER_BACK_FORWARD_CACHE = 0,

    /**
     * The page enters the background.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    ENTER_BACKGROUND,

    /**
     * The page is automatically cleaned up by the system.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    AUTO_CLEANUP
  }

  /**
   * NativeMediaPlayerBridge is the return value type of the
   * [CreateNativeMediaPlayerCallback]{@link webview.CreateNativeMediaPlayerCallback} callback function. It is an
   * interface class between the player that takes over web page media and the ArkWeb kernel. The ArkWeb kernel uses an
   * object of this interface class to control the player created by the app to take over web page media. This interface
   * allows the app to use a custom media player to take over media content playback in web pages. It also supports
   * player suspension and resumption mechanisms.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  interface NativeMediaPlayerBridge {
    /**
     * Notifies the app of the surface position information. This method is called back by the ArkWeb kernel when the
     * web page layout changes, the page scrolls, or the playback area changes. The app must update the position and
     * size of the native player's rendering surface accordingly.
     *
     * @param { number } x - x coordinate of the surface relative to the Web component.
     *     <br>Unit: px.
     * @param { number } y - y coordinate of the surface relative to the Web component.
     *     <br>Unit: px.
     * @param { number } width - Width of the surface.
     *     <br>Unit: px.
     * @param { number } height - Height of the surface.
     *     <br>Unit: px.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    updateRect(x: number, y: number, width: number, height: number): void;

    /**
     * Plays the media.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    play(): void;

    /**
     * Pauses playback.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    pause(): void;

    /**
     * Seeks to a specific time point in the media.
     *
     * @param { number } targetTime - Target time for seek, calculated from the start of media playback.
     *     <br>Unit: seconds.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    seek(targetTime: number): void;

    /**
     * Sets the playback volume.
     *
     * @param { number } volume - Volume of the player.
     *     <br>Value range: [0, 1.0], where 0 indicates mute and 1.0 indicates the maximum volume. If the value is out
     *     of range, it is automatically corrected to the boundary value.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    setVolume(volume: number): void;

    /**
     * Sets the muted status.
     *
     * @param { boolean } muted - Whether to mute the player.
     *     <br>The value **true** means to mute the player, and **false** means the opposite.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    setMuted(muted: boolean): void;

    /**
     * Sets the playback rate.
     *
     * @param { number } playbackRate - Playback rate.
     *     <br>Value range: [0, 10.0], where 1 indicates the original speed. If the value is out of range, it is
     *     automatically corrected to the boundary value.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    setPlaybackRate(playbackRate: number): void;

    /**
     * Releases this player.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    release(): void;

    /**
     * Enables the player to enter full screen mode.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    enterFullscreen(): void;

    /**
     * Enables the player to exit full screen mode.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    exitFullscreen(): void;

    /**
     * Notifies the app to rebuild the player and restore its status information. This method is used only in pair with
     * suspendPlayer.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    resumePlayer?(): void;

    /**
     * Notifies the app to destroy the player and save its status information. This method is used only in pair with
     * resumePlayer.
     *
     * @param { SuspendType } type - Player suspension type, which specifies how the player is suspended. Different
     *     SuspendType values correspond to different suspension scenarios.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    suspendPlayer?(type: SuspendType): void;
  }

  /**
   * Enumerates the media types.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enum MediaType {
    /**
     * Video.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    VIDEO = 0,
    /**
     * Audio.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    AUDIO = 1
  }

  /**
   * Enumerates the media source types.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enum SourceType {
    /**
     * URL.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    URL = 0,
    /**
     * Blob.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    MSE = 1
  }

  /**
   * Implements a **MediaSourceInfo** object to provide the information about the media source.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  class MediaSourceInfo {
    /**
     * Type of the media source.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    type: SourceType;

    /**
     * Address of the media source.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    source: string;

    /**
     * Format of the media source, which may be empty. You need to determine the format by yourself.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    format: string;
  }

  /**
   * Defines a rectangle.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  interface RectEvent {
    /**
     * X-coordinate of the upper left corner of the rectangular area.
     *
     * Unit: px.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    x: number;
    /**
     * Y-coordinate of the upper left corner of the rectangular area.
     *
     * Unit: px.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    y: number;
    /**
     * Width of the rectangle.
     *
     * Unit: px.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    width: number;
    /**
     * Height of the rectangle.
     *
     * Unit: px.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    height: number;
  }

  /**
   * NativeMediaPlayerSurfaceInfo uses [enableNativeMediaPlayer]{@link WebAttribute#enableNativeMediaPlayer} to
   * configure the surface information for same-layer rendering. This class allows an app to take over the web media
   * playback functionality, configuring the surface ID and position information to integrate web media content with the
   * app UI through same-layer rendering and enhance the media playback experience.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  class NativeMediaPlayerSurfaceInfo {
    /**
     * ID of the surface, which is the surfaceId of the NativeImage used for same-layer rendering.
     *
     * For details, see [NativeEmbedDataInfo]{@link NativeEmbedDataInfo}.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    id: string;

    /**
     * Position information of the surface, used to specify the display position and size of the surface during same-
     * layer rendering.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    rect: RectEvent;
  }

  /**
   * Enumerates how the player preloads media data.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enum Preload {
    /**
     * No media data is preloaded.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    NONE = 0,
    /**
     * Only the metadata of the media is preloaded.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    METADATA = 1,
    /**
     * A sufficient amount of media data is preloaded to ensure smooth playback
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    AUTO = 2
  }

  /**
   * Represents a **MediaInfo** object used as a parameter of the
   * [CreateNativeMediaPlayerCallback]{@link webview.CreateNativeMediaPlayerCallback} callback. The object contains
   * information about media on the web page. The application may create, based on the information, a player that takes
   * over media playback of the web page.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  interface MediaInfo {
    /**
     * ID of the `<video>` or `<audio>` element in the web page.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    embedID: string;
    /**
     * Type of the media.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    mediaType: MediaType;
    /**
     * Source of the media. There may be multiple sources. The application needs to select a supported source to play.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    mediaSrcList: MediaSourceInfo[];
    /**
     * Surface information used for same-layer rendering.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    surfaceInfo: NativeMediaPlayerSurfaceInfo;
    /**
     * Whether the `<video>` or `<audio>` element has the `controls` attribute.
     *
     * The value **true** indicates that it has, and **false** indicates that it does not.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    controlsShown: boolean;
    /**
     * Value of the **controlslist** attribute in **<video>** or **<audio>**.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    controlList: string[];
    /**
     * Whether muted playback is required.
     *
     * The value **true** indicates muted playback, and **false** indicates non-muted playback.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    muted: boolean;
    /**
     * URL of a poster.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    posterUrl: string;
    /**
     * Whether preloading is required.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    preload: Preload;
    /**
     * HTTP headers that need to be included in the player's request for media resources.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    headers: Record<string, string>;
    /**
     * Attributes in **<video>** or **<audio>**.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    attributes: Record<string, string>;
  }

  /**
   * Parameter of the [onCreateNativeMediaPlayer]{@link webview.WebviewController#onCreateNativeMediaPlayer} method. A
   * callback invoked when the webpage needs to play media, used to create a player to take over media playback in the
   * webpage. Through this takeover mechanism, the app can use a custom player to implement special features or optimize
   * performance.
   *
   * @param { NativeMediaPlayerHandler } handler - Object used by the app to report player status events, such as play,
   *     pause, and error, to the ArkWeb kernel, enabling the kernel to synchronize media playback states in web pages.
   * @param { MediaInfo } mediaInfo - Information about the media on the web page.
   * @returns { NativeMediaPlayerBridge } An interface class that bridges the web media player and the ArkWeb kernel.<br
   *     />The app needs to implement this interface class.<br/>The ArkWeb kernel controls the media player created by
   *     the app through this interface object.<br/>If the app returns null, it indicates that the app does not take
   *     over the playback of this media, and the ArkWeb kernel plays the media.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  type CreateNativeMediaPlayerCallback =
      (handler: NativeMediaPlayerHandler, mediaInfo: MediaInfo) => NativeMediaPlayerBridge;

  /**
   * AdsBlockManager is a class in the ArkWeb framework used to manage the ad filtering feature of Web components. It
   * provides capabilities such as setting ad filtering rules, managing domain AllowedList/DisallowedList, and
   * controlling filtering policies. All Web components in each app share a single AdsBlockManager static class.
   * Developers can use this class to inject ad filtering configuration files that conform to the universal EasyList
   * syntax into Web components and flexibly control the ad filtering status for specific websites.
   *
   * The core mechanism of AdsBlockManager is based on a two-tier AllowedList/DisallowedList strategy using domain
   * suffix matching: the DisallowedList is used to disable ad filtering for specific websites, while the AllowedList
   * has a higher priority and can re-enable ad filtering for certain subdomains within the scope of the DisallowedList.
   * After successful internal parsing, ad filtering rules are persistently stored and do not need to be set again after
   * an app restart. However, they are not persistent and must be reconfigured after an app restart.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  class AdsBlockManager {
    /**
     * Sets a custom ad filtering configuration file that conforms to the universal EasyList syntax in the Web
     * components.
     *
     * > **NOTE**
     * >
     * > - The ad filtering rules set by this API will be persistently stored after successful internal parsing; you do
     * > not need to set them again after the app is restarted.
     * >
     * > - Starting from API version 18, calling this API on a device that does not support the ad filtering feature
     * > will throw an 801 exception.
     *
     * @param {string} rulesFile - Path to the rule file that complies with EasyList syntax. The app must have read
     *     permission on this file.
     * @param {boolean} replace - Whether to replace the built-in default rules. The value **true** indicates that the
     *     built-in default rules will be forcibly replaced; **false** indicates that the custom rules will work
     *     alongside the built-in default rules.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static setAdsBlockRules(rulesFile: string, replace: boolean): void;

    /**
     * Adds an array of domain names to the disallowed list of this **AdsBlockManager** object. When the ad blocking
     * feature is enabled, ad blocking for these websites will be disabled.
     *
     * > **NOTE**
     * >
     * > - The domain names set by this API are not persistent; they need to be set again after the app is restarted.
     * >
     * > - The ad filtering feature uses suffix matching to determine whether the domainSuffix matches the URL of the
     * > current site. For example, if the website opened in the current Web component is https://www.example.com and
     * > the DisallowedList contains 'example.com' or 'www.example.com', the suffix match succeeds, ad filtering will be
     * > disabled for this website, and ad filtering will also be disabled when accessing 'https://m.example.com'.
     * >
     * > - Starting from API version 18, calling this API on a device that does not support the ad filtering feature
     * > will throw an 801 exception.
     *
     * @param { Array<string> } domainSuffixes - Array of domain names, for example, ['example.com', 'abcd.efg.com'].
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static addAdsBlockDisallowedList(domainSuffixes: Array<string>): void;

    /**
     * Adds an array of domain names to the AllowedList of this AdsBlockManager object. This API is typically used to re
     * -enable ad filtering for certain websites in the DisallowedList.
     *
     * > **NOTE**
     * >
     * > - The domain names set by this API are not persistent; they need to be set again after the app is restarted.
     * >
     * > - The AllowedList has a higher priority than the DisallowedList. For example, if ['example.com'] is configured
     * > in the DisallowedList, ad filtering is disabled for all web pages under the example.com domain. To enable ad
     * > filtering for 'news.example.com', you can use addAdsBlockAllowedList(['news.example.com']).
     * >
     * > - Starting from API version 18, calling this API on a device that does not support the ad filtering feature
     * > will throw an 801 exception.
     *
     * @param { Array<string> } domainSuffixes - Array of domain names, for example, ['example.com', 'abcd.efg.com'].
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static addAdsBlockAllowedList(domainSuffixes: Array<string>): void;

    /**
     * Removes an array of domain names from the disallowed list of this **AdsBlockManager** object.
     *
     * > **NOTE**
     * >
     * > - The DisallowedList of AdsBlockManager is not persistent; it needs to be set again after the app is restarted.
     * > Removing an entry that does not exist does not trigger an exception.
     * >
     * > - Starting from API version 18, calling this API on a device that does not support the ad filtering feature
     * > will throw an 801 exception.
     *
     * @param { Array<string> } domainSuffixes - Array of domain names, for example, ['example.com', 'abcd.efg.com'].
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static removeAdsBlockDisallowedList(domainSuffixes: Array<string>): void;

    /**
     * Removes an array of domain names from the allowed list of this **AdsBlockManager** object.
     *
     * > **NOTE**
     * >
     * > - The AllowedList of AdsBlockManager is not persistent; it needs to be set again after the app is restarted.
     * > Removing an entry that does not exist does not trigger an exception.
     * >
     * > - Starting from API version 18, calling this API on a device that does not support the ad filtering feature
     * > will throw an 801 exception.
     *
     * @param { Array<string> } domainSuffixes - Array of domain names, for example, ['example.com', 'abcd.efg.com'].
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static removeAdsBlockAllowedList(domainSuffixes: Array<string>): void;

    /**
     * Clears the disallowed list of this **AdsBlockManager** object.
     *
     * > **NOTE**
     * >
     * > - The DisallowedList of AdsBlockManager is not persistent; it needs to be set again after the app is restarted.
     * >
     * > - Starting from API version 18, calling this API on a device that does not support the ad filtering feature
     * > will throw an 801 exception.
     *
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static clearAdsBlockDisallowedList(): void;

    /**
     * Clears the allowed list of this **AdsBlockManager** object.
     *
     * > **NOTE**
     * >
     * > - The AllowedList of AdsBlockManager is not persistent; it needs to be set again after the app is restarted.
     * >
     * > - Starting from API version 18, calling this API on a device that does not support the ad filtering feature
     * > will throw an 801 exception.
     *
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static clearAdsBlockAllowedList(): void;
  }

  /**
   * BackForwardCacheSupportedFeatures is a configuration class in the ArkWeb framework used to selectively allow pages
   * that use specific web features to enter the Back/Forward Cache (BFCache). By default, pages using features such as
   * native embed or media takeover are blocked from entering BFCache, because the browser cannot safely save and
   * restore these complex states bound to system controls. By setting the properties in this class, developers can
   * explicitly allow pages with these features to enter BFCache, but they must manage the lifecycle of the related
   * system controls themselves to avoid resource leaks. For the complete sample code, see
   * [enableBackForwardCache]{@link webview.WebviewController#enableBackForwardCache}.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  class BackForwardCacheSupportedFeatures {
    /**
     * Whether to allow pages using native embed to enter the back-forward cache.
     *
     * If allowed, you need to maintain the lifecycle of system controls created for native embed elements to avoid
     * resource leaks.
     *
     * true: allowed; false: not allowed.
     *
     * Default value: false.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    nativeEmbed: boolean;

    /**
     * Whether to allow pages using media takeover to enter the back-forward cache.
     *
     * If allowed, you need to maintain the lifecycle of system controls created for video elements to avoid resource
     * leaks.
     *
     * true: allowed; false: not allowed.
     *
     * Default value: false.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    mediaTakeOver: boolean;

    /**
     * Constructs a **BackForwardCacheSupportedFeatures** object.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    constructor();
  }

  /**
   * Implements a **BackForwardCacheOptions** object to set back-forward cache options of the **Web** component.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  class BackForwardCacheOptions {
    /**
     * The maximum number of pages that can be cached in a Web component.
     *
     * The default value is 1, and the maximum value is 50.
     *
     * If this parameter is set to 0 or a negative value, the back-forward cache is disabled.
     *
     * The Web component reclaims the cache for memory pressure.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    size: number;

    /**
     * The time that a Web component allows a page to stay in the back-forward cache.
     *
     * If this parameter is set to 0 or a negative value, the back-forward cache is disabled.
     *
     * Default value: 600
     *
     * Unit: second
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    timeToLive: number;

    /**
     * Constructs a **BackForwardCacheOptions** object.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    constructor();
  }

  /**
   * Enumerates the schemes that use the proxy.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 19]
   * @since 15 dynamic
   */
  enum ProxySchemeFilter {
    /**
     * All schemes use proxies.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    MATCH_ALL_SCHEMES = 0,
    /**
     * HTTP requests use proxies.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    MATCH_HTTP = 1,
    /**
     * HTTPS requests use proxies.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    MATCH_HTTPS = 2
  }
  /**
   * ProxyConfig is a class in the ArkWeb framework used to configure network proxy rules. It works with
   * [ProxyController]{@link webview.ProxyController} to implement proxy control over network requests of all Web
   * components in an app. Through ProxyConfig, developers can flexibly define various proxy rules: specifying a
   * particular proxy server for specific URLs, specifying direct server connections for certain URLs, defining rules to
   * bypass the proxy, and more.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 19]
   * @since 15 dynamic
   */
  class ProxyConfig {
    /**
     * Inserts a bypass rule, specifying which URLs should bypass the proxy and directly connect to the server. When
     * [enableReverseBypass]{@link webview.ProxyConfig#enableReverseBypass} is set to true, URLs matching bypassRule
     * will use the proxy instead of bypassing it.
     *
     * @param { string } bypassRule - Bypass rule string that specifies the URL matching rule for bypassing the proxy.
     *     It supports host name or domain name formats (for example, "example.com" matches the domain and its
     *     subdomains). URLs matching the bypassRule bypass the proxy.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    insertBypassRule(bypassRule: string): void;
    /**
     * Inserts a direct rule, specifying that URLs matching the schemeFilter condition will directly connect to the
     * server.
     *
     * > **NOTE**
     * >
     * > - Both [insertBypassRule]{@link webview.ProxyConfig#insertBypassRule} and
     * > [bypassHostnamesWithoutPeriod]{@link webview.ProxyConfig#bypassHostnamesWithoutPeriod} can also implement
     * > direct URL connection. The difference lies in the matching dimension: this method matches by protocol type
     * > through schemeFilter; insertBypassRule matches by URL pattern through a bypassRule string;
     * > bypassHostnamesWithoutPeriod requires no parameters and automatically enables direct connection for hostnames
     * > without a period. You can choose the appropriate method based on the URL range that needs direct connection.
     *
     * @param { ProxySchemeFilter } schemeFilter - Filter used to specify URLs to be directly connected to the server.
     *     <br>Default value: **MATCH_ALL_SCHEMES**.
     *     <br>If **undefined** or **null** is passed, error code **401** will be thrown.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    insertDirectRule(schemeFilter?: ProxySchemeFilter): void;
    /**
     * Inserts a proxy rule. URLs matching schemeFilter will use the specified proxy. If the schemeFilter parameter is
     * not specified, the default value MATCH_ALL_SCHEMES will be used, and all URLs will use the specified proxy.
     *
     * The proxy format is [scheme://]host[:port].
     *
     * The scheme is optional and must be HTTP, HTTPS, or SOCKS. The default value of scheme is HTTP.
     *
     * The host is a bracketed IPv6 literal, an IPv4 literal, or one or more labels separated by dots.
     *
     * The port number is optional. The default port is 80 for HTTP, 443 for HTTPS, and 1080 for SOCKS.
     *
     * For example:
     *
     * - example.com host: example.com
     * - https://example.com  scheme: https  host: example.com
     * - example.com:8888     host: example.com  port: 8888
     * - https://example.com:8888  scheme: https  host: example.com  port: 8888
     * - 192.168.1.1  host: 192.168.1.1
     * - 192.168.1.1:8888  host: 192.168.1.1 port: 8888
     * - [10:20:30:40:50:60:70:80]
     *
     * @param { string } proxyRule - The specified proxy.
     * @param { ProxySchemeFilter } schemeFilter - Filter used to specify URLs that use the proxy.
     *     <br>Default value: **MATCH_ALL_SCHEMES**.
     *     <br>If **undefined** or **null** is passed, error code **401** will be thrown.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    insertProxyRule(proxyRule: string, schemeFilter?: ProxySchemeFilter): void;
    /**
     * Hostnames without a period character will bypass the proxy and directly connect to the server.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    bypassHostnamesWithoutPeriod(): void;
    /**
     * Overrides the default behavior and forcibly sends the local host address or local IP address through the proxy. (
     * By default, if host names are local IP addresses or local host addresses, they bypass the proxy.)
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    clearImplicitRules(): void;
    /**
     * Reverses the bypass rule.
     *
     * @param { boolean } reverse - Whether to reverse the bypass rule. The default value is **false**, indicating the
     *     bypass rule set in [insertBypassRule]{@link webview.ProxyConfig#insertBypassRule} is not reversed. The value
     *     **true** indicates the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    enableReverseBypass(reverse: boolean): void;
    /**
     * Obtains the list of URLs that do not use the proxy.
     *
     * @returns { Array<string> } List of URLs that do not use the proxy.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    getBypassRules(): Array<string>;
    /**
     * Obtains proxy rules.
     *
     * @returns { Array<ProxyRule> } Proxy rule. Each ProxyRule object represents a configured proxy rule.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    getProxyRules(): Array<ProxyRule>;
    /**
     * Obtains the value of [enableReverseBypass]{@link webview.ProxyConfig#enableReverseBypass}. For details, see
     * [enableReverseBypass]{@link webview.ProxyConfig#enableReverseBypass}.
     *
     * @returns { boolean } Value of [enableReverseBypass]{@link webview.ProxyConfig#enableReverseBypass}. The default
     *     value is **false**, indicating the bypass rule set in
     *     [insertBypassRule]{@link webview.ProxyConfig#insertBypassRule} is not reversed. The value **true** indicates
     *     the opposite.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    isReverseBypassEnabled(): boolean;
  }

  /**
   * ProxyRule is a class for read-only proxy rule information in the ArkWeb framework, obtained through the
   * [getProxyRules]{@link webview.ProxyConfig#getProxyRules} method. When a developer configures proxy rules through
   * ProxyConfig, the configured rule list can be obtained through getProxyRules, with each rule corresponding to a
   * ProxyRule object used to query the detailed information of the rule.
   *
   * ProxyRule provides two methods: getSchemeFilter is used to obtain the protocol filter corresponding to the proxy
   * rule (such as MATCH_ALL_SCHEMES, MATCH_HTTP, MATCH_HTTPS, etc.), and getUrl is used to obtain the proxy server URL
   * information specified in the proxy rule. The ProxyRule object is read-only, created by the system when configuring
   * proxy rules, and the app can only query its content but cannot modify it.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 19]
   * @since 15 dynamic
   */
  class ProxyRule {
    /**
     * Obtains the **ProxySchemeFilter** information in the proxy rule.
     *
     * @returns { ProxySchemeFilter } **ProxySchemeFilter** in the proxy rule.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    getSchemeFilter(): ProxySchemeFilter;
    /**
     * Obtains the URL specified in the proxy rule.
     *
     * @returns { string } URL information of the proxy in the proxy rule.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    getUrl(): string;
  }

  /**
   * Callback invoked when the proxy configuration changes. A successful callback indicates that the proxy settings are
   * applied successfully.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 19]
   * @since 15 dynamic
   */
  type OnProxyConfigChangeCallback = () => void;

  /**
   * ProxyController is a static class in the ArkWeb framework used to manage the proxy configuration of all Web
   * components in an app. With ProxyController, developers can uniformly set or remove proxy configurations for all Web
   * requests in the app, which is suitable for scenarios where Web traffic needs to be routed to a specific proxy
   * server (such as enterprise network environments, content filtering, and traffic monitoring).
   *
   * ProxyController provides two core methods: **applyProxyOverride** is used to apply a proxy configuration, which
   * accepts a [ProxyConfig]{@link webview.ProxyConfig} object and a callback function for successful proxy setup;
   * **removeProxyOverride** is used to remove the current proxy configuration and restore the default network
   * connection. Note that the proxy setting or removal does not take effect immediately. Before loading a page, wait
   * for the callback function to be triggered. The callback function is invoked on the UI thread.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 19]
   * @since 15 dynamic
   */
  class ProxyController {
    /**
     * Sets the proxy configuration used by all Web instances in the app. URLs that match the bypass rules inserted
     * through [insertBypassRule]{@link webview.ProxyConfig#insertBypassRule} will not use the proxy but instead send
     * requests directly to the origin address specified by the URL. After the proxy is successfully set, there is no
     * guarantee that the new proxy configuration will be used immediately after the network is connected. Before
     * loading a page, wait for the callback function to be triggered. The callback function is invoked on the UI
     * thread.
     *
     * @param { ProxyConfig } proxyConfig - Configuration of the proxy.
     * @param { OnProxyConfigChangeCallback } callback - Callback invoked when the proxy configuration changes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    static applyProxyOverride(proxyConfig: ProxyConfig, callback: OnProxyConfigChangeCallback): void;
    /**
     * Removes the proxy configuration. After the proxy configuration is removed, there is no guarantee that the default
     * network connection will be restored immediately after the network is connected. Before loading a page, wait for
     * the callback function to be triggered. The callback function is invoked on the UI thread.
     *
     * @param { OnProxyConfigChangeCallback } callback - Callback for proxy configuration changes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    static removeProxyOverride(callback: OnProxyConfigChangeCallback): void;
  }

  /**
   * Enumerates the destroy modes of the **Web** component. When the Web component is destroyed, the destroy mode
   * affects the resource release time of the Web kernel, such as the JavaScript running context and rendering context.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  enum WebDestroyMode {
    /**
     * Normal mode. The system determines the destroy time of **Web** component resources.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    NORMAL_MODE = 0,

    /**
     * Quick mode. When the **Web** component is destroyed, the related internal resources are destroyed immediately.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    FAST_MODE = 1
  }

  /**
   * The site isolation mechanism isolates websites from different origins in different renderer subprocesses, reducing
   * the cross-origin attack surface. For example, in the original process model on PC, each tab corresponds to one
   * renderer subprocess. After site isolation is enabled, iframes from different origins run in independent renderer
   * subprocesses.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  enum SiteIsolationMode {
    /**
     * Partial site isolation, that is, new sites are loaded in the same renderer process.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    PARTIAL = 0,

    /**
     * Strict site isolation. Iframes from different sites are switched to new render processes.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    STRICT = 1
  }

  /**
   * Enumerates the global scrollbar modes in the web page.
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  enum ScrollbarMode {
    /**
     * Overlay scrollbar that can be dragged.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    OVERLAY_LAYOUT_SCROLLBAR = 0,

    /**
     * The scrollbar is always displayed.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    FORCE_DISPLAY_SCROLLBAR = 1,

    /**
     * Overlay scrollbar that cannot be dragged.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    OVERLAY_VISUAL_SCROLLBAR = 2
  }
}

export default webview;