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
 * Defines the image AI analysis type. If it is not set, subject recognition and text recognition are enabled by
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
 * Defines the image AI analysis controller. You can bind this object to a supported component and call the methods it
 * provides through the controller.
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
   * Obtains the image AI analysis types supported by the component to which this controller is bound. Before calling
   * this method, bind the controller to a component through the **aiController** attribute of components such as
   * **Image** and **ImageAnimator**. Otherwise, an empty array is returned.
   *
   * @returns { ImageAnalyzerType[] } AI analysis type supported by the corresponding component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  getImageAnalyzerSupportTypes(): ImageAnalyzerType[];
}

/**
 * Provides image AI analyzer configuration.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare interface ImageAnalyzerConfig {
  /**
   * Image AI analysis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  types: ImageAnalyzerType[];
}

/**
 * Provides the image AI analysis options.
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
   * Image AI analysis type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  types?: ImageAnalyzerType[];

  /**
   * Image AI analysis controller.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  aiController?: ImageAnalyzerController;
}