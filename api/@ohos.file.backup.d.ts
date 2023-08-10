/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import type { AsyncCallback, Callback } from './@ohos.base';

/**
 * Module providing backup and restore capabilities.
 *
 * @namespace backup
 * @syscap SystemCapability.FileManagement.StorageService.Backup
 * @systemapi
 * @since 10
 */
declare namespace backup {
  /**
   * Corresponding to a file's metadata. FileMeta is useful when doing IPC with the backup service.
   *
   * @interface FileMeta
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 10
   */
  interface FileMeta {
    /**
     * Indicates the name of a bundle.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10
     */
    bundleName: string;

    /**
     * Indicates a uri to a file.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10
     */
    uri: string;
  }

  /**
   * Corresponding to a file's data. Filedata is useful when doing IPC with the backup service.
   *
   * @interface FileData
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 10
   */
  interface FileData {
    /**
     * Indicates a native file descriptor typically retrieved from the backup service to hold the file's content.
     *
     * @type { number }
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10
     */
    fd: number;
  }

  /**
   * Corresponding to a file, including its metadata and data.
   * File is useful when doing IPC with the backup service.
   *
   * @interface File
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 10
   */
  interface File extends FileMeta, FileData {}

  /**
   * Obtain a Json file that describes local capabilities.
   *
   * @permission ohos.permission.BACKUP
   * @returns { Promise<FileData> } A FileData holding all the local capabilities. The returned file is a temporal file that will be
   *     deleted automatically when closed.
   * @throws { BusinessError } 13600001 - IPC error
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 10
   */
  function getLocalCapabilities(): Promise<FileData>;

  /**
   * Obtain a Json file that describes local capabilities.
   *
   * @permission ohos.permission.BACKUP
   * @param { AsyncCallback<FileData> } callback A callback method, the argument FileData will holding all the local capabilities.
   *     The returned file is a temporal file that will be deleted automatically when closed.
   * @throws { BusinessError } 13600001 - IPC error
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 10
   */
  function getLocalCapabilities(callback: AsyncCallback<FileData>): void;

  /**
   * General callbacks for both backup and restore procedure.
   * The backup service will notify the client by these callbacks.
   *
   * @interface GeneralCallbacks
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 10
   */
  interface GeneralCallbacks {
    /**
     * Callback called when the backup service tries to send files to the client.
     * The File argument indicates a file to send to the client.
     *     The returned file is owned by the backup service and will be cleaned by the service once the file is closed.
     *
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10
     */
    onFileReady: AsyncCallback<File>;

    /**
     * Callback called when a backup/restore procedure for an bundle is started.
     * The return string argument indicates the name of the bundle.
     *
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10
     */
    onBundleBegin: AsyncCallback<string>;

    /**
     * Callback called when a backup/restore procedure for an bundle ends successfully or gets aborted unexpectedly.
     * The return string argument indicates the name of the bundle.
     *
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10
     */
    onBundleEnd: AsyncCallback<string>;

    /**
     * Callback called when the all the bundles to backup/restore are done or aborted unexpectedly.
     *
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10
     */
    onAllBundlesEnd: AsyncCallback<undefined>;

    /**
     * Callback called when the backup service dies unexpectedly.
     *
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10
     */
    onBackupServiceDied: Callback<undefined>;
  }

  /**
   * Control class for backup procedure.
   *
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 10
   */
  class SessionBackup {
    /**
     * Constructor for obtaining the instance of the SessionBackup class.
     *
     * @permission ohos.permission.BACKUP
     * @param { GeneralCallbacks } callbacks Callbacks to be registered for the backup.
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10
     */
    constructor(callbacks: GeneralCallbacks);

    /**
     * Append new bundles to backup.
     *
     * @permission ohos.permission.BACKUP
     * @param { string[] } bundlesToBackup Bundles to backup.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10
     */
    appendBundles(bundlesToBackup: string[]): Promise<void>;

