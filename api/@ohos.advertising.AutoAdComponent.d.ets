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
 * @file Carousel Ad Component
 * @kit AdsKit
 */

import advertising from './@ohos.advertising';

/**
 * The AutoAdComponent module provides the capability of displaying carousel ads.
 *
 * @syscap SystemCapability.Advertising.Ads
 * @atomicservice [since 12]
 * @since 11
 */
@Component
declare struct AutoAdComponent {
    /**
     * Ad request parameters.
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    adParam: advertising.AdRequestParams;

    /**
     * Ad configuration options.
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    adOptions: advertising.AdOptions;

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
     * A constructor used to create an **AutoAdComponent** object.
     *
     * @syscap SystemCapability.Advertising.Ads
     * @atomicservice [since 12]
     * @since 11
     */
    build(): void;
}

export { AutoAdComponent };