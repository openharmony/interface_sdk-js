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
 * 本模块为请求的广告内容。
 *
 * @syscap SystemCapability.Advertising.Ads
 * @atomicservice [since 12]
 * @since 11
 */
export interface Advertisement {
  /**
   * 广告类型。
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
  adType: number;

  /**
   * 服务器验证参数。
   *
   * {
   *	customData: "test",
   *	userId: "12345"
   * }
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  rewardVerifyConfig: Map<string, string>;

  /**
   * 广告唯一标识。
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  uniqueId: string;

  /**
   * 广告是否获得奖励。
   * 
   * - true：获得奖励。
   * - false：没有获得奖励。
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  rewarded: boolean;

  /**
   * 广告是否展示。
   * 
   * - true：展示。
   * - false：未展示。
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  shown: boolean;

  /**
   * 广告是否被点击。
   * 
   * - true：被点击。
   * - false：未被点击。
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  clicked: boolean;

  /**
   * 自定义参数。
   * 
   * - isFullScreen：类型boolean。开屏广告自定义参数，用于标识返回的广告是否为全屏，true为全屏广告，false为半屏广告。
   * - biddingInfo：类型Object。用于获取实时竞价相关结果。
   * - biddingInfo.price：类型number。本条广告的eCPM（Effective Cost Per Mille，每一千次展示可以获得的广告收入）。
   * - biddingInfo.cur:类型string。 本条广告的价格币种。支持币种：CNY（单位：元）、USD（单位：美元）、EUR（单位：欧元）、GBP（单位：英镑）、JPY（单位：日元）。
   * - biddingInfo.nurl：类型string。媒体回传竞价成功结果的URL。
   * - biddingInfo.lurl：类型string。媒体回传竞价失败通知其他DSP竞价成功结果的URL。
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  [key:string]: Object;
}