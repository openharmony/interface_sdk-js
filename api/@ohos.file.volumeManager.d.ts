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
 * The **volumeManager** module provides APIs for querying and managing volumes and disks, including querying volume
 * information, mounting or unmounting a volume, partitioning a disk, and formatting a volume.
 *
 * @syscap SystemCapability.FileManagement.StorageService.Volume
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace volumeManager {
  /**
   * Get All Volumes.
   *
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export interface Volume {
    /**
     * Volume ID, in the vol-{Primary device ID}-{Secondary device ID} format. The primary device IDs identify devices
     * of different types. The secondary device IDs identify different devices of the same type. The volume IDs vary
     * depending on the card insertion sequence.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    id: string;

    /**
     * Volume UUID, which uniquely identifies a volume irrespective of the card insertion sequence. However, the UUID of
     * a volume will change after the volume is formatted.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    uuid: string;

    /**
     * ID of the disk to which the volume belongs. A disk can have one or more volumes. The disk ID is in the disk-{
     * Primary device ID}-{Secondary device ID} format, which is similar to the volume ID.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    diskId: string;

    /**
     * Description of the volume.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    description: string;

    /**
     * Whether the volume can be removed. Currently, only removable storage devices are supported. The value **true**
     * means the device can be removed; the value **false** means the opposite.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    removable: boolean;

    /**
     * Volume status.
     *
     * **0**: The volume is unmounted.
     *
     * **1**: The volume is being checked.
     *
     * **2**: The volume is mounted.
     *
     * **3**: The volume is being ejected.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    state: int;

    /**
     * Path of the volume mounted. Generally, the path is **\/mnt/data/external/{uuid}**.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    path: string;

    /**
     * File system type. Common file systems are **ext2**, **vfat**, and **NTFS**.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    fsType: string;
  }
  /**
   * Obtains information about all volumes of this external storage device. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { AsyncCallback<Array<Volume>> } callback - Callback used to return information about all available volumes.
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
   * Obtains information about all volumes of this external storage device. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @returns { Promise<Array<Volume>> } Promise used to return the information about all available volume devices.
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
   * Mounts a volume. This API uses an asynchronous callback to return the result. Currently, only the FAT, exFAT, ext4
   * and NTFS file systems are supported.
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } volumeId - Volume ID.
   * @param { AsyncCallback<void> } callback - Callback invoked when the specified volume is mounted.
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
   * Mounts a volume. This API uses a promise to return the result. Currently, only the FAT, exFAT, ext4 and NTFS file
   * systems are supported.
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } volumeId - Volume ID.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Unmounts a volume. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } volumeId - Volume ID.
   * @param { AsyncCallback<void> } callback - Callback invoked when the specified volume is unmounted.
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
   * Unmounts a volume. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } volumeId - Volume ID.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains information about a volume based on the UUID. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } uuid - UUID of the volume.
   * @param { AsyncCallback<Volume> } callback - Callback used to return the volume information obtained.
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
   * Obtains information about a volume based on the universally unique identifier (UUID). This API uses a promise to
   * return the result.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } uuid - UUID of the volume.
   * @returns { Promise<Volume> } Promise used to return the volume information of the current UUID.
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
   * Obtains information about a volume based on the volume ID. This API uses an asynchronous callback to return the
   * result.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } volumeId - Volume ID.
   * @param { AsyncCallback<Volume> } callback - Callback used to return the volume information obtained.
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
   * Obtains information about a volume based on the volume ID. This API uses a promise to return the result.
   *
   * @permission ohos.permission.STORAGE_MANAGER
   * @param { string } volumeId - Volume ID.
   * @returns { Promise<Volume> } Promise used to return the volume information of the current ID.
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
   * Sets volume description. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } uuid - UUID of the volume.
   * @param { string } description - Description of the volume.
   * @param { AsyncCallback<void> } callback - Callback invoked after the volume description is set.
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
   * Sets volume description. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } uuid - UUID of the volume.
   * @param { string } description - Description of the volume.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Formats a volume. This API uses an asynchronous callback to return the result. Currently, only the virtual file
   * allocation table (VFAT), ext4 and exFAT file systems are supported. Only unmounted volumes can be formatted. After
   * a volume is formatted, the UUID, mounting path, and description of the volume will change.
   *
   * @permission ohos.permission.MOUNT_FORMAT_MANAGER
   * @param { string } volumeId - Volume ID.
   * @param { string } fsType - File system type, which can be VFAT or exFAT.
   * @param { AsyncCallback<void> } callback - Callback that returns no value.
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
   * Formats a volume. This API uses a promise to return the result. Currently, only the virtual file allocation table (
   * VFAT), ext4 and exFAT file systems are supported. Only unmounted volumes can be formatted. After a volume is
   * formatted, the UUID, mounting path, and description of the volume will change.
   *
   * @permission ohos.permission.MOUNT_FORMAT_MANAGER
   * @param { string } volumeId - Volume ID.
   * @param { string } fsType - File system type, which can be VFAT or exFAT.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Partitions a disk. This API uses an asynchronous callback to return the result. The system supports access to
   * multi-partition disks. Currently, this API can partition a disk into only one partition.
   *
   * @permission ohos.permission.MOUNT_FORMAT_MANAGER
   * @param { string } diskId - ID of the disk to partition.
   * @param { int } type - Partition type.
   * @param { AsyncCallback<void> } callback - Callback that returns no value.
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
   * Partitions a disk. This API uses a promise to return the result. The system supports access to multi-partition
   * disks. Currently, this API can partition a disk into only one partition.
   *
   * @permission ohos.permission.MOUNT_FORMAT_MANAGER
   * @param { string } diskId - ID of the disk to partition.
   * @param { int } type - Partition type.
   * @returns { Promise<void> } Promise that returns no value.
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