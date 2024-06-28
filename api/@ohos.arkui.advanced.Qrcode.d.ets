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
 * @file Qrcode Advanced Component Interface Declaration
 * @kit ArkUI
 */

import { LengthMetrics } from '@ohos.arkui.node';
import { ColorMetrics } from '@ohos.arkui.node';
 
/**
 * Enum for QrcodeState
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export declare enum QrcodeState {
  /**
   * Normal type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  NORMAL = 0,
  /**
   * Expired type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  EXPIRED = 1,
  /**
   * Loading type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  LOADING = 2
}

/**
 * Interface CommonQrcodeOptions.
 *
 * @interface CommonQrcodeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface CommonQrcodeOptions {
  /**
   * Sets the edge length of the QR code substrate.
   *
   * @type { ?LengthMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  edgeLength?: LengthMetrics;
  /**
   * Sets QR code color.
   *
   * @type { ?ColorMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  color?: ColorMetrics;
  /**
   * Sets QR code substrate color.
   *
   * @type { ?ColorMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  backgroundColor?: ColorMetrics;
  /**
   * Sets QR code expiration prompt text color.
   *
   * @type { ?ColorMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  textColor?: ColorMetrics;
  /**
   * Sets QR code expiration prompt text.
   *
   * @type { ?string }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  textContent?: string;
  /**
   * Sets the rounded corners of the substrate rectangle.
   *
   * @type { ?LengthMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  borderRadius?: LengthMetrics;
  /**
   * Sets QR code transparency in refresh and loading states.
   *
   * @type { ?(number | Resource) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  opacity?: number | Resource;
  /**
   * Sets Page Switch Fade Curve.
   *
   * @type { ?(Curve | string | ICurve) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  animationCurve?: Curve | string | ICurve;
  /**
   * Sets page transition fade in duration.
   *
   * @type { ?number }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  animationDuration?: number;
  /**
   * Sets QR code edge length.
   *
   * @type { ?LengthMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  qrcodeSideLength?: LengthMetrics;
  /**
   * Sets invalid icon edge length.
   *
   * @type { ?LengthMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  expiredImageLength?: LengthMetrics;
  /**
   * Sets the font size for prompt text.
   *
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  textSize?: ResourceStr;
  /**
   * Sets the font weight of prompt text.
   *
   * @type { ?(number | FontWeight | string) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  textWeight?: number | FontWeight | string;
  /**
   * Sets icon and text spacing.
   *
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  space?: ResourceStr;
  /**
   * Sets loading icon edge length.
   *
   * @type { ?LengthMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  loadingImageLength?: LengthMetrics;
}

/**
 * The class for QrcodeOptions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export declare class QrcodeOptions {
  /**
   * Sets the edge length of the QR code substrate.
   *
   * @type { ?LengthMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  edgeLength?: LengthMetrics;
  /**
   * Sets QR code color.
   *
   * @type { ?ColorMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  color?: ColorMetrics;
  /**
   * Sets QR code substrate color.
   *
   * @type { ?ColorMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  backgroundColor?: ColorMetrics;
  /**
   * Sets QR code expiration prompt text color.
   *
   * @type { ?ColorMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  textColor?: ColorMetrics;
  /**
   * Sets QR code expiration prompt text.
   *
   * @type { ?string }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  textContent?: string;
  /**
   * Sets the rounded corners of the substrate rectangle.
   *
   * @type { ?LengthMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  borderRadius?: LengthMetrics;
  /**
   * Sets QR code transparency in refresh and loading states.
   *
   * @type { ?(number | Resource) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  opacity?: number | Resource;
  /**
   * Sets Page Switch Fade Curve.
   *
   * @type { ?(Curve | string | ICurve) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  animationCurve?: Curve | string | ICurve;
  /**
   * Sets page transition fade in duration.
   *
   * @type { ?number }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  animationDuration?: number;
  /**
   * Sets QR code edge length.
   *
   * @type { ?LengthMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  qrcodeSideLength?: LengthMetrics;
  /**
   * Sets invalid icon edge length.
   *
   * @type { ?LengthMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  expiredImageLength?: LengthMetrics;
  /**
   * Sets the font size for prompt text.
   *
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  textSize?: ResourceStr;
  /**
   * Sets the font weight of prompt text.
   *
   * @type { ?(number | FontWeight | string) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  textWeight?: number | FontWeight | string;
  /**
   * Sets icon and text spacing.
   *
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  space?: ResourceStr;
  /**
   * Sets loading icon edge length.
   *
   * @type { ?LengthMetrics }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  loadingImageLength?: LengthMetrics;
  /**
   * Constructed function.
   *
   * @param { CommonQrcodeOptions } options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  constructor(options: CommonQrcodeOptions);
}

/**
 * Declare Component Qrcode
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export declare struct Qrcode {
  /**
   * The options of Qrcode.
   *
   * @type { QrcodeOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  @Require 
  readonly options: QrcodeOptions;
  /**
   * The value of Qrcode.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  @Require
  readonly value: string;
  /**
   * The state of Qrcode.
   *
   * @type { QrcodeState }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  @Require
  readonly state: QrcodeState;
}
export {};

