/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * The **fileExtensionInfo** module defines attributes in **RootInfo** and **FileInfo** of the user file access and 
 * management module.
 *
 * @syscap SystemCapability.FileManagement.UserFileService
 * @systemapi
 * @since 9 dynamiconly
 * @deprecated since 23
 */
declare namespace fileExtensionInfo {
  /**
   * Defines the values of **deviceType** used in **RootInfo**.
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 23
   */
  enum DeviceType {
    /**
     * Local disk.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    DEVICE_LOCAL_DISK = 1,

    /**
     * Shared disk.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    DEVICE_SHARED_DISK = 2,

    /**
     * Distributed network device.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    DEVICE_SHARED_TERMINAL = 3,

    /**
     * Network neighbor device.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    DEVICE_NETWORK_NEIGHBORHOODS = 4,

    /**
     * MTP device.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    DEVICE_EXTERNAL_MTP = 5,

    /**
     * USB device.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    DEVICE_EXTERNAL_USB = 6,

    /**
     * Cloud disk.
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
   * Defines the values of **deviceFlags** used in **RootInfo**. **deviceFlags** is used to determine whether a 
   * capability is available through the AND operation.
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 23
   */
  namespace DeviceFlag {
    /**
     * The device supports read.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    const SUPPORTS_READ = 0b1;

    /**
     * The device supports write.
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
   * Defines the values of **mode** used in **FileInfo**.
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 23
   */
  namespace DocumentFlag {
    /**
     * File.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    const REPRESENTS_FILE = 0b1;

    /**
     * Directory.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    const REPRESENTS_DIR = 0b10;

    /**
     * The device supports read.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    const SUPPORTS_READ = 0b100;

    /**
     * The device supports write.
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
