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
 * The advertising module provides APIs for requesting and displaying ads.
 *
 * @syscap SystemCapability.Advertising.Ads
 * @atomicservice [since 12]
 * @since 11
 */
declare namespace advertising {
  /**
   * Defines the requested ad content.
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  export type Advertisement = _Advertisement;

  /**
   * Defines the ad request parameters.
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  export interface AdRequestParams {
    /**
     * Ad ID.
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    adId: string;

    /**
     * Type of the requested ad.
     * 
     * - **1**: splash ad.
     * - **3**: native ad.
     * - **7**: rewarded ad.
     * - **8**: banner ad.
     * - **12**: interstitial ad.
     * - **60**: roll ad.
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    adType?: number;

    /**
     * Number of ads requested.
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    adCount?: number;

    /**
     * Expected creative width of ads requested, in vp.
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    adWidth?: number;

    /**
     * Expected creative height of ads requested, in vp.
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    adHeight?: number;

    /**
     * Ad keyword.
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    adSearchKeyword?: string;

    /**
     * Custom parameters.
     * 
     * - **oaid**: open anonymous device identifier, which is used to push ads accurately. The value is of the string 
     * type.
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    [key: string]: number | boolean | string | undefined;
  }

  /**
   * Defines the ad configuration.
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  export interface AdOptions {
    /**
     * Tag for child protection, which specifies whether you want the ad content to be treated as COPPA-compliant.
     * 
     * - **-1**: Uncertain.
     * - **0**: No. You do not want the ad content to be treated as COPPA-compliant.
     * - **1**: Yes. You want the ad content to be treated as COPPA-compliant.
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    tagForChildProtection?: number;

    /**
     * Maximum ad content rating.
     * 
     * - **W**: ages 3+, all audiences.
     * - **PI**: ages 7+, audiences under parental instruction.
     * - **J**: ages 12+, teenagers.
     * - **A**: ages 16+/18+, adults.
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    adContentClassification?: string;

    /**
     * Whether to request only non-personalized ads.
     * 
     * - **0**: request for personalized and non-personalized ads.
     * - **1**: request for only non-personalized ads.
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    nonPersonalizedAd?: number;

    /**
     * Custom parameters.
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    [key: string]: number | boolean | string | undefined;
  }

  /**
   * Defines the ad display parameters.
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  export interface AdDisplayOptions {
    /**
     * Custom media data.
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    customData?: string;

    /**
     * User ID.
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    userId?: string;

    /**
     * Whether to display a dialog box to notify users when they use mobile data to play videos or download 
     * applications.
     * 
     * - **true**: A dialog box is displayed.
     * - **false**: No dialog box is displayed.
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    useMobileDataReminder?: boolean;

    /**
     * Whether to mute the ad video.
     * 
     * - **true**: The ad video is muted.
     * - **false**: The ad video is not muted.
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    mute?: boolean;

    /**
     * Type of the scenario where the audio focus is obtained during video playback.
     * 
     * - **0**: The focus is obtained when the video is played in mute or non-mute mode.
     * - **1**: The focus is not obtained when the video is played in mute mode.
     * - **2**: The focus is not obtained when the video is played in mute or non-mute mode.
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    audioFocusType?: number;

    /**
     * Custom parameters.
     * 
     * - **refreshTime**: The value is of the number type, in ms. The value is in the range [30000, 120000]. This 
     * parameter is optional for the AutoAdComponent module and specifies the interval at which the ads rotate. If this 
     * parameter is set, ads are rotated at the interval specified by this parameter. Otherwise, ads are not rotated and
     * only the first ad in the ad response is displayed.
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    [key: string]: number | boolean | string | undefined;
  }

  /**
   * Defines the ad status change callback.
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  export interface AdInteractionListener {
    /**
     * Called when the ad display status changes.
     *
     * @param { string } status - Ad display status.<br>- **onAdLoad**: The ad is successfully loaded.<br>- **onAdFail**
     *     : The ad fails to be loaded.
     * @param { Advertisement } ad - Content of the ad.
     * @param { string } data - Extended information.
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    onStatusChanged(status: string, ad: Advertisement, data: string);
  }

  /**
   * Enumerates the callbacks used for the request for loading an ad.
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  export interface AdLoadListener {
    /**
     * Called when an ad request fails.
     *
     * @param { number } errorCode - Result code indicating the ad request failure.
     * @param { string } errorMsg - Error message about the ad request failure.
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    onAdLoadFailure(errorCode: number, errorMsg: string): void;

    /**
     * Called when an ad request is successful.
     *
     * @param { Array<Advertisement> } ads - Ad data.
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    onAdLoadSuccess(ads: Array<Advertisement>): void;
  }

  /**
   * Enumerates the callbacks used for the request for loading multiple ads.
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  export interface MultiSlotsAdLoadListener {
    /**
     * Called when an ad request fails.
     *
     * @param { number } errorCode - Result code indicating the ad request failure.
     * @param { string } errorMsg - Error message about the ad request failure.
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    onAdLoadFailure(errorCode: number, errorMsg: string): void;

    /**
     * Called when a request for loading multiple ads is successful.
     *
     * @param { Map<string, Array<Advertisement>> } adsMap - Ad data.
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    onAdLoadSuccess(adsMap: Map<string, Array<Advertisement>>): void;
  }

  /**
   * Shows a full-screen ad.
   *
   * @param { Advertisement } ad - Ad object.
   * @param { AdDisplayOptions } options - Ad display parameters.
   * @param { common.UIAbilityContext } context - Context of the UIAbility. If this parameter is not set, the value is
   *     obtained from @ohos.app.ability.common. [since 11 - 11]
   * @param { common.UIAbilityContext } [context] - Context of the UIAbility. If this parameter is not set, the value is
   *     obtained from @ohos.app.ability.common. [since 12]
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
   * Provides the APIs for loading ads.
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  export class AdLoader {
    /**
     * Constructor.
     *
     * @param { common.Context } context - Context of the ability or application.
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    constructor(context: common.Context);

    /**
     * Loads an ad.
     *
     * @param { AdRequestParams } adParam - Ad request parameters.
     * @param { AdOptions } adOptions - Ad configuration options.
     * @param { AdLoadListener } listener - Ad request callback.
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
     * Loads multiple ads.
     *
     * @param { AdRequestParams[] } adParams - Ad request parameters.
     * @param { AdOptions } adOptions - Ad configuration options.
     * @param { MultiSlotsAdLoadListener } listener - Ad request callback.
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
    * Obtains the body of an ad request. This API uses a promise to return the result.
    *
    * @param { AdRequestParams[] } adParams - Ad request parameters.
    * @param { AdOptions } adOptions - Ad configuration options.
    * @returns { Promise<string> } Promise used to return the ad data of the string type.
    * @throws { BusinessError } 401 - Invalid input parameter. Possible causes: 1. Mandatory parameters are
    *     <br>left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed.
    * @throws { BusinessError } 801 - Device not supported.
    * @throws { BusinessError } 21800001 - System internal error.
    * @syscap SystemCapability.Advertising.Ads
    * @since 12
    */
   function getAdRequestBody(adParams: AdRequestParams[], adOptions: AdOptions): Promise<string>;

