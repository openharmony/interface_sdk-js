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
 * The AdsServiceExtensionAbility module provides ExtensionAbilities for the ads service. Device vendors can implement 
 * the callbacks for ads requests.
 *
 * @file ExtensionAbility for Ads
 * @kit AdsKit
 */

import type advertising from './@ohos.advertising';

/**
 * Provides the capability of integrating advertising services with vendors.
 *
 * @syscap SystemCapability.Advertising.Ads
 * @systemapi
 * @since 11
 */
export default class AdsServiceExtensionAbility {

  /**
   * Called when the media application starts to load an ad.
   * The device vendor needs to implement the ad request service logic
   * in this API and send the result to the media application through a call back.
   *
   * @param { advertising.AdRequestParams } adParam - Ad request parameters.
   * @param { advertising.AdOptions } adOptions - Ad configuration options.
   * @param { RespCallback } respCallback - Ad request callback.
   * @syscap SystemCapability.Advertising.Ads
   * @systemapi
   * @since 11
   */
  onLoadAd(adParam: advertising.AdRequestParams, adOptions: advertising.AdOptions, respCallback: RespCallback);

  /**
   * Called when the media application starts to load multiple ads.
   * The device vendor needs to implement the ad request service logic
   * in this API and send the result to the media application through a call back.
   *
   * @param { advertising.AdRequestParams[] } adParams - Ad request parameters.
   * @param { advertising.AdOptions } adOptions - Ad configuration options.
   * @param { RespCallback } respCallback - Ad request callback.
   * @syscap SystemCapability.Advertising.Ads
   * @systemapi
   * @since 11
   */
  onLoadAdWithMultiSlots(adParams: advertising.AdRequestParams[], adOptions: advertising.AdOptions, 
    respCallback: RespCallback);
}

/**
 * Ad request callback.
 *
 * @syscap SystemCapability.Advertising.Ads
 * @since 11
 */
export interface RespCallback {
  /**
   * Data in the ad request callback.
   *
   * @param { Map<string, Array<advertising.Advertisement>> } respData - Callback data of ad requests.
   *     It is a mapping collection that takes ad unit ID as the key and stores acquired ad content.
   * @syscap SystemCapability.Advertising.Ads
   * @since 11
   */
  (respData: Map<string, Array<advertising.Advertisement>>): void;
}