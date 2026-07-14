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
 * 图像AI分析类型，未设置时默认开启主体识别和文字识别功能。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare enum ImageAnalyzerType {
  /**
   * 主体识别功能。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  SUBJECT = 0,

  /**
   * 文字识别功能。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  TEXT,

  /**
   * 对象查找功能。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  OBJECT_LOOKUP,
}

/**
 * 图像AI分析控制器。可以将此对象绑定至支持的组件，通过控制器来调用支持的方法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare class ImageAnalyzerController {
  /**
   * 构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  constructor();

  /**
   * 获取对应组件支持的AI分析类型。
   *
   * @returns { ImageAnalyzerType[] } 对应组件支持的AI分析类型。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  getImageAnalyzerSupportTypes(): ImageAnalyzerType[];
}

/**
 * 图像AI分析配置项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare interface ImageAnalyzerConfig {
  /**
   * 图像AI分析类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  types: ImageAnalyzerType[];
}

/**
 * 图像AI分析选项。
 *
 * > **说明：**
 * >
 * > 该特性中的参数types优先级高于[ImageAnalyzerConfig]{@link ImageAnalyzerConfig}中的参数types，两者同时设置时以该特性设置的值为准。
 * >
 * > 该特性依赖设备能力，且需要和对应组件的[enableAnalyzer]{@link ImageAttribute#enableAnalyzer}接口
 * > （例如[Image组件]{@link ./image}）搭配使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare interface ImageAIOptions {
  /**
   * 图像AI分析类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  types?: ImageAnalyzerType[];

  /**
   * 图像AI分析控制器。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  aiController?: ImageAnalyzerController;
}