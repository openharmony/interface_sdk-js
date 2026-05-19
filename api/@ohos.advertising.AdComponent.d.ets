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
 * This module provides the capability of displaying ads.
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
   * Ad status change callback.
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  interactionListener: advertising.AdInteractionListener;

  /**
   * Ad self-rendering.
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 20]
   * @since 12
   */
  @BuilderParam
  adRenderer?: () => void;

  /**
   * Roll ad state. The value **1** means that the roll ad is playing,
   * and the value **2** (default) means that the roll ad is paused.
   * Other values are invalid and the previous playback state is not changed.
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