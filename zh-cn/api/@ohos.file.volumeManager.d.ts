/*
 * Copyright (C) 2022-2026 Huawei Device Co., Ltd.
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
 * @kit CoreFileKit
 */

import { AsyncCallback, Callback } from './@ohos.base';

/**
 * 该模块提供卷设备、磁盘设备查询和管理的相关功能：包括查询卷设备信息，对卷设备的挂载卸载、对磁盘设备分区以及卷设备的格式化等功能。
 *
 * @syscap SystemCapability.FileManagement.StorageService.Volume
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace volumeManager {
  /**
   * 获取所有卷。
   *
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export interface Volume {
    /**
     * 卷设备ID的格式为vol-{主设备号}-{次设备号}，主设备号用来区分不同种类的设备，
     * 次设备号用来区分同一类型的多个设备，卷设备ID会随着插卡顺序不同而变化。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    id: string;

    /**
     * 卷设备uuid是卷设备的通用唯一识别码，不会随着插卡顺序变化而变化，但是卷设备的格式化会改变卷设备的uuid。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    uuid: string;

    /**
     * 卷设备所属的磁盘ID，一个磁盘可以有一个或者多个卷设备。磁盘设备ID的格式为disk-{主设备号}-{次设备号}，与卷设备ID相似。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    diskId: string;

    /**
     * 卷设备描述。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    description: string;

    /**
     * 表示卷设备是否可移除，当前仅支持可移除存储设备。true为可移除；false为不可移除。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    removable: boolean;

    /**
     * 卷设备状态标识：
     * 
     * 0：卸载状态 UNMOUNTED。
     * 
     * 1：检查状态 CHECKING。
     * 
     * 2：挂载状态 MOUNTED。
     * 
     * 3：正在弹出状态 EJECTING。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    state: int;

    /**
     * 卷设备的挂载地址，一般为/mnt/data/external/{uuid}。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    path: string;

    /**
     * 文件系统的类型，常见有ext2、vfat、NTFS等。
     * 
     * **说明**：从API version 24开始，支持ISO9660、UDF。
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    fsType: string;
  }
  /**
   * 获取当前外置存储中所有卷设备信息，使用callback异步回调。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { AsyncCallback<Array<Volume>> } callback - 获取当前所有可获得的卷设备信息之后的回调。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Mandatory
   *     parameters are left unspecified;
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllVolumes(callback: AsyncCallback<Array<Volume>>): void;

  /**
   * 获取当前外置存储中所有卷设备信息，使用Promise异步回调。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @returns { Promise<Array<Volume>> } Promise对象，返回当前所有可获得的卷设备信息。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:Mandatory
   *     parameters are left unspecified;
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllVolumes(): Promise<Array<Volume>>;

  /**
   * 挂载指定卷设备，使用callback异步回调。当前仅支持vfat、exfat以及ntfs三种文件系统的卷设备挂载。
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } volumeId - 卷设备id。
   * @param { AsyncCallback<void> } callback - 挂载指定卷设备之后的回调。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600003 - Failed to mount.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function mount(volumeId: string, callback: AsyncCallback<void>): void;

  /**
   * 挂载指定卷设备，使用Promise异步回调。当前仅支持vfat、exfat以及ntfs三种文件系统的卷设备挂载。
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } volumeId - 卷设备id。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600003 - Failed to mount.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function mount(volumeId: string): Promise<void>;

  /**
   * 卸载指定卷设备，使用callback异步回调。
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } volumeId - 卷设备id。
   * @param { AsyncCallback<void> } callback - 卸载指定卷设备之后的回调。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600004 - Failed to unmount.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function unmount(volumeId: string, callback: AsyncCallback<void>): void;

  /**
   * 卸载指定卷设备，使用Promise异步回调。
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } volumeId - 卷设备id。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600004 - Failed to unmount.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function unmount(volumeId: string): Promise<void>;

  /**
   * 通过卷设备uuid获得指定卷设备信息，使用callback异步回调。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } uuid - 卷设备uuid。
   * @param { AsyncCallback<Volume> } callback - 获取卷设备信息之后的回调。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getVolumeByUuid(uuid: string, callback: AsyncCallback<Volume>): void;

  /**
   * 通过卷设备uuid获得指定卷设备信息，使用Promise异步回调。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } uuid - 卷设备uuid。
   * @returns { Promise<Volume> } Promise对象，返回当前uuid的卷设备信息。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getVolumeByUuid(uuid: string): Promise<Volume>;

  /**
   * 通过指定卷设备id获得卷设备信息，使用callback异步回调。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } volumeId - 卷设备id。
   * @param { AsyncCallback<Volume> } callback - 获取卷设备信息之后的回调。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getVolumeById(volumeId: string, callback: AsyncCallback<Volume>): void;

  /**
   * 通过卷设备id获得指定卷设备信息，使用Promise异步回调。
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } volumeId - 卷设备id。
   * @returns { Promise<Volume> } Promise对象，返回当前id的卷设备信息。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getVolumeById(volumeId: string): Promise<Volume>;

  /**
   * 修改指定卷设备描述，使用callback异步回调。当前仅支持修改ntfs和exfat两种文件系统类型的设备描述，
   * 只有处于卸载状态的卷设备可以修改设备描述。
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } uuid - 卷设备uuid。
   * @param { string } description - 卷设备描述。
   * @param { AsyncCallback<void> } callback - 设置卷描述之后的回调。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setVolumeDescription(uuid: string, description: string, callback: AsyncCallback<void>): void;

  /**
   * 修改指定卷设备描述，使用Promise异步回调。当前仅支持修改ntfs和exfat两种文件系统类型的设备描述，
   * 只有处于卸载状态的卷设备可以修改设备描述。
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } uuid - 卷设备uuid。
   * @param { string } description - 卷设备描述。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setVolumeDescription(uuid: string, description: string): Promise<void>;

  /**
   * 对指定卷设备进行格式化，使用callback异步回调。当前仅支持vfat和exfat两种文件系统类型的格式化，只有处于卸载状态的
   * 卷设备可以进行格式化，格式化后卷设备的uuid、挂载路径和卷设备描述均会发生变化。
   *
   * @permission ohos.permission.MOUNT_FORMAT_MANAGER
   * @param { string } volumeId - 卷设备id。
   * @param { string } fsType - 文件系统类型(vfat或者exfat)。
   * @param { AsyncCallback<void> } callback - 对指定卷设备格式化后的回调。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function format(volumeId: string, fsType: string, callback: AsyncCallback<void>): void;

  /**
   * 对指定卷设备进行格式化，使用Promise异步回调。当前仅支持vfat和exfat两种文件系统类型的格式化，只有处于卸载状态的
   * 卷设备可以进行格式化，格式化后卷设备的uuid、挂载路径和卷设备描述均会发生变化。
   *
   * @permission ohos.permission.MOUNT_FORMAT_MANAGER
   * @param { string } volumeId - 卷设备id。
   * @param { string } fsType - 文件系统类型（vfat或者exfat）。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function format(volumeId: string, fsType: string): Promise<void>;

  /**
   * 对磁盘进行分区，使用callback异步回调。当前仅支持将磁盘设备重新分区为一个分区，系统是支持读取多分区的磁盘设备。
   * 不支持对光盘进行分区。
   *
   * @permission ohos.permission.MOUNT_FORMAT_MANAGER
   * @param { string } diskId - 卷设备所属的磁盘id。
   * @param { int } type - 分区类型。
   * @param { AsyncCallback<void> } callback - 对磁盘设备进行分区。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function partition(diskId: string, type: int, callback: AsyncCallback<void>): void;

  /**
   * 对磁盘设备进行分区，使用Promise异步回调。当前仅支持将磁盘设备重新分区为一个分区，系统是支持读取多分区的磁盘设备。
   * 不支持对光盘进行分区。
   *
   * @permission ohos.permission.MOUNT_FORMAT_MANAGER
   * @param { string } diskId - 卷设备所属的磁盘设备id。
   * @param { int } type - 分区类型。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function partition(diskId: string, type: int): Promise<void>;
}

export default volumeManager;