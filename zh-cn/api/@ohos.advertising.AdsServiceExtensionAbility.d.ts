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
 * 本模块为设备厂商提供广告扩展能力，设备厂商可自主实现单广告位请求和多广告位请求的业务逻辑。
 *
 * @syscap SystemCapability.Advertising.Ads
 * @systemapi
 * @since 11
 */
export default class AdsServiceExtensionAbility {

  /**
   * 单广告位请求业务实现方法，设备厂商需在该方法中实现广告请求业务逻辑并将结果回调给媒体。
   *
   * @param { advertising.AdRequestParams } adParam - 广告请求参数。
   * @param { advertising.AdOptions } adOptions - 广告配置参数。
   * @param { RespCallback } respCallback - 广告请求回调。
   * @syscap SystemCapability.Advertising.Ads
   * @systemapi
   * @since 11
   */
  onLoadAd(adParam: advertising.AdRequestParams, adOptions: advertising.AdOptions, respCallback: RespCallback);

  /**
   * 多广告位请求业务实现方法，设备厂商需在该方法中实现广告请求业务逻辑并将结果回调给媒体。
   *
   * @param { advertising.AdRequestParams[] } adParams - 广告请求参数。
   * @param { advertising.AdOptions } adOptions - 广告配置参数。
   * @param { RespCallback } respCallback - 广告请求回调。
   * @syscap SystemCapability.Advertising.Ads
   * @systemapi
   * @since 11
   */
  onLoadAdWithMultiSlots(adParams: advertising.AdRequestParams[], adOptions: advertising.AdOptions, respCallback: RespCallback);
}

/**
 * 广告请求回调。
 *
 * @syscap SystemCapability.Advertising.Ads
 * @since 11
 */
export interface RespCallback {
  /**
   * 广告请求回调。
   *
   * @param { Map<string, Array<advertising.Advertisement>> } respData - 广告请求回调数据，是以广告位ID为键，存储请求到的广告内容的映射集合。
   * @syscap SystemCapability.Advertising.Ads
   * @since 11
   */
  (respData: Map<string, Array<advertising.Advertisement>>): void;
}