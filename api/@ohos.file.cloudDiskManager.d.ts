/*
 * Copyright (c) 2025-2026 Huawei Device Co., Ltd.
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
 * @file Cloud Disk Management
 * @kit CoreFileKit
 */

import type { Callback } from './@ohos.base';

/**
 * This module enables the File Manager to obtain the sync root information registered by third-party cloud disks.
 *
 * @syscap SystemCapability.FileManagement.CloudDiskManager
 * @systemapi
 * @since 21 dynamic
 * @since 23 static
 */
declare namespace cloudDiskManager {
  /**
   * Enumerates the states of the sync root.
   *
   * @syscap SystemCapability.FileManagement.CloudDiskManager
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  enum SyncFolderState {
    /**
     * The sync root is inactive.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    INACTIVE = 0,

    /**
     * The sync root is active.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ACTIVE = 1
  }

  /**
   * Encapsulates the sync root information.
   *
   * @syscap SystemCapability.FileManagement.CloudDiskManager
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  interface SyncFolder {
    /**
     * URI of the sync root.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    path: string;

    /**
     * Bundle name of the sync root.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * State of the sync root.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    state: SyncFolderState;

    /**
     * Resource ID, which can be mapped to the alias displayed in the File Manager list. The default value is
     * **undefined**.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    displayNameResId?: int;

    /**
     * Custom alias displayed in the File Manager list. The default value is **undefined**.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    customAlias?: string;

    /**
     * Whether the synchronization root supports placeholders.
     * Value constraint: true indicates that the synchronization root supports placeholders. false indicates that the
     * synchronization root does not support placeholders. Default value: false.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    isSupportPlaceHolder?: boolean;
  }

  /**
   * A sync root management class that enables the File Manager to access the sync root information registered by third-
   * party cloud disks.
   *
   * @syscap SystemCapability.FileManagement.CloudDiskManager
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  class SyncFolderAccessor {
    /**
     * A constructor used to create a **SyncFolderAccessor** instance.
     *
     * @permission ohos.permission.ACCESS_CLOUD_DISK_INFO
     * @throws { BusinessError } 201 - Permission verification failed,
     * @throws { BusinessError } 202 - Permission verification failed.
     *     application which is not a system application uses system API.
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * Obtains information about all registered sync roots. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_CLOUD_DISK_INFO
     * @returns { Promise<Array<SyncFolder>> } Promise that returns the sync root list of all cloud disk applications.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 801 - Device not supported.
     * @throws { BusinessError } 34400003 - IPC communication failed.
     * @throws { BusinessError } 34400014 - Temporary failure. Retry is recommended (e.g., network issues).
     * @throws { BusinessError } 34400015 - Cloud disk is not allowed on this device.
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    getAllSyncFolders(): Promise<Array<SyncFolder>>;
  }

  /**
   * Enumerates the callback types for cloud file data fetching.
   *
   * @syscap SystemCapability.FileManagement.CloudDiskManager
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  enum CallbackType {
    /**
     * Fetch cloud file data (hydrate).
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    FETCH_DATA = 0,

    /**
     * Cancel fetching cloud file data (dehydrate).
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    CANCEL_FETCH_DATA = 1,

    /**
     * Authorization for dehydrate.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    DEHYDRATE = 2
  }

  /**
   * Enumerates the priority levels of the hydrate task.
   *
   * @syscap SystemCapability.FileManagement.CloudDiskManager
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  enum HydratePriority {
    /**
     * Low priority.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    LOW = 0,

    /**
     * Normal priority.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    NORMAL = 1,

    /**
     * High priority.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    HIGH = 2
  }

  /**
   * Enumerates the states of the hydrate progress.
   *
   * @syscap SystemCapability.FileManagement.CloudDiskManager
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  enum HydrateProgressState {
    /**
     * The hydrate task has been created, but the FFRT worker has not been dispatched yet.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    PENDING = 0,

    /**
     * The hydrate is in progress.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    IN_PROGRESS = 1,

    /**
     * The hydrate is completed.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    COMPLETED = 2,

    /**
     * The hydrate is cancelled by the user, a crash, or the application giving up.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    CANCELLED = 3
  }

  /**
   * Encapsulates the hydrate progress information.
   *
   * @syscap SystemCapability.FileManagement.CloudDiskManager
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  interface HydrateProgress {
    /**
     * Original absolute path of the file, consistent with the one passed in to hydratePlaceholder.
     * The maximum length is 4096 and cannot be empty.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    filePath: string;

    /**
     * State of the hydrate progress.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    state: HydrateProgressState;

    /**
     * Number of bytes downloaded. Valid only when state is IN_PROGRESS.
     * Unit: Byte.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    processedSize: long;

    /**
     * Total size of the file being hydrated, in bytes.
     * Unit: Byte.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    totalSize: long;
  }

  /**
   * A class that enables the File Manager to access cloud disk system capabilities, such as
   * hydrating and dehydrating files.
   *
   * @syscap SystemCapability.FileManagement.CloudDiskManager
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  class CloudDiskSystemAccessor {
    /**
     * A constructor used to create a **CloudDiskSystemAccessor** instance.
     *
     * @permission ohos.permission.ACCESS_CLOUD_DISK_INFO
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 34400014 - Temporary failure. Failed to initialize the native accessor instance.
     *     Please try again.
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    constructor();

    /**
     * Subscribes to progress events for hydration and cancellation operations invoked on this instance.
     * The callback is selected by the calling instance, regardless of the target file.
     * Only one callback can be registered for this instance at a time.
     * Repeated subscriptions with valid arguments retain the existing callback without reporting
     * a duplicate-registration error.
     * Subscribing after a task starts, or subscribing again after calling offHydrateProgress, receives subsequent
     * events routed to this instance. Earlier events are not replayed.
     *
     * @permission ohos.permission.ACCESS_CLOUD_DISK_INFO
     * @param { Callback<HydrateProgress> } callback - Callback invoked when the hydrate progress changes.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 801 - This feature is not supported on the device.
     * @throws { BusinessError } 34400003 - IPC communication failed.
     * @throws { BusinessError } 34400008 - No sync root is registered,
     *     or the registered sync roots cannot be queried.
     * @throws { BusinessError } 34400014 - Temporary failure. Failed to initialize the callback,
     *     resolve the user account, or complete an internal operation. Please try again.
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    onHydrateProgress(callback: Callback<HydrateProgress>): void;

    /**
     * Unsubscribes this instance from hydrate progress events without cancelling its hydrate tasks.
     * Subscriptions registered by other instances are not affected.
     * If no callback is registered, this method succeeds after permission and parameter checks.
     *
     * @permission ohos.permission.ACCESS_CLOUD_DISK_INFO
     * @param { Callback<HydrateProgress> } [callback] - Callback invoked when the hydrate progress changes.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     *     This method does not accept arguments.
     * @throws { BusinessError } 801 - This feature is not supported on the device.
     * @throws { BusinessError } 34400003 - IPC communication failed.
     * @throws { BusinessError } 34400008 - No sync root is registered,
     *     or the registered sync roots cannot be queried when unregistering this instance's callback from the service.
     * @throws { BusinessError } 34400014 - Temporary failure while unregistering the callback. Please try again.
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    offHydrateProgress(callback?: Callback<HydrateProgress>): void;

    /**
     * Hydrates a placeholder file. This API uses a promise to return the result.
     * Hydration progress is delivered to the hydrateProgress callback of the instance that starts the task.
     * If this instance successfully cancels a task, the CANCELLED event is delivered only to this instance,
     * even if another instance started the task. The call's result is also returned through its promise.
     * A callback does not have to be registered before starting or cancelling a task. If the cancelling instance
     * has no registered callback, its cancellation event is not delivered to another instance or replayed later.
     * Automatic cancellation by the service is routed to the instance that started the task.
     *
     * @permission ohos.permission.ACCESS_CLOUD_DISK_INFO
     * @param { string } filePath - Path of the placeholder file to hydrate.
     *     <br>The maximum length is 4096 and cannot be empty.
     * @param { CallbackType } callbackType - Callback type for cloud file data fetching.
     * @param { HydratePriority } priority - Priority of the hydrate task.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 801 - This feature is not supported on the device or file system.
     * @throws { BusinessError } 34400001 - The input parameter is invalid.
     *     The service rejected the path, callback type, or file metadata.
     *     CallbackType.DEHYDRATE is not supported by this operation.
     * @throws { BusinessError } 34400003 - IPC communication failed.
     * @throws { BusinessError } 34400008 - No sync root is registered,
     *     or the registered sync roots cannot be queried.
     * @throws { BusinessError } 34400010 - The sync root path does not exist, or the target file
     *     or sync root mount path is missing during path resolution.
     * @throws { BusinessError } 34400014 - Temporary failure. Failed to resolve the user account, access the file,
     *     prepare a hydrate task, schedule the request, or complete an internal operation. Please try again.
     * @throws { BusinessError } 34400017 - The target path is not a placeholder file.
     * @throws { BusinessError } 34400019 - A hydrate task for the target file is already pending or in progress.
     * @throws { BusinessError } 34400021 - The cloud disk provider's callback table is not registered,
     *     or no usable sync root matches the path.
     * @throws { BusinessError } 34400023 - A path component that must be a directory is not a directory.
     * @throws { BusinessError } 34400024 - A required file or directory does not exist while resolving
     *     or accessing the target path.
     * @throws { BusinessError } 34400025 - The file name or path is too long.
     * @throws { BusinessError } 34400031 - The placeholder is already fully hydrated.
     * @throws { BusinessError } 34400032 - Cancellation was requested, but no hydrate task is pending or in progress.
     * @throws { BusinessError } 34400033 - The placeholder state or its stored attribute is invalid.
     * @throws { BusinessError } 34400034 - The limit on pending hydrate tasks has been reached.
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    hydratePlaceholder(filePath: string, callbackType: CallbackType, priority: HydratePriority): Promise<void>;

    /**
     * Dehydrates a file. This API uses a promise to return the result.
     * The file can have been hydrated by another instance. This operation does not emit hydrateProgress events.
     *
     * @permission ohos.permission.ACCESS_CLOUD_DISK_INFO
     * @param { string } filePath - Path of the file to dehydrate.
     *     <br>The maximum length is 4096 and cannot be empty.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 801 - This feature is not supported on the device or file system.
     * @throws { BusinessError } 34400001 - The input parameter is invalid.
     *     The service rejected the path or a file operation argument,
     *     the target is a directory, or the provider request could not be serialized.
     * @throws { BusinessError } 34400003 - IPC communication with the service or cloud disk provider failed.
     * @throws { BusinessError } 34400008 - No sync root is registered,
     *     or the registered sync roots cannot be queried.
     * @throws { BusinessError } 34400010 - The sync root path does not exist, or the target file
     *     or sync root mount path is missing during path resolution.
     * @throws { BusinessError } 34400014 - Temporary failure. Failed to resolve the user account, access the file,
     *     restore its logical size, schedule the request, or complete an internal operation. Please try again.
     * @throws { BusinessError } 34400017 - The target path is not a placeholder file.
     * @throws { BusinessError } 34400019 - A hydrate task for the target file is pending or in progress.
     * @throws { BusinessError } 34400020 - The available disk space is insufficient,
     *     or the disk quota has been exhausted.
     * @throws { BusinessError } 34400021 - The cloud disk provider's callback table is not registered,
     *     or no usable sync root matches the path.
     * @throws { BusinessError } 34400023 - A path component that must be a directory is not a directory.
     * @throws { BusinessError } 34400024 - A required file or directory does not exist while resolving
     *     or accessing the target path.
     * @throws { BusinessError } 34400025 - The file name or path is too long.
     * @throws { BusinessError } 34400029 - The cloud disk provider did not approve the dehydration request.
     * @throws { BusinessError } 34400033 - The placeholder state or its stored attribute is invalid.
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    dehydrateFile(filePath: string): Promise<void>;
  }
}

export default cloudDiskManager;