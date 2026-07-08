/*
* Copyright (C) 2022-2023 Huawei Device Co., Ltd.
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
 * @file
 * @kit ArkGraphics2D
 */

import { AsyncCallback } from './@ohos.base';

/**
 * 本模块提供HDR（高动态显示范围）能力涉及到的相关枚举类型。
 *
 * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace hdrCapability {
  /**
   * HDR格式枚举。
   *
   * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  enum HDRFormat {
    /**
     * 不支持HDR类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    NONE = 0,
    /**
     * 支持视频的HLG格式。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    VIDEO_HLG = 1,
    /**
     * 支持视频的HDR10格式。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    VIDEO_HDR10 = 2,
    /**
     * 支持视频的HDR_VIVID格式。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    VIDEO_HDR_VIVID = 3,
    /**
     * 支持图片的HDR_VIVID格式，以dual JPEG格式存储。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    IMAGE_HDR_VIVID_DUAL = 4,
    /**
     * 支持图片的HDR_VIVID格式，以single HEIF格式存储。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    IMAGE_HDR_VIVID_SINGLE = 5,
    /**
     * 支持图片的HDR_ISO格式，以dual JPEG格式存储。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    IMAGE_HDR_ISO_DUAL = 6,
    /**
     * 支持图片的HDR_ISO格式，以single HEIF格式存储。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    IMAGE_HDR_ISO_SINGLE = 7,
    /**
     * 支持视频的AIHDR格式。
     *
     * 从API version 24开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    VIDEO_AIHDR = 8
  }
}

export default hdrCapability;