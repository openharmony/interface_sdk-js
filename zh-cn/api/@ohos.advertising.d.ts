/*
 * Copyright (c) 2023-2026 Huawei Device Co., Ltd.
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
 * @file Ads Service Framework
 * @kit AdsKit
 */
import type web_webview from './@ohos.web.webview';
import type common from './@ohos.app.ability.common';
import type { Advertisement as _Advertisement } from './advertising/advertisement';

/**
 * 本模块提供广告操作能力，包括请求广告、展示广告。
 *
 * @syscap SystemCapability.Advertising.Ads
 * @atomicservice [since 12]
 * @since 11
 */
declare namespace advertising {
  /**
   * 请求的广告内容。
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  export type Advertisement = _Advertisement;

  /**
   * 广告请求参数。
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  export interface AdRequestParams {
    /**
     * 广告位ID。
     * 
     * 说明：getAdRequestBody接口可以不传该参数。
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    adId: string;

    /**
     * 请求的广告类型。
     * 
     * - 1：开屏广告。
     * - 3：原生广告。
     * - 7：激励广告。
     * - 8：横幅广告。
     * - 12：插屏广告。
     * - 60：贴片广告。
     * 
     * 不填默认为原生广告类型。
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    adType?: number;

    /**
     * 请求的广告数量。不填以业务逻辑为准。
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    adCount?: number;

    /**
     * 请求广告时期望的创意宽度，单位vp（横幅广告必填）。不填以业务逻辑为准。
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    adWidth?: number;

    /**
     * 请求广告时期望的创意高度，单位vp（横幅广告必填）。不填以业务逻辑为准。
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    adHeight?: number;

    /**
     * 广告关键字。不填默认""。
     * 
     * 说明：暂不支持使用。
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    adSearchKeyword?: string;

    /**
     * 自定义参数。
     * 
     * - isPreload：类型boolean，请求贴片广告时，用于区分普通在线请求和素材预加载请求。true：素材预加载请求，false：普通在线请求。默认值false。仅对贴片广告生效，其他广告请求不解析该参数。
     * - enableDirectReturnVideoAd：类型boolean，原生广告自定义扩展参数，是否直接返回广告，不用等待所有广告素材下载完成。true：不等待广告素材下载完成，展示广告时在线加载素材；false：等待广告
     * 素材下载完成，展示广告时从本地缓存中加载素材。如果不填以云侧配置为准。仅对原生广告生效，其他广告请求不解析该参数。
     * - oaid: 类型string，开放匿名设备标识符，用于精准推送广告。不填无法获取到个性化广告。默认值为""。
     * - tMax：类型number，交易的最大超时时间（包含网络延迟）单位ms。
     * - cur：类型string，竞价请求支持的币种，支持传多个，用英文逗号分隔。当前支持五种货币：CNY（单位：元）、USD（单位：美元）、EUR（单位：欧元）、GBP（单位：英镑）、JPY（单位：日元），不填则默认是CNY。
     * - bidFloor：类型number或者string，实时竞价广告位的底价。如果底价是小数，请传入string避免丢失精度。
     * - bidFloorCur：类型string，广告位底价使用的币种。如果bidFloor非空，则bidFloorCur也非空。当前只支持五种货币中的一种：CNY（单位：元）、USD（单位：美元）、EUR（单位：欧元）、GBP（
     * 单位：英镑）、JPY（单位：日元），不填则默认是CNY。
     * - bpkgName：类型string，广告位禁投的APP包名，支持传多个，用英文逗号分隔。
     * - orientation ：类型number，媒体请求广告的屏幕方向。1表示竖屏，0表示横屏，不设置则默认为1。当前未上架横屏开屏素材，若设置请求屏幕方向为横屏则不展示开屏广告。如果媒体设置应用固定横屏展示，但该参数未设置或
     * 者设置为1，则展示效果会受影响。
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    [key: string]: number | boolean | string | undefined;
  }

  /**
   * 广告配置参数。
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  export interface AdOptions {
    /**
     * 是否希望根据 COPPA 的规定将您的内容视为面向儿童的内容。
     * 
     * -1：默认值，不确定。
     * 0：不希望。
     * 1：希望。
     * 默认为-1。
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    tagForChildProtection?: number;

    /**
     * 设置广告内容分级上限。
     * 
     * W：3+，所有受众。
     * PI：7+，家长指导。
     * J：12+，青少年。
     * A：16+/18+，成人受众。
     * 不填以业务逻辑为准。
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    adContentClassification?: string;

    /**
     * 设置是否只请求非个性化广告。
     * 0：请求个性化广告与非个性化广告。
     * 1：只请求非个性化广告。
     * 不填以业务逻辑为准。
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    nonPersonalizedAd?: number;

    /**
     * 自定义参数。
     * 
     * - totalDuration：类型number，单位：s。贴片广告必填自定义参数，用于设置贴片广告展示时长。
     * - allowMobileTraffic：类型number。可选自定义参数，设置是否允许使用流量下载广告素材。0：不允许，1：允许，不设置以广告主设置为准。
     * - tagForUnderAgeOfPromise：类型number。可选自定义参数，设置未成年保护标签。是否希望按适合未达到法定承诺年龄的欧洲经济区 (EEA) 用户的方式处理该广告请求。-1：默认值，不确定， 0：不希望 
     * ， 1：希望。
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    [key: string]: number | boolean | string | undefined;
  }

  /**
   * 广告展示参数。
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  export interface AdDisplayOptions {
    /**
     * 媒体自定义数据。用于服务端通知媒体服务器某位用户因为与激励视频广告互动而应予以奖励，从而规避欺骗的行为（不填则不会通知）。
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    customData?: string;

    /**
     * 媒体自定义用户id。用于服务端通知媒体服务器某位用户因为与激励视频广告互动而应予以奖励，从而规避欺骗的行为（不填则不会通知）。
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    userId?: string;

    /**
     * 使用移动数据播放视频或下载应用时是否弹框通知用户。
     * 
     * - true：弹框通知。
     * - false：不弹框通知。
     * - 该参数依赖流量弹窗功能，当前不支持完整功能的使用，暂不确定默认值。
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    useMobileDataReminder?: boolean;

    /**
     * 广告视频播放是否静音。
     * 
     * - true：静音播放。
     * - false：非静音播放。
     * 不填以业务逻辑为准。
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    mute?: boolean;

    /**
     * 视频播放过程中获得音频焦点的场景类型。
     * 
     * - 0：视频播放静音、非静音时都获取焦点。
     * - 1：视频静音播放时不获取焦点。
     * - 2：视频播放静音、非静音时都不获取焦点。
     * - 该接口依赖的相关功能当前不支持使用，暂不确定默认值。
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    audioFocusType?: number;

    /**
     * 自定义参数。
     * 
     * - refreshTime：AutoAdComponent组件可选自定义参数，用于控制广告的轮播时间间隔。类型number，单位：ms，取值范围[30000, 120000]。如果不设置或取值为非数字或小于等于0的数字，则不轮
     * 播，只会展示广告响应中的第一个广告内容。设置小于30000的数字取值30000，设置大于120000的数字取值120000。
     * - colorMode：广告的主题色。类型number。0：深色主题， 1：浅色主题 ， 2：跟随系统。设置主题色功能从8.4.80.300版本开始支持，查看方式：可在设备上选择“设置> 应用和元服务” ，右上角点击“更多应用
     * ”，在应用界面查看智慧营销服务版本。
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    [key: string]: number | boolean | string | undefined;
  }

  /**
   * 广告状态变化回调。
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  export interface AdInteractionListener {
    /**
     * 广告状态回调。
     *
     * @param { string } status - 广告展示状态。<br/>- onAdLoad：广告加载成功。<br/>- onAdFail：广告加载失败。<br/>- onAdOpen：打开广告。<br/>-
     *     onAdClick：点击广告。<br/>- onAdClose：关闭广告。<br/>- onMediaProgress：广告播放进度。<br/>- onMediaStart：广告开始播放。<br/>-
     *     onMediaPause：广告暂停播放。<br/>- onMediaStop：广告停止播放。<br/>- onMediaComplete：广告播放完成。<br/>- onMediaCountDown：广告倒计时。<br
     *     />- onMediaError：广告播放失败。<br/>- onLandscape：竖屏状态下点击全屏按钮。<br/>- onPortrait：全屏状态下点击返回按钮。<br/>- onBackClicked：点击返
     *     回按钮。
     * @param { Advertisement } ad - 发生状态变化的广告内容。
     * @param { string } data - 扩展信息。<br/>当status参数为onAdClose时，data值为关闭原因，关闭原因描述如下：<br/>- adShowEnded：广告展示结束。<br/>-
     *     adCloseBtnClicked：点击关闭按钮。<br/>- adSkipBtnClicked：点击跳过。<br/>- adFeedbackClosed：负反馈关闭。<br/>- adBackgroundClosed
     *     ：开屏切后台关闭。
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    onStatusChanged(status: string, ad: Advertisement, data: string);
  }

  /**
   * 单广告位广告请求回调。
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  export interface AdLoadListener {
    /**
     * 广告请求失败回调。
     *
     * @param { number } errorCode - 广告请求失败的错误码。
     * @param { string } errorMsg - 广告请求失败的错误信息。
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    onAdLoadFailure(errorCode: number, errorMsg: string): void;

    /**
     * 广告请求成功后回调。
     *
     * @param { Array<Advertisement> } ads - 广告数据。
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    onAdLoadSuccess(ads: Array<Advertisement>): void;
  }

  /**
   * 多广告位广告请求回调。
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  export interface MultiSlotsAdLoadListener {
    /**
     * 广告请求失败回调。
     *
     * @param { number } errorCode - 广告请求失败的错误码。
     * @param { string } errorMsg - 广告请求失败的错误信息。
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    onAdLoadFailure(errorCode: number, errorMsg: string): void;

    /**
     * 多广告位广告请求成功后回调。
     *
     * @param { Map<string, Array<Advertisement>> } adsMap - 广告数据，是以广告位ID为键，存储请求到的广告内容的映射集合。
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    onAdLoadSuccess(adsMap: Map<string, Array<Advertisement>>): void;
  }

  /**
   * 展示全屏广告。
   *
   * @param { Advertisement } ad - 广告对象。
   * @param { AdDisplayOptions } options - 广告展示参数。
   * @param { common.UIAbilityContext } context - UIAbility的上下文环境，不设置从api:
   *     [@ohos.app.ability.common](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-common)
   *     中获取。 [since 11 - 11]
   * @param { common.UIAbilityContext } [context] - UIAbility的上下文环境，不设置从api:
   *     [@ohos.app.ability.common](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-common)
   *     中获取。 [since 12]
   * @throws { BusinessError } 401 - Invalid input parameter. Possible causes: 1. Mandatory parameters are left
   *     unspecified.
   * @throws { BusinessError } 21800001 - System internal error.
   * @throws { BusinessError } 21800004 - Failed to display the ad.
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  function showAd(ad: Advertisement, options: AdDisplayOptions, context?: common.UIAbilityContext): void;

  /**
   * 提供加载广告的功能。
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  export class AdLoader {
    /**
     * 构造函数。
     *
     * @param { common.Context } context - ability或application的上下文环境。
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    constructor(context: common.Context);

    /**
     * 请求单广告位广告。
     *
     * @param { AdRequestParams } adParam - 广告请求参数。
     * @param { AdOptions } adOptions - 广告配置参数。
     * @param { AdLoadListener } listener - 请求广告回调监听。
     * @throws { BusinessError } 401 - Invalid input parameter. Possible causes: 1. Mandatory parameters are left
     *     unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed
     * @throws { BusinessError } 21800001 - System internal error.
     * @throws { BusinessError } 21800003 - Failed to load the ad request.
     * @throws { BusinessError } 801 - Device not supported. [since 12]
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    loadAd(adParam: AdRequestParams, adOptions: AdOptions, listener: AdLoadListener): void;

    /**
     * 请求多广告位广告。
     *
     * @param { AdRequestParams[] } adParams - 广告请求参数。
     * @param { AdOptions } adOptions - 广告配置参数。
     * @param { MultiSlotsAdLoadListener } listener - 请求广告回调监听。
     * @throws { BusinessError } 401 - Invalid input parameter. Possible causes: 1. Mandatory parameters are left
     *     unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed
     * @throws { BusinessError } 21800001 - System internal error.
     * @throws { BusinessError } 21800003 - Failed to load the ad request.
     * @throws { BusinessError } 801 - Device not supported. [since 12]
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    loadAdWithMultiSlots(adParams: AdRequestParams[], adOptions: AdOptions, listener: MultiSlotsAdLoadListener): void;
  }

  /**
   * 获取广告请求体，使用Promise异步回调（该接口仅对部分系统预置应用开放）。
   *
   * @param { AdRequestParams[] } adParams - 广告请求参数。
   * @param { AdOptions } adOptions - 广告配置参数。
   * @returns { Promise<string> } Promise对象，返回字符类型的广告数据。
   * @throws { BusinessError } 401 - Invalid input parameter. Possible causes: 1. Mandatory parameters are
   *     <br>left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Device not supported.
   * @throws { BusinessError } 21800001 - System internal error.
   * @syscap SystemCapability.Advertising.Ads
   * @since 12
   */
  function getAdRequestBody(adParams: AdRequestParams[], adOptions: AdOptions): Promise<string>;

