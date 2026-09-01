/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * Defines the AI image analysis type. If it is not set, subject recognition and text recognition are enabled by
 * default.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare enum ImageAnalyzerType {
  /**
   * Subject recognition.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  SUBJECT = 0,

  /**
   * Text recognition.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  TEXT,

  /**
   * Object lookup.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  OBJECT_LOOKUP,
}

/**
 * Implements an AI image analysis controller, which provides control for image analysis features when bound to
 * supported components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare class ImageAnalyzerController {
  /**
   * A constructor used to create an **ImageAnalyzerController** instance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  constructor();

  /**
   * Obtains the analysis types supported by the corresponding component.
   *
   * @returns { ImageAnalyzerType[] } Analysis type supported by the corresponding component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  getImageAnalyzerSupportTypes(): ImageAnalyzerType[];
}

/**
 * Provides AI image analyzer configuration.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare interface ImageAnalyzerConfig {
  /**
   * AI image analysis types.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  types: ImageAnalyzerType[];
}

/**
 * Provides the AI image analysis options.
 *
 * > **NOTE**
 * >
 * > The **types** parameter of this API has a higher priority than that of
 * > [ImageAnalyzerConfig]{@link ImageAnalyzerConfig}. This means that, if both parameters are set, the value set by
 * > this API takes precedence.
 * >
 * > This API depends on device capabilities and must be used together with the
 * > [enableAnalyzer]{@link ImageAttribute#enableAnalyzer} API of the corresponding component (for example, the
 * > [Image]{@link ./image} component).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare interface ImageAIOptions {
  /**
   * AI image analysis types.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  types?: ImageAnalyzerType[];

  /**
   * AI image analysis controller.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  aiController?: ImageAnalyzerController;
}