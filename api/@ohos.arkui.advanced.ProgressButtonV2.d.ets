/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @file
 * @kit ArkUI
 */

import { LengthMetrics } from './@ohos.arkui.node';
import { ColorMetrics } from './@ohos.arkui.node';

/**
 * Declare Component ProgressButtonV2
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @crossplatform
 * @since 16
 */
@ComponentV2
export declare struct ProgressButtonV2 {
  /**
   * Sets the ProgressButtonV2 progress.
   * @type { number }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @crossplatform
   * @since 16
   */
  @Require
  @Param readonly progress: number;

  /**
   * Sets the ProgressButtonV2 content.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @crossplatform
   * @since 16
   */
  @Require
  @Param readonly content: ResourceStr;

  /**
   * Sets the ProgressButtonV2 progressButtonWidth.
   * @type { ?LengthMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @crossplatform
   * @since 16
   */
  @Param @Once progressButtonWidth?: LengthMetrics;

  /**
   * Sets the ProgressButtonV2 onClicked.
   * @type { ClickCallBack }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @crossplatform
   * @since 16
   */
  @Param readonly onClicked: ClickCallBack;

  /**
   * Sets the ProgressButtonV2 enable state.
   * @type { boolean }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @crossplatform
   * @since 16
   */
  @Param readonly enable: boolean;

  /**
   * Set Color options of the ProgressButtonV2.
   *
   * @type { ?ProgressButtonV2Color }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @crossplatform
   * @since 16
   */
  @Param colorOptions?: ProgressButtonV2Color;
}

/**
 * Declare ProgressButtonV2 Color.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @crossplatform
 * @since 16
 */
@ObservedV2
export declare class ProgressButtonV2Color {
  /**
   * Set progress color of the ProgressButtonV2.
   *
   * @type { ?ColorMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @crossplatform
   * @since 16
   */
  @Trace progressColor?: ColorMetrics;

  /**
   * Set border color of the ProgressButtonV2.
   *
   * @type { ?ColorMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @crossplatform
   * @since 16
   */
  @Trace borderColor?: ColorMetrics;

  /**
   * Set text color of the ProgressButtonV2.
   *
   * @type { ?ColorMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @crossplatform
   * @since 16
   */
  @Trace textColor?: ColorMetrics;

  /**
   * Set background color of the ProgressButtonV2.
   *
   * @type { ?ColorMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @crossplatform
   * @since 16
   */
  @Trace backgroundColor?: ColorMetrics;

  /**
   * The constructor of ProgressButtonV2
   *
   * @param options { ProgressButtonV2ColorOptions } the options of the ProgressButtonV2
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  constructor (options: ProgressButtonV2ColorOptions);
}

/**
 * Defines clickCallback of the ProgressButtonV2.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @crossplatform
 * @since 16
 */
export type ClickCallBack = () => void;

/**
 * Declare Color options interface of the ProgressButtonV2.
 *
 * @interface ProgressButtonV2ColorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @crossplatform
 * @since 16
 */
export declare interface ProgressButtonV2ColorOptions {
  /**
   * Set progress color of the ProgressButtonV2.
   *
   * @type { ?ColorMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @crossplatform
   * @since 16
   */
   progressColor?: ColorMetrics;

  /**
   * Set border color of the ProgressButtonV2.
   *
   * @type { ?ColorMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @crossplatform
   * @since 16
   */
   borderColor?: ColorMetrics;

  /**
   * Set text color of the ProgressButtonV2.
   *
   * @type { ?ColorMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @crossplatform
   * @since 16
   */
   textColor?: ColorMetrics;

  /**
   * Set background color of the ProgressButtonV2.
   *
   * @type { ?ColorMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @crossplatform
   * @since 16
   */
   backgroundColor?: ColorMetrics;
}