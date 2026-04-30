/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @kit CoreFileKit
 */

/**
 * 该模块提供公共文件访问和管理模块中RootInfo与FileInfo中部分属性值的定义。
 *
 * @syscap SystemCapability.FileManagement.UserFileService
 * @systemapi
 * @since 9 dynamiconly
 * @deprecated since 23
 */
declare namespace fileExtensionInfo {
  /**
   * 组成RootInfo中的deviceType字段，表明此设备的类型。
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 23
   */
  enum DeviceType {
    /**
     * 本地c,d...盘。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    DEVICE_LOCAL_DISK = 1,

    /**
     * 多用户共享盘。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    DEVICE_SHARED_DISK = 2,

    /**
     * 分布式网络终端设备。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    DEVICE_SHARED_TERMINAL = 3,

    /**
     * 网络邻居设备。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    DEVICE_NETWORK_NEIGHBORHOODS = 4,

    /**
     * MTP设备。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    DEVICE_EXTERNAL_MTP = 5,

    /**
     * USB设备。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    DEVICE_EXTERNAL_USB = 6,

    /**
     * 云盘设备。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    DEVICE_EXTERNAL_CLOUD = 7
  }

  /**
   * 组成RootInfo中的deviceFlags字段，通过与运算判断是否具备某种能力。
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 23
   */
  namespace DeviceFlag {
    /**
     * 此设备支持读。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    const SUPPORTS_READ = 0b1;

    /**
     * 此设备支持写。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    const SUPPORTS_WRITE = 0b10;
  }

  /**
   * 组成FileInfo中的mode字段，通过与运算判断是否具备某种能力。
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 23
   */
  namespace DocumentFlag {
    /**
     * 代表文件。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    const REPRESENTS_FILE = 0b1;

    /**
     * 代表目录。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    const REPRESENTS_DIR = 0b10;

    /**
     * 此设备支持读。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    const SUPPORTS_READ = 0b100;

    /**
     * 此设备支持写。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    const SUPPORTS_WRITE = 0b1000;
  }
}

export default fileExtensionInfo;
