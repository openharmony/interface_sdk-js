/*
* Copyright (C) 2021 Huawei Device Co., Ltd.
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

import {AsyncCallback, Callback} from "./basic";

/**
 * Provides volumemanager statistics APIs
 *
 * @since 9
 * @syscap SystemCapability.FileManagement.StorageService.Volume
 * @systemapi
 */
declare namespace volumeManager {

/**
   * Get All Volumes
   * 
   * @since 9
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @systemapi
   */
 export interface Volume {
  id: string;
  uuid: string;
  diskId: string;
  description: string;
  removable: boolean;
  state: number;
  path: string;
}
/**
   * Get All Volumes
   * 
   * @since 9
   * @returns Returns the information of all volumes
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @permission ohos.permission.STORAGE_MANAGER
   * @systemapi
   */
function getAllVolumes(callback: AsyncCallback<Array<Volume>>): void;
function getAllVolumes(): Promise<Array<Volume>>;


 /**
   * Mount
   * 
   * @since 9
   * @param volumeId that indicates the volume
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @systemapi
   */
function mount(volumeId: string, callback: AsyncCallback<boolean>): void;
function mount(volumeId: string): Promise<boolean>;

/**
   * UnMount
   * 
   * @since 9
   * @param volumeId that indicates the volume
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @systemapi
   */
function unmount(volumeId: string, callback: AsyncCallback<boolean>): void;
function unmount(volumeId: string): Promise<boolean>;

/**
   * Get the volume by uuid.
   * 
   * @since 9
   * @param uuid of volume
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @permission ohos.permission.STORAGE_MANAGER
   * @systemapi
   */
function getVolumeByUuid(uuid: string, callback: AsyncCallback<Volume>): void;
function getVolumeByUuid(uuid: string): Promise<Volume>;

/**
   * Get the volume by id.
   * 
   * @since 9
   * @param volumeId that indicates the volume
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @permission ohos.permission.STORAGE_MANAGER
   * @systemapi
   */
function getVolumeById(volumeId: string, callback: AsyncCallback<Volume>): void;
function getVolumeById(volumeId: string): Promise<Volume>;

/**
   * Set the description of volume.
   * 
   * @since 9
   * @param uuid of volume
   * @param new description of volume
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @permission ohos.permission.MOUNT_UNMOUNT_MANAGER
   * @systemapi
   */
function setVolumeDescription(uuid: string, description: string, callback: AsyncCallback<void>): void;
function setVolumeDescription(uuid: string, description: string): Promise<void>;

/**
   * Format.
   * 
   * @since 9
   * @param volumeId that indicates the volume
   * @param the file system type after formatting
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @permission ohos.permission.MOUNT_FORMAT_MANAGER
   * @systemapi
   */
function format(volumeId: string, fsType: string, callback: AsyncCallback<void>): void;
function format(volumeId: string, fsType: string): Promise<void>;
  
 
/**
   * Partition.
   * 
   * @since 9
   * @param diskId that indicates the disk
   * @param type of partition such as private partition or public partition
   * @syscap SystemCapability.FileManagement.StorageService.Volume
   * @permission ohos.permission.MOUNT_FORMAT_MANAGER
   * @systemapi
   */
function partition(diskId: string, type: number, callback: AsyncCallback<void>): void;
function partition(diskId: string, type: number): Promise<void>;
}

export default volumeManager;
