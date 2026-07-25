'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * Image AI analysis type. When not set, subject recognition and text recognition are enabled by default.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full [since 23]
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ImageAnalyzerType {
  /**
   * Subject recognition function.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SUBJECT = 0,
  /**
   * Text recognition function.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TEXT,
  /**
   * Object lookup function.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  OBJECT_LOOKUP
}
/**
 * Image AI analysis controller. You can bind this object to a supported component and call supported methods through
 * the controller.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ImageAnalyzerController {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor();
  /**
   * Gets the AI analysis types supported by the corresponding component.
   *
   * @returns { ImageAnalyzerType[] } The AI analysis types supported by the corresponding component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getImageAnalyzerSupportTypes(): ImageAnalyzerType[];
}
/**
 * Image AI analysis configuration item.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ImageAnalyzerConfig {
  /**
   * Image AI analysis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  types: ImageAnalyzerType[];
}
/**
 * Image AI analysis options.
 *
 * > **Description:**
 * >
 * > The types parameter in this feature has higher priority than the types parameter in
 * > [ImageAnalyzerConfig]{@link ImageAnalyzerConfig}. When both are set,
 * > the value set in this feature takes precedence.
 * >
 * > This feature depends on device capability and needs to be used with
 * > the [enableAnalyzer]{@link ImageAttribute.enableAnalyzer} interface
 * > of the corresponding component (for example, [Image component]{@link ./image}).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ImageAIOptions {
  /**
   * Image AI analysis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  types?: ImageAnalyzerType[];
  /**
   * Image AI analysis controller. The enableAnalyzer interface of the corresponding component (for example,
   * the [enableAnalyzer]{@link ImageAttribute.enableAnalyzer}
   * interface of the Image component) must be set to true for this to take effect.
   *
   * Currently, only ESValue type is supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  aiController?: ImageAnalyzerController | ESValue;
}