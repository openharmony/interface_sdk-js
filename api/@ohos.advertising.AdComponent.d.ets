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
 * @file Ad Component
 * @kit AdsKit
 */

import advertising from './@ohos.advertising';

/**
 * This module provides the capability of displaying ads, covering native, roll, splash, and other ad styles.
 *
 * @syscap SystemCapability.Advertising.Ads
 * @atomicservice [since 12]
 * @since 11
 */
@Component
declare struct AdComponent {
  /**
   * Array of ad objects.
   * 
   * NOTE: For non-roll ad types, the component only displays the first data in the array.
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  ads: advertising.Advertisement[];

  /**
   * Ad display parameters.
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  displayOptions: advertising.AdDisplayOptions;

  /**
   * Callback for ad status changes.
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  interactionListener: advertising.AdInteractionListener;

  /**
   * Application self-rendered ad style. The application self-rendered ad style is a restricted capability. For details,
   * please consult 
   * [Traffic Monetization Official Website Customer Support](https://developer.huawei.com/consumer/en/doc/monetize/
   * support-0000001061434261).
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 20]
   * @since 12
   */
  @BuilderParam
  adRenderer?: () => void;

  /**
   * Used to provide the playback status of roll ads externally. Set to 1 for playing and 2 for paused. The default 
   * value is 2. Other values are invalid and do not change the previous playback status. The page where the roll ad is 
   * located needs to be associated with the property through @State. For usage methods, refer to the 
   * [sample code](https://developer.huawei.com/consumer/en/doc/harmonyos-guides/
   * ads-publisher-service-roll#section4281165885118).
   * 
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 20]
   * @since 15
   */
  @Prop
  rollPlayState?: number;

  /**
   * A constructor used to create an **AdComponent** object.
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  build(): void;
}

export { AdComponent };