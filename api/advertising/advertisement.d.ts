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
 * @file Defines the advertisement data model
 * @kit AdsKit
 */
/**
 * # How to Use
 *
 * When using the [advertising]{@link ./../@ohos.advertising:advertising} function, you can obtain the returned ad
 * through [Advertisement]{@link ./../@ohos.advertising:advertising.Advertisement}.
 */
/**
 * This module provides the capability of returning ads.
 *
 * @syscap SystemCapability.Advertising.Ads
 * @atomicservice [since 12]
 * @since 11
 */
export interface Advertisement {
  /**
   * Ad type.
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
  adType: number;

  /**
   * Server verification parameter.
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  rewardVerifyConfig: Map<string, string>;

  /**
   * Unique ID of the ad.
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  uniqueId: string;

  /**
   * Whether users get rewarded for watching or clicking the ad.
   *
   * - **true**: Users get rewarded.
   * - **false**: Users do not get rewarded.
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  rewarded: boolean;

  /**
   * Whether the ad is shown.
   *
   * - **true**: The ad is shown.
   * - **false**: The ad is not shown.
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  shown: boolean;

  /**
   * Whether the ad is clicked.
   *
   * - **true**: The ad is clicked.
   * - **false**: The ad is not clicked.
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  clicked: boolean;

  /**
   * Custom parameter.
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  [key:string]: Object;
}