  /**
   * 解析并处理广告响应体（该接口仅对部分系统预置应用开放）。
   *
   * @param { string } adResponse - 广告响应体。
   * @param { MultiSlotsAdLoadListener } listener - 请求广告回调监听。
   * @param { common.UIAbilityContext } context - UIAbility的上下文环境。
   * @throws { BusinessError } 401 - Invalid input parameter.Possible causes: 1. Mandatory parameters are
   *     <br>left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Device not supported.
   * @throws { BusinessError } 21800001 - System internal error.
   * @throws { BusinessError } 21800005 - Failed to parse the ad response.
   * @syscap SystemCapability.Advertising.Ads
   * @since 12
   */
  function parseAdResponse(adResponse: string, listener: MultiSlotsAdLoadListener, context: common.UIAbilityContext): void;

  /**
   * 注入广告JavaScript对象到Web组件中（该接口仅对部分系统预置应用开放）。
   *
   * @param { web_webview.WebviewController } controller - Web组件控制器。
   * @param { common.UIAbilityContext } context - UIAbility的上下文环境。
   * @throws { BusinessError } 401 - Invalid input parameter. Possible causes: 1. Mandatory parameters are left
   *     unspecified.
   * @throws { BusinessError } 21800001 - System internal error.
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice
   * @since 12
   */
  function registerWebAdInterface(controller: web_webview.WebviewController, context: common.UIAbilityContext): void;

