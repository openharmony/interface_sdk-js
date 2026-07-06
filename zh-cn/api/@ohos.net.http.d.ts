/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @file 数据请求
 * @kit NetworkKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type connection from './@ohos.net.connection';
/*** if arkts static */
import type { RecordData } from './@ohos.base';
/*** endif */
import type cert from './@ohos.security.cert';

/**
 * 本模块提供HTTP数据请求能力。应用可以通过HTTP发起一个数据请求，支持常见的GET、POST、OPTIONS、HEAD、PUT、DELETE、PATCH、TRACE、CONNECT方法。
 *
 * @syscap SystemCapability.Communication.NetStack
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace http {
  /**
   * 网络代理配置信息。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  type HttpProxy = connection.HttpProxy;

  /**
   * SOCKS5代理配置信息。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type Socks5Proxy = connection.Socks5Proxy;

  /**
   * 创建一个HTTP请求，里面包括发起请求、中断请求、订阅/取消订阅HTTP Response Header事件。当发起多个HTTP请求时，需为每个HTTP请求创建对应HttpRequest对象。每一个HttpRequest对象对应一
   * 个HTTP请求。
   * 
   * > **说明：**
   * >
   * > 当该请求使用完毕时，需调用destroy方法释放资源，否则会出现内存泄露问题。
   *
   * @returns { HttpRequest } 返回一个HttpRequest对象，里面包括request、requestInStream、requestSync、enableAutoCookie、destroy、on和off方
   *     法。
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  function createHttp(): HttpRequest;

  /**
   * 发起HTTP请求时，可选配置信息。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  export interface HttpRequestOptions {
    /**
     * 请求方式，默认为GET。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    method?: RequestMethod;

    /**
     * 发送请求的额外数据，默认无此字段。自API version 26开始，建议优先使用body和queryParams字段。
     * 
     * **说明：** 没有额外数据时，避免添加该参数；若必须添加，请填写undefined或者null，避免直接传入"。
     * 
     * 1. 当HTTP请求为POST、PUT、DELETE等方法时，此字段为HTTP请求的content，以UTF-8编码形式作为请求体。
     * 
     * 示例如下：
     * 
     * (1) 当'content-Type'为'application/x-www-form-urlencoded'时，请求提交的信息主体数据必须在key和value进行URL转码后（encodeURIComponent/
     * encodeURI），按照键值对"key1=value1&key2=value2&key3=value3"的方式进行编码，该字段对应的类型通常为String。
     * 
     * (2) 当'content-Type'为'text/xml'时，该字段对应的类型通常为String。
     * 
     * (3) 当'content-Type'为'application/json'时，该字段对应的类型通常为Object。
     * 
     * (4) 当'content-Type'为'application/octet-stream'时，该字段对应的类型通常为ArrayBuffer。
     * 
     * (5) 当'content-Type'为'multipart/form-data'且需上传的字段为文件时，该字段对应的类型通常为ArrayBuffer。
     * 
     * 以上信息仅供参考，并可能根据具体情况有所不同。
     * 
     * 2. 当HTTP请求为GET、OPTIONS、TRACE、CONNECT等方法时，此字段为HTTP请求参数的补充。开发者需传入Encode编码后的string类型参数，Object类型的参数无需预编码，参数内容会拼接到URL中进行发送。ArrayBuffer类型的参数不会做拼接处理。
     *
     * @type {?string | Object | ArrayBuffer} [since 6 - 10]
     * @type { ?(string | Object | ArrayBuffer) } [since 11]
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    extraData?: string | Object | ArrayBuffer;

    /**
     * Additional data of the request.
     * extraData can be a string or an Object (API 6) or an ArrayBuffer(API 8).
     * @syscap SystemCapability.Communication.NetStack
     * @since 26.1.0 static
     */
    extraData?: string | RecordData | ArrayBuffer;

    /**
     * 指定返回数据的类型，默认无此字段。如果设置了此参数，系统将优先返回指定的类型。当指定其类型为Object时，最大长度为65536字符数。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    expectDataType?: HttpDataType;

    /**
     * 是否使用缓存，true表示请求时优先读取缓存，false表示不使用缓存；默认为true，请求时优先读取缓存。缓存跟随当前进程生效，新缓存会替换旧缓存。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    usingCache?: boolean;

    /**
     * HTTP/HTTPS请求并发优先级，值越大优先级越高，范围[1,1000]，默认为1，超出范围将设置为默认值。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    priority?: int;

    /**
     * HTTP请求头字段。当请求方式为"POST" "PUT" "DELETE" 或者""时，默认{'content-Type': 'application/json'}， 否则默认{'content-Type': '
     * application/x-www-form-urlencoded'}。
     * 
     * 如果head中包含number类型的字段，最大支持int64的整数。
     * 
     * header字段支持JSON格式如 [完整示例](docroot://reference/apis-network-kit/js-apis-http.md#完整示例) 和Record<string, string>格式输入。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    header?: Object;

    /**
     * HTTP request header. default is 'content-type': 'application/json'
     *
     * @syscap SystemCapability.Communication.NetStack
     * @FaAndStageModel
     * @since 26.1.0 static
     */
    header?: Record<string, string>;

    /**
     * 读取超时时间。单位为毫秒（ms），默认为60000ms。传入值需为uint32_t范围内的整数。
     * 
     * 设置为0表示不会出现超时情况。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    readTimeout?: int;

    /**
     * 连接超时时间。单位为毫秒（ms），默认为60000ms。传入值需为uint32_t范围内的整数。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    connectTimeout?: int;

    /**
     * HTTP请求使用的协议版本。未指定时，由系统自动协商最适合的协议版本。若指定HTTP3，由于HTTP3协议的安全限制，需通过[TlsConfig]{@link http.TlsConfig}指定TLS 版本为1.3，且目标域名
     * 支持HTTP3协议，才能启用HTTP3，否则将协商降级。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    usingProtocol?: HttpProtocol;

    /**
     * HTTP代理配置，该项不配置时默认使用系统代理。
     * 
     * - 当usingProxy为布尔类型true时，使用默认网络代理，为false时，不使用代理。
     * - 当usingProxy为HttpProxy类型时，使用指定网络代理。从API version 22开始，HttpProxy支持指定username和password字段。
     * - 从API version 26.0.0开始，当usingSocks5Proxy被正确配置时，usingProxy项不生效。
     *
     * @type {?boolean | HttpProxy} [since 10 - 10]
     * @type { ?(boolean | HttpProxy) } [since 11]
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    usingProxy?: boolean | HttpProxy;

    /**
     * 如果设置了此参数且证书有效，系统将使用用户指定的CA证书和系统预设的CA证书；否则仅使用系统预设的CA证书。CA证书路径为沙箱映射路径（开发者可通过
     * [UIAbilityContext]{@link @ohos.app.ability.common:common.UIAbilityContext}提供的能力获取应用沙箱路径）。目前仅支持后缀名为.pem的文本格式证书。
     * 
     * 系统预设CA证书位置：/etc/ssl/certs/cacert.pem。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 26.1.0 static
     */
    caPath?: string;

    /**
     * 如果设置了此参数且证书有效，系统将使用用户指定的CA证书和系统预设的CA证书；否则仅使用系统预设的CA证书。如果同时设置了caPath和caData，caData将被系统忽略。目前仅支持传入.pem格式的证书内容，最大长度为8
     * 000字节。仅支持传入单证书，不支持证书链传入。
     * 
     * 系统预设CA证书位置：/etc/ssl/certs/cacert.pem。证书路径为沙箱映射路径（开发者可通过UIAbilityContext提供的能力获取应用沙箱路径）。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    caData?: string;

    /**
     * 使用安全通信协议TLS（默认）或TLCP。如果使用TLCP，相关的选项（如caPath、clientCert和clientEncCert）必须赋有效值。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    sslType?: SslType;

    /**
     * 支持应用程序传入客户端证书，使服务器能够进行验证客户端的加密身份。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    clientEncCert?: ClientCert;

    /**
     * 用于设置下载起始位置，该参数只能用于GET方法，不能用于其他。HTTP标准（RFC 7233第3.1节）允许服务器忽略范围请求。
     * 
     * - 使用HTTP PUT时，不能使用该选项，因为该选项可能与其他选项冲突。
     * - 取值范围是：[1，4294967296（4GB）]，超出范围则不生效。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 26.1.0 static
     */
    resumeFrom?: long;

    /**
     * 用于设置下载结束位置，该参数只能用于GET方法，不能用于其他。HTTP标准（RFC 7233第3.1节）允许服务器忽略范围请求。
     * 
     * - 使用HTTP PUT时，不能使用该选项，因为该选项可能与其他选项冲突。
     * - 取值范围是：[1，4294967296（4GB）]，超出范围则不生效。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 26.1.0 static
     */
    resumeTo?: long;

    /**
     * 支持传输客户端证书。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    clientCert?: ClientCert;

    /**
     * 设置使用HTTPS协议的服务器进行DNS解析。
     * 
     * - 参数必须根据以下格式进行URL编码："https:// host:port/path"。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 26.1.0 static
     */
    dnsOverHttps?: string;

    /**
     * 设置指定的DNS服务器进行DNS解析。
     * 
     * - 最多可以设置3个DNS解析服务器。如果有3个以上，只取前3个。
     * - 服务器必须是IPV4或者IPV6地址。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 26.1.0 static
     */
    dnsServers?: Array<string>;

    /**
     * 响应消息的最大字节限制。
     * 
     * 默认值为5*1024*1024，以Byte为单位。最大值为100*1024*1024，以Byte为单位。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 26.1.0 static
     */
    maxLimit?: int;

    /**
     * 当'content-Type'为'multipart/form-data'时，则上传该字段定义的数据字段表单列表。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    multiFormDataList?: Array<MultiFormData>;

    /**
     * 支持动态设置证书锁定配置，可以传入单个或多个证书PIN码。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @since 12 dynamic
     * @since 26.1.0 static
     */
    certificatePinning?: CertificatePinning | CertificatePinning[];

    /**
     * 证书颁发机构（CA），用于验证远程服务器的身份。如果未设置此字段，系统CA将用于验证远程服务器的标识。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 18 dynamic
     * @since 26.1.0 static
     */
    remoteValidation?: RemoteValidation;

    /**
     * TLS配置。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 18 dynamic
     * @since 26.1.0 static
     */
    tlsOptions?: TlsOptions;

    /**
     * 安全连接期间的服务器身份验证配置。默认不认证。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 18 dynamic
     * @since 26.1.0 static
     */
    serverAuthentication?: ServerAuthentication;

    /**
     * 支持解析目标域名时限定地址类型。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @since 15 dynamic
     * @since 26.1.0 static
     */
    addressFamily?: AddressFamily;

    /**
     * 支持客户端通过配置SNI（Server Name Indication，服务器名称指示）在TLS握手阶段向服务器声明目标域名，使服务器能够根据域名选择对应的SSL/TLS证书进行加密通信。
     * 
     * - 默认值为空字符串，sniHostName参数长度上限为255个字符。若超出长度限制或设置为空字符串，该设置将不会生效。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    sniHostName?: string;

    /**
     * 支持针对HttpRequest指定最大跳转次数。
     * 
     * - 默认值为30次。
     * - 取值范围是：[0，2147483647]，设置0即为关闭重定向，当服务器的重定向次数超过设置的最大重定向次数时会返回错误码2300047。超出此范围该配置不生效，配置默认值30。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    maxRedirects?: int;

    /**
     * 支持自定义请求方法，例如实现WebDAV扩展协议，当与method同时配置时，customMethod优先级更高。
     * 
     * - 默认值为空字符串，最大长度128个字符，超出则不生效。
     * - 当customMethod符合WebDAV扩展协议请求方式，但服务器不支持时，本次请求的服务器响应码通常为405或501（实际结果与服务器具体行为有关）。
     * - 当customMethod不符合WebDAV扩展协议请求方式时，本次请求的服务器响应码通常为400或405（实际结果与服务器具体行为有关）。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    customMethod?: string;

    /**
     * 支持HTTP请求指定特定激活的网络。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    pathPreference?: PathPreference;

    /**
     * HTTP请求是否复用连接。默认值为true，表示复用已有的连接；设置为false时，每次请求将建立新的连接，不再复用已有连接。本字段可与inactivityMs字段搭配使用，自定义连接超时关闭时间。
     * 
     * - 连接复用是指在完成一次HTTP请求后，底层的TCP连接不会被立即关闭，而是保持在连接池中，后续的HTTP请求如果目标地址相同，可以重用该连接，从而减少TCP握手和TLS握手的开销，提高性能。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    reuseConnections?: boolean;

    /**
     * 连接池中的连接最大空闲时间，超过该时间后连接将被关闭。单位为毫秒（ms），默认配置值为118秒。系统内部比较时间时会先计算连接空闲时间的差值，然后向下取整到秒，再与配置的值进行比较。
     * 
     * - 取值范围是(0, 2147483647]，传入小于等于0的数值时系统使用默认值118秒。当reuseConnections配置为false时，该参数不生效。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    inactivityMs?: int;

    /**
     * SOCKS5代理配置，该项不配置时不启动SOCKS5代理。
     * 
     * 当该项被正确配置时，如果同时配置了usingProxy，usingProxy不生效。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    usingSocks5Proxy?: Socks5Proxy;

    /**
     * 是否允许在证书链验证时使用信任库中的中间CA证书作为信任锚点。设置为false时，证书链必须逐级验证至受信任的根CA证书。设置为true时，若信任库中存在中间CA证书，则证书链验证到该中间CA时即可视为通过，无需继续追溯至根
     * CA证书。当[SslType]{@link http.SslType}使用默认值或设置为TLS时，默认值为true；当[SslType]{@link http.SslType}设置为TLCP时，默认值为false。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    enablePartialChain?: boolean;

    /**
     * 附加到URL中的请求参数。
     * 
     * - 支持string和QueryParamObject两种形式：string会按原样拼接到URL（不重复编码）；QueryParamObject会由系统自动编码并序列化。
     * - 使用string时不需要携带前导`?`，多个参数用`&`分隔。
     * - 当queryParams与extraData同时配置时，queryParams优先，extraData中的URL参数补充逻辑会被忽略。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 dynamic&static
     */
    queryParams?: string | QueryParamObject;

    /**
     * HTTP请求体内容。设置该字段后，框架会优先将该字段作为请求体发送。
     * 
     * - 支持string、Object、ArrayBuffer三种类型：string按原值发送，Object会序列化后发送，ArrayBuffer按二进制发送。
     * - 当body与extraData同时配置时，body优先，extraData会被忽略。
     * - 可与任意请求方法搭配使用，用于显式指定请求体。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 dynamic&static
     */
    body?: string | Object | ArrayBuffer;
  }

  /**
   * HTTP服务器身份验证。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export interface ServerAuthentication {
    /**
     * 服务器的凭证。默认值为undefined。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    credential: Credential;
    /**
     * 服务器的认证类型。如果没有设置，需与服务器协商。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    authenticationType?: AuthenticationType;
  }

  /**
   * TLS配置。
   *
   * @unionmember { 'system' } 表示使用系统的TLS版本，是未进行TLS设置的默认值，值固定为'system'字符串。
   * @unionmember { TlsConfig } 表示使用自定义的TLS版本号和加密套件。
   * @syscap SystemCapability.Communication.NetStack
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export type TlsOptions = 'system' | TlsConfig;

  /**
   * X509证书
   *
   * @syscap SystemCapability.Communication.NetStack
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export type X509Cert = cert.X509Cert;

  /**
   * {@link ValidationCallback}的验证上下文
   *
   * @syscap SystemCapability.Communication.NetStack
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface ValidationContext {
    /**
     * 证书的PEM格式的原始数据
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    pemCerts: string[];

    /**
     * X509证书链
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    x509Certs: X509Cert[];

    /**
     * 此请求的主机
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    host: string;

    /**
     * 此请求连接到的真实IP
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ip: string;
  }

  /**
   * 自定义远程验证。
   * 该API使用Promise异步返回结果。
   *
   * @param { ValidationContext } context - Certificate context.
   * @returns { boolean | Promise<boolean> } Returns a boolean value indicating whether the validation is successful.
   *     Promise used to return the result. The value true indicates valid, and false indicates invalid.
   * @syscap SystemCapability.Communication.NetStack
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export type ValidationCallback = (context: ValidationContext) => boolean | Promise<boolean>;

  /**
   * 验证远程服务器身份的方式。
   *
   * @unionmember { 'system' } 表示使用系统CA验证远端服务器身份，值固定为'system'字符串，是未配置时的默认值。
   * @unionmember { 'skip' } 表示跳过验证远端服务器身份流程，值固定为'skip'字符串。
   * @unionmember { ValidationCallback } [since 26.0.0] use custom validation.
   * @syscap SystemCapability.Communication.NetStack
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export type RemoteValidation = 'system' | 'skip' | ValidationCallback;

  /**
   * 在会话中的服务器身份验证时可以设置使用不同的身份验证机制。
   *
   * @unionmember { 'basic' } 表示使用基本认证方式，值固定为'basic'字符串。
   * @unionmember { 'ntlm' } 表示使用ntlm认证方式，值固定为'ntlm'字符串。
   * @unionmember { 'digest' } 表示使用摘要认证方式，值固定为'digest'字符串。
   * @syscap SystemCapability.Communication.NetStack
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export type AuthenticationType = 'basic' | 'ntlm' | 'digest';

  /**
   * 安全通信协议。
   *
   * @unionmember { 'TLS' } 表示使用TLS安全通信协议，值固定为'TLS'字符串。
   * @unionmember { 'TLCP' } 表示使用TLCP安全通信协议，值固定为'TLCP'字符串。
   *     <br>**说明**：
   *     <br>（1）证书支持字符串的规格：
   *     <br> - UTF8String（英文字符集）
   *     <br> - PrintableString
   *     <br>  - IA5String
   *     <br>从API Version 22开始支持：
   *     <br> - TeletexString
   *     <br>（2）证书支持扩展的规格：
   *     <br> - BasicConstraints（OID 2.5.29.19）
   *     <br> - KeyUsage（OID2.5.29.15）
   *     <br> - SubjectKeyIdentifier（OID2.5.29.14）
   *     <br> - AuthorityKeyIdentifier（OID2.5.29.35）
   *     <br>从API Version 22开始支持：
   *     <br> - SubjectAltName（OID 2.5.29.17）
   *     <br> - ExtendedKeyUsage（OID 2.5.29.37）<br/>
   * @syscap SystemCapability.Communication.NetStack
   * @atomicservice
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  export type SslType = 'TLS' | 'TLCP';

  /**
   * HTTP请求指定特定网络的类型枚举。
   * 
   * > **说明：**
   * >
   * > 推荐在网络并发等场景下使用。
   * 
   * > 当指定的网络没有激活时，系统按照指定默认网络处理。
   *
   * @unionmember { 'auto' } 表示HTTP请求指定默认的网络连接。
   * @unionmember { 'primaryCellular' } 表示在蜂窝网络激活的场景下，HTTP请求指定默认的蜂窝网络连接。
   * @unionmember { 'secondaryCellular' } 表示在双蜂窝网络激活的场景下，HTTP请求指定副卡的蜂窝网络连接。
   * @syscap SystemCapability.Communication.NetStack
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  export type PathPreference = 'auto' | 'primaryCellular' | 'secondaryCellular';

  /**
   * QueryParamObject中允许使用的单个参数值类型。
   *
   * @unionmember { string } 字符串类型。
   * @unionmember { int } 数字类型，会先转为字符串再参与编码。
   * @unionmember { boolean } 布尔类型，会先转为字符串再参与编码。
   * @unionmember { null } 空值类型，会按仅key不带`=`值的形式序列化。
   * @unionmember { undefined } 未定义类型，会按仅key不带`=`值的形式序列化。
   * @syscap SystemCapability.Communication.NetStack
   * @stagemodelonly
   * @crossplatform
   * @since 26.0.0 dynamic&static
   */
  export type QueryParamValue = string | int | boolean | null | undefined;

  /**
   * 用于构造URL查询参数的键值对象类型。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @stagemodelonly
   * @crossplatform
   * @since 26.0.0 dynamic&static
   */
  export type QueryParamObject = Record<string, QueryParamValue | QueryParamValue[]>;

  /**
   * HTTP拦截器的类型枚举。
   * 
   * | 名称   | 值 |说明                                   |
   * | ------ | --|-------------------------------------- |
   * | INITIAL_REQUEST |'INITIAL_REQUEST' |在初始HTTP请求组装完成后拦截。|
   * | REDIRECTION | 'REDIRECTION' |当收到重定向响应时拦截。|
   * | CACHE_CHECKED | 'READ_CACHE' |在检查并且命中HTTP缓存时拦截。|
   * | NETWORK_CONNECT | 'CONNECT_NETWORK' |在网络请求将要发出前拦截。|
   * | FINAL_RESPONSE | 'FINAL_RESPONSE' |在获取最终HTTP响应时拦截。|
   *
   * @syscap SystemCapability.Communication.NetStack
   * @atomicservice
   * @since 22 dynamic
   * @since 26.1.0 static
   */
  export enum InterceptorType {
    /**
     * 在初始HTTP请求组装完成后进行拦截。
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 22 dynamic
     * @since 26.1.0 static
     */
    INITIAL_REQUEST = 'INITIAL_REQUEST',

    /**
     * 在初始HTTP请求组装完成后进行拦截。
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 22 dynamic
     * @since 26.1.0 static
     */
    REDIRECTION = 'REDIRECTION',

    /**
     * Intercept after we checked the HTTP cache.
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 22 dynamic
     * @since 26.1.0 static
     */
    CACHE_CHECKED = 'READ_CACHE',

    /**
     * Intercept when we perform network connection, such as TLS and TCP.
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 22 dynamic
     * @since 26.1.0 static
     */
    NETWORK_CONNECT = 'CONNECT_NETWORK',

    /**
     * Intercept when we get the final HTTP response.
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 22 dynamic
     * @since 26.1.0 static
     */
    FINAL_RESPONSE = 'FINAL_RESPONSE'
  }

  /**
   * HTTP请求上下文数据。该对象实例在拦截器的[interceptorHandle]{@link http.HttpInterceptor.interceptorHandle}方法中作为参数传入，开发者可以通过该对象获取和修改
   * HTTP请求的相关信息。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @atomicservice
   * @since 22 dynamic
   * @since 26.1.0 static
   */
  export interface HttpRequestContext {
    /**
     * The URL of an HTTP request interceptor. It can be modified in an interceptor.
     *
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 22 dynamic
     * @since 26.1.0 static
     */
    url: string;

    /**
     * The header of an HTTP request interceptor. It can be modified in an interceptor.
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 22 dynamic
     * @since 26.1.0 static
     */
    header: Object;

    /**
     * The header of an HTTP request interceptor. It can be modified in an interceptor.
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 22 dynamic
     * @since 26.1.0 static
     */
    body: Object;
  }

  /**
   * 是否继续处理拦截器链。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @atomicservice
   * @since 22 dynamic
   * @since 26.1.0 static
   */
  export type ChainContinue = boolean;

  /**
   * HTTP拦截器接口。用户可以实现此接口来定义拦截处理函数。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @atomicservice
   * @since 22 dynamic
   * @since 26.1.0 static
   */
  export interface HttpInterceptor {
    /**
     * The type of this interceptor. It defines when this intercptor would be called.
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 22 dynamic
     * @since 26.1.0 static
     */
    interceptorType: InterceptorType;

    /**
     * 拦截HTTP处理过程并进行所需的更改。
     *
     * @param { HttpRequestContext } reqContext - the context of the target HTTP request.
     * @param { HttpResponse } rspContext - the context of the target HTTP response.
     * @returns { Promise<ChainContinue> } 继续HTTP处理或终止并返回HTTP响应。
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 22 dynamic
     * @since 26.1.0 static
     */
    interceptorHandle(reqContext: HttpRequestContext, rspContext: HttpResponse): Promise<ChainContinue>;
  }

  /**
   * HTTP拦截器链。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @atomicservice
   * @since 22 dynamic
   * @since 26.1.0 static
   * @class HttpInterceptorChain
   */
  export class HttpInterceptorChain {
    /**
     * 获取当前拦截器链中的所有拦截器实例。
     *
     * @returns { HttpInterceptor[] } 返回通过[addChain]{@link http.HttpInterceptorChain#addChain}方法添加的所有拦截器实例。
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 22 dynamic
     * @since 26.1.0 static
     */
    public getChain(): HttpInterceptor[];

    /**
     * 向HTTP客户端添加拦截器。
     * 
     * > **说明：**
     * >
     * > 拦截器链中不能包含相同类型的拦截器实例。如果传入相同类型的拦截器，会抛出错误码2300802（Duplicated interceptor type in the chain）。
     *
     * @param { HttpInterceptor[] } chain - 拦截器实例组成的拦截链，支持传入单个或者多个不同类型的拦截器。
     * @returns { boolean } 拦截器是否添加成功。true表示拦截器添加成功，false表示拦截器没有添加成功。
     * @throws { BusinessError } 2300801 - Parameter type not supported by the interceptor.
     * @throws { BusinessError } 2300802 - Duplicated interceptor type in the chain.
     * @throws { BusinessError } 2300999 - Internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 22 dynamic
     * @since 26.1.0 static
     */
    public addChain(chain: HttpInterceptor[]): boolean;

    /**
     * 将拦截器链附加到目标HTTP请求。每个HTTP请求实例只能附加一个拦截器链。
     * 
     * > **说明：**
     * >
     * > 将拦截器链附加到[HttpRequest]{@link http.HttpRequest}实例后，当该实例发起HTTP请求时，会触发已附加的拦截器链中相应类型的拦截器。
     * 
     * > 更多使用HTTP请求触发拦截器功能，可以参考[HTTP拦截器功能代码示例](docroot://network/http-request.md#http拦截器)。
     * 
     * > HTTP拦截器相关能力仅支持
     * > [HttpRequest.request]{@link http.HttpRequest.request(url: string, callback: AsyncCallback<HttpResponse>)}接口，目前暂
     * > 不支持
     * > [HttpRequest.requestInStream]{@link http.HttpRequest.requestInStream(url: string, callback: AsyncCallback<int>)}
     * > (流式传输)接口。
     *
     * @param { HttpRequest } httpRequest - 要发起HTTP请求的[HttpRequest]{@link http.HttpRequest}。
     * @returns { boolean } 拦截器是否附加成功。true表示拦截器附加成功，false表示拦截器没有附加成功。
     * @throws { BusinessError } 2300801 - Parameter type not supported by the interceptor.
     * @throws { BusinessError } 2300999 - Internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 22 dynamic
     * @since 26.1.0 static
     */
    public apply(httpRequest: HttpRequest): boolean;
  }

  /**
   * 会话中服务器身份验证设置所使用的身份验证凭据，包括用户名和密码。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export interface Credential {
    /**
     * Username of credential. Default is ''.
     *
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    username: string;
    /**
     * Password of credential. Default is ''.
     *
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    password: string;
  }

  /**
   * TLS加密版本及套件配置。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export interface TlsConfig {
    /**
     * TLS最低版本号。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    tlsVersionMin: TlsVersion;
    /**
     * TLS最高版本号。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    tlsVersionMax: TlsVersion;
    /**
     * 声明加密套件类型的数组。如果没有设置，默认携带全部支持的加密套件类型，加密套件类型参考[TlsV13SpecificCipherSuite]{@link http.TlsV13SpecificCipherSuite}、
     * [TlsV12SpecificCipherSuite]{@link http.TlsV12SpecificCipherSuite}、
     * [TlsV10SpecificCipherSuite]{@link http.TlsV10SpecificCipherSuite}。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    cipherSuites?: CipherSuite[];
  }

  /**
   * TLS1.3及以上版本支持的加密套件。
   *
   * @unionmember { 'TLS_AES_128_GCM_SHA256' } 表示值的类型为字符串，可取'TLS_AES_128_GCM_SHA256'。
   * @unionmember { 'TLS_AES_256_GCM_SHA384' } 表示值的类型为字符串，可取'TLS_AES_256_GCM_SHA384'。
   * @unionmember { 'TLS_CHACHA20_POLY1305_SHA256' } 表示值的类型为字符串，可取'TLS_CHACHA20_POLY1305_SHA256'。
   * @syscap SystemCapability.Communication.NetStack
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export type TlsV13SpecificCipherSuite = 'TLS_AES_128_GCM_SHA256' | 'TLS_AES_256_GCM_SHA384' | 'TLS_CHACHA20_POLY1305_SHA256';

  /**
   * TLS1.2及以上版本支持的加密套件。
   *
   * @unionmember { 'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256' } 表示值的类型为字符串，可取'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256'。
   * @unionmember { 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256' } 表示值的类型为字符串，可取'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256'。
   * @unionmember { 'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384' } 表示值的类型为字符串，可取'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384'。
   * @unionmember { 'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384' } 表示值的类型为字符串，可取'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384'。
   * @unionmember { 'TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256' } 表示值的类型为字符串，可取'TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY13
   *     05_SHA256'。
   * @unionmember { 'TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256' } 表示值的类型为字符串，可取'TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305
   *     _SHA256'。
   * @unionmember { 'TLS_RSA_WITH_AES_128_GCM_SHA256' } 表示值的类型为字符串，可取'TLS_RSA_WITH_AES_128_GCM_SHA256'。
   * @unionmember { 'TLS_RSA_WITH_AES_256_GCM_SHA384' } 表示值的类型为字符串，可取'TLS_RSA_WITH_AES_256_GCM_SHA384'。
   * @syscap SystemCapability.Communication.NetStack
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export type TlsV12SpecificCipherSuite = 'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256' | 'TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256' | 'TLS_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_RSA_WITH_AES_256_GCM_SHA384';

  /**
   * TLS1.0及以上版本支持的加密套件。
   *
   * @unionmember { 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA' } 表示值的类型为字符串，可取'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA'。
   * @unionmember { 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA' } 表示值的类型为字符串，可取'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA'。
   * @unionmember { 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA' } 表示值的类型为字符串，可取'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA'。
   * @unionmember { 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA' } 表示值的类型为字符串，可取'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA'。
   * @unionmember { 'TLS_RSA_WITH_AES_128_CBC_SHA' } 表示值的类型为字符串，可取'TLS_RSA_WITH_AES_128_CBC_SHA'。
   * @unionmember { 'TLS_RSA_WITH_AES_256_CBC_SHA' } 表示值的类型为字符串，可取'TLS_RSA_WITH_AES_256_CBC_SHA'。
   * @unionmember { 'TLS_RSA_WITH_3DES_EDE_CBC_SHA' } 表示值的类型为字符串，可取'TLS_RSA_WITH_3DES_EDE_CBC_SHA'。
   * @syscap SystemCapability.Communication.NetStack
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export type TlsV10SpecificCipherSuite = 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA' | 'TLS_RSA_WITH_AES_256_CBC_SHA' | 'TLS_RSA_WITH_3DES_EDE_CBC_SHA';

  /**
   * 加密套件声明函数。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export type CipherSuite = TlsV13CipherSuite;

  /**
   * TLS1.3的加密套件声明函数，支持TLS1.3版本，兼容TLS1.2版本。
   *
   * @unionmember { TlsV12CipherSuite } 表示值的类型为[TlsV11CipherSuite]{@link http.TlsV11CipherSuite}。
   * @unionmember { TlsV13SpecificCipherSuite } 表示值的类型为[TlsV13SpecificCipherSuite]{@link http.TlsV13SpecificCipherSuite}
   *     。
   * @syscap SystemCapability.Communication.NetStack
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export type TlsV13CipherSuite = TlsV12CipherSuite | TlsV13SpecificCipherSuite;

  /**
   * TLS1.2的加密套件声明函数，支持TLS1.2版本，兼容TLS1.1版本。
   *
   * @unionmember { TlsV11CipherSuite } 表示值的类型为[TlsV11CipherSuite]{@link http.TlsV11CipherSuite}。
   * @unionmember { TlsV12SpecificCipherSuite } 表示值的类型为[TlsV12SpecificCipherSuite]{@link http.TlsV12SpecificCipherSuite}
   *     。
   * @syscap SystemCapability.Communication.NetStack
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export type TlsV12CipherSuite = TlsV11CipherSuite | TlsV12SpecificCipherSuite;

  /**
   * TLS1.1的加密套件声明函数，与TLS1.0的加密套件相同。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export type TlsV11CipherSuite = TlsV10CipherSuite;

  /**
   * TLS1.0的加密套件声明函数。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export type TlsV10CipherSuite = TlsV10SpecificCipherSuite;

  /**
   * 枚举，TLS版本号。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export enum TlsVersion {
    /**
     * TLS版本号1.0。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    TLS_V_1_0 = 4,

    /**
     * TLS版本号1.1。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    TLS_V_1_1 = 5,

    /**
     * TLS版本号1.2。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    TLS_V_1_2 = 6,

    /**
     * TLS版本号1.3。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    TLS_V_1_3 = 7
  }

  /**
   * 多部分表单数据的类型。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  export interface MultiFormData {
    /**
     * 数据名称。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 数据类型，如'text/plain'，'image/png', 'image/jpeg', 'audio/mpeg', 'video/mp4'等。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    contentType: string;

    /**
     * 上传到服务器保存为文件的名称。
     * 
     * **说明**：指定该字段后，请求头中会添加filename字段，表示上传到服务器文件的名称。
     * 
     * （1）当上传数据为文件时，若通过data字段指定文件内容，通常需要设置remoteFileName字段，用以指定上传到服务器文件的名称（实际结果与服务器具体行为有关）；若通过filePath字段指定文件路径，请求头中会自动添加
     * filename字段，其默认值为filePath中的文件名称，如需特殊指定，也可通过本字段对filename重新设置。
     * 
     * （2）当上传数据为二进制格式时，则必须设置remoteFileName字段。
     * 
     * （3）当使用filePath上传文件时，设置remoteFileName字段会影响文件传输方式。若设置了remoteFileName，系统会先尝试将文件完整读入内存后再发送；若未设置remoteFileName，系统会使用流式
     * 传输方式直接从文件读取并发送数据。对于大文件（如超过100MB）的上传场景，建议不设置remoteFileName，使用系统默认的流式传输方式，避免内存占用过高。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    remoteFileName?: string;

    /**
     * 表单数据内容。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    data?: string | Object | ArrayBuffer;

    /**
     * This parameter sets a mime part's body content from memory data.
     * @syscap SystemCapability.Communication.NetStack
     * @since 26.1.0 static
     */
    data?: string | RecordData | ArrayBuffer;

    /**
     * 此参数将文件路径指向的文件内容设置为表单数据，如果未指定data内容，则必须设置filePath。
     * 
     * **说明**：需传入文件管理模块支持的格式，可以通过文件管理的[access]{@link @ohos.file.fs:access}接口，验证文件是否存在且可访问。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    filePath?: string;
  }

  /**
   * 枚举，证书类型。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  export enum CertType {
    /**
     * 证书类型PEM。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    PEM = 'PEM',

    /**
     * 证书类型DER。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    DER = 'DER',

    /**
     * 证书类型P12。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    P12 = 'P12'
  }

  /**
   * 枚举，解析目标域名时限定的地址类型。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @since 15 dynamic
   * @since 26.1.0 static
   */
  export enum AddressFamily {
    /**
     * 设置此选项后，系统将自行选择目标域名的IPv4地址或IPv6地址。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @since 15 dynamic
     * @since 26.1.0 static
     */
    DEFAULT = 'CURL_IPRESOLVE_WHATEVER',

    /**
     * 设置此选项后，系统仅解析目标域名的IPv4地址，忽略IPv6地址。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @since 15 dynamic
     * @since 26.1.0 static
     */
    ONLY_V4 = 'CURL_IPRESOLVE_V4',

    /**
     * 设置此选项后，系统仅解析目标域名的IPv6地址，忽略IPv4地址。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @since 15 dynamic
     * @since 26.1.0 static
     */
    ONLY_V6 = 'CURL_IPRESOLVE_V6'
  }

  /**
   * 客户端证书类型。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  export interface ClientCert {
    /**
     * 证书路径。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    certPath: string;

    /**
     * 证书类型，默认是PEM。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    certType?: CertType;

    /**
     * 证书密钥的路径。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    keyPath: string;

    /**
     * 证书密钥的密码。默认值为空字符串。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    keyPassword?: string;
  }

  /**
   * 由应用配置的证书。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @since 12 dynamic
   * @since 26.1.0 static
   */
  interface CertificatePinning {
    /**
     * 字符串类型的证书PIN码。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @since 12 dynamic
     * @since 26.1.0 static
     */
    publicKeyHash: string;
    /**
     * 加密算法，当前仅支持该算法。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @since 12 dynamic
     * @since 26.1.0 static
     */
    hashAlgorithm: 'SHA-256';
  }

  /**
   * HTTP请求任务。在调用HttpRequest的方法前，需要先通过[createHttp()]{@link http.createHttp}创建一个任务。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  export interface HttpRequest {
    /**
     * 根据URL地址，发起HTTP网络请求，使用callback方式作为异步方法。
     * 
     * > **说明：**
     * >
     * > (1) 此接口仅支持接收5MB以内的数据，如果需要接收超过5MB的数据，则需主动在[HttpRequestOptions]{@link http.HttpRequestOptions}的maxLimit中进行设置，或者使用
     * > [requestInStream]{@link http.HttpRequest.requestInStream(url: string, callback: AsyncCallback<int>)}接口发起流式请求。自
     * > API version 23开始，本接口支持的最大接收数据量为50MB，API version 23之前仍为5MB，超过5MB会接收失败。
     * 
     * > (2) 如需传入cookies，请开发者自行在参数options中添加。
     * 
     * > (3) 若URL包含中文或其他语言，需先调用encodeURL(URL)编码，再发起请求。
     *
     * @permission ohos.permission.INTERNET
     * @param { string } url - 发起网络请求的URL地址。示例：https://www.test.com
     * @param { AsyncCallback<HttpResponse> } callback - 回调函数。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2300001 - Unsupported protocol.
     * @throws { BusinessError } 2300003 - Invalid URL format or missing URL.
     * @throws { BusinessError } 2300005 - Failed to resolve the proxy name.
     * @throws { BusinessError } 2300006 - Failed to resolve the host name.
     * @throws { BusinessError } 2300007 - Failed to connect to the server.
     * @throws { BusinessError } 2300008 - Invalid server response.
     * @throws { BusinessError } 2300009 - Access to the remote resource denied.
     * @throws { BusinessError } 2300016 - Error in the HTTP2 framing layer.
     * @throws { BusinessError } 2300018 - Transferred a partial file.
     * @throws { BusinessError } 2300023 - Failed to write the received data to the disk or application.
     * @throws { BusinessError } 2300025 - Upload failed.
     * @throws { BusinessError } 2300026 - Failed to open or read local data from the file or application.
     * @throws { BusinessError } 2300027 - Out of memory.
     * @throws { BusinessError } 2300028 - Operation timeout.
     * @throws { BusinessError } 2300047 - The number of redirections reaches the maximum allowed.
     * @throws { BusinessError } 2300052 - The server returned nothing (no header or data).
     * @throws { BusinessError } 2300055 - Failed to send data to the peer.
     * @throws { BusinessError } 2300056 - Failed to receive data from the peer.
     * @throws { BusinessError } 2300058 - Local SSL certificate error.
     * @throws { BusinessError } 2300059 - The specified SSL cipher cannot be used.
     * @throws { BusinessError } 2300060 - Invalid SSL peer certificate or SSH remote key.
     * @throws { BusinessError } 2300061 - Invalid HTTP encoding format.
     * @throws { BusinessError } 2300063 - Maximum file size exceeded.
     * @throws { BusinessError } 2300070 - Remote disk full.
     * @throws { BusinessError } 2300073 - Remote file already exists.
     * @throws { BusinessError } 2300077 - The SSL CA certificate does not exist or is inaccessible.
     * @throws { BusinessError } 2300078 - Remote file not found.
     * @throws { BusinessError } 2300094 - Authentication error.
     * @throws { BusinessError } 2300999 - Internal error.
     * @throws { BusinessError } 2300998 - It is not allowed to access this domain. [since 12]
     * @throws { BusinessError } 2300997 - Cleartext traffic not permitted. [since 18]
     * @throws { BusinessError } 2300996 - The request was intercepted by the HTTP global
     *     interceptor. [since 26.0.0]
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    request(url: string, callback: AsyncCallback<HttpResponse>): void;

    /**
     * 根据URL地址和相关配置项，发起HTTP网络请求，使用callback方式作为异步方法。
     * 
     * > **说明：**
     * >
     * > (1) 此接口仅支持接收5MB以内的数据，如果需要接收超过5MB的数据，则需主动在[HttpRequestOptions]{@link http.HttpRequestOptions}的maxLimit中进行设置，或者使用
     * > [requestInStream]{@link http.HttpRequest.requestInStream(url: string, callback: AsyncCallback<int>)}接口发起流式请求。自
     * > API version 23开始，本接口支持的最大接收数据量为50MB，API version 23之前仍为5MB，超过5MB会接收失败。
     * 
     * > (2) 如需传入cookies，请开发者自行在参数options中添加。
     * 
     * > (3) 若URL包含中文或其他语言，需先调用encodeURL(URL)编码，再发起请求。
     *
     * @permission ohos.permission.INTERNET
     * @param { string } url - 发起网络请求的URL地址。
     * @param { HttpRequestOptions } options - 参考[HttpRequestOptions]{@link http.HttpRequestOptions}。
     * @param { AsyncCallback<HttpResponse> } callback - 回调函数。当请求成功时，回调内容是[HttpResponse]{@link http.HttpResponse} ，请求失败时
     *     为undefined。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2300001 - Unsupported protocol.
     * @throws { BusinessError } 2300003 - Invalid URL format or missing URL.
     * @throws { BusinessError } 2300005 - Failed to resolve the proxy name.
     * @throws { BusinessError } 2300006 - Failed to resolve the host name.
     * @throws { BusinessError } 2300007 - Failed to connect to the server.
     * @throws { BusinessError } 2300008 - Invalid server response.
     * @throws { BusinessError } 2300009 - Access to the remote resource denied.
     * @throws { BusinessError } 2300016 - Error in the HTTP2 framing layer.
     * @throws { BusinessError } 2300018 - Transferred a partial file.
     * @throws { BusinessError } 2300023 - Failed to write the received data to the disk or application.
     * @throws { BusinessError } 2300025 - Upload failed.
     * @throws { BusinessError } 2300026 - Failed to open or read local data from the file or application.
     * @throws { BusinessError } 2300027 - Out of memory.
     * @throws { BusinessError } 2300028 - Operation timeout.
     * @throws { BusinessError } 2300047 - The number of redirections reaches the maximum allowed.
     * @throws { BusinessError } 2300052 - The server returned nothing (no header or data).
     * @throws { BusinessError } 2300055 - Failed to send data to the peer.
     * @throws { BusinessError } 2300056 - Failed to receive data from the peer.
     * @throws { BusinessError } 2300058 - Local SSL certificate error.
     * @throws { BusinessError } 2300059 - The specified SSL cipher cannot be used.
     * @throws { BusinessError } 2300060 - Invalid SSL peer certificate or SSH remote key.
     * @throws { BusinessError } 2300061 - Invalid HTTP encoding format.
     * @throws { BusinessError } 2300063 - Maximum file size exceeded.
     * @throws { BusinessError } 2300070 - Remote disk full.
     * @throws { BusinessError } 2300073 - Remote file already exists.
     * @throws { BusinessError } 2300077 - The SSL CA certificate does not exist or is inaccessible.
     * @throws { BusinessError } 2300078 - Remote file not found.
     * @throws { BusinessError } 2300094 - Authentication error.
     * @throws { BusinessError } 2300999 - Internal error.
     * @throws { BusinessError } 2300998 - It is not allowed to access this domain. [since 12]
     * @throws { BusinessError } 2300997 - Cleartext traffic not permitted. [since 18]
     * @throws { BusinessError } 2300996 - The request was intercepted by the HTTP global
     *     interceptor. [since 26.0.0]
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    request(url: string, options: HttpRequestOptions, callback: AsyncCallback<HttpResponse>): void;

    /**
     * 根据URL地址，发起HTTP网络请求，使用Promise方式作为异步方法。
     * 
     * > **说明：**
     * >
     * > (1) 此接口仅支持接收5MB以内的数据，如果需要接收超过5MB的数据，则需主动在[HttpRequestOptions]{@link http.HttpRequestOptions}的maxLimit中进行设置，或者使用
     * > [requestInStream]{@link http.HttpRequest.requestInStream(url: string, callback: AsyncCallback<int>)}接口发起流式请求。自
     * > API version 23开始，本接口支持的最大接收数据量为50MB，API version 23之前仍为5MB，超过5MB会接收失败。
     * 
     * > (2) 如需传入cookies，请开发者自行在参数options中添加。
     * 
     * > (3) 若URL包含中文或其他语言，需先调用encodeURL(URL)编码，再发起请求。
     *
     * @permission ohos.permission.INTERNET
     * @param { string } url - 发起网络请求的URL地址。
     * @param { HttpRequestOptions } [options] - 参考[HttpRequestOptions]{@link http.HttpRequestOptions}。
     * @returns { Promise<HttpResponse> } Promise对象，返回请求的响应结果。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2300001 - Unsupported protocol.
     * @throws { BusinessError } 2300003 - Invalid URL format or missing URL.
     * @throws { BusinessError } 2300005 - Failed to resolve the proxy name.
     * @throws { BusinessError } 2300006 - Failed to resolve the host name.
     * @throws { BusinessError } 2300007 - Failed to connect to the server.
     * @throws { BusinessError } 2300008 - Invalid server response.
     * @throws { BusinessError } 2300009 - Access to the remote resource denied.
     * @throws { BusinessError } 2300016 - Error in the HTTP2 framing layer.
     * @throws { BusinessError } 2300018 - Transferred a partial file.
     * @throws { BusinessError } 2300023 - Failed to write the received data to the disk or application.
     * @throws { BusinessError } 2300025 - Upload failed.
     * @throws { BusinessError } 2300026 - Failed to open or read local data from the file or application.
     * @throws { BusinessError } 2300027 - Out of memory.
     * @throws { BusinessError } 2300028 - Operation timeout.
     * @throws { BusinessError } 2300047 - The number of redirections reaches the maximum allowed.
     * @throws { BusinessError } 2300052 - The server returned nothing (no header or data).
     * @throws { BusinessError } 2300055 - Failed to send data to the peer.
     * @throws { BusinessError } 2300056 - Failed to receive data from the peer.
     * @throws { BusinessError } 2300058 - Local SSL certificate error.
     * @throws { BusinessError } 2300059 - The specified SSL cipher cannot be used.
     * @throws { BusinessError } 2300060 - Invalid SSL peer certificate or SSH remote key.
     * @throws { BusinessError } 2300061 - Invalid HTTP encoding format.
     * @throws { BusinessError } 2300063 - Maximum file size exceeded.
     * @throws { BusinessError } 2300070 - Remote disk full.
     * @throws { BusinessError } 2300073 - Remote file already exists.
     * @throws { BusinessError } 2300077 - The SSL CA certificate does not exist or is inaccessible.
     * @throws { BusinessError } 2300078 - Remote file not found.
     * @throws { BusinessError } 2300094 - Authentication error.
     * @throws { BusinessError } 2300999 - Internal error.
     * @throws { BusinessError } 2300998 - It is not allowed to access this domain. [since 12]
     * @throws { BusinessError } 2300997 - Cleartext traffic not permitted. [since 18]
     * @throws { BusinessError } 2300996 - The request was intercepted by the HTTP global
     *     interceptor. [since 26.0.0]
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    request(url: string, options?: HttpRequestOptions): Promise<HttpResponse>;

    /**
     * 根据URL地址、相关配置项（可选），发起HTTP网络请求，同步返回响应结果。
     * 
     * > **说明：**
     * >
     * > (1) 此接口仅支持接收50MB以内的数据，如果需要接收超过50MB的数据，则需主动在[HttpRequestOptions]{@link http.HttpRequestOptions}的maxLimit中进行设置。
     * 
     * > (2) 如需传入cookies，请开发者自行在参数options中添加。
     * 
     * > (3) 若URL包含中文或其他语言，需先调用encodeURL(URL)编码，再发起请求。
     * 
     * > (4) 此接口为同步接口，会阻塞当前线程直到返回HTTP请求响应结果或错误码。
     *
     * @permission ohos.permission.INTERNET
     * @param { string } url - 发起网络请求的URL地址。
     * @param { HttpRequestOptions } [options] - 参考[HttpRequestOptions]{@link http.HttpRequestOptions}。
     * @returns { HttpResponse } 同步返回HTTP请求响应结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2300001 - Unsupported protocol.
     * @throws { BusinessError } 2300003 - Invalid URL format or missing URL.
     * @throws { BusinessError } 2300005 - Failed to resolve the proxy name.
     * @throws { BusinessError } 2300006 - Failed to resolve the host name.
     * @throws { BusinessError } 2300007 - Failed to connect to the server.
     * @throws { BusinessError } 2300008 - Invalid server response.
     * @throws { BusinessError } 2300009 - Access to the remote resource denied.
     * @throws { BusinessError } 2300016 - Error in the HTTP2 framing layer.
     * @throws { BusinessError } 2300018 - Transferred a partial file.
     * @throws { BusinessError } 2300023 - Failed to write the received data to the disk or application.
     * @throws { BusinessError } 2300025 - Upload failed.
     * @throws { BusinessError } 2300026 - Failed to open or read local data from the file or application.
     * @throws { BusinessError } 2300027 - Out of memory.
     * @throws { BusinessError } 2300028 - Operation timeout.
     * @throws { BusinessError } 2300047 - The number of redirections reaches the maximum allowed.
     * @throws { BusinessError } 2300052 - The server returned nothing (no header or data).
     * @throws { BusinessError } 2300055 - Failed to send data to the peer.
     * @throws { BusinessError } 2300056 - Failed to receive data from the peer.
     * @throws { BusinessError } 2300058 - Local SSL certificate error.
     * @throws { BusinessError } 2300059 - The specified SSL cipher cannot be used.
     * @throws { BusinessError } 2300060 - Invalid SSL peer certificate or SSH remote key.
     * @throws { BusinessError } 2300061 - Invalid HTTP encoding format.
     * @throws { BusinessError } 2300063 - Maximum file size exceeded.
     * @throws { BusinessError } 2300070 - Remote disk full.
     * @throws { BusinessError } 2300073 - Remote file already exists.
     * @throws { BusinessError } 2300077 - The SSL CA certificate does not exist or is inaccessible.
     * @throws { BusinessError } 2300078 - Remote file not found.
     * @throws { BusinessError } 2300094 - Authentication error.
     * @throws { BusinessError } 2300996 - The request was intercepted by the HTTP global interceptor.
     * @throws { BusinessError } 2300997 - Cleartext traffic not permitted.
     * @throws { BusinessError } 2300998 - It is not allowed to access this domain.
     * @throws { BusinessError } 2300999 - Internal error.
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 dynamic&static
     */
    requestSync(url: string, options?: HttpRequestOptions): HttpResponse;

    /**
     * 根据URL地址，发起HTTP网络请求并返回流式响应，使用callback方式作为异步方法。
     *
     * @permission ohos.permission.INTERNET
     * @param { string } url - 发起网络请求的URL地址。
     * @param { AsyncCallback<int> } callback - 回调函数。当请求成功，err为undefined，返回HTTP请求响应错误码，具体含义见
     *     [ResponseCode]{@link http.ResponseCode}；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2300001 - Unsupported protocol.
     * @throws { BusinessError } 2300003 - Invalid URL format or missing URL.
     * @throws { BusinessError } 2300005 - Failed to resolve the proxy name.
     * @throws { BusinessError } 2300006 - Failed to resolve the host name.
     * @throws { BusinessError } 2300007 - Failed to connect to the server.
     * @throws { BusinessError } 2300008 - Invalid server response.
     * @throws { BusinessError } 2300009 - Access to the remote resource denied.
     * @throws { BusinessError } 2300016 - Error in the HTTP2 framing layer.
     * @throws { BusinessError } 2300018 - Transferred a partial file.
     * @throws { BusinessError } 2300023 - Failed to write the received data to the disk or application.
     * @throws { BusinessError } 2300025 - Upload failed.
     * @throws { BusinessError } 2300026 - Failed to open or read local data from the file or application.
     * @throws { BusinessError } 2300027 - Out of memory.
     * @throws { BusinessError } 2300028 - Operation timeout.
     * @throws { BusinessError } 2300047 - The number of redirections reaches the maximum allowed.
     * @throws { BusinessError } 2300052 - The server returned nothing (no header or data).
     * @throws { BusinessError } 2300055 - Failed to send data to the peer.
     * @throws { BusinessError } 2300056 - Failed to receive data from the peer.
     * @throws { BusinessError } 2300058 - Local SSL certificate error.
     * @throws { BusinessError } 2300059 - The specified SSL cipher cannot be used.
     * @throws { BusinessError } 2300060 - Invalid SSL peer certificate or SSH remote key.
     * @throws { BusinessError } 2300061 - Invalid HTTP encoding format.
     * @throws { BusinessError } 2300063 - Maximum file size exceeded.
     * @throws { BusinessError } 2300070 - Remote disk full.
     * @throws { BusinessError } 2300073 - Remote file already exists.
     * @throws { BusinessError } 2300077 - The SSL CA certificate does not exist or is inaccessible.
     * @throws { BusinessError } 2300078 - Remote file not found.
     * @throws { BusinessError } 2300094 - Authentication error.
     * @throws { BusinessError } 2300999 - Internal error.
     * @throws { BusinessError } 2300998 - It is not allowed to access this domain. [since 12]
     * @throws { BusinessError } 2300997 - Cleartext traffic not permitted. [since 18]
     * @throws { BusinessError } 2300996 - The request was intercepted by the HTTP global
     *     interceptor. [since 26.0.0 dynamic, 26.1.0 static]
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 18]
     * @atomicservice [since 15]
     * @since 10 dynamic
     * @since 26.1.0 static
     */
    requestInStream(url: string, callback: AsyncCallback<int>): void;

    /**
     * 根据URL地址和相关配置项，发起HTTP网络请求并返回流式响应，使用callback方式作为异步方法。
     *
     * @permission ohos.permission.INTERNET
     * @param { string } url - 发起网络请求的URL地址。
     * @param { HttpRequestOptions } options - 参考[HttpRequestOptions]{@link http.HttpRequestOptions}。
     * @param { AsyncCallback<int> } callback - 回调函数。当请求成功，err为undefined，返回HTTP请求响应错误码，具体含义见
     *     [ResponseCode]{@link http.ResponseCode}；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2300001 - Unsupported protocol.
     * @throws { BusinessError } 2300003 - Invalid URL format or missing URL.
     * @throws { BusinessError } 2300005 - Failed to resolve the proxy name.
     * @throws { BusinessError } 2300006 - Failed to resolve the host name.
     * @throws { BusinessError } 2300007 - Failed to connect to the server.
     * @throws { BusinessError } 2300008 - Invalid server response.
     * @throws { BusinessError } 2300009 - Access to the remote resource denied.
     * @throws { BusinessError } 2300016 - Error in the HTTP2 framing layer.
     * @throws { BusinessError } 2300018 - Transferred a partial file.
     * @throws { BusinessError } 2300023 - Failed to write the received data to the disk or application.
     * @throws { BusinessError } 2300025 - Upload failed.
     * @throws { BusinessError } 2300026 - Failed to open or read local data from the file or application.
     * @throws { BusinessError } 2300027 - Out of memory.
     * @throws { BusinessError } 2300028 - Operation timeout.
     * @throws { BusinessError } 2300047 - The number of redirections reaches the maximum allowed.
     * @throws { BusinessError } 2300052 - The server returned nothing (no header or data).
     * @throws { BusinessError } 2300055 - Failed to send data to the peer.
     * @throws { BusinessError } 2300056 - Failed to receive data from the peer.
     * @throws { BusinessError } 2300058 - Local SSL certificate error.
     * @throws { BusinessError } 2300059 - The specified SSL cipher cannot be used.
     * @throws { BusinessError } 2300060 - Invalid SSL peer certificate or SSH remote key.
     * @throws { BusinessError } 2300061 - Invalid HTTP encoding format.
     * @throws { BusinessError } 2300063 - Maximum file size exceeded.
     * @throws { BusinessError } 2300070 - Remote disk full.
     * @throws { BusinessError } 2300073 - Remote file already exists.
     * @throws { BusinessError } 2300077 - The SSL CA certificate does not exist or is inaccessible.
     * @throws { BusinessError } 2300078 - Remote file not found.
     * @throws { BusinessError } 2300094 - Authentication error.
     * @throws { BusinessError } 2300999 - Internal error.
     * @throws { BusinessError } 2300998 - It is not allowed to access this domain. [since 12]
     * @throws { BusinessError } 2300997 - Cleartext traffic not permitted. [since 18]
     * @throws { BusinessError } 2300996 - The request was intercepted by the HTTP global
     *     interceptor. [since 26.0.0 dynamic, 26.1.0 static]
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 18]
     * @atomicservice [since 15]
     * @since 10 dynamic
     * @since 26.1.0 static
     */
    requestInStream(url: string, options: HttpRequestOptions, callback: AsyncCallback<int>): void;

    /**
     * 根据URL地址，发起HTTP网络请求并返回流式响应，使用Promise方式作为异步方法。
     *
     * @permission ohos.permission.INTERNET
     * @param { string } url - 发起网络请求的URL地址。
     * @param { HttpRequestOptions } [options] - 参考[HttpRequestOptions]{@link http.HttpRequestOptions}。
     * @returns { Promise<int> } 以Promise形式返回发起请求的结果，具体含义见[ResponseCode]{@link http.ResponseCode}。
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 2300001 - Unsupported protocol.
     * @throws { BusinessError } 2300003 - Invalid URL format or missing URL.
     * @throws { BusinessError } 2300005 - Failed to resolve the proxy name.
     * @throws { BusinessError } 2300006 - Failed to resolve the host name.
     * @throws { BusinessError } 2300007 - Failed to connect to the server.
     * @throws { BusinessError } 2300008 - Invalid server response.
     * @throws { BusinessError } 2300009 - Access to the remote resource denied.
     * @throws { BusinessError } 2300016 - Error in the HTTP2 framing layer.
     * @throws { BusinessError } 2300018 - Transferred a partial file.
     * @throws { BusinessError } 2300023 - Failed to write the received data to the disk or application.
     * @throws { BusinessError } 2300025 - Upload failed.
     * @throws { BusinessError } 2300026 - Failed to open or read local data from the file or application.
     * @throws { BusinessError } 2300027 - Out of memory.
     * @throws { BusinessError } 2300028 - Operation timeout.
     * @throws { BusinessError } 2300047 - The number of redirections reaches the maximum allowed.
     * @throws { BusinessError } 2300052 - The server returned nothing (no header or data).
     * @throws { BusinessError } 2300055 - Failed to send data to the peer.
     * @throws { BusinessError } 2300056 - Failed to receive data from the peer.
     * @throws { BusinessError } 2300058 - Local SSL certificate error.
     * @throws { BusinessError } 2300059 - The specified SSL cipher cannot be used.
     * @throws { BusinessError } 2300060 - Invalid SSL peer certificate or SSH remote key.
     * @throws { BusinessError } 2300061 - Invalid HTTP encoding format.
     * @throws { BusinessError } 2300063 - Maximum file size exceeded.
     * @throws { BusinessError } 2300070 - Remote disk full.
     * @throws { BusinessError } 2300073 - Remote file already exists.
     * @throws { BusinessError } 2300077 - The SSL CA certificate does not exist or is inaccessible.
     * @throws { BusinessError } 2300078 - Remote file not found.
     * @throws { BusinessError } 2300094 - Authentication error.
     * @throws { BusinessError } 2300999 - Internal error.
     * @throws { BusinessError } 2300998 - It is not allowed to access this domain. [since 12]
     * @throws { BusinessError } 2300997 - Cleartext traffic not permitted. [since 18]
     * @throws { BusinessError } 2300996 - The request was intercepted by the HTTP global
     *     interceptor. [since 26.0.0 dynamic, 26.1.0 static]
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 18]
     * @atomicservice [since 15]
     * @since 10 dynamic
     * @since 26.1.0 static
     */
    requestInStream(url: string, options?: HttpRequestOptions): Promise<int>;

    /**
     * 终止HTTP请求任务，同时释放系统资源。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    destroy(): void;

    /**
     * 订阅HTTP Response Header 事件。
     *
     * @param { "headerReceive" } type - 订阅的事件类型，'headerReceive'。
     * @param { AsyncCallback<Object> } callback - 回调函数。当订阅成功，error为undefined，data为获取到HTTP响应头；否则为错误对象。
     * @syscap SystemCapability.Communication.NetStack
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead on_headersReceive
     */
    on(type: "headerReceive", callback: AsyncCallback<Object>): void;

    /**
     * 取消订阅HTTP Response Header事件。
     *
     * @param { "headerReceive" } type - 取消订阅的事件类型，'headerReceive'。
     * @param { AsyncCallback<Object> } [callback] - 回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。
     * @syscap SystemCapability.Communication.NetStack
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead off_headersReceive
     */
    off(type: "headerReceive", callback?: AsyncCallback<Object>): void;

    /**
     * 订阅HTTP Response Header 事件。
     *
     * @param { "headersReceive" } type - 订阅的事件类型：'headersReceive'。
     * @param { Callback<Object> } callback - 回调函数，返回HTTP响应头对象。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    on(type: "headersReceive", callback: Callback<Object>): void;

    /**
     * 订阅HTTP Response Header事件。
     *
     * @param { Callback<Record<string, string>> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 static
     */
    onHeadersReceive(callback: Callback<Record<string, string>>): void;

    /**
     * 取消订阅HTTP Response Header 事件。
     *
     * @param { "headersReceive" } type - 取消订阅的事件类型：'headersReceive'。
     * @param { Callback<Object> } callback - 回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。 [since 8 - 10]
     * @param { Callback<Object> } [callback] - 回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。 [since 11]
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    off(type: "headersReceive", callback?: Callback<Object>): void;

    /**
     * 取消订阅HTTP Response Header事件。
     *
     * @param { Callback<Record<string, string>> } [callback] - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 static
     */
    offHeadersReceive(callback?: Callback<Record<string, string>>): void;

    /**
     * 订阅HTTP Response Header 事件，只能触发一次。触发之后，订阅器就会被移除。使用callback方式作为异步方法。
     *
     * @param { "headersReceive" } type - 订阅事件，固定为'headersReceive'。headersReceive：响应头接收事件。
     * @param { Callback<Object> } callback - 回调函数。返回HTTP响应头对象。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 15]
     * @since 8 dynamic
     */
    once(type: "headersReceive", callback: Callback<Object>): void;

    /**
     * 订阅一次性HTTP Response Header事件。
     *
     * @param { Callback<Record<string, string>> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 static
     */
    onceHeadersReceive(callback: Callback<Record<string, string>>): void;

    /**
     * 订阅HTTP流式响应数据接收事件。
     *
     * @param { "dataReceive" } type - 订阅的事件类型，'dataReceive'。
     * @param { Callback<ArrayBuffer> } callback - 回调函数。当订阅成功时，err为undefined，data为获取到的HTTP流式数据接收数据，类型为ArrayBuffer；否则为错误对
     *     象。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 18]
     * @atomicservice [since 15]
     * @since 10 dynamic
     */
    on(type: "dataReceive", callback: Callback<ArrayBuffer>): void;

    /**
     * 订阅持续接收HTTP响应数据事件。
     *
     * @param { Callback<ArrayBuffer> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 static
     */
    onDataReceive(callback: Callback<ArrayBuffer>): void;

    /**
     * 取消订阅HTTP流式响应数据接收事件。
     *
     * @param { "dataReceive" } type - 取消订阅的事件类型：'dataReceive'。
     * @param { Callback<ArrayBuffer> } [callback] - 回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 18]
     * @atomicservice [since 15]
     * @since 10 dynamic
     */
    off(type: "dataReceive", callback?: Callback<ArrayBuffer>): void;

    /**
     * 取消订阅持续接收HTTP响应数据事件。
     *
     * @param { Callback<ArrayBuffer> } [callback] - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 static
     */
    offDataReceive(callback?: Callback<ArrayBuffer>): void;

    /**
     * 订阅HTTP流式响应数据接收完毕事件。
     *
     * @param { "dataEnd" } type - 订阅的事件类型，'dataEnd'。
     * @param { Callback<void> } callback - 回调函数。当订阅成功时，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 18]
     * @atomicservice [since 15]
     * @since 10 dynamic
     */
    on(type: "dataEnd", callback: Callback<void>): void;

    /**
     * 订阅HTTP响应数据接收结束事件。
     *
     * @param { Callback<void> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 static
     */
    onDataEnd(callback: Callback<void>): void;

    /**
     * 取消订阅HTTP流式响应数据接收完毕事件。
     *
     * @param { "dataEnd" } type - 取消订阅的事件类型：'dataEnd'。
     * @param { Callback<void> } [callback] - 回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 18]
     * @atomicservice [since 15]
     * @since 10 dynamic
     */
    off(type: "dataEnd", callback?: Callback<void>): void;

    /**
     * 取消订阅HTTP响应数据接收结束事件。
     *
     * @param { Callback<void> } [callback] - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 static
     */
    offDataEnd(callback?: Callback<void>): void;

    /**
     * 订阅HTTP流式响应数据接收进度事件。
     *
     * @param { 'dataReceiveProgress' } type - 订阅的事件类型，'dataReceiveProgress'。
     * @param { Callback<{ receiveSize: int, totalSize: int }> } callback - Callback used to return the result. If the
     *     operation is successful, the callback content is a
     *     [DataReceiveProgressInfo]{@link http.DataReceiveProgressInfo} object; otherwise, the callback content is
     *     **undefined**. [since 10 - 10]
     * @param { Callback<DataReceiveProgressInfo> } callback - 回调函数。当订阅成功时，回调内容是
     *     [DataReceiveProgressInfo]{@link http.DataReceiveProgressInfo}，订阅失败时为undefined。 [since 11]
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @atomicservice [since 15]
     * @since 10 dynamic
     */
    on(type: 'dataReceiveProgress', callback: Callback<DataReceiveProgressInfo>): void;

    /**
     * 订阅HTTP响应数据接收进度事件。
     *
     * @param { Callback<DataReceiveProgressInfo> } callback - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 static
     */
    onDataReceiveProgress(callback: Callback<DataReceiveProgressInfo>): void;

    /**
     * 取消订阅HTTP流式响应数据接收进度事件。
     *
     * @param { 'dataReceiveProgress' } type - 取消订阅的事件类型：'dataReceiveProgress'。
     * @param { Callback<{ receiveSize: int, totalSize: int }> } [callback] - 回调函数。 可以指定传入on中的callback取消对应的订阅，也可以不指定
     *     callback清空所有订阅。 [since 10 - 10]
     * @param { Callback<DataReceiveProgressInfo> } callback - 回调函数。 可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订
     *     阅。 [since 11]
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @atomicservice [since 15]
     * @since 10 dynamic
     */
    off(type: 'dataReceiveProgress', callback?: Callback<DataReceiveProgressInfo>): void;

    /**
     * 取消订阅HTTP响应数据接收进度事件。
     *
     * @param { Callback<DataReceiveProgressInfo> } [callback] - the callback used to return the result.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 static
     */
    offDataReceiveProgress(callback?: Callback<DataReceiveProgressInfo>): void;

    /**
     * 订阅HTTP网络请求数据发送进度事件。
     *
     * @param { 'dataSendProgress' } type - 订阅的事件类型，'dataSendProgress'。
     * @param { Callback<DataSendProgressInfo> } callback - 回调函数。当订阅成功时，回调内容是
     *     [DataSendProgressInfo]{@link http.DataSendProgressInfo}，订阅失败时为undefined。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @atomicservice [since 15]
     * @since 11 dynamic
     */
    on(type: 'dataSendProgress', callback: Callback<DataSendProgressInfo>): void;

    /**
     * 订阅HTTP响应数据发送进度事件。
     *
     * @param { Callback<DataSendProgressInfo> } callback - the callback of on.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 static
     */
    onDataSendProgress(callback: Callback<DataSendProgressInfo>): void;

    /**
     * 取消订阅HTTP网络请求数据发送进度事件。
     *
     * @param { 'dataSendProgress' } type - 取消订阅的事件类型：'dataSendProgress'。
     * @param { Callback<DataSendProgressInfo> } [callback] - 回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @atomicservice [since 15]
     * @since 11 dynamic
     */
    off(type: 'dataSendProgress', callback?: Callback<DataSendProgressInfo>): void;

    /**
     * 取消订阅HTTP响应数据发送进度事件。
     *
     * @param { Callback<DataSendProgressInfo> } [callback] - the callback of off.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 26.1.0 static
     */
    offDataSendProgress(callback?: Callback<DataSendProgressInfo>): void;

    /**
     * 设置是否自动携带和共享Cookie，用于在同一个HttpRequest实例的多次请求之间自动复用服务端下发的Cookie。
     * 
     * > **说明：**
     * >
     * > (1) 默认值为false，表示默认不自动携带Cookie。
     * 
     * > (2) 当配置由false切换为true后，会在后续调用request接口发起请求时生效，并自动共享Cookie。
     * 
     * > (3) 当配置由true切换为false时，会清空当前实例内保存的Cookie共享状态。
     * 
     * > (4) 关于重定向场景的Cookie处理：通过header字段手动配置的Cookie在发生重定向时不会自动发送给重定向后的目标主机，仅服务端通过Set-Cookie下发的Cookie会根据域名规则自动携带。
     * 
     * > (5) 关于跨域Cookie携带规则：Cookie的自动携带仅在相同域名或相同子域名之间生效，不同域名之间不支持Cookie的自动携带。
     *
     * @param { boolean } enable - 是否自动携带Cookie。true表示开启，false表示关闭。
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    enableAutoCookie(enable: boolean): void;
  }

  /**
   * HTTP 请求方法。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  export enum RequestMethod {
    /**
     * OPTIONS方法描述了目标资源的通信选项。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    OPTIONS = "OPTIONS",

    /**
     * GET方法请求指定资源的表示。使用GET的请求应该只检索数据，不应该包含请求内容。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    GET = "GET",

    /**
     * HEAD方法请求与GET请求相同的响应，但没有响应主体。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    HEAD = "HEAD",

    /**
     * POST方法将实体提交给指定的资源，通常会导致服务器上的状态更改。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    POST = "POST",

    /**
     * PUT方法将目标资源的所有当前表示替换为请求内容。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    PUT = "PUT",

    /**
     * DELETE方法用于删除指定的资源。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    DELETE = "DELETE",

    /**
     * TRACE方法沿到达目标资源的路径执行消息环回测试。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    TRACE = "TRACE",

    /**
     * CONNECT方法建立到由目标资源标识的服务器的隧道。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    CONNECT = "CONNECT",

    /**
     * PATCH方法对资源进行部分修改。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 dynamic&static
     */
    PATCH = "PATCH"
  }

  /**
   * 发起请求返回的响应码。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  export enum ResponseCode {
    /**
     * 请求成功。用于GET与POST请求。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    OK = 200,

    /**
     * 已创建。请求成功并已创建新资源。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    CREATED = 201,

    /**
     * 已接受。请求已被接受，但未处理完成。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    ACCEPTED = 202,

    /**
     * 非授权信息。请求成功。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    NOT_AUTHORITATIVE = 203,

    /**
     * 无内容。服务器成功处理，但未返回内容。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    NO_CONTENT = 204,

    /**
     * 重置内容。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    RESET = 205,

    /**
     * 部分内容。服务器成功处理了部分GET请求。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    PARTIAL = 206,

    /**
     * 多种选择。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    MULT_CHOICE = 300,

    /**
     * 永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    MOVED_PERM = 301,

    /**
     * 临时移动。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    MOVED_TEMP = 302,

    /**
     * 查看其它地址。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    SEE_OTHER = 303,

    /**
     * 未修改。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    NOT_MODIFIED = 304,

    /**
     * 使用代理。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    USE_PROXY = 305,

    /**
     * 客户端请求的语法错误，服务器无法理解。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    BAD_REQUEST = 400,

    /**
     * 请求需要用户的身份认证。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    UNAUTHORIZED = 401,

    /**
     * 保留字段，将来使用。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    PAYMENT_REQUIRED = 402,

    /**
     * 服务器理解请求客户端的请求，但是拒绝执行此请求。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    FORBIDDEN = 403,

    /**
     * 服务器无法根据客户端的请求找到资源(网页)。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    NOT_FOUND = 404,

    /**
     * 客户端请求中的方法被禁止。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    BAD_METHOD = 405,

    /**
     * 服务器无法根据客户端请求的内容特性完成请求。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    NOT_ACCEPTABLE = 406,

    /**
     * 请求需要代理的身份认证。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    PROXY_AUTH = 407,

    /**
     * 请求超时。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    CLIENT_TIMEOUT = 408,

    /**
     * 服务器完成客户端的PUT请求时可能返回此代码，服务器处理请求时发生了冲突。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    CONFLICT = 409,

    /**
     * 客户端请求的资源已经不存在。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    GONE = 410,

    /**
     * 服务器无法处理客户端发送的不带Content-Length的请求信息。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    LENGTH_REQUIRED = 411,

    /**
     * 客户端请求信息的先决条件错误。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    PRECON_FAILED = 412,

    /**
     * 由于请求的实体过大，服务器无法处理，因此拒绝请求。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    ENTITY_TOO_LARGE = 413,

    /**
     * 请求的URI过长(URI通常为网址)，服务器无法处理。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    REQ_TOO_LONG = 414,

    /**
     * 服务器无法处理请求的格式。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    UNSUPPORTED_TYPE = 415,

    /**
     * 请求范围不符合要求。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 26.1.0 static
     */
    RANGE_NOT_SATISFIABLE = 416,

    /**
     * 服务器内部错误，无法完成请求。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    INTERNAL_ERROR = 500,

    /**
     * 服务器不支持请求的功能，无法完成请求。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    NOT_IMPLEMENTED = 501,

    /**
     * 充当网关或代理的服务器，从远端服务器接收到了一个无效的请求。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    BAD_GATEWAY = 502,

    /**
     * 由于超载或系统维护，服务器暂时无法处理客户端的请求。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    UNAVAILABLE = 503,

    /**
     * 充当网关或代理的服务器，未及时从远端服务器获取请求。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    GATEWAY_TIMEOUT = 504,

    /**
     * 服务器不支持客户端请求中使用的HTTP协议版本。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    VERSION = 505
  }

  /**
   * HTTP协议版本。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum HttpProtocol {
    /**
     * 协议HTTP1.1。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    HTTP1_1 = 0,

    /**
     * 协议HTTP2。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    HTTP2 = 1,

    /**
     * 协议HTTP3，若系统或服务器不支持，则使用低版本的HTTP协议请求。
     * 
     * **注意：** 仅对HTTPS的URL生效，HTTP则会请求失败。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    HTTP3 = 2
  }

  /**
   * HTTP的数据类型。
   * 
   * | 名称 | 值 | 说明     |
   * | ------------------  | -- | ----------- |
   * | STRING              | 0 | 字符串类型。 |
   * | OBJECT              | 1 | 对象类型。    |
   * | ARRAY_BUFFER        | 2 | 二进制数组类型。|
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum HttpDataType {
    /**
     * The returned type is string.
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    STRING = 0,

    /**
     * The returned type is Object.
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    OBJECT = 1,

    /**
     * The returned type is ArrayBuffer.
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    ARRAY_BUFFER = 2
  }

  /**
   * request方法回调函数的返回值类型。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  export interface HttpResponse {
    /**
     * HTTP请求根据响应头中content-type类型返回对应的响应格式内容，若HttpRequestOptions无expectDataType字段，按如下规则返回：
     * 
     * - application/json：返回JSON格式的字符串。
     * - application/octet-stream：ArrayBuffer。
     * - image：ArrayBuffer。
     * - 其他：string。
     * 
     * 若HttpRequestOption有expectDataType字段，开发者需传入与服务器返回类型相同的数据类型。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    result: string | Object | ArrayBuffer;

    /**
     * result can be a string (API 6) or an ArrayBuffer(API 8). Object is deprecated from API 8.
     * If {@link HttpRequestOptions#expectDataType} is set, the system preferentially returns this parameter.
     * @syscap SystemCapability.Communication.NetStack
     * @since 26.1.0 static
     */
    result: string | RecordData | ArrayBuffer;

    /**
     * 返回值类型。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    resultType: HttpDataType;

    /**
     * 回调函数执行成功时，此字段为[ResponseCode]{@link http.ResponseCode}。若执行失败，错误码将会从AsyncCallback中的err字段返回。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    responseCode: ResponseCode | int;

    /**
     * 发起HTTP请求返回来的响应头。当前返回的是JSON格式字符串，如需具体字段内容，需开发者自行解析。常见字段及解析方式如下：
     * 
     * - content-type：header['content-type']。
     * - status-line：header['status-line']。
     * - date：header.date/header['date']。
     * - server：header.server/header['server']。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    header: Object;

    /**
     * All headers in the response from the server.
     *
     * @syscap SystemCapability.Communication.NetStack
     * @FaAndStageModel
     * @since 26.1.0 static
     */
    header: Record<string, string>;

    /**
     * 服务器返回的原始cookies。开发者可自行处理。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    cookies: string;

    /**
     * HTTP请求的各个阶段的耗时。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    performanceTiming: PerformanceTiming;

    /**
     * HTTP请求交互的详细信息。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    connectionExtraInfo?: ConnectionExtraInfo;
  }

  /**
   * HTTP请求交互的详细信息。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @stagemodelonly
   * @since 24 dynamic
   * @since 26.1.0 static
   */
  export interface ConnectionExtraInfo {
    /**
     * [request]{@link http.HttpRequest.request(url: string, callback: AsyncCallback<HttpResponse>)}请求过程中的HTTP协议版本，如'
     * HTTP/1.0'，'HTTP/1.1'，'HTTP/2'，'HTTP/2 over TLS'，'HTTP/3'，'Unknown/Non-HTTP'等。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    networkProtocolName: string;

    /**
     * request请求过程中的TLS协议版本。只有当使用TLS协议时返回相应的TLS版本。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    tlsVersion?: TlsVersion;

    /**
     * request请求过程中的加密套件。只有当使用TLS协议时返回相应的加密套件。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    cipherSuite?: CipherSuite;

    /**
     * request请求过程中的客户端IP地址。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    localAddress: string;

    /**
     * request请求过程中的服务端IP地址。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    remoteAddress: string;

    /**
     * request请求过程中的客户端端口，取值范围[1, 65535]。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    localPort: int;

    /**
     * request请求过程中的服务端端口，取值范围[1, 65535]。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    remotePort: int;

    /**
     * request请求过程中是否复用连接。true表示新建连接，false表示复用连接。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    isReusedConnection: boolean;

    /**
     * request请求过程中是否使用代理。true表示使用代理，false表示未使用代理。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    isProxyConnection: boolean;

    /**
     * request请求过程中是否命中本地缓存。true表示命中本地缓存，false表示未命中本地缓存。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    isCacheHit: boolean;

    /**
     * request请求过程中的重定向次数。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.1.0 static
     */
    redirectCount: int;
  }

  /**
   * 性能打点(单位：ms)。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  export interface PerformanceTiming {
    /**
     * 从[request]{@link http.HttpRequest.request(url: string, callback: AsyncCallback<HttpResponse>)}请求到DNS解析完成耗时。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    dnsTiming: double;

    /**
     * 从[request]{@link http.HttpRequest.request(url: string, callback: AsyncCallback<HttpResponse>)}请求到TCP连接完成耗时。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    tcpTiming: double;

    /**
     * 从[request]{@link http.HttpRequest.request(url: string, callback: AsyncCallback<HttpResponse>)}请求到TLS连接完成耗时。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    tlsTiming: double;

    /**
     * 从[request]{@link http.HttpRequest.request(url: string, callback: AsyncCallback<HttpResponse>)}请求到开始发送第一个字节的耗时。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    firstSendTiming: double;

    /**
     * 从[request]{@link http.HttpRequest.request(url: string, callback: AsyncCallback<HttpResponse>)}请求到接收第一个字节的耗时。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    firstReceiveTiming: double;

    /**
     * 从[request]{@link http.HttpRequest.request(url: string, callback: AsyncCallback<HttpResponse>)}请求到完成请求的耗时。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    totalFinishTiming: double;

    /**
     * 从[request]{@link http.HttpRequest.request(url: string, callback: AsyncCallback<HttpResponse>)}请求到完成所有重定向步骤的耗时。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    redirectTiming: double;

    /**
     * 从[request]{@link http.HttpRequest.request(url: string, callback: AsyncCallback<HttpResponse>)}请求到header解析完成的耗时。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    responseHeaderTiming: double;

    /**
     * 从[request]{@link http.HttpRequest.request(url: string, callback: AsyncCallback<HttpResponse>)}请求到body解析完成的耗时。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    responseBodyTiming: double;

    /**
     * 从[request]{@link http.HttpRequest.request(url: string, callback: AsyncCallback<HttpResponse>)}请求回调到应用程序的耗时。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    totalTiming: double;
  }

  /**
   * 数据接收信息。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 12]
   * @atomicservice [since 15]
   * @since 11 dynamic
   * @since 26.1.0 static
   */
  export interface DataReceiveProgressInfo {
    /**
     * 已接收的数据量（单位：Byte）。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @atomicservice [since 15]
     * @since 11 dynamic
     * @since 26.1.0 static
     */
    receiveSize: int;
    /**
     * 总共要接收的数据量（单位：Byte）。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @atomicservice [since 15]
     * @since 11 dynamic
     * @since 26.1.0 static
     */
    totalSize: int;
  }

  /**
   * 数据发送信息。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 12]
   * @atomicservice [since 15]
   * @since 11 dynamic
   * @since 26.1.0 static
   */
  export interface DataSendProgressInfo {
    /**
     * 每次发送的数据量(单位：Byte)。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @atomicservice [since 15]
     * @since 11 dynamic
     * @since 26.1.0 static
     */
    sendSize: int;
    /**
     * 总共要发送的数据量(单位：Byte)。
     *
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 12]
     * @atomicservice [since 15]
     * @since 11 dynamic
     * @since 26.1.0 static
     */
    totalSize: int;
  }

  /**
   * 创建一个HttpResponseCache对象，可用于存储HTTP请求的响应数据。对象中可调用
   * [flush]{@link http.HttpResponseCache.flush(callback: AsyncCallback<void>)}与
   * [delete]{@link http.HttpResponseCache.delete(callback: AsyncCallback<void>)}方法，cacheSize指定缓存大小。
   *
   * @param { int } cacheSize - 响应缓存大小，单位为Byte。取值范围为1*1024*1024到10*1024*1024，即1MB到10MB。默认值为10MB。超出10MB时设置为10MB；小于1MB时，设置
   *     为1MB。
   * @returns { HttpResponseCache } 返回一个存储HTTP访问请求响应的对象。
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function createHttpResponseCache(cacheSize?: int): HttpResponseCache;

  /**
   * 存储HTTP访问请求响应的对象。在调用HttpResponseCache的方法前，需要先通过[createHttpResponseCache()]{@link http.createHttpResponseCache}创建一个任
   * 务。
   *
   * **响应头中的相应关键字使用**
   * - **`Cache-Control`**：用于指定缓存策略，如`no-cache`, `no-store`, `max-age`, `public`, `private`等。
   * - **`Expires`**：指定资源的过期时间，格式为GMT时间。
   * - **`ETag`**：用于资源版本标识，客户端可以使用`If-None-Match`请求头来验证资源是否已更改。
   * - **`Last-Modified`**：指定资源最后修改时间，客户端可以使用`If-Modified-Since`请求头来验证资源是否已更改。
   * - **`Vary`**：指定哪些请求头的值会影响缓存的响应，用于区分不同的缓存版本。
   * 
   * 使用这些关键字时，服务器端需要正确配置响应头，客户端则需要根据这些响应头来决定是否使用缓存的资源，以及如何验证资源是否是最新的。正确的缓存策略可以显著提高应用的性能和用户体验。
   *
   * **如何设置Cache-Control头**
   * `Cache-Control`为通用报头，但通常是在服务器端进行的，允许定义一个响应资源应该何时、如何被缓存以及缓存多长时间。以下是一些常用的`Cache-Control`指令及其含义：
   * 
   * - **`no-cache`**：表示在使用缓存前，必须先去源服务器校验资源的有效性。如果资源未变更，则响应状态码为304(Not Modified)，不发送资源内容，使用缓存中的资源。如果资源已经过期，则响应状态码为200(OK
   * )，并发送资源内容。
   * - **`no-store`**：表示不允许缓存资源，每次请求都必须从服务器获取资源。
   * - **`max-age`**：指定缓存的最大时间(以秒为单位)。例如，`Cache-Control: max-age=3600`表示缓存的有效期为1小时。
   * - **`public`**：表明响应可以被任何对象(包括：发送请求的客户端，代理服务器等)缓存。
   * - **`private`**：表明响应只能被单个用户缓存，不能作为共享缓存(即代理服务器不能缓存)。
   * - **`must-revalidate`**：表示必须在使用缓存前验证旧资源的状态，并且在缓存过期后，需要重新验证资源。
   * - **`no-transform`**：表示不允许代理服务器修改响应内容。
   * - **`proxy-revalidate`**：与`must-revalidate`类似，但仅适用于共享缓存。
   * - **`s-maxage`**：类似于`max-age`，但仅适用于共享缓存。
   *
   * @syscap SystemCapability.Communication.NetStack
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export interface HttpResponseCache {
    /**
     * 将缓存中的数据写入文件系统，以便在下一个HTTP请求中访问所有缓存数据，使用callback方式作为异步方法。缓存数据包括：响应头(header)、响应体(result)、cookies、请求时间(requestTime)和响
     * 应时间(responseTime)。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。返回写入结果。当写入成功时，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    flush(callback: AsyncCallback<void>): void;

    /**
     * 将缓存中的数据写入文件系统，以便在下一个HTTP请求中访问所有缓存数据，使用Promise方式作为异步方法。
     *
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 26.1.0 static
     */
    flush(): Promise<void>;

    /**
     * 禁用缓存并删除其中的数据，使用callback方式作为异步方法。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当删除成功时，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    delete(callback: AsyncCallback<void>): void;

    /**
     * 禁用缓存并删除其中的数据，使用Promise方式作为异步方法。
     *
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    delete(): Promise<void>;
  }
}

export default http;
