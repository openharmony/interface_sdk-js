/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file 提供图像画质处理能力。
 * @kit ImageKit
 */

import image from './@ohos.multimedia.image';

/**
 * 提供图像内容处理能力，包括图像缩放。
 * @namespace videoProcessingEngine
 * @syscap SystemCapability.Multimedia.VideoProcessingEngine
 * @form
 * @since 18 dynamic
 * @since 23 static
 */
declare namespace videoProcessingEngine {
  /**
   * 细节增强的处理质量等级。
   * @enum {int}
   * @syscap SystemCapability.Multimedia.VideoProcessingEngine
   * @form
   * @since 18 dynamic
   * @since 23 static
   */
  enum QualityLevel {
    /**
     * 不进行细节增强。
     * @syscap SystemCapability.Multimedia.VideoProcessingEngine
     * @form
     * @since 18 dynamic
     * @since 23 static
     */
    NONE = 0,
    /**
     * 低质量等级的细节增强，处理速度较快。该等级为默认等级。
     * @syscap SystemCapability.Multimedia.VideoProcessingEngine
     * @form
     * @since 18 dynamic
     * @since 23 static
     */
    LOW = 1,
    /**
     * 中等质量等级的细节增强，处理速度介于低质量等级和高质量等级之间。
     * @syscap SystemCapability.Multimedia.VideoProcessingEngine
     * @form
     * @since 18 dynamic
     * @since 23 static
     */
    MEDIUM = 2,
    /**
     * 高质量等级的细节增强，处理速度相对较慢。
     * @syscap SystemCapability.Multimedia.VideoProcessingEngine
     * @form
     * @since 18 dynamic
     * @since 23 static
     */
    HIGH = 3
  }

  /**
   * 提供ImageProcessor类型，包括图像处理功能。
   * @typedef ImageProcessor
   * @syscap SystemCapability.Multimedia.VideoProcessingEngine
   * @form
   * @since 18 dynamic
   * @since 23 static
   */
  interface ImageProcessor {
    /**
     * 根据指定的宽度和高度对源图像进行必要的缩放处理，生成目标图像。
     * <br>提供不同质量等级的缩放方式，用于平衡处理性能和图像质量。该方法使用Promise返回处理结果。
     * @param { image.PixelMap } sourceImage - 源PixelMap。
     * @param { int } width - 缩放后的宽度。
     * @param { int } height - 缩放后的高度。
     * @param { QualityLevel } [level] - 处理质量等级。
     * @returns { Promise<image.PixelMap> } Promise对象，用于返回处理后的PixelMap对象。
     * @throws { BusinessError } 801 - 不支持该能力。由于设备能力受限，enhanceDetail函数无法正常工作。
     * @throws { BusinessError } 29200007 - 内存不足。
     * @throws { BusinessError } 29200009 - 输入参数无效。以下情况会返回该错误：
     * <br>1 - 输入或输出图像缓冲区无效，例如图像缓冲区的宽度或高度过大，或者色彩空间不正确。
     * <br>2 - 参数无效，例如细节增强质量等级不正确。
     * @syscap SystemCapability.Multimedia.VideoProcessingEngine
     * @form
     * @since 18 dynamic
     * @since 23 static
     */
    enhanceDetail(sourceImage: image.PixelMap, width: int, height: int, level?: QualityLevel): Promise<image.PixelMap>;

    /**
     * 根据指定的宽度和高度对源图像进行必要的缩放处理，生成目标图像。
     * <br>提供不同质量等级的缩放方式，用于平衡处理性能和图像质量。
     * @param { image.PixelMap } sourceImage - 源PixelMap。
     * @param { int } width - 缩放后的宽度。
     * @param { int } height - 缩放后的高度。
     * @param { QualityLevel } [level] - 处理质量等级。
     * @returns { image.PixelMap } 操作成功时返回处理后的PixelMap对象，否则返回undefined。
     * @throws { BusinessError } 801 - 不支持该能力。由于设备能力受限，enhanceDetailSync函数无法正常工作。
     * @throws { BusinessError } 29200004 - 图像缓冲区处理失败。例如，处理超时。
     * @throws { BusinessError } 29200007 - 内存不足。
     * @throws { BusinessError } 29200009 - 输入参数无效。以下情况会返回该错误：
     * <br>1 - 输入或输出图像缓冲区无效，例如图像缓冲区的宽度或高度过大，或者色彩空间不正确。
     * <br>2 - 参数无效，例如细节增强质量等级不正确。
     * @syscap SystemCapability.Multimedia.VideoProcessingEngine
     * @form
     * @since 18 dynamic
     * @since 23 static
     */
    enhanceDetailSync(sourceImage: image.PixelMap, width: int, height: int, level?: QualityLevel): image.PixelMap;

