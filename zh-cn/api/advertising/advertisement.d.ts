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
 * @file 广告内容
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
   * 
   * customData: "test",
   * 
   * userId: "12345"
   * 
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
   * <!--RP1--><!--RP1End-->
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  [key:string]: Object;
}