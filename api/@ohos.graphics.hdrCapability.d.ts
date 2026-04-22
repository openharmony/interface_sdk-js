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
 * The hdrCapability module provides enums related to the High Dynamic Range (HDR) capability.
 *
 * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace hdrCapability {
  /**
   * Enumerates the HDR formats.
   *
   * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  enum HDRFormat {
    /**
     * Unsupported HDR type.
     *
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    NONE = 0,
    /**
     * Videos in Hybrid Log-Gamma (HLG) format.
     *
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    VIDEO_HLG = 1,
    /**
     * Videos in HDR10 format.
     *
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    VIDEO_HDR10 = 2,
    /**
     * Videos in HDR_VIVID format.
     *
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    VIDEO_HDR_VIVID = 3,
    /**
     * Images in HDR_VIVID format, stored in dual JPEG format.
     *
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    IMAGE_HDR_VIVID_DUAL = 4,
    /**
     * Images in HDR_VIVID format, stored in single HEIF format.
     *
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    IMAGE_HDR_VIVID_SINGLE = 5,
    /**
     * Images in HDR_ISO format, stored in dual JPEG format.
     *
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    IMAGE_HDR_ISO_DUAL = 6,
    /**
     * Images in HDR_ISO format, stored in single HEIF format.
     *
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    IMAGE_HDR_ISO_SINGLE = 7,
    /**
     * AIHDR format supported by video.
     *
     * This API can be used in atomic services since API version 24.
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