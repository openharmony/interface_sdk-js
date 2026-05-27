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
import Want from './@ohos.app.ability.Want';

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

    /**
    * Extra information of the volume.
    *
    * @syscap SystemCapability.FileManagement.StorageService.Volume
    * @systemapi
    * @stagemodelonly
    * @since 26.0.0 dynamic&static
    */
    extraInfo?: string;
  }

  /**
  * Enumerates the verify type for burn data.
  *
  * @syscap SystemCapability.FileManagement.StorageService.Volume
  * @systemapi
  * @stagemodelonly
  * @since 26.0.0 dynamic&static
  */
  export enum VerifyType {
    /**
      * Key data verification type.
      *
      * @syscap SystemCapability.FileManagement.StorageService.Volume
      * @systemapi
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
      KEY_DATA = 0,
    /**
      * Full data verification type.
      *
      * @syscap SystemCapability.FileManagement.StorageService.Volume
      * @systemapi
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
      FULL_DATA = 1
  }

  /**
   * Disk type.
   *
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum DiskType {
    /**
     * The type of sd card.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SD_CARD = 1,

    /**
     * The type of usb flash.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    USB_FLASH = 2,

    /**
     * The type of CD_DVD_BD.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CD_DVD_BD = 3,

    /**
     * The type of ssd data disk.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    DATA_DISK_SSD = 4,

    /**
     * The type of hdd data disk.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    DATA_DISK_HDD = 5,

    /**
     * Unknown disk type.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    UNKNOWN_DISK_TYPE = 255
  }

  /**
   * Disk information.
   *
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface Disk {
    /**
     * Disk ID, in the disk-{Primary device ID}-{Secondary device ID} format.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    diskId: string;

    /**
     * Disk total size.
     * <br>Unit: Byte.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    sizeBytes: long;

    /**
     * Disk type.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    diskType: DiskType;

    /**
     * Indicates that the disk can be removed.The value true indicates that the disk can be removed.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    removable: boolean;

    /**
     * Indicates the volume of a disk. A disk may contain multiple volumes.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    volumeIds: Array<string>;

    /**
     * Disk information extension field.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    extraInfo: string;
  }

  /**
   * Partition information.
   *
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface PartitionInfo {
    /**
     * Partition number.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    partitionNum: int;

    /**
     * Disk ID.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    diskId: string;

    /**
     * Start sector of the partition.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    startSector: long;

    /**
     * End sector of the partition.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    endSector: long;

    /**
     * Partition total size.
     * <br>Unit: Byte.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    sizeBytes: long;

    /**
     * File system type. Common file systems are **ext4**, **vfat**, **exfat**, **NTFS**, **f2fs**, and **hmfs**.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    fsType: string;
  }

  /**
   * Partition table information.
   *
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface PartitionTableInfo {
    /**
     * Disk ID.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    diskId: string;

    /**
     * Partition table type, such as 'gpt' or 'mbr'.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    tableType: string;

    /**
     * Number of partitions.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    partitionCount: int;

    /**
     * Total number of sectors.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    totalSector: long;

    /**
     * Sector size in bytes.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    sectorSize: int;

    /**
     * Alignment sector.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    alignSector: int;

    /**
     * Array of partition information.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    partitions: Array<PartitionInfo>;
  }

  /**
   * Partition creation options.
   *
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface PartitionParams {
    /**
     * Partition number.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    partitionNum: int;

    /**
     * Start sector of the partition.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    startSector: long;

    /**
     * End sector of the partition.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    endSector: long;

    /**
     * The code of file system. Common file systems are **ext4**, **vfat**, **exfat**, **NTFS**, **f2fs**, and **hmfs**.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    typeCode: string;
  }

  /**
   * Format options for partition formatting.
   *
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface FormatParams {
    /**
     * File system type, Common file systems are **ext4**, **vfat**, and **exfat**.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    fsType: string;

    /**
     * Whether to perform quick format, default value is true.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    quickFormat?: boolean;

    /**
     * Volume name after formatting.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    volumeName?: string;
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

  /**
   * Erases a volume. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } volumeId - Volume ID.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600010 - The input parameter is invalid.
   * @throws { BusinessError } 13600026 - Erase operation failed.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function erase(volumeId: string): Promise<void>;

  /**
   * Ejects a volume. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } diskId - The diskId of disk.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function eject(diskId: string): Promise<void>;

  /**
   * Creates an ISO image from a volume. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } volumeId - Volume ID.
   * @param { string } filePath - File path for the ISO image.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600010 - The input parameter is invalid.
   * @throws { BusinessError } 13600024 - Empty disc.
   * @throws { BusinessError } 13600025 - Failed to write the ISO file.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function createIsoImage(volumeId: string, filePath: string): Promise<void>;

  /**
   * Burns data to a volume. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } volumeId - Volume ID.
   * @param { Want } want - Want information about the target ability.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600010 - The input parameter is invalid.
   * @throws { BusinessError } 13600028 - Burn operation failed.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function burn(volumeId: string, want: Want): Promise<void>;

  /**
   * Gets the operation progress of a volume. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } volumeId - Volume ID.
   * @returns { Promise<int> } Promise used to return the operation progress.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600010 - The input parameter is invalid.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getOpProcess(volumeId: string): Promise<int>;

  /**
   * Verifies burn data of a volume. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } volumeId - Volume ID.
   * @param { VerifyType } verType - Verify type.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600010 - The input parameter is invalid.
   * @throws { BusinessError } 13600030 - Verification failed.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function verifyBurnData(volumeId: string, verType: VerifyType): Promise<void>;

  /**
   * Querying Information About All Disks.
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @returns { Promise<Array<Disk>> } return Promise
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getAllDisks(): Promise<Array<Disk>>;

  /**
   * Querying disk information based on the disk ID.
   *
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @param { string } diskId - The diskId of disk.
   * @returns { Promise<Disk> } return Promise
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13600010 - The input parameter is invalid.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getDiskById(diskId: string): Promise<Disk>;

  /**
   * Obtains partition table information based on the disk ID. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MOUNT_FORMAT_MANAGER
   * @param { string } diskId - Disk ID.
   * @returns { Promise<PartitionTableInfo> } Promise used to return the partition table information of the
   * current disk ID.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13600010 - The input parameter is invalid.
   * @throws { BusinessError } 13600021 - Get partition table failed.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getPartitionTable(diskId: string): Promise<PartitionTableInfo>;

  /**
   * Creates a partition on a disk. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MOUNT_FORMAT_MANAGER
   * @param { string } diskId - Disk ID.
   * @param { PartitionParams } params - Partition creation options.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13600010 - The input parameter is invalid.
   * @throws { BusinessError } 13600022 - Create partition failed.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function createPartition(diskId: string, params: PartitionParams): Promise<void>;

  /**
   * Deletes a partition on a disk. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MOUNT_FORMAT_MANAGER
   * @param { string } diskId - Disk ID.
   * @param { number } partitionNum - Partition number.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13600010 - The input parameter is invalid.
   * @throws { BusinessError } 13600023 - Delete partition failed.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function deletePartition(diskId: string, partitionNum: int): Promise<void>;

  /**
   * Formats a partition on a disk. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MOUNT_FORMAT_MANAGER
   * @param { string } diskId - Disk ID.
   * @param { number } partitionNum - Partition number.
   * @param { FormatParams } params - Format options.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 13600001 - IPC error.
   * @throws { BusinessError } 13600002 - Not supported filesystem.
   * @throws { BusinessError } 13600005 - Incorrect volume state.
   * @throws { BusinessError } 13600008 - No such object.
   * @throws { BusinessError } 13600010 - The input parameter is invalid.
   * @throws { BusinessError } 13600025 - Format partition failed.
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function formatPartition(diskId: string, partitionNum: int, params: FormatParams): Promise<void>;
}

export default volumeManager;