  /**
   * Parses the body of an ad response.
   *
   * @param { string } adResponse - Ad response body.
   * @param { MultiSlotsAdLoadListener } listener - Ad request callback.
   * @param { common.UIAbilityContext } context - UIAbility context.
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
   * Injects an ad JavaScript object to the **Web** component.
   *
   * @param { web_webview.WebviewController } controller - Controller of the **Web** component.
   * @param { common.UIAbilityContext } context - UIAbility context.
   * @throws { BusinessError } 401 - Invalid input parameter. Possible causes: 1. Mandatory parameters are left
   *     unspecified.
   * @throws { BusinessError } 21800001 - System internal error.
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice
   * @since 12
   */
  function registerWebAdInterface(controller: web_webview.WebviewController, context: common.UIAbilityContext): void;
  
  /**
   * Injects an ad JavaScript object to the **Web** component.
   *
   * @param { web_webview.WebviewController } controller - Controller of the **Web** component.
   * @param { common.UIAbilityContext } context - UIAbility context.
   * @param { boolean } needRefresh - Whether a page needs to be refreshed. (The value **true** means that a page needs
   *     to be refreshed; the value **false** means the opposite.)
   * @throws { BusinessError } 401 - Invalid input parameter. Possible causes: Mandatory parameters are left
   *     unspecified.
   * @throws { BusinessError } 21800001 - System internal error.
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice
   * @since 16
   */
  function registerWebAdInterface(controller: web_webview.WebviewController, context: common.UIAbilityContext, needRefresh: boolean): void;

  /**
   * Deletes the ad JavaScript object injected through **registerWebAdInterface**.
   *
   * @param { web_webview.WebviewController } controller - Controller of the **Web** component.
   * @param { boolean } needRefresh - Whether a page needs to be refreshed. (The value **true** means that a page needs
   *     to be refreshed; the value **false** means the opposite.)
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