  /**
   * 注入广告JavaScript对象到Web组件中（该接口仅对部分系统预置应用开放）。
   *
   * @param { web_webview.WebviewController } controller - Web组件控制器。
   * @param { common.UIAbilityContext } context - UIAbility的上下文环境。
   * @param { boolean } needRefresh - 是否需要刷新页面（true: 需要；false: 不需要）。
   * @throws { BusinessError } 401 - Invalid input parameter. Possible causes: Mandatory parameters are left
   *     unspecified.
   * @throws { BusinessError } 21800001 - System internal error.
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice
   * @since 16
   */
  function registerWebAdInterface(controller: web_webview.WebviewController, context: common.UIAbilityContext, needRefresh: boolean): void;

  /**
   * 删除通过registerWebAdInterface注入的广告JavaScript对象（该接口仅对部分系统预置应用开放）。
   *
   * @param { web_webview.WebviewController } controller - Web组件控制器。
   * @param { boolean } needRefresh - 是否需要刷新页面（true: 需要；false: 不需要）。
   * @throws { BusinessError } 401 - Invalid input parameter. Possible causes: Mandatory parameters are left
   *     unspecified.
   * @throws { BusinessError } 21800001 - System internal error.
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice
   * @since 16
   */
  function deleteWebAdInterface(controller: web_webview.WebviewController, needRefresh: boolean): void;
}

export default advertising;