    /**
     * 根据指定的缩放比例对源图像进行必要的缩放处理，生成目标图像。
     * <br>提供不同质量等级的缩放方式，用于平衡处理性能和图像质量。该方法使用Promise返回处理结果。
     * @param { image.PixelMap } sourceImage - 源PixelMap。
     * @param { double } scale - 缩放比例。
     * @param { QualityLevel } [level] - 处理质量等级。
     * @returns { Promise<image.PixelMap> } Promise对象，用于返回处理后的PixelMap对象。
     * @throws { BusinessError } 801 - 不支持该能力。由于设备能力受限，enhanceDetail函数无法正常工作。
     * @throws { BusinessError } 29200007 - 内存不足。
     * @throws { BusinessError } 29200009 - 输入参数无效。以下情况会返回该错误：
     * <br>1 - 输入或输出图像缓冲区无效，例如图像缓冲区的宽度或高度过大，或者色彩空间不正确。
     * <br>2 - 参数无效，例如细节增强质量等级不正确。
     * @syscap SystemCapability.Multimedia.VideoProcessingEngine
     * @form
     * @since 18 dynamic
     * @since 23 static
     */
    enhanceDetail(sourceImage: image.PixelMap, scale: double, level?: QualityLevel): Promise<image.PixelMap>;

    /**
     * 根据指定的缩放比例对源图像进行必要的缩放处理，生成目标图像。
     * <br>提供不同质量等级的缩放方式，用于平衡处理性能和图像质量。
     * @param { image.PixelMap } sourceImage - 源PixelMap。
     * @param { double } scale - 缩放比例。
     * @param { QualityLevel } [level] - 处理质量等级。
     * @returns { image.PixelMap } 操作成功时返回处理后的PixelMap对象，否则返回undefined。
     * @throws { BusinessError } 801 - 不支持该能力。由于设备能力受限，enhanceDetailSync函数无法正常工作。
     * @throws { BusinessError } 29200004 - 图像缓冲区处理失败。例如，处理超时。
     * @throws { BusinessError } 29200007 - 内存不足。
     * @throws { BusinessError } 29200009 - 输入参数无效。以下情况会返回该错误：
     * <br>1 - 输入或输出图像缓冲区无效，例如图像缓冲区的宽度或高度过大，或者色彩空间不正确。
     * <br>2 - 参数无效，例如细节增强质量等级不正确。
     * @syscap SystemCapability.Multimedia.VideoProcessingEngine
     * @form
     * @since 18 dynamic
     * @since 23 static
     */
    enhanceDetailSync(sourceImage: image.PixelMap, scale: double, level?: QualityLevel): image.PixelMap;
  }

  /**
   * 初始化图像处理的全局环境。
   * @returns { Promise<void> } Promise对象，用于返回操作结果。
   * 操作失败时返回错误信息。
   * @throws { BusinessError } 801 - 不支持该能力。由于设备能力受限，initializeEnvironment函数无法正常工作。
   * @throws { BusinessError } 29200002 - 图像处理全局环境初始化失败，例如GPU环境初始化失败。
   * @throws { BusinessError } 29200006 - 不允许执行该操作，可能是由于当前状态不正确。
   * @throws { BusinessError } 29200007 - 内存不足。
   * @syscap SystemCapability.Multimedia.VideoProcessingEngine
   * @form
   * @since 18 dynamic
   * @since 23 static
   */
  function initializeEnvironment(): Promise<void>;
  /**
   * 反初始化图像处理的全局环境。
   * @returns { Promise<void> } Promise对象，用于返回操作结果。
   * 操作失败时返回错误信息。
   * @throws { BusinessError } 29200006 - 不允许执行该操作，可能是由于当前状态不正确。
   * @syscap SystemCapability.Multimedia.VideoProcessingEngine
   * @form
   * @since 18 dynamic
   * @since 23 static
   */
  function deinitializeEnvironment(): Promise<void>;
  /**
   * 创建图像处理实例。
   * @returns { ImageProcessor } 操作成功时返回ImageProcessor实例，否则返回null。
   * @throws { BusinessError } 801 - 不支持该能力。由于设备能力受限，create函数无法正常工作。
   * @throws { BusinessError } 29200003 - 创建图像处理实例失败。例如，实例数量超过上限。
   * @throws { BusinessError } 29200007 - 内存不足。
   * @syscap SystemCapability.Multimedia.VideoProcessingEngine
   * @form
   * @since 18 dynamic
   * @since 23 static
   */
  function create(): ImageProcessor;
}

export default videoProcessingEngine;