    /**
     * Append new bundles to backup.
     *
     * @permission ohos.permission.BACKUP
     * @param { string[] } bundlesToBackup Bundles to backup.
     * @param { AsyncCallback<void> } callback Asynchronous callback to be called when appendBundles has finished.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10
     */
    appendBundles(bundlesToBackup: string[], callback: AsyncCallback<void>): void;
  }

  /**
   * Control class for restore procedure.
   *
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @since 10
   */
  class SessionRestore {
    /**
     * Constructor for obtaining the instance of the SessionBackup class.
     *
     * @permission ohos.permission.BACKUP
     * @param { GeneralCallbacks } callbacks Callbacks to be registered for the restore.
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10
     */
    constructor(callbacks: GeneralCallbacks);

    /**
     * Append new bundles to be restore up during the restore.
     *
     * @permission ohos.permission.BACKUP
     * @param { number } remoteCapabilitiesFd Opened JSON file that stores remote device capabilities.
     *     You can use the getLocalCapabilities method to obtain the value.
     * @param { string[] } bundlesToBackup Bundles to restore.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10
     */
    appendBundles(remoteCapabilitiesFd: number, bundlesToBackup: string[]): Promise<void>;

    /**
     * Append new bundles to be restore up during the restore.
     *
     * @permission ohos.permission.BACKUP
     * @param { number } remoteCapabilitiesFd Opened JSON file that stores remote device capabilities.
     *     You can use the getLocalCapabilities method to obtain the value.
     * @param { string[] } bundlesToBackup Bundles to restore.
     * @param { AsyncCallback<void> } callback Asynchronous callback to be called when appendBundles has finished.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10
     */
    appendBundles(remoteCapabilitiesFd: number, bundlesToBackup: string[], callback: AsyncCallback<void>): void;

    /**
     * Publish the file handle to the backup service to make the service aware that the file's content is ready.
     * This interface is part of the zero-copy feature.
     *
     * @permission ohos.permission.BACKUP
     * @param { FileMeta } fileMeta Metadata of the file to be sent. Make sure that the backup framework holds
     *     this file by calling getFileHandle.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10
     */
    publishFile(fileMeta: FileMeta): Promise<void>;

    /**
     * Publish the file handle to the backup service to make the service aware that the file's content is ready.
     * This interface is part of the zero-copy feature.
     *
     * @permission ohos.permission.BACKUP
     * @param { FileMeta } fileMeta Metadata of the file to be sent. Make sure that the backup framework holds
     *     this file by calling getFileHandle.
     * @param { AsyncCallback<void> } callback Asynchronous callback to be called when publishFile has finished.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10
     */
    publishFile(fileMeta: FileMeta, callback: AsyncCallback<void>): void;

    /**
     * Request to get a shared file from the service. This interface is part of the zero-copy feature.
     * Developers could get the file through onFileReady callback.
     * When the client accomplished the file, use publishFile to publish.
     *
     * @permission ohos.permission.BACKUP
     * @param { FileMeta } fileMeta Metadata of the file to be sent. Note that all the files should come
     *     from the backup procedure or the getLocalCapabilities method.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10
     */
    getFileHandle(fileMeta: FileMeta): Promise<void>;

    /**
     * Request to get a shared file from the service. This interface is part of the zero-copy feature.
     * Developers could get the file through onFileReady callback.
     * When the client accomplished the file, use publishFile to publish.
     *
     * @permission ohos.permission.BACKUP
     * @param { FileMeta } fileMeta Metadata of the file to be sent. Note that all the files should come
     *     from the backup procedure or the getLocalCapabilities method.
     * @param { AsyncCallback<void> } callback Asynchronous callback to be called when getFileHandle has finished.
     * @throws { BusinessError } 13600001 - IPC error
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.StorageService.Backup
     * @systemapi
     * @since 10
     */
    getFileHandle(fileMeta: FileMeta, callback: AsyncCallback<void>): void;
  }
}
export default backup;
