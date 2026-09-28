/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */

/**
 * The **boardInfo** module is used to query hardware device information.
 *
 * > **NOTE**
 * >
 * > The initial APIs of this module are supported since API version 26. Newly added APIs
 * > will be marked with a superscript to indicate their earliest API version.
 * > The APIs of this module return information about device constants. You are not expected to call these APIs
 * > frequently.
 *
 * @syscap SystemCapability.Startup.BoardInfo
 * @stagemodelonly
 * @since 26.0.1 dynamic
 */
declare namespace boardInfo {
  /**
   * CPU ID.
   *
   * Example: AA AA AA AA 00 00 00 00(hexadecimal string)
   *
   * @syscap SystemCapability.Startup.BoardInfo
   * @stagemodelonly
   * @since 26.0.1 dynamic
   */
  const cpuId: string;

  /**
   * CPU architecture.
   *
   * Example: aarch64
   *
   * @syscap SystemCapability.Startup.BoardInfo
   * @stagemodelonly
   * @since 26.0.1 dynamic
   */
  const cpuArch: string;

  /**
   * CPU vendor information.
   *
   * Example: HISILICON
   *
   * @syscap SystemCapability.Startup.BoardInfo
   * @stagemodelonly
   * @since 26.0.1 dynamic
   */
  const cpuVendor: string;

  /**
   * Board serial number.
   *
   * **Required permission**: ohos.permission.ACCESS_BOARD_INFO
   *
   * Example: 0123456789ABCDEF.
   *
   * @permission ohos.permission.ACCESS_BOARD_INFO
   * @syscap SystemCapability.Startup.BoardInfo
   * @stagemodelonly
   * @since 26.0.1 dynamic
   */
  const boardSn: string;

  /**
   * board vendor.
   *
   * Example: HUAWEI
   *
   * @syscap SystemCapability.Startup.BoardInfo
   * @stagemodelonly
   * @since 26.0.1 dynamic
   */
  const boardVendor: string;

  /**
   * Board product name.
   *
   * Example: HAD-PCB
   *
   * @syscap SystemCapability.Startup.BoardInfo
   * @stagemodelonly
   * @since 26.0.1 dynamic
   */
  const boardName: string;

  /**
   * BIOS vendor.
   *
   * Example: HUAWEI
   *
   * @syscap SystemCapability.Startup.BoardInfo
   * @stagemodelonly
   * @since 26.0.1 dynamic
   */
  const biosVendor: string;

  /**
   * BIOS version.
   *
   * Example: 1.00
   *
   * @syscap SystemCapability.Startup.BoardInfo
   * @stagemodelonly
   * @since 26.0.1 dynamic
   */
  const biosVersion: string;

  /**
   * BIOS release date.
   *
   * Example: 2026/01/01 08:00:00
   *
   * @syscap SystemCapability.Startup.BoardInfo
   * @stagemodelonly
   * @since 26.0.1 dynamic
   */
  const biosDate: string;
}

export default boardInfo;
