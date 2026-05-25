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
 * 本模块提供展示广告的能力，覆盖了原生、贴片、开屏等广告样式。
 *
 * @syscap SystemCapability.Advertising.Ads
 * @atomicservice [since 12]
 * @since 11
 */
@Component
declare struct AdComponent {
  /**
   * 广告对象数组。
   *
   * 说明：非贴片广告类型，组件只展示数组第一个数据。
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  ads: advertising.Advertisement[];

  /**
   * 广告展示参数。
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  displayOptions: advertising.AdDisplayOptions;

  /**
   * 广告状态变化回调。
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  interactionListener: advertising.AdInteractionListener;

  /**
   * 应用自渲染广告样式。应用自渲染广告样式为受限使用能力，具体请前往
   * [流量变现官网客服支持](https://developer.huawei.com/consumer/cn/doc/monetize/kefuzhichi-0000001104461922)进行咨询。
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 20]
   * @since 12
   */
  @BuilderParam
  adRenderer?: () => void;

  /**
   * 用于对外提供贴片广告播放状态，设置1为播放，2为暂停，默认值为2，其他值为非法值，不改变之前的播放状态。
   * 在贴片广告所在页面需要通过@State关联属性，使用方法参考
   * [示例代码](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ads-publisher-service-roll#展示广告)。
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 20]
   * @since 15
   */
  @Prop
  rollPlayState?: number;

  /**
   * 用于创建AdComponent对象的构造函数。
   *
   * @syscap SystemCapability.Advertising.Ads
   * @atomicservice [since 12]
   * @since 11
   */
  build(): void;
}

export { AdComponent };