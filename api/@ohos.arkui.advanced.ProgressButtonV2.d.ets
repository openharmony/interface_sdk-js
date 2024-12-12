/*
 * Copyright (c) 2023-2023 Huawei Device Co., Ltd.
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
   * @type { string }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @crossplatform
   * @since 16
   */
  @Require
  @Param readonly content: string;

  /**
   * Sets the ProgressButtonV2 progressButtonWidth.
   * @type { ?Length }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @crossplatform
   * @since 16
   */
  @Param @Once progressButtonWidth?: Length;

  /**
   * Sets the ProgressButtonV2 clickCallback.
   * @type { () => void }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @crossplatform
   * @since 16
   */
  @Param readonly clickCallback: () => void;

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
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @crossplatform
   * @since 16
   */
  @Trace progressColor?: ResourceColor;

  /**
   * Set border color of the ProgressButtonV2.
   *
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @crossplatform
   * @since 16
   */
  @Trace borderColor?: ResourceColor;

  /**
   * Set text color of the ProgressButtonV2.
   *
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @crossplatform
   * @since 16
   */
  @Trace textColor?: ResourceColor;

  /**
   * Set background color of the ProgressButtonV2.
   *
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @crossplatform
   * @since 16
   */
  @Trace backgroundColor?: ResourceColor;

  constructor (options: ProgressButtonV2ColorOptions);
}

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
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @crossplatform
   * @since 16
   */
   progressColor?: ResourceColor;

  /**
   * Set border color of the ProgressButtonV2.
   *
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @crossplatform
   * @since 16
   */
   borderColor?: ResourceColor;

  /**
   * Set text color of the ProgressButtonV2.
   *
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @crossplatform
   * @since 16
   */
   textColor?: ResourceColor;

  /**
   * Set background color of the ProgressButtonV2.
   *
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @crossplatform
   * @since 16
   */
   backgroundColor?: ResourceColor;
}