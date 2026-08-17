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
   * 指示光标命中的节点类型。
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
     * 超链接，其中链接地址为http。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    HttpAnchor = 2,

    /**
     * 带有超链接的图片，其中链接地址为http + HTML::img。
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
     * 不使用HTTPDNS，可以用于撤销之前使用的HTTPDNS配置。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    OFF = 0,
    /**
     * 自动模式，用于解析的设定DNS服务器不可用时，可自动回落至系统DNS。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    AUTO = 1,
    /**
     * 强制使用设定的HTTPDNS服务器进行域名解析。
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
     * 页面不安全。尝试HTTPS并失败、页面未通过身份验证、页面上包含不安全活动内容的HTTPS、恶意软件、网络钓鱼或任何其他可能危险的严重安全问题。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    DANGEROUS = 3
  }

  /**
   * 当前网页的播放控制状态。
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
   * 控制cookie在跨站请求中的发送行为。
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
     * 允许特定的跨站请求携带cookie，如某些get请求的导航场景。
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
   * 用户设备形态。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 24 dynamic
   */
  enum UserAgentFormFactor {
    /**
     * 车机，字符串类型。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    AUTOMOTIVE = 'Automotive',
    /**
     * PC，字符串类型。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    DESKTOP = 'Desktop',
    /**
     * 手机，字符串类型。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    MOBILE = 'Mobile',
    /**
     * 墨水屏，字符串类型。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    EINK = 'EInk',
    /**
     * 平板，字符串类型。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    TABLET = 'Tablet',
    /**
     * 手表，字符串类型。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    WATCH = 'Watch',
    /**
     * VR+AR设备，字符串类型。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    XR = 'XR'
  }

  /**
   * UserAgentBrandVersion是ArkWeb框架中用于配置User-Agent客户端提示信息中品牌名称和版本号的数据类，配合
   * [UserAgentMetadata]{@link webview.UserAgentMetadata}使用。在User-Agent Client Hints机制中，浏览器通过Sec-CH-UA-Full-Version-List
   * 等请求标头向服务器报告品牌和版本信息，UserAgentBrandVersion用于定义其中的单个品牌条目。
   * 
   * UserAgentBrandVersion提供品牌名称和版本号的设置与获取方法：setBrand/getBrand用于设置和获取品牌名称（如“ArkWeb”等），setMajorVersion/getMajorVersion用于设
   * 置和获取主版本号（如“126”），setFullVersion/getFullVersion用于设置和获取完整版本号（如“126.0.0.0”）。应用可通过修改这些值来定制Web组件向服务器报告的浏览器身份信息。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 24 dynamic
   */
  class UserAgentBrandVersion {
    /**
     * 设置品牌名称。
     *
     * @param { string } brand - 品牌名称，不能为空字符串。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setBrand(brand: string): void;

    /**
     * 获取品牌名称。
     *
     * @returns { string } 返回品牌名称字符串。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getBrand(): string;

    /**
     * 设置主版本号。
     *
     * @param { string } majorVersion - 主版本号，不能为空字符串。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setMajorVersion(majorVersion: string): void;

    /**
     * 获取主版本号。
     *
     * @returns { string } 返回主版本号字符串。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getMajorVersion(): string;

    /**
     * 设置完整版本号。
     *
     * @param { string } fullVersion - 完整版本号，不能为空字符串。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setFullVersion(fullVersion: string): void;

    /**
     * 获取完整版本号。
     *
     * @returns { string } 返回完整版本号字符串。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getFullVersion(): string;
  }

  /**
   * UserAgentMetadata是ArkWeb框架中用于配置User-Agent Client Hints（UA客户端提示）完整元数据的类。User-Agent Client Hints是一种现代化的HTTP请求标头机制，通过一
   * 组Sec-CH-UA系列标头向服务器报告客户端信息，替代传统User-Agent字符串实现更安全、更细粒度的浏览器身份标识。通过UserAgentMetadata，应用可以自定义Web组件向服务器报告的所有客户端信息字段。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 24 dynamic
   */
  class UserAgentMetadata {
    /**
     * 设置品牌和版本信息。
     *
     * @param { Array<UserAgentBrandVersion> } brandVersionList - 对应请求标头的Sec-CH-UA-Full-Version-List。空代表使用ArkWeb默认值。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setBrandVersionList(brandVersionList: Array<UserAgentBrandVersion>): void;

    /**
     * 获取品牌和版本信息列表。不调用对应的[setBrandVersionList]{@link webview.UserAgentMetadata#setBrandVersionList}进行设置时，列表默认值：
     * [{"brand":"Chromium","version":[ChromeCompatibleVersion](docroot://web/web-default-userAgent.md#默认user-agent结构)}, {"brand":"ArkWeb","version":[OSVersion](docroot://web/web-default-userAgent.md#默认user-agent结构)}]。
     *
     * @returns { Array<UserAgentBrandVersion> } 品牌和版本信息列表。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getBrandVersionList(): Array<UserAgentBrandVersion>;

    /**
     * 设置平台的架构类型。
     *
     * @param { string } arch - 对应请求标头的Sec-CH-UA-Arch。空代表使用ArkWeb默认值。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setArchitecture(arch: string): void;

    /**
     * 获取平台的架构类型。不调用对应的[setArchitecture]{@link webview.UserAgentMetadata#setArchitecture}设置时，架构类型默认值：""。
     *
     * @returns { string } 平台架构类型。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getArchitecture(): string;

    /**
     * 设置平台的位数类型。
     *
     * @param { string } bitness - 对应请求标头的Sec-CH-UA-Bitness。空代表使用ArkWeb默认值。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setBitness(bitness: string): void;

    /**
     * 获取平台的位数类型。不调用对应的[setBitness]{@link webview.UserAgentMetadata#setBitness}设置时，位数类型默认值：Desktop："64"，其他设备：""。
     *
     * @returns { string } 平台位数。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getBitness(): string;

    /**
     * 设置设备形态信息，如手机、平板等。
     *
     * @param { Array<UserAgentFormFactor> } formFactors - 对应请求标头的Sec-CH-UA-Form-Factor。空代表使用ArkWeb默认值。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setFormFactors(formFactors: Array<UserAgentFormFactor>): void;

    /**
     * 获取设备形态信息，如手机、平板等。不调用对应的[setFormFactors]{@link webview.UserAgentMetadata#setFormFactors}进行设置时，形态信息默认值：手机："Mobile"、
     * 手表："Watch"、车机："Automotive"、PC："Desktop"、平板："Tablet"。
     *
     * @returns { Array<UserAgentFormFactor> } 设备形态信息。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getFormFactors(): Array<UserAgentFormFactor>;

    /**
     * 设置完整版本号。
     *
     * @param { string } fullVersion - 对应请求标头的Sec-CH-UA-Full-Version。空代表使用ArkWeb默认值。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setFullVersion(fullVersion: string): void;

    /**
     * 获取完整版本号。不调用对应的[setFullVersion]{@link webview.UserAgentMetadata#setFullVersion}设置时，版本号默认值：""。
     *
     * @returns { string } 完整版本号。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getFullVersion(): string;

    /**
     * 设置是否为移动设备。
     *
     * @param { boolean } isMobile - 对应请求标头的Sec-CH-UA-Mobile。表示设备是否为移动设备。true为是移动设备，false为不是移动设备。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setMobile(isMobile: boolean): void;

    /**
     * 获取是否为移动设备。不调用对应的[setMobile]{@link webview.UserAgentMetadata#setMobile}设置时，默认值：手机: true，手表、车机、平板、大屏: false。
     *
     * @returns { boolean } 是否为移动设备，true为移动设备，false为不是移动设备。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getMobile(): boolean;

    /**
     * 设置设备型号。
     *
     * @param { string } model - 对应请求标头的Sec-CH-UA-Model。 空代表使用ArkWeb默认值。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setModel(model: string): void;

    /**
     * 获取设备型号。不调用对应的[setModel]{@link webview.UserAgentMetadata#setModel}设置时，型号默认值：手机根据const.product.model取设备型号；手表、大屏、车机、
     * PC、平板：""。
     *
     * @returns { string } 设备型号。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getModel(): string;

    /**
     * 设置操作系统名称。
     *
     * @param { string } platform - 对应请求标头的Sec-CH-UA-Platform。空代表使用ArkWeb默认值。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setPlatform(platform: string): void;

    /**
     * 获取操作系统名称。不调用对应的[setPlatform]{@link webview.UserAgentMetadata#setPlatform}设置时，名称默认值："OpenHarmony" 。
     *
     * @returns { string } 操作系统名称。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getPlatform(): string;

    /**
     * 设置操作系统版本号。
     *
     * @param { string } platformVersion - 对应请求标头的Sec-CH-UA-Platform-Version。空代表使用ArkWeb默认值。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setPlatformVersion(platformVersion: string): void;

    /**
     * 获取操作系统版本号。不调用对应的[setPlatformVersion]{@link webview.UserAgentMetadata#setPlatformVersion}设置时，版本号默认值：按OpenHarmony平台
     * 版本号规则，同const.product.os.dist.version。
     *
     * @returns { string } 操作系统版本号。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getPlatformVersion(): string;

    /**
     * 设置二进制文件是否在64位Windows上以32位模式运行。
     *
     * @param { boolean } isWow64 - 对应请求标头的Sec-CH-UA-WoW64。表示二进制文件是否在64位Windows上以32位模式运行。true为是，false为不是。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    setWow64(isWow64: boolean): void;

    /**
     * 获取二进制文件是否是在64位Windows上以32位模式运行。不调用对应的[setWow64]{@link webview.UserAgentMetadata#setWow64}设置时，默认值为false。
     *
     * @returns { boolean } 表示二进制文件是否在64位Windows上以32位模式运行。true为是，false为不是。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getWow64(): boolean;
  }

  /**
   * 提供点击区域的元素信息。示例代码参考[getLastHitTest]{@link webview.WebviewController#getLastHitTest}。
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
   * 自定义协议配置。
   *
   * @interface WebCustomScheme [since 9 - 11]
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  interface WebCustomScheme {

    /**
     * 自定义协议名称。最大长度为32，其字符仅支持小写字母、数字、'.'、'+'、'-'，同时需要以字母开头。不符合上述限制时，该自定义协议配置不生效。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    schemeName: string;

    /**
     * 是否支持跨域请求。
     * 
     * true表示支持跨域请求，false表示不支持跨域请求。
     * 
     * 默认值：true。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    isSupportCORS: boolean;

    /**
     * 是否支持fetch请求。
     * 
     * true表示支持fetch请求，false表示不支持fetch请求。
     * 
     * 默认值：true。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    isSupportFetch: boolean;

    /**
     * 设置了该选项的scheme是否将作为标准scheme进行处理。标准scheme需要符合RFC 1738第3.1节中定义的URL解析规则以及RFC 3986第6.2节中定义的URL规范化规则。
     * 
     * true表示设置了该选项的scheme将作为标准scheme进行处理，false表示设置了该选项的scheme不作为标准scheme进行处理。
     * 
     * 默认值：true。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isStandard?: boolean;

    /**
     * 设置了该选项的scheme是否将使用与“file”协议相同的安全规则来处理。
     * 
     * true表示设置了该选项的scheme将使用与“file”协议相同的安全规则来处理，false表示设置了该选项的scheme不使用与“file”协议相同的安全规则来处理。
     * 
     * 默认值：true。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isLocal?: boolean;

    /**
     * 设置了该选项的scheme的内容是否只能从相同scheme的其他内容中显示或访问。
     * 
     * true表示设置了该选项的scheme的内容只能从相同scheme的其他内容中显示或访问，false表示设置了该选项的scheme的内容允许从其他scheme的内容中显示或访问。
     * 
     * 默认值：true。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isDisplayIsolated?: boolean;

    /**
     * 设置了该选项的scheme是否将使用与应用于“https”的安全规则相同的安全规则来处理。true表示设置了该选项的scheme将使用与应用于“https”的安全规则相同的安全规则来处理，false表示设置了该选项的
     * scheme不使用与应用于“https”的安全规则相同的安全规则来处理。
     * 
     * 默认值：true。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isSecure?: boolean;

    /**
     * 设置了该选项的scheme可以绕过内容安全策略（CSP）检查。
     * 
     * true表示设置了该选项的scheme可以绕过内容安全策略（CSP）检查，false表示设置了该选项的scheme不可以绕过内容安全策略（CSP）检查。
     * 
     * 默认值：true。
     * 
     * 当设置isStandard为true时，不应设置此值。若此时仍设置isCspBypassing为true，CSP检查绕过的行为可能不符合预期。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    isCspBypassing?: boolean;

    /**
     * 设置了该选项的scheme的JavaScript资源是否支持生成code cache。
     * 
     * true表示设置了该选项的scheme的JavaScript资源支持生成code cache，false表示设置了该选项的scheme的JavaScript资源不支持生成code cache。
     * 
     * 默认值：false。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    isCodeCacheSupported?: boolean;
  }

  /**
   * PdfData是Web组件用于封装网页生成的PDF数据流的类。当应用需要将Web组件加载的网页内容以PDF格式保存时，通过[WebviewController]{@link webview.WebviewController}的
   * [createPdf]{@link webview.WebviewController#createPdf(configuration: PdfConfiguration, callback: AsyncCallback<PdfData>)}
   * 方法将网页内容转换为PDF数据流，该方法在回调或Promise中以PdfData对象返回。应用再通过PdfData的pdfArrayBuffer方法获取Uint8Array格式的数据流，结合文件IO接口将数据写入本地PDF文件。
   * 
   * PdfData适用于需要离线保存网页内容、生成网页PDF报告等场景。使用时需先加载Web组件并确保网页内容已渲染完成，再调用createPdf生成PDF数据流。
   * 
   * > **说明：**
   * >
   * > - 在网页生成PDF过程中，返回的是数据流，由PdfData类封装。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 14 dynamic
   */
  class PdfData {
    /**
     * 获取网页生成的PDF数据流。完整示例代码参考
     * [createPdf]{@link webview.WebviewController#createPdf(configuration: PdfConfiguration, callback: AsyncCallback<PdfData>)}
     * 。
     *
     * @returns { Uint8Array } 网页生成的PDF数据流，可结合文件IO接口将数据写入本地PDF文件。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    pdfArrayBuffer(): Uint8Array;
  }

  /**
   * [createPdf]{@link webview.WebviewController#createPdf(configuration: PdfConfiguration, callback: AsyncCallback<PdfData>)}
   * 函数输入参数。
   * 
   * > **说明：**
   * >
   * > 英寸与像素之间转换公式：像素 = 96 * 英寸。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 14 dynamic
   */
  interface PdfConfiguration {
    /**
     * 页面宽度。
     * 
     * 取值范围：大于等于0。如果不在取值范围内，则设置为0。
     * 
     * 单位：英寸。
     * 
     * 推荐值：A4纸页面宽度8.27英寸。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    width: number;

    /**
     * 页面高度。
     * 
     * 取值范围：大于等于0。如果不在取值范围内，则设置为0。
     * 
     * 单位：英寸。
     * 
     * 推荐值：A4纸页面高度11.69英寸。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    height: number;

    /**
     * 上边距。
     * 
     * 取值范围：[0.0, 页面高度的一半)。如果不在取值范围内，则设置为0.0。
     * 
     * 单位：英寸。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    marginTop: number;

    /**
     * 下边距。
     * 
     * 取值范围：[0.0, 页面高度的一半)。如果不在取值范围内，则设置为0.0。
     * 
     * 单位：英寸。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    marginBottom: number;

    /**
     * 右边距。
     * 
     * 取值范围：[0.0, 页面宽度的一半)。如果不在取值范围内，则设置为0.0。
     * 
     * 单位：英寸。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    marginRight: number;

    /**
     * 左边距。
     * 
     * 取值范围：[0.0, 页面宽度的一半)。如果不在取值范围内，则设置为0.0。
     * 
     * 单位：英寸。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    marginLeft: number;

    /**
     * 放大倍数。
     * 
     * 取值范围：[0.0, 2.0]。如果不在取值范围内，小于0.0设置为0.0，大于2.0设置为2.0。
     * 
     * 默认值：1.0。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    scale?: number;

    /**
     * true表示打印背景颜色，false表示不打印背景颜色。
     * 
     * 默认值：false。
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
   * 订阅一次指定类型Web事件的回调，Web事件的类型目前仅支持"webInited"，在Web引擎初始化完成时触发。
   * 
   * 当应用中开始加载第一个Web组件时，Web引擎初始化，且后续在同一应用中继续加载其他Web组件时不会再触发once回调。当应用销毁最后一个Web组件时，若再加载第一个Web组件，应用重新进入Web引擎初始化流程。
   *
   * @param {string} type - Web事件的类型，目前仅支持："webInited"（Web引擎初始化完成）。
   * @param {Callback<void>} callback - Web引擎初始化完成时触发的回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function once(type: string, callback: Callback<void>): void;

  /**
   * 通过WebStorage可管理Web SQL数据库接口和HTML5 Web存储接口，每个应用中的所有Web组件共享一个WebStorage。
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
     * @param { boolean } incognito - true表示删除所有隐私模式下内存中的web数据，false表示删除正常非隐私模式下被JavaScript存储API使用的所有存储数据，这包括Web SQL数据库和
     *     HTML5支持的Web存储API。
     *     <br>默认值：false。
     *     <br>传入undefined或null时为false。 [since 11]
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static deleteAllData(incognito?: boolean): void;

    /**
     * 清除指定源所使用的存储。
     * 
     * > **说明：**
     * >
     * > 方法调用关系：
     * >
     * > origin参数应从getOrigins()方法获取。
     * >
     * > 建议先调用getOrigins()获取源列表，再调用deleteOrigin()清除指定源存储。
     *
     * @param { string } origin - 指定源的字符串索引，来自于
     *     [getOrigins]{@link webview.WebStorage.getOrigins(callback: AsyncCallback<Array<WebStorageOrigin>>)}。
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
     * @returns { Promise<Array<WebStorageOrigin>> } Promise实例，用于获取当前所有源的信息。
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
     * > **说明：**
     * >
     * > 方法调用关系：
     * >
     * > origin参数应从getOrigins()方法获取。
     * >
     * > 建议先调用getOrigins()获取源列表，再调用getOriginQuota()获取指定源配额。
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
     * > **说明：**
     * >
     * > 方法调用关系：
     * >
     * > origin参数应从getOrigins()方法获取。
     * >
     * > 建议先调用getOrigins()获取源列表，再调用getOriginQuota()获取指定源配额。
     *
     * @param { string } origin - 指定源的字符串索引。
     * @param { AsyncCallback<number> } callback - 指定源的存储配额。
     *     <br>number是long型整数，范围为[-2147483648, 2147483647]。
     *     <br>单位：byte。
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
     * > **说明：**
     * >
     * > 方法调用关系：
     * >
     * > origin参数应从getOrigins()方法获取。
     * >
     * > 建议先调用getOrigins()获取源列表，再调用getOriginUsage()获取指定源使用量。
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
     * > **说明：**
     * >
     * > 方法调用关系：
     * >
     * > origin参数应从getOrigins()方法获取。
     * >
     * > 建议先调用getOrigins()获取源列表，再调用getOriginUsage()获取指定源使用量。
     *
     * @param { string } origin - 指定源的字符串索引
     * @param { AsyncCallback<number> } callback - 指定源的存储量。
     *     <br>单位：byte。
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
     * @param { string } host - HTTP身份验证凭据应用的主机地址，格式如'www.example.com'或'192.168.1.1'，不包含协议和端口号。
     * @param { string } realm - HTTP身份验证凭据应用的认证域，表示在同一主机下进行身份验证的范围或保护区域，通常由服务器返回的WWW-Authenticate头指定。
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
     * @param { string } host - HTTP身份验证凭据应用的主机，用于匹配凭据对应的主机。
     * @param { string } realm - HTTP身份验证凭据应用的域，用于匹配凭据对应的认证域。
     * @param { string } username - 用于HTTP身份验证的用户名，表示访问受保护资源的身份标识。
     * @param { string } password - 用于HTTP身份验证的密码，配合用户名完成身份验证。
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
   * GeolocationPermissions是Web组件的地理位置权限管理对象，提供对Web组件中已保存的地理位置权限状态的查询、授权、删除等管理能力。通过GeolocationPermissions，应用可以在网页发起地理位置请
   * 求之前预先授权特定源的访问权限，也可以主动查询或清除已保存的权限记录，而无需依赖网页请求时的弹窗授权流程。
   * 
   * GeolocationPermissions适用于需要主动管理Web组件地理位置权限的场景，例如：应用希望预先授权信任的网站访问地理位置，避免每次访问都弹出授权提示；或应用需要清除用户不再需要的地理位置权限记录。访问地理位置时需添
   * 加权限：ohos.permission.LOCATION、ohos.permission.APPROXIMATELY_LOCATION、ohos.permission.LOCATION_IN_BACKGROUND，具体权限说明请参
   * 考[申请位置权限开发指导](docroot://device/location/location-permission-guidelines.md)。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  class GeolocationPermissions {
    /**
     * 允许指定源使用地理位置接口。用于预先授权信任网站的地理位置权限，避免重复弹窗，或由应用主动管理特定源的地理位置授权。
     *
     * @param { string } origin - 指定源的字符串。
     *     <br>origin格式必须遵循RFC 6454中定义的格式。传入不符合RFC 6454格式的字符串时抛出异常，错误码17100011。
     * @param { boolean } incognito - true表示隐私模式下允许指定源使用地理位置，false表示正常非隐私模式下允许指定源使用地理位置。
     *     <br>默认值：false。
     *     <br>传入null或undefined时为false。 [since 11]
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
     * 清除指定源的地理位置权限状态。用于撤销指定网站的地理位置授权，或为应用提供按源管理权限的能力。
     *
     * @param { string } origin - 指定源的字符串。
     *     <br>origin格式必须遵循RFC 6454中定义的格式。传入不符合RFC 6454格式的字符串时抛出异常，错误码17100011。
     * @param { boolean } incognito - true表示隐私模式下清除指定源的地理位置权限状态，false表示正常非隐私模式下清除指定源的地理位置权限状态。
     *     <br>默认值：false。
     *     <br>传入null或undefined时为false。 [since 11]
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
     * 清除所有源的地理位置权限状态。用于用户退出登录或一键清除等场景下批量撤销地理位置授权。
     *
     * @param { boolean } incognito - true表示隐私模式下清除所有源的地理位置权限状态，false表示正常非隐私模式下清除所有源的地理位置权限状态。
     *     <br>默认值：false。
     *     <br>传入null或undefined时为false。 [since 11]
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static deleteAllGeolocation(incognito?: boolean): void;

    /**
     * 以Promise方式异步获取指定源的地理位置权限状态。用于查询指定网站的地理位置授权结果，如设置界面展示权限状态或访问前校验授权。
     *
     * @param { string } origin - 指定源的字符串。
     *     <br>origin格式必须遵循RFC 6454中定义的格式。传入不符合RFC 6454格式的字符串时抛出异常，错误码17100011。
     * @param { boolean } incognito - true表示在隐私模式下获取指定源的地理位置权限状态，false表示在正常模式下获取。
     *     <br>默认值：false。
     *     <br>传入null或undefined时会抛出异常错误码401。 [since 11]
     * @returns { Promise<boolean> } Promise实例，用于获取指定源的权限状态。
     *     <br>获取成功，true表示已授权，false表示拒绝访问。
     *     <br>获取失败，表示不存在指定源的权限状态。
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
     * 以回调方式异步获取指定源的地理位置权限状态。用于查询指定网站的地理位置授权结果，如设置界面展示权限状态或访问前校验授权。
     *
     * @param { string } origin - 指定源的字符串。
     *     <br>origin格式必须遵循RFC 6454中定义的格式。传入不符合RFC 6454格式的字符串时抛出异常，错误码17100011。
     * @param { AsyncCallback<boolean> } callback - 返回指定源的地理位置权限状态。
     *     <br>获取成功，true表示已授权，false表示拒绝访问。
     *     <br>获取失败，表示不存在指定源的权限状态。
     * @param { boolean } incognito - true表示在隐私模式下获取指定源的地理位置权限状态，false表示在正常模式下获取。
     *     <br>默认值：false。
     *     <br>传入null或undefined时会抛出异常错误码401。 [since 11]
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
     * 以Promise方式异步获取已存储地理位置权限状态的所有源信息。用于获取已授权地理位置权限的网站列表，如隐私设置页展示或权限管理界面的批量管理。
     *
     * @param { boolean } incognito - true表示在隐私模式下获取已存储地理位置权限状态的所有源信息，false表示在正常模式下获取。
     *     <br>默认值：false。
     *     <br>传入null或undefined时会抛出异常错误码401。 [since 11]
     * @returns { Promise<Array<string>> } Promise实例，用于获取已存储地理位置权限状态的所有源信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static getStoredGeolocation(incognito?: boolean): Promise<Array<string>>;

    /**
     * 以回调方式异步获取已存储地理位置权限状态的所有源信息。用于获取已授权地理位置权限的网站列表，如隐私设置页展示或权限管理界面的批量管理。
     *
     * @param { AsyncCallback<Array<string>> } callback - 返回已存储地理位置权限状态的所有源信息。回调参数包括：error（错误对象，获取成功时为null）和origins（已存储地
     *     理位置权限的源字符串数组，每个元素为遵循RFC 6454中定义格式的源字符串）。获取失败时，error为错误对象。
     * @param { boolean } incognito - true表示在隐私模式下获取已存储地理位置权限状态的所有源信息，false表示在正常模式下获取。
     *     <br>默认值：false。
     *     <br>传入null或undefined时会抛出异常错误码401。 [since 11]
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
   * cookie的相关字段。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  interface WebHttpCookie {
    /**
     * 指定哪些域名可以访问该cookie。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    domain: string;

    /**
     * cookie的路径。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    path: string;

    /**
     * cookie的名称。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    name: string;

    /**
     * cookie的值。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    value: string;
    /**
     * cookie的过期时间。时间格式详见[Date](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Reference/Headers/Date)。传入不符合该格式的时间字符串
     * 时，该cookie设置不生效。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    expiresDate: string;

    /**
     * 标记该cookie是否是session cookie。
     * 
     * true表示是session cookie，false表示不是session cookie。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    isSessionCookie: boolean;

    /**
     * 标记该cookie是否只能通过HTTP请求访问。
     * 
     * true表示仅能通过HTTP访问，不能通过JavaScript访问，false表示可以通过JavaScript访问。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    isHttpOnly: boolean;

    /**
     * 标记该cookie是否只能通过HTTPS发送。
     * 
     * true表示仅能通过HTTPS发送，不能通过HTTP发送，false表示可以通过HTTP发送。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    isSecure: boolean;

    /**
     * cookie的同站策略。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    samesitePolicy: WebHttpCookieSameSitePolicy;
  }

  /**
   * WebCookieManager是Web组件的cookie管理器，提供对Web组件中cookie的全局管理能力。开发者通过该类可以实现cookie的获取、设置、保存、清除以及权限控制等操作。该类的所有方法均为静态方法，应用中的所有
   * Web组件共享一个WebCookieManager实例。cookie的格式遵循[RFC6265](https://www.rfc-editor.org/info/rfc6265/)标准。
   * 
   * 使用隐私模式浏览网页时，cookie、缓存等数据不会写入本地持久化存储；隐私模式的Web组件销毁后，这些数据将被清除，不会保留。
   * 
   * > **说明：**
   * >
   * > - 静态方法必须在用户界面（UI）线程上使用。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  class WebCookieManager {
    /**
     * 获取所有cookie，使用Promise异步回调。
     *
     * @param { boolean } incognito - {@code true} Gets all cookies in incognito context; {@code false} otherwise.
     * @returns { Promise<Array<WebHttpCookie>> } Promise对象，用于获取所有cookie及其对应的字段值。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    static fetchAllCookies(incognito: boolean):  Promise<Array<WebHttpCookie>>;

    /**
     * 获取指定url对应cookie的值。
     *
     * @param { string } url - 要获取cookie的url，建议使用完整的url。
     * @returns { string } 指定url对应的cookie的值。
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
     * > - 为了获取可正常使用的cookie值，fetchCookieSync建议传入完整链接。
     * >
     * > - fetchCookieSync用于获取所有的cookie值，每条cookie值之间会通过"; "进行分隔，但无法单独获取某一条特定的cookie值。
     *
     * @param { string } url - 要获取cookie的url，建议使用完整的url。
     * @param { boolean } incognito - true表示获取隐私模式下webview的内存cookies，false表示正常非隐私模式下的cookies。
     *     <br>默认值：false。
     *     <br>传入undefined或null会抛出异常错误码401。
     * @returns { string } 指定url对应的cookie的值。
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
     * 获取指定url对应的cookies，可以通过可选参数incognito指定是否获取隐私模式下的cookies，也可以通过可选参数includePartitionedCookies指定是否获取第一方partitioned 
     * cookie。
     * 
     * > **说明：**
     * >
     * > - 系统会自动清理过期的cookie，对于同名key的数据，新数据将会覆盖前一个数据。
     * >
     * > - 为了获取可正常使用的cookie值，fetchCookieSync需传入完整链接。
     * >
     * > - fetchCookieSync用于获取所有的cookie值，每条cookie值之间会通过"; "进行分隔，但无法单独获取某一条特定的cookie值。
     *
     * @param { string } url - 要获取的cookie所属的url，建议使用完整的url。
     * @param { boolean } [incognito] - true表示获取隐私模式下webview的内存cookies，false表示获取非隐私模式下的cookies。
     *     <br>默认值：false。
     *     <br>传入undefined或null会抛出异常错误码401。
     * @param { boolean } [includePartitionedCookies] - true表示允许获取第一方partitioned cookies，false表示不允许获取第一方partitioned
     *     cookies。
     *     <br>默认值：false。
     *     <br>传入undefined或null会抛出异常错误码401。
     * @returns { string } 指定url对应的cookies。
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    static fetchCookieSync(url: string, incognito?: boolean, includePartitionedCookies?: boolean): string;

    /**
     * 获取指定url对应cookie的值。使用Promise异步回调。
     *
     * @param { string } url - 要获取cookie的url，建议使用完整的url。
     * @returns { Promise<string> } Promise实例，用于获取指定url对应的cookie值。
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
     * 获取指定url对应cookie的值。使用Promise异步回调。
     *
     * @param { string } url - 要获取cookie的url，建议使用完整的url。
     * @param { boolean } incognito - true表示获取隐私模式下webview的内存cookies，false表示正常非隐私模式下的cookies。
     * @returns { Promise<string> } Promise实例，用于获取指定url对应的cookie值。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 14 dynamic
     */
    static fetchCookie(url: string, incognito: boolean): Promise<string>;

    /**
     * 获取指定url对应的cookies，可以通过参数incognito指定是否获取隐私模式下的cookies，也可以通过参数includePartitionedCookies指定是否获取第一方partitioned cookie。
     * 使用Promise异步回调。
     * 
     * 26.0.0
     *
     * @param { string } url - 要获取的cookie所属的url，建议使用完整的url。
     * @param { boolean } incognito - true表示获取隐私模式下webview的内存cookies，false表示获取非隐私模式下的cookies。 
     *     <br>传入undefined或null会抛出异常错误码401。
     * @param { boolean } includePartitionedCookies - true表示允许获取第一方partitioned cookies，false表示不允许获取第一方partitioned
     *     cookies。 
     *     <br>传入undefined或null会抛出异常错误码401。
     * @returns { Promise<string> } Promise对象，用于获取指定url对应的cookies。
     * @throws { BusinessError } 17100002 - URL error. No valid cookie found for the specified URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    static fetchCookie(url: string, incognito: boolean, includePartitionedCookies: boolean): Promise<string>;

    /**
     * 获取指定url对应cookie的值。使用callback异步回调。
     *
     * @param { string } url - 要获取cookie的url，建议使用完整的url。
     * @param { AsyncCallback<string> } callback - 回调函数，用于获取cookie。
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
     * @param { string } url - 要设置的cookie所属的url，建议使用完整的url。
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
     * > - cookie每30s周期性保存到磁盘中，也可以使用接口
     * > [saveCookieAsync]{@link webview.WebCookieManager.saveCookieAsync(callback: AsyncCallback<void>)}进行强制落盘。
     * >
     * > - value参数必须遵循Set-Cookie HTTP响应头的格式。形式为"key=value"的键值对，后面可跟随以"; "分隔的cookie属性列表（例如"key=value; Max-Age=100"）。
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
     * @param { boolean } incognito - true表示设置隐私模式下对应url的cookies，false表示设置正常非隐私模式下对应url的cookies。
     *     <br>默认值：false。 
     *     <br>传入undefined或null会抛出异常错误码401。
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
     * 为指定url设置单个cookie的值。
     * 
     * > **说明：**
     * >
     * > - configCookieSync中的url，可以指定域名的方式来使得页面内请求也附带上cookie。
     * >
     * > - cookie每30s周期性保存到磁盘中，也可以使用接口
     * > [saveCookieAsync]{@link webview.WebCookieManager.saveCookieAsync(callback: AsyncCallback<void>)}进行强制落盘。
     * >
     * > - value参数必须遵循Set-Cookie HTTP响应头的格式。形式为"key=value"的键值对，后面可跟随以"; "分隔的cookie属性列表（例如"key=value; Max-Age=100"）。
     * >
     * > - 若存在相同host、path和名称的cookie，将被新cookie替换。若设置的cookie已过期，则不会存储该cookie。如需设置多个cookie，应多次调用此方法。
     * >
     * > - 若通过configCookieSync进行两次或多次设置cookie，则每次设置的cookie之间会通过"; "进行分隔。
     * >
     * > - 如果指定的值包含"Secure"属性，则url必须使用"https://"协议。
     *
     * @param { string } url - 要设置的cookie所属的url，建议使用完整的url。
     * @param { string } value - 要设置的cookie的值。
     * @param { boolean } incognito - true表示设置隐私模式下对应url的cookies，false表示设置正常非隐私模式下对应url的cookies。
     * @param { boolean } includeHttpOnly - true表示允许覆盖含有http-only的cookies，false表示不允许覆盖含有http-only的cookies。
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
     * 为指定url设置单个cookie的值。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - configCookie中的url，可以指定域名的方式来使得页面内请求也附带上cookie。
     * >
     * > - cookie每30s周期性保存到磁盘中，也可以使用接口
     * > [saveCookieAsync]{@link webview.WebCookieManager.saveCookieAsync(callback: AsyncCallback<void>)}进行强制落盘。
     * >
     * > - value参数必须遵循Set-Cookie HTTP响应头的格式。形式为"key=value"的键值对，后面可跟随以"; "分隔的cookie属性列表（例如"key=value; Max-Age=100"）。
     * >
     * > - 若存在相同host、path和名称的cookie，将被新cookie替换。若设置的cookie已过期，则不会存储该cookie。如需设置多个cookie，应多次调用此方法。
     * >
     * > - 若通过configCookie进行两次或多次设置cookie，则每次设置的cookie之间会通过"; "进行分隔。
     * >
     * > - 如果指定的值包含"Secure"属性，则url必须使用"https://"协议。
     * >
     * > - 如果要覆盖HttpOnly的cookies，需要在value中指定HttpOnly属性。
     *
     * @param { string } url - 要设置的cookie所属的url，建议使用完整的url。
     * @param { string } value - 要设置的cookie的值。
     * @returns { Promise<void> } Promise实例，用于获取指定url设置单个cookie值是否成功。
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
     * 为指定url设置单个cookie的值。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - configCookie中的url，可以指定域名的方式来使得页面内请求也附带上cookie。
     * >
     * > - cookie每30s周期性保存到磁盘中，也可以使用接口
     * > [saveCookieAsync]{@link webview.WebCookieManager.saveCookieAsync(callback: AsyncCallback<void>)}进行强制落盘。
     * >
     * > - value参数必须遵循Set-Cookie HTTP响应头的格式。形式为"key=value"的键值对，后面可跟随以"; "分隔的cookie属性列表（例如"key=value; Max-Age=100"）。
     * >
     * > - 若存在相同host、path和名称的cookie，将被新cookie替换。若设置的cookie已过期，则不会存储该cookie。如需设置多个cookie，应多次调用此方法。
     * >
     * > - 若通过configCookie进行两次或多次设置cookie，则每次设置的cookie之间会通过"; "进行分隔。
     * >
     * > - 如果指定的值包含"Secure"属性，则url必须使用"https://"协议。
     *
     * @param { string } url - 要设置的cookie所属的url，建议使用完整的url。
     * @param { string } value - 要设置的cookie的值。
     * @param { boolean } incognito - true表示设置隐私模式下对应url的cookies，false表示设置正常非隐私模式下对应url的cookies。
     * @param { boolean } includeHttpOnly - true表示允许覆盖含有http-only的cookies，false表示不允许覆盖含有http-only的cookies。
     * @returns { Promise<void> } Promise实例，用于获取指定url设置单个cookie值是否成功。
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
     * 为指定url设置单个cookie的值。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > - configCookie中的url，可以指定域名的方式来使得页面内请求也附带上cookie。
     * >
     * > - cookie每30s周期性保存到磁盘中，也可以使用接口
     * > [saveCookieAsync]{@link webview.WebCookieManager.saveCookieAsync(callback: AsyncCallback<void>)}进行强制落盘。
     * >
     * > - value参数必须遵循Set-Cookie HTTP响应头的格式。形式为"key=value"的键值对，后面可跟随以"; "分隔的cookie属性列表（例如"key=value; Max-Age=100"）。
     * >
     * > - 若存在相同host、path和名称的cookie，将被新cookie替换。若设置的cookie已过期，则不会存储该cookie。如需设置多个cookie，应多次调用此方法。
     * >
     * > - 若通过configCookie进行两次或多次设置cookie，则每次设置的cookie之间会通过"; "进行分隔。
     * >
     * > - 如果指定的值包含"Secure"属性，则url必须使用"https://"协议。
     * >
     * > - 如果要覆盖HttpOnly的cookies，需要在value中指定HttpOnly属性。
     *
     * @param { string } url - 要设置的cookie所属的url，建议使用完整的url。
     * @param { string } value - 要设置的cookie的值。
     * @param { AsyncCallback<void> } callback - 回调函数，用于获取设置cookie的结果。
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
     * 将当前可通过fetchCookie获取到的所有需要持久化的cookie保存到磁盘中。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - saveCookieAsync用于强制将需要持久化的cookies写入磁盘。PC/2in1和Tablet设备不会持久化session cookie，即使调用saveCookieAsync，也不会将session 
     * > cookie写入磁盘。
     *
     * @returns { Promise<void> } Promise实例，用于获取cookie是否成功保存。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 26.1.0]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static saveCookieAsync(): Promise<void>;

    /**
     * 将当前可通过fetchCookie获取到的所有需要持久化的cookie异步保存到磁盘中。
     * 
     * > **说明：**
     * >
     * > - saveCookieAsync用于强制将需要持久化的cookies写入磁盘。PC/2in1和Tablet设备不会持久化session cookie，即使调用saveCookieAsync，也不会将session 
     * > cookie写入磁盘。
     *
     * @param { AsyncCallback<void> } callback - 回调函数，用于获取cookie是否成功保存。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 26.1.0]
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
     * @crossplatform [since 26.1.0]
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
     * @param { boolean } accept - 是否允许发送和接收第三方cookie。
     *     <br>true表示允许，false表示不允许。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 26.1.0]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static putAcceptThirdPartyCookieEnabled(accept: boolean): void;

    /**
     * 判断是否存在cookie。
     *
     * @param { boolean } incognito - true表示隐私模式下查询是否存在cookies，false表示正常非隐私模式下查询是否存在cookies。
     *     <br>默认值：false。
     *     <br>传入undefined或null时返回undefined。 [since 11]
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
     * 清除所有cookie（包括会话cookie和持久化cookie）。如需仅清除会话cookie，请使用
     * [clearSessionCookieSync]{@link webview.WebCookieManager#clearSessionCookieSync}。
     *
     * @param { boolean } incognito - true表示清除隐私模式下Webview的所有内存cookies，false表示清除正常非隐私模式下的持久化cookies。
     *     <br>默认值：false。
     *     <br>传入undefined或null时不清除cookies。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 26.1.0]
     * @atomicservice
     * @since 11 dynamic
     */
    static clearAllCookiesSync(incognito?: boolean): void;

    /**
     * 清除所有cookie（包括会话cookie和持久化cookie），使用Promise异步回调。如需仅清除会话cookie，请使用
     * [clearSessionCookie]{@link webview.WebCookieManager.clearSessionCookie()}。
     *
     * @returns { Promise<void> } Promise实例，用于获取清除所有cookie是否成功。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    static clearAllCookies(): Promise<void>;

    /**
     * 清除所有cookie（包括会话cookie和持久化cookie），使用callback异步回调。如需仅清除会话cookie，请使用
     * [clearSessionCookie]{@link webview.WebCookieManager.clearSessionCookie(callback: AsyncCallback<void>)}。
     *
     * @param { AsyncCallback<void> } callback - 回调函数，用于获取清除所有cookie是否成功。
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
     * @crossplatform [since 26.1.0]
     * @atomicservice
     * @since 11 dynamic
     */
    static clearSessionCookieSync(): void;

    /**
     * 清除所有会话cookie。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise实例，用于获取清除所有会话cookie是否成功。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static clearSessionCookie(): Promise<void>;

    /**
     * 清除所有会话cookie。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数，用于获取清除所有会话cookie是否成功。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    static clearSessionCookie(callback: AsyncCallback<void>): void;

    /**
     * 设置是否延后初始化ArkWeb内核，不调用该方法时，默认不延后初始化ArkWeb内核。
     * 
     * > **说明：**
     * >
     * > - 该接口是全局静态方法，须在使用ArkWeb组件和初始化ArkWeb内核前调用，否则该设置无效。
     * >
     * > - 该接口仅适用于调用后会初始化CookieManager的接口，比如本类WebCookieManager的其他接口。调用本接口设置为true后，再调用适用的接口，会在初始化CookieManager时跳过初始化
     * > ArkWeb内核，后续需自行初始化ArkWeb内核。
     *
     * @param { boolean } lazy - Controls whether to delay the initialization of the web engine.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 dynamic
     */
    static setLazyInitializeWebEngine(lazy: boolean): void;
  }

  /**
   * [WebMessagePort]{@link webview.WebMessagePort}接口所支持的数据类型。
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
   * WebMessageExt是[WebMessagePort]{@link webview.WebMessagePort}接口中用于接收和发送的拓展数据对象，支持多种数据类型：字符串（STRING）、数值（NUMBER）、布尔值（
   * BOOLEAN）、二进制数据（ARRAY_BUFFER）、数组（ARRAY）和错误对象（ERROR）。该类为ArkTS侧与HTML5侧之间的跨语言消息通信提供了结构化的数据载体，通过setType/getType设置和获取数据类
   * 型，再通过对应的setter/getter方法读写具体数据。
   * 
   * WebMessageExt与WebMessagePort配合使用：WebMessagePort负责消息通道的建立和消息的收发，WebMessageExt作为消息的有效载荷在不同语言运行时之间传递。使用扩展接口
   * [postMessageEventExt]{@link webview.WebMessagePort.postMessageEventExt}/
   * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}时，消息载
   * 体即为WebMessageExt对象。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  class WebMessageExt {
    /**
     * 获取数据对象的类型。完整示例代码参考
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}。
     *
     * @returns { WebMessageType } [WebMessagePort]{@link webview.WebMessagePort}接口所支持的数据类型。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getType(): WebMessageType;

    /**
     * 获取数据对象的字符串类型数据。完整示例代码参考
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}。
     *
     * @returns { string } 返回字符串类型的数据。
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getString(): string;

    /**
     * 获取数据对象的数值类型数据。完整示例代码参考
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}。
     *
     * @returns { number } 返回数值类型的数据。
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getNumber(): number;

    /**
     * 获取数据对象的布尔类型数据。完整示例代码参考
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}。
     *
     * @returns { boolean } 返回布尔类型的数据。
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getBoolean(): boolean;

    /**
     * 获取数据对象的原始二进制数据。完整示例代码参考
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}。
     *
     * @returns { ArrayBuffer } 返回原始二进制数据。
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getArrayBuffer(): ArrayBuffer;

    /**
     * 获取数据对象的数组类型数据。完整示例代码参考
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}。
     *
     * @returns { Array<string | number | boolean> } 返回数组类型的数据。
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getArray(): Array<string | number | boolean>;

    /**
     * 获取数据对象的错误类型数据。完整示例代码参考
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}。
     *
     * @returns { Error } 返回错误对象类型的数据。
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getError(): Error;

    /**
     * 设置数据对象的类型。完整示例代码参考
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}。
     *
     * @param { WebMessageType } type - [WebMessagePort]{@link webview.WebMessagePort}接口所支持的数据类型。
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
     * 设置数据对象的字符串类型数据。完整示例代码参考
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}。
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
     * 设置数据对象的数值类型数据。完整示例代码参考
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}。
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
     * 设置数据对象的布尔类型数据。完整示例代码参考
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}。
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
     * 设置数据对象的原始二进制数据。完整示例代码参考
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}。
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
     * 设置数据对象的数组类型数据。完整示例代码参考
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}。
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
     * 设置数据对象的错误对象类型数据。完整示例代码参考
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}。
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
   * 用于描述[WebMessagePort]{@link webview.WebMessagePort}所支持的数据类型。
   *
   * @unionmember { ArrayBuffer } 二进制类型数据。 [since 11]
   * @unionmember { string } 字符串类型数据。 [since 11]
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 9 dynamic
   */
  type WebMessage = ArrayBuffer | string;
  /**
   * WebMessagePort是Web组件中用于应用侧（ArkTS）与HTML5侧（JavaScript）之间双向通信的消息端口接口。通过createWebMessagePorts创建一对关联的端口，将一个端口发送到HTML5侧，另
   * 一个保留在应用侧，实现跨运行时消息传递。WebMessagePort支持两种消息协议：基础协议使用WebMessage作为消息载体（postMessageEvent/onMessageEvent），扩展协议使用
   * WebMessageExt支持更丰富的数据类型（postMessageEventExt/onMessageEventExt）。
   *
   * @interface WebMessagePort [since 9 - 11]
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  interface WebMessagePort {
    /**
     * 创建WebMessagePort时是否指定使用扩展增强接口，[postMessageEventExt]{@link webview.WebMessagePort.postMessageEventExt}、
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}。
     * 
     * true表示使用扩展增强接口，false表示不使用扩展增强接口。
     * 
     * 默认值：false。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    isExtentionType?: boolean;

    /**
     * 不需要发送消息时关闭该消息端口。在使用close前，请先使用[createWebMessagePorts]{@link webview.WebviewController#createWebMessagePorts}创建消息端
     * 口。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    close(): void;

    /**
     * 发送[WebMessage]{@link webview.WebMessage}类型消息给HTML5侧，必须先调用
     * [onMessageEvent]{@link webview.WebMessagePort.onMessageEvent(callback: (result: WebMessage) => void)}，否则会发送失败。完整示
     * 例代码参考[postMessage]{@link webview.WebviewController#postMessage}。
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
     * 在应用侧的消息端口上注册回调函数，接收HTML5侧发送过来的[WebMessage]{@link webview.WebMessage}类型消息。完整示例代码参考
     * [postMessage]{@link webview.WebviewController#postMessage}。
     *
     * @param { function } callback - 接收到的消息。
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
     * 发送[WebMessageType]{@link webview.WebMessageType}类型消息给HTML5侧，必须先调用
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}，否则
     * 会发送失败。完整示例代码参考
     * [onMessageEventExt]{@link webview.WebMessagePort.onMessageEventExt(callback: (result: WebMessageExt) => void)}。
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
     * 在应用侧的消息端口上注册回调函数，接收HTML5侧发送过来的[WebMessageType]{@link webview.WebMessageType}类型消息。
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
   * 页面历史记录项。
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
   * BackForwardList是ArkWeb框架中用于访问Web组件浏览历史列表的接口，通过
   * [getBackForwardEntries]{@link webview.WebviewController#getBackForwardEntries}方法获取。该接口提供对页面导航历史记录的只读访问能力，开发者可以获取当前历
   * 史列表的基本信息（当前索引和历史条目总数），以及通过索引获取指定历史记录项的详细信息。
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
     * 历史列表中历史记录的数量，最多保存50条，超过时起始记录会被覆盖。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    size: number;

    /**
     * 获取历史列表中指定索引的历史记录项信息。需先通过[getBackForwardEntries]{@link webview.WebviewController#getBackForwardEntries}方法获取
     * BackForwardList实例。
     *
     * @param { number } index - 指定历史列表中的索引。
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
     * snapshot的id，用于标识本次全量绘制请求，便于在回调结果中匹配对应的全量绘制数据。不传入时不指定id，由系统自动处理。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    id?: string;

    /**
     * Web绘制的尺寸，最多支持16000px * 16000px，长度单位支持px、vp、%，需保持不同参数传入长度单位一致，不一致时可能导致绘制尺寸不符合预期，默认单位vp，超过规格时返回最大规格。不传入以截图区域的实际尺寸绘
     * 制。（示例：width:'100px'，height:'200px'。或者 width:'20%'，height:'30%'。只写数字时单位为vp。）
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
     * snapshot的状态，正常为true，失败为false，获取全量绘制结果失败，返回size的长宽都为0，imagePixelMap为空。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    status?: boolean;

    /**
     * Web绘制的真实尺寸，SizeOptions对象包含width和height属性，均为number类型，单位vp。
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
   * [runJavaScriptExt]{@link webview.WebviewController#runJavaScriptExt(script: string | ArrayBuffer, callback: AsyncCallback<JsMessageExt>)}
   * 接口脚本执行后返回的结果的类型。
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
   * JsMessageExt是ArkWeb框架中用于封装
   * [runJavaScriptExt]{@link webview.WebviewController#runJavaScriptExt(script: string | ArrayBuffer, callback: AsyncCallback<JsMessageExt>)}
   * 接口执行JavaScript脚本后返回结果的数据类。与常规的runJavaScript接口不同，runJavaScriptExt支持更丰富的返回值类型，JsMessageExt则为这些多样化的返回结果提供了类型安全的访问方式。开发
   * 者通过JsMessageExt的getType方法先获取数据类型，再调用对应的get方法获取具体值。
   * 
   * JsMessageExt支持多种JavaScript返回值类型的解析：字符串（getString）、数值（getNumber）、布尔值（getBoolean）、原始二进制数据（getArrayBuffer）、数组（getArray
   * ）等。当获取的数据类型与实际存储类型不匹配时（例如对数值类型调用getString），会抛出错误码17100014。从API version 22开始，JsMessageExt还提供了getErrorDescription方法，用
   * 于获取JavaScript执行过程中的异常信息，如果返回值为object类型则统一格式化为描述字符串。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  class JsMessageExt {
    /**
     * 获取数据对象的类型。完整示例代码参考
     * [runJavaScriptExt]{@link webview.WebviewController#runJavaScriptExt(script: string | ArrayBuffer, callback: AsyncCallback<JsMessageExt>)}
     * 。
     *
     * @returns { JsMessageType }      
     *     [runJavaScriptExt]{@link webview.WebviewController#runJavaScriptExt(script: string | ArrayBuffer, callback: AsyncCallback<JsMessageExt>)}
     *     接口脚本执行后返回的结果的类型。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getType(): JsMessageType;

    /**
     * 获取数据对象的字符串类型数据。完整示例代码参考
     * [runJavaScriptExt]{@link webview.WebviewController#runJavaScriptExt(script: string | ArrayBuffer, callback: AsyncCallback<JsMessageExt>)}
     * 。
     *
     * @returns { string } 返回runJavaScriptExt接口脚本执行后得到的字符串类型的数据。
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getString(): string;

    /**
     * 获取数据对象的数值类型数据。完整示例代码参考
     * [runJavaScriptExt]{@link webview.WebviewController#runJavaScriptExt(script: string | ArrayBuffer, callback: AsyncCallback<JsMessageExt>)}
     * 。
     *
     * @returns { number } 返回runJavaScriptExt接口脚本执行后得到的数值类型的数据。
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getNumber(): number;

    /**
     * 获取数据对象的布尔类型数据。完整示例代码参考
     * [runJavaScriptExt]{@link webview.WebviewController#runJavaScriptExt(script: string | ArrayBuffer, callback: AsyncCallback<JsMessageExt>)}
     * 。
     *
     * @returns { boolean } 返回runJavaScriptExt接口脚本执行后得到的布尔类型的数据。
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getBoolean(): boolean;

    /**
     * 获取数据对象的原始二进制数据。完整示例代码参考
     * [runJavaScriptExt]{@link webview.WebviewController#runJavaScriptExt(script: string | ArrayBuffer, callback: AsyncCallback<JsMessageExt>)}
     * 。
     *
     * @returns { ArrayBuffer } 返回runJavaScriptExt接口脚本执行后得到的原始二进制数据。
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getArrayBuffer(): ArrayBuffer;

    /**
     * 获取数据对象的数组类型数据。完整示例代码参考
     * [runJavaScriptExt]{@link webview.WebviewController#runJavaScriptExt(script: string | ArrayBuffer, callback: AsyncCallback<JsMessageExt>)}
     * 。
     *
     * @returns { Array<string | number | boolean> } 返回runJavaScriptExt接口脚本执行后得到的数组类型的数据。
     * @throws { BusinessError } 17100014 - The type and value of the message do not match.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getArray(): Array<string | number | boolean>;

    /**
     * 获取JavaScript执行的异常信息。完整示例代码参考
     * [runJavaScriptExt]{@link webview.WebviewController#runJavaScriptExt(script: string | ArrayBuffer, callback: AsyncCallback<JsMessageExt>)}
     * 。
     *
     * @returns { string | null } 若JavaScript脚本执行过程中发生异常，或返回值为object类型，系统会将异常信息或object对象格式化为"Not support type: <{
     *     exception | object}>"字符串返回，该字符串长度不超过2048个字符，超长部分将被截断；若object对象中包含callback类型的成员，则序列化时将自动忽略该成员；其余情况，接口均返回null。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 dynamic
     */
    getErrorDescription(): string | null;
  }

  /**
   * ArkWeb渲染子进程模式类型，可根据应用对内存占用与渲染进程隔离的需求选择对应的模式。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enum RenderProcessMode {
    /**
     * ArkWeb单渲染子进程模式。该模式下，多个Web复用一个渲染子进程。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    SINGLE = 0,

    /**
     * ArkWeb多渲染子进程模式。该模式下，每个Web一个渲染子进程。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    MULTIPLE = 1
  }

  /**
   * PrefetchOptions是ArkWeb框架中用于自定义网页预取行为的配置类，通过
   * [prefetchPage]{@link webview.WebviewController#prefetchPage(url: string, additionalHeaders?: Array<WebHeader>, prefetchOptions?: PrefetchOptions)}
   * 的预取相关接口设置，自定义内容包括是否忽略响应头中的Cache-Control: no-store和设置两次预取间的最小时间间隔。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  class PrefetchOptions {
    /**
     * 设置是否忽略响应头中的Cache-Control: no-store。
     * 
     * 设置为true时忽略，为false时不忽略。
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
     * 取值范围[0, 500]。
     * 
     * 设置为负数时，默认为0。
     * 
     * 单位：ms
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    minTimeBetweenPrefetchesMs: number;

    /**
     * PrefetchOptions的构造函数。
     *
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
     * 请求此JavaScript文件时服务器返回的响应头，使用ETag或Last-Modified标识文件版本，判断是否需要更新。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    responseHeaders: Array<WebHeader>;
  }

  /**
   * [OfflineResourceMap]{@link webview.OfflineResourceMap}对象对应的本地离线资源的接口类型。
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
     * 通过<script src="" />标签加载的JavaScript资源。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    CLASSIC_JS = 2,

    /**
     * 通过<script src="" type="module" />标签加载的JavaScript资源。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    MODULE_JS = 3
  }

  /**
   * 本地离线资源配置对象，用于配置将被[injectOfflineResources]{@link webview.WebviewController#injectOfflineResources}接口注入到内存缓存的本地离线资源的相
   * 关信息，内核会根据此信息生成资源缓存，并据此控制缓存的有效期。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  interface OfflineResourceMap {
    /**
     * 本地离线资源对应的网络地址列表，列表的第一项将作为资源的源（Origin），如果仅提供一个网络地址，则使用该地址作为这个资源的源。url仅支持HTTP或HTTPS协议，长度不超过2048。不符合上述限制时，该资源注入失败。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    urlList: Array<string>;

    /**
     * 本地离线资源的内容。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    resource: Uint8Array;

    /**
     * 资源对应的HTTP响应头。其中提供的Cache-Control或Expires响应头将被用于控制资源在内存缓存中的有效期。如果不提供，默认的有效期为86400秒，即1天。其中提供的Content-Type响应头将被用于定义资源
     * 的MIMEType，MODULE_JS必须提供有效的MIMEType，其他类型可不提供，无默认值，不符合标准的MIMEType会导致内存缓存失效。如果业务网页中的script标签使用了crossorigin属性，则必须在接口的
     * responseHeaders参数中设置Cross-Origin响应头的值为anonymous或use-credentials，否则可能导致内存缓存失效。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    responseHeaders: Array<WebHeader>;

    /**
     * 资源的类型，目前仅支持JavaScript、图片和CSS类型的资源。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    type: OfflineResourceType;
  }

  /**
   * Scroll滚动类型，用于[setScrollable]{@link webview.WebviewController#setScrollable}。
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
   * WebviewController与Web组件的绑定状态。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  enum ControllerAttachState {
    /**
     * 未绑定状态。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    UNATTACHED = 0,

    /**
     * 已绑定状态。
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
     * 未匹配到key值，对于[setBlanklessLoadingWithKey]{@link @ohos.web.webview:webview.WebviewController#setBlanklessLoadingWithKey}
     * 需与[getBlanklessInfoWithKey]{@link @ohos.web.webview:webview.WebviewController#getBlanklessInfoWithKey}配套使用并且key值一致，
     * 否则返回该错误码。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    ERR_KEY_NOT_MATCH = -4,

    /**
     * 当相似度较低时，系统会判定为跳变太大，
     * [setBlanklessLoadingWithKey]{@link @ohos.web.webview:webview.WebviewController#setBlanklessLoadingWithKey}
     * 接口不会成功启用插帧。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    ERR_SIGNIFICANT_CHANGE = -5,

    /**
     * 在[BlanklessLoadingParam]{@link webview.BlanklessLoadingParam}设置的插帧持续时间超出范围。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    ERR_DURATION_OUT_OF_RANGE = -6,

    /**
     * 在[BlanklessLoadingParam]{@link webview.BlanklessLoadingParam}设置的历史帧失效时间超出范围。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    ERR_EXPIRATION_TIME_OUT_OF_RANGE = -7
  }

  /**
   * 白屏插帧状态。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  enum BlanklessFrameInterpolationState {
    /**
     * 插帧成功。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    FRAME_INTERPOLATION_SUCCEEDED = 0,

    /**
     * 插帧失败。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    FRAME_INTERPOLATION_FAILED = 1,

    /**
     * 插帧移除。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    FRAME_INTERPOLATION_REMOVED = 2
  }

  /**
   * ArkWeb内核版本，请参考
   * [M114内核在OpenHarmony 6.0系统上的适配指导](https://gitcode.com/openharmony-tpc/chromium_src/blob/master/web/ReleaseNote/CompatibleWithLegacyWebEngine_6.0.md)，
   * [M132内核在OpenHarmony 7.0系统上的适配指导](https://gitcode.com/openharmony-tpc/chromium_src/blob/master/web/ReleaseNote/CompatibleWithLegacyWebEngine_7.0.md)。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  enum ArkWebEngineVersion {
    /**
     * 系统默认内核（可参考[约束与限制](docroot://web/web-component-overview.md#约束与限制)），OpenHarmony 6.0版本默认为M132，OpenHarmony 7.0版本默认为M
     * 144。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    SYSTEM_DEFAULT = 0,

    /**
     * OpenHarmony 6.0版本的遗留内核。开发者可选择此遗留内核，若系统版本上不存在此内核则设置无效，使用系统默认内核。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    M114 = 1,

    /**
     * OpenHarmony 6.0版本的常青内核（OpenHarmony 7.0版本的遗留内核），M132为OpenHarmony 6.0版本的默认内核。若系统版本上不存在此内核则设置无效，使用系统默认内核。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    M132 = 2,

    /**
     * OpenHarmony 7.0版本的常青内核，M144为OpenHarmony 7.0版本的默认内核。若系统版本上不存在此内核则设置无效，使用系统默认内核。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    M144 = 3,

    /**
     * 系统的最新内核（常青内核）。开发者可选择在每个系统版本上都使用最新的内核。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    ARKWEB_EVERGREEN = 99999
  }

  /**
   * 页面首屏加载预测信息，主要包括首屏相似度预测值、首屏加载耗时预测值、预测错误码，应用需根据此信息来决策是否启用无白屏加载插帧方案。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  interface BlanklessInfo {
    /**
     * 无白屏加载的错误码，见[WebBlanklessErrorCode]{@link @ohos.web.webview:webview.WebBlanklessErrorCode}定义。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    errCode: WebBlanklessErrorCode;

    /**
     * 首屏相似度，根据历史加载首屏内容计算相似度，范围为[0, 1.0]，1.0表示完全一致，数值越接近1，相似度越高。该值存在滞后性，本地加载的相似度将在下次加载时才可反映。
     * 建议当相似度低于具体阈值（如0.33）时，应用不启用无白屏加载插帧方案。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    similarity: number;

    /**
     * 根据历史加载首屏耗时预测本次加载耗时，单位ms，取值范围：大于0。 
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    loadingTime: number;
  }

  /**
   * 无白屏加载插帧状态信息，作为[BlanklessLoadingParam]{@link webview.BlanklessLoadingParam}中的回调入参使用。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  interface BlanklessFrameInterpolationInfo {
    /**
     * 唯一标识插帧页面的key值。与[setBlanklessLoadingWithParams]{@link webview.WebviewController#setBlanklessLoadingWithParams}的key
     * 值相同。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    key: string;

    /**
     * 当前插帧状态。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    state: BlanklessFrameInterpolationState;

    /**
     * 插帧成功、失败或移除的时间点，UTC时间，单位ms。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    timestamp: number;

    /**
     * 插帧失败的原因。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    reason: string;
  }

  /**
   * 无白屏加载插帧方案的加载参数。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  interface BlanklessLoadingParam {
    /**
     * 是否启用无白屏加载插帧方案。
     * 
     * true表示启用，false表示不启用。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    enable: boolean;

    /**
     * 插帧持续时间。
     * 
     * 取值范围：[200, 2000] ∪ {0}，其中0表示不指定持续时间，由系统自动设置合适的持续时间。
     * 
     * 单位：ms。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    duration?: number;

    /**
     * 历史帧失效时间，UTC时间。
     * 
     * 用T表示当前UTC时间，同时已知30天为2592000000ms，取值范围：(T, T + 2592000000] ∪ {0}，其中0表示不指定失效时间，采用系统默认失效时间（7天）。
     * 
     * 单位：ms。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    expirationTime?: number;

    /**
     * 插帧成功、失败或移除后执行的回调。
     * 
     * 只有在enable为true时生效。可选，不设置则不进行任何操作。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    callback?: Callback<BlanklessFrameInterpolationInfo>;
  }

  /**
   * 安全特性选项配置。该类提供了一组布尔开关，用于控制 ArkWeb 内核中特定 Web 功能的启用状态。通过关闭业务非必需的高风险模块（如 JIT编译、WebAssembly、WebGL 等），可减小攻击面、降低潜在漏洞利用风险。所
   * 有属性均为可选，默认 false（不禁用），请根据具体业务场景按需配置。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface SecurityParams {
    /**
     * 是否禁用JIT编译。true表示禁用，false表示不禁用。默认值：false。
     * 
     * JIT编译是一种将程序代码在运行时动态编译为机器码的技术，V8引擎为了提升代码执行性能，会将热点代码编译为机器码。绝大多数浏览器漏洞（如Type Confusion）都是通过操纵JIT优化过程实现的。禁用后不影响网页功能，对于
     * 复杂JS代码性能下降17%左右。建议有条件禁用该特性，对于纯展示类、非计算密集型页面（例如新闻、文档）建议禁用。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    disableJITCompilation?: boolean;
    /**
     * 是否禁用WebAssembly。true表示禁用，false表示不禁用。默认值：false。
     * 
     * WebAssembly（简称WASM）是一种可移植的二进制指令格式，允许C/C++/Rust等语言编写的代码在浏览器中以接近原生性能运行。编译后的机器码在WASM虚拟机中执行，而WASM容易存在内存安全漏洞。建议根据页面类型决
     * 定是否禁用。对于纯展示类、非计算密集型页面（例如新闻、文档）建议禁用；对于依赖视频编解码、复杂加密的网页不建议禁用，禁用后可能影响依赖视频编解码、复杂加密的网页功能。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    disableWebAssembly?: boolean;
    /**
     * 是否禁用WebGL。true表示禁用，false表示不禁用。默认值：false。
     * 
     * WebGL允许JavaScript直接调用GPU驱动进行渲染，攻击者可能利用底层驱动漏洞实现沙箱逃逸或远程代码执行，同时WebGL也可能被应用于用户指纹识别攻击。禁用后无法进行3D渲染，部分2D画布退回到CPU渲染，可能帧率下
     * 降。金融支付类、即时通讯、政务系统等敏感业务建议禁用。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    disableWebGL?: boolean;
    /**
     * 是否禁用PDF查看器。true表示禁用，false表示不禁用。默认值：false。
     * 
     * 内置PDF解析引擎在解析复杂二进制格式和嵌入式脚本时容易存在漏洞，攻击者可构造特殊PDF文件利用字体解析或内存破坏漏洞控制应用主进程。禁用后无法在ArkWeb中加载PDF。非文档办公类App建议禁用，引导用户使用外部应用打开
     * PDF。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    disablePDFViewer?: boolean;
    /**
     * 是否禁用MathML。true表示禁用，false表示不禁用。默认值：false。
     * 
     * MathML是内核中一个相对陈旧的渲染模块，往往缺乏足够的自动化审计和模糊测试，容易成为侧信道攻击或属性注入跨站脚本攻击（Cross-Site Scripting，XSS）的跳板。建议禁用，禁用后`<math>`标签内容将无法
     * 正确解析展示，可能影响极少数未进行JS适配的科学网站公式排版。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    disableMathML?: boolean;
    /**
     * 是否禁用Service Worker。true表示禁用，false表示不禁用。默认值：false。
     * 
     * Service Worker具有持久化控制权，可在Web页面后台常驻并拦截网络请求。若网页存在XSS漏洞，攻击者可利用其安装恶意Service Worker实施中间人攻击。禁用后失去离线访问功能、Web消息推送无法使用、失去预
     * 加载能力。银行、证券等对会话新鲜度要求极高的行业建议禁用。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    disableServiceWorker?: boolean;
    /**
     * 是否禁用WebRTC非代理UDP。true表示禁用，false表示不禁用。默认值：false。
     * 
     * WebRTC开启时可能导致恶意流量绕过代理通道，暴露用户的真实物理IP地址，造成隐私泄露。禁用后强制所有流量走TCP代理会增加延迟，视频通话、实时对讲等功能可能无法建立连接。匿名社交、出海业务、强制代理等场景建议禁用。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    disableNonProxyUDP?: boolean;
  }

  /**
   * WebviewController是Web组件各种行为的核心控制器，提供网页加载与导航控制、JavaScript交互、生命周期、滚动控制、页面缩放与内容查找、消息端口通信、缓存与证书管理等广泛功能。一个
   * WebviewController对象只能控制一个Web组件，且必须在Web组件和WebviewController绑定后，才能调用WebviewController上的方法（静态方法除外）。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  class WebviewController {
    /**
     * 用于创建 WebviewController 对象的构造函数。
     * 
     * > **说明：**
     * >
     * > 不传参：new webview.WebviewController()表示构造函数为空，不使用C API时不需要传参。
     * >
     * > 传参且参数是合法字符串：new webview.WebviewController("xxx")，用于开发者区分多实例，并调用对应实例下的方法。
     * >
     * > 传入参数为空：new webview.WebviewController("")或new webview.WebviewController(undefined)，该场景下参数无意义，无法区分多个实例，直接返回
     * > undefined，需要开发者判断返回值是否正常。
     * >
     * > Web组件销毁后会解绑WebViewController，之后调用WebviewController的非静态方法会抛出
     * > [17100001](docroot://reference/apis-arkweb/errorcode-webview.md#17100001-webviewcontroller没有和具体的web组件关联)异常，应注意调
     * > 用时机和捕获异常，防止进程异常退出。
     *
     * @param { string } [webTag] - 指定了 Web 组件的名称。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    constructor(webTag?: string);

    /**
     * 设置ArkWeb内核版本。若系统不支持指定版本，则设置无效，使用系统默认内核（可参考[约束与限制](docroot://web/web-component-overview.md#约束与限制)）。该接口为全局静态API，须在调
     * 用initializeWebEngine前执行，若已加载任何Web组件，则该设置无效。典型使用场景：使用特定内核版本的特性或兼容性需求时，可切换到对应内核版本。
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
     * @returns {ArkWebEngineVersion} 返回由[ArkWebEngineVersion]{@link webview.ArkWebEngineVersion}所定义的当前使用的ArkWeb内核版本。
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
     * 在Web组件初始化之前，通过此接口加载Web引擎的动态库文件，以提高启动性能。自动预连接历史访问过的高频网站。
     * 
     * > **说明：**
     * >
     * > - initializeWebEngine不支持在异步线程中调用，否则会造成崩溃。
     * >
     * > - initializeWebEngine全局生效，在整个APP生命周期中调用一次即可，不需要重复调用。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
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
     * 设置是否启用网页调试功能。详情请参考[DevTools工具](docroot://web/web-debugging-with-devtools.md)。
     * 
     * 安全提示：启用网页调试功能可以让用户检查修改Web页面内部状态，存在安全隐患，不建议在应用正式发布版本中启用。
     *
     * @param { boolean } webDebuggingAccess - 设置是否启用网页调试功能。
     *     <br>true表示启用网页调试功能。false表示不启用网页调试功能。
     *     <br>默认值：false。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static setWebDebuggingAccess(webDebuggingAccess: boolean): void;

    /**
     * 设置私有网络访问检查功能（Private Network Access）的启用状态。
     * 
     * 启用后，Web组件将对私有网络请求（如访问本地服务器或内网资源）进行CORS预检。它会先发送OPTIONS预检请求，获取目标服务器的显式授权，然后传输实际数据。禁用此功能将跳过安全检查。
     * 
     * > **说明：**
     * >
     * > 当前私有网络访问检查功能主要针对Web Worker场景生效。
     *
     * @param { boolean } enable - 是否启用私有网络访问检查功能开关。true表示启用，false表示禁用。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static enablePrivateNetworkAccess(enable: boolean): void;
    /**
     * 获取Web组件是否启用了私有网络访问检查功能。
     * 
     * > **说明：**
     * >
     * > 当前私有网络访问检查功能主要针对Web Worker场景生效。
     *
     * @returns { boolean } 返回Web组件是否启用了私有网络访问检查功能。true表示已启用；false表示已禁用。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static isPrivateNetworkAccessEnabled(): boolean;

    /**
     * 设置是否启用无线网页调试功能，默认不开启。
     * 
     * * 当没有指定端口port时，该接口等同于
     * [setWebDebuggingAccess]{@link webview.WebviewController.setWebDebuggingAccess(webDebuggingAccess: boolean)}接口，
     * ArkWeb会启动一个本地domain socket监听。
     * * 当指定了端口port时，ArkWeb会启动一个tcp socket监听。这时可以无线调试网页。详情请参考[无线调试](docroot://web/web-debugging-with-devtools.md#无线调试)。
     * 
     * 由于小于1024的端口号作为熟知或系统端口，在操作系统上需要特权才能开启，因此port的取值必须大于1024，否则该接口会抛出异常。
     * 
     * 安全提示：启用网页调试功能可以让用户检查修改Web页面内部状态，存在安全隐患，不建议在应用正式发布版本中启用。
     *
     * @param { boolean } webDebuggingAccess - 设置是否启用网页调试功能。<br/>true表示开启网页调试功能，false表示关闭网页调试功能。
     * @param { number } port - 指定DevTools服务的tcp端口号。如果没有指定port，那么该接口等同于
     *     [setWebDebuggingAccess]{@link webview.WebviewController.setWebDebuggingAccess(webDebuggingAccess: boolean)}接
     *     口。<br/>取值范围: (1024, 65535]<br/>如果port的值在区间[0, 1024]内，则会抛出BusinessError异常，错误码为17100023。
     * @throws { BusinessError } 17100023 - The port number is not within the allowed range.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static setWebDebuggingAccess(webDebuggingAccess: boolean, port: number): void;

    /**
     * 设置ArkWeb中已使用过的空闲socket的超时时间，即已使用过的socket可以处于空闲状态的最大时长。如果设置的值与已存在的空闲socket超时时间不同，则根据新的值对已存在的空闲socket进行清理。
     * 
     * 未使用该接口设置空闲socket的超时时间时，ArkWeb的默认值为300s。
     *
     * @param { number } timeout - ArkWeb中已经使用过的空闲socket的超时时间。
     *     <br>取值范围：[30,300]，单位：s。
     *     <br>小于30时生效值为30，大于300时生效值为300。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    static setSocketIdleTimeout(timeout: number): void;

    /**
     * 启用检查网站安全风险的功能，非法和欺诈网站是强制启用的，不能通过此功能禁用。
     * 
     * 本功能默认不生效，OpenHarmony只提供恶意网址拦截页WebUI，网址风险检测以及显示WebUI的功能由Vendor实现。推荐在WebContentsObserver中监听跳转
     * [DidStartNavigation](https://gitcode.com/openharmony-tpc/chromium_src/blob/master/content/public/browser/web_contents_observer.h)
     * 、
     * [DidRedirectNavigation](https://gitcode.com/openharmony-tpc/chromium_src/blob/master/content/public/browser/web_contents_observer.h)
     * 进行检测。
     * 
     * > **说明：**
     * >
     * > 该接口不生效，调用不会产生任何实际效果。
     *
     * @param { boolean } enable - 是否启用检查网站安全风险的功能。
     *     <br>true表示启用检查网站安全风险的功能，false表示不启用检查网站安全风险的功能。
     *     <br>默认值：false。
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
     * @returns { boolean } 当前网页是否启用了检查网站安全风险的功能。
     *     <br>true表示启用了检查网站安全风险的功能，false表示未启用检查网站安全风险的功能。
     *     <br>默认值：false。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    isSafeBrowsingEnabled(): boolean;

    /**
     * 当前页面是否可前进，即当前页面是否有前进历史记录。
     * 
     * 可以结合使用[getBackForwardEntries]{@link webview.WebviewController#getBackForwardEntries}来获取当前WebView的历史信息列表，以及使用
     * [accessStep]{@link webview.WebviewController#accessStep}来判断是否可以按照给定的步数前进或后退。
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
     * 可以结合使用[getBackForwardEntries]{@link webview.WebviewController#getBackForwardEntries}来获取当前WebView的历史信息列表，以及使用
     * [accessStep]{@link webview.WebviewController#accessStep}来判断是否可以按照给定的步数前进或后退。
     * 
     * > **说明：**
     * >
     * > 在Web组件首次加载过程中调用[setCustomUserAgent]{@link webview.WebviewController#setCustomUserAgent}，可能会导致在当前存在多个历史节点的情况下，获取
     * > 的accessBackward实际为false，即没有后退节点。建议先调用setCustomUserAgent方法设置UserAgent，再通过loadUrl加载具体页面。
     * >
     * > 该现象是由于在Web组件首次加载时，调用[setCustomUserAgent]{@link webview.WebviewController#setCustomUserAgent}会导致组件重新加载并保持初始历史节点的
     * > 状态。随后新增的节点将替换初始历史节点，不会生成新的历史节点，导致accessBackward为false。
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
     * 按照历史栈，前进一个页面。一般结合[accessForward]{@link webview.WebviewController#accessForward}一起使用。
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
     * 按照历史栈，后退一个页面。一般结合[accessBackward]{@link webview.WebviewController#accessBackward}一起使用。
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
     * 删除所有前进后退记录，不建议在onErrorReceive与onPageBegin中调用clearHistory，会造成异常退出。
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
     * 调用此接口通知Web组件进入前台激活状态。
     * 
     * 激活状态是应用与用户互动的状态。应用会保持这种状态，直到发生某些事件（例如收到来电或设备屏幕关闭）时将焦点从应用移开。
     * 
     * 若页面此前处于未激活状态，H5页面中通过document.addEventListener('visibilitychange',...)注册的事件监听器将被触发，document.visibilityState 从"
     * hidden"变为"visible"。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    onActive(): void;

    /**
     * 调用此接口通知Web组件进入未激活状态。开发者可以在此回调中实现应用失去焦点时应表现的恰当行为。
     * 
     * 此状态下会尽可能的暂停任何可以安全暂停的内容，例如动画和地理位置。但不会暂停JavaScript，要全局暂停JavaScript，请使用
     * [pauseAllTimers]{@link webview.WebviewController#pauseAllTimers}。要重新激活Web组件，请调用
     * [onActive]{@link webview.WebviewController#onActive}。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
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
     *     <br>true表示忽略缓存刷新，false表示不忽略缓存刷新。<br/>**说明：**
     *     <br>传入undefined或null时为false。
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
     * 
     * data数据必须使用base64编码或将内容中的任何#字符编码为%23。否则#将被视为内容的结尾而剩余的文本将被用作文档片段标识符。
     * 
     * > **说明：**
     * >
     * > - 若加载本地图片，可以给baseUrl或historyUrl任一参数赋值空格，详情请参考示例代码。
     * >
     * > - 加载本地图片场景，baseUrl和historyUrl不能同时为空，否则图片无法成功加载。
     * >
     * > - 若html中的富文本中带有注入#等特殊字符，建议将baseUrl和historyUrl两个参数的值设置为"空格"。
     * >
     * > - 加载文字场景，需主动设置`<meta name="viewport" content="width=device-width, initial-scale=1.0" charset="utf-8">`避免文本字体大小不
     * > 一致。
     *
     * @param { string } data - 按照"base64"或者"URL"编码后的一段字符串。
     * @param { string } mimeType - 媒体类型（MIME）。
     * @param { string } encoding - 编码类型，具体为"base64"或者"URL"编码。
     * @param { string } [baseUrl] - 指定的一个URL路径（"http"/"https"/"data"协议），并由Web组件赋值给`window.origin`。当加载大量html文件时，需设置为"
     *     data"。
     *     <br>传入undefined或null会抛出异常错误码401。
     * @param { string } [historyUrl] - 用作历史记录所使用的URL。非空时，历史记录以此URL进行管理。当baseUrl为空时，此属性无效。
     *     <br>传入undefined或null会抛出异常错误码401。
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
     * @param { Array<WebHeader> } [headers] - URL的附加HTTP请求头。
     *     <br>默认值： []。 
     *     <br>传入undefined或null会抛出异常错误码401。
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
     * @param { boolean } autoName - 决定是否自动生成文件名。
     *     <br>false表示按baseName的文件名存储，true表示根据当前URL自动生成文件名，并按baseName的文件目录存储。
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
     * @param { boolean } autoName - 决定是否自动生成文件名。
     *     <br>false表示按baseName的文件名存储，true表示根据当前URL自动生成文件名，并按baseName的文件目录存储。
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
     * 调整当前网页的缩放比例，[zoomAccess]{@link WebAttribute#zoomAccess}需为true。
     *
     * @param { number } factor - 基于当前网页所需调整的相对缩放比例，入参要求大于0，当入参为1时为默认加载网页的缩放比例，入参小于1为缩小，入参大于1为放大。
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
     * 获取Web组件的索引值，用于多个Web组件的管理。
     *
     * @returns { number } Web组件的索引值。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    getWebId(): number;

    /**
     * 获取当前默认用户代理。
     * 
     * 默认User-Agent定义与使用场景请参考[User-Agent开发指导](docroot://web/web-default-userAgent.md)
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
     * 使指定组件获取焦点。
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
     * @param { boolean } isExtentionType - 是否使用扩展增强接口。
     *     <br>true表示使用扩展增强接口，false表示不使用扩展增强接口。
     *     <br>默认值：false。
     *     <br>传入undefined或null会抛出异常错误码401。 [since 10]
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
     * registerJavaScriptProxy提供了应用与Web组件加载的网页之间强大的交互能力。注入JavaScript对象到window对象中，并在window对象中调用该对象的方法。
     * 
     * 示例请参考[前端页面调用应用侧函数](docroot://web/web-in-page-app-function-invoking.md)。
     * 
     * > **说明：**
     * >
     * > - registerJavaScriptProxy需要和deleteJavaScriptRegister接口配合使用，防止内存泄漏。
     * >
     * > - 请尽可能只在可信的URL及安全通信HTTPS场景下进行registerJavaScriptProxy注册。在非可信的Web组件中注入JavaScript对象，可能会导致应用被恶意攻击。
     * >
     * > - 在注册registerJavaScriptProxy后，应用会将JavaScript对象暴露给所有的页面frames。
     * >
     * > - 同一方法在同步与异步列表中重复注册，将默认异步调用。
     * >
     * > - 同步函数列表和异步函数列表不可同时为空，否则此次调用接口注册失败。
     * >
     * > - 异步的作用在于：H5线程将异步JavaScript任务提交给ETS主线程后，无需等待任务执行完成并返回结果，H5线程即可继续执行后续任务。这在执行耗时较长的JavaScript任务或ETS线程较为拥堵的情况下，可以有效
     * > 减少H5线程因JavaScript任务而被阻塞的情况。然而，异步JavaScript任务无法返回值，且任务执行的顺序无法保证，因此需要根据具体情境判断是否使用同步或异步方式。
     * >
     * > - 注入的对象在页面下一次（重新）加载前不会出现在JavaScript中。
     *
     * @param { object } jsObject - 参与注册的应用侧JavaScript对象。可以单独声明方法和属性，但无法同时进行注册与使用。对象只包含属性时，H5可以访问对象中的属性。对象只包含方法时，H5可以访问对
     *     象中的方法。
     *     <br>1. 方法的参数和返回类型可以为string，number，boolean。
     *     <br>2. 方法的参数和返回类型支持Dictionary，Array，最多嵌套10层，每层1w个数据。
     *     <br>3. 方法的参数和返回类型支持Object，需要在Object里添加属性methodNameListForJsProxy:[fun1, fun2]，fun1和fun2为可被调用的方法。
     *     <br>4. 方法的参数支持Function，Promise，它们的Callback不能有返回值。
     *     <br>5. 方法的返回类型支持Promise，Promise的Callback不能有返回值。
     * @param { string } name - 注册对象的名称，与window中调用的对象名一致。注册后window对象可以通过此名字访问应用侧JavaScript对象。
     * @param { Array<string> } methodList - 参与注册的应用侧JavaScript对象的同步方法。
     * @param { Array<string> } [asyncMethodList] - 参与注册的应用侧JavaScript对象的异步方法，默认为空。异步方法无法获取返回值。
     *     <br>传入undefined或null会抛出异常错误码401。 [since 12]
     * @param { string } [permission] - JSON字符串，默认为空，通过该字符串配置JSBridge的权限管控，可以定义object和method级别的URL白名单。
     *     <br>1. scheme（协议）和host（域名）参数不可为空，且host不支持通配符，只能填写完整的host。
     *     <br>2. 可以仅配置object级别的白名单，该白名单对所有JSBridge方法生效。
     *     <br>3. 若JSBridge方法A设置了method级别的白名单，那么方法A最终的白名单是object级别白名单与method级别白名单的交集。
     *     <br>传入undefined或null会抛出异常错误码401。 [since 12]
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
     * 删除通过[registerJavaScriptProxy]{@link webview.WebviewController#registerJavaScriptProxy}或者
     * [javaScriptProxy]{@link WebAttribute#javaScriptProxy}注册到window上的指定name的应用侧JavaScript对象。删除操作在页面下次（重新）加载后生效。
     *
     * @param { string } name - 注册对象的名称，可在网页侧JavaScript中通过此名称调用应用侧JavaScript对象。
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
     * 异步查找网页中所有匹配关键字'searchString'的内容并高亮，结果通过[onSearchResultReceive]{@link WebAttribute#onSearchResultReceive}异步返回。
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
     * @param { boolean } forward - 从前向后或者逆向查找方式。
     *     <br>true表示从前向后查找，false表示从后向前查找。
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
     * >
     * > - 目前不支持传递对象，支持传递结构体。
     * >
     * > - 执行异步方法无法获取返回值，需要根据具体情境判断是否使用同步或异步方式。
     * >
     * > - 前端页面传到应用侧的string数据类型会被视为JSON格式的数据，需要调用JSON.parse反序列化。
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
     * >
     * > - 目前不支持传递对象，支持传递结构体。
     * >
     * > - 执行异步方法无法获取返回值，需要根据具体情境判断是否使用同步或异步方式。
     * >
     * > - 前端页面传到应用侧的string数据类型会被视为JSON格式的数据，需要调用JSON.parse反序列化。
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
     * 异步执行JavaScript脚本，并通过Promise方式返回脚本执行的结果。runJavaScriptExt需要在loadUrl完成后，比如[onPageEnd]{@link WebAttribute#onPageEnd}中
     * 调用。
     * 
     * > **说明：**
     * >
     * > - 前端页面传到应用侧的string数据类型会被视为JSON格式的数据，需要调用JSON.parse反序列化。
     *
     * @param { string } script - JavaScript script. [since 10 - 11]
     * @param { string | ArrayBuffer } script - JavaScript脚本。 [since 12]
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
     * 异步执行JavaScript脚本，并通过回调方式返回脚本执行的结果。runJavaScriptExt需要在loadUrl完成后，比如onPageEnd中调用。
     * 
     * > **说明：**
     * >
     * > - 前端页面传到应用侧的string数据类型会被视为JSON格式的数据，需要调用JSON.parse反序列化。
     *
     * @param { string } script - JavaScript script. [since 10 - 11]
     * @param { string | ArrayBuffer } script - JavaScript脚本。 [since 12]
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
     * 异步callback方式获取指定网页的数据流。
     *
     * @param { PdfConfiguration } configuration - 生成PDF所需参数。
     * @param { AsyncCallback<PdfData> } callback - 回调返回网页PDF数据流。
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14 dynamic
     */
    createPdf(configuration: PdfConfiguration, callback: AsyncCallback<PdfData>): void;

    /**
     * 以Promise方式异步获取指定网页的数据流。
     *
     * @param { PdfConfiguration } configuration - 生成PDF所需参数。
     * @returns { Promise<PdfData> } Promise实例，返回网页PDF数据流（PdfData对象，包含ArrayBuffer表示的PDF二进制数据）。
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
     * @param { boolean } top - 是否跳转到页面最顶部。
     *     <br>false表示将页面内容向上滚动半个视框大小，true表示跳转到页面最顶部。
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
     * @param { boolean } bottom - 是否跳转到页面最底部。
     *     <br>false时表示将页面内容向下滚动半个视框大小，true表示跳转到页面最底部。
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
     * 风险提示：如果想获取URL来做JavascriptProxy通信接口认证，请使用
     * [getLastJavascriptProxyCallingFrameUrl<sup>12+</sup>]{@link webview.WebviewController#getLastJavascriptProxyCallingFrameUrl}
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
     * @returns { image.PixelMap } 页面favicon图标的PixelMap对象。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    getFavicon(): image.PixelMap;

    /**
     * 设置JavaScript中的`window.navigator.onLine`属性。
     *
     * @param { boolean } enable - 设置JavaScript中的`window.navigator.onLine`属性。
     *     <br>true表示设置JavaScript中的`window.navigator.onLine`属性为true，false表示设置JavaScript中的`window.navigator.onLine`属性为
     *     false。
     *     <br>默认值：true。
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
     * @param { AsyncCallback<boolean> } callback - 返回查找页面是否存在图像。
     *     <br> true表示页面存在图像；false表示页面不存在图像。
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
     * 获取当前WebView的历史信息列表。
     * 
     * > **说明：**
     * >
     * > [onLoadIntercept]{@link WebAttribute#onLoadIntercept}在加载开始的时候触发，该时刻还未生成历史节点，所以在onLoadIntercept中调用
     * > getBackForwardEntries拿到的历史栈不包括当前正在加载中的跳转。
     *
     * @returns { BackForwardList } 当前WebView的历史信息列表。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    getBackForwardEntries(): BackForwardList;

    /**
     * 清除与当前WebView上下文相关的资源缓存。
     * 
     * > **说明：**
     * >
     * > 可以通过在data/storage/el2/base/cache/web/Cache目录下查看Webview的缓存。
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
     * 清除应用内所有Webview(含隐私模式)产生的资源缓存。
     * 
     * > **说明：**
     * >
     * > 可以通过在data/app/el2/100/base/\<applicationPackageName\>/cache/web/目录下查看Webview的缓存。
     *
     * @param { boolean } clearRom - 设置为true时同时清除ROM和RAM中的缓存，设置为false时只清除RAM中的缓存。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 18 dynamic
     */
    static removeAllCache(clearRom: boolean): void;

    /**
     * 在指定时间内，将页面滚动到指定的绝对位置。
     *
     * @param { number } x - 绝对位置的水平坐标，当传入数值为负数时，按照传入0处理。
     *     <br>单位：vp。
     * @param { number } y - 绝对位置的垂直坐标，当传入数值为负数时，按照传入0处理。
     *     <br>单位：vp。
     * @param { number } [duration] - 滚动动画时间。
     *     <br>单位：ms。
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
    scrollTo(x: number, y: number, duration?: number): void;

    /**
     * 在指定时间内将页面滚动指定的偏移量。
     *
     * @param { number } deltaX - 水平偏移量，其中水平向右为正方向。
     *     <br>单位：vp。
     * @param { number } deltaY - 垂直偏移量，其中垂直向下为正方向。
     *     <br>单位：vp。
     * @param { number } duration - 滚动动画时间。
     *     <br>单位：ms。
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
     * @param { number } vx - 轻扫滚动的水平速度分量，其中水平向右为速度正方向。
     *     <br>单位：vp/s。
     * @param { number } vy - 轻扫滚动的垂直速度分量，其中垂直向下为速度正方向。
     *     <br>单位：vp/s。
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
     * 将当前WebView的页面状态历史记录信息序列化。
     *
     * @returns { Uint8Array } 当前WebView的页面状态历史记录序列化后的数据。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    serializeWebState() : Uint8Array;

    /**
     * 当前WebView从序列化数据中恢复页面状态历史记录。
     * 
     * 如果state过大，可能会导致异常。建议state大于512k时，放弃恢复页面状态历史记录。
     *
     * @param { Uint8Array } state - 页面状态历史记录序列化数据。
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
     * 对Web内核赋予自定义协议URL的跨域请求与fetch请求的权限。当Web在跨域fetch自定义协议URL时，该fetch请求可被
     * [onInterceptRequest]{@link WebAttribute#onInterceptRequest}事件接口所拦截，从而开发者可以进一步处理该请求。建议在任何Web组件初始化之前调用该接口。
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
     * [onInterceptRequest]{@link WebAttribute#onInterceptRequest}事件接口所拦截，从而开发者可以进一步处理该请求。建议在任何Web组件初始化之前调用该接口。
     *
     * @param { Array<WebCustomScheme> } schemes - 自定义协议配置，最多支持同时配置10个自定义协议。
     * @param { boolean } lazyInitWebEngine - 表示接口内部是否跳过初始化WebEngine。
     *     <br>true表示接口内部跳过初始化WebEngine，并将注册的Schemes暂存，当它真正初始化时，这些Schemes将传递给WebEngine。false表示接口内部自动进行WebEngine初始化。
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
     * 获取当前网站的证书信息。使用Web组件加载https网站，会进行SSL证书校验，该接口会通过Promise异步返回当前网站的X509格式证书（X509Cert证书类型定义见
     * [X509Cert]{@link @ohos.security.cert:cert.X509Cert}定义），便于开发者展示网站证书信息。
     *
     * @returns { Promise<Array<cert.X509Cert>> } Promise实例，用于获取当前加载的https网站的X509格式证书数组。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    getCertificate(): Promise<Array<cert.X509Cert>>;

    /**
     * 获取当前网站的证书信息。使用Web组件加载https网站，会进行SSL证书校验，该接口会通过AsyncCallback异步返回当前网站的X509格式证书（X509Cert证书类型定义见
     * [X509Cert]{@link @ohos.security.cert:cert.X509Cert}），便于开发者展示网站证书信息。
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
     * 设置网页静音。典型使用场景包括：应用需要控制网页音量（如提供静音开关）、后台播放时需要静音等。
     *
     * @param { boolean } mute - 表示是否将网页设置为静音状态。
     *     <br>true表示将网页设置为静音状态，false表示将网页取消静音状态。
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
     * >
     * > - prefetchPage会缓存所有资源，但具有Cache-Control: no-store标头的资源除外。如果存在Vary响应标头、Cache-Control: no-store标头，或者下载的页面资源已超过五分钟，
     * > 则在使用之前会重新验证资源。
     *
     * @param { string } url - 预加载的URL。
     * @param { Array<WebHeader> } [additionalHeaders] - URL的附加HTTP请求头。
     *     <br>默认值： []
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
     * > - prefetchPage会缓存所有资源，但具有Cache-Control: no-store标头的资源除外。如果存在Vary响应标头、Cache-Control: no-store标头，或者下载的页面资源已超过五分钟，
     * > 则在使用之前会重新验证资源。
     *
     * @param { string } url - 预加载的URL。
     * @param { Array<WebHeader> } [additionalHeaders] - URL的附加HTTP请求头。
     *     <br>默认值： []
     * @param { PrefetchOptions } [prefetchOptions] - 用来自定义预取行为的相关选项。 
     *     <br>两次预取间的最小时间间隔为500ms，默认不忽略响应头中的Cache-Control: no-store。
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
     * 预连接URL，在加载URL之前调用此API，对URL只进行DNS解析，socket建链操作，并不获取主资源子资源。
     *
     * @param { string } url - 预连接的URL。
     * @param { boolean } preconnectable - 是否进行预连接。如果preconnectable为true，则对URL进行DNS解析，socket建链预连接；如果preconnectable为
     *     false，则不做任何预连接操作。
     * @param { number } numSockets - 要预连接的socket数。socket数目连接需要大于0，最多允许6个连接。
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
     * 设置Web内核的自动预连接状态。若未设置，默认启用自动预连接。
     * 
     * 需要在[initializeWebEngine()]{@link webview.WebviewController#initializeWebEngine}初始化内核或者创建Web组件之前调用。若已加载任何Web组件，则该设
     * 置无效。
     *
     * @param { boolean } enabled - 是否启用Web内核自动预连接的开关。true表示启用，false表示禁用。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    static setAutoPreconnect(enabled: boolean): void;
    /**
     * 查询Web内核的自动预连接状态。
     * 
     * 如果没有使用[setAutoPreconnect]{@link webview.WebviewController#setAutoPreconnect}设置Web内核自动预连接的状态，则默认启用自动预连接，返回true。
     *
     * @returns { boolean } 返回Web内核是否启用了自动预连接。true表示已启用；false表示已禁用。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    static isAutoPreconnectEnabled(): boolean;
    /**
     * 设置自定义用户代理，会覆盖系统的用户代理。
     * 
     * > **说明：**
     * >
     * > - 当Web组件src设置了URL时，建议在[onControllerAttached]{@link WebAttribute#onControllerAttached}回调中设置User-Agent。不要在
     * > onLoadIntercept回调中设置，否则可能会设置失败或导致不可预期的后果。
     * >
     * > - 若未在onControllerAttached回调中设置User-Agent，再调用setCustomUserAgent方法时，可能会出现加载的页面与实际设置User-Agent不符的异常现象。
     * >
     * > - 当Web组件src未设置URL时，建议先调用setCustomUserAgent方法设置User-Agent，再通过loadUrl加载具体页面。
     * >
     * > - 默认User-Agent定义与使用场景请参考[User-Agent开发指导](docroot://web/web-default-userAgent.md)
     *
     * @param { string } userAgent - 用户自定义代理信息。建议先使用[getUserAgent]{@link webview.WebviewController#getUserAgent}获取当前默认用户
     *     代理，在此基础上追加自定义用户代理信息。
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
     * 针对特定网站设置自定义用户代理，会覆盖系统的用户代理，应用内所有Web组件生效。
     * 
     * 当需要对特定网站设置自定义用户代理时，建议在Web组件创建前调用setUserAgentForHosts方法设置User-Agent，再创建指定src的Web组件或通过
     * [loadUrl]{@link webview.WebviewController#loadUrl}加载具体页面。
     * 
     * 默认User-Agent定义与使用场景，及相关User-Agent接口定义优先级请参考[User-Agent开发指导](docroot://web/web-default-userAgent.md)。
     *
     * @param { string } userAgent - 用户自定义代理信息。建议先使用
     *     [getDefaultUserAgent]{@link webview.WebviewController#getDefaultUserAgent}获取当前默认用户代理，在此基础上追加自定义用户代理信息。
     * @param { Array<string> } hosts - 用户自定义代理的相关域名列表，每次调用时仅保留最新传入的列表，并限制最大条目数为两万，超出部分自动截断。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static setUserAgentForHosts(userAgent: string, hosts : Array<string>) : void;

    /**
     * 设置是否开启User-Agent Client Hints功能。
     * 
     * > **说明：**
     * >
     * > User-Agent Client Hints（UA-CH）是一种替代传统User-Agent字符串的隐私保护机制，通过按需请求和结构化数据传递客户端信息，减少过度追踪风险。
     * >
     * > 不使用该方法时，默认不开启User-Agent Client Hints功能。
     *
     * @param { boolean } enabled - 是否开启User-Agent Client Hints功能。<br/>true表示开启，false表示不开启。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 24 dynamic
     */
    static setUserAgentClientHintsEnabled(enabled: boolean): void;

    /**
     * 查询User-Agent Client Hints功能当前是否开启。
     *
     * @returns { boolean } 返回User-Agent Client Hints功能开启状态。true表示已开启；false表示已关闭。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 24 dynamic
     */
    static getUserAgentClientHintsEnabled(): boolean;

    /**
     * 设置与User-Agent相对应的UserAgent Metadata数据。
     * 
     * > **说明：**
     * >
     * > User-Agent Metadata将用于填充用户代理客户端提示，它们可以提供客户端的品牌和版本信息、底层操作系统的品牌和主要版本，以及底层设备的详细信息。
     * >
     * > 用户代理可以通过setCustomUserAgent、setAppCustomUserAgent或setUserAgentForHosts来设置。
     * >
     * > 如果根据覆盖后的User-Agent未找到UserAgentMetadata，且覆盖后的User-Agent包含系统默认的User-Agent，则将使用系统默认值。
     * >
     * > 如果根据覆盖后的User-Agent未找到UserAgentMetadata，但覆盖后的 User-Agent 不包含系统默认用户代理，则只会生成低级用户代理客户端提示。
     *
     * @param { string } userAgent - 用户自定义代理信息。可以使用[getUserAgent]{@link webview.WebviewController#getUserAgent}获取当前默认用户代
     *     理。
     * @param { UserAgentMetadata } metaData - userAgent对应的UserAgentMetadata。可以先使用
     *     [getUserAgentMetadata]{@link webview.WebviewController#getUserAgentMetadata}获取当前默认值，然后用相应方法进行修改。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 24 dynamic
     */
    setUserAgentMetadata(userAgent: string, metaData: UserAgentMetadata): void;

    /**
     * 查询userAgent对应的UserAgent Metadata信息。
     *
     * @param { string } userAgent - 用户自定义代理信息。可以使用[getUserAgent]{@link webview.WebviewController#getUserAgent}获取当前默认用户代
     *     理。
     * @returns { UserAgentMetadata } userAgent对应的[UserAgentMetadata]{@link webview.UserAgentMetadata}。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 24 dynamic
     */
    getUserAgentMetadata(userAgent: string): UserAgentMetadata;

    /**
     * 设置应用级自定义用户代理，会覆盖系统的用户代理，应用内所有Web组件生效。
     * 
     * 当需要设置应用级自定义用户代理时，建议在Web组件创建前调用setAppCustomUserAgent方法设置User-Agent，再创建指定src的Web组件或通过
     * [loadUrl]{@link webview.WebviewController#loadUrl}加载具体页面。
     * 
     * 默认User-Agent定义与使用场景，及相关User-Agent接口定义优先级请参考[User-Agent开发指导](docroot://web/web-default-userAgent.md)。
     *
     * @param { string } userAgent - 用户自定义代理信息。建议先使用
     *     [getDefaultUserAgent]{@link webview.WebviewController#getDefaultUserAgent}获取当前默认用户代理，在此基础上追加自定义用户代理信息。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static setAppCustomUserAgent(userAgent: string) : void;

    /**
     * 获取自定义用户代理。
     * 
     * 默认User-Agent定义与使用场景请参考[User-Agent开发指导](docroot://web/web-default-userAgent.md)
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
     * @param { number } timeout - socket连接超时时间，单位：s，必须为大于0的整数。
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
     * 使用"POST"方法加载带有postData的URL。如果URL不是网络URL，则会使用[loadUrl]{@link webview.WebviewController#loadUrl}方法加载URL，忽略postData参
     * 数。
     *
     * @param { string } url - 需要加载的URL。
     * @param { ArrayBuffer } postData - 使用"POST"方法传递数据。 该请求必须采用"application/x-www-form-urlencoded"编码。
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
     * 创建web相关打印功能。
     *
     * @param { string } jobName - 需要打印的文件名。
     * @returns { print.PrintDocumentAdapter } 打印文档的适配器，用于控制打印行为和打印任务，可通过打印服务打印当前网页内容。
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
     * 获取当前网页加载进度。
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
     * @param { boolean } enable - 表示是否将网页设置为允许滚动。
     *     <br>true表示设置为允许滚动，false表示禁止滚动。
     *     <br>默认值：true。
     * @param { ScrollType } type - 网页可触发的滚动类型，支持缺省配置。<br/> - enable为false时，表示禁止ScrollType类型的滚动，当ScrollType缺省时表示禁止所有类型网页
     *     滚动。<br/> - enable为true时，ScrollType缺省与否，都表示允许所有类型的网页滚动。
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
     * 设置是否打印网页背景，该接口与[PrintAttributes]{@link @ohos.print:print.PrintAttributes}打印参数配置不一致时，本接口设置优先级高于打印参数。
     *
     * @param { boolean } enable - 表示是否打印网页背景。
     *     <br>true表示设置为打印网页背景，false表示取消网页背景打印。
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
     * 查询webview是否打印网页背景。
     *
     * @returns { boolean } 返回webview是否打印网页背景。
     *     <br>true:打印网页背景；false:不打印网页背景。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    getPrintBackground(): boolean;

    /**
     * 通过[registerJavaScriptProxy]{@link webview.WebviewController#registerJavaScriptProxy}或者
     * [javaScriptProxy]{@link WebAttribute#javaScriptProxy}注入JavaScript对象到window对象中。该接口可以获取最后一次调用注入的对象的frame的URL。
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
     * > **说明：**
     * >
     * > 与 resumeMicrophone 和 stopMicrophone 的区别：
     * >
     * > pauseMicrophone 仅暂停麦克风捕获，可通过 resumeMicrophone 恢复；stopMicrophone 会停止捕获并释放资源。
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
     * 暂停所有WebView的定时器，定时器暂停期间，网页中的setInterval、setTimeout等定时操作将被挂起。建议在应用进入后台等场景暂停，前台时恢复，以节省资源，可以与
     * [resumeAllTimers]{@link webview.WebviewController#resumeAllTimers}()成对使用，避免定时器状态混乱。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static pauseAllTimers(): void;

    /**
     * 恢复从pauseAllTimers()接口中被暂停的所有的定时器。
     *
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
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
     * 为Web组件设置[WebSchemeHandler]{@link webview.WebSchemeHandler}, [WebSchemeHandler]{@link webview.WebSchemeHandler}类用于
     * 拦截指定scheme的请求。
     *
     * @param { string } scheme - 要拦截的协议。
     * @param { WebSchemeHandler } handler - 拦截此协议的拦截器。
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
     * 清除Web组件设置的所有WebSchemeHandler。
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
     * 为当前应用的所有Web组件设置用于拦截ServiceWorker的WebSchemeHandler。
     *
     * @param { string } scheme - 要拦截的协议。
     * @param { WebSchemeHandler } handler - 拦截此协议的拦截器。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static setServiceWorkerWebSchemeHandler(scheme: string, handler: WebSchemeHandler): void;

    /**
     * 清除应用中设置的所有用于拦截ServiceWorker的WebSchemeHandler。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static clearServiceWorkerWebSchemeHandler(): void;

    /**
     * 启用智能防跟踪功能。
     *
     * @param { boolean } enable - 是否启用智能防跟踪功能。
     *     <br>true表示启用智能防跟踪功能，false表示不启用智能防跟踪功能。
     *     <br>默认值：false。
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
     * 此接口只允许在UI线程调用。
     * 
     * 默认User-Agent定义与使用场景请参考[User-Agent开发指导](docroot://web/web-default-userAgent.md)
     *
     * @returns {string} ArkWeb默认User-Agent字符串。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 26.1.0]
     * @since 14 dynamic
     */
    static getDefaultUserAgent(): string;

    /**
     * 注册回调函数，使用[enableNativeMediaPlayer]{@link WebAttribute#enableNativeMediaPlayer}开启应用接管网页媒体播放功能后，当网页中有播放媒体时，触发注册的回调函
     * 数。
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
     * [clearPrefetchedResource]{@link webview.WebviewController#clearPrefetchedResource}清除不需要的POST请求缓存，否则会自动清除最早预获取的
     * POST缓存。如果要使用预获取的资源缓存，开发者需要在正式发起的POST请求的请求头中增加键值“ArkWebPostCacheKey”，其内容为对应缓存的cacheKey。
     * 
     * 内存缓存中的资源由内核自动管理。当注入的资源过多，导致内存压力过大时，内核会自动释放未使用的资源，但仍应避免向内存缓存中注入大量资源。
     *
     * @param { RequestInfo } request - 预获取请求的信息。
     * @param { Array<WebHeader> } [additionalHeaders] - 预获取请求的附加HTTP请求头。 
     *     <br>传入undefined或null会抛出异常错误码401。
     * @param { string } [cacheKey] - 用于后续查询预获取资源缓存的key。仅支持字母和数字，未传入或传入空则取默认值url作为key。
     *     <br>传入undefined或null会抛出异常错误码401。
     * @param { number } [cacheValidTime] - 预获取资源缓存的有效期。
     *     <br>取值范围：(0, 2147483647]。
     *     <br>默认值：300s。 
     *     <br>单位：s。    
     *     <br>传入undefined或null会抛出异常错误码401。
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
     * 根据指定的缓存key列表清除对应的预获取资源缓存。入参中的缓存key必须是[prefetchResource]{@link webview.WebviewController#prefetchResource}指定预获取到的资
     * 源缓存key。
     *
     * @param { Array<string> } cacheKeyList - 用于后续查询预获取资源缓存的key。仅支持字母和数字，未传入或传入空则取默认值url作为key。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static clearPrefetchedResource(cacheKeyList: Array<string>): void;

    /**
     * 设置ArkWeb渲染子进程模式，可根据应用对内存占用与渲染进程隔离的需求选择对应的模式。
     *
     * @param { RenderProcessMode } mode - 渲染子进程模式。
     *     <br>可以先调用[getRenderProcessMode()]{@link webview.WebviewController#getRenderProcessMode}查看当前设备的ArkWeb渲染子进程模式，枚
     *     举值0为单子进程模式，枚举值1为多子进程模式。
     *     <br>手机默认为单渲染子进程模式，平板和PC/2in1默认为多渲染子进程模式。
     *     <br>如果传入RenderProcessMode枚举值之外的非法数字，则默认识别为多渲染子进程模式。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static setRenderProcessMode(mode: RenderProcessMode): void;

    /**
     * 查询ArkWeb的渲染子进程模式。
     *
     * @returns { RenderProcessMode } 渲染子进程模式类型。
     *     <br>调用getRenderProcessMode()获取当前设备的ArkWeb渲染子进程模式，枚举值0为单子进程模式，枚举值1为多子进程模式。
     *     <br>如果获取的值不在RenderProcessMode枚举值范围内，则默认为多渲染子进程模式。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static getRenderProcessMode(): RenderProcessMode;

    /**
     * 销毁渲染进程。
     * 
     * 调用该接口将会主动销毁相关联的渲染进程。如果渲染进程尚未启动，或者已销毁则没有任何影响。此外销毁渲染进程会同时影响所有与该渲染进程关联的其他实例。
     *
     * @returns { boolean } 返回销毁渲染进程的结果。
     *     <br>返回true表示渲染进程可以被销毁或已被销毁，返回false表示渲染进程不可以被销毁。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    terminateRenderProcess(): boolean;

    /**
     * 预编译JavaScript生成字节码缓存或根据提供的参数更新已有的字节码缓存。
     *
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
     *     length exceeds 2*1024*1024. [since 22]
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2048. [since 12 - 21]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static warmupServiceWorker(url: string): void;

    /**
     * 将本地离线资源注入到内存缓存中，以提升页面首次启动速度。
     * 
     * 内存缓存中的资源由内核自动管理，当注入的资源过多导致内存压力过大，内核自动释放未使用的资源，应避免注入大量资源到内存缓存中。
     * 
     * 正常情况下，资源的有效期由提供的Cache-Control或Expires响应头控制其有效期，默认的有效期为86400秒，即1天。
     * 
     * 资源的MIMEType通过提供的Content-Type响应头配置，Content-Type需符合标准，否则无法正常使用，MODULE_JS必须提供有效的MIMEType，其他类型可不提供。
     * 
     * 以此方式注入的资源，仅支持通过HTML中的标签加载。如果业务网页中的script标签使用了crossorigin属性，则必须在接口的responseHeaders参数中设置Cross-Origin响应头的值为anonymous
     * 或use-credentials。
     * 
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
     *     length exceeds 2*1024*1024. [since 22]
     * @throws { BusinessError } 17100002 - URL error. The webpage corresponding to the URL is invalid, or the URL
     *     length exceeds 2048. [since 12 - 21]
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    injectOfflineResources(resourceMaps: Array<OfflineResourceMap>): void;

    /**
     * 启用广告过滤功能。
     * 
     * > **说明：**
     * >
     * > - 广告过滤功能需要release包，使用debug包不生效。
     *
     * @param { boolean } enable - 是否启用广告过滤功能。
     *     <br>true表示启用广告过滤功能，false表示取消广告过滤功能。
     *     <br>默认值：false。
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
     * 当Web组件使能广告过滤功能后，默认所有页面都是开启广告过滤的，支持通过
     * [addAdsBlockDisallowedList]{@link webview.AdsBlockManager#addAdsBlockDisallowedList}指定域名禁用广告过滤。
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
     * 设置Web的URL白名单，只有白名单内的URL才能允许加载/跳转，否则将拦截并弹出告警页。
     *
     * @param { string } urlTrustList - URL白名单列表，使用json格式配置，最大支持10MB。<br/>白名单设置接口为覆盖方式，多次调用接口时，以最后一次设置为准。<br/>当本参数为空字符串
     *     时，表示取消白名单，放行所有URL的访问。
     *     <br/>json格式示例：
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
     * 设置Web的URL白名单，只有白名单内的URL才能允许加载/跳转，否则将拦截并弹出告警页。扩展了对Opaque Origin URL以及通配符规则的控制能力。
     *
     * @param { string } urlTrustList - URL白名单列表，使用json格式配置，最大支持10MB。<br/>白名单设置接口为覆盖方式，多次调用接口时，以最后一次设置为准。<br/>当本参数为空字符串
     *     时，表示取消白名单，放行所有URL的访问。
     *     <br/>json格式示例：
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
     * @param { boolean } allowOpaqueOrigin - true表示允许loadUrl直接加载javascript/data等
     *     [不透明源URL](https://mdn.org.cn/en-US/docs/Web/URI/Reference/Schemes)，false表示不允许加载不透明源URL。
     * @param { boolean } supportWildcard - true表示支持对host、path的通配符匹配能力，例如白名单配置了`*.example.com`，则访问`a.example.com`和
     *     `b.example.com`都是允许的。false表示不支持。
     * @throws { BusinessError } 401 Parameter error, possible causes:
     *     1. Mandatory parameters are left unspecified
     *     2. JSON string exceeds 10MB limit
     *     3. JSON parsing failed (syntax errors, etc.)
     *     4. UrlPermissionList field is missing
     *     5. URL rule validation failed:
     *     - scheme must be http or https
     *     - host cannot be empty
     *     - port must be between 0-65535
     *     - path length cannot exceed 65536 characters
     * @throws { BusinessError } 17100001 - Initialization error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 24 dynamic
     */
    setUrlTrustList(urlTrustList: string, allowOpaqueOrigin: boolean, supportWildcard: boolean): void;

    /**
     * 设置一个路径列表，当file协议访问该路径列表中的资源时，允许跨域访问本地文件，也允许跨域访问其他在线资源。此外，当设置了路径列表时，file协议仅允许访问路径列表中的资源。典型使用场景：用于需要允许Web组件跨域访问本地资源
     * 文件，同时限制访问范围以保证安全的场景。（[fileAccess]{@link WebAttribute#fileAccess}的行为将会被此接口行为覆盖）。
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
     * 当路径列表中有其中一个路径不满足以上条件之一，则会抛出异常码401，并且设置路径列表失败。当设置的路径列表为空，则file协议可访问范围以[fileAccess]{@link WebAttribute#fileAccess}的
     * 行为为准。
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
     * 设置是否启用默认错误页。
     * 
     * 在当前接口设置为true时如果页面加载发生错误将触发[onOverrideErrorPage]{@link WebAttribute#onOverrideErrorPage}回调，可在该回调接口中设置自定义的错误展示页面。
     *
     * @param { boolean } enable - 表示是否启用默认错误页。true表示启用，false表示不启用。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    setErrorPageEnabled(enable: boolean): void;

    /**
     * 设置是否启用mainframe错误页功能，并可控制是否同时启用subframe错误页功能。
     * 
     * 当enable设置为true时，mainframe加载发生错误将展示错误页：若设置了[onOverrideErrorPage]{@link WebAttribute#onOverrideErrorPage}回调，则展示用户自定
     * 义的错误页；若未设置，则展示ArkWeb提供的默认错误页。当enable和includeSubframe同时设置为true时，subframe加载发生错误也会展示错误页，onOverrideErrorPage回调对
     * subframe同样生效。
     * 
     * > **说明：**
     * >
     * > - 当enable设置为false时，无论includeSubframe取何值，mainframe和subframe的错误页功能均不启用。
     * >
     * > - 当includeSubframe设置为false时，本接口行为与
     * > [setErrorPageEnabled]{@link webview.WebviewController#setErrorPageEnabled(enable: boolean)}一致，即仅启用mainframe错误页功
     * > 能，不启用subframe错误页功能。
     * >
     * > - 可通过[errorPageEvent.request.isMainFrame()]{@link WebResourceRequest#isMainFrame}判断错误来源是mainframe还是subframe，以便在
     * > onOverrideErrorPage回调中分别设置对应的自定义错误页。
     * > 26.0.0
     *
     * @param { boolean } enable - 表示是否启用mainframe错误页功能。true表示启用，false表示不启用。启用后mainframe加载出错将展示错误页。
     * @param { boolean } includeSubframe - 表示是否同时启用subframe错误页功能。true表示启用，false表示不启用。启用后subframe加载出错也将展示错误页。仅在enable为
     *     true时有效。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    setErrorPageEnabled(enable: boolean, includeSubframe: boolean): void;

    /**
     * 查询是否启用了默认错误页功能。
     *
     * @returns { boolean } 返回是否启用默认错误页功能。
     *     <br>true：已启用；false：未启用。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    getErrorPageEnabled(): boolean;

    /**
     * 查询是否启用了subframe错误页功能。
     * 
     * 26.0.0
     *
     * @returns { boolean } 返回是否启用subframe错误页功能。
     *     <br>- true：已启用subframe错误页功能（即enable和includeSubframe均为true）；
     *     <br>- false：未启用subframe错误页功能（包括未启用错误页功能、或启用了错误页功能但未启用subframe错误页功能两种情况）。
     * @throws { BusinessError } 17100001 - Init error.
     *     The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getSubframeErrorPageEnabled(): boolean;

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
     * 
     * 需要在[initializeWebEngine()]{@link webview.WebviewController#initializeWebEngine}初始化内核之前调用。
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
     * @returns { ScrollOffset } 网页当前的滚动偏移量（包含过滚动偏移量），包含x和y坐标，单位为vp。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 13 dynamic
     */
    getScrollOffset(): ScrollOffset;

    /**
     * 将页面滚动指定的偏移量，返回值表示此次滚动是否执行成功。
     *
     * @param { number } deltaX - 水平偏移量，其中水平向右为正方向。 
     *     <br>单位：vp。
     * @param { number } deltaY - 垂直偏移量，其中垂直向下为正方向。 
     *     <br>单位：vp。
     * @returns { boolean } true表示当前网页可以滑动，false表示当前网页不可以滑动。
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
     * 查询当前WebViewController是否绑定一个Web组件。
     *
     * @returns { ControllerAttachState } WebViewController与Web组件的绑定状态。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    getAttachState(): ControllerAttachState;

    /**
     * 注册WebViewController绑定状态事件，通过Callback方式获取WebViewController绑定状态的变化通知。
     *
     * @param { 'controllerAttachStateChange' } type - 表示注册WebViewController绑定状态事件，固定为"controllerAttachStateChange"。
     * @param { Callback<ControllerAttachState> } callback - WebViewController绑定状态改变时的回调函数。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    on(type: 'controllerAttachStateChange', callback: Callback<ControllerAttachState>): void;

    /**
     * 取消WebViewController绑定状态事件的注册，取消后将不再接收Callback通知。
     *
     * @param { 'controllerAttachStateChange' } type - 表示注册WebViewController绑定状态事件，固定为"controllerAttachStateChange"。
     * @param { Callback<ControllerAttachState> } callback - WebViewController绑定状态发生改变时的回调函数，默认情况下不填写回调函数。如果填写了Callback，
     *     将仅取消注册该特定的回调。如果不填写Callback，将取消注册所有回调。
     *     <br>传入null或undefined时会抛出异常错误码401。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    off(type: 'controllerAttachStateChange', callback?: Callback<ControllerAttachState>): void;

    /**
     * 异步等待WebViewController与Web组件绑定完成，绑定完成或超时触发回调，通过Promise方式返回当前
     * [ControllerAttachState]{@link webview.ControllerAttachState}状态。
     *
     * @param { number } timeout - 异步等待时长。<br/>取值范围: [0, 65535]<br/>单位: ms
     * @returns { Promise<ControllerAttachState> } Promise实例，返回当前
     *     [ControllerAttachState]{@link webview.ControllerAttachState}状态。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    waitForAttached(timeout: number): Promise<ControllerAttachState>;

    /**
     * 获取网页当前的滚动偏移量（不包含过滚动偏移量）。
     *
     * @returns { ScrollOffset } 网页当前的滚动偏移量（不包含过滚动偏移量），包含x和y坐标，单位为vp。
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
     * > - 该接口高度设置为0时，Web网页内容可恢复，键盘弹起避让模式将使用[keyboardAvoidMode()]{@link WebAttribute#keyboardAvoidMode}声明的模式。
     *
     * @param { number } avoidHeight - 设置Web网页可视视口底部避让高度。
     *     <br>单位：vp
     *     <br>合法取值范围：0~Web组件高度
     *     <br>非法值设置行为：小于0取值为0，大于Web组件高度取值为Web组件高度。
     * @throws { BusinessError } 17100001 - Init error. The WebviewController must be associated with a Web component.
     * @throws { BusinessError } 801 - This functionality is not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    avoidVisibleViewportBottom(avoidHeight: number): void;

    /**
     * 获取页面首屏加载预测信息（详细说明见[BlanklessInfo]{@link webview.WebviewController#BlanklessInfo}），并开始本次加载过渡帧生成，应用根据此信息确定是否需要启用无白屏加载。
     * 必须与[setBlanklessLoadingWithKey]{@link webview.WebviewController#setBlanklessLoadingWithKey}接口配套使用，并且必须在触发加载页面的接口之前或在`onLoadIntercept`中调用。
     * 需在`WebViewController`与Web组件绑定后才能使用。
     * 
     * > **说明：** 
     * >
     * > - 持久缓存容量：默认大小为30MB（约30页），可以通过接口[setBlanklessLoadingCacheCapacity]{@link webview.WebviewController#setBlanklessLoadingCacheCapacity}设置缓存容量，具体见该接口说明。
     * > 超过容量时根据LRU（Least Recently Used，淘汰不常用缓存的策略）机制更新缓存。自动清理超过7天的持久缓存数据，缓存清除后第三次加载页面开始有优化效果。
     * >
     * > - 如果发现快照相似度（即[BlanklessInfo]{@link webview.WebviewController#BlanklessInfo}极低，请确认key值是否传递正确。
     * >
     * > - 调用本接口后，将启用页面加载快照检测及生成过渡帧计算，会产生一定的资源开销。
     * >
     * > - 启用无白屏加载的页面会带来一定的资源开销，开销的大小与Web组件的分辨率相关。假设分辨率的宽度和高度分别为：w, h。页面在打开阶段会增加峰值内存，增加约12 * w * h B，页面打开后内存回收，不影响稳态内存。
     * > 增加固态应用缓存的大小，每个页面增加的缓存约w * h / 10 B，缓存位于应用缓存的位置。
     * >
     * > - 请在module.json5中添加权限: ohos.permission.INTERNET和ohos.permission.GET_NETWORK_INFO，
     * > 具体权限的添加方法请参考[在配置文件中声明权限](docroot://security/AccessToken/declare-permissions.md#在配置文件中声明权限)。
     *
     * @param { string } key - 唯一标识本页面的key值。
     *     <br>合法取值范围：非空，长度不超过2048个字符。
     *     <br>设置非法值时不生效。
     * @returns { BlanklessInfo } 页面首屏加载预测信息对象，应用需根据此信息来决策是否启用无白屏加载插帧。
     * @throws { BusinessError } 801 This functionality is not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    getBlanklessInfoWithKey(key: string) : BlanklessInfo;

    /**
     * 设置无白屏加载是否启用，本接口必须与[getBlanklessInfoWithKey]{@link webview.WebviewController#getBlanklessInfoWithKey}接口配套使用。
     * 
     * > **说明：** 
     * >
     * > - 需在触发页面加载的接口之后调用，其他约束同[getBlanklessInfoWithKey]{@link webview.WebviewController#getBlanklessInfoWithKey}。
     * >
     * > - 页面加载必须在调用本接口的组件中进行。
     * >
     * > - 当相似度较低时，系统将判定为跳变过大，启用插帧会失败。
     * >
     * > - 请在module.json5中添加权限: ohos.permission.INTERNET和ohos.permission.GET_NETWORK_INFO，
     * > 具体权限的添加方法请参考[在配置文件中声明权限](docroot://security/AccessToken/declare-permissions.md#在配置文件中声明权限)。
     *
     * @param { string } key - 唯一标识本页面的key值。必须与getBlanklessInfoWithKey接口的key值相同。
     *     <br>合法取值范围：非空，长度不超过2048个字符。
     *     <br>非法值设置行为：返回错误码WebBlanklessErrorCode，方案不生效。
     * @param { boolean } is_start - 是否启用开始插帧。true：启用，false：不启用。
     *     <br>传入undefined或null时为false。
     * @returns { WebBlanklessErrorCode } 返回接口调用是否成功，具体见
     *     [WebBlanklessErrorCode]{@link @ohos.web.webview:webview.WebBlanklessErrorCode}。
     * @throws { BusinessError } 801 This functionality is not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    setBlanklessLoadingWithKey(key: string, is_start: boolean) : WebBlanklessErrorCode;

    /**
     * 清除指定key值页面无白屏优化缓存，本接口只清除缓存。
     * 
     * 在小程序或Web应用场景中，当页面加载时内容变化显著，可能会出现一次明显的跳变。若对此跳变有所顾虑，可使用该接口清除页面缓存。
     * 
     * > **说明：**
     * >
     * > - 清除之后的页面，需在第三次加载页面时才会产生优化效果。
     *
     * @param { Array<string> } [keys] - 清除Blankless优化方案页面的key值列表，
     *     key值为[getBlanklessInfoWithKey]{@link webview.WebviewController#getBlanklessInfoWithKey}中指定过的。
     *     <br>默认值：所有Blankless优化方案缓存的页面key列表。
     *     <br>合法取值范围：长度不超过2048，key列表长度<=100。key和加载页面时输入给ArkWeb的相同。
     *     <br>非法值设置行为：传入undefined/null会抛出异常错误码401；key长度超过2048时该key不生效；长度超过100时，取前100个；当为空时，使用默认值。
     * @throws { BusinessError } 801 This functionality is not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static clearBlanklessLoadingCache(keys?: Array<string>) : void;

    /**
     * 设置无白屏加载方案的持久化缓存容量，返回实际生效值。当接口没有显式调用时，默认缓存容量为30MB。当实际缓存超过容量时，将采用淘汰不常用的过渡帧的方式清理。
     *
     * @param { number } capacity - 设置持久化缓存设置，单位MB，最大设置不超过100MB。
     *     <br>合法取值范围：[0, 100]，当设置为0时，无缓存空间，则功能全局不开启。
     *     <br>非法值设置行为：小于0时生效值为0，大于100时生效值为100。
     * @returns { number } 返回实际生效的容量值，范围0~100。
     *     <br>小于0时生效值为0，大于100时生效值为100。
     * @throws { BusinessError } 801 This functionality is not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static setBlanklessLoadingCacheCapacity(capacity: number) : number;

    /**
     * 设置白屏插帧的配置参数，本接口必须与[getBlanklessInfoWithKey]{@link webview.WebviewController#getBlanklessInfoWithKey}接口配套使用。相比于
     * [setBlanklessLoadingWithKey]{@link webview.WebviewController#setBlanklessLoadingWithKey}，本接口支持白屏插帧更多的参数设置，包括插帧持续时
     * 间，缓存数据有效时间，插帧完成后的自定义回调。
     * 
     * > **说明：**
     * >
     * > - 需在触发页面加载的接口之后调用，其他约束同[getBlanklessInfoWithKey]{@link webview.WebviewController#getBlanklessInfoWithKey}。
     * >
     * > - 页面加载必须在调用本接口的组件中进行。
     * >
     * > - 当相似度较低时，系统将判定为跳变过大，启用插帧会失败。
     * >
     * > - 请在module.json5中添加权限: ohos.permission.INTERNET和ohos.permission.GET_NETWORK_INFO，具体权限的添加方法请参考
     * > [在配置文件中声明权限](docroot://security/AccessToken/declare-permissions.md#在配置文件中声明权限)。
     *
     * @param { string } key - 唯一标识本页面的key值。必须与getBlanklessInfoWithKey接口的key值相同。
     *     <br>合法取值范围：非空，长度不超过2048个字符。
     *     <br>非法值设置行为：返回错误码WebBlanklessErrorCode，方案不生效。
     * @param { BlanklessLoadingParam } param - 白屏插帧加载的各项参数设置。
     * @returns { WebBlanklessErrorCode } 返回接口调用结果。
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 23 dynamic
     */
    setBlanklessLoadingWithParams(key: string,
      param: BlanklessLoadingParam) : WebBlanklessErrorCode;

    /**
     * 设置Web组件的销毁模式。当Web组件销毁时，销毁模式会影响Web内核资源释放的时机，例如JavaScript运行上下文、渲染上下文等。默认值：
     * [WebDestroyMode.NORMAL_MODE]{@link webview.WebDestroyMode}（普通模式），由系统决定销毁时机。应用可设置
     * [WebDestroyMode.FAST_MODE]{@link webview.WebDestroyMode}（快速模式），以立即销毁资源，从而提升特定场景的性能。
     * 
     * > **说明：**
     * >
     * > [WebDestroyMode.FAST_MODE]{@link webview.WebDestroyMode}（快速模式）会改变Web组件销毁时机，应用需关注依赖Web组件销毁时机的错误实现，例如：Web组件销毁后仍调用
     * > WebviewController的未定义行为，与[WebDestroyMode.NORMAL_MODE]{@link webview.WebDestroyMode}（普通模式）相比，销毁时机提前，有更高的几率触发未关联绑
     * > 定的异常（17100001），建议应用捕捉异常，或者通过[getAttachState]{@link webview.WebviewController#getAttachState}方法查询是否绑定状态，来避免稳定性问
     * > 题。
     *
     * @param { WebDestroyMode } mode - 设置Web组件的销毁模式。
     *     <br>默认值：WebDestroyMode.NORMAL_MODE
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    static setWebDestroyMode(mode: WebDestroyMode): void;

    /**
     * 设置站点隔离模式。站点隔离机制将不同源的网站隔离在不同的渲染进程中，减少跨域攻击面。例如：PC等设备上，在未启用站点隔离模式时，原有进程模型是每一个Tab对应一个渲染进程，开启站点隔离后，一个Tab下不同源的Iframe可在独
     * 立的渲染进程中运行。
     * 
     * 对于仅加载可信网页的第三方应用，可以关闭此功能，以提升性能并减少内存占用，同时减少跨域访问的拦截。默认值根据不同的设备而定，PC/Table采用严格站点隔离
     * [SiteIsolationMode.STRICT]{@link webview.SiteIsolationMode}，Phone默认部分站点隔离
     * [SiteIsolationMode.PARTIAL]{@link webview.SiteIsolationMode}。[坚盾守护模式](docroot://web/web-secure-shield-mode.md)下采用
     * 严格站点隔离。
     * 
     * > **说明：**
     * >
     * > 不能在单子进程模式下设置严格站点隔离。
     * >
     * > 接口只能在初始化时调用一次，不支持反复修改。
     *
     * @param { SiteIsolationMode } mode - 设置站点隔离模式。
     *     <br>默认值取决于设备类型和设备模式：PC/Tablet默认严格站点隔离，Phone默认部分站点隔离；坚盾守护模式默认严格站点隔离。
     * @throws { BusinessError } 17100001 - Init error. Possible causes:
     *     1. Site Isolation mode is already set by the developer.
     *     2. Site Isolation mode cannot be strict in single-render-process mode.
     *     3. Site Isolation mode cannot be changed while Secure Shield mode is active.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    static setSiteIsolationMode(mode: SiteIsolationMode): void;

    /**
     * 查询当前生效的站点隔离模式。
     *
     * @returns { SiteIsolationMode } 站点隔离模式类型。
     *     <br>getSiteIsolationMode()查询当前生效的站点隔离模式。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    static getSiteIsolationMode(): SiteIsolationMode;

    /**
     * 设置软键盘自动控制模式，当接口没有显式调用时，Web组件失去焦点或获得焦点、状态切换为inactive或active时，系统均会尝试触发软键盘自动隐藏或拉起。典型使用场景：不希望Web组件在inactive或active状态切
     * 换时自动隐藏或重新拉起软键盘时，可使用DISABLE_AUTO_KEYBOARD_ON_ACTIVE；需要保留默认自动管理行为时，可使用DEFAULT。
     *
     * @param { WebSoftKeyboardBehaviorMode } mode - Web软键盘自动控制模式。
     * @throws { BusinessError } 17100001 - Init error. The WebviewController must be associated with a Web component.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 dynamic
     */
    setSoftKeyboardBehaviorMode(mode: WebSoftKeyboardBehaviorMode): void;

    /**
     * 在Web页面场景，设置全局滚动条模式。不显式调用时，默认为[ScrollbarMode.OVERLAY_LAYOUT_SCROLLBAR]{@link webview.ScrollbarMode}（非常驻滚动条）。
     * 
     * > **说明：**
     * >
     * > - 根据滚动条模式，改变当前应用所有web滚动条模式为常驻滚动条或非常驻滚动条。
     * >
     * > - 若[forceDisplayScrollBar]{@link WebAttribute#forceDisplayScrollBar}接口与当前接口同时设置，forceDisplayScrollBar接口设置不生效。
     * >
     * > - 该接口需要在WebViewController绑定Web组件之前调用。
     *
     * @param { ScrollbarMode } scrollbarMode - 滚动条模式。
     * @syscap SystemCapability.Web.Webview.Core
     * @since 23 dynamic
     */
    static setScrollbarMode(scrollbarMode: ScrollbarMode): void;

    /**
     * 通过配置安全特性选项禁用特定的Web引擎能力，以降低攻击面。典型使用场景包括：高安全要求的应用（如金融、政务类应用）应启用高级安全模式以禁用不必要的Web引擎能力。
     * 
     * > **说明：**
     * >
     * > - 该接口为全局静态API，在整个APP生命周期中调用一次即可，不需要重复调用。
     * >
     * > - 必须在[initializeWebEngine()]{@link webview.WebviewController#initializeWebEngine}之前调用，否则设置无效。
     * > 26.0.0
     *
     * @param { SecurityParams } securityParams - 安全特性选项配置。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    static enableAdvancedSecurityMode(securityParams: SecurityParams): void;

    /**
     * 异步执行`AIPageCommand`。该接口通过JSON字符串形式的`command`参数指定命令类型和命令参数，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - 不同命令的返回格式不同，详细说明请参见[AIPageCommand](docroot://reference/apis-arkweb/arkts-apis-webview-AIPageCommand.md)和
     * > [AIPageInteraction](docroot://reference/apis-arkweb/arkts-apis-webview-AIPageInteraction.md)。
     * >
     * > - 当命令无法分发或无结果返回时，Promise可能返回空字符串。
     * >
     * > - 返回值非空时为JSON字符串，应用可通过`JSON.parse`解析后使用。
     * > 26.0.0
     *
     * @param { string } command - JSON格式的命令参数。不同命令的参数格式不同，查询类命令请参见
     *     [AIPageCommand](docroot://reference/apis-arkweb/arkts-apis-webview-AIPageCommand.md)，交互类命令请参见
     *     [AIPageInteraction](docroot://reference/apis-arkweb/arkts-apis-webview-AIPageInteraction.md)。
     * @returns { Promise<string> } Promise对象，返回JSON格式的命令执行结果。不同命令的返回格式不同。命令无法分发或无返回值时，返回空字符串。
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
   * Web软键盘自动控制模式。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 22 dynamic
   */
  enum WebSoftKeyboardBehaviorMode {
    /**
     * 当Web组件失去焦点或获得焦点、状态切换为inactive或active时，系统均会尝试触发软键盘自动隐藏或拉起（默认值）。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 dynamic
     */
    DEFAULT = 0,

    /**
     * Web组件在inactive或active状态切换时，系统不再尝试触发软键盘自动隐藏或拉起。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 22 dynamic
     */
    DISABLE_AUTO_KEYBOARD_ON_ACTIVE = 1
  }

  /**
   * 下载任务的状态。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 11 dynamic
   */
  enum WebDownloadState {
    /**
     * 下载任务正在进行中。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    IN_PROGRESS = 0,

    /**
     * 下载任务已经完成。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    COMPLETED = 1,

    /**
     * 下载任务已经被取消。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    CANCELED = 2,

    /**
     * 下载任务被中断。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    INTERRUPTED = 3,

    /**
     * 下载任务等待开始。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    PENDING = 4,

    /**
     * 下载任务已经被暂停。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    PAUSED = 5,

    /**
     * 下载任务未知状态。
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
   * WebDownloadItem是ArkWeb框架中用于表示和管理单个下载任务的类。通过[WebDownloadDelegate]{@link webview.WebDownloadDelegate}的回调参数，应用可以获取到
   * WebDownloadItem实例，进而对下载任务进行查询和控制，包括启动下载到指定路径、查询下载进度和状态、暂停/恢复/取消任务、序列化失败任务以便后续恢复等。
   * 
   * > **说明：**
   * >
   * > - 在下载过程中，下载的进度会通过WebDownloadDelegate通知给使用者，使用者可以通过参数WebDownloadItem来操作下载任务。
   * >
   * > - 当前WebDownloadItem支持的下载文件路径（包含文件名）最长长度为255字节<!--RP1--><!--RP1End-->。
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
     * @returns { string } 下载任务的唯一ID。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getGuid(): string;

    /**
     * 获取下载的速度，单位：字节每秒。
     *
     * @returns { number } 下载的速度，单位：字节每秒。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getCurrentSpeed(): number;

    /**
     * 获取下载的进度，100代表下载完成。
     *
     * @returns { number } 下载完成的进度，100代表下载完成，-1代表进度未知。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getPercentComplete(): number;

    /**
     * 获取待下载文件的总长度。
     *
     * @returns { number } 待下载文件的总长度，-1代表总大小未知。单位：字节。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getTotalBytes(): number;

    /**
     * 获取下载的状态。
     *
     * @returns { WebDownloadState } 下载的状态。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getState(): WebDownloadState;

    /**
     * 获取下载的错误码。
     *
     * @returns { WebDownloadErrorCode } 下载失败时的错误码。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getLastErrorCode(): WebDownloadErrorCode;

    /**
     * 获取下载任务的请求方式。
     *
     * @returns { string } 下载的请求方式。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getMethod(): string;

    /**
     * 获取下载的媒体类型（例如，一个声音文件可能被标记为 audio/ogg ，一个图像文件可能是 image/png）。
     *
     * @returns { string } 下载的媒体类型（例如，一个声音文件可能被标记为 audio/ogg ，一个图像文件可能是 image/png）。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getMimeType(): string;

    /**
     * 获取下载的请求地址。
     *
     * @returns { string } 下载的请求地址。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getUrl(): string;

    /**
     * 获取下载的建议文件名。
     *
     * @returns { string } 下载的建议文件名。
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
     * 取消下载任务。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    cancel(): void;

    /**
     * 暂停下载任务。
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
     * @returns { number } 已经接收的字节数。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getReceivedBytes(): number;

    /**
     * 获取下载文件在磁盘上的全路径。
     *
     * @returns { string } 下载文件在磁盘上的全路径。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    getFullPath(): string;

    /**
     * 获取下载文件的原始URL地址。
     *
     * @returns { string } 下载文件的原始URL地址。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getOriginalUrl(): string;

    /**
     * 获取下载文件的referrer地址。
     *
     * @returns { string } 下载文件的referrer地址。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 24 dynamic
     */
    getReferrerUrl(): string;

    /**
     * 将失败的下载序列化到一个字节数组。
     *
     * @returns { Uint8Array } 失败的下载序列化后的字节数组。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    serialize(): Uint8Array;

    /**
     * 将序列化后的字节数组反序列化为一个WebDownloadItem对象。
     *
     * @param { Uint8Array } serializedData - 序列化后的字节数组。
     * @returns { WebDownloadItem } 从字节数组反序列化为一个WebDownloadItem对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     *     <br>2. Parameter verification failed.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static deserialize(serializedData: Uint8Array): WebDownloadItem;
  }

  /**
   * WebDownloadDelegate是ArkWeb框架中用于监听和处理Web组件下载任务事件的委托类。当Web组件中的网页触发文件下载时（如用户点击下载链接或通过startDownload方法），下载任务的状态变化会通过该类的回
   * 调接口通知给应用。开发者通过setDownloadDelegate将WebDownloadDelegate实例注册到Web组件，从而接管下载流程的完整生命周期管理。
   * 
   * WebDownloadDelegate定义了四个下载生命周期回调：
   * [onBeforeDownload]{@link webview.WebDownloadDelegate#onBeforeDownload(callback: Callback<WebDownloadItem>)}在下载开始前触
   * 发，应用需要在此回调中调用[WebDownloadItem.start]{@link webview.WebDownloadItem#start}并指定下载路径，否则下载将一直处于PENDING状态；
   * [onDownloadUpdated]{@link webview.WebDownloadDelegate#onDownloadUpdated(callback: Callback<WebDownloadItem>)}在下载过程中
   * 触发，可获取下载进度（百分比）、已接收字节数等更新信息；
   * [onDownloadFinish]{@link webview.WebDownloadDelegate#onDownloadFinish(callback: Callback<WebDownloadItem>)}在下载完成时触
   * 发；[onDownloadFailed]{@link webview.WebDownloadDelegate#onDownloadFailed(callback: Callback<WebDownloadItem>)}在下载失败时
   * 触发，可通过[WebDownloadItem.serialize]{@link webview.WebDownloadItem#serialize}保存失败任务以便后续恢复。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 11 dynamic
   */
  class WebDownloadDelegate {
    /**
     * 下载开始前通知给应用，应用需要在此接口中调用WebDownloadItem.start("xxx")并提供下载路径，否则下载会一直处于PENDING状态。
     * 
     * > **说明：**
     * >
     * > 处于PENDING状态的下载任务会首先将文件保存至临时目录。在调用[WebDownloadItem.start]{@link webview.WebDownloadItem#start}并指定目标路径后，临时文件将被重命名
     * > 为目标文件名，未完成下载的部分将直接下载到目标路径。若希望避免在调用WebDownloadItem.start前生成临时文件，可先通过
     * > [WebDownloadItem.cancel]{@link webview.WebDownloadItem#cancel}来取消当前的下载任务，之后再使用
     * > [WebDownloadManager.resumeDownload]{@link webview.WebDownloadManager#resumeDownload}来恢复被取消的下载任务。
     *
     * @param { Callback<WebDownloadItem> } callback - 下载开始前的回调。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    onBeforeDownload(callback: Callback<WebDownloadItem>): void;

    /**
     * 下载过程中的回调，应用可通过此回调获取下载进度（百分比）、已接收字节数等信息，以便监控或更新下载状态。
     *
     * @param { Callback<WebDownloadItem> } callback - 下载更新的回调。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    onDownloadUpdated(callback: Callback<WebDownloadItem>): void;

    /**
     * 下载完成的通知。应用可通过此回调获取下载完成的下载任务信息，以便进行后续处理（如更新UI、通知用户等）。
     *
     * @param { Callback<WebDownloadItem> } callback - 下载完成的回调。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    onDownloadFinish(callback: Callback<WebDownloadItem>): void;

    /**
     * 下载失败的通知。应用可通过此回调获取下载失败的详细信息，以便进行错误处理、重试或记录日志。
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
   * WebDownloadManager是ArkWeb框架下Web组件下载任务的静态管理类，负责管理所有通过Web组件触发的文件下载流程。开发者可以通过该类设置下载委托以接收下载进度回调，以及恢复失败的下载任务。该类的所有方法均为静态
   * 方法，在整个应用范围内全局生效。
   * 
   * WebDownloadManager与[WebDownloadDelegate]{@link webview.WebDownloadDelegate}、
   * [WebDownloadItem]{@link webview.WebDownloadItem}配合使用：WebDownloadManager负责下载任务的生命周期管理和委托设置，WebDownloadDelegate负责向应用层
   * 报告下载进度和状态变更事件，WebDownloadItem代表单个下载任务实体，支持暂停、恢复、取消等操作。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 18]
   * @atomicservice
   * @since 11 dynamic
   */
  class WebDownloadManager {
    /**
     * 设置接收从WebDownloadManager触发的下载进度的委托。
     * 
     * > **说明：**
     * >
     * > - 在调用本接口前，若尚未创建Web组件且未执行[initializeWebEngine]{@link webview.WebviewController#initializeWebEngine}方法，必须先调用该方法完成
     * > Web内核初始化，否则接口调用无效。
     *
     * @param { WebDownloadDelegate } delegate - 用来接收下载进度的委托。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 18]
     * @atomicservice
     * @since 11 dynamic
     */
    static setDownloadDelegate(delegate: WebDownloadDelegate): void;

    /**
     * 恢复一个失败的下载任务，需通过[WebDownloadItem.deserialize]{@link webview.WebDownloadItem#deserialize}方法获取反序列化后的对象，仅适用于之前失败的下载任
     * 务。
     * 
     * > **说明：**
     * >
     * > - 在调用本接口前，若尚未创建Web组件且未执行initializeWebEngine方法完成Web内核初始化，必须先调用initializeWebEngine方法进行初始化，否则接口调用无效。
     * >
     * > - 必须先调用[setDownloadDelegate]{@link webview.WebDownloadManager#setDownloadDelegate}设置下载委托，否则会抛出错误码17100018。
     *
     * @param { WebDownloadItem } webDownloadItem - 从序列化数据恢复的下载任务。
     * @throws { BusinessError } 17100018 - No WebDownloadDelegate has been set yet.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static resumeDownload(webDownloadItem: WebDownloadItem): void;
  }

  /**
   * WebHttpBodyStream是HTTP请求体数据流对象，用于在自定义scheme拦截场景中读取POST、PUT等请求的请求体数据。该对象通过WebSchemeHandlerRequest的getHttpBodyStream方
   * 法获取，支持BYTES、FILE、BLOB、CHUNKED类型的数据。开发者可以通过该接口在自定义协议拦截器中读取上行数据，实现对请求体的检视或转发。注意本类中的其他接口需要在
   * [initialize]{@link webview.WebHttpBodyStream#initialize}成功后才能调用。
   * 
   * WebHttpBodyStream与[WebSchemeHandlerRequest]{@link webview.WebSchemeHandlerRequest}配合使用：WebSchemeHandlerRequest代表被拦截
   * 的请求，WebHttpBodyStream代表该请求的HTTP body数据流。通过读取流中的数据，开发者可以获取完整的请求体内容。
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
     * @returns { number } 获取WebHttpBodyStream数据大小。单位：字节。
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
   * 资源请求的资源类型。
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
     * <a ping>/sendBeacon的Ping请求。
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
   * WebSchemeHandlerRequest类模块定义了通过WebSchemeHandler拦截到的资源请求的封装对象。当开发者注册自定义协议处理器（WebSchemeHandler）后，Web内核在拦截到匹配协议的请求时会创建
   * WebSchemeHandlerRequest实例并传递给回调方法。该对象提供以下请求信息查询方法：获取请求头信息、请求URL、请求方法、来源URL、判断是否为主框架请求、是否关联用户手势、获取请求体流、资源类型以及触发该请求的
   * Frame URL，从而据此决定是否拦截该请求并构造相应响应。
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
     * 判断资源请求是否为主Frame。
     *
     * @returns { boolean } 判断资源请求是否为主Frame，如果资源请求是主Frame则返回true，否则返回false。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    isMainFrame(): boolean;
    /**
     * 获取资源请求是否与手势（如点击）相关联。
     *
     * @returns { boolean } 返回资源请求是否与手势（如点击）相关联，如果资源请求与手势相关联则返回true，否则返回false。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    hasGesture(): boolean;
    /**
     * 获取资源请求中的WebHttpBodyStream。
     *
     * @returns { WebHttpBodyStream | null } 返回资源请求中的WebHttpBodyStream，如果没有则返回null。
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
   * WebSchemeHandlerResponse是自定义scheme拦截场景中用于构造HTTP响应数据的类。开发者通过该类创建Response对象，设置HTTP状态码、状态文本、媒体类型、字符集、自定义响应头、网络错误码以及重定向
   * URL等属性，然后通过WebResourceHandler将自定义响应返回给Web组件。该类是自定义资源拦截的核心数据载体。
   * 
   * WebSchemeHandlerResponse与WebResourceHandler配合使用：开发者构造WebSchemeHandlerResponse对象并填充响应属性，然后通过WebResourceHandler的
   * didReceiveResponse方法将响应头发送给被拦截的请求。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  class WebSchemeHandlerResponse {
    /**
     * Response的构造函数。
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
     * @param { string } url - 重定向或因HSTS而更改后的URL。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    setUrl(url: string): void;
    /**
     * 获取重定向或因HSTS而更改后的URL。
     * 
     * 风险提示：若想获取URL来做JavascriptProxy通信接口认证，请使用
     * [getLastJavascriptProxyCallingFrameUrl<sup>12+</sup>]{@link webview.WebviewController#getLastJavascriptProxyCallingFrameUrl}
     * 。
     *
     * @returns { string } 获取经过重定向或因HSTS而更改后的URL。
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
     * @returns { WebNetErrorList } 返回Response的网络错误码。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    getNetErrorCode(): WebNetErrorList;
    /**
     * 给当前的Response设置HTTP状态码。
     *
     * @param { number } code - HTTP状态码。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    setStatus(code: number): void;
    /**
     * 获取Response的HTTP状态码。
     *
     * @returns { number } 返回Response的HTTP状态码。
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
     * 给当前的Response设置媒体类型。例如，注入HTML内容时设置为text/html，注入JSON数据时设置为application/json。
     *
     * @param { string } type - 媒体类型（MIME类型）。
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
     * @returns { string } 返回响应内容的MIME类型字符串，如'text/html'、'application/json'等。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    getMimeType(): string;
    /**
     * 给当前的Response设置字符编码格式。
     *
     * @param { string } encoding - 字符编码格式。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    setEncoding(encoding: string): void;
    /**
     * 获取Response的字符编码格式。
     *
     * @returns { string } 返回响应内容的字符编码格式，如'utf-8'、'gbk'等。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    getEncoding(): string;
    /**
     * 给当前的Response设置头信息。
     *
     * @param { string } name - 头部（header）的名称，指定要设置的HTTP响应头字段名。常见值包括'Content-Type'（内容类型）、'Authorization'（授权信息）、'Cache-
     *     Control'（缓存控制）等。
     * @param { string } value - 头部（header）的值，指定HTTP响应头字段的具体内容。需要与name参数对应的头部字段匹配，如name为'Content-Type'时，value可以是'text/
     *     html; charset=utf-8'。
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
     * @param { string } name - 要获取的响应头字段名称。
     * @returns { string } 指定名称的响应头字段对应的值。
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    getHeaderByName(name: string): string;
    /**
     * 给当前的Response设置自定义错误码。详情参考[WebResourceError.getCustomErrorCode]{@link WebResourceError#getCustomErrorCode}。
     *
     * @param { number } customErrorCode - 该响应的自定义错误码。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.1.0 dynamic
     */
    setCustomErrorCode(customErrorCode: number): void;
    /**
     * 获取当前Response的自定义错误码。
     *
     * @returns { number } 当前Response的自定义错误码。
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.1.0 dynamic
     */
    getCustomErrorCode(): number;
  }

  /**
   * WebResourceHandler是自定义scheme拦截场景中用于向Web组件返回拦截请求结果的处理器。当WebSchemeHandler决定拦截一个请求后，开发者通过WebResourceHandler向Web组件提供自定义
   * 的响应头（didReceiveResponse）、响应体数据（didReceiveResponseBody），并通知请求完成（didFinish）或失败（didFail）。其中didFail支持重载方法（API version 2
   * 0+）以简化错误处理流程。该接口实现了应用层对网络请求的完全自定义响应。
   * 
   * WebResourceHandler与[WebSchemeHandler]{@link webview.WebSchemeHandler}、
   * [WebSchemeHandlerResponse]{@link webview.WebSchemeHandlerResponse}配合使用：WebSchemeHandler的onRequestStart回调中接收
   * WebResourceHandler实例，开发者构造WebSchemeHandlerResponse对象，通过WebResourceHandler的didReceiveResponse和didReceiveResponseBody
   * 传入响应头和响应体数据，最后调用didFinish或didFail结束请求。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  class WebResourceHandler {
    /**
     * 将构造的响应头传递给被拦截的请求。需在调用didFinish或didFail之前调用。
     *
     * @param { WebSchemeHandlerResponse } response - 该拦截请求的响应，用于向Web组件传递自定义的响应头信息，包括状态码、响应头字段等。开发者需先构造此对象，然后通过
     *     didReceiveResponse方法传递给被拦截的请求。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    didReceiveResponse(response: WebSchemeHandlerResponse): void;
    /**
     * 将构造的响应体传递给被拦截的请求。需在调用didFinish或didFail之前调用。
     *
     * @param { ArrayBuffer } data - ArrayBuffer类型的二进制数据，用于传递HTTP响应体内容。开发者需根据响应内容类型（如文本、图片、JSON等）构造相应格式的二进制数据。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    didReceiveResponseBody(data: ArrayBuffer): void;
    /**
     * 通知Web组件被拦截的请求已经完成，并且没有更多的数据可用，调用前需调用[didReceiveResponse]{@link webview.WebResourceHandler#didReceiveResponse}传入响应
     * 头。
     *
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    didFinish(): void;
    /**
     * 通知ArkWeb内核被拦截请求将返回失败，并结束该网络请求，调用前需调用[didReceiveResponse]{@link webview.WebResourceHandler#didReceiveResponse}传入响应
     * 头。
     *
     * @param { WebNetErrorList } code - 网络错误码，用于标识请求失败的原因。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @atomicservice
     * @since 12 dynamic
     */
    didFail(code: WebNetErrorList): void;
    /**
     * 通知ArkWeb内核，被拦截请求将返回失败。若completeIfNoResponse为false，调用前需调用
     * [didReceiveResponse]{@link webview.WebResourceHandler#didReceiveResponse}传入响应头。若completeIfNoResponse为true，且调用前未调用
     * [didReceiveResponse]{@link webview.WebResourceHandler#didReceiveResponse}，则自动生成一个响应头，网络错误码为-104，详情参见
     * [WebNetErrorList]{@link @ohos.web.netErrorList:WebNetErrorList}。
     *
     * @param { WebNetErrorList } code - 网络错误码，用于标识请求失败的原因。
     * @param { boolean } completeIfNoResponse - 是否在未调用
     *     [didReceiveResponse]{@link webview.WebResourceHandler#didReceiveResponse}时自动完成此次网络请求；值为true时自动生成响应头（网络错误码为-10
     *     4）并完成请求，值为false时等待应用调用[didReceiveResponse]{@link webview.WebResourceHandler#didReceiveResponse}。
     * @throws { BusinessError } 17100101 - The errorCode is either ARKWEB_NET_OK or outside the range of error codes
     *     in WebNetErrorList.
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform [since 23]
     * @since 20 dynamic
     */
    didFail(code: WebNetErrorList, completeIfNoResponse: boolean): void;

    /**
     * 通知ArkWeb内核，被拦截请求应返回失败，并携带自定义错误码。
     *
     * @param { WebNetErrorList } code - 网络错误码。
     * @param { boolean } completeIfNoResponse - 值为true时，若之前未调用过[didReceiveResponse]{@link didReceiveResponse}，
     *     则会自动生成一个response以完成此次网络请求，网络错误码为-104；值为false时，若之前未调用过[didReceiveResponse]{@link didReceiveResponse}，
     *     将等待应用调用[didReceiveResponse]{@link didReceiveResponse}并传入response，不会直接完成此次网络请求。
     * @param { number } customErrorCode - 该请求的自定义错误码，会通过[onErrorReceive]{@link WebAttribute#onErrorReceive}事件直接传递给应用。
     *     详情参考[WebResourceError.getCustomErrorCode]{@link WebResourceError#getCustomErrorCode}。
     * @throws { BusinessError } 17100021 - The resource handler is invalid.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 26.1.0 dynamic
     */
    didFail(code: WebNetErrorList, completeIfNoResponse: boolean, customErrorCode: number): void;
  }

  /**
   * WebSchemeHandler是用于拦截指定scheme（协议）的网络请求的拦截器类，支持自定义协议处理、本地资源替换、特定请求拦截等场景。开发者通过实现onRequestStart回调来决定是否拦截某个请求，被拦截的请求可通过
   * WebResourceHandler自定义响应内容。通过WebviewController的
   * [setWebSchemeHandler]{@link webview.WebviewController#setWebSchemeHandler}方法将WebSchemeHandler实例注册到指定的scheme上，从而实现对该
   * scheme所有请求的截获和处理。
   * 
   * WebSchemeHandler与[WebSchemeHandlerRequest]{@link webview.WebSchemeHandlerRequest}、
   * [WebResourceHandler]{@link webview.WebResourceHandler}、
   * [WebSchemeHandlerResponse]{@link webview.WebSchemeHandlerResponse}配合使用：onRequestStart回调接收WebSchemeHandlerRequest（被拦
   * 截的请求信息）和WebResourceHandler（用于返回自定义响应的处理器），返回boolean值表示是否拦截。onRequestStop在请求结束时触发（仅对已拦截的请求），用于资源清理。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  class WebSchemeHandler {
    /**
     * 当请求开始时的回调，在该回调函数中可以决定是否拦截该请求。当回调返回false时，表示不拦截此请求，此时handler失效；当回调返回true时，表示拦截此请求。
     * 
     * > **说明：**
     * >
     * > - 重定向后的URL无法单独拦截。如需拦截，必须同时对原始请求URL进行拦截。
     *
     * @param { function } callback - 拦截对应scheme请求开始时触发的回调。request为请求，handler用于提供自定义的返回头以及返回体给Web组件，返回值true表示拦截此请求，false
     *     表示不拦截此请求，handler失效。
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
     * 当请求完成时的回调，仅当
     * [onRequestStart]{@link webview.WebSchemeHandler#onRequestStart( callback: (request: WebSchemeHandlerRequest, handler: WebResourceHandler) => boolean)}
     * 回调决定拦截此请求时触发。触发的时机有以下两点：
     * 
     * 1. WebResourceHandler调用didFail或者didFinish。
     * 2. 此请求因为其他原因中断（如网络错误、系统异常等）。
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
   * [handleStatusChanged]{@link webview.NativeMediaPlayerHandler.handleStatusChanged} 接口参数， 用于表示播放器的播放状态。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  enum PlaybackStatus {
    /**
     * 表示媒体已暂停。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    PAUSED = 0,
    /**
     * 表示媒体正在播放。
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
     * 缓存时长超过了当前的播放进度，但是仍有可能导致卡顿。
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
   * NativeMediaPlayerHandler 是[CreateNativeMediaPlayerCallback]{@link webview.CreateNativeMediaPlayerCallback}回调函数的参数。当
   * 应用使用[NativeMediaPlayerBridge]{@link webview.NativeMediaPlayerBridge}接管网页媒体播放时，需要通过将播放器的各种状态变化实时同步给 ArkWeb 内核，确保网页 
   * JavaScript 能够获取正确的播放器状态，ArkWeb 内核会将这些状态转换为标准的 HTML5 Media Events，触发网页中注册的事件监听器，从而保证网页功能的正常运行。
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
     * @param { number } volume - 播放器的音量，取值范围：[0, 1.0]。超出范围时，ArkWeb 内核将不会执行。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleVolumeChanged(volume: number): void;

    /**
     * 当播放器的静音状态发生变化时，调用该方法将静音状态通知给 ArkWeb 内核。
     *
     * @param { boolean } muted - 当前播放器是否静音。
     *     <br>true表示当前播放器静音，false表示当前播放器未静音。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleMutedChanged(muted: boolean): void;

    /**
     * 当播放器的播放速率发生变化时，调用该方法将播放速率通知给 ArkWeb 内核。
     *
     * @param { number } playbackRate - 播放速率，取值范围：[0, +∞)。传入负数时，ArkWeb 内核将不会执行。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handlePlaybackRateChanged(playbackRate: number): void;

    /**
     * 当播放器解析出媒体的总时长时，调用该方法将媒体的总时长通知给 ArkWeb 内核。
     *
     * @param { number } duration - 媒体的总时长。
     *     <br>单位：秒，取值范围：[0, +∞)。传入负数时，ArkWeb 内核将不会执行。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleDurationChanged(duration: number): void;

    /**
     * 当媒体的播放进度发生变化时，调用该方法将媒体的播放进度通知给 ArkWeb 内核。
     *
     * @param { number } currentPlayTime - 当前播放时间。
     *     <br>单位：秒，取值范围：[0, duration]。超出范围时，ArkWeb 内核将不会执行。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleTimeUpdate(currentPlayTime: number): void;

    /**
     * 当媒体的缓冲时长发生变化时，调用该方法将媒体的缓冲时长通知给 ArkWeb 内核。
     *
     * @param { number } bufferedEndTime - 媒体缓冲的时长。
     *     <br>单位：秒，取值范围：[0, duration]。超出范围时，ArkWeb 内核将不会执行。
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
     * @param { boolean } fullscreen - 是否全屏。
     *     <br>true表示全屏，false表示未全屏。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleFullscreenChanged(fullscreen: boolean): void;

    /**
     * 当播放器进入 seek 状态时，调用该方法将 seek 进入事件通知 ArkWeb 内核。seek 完成后，应调用 handleSeekFinished 将 seek 完成事件通知 ArkWeb 内核。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleSeeking(): void;

    /**
     * 当播放器 seek 完成后，调用该方法将 seek 完成事件通知给 ArkWeb 内核。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleSeekFinished(): void;

    /**
     * 当播放器发生错误时，调用该方法将错误通知给 ArkWeb 内核。
     *
     * @param { MediaError } error - 错误类型。
     * @param { string } errorMessage - 错误的详细描述。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    handleError(error: MediaError, errorMessage: string): void;

    /**
     * 当播放器解析出视频的尺寸时，调用该方法将视频尺寸通知给 ArkWeb 内核。
     *
     * @param { number } width - 视频的宽，单位：像素，取值范围：[0, +∞)。传入负数时，ArkWeb 内核将忽略该值。
     * @param { number } height - 视频的高，单位：像素，取值范围：[0, +∞)。传入负数时，ArkWeb 内核将忽略该值。
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
    AUTO_CLEANUP = 2
  }

  /**
   * NativeMediaPlayerBridge 是[CreateNativeMediaPlayerCallback]{@link webview.CreateNativeMediaPlayerCallback}回调函数的返回值类
   * 型，是接管网页媒体的播放器和 ArkWeb 内核之间的一个接口类。ArkWeb 内核通过该接口类的实例对象控制应用创建的用于接管网页媒体的播放器。该接口允许应用使用自定义的媒体播放器接管网页中的媒体内容播放，同时，该接口还支持播放
   * 器的挂起和恢复机制。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  interface NativeMediaPlayerBridge {
    /**
     * 向应用通知 surface 位置信息。当网页布局变化、页面滚动或播放区域发生改变时由 ArkWeb 内核回调此方法，应用需据此更新原生播放器渲染表面的位置和大小。
     *
     * @param { number } x - surface相对于Web组件的x坐标信息。
     *     <br>单位：px。
     * @param { number } y - surface相对于Web组件的y坐标信息。
     *     <br>单位：px。
     * @param { number } width - surface的宽度。
     *     <br>单位：px。
     * @param { number } height - surface的高度。
     *     <br>单位：px。
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
     * @param { number } targetTime - 播放跳转到的时间点，从媒体开始播放时计算。
     *     <br>单位：秒。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    seek(targetTime: number): void;

    /**
     * 设置播放器音量值。
     *
     * @param { number } volume - 播放器的音量。
     *     <br>取值范围：[0, 1.0]，其中0表示静音，1.0表示最大音量。超出取值范围时，按边界值自动修正。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    setVolume(volume: number): void;

    /**
     * 设置静音状态。
     *
     * @param { boolean } muted - 是否静音。
     *     <br>true表示静音，false表示未静音。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    setMuted(muted: boolean): void;

    /**
     * 设置播放速率。
     *
     * @param { number } playbackRate - 播放速率。
     *     <br>取值范围：[0, 10.0]，其中1表示原速播放。超出取值范围时，按边界值自动修正。
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
     * 使播放器进入全屏。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    enterFullscreen(): void;

    /**
     * 使播放器退出全屏。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    exitFullscreen(): void;

    /**
     * 通知应用重建播放器，并恢复播放器的状态信息。仅与 suspendPlayer 成对出现。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    resumePlayer?(): void;

    /**
     * 通知应用销毁播放器，并保存播放器的状态信息。仅与 resumePlayer 成对出现。
     *
     * @param { SuspendType } type - 播放器挂起类型，用于指定播放器挂起的方式。不同 SuspendType 取值对应不同的挂起场景。
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
   * MediaSourceInfo 是表示媒体源信息的数据类。在 Web 媒体播放场景中，MediaSourceInfo 类封装了媒体源的基本信息，帮助应用了解媒体源的类型、地址和格式，应用根据这些信息创建自定义播放器并开始播放。
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
   * NativeMediaPlayerSurfaceInfo 使用[enableNativeMediaPlayer]{@link WebAttribute#enableNativeMediaPlayer}来进行同层渲染的 
   * surface 信息配置。该类允许应用接管网页媒体播放功能，通过配置 surface 的 id 和位置信息，实现网页媒体内容与应用界面的同层渲染融合，提升媒体播放体验。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  class NativeMediaPlayerSurfaceInfo {
    /**
     * surface 的 id，用于同层渲染的 NativeImage 的 surfaceId。
     * 
     * 详见[NativeEmbedDataInfo]{@link NativeEmbedDataInfo}。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    id: string;

    /**
     * surface 的位置信息，用于指定同层渲染时 surface 的显示位置和尺寸。
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
   * [CreateNativeMediaPlayerCallback]{@link webview.CreateNativeMediaPlayerCallback}回调函数的一个参数。包含了网页中媒体的信息。应用可以根据这些信息来创建
   * 接管网页媒体播放的播放器。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  interface MediaInfo {
    /**
     * 网页中的 `<video>` 或 `<audio>` 的 ID。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    embedID: string;
    /**
     * 媒体的类型。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    mediaType: MediaType;
    /**
     * 媒体的源。可能有多个源，应用需要选择一个支持的源来播放。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    mediaSrcList: MediaSourceInfo[];
    /**
     * 用于同层渲染的 surface 信息。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    surfaceInfo: NativeMediaPlayerSurfaceInfo;
    /**
     * `<video>` 或 `<audio>` 中是否有 `controls` 属性。
     * 
     * true 表示有，false 表示没有。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    controlsShown: boolean;
    /**
     * `<video>` 或 `<audio>` 中的 `controlslist` 属性的值。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    controlList: string[];
    /**
     * 是否要求静音播放。
     * 
     * true 表示静音播放，false 表示未静音播放。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    muted: boolean;
    /**
     * 海报的地址。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    posterUrl: string;
    /**
     * 是否需要预加载。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    preload: Preload;
    /**
     * 播放器请求媒体资源时，需要携带的 HTTP 头。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    headers: Record<string, string>;
    /**
     * `<video>` 或 `<audio>` 标签中的属性。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    attributes: Record<string, string>;
  }

  /**
   * [onCreateNativeMediaPlayer]{@link webview.WebviewController#onCreateNativeMediaPlayer}方法的参数。一个回调函数，在网页需要播放媒体时被调用，用于
   * 创建一个播放器接管网页中的媒体播放。通过接管机制，应用可以使用自定义播放器实现特殊功能或优化性能。
   *
   * @param { NativeMediaPlayerHandler } handler - 通过该对象，将播放器的状态报告给 ArkWeb 内核。应用通过该对象上报播放、暂停、错误等状态事件，使 ArkWeb 内核能够同步网页中的
   *     媒体播放状态。
   * @param { MediaInfo } mediaInfo - 网页媒体的信息。
   * @returns { NativeMediaPlayerBridge } 接管网页媒体播放器和 ArkWeb 内核之间的一个接口类。<br/>应用需要实现该接口类。<br/> ArkWeb 内核通过该接口对象控制应用创建的媒体播放
   *     器。<br/>如果应用返回了 null，则表示应用不接管这个媒体的播放，由 ArkWeb 内核来播放该媒体。
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  type CreateNativeMediaPlayerCallback =
      (handler: NativeMediaPlayerHandler, mediaInfo: MediaInfo) => NativeMediaPlayerBridge;

  /**
   * AdsBlockManager是ArkWeb框架中用于管理Web组件广告过滤功能的类，提供对广告过滤规则的设置、域名黑白名单管理及过滤策略控制等能力。每个应用中的所有Web组件共享一个AdsBlockManager静态类，开发者可
   * 通过该类向Web组件注入符合通用EasyList语法规则的广告过滤配置文件，并灵活控制特定网站的广告过滤启用状态。
   * 
   * AdsBlockManager的核心机制基于域名后缀匹配的AllowedList/DisallowedList双层策略：DisallowedList用于禁用特定网站的广告过滤，而AllowedList具有更高优先级，可在
   * DisallowedList的范围内重新开启部分子域名的广告过滤。广告过滤规则内部解析成功后会被持久化存储，应用重启后无需重复设置；而域名黑白名单不会持久化，应用重启后需重新配置。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice
   * @since 12 dynamic
   */
  class AdsBlockManager {
    /**
     * 向Web组件中设置自定义的符合通用EasyList语法规则的广告过滤配置文件。
     * 
     * > **说明：**
     * >
     * > - 此接口设置的广告过滤规则，内部解析成功后会持久化存储，应用重启后不需要重复设置。
     *
     * @param {string} rulesFile - 指定了符合EasyList通用语法的规则文件路径，应用需要有此文件的读权限。
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
     * > - 此接口设置的域名不会持久化，应用重启需要重新设置。
     * >
     * > - 广告过滤特性会使用后缀匹配的方式判断domainSuffix和当前站点的url是否能匹配，例如，当前Web组件打开的网站是https://www.example.com，设置的DisallowedList中有'
     * > example.com'或者'www.example.com'，后缀匹配成功，此网站将禁用广告过滤，访问'https://m.example.com'也将禁用广告过滤。
     *
     * @param { Array<string> } domainSuffixes - 一组域名列表，例如['example.com', 'abcd.efg.com']
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
     * > - 此接口设置的域名不会持久化，应用重启需要重新设置。
     * >
     * > - AllowedList的优先级比DisallowedList高，例如，DisallowedList中配置了['example.com']，禁用了所有example.com域名下的网页，此时如果需要开启'
     * > news.example.com'下的广告过滤，可以使用addAdsBlockAllowedList(['news.example.com'])。
     *
     * @param { Array<string> } domainSuffixes - 一组域名列表，例如['example.com', 'abcd.efg.com']
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
     * > **说明：**
     * >
     * > - AdsBlockManager的DisallowedList不会持久化，应用重启需要重新设置。删除不存在的条目不会触发异常。
     *
     * @param { Array<string> } domainSuffixes - 一组域名列表，例如['example.com', 'abcd.efg.com']
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
     * > **说明：**
     * >
     * > - AdsBlockManager的AllowedList不会持久化，应用重启需要重新设置。删除不存在的条目不会触发异常。
     *
     * @param { Array<string> } domainSuffixes - 一组域名列表，例如['example.com', 'abcd.efg.com']
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static removeAdsBlockAllowedList(domainSuffixes: Array<string>): void;

    /**
     * 清空AdsBlockManager的DisallowedList。
     * 
     * > **说明：**
     * >
     * > - AdsBlockManager的DisallowedList不会持久化，应用重启需要重新设置。
     *
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static clearAdsBlockDisallowedList(): void;

    /**
     * 清空AdsBlockManager的AllowedList。
     * 
     * > **说明：**
     * >
     * > - AdsBlockManager的AllowedList不会持久化，应用重启需要重新设置。
     *
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12 dynamic
     */
    static clearAdsBlockAllowedList(): void;
  }

  /**
   * BackForwardCacheSupportedFeatures是ArkWeb框架中用于选择性控制允许使用了特定Web特性的页面可以进入前进后退缓存（BFCache）的配置类。默认情况下，使用同层渲染或视频托管等特性的页面会被阻
   * 止进入BFCache，因为浏览器无法安全地保存和恢复这些与系统控件绑定的复杂状态。通过设置该类中的属性，开发者可以显式允许这些特性的页面进入BFCache，但需注意自行维护相关系统控件的生命周期，避免造成资源泄漏。完整示例代码参考
   * [enableBackForwardCache]{@link webview.WebviewController#enableBackForwardCache}。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 12 dynamic
   */
  class BackForwardCacheSupportedFeatures {
    /**
     * 是否允许使用同层渲染的页面进入前进后退缓存。
     * 
     * 如果设置为允许，需要维护为同层渲染元素创建的系统控件的生命周期，避免造成资源泄漏。
     * 
     * true：允许，false：不允许。
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
     * 如果设置为允许，需要维护为视频元素创建的系统控件的生命周期，避免造成资源泄漏。
     * 
     * true：允许，false：不允许。
     * 
     * 默认值：false。
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
   * BackForwardCacheOptions是ArkWeb框架中用于配置Web组件前进后退缓存（BFCache）行为的参数类。BFCache是一种页面缓存机制，当用户在浏览历史中前进或后退时，可将页面完整快照（包括
   * JavaScript状态）缓存起来，实现瞬时加载效果，显著提升用户体验。通过BackForwardCacheOptions，开发者可以控制每个Web组件允许缓存的最大页面个数以及页面在缓存中的最长停留时间。
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
     * Web组件会根据内存压力对缓存进行回收。
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
     * 默认值：600。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    timeToLive: number;

    /**
     * BackForwardCacheOptions的构造函数。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12 dynamic
     */
    constructor();
  }

  /**
   * 使用代理的请求的scheme信息。
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
   * ProxyConfig是ArkWeb框架中用于配置网络代理规则的类，配合[ProxyController]{@link webview.ProxyController}实现对应用中所有Web组件网络请求的代理控制。通过
   * ProxyConfig，开发者可以灵活定义多种代理规则：指定特定URL使用特定代理服务器、指定某些URL直连服务器、定义绕过代理的规则等。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 19]
   * @since 15 dynamic
   */
  class ProxyConfig {
    /**
     * 插入一条bypass规则，指明哪些URL应该绕过代理并直接连接到服务器。当[enableReverseBypass]{@link webview.ProxyConfig#enableReverseBypass}设置为true
     * 时，与bypassRule匹配的URL会使用代理而非绕过代理。
     *
     * @param { string } bypassRule - bypass规则字符串，用于指定绕过代理的URL匹配规则，支持主机名或域名格式（如"example.com"匹配该域名及其子域名）。与bypassRule匹配的
     *     URL会绕过代理。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    insertBypassRule(bypassRule: string): void;
    /**
     * 插入一条直连规则，指明符合schemeFilter条件的URL将直接连接到服务器。
     * 
     * > **说明：**
     * >
     * > - 与[insertBypassRule]{@link webview.ProxyConfig#insertBypassRule}和
     * > [bypassHostnamesWithoutPeriod]{@link webview.ProxyConfig#bypassHostnamesWithoutPeriod}均可实现URL直连，区别在于匹配维度：本方法通过
     * > schemeFilter按协议类型匹配；insertBypassRule通过bypassRule字符串按URL模式匹配；bypassHostnamesWithoutPeriod无需传参，自动对不含点号的域名直连。可根据需要
     * > 直连的URL范围选择合适的方法。
     *
     * @param { ProxySchemeFilter } schemeFilter - 与schemeFilter匹配的URL会直接与服务器相连。
     *     <br>默认值：MATCH_ALL_SCHEMES。 
     *     <br>传入undefined或null会抛出异常错误码401。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    insertDirectRule(schemeFilter?: ProxySchemeFilter): void;
    /**
     * 插入一条代理规则，与schemeFilter匹配的URL都会使用指定代理。如果未指定schemeFilter参数，将使用默认值MATCH_ALL_SCHEMES，所有URL都将使用指定代理。
     * 
     * 代理格式为[scheme://]host[:port]。
     * 
     * scheme是可选的，必须是HTTP、HTTPS或SOCKS。scheme默认值为HTTP。
     * 
     * host是带括号的IPv6字面量、IPv4字面量或由点分隔的一个或多个标签。
     * 
     * 端口号是可选的，默认HTTP为80、HTTPS为443、SOCKS为1080。
     * 
     * 例如：
     * 
     * - example.com host: example.com
     * - https://example.com  scheme: https  host: example.com
     * - example.com:8888     host: example.com  port: 8888
     * - https://example.com:8888  scheme: https  host: example.com  port: 8888
     * - 192.168.1.1  host: 192.168.1.1
     * - 192.168.1.1:8888  host: 192.168.1.1 port: 8888
     * - [10:20:30:40:50:60:70:80]
     *
     * @param { string } proxyRule - URL要使用的代理。
     * @param { ProxySchemeFilter } schemeFilter - 与schemeFilter匹配的URL会使用代理。
     *     <br>默认值：MATCH_ALL_SCHEMES。
     *     <br>传入undefined或null会抛出异常错误码401。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    insertProxyRule(proxyRule: string, schemeFilter?: ProxySchemeFilter): void;
    /**
     * 没有点字符的域名将绕过代理并直接连接到服务器。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    bypassHostnamesWithoutPeriod(): void;
    /**
     * 默认情况下，如果某些主机名是本地IP地址或localhost地址，它们会绕过代理。调用此函数以覆盖默认行为，并强制将localhost或本地IP地址通过代理发送。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    clearImplicitRules(): void;
    /**
     * 反转bypass规则。
     *
     * @param { boolean } reverse - 参数值默认是false，表示与[insertBypassRule]{@link webview.ProxyConfig#insertBypassRule}中的
     *     bypassRule匹配的URL会绕过代理，参数值为true时，表示与[insertBypassRule]{@link webview.ProxyConfig#insertBypassRule}中的bypassRule
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
     * @returns { Array<ProxyRule> } 代理规则，每个ProxyRule对象表示一条已配置的代理规则。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    getProxyRules(): Array<ProxyRule>;
    /**
     * 获取[enableReverseBypass]{@link webview.ProxyConfig#enableReverseBypass}的参数值，详见
     * [enableReverseBypass]{@link webview.ProxyConfig#enableReverseBypass}。
     *
     * @returns { boolean } [enableReverseBypass]{@link webview.ProxyConfig#enableReverseBypass}的参数值。参数值为false，表示与
     *     [insertBypassRule]{@link webview.ProxyConfig#insertBypassRule}中的bypassRule匹配的URL会绕过代理，参数值为true时，表示与
     *     [insertBypassRule]{@link webview.ProxyConfig#insertBypassRule}中的bypassRule匹配的URL会使用代理。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    isReverseBypassEnabled(): boolean;
  }

  /**
   * ProxyRule是ArkWeb框架中代理规则只读信息的类，通过[getProxyRules]{@link webview.ProxyConfig#getProxyRules}方法获取。当开发者通过ProxyConfig配置了代理
   * 规则后，可通过getProxyRules获取已配置的规则列表，每条规则对应一个ProxyRule对象，用于查询规则的详细信息。
   * 
   * ProxyRule提供两个方法：getSchemeFilter用于获取该代理规则对应的协议过滤器（如MATCH_ALL_SCHEMES、MATCH_HTTP、MATCH_HTTPS等），getUrl用于获取该代理规则中指定的代理服
   * 务器URL信息。ProxyRule对象为只读，由系统在配置代理规则时创建，应用只能查询其内容而不能修改。
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
     * 获取代理规则中代理的URL信息。
     *
     * @returns { string } 代理规则中代理的URL信息。
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    getUrl(): string;
  }

  /**
   * 回调函数，在代理配置发生改变时被调用，回调成功表示代理设置成功。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 19]
   * @since 15 dynamic
   */
  type OnProxyConfigChangeCallback = () => void;

  /**
   * ProxyController是ArkWeb框架中用于管理应用中所有Web组件代理配置的静态类。通过ProxyController，开发者可以统一为应用中的所有Web请求设置或移除代理配置，适用于需要将Web流量路由到特定代理服务
   * 器的场景（如企业网络环境、内容过滤、流量监控等）。
   * 
   * ProxyController提供两个核心方法：applyProxyOverride用于应用代理配置，接受一个[ProxyConfig]{@link webview.ProxyConfig}对象和代理设置成功的回调函数；
   * removeProxyOverride用于移除当前代理配置，恢复为默认网络连接方式。需要注意的是，代理设置或移除后不会立即生效，在加载页面之前需等待回调函数触发，该回调函数会在UI线程上被调用。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @atomicservice [since 19]
   * @since 15 dynamic
   */
  class ProxyController {
    /**
     * 设置应用中所有Web使用的代理配置，与[insertBypassRule]{@link webview.ProxyConfig#insertBypassRule}中插入的bypass规则匹配的URL将不会使用代理，而是直接向
     * URL指定的源地址发起请求。代理设置成功后，不保证网络连接后会立即使用新的代理配置，在加载页面之前请等待回调函数触发，该回调函数将在UI线程上被调用。
     *
     * @param { ProxyConfig } proxyConfig - 对代理的配置。
     * @param { OnProxyConfigChangeCallback } callback - 代理配置变更的回调。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice [since 19]
     * @since 15 dynamic
     */
    static applyProxyOverride(proxyConfig: ProxyConfig, callback: OnProxyConfigChangeCallback): void;
    /**
     * 移除代理配置。移除代理配置后，不保证网络连接后会立即恢复为默认网络连接方式，在加载页面之前等待回调函数触发，该回调函数将在UI线程上被调用。
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
   * Web组件的销毁模式，当Web组件销毁时，销毁模式会影响Web内核的资源释放时机，例如JavaScript运行上下文、渲染上下文等等。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 20 dynamic
   */
  enum WebDestroyMode {
    /**
     * 普通模式，由系统决定Web组件资源的销毁时机。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    NORMAL_MODE = 0,

    /**
     * 快速模式，当Web组件触发销毁时，立即销毁相关的内部资源。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 20 dynamic
     */
    FAST_MODE = 1
  }

  /**
   * 站点隔离机制将不同源的网站隔离在不同的渲染子进程中，减少跨域攻击面。例如，PC上原有进程模型是每一个Tab对应一个渲染子进程，站点隔离打开后，让不同源的Iframe运行在独立的渲染子进程中。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 21 dynamic
   */
  enum SiteIsolationMode {
    /**
     * 部分站点隔离，即在同一个渲染进程内加载新站点。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    PARTIAL = 0,

    /**
     * 严格站点隔离，跨站点的Iframe将切换到新的渲染进程。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 21 dynamic
     */
    STRICT = 1
  }

  /**
   * Web页面场景下，全局滚动条模式。
   *
   * @syscap SystemCapability.Web.Webview.Core
   * @since 23 dynamic
   */
  enum ScrollbarMode {
    /**
     * 非常驻滚动条，可以拖拽。
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
     * 非常驻滚动条，不可以拖拽。
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    OVERLAY_VISUAL_SCROLLBAR = 2
  }
}

export default webview;